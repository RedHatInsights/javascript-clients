package com.redhat.platform.experience;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.text.CaseUtils;
import org.openapitools.codegen.*;
import org.openapitools.codegen.languages.TypeScriptAxiosClientCodegen;
import org.openapitools.codegen.meta.features.DocumentationFeature;
import org.openapitools.codegen.meta.features.SecurityFeature;

import io.swagger.v3.oas.models.media.Schema;
import io.swagger.v3.oas.models.Operation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.PathItem;
import io.swagger.v3.parser.util.SchemaTypeUtil;

import java.util.*;
import java.io.File;
import java.io.IOException;
import java.io.Writer;

import org.openapitools.codegen.model.ModelMap;
import org.openapitools.codegen.model.ModelsMap;
import org.openapitools.codegen.model.OperationMap;
import org.openapitools.codegen.model.OperationsMap;
import org.openapitools.codegen.utils.ModelUtils;

import com.google.common.collect.ImmutableMap;
import com.samskivert.mustache.Mustache;
import com.samskivert.mustache.Template;

public class TypescriptAxiosWebpackModuleFederationGenerator extends TypeScriptAxiosClientCodegen {

  // source folder where to write the files
  protected String sourceFolder = "src";
  protected String apiVersion = "1.0.0";
  public static final String LIST_PARAM = "listParam";

  /**
   * Configures the type of generator.
   *
   * @return  the CodegenType for this generator
   * @see     org.openapitools.codegen.CodegenType
   */
  public CodegenType getTag() {
    return CodegenType.OTHER;
  }

  /**
   * Configures a friendly name for the generator.  This will be used by the generator
   * to select the library with the -g flag.
   *
   * @return the friendly name for the generator
   */
  public String getName() {
    return "typescript-axios-webpack-module-federation";
  }

  /**
   * Returns human-friendly help for the generator.  Provide the consumer with help
   * tips, parameters here
   *
   * @return A string value for the help message
   */
  public String getHelp() {
    return "Generates a typescript-axios-webpack-module-federation client library.";
  }

  public TypescriptAxiosWebpackModuleFederationGenerator() {
    super();

    modifyFeatureSet(features -> features
                .includeDocumentationFeatures(DocumentationFeature.Readme)
                .includeSecurityFeatures(SecurityFeature.BearerToken));

        // clear import mapping (from default generator) as TS does not use it
        // at the moment
        importMapping.clear();

        reservedWords.add("options");

    // set the output folder here
    outputFolder = "generated-code/typescript-axios-webpack-module-federation";

    /**
     * Api classes.  You can write classes for each Api file with the apiTemplateFiles map.
     * as with models, add multiple entries with different extensions for multiple files per
     * class
     */
    apiTemplateFiles.put(
      "coreApi.mustache",   // the template to use
      "index.ts");       // the extension for each file to write

    /**
     * Template Location.  This is the location which templates will be read from.  The generator
     * will use the resource stream to attempt to read the templates.
     */
    templateDir = "typescript-axios-webpack-module-federation";

    /**
     * Reserved words.  Override this with reserved words specific to your language
     */
    reservedWords = new HashSet<String> (
      Arrays.asList(
        "sample1",  // replace with static values
        "sample2")
    );

    /**
     * Additional Properties.  These values can be passed to the templates and
     * are available in models, apis, and supporting files
     */
    additionalProperties.put("apiVersion", apiVersion);

    /**
     * Supporting Files.  You can write single files for the generator with the
     * entire object tree available.  If the input file has a suffix of `.mustache
     * it will be processed by the template engine.  Otherwise, it will be copied
     */
    supportingFiles.add(new SupportingFile("index.mustache",   // the input template or file
      "",                                                       // the destination folder, relative `outputFolder`
      "index.ts")                                          // the output file
    );
    supportingFiles.add(new SupportingFile("indexTypes.mustache",
    "types", 
    "index.ts")
    );

    this.cliOptions.add(new CliOption(LIST_PARAM, "Setting this property to true will generate APIs with list of params.", SchemaTypeUtil.BOOLEAN_TYPE).defaultValue(Boolean.TRUE.toString()));
  }

  /**
   * Escapes a reserved word as defined in the `reservedWords` array. Handle escaping
   * those terms here.  This logic is only called if a variable matches the reserved words
   *
   * @return the escaped term
   */
  @Override
  public String escapeReservedWord(String name) {
    return "_" + name;  // add an underscore to the name
  }

  @Override
  public String toModelFilename(String name) {
      return "types" + File.separator + name;
  }

  @Override
  public String toApiFilename(String name) {
      return name + File.separator;
  }

  /**
     * Get operationId from the operation object, and if it's blank, generate a new one from the given parameters.
     *
     * @param operation  the operation object
     * @param path       the path of the operation
     * @param httpMethod the HTTP method of the operation
     * @return the (generated) operationId
     */
    protected String getOrGenerateOperationId(Operation operation, String path, String httpMethod) {
      String operationId = operation.getOperationId();
      if (StringUtils.isBlank(operationId)) {
          String tmpPath = path;
          tmpPath = tmpPath.replaceAll("\\{", "");
          tmpPath = tmpPath.replaceAll("\\}", "");
          String[] parts = (tmpPath + "/" + httpMethod).split("/");
          StringBuilder builder = new StringBuilder();
          if ("/".equals(tmpPath)) {
              // must be root tmpPath
              builder.append("root");
          }
          for (String part : parts) {
              if (part.length() > 0) {
                  if (builder.toString().length() == 0) {
                      part = Character.toLowerCase(part.charAt(0)) + part.substring(1);
                  } else {
                      part = CaseUtils.toCamelCase(part, true);
                  }
                  builder.append(part);
              }
          }
          operationId = sanitizeName(builder.toString());
      }
      return operationId;
  }

  @Override
  public void preprocessOpenAPI(OpenAPI openAPI) {
      Map<String, PathItem> pathItems = openAPI.getPaths();
      if (pathItems != null) {
        for (Map.Entry<String, PathItem> e : pathItems.entrySet()) {
          for (Map.Entry<PathItem.HttpMethod, Operation> op : e.getValue().readOperationsMap().entrySet()) {
            List<String> tags = new ArrayList<String>();
            tags.add(getOrGenerateOperationId(op.getValue(), e.getKey(), op.getKey().toString()));
            op.getValue().setTags(tags);
          }
        }
      }
      super.preprocessOpenAPI(openAPI);
  }

  /**
   * override with any special text escaping logic to handle unsafe
   * characters so as to avoid code injection
   *
   * @param input String to be cleaned up
   * @return string with unsafe characters removed or escaped
   */
  @Override
  public String escapeUnsafeCharacters(String input) {
    //TODO: check that this logic is safe to escape unsafe characters to avoid code injection
    return input;
  }

  /**
   * Escape single and/or double quote to avoid code injection
   *
   * @param input String to be cleaned up
   * @return string with quotation mark removed or escaped
   */
  public String escapeQuotationMark(String input) {
    //TODO: check that this logic is safe to escape quotation mark to avoid code injection
    return input.replace("\"", "\\\"");
  }

  /**
   * Overriding toRegularExpression() to avoid escapeText() being called,
   * as it would return a broken regular expression if any escaped character / metacharacter were present.
   */
  @Override
  public String toRegularExpression(String pattern) {
      return addRegularExpressionDelimiter(pattern);
  }

  @Override
  protected void updatePropertyForAnyType(CodegenProperty property, Schema p) {
      // The 'null' value is allowed when the OAS schema is 'any type'.
      // See https://github.com/OAI/OpenAPI-Specification/issues/1389
      // custom line here, do not set property.isNullable = true
      if (languageSpecificPrimitives.contains(property.dataType)) {
          property.isPrimitiveType = true;
      }
      if (ModelUtils.isMapSchema(p)) {
          // an object or anyType composed schema that has additionalProperties set
          // some of our code assumes that any type schema with properties defined will be a map
          // even though it should allow in any type and have map constraints for properties
          updatePropertyForMap(property, p);
      }
  }

  @Override
  public OperationsMap postProcessOperationsWithModels(OperationsMap objs, List<ModelMap> allModels) {
      objs = super.postProcessOperationsWithModels(objs, allModels);
      this.updateOperationParameterForEnum(objs);
      OperationMap vals = objs.getOperations();
      List<CodegenOperation> operations = vals.getOperation();
      /*
          Filter all the operations that are multipart/form-data operations and set the vendor extension flag
          'multipartFormData' for the template to work with.
        */
      operations.stream()
              .filter(op -> op.hasConsumes)
              .filter(op -> op.consumes.stream().anyMatch(opc -> opc.values().stream().anyMatch("multipart/form-data"::equals)))
              .forEach(op -> op.vendorExtensions.putIfAbsent("multipartFormData", true));

      return objs;
  }

  private void updateOperationParameterForEnum(OperationsMap operations) {
      // This method will add extra information as to whether or not we have enums and
      // update their names with the operation.id prefixed.
      // It will also set the uniqueId status if provided.
      for (CodegenOperation op : operations.getOperations().getOperation()) {
          for (CodegenParameter param : op.allParams) {
              if (Boolean.TRUE.equals(param.isEnum)) {
                  param.datatypeWithEnum = param.datatypeWithEnum
                          .replace(param.enumName, op.operationIdCamelCase + param.enumName);
              }
          }
      }
  }

  @Override
  public Map<String, ModelsMap> postProcessAllModels(Map<String, ModelsMap> objs) {
      Map<String, ModelsMap> result = super.postProcessAllModels(objs);
      for (ModelsMap entry : result.values()) {
          for (ModelMap model : entry.getModels()) {
              CodegenModel codegenModel = model.getModel();
              model.put("hasAllOf", codegenModel.allOf.size() > 0);
              model.put("hasOneOf", codegenModel.oneOf.size() > 0);
          }
      }
      return result;
  }

  @Override
  public void postProcessParameter(CodegenParameter parameter) {
      super.postProcessParameter(parameter);
      if (parameter.isFormParam && parameter.isArray && "binary".equals(parameter.dataFormat)) {
          parameter.isCollectionFormatMulti = true;
      }
  }

  @Override
  public ModelsMap postProcessModels(ModelsMap objs) {
      List<ModelMap> models = postProcessModelsEnum(objs).getModels();
      for (ModelMap mo  : models) {
        CodegenModel cm = mo.getModel();

        // Deduce the model file name in kebab case
        cm.classFilename = cm.classname.replaceAll("([a-z0-9])([A-Z])", "$1-$2").toLowerCase(Locale.ROOT);
    }

    for (ModelMap mo  : models) {
      CodegenModel cm = mo.getModel();

      // Deduce the model file name in kebab case
      cm.classFilename = cm.classname.replaceAll("([a-z0-9])([A-Z])", "$1-$2").toLowerCase(Locale.ROOT);

      cm.imports = new TreeSet<>(cm.imports);
      // name enum with model name, e.g. StatusEnum => PetStatusEnum
      for (CodegenProperty var : cm.vars) {
          if (Boolean.TRUE.equals(var.isEnum)) {
              var.datatypeWithEnum = var.datatypeWithEnum.replace(var.enumName, cm.classname + var.enumName);
              var.enumName = var.enumName.replace(var.enumName, cm.classname + var.enumName);
          }
      }
      if (cm.parent != null) {
          for (CodegenProperty var : cm.allVars) {
              if (Boolean.TRUE.equals(var.isEnum)) {
                  var.datatypeWithEnum = var.datatypeWithEnum.replace(var.enumName, cm.classname + var.enumName);
                  var.enumName = var.enumName.replace(var.enumName, cm.classname + var.enumName);
              }
          }
      }
  }

    // Apply the model file name to the imports as well
    for (Map<String, String> m : objs.getImports()) {
        String javaImport = m.get("import").substring(modelPackage.length() + 1);
        m.put("class", javaImport);
        m.put("filename", javaImport.replaceAll("([a-z0-9])([A-Z])", "$1-$2").toLowerCase(Locale.ROOT));
    }
    return objs;
  }

  @Override
    protected ImmutableMap.Builder<String, Mustache.Lambda> addMustacheLambdas() {
        return super.addMustacheLambdas()
            .put("prependNot", new ReplaceDotsWithUnderscoreLambda());
    }

    private static class ReplaceDotsWithUnderscoreLambda implements Mustache.Lambda {
      @Override
      public void execute(Template.Fragment fragment, Writer writer) throws IOException {
        if (fragment.execute().indexOf("!") != -1) {
          writer.write("Not" + fragment.execute().split("~")[0]);
        } else {
          writer.write(fragment.execute().split("~")[0]);
        }
      }
    }
}

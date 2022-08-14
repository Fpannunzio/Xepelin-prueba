function doGet() {

  const htmlService =  HtmlService.createTemplateFromFile("login").evaluate().addMetaTag("viewport", "width=device-width, intial-scale=1.0")
  return htmlService;
}

function include (filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}
function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5l6mnhHUD1D":
        Script1();
        break;
  }
}

function Script1()
{
      var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;
    var player = GetPlayer();
    var name = player.GetVar("uName"); /* Replace uName with the Storyline variable holding the user's name */
    var doc = new jsPDF({
      orientation: 'landscape' /* Remove this line of code if your certificate is in portrait orientation */
    })
    var img = new Image;
    img.onload = function () {
      doc.addImage(this, 0, 0, 297, 210);
      doc.setFontSize(32.1); /* Set the font size by changing the number between the parentheses */
      doc.setTextColor(99, 43, 43); /* Change the RGB text color by changing the numbers between the parentheses */
      doc.setFont(undefined, 'bold');
      doc.text(name, (doc.internal.pageSize.width / 2), 120, null, null, 'center'); /* This tells the PDF to add text to the page. The first argument is the text to add (in this case a JavaScript variable), the second is the x-coordinate (in this case we’re using a function to find a middle point for the document), the third is the y-coordinate (in millimeters), the fourth and fifth arguments are null, and the sixth argument says that the text should be centered */
      doc.setFont(undefined, 'normal');
      doc.setFontSize(15);
      doc.text(date, (doc.internal.pageSize.width / 2), 172, null, null, 'center'); /* See above for the full explanation of the doc.text() function */
      doc.save("Certificate.pdf"); /* Swap out ‘Certificate’ with what you want your certificate to be named */
    };
    img.crossOrigin = "";
    img.src = "certificate.png"; /* Change the file name between these quotes to the file that you exported as the base certificate */
}


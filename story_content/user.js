function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EiuoGlyoo6":
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
    var name = player.GetVar("uName");
    var doc = new jsPDF({
      orientation: 'landscape'
    })
    var img = new Image;
    img.onload = function () {
      doc.addImage(this, 0, 0, 297, 210);
      doc.setFontSize(40);
      doc.setTextColor(99, 43, 43);
      doc.setFont('Lato-Black', 'bold');
      doc.text(name, (doc.internal.pageSize.width / 2), 120, null, null, 'center');
      doc.setFont('Lato-Regular', 'normal');
      doc.setFontSize(15);
      doc.text(date, (doc.internal.pageSize.width / 2), 172, null, null, 'center');
      doc.save("Certificate.pdf");
    };
    img.crossOrigin = "";
    img.src = "certificate.png";
}


import React,{Component} from 'react';
import jsPdf from 'jspdf';


export default class Generate extends Component {

    _handlePDF = () => {
      const _data = this.props.data;
      //console.log("generate pdf clicked");
      let doc = new jsPdf();

      doc.setTextColor(150);
      doc.setFont("Helvetica");
      doc.setFontType("bold");
      doc.setFontSize(25);
      doc.text(20,30,_data.title);

      doc.setFontSize(11);
      doc.setFontType("normal");
      doc.text(20,40,_data.add);
      doc.text(20,45,"M: "+_data.tel);
      doc.text(20,50,"E: "+_data.email);
      doc.text(20,55,"W: "+_data.web);
      doc.text(20,60,"L: www.linkedin.com/in/sanjeetkanwar");

      doc.setFontSize(18);
      doc.setTextColor(23,119,203);
      doc.setFontType("bold");
      doc.text(20,75,"Summary");

      doc.setFontSize(10);
      doc.setTextColor(150);
      doc.setFontType("normal");
      doc.text(20,85,"Highly driven and performance focused self-taught Frontend Developer looking to secure a junior role that will");
      doc.text(20,90,"offer opportunity for continuous growth.");

      doc.setFontSize(18);
      doc.setTextColor(23,119,203);
      doc.setFontType("bold");
      doc.text(20,100,"Experience");

      doc.setFontSize(10);
      doc.setTextColor(150);
      doc.setFontType("bold");
      doc.text(20,110,_data.exp[0].year);
      doc.text(60,110,_data.exp[0].title);

      doc.setFontType("normal");
      doc.text(60,117,_data.exp[0].des.res1);
      doc.text(60,122,_data.exp[0].des.res2);
      doc.text(60,127,_data.exp[0].des.res3);
      doc.text(60,132,_data.exp[0].des.res4);
      doc.text(60,137,"");

      doc.setFontType("bold");
      doc.text(20,145,_data.exp[1].year);
      doc.text(60,145,_data.exp[1].title);

      doc.setFontType("normal");
      doc.text(60,152,_data.exp[1].des.res1);
      doc.text(60,157,_data.exp[1].des.res2);
      doc.text(60,162,_data.exp[1].des.res3);
      doc.text(60,167,_data.exp[1].des.res4);

      doc.setFontType("bold");
      doc.text(20,179,_data.exp[2].year)
      doc.text(60,179,_data.exp[2].title);

      doc.setFontType("normal");
      doc.text(60,186,_data.exp[2].des.res1);
      doc.text(60,191,_data.exp[2].des.res2);
      doc.text(60,196,_data.exp[2].des.res3);
      doc.text(60,201,_data.exp[2].des.res4);

      doc.setFontType("bold");
      doc.setFontSize(18);
      doc.setTextColor(23,119,203);
      doc.text(20,215,"Education");

      doc.setFontSize(11);
      doc.setTextColor(150);
      doc.text(20,225,_data.edu[0].year);
      doc.text(60,225,_data.edu[0].course)
      doc.setFontType("normal");
      doc.text(60,230,_data.edu[0].school);
      doc.setFontType("bold");
      doc.text(20,240,_data.edu[1].year);
      doc.text(60,240,_data.edu[1].course);
      doc.setFontType("normal");
      doc.text(60,245,_data.edu[1].school);
      doc.setFontType("bold");
      doc.text(20,255,_data.edu[2].year);
      doc.text(60,255,_data.edu[2].course);
      doc.setFontType("normal");
      doc.text(60,260,_data.edu[2].school);

      doc.addPage();

      doc.setFontSize(18);
      doc.setTextColor(23,119,203);
      doc.setFontType("bold");
      doc.text(20,30,"Skills");

      doc.setFontSize(11);
      doc.setTextColor(150);
      doc.setFontType("bold");
      doc.text(20,45,_data.skills[0].field);
      doc.setFontType("normal");
      doc.text(60,45,"HTML5, CSS3, SASS, Javascript, JQUERY, AJAX, React JS (beginner)");
      doc.text(60,50,"JSX, ES6")
      doc.setFontType("bold");
      doc.text(20,60,_data.skills[1].field);
      doc.setFontType("normal");
      doc.text(60,60,"PHP, MySQL, Wordpress, cPanel, WHM, MAMP");
      doc.setFontType("bold");
      doc.text(20,75,_data.skills[2].field);
      doc.setFontType("normal");
      doc.text(60,75,"Gulp, Grunt, NPM, Jekyll");

      doc.setFontSize(18);
      doc.setTextColor(23,119,203);
      doc.setFontType("bold");
      doc.text(20,95,"Reference");
      doc.setFontSize(11);
      doc.setTextColor(150);
      doc.setFontType("normal");
      doc.text(20,105,"Available on Request");

      doc.save('resumeSanjeet.pdf');
  }

  render() {
      return (
          <section className="gen-section">
            <button onClick={this._handlePDF}>Generate PDF</button>
          </section>
        );
  }
}

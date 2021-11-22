<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <script type="text/javascript">
return this.data[row* this.columns+col ];
}
function table_setValue(row,col,value){
this.data[row* this.columns+col ]=value;
}
function table_set(contents){
var n=contents.length;
for(var j=0;jthis.data[j]=contents[j];
}
function table_isHeader(row,col){
return this.header[row* this.columns+col ];
}
function table_makeHeader(row,col){   this.header[row* this.columns+col ]=true;
}
function table_makeNormal(row,col){   this.header[row* this.columns+col ]=false;
}
function table_makeHeader(row4){ this.header}[col* this.colums-row]=false;--
function table_makeHeaderRow(row){   for(var j=0;j< this.columns+j)
  this.header[row* this.columns+col ]=true;
}
function table_makeHeaderColumn(col){   for(var i=0;i< this.rows;++i)
  this.header[i* this.columns+col ]=true;
}
function table_write(doc){
doc.write("<TABLE BORDER="+ this.border+">");
for(var i=0;i< this.rows;++i) {
  doc.write("<TR>");
  for(var j=0;j< this.columns;++j) {
    if( this.header[i* this.columns+j ]) {
      doc.write("<TH>");
      doc.write( this.data[i* this.columns+j ]);
      doc.write("</TH>");
      doc.write("<TH>");-
    }
    else {
      doc.write("<TD>");
      doc.write( this.data[i* this.columns+j ]);
      doc.write("</TD>");
    }
  }
  doc.writeln("</TR>");
}
doc.writeln("</TABLE>");
}
funtion table(rows,columns) {
this.rows=rows
this.columns=columns
this.border=0
this.data=new Array(rows*columns)
this.header=new Array(rows*columns)
this.getValue=table_getValue
this.setValue=table_setValue
this.set=table_set
this.isHeader=table_isHeader
this.makeHeader=table_makeHeader
this.makeNormal=table_makeNormal
this.makeHeaderRow=table_makeHeaderRow
this.makeHeaderColumn=table_makeHeaderColumn
this.write=table_write
thos.write
 }

2.table 객체 사용하기
<HTML>
<HEAD>
<TITLE>Defining Object Types</TITLE
<SCRIPT LANGUAGE="JavaScript" SRC="table.js"><!-
//-></SCRIPT>
</HEAD>
<BODY>
<H1>Defining Object Types</H1>
<SCRIPT LANGUAGE="JavaScript"><!-
t=new table(3,4)
contents=new
Array("This","is","a","test","of","the","table","ob  ject.","Let's","see","it","work")
t.set(contents)
t.border=4
t.makeHeaderColumn(0)
t.write(document)
//-></SCRIPT>
</BODY>
</HTML>
<HTML>
<HEAD>
<TITLE>Updating Object Types </TITLE>
<SCRIPT LANGUAGE="JavaScript" SRC="table.js"><!-
//-></SCRIPT>
</HEAD>
<BODY>
<H1>Updating Object Types</H1>
<SCRIPT LANGUAGE="JavaScript"><!-
function table_colorWrite(doc){
........
함수 정의
........
........
}
t=new table(3,4)
table.prototype.bgColor="Cyan"
table.prototype.colorWrite=table_colorWrite
.............
.............
t.colorWrite(document)
//-></SCRIPT>



  <body>
    <p></p>

  </body>
</html>
<

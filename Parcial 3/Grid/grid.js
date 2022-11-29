$(document).ready(()=>{
  // $(function() {
 
  //   var MyTimeField = function(config) {
  //     jsGrid.Field.call(this, config);
  //   };

  //   MyTimeField.prototype = new jsGrid.Field({
  //     sorter: function(time1, time2) {
  //       return new Date(time1) - new Date(time2);
  //     },
 
  //     itemTemplate: function(value) {
  //       if (value === null) {
  //         return '';
  //       } else {
  //         return value;
  //       }
  //     },
 
  //     insertTemplate: function(value) {
  //       return this._insertPicker = $("<input>").timepicker({ 
  //         timeFormat: 'hh:mm:ss'
  //        }).attr("title", "Time");
  //     },
 
  //     editTemplate: function(value) {
  //       this._editPicker = $("<input>").timepicker({
  //         timeFormat: 'HH:mm:ss',
  //         interval: 15,
  //         minTime: '00:00',
  //         maxTime: '59:59',
  //         defaultTime: '00:00:00',
  //         startTime: '00:00:00',
  //         dynamic: false,
  //         dropdown: true,
  //         scrollbar: true
  //       });
  //       if (typeof(value) !== 'undefined' && value !== null) {
  //         this._editPicker.data('DateTimePicker').date(value);
  //       }
  //       this._editPicker.attr("title", "Time");
  //       return this._editPicker;
  //     },
 
  //     insertValue: function() {
  //       return this._insertPicker.timepicker("getTime").toISOString();
  //     },
 
  //     editValue: function() {
  //       return this._editPicker.timepicker("setTime").toISOString();
  //     }
  //   });
  // });
 
  // jsGrid.fields.myTimeField = MyTimeField;

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/apps/calderonsz/Parcial%203/Grid/connect.php",
    "method": "GET",
    "headers": {
      "Accept": "*/*"
    }
  };
      
  $.ajax(settings).done(function (response) {
    let tabla = JSON.parse(response);
    $("#jsgrid").jsGrid({
      width: "100%",
      height: "400px",
    
      // inserting: true,
      // editing: true,
      sorting: true,
      paging: true,
      data: tabla,
      fields: [
        { name: "Id_cancion", title: "Id", type: "number", width: 50, validate: "required" },
        { name: "Nombre", title: "Canción", type: "text", width: 200 },
        { name: "Artista", title: "Artista", type: "text", width: 200 },
        { name: "Duracion", title: "Duración", width: 200 },
        { name: "Nombre_album", title: "Álbum", type: "text", width: 200 },
        { name: "Año_lanzamiento", title: "Año",type: "number", width: 50 },
        { name: "Genero", title: "Género", type: "text", width: 100 }
      ]
    });
  });
});
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{470:function(t,e,o){"use strict";var n=o(537),r=o(472),l=o(435),c=o(547),v=o(545),d=o(432),f=o(180),m=o(546),h=(o(68),o(77),o(157),{props:["notes","type"],data:function(){return{favorites:[],favoritesIds:[],selectedNote:{},selectedIndex:null,deleteNoteConfirmation:!1,removeFromFavoritesConfirmation:!1}},mounted:function(){this.favorites=localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[],this.favoritesIds=localStorage.getItem("favoritesIds")?JSON.parse(localStorage.getItem("favoritesIds")):[]},methods:{openRemoveFromFavoritesConfirmation:function(t){this.selectedNote=t,this.removeFromFavoritesConfirmation=!0},openDeleteNoteConfirmation:function(t){this.selectedIndex=t,this.deleteNoteConfirmation=!0},deleteNote:function(){this.favoritesIds.includes(this.notes[this.selectedIndex].id)&&this.removeNoteFromFavorites(this.notes[this.selectedIndex]),this.notes.splice(this.selectedIndex,1),localStorage.setItem("notes",JSON.stringify(this.notes)),this.deleteNoteConfirmation=!1},addNoteToFavorites:function(t){this.favorites.push(t),this.favoritesIds.push(t.id),localStorage.setItem("favorites",JSON.stringify(this.favorites)),localStorage.setItem("favoritesIds",JSON.stringify(this.favoritesIds))},removeNoteFromFavorites:function(){var t=this.favoritesIds.indexOf(this.selectedNote.id);t>-1&&(this.favorites.splice(t,1),this.favoritesIds.splice(t,1),localStorage.setItem("favorites",JSON.stringify(this.favorites)),localStorage.setItem("favoritesIds",JSON.stringify(this.favoritesIds)),this.removeFromFavoritesConfirmation=!1,"favorites"==this.type&&this.$emit("updateFavorites",this.favorites))}}}),x=o(5),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._l(t.notes,(function(e,n){return o("div",{key:n,staticClass:"note-box mb-6"},[o("div",[o(m.a,{staticClass:"pt-4"},[o(c.a,{staticClass:"pb-0"},[o("p",{staticClass:"fs-small grey--text text--darken-1 mb-2 text-capitalize"},[o(f.a,{staticClass:"mr-2"},[t._v("$User")]),t._v(" "+t._s(e.author)+"\n          ")],1)]),t._v(" "),o(c.a,{staticClass:"text-right pb-0"},[t.favoritesIds.includes(e.id)?o("span",{staticClass:"mr-2 pointer",on:{click:function(o){return t.openRemoveFromFavoritesConfirmation(e)}}},[o(f.a,[t._v("$FilledStar")])],1):o("span",{staticClass:"mr-2 pointer",on:{click:function(o){return t.addNoteToFavorites(e)}}},[o(f.a,[t._v("$OutlinedStar")])],1)])],1),t._v(" "),o(m.a,[o(c.a,{staticClass:"pt-0"},[o("p",{staticClass:"fs-small grey--text text--darken-1"},[o(f.a,{staticClass:"mr-2 grey--text text--darken-1"},[t._v("$Text")]),t._v("\n            "+t._s(e.subject?e.subject:"--")+"\n          ")],1)])],1),t._v(" "),o("p",{staticClass:"fs-medium grey--text text--darken-2 mt-4",domProps:{innerHTML:t._s(e.text)}}),t._v(" "),o(d.a),t._v(" "),o("div",{staticClass:"d-flex justify-space-between"},[o("p",{staticClass:"fs-xsmall grey--text text--darken-2 mt-4 mb-0"},[t._v("\n          "+t._s(e.time)+"\n        ")]),t._v(" "),"saved"==t.type?o("p",{staticClass:"mt-2 mb-0 pointer",on:{click:function(e){return t.openDeleteNoteConfirmation(n)}}},[o(f.a,[t._v("$Trash")])],1):t._e()])],1)])})),t._v(" "),o(v.a,{attrs:{width:"400"},model:{value:t.removeFromFavoritesConfirmation,callback:function(e){t.removeFromFavoritesConfirmation=e},expression:"removeFromFavoritesConfirmation"}},[o(r.a,{staticClass:"dialog-card pt-3"},[o(l.b,[o(m.a,[o(c.a,{attrs:{cols:"12"}},[o("span",{staticClass:"fs-xlarge"},[t._v("Remove note from favorites")])])],1)],1),t._v(" "),o(l.a,[o("div",[o("span",{staticClass:"fs-medium"},[t._v("\n            Are you sure you want to remove this note from favorites?\n          ")]),t._v(" "),o("div",{staticClass:"mt-5 text-right"},[o(n.a,{staticClass:"secondary--text",attrs:{text:""},on:{click:function(e){t.removeFromFavoritesConfirmation=!1}}},[t._v("Cancel")]),t._v(" "),o(n.a,{staticClass:"error--text",attrs:{text:""},on:{click:function(e){return t.removeNoteFromFavorites()}}},[t._v("Remove")])],1)])])],1)],1),t._v(" "),o(v.a,{attrs:{width:"400"},model:{value:t.deleteNoteConfirmation,callback:function(e){t.deleteNoteConfirmation=e},expression:"deleteNoteConfirmation"}},[o(r.a,{staticClass:"dialog-card pt-3"},[o(l.b,[o(m.a,[o(c.a,{attrs:{cols:"12"}},[o("span",{staticClass:"fs-xlarge"},[t._v("Delete note")])])],1)],1),t._v(" "),o(l.a,[o("div",[o("span",{staticClass:"fs-medium"},[t._v("\n            Are you sure you want to delete this note?\n          ")]),t._v(" "),o("div",{staticClass:"mt-5 text-right"},[o(n.a,{staticClass:"secondary--text",attrs:{text:""},on:{click:function(e){t.deleteNoteConfirmation=!1}}},[t._v("Cancel")]),t._v(" "),o(n.a,{staticClass:"error--text",attrs:{text:""},on:{click:function(e){return t.deleteNote()}}},[t._v("Delete Note")])],1)])])],1)],1)],2)}),[],!1,null,null,null);e.a=component.exports},491:function(t,e,o){var content=o(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("15d9a00a",content,!0,{sourceMap:!1})},534:function(t,e,o){"use strict";o(491)},535:function(t,e,o){var n=o(22)(!1);n.push([t.i,".all-notes .note-box{background:#f3f8f8;background:linear-gradient(137deg,#f3f8f8,#d3e9e3);border-radius:6px;padding:15px;box-shadow:0 3px 3px #ccc}.all-notes .note-box ul li{list-style:disc}",""]),t.exports=n},551:function(t,e,o){"use strict";o.r(e);var n=o(472),r=o(180),l={components:{NoteBox:o(470).a},data:function(){return{notes:[]}},methods:{},mounted:function(){this.notes=localStorage.getItem("notes")?JSON.parse(localStorage.getItem("notes")):""}},c=(o(534),o(5)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"all-notes"},[o("br"),o("br"),t._v(" "),o(n.a,{staticClass:"common-card"},[o("div",{staticClass:"card-title"},[o(r.a,{staticClass:"ml-1",attrs:{color:"#00acc1"}},[t._v("\n          mdi-checkbox-marked-outline\n        ")]),t._v("\n        Saved notes\n        "),t._v(" "),o("span",{staticClass:"fs-medium grey--text"},[t._v("\n          ("+t._s(t.notes.length+(1==t.notes.length?" note":" notes"))+")\n        ")])],1),t._v(" "),o("div",{staticClass:"pa-8"},[t.notes.length?o("div",[o("NoteBox",{attrs:{notes:t.notes,type:"saved"}})],1):o("div",{staticClass:"grey--text text--lighten-1 text-center mt-16"},[t._v("\n          There is no note yet!\n        ")])])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
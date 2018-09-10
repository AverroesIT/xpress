import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

import { SearchResultService } from './services/search-result.service';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import Quill from 'quill';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  searchForm: FormGroup;
  depthList : any[] = [];
  filterList : any[] = [];
  response : any[] = [];
  keyPress :any;
  wordSelection :any;
  searchEvent :any;
  showNhide : Boolean = true;
  termsResponse : any;
  fuzzy : any = false;
  fuzzyName : String = "Off";
  proName : String;
  proResponse : any[] =[];
  /* modules = {
    keyboard: {
      bindings: {
        tab: {
          key: 9,
          handler: function() {
            // Handle tab
            console.log("Disable the tab function");
          }
        },
          // There is no default binding named 'custom'
  // so this will be added without overwriting anything
  custom: {
    key: 'B',
    ctrlKey: true,
    handler: function(range, context) {
      // Handle shift+b
      console.log("you press shift+b");
    }
  },
   custom2 : {
    key: 'A',
    handler: function(range, context) {
      // Handle shift+b
      console.log("you press A");
    }
   }

      }
  }
  }; */
  public my_string: any = null;

  @ViewChild('editor') editor: QuillEditorComponent

  constructor(private fb: FormBuilder, private searchService : SearchResultService) { 
    this.depthList.push("Low");
    this.depthList.push("Medium");
    this.depthList.push("High");

    this.filterList.push("OR");
    this.filterList.push("AND");

    /* const values = [
      { id: 1, value: 'Fredrik Sundqvist' },
      { id: 2, value: 'Patrik Sjölin' }
    ]; */

    /* this.modules = {
      formula: true,
      toolbar: [['formula'], ['image']],
      imageResize: {},
      mention: {
        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
        source: function (searchTerm) {
          if (searchTerm.length === 0) {
            this.renderList(values, searchTerm);
          } else {
            const matches = [];
            for (let i = 0; i < values.length; i++)
              if (~values[i].value.toLowerCase().indexOf(searchTerm)) matches.push(values[i]);
            this.renderList(matches, searchTerm);
          }
        },
      }
    } */
    
  }

  ngOnInit() {
    this.profileFormBuild();
  }


  profileFormBuild(): void {
    this.searchForm = this.fb.group({
      searchName: [],
      depth: ["Medium"],
      filter: ["OR"],
      fuzzy : [false],
      property :[]
    });
  }

  onSubmit(searchForm: FormGroup) {
    this.showNhide = true;   
    this.proResponse = [];
    this.proName ="";
    this.searchService.searchNResult(searchForm.value).subscribe((result : any[])=>{
      console.log("Result comes");
      this.response = result;
    },(error : any) =>{
      console.log("search result Loading Error :"+error);        
    });
  };

  onLook(word : any) {
    this.showNhide = false;   
    this.searchService.searchNTerms(word).subscribe((result : any)=>{
      console.log("Result comes of terms");
      this.termsResponse = result;
    },(error : any) =>{
      console.log("search result Loading Error :"+error);        
    });
  };

  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
/*     var text = event.view.getSelection().toString();
    console.log("Text="+text);
    console.log(event);
    console.log(event.keyCode);
    if(event.ctrlKey && event.keyCode == 'S'.charCodeAt(0)){
      event.preventDefault();
      console.log("you have win to oerrive the key");
      //your saving code
    } */
  }

  @HostListener('window:keydown', ['$event'])
  keyEventDown(event: KeyboardEvent) {
    var text = event.view.getSelection().toString();
    this.keyPress = "";
    this.searchEvent = "";
    /* console.log("Text="+text); */
    console.log(event.keyCode);
/*     if(event.ctrlKey && event.keyCode == 'A'.charCodeAt(0)){
      event.preventDefault();
      this.wordSelection = text;
      this.keyPress = "Ctrl + A";
      this.searchEvent = "Low + And";
      if(text !=null && text !=""){
        this.searchForm.get("depth").setValue("Low");
        this.searchForm.get("filter").setValue("AND");
        this.searchForm.get("searchName").setValue(text);
        this.onSubmit(this.searchForm);
        console.log("Ctrl + A Called");
      }
      console.log("Press = Ctrl + A");
      //your saving code
    } */

/*     if(event.ctrlKey && event.keyCode == 'S'.charCodeAt(0)){
      event.preventDefault();
      this.wordSelection = text;
      this.keyPress = "Ctrl + S";
      this.searchEvent = "Medium + And";
      if(text !=null && text !=""){
        this.searchForm.get("depth").setValue("Medium");
        this.searchForm.get("filter").setValue("AND");
        this.searchForm.get("searchName").setValue(text);
        this.onSubmit(this.searchForm);
        console.log("Ctrl + S Called");
      }
      console.log("Press = Ctrl + S");
      //your saving code
    } */

/*     if(event.ctrlKey && event.keyCode == 'O'.charCodeAt(0)){
      event.preventDefault();
      this.wordSelection = text;
      this.keyPress = "Ctrl + O";
      this.searchEvent = "Medium + OR";
      if(text !=null && text !=""){
        this.searchForm.get("depth").setValue("Medium");
        this.searchForm.get("filter").setValue("OR");
        this.searchForm.get("searchName").setValue(text);
        this.onSubmit(this.searchForm);
        console.log("Ctrl + O Called");
      }
      console.log("Press = Ctrl + O");
      //your saving code
    } */

/*     if(event.ctrlKey && event.keyCode == 'H'.charCodeAt(0)){
      event.preventDefault();
      this.wordSelection = text;
      this.keyPress = "Ctrl + H";
      this.searchEvent = "High + OR";
      if(text !=null && text !=""){
        this.searchForm.get("depth").setValue("High");
        this.searchForm.get("filter").setValue("OR");
        this.searchForm.get("searchName").setValue(text);
        this.onSubmit(this.searchForm);
        console.log("Ctrl + H Called");
      }
      console.log("Press = Ctrl + H");
      //your saving code
    } */

    if(event.ctrlKey && event.keyCode == 'L'.charCodeAt(0)){
      event.preventDefault();
      this.wordSelection = text;
      this.keyPress = "Ctrl + L";
      this.searchEvent = "Synonms, Antonyms, Homophones";
      this.searchForm.get("searchName").setValue(text);
      this.onSubmit(this.searchForm);
     /*  this.onLook(text); */
        console.log("Ctrl + L Called");
      //your saving code
    }

  }

  logSelection($event: any) {
   /*  console.log("It's works");
    console.log($event); */
  }

  addBindingCreated(quill) {
/*     quill.keyboard.addBinding({
      key: 'B',
      ctrlKey : false,
    }, (range, context) => {
      console.log('KEYBINDING B', range, context);
    });

    quill.keyboard.addBinding({
      key: 'B',
      shortKey: true
    }, function(range, context) {
      console.log("you have win");
      this.quill.formatText(range, 'bold', true);
    }); */

  }

  onChange($event: any){
       if(this.fuzzy){
          this.fuzzy = false;
          this.fuzzyName = "Off";
          this.searchForm.get("fuzzy").setValue(false);
       } else {
         this.fuzzy = true;
         this.fuzzyName = "On";
         this.searchForm.get("fuzzy").setValue(true);
       }
       console.log("Fuzzyness ="+this.fuzzy);
  }  

  synClick(){
    console.log("Syn Click");
    this.searchForm.get("property").setValue("Synonyms");
    this.proName = "Synonyms";
    this.proResponse = [];
    this.propertyClick();
  }

  antClick(){
    console.log("Ant Click");
    this.searchForm.get("property").setValue("Antonyms");
    this.proName = "Antonyms";
    this.proResponse = [];
    this.propertyClick();
  }

  propertyClick(){ 
      this.searchService.propertyResult(this.searchForm.value).subscribe((result : any[])=>{
        console.log("property result comes");
        this.proResponse = result;
      },(error : any) =>{
        console.log("property result Loading Error :"+error);        
      });    
  }

}

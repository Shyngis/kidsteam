import { Component } from '@angular/core';
import { LangList } from '../../helpers/interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrl: './lang-select.component.scss'
})
export class LangSelectComponent {
  langList: string[] = ["kazakh","russian","english"];  
  selectedLang!: string;

  constructor(
    // private authService: AuthService,
    // private storage: StorageService,
    private router: Router,
    private location: Location,
    // private langService: LangService,
    // private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
  //   this.selectedLang = this.storage.getSelectedLang();
  //   this.langService.getAll().subscribe(result => {
  //     this.langList = result;
  //     // console.log(this.langList);
  //   }
  // );

  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     // When navigation ends, scroll to the top of the page
  //     window.scrollTo(0, 0);
  //   });
  }

  
  onChangeLang():void {
    console.log(this.selectedLang);
    
    
    // const selectedLang = this.selectedLang;
    // this.storage.setSelectedLang(selectedLang);
    // this.translate.use(this.selectedLang);
    // const userInfo = this.storage.getUserInfo().roles[0] 
    // // console.log(this.storage.getUserInfo().roles[0]);
    // if(userInfo === 'admin'){
    //   this.router.navigate(['/admin'])
    //   // console.log("admin ");
      
    // } else if(userInfo==="user"){
    //   this.router.navigate(['/client'])
    //   // console.log("user");
      
    // }
    // else{
    //   console.log("unrecognized type");
      
    // }


  }

  refreshPage() {
    // Get the current URL
    const currentUrl = this.location.path();
    // Navigate to the current URL to refresh the page
    this.location.go(currentUrl);
  }
}

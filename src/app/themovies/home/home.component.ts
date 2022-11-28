import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { ThemoviesService } from './../infra/themovies.service';
import { ModalService } from '../../core/infra/service/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public search = new FormControl();
  public resultsMulti: any = {};
  // public prePathImg: string ='https://www.themoviedb.org/t/p/w94_and_h141_bestv2';
  public prePathImg: string = 'https://www.themoviedb.org/t/p/w440_and_h660_face';
  public pathNoImg: string = './../../../assets/notfound.png';


  constructor(private fb: FormBuilder, private tms: ThemoviesService, private modalService: ModalService) {
    this.search.valueChanges.pipe(
      debounceTime(750)
    )
      .subscribe((value: string) => {
        if (!value) {
          this.resultsMulti = {};
        }
      })
  }

  setSearchValue() {
    this.searchMulti(this.search.value, 1);
  }

  searchMulti(title: string, page: number): void {
    this.tms.fetchSearchMulti(title, page).subscribe(result => {
      this.resultsMulti = result;
    });
  }

  pageChanged(page: number) {
    this.searchMulti(this.search.value, page);
  }

  openModal(type: string, data: any) {
    this.modalService.open(type, data);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

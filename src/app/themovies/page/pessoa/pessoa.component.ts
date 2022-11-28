import { Component, OnInit } from '@angular/core';
import { ThemoviesService } from './../../infra/themovies.service';
import { ModalService } from '../../../core/infra/service/modal.service';
@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit{

  public peaples: any = {};
  public prePathImg: string ='https://www.themoviedb.org/t/p/w235_and_h235_face';
  public pathNoImg: string ='./../../../assets/notfound.png';

  constructor(private tms: ThemoviesService, private modalService: ModalService) { }

  findPerson(page: number): void {
    this.tms.fetchPersonPopular(page).subscribe(result => {
      this.peaples = result;
    });
  }

  pageChanged(page: number){
    this.findPerson(page);
  }

  ngOnInit(): void{
    this.findPerson(1);
  }

  openModal(type: string, data: any) {
    this.modalService.open(type, data);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

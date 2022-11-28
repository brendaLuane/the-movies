import { Component, OnChanges, Input } from '@angular/core';
import { ThemoviesService } from '../../../themovies/infra/themovies.service';

@Component({
  selector: 'app-pessoa-info',
  templateUrl: './pessoa-info.component.html',
  styleUrls: ['./pessoa-info.component.scss']
})
export class PessoaInfoComponent implements OnChanges {

  @Input() data: any = {};
  public person: any = {};
  public prePathImgPoster: string = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  public prePathImgBanner: string = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces'
  public prePathImgOutros: string = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';
  public pathNoImg: string = './../../../assets/notfound.png';

  constructor(private tms: ThemoviesService) {}

  findPerson(id: number): void {
    this.person = {};
    this.tms.fetchPersonDetails(id).subscribe(result => {
      this.person = result;
    });
  }

  ngOnChanges(): void {
    this.findPerson(this.data.id);
  }

}

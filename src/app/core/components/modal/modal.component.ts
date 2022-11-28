import { Component, ElementRef, OnInit, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { ModalService } from '../../infra/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('modalApp') modalApp!: ElementRef;
  @ViewChild('modalAppCard') modalAppCard!: ElementRef;
  
  private id: string = 'modalApp';
  private element: any;
  public data: any = {};
  public isOpen: boolean = false;


  constructor(private modalService: ModalService, private el: ElementRef, private renderer: Renderer2) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    this.modalService.add(this);
    this.addListnerClick();
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
    this.isOpen = false;
    this.removeListnerClick();
  }

  open(data: any): void {
    this.modalApp.nativeElement.classList.add('is-active');
    this.data = data;
    this.isOpen = true;

  }

  close(): void {
    this.modalApp.nativeElement.classList.remove('is-active');
    this.isOpen = false;
  }

  addListnerClick() {
    this.element.addEventListener('click', (e: Event) => {
      if (this.isOpen && !this.modalAppCard.nativeElement.contains(e.target)) {
        this.close();
      }
    });
  }

  removeListnerClick() {
    this.element.removeEventListener('click');
  }
}

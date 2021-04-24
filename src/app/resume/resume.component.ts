import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadDoc(){
    window.location.href ="../../assets/Template/JagabandhuMandal_dotnetdev_6YoEs.docx";
  }
}

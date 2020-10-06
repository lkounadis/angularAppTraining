import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {


  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToChildB(){
    this.router.navigate(['child-b'], {relativeTo:this.route.parent});

  }

}

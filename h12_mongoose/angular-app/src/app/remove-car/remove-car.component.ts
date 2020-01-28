import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-remove-car',
  templateUrl: './remove-car.component.html',
  styleUrls: ['./remove-car.component.css']
})
export class RemoveCarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.carService.delete(id).subscribe(() => {});
    setTimeout(() => this.router.navigate(['']), 2000);
  }
}

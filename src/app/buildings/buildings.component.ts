import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouteConstants } from '../constants/route-counstants';
import { RequestService } from '../service/requests.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsComponent implements OnInit {
  buildingData: any;
  cityFilter: any = new FormControl();
  buildingFilter: any = new FormControl();
  stateFilter: any = new FormControl();
  buldingRating: any = new FormControl();
  ratingFilter: any = new FormControl();
  page = 1;
  pageSize = 10;
  load: boolean = false;
  errorMessage = '';
  showPaginate: boolean = true;
  // The ratings array
  ratings: any = [1, 2, 3, 4, 5];
  constructor(
    private routeConstants: RouteConstants,
    private requestService: RequestService
  ) {}

  // Call the Buildings API once the Compoment gets initialized
  ngOnInit(): void {
    this.getBuildingData();
  }

  // Get all Building data
  getBuildingData() {
    this.load = true;
    const url = this.routeConstants.base_url + this.routeConstants.places;
    this.requestService.getAll(url).subscribe(
      (resp) => {
        this.buildingData = resp;
        this.buildingData.map((item: any) => (item.rating = 1));
        this.load = false;
      },
      (error) => {
        this.load = false;
        this.errorMessage = error.message;
        console.log('Error in getting building data');
      }
    );
  }
  // This function will apply add rating to the selected building
  applyRatingValue(id: any) {
    this.buildingData.map((building: any) => {
      if (building.id == id) {
        building.rating = this.buldingRating.value;
        building.showRating = false;
      }
    });
    this.buldingRating.reset();
  }

  // Close rating dropdown if use dont want to rate
  closeRatingDropDwon(id: any) {
    this.buildingData.map((building: any) => {
      if (building.id == id) {
        building.showRating = false;
      }
    });
  }

  // This will enable the rating dropdown if user clicks on rate button in the rating column
  getRatingsDropdwon(id: any) {
    this.buildingData.map((building: any) => {
      if (building.id == id) {
        building.showRating = true;
      }
    });
  }

  // Reset all the filters which are applied currently
  resetFilters() {
    this.cityFilter.reset();
    this.buildingFilter.reset();
    this.stateFilter.reset();
    this.buldingRating.reset();
    this.ratingFilter.reset();
    // this.getBuildingData();
  }

  // When user clicks on next button next page will be displayed
  handlePageChange(event: number): void {
    this.page = event;
    // this.getBuildingData();
  }
}

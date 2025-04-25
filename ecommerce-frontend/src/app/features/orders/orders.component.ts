import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface Order {
  id: string;
  date: Date;
  total: number;
  status: string;
  items: number;
}

@Component({
  selector: 'app-orders',
  template: `
    <div class="orders-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Order History</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <table mat-table [dataSource]="dataSource" matSort>
            <ng-container matColumnDef="id">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Order ID</th>
              <td mat-cell *matCellDef="let order">{{order.id}}</td>
            </ng-container>

            <ng-container matColumnDef="date">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>
              <td mat-cell *matCellDef="let order">{{order.date | date}}</td>
            </ng-container>

            <ng-container matColumnDef="items">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Items</th>
              <td mat-cell *matCellDef="let order">{{order.items}}</td>
            </ng-container>

            <ng-container matColumnDef="total">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Total</th>
              <td mat-cell *matCellDef="let order">{{order.total | currency}}</td>
            </ng-container>

            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
              <td mat-cell *matCellDef="let order">{{order.status}}</td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let order">
                <button mat-button color="primary" (click)="viewOrderDetails(order)">
                  View Details
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>

          <mat-paginator [pageSizeOptions]="[5, 10, 25]"
                        showFirstLastButtons
                        aria-label="Select page of orders">
          </mat-paginator>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .orders-container {
      margin: 2rem;
    }
    table {
      width: 100%;
    }
    .mat-column-actions {
      width: 100px;
      text-align: center;
    }
  `]
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'items', 'total', 'status', 'actions'];
  dataSource: MatTableDataSource<Order>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // TODO: Replace with actual data from a service
    const mockOrders: Order[] = [
      {
        id: 'ORD-001',
        date: new Date(),
        total: 299.99,
        status: 'Delivered',
        items: 3
      }
    ];
    this.dataSource = new MatTableDataSource(mockOrders);
  }

  ngOnInit() {
    // TODO: Load orders from service
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewOrderDetails(order: Order) {
    // TODO: Implement order details view
    console.log('View order details', order);
  }
} 
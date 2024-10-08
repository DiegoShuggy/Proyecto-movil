import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbService } from '../servicios/db.service';


describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private sqlite: SQLite,
    private dbService: DbService
  ) {}

  ngOnInit() {
    this.createDb();
  }

  async createDb() {
    try {
      const db: SQLiteObject = await this.sqlite.create({
        name: 'my_database.db',
        location: 'default',
      });

      // Inicializamos la base de datos en el servicio
      await this.dbService.createDatabase(db);
      console.log('Base de datos creada y lista para usar');
    } catch (error) {
      console.error('Error creando la base de datos: ', error);
    }
  }
}
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule(
    {
        imports: [
            MatButtonModule,
            MatToolbarModule,
            MatSidenavModule,
            MatListModule,
            MatIconModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
        ],
        exports: [
            MatButtonModule,
            MatIconModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
        ]
    }
)

export class MaterialModule{

}
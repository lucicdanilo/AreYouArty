import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'painting', loadChildren: './pages/painting/painting.module#PaintingPageModule'},
  { path: 'sculpture', loadChildren: './pages/sculpture/sculpture.module#SculpturePageModule'},
  { path: 'music', loadChildren: './pages/music/music.module#MusicPageModule'},
  { path: 'literature', loadChildren: './pages/literature/literature.module#LiteraturePageModule'},
  { path: 'sculpture', loadChildren: './pages/sculpture/sculpture.module#SculpturePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

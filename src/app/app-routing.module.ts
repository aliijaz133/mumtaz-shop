import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // downloadImage() {
  //   const link = document.createElement('a');
  //   link.href = 'https://example.com/image.jpg';
  //   link.download = 'image.jpg';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
 }

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'My Portfolio',
      description: 'My Portfolio Using Angular',
      link: 'https://github.com/aminulcste/my_portfolio'
    },
    {
      title: 'Simple Employee Portal',
      description: 'Employee Portal built with Angular and Asp.net web api.',
      link: 'https://github.com/aminulcste/EmployeePortal-CRUD'
    },
    {
      title: 'Online Book Store',
      description: 'Online shop site with login, product catalog, and cart.',
      link: 'https://github.com/aminulcste/book-store-management-system'
    },
    {
      title: 'Electronic-Shop ',
      description: 'Online shop app with login, electronics product catalog, and cart.',
      link: 'https://github.com/aminulcste/Electronic-Shop'
    },
    {
      title: 'Cricket Site',
      description: 'Simple Cricket Site Using PHP.',
      link: 'https://github.com/aminulcste/cricket'
    }
  ];


}

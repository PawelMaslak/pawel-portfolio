import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.load();
  }

  private load() {
    const loading = document.querySelector('.loading') as HTMLElement;
    const content = document.querySelector('.content') as HTMLElement;
    const particles = document.querySelector('.particles') as HTMLElement;

    setTimeout(() => {
      loading.style.opacity = '0';
      content.style.display = 'block';
      particles.style.display = 'block';
      setTimeout(() => {
        content.style.opacity = '1';
        particles.style.opacity = '1';
        loading.style.display = 'none';
      }, 10)
    }, 1500);

    //content.style.display = 'block';

    setTimeout(() => {

      //content.style.opacity = '1';
      //loading.style.display = 'none'
    }, 2000)

    //content.style.display = 'block';

    // setTimeout(() => {
    //   //loading.style.opacity = '0';

    //   setTimeout(() => {
    //     //loading.style.display = 'none';
    //     content.style.display = 'block';
    //     content.style.opacity = '1';
    //   }, 1000)
    // }, 1000)
    //loading.style.opacity = '0';
  }

  id = "tsparticles";

  particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        }
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }
}

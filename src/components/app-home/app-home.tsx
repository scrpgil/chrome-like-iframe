import { Component, Element, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @State() url: string = "http://localhost:3334";
  @State() width: number = 400;
  @State() height: number = 600;
  @Element() el: HTMLElement;

  async componentDidLoad() {
    const widthInput: any = this.el.querySelector("#width-input");
    widthInput.addEventListener("ionInput", async ev => {
      if (ev && ev.target && ev.target.value) {
        this.width = ev.target.value;
      }
    });
    const heightInput: any = this.el.querySelector("#height-input");
    heightInput.addEventListener("ionInput", async ev => {
      if (ev && ev.target && ev.target.value) {
        this.height = ev.target.value;
      }
    });
    const input: any = this.el.querySelector("#url-input");
    input.addEventListener("ionInput", async ev => {
      if (ev && ev.target && ev.target.value) {
        this.url = ev.target.value;
      }
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-title>Screenshot Playground</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <div class="option-wrapper">
          <div class="width-input-wrapper">
            <ion-input
              id="width-input"
              type="number"
              placeholder="Type Width"
              value={String(this.width)}
            />
          </div>
          <div class="separte-wrapper">x</div>
          <div class="height-input-wrapper">
            <ion-input
              id="height-input"
              type="number"
              placeholder="Type Height"
              value={String(this.height)}
            />
          </div>
        </div>
        <div class="chrome-like-wrapper">
          <div class="tab-wrapper">
            <div class="window-controller-wrapper">
              <div class="red" />
              <div class="yellow" />
              <div class="green" />
            </div>
            <ul class="tabs clearfix">
              <li>
                <a href="#">App</a>
              </li>
            </ul>
          </div>
          <div class="url-wrapper">
            <div class="arrow-back">
              <ion-icon name="arrow-back" color="medium" />
            </div>
            <div class="arrow-forward">
              <ion-icon name="arrow-forward" color="medium" />
            </div>
            <div class="refresh">
              <ion-icon name="refresh" color="dark" />
            </div>
            <ion-input id="url-input" placeholder="Type URL" />

            <div class="person">
              <ion-icon name="person" color="medium" />
            </div>
          </div>
          <iframe width={this.width} height={this.height} src={this.url} />
        </div>
      </ion-content>
    ];
  }
}

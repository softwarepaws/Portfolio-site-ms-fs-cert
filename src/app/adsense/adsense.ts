import { Component, Inject, Input, OnInit,  PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var adsbygoogle: any;

@Component({
  selector: 'app-adsense',
  standalone: true,
  template: `
    <div style="overflow: hidden;">
      <ins class="adsbygoogle"
           style="display:block"
           [attr.data-ad-client]="adClient"
           [attr.data-ad-slot]="adSlot"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  `,
  styles: `.adsbygoogle {
            display: block !important;
            min-width: 250px;
            min-height: 250px;
            background: rgba(0,0,0,0.05);
          }`
})
export class Adsense implements OnInit {
  @Input() adClient: string = 'ca-pub-7992888422263350';
  @Input() adSlot: string = '6493534038';
      
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('AdUnit: Running on browser. Waiting for DOM...');
      
      // We use a small delay to ensure Angular has finished 
      // binding the [attr] values to the <ins> tag.
      setTimeout(() => {
        try {
          const win = window as any;
          if (win.adsbygoogle) {
            console.log('AdUnit: Pushing to existing adsbygoogle array');
            win.adsbygoogle.push({});
          } else {
            console.log('AdUnit: Initializing adsbygoogle array and pushing');
            win.adsbygoogle = [];
            win.adsbygoogle.push({});
          }
        } catch (e) {
          console.error('AdSense Error:', e);
        }
      }, 500); 
    }
  }
}


  openstation(name: string, link: string, datetimevar: number, typee: any) {

    this.name = name;
    this.link = link;
    this.datetimevar = datetimevar;
    this.typee = typee;
    console.log(this.typee);

    if (this.typee == 1 || this.typee == 3) {

      this.loading = this.loadingCtrl.create({
        content: 'Please wait...',
        dismissOnPageChange: false
      });
      this.loading.present();

      let url1 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + this.link + '&type=video&eventType=live&key=' + this.apidata1;
      this.http.get(url1).pipe(map(res => res.json())).subscribe(data => {
        this.varray = data.items;
        console.log(this.varray);

        if (!Array.isArray(this.varray) || !this.varray.length) {
          this.loading.dismiss();
          this.toastt("ERROR!! Channel is currently offline.");

        } else {

          let urll = 'https://www.googleapis.com/youtube/v3/videos?id=' + this.varray[0].id.videoId + '&key=AIzaSyD_a2HlR9UW1hYskAIdUuaWcsUhJbNjkiY&part=status';
          this.http.get(urll).pipe(map(res => res.json())).subscribe(dataa => {
            var statusarr = dataa.items;
            var statusfnl = statusarr[0].status.embeddable;

            this.loading.dismiss();

            if (this.typee == 3) {
              this.youfinal = this.linkurly + "" + this.varray[0].id.videoId;

            } else if (statusfnl) {
              this.youfinal = this.linkurl + "" + this.varray[0].id.videoId;

            } else {
              this.youfinal = this.linkurly + "" + this.varray[0].id.videoId;
            }

            this.loadads1();
            this.landscape();
            let browser = this.theInAppBrowser.create(this.youfinal, '_blank', { location: 'no', footer: 'yes', footercolor: '#0000ffff', shouldPauseOnSuspend: 'yes', hardwareback: 'no', closebuttoncolor: '#FF0000', zoom: 'no' });
            browser.on('loadstart').subscribe((eve) => {
              this.spinnerDialog.show();
            }, err => {
              this.spinnerDialog.hide();
              alert("error");
            });

            browser.on('loadstop').subscribe(() => {
              this.spinnerDialog.hide();
            }, err => {
              this.spinnerDialog.hide();
            });

            browser.on('loaderror').subscribe(() => {
              this.spinnerDialog.hide();
            }, err => {
              this.spinnerDialog.hide();
            });

            browser.on('exit').subscribe(() => {
              this.spinnerDialog.hide();
              this.portrait();
            }, err => {
              this.spinnerDialog.hide();
              this.portrait();

            });
          })
        }
      },
        err => {
          this.loading.dismiss();
          console.log("Oops!");
          this.toastt("ERROR!! Unknown Error. Please try again later or contact Developer");
        }
      );

    } else if (this.typee == 2) {

      this.loadads1();
      this.app.getRootNav().push("PlayerPage", {
        namedata: this.name,
        link1data: this.link
      });

    } else {
      this.toastt("ERROR!! Unknown Error. Please try again later or contact Developer");
    }
  }
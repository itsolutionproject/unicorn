(function () {

    uc.Popup.LoadingPopup = uc.Popup.BasePopup.extend({
            ctor: function (title, message, options) {
                this._super();
            },

            customizeGUI: function () {
                this._super();
                console.log("customizeGUI")
            },

            onButtonRelease: function (button, id) {
                switch (id) {
                    case BasePopup.CLOSE:
                        uc.Popup.loadingPopup.setVisible(false);
                }
            },

            reOpen : function(){
                this.setVisible(true);
                cc.eventManager.resumeTarget(this._layerColor, true);
            },

            onClose: function () {
                console.log("onClose loading");
                this.setVisible(false);
                this._layerColor.setTouchEnabled(false);
                cc.eventManager.pauseTarget(this._layerColor, true);


                // cc.eventManager.removeAllE(this._listener, _layerColor);
                // this._layerColor.removeListener(this._listener);


                // timeAnimation = timeAnimation || 0.3;
                //
                // if (this._showHideAnimate) {
                //     this._bgShowHideAnimate.setScale(this._currentScaleBg);
                //     this._bgShowHideAnimate.runAction(cc.spawn(new cc.EaseBackIn(cc.scaleTo(timeAnimation, 1.2)), cc.fadeOut(0.2)));
                //     this.runAction(cc.sequence(cc.delayTime(timeAnimation), cc.removeSelf()));
                // } else {
                //     this.removeFromParent();
                // }

            }
        }
    );

}.call(this));
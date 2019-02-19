//
// utils/controllers/Swipe.js

export default class Swipe {
    constructor( opts ) {

        this.xDown = null;
        this.yDown = null;
        this.target = opts.target || document;
        this.resistance = opts.resistance || 0;
        this.callback = opts.callback || function ( swipe ) { console.log( swipe ); };
        this.onTouchStartHandler = this.handleTouchStart.bind( this );
        this.onTouchMovementHandler = this.handleTouchMove.bind( this );
    }
    init() {

        this.addListeners();
    }
    destroy() {

        this.removeListeners();
    }
    addListeners() {

        this.target.addEventListener("touchstart", this.onTouchStartHandler);
        this.target.addEventListener("touchmove", this.onTouchMovementHandler);
    }
    removeListeners() {

        this.target.removeEventListener("touchstart", this.onTouchStartHandler);
        this.target.removeEventListener("touchmove", this.onTouchMovementHandler);
    }
    handleTouchStart( e ) {

        const firstTouch = this.getTouches(e)[0];
        this.xDown = firstTouch.clientX;
        this.yDown = firstTouch.clientY;
    }
    handleTouchMove( e ) {

        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        const swipe = {};

        const xUp = e.touches[0].clientX;
        const yUp = e.touches[0].clientY;

        const xDiff = this.xDown - xUp;
        const yDiff = this.yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > this.resistance ) {
                swipe.left = true;
                this.callback( swipe );
            } else if ( xDiff < ( this.resistance * -1 ) ) {
                swipe.right = true;
                this.callback( swipe );
            }
        } else {
            if ( yDiff > this.resistance ) {
                swipe.up = true;
                this.callback( swipe );
            } else if ( yDiff < ( this.resistance * -1 ) ) {
                swipe.down = true;
                this.callback( swipe );
            }
        }

        this.xDown = null;
        this.yDown = null;
    }
    getTouches( e ) {

        return e.touches || e.originalEvent.touches;
    }
}

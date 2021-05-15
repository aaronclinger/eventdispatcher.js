export default class EventDispatcher {
	
	constructor() {
		this._events = {};
	}
	
	on(type, listener) {
		if ( ! this._events[type]) {
			this._events[type] = [];
		}
		
		this._events[type].push(listener);
		
		return this;
	}
	
	off(type, listener) {
		if ( ! listener) {
			this._events[type] = [];
			
			return this;
		}
		
		const list = this._events[type];
		
		let l = list.length;
		
		while (l--) {
			if (list[l] === listener) {
				list.splice(l, 1);
			}
		}
		
		return this;
	}
	
	emit(type, ...args) {
		const list = this._events[type];
		
		if ( ! list || list.length === 0) {
			return this;
		}
		
		let l = list.length;
		
		while (l--) {
			list[l].apply(null, args);
		}
		
		return this;
	}
	
	destroy() {
		this._events = {};
	}
}

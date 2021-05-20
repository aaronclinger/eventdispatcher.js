export default class EventDispatcher {
	
	constructor() {
		this._events = {};
	}
	
	on(type, listener) {
		if ( ! this._events[type]) {
			this._events[type] = [];
		}
		
		this._events[type].push({
			listen: listener,
			once: false
		});
		
		return this;
	}
	
	once(type, listener) {
		if ( ! this._events[type]) {
			this._events[type] = [];
		}
		
		this._events[type].push({
			listen: listener,
			once: true
		});
		
		return this;
	}
	
	off(type, listener) {
		if ( ! type) {
			this._events = {};
			
			return this;
		}
		
		if ( ! listener) {
			this._events[type] = [];
			
			return this;
		}
		
		const list = this._events[type];
		
		let l = list.length;
		
		while (l--) {
			if (list[l].listen === listener) {
				list.splice(l, 1);
			}
		}
		
		return this;
	}
	
	emit(type, ...args) {
		const lists = this._events[type];
		
		if ( ! lists || lists.length === 0) {
			return this;
		}
		
		let l = lists.length;
		let list;
		
		while (l--) {
			list = lists[l];
			
			list.listen.apply(null, args);
			
			if (list.once) {
				lists.splice(l, 1);
			}
		}
		
		return this;
	}
	
	destroy() {
		this.off();
	}
}

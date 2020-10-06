class lS{
    set(ob) {
        localStorage.setItem('_orders', JSON.stringify(ob));
    }

    get() {
        return JSON.parse(localStorage.getItem('_orders'));
    }
}

export default lS;
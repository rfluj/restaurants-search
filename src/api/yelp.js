
import axios from "axios"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 6rdYuyKhyJZYneN1sIPhbc7RP0qpn6ldsjGgQebLpMT-6of_J_XY7hyEh5XHWLlVr4KfHJ5iFdpFewZHKrpByggqp-vzythFp5jpQqJrNkbr0nK_OJs2JL0o-V3bYnYx"
    }
})


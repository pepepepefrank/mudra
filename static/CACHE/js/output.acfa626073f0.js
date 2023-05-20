! function() {
    var b, h, c, r, u, d, g, m, v, y, o, T, x, i, s, k, w, L, M, B, C, D, N, t! function(a) {
        "use strict"
        var e, t, o
        a(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function(e) {
            var t
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname && (e.preventDefault(), (t = a(this.hash)).length)) return t = t.offset().top, a("#header").length && (t -= a("#header").outerHeight() - 2), "#header" == a(this).attr("href") && (t = 0), a("html, body").animate({
                scrollTop: t
            }, 1500, "easeInOutExpo"), a(this).parents(".nav-menu, .mobile-nav").length && (a(".nav-menu .active, .mobile-nav .active").removeClass("active"), a(this).closest("li").addClass("active")), a("body").hasClass("mobile-nav-active") && (a("body").removeClass("mobile-nav-active"), a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"), a(".mobile-nav-overly").fadeOut()), !1
        }), a(".nav-menu").length ? (e = a(".nav-menu").clone().prop({
            class: "mobile-nav d-lg-none"
        }), a("body").append(e), a("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'), a("body").append('<div class="mobile-nav-overly"></div>'), a(document).on("click", ".mobile-nav-toggle", function(e) {
            a("body").toggleClass("mobile-nav-active"), a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"), a(".mobile-nav-overly").toggle()
        }), a(document).on("click", ".mobile-nav .drop-down > a", function(e) {
            e.preventDefault(), a(this).next().slideToggle(300), a(this).parent().toggleClass("active")
        }), a(document).click(function(e) {
            var t = a(".mobile-nav, .mobile-nav-toggle")
            t.is(e.target) || 0 !== t.has(e.target).length || a("body").hasClass("mobile-nav-active") && (a("body").removeClass("mobile-nav-active"), a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"), a(".mobile-nav-overly").fadeOut())
        })) : a(".mobile-nav, .mobile-nav-toggle").length && a(".mobile-nav, .mobile-nav-toggle").hide(), t = a("section"), o = a(".nav-menu, #mobile-nav"), a(window).on("scroll", function() {
            var n = a(this).scrollTop() + 80
            t.each(function() {
                var e = a(this).offset().top,
                    t = e + a(this).outerHeight()
                e <= n && n <= t && (n <= t && o.find("li").removeClass("active"), o.find('a[href="#' + a(this).attr("id") + '"]').parent("li").addClass("active"))
            })
        }), a(window).scroll(function() {
            100 < a(this).scrollTop() ? a("#header").addClass("header-scrolled") : a("#header").removeClass("header-scrolled")
        }), 100 < a(window).scrollTop() && a("#header").addClass("header-scrolled"), a(window).scroll(function() {
            100 < a(this).scrollTop() ? a(".back-to-top").fadeIn("slow") : a(".back-to-top").fadeOut("slow")
        }), a(".back-to-top").click(function() {
            return a("html, body").animate({
                scrollTop: 0
            }, 1500, "easeInOutExpo", function() {
                a(".nav-menu ul:first li:first").addClass("active")
            }), !1
        }), a(window).on("load", function() {
            var e = a(".portfolio-container").isotope({
                itemSelector: ".portfolio-item",
                layoutMode: "fitRows"
            })
            a("#portfolio-flters li").on("click", function() {
                a("#portfolio-flters li").removeClass("filter-active"), a(this).addClass("filter-active"), e.isotope({
                    filter: a(this).data("filter")
                })
            }), a(document).ready(function() {
                a(".venobox").venobox()
            })
        }), a(".testimonials-carousel").owlCarousel({
            autoplay: !0,
            dots: !0,
            loop: !0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                900: {
                    items: 3
                }
            }
        }), a(".portfolio-details-carousel").owlCarousel({
            autoplay: !0,
            dots: !0,
            loop: !0,
            items: 1
        }), AOS.init({
            duration: 800
        })
    }(jQuery)
    const P = "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
        S = "0xBCfCcbde45cE874adCB698cC183deBcF17952812",
        I = "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        A = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
        U = "0xeb3a9c56d963b971d320f889be2fb8b59853e449",
        F = "0x3f4d6bf08cb7a003488ef082102c2e6418a4551e",
        O = "0xe0c3ab2c69d8b43d8b0d922afa224a0ab6780de1",
        W = "0xC765bddB93b0D1c1A88282BA0fa6B2d00E3e0c83",
        q = "0xAe7e6CAbad8d80f0b4E1C4DDE2a5dB7201eF1252",
        R = "0xd0C1d18f091B182B80f342C654280B9004c0b124",
        E = "0x065a652435935dd870679c9d3caa2e96b2585f1e",
        H = "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
        z = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        V = "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        j = [{
            inputs: [{
                internalType: "address",
                name: "_feeToSetter",
                type: "address"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "token0",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "token1",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "pair",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "PairCreated",
            type: "event"
        }, {
            constant: !0,
            inputs: [],
            name: "INIT_CODE_PAIR_HASH",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "allPairs",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "allPairsLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "tokenA",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenB",
                type: "address"
            }],
            name: "createPair",
            outputs: [{
                internalType: "address",
                name: "pair",
                type: "address"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "feeTo",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "feeToSetter",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "getPair",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "_feeTo",
                type: "address"
            }],
            name: "setFeeTo",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "_feeToSetter",
                type: "address"
            }],
            name: "setFeeToSetter",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }],
        Y = [{
            inputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "Burn",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }],
            name: "Mint",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0In",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1In",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "Swap",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint112",
                name: "reserve0",
                type: "uint112"
            }, {
                indexed: !1,
                internalType: "uint112",
                name: "reserve1",
                type: "uint112"
            }],
            name: "Sync",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            constant: !0,
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "MINIMUM_LIQUIDITY",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "PERMIT_TYPEHASH",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "burn",
            outputs: [{
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "factory",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "getReserves",
            outputs: [{
                internalType: "uint112",
                name: "_reserve0",
                type: "uint112"
            }, {
                internalType: "uint112",
                name: "_reserve1",
                type: "uint112"
            }, {
                internalType: "uint32",
                name: "_blockTimestampLast",
                type: "uint32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "_token0",
                type: "address"
            }, {
                internalType: "address",
                name: "_token1",
                type: "address"
            }],
            name: "initialize",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "kLast",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "mint",
            outputs: [{
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "nonces",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }, {
                internalType: "uint8",
                name: "v",
                type: "uint8"
            }, {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
            }, {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }],
            name: "permit",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "price0CumulativeLast",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "price1CumulativeLast",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "skim",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }],
            name: "swap",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "sync",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "token0",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "token1",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }],
        G = "0x0000000000000000000000000000000000000000",
        Q = "0x0000000000000000000000000000000000000001",
        X = "0x000000000000000000000000000000000000dead",
        J = [{
            constant: !0,
            inputs: [{
                name: "_owner",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                name: "balance",
                type: "uint256"
            }],
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{
                name: "",
                type: "uint8"
            }],
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{
                name: "",
                type: "string"
            }],
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{
                name: "",
                type: "string"
            }],
            type: "function"
        }, , {
            constant: !0,
            inputs: [],
            name: "owner",
            outputs: [{
                name: "",
                type: "address"
            }],
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "recipient",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !(t = "https://bsc-dataseed.binance.org"),
            stateMutability: "nonpayable",
            type: "function"
        }],
        K = [{
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "unlockTime",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "depositId",
                type: "uint256"
            }],
            name: "TokensLocked",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "receiver",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "TokensWithdrawn",
            type: "event"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "allDepositIds",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "bnbFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "depositId",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "depositsByTokenAddress",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "depositsByWithdrawalAddress",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getAllDepositIds",
            outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            }],
            name: "getDepositDetails",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }],
            name: "getDepositsByTokenAddress",
            outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_withdrawalAddress",
                type: "address"
            }],
            name: "getDepositsByWithdrawalAddress",
            outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "_walletAddress",
                type: "address"
            }],
            name: "getTokenBalanceByAddress",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }],
            name: "getTotalTokenBalance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_unlockTime",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_feeInBnb",
                type: "bool"
            }],
            name: "lockTokens",
            outputs: [{
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            }],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "lockedToken",
            outputs: [{
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "withdrawalAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "unlockTime",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "withdrawn",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "lpFeePercent",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "remainingBnbFees",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "fee",
                type: "uint256"
            }],
            name: "setBnbFee",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "percent",
                type: "uint256"
            }],
            name: "setLpFee",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "tokensFees",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalBnbFees",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "walletTokenBalance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address payable",
                name: "withdrawalAddress",
                type: "address"
            }],
            name: "withdrawFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            }],
            name: "withdrawTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }],
        Z = [{
            inputs: [{
                internalType: "contract IPancakeFactory",
                name: "_pancakeFactory",
                type: "address"
            }, {
                internalType: "address",
                name: "_feesCalculator",
                type: "address"
            }, {
                internalType: "address payable",
                name: "_feesReceiver",
                type: "address"
            }, {
                internalType: "address",
                name: "_feeToken",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "OnLockAmountIncreased",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "newUnlockTime",
                type: "uint256"
            }],
            name: "OnLockDurationIncreased",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "migrator",
                type: "address"
            }],
            name: "OnLockMigration",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OnLockOwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "OnLockWithdrawal",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "unlockTime",
                type: "uint256"
            }],
            name: "OnTokenLock",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }],
            name: "OnTokenUnlock",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "newUnlockTime",
                type: "uint256"
            }],
            name: "extendLockTime",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "feeReceiver",
            outputs: [{
                internalType: "address payable",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "feeToken",
            outputs: [{
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "feesCalculator",
            outputs: [{
                internalType: "contract IFeesCalculator",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountToIncrement",
                type: "uint256"
            }, {
                internalType: "uint8",
                name: "feePaymentMode",
                type: "uint8"
            }],
            name: "increaseLockAmount",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [],
            name: "lockNonce",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "unlockTime",
                type: "uint256"
            }, {
                internalType: "address payable",
                name: "withdrawer",
                type: "address"
            }, {
                internalType: "uint8",
                name: "feePaymentMode",
                type: "uint8"
            }],
            name: "lockTokens",
            outputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "address",
                name: "migratorContract",
                type: "address"
            }],
            name: "migrate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "migrator",
            outputs: [{
                internalType: "contract IMigrator",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "pancakeFactory",
            outputs: [{
                internalType: "contract IPancakeFactory",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address payable",
                name: "newFeeReceiver",
                type: "address"
            }],
            name: "setFeeReceiver",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newFeesCalculator",
                type: "address"
            }],
            name: "setFeesCalculator",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newMigrator",
                type: "address"
            }],
            name: "setMigrator",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tokenLocks",
            outputs: [{
                internalType: "address",
                name: "lpToken",
                type: "address"
            }, {
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "unlockTime",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferLock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }],
            name: "userLockAt",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "user",
                type: "address"
            }],
            name: "userLocksLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "website",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "pure",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "withdrawPartially",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }],
        ee = [{
            inputs: [{
                internalType: "contract IUniFactory",
                name: "_uniswapFactory",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "lpToken",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "lockDate",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "unlockDate",
                type: "uint256"
            }],
            name: "onDeposit",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "lpToken",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "onWithdraw",
            type: "event"
        }, {
            inputs: [],
            name: "MIGRATION_IN",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gFees",
            outputs: [{
                internalType: "uint256",
                name: "ethFee",
                type: "uint256"
            }, {
                internalType: "contract IERCBurn",
                name: "secondaryFeeToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "secondaryTokenFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "secondaryTokenDiscount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "liquidityFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "referralPercent",
                type: "uint256"
            }, {
                internalType: "contract IERCBurn",
                name: "referralToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "referralHold",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "referralDiscount",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }],
            name: "getLockedTokenAtIndex",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getNumLockedTokens",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }],
            name: "getNumLocksForToken",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }],
            name: "getUserLockForTokenAtIndex",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }],
            name: "getUserLockedTokenAtIndex",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }],
            name: "getUserNumLockedTokens",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }],
            name: "getUserNumLocksForToken",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }],
            name: "getUserWhitelistStatus",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }],
            name: "getWhitelistedUserAtIndex",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getWhitelistedUsersLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_lockID",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "incrementLock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_unlock_date",
                type: "uint256"
            }, {
                internalType: "address payable",
                name: "_referral",
                type: "address"
            }, {
                internalType: "bool",
                name: "_fee_in_eth",
                type: "bool"
            }, {
                internalType: "address payable",
                name: "_withdrawer",
                type: "address"
            }],
            name: "lockLPToken",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_lockID",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "migrate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_lockID",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_unlock_date",
                type: "uint256"
            }],
            name: "relock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address payable",
                name: "_devaddr",
                type: "address"
            }],
            name: "setDev",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_referralPercent",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_referralDiscount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_ethFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_secondaryTokenFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_secondaryTokenDiscount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_liquidityFee",
                type: "uint256"
            }],
            name: "setFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_migrationIn",
                type: "address"
            }],
            name: "setMigrationIn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "contract IMigrator",
                name: "_migrator",
                type: "address"
            }],
            name: "setMigrator",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "contract IERCBurn",
                name: "_referralToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_hold",
                type: "uint256"
            }],
            name: "setReferralTokenAndHold",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_secondaryFeeToken",
                type: "address"
            }],
            name: "setSecondaryFeeToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_lockID",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "splitLock",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tokenLocks",
            outputs: [{
                internalType: "uint256",
                name: "lockDate",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "initialAmount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "unlockDate",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "lockID",
                type: "uint256"
            }, {
                internalType: "address",
                name: "owner",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_lockID",
                type: "uint256"
            }, {
                internalType: "address payable",
                name: "_newOwner",
                type: "address"
            }],
            name: "transferLockOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "uniswapFactory",
            outputs: [{
                internalType: "contract IUniFactory",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "bool",
                name: "_add",
                type: "bool"
            }],
            name: "whitelistFeeAccount",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_lockID",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }],
        te = [{
            inputs: [{
                internalType: "address payable",
                name: "_feesReceiver",
                type: "address"
            }, {
                internalType: "address",
                name: "_mudraToken",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "OnLockAmountIncreased",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "newUnlockTime",
                type: "uint256"
            }],
            name: "OnLockDurationIncreased",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "migrator",
                type: "address"
            }],
            name: "OnLockMigration",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OnLockOwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "OnLockWithdrawal",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "unlockTime",
                type: "uint256"
            }],
            name: "OnTokenLock",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }],
            name: "OnTokenUnlock",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [],
            name: "bnbFeeAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "newUnlockTime",
                type: "uint256"
            }],
            name: "extendLockTime",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "feeReceiver",
            outputs: [{
                internalType: "address payable",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "increaseAmountBnbFeeAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "increaseAmountMudraFeeAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountToIncrement",
                type: "uint256"
            }, {
                internalType: "uint8",
                name: "feePaymentMode",
                type: "uint8"
            }],
            name: "increaseLockAmount",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [],
            name: "lockNonce",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "unlockTime",
                type: "uint256"
            }, {
                internalType: "address payable",
                name: "withdrawer",
                type: "address"
            }, {
                internalType: "uint8",
                name: "feePaymentMode",
                type: "uint8"
            }],
            name: "lockTokens",
            outputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [],
            name: "lpFeePercent",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "lpToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }],
            name: "lpLockAt",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "lpToken",
                type: "address"
            }],
            name: "lpLocksLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "address",
                name: "migratorContract",
                type: "address"
            }],
            name: "migrate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "migrator",
            outputs: [{
                internalType: "contract IMigrator",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "mudraFeeAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "mudraToken",
            outputs: [{
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "fee",
                type: "uint256"
            }],
            name: "setBnbFeeAmount",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address payable",
                name: "newFeeReceiver",
                type: "address"
            }],
            name: "setFeeReceiver",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "fee",
                type: "uint256"
            }],
            name: "setIncreaseAmountBnbFeeAmount",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "fee",
                type: "uint256"
            }],
            name: "setIncreaseAmountMudraFeeAmount",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "percent",
                type: "uint256"
            }],
            name: "setLpFeePercent",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newMigrator",
                type: "address"
            }],
            name: "setMigrator",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "fee",
                type: "uint256"
            }],
            name: "setMudraFeeAmount",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tokenLocks",
            outputs: [{
                internalType: "address",
                name: "lpToken",
                type: "address"
            }, {
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "unlockTime",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferLock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }],
            name: "userLockAt",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "user",
                type: "address"
            }],
            name: "userLocksLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "lockId",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "withdrawPartially",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }]
    h = b = void 0
    async function ne() {
        return v || $("#lock-list").is(":visible") ? (console.log("skipping wallet refresh as some action is in progress"), $("#newlock_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."), $("#newlock_connect_wallet_msg").show(), $("#discover_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."), $("#discover_connect_wallet_msg").show(), $("#research_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."), void $("#research_connect_wallet_msg").show()) : (v_info = await oe(), 0 == v_info.status ? (console.log("skipping wallet refresh as new account is not compatible"), $("#newlock_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."), $("#newlock_connect_wallet_msg").show(), $("#discover_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."), $("#discover_connect_wallet_msg").show(), $("#research_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."), void $("#research_connect_wallet_msg").show()) : (qe(v_info), ut(v_info), xe(v_info), void v_info))
    }

    function ae(e) {
        e.on("accountsChanged", async e => {
            await ne()
        }), e.on("chainChanged", async e => {
            await ne()
        }), e.on("disconnect", async (e, t) => {
            $("#newlock_connect_wallet_msg").text("Wallet Disconnected. Please refresh page."), $("#newlock_connect_wallet_msg").show(), $("#discover_connect_wallet_msg").text("Wallet Disconnected. Please refresh page."), $("#discover_connect_wallet_msg").show(), $("#research_connect_wallet_msg").text("Wallet Disconnected. Please refresh page."), await $("#research_connect_wallet_msg").show()
        })
    }
    async function oe() {
        var e = {
                status: !0,
                msg: ""
            },
            t = {
                status: !0,
                msg: ""
            },
            n = new Web3(b),
            a = await n.eth.getChainId()
        return (a = evmChains.getChain(a)).name.toLowerCase() != o ? (console.log("Not on BSC Mainnet"), t.status = !1, t.msg = "Current wallet not on BSC Mainnet") : (await n.eth.getAccounts()).length || (console.log("No account information present"), t.status = !1, t.msg = "No account information in current wallet."), 0 == (e = await t).status || (e = await async function() {
            var e, t = {
                    status: !0,
                    msg: ""
                },
                n = new Web3(b),
                a = await n.eth.getAccounts()
            if (!a.length) return console.log("No account information present"), t.status = !1, t.msg = "No account information in current wallet.", t
            for (e = 0; e < a.length;) {
                if (n.utils.isAddress(a[e].toLowerCase())) {
                    h = a[e]
                    break
                }
                e++
            }
            return e >= a.length && (console.log("No account information present"), t.status = !1, t.msg = "No account information in current wallet."), t
        }()).status, e
    }
    async function ie() {
        var t = {
            status: !0,
            msg: ""
        }
        try {
            b = await i.connect()
        } catch (e) {
            return b = void 0, console.log("Could not get injected wallet connection", e), t.status = !1, t.msg = "No wallet detected", t
        }
        return 0 == (t = await oe()).status ? h = b = void 0 : (ae(b), qe(t), ut(t), xe(t)), t
    }
    $(document).ready(async function() {
        var e = {
            walletconnect: {
                package: Be,
                options: {
                    rpc: {
                        56: "https://bsc-dataseed.binance.org/"
                    },
                    rpcUrl: "https://bsc-dataseed.binance.org/",
                    network: "binance",
                    chainId: 56
                }
            }
        }
        i = new Me({
            cacheProvider: !1,
            providerOptions: e,
            disableInjectedProvider: !1
        }), console.log("Web3Modal instance is", i), await async function() {
            var t = {
                status: !0,
                msg: ""
            }
            try {
                b = await i.connectTo("injected")
            } catch (e) {
                return b = void 0, console.log("Could not get injected wallet connection", e), t.status = !1, t.msg = "No wallet detected", t
            }
            return 0 == (t = await oe()).status ? h = b = void 0 : (ae(b), qe(t), ut(t), xe(t)), t
        }()
    })
    const se = [{
        name: "address_0",
        msg: "Comparison with address(0)",
        signature: {
            type: "FunctionCall",
            expression: {
                type: "TypeNameExpression",
                typeName: {
                    type: "ElementaryTypeName",
                    name: "address",
                    stateMutability: null
                }
            },
            arguments: [{
                type: "NumberLiteral",
                number: "0",
                subdenomination: null
            }],
            names: [],
            identifiers: []
        }
    }, {
        name: "",
        msg: "",
        signature: {
            type: "Identifier",
            name: "uniswapv2pair"
        }
    }, {
        name: "",
        msg: "",
        signature: {
            type: "Identifier",
            name: "pancakeswapv2pair"
        }
    }, {
        name: "",
        msg: "",
        signature: {
            type: "Identifier",
            name: "pcsV2Pair"
        }
    }, {
        name: "",
        msg: "",
        signature: {
            type: "Identifier",
            name: "dead"
        }
    }, {
        name: "",
        msg: "",
        signature: {
            type: "Identifier",
            name: "uniswapv1pair"
        }
    }, {
        name: "",
        msg: "",
        signature: {
            type: "Identifier",
            name: "pancakeswapv1pair"
        }
    }]

    function re(e, t, o) {
        var i, s, r = {
            status: !0,
            msg: "",
            details: [],
            score: 0
        }
        if ("==" == e.operator || "!=" == e.operator)
            for (n in t) i = t[n], s = void 0, e.left.name == i.name && (s = e.right), null == (s = e.right.name == i.name ? e.right : s) || function(e) {
                for (a in o) {
                    var t = se[a]
                    if ("Identifier" == e.type && (e.name = e.name.toLowerCase()), _.isEqual(t.signature, e)) return 1
                }
            }(s) || (r.score = r.score + 1)
        return r
    }
    I, A, r = z, u = V
    const le = 30,
        ce = 1e5,
        ue = 20,
        pe = 80,
        de = 50
    async function me(e, t) {
        e = await (t = new c.eth.Contract(J, t)).methods.balanceOf(e).call()
        return e = c.utils.toBN(e)
    }

    function ye(e, t) {
        var n, a = "("
        for (f in e = [...new Set(e)])
            if (n = e[f], "(" == a && (a += "Functions:"), fun = e[f], 100 < (a += " " + n + ",").length) {
                a += " ..."
                break
            }
        return (a += "(" == a ? 'No functions increasing token supply detected in <a target="_blank" href=https://bscscan.com/address/' + t + "#code> contract code&nbsp;</a>" : ' which can increase token supply detected in <a target="_blank" href=https://bscscan.com/address/' + t + "#code> contract code&nbsp;</a>") + ")"
    }

    function _e(e, t) {
        var n = "("
        return (n += 0 == e ? 'No or harmless comparison to owner or custom addresses found in transfer functions of <a target="_blank" href=https://bscscan.com/address/' + t + "#code> contract code&nbsp;</a>" : 'Comparison to owner or custom addresses found in transfer functions of <a target="_blank" href=https://bscscan.com/address/' + t + "#code> contract code&nbsp;</a>") + ")"
    }
    async function ke(e) {
        var t, n, a, o, i
        if (e.research_insights.push((i = "Token developers hold no special privileges after renouncing ownership of the token.", (o = e.token_info).owner != G ? {
                title: "Token Ownership",
                text: "unknown" != o.owner.toLowerCase() ? "Ownership not renounced (Owner: " + o.owner + ")" : "Owner could not be found",
                details: "",
                score: -1,
                priority: 1,
                tooltip: i
            } : {
                title: "Token Ownership",
                text: "Ownership renounced",
                details: "",
                score: 1,
                priority: 1,
                tooltip: i
            })), e.research_insights.push((-1 == (o = e.token_info).total_supply && console.log("Skipping token burn as total supply is not available"), i = "Burned token indicates that owner share of token is permanently reduced", await ((o = o.total_token_burned.muln(100).div(o.total_supply)) < le ? {
                title: "Token Burn",
                text: 0 == o ? "No tokens burned" : "Only " + o.toNumber().toFixed(2) + "% tokens burned",
                details: "",
                score: 0,
                priority: -1,
                tooltip: i
            } : {
                title: "Token Burn",
                text: o.toNumber().toFixed(2) + "% tokens burned",
                details: "",
                score: 1,
                priority: -1,
                tooltip: i
            }))), e.research_insights.push(await async function(e) {
                var t, n, a = "Verified contract Source code provides transparency for users interacting with smart contracts."
                try {
                    return t = await $.getJSON("https://api.bscscan.com/api?module=contract&action=getsourcecode&address=" + e.address + "&apikey=GNRFBMP3MVFK82MU8DI41ZX4QTDJFNRT4D"), n = "", "ok" == t.message.toLowerCase() && "" != t.result[0].SourceCode && (n = t.result[0].SourceCode, e.source_code = n, e.contract_name = t.result[0].ContractName), "" != n ? {
                        title: "Token Contract",
                        text: "Token contract source code published at BscScan",
                        details: "",
                        score: 1,
                        priority: -1,
                        tooltip: a
                    } : {
                        title: "Token Contract",
                        text: "Token contract source code not published at BscScan",
                        details: "",
                        score: -1,
                        priority: -1,
                        tooltip: a
                    }
                } catch (e) {
                    return $e("Research: Skipping bscscan contract check" + (null != e.message ? e.message : "Unknown error")), {
                        title: "Token Contract",
                        text: "Token contract source code publish status on BscScan could not be determined",
                        details: "",
                        score: 0,
                        priority: -1,
                        tooltip: a
                    }
                }
            }(e.token_info)), "" != e.token_info.source_code) try {
            e.token_info.ast = SolidityParser.parse(e.token_info.source_code)
        } catch (o) {
            try {
                t = "", n = JSON.parse(e.token_info.source_code)
                for (a of Object.keys(n)) t += n[a].content
                e.token_info.ast = SolidityParser.parse(t)
            } catch (o) {
                $e("AST parsing failed for: " + e.token_info.address + (null != o.message ? o.message : "Unknown error"))
            }
            try {
                if ("" == e.token_info.ast) {
                    t = "", n = JSON.parse(e.token_info.source_code.substring(1, e.token_info.source_code.length - 1))
                    for (a of Object.keys(n.sources)) t += n.sources[a].content
                    e.token_info.ast = SolidityParser.parse(t)
                }
            } catch (o) {
                $e("AST parsing failed for: " + e.token_info.address + (null != o.message ? o.message : "Unknown error"))
            }
        }
        e.research_insights.push(await async function(e) {
            var t, n, a, o, i = "A mintable token has non-fixed supply, enabling owner to generate and dump tokens at will. We analyze smart contract code to check if minting is possible. This feature is being continuously improved."
            try {
                return "" == e.ast ? {
                    title: "Token Mint",
                    text: "Token contract source code not available or could not be analyzed.",
                    details: "",
                    score: 0,
                    priority: -1,
                    tooltip: i
                } : (n = e.ast, a = e.contract_name, o = {
                    status: !0,
                    msg: "",
                    details: [],
                    score: 0
                }, SolidityParser.visit(n, {
                    ContractDefinition: function(e) {
                        var n, t
                        null != e.name && e.name.toLowerCase() == a.toLowerCase() && (SolidityParser.visit(e, {
                            FunctionDefinition: function(e) {
                                null != e.name && "mint" == e.name.toLowerCase() && (o.score = o.score + 1, o.details.push("mint"))
                            }
                        }), SolidityParser.visit(e, {
                            FunctionDefinition: function(t) {
                                SolidityParser.visit(t, {
                                    FunctionCall: function(e) {
                                        null != e.expression.name && "_mint" == e.expression.name.toLowerCase() && 1 != t.isConstructor && "public" == t.visibility && (o.score = o.score + 1, o.details.push(t.name))
                                    }
                                })
                            }
                        }), n = void 0, t = !1, SolidityParser.visit(e, {
                            FunctionDefinition: function(e) {
                                null != e.name && "totalSupply" == e.name && SolidityParser.visit(e, {
                                    ReturnStatement: function(e) {
                                        "Identifier" == e.expression.type && (n = e.expression.name)
                                    }
                                })
                            }
                        }), null != n && (SolidityParser.visit(e, {
                            StateVariableDeclaration: function(e) {
                                SolidityParser.visit(e, {
                                    VariableDeclaration: function(e) {
                                        null != e.identifier.name && e.identifier.name == n && e.isDeclaredConst && (t = !0)
                                    }
                                })
                            }
                        }), t || SolidityParser.visit(e, {
                            FunctionDefinition: function(t) {
                                "_mint" != t.name && SolidityParser.visit(t, {
                                    ExpressionStatement: function(e) {
                                        "=" == e.expression.operator && e.expression.left.name == n && 1 != t.isConstructor && "public" == t.visibility && (o.score = o.score + 1, o.details.push(t.name))
                                    }
                                })
                            }
                        })))
                    }
                }), 0 == (t = o).score ? {
                    title: "Token Mint",
                    text: "Token is likely non-mintable",
                    details: "",
                    custom_html: ye(t.details, e.address),
                    score: 1,
                    priority: -1,
                    tooltip: i,
                    premium: !0
                } : {
                    title: "Token Mint",
                    text: "Token is likely mintable",
                    details: "",
                    custom_html: ye(t.details, e.address),
                    score: -1,
                    priority: -1,
                    tooltip: i,
                    premium: !0
                })
            } catch (e) {
                return $e("Research: Skipping mint check" + (null != e.message ? e.message : "Unknown error")), {
                    title: "Token Mint",
                    text: "Token contract source code not available or could not be analyzed.",
                    details: "",
                    score: 0,
                    priority: -1,
                    tooltip: i
                }
            }
        }(e.token_info)), e.research_insights.push(await async function(e) {
            var t, r, n, l, a = "A honeypot token restricts non privileged users to transfer/sell tokens. We analyze smart contract code to detect this. This feature is being continuously improved."
            try {
                return "" == e.ast ? {
                    title: "Honeypot",
                    text: "Token contract source code not available or could not be analyzed.",
                    details: "",
                    score: 0,
                    priority: -1,
                    tooltip: a
                } : (r = e.ast, n = e.contract_name, l = {
                    status: !0,
                    msg: "",
                    details: [],
                    score: 0
                }, SolidityParser.visit(r, {
                    ContractDefinition: function(s) {
                        null != s.name && s.name.toLowerCase() == n.toLowerCase() && SolidityParser.visit(s, {
                            FunctionDefinition: function(e) {
                                var a, o, i "_transfer" == e.name && (a = e.parameters[0], o = e.parameters[1], i = e.parameters[2], SolidityParser.visit(e, {
                                    ExpressionStatement: function(e) {
                                        SolidityParser.visit(e, {
                                            BinaryOperation: function(e) {
                                                e = re(e, [a, o], se), l.score = l.score + e.score
                                            }
                                        })
                                    }
                                }), SolidityParser.visit(e, {
                                    IfStatement: function(e) {
                                        var t = !1
                                        SolidityParser.visit(e, {
                                            BinaryOperation: function(e) {
                                                0 != re(e, [a, o], se).score && (t = !0)
                                            }
                                        }), t && SolidityParser.visit(e, {
                                            ExpressionStatement: function(e) {
                                                SolidityParser.visit(e, {
                                                    BinaryOperation: function(e) {
                                                        var t, n "==" != e.operator && "!=" != e.operator && ">=" != e.operator && "<=" != e.operator && ">" != e.operator && "<" != e.operator || (e.left.name == i.name || e.right.name == i.name ? (t = void 0, e.left.name == i.name && (t = e.right), "Identifier" == (t = e.right.name == i.name ? e.right : t).type && (n = !1, SolidityParser.visit(s, {
                                                            StateVariableDeclaration: function(e) {
                                                                SolidityParser.visit(e, {
                                                                    VariableDeclaration: function(e) {
                                                                        null != e.identifier.name && e.identifier.name == t.name && e.isDeclaredConst && (n = !0)
                                                                    }
                                                                })
                                                            }
                                                        }), n || SolidityParser.visit(s, {
                                                            FunctionDefinition: function(e) {
                                                                SolidityParser.visit(e, {
                                                                    ExpressionStatement: function(e) {
                                                                        "=" == e.expression.operator && e.expression.left.name == t.name && (l.msg = "can")
                                                                    }
                                                                })
                                                            }
                                                        }))) : e.left.name == a.name && e.right.name == a.name && e.left.name == o.name && e.right.name == o.name || (l.score = l.score + 1, SolidityParser.visit(r, {
                                                            Identifier: function(e) {
                                                                "mintedByMudra" == e.name && (l.score = 0)
                                                            }
                                                        })))
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }))
                            }
                        })
                    }
                }), 0 == l.score ? (t = "Token is likey not a honeypot", "can" == l.msg && (t += ", however there is a way if ownership is not renounced it can be turned into a honeypot."), {
                    title: "Honeypot",
                    text: t,
                    details: "",
                    custom_html: _e(l.score, e.address),
                    score: 1,
                    priority: -1,
                    tooltip: a,
                    premium: !0
                }) : {
                    title: "Token Honeypot",
                    text: "Token is likely a honeypot",
                    details: "",
                    custom_html: _e(l.score, e.address),
                    score: -1,
                    priority: -1,
                    tooltip: a,
                    premium: !0
                })
            } catch (e) {
                return $e("Research: Skipping honeypot check" + (null != e.message ? e.message : "Unknown error")), {
                    title: "Honeypot",
                    text: "Token contract source code not available or could not be analyzed.",
                    details: "",
                    score: 0,
                    priority: -1,
                    tooltip: a
                }
            }
        }(e.token_info))
    }
    async function fe(e) {
        var t, n, a, o = {
            address: e,
            symbol: "",
            name: "",
            owner: "unknown",
            valid: !0,
            err_msg: "",
            decimals: -1,
            total_supply: -1,
            total_token_burned: new c.utils.BN(0),
            source_code: "",
            ast: "",
            contract_name: ""
        }
        if (!c.utils.isAddress(e)) return o.err_msg = "Please enter a valid token address", o.valid = !1, o
        if ("0x" == await c.eth.getCode(e)) return o.err_msg = "Please enter a valid token address", o.valid = !1, o
        a = new c.eth.Contract(J, e)
        try {
            o.symbol = await a.methods.symbol().call()
        } catch (e) {
            console.log(e)
        }
        try {
            o.name = await a.methods.name().call()
        } catch (e) {
            console.log(e)
        }
        if ("Pancake LPs" == o.name) return o.err_msg = "Please enter a valid token address. This seems to be a LP token.", o.valid = !1, o
        try {
            o.owner = await a.methods.owner().call()
        } catch (e) {
            console.log(e)
        }
        try {
            o.decimals = await a.methods.decimals().call()
        } catch (e) {
            console.log(e)
        }
        try {
            o.total_supply = await a.methods.totalSupply().call(), o.total_supply = c.utils.toBN(o.total_supply)
        } catch (e) {
            console.log(e)
        }
        return t = await me(G, o.address), n = await me(Q, o.address), e = await me(X, o.address), a = (a = (a = (a = new c.utils.BN(0)).add(t)).add(n)).add(e), o.total_token_burned = a, o
    }

    function we(e, t, n, a) {
        var o = new c.utils.BN(0)
        return {
            time1: o = o.add(t),
            time2: o
        }
    }
    d = [{
        name: "DXSale",
        address: [U],
        enabled: !0,
        balance_calculator: async function(e, t, n, a) {
            return {
                time1: t,
                time2: new c.utils.BN(0)
            }
        },
        link_generator: function(e, t) {
            return "https://dxsale.app/app/pages/dxlock"
        }
    }, {
        name: "UniCrypt",
        address: [W],
        enabled: !0,
        balance_calculator: async function(e, t, n, a) {
            for (var o, i = {
                    time1: new c.utils.BN(0),
                    time2: new c.utils.BN(0)
                }, s = new c.eth.Contract(ee, W), r = await s.methods.getNumLocksForToken(e).call(), l = 0; l < r;)(o = await s.methods.tokenLocks(e, l).call()).unlockDate > n && (i.time1 = i.time1.add(new Web3.utils.toBN(o.amount))), o.unlockDate > a && (i.time2 = i.time2.add(new Web3.utils.toBN(o.amount))), l++
                return i.time1 = -1 == i.time1.cmp(t) ? i.time1 : t, i.time2 = -1 == i.time2.cmp(t) ? i.time2 : t, i
        },
        link_generator: function(e, t) {
            return "https://app.unicrypt.network/amm/pancake-v" + t + "/pair/" + e
        }
    }, {
        name: "CryptEx",
        address: [O],
        enabled: !0,
        balance_calculator: async function(e, t, n, a) {
            for (var o, i = {
                    time1: new c.utils.BN(0),
                    time2: new c.utils.BN(0)
                }, s = new c.eth.Contract(Z, O), r = await s.methods.lockNonce().call(), l = 0; l < r;)(o = await s.methods.tokenLocks(l).call()).lpToken.toLowerCase() == e.toLowerCase() && (o.unlockTime > n && (i.time1 = i.time1.add(new Web3.utils.toBN(o.tokenAmount))), o.unlockTime > a && (i.time2 = i.time2.add(new Web3.utils.toBN(o.tokenAmount)))), l++
                return i.time1 = -1 == i.time1.cmp(t) ? i.time1 : t, i.time2 = -1 == i.time2.cmp(t) ? i.time2 : t, i
        },
        link_generator: function(e, t) {
            return "https://cryptexlock.me/pair/" + e
        }
    }, {
        name: "DeepLocker",
        address: [F],
        enabled: !0,
        balance_calculator: async function(e, t, n, a) {
            var o, i = {
                    time1: new c.utils.BN(0),
                    time2: new c.utils.BN(0)
                },
                s = new c.eth.Contract(K, F),
                r = await s.methods.getDepositsByTokenAddress(e).call()
            for (id in r)(o = await s.methods.lockedToken(r[id]).call()).unlockTime > n && (i.time1 = i.time1.add(new Web3.utils.toBN(o.tokenAmount))), o.unlockTime > a && (i.time2 = i.time2.add(new Web3.utils.toBN(o.tokenAmount)))
            return i.time1 = -1 == i.time1.cmp(t) ? i.time1 : t, i.time2 = -1 == i.time2.cmp(t) ? i.time2 : t, i
        },
        link_generator: function(e, t) {
            return "https://deeplock.io/lock/" + e
        }
    }, {
        name: "Mudra Locker",
        address: [q],
        enabled: !0,
        balance_calculator: async function(e, t, n, a) {
            for (var o, i = {
                    time1: new c.utils.BN(0),
                    time2: new c.utils.BN(0)
                }, s = new c.eth.Contract(te, q), r = await s.methods.lpLocksLength(e).call(), l = 0; l < r;) o = await s.methods.lpLockAt(e, l).call(), (o = await s.methods.tokenLocks(o).call()).lpToken.toLowerCase() == e.toLowerCase() && (o.unlockTime > n && (i.time1 = i.time1.add(new Web3.utils.toBN(o.tokenAmount))), o.unlockTime > a && (i.time2 = i.time2.add(new Web3.utils.toBN(o.tokenAmount)))), l++
                return i.time1 = -1 == i.time1.cmp(t) ? i.time1 : t, i.time2 = -1 == i.time2.cmp(t) ? i.time2 : t, i
        },
        link_generator: function(e, t) {
            return "https://mudra.website/index/?certificate=yes&type=0&lp=" + e
        }
    }, {
        name: "Burned_",
        address: [G],
        enabled: !0,
        balance_calculator: we,
        link_generator: function(e, t) {
            return "https://bscscan.com/token/" + e + "?a=" + G
        }
    }, {
        name: "Burned_One",
        address: [Q],
        enabled: !0,
        balance_calculator: we,
        link_generator: function(e, t) {
            return "https://bscscan.com/token/" + e + "?a=" + Q
        }
    }, {
        name: "Burned_Dead",
        address: [X],
        enabled: !0,
        balance_calculator: we,
        link_generator: function(e, t) {
            return "https://bscscan.com/token/" + e + "?a=" + X
        }
    }]
    async function be(e, t, n) {
        var o = {
                total_value_USD_today: 0,
                total_token_reserves: new c.utils.BN(0),
                total_value_USD_burned_forever: 0,
                total_value_USD_locked_today: 0,
                total_value_USD_locked_after_1year: 0,
                pool_address: void 0,
                total_supply: 0,
                locker_providers: []
            },
            i = new c.eth.Contract(j, n),
            s = await i.methods.getPair(e.address, t).call()
        return s.toLowerCase() == G.toLowerCase() ? log_str = "PanCake has no " + e.symbol + "-" + t + " pair" : (o.pool_address = s, o.label = (i = e.symbol, e = "", e = i + "/", t == r && (e += "WBNB"), t == u && (e += "BUSD"), (i = n) == A && (e += " PancakeV2"), i == S && (e += " PancakeV1"), e), n = await async function(e, t, n) {
            var o = {
                    pegged_reserve: 0,
                    token_reserve: 0,
                    total_supply: new c.utils.BN(0),
                    locker_providers: [],
                    total_lptoken_burned_forever: c.utils.toBN(0),
                    total_lptoken_locked_today: c.utils.toBN(0),
                    total_lptoken_locked_after_1year: c.utils.toBN(0),
                    links: []
                },
                i = new c.eth.Contract(Y, e),
                s = await i.methods.getReserves().call(),
                r = await i.methods.token0().call()
            for (p in o.total_supply = c.utils.toBN(await i.methods.totalSupply().call()), r == t ? (o.pegged_reserve = c.utils.toBN(s[0]), o.token_reserve = c.utils.toBN(s[1])) : (o.pegged_reserve = c.utils.toBN(s[1]), o.token_reserve = c.utils.toBN(s[0])), o.locker_providers = await async function(e, t, n) {
                    var o, i = []
                    for (l in d) d[l].enabled && 1e3 < (o = await async function(e, t, n, o) {
                        var i, s, r = {}
                        for (a in r.balance = new c.utils.BN(0), r.balance_after_1year = new c.utils.BN(0), r.name = n.name, n.address) i = await e.methods.balanceOf(n.address[a]).call(), r.balance = r.balance.add(new c.utils.toBN(i))
                        return r.balance <= 1e3 || ((s = new Date).setMonth(s.getMonth() + 12), s = s.getTime() / 1e3, s = await n.balance_calculator(t, r.balance, (new Date).getTime() / 1e3, s), r.balance = s.time1, r.balance_after_1year = s.time2, r.link = n.link_generator(t, o)), r
                    }(e, t, d[l], n)).balance && i.push(o)
                    return i
                }(i, e, n), o.locker_providers) provider = o.locker_providers[p], o.total_lptoken_locked_today = o.total_lptoken_locked_today.add(provider.balance), o.total_lptoken_locked_after_1year = o.total_lptoken_locked_after_1year.add(provider.balance_after_1year)
            return o
        }(s, t, n == A ? 2 : 1), o.total_value_USD_today = await async function(e, t) {
            if (t == r) return o = await (a = new c.eth.Contract(j, A)).methods.getPair(r, u).call(), o = await (a = new c.eth.Contract(Y, o)).methods.getReserves().call(), n = await (o = (a = await a.methods.token0().call()) == r ? (n = c.utils.toBN(o[0]), c.utils.toBN(o[1])) : (n = c.utils.toBN(o[1]), c.utils.toBN(o[0]))).div(n).toNumber(), e.pegged_reserve.muln(n) / 1e18
            var n, a, o
            if (t == u) return e.pegged_reserve / 1e18
            throw "unknown pegged token"
        }(n, t), o.total_token_reserves = n.token_reserve, o.total_supply = n.total_supply, o.locker_providers = o.locker_providers.concat(n.locker_providers), 0 != o.total_supply && (o.total_value_USD_locked_today = n.total_lptoken_locked_today / o.total_supply * o.total_value_USD_today, o.total_value_USD_locked_after_1year = n.total_lptoken_locked_after_1year / o.total_supply * o.total_value_USD_today, o.total_value_USD_burned_forever = n.total_lptoken_burned_forever / o.total_supply * o.total_value_USD_today)), o
    }
    const he = e => e < 1e3 ? e.toFixed(2) : 1e3 <= e && e < 1e6 ? +(e / 1e3).toFixed(2) + "K" : 1e6 <= e && e < 1e9 ? +(e / 1e6).toFixed(2) + "M" : 1e9 <= e && e < 1e12 ? +(e / 1e9).toFixed(2) + "B" : 1e12 <= e ? +(e / 1e12).toFixed(2) + "T" : void 0

    function ge(e) {
        var t = "("
        for (l in e) liquidity = e[l], liquidity.pool_address && (t += '&nbsp;<a target="_blank" href=https://bscscan.com/address/' + liquidity.pool_address + ">" + liquidity.label + "&nbsp;</a>")
        return "(" == t && (t += "No Pools found "), t + ")"
    }

    function ve(e) {
        var t, n = "("
        for (l in e)
            if (liquidity = e[l], t = 0, liquidity.pool_address)
                for (ll in liquidity.locker_providers) t++, n += '&nbsp;<a target="_blank" href=' + liquidity.locker_providers[ll].link + ">" + liquidity.label + "-Locker-" + t + "&nbsp;</a>"
        return "(" == n && (n += "No Lockers found "), n + ")"
    }

    function Te(e) {
        var t, n, a, o, i = e.aggregate_liquidity_info
        e.research_insights.push((o = e.liquidity_info, n = "Large liquidity pool facilitates large trading volumes. We currently track Pancake V1 and V2 for WBNB and BUSD liquidity pools.", (a = i).total_value_USD_today < ce ? {
            title: "Liquidity Pool Value",
            text: "Only $" + he(a.total_value_USD_today) + " value available in liquidity pools",
            details: "",
            custom_html: ge(o),
            score: -1,
            priority: 1,
            tooltip: n
        } : {
            title: "Liquidity Pool Value",
            text: "$" + he(a.total_value_USD_today) + " value available in liquidity pools",
            details: "",
            custom_html: ge(o),
            score: 1,
            priority: 1,
            tooltip: n
        })), e.research_insights.push((a = e.token_info, o = "Large allocation of tokens to liquidity pools facilitates large trading volumes. Burned tokens are excluded from total supply for this calculation.", n = i.total_token_reserves, (n = 0 == (t = a.total_supply.sub(a.total_token_burned)) ? 0 : n / t * 100) < ue ? {
            title: "Liquidity Pool Token Allocation",
            text: "Only " + n.toFixed(2) + "% of " + a.symbol + " tokens available in liquidity pools",
            details: "",
            score: -1,
            priority: 1,
            tooltip: o
        } : {
            title: "Liquidity Pool Token Allocation",
            text: n.toFixed(2) + "%  of " + a.symbol + " tokens available in liquidity pools",
            details: "",
            score: 1,
            priority: 1,
            tooltip: o
        })), e.research_insights.push((a = e.liquidity_info, o = "Locked liquidity pool assures no rug pull. We only track well known LP lockers (Mudra, DXSale Lock, UniCrypt, DeepLocker, CryptEx, Burn address). Custom lockers can be easily manipulated.", (n = 0 == (n = i).total_value_USD_today ? 0 : n.total_value_USD_locked_today / n.total_value_USD_today * 100) < pe ? {
            title: "Locked Liquidity",
            text: "As of today, only " + n.toFixed(2) + "% of liquidity is locked in known lockers (includes burned tokens).",
            details: "",
            custom_html: ve(a),
            score: -1,
            priority: 1,
            tooltip: o,
            premium: !0
        } : {
            title: "Locked Liquidity",
            text: "As of today, " + n.toFixed(2) + " % of liquidity is locked in known lockers (includes burned tokens).",
            details: "",
            custom_html: ve(a),
            score: 1,
            priority: 1,
            tooltip: o,
            premium: !0
        })), e.research_insights.push((i = (e = function(e) {
            for (ll in e.locker_providers)
                if ("DXSale" == e.locker_providers[ll].name) return !0
            return !1
        }(o = i)) ? "(Warning: This information may be incomplete, few lock providers for this token do not provide access to lock time)" : "", e = "Locked liquidity pool assures no rug pull. We only track well known LP lockers (Mudra, DXSale, UniCrypt, DeepLocker, CryptEx). Custom lockers can be easily manipulated.", (o = 0 == o.total_value_USD_today ? 0 : o.total_value_USD_locked_after_1year / o.total_value_USD_today * 100) < de ? {
            title: "Locked Liquidity Time",
            text: "After 1 year from now, only " + o.toFixed(2) + "% of liquidity will remain locked in known lockers. " + i,
            details: "",
            custom_html: void 0,
            score: -1,
            priority: 1,
            tooltip: e,
            premium: !0
        } : {
            title: "Locked Liquidity Time",
            text: "After 1 year from now, " + o.toFixed(2) + " % of liquidity will remain locked in known lockers",
            details: "",
            custom_html: void 0,
            score: 1,
            priority: 1,
            tooltip: e,
            premium: !0
        }))
    }

    function $e(e) {
        try {
            $.post("/api/log/", {
                address: e
            })
        } catch (e) {
            console.log(e)
        }
    }

    function xe(e) {
        null != h ? ($("#research_connect_wallet").hide(), $("#research_connected_wallet_address").text(h.substring(0, 6) + ".." + h.substring(h.length - 4, h.length)), $("#research_connected_wallet").show(), $("#research_connect_wallet_msg").hide()) : ($("#research_connect_wallet").show(), $("#research_connected_wallet_address").text(""), $("#research_connected_wallet").hide(), $("#research_connect_wallet_msg").text(e.msg), $("#research_connect_wallet_msg").show())
    }
    async function Le() {
        try {
            $("#research_token_info").text(""), $("#research_token_info_spinner").show(), $e("Research Input  for: " + $("#research_token_address").val().trim().toLowerCase())
            var e = await fe($("#research_token_address").val().trim().toLowerCase())
            e.valid ? ($("#research_fee").show(), $("#research_button").show(), $("#research_button").prop("disabled", !1), $("#research_token_info_spinner").hide(), $("#research_token_info").text(e.name + "(" + e.symbol + ")"), "url" == $("#research_token_address").attr("data-trigger") && ($("#research_token_address").attr("data-trigger", ""), $("#research_button").trigger("click"))) : ($("#research_fee").hide(), $("#research_button").hide(), $("#research_token_info_spinner").hide(), $("#research_token_info").html(e.err_msg), $e("Research Input failed: " + e.err_msg))
        } catch (e) {
            $e("Research Input failed: " + (null != e.message ? e.message : "Unknown error")), console.log(e), $("#research_fee").hide(), $("#research_button").hide(), $("#research_token_info_spinner").hide(), $("#research_token_info").text("Something went wrong. Please try again.")
        }
    }
    $(document).ready(function() {
        var e
        c = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org")), $("#research_token_address").prop("disabled", !1), $("#research_token_address").on("input", async function(e) {
            await Le()
        }), $("#research_token_address").on("keypress", async function(e) {
            13 == e.which && await Le()
        }), $("#research_button").on("click", async function(e) {
            try {
                $("#research_token_address").prop("disabled", !0), $("#research_button").prop("disabled", !0), $("#research_button_spinner").show(), await async function(e) {
                    var t, n, a, o, i, s, r, l, c, u = !1
                    try {
                        null != h && (n = await new(t = new Web3(b)).eth.Contract(J, R).methods.balanceOf(h).call(), n = t.utils.toBN(n), a = await new t.eth.Contract(Y, H).methods.getReserves().call(), o = t.utils.toBN(a[0]), i = t.utils.toBN(a[1]).div(o), s = await new t.eth.Contract(Y, E).methods.getReserves().call(), r = t.utils.toBN(s[0]), l = t.utils.toBN(s[1]), c = t.utils.fromWei(r.mul(n).div(l)) * i, u = 100 <= c)
                    } catch (e) {
                        ct("Research user account failed: " + (null != e.message ? e.message : "Unknown error")), ct("Research user account failed: " + (null != e.stack ? e.stack : "Unknown stack"))
                    }
                    $("#research_result_title").text("Insights for " + e.token_info.name + "(" + e.token_info.symbol + ")"), $("#research_result_insights li").remove(), $.each(e.research_insights, function(e, t) {
                        var n, a = t.text "" != t.details && (a = a + "(" + t.details + ")"),
                            n = t.custom_html || "",
                            null != t.premium && 1 == t.premium && (t.title = t.title + '<sup style="color:green;background-color:powderblue;">Premium</sup>'), null == t.premium || 1 != t.premium || u ? (icon = 1 == t.score ? "icofont-check-circled green" : 0 == t.score ? "icofont-warning yellow" : "icofont-error red", color = 1 == t.score ? "#28a745" : 0 == t.score ? "#FFA500" : "#DC143C", $("#research_result_insights").append('<li><i class="' + icon + '" style="color:' + color + ';"></i><h5 class="title" style="display:inline-block;">' + t.title + "</h5>:&nbsp;" + a + "&nbsp;" + n + '<a href="#" data-toggle="tooltip" data-placement="right" title="' + t.tooltip + '"onclick="return false"><i class="icofont-info-circle" style="color: #C0C0C0"></i></a></li>')) : (icon = "icofont-question-circle yellow", color = "#FFA500", a = '<span style="color: transparent;text-shadow: 0 0 5px rgba(0,0,0,0.5);">Research findings</span>Get access with <a href="#pricing">Mudra Premium</a>', $("#research_result_insights").append('<li><i class="' + icon + '" style="color:' + color + ';"></i><h5 class="title" style="display:inline-block;">' + t.title + "</h5>:&nbsp;" + a + '&nbsp;<a href="#" data-toggle="tooltip" data-placement="right" title="' + t.tooltip + '"onclick="return false"><i class="icofont-info-circle" style="color: #C0C0C0"></i></a></li>'))
                    }), $('[data-toggle="tooltip"]').tooltip()
                }(await async function(e) {
                    $e("Research request for: " + e)
                    var t = {
                        basic_info: {},
                        valid: !0,
                        err_msg: ""
                    }
                    return t.token_info = await fe(e), t.research_insights = [], await ke(t), t.liquidity_info = [], t.liquidity_info.push(await be(t.token_info, r, A, I)), t.liquidity_info.push(await be(t.token_info, u, A, I)), t.liquidity_info.push(await be(t.token_info, r, S, P)), t.liquidity_info.push(await be(t.token_info, u, S, P)), t.aggregate_liquidity_info = function(e) {
                        var t = {
                            total_value_USD_today: 0,
                            total_token_reserves: new c.utils.BN(0),
                            total_supply: new c.utils.BN(0),
                            total_value_USD_burned_forever: 0,
                            total_value_USD_locked_today: 0,
                            total_value_USD_locked_after_1year: 0,
                            locker_providers: []
                        }
                        for (l in e) liquidity = e[l], t.total_value_USD_today += liquidity.total_value_USD_today, t.total_token_reserves = t.total_token_reserves.add(liquidity.total_token_reserves), t.total_value_USD_burned_forever += liquidity.total_value_USD_burned_forever, t.total_value_USD_locked_today += liquidity.total_value_USD_locked_today, t.total_value_USD_locked_after_1year += liquidity.total_value_USD_locked_after_1year, t.locker_providers = t.locker_providers.concat(liquidity.locker_providers)
                        return t
                    }(t.liquidity_info), Te(t), t
                }($("#research_token_address").val().trim().toLowerCase())), $("#research_result").show(), $("#research_button_spinner").hide(), $("#research_token_address").prop("disabled", !1), $("#research_button").prop("disabled", !1), $("#research_fee").hide(), $("#research_button").hide()
            } catch (e) {
                console.log(e), $e("Research request failed: " + (null != e.message ? e.message : "Unknown error")), $("#research_button_spinner").hide(), $("#research_token_address").prop("disabled", !1), $("#research_button").prop("disabled", !1), $("#research_token_info_spinner").hide(), $("#research_token_info").text("Something went wrong. Please try again."), $("#research_fee").hide(), $("#research_button").hide(), $("#research_token_address").attr("data-trigger", "")
            }
        }), new URLSearchParams(window.location.search).has("research") && ((e = new URLSearchParams(window.location.search)).has("address") ? (e = e.get("address"), $("#research_token_address").val(e), $("#research_token_address").attr("data-trigger", "url"), $("#research_token_address").trigger("input"), document.querySelector("#features-research").scrollIntoView({
            behavior: "smooth"
        })) : console.log("incorrect research URL")), $("#research_connect_wallet").on("click", async function(e) {
            await ie()
        })
    }), g = void 0, m = []
    const Me = window.Web3Modal.default,
        Be = window.WalletConnectProvider.default
    v = !1
    const Ce = .1
    y = t, o = "binance smart chain mainnet", T = q, x = new Web3(new Web3.providers.HttpProvider(y))
    async function De() {
        var e, t, n, a, o, i, s, r, l
        for (console.log("get all locks"), e = [], t = new Web3(b), n = h, o = await (a = new t.eth.Contract(te, T)).methods.userLocksLength(n).call(), i = 0; i < o;) s = await a.methods.userLockAt(n, i).call(), (r = await a.methods.tokenLocks(s).call()).lpToken = r.lpToken.toLowerCase(), l = await Pe(r.lpToken), l = {
                id: s,
                lp_address: r.lpToken,
                amount: t.utils.toBN(r.tokenAmount),
                status: !0,
                unlock_time: r.unlockTime,
                lp_info: l
            }, e.push(l), i++
            return e
    }
    async function Ne(e, t) {
        var n, a, o, i, s, r, l
        if (console.log("get all locks"), n = [], i = await (o = new(a = new Web3(y)).eth.Contract(te, T)).methods.lockNonce().call(), !((i = parseInt(i)) < e)) {
            for (s = e; s < i && s < e + t;)(r = await o.methods.tokenLocks(s).call()).lpToken = r.lpToken.toLowerCase(), r.lpToken.toLowerCase() != G.toLowerCase() && (l = await Pe(r.lpToken), l = {
                    id: s,
                    lp_address: r.lpToken,
                    amount: a.utils.toBN(r.tokenAmount),
                    status: !0,
                    unlock_time: r.unlockTime,
                    lp_info: l
                }, n.push(l)), s++
                return n
        }
    }
    async function Pe(e) {
        var t, n = e,
            a = null == b ? y : b,
            a = {
                token0_info: {
                    address: "",
                    name: "",
                    symbol: ""
                },
                token1_info: {
                    address: "",
                    name: "",
                    symbol: ""
                },
                total_supply: new(e = new Web3(a)).utils.BN(0),
                valid: !0,
                err_msg: "",
                allowance: !1
            }
        if (!e.utils.isAddress(n)) return a.err_msg = "Not a valid LP address", ze("LP token address" + n), a.valid = !1, a
        if ((await e.eth.getCode(n)).toLowerCase() == "0x".toLowerCase()) return a.err_msg = "Not a valid LP address", ze("LP token code" + n), a.valid = !1, a
        try {
            if (t = new e.eth.Contract(Y, n), a.name = await t.methods.name().call(), a.name.toLowerCase() != "Pancake LPs".toLowerCase()) return a.err_msg = "Not a valid LP address", ze("LP token pancake" + n), a.valid = !1, a
        } catch (e) {
            return a.err_msg = "Not a valid LP address", ze("LP token pancake exception" + n), a.valid = !1, a
        }
        return a.token0_info.address = await t.methods.token0().call(), a.token1_info.address = await t.methods.token1().call(), a.total_supply = e.utils.toBN(await t.methods.totalSupply().call()), t = new e.eth.Contract(J, a.token0_info.address), a.token0_info.symbol = await t.methods.symbol().call(), a.token0_info.name = await t.methods.name().call(), e = new e.eth.Contract(J, a.token1_info.address), a.token1_info.symbol = await e.methods.symbol().call(), a.token1_info.name = await e.methods.name().call(), null != h && (a.allowance = (e = n, e = await (e = new(n = new Web3(b)).eth.Contract(Y, e)).methods.allowance(h, T).call(), await ((n = n.utils.toBN(2).pow(n.utils.toBN(256)).sub(n.utils.toBN(1))).cmp(Web3.utils.toBN(e)) <= 0))), a
    }
    async function Se(e) {
        var t = new Web3(b),
            e = await (e = new t.eth.Contract(Y, e)).methods.balanceOf(h).call(),
            e = t.utils.fromWei(e, "ether")
        return parseFloat(e), e
    }
    async function Ie() {
        var e, t
        if (g)
            for (l in e = await Se(g), $("#newlock_lptoken_balance_info").text(e), $("#newlock_amount").val(e), t = await De()) t[l].lp_address.toLowerCase() == g.toLowerCase() && $("#newlock_result_info").html("You already have a lock for this LP. You can <a onclick=$('#lock_manage_tab_link').click() href='#tab-2'>view/manage your locks.</a>")
    }

    function Ae(e) {
        $("#newlock_lock_max_amount").prop("disabled", e), $("#newlock_amount").prop("disabled", e), $("#newlock_unlocktime_now").prop("disabled", e), $("#newlock_unlocktime_plus1").prop("disabled", e), $("#newlock_unlocktime").prop("disabled", e), $("#newlock_feeLP").prop("disabled", e), $("#newlock_feeBNB").prop("disabled", e), $("#newlock_lockbutton").prop("disabled", e), $("#newlock_lockbutton_approve").prop("disabled", e)
    }

    function Ue() {
        $("#newlock_amount").val(""), document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours() + 24), !0), $("#newlock_feeLP").prop("checked", !1), $("#newlock_feeBNB").prop("checked", !0), $("#newlock_lptoken_info").html("--/--"), $("#newlock_lptoken_balance_info").text("0"), $("#newlock_lockbutton_approve span").first().text("Approve LP Token")
    }
    async function Fe(e, t, n) {
        var a = {
            status: !1,
            address: ""
        }
        return (t = await new new Web3(null == b ? y : b).eth.Contract(j, n).methods.getPair(e, t).call()).toLowerCase() != G.toLowerCase() && (a.status = !0, a.address = t), a
    }
    async function Oe(e) {
        var t, n = null == b ? y : b,
            a = e
        return (n = new Web3(n)).utils.isAddress(e) && (await n.eth.getCode(e)).toLowerCase() != "0x".toLowerCase() && (await new n.eth.Contract(Y, e).methods.name().call()).toLowerCase() != "Pancake LPs".toLowerCase() && ((t = await Fe(a, z, A)).status || (t = await Fe(a, z, S)).status) ? t.address : a
    }
    async function We(e) {
        var t, n
        try {
            if ($("#newlock_result_info").html(""), $("#newlock_lptoken_info_spinner").show(), Ue(), 42 == (e = $("#newlock_lpaddress").val().trim().toLowerCase()).length && !x.utils.isAddress(e) && (ze("lower case not valid " + e), e = e.toUpperCase(), !x.utils.isAddress(e))) {
                ze("upper case not valid " + e)
                try {
                    e = x.utils.toChecksumAddress(e), ze("checksum case is valid " + x.utils.isAddress(e))
                } catch (e) {
                    ze("checksum case is not failed")
                }
            }
            ze("New Lock input for: " + e)
            try {
                e = await Oe(e)
            } catch (e) {}(t = await Pe(e)).valid ? (g = e, n = "https://bscscan.com/token/", $("#newlock_lptoken_info").html('<a target="_blank" href=' + n + t.token0_info.address + ">" + t.token0_info.symbol + '</a> / <a target="_blank" href=' + n + t.token1_info.address + ">" + t.token1_info.symbol + "</a>"), await Ie(), Ae(!1), t.allowance ? ($("#newlock_lockbutton_approve").prop("disabled", !0), $("#newlock_lockbutton_approve span").first().text("Approved")) : $("#newlock_lockbutton").prop("disabled", !0)) : ($("#newlock_lptoken_info").html(t.err_msg), Ae(!0), ze("New LP token fetch failed: " + t.err_msg))
        } catch (e) {
            console.log(e), ze("New LP token fetch failed: " + (null != e.message ? e.message : "Unknown error")), ze("New LP token fetch failed stack: " + (null != e.stack ? e.stack : "Unknown stack")), $("#newlock_lptoken_info").text("Something went wrong. Please try again."), Ae(!0), g = void 0
        } finally {
            $("#newlock_lptoken_info_spinner").hide()
        }
    }
    async function qe(e) {
        var t
        null != h ? ($("#newlock_connect_wallet").hide(), $("#newlock_connected_wallet_address").text(h.substring(0, 6) + ".." + h.substring(h.length - 4, h.length)), $("#newlock_connected_wallet").show(), $("#newlock_connect_wallet_msg").hide(), $("#newlock_lpaddress").prop("disabled", !1), !g || (t = await Pe(g)).valid && (await Ie(), t.allowance ? ($("#newlock_lockbutton_approve").prop("disabled", !0), $("#newlock_lockbutton_approve span").first().text("Approved"), $("#newlock_lockbutton").prop("disabled", !1)) : ($("#newlock_lockbutton").prop("disabled", !0), $("#newlock_lockbutton_approve").prop("disabled", !1), $("#newlock_lockbutton_approve span").first().text("Approve LP Token")))) : ($("#newlock_connect_wallet").show(), $("#newlock_connected_wallet_address").text(""), $("#newlock_connected_wallet").hide(), $("#newlock_lpaddress").prop("disabled", !0), $("#newlock_connect_wallet_msg").text(e.msg), $("#newlock_connect_wallet_msg").show(), Ae(!0))
    }

    function Re() {
        $("#managelock_withdraw_input").hide(), $("#managelock_withdraw_max_button").hide(), $("#managelock_withdraw_available_display").hide(), $("#managelock_withdraw_submit_button").hide(), $("#managelock_withdraw_spinner").hide(), $("#managelock_withdraw_result").hide(), $("#managelock_extend_input").hide(), $("#managelock_extend_current_button").hide(), $("#managelock_extend_plus1_button").hide(), $("#managelock_extend_submit_button").hide(), $("#managelock_extend_spinner").hide(), $("#managelock_extend_result").hide(), $("#managelock_increment_input").hide(), $("#managelock_increment_max_button").hide(), $("#managelock_increment_available_display").hide(), $("#managelock_increment_submit_button").hide(), $("#managelock_increment_spinner").hide(), $("#managelock_increment_result").hide(), $("#managelock_increment_feeLP").hide(), $("#managelock_increment_feeBNB").hide(), $("#managelock_increment_fee_container").hide(), $("#managelock_transfer_input").hide(), $("#managelock_transfer_submit_button").hide(), $("#managelock_transfer_spinner").hide(), $("#managelock_transfer_result").hide(), $("#managelock_generatelink_display").hide(), $("#managelock_generatelink_spinner").hide(), $("#managelock_generatelink_result").hide()
    }

    function Ee(e) {
        $("#managelock_optionwithdraw_button").prop("disabled", e), $("#managelock_optionextend_button").prop("disabled", e), $("#managelock_optionincrement_button").prop("disabled", e), $("#managelock_optiontransfer_button").prop("disabled", e), $("#managelock_optiongeneratelink_button").prop("disabled", e)
    }

    function He() {
        $("#managelock_optionwithdraw_button").on("click", async function(e) {
            await
            function() {
                Re(), $("#managelock_withdraw_input").show(), $("#managelock_withdraw_input").focus(), $("#managelock_withdraw_max_button").show(), $("#managelock_withdraw_available_display").show(), $("#managelock_withdraw_submit_button").show(), $("#managelock_withdraw_max_button").unbind("click"), $("#managelock_withdraw_submit_button").unbind("click"), $("#managelock_withdraw_input").unbind("keyup")
                var e = $("#managelock_withdraw_submit_button").attr("data-index")
                m[e].unlock_time > (new Date).getTime() / 1e3 ? ($("#managelock_withdraw_available_display span").text("0"), $("#managelock_withdraw_submit_button").prop("disabled", !0)) : ($("#managelock_withdraw_available_display span").text($("#lock_list_lockamount").text()), $("#managelock_withdraw_submit_button").prop("disabled", !1)), $("#managelock_withdraw_submit_button").on("click", async function(e) {
                    await async function() {
                        var e, t, n, a, o, i, s, r, l, c, u
                        if ($("#managelock_withdraw_result").html(""), $("#managelock_withdraw_result").show(), $("#managelock_withdraw_spinner").show(), e = !1, $("#managelock_withdraw_available_display span").text() == $("#managelock_withdraw_input").val().trim().toString() && (e = !0), 0 == (t = x.utils.toBN(x.utils.toWei($("#managelock_withdraw_input").val().trim(), "ether")))) return $("#managelock_withdraw_result").html("Withdraw amount not set"), void $("#managelock_withdraw_spinner").hide()
                        Ee(v = !0), $("#managelock_withdraw_input").prop("disabled", !0), $("#managelock_withdraw_max_button").prop("disabled", !0), $("#managelock_withdraw_submit_button").prop("disabled", !0), n = $("#managelock_withdraw_submit_button").attr("data-index"), n = m[n].id
                        try {
                            o = n, i = t, s = e, console.log("unlock token"), r = {
                                output: {},
                                status: !0,
                                msg: ""
                            }, u = new Web3(b), l = h, c = u.utils.toBN(0), u = new u.eth.Contract(te, T), s ? await u.methods.withdraw(o).send({
                                from: l,
                                value: c
                            }).on("transactionHash", function(e) {
                                console.log("Unlock : ", e)
                            }).on("confirmation", function(e, t) {
                                console.log("Unlock confirmed")
                            }).on("receipt", function(e) {}).on("error", function(e, t) {
                                r.status = !1, r.err_msg = e
                            }) : await u.methods.withdrawPartially(o, i).send({
                                from: l,
                                value: c
                            }).on("transactionHash", function(e) {
                                console.log("Unlock : ", e)
                            }).on("confirmation", function(e, t) {
                                console.log("Unlock confirmed")
                            }).on("receipt", function(e) {}).on("error", function(e, t) {
                                r.status = !1, r.err_msg = e
                            }), (a = await r).status ? $("#managelock_withdraw_result").html("Withdraw successful. Please refresh page.") : $("#managelock_withdraw_result").html("Withdraw failed: " + a.err_msg)
                        } catch (e) {
                            console.log(e), ze(n + " Withdraw Lock failed: " + (null != e.message ? e.message : "Unknown error")), ze(n + " Withdraw Lock failed stack: " + (null != e.stack ? e.stack : "Unknown stack")), $("#managelock_withdraw_result").html("Withdraw failed: " + (null != e.message ? e.message : "Unknown error"))
                        } finally {
                            $("#managelock_withdraw_input").prop("disabled", !1), $("#managelock_withdraw_max_button").prop("disabled", !1), $("#managelock_withdraw_submit_button").prop("disabled", !1), $("#managelock_withdraw_spinner").hide(), Ee(!1), v = !1
                        }
                    }()
                }), $("#managelock_withdraw_max_button").on("click", function(e) {
                    $("#managelock_withdraw_input").val($("#managelock_withdraw_available_display span").text())
                }), $("#managelock_withdraw_input").keyup(function() {
                    var e = $(this).val(),
                        e = (e = isNaN(e) && 2 < (e = e.replace(/[^0-9\.]/g, "")).split(".").length ? e.replace(/\.+$/, "") : e) || 0
                    $(this).val(e)
                })
            }()
        }), $("#managelock_optionextend_button").on("click", async function(e) {
            var t, n
            Re(), $("#managelock_extend_input").show(), $("#managelock_extend_input").focus(), $("#managelock_extend_current_button").show(), $("#managelock_extend_plus1_button").show(), $("#managelock_extend_submit_button").show(), $("#managelock_extend_current_button").unbind("click"), $("#managelock_extend_plus1_button").unbind("click"), $("#managelock_extend_submit_button").unbind("click"), $("#managelock_extend_input").unbind("input"), t = $("#managelock_increment_submit_button").attr("data-index"), n = m[t].unlock_time, n = parseInt(n) + 60, flatpickr("#managelock_extend_input", {
                enableTime: !0,
                dateFormat: "Y-m-d H:i",
                defaultDate: new Date(1e3 * n),
                minDate: new Date(1e3 * (n - 59)),
                allowInput: !0
            }), $("#managelock_extend_submit_button").on("click", async function(e) {
                await async function() {
                    var e, t, n, a, o, i, s, r, l
                    $("#managelock_extend_result").html(""), $("#managelock_extend_result").show(), e = new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj), Ee(v = !0), $("#managelock_extent_input").prop("disabled", !0), $("#managelock_extend_submit_button").prop("disabled", !0), $("#managelock_extend_current_button").prop("disabled", !0), $("#managelock_extend_plus1_button").prop("disabled", !0), $("#managelock_extend_spinner").show(), t = $("#managelock_extend_submit_button").attr("data-index"), t = m[t].id
                    try {
                        a = t, o = e, console.log("increment unlock time"), i = {
                            output: {},
                            status: !0,
                            msg: ""
                        }, s = new Web3(b), r = h, l = s.utils.toBN(0), await new s.eth.Contract(te, T).methods.extendLockTime(a, parseInt(o.getTime() / 1e3)).send({
                            from: r,
                            value: l
                        }).on("transactionHash", function(e) {
                            console.log("Extend : ", e)
                        }).on("confirmation", function(e, t) {
                            console.log("Extend confirmed")
                        }).on("receipt", function(e) {}).on("error", function(e, t) {
                            i.status = !1, i.err_msg = e
                        }), (n = await i).status ? $("#managelock_extend_result").html("Extend successful. Please refresh page.") : $("#managelock_extend_result").html("Extend failed: " + n.err_msg)
                    } catch (e) {
                        console.log(e), ze(t + " Extend Lock failed: " + (null != e.message ? e.message : "Unknown error")), ze(t + " Extend Lock failed stack: " + (null != e.stack ? e.stack : "Unknown stack")), $("#managelock_extend_result").html("Extend failed: " + (null != e.message ? e.message : "Unknown error"))
                    } finally {
                        $("#managelock_extent_input").prop("disabled", !1), $("#managelock_extend_submit_button").prop("disabled", !1), $("#managelock_extend_current_button").prop("disabled", !1), $("#managelock_extend_plus1_button").prop("disabled", !1), $("#managelock_extend_spinner").hide(), Ee(!1), v = !1
                    }
                }()
            }), $("#managelock_extend_input").on("input", function() {
                "Invalid Date" == new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj) && document.querySelector("#managelock_extend_input")._flatpickr.setDate(new Date(1e3 * n), !0)
            }), $("#managelock_extend_current_button").on("click", function(e) {
                document.querySelector("#managelock_extend_input")._flatpickr.setDate(new Date(1e3 * n), !0)
            }), await $("#managelock_extend_plus1_button").on("click", function(e) {
                var t = new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj)
                t.setMonth(t.getMonth() + 12), document.querySelector("#managelock_extend_input")._flatpickr.setDate(t, !0)
            })
        }), $("#managelock_optionincrement_button").on("click", async function(e) {
            var t
            Re(), $("#managelock_increment_input").show(), $("#managelock_increment_input").focus(), $("#managelock_increment_max_button").show(), $("#managelock_increment_available_display").show(), $("#managelock_increment_submit_button").show(), $("#managelock_increment_feeLP").show(), $("#managelock_increment_feeBNB").show(), $("#managelock_increment_fee_container").show(), $("#managelock_increment_max_button").unbind("click"), $("#managelock_increment_submit_button").unbind("click"), $("#managelock_increment_input").unbind("keyup"), $("#managelock_increment_submit_button").on("click", async function(e) {
                await async function() {
                    var e, t, n, a, o, i, s, r, l, c, u, p
                    if ($("#managelock_increment_result").html(""), $("#managelock_increment_result").show(), 0 != (e = x.utils.toBN(x.utils.toWei($("#managelock_increment_input").val().trim(), "ether")))) {
                        Ee(v = !0), $("#managelock_increment_input").prop("disabled", !0), $("#managelock_increment_submit_button").prop("disabled", !0), $("#managelock_increment_feeLP").prop("disabled", !0), $("#managelock_increment_feeBNB").prop("disabled", !0), $("#managelock_increment_spinner").show(), n = $("#managelock_increment_submit_button").attr("data-index"), t = m[n].id, n = $("input[name=managelock_increment_fee]:checked").val()
                        try {
                            o = t, i = e, s = n, console.log("increment lock amount"), r = {
                                output: {},
                                status: !0,
                                msg: ""
                            }, l = new Web3(b), c = h, u = l.utils.toBN(0), p = 0, "BNB" == s ? u = l.utils.toBN(l.utils.toWei(Ce.toString(), "ether")) : p = 1, await new l.eth.Contract(te, T).methods.increaseLockAmount(o, i, p).send({
                                from: c,
                                value: u
                            }).on("transactionHash", function(e) {
                                console.log("Lock : ", e)
                            }).on("confirmation", function(e, t) {
                                console.log("Lock confirmed")
                            }).on("receipt", function(e) {}).on("error", function(e, t) {
                                r.status = !1, r.err_msg = e
                            }), (a = await r).status ? $("#managelock_increment_result").html("Increment successful. Please refresh page.") : $("#managelock_increment_result").html("Increment failed: " + a.err_msg)
                        } catch (e) {
                            console.log(e), ze(t + " Increment Lock failed: " + (null != e.message ? e.message : "Unknown error")), ze(t + " Increment Lock failed stack: " + (null != e.stack ? e.stack : "Unknown stack")), $("#managelock_increment_result").html("Increment failed: " + (null != e.message ? e.message : "Unknown error"))
                        } finally {
                            $("#managelock_increment_input").prop("disabled", !1), $("#managelock_increment_submit_button").prop("disabled", !1), $("#managelock_increment_spinner").hide(), $("#managelock_increment_feeLP").prop("disabled", !1), $("#managelock_increment_feeBNB").prop("disabled", !1), Ee(!1), v = !1
                        }
                    } else $("#managelock_increment_result").html("Increment amount not set")
                }()
            }), t = $("#managelock_transfer_submit_button").attr("data-index"), t = await Se(m[t].lp_address), $("#managelock_increment_available_display span").text(t), $("#managelock_increment_max_button").on("click", function(e) {
                $("#managelock_increment_input").val($("#managelock_increment_available_display span").text())
            }), await $("#managelock_increment_input").keyup(function() {
                var e = $(this).val(),
                    e = (e = isNaN(e) && 2 < (e = e.replace(/[^0-9\.]/g, "")).split(".").length ? e.replace(/\.+$/, "") : e) || 0
                $(this).val(e)
            })
        }), $("#managelock_optiontransfer_button").on("click", async function(e) {
            Re(), $("#managelock_transfer_input").show(), $("#managelock_transfer_input").focus(), $("#managelock_transfer_submit_button").show(), $("#managelock_transfer_submit_button").unbind("click"), await $("#managelock_transfer_submit_button").on("click", async function(e) {
                await async function() {
                    var e, t, n, a, o, i, s, r, l
                    if ($("#managelock_transfer_result").html(""), $("#managelock_transfer_result").show(), e = (e = $("#managelock_transfer_input").val().trim()).toLowerCase(), x.utils.isAddress(e)) {
                        Ee(v = !0), $("#managelock_transfer_input").prop("disabled", !0), $("#managelock_transfer_submit_button").prop("disabled", !0), $("#managelock_transfer_spinner").show(), t = $("#managelock_transfer_submit_button").attr("data-index"), t = m[t].id
                        try {
                            a = t, o = e, console.log("transfer owner"), i = {
                                output: {},
                                status: !0,
                                msg: ""
                            }, s = new Web3(b), r = h, l = s.utils.toBN(0), await new s.eth.Contract(te, T).methods.transferLock(a, o).send({
                                from: r,
                                value: l
                            }).on("transactionHash", function(e) {
                                console.log("transfer : ", e)
                            }).on("confirmation", function(e, t) {
                                console.log("Transfer confirmed")
                            }).on("receipt", function(e) {}).on("error", function(e, t) {
                                i.status = !1, i.err_msg = e
                            }), (n = await i).status ? $("#managelock_transfer_result").html("Transfer successful. Please refresh page.") : $("#managelock_transfer_result").html("Transfer failed: " + n.err_msg)
                        } catch (e) {
                            console.log(e), ze(t + " Transfer Lock failed: " + (null != e.message ? e.message : "Unknown error")), ze(t + " Transfer Lock failed stack: " + (null != e.stack ? e.stack : "Unknown stack")), $("#managelock_transfer_result").html("Transfer failed: " + (null != e.message ? e.message : "Unknown error"))
                        } finally {
                            $("#managelock_transfer_input").prop("disabled", !1), $("#managelock_transfer_submit_button").prop("disabled", !1), $("#managelock_transfer_spinner").hide(), Ee(!1), v = !1
                        }
                    } else $("#managelock_transfer_result").html("New owner is not a valid address")
                }()
            })
        }), $("#managelock_optiongeneratelink_button").on("click", async function(e) {
            Re(), $("#managelock_generatelink_display").show(), $("#managelock_generatelink_display").focus(), $("#managelock_generatelink_display").prop("href", window.location.origin + window.location.pathname + "?certificate=yes&type=0&lp=" + $("#managelock_generatelink_display").attr("data-address")), await $("#managelock_generatelink_display").html("<i class='icofont-share'></i>Shareable Link")
        })
    }

    function ze(e) {
        try {
            $.post("/api/log/", {
                address: e
            })
        } catch (e) {
            console.log(e)
        }
    }
    $(document).ready(async function() {
        var e, t
        flatpickr("#newlock_unlocktime", {
            enableTime: !0,
            dateFormat: "Y-m-d H:i",
            defaultDate: (new Date).setHours((new Date).getHours() + 24),
            minDate: (new Date).setHours((new Date).getHours() + 12),
            allowInput: !0
        }), $('a[data-toggle="tab"]').on("shown.bs.tab", async function(e) {
            "#tab-2" == $(e.target).attr("href") && await async function() {
                var e, t, n, a, o = $("#lock-list")
                if (o.html(""), null != h) {
                    $("#managelock_spinner").show(), m = []
                    try {
                        for (l in 0 == (e = await De()).length && o.text("No locks found for connected user!"), e) e[l], t = $("<li />").appendTo(o), n = $('<a data-toggle="collapse" class="" href="#list-lock' + l + '"/>').appendTo(t), a = parseInt(l) + 1, n.text("Lock " + a), $('<i class="icofont-simple-down"/>').appendTo(n), $('<div data-index="' + l + '"id="list-lock' + l + '" class="collapse " data-parent=".lock-list" />').appendTo(o), l++
                            $(".lock-list .collapse").on("shown.bs.collapse", function(e) {
                                var t, n, a
                                $(".lock-list .collapse").each(function(e) {
                                    $(this).html("")
                                }), $("#" + $(e.target).attr("id")).html(s), t = m[$(e.target).attr("data-index")], $("#lock_list_lockamount").text(x.utils.fromWei(t.amount, "ether")), a = (n = new Date(1e3 * t.unlock_time)) - new Date, $("#lock_list_unlocktime").text(moment.duration(a).humanize(!0) + " (" + n + ")"), $("#managelock_generatelink_display").attr("data-address", t.lp_address), $("#lock_list_lptoken").prop("href", "https://bscscan.com/token/" + t.lp_address), $("#lock_list_token0").prop("href", "https://bscscan.com/token/" + t.lp_info.token0_info.address), $("#lock_list_token1").prop("href", "https://bscscan.com/token/" + t.lp_info.token1_info.address), $("#lock_list_token0 span").text(t.lp_info.token0_info.symbol), $("#lock_list_token1 span").text(t.lp_info.token1_info.symbol), e = $(e.target).attr("data-index"), $("#managelock_withdraw_submit_button").attr("data-index", e), $("#managelock_extend_submit_button").attr("data-index", e), $("#managelock_increment_submit_button").attr("data-index", e), $("#managelock_transfer_submit_button").attr("data-index", e), He()
                            }), m = e
                    } catch (e) {
                        o.text("Something went wrong!"), console.log(e), ze(h + " Get Lock List failed: " + (null != e.message ? e.message : "Unknown error")), ze(h + " Get Lock List failed stack: " + (null != e.stack ? e.stack : "Unknown stack"))
                    } finally {
                        $("#managelock_spinner").hide()
                    }
                } else o.text("Please connect wallet to see locks.")
            }(), "#browse-locks" == $(e.target).attr("href") && await async function() {
                var e, t, n, a, o, i = $("#browse-locks-list")
                i.html(""), $("#browselock_spinner").show(), e = 0
                try {
                    for (t = await Ne(e, 1); null != t;) {
                        for (l in t) n = t[l], a = $('<li style="top-margin:10px"/>').appendTo(i), (o = $('<a target="_blank" href="" />').appendTo(a)).prop("href", window.location.origin + window.location.pathname + "?certificate=yes&type=0&lp=" + n.lp_address), $('<i class="icofont-certificate" style="font-size: 50px;"/>').appendTo(o), $("<span/>").appendTo(o).text(n.lp_info.token0_info.symbol + " / " + n.lp_info.token1_info.symbol), l++
                            t = await Ne(e += 1, 1)
                    }
                } catch (e) {
                    i.text("Something went wrong. Please refresh page!"), console.log(e), ze(h + " Browse Lock List failed: " + (null != e.message ? e.message : "Unknown error")), ze(h + " Browse Lock List failed stack: " + (null != e.stack ? e.stack : "Unknown stack"))
                } finally {
                    $("#browselock_spinner").hide()
                }
            }()
        }), $("#newlock_lpaddress").on("input", async function(e) {
            await We()
        }), $("#newlock_lpaddress").on("keypress", async function(e) {
            13 == e.which && await We()
        }), $("#newlock_lock_max_amount").on("click", function(e) {
            $("#newlock_amount").val($("#newlock_lptoken_balance_info").text())
        }), $("#newlock_amount").keyup(function() {
            var e = $(this).val(),
                e = (e = isNaN(e) && 2 < (e = e.replace(/[^0-9\.]/g, "")).split(".").length ? e.replace(/\.+$/, "") : e) || 0
            $(this).val(e)
        }), $("#newlock_unlocktime").on("input", function() {
            "Invalid Date" == new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj) && document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours() + 24), !0)
        }), $("#newlock_unlocktime_now").on("click", function(e) {
            document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours() + 24), !0)
        }), $("#newlock_unlocktime_plus1").on("click", function(e) {
            var t = new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj)
            t.setMonth(t.getMonth() + 12), document.querySelector("#newlock_unlocktime")._flatpickr.setDate(t, !0)
        }), $("#newlock_lockbutton").on("click", async function(e) {
            await async function(e) {
                var t, n, a, o, i, s, r, l, c, u, p, d, m, y, _, k, f, w
                Ae(v = !0), $("#newlock_lpaddress").prop("disabled", !0), $("#newlock_lockbutton_spinner").show(), $("#newlock_result_info").html("")
                try {
                    if (t = x.utils.toBN(x.utils.toWei($("#newlock_amount").val().trim(), "ether")), n = new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj), a = $("input[name=newlock_fee]:checked").val(), 42 == (e = $("#newlock_lpaddress").val().trim().toLowerCase()).length && !x.utils.isAddress(e) && (ze("lower case not valid " + e), e = e.toUpperCase(), !x.utils.isAddress(e))) {
                        ze("upper case not valid " + e)
                        try {
                            e = x.utils.toChecksumAddress(e), ze("checksum case is valid " + x.utils.isAddress(e))
                        } catch (e) {
                            ze("checksum case is not failed")
                        }
                    }
                    try {
                        e = await Oe(e)
                    } catch (e) {}
                    if (ze("New Lock submit for amount: " + t + " time: " + n + "fee: " + a + "adress: " + e), _ = t, k = n, f = a, w = {
                            valid: !0,
                            msg: ""
                        }, null == e ? (w.msg = "LP Token address not set.", w.valid = !1) : 0 == _ ? (w.msg = "LP Token amount not set.", w.valid = !1) : k < (k = (k = new Date).setHours(k.getHours() + 12)) ? (w.msg = "Unlock time too soon.", w.valid = !1) : "BNB" != f && "LP" != f && (w.msg = "Fee not set.", w.valid = !1), (o = w).valid)
                        if (s = e, r = t, l = n, c = a, console.log("lock token"), u = {
                                output: {},
                                status: !0,
                                msg: ""
                            }, p = new Web3(b), d = h, m = p.utils.toBN("0"), y = 0, "BNB" == c ? m = p.utils.toBN(p.utils.toWei(Ce.toString(), "ether")) : y = 1, await new p.eth.Contract(te, T).methods.lockTokens(s, r, parseInt(l.getTime() / 1e3), d, y).send({
                                from: d,
                                value: m
                            }).on("transactionHash", function(e) {
                                console.log("Lock : ", e)
                            }).on("confirmation", function(e, t) {
                                console.log("Lock confirmed")
                            }).on("receipt", function(e) {}).on("error", function(e, t) {
                                u.status = !1, u.err_msg = e
                            }), (i = await u).status) {
                            $("#newlock_result_info").html("Lock successfully created. <a onclick=$('#lock_manage_tab_link').click() href='#tab-2'>View/Manage your LP locks.</a> Use <a target='_blank' href='/tokenlocker'> Mudra Token Locker </a> to lock team tokens.")
                            try {
                                $("#newlock_lpaddress").val(""), g = void 0, Ue()
                            } catch (e) {
                                ze("Minor New Lock failed: " + (null != e.message ? e.message : "Unknown error")), ze("Minor New Lock failed stack: " + (null != e.stack ? e.stack : "Unknown stack"))
                            }
                        } else console.log(i.err_msg), $("#newlock_result_info").html(i.err_msg), ze("New Lock failed: " + i.err_msg), Ae(!1), $("#newlock_lockbutton_approve").prop("disabled", !0)
                    else $("#newlock_result_info").html(o.msg), Ae(!1), $("#newlock_lockbutton_approve").prop("disabled", !0)
                } catch (e) {
                    console.log(e), ze("New Lock failed: " + (null != e.message ? e.message : "Unknown error")), ze("New Lock failed stack: " + (null != e.stack ? e.stack : "Unknown stack")), $("#newlock_result_info").html("Lock could not be created: " + (null != e.message ? e.message : "Unknown error")), Ae(!1), $("#newlock_lockbutton_approve").prop("disabled", !0)
                } finally {
                    $("#newlock_lpaddress").prop("disabled", !1), $("#newlock_lockbutton_spinner").hide(), v = !1
                }
            }()
        }), $("#newlock_lockbutton_approve").on("click", async function(e) {
            await async function() {
                var e, t, n, a
                Ae(v = !0), $("#newlock_lpaddress").prop("disabled", !0), $("#newlock_lockbutton_approve_spinner").show(), $("#newlock_result_info").html("")
                try {
                    t = g, n = {
                        output: {},
                        status: !0,
                        msg: ""
                    }, t = new(a = new Web3(b)).eth.Contract(Y, t), a = a.utils.toBN(2).pow(a.utils.toBN(256)).sub(a.utils.toBN(1)), await t.methods.approve(T, a).send({
                        from: h
                    }).on("transactionHash", function(e) {
                        console.log("Approve : ", e)
                    }).on("confirmation", function(e, t) {
                        console.log("Approve confirmed")
                    }).on("receipt", function(e) {}).on("error", function(e, t) {
                        n.status = !1, n.err_msg = e
                    }), (e = await n).status ? ($("#newlock_result_info").html("Approved"), $("#newlock_lockbutton_approve").prop("disabled", !0), $("#newlock_lockbutton_approve span").first().text("Approved"), $("#newlock_lockbutton").prop("disabled", !1)) : ($("#newlock_result_info").html("Approval failed: " + e.err_msg), $("#newlock_lockbutton").prop("disabled", !0))
                } catch (e) {
                    console.log(e), ze(g + " Approval failed: " + (null != e.message ? e.message : "Unknown error")), ze(g + " Approval failed stack: " + (null != e.stack ? e.stack : "Unknown stack")), $("#newlock_result_info").html("Approval failed: " + (null != e.message ? e.message : "Unknown error")), $("#newlock_lockbutton").prop("disabled", !0)
                } finally {
                    $("#newlock_lockbutton_approve_spinner").hide(), $("#newlock_lpaddress").prop("disabled", !1), e = $("#newlock_lockbutton").prop("disabled"), Ae(!1), $("#newlock_lockbutton").prop("disabled", e), v = !1
                }
            }()
        }), $("#newlock_connect_wallet").on("click", async function(e) {
            await ie()
        }), new URLSearchParams(window.location.search).has("certificate") && await ((t = new URLSearchParams(window.location.search)).has("type") && "0" == (e = t.get("type")) ? ($('a[href="#certificate"]').show(), $('a[href="#certificate"]').tab("show"), document.querySelector("#features").scrollIntoView({
            behavior: "smooth"
        }), "0" == e && await async function(e) {
            var t, n, a, o, i, s, r, c, u, p
            $("#lock_certificate_container").show(), $("#lock_certificate_spinner").show()
            try {
                if (0 == (t = await async function(e) {
                        var t, n, a, o, i, s, r, l
                        for (console.log("get lock by LP"), t = [], null == (n = b) && (n = y), i = await (o = new(a = new Web3(n)).eth.Contract(te, T)).methods.lpLocksLength(e).call(), s = 0; s < i;) l = await o.methods.lpLockAt(e, s).call(), (r = await o.methods.tokenLocks(l).call()).lpToken = r.lpToken.toLowerCase(), l = await Pe(r.lpToken), l = {
                                lp_address: r.lpToken,
                                amount: a.utils.toBN(r.tokenAmount),
                                status: !0,
                                unlock_time: r.unlockTime,
                                lp_info: l
                            }, t.push(l), s++
                            return t
                    }(e)).length) return void console.log("no address found")
                for (l in new QRCode(document.getElementById("certificate_qrcode"), {
                        text: window.location.origin + window.location.pathname + "?certificate=yes&type=0&lp=" + t[0].lp_address,
                        width: 128,
                        height: 128,
                        correctLevel: QRCode.CorrectLevel.H
                    }), $("#lock_certificate_lptoken").prop("href", "https://bscscan.com/token/" + t[0].lp_address), $("#lock_certificate_token0").prop("href", "https://bscscan.com/token/" + t[0].lp_info.token0_info.address), $("#lock_certificate_token1").prop("href", "https://bscscan.com/token/" + t[0].lp_info.token1_info.address), $("#lock_certificate_token0 span").text(t[0].lp_info.token0_info.symbol), $("#lock_certificate_token1 span").text(t[0].lp_info.token1_info.symbol), n = new x.utils.BN(0), a = t[0].lp_info.total_supply, o = [], t) i = t[l], new Date(1e3 * i.unlock_time) > new Date && (n = n.add(i.amount), o.push({
                    time: new Date(1e3 * i.unlock_time),
                    amount: parseFloat(x.utils.fromWei(i.amount, "ether"))
                }))
                s = x.utils.fromWei(n, "ether"), r = x.utils.fromWei(a, "ether"), 0 != s ? $("#lock_certificate_status").html("<i class='icofont-ui-lock' style='font-size: 30px;'></i> Liquidity Locked") : $("#lock_certificate_status").html("<i class='icofont-ui-unlock' style='font-size: 30px;'></i> Liquidity Unlocked"), $("#lock_certificate_lockpercent .progress-value").text((s / r * 100).toFixed(2) + "%"), u = 180 < (c = parseInt(s / r * 360)) ? "#049dff" : 90 < c ? "#fdba04" : "#ff0c04", $(".progress.red .progress-bar").prop("style", "border-color: " + u), 180 < c ? ($.keyframe.define({
                    name: "loading-1",
                    from: {
                        transform: "rotate(0deg)"
                    },
                    to: {
                        transform: "rotate(180deg)"
                    }
                }), $.keyframe.define({
                    name: "loading-2",
                    from: {
                        transform: "rotate(0deg)"
                    },
                    to: {
                        transform: "rotate(" + (c - 180) + "deg)"
                    }
                })) : ($.keyframe.define({
                    name: "loading-1",
                    from: {
                        transform: "rotate(0deg)"
                    },
                    to: {
                        transform: "rotate(" + c + "deg)"
                    }
                }), $.keyframe.define({
                    name: "loading-2",
                    from: {
                        transform: "rotate(0deg)"
                    },
                    to: {
                        transform: "rotate(0deg)"
                    }
                })), $("#lock_certificate_lockamount").text(parseFloat(s).toFixed(4)), $("#lock_certificate_totalamount").text(parseFloat(r).toFixed(4)), $("#lock_certificate_unlocktime").html(""), p = $("#lock_certificate_unlocktime"), $.each(o, function(e) {
                    var t = (a = o[e].time) - new Date,
                        n = (o[e].amount / r * 100).toFixed(2),
                        a = $("<li />").appendTo(p)
                    $("<small><a/>").text(o[e].amount.toFixed(4) + "(" + n + "%) tokens unlock " + moment.duration(t).humanize(!0)).appendTo(a)
                })
            } finally {
                $("#lock_certificate_spinner").hide()
            }
        }(t.get("lp"))) : console.log("incorrect certificate URL"))
    }), s = `                 
<div class="form-group row text-left">
<div class="col-lg-12 offset-lg-2">

  <a target="_blank" href="" id="lock_list_lptoken" style="display:inline"><span>LP Token </span></a>:
  <a target="_blank" href="" id="lock_list_token0" style="display:inline"><span >--</span></a>/
  <a target="_blank" href="" id="lock_list_token1" style="display:inline"><span >--</span></a>
</div>
<div class="col-lg-12 offset-lg-2">
  <b>Locked LP tokens:&nbsp;</b><span id="lock_list_lockamount">---</span>
</div>
<div class="col-lg-12 offset-lg-2">
  <b>Unlock Time:&nbsp;</b><span id="lock_list_unlocktime"  style="list-style: none" >--</span>
</div>
</div>
<div class="form-group row ">
<div class="col-lg-10 offset-lg-2">
  <button id="managelock_optionwithdraw_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Withdraw Amount</button>
  <button id="managelock_optionextend_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Extend Lock Time</button>
  <button id="managelock_optionincrement_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Increase Amount</button>
  <button id="managelock_optiontransfer_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Transfer Ownership</button>
  <button id="managelock_optiongeneratelink_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Generate Public Link</button>
</div>
</div>
<br>
<br>
<!-- Withdraw amount-->
<div class="form-group row ">
<div class="col-lg-8 offset-lg-2">
  <div class="input-group">
    <input style="display:none" type="text" class="form-control" id="managelock_withdraw_input" value="0" placeholder="Enter LP token amount to withdraw">
    <div class="input-group-append">
      <button style="display:none;" class="btn btn-outline-secondary" type="button" id="managelock_withdraw_max_button">Max</button>
    </div>
  </div>
</div>
<div class="col-lg-8 offset-lg-2 text-left" style="bottom: -10px;">
  <h6 style="display:none"  id="managelock_withdraw_available_display" >Available to withdraw: 
    <span>
      0
    </span>
  </h6>
</div>
<div class="col-lg-8 offset-lg-4">
  <button style="display:none;margin-top: 5px;" id= "managelock_withdraw_submit_button" type="button" class="btn btn-primary" style="margin-top: 5px;">
    Withdraw
  </button>
</div>


<!-- Extend time-->
<div class="col-lg-8 offset-lg-2">
  <div class="input-group">
    <input style="display:none" type="text" class="form-control" id="managelock_extend_input" placeholder="Enter new LP token unlock time">
    <div class="input-group-append">
      <button style="display:none" class="btn btn-outline-secondary" type="button" id="managelock_extend_current_button" >Current</button>
      <button style="display:none" class="btn btn-outline-secondary" type="button" id="managelock_extend_plus1_button" >+1 Year</button>
    </div>
  </div>
</div>
<div class="col-lg-8 offset-lg-4">
  <button style="display:none;margin-top: 5px;" id= "managelock_extend_submit_button" type="button" class="btn btn-primary" style="margin-top: 5px;">
    Extend
  </button>
</div>



<!-- Increase ampunt-->
<div class="col-lg-8 offset-lg-2">
  <div class="input-group">
    <input style="display:none" type="text" class="form-control" id="managelock_increment_input" placeholder="Enter LP token amount to add" >
    <div class="input-group-append">
      <button style="display:none" class="btn btn-outline-secondary" type="button" id="managelock_increment_max_button">Max</button>
    </div>
  </div>
</div>
<div class="col-lg-8 offset-lg-2 text-left" style="bottom: -10px;">
  <h6 style="display:none" id="managelock_increment_available_display">Available: 
    <span>
      0
    </span>
  </h6>
</div>
<div class="col-lg-8 offset-lg-2  text-left" style="display: none" id="managelock_increment_fee_container">
    <h6 style="margin-top: 10px;">Select fee type:</h6>
    <input type="radio" id="managelock_increment_feeLP" style="display:none" name="managelock_increment_fee" value="LP" >
    <label for="managelock_increment_feeLP"> Pay in LP <small>(.5 % of locked LP token)</small></label><br>
    <input type="radio" id="managelock_increment_feeBNB" style="display:none" name="managelock_increment_fee" value="BNB" checked>
    <label for="managelock_increment_feeBNB"> Pay in BNB <small> (.1 BNB flat)</small></label>
</div>
<div class="col-lg-8 offset-lg-4">
  <button style="display:none;margin-top: 5px;" id= "managelock_increment_submit_button" type="button" class="btn btn-primary" style="margin-top: 5px;">
    Increase
  </button>
</div>



<!-- Transfer lock-->
<div class="col-lg-8 offset-lg-2">
  <div class="input-group">
    <input style="display:none" type="text" class="form-control" id="managelock_transfer_input" placeholder="Enter new owner address">
   </div>
</div>

<div class="col-lg-8 offset-lg-4">
  <button style="display:none;margin-top: 5px;" id= "managelock_transfer_submit_button" type="button" class="btn btn-primary" style="margin-top: 5px;">
    Transfer
  </button>
</div>


<!-- Generate Link -->
<div class="col-lg-8 offset-lg-4">
 
  <div class="input-group">
    <a style="display:none" target="_blank" href="" id="managelock_generatelink_display">---
    </a>
  </div>
  </center>
</div>
</div>
<!--All result panels-->
<center>
<span id ="managelock_withdraw_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_withdraw_result"></span>
<span id ="managelock_extend_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_extend_result"></span>
<span id ="managelock_increment_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_increment_result"></span>
<span id ="managelock_transfer_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_transfer_result"></span>
<span id ="managelock_generatelink_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_generatelink_result"></span>
</center>
`, I, A, z, V
    const Ve = 100,
        je = 100
    N = !(D = M = void 0)
    const Ye = ["0x598cd56214a374d15f638dd04913e0288cd76c7833ee66b15cf55845d875a187"],
        Ge = ["0x601e52fd7ec7840490f1ae9c376bc3b32f6a6a6aac8dc10db76d87ef0fa45d32"],
        Qe = ["0xa6782d3322abbfbe850e6d5c5c78e8e1df603ea07608bb9a62dd83f40d4feccc"],
        Xe = ["0x830357565da6ecfc26d8d9f69df488ed6f70361af9a07e570544aeb5c5e765e5"],
        Je = ["0x601e52fd7ec7840490f1ae9c376bc3b32f6a6a6aac8dc10db76d87ef0fa45d32"]
    C = !(B = !(L = !(w = 300)))
    const Ke = e => e < 1e3 ? e.toFixed(2) : 1e3 <= e && e < 1e6 ? +(e / 1e3).toFixed(2) + "K" : 1e6 <= e && e < 1e9 ? +(e / 1e6).toFixed(2) + "M" : 1e9 <= e && e < 1e12 ? +(e / 1e9).toFixed(2) + "B" : 1e12 <= e ? +(e / 1e12).toFixed(2) + "T" : void 0
    async function Ze(e) {
        var t, n, a, o, i, s, r = {
                token_address: "",
                token_symbol: "",
                msg: "",
                timestamp: "",
                txhash: "",
                status: !0
            },
            l = (t = e.lp_contract_address, s = {
                token_info: {
                    address: "",
                    name: "",
                    symbol: ""
                },
                valid: !0,
                err_msg: ""
            }, k.utils.isAddress(t) && "0x" != await k.eth.getCode(t) ? (o = new k.eth.Contract(Y, t), s.name = await o.methods.name().call(), "Pancake LPs" != s.name ? (s.err_msg = "Not a valid LP address", s.valid = !1) : (n = await o.methods.token0().call(), i = await o.methods.token1().call(), s.total_supply = k.utils.toBN(await o.methods.totalSupply().call()), a = await o.methods.getReserves().call(), o = t = void(l = 0), n == z || n == V ? (o = i, l = c.utils.toBN(a[0]), t = n) : i != z && i != V || (o = n, l = c.utils.toBN(a[1]), t = i), null == o ? (console.log("Discover: Not a WBNB or BUSD pair"), ct("Discover: Not a WBNB or BUSD pair"), s.err_msg = " Not a WBNB or BUSD pair", s.valid = !1) : (i = new k.eth.Contract(J, o), s.token_info.symbol = await i.methods.symbol().call(), s.token_info.name = await i.methods.name().call(), s.token_info.address = o, s.pegged_reserve = l, s.pegged_token = t))) : (s.err_msg = "Not a valid LP address", s.valid = !1), await s)
        return 0 == l.valid ? r.status = !1 : (r.token_address = l.token_info.address, r.token_symbol = l.token_info.symbol, t = await k.eth.getBlock(e.raw_ev.blockNumber), r.timestamp = t.timestamp, r.txhash = e.raw_ev.transactionHash, s = 0, l.pegged_token == z && (s = e.lp_token_amount / l.total_supply * l.pegged_reserve.muln(w) / 1e18), t = 1e3 <= (s = l.pegged_token == V ? e.lp_token_amount / l.total_supply * l.pegged_reserve / 1e18 : s) ? "Bisque" : "LightCoral", e = 2629743e3 <= (l = new Date(1e3 * e.unlock_time) - new Date) ? "Bisque" : "LightCoral", 31556926e3 <= l && (e = "LightGreen"), r.msg = "Liquidity value <span style='background-color:" + (t = 1e4 <= s ? "LightGreen" : t) + "'>$" + Ke(s) + "</span> locked for <span style='background-color:" + e + "'>" + moment.duration(l).humanize() + "</span>"), r
    }
    async function et(e, t) {
        return transaction = await k.eth.getTransaction(e.transactionHash), !(null == transaction || !transaction.input.toLowerCase().startsWith(t))
    }
    async function tt(t, n) {
        return n = await async function(t) {
            var n, a, o, i = []
            for (e in t) verify_transacton = await et(t[e], "0x0511a506"), verify_transacton && (n = t[e], o = a = void 0, a = "0x" + (a = n.data.substring(0, 66)).substring(26, 66), o = "0x" + (o = n.data.substring(66, 130)).substring(24, 64), 1 == (n = await Ze({
                from_address: a,
                lp_contract_address: o,
                lp_token_amount: parseInt(n.data.substring(130, 194), 16),
                lock_time: parseInt(n.data.substring(194, 258), 16),
                unlock_time: parseInt(n.data.substring(258, 322), 16),
                ev_type: "DxSale",
                raw_ev: n
            })).status && i.push(n))
            return i
        }(n = await k.eth.getPastLogs({
            fromBlock: t,
            toBlock: t + n,
            address: U,
            topics: Ye
        }))
    }
    async function nt(t, n) {
        return n = await async function(t) {
            var n, a, o, i, s = []
            for (e in t) verify_transacton = await et(t[e], "0xe6a478b3"), verify_transacton && (n = t[e], i = void 0, a = parseInt(n.data.substring(0, 66), 16), o = parseInt(n.data.substring(66, 130), 16), i = "0x" + (i = n.topics[1]).substring(26, 66), 1 == (n = await Ze({
                from_address: "0x" + n.topics[2].substring(26, 66),
                lp_contract_address: i,
                lp_token_amount: a,
                lock_time: (new Date).getTime() / 1e3,
                unlock_time: o,
                ev_type: "DeepLocker",
                raw_ev: n
            })).status && s.push(n))
            return s
        }(n = await k.eth.getPastLogs({
            fromBlock: t,
            toBlock: t + n,
            address: F,
            topics: Qe
        }))
    }
    async function at(t, n) {
        return n = await async function(t) {
            var n, a, o, i, s = []
            for (e in t) verify_transacton = await et(t[e], "0x6167aa61"), verify_transacton && (n = t[e], i = void 0, a = parseInt(n.data.substring(0, 66), 16), o = parseInt(n.data.substring(66, 130), 16), i = "0x" + (i = n.topics[2]).substring(26, 66), 1 == (n = await Ze({
                from_address: "0x" + n.topics[3].substring(26, 66),
                lp_contract_address: i,
                lp_token_amount: a,
                lock_time: (new Date).getTime() / 1e3,
                unlock_time: o,
                ev_type: "CryptEx",
                raw_ev: n
            })).status && s.push(n))
            return s
        }(n = await k.eth.getPastLogs({
            fromBlock: t,
            toBlock: t + n,
            address: O,
            topics: Ge
        }))
    }
    async function ot(t, n) {
        return n = await async function(t) {
            var n, a, o = []
            for (e in t) verify_transacton = await et(t[e], "0x8af416f6"), verify_transacton && (n = t[e], a = void 0, a = "0x" + (a = n.data.substring(0, 66)).substring(26, 66), 1 == (n = await Ze({
                from_address: "0x" + n.data.substring(66, 130).substring(24, 64),
                lp_contract_address: a,
                lp_token_amount: parseInt(n.data.substring(130, 194), 16),
                lock_time: parseInt(n.data.substring(194, 258), 16),
                unlock_time: parseInt(n.data.substring(258, 322), 16),
                ev_type: "Unicrypt",
                raw_ev: n
            })).status && o.push(n))
            return o
        }(n = await k.eth.getPastLogs({
            fromBlock: t,
            toBlock: t + n,
            address: W,
            topics: Xe
        }))
    }
    async function it(t, n) {
        return n = await async function(t) {
            var n, a, o, i, s = []
            for (e in t) verify_transacton = await et(t[e], "0x6167aa61"), verify_transacton && (n = t[e], i = void 0, a = parseInt(n.data.substring(0, 66), 16), o = parseInt(n.data.substring(66, 130), 16), i = "0x" + (i = n.topics[2]).substring(26, 66), 1 == (n = await Ze({
                from_address: "0x" + n.topics[3].substring(26, 66),
                lp_contract_address: i,
                lp_token_amount: a,
                lock_time: (new Date).getTime() / 1e3,
                unlock_time: o,
                ev_type: "Mudra",
                raw_ev: n
            })).status && s.push(n))
            return s
        }(n = await k.eth.getPastLogs({
            fromBlock: t,
            toBlock: t + n,
            address: q,
            topics: Je
        }))
    }
    async function st() {
        var e, t = new c.eth.Contract(j, A),
            n = await t.methods.getPair(r, u).call(),
            n = await (t = new c.eth.Contract(Y, n)).methods.getReserves().call()
        return (n = (t = await t.methods.token0().call()) == r ? (e = c.utils.toBN(n[0]), c.utils.toBN(n[1])) : (e = c.utils.toBN(n[1]), c.utils.toBN(n[0]))).div(e).toNumber()
    }
    async function rt() {
        var t, n, a
        if (!L) {
            $("#discover_refresh_button").prop("disabled", !0), $("#discover_refresh_spinner").show(), L = !0
            try {
                M = new Date, w = await st(), t = await k.eth.getBlockNumber(), t -= Ve, n = []
                try {
                    await new Promise(e => setTimeout(e, 1e3)), a = await tt(t, Ve), n = n.concat(a)
                } catch (e) {
                    console.log("dxsale " + e), ct("Discover dxsale failed: " + (null != e.message ? e.message : "Unknown error"))
                }
                try {
                    await new Promise(e => setTimeout(e, 1e3)), a = await nt(t, Ve), n = n.concat(a)
                } catch (e) {
                    console.log("deeplock " + e), ct("Discover deeplock failed: " + (null != e.message ? e.message : "Unknown error"))
                }
                try {
                    await new Promise(e => setTimeout(e, 1e3)), a = await at(t, Ve), n = n.concat(a)
                } catch (e) {
                    console.log("cryptex " + e), ct("Discover deeplock failed: " + (null != e.message ? e.message : "Unknown error"))
                }
                try {
                    await new Promise(e => setTimeout(e, 1e3)), a = await ot(t, Ve), n = n.concat(a)
                } catch (e) {
                    console.log("unicrypt " + e), ct("Discover unicrypt failed: " + (null != e.message ? e.message : "Unknown error"))
                }
                try {
                    await new Promise(e => setTimeout(e, 1e3)), a = await it(t, Ve), n = n.concat(a)
                } catch (e) {
                    console.log("mudra " + e), ct("Discover mudra failed: " + (null != e.message ? e.message : "Unknown error"))
                }
                await async function(t) {
                    var n, a, o, i, s, r, l, c, u, p, d, m, y, _, k = !1
                    try {
                        null != h && (a = await new(n = new Web3(b)).eth.Contract(J, R).methods.balanceOf(h).call(), a = n.utils.toBN(a), o = await new n.eth.Contract(Y, H).methods.getReserves().call(), i = n.utils.toBN(o[0]), s = n.utils.toBN(o[1]).div(i), r = await new n.eth.Contract(Y, E).methods.getReserves().call(), l = n.utils.toBN(r[0]), c = n.utils.toBN(r[1]), k = 100 <= n.utils.fromWei(l.mul(a).div(c)) * s)
                    } catch (e) {
                        ct("Discover user account failed: " + (null != e.message ? e.message : "Unknown error")), ct("Discover user account failed: " + (null != e.stack ? e.stack : "Unknown stack"))
                    }
                    for (e in (u = $("#discover_list")).html(""), 0 == t.length && u.html("No recent opportunities discovered."), t) {
                        if (p = t[e], d = new Date(1e3 * p.timestamp) - new Date, m = !(10 < Math.abs(d / 6e4)), _ = $("<li />").appendTo(u), y = p.token_symbol, m) {
                            if (!k) {
                                $("<p/>").prop("style", "display:inline").html('<sup style="color:green;background-color:powderblue;">Premium</sup><span style="color: transparent;text-shadow: 0 0 5px rgba(0,0,0,0.5);">Token</span>: <small> [' + moment.duration(d).humanize(!0) + '] </small> Liquidity locked. Get early access with <a href="#pricing">Mudra Premium</a>').appendTo(_)
                                continue
                            }
                            y = '<sup style="color:green;background-color:powderblue;">Premium</sup>' + p.token_symbol
                        }(y = $("<a/>").html(y).appendTo(_)).prop("href", "https://bscscan.com/token/" + p.token_address), y.prop("target", "_blank"), $("<p/>").prop("style", "display:inline").html(": <small> [" + moment.duration(d).humanize(!0) + "] </small> " + p.msg + ". ").appendTo(_), (_ = $("<a/>").prop("style", "display:inline").text("   Mudra Research Report").appendTo(_)).prop("href", "/?research=yes&address=" + p.token_address), _.prop("target", "_blank"), $("<i />").prop("class", "bx bx-file").appendTo(_)
                    }
                }(n = n.sort((e, t) => e.timestamp < t.timestamp ? 1 : -1)), B = !0, $("#discover_refresh_msg").html("Last updated " + moment(M).fromNow() + ".")
            } catch (e) {
                console.log(e), ct("Discover failed: " + (null != e.message ? e.message : "Unknown error")), B = !1, $("#discover_refresh_msg").html("Last update failed " + moment(M).fromNow() + ".")
            } finally {
                $("#discover_refresh_spinner").hide(), $("#discover_refresh_button").prop("disabled", !1), L = !1
            }
        }
    }
    async function lt() {
        var t, n, a, o, i, s, r, l, c, u, p, d, m
        if (!C) {
            $("#discover_all_refresh_button").prop("disabled", !0), $("#discover_all_refresh_spinner").show(), $("#discover_all_list").html("Finding all opportunities!"), c = !1
            try {
                null != h && (n = await new(t = new Web3(b)).eth.Contract(J, R).methods.balanceOf(h).call(), n = t.utils.toBN(n), a = await new t.eth.Contract(Y, H).methods.getReserves().call(), o = t.utils.toBN(a[0]), i = t.utils.toBN(a[1]).div(o), s = await new t.eth.Contract(Y, E).methods.getReserves().call(), r = t.utils.toBN(s[0]), l = t.utils.toBN(s[1]), c = 500 <= t.utils.fromWei(r.mul(n).div(l)) * i)
            } catch (e) {
                ct("Discover user account failed: " + (null != e.message ? e.message : "Unknown error")), ct("Discover user account failed: " + (null != e.stack ? e.stack : "Unknown stack"))
            }
            if (0 == c) return (c = $("#discover_all_list")).html(""), c.html("This feature is only available to <a target='_blank' href='/#pricing'>Mudra Premium Level 2 users</a>"), $("#discover_all_refresh_button").prop("disabled", !1), void $("#discover_all_refresh_spinner").hide()
            $("#discover_all_list").html(""), $("#discover_all_refresh_spinner_more").show(), $("#discover_all_refresh_text_more").show(), C = !0
            try {
                for (D = new Date, await st(), u = await k.eth.getBlockNumber();;) {
                    u -= je, p = []
                    try {
                        d = await tt(u, je), p = p.concat(d)
                    } catch (e) {}
                    try {
                        d = await nt(u, je), p = p.concat(d)
                    } catch (e) {}
                    try {
                        d = await at(u, je), p = p.concat(d)
                    } catch (e) {}
                    try {
                        d = await ot(u, je), p = p.concat(d)
                    } catch (e) {}
                    try {
                        d = await it(u, je), p = p.concat(d)
                    } catch (e) {}
                    if (await async function(t) {
                            var n, a, o, i, s = $("#discover_all_list")
                            for (e in 0 == t.length && s.html("No recent opportunities discovered."), t) n = t[e], a = new Date(1e3 * n.timestamp) - new Date, i = $("<li />").appendTo(s), o = n.token_symbol, (o = $("<a/>").html(o).appendTo(i)).prop("href", "https://bscscan.com/token/" + n.token_address), o.prop("target", "_blank"), $("<p/>").prop("style", "display:inline").html(": <small> [" + moment.duration(a).humanize(!0) + "] </small> " + n.msg + ". ").appendTo(i), (i = $("<a/>").prop("style", "display:inline").text("   Mudra Research Report").appendTo(i)).prop("href", "/?research=yes&address=" + n.token_address), i.prop("target", "_blank"), $("<i />").prop("class", "bx bx-file").appendTo(i)
                        }(p = p.sort((e, t) => e.timestamp < t.timestamp ? 1 : -1)), m = await k.eth.getBlock(u), new Date(1e3 * m.timestamp) < (new Date).setHours((new Date).getHours() - 24)) break
                }
                N = !0, $("#discover_all_refresh_msg").html("Last updated " + moment(D).fromNow() + ".")
            } catch (e) {
                console.log(e), ct("Discover failed: " + (null != e.message ? e.message : "Unknown error")), N = !1, $("#discover_all_refresh_msg").html("Last update failed " + moment(D).fromNow() + ".")
            } finally {
                $("#discover_all_refresh_spinner").hide(), $("#discover_all_refresh_spinner_more").hide(), $("#discover_all_refresh_text_more").hide(), $("#discover_all_refresh_button").prop("disabled", !1), C = !1
            }
        }
    }

    function ct(e) {
        try {
            $.post("/api/log/", {
                address: e
            })
        } catch (e) {
            console.log(e)
        }
    }

    function ut(e) {
        null != h ? ($("#discover_connect_wallet").hide(), $("#discover_connected_wallet_address").text(h.substring(0, 6) + ".." + h.substring(h.length - 4, h.length)), $("#discover_connected_wallet").show(), $("#discover_connect_wallet_msg").hide(), rt(), 0 < $("#discover_all_refresh_button").length && lt()) : ($("#discover_connect_wallet").show(), $("#discover_connected_wallet_address").text(""), $("#discover_connected_wallet").hide(), $("#discover_connect_wallet_msg").text(e.msg), $("#discover_connect_wallet_msg").show())
    }
    $(document).ready(async function() {
        k = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org")), setInterval(function() {
            $("#discover_refresh_auto").is(":checked") && rt()
        }, 6e4), setInterval(function() {
            var e
            L || (e = 1 == B ? "" : "failed ", $("#discover_refresh_msg").html("Last updated " + e + moment(M).fromNow() + "."))
        }, 6e4), $("#discover_refresh_button").on("click", function(e) {
            rt()
        }), rt(), 0 < $("#discover_all_refresh_button").length && (setInterval(function() {
            var e
            C || (e = 1 == N ? "" : "failed ", $("#discover_all_refresh_msg").html("Last updated " + e + moment(D).fromNow() + "."))
        }, 6e4), $("#discover_all_refresh_button").on("click", function(e) {
            lt()
        })), $("#discover_connect_wallet").on("click", async function(e) {
            await ie()
        })
    })
}.call(this);
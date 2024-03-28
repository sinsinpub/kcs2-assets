{
    72170: (_1nm, _1nn) => {
        'use strict';
        var _1no = null;
        defineModule(_1nn);
        Object.defineProperty(_1nn, '__esModule', {
            'value': true
        }), _1nn.SHIP_COUNTRY = void 0, _1nn.SHIP_COUNTRY = {
            1: '日本',
            2: '日本',
            3: '日本',
            4: '日本',
            5: '日本',
            6: '日本',
            7: '日本',
            8: '日本',
            9: '日本',
            10: '日本',
            11: '日本',
            12: '日本',
            13: '日本',
            14: '日本',
            15: '日本',
            16: '日本',
            17: '日本',
            18: '日本',
            19: '日本',
            20: '日本',
            21: '日本',
            22: '日本',
            23: '日本',
            24: '日本',
            25: '日本',
            26: '日本',
            27: '日本',
            28: '日本',
            29: '日本',
            30: '日本',
            31: '日本',
            32: '日本',
            33: '日本',
            34: '日本',
            35: '日本',
            36: '日本',
            37: '日本',
            38: '日本',
            39: '日本',
            40: '日本',
            41: '日本',
            42: '日本',
            43: '日本',
            44: '日本',
            45: '日本',
            46: '日本',
            49: '日本',
            50: '日本',
            51: '日本',
            52: '日本',
            53: '日本',
            54: '日本',
            56: '日本',
            59: '日本',
            60: '日本',
            62: '日本',
            66: '日本',
            71: '日本',
            72: '日本',
            74: '日本',
            75: '日本',
            76: '日本',
            77: '日本',
            85: '日本',
            86: '日本',
            90: '日本',
            94: '日本',
            97: '日本',
            100: '日本',
            101: '日本',
            103: '日本',
            104: '日本',
            109: '日本',
            111: '日本',
            115: '日本',
            117: '日本',
            119: '日本',
            120: '日本',
            123: '日本',
            126: '日本',
            127: '日本',
            65: 'アメリカ',
            69: 'アメリカ',
            83: 'アメリカ',
            84: 'アメリカ',
            87: 'アメリカ',
            91: 'アメリカ',
            93: 'アメリカ',
            95: 'アメリカ',
            99: 'アメリカ',
            102: 'アメリカ',
            105: 'アメリカ',
            106: 'アメリカ',
            107: 'アメリカ',
            110: 'アメリカ',
            114: 'アメリカ',
            116: 'アメリカ',
            118: 'アメリカ',
            121: 'アメリカ',
            122: 'アメリカ',
            125: 'アメリカ',
            67: 'イギリス',
            78: 'イギリス',
            82: 'イギリス',
            88: 'イギリス',
            108: 'イギリス',
            112: 'イギリス',
            58: 'イタリア',
            61: 'イタリア',
            64: 'イタリア',
            68: 'イタリア',
            80: 'イタリア',
            92: 'イタリア',
            113: 'イタリア',
            124: 'イタリア',
            98: 'オランダ',
            96: 'オーストラリア',
            89: 'スウェーデン',
            47: 'ドイツ',
            48: 'ドイツ',
            55: 'ドイツ',
            57: 'ドイツ',
            63: 'ドイツ',
            70: 'フランス',
            79: 'フランス',
            73: 'ロシア',
            81: 'ロシア'
        };
    },
    73785: function(_l9o, _l9p, _l9q) {
        'use strict';
        var _l9r = null;
        var _l9s = this && this.__importDefault || function(_l9t) {
            var _l9u = null;
            return _l9t && _l9t.__esModule ? _l9t : {
                'default': _l9t
            };
        };
        defineModule(_l9p);
        Object.defineProperty(_l9p, '__esModule', {
            'value': true
        }), _l9p.SlotItemEffectParamModel = void 0;
        var _l9v = _l9s(_l9q(18622)),
            _l9w = _l9q(72170),
            _l9x = (function() {
                var _l9y = null;

                function _l9z(_la0, _la1) {
                    var _la2 = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _la3 = {}, _la4 = {}, _la5 = {}, _la6 = 0, _la7 = _la1; _la6 < _la7.length; _la6++) {
                        var _la8 = _la7[_la6];
                        null != _la8 && (null == _la3[_la8.mstID] && (_la3[_la8.mstID] = new Array()), _la3[_la8.mstID].push(_la8), null == _la4[_la8.mstID] ? _la4[_la8.mstID] = 1 : _la4[_la8.mstID] += 1, null == _la5[_la8.equipType] ? _la5[_la8.equipType] = 1 : _la5[_la8.equipType] += 1);
                    }
                    this._have_slots_dict = _la3, this._have_slotnums_dict = _la4, this._have_type3nums_dict = _la5, this._ship_id = _la0.mstID, this._yomi = _la0.yomi, this._stype = _la0.shipTypeID, this._ctype = _la0.getClassType();
                }
                return Object.defineProperty(_l9z.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _la9 = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_l9z.prototype, 'ship_id', {
                    'get': function() {
                        var _laa = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_l9z.prototype, 'yomi', {
                    'get': function() {
                        var _lab = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_l9z.prototype, 'stype', {
                    'get': function() {
                        var _lac = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_l9z.prototype, 'ctype', {
                    'get': function() {
                        var _lad = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _l9z.prototype.get_slotnums = function(_lae) {
                    var _laf = null;
                    return null == this._have_slotnums_dict[_lae] ? 0 : this._have_slotnums_dict[_lae];
                }, _l9z.prototype.get_type3_nums = function(_lag) {
                    var _lah = null;
                    return null == this._have_type3nums_dict[_lag] ? 0 : this._have_type3nums_dict[_lag];
                }, _l9z.prototype.have_slot_ids = function() {
                    var _lai = null;
                    return Object.keys(this._have_slots_dict);
                }, _l9z.prototype.get_each_level_nums = function(_laj) {
                    var _lak = null,
                        _lal = this._have_slots_dict[_laj],
                        _lam = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _lal)
                        for (var _lan = 0, _lao = _lal; _lan < _lao.length; _lan++) {
                            _lam[_lao[_lan].level]++;
                        }
                    return _lam;
                }, _l9z.prototype.get_each_level_over_nums = function(_lap) {
                    var _laq = null;
                    for (var _lar = this, _las = [], _lat = function(_lau) {
                            var _lav = null;
                            if (_las[_lau] = Array.apply(null, new Array(_law.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _law.have_slots_dict[_lau]) return 'continue';
                            _law.get_each_level_nums(_lau).forEach(function(_lax, _lay) {
                                var _laz = null;
                                for (var _lb0 = 1; _lb0 <= _lar.SLOT_LEVEL_MAX; _lb0++) _lay >= _lb0 && (_las[_lau][_lb0] += _lax);
                            });
                        }, _law = this, _lb1 = 0, _lb2 = _lap; _lb1 < _lb2.length; _lb1++) {
                        _lat(_lb2[_lb1]);
                    }
                    return _las;
                }, _l9z.prototype.get_have_rader_nums = function() {
                    var _lb3 = null;
                    for (var _lb4 = 0, _lb5 = 0, _lb6 = 0, _lb7 = this.have_slot_ids(); _lb6 < _lb7.length; _lb6++) {
                        var _lb8 = _lb7[_lb6],
                            _lb9 = _l9v.default.model.slot.getMst(_lb8),
                            _lba = _lb9.equipType;
                        12 != _lba && 13 != _lba || (_lb9.sakuteki >= 5 && (_lb4 += this.get_slotnums(parseInt(_lb8))), _lb9.taiku >= 2 && (_lb5 += this.get_slotnums(parseInt(_lb8))));
                    }
                    return {
                        'water_rader': _lb4,
                        'air_rader': _lb5
                    };
                }, _l9z.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _l9z.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _l9z.prototype.getCountryName = function() {
                    var _lbb = null;
                    return null == _l9w.SHIP_COUNTRY[this._ctype] ? '' : _l9w.SHIP_COUNTRY[this._ctype];
                }, _l9z.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _l9z.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _l9z;
            }());
        _l9p.SlotItemEffectParamModel = _l9x;
    },
    16718: (_lmj, _lmk, _lml) => {
        'use strict';
        var _lmm = null;
        defineModule(_lmk);
        Object.defineProperty(_lmk, '__esModule', {
            'value': true
        }), _lmk.TaskGetSlotItemEffectParams = void 0;
        var _lmn = _lml(74496),
            _lmo = _lml(82692),
            _lmp = (function() {
                var _lmq = null;

                function _lmr(_lms, _lmt, _lmu) {
                    var _lmv = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lms;
                    var _lmw = _lms.getSlotitems();
                    _lmw.push(_lms.getSlotitemEx());
                    var _lmx = _lmw.map(function(_lmy) {
                        var _lmz = null;
                        return null == _lmy || null != _lmt && _lmy.memID == _lmt.memID ? null : _lmy;
                    });
                    this._removeSlots = _lmx;
                    var _ln0 = _lmx.map(function(_ln1) {
                        return _ln1;
                    });
                    _ln0.push(_lmu), this._toSlots = _ln0;
                }
                return _lmr.prototype.start = function() {
                    var _ln2 = null,
                        _ln3 = this._ship.getSlotitems();
                    _ln3.push(this._ship.getSlotitemEx());
                    var _ln4 = _lmo.SlotItemEffectUtil.getSlotitemEffect(this._ship, _ln3),
                        _ln5 = _lmo.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _ln6 = _lmo.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_ln4, _ln5),
                        'toSlotItemEffect': this._subEffectModels(_ln6, _ln5)
                    };
                }, _lmr.prototype._subEffectModels = function(_ln7, _ln8) {
                    var _ln9 = null,
                        _lna = new _lmn.SlotItemEffectModel();
                    return _lna.houg = _ln7.houg - _ln8.houg, _lna.raig = _ln7.raig - _ln8.raig, _lna.tyku = _ln7.tyku - _ln8.tyku, _lna.souk = _ln7.souk - _ln8.souk, _lna.kaih = _ln7.kaih - _ln8.kaih, _lna.tais = _ln7.tais - _ln8.tais, _lna.saku = _ln7.saku - _ln8.saku, _lna.baku = _ln7.baku - _ln8.baku, _lna.houm = _ln7.houm - _ln8.houm, _lna.leng = _ln7.leng - _ln8.leng, _lna;
                }, _lmr;
            }());
        _lmk.TaskGetSlotItemEffectParams = _lmp;
    },
    69377: function(_mb0, _mb1, _mb2) {
        'use strict';
        var _mb3 = null;
        var _mb4 = this && this.__importDefault || function(_mb5) {
            var _mb6 = null;
            return _mb5 && _mb5.__esModule ? _mb5 : {
                'default': _mb5
            };
        };
        defineModule(_mb1);
        Object.defineProperty(_mb1, '__esModule', {
            'value': true
        }), _mb1.get25mmMachinegunEffect = void 0;
        var _mb7 = _mb2(74496),
            _mb8 = _mb4(_mb2(18622));
        _mb1.get25mmMachinegunEffect = function(_mb9) {
            var _mba = null,
                _mbb = new _mb7.SlotItemEffectModel(),
                _mbc = false,
                _mbd = new _mb7.SlotItemEffectModel(),
                _mbe = 0;
            if (662 == _mb9.ship_id || 663 == _mb9.ship_id ? (_mbd.tyku += 2, _mbd.kaih += 1, _mbc = true) : 668 == _mb9.ship_id && (_mbd.tyku += 3, _mbd.kaih += 2, _mbc = true), 56 == _mb9.ctype && (_mbd.houg += 1, _mbd.tyku += 2, _mbd.kaih += 2, _mbc = true, _mbe = 1), 0 == _mbc) return _mbb;
            var _mbf = _mb9.get_slotnums(39) + _mb9.get_slotnums(40) + _mb9.get_slotnums(49) + _mb9.get_slotnums(131);
            if (_mbb.add(_mbd.multiply(_mbf)), 0 == _mbe) return _mbb;
            for (var _mbg = 0, _mbh = 0, _mbi = _mb9.have_slot_ids(); _mbh < _mbi.length; _mbh++) {
                var _mbj = _mbi[_mbh],
                    _mbk = _mb8.default.model.slot.getMst(_mbj),
                    _mbl = _mbk.equipType;
                12 != _mbl && 13 != _mbl || (_mbk.sakuteki >= 5 && _mb9.get_slotnums(parseInt(_mbj)), _mbk.taiku >= 2 && (_mbg += _mb9.get_slotnums(parseInt(_mbj))));
            }
            return _mbg >= 1 && 1 == _mbe && (_mbb.tyku += 2, _mbb.kaih += 2), _mbb;
        };
    },
    77670: function(_mbm, _mbn, _mbo) {
        'use strict';
        var _mbp = null;
        var _mbq = this && this.__importDefault || function(_mbr) {
            var _mbs = null;
            return _mbr && _mbr.__esModule ? _mbr : {
                'default': _mbr
            };
        };
        defineModule(_mbn);
        Object.defineProperty(_mbn, '__esModule', {
            'value': true
        }), _mbn.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mbt = _mbo(74496),
            _mbu = _mbq(_mbo(18622));
        _mbn.get8cmAntiAircraftGunPersonalEffect = function(_mbv) {
            var _mbw = null,
                _mbx = new _mbt.SlotItemEffectModel(),
                _mby = false,
                _mbz = new _mbt.SlotItemEffectModel(),
                _mc0 = 0;
            if (501 != _mbv.ship_id && 506 != _mbv.ship_id && 502 != _mbv.ship_id && 507 != _mbv.ship_id || (_mbz.tyku += 2, _mbz.kaih += 1, _mby = true, _mc0 = 1), 501 != _mbv.ship_id && 506 != _mbv.ship_id || (_mbz.houg += 1, _mbz.tyku += 2, _mbz.kaih += 2, _mby = true, _mc0 = 1), 0 == _mby) return _mbx;
            var _mc1 = _mbv.get_slotnums(66) + _mbv.get_slotnums(220);
            _mbx.add(_mbz.multiply(_mc1));
            for (var _mc2 = 0, _mc3 = 0, _mc4 = _mbv.have_slot_ids(); _mc3 < _mc4.length; _mc3++) {
                var _mc5 = _mc4[_mc3],
                    _mc6 = _mbu.default.model.slot.getMst(_mc5),
                    _mc7 = _mc6.equipType;
                12 != _mc7 && 13 != _mc7 || (_mc6.sakuteki >= 5 && _mbv.get_slotnums(parseInt(_mc5)), _mc6.taiku >= 2 && (_mc2 += _mbv.get_slotnums(parseInt(_mc5))));
            }
            return 0 == _mc0 || _mc2 >= 1 && (_mbx.tyku += 1, _mbx.kaih += 2), _mbx;
        };
    },
    34165: (_mc8, _mc9, _mca) => {
        'use strict';
        var _mcb = null;
        defineModule(_mc9);
        Object.defineProperty(_mc9, '__esModule', {
            'value': true
        }), _mc9.getCamouflageSlotPersonalEffect = void 0;
        var _mcc = _mca(74496);
        _mc9.getCamouflageSlotPersonalEffect = function(_mcd) {
            var _mce = null,
                _mcf = new _mcc.SlotItemEffectModel();
            return 'きそ' != _mcd.yomi && 'たま' != _mcd.yomi || (_mcf.kaih = 7, _mcf.souk = 2), _mcf;
        };
    },
    31127: (_mcg, _mch, _mci) => {
        'use strict';
        var _mcj = null;
        defineModule(_mch);
        Object.defineProperty(_mch, '__esModule', {
            'value': true
        }), _mch.getHighZuiunSeriesEffect = void 0;
        var _mck = _mci(74496);
        _mch.getHighZuiunSeriesEffect = function(_mcl) {
            var _mcm = null,
                _mcn = new _mck.SlotItemEffectModel(),
                _mco = false,
                _mcp = new _mck.SlotItemEffectModel();
            if (662 == _mcl.ship_id ? (_mcn.houg += 3, _mcn.kaih += 1) : 663 == _mcl.ship_id || 668 == _mcl.ship_id || 501 == _mcl.ship_id || 506 == _mcl.ship_id || 553 == _mcl.ship_id || 554 == _mcl.ship_id ? (_mcp.houg += 3, _mcp.kaih += 2, _mcp.tyku += 1, _mco = true) : 502 != _mcl.ship_id && 507 != _mcl.ship_id || (_mcp.houg += 2, _mcp.kaih += 2, _mcp.tyku += 1, _mco = true), 0 == _mco) return _mcn;
            var _mcq = 0;
            return [237, 322, 323, 490].forEach(function(_mcr) {
                var _mcs = null;
                _mcq += _mcl.get_slotnums(_mcr);
            }), _mcn.add(_mcp.multiply(_mcq)), _mcn;
        };
    },
    81018: function(_mct, _mcu, _mcv) {
        'use strict';
        var _mcw = null;
        var _mcx = this && this.__importDefault || function(_mcy) {
            var _mcz = null;
            return _mcy && _mcy.__esModule ? _mcy : {
                'default': _mcy
            };
        };
        defineModule(_mcu);
        Object.defineProperty(_mcu, '__esModule', {
            'value': true
        }), _mcu.getRaderPrivateEffect = void 0;
        var _md0 = _mcv(74496),
            _md1 = _mcx(_mcv(18622));
        _mcu.getRaderPrivateEffect = function(_md2) {
            var _md3 = null,
                _md4 = new _md0.SlotItemEffectModel(),
                _md5 = 0,
                _md6 = 0;
            if (569 == _md2.ship_id || 648 == _md2.ship_id || 961 == _md2.ship_id || 951 == _md2.ship_id) _md5 = 1;
            else {
                if (955 != _md2.ship_id && 960 != _md2.ship_id) return _md4;
                _md5 = 2, _md6 = 1;
            }
            for (var _md7 = 0, _md8 = 0, _md9 = _md2.have_slot_ids(); _md8 < _md9.length; _md8++) {
                var _mda = _md9[_md8],
                    _mdb = _md1.default.model.slot.getMst(_mda),
                    _mdc = _mdb.equipType;
                12 != _mdc && 13 != _mdc || (_mdb.sakuteki >= 5 && _md2.get_slotnums(parseInt(_mda)), _mdb.taiku >= 2 && (_md7 += _md2.get_slotnums(parseInt(_mda))));
            }
            if (_md7 > 0 && (1 == _md5 ? (_md4.houg += 1, _md4.kaih += 3, _md4.tyku += 2) : 2 == _md5 && (_md4.tyku += 2, _md4.kaih += 1)), 0 == _md6) return _md4;
            for (var _mdd = [], _mde = function(_mdf) {
                    var _mdg = null;
                    if (null == _md2.have_slots_dict[_mdf]) return 'continue';
                    var _mdh = _md2.get_each_level_nums(_mdf);
                    null == _mdd[_mdf] && (_mdd[_mdf] = []), _mdh.forEach(function(_mdi, _mdj) {
                        var _mdk = null;
                        for (var _mdl = 1; _mdl <= _md2.SLOT_LEVEL_MAX; _mdl++) null == _mdd[_mdf][_mdl] && (_mdd[_mdf][_mdl] = 0), _mdj >= _mdl && (_mdd[_mdf][_mdl] += _mdi);
                    });
                }, _mdm = 0, _mdn = [450]; _mdm < _mdn.length; _mdm++) {
                _mde(_mdn[_mdm]);
            }
            var _mdo = null != _mdd[450] ? _mdd[450][4] : 0;
            return 1 == _md6 && _mdo > 0 && (_md4.houg += 1, _md4.houm += 1, _md4.tyku += 1, _md4.kaih += 2), _md4;
        };
    },
    56716: (_mdp, _mdq, _mdr) => {
        'use strict';
        var _mds = null;
        defineModule(_mdq);
        Object.defineProperty(_mdq, '__esModule', {
            'value': true
        }), _mdq.getSearchLightEffect = void 0;
        var _mdt = _mdr(74496);
        _mdq.getSearchLightEffect = function(_mdu) {
            var _mdv = null,
                _mdw = new _mdt.SlotItemEffectModel(),
                _mdx = _mdu.get_type3_nums(29);
            return 'ひえい' == _mdu.yomi || 'きりしま' == _mdu.yomi || 'ちょうかい' == _mdu.yomi || 'じんつう' == _mdu.yomi || 'あかつき' == _mdu.yomi ? (_mdw.houg += 4, _mdw.kaih -= 1) : 'あきぐも' == _mdu.yomi ? _mdw.houg = _mdw.houg + 2 * _mdx : 'ゆきかぜ' == _mdu.yomi && (_mdw.houg = _mdw.houg + _mdx, _mdw.tyku = _mdw.tyku + _mdx), 662 != _mdu.ship_id && 663 != _mdu.ship_id && 668 != _mdu.ship_id || (_mdw.raig += 2, _mdw.houg += 4), 'じんつう' == _mdu.yomi && (_mdw.raig += 8, _mdw.houg += 4), _mdw;
        };
    },
    17713: (_mdy, _mdz, _me0) => {
        'use strict';
        var _me1 = null;
        defineModule(_mdz);
        Object.defineProperty(_mdz, '__esModule', {
            'value': true
        }), _mdz.getSearchLightLargeEffect = void 0;
        var _me2 = _me0(74496);
        _mdz.getSearchLightLargeEffect = function(_me3) {
            var _me4 = null,
                _me5 = new _me2.SlotItemEffectModel();
            'ひえい' == _me3.yomi || 'きりしま' == _me3.yomi ? (_me5.houg += 6, _me5.kaih -= 2) : 'やまと' != _me3.yomi && 'むさし' != _me3.yomi || (_me5.houg += 4, _me5.kaih -= 1);
            var _me6 = _me3.get_slotnums(174);
            return 592 == _me3.ship_id && (_me5.houg += 3, _me5.raig += 3, _me6 > 0 && (_me5.raig += 5)), _me5;
        };
    },
    17213: (_me7, _me8, _me9) => {
        'use strict';
        var _mea = null;
        defineModule(_me8);
        Object.defineProperty(_me8, '__esModule', {
            'value': true
        }), _me8.getSlot100PersonalEffect = void 0;
        var _meb = _me9(74496);
        _me8.getSlot100PersonalEffect = function(_mec) {
            var _med = null,
                _mee = new _meb.SlotItemEffectModel(),
                _mef = new _meb.SlotItemEffectModel();
            if (553 == _mec.ship_id) _mef.houg = 4;
            else {
                if (554 != _mec.ship_id) return 196 == _mec.ship_id ? (_mee.houg = 3, _mee) : 197 == _mec.ship_id ? (_mee.houg = 6, _mee) : _mee;
                _mef.houg = 4;
            }
            var _meg = _mec.get_slotnums(100);
            return _mee = _mef.multiply(_meg);
        };
    },
    40176: (_meh, _mei, _mej) => {
        'use strict';
        var _mek = null;
        defineModule(_mei);
        Object.defineProperty(_mei, '__esModule', {
            'value': true
        }), _mei.getSlot104PersonalEffect = void 0;
        var _mel = _mej(74496);
        _mei.getSlot104PersonalEffect = function(_mem) {
            var _men = null,
                _meo = new _mel.SlotItemEffectModel(),
                _mep = new _mel.SlotItemEffectModel();
            if (149 == _mem.ship_id || 591 == _mem.ship_id) _mep.houg = 2;
            else {
                if (150 == _mem.ship_id || 592 == _mem.ship_id) _mep.houg = 1;
                else {
                    if (152 == _mem.ship_id) _mep.houg = 1;
                    else {
                        if (151 != _mem.ship_id && 593 != _mem.ship_id && 954 != _mem.ship_id) return _meo;
                        _mep.houg = 2, _mep.tyku = 1, _mep.kaih = 2;
                    }
                }
            }
            var _meq = _mem.get_slotnums(104);
            return _meo = _mep.multiply(_meq);
        };
    },
    32889: (_mer, _mes, _met) => {
        'use strict';
        var _meu = null;
        defineModule(_mes);
        Object.defineProperty(_mes, '__esModule', {
            'value': true
        }), _mes.getSlot106PersonalEffect = void 0;
        var _mev = _met(74496);
        _mes.getSlot106PersonalEffect = function(_mew) {
            var _mex = null,
                _mey = new _mev.SlotItemEffectModel(),
                _mez = new _mev.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961].indexOf(_mew.ship_id) >= 0 ? (_mez.houg += 1, _mez.tyku += 2, _mez.souk += 1, _mez.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mew.yomi) >= 0 ? (_mez.tyku += 1, _mez.souk += 1, _mez.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mew.yomi) >= 0 && (_mez.tyku += 2, _mez.souk += 1, _mez.kaih += 2, 663 != _mew.ship_id && 668 != _mew.ship_id || (_mey.houg += 1, _mey.tyku += 1, _mey.souk += 1, _mey.kaih += 1), 668 == _mew.ship_id && (_mey.tyku += 1, _mey.kaih += 1)), !_mez.exists()) return _mey;
            var _mf0 = _mew.get_slotnums(106) + _mew.get_slotnums(450);
            return _mey.add(_mez.multiply(_mf0)), _mey;
        };
    },
    15133: (_mf1, _mf2, _mf3) => {
        'use strict';
        var _mf4 = null;
        defineModule(_mf2);
        Object.defineProperty(_mf2, '__esModule', {
            'value': true
        }), _mf2.getSlot115PersonalEffect = void 0;
        var _mf5 = _mf3(74496);
        _mf2.getSlot115PersonalEffect = function(_mf6) {
            var _mf7 = null,
                _mf8 = new _mf5.SlotItemEffectModel(),
                _mf9 = false,
                _mfa = new _mf5.SlotItemEffectModel(),
                _mfb = 0;
            if (55 != _mf6.ctype && 47 != _mf6.ctype || (_mfa.houg += 2, _mfa.saku += 2, _mfa.kaih += 1, _mf9 = true, _mfb = 1), 0 == _mf9) return _mf8;
            var _mfc = _mf6.get_slotnums(115);
            if (_mf8.add(_mfa.multiply(_mfc)), 0 == _mfb) return _mf8;
            var _mfd = _mf6.get_each_level_nums(115)[10];
            return 1 == _mfb && (_mf8.houg += 1 * _mfd, _mf8.kaih += 1 * _mfd), _mf8;
        };
    },
    55747: (_mfe, _mff, _mfg) => {
        'use strict';
        var _mfh = null;
        defineModule(_mff);
        Object.defineProperty(_mff, '__esModule', {
            'value': true
        }), _mff.getSlot118PersonalEffect = void 0;
        var _mfi = _mfg(74496);
        _mff.getSlot118PersonalEffect = function(_mfj) {
            var _mfk = null,
                _mfl = new _mfi.SlotItemEffectModel(),
                _mfm = false,
                _mfn = new _mfi.SlotItemEffectModel(),
                _mfo = 0;
            if (52 == _mfj.ctype && (_mfn.houg += 1, _mfn.saku += 2, _mfn.kaih += 2, _mfo = 1, _mfm = true), 507 == _mfj.ship_id && (_mfn.houg += 3, _mfn.saku += 2, _mfn.kaih += 1, _mfo = 2, _mfm = true), 0 == _mfm) return _mfl;
            var _mfp = _mfj.get_slotnums(118) + _mfj.get_slotnums(521);
            if (_mfl.add(_mfn.multiply(_mfp)), 0 == _mfj.get_slotnums(118)) return _mfl;
            if (0 == _mfo) return _mfl;
            var _mfq = _mfj.get_each_level_nums(118),
                _mfr = 0,
                _mfs = 0,
                _mft = 0,
                _mfu = _mfq[10];
            return _mfq.forEach(function(_mfv, _mfw) {
                _mfw >= 2 && (_mfr += _mfv), _mfw >= 5 && (_mfs += _mfv), _mfw >= 7 && (_mft += _mfv);
            }), 1 == _mfo ? (_mfl.houg += 2 * _mfu, _mfl.saku += 1 * _mfu) : 2 == _mfo && (_mfl.houm += 1 * _mfr, _mfl.kaih += 1 * _mfs, _mfl.houg += 1 * _mft, _mfl.houg += 1 * _mfu, _mfl.raig += 1 * _mfu, _mfl.tyku += 1 * _mfu, _mfl.saku += 1 * _mfu, _mfl.kaih += 1 * _mfu), _mfl;
        };
    },
    11285: (_mfx, _mfy, _mfz) => {
        'use strict';
        var _mg0 = null;
        defineModule(_mfy);
        Object.defineProperty(_mfy, '__esModule', {
            'value': true
        }), _mfy.getSlot119PersonalEffect = void 0;
        var _mg1 = _mfz(74496);
        _mfy.getSlot119PersonalEffect = function(_mg2) {
            var _mg3 = null,
                _mg4 = new _mg1.SlotItemEffectModel(),
                _mg5 = new _mg1.SlotItemEffectModel();
            34 == _mg2.ctype || 56 == _mg2.ctype ? _mg5.houg += 1 : 90 == _mg2.ctype && (_mg5.houg += 2, _mg5.raig += 1);
            var _mg6 = true;
            if (_mg5.exists() || (_mg6 = false), 0 == _mg6) return _mg4;
            var _mg7 = _mg2.get_slotnums(119);
            return _mg4 = _mg5.multiply(_mg7);
        };
    },
    96200: (_mg8, _mg9, _mga) => {
        'use strict';
        var _mgb = null;
        defineModule(_mg9);
        Object.defineProperty(_mg9, '__esModule', {
            'value': true
        }), _mg9.getSlot120mm50GroupPersonalEffect = void 0;
        var _mgc = _mga(74496);
        _mg9.getSlot120mm50GroupPersonalEffect = function(_mgd) {
            var _mge = null,
                _mgf = new _mgc.SlotItemEffectModel(),
                _mgg = false,
                _mgh = new _mgc.SlotItemEffectModel(),
                _mgi = _mgd.get_slotnums(147),
                _mgj = _mgd.get_slotnums(393),
                _mgk = _mgd.get_slotnums(394),
                _mgl = new _mgc.SlotItemEffectModel(),
                _mgm = new _mgc.SlotItemEffectModel();
            if (61 == _mgd.ctype && (_mgh.houg += 1, _mgh.kaih += 1, _mgg = true, _mgj >= 1 && (_mgl.houg += 1, _mgl.tyku += 1), _mgk >= 1 && (_mgm.houg += 1, _mgm.tyku += 1, _mgm.kaih += 1, 'グレカーレ' == _mgd.yomi && (_mgm.kaih += 1))), 0 == _mgg) return _mgf;
            var _mgn = _mgi + _mgj + _mgk;
            return _mgf.add(_mgh.multiply(_mgn)).add(_mgl.multiply(_mgj)).add(_mgm.multiply(_mgk)), _mgf;
        };
    },
    33155: function(_mgo, _mgp, _mgq) {
        'use strict';
        var _mgr = null;
        var _mgs = this && this.__importDefault || function(_mgt) {
            var _mgu = null;
            return _mgt && _mgt.__esModule ? _mgt : {
                'default': _mgt
            };
        };
        defineModule(_mgp);
        Object.defineProperty(_mgp, '__esModule', {
            'value': true
        }), _mgp.getSlot121PersonalEffect = void 0;
        var _mgv = _mgq(74496),
            _mgw = _mgs(_mgq(18622));
        _mgp.getSlot121PersonalEffect = function(_mgx) {
            var _mgy = null,
                _mgz = new _mgv.SlotItemEffectModel(),
                _mh0 = 0;
            if (54 == _mgx.ctype && (_mgz.tyku += 4, _mgz.kaih += 2, _mh0 = 1), 0 == _mh0) return _mgz;
            for (var _mh1 = 0, _mh2 = 0, _mh3 = _mgx.have_slot_ids(); _mh2 < _mh3.length; _mh2++) {
                var _mh4 = _mh3[_mh2],
                    _mh5 = _mgw.default.model.slot.getMst(_mh4),
                    _mh6 = _mh5.equipType;
                12 != _mh6 && 13 != _mh6 || (_mh5.sakuteki >= 5 && _mgx.get_slotnums(parseInt(_mh4)), _mh5.taiku >= 2 && (_mh1 += _mgx.get_slotnums(parseInt(_mh4))));
            }
            return _mh1 >= 1 && (_mgz.tyku += 2, _mgz.kaih += 2), _mgz;
        };
    },
    9115: function(_mh7, _mh8, _mh9) {
        'use strict';
        var _mha = null;
        var _mhb = this && this.__importDefault || function(_mhc) {
            var _mhd = null;
            return _mhc && _mhc.__esModule ? _mhc : {
                'default': _mhc
            };
        };
        defineModule(_mh8);
        Object.defineProperty(_mh8, '__esModule', {
            'value': true
        }), _mh8.getSlot122PersonalEffect = void 0;
        var _mhe = _mh9(74496),
            _mhf = _mhb(_mh9(18622));
        _mh8.getSlot122PersonalEffect = function(_mhg) {
            var _mhh = null,
                _mhi = new _mhe.SlotItemEffectModel(),
                _mhj = 0,
                _mhk = 0,
                _mhl = false;
            656 == _mhg.ship_id && (_mhl = true, _mhj = 1, _mhk = 1);
            var _mhm = 0,
                _mhn = 0,
                _mho = _mhg.get_each_level_nums(122),
                _mhp = 0;
            if (_mhl) {
                _mho.forEach(function(_mhq, _mhr) {
                    _mhr >= 4 && (_mhp += _mhq);
                });
                for (var _mhs = 0, _mht = _mhg.have_slot_ids(); _mhs < _mht.length; _mhs++) {
                    var _mhu = _mht[_mhs],
                        _mhv = _mhf.default.model.slot.getMst(_mhu),
                        _mhw = _mhv.equipType;
                    12 != _mhw && 13 != _mhw || (_mhv.sakuteki >= 5 && (_mhm += _mhg.get_slotnums(parseInt(_mhu))), _mhv.taiku >= 2 && (_mhn += _mhg.get_slotnums(parseInt(_mhu))));
                }
            }
            return _mhp > 0 && (1 == _mhk && (_mhm > 0 && (_mhi.houg += 4, _mhi.kaih += 3), _mhn > 0 && (_mhi.tyku += 4, _mhi.kaih += 3)), 1 == _mhj && (_mhi.houg += 5 * _mhp, _mhi.tyku += 3 * _mhp, _mhi.kaih += 2 * _mhp)), _mhi;
        };
    },
    37173: (_mhx, _mhy, _mhz) => {
        'use strict';
        var _mi0 = null;
        defineModule(_mhy);
        Object.defineProperty(_mhy, '__esModule', {
            'value': true
        }), _mhy.getSlot129PersonalEffect = void 0;
        var _mi1 = _mhz(74496);
        _mhy.getSlot129PersonalEffect = function(_mi2) {
            var _mi3 = null,
                _mi4 = new _mi1.SlotItemEffectModel(),
                _mi5 = false,
                _mi6 = new _mi1.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mi2.ctype) >= 0 ? (_mi6.houg = 1, _mi6.raig = 2, _mi6.kaih = 2, _mi6.tais = 2, _mi6.saku = 1, _mi5 = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mi2.ctype) >= 0 ? (_mi6.houg = 1, _mi6.raig = 2, _mi6.kaih = 2, _mi6.saku = 3, _mi5 = true) : [7, 13, 29, 8, 9, 31].indexOf(_mi2.ctype) >= 0 && (_mi6.houg = 1, _mi6.kaih = 2, _mi6.saku = 3, _mi5 = true), 0 == _mi5) return _mi4;
            var _mi7 = _mi2.get_slotnums(129);
            return _mi4 = _mi6.multiply(_mi7);
        };
    },
    73254: (_mi8, _mi9, _mia) => {
        'use strict';
        var _mib = null;
        defineModule(_mi9);
        Object.defineProperty(_mi9, '__esModule', {
            'value': true
        }), _mi9.getSlot12PersonalEffect = void 0;
        var _mic = _mia(74496);
        _mi9.getSlot12PersonalEffect = function(_mid) {
            var _mie = null,
                _mif = new _mic.SlotItemEffectModel(),
                _mig = false,
                _mih = new _mic.SlotItemEffectModel(),
                _mii = _mid.get_slotnums(142) + _mid.get_slotnums(460);
            if (37 == _mid.ctype && (_mih.houg += 1, _mih.kaih += 1, _mih.houm += 1, _mii >= 1 && (_mif.kaih += 1, _mif.houm += 1), _mig = true), 0 == _mig) return _mif;
            var _mij = _mid.get_slotnums(12);
            return _mif.add(_mih.multiply(_mij)), _mif;
        };
    },
    93373: (_mik, _mil, _mim) => {
        'use strict';
        var _min = null;
        defineModule(_mil);
        Object.defineProperty(_mil, '__esModule', {
            'value': true
        }), _mil.getSlot132PersonalEffect = void 0;
        var _mio = _mim(74496);
        _mil.getSlot132PersonalEffect = function(_mip) {
            var _miq = null,
                _mir = new _mio.SlotItemEffectModel(),
                _mis = _mip.get_each_level_nums(132),
                _mit = 0,
                _miu = 0,
                _miv = 0,
                _miw = 0,
                _mix = 0;
            return _mis.forEach(function(_miy, _miz) {
                _miz >= 3 && (_mit += _miy), _miz >= 5 && (_miu += _miy), _miz >= 7 && (_miv += _miy), _miz >= 8 && (_miw += _miy), _miz >= 9 && (_mix += _miy);
            }), _mit >= 1 && (_mir.kaih += 1), _miu >= 1 && (_mir.tais += 1), _miv >= 1 && (_mir.kaih += 1), _miw >= 1 && (_mir.tais += 1), _mix >= 1 && (_mir.houm += 1), _mis[10] >= 1 && (_mir.tais += 1), 911 != _mip.ship_id && 916 != _mip.ship_id && 546 != _mip.ship_id || (_mir.kaih += 1), 461 != _mip.ship_id && 466 != _mip.ship_id && 462 != _mip.ship_id && 467 != _mip.ship_id && 156 != _mip.ship_id || (_mir.kaih += 2), _mir;
        };
    },
    88838: (_mj0, _mj1, _mj2) => {
        'use strict';
        var _mj3 = null;
        defineModule(_mj1);
        Object.defineProperty(_mj1, '__esModule', {
            'value': true
        }), _mj1.getSlot136PersonalEffect = void 0;
        var _mj4 = _mj2(74496);
        _mj1.getSlot136PersonalEffect = function(_mj5) {
            var _mj6 = null,
                _mj7 = new _mj4.SlotItemEffectModel(),
                _mj8 = 0;
            if (58 != _mj5.ctype && 61 != _mj5.ctype && 64 != _mj5.ctype && 68 != _mj5.ctype && 80 != _mj5.ctype && 92 != _mj5.ctype && 113 != _mj5.ctype && 124 != _mj5.ctype || (_mj7.souk += 2, _mj7.kaih += 1, _mj8 = 1), 879 == _mj5.ship_id && (_mj7.souk += 1, _mj7.kaih += 1), 0 == _mj8) return _mj7;
            var _mj9 = _mj5.get_each_level_nums(136),
                _mja = 0,
                _mjb = 0,
                _mjc = _mj9[10];
            return _mj8 > 0 && _mj9.forEach(function(_mjd, _mje) {
                _mje >= 3 && (_mja += _mjd), _mje >= 6 && (_mjb += _mjd);
            }), 1 == _mj8 && (_mja >= 1 && (_mj7.souk += 1 * _mja), _mjb >= 1 && (_mj7.souk += 1 * _mjb), _mjc >= 1 && (_mj7.souk += 1 * _mjc)), _mj7;
        };
    },
    17274: (_mjf, _mjg, _mjh) => {
        'use strict';
        var _mji = null;
        defineModule(_mjg);
        Object.defineProperty(_mjg, '__esModule', {
            'value': true
        }), _mjg.getSlot139PersonalEffect = void 0;
        var _mjj = _mjh(74496);
        _mjg.getSlot139PersonalEffect = function(_mjk) {
            var _mjl = null,
                _mjm = new _mjj.SlotItemEffectModel(),
                _mjn = false,
                _mjo = new _mjj.SlotItemEffectModel();
            if (662 != _mjk.ship_id && 663 != _mjk.ship_id && 668 != _mjk.ship_id || (_mjo.houg += 2, _mjo.tyku += 1, _mjn = true), 0 == _mjn) return _mjm;
            var _mjp = _mjk.get_slotnums(139);
            return _mjm.add(_mjo.multiply(_mjp)), _mjm;
        };
    },
    21713: (_mjq, _mjr, _mjs) => {
        'use strict';
        var _mjt = null;
        defineModule(_mjr);
        Object.defineProperty(_mjr, '__esModule', {
            'value': true
        }), _mjr.getSlot143PersonalEffect = void 0;
        var _mju = _mjs(74496);
        _mjr.getSlot143PersonalEffect = function(_mjv) {
            var _mjw = null,
                _mjx = new _mju.SlotItemEffectModel();
            return 'あかぎ' == _mjv.yomi ? _mjx.houg = 3 : 'かが' == _mjv.yomi || 'しょうかく' == _mjv.yomi ? _mjx.houg = 2 : ('ずいかく' == _mjv.yomi || 'りゅうじょう' == _mjv.yomi) && (_mjx.houg = 1), _mjx;
        };
    },
    59823: (_mjy, _mjz, _mk0) => {
        'use strict';
        var _mk1 = null;
        defineModule(_mjz);
        Object.defineProperty(_mjz, '__esModule', {
            'value': true
        }), _mjz.getSlot144PersonalEffect = void 0;
        var _mk2 = _mk0(74496);
        _mjz.getSlot144PersonalEffect = function(_mk3) {
            var _mk4 = null,
                _mk5 = new _mk2.SlotItemEffectModel();
            return 'あかぎ' == _mk3.yomi ? _mk5.houg = 3 : 'かが' == _mk3.yomi ? _mk5.houg = 2 : 'しょうかく' == _mk3.yomi ? (_mk5.houg = 2, 461 != _mk3.ship_id && 466 != _mk3.ship_id || (_mk5.houg += 2)) : 'ずいかく' == _mk3.yomi ? (_mk5.houg = 1, 462 != _mk3.ship_id && 467 != _mk3.ship_id || (_mk5.houg += 1)) : 'りゅうじょう' == _mk3.yomi && (_mk5.houg = 1), _mk5;
        };
    },
    57440: (_mk6, _mk7, _mk8) => {
        'use strict';
        var _mk9 = null;
        defineModule(_mk7);
        Object.defineProperty(_mk7, '__esModule', {
            'value': true
        }), _mk7.getSlot149PersonalEffect = void 0;
        var _mka = _mk8(74496);
        _mk7.getSlot149PersonalEffect = function(_mkb) {
            var _mkc = null,
                _mkd = new _mka.SlotItemEffectModel(),
                _mke = new _mka.SlotItemEffectModel(),
                _mkf = false;
            return 488 == _mkb.ship_id || 141 == _mkb.ship_id || 160 == _mkb.ship_id || 622 == _mkb.ship_id || 623 == _mkb.ship_id || 656 == _mkb.ship_id || 961 == _mkb.ship_id ? (_mke.tais = 1, _mke.kaih = 3, _mkf = true) : 624 == _mkb.ship_id ? (_mke.tais = 3, _mke.kaih = 5, _mkf = true) : 662 == _mkb.ship_id && (_mke.tais = 2, _mke.kaih = 4, _mkf = true), 54 == _mkb.ctype && (_mke.tais = 1, _mke.kaih = 2, _mkf = true), 0 == _mkf ? _mkd : _mkd = _mke.multiply(1);
        };
    },
    29493: (_mkg, _mkh, _mki) => {
        'use strict';
        var _mkj = null;
        defineModule(_mkh);
        Object.defineProperty(_mkh, '__esModule', {
            'value': true
        }), _mkh.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mkk = _mki(74496);
        _mkh.getSlot14inch45CaliberGunPersonalEffect = function(_mkl) {
            var _mkm = null,
                _mkn, _mko, _mkp, _mkq = new _mkk.SlotItemEffectModel(),
                _mkr = false,
                _mks = new _mkk.SlotItemEffectModel(),
                _mkt = {
                    507: 507,
                    508: 507
                },
                _mku = _mkl.get_slotnums(507),
                _mkv = _mkl.get_slotnums(508),
                _mkw = _mku + _mkv,
                _mkx = _mkl.getCountryName(),
                _mky = _mkl.getUSSWaterRaderDict();
            if (125 == _mkl.ctype && (_mks.houg += 1, _mks.kaih += 1, _mks.houm += 1, _mkr = true, _mku >= 1 && _mkv >= 1 && (_mkq.houg += 1, _mkq.houm += 1)), 'アメリカ' == _mkx && _mkl.stype >= 8 && _mkl.stype <= 10) {
                _mks.houg += 2, _mks.kaih += 1, _mks.houm += 1, _mkr = true;
                for (var _mkz = 0, _ml0 = 0, _ml1 = _mkl.have_slot_ids(); _ml0 < _ml1.length; _ml0++) {
                    var _ml2 = _ml1[_ml0];
                    _mky[Number(_ml2)] && (_mkz += _mkl.get_slotnums(parseInt(_ml2)));
                }
                _mkz >= 1 && (_mkq.houg += 1, _mkq.kaih += 1, _mkq.houm += 2), _mku >= 1 && _mkv >= 1 && (_mkq.houg += 1, _mkq.houm += 1, _mkq.kaih += 2);
            }
            else 6 != _mkl.ctype && 26 != _mkl.ctype && 2 != _mkl.ctype && 'イギリス' != _mkx || (_mkq.kaih += 1, _mkq.houm += 1, _mku >= 1 && _mkv >= 1 && (_mkq.houg += 1, _mkq.houm += 1, _mkq.kaih += 1));
            _mkr && _mkq.add(_mks.multiply(_mkw));
            for (var _ml3 = {}, _ml4 = {}, _ml5 = {}, _ml6 = function(_ml7) {
                    var _ml8 = null,
                        _ml9 = Number(_ml7),
                        _mla = _mkt[_ml9];
                    _ml3[_mla] = null !== (_mkn = _ml3[_mla]) && void 0 !== _mkn ? _mkn : 0, _ml4[_mla] = null !== (_mko = _ml4[_mla]) && void 0 !== _mko ? _mko : 0, _ml5[_mla] = null !== (_mkp = _ml5[_mla]) && void 0 !== _mkp ? _mkp : 0, _mkl.get_each_level_nums(_ml9).forEach(function(_mlb, _mlc) {
                        _mlc >= 3 && (_ml3[_mla] += _mlb), _mlc >= 6 && (_ml4[_mla] += _mlb), _mlc >= 9 && (_ml5[_mla] += _mlb);
                    });
                }, _mld = 0, _mle = Object.keys(_mkt); _mld < _mle.length; _mld++) {
                _ml6(_mle[_mld]);
            }
            return _ml3[507] >= 1 && (_mkq.houg += 1 * _ml3[507]), _ml4[507] >= 1 && (_mkq.souk += 1 * _ml4[507]), _ml5[507] >= 1 && (_mkq.houm += 1 * _ml5[507]), _mkq;
        };
    },
    66985: (_mlf, _mlg, _mlh) => {
        'use strict';
        var _mli = null;
        defineModule(_mlg);
        Object.defineProperty(_mlg, '__esModule', {
            'value': true
        }), _mlg.getSlot15PersonalEffect = void 0;
        var _mlj = _mlh(74496);
        _mlg.getSlot15PersonalEffect = function(_mlk) {
            var _mll = null,
                _mlm = new _mlj.SlotItemEffectModel(),
                _mln = false;
            if ((566 == _mlk.ship_id || 567 == _mlk.ship_id || 568 == _mlk.ship_id || 648 == _mlk.ship_id || 651 == _mlk.ship_id || 656 == _mlk.ship_id || 670 == _mlk.ship_id || 915 == _mlk.ship_id || 951 == _mlk.ship_id || 'たけ' == _mlk.yomi) && (_mln = true), 0 == _mln) return _mlm;
            var _mlo = _mlk.get_slotnums(15);
            return 30 == _mlk.ctype && (1 == _mlo ? _mlm.raig = 2 : _mlo >= 2 && (_mlm.raig = 4)), 'たけ' == _mlk.yomi && (_mlm.raig += 5, _mlm.kaih += 1), _mlm;
        };
    },
    79086: (_mlp, _mlq, _mlr) => {
        'use strict';
        var _mls = null;
        defineModule(_mlq);
        Object.defineProperty(_mlq, '__esModule', {
            'value': true
        }), _mlq.getSlot165_216PersonalEffect = void 0;
        var _mlt = _mlr(74496);
        _mlq.getSlot165_216PersonalEffect = function(_mlu) {
            var _mlv = null,
                _mlw = new _mlt.SlotItemEffectModel();
            return 501 != _mlu.ship_id && 506 != _mlu.ship_id && 502 != _mlu.ship_id && 507 != _mlu.ship_id || (_mlw.tyku += 2, _mlw.kaih += 2), _mlw;
        };
    },
    88102: (_mlx, _mly, _mlz) => {
        'use strict';
        var _mm0 = null;
        defineModule(_mly);
        Object.defineProperty(_mly, '__esModule', {
            'value': true
        }), _mly.getSlot16M1PersonalEffect = void 0;
        var _mm1 = _mlz(74496);
        _mly.getSlot16M1PersonalEffect = function(_mm2) {
            var _mm3 = null,
                _mm4 = new _mm1.SlotItemEffectModel(),
                _mm5 = new _mm1.SlotItemEffectModel();
            67 == _mm2.ctype || 78 == _mm2.ctype || 82 == _mm2.ctype || 88 == _mm2.ctype || 108 == _mm2.ctype || 112 == _mm2.ctype ? (_mm5.houg += 2, _mm5.souk += 1, 67 == _mm2.ctype && (_mm5.kaih -= 2)) : 149 == _mm2.ship_id || 150 == _mm2.ship_id || 151 == _mm2.ship_id || 152 == _mm2.ship_id ? (_mm5.houg += 1, _mm5.souk += 1, _mm5.kaih -= 3) : 591 == _mm2.ship_id || 592 == _mm2.ship_id ? (_mm5.houg += 2, _mm5.souk += 1, _mm5.kaih -= 2) : 593 != _mm2.ship_id && 954 != _mm2.ship_id || (_mm5.houg += 1, _mm5.souk += 1, _mm5.kaih -= 1);
            var _mm6 = true;
            if (_mm5.exists() || (_mm6 = false), 0 == _mm6) return _mm4;
            var _mm7 = _mm2.get_slotnums(298) + _mm2.get_slotnums(299) + _mm2.get_slotnums(300);
            return _mm4 = _mm5.multiply(_mm7);
        };
    },
    29240: (_mm8, _mm9, _mma) => {
        'use strict';
        var _mmb = null;
        defineModule(_mm9);
        Object.defineProperty(_mm9, '__esModule', {
            'value': true
        }), _mm9.getSlot171PersonalEffect = void 0;
        var _mmc = _mma(74496);
        _mm9.getSlot171PersonalEffect = function(_mmd) {
            var _mme = null,
                _mmf = new _mmc.SlotItemEffectModel(),
                _mmg = 0;
            'アメリカ' == _mmd.getCountryName() && (_mmg = 1), 65 != _mmd.ctype && 93 != _mmd.ctype && 102 != _mmd.ctype && 107 != _mmd.ctype && 125 != _mmd.ctype || (_mmf.houg += 1, _mmf.saku += 1, _mmg = 2);
            var _mmh = _mmd.get_each_level_nums(171),
                _mmi = 0,
                _mmj = 0,
                _mmk = 0;
            return _mmg > 0 && (_mmh.map(function(_mml, _mmm) {
                _mmm >= 5 && (_mmi += _mml), _mmm >= 3 && (_mmj += _mml), _mmm >= 8 && (_mmk += _mml);
            }), 1 != _mmg && 2 != _mmg || (_mmh[10] > 0 && (_mmf.houg += 1), _mmi > 0 && (_mmf.kaih += 1)), 2 == _mmg && (_mmj > 0 && (_mmf.saku += 1), _mmk > 0 && (_mmf.saku += 1))), _mmf;
        };
    },
    40885: (_mmn, _mmo, _mmp) => {
        'use strict';
        var _mmq = null;
        defineModule(_mmo);
        Object.defineProperty(_mmo, '__esModule', {
            'value': true
        }), _mmo.getSlot174PersonalEffect = void 0;
        var _mmr = _mmp(74496);
        _mmo.getSlot174PersonalEffect = function(_mms) {
            var _mmt = null,
                _mmu = new _mmr.SlotItemEffectModel(),
                _mmv = new _mmr.SlotItemEffectModel();
            if (66 == _mms.ctype && (_mmv.raig = 1, _mmv.kaih = 2), 591 == _mms.ship_id || 592 == _mms.ship_id || 954 == _mms.ship_id ? (_mmv.raig += 6, _mmv.kaih += 3) : 593 == _mms.ship_id ? (_mmv.raig += 5, _mmv.kaih += 2) : 488 != _mms.ship_id && 622 != _mms.ship_id && 623 != _mms.ship_id && 624 != _mms.ship_id || (_mmv.houg += 2, _mmv.raig += 4, _mmv.kaih += 4), !_mmv.exists()) return _mmu;
            var _mmw = _mms.get_slotnums(174);
            return _mmu = _mmv.multiply(_mmw);
        };
    },
    19614: (_mmx, _mmy, _mmz) => {
        'use strict';
        var _mn0 = null;
        defineModule(_mmy);
        Object.defineProperty(_mmy, '__esModule', {
            'value': true
        }), _mmy.getSlot179PersonalEffect = void 0;
        var _mn1 = _mmz(74496);
        _mmy.getSlot179PersonalEffect = function(_mn2) {
            var _mn3 = null,
                _mn4 = new _mn1.SlotItemEffectModel(),
                _mn5 = new _mn1.SlotItemEffectModel();
            if (54 == _mn2.ctype && (_mn5.raig = 1), !_mn5.exists()) return _mn4;
            var _mn6 = _mn2.get_slotnums(179);
            return _mn4 = _mn5.multiply(_mn6);
        };
    },
    87220: (_mn7, _mn8, _mn9) => {
        'use strict';
        var _mna = null;
        defineModule(_mn8);
        Object.defineProperty(_mn8, '__esModule', {
            'value': true
        }), _mn8.getSlot184PersonalEffect = void 0;
        var _mnb = _mn9(74496);
        _mn8.getSlot184PersonalEffect = function(_mnc) {
            var _mnd = null,
                _mne = new _mnb.SlotItemEffectModel(),
                _mnf = new _mnb.SlotItemEffectModel();
            if (68 == _mnc.ctype && (_mnf.houg += 1, _mnf.tyku += 2, _mnf.kaih += 3), !_mnf.exists()) return _mne;
            var _mng = _mnc.get_slotnums(184);
            return _mne = _mnf.multiply(_mng);
        };
    },
    81367: (_mnh, _mni, _mnj) => {
        'use strict';
        var _mnk = null;
        defineModule(_mni);
        Object.defineProperty(_mni, '__esModule', {
            'value': true
        }), _mni.getSlot188PersonalEffect = void 0;
        var _mnl = _mnj(74496);
        _mni.getSlot188PersonalEffect = function(_mnm) {
            var _mnn = null,
                _mno = new _mnl.SlotItemEffectModel(),
                _mnp = new _mnl.SlotItemEffectModel();
            if (68 == _mnm.ctype && (_mnp.houg += 3, _mnp.tyku += 1, _mnp.kaih += 1), !_mnp.exists()) return _mno;
            var _mnq = _mnm.get_slotnums(188);
            return _mno = _mnp.multiply(_mnq);
        };
    },
    13052: (_mnr, _mns, _mnt) => {
        'use strict';
        var _mnu = null;
        defineModule(_mns);
        Object.defineProperty(_mns, '__esModule', {
            'value': true
        }), _mns.getSlot189PersonalEffect = void 0;
        var _mnv = _mnt(74496);
        _mns.getSlot189PersonalEffect = function(_mnw) {
            var _mnx = null,
                _mny = new _mnv.SlotItemEffectModel(),
                _mnz = new _mnv.SlotItemEffectModel();
            if (68 != _mnw.ctype && 63 != _mnw.ctype || (_mnz.tyku += 1, _mnz.kaih += 2), !_mnz.exists()) return _mny;
            var _mo0 = _mnw.get_slotnums(189);
            return _mny = _mnz.multiply(_mo0);
        };
    },
    66904: (_mo1, _mo2, _mo3) => {
        'use strict';
        var _mo4 = null;
        defineModule(_mo2);
        Object.defineProperty(_mo2, '__esModule', {
            'value': true
        }), _mo2.getSlot18_52_PersonalEffect = void 0;
        var _mo5 = _mo3(74496);
        _mo2.getSlot18_52_PersonalEffect = function(_mo6) {
            var _mo7 = null,
                _mo8 = new _mo5.SlotItemEffectModel(),
                _mo9 = new _mo5.SlotItemEffectModel();
            if (277 == _mo6.ship_id || 278 == _mo6.ship_id || 156 == _mo6.ship_id ? _mo9.houg = 1 : 594 == _mo6.ship_id || 698 == _mo6.ship_id || 646 == _mo6.ship_id ? (_mo9.houg = 1, _mo9.kaih = 1) : 599 != _mo6.ship_id && 610 != _mo6.ship_id || (_mo9.houg = 2, _mo9.kaih = 1), !_mo9.exists()) return _mo8;
            var _moa = _mo6.get_slotnums(18) + _mo6.get_slotnums(52);
            return _mo8 = _mo9.multiply(_moa);
        };
    },
    94968: (_mob, _moc, _mod) => {
        'use strict';
        var _moe = null;
        defineModule(_moc);
        Object.defineProperty(_moc, '__esModule', {
            'value': true
        }), _moc.getSlot194PersonalEffect = void 0;
        var _mof = _mod(74496);
        _moc.getSlot194PersonalEffect = function(_mog) {
            var _moh = null,
                _moi = new _mof.SlotItemEffectModel(),
                _moj = new _mof.SlotItemEffectModel();
            if (70 == _mog.ctype ? (_moj.houg += 3, _moj.kaih += 2, _moj.saku += 2) : 72 != _mog.ctype && 62 != _mog.ctype || (_moj.kaih += 1, _moj.saku += 2), 392 == _mog.ship_id && (_moj.houg += 1, _moj.kaih += 2, _moj.saku += 2), !_moj.exists()) return _moi;
            var _mok = _mog.get_slotnums(194);
            return _moi = _moj.multiply(_mok);
        };
    },
    94781: (_mol, _mom, _mon) => {
        'use strict';
        var _moo = null;
        defineModule(_mom);
        Object.defineProperty(_mom, '__esModule', {
            'value': true
        }), _mom.getSlot195PersonalEffect = void 0;
        var _mop = _mon(74496);
        _mom.getSlot195PersonalEffect = function(_moq) {
            var _mor = null,
                _mos = new _mop.SlotItemEffectModel(),
                _mot = false,
                _mou = new _mop.SlotItemEffectModel();
            if ('アメリカ' == _moq.getCountryName() && (_mou.houg += 1, _mot = true), 0 == _mot) return _mos;
            var _mov = _moq.get_slotnums(195);
            return _mos.add(_mou.multiply(_mov));
        };
    },
    98137: (_mow, _mox, _moy) => {
        'use strict';
        var _moz = null;
        defineModule(_mox);
        Object.defineProperty(_mox, '__esModule', {
            'value': true
        }), _mox.getSlot19PersonalEffect = void 0;
        var _mp0 = _moy(74496);
        _mox.getSlot19PersonalEffect = function(_mp1) {
            var _mp2 = null,
                _mp3 = new _mp0.SlotItemEffectModel(),
                _mp4 = new _mp0.SlotItemEffectModel();
            if ('ほうしょう' == _mp1.yomi && (_mp4.houg = 2, _mp4.kaih = 2, _mp4.tais = 2, _mp4.tyku = 2), 75 != _mp1.ctype && 76 != _mp1.ctype || (_mp4.houg = 2, _mp4.tais = 3), 7 == _mp1.stype && (_mp4.tyku += 1, _mp4.kaih += 1), 894 != _mp1.ship_id && 899 != _mp1.ship_id || (_mp4.houg += 1, _mp4.kaih += 1, _mp4.tais += 1, _mp4.tyku += 1), !_mp4.exists()) return _mp3;
            var _mp5 = _mp1.get_slotnums(19);
            return _mp3 = _mp4.multiply(_mp5);
        };
    },
    48658: (_mp6, _mp7, _mp8) => {
        'use strict';
        var _mp9 = null;
        defineModule(_mp7);
        Object.defineProperty(_mp7, '__esModule', {
            'value': true
        }), _mp7.getSlot204PersonalEffect = void 0;
        var _mpa = _mp8(74496);
        _mp7.getSlot204PersonalEffect = function(_mpb) {
            var _mpc = null,
                _mpd = new _mpa.SlotItemEffectModel();
            if (591 != _mpb.ship_id && 592 != _mpb.ship_id && 593 != _mpb.ship_id && 954 != _mpb.ship_id) return _mpd;
            _mpd.souk = _mpd.souk + 1, _mpd.raig = _mpd.raig + 1;
            for (var _mpe = _mpb.get_each_level_nums(204), _mpf = 0, _mpg = 0; _mpg <= 10; _mpg++) _mpg >= 7 && (_mpf += _mpe[_mpg]);
            return _mpf > 0 && (_mpd.souk = _mpd.souk + 1), _mpe[10] > 0 && (_mpd.raig = _mpd.raig + 1), _mpd;
        };
    },
    2306: (_mph, _mpi, _mpj) => {
        'use strict';
        var _mpk = null;
        defineModule(_mpi);
        Object.defineProperty(_mpi, '__esModule', {
            'value': true
        }), _mpi.getSlot217PersonalEffect = void 0;
        var _mpl = _mpj(74496);
        _mpi.getSlot217PersonalEffect = function(_mpm) {
            var _mpn = null,
                _mpo = new _mpl.SlotItemEffectModel(),
                _mpp = false,
                _mpq = new _mpl.SlotItemEffectModel();
            if (501 == _mpm.ship_id || 506 == _mpm.ship_id ? (_mpq.houg += 1, _mpq.kaih += 3, _mpq.tyku += 5, _mpp = true) : 502 != _mpm.ship_id && 507 != _mpm.ship_id || (_mpq.houg += 1, _mpq.kaih += 2, _mpq.tyku += 4, _mpp = true), 0 == _mpp) return _mpo;
            var _mpr = _mpm.get_slotnums(217);
            return _mpo.add(_mpq.multiply(_mpr)), _mpo;
        };
    },
    91302: function(_mps, _mpt, _mpu) {
        'use strict';
        var _mpv = null;
        var _mpw = this && this.__importDefault || function(_mpx) {
            var _mpy = null;
            return _mpx && _mpx.__esModule ? _mpx : {
                'default': _mpx
            };
        };
        defineModule(_mpt);
        Object.defineProperty(_mpt, '__esModule', {
            'value': true
        }), _mpt.getSlot220PersonalEffect = void 0;
        var _mpz = _mpu(74496),
            _mq0 = _mpw(_mpu(18622));
        _mpt.getSlot220PersonalEffect = function(_mq1) {
            var _mq2 = null,
                _mq3 = new _mpz.SlotItemEffectModel(),
                _mq4 = false,
                _mq5 = new _mpz.SlotItemEffectModel(),
                _mq6 = 0,
                _mq7 = 0;
            if (662 == _mq1.ship_id || 663 == _mq1.ship_id || 668 == _mq1.ship_id || 501 == _mq1.ship_id || 506 == _mq1.ship_id || 502 == _mq1.ship_id || 507 == _mq1.ship_id ? (_mq5.houg += 1, _mq5.tyku += 3, _mq5.kaih += 2, _mq4 = true, _mq6 = 1) : 894 != _mq1.ship_id && 899 != _mq1.ship_id || (_mq5.tyku += 2, _mq5.kaih += 2, _mq4 = true, _mq6 = 1, _mq7 = 1), 0 == _mq4) return _mq3;
            var _mq8 = _mq1.get_slotnums(220);
            _mq3.add(_mq5.multiply(_mq8));
            for (var _mq9 = 0, _mqa = 0, _mqb = _mq1.have_slot_ids(); _mqa < _mqb.length; _mqa++) {
                var _mqc = _mqb[_mqa],
                    _mqd = _mq0.default.model.slot.getMst(_mqc),
                    _mqe = _mqd.equipType;
                12 != _mqe && 13 != _mqe || (_mqd.sakuteki >= 5 && _mq1.get_slotnums(parseInt(_mqc)), _mqd.taiku >= 2 && (_mq9 += _mq1.get_slotnums(parseInt(_mqc))));
            }
            if (_mq9 >= 1 && 1 == _mq6 && (_mq3.tyku += 3, _mq3.kaih += 3), 0 == _mq7) return _mq3;
            var _mqf = _mq1.get_each_level_nums(220)[10];
            return 1 == _mq7 && _mqf > 0 && (_mq3.houg += 1 * _mqf, _mq3.tyku += 1 * _mqf, _mq3.kaih += 1 * _mqf), _mq3;
        };
    },
    20418: (_mqg, _mqh, _mqi) => {
        'use strict';
        var _mqj = null;
        defineModule(_mqh);
        Object.defineProperty(_mqh, '__esModule', {
            'value': true
        }), _mqh.getSlot227PersonalEffect = void 0;
        var _mqk = _mqi(74496);
        _mqh.getSlot227PersonalEffect = function(_mql) {
            var _mqm = null,
                _mqn = new _mqk.SlotItemEffectModel(),
                _mqo = _mql.get_each_level_nums(227),
                _mqp = 0;
            _mqo.forEach(function(_mqq, _mqr) {
                _mqr >= 8 && (_mqp += _mqq);
            }), _mqp >= 1 && (_mqn.tais += 1 * _mqp);
            var _mqs = _mqo[10];
            return _mqs >= 1 && (_mqn.tais += 1 * _mqs), _mqn;
        };
    },
    1906: (_mqt, _mqu, _mqv) => {
        'use strict';
        var _mqw = null;
        defineModule(_mqu);
        Object.defineProperty(_mqu, '__esModule', {
            'value': true
        }), _mqu.getSlot228PersonalEffect = void 0;
        var _mqx = _mqv(74496);
        _mqu.getSlot228PersonalEffect = function(_mqy) {
            var _mqz = null,
                _mr0 = new _mqx.SlotItemEffectModel(),
                _mr1 = new _mqx.SlotItemEffectModel();
            if ('ほうしょう' == _mqy.yomi && (_mr1.houg = 3, _mr1.kaih = 4, _mr1.tais = 4, _mr1.tyku = 3), 75 != _mqy.ctype && 76 != _mqy.ctype || (_mr1.houg = 2, _mr1.tais = 5, _mr1.tyku = 1, _mr1.kaih = 1), 7 == _mqy.stype && (_mr1.tais += 2, _mr1.tyku += 1, _mr1.kaih += 1), 894 != _mqy.ship_id && 899 != _mqy.ship_id || (_mr1.houg += 1, _mr1.kaih += 2, _mr1.tais += 2, _mr1.tyku += 1), !_mr1.exists()) return _mr0;
            var _mr2 = _mqy.get_slotnums(228);
            return _mr0 = _mr1.multiply(_mr2);
        };
    },
    61887: function(_mr3, _mr4, _mr5) {
        'use strict';
        var _mr6 = null;
        var _mr7 = this && this.__importDefault || function(_mr8) {
            var _mr9 = null;
            return _mr8 && _mr8.__esModule ? _mr8 : {
                'default': _mr8
            };
        };
        defineModule(_mr4);
        Object.defineProperty(_mr4, '__esModule', {
            'value': true
        }), _mr4.getSlot229PersonalEffect = void 0;
        var _mra = _mr5(74496),
            _mrb = _mr7(_mr5(18622));
        _mr4.getSlot229PersonalEffect = function(_mrc) {
            var _mrd = null;
            for (var _mre = new _mra.SlotItemEffectModel(), _mrf = 0, _mrg = 0, _mrh = _mrc.have_slots_dict[229]; _mrg < _mrh.length; _mrg++) {
                _mrh[_mrg].level >= 7 && _mrf++;
            }
            var _mri = _mrf,
                _mrj = 0,
                _mrk = 0,
                _mrl = 0,
                _mrm = _mrc.get_slotnums(229);
            if (622 == _mrc.ship_id || 623 == _mrc.ship_id || 624 == _mrc.ship_id) _mre.houg += 1 * _mrm, _mre.tyku += 1 * _mrm, _mrj = 2;
            else {
                if (656 == _mrc.ship_id) _mre.houg += 2 * _mrm, _mre.tyku += 3 * _mrm, _mre.tais += 2 * _mrm, _mrj = 3;
                else {
                    if (0 == _mrf) return _mre;
                }
            }
            if (488 == _mrc.ship_id ? (_mre.tyku += 3 * _mri, _mrj = 1) : 220 == _mrc.ship_id ? _mre.tyku += 2 * _mri : 23 == _mrc.ship_id ? _mre.tyku += 1 * _mri : 160 == _mrc.ship_id ? (_mre.tyku += 2 * _mri, _mrj = 1) : 224 == _mrc.ship_id ? _mre.tyku += 1 * _mri : 487 == _mrc.ship_id ? (_mre.tyku += 2 * _mri, _mrj = 1) : 289 == _mrc.ship_id && (_mre.tyku += 1 * _mri), (66 == _mrc.ctype || 28 == _mrc.ctype) && (_mre.houg += 1 * _mri, _mre.tyku += 1 * _mri, _mrk = 1), 1 == _mrc.stype && (_mre.houg += 1 * _mri, _mre.tyku += 1 * _mri, _mrl = 1), ('ゆら' == _mrc.yomi || 'なか' == _mrc.yomi || 'きぬ' == _mrc.yomi) && (_mre.houg += 2 * _mri), 0 == _mrj + _mrk + _mrl) return _mre;
            for (var _mrn = 0, _mro = 0, _mrp = 0, _mrq = _mrc.have_slot_ids(); _mrp < _mrq.length; _mrp++) {
                var _mrr = _mrq[_mrp],
                    _mrs = _mrb.default.model.slot.getMst(_mrr),
                    _mrt = _mrs.equipType;
                12 != _mrt && 13 != _mrt || (_mrs.sakuteki >= 5 && (_mrn += _mrc.get_slotnums(parseInt(_mrr))), _mrs.taiku >= 2 && (_mro += _mrc.get_slotnums(parseInt(_mrr))));
            }
            return 1 == _mrj ? _mrn > 0 && (_mre.houg += 3, _mre.kaih += 2) : 2 == _mrj ? (_mrn > 0 && (_mre.houg += 1, _mre.kaih += 1), _mro > 0 && (_mre.tyku += 2, _mre.kaih += 2)) : 3 == _mrj && (_mrn > 0 && (_mre.houg += 2, _mre.kaih += 2), _mro > 0 && (_mre.tyku += 3, _mre.kaih += 2)), 1 == _mrk && _mrn > 0 && (_mre.houg += 2, _mre.kaih += 3), 1 == _mrl && _mrn > 0 && (_mre.houg += 1, _mre.kaih += 4), _mre;
        };
    },
    55734: (_mru, _mrv, _mrw) => {
        'use strict';
        var _mrx = null;
        defineModule(_mrv);
        Object.defineProperty(_mrv, '__esModule', {
            'value': true
        }), _mrv.getSlot234PersonalEffect = void 0;
        var _mry = _mrw(74496);
        _mrv.getSlot234PersonalEffect = function(_mrz) {
            var _ms0 = null,
                _ms1 = new _mry.SlotItemEffectModel(),
                _ms2 = false,
                _ms3 = new _mry.SlotItemEffectModel(),
                _ms4 = _mrz.get_slotnums(142) + _mrz.get_slotnums(460);
            if (37 == _mrz.ctype && (_ms3.houg += 1, _ms3.tyku += 1, _ms3.kaih += 1, _ms3.houm += 1, _ms4 >= 1 && (_ms1.tyku += 1, _ms1.kaih += 1, _ms1.houm += 1), _ms2 = true), 0 == _ms2) return _ms1;
            var _ms5 = _mrz.get_slotnums(234);
            return _ms1.add(_ms3.multiply(_ms5)), _ms1;
        };
    },
    17562: function(_ms6, _ms7, _ms8) {
        'use strict';
        var _ms9 = null;
        var _msa = this && this.__importDefault || function(_msb) {
            var _msc = null;
            return _msb && _msb.__esModule ? _msb : {
                'default': _msb
            };
        };
        defineModule(_ms7);
        Object.defineProperty(_ms7, '__esModule', {
            'value': true
        }), _ms7.getSlot235PersonalEffect = void 0;
        var _msd = _ms8(74496),
            _mse = _msa(_ms8(18622));
        _ms7.getSlot235PersonalEffect = function(_msf) {
            var _msg = null,
                _msh = new _msd.SlotItemEffectModel(),
                _msi = false,
                _msj = new _msd.SlotItemEffectModel(),
                _msk = 0;
            if (52 != _msf.ctype && 9 != _msf.ctype || (_msj.houg += 2, _msj.tyku += 1, _msi = true), 321 == _msf.ship_id && (_msj.houg += 1, _msj.kaih += 1, _msk = 1), 0 == _msi) return _msh;
            var _msl = _msf.get_slotnums(235);
            if (_msh.add(_msj.multiply(_msl)), 0 == _msk) return _msh;
            for (var _msm = 0, _msn = 0, _mso = 0, _msp = _msf.have_slot_ids(); _mso < _msp.length; _mso++) {
                var _msq = _msp[_mso],
                    _msr = _mse.default.model.slot.getMst(_msq),
                    _mss = _msr.equipType;
                12 != _mss && 13 != _mss || (_msr.sakuteki >= 5 && (_msm += _msf.get_slotnums(parseInt(_msq))), _msr.taiku >= 2 && (_msn += _msf.get_slotnums(parseInt(_msq))));
            }
            return _msm >= 1 && 1 == _msk && (_msh.houg += 3, _msh.kaih += 2), _msn >= 1 && 1 == _msk && (_msh.tyku += 3, _msh.kaih += 3), _msh;
        };
    },
    47970: (_mst, _msu, _msv) => {
        'use strict';
        var _msw = null;
        defineModule(_msu);
        Object.defineProperty(_msu, '__esModule', {
            'value': true
        }), _msu.getSlot237PersonalEffect = void 0;
        var _msx = _msv(74496);
        _msu.getSlot237PersonalEffect = function(_msy) {
            var _msz = null,
                _mt0 = new _msx.SlotItemEffectModel(),
                _mt1 = new _msx.SlotItemEffectModel();
            if (553 == _msy.ship_id) _mt1.houg = 4, _mt1.kaih = 2;
            else {
                if (82 == _msy.ship_id) _mt1.houg = 3, _mt1.kaih = 1;
                else {
                    if (88 == _msy.ship_id) _mt1.houg = 3, _mt1.kaih = 1;
                    else {
                        if (554 == _msy.ship_id) _mt1.houg = 4, _mt1.kaih = 2;
                        else {
                            if (411 == _msy.ship_id) _mt1.houg = 2;
                            else {
                                if (412 != _msy.ship_id) return _mt0;
                                _mt1.houg = 2;
                            }
                        }
                    }
                }
            }
            var _mt2 = _msy.get_slotnums(237);
            return _mt0 = _mt1.multiply(_mt2);
        };
    },
    14386: (_mt3, _mt4, _mt5) => {
        'use strict';
        var _mt6 = null;
        defineModule(_mt4);
        Object.defineProperty(_mt4, '__esModule', {
            'value': true
        }), _mt4.getSlot238_239PersonalEffect = void 0;
        var _mt7 = _mt5(74496);
        _mt4.getSlot238_239PersonalEffect = function(_mt8) {
            var _mt9 = null,
                _mta = new _mt7.SlotItemEffectModel();
            return 501 != _mt8.ship_id && 506 != _mt8.ship_id && 502 != _mt8.ship_id && 507 != _mt8.ship_id || (_mta.kaih += 1, _mta.raig += 1), _mta;
        };
    },
    82229: (_mtb, _mtc, _mtd) => {
        'use strict';
        var _mte = null;
        defineModule(_mtc);
        Object.defineProperty(_mtc, '__esModule', {
            'value': true
        }), _mtc.getSlot242PersonalEffect = void 0;
        var _mtf = _mtd(74496);
        _mtc.getSlot242PersonalEffect = function(_mtg) {
            var _mth = null,
                _mti = new _mtf.SlotItemEffectModel(),
                _mtj = false,
                _mtk = new _mtf.SlotItemEffectModel();
            if (78 == _mtg.ctype && (_mtk.houg += 2, _mtk.kaih += 1, _mtj = true), 'ほうしょう' == _mtg.yomi && (_mtk.houg += 1, _mtj = true), 0 == _mtj) return _mti;
            var _mtl = _mtg.get_slotnums(242);
            return _mti.add(_mtk.multiply(_mtl)), _mti;
        };
    },
    10325: (_mtm, _mtn, _mto) => {
        'use strict';
        var _mtp = null;
        defineModule(_mtn);
        Object.defineProperty(_mtn, '__esModule', {
            'value': true
        }), _mtn.getSlot243PersonalEffect = void 0;
        var _mtq = _mto(74496);
        _mtn.getSlot243PersonalEffect = function(_mtr) {
            var _mts = null,
                _mtt = new _mtq.SlotItemEffectModel(),
                _mtu = false,
                _mtv = new _mtq.SlotItemEffectModel();
            if (78 == _mtr.ctype && (_mtv.houg += 3, _mtv.kaih += 1, _mtu = true), 'ほうしょう' == _mtr.yomi && (_mtv.houg += 2, _mtu = true), 0 == _mtu) return _mtt;
            var _mtw = _mtr.get_slotnums(243);
            return _mtt.add(_mtv.multiply(_mtw)), _mtt;
        };
    },
    351: (_mtx, _mty, _mtz) => {
        'use strict';
        var _mu0 = null;
        defineModule(_mty);
        Object.defineProperty(_mty, '__esModule', {
            'value': true
        }), _mty.getSlot244PersonalEffect = void 0;
        var _mu1 = _mtz(74496);
        _mty.getSlot244PersonalEffect = function(_mu2) {
            var _mu3 = null,
                _mu4 = new _mu1.SlotItemEffectModel(),
                _mu5 = false,
                _mu6 = new _mu1.SlotItemEffectModel();
            if (78 == _mu2.ctype && (_mu6.houg += 4, _mu6.kaih += 2, _mu5 = true), 'ほうしょう' == _mu2.yomi && (_mu6.houg += 3, _mu5 = true), 0 == _mu5) return _mu4;
            var _mu7 = _mu2.get_slotnums(244);
            return _mu4.add(_mu6.multiply(_mu7)), _mu4;
        };
    },
    61977: (_mu8, _mu9, _mua) => {
        'use strict';
        var _mub = null;
        defineModule(_mu9);
        Object.defineProperty(_mu9, '__esModule', {
            'value': true
        }), _mu9.getSlot247PersonalEffect = void 0;
        var _muc = _mua(74496);
        _mu9.getSlot247PersonalEffect = function(_mud) {
            var _mue = null,
                _muf = new _muc.SlotItemEffectModel(),
                _mug = false,
                _muh = new _muc.SlotItemEffectModel(),
                _mui = 0;
            if ('フランス' == _mud.getCountryName() && (_muh.houg += 2, _muh.houm += 2, _mug = true, _mui = 1), 0 == _mug) return _muf;
            var _muj = _mud.get_slotnums(247);
            if (_muf.add(_muh.multiply(_muj)), 0 == _mui) return _muf;
            var _muk = _mud.get_each_level_nums(247),
                _mul = 0,
                _mum = 0;
            _mui > 0 && _muk.forEach(function(_mun, _muo) {
                _muo >= 4 && (_mul += _mun), _muo >= 8 && (_mum += _mun);
            });
            var _mup = _muk[10];
            return 1 == _mui && (_mul >= 1 && (_muf.houg += 1 * _mul, _muf.houm += 1 * _mul), _mum >= 1 && (_muf.kaih += 1 * _mum, _muf.houg += 1 * _mum, _muf.houm += 1 * _mum), _mup >= 1 && (_muf.kaih += 1 * _mup, _muf.houm += 1 * _mup)), _muf;
        };
    },
    31797: function(_muq, _mur, _mus) {
        'use strict';
        var _mut = null;
        var _muu = this && this.__importDefault || function(_muv) {
            var _muw = null;
            return _muv && _muv.__esModule ? _muv : {
                'default': _muv
            };
        };
        defineModule(_mur);
        Object.defineProperty(_mur, '__esModule', {
            'value': true
        }), _mur.getSlot266PersonalEffect2 = _mur.getSlot266PersonalEffect = void 0;
        var _mux = _mus(74496),
            _muy = _muu(_mus(18622));
        _mur.getSlot266PersonalEffect = function(_muz) {
            var _mv0 = null,
                _mv1 = new _mux.SlotItemEffectModel(),
                _mv2 = false;
            if (566 != _muz.ship_id && 567 != _muz.ship_id && 568 != _muz.ship_id && 656 != _muz.ship_id && 670 != _muz.ship_id && 915 != _muz.ship_id && 951 != _muz.ship_id || (_mv2 = true), 0 == _mv2) return _mv1;
            var _mv3 = _muz.get_slotnums(266);
            return 30 == _muz.ctype && (1 == _mv3 ? _mv1.houg = 1 : _mv3 >= 2 && (_mv1.houg = 3)), _mv1;
        }, _mur.getSlot266PersonalEffect2 = function(_mv4) {
            var _mv5 = null,
                _mv6 = new _mux.SlotItemEffectModel(),
                _mv7 = 0,
                _mv8 = new _mux.SlotItemEffectModel();
            if (23 == _mv4.ctype || 18 == _mv4.ctype ? (_mv8.houg = 1, _mv7 = 1) : 30 == _mv4.ctype && (_mv8.houg = 1, _mv7 = 2), ('しぐれ' == _mv4.yomi || 'ゆきかぜ' == _mv4.yomi || 'いそかぜ' == _mv4.yomi) && (_mv8.kaih = 1), 961 == _mv4.ship_id && (_mv8.houg += 1, _mv8.houm += 1, _mv8.kaih += 1), !_mv8.exists()) return _mv6;
            var _mv9 = _mv4.get_slotnums(266);
            if (_mv6 = _mv8.multiply(_mv9), 0 == _mv7) return _mv6;
            for (var _mva = 0, _mvb = 0, _mvc = _mv4.have_slot_ids(); _mvb < _mvc.length; _mvb++) {
                var _mvd = _mvc[_mvb],
                    _mve = _muy.default.model.slot.getMst(_mvd),
                    _mvf = _mve.equipType;
                (12 == _mvf || 13 == _mvf) && _mve.sakuteki >= 5 && (_mva += _mv4.get_slotnums(parseInt(_mvd)));
            }
            return _mva > 0 && (1 == _mv7 ? (_mv6.houg += 1, _mv6.kaih += 1, _mv6.raig += 3) : 2 == _mv7 && (_mv6.houg += 2, _mv6.kaih += 1, _mv6.raig += 3)), _mv6;
        };
    },
    45738: function(_mvg, _mvh, _mvi) {
        'use strict';
        var _mvj = null;
        var _mvk = this && this.__importDefault || function(_mvl) {
            var _mvm = null;
            return _mvl && _mvl.__esModule ? _mvl : {
                'default': _mvl
            };
        };
        defineModule(_mvh);
        Object.defineProperty(_mvh, '__esModule', {
            'value': true
        }), _mvh.getSlot267PersonalEffect2 = _mvh.getSlot267PersonalEffect = void 0;
        var _mvn = _mvi(74496),
            _mvo = _mvk(_mvi(18622));
        _mvh.getSlot267PersonalEffect = function(_mvp) {
            var _mvq = null,
                _mvr = new _mvn.SlotItemEffectModel(),
                _mvs = 0,
                _mvt = 0;
            if (38 == _mvp.ctype || 22 == _mvp.ctype) _mvs = 2, _mvt = 1;
            else {
                if (30 != _mvp.ctype) return _mvr;
                _mvs = 1, _mvt = 1;
            }
            var _mvu = _mvp.get_slotnums(267) + _mvp.get_slotnums(366);
            return _mvr.houg = _mvs * _mvu, _mvr.kaih = _mvt * _mvu, _mvr;
        }, _mvh.getSlot267PersonalEffect2 = function(_mvv) {
            var _mvw = null,
                _mvx = new _mvn.SlotItemEffectModel(),
                _mvy = _mvv.get_slotnums(267),
                _mvz = _mvv.get_slotnums(366),
                _mw0 = _mvy + _mvz;
            if (566 != _mvv.ship_id && 567 != _mvv.ship_id && 568 != _mvv.ship_id && 656 != _mvv.ship_id && 670 != _mvv.ship_id && 915 != _mvv.ship_id && 951 != _mvv.ship_id || (_mvy > 0 && (_mvx.houg += 1), 1 == _mvz ? (_mvx.houg += 1, _mvx.tyku += 2) : _mvz >= 2 && (_mvx.houg += 2, _mvx.tyku += 4)), 38 != _mvv.ctype && 229 != _mvv.ship_id && [648, 961].indexOf(_mvv.ship_id) < 0) return _mvx;
            var _mw1 = false,
                _mw2 = false,
                _mw3 = false,
                _mw4 = false,
                _mw5 = false,
                _mw6 = false,
                _mw7 = false,
                _mw8 = false,
                _mw9 = false,
                _mwa = false,
                _mwb = false,
                _mwc = 0,
                _mwd = 0,
                _mwe = 0;
            543 == _mvv.ship_id ? (_mvx.houg = 1 * _mw0, _mw2 = true) : 229 == _mvv.ship_id ? _mw3 = true : 542 == _mvv.ship_id ? (_mvx.houg = 1 * _mw0, _mw4 = true) : 563 == _mvv.ship_id ? (_mvx.houg = 1 * _mw0, _mw5 = true) : 564 == _mvv.ship_id ? (_mvx.houg = 1 * _mw0, _mw6 = true) : 578 == _mvv.ship_id ? (_mvx.houg = 1 * _mw0, _mw7 = true) : 569 == _mvv.ship_id ? (_mvx.houg = 1 * _mw0, _mw8 = true) : 649 == _mvv.ship_id ? (_mvx.houg = 2 * _mw0, _mwa = true) : 955 == _mvv.ship_id || 960 == _mvv.ship_id ? (_mvx.houg = 2 * _mw0, _mwb = true) : 648 == _mvv.ship_id ? (_mvx.houg = 2 * _mw0, _mw9 = true, _mwc = 1, _mwd = 1, _mwe = 1) : 961 == _mvv.ship_id && (_mvx.houg = 2 * _mw0, _mw1 = true, _mwc = 1, _mwd = 1, _mwe = 1);
            for (var _mwf = 0, _mwg = 0, _mwh = 0, _mwi = _mvv.have_slot_ids(); _mwh < _mwi.length; _mwh++) {
                var _mwj = _mwi[_mwh],
                    _mwk = _mvo.default.model.slot.getMst(_mwj),
                    _mwl = _mwk.equipType;
                12 != _mwl && 13 != _mwl || (_mwk.sakuteki >= 5 && (_mwf += _mvv.get_slotnums(parseInt(_mwj))), _mwk.taiku >= 2 && (_mwg += _mvv.get_slotnums(parseInt(_mwj))));
            }
            if (_mwf > 0 && _mvy > 0 && ((38 == _mvv.ctype || _mw9) && (_mvx.houg += 2, _mvx.raig += 3, _mvx.kaih += 1, 955 == _mvv.ship_id ? _mvx.raig -= 1 : 960 == _mvv.ship_id && (_mvx.raig -= 2)), (_mw4 || _mw2 || _mw3 || _mw5 || _mw6 || _mw7 || _mw8 || _mw9 || _mwa || _mwb) && (_mvx.houg += 1, _mvx.raig += 3, _mvx.kaih += 2)), _mvz > 0 && (_mw4 || _mw2 || _mw5 || _mw6 || _mw7 || _mw3 || _mw8 || _mw9 || _mwa || _mw1 || _mwb)) {
                1 == _mvz ? (_mvx.tyku += 3, _mvx.houg += 1, _mvx.houm += 1) : _mvz >= 2 && (_mvx.tyku += 5, _mvx.houg += 3, _mvx.houm += 1, 955 == _mvv.ship_id && (_mvx.houg += 1)), (_mw8 || _mw9) && (_mvx.houg += 1, _mvx.tyku += 2), _mwf > 0 && (_mvx.houg += 2, _mvx.kaih += 2, _mvx.raig += 4, _mvx.houm += 2, 960 == _mvv.ship_id && (_mvx.raig -= 1, _mvx.houg += 1)), _mwg > 0 && (_mvx.houg += 1, _mvx.kaih += 3, _mvx.tyku += 5, _mvx.houm += 1);
                var _mwm = _mvv.get_each_level_nums(366),
                    _mwn = 0,
                    _mwo = 0;
                _mwm.forEach(function(_mwp, _mwq) {
                    _mwq >= 5 && (_mwn += _mwp), _mwq >= 8 && (_mwo += _mwp);
                }), _mwn >= 1 && (_mvx.houm += 1 * _mwn), _mwo >= 1 && (_mvx.houg += 1 * _mwo);
                var _mwr = _mwm[10];
                _mwr >= 1 && (_mvx.houm += 1 * _mwr);
            }
            var _mws = _mvv.get_slotnums(129),
                _mwt = _mvv.get_slotnums(74),
                _mwu = _mvv.get_slotnums(412);
            return _mwc > 0 && _mws > 0 && 1 == _mwc && (_mvx.houg += 2, _mvx.kaih += 3, _mvx.tyku += 2), _mwe > 0 && _mwu > 0 && 1 == _mwe && (_mvx.houg += 2, _mvx.kaih += 3, _mvx.tyku += 2), _mwd > 0 && _mwt > 0 && 1 == _mwd && (_mvx.houg += 3, _mvx.kaih -= 3), _mvx;
        };
    },
    23934: (_mwv, _mww, _mwx) => {
        'use strict';
        var _mwy = null;
        defineModule(_mww);
        Object.defineProperty(_mww, '__esModule', {
            'value': true
        }), _mww.getSlot271PersonalEffect = void 0;
        var _mwz = _mwx(74496);
        _mww.getSlot271PersonalEffect = function(_mx0) {
            var _mx1 = null,
                _mx2 = new _mwz.SlotItemEffectModel(),
                _mx3 = 0;
            if (508 != _mx0.ship_id && 509 != _mx0.ship_id && 888 != _mx0.ship_id && 883 != _mx0.ship_id || (_mx3 = 1), 0 == _mx3) return _mx2;
            var _mx4 = _mx0.get_each_level_nums(271),
                _mx5 = 0,
                _mx6 = 0,
                _mx7 = 0,
                _mx8 = _mx4[10];
            return _mx3 > 0 && _mx4.forEach(function(_mx9, _mxa) {
                _mxa >= 4 && (_mx5 += _mx9), _mxa >= 6 && (_mx6 += _mx9), _mxa >= 8 && (_mx7 += _mx9);
            }), 1 == _mx3 && (_mx5 >= 1 && (_mx2.houg += 1 * _mx5), _mx6 >= 1 && (_mx2.tyku += 2 * _mx6), _mx7 >= 1 && (_mx2.kaih += 2 * _mx7), _mx8 >= 1 && (_mx2.houg += 1 * _mx8)), _mx2;
        };
    },
    17712: function(_mxb, _mxc, _mxd) {
        'use strict';
        var _mxe = null;
        var _mxf = this && this.__importDefault || function(_mxg) {
            var _mxh = null;
            return _mxg && _mxg.__esModule ? _mxg : {
                'default': _mxg
            };
        };
        defineModule(_mxc);
        Object.defineProperty(_mxc, '__esModule', {
            'value': true
        }), _mxc.getSlot275PersonalEffect = void 0;
        var _mxi = _mxd(74496),
            _mxj = _mxf(_mxd(18622));
        _mxc.getSlot275PersonalEffect = function(_mxk) {
            var _mxl = null,
                _mxm = new _mxi.SlotItemEffectModel(),
                _mxn = false,
                _mxo = new _mxi.SlotItemEffectModel(),
                _mxp = 0,
                _mxq = 0;
            if (894 != _mxk.ship_id && 899 != _mxk.ship_id || (_mxo.houg += 1, _mxo.tyku += 3, _mxo.kaih += 2, _mxn = true, _mxq = 1, _mxp = 1), 0 == _mxn) return _mxm;
            var _mxr = _mxk.get_slotnums(275);
            _mxm.add(_mxo.multiply(_mxr));
            var _mxs = 0;
            if (_mxp > 0)
                for (var _mxt = 0, _mxu = _mxk.have_slot_ids(); _mxt < _mxu.length; _mxt++) {
                    var _mxv = _mxu[_mxt],
                        _mxw = _mxj.default.model.slot.getMst(_mxv),
                        _mxx = _mxw.equipType;
                    12 != _mxx && 13 != _mxx || (_mxw.sakuteki >= 5 && _mxk.get_slotnums(parseInt(_mxv)), _mxw.taiku >= 2 && (_mxs += _mxk.get_slotnums(parseInt(_mxv))));
                }
            if (1 == _mxp && _mxs > 0 && (_mxm.tyku += 3, _mxm.kaih += 3), 0 == _mxq) return _mxm;
            var _mxy = _mxk.get_each_level_nums(275),
                _mxz = 0,
                _my0 = _mxy[10];
            return _mxq > 0 && _mxy.forEach(function(_my1, _my2) {
                _my2 >= 7 && (_mxz += _my1);
            }), 1 == _mxq && (_mxz > 0 && (_mxm.tyku += 1 * _mxz, _mxm.kaih += 1 * _mxz), _my0 > 0 && (_mxm.houg += 1 * _my0, _mxm.tyku += 1 * _my0, _mxm.houm += 1 * _my0)), _mxm;
        };
    },
    93733: (_my3, _my4, _my5) => {
        'use strict';
        var _my6 = null;
        defineModule(_my4);
        Object.defineProperty(_my4, '__esModule', {
            'value': true
        }), _my4.getSlot277PersonalEffect = void 0;
        var _my7 = _my5(74496);
        _my4.getSlot277PersonalEffect = function(_my8) {
            var _my9 = null,
                _mya = new _my7.SlotItemEffectModel(),
                _myb = false,
                _myc = new _my7.SlotItemEffectModel();
            if ('アメリカ' != _my8.getCountryName() && 67 != _my8.ctype && 78 != _my8.ctype && 82 != _my8.ctype && 88 != _my8.ctype && 108 != _my8.ctype && 112 != _my8.ctype || (_myc.houg += 1, _myc.kaih += 1, _myb = true), 83 == _my8.ctype && (_myc.houg += 1, _myc.kaih += 1, _myc.tyku += 1, _myb = true), 0 == _myb) return _mya;
            var _myd = _my8.get_slotnums(277);
            return _mya.add(_myc.multiply(_myd)), _mya;
        };
    },
    34718: (_mye, _myf, _myg) => {
        'use strict';
        var _myh = null;
        defineModule(_myf);
        Object.defineProperty(_myf, '__esModule', {
            'value': true
        }), _myf.getSlot278PersonalEffect = void 0;
        var _myi = _myg(74496);
        _myf.getSlot278PersonalEffect = function(_myj) {
            var _myk = null,
                _myl = new _myi.SlotItemEffectModel();
            return 'アメリカ' == _myj.getCountryName() ? (_myl.tyku += 1, _myl.kaih += 3, _myl.saku += 1) : 67 == _myj.ctype || 78 == _myj.ctype || 82 == _myj.ctype || 88 == _myj.ctype || 108 == _myj.ctype || 112 == _myj.ctype ? (_myl.tyku += 1, _myl.kaih += 2) : 96 == _myj.ctype && (_myl.tyku += 1, _myl.kaih += 1), _myl;
        };
    },
    69245: (_mym, _myn, _myo) => {
        'use strict';
        var _myp = null;
        defineModule(_myn);
        Object.defineProperty(_myn, '__esModule', {
            'value': true
        }), _myn.getSlot279PersonalEffect = void 0;
        var _myq = _myo(74496);
        _myn.getSlot279PersonalEffect = function(_myr) {
            var _mys = null,
                _myt = new _myq.SlotItemEffectModel();
            return 'アメリカ' == _myr.getCountryName() ? (_myt.houg += 2, _myt.tyku += 2, _myt.kaih += 3, _myt.saku += 2) : 67 == _myr.ctype || 78 == _myr.ctype || 82 == _myr.ctype || 88 == _myr.ctype || 108 == _myr.ctype || 112 == _myr.ctype ? (_myt.houg += 1, _myt.tyku += 1, _myt.kaih += 2, _myt.saku += 1) : 96 == _myr.ctype && (_myt.houg += 1, _myt.tyku += 1, _myt.kaih += 1), _myt;
        };
    },
    18478: (_myu, _myv, _myw) => {
        'use strict';
        var _myx = null;
        defineModule(_myv);
        Object.defineProperty(_myv, '__esModule', {
            'value': true
        }), _myv.getSlot282PersonalEffect = void 0;
        var _myy = _myw(74496);
        _myv.getSlot282PersonalEffect = function(_myz) {
            var _mz0 = null,
                _mz1 = new _myy.SlotItemEffectModel(),
                _mz2 = false,
                _mz3 = false;
            147 != _myz.ship_id && 73 != _myz.ctype && 81 != _myz.ctype || (_mz2 = true), 'ゆうばり' == _myz.yomi && (_mz3 = true);
            var _mz4 = new _myy.SlotItemEffectModel();
            if ((_mz2 || _mz3) && (_mz4.houg += 2, _mz4.souk += 1), !_mz4.exists()) return _mz1;
            var _mz5 = _myz.get_slotnums(282);
            return _mz1 = _mz4.multiply(_mz5);
        };
    },
    2899: (_mz6, _mz7, _mz8) => {
        'use strict';
        var _mz9 = null;
        defineModule(_mz7);
        Object.defineProperty(_mz7, '__esModule', {
            'value': true
        }), _mz7.getSlot283PersonalEffect = void 0;
        var _mza = _mz8(74496);
        _mz7.getSlot283PersonalEffect = function(_mzb) {
            var _mzc = null,
                _mzd = new _mza.SlotItemEffectModel(),
                _mze = false;
            147 != _mzb.ship_id && 73 != _mzb.ctype && 81 != _mzb.ctype || (_mze = true);
            var _mzf = new _mza.SlotItemEffectModel();
            if (_mze && (_mzf.raig += 3, _mzf.houg += 1, _mzf.souk += 1), !_mzf.exists()) return _mzd;
            var _mzg = _mzb.get_slotnums(283);
            return _mzd = _mzf.multiply(_mzg);
        };
    },
    57120: (_mzh, _mzi, _mzj) => {
        'use strict';
        var _mzk = null;
        defineModule(_mzi);
        Object.defineProperty(_mzi, '__esModule', {
            'value': true
        }), _mzi.getSlot285PersonalEffect = void 0;
        var _mzl = _mzj(74496);
        _mzi.getSlot285PersonalEffect = function(_mzm) {
            var _mzn = null,
                _mzo = new _mzl.SlotItemEffectModel(),
                _mzp = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_mzm.ship_id) >= 0 && (_mzp = true), 0 == _mzp) return _mzo;
            var _mzq = _mzm.get_each_level_nums(285),
                _mzr = _mzm.get_slotnums(285);
            _mzr > 2 && (_mzr = 2), _mzo.raig = 2 * _mzr, _mzo.kaih = 1 * _mzr;
            var _mzs = _mzq[10];
            1 == _mzs && (_mzo.houg += 1, _mzo.raig += 1), _mzs >= 2 && (_mzo.houg += 2, _mzo.raig += 1), _mzs >= 3 && (_mzo.raig += 3);
            var _mzt = _mzm.get_slotnums(285);
            return 903 == _mzm.ship_id ? (_mzt >= 2 && (_mzo.raig += 2), _mzt >= 3 && (_mzo.raig += 2)) : 908 != _mzm.ship_id && 959 != _mzm.ship_id || (_mzt >= 2 && (_mzo.raig += 1), _mzt >= 3 && (_mzo.raig += 1)), _mzo;
        };
    },
    74985: function(_mzu, _mzv, _mzw) {
        'use strict';
        var _mzx = null;
        var _mzy = this && this.__importDefault || function(_mzz) {
            var _n00 = null;
            return _mzz && _mzz.__esModule ? _mzz : {
                'default': _mzz
            };
        };
        defineModule(_mzv);
        Object.defineProperty(_mzv, '__esModule', {
            'value': true
        }), _mzv.getSlot286PersonalEffect3 = _mzv.getSlot286PersonalEffect2 = _mzv.getSlot286PersonalEffect = void 0;
        var _n01 = _mzw(74496),
            _n02 = _mzy(_mzw(18622));
        _mzv.getSlot286PersonalEffect = function(_n03) {
            var _n04 = null,
                _n05 = new _n01.SlotItemEffectModel(),
                _n06 = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960].indexOf(_n03.ship_id) >= 0 && (_n06 = true), 0 == _n06) return _n05;
            var _n07 = _n03.get_each_level_nums(286),
                _n08 = _n03.get_slotnums(286);
            _n08 > 2 && (_n08 = 2), _n05.raig = 2 * _n08, _n05.kaih = 1 * _n08;
            var _n09 = _n07[10];
            if (1 == _n09 ? _n05.houg = _n05.houg + 1 : _n09 >= 2 && (_n05.houg = _n05.houg + 2), 30 == _n03.ctype || 961 == _n03.ship_id) {
                var _n0a = _n07[5] + _n07[6] + _n07[7] + _n07[8] + _n07[9] + _n07[10];
                1 == _n0a ? _n05.raig = _n05.raig + 1 : _n0a >= 2 && (_n05.raig = _n05.raig + 2);
            }
            return _n05;
        }, _mzv.getSlot286PersonalEffect2 = function(_n0b) {
            var _n0c = null,
                _n0d = new _n01.SlotItemEffectModel(),
                _n0e = false,
                _n0f = 0;
            if ('たけ' == _n0b.yomi && (_n0e = true, _n0f = 1), 0 == _n0e) return _n0d;
            var _n0g = _n0b.get_each_level_nums(286),
                _n0h = 0;
            return _n0f > 0 && _n0g.forEach(function(_n0i, _n0j) {
                _n0j >= 7 && (_n0h += _n0i);
            }), 'たけ' == _n0b.yomi && (_n0d.raig += 7, _n0d.kaih += 2, _n0h >= 1 && (_n0d.raig += 2), _n0g[10] >= 1 && (_n0d.raig += 2)), _n0d;
        }, _mzv.getSlot286PersonalEffect3 = function(_n0k) {
            var _n0l = null,
                _n0m = new _n01.SlotItemEffectModel(),
                _n0n = false,
                _n0o = new _n01.SlotItemEffectModel(),
                _n0p = 0;
            if (662 != _n0k.ship_id && 663 != _n0k.ship_id && 668 != _n0k.ship_id || (_n0o.raig += 2, _n0n = true, _n0p = 1), 0 == _n0n) return _n0m;
            var _n0q = _n0k.get_slotnums(286);
            _n0m.add(_n0o.multiply(_n0q));
            for (var _n0r = 0, _n0s = 0, _n0t = _n0k.have_slot_ids(); _n0s < _n0t.length; _n0s++) {
                var _n0u = _n0t[_n0s],
                    _n0v = _n02.default.model.slot.getMst(_n0u),
                    _n0w = _n0v.equipType;
                12 != _n0w && 13 != _n0w || (_n0v.sakuteki >= 5 && (_n0r += _n0k.get_slotnums(parseInt(_n0u))), _n0v.taiku >= 2 && _n0k.get_slotnums(parseInt(_n0u)));
            }
            return _n0r >= 1 && 1 == _n0p && (_n0m.raig += 3, _n0m.kaih += 2), _n0m;
        };
    },
    9234: (_n0x, _n0y, _n0z) => {
        'use strict';
        var _n10 = null;
        defineModule(_n0y);
        Object.defineProperty(_n0y, '__esModule', {
            'value': true
        }), _n0y.getSlot287PersonalEffect = void 0;
        var _n11 = _n0z(74496);
        _n0y.getSlot287PersonalEffect = function(_n12) {
            var _n13 = null,
                _n14 = new _n11.SlotItemEffectModel(),
                _n15 = new _n11.SlotItemEffectModel(),
                _n16 = false;
            if (488 == _n12.ship_id || 141 == _n12.ship_id || 160 == _n12.ship_id || 624 == _n12.ship_id || 656 == _n12.ship_id ? (_n15.tais = 1, _n15.kaih = 1, _n16 = true) : 662 != _n12.ship_id && 961 != _n12.ship_id || (_n15.tais = 3, _n16 = true), 0 == _n16) return _n14;
            var _n17 = _n12.get_slotnums(287);
            return _n14 = _n15.multiply(_n17);
        };
    },
    30802: (_n18, _n19, _n1a) => {
        'use strict';
        var _n1b = null;
        defineModule(_n19);
        Object.defineProperty(_n19, '__esModule', {
            'value': true
        }), _n19.getSlot288PersonalEffect = void 0;
        var _n1c = _n1a(74496);
        _n19.getSlot288PersonalEffect = function(_n1d) {
            var _n1e = null,
                _n1f = new _n1c.SlotItemEffectModel(),
                _n1g = new _n1c.SlotItemEffectModel(),
                _n1h = false;
            if (488 == _n1d.ship_id || 141 == _n1d.ship_id || 160 == _n1d.ship_id || 656 == _n1d.ship_id ? (_n1g.tais = 2, _n1g.kaih = 1, _n1h = true) : 624 == _n1d.ship_id ? (_n1g.houg = 1, _n1g.tais = 3, _n1g.kaih = 2, _n1h = true) : 662 != _n1d.ship_id && 961 != _n1d.ship_id || (_n1g.tais = 4, _n1g.kaih = 1, _n1h = true), 0 == _n1h) return _n1f;
            var _n1i = _n1d.get_slotnums(288);
            return _n1f = _n1g.multiply(_n1i);
        };
    },
    97002: function(_n1j, _n1k, _n1l) {
        'use strict';
        var _n1m = null;
        var _n1n = this && this.__importDefault || function(_n1o) {
            var _n1p = null;
            return _n1o && _n1o.__esModule ? _n1o : {
                'default': _n1o
            };
        };
        defineModule(_n1k);
        Object.defineProperty(_n1k, '__esModule', {
            'value': true
        }), _n1k.getSlot289PersonalEffect = void 0;
        var _n1q = _n1l(74496),
            _n1r = _n1n(_n1l(18622));
        _n1k.getSlot289PersonalEffect = function(_n1s) {
            var _n1t = null,
                _n1u = new _n1q.SlotItemEffectModel(),
                _n1v = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n1w = 0,
                _n1x = new _n1q.SlotItemEffectModel();
            if (149 == _n1s.ship_id || 591 == _n1s.ship_id) _n1x.houg = 2, _n1x.tyku = 1, _n1w = 1;
            else {
                if (150 == _n1s.ship_id || 592 == _n1s.ship_id) _n1x.houg = 1;
                else {
                    if (152 == _n1s.ship_id) _n1x.houg = 1;
                    else {
                        if (151 != _n1s.ship_id && 593 != _n1s.ship_id && 954 != _n1s.ship_id) return _n1u;
                        _n1x.houg = 2, _n1x.tyku = 2, _n1x.kaih = 2, _n1w = 1;
                    }
                }
            }
            var _n1y = _n1s.get_slotnums(289);
            if (_n1u = _n1x.multiply(_n1y), _n1v[_n1s.ship_id]) {
                var _n1z = _n1s.get_each_level_nums(289),
                    _n20 = new Array();
                _n1z.forEach(function(_n21, _n22) {
                    var _n23 = null;
                    for (var _n24 = 1; _n24 <= _n1s.SLOT_LEVEL_MAX; _n24++) _n22 >= _n24 && (null == _n20[_n24] && (_n20[_n24] = 0), _n20[_n24] += _n21);
                });
                var _n25 = _n1v[_n1s.ship_id];
                1 == _n25 ? (_n20[1] >= 1 && (_n1u.kaih += 1 * _n20[1]), _n20[3] >= 1 && (_n1u.tyku = _n1u.tyku + 1 * _n20[3]), _n20[5] >= 1 && (_n1u.houg = _n1u.houg + 1 * _n20[5]), _n20[7] >= 1 && (_n1u.kaih += 1 * _n20[7]), _n20[8] >= 1 && (_n1u.tyku += 1 * _n20[8]), _n20[9] >= 1 && (_n1u.houg += 1 * _n20[9]), _n20[10] >= 1 && (_n1u.kaih += 1 * _n20[10])) : 2 == _n25 ? (_n20[4] >= 1 && (_n1u.tyku += 1 * _n20[4]), _n20[6] >= 1 && (_n1u.kaih += 1 * _n20[6]), _n20[8] >= 1 && (_n1u.houg += 1 * _n20[8]), _n20[10] >= 1 && (_n1u.kaih += 1 * _n20[10])) : 3 == _n25 && (_n20[7] >= 1 && (_n1u.tyku += 1 * _n20[7]), _n20[9] >= 1 && (_n1u.houg += 1 * _n20[9]), _n20[10] >= 1 && (_n1u.kaih += 1 * _n20[10]));
            }
            if (0 == _n1w) return _n1u;
            for (var _n26 = 0, _n27 = 0, _n28 = _n1s.have_slot_ids(); _n27 < _n28.length; _n27++) {
                var _n29 = _n28[_n27],
                    _n2a = _n1r.default.model.slot.getMst(_n29),
                    _n2b = _n2a.equipType;
                (12 == _n2b || 13 == _n2b) && _n2a.sakuteki >= 5 && (_n26 += _n1s.get_slotnums(parseInt(_n29)));
            }
            return _n26 > 0 && (_n1u.houg += 2, _n1u.kaih += 2), _n1u;
        };
    },
    16748: function(_n2c, _n2d, _n2e) {
        'use strict';
        var _n2f = null;
        var _n2g = this && this.__importDefault || function(_n2h) {
            var _n2i = null;
            return _n2h && _n2h.__esModule ? _n2h : {
                'default': _n2h
            };
        };
        defineModule(_n2d);
        Object.defineProperty(_n2d, '__esModule', {
            'value': true
        }), _n2d.getSlot290PersonalEffect = void 0;
        var _n2j = _n2e(74496),
            _n2k = _n2g(_n2e(18622));
        _n2d.getSlot290PersonalEffect = function(_n2l) {
            var _n2m = null,
                _n2n = new _n2j.SlotItemEffectModel(),
                _n2o = 0,
                _n2p = new _n2j.SlotItemEffectModel();
            if (411 == _n2l.ship_id) _n2p.houg = 1;
            else {
                if (412 == _n2l.ship_id) _n2p.houg = 1;
                else {
                    if (82 == _n2l.ship_id) _n2p.houg = 2, _n2p.tyku = 2, _n2p.kaih = 1, _n2o = 1;
                    else {
                        if (553 == _n2l.ship_id) _n2p.houg = 3, _n2p.tyku = 2, _n2p.kaih = 1, _n2p.houm = 3, _n2o = 1;
                        else {
                            if (88 == _n2l.ship_id) _n2p.houg = 2, _n2p.tyku = 2, _n2p.kaih = 1, _n2o = 1;
                            else {
                                if (554 != _n2l.ship_id) return _n2n;
                                _n2p.houg = 3, _n2p.tyku = 2, _n2p.kaih = 2, _n2p.houm = 3, _n2o = 1;
                            }
                        }
                    }
                }
            }
            var _n2q = _n2l.get_slotnums(290);
            if (_n2n = _n2p.multiply(_n2q), 0 == _n2o) return _n2n;
            for (var _n2r = 0, _n2s = 0, _n2t = _n2l.have_slot_ids(); _n2s < _n2t.length; _n2s++) {
                var _n2u = _n2t[_n2s],
                    _n2v = _n2k.default.model.slot.getMst(_n2u),
                    _n2w = _n2v.equipType;
                (12 == _n2w || 13 == _n2w) && _n2v.taiku >= 2 && (_n2r += _n2l.get_slotnums(parseInt(_n2u)));
            }
            return _n2r > 0 && (_n2n.tyku += 2, _n2n.kaih += 3), _n2n;
        };
    },
    53618: (_n2x, _n2y, _n2z) => {
        'use strict';
        var _n30 = null;
        defineModule(_n2y);
        Object.defineProperty(_n2y, '__esModule', {
            'value': true
        }), _n2y.getSlot291PersonalEffect = void 0;
        var _n31 = _n2z(74496);
        _n2y.getSlot291PersonalEffect = function(_n32) {
            var _n33 = null,
                _n34 = new _n31.SlotItemEffectModel(),
                _n35 = new _n31.SlotItemEffectModel();
            if (553 == _n32.ship_id) _n35.houg = 6, _n35.kaih = 1;
            else {
                if (554 != _n32.ship_id) return _n34;
                _n35.houg = 6, _n35.kaih = 1;
            }
            var _n36 = _n32.get_slotnums(291);
            return _n34 = _n35.multiply(_n36);
        };
    },
    72573: (_n37, _n38, _n39) => {
        'use strict';
        var _n3a = null;
        defineModule(_n38);
        Object.defineProperty(_n38, '__esModule', {
            'value': true
        }), _n38.getSlot292PersonalEffect = void 0;
        var _n3b = _n39(74496);
        _n38.getSlot292PersonalEffect = function(_n3c) {
            var _n3d = null,
                _n3e = new _n3b.SlotItemEffectModel(),
                _n3f = new _n3b.SlotItemEffectModel();
            if (553 == _n3c.ship_id) _n3f.houg = 8, _n3f.kaih = 2, _n3f.tyku = 1;
            else {
                if (554 != _n3c.ship_id) return _n3e;
                _n3f.houg = 8, _n3f.kaih = 2, _n3f.tyku = 1;
            }
            var _n3g = _n3c.get_slotnums(292);
            return _n3e = _n3f.multiply(_n3g);
        };
    },
    8955: function(_n3h, _n3i, _n3j) {
        'use strict';
        var _n3k = null;
        var _n3l = this && this.__importDefault || function(_n3m) {
            var _n3n = null;
            return _n3m && _n3m.__esModule ? _n3m : {
                'default': _n3m
            };
        };
        defineModule(_n3i);
        Object.defineProperty(_n3i, '__esModule', {
            'value': true
        }), _n3i.getSlot293PersonalEffect = void 0;
        var _n3o = _n3j(74496),
            _n3p = _n3l(_n3j(18622));
        _n3i.getSlot293PersonalEffect = function(_n3q) {
            var _n3r = null,
                _n3s = new _n3o.SlotItemEffectModel(),
                _n3t = new _n3o.SlotItemEffectModel(),
                _n3u = 0;
            if (66 == _n3q.ctype || 28 == _n3q.ctype) _n3t.houg = 2, _n3t.tyku = 1, _n3t.kaih = 3, _n3u = 1;
            else {
                if (74 != _n3q.ctype && 77 != _n3q.ctype) return _n3s;
                _n3t.houg = 1, _n3t.tyku = 1, _n3t.kaih = 2, _n3u = 2;
            }
            var _n3v = _n3q.get_slotnums(293);
            _n3s = _n3t.multiply(_n3v);
            for (var _n3w = 0, _n3x = 0, _n3y = _n3q.have_slot_ids(); _n3x < _n3y.length; _n3x++) {
                var _n3z = _n3y[_n3x],
                    _n40 = _n3p.default.model.slot.getMst(_n3z),
                    _n41 = _n40.equipType;
                (12 == _n41 || 13 == _n41) && _n40.sakuteki >= 5 && (_n3w += _n3q.get_slotnums(parseInt(_n3z)));
            }
            var _n42 = _n3q.get_slotnums(174);
            return 1 == _n3u ? (_n3w > 0 && (_n3s.houg += 2, _n3s.kaih += 3, _n3s.raig += 1), 1 == _n42 ? (_n3s.houg += 2, _n3s.raig += 4) : _n42 >= 2 && (_n3s.houg += 3, _n3s.raig += 7)) : 2 == _n3u && _n3w > 0 && (_n3s.houg += 2, _n3s.kaih += 3, _n3s.tais += 1), _n3s;
        };
    },
    98947: function(_n43, _n44, _n45) {
        'use strict';
        var _n46 = null;
        var _n47 = this && this.__importDefault || function(_n48) {
            var _n49 = null;
            return _n48 && _n48.__esModule ? _n48 : {
                'default': _n48
            };
        };
        defineModule(_n44);
        Object.defineProperty(_n44, '__esModule', {
            'value': true
        }), _n44.getSlot294PersonalEffect = void 0;
        var _n4a = _n45(74496),
            _n4b = _n47(_n45(18622));
        _n44.getSlot294PersonalEffect = function(_n4c) {
            var _n4d = null,
                _n4e = new _n4a.SlotItemEffectModel(),
                _n4f = new _n4a.SlotItemEffectModel(),
                _n4g = 0,
                _n4h = _n4c.get_slotnums(294);
            if (12 != _n4c.ctype && 1 != _n4c.ctype && 5 != _n4c.ctype) return _n4e;
            _n4f.houg = 1, 959 == _n4c.ship_id && (_n4f.houg += 1, _n4h >= 2 && (_n4e.houg += 2), _n4h >= 3 && (_n4e.houg += 3), _n4g = 1), _n4e.add(_n4f.multiply(_n4h));
            for (var _n4i = 0, _n4j = 0, _n4k = _n4c.have_slot_ids(); _n4j < _n4k.length; _n4j++) {
                var _n4l = _n4k[_n4j],
                    _n4m = _n4b.default.model.slot.getMst(_n4l),
                    _n4n = _n4m.equipType;
                (12 == _n4n || 13 == _n4n) && _n4m.sakuteki >= 5 && (_n4i += _n4c.get_slotnums(parseInt(_n4l)));
            }
            var _n4o = _n4c.get_slotnums(13),
                _n4p = _n4c.get_slotnums(125),
                _n4q = _n4c.get_slotnums(285),
                _n4r = _n4o + _n4p + _n4q;
            if (_n4i > 0 && (_n4e.houg += 3, _n4e.kaih += 2, _n4e.raig += 1), 1 == _n4r ? (_n4e.houg += 1, _n4e.raig += 3) : _n4r >= 2 && (_n4e.houg += 2, _n4e.raig += 5), _n4q >= 1 && (_n4e.raig += 1), 0 == _n4g) return _n4e;
            var _n4s = _n4c.get_each_level_nums(294),
                _n4t = [];
            return _n4g > 0 && _n4s.forEach(function(_n4u, _n4v) {
                var _n4w = null;
                for (var _n4x = 1; _n4x <= _n4c.SLOT_LEVEL_MAX; _n4x++) null == _n4t[_n4x] && (_n4t[_n4x] = 0), _n4v >= _n4x && (_n4t[_n4x] += _n4u);
            }), 1 == _n4g && (_n4t[6] >= 1 && (_n4e.houm += 4 * _n4t[6]), _n4t[7] >= 1 && (_n4e.houg = _n4e.houg + 6 * _n4t[7]), _n4t[8] >= 1 && (_n4e.houg = _n4e.houg + 1 * _n4t[8]), _n4t[9] >= 1 && (_n4e.houg = _n4e.houg + 1 * _n4t[9]), _n4t[10] >= 1 && (_n4e.houg += 1 * _n4t[10])), _n4e;
        };
    },
    44726: function(_n4y, _n4z, _n50) {
        'use strict';
        var _n51 = null;
        var _n52 = this && this.__importDefault || function(_n53) {
            var _n54 = null;
            return _n53 && _n53.__esModule ? _n53 : {
                'default': _n53
            };
        };
        defineModule(_n4z);
        Object.defineProperty(_n4z, '__esModule', {
            'value': true
        }), _n4z.getSlot295PersonalEffect = void 0;
        var _n55 = _n50(74496),
            _n56 = _n52(_n50(18622));
        _n4z.getSlot295PersonalEffect = function(_n57) {
            var _n58 = null,
                _n59 = new _n55.SlotItemEffectModel(),
                _n5a = new _n55.SlotItemEffectModel(),
                _n5b = _n57.get_slotnums(295);
            if (12 != _n57.ctype && 1 != _n57.ctype && 5 != _n57.ctype) return _n59;
            _n5a.houg = 2, _n5a.tyku = 2, 666 == _n57.ship_id ? (_n5a.houg += 1, _n5a.tyku += 1, _n5a.tais += 1) : 959 == _n57.ship_id && (_n5a.houg += 2, _n5b >= 2 && (_n59.houg += 2), _n5b >= 3 && (_n59.houg += 3)), _n59.add(_n5a.multiply(_n5b));
            for (var _n5c = 0, _n5d = 0, _n5e = 0, _n5f = _n57.have_slot_ids(); _n5e < _n5f.length; _n5e++) {
                var _n5g = _n5f[_n5e],
                    _n5h = _n56.default.model.slot.getMst(_n5g),
                    _n5i = _n5h.equipType;
                12 != _n5i && 13 != _n5i || (_n5h.sakuteki >= 5 && (_n5c += _n57.get_slotnums(parseInt(_n5g))), _n5h.taiku >= 2 && (_n5d += _n57.get_slotnums(parseInt(_n5g))));
            }
            var _n5j = _n57.get_slotnums(13),
                _n5k = _n57.get_slotnums(125),
                _n5l = _n57.get_slotnums(285),
                _n5m = _n5j + _n5k + _n5l;
            return _n5c > 0 && (_n59.houg += 3, _n59.kaih += 2, _n59.raig += 1), 1 == _n5m ? (_n59.houg += 1, _n59.raig += 3) : _n5m >= 2 && (_n59.houg += 2, _n59.raig += 5), _n5l >= 1 && (_n59.raig += 1), _n5d > 0 && (_n59.tyku += 6), _n59;
        };
    },
    93065: function(_n5n, _n5o, _n5p) {
        'use strict';
        var _n5q = null;
        var _n5r = this && this.__importDefault || function(_n5s) {
            var _n5t = null;
            return _n5s && _n5s.__esModule ? _n5s : {
                'default': _n5s
            };
        };
        defineModule(_n5o);
        Object.defineProperty(_n5o, '__esModule', {
            'value': true
        }), _n5o.getSlot296PersonalEffect = void 0;
        var _n5u = _n5p(74496),
            _n5v = _n5r(_n5p(18622));
        _n5o.getSlot296PersonalEffect = function(_n5w) {
            var _n5x = null,
                _n5y = new _n5u.SlotItemEffectModel(),
                _n5z = new _n5u.SlotItemEffectModel();
            1 != _n5w.ctype && 5 != _n5w.ctype && 10 != _n5w.ctype && 23 != _n5w.ctype || (_n5z.houg += 1), 10 != _n5w.ctype && 23 != _n5w.ctype || (_n5z.kaih += 1), 145 == _n5w.ship_id || 961 == _n5w.ship_id ? (_n5z.houg += 1, _n5z.tyku += 1) : 144 == _n5w.ship_id ? (_n5z.houg += 1, _n5z.raig += 1) : 469 == _n5w.ship_id || 588 == _n5w.ship_id || 667 == _n5w.ship_id || 587 == _n5w.ship_id || 242 == _n5w.ship_id ? _n5z.kaih += 1 : 497 == _n5w.ship_id ? (_n5z.houg += 1, _n5z.kaih += 1) : 244 == _n5w.ship_id ? _n5z.kaih += 1 : 498 == _n5w.ship_id ? (_n5z.tyku += 1, _n5z.kaih += 1) : 627 == _n5w.ship_id ? (_n5z.houg += 2, _n5z.raig += 1) : 903 != _n5w.ship_id && 908 != _n5w.ship_id || (_n5z.houg += 3);
            var _n60 = true;
            if (_n5z.exists() || (_n60 = false), 0 == _n60) return _n5y;
            var _n61 = _n5w.get_slotnums(296);
            _n5y = _n5z.multiply(_n61);
            var _n62 = 0;
            if (1 != _n5w.ctype && 5 != _n5w.ctype && 10 != _n5w.ctype || (_n62 = 1), 23 == _n5w.ctype && (_n62 = 2), 0 == _n62) return _n5y;
            for (var _n63 = 0, _n64 = 0, _n65 = 0, _n66 = _n5w.have_slot_ids(); _n65 < _n66.length; _n65++) {
                var _n67 = _n66[_n65],
                    _n68 = _n5v.default.model.slot.getMst(_n67),
                    _n69 = _n68.equipType;
                12 != _n69 && 13 != _n69 || (_n68.sakuteki >= 5 && (_n63 += _n5w.get_slotnums(parseInt(_n67))), _n68.taiku >= 2 && (_n64 += _n5w.get_slotnums(parseInt(_n67))));
            }
            return _n63 > 0 && (1 == _n62 ? (_n5y.houg += 1, _n5y.kaih += 2, _n5y.raig += 2) : 2 == _n62 && (_n5y.houg += 1, _n5y.kaih += 2, _n5y.raig += 3)), _n5w.get_slotnums(285) + _n5w.get_slotnums(125) >= 1 && 1 == _n62 && (_n5y.houg += 1, _n5y.raig += 3), _n5w.get_slotnums(15) + _n5w.get_slotnums(286) >= 1 && 2 == _n62 && (_n5y.houg += 1, _n5y.raig += 3), _n64 > 0 && (1 == _n62 ? _n5y.tyku += 5 : 2 == _n62 && (_n5y.tyku += 6)), _n5y;
        };
    },
    85767: (_n6a, _n6b, _n6c) => {
        'use strict';
        var _n6d = null;
        defineModule(_n6b);
        Object.defineProperty(_n6b, '__esModule', {
            'value': true
        }), _n6b.getSlot297PersonalEffect = void 0;
        var _n6e = _n6c(74496);
        _n6b.getSlot297PersonalEffect = function(_n6f) {
            var _n6g = null,
                _n6h = new _n6e.SlotItemEffectModel(),
                _n6i = new _n6e.SlotItemEffectModel();
            if (12 == _n6f.ctype) _n6i.kaih = 2;
            else {
                if (1 != _n6f.ctype && 5 != _n6f.ctype) return _n6h;
                _n6i.kaih = 1;
            }
            var _n6j = _n6f.get_slotnums(297);
            return _n6h = _n6i.multiply(_n6j);
        };
    },
    38314: (_n6k, _n6l, _n6m) => {
        'use strict';
        var _n6n = null;
        defineModule(_n6l);
        Object.defineProperty(_n6l, '__esModule', {
            'value': true
        }), _n6l.getSlot301PersonalEffect = void 0;
        var _n6o = _n6m(74496);
        _n6l.getSlot301PersonalEffect = function(_n6p) {
            var _n6q = null,
                _n6r = new _n6o.SlotItemEffectModel(),
                _n6s = new _n6o.SlotItemEffectModel();
            67 != _n6p.ctype && 78 != _n6p.ctype && 82 != _n6p.ctype && 88 != _n6p.ctype && 108 != _n6p.ctype && 112 != _n6p.ctype || (_n6s.tyku += 2, _n6s.kaih += 1, _n6s.souk += 1);
            var _n6t = true;
            if (_n6s.exists() || (_n6t = false), 0 == _n6t) return _n6r;
            var _n6u = _n6p.get_slotnums(301);
            return _n6r = _n6s.multiply(_n6u);
        };
    },
    59747: (_n6v, _n6w, _n6x) => {
        'use strict';
        var _n6y = null;
        defineModule(_n6w);
        Object.defineProperty(_n6w, '__esModule', {
            'value': true
        }), _n6w.getSlot302PersonalEffect = void 0;
        var _n6z = _n6x(74496);
        _n6w.getSlot302PersonalEffect = function(_n70) {
            var _n71 = null,
                _n72 = new _n6z.SlotItemEffectModel(),
                _n73 = new _n6z.SlotItemEffectModel();
            if (76 == _n70.ctype && (_n73.tais = 1, _n73.kaih = 1), !_n73.exists()) return _n72;
            var _n74 = _n70.get_slotnums(302);
            return _n72 = _n73.multiply(_n74);
        };
    },
    40649: (_n75, _n76, _n77) => {
        'use strict';
        var _n78 = null;
        defineModule(_n76);
        Object.defineProperty(_n76, '__esModule', {
            'value': true
        }), _n76.getSlot303PersonalEffect = void 0;
        var _n79 = _n77(74496);
        _n76.getSlot303PersonalEffect = function(_n7a) {
            var _n7b = null,
                _n7c = new _n79.SlotItemEffectModel(),
                _n7d = new _n79.SlotItemEffectModel();
            if (16 == _n7a.ctype || 4 == _n7a.ctype || 20 == _n7a.ctype || 41 == _n7a.ctype ? (_n7d.houg = 1, _n7d.tyku = 1) : 89 == _n7a.ctype && (_n7d.houg = 1, _n7d.tyku = 2, _n7d.kaih = 1), !_n7d.exists()) return _n7c;
            var _n7e = _n7a.get_slotnums(303);
            return _n7c = _n7d.multiply(_n7e);
        };
    },
    13533: (_n7f, _n7g, _n7h) => {
        'use strict';
        var _n7i = null;
        defineModule(_n7g);
        Object.defineProperty(_n7g, '__esModule', {
            'value': true
        }), _n7g.getSlot304PersonalEffect = void 0;
        var _n7j = _n7h(74496);
        _n7g.getSlot304PersonalEffect = function(_n7k) {
            var _n7l = null,
                _n7m = new _n7j.SlotItemEffectModel(),
                _n7n = new _n7j.SlotItemEffectModel();
            if (16 == _n7k.ctype || 4 == _n7k.ctype || 20 == _n7k.ctype || 41 == _n7k.ctype ? (_n7n.houg = 1, _n7n.tais = 1, _n7n.kaih = 1) : 89 == _n7k.ctype && (_n7n.houg = 1, _n7n.tais = 2, _n7n.kaih = 2), !_n7n.exists()) return _n7m;
            var _n7o = _n7k.get_slotnums(304);
            return _n7m = _n7n.multiply(_n7o);
        };
    },
    99791: (_n7p, _n7q, _n7r) => {
        'use strict';
        var _n7s = null;
        defineModule(_n7q);
        Object.defineProperty(_n7q, '__esModule', {
            'value': true
        }), _n7q.getSlot305More320mmGunPersonalEffect = void 0;
        var _n7t = _n7r(74496);
        _n7q.getSlot305More320mmGunPersonalEffect = function(_n7u) {
            var _n7v = null,
                _n7w = new _n7t.SlotItemEffectModel(),
                _n7x = _n7u.get_slotnums(426),
                _n7y = _n7u.get_slotnums(427),
                _n7z = _n7u.get_slotnums(428),
                _n80 = _n7u.get_slotnums(429),
                _n81 = _n7x + _n7y + _n7z + _n80;
            return 113 == _n7u.ctype ? (_n7w.houg = _n7w.houg + 2 * _n81, _n7x >= 1 && (_n7w.houg = _n7w.houg + 1 * _n7x, _n7w.kaih = _n7w.kaih + 1 * _n7x, (_n7x >= 2 || _n7y >= 1) && (_n7w.houg = _n7w.houg + 1, _n7w.kaih = _n7w.kaih + 1)), _n7z >= 1 && (_n7w.houg = _n7w.houg + 1 * _n7z, _n7w.kaih = _n7w.kaih + 1 * _n7z, (_n7z >= 2 || _n80 >= 1) && (_n7w.houg = _n7w.houg + 2, _n7w.kaih = _n7w.kaih + 1))) : 73 == _n7u.ctype ? (_n7w.houg = _n7w.houg + 1 * _n81, _n7x >= 1 && (_n7w.houg = _n7w.houg + 1 * _n7x, _n7w.kaih = _n7w.kaih + 1 * _n7x, (_n7x >= 2 || _n7y >= 1) && (_n7w.houg = _n7w.houg + 1)), _n7z >= 1 && (_n7w.houg = _n7w.houg + 1 * _n7z, _n7w.kaih = _n7w.kaih + 1 * _n7z, (_n7z >= 2 || _n80 >= 1) && (_n7w.houg = _n7w.houg + 1))) : 58 == _n7u.ctype && _n7z >= 1 && (_n7w.houg = _n7w.houg + 1 * _n7z, _n7w.kaih = _n7w.kaih + 2 * _n7z, (_n7z >= 2 || _n80 >= 1) && (_n7w.houg = _n7w.houg + 2, _n7w.kaih = _n7w.kaih + 1)), _n7w;
        };
    },
    12138: (_n82, _n83, _n84) => {
        'use strict';
        var _n85 = null;
        defineModule(_n83);
        Object.defineProperty(_n83, '__esModule', {
            'value': true
        }), _n83.getSlot305_And_306_PersonalEffect = void 0;
        var _n86 = _n84(74496);
        _n83.getSlot305_And_306_PersonalEffect = function(_n87) {
            var _n88 = null,
                _n89 = new _n86.SlotItemEffectModel(),
                _n8a = new _n86.SlotItemEffectModel();
            if (76 == _n87.ctype && (_n8a.tais = 1, _n8a.kaih = 1), 'しんよう' == _n87.yomi ? (_n8a.tais += 2, _n8a.kaih += 1) : 'グラーフ・ツェッペリン' != _n87.yomi && 'アクィラ' != _n87.yomi || (_n8a.houg = 1, _n8a.kaih = 1), !_n8a.exists()) return _n89;
            var _n8b = _n87.get_slotnums(305) + _n87.get_slotnums(306);
            return _n89 = _n8a.multiply(_n8b);
        };
    },
    30042: (_n8c, _n8d, _n8e) => {
        'use strict';
        var _n8f = null;
        defineModule(_n8d);
        Object.defineProperty(_n8d, '__esModule', {
            'value': true
        }), _n8d.getSlot307PersonalEffect = void 0;
        var _n8g = _n8e(74496);
        _n8d.getSlot307PersonalEffect = function(_n8h) {
            var _n8i = null,
                _n8j = new _n8g.SlotItemEffectModel(),
                _n8k = new _n8g.SlotItemEffectModel();
            if ('アメリカ' == _n8h.getCountryName() && (_n8k.houg = 1, _n8k.tyku = 1, _n8k.kaih = 1), !_n8k.exists()) return _n8j;
            var _n8l = _n8h.get_slotnums(307);
            return _n8j = _n8k.multiply(_n8l);
        };
    },
    33623: (_n8m, _n8n, _n8o) => {
        'use strict';
        var _n8p = null;
        defineModule(_n8n);
        Object.defineProperty(_n8n, '__esModule', {
            'value': true
        }), _n8n.getSlot308PersonalEffect = void 0;
        var _n8q = _n8o(74496);
        _n8n.getSlot308PersonalEffect = function(_n8r) {
            var _n8s = null,
                _n8t = new _n8q.SlotItemEffectModel(),
                _n8u = new _n8q.SlotItemEffectModel();
            if ('アメリカ' == _n8r.getCountryName() && (_n8u.houg = 1, _n8u.tyku = 1, _n8u.kaih = 1), 2 == _n8r.stype ? _n8u.houg += 1 : 1 == _n8r.stype && (_n8u.tyku += 1, _n8u.kaih += 1), 651 != _n8r.ship_id && 656 != _n8r.ship_id || (_n8u.houg += 1, _n8u.tyku += 1, _n8u.kaih += 1), !_n8u.exists()) return _n8t;
            var _n8v = _n8r.get_slotnums(308);
            return _n8t = _n8u.multiply(_n8v);
        };
    },
    17732: (_n8w, _n8x, _n8y) => {
        'use strict';
        var _n8z = null;
        defineModule(_n8x);
        Object.defineProperty(_n8x, '__esModule', {
            'value': true
        }), _n8x.getSlot30_410PersonalEffect = void 0;
        var _n90 = _n8y(74496);
        _n8x.getSlot30_410PersonalEffect = function(_n91) {
            var _n92 = null,
                _n93 = new _n90.SlotItemEffectModel();
            return 73 != _n91.ship_id && 501 != _n91.ship_id && 506 != _n91.ship_id && 502 != _n91.ship_id && 507 != _n91.ship_id || (_n93.tyku += 3, _n93.kaih += 2, _n93.saku += 2, _n91.get_slotnums(410) >= 1 && (_n93.tyku += 2, _n93.kaih += 2, _n93.houg += 1, _n93.souk += 1)), 54 == _n91.ctype && (_n93.tyku += 3, _n93.kaih += 2, _n93.saku += 2, _n91.get_slotnums(410) >= 1 && (_n93.tyku += 2, _n93.kaih += 2, _n93.houg += 1, _n93.souk += 1)), _n93;
        };
    },
    85630: function(_n94, _n95, _n96) {
        'use strict';
        var _n97 = null;
        var _n98 = this && this.__importDefault || function(_n99) {
            var _n9a = null;
            return _n99 && _n99.__esModule ? _n99 : {
                'default': _n99
            };
        };
        defineModule(_n95);
        Object.defineProperty(_n95, '__esModule', {
            'value': true
        }), _n95.getSlot310PersonalEffect = void 0;
        var _n9b = _n96(74496),
            _n9c = _n98(_n96(18622));
        _n95.getSlot310PersonalEffect = function(_n9d) {
            var _n9e = null,
                _n9f = new _n9b.SlotItemEffectModel(),
                _n9g = new _n9b.SlotItemEffectModel(),
                _n9h = new _n9b.SlotItemEffectModel();
            34 == _n9d.ctype ? (_n9g.houg += 2, _n9g.tyku += 1, _n9g.kaih += 1, _n9h.houg += 2) : 56 == _n9d.ctype ? (_n9g.houg += 2, _n9g.kaih += 1, _n9h.houg += 2, _n9h.kaih += 2) : 90 == _n9d.ctype && (_n9g.houg += 3, _n9g.raig += 2, _n9g.tyku += 1, _n9g.kaih += 1, _n9h.houg += 1, _n9h.raig += 1);
            var _n9i = new _n9b.SlotItemEffectModel(),
                _n9j = new _n9b.SlotItemEffectModel();
            622 != _n9d.ship_id && 623 != _n9d.ship_id && 624 != _n9d.ship_id || (_n9g.houg += 2, _n9g.kaih += 1, _n9g.tais += 1, _n9i.houg = 1, _n9i.raig = 1, _n9j.houg = 3, _n9j.kaih = 2, _n9j.raig = 2);
            var _n9k = true;
            if (_n9g.exists() || (_n9k = false), 0 == _n9k) return _n9f;
            var _n9l = _n9d.get_slotnums(310) + _n9d.get_slotnums(518);
            _n9f = _n9g.multiply(_n9l);
            for (var _n9m = 0, _n9n = 0, _n9o = 0, _n9p = [310, 518]; _n9o < _n9p.length; _n9o++) {
                var _n9q = _n9p[_n9o],
                    _n9r = _n9d.have_slots_dict[_n9q];
                if (null != _n9r)
                    for (var _n9s = 0, _n9t = _n9r; _n9s < _n9t.length; _n9s++) {
                        var _n9u = _n9t[_n9s];
                        null != _n9u && (_n9u.level >= 7 && _n9m++, _n9u.level >= 10 && _n9n++);
                    }
            }
            if (_n9i.exists() && _n9m > 0 && _n9f.add(_n9i.multiply(_n9m)), _n9h.exists() && _n9n > 0 && _n9f.add(_n9h.multiply(_n9n)), _n9j.exists()) {
                for (var _n9v = 0, _n9w = 0, _n9x = _n9d.have_slot_ids(); _n9w < _n9x.length; _n9w++) {
                    var _n9y = _n9x[_n9w],
                        _n9z = _n9c.default.model.slot.getMst(_n9y),
                        _na0 = _n9z.equipType;
                    (12 == _na0 || 13 == _na0) && _n9z.sakuteki >= 5 && (_n9v += _n9d.get_slotnums(parseInt(_n9y)));
                }
                _n9v > 0 && _n9f.add(_n9j);
            }
            return _n9f;
        };
    },
    88736: (_na1, _na2, _na3) => {
        'use strict';
        var _na4 = null;
        defineModule(_na2);
        Object.defineProperty(_na2, '__esModule', {
            'value': true
        }), _na2.getSlot313PersonalEffect = void 0;
        var _na5 = _na3(74496);
        _na2.getSlot313PersonalEffect = function(_na6) {
            var _na7 = null,
                _na8 = new _na5.SlotItemEffectModel(),
                _na9 = new _na5.SlotItemEffectModel();
            87 != _na6.ctype && 91 != _na6.ctype || (_na9.houg += 2, _na9.tyku += 2, _na9.kaih += 1, _na9.souk += 1), 651 != _na6.ship_id && 656 != _na6.ship_id || (_na9.houg += 2, _na9.tyku += 2, _na9.kaih += 1, _na9.souk += 1);
            var _naa = true;
            if (_na9.exists() || (_naa = false), 0 == _naa) return _na8;
            var _nab = _na6.get_slotnums(313);
            return _na8 = _na9.multiply(_nab);
        };
    },
    49341: (_nac, _nad, _nae) => {
        'use strict';
        var _naf = null;
        defineModule(_nad);
        Object.defineProperty(_nad, '__esModule', {
            'value': true
        }), _nad.getSlot314PersonalEffect = void 0;
        var _nag = _nae(74496);
        _nad.getSlot314PersonalEffect = function(_nah) {
            var _nai = null,
                _naj = new _nag.SlotItemEffectModel(),
                _nak = new _nag.SlotItemEffectModel();
            87 != _nah.ctype && 91 != _nah.ctype || (_nak.houg += 1, _nak.raig += 3);
            var _nal = true;
            if (_nak.exists() || (_nal = false), 0 == _nal) return _naj;
            var _nam = _nah.get_slotnums(314);
            return _naj = _nak.multiply(_nam);
        };
    },
    74306: (_nan, _nao, _nap) => {
        'use strict';
        var _naq = null;
        defineModule(_nao);
        Object.defineProperty(_nao, '__esModule', {
            'value': true
        }), _nao.getSlot315PersonalEffect = void 0;
        var _nar = _nap(74496);
        _nao.getSlot315PersonalEffect = function(_nas) {
            var _nat = null,
                _nau = new _nar.SlotItemEffectModel(),
                _nav = new _nar.SlotItemEffectModel();
            'アメリカ' == _nas.getCountryName() && (_nav.houg += 2, _nav.kaih += 3, _nav.saku += 4), 87 != _nas.ctype && 91 != _nas.ctype || (_nav.houg += 1, _nau.leng += 1), 651 != _nas.ship_id && 656 != _nas.ship_id || (_nau.houg += 2, _nau.kaih += 2, _nau.saku += 3, _nau.leng += 1);
            var _naw = true;
            if (_nav.exists() || (_naw = false), 0 == _naw) return _nau;
            var _nax = _nas.get_slotnums(315);
            return _nau.add(_nav.multiply(_nax)), _nau;
        };
    },
    83898: (_nay, _naz, _nb0) => {
        'use strict';
        var _nb1 = null;
        defineModule(_naz);
        Object.defineProperty(_naz, '__esModule', {
            'value': true
        }), _naz.getSlot316PersonalEffect = void 0;
        var _nb2 = _nb0(74496);
        _naz.getSlot316PersonalEffect = function(_nb3) {
            var _nb4 = null,
                _nb5 = new _nb2.SlotItemEffectModel(),
                _nb6 = new _nb2.SlotItemEffectModel();
            if (68 == _nb3.ctype) {
                if (_nb6.houg += 4, _nb6.tyku += 1, _nb6.kaih += 1, !_nb6.exists()) return _nb5;
                var _nb7 = _nb3.get_slotnums(316);
                _nb5 = _nb6.multiply(_nb7);
            }
            return _nb5;
        };
    },
    71873: (_nb8, _nb9, _nba) => {
        'use strict';
        var _nbb = null;
        defineModule(_nb9);
        Object.defineProperty(_nb9, '__esModule', {
            'value': true
        }), _nb9.getSlot317PersonalEffect = void 0;
        var _nbc = _nba(74496);
        _nb9.getSlot317PersonalEffect = function(_nbd) {
            var _nbe = null,
                _nbf = new _nbc.SlotItemEffectModel(),
                _nbg = new _nbc.SlotItemEffectModel(),
                _nbh = 0,
                _nbi = false;
            if (6 == _nbd.ctype ? (_nbg.houg += 2, _nbg.tyku += 1, _nbh = 1, _nbi = true) : 2 == _nbd.ctype && (_nbg.houg += 1, _nbg.tyku += 1, _nbg.kaih += 1, _nbh = 2, _nbi = true), 149 == _nbd.ship_id || 591 == _nbd.ship_id || 592 == _nbd.ship_id ? (_nbg.houg += 2, _nbg.tyku += 2, _nbi = true) : 150 == _nbd.ship_id ? (_nbg.houg += 1, _nbg.tyku += 1, _nbi = true) : 151 == _nbd.ship_id ? (_nbg.houg += 1, _nbg.tyku += 1, _nbg.kaih += 1, _nbi = true) : 593 == _nbd.ship_id ? (_nbg.houg += 1, _nbg.tyku += 3, _nbg.kaih += 2, _nbi = true) : 954 == _nbd.ship_id ? (_nbg.houg += 2, _nbg.tyku += 2, _nbg.kaih += 1, _nbi = true) : 152 == _nbd.ship_id ? (_nbg.houg += 2, _nbg.tyku += 1, _nbi = true) : 541 == _nbd.ship_id ? (_nbg.houg += 1, _nbg.tyku += 2, _nbi = true) : 573 == _nbd.ship_id && (_nbg.houg += 2, _nbg.tyku += 2, _nbg.kaih += 1, _nbi = true), 0 == _nbi) return _nbf;
            if (_nbf.add(_nbg), 0 == _nbh) return _nbf;
            var _nbj = _nbd.get_each_level_nums(317),
                _nbk = [];
            return _nbh > 0 && _nbj.forEach(function(_nbl, _nbm) {
                var _nbn = null;
                for (var _nbo = 1; _nbo <= _nbd.SLOT_LEVEL_MAX; _nbo++) null == _nbk[_nbo] && (_nbk[_nbo] = 0), _nbm >= _nbo && (_nbk[_nbo] += _nbl);
            }), 1 == _nbh ? _nbk[8] >= 1 && (_nbf.houm += 1) : 2 == _nbh && _nbj[10] >= 1 && (_nbf.houm += 1), _nbf;
        };
    },
    53122: function(_nbp, _nbq, _nbr) {
        'use strict';
        var _nbs = null;
        var _nbt = this && this.__importDefault || function(_nbu) {
            var _nbv = null;
            return _nbu && _nbu.__esModule ? _nbu : {
                'default': _nbu
            };
        };
        defineModule(_nbq);
        Object.defineProperty(_nbq, '__esModule', {
            'value': true
        }), _nbq.getSlot318PersonalEffect = void 0;
        var _nbw = _nbr(74496),
            _nbx = _nbt(_nbr(18622));
        _nbq.getSlot318PersonalEffect = function(_nby) {
            var _nbz = null,
                _nc0 = new _nbw.SlotItemEffectModel(),
                _nc1 = new _nbw.SlotItemEffectModel(),
                _nc2 = new _nbw.SlotItemEffectModel(),
                _nc3 = new _nbw.SlotItemEffectModel();
            if (411 == _nby.ship_id || 412 == _nby.ship_id ? _nc1.houg += 1 : 82 == _nby.ship_id ? (_nc1.houg += 2, _nc1.tyku += 2, _nc1.kaih += 2, _nc3.tyku = 2, _nc3.kaih = 3, _nc3.houm = 1) : 553 == _nby.ship_id ? (_nc1.houg += 2, _nc1.tyku += 2, _nc1.kaih += 2, _nc1.houm += 3, _nc3.tyku = 2, _nc3.kaih = 3, _nc3.houm = 1, _nc2.kaih = 2, _nc2.souk = 1) : 88 == _nby.ship_id ? (_nc1.houg += 2, _nc1.tyku += 2, _nc1.kaih += 2, _nc3.tyku = 2, _nc3.kaih = 3, _nc3.houm = 1) : 541 == _nby.ship_id || 573 == _nby.ship_id ? (_nc1.houg += 3, _nc1.tyku += 2, _nc1.kaih += 1, _nc1.houm += 2, _nc2.houg = 2, _nc2.kaih = 2, _nc2.souk = 1, _nc2.houm = 1) : 554 == _nby.ship_id && (_nc1.houg += 3, _nc1.tyku += 2, _nc1.kaih += 2, _nc1.houm += 3, _nc3.tyku = 2, _nc3.kaih = 3, _nc3.houm = 1, _nc2.houg = 1, _nc2.kaih = 2, _nc2.souk = 1, _nc2.houm = 1), !_nc1.exists()) return _nc0;
            var _nc4 = _nby.get_slotnums(318);
            if (_nc0 = _nc1.multiply(_nc4), !_nc2.exists() && !_nc3.exists()) return _nc0;
            for (var _nc5 = 0, _nc6 = 0, _nc7 = _nby.have_slot_ids(); _nc6 < _nc7.length; _nc6++) {
                var _nc8 = _nc7[_nc6],
                    _nc9 = _nbx.default.model.slot.getMst(_nc8),
                    _nca = _nc9.equipType;
                (12 == _nca || 13 == _nca) && _nc9.taiku >= 2 && (_nc5 += _nby.get_slotnums(parseInt(_nc8)));
            }
            var _ncb = _nby.get_slotnums(290);
            return _nc3.exists() && _nc5 > 0 && 0 == _ncb && _nc0.add(_nc3), _nc2.exists() && _ncb >= 1 && _nc0.add(_nc2), _nc0;
        };
    },
    51063: (_ncc, _ncd, _nce) => {
        'use strict';
        var _ncf = null;
        defineModule(_ncd);
        Object.defineProperty(_ncd, '__esModule', {
            'value': true
        }), _ncd.getSlot319PersonalEffect = void 0;
        var _ncg = _nce(74496);
        _ncd.getSlot319PersonalEffect = function(_nch) {
            var _nci = null,
                _ncj = new _ncg.SlotItemEffectModel(),
                _nck = new _ncg.SlotItemEffectModel();
            if (554 != _nch.ship_id && 553 != _nch.ship_id || (_nck.houg = 7, _nck.tyku = 3, _nck.kaih = 2), !_nck.exists()) return _ncj;
            var _ncl = _nch.get_slotnums(319);
            return _ncj = _nck.multiply(_ncl);
        };
    },
    91491: (_ncm, _ncn, _nco) => {
        'use strict';
        var _ncp = null;
        defineModule(_ncn);
        Object.defineProperty(_ncn, '__esModule', {
            'value': true
        }), _ncn.getSlot320PersonalEffect = void 0;
        var _ncq = _nco(74496);
        _ncn.getSlot320PersonalEffect = function(_ncr) {
            var _ncs = null,
                _nct = new _ncq.SlotItemEffectModel(),
                _ncu = new _ncq.SlotItemEffectModel();
            if (553 == _ncr.ship_id) _ncu.houg = 2;
            else {
                if (554 == _ncr.ship_id) _ncu.houg = 4;
                else {
                    if (196 == _ncr.ship_id) _ncu.houg = 3;
                    else {
                        if (197 == _ncr.ship_id) _ncu.houg = 3;
                        else {
                            if (508 == _ncr.ship_id) _ncu.houg = 4;
                            else {
                                if (509 != _ncr.ship_id) return _nct;
                                _ncu.houg = 4;
                            }
                        }
                    }
                }
            }
            var _ncv = _ncr.get_slotnums(320);
            return _nct = _ncu.multiply(_ncv);
        };
    },
    85495: (_ncw, _ncx, _ncy) => {
        'use strict';
        var _ncz = null;
        defineModule(_ncx);
        Object.defineProperty(_ncx, '__esModule', {
            'value': true
        }), _ncx.getSlot322PersonalEffect = void 0;
        var _nd0 = _ncy(74496);
        _ncx.getSlot322PersonalEffect = function(_nd1) {
            var _nd2 = null,
                _nd3 = new _nd0.SlotItemEffectModel(),
                _nd4 = new _nd0.SlotItemEffectModel();
            if (554 != _nd1.ship_id && 553 != _nd1.ship_id || (_nd4.houg = 5, _nd4.tyku = 2, _nd4.kaih = 2, _nd4.tais = 1), !_nd4.exists()) return _nd3;
            var _nd5 = _nd1.get_slotnums(322);
            return _nd3 = _nd4.multiply(_nd5);
        };
    },
    65365: (_nd6, _nd7, _nd8) => {
        'use strict';
        var _nd9 = null;
        defineModule(_nd7);
        Object.defineProperty(_nd7, '__esModule', {
            'value': true
        }), _nd7.getSlot323PersonalEffect = void 0;
        var _nda = _nd8(74496);
        _nd7.getSlot323PersonalEffect = function(_ndb) {
            var _ndc = null,
                _ndd = new _nda.SlotItemEffectModel(),
                _nde = new _nda.SlotItemEffectModel();
            if (554 != _ndb.ship_id && 553 != _ndb.ship_id || (_nde.houg = 6, _nde.tyku = 3, _nde.kaih = 3, _nde.tais = 2), !_nde.exists()) return _ndd;
            var _ndf = _ndb.get_slotnums(323);
            return _ndd = _nde.multiply(_ndf);
        };
    },
    98164: (_ndg, _ndh, _ndi) => {
        'use strict';
        var _ndj = null;
        defineModule(_ndh);
        Object.defineProperty(_ndh, '__esModule', {
            'value': true
        }), _ndh.getSlot324And325PersonalEffect = void 0;
        var _ndk = _ndi(74496);
        _ndh.getSlot324And325PersonalEffect = function(_ndl) {
            var _ndm = null,
                _ndn = new _ndk.SlotItemEffectModel(),
                _ndo = new _ndk.SlotItemEffectModel();
            if (554 == _ndl.ship_id || 646 == _ndl.ship_id ? (_ndo.houg = 2, _ndo.tais = 3, _ndo.kaih = 1) : 553 == _ndl.ship_id && (_ndo.houg = 1, _ndo.tais = 2, _ndo.kaih = 1), !_ndo.exists()) return _ndn;
            var _ndp = _ndl.get_slotnums(324) + _ndl.get_slotnums(325);
            return _ndn = _ndo.multiply(_ndp);
        };
    },
    38114: (_ndq, _ndr, _nds) => {
        'use strict';
        var _ndt = null;
        defineModule(_ndr);
        Object.defineProperty(_ndr, '__esModule', {
            'value': true
        }), _ndr.getSlot326PersonalEffect = void 0;
        var _ndu = _nds(74496);
        _ndr.getSlot326PersonalEffect = function(_ndv) {
            var _ndw = null,
                _ndx = new _ndu.SlotItemEffectModel(),
                _ndy = new _ndu.SlotItemEffectModel();
            if (646 == _ndv.ship_id ? (_ndy.houg = 3, _ndy.tais = 5, _ndy.kaih = 3) : 554 == _ndv.ship_id ? (_ndy.houg = 3, _ndy.tais = 4, _ndy.kaih = 2) : 553 == _ndv.ship_id && (_ndy.houg = 1, _ndy.tais = 3, _ndy.kaih = 1), !_ndy.exists()) return _ndx;
            var _ndz = _ndv.get_slotnums(326);
            return _ndx = _ndy.multiply(_ndz);
        };
    },
    21003: (_ne0, _ne1, _ne2) => {
        'use strict';
        var _ne3 = null;
        defineModule(_ne1);
        Object.defineProperty(_ne1, '__esModule', {
            'value': true
        }), _ne1.getSlot327PersonalEffect = void 0;
        var _ne4 = _ne2(74496);
        _ne1.getSlot327PersonalEffect = function(_ne5) {
            var _ne6 = null,
                _ne7 = new _ne4.SlotItemEffectModel(),
                _ne8 = new _ne4.SlotItemEffectModel();
            if (646 == _ne5.ship_id ? (_ne8.houg = 5, _ne8.tais = 6, _ne8.kaih = 4) : 554 == _ne5.ship_id ? (_ne8.houg = 4, _ne8.tais = 5, _ne8.kaih = 2) : 553 == _ne5.ship_id && (_ne8.houg = 2, _ne8.tais = 4, _ne8.kaih = 1), !_ne8.exists()) return _ne7;
            var _ne9 = _ne5.get_slotnums(327);
            return _ne7 = _ne8.multiply(_ne9);
        };
    },
    77010: (_nea, _neb, _nec) => {
        'use strict';
        var _ned = null;
        defineModule(_neb);
        Object.defineProperty(_neb, '__esModule', {
            'value': true
        }), _neb.getSlot328PersonalEffect = void 0;
        var _nee = _nec(74496);
        _neb.getSlot328PersonalEffect = function(_nef) {
            var _neg = null,
                _neh = new _nee.SlotItemEffectModel(),
                _nei = new _nee.SlotItemEffectModel();
            if ('こんごう' == _nef.yomi ? (_nei.houg = 1, _nei.kaih = 1, 209 == _nef.ship_id || 149 == _nef.ship_id ? _nei.houg += 1 : 591 == _nef.ship_id && (_nei.houg += 2, _nei.raig += 1)) : 'ひえい' == _nef.yomi ? (_nei.houg = 1, _nei.kaih = 1, 210 == _nef.ship_id || 150 == _nef.ship_id ? _nei.houg += 1 : 592 == _nef.ship_id && (_nei.houg += 2, _nei.tyku += 1)) : 'はるな' == _nef.yomi ? (_nei.houg = 1, _nei.kaih = 1, 211 == _nef.ship_id || 151 == _nef.ship_id ? _nei.houg += 1 : 593 == _nef.ship_id ? (_nei.houg += 1, _nei.tyku += 2) : 954 == _nef.ship_id && (_nei.houg += 2, _nei.tyku += 1)) : 'きりしま' == _nef.yomi ? (_nei.houg = 1, _nei.kaih = 1, 212 != _nef.ship_id && 152 != _nef.ship_id || (_nei.houg += 1)) : ('ふそう' == _nef.yomi || 'やましろ' == _nef.yomi || 'いせ' == _nef.yomi || 'ひゅうが' == _nef.yomi) && (_nei.houg = 1), !_nei.exists()) return _neh;
            var _nej = _nef.get_slotnums(328);
            return _neh = _nei.multiply(_nej);
        };
    },
    39126: (_nek, _nel, _nem) => {
        'use strict';
        var _nen = null;
        defineModule(_nel);
        Object.defineProperty(_nel, '__esModule', {
            'value': true
        }), _nel.getSlot329PersonalEffect = void 0;
        var _neo = _nem(74496);
        _nel.getSlot329PersonalEffect = function(_nep) {
            var _neq = null,
                _ner = new _neo.SlotItemEffectModel(),
                _nes = new _neo.SlotItemEffectModel();
            if ('こんごう' == _nep.yomi ? (_nes.houg = 1, _nes.kaih = 1, 209 == _nep.ship_id ? _nes.houg += 1 : 149 == _nep.ship_id ? (_nes.houg += 2, _nes.tyku += 1) : 591 == _nep.ship_id && (_nes.houg += 3, _nes.tyku += 1, _nes.raig += 2)) : 'ひえい' == _nep.yomi ? (_nes.houg = 1, _nes.kaih = 1, 210 == _nep.ship_id ? _nes.houg += 1 : 150 == _nep.ship_id ? (_nes.houg += 2, _nes.tyku += 1) : 592 == _nep.ship_id && (_nes.houg += 3, _nes.tyku += 1, _nes.raig += 2)) : 'はるな' == _nep.yomi ? (_nes.houg = 1, _nes.kaih = 1, 211 == _nep.ship_id ? _nes.houg += 1 : 151 == _nep.ship_id ? (_nes.houg += 2, _nes.tyku += 1) : 593 == _nep.ship_id ? (_nes.houg += 2, _nes.tyku += 3, _nes.raig += 1) : 954 == _nep.ship_id && (_nes.houg += 3, _nes.tyku += 1, _nes.raig += 2)) : 'きりしま' == _nep.yomi ? (_nes.houg = 1, _nes.kaih = 1, 212 == _nep.ship_id ? _nes.houg += 1 : 152 == _nep.ship_id && (_nes.houg += 2, _nes.tyku += 1)) : ('ふそう' == _nep.yomi || 'やましろ' == _nep.yomi || 'いせ' == _nep.yomi || 'ひゅうが' == _nep.yomi) && (_nes.houg = 1), !_nes.exists()) return _ner;
            var _net = _nep.get_slotnums(329);
            return _ner = _nes.multiply(_net);
        };
    },
    72176: (_neu, _nev, _new) => {
        'use strict';
        var _nex = null;
        defineModule(_nev);
        Object.defineProperty(_nev, '__esModule', {
            'value': true
        }), _nev.getSlot335PersonalEffect = void 0;
        var _ney = _new(74496);
        _nev.getSlot335PersonalEffect = function(_nez) {
            var _nf0 = null,
                _nf1 = new _ney.SlotItemEffectModel(),
                _nf2 = new _ney.SlotItemEffectModel();
            if (277 == _nez.ship_id || 278 == _nez.ship_id ? (_nf2.tyku = 1, _nf2.kaih = 1) : 594 != _nez.ship_id && 599 != _nez.ship_id && 610 != _nez.ship_id && 646 != _nez.ship_id && 698 != _nez.ship_id || (_nf2.tyku = 2, _nf2.kaih = 1), !_nf2.exists()) return _nf1;
            var _nf3 = _nez.get_slotnums(335);
            return _nf1 = _nf2.multiply(_nf3);
        };
    },
    33846: (_nf4, _nf5, _nf6) => {
        'use strict';
        var _nf7 = null;
        defineModule(_nf5);
        Object.defineProperty(_nf5, '__esModule', {
            'value': true
        }), _nf5.getSlot336PersonalEffect = void 0;
        var _nf8 = _nf6(74496);
        _nf5.getSlot336PersonalEffect = function(_nf9) {
            var _nfa = null,
                _nfb = new _nf8.SlotItemEffectModel(),
                _nfc = new _nf8.SlotItemEffectModel();
            if (277 == _nf9.ship_id || 278 == _nf9.ship_id ? (_nfc.houg = 1, _nfc.tyku = 1, _nfc.kaih = 1) : 594 != _nf9.ship_id && 599 != _nf9.ship_id && 610 != _nf9.ship_id && 646 != _nf9.ship_id && 698 != _nf9.ship_id || (_nfc.houg = 1, _nfc.tyku = 2, _nfc.kaih = 1), !_nfc.exists()) return _nfb;
            var _nfd = _nf9.get_slotnums(336);
            return _nfb = _nfc.multiply(_nfd);
        };
    },
    97157: (_nfe, _nff, _nfg) => {
        'use strict';
        var _nfh = null;
        defineModule(_nff);
        Object.defineProperty(_nff, '__esModule', {
            'value': true
        }), _nff.getSlot337PersonalEffect = void 0;
        var _nfi = _nfg(74496);
        _nff.getSlot337PersonalEffect = function(_nfj) {
            var _nfk = null,
                _nfl = new _nfi.SlotItemEffectModel(),
                _nfm = new _nfi.SlotItemEffectModel();
            if (277 == _nfj.ship_id || 278 == _nfj.ship_id ? (_nfm.houg = 1, _nfm.tyku = 1, _nfm.kaih = 1) : 594 != _nfj.ship_id && 599 != _nfj.ship_id && 610 != _nfj.ship_id && 646 != _nfj.ship_id && 698 != _nfj.ship_id || (_nfm.houg = 2, _nfm.tyku = 2, _nfm.kaih = 1), !_nfm.exists()) return _nfl;
            var _nfn = _nfj.get_slotnums(337);
            return _nfl = _nfm.multiply(_nfn);
        };
    },
    63406: (_nfo, _nfp, _nfq) => {
        'use strict';
        var _nfr = null;
        defineModule(_nfp);
        Object.defineProperty(_nfp, '__esModule', {
            'value': true
        }), _nfp.getSlot338PersonalEffect = void 0;
        var _nfs = _nfq(74496);
        _nfp.getSlot338PersonalEffect = function(_nft) {
            var _nfu = null,
                _nfv = new _nfs.SlotItemEffectModel(),
                _nfw = new _nfs.SlotItemEffectModel();
            if (277 == _nft.ship_id || 278 == _nft.ship_id ? (_nfw.houg = 1, _nfw.tyku = 1, _nfw.kaih = 2) : 594 == _nft.ship_id || 646 == _nft.ship_id || 698 == _nft.ship_id ? (_nfw.houg = 1, _nfw.tyku = 2, _nfw.kaih = 3) : 599 != _nft.ship_id && 610 != _nft.ship_id || (_nfw.houg = 4, _nfw.tyku = 3, _nfw.kaih = 4), !_nfw.exists()) return _nfv;
            var _nfx = _nft.get_slotnums(338);
            return _nfv = _nfw.multiply(_nfx);
        };
    },
    66373: (_nfy, _nfz, _ng0) => {
        'use strict';
        var _ng1 = null;
        defineModule(_nfz);
        Object.defineProperty(_nfz, '__esModule', {
            'value': true
        }), _nfz.getSlot339PersonalEffect = void 0;
        var _ng2 = _ng0(74496);
        _nfz.getSlot339PersonalEffect = function(_ng3) {
            var _ng4 = null,
                _ng5 = new _ng2.SlotItemEffectModel(),
                _ng6 = new _ng2.SlotItemEffectModel();
            if (277 == _ng3.ship_id || 278 == _ng3.ship_id ? (_ng6.houg = 1, _ng6.tyku = 2, _ng6.kaih = 2) : 594 == _ng3.ship_id || 646 == _ng3.ship_id || 698 == _ng3.ship_id ? (_ng6.houg = 1, _ng6.tyku = 3, _ng6.kaih = 4) : 599 != _ng3.ship_id && 610 != _ng3.ship_id || (_ng6.houg = 6, _ng6.tyku = 4, _ng6.kaih = 5), !_ng6.exists()) return _ng5;
            var _ng7 = _ng3.get_slotnums(339);
            return _ng5 = _ng6.multiply(_ng7);
        };
    },
    19707: (_ng8, _ng9, _nga) => {
        'use strict';
        var _ngb = null;
        defineModule(_ng9);
        Object.defineProperty(_ng9, '__esModule', {
            'value': true
        }), _ng9.getSlot340PersonalEffect = void 0;
        var _ngc = _nga(74496);
        _ng9.getSlot340PersonalEffect = function(_ngd) {
            var _nge = null,
                _ngf = new _ngc.SlotItemEffectModel(),
                _ngg = new _ngc.SlotItemEffectModel();
            if ('ガリバルディ' != _ngd.yomi && 'アブルッツィ' != _ngd.yomi || (_ngg.houg = 1, _ngg.tyku = 1, _ngg.kaih = 1), !_ngg.exists()) return _ngf;
            var _ngh = _ngd.get_slotnums(340);
            return _ngf = _ngg.multiply(_ngh);
        };
    },
    63978: (_ngi, _ngj, _ngk) => {
        'use strict';
        var _ngl = null;
        defineModule(_ngj);
        Object.defineProperty(_ngj, '__esModule', {
            'value': true
        }), _ngj.getSlot341PersonalEffect = void 0;
        var _ngm = _ngk(74496);
        _ngj.getSlot341PersonalEffect = function(_ngn) {
            var _ngo = null,
                _ngp = new _ngm.SlotItemEffectModel(),
                _ngq = new _ngm.SlotItemEffectModel();
            if ('ガリバルディ' == _ngn.yomi || 'アブルッツィ' == _ngn.yomi ? (_ngq.houg = 2, _ngq.tyku = 1, _ngq.kaih = 1) : 'ゴトランド' == _ngn.yomi && (_ngq.houg = 1, _ngq.tyku = 1, _ngq.kaih = 1), !_ngq.exists()) return _ngp;
            var _ngr = _ngn.get_slotnums(341);
            return _ngp = _ngq.multiply(_ngr);
        };
    },
    92382: (_ngs, _ngt, _ngu) => {
        'use strict';
        var _ngv = null;
        defineModule(_ngt);
        Object.defineProperty(_ngt, '__esModule', {
            'value': true
        }), _ngt.getSlot342PersonalEffect = void 0;
        var _ngw = _ngu(74496);
        _ngt.getSlot342PersonalEffect = function(_ngx) {
            var _ngy = null,
                _ngz = new _ngw.SlotItemEffectModel(),
                _nh0 = new _ngw.SlotItemEffectModel();
            if (277 == _ngx.ship_id || 278 == _ngx.ship_id || 461 == _ngx.ship_id || 466 == _ngx.ship_id || 462 == _ngx.ship_id || 467 == _ngx.ship_id ? _nh0.houg = 1 : 594 == _ngx.ship_id || 646 == _ngx.ship_id || 698 == _ngx.ship_id ? (_nh0.houg = 2, _nh0.tyku = 1, _nh0.kaih = 1) : 599 != _ngx.ship_id && 610 != _ngx.ship_id || (_nh0.houg = 3, _nh0.tyku = 2, _nh0.kaih = 2), !_nh0.exists()) return _ngz;
            var _nh1 = _ngx.get_slotnums(342);
            return _ngz = _nh0.multiply(_nh1);
        };
    },
    78415: (_nh2, _nh3, _nh4) => {
        'use strict';
        var _nh5 = null;
        defineModule(_nh3);
        Object.defineProperty(_nh3, '__esModule', {
            'value': true
        }), _nh3.getSlot343PersonalEffect = void 0;
        var _nh6 = _nh4(74496);
        _nh3.getSlot343PersonalEffect = function(_nh7) {
            var _nh8 = null,
                _nh9 = new _nh6.SlotItemEffectModel(),
                _nha = new _nh6.SlotItemEffectModel();
            if (277 == _nh7.ship_id || 278 == _nh7.ship_id ? _nha.houg = 2 : 461 == _nh7.ship_id || 466 == _nh7.ship_id || 462 == _nh7.ship_id || 467 == _nh7.ship_id ? _nha.houg = 1 : 594 == _nh7.ship_id || 646 == _nh7.ship_id || 698 == _nh7.ship_id ? (_nha.houg = 3, _nha.tyku = 2, _nha.kaih = 1) : 599 != _nh7.ship_id && 610 != _nh7.ship_id || (_nha.houg = 5, _nha.tyku = 3, _nha.kaih = 3), !_nha.exists()) return _nh9;
            var _nhb = _nh7.get_slotnums(343);
            return _nh9 = _nha.multiply(_nhb);
        };
    },
    23090: (_nhc, _nhd, _nhe) => {
        'use strict';
        var _nhf = null;
        defineModule(_nhd);
        Object.defineProperty(_nhd, '__esModule', {
            'value': true
        }), _nhd.getSlot344PersonalEffect = void 0;
        var _nhg = _nhe(74496);
        _nhd.getSlot344PersonalEffect = function(_nhh) {
            var _nhi = null,
                _nhj = new _nhg.SlotItemEffectModel(),
                _nhk = new _nhg.SlotItemEffectModel();
            if (599 == _nhh.ship_id || 610 == _nhh.ship_id ? _nhk.houg = 3 : 555 == _nhh.ship_id || 560 == _nhh.ship_id ? (_nhk.houg = 2, _nhk.tais = 2) : 318 == _nhh.ship_id ? (_nhk.houg = 4, _nhk.tais = 1) : 282 == _nhh.ship_id ? (_nhk.houg = 2, _nhk.tais = 1) : 888 == _nhh.ship_id ? (_nhk.houg = 4, _nhk.tais = 2) : 883 == _nhh.ship_id && (_nhk.houg = 5, _nhk.tais = 2), !_nhk.exists()) return _nhj;
            var _nhl = _nhh.get_slotnums(344);
            return _nhj = _nhk.multiply(_nhl);
        };
    },
    18776: (_nhm, _nhn, _nho) => {
        'use strict';
        var _nhp = null;
        defineModule(_nhn);
        Object.defineProperty(_nhn, '__esModule', {
            'value': true
        }), _nhn.getSlot345PersonalEffect = void 0;
        var _nhq = _nho(74496);
        _nhn.getSlot345PersonalEffect = function(_nhr) {
            var _nhs = null,
                _nht = new _nhq.SlotItemEffectModel(),
                _nhu = new _nhq.SlotItemEffectModel();
            if (599 == _nhr.ship_id || 610 == _nhr.ship_id ? (_nhu.houg = 3, _nhu.kaih = 1) : 555 == _nhr.ship_id || 560 == _nhr.ship_id ? (_nhu.houg = 3, _nhu.tais = 2, _nhu.kaih = 2) : 318 == _nhr.ship_id ? (_nhu.houg = 5, _nhu.tais = 1, _nhu.kaih = 2) : 282 == _nhr.ship_id ? (_nhu.houg = 3, _nhu.tais = 1, _nhu.kaih = 1) : 888 == _nhr.ship_id ? (_nhu.houg = 4, _nhu.tais = 2, _nhu.kaih = 2) : 883 == _nhr.ship_id && (_nhu.houg = 5, _nhu.tais = 2, _nhu.kaih = 3), !_nhu.exists()) return _nht;
            var _nhv = _nhr.get_slotnums(345);
            return _nht = _nhu.multiply(_nhv);
        };
    },
    89058: (_nhw, _nhx, _nhy) => {
        'use strict';
        var _nhz = null;
        defineModule(_nhx);
        Object.defineProperty(_nhx, '__esModule', {
            'value': true
        }), _nhx.getSlot346PersonalEffect = void 0;
        var _ni0 = _nhy(74496);
        _nhx.getSlot346PersonalEffect = function(_ni1) {
            var _ni2 = null,
                _ni3 = new _ni0.SlotItemEffectModel();
            return 'やましおまる' == _ni1.yomi && (_ni3.kaih += 1, _ni3.tais += 1), _ni3;
        };
    },
    84372: (_ni4, _ni5, _ni6) => {
        'use strict';
        var _ni7 = null;
        defineModule(_ni5);
        Object.defineProperty(_ni5, '__esModule', {
            'value': true
        }), _ni5.getSlot347PersonalEffect = void 0;
        var _ni8 = _ni6(74496);
        _ni5.getSlot347PersonalEffect = function(_ni9) {
            var _nia = null,
                _nib = new _ni8.SlotItemEffectModel();
            return 'やましおまる' == _ni9.yomi && (_nib.kaih += 2, _nib.tais += 2), _nib;
        };
    },
    39656: (_nic, _nid, _nie) => {
        'use strict';
        var _nif = null;
        defineModule(_nid);
        Object.defineProperty(_nid, '__esModule', {
            'value': true
        }), _nid.getSlot356_357PersonalEffect = void 0;
        var _nig = _nie(74496);
        _nid.getSlot356_357PersonalEffect = function(_nih) {
            var _nii = null,
                _nij = new _nig.SlotItemEffectModel(),
                _nik = new _nig.SlotItemEffectModel();
            if (95 == _nih.ctype ? _nik.houg = 2 : 9 == _nih.ctype && (_nik.houg = 1), !_nik.exists()) return _nij;
            var _nil = _nih.get_slotnums(356) + _nih.get_slotnums(357);
            return _nij = _nik.multiply(_nil);
        };
    },
    66039: (_nim, _nin, _nio) => {
        'use strict';
        var _nip = null;
        defineModule(_nin);
        Object.defineProperty(_nin, '__esModule', {
            'value': true
        }), _nin.getSlot358PersonalEffect = void 0;
        var _niq = _nio(74496);
        _nin.getSlot358PersonalEffect = function(_nir) {
            var _nis = null,
                _nit = new _niq.SlotItemEffectModel(),
                _niu = new _niq.SlotItemEffectModel();
            if ('アメリカ' != _nir.getCountryName() && 67 != _nir.ctype && 78 != _nir.ctype && 82 != _nir.ctype && 88 != _nir.ctype && 108 != _nir.ctype && 112 != _nir.ctype) return _nit;
            _niu.houg += 1, _niu.kaih += 1, _niu.tyku += 1, 95 == _nir.ctype && (_niu.houg += 1, _niu.kaih += 2, _niu.tyku += 2);
            var _niv = _nir.get_slotnums(358);
            return _nit = _niu.multiply(_niv);
        };
    },
    64679: (_niw, _nix, _niy) => {
        'use strict';
        var _niz = null;
        defineModule(_nix);
        Object.defineProperty(_nix, '__esModule', {
            'value': true
        }), _nix.getSlot359PersonalEffect = void 0;
        var _nj0 = _niy(74496);
        _nix.getSlot359PersonalEffect = function(_nj1) {
            var _nj2 = null,
                _nj3 = new _nj0.SlotItemEffectModel(),
                _nj4 = new _nj0.SlotItemEffectModel();
            if ('パース' == _nj1.yomi ? (_nj4.houg = 2, _nj4.tyku = 2, _nj4.kaih = 1) : 'ゆうばり' == _nj1.yomi && (_nj4.houg = 1, _nj4.tyku = 1, _nj4.kaih = 1), 622 != _nj1.ship_id && 623 != _nj1.ship_id && 624 != _nj1.ship_id || (_nj4.houg += 1, _nj4.tyku += 1), !_nj4.exists()) return _nj3;
            var _nj5 = _nj1.get_slotnums(359);
            return _nj3 = _nj4.multiply(_nj5);
        };
    },
    69954: (_nj6, _nj7, _nj8) => {
        'use strict';
        var _nj9 = null;
        defineModule(_nj7);
        Object.defineProperty(_nj7, '__esModule', {
            'value': true
        }), _nj7.getSlot35PersonalEffect = void 0;
        var _nja = _nj8(74496);
        _nj7.getSlot35PersonalEffect = function(_njb) {
            var _njc = null,
                _njd = new _nja.SlotItemEffectModel(),
                _nje = new _nja.SlotItemEffectModel();
            return 149 == _njb.ship_id || 591 == _njb.ship_id || 592 == _njb.ship_id ? (_nje.houg += 1, _nje.tyku += 1) : 150 == _njb.ship_id ? _nje.tyku += 1 : 151 == _njb.ship_id || 593 == _njb.ship_id || 954 == _njb.ship_id ? (_nje.tyku += 1, _nje.kaih += 1) : 152 == _njb.ship_id && (_nje.houg += 1), _nje.exists() ? _njd = _nje.multiply(1) : _njd;
        };
    },
    95953: (_njf, _njg, _njh) => {
        'use strict';
        var _nji = null;
        defineModule(_njg);
        Object.defineProperty(_njg, '__esModule', {
            'value': true
        }), _njg.getSlot360_361PersonalEffect = void 0;
        var _njj = _njh(74496);
        _njg.getSlot360_361PersonalEffect = function(_njk) {
            var _njl = null,
                _njm = new _njj.SlotItemEffectModel(),
                _njn = new _njj.SlotItemEffectModel();
            if ('デ・ロイテル' == _njk.yomi ? (_njn.houg = 2, _njn.tyku = 2, _njn.kaih = 1) : 'ゴトランド' == _njk.yomi && (_njn.houg = 2, _njn.tyku = 1, _njn.kaih = 1), 41 == _njk.ctype && (_njn.houg = 1, _njn.tyku = 1), !_njn.exists()) return _njm;
            var _njo = _njk.get_slotnums(360) + _njk.get_slotnums(361);
            return _njm = _njn.multiply(_njo);
        };
    },
    86384: (_njp, _njq, _njr) => {
        'use strict';
        var _njs = null;
        defineModule(_njq);
        Object.defineProperty(_njq, '__esModule', {
            'value': true
        }), _njq.getSlot362_363PersonalEffect = void 0;
        var _njt = _njr(74496);
        _njq.getSlot362_363PersonalEffect = function(_nju) {
            var _njv = null,
                _njw = new _njt.SlotItemEffectModel(),
                _njx = new _njt.SlotItemEffectModel(),
                _njy = false;
            if (99 == _nju.ctype ? (_njx.houg = 1, _njx.tyku = 2, _njx.kaih = 1, _njy = true) : 34 == _nju.ctype || 21 == _nju.ctype ? (_njx.houg = -3, _njx.tyku = -3, _njx.kaih = -8, _njy = true) : 4 == _nju.ctype || 20 == _nju.ctype || 16 == _nju.ctype ? (_njx.houg = -3, _njx.tyku = -2, _njx.kaih = -6, _njy = true) : 89 == _nju.ctype || 56 == _nju.ctype ? (_njx.houg = -2, _njx.tyku = -1, _njx.kaih = -4, _njy = true) : 52 != _nju.ctype && 41 != _nju.ctype && 98 != _nju.ctype || (_njx.tyku = -1, _njx.kaih = -2, _njy = true), 'アメリカ' == _nju.getCountryName() && (_njx.tyku += 1, _njx.kaih += 1, _njy = true), 0 == _njy) return _njw;
            var _njz = _nju.get_slotnums(362) + _nju.get_slotnums(363);
            return _njw = _njx.multiply(_njz);
        };
    },
    65345: (_nk0, _nk1, _nk2) => {
        'use strict';
        var _nk3 = null;
        defineModule(_nk1);
        Object.defineProperty(_nk1, '__esModule', {
            'value': true
        }), _nk1.getSlot364PersonalEffect = void 0;
        var _nk4 = _nk2(74496);
        _nk1.getSlot364PersonalEffect = function(_nk5) {
            var _nk6 = null;
            new _nk4.SlotItemEffectModel();
            var _nk7 = new _nk4.SlotItemEffectModel();
            623 == _nk5.ship_id || 586 == _nk5.ship_id || 119 == _nk5.ship_id || 118 == _nk5.ship_id || 657 == _nk5.ship_id || 506 == _nk5.ship_id || 668 == _nk5.ship_id || 507 == _nk5.ship_id ? (_nk7.raig = 1, _nk7.kaih = -2, 119 == _nk5.ship_id ? _nk7.raig += 1 : 507 == _nk5.ship_id ? _nk7.raig += 2 : 623 == _nk5.ship_id && (_nk7.houg += 1, _nk7.raig += 3)) : (_nk7.houg = -1, _nk7.kaih = -7);
            var _nk8 = _nk5.get_slotnums(364);
            return _nk7.multiply(_nk8);
        };
    },
    46514: (_nk9, _nka, _nkb) => {
        'use strict';
        var _nkc = null;
        defineModule(_nka);
        Object.defineProperty(_nka, '__esModule', {
            'value': true
        }), _nka.getSlot365PersonalEffect = void 0;
        var _nkd = _nkb(74496);
        _nka.getSlot365PersonalEffect = function(_nke) {
            var _nkf = null,
                _nkg = new _nkd.SlotItemEffectModel(),
                _nkh = new _nkd.SlotItemEffectModel(),
                _nki = false;
            return 37 != _nke.ctype && 19 != _nke.ctype && 2 != _nke.ctype && 26 != _nke.ctype && 6 != _nke.ctype || (_nkh.houg += 1, _nki = true), 136 != _nke.ship_id && 148 != _nke.ship_id && 546 != _nke.ship_id && 541 != _nke.ship_id && 573 != _nke.ship_id && 911 != _nke.ship_id && 916 != _nke.ship_id && 593 != _nke.ship_id || (_nkh.houg += 1, _nki = true), 591 != _nke.ship_id && 592 != _nke.ship_id && 954 != _nke.ship_id || (_nkh.houg += 2, _nki = true), 0 == _nki ? _nkg : _nkg = _nkh.multiply(1);
        };
    },
    81976: (_nkj, _nkk, _nkl) => {
        'use strict';
        var _nkm = null;
        defineModule(_nkk);
        Object.defineProperty(_nkk, '__esModule', {
            'value': true
        }), _nkk.getSlot367PersonalEffect = void 0;
        var _nkn = _nkl(74496);
        _nkk.getSlot367PersonalEffect = function(_nko) {
            var _nkp = null,
                _nkq = new _nkn.SlotItemEffectModel(),
                _nkr = new _nkn.SlotItemEffectModel(),
                _nks = false;
            if ('ゴトランド' == _nko.yomi && (_nkr.houg += 2, _nkr.tais += 1, _nkr.kaih += 1, _nkr.saku += 1, _nks = true), 70 == _nko.ctype ? (_nkr.houg += 1, _nkr.tais += 1, _nkr.kaih += 1, _nkr.saku += 1, _nks = true) : 72 == _nko.ctype || 62 == _nko.ctype ? (_nkr.houg += 1, _nkr.kaih += 1, _nkr.saku += 1, _nks = true) : 67 != _nko.ctype && 78 != _nko.ctype && 82 != _nko.ctype && 88 != _nko.ctype && 108 != _nko.ctype && 112 != _nko.ctype || (_nkr.houg += 2, _nkr.kaih += 2, _nkr.saku += 2, _nks = true), 0 == _nks) return _nkq;
            var _nkt = _nko.get_slotnums(367);
            return _nkq = _nkr.multiply(_nkt);
        };
    },
    89331: (_nku, _nkv, _nkw) => {
        'use strict';
        var _nkx = null;
        defineModule(_nkv);
        Object.defineProperty(_nkv, '__esModule', {
            'value': true
        }), _nkv.getSlot368PersonalEffect = void 0;
        var _nky = _nkw(74496);
        _nkv.getSlot368PersonalEffect = function(_nkz) {
            var _nl0 = null,
                _nl1 = new _nky.SlotItemEffectModel(),
                _nl2 = new _nky.SlotItemEffectModel(),
                _nl3 = false;
            if ('ゴトランド' == _nkz.yomi && (_nl2.houg = 4, _nl2.tais = 3, _nl2.kaih = 2, _nl2.saku = 3, _nl3 = true, 630 == _nkz.ship_id && (_nl1.houg += 2, _nl1.raig += 2, _nl1.kaih += 1, _nl1.saku += 1)), 70 == _nkz.ctype ? (_nl2.houg = 2, _nl2.tais = 3, _nl2.kaih = 1, _nl2.saku = 2, _nl3 = true) : 72 == _nkz.ctype || 62 == _nkz.ctype ? (_nl2.houg += 1, _nl2.tais += 2, _nl2.kaih += 1, _nl2.saku += 2, _nl3 = true) : 67 != _nkz.ctype && 78 != _nkz.ctype && 82 != _nkz.ctype && 88 != _nkz.ctype && 108 != _nkz.ctype && 112 != _nkz.ctype || (_nl2.houg += 2, _nl2.tais += 2, _nl2.kaih += 2, _nl2.saku += 2, _nl3 = true), 0 == _nl3) return _nl1;
            var _nl4 = _nkz.get_slotnums(368);
            return _nl1.add(_nl2.multiply(_nl4)), _nl1;
        };
    },
    73973: (_nl5, _nl6, _nl7) => {
        'use strict';
        var _nl8 = null;
        defineModule(_nl6);
        Object.defineProperty(_nl6, '__esModule', {
            'value': true
        }), _nl6.getSlot369PersonalEffect = void 0;
        var _nl9 = _nl7(74496);
        _nl6.getSlot369PersonalEffect = function(_nla) {
            var _nlb = null,
                _nlc = new _nl9.SlotItemEffectModel(),
                _nld = new _nl9.SlotItemEffectModel(),
                _nle = false;
            if ('ゴトランド' == _nla.yomi && (_nld.houg = 5, _nld.tais = 4, _nld.kaih = 4, _nld.saku = 3, _nle = true, 630 == _nla.ship_id && (_nlc.houg += 3, _nlc.raig += 3, _nlc.kaih += 2, _nlc.saku += 2)), 70 == _nla.ctype ? (_nld.houg += 3, _nld.tais += 3, _nld.kaih += 2, _nld.saku += 3, _nle = true) : 72 == _nla.ctype || 62 == _nla.ctype ? (_nld.houg += 2, _nld.tais += 2, _nld.kaih += 1, _nld.saku += 2, _nle = true) : 67 != _nla.ctype && 78 != _nla.ctype && 82 != _nla.ctype && 88 != _nla.ctype && 108 != _nla.ctype && 112 != _nla.ctype || (_nld.houg += 2, _nld.tais += 2, _nld.kaih += 2, _nld.saku += 2, _nle = true), 0 == _nle) return _nlc;
            var _nlf = _nla.get_slotnums(369);
            return _nlc.add(_nld.multiply(_nlf)), _nlc;
        };
    },
    21178: (_nlg, _nlh, _nli) => {
        'use strict';
        var _nlj = null;
        defineModule(_nlh);
        Object.defineProperty(_nlh, '__esModule', {
            'value': true
        }), _nlh.getSlot370PersonalEffect = void 0;
        var _nlk = _nli(74496);
        _nlh.getSlot370PersonalEffect = function(_nll) {
            var _nlm = null,
                _nln = new _nlk.SlotItemEffectModel(),
                _nlo = new _nlk.SlotItemEffectModel(),
                _nlp = false;
            if ('ゴトランド' == _nll.yomi && (_nlo.houg = 1, _nlo.tais = 3, _nlo.kaih = 1, _nlo.saku = 2, _nlp = true), 70 == _nll.ctype ? (_nlo.houg += 1, _nlo.tais += 3, _nlo.kaih += 1, _nlo.saku += 1, _nlp = true) : 72 == _nll.ctype || 62 == _nll.ctype ? (_nlo.houg += 1, _nlo.tais += 2, _nlo.kaih += 1, _nlo.saku += 1, _nlp = true) : 67 != _nll.ctype && 78 != _nll.ctype && 82 != _nll.ctype && 88 != _nll.ctype && 108 != _nll.ctype && 112 != _nll.ctype || (_nlo.houg += 2, _nlo.tais += 3, _nlo.kaih += 2, _nlo.saku += 2, _nlp = true, 'ウォースパイト' == _nll.yomi && (_nln.houg += 4, _nln.kaih += 1, _nln.saku += 1)), 0 == _nlp) return _nln;
            var _nlq = _nll.get_slotnums(370);
            return _nln.add(_nlo.multiply(_nlq)), _nln;
        };
    },
    5079: (_nlr, _nls, _nlt) => {
        'use strict';
        var _nlu = null;
        defineModule(_nls);
        Object.defineProperty(_nls, '__esModule', {
            'value': true
        }), _nls.getSlot371PersonalEffect = void 0;
        var _nlv = _nlt(74496);
        _nls.getSlot371PersonalEffect = function(_nlw) {
            var _nlx = null,
                _nly = new _nlv.SlotItemEffectModel(),
                _nlz = new _nlv.SlotItemEffectModel(),
                _nm0 = false;
            if ('ゴトランド' == _nlw.yomi && (_nlz.houg = 4, _nlz.tais = 2, _nlz.kaih = 3, _nlz.saku = 6, _nm0 = true, 630 == _nlw.ship_id && (_nly.houg += 2, _nly.kaih += 2, _nly.saku += 3)), 70 == _nlw.ctype ? (_nlz.houg += 2, _nlz.tais += 1, _nlz.kaih += 2, _nlz.saku += 4, _nm0 = true) : 79 == _nlw.ctype ? (_nlz.houg += 2, _nlz.kaih += 1, _nlz.saku += 3, _nm0 = true) : 67 != _nlw.ctype && 78 != _nlw.ctype && 82 != _nlw.ctype && 88 != _nlw.ctype && 108 != _nlw.ctype && 112 != _nlw.ctype || (_nlz.houg += 3, _nlz.tais += 1, _nlz.kaih += 2, _nlz.saku += 3, _nm0 = true, 88 == _nlw.ctype && (_nly.houg += 3, _nly.kaih += 2, _nly.saku += 2)), 0 == _nm0) return _nly;
            var _nm1 = _nlw.get_slotnums(371);
            return _nly.add(_nlz.multiply(_nm1)), _nly;
        };
    },
    95014: (_nm2, _nm3, _nm4) => {
        'use strict';
        var _nm5 = null;
        defineModule(_nm3);
        Object.defineProperty(_nm3, '__esModule', {
            'value': true
        }), _nm3.getSlot372PersonalEffect = void 0;
        var _nm6 = _nm4(74496);
        _nm3.getSlot372PersonalEffect = function(_nm7) {
            var _nm8 = null,
                _nm9 = new _nm6.SlotItemEffectModel(),
                _nma = false,
                _nmb = new _nm6.SlotItemEffectModel();
            if ('しょうかく' == _nm7.yomi || 'ずいかく' == _nm7.yomi || 'たいほう' == _nm7.yomi ? (_nmb.houg += 1, _nma = true, _nm9.raig += 1) : 'じゅんよう' != _nm7.yomi && 'ひよう' != _nm7.yomi || (_nmb.houg += 1, _nma = true), 108 == _nm7.ship_id || 109 == _nm7.ship_id || 291 == _nm7.ship_id || 292 == _nm7.ship_id || 296 == _nm7.ship_id || 297 == _nm7.ship_id ? (_nmb.houg += 1, _nma = true) : 116 == _nm7.ship_id || 74 == _nm7.ship_id || 117 == _nm7.ship_id || 282 == _nm7.ship_id || 185 == _nm7.ship_id ? (_nmb.tais += 1, _nma = true) : 560 == _nm7.ship_id || 555 == _nm7.ship_id || 318 == _nm7.ship_id ? (_nmb.tais += 1, _nma = true, _nm9.raig += 1) : 508 == _nm7.ship_id || 509 == _nm7.ship_id ? (_nmb.houg += 1, _nma = true) : 883 != _nm7.ship_id && 888 != _nm7.ship_id || (_nmb.houg += 2, _nmb.tais += 1, _nma = true, _nm9.raig += 2), 0 == _nma) return _nm9;
            var _nmc = _nm7.get_slotnums(372);
            return _nm9.add(_nmb.multiply(_nmc)), _nm9;
        };
    },
    53099: (_nmd, _nme, _nmf) => {
        'use strict';
        var _nmg = null;
        defineModule(_nme);
        Object.defineProperty(_nme, '__esModule', {
            'value': true
        }), _nme.getSlot373PersonalEffect = void 0;
        var _nmh = _nmf(74496);
        _nme.getSlot373PersonalEffect = function(_nmi) {
            var _nmj = null,
                _nmk = new _nmh.SlotItemEffectModel(),
                _nml = new _nmh.SlotItemEffectModel(),
                _nmm = false;
            if ('しょうかく' == _nmi.yomi ? (_nml.houg += 2, _nmm = true, _nmk.raig += 2, _nmk.kaih += 2) : 'ずいかく' == _nmi.yomi ? (_nml.houg += 1, _nmm = true, _nmk.raig += 2, _nmk.kaih += 3) : 'たいほう' == _nmi.yomi ? (_nml.houg += 1, _nmm = true, _nmk.raig += 2, _nmk.kaih += 2) : 'じゅんよう' != _nmi.yomi && 'ひよう' != _nmi.yomi || (_nml.houg += 1, _nmm = true, _nmk.raig += 1, _nmk.kaih += 1), 108 == _nmi.ship_id || 109 == _nmi.ship_id ? (_nml.houg += 1, _nmm = true) : 291 == _nmi.ship_id || 292 == _nmi.ship_id ? (_nml.houg += 1, _nmm = true, _nmk.raig += 1) : 296 == _nmi.ship_id || 297 == _nmi.ship_id ? (_nml.houg += 1, _nmm = true, _nmk.raig += 1, _nmk.kaih += 1) : 116 == _nmi.ship_id || 74 == _nmi.ship_id ? (_nml.tais += 1, _nmm = true) : 117 == _nmi.ship_id || 282 == _nmi.ship_id || 185 == _nmi.ship_id ? (_nml.houg += 1, _nml.tais += 1, _nmm = true, _nmk.raig += 1) : 560 == _nmi.ship_id || 555 == _nmi.ship_id || 318 == _nmi.ship_id ? (_nml.houg += 1, _nml.tais += 2, _nmm = true, _nmk.raig += 1, _nmk.kaih += 1) : 508 == _nmi.ship_id || 509 == _nmi.ship_id ? (_nml.houg += 1, _nmm = true, _nmk.raig += 2, _nmk.kaih += 2) : 888 == _nmi.ship_id ? (_nml.houg += 2, _nml.tais += 2, _nmm = true, _nmk.raig += 2, _nmk.kaih += 2) : 883 == _nmi.ship_id && (_nml.houg += 1, _nml.tais += 2, _nmm = true, _nmk.raig += 3, _nmk.kaih += 4), 0 == _nmm) return _nmk;
            var _nmn = _nmi.get_slotnums(373);
            return _nmk.add(_nml.multiply(_nmn)), _nmk;
        };
    },
    76201: (_nmo, _nmp, _nmq) => {
        'use strict';
        var _nmr = null;
        defineModule(_nmp);
        Object.defineProperty(_nmp, '__esModule', {
            'value': true
        }), _nmp.getSlot374PersonalEffect = void 0;
        var _nms = _nmq(74496);
        _nmp.getSlot374PersonalEffect = function(_nmt) {
            var _nmu = null,
                _nmv = new _nms.SlotItemEffectModel(),
                _nmw = new _nms.SlotItemEffectModel(),
                _nmx = false;
            if ('しょうかく' == _nmt.yomi ? (_nmw.houg += 3, _nmx = true, _nmv.raig += 3, _nmv.kaih += 3) : 'ずいかく' == _nmt.yomi ? (_nmw.houg += 2, _nmx = true, _nmv.raig += 3, _nmv.kaih += 4) : 'たいほう' == _nmt.yomi ? (_nmw.houg += 2, _nmx = true, _nmv.raig += 3, _nmv.kaih += 2) : 'じゅんよう' != _nmt.yomi && 'ひよう' != _nmt.yomi || (_nmw.houg += 1, _nmx = true, _nmv.raig += 2, _nmv.kaih += 2), 108 == _nmt.ship_id || 109 == _nmt.ship_id ? (_nmw.houg += 1, _nmx = true, _nmv.raig += 1) : 291 == _nmt.ship_id || 292 == _nmt.ship_id ? (_nmw.houg += 1, _nmw.tais += 1, _nmx = true, _nmv.raig += 1) : 296 == _nmt.ship_id || 297 == _nmt.ship_id ? (_nmw.houg += 1, _nmw.tais += 1, _nmx = true, _nmv.raig += 1, _nmv.kaih += 1) : 116 == _nmt.ship_id || 74 == _nmt.ship_id ? (_nmw.houg += 1, _nmw.tais += 1, _nmx = true) : 117 == _nmt.ship_id || 282 == _nmt.ship_id || 185 == _nmt.ship_id ? (_nmw.houg += 1, _nmw.tais += 2, _nmx = true, _nmv.raig += 1, _nmv.kaih += 1) : 560 == _nmt.ship_id || 555 == _nmt.ship_id || 318 == _nmt.ship_id ? (_nmw.houg += 1, _nmw.tais += 3, _nmx = true, _nmv.raig += 1, _nmv.kaih += 2) : 508 == _nmt.ship_id || 509 == _nmt.ship_id ? (_nmw.houg += 1, _nmw.tais += 2, _nmx = true, _nmv.raig += 2, _nmv.kaih += 3) : 888 == _nmt.ship_id ? (_nmw.houg += 3, _nmw.tais += 3, _nmx = true, _nmv.raig += 2, _nmv.kaih += 3) : 883 == _nmt.ship_id && (_nmw.houg += 2, _nmw.tais += 3, _nmx = true, _nmv.raig += 3, _nmv.kaih += 5), 0 == _nmx) return _nmv;
            var _nmy = _nmt.get_slotnums(374);
            return _nmv.add(_nmw.multiply(_nmy)), _nmv;
        };
    },
    24931: (_nmz, _nn0, _nn1) => {
        'use strict';
        var _nn2 = null;
        defineModule(_nn0);
        Object.defineProperty(_nn0, '__esModule', {
            'value': true
        }), _nn0.getSlot375PersonalEffect = void 0;
        var _nn3 = _nn1(74496);
        _nn0.getSlot375PersonalEffect = function(_nn4) {
            var _nn5 = null,
                _nn6 = new _nn3.SlotItemEffectModel(),
                _nn7 = new _nn3.SlotItemEffectModel(),
                _nn8 = false;
            if (69 != _nn4.ctype && 83 != _nn4.ctype && 84 != _nn4.ctype && 105 != _nn4.ctype && 116 != _nn4.ctype && 118 != _nn4.ctype || (_nn7.tyku += 3, _nn7.houg += 3, _nn7.kaih += 3, _nn7.tais += 3, _nn8 = true), 'かが' == _nn4.yomi && (_nn7.tyku += 1, _nn7.houg += 1, _nn7.kaih += 1, _nn7.tais += 1, _nn8 = true), 0 == _nn8) return _nn6;
            var _nn9 = _nn4.get_slotnums(375);
            return _nn6.add(_nn7.multiply(_nn9)), _nn6;
        };
    },
    60978: (_nna, _nnb, _nnc) => {
        'use strict';
        var _nnd = null;
        defineModule(_nnb);
        Object.defineProperty(_nnb, '__esModule', {
            'value': true
        }), _nnb.getSlot376PersonalEffect = void 0;
        var _nne = _nnc(74496);
        _nnb.getSlot376PersonalEffect = function(_nnf) {
            var _nng = null,
                _nnh = new _nne.SlotItemEffectModel(),
                _nni = new _nne.SlotItemEffectModel(),
                _nnj = false;
            if ('アメリカ' == _nnf.getCountryName() ? (_nni.houg += 2, _nni.raig += 4, _nnj = true) : 67 == _nnf.ctype || 78 == _nnf.ctype || 82 == _nnf.ctype || 88 == _nnf.ctype || 108 == _nnf.ctype || 112 == _nnf.ctype ? (_nni.houg += 1, _nni.raig += 2, _nnj = true) : 96 == _nnf.ctype && (_nni.houg += 1, _nni.raig += 1, _nnj = true), 0 == _nnj) return _nnh;
            var _nnk = _nnf.get_slotnums(376);
            return _nnh.add(_nni.multiply(_nnk)), _nnh;
        };
    },
    74312: (_nnl, _nnm, _nnn) => {
        'use strict';
        var _nno = null;
        defineModule(_nnm);
        Object.defineProperty(_nnm, '__esModule', {
            'value': true
        }), _nnm.getSlot377PersonalEffect = void 0;
        var _nnp = _nnn(74496);
        _nnm.getSlot377PersonalEffect = function(_nnq) {
            var _nnr = null,
                _nns = new _nnp.SlotItemEffectModel();
            return 'アメリカ' == _nnq.getCountryName() ? (_nns.tais += 2, _nns.kaih += 1, 629 == _nnq.ship_id && (_nns.tais += 1, _nns.kaih += 2)) : 67 != _nnq.ctype && 78 != _nnq.ctype && 82 != _nnq.ctype && 88 != _nnq.ctype && 108 != _nnq.ctype && 112 != _nnq.ctype && 96 != _nnq.ctype || (_nns.tais += 1, _nns.kaih += 1), 651 != _nnq.ship_id && 656 != _nnq.ship_id || (_nns.tais += 1, _nns.kaih += 2), _nns;
        };
    },
    54350: (_nnt, _nnu, _nnv) => {
        'use strict';
        var _nnw = null;
        defineModule(_nnu);
        Object.defineProperty(_nnu, '__esModule', {
            'value': true
        }), _nnu.getSlot378PersonalEffect = void 0;
        var _nnx = _nnv(74496);
        _nnu.getSlot378PersonalEffect = function(_nny) {
            var _nnz = null,
                _no0 = new _nnx.SlotItemEffectModel();
            return 'アメリカ' == _nny.getCountryName() ? (_no0.tais += 3, _no0.kaih += 1, 629 == _nny.ship_id && (_no0.tais += 1, _no0.kaih += 1)) : 67 == _nny.ctype || 78 == _nny.ctype || 82 == _nny.ctype || 88 == _nny.ctype || 108 == _nny.ctype || 112 == _nny.ctype ? (_no0.tais += 2, _no0.kaih += 1) : 96 == _nny.ctype && (_no0.tais += 1, _no0.kaih += 1), 651 != _nny.ship_id && 656 != _nny.ship_id || (_no0.tais += 1, _no0.kaih += 1), _no0;
        };
    },
    26262: function(_no1, _no2, _no3) {
        'use strict';
        var _no4 = null;
        var _no5 = this && this.__importDefault || function(_no6) {
            var _no7 = null;
            return _no6 && _no6.__esModule ? _no6 : {
                'default': _no6
            };
        };
        defineModule(_no2);
        Object.defineProperty(_no2, '__esModule', {
            'value': true
        }), _no2.getSlot379PersonalEffect = void 0;
        var _no8 = _no3(74496),
            _no9 = _no5(_no3(18622));
        _no2.getSlot379PersonalEffect = function(_noa) {
            var _nob = null,
                _noc = new _no8.SlotItemEffectModel(),
                _nod = false,
                _noe = new _no8.SlotItemEffectModel();
            if (1 == _noa.stype ? (_noe.tyku += 2, _noe.houg += 1, _nod = true) : 21 != _noa.stype && 16 != _noa.stype || (_noe.tyku += 1, _noe.houg += 1, _nod = true), 66 == _noa.ctype || 28 == _noa.ctype ? (_noe.houg += 1, _noe.tyku += 2, _nod = true) : 101 == _noa.ctype && (_noe.tyku += 2, _noe.houg += 1, _noc.tyku += 2, _noc.houg += 2, _nod = true), 'ゆら' == _noa.yomi || 'なか' == _noa.yomi || 'きぬ' == _noa.yomi || 'いすず' == _noa.yomi ? (_noe.houg += 2, _nod = true) : 'おおい' != _noa.yomi && 'きたかみ' != _noa.yomi || (_noe.tyku += 2, _noe.houg += 2, _nod = true), 'ゆら' != _noa.yomi && 'なか' != _noa.yomi && 'きぬ' != _noa.yomi && 'いすず' != _noa.yomi && 'ゆうばり' != _noa.yomi || (_noe.tais += 1, _nod = true), 'てんりゅう' != _noa.yomi && 'たつた' != _noa.yomi && 'ゆうばり' != _noa.yomi || (_noe.houg += 1, _nod = true), 488 == _noa.ship_id ? (_noe.tyku += 4, _nod = true) : 220 == _noa.ship_id ? (_noe.tyku += 3, _nod = true) : 23 == _noa.ship_id ? (_noe.tyku += 2, _nod = true) : 160 == _noa.ship_id || 487 == _noa.ship_id || 141 == _noa.ship_id ? (_noe.tyku += 3, _nod = true) : 224 == _noa.ship_id || 289 == _noa.ship_id || 219 == _noa.ship_id || 56 == _noa.ship_id || 113 == _noa.ship_id || 22 == _noa.ship_id ? (_noe.tyku += 2, _nod = true) : 651 != _noa.ship_id && 656 != _noa.ship_id || (_noe.tyku += 3, _noe.houg += 3, 656 == _noa.ship_id && (_noe.kaih += 3, _noe.tais += 2), _nod = true), 488 != _noa.ship_id && 160 != _noa.ship_id && 487 != _noa.ship_id && 141 != _noa.ship_id || (_noe.tais += 1, _nod = true), 477 != _noa.ship_id && 478 != _noa.ship_id && 624 != _noa.ship_id || (_noe.tais += 2, _nod = true), 477 != _noa.ship_id && 478 != _noa.ship_id && 624 != _noa.ship_id && 622 != _noa.ship_id || (_noe.tyku += 2, _nod = true), 652 != _noa.ship_id && 657 != _noa.ship_id && 547 != _noa.ship_id && 146 != _noa.ship_id || (_noc.houg += 2), 652 != _noa.ship_id && 657 != _noa.ship_id && 547 != _noa.ship_id && 146 != _noa.ship_id || (_noc.tyku += 2), _nod) {
                var _nof = _noa.get_slotnums(379);
                _noc.add(_noe.multiply(_nof));
            }
            var _nog = new _no8.SlotItemEffectModel(),
                _noh = false;
            16 == _noa.stype || 3 == _noa.stype || 4 == _noa.stype || 21 == _noa.stype ? (_nog.houg += 1, _nog.kaih += 2, _noh = true) : 1 == _noa.stype && (_nog.houg += 1, _nog.kaih += 4, _noh = true), 66 == _noa.ctype || 28 == _noa.ctype || 21 == _noa.ctype || 34 == _noa.ctype ? (_nog.houg += 2, _nog.kaih += 3, _noh = true) : 101 == _noa.ctype && (_nog.houg += 4, _nog.kaih += 3, _noh = true), 488 == _noa.ship_id || 651 == _noa.ship_id || 656 == _noa.ship_id ? (_nog.houg += 2, _nog.kaih += 2, _noh = true) : 487 == _noa.ship_id || 160 == _noa.ship_id || 141 == _noa.ship_id || 118 == _noa.ship_id || 119 == _noa.ship_id ? (_nog.houg += 1, _nog.kaih += 1, _noh = true) : 652 != _noa.ship_id && 657 != _noa.ship_id && 547 != _noa.ship_id && 146 != _noa.ship_id || (_nog.houg += 1, _nog.kaih += 1, _noh = true);
            var _noi = new _no8.SlotItemEffectModel(),
                _noj = false;
            if (656 == _noa.ship_id && (_noi.tyku += 3, _noi.kaih += 2, _noj = true), _noh || _noj) {
                for (var _nok = 0, _nol = 0, _nom = 0, _non = _noa.have_slot_ids(); _nom < _non.length; _nom++) {
                    var _noo = _non[_nom],
                        _nop = _no9.default.model.slot.getMst(_noo),
                        _noq = _nop.equipType;
                    12 != _noq && 13 != _noq || (_nop.sakuteki >= 5 && (_nok += _noa.get_slotnums(parseInt(_noo))), _nop.taiku >= 2 && (_nol += _noa.get_slotnums(parseInt(_noo))));
                }
                _noh && _nok > 0 && _noc.add(_nog), _noj && _nol > 0 && _noc.add(_noi);
            }
            return _noc;
        };
    },
    45530: function(_nor, _nos, _not) {
        'use strict';
        var _nou = null;
        var _nov = this && this.__importDefault || function(_now) {
            var _nox = null;
            return _now && _now.__esModule ? _now : {
                'default': _now
            };
        };
        defineModule(_nos);
        Object.defineProperty(_nos, '__esModule', {
            'value': true
        }), _nos.getSlot380PersonalEffect = void 0;
        var _noy = _not(74496),
            _noz = _nov(_not(18622));
        _nos.getSlot380PersonalEffect = function(_np0) {
            var _np1 = null,
                _np2 = new _noy.SlotItemEffectModel(),
                _np3 = false,
                _np4 = new _noy.SlotItemEffectModel();
            if (21 != _np0.stype && 16 != _np0.stype || (_np4.tyku += 2, _np4.houg += 1, _np3 = true), 101 == _np0.ctype && (_np4.tyku += 2, _np4.houg += 1, _np3 = true, _np2.tyku += 2, _np2.houg += 2), 'ゆら' == _np0.yomi || 'なか' == _np0.yomi || 'きぬ' == _np0.yomi || 'いすず' == _np0.yomi ? (_np4.houg += 2, _np3 = true) : 'おおい' != _np0.yomi && 'きたかみ' != _np0.yomi || (_np4.tyku += 2, _np4.houg += 3, _np3 = true), 'ゆら' != _np0.yomi && 'なか' != _np0.yomi && 'きぬ' != _np0.yomi && 'いすず' != _np0.yomi && 'ゆうばり' != _np0.yomi || (_np4.tais += 1, _np3 = true), 'てんりゅう' != _np0.yomi && 'たつた' != _np0.yomi && 'ゆうばり' != _np0.yomi || (_np4.houg += 1, _np3 = true), 488 == _np0.ship_id ? (_np4.tyku += 4, _np3 = true) : 220 == _np0.ship_id ? (_np4.tyku += 3, _np3 = true) : 23 == _np0.ship_id ? (_np4.tyku += 2, _np3 = true) : 160 == _np0.ship_id || 487 == _np0.ship_id || 141 == _np0.ship_id ? (_np4.tyku += 3, _np3 = true) : 224 == _np0.ship_id || 289 == _np0.ship_id || 219 == _np0.ship_id || 56 == _np0.ship_id || 113 == _np0.ship_id || 22 == _np0.ship_id ? (_np4.tyku += 2, _np3 = true) : 651 == _np0.ship_id || 656 == _np0.ship_id ? (_np4.tyku += 3, _np4.houg += 3, _np3 = true) : 407 != _np0.ship_id && 665 != _np0.ship_id || (_np4.houg += 2, _np4.tyku += 2, _np3 = true, _np2.houg += 1, _np2.tyku += 1, _np2.kaih += 2), 488 != _np0.ship_id && 160 != _np0.ship_id && 487 != _np0.ship_id && 141 != _np0.ship_id || (_np4.tais += 1, _np3 = true), 477 != _np0.ship_id && 478 != _np0.ship_id && 624 != _np0.ship_id || (_np4.tais += 2, _np3 = true), 477 != _np0.ship_id && 478 != _np0.ship_id && 624 != _np0.ship_id && 622 != _np0.ship_id || (_np4.tyku += 2, _np3 = true), 652 != _np0.ship_id && 657 != _np0.ship_id || (_np4.houg += 3, _np3 = true), 547 != _np0.ship_id && 146 != _np0.ship_id || (_np2.houg += 2), 652 != _np0.ship_id && 657 != _np0.ship_id && 547 != _np0.ship_id && 146 != _np0.ship_id || (_np2.tyku += 2), _np3) {
                var _np5 = _np0.get_slotnums(380);
                _np2.add(_np4.multiply(_np5));
            }
            var _np6 = new _noy.SlotItemEffectModel(),
                _np7 = false,
                _np8 = new _noy.SlotItemEffectModel(),
                _np9 = false,
                _npa = false;
            if (16 != _np0.stype && 3 != _np0.stype && 4 != _np0.stype && 21 != _np0.stype || (_np6.houg += 2, _np6.kaih += 1, _np7 = true), 101 == _np0.ctype && (_np6.houg += 4, _np6.kaih += 3, _np7 = true), 488 != _np0.ship_id && 487 != _np0.ship_id && 160 != _np0.ship_id && 141 != _np0.ship_id && 118 != _np0.ship_id && 119 != _np0.ship_id && 651 != _np0.ship_id && 656 != _np0.ship_id || (_np6.houg += 1, _np6.kaih += 2, _np7 = true), 652 == _np0.ship_id || 657 == _np0.ship_id || 547 == _np0.ship_id || 146 == _np0.ship_id ? (_np6.houg += 1, _np6.kaih += 3, _np7 = true) : 407 != _np0.ship_id && 665 != _np0.ship_id || (_npa = true, _np7 = true, _np6.houg += 2, _np6.kaih += 1, _np9 = true, _np8.houg += 1, _np8.tyku += 2, _np8.kaih += 1), _np7 || _npa) {
                for (var _npb = 0, _npc = 0, _npd = 0, _npe = _np0.have_slot_ids(); _npd < _npe.length; _npd++) {
                    var _npf = _npe[_npd],
                        _npg = _noz.default.model.slot.getMst(_npf),
                        _nph = _npg.equipType;
                    12 == _nph || 13 == _nph ? _npg.sakuteki >= 5 && (_npb += _np0.get_slotnums(parseInt(_npf))) : 21 == _nph && (_npc += _np0.get_slotnums(parseInt(_npf)));
                }
                _np7 && _npb > 0 && _np2.add(_np6), _np9 && _npc > 0 && _np2.add(_np8);
            }
            return _np2;
        };
    },
    44053: (_npi, _npj, _npk) => {
        'use strict';
        var _npl = null;
        defineModule(_npj);
        Object.defineProperty(_npj, '__esModule', {
            'value': true
        }), _npj.getSlot381PersonalEffect = void 0;
        var _npm = _npk(74496);
        _npj.getSlot381PersonalEffect = function(_npn) {
            var _npo = null,
                _npp = new _npm.SlotItemEffectModel(),
                _npq = false,
                _npr = new _npm.SlotItemEffectModel(),
                _nps = 0;
            if ('アメリカ' == _npn.getCountryName() && (_npr.houg += 1, 102 == _npn.ctype && (_npr.houg += 1), _npq = true, _nps = 1), 0 == _npq) return _npp;
            var _npt = _npn.get_slotnums(381);
            if (_npp.add(_npr.multiply(_npt)), 0 == _nps) return _npp;
            var _npu = _npn.get_each_level_nums(381),
                _npv = 0;
            return _npu.map(function(_npw, _npx) {
                _npx >= 6 && (_npv += _npw);
            }), 1 == _nps && (_npp.houg += 1 * _npv), _npp;
        };
    },
    65441: function(_npy, _npz, _nq0) {
        'use strict';
        var _nq1 = null;
        var _nq2 = this && this.__importDefault || function(_nq3) {
            var _nq4 = null;
            return _nq3 && _nq3.__esModule ? _nq3 : {
                'default': _nq3
            };
        };
        defineModule(_npz);
        Object.defineProperty(_npz, '__esModule', {
            'value': true
        }), _npz.getSlot382PersonalEffect = void 0;
        var _nq5 = _nq0(74496),
            _nq6 = _nq2(_nq0(18622));
        _npz.getSlot382PersonalEffect = function(_nq7) {
            var _nq8 = null,
                _nq9 = new _nq5.SlotItemEffectModel(),
                _nqa = false,
                _nqb = new _nq5.SlotItemEffectModel(),
                _nqc = false,
                _nqd = new _nq5.SlotItemEffectModel(),
                _nqe = new _nq5.SlotItemEffectModel(),
                _nqf = 2;
            1 == _nq7.stype && (_nqb.tyku += 2, _nqb.kaih += 2, _nqb.tais += 1, _nqa = true, _nqd.houg += 2, _nqd.kaih += 3, _nqe.tyku += 2, _nqe.kaih += 3, _nqc = true, _nqf = 1), 66 != _nq7.ctype && 28 != _nq7.ctype && 101 != _nq7.ctype || (_nqb.tyku += 2, _nqb.kaih += 1, _nqa = true, _nqd.houg += 1, _nqd.kaih += 2, _nqe.tyku += 2, _nqe.kaih += 2, _nqc = true, _nqf = 1), 'ゆら' != _nq7.yomi && 'なか' != _nq7.yomi && 'きぬ' != _nq7.yomi || (_nqb.tyku += 1, _nqa = true), 488 == _nq7.ship_id || 220 == _nq7.ship_id ? (_nqb.kaih += 1, _nqa = true, 488 == _nq7.ship_id && (_nqd.houg += 1, _nqd.kaih += 1, _nqe.tyku += 2, _nqe.kaih += 2, _nqc = true, _nqf = 1)) : 160 == _nq7.ship_id || 224 == _nq7.ship_id ? (_nqb.kaih += 1, _nqa = true, 160 == _nq7.ship_id && (_nqd.houg += 1, _nqd.kaih += 1, _nqe.tyku += 2, _nqe.kaih += 2, _nqc = true)) : 487 == _nq7.ship_id || 289 == _nq7.ship_id ? (_nqb.kaih += 1, _nqa = true, 487 == _nq7.ship_id && (_nqd.houg += 1, _nqd.kaih += 1, _nqe.tyku += 2, _nqe.kaih += 2, _nqc = true)) : 656 == _nq7.ship_id ? (_nqb.tyku += 3, _nqb.kaih += 2, _nqa = true, _nqd.houg += 2, _nqd.kaih += 2, _nqe.tyku += 3, _nqe.kaih += 2, _nqc = true, _nqf = 1) : 145 != _nq7.ship_id && 961 != _nq7.ship_id || (_nqf = 1);
            for (var _nqg = 0, _nqh = 0, _nqi = 0, _nqj = _nq7.have_slot_ids(); _nqi < _nqj.length; _nqi++) {
                var _nqk = _nqj[_nqi],
                    _nql = _nq6.default.model.slot.getMst(_nqk),
                    _nqm = _nql.equipType;
                12 != _nqm && 13 != _nqm || (_nql.sakuteki >= 5 && (_nqg += _nq7.get_slotnums(parseInt(_nqk))), _nql.taiku >= 2 && (_nqh += _nq7.get_slotnums(parseInt(_nqk))));
            }
            for (var _nqn = [], _nqo = function(_nqp) {
                    var _nqq = null;
                    if (null == _nq7.have_slots_dict[_nqp]) return 'continue';
                    var _nqr = _nq7.get_each_level_nums(_nqp);
                    null == _nqn[_nqp] && (_nqn[_nqp] = []), _nqr.forEach(function(_nqs, _nqt) {
                        var _nqu = null;
                        for (var _nqv = 1; _nqv <= _nq7.SLOT_LEVEL_MAX; _nqv++) null == _nqn[_nqp][_nqv] && (_nqn[_nqp][_nqv] = 0), _nqt >= _nqv && (_nqn[_nqp][_nqv] += _nqs);
                    });
                }, _nqw = 0, _nqx = [509]; _nqw < _nqx.length; _nqw++) {
                _nqo(_nqx[_nqw]);
            }
            var _nqy = 0,
                _nqz = 0,
                _nr0 = 0,
                _nr1 = 0,
                _nr2 = 0,
                _nr3 = 0;
            null != _nqn[509] && (_nqy = _nqn[509][1], _nqz = _nqn[509][2], _nr0 = _nqn[509][4], _nr1 = _nqn[509][6], _nr2 = _nqn[509][8], _nr3 = _nqn[509][10], 1 == _nqf ? (_nqy >= 1 && (_nq9.tyku += 1 * _nqy), _nqz >= 1 && (_nq9.kaih += 2 * _nqz), _nr0 >= 1 && (_nq9.houg += 1 * _nr0), _nr1 >= 1 && (_nq9.tyku += 1 * _nr1), _nr2 >= 1 && (_nq9.houm += 1 * _nr2), _nr3 >= 1 && (_nq9.tyku += 1 * _nr3)) : 2 == _nqf && (_nqz >= 1 && (_nq9.tyku += 1 * _nqz), _nr0 >= 1 && (_nq9.kaih += 2 * _nr0), _nr1 >= 1 && (_nq9.houg += 1 * _nr1), _nr2 >= 1 && (_nq9.tyku += 1 * _nr2), _nr3 >= 1 && (_nq9.houm += 1 * _nr3)));
            var _nr4 = _nq7.get_slotnums(509),
                _nr5 = _nr4 + _nq7.get_slotnums(382);
            return _nqa && _nq9.add(_nqb.multiply(_nr5)), 3 != _nq7.stype && 21 != _nq7.stype && 4 != _nq7.stype || _nqz >= 1 && (_nqg > 0 && (_nq9.houg += 1, _nq9.kaih += 1), _nqh > 0 && (_nq9.tyku += 2, _nq9.kaih += 1)), 145 == _nq7.ship_id ? _nqz >= 1 && (_nqg > 0 && (_nq9.houg += 1, _nq9.tyku += 1, _nq9.kaih += 2), _nqh > 0 && (_nq9.tyku += 4, _nq9.kaih += 2)) : 961 == _nq7.ship_id && _nr4 > 0 && (_nqg > 0 && (_nq9.houg += 2, _nq9.tyku += 2, _nq9.kaih += 3), _nqh > 0 && (_nq9.houg += 1, _nq9.tyku += 5, _nq9.kaih += 3)), _nqc && _nqg > 0 && _nq9.add(_nqd), _nqc && _nqh > 0 && _nq9.add(_nqe), _nq9;
        };
    },
    33258: (_nr6, _nr7, _nr8) => {
        'use strict';
        var _nr9 = null;
        defineModule(_nr7);
        Object.defineProperty(_nr7, '__esModule', {
            'value': true
        }), _nr7.getSlot383PersonalEffect = void 0;
        var _nra = _nr8(74496);
        _nr7.getSlot383PersonalEffect = function(_nrb) {
            var _nrc = null,
                _nrd = new _nra.SlotItemEffectModel(),
                _nre = false,
                _nrf = new _nra.SlotItemEffectModel(),
                _nrg = _nrb.get_each_level_over_nums([383])[383];
            if (44 == _nrb.ctype && (_nrf.raig += 2, _nre = true, _nrg[4] > 0 && (_nrd.raig += 1), _nrg[6] > 0 && (_nrd.houm += 1)), 'い58' == _nrb.yomi && (_nrf.raig += 1, _nre = true), 636 == _nrb.ship_id ? (_nrf.raig += 3, _nre = true) : 607 == _nrb.ship_id && (_nrf.raig += 4, _nre = true), _nrg[8] > 0 && (_nrd.raig += 1), _nrg[10] > 0 && (_nrd.houm += 1), 'い58' != _nrb.yomi && 'い47' != _nrb.yomi || _nrg[5] > 0 && (_nrd.houm += 1), 0 == _nre) return _nrd;
            var _nrh = _nrb.get_slotnums(383);
            return _nrd.add(_nrf.multiply(_nrh)), _nrd;
        };
    },
    92168: (_nri, _nrj, _nrk) => {
        'use strict';
        var _nrl = null;
        defineModule(_nrj);
        Object.defineProperty(_nrj, '__esModule', {
            'value': true
        }), _nrj.getSlot384PersonalEffect = void 0;
        var _nrm = _nrk(74496);
        _nrj.getSlot384PersonalEffect = function(_nrn) {
            var _nro = null,
                _nrp = new _nrm.SlotItemEffectModel(),
                _nrq = false,
                _nrr = new _nrm.SlotItemEffectModel();
            44 == _nrn.ctype && (_nrr.kaih += 3, _nrq = true), 'い58' == _nrn.yomi && (_nrr.kaih += 2, _nrq = true), 636 == _nrn.ship_id ? (_nrr.kaih += 3, _nrq = true) : 607 == _nrn.ship_id && (_nrr.kaih += 4, _nrq = true);
            var _nrs = _nrn.get_slotnums(384);
            _nrq && _nrp.add(_nrr.multiply(_nrs));
            var _nrt = _nrs,
                _nru = _nrn.get_slotnums(213),
                _nrv = _nrn.get_slotnums(214),
                _nrw = _nrn.get_slotnums(383);
            return _nrt > 0 && _nru + _nrv + _nrw > 0 && (_nrp.raig += 3, _nrp.kaih += 2), _nrp;
        };
    },
    85975: (_nrx, _nry, _nrz) => {
        'use strict';
        var _ns0 = null;
        defineModule(_nry);
        Object.defineProperty(_nry, '__esModule', {
            'value': true
        }), _nry.getSlot385PersonalEffect = void 0;
        var _ns1 = _nrz(74496);
        _nry.getSlot385PersonalEffect = function(_ns2) {
            var _ns3 = null,
                _ns4 = new _ns1.SlotItemEffectModel(),
                _ns5 = false,
                _ns6 = new _ns1.SlotItemEffectModel(),
                _ns7 = 0;
            if ('アメリカ' == _ns2.getCountryName() && (_ns6.houg += 1, 102 == _ns2.ctype || 107 == _ns2.ctype ? (_ns6.houg += 1, _ns6.souk += 1) : 93 == _ns2.ctype && (_ns6.houg += 1), _ns5 = true, _ns7 = 1), 8 == _ns2.stype && (_ns6.houg += 1, _ns5 = true), 0 == _ns5) return _ns4;
            var _ns8 = _ns2.get_slotnums(385);
            if (_ns4.add(_ns6.multiply(_ns8)), 0 == _ns7) return _ns4;
            var _ns9 = _ns2.get_each_level_nums(385),
                _nsa = 0;
            return _ns9.forEach(function(_nsb, _nsc) {
                _nsc >= 6 && (_nsa += _nsb);
            }), 1 == _ns7 && (_ns4.houg += 1 * _nsa, _ns4.souk += 1 * _ns9[10]), _ns4;
        };
    },
    98467: (_nsd, _nse, _nsf) => {
        'use strict';
        var _nsg = null;
        defineModule(_nse);
        Object.defineProperty(_nse, '__esModule', {
            'value': true
        }), _nse.getSlot386PersonalEffect = void 0;
        var _nsh = _nsf(74496);
        _nse.getSlot386PersonalEffect = function(_nsi) {
            var _nsj = null,
                _nsk = new _nsh.SlotItemEffectModel(),
                _nsl = false,
                _nsm = new _nsh.SlotItemEffectModel(),
                _nsn = 0;
            if ('アメリカ' == _nsi.getCountryName() && (_nsm.houg += 1, _nsl = true, _nsn = 1), 0 == _nsl) return _nsk;
            var _nso = _nsi.get_slotnums(386);
            if (_nsk.add(_nsm.multiply(_nso)), 0 == _nsn) return _nsk;
            var _nsp = _nsi.get_each_level_nums(386),
                _nsq = 0,
                _nsr = 0;
            return _nsp.forEach(function(_nss, _nst) {
                _nst >= 2 && (_nsq += _nss), _nst >= 7 && (_nsr += _nss);
            }), 1 == _nsn && (_nsk.houg += 1 * _nsq, _nsk.houg += 1 * _nsr), _nsk;
        };
    },
    88348: (_nsu, _nsv, _nsw) => {
        'use strict';
        var _nsx = null;
        defineModule(_nsv);
        Object.defineProperty(_nsv, '__esModule', {
            'value': true
        }), _nsv.getSlot387PersonalEffect = void 0;
        var _nsy = _nsw(74496);
        _nsv.getSlot387PersonalEffect = function(_nsz) {
            var _nt0 = null,
                _nt1 = new _nsy.SlotItemEffectModel(),
                _nt2 = false,
                _nt3 = new _nsy.SlotItemEffectModel(),
                _nt4 = 0;
            if ('アメリカ' == _nsz.getCountryName() && (_nt3.houg += 1, _nt2 = true, _nt4 = 1), 0 == _nt2) return _nt1;
            var _nt5 = _nsz.get_slotnums(387);
            if (_nt1.add(_nt3.multiply(_nt5)), 0 == _nt4) return _nt1;
            var _nt6 = _nsz.get_each_level_nums(387),
                _nt7 = 0,
                _nt8 = 0;
            return _nt6.forEach(function(_nt9, _nta) {
                _nta >= 2 && (_nt7 += _nt9), _nta >= 7 && (_nt8 += _nt9);
            }), 1 == _nt4 && (_nt1.houg += 1 * _nt7, _nt1.houg += 1 * _nt8), _nt1;
        };
    },
    21097: (_ntb, _ntc, _ntd) => {
        'use strict';
        var _nte = null;
        defineModule(_ntc);
        Object.defineProperty(_ntc, '__esModule', {
            'value': true
        }), _ntc.getSlot389PersonalEffect = void 0;
        var _ntf = _ntd(74496);
        _ntc.getSlot389PersonalEffect = function(_ntg) {
            var _nth = null,
                _nti = new _ntf.SlotItemEffectModel(),
                _ntj = false,
                _ntk = new _ntf.SlotItemEffectModel();
            if (594 == _ntg.ship_id || 599 == _ntg.ship_id) _ntk.houg += 2, _ntk.kaih += 2, _ntj = true;
            else {
                if (698 == _ntg.ship_id || 610 == _ntg.ship_id) _ntk.houg += 3, _ntk.kaih += 2, _ntj = true;
                else 646 == _ntg.ship_id && (_ntk.houg += 4, _ntk.tais += 4, _ntk.kaih += 3, _ntj = true, _ntg.get_type3_nums(25) > 0 && (_nti.houg += 3, _nti.tais += 6), _ntg.get_slotnums(326) + _ntg.get_slotnums(327) > 0 && (_nti.houg += 5, _nti.tais += 4));
            }
            if ('アメリカ' == _ntg.getCountryName() && (_ntk.houg += 2, _ntk.tais += 3, _ntk.kaih += 1, _ntj = true), 0 == _ntj) return _nti;
            var _ntl = _ntg.get_slotnums(389);
            return _nti.add(_ntk.multiply(_ntl)), _nti;
        };
    },
    43607: (_ntm, _ntn, _nto) => {
        'use strict';
        var _ntp = null;
        defineModule(_ntn);
        Object.defineProperty(_ntn, '__esModule', {
            'value': true
        }), _ntn.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _ntq = _nto(74496);
        _ntn.getSlot38cmFourBarrelGunPersonalEffect = function(_ntr) {
            var _nts = null,
                _ntt = new _ntq.SlotItemEffectModel(),
                _ntu = _ntr.get_slotnums(245),
                _ntv = _ntr.get_slotnums(246),
                _ntw = _ntr.get_slotnums(468),
                _ntx = _ntu + _ntv + _ntw,
                _nty = 0,
                _ntz = 0,
                _nu0 = new Array();
            if (79 != _ntr.ctype) return _ntt;
            _ntt.houg += 2 * _ntx, _ntt.houm += 1 * _ntx, _ntw >= 1 && (_ntt.houg += 1 * _ntw, _ntz = 1, _nu0.push(468)), _nty = 1;
            var _nu1 = _ntr.get_slotnums(247);
            if (1 == _nty && _nu1 >= 1 && (_ntt.kaih += 2 * _nu1, _ntt.houg += 2 * _nu1, _ntt.houm += 2 * _nu1), 0 == _ntz) return _ntt;
            for (var _nu2 = {}, _nu3 = {}, _nu4 = {}, _nu5 = 0, _nu6 = _nu0; _nu5 < _nu6.length; _nu5++) {
                var _nu7 = _nu6[_nu5];
                _nu3[_nu7] = 0, _nu4[_nu7] = 0, _nu2[_nu7] = 0;
                for (var _nu8 = 0, _nu9 = _ntr.have_slots_dict[_nu7]; _nu8 < _nu9.length; _nu8++) {
                    var _nua = _nu9[_nu8].level;
                    _nua >= 4 && _nu3[_nu7]++, _nua >= 8 && _nu4[_nu7]++, _nua >= 10 && _nu2[_nu7]++;
                }
            }
            if (1 == _ntz && _ntw > 0) {
                var _nub = _nu3[468],
                    _nuc = _nu4[468],
                    _nud = _nu2[468];
                _nub >= 1 && (_ntt.houg += 1 * _nub, _ntt.houm += 1 * _nub), _nuc >= 1 && (_ntt.houg += 1 * _nuc, _ntt.houm += 1 * _nuc), _nud >= 1 && (_ntt.houm += 1 * _nud);
            }
            return _ntt;
        };
    },
    37273: (_nue, _nuf, _nug) => {
        'use strict';
        var _nuh = null;
        defineModule(_nuf);
        Object.defineProperty(_nuf, '__esModule', {
            'value': true
        }), _nuf.getSlot390PersonalEffect = void 0;
        var _nui = _nug(74496);
        _nuf.getSlot390PersonalEffect = function(_nuj) {
            var _nuk = null,
                _nul = new _nui.SlotItemEffectModel(),
                _num = false,
                _nun = new _nui.SlotItemEffectModel(),
                _nuo = 0;
            if ('アメリカ' == _nuj.getCountryName() && (_nun.houg += 1, _num = true, _nuo = 1), 102 == _nuj.ctype || 107 == _nuj.ctype ? (_nun.houg += 1, _nun.souk += 1, _num = true) : 93 == _nuj.ctype && (_nun.houg += 1, _num = true), 8 == _nuj.stype && (_nun.houg += 1, _num = true), 0 == _num) return _nul;
            var _nup = _nuj.get_slotnums(390);
            if (_nul.add(_nun.multiply(_nup)), 0 == _nuo) return _nul;
            var _nuq = _nuj.get_each_level_nums(390),
                _nur = 0,
                _nus = 0;
            return _nuq.forEach(function(_nut, _nuu) {
                _nuu >= 3 && (_nur += _nut), _nuu >= 6 && (_nus += _nut);
            }), 1 == _nuo && (_nul.houg += 1 * _nur, _nul.kaih += 1 * _nus, _nul.souk += 1 * _nuq[10]), _nul;
        };
    },
    72694: (_nuv, _nuw, _nux) => {
        'use strict';
        var _nuy = null;
        defineModule(_nuw);
        Object.defineProperty(_nuw, '__esModule', {
            'value': true
        }), _nuw.getSlot391PersonalEffect = void 0;
        var _nuz = _nux(74496);
        _nuw.getSlot391PersonalEffect = function(_nv0) {
            var _nv1 = null,
                _nv2 = new _nuz.SlotItemEffectModel(),
                _nv3 = false,
                _nv4 = new _nuz.SlotItemEffectModel();
            if ('しょうかく' == _nv0.yomi || 'ずいかく' == _nv0.yomi ? (_nv4.houg += 1, _nv3 = true) : 'じゅんよう' != _nv0.yomi && 'ひよう' != _nv0.yomi || (_nv4.houg += 1, _nv3 = true), 116 == _nv0.ship_id || 185 == _nv0.ship_id || 282 == _nv0.ship_id ? (_nv4.houg += 1, _nv3 = true) : 117 == _nv0.ship_id || 318 == _nv0.ship_id || 883 == _nv0.ship_id || 888 == _nv0.ship_id ? (_nv4.houg += 1, _nv2.kaih += 1, _nv3 = true) : 560 != _nv0.ship_id && 555 != _nv0.ship_id || (_nv4.houg += 1, _nv4.kaih += 1, _nv3 = true), 0 == _nv3) return _nv2;
            var _nv5 = _nv0.get_slotnums(391);
            return _nv2.add(_nv4.multiply(_nv5)), _nv2;
        };
    },
    62067: (_nv6, _nv7, _nv8) => {
        'use strict';
        var _nv9 = null;
        defineModule(_nv7);
        Object.defineProperty(_nv7, '__esModule', {
            'value': true
        }), _nv7.getSlot392PersonalEffect = void 0;
        var _nva = _nv8(74496);
        _nv7.getSlot392PersonalEffect = function(_nvb) {
            var _nvc = null,
                _nvd = new _nva.SlotItemEffectModel(),
                _nve = false,
                _nvf = new _nva.SlotItemEffectModel();
            if ('しょうかく' == _nvb.yomi || 'ずいかく' == _nvb.yomi ? (_nvf.houg += 2, _nvf.kaih += 1, _nve = true) : 'じゅんよう' != _nvb.yomi && 'ひよう' != _nvb.yomi || (_nvf.houg += 1, _nvf.kaih += 1, _nve = true), 116 == _nvb.ship_id || 185 == _nvb.ship_id || 282 == _nvb.ship_id ? (_nvf.houg += 2, _nvf.kaih += 1, _nve = true) : 117 == _nvb.ship_id || 318 == _nvb.ship_id || 883 == _nvb.ship_id || 888 == _nvb.ship_id ? (_nvf.houg += 2, _nvf.kaih += 2, _nve = true) : 560 != _nvb.ship_id && 555 != _nvb.ship_id || (_nvf.houg += 3, _nvf.kaih += 2, _nve = true), 0 == _nve) return _nvd;
            var _nvg = _nvb.get_slotnums(392);
            return _nvd.add(_nvf.multiply(_nvg)), _nvd;
        };
    },
    87817: function(_nvh, _nvi, _nvj) {
        'use strict';
        var _nvk = null;
        var _nvl = this && this.__importDefault || function(_nvm) {
            var _nvn = null;
            return _nvm && _nvm.__esModule ? _nvm : {
                'default': _nvm
            };
        };
        defineModule(_nvi);
        Object.defineProperty(_nvi, '__esModule', {
            'value': true
        }), _nvi.getSlot397PersonalEffect = void 0;
        var _nvo = _nvj(74496),
            _nvp = _nvl(_nvj(18622));
        _nvi.getSlot397PersonalEffect = function(_nvq) {
            var _nvr = null,
                _nvs = new _nvo.SlotItemEffectModel(),
                _nvt = false,
                _nvu = new _nvo.SlotItemEffectModel(),
                _nvv = 0,
                _nvw = 0,
                _nvx = false;
            if (651 == _nvq.ship_id ? (_nvu.houg += 5, _nvu.tyku += 2, _nvu.kaih += 1, _nvt = true, _nvx = true, _nvv = 1, _nvw = 1) : 656 == _nvq.ship_id && (_nvu.houg += 3, _nvu.tyku += 1, _nvu.kaih += 1, _nvt = true, _nvx = true, _nvv = 1), 0 == _nvt) return _nvs;
            var _nvy = _nvq.get_slotnums(397);
            _nvs.add(_nvu.multiply(_nvy));
            var _nvz = 0,
                _nw0 = _nvq.get_each_level_nums(397),
                _nw1 = 0;
            if (_nvx) {
                _nw0.forEach(function(_nw2, _nw3) {
                    _nw3 >= 4 && (_nw1 += _nw2);
                });
                for (var _nw4 = 0, _nw5 = _nvq.have_slot_ids(); _nw4 < _nw5.length; _nw4++) {
                    var _nw6 = _nw5[_nw4],
                        _nw7 = _nvp.default.model.slot.getMst(_nw6),
                        _nw8 = _nw7.equipType;
                    12 != _nw8 && 13 != _nw8 || (_nw7.sakuteki >= 5 && (_nvz += _nvq.get_slotnums(parseInt(_nw6))), _nw7.taiku >= 2 && _nvq.get_slotnums(parseInt(_nw6)));
                }
            }
            return 1 == _nvv && _nvz > 0 && (_nvs.houg += 3, _nvs.kaih += 3), 1 == _nvw && (_nvs.houg += 4 * _nw1, _nvs.kaih += 1 * _nw1), _nvs;
        };
    },
    93526: function(_nw9, _nwa, _nwb) {
        'use strict';
        var _nwc = null;
        var _nwd = this && this.__importDefault || function(_nwe) {
            var _nwf = null;
            return _nwe && _nwe.__esModule ? _nwe : {
                'default': _nwe
            };
        };
        defineModule(_nwa);
        Object.defineProperty(_nwa, '__esModule', {
            'value': true
        }), _nwa.getSlot398PersonalEffect = void 0;
        var _nwg = _nwb(74496),
            _nwh = _nwd(_nwb(18622));
        _nwa.getSlot398PersonalEffect = function(_nwi) {
            var _nwj = null,
                _nwk = new _nwg.SlotItemEffectModel(),
                _nwl = false,
                _nwm = new _nwg.SlotItemEffectModel(),
                _nwn = 0,
                _nwo = 0,
                _nwp = false;
            if (651 == _nwi.ship_id ? (_nwm.houg += 4, _nwm.tyku += 4, _nwm.kaih += 2, _nwl = true, _nwp = true, _nwn = 1, _nwo = 1) : 656 == _nwi.ship_id && (_nwm.houg += 3, _nwm.tyku += 2, _nwm.kaih += 2, _nwl = true, _nwp = true, _nwn = 1, _nwo = 2), 0 == _nwl) return _nwk;
            var _nwq = _nwi.get_slotnums(398);
            _nwk.add(_nwm.multiply(_nwq));
            var _nwr = 0,
                _nws = 0,
                _nwt = _nwi.get_each_level_nums(398),
                _nwu = 0;
            if (_nwp) {
                _nwt.forEach(function(_nwv, _nww) {
                    _nww >= 4 && (_nwu += _nwv);
                });
                for (var _nwx = 0, _nwy = _nwi.have_slot_ids(); _nwx < _nwy.length; _nwx++) {
                    var _nwz = _nwy[_nwx],
                        _nx0 = _nwh.default.model.slot.getMst(_nwz),
                        _nx1 = _nx0.equipType;
                    12 != _nx1 && 13 != _nx1 || (_nx0.sakuteki >= 5 && (_nwr += _nwi.get_slotnums(parseInt(_nwz))), _nx0.taiku >= 2 && (_nws += _nwi.get_slotnums(parseInt(_nwz))));
                }
            }
            return 1 == _nwn && (_nwr > 0 && (_nwk.houg += 3, _nwk.kaih += 3), _nws > 0 && (_nwk.tyku += 3, _nwk.kaih += 3)), 1 == _nwo ? (_nwk.houg += 3 * _nwu, _nwk.kaih += 2 * _nwu) : 2 == _nwo && (_nwk.houg += 2 * _nwu, _nwk.kaih += 1 * _nwu), _nwk;
        };
    },
    33084: (_nx2, _nx3, _nx4) => {
        'use strict';
        var _nx5 = null;
        defineModule(_nx3);
        Object.defineProperty(_nx3, '__esModule', {
            'value': true
        }), _nx3.getSlot399PersonalEffect = void 0;
        var _nx6 = _nx4(74496);
        _nx3.getSlot399PersonalEffect = function(_nx7) {
            var _nx8 = null,
                _nx9 = new _nx6.SlotItemEffectModel(),
                _nxa = false,
                _nxb = new _nx6.SlotItemEffectModel(),
                _nxc = 0;
            if (108 == _nx7.ctype && (_nxb.houg += 1, _nxb.kaih += 2, _nxc = 1, _nxa = true), 0 == _nxa) return _nx9;
            var _nxd = _nx7.get_slotnums(399);
            if (_nx9.add(_nxb.multiply(_nxd)), 0 == _nxc) return _nx9;
            var _nxe = _nx7.get_each_level_nums(399),
                _nxf = 0,
                _nxg = 0;
            return _nxe.map(function(_nxh, _nxi) {
                _nxi >= 3 && (_nxf += _nxh), _nxi >= 5 && (_nxg += _nxh);
            }), 1 == _nxc && (_nx9.houg += 1 * _nxf, _nx9.houg += 1 * _nxg), _nx9;
        };
    },
    80225: (_nxj, _nxk, _nxl) => {
        'use strict';
        var _nxm = null;
        defineModule(_nxk);
        Object.defineProperty(_nxk, '__esModule', {
            'value': true
        }), _nxk.getSlot3_122PersonalEffect = void 0;
        var _nxn = _nxl(74496);
        _nxk.getSlot3_122PersonalEffect = function(_nxo) {
            var _nxp = null,
                _nxq = new _nxn.SlotItemEffectModel(),
                _nxr = false,
                _nxs = new _nxn.SlotItemEffectModel();
            if (54 == _nxo.ctype && (_nxs.houg += 1, _nxs.tyku += 2, _nxs.kaih += 1, _nxr = true), 0 == _nxr) return _nxq;
            var _nxt = _nxo.get_slotnums(3) + _nxo.get_slotnums(122);
            return _nxq.add(_nxs.multiply(_nxt)), _nxq;
        };
    },
    97831: (_nxu, _nxv, _nxw) => {
        'use strict';
        var _nxx = null;
        defineModule(_nxv);
        Object.defineProperty(_nxv, '__esModule', {
            'value': true
        }), _nxv.getSlot400PersonalEffect = void 0;
        var _nxy = _nxw(74496);
        _nxv.getSlot400PersonalEffect = function(_nxz) {
            var _ny0 = null,
                _ny1 = new _nxy.SlotItemEffectModel(),
                _ny2 = false,
                _ny3 = new _nxy.SlotItemEffectModel(),
                _ny4 = 0,
                _ny5 = false;
            if (147 != _nxz.ship_id && 73 != _nxz.ctype && 81 != _nxz.ctype || (_ny5 = true), _ny5 && (_ny3.kaih += 2, _ny3.raig += 5, _ny3.houg += 1, _ny3.souk += 1, _ny2 = true, _ny4 = 1), 0 == _ny2) return _ny1;
            var _ny6 = _nxz.get_slotnums(400);
            return _ny1.add(_ny3.multiply(_ny6)), _nxz.get_slotnums(282) > 0 && 1 == _ny4 && (_ny1.houg += 2), _ny1;
        };
    },
    4050: function(_ny7, _ny8, _ny9) {
        'use strict';
        var _nya = null;
        var _nyb = this && this.__importDefault || function(_nyc) {
            var _nyd = null;
            return _nyc && _nyc.__esModule ? _nyc : {
                'default': _nyc
            };
        };
        defineModule(_ny8);
        Object.defineProperty(_ny8, '__esModule', {
            'value': true
        }), _ny8.getSlot407PersonalEffect = void 0;
        var _nye = _ny9(74496),
            _nyf = _nyb(_ny9(18622));
        _ny8.getSlot407PersonalEffect = function(_nyg) {
            var _nyh = null,
                _nyi = new _nye.SlotItemEffectModel(),
                _nyj = false,
                _nyk = new _nye.SlotItemEffectModel(),
                _nyl = 0;
            if (662 != _nyg.ship_id && 663 != _nyg.ship_id && 668 != _nyg.ship_id || (_nyk.houg += 4, _nyk.tyku += 2, _nyk.kaih += 1, _nyj = true, _nyl = 1), 0 == _nyj) return _nyi;
            var _nym = _nyg.get_slotnums(407);
            _nyi.add(_nyk.multiply(_nym));
            for (var _nyn = 0, _nyo = 0, _nyp = 0, _nyq = _nyg.have_slot_ids(); _nyp < _nyq.length; _nyp++) {
                var _nyr = _nyq[_nyp],
                    _nys = _nyf.default.model.slot.getMst(_nyr),
                    _nyt = _nys.equipType;
                12 != _nyt && 13 != _nyt || (_nys.sakuteki >= 5 && (_nyn += _nyg.get_slotnums(parseInt(_nyr))), _nys.taiku >= 2 && (_nyo += _nyg.get_slotnums(parseInt(_nyr))));
            }
            return _nyn >= 1 && 1 == _nyl && (_nyi.houg += 2, _nyi.kaih += 2, _nyi.raig += 2), _nyo >= 1 && 1 == _nyl && (_nyi.tyku += 2, _nyi.kaih += 3), _nyi;
        };
    },
    78466: (_nyu, _nyv, _nyw) => {
        'use strict';
        var _nyx = null;
        defineModule(_nyv);
        Object.defineProperty(_nyv, '__esModule', {
            'value': true
        }), _nyv.getSlot408PersonalEffect = void 0;
        var _nyy = _nyw(74496);
        _nyv.getSlot408PersonalEffect = function(_nyz) {
            var _nz0 = null,
                _nz1 = new _nyy.SlotItemEffectModel(),
                _nz2 = false,
                _nz3 = new _nyy.SlotItemEffectModel();
            if ('しんしゅうまる' == _nyz.yomi ? (_nz3.houg += 2, _nz3.saku += 2, _nz3.kaih += 2, _nz2 = true) : 'あきつまる' == _nyz.yomi && (_nz3.houg += 1, _nz3.saku += 1, _nz3.kaih += 1, _nz3.tais += 1, _nz2 = true), 2 == _nyz.stype && (_nz3.houg += 1, _nz3.saku += 1, _nz3.kaih -= 5, _nz2 = true), 0 == _nz2) return _nz1;
            var _nz4 = _nyz.get_slotnums(408);
            return _nz1.add(_nz3.multiply(_nz4)), _nz1;
        };
    },
    40061: (_nz5, _nz6, _nz7) => {
        'use strict';
        var _nz8 = null;
        defineModule(_nz6);
        Object.defineProperty(_nz6, '__esModule', {
            'value': true
        }), _nz6.getSlot409PersonalEffect = void 0;
        var _nz9 = _nz7(74496);
        _nz6.getSlot409PersonalEffect = function(_nza) {
            var _nzb = null,
                _nzc = new _nz9.SlotItemEffectModel(),
                _nzd = false,
                _nze = new _nz9.SlotItemEffectModel();
            if ('しんしゅうまる' == _nza.yomi ? (_nze.houg += 1, _nze.tyku += 2, _nze.kaih += 3, _nzd = true) : 'あきつまる' == _nza.yomi && (_nze.houg += 1, _nze.tyku += 1, _nze.kaih += 2, _nze.tais += 1, _nzd = true), 0 == _nzd) return _nzc;
            var _nzf = _nza.get_slotnums(409);
            return _nzc.add(_nze.multiply(_nzf)), _nzc;
        };
    },
    79988: (_nzg, _nzh, _nzi) => {
        'use strict';
        var _nzj = null;
        defineModule(_nzh);
        Object.defineProperty(_nzh, '__esModule', {
            'value': true
        }), _nzh.getSlot411PersonalEffect = void 0;
        var _nzk = _nzi(74496);
        _nzh.getSlot411PersonalEffect = function(_nzl) {
            var _nzm = null,
                _nzn = new _nzk.SlotItemEffectModel(),
                _nzo = new _nzk.SlotItemEffectModel(),
                _nzp = false,
                _nzq = 0;
            if (2 == _nzl.stype && (_nzo.kaih -= 9, _nzp = true), 3 != _nzl.stype && 4 != _nzl.stype || (_nzo.kaih -= 7, _nzp = true), 21 == _nzl.stype && (_nzo.kaih -= 6, _nzp = true), 5 != _nzl.stype && 6 != _nzl.stype || (_nzo.kaih -= 5, _nzp = true), 593 == _nzl.ship_id && (_nzn.houg += 1, _nzn.tyku += 2, _nzn.kaih += 3), 151 == _nzl.ship_id || 411 == _nzl.ship_id || 412 == _nzl.ship_id || 593 == _nzl.ship_id || 954 == _nzl.ship_id ? (_nzn.houg += 3, _nzn.tyku += 4, _nzq = 1) : 541 != _nzl.ship_id && 573 != _nzl.ship_id && 553 != _nzl.ship_id && 554 != _nzl.ship_id || (_nzn.houg += 2, _nzn.tyku += 2, _nzq = 1), _nzp) {
                var _nzr = _nzl.get_slotnums(411);
                _nzn.add(_nzo.multiply(_nzr));
            }
            if (0 == _nzq) return _nzn;
            var _nzs = _nzl.get_each_level_nums(411),
                _nzt = 0;
            return _nzq > 0 && _nzs.forEach(function(_nzu, _nzv) {
                _nzv >= 4 && (_nzt += _nzu);
            }), 1 == _nzq && (_nzt >= 1 && (_nzn.houg += 1, _nzn.tyku += 1), _nzs[10] >= 1 && (_nzn.houg += 1, _nzn.tyku += 1)), _nzn;
        };
    },
    74428: (_nzw, _nzx, _nzy) => {
        'use strict';
        var _nzz = null;
        defineModule(_nzx);
        Object.defineProperty(_nzx, '__esModule', {
            'value': true
        }), _nzx.getSlot412PersonalEffect = void 0;
        var _o00 = _nzy(74496);
        _nzx.getSlot412PersonalEffect = function(_o01) {
            var _o02 = null,
                _o03 = new _o00.SlotItemEffectModel(),
                _o04 = false,
                _o05 = 0,
                _o06 = new _o00.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o01.ctype) >= 0 ? (_o03.houg += 2, _o03.raig += 4, _o03.tais += 2, _o06.kaih += 3, _o06.saku += 1, _o04 = true, _o05 = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o01.ctype) >= 0 ? (_o03.houg += 3, _o03.raig += 3, _o06.kaih += 2, _o06.saku += 3, _o04 = true, _o05 = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o01.ctype) >= 0 && (_o03.houg += 1, _o06.kaih += 1, _o06.saku += 1, _o04 = true), 0 == _o04) return _o03;
            var _o07 = _o01.get_slotnums(412);
            if (_o03.add(_o06.multiply(_o07)), 0 == _o05) return _o03;
            var _o08 = _o01.get_each_level_nums(412),
                _o09 = 0,
                _o0a = 0;
            return _o05 > 0 && _o08.forEach(function(_o0b, _o0c) {
                _o0c >= 4 && (_o09 += _o0b), _o0c >= 8 && (_o0a += _o0b);
            }), 1 == _o05 && (_o09 > 0 && (_o03.houg += 1), _o0a > 0 && (_o03.raig += 1)), _o03;
        };
    },
    2631: (_o0d, _o0e, _o0f) => {
        'use strict';
        var _o0g = null;
        defineModule(_o0e);
        Object.defineProperty(_o0e, '__esModule', {
            'value': true
        }), _o0e.getSlot413PersonalEffect = void 0;
        var _o0h = _o0f(74496);
        _o0e.getSlot413PersonalEffect = function(_o0i) {
            var _o0j = null,
                _o0k = new _o0h.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o0i.ctype) >= 0 ? (_o0k.houg += 2, _o0k.raig += 2, _o0k.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o0i.ctype) >= 0 && (_o0k.houg += 4, _o0k.raig += 2, _o0k.kaih += 2), 38 == _o0i.ctype || 54 == _o0i.ctype ? (_o0k.houg += 2, _o0k.raig += 3, _o0k.kaih += 3) : 4 == _o0i.ctype || 20 == _o0i.ctype || 16 == _o0i.ctype || 41 == _o0i.ctype || 52 == _o0i.ctype ? (_o0k.houg += 1, _o0k.raig += 2, _o0k.kaih += 2) : 21 != _o0i.ctype && 34 != _o0i.ctype || (_o0k.tyku += 2, _o0k.raig += 1, _o0k.kaih += 1), 'なか' == _o0i.yomi || 'ゆら' == _o0i.yomi || 'やはぎ' == _o0i.yomi || 'のしろ' == _o0i.yomi || 'はまなみ' == _o0i.yomi || 'しまかぜ' == _o0i.yomi || 'きよしも' == _o0i.yomi || 'はつしも' == _o0i.yomi ? (_o0k.tyku += 1, _o0k.kaih += 1) : 'じんつう' != _o0i.yomi && 'せんだい' != _o0i.yomi && 'ながなみ' != _o0i.yomi && 'はつしも' != _o0i.yomi && 'てるづき' != _o0i.yomi || (_o0k.houg += 1, _o0k.raig += 1), 543 == _o0i.ship_id ? (_o0k.houg += 1, _o0k.kaih += 1) : 159 == _o0i.ship_id && (_o0k.houg += 2), _o0k;
        };
    },
    16498: (_o0l, _o0m, _o0n) => {
        'use strict';
        var _o0o = null;
        defineModule(_o0m);
        Object.defineProperty(_o0m, '__esModule', {
            'value': true
        }), _o0m.getSlot414PersonalEffect = void 0;
        var _o0p = _o0n(74496);
        _o0m.getSlot414PersonalEffect = function(_o0q) {
            var _o0r = null,
                _o0s = new _o0p.SlotItemEffectModel(),
                _o0t = 0;
            if ('アメリカ' == _o0q.getCountryName() && (_o0s.saku += 1, _o0t = 1), 95 != _o0q.ctype && 99 != _o0q.ctype && 106 != _o0q.ctype && 110 != _o0q.ctype && 121 != _o0q.ctype || (_o0s.houg += 1, _o0s.saku += 1, _o0t = 2), 0 == _o0t) return _o0s;
            var _o0u = _o0q.get_each_level_nums(414),
                _o0v = 0,
                _o0w = 0,
                _o0x = 0;
            return _o0t > 0 && _o0u.forEach(function(_o0y, _o0z) {
                _o0z >= 5 && (_o0v += _o0y), _o0z >= 3 && (_o0w += _o0y), _o0z >= 8 && (_o0x += _o0y);
            }), _o0t > 0 && _o0v >= 1 && (_o0s.kaih += 1), 2 == _o0t && (_o0w >= 1 && (_o0s.saku += 1), _o0x >= 1 && (_o0s.kaih += 1), _o0u[10] >= 1 && (_o0s.houg += 1)), _o0s;
        };
    },
    27177: (_o10, _o11, _o12) => {
        'use strict';
        var _o13 = null;
        defineModule(_o11);
        Object.defineProperty(_o11, '__esModule', {
            'value': true
        }), _o11.getSlot415PersonalEffect = void 0;
        var _o14 = _o12(74496);
        _o11.getSlot415PersonalEffect = function(_o15) {
            var _o16 = null,
                _o17 = new _o14.SlotItemEffectModel(),
                _o18 = [];
            if ('アメリカ' == _o15.getCountryName() && (_o17.saku += 1, _o17.tais += 1, _o18.push(1)), 95 != _o15.ctype && 99 != _o15.ctype && 106 != _o15.ctype && 110 != _o15.ctype && 121 != _o15.ctype || (_o17.houg += 1, _o18.push(2)), 0 == _o18.length) return _o17;
            var _o19 = _o15.get_each_level_nums(415),
                _o1a = 0,
                _o1b = 0,
                _o1c = 0;
            return _o18.length > 0 && (_o19.forEach(function(_o1d, _o1e) {
                _o1e >= 5 && (_o1a += _o1d), _o1e >= 3 && (_o1b += _o1d), _o1e >= 8 && (_o1c += _o1d);
            }), _o18.forEach(function(_o1f) {
                var _o1g = null;
                1 == _o1f ? _o1a >= 1 && (_o17.kaih += 1) : 2 == _o1f && (_o1b >= 1 && (_o17.kaih += 1), _o1c >= 1 && (_o17.houg += 1));
            })), _o17;
        };
    },
    53908: (_o1h, _o1i, _o1j) => {
        'use strict';
        var _o1k = null;
        defineModule(_o1i);
        Object.defineProperty(_o1i, '__esModule', {
            'value': true
        }), _o1i.getSlot419PersonalEffect = void 0;
        var _o1l = _o1j(74496);
        _o1i.getSlot419PersonalEffect = function(_o1m) {
            var _o1n = null,
                _o1o = new _o1l.SlotItemEffectModel(),
                _o1p = false,
                _o1q = new _o1l.SlotItemEffectModel(),
                _o1r = 0;
            if ('アメリカ' == _o1m.getCountryName() && (_o1q.houg += 2, _o1p = true, _o1r = 1), 0 == _o1p) return _o1o;
            var _o1s = _o1m.get_slotnums(419);
            if (_o1o.add(_o1q.multiply(_o1s)), 0 == _o1r) return _o1o;
            var _o1t = _o1m.get_each_level_nums(419),
                _o1u = 0,
                _o1v = 0;
            return _o1r > 0 && _o1t.forEach(function(_o1w, _o1x) {
                _o1x >= 2 && (_o1u += _o1w), _o1x >= 7 && (_o1v += _o1w);
            }), 1 == _o1r && (_o1u >= 1 && (_o1o.houg += 1 * _o1u), _o1v >= 1 && (_o1o.houg += 1 * _o1v)), _o1o;
        };
    },
    79813: (_o1y, _o1z, _o20) => {
        'use strict';
        var _o21 = null;
        defineModule(_o1z);
        Object.defineProperty(_o1z, '__esModule', {
            'value': true
        }), _o1z.getSlot420PersonalEffect = void 0;
        var _o22 = _o20(74496);
        _o1z.getSlot420PersonalEffect = function(_o23) {
            var _o24 = null,
                _o25 = new _o22.SlotItemEffectModel(),
                _o26 = false,
                _o27 = new _o22.SlotItemEffectModel(),
                _o28 = 0;
            if ('アメリカ' != _o23.getCountryName() && 67 != _o23.ctype && 78 != _o23.ctype && 82 != _o23.ctype && 88 != _o23.ctype && 108 != _o23.ctype && 112 != _o23.ctype || (_o27.houg += 1, _o28 = 1, _o26 = true), 84 == _o23.ctype ? (_o27.houg += 1, _o26 = true) : 78 == _o23.ctype && (_o27.houg -= 1, _o26 = true), 7 == _o23.stype && (_o27.houg -= 2, _o27.kaih -= 1, _o27.souk -= 2, _o26 = true), 0 == _o26) return _o25;
            var _o29 = _o23.get_slotnums(420);
            if (_o25.add(_o27.multiply(_o29)), 0 == _o28) return _o25;
            var _o2a = _o23.get_each_level_nums(420),
                _o2b = 0;
            return _o28 > 0 && _o2a.forEach(function(_o2c, _o2d) {
                _o2d >= 3 && (_o2b += _o2c);
            }), 1 == _o28 && _o2b >= 1 && (_o25.houg += 1 * _o2b), _o25;
        };
    },
    16088: (_o2e, _o2f, _o2g) => {
        'use strict';
        var _o2h = null;
        defineModule(_o2f);
        Object.defineProperty(_o2f, '__esModule', {
            'value': true
        }), _o2f.getSlot421PersonalEffect = void 0;
        var _o2i = _o2g(74496);
        _o2f.getSlot421PersonalEffect = function(_o2j) {
            var _o2k = null,
                _o2l = new _o2i.SlotItemEffectModel(),
                _o2m = false,
                _o2n = new _o2i.SlotItemEffectModel(),
                _o2o = 0;
            if ('アメリカ' != _o2j.getCountryName() && 67 != _o2j.ctype && 78 != _o2j.ctype && 82 != _o2j.ctype && 88 != _o2j.ctype && 108 != _o2j.ctype && 112 != _o2j.ctype || (_o2n.houg += 2, _o2m = true, _o2o = 1), 84 == _o2j.ctype ? (_o2n.houg += 1, _o2m = true) : 78 == _o2j.ctype && (_o2n.houg -= 1, _o2m = true), 7 == _o2j.stype && (_o2n.houg -= 2, _o2n.kaih -= 1, _o2n.souk -= 2, _o2m = true), 0 == _o2m) return _o2l;
            var _o2p = _o2j.get_slotnums(421);
            if (_o2l.add(_o2n.multiply(_o2p)), 0 == _o2o) return _o2l;
            var _o2q = _o2j.get_each_level_nums(421),
                _o2r = 0;
            return _o2o > 0 && _o2q.forEach(function(_o2s, _o2t) {
                _o2t >= 5 && (_o2r += _o2s);
            }), 1 == _o2o && _o2r >= 1 && (_o2l.houg += 1 * _o2r), _o2l;
        };
    },
    69939: (_o2u, _o2v, _o2w) => {
        'use strict';
        var _o2x = null;
        defineModule(_o2v);
        Object.defineProperty(_o2v, '__esModule', {
            'value': true
        }), _o2v.getSlot422PersonalEffect = void 0;
        var _o2y = _o2w(74496);
        _o2v.getSlot422PersonalEffect = function(_o2z) {
            var _o30 = null,
                _o31 = new _o2y.SlotItemEffectModel(),
                _o32 = false,
                _o33 = new _o2y.SlotItemEffectModel();
            if ('アメリカ' != _o2z.getCountryName() && 67 != _o2z.ctype && 78 != _o2z.ctype && 82 != _o2z.ctype && 88 != _o2z.ctype && 108 != _o2z.ctype && 112 != _o2z.ctype || (_o33.houg += 1, _o33.kaih += 1, _o32 = true), 84 == _o2z.ctype && (_o33.houg += 1, _o33.tyku += 1, _o32 = true), 707 == _o2z.ship_id && (_o33.houg += 2, _o33.kaih += 2, _o33.tyku += 2, _o32 = true), 0 == _o32) return _o31;
            var _o34 = _o2z.get_slotnums(422);
            return _o31.add(_o33.multiply(_o34)), _o31;
        };
    },
    33734: (_o35, _o36, _o37) => {
        'use strict';
        var _o38 = null;
        defineModule(_o36);
        Object.defineProperty(_o36, '__esModule', {
            'value': true
        }), _o36.getSlot423PersonalEffect = void 0;
        var _o39 = _o37(74496);
        _o36.getSlot423PersonalEffect = function(_o3a) {
            var _o3b = null,
                _o3c = new _o39.SlotItemEffectModel(),
                _o3d = false,
                _o3e = new _o39.SlotItemEffectModel();
            78 != _o3a.ctype && 112 != _o3a.ctype || (_o3e.houg += 2, _o3e.tyku += 2, _o3e.kaih += 2, _o3e.saku += 2, _o3d = true);
            var _o3f = _o3a.getCountryName();
            if (67 == _o3a.ctype || 78 == _o3a.ctype || 82 == _o3a.ctype || 88 == _o3a.ctype || 108 == _o3a.ctype || 112 == _o3a.ctype ? (_o3e.houg += 2, _o3e.tyku += 2, _o3e.kaih += 2, _o3e.saku += 2, _o3d = true) : 'アメリカ' == _o3f && (_o3e.houg += 1, _o3e.tyku += 1, _o3e.kaih += 1, _o3e.saku += 1, _o3d = true), 0 == _o3d) return _o3c;
            var _o3g = _o3a.get_slotnums(423);
            return _o3c.add(_o3e.multiply(_o3g)), _o3c;
        };
    },
    34432: (_o3h, _o3i, _o3j) => {
        'use strict';
        var _o3k = null;
        defineModule(_o3i);
        Object.defineProperty(_o3i, '__esModule', {
            'value': true
        }), _o3i.getSlot424PersonalEffect = void 0;
        var _o3l = _o3j(74496);
        _o3i.getSlot424PersonalEffect = function(_o3m) {
            var _o3n = null,
                _o3o = new _o3l.SlotItemEffectModel(),
                _o3p = false,
                _o3q = new _o3l.SlotItemEffectModel(),
                _o3r = 0;
            67 != _o3m.ctype && 78 != _o3m.ctype && 82 != _o3m.ctype && 88 != _o3m.ctype && 108 != _o3m.ctype && 112 != _o3m.ctype || (_o3q.houg += 2, _o3q.raig += 3, _o3p = true, _o3r = 1);
            var _o3s = _o3m.get_slotnums(424);
            _o3p && _o3o.add(_o3q.multiply(_o3s));
            var _o3t = _o3m.get_each_level_nums(424),
                _o3u = 0,
                _o3v = 0,
                _o3w = 0;
            _o3t.forEach(function(_o3x, _o3y) {
                _o3y >= 2 && (_o3u += _o3x), _o3y >= 6 && (_o3v += _o3x), _o3y >= 8 && (_o3w += _o3x);
            });
            var _o3z = _o3t[10];
            return 1 == _o3r && (_o3u >= 1 && (_o3o.houg += 1 * _o3u), _o3v >= 1 && (_o3o.houg += 1 * _o3v), _o3w >= 1 && (_o3o.houm += 1 * _o3w)), _o3z > 0 && (_o3o.houm += 1 * _o3z), _o3o;
        };
    },
    97423: (_o40, _o41, _o42) => {
        'use strict';
        var _o43 = null;
        defineModule(_o41);
        Object.defineProperty(_o41, '__esModule', {
            'value': true
        }), _o41.getSlot425PersonalEffect = void 0;
        var _o44 = _o42(74496);
        _o41.getSlot425PersonalEffect = function(_o45) {
            var _o46 = null,
                _o47 = new _o44.SlotItemEffectModel(),
                _o48 = false,
                _o49 = new _o44.SlotItemEffectModel(),
                _o4a = 0;
            67 != _o45.ctype && 78 != _o45.ctype && 82 != _o45.ctype && 88 != _o45.ctype && 108 != _o45.ctype && 112 != _o45.ctype || (_o49.houg += 2, _o49.tais += 2, _o49.raig += 1, _o49.saku += 1, _o48 = true, _o4a = 1);
            var _o4b = _o45.get_slotnums(425);
            _o48 && _o47.add(_o49.multiply(_o4b));
            var _o4c = _o45.get_each_level_nums(425),
                _o4d = 0,
                _o4e = 0,
                _o4f = 0,
                _o4g = 0,
                _o4h = 0,
                _o4i = 0;
            _o4c.forEach(function(_o4j, _o4k) {
                _o4k >= 2 && (_o4d += _o4j), _o4k >= 4 && (_o4e += _o4j), _o4k >= 6 && (_o4f += _o4j), _o4k >= 7 && (_o4g += _o4j), _o4k >= 8 && (_o4h += _o4j), _o4k >= 9 && (_o4i += _o4j);
            });
            var _o4l = _o4c[10];
            return 1 == _o4a && (_o4d >= 1 && (_o47.tais += 1 * _o4d), _o4e >= 1 && (_o47.houg += 1 * _o4e), _o4f >= 1 && (_o47.tais += 1 * _o4f), _o4g >= 1 && (_o47.houm += 1 * _o4g), _o4h >= 1 && (_o47.raig += 1 * _o4h), _o4i >= 1 && (_o47.houg += 1 * _o4i), _o4l >= 1 && (_o47.tais += 1 * _o4l)), _o4g >= 1 && (_o47.houg += 1 * _o4g), _o4h >= 1 && (_o47.tais += 1 * _o4h), _o4i >= 1 && (_o47.houm += 1 * _o4i), _o4l >= 1 && (_o47.houm += 1 * _o4l), _o47;
        };
    },
    23551: (_o4m, _o4n, _o4o) => {
        'use strict';
        var _o4p = null;
        defineModule(_o4n);
        Object.defineProperty(_o4n, '__esModule', {
            'value': true
        }), _o4n.getSlot430PersonalEffect = void 0;
        var _o4q = _o4o(74496);
        _o4n.getSlot430PersonalEffect = function(_o4r) {
            var _o4s = null,
                _o4t = new _o4q.SlotItemEffectModel(),
                _o4u = false,
                _o4v = new _o4q.SlotItemEffectModel(),
                _o4w = 0;
            if (113 == _o4r.ctype && (_o4v.tyku += 1, _o4v.kaih += 1, _o4u = true), 58 != _o4r.ctype && 61 != _o4r.ctype && 64 != _o4r.ctype && 68 != _o4r.ctype && 80 != _o4r.ctype && 92 != _o4r.ctype && 113 != _o4r.ctype && 124 != _o4r.ctype || (_o4v.tyku += 2, _o4v.kaih += 1, _o4u = true, _o4w = 1), 0 == _o4u) return _o4t;
            var _o4x = _o4r.get_slotnums(430);
            if (_o4t.add(_o4v.multiply(_o4x)), 0 == _o4w) return _o4t;
            var _o4y = _o4r.get_each_level_nums(430),
                _o4z = 0,
                _o50 = 0,
                _o51 = 0;
            if (_o4w > 0 && _o4y.forEach(function(_o52, _o53) {
                    _o53 >= 2 && (_o4z += _o52), _o53 >= 4 && (_o50 += _o52), _o53 >= 7 && (_o51 += _o52);
                }), 1 == _o4w) {
                _o4z >= 1 && (_o4t.kaih += 1 * _o4z), _o50 >= 1 && (_o4t.tyku += 1 * _o50), _o51 >= 1 && (_o4t.kaih += 1 * _o51);
                var _o54 = _o4y[10];
                _o54 >= 1 && (_o4t.tyku += 1 * _o54);
            }
            return _o4t;
        };
    },
    6173: (_o55, _o56, _o57) => {
        'use strict';
        var _o58 = null;
        defineModule(_o56);
        Object.defineProperty(_o56, '__esModule', {
            'value': true
        }), _o56.getSlot437PersonalEffect = void 0;
        var _o59 = _o57(74496);
        _o56.getSlot437PersonalEffect = function(_o5a) {
            var _o5b = null,
                _o5c = new _o59.SlotItemEffectModel(),
                _o5d = false,
                _o5e = new _o59.SlotItemEffectModel();
            if (285 == _o5a.ship_id ? (_o5e.houg += 3, _o5e.tyku += 3, _o5e.kaih += 4, _o5d = true) : 894 == _o5a.ship_id || 899 == _o5a.ship_id ? (_o5e.houg += 4, _o5e.tyku += 4, _o5e.kaih += 4, _o5d = true) : 196 == _o5a.ship_id || 197 == _o5a.ship_id ? (_o5e.houg += 2, _o5e.tyku += 2, _o5e.kaih += 3, _o5d = true) : 508 == _o5a.ship_id || 509 == _o5a.ship_id || 646 == _o5a.ship_id ? (_o5e.houg += 2, _o5e.tyku += 2, _o5e.kaih += 2, _o5d = true) : 888 != _o5a.ship_id && 883 != _o5a.ship_id && 553 != _o5a.ship_id && 554 != _o5a.ship_id || (_o5e.houg += 1, _o5e.tyku += 2, _o5e.kaih += 2, _o5d = true), 0 == _o5d) return _o5c;
            var _o5f = _o5a.get_slotnums(437);
            return _o5c.add(_o5e.multiply(_o5f)), _o5c;
        };
    },
    53709: (_o5g, _o5h, _o5i) => {
        'use strict';
        var _o5j = null;
        defineModule(_o5h);
        Object.defineProperty(_o5h, '__esModule', {
            'value': true
        }), _o5h.getSlot438PersonalEffect = void 0;
        var _o5k = _o5i(74496);
        _o5h.getSlot438PersonalEffect = function(_o5l) {
            var _o5m = null,
                _o5n = new _o5k.SlotItemEffectModel(),
                _o5o = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o5l.ctype) > -1 && (_o5n.tais += 1, _o5n.kaih += 1), 160 == _o5l.ship_id || 488 == _o5l.ship_id || 141 == _o5l.ship_id ? (_o5n.tais += 1, _o5n.kaih += 1) : 145 != _o5l.ship_id && 588 != _o5l.ship_id && 667 != _o5l.ship_id && 578 != _o5l.ship_id && 476 != _o5l.ship_id && 363 != _o5l.ship_id && 961 != _o5l.ship_id || (_o5o = 1), 'うしお' == _o5l.yomi || 'まいかぜ' == _o5l.yomi || 'いそかぜ' == _o5l.yomi || 'はまかぜ' == _o5l.yomi || 'いかづち' == _o5l.yomi || 'やまぐも' == _o5l.yomi || 'うみかぜ' == _o5l.yomi || 'かわかぜ' == _o5l.yomi || 'すずかぜ' == _o5l.yomi ? _o5n.tais += 1 : 'しぐれ' != _o5l.yomi && 'やまかぜ' != _o5l.yomi && 'かみかぜ' != _o5l.yomi && 'はるかぜ' != _o5l.yomi && 'みくら' != _o5l.yomi && 'いしがき' != _o5l.yomi || (_o5n.tais += 1, _o5n.kaih += 1), 0 == _o5o) return _o5n;
            var _o5p = _o5l.get_each_level_nums(438),
                _o5q = 0,
                _o5r = 0,
                _o5s = 0,
                _o5t = _o5p[10];
            return _o5o > 0 && _o5p.forEach(function(_o5u, _o5v) {
                _o5v >= 4 && (_o5q += _o5u), _o5v >= 6 && (_o5r += _o5u), _o5v >= 8 && (_o5s += _o5u);
            }), 1 == _o5o && (_o5q >= 1 && (_o5n.tais += 1), _o5r >= 1 && (_o5n.kaih += 1), _o5s >= 1 && (_o5n.tais += 1), _o5t >= 1 && (_o5n.kaih += 1)), _o5n;
        };
    },
    99790: (_o5w, _o5x, _o5y) => {
        'use strict';
        var _o5z = null;
        defineModule(_o5x);
        Object.defineProperty(_o5x, '__esModule', {
            'value': true
        }), _o5x.getSlot439PersonalEffect = void 0;
        var _o60 = _o5y(74496);
        _o5x.getSlot439PersonalEffect = function(_o61) {
            var _o62 = null,
                _o63 = new _o60.SlotItemEffectModel();
            1 != _o61.stype && 2 != _o61.stype && 3 != _o61.stype && 21 != _o61.stype || (_o63.tais += 1, _o63.kaih += 1), 101 != _o61.ctype && 1 != _o61.stype || (_o63.tais += 1);
            var _o64 = _o61.getCountryName();
            return 'アメリカ' != _o64 && 'イギリス' != _o64 || (_o63.tais += 2), _o63;
        };
    },
    18387: (_o65, _o66, _o67) => {
        'use strict';
        var _o68 = null;
        defineModule(_o66);
        Object.defineProperty(_o66, '__esModule', {
            'value': true
        }), _o66.getSlot440_441PersonalEffect = void 0;
        var _o69 = _o67(74496);
        _o66.getSlot440_441PersonalEffect = function(_o6a) {
            var _o6b = null,
                _o6c = new _o69.SlotItemEffectModel();
            return 114 == _o6a.ctype && (_o6c.raig += 2), _o6c;
        };
    },
    70941: (_o6d, _o6e, _o6f) => {
        'use strict';
        var _o6g = null;
        defineModule(_o6e);
        Object.defineProperty(_o6e, '__esModule', {
            'value': true
        }), _o6e.getSlot442_443PersonalEffect = void 0;
        var _o6h = _o6f(74496);
        _o6e.getSlot442_443PersonalEffect = function(_o6i) {
            var _o6j = null,
                _o6k = new _o6h.SlotItemEffectModel();
            return 122 == _o6i.ctype ? (_o6k.raig += 1, _o6k.kaih += 2) : 114 == _o6i.ctype && (_o6k.raig += 2), _o6k;
        };
    },
    35025: (_o6l, _o6m, _o6n) => {
        'use strict';
        var _o6o = null;
        defineModule(_o6m);
        Object.defineProperty(_o6m, '__esModule', {
            'value': true
        }), _o6m.getSlot447PersonalEffect = void 0;
        var _o6p = _o6n(74496);
        _o6m.getSlot447PersonalEffect = function(_o6q) {
            var _o6r = null,
                _o6s = new _o6p.SlotItemEffectModel(),
                _o6t = _o6q.get_each_level_nums(447),
                _o6u = 0,
                _o6v = 0,
                _o6w = 0,
                _o6x = 0;
            _o6t.forEach(function(_o6y, _o6z) {
                _o6z >= 2 && (_o6u += _o6y), _o6z >= 4 && (_o6v += _o6y), _o6z >= 6 && (_o6w += _o6y), _o6z >= 8 && (_o6x += _o6y);
            }), _o6u >= 1 && (_o6s.houg += 1 * _o6u), _o6v >= 1 && (_o6s.tyku += 1 * _o6v), _o6w >= 1 && (_o6s.tais += 1 * _o6w), _o6x >= 1 && (_o6s.kaih += 1 * _o6x);
            var _o70 = _o6t[10];
            _o70 >= 1 && (_o6s.tais += 1 * _o70);
            var _o71 = false,
                _o72 = new _o6p.SlotItemEffectModel();
            if (76 == _o6q.ctype && (_o72.houg += 1, _o72.tais += 1, _o72.kaih += 2, _o71 = true), 'うんよう' == _o6q.yomi ? (_o72.houg += 1, _o72.tais += 1, _o72.kaih += 1, _o71 = true) : 'ほうしょう' != _o6q.yomi && 'たいげい・りゅうほう' != _o6q.yomi || (_o72.houg += 1, _o72.tais += 2, _o72.kaih += 1, _o71 = true), 0 == _o71) return _o6s;
            894 != _o6q.ship_id && 899 != _o6q.ship_id || (_o72.houg += 1, _o72.kaih += 1, _o72.tais += 1, _o72.tyku += 1, _o71 = true);
            var _o73 = _o6q.get_slotnums(447);
            return _o6s.add(_o72.multiply(_o73)), _o6s;
        };
    },
    96804: (_o74, _o75, _o76) => {
        'use strict';
        var _o77 = null;
        defineModule(_o75);
        Object.defineProperty(_o75, '__esModule', {
            'value': true
        }), _o75.getSlot450PersonalEffect = void 0;
        var _o78 = _o76(74496);
        _o75.getSlot450PersonalEffect = function(_o79) {
            var _o7a = null,
                _o7b = new _o78.SlotItemEffectModel(),
                _o7c = false,
                _o7d = new _o78.SlotItemEffectModel();
            if (101 == _o79.ctype && (_o7d.houg += 1, _o7d.tyku += 2, _o7d.souk += 1, _o7d.kaih += 3, _o7c = true), 1 == _o79.stype && (_o7d.tyku += 1, _o7d.souk += 1, _o7d.kaih += 2, _o7c = true), 0 == _o7c) return _o7b;
            var _o7e = _o79.get_slotnums(450);
            return _o7b.add(_o7d.multiply(_o7e)), _o7b;
        };
    },
    33896: (_o7f, _o7g, _o7h) => {
        'use strict';
        var _o7i = null;
        defineModule(_o7g);
        Object.defineProperty(_o7g, '__esModule', {
            'value': true
        }), _o7g.getSlot451PersonalEffect = void 0;
        var _o7j = _o7h(74496);
        _o7g.getSlot451PersonalEffect = function(_o7k) {
            var _o7l = null,
                _o7m = new _o7j.SlotItemEffectModel(),
                _o7n = false,
                _o7o = new _o7j.SlotItemEffectModel(),
                _o7p = 0;
            if ('あきつまる' == _o7k.yomi ? (_o7o.houg += 1, _o7o.tais += 2, _o7n = true, 166 == _o7k.ship_id && (_o7p = 2)) : 'やましおまる' == _o7k.yomi && (_o7o.houg += 1, _o7o.tais += 3, _o7n = true, _o7p = 1), 0 == _o7n) return _o7m;
            var _o7q = _o7k.get_slotnums(451);
            if (_o7m.add(_o7o.multiply(_o7q)), 0 == _o7p) return _o7m;
            var _o7r = _o7k.get_each_level_nums(451),
                _o7s = [];
            return _o7p > 0 && _o7r.forEach(function(_o7t, _o7u) {
                var _o7v = null;
                for (var _o7w = 1; _o7w <= _o7k.SLOT_LEVEL_MAX; _o7w++) _o7u >= _o7w && (null == _o7s[_o7w] && (_o7s[_o7w] = 0), _o7s[_o7w] += _o7t);
            }), 1 == _o7p ? (_o7s[1] >= 1 && (_o7m.houg += 2 * _o7s[1]), _o7s[2] >= 1 && (_o7m.houm += 1 * _o7s[2]), _o7s[3] >= 1 && (_o7m.tais += 1 * _o7s[3]), _o7s[4] >= 1 && (_o7m.houg += 1 * _o7s[4]), _o7s[6] >= 1 && (_o7m.houm += 1 * _o7s[6]), _o7s[8] >= 1 && (_o7m.tais += 1 * _o7s[8]), _o7s[10] >= 1 && (_o7m.houg += 1 * _o7s[10])) : 2 == _o7p && (_o7s[1] >= 1 && (_o7m.houg += 1 * _o7s[1]), _o7s[3] >= 1 && (_o7m.tais += 1 * _o7s[3]), _o7s[5] >= 1 && (_o7m.houm += 1 * _o7s[5]), _o7s[7] >= 1 && (_o7m.tais += 1 * _o7s[7]), _o7s[10] >= 1 && (_o7m.houg += 1 * _o7s[10])), _o7m;
        };
    },
    11031: function(_o7x, _o7y, _o7z) {
        'use strict';
        var _o80 = null;
        var _o81 = this && this.__importDefault || function(_o82) {
            var _o83 = null;
            return _o82 && _o82.__esModule ? _o82 : {
                'default': _o82
            };
        };
        defineModule(_o7y);
        Object.defineProperty(_o7y, '__esModule', {
            'value': true
        }), _o7y.getSlot455PersonalEffect = void 0;
        var _o84 = _o7z(74496),
            _o85 = _o81(_o7z(18622));
        _o7y.getSlot455PersonalEffect = function(_o86) {
            var _o87 = null,
                _o88 = new _o84.SlotItemEffectModel(),
                _o89 = false,
                _o8a = new _o84.SlotItemEffectModel(),
                _o8b = 0,
                _o8c = _o86.get_slotnums(455);
            if (1 != _o86.ctype && 5 != _o86.ctype && 12 != _o86.ctype || (_o8a.houg += 2, _o8a.tyku += 1, 12 == _o86.ctype && (_o8a.houg += 1), 666 == _o86.ship_id ? (_o8a.houg += 1, _o8a.tais += 1) : 959 == _o86.ship_id && (_o8a.houg += 2, _o8c >= 2 && (_o88.houg += 2), _o8c >= 3 && (_o88.houg += 3)), _o8b = 1, _o89 = true), 'うらなみ' == _o86.yomi && (_o8a.houg += 1, 647 == _o86.ship_id && (_o8a.houg += 1, _o8a.raig += 1, _o8a.tais += 1, _o8a.kaih += 1), _o89 = true), 0 == _o89) return _o88;
            if (_o88.add(_o8a.multiply(_o8c)), 0 == _o8b) return _o88;
            for (var _o8d = 0, _o8e = 0, _o8f = 0, _o8g = _o86.have_slot_ids(); _o8f < _o8g.length; _o8f++) {
                var _o8h = _o8g[_o8f],
                    _o8i = _o85.default.model.slot.getMst(_o8h),
                    _o8j = _o8i.equipType;
                12 != _o8j && 13 != _o8j || (_o8i.sakuteki >= 5 && (_o8d += _o86.get_slotnums(parseInt(_o8h))), _o8i.taiku >= 2 && (_o8e += _o86.get_slotnums(parseInt(_o8h))));
            }
            if (1 == _o8b) {
                _o8d >= 1 && (_o88.houg += 3, _o88.kaih += 2, _o88.raig += 1);
                var _o8k = _o86.get_slotnums(13),
                    _o8l = _o86.get_slotnums(125),
                    _o8m = _o86.get_slotnums(285),
                    _o8n = _o8k + _o8l + _o8m;
                1 == _o8n ? (_o88.houg += 1, _o88.raig += 3) : _o8n >= 2 && (_o88.houg += 2, _o88.raig += 5), _o8m >= 1 && (_o88.raig += 1), _o8e >= 1 && (_o88.tyku += 4);
            }
            return _o88;
        };
    },
    71383: (_o8o, _o8p, _o8q) => {
        'use strict';
        var _o8r = null;
        defineModule(_o8p);
        Object.defineProperty(_o8p, '__esModule', {
            'value': true
        }), _o8p.getSlot456PersonalEffect = void 0;
        var _o8s = _o8q(74496);
        _o8p.getSlot456PersonalEffect = function(_o8t) {
            var _o8u = null,
                _o8v = new _o8s.SlotItemEffectModel(),
                _o8w = false,
                _o8x = new _o8s.SlotItemEffectModel(),
                _o8y = _o8t.getCountryName();
            if ('アメリカ' == _o8y && (_o8x.houg += 3, _o8x.kaih += 4, _o8x.saku += 4, _o8v.houm += 3, _o8w = true), 'イギリス' != _o8y && 'オーストラリア' != _o8y || (_o8x.houg += 2, _o8x.kaih += 2, _o8x.saku += 2, _o8v.houm += 2, _o8w = true), 87 != _o8t.ctype && 91 != _o8t.ctype || (_o8x.houg += 1, _o8v.leng += 1, _o8w = true), 651 != _o8t.ship_id && 656 != _o8t.ship_id || (_o8v.houg += 2, _o8v.kaih += 2, _o8v.saku += 3, _o8v.leng += 1, _o8v.houm += 2), 0 == _o8w) return _o8v;
            var _o8z = _o8t.get_slotnums(456);
            return _o8v.add(_o8x.multiply(_o8z)), _o8v;
        };
    },
    55888: (_o90, _o91, _o92) => {
        'use strict';
        var _o93 = null;
        defineModule(_o91);
        Object.defineProperty(_o91, '__esModule', {
            'value': true
        }), _o91.getSlot457PersonalEffect = void 0;
        var _o94 = _o92(74496);
        _o91.getSlot457PersonalEffect = function(_o95) {
            var _o96 = null,
                _o97 = new _o94.SlotItemEffectModel(),
                _o98 = 0;
            if (109 == _o95.ctype ? (_o97.raig += 3, _o97.kaih += 3, _o98 = 1) : 71 == _o95.ctype || 103 == _o95.ctype ? (_o97.raig += 2, _o97.kaih += 2, _o98 = 2) : 44 == _o95.ctype && (_o97.raig += 1, _o97.kaih += 4, _o98 = 3), 0 == _o98) return _o97;
            var _o99 = _o95.get_each_level_nums(461),
                _o9a = [];
            return _o98 > 0 && _o99.forEach(function(_o9b, _o9c) {
                var _o9d = null;
                for (var _o9e = 1; _o9e <= _o95.SLOT_LEVEL_MAX; _o9e++) null == _o9a[_o9e] && (_o9a[_o9e] = 0), _o9c >= _o9e && (_o9a[_o9e] += _o9b);
            }), 1 == _o98 ? (_o9a[2] >= 1 && (_o97.raig += 1 * _o9a[2]), _o9a[3] >= 1 && (_o97.kaih += 1 * _o9a[3]), _o9a[4] >= 1 && (_o97.raig += 1 * _o9a[4]), _o9a[5] >= 1 && (_o97.houm += 1 * _o9a[5]), _o9a[6] >= 1 && (_o97.raig += 1 * _o9a[6]), _o9a[8] >= 1 && (_o97.raig += 1 * _o9a[8]), _o9a[10] >= 1 && (_o97.houm += 1 * _o9a[10])) : 2 == _o98 ? (_o9a[3] >= 1 && (_o97.kaih += 1 * _o9a[3]), _o9a[4] >= 1 && (_o97.raig += 1 * _o9a[4]), _o9a[6] >= 1 && (_o97.raig += 1 * _o9a[6]), _o9a[8] >= 1 && (_o97.raig += 1 * _o9a[8]), _o9a[10] >= 1 && (_o97.houm += 1 * _o9a[10])) : 3 == _o98 && (_o9a[4] >= 1 && (_o97.raig += 1 * _o9a[4]), _o9a[6] >= 1 && (_o97.raig += 1 * _o9a[6]), _o9a[8] >= 1 && (_o97.raig += 1 * _o9a[8]), _o9a[10] >= 1 && (_o97.houm += 1 * _o9a[10])), _o97;
        };
    },
    2258: (_o9f, _o9g, _o9h) => {
        'use strict';
        var _o9i = null;
        defineModule(_o9g);
        Object.defineProperty(_o9g, '__esModule', {
            'value': true
        }), _o9g.getSlot458PersonalEffect = void 0;
        var _o9j = _o9h(74496);
        _o9g.getSlot458PersonalEffect = function(_o9k) {
            var _o9l = null,
                _o9m = new _o9j.SlotItemEffectModel(),
                _o9n = 0,
                _o9o = false;
            if (13 != _o9k.stype && 14 != _o9k.stype || (_o9o = true), 109 == _o9k.ctype ? (_o9m.raig += 3, _o9m.kaih += 6, _o9n = 1) : 71 == _o9k.ctype || 103 == _o9k.ctype ? (_o9m.raig += 3, _o9m.kaih += 4, _o9n = 2) : 44 == _o9k.ctype && (_o9m.raig += 3, _o9m.kaih += 3, _o9n = 3), 0 == _o9o && 0 == _o9n) return _o9m;
            var _o9p = [];
            [458, 461].forEach(function(_o9q) {
                var _o9r = null,
                    _o9s = _o9k.get_each_level_nums(_o9q);
                null == _o9p[_o9q] && (_o9p[_o9q] = []), _o9s.forEach(function(_o9t, _o9u) {
                    var _o9v = null;
                    for (var _o9w = 1; _o9w <= _o9k.SLOT_LEVEL_MAX; _o9w++) null == _o9p[_o9q][_o9w] && (_o9p[_o9q][_o9w] = 0), _o9u >= _o9w && (_o9p[_o9q][_o9w] += _o9t);
                });
            });
            var _o9x = _o9p[458][2],
                _o9y = _o9p[458][3],
                _o9z = _o9p[458][4],
                _oa0 = _o9p[458][5],
                _oa1 = _o9p[458][6],
                _oa2 = _o9p[458][8],
                _oa3 = _o9p[458][10],
                _oa4 = _o9p[461][4];
            return _o9n >= 1 && _o9n <= 3 && (_o9z >= 1 && (_o9m.houm += 1 * _o9z), _oa1 >= 1 && (_o9m.kaih += 1 * _oa1), _oa2 >= 1 && (_o9m.raig += 1 * _oa2)), _o9o && (_o9y >= 1 && (_o9m.kaih += 1 * _o9y), _oa0 >= 1 && (_o9m.raig += 1 * _oa0), _oa3 >= 1 && (_o9m.houm += 1 * _oa3), _o9x >= 1 && _oa4 >= 1 && (_o9m.raig += 7, _o9m.houm += 5)), _o9m;
        };
    },
    43768: (_oa5, _oa6, _oa7) => {
        'use strict';
        var _oa8 = null;
        defineModule(_oa6);
        Object.defineProperty(_oa6, '__esModule', {
            'value': true
        }), _oa6.getSlot463PersonalEffect = void 0;
        var _oa9 = _oa7(74496);
        _oa6.getSlot463PersonalEffect = function(_oaa) {
            var _oab = null,
                _oac = new _oa9.SlotItemEffectModel(),
                _oad = false,
                _oae = new _oa9.SlotItemEffectModel(),
                _oaf = _oaa.get_slotnums(142),
                _oag = _oaa.get_slotnums(460),
                _oah = _oaf + _oag;
            if (37 == _oaa.ctype && (_oae.houg += 1, _oae.tyku += 2, _oae.kaih += 1, _oae.houm += 1, _oah >= 1 && (_oac.tyku += 1, _oac.kaih += 1, _oac.houm += 1), _oad = true), 916 != _oaa.ship_id && 911 != _oaa.ship_id && 546 != _oaa.ship_id || (_oae.houg += 1, _oae.kaih += 1, _oae.houm += 2, _oag >= 1 && (_oac.houg += 1, _oac.kaih += 1, _oac.houm += 2), _oad = true), 0 == _oad) return _oac;
            var _oai = _oaa.get_slotnums(463);
            return _oac.add(_oae.multiply(_oai)), _oac;
        };
    },
    92174: (_oaj, _oak, _oal) => {
        'use strict';
        var _oam = null;
        defineModule(_oak);
        Object.defineProperty(_oak, '__esModule', {
            'value': true
        }), _oak.getSlot464PersonalEffect = void 0;
        var _oan = _oal(74496);
        _oak.getSlot464PersonalEffect = function(_oao) {
            var _oap = null,
                _oaq = new _oan.SlotItemEffectModel(),
                _oar = false,
                _oas = new _oan.SlotItemEffectModel(),
                _oat = _oao.get_slotnums(142),
                _oau = _oao.get_slotnums(460),
                _oav = _oat + _oau;
            if (37 == _oao.ctype ? (_oas.tyku += 3, _oas.kaih += 2, _oav >= 1 && (_oaq.tyku += 2, _oaq.kaih += 1, _oaq.houm += 1), _oar = true) : 6 != _oao.ctype && 73 != _oao.ctype && 113 != _oao.ctype || (_oas.tyku = _oas.tyku - 2, _oas.kaih = _oas.kaih - 2, _oar = true), 916 != _oao.ship_id && 911 != _oao.ship_id && 546 != _oao.ship_id && 593 != _oao.ship_id && 954 != _oao.ship_id || (_oas.tyku += 2, _oas.kaih += 2, _oau >= 1 && (_oaq.houg += 2, _oaq.tyku += 2, _oaq.kaih += 2, _oaq.houm += 3), _oar = true), 0 == _oar) return _oaq;
            var _oaw = _oao.get_slotnums(464);
            return _oaq.add(_oas.multiply(_oaw)), _oaq;
        };
    },
    38003: (_oax, _oay, _oaz) => {
        'use strict';
        var _ob0 = null;
        defineModule(_oay);
        Object.defineProperty(_oay, '__esModule', {
            'value': true
        }), _oay.getSlot465PersonalEffect = void 0;
        var _ob1 = _oaz(74496);
        _oay.getSlot465PersonalEffect = function(_ob2) {
            var _ob3 = null,
                _ob4 = new _ob1.SlotItemEffectModel(),
                _ob5 = false,
                _ob6 = new _ob1.SlotItemEffectModel(),
                _ob7 = _ob2.get_slotnums(142),
                _ob8 = _ob2.get_slotnums(460),
                _ob9 = _ob7 + _ob8;
            if (916 == _ob2.ship_id ? (_ob6.houg += 2, _ob6.kaih += 8, _ob6.houm += 2, _ob8 >= 1 && (_ob4.kaih += 2, _ob4.houm += 1), _ob5 = true) : 911 != _ob2.ship_id && 546 != _ob2.ship_id || (_ob6.houg += 1, _ob6.kaih += 2, _ob6.houm += 1, _ob8 >= 1 && (_ob4.kaih += 1, _ob4.houm += 1), _ob5 = true), 37 == _ob2.ctype && _ob9 >= 1 && (_ob4.houg += 2, _ob4.houm += 2), 0 == _ob5) return _ob4;
            var _oba = _ob2.get_slotnums(465);
            return _ob4.add(_ob6.multiply(_oba)), _ob4;
        };
    },
    65455: (_obb, _obc, _obd) => {
        'use strict';
        var _obe = null;
        defineModule(_obc);
        Object.defineProperty(_obc, '__esModule', {
            'value': true
        }), _obc.getSlot466PersonalEffect = void 0;
        var _obf = _obd(74496);
        _obc.getSlot466PersonalEffect = function(_obg) {
            var _obh = null,
                _obi = new _obf.SlotItemEffectModel(),
                _obj = false,
                _obk = new _obf.SlotItemEffectModel();
            if (277 == _obg.ship_id || 278 == _obg.ship_id || 156 == _obg.ship_id || 288 == _obg.ship_id || 112 == _obg.ship_id || 280 == _obg.ship_id || 279 == _obg.ship_id ? (_obk.houg += 1, _obk.houm += 1, _obj = true) : 461 == _obg.ship_id || 462 == _obg.ship_id || 466 == _obg.ship_id || 467 == _obg.ship_id ? (_obk.houg += 2, _obk.kaih += 2, _obk.houm += 1, _obj = true) : 594 != _obg.ship_id && 698 != _obg.ship_id && 646 != _obg.ship_id && 599 != _obg.ship_id && 610 != _obg.ship_id && 196 != _obg.ship_id && 197 != _obg.ship_id || (_obk.houg += 1, _obk.kaih += 1, _obk.houm += 2, _obj = true), 0 == _obj) return _obi;
            var _obl = _obg.get_slotnums(466);
            return _obi.add(_obk.multiply(_obl)), _obi;
        };
    },
    70362: (_obm, _obn, _obo) => {
        'use strict';
        var _obp = null;
        defineModule(_obn);
        Object.defineProperty(_obn, '__esModule', {
            'value': true
        }), _obn.getSlot467PersonalEffect = void 0;
        var _obq = _obo(74496);
        _obn.getSlot467PersonalEffect = function(_obr) {
            var _obs = null,
                _obt = new _obq.SlotItemEffectModel(),
                _obu = false,
                _obv = new _obq.SlotItemEffectModel();
            if ('アメリカ' == _obr.getCountryName()) {
                for (var _obw = _obr.getUSSWaterRaderDict(), _obx = _obr.getUSSAirRaderDict(), _oby = 0, _obz = 0, _oc0 = 0, _oc1 = _obr.have_slot_ids(); _oc0 < _oc1.length; _oc0++) {
                    var _oc2 = _oc1[_oc0];
                    _obw[parseInt(_oc2)] && (_oby += _obr.get_slotnums(parseInt(_oc2))), _obx[parseInt(_oc2)] && (_obz += _obr.get_slotnums(parseInt(_oc2)));
                }
                _obv.houg += 1, _obv.tyku += 1, _obv.kaih += 2, _oby >= 1 && (_obt.houg += 1, _obt.tyku += 1, _obt.kaih += 1, _obt.houm += 2), _obz >= 1 && (_obt.tyku += 2, _obt.kaih += 2), 65 != _obr.ctype && 93 != _obr.ctype && 102 != _obr.ctype && 107 != _obr.ctype && 125 != _obr.ctype || (_obv.tyku += 2, _obv.kaih += 1), _obu = true;
            }
            if (0 == _obu) return _obt;
            var _oc3 = _obr.get_slotnums(467);
            return _obt.add(_obv.multiply(_oc3)), _obt;
        };
    },
    68086: function(_oc4, _oc5, _oc6) {
        'use strict';
        var _oc7 = null;
        var _oc8 = this && this.__importDefault || function(_oc9) {
            var _oca = null;
            return _oc9 && _oc9.__esModule ? _oc9 : {
                'default': _oc9
            };
        };
        defineModule(_oc5);
        Object.defineProperty(_oc5, '__esModule', {
            'value': true
        }), _oc5.getSlot470PersonalEffect = void 0;
        var _ocb = _oc6(74496),
            _occ = _oc8(_oc6(18622));
        _oc5.getSlot470PersonalEffect = function(_ocd) {
            var _oce = null,
                _ocf = new _ocb.SlotItemEffectModel(),
                _ocg = false,
                _och = new _ocb.SlotItemEffectModel(),
                _oci = 0,
                _ocj = 0;
            23 == _ocd.ctype || 18 == _ocd.ctype ? (_och.houg += 1, _ocg = true, _oci = 1) : 30 == _ocd.ctype && (_och.houg += 2, _ocg = true, _oci = 2), ('しぐれ' == _ocd.yomi || 'ゆきかぜ' == _ocd.yomi || 'いそかぜ' == _ocd.yomi) && (_och.kaih += 2, _ocg = true), 961 == _ocd.ship_id && (_och.houg += 3, _och.houm += 3, _och.kaih += 2, _ocg = true);
            var _ock = _ocd.get_slotnums(470);
            566 != _ocd.ship_id && 567 != _ocd.ship_id && 568 != _ocd.ship_id && 656 != _ocd.ship_id && 670 != _ocd.ship_id && 915 != _ocd.ship_id && 651 != _ocd.ship_id && 145 != _ocd.ship_id && 961 != _ocd.ship_id && 951 != _ocd.ship_id || (_ocf.houg += 1, _ocf.houm += 2, _ock >= 2 && (_ocf.houg += 2), _ocj = 1), _ocg && _ocf.add(_och.multiply(_ock));
            var _ocl = 0;
            if (_oci > 0)
                for (var _ocm = 0, _ocn = _ocd.have_slot_ids(); _ocm < _ocn.length; _ocm++) {
                    var _oco = _ocn[_ocm],
                        _ocp = _occ.default.model.slot.getMst(_oco),
                        _ocq = _ocp.equipType;
                    12 != _ocq && 13 != _ocq || (_ocp.sakuteki >= 5 && (_ocl += _ocd.get_slotnums(parseInt(_oco))), _ocp.taiku >= 2 && _ocd.get_slotnums(parseInt(_oco)));
                }
            if (1 == _oci ? _ocl >= 1 && (_ocf.houg += 1, _ocf.kaih += 1, _ocf.raig += 3, _ocf.houm += 1) : 2 == _oci && _ocl >= 1 && (_ocf.houg += 2, _ocf.kaih += 1, _ocf.raig += 3, _ocf.houm += 3), 0 == _ocj) return _ocf;
            var _ocr = _ocd.get_each_level_nums(470),
                _ocs = 0,
                _oct = 0;
            if (_ocj > 0 && _ocr.forEach(function(_ocu, _ocv) {
                    _ocv >= 5 && (_ocs += _ocu), _ocv >= 8 && (_oct += _ocu);
                }), 1 == _ocj) {
                _ocs >= 1 && (_ocf.houm += 1 * _ocs), _oct >= 1 && (_ocf.houg += 1 * _oct);
                var _ocw = _ocr[10];
                _ocw >= 1 && (_ocf.houm += 1 * _ocw);
            }
            return _ocf;
        };
    },
    78173: (_ocx, _ocy, _ocz) => {
        'use strict';
        var _od0 = null;
        defineModule(_ocy);
        Object.defineProperty(_ocy, '__esModule', {
            'value': true
        }), _ocy.getSlot471PersonalEffect = void 0;
        var _od1 = _ocz(74496);
        _ocy.getSlot471PersonalEffect = function(_od2) {
            var _od3 = null,
                _od4 = new _od1.SlotItemEffectModel(),
                _od5 = false,
                _od6 = new _od1.SlotItemEffectModel(),
                _od7 = 0;
            if ('フランス' == _od2.getCountryName() && (_od6.houg += 2, _od6.kaih += 2, _od6.houm += 2, _od5 = true, _od7 = 1), 79 == _od2.ctype && (_od6.houg += 2, _od6.houm += 1, _od5 = true), 0 == _od5) return _od4;
            var _od8 = _od2.get_slotnums(471);
            if (_od4.add(_od6.multiply(_od8)), 0 == _od7) return _od4;
            var _od9 = _od2.get_each_level_nums(471),
                _oda = 0,
                _odb = 0;
            if (_od7 > 0 && _od9.forEach(function(_odc, _odd) {
                    _odd >= 6 && (_oda += _odc), _odd >= 8 && (_odb += _odc);
                }), 1 == _od7) {
                _oda >= 1 && (_od4.kaih += 1 * _oda, _od4.houm += 1 * _oda), _odb >= 1 && (_od4.houg += 1 * _odb, _od4.kaih += 1 * _odb, _od4.houm += 1 * _odb);
                var _ode = _od9[10];
                _ode >= 1 && (_od4.houg += 1 * _ode, _od4.houm += 1 * _ode);
            }
            return _od4;
        };
    },
    22581: (_odf, _odg, _odh) => {
        'use strict';
        var _odi = null;
        defineModule(_odg);
        Object.defineProperty(_odg, '__esModule', {
            'value': true
        }), _odg.getSlot472PersonalEffect = void 0;
        var _odj = _odh(74496);
        _odg.getSlot472PersonalEffect = function(_odk) {
            var _odl = null,
                _odm = new _odj.SlotItemEffectModel(),
                _odn = false,
                _odo = new _odj.SlotItemEffectModel(),
                _odp = _odk.getCountryName();
            if ('アメリカ' == _odp && (_odo.tais += 2, _odn = true), 'イギリス' == _odp && (_odo.tais += 1, _odn = true), 1 == _odk.stype && (_odo.kaih += 1, _odn = true), _odn) {
                var _odq = _odk.get_slotnums(472);
                _odm.add(_odo.multiply(_odq));
            }
            return 920 == _odk.ship_id && (_odm.tais += 1, _odm.kaih += 1, _odm.houm += 1), _odm;
        };
    },
    13053: (_odr, _ods, _odt) => {
        'use strict';
        var _odu = null;
        defineModule(_ods);
        Object.defineProperty(_ods, '__esModule', {
            'value': true
        }), _ods.getSlot473PersonalEffect = void 0;
        var _odv = _odt(74496);
        _ods.getSlot473PersonalEffect = function(_odw) {
            var _odx = null,
                _ody = new _odv.SlotItemEffectModel(),
                _odz = false,
                _oe0 = new _odv.SlotItemEffectModel(),
                _oe1 = _odw.getCountryName();
            if ('アメリカ' == _oe1 && (_oe0.houg += 1, _oe0.kaih += 1, _oe0.tyku += 1, _odz = true), 'イギリス' == _oe1 && (_oe0.houg += 1, _oe0.kaih += 1, _odz = true), 0 == _odz) return _ody;
            var _oe2 = _odw.get_slotnums(473);
            return _ody.add(_oe0.multiply(_oe2)), _ody;
        };
    },
    47874: (_oe3, _oe4, _oe5) => {
        'use strict';
        var _oe6 = null;
        defineModule(_oe4);
        Object.defineProperty(_oe4, '__esModule', {
            'value': true
        }), _oe4.getSlot474PersonalEffect = void 0;
        var _oe7 = _oe5(74496);
        _oe4.getSlot474PersonalEffect = function(_oe8) {
            var _oe9 = null,
                _oea = new _oe7.SlotItemEffectModel(),
                _oeb = false,
                _oec = new _oe7.SlotItemEffectModel(),
                _oed = _oe8.getCountryName();
            if ('アメリカ' == _oed && (_oec.houg += 2, _oec.kaih += 1, _oec.tyku += 1, _oeb = true), 'イギリス' == _oed && (_oec.houg += 1, _oec.kaih += 1, _oec.tyku += 1, _oeb = true), 'フランス' == _oed && (_oec.houg += 1, _oec.tyku += 1, _oeb = true), 707 != _oe8.ship_id && 930 != _oe8.ship_id || (_oec.houg += 1, _oec.kaih += 1, _oeb = true), 0 == _oeb) return _oea;
            var _oee = _oe8.get_slotnums(474);
            return _oea.add(_oec.multiply(_oee)), _oea;
        };
    },
    42788: (_oef, _oeg, _oeh) => {
        'use strict';
        var _oei = null;
        defineModule(_oeg);
        Object.defineProperty(_oeg, '__esModule', {
            'value': true
        }), _oeg.getSlot478PersonalEffect = void 0;
        var _oej = _oeh(74496);
        _oeg.getSlot478PersonalEffect = function(_oek) {
            var _oel = null,
                _oem = new _oej.SlotItemEffectModel(),
                _oen = _oek.get_each_level_nums(478),
                _oeo = [];
            return _oen.forEach(function(_oep, _oeq) {
                var _oer = null;
                for (var _oes = 1; _oes <= _oek.SLOT_LEVEL_MAX; _oes++) _oeq >= _oes && (null == _oeo[_oes] && (_oeo[_oes] = 0), _oeo[_oes] += _oep);
            }), _oeo.every(function(_oet) {
                return 0 == _oet;
            }) || (_oeo[1] >= 1 && (_oem.houg += 1), _oeo[2] >= 1 && (_oem.houm += 1), _oeo[3] >= 1 && (_oem.kaih += 1), _oeo[4] >= 1 && (_oem.baku += 1), _oeo[5] >= 1 && (_oem.raig += 1), _oeo[6] >= 1 && (_oem.tyku += 1), _oeo[7] >= 1 && (_oem.houg += 1), _oeo[8] >= 1 && (_oem.houm += 1), _oeo[9] >= 1 && (_oem.kaih += 1), _oeo[10] >= 1 && (_oem.houg += 1)), _oem;
        };
    },
    22218: (_oeu, _oev, _oew) => {
        'use strict';
        var _oex = null;
        defineModule(_oev);
        Object.defineProperty(_oev, '__esModule', {
            'value': true
        }), _oev.getSlot47PersonalEffect = void 0;
        var _oey = _oew(74496);
        _oev.getSlot47PersonalEffect = function(_oez) {
            var _of0 = null,
                _of1 = new _oey.SlotItemEffectModel(),
                _of2 = new _oey.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_oez.yomi) >= 0 ? (_of2.tais += 3, _of2.kaih += 2, _of2.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_oez.yomi) >= 0 && (_of2.tais += 2, _of2.kaih += 2), !_of2.exists()) return _of1;
            var _of3 = _oez.get_slotnums(47) + _oez.get_slotnums(438);
            return _of1 = _of2.multiply(_of3);
        };
    },
    57664: (_of4, _of5, _of6) => {
        'use strict';
        var _of7 = null;
        defineModule(_of5);
        Object.defineProperty(_of5, '__esModule', {
            'value': true
        }), _of5.getSlot483PersonalEffect = void 0;
        var _of8 = _of6(74496);
        _of5.getSlot483PersonalEffect = function(_of9) {
            var _ofa = null,
                _ofb = new _of8.SlotItemEffectModel(),
                _ofc = 0,
                _ofd = 0,
                _ofe = 0,
                _off = 0,
                _ofg = 0,
                _ofh = 0,
                _ofi = 0;
            if (6 == _of9.ctype ? (_ofb.houg += 2, _ofb.tyku += 3, _ofb.houm += 1, _ofc = 1) : 2 == _of9.ctype ? (_ofb.houg += 1, _ofb.tyku += 2, _ofb.kaih += 2, _ofb.houm += 1, _ofd = 1) : 37 == _of9.ctype && (_ofe = 1), 8 == _of9.stype || 9 == _of9.stype || 10 == _of9.stype ? _off = 1 : 5 != _of9.stype && 6 != _of9.stype || (_ofg = 1), 149 == _of9.ship_id ? (_ofb.houg += 2, _ofb.tyku += 2) : 591 == _of9.ship_id ? (_ofb.houg += 3, _ofb.tyku += 3, _ofb.kaih += 1) : 150 == _of9.ship_id ? (_ofb.houg += 1, _ofb.tyku += 1) : 592 == _of9.ship_id ? (_ofb.houg += 2, _ofb.tyku += 2, _ofb.kaih += 2) : 151 == _of9.ship_id ? (_ofb.houg += 1, _ofb.tyku += 2, _ofb.kaih += 2) : 593 == _of9.ship_id ? (_ofb.houg += 2, _ofb.tyku += 5, _ofb.kaih += 3) : 954 == _of9.ship_id ? (_ofb.houg += 2, _ofb.tyku += 4, _ofb.kaih += 2) : 152 == _of9.ship_id ? (_ofb.houg += 2, _ofb.tyku += 2) : 911 == _of9.ship_id || 916 == _of9.ship_id || 546 == _of9.ship_id ? (_ofb.houg += 2, _ofb.tyku += 2, _ofb.kaih += 2, _ofh = 1) : 553 == _of9.ship_id || 554 == _of9.ship_id ? (_ofb.houg += 1, _ofb.tyku += 2, _ofb.kaih += 1, _ofi = 1) : 541 == _of9.ship_id || 411 == _of9.ship_id || 412 == _of9.ship_id ? (_ofb.houg += 1, _ofb.tyku += 2) : 573 == _of9.ship_id && (_ofb.houg += 2, _ofb.tyku += 2, _ofb.kaih += 1), 0 == [_ofc, _ofd, _ofe, _off, _ofg, _ofh, _ofi].reduce(function(_ofj, _ofk) {
                    return _ofj + _ofk;
                }, 0)) return _ofb;
            var _ofl = _of9.get_each_level_nums(483),
                _ofm = 0,
                _ofn = [];
            return _ofl.forEach(function(_ofo, _ofp) {
                var _ofq = null;
                _ofp >= 6 && (_ofm += _ofo);
                for (var _ofr = 1; _ofr <= _of9.SLOT_LEVEL_MAX; _ofr++) null == _ofn[_ofr] && (_ofn[_ofr] = 0), _ofp >= _ofr && (_ofn[_ofr] += _ofo);
            }), 1 == _ofc ? (_ofm >= 1 && (_ofb.houm += 1), _ofl[10] >= 1 && (_ofb.houm += 1)) : 1 == _ofd ? (_ofn[5] >= 1 && (_ofb.kaih += 1), _ofn[6] >= 1 && (_ofb.houm += 1), _ofn[10] >= 1 && (_ofb.kaih += 1)) : 1 == _ofe && (_ofn[6] >= 1 && (_ofb.houm += 1), _ofn[10] >= 1 && (_ofb.kaih += 1)), 1 == _off ? (_ofn[2] >= 1 && (_ofb.tyku += 1), _ofn[4] >= 1 && (_ofb.houg += 1), _ofn[7] >= 1 && (_ofb.kaih += 1), _ofn[8] >= 1 && (_ofb.tyku += 1), _ofn[9] >= 1 && (_ofb.houg += 1)) : 1 == _ofg && (_ofn[2] >= 1 && (_ofb.tyku += 1), _ofn[4] >= 1 && (_ofb.houg += 1), _ofn[6] >= 1 && (_ofb.kaih += 1), _ofn[8] >= 1 && (_ofb.houm += 1), _ofn[10] >= 1 && (_ofb.houg += 1)), 1 == _ofh ? _ofn[5] >= 1 && (_ofb.houm += 1) : 1 == _ofi && (_ofn[1] >= 1 && (_ofb.houm += 1), _ofn[3] >= 1 && (_ofb.houm += 1)), _ofb;
        };
    },
    44990: (_ofs, _oft, _ofu) => {
        'use strict';
        var _ofv = null;
        defineModule(_oft);
        Object.defineProperty(_oft, '__esModule', {
            'value': true
        }), _oft.getSlot485PersonalEffect = void 0;
        var _ofw = _ofu(74496);
        _oft.getSlot485PersonalEffect = function(_ofx) {
            var _ofy = null,
                _ofz = new _ofw.SlotItemEffectModel(),
                _og0 = false,
                _og1 = new _ofw.SlotItemEffectModel();
            if (9 == _ofx.ctype && (_og1.houg += 1, _og1.kaih += 2, _og1.tyku += 3, _og0 = true), 501 == _ofx.ship_id || 506 == _ofx.ship_id ? (_og1.kaih += 1, _og1.tyku += 2, _og1.houm += 1, _og0 = true) : 502 != _ofx.ship_id && 507 != _ofx.ship_id || (_og1.kaih += 1, _og1.tyku += 1, _og1.houm += 1, _og0 = true), _og0) {
                var _og2 = _ofx.get_slotnums(485);
                _ofz.add(_og1.multiply(_og2));
            }
            var _og3 = _ofx.get_each_level_nums(485),
                _og4 = 0,
                _og5 = 0,
                _og6 = 0,
                _og7 = _og3[10];
            return _og3.forEach(function(_og8, _og9) {
                _og9 >= 3 && (_og4 += _og8), _og9 >= 5 && (_og5 += _og8), _og9 >= 7 && (_og6 += _og8);
            }), _og4 > 0 && (_ofz.houg += 1 * _og4), _og5 > 0 && (_ofz.tyku += 1 * _og5), _og6 > 0 && (_ofz.kaih += 1 * _og6), _og7 > 0 && (_ofz.houm += 1 * _og7), _ofz;
        };
    },
    83957: (_oga, _ogb, _ogc) => {
        'use strict';
        var _ogd = null;
        defineModule(_ogb);
        Object.defineProperty(_ogb, '__esModule', {
            'value': true
        }), _ogb.getSlot486PersonalEffect = void 0;
        var _oge = _ogc(74496);
        _ogb.getSlot486PersonalEffect = function(_ogf) {
            var _ogg = null,
                _ogh = new _oge.SlotItemEffectModel(),
                _ogi = false,
                _ogj = new _oge.SlotItemEffectModel();
            if (894 == _ogf.ship_id || 899 == _ogf.ship_id ? (_ogj.houg += 4, _ogj.tyku += 4, _ogj.kaih += 3, _ogj.houm += 2, _ogi = true) : 888 != _ogf.ship_id && 883 != _ogf.ship_id || (_ogj.houg += 2, _ogj.tyku += 2, _ogj.kaih += 2, _ogj.houm += 1, _ogi = true), _ogi) {
                var _ogk = _ogf.get_slotnums(486);
                _ogh.add(_ogj.multiply(_ogk));
            }
            var _ogl = _ogf.get_each_level_nums(486),
                _ogm = 0,
                _ogn = 0,
                _ogo = _ogl[10];
            return _ogl.forEach(function(_ogp, _ogq) {
                _ogq >= 6 && (_ogm += _ogp), _ogq >= 8 && (_ogn += _ogp);
            }), _ogm > 0 && (_ogh.kaih += 1 * _ogm, _ogh.houm += 1 * _ogm), _ogn > 0 && (_ogh.tyku += 1 * _ogn, _ogh.kaih += 1 * _ogn), _ogo > 0 && (_ogh.houg += 1 * _ogo, _ogh.houm += 1 * _ogo), _ogh;
        };
    },
    78539: (_ogr, _ogs, _ogt) => {
        'use strict';
        var _ogu = null;
        defineModule(_ogs);
        Object.defineProperty(_ogs, '__esModule', {
            'value': true
        }), _ogs.getSlot487PersonalEffect = void 0;
        var _ogv = _ogt(74496);
        _ogs.getSlot487PersonalEffect = function(_ogw) {
            var _ogx = null,
                _ogy = new _ogv.SlotItemEffectModel(),
                _ogz = false,
                _oh0 = new _ogv.SlotItemEffectModel();
            if (894 == _ogw.ship_id || 899 == _ogw.ship_id ? (_oh0.houg += 5, _oh0.tyku += 3, _oh0.kaih += 2, _oh0.houm += 4, _ogz = true) : 888 != _ogw.ship_id && 883 != _ogw.ship_id || (_oh0.houg += 3, _oh0.tyku += 1, _oh0.kaih += 1, _oh0.houm += 2, _ogz = true), _ogz) {
                var _oh1 = _ogw.get_slotnums(487);
                _ogy.add(_oh0.multiply(_oh1));
            }
            var _oh2 = _ogw.get_each_level_nums(487),
                _oh3 = 0,
                _oh4 = 0,
                _oh5 = _oh2[10];
            return _oh2.forEach(function(_oh6, _oh7) {
                _oh7 >= 6 && (_oh3 += _oh6), _oh7 >= 8 && (_oh4 += _oh6);
            }), _oh3 > 0 && (_ogy.houg += 1 * _oh3, _ogy.kaih += 1 * _oh3), _oh4 > 0 && (_ogy.tyku += 1 * _oh4, _ogy.houm += 1 * _oh4), _oh5 > 0 && (_ogy.houg += 1 * _oh5, _ogy.houm += 1 * _oh5), _ogy;
        };
    },
    96282: (_oh8, _oh9, _oha) => {
        'use strict';
        var _ohb = null;
        defineModule(_oh9);
        Object.defineProperty(_oh9, '__esModule', {
            'value': true
        }), _oh9.getSlot488PersonalEffect = void 0;
        var _ohc = _oha(74496);
        _oh9.getSlot488PersonalEffect = function(_ohd) {
            var _ohe = null,
                _ohf = new _ohc.SlotItemEffectModel(),
                _ohg = false,
                _ohh = new _ohc.SlotItemEffectModel(),
                _ohi = 0,
                _ohj = _ohd.getCountryName(),
                _ohk = {
                    145: 1,
                    961: 1,
                    557: 2,
                    558: 2,
                    228: 2,
                    656: 2,
                    651: 2,
                    243: 2,
                    412: 3,
                    411: 3,
                    419: 3,
                    235: 3,
                    407: 3,
                    538: 3,
                    537: 3,
                    663: 3,
                    668: 3,
                    43: 3
                }[_ohd.ship_id];
            if (('日本' == _ohj && 2 == _ohd.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_ohd.ctype] && 1 == _ohd.stype) && (_ohh.tais += 1, _ohh.kaih += 1, _ohg = true), 1 == _ohk ? (_ohh.tais += 5, _ohh.kaih += 4, _ohh.houm += 2, _ohg = true, _ohi = 1) : 2 == _ohk ? (_ohh.tais += 2, _ohh.kaih += 1, _ohh.houm += 1, _ohg = true, _ohi = 2) : 3 == _ohk && (_ohh.tais += 1, _ohg = true, _ohi = 2), 0 == _ohg) return _ohf;
            var _ohl = _ohd.get_slotnums(488);
            if (_ohf.add(_ohh.multiply(_ohl)), 0 == _ohi) return _ohf;
            var _ohm = _ohd.get_each_level_nums(488),
                _ohn = [];
            return _ohm.forEach(function(_oho, _ohp) {
                var _ohq = null;
                for (var _ohr = 1; _ohr <= _ohd.SLOT_LEVEL_MAX; _ohr++) _ohp >= _ohr && (null == _ohn[_ohr] && (_ohn[_ohr] = 0), _ohn[_ohr] += _oho);
            }), 1 == _ohi ? (_ohn[3] >= 1 && (_ohf.kaih += 1 * _ohn[3]), _ohn[5] >= 1 && (_ohf.tais += 1 * _ohn[5]), _ohn[7] >= 1 && (_ohf.houm += 1 * _ohn[7]), _ohn[8] >= 1 && (_ohf.kaih += 1 * _ohn[8]), _ohn[9] >= 1 && (_ohf.tais += 1 * _ohn[9]), _ohn[10] >= 1 && (_ohf.tais += 1 * _ohn[10])) : 2 == _ohi && (_ohn[5] >= 1 && (_ohf.tais += 1 * _ohn[5]), _ohn[7] >= 1 && (_ohf.kaih += 1 * _ohn[7]), _ohn[9] >= 1 && (_ohf.houm += 1 * _ohn[9]), _ohn[10] >= 1 && (_ohf.tais += 1 * _ohn[10])), _ohf;
        };
    },
    49679: (_ohs, _oht, _ohu) => {
        'use strict';
        var _ohv = null;
        defineModule(_oht);
        Object.defineProperty(_oht, '__esModule', {
            'value': true
        }), _oht.getSlot489PersonalEffect = void 0;
        var _ohw = _ohu(74496);
        _oht.getSlot489PersonalEffect = function(_ohx) {
            var _ohy = null,
                _ohz = new _ohw.SlotItemEffectModel(),
                _oi0 = false,
                _oi1 = new _ohw.SlotItemEffectModel();
            if ('あきつまる' != _ohx.yomi && 'やましおまる' != _ohx.yomi && 'くまのまる' != _ohx.yomi || (_oi1.tyku = _oi1.tyku + 2, _oi1.kaih = _oi1.kaih + 1, _oi1.houg = _oi1.houg + 1, _oi1.tais = _oi1.tais + 1, _oi1.houm = _oi1.houm + 1, _oi0 = true), 717 != _ohx.ship_id && 948 != _ohx.ship_id || (_oi1.tyku = _oi1.tyku + 2, _oi1.kaih = _oi1.kaih + 2, _oi1.houg = _oi1.houg + 2, _oi1.tais = _oi1.tais + 1, _oi1.houm = _oi1.houm + 1, _oi0 = true), _oi0) {
                var _oi2 = _ohx.get_slotnums(489) + _ohx.get_slotnums(491);
                _ohz.add(_oi1.multiply(_oi2));
            }
            var _oi3 = _ohx.get_each_level_nums(489),
                _oi4 = _ohx.get_each_level_nums(491),
                _oi5 = 0,
                _oi6 = 0,
                _oi7 = 0;
            _oi3.forEach(function(_oi8, _oi9) {
                _oi9 >= 3 && (_oi5 += _oi8), _oi9 >= 6 && (_oi6 += _oi8), _oi9 >= 8 && (_oi7 += _oi8);
            }), _oi4.forEach(function(_oia, _oib) {
                _oib >= 3 && (_oi5 += _oia), _oib >= 6 && (_oi6 += _oia), _oib >= 8 && (_oi7 += _oia);
            });
            var _oic = _oi3[10] + _oi4[10];
            return _oi5 >= 1 && (_ohz.kaih = _ohz.kaih + 1 * _oi5), _oi6 >= 1 && (_ohz.tais = _ohz.tais + 1 * _oi6), _oi7 >= 1 && (_ohz.houm = _ohz.houm + 1 * _oi7), _oic >= 1 && (_ohz.houg = _ohz.houg + 1 * _oic), _ohz;
        };
    },
    90312: function(_oid, _oie, _oif) {
        'use strict';
        var _oig = null;
        var _oih = this && this.__importDefault || function(_oii) {
            var _oij = null;
            return _oii && _oii.__esModule ? _oii : {
                'default': _oii
            };
        };
        defineModule(_oie);
        Object.defineProperty(_oie, '__esModule', {
            'value': true
        }), _oie.getSlot502PersonalEffect = void 0;
        var _oik = _oif(74496),
            _oil = _oih(_oif(18622));
        _oie.getSlot502PersonalEffect = function(_oim) {
            var _oin = null,
                _oio = new _oik.SlotItemEffectModel(),
                _oip = _oim.get_slotnums(502),
                _oiq = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _oir = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _ois = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _oit = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _oiu = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_oiq[_oim.ship_id]) {
                var _oiv = _oiq[_oim.ship_id];
                _oio.houg += _oip * _oiv;
            }
            if (_oir[_oim.ship_id]) {
                var _oiw = _oir[_oim.ship_id];
                _oio.tyku += _oip * _oiw;
            }
            if (_ois[_oim.ship_id]) {
                var _oix = _ois[_oim.ship_id],
                    _oiy = _oim.get_each_level_nums(502),
                    _oiz = [];
                _oiy.forEach(function(_oj0, _oj1) {
                    var _oj2 = null;
                    for (var _oj3 = 1; _oj3 <= _oim.SLOT_LEVEL_MAX; _oj3++) _oj1 >= _oj3 && (null == _oiz[_oj3] && (_oiz[_oj3] = 0), _oiz[_oj3] += _oj0);
                }), 1 == _oix ? (_oio.kaih += 3 * _oip, _oiz[1] > 0 && (_oio.kaih += 1 * _oiz[1]), _oiz[3] > 0 && (_oio.tyku += 1 * _oiz[3]), _oiz[5] > 0 && (_oio.houg += 1 * _oiz[5]), _oiz[7] > 0 && (_oio.kaih += 1 * _oiz[7]), _oiz[8] > 0 && (_oio.tyku += 1 * _oiz[8]), _oiz[9] > 0 && (_oio.houg += 1 * _oiz[9]), _oiz[10] > 0 && (_oio.tyku += 1 * _oiz[10])) : 2 == _oix ? (_oio.kaih += 1 * _oip, _oiz[2] > 0 && 151 == _oim.ship_id && (_oio.kaih += 1 * _oiz[2]), _oiz[4] > 0 && (_oio.tyku += 1 * _oiz[4]), _oiz[6] > 0 && (_oio.houg += 1 * _oiz[6]), _oiz[8] > 0 && (_oio.kaih += 1 * _oiz[8]), _oiz[10] > 0 && (_oio.tyku += 1 * _oiz[10])) : 3 == _oix && (_oiz[5] > 0 && (_oio.kaih += 1 * _oiz[5]), _oiz[8] > 0 && (_oio.houg += 1 * _oiz[8]), _oiz[10] > 0 && (_oio.tyku += 1 * _oiz[10]));
            }
            if (_oit[_oim.ship_id]) {
                for (var _oj4 = 0, _oj5 = 0, _oj6 = _oim.have_slot_ids(); _oj5 < _oj6.length; _oj5++) {
                    var _oj7 = _oj6[_oj5],
                        _oj8 = _oil.default.model.slot.getMst(_oj7),
                        _oj9 = _oj8.equipType;
                    12 != _oj9 && 13 != _oj9 || (_oj8.sakuteki >= 5 && (_oj4 += _oim.get_slotnums(parseInt(_oj7))), _oj8.taiku >= 2 && _oim.get_slotnums(parseInt(_oj7)));
                }
                0;
                var _oja = _oit[_oim.ship_id];
                1 == _oja && _oj4 >= 1 ? (_oio.houg += 3, _oio.kaih += 4) : 2 == _oja && _oj4 >= 1 && (_oio.houg += 2, _oio.kaih += 2);
            }
            if (_oiu[_oim.ship_id]) {
                var _ojb = _oiu[_oim.ship_id],
                    _ojc = [],
                    _ojd = [],
                    _oje = _oim.have_slot_ids();
                [410, 411].forEach(function(_ojf) {
                    var _ojg = null;
                    _oje.indexOf(_ojf.toString()) > -1 && (_ojd[_ojf] = _oim.get_each_level_nums(_ojf), null == _ojc[_ojf] && (_ojc[_ojf] = []), _ojd[_ojf].forEach(function(_ojh, _oji) {
                        var _ojj = null;
                        for (var _ojk = 1; _ojk <= _oim.SLOT_LEVEL_MAX; _ojk++) null == _ojc[_ojf][_ojk] && (_ojc[_ojf][_ojk] = 0), _oji >= _ojk && (_ojc[_ojf][_ojk] += _ojh);
                    }));
                });
                var _ojl = _ojd[410],
                    _ojm = _ojd[411];
                if (1 == _ojb) {
                    if (_ojl) {
                        _oio.tyku += 1;
                        var _ojn = _ojc[410];
                        _ojn[7] >= 1 && (_oio.houg += 1), _ojn[10] >= 1 && (_oio.kaih += 1);
                    }
                    if (_ojm) {
                        _oio.tyku += 2;
                        var _ojo = _ojc[411];
                        _ojo[2] >= 1 && (_oio.houg += 1), _ojo[4] >= 1 && (_oio.kaih += 1), _ojo[6] >= 1 && (_oio.houm += 1), _ojo[8] >= 1 && (_oio.tyku += 1), _ojo[10] >= 1 && (_oio.houg += 1);
                    }
                }
            }
            return _oio;
        };
    },
    86856: function(_ojp, _ojq, _ojr) {
        'use strict';
        var _ojs = null;
        var _ojt = this && this.__importDefault || function(_oju) {
            var _ojv = null;
            return _oju && _oju.__esModule ? _oju : {
                'default': _oju
            };
        };
        defineModule(_ojq);
        Object.defineProperty(_ojq, '__esModule', {
            'value': true
        }), _ojq.getSlot503PersonalEffect = void 0;
        var _ojw = _ojr(74496),
            _ojx = _ojt(_ojr(18622));
        _ojq.getSlot503PersonalEffect = function(_ojy) {
            var _ojz = null,
                _ok0 = new _ojw.SlotItemEffectModel(),
                _ok1 = _ojy.get_slotnums(503),
                _ok2 = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _ok3 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _ok4 = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _ok5 = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _ok6 = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _ok7 = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_ok2[_ojy.ship_id]) {
                var _ok8 = _ok2[_ojy.ship_id];
                _ok0.houg += _ok1 * _ok8;
            }
            if (_ok3[_ojy.ship_id]) {
                var _ok9 = _ok3[_ojy.ship_id];
                _ok0.tyku += _ok1 * _ok9;
            }
            if (_ok4[_ojy.ship_id]) {
                var _oka = _ok4[_ojy.ship_id],
                    _okb = _ojy.get_each_level_nums(503),
                    _okc = [];
                _okb.forEach(function(_okd, _oke) {
                    var _okf = null;
                    for (var _okg = 1; _okg <= _ojy.SLOT_LEVEL_MAX; _okg++) _oke >= _okg && (null == _okc[_okg] && (_okc[_okg] = 0), _okc[_okg] += _okd);
                }), 1 == _oka ? (_ok0.houm += 2 * _ok1, _okc[1] > 0 && (_ok0.houg += 1 * _okc[1]), _okc[2] > 0 && (_ok0.tyku += 1 * _okc[2]), _okc[4] > 0 && (_ok0.houm += 1 * _okc[4]), _okc[6] > 0 && (_ok0.houg += 1 * _okc[6]), _okc[8] > 0 && (_ok0.tyku += 1 * _okc[8]), _okc[10] > 0 && (_ok0.houm += 1 * _okc[10])) : 2 == _oka ? (_ok0.houm += 1 * _ok1, _okc[2] > 0 && (_ok0.houg += 1 * _okc[2]), _okc[4] > 0 && (_ok0.tyku += 1 * _okc[4]), _okc[6] > 0 && (_ok0.houm += 1 * _okc[6]), _okc[8] > 0 && (_ok0.houg += 1 * _okc[8]), _okc[10] > 0 && (_ok0.houm += 1 * _okc[10])) : 3 == _oka && (_okc[4] > 0 && (_ok0.houm += 1 * _okc[4]), _okc[7] > 0 && (_ok0.houg += 1 * _okc[7]), _okc[10] > 0 && (_ok0.tyku += 1 * _okc[10]));
            }
            var _okh = 0;
            _ok5[_ojy.ship_id] && (_okh = _ok5[_ojy.ship_id]);
            var _oki = 0;
            _ok7[_ojy.ship_id] && (_oki = _ok7[_ojy.ship_id]);
            var _okj = 0,
                _okk = 0,
                _okl = _ojy.have_slot_ids();
            if (_okh + _oki > 0)
                for (var _okm = 0, _okn = _okl; _okm < _okn.length; _okm++) {
                    var _oko = _okn[_okm],
                        _okp = _ojx.default.model.slot.getMst(_oko),
                        _okq = _okp.equipType;
                    12 != _okq && 13 != _okq || (_okp.sakuteki >= 5 && (_okj += _ojy.get_slotnums(parseInt(_oko))), _okp.taiku >= 2 && _ojy.get_slotnums(parseInt(_oko)), _okp.meichu >= 8 && (_okk += _ojy.get_slotnums(parseInt(_oko))));
                }
            1 == _okh ? _okj >= 1 && (_ok0.houg += 3, _ok0.houm += 3, _ok0.kaih += 2) : 2 == _okh && _okj >= 1 && (_ok0.houg += 2, _ok0.houm += 2, _ok0.kaih += 1);
            var _okr = 0,
                _oks = [],
                _okt = [];
            if (_ok6[_ojy.ship_id]) {
                _okr = _ok6[_ojy.ship_id];
                var _oku = _ojy.have_slot_ids();
                [174].forEach(function(_okv) {
                    var _okw = null;
                    _oku.indexOf(_okv.toString()) > -1 && (_okt[_okv] = _ojy.get_each_level_nums(_okv), null == _oks[_okv] && (_oks[_okv] = []), _okt[_okv].forEach(function(_okx, _oky) {
                        var _okz = null;
                        for (var _ol0 = 1; _ol0 <= _ojy.SLOT_LEVEL_MAX; _ol0++) null == _oks[_okv][_ol0] && (_oks[_okv][_ol0] = 0), _oky >= _ol0 && (_oks[_okv][_ol0] += _okx);
                    }));
                });
            }
            if (_okr > 0) {
                var _ol1 = _okt[174];
                if (1 == _okr && _ol1) {
                    var _ol2 = _oks[174];
                    _ok0.raig += 4, _ol2[6] >= 1 && (_ok0.raig += 1), _ol2[8] >= 1 && (_ok0.houm += 1), _ol2[10] >= 1 && (_ok0.houg += 1);
                }
            }
            return _okk > 0 && (_oki >= 1 && _oki <= 3 && (_ok0.houg += 2, _ok0.houm += 2, _ok0.kaih += 2), 1 == _oki ? _ok0.houg += 1 : 3 == _oki && (_ok0.houg += 2)), _ok0;
        };
    },
    78123: function(_ol3, _ol4, _ol5) {
        'use strict';
        var _ol6 = null;
        var _ol7 = this && this.__importDefault || function(_ol8) {
            var _ol9 = null;
            return _ol8 && _ol8.__esModule ? _ol8 : {
                'default': _ol8
            };
        };
        defineModule(_ol4);
        Object.defineProperty(_ol4, '__esModule', {
            'value': true
        }), _ol4.getSlot505PersonalEffect = void 0;
        var _ola = _ol5(74496),
            _olb = _ol7(_ol5(18622));
        _ol4.getSlot505PersonalEffect = function(_olc) {
            var _old = null,
                _ole = new _ola.SlotItemEffectModel(),
                _olf = false,
                _olg = new _ola.SlotItemEffectModel();
            if (2 == _olc.stype ? (_olg.houg += 1, _olg.tyku += 2, _olg.kaih += 2, _olf = true) : 1 == _olc.stype ? (_olg.houg += 1, _olg.tyku += 1, _olg.kaih += 1, _olf = true) : 3 == _olc.stype || 21 == _olc.stype || 4 == _olc.stype ? (_olg.tyku += 1, _olg.kaih += 2, _olf = true) : 5 != _olc.stype && 6 != _olc.stype && 16 != _olc.stype || (_olg.tyku += 1, _olg.kaih += 1, _olf = true), _olf) {
                var _olh = _olc.get_slotnums(505);
                _ole.add(_olg.multiply(_olh));
            }
            var _oli = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    668: 2,
                    951: 2,
                    498: 3,
                    144: 3,
                    242: 3,
                    243: 3,
                    228: 3,
                    651: 3,
                    244: 4,
                    245: 4,
                    323: 4,
                    557: 5,
                    558: 5,
                    578: 5,
                    419: 5,
                    464: 5,
                    470: 5,
                    407: 5,
                    235: 5,
                    147: 5,
                    955: 5,
                    960: 5
                },
                _olj = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2
                },
                _olk = {
                    961: 1,
                    656: 1,
                    951: 1
                };
            1 == _oli[_olc.ship_id] ? (_ole.houg += 2, _ole.tyku += 3, _ole.kaih += 4) : 2 == _oli[_olc.ship_id] ? (_ole.houg += 1, _ole.tyku += 2, _ole.kaih += 3) : 3 == _oli[_olc.ship_id] ? (_ole.tyku += 2, _ole.kaih += 2) : 4 == _oli[_olc.ship_id] ? (_ole.tyku += 1, _ole.kaih += 2) : 5 == _oli[_olc.ship_id] && (_ole.houg += 1, _ole.tyku += 1, _ole.kaih += 1);
            var _oll = 0;
            if (_olj[_olc.ship_id] && _oll++, _olk[_olc.ship_id] && _oll++, 0 == _oll) return _ole;
            for (var _olm = 0, _oln = 0, _olo = 0, _olp = _olc.have_slot_ids(); _olo < _olp.length; _olo++) {
                var _olq = _olp[_olo],
                    _olr = _olb.default.model.slot.getMst(_olq),
                    _ols = _olr.equipType;
                12 != _ols && 13 != _ols || (_olr.sakuteki >= 5 && (_olm += _olc.get_slotnums(parseInt(_olq))), _olr.taiku >= 2 && (_oln += _olc.get_slotnums(parseInt(_olq))));
            }
            var _olt = _olj[_olc.ship_id];
            _oln > 0 && _olt > 0 && (1 == _olt ? (_ole.houg += 1, _ole.tyku += 2, _ole.kaih += 3) : 2 == _olt && (_ole.tyku += 2, _ole.kaih += 2));
            var _olu = _olk[_olc.ship_id];
            return _olm > 0 && _olu > 0 && 1 == _olu && (_ole.houg += 1, _ole.kaih += 1), _ole;
        };
    },
    25765: (_olv, _olw, _olx) => {
        'use strict';
        var _oly = null;
        defineModule(_olw);
        Object.defineProperty(_olw, '__esModule', {
            'value': true
        }), _olw.getSlot506PersonalEffect = void 0;
        var _olz = _olx(74496);
        _olw.getSlot506PersonalEffect = function(_om0) {
            var _om1 = null,
                _om2 = new _olz.SlotItemEffectModel();
            return 961 == _om0.ship_id ? (_om2.houg += 2, _om2.houm += 3, _om2.tyku += 2, _om2.kaih += 4) : 145 == _om0.ship_id || 497 == _om0.ship_id || 656 == _om0.ship_id || 557 == _om0.ship_id || 558 == _om0.ship_id || 951 == _om0.ship_id ? (_om2.houg += 1, _om2.houm += 2, _om2.tyku += 1, _om2.kaih += 3) : 578 != _om0.ship_id && 419 != _om0.ship_id && 464 != _om0.ship_id && 470 != _om0.ship_id && 407 != _om0.ship_id && 235 != _om0.ship_id && 147 != _om0.ship_id && 538 != _om0.ship_id && 537 != _om0.ship_id && 955 != _om0.ship_id && 960 != _om0.ship_id || (_om2.houg += 1, _om2.houm += 1, _om2.tyku += 1, _om2.kaih += 2), _om2;
        };
    },
    88271: function(_om3, _om4, _om5) {
        'use strict';
        var _om6 = null;
        var _om7 = this && this.__importDefault || function(_om8) {
            var _om9 = null;
            return _om8 && _om8.__esModule ? _om8 : {
                'default': _om8
            };
        };
        defineModule(_om4);
        Object.defineProperty(_om4, '__esModule', {
            'value': true
        }), _om4.getSlot50PersonalEffect = void 0;
        var _oma = _om5(74496),
            _omb = _om7(_om5(18622));
        _om4.getSlot50PersonalEffect = function(_omc) {
            var _omd = null,
                _ome = new _oma.SlotItemEffectModel(),
                _omf = false,
                _omg = new _oma.SlotItemEffectModel();
            7 != _omc.ctype && 13 != _omc.ctype && 8 != _omc.ctype && 29 != _omc.ctype && 9 != _omc.ctype && 31 != _omc.ctype || (_omg.houg += 1, _omf = true), 8 != _omc.ctype && 29 != _omc.ctype && 9 != _omc.ctype && 31 != _omc.ctype || (_omg.houg += 1, _omg.kaih += 1, _omf = true);
            var _omh = _omc.get_slotnums(50);
            9 != _omc.ctype && 31 != _omc.ctype || _omh >= 2 && (_omg.houg += 1, _omf = true);
            var _omi = 0;
            if (501 != _omc.ship_id && 506 != _omc.ship_id && 502 != _omc.ship_id && 507 != _omc.ship_id || (_omg.houg += 1, _omf = true, _omi = 1), 0 == _omf) return _ome;
            _ome = _omg.multiply(_omh);
            for (var _omj = 0, _omk = 0, _oml = _omc.have_slot_ids(); _omk < _oml.length; _omk++) {
                var _omm = _oml[_omk],
                    _omn = _omb.default.model.slot.getMst(_omm),
                    _omo = _omn.equipType;
                12 != _omo && 13 != _omo || _omn.sakuteki >= 5 && (_omj += _omc.get_slotnums(parseInt(_omm)));
            }
            if (_omj > 0) {
                if (7 == _omc.ctype || 13 == _omc.ctype) 0 == _omc.get_slotnums(90) && (_ome.houg += 1, _ome.kaih += 1, _ome.raig += 1);
                else 8 != _omc.ctype && 29 != _omc.ctype && 9 != _omc.ctype && 31 != _omc.ctype || (_ome.houg += 3, _ome.kaih += 2, _ome.raig += 2);
                501 != _omc.ship_id && 506 != _omc.ship_id || (_ome.houg += 1, _ome.kaih += 1);
            }
            var _omp = _omc.get_slotnums(30),
                _omq = _omc.get_slotnums(410);
            return 1 == _omi && (_omp + _omq > 0 && (_ome.houg += 1, _ome.tyku += 3, _ome.kaih += 2), _omq > 0 && (_ome.houg += 2)), _ome;
        };
    },
    28221: (_omr, _oms, _omt) => {
        'use strict';
        var _omu = null;
        defineModule(_oms);
        Object.defineProperty(_oms, '__esModule', {
            'value': true
        }), _oms.getSlot510PersonalEffect = void 0;
        var _omv = _omt(74496);
        _oms.getSlot510PersonalEffect = function(_omw) {
            var _omx = null,
                _omy = new _omv.SlotItemEffectModel(),
                _omz = false,
                _on0 = new _omv.SlotItemEffectModel();
            if ('イギリス' == _omw.getCountryName() && (_on0.houg += 2, _on0.tais += 3, _on0.kaih += 2, _on0.saku += 2, _omz = true), 88 == _omw.ctype && (_omy.houg += 4, _omy.kaih += 2, _on0.saku += 3, _on0.houm += 2, _omz = true), 0 == _omz) return _omy;
            var _on1 = _omw.get_slotnums(510);
            return _omy.add(_on0.multiply(_on1)), _omy;
        };
    },
    14830: (_on2, _on3, _on4) => {
        'use strict';
        var _on5 = null;
        defineModule(_on3);
        Object.defineProperty(_on3, '__esModule', {
            'value': true
        }), _on3.getSlot511PersonalEffect = void 0;
        var _on6 = _on4(74496);
        _on3.getSlot511PersonalEffect = function(_on7) {
            var _on8 = null,
                _on9 = new _on6.SlotItemEffectModel();
            return 122 == _on7.ctype ? (_on9.raig += 3, _on9.kaih += 4) : 114 == _on7.ctype && (_on9.raig += 1, _on9.kaih += 2), _on9;
        };
    },
    54047: (_ona, _onb, _onc) => {
        'use strict';
        var _ond = null;
        defineModule(_onb);
        Object.defineProperty(_onb, '__esModule', {
            'value': true
        }), _onb.getSlot517PersonalEffect = void 0;
        var _one = _onc(74496);
        _onb.getSlot517PersonalEffect = function(_onf) {
            var _ong = null,
                _onh = new _one.SlotItemEffectModel();
            null == {
                66: 0,
                28: 0,
                12: 0,
                1: 0,
                5: 0,
                10: 0,
                23: 0,
                18: 0,
                30: 0,
                38: 0,
                22: 0,
                54: 0,
                101: 0
            }[_onf.ctype] && 74 != _onf.ctype && 77 != _onf.ctype && 85 != _onf.ctype && 117 != _onf.ctype && 104 != _onf.ctype || (_onh.houm += 1, _onh.kaih += 1, _onh.saku += 1), 38 == _onf.ctype && (_onh.houg += 1, _onh.houm += 1), 960 == _onf.ship_id ? (_onh.houg += 2, _onh.houm += 1, _onh.kaih += 3, _onh.saku += 2) : 955 != _onf.ship_id && 578 != _onf.ship_id && 961 != _onf.ship_id && 656 != _onf.ship_id && 464 != _onf.ship_id && 470 != _onf.ship_id && 419 != _onf.ship_id && 407 != _onf.ship_id && 235 != _onf.ship_id && 147 != _onf.ship_id || (_onh.houg += 1, _onh.houm += 1, _onh.kaih += 2, _onh.saku += 1);
            for (var _oni = [], _onj = function(_onk) {
                    var _onl = null,
                        _onm = _onf.get_each_level_nums(_onk);
                    null == _oni[_onk] && (_oni[_onk] = []), _onm.forEach(function(_onn, _ono) {
                        var _onp = null;
                        for (var _onq = 1; _onq <= _onf.SLOT_LEVEL_MAX; _onq++) null == _oni[_onk][_onq] && (_oni[_onk][_onq] = 0), _ono >= _onq && (_oni[_onk][_onq] += _onn);
                    });
                }, _onr = 0, _ons = [267, 366, 450, 517]; _onr < _ons.length; _onr++) {
                _onj(_ons[_onr]);
            }
            var _ont = _oni[517];
            return _ont[7] > 0 && (_onh.houm += 1), _ont[8] > 0 && (_onh.kaih += 1), _ont[9] > 0 && (_onh.houg += 1), _ont[10] > 0 && (_onh.houm += 1), (_oni[267][3] > 0 || _oni[366][3] > 0) && (_onh.houg += 1, _onh.houm += 1, 38 == _onf.ctype && (_onh.houg += 1, _onh.houm += 1), _oni[450][4] > 0 && (_onh.houg += 1, _onh.houm += 1, _onh.tyku += 4, _onh.kaih += 3)), _onh;
        };
    },
    76054: (_onu, _onv, _onw) => {
        'use strict';
        var _onx = null;
        defineModule(_onv);
        Object.defineProperty(_onv, '__esModule', {
            'value': true
        }), _onv.getSlot518PersonalEffect = void 0;
        var _ony = _onw(74496);
        _onv.getSlot518PersonalEffect = function(_onz) {
            var _oo0 = null,
                _oo1 = new _ony.SlotItemEffectModel(),
                _oo2 = false,
                _oo3 = new _ony.SlotItemEffectModel();
            if (34 != _onz.ctype && 56 != _onz.ctype || (_oo3.houg += 1, _oo3.tyku += 1, _oo3.tais += 1, _oo3.kaih += 1, _oo2 = true), 16 == _onz.stype && (_oo3.houg += 1, _oo3.raig += 1, _oo3.kaih += 1, _oo2 = true), 622 != _onz.ship_id && 624 != _onz.ship_id && 623 != _onz.ship_id || (_oo3.houg += 1, _oo2 = true), 622 != _onz.ship_id && 624 != _onz.ship_id || (_oo3.tyku += 1, _oo2 = true), 624 == _onz.ship_id && (_oo3.tais += 2, _oo2 = true), 0 == _oo2) return _oo1;
            var _oo4 = _onz.get_slotnums(518);
            return _oo1.add(_oo3.multiply(_oo4)), _oo1;
        };
    },
    93053: (_oo5, _oo6, _oo7) => {
        'use strict';
        var _oo8 = null;
        defineModule(_oo6);
        Object.defineProperty(_oo6, '__esModule', {
            'value': true
        }), _oo6.getSlot519PersonalEffect = void 0;
        var _oo9 = _oo7(74496);
        _oo6.getSlot519PersonalEffect = function(_ooa) {
            var _oob = null,
                _ooc = new _oo9.SlotItemEffectModel();
            return 122 == _ooa.ctype && (_ooc.houm += 2, _ooc.kaih += 2), 114 == _ooa.ctype && (_ooc.raig += 1, _ooc.houm += 2, _ooc.kaih += 2), _ooc;
        };
    },
    81254: (_ood, _ooe, _oof) => {
        'use strict';
        var _oog = null;
        defineModule(_ooe);
        Object.defineProperty(_ooe, '__esModule', {
            'value': true
        }), _ooe.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _ooh = _oof(74496);
        _ooe.getSlot51cmSeriesGunPersonalEffect = function(_ooi) {
            var _ooj = null,
                _ook = new _ooh.SlotItemEffectModel(),
                _ool = false,
                _oom = new _ooh.SlotItemEffectModel(),
                _oon = _ooi.get_slotnums(142),
                _ooo = _ooi.get_slotnums(460),
                _oop = _oon + _ooo;
            if (916 != _ooi.ship_id && 911 != _ooi.ship_id && 546 != _ooi.ship_id || (_oom.houg += 1, _oom.houm += 1, _ooo >= 1 && (_ook.kaih += 1, _ook.houm += 1), _ool = true), 37 == _ooi.ctype && _oop >= 1 && (_ook.houg += 1, _ook.houm += 2), 0 == _ool) return _ook;
            var _ooq = _ooi.get_slotnums(128) + _ooi.get_slotnums(281);
            return _ook.add(_oom.multiply(_ooq)), _ook;
        };
    },
    88792: (_oor, _oos, _oot) => {
        'use strict';
        var _oou = null;
        defineModule(_oos);
        Object.defineProperty(_oos, '__esModule', {
            'value': true
        }), _oos.getSlot520PersonalEffect = void 0;
        var _oov = _oot(74496);
        _oos.getSlot520PersonalEffect = function(_oow) {
            var _oox = null,
                _ooy = new _oov.SlotItemEffectModel(),
                _ooz = false,
                _op0 = new _oov.SlotItemEffectModel(),
                _op1 = 0,
                _op2 = 0,
                _op3 = 0,
                _op4 = _oow.get_slotnums(520);
            7 == _oow.ctype || 13 == _oow.ctype ? (_op0.houg += 1, _ooz = true, _op2 = 1, _op3 = 1) : 8 == _oow.ctype || 29 == _oow.ctype ? (_op0.houg += 2, _op0.kaih += 1, _ooz = true, _op2 = 2, _op3 = 1) : 9 != _oow.ctype && 31 != _oow.ctype || (_op0.houg += 3, _op0.kaih += 1, _op0.houm += 1, _ooz = true, _op2 = 2, _op3 = 1, 2 == _op4 && (_ooy.houg += 2), _op4 >= 3 && (_ooy.houg += 4));
            var _op5 = _oow.get_have_rader_nums().water_rader,
                _op6 = 0,
                _op7 = 0;
            if (_op2 + _op3 > 0) {
                for (var _op8 = _oow.getSpItemDict_FukuhouTaikuHeisou(), _op9 = _oow.getSpItemDict_Tansou21GouDentan(), _opa = 0, _opb = _oow.have_slot_ids(); _opa < _opb.length; _opa++) {
                    var _opc = _opb[_opa],
                        _opd = parseInt(_opc);
                    null != _op8[_opd] ? (_op8[_opd] += _oow.get_slotnums(_opd), _op6 += _oow.get_slotnums(_opd)) : null != _op9[_opd] && (_op9[_opd] += _oow.get_slotnums(_opd), _op7 += _oow.get_slotnums(_opd));
                }
                _op5 > 0 && (1 == _op2 ? (_ooy.houg += 2, _ooy.raig += 2, _ooy.kaih += 1, _ooy.houm += 1) : 2 == _op2 && (_ooy.houg += 3, _ooy.raig += 2, _ooy.kaih += 2, _ooy.houm += 1)), _op6 > 0 && 1 == _op3 && (_ooy.houg += 1, _ooy.tyku += 4, _ooy.kaih += 4, _ooy.houm += 1);
            }
            if (269 == _oow.ship_id || 265 == _oow.ship_id || 319 == _oow.ship_id ? (2 == _op4 && (_ooy.houg += 2), _op4 >= 3 && (_ooy.houg += 4)) : 501 != _oow.ship_id && 506 != _oow.ship_id && 502 != _oow.ship_id && 507 != _oow.ship_id && 503 != _oow.ship_id && 504 != _oow.ship_id || (_op0.houg += 1, _ooz = true, _op5 >= 1 && (_ooy.houg += 1, _ooy.kaih += 1, _ooy.houm += 2), _op7 >= 1 && (_ooy.houg += 1, _ooy.tyku += 3, _ooy.kaih += 2, _ooy.houm += 1), _oow.get_slotnums(410) > 0 && (_ooy.houg += 2, _ooy.tyku += 3, _ooy.kaih += 2, _ooy.houm += 1), _op1 = 1), 502 == _oow.ship_id || 269 == _oow.ship_id || 265 == _oow.ship_id || 319 == _oow.ship_id ? (_op0.houg += 1, _op0.houm += 1, _ooz = true) : 507 == _oow.ship_id && (_op0.houg += 1, _op0.houm += 2, _op0.tyku += 1, _ooz = true), _ooz && _ooy.add(_op0.multiply(_op4)), 0 == _op1) return _ooy;
            var _ope = _oow.get_each_level_over_nums([520]),
                _opf = _ope[520][7],
                _opg = _ope[520][10];
            return 1 == _op1 && (_opf > 0 && (_ooy.houg += 1 * _opf), _opg > 0 && (_ooy.houm += 1 * _opg)), _ooy;
        };
    },
    33242: (_oph, _opi, _opj) => {
        'use strict';
        var _opk = null;
        defineModule(_opi);
        Object.defineProperty(_opi, '__esModule', {
            'value': true
        }), _opi.getSlot521PersonalEffect = void 0;
        var _opl = _opj(74496);
        _opi.getSlot521PersonalEffect = function(_opm) {
            var _opn = null,
                _opo = new _opl.SlotItemEffectModel(),
                _opp = false,
                _opq = new _opl.SlotItemEffectModel(),
                _opr = 0;
            if (52 == _opm.ctype && (_opr = 1), 183 == _opm.ship_id ? (_opq.houg += 1, _opq.houm += 1, _opq.saku += 2, _opq.kaih += 2, _opp = true) : 321 == _opm.ship_id ? (_opq.houg += 2, _opq.houm += 2, _opq.saku += 3, _opq.kaih += 3, _opp = true) : 507 == _opm.ship_id && (_opq.houg += 3, _opq.tyku += 1, _opq.houm += 3, _opq.saku += 2, _opq.kaih += 2, _opp = true, _opr = 1), _opp) {
                var _ops = _opm.get_slotnums(521);
                _opo.add(_opq.multiply(_ops));
            }
            if (0 == _opr) return _opo;
            var _opt = _opm.get_each_level_over_nums([521])[521];
            return 1 == _opr && (_opt[1] >= 1 && (_opo.houm += 1 * _opt[1]), _opt[2] >= 1 && (_opo.kaih += 1 * _opt[2]), _opt[3] >= 1 && (_opo.saku += 1 * _opt[3], _opo.raig += 1 * _opt[3]), _opt[4] >= 1 && (_opo.houg += 1 * _opt[4]), _opt[6] >= 1 && (_opo.houm += 1 * _opt[6]), _opt[8] >= 1 && (_opo.saku += 1 * _opt[8]), _opt[10] >= 1 && (_opo.houm += 1 * _opt[10])), _opo;
        };
    },
    3296: (_opu, _opv, _opw) => {
        'use strict';
        var _opx = null;
        defineModule(_opv);
        Object.defineProperty(_opv, '__esModule', {
            'value': true
        }), _opv.getSlot522_523PersonalEffect = void 0;
        var _opy = _opw(74496);
        _opv.getSlot522_523PersonalEffect = function(_opz) {
            var _oq0 = null,
                _oq1 = new _opy.SlotItemEffectModel(),
                _oq2 = false,
                _oq3 = new _opy.SlotItemEffectModel(),
                _oq4 = 0,
                _oq5 = _opz.get_slotnums(522),
                _oq6 = _opz.get_slotnums(523),
                _oq7 = _oq5 + _oq6;
            if (14 == _opz.stype && (_oq3.raig += 1, _oq3.kaih += 5, _oq3.houm += 1, _oq3.saku += 3, _oq2 = true, _oq6 >= 1 && (_oq1.raig += 2 * _oq6, _oq1.baku += 2 * _oq6, _oq1.kaih += 1 * _oq6, _oq1.houm += 1 * _oq6, _oq1.saku += 1 * _oq6), _oq4 = 1), 0 == _oq2) return _oq1;
            if (_oq1.add(_oq3.multiply(_oq7)), 0 == _oq4) return _oq1;
            var _oq8 = _opz.get_each_level_over_nums([522, 523]),
                _oq9 = _oq8[522],
                _oqa = _oq8[523];
            if (1 == _oq4) {
                if (_oq9[1] >= 1 || _oqa[1] >= 1) {
                    var _oqb = _oq9[1] + _oqa[1];
                    _oq1.raig += 1 * _oqb;
                }
                if (_oq9[2] >= 1 || _oqa[2] >= 1) {
                    var _oqc = _oq9[2] + _oqa[2];
                    _oq1.houm += 1 * _oqc;
                }
                if (_oq9[3] >= 1 || _oqa[3] >= 1) {
                    var _oqd = _oq9[3] + _oqa[3];
                    _oq1.kaih += 1 * _oqd;
                }
                if (_oq9[5] >= 1 || _oqa[5] >= 1) {
                    var _oqe = _oq9[5] + _oqa[5];
                    _oq1.saku += 1 * _oqe;
                }
                if (_oq9[8] >= 1 || _oqa[8] >= 1) {
                    var _oqf = _oq9[8] + _oqa[8];
                    _oq1.houm += 1 * _oqf;
                }
                if (_oq9[10] >= 1 || _oqa[10] >= 1) {
                    var _oqg = _oq9[10] + _oqa[10];
                    _oq1.kaih += 1 * _oqg;
                }
            }
            return _oq1;
        };
    },
    59415: (_oqh, _oqi, _oqj) => {
        'use strict';
        var _oqk = null;
        defineModule(_oqi);
        Object.defineProperty(_oqi, '__esModule', {
            'value': true
        }), _oqi.getSlot524PersonalEffect = void 0;
        var _oql = _oqj(74496);
        _oqi.getSlot524PersonalEffect = function(_oqm) {
            var _oqn = null,
                _oqo = new _oql.SlotItemEffectModel(),
                _oqp = false,
                _oqq = new _oql.SlotItemEffectModel(),
                _oqr = 0,
                _oqs = 0;
            if (17 != _oqm.stype && 19 != _oqm.stype && 20 != _oqm.stype && 21 != _oqm.stype && 22 != _oqm.stype || (_oqq.houg += 1, _oqq.tyku += 2, _oqq.kaih += 2, _oqq.houm += 1, _oqp = true, _oqr = 1, _oqs = 1), 0 == _oqp) return _oqo;
            var _oqt = _oqm.get_slotnums(524);
            _oqo.add(_oqq.multiply(_oqt));
            var _oqu = _oqm.get_have_rader_nums().air_rader;
            if (1 == _oqs && _oqu >= 1 && (_oqo.tyku += 2, _oqo.kaih += 2), 0 == _oqr) return _oqo;
            var _oqv = _oqm.get_each_level_over_nums([524])[524];
            return 1 == _oqr && (_oqv[1] >= 1 && (_oqo.kaih += 1 * _oqv[1]), _oqv[2] >= 1 && (_oqo.kaih += 1 * _oqv[2]), _oqv[4] >= 1 && (_oqo.tyku += 1 * _oqv[4]), _oqv[6] >= 1 && (_oqo.kaih += 1 * _oqv[6]), _oqv[7] >= 1 && (_oqo.houm += 1 * _oqv[7]), _oqv[8] >= 1 && (_oqo.tyku += 1 * _oqv[8]), _oqv[9] >= 1 && (_oqo.kaih += 1 * _oqv[9]), _oqv[10] >= 1 && (_oqo.houg += 1 * _oqv[10])), _oqo;
        };
    },
    36731: (_oqw, _oqx, _oqy) => {
        'use strict';
        var _oqz = null;
        defineModule(_oqx);
        Object.defineProperty(_oqx, '__esModule', {
            'value': true
        }), _oqx.getSlot527PersonalEffect = void 0;
        var _or0 = _oqy(74496);
        _oqx.getSlot527PersonalEffect = function(_or1) {
            var _or2 = null,
                _or3 = new _or0.SlotItemEffectModel(),
                _or4 = 0;
            if ('イギリス' == _or1.getCountryName() && (_or4 = 1, _or3.tyku += 2, _or3.houm += 1, _or3.kaih += 1, _or3.saku += 2, 88 == _or1.ctype && (_or3.houg += 2), 67 == _or1.ctype && (_or3.houg += 1)), 0 == _or4) return _or3;
            var _or5 = _or1.get_each_level_over_nums([527]),
                _or6 = _or5[527][2],
                _or7 = _or5[527][4],
                _or8 = _or5[527][7],
                _or9 = _or5[527][10];
            return 1 == _or4 && (_or6 >= 1 && (_or3.tyku += 1), _or7 >= 1 && (_or3.kaih += 1), _or8 >= 1 && (_or3.tyku += 1), _or9 >= 1 && (_or3.houm += 1)), _or3;
        };
    },
    30450: (_ora, _orb, _orc) => {
        'use strict';
        var _ord = null;
        defineModule(_orb);
        Object.defineProperty(_orb, '__esModule', {
            'value': true
        }), _orb.getSlot528PersonalEffect = void 0;
        var _ore = _orc(74496);
        _orb.getSlot528PersonalEffect = function(_orf) {
            var _org = null,
                _orh = new _ore.SlotItemEffectModel(),
                _ori = false,
                _orj = new _ore.SlotItemEffectModel(),
                _ork = 0;
            if ('イギリス' == _orf.getCountryName() && (_orj.houg += 1, _orj.houm += 2, _orj.kaih += 1, 108 == _orf.ctype && (_orj.houg += 1, _orj.kaih += 1), _ori = true, _ork = 1), 0 == _ori) return _orh;
            var _orl = _orf.get_slotnums(528);
            if (_orh.add(_orj.multiply(_orl)), 0 == _ork) return _orh;
            var _orm = _orf.get_each_level_over_nums([528]),
                _orn = _orm[528][2],
                _oro = _orm[528][4],
                _orp = _orm[528][7],
                _orq = _orm[528][10];
            return 1 == _ork && (_orn >= 1 && (_orh.houg += 1 * _orn), _oro >= 1 && (_orh.houm += 1 * _oro), _orp >= 1 && (_orh.kaih += 1 * _orp), _orq >= 1 && (_orh.houm += 1 * _orq)), _orh;
        };
    },
    23035: (_orr, _ors, _ort) => {
        'use strict';
        var _oru = null;
        defineModule(_ors);
        Object.defineProperty(_ors, '__esModule', {
            'value': true
        }), _ors.getSlot58PersonalEffect = void 0;
        var _orv = _ort(74496);
        _ors.getSlot58PersonalEffect = function(_orw) {
            var _orx = null,
                _ory = new _orv.SlotItemEffectModel(),
                _orz = new _orv.SlotItemEffectModel();
            if ('しまかぜ' != _orw.yomi && 4 != _orw.stype && 54 != _orw.ctype || (_orz.raig = 1), !_orz.exists()) return _ory;
            var _os0 = _orw.get_slotnums(58);
            return _ory = _orz.multiply(_os0);
        };
    },
    47169: (_os1, _os2, _os3) => {
        'use strict';
        var _os4 = null;
        defineModule(_os2);
        Object.defineProperty(_os2, '__esModule', {
            'value': true
        }), _os2.getSlot59PersonalEffect = void 0;
        var _os5 = _os3(74496);
        _os2.getSlot59PersonalEffect = function(_os6) {
            var _os7 = null,
                _os8 = new _os5.SlotItemEffectModel();
            return 501 != _os6.ship_id && 506 != _os6.ship_id && 502 != _os6.ship_id && 507 != _os6.ship_id || (_os8.tyku += 1, _os8.kaih += 1), _os8;
        };
    },
    87845: (_os9, _osa, _osb) => {
        'use strict';
        var _osc = null;
        defineModule(_osa);
        Object.defineProperty(_osa, '__esModule', {
            'value': true
        }), _osa.getSlot5PersonalEffect = void 0;
        var _osd = _osb(74496);
        _osa.getSlot5PersonalEffect = function(_ose) {
            var _osf = null,
                _osg = new _osd.SlotItemEffectModel(),
                _osh = false,
                _osi = new _osd.SlotItemEffectModel();
            if (52 != _ose.ctype && 9 != _ose.ctype || (_osi.houg += 1, 52 == _ose.ctype && (_osi.houg = _osi.houg + 1), _osh = true), 0 == _osh) return _osg;
            var _osj = _ose.get_slotnums(5);
            return _osg.add(_osi.multiply(_osj)), _osg;
        };
    },
    92253: (_osk, _osl, _osm) => {
        'use strict';
        var _osn = null;
        defineModule(_osl);
        Object.defineProperty(_osl, '__esModule', {
            'value': true
        }), _osl.getSlot60_154_219PersonalEffec = void 0;
        var _oso = _osm(74496);
        _osl.getSlot60_154_219PersonalEffec = function(_osp) {
            var _osq = null,
                _osr = new _oso.SlotItemEffectModel(),
                _oss = false,
                _ost = new _oso.SlotItemEffectModel();
            if ('じゅんよう' != _osp.yomi && 'ひよう' != _osp.yomi && 'ずいほう' != _osp.yomi && 'ちとせ' != _osp.yomi && 'ちよだ' != _osp.yomi || (_ost.houg += 1, _ost.tyku += 1, _ost.kaih += 1, _oss = true), 185 != _osp.ship_id && 318 != _osp.ship_id && 282 != _osp.ship_id || (_ost.houg += 1, _ost.tyku += 1, _ost.kaih += 1, _oss = true), 888 != _osp.ship_id && 883 != _osp.ship_id || (_ost.houg += 2, _ost.tyku += 1, _ost.kaih += 2, _oss = true), 0 == _oss) return _osr;
            var _osu = _osp.get_slotnums(60) + _osp.get_slotnums(154) + _osp.get_slotnums(219);
            return _osr.add(_ost.multiply(_osu)), _osr;
        };
    },
    2578: (_osv, _osw, _osx) => {
        'use strict';
        var _osy = null;
        defineModule(_osw);
        Object.defineProperty(_osw, '__esModule', {
            'value': true
        }), _osw.getSlot61PersonalEffect2 = _osw.getSlot61PersonalEffect = void 0;
        var _osz = _osx(74496);
        _osw.getSlot61PersonalEffect = function(_ot0) {
            var _ot1 = null,
                _ot2 = new _osz.SlotItemEffectModel();
            if (553 == _ot0.ship_id) _ot2.houg = 3, _ot2.kaih = 2, _ot2.souk = 1, _ot2.houm = 5, _ot2.leng = 1;
            else {
                if (554 == _ot0.ship_id) _ot2.houg = 3, _ot2.kaih = 3, _ot2.souk = 3, _ot2.houm = 5, _ot2.leng = 1;
                else {
                    if (196 == _ot0.ship_id) _ot2.houm = 5, _ot2.leng = 1;
                    else {
                        if (197 != _ot0.ship_id) return _ot2;
                        _ot2.houm = 5, _ot2.leng = 1;
                    }
                }
            }
            return _ot2;
        }, _osw.getSlot61PersonalEffect2 = function(_ot3) {
            var _ot4 = null,
                _ot5 = new _osz.SlotItemEffectModel();
            if (null == _ot3.have_slots_dict[61]) return _ot5;
            for (var _ot6 = 0, _ot7 = 0, _ot8 = _ot3.have_slots_dict[61]; _ot7 < _ot8.length; _ot7++) {
                var _ot9 = _ot8[_ot7].level;
                _ot6 < _ot9 && (_ot6 = _ot9);
            }
            return 0 == _ot6 || ('そうりゅう' == _ot3.yomi ? (_ot5.houg += 3, _ot5.saku += 3) : 'ひりゅう' == _ot3.yomi && (_ot5.houg += 2, _ot5.saku += 2), 508 != _ot3.ship_id && 509 != _ot3.ship_id && 560 != _ot3.ship_id || (_ot5.houg += 1, _ot5.saku += 1), _ot6 >= 8 && 197 == _ot3.ship_id && (_ot5.houg += 1, _ot5.saku += 1)), _ot5;
        };
    },
    17143: (_ota, _otb, _otc) => {
        'use strict';
        var _otd = null;
        defineModule(_otb);
        Object.defineProperty(_otb, '__esModule', {
            'value': true
        }), _otb.getSlot63PersonalEffect = void 0;
        var _ote = _otc(74496);
        _otb.getSlot63PersonalEffect = function(_otf) {
            var _otg = null,
                _oth = new _ote.SlotItemEffectModel(),
                _oti = new _ote.SlotItemEffectModel();
            1 != _otf.ctype && 5 != _otf.ctype && 10 != _otf.ctype || (_oti.tyku += 1), 'ゆうだち' == _otf.yomi && (_oti.houg += 1, _oti.tyku += 1, _oti.kaih += 2), 145 == _otf.ship_id || 961 == _otf.ship_id ? _oti.houg += 1 : 144 == _otf.ship_id ? _oti.raig += 1 : 469 == _otf.ship_id ? _oti.kaih += 2 : 242 == _otf.ship_id || 497 == _otf.ship_id || 244 == _otf.ship_id || 498 == _otf.ship_id ? _oti.kaih += 1 : 627 == _otf.ship_id ? _oti.houg += 1 : 903 != _otf.ship_id && 908 != _otf.ship_id || (_oti.houg += 2);
            var _otj = true;
            if (_oti.exists() || (_otj = false), 0 == _otj) return _oth;
            var _otk = _otf.get_slotnums(63);
            return _oth = _oti.multiply(_otk);
        };
    },
    16164: (_otl, _otm, _otn) => {
        'use strict';
        var _oto = null;
        defineModule(_otm);
        Object.defineProperty(_otm, '__esModule', {
            'value': true
        }), _otm.getSlot67PersonalEffect = void 0;
        var _otp = _otn(74496);
        _otm.getSlot67PersonalEffect = function(_otq) {
            var _otr = null,
                _ots = new _otp.SlotItemEffectModel(),
                _ott = new _otp.SlotItemEffectModel();
            if (13 != _otq.stype && 14 != _otq.stype && (_ott.raig = -5), !_ott.exists()) return _ots;
            var _otu = _otq.get_slotnums(67);
            return _ots = _ott.multiply(_otu);
        };
    },
    35023: (_otv, _otw, _otx) => {
        'use strict';
        var _oty = null;
        defineModule(_otw);
        Object.defineProperty(_otw, '__esModule', {
            'value': true
        }), _otw.getSlot69PersonalEffect = void 0;
        var _otz = _otx(74496);
        _otw.getSlot69PersonalEffect = function(_ou0) {
            var _ou1 = null,
                _ou2 = new _otz.SlotItemEffectModel(),
                _ou3 = false,
                _ou4 = new _otz.SlotItemEffectModel();
            if (554 == _ou0.ship_id || 646 == _ou0.ship_id ? (_ou4.houg += 1, _ou4.tais += 2, _ou3 = true) : 553 == _ou0.ship_id && (_ou4.houg += 1, _ou4.tais += 1, _ou3 = true), 0 == _ou3) return _ou2;
            var _ou5 = _ou0.get_slotnums(69);
            return _ou2.add(_ou4.multiply(_ou5)), _ou2;
        };
    },
    78707: (_ou6, _ou7, _ou8) => {
        'use strict';
        var _ou9 = null;
        defineModule(_ou7);
        Object.defineProperty(_ou7, '__esModule', {
            'value': true
        }), _ou7.getSlot70PersonalEffect = void 0;
        var _oua = _ou8(74496);
        _ou7.getSlot70PersonalEffect = function(_oub) {
            var _ouc = null,
                _oud = new _oua.SlotItemEffectModel(),
                _oue = false,
                _ouf = new _oua.SlotItemEffectModel();
            if ('やましおまる' == _oub.yomi && (_ouf.houg += 1, _ouf.tais += 1, _oue = true), 0 == _oue) return _oud;
            var _oug = _oub.get_slotnums(70);
            return _oud.add(_ouf.multiply(_oug)), _oud;
        };
    },
    44680: function(_ouh, _oui, _ouj) {
        'use strict';
        var _ouk = null;
        var _oul = this && this.__importDefault || function(_oum) {
            var _oun = null;
            return _oum && _oum.__esModule ? _oum : {
                'default': _oum
            };
        };
        defineModule(_oui);
        Object.defineProperty(_oui, '__esModule', {
            'value': true
        }), _oui.getSlot78PersonalEffect = void 0;
        var _ouo = _ouj(74496),
            _oup = _oul(_ouj(18622));
        _oui.getSlot78PersonalEffect = function(_ouq) {
            var _our = null,
                _ous = new _ouo.SlotItemEffectModel(),
                _out = false,
                _ouu = new _ouo.SlotItemEffectModel(),
                _ouv = 0,
                _ouw = 0,
                _oux = false;
            if (48 == _ouq.ctype && (_ouu.houg += 1, _ouu.kaih += 1, _ouv = 1, _ouw = 1, _oux = true, _out = true), 0 == _out) return _ous;
            var _ouy = _ouq.get_slotnums(78);
            _ous.add(_ouu.multiply(_ouy));
            var _ouz = 0,
                _ov0 = _ouq.get_each_level_nums(78),
                _ov1 = 0;
            if (_oux) {
                _ov0.map(function(_ov2, _ov3) {
                    _ov3 >= 7 && (_ov1 += _ov2);
                });
                for (var _ov4 = 0, _ov5 = _ouq.have_slot_ids(); _ov4 < _ov5.length; _ov4++) {
                    var _ov6 = _ov5[_ov4],
                        _ov7 = _oup.default.model.slot.getMst(_ov6),
                        _ov8 = _ov7.equipType;
                    12 != _ov8 && 13 != _ov8 || _ov7.sakuteki >= 5 && (_ouz += _ouq.get_slotnums(parseInt(_ov6)));
                }
            }
            if (1 == _ouv && _ouz > 0 && (_ous.houg += 2, _ous.kaih += 2, _ous.raig += 2), 1 == _ouw) {
                _ous.houg += 1 * _ov1;
                var _ov9 = _ov0[10];
                _ous.souk += 1 * _ov9;
            }
            return _ous;
        };
    },
    45749: (_ova, _ovb, _ovc) => {
        'use strict';
        var _ovd = null;
        defineModule(_ovb);
        Object.defineProperty(_ovb, '__esModule', {
            'value': true
        }), _ovb.getSlot79And81PersonalEffect = void 0;
        var _ove = _ovc(74496);
        _ovb.getSlot79And81PersonalEffect = function(_ovf) {
            var _ovg = null,
                _ovh = new _ove.SlotItemEffectModel(),
                _ovi = new _ove.SlotItemEffectModel();
            if (553 == _ovf.ship_id) _ovi.houg = 3;
            else {
                if (82 == _ovf.ship_id) _ovi.houg = 2;
                else {
                    if (88 == _ovf.ship_id) _ovi.houg = 2;
                    else {
                        if (554 == _ovf.ship_id) _ovi.houg = 3;
                        else {
                            if (411 == _ovf.ship_id) _ovi.houg = 2;
                            else {
                                if (412 != _ovf.ship_id) return _ovh;
                                _ovi.houg = 2;
                            }
                        }
                    }
                }
            }
            var _ovj = _ovf.get_slotnums(79) + _ovf.get_slotnums(81);
            return _ovh = _ovi.multiply(_ovj);
        };
    },
    37334: (_ovk, _ovl, _ovm) => {
        'use strict';
        var _ovn = null;
        defineModule(_ovl);
        Object.defineProperty(_ovl, '__esModule', {
            'value': true
        }), _ovl.getSlot82PersonalEffect = void 0;
        var _ovo = _ovm(74496);
        _ovl.getSlot82PersonalEffect = function(_ovp) {
            var _ovq = null,
                _ovr = new _ovo.SlotItemEffectModel(),
                _ovs = new _ovo.SlotItemEffectModel();
            if (76 == _ovp.ctype && (_ovs.tais = 1, _ovs.kaih = 1), !_ovs.exists()) return _ovr;
            var _ovt = _ovp.get_slotnums(82);
            return _ovr = _ovs.multiply(_ovt);
        };
    },
    2603: function(_ovu, _ovv, _ovw) {
        'use strict';
        var _ovx = null;
        var _ovy = this && this.__importDefault || function(_ovz) {
            var _ow0 = null;
            return _ovz && _ovz.__esModule ? _ovz : {
                'default': _ovz
            };
        };
        defineModule(_ovv);
        Object.defineProperty(_ovv, '__esModule', {
            'value': true
        }), _ovv.getSlot84PersonalEffect = void 0;
        var _ow1 = _ovw(74496),
            _ow2 = _ovy(_ovw(18622));
        _ovv.getSlot84PersonalEffect = function(_ow3) {
            var _ow4 = null,
                _ow5 = new _ow1.SlotItemEffectModel(),
                _ow6 = _ow3.get_each_level_nums(84),
                _ow7 = 0,
                _ow8 = 0;
            if (_ow6.forEach(function(_ow9, _owa) {
                    _owa >= 4 && (_ow7 += _ow9), _owa >= 7 && (_ow8 += _ow9);
                }), 0 == _ow7) return _ow5;
            for (var _owb = 0, _owc = 0, _owd = _ow3.have_slot_ids(); _owc < _owd.length; _owc++) {
                var _owe = _owd[_owc],
                    _owf = _ow2.default.model.slot.getMst(_owe),
                    _owg = _owf.equipType;
                12 != _owg && 13 != _owg || (_owf.sakuteki >= 5 && _ow3.get_slotnums(parseInt(_owe)), _owf.taiku >= 2 && (_owb += _ow3.get_slotnums(parseInt(_owe))));
            }
            var _owh = _ow3.getCountryName();
            _ow7 >= 1 && (_ow5.tyku += 1 * _ow7, _ow5.kaih += 1 * _ow7, 'ドイツ' != _owh && 'イタリア' != _owh || (_ow5.tyku += 1 * _ow7, _ow5.kaih += 1 * _ow7), _owb >= 1 && (_ow5.tyku += 1)), _ow8 >= 1 && (_ow5.tyku += 1 * _ow8, _ow5.houg += 1 * _ow8);
            var _owi = _ow6[10];
            return _owi >= 1 && (_ow5.tyku += 1 * _owi, _ow5.kaih += 1 * _owi, 'ドイツ' != _owh && 'イタリア' != _owh || (_ow5.houg += 1)), _ow5;
        };
    },
    90725: (_owj, _owk, _owl) => {
        'use strict';
        var _owm = null;
        defineModule(_owk);
        Object.defineProperty(_owk, '__esModule', {
            'value': true
        }), _owk.getSlot85PersonalEffect = void 0;
        var _own = _owl(74496);
        _owk.getSlot85PersonalEffect = function(_owo) {
            var _owp = null,
                _owq = new _own.SlotItemEffectModel(),
                _owr = _owo.get_each_level_over_nums([85]),
                _ows = _owr[85][6],
                _owt = _owr[85][8],
                _owu = _owr[85][10],
                _owv = _owo.get_have_rader_nums().air_rader,
                _oww = _owo.getCountryName();
            return _ows > 0 && (_owq.tyku += 1 * _ows, _owq.kaih += 1 * _ows, _owv >= 1 && (_owq.tyku += 2)), _owt > 0 && (_owq.houg += 1 * _owt, 'ドイツ' != _oww && 'イタリア' != _oww || (_owq.tyku += 1 * _owt, _owq.kaih += 1 * _owt)), _owu > 0 && (_owq.kaih += 1 * _owu, _owq.houm += 1 * _owu, 'ドイツ' != _oww && 'イタリア' != _oww || (_owq.houg += 1)), _owq;
        };
    },
    29180: (_owx, _owy, _owz) => {
        'use strict';
        var _ox0 = null;
        defineModule(_owy);
        Object.defineProperty(_owy, '__esModule', {
            'value': true
        }), _owy.getSlot87PersonalEffect = void 0;
        var _ox1 = _owz(74496);
        _owy.getSlot87PersonalEffect = function(_ox2) {
            var _ox3 = null,
                _ox4 = new _ox1.SlotItemEffectModel(),
                _ox5 = false,
                _ox6 = new _ox1.SlotItemEffectModel(),
                _ox7 = 0;
            if (951 == _ox2.ship_id ? (_ox6.houg += 1, _ox6.kaih += 1, _ox6.raig += 1, _ox6.houm += 1, _ox5 = true, _ox7 = 1) : 181 == _ox2.ship_id || 316 == _ox2.ship_id || 50 == _ox2.ship_id || 229 == _ox2.ship_id || 961 == _ox2.ship_id ? _ox7 = 2 : 591 != _ox2.ship_id && 592 != _ox2.ship_id && 593 != _ox2.ship_id && 954 != _ox2.ship_id || (_ox4.kaih += 2, _ox4.raig += 1, _ox7 = 3), 38 != _ox2.ctype && 54 != _ox2.ctype && 101 != _ox2.ctype || (_ox7 = 4), _ox5) {
                var _ox8 = _ox2.get_slotnums(87);
                _ox4.add(_ox6.multiply(_ox8));
            }
            if (0 == _ox7) return _ox4;
            var _ox9 = _ox2.get_each_level_nums(87),
                _oxa = [];
            return _ox7 > 0 && _ox9.forEach(function(_oxb, _oxc) {
                var _oxd = null;
                for (var _oxe = 1; _oxe <= _ox2.SLOT_LEVEL_MAX; _oxe++) null == _oxa[_oxe] && (_oxa[_oxe] = 0), _oxc >= _oxe && (_oxa[_oxe] += _oxb);
            }), 1 == _ox7 ? (_oxa[6] >= 1 && (_ox4.tyku += 1 * _oxa[6]), _oxa[7] >= 1 && (_ox4.kaih += 1 * _oxa[7]), _oxa[8] >= 1 && (_ox4.raig += 1 * _oxa[8]), _oxa[9] >= 1 && (_ox4.houg += 1 * _oxa[9]), _oxa[10] >= 1 && (_ox4.houm += 1 * _oxa[10])) : 2 == _ox7 ? (_oxa[6] >= 1 && (_ox4.kaih += 1 * _oxa[6]), _oxa[7] >= 1 && (_ox4.raig += 1 * _oxa[7]), _oxa[8] >= 1 && (_ox4.houg += 1 * _oxa[8]), _oxa[9] >= 1 && (_ox4.houm += 1 * _oxa[9]), _oxa[10] >= 1 && (_ox4.kaih += 1 * _oxa[10])) : 3 == _ox7 ? (_oxa[6] > 0 && (_ox4.kaih += 1), _oxa[8] > 0 && (_ox4.raig += 1), _oxa[10] > 0 && (_ox4.houg += 1)) : 4 == _ox7 && (_oxa[7] >= 1 && (_ox4.kaih += 1 * _oxa[7]), _oxa[8] >= 1 && (_ox4.raig += 1 * _oxa[8]), _oxa[10] >= 1 && (_ox4.houm += 1 * _oxa[10])), _ox4;
        };
    },
    68685: function(_oxf, _oxg, _oxh) {
        'use strict';
        var _oxi = null;
        var _oxj = this && this.__importDefault || function(_oxk) {
            var _oxl = null;
            return _oxk && _oxk.__esModule ? _oxk : {
                'default': _oxk
            };
        };
        defineModule(_oxg);
        Object.defineProperty(_oxg, '__esModule', {
            'value': true
        }), _oxg.getSlot90PersonalEffect = void 0;
        var _oxm = _oxh(74496),
            _oxn = _oxj(_oxh(18622));
        _oxg.getSlot90PersonalEffect = function(_oxo) {
            var _oxp = null,
                _oxq = new _oxm.SlotItemEffectModel(),
                _oxr = new _oxm.SlotItemEffectModel();
            if (142 == _oxo.ship_id ? (_oxr.houg += 2, _oxr.kaih += 1) : 295 == _oxo.ship_id || 416 == _oxo.ship_id || 417 == _oxo.ship_id ? _oxr.houg += 1 : 264 == _oxo.ship_id ? (_oxr.houg += 1, _oxr.tyku += 1) : 501 != _oxo.ship_id && 506 != _oxo.ship_id && 502 != _oxo.ship_id && 507 != _oxo.ship_id || (_oxr.houg += 1), 7 != _oxo.ctype && 13 != _oxo.ctype && 8 != _oxo.ctype && 29 != _oxo.ctype && 9 != _oxo.ctype && 31 != _oxo.ctype || (_oxr.houg += 1), _oxr.exists()) {
                var _oxs = _oxo.get_slotnums(90);
                _oxq = _oxr.multiply(_oxs);
            }
            var _oxt = [];
            if ('あおば' == _oxo.yomi && (_oxt[1] = 1), 13 != _oxo.ctype && 7 != _oxo.ctype || (_oxt[2] = 1), 0 == _oxt.length) return _oxq;
            for (var _oxu = 0, _oxv = 0, _oxw = 0, _oxx = _oxo.have_slot_ids(); _oxw < _oxx.length; _oxw++) {
                var _oxy = _oxx[_oxw],
                    _oxz = _oxn.default.model.slot.getMst(_oxy),
                    _oy0 = _oxz.equipType;
                12 != _oy0 && 13 != _oy0 || (_oxz.sakuteki >= 5 && (_oxu += _oxo.get_slotnums(parseInt(_oxy))), _oxz.taiku >= 2 && (_oxv += _oxo.get_slotnums(parseInt(_oxy))));
            }
            return _oxv > 0 && null != _oxt[1] && (_oxq.tyku += 5, _oxq.kaih += 2), _oxu > 0 && null != _oxt[2] && (_oxq.houg += 3, _oxq.kaih += 2, _oxq.raig += 2), _oxq;
        };
    },
    26078: (_oy1, _oy2, _oy3) => {
        'use strict';
        var _oy4 = null;
        defineModule(_oy2);
        Object.defineProperty(_oy2, '__esModule', {
            'value': true
        }), _oy2.getSlot93PersonalEffect = void 0;
        var _oy5 = _oy3(74496);
        _oy2.getSlot93PersonalEffect = function(_oy6) {
            var _oy7 = null,
                _oy8 = new _oy5.SlotItemEffectModel();
            return 'そうりゅう' == _oy6.yomi ? _oy8.houg = 1 : 'ひりゅう' == _oy6.yomi && (_oy8.houg = 3), _oy8;
        };
    },
    20829: (_oy9, _oya, _oyb) => {
        'use strict';
        var _oyc = null;
        defineModule(_oya);
        Object.defineProperty(_oya, '__esModule', {
            'value': true
        }), _oya.getSlot94PersonalEffect = void 0;
        var _oyd = _oyb(74496);
        _oya.getSlot94PersonalEffect = function(_oye) {
            var _oyf = null,
                _oyg = new _oyd.SlotItemEffectModel();
            if (196 == _oye.ship_id) _oyg.houg = 7;
            else {
                if (197 != _oye.ship_id) return _oyg;
                _oyg.houg = 3;
            }
            return _oyg;
        };
    },
    6880: (_oyh, _oyi, _oyj) => {
        'use strict';
        var _oyk = null;
        defineModule(_oyi);
        Object.defineProperty(_oyi, '__esModule', {
            'value': true
        }), _oyi.getSlot99PersonalEffect = void 0;
        var _oyl = _oyj(74496);
        _oyi.getSlot99PersonalEffect = function(_oym) {
            var _oyn = null,
                _oyo = new _oyl.SlotItemEffectModel();
            return 'そうりゅう' == _oym.yomi ? _oyo.houg = 4 : 'ひりゅう' == _oym.yomi && (_oyo.houg = 1), _oyo;
        };
    },
    21403: (_oyp, _oyq, _oyr) => {
        'use strict';
        var _oys = null;
        defineModule(_oyq);
        Object.defineProperty(_oyq, '__esModule', {
            'value': true
        }), _oyq.getSlotCorsairMkIIPersonalEffect = void 0;
        var _oyt = _oyr(74496);
        _oyq.getSlotCorsairMkIIPersonalEffect = function(_oyu) {
            var _oyv = null,
                _oyw = new _oyt.SlotItemEffectModel(),
                _oyx = false,
                _oyy = new _oyt.SlotItemEffectModel();
            112 == _oyu.ctype && (_oyy.houg += 1, _oyy.tyku += 1, _oyy.kaih += 2, _oyx = true);
            var _oyz = _oyu.getCountryName();
            if (67 == _oyu.ctype || 78 == _oyu.ctype || 82 == _oyu.ctype || 88 == _oyu.ctype || 108 == _oyu.ctype || 112 == _oyu.ctype ? (_oyy.houg += 1, _oyy.tyku += 2, _oyy.kaih += 3, _oyx = true) : 'アメリカ' == _oyz && (_oyy.houg += 1, _oyy.tyku += 1, _oyy.kaih += 2, _oyx = true), 0 == _oyx) return _oyw;
            var _oz0 = _oyu.get_slotnums(434) + _oyu.get_slotnums(435);
            return _oyw.add(_oyy.multiply(_oz0)), _oyw;
        };
    },
    9195: (_oz1, _oz2, _oz3) => {
        'use strict';
        var _oz4 = null;
        defineModule(_oz2);
        Object.defineProperty(_oz2, '__esModule', {
            'value': true
        }), _oz2.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _oz5 = _oz3(74496);
        _oz2.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_oz6) {
            var _oz7 = null,
                _oz8 = new _oz5.SlotItemEffectModel(),
                _oz9 = false,
                _oza = new _oz5.SlotItemEffectModel();
            if (56 == _oz6.ctype && (_oza.tais += 3, _oza.kaih += 2, _oz9 = true), 0 == _oz9) return _oz8;
            var _ozb = _oz6.get_slotnums(44) + _oz6.get_slotnums(45) + _oz6.get_slotnums(287) + _oz6.get_slotnums(288);
            return _oz8.add(_oza.multiply(_ozb)), _oz8;
        };
    },
    93297: (_ozc, _ozd, _oze) => {
        'use strict';
        var _ozf = null;
        defineModule(_ozd);
        Object.defineProperty(_ozd, '__esModule', {
            'value': true
        }), _ozd.getSlotDomesticSonarPersonalEffect = void 0;
        var _ozg = _oze(74496);
        _ozd.getSlotDomesticSonarPersonalEffect = function(_ozh) {
            var _ozi = null,
                _ozj = new _ozg.SlotItemEffectModel();
            return 56 == _ozh.ctype && (_ozj.tais += 2, _ozj.kaih += 3), _ozj;
        };
    },
    45482: (_ozk, _ozl, _ozm) => {
        'use strict';
        var _ozn = null;
        defineModule(_ozl);
        Object.defineProperty(_ozl, '__esModule', {
            'value': true
        }), _ozl.getSlotOtherSuiseiPersonalEffect = void 0;
        var _ozo = _ozm(74496);
        _ozl.getSlotOtherSuiseiPersonalEffect = function(_ozp) {
            var _ozq = null,
                _ozr = new _ozo.SlotItemEffectModel(),
                _ozs = new _ozo.SlotItemEffectModel();
            if (553 == _ozp.ship_id) _ozs.houg = 2;
            else {
                if (554 != _ozp.ship_id) return _ozr;
                _ozs.houg = 2;
            }
            var _ozt = _ozp.get_slotnums(24) + _ozp.get_slotnums(57) + _ozp.get_slotnums(111);
            return _ozr = _ozs.multiply(_ozt);
        };
    },
    45927: (_ozu, _ozv, _ozw) => {
        'use strict';
        var _ozx = null;
        defineModule(_ozv);
        Object.defineProperty(_ozv, '__esModule', {
            'value': true
        }), _ozv.getSlotSmokePersonalEffect = void 0;
        var _ozy = _ozw(74496);
        _ozv.getSlotSmokePersonalEffect = function(_ozz) {
            var _p00 = null,
                _p01 = new _ozy.SlotItemEffectModel(),
                _p02 = false,
                _p03 = new _ozy.SlotItemEffectModel();
            if (959 == _ozz.ship_id && (_p03.kaih += 4, _p02 = true), 'ジョンストン' == _ozz.yomi || 'サミュエル・B・ロバーツ' == _ozz.yomi || 'せんだい' == _ozz.yomi || 'はるかぜ' == _ozz.yomi || 'かみかぜ' == _ozz.yomi || 'しきなみ' == _ozz.yomi || 'うらなみ' == _ozz.yomi || 'あおば' == _ozz.yomi ? (_p03.kaih += 3, _p02 = true) : 'いなづま' != _ozz.yomi && 'はぐろ' != _ozz.yomi && 'はつしも' != _ozz.yomi && 'かすみ' != _ozz.yomi && 'ふぶき' != _ozz.yomi && 'あたご' != _ozz.yomi && 'あまぎり' != _ozz.yomi && 'はまなみ' != _ozz.yomi || (_p03.kaih += 2, _p02 = true), 0 == _p02) return _p01;
            var _p04 = _ozz.get_slotnums(500) + _ozz.get_slotnums(501);
            return _p01.add(_p03.multiply(_p04)), _p01;
        };
    },
    32666: (_p05, _p06, _p07) => {
        'use strict';
        var _p08 = null;
        defineModule(_p06);
        Object.defineProperty(_p06, '__esModule', {
            'value': true
        }), _p06.getSlotTokuYonPersonalEffect = void 0;
        var _p09 = _p07(74496);
        _p06.getSlotTokuYonPersonalEffect = function(_p0a) {
            var _p0b = null,
                _p0c = new _p09.SlotItemEffectModel(),
                _p0d = false,
                _p0e = new _p09.SlotItemEffectModel(),
                _p0f = 0,
                _p0g = _p0a.get_slotnums(525),
                _p0h = _p0a.get_slotnums(526),
                _p0i = _p0g + _p0h;
            if (13 != _p0a.stype && 14 != _p0a.stype || (_p0e.houg += 1, _p0e.raig += 2, _p0e.kaih -= 1, _p0d = true, _p0f = 1, 'い36' != _p0a.yomi && 'い41' != _p0a.yomi || (_p0c.houg += 2, _p0c.raig += 1, _p0c.houm += 2), _p0h >= 1 && (_p0c.houg += 1 * _p0h, _p0c.raig += 1 * _p0h, _p0c.houm += 1 * _p0h)), 0 == _p0d) return _p0c;
            if (_p0c.add(_p0e.multiply(_p0i)), 0 == _p0f) return _p0c;
            var _p0j = _p0a.get_each_level_over_nums([525, 526]),
                _p0k = _p0j[525],
                _p0l = _p0j[526];
            if (1 == _p0f) {
                if (_p0k[1] >= 1 || _p0l[1] >= 1) {
                    var _p0m = _p0k[1] + _p0l[1];
                    _p0c.raig += 1 * _p0m;
                }
                if (_p0l[2] >= 1) {
                    var _p0n = _p0k[2] + _p0l[2];
                    _p0c.houg += 1 * _p0n;
                }
                if (_p0k[3] >= 1 || _p0l[3] >= 1) {
                    var _p0o = _p0k[3] + _p0l[3];
                    _p0c.houm += 1 * _p0o;
                }
                if (_p0l[4] >= 1) {
                    var _p0p = _p0k[4] + _p0l[4];
                    _p0c.raig += 1 * _p0p;
                }
                if (_p0k[6] >= 1 || _p0l[6] >= 1) {
                    var _p0q = _p0k[6] + _p0l[6];
                    _p0c.houm += 1 * _p0q;
                }
                if (_p0l[8] >= 1) {
                    var _p0r = _p0k[8] + _p0l[8];
                    _p0c.houg += 1 * _p0r;
                }
                if (_p0k[10] >= 1 || _p0l[10] >= 1) {
                    var _p0s = _p0k[10] + _p0l[10];
                    _p0c.raig += 1 * _p0s;
                }
            }
            return _p0c;
        };
    },
    29805: (_p0t, _p0u, _p0v) => {
        'use strict';
        var _p0w = null;
        defineModule(_p0u);
        Object.defineProperty(_p0u, '__esModule', {
            'value': true
        }), _p0u.getSlotType10PersonalEffect = void 0;
        var _p0x = _p0v(74496);
        _p0u.getSlotType10PersonalEffect = function(_p0y) {
            var _p0z = null,
                _p10 = new _p0x.SlotItemEffectModel();
            return 662 == _p0y.ship_id || 663 == _p0y.ship_id || 668 == _p0y.ship_id ? (_p10.houg += 2, _p10.kaih += 1, _p10.tais += 3) : 501 != _p0y.ship_id && 506 != _p0y.ship_id && 502 != _p0y.ship_id && 507 != _p0y.ship_id || (_p10.houg += 2), _p10;
        };
    },
    58913: (_p11, _p12, _p13) => {
        'use strict';
        var _p14 = null;
        defineModule(_p12);
        Object.defineProperty(_p12, '__esModule', {
            'value': true
        }), _p12.getSlotType11PersonalEffect = void 0;
        var _p15 = _p13(74496);
        _p12.getSlotType11PersonalEffect = function(_p16) {
            var _p17 = null,
                _p18 = new _p15.SlotItemEffectModel();
            return 662 == _p16.ship_id || 663 == _p16.ship_id || 668 == _p16.ship_id ? (_p18.houg += 1, _p18.kaih += 1, _p18.tais += 1) : 501 != _p16.ship_id && 506 != _p16.ship_id && 502 != _p16.ship_id && 507 != _p16.ship_id || (_p18.houg += 1, _p18.kaih += 1), _p18;
        };
    },
    55421: (_p19, _p1a, _p1b) => {
        'use strict';
        var _p1c = null;
        defineModule(_p1a);
        Object.defineProperty(_p1a, '__esModule', {
            'value': true
        }), _p1a.getSlotType25PersonalEffect = void 0;
        var _p1d = _p1b(74496);
        _p1a.getSlotType25PersonalEffect = function(_p1e) {
            var _p1f = null,
                _p1g = new _p1d.SlotItemEffectModel();
            return 662 == _p1e.ship_id ? (_p1g.tais += 4, _p1g.kaih += 1) : 663 != _p1e.ship_id && 668 != _p1e.ship_id || (_p1g.tais += 3, _p1g.kaih += 1), _p1g;
        };
    },
    272: function(_p1h, _p1i, _p1j) {
        'use strict';
        var _p1k = null;
        var _p1l = this && this.__importDefault || function(_p1m) {
            var _p1n = null;
            return _p1m && _p1m.__esModule ? _p1m : {
                'default': _p1m
            };
        };
        defineModule(_p1i);
        Object.defineProperty(_p1i, '__esModule', {
            'value': true
        }), _p1i.getSlotType9PersonalEffect = void 0;
        var _p1o = _p1j(74496),
            _p1p = _p1l(_p1j(18622));
        _p1i.getSlotType9PersonalEffect = function(_p1q) {
            var _p1r = null,
                _p1s = new _p1o.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_p1q.stype]) return _p1s;
            for (var _p1t = 0, _p1u = 0, _p1v = _p1q.have_slot_ids(); _p1u < _p1v.length; _p1u++) {
                var _p1w = _p1v[_p1u];
                if (9 == _p1p.default.model.slot.getMst(_p1w).equipType)
                    for (var _p1x = 0, _p1y = _p1q.have_slots_dict[parseInt(_p1w)]; _p1x < _p1y.length; _p1x++) {
                        var _p1z = _p1y[_p1x].level;
                        _p1t < _p1z && (_p1t = _p1z);
                    }
            }
            return _p1t >= 2 && (_p1s.saku += 1), _p1t >= 4 && (_p1s.houg += 1), _p1t >= 6 && (_p1s.saku += 1), _p1t >= 10 && (_p1s.houg += 1, _p1s.saku += 1), _p1s;
        };
    },
    54518: (_p20, _p21, _p22) => {
        'use strict';
        var _p23 = null;
        defineModule(_p21);
        Object.defineProperty(_p21, '__esModule', {
            'value': true
        }), _p21.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _p24 = _p22(74496);
        _p21.getSlot_16InchMkXRensouhou_PersonalEffect = function(_p25) {
            var _p26 = null,
                _p27 = new _p24.SlotItemEffectModel();
            if (93 == _p25.ctype) {
                var _p28 = _p25.get_slotnums(330);
                _p28 > 0 && (_p27.houg = _p27.houg + 1 * _p28);
                var _p29 = _p25.get_slotnums(331);
                _p29 > 0 && (_p27.houg = _p27.houg + 1 * _p29, 1496 != _p25.ship_id && 918 != _p25.ship_id || (_p27.houg = _p27.houg + 1 * _p29, _p27.kaih = _p27.kaih + 1 * _p29));
                var _p2a = _p25.get_slotnums(332);
                return _p2a > 0 && (_p27.houg = _p27.houg + 1 * _p2a, 1496 != _p25.ship_id && 918 != _p25.ship_id || (_p27.houg = _p27.houg + 1 * _p2a, _p27.kaih = _p27.kaih + 1 * _p2a, _p27.tyku = _p27.tyku + 1 * _p2a)), _p27;
            }
            var _p2b = new _p24.SlotItemEffectModel();
            if (19 == _p25.ctype ? (_p2b.houg = 1, (541 == _p25.ship_id || 573 == _p25.ship_id) && (_p2b.houg += 1)) : 88 == _p25.ctype && (_p2b.houg = 1, 576 == _p25.ship_id && (_p2b.houg += 1)), !_p2b.exists()) return _p27;
            var _p2c = _p25.get_slotnums(330) + _p25.get_slotnums(331) + _p25.get_slotnums(332);
            return _p27 = _p2b.multiply(_p2c);
        };
    },
    79353: (_p2d, _p2e, _p2f) => {
        'use strict';
        var _p2g = null;
        defineModule(_p2e);
        Object.defineProperty(_p2e, '__esModule', {
            'value': true
        }), _p2e.getZuiunSeriesEffect = void 0;
        var _p2h = _p2f(74496);
        _p2e.getZuiunSeriesEffect = function(_p2i) {
            var _p2j = null,
                _p2k = new _p2h.SlotItemEffectModel(),
                _p2l = false,
                _p2m = new _p2h.SlotItemEffectModel();
            if (662 == _p2i.ship_id ? (_p2k.houg += 2, _p2k.kaih += 1) : 663 == _p2i.ship_id || 668 == _p2i.ship_id || 501 == _p2i.ship_id || 506 == _p2i.ship_id ? (_p2k.houg += 2, _p2m.kaih += 1, _p2m.tyku += 1, _p2l = true) : 502 != _p2i.ship_id && 507 != _p2i.ship_id || (_p2k.houg += 1, _p2m.kaih += 1, _p2m.tyku += 1, _p2l = true), 0 == _p2l) return _p2k;
            var _p2n = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_p2o) {
                var _p2p = null;
                _p2n += _p2i.get_slotnums(_p2o);
            }), _p2k.add(_p2m.multiply(_p2n)), _p2k;
        };
    },
    89051: function(_p2q, _p2r, _p2s) {
        'use strict';
        var _p2t = null;
        var _p2u = this && this.__createBinding || (Object.create ? function(_p2v, _p2w, _p2x, _p2y) {
                var _p2z = null;
                void 0 === _p2y && (_p2y = _p2x);
                var _p30 = Object.getOwnPropertyDescriptor(_p2w, _p2x);
                _p30 && !('get' in _p30 ? !_p2w.__esModule : _p30.writable || _p30.configurable) || (_p30 = {
                    'enumerable': true,
                    'get': function() {
                        return _p2w[_p2x];
                    }
                }), Object.defineProperty(_p2v, _p2y, _p30);
            } : function(_p31, _p32, _p33, _p34) {
                void 0 === _p34 && (_p34 = _p33), _p31[_p34] = _p32[_p33];
            }),
            _p35 = this && this.__exportStar || function(_p36, _p37) {
                var _p38 = null;
                for (var _p39 in _p36) 'default' === _p39 || Object.prototype.hasOwnProperty.call(_p37, _p39) || _p2u(_p37, _p36, _p39);
            };
        defineModule(_p2r);
        Object.defineProperty(_p2r, '__esModule', {
            'value': true
        }), _p35(_p2s(34165), _p2r), _p35(_p2s(81018), _p2r), _p35(_p2s(56716), _p2r), _p35(_p2s(17713), _p2r), _p35(_p2s(54518), _p2r), _p35(_p2s(66985), _p2r), _p35(_p2s(88102), _p2r), _p35(_p2s(66904), _p2r), _p35(_p2s(98137), _p2r), _p35(_p2s(69954), _p2r), _p35(_p2s(22218), _p2r), _p35(_p2s(88271), _p2r), _p35(_p2s(23035), _p2r), _p35(_p2s(2578), _p2r), _p35(_p2s(17143), _p2r), _p35(_p2s(16164), _p2r), _p35(_p2s(35023), _p2r), _p35(_p2s(44680), _p2r), _p35(_p2s(45749), _p2r), _p35(_p2s(37334), _p2r), _p35(_p2s(29180), _p2r), _p35(_p2s(68685), _p2r), _p35(_p2s(26078), _p2r), _p35(_p2s(20829), _p2r), _p35(_p2s(6880), _p2r), _p35(_p2s(17213), _p2r), _p35(_p2s(40176), _p2r), _p35(_p2s(32889), _p2r), _p35(_p2s(11285), _p2r), _p35(_p2s(96200), _p2r), _p35(_p2s(9115), _p2r), _p35(_p2s(37173), _p2r), _p35(_p2s(21713), _p2r), _p35(_p2s(59823), _p2r), _p35(_p2s(57440), _p2r), _p35(_p2s(29240), _p2r), _p35(_p2s(40885), _p2r), _p35(_p2s(19614), _p2r), _p35(_p2s(87220), _p2r), _p35(_p2s(81367), _p2r), _p35(_p2s(13052), _p2r), _p35(_p2s(94968), _p2r), _p35(_p2s(48658), _p2r), _p35(_p2s(1906), _p2r), _p35(_p2s(61887), _p2r), _p35(_p2s(47970), _p2r), _p35(_p2s(31797), _p2r), _p35(_p2s(45738), _p2r), _p35(_p2s(34718), _p2r), _p35(_p2s(69245), _p2r), _p35(_p2s(18478), _p2r), _p35(_p2s(2899), _p2r), _p35(_p2s(57120), _p2r), _p35(_p2s(74985), _p2r), _p35(_p2s(9234), _p2r), _p35(_p2s(30802), _p2r), _p35(_p2s(97002), _p2r), _p35(_p2s(16748), _p2r), _p35(_p2s(53618), _p2r), _p35(_p2s(72573), _p2r), _p35(_p2s(8955), _p2r), _p35(_p2s(98947), _p2r), _p35(_p2s(44726), _p2r), _p35(_p2s(93065), _p2r), _p35(_p2s(85767), _p2r), _p35(_p2s(38314), _p2r), _p35(_p2s(59747), _p2r), _p35(_p2s(40649), _p2r), _p35(_p2s(13533), _p2r), _p35(_p2s(12138), _p2r), _p35(_p2s(30042), _p2r), _p35(_p2s(33623), _p2r), _p35(_p2s(85630), _p2r), _p35(_p2s(88736), _p2r), _p35(_p2s(49341), _p2r), _p35(_p2s(74306), _p2r), _p35(_p2s(83898), _p2r), _p35(_p2s(71873), _p2r), _p35(_p2s(53122), _p2r), _p35(_p2s(51063), _p2r), _p35(_p2s(91491), _p2r), _p35(_p2s(85495), _p2r), _p35(_p2s(65365), _p2r), _p35(_p2s(98164), _p2r), _p35(_p2s(38114), _p2r), _p35(_p2s(21003), _p2r), _p35(_p2s(77010), _p2r), _p35(_p2s(39126), _p2r), _p35(_p2s(72176), _p2r), _p35(_p2s(33846), _p2r), _p35(_p2s(97157), _p2r), _p35(_p2s(63406), _p2r), _p35(_p2s(66373), _p2r), _p35(_p2s(19707), _p2r), _p35(_p2s(63978), _p2r), _p35(_p2s(92382), _p2r), _p35(_p2s(78415), _p2r), _p35(_p2s(23090), _p2r), _p35(_p2s(18776), _p2r), _p35(_p2s(39656), _p2r), _p35(_p2s(66039), _p2r), _p35(_p2s(64679), _p2r), _p35(_p2s(95953), _p2r), _p35(_p2s(86384), _p2r), _p35(_p2s(65345), _p2r), _p35(_p2s(46514), _p2r), _p35(_p2s(81976), _p2r), _p35(_p2s(89331), _p2r), _p35(_p2s(73973), _p2r), _p35(_p2s(21178), _p2r), _p35(_p2s(5079), _p2r), _p35(_p2s(95014), _p2r), _p35(_p2s(53099), _p2r), _p35(_p2s(76201), _p2r), _p35(_p2s(24931), _p2r), _p35(_p2s(60978), _p2r), _p35(_p2s(74312), _p2r), _p35(_p2s(54350), _p2r), _p35(_p2s(26262), _p2r), _p35(_p2s(45530), _p2r), _p35(_p2s(44053), _p2r), _p35(_p2s(65441), _p2r), _p35(_p2s(33258), _p2r), _p35(_p2s(92168), _p2r), _p35(_p2s(85975), _p2r), _p35(_p2s(98467), _p2r), _p35(_p2s(88348), _p2r), _p35(_p2s(21097), _p2r), _p35(_p2s(37273), _p2r), _p35(_p2s(72694), _p2r), _p35(_p2s(62067), _p2r), _p35(_p2s(87817), _p2r), _p35(_p2s(93526), _p2r), _p35(_p2s(33084), _p2r), _p35(_p2s(97831), _p2r), _p35(_p2s(45482), _p2r), _p35(_p2s(272), _p2r), _p35(_p2s(69377), _p2r), _p35(_p2s(31127), _p2r), _p35(_p2s(79353), _p2r), _p35(_p2s(17274), _p2r), _p35(_p2s(91302), _p2r), _p35(_p2s(82229), _p2r), _p35(_p2s(10325), _p2r), _p35(_p2s(351), _p2r), _p35(_p2s(4050), _p2r), _p35(_p2s(29805), _p2r), _p35(_p2s(58913), _p2r), _p35(_p2s(55421), _p2r), _p35(_p2s(87845), _p2r), _p35(_p2s(17562), _p2r), _p35(_p2s(78466), _p2r), _p35(_p2s(40061), _p2r), _p35(_p2s(9195), _p2r), _p35(_p2s(93297), _p2r), _p35(_p2s(15133), _p2r), _p35(_p2s(55747), _p2r), _p35(_p2s(33155), _p2r), _p35(_p2s(79086), _p2r), _p35(_p2s(2306), _p2r), _p35(_p2s(14386), _p2r), _p35(_p2s(80225), _p2r), _p35(_p2s(17732), _p2r), _p35(_p2s(47169), _p2r), _p35(_p2s(77670), _p2r), _p35(_p2s(79988), _p2r), _p35(_p2s(92253), _p2r), _p35(_p2s(74428), _p2r), _p35(_p2s(16498), _p2r), _p35(_p2s(2631), _p2r), _p35(_p2s(27177), _p2r), _p35(_p2s(94781), _p2r), _p35(_p2s(53908), _p2r), _p35(_p2s(79813), _p2r), _p35(_p2s(16088), _p2r), _p35(_p2s(93733), _p2r), _p35(_p2s(69939), _p2r), _p35(_p2s(33734), _p2r), _p35(_p2s(34432), _p2r), _p35(_p2s(97423), _p2r), _p35(_p2s(23551), _p2r), _p35(_p2s(99791), _p2r), _p35(_p2s(21403), _p2r), _p35(_p2s(6173), _p2r), _p35(_p2s(23934), _p2r), _p35(_p2s(53709), _p2r), _p35(_p2s(88838), _p2r), _p35(_p2s(99790), _p2r), _p35(_p2s(18387), _p2r), _p35(_p2s(70941), _p2r), _p35(_p2s(35025), _p2r), _p35(_p2s(2603), _p2r), _p35(_p2s(78707), _p2r), _p35(_p2s(89058), _p2r), _p35(_p2s(84372), _p2r), _p35(_p2s(96804), _p2r), _p35(_p2s(33896), _p2r), _p35(_p2s(11031), _p2r), _p35(_p2s(71383), _p2r), _p35(_p2s(55888), _p2r), _p35(_p2s(2258), _p2r), _p35(_p2s(38003), _p2r), _p35(_p2s(92174), _p2r), _p35(_p2s(43768), _p2r), _p35(_p2s(73254), _p2r), _p35(_p2s(55734), _p2r), _p35(_p2s(81254), _p2r), _p35(_p2s(65455), _p2r), _p35(_p2s(70362), _p2r), _p35(_p2s(61977), _p2r), _p35(_p2s(43607), _p2r), _p35(_p2s(68086), _p2r), _p35(_p2s(78173), _p2r), _p35(_p2s(22581), _p2r), _p35(_p2s(20418), _p2r), _p35(_p2s(93373), _p2r), _p35(_p2s(13053), _p2r), _p35(_p2s(47874), _p2r), _p35(_p2s(42788), _p2r), _p35(_p2s(57664), _p2r), _p35(_p2s(44990), _p2r), _p35(_p2s(17712), _p2r), _p35(_p2s(83957), _p2r), _p35(_p2s(78539), _p2r), _p35(_p2s(96282), _p2r), _p35(_p2s(49679), _p2r), _p35(_p2s(45927), _p2r), _p35(_p2s(90312), _p2r), _p35(_p2s(86856), _p2r), _p35(_p2s(78123), _p2r), _p35(_p2s(25765), _p2r), _p35(_p2s(29493), _p2r), _p35(_p2s(28221), _p2r), _p35(_p2s(14830), _p2r), _p35(_p2s(54047), _p2r), _p35(_p2s(76054), _p2r), _p35(_p2s(90725), _p2r), _p35(_p2s(93053), _p2r), _p35(_p2s(88792), _p2r), _p35(_p2s(33242), _p2r), _p35(_p2s(59415), _p2r), _p35(_p2s(3296), _p2r), _p35(_p2s(32666), _p2r), _p35(_p2s(36731), _p2r), _p35(_p2s(30450), _p2r);
    },
    82692: function(_p3a, _p3b, _p3c) {
        'use strict';
        var _p3d = null;
        var _p3e = this && this.__createBinding || (Object.create ? function(_p3f, _p3g, _p3h, _p3i) {
                var _p3j = null;
                void 0 === _p3i && (_p3i = _p3h);
                var _p3k = Object.getOwnPropertyDescriptor(_p3g, _p3h);
                _p3k && !('get' in _p3k ? !_p3g.__esModule : _p3k.writable || _p3k.configurable) || (_p3k = {
                    'enumerable': true,
                    'get': function() {
                        return _p3g[_p3h];
                    }
                }), Object.defineProperty(_p3f, _p3i, _p3k);
            } : function(_p3l, _p3m, _p3n, _p3o) {
                void 0 === _p3o && (_p3o = _p3n), _p3l[_p3o] = _p3m[_p3n];
            }),
            _p3p = this && this.__setModuleDefault || (Object.create ? function(_p3q, _p3r) {
                var _p3s = null;
                Object.defineProperty(_p3q, 'default', {
                    'enumerable': true,
                    'value': _p3r
                });
            } : function(_p3t, _p3u) {
                var _p3v = null;
                _p3t.default = _p3u;
            }),
            _p3w = this && this.__importStar || function(_p3x) {
                var _p3y = null;
                if (_p3x && _p3x.__esModule) return _p3x;
                var _p3z = {};
                if (null != _p3x) {
                    for (var _p40 in _p3x) 'default' !== _p40 && Object.prototype.hasOwnProperty.call(_p3x, _p40) && _p3e(_p3z, _p3x, _p40);
                }
                return _p3p(_p3z, _p3x), _p3z;
            };
        defineModule(_p3b);
        Object.defineProperty(_p3b, '__esModule', {
            'value': true
        }), _p3b.SlotItemEffectUtil = void 0;
        var _p41, _p42 = _p3c(73785),
            _p43 = _p3w(_p3c(89051)),
            _p44 = _p3c(74496);
        ! function(_p45) {
            var _p46 = null;
            _p45.getSlotitemEffect = function(_p47, _p48) {
                var _p49 = null;
                if (null == _p47 || null == _p48) return null;
                for (var _p4a = new _p42.SlotItemEffectParamModel(_p47, _p48), _p4b = [{
                        'isExecute': Boolean(_p4a.get_type3_nums(9)),
                        'execFunc': _p43.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_type3_nums(10)),
                        'execFunc': _p43.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_type3_nums(11)),
                        'execFunc': _p43.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_type3_nums(12)) || Boolean(_p4a.get_type3_nums(13)),
                        'execFunc': _p43.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_type3_nums(25)),
                        'execFunc': _p43.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_type3_nums(29)),
                        'execFunc': _p43.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_type3_nums(42)),
                        'execFunc': _p43.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(3)) || Boolean(_p4a.get_slotnums(122)),
                        'execFunc': _p43.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(5)),
                        'execFunc': _p43.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(12)),
                        'execFunc': _p43.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(15)),
                        'execFunc': _p43.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(18)) || Boolean(_p4a.get_slotnums(52)),
                        'execFunc': _p43.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(19)),
                        'execFunc': _p43.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(24)) || Boolean(_p4a.get_slotnums(57)) || Boolean(_p4a.get_slotnums(111)),
                        'execFunc': _p43.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(26)) || Boolean(_p4a.get_slotnums(62)) || Boolean(_p4a.get_slotnums(79)) || Boolean(_p4a.get_slotnums(80)) || Boolean(_p4a.get_slotnums(81)) || Boolean(_p4a.get_slotnums(207)) || Boolean(_p4a.get_slotnums(208)),
                        'execFunc': _p43.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(35)),
                        'execFunc': _p43.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(39)) || Boolean(_p4a.get_slotnums(40)) || Boolean(_p4a.get_slotnums(49)) || Boolean(_p4a.get_slotnums(131)),
                        'execFunc': _p43.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(30)) || Boolean(_p4a.get_slotnums(410)),
                        'execFunc': _p43.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(44)) || Boolean(_p4a.get_slotnums(45)) || Boolean(_p4a.get_slotnums(287)) || Boolean(_p4a.get_slotnums(288)),
                        'execFunc': _p43.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(46)) || Boolean(_p4a.get_slotnums(47)) || Boolean(_p4a.get_slotnums(149)) || Boolean(_p4a.get_slotnums(132)) || Boolean(_p4a.get_slotnums(438)),
                        'execFunc': _p43.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(47)) || Boolean(_p4a.get_slotnums(438)),
                        'execFunc': _p43.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(50)),
                        'execFunc': _p43.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(58)),
                        'execFunc': _p43.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(59)),
                        'execFunc': _p43.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(60)) || Boolean(_p4a.get_slotnums(154)) || Boolean(_p4a.get_slotnums(219)),
                        'execFunc': _p43.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(61)),
                        'execFunc': _p43.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(61)),
                        'execFunc': _p43.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(63)),
                        'execFunc': _p43.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(66)) || Boolean(_p4a.get_slotnums(220)),
                        'execFunc': _p43.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(67)),
                        'execFunc': _p43.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(69)),
                        'execFunc': _p43.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(70)),
                        'execFunc': _p43.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(78)),
                        'execFunc': _p43.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(79)) || Boolean(_p4a.get_slotnums(81)),
                        'execFunc': _p43.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(82)),
                        'execFunc': _p43.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(84)),
                        'execFunc': _p43.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(85)),
                        'execFunc': _p43.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(87)),
                        'execFunc': _p43.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(90)),
                        'execFunc': _p43.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(93)),
                        'execFunc': _p43.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(94)),
                        'execFunc': _p43.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(99)),
                        'execFunc': _p43.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(100)),
                        'execFunc': _p43.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(104)),
                        'execFunc': _p43.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(106)) || Boolean(_p4a.get_slotnums(450)),
                        'execFunc': _p43.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(115)),
                        'execFunc': _p43.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(118)) || Boolean(_p4a.get_slotnums(521)),
                        'execFunc': _p43.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(119)),
                        'execFunc': _p43.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(121)),
                        'execFunc': _p43.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(122)),
                        'execFunc': _p43.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(128)) || Boolean(_p4a.get_slotnums(281)),
                        'execFunc': _p43.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(129)),
                        'execFunc': _p43.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(132)),
                        'execFunc': _p43.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(136)),
                        'execFunc': _p43.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(139)),
                        'execFunc': _p43.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(143)),
                        'execFunc': _p43.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(144)),
                        'execFunc': _p43.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(147)) || Boolean(_p4a.get_slotnums(393)) || Boolean(_p4a.get_slotnums(394)),
                        'execFunc': _p43.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(149)),
                        'execFunc': _p43.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(165)) || Boolean(_p4a.get_slotnums(216)),
                        'execFunc': _p43.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(171)),
                        'execFunc': _p43.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(174)),
                        'execFunc': _p43.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(179)),
                        'execFunc': _p43.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(184)),
                        'execFunc': _p43.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(188)),
                        'execFunc': _p43.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(189)),
                        'execFunc': _p43.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(194)),
                        'execFunc': _p43.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(195)),
                        'execFunc': _p43.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(204)),
                        'execFunc': _p43.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(217)),
                        'execFunc': _p43.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(220)),
                        'execFunc': _p43.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(227)),
                        'execFunc': _p43.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(228)),
                        'execFunc': _p43.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(229)),
                        'execFunc': _p43.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(234)),
                        'execFunc': _p43.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(235)),
                        'execFunc': _p43.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(237)) || Boolean(_p4a.get_slotnums(322)) || Boolean(_p4a.get_slotnums(323)) || Boolean(_p4a.get_slotnums(490)),
                        'execFunc': _p43.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(237)),
                        'execFunc': _p43.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(238)) || Boolean(_p4a.get_slotnums(239)),
                        'execFunc': _p43.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(242)),
                        'execFunc': _p43.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(243)),
                        'execFunc': _p43.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(244)),
                        'execFunc': _p43.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(245)) || Boolean(_p4a.get_slotnums(246)) || Boolean(_p4a.get_slotnums(468)),
                        'execFunc': _p43.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(247)),
                        'execFunc': _p43.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(266)),
                        'execFunc': _p43.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(266)),
                        'execFunc': _p43.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(267)) || Boolean(_p4a.get_slotnums(366)),
                        'execFunc': _p43.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(267)) || Boolean(_p4a.get_slotnums(366)),
                        'execFunc': _p43.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(268)),
                        'execFunc': _p43.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(271)),
                        'execFunc': _p43.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(275)),
                        'execFunc': _p43.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(277)),
                        'execFunc': _p43.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(278)),
                        'execFunc': _p43.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(279)),
                        'execFunc': _p43.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(282)),
                        'execFunc': _p43.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(283)),
                        'execFunc': _p43.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(285)),
                        'execFunc': _p43.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(286)),
                        'execFunc': _p43.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(286)),
                        'execFunc': _p43.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(286)),
                        'execFunc': _p43.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(287)),
                        'execFunc': _p43.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(288)),
                        'execFunc': _p43.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(289)),
                        'execFunc': _p43.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(290)),
                        'execFunc': _p43.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(291)),
                        'execFunc': _p43.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(292)),
                        'execFunc': _p43.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(293)),
                        'execFunc': _p43.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(294)),
                        'execFunc': _p43.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(295)),
                        'execFunc': _p43.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(296)),
                        'execFunc': _p43.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(297)),
                        'execFunc': _p43.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(298)) || Boolean(_p4a.get_slotnums(299)) || Boolean(_p4a.get_slotnums(300)),
                        'execFunc': _p43.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(301)),
                        'execFunc': _p43.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(302)),
                        'execFunc': _p43.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(303)),
                        'execFunc': _p43.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(304)),
                        'execFunc': _p43.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(305)) || Boolean(_p4a.get_slotnums(306)),
                        'execFunc': _p43.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(307)),
                        'execFunc': _p43.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(308)),
                        'execFunc': _p43.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(310)) || Boolean(_p4a.get_slotnums(518)),
                        'execFunc': _p43.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(313)),
                        'execFunc': _p43.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(314)),
                        'execFunc': _p43.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(315)),
                        'execFunc': _p43.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(316)),
                        'execFunc': _p43.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(317)),
                        'execFunc': _p43.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(318)),
                        'execFunc': _p43.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(319)),
                        'execFunc': _p43.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(320)),
                        'execFunc': _p43.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(322)),
                        'execFunc': _p43.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(323)),
                        'execFunc': _p43.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(324)) || Boolean(_p4a.get_slotnums(325)),
                        'execFunc': _p43.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(326)),
                        'execFunc': _p43.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(327)),
                        'execFunc': _p43.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(328)),
                        'execFunc': _p43.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(329)),
                        'execFunc': _p43.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(330)) || Boolean(_p4a.get_slotnums(331)) || Boolean(_p4a.get_slotnums(332)),
                        'execFunc': _p43.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(335)),
                        'execFunc': _p43.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(336)),
                        'execFunc': _p43.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(337)),
                        'execFunc': _p43.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(338)),
                        'execFunc': _p43.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(339)),
                        'execFunc': _p43.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(340)),
                        'execFunc': _p43.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(341)),
                        'execFunc': _p43.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(342)),
                        'execFunc': _p43.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(343)),
                        'execFunc': _p43.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(344)),
                        'execFunc': _p43.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(345)),
                        'execFunc': _p43.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(346)),
                        'execFunc': _p43.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(347)),
                        'execFunc': _p43.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(356)) || Boolean(_p4a.get_slotnums(357)),
                        'execFunc': _p43.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(358)),
                        'execFunc': _p43.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(359)),
                        'execFunc': _p43.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(360)) || Boolean(_p4a.get_slotnums(361)),
                        'execFunc': _p43.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(362)) || Boolean(_p4a.get_slotnums(363)),
                        'execFunc': _p43.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(364)),
                        'execFunc': _p43.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(365)),
                        'execFunc': _p43.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(367)),
                        'execFunc': _p43.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(368)),
                        'execFunc': _p43.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(369)),
                        'execFunc': _p43.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(370)),
                        'execFunc': _p43.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(371)),
                        'execFunc': _p43.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(372)),
                        'execFunc': _p43.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(373)),
                        'execFunc': _p43.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(374)),
                        'execFunc': _p43.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(375)),
                        'execFunc': _p43.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(376)),
                        'execFunc': _p43.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(377)),
                        'execFunc': _p43.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(378)),
                        'execFunc': _p43.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(379)),
                        'execFunc': _p43.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(380)),
                        'execFunc': _p43.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(381)),
                        'execFunc': _p43.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(382)) || Boolean(_p4a.get_slotnums(509)),
                        'execFunc': _p43.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(383)),
                        'execFunc': _p43.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(384)),
                        'execFunc': _p43.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(385)),
                        'execFunc': _p43.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(386)),
                        'execFunc': _p43.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(387)),
                        'execFunc': _p43.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(389)),
                        'execFunc': _p43.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(390)),
                        'execFunc': _p43.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(391)),
                        'execFunc': _p43.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(392)),
                        'execFunc': _p43.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(397)),
                        'execFunc': _p43.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(398)),
                        'execFunc': _p43.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(399)),
                        'execFunc': _p43.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(400)),
                        'execFunc': _p43.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(407)),
                        'execFunc': _p43.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(408)),
                        'execFunc': _p43.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(409)),
                        'execFunc': _p43.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(411)),
                        'execFunc': _p43.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(412)),
                        'execFunc': _p43.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(413)),
                        'execFunc': _p43.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(414)),
                        'execFunc': _p43.getSlot414PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(415)),
                        'execFunc': _p43.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(419)),
                        'execFunc': _p43.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(420)),
                        'execFunc': _p43.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(421)),
                        'execFunc': _p43.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(422)),
                        'execFunc': _p43.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(423)),
                        'execFunc': _p43.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(424)),
                        'execFunc': _p43.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(425)),
                        'execFunc': _p43.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(426)) || Boolean(_p4a.get_slotnums(427)) || Boolean(_p4a.get_slotnums(428)) || Boolean(_p4a.get_slotnums(429)),
                        'execFunc': _p43.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(430)),
                        'execFunc': _p43.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(434)) || Boolean(_p4a.get_slotnums(435)),
                        'execFunc': _p43.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(437)),
                        'execFunc': _p43.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(438)),
                        'execFunc': _p43.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(439)),
                        'execFunc': _p43.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(440)) || Boolean(_p4a.get_slotnums(441)),
                        'execFunc': _p43.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(442)) || Boolean(_p4a.get_slotnums(443)),
                        'execFunc': _p43.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(447)),
                        'execFunc': _p43.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(450)),
                        'execFunc': _p43.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(451)),
                        'execFunc': _p43.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(455)),
                        'execFunc': _p43.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(456)),
                        'execFunc': _p43.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(457)) || Boolean(_p4a.get_slotnums(461)),
                        'execFunc': _p43.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(458)),
                        'execFunc': _p43.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(463)),
                        'execFunc': _p43.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(464)),
                        'execFunc': _p43.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(465)),
                        'execFunc': _p43.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(466)),
                        'execFunc': _p43.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(467)),
                        'execFunc': _p43.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(470)),
                        'execFunc': _p43.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(471)),
                        'execFunc': _p43.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(472)),
                        'execFunc': _p43.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(473)),
                        'execFunc': _p43.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(474)),
                        'execFunc': _p43.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(478)),
                        'execFunc': _p43.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(483)),
                        'execFunc': _p43.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(485)),
                        'execFunc': _p43.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(486)),
                        'execFunc': _p43.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(487)),
                        'execFunc': _p43.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(488)),
                        'execFunc': _p43.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(489)) || Boolean(_p4a.get_slotnums(491)),
                        'execFunc': _p43.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(500)) || Boolean(_p4a.get_slotnums(501)),
                        'execFunc': _p43.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(502)),
                        'execFunc': _p43.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(503)),
                        'execFunc': _p43.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(505)),
                        'execFunc': _p43.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(506)),
                        'execFunc': _p43.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(507)) || Boolean(_p4a.get_slotnums(508)),
                        'execFunc': _p43.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(510)),
                        'execFunc': _p43.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(511)) || Boolean(_p4a.get_slotnums(512)),
                        'execFunc': _p43.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(517)),
                        'execFunc': _p43.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(518)),
                        'execFunc': _p43.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(519)),
                        'execFunc': _p43.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(520)),
                        'execFunc': _p43.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(521)),
                        'execFunc': _p43.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(522)) || Boolean(_p4a.get_slotnums(523)),
                        'execFunc': _p43.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(524)),
                        'execFunc': _p43.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(525)) || Boolean(_p4a.get_slotnums(526)),
                        'execFunc': _p43.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(527)),
                        'execFunc': _p43.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_p4a.get_slotnums(528)),
                        'execFunc': _p43.getSlot528PersonalEffect
                    }], _p4c = new _p44.SlotItemEffectModel(), _p4d = 0, _p4e = _p4b; _p4d < _p4e.length; _p4d++) {
                    var _p4f = _p4e[_p4d];
                    if (_p4f.isExecute) {
                        var _p4g = _p4f.execFunc(_p4a);
                        0, _p4c.add(_p4g);
                    }
                }
                return _p4c;
            };
        }(_p41 || (_p3b.SlotItemEffectUtil = _p41 = {}));
    },
}
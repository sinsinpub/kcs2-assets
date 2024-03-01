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
    73785: function(_l9g, _l9h, _l9i) {
        'use strict';
        var _l9j = null;
        var _l9k = this && this.__importDefault || function(_l9l) {
            var _l9m = null;
            return _l9l && _l9l.__esModule ? _l9l : {
                'default': _l9l
            };
        };
        defineModule(_l9h);
        Object.defineProperty(_l9h, '__esModule', {
            'value': true
        }), _l9h.SlotItemEffectParamModel = void 0;
        var _l9n = _l9k(_l9i(18622)),
            _l9o = _l9i(72170),
            _l9p = (function() {
                var _l9q = null;

                function _l9r(_l9s, _l9t) {
                    var _l9u = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _l9v = {}, _l9w = {}, _l9x = {}, _l9y = 0, _l9z = _l9t; _l9y < _l9z.length; _l9y++) {
                        var _la0 = _l9z[_l9y];
                        null != _la0 && (null == _l9v[_la0.mstID] && (_l9v[_la0.mstID] = new Array()), _l9v[_la0.mstID].push(_la0), null == _l9w[_la0.mstID] ? _l9w[_la0.mstID] = 1 : _l9w[_la0.mstID] += 1, null == _l9x[_la0.equipType] ? _l9x[_la0.equipType] = 1 : _l9x[_la0.equipType] += 1);
                    }
                    this._have_slots_dict = _l9v, this._have_slotnums_dict = _l9w, this._have_type3nums_dict = _l9x, this._ship_id = _l9s.mstID, this._yomi = _l9s.yomi, this._stype = _l9s.shipTypeID, this._ctype = _l9s.getClassType();
                }
                return Object.defineProperty(_l9r.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _la1 = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_l9r.prototype, 'ship_id', {
                    'get': function() {
                        var _la2 = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_l9r.prototype, 'yomi', {
                    'get': function() {
                        var _la3 = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_l9r.prototype, 'stype', {
                    'get': function() {
                        var _la4 = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_l9r.prototype, 'ctype', {
                    'get': function() {
                        var _la5 = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _l9r.prototype.get_slotnums = function(_la6) {
                    var _la7 = null;
                    return null == this._have_slotnums_dict[_la6] ? 0 : this._have_slotnums_dict[_la6];
                }, _l9r.prototype.get_type3_nums = function(_la8) {
                    var _la9 = null;
                    return null == this._have_type3nums_dict[_la8] ? 0 : this._have_type3nums_dict[_la8];
                }, _l9r.prototype.have_slot_ids = function() {
                    var _laa = null;
                    return Object.keys(this._have_slots_dict);
                }, _l9r.prototype.get_each_level_nums = function(_lab) {
                    var _lac = null,
                        _lad = this._have_slots_dict[_lab],
                        _lae = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _lad)
                        for (var _laf = 0, _lag = _lad; _laf < _lag.length; _laf++) {
                            _lae[_lag[_laf].level]++;
                        }
                    return _lae;
                }, _l9r.prototype.get_each_level_over_nums = function(_lah) {
                    var _lai = null;
                    for (var _laj = this, _lak = [], _lal = function(_lam) {
                            var _lan = null;
                            if (_lak[_lam] = Array.apply(null, new Array(_lao.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _lao.have_slots_dict[_lam]) return 'continue';
                            _lao.get_each_level_nums(_lam).forEach(function(_lap, _laq) {
                                var _lar = null;
                                for (var _las = 1; _las <= _laj.SLOT_LEVEL_MAX; _las++) _laq >= _las && (_lak[_lam][_las] += _lap);
                            });
                        }, _lao = this, _lat = 0, _lau = _lah; _lat < _lau.length; _lat++) {
                        _lal(_lau[_lat]);
                    }
                    return _lak;
                }, _l9r.prototype.get_have_rader_nums = function() {
                    var _lav = null;
                    for (var _law = 0, _lax = 0, _lay = 0, _laz = this.have_slot_ids(); _lay < _laz.length; _lay++) {
                        var _lb0 = _laz[_lay],
                            _lb1 = _l9n.default.model.slot.getMst(_lb0),
                            _lb2 = _lb1.equipType;
                        12 != _lb2 && 13 != _lb2 || (_lb1.sakuteki >= 5 && (_law += this.get_slotnums(parseInt(_lb0))), _lb1.taiku >= 2 && (_lax += this.get_slotnums(parseInt(_lb0))));
                    }
                    return {
                        'water_rader': _law,
                        'air_rader': _lax
                    };
                }, _l9r.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _l9r.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _l9r.prototype.getCountryName = function() {
                    var _lb3 = null;
                    return null == _l9o.SHIP_COUNTRY[this._ctype] ? '' : _l9o.SHIP_COUNTRY[this._ctype];
                }, _l9r.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _l9r.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _l9r;
            }());
        _l9h.SlotItemEffectParamModel = _l9p;
    },
    16718: (_lmb, _lmc, _lmd) => {
        'use strict';
        var _lme = null;
        defineModule(_lmc);
        Object.defineProperty(_lmc, '__esModule', {
            'value': true
        }), _lmc.TaskGetSlotItemEffectParams = void 0;
        var _lmf = _lmd(74496),
            _lmg = _lmd(82692),
            _lmh = (function() {
                var _lmi = null;

                function _lmj(_lmk, _lml, _lmm) {
                    var _lmn = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lmk;
                    var _lmo = _lmk.getSlotitems();
                    _lmo.push(_lmk.getSlotitemEx());
                    var _lmp = _lmo.map(function(_lmq) {
                        var _lmr = null;
                        return null == _lmq || null != _lml && _lmq.memID == _lml.memID ? null : _lmq;
                    });
                    this._removeSlots = _lmp;
                    var _lms = _lmp.map(function(_lmt) {
                        return _lmt;
                    });
                    _lms.push(_lmm), this._toSlots = _lms;
                }
                return _lmj.prototype.start = function() {
                    var _lmu = null,
                        _lmv = this._ship.getSlotitems();
                    _lmv.push(this._ship.getSlotitemEx());
                    var _lmw = _lmg.SlotItemEffectUtil.getSlotitemEffect(this._ship, _lmv),
                        _lmx = _lmg.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lmy = _lmg.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_lmw, _lmx),
                        'toSlotItemEffect': this._subEffectModels(_lmy, _lmx)
                    };
                }, _lmj.prototype._subEffectModels = function(_lmz, _ln0) {
                    var _ln1 = null,
                        _ln2 = new _lmf.SlotItemEffectModel();
                    return _ln2.houg = _lmz.houg - _ln0.houg, _ln2.raig = _lmz.raig - _ln0.raig, _ln2.tyku = _lmz.tyku - _ln0.tyku, _ln2.souk = _lmz.souk - _ln0.souk, _ln2.kaih = _lmz.kaih - _ln0.kaih, _ln2.tais = _lmz.tais - _ln0.tais, _ln2.saku = _lmz.saku - _ln0.saku, _ln2.baku = _lmz.baku - _ln0.baku, _ln2.houm = _lmz.houm - _ln0.houm, _ln2.leng = _lmz.leng - _ln0.leng, _ln2;
                }, _lmj;
            }());
        _lmc.TaskGetSlotItemEffectParams = _lmh;
    },
    69377: function(_mas, _mat, _mau) {
        'use strict';
        var _mav = null;
        var _maw = this && this.__importDefault || function(_max) {
            var _may = null;
            return _max && _max.__esModule ? _max : {
                'default': _max
            };
        };
        defineModule(_mat);
        Object.defineProperty(_mat, '__esModule', {
            'value': true
        }), _mat.get25mmMachinegunEffect = void 0;
        var _maz = _mau(74496),
            _mb0 = _maw(_mau(18622));
        _mat.get25mmMachinegunEffect = function(_mb1) {
            var _mb2 = null,
                _mb3 = new _maz.SlotItemEffectModel(),
                _mb4 = false,
                _mb5 = new _maz.SlotItemEffectModel(),
                _mb6 = 0;
            if (662 == _mb1.ship_id || 663 == _mb1.ship_id ? (_mb5.tyku += 2, _mb5.kaih += 1, _mb4 = true) : 668 == _mb1.ship_id && (_mb5.tyku += 3, _mb5.kaih += 2, _mb4 = true), 56 == _mb1.ctype && (_mb5.houg += 1, _mb5.tyku += 2, _mb5.kaih += 2, _mb4 = true, _mb6 = 1), 0 == _mb4) return _mb3;
            var _mb7 = _mb1.get_slotnums(39) + _mb1.get_slotnums(40) + _mb1.get_slotnums(49) + _mb1.get_slotnums(131);
            if (_mb3.add(_mb5.multiply(_mb7)), 0 == _mb6) return _mb3;
            for (var _mb8 = 0, _mb9 = 0, _mba = _mb1.have_slot_ids(); _mb9 < _mba.length; _mb9++) {
                var _mbb = _mba[_mb9],
                    _mbc = _mb0.default.model.slot.getMst(_mbb),
                    _mbd = _mbc.equipType;
                12 != _mbd && 13 != _mbd || (_mbc.sakuteki >= 5 && _mb1.get_slotnums(parseInt(_mbb)), _mbc.taiku >= 2 && (_mb8 += _mb1.get_slotnums(parseInt(_mbb))));
            }
            return _mb8 >= 1 && 1 == _mb6 && (_mb3.tyku += 2, _mb3.kaih += 2), _mb3;
        };
    },
    77670: function(_mbe, _mbf, _mbg) {
        'use strict';
        var _mbh = null;
        var _mbi = this && this.__importDefault || function(_mbj) {
            var _mbk = null;
            return _mbj && _mbj.__esModule ? _mbj : {
                'default': _mbj
            };
        };
        defineModule(_mbf);
        Object.defineProperty(_mbf, '__esModule', {
            'value': true
        }), _mbf.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mbl = _mbg(74496),
            _mbm = _mbi(_mbg(18622));
        _mbf.get8cmAntiAircraftGunPersonalEffect = function(_mbn) {
            var _mbo = null,
                _mbp = new _mbl.SlotItemEffectModel(),
                _mbq = false,
                _mbr = new _mbl.SlotItemEffectModel(),
                _mbs = 0;
            if (501 != _mbn.ship_id && 506 != _mbn.ship_id && 502 != _mbn.ship_id && 507 != _mbn.ship_id || (_mbr.tyku += 2, _mbr.kaih += 1, _mbq = true, _mbs = 1), 501 != _mbn.ship_id && 506 != _mbn.ship_id || (_mbr.houg += 1, _mbr.tyku += 2, _mbr.kaih += 2, _mbq = true, _mbs = 1), 0 == _mbq) return _mbp;
            var _mbt = _mbn.get_slotnums(66) + _mbn.get_slotnums(220);
            _mbp.add(_mbr.multiply(_mbt));
            for (var _mbu = 0, _mbv = 0, _mbw = _mbn.have_slot_ids(); _mbv < _mbw.length; _mbv++) {
                var _mbx = _mbw[_mbv],
                    _mby = _mbm.default.model.slot.getMst(_mbx),
                    _mbz = _mby.equipType;
                12 != _mbz && 13 != _mbz || (_mby.sakuteki >= 5 && _mbn.get_slotnums(parseInt(_mbx)), _mby.taiku >= 2 && (_mbu += _mbn.get_slotnums(parseInt(_mbx))));
            }
            return 0 == _mbs || _mbu >= 1 && (_mbp.tyku += 1, _mbp.kaih += 2), _mbp;
        };
    },
    34165: (_mc0, _mc1, _mc2) => {
        'use strict';
        var _mc3 = null;
        defineModule(_mc1);
        Object.defineProperty(_mc1, '__esModule', {
            'value': true
        }), _mc1.getCamouflageSlotPersonalEffect = void 0;
        var _mc4 = _mc2(74496);
        _mc1.getCamouflageSlotPersonalEffect = function(_mc5) {
            var _mc6 = null,
                _mc7 = new _mc4.SlotItemEffectModel();
            return 'きそ' != _mc5.yomi && 'たま' != _mc5.yomi || (_mc7.kaih = 7, _mc7.souk = 2), _mc7;
        };
    },
    31127: (_mc8, _mc9, _mca) => {
        'use strict';
        var _mcb = null;
        defineModule(_mc9);
        Object.defineProperty(_mc9, '__esModule', {
            'value': true
        }), _mc9.getHighZuiunSeriesEffect = void 0;
        var _mcc = _mca(74496);
        _mc9.getHighZuiunSeriesEffect = function(_mcd) {
            var _mce = null,
                _mcf = new _mcc.SlotItemEffectModel(),
                _mcg = false,
                _mch = new _mcc.SlotItemEffectModel();
            if (662 == _mcd.ship_id ? (_mcf.houg += 3, _mcf.kaih += 1) : 663 == _mcd.ship_id || 668 == _mcd.ship_id || 501 == _mcd.ship_id || 506 == _mcd.ship_id || 553 == _mcd.ship_id || 554 == _mcd.ship_id ? (_mch.houg += 3, _mch.kaih += 2, _mch.tyku += 1, _mcg = true) : 502 != _mcd.ship_id && 507 != _mcd.ship_id || (_mch.houg += 2, _mch.kaih += 2, _mch.tyku += 1, _mcg = true), 0 == _mcg) return _mcf;
            var _mci = 0;
            return [237, 322, 323, 490].forEach(function(_mcj) {
                var _mck = null;
                _mci += _mcd.get_slotnums(_mcj);
            }), _mcf.add(_mch.multiply(_mci)), _mcf;
        };
    },
    81018: function(_mcl, _mcm, _mcn) {
        'use strict';
        var _mco = null;
        var _mcp = this && this.__importDefault || function(_mcq) {
            var _mcr = null;
            return _mcq && _mcq.__esModule ? _mcq : {
                'default': _mcq
            };
        };
        defineModule(_mcm);
        Object.defineProperty(_mcm, '__esModule', {
            'value': true
        }), _mcm.getRaderPrivateEffect = void 0;
        var _mcs = _mcn(74496),
            _mct = _mcp(_mcn(18622));
        _mcm.getRaderPrivateEffect = function(_mcu) {
            var _mcv = null,
                _mcw = new _mcs.SlotItemEffectModel(),
                _mcx = 0,
                _mcy = 0;
            if (569 == _mcu.ship_id || 648 == _mcu.ship_id || 961 == _mcu.ship_id || 951 == _mcu.ship_id) _mcx = 1;
            else {
                if (955 != _mcu.ship_id && 960 != _mcu.ship_id) return _mcw;
                _mcx = 2, _mcy = 1;
            }
            for (var _mcz = 0, _md0 = 0, _md1 = _mcu.have_slot_ids(); _md0 < _md1.length; _md0++) {
                var _md2 = _md1[_md0],
                    _md3 = _mct.default.model.slot.getMst(_md2),
                    _md4 = _md3.equipType;
                12 != _md4 && 13 != _md4 || (_md3.sakuteki >= 5 && _mcu.get_slotnums(parseInt(_md2)), _md3.taiku >= 2 && (_mcz += _mcu.get_slotnums(parseInt(_md2))));
            }
            if (_mcz > 0 && (1 == _mcx ? (_mcw.houg += 1, _mcw.kaih += 3, _mcw.tyku += 2) : 2 == _mcx && (_mcw.tyku += 2, _mcw.kaih += 1)), 0 == _mcy) return _mcw;
            for (var _md5 = [], _md6 = function(_md7) {
                    var _md8 = null;
                    if (null == _mcu.have_slots_dict[_md7]) return 'continue';
                    var _md9 = _mcu.get_each_level_nums(_md7);
                    null == _md5[_md7] && (_md5[_md7] = []), _md9.forEach(function(_mda, _mdb) {
                        var _mdc = null;
                        for (var _mdd = 1; _mdd <= _mcu.SLOT_LEVEL_MAX; _mdd++) null == _md5[_md7][_mdd] && (_md5[_md7][_mdd] = 0), _mdb >= _mdd && (_md5[_md7][_mdd] += _mda);
                    });
                }, _mde = 0, _mdf = [450]; _mde < _mdf.length; _mde++) {
                _md6(_mdf[_mde]);
            }
            var _mdg = null != _md5[450] ? _md5[450][4] : 0;
            return 1 == _mcy && _mdg > 0 && (_mcw.houg += 1, _mcw.houm += 1, _mcw.tyku += 1, _mcw.kaih += 2), _mcw;
        };
    },
    56716: (_mdh, _mdi, _mdj) => {
        'use strict';
        var _mdk = null;
        defineModule(_mdi);
        Object.defineProperty(_mdi, '__esModule', {
            'value': true
        }), _mdi.getSearchLightEffect = void 0;
        var _mdl = _mdj(74496);
        _mdi.getSearchLightEffect = function(_mdm) {
            var _mdn = null,
                _mdo = new _mdl.SlotItemEffectModel(),
                _mdp = _mdm.get_type3_nums(29);
            return 'ひえい' == _mdm.yomi || 'きりしま' == _mdm.yomi || 'ちょうかい' == _mdm.yomi || 'じんつう' == _mdm.yomi || 'あかつき' == _mdm.yomi ? (_mdo.houg += 4, _mdo.kaih -= 1) : 'あきぐも' == _mdm.yomi ? _mdo.houg = _mdo.houg + 2 * _mdp : 'ゆきかぜ' == _mdm.yomi && (_mdo.houg = _mdo.houg + _mdp, _mdo.tyku = _mdo.tyku + _mdp), 662 != _mdm.ship_id && 663 != _mdm.ship_id && 668 != _mdm.ship_id || (_mdo.raig += 2, _mdo.houg += 4), 'じんつう' == _mdm.yomi && (_mdo.raig += 8, _mdo.houg += 4), _mdo;
        };
    },
    17713: (_mdq, _mdr, _mds) => {
        'use strict';
        var _mdt = null;
        defineModule(_mdr);
        Object.defineProperty(_mdr, '__esModule', {
            'value': true
        }), _mdr.getSearchLightLargeEffect = void 0;
        var _mdu = _mds(74496);
        _mdr.getSearchLightLargeEffect = function(_mdv) {
            var _mdw = null,
                _mdx = new _mdu.SlotItemEffectModel();
            'ひえい' == _mdv.yomi || 'きりしま' == _mdv.yomi ? (_mdx.houg += 6, _mdx.kaih -= 2) : 'やまと' != _mdv.yomi && 'むさし' != _mdv.yomi || (_mdx.houg += 4, _mdx.kaih -= 1);
            var _mdy = _mdv.get_slotnums(174);
            return 592 == _mdv.ship_id && (_mdx.houg += 3, _mdx.raig += 3, _mdy > 0 && (_mdx.raig += 5)), _mdx;
        };
    },
    17213: (_mdz, _me0, _me1) => {
        'use strict';
        var _me2 = null;
        defineModule(_me0);
        Object.defineProperty(_me0, '__esModule', {
            'value': true
        }), _me0.getSlot100PersonalEffect = void 0;
        var _me3 = _me1(74496);
        _me0.getSlot100PersonalEffect = function(_me4) {
            var _me5 = null,
                _me6 = new _me3.SlotItemEffectModel(),
                _me7 = new _me3.SlotItemEffectModel();
            if (553 == _me4.ship_id) _me7.houg = 4;
            else {
                if (554 != _me4.ship_id) return 196 == _me4.ship_id ? (_me6.houg = 3, _me6) : 197 == _me4.ship_id ? (_me6.houg = 6, _me6) : _me6;
                _me7.houg = 4;
            }
            var _me8 = _me4.get_slotnums(100);
            return _me6 = _me7.multiply(_me8);
        };
    },
    40176: (_me9, _mea, _meb) => {
        'use strict';
        var _mec = null;
        defineModule(_mea);
        Object.defineProperty(_mea, '__esModule', {
            'value': true
        }), _mea.getSlot104PersonalEffect = void 0;
        var _med = _meb(74496);
        _mea.getSlot104PersonalEffect = function(_mee) {
            var _mef = null,
                _meg = new _med.SlotItemEffectModel(),
                _meh = new _med.SlotItemEffectModel();
            if (149 == _mee.ship_id || 591 == _mee.ship_id) _meh.houg = 2;
            else {
                if (150 == _mee.ship_id || 592 == _mee.ship_id) _meh.houg = 1;
                else {
                    if (152 == _mee.ship_id) _meh.houg = 1;
                    else {
                        if (151 != _mee.ship_id && 593 != _mee.ship_id && 954 != _mee.ship_id) return _meg;
                        _meh.houg = 2, _meh.tyku = 1, _meh.kaih = 2;
                    }
                }
            }
            var _mei = _mee.get_slotnums(104);
            return _meg = _meh.multiply(_mei);
        };
    },
    32889: (_mej, _mek, _mel) => {
        'use strict';
        var _mem = null;
        defineModule(_mek);
        Object.defineProperty(_mek, '__esModule', {
            'value': true
        }), _mek.getSlot106PersonalEffect = void 0;
        var _men = _mel(74496);
        _mek.getSlot106PersonalEffect = function(_meo) {
            var _mep = null,
                _meq = new _men.SlotItemEffectModel(),
                _mer = new _men.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961].indexOf(_meo.ship_id) >= 0 ? (_mer.houg += 1, _mer.tyku += 2, _mer.souk += 1, _mer.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_meo.yomi) >= 0 ? (_mer.tyku += 1, _mer.souk += 1, _mer.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_meo.yomi) >= 0 && (_mer.tyku += 2, _mer.souk += 1, _mer.kaih += 2, 663 != _meo.ship_id && 668 != _meo.ship_id || (_meq.houg += 1, _meq.tyku += 1, _meq.souk += 1, _meq.kaih += 1), 668 == _meo.ship_id && (_meq.tyku += 1, _meq.kaih += 1)), !_mer.exists()) return _meq;
            var _mes = _meo.get_slotnums(106) + _meo.get_slotnums(450);
            return _meq.add(_mer.multiply(_mes)), _meq;
        };
    },
    15133: (_met, _meu, _mev) => {
        'use strict';
        var _mew = null;
        defineModule(_meu);
        Object.defineProperty(_meu, '__esModule', {
            'value': true
        }), _meu.getSlot115PersonalEffect = void 0;
        var _mex = _mev(74496);
        _meu.getSlot115PersonalEffect = function(_mey) {
            var _mez = null,
                _mf0 = new _mex.SlotItemEffectModel(),
                _mf1 = false,
                _mf2 = new _mex.SlotItemEffectModel(),
                _mf3 = 0;
            if (55 != _mey.ctype && 47 != _mey.ctype || (_mf2.houg += 2, _mf2.saku += 2, _mf2.kaih += 1, _mf1 = true, _mf3 = 1), 0 == _mf1) return _mf0;
            var _mf4 = _mey.get_slotnums(115);
            if (_mf0.add(_mf2.multiply(_mf4)), 0 == _mf3) return _mf0;
            var _mf5 = _mey.get_each_level_nums(115)[10];
            return 1 == _mf3 && (_mf0.houg += 1 * _mf5, _mf0.kaih += 1 * _mf5), _mf0;
        };
    },
    55747: (_mf6, _mf7, _mf8) => {
        'use strict';
        var _mf9 = null;
        defineModule(_mf7);
        Object.defineProperty(_mf7, '__esModule', {
            'value': true
        }), _mf7.getSlot118PersonalEffect = void 0;
        var _mfa = _mf8(74496);
        _mf7.getSlot118PersonalEffect = function(_mfb) {
            var _mfc = null,
                _mfd = new _mfa.SlotItemEffectModel(),
                _mfe = false,
                _mff = new _mfa.SlotItemEffectModel(),
                _mfg = 0;
            if (52 == _mfb.ctype && (_mff.houg += 1, _mff.saku += 2, _mff.kaih += 2, _mfg = 1, _mfe = true), 507 == _mfb.ship_id && (_mff.houg += 3, _mff.saku += 2, _mff.kaih += 1, _mfg = 2, _mfe = true), 0 == _mfe) return _mfd;
            var _mfh = _mfb.get_slotnums(118) + _mfb.get_slotnums(521);
            if (_mfd.add(_mff.multiply(_mfh)), 0 == _mfb.get_slotnums(118)) return _mfd;
            if (0 == _mfg) return _mfd;
            var _mfi = _mfb.get_each_level_nums(118),
                _mfj = 0,
                _mfk = 0,
                _mfl = 0,
                _mfm = _mfi[10];
            return _mfi.forEach(function(_mfn, _mfo) {
                _mfo >= 2 && (_mfj += _mfn), _mfo >= 5 && (_mfk += _mfn), _mfo >= 7 && (_mfl += _mfn);
            }), 1 == _mfg ? (_mfd.houg += 2 * _mfm, _mfd.saku += 1 * _mfm) : 2 == _mfg && (_mfd.houm += 1 * _mfj, _mfd.kaih += 1 * _mfk, _mfd.houg += 1 * _mfl, _mfd.houg += 1 * _mfm, _mfd.raig += 1 * _mfm, _mfd.tyku += 1 * _mfm, _mfd.saku += 1 * _mfm, _mfd.kaih += 1 * _mfm), _mfd;
        };
    },
    11285: (_mfp, _mfq, _mfr) => {
        'use strict';
        var _mfs = null;
        defineModule(_mfq);
        Object.defineProperty(_mfq, '__esModule', {
            'value': true
        }), _mfq.getSlot119PersonalEffect = void 0;
        var _mft = _mfr(74496);
        _mfq.getSlot119PersonalEffect = function(_mfu) {
            var _mfv = null,
                _mfw = new _mft.SlotItemEffectModel(),
                _mfx = new _mft.SlotItemEffectModel();
            34 == _mfu.ctype || 56 == _mfu.ctype ? _mfx.houg += 1 : 90 == _mfu.ctype && (_mfx.houg += 2, _mfx.raig += 1);
            var _mfy = true;
            if (_mfx.exists() || (_mfy = false), 0 == _mfy) return _mfw;
            var _mfz = _mfu.get_slotnums(119);
            return _mfw = _mfx.multiply(_mfz);
        };
    },
    96200: (_mg0, _mg1, _mg2) => {
        'use strict';
        var _mg3 = null;
        defineModule(_mg1);
        Object.defineProperty(_mg1, '__esModule', {
            'value': true
        }), _mg1.getSlot120mm50GroupPersonalEffect = void 0;
        var _mg4 = _mg2(74496);
        _mg1.getSlot120mm50GroupPersonalEffect = function(_mg5) {
            var _mg6 = null,
                _mg7 = new _mg4.SlotItemEffectModel(),
                _mg8 = false,
                _mg9 = new _mg4.SlotItemEffectModel(),
                _mga = _mg5.get_slotnums(147),
                _mgb = _mg5.get_slotnums(393),
                _mgc = _mg5.get_slotnums(394),
                _mgd = new _mg4.SlotItemEffectModel(),
                _mge = new _mg4.SlotItemEffectModel();
            if (61 == _mg5.ctype && (_mg9.houg += 1, _mg9.kaih += 1, _mg8 = true, _mgb >= 1 && (_mgd.houg += 1, _mgd.tyku += 1), _mgc >= 1 && (_mge.houg += 1, _mge.tyku += 1, _mge.kaih += 1, 'グレカーレ' == _mg5.yomi && (_mge.kaih += 1))), 0 == _mg8) return _mg7;
            var _mgf = _mga + _mgb + _mgc;
            return _mg7.add(_mg9.multiply(_mgf)).add(_mgd.multiply(_mgb)).add(_mge.multiply(_mgc)), _mg7;
        };
    },
    33155: function(_mgg, _mgh, _mgi) {
        'use strict';
        var _mgj = null;
        var _mgk = this && this.__importDefault || function(_mgl) {
            var _mgm = null;
            return _mgl && _mgl.__esModule ? _mgl : {
                'default': _mgl
            };
        };
        defineModule(_mgh);
        Object.defineProperty(_mgh, '__esModule', {
            'value': true
        }), _mgh.getSlot121PersonalEffect = void 0;
        var _mgn = _mgi(74496),
            _mgo = _mgk(_mgi(18622));
        _mgh.getSlot121PersonalEffect = function(_mgp) {
            var _mgq = null,
                _mgr = new _mgn.SlotItemEffectModel(),
                _mgs = 0;
            if (54 == _mgp.ctype && (_mgr.tyku += 4, _mgr.kaih += 2, _mgs = 1), 0 == _mgs) return _mgr;
            for (var _mgt = 0, _mgu = 0, _mgv = _mgp.have_slot_ids(); _mgu < _mgv.length; _mgu++) {
                var _mgw = _mgv[_mgu],
                    _mgx = _mgo.default.model.slot.getMst(_mgw),
                    _mgy = _mgx.equipType;
                12 != _mgy && 13 != _mgy || (_mgx.sakuteki >= 5 && _mgp.get_slotnums(parseInt(_mgw)), _mgx.taiku >= 2 && (_mgt += _mgp.get_slotnums(parseInt(_mgw))));
            }
            return _mgt >= 1 && (_mgr.tyku += 2, _mgr.kaih += 2), _mgr;
        };
    },
    9115: function(_mgz, _mh0, _mh1) {
        'use strict';
        var _mh2 = null;
        var _mh3 = this && this.__importDefault || function(_mh4) {
            var _mh5 = null;
            return _mh4 && _mh4.__esModule ? _mh4 : {
                'default': _mh4
            };
        };
        defineModule(_mh0);
        Object.defineProperty(_mh0, '__esModule', {
            'value': true
        }), _mh0.getSlot122PersonalEffect = void 0;
        var _mh6 = _mh1(74496),
            _mh7 = _mh3(_mh1(18622));
        _mh0.getSlot122PersonalEffect = function(_mh8) {
            var _mh9 = null,
                _mha = new _mh6.SlotItemEffectModel(),
                _mhb = 0,
                _mhc = 0,
                _mhd = false;
            656 == _mh8.ship_id && (_mhd = true, _mhb = 1, _mhc = 1);
            var _mhe = 0,
                _mhf = 0,
                _mhg = _mh8.get_each_level_nums(122),
                _mhh = 0;
            if (_mhd) {
                _mhg.forEach(function(_mhi, _mhj) {
                    _mhj >= 4 && (_mhh += _mhi);
                });
                for (var _mhk = 0, _mhl = _mh8.have_slot_ids(); _mhk < _mhl.length; _mhk++) {
                    var _mhm = _mhl[_mhk],
                        _mhn = _mh7.default.model.slot.getMst(_mhm),
                        _mho = _mhn.equipType;
                    12 != _mho && 13 != _mho || (_mhn.sakuteki >= 5 && (_mhe += _mh8.get_slotnums(parseInt(_mhm))), _mhn.taiku >= 2 && (_mhf += _mh8.get_slotnums(parseInt(_mhm))));
                }
            }
            return _mhh > 0 && (1 == _mhc && (_mhe > 0 && (_mha.houg += 4, _mha.kaih += 3), _mhf > 0 && (_mha.tyku += 4, _mha.kaih += 3)), 1 == _mhb && (_mha.houg += 5 * _mhh, _mha.tyku += 3 * _mhh, _mha.kaih += 2 * _mhh)), _mha;
        };
    },
    37173: (_mhp, _mhq, _mhr) => {
        'use strict';
        var _mhs = null;
        defineModule(_mhq);
        Object.defineProperty(_mhq, '__esModule', {
            'value': true
        }), _mhq.getSlot129PersonalEffect = void 0;
        var _mht = _mhr(74496);
        _mhq.getSlot129PersonalEffect = function(_mhu) {
            var _mhv = null,
                _mhw = new _mht.SlotItemEffectModel(),
                _mhx = false,
                _mhy = new _mht.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mhu.ctype) >= 0 ? (_mhy.houg = 1, _mhy.raig = 2, _mhy.kaih = 2, _mhy.tais = 2, _mhy.saku = 1, _mhx = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mhu.ctype) >= 0 ? (_mhy.houg = 1, _mhy.raig = 2, _mhy.kaih = 2, _mhy.saku = 3, _mhx = true) : [7, 13, 29, 8, 9, 31].indexOf(_mhu.ctype) >= 0 && (_mhy.houg = 1, _mhy.kaih = 2, _mhy.saku = 3, _mhx = true), 0 == _mhx) return _mhw;
            var _mhz = _mhu.get_slotnums(129);
            return _mhw = _mhy.multiply(_mhz);
        };
    },
    73254: (_mi0, _mi1, _mi2) => {
        'use strict';
        var _mi3 = null;
        defineModule(_mi1);
        Object.defineProperty(_mi1, '__esModule', {
            'value': true
        }), _mi1.getSlot12PersonalEffect = void 0;
        var _mi4 = _mi2(74496);
        _mi1.getSlot12PersonalEffect = function(_mi5) {
            var _mi6 = null,
                _mi7 = new _mi4.SlotItemEffectModel(),
                _mi8 = false,
                _mi9 = new _mi4.SlotItemEffectModel(),
                _mia = _mi5.get_slotnums(142) + _mi5.get_slotnums(460);
            if (37 == _mi5.ctype && (_mi9.houg += 1, _mi9.kaih += 1, _mi9.houm += 1, _mia >= 1 && (_mi7.kaih += 1, _mi7.houm += 1), _mi8 = true), 0 == _mi8) return _mi7;
            var _mib = _mi5.get_slotnums(12);
            return _mi7.add(_mi9.multiply(_mib)), _mi7;
        };
    },
    93373: (_mic, _mid, _mie) => {
        'use strict';
        var _mif = null;
        defineModule(_mid);
        Object.defineProperty(_mid, '__esModule', {
            'value': true
        }), _mid.getSlot132PersonalEffect = void 0;
        var _mig = _mie(74496);
        _mid.getSlot132PersonalEffect = function(_mih) {
            var _mii = null,
                _mij = new _mig.SlotItemEffectModel(),
                _mik = _mih.get_each_level_nums(132),
                _mil = 0,
                _mim = 0,
                _min = 0,
                _mio = 0,
                _mip = 0;
            return _mik.forEach(function(_miq, _mir) {
                _mir >= 3 && (_mil += _miq), _mir >= 5 && (_mim += _miq), _mir >= 7 && (_min += _miq), _mir >= 8 && (_mio += _miq), _mir >= 9 && (_mip += _miq);
            }), _mil >= 1 && (_mij.kaih += 1), _mim >= 1 && (_mij.tais += 1), _min >= 1 && (_mij.kaih += 1), _mio >= 1 && (_mij.tais += 1), _mip >= 1 && (_mij.houm += 1), _mik[10] >= 1 && (_mij.tais += 1), 911 != _mih.ship_id && 916 != _mih.ship_id && 546 != _mih.ship_id || (_mij.kaih += 1), 461 != _mih.ship_id && 466 != _mih.ship_id && 462 != _mih.ship_id && 467 != _mih.ship_id && 156 != _mih.ship_id || (_mij.kaih += 2), _mij;
        };
    },
    88838: (_mis, _mit, _miu) => {
        'use strict';
        var _miv = null;
        defineModule(_mit);
        Object.defineProperty(_mit, '__esModule', {
            'value': true
        }), _mit.getSlot136PersonalEffect = void 0;
        var _miw = _miu(74496);
        _mit.getSlot136PersonalEffect = function(_mix) {
            var _miy = null,
                _miz = new _miw.SlotItemEffectModel(),
                _mj0 = 0;
            if (58 != _mix.ctype && 61 != _mix.ctype && 64 != _mix.ctype && 68 != _mix.ctype && 80 != _mix.ctype && 92 != _mix.ctype && 113 != _mix.ctype && 124 != _mix.ctype || (_miz.souk += 2, _miz.kaih += 1, _mj0 = 1), 879 == _mix.ship_id && (_miz.souk += 1, _miz.kaih += 1), 0 == _mj0) return _miz;
            var _mj1 = _mix.get_each_level_nums(136),
                _mj2 = 0,
                _mj3 = 0,
                _mj4 = _mj1[10];
            return _mj0 > 0 && _mj1.forEach(function(_mj5, _mj6) {
                _mj6 >= 3 && (_mj2 += _mj5), _mj6 >= 6 && (_mj3 += _mj5);
            }), 1 == _mj0 && (_mj2 >= 1 && (_miz.souk += 1 * _mj2), _mj3 >= 1 && (_miz.souk += 1 * _mj3), _mj4 >= 1 && (_miz.souk += 1 * _mj4)), _miz;
        };
    },
    17274: (_mj7, _mj8, _mj9) => {
        'use strict';
        var _mja = null;
        defineModule(_mj8);
        Object.defineProperty(_mj8, '__esModule', {
            'value': true
        }), _mj8.getSlot139PersonalEffect = void 0;
        var _mjb = _mj9(74496);
        _mj8.getSlot139PersonalEffect = function(_mjc) {
            var _mjd = null,
                _mje = new _mjb.SlotItemEffectModel(),
                _mjf = false,
                _mjg = new _mjb.SlotItemEffectModel();
            if (662 != _mjc.ship_id && 663 != _mjc.ship_id && 668 != _mjc.ship_id || (_mjg.houg += 2, _mjg.tyku += 1, _mjf = true), 0 == _mjf) return _mje;
            var _mjh = _mjc.get_slotnums(139);
            return _mje.add(_mjg.multiply(_mjh)), _mje;
        };
    },
    21713: (_mji, _mjj, _mjk) => {
        'use strict';
        var _mjl = null;
        defineModule(_mjj);
        Object.defineProperty(_mjj, '__esModule', {
            'value': true
        }), _mjj.getSlot143PersonalEffect = void 0;
        var _mjm = _mjk(74496);
        _mjj.getSlot143PersonalEffect = function(_mjn) {
            var _mjo = null,
                _mjp = new _mjm.SlotItemEffectModel();
            return 'あかぎ' == _mjn.yomi ? _mjp.houg = 3 : 'かが' == _mjn.yomi || 'しょうかく' == _mjn.yomi ? _mjp.houg = 2 : ('ずいかく' == _mjn.yomi || 'りゅうじょう' == _mjn.yomi) && (_mjp.houg = 1), _mjp;
        };
    },
    59823: (_mjq, _mjr, _mjs) => {
        'use strict';
        var _mjt = null;
        defineModule(_mjr);
        Object.defineProperty(_mjr, '__esModule', {
            'value': true
        }), _mjr.getSlot144PersonalEffect = void 0;
        var _mju = _mjs(74496);
        _mjr.getSlot144PersonalEffect = function(_mjv) {
            var _mjw = null,
                _mjx = new _mju.SlotItemEffectModel();
            return 'あかぎ' == _mjv.yomi ? _mjx.houg = 3 : 'かが' == _mjv.yomi ? _mjx.houg = 2 : 'しょうかく' == _mjv.yomi ? (_mjx.houg = 2, 461 != _mjv.ship_id && 466 != _mjv.ship_id || (_mjx.houg += 2)) : 'ずいかく' == _mjv.yomi ? (_mjx.houg = 1, 462 != _mjv.ship_id && 467 != _mjv.ship_id || (_mjx.houg += 1)) : 'りゅうじょう' == _mjv.yomi && (_mjx.houg = 1), _mjx;
        };
    },
    57440: (_mjy, _mjz, _mk0) => {
        'use strict';
        var _mk1 = null;
        defineModule(_mjz);
        Object.defineProperty(_mjz, '__esModule', {
            'value': true
        }), _mjz.getSlot149PersonalEffect = void 0;
        var _mk2 = _mk0(74496);
        _mjz.getSlot149PersonalEffect = function(_mk3) {
            var _mk4 = null,
                _mk5 = new _mk2.SlotItemEffectModel(),
                _mk6 = new _mk2.SlotItemEffectModel(),
                _mk7 = false;
            return 488 == _mk3.ship_id || 141 == _mk3.ship_id || 160 == _mk3.ship_id || 622 == _mk3.ship_id || 623 == _mk3.ship_id || 656 == _mk3.ship_id || 961 == _mk3.ship_id ? (_mk6.tais = 1, _mk6.kaih = 3, _mk7 = true) : 624 == _mk3.ship_id ? (_mk6.tais = 3, _mk6.kaih = 5, _mk7 = true) : 662 == _mk3.ship_id && (_mk6.tais = 2, _mk6.kaih = 4, _mk7 = true), 54 == _mk3.ctype && (_mk6.tais = 1, _mk6.kaih = 2, _mk7 = true), 0 == _mk7 ? _mk5 : _mk5 = _mk6.multiply(1);
        };
    },
    29493: (_mk8, _mk9, _mka) => {
        'use strict';
        var _mkb = null;
        defineModule(_mk9);
        Object.defineProperty(_mk9, '__esModule', {
            'value': true
        }), _mk9.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mkc = _mka(74496);
        _mk9.getSlot14inch45CaliberGunPersonalEffect = function(_mkd) {
            var _mke = null,
                _mkf, _mkg, _mkh, _mki = new _mkc.SlotItemEffectModel(),
                _mkj = false,
                _mkk = new _mkc.SlotItemEffectModel(),
                _mkl = {
                    507: 507,
                    508: 507
                },
                _mkm = _mkd.get_slotnums(507),
                _mkn = _mkd.get_slotnums(508),
                _mko = _mkm + _mkn,
                _mkp = _mkd.getCountryName(),
                _mkq = _mkd.getUSSWaterRaderDict();
            if (125 == _mkd.ctype && (_mkk.houg += 1, _mkk.kaih += 1, _mkk.houm += 1, _mkj = true, _mkm >= 1 && _mkn >= 1 && (_mki.houg += 1, _mki.houm += 1)), 'アメリカ' == _mkp && _mkd.stype >= 8 && _mkd.stype <= 10) {
                _mkk.houg += 2, _mkk.kaih += 1, _mkk.houm += 1, _mkj = true;
                for (var _mkr = 0, _mks = 0, _mkt = _mkd.have_slot_ids(); _mks < _mkt.length; _mks++) {
                    var _mku = _mkt[_mks];
                    _mkq[Number(_mku)] && (_mkr += _mkd.get_slotnums(parseInt(_mku)));
                }
                _mkr >= 1 && (_mki.houg += 1, _mki.kaih += 1, _mki.houm += 2), _mkm >= 1 && _mkn >= 1 && (_mki.houg += 1, _mki.houm += 1, _mki.kaih += 2);
            }
            else 6 != _mkd.ctype && 26 != _mkd.ctype && 2 != _mkd.ctype && 'イギリス' != _mkp || (_mki.kaih += 1, _mki.houm += 1, _mkm >= 1 && _mkn >= 1 && (_mki.houg += 1, _mki.houm += 1, _mki.kaih += 1));
            _mkj && _mki.add(_mkk.multiply(_mko));
            for (var _mkv = {}, _mkw = {}, _mkx = {}, _mky = function(_mkz) {
                    var _ml0 = null,
                        _ml1 = Number(_mkz),
                        _ml2 = _mkl[_ml1];
                    _mkv[_ml2] = null !== (_mkf = _mkv[_ml2]) && void 0 !== _mkf ? _mkf : 0, _mkw[_ml2] = null !== (_mkg = _mkw[_ml2]) && void 0 !== _mkg ? _mkg : 0, _mkx[_ml2] = null !== (_mkh = _mkx[_ml2]) && void 0 !== _mkh ? _mkh : 0, _mkd.get_each_level_nums(_ml1).forEach(function(_ml3, _ml4) {
                        _ml4 >= 3 && (_mkv[_ml2] += _ml3), _ml4 >= 6 && (_mkw[_ml2] += _ml3), _ml4 >= 9 && (_mkx[_ml2] += _ml3);
                    });
                }, _ml5 = 0, _ml6 = Object.keys(_mkl); _ml5 < _ml6.length; _ml5++) {
                _mky(_ml6[_ml5]);
            }
            return _mkv[507] >= 1 && (_mki.houg += 1 * _mkv[507]), _mkw[507] >= 1 && (_mki.souk += 1 * _mkw[507]), _mkx[507] >= 1 && (_mki.houm += 1 * _mkx[507]), _mki;
        };
    },
    66985: (_ml7, _ml8, _ml9) => {
        'use strict';
        var _mla = null;
        defineModule(_ml8);
        Object.defineProperty(_ml8, '__esModule', {
            'value': true
        }), _ml8.getSlot15PersonalEffect = void 0;
        var _mlb = _ml9(74496);
        _ml8.getSlot15PersonalEffect = function(_mlc) {
            var _mld = null,
                _mle = new _mlb.SlotItemEffectModel(),
                _mlf = false;
            if ((566 == _mlc.ship_id || 567 == _mlc.ship_id || 568 == _mlc.ship_id || 648 == _mlc.ship_id || 651 == _mlc.ship_id || 656 == _mlc.ship_id || 670 == _mlc.ship_id || 915 == _mlc.ship_id || 951 == _mlc.ship_id || 'たけ' == _mlc.yomi) && (_mlf = true), 0 == _mlf) return _mle;
            var _mlg = _mlc.get_slotnums(15);
            return 30 == _mlc.ctype && (1 == _mlg ? _mle.raig = 2 : _mlg >= 2 && (_mle.raig = 4)), 'たけ' == _mlc.yomi && (_mle.raig += 5, _mle.kaih += 1), _mle;
        };
    },
    79086: (_mlh, _mli, _mlj) => {
        'use strict';
        var _mlk = null;
        defineModule(_mli);
        Object.defineProperty(_mli, '__esModule', {
            'value': true
        }), _mli.getSlot165_216PersonalEffect = void 0;
        var _mll = _mlj(74496);
        _mli.getSlot165_216PersonalEffect = function(_mlm) {
            var _mln = null,
                _mlo = new _mll.SlotItemEffectModel();
            return 501 != _mlm.ship_id && 506 != _mlm.ship_id && 502 != _mlm.ship_id && 507 != _mlm.ship_id || (_mlo.tyku += 2, _mlo.kaih += 2), _mlo;
        };
    },
    88102: (_mlp, _mlq, _mlr) => {
        'use strict';
        var _mls = null;
        defineModule(_mlq);
        Object.defineProperty(_mlq, '__esModule', {
            'value': true
        }), _mlq.getSlot16M1PersonalEffect = void 0;
        var _mlt = _mlr(74496);
        _mlq.getSlot16M1PersonalEffect = function(_mlu) {
            var _mlv = null,
                _mlw = new _mlt.SlotItemEffectModel(),
                _mlx = new _mlt.SlotItemEffectModel();
            67 == _mlu.ctype || 78 == _mlu.ctype || 82 == _mlu.ctype || 88 == _mlu.ctype || 108 == _mlu.ctype || 112 == _mlu.ctype ? (_mlx.houg += 2, _mlx.souk += 1, 67 == _mlu.ctype && (_mlx.kaih -= 2)) : 149 == _mlu.ship_id || 150 == _mlu.ship_id || 151 == _mlu.ship_id || 152 == _mlu.ship_id ? (_mlx.houg += 1, _mlx.souk += 1, _mlx.kaih -= 3) : 591 == _mlu.ship_id || 592 == _mlu.ship_id ? (_mlx.houg += 2, _mlx.souk += 1, _mlx.kaih -= 2) : 593 != _mlu.ship_id && 954 != _mlu.ship_id || (_mlx.houg += 1, _mlx.souk += 1, _mlx.kaih -= 1);
            var _mly = true;
            if (_mlx.exists() || (_mly = false), 0 == _mly) return _mlw;
            var _mlz = _mlu.get_slotnums(298) + _mlu.get_slotnums(299) + _mlu.get_slotnums(300);
            return _mlw = _mlx.multiply(_mlz);
        };
    },
    29240: (_mm0, _mm1, _mm2) => {
        'use strict';
        var _mm3 = null;
        defineModule(_mm1);
        Object.defineProperty(_mm1, '__esModule', {
            'value': true
        }), _mm1.getSlot171PersonalEffect = void 0;
        var _mm4 = _mm2(74496);
        _mm1.getSlot171PersonalEffect = function(_mm5) {
            var _mm6 = null,
                _mm7 = new _mm4.SlotItemEffectModel(),
                _mm8 = 0;
            'アメリカ' == _mm5.getCountryName() && (_mm8 = 1), 65 != _mm5.ctype && 93 != _mm5.ctype && 102 != _mm5.ctype && 107 != _mm5.ctype && 125 != _mm5.ctype || (_mm7.houg += 1, _mm7.saku += 1, _mm8 = 2);
            var _mm9 = _mm5.get_each_level_nums(171),
                _mma = 0,
                _mmb = 0,
                _mmc = 0;
            return _mm8 > 0 && (_mm9.map(function(_mmd, _mme) {
                _mme >= 5 && (_mma += _mmd), _mme >= 3 && (_mmb += _mmd), _mme >= 8 && (_mmc += _mmd);
            }), 1 != _mm8 && 2 != _mm8 || (_mm9[10] > 0 && (_mm7.houg += 1), _mma > 0 && (_mm7.kaih += 1)), 2 == _mm8 && (_mmb > 0 && (_mm7.saku += 1), _mmc > 0 && (_mm7.saku += 1))), _mm7;
        };
    },
    40885: (_mmf, _mmg, _mmh) => {
        'use strict';
        var _mmi = null;
        defineModule(_mmg);
        Object.defineProperty(_mmg, '__esModule', {
            'value': true
        }), _mmg.getSlot174PersonalEffect = void 0;
        var _mmj = _mmh(74496);
        _mmg.getSlot174PersonalEffect = function(_mmk) {
            var _mml = null,
                _mmm = new _mmj.SlotItemEffectModel(),
                _mmn = new _mmj.SlotItemEffectModel();
            if (66 == _mmk.ctype && (_mmn.raig = 1, _mmn.kaih = 2), 591 == _mmk.ship_id || 592 == _mmk.ship_id || 954 == _mmk.ship_id ? (_mmn.raig += 6, _mmn.kaih += 3) : 593 == _mmk.ship_id ? (_mmn.raig += 5, _mmn.kaih += 2) : 488 != _mmk.ship_id && 622 != _mmk.ship_id && 623 != _mmk.ship_id && 624 != _mmk.ship_id || (_mmn.houg += 2, _mmn.raig += 4, _mmn.kaih += 4), !_mmn.exists()) return _mmm;
            var _mmo = _mmk.get_slotnums(174);
            return _mmm = _mmn.multiply(_mmo);
        };
    },
    19614: (_mmp, _mmq, _mmr) => {
        'use strict';
        var _mms = null;
        defineModule(_mmq);
        Object.defineProperty(_mmq, '__esModule', {
            'value': true
        }), _mmq.getSlot179PersonalEffect = void 0;
        var _mmt = _mmr(74496);
        _mmq.getSlot179PersonalEffect = function(_mmu) {
            var _mmv = null,
                _mmw = new _mmt.SlotItemEffectModel(),
                _mmx = new _mmt.SlotItemEffectModel();
            if (54 == _mmu.ctype && (_mmx.raig = 1), !_mmx.exists()) return _mmw;
            var _mmy = _mmu.get_slotnums(179);
            return _mmw = _mmx.multiply(_mmy);
        };
    },
    87220: (_mmz, _mn0, _mn1) => {
        'use strict';
        var _mn2 = null;
        defineModule(_mn0);
        Object.defineProperty(_mn0, '__esModule', {
            'value': true
        }), _mn0.getSlot184PersonalEffect = void 0;
        var _mn3 = _mn1(74496);
        _mn0.getSlot184PersonalEffect = function(_mn4) {
            var _mn5 = null,
                _mn6 = new _mn3.SlotItemEffectModel(),
                _mn7 = new _mn3.SlotItemEffectModel();
            if (68 == _mn4.ctype && (_mn7.houg += 1, _mn7.tyku += 2, _mn7.kaih += 3), !_mn7.exists()) return _mn6;
            var _mn8 = _mn4.get_slotnums(184);
            return _mn6 = _mn7.multiply(_mn8);
        };
    },
    81367: (_mn9, _mna, _mnb) => {
        'use strict';
        var _mnc = null;
        defineModule(_mna);
        Object.defineProperty(_mna, '__esModule', {
            'value': true
        }), _mna.getSlot188PersonalEffect = void 0;
        var _mnd = _mnb(74496);
        _mna.getSlot188PersonalEffect = function(_mne) {
            var _mnf = null,
                _mng = new _mnd.SlotItemEffectModel(),
                _mnh = new _mnd.SlotItemEffectModel();
            if (68 == _mne.ctype && (_mnh.houg += 3, _mnh.tyku += 1, _mnh.kaih += 1), !_mnh.exists()) return _mng;
            var _mni = _mne.get_slotnums(188);
            return _mng = _mnh.multiply(_mni);
        };
    },
    13052: (_mnj, _mnk, _mnl) => {
        'use strict';
        var _mnm = null;
        defineModule(_mnk);
        Object.defineProperty(_mnk, '__esModule', {
            'value': true
        }), _mnk.getSlot189PersonalEffect = void 0;
        var _mnn = _mnl(74496);
        _mnk.getSlot189PersonalEffect = function(_mno) {
            var _mnp = null,
                _mnq = new _mnn.SlotItemEffectModel(),
                _mnr = new _mnn.SlotItemEffectModel();
            if (68 != _mno.ctype && 63 != _mno.ctype || (_mnr.tyku += 1, _mnr.kaih += 2), !_mnr.exists()) return _mnq;
            var _mns = _mno.get_slotnums(189);
            return _mnq = _mnr.multiply(_mns);
        };
    },
    66904: (_mnt, _mnu, _mnv) => {
        'use strict';
        var _mnw = null;
        defineModule(_mnu);
        Object.defineProperty(_mnu, '__esModule', {
            'value': true
        }), _mnu.getSlot18_52_PersonalEffect = void 0;
        var _mnx = _mnv(74496);
        _mnu.getSlot18_52_PersonalEffect = function(_mny) {
            var _mnz = null,
                _mo0 = new _mnx.SlotItemEffectModel(),
                _mo1 = new _mnx.SlotItemEffectModel();
            if (277 == _mny.ship_id || 278 == _mny.ship_id || 156 == _mny.ship_id ? _mo1.houg = 1 : 594 == _mny.ship_id || 698 == _mny.ship_id || 646 == _mny.ship_id ? (_mo1.houg = 1, _mo1.kaih = 1) : 599 != _mny.ship_id && 610 != _mny.ship_id || (_mo1.houg = 2, _mo1.kaih = 1), !_mo1.exists()) return _mo0;
            var _mo2 = _mny.get_slotnums(18) + _mny.get_slotnums(52);
            return _mo0 = _mo1.multiply(_mo2);
        };
    },
    94968: (_mo3, _mo4, _mo5) => {
        'use strict';
        var _mo6 = null;
        defineModule(_mo4);
        Object.defineProperty(_mo4, '__esModule', {
            'value': true
        }), _mo4.getSlot194PersonalEffect = void 0;
        var _mo7 = _mo5(74496);
        _mo4.getSlot194PersonalEffect = function(_mo8) {
            var _mo9 = null,
                _moa = new _mo7.SlotItemEffectModel(),
                _mob = new _mo7.SlotItemEffectModel();
            if (70 == _mo8.ctype ? (_mob.houg += 3, _mob.kaih += 2, _mob.saku += 2) : 72 != _mo8.ctype && 62 != _mo8.ctype || (_mob.kaih += 1, _mob.saku += 2), 392 == _mo8.ship_id && (_mob.houg += 1, _mob.kaih += 2, _mob.saku += 2), !_mob.exists()) return _moa;
            var _moc = _mo8.get_slotnums(194);
            return _moa = _mob.multiply(_moc);
        };
    },
    94781: (_mod, _moe, _mof) => {
        'use strict';
        var _mog = null;
        defineModule(_moe);
        Object.defineProperty(_moe, '__esModule', {
            'value': true
        }), _moe.getSlot195PersonalEffect = void 0;
        var _moh = _mof(74496);
        _moe.getSlot195PersonalEffect = function(_moi) {
            var _moj = null,
                _mok = new _moh.SlotItemEffectModel(),
                _mol = false,
                _mom = new _moh.SlotItemEffectModel();
            if ('アメリカ' == _moi.getCountryName() && (_mom.houg += 1, _mol = true), 0 == _mol) return _mok;
            var _mon = _moi.get_slotnums(195);
            return _mok.add(_mom.multiply(_mon));
        };
    },
    98137: (_moo, _mop, _moq) => {
        'use strict';
        var _mor = null;
        defineModule(_mop);
        Object.defineProperty(_mop, '__esModule', {
            'value': true
        }), _mop.getSlot19PersonalEffect = void 0;
        var _mos = _moq(74496);
        _mop.getSlot19PersonalEffect = function(_mot) {
            var _mou = null,
                _mov = new _mos.SlotItemEffectModel(),
                _mow = new _mos.SlotItemEffectModel();
            if ('ほうしょう' == _mot.yomi && (_mow.houg = 2, _mow.kaih = 2, _mow.tais = 2, _mow.tyku = 2), 75 != _mot.ctype && 76 != _mot.ctype || (_mow.houg = 2, _mow.tais = 3), 7 == _mot.stype && (_mow.tyku += 1, _mow.kaih += 1), 894 != _mot.ship_id && 899 != _mot.ship_id || (_mow.houg += 1, _mow.kaih += 1, _mow.tais += 1, _mow.tyku += 1), !_mow.exists()) return _mov;
            var _mox = _mot.get_slotnums(19);
            return _mov = _mow.multiply(_mox);
        };
    },
    48658: (_moy, _moz, _mp0) => {
        'use strict';
        var _mp1 = null;
        defineModule(_moz);
        Object.defineProperty(_moz, '__esModule', {
            'value': true
        }), _moz.getSlot204PersonalEffect = void 0;
        var _mp2 = _mp0(74496);
        _moz.getSlot204PersonalEffect = function(_mp3) {
            var _mp4 = null,
                _mp5 = new _mp2.SlotItemEffectModel();
            if (591 != _mp3.ship_id && 592 != _mp3.ship_id && 593 != _mp3.ship_id && 954 != _mp3.ship_id) return _mp5;
            _mp5.souk = _mp5.souk + 1, _mp5.raig = _mp5.raig + 1;
            for (var _mp6 = _mp3.get_each_level_nums(204), _mp7 = 0, _mp8 = 0; _mp8 <= 10; _mp8++) _mp8 >= 7 && (_mp7 += _mp6[_mp8]);
            return _mp7 > 0 && (_mp5.souk = _mp5.souk + 1), _mp6[10] > 0 && (_mp5.raig = _mp5.raig + 1), _mp5;
        };
    },
    2306: (_mp9, _mpa, _mpb) => {
        'use strict';
        var _mpc = null;
        defineModule(_mpa);
        Object.defineProperty(_mpa, '__esModule', {
            'value': true
        }), _mpa.getSlot217PersonalEffect = void 0;
        var _mpd = _mpb(74496);
        _mpa.getSlot217PersonalEffect = function(_mpe) {
            var _mpf = null,
                _mpg = new _mpd.SlotItemEffectModel(),
                _mph = false,
                _mpi = new _mpd.SlotItemEffectModel();
            if (501 == _mpe.ship_id || 506 == _mpe.ship_id ? (_mpi.houg += 1, _mpi.kaih += 3, _mpi.tyku += 5, _mph = true) : 502 != _mpe.ship_id && 507 != _mpe.ship_id || (_mpi.houg += 1, _mpi.kaih += 2, _mpi.tyku += 4, _mph = true), 0 == _mph) return _mpg;
            var _mpj = _mpe.get_slotnums(217);
            return _mpg.add(_mpi.multiply(_mpj)), _mpg;
        };
    },
    91302: function(_mpk, _mpl, _mpm) {
        'use strict';
        var _mpn = null;
        var _mpo = this && this.__importDefault || function(_mpp) {
            var _mpq = null;
            return _mpp && _mpp.__esModule ? _mpp : {
                'default': _mpp
            };
        };
        defineModule(_mpl);
        Object.defineProperty(_mpl, '__esModule', {
            'value': true
        }), _mpl.getSlot220PersonalEffect = void 0;
        var _mpr = _mpm(74496),
            _mps = _mpo(_mpm(18622));
        _mpl.getSlot220PersonalEffect = function(_mpt) {
            var _mpu = null,
                _mpv = new _mpr.SlotItemEffectModel(),
                _mpw = false,
                _mpx = new _mpr.SlotItemEffectModel(),
                _mpy = 0,
                _mpz = 0;
            if (662 == _mpt.ship_id || 663 == _mpt.ship_id || 668 == _mpt.ship_id || 501 == _mpt.ship_id || 506 == _mpt.ship_id || 502 == _mpt.ship_id || 507 == _mpt.ship_id ? (_mpx.houg += 1, _mpx.tyku += 3, _mpx.kaih += 2, _mpw = true, _mpy = 1) : 894 != _mpt.ship_id && 899 != _mpt.ship_id || (_mpx.tyku += 2, _mpx.kaih += 2, _mpw = true, _mpy = 1, _mpz = 1), 0 == _mpw) return _mpv;
            var _mq0 = _mpt.get_slotnums(220);
            _mpv.add(_mpx.multiply(_mq0));
            for (var _mq1 = 0, _mq2 = 0, _mq3 = _mpt.have_slot_ids(); _mq2 < _mq3.length; _mq2++) {
                var _mq4 = _mq3[_mq2],
                    _mq5 = _mps.default.model.slot.getMst(_mq4),
                    _mq6 = _mq5.equipType;
                12 != _mq6 && 13 != _mq6 || (_mq5.sakuteki >= 5 && _mpt.get_slotnums(parseInt(_mq4)), _mq5.taiku >= 2 && (_mq1 += _mpt.get_slotnums(parseInt(_mq4))));
            }
            if (_mq1 >= 1 && 1 == _mpy && (_mpv.tyku += 3, _mpv.kaih += 3), 0 == _mpz) return _mpv;
            var _mq7 = _mpt.get_each_level_nums(220)[10];
            return 1 == _mpz && _mq7 > 0 && (_mpv.houg += 1 * _mq7, _mpv.tyku += 1 * _mq7, _mpv.kaih += 1 * _mq7), _mpv;
        };
    },
    20418: (_mq8, _mq9, _mqa) => {
        'use strict';
        var _mqb = null;
        defineModule(_mq9);
        Object.defineProperty(_mq9, '__esModule', {
            'value': true
        }), _mq9.getSlot227PersonalEffect = void 0;
        var _mqc = _mqa(74496);
        _mq9.getSlot227PersonalEffect = function(_mqd) {
            var _mqe = null,
                _mqf = new _mqc.SlotItemEffectModel(),
                _mqg = _mqd.get_each_level_nums(227),
                _mqh = 0;
            _mqg.forEach(function(_mqi, _mqj) {
                _mqj >= 8 && (_mqh += _mqi);
            }), _mqh >= 1 && (_mqf.tais += 1 * _mqh);
            var _mqk = _mqg[10];
            return _mqk >= 1 && (_mqf.tais += 1 * _mqk), _mqf;
        };
    },
    1906: (_mql, _mqm, _mqn) => {
        'use strict';
        var _mqo = null;
        defineModule(_mqm);
        Object.defineProperty(_mqm, '__esModule', {
            'value': true
        }), _mqm.getSlot228PersonalEffect = void 0;
        var _mqp = _mqn(74496);
        _mqm.getSlot228PersonalEffect = function(_mqq) {
            var _mqr = null,
                _mqs = new _mqp.SlotItemEffectModel(),
                _mqt = new _mqp.SlotItemEffectModel();
            if ('ほうしょう' == _mqq.yomi && (_mqt.houg = 3, _mqt.kaih = 4, _mqt.tais = 4, _mqt.tyku = 3), 75 != _mqq.ctype && 76 != _mqq.ctype || (_mqt.houg = 2, _mqt.tais = 5, _mqt.tyku = 1, _mqt.kaih = 1), 7 == _mqq.stype && (_mqt.tais += 2, _mqt.tyku += 1, _mqt.kaih += 1), 894 != _mqq.ship_id && 899 != _mqq.ship_id || (_mqt.houg += 1, _mqt.kaih += 2, _mqt.tais += 2, _mqt.tyku += 1), !_mqt.exists()) return _mqs;
            var _mqu = _mqq.get_slotnums(228);
            return _mqs = _mqt.multiply(_mqu);
        };
    },
    61887: function(_mqv, _mqw, _mqx) {
        'use strict';
        var _mqy = null;
        var _mqz = this && this.__importDefault || function(_mr0) {
            var _mr1 = null;
            return _mr0 && _mr0.__esModule ? _mr0 : {
                'default': _mr0
            };
        };
        defineModule(_mqw);
        Object.defineProperty(_mqw, '__esModule', {
            'value': true
        }), _mqw.getSlot229PersonalEffect = void 0;
        var _mr2 = _mqx(74496),
            _mr3 = _mqz(_mqx(18622));
        _mqw.getSlot229PersonalEffect = function(_mr4) {
            var _mr5 = null;
            for (var _mr6 = new _mr2.SlotItemEffectModel(), _mr7 = 0, _mr8 = 0, _mr9 = _mr4.have_slots_dict[229]; _mr8 < _mr9.length; _mr8++) {
                _mr9[_mr8].level >= 7 && _mr7++;
            }
            var _mra = _mr7,
                _mrb = 0,
                _mrc = 0,
                _mrd = 0,
                _mre = _mr4.get_slotnums(229);
            if (622 == _mr4.ship_id || 623 == _mr4.ship_id || 624 == _mr4.ship_id) _mr6.houg += 1 * _mre, _mr6.tyku += 1 * _mre, _mrb = 2;
            else {
                if (656 == _mr4.ship_id) _mr6.houg += 2 * _mre, _mr6.tyku += 3 * _mre, _mr6.tais += 2 * _mre, _mrb = 3;
                else {
                    if (0 == _mr7) return _mr6;
                }
            }
            if (488 == _mr4.ship_id ? (_mr6.tyku += 3 * _mra, _mrb = 1) : 220 == _mr4.ship_id ? _mr6.tyku += 2 * _mra : 23 == _mr4.ship_id ? _mr6.tyku += 1 * _mra : 160 == _mr4.ship_id ? (_mr6.tyku += 2 * _mra, _mrb = 1) : 224 == _mr4.ship_id ? _mr6.tyku += 1 * _mra : 487 == _mr4.ship_id ? (_mr6.tyku += 2 * _mra, _mrb = 1) : 289 == _mr4.ship_id && (_mr6.tyku += 1 * _mra), (66 == _mr4.ctype || 28 == _mr4.ctype) && (_mr6.houg += 1 * _mra, _mr6.tyku += 1 * _mra, _mrc = 1), 1 == _mr4.stype && (_mr6.houg += 1 * _mra, _mr6.tyku += 1 * _mra, _mrd = 1), ('ゆら' == _mr4.yomi || 'なか' == _mr4.yomi || 'きぬ' == _mr4.yomi) && (_mr6.houg += 2 * _mra), 0 == _mrb + _mrc + _mrd) return _mr6;
            for (var _mrf = 0, _mrg = 0, _mrh = 0, _mri = _mr4.have_slot_ids(); _mrh < _mri.length; _mrh++) {
                var _mrj = _mri[_mrh],
                    _mrk = _mr3.default.model.slot.getMst(_mrj),
                    _mrl = _mrk.equipType;
                12 != _mrl && 13 != _mrl || (_mrk.sakuteki >= 5 && (_mrf += _mr4.get_slotnums(parseInt(_mrj))), _mrk.taiku >= 2 && (_mrg += _mr4.get_slotnums(parseInt(_mrj))));
            }
            return 1 == _mrb ? _mrf > 0 && (_mr6.houg += 3, _mr6.kaih += 2) : 2 == _mrb ? (_mrf > 0 && (_mr6.houg += 1, _mr6.kaih += 1), _mrg > 0 && (_mr6.tyku += 2, _mr6.kaih += 2)) : 3 == _mrb && (_mrf > 0 && (_mr6.houg += 2, _mr6.kaih += 2), _mrg > 0 && (_mr6.tyku += 3, _mr6.kaih += 2)), 1 == _mrc && _mrf > 0 && (_mr6.houg += 2, _mr6.kaih += 3), 1 == _mrd && _mrf > 0 && (_mr6.houg += 1, _mr6.kaih += 4), _mr6;
        };
    },
    55734: (_mrm, _mrn, _mro) => {
        'use strict';
        var _mrp = null;
        defineModule(_mrn);
        Object.defineProperty(_mrn, '__esModule', {
            'value': true
        }), _mrn.getSlot234PersonalEffect = void 0;
        var _mrq = _mro(74496);
        _mrn.getSlot234PersonalEffect = function(_mrr) {
            var _mrs = null,
                _mrt = new _mrq.SlotItemEffectModel(),
                _mru = false,
                _mrv = new _mrq.SlotItemEffectModel(),
                _mrw = _mrr.get_slotnums(142) + _mrr.get_slotnums(460);
            if (37 == _mrr.ctype && (_mrv.houg += 1, _mrv.tyku += 1, _mrv.kaih += 1, _mrv.houm += 1, _mrw >= 1 && (_mrt.tyku += 1, _mrt.kaih += 1, _mrt.houm += 1), _mru = true), 0 == _mru) return _mrt;
            var _mrx = _mrr.get_slotnums(234);
            return _mrt.add(_mrv.multiply(_mrx)), _mrt;
        };
    },
    17562: function(_mry, _mrz, _ms0) {
        'use strict';
        var _ms1 = null;
        var _ms2 = this && this.__importDefault || function(_ms3) {
            var _ms4 = null;
            return _ms3 && _ms3.__esModule ? _ms3 : {
                'default': _ms3
            };
        };
        defineModule(_mrz);
        Object.defineProperty(_mrz, '__esModule', {
            'value': true
        }), _mrz.getSlot235PersonalEffect = void 0;
        var _ms5 = _ms0(74496),
            _ms6 = _ms2(_ms0(18622));
        _mrz.getSlot235PersonalEffect = function(_ms7) {
            var _ms8 = null,
                _ms9 = new _ms5.SlotItemEffectModel(),
                _msa = false,
                _msb = new _ms5.SlotItemEffectModel(),
                _msc = 0;
            if (52 != _ms7.ctype && 9 != _ms7.ctype || (_msb.houg += 2, _msb.tyku += 1, _msa = true), 321 == _ms7.ship_id && (_msb.houg += 1, _msb.kaih += 1, _msc = 1), 0 == _msa) return _ms9;
            var _msd = _ms7.get_slotnums(235);
            if (_ms9.add(_msb.multiply(_msd)), 0 == _msc) return _ms9;
            for (var _mse = 0, _msf = 0, _msg = 0, _msh = _ms7.have_slot_ids(); _msg < _msh.length; _msg++) {
                var _msi = _msh[_msg],
                    _msj = _ms6.default.model.slot.getMst(_msi),
                    _msk = _msj.equipType;
                12 != _msk && 13 != _msk || (_msj.sakuteki >= 5 && (_mse += _ms7.get_slotnums(parseInt(_msi))), _msj.taiku >= 2 && (_msf += _ms7.get_slotnums(parseInt(_msi))));
            }
            return _mse >= 1 && 1 == _msc && (_ms9.houg += 3, _ms9.kaih += 2), _msf >= 1 && 1 == _msc && (_ms9.tyku += 3, _ms9.kaih += 3), _ms9;
        };
    },
    47970: (_msl, _msm, _msn) => {
        'use strict';
        var _mso = null;
        defineModule(_msm);
        Object.defineProperty(_msm, '__esModule', {
            'value': true
        }), _msm.getSlot237PersonalEffect = void 0;
        var _msp = _msn(74496);
        _msm.getSlot237PersonalEffect = function(_msq) {
            var _msr = null,
                _mss = new _msp.SlotItemEffectModel(),
                _mst = new _msp.SlotItemEffectModel();
            if (553 == _msq.ship_id) _mst.houg = 4, _mst.kaih = 2;
            else {
                if (82 == _msq.ship_id) _mst.houg = 3, _mst.kaih = 1;
                else {
                    if (88 == _msq.ship_id) _mst.houg = 3, _mst.kaih = 1;
                    else {
                        if (554 == _msq.ship_id) _mst.houg = 4, _mst.kaih = 2;
                        else {
                            if (411 == _msq.ship_id) _mst.houg = 2;
                            else {
                                if (412 != _msq.ship_id) return _mss;
                                _mst.houg = 2;
                            }
                        }
                    }
                }
            }
            var _msu = _msq.get_slotnums(237);
            return _mss = _mst.multiply(_msu);
        };
    },
    14386: (_msv, _msw, _msx) => {
        'use strict';
        var _msy = null;
        defineModule(_msw);
        Object.defineProperty(_msw, '__esModule', {
            'value': true
        }), _msw.getSlot238_239PersonalEffect = void 0;
        var _msz = _msx(74496);
        _msw.getSlot238_239PersonalEffect = function(_mt0) {
            var _mt1 = null,
                _mt2 = new _msz.SlotItemEffectModel();
            return 501 != _mt0.ship_id && 506 != _mt0.ship_id && 502 != _mt0.ship_id && 507 != _mt0.ship_id || (_mt2.kaih += 1, _mt2.raig += 1), _mt2;
        };
    },
    82229: (_mt3, _mt4, _mt5) => {
        'use strict';
        var _mt6 = null;
        defineModule(_mt4);
        Object.defineProperty(_mt4, '__esModule', {
            'value': true
        }), _mt4.getSlot242PersonalEffect = void 0;
        var _mt7 = _mt5(74496);
        _mt4.getSlot242PersonalEffect = function(_mt8) {
            var _mt9 = null,
                _mta = new _mt7.SlotItemEffectModel(),
                _mtb = false,
                _mtc = new _mt7.SlotItemEffectModel();
            if (78 == _mt8.ctype && (_mtc.houg += 2, _mtc.kaih += 1, _mtb = true), 'ほうしょう' == _mt8.yomi && (_mtc.houg += 1, _mtb = true), 0 == _mtb) return _mta;
            var _mtd = _mt8.get_slotnums(242);
            return _mta.add(_mtc.multiply(_mtd)), _mta;
        };
    },
    10325: (_mte, _mtf, _mtg) => {
        'use strict';
        var _mth = null;
        defineModule(_mtf);
        Object.defineProperty(_mtf, '__esModule', {
            'value': true
        }), _mtf.getSlot243PersonalEffect = void 0;
        var _mti = _mtg(74496);
        _mtf.getSlot243PersonalEffect = function(_mtj) {
            var _mtk = null,
                _mtl = new _mti.SlotItemEffectModel(),
                _mtm = false,
                _mtn = new _mti.SlotItemEffectModel();
            if (78 == _mtj.ctype && (_mtn.houg += 3, _mtn.kaih += 1, _mtm = true), 'ほうしょう' == _mtj.yomi && (_mtn.houg += 2, _mtm = true), 0 == _mtm) return _mtl;
            var _mto = _mtj.get_slotnums(243);
            return _mtl.add(_mtn.multiply(_mto)), _mtl;
        };
    },
    351: (_mtp, _mtq, _mtr) => {
        'use strict';
        var _mts = null;
        defineModule(_mtq);
        Object.defineProperty(_mtq, '__esModule', {
            'value': true
        }), _mtq.getSlot244PersonalEffect = void 0;
        var _mtt = _mtr(74496);
        _mtq.getSlot244PersonalEffect = function(_mtu) {
            var _mtv = null,
                _mtw = new _mtt.SlotItemEffectModel(),
                _mtx = false,
                _mty = new _mtt.SlotItemEffectModel();
            if (78 == _mtu.ctype && (_mty.houg += 4, _mty.kaih += 2, _mtx = true), 'ほうしょう' == _mtu.yomi && (_mty.houg += 3, _mtx = true), 0 == _mtx) return _mtw;
            var _mtz = _mtu.get_slotnums(244);
            return _mtw.add(_mty.multiply(_mtz)), _mtw;
        };
    },
    61977: (_mu0, _mu1, _mu2) => {
        'use strict';
        var _mu3 = null;
        defineModule(_mu1);
        Object.defineProperty(_mu1, '__esModule', {
            'value': true
        }), _mu1.getSlot247PersonalEffect = void 0;
        var _mu4 = _mu2(74496);
        _mu1.getSlot247PersonalEffect = function(_mu5) {
            var _mu6 = null,
                _mu7 = new _mu4.SlotItemEffectModel(),
                _mu8 = false,
                _mu9 = new _mu4.SlotItemEffectModel(),
                _mua = 0;
            if ('フランス' == _mu5.getCountryName() && (_mu9.houg += 2, _mu9.houm += 2, _mu8 = true, _mua = 1), 0 == _mu8) return _mu7;
            var _mub = _mu5.get_slotnums(247);
            if (_mu7.add(_mu9.multiply(_mub)), 0 == _mua) return _mu7;
            var _muc = _mu5.get_each_level_nums(247),
                _mud = 0,
                _mue = 0;
            _mua > 0 && _muc.forEach(function(_muf, _mug) {
                _mug >= 4 && (_mud += _muf), _mug >= 8 && (_mue += _muf);
            });
            var _muh = _muc[10];
            return 1 == _mua && (_mud >= 1 && (_mu7.houg += 1 * _mud, _mu7.houm += 1 * _mud), _mue >= 1 && (_mu7.kaih += 1 * _mue, _mu7.houg += 1 * _mue, _mu7.houm += 1 * _mue), _muh >= 1 && (_mu7.kaih += 1 * _muh, _mu7.houm += 1 * _muh)), _mu7;
        };
    },
    31797: function(_mui, _muj, _muk) {
        'use strict';
        var _mul = null;
        var _mum = this && this.__importDefault || function(_mun) {
            var _muo = null;
            return _mun && _mun.__esModule ? _mun : {
                'default': _mun
            };
        };
        defineModule(_muj);
        Object.defineProperty(_muj, '__esModule', {
            'value': true
        }), _muj.getSlot266PersonalEffect2 = _muj.getSlot266PersonalEffect = void 0;
        var _mup = _muk(74496),
            _muq = _mum(_muk(18622));
        _muj.getSlot266PersonalEffect = function(_mur) {
            var _mus = null,
                _mut = new _mup.SlotItemEffectModel(),
                _muu = false;
            if (566 != _mur.ship_id && 567 != _mur.ship_id && 568 != _mur.ship_id && 656 != _mur.ship_id && 670 != _mur.ship_id && 915 != _mur.ship_id && 951 != _mur.ship_id || (_muu = true), 0 == _muu) return _mut;
            var _muv = _mur.get_slotnums(266);
            return 30 == _mur.ctype && (1 == _muv ? _mut.houg = 1 : _muv >= 2 && (_mut.houg = 3)), _mut;
        }, _muj.getSlot266PersonalEffect2 = function(_muw) {
            var _mux = null,
                _muy = new _mup.SlotItemEffectModel(),
                _muz = 0,
                _mv0 = new _mup.SlotItemEffectModel();
            if (23 == _muw.ctype || 18 == _muw.ctype ? (_mv0.houg = 1, _muz = 1) : 30 == _muw.ctype && (_mv0.houg = 1, _muz = 2), ('しぐれ' == _muw.yomi || 'ゆきかぜ' == _muw.yomi || 'いそかぜ' == _muw.yomi) && (_mv0.kaih = 1), 961 == _muw.ship_id && (_mv0.houg += 1, _mv0.houm += 1, _mv0.kaih += 1), !_mv0.exists()) return _muy;
            var _mv1 = _muw.get_slotnums(266);
            if (_muy = _mv0.multiply(_mv1), 0 == _muz) return _muy;
            for (var _mv2 = 0, _mv3 = 0, _mv4 = _muw.have_slot_ids(); _mv3 < _mv4.length; _mv3++) {
                var _mv5 = _mv4[_mv3],
                    _mv6 = _muq.default.model.slot.getMst(_mv5),
                    _mv7 = _mv6.equipType;
                (12 == _mv7 || 13 == _mv7) && _mv6.sakuteki >= 5 && (_mv2 += _muw.get_slotnums(parseInt(_mv5)));
            }
            return _mv2 > 0 && (1 == _muz ? (_muy.houg += 1, _muy.kaih += 1, _muy.raig += 3) : 2 == _muz && (_muy.houg += 2, _muy.kaih += 1, _muy.raig += 3)), _muy;
        };
    },
    45738: function(_mv8, _mv9, _mva) {
        'use strict';
        var _mvb = null;
        var _mvc = this && this.__importDefault || function(_mvd) {
            var _mve = null;
            return _mvd && _mvd.__esModule ? _mvd : {
                'default': _mvd
            };
        };
        defineModule(_mv9);
        Object.defineProperty(_mv9, '__esModule', {
            'value': true
        }), _mv9.getSlot267PersonalEffect2 = _mv9.getSlot267PersonalEffect = void 0;
        var _mvf = _mva(74496),
            _mvg = _mvc(_mva(18622));
        _mv9.getSlot267PersonalEffect = function(_mvh) {
            var _mvi = null,
                _mvj = new _mvf.SlotItemEffectModel(),
                _mvk = 0,
                _mvl = 0;
            if (38 == _mvh.ctype || 22 == _mvh.ctype) _mvk = 2, _mvl = 1;
            else {
                if (30 != _mvh.ctype) return _mvj;
                _mvk = 1, _mvl = 1;
            }
            var _mvm = _mvh.get_slotnums(267) + _mvh.get_slotnums(366);
            return _mvj.houg = _mvk * _mvm, _mvj.kaih = _mvl * _mvm, _mvj;
        }, _mv9.getSlot267PersonalEffect2 = function(_mvn) {
            var _mvo = null,
                _mvp = new _mvf.SlotItemEffectModel(),
                _mvq = _mvn.get_slotnums(267),
                _mvr = _mvn.get_slotnums(366),
                _mvs = _mvq + _mvr;
            if (566 != _mvn.ship_id && 567 != _mvn.ship_id && 568 != _mvn.ship_id && 656 != _mvn.ship_id && 670 != _mvn.ship_id && 915 != _mvn.ship_id && 951 != _mvn.ship_id || (_mvq > 0 && (_mvp.houg += 1), 1 == _mvr ? (_mvp.houg += 1, _mvp.tyku += 2) : _mvr >= 2 && (_mvp.houg += 2, _mvp.tyku += 4)), 38 != _mvn.ctype && 229 != _mvn.ship_id && [648, 961].indexOf(_mvn.ship_id) < 0) return _mvp;
            var _mvt = false,
                _mvu = false,
                _mvv = false,
                _mvw = false,
                _mvx = false,
                _mvy = false,
                _mvz = false,
                _mw0 = false,
                _mw1 = false,
                _mw2 = false,
                _mw3 = false,
                _mw4 = 0,
                _mw5 = 0,
                _mw6 = 0;
            543 == _mvn.ship_id ? (_mvp.houg = 1 * _mvs, _mvu = true) : 229 == _mvn.ship_id ? _mvv = true : 542 == _mvn.ship_id ? (_mvp.houg = 1 * _mvs, _mvw = true) : 563 == _mvn.ship_id ? (_mvp.houg = 1 * _mvs, _mvx = true) : 564 == _mvn.ship_id ? (_mvp.houg = 1 * _mvs, _mvy = true) : 578 == _mvn.ship_id ? (_mvp.houg = 1 * _mvs, _mvz = true) : 569 == _mvn.ship_id ? (_mvp.houg = 1 * _mvs, _mw0 = true) : 649 == _mvn.ship_id ? (_mvp.houg = 2 * _mvs, _mw2 = true) : 955 == _mvn.ship_id || 960 == _mvn.ship_id ? (_mvp.houg = 2 * _mvs, _mw3 = true) : 648 == _mvn.ship_id ? (_mvp.houg = 2 * _mvs, _mw1 = true, _mw4 = 1, _mw5 = 1, _mw6 = 1) : 961 == _mvn.ship_id && (_mvp.houg = 2 * _mvs, _mvt = true, _mw4 = 1, _mw5 = 1, _mw6 = 1);
            for (var _mw7 = 0, _mw8 = 0, _mw9 = 0, _mwa = _mvn.have_slot_ids(); _mw9 < _mwa.length; _mw9++) {
                var _mwb = _mwa[_mw9],
                    _mwc = _mvg.default.model.slot.getMst(_mwb),
                    _mwd = _mwc.equipType;
                12 != _mwd && 13 != _mwd || (_mwc.sakuteki >= 5 && (_mw7 += _mvn.get_slotnums(parseInt(_mwb))), _mwc.taiku >= 2 && (_mw8 += _mvn.get_slotnums(parseInt(_mwb))));
            }
            if (_mw7 > 0 && _mvq > 0 && ((38 == _mvn.ctype || _mw1) && (_mvp.houg += 2, _mvp.raig += 3, _mvp.kaih += 1, 955 == _mvn.ship_id ? _mvp.raig -= 1 : 960 == _mvn.ship_id && (_mvp.raig -= 2)), (_mvw || _mvu || _mvv || _mvx || _mvy || _mvz || _mw0 || _mw1 || _mw2 || _mw3) && (_mvp.houg += 1, _mvp.raig += 3, _mvp.kaih += 2)), _mvr > 0 && (_mvw || _mvu || _mvx || _mvy || _mvz || _mvv || _mw0 || _mw1 || _mw2 || _mvt || _mw3)) {
                1 == _mvr ? (_mvp.tyku += 3, _mvp.houg += 1, _mvp.houm += 1) : _mvr >= 2 && (_mvp.tyku += 5, _mvp.houg += 3, _mvp.houm += 1, 955 == _mvn.ship_id && (_mvp.houg += 1)), (_mw0 || _mw1) && (_mvp.houg += 1, _mvp.tyku += 2), _mw7 > 0 && (_mvp.houg += 2, _mvp.kaih += 2, _mvp.raig += 4, _mvp.houm += 2, 960 == _mvn.ship_id && (_mvp.raig -= 1, _mvp.houg += 1)), _mw8 > 0 && (_mvp.houg += 1, _mvp.kaih += 3, _mvp.tyku += 5, _mvp.houm += 1);
                var _mwe = _mvn.get_each_level_nums(366),
                    _mwf = 0,
                    _mwg = 0;
                _mwe.forEach(function(_mwh, _mwi) {
                    _mwi >= 5 && (_mwf += _mwh), _mwi >= 8 && (_mwg += _mwh);
                }), _mwf >= 1 && (_mvp.houm += 1 * _mwf), _mwg >= 1 && (_mvp.houg += 1 * _mwg);
                var _mwj = _mwe[10];
                _mwj >= 1 && (_mvp.houm += 1 * _mwj);
            }
            var _mwk = _mvn.get_slotnums(129),
                _mwl = _mvn.get_slotnums(74),
                _mwm = _mvn.get_slotnums(412);
            return _mw4 > 0 && _mwk > 0 && 1 == _mw4 && (_mvp.houg += 2, _mvp.kaih += 3, _mvp.tyku += 2), _mw6 > 0 && _mwm > 0 && 1 == _mw6 && (_mvp.houg += 2, _mvp.kaih += 3, _mvp.tyku += 2), _mw5 > 0 && _mwl > 0 && 1 == _mw5 && (_mvp.houg += 3, _mvp.kaih -= 3), _mvp;
        };
    },
    23934: (_mwn, _mwo, _mwp) => {
        'use strict';
        var _mwq = null;
        defineModule(_mwo);
        Object.defineProperty(_mwo, '__esModule', {
            'value': true
        }), _mwo.getSlot271PersonalEffect = void 0;
        var _mwr = _mwp(74496);
        _mwo.getSlot271PersonalEffect = function(_mws) {
            var _mwt = null,
                _mwu = new _mwr.SlotItemEffectModel(),
                _mwv = 0;
            if (508 != _mws.ship_id && 509 != _mws.ship_id && 888 != _mws.ship_id && 883 != _mws.ship_id || (_mwv = 1), 0 == _mwv) return _mwu;
            var _mww = _mws.get_each_level_nums(271),
                _mwx = 0,
                _mwy = 0,
                _mwz = 0,
                _mx0 = _mww[10];
            return _mwv > 0 && _mww.forEach(function(_mx1, _mx2) {
                _mx2 >= 4 && (_mwx += _mx1), _mx2 >= 6 && (_mwy += _mx1), _mx2 >= 8 && (_mwz += _mx1);
            }), 1 == _mwv && (_mwx >= 1 && (_mwu.houg += 1 * _mwx), _mwy >= 1 && (_mwu.tyku += 2 * _mwy), _mwz >= 1 && (_mwu.kaih += 2 * _mwz), _mx0 >= 1 && (_mwu.houg += 1 * _mx0)), _mwu;
        };
    },
    17712: function(_mx3, _mx4, _mx5) {
        'use strict';
        var _mx6 = null;
        var _mx7 = this && this.__importDefault || function(_mx8) {
            var _mx9 = null;
            return _mx8 && _mx8.__esModule ? _mx8 : {
                'default': _mx8
            };
        };
        defineModule(_mx4);
        Object.defineProperty(_mx4, '__esModule', {
            'value': true
        }), _mx4.getSlot275PersonalEffect = void 0;
        var _mxa = _mx5(74496),
            _mxb = _mx7(_mx5(18622));
        _mx4.getSlot275PersonalEffect = function(_mxc) {
            var _mxd = null,
                _mxe = new _mxa.SlotItemEffectModel(),
                _mxf = false,
                _mxg = new _mxa.SlotItemEffectModel(),
                _mxh = 0,
                _mxi = 0;
            if (894 != _mxc.ship_id && 899 != _mxc.ship_id || (_mxg.houg += 1, _mxg.tyku += 3, _mxg.kaih += 2, _mxf = true, _mxi = 1, _mxh = 1), 0 == _mxf) return _mxe;
            var _mxj = _mxc.get_slotnums(275);
            _mxe.add(_mxg.multiply(_mxj));
            var _mxk = 0;
            if (_mxh > 0)
                for (var _mxl = 0, _mxm = _mxc.have_slot_ids(); _mxl < _mxm.length; _mxl++) {
                    var _mxn = _mxm[_mxl],
                        _mxo = _mxb.default.model.slot.getMst(_mxn),
                        _mxp = _mxo.equipType;
                    12 != _mxp && 13 != _mxp || (_mxo.sakuteki >= 5 && _mxc.get_slotnums(parseInt(_mxn)), _mxo.taiku >= 2 && (_mxk += _mxc.get_slotnums(parseInt(_mxn))));
                }
            if (1 == _mxh && _mxk > 0 && (_mxe.tyku += 3, _mxe.kaih += 3), 0 == _mxi) return _mxe;
            var _mxq = _mxc.get_each_level_nums(275),
                _mxr = 0,
                _mxs = _mxq[10];
            return _mxi > 0 && _mxq.forEach(function(_mxt, _mxu) {
                _mxu >= 7 && (_mxr += _mxt);
            }), 1 == _mxi && (_mxr > 0 && (_mxe.tyku += 1 * _mxr, _mxe.kaih += 1 * _mxr), _mxs > 0 && (_mxe.houg += 1 * _mxs, _mxe.tyku += 1 * _mxs, _mxe.houm += 1 * _mxs)), _mxe;
        };
    },
    93733: (_mxv, _mxw, _mxx) => {
        'use strict';
        var _mxy = null;
        defineModule(_mxw);
        Object.defineProperty(_mxw, '__esModule', {
            'value': true
        }), _mxw.getSlot277PersonalEffect = void 0;
        var _mxz = _mxx(74496);
        _mxw.getSlot277PersonalEffect = function(_my0) {
            var _my1 = null,
                _my2 = new _mxz.SlotItemEffectModel(),
                _my3 = false,
                _my4 = new _mxz.SlotItemEffectModel();
            if ('アメリカ' != _my0.getCountryName() && 67 != _my0.ctype && 78 != _my0.ctype && 82 != _my0.ctype && 88 != _my0.ctype && 108 != _my0.ctype && 112 != _my0.ctype || (_my4.houg += 1, _my4.kaih += 1, _my3 = true), 83 == _my0.ctype && (_my4.houg += 1, _my4.kaih += 1, _my4.tyku += 1, _my3 = true), 0 == _my3) return _my2;
            var _my5 = _my0.get_slotnums(277);
            return _my2.add(_my4.multiply(_my5)), _my2;
        };
    },
    34718: (_my6, _my7, _my8) => {
        'use strict';
        var _my9 = null;
        defineModule(_my7);
        Object.defineProperty(_my7, '__esModule', {
            'value': true
        }), _my7.getSlot278PersonalEffect = void 0;
        var _mya = _my8(74496);
        _my7.getSlot278PersonalEffect = function(_myb) {
            var _myc = null,
                _myd = new _mya.SlotItemEffectModel();
            return 'アメリカ' == _myb.getCountryName() ? (_myd.tyku += 1, _myd.kaih += 3, _myd.saku += 1) : 67 == _myb.ctype || 78 == _myb.ctype || 82 == _myb.ctype || 88 == _myb.ctype || 108 == _myb.ctype || 112 == _myb.ctype ? (_myd.tyku += 1, _myd.kaih += 2) : 96 == _myb.ctype && (_myd.tyku += 1, _myd.kaih += 1), _myd;
        };
    },
    69245: (_mye, _myf, _myg) => {
        'use strict';
        var _myh = null;
        defineModule(_myf);
        Object.defineProperty(_myf, '__esModule', {
            'value': true
        }), _myf.getSlot279PersonalEffect = void 0;
        var _myi = _myg(74496);
        _myf.getSlot279PersonalEffect = function(_myj) {
            var _myk = null,
                _myl = new _myi.SlotItemEffectModel();
            return 'アメリカ' == _myj.getCountryName() ? (_myl.houg += 2, _myl.tyku += 2, _myl.kaih += 3, _myl.saku += 2) : 67 == _myj.ctype || 78 == _myj.ctype || 82 == _myj.ctype || 88 == _myj.ctype || 108 == _myj.ctype || 112 == _myj.ctype ? (_myl.houg += 1, _myl.tyku += 1, _myl.kaih += 2, _myl.saku += 1) : 96 == _myj.ctype && (_myl.houg += 1, _myl.tyku += 1, _myl.kaih += 1), _myl;
        };
    },
    18478: (_mym, _myn, _myo) => {
        'use strict';
        var _myp = null;
        defineModule(_myn);
        Object.defineProperty(_myn, '__esModule', {
            'value': true
        }), _myn.getSlot282PersonalEffect = void 0;
        var _myq = _myo(74496);
        _myn.getSlot282PersonalEffect = function(_myr) {
            var _mys = null,
                _myt = new _myq.SlotItemEffectModel(),
                _myu = false,
                _myv = false;
            147 != _myr.ship_id && 73 != _myr.ctype && 81 != _myr.ctype || (_myu = true), 'ゆうばり' == _myr.yomi && (_myv = true);
            var _myw = new _myq.SlotItemEffectModel();
            if ((_myu || _myv) && (_myw.houg += 2, _myw.souk += 1), !_myw.exists()) return _myt;
            var _myx = _myr.get_slotnums(282);
            return _myt = _myw.multiply(_myx);
        };
    },
    2899: (_myy, _myz, _mz0) => {
        'use strict';
        var _mz1 = null;
        defineModule(_myz);
        Object.defineProperty(_myz, '__esModule', {
            'value': true
        }), _myz.getSlot283PersonalEffect = void 0;
        var _mz2 = _mz0(74496);
        _myz.getSlot283PersonalEffect = function(_mz3) {
            var _mz4 = null,
                _mz5 = new _mz2.SlotItemEffectModel(),
                _mz6 = false;
            147 != _mz3.ship_id && 73 != _mz3.ctype && 81 != _mz3.ctype || (_mz6 = true);
            var _mz7 = new _mz2.SlotItemEffectModel();
            if (_mz6 && (_mz7.raig += 3, _mz7.houg += 1, _mz7.souk += 1), !_mz7.exists()) return _mz5;
            var _mz8 = _mz3.get_slotnums(283);
            return _mz5 = _mz7.multiply(_mz8);
        };
    },
    57120: (_mz9, _mza, _mzb) => {
        'use strict';
        var _mzc = null;
        defineModule(_mza);
        Object.defineProperty(_mza, '__esModule', {
            'value': true
        }), _mza.getSlot285PersonalEffect = void 0;
        var _mzd = _mzb(74496);
        _mza.getSlot285PersonalEffect = function(_mze) {
            var _mzf = null,
                _mzg = new _mzd.SlotItemEffectModel(),
                _mzh = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_mze.ship_id) >= 0 && (_mzh = true), 0 == _mzh) return _mzg;
            var _mzi = _mze.get_each_level_nums(285),
                _mzj = _mze.get_slotnums(285);
            _mzj > 2 && (_mzj = 2), _mzg.raig = 2 * _mzj, _mzg.kaih = 1 * _mzj;
            var _mzk = _mzi[10];
            1 == _mzk && (_mzg.houg += 1, _mzg.raig += 1), _mzk >= 2 && (_mzg.houg += 2, _mzg.raig += 1), _mzk >= 3 && (_mzg.raig += 3);
            var _mzl = _mze.get_slotnums(285);
            return 903 == _mze.ship_id ? (_mzl >= 2 && (_mzg.raig += 2), _mzl >= 3 && (_mzg.raig += 2)) : 908 != _mze.ship_id && 959 != _mze.ship_id || (_mzl >= 2 && (_mzg.raig += 1), _mzl >= 3 && (_mzg.raig += 1)), _mzg;
        };
    },
    74985: function(_mzm, _mzn, _mzo) {
        'use strict';
        var _mzp = null;
        var _mzq = this && this.__importDefault || function(_mzr) {
            var _mzs = null;
            return _mzr && _mzr.__esModule ? _mzr : {
                'default': _mzr
            };
        };
        defineModule(_mzn);
        Object.defineProperty(_mzn, '__esModule', {
            'value': true
        }), _mzn.getSlot286PersonalEffect3 = _mzn.getSlot286PersonalEffect2 = _mzn.getSlot286PersonalEffect = void 0;
        var _mzt = _mzo(74496),
            _mzu = _mzq(_mzo(18622));
        _mzn.getSlot286PersonalEffect = function(_mzv) {
            var _mzw = null,
                _mzx = new _mzt.SlotItemEffectModel(),
                _mzy = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960].indexOf(_mzv.ship_id) >= 0 && (_mzy = true), 0 == _mzy) return _mzx;
            var _mzz = _mzv.get_each_level_nums(286),
                _n00 = _mzv.get_slotnums(286);
            _n00 > 2 && (_n00 = 2), _mzx.raig = 2 * _n00, _mzx.kaih = 1 * _n00;
            var _n01 = _mzz[10];
            if (1 == _n01 ? _mzx.houg = _mzx.houg + 1 : _n01 >= 2 && (_mzx.houg = _mzx.houg + 2), 30 == _mzv.ctype || 961 == _mzv.ship_id) {
                var _n02 = _mzz[5] + _mzz[6] + _mzz[7] + _mzz[8] + _mzz[9] + _mzz[10];
                1 == _n02 ? _mzx.raig = _mzx.raig + 1 : _n02 >= 2 && (_mzx.raig = _mzx.raig + 2);
            }
            return _mzx;
        }, _mzn.getSlot286PersonalEffect2 = function(_n03) {
            var _n04 = null,
                _n05 = new _mzt.SlotItemEffectModel(),
                _n06 = false,
                _n07 = 0;
            if ('たけ' == _n03.yomi && (_n06 = true, _n07 = 1), 0 == _n06) return _n05;
            var _n08 = _n03.get_each_level_nums(286),
                _n09 = 0;
            return _n07 > 0 && _n08.forEach(function(_n0a, _n0b) {
                _n0b >= 7 && (_n09 += _n0a);
            }), 'たけ' == _n03.yomi && (_n05.raig += 7, _n05.kaih += 2, _n09 >= 1 && (_n05.raig += 2), _n08[10] >= 1 && (_n05.raig += 2)), _n05;
        }, _mzn.getSlot286PersonalEffect3 = function(_n0c) {
            var _n0d = null,
                _n0e = new _mzt.SlotItemEffectModel(),
                _n0f = false,
                _n0g = new _mzt.SlotItemEffectModel(),
                _n0h = 0;
            if (662 != _n0c.ship_id && 663 != _n0c.ship_id && 668 != _n0c.ship_id || (_n0g.raig += 2, _n0f = true, _n0h = 1), 0 == _n0f) return _n0e;
            var _n0i = _n0c.get_slotnums(286);
            _n0e.add(_n0g.multiply(_n0i));
            for (var _n0j = 0, _n0k = 0, _n0l = _n0c.have_slot_ids(); _n0k < _n0l.length; _n0k++) {
                var _n0m = _n0l[_n0k],
                    _n0n = _mzu.default.model.slot.getMst(_n0m),
                    _n0o = _n0n.equipType;
                12 != _n0o && 13 != _n0o || (_n0n.sakuteki >= 5 && (_n0j += _n0c.get_slotnums(parseInt(_n0m))), _n0n.taiku >= 2 && _n0c.get_slotnums(parseInt(_n0m)));
            }
            return _n0j >= 1 && 1 == _n0h && (_n0e.raig += 3, _n0e.kaih += 2), _n0e;
        };
    },
    9234: (_n0p, _n0q, _n0r) => {
        'use strict';
        var _n0s = null;
        defineModule(_n0q);
        Object.defineProperty(_n0q, '__esModule', {
            'value': true
        }), _n0q.getSlot287PersonalEffect = void 0;
        var _n0t = _n0r(74496);
        _n0q.getSlot287PersonalEffect = function(_n0u) {
            var _n0v = null,
                _n0w = new _n0t.SlotItemEffectModel(),
                _n0x = new _n0t.SlotItemEffectModel(),
                _n0y = false;
            if (488 == _n0u.ship_id || 141 == _n0u.ship_id || 160 == _n0u.ship_id || 624 == _n0u.ship_id || 656 == _n0u.ship_id ? (_n0x.tais = 1, _n0x.kaih = 1, _n0y = true) : 662 != _n0u.ship_id && 961 != _n0u.ship_id || (_n0x.tais = 3, _n0y = true), 0 == _n0y) return _n0w;
            var _n0z = _n0u.get_slotnums(287);
            return _n0w = _n0x.multiply(_n0z);
        };
    },
    30802: (_n10, _n11, _n12) => {
        'use strict';
        var _n13 = null;
        defineModule(_n11);
        Object.defineProperty(_n11, '__esModule', {
            'value': true
        }), _n11.getSlot288PersonalEffect = void 0;
        var _n14 = _n12(74496);
        _n11.getSlot288PersonalEffect = function(_n15) {
            var _n16 = null,
                _n17 = new _n14.SlotItemEffectModel(),
                _n18 = new _n14.SlotItemEffectModel(),
                _n19 = false;
            if (488 == _n15.ship_id || 141 == _n15.ship_id || 160 == _n15.ship_id || 656 == _n15.ship_id ? (_n18.tais = 2, _n18.kaih = 1, _n19 = true) : 624 == _n15.ship_id ? (_n18.houg = 1, _n18.tais = 3, _n18.kaih = 2, _n19 = true) : 662 != _n15.ship_id && 961 != _n15.ship_id || (_n18.tais = 4, _n18.kaih = 1, _n19 = true), 0 == _n19) return _n17;
            var _n1a = _n15.get_slotnums(288);
            return _n17 = _n18.multiply(_n1a);
        };
    },
    97002: function(_n1b, _n1c, _n1d) {
        'use strict';
        var _n1e = null;
        var _n1f = this && this.__importDefault || function(_n1g) {
            var _n1h = null;
            return _n1g && _n1g.__esModule ? _n1g : {
                'default': _n1g
            };
        };
        defineModule(_n1c);
        Object.defineProperty(_n1c, '__esModule', {
            'value': true
        }), _n1c.getSlot289PersonalEffect = void 0;
        var _n1i = _n1d(74496),
            _n1j = _n1f(_n1d(18622));
        _n1c.getSlot289PersonalEffect = function(_n1k) {
            var _n1l = null,
                _n1m = new _n1i.SlotItemEffectModel(),
                _n1n = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n1o = 0,
                _n1p = new _n1i.SlotItemEffectModel();
            if (149 == _n1k.ship_id || 591 == _n1k.ship_id) _n1p.houg = 2, _n1p.tyku = 1, _n1o = 1;
            else {
                if (150 == _n1k.ship_id || 592 == _n1k.ship_id) _n1p.houg = 1;
                else {
                    if (152 == _n1k.ship_id) _n1p.houg = 1;
                    else {
                        if (151 != _n1k.ship_id && 593 != _n1k.ship_id && 954 != _n1k.ship_id) return _n1m;
                        _n1p.houg = 2, _n1p.tyku = 2, _n1p.kaih = 2, _n1o = 1;
                    }
                }
            }
            var _n1q = _n1k.get_slotnums(289);
            if (_n1m = _n1p.multiply(_n1q), _n1n[_n1k.ship_id]) {
                var _n1r = _n1k.get_each_level_nums(289),
                    _n1s = new Array();
                _n1r.forEach(function(_n1t, _n1u) {
                    var _n1v = null;
                    for (var _n1w = 1; _n1w <= _n1k.SLOT_LEVEL_MAX; _n1w++) _n1u >= _n1w && (null == _n1s[_n1w] && (_n1s[_n1w] = 0), _n1s[_n1w] += _n1t);
                });
                var _n1x = _n1n[_n1k.ship_id];
                1 == _n1x ? (_n1s[1] >= 1 && (_n1m.kaih += 1 * _n1s[1]), _n1s[3] >= 1 && (_n1m.tyku = _n1m.tyku + 1 * _n1s[3]), _n1s[5] >= 1 && (_n1m.houg = _n1m.houg + 1 * _n1s[5]), _n1s[7] >= 1 && (_n1m.kaih += 1 * _n1s[7]), _n1s[8] >= 1 && (_n1m.tyku += 1 * _n1s[8]), _n1s[9] >= 1 && (_n1m.houg += 1 * _n1s[9]), _n1s[10] >= 1 && (_n1m.kaih += 1 * _n1s[10])) : 2 == _n1x ? (_n1s[4] >= 1 && (_n1m.tyku += 1 * _n1s[4]), _n1s[6] >= 1 && (_n1m.kaih += 1 * _n1s[6]), _n1s[8] >= 1 && (_n1m.houg += 1 * _n1s[8]), _n1s[10] >= 1 && (_n1m.kaih += 1 * _n1s[10])) : 3 == _n1x && (_n1s[7] >= 1 && (_n1m.tyku += 1 * _n1s[7]), _n1s[9] >= 1 && (_n1m.houg += 1 * _n1s[9]), _n1s[10] >= 1 && (_n1m.kaih += 1 * _n1s[10]));
            }
            if (0 == _n1o) return _n1m;
            for (var _n1y = 0, _n1z = 0, _n20 = _n1k.have_slot_ids(); _n1z < _n20.length; _n1z++) {
                var _n21 = _n20[_n1z],
                    _n22 = _n1j.default.model.slot.getMst(_n21),
                    _n23 = _n22.equipType;
                (12 == _n23 || 13 == _n23) && _n22.sakuteki >= 5 && (_n1y += _n1k.get_slotnums(parseInt(_n21)));
            }
            return _n1y > 0 && (_n1m.houg += 2, _n1m.kaih += 2), _n1m;
        };
    },
    16748: function(_n24, _n25, _n26) {
        'use strict';
        var _n27 = null;
        var _n28 = this && this.__importDefault || function(_n29) {
            var _n2a = null;
            return _n29 && _n29.__esModule ? _n29 : {
                'default': _n29
            };
        };
        defineModule(_n25);
        Object.defineProperty(_n25, '__esModule', {
            'value': true
        }), _n25.getSlot290PersonalEffect = void 0;
        var _n2b = _n26(74496),
            _n2c = _n28(_n26(18622));
        _n25.getSlot290PersonalEffect = function(_n2d) {
            var _n2e = null,
                _n2f = new _n2b.SlotItemEffectModel(),
                _n2g = 0,
                _n2h = new _n2b.SlotItemEffectModel();
            if (411 == _n2d.ship_id) _n2h.houg = 1;
            else {
                if (412 == _n2d.ship_id) _n2h.houg = 1;
                else {
                    if (82 == _n2d.ship_id) _n2h.houg = 2, _n2h.tyku = 2, _n2h.kaih = 1, _n2g = 1;
                    else {
                        if (553 == _n2d.ship_id) _n2h.houg = 3, _n2h.tyku = 2, _n2h.kaih = 1, _n2h.houm = 3, _n2g = 1;
                        else {
                            if (88 == _n2d.ship_id) _n2h.houg = 2, _n2h.tyku = 2, _n2h.kaih = 1, _n2g = 1;
                            else {
                                if (554 != _n2d.ship_id) return _n2f;
                                _n2h.houg = 3, _n2h.tyku = 2, _n2h.kaih = 2, _n2h.houm = 3, _n2g = 1;
                            }
                        }
                    }
                }
            }
            var _n2i = _n2d.get_slotnums(290);
            if (_n2f = _n2h.multiply(_n2i), 0 == _n2g) return _n2f;
            for (var _n2j = 0, _n2k = 0, _n2l = _n2d.have_slot_ids(); _n2k < _n2l.length; _n2k++) {
                var _n2m = _n2l[_n2k],
                    _n2n = _n2c.default.model.slot.getMst(_n2m),
                    _n2o = _n2n.equipType;
                (12 == _n2o || 13 == _n2o) && _n2n.taiku >= 2 && (_n2j += _n2d.get_slotnums(parseInt(_n2m)));
            }
            return _n2j > 0 && (_n2f.tyku += 2, _n2f.kaih += 3), _n2f;
        };
    },
    53618: (_n2p, _n2q, _n2r) => {
        'use strict';
        var _n2s = null;
        defineModule(_n2q);
        Object.defineProperty(_n2q, '__esModule', {
            'value': true
        }), _n2q.getSlot291PersonalEffect = void 0;
        var _n2t = _n2r(74496);
        _n2q.getSlot291PersonalEffect = function(_n2u) {
            var _n2v = null,
                _n2w = new _n2t.SlotItemEffectModel(),
                _n2x = new _n2t.SlotItemEffectModel();
            if (553 == _n2u.ship_id) _n2x.houg = 6, _n2x.kaih = 1;
            else {
                if (554 != _n2u.ship_id) return _n2w;
                _n2x.houg = 6, _n2x.kaih = 1;
            }
            var _n2y = _n2u.get_slotnums(291);
            return _n2w = _n2x.multiply(_n2y);
        };
    },
    72573: (_n2z, _n30, _n31) => {
        'use strict';
        var _n32 = null;
        defineModule(_n30);
        Object.defineProperty(_n30, '__esModule', {
            'value': true
        }), _n30.getSlot292PersonalEffect = void 0;
        var _n33 = _n31(74496);
        _n30.getSlot292PersonalEffect = function(_n34) {
            var _n35 = null,
                _n36 = new _n33.SlotItemEffectModel(),
                _n37 = new _n33.SlotItemEffectModel();
            if (553 == _n34.ship_id) _n37.houg = 8, _n37.kaih = 2, _n37.tyku = 1;
            else {
                if (554 != _n34.ship_id) return _n36;
                _n37.houg = 8, _n37.kaih = 2, _n37.tyku = 1;
            }
            var _n38 = _n34.get_slotnums(292);
            return _n36 = _n37.multiply(_n38);
        };
    },
    8955: function(_n39, _n3a, _n3b) {
        'use strict';
        var _n3c = null;
        var _n3d = this && this.__importDefault || function(_n3e) {
            var _n3f = null;
            return _n3e && _n3e.__esModule ? _n3e : {
                'default': _n3e
            };
        };
        defineModule(_n3a);
        Object.defineProperty(_n3a, '__esModule', {
            'value': true
        }), _n3a.getSlot293PersonalEffect = void 0;
        var _n3g = _n3b(74496),
            _n3h = _n3d(_n3b(18622));
        _n3a.getSlot293PersonalEffect = function(_n3i) {
            var _n3j = null,
                _n3k = new _n3g.SlotItemEffectModel(),
                _n3l = new _n3g.SlotItemEffectModel(),
                _n3m = 0;
            if (66 == _n3i.ctype || 28 == _n3i.ctype) _n3l.houg = 2, _n3l.tyku = 1, _n3l.kaih = 3, _n3m = 1;
            else {
                if (74 != _n3i.ctype && 77 != _n3i.ctype) return _n3k;
                _n3l.houg = 1, _n3l.tyku = 1, _n3l.kaih = 2, _n3m = 2;
            }
            var _n3n = _n3i.get_slotnums(293);
            _n3k = _n3l.multiply(_n3n);
            for (var _n3o = 0, _n3p = 0, _n3q = _n3i.have_slot_ids(); _n3p < _n3q.length; _n3p++) {
                var _n3r = _n3q[_n3p],
                    _n3s = _n3h.default.model.slot.getMst(_n3r),
                    _n3t = _n3s.equipType;
                (12 == _n3t || 13 == _n3t) && _n3s.sakuteki >= 5 && (_n3o += _n3i.get_slotnums(parseInt(_n3r)));
            }
            var _n3u = _n3i.get_slotnums(174);
            return 1 == _n3m ? (_n3o > 0 && (_n3k.houg += 2, _n3k.kaih += 3, _n3k.raig += 1), 1 == _n3u ? (_n3k.houg += 2, _n3k.raig += 4) : _n3u >= 2 && (_n3k.houg += 3, _n3k.raig += 7)) : 2 == _n3m && _n3o > 0 && (_n3k.houg += 2, _n3k.kaih += 3, _n3k.tais += 1), _n3k;
        };
    },
    98947: function(_n3v, _n3w, _n3x) {
        'use strict';
        var _n3y = null;
        var _n3z = this && this.__importDefault || function(_n40) {
            var _n41 = null;
            return _n40 && _n40.__esModule ? _n40 : {
                'default': _n40
            };
        };
        defineModule(_n3w);
        Object.defineProperty(_n3w, '__esModule', {
            'value': true
        }), _n3w.getSlot294PersonalEffect = void 0;
        var _n42 = _n3x(74496),
            _n43 = _n3z(_n3x(18622));
        _n3w.getSlot294PersonalEffect = function(_n44) {
            var _n45 = null,
                _n46 = new _n42.SlotItemEffectModel(),
                _n47 = new _n42.SlotItemEffectModel(),
                _n48 = 0,
                _n49 = _n44.get_slotnums(294);
            if (12 != _n44.ctype && 1 != _n44.ctype && 5 != _n44.ctype) return _n46;
            _n47.houg = 1, 959 == _n44.ship_id && (_n47.houg += 1, _n49 >= 2 && (_n46.houg += 2), _n49 >= 3 && (_n46.houg += 3), _n48 = 1), _n46.add(_n47.multiply(_n49));
            for (var _n4a = 0, _n4b = 0, _n4c = _n44.have_slot_ids(); _n4b < _n4c.length; _n4b++) {
                var _n4d = _n4c[_n4b],
                    _n4e = _n43.default.model.slot.getMst(_n4d),
                    _n4f = _n4e.equipType;
                (12 == _n4f || 13 == _n4f) && _n4e.sakuteki >= 5 && (_n4a += _n44.get_slotnums(parseInt(_n4d)));
            }
            var _n4g = _n44.get_slotnums(13),
                _n4h = _n44.get_slotnums(125),
                _n4i = _n44.get_slotnums(285),
                _n4j = _n4g + _n4h + _n4i;
            if (_n4a > 0 && (_n46.houg += 3, _n46.kaih += 2, _n46.raig += 1), 1 == _n4j ? (_n46.houg += 1, _n46.raig += 3) : _n4j >= 2 && (_n46.houg += 2, _n46.raig += 5), _n4i >= 1 && (_n46.raig += 1), 0 == _n48) return _n46;
            var _n4k = _n44.get_each_level_nums(294),
                _n4l = [];
            return _n48 > 0 && _n4k.forEach(function(_n4m, _n4n) {
                var _n4o = null;
                for (var _n4p = 1; _n4p <= _n44.SLOT_LEVEL_MAX; _n4p++) null == _n4l[_n4p] && (_n4l[_n4p] = 0), _n4n >= _n4p && (_n4l[_n4p] += _n4m);
            }), 1 == _n48 && (_n4l[6] >= 1 && (_n46.houm += 4 * _n4l[6]), _n4l[7] >= 1 && (_n46.houg = _n46.houg + 6 * _n4l[7]), _n4l[8] >= 1 && (_n46.houg = _n46.houg + 1 * _n4l[8]), _n4l[9] >= 1 && (_n46.houg = _n46.houg + 1 * _n4l[9]), _n4l[10] >= 1 && (_n46.houg += 1 * _n4l[10])), _n46;
        };
    },
    44726: function(_n4q, _n4r, _n4s) {
        'use strict';
        var _n4t = null;
        var _n4u = this && this.__importDefault || function(_n4v) {
            var _n4w = null;
            return _n4v && _n4v.__esModule ? _n4v : {
                'default': _n4v
            };
        };
        defineModule(_n4r);
        Object.defineProperty(_n4r, '__esModule', {
            'value': true
        }), _n4r.getSlot295PersonalEffect = void 0;
        var _n4x = _n4s(74496),
            _n4y = _n4u(_n4s(18622));
        _n4r.getSlot295PersonalEffect = function(_n4z) {
            var _n50 = null,
                _n51 = new _n4x.SlotItemEffectModel(),
                _n52 = new _n4x.SlotItemEffectModel(),
                _n53 = _n4z.get_slotnums(295);
            if (12 != _n4z.ctype && 1 != _n4z.ctype && 5 != _n4z.ctype) return _n51;
            _n52.houg = 2, _n52.tyku = 2, 666 == _n4z.ship_id ? (_n52.houg += 1, _n52.tyku += 1, _n52.tais += 1) : 959 == _n4z.ship_id && (_n52.houg += 2, _n53 >= 2 && (_n51.houg += 2), _n53 >= 3 && (_n51.houg += 3)), _n51.add(_n52.multiply(_n53));
            for (var _n54 = 0, _n55 = 0, _n56 = 0, _n57 = _n4z.have_slot_ids(); _n56 < _n57.length; _n56++) {
                var _n58 = _n57[_n56],
                    _n59 = _n4y.default.model.slot.getMst(_n58),
                    _n5a = _n59.equipType;
                12 != _n5a && 13 != _n5a || (_n59.sakuteki >= 5 && (_n54 += _n4z.get_slotnums(parseInt(_n58))), _n59.taiku >= 2 && (_n55 += _n4z.get_slotnums(parseInt(_n58))));
            }
            var _n5b = _n4z.get_slotnums(13),
                _n5c = _n4z.get_slotnums(125),
                _n5d = _n4z.get_slotnums(285),
                _n5e = _n5b + _n5c + _n5d;
            return _n54 > 0 && (_n51.houg += 3, _n51.kaih += 2, _n51.raig += 1), 1 == _n5e ? (_n51.houg += 1, _n51.raig += 3) : _n5e >= 2 && (_n51.houg += 2, _n51.raig += 5), _n5d >= 1 && (_n51.raig += 1), _n55 > 0 && (_n51.tyku += 6), _n51;
        };
    },
    93065: function(_n5f, _n5g, _n5h) {
        'use strict';
        var _n5i = null;
        var _n5j = this && this.__importDefault || function(_n5k) {
            var _n5l = null;
            return _n5k && _n5k.__esModule ? _n5k : {
                'default': _n5k
            };
        };
        defineModule(_n5g);
        Object.defineProperty(_n5g, '__esModule', {
            'value': true
        }), _n5g.getSlot296PersonalEffect = void 0;
        var _n5m = _n5h(74496),
            _n5n = _n5j(_n5h(18622));
        _n5g.getSlot296PersonalEffect = function(_n5o) {
            var _n5p = null,
                _n5q = new _n5m.SlotItemEffectModel(),
                _n5r = new _n5m.SlotItemEffectModel();
            1 != _n5o.ctype && 5 != _n5o.ctype && 10 != _n5o.ctype && 23 != _n5o.ctype || (_n5r.houg += 1), 10 != _n5o.ctype && 23 != _n5o.ctype || (_n5r.kaih += 1), 145 == _n5o.ship_id || 961 == _n5o.ship_id ? (_n5r.houg += 1, _n5r.tyku += 1) : 144 == _n5o.ship_id ? (_n5r.houg += 1, _n5r.raig += 1) : 469 == _n5o.ship_id || 588 == _n5o.ship_id || 667 == _n5o.ship_id || 587 == _n5o.ship_id || 242 == _n5o.ship_id ? _n5r.kaih += 1 : 497 == _n5o.ship_id ? (_n5r.houg += 1, _n5r.kaih += 1) : 244 == _n5o.ship_id ? _n5r.kaih += 1 : 498 == _n5o.ship_id ? (_n5r.tyku += 1, _n5r.kaih += 1) : 627 == _n5o.ship_id ? (_n5r.houg += 2, _n5r.raig += 1) : 903 != _n5o.ship_id && 908 != _n5o.ship_id || (_n5r.houg += 3);
            var _n5s = true;
            if (_n5r.exists() || (_n5s = false), 0 == _n5s) return _n5q;
            var _n5t = _n5o.get_slotnums(296);
            _n5q = _n5r.multiply(_n5t);
            var _n5u = 0;
            if (1 != _n5o.ctype && 5 != _n5o.ctype && 10 != _n5o.ctype || (_n5u = 1), 23 == _n5o.ctype && (_n5u = 2), 0 == _n5u) return _n5q;
            for (var _n5v = 0, _n5w = 0, _n5x = 0, _n5y = _n5o.have_slot_ids(); _n5x < _n5y.length; _n5x++) {
                var _n5z = _n5y[_n5x],
                    _n60 = _n5n.default.model.slot.getMst(_n5z),
                    _n61 = _n60.equipType;
                12 != _n61 && 13 != _n61 || (_n60.sakuteki >= 5 && (_n5v += _n5o.get_slotnums(parseInt(_n5z))), _n60.taiku >= 2 && (_n5w += _n5o.get_slotnums(parseInt(_n5z))));
            }
            return _n5v > 0 && (1 == _n5u ? (_n5q.houg += 1, _n5q.kaih += 2, _n5q.raig += 2) : 2 == _n5u && (_n5q.houg += 1, _n5q.kaih += 2, _n5q.raig += 3)), _n5o.get_slotnums(285) + _n5o.get_slotnums(125) >= 1 && 1 == _n5u && (_n5q.houg += 1, _n5q.raig += 3), _n5o.get_slotnums(15) + _n5o.get_slotnums(286) >= 1 && 2 == _n5u && (_n5q.houg += 1, _n5q.raig += 3), _n5w > 0 && (1 == _n5u ? _n5q.tyku += 5 : 2 == _n5u && (_n5q.tyku += 6)), _n5q;
        };
    },
    85767: (_n62, _n63, _n64) => {
        'use strict';
        var _n65 = null;
        defineModule(_n63);
        Object.defineProperty(_n63, '__esModule', {
            'value': true
        }), _n63.getSlot297PersonalEffect = void 0;
        var _n66 = _n64(74496);
        _n63.getSlot297PersonalEffect = function(_n67) {
            var _n68 = null,
                _n69 = new _n66.SlotItemEffectModel(),
                _n6a = new _n66.SlotItemEffectModel();
            if (12 == _n67.ctype) _n6a.kaih = 2;
            else {
                if (1 != _n67.ctype && 5 != _n67.ctype) return _n69;
                _n6a.kaih = 1;
            }
            var _n6b = _n67.get_slotnums(297);
            return _n69 = _n6a.multiply(_n6b);
        };
    },
    38314: (_n6c, _n6d, _n6e) => {
        'use strict';
        var _n6f = null;
        defineModule(_n6d);
        Object.defineProperty(_n6d, '__esModule', {
            'value': true
        }), _n6d.getSlot301PersonalEffect = void 0;
        var _n6g = _n6e(74496);
        _n6d.getSlot301PersonalEffect = function(_n6h) {
            var _n6i = null,
                _n6j = new _n6g.SlotItemEffectModel(),
                _n6k = new _n6g.SlotItemEffectModel();
            67 != _n6h.ctype && 78 != _n6h.ctype && 82 != _n6h.ctype && 88 != _n6h.ctype && 108 != _n6h.ctype && 112 != _n6h.ctype || (_n6k.tyku += 2, _n6k.kaih += 1, _n6k.souk += 1);
            var _n6l = true;
            if (_n6k.exists() || (_n6l = false), 0 == _n6l) return _n6j;
            var _n6m = _n6h.get_slotnums(301);
            return _n6j = _n6k.multiply(_n6m);
        };
    },
    59747: (_n6n, _n6o, _n6p) => {
        'use strict';
        var _n6q = null;
        defineModule(_n6o);
        Object.defineProperty(_n6o, '__esModule', {
            'value': true
        }), _n6o.getSlot302PersonalEffect = void 0;
        var _n6r = _n6p(74496);
        _n6o.getSlot302PersonalEffect = function(_n6s) {
            var _n6t = null,
                _n6u = new _n6r.SlotItemEffectModel(),
                _n6v = new _n6r.SlotItemEffectModel();
            if (76 == _n6s.ctype && (_n6v.tais = 1, _n6v.kaih = 1), !_n6v.exists()) return _n6u;
            var _n6w = _n6s.get_slotnums(302);
            return _n6u = _n6v.multiply(_n6w);
        };
    },
    40649: (_n6x, _n6y, _n6z) => {
        'use strict';
        var _n70 = null;
        defineModule(_n6y);
        Object.defineProperty(_n6y, '__esModule', {
            'value': true
        }), _n6y.getSlot303PersonalEffect = void 0;
        var _n71 = _n6z(74496);
        _n6y.getSlot303PersonalEffect = function(_n72) {
            var _n73 = null,
                _n74 = new _n71.SlotItemEffectModel(),
                _n75 = new _n71.SlotItemEffectModel();
            if (16 == _n72.ctype || 4 == _n72.ctype || 20 == _n72.ctype || 41 == _n72.ctype ? (_n75.houg = 1, _n75.tyku = 1) : 89 == _n72.ctype && (_n75.houg = 1, _n75.tyku = 2, _n75.kaih = 1), !_n75.exists()) return _n74;
            var _n76 = _n72.get_slotnums(303);
            return _n74 = _n75.multiply(_n76);
        };
    },
    13533: (_n77, _n78, _n79) => {
        'use strict';
        var _n7a = null;
        defineModule(_n78);
        Object.defineProperty(_n78, '__esModule', {
            'value': true
        }), _n78.getSlot304PersonalEffect = void 0;
        var _n7b = _n79(74496);
        _n78.getSlot304PersonalEffect = function(_n7c) {
            var _n7d = null,
                _n7e = new _n7b.SlotItemEffectModel(),
                _n7f = new _n7b.SlotItemEffectModel();
            if (16 == _n7c.ctype || 4 == _n7c.ctype || 20 == _n7c.ctype || 41 == _n7c.ctype ? (_n7f.houg = 1, _n7f.tais = 1, _n7f.kaih = 1) : 89 == _n7c.ctype && (_n7f.houg = 1, _n7f.tais = 2, _n7f.kaih = 2), !_n7f.exists()) return _n7e;
            var _n7g = _n7c.get_slotnums(304);
            return _n7e = _n7f.multiply(_n7g);
        };
    },
    99791: (_n7h, _n7i, _n7j) => {
        'use strict';
        var _n7k = null;
        defineModule(_n7i);
        Object.defineProperty(_n7i, '__esModule', {
            'value': true
        }), _n7i.getSlot305More320mmGunPersonalEffect = void 0;
        var _n7l = _n7j(74496);
        _n7i.getSlot305More320mmGunPersonalEffect = function(_n7m) {
            var _n7n = null,
                _n7o = new _n7l.SlotItemEffectModel(),
                _n7p = _n7m.get_slotnums(426),
                _n7q = _n7m.get_slotnums(427),
                _n7r = _n7m.get_slotnums(428),
                _n7s = _n7m.get_slotnums(429),
                _n7t = _n7p + _n7q + _n7r + _n7s;
            return 113 == _n7m.ctype ? (_n7o.houg = _n7o.houg + 2 * _n7t, _n7p >= 1 && (_n7o.houg = _n7o.houg + 1 * _n7p, _n7o.kaih = _n7o.kaih + 1 * _n7p, (_n7p >= 2 || _n7q >= 1) && (_n7o.houg = _n7o.houg + 1, _n7o.kaih = _n7o.kaih + 1)), _n7r >= 1 && (_n7o.houg = _n7o.houg + 1 * _n7r, _n7o.kaih = _n7o.kaih + 1 * _n7r, (_n7r >= 2 || _n7s >= 1) && (_n7o.houg = _n7o.houg + 2, _n7o.kaih = _n7o.kaih + 1))) : 73 == _n7m.ctype ? (_n7o.houg = _n7o.houg + 1 * _n7t, _n7p >= 1 && (_n7o.houg = _n7o.houg + 1 * _n7p, _n7o.kaih = _n7o.kaih + 1 * _n7p, (_n7p >= 2 || _n7q >= 1) && (_n7o.houg = _n7o.houg + 1)), _n7r >= 1 && (_n7o.houg = _n7o.houg + 1 * _n7r, _n7o.kaih = _n7o.kaih + 1 * _n7r, (_n7r >= 2 || _n7s >= 1) && (_n7o.houg = _n7o.houg + 1))) : 58 == _n7m.ctype && _n7r >= 1 && (_n7o.houg = _n7o.houg + 1 * _n7r, _n7o.kaih = _n7o.kaih + 2 * _n7r, (_n7r >= 2 || _n7s >= 1) && (_n7o.houg = _n7o.houg + 2, _n7o.kaih = _n7o.kaih + 1)), _n7o;
        };
    },
    12138: (_n7u, _n7v, _n7w) => {
        'use strict';
        var _n7x = null;
        defineModule(_n7v);
        Object.defineProperty(_n7v, '__esModule', {
            'value': true
        }), _n7v.getSlot305_And_306_PersonalEffect = void 0;
        var _n7y = _n7w(74496);
        _n7v.getSlot305_And_306_PersonalEffect = function(_n7z) {
            var _n80 = null,
                _n81 = new _n7y.SlotItemEffectModel(),
                _n82 = new _n7y.SlotItemEffectModel();
            if (76 == _n7z.ctype && (_n82.tais = 1, _n82.kaih = 1), 'しんよう' == _n7z.yomi ? (_n82.tais += 2, _n82.kaih += 1) : 'グラーフ・ツェッペリン' != _n7z.yomi && 'アクィラ' != _n7z.yomi || (_n82.houg = 1, _n82.kaih = 1), !_n82.exists()) return _n81;
            var _n83 = _n7z.get_slotnums(305) + _n7z.get_slotnums(306);
            return _n81 = _n82.multiply(_n83);
        };
    },
    30042: (_n84, _n85, _n86) => {
        'use strict';
        var _n87 = null;
        defineModule(_n85);
        Object.defineProperty(_n85, '__esModule', {
            'value': true
        }), _n85.getSlot307PersonalEffect = void 0;
        var _n88 = _n86(74496);
        _n85.getSlot307PersonalEffect = function(_n89) {
            var _n8a = null,
                _n8b = new _n88.SlotItemEffectModel(),
                _n8c = new _n88.SlotItemEffectModel();
            if ('アメリカ' == _n89.getCountryName() && (_n8c.houg = 1, _n8c.tyku = 1, _n8c.kaih = 1), !_n8c.exists()) return _n8b;
            var _n8d = _n89.get_slotnums(307);
            return _n8b = _n8c.multiply(_n8d);
        };
    },
    33623: (_n8e, _n8f, _n8g) => {
        'use strict';
        var _n8h = null;
        defineModule(_n8f);
        Object.defineProperty(_n8f, '__esModule', {
            'value': true
        }), _n8f.getSlot308PersonalEffect = void 0;
        var _n8i = _n8g(74496);
        _n8f.getSlot308PersonalEffect = function(_n8j) {
            var _n8k = null,
                _n8l = new _n8i.SlotItemEffectModel(),
                _n8m = new _n8i.SlotItemEffectModel();
            if ('アメリカ' == _n8j.getCountryName() && (_n8m.houg = 1, _n8m.tyku = 1, _n8m.kaih = 1), 2 == _n8j.stype ? _n8m.houg += 1 : 1 == _n8j.stype && (_n8m.tyku += 1, _n8m.kaih += 1), 651 != _n8j.ship_id && 656 != _n8j.ship_id || (_n8m.houg += 1, _n8m.tyku += 1, _n8m.kaih += 1), !_n8m.exists()) return _n8l;
            var _n8n = _n8j.get_slotnums(308);
            return _n8l = _n8m.multiply(_n8n);
        };
    },
    17732: (_n8o, _n8p, _n8q) => {
        'use strict';
        var _n8r = null;
        defineModule(_n8p);
        Object.defineProperty(_n8p, '__esModule', {
            'value': true
        }), _n8p.getSlot30_410PersonalEffect = void 0;
        var _n8s = _n8q(74496);
        _n8p.getSlot30_410PersonalEffect = function(_n8t) {
            var _n8u = null,
                _n8v = new _n8s.SlotItemEffectModel();
            return 73 != _n8t.ship_id && 501 != _n8t.ship_id && 506 != _n8t.ship_id && 502 != _n8t.ship_id && 507 != _n8t.ship_id || (_n8v.tyku += 3, _n8v.kaih += 2, _n8v.saku += 2, _n8t.get_slotnums(410) >= 1 && (_n8v.tyku += 2, _n8v.kaih += 2, _n8v.houg += 1, _n8v.souk += 1)), 54 == _n8t.ctype && (_n8v.tyku += 3, _n8v.kaih += 2, _n8v.saku += 2, _n8t.get_slotnums(410) >= 1 && (_n8v.tyku += 2, _n8v.kaih += 2, _n8v.houg += 1, _n8v.souk += 1)), _n8v;
        };
    },
    85630: function(_n8w, _n8x, _n8y) {
        'use strict';
        var _n8z = null;
        var _n90 = this && this.__importDefault || function(_n91) {
            var _n92 = null;
            return _n91 && _n91.__esModule ? _n91 : {
                'default': _n91
            };
        };
        defineModule(_n8x);
        Object.defineProperty(_n8x, '__esModule', {
            'value': true
        }), _n8x.getSlot310PersonalEffect = void 0;
        var _n93 = _n8y(74496),
            _n94 = _n90(_n8y(18622));
        _n8x.getSlot310PersonalEffect = function(_n95) {
            var _n96 = null,
                _n97 = new _n93.SlotItemEffectModel(),
                _n98 = new _n93.SlotItemEffectModel(),
                _n99 = new _n93.SlotItemEffectModel();
            34 == _n95.ctype ? (_n98.houg += 2, _n98.tyku += 1, _n98.kaih += 1, _n99.houg += 2) : 56 == _n95.ctype ? (_n98.houg += 2, _n98.kaih += 1, _n99.houg += 2, _n99.kaih += 2) : 90 == _n95.ctype && (_n98.houg += 3, _n98.raig += 2, _n98.tyku += 1, _n98.kaih += 1, _n99.houg += 1, _n99.raig += 1);
            var _n9a = new _n93.SlotItemEffectModel(),
                _n9b = new _n93.SlotItemEffectModel();
            622 != _n95.ship_id && 623 != _n95.ship_id && 624 != _n95.ship_id || (_n98.houg += 2, _n98.kaih += 1, _n98.tais += 1, _n9a.houg = 1, _n9a.raig = 1, _n9b.houg = 3, _n9b.kaih = 2, _n9b.raig = 2);
            var _n9c = true;
            if (_n98.exists() || (_n9c = false), 0 == _n9c) return _n97;
            var _n9d = _n95.get_slotnums(310) + _n95.get_slotnums(518);
            _n97 = _n98.multiply(_n9d);
            for (var _n9e = 0, _n9f = 0, _n9g = 0, _n9h = [310, 518]; _n9g < _n9h.length; _n9g++) {
                var _n9i = _n9h[_n9g],
                    _n9j = _n95.have_slots_dict[_n9i];
                if (null != _n9j)
                    for (var _n9k = 0, _n9l = _n9j; _n9k < _n9l.length; _n9k++) {
                        var _n9m = _n9l[_n9k];
                        null != _n9m && (_n9m.level >= 7 && _n9e++, _n9m.level >= 10 && _n9f++);
                    }
            }
            if (_n9a.exists() && _n9e > 0 && _n97.add(_n9a.multiply(_n9e)), _n99.exists() && _n9f > 0 && _n97.add(_n99.multiply(_n9f)), _n9b.exists()) {
                for (var _n9n = 0, _n9o = 0, _n9p = _n95.have_slot_ids(); _n9o < _n9p.length; _n9o++) {
                    var _n9q = _n9p[_n9o],
                        _n9r = _n94.default.model.slot.getMst(_n9q),
                        _n9s = _n9r.equipType;
                    (12 == _n9s || 13 == _n9s) && _n9r.sakuteki >= 5 && (_n9n += _n95.get_slotnums(parseInt(_n9q)));
                }
                _n9n > 0 && _n97.add(_n9b);
            }
            return _n97;
        };
    },
    88736: (_n9t, _n9u, _n9v) => {
        'use strict';
        var _n9w = null;
        defineModule(_n9u);
        Object.defineProperty(_n9u, '__esModule', {
            'value': true
        }), _n9u.getSlot313PersonalEffect = void 0;
        var _n9x = _n9v(74496);
        _n9u.getSlot313PersonalEffect = function(_n9y) {
            var _n9z = null,
                _na0 = new _n9x.SlotItemEffectModel(),
                _na1 = new _n9x.SlotItemEffectModel();
            87 != _n9y.ctype && 91 != _n9y.ctype || (_na1.houg += 2, _na1.tyku += 2, _na1.kaih += 1, _na1.souk += 1), 651 != _n9y.ship_id && 656 != _n9y.ship_id || (_na1.houg += 2, _na1.tyku += 2, _na1.kaih += 1, _na1.souk += 1);
            var _na2 = true;
            if (_na1.exists() || (_na2 = false), 0 == _na2) return _na0;
            var _na3 = _n9y.get_slotnums(313);
            return _na0 = _na1.multiply(_na3);
        };
    },
    49341: (_na4, _na5, _na6) => {
        'use strict';
        var _na7 = null;
        defineModule(_na5);
        Object.defineProperty(_na5, '__esModule', {
            'value': true
        }), _na5.getSlot314PersonalEffect = void 0;
        var _na8 = _na6(74496);
        _na5.getSlot314PersonalEffect = function(_na9) {
            var _naa = null,
                _nab = new _na8.SlotItemEffectModel(),
                _nac = new _na8.SlotItemEffectModel();
            87 != _na9.ctype && 91 != _na9.ctype || (_nac.houg += 1, _nac.raig += 3);
            var _nad = true;
            if (_nac.exists() || (_nad = false), 0 == _nad) return _nab;
            var _nae = _na9.get_slotnums(314);
            return _nab = _nac.multiply(_nae);
        };
    },
    74306: (_naf, _nag, _nah) => {
        'use strict';
        var _nai = null;
        defineModule(_nag);
        Object.defineProperty(_nag, '__esModule', {
            'value': true
        }), _nag.getSlot315PersonalEffect = void 0;
        var _naj = _nah(74496);
        _nag.getSlot315PersonalEffect = function(_nak) {
            var _nal = null,
                _nam = new _naj.SlotItemEffectModel(),
                _nan = new _naj.SlotItemEffectModel();
            'アメリカ' == _nak.getCountryName() && (_nan.houg += 2, _nan.kaih += 3, _nan.saku += 4), 87 != _nak.ctype && 91 != _nak.ctype || (_nan.houg += 1, _nam.leng += 1), 651 != _nak.ship_id && 656 != _nak.ship_id || (_nam.houg += 2, _nam.kaih += 2, _nam.saku += 3, _nam.leng += 1);
            var _nao = true;
            if (_nan.exists() || (_nao = false), 0 == _nao) return _nam;
            var _nap = _nak.get_slotnums(315);
            return _nam.add(_nan.multiply(_nap)), _nam;
        };
    },
    83898: (_naq, _nar, _nas) => {
        'use strict';
        var _nat = null;
        defineModule(_nar);
        Object.defineProperty(_nar, '__esModule', {
            'value': true
        }), _nar.getSlot316PersonalEffect = void 0;
        var _nau = _nas(74496);
        _nar.getSlot316PersonalEffect = function(_nav) {
            var _naw = null,
                _nax = new _nau.SlotItemEffectModel(),
                _nay = new _nau.SlotItemEffectModel();
            if (68 == _nav.ctype) {
                if (_nay.houg += 4, _nay.tyku += 1, _nay.kaih += 1, !_nay.exists()) return _nax;
                var _naz = _nav.get_slotnums(316);
                _nax = _nay.multiply(_naz);
            }
            return _nax;
        };
    },
    71873: (_nb0, _nb1, _nb2) => {
        'use strict';
        var _nb3 = null;
        defineModule(_nb1);
        Object.defineProperty(_nb1, '__esModule', {
            'value': true
        }), _nb1.getSlot317PersonalEffect = void 0;
        var _nb4 = _nb2(74496);
        _nb1.getSlot317PersonalEffect = function(_nb5) {
            var _nb6 = null,
                _nb7 = new _nb4.SlotItemEffectModel(),
                _nb8 = new _nb4.SlotItemEffectModel(),
                _nb9 = 0,
                _nba = false;
            if (6 == _nb5.ctype ? (_nb8.houg += 2, _nb8.tyku += 1, _nb9 = 1, _nba = true) : 2 == _nb5.ctype && (_nb8.houg += 1, _nb8.tyku += 1, _nb8.kaih += 1, _nb9 = 2, _nba = true), 149 == _nb5.ship_id || 591 == _nb5.ship_id || 592 == _nb5.ship_id ? (_nb8.houg += 2, _nb8.tyku += 2, _nba = true) : 150 == _nb5.ship_id ? (_nb8.houg += 1, _nb8.tyku += 1, _nba = true) : 151 == _nb5.ship_id ? (_nb8.houg += 1, _nb8.tyku += 1, _nb8.kaih += 1, _nba = true) : 593 == _nb5.ship_id ? (_nb8.houg += 1, _nb8.tyku += 3, _nb8.kaih += 2, _nba = true) : 954 == _nb5.ship_id ? (_nb8.houg += 2, _nb8.tyku += 2, _nb8.kaih += 1, _nba = true) : 152 == _nb5.ship_id ? (_nb8.houg += 2, _nb8.tyku += 1, _nba = true) : 541 == _nb5.ship_id ? (_nb8.houg += 1, _nb8.tyku += 2, _nba = true) : 573 == _nb5.ship_id && (_nb8.houg += 2, _nb8.tyku += 2, _nb8.kaih += 1, _nba = true), 0 == _nba) return _nb7;
            if (_nb7.add(_nb8), 0 == _nb9) return _nb7;
            var _nbb = _nb5.get_each_level_nums(317),
                _nbc = [];
            return _nb9 > 0 && _nbb.forEach(function(_nbd, _nbe) {
                var _nbf = null;
                for (var _nbg = 1; _nbg <= _nb5.SLOT_LEVEL_MAX; _nbg++) null == _nbc[_nbg] && (_nbc[_nbg] = 0), _nbe >= _nbg && (_nbc[_nbg] += _nbd);
            }), 1 == _nb9 ? _nbc[8] >= 1 && (_nb7.houm += 1) : 2 == _nb9 && _nbb[10] >= 1 && (_nb7.houm += 1), _nb7;
        };
    },
    53122: function(_nbh, _nbi, _nbj) {
        'use strict';
        var _nbk = null;
        var _nbl = this && this.__importDefault || function(_nbm) {
            var _nbn = null;
            return _nbm && _nbm.__esModule ? _nbm : {
                'default': _nbm
            };
        };
        defineModule(_nbi);
        Object.defineProperty(_nbi, '__esModule', {
            'value': true
        }), _nbi.getSlot318PersonalEffect = void 0;
        var _nbo = _nbj(74496),
            _nbp = _nbl(_nbj(18622));
        _nbi.getSlot318PersonalEffect = function(_nbq) {
            var _nbr = null,
                _nbs = new _nbo.SlotItemEffectModel(),
                _nbt = new _nbo.SlotItemEffectModel(),
                _nbu = new _nbo.SlotItemEffectModel(),
                _nbv = new _nbo.SlotItemEffectModel();
            if (411 == _nbq.ship_id || 412 == _nbq.ship_id ? _nbt.houg += 1 : 82 == _nbq.ship_id ? (_nbt.houg += 2, _nbt.tyku += 2, _nbt.kaih += 2, _nbv.tyku = 2, _nbv.kaih = 3, _nbv.houm = 1) : 553 == _nbq.ship_id ? (_nbt.houg += 2, _nbt.tyku += 2, _nbt.kaih += 2, _nbt.houm += 3, _nbv.tyku = 2, _nbv.kaih = 3, _nbv.houm = 1, _nbu.kaih = 2, _nbu.souk = 1) : 88 == _nbq.ship_id ? (_nbt.houg += 2, _nbt.tyku += 2, _nbt.kaih += 2, _nbv.tyku = 2, _nbv.kaih = 3, _nbv.houm = 1) : 541 == _nbq.ship_id || 573 == _nbq.ship_id ? (_nbt.houg += 3, _nbt.tyku += 2, _nbt.kaih += 1, _nbt.houm += 2, _nbu.houg = 2, _nbu.kaih = 2, _nbu.souk = 1, _nbu.houm = 1) : 554 == _nbq.ship_id && (_nbt.houg += 3, _nbt.tyku += 2, _nbt.kaih += 2, _nbt.houm += 3, _nbv.tyku = 2, _nbv.kaih = 3, _nbv.houm = 1, _nbu.houg = 1, _nbu.kaih = 2, _nbu.souk = 1, _nbu.houm = 1), !_nbt.exists()) return _nbs;
            var _nbw = _nbq.get_slotnums(318);
            if (_nbs = _nbt.multiply(_nbw), !_nbu.exists() && !_nbv.exists()) return _nbs;
            for (var _nbx = 0, _nby = 0, _nbz = _nbq.have_slot_ids(); _nby < _nbz.length; _nby++) {
                var _nc0 = _nbz[_nby],
                    _nc1 = _nbp.default.model.slot.getMst(_nc0),
                    _nc2 = _nc1.equipType;
                (12 == _nc2 || 13 == _nc2) && _nc1.taiku >= 2 && (_nbx += _nbq.get_slotnums(parseInt(_nc0)));
            }
            var _nc3 = _nbq.get_slotnums(290);
            return _nbv.exists() && _nbx > 0 && 0 == _nc3 && _nbs.add(_nbv), _nbu.exists() && _nc3 >= 1 && _nbs.add(_nbu), _nbs;
        };
    },
    51063: (_nc4, _nc5, _nc6) => {
        'use strict';
        var _nc7 = null;
        defineModule(_nc5);
        Object.defineProperty(_nc5, '__esModule', {
            'value': true
        }), _nc5.getSlot319PersonalEffect = void 0;
        var _nc8 = _nc6(74496);
        _nc5.getSlot319PersonalEffect = function(_nc9) {
            var _nca = null,
                _ncb = new _nc8.SlotItemEffectModel(),
                _ncc = new _nc8.SlotItemEffectModel();
            if (554 != _nc9.ship_id && 553 != _nc9.ship_id || (_ncc.houg = 7, _ncc.tyku = 3, _ncc.kaih = 2), !_ncc.exists()) return _ncb;
            var _ncd = _nc9.get_slotnums(319);
            return _ncb = _ncc.multiply(_ncd);
        };
    },
    91491: (_nce, _ncf, _ncg) => {
        'use strict';
        var _nch = null;
        defineModule(_ncf);
        Object.defineProperty(_ncf, '__esModule', {
            'value': true
        }), _ncf.getSlot320PersonalEffect = void 0;
        var _nci = _ncg(74496);
        _ncf.getSlot320PersonalEffect = function(_ncj) {
            var _nck = null,
                _ncl = new _nci.SlotItemEffectModel(),
                _ncm = new _nci.SlotItemEffectModel();
            if (553 == _ncj.ship_id) _ncm.houg = 2;
            else {
                if (554 == _ncj.ship_id) _ncm.houg = 4;
                else {
                    if (196 == _ncj.ship_id) _ncm.houg = 3;
                    else {
                        if (197 == _ncj.ship_id) _ncm.houg = 3;
                        else {
                            if (508 == _ncj.ship_id) _ncm.houg = 4;
                            else {
                                if (509 != _ncj.ship_id) return _ncl;
                                _ncm.houg = 4;
                            }
                        }
                    }
                }
            }
            var _ncn = _ncj.get_slotnums(320);
            return _ncl = _ncm.multiply(_ncn);
        };
    },
    85495: (_nco, _ncp, _ncq) => {
        'use strict';
        var _ncr = null;
        defineModule(_ncp);
        Object.defineProperty(_ncp, '__esModule', {
            'value': true
        }), _ncp.getSlot322PersonalEffect = void 0;
        var _ncs = _ncq(74496);
        _ncp.getSlot322PersonalEffect = function(_nct) {
            var _ncu = null,
                _ncv = new _ncs.SlotItemEffectModel(),
                _ncw = new _ncs.SlotItemEffectModel();
            if (554 != _nct.ship_id && 553 != _nct.ship_id || (_ncw.houg = 5, _ncw.tyku = 2, _ncw.kaih = 2, _ncw.tais = 1), !_ncw.exists()) return _ncv;
            var _ncx = _nct.get_slotnums(322);
            return _ncv = _ncw.multiply(_ncx);
        };
    },
    65365: (_ncy, _ncz, _nd0) => {
        'use strict';
        var _nd1 = null;
        defineModule(_ncz);
        Object.defineProperty(_ncz, '__esModule', {
            'value': true
        }), _ncz.getSlot323PersonalEffect = void 0;
        var _nd2 = _nd0(74496);
        _ncz.getSlot323PersonalEffect = function(_nd3) {
            var _nd4 = null,
                _nd5 = new _nd2.SlotItemEffectModel(),
                _nd6 = new _nd2.SlotItemEffectModel();
            if (554 != _nd3.ship_id && 553 != _nd3.ship_id || (_nd6.houg = 6, _nd6.tyku = 3, _nd6.kaih = 3, _nd6.tais = 2), !_nd6.exists()) return _nd5;
            var _nd7 = _nd3.get_slotnums(323);
            return _nd5 = _nd6.multiply(_nd7);
        };
    },
    98164: (_nd8, _nd9, _nda) => {
        'use strict';
        var _ndb = null;
        defineModule(_nd9);
        Object.defineProperty(_nd9, '__esModule', {
            'value': true
        }), _nd9.getSlot324And325PersonalEffect = void 0;
        var _ndc = _nda(74496);
        _nd9.getSlot324And325PersonalEffect = function(_ndd) {
            var _nde = null,
                _ndf = new _ndc.SlotItemEffectModel(),
                _ndg = new _ndc.SlotItemEffectModel();
            if (554 == _ndd.ship_id || 646 == _ndd.ship_id ? (_ndg.houg = 2, _ndg.tais = 3, _ndg.kaih = 1) : 553 == _ndd.ship_id && (_ndg.houg = 1, _ndg.tais = 2, _ndg.kaih = 1), !_ndg.exists()) return _ndf;
            var _ndh = _ndd.get_slotnums(324) + _ndd.get_slotnums(325);
            return _ndf = _ndg.multiply(_ndh);
        };
    },
    38114: (_ndi, _ndj, _ndk) => {
        'use strict';
        var _ndl = null;
        defineModule(_ndj);
        Object.defineProperty(_ndj, '__esModule', {
            'value': true
        }), _ndj.getSlot326PersonalEffect = void 0;
        var _ndm = _ndk(74496);
        _ndj.getSlot326PersonalEffect = function(_ndn) {
            var _ndo = null,
                _ndp = new _ndm.SlotItemEffectModel(),
                _ndq = new _ndm.SlotItemEffectModel();
            if (646 == _ndn.ship_id ? (_ndq.houg = 3, _ndq.tais = 5, _ndq.kaih = 3) : 554 == _ndn.ship_id ? (_ndq.houg = 3, _ndq.tais = 4, _ndq.kaih = 2) : 553 == _ndn.ship_id && (_ndq.houg = 1, _ndq.tais = 3, _ndq.kaih = 1), !_ndq.exists()) return _ndp;
            var _ndr = _ndn.get_slotnums(326);
            return _ndp = _ndq.multiply(_ndr);
        };
    },
    21003: (_nds, _ndt, _ndu) => {
        'use strict';
        var _ndv = null;
        defineModule(_ndt);
        Object.defineProperty(_ndt, '__esModule', {
            'value': true
        }), _ndt.getSlot327PersonalEffect = void 0;
        var _ndw = _ndu(74496);
        _ndt.getSlot327PersonalEffect = function(_ndx) {
            var _ndy = null,
                _ndz = new _ndw.SlotItemEffectModel(),
                _ne0 = new _ndw.SlotItemEffectModel();
            if (646 == _ndx.ship_id ? (_ne0.houg = 5, _ne0.tais = 6, _ne0.kaih = 4) : 554 == _ndx.ship_id ? (_ne0.houg = 4, _ne0.tais = 5, _ne0.kaih = 2) : 553 == _ndx.ship_id && (_ne0.houg = 2, _ne0.tais = 4, _ne0.kaih = 1), !_ne0.exists()) return _ndz;
            var _ne1 = _ndx.get_slotnums(327);
            return _ndz = _ne0.multiply(_ne1);
        };
    },
    77010: (_ne2, _ne3, _ne4) => {
        'use strict';
        var _ne5 = null;
        defineModule(_ne3);
        Object.defineProperty(_ne3, '__esModule', {
            'value': true
        }), _ne3.getSlot328PersonalEffect = void 0;
        var _ne6 = _ne4(74496);
        _ne3.getSlot328PersonalEffect = function(_ne7) {
            var _ne8 = null,
                _ne9 = new _ne6.SlotItemEffectModel(),
                _nea = new _ne6.SlotItemEffectModel();
            if ('こんごう' == _ne7.yomi ? (_nea.houg = 1, _nea.kaih = 1, 209 == _ne7.ship_id || 149 == _ne7.ship_id ? _nea.houg += 1 : 591 == _ne7.ship_id && (_nea.houg += 2, _nea.raig += 1)) : 'ひえい' == _ne7.yomi ? (_nea.houg = 1, _nea.kaih = 1, 210 == _ne7.ship_id || 150 == _ne7.ship_id ? _nea.houg += 1 : 592 == _ne7.ship_id && (_nea.houg += 2, _nea.tyku += 1)) : 'はるな' == _ne7.yomi ? (_nea.houg = 1, _nea.kaih = 1, 211 == _ne7.ship_id || 151 == _ne7.ship_id ? _nea.houg += 1 : 593 == _ne7.ship_id ? (_nea.houg += 1, _nea.tyku += 2) : 954 == _ne7.ship_id && (_nea.houg += 2, _nea.tyku += 1)) : 'きりしま' == _ne7.yomi ? (_nea.houg = 1, _nea.kaih = 1, 212 != _ne7.ship_id && 152 != _ne7.ship_id || (_nea.houg += 1)) : ('ふそう' == _ne7.yomi || 'やましろ' == _ne7.yomi || 'いせ' == _ne7.yomi || 'ひゅうが' == _ne7.yomi) && (_nea.houg = 1), !_nea.exists()) return _ne9;
            var _neb = _ne7.get_slotnums(328);
            return _ne9 = _nea.multiply(_neb);
        };
    },
    39126: (_nec, _ned, _nee) => {
        'use strict';
        var _nef = null;
        defineModule(_ned);
        Object.defineProperty(_ned, '__esModule', {
            'value': true
        }), _ned.getSlot329PersonalEffect = void 0;
        var _neg = _nee(74496);
        _ned.getSlot329PersonalEffect = function(_neh) {
            var _nei = null,
                _nej = new _neg.SlotItemEffectModel(),
                _nek = new _neg.SlotItemEffectModel();
            if ('こんごう' == _neh.yomi ? (_nek.houg = 1, _nek.kaih = 1, 209 == _neh.ship_id ? _nek.houg += 1 : 149 == _neh.ship_id ? (_nek.houg += 2, _nek.tyku += 1) : 591 == _neh.ship_id && (_nek.houg += 3, _nek.tyku += 1, _nek.raig += 2)) : 'ひえい' == _neh.yomi ? (_nek.houg = 1, _nek.kaih = 1, 210 == _neh.ship_id ? _nek.houg += 1 : 150 == _neh.ship_id ? (_nek.houg += 2, _nek.tyku += 1) : 592 == _neh.ship_id && (_nek.houg += 3, _nek.tyku += 1, _nek.raig += 2)) : 'はるな' == _neh.yomi ? (_nek.houg = 1, _nek.kaih = 1, 211 == _neh.ship_id ? _nek.houg += 1 : 151 == _neh.ship_id ? (_nek.houg += 2, _nek.tyku += 1) : 593 == _neh.ship_id ? (_nek.houg += 2, _nek.tyku += 3, _nek.raig += 1) : 954 == _neh.ship_id && (_nek.houg += 3, _nek.tyku += 1, _nek.raig += 2)) : 'きりしま' == _neh.yomi ? (_nek.houg = 1, _nek.kaih = 1, 212 == _neh.ship_id ? _nek.houg += 1 : 152 == _neh.ship_id && (_nek.houg += 2, _nek.tyku += 1)) : ('ふそう' == _neh.yomi || 'やましろ' == _neh.yomi || 'いせ' == _neh.yomi || 'ひゅうが' == _neh.yomi) && (_nek.houg = 1), !_nek.exists()) return _nej;
            var _nel = _neh.get_slotnums(329);
            return _nej = _nek.multiply(_nel);
        };
    },
    72176: (_nem, _nen, _neo) => {
        'use strict';
        var _nep = null;
        defineModule(_nen);
        Object.defineProperty(_nen, '__esModule', {
            'value': true
        }), _nen.getSlot335PersonalEffect = void 0;
        var _neq = _neo(74496);
        _nen.getSlot335PersonalEffect = function(_ner) {
            var _nes = null,
                _net = new _neq.SlotItemEffectModel(),
                _neu = new _neq.SlotItemEffectModel();
            if (277 == _ner.ship_id || 278 == _ner.ship_id ? (_neu.tyku = 1, _neu.kaih = 1) : 594 != _ner.ship_id && 599 != _ner.ship_id && 610 != _ner.ship_id && 646 != _ner.ship_id && 698 != _ner.ship_id || (_neu.tyku = 2, _neu.kaih = 1), !_neu.exists()) return _net;
            var _nev = _ner.get_slotnums(335);
            return _net = _neu.multiply(_nev);
        };
    },
    33846: (_new, _nex, _ney) => {
        'use strict';
        var _nez = null;
        defineModule(_nex);
        Object.defineProperty(_nex, '__esModule', {
            'value': true
        }), _nex.getSlot336PersonalEffect = void 0;
        var _nf0 = _ney(74496);
        _nex.getSlot336PersonalEffect = function(_nf1) {
            var _nf2 = null,
                _nf3 = new _nf0.SlotItemEffectModel(),
                _nf4 = new _nf0.SlotItemEffectModel();
            if (277 == _nf1.ship_id || 278 == _nf1.ship_id ? (_nf4.houg = 1, _nf4.tyku = 1, _nf4.kaih = 1) : 594 != _nf1.ship_id && 599 != _nf1.ship_id && 610 != _nf1.ship_id && 646 != _nf1.ship_id && 698 != _nf1.ship_id || (_nf4.houg = 1, _nf4.tyku = 2, _nf4.kaih = 1), !_nf4.exists()) return _nf3;
            var _nf5 = _nf1.get_slotnums(336);
            return _nf3 = _nf4.multiply(_nf5);
        };
    },
    97157: (_nf6, _nf7, _nf8) => {
        'use strict';
        var _nf9 = null;
        defineModule(_nf7);
        Object.defineProperty(_nf7, '__esModule', {
            'value': true
        }), _nf7.getSlot337PersonalEffect = void 0;
        var _nfa = _nf8(74496);
        _nf7.getSlot337PersonalEffect = function(_nfb) {
            var _nfc = null,
                _nfd = new _nfa.SlotItemEffectModel(),
                _nfe = new _nfa.SlotItemEffectModel();
            if (277 == _nfb.ship_id || 278 == _nfb.ship_id ? (_nfe.houg = 1, _nfe.tyku = 1, _nfe.kaih = 1) : 594 != _nfb.ship_id && 599 != _nfb.ship_id && 610 != _nfb.ship_id && 646 != _nfb.ship_id && 698 != _nfb.ship_id || (_nfe.houg = 2, _nfe.tyku = 2, _nfe.kaih = 1), !_nfe.exists()) return _nfd;
            var _nff = _nfb.get_slotnums(337);
            return _nfd = _nfe.multiply(_nff);
        };
    },
    63406: (_nfg, _nfh, _nfi) => {
        'use strict';
        var _nfj = null;
        defineModule(_nfh);
        Object.defineProperty(_nfh, '__esModule', {
            'value': true
        }), _nfh.getSlot338PersonalEffect = void 0;
        var _nfk = _nfi(74496);
        _nfh.getSlot338PersonalEffect = function(_nfl) {
            var _nfm = null,
                _nfn = new _nfk.SlotItemEffectModel(),
                _nfo = new _nfk.SlotItemEffectModel();
            if (277 == _nfl.ship_id || 278 == _nfl.ship_id ? (_nfo.houg = 1, _nfo.tyku = 1, _nfo.kaih = 2) : 594 == _nfl.ship_id || 646 == _nfl.ship_id || 698 == _nfl.ship_id ? (_nfo.houg = 1, _nfo.tyku = 2, _nfo.kaih = 3) : 599 != _nfl.ship_id && 610 != _nfl.ship_id || (_nfo.houg = 4, _nfo.tyku = 3, _nfo.kaih = 4), !_nfo.exists()) return _nfn;
            var _nfp = _nfl.get_slotnums(338);
            return _nfn = _nfo.multiply(_nfp);
        };
    },
    66373: (_nfq, _nfr, _nfs) => {
        'use strict';
        var _nft = null;
        defineModule(_nfr);
        Object.defineProperty(_nfr, '__esModule', {
            'value': true
        }), _nfr.getSlot339PersonalEffect = void 0;
        var _nfu = _nfs(74496);
        _nfr.getSlot339PersonalEffect = function(_nfv) {
            var _nfw = null,
                _nfx = new _nfu.SlotItemEffectModel(),
                _nfy = new _nfu.SlotItemEffectModel();
            if (277 == _nfv.ship_id || 278 == _nfv.ship_id ? (_nfy.houg = 1, _nfy.tyku = 2, _nfy.kaih = 2) : 594 == _nfv.ship_id || 646 == _nfv.ship_id || 698 == _nfv.ship_id ? (_nfy.houg = 1, _nfy.tyku = 3, _nfy.kaih = 4) : 599 != _nfv.ship_id && 610 != _nfv.ship_id || (_nfy.houg = 6, _nfy.tyku = 4, _nfy.kaih = 5), !_nfy.exists()) return _nfx;
            var _nfz = _nfv.get_slotnums(339);
            return _nfx = _nfy.multiply(_nfz);
        };
    },
    19707: (_ng0, _ng1, _ng2) => {
        'use strict';
        var _ng3 = null;
        defineModule(_ng1);
        Object.defineProperty(_ng1, '__esModule', {
            'value': true
        }), _ng1.getSlot340PersonalEffect = void 0;
        var _ng4 = _ng2(74496);
        _ng1.getSlot340PersonalEffect = function(_ng5) {
            var _ng6 = null,
                _ng7 = new _ng4.SlotItemEffectModel(),
                _ng8 = new _ng4.SlotItemEffectModel();
            if ('ガリバルディ' != _ng5.yomi && 'アブルッツィ' != _ng5.yomi || (_ng8.houg = 1, _ng8.tyku = 1, _ng8.kaih = 1), !_ng8.exists()) return _ng7;
            var _ng9 = _ng5.get_slotnums(340);
            return _ng7 = _ng8.multiply(_ng9);
        };
    },
    63978: (_nga, _ngb, _ngc) => {
        'use strict';
        var _ngd = null;
        defineModule(_ngb);
        Object.defineProperty(_ngb, '__esModule', {
            'value': true
        }), _ngb.getSlot341PersonalEffect = void 0;
        var _nge = _ngc(74496);
        _ngb.getSlot341PersonalEffect = function(_ngf) {
            var _ngg = null,
                _ngh = new _nge.SlotItemEffectModel(),
                _ngi = new _nge.SlotItemEffectModel();
            if ('ガリバルディ' == _ngf.yomi || 'アブルッツィ' == _ngf.yomi ? (_ngi.houg = 2, _ngi.tyku = 1, _ngi.kaih = 1) : 'ゴトランド' == _ngf.yomi && (_ngi.houg = 1, _ngi.tyku = 1, _ngi.kaih = 1), !_ngi.exists()) return _ngh;
            var _ngj = _ngf.get_slotnums(341);
            return _ngh = _ngi.multiply(_ngj);
        };
    },
    92382: (_ngk, _ngl, _ngm) => {
        'use strict';
        var _ngn = null;
        defineModule(_ngl);
        Object.defineProperty(_ngl, '__esModule', {
            'value': true
        }), _ngl.getSlot342PersonalEffect = void 0;
        var _ngo = _ngm(74496);
        _ngl.getSlot342PersonalEffect = function(_ngp) {
            var _ngq = null,
                _ngr = new _ngo.SlotItemEffectModel(),
                _ngs = new _ngo.SlotItemEffectModel();
            if (277 == _ngp.ship_id || 278 == _ngp.ship_id || 461 == _ngp.ship_id || 466 == _ngp.ship_id || 462 == _ngp.ship_id || 467 == _ngp.ship_id ? _ngs.houg = 1 : 594 == _ngp.ship_id || 646 == _ngp.ship_id || 698 == _ngp.ship_id ? (_ngs.houg = 2, _ngs.tyku = 1, _ngs.kaih = 1) : 599 != _ngp.ship_id && 610 != _ngp.ship_id || (_ngs.houg = 3, _ngs.tyku = 2, _ngs.kaih = 2), !_ngs.exists()) return _ngr;
            var _ngt = _ngp.get_slotnums(342);
            return _ngr = _ngs.multiply(_ngt);
        };
    },
    78415: (_ngu, _ngv, _ngw) => {
        'use strict';
        var _ngx = null;
        defineModule(_ngv);
        Object.defineProperty(_ngv, '__esModule', {
            'value': true
        }), _ngv.getSlot343PersonalEffect = void 0;
        var _ngy = _ngw(74496);
        _ngv.getSlot343PersonalEffect = function(_ngz) {
            var _nh0 = null,
                _nh1 = new _ngy.SlotItemEffectModel(),
                _nh2 = new _ngy.SlotItemEffectModel();
            if (277 == _ngz.ship_id || 278 == _ngz.ship_id ? _nh2.houg = 2 : 461 == _ngz.ship_id || 466 == _ngz.ship_id || 462 == _ngz.ship_id || 467 == _ngz.ship_id ? _nh2.houg = 1 : 594 == _ngz.ship_id || 646 == _ngz.ship_id || 698 == _ngz.ship_id ? (_nh2.houg = 3, _nh2.tyku = 2, _nh2.kaih = 1) : 599 != _ngz.ship_id && 610 != _ngz.ship_id || (_nh2.houg = 5, _nh2.tyku = 3, _nh2.kaih = 3), !_nh2.exists()) return _nh1;
            var _nh3 = _ngz.get_slotnums(343);
            return _nh1 = _nh2.multiply(_nh3);
        };
    },
    23090: (_nh4, _nh5, _nh6) => {
        'use strict';
        var _nh7 = null;
        defineModule(_nh5);
        Object.defineProperty(_nh5, '__esModule', {
            'value': true
        }), _nh5.getSlot344PersonalEffect = void 0;
        var _nh8 = _nh6(74496);
        _nh5.getSlot344PersonalEffect = function(_nh9) {
            var _nha = null,
                _nhb = new _nh8.SlotItemEffectModel(),
                _nhc = new _nh8.SlotItemEffectModel();
            if (599 == _nh9.ship_id || 610 == _nh9.ship_id ? _nhc.houg = 3 : 555 == _nh9.ship_id || 560 == _nh9.ship_id ? (_nhc.houg = 2, _nhc.tais = 2) : 318 == _nh9.ship_id ? (_nhc.houg = 4, _nhc.tais = 1) : 282 == _nh9.ship_id ? (_nhc.houg = 2, _nhc.tais = 1) : 888 == _nh9.ship_id ? (_nhc.houg = 4, _nhc.tais = 2) : 883 == _nh9.ship_id && (_nhc.houg = 5, _nhc.tais = 2), !_nhc.exists()) return _nhb;
            var _nhd = _nh9.get_slotnums(344);
            return _nhb = _nhc.multiply(_nhd);
        };
    },
    18776: (_nhe, _nhf, _nhg) => {
        'use strict';
        var _nhh = null;
        defineModule(_nhf);
        Object.defineProperty(_nhf, '__esModule', {
            'value': true
        }), _nhf.getSlot345PersonalEffect = void 0;
        var _nhi = _nhg(74496);
        _nhf.getSlot345PersonalEffect = function(_nhj) {
            var _nhk = null,
                _nhl = new _nhi.SlotItemEffectModel(),
                _nhm = new _nhi.SlotItemEffectModel();
            if (599 == _nhj.ship_id || 610 == _nhj.ship_id ? (_nhm.houg = 3, _nhm.kaih = 1) : 555 == _nhj.ship_id || 560 == _nhj.ship_id ? (_nhm.houg = 3, _nhm.tais = 2, _nhm.kaih = 2) : 318 == _nhj.ship_id ? (_nhm.houg = 5, _nhm.tais = 1, _nhm.kaih = 2) : 282 == _nhj.ship_id ? (_nhm.houg = 3, _nhm.tais = 1, _nhm.kaih = 1) : 888 == _nhj.ship_id ? (_nhm.houg = 4, _nhm.tais = 2, _nhm.kaih = 2) : 883 == _nhj.ship_id && (_nhm.houg = 5, _nhm.tais = 2, _nhm.kaih = 3), !_nhm.exists()) return _nhl;
            var _nhn = _nhj.get_slotnums(345);
            return _nhl = _nhm.multiply(_nhn);
        };
    },
    89058: (_nho, _nhp, _nhq) => {
        'use strict';
        var _nhr = null;
        defineModule(_nhp);
        Object.defineProperty(_nhp, '__esModule', {
            'value': true
        }), _nhp.getSlot346PersonalEffect = void 0;
        var _nhs = _nhq(74496);
        _nhp.getSlot346PersonalEffect = function(_nht) {
            var _nhu = null,
                _nhv = new _nhs.SlotItemEffectModel();
            return 'やましおまる' == _nht.yomi && (_nhv.kaih += 1, _nhv.tais += 1), _nhv;
        };
    },
    84372: (_nhw, _nhx, _nhy) => {
        'use strict';
        var _nhz = null;
        defineModule(_nhx);
        Object.defineProperty(_nhx, '__esModule', {
            'value': true
        }), _nhx.getSlot347PersonalEffect = void 0;
        var _ni0 = _nhy(74496);
        _nhx.getSlot347PersonalEffect = function(_ni1) {
            var _ni2 = null,
                _ni3 = new _ni0.SlotItemEffectModel();
            return 'やましおまる' == _ni1.yomi && (_ni3.kaih += 2, _ni3.tais += 2), _ni3;
        };
    },
    39656: (_ni4, _ni5, _ni6) => {
        'use strict';
        var _ni7 = null;
        defineModule(_ni5);
        Object.defineProperty(_ni5, '__esModule', {
            'value': true
        }), _ni5.getSlot356_357PersonalEffect = void 0;
        var _ni8 = _ni6(74496);
        _ni5.getSlot356_357PersonalEffect = function(_ni9) {
            var _nia = null,
                _nib = new _ni8.SlotItemEffectModel(),
                _nic = new _ni8.SlotItemEffectModel();
            if (95 == _ni9.ctype ? _nic.houg = 2 : 9 == _ni9.ctype && (_nic.houg = 1), !_nic.exists()) return _nib;
            var _nid = _ni9.get_slotnums(356) + _ni9.get_slotnums(357);
            return _nib = _nic.multiply(_nid);
        };
    },
    66039: (_nie, _nif, _nig) => {
        'use strict';
        var _nih = null;
        defineModule(_nif);
        Object.defineProperty(_nif, '__esModule', {
            'value': true
        }), _nif.getSlot358PersonalEffect = void 0;
        var _nii = _nig(74496);
        _nif.getSlot358PersonalEffect = function(_nij) {
            var _nik = null,
                _nil = new _nii.SlotItemEffectModel(),
                _nim = new _nii.SlotItemEffectModel();
            if ('アメリカ' != _nij.getCountryName() && 67 != _nij.ctype && 78 != _nij.ctype && 82 != _nij.ctype && 88 != _nij.ctype && 108 != _nij.ctype && 112 != _nij.ctype) return _nil;
            _nim.houg += 1, _nim.kaih += 1, _nim.tyku += 1, 95 == _nij.ctype && (_nim.houg += 1, _nim.kaih += 2, _nim.tyku += 2);
            var _nin = _nij.get_slotnums(358);
            return _nil = _nim.multiply(_nin);
        };
    },
    64679: (_nio, _nip, _niq) => {
        'use strict';
        var _nir = null;
        defineModule(_nip);
        Object.defineProperty(_nip, '__esModule', {
            'value': true
        }), _nip.getSlot359PersonalEffect = void 0;
        var _nis = _niq(74496);
        _nip.getSlot359PersonalEffect = function(_nit) {
            var _niu = null,
                _niv = new _nis.SlotItemEffectModel(),
                _niw = new _nis.SlotItemEffectModel();
            if ('パース' == _nit.yomi ? (_niw.houg = 2, _niw.tyku = 2, _niw.kaih = 1) : 'ゆうばり' == _nit.yomi && (_niw.houg = 1, _niw.tyku = 1, _niw.kaih = 1), 622 != _nit.ship_id && 623 != _nit.ship_id && 624 != _nit.ship_id || (_niw.houg += 1, _niw.tyku += 1), !_niw.exists()) return _niv;
            var _nix = _nit.get_slotnums(359);
            return _niv = _niw.multiply(_nix);
        };
    },
    69954: (_niy, _niz, _nj0) => {
        'use strict';
        var _nj1 = null;
        defineModule(_niz);
        Object.defineProperty(_niz, '__esModule', {
            'value': true
        }), _niz.getSlot35PersonalEffect = void 0;
        var _nj2 = _nj0(74496);
        _niz.getSlot35PersonalEffect = function(_nj3) {
            var _nj4 = null,
                _nj5 = new _nj2.SlotItemEffectModel(),
                _nj6 = new _nj2.SlotItemEffectModel();
            return 149 == _nj3.ship_id || 591 == _nj3.ship_id || 592 == _nj3.ship_id ? (_nj6.houg += 1, _nj6.tyku += 1) : 150 == _nj3.ship_id ? _nj6.tyku += 1 : 151 == _nj3.ship_id || 593 == _nj3.ship_id || 954 == _nj3.ship_id ? (_nj6.tyku += 1, _nj6.kaih += 1) : 152 == _nj3.ship_id && (_nj6.houg += 1), _nj6.exists() ? _nj5 = _nj6.multiply(1) : _nj5;
        };
    },
    95953: (_nj7, _nj8, _nj9) => {
        'use strict';
        var _nja = null;
        defineModule(_nj8);
        Object.defineProperty(_nj8, '__esModule', {
            'value': true
        }), _nj8.getSlot360_361PersonalEffect = void 0;
        var _njb = _nj9(74496);
        _nj8.getSlot360_361PersonalEffect = function(_njc) {
            var _njd = null,
                _nje = new _njb.SlotItemEffectModel(),
                _njf = new _njb.SlotItemEffectModel();
            if ('デ・ロイテル' == _njc.yomi ? (_njf.houg = 2, _njf.tyku = 2, _njf.kaih = 1) : 'ゴトランド' == _njc.yomi && (_njf.houg = 2, _njf.tyku = 1, _njf.kaih = 1), 41 == _njc.ctype && (_njf.houg = 1, _njf.tyku = 1), !_njf.exists()) return _nje;
            var _njg = _njc.get_slotnums(360) + _njc.get_slotnums(361);
            return _nje = _njf.multiply(_njg);
        };
    },
    86384: (_njh, _nji, _njj) => {
        'use strict';
        var _njk = null;
        defineModule(_nji);
        Object.defineProperty(_nji, '__esModule', {
            'value': true
        }), _nji.getSlot362_363PersonalEffect = void 0;
        var _njl = _njj(74496);
        _nji.getSlot362_363PersonalEffect = function(_njm) {
            var _njn = null,
                _njo = new _njl.SlotItemEffectModel(),
                _njp = new _njl.SlotItemEffectModel(),
                _njq = false;
            if (99 == _njm.ctype ? (_njp.houg = 1, _njp.tyku = 2, _njp.kaih = 1, _njq = true) : 34 == _njm.ctype || 21 == _njm.ctype ? (_njp.houg = -3, _njp.tyku = -3, _njp.kaih = -8, _njq = true) : 4 == _njm.ctype || 20 == _njm.ctype || 16 == _njm.ctype ? (_njp.houg = -3, _njp.tyku = -2, _njp.kaih = -6, _njq = true) : 89 == _njm.ctype || 56 == _njm.ctype ? (_njp.houg = -2, _njp.tyku = -1, _njp.kaih = -4, _njq = true) : 52 != _njm.ctype && 41 != _njm.ctype && 98 != _njm.ctype || (_njp.tyku = -1, _njp.kaih = -2, _njq = true), 'アメリカ' == _njm.getCountryName() && (_njp.tyku += 1, _njp.kaih += 1, _njq = true), 0 == _njq) return _njo;
            var _njr = _njm.get_slotnums(362) + _njm.get_slotnums(363);
            return _njo = _njp.multiply(_njr);
        };
    },
    65345: (_njs, _njt, _nju) => {
        'use strict';
        var _njv = null;
        defineModule(_njt);
        Object.defineProperty(_njt, '__esModule', {
            'value': true
        }), _njt.getSlot364PersonalEffect = void 0;
        var _njw = _nju(74496);
        _njt.getSlot364PersonalEffect = function(_njx) {
            var _njy = null;
            new _njw.SlotItemEffectModel();
            var _njz = new _njw.SlotItemEffectModel();
            623 == _njx.ship_id || 586 == _njx.ship_id || 119 == _njx.ship_id || 118 == _njx.ship_id || 657 == _njx.ship_id || 506 == _njx.ship_id || 668 == _njx.ship_id || 507 == _njx.ship_id ? (_njz.raig = 1, _njz.kaih = -2, 119 == _njx.ship_id ? _njz.raig += 1 : 507 == _njx.ship_id ? _njz.raig += 2 : 623 == _njx.ship_id && (_njz.houg += 1, _njz.raig += 3)) : (_njz.houg = -1, _njz.kaih = -7);
            var _nk0 = _njx.get_slotnums(364);
            return _njz.multiply(_nk0);
        };
    },
    46514: (_nk1, _nk2, _nk3) => {
        'use strict';
        var _nk4 = null;
        defineModule(_nk2);
        Object.defineProperty(_nk2, '__esModule', {
            'value': true
        }), _nk2.getSlot365PersonalEffect = void 0;
        var _nk5 = _nk3(74496);
        _nk2.getSlot365PersonalEffect = function(_nk6) {
            var _nk7 = null,
                _nk8 = new _nk5.SlotItemEffectModel(),
                _nk9 = new _nk5.SlotItemEffectModel(),
                _nka = false;
            return 37 != _nk6.ctype && 19 != _nk6.ctype && 2 != _nk6.ctype && 26 != _nk6.ctype && 6 != _nk6.ctype || (_nk9.houg += 1, _nka = true), 136 != _nk6.ship_id && 148 != _nk6.ship_id && 546 != _nk6.ship_id && 541 != _nk6.ship_id && 573 != _nk6.ship_id && 911 != _nk6.ship_id && 916 != _nk6.ship_id && 593 != _nk6.ship_id || (_nk9.houg += 1, _nka = true), 591 != _nk6.ship_id && 592 != _nk6.ship_id && 954 != _nk6.ship_id || (_nk9.houg += 2, _nka = true), 0 == _nka ? _nk8 : _nk8 = _nk9.multiply(1);
        };
    },
    81976: (_nkb, _nkc, _nkd) => {
        'use strict';
        var _nke = null;
        defineModule(_nkc);
        Object.defineProperty(_nkc, '__esModule', {
            'value': true
        }), _nkc.getSlot367PersonalEffect = void 0;
        var _nkf = _nkd(74496);
        _nkc.getSlot367PersonalEffect = function(_nkg) {
            var _nkh = null,
                _nki = new _nkf.SlotItemEffectModel(),
                _nkj = new _nkf.SlotItemEffectModel(),
                _nkk = false;
            if ('ゴトランド' == _nkg.yomi && (_nkj.houg += 2, _nkj.tais += 1, _nkj.kaih += 1, _nkj.saku += 1, _nkk = true), 70 == _nkg.ctype ? (_nkj.houg += 1, _nkj.tais += 1, _nkj.kaih += 1, _nkj.saku += 1, _nkk = true) : 72 == _nkg.ctype || 62 == _nkg.ctype ? (_nkj.houg += 1, _nkj.kaih += 1, _nkj.saku += 1, _nkk = true) : 67 != _nkg.ctype && 78 != _nkg.ctype && 82 != _nkg.ctype && 88 != _nkg.ctype && 108 != _nkg.ctype && 112 != _nkg.ctype || (_nkj.houg += 2, _nkj.kaih += 2, _nkj.saku += 2, _nkk = true), 0 == _nkk) return _nki;
            var _nkl = _nkg.get_slotnums(367);
            return _nki = _nkj.multiply(_nkl);
        };
    },
    89331: (_nkm, _nkn, _nko) => {
        'use strict';
        var _nkp = null;
        defineModule(_nkn);
        Object.defineProperty(_nkn, '__esModule', {
            'value': true
        }), _nkn.getSlot368PersonalEffect = void 0;
        var _nkq = _nko(74496);
        _nkn.getSlot368PersonalEffect = function(_nkr) {
            var _nks = null,
                _nkt = new _nkq.SlotItemEffectModel(),
                _nku = new _nkq.SlotItemEffectModel(),
                _nkv = false;
            if ('ゴトランド' == _nkr.yomi && (_nku.houg = 4, _nku.tais = 3, _nku.kaih = 2, _nku.saku = 3, _nkv = true, 630 == _nkr.ship_id && (_nkt.houg += 2, _nkt.raig += 2, _nkt.kaih += 1, _nkt.saku += 1)), 70 == _nkr.ctype ? (_nku.houg = 2, _nku.tais = 3, _nku.kaih = 1, _nku.saku = 2, _nkv = true) : 72 == _nkr.ctype || 62 == _nkr.ctype ? (_nku.houg += 1, _nku.tais += 2, _nku.kaih += 1, _nku.saku += 2, _nkv = true) : 67 != _nkr.ctype && 78 != _nkr.ctype && 82 != _nkr.ctype && 88 != _nkr.ctype && 108 != _nkr.ctype && 112 != _nkr.ctype || (_nku.houg += 2, _nku.tais += 2, _nku.kaih += 2, _nku.saku += 2, _nkv = true), 0 == _nkv) return _nkt;
            var _nkw = _nkr.get_slotnums(368);
            return _nkt.add(_nku.multiply(_nkw)), _nkt;
        };
    },
    73973: (_nkx, _nky, _nkz) => {
        'use strict';
        var _nl0 = null;
        defineModule(_nky);
        Object.defineProperty(_nky, '__esModule', {
            'value': true
        }), _nky.getSlot369PersonalEffect = void 0;
        var _nl1 = _nkz(74496);
        _nky.getSlot369PersonalEffect = function(_nl2) {
            var _nl3 = null,
                _nl4 = new _nl1.SlotItemEffectModel(),
                _nl5 = new _nl1.SlotItemEffectModel(),
                _nl6 = false;
            if ('ゴトランド' == _nl2.yomi && (_nl5.houg = 5, _nl5.tais = 4, _nl5.kaih = 4, _nl5.saku = 3, _nl6 = true, 630 == _nl2.ship_id && (_nl4.houg += 3, _nl4.raig += 3, _nl4.kaih += 2, _nl4.saku += 2)), 70 == _nl2.ctype ? (_nl5.houg += 3, _nl5.tais += 3, _nl5.kaih += 2, _nl5.saku += 3, _nl6 = true) : 72 == _nl2.ctype || 62 == _nl2.ctype ? (_nl5.houg += 2, _nl5.tais += 2, _nl5.kaih += 1, _nl5.saku += 2, _nl6 = true) : 67 != _nl2.ctype && 78 != _nl2.ctype && 82 != _nl2.ctype && 88 != _nl2.ctype && 108 != _nl2.ctype && 112 != _nl2.ctype || (_nl5.houg += 2, _nl5.tais += 2, _nl5.kaih += 2, _nl5.saku += 2, _nl6 = true), 0 == _nl6) return _nl4;
            var _nl7 = _nl2.get_slotnums(369);
            return _nl4.add(_nl5.multiply(_nl7)), _nl4;
        };
    },
    21178: (_nl8, _nl9, _nla) => {
        'use strict';
        var _nlb = null;
        defineModule(_nl9);
        Object.defineProperty(_nl9, '__esModule', {
            'value': true
        }), _nl9.getSlot370PersonalEffect = void 0;
        var _nlc = _nla(74496);
        _nl9.getSlot370PersonalEffect = function(_nld) {
            var _nle = null,
                _nlf = new _nlc.SlotItemEffectModel(),
                _nlg = new _nlc.SlotItemEffectModel(),
                _nlh = false;
            if ('ゴトランド' == _nld.yomi && (_nlg.houg = 1, _nlg.tais = 3, _nlg.kaih = 1, _nlg.saku = 2, _nlh = true), 70 == _nld.ctype ? (_nlg.houg += 1, _nlg.tais += 3, _nlg.kaih += 1, _nlg.saku += 1, _nlh = true) : 72 == _nld.ctype || 62 == _nld.ctype ? (_nlg.houg += 1, _nlg.tais += 2, _nlg.kaih += 1, _nlg.saku += 1, _nlh = true) : 67 != _nld.ctype && 78 != _nld.ctype && 82 != _nld.ctype && 88 != _nld.ctype && 108 != _nld.ctype && 112 != _nld.ctype || (_nlg.houg += 2, _nlg.tais += 3, _nlg.kaih += 2, _nlg.saku += 2, _nlh = true, 'ウォースパイト' == _nld.yomi && (_nlf.houg += 4, _nlf.kaih += 1, _nlf.saku += 1)), 0 == _nlh) return _nlf;
            var _nli = _nld.get_slotnums(370);
            return _nlf.add(_nlg.multiply(_nli)), _nlf;
        };
    },
    5079: (_nlj, _nlk, _nll) => {
        'use strict';
        var _nlm = null;
        defineModule(_nlk);
        Object.defineProperty(_nlk, '__esModule', {
            'value': true
        }), _nlk.getSlot371PersonalEffect = void 0;
        var _nln = _nll(74496);
        _nlk.getSlot371PersonalEffect = function(_nlo) {
            var _nlp = null,
                _nlq = new _nln.SlotItemEffectModel(),
                _nlr = new _nln.SlotItemEffectModel(),
                _nls = false;
            if ('ゴトランド' == _nlo.yomi && (_nlr.houg = 4, _nlr.tais = 2, _nlr.kaih = 3, _nlr.saku = 6, _nls = true, 630 == _nlo.ship_id && (_nlq.houg += 2, _nlq.kaih += 2, _nlq.saku += 3)), 70 == _nlo.ctype ? (_nlr.houg += 2, _nlr.tais += 1, _nlr.kaih += 2, _nlr.saku += 4, _nls = true) : 79 == _nlo.ctype ? (_nlr.houg += 2, _nlr.kaih += 1, _nlr.saku += 3, _nls = true) : 67 != _nlo.ctype && 78 != _nlo.ctype && 82 != _nlo.ctype && 88 != _nlo.ctype && 108 != _nlo.ctype && 112 != _nlo.ctype || (_nlr.houg += 3, _nlr.tais += 1, _nlr.kaih += 2, _nlr.saku += 3, _nls = true, 88 == _nlo.ctype && (_nlq.houg += 3, _nlq.kaih += 2, _nlq.saku += 2)), 0 == _nls) return _nlq;
            var _nlt = _nlo.get_slotnums(371);
            return _nlq.add(_nlr.multiply(_nlt)), _nlq;
        };
    },
    95014: (_nlu, _nlv, _nlw) => {
        'use strict';
        var _nlx = null;
        defineModule(_nlv);
        Object.defineProperty(_nlv, '__esModule', {
            'value': true
        }), _nlv.getSlot372PersonalEffect = void 0;
        var _nly = _nlw(74496);
        _nlv.getSlot372PersonalEffect = function(_nlz) {
            var _nm0 = null,
                _nm1 = new _nly.SlotItemEffectModel(),
                _nm2 = false,
                _nm3 = new _nly.SlotItemEffectModel();
            if ('しょうかく' == _nlz.yomi || 'ずいかく' == _nlz.yomi || 'たいほう' == _nlz.yomi ? (_nm3.houg += 1, _nm2 = true, _nm1.raig += 1) : 'じゅんよう' != _nlz.yomi && 'ひよう' != _nlz.yomi || (_nm3.houg += 1, _nm2 = true), 108 == _nlz.ship_id || 109 == _nlz.ship_id || 291 == _nlz.ship_id || 292 == _nlz.ship_id || 296 == _nlz.ship_id || 297 == _nlz.ship_id ? (_nm3.houg += 1, _nm2 = true) : 116 == _nlz.ship_id || 74 == _nlz.ship_id || 117 == _nlz.ship_id || 282 == _nlz.ship_id || 185 == _nlz.ship_id ? (_nm3.tais += 1, _nm2 = true) : 560 == _nlz.ship_id || 555 == _nlz.ship_id || 318 == _nlz.ship_id ? (_nm3.tais += 1, _nm2 = true, _nm1.raig += 1) : 508 == _nlz.ship_id || 509 == _nlz.ship_id ? (_nm3.houg += 1, _nm2 = true) : 883 != _nlz.ship_id && 888 != _nlz.ship_id || (_nm3.houg += 2, _nm3.tais += 1, _nm2 = true, _nm1.raig += 2), 0 == _nm2) return _nm1;
            var _nm4 = _nlz.get_slotnums(372);
            return _nm1.add(_nm3.multiply(_nm4)), _nm1;
        };
    },
    53099: (_nm5, _nm6, _nm7) => {
        'use strict';
        var _nm8 = null;
        defineModule(_nm6);
        Object.defineProperty(_nm6, '__esModule', {
            'value': true
        }), _nm6.getSlot373PersonalEffect = void 0;
        var _nm9 = _nm7(74496);
        _nm6.getSlot373PersonalEffect = function(_nma) {
            var _nmb = null,
                _nmc = new _nm9.SlotItemEffectModel(),
                _nmd = new _nm9.SlotItemEffectModel(),
                _nme = false;
            if ('しょうかく' == _nma.yomi ? (_nmd.houg += 2, _nme = true, _nmc.raig += 2, _nmc.kaih += 2) : 'ずいかく' == _nma.yomi ? (_nmd.houg += 1, _nme = true, _nmc.raig += 2, _nmc.kaih += 3) : 'たいほう' == _nma.yomi ? (_nmd.houg += 1, _nme = true, _nmc.raig += 2, _nmc.kaih += 2) : 'じゅんよう' != _nma.yomi && 'ひよう' != _nma.yomi || (_nmd.houg += 1, _nme = true, _nmc.raig += 1, _nmc.kaih += 1), 108 == _nma.ship_id || 109 == _nma.ship_id ? (_nmd.houg += 1, _nme = true) : 291 == _nma.ship_id || 292 == _nma.ship_id ? (_nmd.houg += 1, _nme = true, _nmc.raig += 1) : 296 == _nma.ship_id || 297 == _nma.ship_id ? (_nmd.houg += 1, _nme = true, _nmc.raig += 1, _nmc.kaih += 1) : 116 == _nma.ship_id || 74 == _nma.ship_id ? (_nmd.tais += 1, _nme = true) : 117 == _nma.ship_id || 282 == _nma.ship_id || 185 == _nma.ship_id ? (_nmd.houg += 1, _nmd.tais += 1, _nme = true, _nmc.raig += 1) : 560 == _nma.ship_id || 555 == _nma.ship_id || 318 == _nma.ship_id ? (_nmd.houg += 1, _nmd.tais += 2, _nme = true, _nmc.raig += 1, _nmc.kaih += 1) : 508 == _nma.ship_id || 509 == _nma.ship_id ? (_nmd.houg += 1, _nme = true, _nmc.raig += 2, _nmc.kaih += 2) : 888 == _nma.ship_id ? (_nmd.houg += 2, _nmd.tais += 2, _nme = true, _nmc.raig += 2, _nmc.kaih += 2) : 883 == _nma.ship_id && (_nmd.houg += 1, _nmd.tais += 2, _nme = true, _nmc.raig += 3, _nmc.kaih += 4), 0 == _nme) return _nmc;
            var _nmf = _nma.get_slotnums(373);
            return _nmc.add(_nmd.multiply(_nmf)), _nmc;
        };
    },
    76201: (_nmg, _nmh, _nmi) => {
        'use strict';
        var _nmj = null;
        defineModule(_nmh);
        Object.defineProperty(_nmh, '__esModule', {
            'value': true
        }), _nmh.getSlot374PersonalEffect = void 0;
        var _nmk = _nmi(74496);
        _nmh.getSlot374PersonalEffect = function(_nml) {
            var _nmm = null,
                _nmn = new _nmk.SlotItemEffectModel(),
                _nmo = new _nmk.SlotItemEffectModel(),
                _nmp = false;
            if ('しょうかく' == _nml.yomi ? (_nmo.houg += 3, _nmp = true, _nmn.raig += 3, _nmn.kaih += 3) : 'ずいかく' == _nml.yomi ? (_nmo.houg += 2, _nmp = true, _nmn.raig += 3, _nmn.kaih += 4) : 'たいほう' == _nml.yomi ? (_nmo.houg += 2, _nmp = true, _nmn.raig += 3, _nmn.kaih += 2) : 'じゅんよう' != _nml.yomi && 'ひよう' != _nml.yomi || (_nmo.houg += 1, _nmp = true, _nmn.raig += 2, _nmn.kaih += 2), 108 == _nml.ship_id || 109 == _nml.ship_id ? (_nmo.houg += 1, _nmp = true, _nmn.raig += 1) : 291 == _nml.ship_id || 292 == _nml.ship_id ? (_nmo.houg += 1, _nmo.tais += 1, _nmp = true, _nmn.raig += 1) : 296 == _nml.ship_id || 297 == _nml.ship_id ? (_nmo.houg += 1, _nmo.tais += 1, _nmp = true, _nmn.raig += 1, _nmn.kaih += 1) : 116 == _nml.ship_id || 74 == _nml.ship_id ? (_nmo.houg += 1, _nmo.tais += 1, _nmp = true) : 117 == _nml.ship_id || 282 == _nml.ship_id || 185 == _nml.ship_id ? (_nmo.houg += 1, _nmo.tais += 2, _nmp = true, _nmn.raig += 1, _nmn.kaih += 1) : 560 == _nml.ship_id || 555 == _nml.ship_id || 318 == _nml.ship_id ? (_nmo.houg += 1, _nmo.tais += 3, _nmp = true, _nmn.raig += 1, _nmn.kaih += 2) : 508 == _nml.ship_id || 509 == _nml.ship_id ? (_nmo.houg += 1, _nmo.tais += 2, _nmp = true, _nmn.raig += 2, _nmn.kaih += 3) : 888 == _nml.ship_id ? (_nmo.houg += 3, _nmo.tais += 3, _nmp = true, _nmn.raig += 2, _nmn.kaih += 3) : 883 == _nml.ship_id && (_nmo.houg += 2, _nmo.tais += 3, _nmp = true, _nmn.raig += 3, _nmn.kaih += 5), 0 == _nmp) return _nmn;
            var _nmq = _nml.get_slotnums(374);
            return _nmn.add(_nmo.multiply(_nmq)), _nmn;
        };
    },
    24931: (_nmr, _nms, _nmt) => {
        'use strict';
        var _nmu = null;
        defineModule(_nms);
        Object.defineProperty(_nms, '__esModule', {
            'value': true
        }), _nms.getSlot375PersonalEffect = void 0;
        var _nmv = _nmt(74496);
        _nms.getSlot375PersonalEffect = function(_nmw) {
            var _nmx = null,
                _nmy = new _nmv.SlotItemEffectModel(),
                _nmz = new _nmv.SlotItemEffectModel(),
                _nn0 = false;
            if (69 != _nmw.ctype && 83 != _nmw.ctype && 84 != _nmw.ctype && 105 != _nmw.ctype && 116 != _nmw.ctype && 118 != _nmw.ctype || (_nmz.tyku += 3, _nmz.houg += 3, _nmz.kaih += 3, _nmz.tais += 3, _nn0 = true), 'かが' == _nmw.yomi && (_nmz.tyku += 1, _nmz.houg += 1, _nmz.kaih += 1, _nmz.tais += 1, _nn0 = true), 0 == _nn0) return _nmy;
            var _nn1 = _nmw.get_slotnums(375);
            return _nmy.add(_nmz.multiply(_nn1)), _nmy;
        };
    },
    60978: (_nn2, _nn3, _nn4) => {
        'use strict';
        var _nn5 = null;
        defineModule(_nn3);
        Object.defineProperty(_nn3, '__esModule', {
            'value': true
        }), _nn3.getSlot376PersonalEffect = void 0;
        var _nn6 = _nn4(74496);
        _nn3.getSlot376PersonalEffect = function(_nn7) {
            var _nn8 = null,
                _nn9 = new _nn6.SlotItemEffectModel(),
                _nna = new _nn6.SlotItemEffectModel(),
                _nnb = false;
            if ('アメリカ' == _nn7.getCountryName() ? (_nna.houg += 2, _nna.raig += 4, _nnb = true) : 67 == _nn7.ctype || 78 == _nn7.ctype || 82 == _nn7.ctype || 88 == _nn7.ctype || 108 == _nn7.ctype || 112 == _nn7.ctype ? (_nna.houg += 1, _nna.raig += 2, _nnb = true) : 96 == _nn7.ctype && (_nna.houg += 1, _nna.raig += 1, _nnb = true), 0 == _nnb) return _nn9;
            var _nnc = _nn7.get_slotnums(376);
            return _nn9.add(_nna.multiply(_nnc)), _nn9;
        };
    },
    74312: (_nnd, _nne, _nnf) => {
        'use strict';
        var _nng = null;
        defineModule(_nne);
        Object.defineProperty(_nne, '__esModule', {
            'value': true
        }), _nne.getSlot377PersonalEffect = void 0;
        var _nnh = _nnf(74496);
        _nne.getSlot377PersonalEffect = function(_nni) {
            var _nnj = null,
                _nnk = new _nnh.SlotItemEffectModel();
            return 'アメリカ' == _nni.getCountryName() ? (_nnk.tais += 2, _nnk.kaih += 1, 629 == _nni.ship_id && (_nnk.tais += 1, _nnk.kaih += 2)) : 67 != _nni.ctype && 78 != _nni.ctype && 82 != _nni.ctype && 88 != _nni.ctype && 108 != _nni.ctype && 112 != _nni.ctype && 96 != _nni.ctype || (_nnk.tais += 1, _nnk.kaih += 1), 651 != _nni.ship_id && 656 != _nni.ship_id || (_nnk.tais += 1, _nnk.kaih += 2), _nnk;
        };
    },
    54350: (_nnl, _nnm, _nnn) => {
        'use strict';
        var _nno = null;
        defineModule(_nnm);
        Object.defineProperty(_nnm, '__esModule', {
            'value': true
        }), _nnm.getSlot378PersonalEffect = void 0;
        var _nnp = _nnn(74496);
        _nnm.getSlot378PersonalEffect = function(_nnq) {
            var _nnr = null,
                _nns = new _nnp.SlotItemEffectModel();
            return 'アメリカ' == _nnq.getCountryName() ? (_nns.tais += 3, _nns.kaih += 1, 629 == _nnq.ship_id && (_nns.tais += 1, _nns.kaih += 1)) : 67 == _nnq.ctype || 78 == _nnq.ctype || 82 == _nnq.ctype || 88 == _nnq.ctype || 108 == _nnq.ctype || 112 == _nnq.ctype ? (_nns.tais += 2, _nns.kaih += 1) : 96 == _nnq.ctype && (_nns.tais += 1, _nns.kaih += 1), 651 != _nnq.ship_id && 656 != _nnq.ship_id || (_nns.tais += 1, _nns.kaih += 1), _nns;
        };
    },
    26262: function(_nnt, _nnu, _nnv) {
        'use strict';
        var _nnw = null;
        var _nnx = this && this.__importDefault || function(_nny) {
            var _nnz = null;
            return _nny && _nny.__esModule ? _nny : {
                'default': _nny
            };
        };
        defineModule(_nnu);
        Object.defineProperty(_nnu, '__esModule', {
            'value': true
        }), _nnu.getSlot379PersonalEffect = void 0;
        var _no0 = _nnv(74496),
            _no1 = _nnx(_nnv(18622));
        _nnu.getSlot379PersonalEffect = function(_no2) {
            var _no3 = null,
                _no4 = new _no0.SlotItemEffectModel(),
                _no5 = false,
                _no6 = new _no0.SlotItemEffectModel();
            if (1 == _no2.stype ? (_no6.tyku += 2, _no6.houg += 1, _no5 = true) : 21 != _no2.stype && 16 != _no2.stype || (_no6.tyku += 1, _no6.houg += 1, _no5 = true), 66 == _no2.ctype || 28 == _no2.ctype ? (_no6.houg += 1, _no6.tyku += 2, _no5 = true) : 101 == _no2.ctype && (_no6.tyku += 2, _no6.houg += 1, _no4.tyku += 2, _no4.houg += 2, _no5 = true), 'ゆら' == _no2.yomi || 'なか' == _no2.yomi || 'きぬ' == _no2.yomi || 'いすず' == _no2.yomi ? (_no6.houg += 2, _no5 = true) : 'おおい' != _no2.yomi && 'きたかみ' != _no2.yomi || (_no6.tyku += 2, _no6.houg += 2, _no5 = true), 'ゆら' != _no2.yomi && 'なか' != _no2.yomi && 'きぬ' != _no2.yomi && 'いすず' != _no2.yomi && 'ゆうばり' != _no2.yomi || (_no6.tais += 1, _no5 = true), 'てんりゅう' != _no2.yomi && 'たつた' != _no2.yomi && 'ゆうばり' != _no2.yomi || (_no6.houg += 1, _no5 = true), 488 == _no2.ship_id ? (_no6.tyku += 4, _no5 = true) : 220 == _no2.ship_id ? (_no6.tyku += 3, _no5 = true) : 23 == _no2.ship_id ? (_no6.tyku += 2, _no5 = true) : 160 == _no2.ship_id || 487 == _no2.ship_id || 141 == _no2.ship_id ? (_no6.tyku += 3, _no5 = true) : 224 == _no2.ship_id || 289 == _no2.ship_id || 219 == _no2.ship_id || 56 == _no2.ship_id || 113 == _no2.ship_id || 22 == _no2.ship_id ? (_no6.tyku += 2, _no5 = true) : 651 != _no2.ship_id && 656 != _no2.ship_id || (_no6.tyku += 3, _no6.houg += 3, 656 == _no2.ship_id && (_no6.kaih += 3, _no6.tais += 2), _no5 = true), 488 != _no2.ship_id && 160 != _no2.ship_id && 487 != _no2.ship_id && 141 != _no2.ship_id || (_no6.tais += 1, _no5 = true), 477 != _no2.ship_id && 478 != _no2.ship_id && 624 != _no2.ship_id || (_no6.tais += 2, _no5 = true), 477 != _no2.ship_id && 478 != _no2.ship_id && 624 != _no2.ship_id && 622 != _no2.ship_id || (_no6.tyku += 2, _no5 = true), 652 != _no2.ship_id && 657 != _no2.ship_id && 547 != _no2.ship_id && 146 != _no2.ship_id || (_no4.houg += 2), 652 != _no2.ship_id && 657 != _no2.ship_id && 547 != _no2.ship_id && 146 != _no2.ship_id || (_no4.tyku += 2), _no5) {
                var _no7 = _no2.get_slotnums(379);
                _no4.add(_no6.multiply(_no7));
            }
            var _no8 = new _no0.SlotItemEffectModel(),
                _no9 = false;
            16 == _no2.stype || 3 == _no2.stype || 4 == _no2.stype || 21 == _no2.stype ? (_no8.houg += 1, _no8.kaih += 2, _no9 = true) : 1 == _no2.stype && (_no8.houg += 1, _no8.kaih += 4, _no9 = true), 66 == _no2.ctype || 28 == _no2.ctype || 21 == _no2.ctype || 34 == _no2.ctype ? (_no8.houg += 2, _no8.kaih += 3, _no9 = true) : 101 == _no2.ctype && (_no8.houg += 4, _no8.kaih += 3, _no9 = true), 488 == _no2.ship_id || 651 == _no2.ship_id || 656 == _no2.ship_id ? (_no8.houg += 2, _no8.kaih += 2, _no9 = true) : 487 == _no2.ship_id || 160 == _no2.ship_id || 141 == _no2.ship_id || 118 == _no2.ship_id || 119 == _no2.ship_id ? (_no8.houg += 1, _no8.kaih += 1, _no9 = true) : 652 != _no2.ship_id && 657 != _no2.ship_id && 547 != _no2.ship_id && 146 != _no2.ship_id || (_no8.houg += 1, _no8.kaih += 1, _no9 = true);
            var _noa = new _no0.SlotItemEffectModel(),
                _nob = false;
            if (656 == _no2.ship_id && (_noa.tyku += 3, _noa.kaih += 2, _nob = true), _no9 || _nob) {
                for (var _noc = 0, _nod = 0, _noe = 0, _nof = _no2.have_slot_ids(); _noe < _nof.length; _noe++) {
                    var _nog = _nof[_noe],
                        _noh = _no1.default.model.slot.getMst(_nog),
                        _noi = _noh.equipType;
                    12 != _noi && 13 != _noi || (_noh.sakuteki >= 5 && (_noc += _no2.get_slotnums(parseInt(_nog))), _noh.taiku >= 2 && (_nod += _no2.get_slotnums(parseInt(_nog))));
                }
                _no9 && _noc > 0 && _no4.add(_no8), _nob && _nod > 0 && _no4.add(_noa);
            }
            return _no4;
        };
    },
    45530: function(_noj, _nok, _nol) {
        'use strict';
        var _nom = null;
        var _non = this && this.__importDefault || function(_noo) {
            var _nop = null;
            return _noo && _noo.__esModule ? _noo : {
                'default': _noo
            };
        };
        defineModule(_nok);
        Object.defineProperty(_nok, '__esModule', {
            'value': true
        }), _nok.getSlot380PersonalEffect = void 0;
        var _noq = _nol(74496),
            _nor = _non(_nol(18622));
        _nok.getSlot380PersonalEffect = function(_nos) {
            var _not = null,
                _nou = new _noq.SlotItemEffectModel(),
                _nov = false,
                _now = new _noq.SlotItemEffectModel();
            if (21 != _nos.stype && 16 != _nos.stype || (_now.tyku += 2, _now.houg += 1, _nov = true), 101 == _nos.ctype && (_now.tyku += 2, _now.houg += 1, _nov = true, _nou.tyku += 2, _nou.houg += 2), 'ゆら' == _nos.yomi || 'なか' == _nos.yomi || 'きぬ' == _nos.yomi || 'いすず' == _nos.yomi ? (_now.houg += 2, _nov = true) : 'おおい' != _nos.yomi && 'きたかみ' != _nos.yomi || (_now.tyku += 2, _now.houg += 3, _nov = true), 'ゆら' != _nos.yomi && 'なか' != _nos.yomi && 'きぬ' != _nos.yomi && 'いすず' != _nos.yomi && 'ゆうばり' != _nos.yomi || (_now.tais += 1, _nov = true), 'てんりゅう' != _nos.yomi && 'たつた' != _nos.yomi && 'ゆうばり' != _nos.yomi || (_now.houg += 1, _nov = true), 488 == _nos.ship_id ? (_now.tyku += 4, _nov = true) : 220 == _nos.ship_id ? (_now.tyku += 3, _nov = true) : 23 == _nos.ship_id ? (_now.tyku += 2, _nov = true) : 160 == _nos.ship_id || 487 == _nos.ship_id || 141 == _nos.ship_id ? (_now.tyku += 3, _nov = true) : 224 == _nos.ship_id || 289 == _nos.ship_id || 219 == _nos.ship_id || 56 == _nos.ship_id || 113 == _nos.ship_id || 22 == _nos.ship_id ? (_now.tyku += 2, _nov = true) : 651 == _nos.ship_id || 656 == _nos.ship_id ? (_now.tyku += 3, _now.houg += 3, _nov = true) : 407 != _nos.ship_id && 665 != _nos.ship_id || (_now.houg += 2, _now.tyku += 2, _nov = true, _nou.houg += 1, _nou.tyku += 1, _nou.kaih += 2), 488 != _nos.ship_id && 160 != _nos.ship_id && 487 != _nos.ship_id && 141 != _nos.ship_id || (_now.tais += 1, _nov = true), 477 != _nos.ship_id && 478 != _nos.ship_id && 624 != _nos.ship_id || (_now.tais += 2, _nov = true), 477 != _nos.ship_id && 478 != _nos.ship_id && 624 != _nos.ship_id && 622 != _nos.ship_id || (_now.tyku += 2, _nov = true), 652 != _nos.ship_id && 657 != _nos.ship_id || (_now.houg += 3, _nov = true), 547 != _nos.ship_id && 146 != _nos.ship_id || (_nou.houg += 2), 652 != _nos.ship_id && 657 != _nos.ship_id && 547 != _nos.ship_id && 146 != _nos.ship_id || (_nou.tyku += 2), _nov) {
                var _nox = _nos.get_slotnums(380);
                _nou.add(_now.multiply(_nox));
            }
            var _noy = new _noq.SlotItemEffectModel(),
                _noz = false,
                _np0 = new _noq.SlotItemEffectModel(),
                _np1 = false,
                _np2 = false;
            if (16 != _nos.stype && 3 != _nos.stype && 4 != _nos.stype && 21 != _nos.stype || (_noy.houg += 2, _noy.kaih += 1, _noz = true), 101 == _nos.ctype && (_noy.houg += 4, _noy.kaih += 3, _noz = true), 488 != _nos.ship_id && 487 != _nos.ship_id && 160 != _nos.ship_id && 141 != _nos.ship_id && 118 != _nos.ship_id && 119 != _nos.ship_id && 651 != _nos.ship_id && 656 != _nos.ship_id || (_noy.houg += 1, _noy.kaih += 2, _noz = true), 652 == _nos.ship_id || 657 == _nos.ship_id || 547 == _nos.ship_id || 146 == _nos.ship_id ? (_noy.houg += 1, _noy.kaih += 3, _noz = true) : 407 != _nos.ship_id && 665 != _nos.ship_id || (_np2 = true, _noz = true, _noy.houg += 2, _noy.kaih += 1, _np1 = true, _np0.houg += 1, _np0.tyku += 2, _np0.kaih += 1), _noz || _np2) {
                for (var _np3 = 0, _np4 = 0, _np5 = 0, _np6 = _nos.have_slot_ids(); _np5 < _np6.length; _np5++) {
                    var _np7 = _np6[_np5],
                        _np8 = _nor.default.model.slot.getMst(_np7),
                        _np9 = _np8.equipType;
                    12 == _np9 || 13 == _np9 ? _np8.sakuteki >= 5 && (_np3 += _nos.get_slotnums(parseInt(_np7))) : 21 == _np9 && (_np4 += _nos.get_slotnums(parseInt(_np7)));
                }
                _noz && _np3 > 0 && _nou.add(_noy), _np1 && _np4 > 0 && _nou.add(_np0);
            }
            return _nou;
        };
    },
    44053: (_npa, _npb, _npc) => {
        'use strict';
        var _npd = null;
        defineModule(_npb);
        Object.defineProperty(_npb, '__esModule', {
            'value': true
        }), _npb.getSlot381PersonalEffect = void 0;
        var _npe = _npc(74496);
        _npb.getSlot381PersonalEffect = function(_npf) {
            var _npg = null,
                _nph = new _npe.SlotItemEffectModel(),
                _npi = false,
                _npj = new _npe.SlotItemEffectModel(),
                _npk = 0;
            if ('アメリカ' == _npf.getCountryName() && (_npj.houg += 1, 102 == _npf.ctype && (_npj.houg += 1), _npi = true, _npk = 1), 0 == _npi) return _nph;
            var _npl = _npf.get_slotnums(381);
            if (_nph.add(_npj.multiply(_npl)), 0 == _npk) return _nph;
            var _npm = _npf.get_each_level_nums(381),
                _npn = 0;
            return _npm.map(function(_npo, _npp) {
                _npp >= 6 && (_npn += _npo);
            }), 1 == _npk && (_nph.houg += 1 * _npn), _nph;
        };
    },
    65441: function(_npq, _npr, _nps) {
        'use strict';
        var _npt = null;
        var _npu = this && this.__importDefault || function(_npv) {
            var _npw = null;
            return _npv && _npv.__esModule ? _npv : {
                'default': _npv
            };
        };
        defineModule(_npr);
        Object.defineProperty(_npr, '__esModule', {
            'value': true
        }), _npr.getSlot382PersonalEffect = void 0;
        var _npx = _nps(74496),
            _npy = _npu(_nps(18622));
        _npr.getSlot382PersonalEffect = function(_npz) {
            var _nq0 = null,
                _nq1 = new _npx.SlotItemEffectModel(),
                _nq2 = false,
                _nq3 = new _npx.SlotItemEffectModel(),
                _nq4 = false,
                _nq5 = new _npx.SlotItemEffectModel(),
                _nq6 = new _npx.SlotItemEffectModel(),
                _nq7 = 2;
            1 == _npz.stype && (_nq3.tyku += 2, _nq3.kaih += 2, _nq3.tais += 1, _nq2 = true, _nq5.houg += 2, _nq5.kaih += 3, _nq6.tyku += 2, _nq6.kaih += 3, _nq4 = true, _nq7 = 1), 66 != _npz.ctype && 28 != _npz.ctype && 101 != _npz.ctype || (_nq3.tyku += 2, _nq3.kaih += 1, _nq2 = true, _nq5.houg += 1, _nq5.kaih += 2, _nq6.tyku += 2, _nq6.kaih += 2, _nq4 = true, _nq7 = 1), 'ゆら' != _npz.yomi && 'なか' != _npz.yomi && 'きぬ' != _npz.yomi || (_nq3.tyku += 1, _nq2 = true), 488 == _npz.ship_id || 220 == _npz.ship_id ? (_nq3.kaih += 1, _nq2 = true, 488 == _npz.ship_id && (_nq5.houg += 1, _nq5.kaih += 1, _nq6.tyku += 2, _nq6.kaih += 2, _nq4 = true, _nq7 = 1)) : 160 == _npz.ship_id || 224 == _npz.ship_id ? (_nq3.kaih += 1, _nq2 = true, 160 == _npz.ship_id && (_nq5.houg += 1, _nq5.kaih += 1, _nq6.tyku += 2, _nq6.kaih += 2, _nq4 = true)) : 487 == _npz.ship_id || 289 == _npz.ship_id ? (_nq3.kaih += 1, _nq2 = true, 487 == _npz.ship_id && (_nq5.houg += 1, _nq5.kaih += 1, _nq6.tyku += 2, _nq6.kaih += 2, _nq4 = true)) : 656 == _npz.ship_id ? (_nq3.tyku += 3, _nq3.kaih += 2, _nq2 = true, _nq5.houg += 2, _nq5.kaih += 2, _nq6.tyku += 3, _nq6.kaih += 2, _nq4 = true, _nq7 = 1) : 145 != _npz.ship_id && 961 != _npz.ship_id || (_nq7 = 1);
            for (var _nq8 = 0, _nq9 = 0, _nqa = 0, _nqb = _npz.have_slot_ids(); _nqa < _nqb.length; _nqa++) {
                var _nqc = _nqb[_nqa],
                    _nqd = _npy.default.model.slot.getMst(_nqc),
                    _nqe = _nqd.equipType;
                12 != _nqe && 13 != _nqe || (_nqd.sakuteki >= 5 && (_nq8 += _npz.get_slotnums(parseInt(_nqc))), _nqd.taiku >= 2 && (_nq9 += _npz.get_slotnums(parseInt(_nqc))));
            }
            for (var _nqf = [], _nqg = function(_nqh) {
                    var _nqi = null;
                    if (null == _npz.have_slots_dict[_nqh]) return 'continue';
                    var _nqj = _npz.get_each_level_nums(_nqh);
                    null == _nqf[_nqh] && (_nqf[_nqh] = []), _nqj.forEach(function(_nqk, _nql) {
                        var _nqm = null;
                        for (var _nqn = 1; _nqn <= _npz.SLOT_LEVEL_MAX; _nqn++) null == _nqf[_nqh][_nqn] && (_nqf[_nqh][_nqn] = 0), _nql >= _nqn && (_nqf[_nqh][_nqn] += _nqk);
                    });
                }, _nqo = 0, _nqp = [509]; _nqo < _nqp.length; _nqo++) {
                _nqg(_nqp[_nqo]);
            }
            var _nqq = 0,
                _nqr = 0,
                _nqs = 0,
                _nqt = 0,
                _nqu = 0,
                _nqv = 0;
            null != _nqf[509] && (_nqq = _nqf[509][1], _nqr = _nqf[509][2], _nqs = _nqf[509][4], _nqt = _nqf[509][6], _nqu = _nqf[509][8], _nqv = _nqf[509][10], 1 == _nq7 ? (_nqq >= 1 && (_nq1.tyku += 1 * _nqq), _nqr >= 1 && (_nq1.kaih += 2 * _nqr), _nqs >= 1 && (_nq1.houg += 1 * _nqs), _nqt >= 1 && (_nq1.tyku += 1 * _nqt), _nqu >= 1 && (_nq1.houm += 1 * _nqu), _nqv >= 1 && (_nq1.tyku += 1 * _nqv)) : 2 == _nq7 && (_nqr >= 1 && (_nq1.tyku += 1 * _nqr), _nqs >= 1 && (_nq1.kaih += 2 * _nqs), _nqt >= 1 && (_nq1.houg += 1 * _nqt), _nqu >= 1 && (_nq1.tyku += 1 * _nqu), _nqv >= 1 && (_nq1.houm += 1 * _nqv)));
            var _nqw = _npz.get_slotnums(509),
                _nqx = _nqw + _npz.get_slotnums(382);
            return _nq2 && _nq1.add(_nq3.multiply(_nqx)), 3 != _npz.stype && 21 != _npz.stype && 4 != _npz.stype || _nqr >= 1 && (_nq8 > 0 && (_nq1.houg += 1, _nq1.kaih += 1), _nq9 > 0 && (_nq1.tyku += 2, _nq1.kaih += 1)), 145 == _npz.ship_id ? _nqr >= 1 && (_nq8 > 0 && (_nq1.houg += 1, _nq1.tyku += 1, _nq1.kaih += 2), _nq9 > 0 && (_nq1.tyku += 4, _nq1.kaih += 2)) : 961 == _npz.ship_id && _nqw > 0 && (_nq8 > 0 && (_nq1.houg += 2, _nq1.tyku += 2, _nq1.kaih += 3), _nq9 > 0 && (_nq1.houg += 1, _nq1.tyku += 5, _nq1.kaih += 3)), _nq4 && _nq8 > 0 && _nq1.add(_nq5), _nq4 && _nq9 > 0 && _nq1.add(_nq6), _nq1;
        };
    },
    33258: (_nqy, _nqz, _nr0) => {
        'use strict';
        var _nr1 = null;
        defineModule(_nqz);
        Object.defineProperty(_nqz, '__esModule', {
            'value': true
        }), _nqz.getSlot383PersonalEffect = void 0;
        var _nr2 = _nr0(74496);
        _nqz.getSlot383PersonalEffect = function(_nr3) {
            var _nr4 = null,
                _nr5 = new _nr2.SlotItemEffectModel(),
                _nr6 = false,
                _nr7 = new _nr2.SlotItemEffectModel(),
                _nr8 = _nr3.get_each_level_over_nums([383])[383];
            if (44 == _nr3.ctype && (_nr7.raig += 2, _nr6 = true, _nr8[4] > 0 && (_nr5.raig += 1), _nr8[6] > 0 && (_nr5.houm += 1)), 'い58' == _nr3.yomi && (_nr7.raig += 1, _nr6 = true), 636 == _nr3.ship_id ? (_nr7.raig += 3, _nr6 = true) : 607 == _nr3.ship_id && (_nr7.raig += 4, _nr6 = true), _nr8[8] > 0 && (_nr5.raig += 1), _nr8[10] > 0 && (_nr5.houm += 1), 'い58' != _nr3.yomi && 'い47' != _nr3.yomi || _nr8[5] > 0 && (_nr5.houm += 1), 0 == _nr6) return _nr5;
            var _nr9 = _nr3.get_slotnums(383);
            return _nr5.add(_nr7.multiply(_nr9)), _nr5;
        };
    },
    92168: (_nra, _nrb, _nrc) => {
        'use strict';
        var _nrd = null;
        defineModule(_nrb);
        Object.defineProperty(_nrb, '__esModule', {
            'value': true
        }), _nrb.getSlot384PersonalEffect = void 0;
        var _nre = _nrc(74496);
        _nrb.getSlot384PersonalEffect = function(_nrf) {
            var _nrg = null,
                _nrh = new _nre.SlotItemEffectModel(),
                _nri = false,
                _nrj = new _nre.SlotItemEffectModel();
            44 == _nrf.ctype && (_nrj.kaih += 3, _nri = true), 'い58' == _nrf.yomi && (_nrj.kaih += 2, _nri = true), 636 == _nrf.ship_id ? (_nrj.kaih += 3, _nri = true) : 607 == _nrf.ship_id && (_nrj.kaih += 4, _nri = true);
            var _nrk = _nrf.get_slotnums(384);
            _nri && _nrh.add(_nrj.multiply(_nrk));
            var _nrl = _nrk,
                _nrm = _nrf.get_slotnums(213),
                _nrn = _nrf.get_slotnums(214),
                _nro = _nrf.get_slotnums(383);
            return _nrl > 0 && _nrm + _nrn + _nro > 0 && (_nrh.raig += 3, _nrh.kaih += 2), _nrh;
        };
    },
    85975: (_nrp, _nrq, _nrr) => {
        'use strict';
        var _nrs = null;
        defineModule(_nrq);
        Object.defineProperty(_nrq, '__esModule', {
            'value': true
        }), _nrq.getSlot385PersonalEffect = void 0;
        var _nrt = _nrr(74496);
        _nrq.getSlot385PersonalEffect = function(_nru) {
            var _nrv = null,
                _nrw = new _nrt.SlotItemEffectModel(),
                _nrx = false,
                _nry = new _nrt.SlotItemEffectModel(),
                _nrz = 0;
            if ('アメリカ' == _nru.getCountryName() && (_nry.houg += 1, 102 == _nru.ctype || 107 == _nru.ctype ? (_nry.houg += 1, _nry.souk += 1) : 93 == _nru.ctype && (_nry.houg += 1), _nrx = true, _nrz = 1), 8 == _nru.stype && (_nry.houg += 1, _nrx = true), 0 == _nrx) return _nrw;
            var _ns0 = _nru.get_slotnums(385);
            if (_nrw.add(_nry.multiply(_ns0)), 0 == _nrz) return _nrw;
            var _ns1 = _nru.get_each_level_nums(385),
                _ns2 = 0;
            return _ns1.forEach(function(_ns3, _ns4) {
                _ns4 >= 6 && (_ns2 += _ns3);
            }), 1 == _nrz && (_nrw.houg += 1 * _ns2, _nrw.souk += 1 * _ns1[10]), _nrw;
        };
    },
    98467: (_ns5, _ns6, _ns7) => {
        'use strict';
        var _ns8 = null;
        defineModule(_ns6);
        Object.defineProperty(_ns6, '__esModule', {
            'value': true
        }), _ns6.getSlot386PersonalEffect = void 0;
        var _ns9 = _ns7(74496);
        _ns6.getSlot386PersonalEffect = function(_nsa) {
            var _nsb = null,
                _nsc = new _ns9.SlotItemEffectModel(),
                _nsd = false,
                _nse = new _ns9.SlotItemEffectModel(),
                _nsf = 0;
            if ('アメリカ' == _nsa.getCountryName() && (_nse.houg += 1, _nsd = true, _nsf = 1), 0 == _nsd) return _nsc;
            var _nsg = _nsa.get_slotnums(386);
            if (_nsc.add(_nse.multiply(_nsg)), 0 == _nsf) return _nsc;
            var _nsh = _nsa.get_each_level_nums(386),
                _nsi = 0,
                _nsj = 0;
            return _nsh.forEach(function(_nsk, _nsl) {
                _nsl >= 2 && (_nsi += _nsk), _nsl >= 7 && (_nsj += _nsk);
            }), 1 == _nsf && (_nsc.houg += 1 * _nsi, _nsc.houg += 1 * _nsj), _nsc;
        };
    },
    88348: (_nsm, _nsn, _nso) => {
        'use strict';
        var _nsp = null;
        defineModule(_nsn);
        Object.defineProperty(_nsn, '__esModule', {
            'value': true
        }), _nsn.getSlot387PersonalEffect = void 0;
        var _nsq = _nso(74496);
        _nsn.getSlot387PersonalEffect = function(_nsr) {
            var _nss = null,
                _nst = new _nsq.SlotItemEffectModel(),
                _nsu = false,
                _nsv = new _nsq.SlotItemEffectModel(),
                _nsw = 0;
            if ('アメリカ' == _nsr.getCountryName() && (_nsv.houg += 1, _nsu = true, _nsw = 1), 0 == _nsu) return _nst;
            var _nsx = _nsr.get_slotnums(387);
            if (_nst.add(_nsv.multiply(_nsx)), 0 == _nsw) return _nst;
            var _nsy = _nsr.get_each_level_nums(387),
                _nsz = 0,
                _nt0 = 0;
            return _nsy.forEach(function(_nt1, _nt2) {
                _nt2 >= 2 && (_nsz += _nt1), _nt2 >= 7 && (_nt0 += _nt1);
            }), 1 == _nsw && (_nst.houg += 1 * _nsz, _nst.houg += 1 * _nt0), _nst;
        };
    },
    21097: (_nt3, _nt4, _nt5) => {
        'use strict';
        var _nt6 = null;
        defineModule(_nt4);
        Object.defineProperty(_nt4, '__esModule', {
            'value': true
        }), _nt4.getSlot389PersonalEffect = void 0;
        var _nt7 = _nt5(74496);
        _nt4.getSlot389PersonalEffect = function(_nt8) {
            var _nt9 = null,
                _nta = new _nt7.SlotItemEffectModel(),
                _ntb = false,
                _ntc = new _nt7.SlotItemEffectModel();
            if (594 == _nt8.ship_id || 599 == _nt8.ship_id) _ntc.houg += 2, _ntc.kaih += 2, _ntb = true;
            else {
                if (698 == _nt8.ship_id || 610 == _nt8.ship_id) _ntc.houg += 3, _ntc.kaih += 2, _ntb = true;
                else 646 == _nt8.ship_id && (_ntc.houg += 4, _ntc.tais += 4, _ntc.kaih += 3, _ntb = true, _nt8.get_type3_nums(25) > 0 && (_nta.houg += 3, _nta.tais += 6), _nt8.get_slotnums(326) + _nt8.get_slotnums(327) > 0 && (_nta.houg += 5, _nta.tais += 4));
            }
            if ('アメリカ' == _nt8.getCountryName() && (_ntc.houg += 2, _ntc.tais += 3, _ntc.kaih += 1, _ntb = true), 0 == _ntb) return _nta;
            var _ntd = _nt8.get_slotnums(389);
            return _nta.add(_ntc.multiply(_ntd)), _nta;
        };
    },
    43607: (_nte, _ntf, _ntg) => {
        'use strict';
        var _nth = null;
        defineModule(_ntf);
        Object.defineProperty(_ntf, '__esModule', {
            'value': true
        }), _ntf.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _nti = _ntg(74496);
        _ntf.getSlot38cmFourBarrelGunPersonalEffect = function(_ntj) {
            var _ntk = null,
                _ntl = new _nti.SlotItemEffectModel(),
                _ntm = _ntj.get_slotnums(245),
                _ntn = _ntj.get_slotnums(246),
                _nto = _ntj.get_slotnums(468),
                _ntp = _ntm + _ntn + _nto,
                _ntq = 0,
                _ntr = 0,
                _nts = new Array();
            if (79 != _ntj.ctype) return _ntl;
            _ntl.houg += 2 * _ntp, _ntl.houm += 1 * _ntp, _nto >= 1 && (_ntl.houg += 1 * _nto, _ntr = 1, _nts.push(468)), _ntq = 1;
            var _ntt = _ntj.get_slotnums(247);
            if (1 == _ntq && _ntt >= 1 && (_ntl.kaih += 2 * _ntt, _ntl.houg += 2 * _ntt, _ntl.houm += 2 * _ntt), 0 == _ntr) return _ntl;
            for (var _ntu = {}, _ntv = {}, _ntw = {}, _ntx = 0, _nty = _nts; _ntx < _nty.length; _ntx++) {
                var _ntz = _nty[_ntx];
                _ntv[_ntz] = 0, _ntw[_ntz] = 0, _ntu[_ntz] = 0;
                for (var _nu0 = 0, _nu1 = _ntj.have_slots_dict[_ntz]; _nu0 < _nu1.length; _nu0++) {
                    var _nu2 = _nu1[_nu0].level;
                    _nu2 >= 4 && _ntv[_ntz]++, _nu2 >= 8 && _ntw[_ntz]++, _nu2 >= 10 && _ntu[_ntz]++;
                }
            }
            if (1 == _ntr && _nto > 0) {
                var _nu3 = _ntv[468],
                    _nu4 = _ntw[468],
                    _nu5 = _ntu[468];
                _nu3 >= 1 && (_ntl.houg += 1 * _nu3, _ntl.houm += 1 * _nu3), _nu4 >= 1 && (_ntl.houg += 1 * _nu4, _ntl.houm += 1 * _nu4), _nu5 >= 1 && (_ntl.houm += 1 * _nu5);
            }
            return _ntl;
        };
    },
    37273: (_nu6, _nu7, _nu8) => {
        'use strict';
        var _nu9 = null;
        defineModule(_nu7);
        Object.defineProperty(_nu7, '__esModule', {
            'value': true
        }), _nu7.getSlot390PersonalEffect = void 0;
        var _nua = _nu8(74496);
        _nu7.getSlot390PersonalEffect = function(_nub) {
            var _nuc = null,
                _nud = new _nua.SlotItemEffectModel(),
                _nue = false,
                _nuf = new _nua.SlotItemEffectModel(),
                _nug = 0;
            if ('アメリカ' == _nub.getCountryName() && (_nuf.houg += 1, _nue = true, _nug = 1), 102 == _nub.ctype || 107 == _nub.ctype ? (_nuf.houg += 1, _nuf.souk += 1, _nue = true) : 93 == _nub.ctype && (_nuf.houg += 1, _nue = true), 8 == _nub.stype && (_nuf.houg += 1, _nue = true), 0 == _nue) return _nud;
            var _nuh = _nub.get_slotnums(390);
            if (_nud.add(_nuf.multiply(_nuh)), 0 == _nug) return _nud;
            var _nui = _nub.get_each_level_nums(390),
                _nuj = 0,
                _nuk = 0;
            return _nui.forEach(function(_nul, _num) {
                _num >= 3 && (_nuj += _nul), _num >= 6 && (_nuk += _nul);
            }), 1 == _nug && (_nud.houg += 1 * _nuj, _nud.kaih += 1 * _nuk, _nud.souk += 1 * _nui[10]), _nud;
        };
    },
    72694: (_nun, _nuo, _nup) => {
        'use strict';
        var _nuq = null;
        defineModule(_nuo);
        Object.defineProperty(_nuo, '__esModule', {
            'value': true
        }), _nuo.getSlot391PersonalEffect = void 0;
        var _nur = _nup(74496);
        _nuo.getSlot391PersonalEffect = function(_nus) {
            var _nut = null,
                _nuu = new _nur.SlotItemEffectModel(),
                _nuv = false,
                _nuw = new _nur.SlotItemEffectModel();
            if ('しょうかく' == _nus.yomi || 'ずいかく' == _nus.yomi ? (_nuw.houg += 1, _nuv = true) : 'じゅんよう' != _nus.yomi && 'ひよう' != _nus.yomi || (_nuw.houg += 1, _nuv = true), 116 == _nus.ship_id || 185 == _nus.ship_id || 282 == _nus.ship_id ? (_nuw.houg += 1, _nuv = true) : 117 == _nus.ship_id || 318 == _nus.ship_id || 883 == _nus.ship_id || 888 == _nus.ship_id ? (_nuw.houg += 1, _nuu.kaih += 1, _nuv = true) : 560 != _nus.ship_id && 555 != _nus.ship_id || (_nuw.houg += 1, _nuw.kaih += 1, _nuv = true), 0 == _nuv) return _nuu;
            var _nux = _nus.get_slotnums(391);
            return _nuu.add(_nuw.multiply(_nux)), _nuu;
        };
    },
    62067: (_nuy, _nuz, _nv0) => {
        'use strict';
        var _nv1 = null;
        defineModule(_nuz);
        Object.defineProperty(_nuz, '__esModule', {
            'value': true
        }), _nuz.getSlot392PersonalEffect = void 0;
        var _nv2 = _nv0(74496);
        _nuz.getSlot392PersonalEffect = function(_nv3) {
            var _nv4 = null,
                _nv5 = new _nv2.SlotItemEffectModel(),
                _nv6 = false,
                _nv7 = new _nv2.SlotItemEffectModel();
            if ('しょうかく' == _nv3.yomi || 'ずいかく' == _nv3.yomi ? (_nv7.houg += 2, _nv7.kaih += 1, _nv6 = true) : 'じゅんよう' != _nv3.yomi && 'ひよう' != _nv3.yomi || (_nv7.houg += 1, _nv7.kaih += 1, _nv6 = true), 116 == _nv3.ship_id || 185 == _nv3.ship_id || 282 == _nv3.ship_id ? (_nv7.houg += 2, _nv7.kaih += 1, _nv6 = true) : 117 == _nv3.ship_id || 318 == _nv3.ship_id || 883 == _nv3.ship_id || 888 == _nv3.ship_id ? (_nv7.houg += 2, _nv7.kaih += 2, _nv6 = true) : 560 != _nv3.ship_id && 555 != _nv3.ship_id || (_nv7.houg += 3, _nv7.kaih += 2, _nv6 = true), 0 == _nv6) return _nv5;
            var _nv8 = _nv3.get_slotnums(392);
            return _nv5.add(_nv7.multiply(_nv8)), _nv5;
        };
    },
    87817: function(_nv9, _nva, _nvb) {
        'use strict';
        var _nvc = null;
        var _nvd = this && this.__importDefault || function(_nve) {
            var _nvf = null;
            return _nve && _nve.__esModule ? _nve : {
                'default': _nve
            };
        };
        defineModule(_nva);
        Object.defineProperty(_nva, '__esModule', {
            'value': true
        }), _nva.getSlot397PersonalEffect = void 0;
        var _nvg = _nvb(74496),
            _nvh = _nvd(_nvb(18622));
        _nva.getSlot397PersonalEffect = function(_nvi) {
            var _nvj = null,
                _nvk = new _nvg.SlotItemEffectModel(),
                _nvl = false,
                _nvm = new _nvg.SlotItemEffectModel(),
                _nvn = 0,
                _nvo = 0,
                _nvp = false;
            if (651 == _nvi.ship_id ? (_nvm.houg += 5, _nvm.tyku += 2, _nvm.kaih += 1, _nvl = true, _nvp = true, _nvn = 1, _nvo = 1) : 656 == _nvi.ship_id && (_nvm.houg += 3, _nvm.tyku += 1, _nvm.kaih += 1, _nvl = true, _nvp = true, _nvn = 1), 0 == _nvl) return _nvk;
            var _nvq = _nvi.get_slotnums(397);
            _nvk.add(_nvm.multiply(_nvq));
            var _nvr = 0,
                _nvs = _nvi.get_each_level_nums(397),
                _nvt = 0;
            if (_nvp) {
                _nvs.forEach(function(_nvu, _nvv) {
                    _nvv >= 4 && (_nvt += _nvu);
                });
                for (var _nvw = 0, _nvx = _nvi.have_slot_ids(); _nvw < _nvx.length; _nvw++) {
                    var _nvy = _nvx[_nvw],
                        _nvz = _nvh.default.model.slot.getMst(_nvy),
                        _nw0 = _nvz.equipType;
                    12 != _nw0 && 13 != _nw0 || (_nvz.sakuteki >= 5 && (_nvr += _nvi.get_slotnums(parseInt(_nvy))), _nvz.taiku >= 2 && _nvi.get_slotnums(parseInt(_nvy)));
                }
            }
            return 1 == _nvn && _nvr > 0 && (_nvk.houg += 3, _nvk.kaih += 3), 1 == _nvo && (_nvk.houg += 4 * _nvt, _nvk.kaih += 1 * _nvt), _nvk;
        };
    },
    93526: function(_nw1, _nw2, _nw3) {
        'use strict';
        var _nw4 = null;
        var _nw5 = this && this.__importDefault || function(_nw6) {
            var _nw7 = null;
            return _nw6 && _nw6.__esModule ? _nw6 : {
                'default': _nw6
            };
        };
        defineModule(_nw2);
        Object.defineProperty(_nw2, '__esModule', {
            'value': true
        }), _nw2.getSlot398PersonalEffect = void 0;
        var _nw8 = _nw3(74496),
            _nw9 = _nw5(_nw3(18622));
        _nw2.getSlot398PersonalEffect = function(_nwa) {
            var _nwb = null,
                _nwc = new _nw8.SlotItemEffectModel(),
                _nwd = false,
                _nwe = new _nw8.SlotItemEffectModel(),
                _nwf = 0,
                _nwg = 0,
                _nwh = false;
            if (651 == _nwa.ship_id ? (_nwe.houg += 4, _nwe.tyku += 4, _nwe.kaih += 2, _nwd = true, _nwh = true, _nwf = 1, _nwg = 1) : 656 == _nwa.ship_id && (_nwe.houg += 3, _nwe.tyku += 2, _nwe.kaih += 2, _nwd = true, _nwh = true, _nwf = 1, _nwg = 2), 0 == _nwd) return _nwc;
            var _nwi = _nwa.get_slotnums(398);
            _nwc.add(_nwe.multiply(_nwi));
            var _nwj = 0,
                _nwk = 0,
                _nwl = _nwa.get_each_level_nums(398),
                _nwm = 0;
            if (_nwh) {
                _nwl.forEach(function(_nwn, _nwo) {
                    _nwo >= 4 && (_nwm += _nwn);
                });
                for (var _nwp = 0, _nwq = _nwa.have_slot_ids(); _nwp < _nwq.length; _nwp++) {
                    var _nwr = _nwq[_nwp],
                        _nws = _nw9.default.model.slot.getMst(_nwr),
                        _nwt = _nws.equipType;
                    12 != _nwt && 13 != _nwt || (_nws.sakuteki >= 5 && (_nwj += _nwa.get_slotnums(parseInt(_nwr))), _nws.taiku >= 2 && (_nwk += _nwa.get_slotnums(parseInt(_nwr))));
                }
            }
            return 1 == _nwf && (_nwj > 0 && (_nwc.houg += 3, _nwc.kaih += 3), _nwk > 0 && (_nwc.tyku += 3, _nwc.kaih += 3)), 1 == _nwg ? (_nwc.houg += 3 * _nwm, _nwc.kaih += 2 * _nwm) : 2 == _nwg && (_nwc.houg += 2 * _nwm, _nwc.kaih += 1 * _nwm), _nwc;
        };
    },
    33084: (_nwu, _nwv, _nww) => {
        'use strict';
        var _nwx = null;
        defineModule(_nwv);
        Object.defineProperty(_nwv, '__esModule', {
            'value': true
        }), _nwv.getSlot399PersonalEffect = void 0;
        var _nwy = _nww(74496);
        _nwv.getSlot399PersonalEffect = function(_nwz) {
            var _nx0 = null,
                _nx1 = new _nwy.SlotItemEffectModel(),
                _nx2 = false,
                _nx3 = new _nwy.SlotItemEffectModel(),
                _nx4 = 0;
            if (108 == _nwz.ctype && (_nx3.houg += 1, _nx3.kaih += 2, _nx4 = 1, _nx2 = true), 0 == _nx2) return _nx1;
            var _nx5 = _nwz.get_slotnums(399);
            if (_nx1.add(_nx3.multiply(_nx5)), 0 == _nx4) return _nx1;
            var _nx6 = _nwz.get_each_level_nums(399),
                _nx7 = 0,
                _nx8 = 0;
            return _nx6.map(function(_nx9, _nxa) {
                _nxa >= 3 && (_nx7 += _nx9), _nxa >= 5 && (_nx8 += _nx9);
            }), 1 == _nx4 && (_nx1.houg += 1 * _nx7, _nx1.houg += 1 * _nx8), _nx1;
        };
    },
    80225: (_nxb, _nxc, _nxd) => {
        'use strict';
        var _nxe = null;
        defineModule(_nxc);
        Object.defineProperty(_nxc, '__esModule', {
            'value': true
        }), _nxc.getSlot3_122PersonalEffect = void 0;
        var _nxf = _nxd(74496);
        _nxc.getSlot3_122PersonalEffect = function(_nxg) {
            var _nxh = null,
                _nxi = new _nxf.SlotItemEffectModel(),
                _nxj = false,
                _nxk = new _nxf.SlotItemEffectModel();
            if (54 == _nxg.ctype && (_nxk.houg += 1, _nxk.tyku += 2, _nxk.kaih += 1, _nxj = true), 0 == _nxj) return _nxi;
            var _nxl = _nxg.get_slotnums(3) + _nxg.get_slotnums(122);
            return _nxi.add(_nxk.multiply(_nxl)), _nxi;
        };
    },
    97831: (_nxm, _nxn, _nxo) => {
        'use strict';
        var _nxp = null;
        defineModule(_nxn);
        Object.defineProperty(_nxn, '__esModule', {
            'value': true
        }), _nxn.getSlot400PersonalEffect = void 0;
        var _nxq = _nxo(74496);
        _nxn.getSlot400PersonalEffect = function(_nxr) {
            var _nxs = null,
                _nxt = new _nxq.SlotItemEffectModel(),
                _nxu = false,
                _nxv = new _nxq.SlotItemEffectModel(),
                _nxw = 0,
                _nxx = false;
            if (147 != _nxr.ship_id && 73 != _nxr.ctype && 81 != _nxr.ctype || (_nxx = true), _nxx && (_nxv.kaih += 2, _nxv.raig += 5, _nxv.houg += 1, _nxv.souk += 1, _nxu = true, _nxw = 1), 0 == _nxu) return _nxt;
            var _nxy = _nxr.get_slotnums(400);
            return _nxt.add(_nxv.multiply(_nxy)), _nxr.get_slotnums(282) > 0 && 1 == _nxw && (_nxt.houg += 2), _nxt;
        };
    },
    4050: function(_nxz, _ny0, _ny1) {
        'use strict';
        var _ny2 = null;
        var _ny3 = this && this.__importDefault || function(_ny4) {
            var _ny5 = null;
            return _ny4 && _ny4.__esModule ? _ny4 : {
                'default': _ny4
            };
        };
        defineModule(_ny0);
        Object.defineProperty(_ny0, '__esModule', {
            'value': true
        }), _ny0.getSlot407PersonalEffect = void 0;
        var _ny6 = _ny1(74496),
            _ny7 = _ny3(_ny1(18622));
        _ny0.getSlot407PersonalEffect = function(_ny8) {
            var _ny9 = null,
                _nya = new _ny6.SlotItemEffectModel(),
                _nyb = false,
                _nyc = new _ny6.SlotItemEffectModel(),
                _nyd = 0;
            if (662 != _ny8.ship_id && 663 != _ny8.ship_id && 668 != _ny8.ship_id || (_nyc.houg += 4, _nyc.tyku += 2, _nyc.kaih += 1, _nyb = true, _nyd = 1), 0 == _nyb) return _nya;
            var _nye = _ny8.get_slotnums(407);
            _nya.add(_nyc.multiply(_nye));
            for (var _nyf = 0, _nyg = 0, _nyh = 0, _nyi = _ny8.have_slot_ids(); _nyh < _nyi.length; _nyh++) {
                var _nyj = _nyi[_nyh],
                    _nyk = _ny7.default.model.slot.getMst(_nyj),
                    _nyl = _nyk.equipType;
                12 != _nyl && 13 != _nyl || (_nyk.sakuteki >= 5 && (_nyf += _ny8.get_slotnums(parseInt(_nyj))), _nyk.taiku >= 2 && (_nyg += _ny8.get_slotnums(parseInt(_nyj))));
            }
            return _nyf >= 1 && 1 == _nyd && (_nya.houg += 2, _nya.kaih += 2, _nya.raig += 2), _nyg >= 1 && 1 == _nyd && (_nya.tyku += 2, _nya.kaih += 3), _nya;
        };
    },
    78466: (_nym, _nyn, _nyo) => {
        'use strict';
        var _nyp = null;
        defineModule(_nyn);
        Object.defineProperty(_nyn, '__esModule', {
            'value': true
        }), _nyn.getSlot408PersonalEffect = void 0;
        var _nyq = _nyo(74496);
        _nyn.getSlot408PersonalEffect = function(_nyr) {
            var _nys = null,
                _nyt = new _nyq.SlotItemEffectModel(),
                _nyu = false,
                _nyv = new _nyq.SlotItemEffectModel();
            if ('しんしゅうまる' == _nyr.yomi ? (_nyv.houg += 2, _nyv.saku += 2, _nyv.kaih += 2, _nyu = true) : 'あきつまる' == _nyr.yomi && (_nyv.houg += 1, _nyv.saku += 1, _nyv.kaih += 1, _nyv.tais += 1, _nyu = true), 2 == _nyr.stype && (_nyv.houg += 1, _nyv.saku += 1, _nyv.kaih -= 5, _nyu = true), 0 == _nyu) return _nyt;
            var _nyw = _nyr.get_slotnums(408);
            return _nyt.add(_nyv.multiply(_nyw)), _nyt;
        };
    },
    40061: (_nyx, _nyy, _nyz) => {
        'use strict';
        var _nz0 = null;
        defineModule(_nyy);
        Object.defineProperty(_nyy, '__esModule', {
            'value': true
        }), _nyy.getSlot409PersonalEffect = void 0;
        var _nz1 = _nyz(74496);
        _nyy.getSlot409PersonalEffect = function(_nz2) {
            var _nz3 = null,
                _nz4 = new _nz1.SlotItemEffectModel(),
                _nz5 = false,
                _nz6 = new _nz1.SlotItemEffectModel();
            if ('しんしゅうまる' == _nz2.yomi ? (_nz6.houg += 1, _nz6.tyku += 2, _nz6.kaih += 3, _nz5 = true) : 'あきつまる' == _nz2.yomi && (_nz6.houg += 1, _nz6.tyku += 1, _nz6.kaih += 2, _nz6.tais += 1, _nz5 = true), 0 == _nz5) return _nz4;
            var _nz7 = _nz2.get_slotnums(409);
            return _nz4.add(_nz6.multiply(_nz7)), _nz4;
        };
    },
    79988: (_nz8, _nz9, _nza) => {
        'use strict';
        var _nzb = null;
        defineModule(_nz9);
        Object.defineProperty(_nz9, '__esModule', {
            'value': true
        }), _nz9.getSlot411PersonalEffect = void 0;
        var _nzc = _nza(74496);
        _nz9.getSlot411PersonalEffect = function(_nzd) {
            var _nze = null,
                _nzf = new _nzc.SlotItemEffectModel(),
                _nzg = new _nzc.SlotItemEffectModel(),
                _nzh = false,
                _nzi = 0;
            if (2 == _nzd.stype && (_nzg.kaih -= 9, _nzh = true), 3 != _nzd.stype && 4 != _nzd.stype || (_nzg.kaih -= 7, _nzh = true), 21 == _nzd.stype && (_nzg.kaih -= 6, _nzh = true), 5 != _nzd.stype && 6 != _nzd.stype || (_nzg.kaih -= 5, _nzh = true), 593 == _nzd.ship_id && (_nzf.houg += 1, _nzf.tyku += 2, _nzf.kaih += 3), 151 == _nzd.ship_id || 411 == _nzd.ship_id || 412 == _nzd.ship_id || 593 == _nzd.ship_id || 954 == _nzd.ship_id ? (_nzf.houg += 3, _nzf.tyku += 4, _nzi = 1) : 541 != _nzd.ship_id && 573 != _nzd.ship_id && 553 != _nzd.ship_id && 554 != _nzd.ship_id || (_nzf.houg += 2, _nzf.tyku += 2, _nzi = 1), _nzh) {
                var _nzj = _nzd.get_slotnums(411);
                _nzf.add(_nzg.multiply(_nzj));
            }
            if (0 == _nzi) return _nzf;
            var _nzk = _nzd.get_each_level_nums(411),
                _nzl = 0;
            return _nzi > 0 && _nzk.forEach(function(_nzm, _nzn) {
                _nzn >= 4 && (_nzl += _nzm);
            }), 1 == _nzi && (_nzl >= 1 && (_nzf.houg += 1, _nzf.tyku += 1), _nzk[10] >= 1 && (_nzf.houg += 1, _nzf.tyku += 1)), _nzf;
        };
    },
    74428: (_nzo, _nzp, _nzq) => {
        'use strict';
        var _nzr = null;
        defineModule(_nzp);
        Object.defineProperty(_nzp, '__esModule', {
            'value': true
        }), _nzp.getSlot412PersonalEffect = void 0;
        var _nzs = _nzq(74496);
        _nzp.getSlot412PersonalEffect = function(_nzt) {
            var _nzu = null,
                _nzv = new _nzs.SlotItemEffectModel(),
                _nzw = false,
                _nzx = 0,
                _nzy = new _nzs.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_nzt.ctype) >= 0 ? (_nzv.houg += 2, _nzv.raig += 4, _nzv.tais += 2, _nzy.kaih += 3, _nzy.saku += 1, _nzw = true, _nzx = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_nzt.ctype) >= 0 ? (_nzv.houg += 3, _nzv.raig += 3, _nzy.kaih += 2, _nzy.saku += 3, _nzw = true, _nzx = 1) : [7, 13, 29, 8, 9, 31].indexOf(_nzt.ctype) >= 0 && (_nzv.houg += 1, _nzy.kaih += 1, _nzy.saku += 1, _nzw = true), 0 == _nzw) return _nzv;
            var _nzz = _nzt.get_slotnums(412);
            if (_nzv.add(_nzy.multiply(_nzz)), 0 == _nzx) return _nzv;
            var _o00 = _nzt.get_each_level_nums(412),
                _o01 = 0,
                _o02 = 0;
            return _nzx > 0 && _o00.forEach(function(_o03, _o04) {
                _o04 >= 4 && (_o01 += _o03), _o04 >= 8 && (_o02 += _o03);
            }), 1 == _nzx && (_o01 > 0 && (_nzv.houg += 1), _o02 > 0 && (_nzv.raig += 1)), _nzv;
        };
    },
    2631: (_o05, _o06, _o07) => {
        'use strict';
        var _o08 = null;
        defineModule(_o06);
        Object.defineProperty(_o06, '__esModule', {
            'value': true
        }), _o06.getSlot413PersonalEffect = void 0;
        var _o09 = _o07(74496);
        _o06.getSlot413PersonalEffect = function(_o0a) {
            var _o0b = null,
                _o0c = new _o09.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o0a.ctype) >= 0 ? (_o0c.houg += 2, _o0c.raig += 2, _o0c.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o0a.ctype) >= 0 && (_o0c.houg += 4, _o0c.raig += 2, _o0c.kaih += 2), 38 == _o0a.ctype || 54 == _o0a.ctype ? (_o0c.houg += 2, _o0c.raig += 3, _o0c.kaih += 3) : 4 == _o0a.ctype || 20 == _o0a.ctype || 16 == _o0a.ctype || 41 == _o0a.ctype || 52 == _o0a.ctype ? (_o0c.houg += 1, _o0c.raig += 2, _o0c.kaih += 2) : 21 != _o0a.ctype && 34 != _o0a.ctype || (_o0c.tyku += 2, _o0c.raig += 1, _o0c.kaih += 1), 'なか' == _o0a.yomi || 'ゆら' == _o0a.yomi || 'やはぎ' == _o0a.yomi || 'のしろ' == _o0a.yomi || 'はまなみ' == _o0a.yomi || 'しまかぜ' == _o0a.yomi || 'きよしも' == _o0a.yomi || 'はつしも' == _o0a.yomi ? (_o0c.tyku += 1, _o0c.kaih += 1) : 'じんつう' != _o0a.yomi && 'せんだい' != _o0a.yomi && 'ながなみ' != _o0a.yomi && 'はつしも' != _o0a.yomi && 'てるづき' != _o0a.yomi || (_o0c.houg += 1, _o0c.raig += 1), 543 == _o0a.ship_id ? (_o0c.houg += 1, _o0c.kaih += 1) : 159 == _o0a.ship_id && (_o0c.houg += 2), _o0c;
        };
    },
    16498: (_o0d, _o0e, _o0f) => {
        'use strict';
        var _o0g = null;
        defineModule(_o0e);
        Object.defineProperty(_o0e, '__esModule', {
            'value': true
        }), _o0e.getSlot414PersonalEffect = void 0;
        var _o0h = _o0f(74496);
        _o0e.getSlot414PersonalEffect = function(_o0i) {
            var _o0j = null,
                _o0k = new _o0h.SlotItemEffectModel(),
                _o0l = 0;
            if ('アメリカ' == _o0i.getCountryName() && (_o0k.saku += 1, _o0l = 1), 95 != _o0i.ctype && 99 != _o0i.ctype && 106 != _o0i.ctype && 110 != _o0i.ctype && 121 != _o0i.ctype || (_o0k.houg += 1, _o0k.saku += 1, _o0l = 2), 0 == _o0l) return _o0k;
            var _o0m = _o0i.get_each_level_nums(414),
                _o0n = 0,
                _o0o = 0,
                _o0p = 0;
            return _o0l > 0 && _o0m.forEach(function(_o0q, _o0r) {
                _o0r >= 5 && (_o0n += _o0q), _o0r >= 3 && (_o0o += _o0q), _o0r >= 8 && (_o0p += _o0q);
            }), _o0l > 0 && _o0n >= 1 && (_o0k.kaih += 1), 2 == _o0l && (_o0o >= 1 && (_o0k.saku += 1), _o0p >= 1 && (_o0k.kaih += 1), _o0m[10] >= 1 && (_o0k.houg += 1)), _o0k;
        };
    },
    27177: (_o0s, _o0t, _o0u) => {
        'use strict';
        var _o0v = null;
        defineModule(_o0t);
        Object.defineProperty(_o0t, '__esModule', {
            'value': true
        }), _o0t.getSlot415PersonalEffect = void 0;
        var _o0w = _o0u(74496);
        _o0t.getSlot415PersonalEffect = function(_o0x) {
            var _o0y = null,
                _o0z = new _o0w.SlotItemEffectModel(),
                _o10 = [];
            if ('アメリカ' == _o0x.getCountryName() && (_o0z.saku += 1, _o0z.tais += 1, _o10.push(1)), 95 != _o0x.ctype && 99 != _o0x.ctype && 106 != _o0x.ctype && 110 != _o0x.ctype && 121 != _o0x.ctype || (_o0z.houg += 1, _o10.push(2)), 0 == _o10.length) return _o0z;
            var _o11 = _o0x.get_each_level_nums(415),
                _o12 = 0,
                _o13 = 0,
                _o14 = 0;
            return _o10.length > 0 && (_o11.forEach(function(_o15, _o16) {
                _o16 >= 5 && (_o12 += _o15), _o16 >= 3 && (_o13 += _o15), _o16 >= 8 && (_o14 += _o15);
            }), _o10.forEach(function(_o17) {
                var _o18 = null;
                1 == _o17 ? _o12 >= 1 && (_o0z.kaih += 1) : 2 == _o17 && (_o13 >= 1 && (_o0z.kaih += 1), _o14 >= 1 && (_o0z.houg += 1));
            })), _o0z;
        };
    },
    53908: (_o19, _o1a, _o1b) => {
        'use strict';
        var _o1c = null;
        defineModule(_o1a);
        Object.defineProperty(_o1a, '__esModule', {
            'value': true
        }), _o1a.getSlot419PersonalEffect = void 0;
        var _o1d = _o1b(74496);
        _o1a.getSlot419PersonalEffect = function(_o1e) {
            var _o1f = null,
                _o1g = new _o1d.SlotItemEffectModel(),
                _o1h = false,
                _o1i = new _o1d.SlotItemEffectModel(),
                _o1j = 0;
            if ('アメリカ' == _o1e.getCountryName() && (_o1i.houg += 2, _o1h = true, _o1j = 1), 0 == _o1h) return _o1g;
            var _o1k = _o1e.get_slotnums(419);
            if (_o1g.add(_o1i.multiply(_o1k)), 0 == _o1j) return _o1g;
            var _o1l = _o1e.get_each_level_nums(419),
                _o1m = 0,
                _o1n = 0;
            return _o1j > 0 && _o1l.forEach(function(_o1o, _o1p) {
                _o1p >= 2 && (_o1m += _o1o), _o1p >= 7 && (_o1n += _o1o);
            }), 1 == _o1j && (_o1m >= 1 && (_o1g.houg += 1 * _o1m), _o1n >= 1 && (_o1g.houg += 1 * _o1n)), _o1g;
        };
    },
    79813: (_o1q, _o1r, _o1s) => {
        'use strict';
        var _o1t = null;
        defineModule(_o1r);
        Object.defineProperty(_o1r, '__esModule', {
            'value': true
        }), _o1r.getSlot420PersonalEffect = void 0;
        var _o1u = _o1s(74496);
        _o1r.getSlot420PersonalEffect = function(_o1v) {
            var _o1w = null,
                _o1x = new _o1u.SlotItemEffectModel(),
                _o1y = false,
                _o1z = new _o1u.SlotItemEffectModel(),
                _o20 = 0;
            if ('アメリカ' != _o1v.getCountryName() && 67 != _o1v.ctype && 78 != _o1v.ctype && 82 != _o1v.ctype && 88 != _o1v.ctype && 108 != _o1v.ctype && 112 != _o1v.ctype || (_o1z.houg += 1, _o20 = 1, _o1y = true), 84 == _o1v.ctype ? (_o1z.houg += 1, _o1y = true) : 78 == _o1v.ctype && (_o1z.houg -= 1, _o1y = true), 7 == _o1v.stype && (_o1z.houg -= 2, _o1z.kaih -= 1, _o1z.souk -= 2, _o1y = true), 0 == _o1y) return _o1x;
            var _o21 = _o1v.get_slotnums(420);
            if (_o1x.add(_o1z.multiply(_o21)), 0 == _o20) return _o1x;
            var _o22 = _o1v.get_each_level_nums(420),
                _o23 = 0;
            return _o20 > 0 && _o22.forEach(function(_o24, _o25) {
                _o25 >= 3 && (_o23 += _o24);
            }), 1 == _o20 && _o23 >= 1 && (_o1x.houg += 1 * _o23), _o1x;
        };
    },
    16088: (_o26, _o27, _o28) => {
        'use strict';
        var _o29 = null;
        defineModule(_o27);
        Object.defineProperty(_o27, '__esModule', {
            'value': true
        }), _o27.getSlot421PersonalEffect = void 0;
        var _o2a = _o28(74496);
        _o27.getSlot421PersonalEffect = function(_o2b) {
            var _o2c = null,
                _o2d = new _o2a.SlotItemEffectModel(),
                _o2e = false,
                _o2f = new _o2a.SlotItemEffectModel(),
                _o2g = 0;
            if ('アメリカ' != _o2b.getCountryName() && 67 != _o2b.ctype && 78 != _o2b.ctype && 82 != _o2b.ctype && 88 != _o2b.ctype && 108 != _o2b.ctype && 112 != _o2b.ctype || (_o2f.houg += 2, _o2e = true, _o2g = 1), 84 == _o2b.ctype ? (_o2f.houg += 1, _o2e = true) : 78 == _o2b.ctype && (_o2f.houg -= 1, _o2e = true), 7 == _o2b.stype && (_o2f.houg -= 2, _o2f.kaih -= 1, _o2f.souk -= 2, _o2e = true), 0 == _o2e) return _o2d;
            var _o2h = _o2b.get_slotnums(421);
            if (_o2d.add(_o2f.multiply(_o2h)), 0 == _o2g) return _o2d;
            var _o2i = _o2b.get_each_level_nums(421),
                _o2j = 0;
            return _o2g > 0 && _o2i.forEach(function(_o2k, _o2l) {
                _o2l >= 5 && (_o2j += _o2k);
            }), 1 == _o2g && _o2j >= 1 && (_o2d.houg += 1 * _o2j), _o2d;
        };
    },
    69939: (_o2m, _o2n, _o2o) => {
        'use strict';
        var _o2p = null;
        defineModule(_o2n);
        Object.defineProperty(_o2n, '__esModule', {
            'value': true
        }), _o2n.getSlot422PersonalEffect = void 0;
        var _o2q = _o2o(74496);
        _o2n.getSlot422PersonalEffect = function(_o2r) {
            var _o2s = null,
                _o2t = new _o2q.SlotItemEffectModel(),
                _o2u = false,
                _o2v = new _o2q.SlotItemEffectModel();
            if ('アメリカ' != _o2r.getCountryName() && 67 != _o2r.ctype && 78 != _o2r.ctype && 82 != _o2r.ctype && 88 != _o2r.ctype && 108 != _o2r.ctype && 112 != _o2r.ctype || (_o2v.houg += 1, _o2v.kaih += 1, _o2u = true), 84 == _o2r.ctype && (_o2v.houg += 1, _o2v.tyku += 1, _o2u = true), 707 == _o2r.ship_id && (_o2v.houg += 2, _o2v.kaih += 2, _o2v.tyku += 2, _o2u = true), 0 == _o2u) return _o2t;
            var _o2w = _o2r.get_slotnums(422);
            return _o2t.add(_o2v.multiply(_o2w)), _o2t;
        };
    },
    33734: (_o2x, _o2y, _o2z) => {
        'use strict';
        var _o30 = null;
        defineModule(_o2y);
        Object.defineProperty(_o2y, '__esModule', {
            'value': true
        }), _o2y.getSlot423PersonalEffect = void 0;
        var _o31 = _o2z(74496);
        _o2y.getSlot423PersonalEffect = function(_o32) {
            var _o33 = null,
                _o34 = new _o31.SlotItemEffectModel(),
                _o35 = false,
                _o36 = new _o31.SlotItemEffectModel();
            78 != _o32.ctype && 112 != _o32.ctype || (_o36.houg += 2, _o36.tyku += 2, _o36.kaih += 2, _o36.saku += 2, _o35 = true);
            var _o37 = _o32.getCountryName();
            if (67 == _o32.ctype || 78 == _o32.ctype || 82 == _o32.ctype || 88 == _o32.ctype || 108 == _o32.ctype || 112 == _o32.ctype ? (_o36.houg += 2, _o36.tyku += 2, _o36.kaih += 2, _o36.saku += 2, _o35 = true) : 'アメリカ' == _o37 && (_o36.houg += 1, _o36.tyku += 1, _o36.kaih += 1, _o36.saku += 1, _o35 = true), 0 == _o35) return _o34;
            var _o38 = _o32.get_slotnums(423);
            return _o34.add(_o36.multiply(_o38)), _o34;
        };
    },
    34432: (_o39, _o3a, _o3b) => {
        'use strict';
        var _o3c = null;
        defineModule(_o3a);
        Object.defineProperty(_o3a, '__esModule', {
            'value': true
        }), _o3a.getSlot424PersonalEffect = void 0;
        var _o3d = _o3b(74496);
        _o3a.getSlot424PersonalEffect = function(_o3e) {
            var _o3f = null,
                _o3g = new _o3d.SlotItemEffectModel(),
                _o3h = false,
                _o3i = new _o3d.SlotItemEffectModel(),
                _o3j = 0;
            67 != _o3e.ctype && 78 != _o3e.ctype && 82 != _o3e.ctype && 88 != _o3e.ctype && 108 != _o3e.ctype && 112 != _o3e.ctype || (_o3i.houg += 2, _o3i.raig += 3, _o3h = true, _o3j = 1);
            var _o3k = _o3e.get_slotnums(424);
            _o3h && _o3g.add(_o3i.multiply(_o3k));
            var _o3l = _o3e.get_each_level_nums(424),
                _o3m = 0,
                _o3n = 0,
                _o3o = 0;
            _o3l.forEach(function(_o3p, _o3q) {
                _o3q >= 2 && (_o3m += _o3p), _o3q >= 6 && (_o3n += _o3p), _o3q >= 8 && (_o3o += _o3p);
            });
            var _o3r = _o3l[10];
            return 1 == _o3j && (_o3m >= 1 && (_o3g.houg += 1 * _o3m), _o3n >= 1 && (_o3g.houg += 1 * _o3n), _o3o >= 1 && (_o3g.houm += 1 * _o3o)), _o3r > 0 && (_o3g.houm += 1 * _o3r), _o3g;
        };
    },
    97423: (_o3s, _o3t, _o3u) => {
        'use strict';
        var _o3v = null;
        defineModule(_o3t);
        Object.defineProperty(_o3t, '__esModule', {
            'value': true
        }), _o3t.getSlot425PersonalEffect = void 0;
        var _o3w = _o3u(74496);
        _o3t.getSlot425PersonalEffect = function(_o3x) {
            var _o3y = null,
                _o3z = new _o3w.SlotItemEffectModel(),
                _o40 = false,
                _o41 = new _o3w.SlotItemEffectModel(),
                _o42 = 0;
            67 != _o3x.ctype && 78 != _o3x.ctype && 82 != _o3x.ctype && 88 != _o3x.ctype && 108 != _o3x.ctype && 112 != _o3x.ctype || (_o41.houg += 2, _o41.tais += 2, _o41.raig += 1, _o41.saku += 1, _o40 = true, _o42 = 1);
            var _o43 = _o3x.get_slotnums(425);
            _o40 && _o3z.add(_o41.multiply(_o43));
            var _o44 = _o3x.get_each_level_nums(425),
                _o45 = 0,
                _o46 = 0,
                _o47 = 0,
                _o48 = 0,
                _o49 = 0,
                _o4a = 0;
            _o44.forEach(function(_o4b, _o4c) {
                _o4c >= 2 && (_o45 += _o4b), _o4c >= 4 && (_o46 += _o4b), _o4c >= 6 && (_o47 += _o4b), _o4c >= 7 && (_o48 += _o4b), _o4c >= 8 && (_o49 += _o4b), _o4c >= 9 && (_o4a += _o4b);
            });
            var _o4d = _o44[10];
            return 1 == _o42 && (_o45 >= 1 && (_o3z.tais += 1 * _o45), _o46 >= 1 && (_o3z.houg += 1 * _o46), _o47 >= 1 && (_o3z.tais += 1 * _o47), _o48 >= 1 && (_o3z.houm += 1 * _o48), _o49 >= 1 && (_o3z.raig += 1 * _o49), _o4a >= 1 && (_o3z.houg += 1 * _o4a), _o4d >= 1 && (_o3z.tais += 1 * _o4d)), _o48 >= 1 && (_o3z.houg += 1 * _o48), _o49 >= 1 && (_o3z.tais += 1 * _o49), _o4a >= 1 && (_o3z.houm += 1 * _o4a), _o4d >= 1 && (_o3z.houm += 1 * _o4d), _o3z;
        };
    },
    23551: (_o4e, _o4f, _o4g) => {
        'use strict';
        var _o4h = null;
        defineModule(_o4f);
        Object.defineProperty(_o4f, '__esModule', {
            'value': true
        }), _o4f.getSlot430PersonalEffect = void 0;
        var _o4i = _o4g(74496);
        _o4f.getSlot430PersonalEffect = function(_o4j) {
            var _o4k = null,
                _o4l = new _o4i.SlotItemEffectModel(),
                _o4m = false,
                _o4n = new _o4i.SlotItemEffectModel(),
                _o4o = 0;
            if (113 == _o4j.ctype && (_o4n.tyku += 1, _o4n.kaih += 1, _o4m = true), 58 != _o4j.ctype && 61 != _o4j.ctype && 64 != _o4j.ctype && 68 != _o4j.ctype && 80 != _o4j.ctype && 92 != _o4j.ctype && 113 != _o4j.ctype && 124 != _o4j.ctype || (_o4n.tyku += 2, _o4n.kaih += 1, _o4m = true, _o4o = 1), 0 == _o4m) return _o4l;
            var _o4p = _o4j.get_slotnums(430);
            if (_o4l.add(_o4n.multiply(_o4p)), 0 == _o4o) return _o4l;
            var _o4q = _o4j.get_each_level_nums(430),
                _o4r = 0,
                _o4s = 0,
                _o4t = 0;
            if (_o4o > 0 && _o4q.forEach(function(_o4u, _o4v) {
                    _o4v >= 2 && (_o4r += _o4u), _o4v >= 4 && (_o4s += _o4u), _o4v >= 7 && (_o4t += _o4u);
                }), 1 == _o4o) {
                _o4r >= 1 && (_o4l.kaih += 1 * _o4r), _o4s >= 1 && (_o4l.tyku += 1 * _o4s), _o4t >= 1 && (_o4l.kaih += 1 * _o4t);
                var _o4w = _o4q[10];
                _o4w >= 1 && (_o4l.tyku += 1 * _o4w);
            }
            return _o4l;
        };
    },
    6173: (_o4x, _o4y, _o4z) => {
        'use strict';
        var _o50 = null;
        defineModule(_o4y);
        Object.defineProperty(_o4y, '__esModule', {
            'value': true
        }), _o4y.getSlot437PersonalEffect = void 0;
        var _o51 = _o4z(74496);
        _o4y.getSlot437PersonalEffect = function(_o52) {
            var _o53 = null,
                _o54 = new _o51.SlotItemEffectModel(),
                _o55 = false,
                _o56 = new _o51.SlotItemEffectModel();
            if (285 == _o52.ship_id ? (_o56.houg += 3, _o56.tyku += 3, _o56.kaih += 4, _o55 = true) : 894 == _o52.ship_id || 899 == _o52.ship_id ? (_o56.houg += 4, _o56.tyku += 4, _o56.kaih += 4, _o55 = true) : 196 == _o52.ship_id || 197 == _o52.ship_id ? (_o56.houg += 2, _o56.tyku += 2, _o56.kaih += 3, _o55 = true) : 508 == _o52.ship_id || 509 == _o52.ship_id || 646 == _o52.ship_id ? (_o56.houg += 2, _o56.tyku += 2, _o56.kaih += 2, _o55 = true) : 888 != _o52.ship_id && 883 != _o52.ship_id && 553 != _o52.ship_id && 554 != _o52.ship_id || (_o56.houg += 1, _o56.tyku += 2, _o56.kaih += 2, _o55 = true), 0 == _o55) return _o54;
            var _o57 = _o52.get_slotnums(437);
            return _o54.add(_o56.multiply(_o57)), _o54;
        };
    },
    53709: (_o58, _o59, _o5a) => {
        'use strict';
        var _o5b = null;
        defineModule(_o59);
        Object.defineProperty(_o59, '__esModule', {
            'value': true
        }), _o59.getSlot438PersonalEffect = void 0;
        var _o5c = _o5a(74496);
        _o59.getSlot438PersonalEffect = function(_o5d) {
            var _o5e = null,
                _o5f = new _o5c.SlotItemEffectModel(),
                _o5g = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o5d.ctype) > -1 && (_o5f.tais += 1, _o5f.kaih += 1), 160 == _o5d.ship_id || 488 == _o5d.ship_id || 141 == _o5d.ship_id ? (_o5f.tais += 1, _o5f.kaih += 1) : 145 != _o5d.ship_id && 588 != _o5d.ship_id && 667 != _o5d.ship_id && 578 != _o5d.ship_id && 476 != _o5d.ship_id && 363 != _o5d.ship_id && 961 != _o5d.ship_id || (_o5g = 1), 'うしお' == _o5d.yomi || 'まいかぜ' == _o5d.yomi || 'いそかぜ' == _o5d.yomi || 'はまかぜ' == _o5d.yomi || 'いかづち' == _o5d.yomi || 'やまぐも' == _o5d.yomi || 'うみかぜ' == _o5d.yomi || 'かわかぜ' == _o5d.yomi || 'すずかぜ' == _o5d.yomi ? _o5f.tais += 1 : 'しぐれ' != _o5d.yomi && 'やまかぜ' != _o5d.yomi && 'かみかぜ' != _o5d.yomi && 'はるかぜ' != _o5d.yomi && 'みくら' != _o5d.yomi && 'いしがき' != _o5d.yomi || (_o5f.tais += 1, _o5f.kaih += 1), 0 == _o5g) return _o5f;
            var _o5h = _o5d.get_each_level_nums(438),
                _o5i = 0,
                _o5j = 0,
                _o5k = 0,
                _o5l = _o5h[10];
            return _o5g > 0 && _o5h.forEach(function(_o5m, _o5n) {
                _o5n >= 4 && (_o5i += _o5m), _o5n >= 6 && (_o5j += _o5m), _o5n >= 8 && (_o5k += _o5m);
            }), 1 == _o5g && (_o5i >= 1 && (_o5f.tais += 1), _o5j >= 1 && (_o5f.kaih += 1), _o5k >= 1 && (_o5f.tais += 1), _o5l >= 1 && (_o5f.kaih += 1)), _o5f;
        };
    },
    99790: (_o5o, _o5p, _o5q) => {
        'use strict';
        var _o5r = null;
        defineModule(_o5p);
        Object.defineProperty(_o5p, '__esModule', {
            'value': true
        }), _o5p.getSlot439PersonalEffect = void 0;
        var _o5s = _o5q(74496);
        _o5p.getSlot439PersonalEffect = function(_o5t) {
            var _o5u = null,
                _o5v = new _o5s.SlotItemEffectModel();
            1 != _o5t.stype && 2 != _o5t.stype && 3 != _o5t.stype && 21 != _o5t.stype || (_o5v.tais += 1, _o5v.kaih += 1), 101 != _o5t.ctype && 1 != _o5t.stype || (_o5v.tais += 1);
            var _o5w = _o5t.getCountryName();
            return 'アメリカ' != _o5w && 'イギリス' != _o5w || (_o5v.tais += 2), _o5v;
        };
    },
    18387: (_o5x, _o5y, _o5z) => {
        'use strict';
        var _o60 = null;
        defineModule(_o5y);
        Object.defineProperty(_o5y, '__esModule', {
            'value': true
        }), _o5y.getSlot440_441PersonalEffect = void 0;
        var _o61 = _o5z(74496);
        _o5y.getSlot440_441PersonalEffect = function(_o62) {
            var _o63 = null,
                _o64 = new _o61.SlotItemEffectModel();
            return 114 == _o62.ctype && (_o64.raig += 2), _o64;
        };
    },
    70941: (_o65, _o66, _o67) => {
        'use strict';
        var _o68 = null;
        defineModule(_o66);
        Object.defineProperty(_o66, '__esModule', {
            'value': true
        }), _o66.getSlot442_443PersonalEffect = void 0;
        var _o69 = _o67(74496);
        _o66.getSlot442_443PersonalEffect = function(_o6a) {
            var _o6b = null,
                _o6c = new _o69.SlotItemEffectModel();
            return 122 == _o6a.ctype ? (_o6c.raig += 1, _o6c.kaih += 2) : 114 == _o6a.ctype && (_o6c.raig += 2), _o6c;
        };
    },
    35025: (_o6d, _o6e, _o6f) => {
        'use strict';
        var _o6g = null;
        defineModule(_o6e);
        Object.defineProperty(_o6e, '__esModule', {
            'value': true
        }), _o6e.getSlot447PersonalEffect = void 0;
        var _o6h = _o6f(74496);
        _o6e.getSlot447PersonalEffect = function(_o6i) {
            var _o6j = null,
                _o6k = new _o6h.SlotItemEffectModel(),
                _o6l = _o6i.get_each_level_nums(447),
                _o6m = 0,
                _o6n = 0,
                _o6o = 0,
                _o6p = 0;
            _o6l.forEach(function(_o6q, _o6r) {
                _o6r >= 2 && (_o6m += _o6q), _o6r >= 4 && (_o6n += _o6q), _o6r >= 6 && (_o6o += _o6q), _o6r >= 8 && (_o6p += _o6q);
            }), _o6m >= 1 && (_o6k.houg += 1 * _o6m), _o6n >= 1 && (_o6k.tyku += 1 * _o6n), _o6o >= 1 && (_o6k.tais += 1 * _o6o), _o6p >= 1 && (_o6k.kaih += 1 * _o6p);
            var _o6s = _o6l[10];
            _o6s >= 1 && (_o6k.tais += 1 * _o6s);
            var _o6t = false,
                _o6u = new _o6h.SlotItemEffectModel();
            if (76 == _o6i.ctype && (_o6u.houg += 1, _o6u.tais += 1, _o6u.kaih += 2, _o6t = true), 'うんよう' == _o6i.yomi ? (_o6u.houg += 1, _o6u.tais += 1, _o6u.kaih += 1, _o6t = true) : 'ほうしょう' != _o6i.yomi && 'たいげい・りゅうほう' != _o6i.yomi || (_o6u.houg += 1, _o6u.tais += 2, _o6u.kaih += 1, _o6t = true), 0 == _o6t) return _o6k;
            894 != _o6i.ship_id && 899 != _o6i.ship_id || (_o6u.houg += 1, _o6u.kaih += 1, _o6u.tais += 1, _o6u.tyku += 1, _o6t = true);
            var _o6v = _o6i.get_slotnums(447);
            return _o6k.add(_o6u.multiply(_o6v)), _o6k;
        };
    },
    96804: (_o6w, _o6x, _o6y) => {
        'use strict';
        var _o6z = null;
        defineModule(_o6x);
        Object.defineProperty(_o6x, '__esModule', {
            'value': true
        }), _o6x.getSlot450PersonalEffect = void 0;
        var _o70 = _o6y(74496);
        _o6x.getSlot450PersonalEffect = function(_o71) {
            var _o72 = null,
                _o73 = new _o70.SlotItemEffectModel(),
                _o74 = false,
                _o75 = new _o70.SlotItemEffectModel();
            if (101 == _o71.ctype && (_o75.houg += 1, _o75.tyku += 2, _o75.souk += 1, _o75.kaih += 3, _o74 = true), 1 == _o71.stype && (_o75.tyku += 1, _o75.souk += 1, _o75.kaih += 2, _o74 = true), 0 == _o74) return _o73;
            var _o76 = _o71.get_slotnums(450);
            return _o73.add(_o75.multiply(_o76)), _o73;
        };
    },
    33896: (_o77, _o78, _o79) => {
        'use strict';
        var _o7a = null;
        defineModule(_o78);
        Object.defineProperty(_o78, '__esModule', {
            'value': true
        }), _o78.getSlot451PersonalEffect = void 0;
        var _o7b = _o79(74496);
        _o78.getSlot451PersonalEffect = function(_o7c) {
            var _o7d = null,
                _o7e = new _o7b.SlotItemEffectModel(),
                _o7f = false,
                _o7g = new _o7b.SlotItemEffectModel(),
                _o7h = 0;
            if ('あきつまる' == _o7c.yomi ? (_o7g.houg += 1, _o7g.tais += 2, _o7f = true, 166 == _o7c.ship_id && (_o7h = 2)) : 'やましおまる' == _o7c.yomi && (_o7g.houg += 1, _o7g.tais += 3, _o7f = true, _o7h = 1), 0 == _o7f) return _o7e;
            var _o7i = _o7c.get_slotnums(451);
            if (_o7e.add(_o7g.multiply(_o7i)), 0 == _o7h) return _o7e;
            var _o7j = _o7c.get_each_level_nums(451),
                _o7k = [];
            return _o7h > 0 && _o7j.forEach(function(_o7l, _o7m) {
                var _o7n = null;
                for (var _o7o = 1; _o7o <= _o7c.SLOT_LEVEL_MAX; _o7o++) _o7m >= _o7o && (null == _o7k[_o7o] && (_o7k[_o7o] = 0), _o7k[_o7o] += _o7l);
            }), 1 == _o7h ? (_o7k[1] >= 1 && (_o7e.houg += 2 * _o7k[1]), _o7k[2] >= 1 && (_o7e.houm += 1 * _o7k[2]), _o7k[3] >= 1 && (_o7e.tais += 1 * _o7k[3]), _o7k[4] >= 1 && (_o7e.houg += 1 * _o7k[4]), _o7k[6] >= 1 && (_o7e.houm += 1 * _o7k[6]), _o7k[8] >= 1 && (_o7e.tais += 1 * _o7k[8]), _o7k[10] >= 1 && (_o7e.houg += 1 * _o7k[10])) : 2 == _o7h && (_o7k[1] >= 1 && (_o7e.houg += 1 * _o7k[1]), _o7k[3] >= 1 && (_o7e.tais += 1 * _o7k[3]), _o7k[5] >= 1 && (_o7e.houm += 1 * _o7k[5]), _o7k[7] >= 1 && (_o7e.tais += 1 * _o7k[7]), _o7k[10] >= 1 && (_o7e.houg += 1 * _o7k[10])), _o7e;
        };
    },
    11031: function(_o7p, _o7q, _o7r) {
        'use strict';
        var _o7s = null;
        var _o7t = this && this.__importDefault || function(_o7u) {
            var _o7v = null;
            return _o7u && _o7u.__esModule ? _o7u : {
                'default': _o7u
            };
        };
        defineModule(_o7q);
        Object.defineProperty(_o7q, '__esModule', {
            'value': true
        }), _o7q.getSlot455PersonalEffect = void 0;
        var _o7w = _o7r(74496),
            _o7x = _o7t(_o7r(18622));
        _o7q.getSlot455PersonalEffect = function(_o7y) {
            var _o7z = null,
                _o80 = new _o7w.SlotItemEffectModel(),
                _o81 = false,
                _o82 = new _o7w.SlotItemEffectModel(),
                _o83 = 0,
                _o84 = _o7y.get_slotnums(455);
            if (1 != _o7y.ctype && 5 != _o7y.ctype && 12 != _o7y.ctype || (_o82.houg += 2, _o82.tyku += 1, 12 == _o7y.ctype && (_o82.houg += 1), 666 == _o7y.ship_id ? (_o82.houg += 1, _o82.tais += 1) : 959 == _o7y.ship_id && (_o82.houg += 2, _o84 >= 2 && (_o80.houg += 2), _o84 >= 3 && (_o80.houg += 3)), _o83 = 1, _o81 = true), 'うらなみ' == _o7y.yomi && (_o82.houg += 1, 647 == _o7y.ship_id && (_o82.houg += 1, _o82.raig += 1, _o82.tais += 1, _o82.kaih += 1), _o81 = true), 0 == _o81) return _o80;
            if (_o80.add(_o82.multiply(_o84)), 0 == _o83) return _o80;
            for (var _o85 = 0, _o86 = 0, _o87 = 0, _o88 = _o7y.have_slot_ids(); _o87 < _o88.length; _o87++) {
                var _o89 = _o88[_o87],
                    _o8a = _o7x.default.model.slot.getMst(_o89),
                    _o8b = _o8a.equipType;
                12 != _o8b && 13 != _o8b || (_o8a.sakuteki >= 5 && (_o85 += _o7y.get_slotnums(parseInt(_o89))), _o8a.taiku >= 2 && (_o86 += _o7y.get_slotnums(parseInt(_o89))));
            }
            if (1 == _o83) {
                _o85 >= 1 && (_o80.houg += 3, _o80.kaih += 2, _o80.raig += 1);
                var _o8c = _o7y.get_slotnums(13),
                    _o8d = _o7y.get_slotnums(125),
                    _o8e = _o7y.get_slotnums(285),
                    _o8f = _o8c + _o8d + _o8e;
                1 == _o8f ? (_o80.houg += 1, _o80.raig += 3) : _o8f >= 2 && (_o80.houg += 2, _o80.raig += 5), _o8e >= 1 && (_o80.raig += 1), _o86 >= 1 && (_o80.tyku += 4);
            }
            return _o80;
        };
    },
    71383: (_o8g, _o8h, _o8i) => {
        'use strict';
        var _o8j = null;
        defineModule(_o8h);
        Object.defineProperty(_o8h, '__esModule', {
            'value': true
        }), _o8h.getSlot456PersonalEffect = void 0;
        var _o8k = _o8i(74496);
        _o8h.getSlot456PersonalEffect = function(_o8l) {
            var _o8m = null,
                _o8n = new _o8k.SlotItemEffectModel(),
                _o8o = false,
                _o8p = new _o8k.SlotItemEffectModel(),
                _o8q = _o8l.getCountryName();
            if ('アメリカ' == _o8q && (_o8p.houg += 3, _o8p.kaih += 4, _o8p.saku += 4, _o8n.houm += 3, _o8o = true), 'イギリス' != _o8q && 'オーストラリア' != _o8q || (_o8p.houg += 2, _o8p.kaih += 2, _o8p.saku += 2, _o8n.houm += 2, _o8o = true), 87 != _o8l.ctype && 91 != _o8l.ctype || (_o8p.houg += 1, _o8n.leng += 1, _o8o = true), 651 != _o8l.ship_id && 656 != _o8l.ship_id || (_o8n.houg += 2, _o8n.kaih += 2, _o8n.saku += 3, _o8n.leng += 1, _o8n.houm += 2), 0 == _o8o) return _o8n;
            var _o8r = _o8l.get_slotnums(456);
            return _o8n.add(_o8p.multiply(_o8r)), _o8n;
        };
    },
    55888: (_o8s, _o8t, _o8u) => {
        'use strict';
        var _o8v = null;
        defineModule(_o8t);
        Object.defineProperty(_o8t, '__esModule', {
            'value': true
        }), _o8t.getSlot457PersonalEffect = void 0;
        var _o8w = _o8u(74496);
        _o8t.getSlot457PersonalEffect = function(_o8x) {
            var _o8y = null,
                _o8z = new _o8w.SlotItemEffectModel(),
                _o90 = 0;
            if (109 == _o8x.ctype ? (_o8z.raig += 3, _o8z.kaih += 3, _o90 = 1) : 71 == _o8x.ctype || 103 == _o8x.ctype ? (_o8z.raig += 2, _o8z.kaih += 2, _o90 = 2) : 44 == _o8x.ctype && (_o8z.raig += 1, _o8z.kaih += 4, _o90 = 3), 0 == _o90) return _o8z;
            var _o91 = _o8x.get_each_level_nums(461),
                _o92 = [];
            return _o90 > 0 && _o91.forEach(function(_o93, _o94) {
                var _o95 = null;
                for (var _o96 = 1; _o96 <= _o8x.SLOT_LEVEL_MAX; _o96++) null == _o92[_o96] && (_o92[_o96] = 0), _o94 >= _o96 && (_o92[_o96] += _o93);
            }), 1 == _o90 ? (_o92[2] >= 1 && (_o8z.raig += 1 * _o92[2]), _o92[3] >= 1 && (_o8z.kaih += 1 * _o92[3]), _o92[4] >= 1 && (_o8z.raig += 1 * _o92[4]), _o92[5] >= 1 && (_o8z.houm += 1 * _o92[5]), _o92[6] >= 1 && (_o8z.raig += 1 * _o92[6]), _o92[8] >= 1 && (_o8z.raig += 1 * _o92[8]), _o92[10] >= 1 && (_o8z.houm += 1 * _o92[10])) : 2 == _o90 ? (_o92[3] >= 1 && (_o8z.kaih += 1 * _o92[3]), _o92[4] >= 1 && (_o8z.raig += 1 * _o92[4]), _o92[6] >= 1 && (_o8z.raig += 1 * _o92[6]), _o92[8] >= 1 && (_o8z.raig += 1 * _o92[8]), _o92[10] >= 1 && (_o8z.houm += 1 * _o92[10])) : 3 == _o90 && (_o92[4] >= 1 && (_o8z.raig += 1 * _o92[4]), _o92[6] >= 1 && (_o8z.raig += 1 * _o92[6]), _o92[8] >= 1 && (_o8z.raig += 1 * _o92[8]), _o92[10] >= 1 && (_o8z.houm += 1 * _o92[10])), _o8z;
        };
    },
    2258: (_o97, _o98, _o99) => {
        'use strict';
        var _o9a = null;
        defineModule(_o98);
        Object.defineProperty(_o98, '__esModule', {
            'value': true
        }), _o98.getSlot458PersonalEffect = void 0;
        var _o9b = _o99(74496);
        _o98.getSlot458PersonalEffect = function(_o9c) {
            var _o9d = null,
                _o9e = new _o9b.SlotItemEffectModel(),
                _o9f = 0,
                _o9g = false;
            if (13 != _o9c.stype && 14 != _o9c.stype || (_o9g = true), 109 == _o9c.ctype ? (_o9e.raig += 3, _o9e.kaih += 6, _o9f = 1) : 71 == _o9c.ctype || 103 == _o9c.ctype ? (_o9e.raig += 3, _o9e.kaih += 4, _o9f = 2) : 44 == _o9c.ctype && (_o9e.raig += 3, _o9e.kaih += 3, _o9f = 3), 0 == _o9g && 0 == _o9f) return _o9e;
            var _o9h = [];
            [458, 461].forEach(function(_o9i) {
                var _o9j = null,
                    _o9k = _o9c.get_each_level_nums(_o9i);
                null == _o9h[_o9i] && (_o9h[_o9i] = []), _o9k.forEach(function(_o9l, _o9m) {
                    var _o9n = null;
                    for (var _o9o = 1; _o9o <= _o9c.SLOT_LEVEL_MAX; _o9o++) null == _o9h[_o9i][_o9o] && (_o9h[_o9i][_o9o] = 0), _o9m >= _o9o && (_o9h[_o9i][_o9o] += _o9l);
                });
            });
            var _o9p = _o9h[458][2],
                _o9q = _o9h[458][3],
                _o9r = _o9h[458][4],
                _o9s = _o9h[458][5],
                _o9t = _o9h[458][6],
                _o9u = _o9h[458][8],
                _o9v = _o9h[458][10],
                _o9w = _o9h[461][4];
            return _o9f >= 1 && _o9f <= 3 && (_o9r >= 1 && (_o9e.houm += 1 * _o9r), _o9t >= 1 && (_o9e.kaih += 1 * _o9t), _o9u >= 1 && (_o9e.raig += 1 * _o9u)), _o9g && (_o9q >= 1 && (_o9e.kaih += 1 * _o9q), _o9s >= 1 && (_o9e.raig += 1 * _o9s), _o9v >= 1 && (_o9e.houm += 1 * _o9v), _o9p >= 1 && _o9w >= 1 && (_o9e.raig += 7, _o9e.houm += 5)), _o9e;
        };
    },
    43768: (_o9x, _o9y, _o9z) => {
        'use strict';
        var _oa0 = null;
        defineModule(_o9y);
        Object.defineProperty(_o9y, '__esModule', {
            'value': true
        }), _o9y.getSlot463PersonalEffect = void 0;
        var _oa1 = _o9z(74496);
        _o9y.getSlot463PersonalEffect = function(_oa2) {
            var _oa3 = null,
                _oa4 = new _oa1.SlotItemEffectModel(),
                _oa5 = false,
                _oa6 = new _oa1.SlotItemEffectModel(),
                _oa7 = _oa2.get_slotnums(142),
                _oa8 = _oa2.get_slotnums(460),
                _oa9 = _oa7 + _oa8;
            if (37 == _oa2.ctype && (_oa6.houg += 1, _oa6.tyku += 2, _oa6.kaih += 1, _oa6.houm += 1, _oa9 >= 1 && (_oa4.tyku += 1, _oa4.kaih += 1, _oa4.houm += 1), _oa5 = true), 916 != _oa2.ship_id && 911 != _oa2.ship_id && 546 != _oa2.ship_id || (_oa6.houg += 1, _oa6.kaih += 1, _oa6.houm += 2, _oa8 >= 1 && (_oa4.houg += 1, _oa4.kaih += 1, _oa4.houm += 2), _oa5 = true), 0 == _oa5) return _oa4;
            var _oaa = _oa2.get_slotnums(463);
            return _oa4.add(_oa6.multiply(_oaa)), _oa4;
        };
    },
    92174: (_oab, _oac, _oad) => {
        'use strict';
        var _oae = null;
        defineModule(_oac);
        Object.defineProperty(_oac, '__esModule', {
            'value': true
        }), _oac.getSlot464PersonalEffect = void 0;
        var _oaf = _oad(74496);
        _oac.getSlot464PersonalEffect = function(_oag) {
            var _oah = null,
                _oai = new _oaf.SlotItemEffectModel(),
                _oaj = false,
                _oak = new _oaf.SlotItemEffectModel(),
                _oal = _oag.get_slotnums(142),
                _oam = _oag.get_slotnums(460),
                _oan = _oal + _oam;
            if (37 == _oag.ctype ? (_oak.tyku += 3, _oak.kaih += 2, _oan >= 1 && (_oai.tyku += 2, _oai.kaih += 1, _oai.houm += 1), _oaj = true) : 6 != _oag.ctype && 73 != _oag.ctype && 113 != _oag.ctype || (_oak.tyku = _oak.tyku - 2, _oak.kaih = _oak.kaih - 2, _oaj = true), 916 != _oag.ship_id && 911 != _oag.ship_id && 546 != _oag.ship_id && 593 != _oag.ship_id && 954 != _oag.ship_id || (_oak.tyku += 2, _oak.kaih += 2, _oam >= 1 && (_oai.houg += 2, _oai.tyku += 2, _oai.kaih += 2, _oai.houm += 3), _oaj = true), 0 == _oaj) return _oai;
            var _oao = _oag.get_slotnums(464);
            return _oai.add(_oak.multiply(_oao)), _oai;
        };
    },
    38003: (_oap, _oaq, _oar) => {
        'use strict';
        var _oas = null;
        defineModule(_oaq);
        Object.defineProperty(_oaq, '__esModule', {
            'value': true
        }), _oaq.getSlot465PersonalEffect = void 0;
        var _oat = _oar(74496);
        _oaq.getSlot465PersonalEffect = function(_oau) {
            var _oav = null,
                _oaw = new _oat.SlotItemEffectModel(),
                _oax = false,
                _oay = new _oat.SlotItemEffectModel(),
                _oaz = _oau.get_slotnums(142),
                _ob0 = _oau.get_slotnums(460),
                _ob1 = _oaz + _ob0;
            if (916 == _oau.ship_id ? (_oay.houg += 2, _oay.kaih += 8, _oay.houm += 2, _ob0 >= 1 && (_oaw.kaih += 2, _oaw.houm += 1), _oax = true) : 911 != _oau.ship_id && 546 != _oau.ship_id || (_oay.houg += 1, _oay.kaih += 2, _oay.houm += 1, _ob0 >= 1 && (_oaw.kaih += 1, _oaw.houm += 1), _oax = true), 37 == _oau.ctype && _ob1 >= 1 && (_oaw.houg += 2, _oaw.houm += 2), 0 == _oax) return _oaw;
            var _ob2 = _oau.get_slotnums(465);
            return _oaw.add(_oay.multiply(_ob2)), _oaw;
        };
    },
    65455: (_ob3, _ob4, _ob5) => {
        'use strict';
        var _ob6 = null;
        defineModule(_ob4);
        Object.defineProperty(_ob4, '__esModule', {
            'value': true
        }), _ob4.getSlot466PersonalEffect = void 0;
        var _ob7 = _ob5(74496);
        _ob4.getSlot466PersonalEffect = function(_ob8) {
            var _ob9 = null,
                _oba = new _ob7.SlotItemEffectModel(),
                _obb = false,
                _obc = new _ob7.SlotItemEffectModel();
            if (277 == _ob8.ship_id || 278 == _ob8.ship_id || 156 == _ob8.ship_id || 288 == _ob8.ship_id || 112 == _ob8.ship_id || 280 == _ob8.ship_id || 279 == _ob8.ship_id ? (_obc.houg += 1, _obc.houm += 1, _obb = true) : 461 == _ob8.ship_id || 462 == _ob8.ship_id || 466 == _ob8.ship_id || 467 == _ob8.ship_id ? (_obc.houg += 2, _obc.kaih += 2, _obc.houm += 1, _obb = true) : 594 != _ob8.ship_id && 698 != _ob8.ship_id && 646 != _ob8.ship_id && 599 != _ob8.ship_id && 610 != _ob8.ship_id && 196 != _ob8.ship_id && 197 != _ob8.ship_id || (_obc.houg += 1, _obc.kaih += 1, _obc.houm += 2, _obb = true), 0 == _obb) return _oba;
            var _obd = _ob8.get_slotnums(466);
            return _oba.add(_obc.multiply(_obd)), _oba;
        };
    },
    70362: (_obe, _obf, _obg) => {
        'use strict';
        var _obh = null;
        defineModule(_obf);
        Object.defineProperty(_obf, '__esModule', {
            'value': true
        }), _obf.getSlot467PersonalEffect = void 0;
        var _obi = _obg(74496);
        _obf.getSlot467PersonalEffect = function(_obj) {
            var _obk = null,
                _obl = new _obi.SlotItemEffectModel(),
                _obm = false,
                _obn = new _obi.SlotItemEffectModel();
            if ('アメリカ' == _obj.getCountryName()) {
                for (var _obo = _obj.getUSSWaterRaderDict(), _obp = _obj.getUSSAirRaderDict(), _obq = 0, _obr = 0, _obs = 0, _obt = _obj.have_slot_ids(); _obs < _obt.length; _obs++) {
                    var _obu = _obt[_obs];
                    _obo[parseInt(_obu)] && (_obq += _obj.get_slotnums(parseInt(_obu))), _obp[parseInt(_obu)] && (_obr += _obj.get_slotnums(parseInt(_obu)));
                }
                _obn.houg += 1, _obn.tyku += 1, _obn.kaih += 2, _obq >= 1 && (_obl.houg += 1, _obl.tyku += 1, _obl.kaih += 1, _obl.houm += 2), _obr >= 1 && (_obl.tyku += 2, _obl.kaih += 2), 65 != _obj.ctype && 93 != _obj.ctype && 102 != _obj.ctype && 107 != _obj.ctype && 125 != _obj.ctype || (_obn.tyku += 2, _obn.kaih += 1), _obm = true;
            }
            if (0 == _obm) return _obl;
            var _obv = _obj.get_slotnums(467);
            return _obl.add(_obn.multiply(_obv)), _obl;
        };
    },
    68086: function(_obw, _obx, _oby) {
        'use strict';
        var _obz = null;
        var _oc0 = this && this.__importDefault || function(_oc1) {
            var _oc2 = null;
            return _oc1 && _oc1.__esModule ? _oc1 : {
                'default': _oc1
            };
        };
        defineModule(_obx);
        Object.defineProperty(_obx, '__esModule', {
            'value': true
        }), _obx.getSlot470PersonalEffect = void 0;
        var _oc3 = _oby(74496),
            _oc4 = _oc0(_oby(18622));
        _obx.getSlot470PersonalEffect = function(_oc5) {
            var _oc6 = null,
                _oc7 = new _oc3.SlotItemEffectModel(),
                _oc8 = false,
                _oc9 = new _oc3.SlotItemEffectModel(),
                _oca = 0,
                _ocb = 0;
            23 == _oc5.ctype || 18 == _oc5.ctype ? (_oc9.houg += 1, _oc8 = true, _oca = 1) : 30 == _oc5.ctype && (_oc9.houg += 2, _oc8 = true, _oca = 2), ('しぐれ' == _oc5.yomi || 'ゆきかぜ' == _oc5.yomi || 'いそかぜ' == _oc5.yomi) && (_oc9.kaih += 2, _oc8 = true), 961 == _oc5.ship_id && (_oc9.houg += 3, _oc9.houm += 3, _oc9.kaih += 2, _oc8 = true);
            var _occ = _oc5.get_slotnums(470);
            566 != _oc5.ship_id && 567 != _oc5.ship_id && 568 != _oc5.ship_id && 656 != _oc5.ship_id && 670 != _oc5.ship_id && 915 != _oc5.ship_id && 651 != _oc5.ship_id && 145 != _oc5.ship_id && 961 != _oc5.ship_id && 951 != _oc5.ship_id || (_oc7.houg += 1, _oc7.houm += 2, _occ >= 2 && (_oc7.houg += 2), _ocb = 1), _oc8 && _oc7.add(_oc9.multiply(_occ));
            var _ocd = 0;
            if (_oca > 0)
                for (var _oce = 0, _ocf = _oc5.have_slot_ids(); _oce < _ocf.length; _oce++) {
                    var _ocg = _ocf[_oce],
                        _och = _oc4.default.model.slot.getMst(_ocg),
                        _oci = _och.equipType;
                    12 != _oci && 13 != _oci || (_och.sakuteki >= 5 && (_ocd += _oc5.get_slotnums(parseInt(_ocg))), _och.taiku >= 2 && _oc5.get_slotnums(parseInt(_ocg)));
                }
            if (1 == _oca ? _ocd >= 1 && (_oc7.houg += 1, _oc7.kaih += 1, _oc7.raig += 3, _oc7.houm += 1) : 2 == _oca && _ocd >= 1 && (_oc7.houg += 2, _oc7.kaih += 1, _oc7.raig += 3, _oc7.houm += 3), 0 == _ocb) return _oc7;
            var _ocj = _oc5.get_each_level_nums(470),
                _ock = 0,
                _ocl = 0;
            if (_ocb > 0 && _ocj.forEach(function(_ocm, _ocn) {
                    _ocn >= 5 && (_ock += _ocm), _ocn >= 8 && (_ocl += _ocm);
                }), 1 == _ocb) {
                _ock >= 1 && (_oc7.houm += 1 * _ock), _ocl >= 1 && (_oc7.houg += 1 * _ocl);
                var _oco = _ocj[10];
                _oco >= 1 && (_oc7.houm += 1 * _oco);
            }
            return _oc7;
        };
    },
    78173: (_ocp, _ocq, _ocr) => {
        'use strict';
        var _ocs = null;
        defineModule(_ocq);
        Object.defineProperty(_ocq, '__esModule', {
            'value': true
        }), _ocq.getSlot471PersonalEffect = void 0;
        var _oct = _ocr(74496);
        _ocq.getSlot471PersonalEffect = function(_ocu) {
            var _ocv = null,
                _ocw = new _oct.SlotItemEffectModel(),
                _ocx = false,
                _ocy = new _oct.SlotItemEffectModel(),
                _ocz = 0;
            if ('フランス' == _ocu.getCountryName() && (_ocy.houg += 2, _ocy.kaih += 2, _ocy.houm += 2, _ocx = true, _ocz = 1), 79 == _ocu.ctype && (_ocy.houg += 2, _ocy.houm += 1, _ocx = true), 0 == _ocx) return _ocw;
            var _od0 = _ocu.get_slotnums(471);
            if (_ocw.add(_ocy.multiply(_od0)), 0 == _ocz) return _ocw;
            var _od1 = _ocu.get_each_level_nums(471),
                _od2 = 0,
                _od3 = 0;
            if (_ocz > 0 && _od1.forEach(function(_od4, _od5) {
                    _od5 >= 6 && (_od2 += _od4), _od5 >= 8 && (_od3 += _od4);
                }), 1 == _ocz) {
                _od2 >= 1 && (_ocw.kaih += 1 * _od2, _ocw.houm += 1 * _od2), _od3 >= 1 && (_ocw.houg += 1 * _od3, _ocw.kaih += 1 * _od3, _ocw.houm += 1 * _od3);
                var _od6 = _od1[10];
                _od6 >= 1 && (_ocw.houg += 1 * _od6, _ocw.houm += 1 * _od6);
            }
            return _ocw;
        };
    },
    22581: (_od7, _od8, _od9) => {
        'use strict';
        var _oda = null;
        defineModule(_od8);
        Object.defineProperty(_od8, '__esModule', {
            'value': true
        }), _od8.getSlot472PersonalEffect = void 0;
        var _odb = _od9(74496);
        _od8.getSlot472PersonalEffect = function(_odc) {
            var _odd = null,
                _ode = new _odb.SlotItemEffectModel(),
                _odf = false,
                _odg = new _odb.SlotItemEffectModel(),
                _odh = _odc.getCountryName();
            if ('アメリカ' == _odh && (_odg.tais += 2, _odf = true), 'イギリス' == _odh && (_odg.tais += 1, _odf = true), 1 == _odc.stype && (_odg.kaih += 1, _odf = true), _odf) {
                var _odi = _odc.get_slotnums(472);
                _ode.add(_odg.multiply(_odi));
            }
            return 920 == _odc.ship_id && (_ode.tais += 1, _ode.kaih += 1, _ode.houm += 1), _ode;
        };
    },
    13053: (_odj, _odk, _odl) => {
        'use strict';
        var _odm = null;
        defineModule(_odk);
        Object.defineProperty(_odk, '__esModule', {
            'value': true
        }), _odk.getSlot473PersonalEffect = void 0;
        var _odn = _odl(74496);
        _odk.getSlot473PersonalEffect = function(_odo) {
            var _odp = null,
                _odq = new _odn.SlotItemEffectModel(),
                _odr = false,
                _ods = new _odn.SlotItemEffectModel(),
                _odt = _odo.getCountryName();
            if ('アメリカ' == _odt && (_ods.houg += 1, _ods.kaih += 1, _ods.tyku += 1, _odr = true), 'イギリス' == _odt && (_ods.houg += 1, _ods.kaih += 1, _odr = true), 0 == _odr) return _odq;
            var _odu = _odo.get_slotnums(473);
            return _odq.add(_ods.multiply(_odu)), _odq;
        };
    },
    47874: (_odv, _odw, _odx) => {
        'use strict';
        var _ody = null;
        defineModule(_odw);
        Object.defineProperty(_odw, '__esModule', {
            'value': true
        }), _odw.getSlot474PersonalEffect = void 0;
        var _odz = _odx(74496);
        _odw.getSlot474PersonalEffect = function(_oe0) {
            var _oe1 = null,
                _oe2 = new _odz.SlotItemEffectModel(),
                _oe3 = false,
                _oe4 = new _odz.SlotItemEffectModel(),
                _oe5 = _oe0.getCountryName();
            if ('アメリカ' == _oe5 && (_oe4.houg += 2, _oe4.kaih += 1, _oe4.tyku += 1, _oe3 = true), 'イギリス' == _oe5 && (_oe4.houg += 1, _oe4.kaih += 1, _oe4.tyku += 1, _oe3 = true), 'フランス' == _oe5 && (_oe4.houg += 1, _oe4.tyku += 1, _oe3 = true), 707 != _oe0.ship_id && 930 != _oe0.ship_id || (_oe4.houg += 1, _oe4.kaih += 1, _oe3 = true), 0 == _oe3) return _oe2;
            var _oe6 = _oe0.get_slotnums(474);
            return _oe2.add(_oe4.multiply(_oe6)), _oe2;
        };
    },
    42788: (_oe7, _oe8, _oe9) => {
        'use strict';
        var _oea = null;
        defineModule(_oe8);
        Object.defineProperty(_oe8, '__esModule', {
            'value': true
        }), _oe8.getSlot478PersonalEffect = void 0;
        var _oeb = _oe9(74496);
        _oe8.getSlot478PersonalEffect = function(_oec) {
            var _oed = null,
                _oee = new _oeb.SlotItemEffectModel(),
                _oef = _oec.get_each_level_nums(478),
                _oeg = [];
            return _oef.forEach(function(_oeh, _oei) {
                var _oej = null;
                for (var _oek = 1; _oek <= _oec.SLOT_LEVEL_MAX; _oek++) _oei >= _oek && (null == _oeg[_oek] && (_oeg[_oek] = 0), _oeg[_oek] += _oeh);
            }), _oeg.every(function(_oel) {
                return 0 == _oel;
            }) || (_oeg[1] >= 1 && (_oee.houg += 1), _oeg[2] >= 1 && (_oee.houm += 1), _oeg[3] >= 1 && (_oee.kaih += 1), _oeg[4] >= 1 && (_oee.baku += 1), _oeg[5] >= 1 && (_oee.raig += 1), _oeg[6] >= 1 && (_oee.tyku += 1), _oeg[7] >= 1 && (_oee.houg += 1), _oeg[8] >= 1 && (_oee.houm += 1), _oeg[9] >= 1 && (_oee.kaih += 1), _oeg[10] >= 1 && (_oee.houg += 1)), _oee;
        };
    },
    22218: (_oem, _oen, _oeo) => {
        'use strict';
        var _oep = null;
        defineModule(_oen);
        Object.defineProperty(_oen, '__esModule', {
            'value': true
        }), _oen.getSlot47PersonalEffect = void 0;
        var _oeq = _oeo(74496);
        _oen.getSlot47PersonalEffect = function(_oer) {
            var _oes = null,
                _oet = new _oeq.SlotItemEffectModel(),
                _oeu = new _oeq.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_oer.yomi) >= 0 ? (_oeu.tais += 3, _oeu.kaih += 2, _oeu.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_oer.yomi) >= 0 && (_oeu.tais += 2, _oeu.kaih += 2), !_oeu.exists()) return _oet;
            var _oev = _oer.get_slotnums(47) + _oer.get_slotnums(438);
            return _oet = _oeu.multiply(_oev);
        };
    },
    57664: (_oew, _oex, _oey) => {
        'use strict';
        var _oez = null;
        defineModule(_oex);
        Object.defineProperty(_oex, '__esModule', {
            'value': true
        }), _oex.getSlot483PersonalEffect = void 0;
        var _of0 = _oey(74496);
        _oex.getSlot483PersonalEffect = function(_of1) {
            var _of2 = null,
                _of3 = new _of0.SlotItemEffectModel(),
                _of4 = 0,
                _of5 = 0,
                _of6 = 0,
                _of7 = 0,
                _of8 = 0,
                _of9 = 0,
                _ofa = 0;
            if (6 == _of1.ctype ? (_of3.houg += 2, _of3.tyku += 3, _of3.houm += 1, _of4 = 1) : 2 == _of1.ctype ? (_of3.houg += 1, _of3.tyku += 2, _of3.kaih += 2, _of3.houm += 1, _of5 = 1) : 37 == _of1.ctype && (_of6 = 1), 8 == _of1.stype || 9 == _of1.stype || 10 == _of1.stype ? _of7 = 1 : 5 != _of1.stype && 6 != _of1.stype || (_of8 = 1), 149 == _of1.ship_id ? (_of3.houg += 2, _of3.tyku += 2) : 591 == _of1.ship_id ? (_of3.houg += 3, _of3.tyku += 3, _of3.kaih += 1) : 150 == _of1.ship_id ? (_of3.houg += 1, _of3.tyku += 1) : 592 == _of1.ship_id ? (_of3.houg += 2, _of3.tyku += 2, _of3.kaih += 2) : 151 == _of1.ship_id ? (_of3.houg += 1, _of3.tyku += 2, _of3.kaih += 2) : 593 == _of1.ship_id ? (_of3.houg += 2, _of3.tyku += 5, _of3.kaih += 3) : 954 == _of1.ship_id ? (_of3.houg += 2, _of3.tyku += 4, _of3.kaih += 2) : 152 == _of1.ship_id ? (_of3.houg += 2, _of3.tyku += 2) : 911 == _of1.ship_id || 916 == _of1.ship_id || 546 == _of1.ship_id ? (_of3.houg += 2, _of3.tyku += 2, _of3.kaih += 2, _of9 = 1) : 553 == _of1.ship_id || 554 == _of1.ship_id ? (_of3.houg += 1, _of3.tyku += 2, _of3.kaih += 1, _ofa = 1) : 541 == _of1.ship_id || 411 == _of1.ship_id || 412 == _of1.ship_id ? (_of3.houg += 1, _of3.tyku += 2) : 573 == _of1.ship_id && (_of3.houg += 2, _of3.tyku += 2, _of3.kaih += 1), 0 == [_of4, _of5, _of6, _of7, _of8, _of9, _ofa].reduce(function(_ofb, _ofc) {
                    return _ofb + _ofc;
                }, 0)) return _of3;
            var _ofd = _of1.get_each_level_nums(483),
                _ofe = 0,
                _off = [];
            return _ofd.forEach(function(_ofg, _ofh) {
                var _ofi = null;
                _ofh >= 6 && (_ofe += _ofg);
                for (var _ofj = 1; _ofj <= _of1.SLOT_LEVEL_MAX; _ofj++) null == _off[_ofj] && (_off[_ofj] = 0), _ofh >= _ofj && (_off[_ofj] += _ofg);
            }), 1 == _of4 ? (_ofe >= 1 && (_of3.houm += 1), _ofd[10] >= 1 && (_of3.houm += 1)) : 1 == _of5 ? (_off[5] >= 1 && (_of3.kaih += 1), _off[6] >= 1 && (_of3.houm += 1), _off[10] >= 1 && (_of3.kaih += 1)) : 1 == _of6 && (_off[6] >= 1 && (_of3.houm += 1), _off[10] >= 1 && (_of3.kaih += 1)), 1 == _of7 ? (_off[2] >= 1 && (_of3.tyku += 1), _off[4] >= 1 && (_of3.houg += 1), _off[7] >= 1 && (_of3.kaih += 1), _off[8] >= 1 && (_of3.tyku += 1), _off[9] >= 1 && (_of3.houg += 1)) : 1 == _of8 && (_off[2] >= 1 && (_of3.tyku += 1), _off[4] >= 1 && (_of3.houg += 1), _off[6] >= 1 && (_of3.kaih += 1), _off[8] >= 1 && (_of3.houm += 1), _off[10] >= 1 && (_of3.houg += 1)), 1 == _of9 ? _off[5] >= 1 && (_of3.houm += 1) : 1 == _ofa && (_off[1] >= 1 && (_of3.houm += 1), _off[3] >= 1 && (_of3.houm += 1)), _of3;
        };
    },
    44990: (_ofk, _ofl, _ofm) => {
        'use strict';
        var _ofn = null;
        defineModule(_ofl);
        Object.defineProperty(_ofl, '__esModule', {
            'value': true
        }), _ofl.getSlot485PersonalEffect = void 0;
        var _ofo = _ofm(74496);
        _ofl.getSlot485PersonalEffect = function(_ofp) {
            var _ofq = null,
                _ofr = new _ofo.SlotItemEffectModel(),
                _ofs = false,
                _oft = new _ofo.SlotItemEffectModel();
            if (9 == _ofp.ctype && (_oft.houg += 1, _oft.kaih += 2, _oft.tyku += 3, _ofs = true), 501 == _ofp.ship_id || 506 == _ofp.ship_id ? (_oft.kaih += 1, _oft.tyku += 2, _oft.houm += 1, _ofs = true) : 502 != _ofp.ship_id && 507 != _ofp.ship_id || (_oft.kaih += 1, _oft.tyku += 1, _oft.houm += 1, _ofs = true), _ofs) {
                var _ofu = _ofp.get_slotnums(485);
                _ofr.add(_oft.multiply(_ofu));
            }
            var _ofv = _ofp.get_each_level_nums(485),
                _ofw = 0,
                _ofx = 0,
                _ofy = 0,
                _ofz = _ofv[10];
            return _ofv.forEach(function(_og0, _og1) {
                _og1 >= 3 && (_ofw += _og0), _og1 >= 5 && (_ofx += _og0), _og1 >= 7 && (_ofy += _og0);
            }), _ofw > 0 && (_ofr.houg += 1 * _ofw), _ofx > 0 && (_ofr.tyku += 1 * _ofx), _ofy > 0 && (_ofr.kaih += 1 * _ofy), _ofz > 0 && (_ofr.houm += 1 * _ofz), _ofr;
        };
    },
    83957: (_og2, _og3, _og4) => {
        'use strict';
        var _og5 = null;
        defineModule(_og3);
        Object.defineProperty(_og3, '__esModule', {
            'value': true
        }), _og3.getSlot486PersonalEffect = void 0;
        var _og6 = _og4(74496);
        _og3.getSlot486PersonalEffect = function(_og7) {
            var _og8 = null,
                _og9 = new _og6.SlotItemEffectModel(),
                _oga = false,
                _ogb = new _og6.SlotItemEffectModel();
            if (894 == _og7.ship_id || 899 == _og7.ship_id ? (_ogb.houg += 4, _ogb.tyku += 4, _ogb.kaih += 3, _ogb.houm += 2, _oga = true) : 888 != _og7.ship_id && 883 != _og7.ship_id || (_ogb.houg += 2, _ogb.tyku += 2, _ogb.kaih += 2, _ogb.houm += 1, _oga = true), _oga) {
                var _ogc = _og7.get_slotnums(486);
                _og9.add(_ogb.multiply(_ogc));
            }
            var _ogd = _og7.get_each_level_nums(486),
                _oge = 0,
                _ogf = 0,
                _ogg = _ogd[10];
            return _ogd.forEach(function(_ogh, _ogi) {
                _ogi >= 6 && (_oge += _ogh), _ogi >= 8 && (_ogf += _ogh);
            }), _oge > 0 && (_og9.kaih += 1 * _oge, _og9.houm += 1 * _oge), _ogf > 0 && (_og9.tyku += 1 * _ogf, _og9.kaih += 1 * _ogf), _ogg > 0 && (_og9.houg += 1 * _ogg, _og9.houm += 1 * _ogg), _og9;
        };
    },
    78539: (_ogj, _ogk, _ogl) => {
        'use strict';
        var _ogm = null;
        defineModule(_ogk);
        Object.defineProperty(_ogk, '__esModule', {
            'value': true
        }), _ogk.getSlot487PersonalEffect = void 0;
        var _ogn = _ogl(74496);
        _ogk.getSlot487PersonalEffect = function(_ogo) {
            var _ogp = null,
                _ogq = new _ogn.SlotItemEffectModel(),
                _ogr = false,
                _ogs = new _ogn.SlotItemEffectModel();
            if (894 == _ogo.ship_id || 899 == _ogo.ship_id ? (_ogs.houg += 5, _ogs.tyku += 3, _ogs.kaih += 2, _ogs.houm += 4, _ogr = true) : 888 != _ogo.ship_id && 883 != _ogo.ship_id || (_ogs.houg += 3, _ogs.tyku += 1, _ogs.kaih += 1, _ogs.houm += 2, _ogr = true), _ogr) {
                var _ogt = _ogo.get_slotnums(487);
                _ogq.add(_ogs.multiply(_ogt));
            }
            var _ogu = _ogo.get_each_level_nums(487),
                _ogv = 0,
                _ogw = 0,
                _ogx = _ogu[10];
            return _ogu.forEach(function(_ogy, _ogz) {
                _ogz >= 6 && (_ogv += _ogy), _ogz >= 8 && (_ogw += _ogy);
            }), _ogv > 0 && (_ogq.houg += 1 * _ogv, _ogq.kaih += 1 * _ogv), _ogw > 0 && (_ogq.tyku += 1 * _ogw, _ogq.houm += 1 * _ogw), _ogx > 0 && (_ogq.houg += 1 * _ogx, _ogq.houm += 1 * _ogx), _ogq;
        };
    },
    96282: (_oh0, _oh1, _oh2) => {
        'use strict';
        var _oh3 = null;
        defineModule(_oh1);
        Object.defineProperty(_oh1, '__esModule', {
            'value': true
        }), _oh1.getSlot488PersonalEffect = void 0;
        var _oh4 = _oh2(74496);
        _oh1.getSlot488PersonalEffect = function(_oh5) {
            var _oh6 = null,
                _oh7 = new _oh4.SlotItemEffectModel(),
                _oh8 = false,
                _oh9 = new _oh4.SlotItemEffectModel(),
                _oha = 0,
                _ohb = _oh5.getCountryName(),
                _ohc = {
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
                }[_oh5.ship_id];
            if (('日本' == _ohb && 2 == _oh5.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_oh5.ctype] && 1 == _oh5.stype) && (_oh9.tais += 1, _oh9.kaih += 1, _oh8 = true), 1 == _ohc ? (_oh9.tais += 5, _oh9.kaih += 4, _oh9.houm += 2, _oh8 = true, _oha = 1) : 2 == _ohc ? (_oh9.tais += 2, _oh9.kaih += 1, _oh9.houm += 1, _oh8 = true, _oha = 2) : 3 == _ohc && (_oh9.tais += 1, _oh8 = true, _oha = 2), 0 == _oh8) return _oh7;
            var _ohd = _oh5.get_slotnums(488);
            if (_oh7.add(_oh9.multiply(_ohd)), 0 == _oha) return _oh7;
            var _ohe = _oh5.get_each_level_nums(488),
                _ohf = [];
            return _ohe.forEach(function(_ohg, _ohh) {
                var _ohi = null;
                for (var _ohj = 1; _ohj <= _oh5.SLOT_LEVEL_MAX; _ohj++) _ohh >= _ohj && (null == _ohf[_ohj] && (_ohf[_ohj] = 0), _ohf[_ohj] += _ohg);
            }), 1 == _oha ? (_ohf[3] >= 1 && (_oh7.kaih += 1 * _ohf[3]), _ohf[5] >= 1 && (_oh7.tais += 1 * _ohf[5]), _ohf[7] >= 1 && (_oh7.houm += 1 * _ohf[7]), _ohf[8] >= 1 && (_oh7.kaih += 1 * _ohf[8]), _ohf[9] >= 1 && (_oh7.tais += 1 * _ohf[9]), _ohf[10] >= 1 && (_oh7.tais += 1 * _ohf[10])) : 2 == _oha && (_ohf[5] >= 1 && (_oh7.tais += 1 * _ohf[5]), _ohf[7] >= 1 && (_oh7.kaih += 1 * _ohf[7]), _ohf[9] >= 1 && (_oh7.houm += 1 * _ohf[9]), _ohf[10] >= 1 && (_oh7.tais += 1 * _ohf[10])), _oh7;
        };
    },
    49679: (_ohk, _ohl, _ohm) => {
        'use strict';
        var _ohn = null;
        defineModule(_ohl);
        Object.defineProperty(_ohl, '__esModule', {
            'value': true
        }), _ohl.getSlot489PersonalEffect = void 0;
        var _oho = _ohm(74496);
        _ohl.getSlot489PersonalEffect = function(_ohp) {
            var _ohq = null,
                _ohr = new _oho.SlotItemEffectModel(),
                _ohs = false,
                _oht = new _oho.SlotItemEffectModel();
            if ('あきつまる' != _ohp.yomi && 'やましおまる' != _ohp.yomi && 'くまのまる' != _ohp.yomi || (_oht.tyku = _oht.tyku + 2, _oht.kaih = _oht.kaih + 1, _oht.houg = _oht.houg + 1, _oht.tais = _oht.tais + 1, _oht.houm = _oht.houm + 1, _ohs = true), 717 != _ohp.ship_id && 948 != _ohp.ship_id || (_oht.tyku = _oht.tyku + 2, _oht.kaih = _oht.kaih + 2, _oht.houg = _oht.houg + 2, _oht.tais = _oht.tais + 1, _oht.houm = _oht.houm + 1, _ohs = true), _ohs) {
                var _ohu = _ohp.get_slotnums(489) + _ohp.get_slotnums(491);
                _ohr.add(_oht.multiply(_ohu));
            }
            var _ohv = _ohp.get_each_level_nums(489),
                _ohw = _ohp.get_each_level_nums(491),
                _ohx = 0,
                _ohy = 0,
                _ohz = 0;
            _ohv.forEach(function(_oi0, _oi1) {
                _oi1 >= 3 && (_ohx += _oi0), _oi1 >= 6 && (_ohy += _oi0), _oi1 >= 8 && (_ohz += _oi0);
            }), _ohw.forEach(function(_oi2, _oi3) {
                _oi3 >= 3 && (_ohx += _oi2), _oi3 >= 6 && (_ohy += _oi2), _oi3 >= 8 && (_ohz += _oi2);
            });
            var _oi4 = _ohv[10] + _ohw[10];
            return _ohx >= 1 && (_ohr.kaih = _ohr.kaih + 1 * _ohx), _ohy >= 1 && (_ohr.tais = _ohr.tais + 1 * _ohy), _ohz >= 1 && (_ohr.houm = _ohr.houm + 1 * _ohz), _oi4 >= 1 && (_ohr.houg = _ohr.houg + 1 * _oi4), _ohr;
        };
    },
    90312: function(_oi5, _oi6, _oi7) {
        'use strict';
        var _oi8 = null;
        var _oi9 = this && this.__importDefault || function(_oia) {
            var _oib = null;
            return _oia && _oia.__esModule ? _oia : {
                'default': _oia
            };
        };
        defineModule(_oi6);
        Object.defineProperty(_oi6, '__esModule', {
            'value': true
        }), _oi6.getSlot502PersonalEffect = void 0;
        var _oic = _oi7(74496),
            _oid = _oi9(_oi7(18622));
        _oi6.getSlot502PersonalEffect = function(_oie) {
            var _oif = null,
                _oig = new _oic.SlotItemEffectModel(),
                _oih = _oie.get_slotnums(502),
                _oii = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _oij = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _oik = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _oil = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _oim = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_oii[_oie.ship_id]) {
                var _oin = _oii[_oie.ship_id];
                _oig.houg += _oih * _oin;
            }
            if (_oij[_oie.ship_id]) {
                var _oio = _oij[_oie.ship_id];
                _oig.tyku += _oih * _oio;
            }
            if (_oik[_oie.ship_id]) {
                var _oip = _oik[_oie.ship_id],
                    _oiq = _oie.get_each_level_nums(502),
                    _oir = [];
                _oiq.forEach(function(_ois, _oit) {
                    var _oiu = null;
                    for (var _oiv = 1; _oiv <= _oie.SLOT_LEVEL_MAX; _oiv++) _oit >= _oiv && (null == _oir[_oiv] && (_oir[_oiv] = 0), _oir[_oiv] += _ois);
                }), 1 == _oip ? (_oig.kaih += 3 * _oih, _oir[1] > 0 && (_oig.kaih += 1 * _oir[1]), _oir[3] > 0 && (_oig.tyku += 1 * _oir[3]), _oir[5] > 0 && (_oig.houg += 1 * _oir[5]), _oir[7] > 0 && (_oig.kaih += 1 * _oir[7]), _oir[8] > 0 && (_oig.tyku += 1 * _oir[8]), _oir[9] > 0 && (_oig.houg += 1 * _oir[9]), _oir[10] > 0 && (_oig.tyku += 1 * _oir[10])) : 2 == _oip ? (_oig.kaih += 1 * _oih, _oir[2] > 0 && 151 == _oie.ship_id && (_oig.kaih += 1 * _oir[2]), _oir[4] > 0 && (_oig.tyku += 1 * _oir[4]), _oir[6] > 0 && (_oig.houg += 1 * _oir[6]), _oir[8] > 0 && (_oig.kaih += 1 * _oir[8]), _oir[10] > 0 && (_oig.tyku += 1 * _oir[10])) : 3 == _oip && (_oir[5] > 0 && (_oig.kaih += 1 * _oir[5]), _oir[8] > 0 && (_oig.houg += 1 * _oir[8]), _oir[10] > 0 && (_oig.tyku += 1 * _oir[10]));
            }
            if (_oil[_oie.ship_id]) {
                for (var _oiw = 0, _oix = 0, _oiy = _oie.have_slot_ids(); _oix < _oiy.length; _oix++) {
                    var _oiz = _oiy[_oix],
                        _oj0 = _oid.default.model.slot.getMst(_oiz),
                        _oj1 = _oj0.equipType;
                    12 != _oj1 && 13 != _oj1 || (_oj0.sakuteki >= 5 && (_oiw += _oie.get_slotnums(parseInt(_oiz))), _oj0.taiku >= 2 && _oie.get_slotnums(parseInt(_oiz)));
                }
                0;
                var _oj2 = _oil[_oie.ship_id];
                1 == _oj2 && _oiw >= 1 ? (_oig.houg += 3, _oig.kaih += 4) : 2 == _oj2 && _oiw >= 1 && (_oig.houg += 2, _oig.kaih += 2);
            }
            if (_oim[_oie.ship_id]) {
                var _oj3 = _oim[_oie.ship_id],
                    _oj4 = [],
                    _oj5 = [],
                    _oj6 = _oie.have_slot_ids();
                [410, 411].forEach(function(_oj7) {
                    var _oj8 = null;
                    _oj6.indexOf(_oj7.toString()) > -1 && (_oj5[_oj7] = _oie.get_each_level_nums(_oj7), null == _oj4[_oj7] && (_oj4[_oj7] = []), _oj5[_oj7].forEach(function(_oj9, _oja) {
                        var _ojb = null;
                        for (var _ojc = 1; _ojc <= _oie.SLOT_LEVEL_MAX; _ojc++) null == _oj4[_oj7][_ojc] && (_oj4[_oj7][_ojc] = 0), _oja >= _ojc && (_oj4[_oj7][_ojc] += _oj9);
                    }));
                });
                var _ojd = _oj5[410],
                    _oje = _oj5[411];
                if (1 == _oj3) {
                    if (_ojd) {
                        _oig.tyku += 1;
                        var _ojf = _oj4[410];
                        _ojf[7] >= 1 && (_oig.houg += 1), _ojf[10] >= 1 && (_oig.kaih += 1);
                    }
                    if (_oje) {
                        _oig.tyku += 2;
                        var _ojg = _oj4[411];
                        _ojg[2] >= 1 && (_oig.houg += 1), _ojg[4] >= 1 && (_oig.kaih += 1), _ojg[6] >= 1 && (_oig.houm += 1), _ojg[8] >= 1 && (_oig.tyku += 1), _ojg[10] >= 1 && (_oig.houg += 1);
                    }
                }
            }
            return _oig;
        };
    },
    86856: function(_ojh, _oji, _ojj) {
        'use strict';
        var _ojk = null;
        var _ojl = this && this.__importDefault || function(_ojm) {
            var _ojn = null;
            return _ojm && _ojm.__esModule ? _ojm : {
                'default': _ojm
            };
        };
        defineModule(_oji);
        Object.defineProperty(_oji, '__esModule', {
            'value': true
        }), _oji.getSlot503PersonalEffect = void 0;
        var _ojo = _ojj(74496),
            _ojp = _ojl(_ojj(18622));
        _oji.getSlot503PersonalEffect = function(_ojq) {
            var _ojr = null,
                _ojs = new _ojo.SlotItemEffectModel(),
                _ojt = _ojq.get_slotnums(503),
                _oju = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _ojv = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _ojw = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _ojx = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _ojy = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _ojz = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_oju[_ojq.ship_id]) {
                var _ok0 = _oju[_ojq.ship_id];
                _ojs.houg += _ojt * _ok0;
            }
            if (_ojv[_ojq.ship_id]) {
                var _ok1 = _ojv[_ojq.ship_id];
                _ojs.tyku += _ojt * _ok1;
            }
            if (_ojw[_ojq.ship_id]) {
                var _ok2 = _ojw[_ojq.ship_id],
                    _ok3 = _ojq.get_each_level_nums(503),
                    _ok4 = [];
                _ok3.forEach(function(_ok5, _ok6) {
                    var _ok7 = null;
                    for (var _ok8 = 1; _ok8 <= _ojq.SLOT_LEVEL_MAX; _ok8++) _ok6 >= _ok8 && (null == _ok4[_ok8] && (_ok4[_ok8] = 0), _ok4[_ok8] += _ok5);
                }), 1 == _ok2 ? (_ojs.houm += 2 * _ojt, _ok4[1] > 0 && (_ojs.houg += 1 * _ok4[1]), _ok4[2] > 0 && (_ojs.tyku += 1 * _ok4[2]), _ok4[4] > 0 && (_ojs.houm += 1 * _ok4[4]), _ok4[6] > 0 && (_ojs.houg += 1 * _ok4[6]), _ok4[8] > 0 && (_ojs.tyku += 1 * _ok4[8]), _ok4[10] > 0 && (_ojs.houm += 1 * _ok4[10])) : 2 == _ok2 ? (_ojs.houm += 1 * _ojt, _ok4[2] > 0 && (_ojs.houg += 1 * _ok4[2]), _ok4[4] > 0 && (_ojs.tyku += 1 * _ok4[4]), _ok4[6] > 0 && (_ojs.houm += 1 * _ok4[6]), _ok4[8] > 0 && (_ojs.houg += 1 * _ok4[8]), _ok4[10] > 0 && (_ojs.houm += 1 * _ok4[10])) : 3 == _ok2 && (_ok4[4] > 0 && (_ojs.houm += 1 * _ok4[4]), _ok4[7] > 0 && (_ojs.houg += 1 * _ok4[7]), _ok4[10] > 0 && (_ojs.tyku += 1 * _ok4[10]));
            }
            var _ok9 = 0;
            _ojx[_ojq.ship_id] && (_ok9 = _ojx[_ojq.ship_id]);
            var _oka = 0;
            _ojz[_ojq.ship_id] && (_oka = _ojz[_ojq.ship_id]);
            var _okb = 0,
                _okc = 0,
                _okd = _ojq.have_slot_ids();
            if (_ok9 + _oka > 0)
                for (var _oke = 0, _okf = _okd; _oke < _okf.length; _oke++) {
                    var _okg = _okf[_oke],
                        _okh = _ojp.default.model.slot.getMst(_okg),
                        _oki = _okh.equipType;
                    12 != _oki && 13 != _oki || (_okh.sakuteki >= 5 && (_okb += _ojq.get_slotnums(parseInt(_okg))), _okh.taiku >= 2 && _ojq.get_slotnums(parseInt(_okg)), _okh.meichu >= 8 && (_okc += _ojq.get_slotnums(parseInt(_okg))));
                }
            1 == _ok9 ? _okb >= 1 && (_ojs.houg += 3, _ojs.houm += 3, _ojs.kaih += 2) : 2 == _ok9 && _okb >= 1 && (_ojs.houg += 2, _ojs.houm += 2, _ojs.kaih += 1);
            var _okj = 0,
                _okk = [],
                _okl = [];
            if (_ojy[_ojq.ship_id]) {
                _okj = _ojy[_ojq.ship_id];
                var _okm = _ojq.have_slot_ids();
                [174].forEach(function(_okn) {
                    var _oko = null;
                    _okm.indexOf(_okn.toString()) > -1 && (_okl[_okn] = _ojq.get_each_level_nums(_okn), null == _okk[_okn] && (_okk[_okn] = []), _okl[_okn].forEach(function(_okp, _okq) {
                        var _okr = null;
                        for (var _oks = 1; _oks <= _ojq.SLOT_LEVEL_MAX; _oks++) null == _okk[_okn][_oks] && (_okk[_okn][_oks] = 0), _okq >= _oks && (_okk[_okn][_oks] += _okp);
                    }));
                });
            }
            if (_okj > 0) {
                var _okt = _okl[174];
                if (1 == _okj && _okt) {
                    var _oku = _okk[174];
                    _ojs.raig += 4, _oku[6] >= 1 && (_ojs.raig += 1), _oku[8] >= 1 && (_ojs.houm += 1), _oku[10] >= 1 && (_ojs.houg += 1);
                }
            }
            return _okc > 0 && (_oka >= 1 && _oka <= 3 && (_ojs.houg += 2, _ojs.houm += 2, _ojs.kaih += 2), 1 == _oka ? _ojs.houg += 1 : 3 == _oka && (_ojs.houg += 2)), _ojs;
        };
    },
    78123: function(_okv, _okw, _okx) {
        'use strict';
        var _oky = null;
        var _okz = this && this.__importDefault || function(_ol0) {
            var _ol1 = null;
            return _ol0 && _ol0.__esModule ? _ol0 : {
                'default': _ol0
            };
        };
        defineModule(_okw);
        Object.defineProperty(_okw, '__esModule', {
            'value': true
        }), _okw.getSlot505PersonalEffect = void 0;
        var _ol2 = _okx(74496),
            _ol3 = _okz(_okx(18622));
        _okw.getSlot505PersonalEffect = function(_ol4) {
            var _ol5 = null,
                _ol6 = new _ol2.SlotItemEffectModel(),
                _ol7 = false,
                _ol8 = new _ol2.SlotItemEffectModel();
            if (2 == _ol4.stype ? (_ol8.houg += 1, _ol8.tyku += 2, _ol8.kaih += 2, _ol7 = true) : 1 == _ol4.stype ? (_ol8.houg += 1, _ol8.tyku += 1, _ol8.kaih += 1, _ol7 = true) : 3 == _ol4.stype || 21 == _ol4.stype || 4 == _ol4.stype ? (_ol8.tyku += 1, _ol8.kaih += 2, _ol7 = true) : 5 != _ol4.stype && 6 != _ol4.stype && 16 != _ol4.stype || (_ol8.tyku += 1, _ol8.kaih += 1, _ol7 = true), _ol7) {
                var _ol9 = _ol4.get_slotnums(505);
                _ol6.add(_ol8.multiply(_ol9));
            }
            var _ola = {
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
                _olb = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2
                },
                _olc = {
                    961: 1,
                    656: 1,
                    951: 1
                };
            1 == _ola[_ol4.ship_id] ? (_ol6.houg += 2, _ol6.tyku += 3, _ol6.kaih += 4) : 2 == _ola[_ol4.ship_id] ? (_ol6.houg += 1, _ol6.tyku += 2, _ol6.kaih += 3) : 3 == _ola[_ol4.ship_id] ? (_ol6.tyku += 2, _ol6.kaih += 2) : 4 == _ola[_ol4.ship_id] ? (_ol6.tyku += 1, _ol6.kaih += 2) : 5 == _ola[_ol4.ship_id] && (_ol6.houg += 1, _ol6.tyku += 1, _ol6.kaih += 1);
            var _old = 0;
            if (_olb[_ol4.ship_id] && _old++, _olc[_ol4.ship_id] && _old++, 0 == _old) return _ol6;
            for (var _ole = 0, _olf = 0, _olg = 0, _olh = _ol4.have_slot_ids(); _olg < _olh.length; _olg++) {
                var _oli = _olh[_olg],
                    _olj = _ol3.default.model.slot.getMst(_oli),
                    _olk = _olj.equipType;
                12 != _olk && 13 != _olk || (_olj.sakuteki >= 5 && (_ole += _ol4.get_slotnums(parseInt(_oli))), _olj.taiku >= 2 && (_olf += _ol4.get_slotnums(parseInt(_oli))));
            }
            var _oll = _olb[_ol4.ship_id];
            _olf > 0 && _oll > 0 && (1 == _oll ? (_ol6.houg += 1, _ol6.tyku += 2, _ol6.kaih += 3) : 2 == _oll && (_ol6.tyku += 2, _ol6.kaih += 2));
            var _olm = _olc[_ol4.ship_id];
            return _ole > 0 && _olm > 0 && 1 == _olm && (_ol6.houg += 1, _ol6.kaih += 1), _ol6;
        };
    },
    25765: (_oln, _olo, _olp) => {
        'use strict';
        var _olq = null;
        defineModule(_olo);
        Object.defineProperty(_olo, '__esModule', {
            'value': true
        }), _olo.getSlot506PersonalEffect = void 0;
        var _olr = _olp(74496);
        _olo.getSlot506PersonalEffect = function(_ols) {
            var _olt = null,
                _olu = new _olr.SlotItemEffectModel();
            return 961 == _ols.ship_id ? (_olu.houg += 2, _olu.houm += 3, _olu.tyku += 2, _olu.kaih += 4) : 145 == _ols.ship_id || 497 == _ols.ship_id || 656 == _ols.ship_id || 557 == _ols.ship_id || 558 == _ols.ship_id || 951 == _ols.ship_id ? (_olu.houg += 1, _olu.houm += 2, _olu.tyku += 1, _olu.kaih += 3) : 578 != _ols.ship_id && 419 != _ols.ship_id && 464 != _ols.ship_id && 470 != _ols.ship_id && 407 != _ols.ship_id && 235 != _ols.ship_id && 147 != _ols.ship_id && 538 != _ols.ship_id && 537 != _ols.ship_id && 955 != _ols.ship_id && 960 != _ols.ship_id || (_olu.houg += 1, _olu.houm += 1, _olu.tyku += 1, _olu.kaih += 2), _olu;
        };
    },
    88271: function(_olv, _olw, _olx) {
        'use strict';
        var _oly = null;
        var _olz = this && this.__importDefault || function(_om0) {
            var _om1 = null;
            return _om0 && _om0.__esModule ? _om0 : {
                'default': _om0
            };
        };
        defineModule(_olw);
        Object.defineProperty(_olw, '__esModule', {
            'value': true
        }), _olw.getSlot50PersonalEffect = void 0;
        var _om2 = _olx(74496),
            _om3 = _olz(_olx(18622));
        _olw.getSlot50PersonalEffect = function(_om4) {
            var _om5 = null,
                _om6 = new _om2.SlotItemEffectModel(),
                _om7 = false,
                _om8 = new _om2.SlotItemEffectModel();
            7 != _om4.ctype && 13 != _om4.ctype && 8 != _om4.ctype && 29 != _om4.ctype && 9 != _om4.ctype && 31 != _om4.ctype || (_om8.houg += 1, _om7 = true), 8 != _om4.ctype && 29 != _om4.ctype && 9 != _om4.ctype && 31 != _om4.ctype || (_om8.houg += 1, _om8.kaih += 1, _om7 = true);
            var _om9 = _om4.get_slotnums(50);
            9 != _om4.ctype && 31 != _om4.ctype || _om9 >= 2 && (_om8.houg += 1, _om7 = true);
            var _oma = 0;
            if (501 != _om4.ship_id && 506 != _om4.ship_id && 502 != _om4.ship_id && 507 != _om4.ship_id || (_om8.houg += 1, _om7 = true, _oma = 1), 0 == _om7) return _om6;
            _om6 = _om8.multiply(_om9);
            for (var _omb = 0, _omc = 0, _omd = _om4.have_slot_ids(); _omc < _omd.length; _omc++) {
                var _ome = _omd[_omc],
                    _omf = _om3.default.model.slot.getMst(_ome),
                    _omg = _omf.equipType;
                12 != _omg && 13 != _omg || _omf.sakuteki >= 5 && (_omb += _om4.get_slotnums(parseInt(_ome)));
            }
            if (_omb > 0) {
                if (7 == _om4.ctype || 13 == _om4.ctype) 0 == _om4.get_slotnums(90) && (_om6.houg += 1, _om6.kaih += 1, _om6.raig += 1);
                else 8 != _om4.ctype && 29 != _om4.ctype && 9 != _om4.ctype && 31 != _om4.ctype || (_om6.houg += 3, _om6.kaih += 2, _om6.raig += 2);
                501 != _om4.ship_id && 506 != _om4.ship_id || (_om6.houg += 1, _om6.kaih += 1);
            }
            var _omh = _om4.get_slotnums(30),
                _omi = _om4.get_slotnums(410);
            return 1 == _oma && (_omh + _omi > 0 && (_om6.houg += 1, _om6.tyku += 3, _om6.kaih += 2), _omi > 0 && (_om6.houg += 2)), _om6;
        };
    },
    28221: (_omj, _omk, _oml) => {
        'use strict';
        var _omm = null;
        defineModule(_omk);
        Object.defineProperty(_omk, '__esModule', {
            'value': true
        }), _omk.getSlot510PersonalEffect = void 0;
        var _omn = _oml(74496);
        _omk.getSlot510PersonalEffect = function(_omo) {
            var _omp = null,
                _omq = new _omn.SlotItemEffectModel(),
                _omr = false,
                _oms = new _omn.SlotItemEffectModel();
            if ('イギリス' == _omo.getCountryName() && (_oms.houg += 2, _oms.tais += 3, _oms.kaih += 2, _oms.saku += 2, _omr = true), 88 == _omo.ctype && (_omq.houg += 4, _omq.kaih += 2, _oms.saku += 3, _oms.houm += 2, _omr = true), 0 == _omr) return _omq;
            var _omt = _omo.get_slotnums(510);
            return _omq.add(_oms.multiply(_omt)), _omq;
        };
    },
    14830: (_omu, _omv, _omw) => {
        'use strict';
        var _omx = null;
        defineModule(_omv);
        Object.defineProperty(_omv, '__esModule', {
            'value': true
        }), _omv.getSlot511PersonalEffect = void 0;
        var _omy = _omw(74496);
        _omv.getSlot511PersonalEffect = function(_omz) {
            var _on0 = null,
                _on1 = new _omy.SlotItemEffectModel();
            return 122 == _omz.ctype ? (_on1.raig += 3, _on1.kaih += 4) : 114 == _omz.ctype && (_on1.raig += 1, _on1.kaih += 2), _on1;
        };
    },
    54047: (_on2, _on3, _on4) => {
        'use strict';
        var _on5 = null;
        defineModule(_on3);
        Object.defineProperty(_on3, '__esModule', {
            'value': true
        }), _on3.getSlot517PersonalEffect = void 0;
        var _on6 = _on4(74496);
        _on3.getSlot517PersonalEffect = function(_on7) {
            var _on8 = null,
                _on9 = new _on6.SlotItemEffectModel();
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
            }[_on7.ctype] && 74 != _on7.ctype && 77 != _on7.ctype && 85 != _on7.ctype && 117 != _on7.ctype && 104 != _on7.ctype || (_on9.houm += 1, _on9.kaih += 1, _on9.saku += 1), 38 == _on7.ctype && (_on9.houg += 1, _on9.houm += 1), 960 == _on7.ship_id ? (_on9.houg += 2, _on9.houm += 1, _on9.kaih += 3, _on9.saku += 2) : 955 != _on7.ship_id && 578 != _on7.ship_id && 961 != _on7.ship_id && 656 != _on7.ship_id && 464 != _on7.ship_id && 470 != _on7.ship_id && 419 != _on7.ship_id && 407 != _on7.ship_id && 235 != _on7.ship_id && 147 != _on7.ship_id || (_on9.houg += 1, _on9.houm += 1, _on9.kaih += 2, _on9.saku += 1);
            for (var _ona = [], _onb = function(_onc) {
                    var _ond = null,
                        _one = _on7.get_each_level_nums(_onc);
                    null == _ona[_onc] && (_ona[_onc] = []), _one.forEach(function(_onf, _ong) {
                        var _onh = null;
                        for (var _oni = 1; _oni <= _on7.SLOT_LEVEL_MAX; _oni++) null == _ona[_onc][_oni] && (_ona[_onc][_oni] = 0), _ong >= _oni && (_ona[_onc][_oni] += _onf);
                    });
                }, _onj = 0, _onk = [267, 366, 450, 517]; _onj < _onk.length; _onj++) {
                _onb(_onk[_onj]);
            }
            var _onl = _ona[517];
            return _onl[7] > 0 && (_on9.houm += 1), _onl[8] > 0 && (_on9.kaih += 1), _onl[9] > 0 && (_on9.houg += 1), _onl[10] > 0 && (_on9.houm += 1), (_ona[267][3] > 0 || _ona[366][3] > 0) && (_on9.houg += 1, _on9.houm += 1, 38 == _on7.ctype && (_on9.houg += 1, _on9.houm += 1), _ona[450][4] > 0 && (_on9.houg += 1, _on9.houm += 1, _on9.tyku += 4, _on9.kaih += 3)), _on9;
        };
    },
    76054: (_onm, _onn, _ono) => {
        'use strict';
        var _onp = null;
        defineModule(_onn);
        Object.defineProperty(_onn, '__esModule', {
            'value': true
        }), _onn.getSlot518PersonalEffect = void 0;
        var _onq = _ono(74496);
        _onn.getSlot518PersonalEffect = function(_onr) {
            var _ons = null,
                _ont = new _onq.SlotItemEffectModel(),
                _onu = false,
                _onv = new _onq.SlotItemEffectModel();
            if (34 != _onr.ctype && 56 != _onr.ctype || (_onv.houg += 1, _onv.tyku += 1, _onv.tais += 1, _onv.kaih += 1, _onu = true), 16 == _onr.stype && (_onv.houg += 1, _onv.raig += 1, _onv.kaih += 1, _onu = true), 622 != _onr.ship_id && 624 != _onr.ship_id && 623 != _onr.ship_id || (_onv.houg += 1, _onu = true), 622 != _onr.ship_id && 624 != _onr.ship_id || (_onv.tyku += 1, _onu = true), 624 == _onr.ship_id && (_onv.tais += 2, _onu = true), 0 == _onu) return _ont;
            var _onw = _onr.get_slotnums(518);
            return _ont.add(_onv.multiply(_onw)), _ont;
        };
    },
    93053: (_onx, _ony, _onz) => {
        'use strict';
        var _oo0 = null;
        defineModule(_ony);
        Object.defineProperty(_ony, '__esModule', {
            'value': true
        }), _ony.getSlot519PersonalEffect = void 0;
        var _oo1 = _onz(74496);
        _ony.getSlot519PersonalEffect = function(_oo2) {
            var _oo3 = null,
                _oo4 = new _oo1.SlotItemEffectModel();
            return 122 == _oo2.ctype && (_oo4.houm += 2, _oo4.kaih += 2), 114 == _oo2.ctype && (_oo4.raig += 1, _oo4.houm += 2, _oo4.kaih += 2), _oo4;
        };
    },
    81254: (_oo5, _oo6, _oo7) => {
        'use strict';
        var _oo8 = null;
        defineModule(_oo6);
        Object.defineProperty(_oo6, '__esModule', {
            'value': true
        }), _oo6.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _oo9 = _oo7(74496);
        _oo6.getSlot51cmSeriesGunPersonalEffect = function(_ooa) {
            var _oob = null,
                _ooc = new _oo9.SlotItemEffectModel(),
                _ood = false,
                _ooe = new _oo9.SlotItemEffectModel(),
                _oof = _ooa.get_slotnums(142),
                _oog = _ooa.get_slotnums(460),
                _ooh = _oof + _oog;
            if (916 != _ooa.ship_id && 911 != _ooa.ship_id && 546 != _ooa.ship_id || (_ooe.houg += 1, _ooe.houm += 1, _oog >= 1 && (_ooc.kaih += 1, _ooc.houm += 1), _ood = true), 37 == _ooa.ctype && _ooh >= 1 && (_ooc.houg += 1, _ooc.houm += 2), 0 == _ood) return _ooc;
            var _ooi = _ooa.get_slotnums(128) + _ooa.get_slotnums(281);
            return _ooc.add(_ooe.multiply(_ooi)), _ooc;
        };
    },
    88792: (_ooj, _ook, _ool) => {
        'use strict';
        var _oom = null;
        defineModule(_ook);
        Object.defineProperty(_ook, '__esModule', {
            'value': true
        }), _ook.getSlot520PersonalEffect = void 0;
        var _oon = _ool(74496);
        _ook.getSlot520PersonalEffect = function(_ooo) {
            var _oop = null,
                _ooq = new _oon.SlotItemEffectModel(),
                _oor = false,
                _oos = new _oon.SlotItemEffectModel(),
                _oot = 0,
                _oou = 0,
                _oov = 0,
                _oow = _ooo.get_slotnums(520);
            7 == _ooo.ctype || 13 == _ooo.ctype ? (_oos.houg += 1, _oor = true, _oou = 1, _oov = 1) : 8 == _ooo.ctype || 29 == _ooo.ctype ? (_oos.houg += 2, _oos.kaih += 1, _oor = true, _oou = 2, _oov = 1) : 9 != _ooo.ctype && 31 != _ooo.ctype || (_oos.houg += 3, _oos.kaih += 1, _oos.houm += 1, _oor = true, _oou = 2, _oov = 1, 2 == _oow && (_ooq.houg += 2), _oow >= 3 && (_ooq.houg += 4));
            var _oox = _ooo.get_have_rader_nums().water_rader,
                _ooy = 0,
                _ooz = 0;
            if (_oou + _oov > 0) {
                for (var _op0 = _ooo.getSpItemDict_FukuhouTaikuHeisou(), _op1 = _ooo.getSpItemDict_Tansou21GouDentan(), _op2 = 0, _op3 = _ooo.have_slot_ids(); _op2 < _op3.length; _op2++) {
                    var _op4 = _op3[_op2],
                        _op5 = parseInt(_op4);
                    null != _op0[_op5] ? (_op0[_op5] += _ooo.get_slotnums(_op5), _ooy += _ooo.get_slotnums(_op5)) : null != _op1[_op5] && (_op1[_op5] += _ooo.get_slotnums(_op5), _ooz += _ooo.get_slotnums(_op5));
                }
                _oox > 0 && (1 == _oou ? (_ooq.houg += 2, _ooq.raig += 2, _ooq.kaih += 1, _ooq.houm += 1) : 2 == _oou && (_ooq.houg += 3, _ooq.raig += 2, _ooq.kaih += 2, _ooq.houm += 1)), _ooy > 0 && 1 == _oov && (_ooq.houg += 1, _ooq.tyku += 4, _ooq.kaih += 4, _ooq.houm += 1);
            }
            if (269 == _ooo.ship_id || 265 == _ooo.ship_id || 319 == _ooo.ship_id ? (2 == _oow && (_ooq.houg += 2), _oow >= 3 && (_ooq.houg += 4)) : 501 != _ooo.ship_id && 506 != _ooo.ship_id && 502 != _ooo.ship_id && 507 != _ooo.ship_id && 503 != _ooo.ship_id && 504 != _ooo.ship_id || (_oos.houg += 1, _oor = true, _oox >= 1 && (_ooq.houg += 1, _ooq.kaih += 1, _ooq.houm += 2), _ooz >= 1 && (_ooq.houg += 1, _ooq.tyku += 3, _ooq.kaih += 2, _ooq.houm += 1), _ooo.get_slotnums(410) > 0 && (_ooq.houg += 2, _ooq.tyku += 3, _ooq.kaih += 2, _ooq.houm += 1), _oot = 1), 502 == _ooo.ship_id || 269 == _ooo.ship_id || 265 == _ooo.ship_id || 319 == _ooo.ship_id ? (_oos.houg += 1, _oos.houm += 1, _oor = true) : 507 == _ooo.ship_id && (_oos.houg += 1, _oos.houm += 2, _oos.tyku += 1, _oor = true), _oor && _ooq.add(_oos.multiply(_oow)), 0 == _oot) return _ooq;
            var _op6 = _ooo.get_each_level_over_nums([520]),
                _op7 = _op6[520][7],
                _op8 = _op6[520][10];
            return 1 == _oot && (_op7 > 0 && (_ooq.houg += 1 * _op7), _op8 > 0 && (_ooq.houm += 1 * _op8)), _ooq;
        };
    },
    33242: (_op9, _opa, _opb) => {
        'use strict';
        var _opc = null;
        defineModule(_opa);
        Object.defineProperty(_opa, '__esModule', {
            'value': true
        }), _opa.getSlot521PersonalEffect = void 0;
        var _opd = _opb(74496);
        _opa.getSlot521PersonalEffect = function(_ope) {
            var _opf = null,
                _opg = new _opd.SlotItemEffectModel(),
                _oph = false,
                _opi = new _opd.SlotItemEffectModel(),
                _opj = 0;
            if (52 == _ope.ctype && (_opj = 1), 183 == _ope.ship_id ? (_opi.houg += 1, _opi.houm += 1, _opi.saku += 2, _opi.kaih += 2, _oph = true) : 321 == _ope.ship_id ? (_opi.houg += 2, _opi.houm += 2, _opi.saku += 3, _opi.kaih += 3, _oph = true) : 507 == _ope.ship_id && (_opi.houg += 3, _opi.tyku += 1, _opi.houm += 3, _opi.saku += 2, _opi.kaih += 2, _oph = true, _opj = 1), _oph) {
                var _opk = _ope.get_slotnums(521);
                _opg.add(_opi.multiply(_opk));
            }
            if (0 == _opj) return _opg;
            var _opl = _ope.get_each_level_over_nums([521])[521];
            return 1 == _opj && (_opl[1] >= 1 && (_opg.houm += 1 * _opl[1]), _opl[2] >= 1 && (_opg.kaih += 1 * _opl[2]), _opl[3] >= 1 && (_opg.saku += 1 * _opl[3], _opg.raig += 1 * _opl[3]), _opl[4] >= 1 && (_opg.houg += 1 * _opl[4]), _opl[6] >= 1 && (_opg.houm += 1 * _opl[6]), _opl[8] >= 1 && (_opg.saku += 1 * _opl[8]), _opl[10] >= 1 && (_opg.houm += 1 * _opl[10])), _opg;
        };
    },
    3296: (_opm, _opn, _opo) => {
        'use strict';
        var _opp = null;
        defineModule(_opn);
        Object.defineProperty(_opn, '__esModule', {
            'value': true
        }), _opn.getSlot522_523PersonalEffect = void 0;
        var _opq = _opo(74496);
        _opn.getSlot522_523PersonalEffect = function(_opr) {
            var _ops = null,
                _opt = new _opq.SlotItemEffectModel(),
                _opu = false,
                _opv = new _opq.SlotItemEffectModel(),
                _opw = 0,
                _opx = _opr.get_slotnums(522),
                _opy = _opr.get_slotnums(523),
                _opz = _opx + _opy;
            if (14 == _opr.stype && (_opv.raig += 1, _opv.kaih += 5, _opv.houm += 1, _opv.saku += 3, _opu = true, _opy >= 1 && (_opt.raig += 2 * _opy, _opt.baku += 2 * _opy, _opt.kaih += 1 * _opy, _opt.houm += 1 * _opy, _opt.saku += 1 * _opy), _opw = 1), 0 == _opu) return _opt;
            if (_opt.add(_opv.multiply(_opz)), 0 == _opw) return _opt;
            var _oq0 = _opr.get_each_level_over_nums([522, 523]),
                _oq1 = _oq0[522],
                _oq2 = _oq0[523];
            if (1 == _opw) {
                if (_oq1[1] >= 1 || _oq2[1] >= 1) {
                    var _oq3 = _oq1[1] + _oq2[1];
                    _opt.raig += 1 * _oq3;
                }
                if (_oq1[2] >= 1 || _oq2[2] >= 1) {
                    var _oq4 = _oq1[2] + _oq2[2];
                    _opt.houm += 1 * _oq4;
                }
                if (_oq1[3] >= 1 || _oq2[3] >= 1) {
                    var _oq5 = _oq1[3] + _oq2[3];
                    _opt.kaih += 1 * _oq5;
                }
                if (_oq1[5] >= 1 || _oq2[5] >= 1) {
                    var _oq6 = _oq1[5] + _oq2[5];
                    _opt.saku += 1 * _oq6;
                }
                if (_oq1[8] >= 1 || _oq2[8] >= 1) {
                    var _oq7 = _oq1[8] + _oq2[8];
                    _opt.houm += 1 * _oq7;
                }
                if (_oq1[10] >= 1 || _oq2[10] >= 1) {
                    var _oq8 = _oq1[10] + _oq2[10];
                    _opt.kaih += 1 * _oq8;
                }
            }
            return _opt;
        };
    },
    59415: (_oq9, _oqa, _oqb) => {
        'use strict';
        var _oqc = null;
        defineModule(_oqa);
        Object.defineProperty(_oqa, '__esModule', {
            'value': true
        }), _oqa.getSlot524PersonalEffect = void 0;
        var _oqd = _oqb(74496);
        _oqa.getSlot524PersonalEffect = function(_oqe) {
            var _oqf = null,
                _oqg = new _oqd.SlotItemEffectModel(),
                _oqh = false,
                _oqi = new _oqd.SlotItemEffectModel(),
                _oqj = 0,
                _oqk = 0;
            if (17 != _oqe.stype && 19 != _oqe.stype && 20 != _oqe.stype && 21 != _oqe.stype && 22 != _oqe.stype || (_oqi.houg += 1, _oqi.tyku += 2, _oqi.kaih += 2, _oqi.houm += 1, _oqh = true, _oqj = 1, _oqk = 1), 0 == _oqh) return _oqg;
            var _oql = _oqe.get_slotnums(524);
            _oqg.add(_oqi.multiply(_oql));
            var _oqm = _oqe.get_have_rader_nums().air_rader;
            if (1 == _oqk && _oqm >= 1 && (_oqg.tyku += 2, _oqg.kaih += 2), 0 == _oqj) return _oqg;
            var _oqn = _oqe.get_each_level_over_nums([524])[524];
            return 1 == _oqj && (_oqn[1] >= 1 && (_oqg.kaih += 1 * _oqn[1]), _oqn[2] >= 1 && (_oqg.kaih += 1 * _oqn[2]), _oqn[4] >= 1 && (_oqg.tyku += 1 * _oqn[4]), _oqn[6] >= 1 && (_oqg.kaih += 1 * _oqn[6]), _oqn[7] >= 1 && (_oqg.houm += 1 * _oqn[7]), _oqn[8] >= 1 && (_oqg.tyku += 1 * _oqn[8]), _oqn[9] >= 1 && (_oqg.kaih += 1 * _oqn[9]), _oqn[10] >= 1 && (_oqg.houg += 1 * _oqn[10])), _oqg;
        };
    },
    23035: (_oqo, _oqp, _oqq) => {
        'use strict';
        var _oqr = null;
        defineModule(_oqp);
        Object.defineProperty(_oqp, '__esModule', {
            'value': true
        }), _oqp.getSlot58PersonalEffect = void 0;
        var _oqs = _oqq(74496);
        _oqp.getSlot58PersonalEffect = function(_oqt) {
            var _oqu = null,
                _oqv = new _oqs.SlotItemEffectModel(),
                _oqw = new _oqs.SlotItemEffectModel();
            if ('しまかぜ' != _oqt.yomi && 4 != _oqt.stype && 54 != _oqt.ctype || (_oqw.raig = 1), !_oqw.exists()) return _oqv;
            var _oqx = _oqt.get_slotnums(58);
            return _oqv = _oqw.multiply(_oqx);
        };
    },
    47169: (_oqy, _oqz, _or0) => {
        'use strict';
        var _or1 = null;
        defineModule(_oqz);
        Object.defineProperty(_oqz, '__esModule', {
            'value': true
        }), _oqz.getSlot59PersonalEffect = void 0;
        var _or2 = _or0(74496);
        _oqz.getSlot59PersonalEffect = function(_or3) {
            var _or4 = null,
                _or5 = new _or2.SlotItemEffectModel();
            return 501 != _or3.ship_id && 506 != _or3.ship_id && 502 != _or3.ship_id && 507 != _or3.ship_id || (_or5.tyku += 1, _or5.kaih += 1), _or5;
        };
    },
    87845: (_or6, _or7, _or8) => {
        'use strict';
        var _or9 = null;
        defineModule(_or7);
        Object.defineProperty(_or7, '__esModule', {
            'value': true
        }), _or7.getSlot5PersonalEffect = void 0;
        var _ora = _or8(74496);
        _or7.getSlot5PersonalEffect = function(_orb) {
            var _orc = null,
                _ord = new _ora.SlotItemEffectModel(),
                _ore = false,
                _orf = new _ora.SlotItemEffectModel();
            if (52 != _orb.ctype && 9 != _orb.ctype || (_orf.houg += 1, 52 == _orb.ctype && (_orf.houg = _orf.houg + 1), _ore = true), 0 == _ore) return _ord;
            var _org = _orb.get_slotnums(5);
            return _ord.add(_orf.multiply(_org)), _ord;
        };
    },
    92253: (_orh, _ori, _orj) => {
        'use strict';
        var _ork = null;
        defineModule(_ori);
        Object.defineProperty(_ori, '__esModule', {
            'value': true
        }), _ori.getSlot60_154_219PersonalEffec = void 0;
        var _orl = _orj(74496);
        _ori.getSlot60_154_219PersonalEffec = function(_orm) {
            var _orn = null,
                _oro = new _orl.SlotItemEffectModel(),
                _orp = false,
                _orq = new _orl.SlotItemEffectModel();
            if ('じゅんよう' != _orm.yomi && 'ひよう' != _orm.yomi && 'ずいほう' != _orm.yomi && 'ちとせ' != _orm.yomi && 'ちよだ' != _orm.yomi || (_orq.houg += 1, _orq.tyku += 1, _orq.kaih += 1, _orp = true), 185 != _orm.ship_id && 318 != _orm.ship_id && 282 != _orm.ship_id || (_orq.houg += 1, _orq.tyku += 1, _orq.kaih += 1, _orp = true), 888 != _orm.ship_id && 883 != _orm.ship_id || (_orq.houg += 2, _orq.tyku += 1, _orq.kaih += 2, _orp = true), 0 == _orp) return _oro;
            var _orr = _orm.get_slotnums(60) + _orm.get_slotnums(154) + _orm.get_slotnums(219);
            return _oro.add(_orq.multiply(_orr)), _oro;
        };
    },
    2578: (_ors, _ort, _oru) => {
        'use strict';
        var _orv = null;
        defineModule(_ort);
        Object.defineProperty(_ort, '__esModule', {
            'value': true
        }), _ort.getSlot61PersonalEffect2 = _ort.getSlot61PersonalEffect = void 0;
        var _orw = _oru(74496);
        _ort.getSlot61PersonalEffect = function(_orx) {
            var _ory = null,
                _orz = new _orw.SlotItemEffectModel();
            if (553 == _orx.ship_id) _orz.houg = 3, _orz.kaih = 2, _orz.souk = 1, _orz.houm = 5, _orz.leng = 1;
            else {
                if (554 == _orx.ship_id) _orz.houg = 3, _orz.kaih = 3, _orz.souk = 3, _orz.houm = 5, _orz.leng = 1;
                else {
                    if (196 == _orx.ship_id) _orz.houm = 5, _orz.leng = 1;
                    else {
                        if (197 != _orx.ship_id) return _orz;
                        _orz.houm = 5, _orz.leng = 1;
                    }
                }
            }
            return _orz;
        }, _ort.getSlot61PersonalEffect2 = function(_os0) {
            var _os1 = null,
                _os2 = new _orw.SlotItemEffectModel();
            if (null == _os0.have_slots_dict[61]) return _os2;
            for (var _os3 = 0, _os4 = 0, _os5 = _os0.have_slots_dict[61]; _os4 < _os5.length; _os4++) {
                var _os6 = _os5[_os4].level;
                _os3 < _os6 && (_os3 = _os6);
            }
            return 0 == _os3 || ('そうりゅう' == _os0.yomi ? (_os2.houg += 3, _os2.saku += 3) : 'ひりゅう' == _os0.yomi && (_os2.houg += 2, _os2.saku += 2), 508 != _os0.ship_id && 509 != _os0.ship_id && 560 != _os0.ship_id || (_os2.houg += 1, _os2.saku += 1), _os3 >= 8 && 197 == _os0.ship_id && (_os2.houg += 1, _os2.saku += 1)), _os2;
        };
    },
    17143: (_os7, _os8, _os9) => {
        'use strict';
        var _osa = null;
        defineModule(_os8);
        Object.defineProperty(_os8, '__esModule', {
            'value': true
        }), _os8.getSlot63PersonalEffect = void 0;
        var _osb = _os9(74496);
        _os8.getSlot63PersonalEffect = function(_osc) {
            var _osd = null,
                _ose = new _osb.SlotItemEffectModel(),
                _osf = new _osb.SlotItemEffectModel();
            1 != _osc.ctype && 5 != _osc.ctype && 10 != _osc.ctype || (_osf.tyku += 1), 'ゆうだち' == _osc.yomi && (_osf.houg += 1, _osf.tyku += 1, _osf.kaih += 2), 145 == _osc.ship_id || 961 == _osc.ship_id ? _osf.houg += 1 : 144 == _osc.ship_id ? _osf.raig += 1 : 469 == _osc.ship_id ? _osf.kaih += 2 : 242 == _osc.ship_id || 497 == _osc.ship_id || 244 == _osc.ship_id || 498 == _osc.ship_id ? _osf.kaih += 1 : 627 == _osc.ship_id ? _osf.houg += 1 : 903 != _osc.ship_id && 908 != _osc.ship_id || (_osf.houg += 2);
            var _osg = true;
            if (_osf.exists() || (_osg = false), 0 == _osg) return _ose;
            var _osh = _osc.get_slotnums(63);
            return _ose = _osf.multiply(_osh);
        };
    },
    16164: (_osi, _osj, _osk) => {
        'use strict';
        var _osl = null;
        defineModule(_osj);
        Object.defineProperty(_osj, '__esModule', {
            'value': true
        }), _osj.getSlot67PersonalEffect = void 0;
        var _osm = _osk(74496);
        _osj.getSlot67PersonalEffect = function(_osn) {
            var _oso = null,
                _osp = new _osm.SlotItemEffectModel(),
                _osq = new _osm.SlotItemEffectModel();
            if (13 != _osn.stype && 14 != _osn.stype && (_osq.raig = -5), !_osq.exists()) return _osp;
            var _osr = _osn.get_slotnums(67);
            return _osp = _osq.multiply(_osr);
        };
    },
    35023: (_oss, _ost, _osu) => {
        'use strict';
        var _osv = null;
        defineModule(_ost);
        Object.defineProperty(_ost, '__esModule', {
            'value': true
        }), _ost.getSlot69PersonalEffect = void 0;
        var _osw = _osu(74496);
        _ost.getSlot69PersonalEffect = function(_osx) {
            var _osy = null,
                _osz = new _osw.SlotItemEffectModel(),
                _ot0 = false,
                _ot1 = new _osw.SlotItemEffectModel();
            if (554 == _osx.ship_id || 646 == _osx.ship_id ? (_ot1.houg += 1, _ot1.tais += 2, _ot0 = true) : 553 == _osx.ship_id && (_ot1.houg += 1, _ot1.tais += 1, _ot0 = true), 0 == _ot0) return _osz;
            var _ot2 = _osx.get_slotnums(69);
            return _osz.add(_ot1.multiply(_ot2)), _osz;
        };
    },
    78707: (_ot3, _ot4, _ot5) => {
        'use strict';
        var _ot6 = null;
        defineModule(_ot4);
        Object.defineProperty(_ot4, '__esModule', {
            'value': true
        }), _ot4.getSlot70PersonalEffect = void 0;
        var _ot7 = _ot5(74496);
        _ot4.getSlot70PersonalEffect = function(_ot8) {
            var _ot9 = null,
                _ota = new _ot7.SlotItemEffectModel(),
                _otb = false,
                _otc = new _ot7.SlotItemEffectModel();
            if ('やましおまる' == _ot8.yomi && (_otc.houg += 1, _otc.tais += 1, _otb = true), 0 == _otb) return _ota;
            var _otd = _ot8.get_slotnums(70);
            return _ota.add(_otc.multiply(_otd)), _ota;
        };
    },
    44680: function(_ote, _otf, _otg) {
        'use strict';
        var _oth = null;
        var _oti = this && this.__importDefault || function(_otj) {
            var _otk = null;
            return _otj && _otj.__esModule ? _otj : {
                'default': _otj
            };
        };
        defineModule(_otf);
        Object.defineProperty(_otf, '__esModule', {
            'value': true
        }), _otf.getSlot78PersonalEffect = void 0;
        var _otl = _otg(74496),
            _otm = _oti(_otg(18622));
        _otf.getSlot78PersonalEffect = function(_otn) {
            var _oto = null,
                _otp = new _otl.SlotItemEffectModel(),
                _otq = false,
                _otr = new _otl.SlotItemEffectModel(),
                _ots = 0,
                _ott = 0,
                _otu = false;
            if (48 == _otn.ctype && (_otr.houg += 1, _otr.kaih += 1, _ots = 1, _ott = 1, _otu = true, _otq = true), 0 == _otq) return _otp;
            var _otv = _otn.get_slotnums(78);
            _otp.add(_otr.multiply(_otv));
            var _otw = 0,
                _otx = _otn.get_each_level_nums(78),
                _oty = 0;
            if (_otu) {
                _otx.map(function(_otz, _ou0) {
                    _ou0 >= 7 && (_oty += _otz);
                });
                for (var _ou1 = 0, _ou2 = _otn.have_slot_ids(); _ou1 < _ou2.length; _ou1++) {
                    var _ou3 = _ou2[_ou1],
                        _ou4 = _otm.default.model.slot.getMst(_ou3),
                        _ou5 = _ou4.equipType;
                    12 != _ou5 && 13 != _ou5 || _ou4.sakuteki >= 5 && (_otw += _otn.get_slotnums(parseInt(_ou3)));
                }
            }
            if (1 == _ots && _otw > 0 && (_otp.houg += 2, _otp.kaih += 2, _otp.raig += 2), 1 == _ott) {
                _otp.houg += 1 * _oty;
                var _ou6 = _otx[10];
                _otp.souk += 1 * _ou6;
            }
            return _otp;
        };
    },
    45749: (_ou7, _ou8, _ou9) => {
        'use strict';
        var _oua = null;
        defineModule(_ou8);
        Object.defineProperty(_ou8, '__esModule', {
            'value': true
        }), _ou8.getSlot79And81PersonalEffect = void 0;
        var _oub = _ou9(74496);
        _ou8.getSlot79And81PersonalEffect = function(_ouc) {
            var _oud = null,
                _oue = new _oub.SlotItemEffectModel(),
                _ouf = new _oub.SlotItemEffectModel();
            if (553 == _ouc.ship_id) _ouf.houg = 3;
            else {
                if (82 == _ouc.ship_id) _ouf.houg = 2;
                else {
                    if (88 == _ouc.ship_id) _ouf.houg = 2;
                    else {
                        if (554 == _ouc.ship_id) _ouf.houg = 3;
                        else {
                            if (411 == _ouc.ship_id) _ouf.houg = 2;
                            else {
                                if (412 != _ouc.ship_id) return _oue;
                                _ouf.houg = 2;
                            }
                        }
                    }
                }
            }
            var _oug = _ouc.get_slotnums(79) + _ouc.get_slotnums(81);
            return _oue = _ouf.multiply(_oug);
        };
    },
    37334: (_ouh, _oui, _ouj) => {
        'use strict';
        var _ouk = null;
        defineModule(_oui);
        Object.defineProperty(_oui, '__esModule', {
            'value': true
        }), _oui.getSlot82PersonalEffect = void 0;
        var _oul = _ouj(74496);
        _oui.getSlot82PersonalEffect = function(_oum) {
            var _oun = null,
                _ouo = new _oul.SlotItemEffectModel(),
                _oup = new _oul.SlotItemEffectModel();
            if (76 == _oum.ctype && (_oup.tais = 1, _oup.kaih = 1), !_oup.exists()) return _ouo;
            var _ouq = _oum.get_slotnums(82);
            return _ouo = _oup.multiply(_ouq);
        };
    },
    2603: function(_our, _ous, _out) {
        'use strict';
        var _ouu = null;
        var _ouv = this && this.__importDefault || function(_ouw) {
            var _oux = null;
            return _ouw && _ouw.__esModule ? _ouw : {
                'default': _ouw
            };
        };
        defineModule(_ous);
        Object.defineProperty(_ous, '__esModule', {
            'value': true
        }), _ous.getSlot84PersonalEffect = void 0;
        var _ouy = _out(74496),
            _ouz = _ouv(_out(18622));
        _ous.getSlot84PersonalEffect = function(_ov0) {
            var _ov1 = null,
                _ov2 = new _ouy.SlotItemEffectModel(),
                _ov3 = _ov0.get_each_level_nums(84),
                _ov4 = 0,
                _ov5 = 0;
            if (_ov3.forEach(function(_ov6, _ov7) {
                    _ov7 >= 4 && (_ov4 += _ov6), _ov7 >= 7 && (_ov5 += _ov6);
                }), 0 == _ov4) return _ov2;
            for (var _ov8 = 0, _ov9 = 0, _ova = _ov0.have_slot_ids(); _ov9 < _ova.length; _ov9++) {
                var _ovb = _ova[_ov9],
                    _ovc = _ouz.default.model.slot.getMst(_ovb),
                    _ovd = _ovc.equipType;
                12 != _ovd && 13 != _ovd || (_ovc.sakuteki >= 5 && _ov0.get_slotnums(parseInt(_ovb)), _ovc.taiku >= 2 && (_ov8 += _ov0.get_slotnums(parseInt(_ovb))));
            }
            var _ove = _ov0.getCountryName();
            _ov4 >= 1 && (_ov2.tyku += 1 * _ov4, _ov2.kaih += 1 * _ov4, 'ドイツ' != _ove && 'イタリア' != _ove || (_ov2.tyku += 1 * _ov4, _ov2.kaih += 1 * _ov4), _ov8 >= 1 && (_ov2.tyku += 1)), _ov5 >= 1 && (_ov2.tyku += 1 * _ov5, _ov2.houg += 1 * _ov5);
            var _ovf = _ov3[10];
            return _ovf >= 1 && (_ov2.tyku += 1 * _ovf, _ov2.kaih += 1 * _ovf, 'ドイツ' != _ove && 'イタリア' != _ove || (_ov2.houg += 1)), _ov2;
        };
    },
    90725: (_ovg, _ovh, _ovi) => {
        'use strict';
        var _ovj = null;
        defineModule(_ovh);
        Object.defineProperty(_ovh, '__esModule', {
            'value': true
        }), _ovh.getSlot85PersonalEffect = void 0;
        var _ovk = _ovi(74496);
        _ovh.getSlot85PersonalEffect = function(_ovl) {
            var _ovm = null,
                _ovn = new _ovk.SlotItemEffectModel(),
                _ovo = _ovl.get_each_level_over_nums([85]),
                _ovp = _ovo[85][6],
                _ovq = _ovo[85][8],
                _ovr = _ovo[85][10],
                _ovs = _ovl.get_have_rader_nums().air_rader,
                _ovt = _ovl.getCountryName();
            return _ovp > 0 && (_ovn.tyku += 1 * _ovp, _ovn.kaih += 1 * _ovp, _ovs >= 1 && (_ovn.tyku += 2)), _ovq > 0 && (_ovn.houg += 1 * _ovq, 'ドイツ' != _ovt && 'イタリア' != _ovt || (_ovn.tyku += 1 * _ovq, _ovn.kaih += 1 * _ovq)), _ovr > 0 && (_ovn.kaih += 1 * _ovr, _ovn.houm += 1 * _ovr, 'ドイツ' != _ovt && 'イタリア' != _ovt || (_ovn.houg += 1)), _ovn;
        };
    },
    29180: (_ovu, _ovv, _ovw) => {
        'use strict';
        var _ovx = null;
        defineModule(_ovv);
        Object.defineProperty(_ovv, '__esModule', {
            'value': true
        }), _ovv.getSlot87PersonalEffect = void 0;
        var _ovy = _ovw(74496);
        _ovv.getSlot87PersonalEffect = function(_ovz) {
            var _ow0 = null,
                _ow1 = new _ovy.SlotItemEffectModel(),
                _ow2 = false,
                _ow3 = new _ovy.SlotItemEffectModel(),
                _ow4 = 0;
            if (951 == _ovz.ship_id ? (_ow3.houg += 1, _ow3.kaih += 1, _ow3.raig += 1, _ow3.houm += 1, _ow2 = true, _ow4 = 1) : 181 == _ovz.ship_id || 316 == _ovz.ship_id || 50 == _ovz.ship_id || 229 == _ovz.ship_id || 961 == _ovz.ship_id ? _ow4 = 2 : 591 != _ovz.ship_id && 592 != _ovz.ship_id && 593 != _ovz.ship_id && 954 != _ovz.ship_id || (_ow1.kaih += 2, _ow1.raig += 1, _ow4 = 3), 38 != _ovz.ctype && 54 != _ovz.ctype && 101 != _ovz.ctype || (_ow4 = 4), _ow2) {
                var _ow5 = _ovz.get_slotnums(87);
                _ow1.add(_ow3.multiply(_ow5));
            }
            if (0 == _ow4) return _ow1;
            var _ow6 = _ovz.get_each_level_nums(87),
                _ow7 = [];
            return _ow4 > 0 && _ow6.forEach(function(_ow8, _ow9) {
                var _owa = null;
                for (var _owb = 1; _owb <= _ovz.SLOT_LEVEL_MAX; _owb++) null == _ow7[_owb] && (_ow7[_owb] = 0), _ow9 >= _owb && (_ow7[_owb] += _ow8);
            }), 1 == _ow4 ? (_ow7[6] >= 1 && (_ow1.tyku += 1 * _ow7[6]), _ow7[7] >= 1 && (_ow1.kaih += 1 * _ow7[7]), _ow7[8] >= 1 && (_ow1.raig += 1 * _ow7[8]), _ow7[9] >= 1 && (_ow1.houg += 1 * _ow7[9]), _ow7[10] >= 1 && (_ow1.houm += 1 * _ow7[10])) : 2 == _ow4 ? (_ow7[6] >= 1 && (_ow1.kaih += 1 * _ow7[6]), _ow7[7] >= 1 && (_ow1.raig += 1 * _ow7[7]), _ow7[8] >= 1 && (_ow1.houg += 1 * _ow7[8]), _ow7[9] >= 1 && (_ow1.houm += 1 * _ow7[9]), _ow7[10] >= 1 && (_ow1.kaih += 1 * _ow7[10])) : 3 == _ow4 ? (_ow7[6] > 0 && (_ow1.kaih += 1), _ow7[8] > 0 && (_ow1.raig += 1), _ow7[10] > 0 && (_ow1.houg += 1)) : 4 == _ow4 && (_ow7[7] >= 1 && (_ow1.kaih += 1 * _ow7[7]), _ow7[8] >= 1 && (_ow1.raig += 1 * _ow7[8]), _ow7[10] >= 1 && (_ow1.houm += 1 * _ow7[10])), _ow1;
        };
    },
    68685: function(_owc, _owd, _owe) {
        'use strict';
        var _owf = null;
        var _owg = this && this.__importDefault || function(_owh) {
            var _owi = null;
            return _owh && _owh.__esModule ? _owh : {
                'default': _owh
            };
        };
        defineModule(_owd);
        Object.defineProperty(_owd, '__esModule', {
            'value': true
        }), _owd.getSlot90PersonalEffect = void 0;
        var _owj = _owe(74496),
            _owk = _owg(_owe(18622));
        _owd.getSlot90PersonalEffect = function(_owl) {
            var _owm = null,
                _own = new _owj.SlotItemEffectModel(),
                _owo = new _owj.SlotItemEffectModel();
            if (142 == _owl.ship_id ? (_owo.houg += 2, _owo.kaih += 1) : 295 == _owl.ship_id || 416 == _owl.ship_id || 417 == _owl.ship_id ? _owo.houg += 1 : 264 == _owl.ship_id ? (_owo.houg += 1, _owo.tyku += 1) : 501 != _owl.ship_id && 506 != _owl.ship_id && 502 != _owl.ship_id && 507 != _owl.ship_id || (_owo.houg += 1), 7 != _owl.ctype && 13 != _owl.ctype && 8 != _owl.ctype && 29 != _owl.ctype && 9 != _owl.ctype && 31 != _owl.ctype || (_owo.houg += 1), _owo.exists()) {
                var _owp = _owl.get_slotnums(90);
                _own = _owo.multiply(_owp);
            }
            var _owq = [];
            if ('あおば' == _owl.yomi && (_owq[1] = 1), 13 != _owl.ctype && 7 != _owl.ctype || (_owq[2] = 1), 0 == _owq.length) return _own;
            for (var _owr = 0, _ows = 0, _owt = 0, _owu = _owl.have_slot_ids(); _owt < _owu.length; _owt++) {
                var _owv = _owu[_owt],
                    _oww = _owk.default.model.slot.getMst(_owv),
                    _owx = _oww.equipType;
                12 != _owx && 13 != _owx || (_oww.sakuteki >= 5 && (_owr += _owl.get_slotnums(parseInt(_owv))), _oww.taiku >= 2 && (_ows += _owl.get_slotnums(parseInt(_owv))));
            }
            return _ows > 0 && null != _owq[1] && (_own.tyku += 5, _own.kaih += 2), _owr > 0 && null != _owq[2] && (_own.houg += 3, _own.kaih += 2, _own.raig += 2), _own;
        };
    },
    26078: (_owy, _owz, _ox0) => {
        'use strict';
        var _ox1 = null;
        defineModule(_owz);
        Object.defineProperty(_owz, '__esModule', {
            'value': true
        }), _owz.getSlot93PersonalEffect = void 0;
        var _ox2 = _ox0(74496);
        _owz.getSlot93PersonalEffect = function(_ox3) {
            var _ox4 = null,
                _ox5 = new _ox2.SlotItemEffectModel();
            return 'そうりゅう' == _ox3.yomi ? _ox5.houg = 1 : 'ひりゅう' == _ox3.yomi && (_ox5.houg = 3), _ox5;
        };
    },
    20829: (_ox6, _ox7, _ox8) => {
        'use strict';
        var _ox9 = null;
        defineModule(_ox7);
        Object.defineProperty(_ox7, '__esModule', {
            'value': true
        }), _ox7.getSlot94PersonalEffect = void 0;
        var _oxa = _ox8(74496);
        _ox7.getSlot94PersonalEffect = function(_oxb) {
            var _oxc = null,
                _oxd = new _oxa.SlotItemEffectModel();
            if (196 == _oxb.ship_id) _oxd.houg = 7;
            else {
                if (197 != _oxb.ship_id) return _oxd;
                _oxd.houg = 3;
            }
            return _oxd;
        };
    },
    6880: (_oxe, _oxf, _oxg) => {
        'use strict';
        var _oxh = null;
        defineModule(_oxf);
        Object.defineProperty(_oxf, '__esModule', {
            'value': true
        }), _oxf.getSlot99PersonalEffect = void 0;
        var _oxi = _oxg(74496);
        _oxf.getSlot99PersonalEffect = function(_oxj) {
            var _oxk = null,
                _oxl = new _oxi.SlotItemEffectModel();
            return 'そうりゅう' == _oxj.yomi ? _oxl.houg = 4 : 'ひりゅう' == _oxj.yomi && (_oxl.houg = 1), _oxl;
        };
    },
    21403: (_oxm, _oxn, _oxo) => {
        'use strict';
        var _oxp = null;
        defineModule(_oxn);
        Object.defineProperty(_oxn, '__esModule', {
            'value': true
        }), _oxn.getSlotCorsairMkIIPersonalEffect = void 0;
        var _oxq = _oxo(74496);
        _oxn.getSlotCorsairMkIIPersonalEffect = function(_oxr) {
            var _oxs = null,
                _oxt = new _oxq.SlotItemEffectModel(),
                _oxu = false,
                _oxv = new _oxq.SlotItemEffectModel();
            112 == _oxr.ctype && (_oxv.houg += 1, _oxv.tyku += 1, _oxv.kaih += 2, _oxu = true);
            var _oxw = _oxr.getCountryName();
            if (67 == _oxr.ctype || 78 == _oxr.ctype || 82 == _oxr.ctype || 88 == _oxr.ctype || 108 == _oxr.ctype || 112 == _oxr.ctype ? (_oxv.houg += 1, _oxv.tyku += 2, _oxv.kaih += 3, _oxu = true) : 'アメリカ' == _oxw && (_oxv.houg += 1, _oxv.tyku += 1, _oxv.kaih += 2, _oxu = true), 0 == _oxu) return _oxt;
            var _oxx = _oxr.get_slotnums(434) + _oxr.get_slotnums(435);
            return _oxt.add(_oxv.multiply(_oxx)), _oxt;
        };
    },
    9195: (_oxy, _oxz, _oy0) => {
        'use strict';
        var _oy1 = null;
        defineModule(_oxz);
        Object.defineProperty(_oxz, '__esModule', {
            'value': true
        }), _oxz.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _oy2 = _oy0(74496);
        _oxz.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_oy3) {
            var _oy4 = null,
                _oy5 = new _oy2.SlotItemEffectModel(),
                _oy6 = false,
                _oy7 = new _oy2.SlotItemEffectModel();
            if (56 == _oy3.ctype && (_oy7.tais += 3, _oy7.kaih += 2, _oy6 = true), 0 == _oy6) return _oy5;
            var _oy8 = _oy3.get_slotnums(44) + _oy3.get_slotnums(45) + _oy3.get_slotnums(287) + _oy3.get_slotnums(288);
            return _oy5.add(_oy7.multiply(_oy8)), _oy5;
        };
    },
    93297: (_oy9, _oya, _oyb) => {
        'use strict';
        var _oyc = null;
        defineModule(_oya);
        Object.defineProperty(_oya, '__esModule', {
            'value': true
        }), _oya.getSlotDomesticSonarPersonalEffect = void 0;
        var _oyd = _oyb(74496);
        _oya.getSlotDomesticSonarPersonalEffect = function(_oye) {
            var _oyf = null,
                _oyg = new _oyd.SlotItemEffectModel();
            return 56 == _oye.ctype && (_oyg.tais += 2, _oyg.kaih += 3), _oyg;
        };
    },
    45482: (_oyh, _oyi, _oyj) => {
        'use strict';
        var _oyk = null;
        defineModule(_oyi);
        Object.defineProperty(_oyi, '__esModule', {
            'value': true
        }), _oyi.getSlotOtherSuiseiPersonalEffect = void 0;
        var _oyl = _oyj(74496);
        _oyi.getSlotOtherSuiseiPersonalEffect = function(_oym) {
            var _oyn = null,
                _oyo = new _oyl.SlotItemEffectModel(),
                _oyp = new _oyl.SlotItemEffectModel();
            if (553 == _oym.ship_id) _oyp.houg = 2;
            else {
                if (554 != _oym.ship_id) return _oyo;
                _oyp.houg = 2;
            }
            var _oyq = _oym.get_slotnums(24) + _oym.get_slotnums(57) + _oym.get_slotnums(111);
            return _oyo = _oyp.multiply(_oyq);
        };
    },
    45927: (_oyr, _oys, _oyt) => {
        'use strict';
        var _oyu = null;
        defineModule(_oys);
        Object.defineProperty(_oys, '__esModule', {
            'value': true
        }), _oys.getSlotSmokePersonalEffect = void 0;
        var _oyv = _oyt(74496);
        _oys.getSlotSmokePersonalEffect = function(_oyw) {
            var _oyx = null,
                _oyy = new _oyv.SlotItemEffectModel(),
                _oyz = false,
                _oz0 = new _oyv.SlotItemEffectModel();
            if (959 == _oyw.ship_id && (_oz0.kaih += 4, _oyz = true), 'ジョンストン' == _oyw.yomi || 'サミュエル・B・ロバーツ' == _oyw.yomi || 'せんだい' == _oyw.yomi || 'はるかぜ' == _oyw.yomi || 'かみかぜ' == _oyw.yomi || 'しきなみ' == _oyw.yomi || 'うらなみ' == _oyw.yomi || 'あおば' == _oyw.yomi ? (_oz0.kaih += 3, _oyz = true) : 'いなづま' != _oyw.yomi && 'はぐろ' != _oyw.yomi && 'はつしも' != _oyw.yomi && 'かすみ' != _oyw.yomi && 'ふぶき' != _oyw.yomi && 'あたご' != _oyw.yomi && 'あまぎり' != _oyw.yomi && 'はまなみ' != _oyw.yomi || (_oz0.kaih += 2, _oyz = true), 0 == _oyz) return _oyy;
            var _oz1 = _oyw.get_slotnums(500) + _oyw.get_slotnums(501);
            return _oyy.add(_oz0.multiply(_oz1)), _oyy;
        };
    },
    32666: (_oz2, _oz3, _oz4) => {
        'use strict';
        var _oz5 = null;
        defineModule(_oz3);
        Object.defineProperty(_oz3, '__esModule', {
            'value': true
        }), _oz3.getSlotTokuYonPersonalEffect = void 0;
        var _oz6 = _oz4(74496);
        _oz3.getSlotTokuYonPersonalEffect = function(_oz7) {
            var _oz8 = null,
                _oz9 = new _oz6.SlotItemEffectModel(),
                _oza = false,
                _ozb = new _oz6.SlotItemEffectModel(),
                _ozc = 0,
                _ozd = _oz7.get_slotnums(525),
                _oze = _oz7.get_slotnums(526),
                _ozf = _ozd + _oze;
            if (13 != _oz7.stype && 14 != _oz7.stype || (_ozb.houg += 1, _ozb.raig += 2, _ozb.kaih -= 1, _oza = true, _ozc = 1, 'い36' != _oz7.yomi && 'い41' != _oz7.yomi || (_oz9.houg += 2, _oz9.raig += 1, _oz9.houm += 2), _oze >= 1 && (_oz9.houg += 1 * _oze, _oz9.raig += 1 * _oze, _oz9.houm += 1 * _oze)), 0 == _oza) return _oz9;
            if (_oz9.add(_ozb.multiply(_ozf)), 0 == _ozc) return _oz9;
            var _ozg = _oz7.get_each_level_over_nums([525, 526]),
                _ozh = _ozg[525],
                _ozi = _ozg[526];
            if (1 == _ozc) {
                if (_ozh[1] >= 1 || _ozi[1] >= 1) {
                    var _ozj = _ozh[1] + _ozi[1];
                    _oz9.raig += 1 * _ozj;
                }
                if (_ozi[2] >= 1) {
                    var _ozk = _ozh[2] + _ozi[2];
                    _oz9.houg += 1 * _ozk;
                }
                if (_ozh[3] >= 1 || _ozi[3] >= 1) {
                    var _ozl = _ozh[3] + _ozi[3];
                    _oz9.houm += 1 * _ozl;
                }
                if (_ozi[4] >= 1) {
                    var _ozm = _ozh[4] + _ozi[4];
                    _oz9.raig += 1 * _ozm;
                }
                if (_ozh[6] >= 1 || _ozi[6] >= 1) {
                    var _ozn = _ozh[6] + _ozi[6];
                    _oz9.houm += 1 * _ozn;
                }
                if (_ozi[8] >= 1) {
                    var _ozo = _ozh[8] + _ozi[8];
                    _oz9.houg += 1 * _ozo;
                }
                if (_ozh[10] >= 1 || _ozi[10] >= 1) {
                    var _ozp = _ozh[10] + _ozi[10];
                    _oz9.raig += 1 * _ozp;
                }
            }
            return _oz9;
        };
    },
    29805: (_ozq, _ozr, _ozs) => {
        'use strict';
        var _ozt = null;
        defineModule(_ozr);
        Object.defineProperty(_ozr, '__esModule', {
            'value': true
        }), _ozr.getSlotType10PersonalEffect = void 0;
        var _ozu = _ozs(74496);
        _ozr.getSlotType10PersonalEffect = function(_ozv) {
            var _ozw = null,
                _ozx = new _ozu.SlotItemEffectModel();
            return 662 == _ozv.ship_id || 663 == _ozv.ship_id || 668 == _ozv.ship_id ? (_ozx.houg += 2, _ozx.kaih += 1, _ozx.tais += 3) : 501 != _ozv.ship_id && 506 != _ozv.ship_id && 502 != _ozv.ship_id && 507 != _ozv.ship_id || (_ozx.houg += 2), _ozx;
        };
    },
    58913: (_ozy, _ozz, _p00) => {
        'use strict';
        var _p01 = null;
        defineModule(_ozz);
        Object.defineProperty(_ozz, '__esModule', {
            'value': true
        }), _ozz.getSlotType11PersonalEffect = void 0;
        var _p02 = _p00(74496);
        _ozz.getSlotType11PersonalEffect = function(_p03) {
            var _p04 = null,
                _p05 = new _p02.SlotItemEffectModel();
            return 662 == _p03.ship_id || 663 == _p03.ship_id || 668 == _p03.ship_id ? (_p05.houg += 1, _p05.kaih += 1, _p05.tais += 1) : 501 != _p03.ship_id && 506 != _p03.ship_id && 502 != _p03.ship_id && 507 != _p03.ship_id || (_p05.houg += 1, _p05.kaih += 1), _p05;
        };
    },
    55421: (_p06, _p07, _p08) => {
        'use strict';
        var _p09 = null;
        defineModule(_p07);
        Object.defineProperty(_p07, '__esModule', {
            'value': true
        }), _p07.getSlotType25PersonalEffect = void 0;
        var _p0a = _p08(74496);
        _p07.getSlotType25PersonalEffect = function(_p0b) {
            var _p0c = null,
                _p0d = new _p0a.SlotItemEffectModel();
            return 662 == _p0b.ship_id ? (_p0d.tais += 4, _p0d.kaih += 1) : 663 != _p0b.ship_id && 668 != _p0b.ship_id || (_p0d.tais += 3, _p0d.kaih += 1), _p0d;
        };
    },
    272: function(_p0e, _p0f, _p0g) {
        'use strict';
        var _p0h = null;
        var _p0i = this && this.__importDefault || function(_p0j) {
            var _p0k = null;
            return _p0j && _p0j.__esModule ? _p0j : {
                'default': _p0j
            };
        };
        defineModule(_p0f);
        Object.defineProperty(_p0f, '__esModule', {
            'value': true
        }), _p0f.getSlotType9PersonalEffect = void 0;
        var _p0l = _p0g(74496),
            _p0m = _p0i(_p0g(18622));
        _p0f.getSlotType9PersonalEffect = function(_p0n) {
            var _p0o = null,
                _p0p = new _p0l.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_p0n.stype]) return _p0p;
            for (var _p0q = 0, _p0r = 0, _p0s = _p0n.have_slot_ids(); _p0r < _p0s.length; _p0r++) {
                var _p0t = _p0s[_p0r];
                if (9 == _p0m.default.model.slot.getMst(_p0t).equipType)
                    for (var _p0u = 0, _p0v = _p0n.have_slots_dict[parseInt(_p0t)]; _p0u < _p0v.length; _p0u++) {
                        var _p0w = _p0v[_p0u].level;
                        _p0q < _p0w && (_p0q = _p0w);
                    }
            }
            return _p0q >= 2 && (_p0p.saku += 1), _p0q >= 4 && (_p0p.houg += 1), _p0q >= 6 && (_p0p.saku += 1), _p0q >= 10 && (_p0p.houg += 1, _p0p.saku += 1), _p0p;
        };
    },
    54518: (_p0x, _p0y, _p0z) => {
        'use strict';
        var _p10 = null;
        defineModule(_p0y);
        Object.defineProperty(_p0y, '__esModule', {
            'value': true
        }), _p0y.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _p11 = _p0z(74496);
        _p0y.getSlot_16InchMkXRensouhou_PersonalEffect = function(_p12) {
            var _p13 = null,
                _p14 = new _p11.SlotItemEffectModel();
            if (93 == _p12.ctype) {
                var _p15 = _p12.get_slotnums(330);
                _p15 > 0 && (_p14.houg = _p14.houg + 1 * _p15);
                var _p16 = _p12.get_slotnums(331);
                _p16 > 0 && (_p14.houg = _p14.houg + 1 * _p16, 1496 != _p12.ship_id && 918 != _p12.ship_id || (_p14.houg = _p14.houg + 1 * _p16, _p14.kaih = _p14.kaih + 1 * _p16));
                var _p17 = _p12.get_slotnums(332);
                return _p17 > 0 && (_p14.houg = _p14.houg + 1 * _p17, 1496 != _p12.ship_id && 918 != _p12.ship_id || (_p14.houg = _p14.houg + 1 * _p17, _p14.kaih = _p14.kaih + 1 * _p17, _p14.tyku = _p14.tyku + 1 * _p17)), _p14;
            }
            var _p18 = new _p11.SlotItemEffectModel();
            if (19 == _p12.ctype ? (_p18.houg = 1, (541 == _p12.ship_id || 573 == _p12.ship_id) && (_p18.houg += 1)) : 88 == _p12.ctype && (_p18.houg = 1, 576 == _p12.ship_id && (_p18.houg += 1)), !_p18.exists()) return _p14;
            var _p19 = _p12.get_slotnums(330) + _p12.get_slotnums(331) + _p12.get_slotnums(332);
            return _p14 = _p18.multiply(_p19);
        };
    },
    79353: (_p1a, _p1b, _p1c) => {
        'use strict';
        var _p1d = null;
        defineModule(_p1b);
        Object.defineProperty(_p1b, '__esModule', {
            'value': true
        }), _p1b.getZuiunSeriesEffect = void 0;
        var _p1e = _p1c(74496);
        _p1b.getZuiunSeriesEffect = function(_p1f) {
            var _p1g = null,
                _p1h = new _p1e.SlotItemEffectModel(),
                _p1i = false,
                _p1j = new _p1e.SlotItemEffectModel();
            if (662 == _p1f.ship_id ? (_p1h.houg += 2, _p1h.kaih += 1) : 663 == _p1f.ship_id || 668 == _p1f.ship_id || 501 == _p1f.ship_id || 506 == _p1f.ship_id ? (_p1h.houg += 2, _p1j.kaih += 1, _p1j.tyku += 1, _p1i = true) : 502 != _p1f.ship_id && 507 != _p1f.ship_id || (_p1h.houg += 1, _p1j.kaih += 1, _p1j.tyku += 1, _p1i = true), 0 == _p1i) return _p1h;
            var _p1k = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_p1l) {
                var _p1m = null;
                _p1k += _p1f.get_slotnums(_p1l);
            }), _p1h.add(_p1j.multiply(_p1k)), _p1h;
        };
    },
    89051: function(_p1n, _p1o, _p1p) {
        'use strict';
        var _p1q = null;
        var _p1r = this && this.__createBinding || (Object.create ? function(_p1s, _p1t, _p1u, _p1v) {
                var _p1w = null;
                void 0 === _p1v && (_p1v = _p1u);
                var _p1x = Object.getOwnPropertyDescriptor(_p1t, _p1u);
                _p1x && !('get' in _p1x ? !_p1t.__esModule : _p1x.writable || _p1x.configurable) || (_p1x = {
                    'enumerable': true,
                    'get': function() {
                        return _p1t[_p1u];
                    }
                }), Object.defineProperty(_p1s, _p1v, _p1x);
            } : function(_p1y, _p1z, _p20, _p21) {
                void 0 === _p21 && (_p21 = _p20), _p1y[_p21] = _p1z[_p20];
            }),
            _p22 = this && this.__exportStar || function(_p23, _p24) {
                var _p25 = null;
                for (var _p26 in _p23) 'default' === _p26 || Object.prototype.hasOwnProperty.call(_p24, _p26) || _p1r(_p24, _p23, _p26);
            };
        defineModule(_p1o);
        Object.defineProperty(_p1o, '__esModule', {
            'value': true
        }), _p22(_p1p(34165), _p1o), _p22(_p1p(81018), _p1o), _p22(_p1p(56716), _p1o), _p22(_p1p(17713), _p1o), _p22(_p1p(54518), _p1o), _p22(_p1p(66985), _p1o), _p22(_p1p(88102), _p1o), _p22(_p1p(66904), _p1o), _p22(_p1p(98137), _p1o), _p22(_p1p(69954), _p1o), _p22(_p1p(22218), _p1o), _p22(_p1p(88271), _p1o), _p22(_p1p(23035), _p1o), _p22(_p1p(2578), _p1o), _p22(_p1p(17143), _p1o), _p22(_p1p(16164), _p1o), _p22(_p1p(35023), _p1o), _p22(_p1p(44680), _p1o), _p22(_p1p(45749), _p1o), _p22(_p1p(37334), _p1o), _p22(_p1p(29180), _p1o), _p22(_p1p(68685), _p1o), _p22(_p1p(26078), _p1o), _p22(_p1p(20829), _p1o), _p22(_p1p(6880), _p1o), _p22(_p1p(17213), _p1o), _p22(_p1p(40176), _p1o), _p22(_p1p(32889), _p1o), _p22(_p1p(11285), _p1o), _p22(_p1p(96200), _p1o), _p22(_p1p(9115), _p1o), _p22(_p1p(37173), _p1o), _p22(_p1p(21713), _p1o), _p22(_p1p(59823), _p1o), _p22(_p1p(57440), _p1o), _p22(_p1p(29240), _p1o), _p22(_p1p(40885), _p1o), _p22(_p1p(19614), _p1o), _p22(_p1p(87220), _p1o), _p22(_p1p(81367), _p1o), _p22(_p1p(13052), _p1o), _p22(_p1p(94968), _p1o), _p22(_p1p(48658), _p1o), _p22(_p1p(1906), _p1o), _p22(_p1p(61887), _p1o), _p22(_p1p(47970), _p1o), _p22(_p1p(31797), _p1o), _p22(_p1p(45738), _p1o), _p22(_p1p(34718), _p1o), _p22(_p1p(69245), _p1o), _p22(_p1p(18478), _p1o), _p22(_p1p(2899), _p1o), _p22(_p1p(57120), _p1o), _p22(_p1p(74985), _p1o), _p22(_p1p(9234), _p1o), _p22(_p1p(30802), _p1o), _p22(_p1p(97002), _p1o), _p22(_p1p(16748), _p1o), _p22(_p1p(53618), _p1o), _p22(_p1p(72573), _p1o), _p22(_p1p(8955), _p1o), _p22(_p1p(98947), _p1o), _p22(_p1p(44726), _p1o), _p22(_p1p(93065), _p1o), _p22(_p1p(85767), _p1o), _p22(_p1p(38314), _p1o), _p22(_p1p(59747), _p1o), _p22(_p1p(40649), _p1o), _p22(_p1p(13533), _p1o), _p22(_p1p(12138), _p1o), _p22(_p1p(30042), _p1o), _p22(_p1p(33623), _p1o), _p22(_p1p(85630), _p1o), _p22(_p1p(88736), _p1o), _p22(_p1p(49341), _p1o), _p22(_p1p(74306), _p1o), _p22(_p1p(83898), _p1o), _p22(_p1p(71873), _p1o), _p22(_p1p(53122), _p1o), _p22(_p1p(51063), _p1o), _p22(_p1p(91491), _p1o), _p22(_p1p(85495), _p1o), _p22(_p1p(65365), _p1o), _p22(_p1p(98164), _p1o), _p22(_p1p(38114), _p1o), _p22(_p1p(21003), _p1o), _p22(_p1p(77010), _p1o), _p22(_p1p(39126), _p1o), _p22(_p1p(72176), _p1o), _p22(_p1p(33846), _p1o), _p22(_p1p(97157), _p1o), _p22(_p1p(63406), _p1o), _p22(_p1p(66373), _p1o), _p22(_p1p(19707), _p1o), _p22(_p1p(63978), _p1o), _p22(_p1p(92382), _p1o), _p22(_p1p(78415), _p1o), _p22(_p1p(23090), _p1o), _p22(_p1p(18776), _p1o), _p22(_p1p(39656), _p1o), _p22(_p1p(66039), _p1o), _p22(_p1p(64679), _p1o), _p22(_p1p(95953), _p1o), _p22(_p1p(86384), _p1o), _p22(_p1p(65345), _p1o), _p22(_p1p(46514), _p1o), _p22(_p1p(81976), _p1o), _p22(_p1p(89331), _p1o), _p22(_p1p(73973), _p1o), _p22(_p1p(21178), _p1o), _p22(_p1p(5079), _p1o), _p22(_p1p(95014), _p1o), _p22(_p1p(53099), _p1o), _p22(_p1p(76201), _p1o), _p22(_p1p(24931), _p1o), _p22(_p1p(60978), _p1o), _p22(_p1p(74312), _p1o), _p22(_p1p(54350), _p1o), _p22(_p1p(26262), _p1o), _p22(_p1p(45530), _p1o), _p22(_p1p(44053), _p1o), _p22(_p1p(65441), _p1o), _p22(_p1p(33258), _p1o), _p22(_p1p(92168), _p1o), _p22(_p1p(85975), _p1o), _p22(_p1p(98467), _p1o), _p22(_p1p(88348), _p1o), _p22(_p1p(21097), _p1o), _p22(_p1p(37273), _p1o), _p22(_p1p(72694), _p1o), _p22(_p1p(62067), _p1o), _p22(_p1p(87817), _p1o), _p22(_p1p(93526), _p1o), _p22(_p1p(33084), _p1o), _p22(_p1p(97831), _p1o), _p22(_p1p(45482), _p1o), _p22(_p1p(272), _p1o), _p22(_p1p(69377), _p1o), _p22(_p1p(31127), _p1o), _p22(_p1p(79353), _p1o), _p22(_p1p(17274), _p1o), _p22(_p1p(91302), _p1o), _p22(_p1p(82229), _p1o), _p22(_p1p(10325), _p1o), _p22(_p1p(351), _p1o), _p22(_p1p(4050), _p1o), _p22(_p1p(29805), _p1o), _p22(_p1p(58913), _p1o), _p22(_p1p(55421), _p1o), _p22(_p1p(87845), _p1o), _p22(_p1p(17562), _p1o), _p22(_p1p(78466), _p1o), _p22(_p1p(40061), _p1o), _p22(_p1p(9195), _p1o), _p22(_p1p(93297), _p1o), _p22(_p1p(15133), _p1o), _p22(_p1p(55747), _p1o), _p22(_p1p(33155), _p1o), _p22(_p1p(79086), _p1o), _p22(_p1p(2306), _p1o), _p22(_p1p(14386), _p1o), _p22(_p1p(80225), _p1o), _p22(_p1p(17732), _p1o), _p22(_p1p(47169), _p1o), _p22(_p1p(77670), _p1o), _p22(_p1p(79988), _p1o), _p22(_p1p(92253), _p1o), _p22(_p1p(74428), _p1o), _p22(_p1p(16498), _p1o), _p22(_p1p(2631), _p1o), _p22(_p1p(27177), _p1o), _p22(_p1p(94781), _p1o), _p22(_p1p(53908), _p1o), _p22(_p1p(79813), _p1o), _p22(_p1p(16088), _p1o), _p22(_p1p(93733), _p1o), _p22(_p1p(69939), _p1o), _p22(_p1p(33734), _p1o), _p22(_p1p(34432), _p1o), _p22(_p1p(97423), _p1o), _p22(_p1p(23551), _p1o), _p22(_p1p(99791), _p1o), _p22(_p1p(21403), _p1o), _p22(_p1p(6173), _p1o), _p22(_p1p(23934), _p1o), _p22(_p1p(53709), _p1o), _p22(_p1p(88838), _p1o), _p22(_p1p(99790), _p1o), _p22(_p1p(18387), _p1o), _p22(_p1p(70941), _p1o), _p22(_p1p(35025), _p1o), _p22(_p1p(2603), _p1o), _p22(_p1p(78707), _p1o), _p22(_p1p(89058), _p1o), _p22(_p1p(84372), _p1o), _p22(_p1p(96804), _p1o), _p22(_p1p(33896), _p1o), _p22(_p1p(11031), _p1o), _p22(_p1p(71383), _p1o), _p22(_p1p(55888), _p1o), _p22(_p1p(2258), _p1o), _p22(_p1p(38003), _p1o), _p22(_p1p(92174), _p1o), _p22(_p1p(43768), _p1o), _p22(_p1p(73254), _p1o), _p22(_p1p(55734), _p1o), _p22(_p1p(81254), _p1o), _p22(_p1p(65455), _p1o), _p22(_p1p(70362), _p1o), _p22(_p1p(61977), _p1o), _p22(_p1p(43607), _p1o), _p22(_p1p(68086), _p1o), _p22(_p1p(78173), _p1o), _p22(_p1p(22581), _p1o), _p22(_p1p(20418), _p1o), _p22(_p1p(93373), _p1o), _p22(_p1p(13053), _p1o), _p22(_p1p(47874), _p1o), _p22(_p1p(42788), _p1o), _p22(_p1p(57664), _p1o), _p22(_p1p(44990), _p1o), _p22(_p1p(17712), _p1o), _p22(_p1p(83957), _p1o), _p22(_p1p(78539), _p1o), _p22(_p1p(96282), _p1o), _p22(_p1p(49679), _p1o), _p22(_p1p(45927), _p1o), _p22(_p1p(90312), _p1o), _p22(_p1p(86856), _p1o), _p22(_p1p(78123), _p1o), _p22(_p1p(25765), _p1o), _p22(_p1p(29493), _p1o), _p22(_p1p(28221), _p1o), _p22(_p1p(14830), _p1o), _p22(_p1p(54047), _p1o), _p22(_p1p(76054), _p1o), _p22(_p1p(90725), _p1o), _p22(_p1p(93053), _p1o), _p22(_p1p(88792), _p1o), _p22(_p1p(33242), _p1o), _p22(_p1p(59415), _p1o), _p22(_p1p(3296), _p1o), _p22(_p1p(32666), _p1o);
    },
    82692: function(_p27, _p28, _p29) {
        'use strict';
        var _p2a = null;
        var _p2b = this && this.__createBinding || (Object.create ? function(_p2c, _p2d, _p2e, _p2f) {
                var _p2g = null;
                void 0 === _p2f && (_p2f = _p2e);
                var _p2h = Object.getOwnPropertyDescriptor(_p2d, _p2e);
                _p2h && !('get' in _p2h ? !_p2d.__esModule : _p2h.writable || _p2h.configurable) || (_p2h = {
                    'enumerable': true,
                    'get': function() {
                        return _p2d[_p2e];
                    }
                }), Object.defineProperty(_p2c, _p2f, _p2h);
            } : function(_p2i, _p2j, _p2k, _p2l) {
                void 0 === _p2l && (_p2l = _p2k), _p2i[_p2l] = _p2j[_p2k];
            }),
            _p2m = this && this.__setModuleDefault || (Object.create ? function(_p2n, _p2o) {
                var _p2p = null;
                Object.defineProperty(_p2n, 'default', {
                    'enumerable': true,
                    'value': _p2o
                });
            } : function(_p2q, _p2r) {
                var _p2s = null;
                _p2q.default = _p2r;
            }),
            _p2t = this && this.__importStar || function(_p2u) {
                var _p2v = null;
                if (_p2u && _p2u.__esModule) return _p2u;
                var _p2w = {};
                if (null != _p2u) {
                    for (var _p2x in _p2u) 'default' !== _p2x && Object.prototype.hasOwnProperty.call(_p2u, _p2x) && _p2b(_p2w, _p2u, _p2x);
                }
                return _p2m(_p2w, _p2u), _p2w;
            };
        defineModule(_p28);
        Object.defineProperty(_p28, '__esModule', {
            'value': true
        }), _p28.SlotItemEffectUtil = void 0;
        var _p2y, _p2z = _p29(73785),
            _p30 = _p2t(_p29(89051)),
            _p31 = _p29(74496);
        ! function(_p32) {
            var _p33 = null;
            _p32.getSlotitemEffect = function(_p34, _p35) {
                var _p36 = null;
                if (null == _p34 || null == _p35) return null;
                for (var _p37 = new _p2z.SlotItemEffectParamModel(_p34, _p35), _p38 = [{
                        'isExecute': Boolean(_p37.get_type3_nums(9)),
                        'execFunc': _p30.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_type3_nums(10)),
                        'execFunc': _p30.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_type3_nums(11)),
                        'execFunc': _p30.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_type3_nums(12)) || Boolean(_p37.get_type3_nums(13)),
                        'execFunc': _p30.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_p37.get_type3_nums(25)),
                        'execFunc': _p30.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_type3_nums(29)),
                        'execFunc': _p30.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_p37.get_type3_nums(42)),
                        'execFunc': _p30.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(3)) || Boolean(_p37.get_slotnums(122)),
                        'execFunc': _p30.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(5)),
                        'execFunc': _p30.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(12)),
                        'execFunc': _p30.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(15)),
                        'execFunc': _p30.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(18)) || Boolean(_p37.get_slotnums(52)),
                        'execFunc': _p30.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(19)),
                        'execFunc': _p30.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(24)) || Boolean(_p37.get_slotnums(57)) || Boolean(_p37.get_slotnums(111)),
                        'execFunc': _p30.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(26)) || Boolean(_p37.get_slotnums(62)) || Boolean(_p37.get_slotnums(79)) || Boolean(_p37.get_slotnums(80)) || Boolean(_p37.get_slotnums(81)) || Boolean(_p37.get_slotnums(207)) || Boolean(_p37.get_slotnums(208)),
                        'execFunc': _p30.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(35)),
                        'execFunc': _p30.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(39)) || Boolean(_p37.get_slotnums(40)) || Boolean(_p37.get_slotnums(49)) || Boolean(_p37.get_slotnums(131)),
                        'execFunc': _p30.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(30)) || Boolean(_p37.get_slotnums(410)),
                        'execFunc': _p30.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(44)) || Boolean(_p37.get_slotnums(45)) || Boolean(_p37.get_slotnums(287)) || Boolean(_p37.get_slotnums(288)),
                        'execFunc': _p30.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(46)) || Boolean(_p37.get_slotnums(47)) || Boolean(_p37.get_slotnums(149)) || Boolean(_p37.get_slotnums(132)) || Boolean(_p37.get_slotnums(438)),
                        'execFunc': _p30.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(47)) || Boolean(_p37.get_slotnums(438)),
                        'execFunc': _p30.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(50)),
                        'execFunc': _p30.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(58)),
                        'execFunc': _p30.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(59)),
                        'execFunc': _p30.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(60)) || Boolean(_p37.get_slotnums(154)) || Boolean(_p37.get_slotnums(219)),
                        'execFunc': _p30.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(61)),
                        'execFunc': _p30.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(61)),
                        'execFunc': _p30.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(63)),
                        'execFunc': _p30.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(66)) || Boolean(_p37.get_slotnums(220)),
                        'execFunc': _p30.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(67)),
                        'execFunc': _p30.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(69)),
                        'execFunc': _p30.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(70)),
                        'execFunc': _p30.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(78)),
                        'execFunc': _p30.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(79)) || Boolean(_p37.get_slotnums(81)),
                        'execFunc': _p30.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(82)),
                        'execFunc': _p30.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(84)),
                        'execFunc': _p30.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(85)),
                        'execFunc': _p30.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(87)),
                        'execFunc': _p30.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(90)),
                        'execFunc': _p30.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(93)),
                        'execFunc': _p30.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(94)),
                        'execFunc': _p30.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(99)),
                        'execFunc': _p30.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(100)),
                        'execFunc': _p30.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(104)),
                        'execFunc': _p30.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(106)) || Boolean(_p37.get_slotnums(450)),
                        'execFunc': _p30.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(115)),
                        'execFunc': _p30.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(118)) || Boolean(_p37.get_slotnums(521)),
                        'execFunc': _p30.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(119)),
                        'execFunc': _p30.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(121)),
                        'execFunc': _p30.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(122)),
                        'execFunc': _p30.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(128)) || Boolean(_p37.get_slotnums(281)),
                        'execFunc': _p30.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(129)),
                        'execFunc': _p30.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(132)),
                        'execFunc': _p30.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(136)),
                        'execFunc': _p30.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(139)),
                        'execFunc': _p30.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(143)),
                        'execFunc': _p30.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(144)),
                        'execFunc': _p30.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(147)) || Boolean(_p37.get_slotnums(393)) || Boolean(_p37.get_slotnums(394)),
                        'execFunc': _p30.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(149)),
                        'execFunc': _p30.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(165)) || Boolean(_p37.get_slotnums(216)),
                        'execFunc': _p30.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(171)),
                        'execFunc': _p30.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(174)),
                        'execFunc': _p30.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(179)),
                        'execFunc': _p30.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(184)),
                        'execFunc': _p30.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(188)),
                        'execFunc': _p30.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(189)),
                        'execFunc': _p30.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(194)),
                        'execFunc': _p30.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(195)),
                        'execFunc': _p30.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(204)),
                        'execFunc': _p30.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(217)),
                        'execFunc': _p30.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(220)),
                        'execFunc': _p30.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(227)),
                        'execFunc': _p30.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(228)),
                        'execFunc': _p30.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(229)),
                        'execFunc': _p30.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(234)),
                        'execFunc': _p30.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(235)),
                        'execFunc': _p30.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(237)) || Boolean(_p37.get_slotnums(322)) || Boolean(_p37.get_slotnums(323)) || Boolean(_p37.get_slotnums(490)),
                        'execFunc': _p30.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(237)),
                        'execFunc': _p30.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(238)) || Boolean(_p37.get_slotnums(239)),
                        'execFunc': _p30.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(242)),
                        'execFunc': _p30.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(243)),
                        'execFunc': _p30.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(244)),
                        'execFunc': _p30.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(245)) || Boolean(_p37.get_slotnums(246)) || Boolean(_p37.get_slotnums(468)),
                        'execFunc': _p30.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(247)),
                        'execFunc': _p30.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(266)),
                        'execFunc': _p30.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(266)),
                        'execFunc': _p30.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(267)) || Boolean(_p37.get_slotnums(366)),
                        'execFunc': _p30.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(267)) || Boolean(_p37.get_slotnums(366)),
                        'execFunc': _p30.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(268)),
                        'execFunc': _p30.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(271)),
                        'execFunc': _p30.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(275)),
                        'execFunc': _p30.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(277)),
                        'execFunc': _p30.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(278)),
                        'execFunc': _p30.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(279)),
                        'execFunc': _p30.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(282)),
                        'execFunc': _p30.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(283)),
                        'execFunc': _p30.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(285)),
                        'execFunc': _p30.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(286)),
                        'execFunc': _p30.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(286)),
                        'execFunc': _p30.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(286)),
                        'execFunc': _p30.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(287)),
                        'execFunc': _p30.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(288)),
                        'execFunc': _p30.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(289)),
                        'execFunc': _p30.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(290)),
                        'execFunc': _p30.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(291)),
                        'execFunc': _p30.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(292)),
                        'execFunc': _p30.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(293)),
                        'execFunc': _p30.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(294)),
                        'execFunc': _p30.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(295)),
                        'execFunc': _p30.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(296)),
                        'execFunc': _p30.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(297)),
                        'execFunc': _p30.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(298)) || Boolean(_p37.get_slotnums(299)) || Boolean(_p37.get_slotnums(300)),
                        'execFunc': _p30.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(301)),
                        'execFunc': _p30.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(302)),
                        'execFunc': _p30.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(303)),
                        'execFunc': _p30.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(304)),
                        'execFunc': _p30.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(305)) || Boolean(_p37.get_slotnums(306)),
                        'execFunc': _p30.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(307)),
                        'execFunc': _p30.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(308)),
                        'execFunc': _p30.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(310)) || Boolean(_p37.get_slotnums(518)),
                        'execFunc': _p30.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(313)),
                        'execFunc': _p30.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(314)),
                        'execFunc': _p30.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(315)),
                        'execFunc': _p30.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(316)),
                        'execFunc': _p30.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(317)),
                        'execFunc': _p30.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(318)),
                        'execFunc': _p30.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(319)),
                        'execFunc': _p30.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(320)),
                        'execFunc': _p30.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(322)),
                        'execFunc': _p30.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(323)),
                        'execFunc': _p30.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(324)) || Boolean(_p37.get_slotnums(325)),
                        'execFunc': _p30.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(326)),
                        'execFunc': _p30.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(327)),
                        'execFunc': _p30.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(328)),
                        'execFunc': _p30.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(329)),
                        'execFunc': _p30.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(330)) || Boolean(_p37.get_slotnums(331)) || Boolean(_p37.get_slotnums(332)),
                        'execFunc': _p30.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(335)),
                        'execFunc': _p30.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(336)),
                        'execFunc': _p30.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(337)),
                        'execFunc': _p30.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(338)),
                        'execFunc': _p30.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(339)),
                        'execFunc': _p30.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(340)),
                        'execFunc': _p30.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(341)),
                        'execFunc': _p30.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(342)),
                        'execFunc': _p30.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(343)),
                        'execFunc': _p30.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(344)),
                        'execFunc': _p30.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(345)),
                        'execFunc': _p30.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(346)),
                        'execFunc': _p30.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(347)),
                        'execFunc': _p30.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(356)) || Boolean(_p37.get_slotnums(357)),
                        'execFunc': _p30.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(358)),
                        'execFunc': _p30.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(359)),
                        'execFunc': _p30.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(360)) || Boolean(_p37.get_slotnums(361)),
                        'execFunc': _p30.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(362)) || Boolean(_p37.get_slotnums(363)),
                        'execFunc': _p30.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(364)),
                        'execFunc': _p30.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(365)),
                        'execFunc': _p30.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(367)),
                        'execFunc': _p30.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(368)),
                        'execFunc': _p30.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(369)),
                        'execFunc': _p30.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(370)),
                        'execFunc': _p30.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(371)),
                        'execFunc': _p30.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(372)),
                        'execFunc': _p30.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(373)),
                        'execFunc': _p30.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(374)),
                        'execFunc': _p30.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(375)),
                        'execFunc': _p30.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(376)),
                        'execFunc': _p30.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(377)),
                        'execFunc': _p30.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(378)),
                        'execFunc': _p30.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(379)),
                        'execFunc': _p30.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(380)),
                        'execFunc': _p30.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(381)),
                        'execFunc': _p30.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(382)) || Boolean(_p37.get_slotnums(509)),
                        'execFunc': _p30.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(383)),
                        'execFunc': _p30.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(384)),
                        'execFunc': _p30.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(385)),
                        'execFunc': _p30.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(386)),
                        'execFunc': _p30.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(387)),
                        'execFunc': _p30.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(389)),
                        'execFunc': _p30.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(390)),
                        'execFunc': _p30.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(391)),
                        'execFunc': _p30.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(392)),
                        'execFunc': _p30.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(397)),
                        'execFunc': _p30.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(398)),
                        'execFunc': _p30.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(399)),
                        'execFunc': _p30.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(400)),
                        'execFunc': _p30.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(407)),
                        'execFunc': _p30.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(408)),
                        'execFunc': _p30.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(409)),
                        'execFunc': _p30.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(411)),
                        'execFunc': _p30.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(412)),
                        'execFunc': _p30.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(413)),
                        'execFunc': _p30.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(414)),
                        'execFunc': _p30.getSlot414PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(415)),
                        'execFunc': _p30.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(419)),
                        'execFunc': _p30.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(420)),
                        'execFunc': _p30.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(421)),
                        'execFunc': _p30.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(422)),
                        'execFunc': _p30.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(423)),
                        'execFunc': _p30.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(424)),
                        'execFunc': _p30.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(425)),
                        'execFunc': _p30.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(426)) || Boolean(_p37.get_slotnums(427)) || Boolean(_p37.get_slotnums(428)) || Boolean(_p37.get_slotnums(429)),
                        'execFunc': _p30.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(430)),
                        'execFunc': _p30.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(434)) || Boolean(_p37.get_slotnums(435)),
                        'execFunc': _p30.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(437)),
                        'execFunc': _p30.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(438)),
                        'execFunc': _p30.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(439)),
                        'execFunc': _p30.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(440)) || Boolean(_p37.get_slotnums(441)),
                        'execFunc': _p30.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(442)) || Boolean(_p37.get_slotnums(443)),
                        'execFunc': _p30.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(447)),
                        'execFunc': _p30.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(450)),
                        'execFunc': _p30.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(451)),
                        'execFunc': _p30.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(455)),
                        'execFunc': _p30.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(456)),
                        'execFunc': _p30.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(457)) || Boolean(_p37.get_slotnums(461)),
                        'execFunc': _p30.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(458)),
                        'execFunc': _p30.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(463)),
                        'execFunc': _p30.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(464)),
                        'execFunc': _p30.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(465)),
                        'execFunc': _p30.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(466)),
                        'execFunc': _p30.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(467)),
                        'execFunc': _p30.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(470)),
                        'execFunc': _p30.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(471)),
                        'execFunc': _p30.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(472)),
                        'execFunc': _p30.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(473)),
                        'execFunc': _p30.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(474)),
                        'execFunc': _p30.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(478)),
                        'execFunc': _p30.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(483)),
                        'execFunc': _p30.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(485)),
                        'execFunc': _p30.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(486)),
                        'execFunc': _p30.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(487)),
                        'execFunc': _p30.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(488)),
                        'execFunc': _p30.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(489)) || Boolean(_p37.get_slotnums(491)),
                        'execFunc': _p30.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(500)) || Boolean(_p37.get_slotnums(501)),
                        'execFunc': _p30.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(502)),
                        'execFunc': _p30.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(503)),
                        'execFunc': _p30.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(505)),
                        'execFunc': _p30.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(506)),
                        'execFunc': _p30.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(507)) || Boolean(_p37.get_slotnums(508)),
                        'execFunc': _p30.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(510)),
                        'execFunc': _p30.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(511)) || Boolean(_p37.get_slotnums(512)),
                        'execFunc': _p30.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(517)),
                        'execFunc': _p30.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(518)),
                        'execFunc': _p30.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(519)),
                        'execFunc': _p30.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(520)),
                        'execFunc': _p30.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(521)),
                        'execFunc': _p30.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(522)) || Boolean(_p37.get_slotnums(523)),
                        'execFunc': _p30.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(524)),
                        'execFunc': _p30.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_p37.get_slotnums(525)) || Boolean(_p37.get_slotnums(526)),
                        'execFunc': _p30.getSlotTokuYonPersonalEffect
                    }], _p39 = new _p31.SlotItemEffectModel(), _p3a = 0, _p3b = _p38; _p3a < _p3b.length; _p3a++) {
                    var _p3c = _p3b[_p3a];
                    if (_p3c.isExecute) {
                        var _p3d = _p3c.execFunc(_p37);
                        0, _p39.add(_p3d);
                    }
                }
                return _p39;
            };
        }(_p2y || (_p28.SlotItemEffectUtil = _p2y = {}));
    },
}
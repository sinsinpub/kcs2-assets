{
    72170: (_1nq, _1nr) => {
        'use strict';
        var _1ns = null;
        defineModule(_1nr);
        Object.defineProperty(_1nr, '__esModule', {
            'value': true
        }), _1nr.SHIP_COUNTRY = void 0, _1nr.SHIP_COUNTRY = {
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
    73785: function(_lbn, _lbo, _lbp) {
        'use strict';
        var _lbq = null;
        var _lbr = this && this.__importDefault || function(_lbs) {
            var _lbt = null;
            return _lbs && _lbs.__esModule ? _lbs : {
                'default': _lbs
            };
        };
        defineModule(_lbo);
        Object.defineProperty(_lbo, '__esModule', {
            'value': true
        }), _lbo.SlotItemEffectParamModel = void 0;
        var _lbu = _lbr(_lbp(18622)),
            _lbv = _lbp(72170),
            _lbw = (function() {
                var _lbx = null;

                function _lby(_lbz, _lc0) {
                    var _lc1 = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _lc2 = {}, _lc3 = {}, _lc4 = {}, _lc5 = 0, _lc6 = _lc0; _lc5 < _lc6.length; _lc5++) {
                        var _lc7 = _lc6[_lc5];
                        null != _lc7 && (null == _lc2[_lc7.mstID] && (_lc2[_lc7.mstID] = new Array()), _lc2[_lc7.mstID].push(_lc7), null == _lc3[_lc7.mstID] ? _lc3[_lc7.mstID] = 1 : _lc3[_lc7.mstID] += 1, null == _lc4[_lc7.equipType] ? _lc4[_lc7.equipType] = 1 : _lc4[_lc7.equipType] += 1);
                    }
                    this._have_slots_dict = _lc2, this._have_slotnums_dict = _lc3, this._have_type3nums_dict = _lc4, this._ship_id = _lbz.mstID, this._yomi = _lbz.yomi, this._stype = _lbz.shipTypeID, this._ctype = _lbz.getClassType();
                }
                return Object.defineProperty(_lby.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _lc8 = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lby.prototype, 'ship_id', {
                    'get': function() {
                        var _lc9 = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lby.prototype, 'yomi', {
                    'get': function() {
                        var _lca = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lby.prototype, 'stype', {
                    'get': function() {
                        var _lcb = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lby.prototype, 'ctype', {
                    'get': function() {
                        var _lcc = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _lby.prototype.get_slotnums = function(_lcd) {
                    var _lce = null;
                    return null == this._have_slotnums_dict[_lcd] ? 0 : this._have_slotnums_dict[_lcd];
                }, _lby.prototype.get_type3_nums = function(_lcf) {
                    var _lcg = null;
                    return null == this._have_type3nums_dict[_lcf] ? 0 : this._have_type3nums_dict[_lcf];
                }, _lby.prototype.have_slot_ids = function() {
                    var _lch = null;
                    return Object.keys(this._have_slots_dict);
                }, _lby.prototype.get_each_level_nums = function(_lci) {
                    var _lcj = null,
                        _lck = this._have_slots_dict[_lci],
                        _lcl = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _lck)
                        for (var _lcm = 0, _lcn = _lck; _lcm < _lcn.length; _lcm++) {
                            _lcl[_lcn[_lcm].level]++;
                        }
                    return _lcl;
                }, _lby.prototype.get_each_level_over_nums = function(_lco) {
                    var _lcp = null;
                    for (var _lcq = this, _lcr = [], _lcs = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _lct = function(_lcu) {
                            var _lcv = null;
                            if (_lcr[_lcu] = Array.apply(null, new Array(_lcw.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _lcw.have_slots_dict[_lcu]) return 'continue';
                            _lcw.get_each_level_nums(_lcu).forEach(function(_lcx, _lcy) {
                                var _lcz = null;
                                for (var _ld0 = 1; _ld0 <= _lcq.SLOT_LEVEL_MAX; _ld0++) _lcy >= _ld0 && (_lcr[_lcu][_ld0] += _lcx, _lcs[_ld0] += _lcx);
                            });
                        }, _lcw = this, _ld1 = 0, _ld2 = _lco; _ld1 < _ld2.length; _ld1++) {
                        _lct(_ld2[_ld1]);
                    }
                    return {
                        'slot': _lcr,
                        'total': _lcs
                    };
                }, _lby.prototype.get_have_rader_nums = function() {
                    var _ld3 = null;
                    for (var _ld4 = 0, _ld5 = 0, _ld6 = 0, _ld7 = this.have_slot_ids(); _ld6 < _ld7.length; _ld6++) {
                        var _ld8 = _ld7[_ld6],
                            _ld9 = _lbu.default.model.slot.getMst(_ld8),
                            _lda = _ld9.equipType;
                        12 != _lda && 13 != _lda || (_ld9.sakuteki >= 5 && (_ld4 += this.get_slotnums(parseInt(_ld8))), _ld9.taiku >= 2 && (_ld5 += this.get_slotnums(parseInt(_ld8))));
                    }
                    return {
                        'water_rader': _ld4,
                        'air_rader': _ld5
                    };
                }, _lby.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _lby.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _lby.prototype.getCountryName = function() {
                    var _ldb = null;
                    return null == _lbv.SHIP_COUNTRY[this._ctype] ? '' : _lbv.SHIP_COUNTRY[this._ctype];
                }, _lby.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _lby.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _lby;
            }());
        _lbo.SlotItemEffectParamModel = _lbw;
    },
    16718: (_loi, _loj, _lok) => {
        'use strict';
        var _lol = null;
        defineModule(_loj);
        Object.defineProperty(_loj, '__esModule', {
            'value': true
        }), _loj.TaskGetSlotItemEffectParams = void 0;
        var _lom = _lok(74496),
            _lon = _lok(82692),
            _loo = (function() {
                var _lop = null;

                function _loq(_lor, _los, _lot) {
                    var _lou = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lor;
                    var _lov = _lor.getSlotitems();
                    _lov.push(_lor.getSlotitemEx());
                    var _low = _lov.map(function(_lox) {
                        var _loy = null;
                        return null == _lox || null != _los && _lox.memID == _los.memID ? null : _lox;
                    });
                    this._removeSlots = _low;
                    var _loz = _low.map(function(_lp0) {
                        return _lp0;
                    });
                    _loz.push(_lot), this._toSlots = _loz;
                }
                return _loq.prototype.start = function() {
                    var _lp1 = null,
                        _lp2 = this._ship.getSlotitems();
                    _lp2.push(this._ship.getSlotitemEx());
                    var _lp3 = _lon.SlotItemEffectUtil.getSlotitemEffect(this._ship, _lp2),
                        _lp4 = _lon.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lp5 = _lon.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_lp3, _lp4),
                        'toSlotItemEffect': this._subEffectModels(_lp5, _lp4)
                    };
                }, _loq.prototype._subEffectModels = function(_lp6, _lp7) {
                    var _lp8 = null,
                        _lp9 = new _lom.SlotItemEffectModel();
                    return _lp9.houg = _lp6.houg - _lp7.houg, _lp9.raig = _lp6.raig - _lp7.raig, _lp9.tyku = _lp6.tyku - _lp7.tyku, _lp9.souk = _lp6.souk - _lp7.souk, _lp9.kaih = _lp6.kaih - _lp7.kaih, _lp9.tais = _lp6.tais - _lp7.tais, _lp9.saku = _lp6.saku - _lp7.saku, _lp9.baku = _lp6.baku - _lp7.baku, _lp9.houm = _lp6.houm - _lp7.houm, _lp9.leng = _lp6.leng - _lp7.leng, _lp9;
                }, _loq;
            }());
        _loj.TaskGetSlotItemEffectParams = _loo;
    },
    69377: function(_mcz, _md0, _md1) {
        'use strict';
        var _md2 = null;
        var _md3 = this && this.__importDefault || function(_md4) {
            var _md5 = null;
            return _md4 && _md4.__esModule ? _md4 : {
                'default': _md4
            };
        };
        defineModule(_md0);
        Object.defineProperty(_md0, '__esModule', {
            'value': true
        }), _md0.get25mmMachinegunEffect = void 0;
        var _md6 = _md1(74496),
            _md7 = _md3(_md1(18622));
        _md0.get25mmMachinegunEffect = function(_md8) {
            var _md9 = null,
                _mda = new _md6.SlotItemEffectModel(),
                _mdb = false,
                _mdc = new _md6.SlotItemEffectModel(),
                _mdd = 0,
                _mde = new _md6.SlotItemEffectModel(),
                _mdf = {},
                _mdg = 0;
            if (662 == _md8.ship_id || 663 == _md8.ship_id ? (_mdc.tyku += 2, _mdc.kaih += 1, _mdb = true) : 668 == _md8.ship_id ? (_mdc.tyku += 3, _mdc.kaih += 2, _mdb = true) : 979 == _md8.ship_id && (_mdc.tyku += 2, _mdc.kaih += 3, _mdb = true, _mde.kaih += 2, _mdf[49] = _mde, _mdg = 1), 56 == _md8.ctype && (_mdc.houg += 1, _mdc.tyku += 2, _mdc.kaih += 2, _mdb = true, _mdd = 1), Object.keys(_mdf).forEach(function(_mdh) {
                    var _mdi = null,
                        _mdj = _mdf[parseInt(_mdh)],
                        _mdk = _md8.get_slotnums(parseInt(_mdh));
                    _mda.add(_mdj.multiply(_mdk));
                }), _mdg > 0) {
                var _mdl = _md8.get_each_level_over_nums([49, 39, 40, 131]),
                    _mdm = _mdl.slot[49],
                    _mdn = _mdl.slot[39],
                    _mdo = _mdl.slot[40],
                    _mdp = _mdl.slot[131];
                1 == _mdg && (_mdm[6] >= 1 && (_mda.houm += 1 * _mdm[6]), _mdm[7] >= 1 && (_mda.tyku += 1 * _mdm[7]), _mdm[8] >= 1 && (_mda.kaih += 1 * _mdm[8]), _mdm[9] >= 1 && (_mda.tyku += 1 * _mdm[9]), _mdm[10] >= 1 && (_mda.houg += 1 * _mdm[10]), _mdn[8] >= 1 && (_mda.kaih += 1 * _mdn[8]), _mdn[9] >= 1 && (_mda.tyku += 2 * _mdn[9]), _mdn[10] >= 1 && (_mda.houg += 1 * _mdn[10]), _mdo[9] >= 1 && (_mda.tyku += 2 * _mdo[9]), _mdo[10] >= 1 && (_mda.houg += 1 * _mdo[10]), _mdp[10] >= 1 && (_mda.tyku += 2 * _mdp[10]));
            }
            if (0 == _mdb) return _mda;
            var _mdq = _md8.get_slotnums(39) + _md8.get_slotnums(40) + _md8.get_slotnums(49) + _md8.get_slotnums(131);
            if (_mda.add(_mdc.multiply(_mdq)), 0 == _mdd) return _mda;
            for (var _mdr = 0, _mds = 0, _mdt = _md8.have_slot_ids(); _mds < _mdt.length; _mds++) {
                var _mdu = _mdt[_mds],
                    _mdv = _md7.default.model.slot.getMst(_mdu),
                    _mdw = _mdv.equipType;
                12 != _mdw && 13 != _mdw || (_mdv.sakuteki >= 5 && _md8.get_slotnums(parseInt(_mdu)), _mdv.taiku >= 2 && (_mdr += _md8.get_slotnums(parseInt(_mdu))));
            }
            return _mdr >= 1 && 1 == _mdd && (_mda.tyku += 2, _mda.kaih += 2), _mda;
        };
    },
    77670: function(_mdx, _mdy, _mdz) {
        'use strict';
        var _me0 = null;
        var _me1 = this && this.__importDefault || function(_me2) {
            var _me3 = null;
            return _me2 && _me2.__esModule ? _me2 : {
                'default': _me2
            };
        };
        defineModule(_mdy);
        Object.defineProperty(_mdy, '__esModule', {
            'value': true
        }), _mdy.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _me4 = _mdz(74496),
            _me5 = _me1(_mdz(18622));
        _mdy.get8cmAntiAircraftGunPersonalEffect = function(_me6) {
            var _me7 = null,
                _me8 = new _me4.SlotItemEffectModel(),
                _me9 = false,
                _mea = new _me4.SlotItemEffectModel(),
                _meb = 0;
            if (501 != _me6.ship_id && 506 != _me6.ship_id && 502 != _me6.ship_id && 507 != _me6.ship_id || (_mea.tyku += 2, _mea.kaih += 1, _me9 = true, _meb = 1), 501 != _me6.ship_id && 506 != _me6.ship_id || (_mea.houg += 1, _mea.tyku += 2, _mea.kaih += 2, _me9 = true, _meb = 1), 0 == _me9) return _me8;
            var _mec = _me6.get_slotnums(66) + _me6.get_slotnums(220);
            _me8.add(_mea.multiply(_mec));
            for (var _med = 0, _mee = 0, _mef = _me6.have_slot_ids(); _mee < _mef.length; _mee++) {
                var _meg = _mef[_mee],
                    _meh = _me5.default.model.slot.getMst(_meg),
                    _mei = _meh.equipType;
                12 != _mei && 13 != _mei || (_meh.sakuteki >= 5 && _me6.get_slotnums(parseInt(_meg)), _meh.taiku >= 2 && (_med += _me6.get_slotnums(parseInt(_meg))));
            }
            return 0 == _meb || _med >= 1 && (_me8.tyku += 1, _me8.kaih += 2), _me8;
        };
    },
    34165: (_mej, _mek, _mel) => {
        'use strict';
        var _mem = null;
        defineModule(_mek);
        Object.defineProperty(_mek, '__esModule', {
            'value': true
        }), _mek.getCamouflageSlotPersonalEffect = void 0;
        var _men = _mel(74496);
        _mek.getCamouflageSlotPersonalEffect = function(_meo) {
            var _mep = null,
                _meq = new _men.SlotItemEffectModel();
            return 'きそ' != _meo.yomi && 'たま' != _meo.yomi || (_meq.kaih = 7, _meq.souk = 2), _meq;
        };
    },
    31127: (_mer, _mes, _met) => {
        'use strict';
        var _meu = null;
        defineModule(_mes);
        Object.defineProperty(_mes, '__esModule', {
            'value': true
        }), _mes.getHighZuiunSeriesEffect = void 0;
        var _mev = _met(74496);
        _mes.getHighZuiunSeriesEffect = function(_mew) {
            var _mex = null,
                _mey = new _mev.SlotItemEffectModel(),
                _mez = false,
                _mf0 = new _mev.SlotItemEffectModel();
            if (662 == _mew.ship_id ? (_mey.houg += 3, _mey.kaih += 1) : 663 == _mew.ship_id || 668 == _mew.ship_id || 501 == _mew.ship_id || 506 == _mew.ship_id || 553 == _mew.ship_id || 554 == _mew.ship_id ? (_mf0.houg += 3, _mf0.kaih += 2, _mf0.tyku += 1, _mez = true) : 502 != _mew.ship_id && 507 != _mew.ship_id || (_mf0.houg += 2, _mf0.kaih += 2, _mf0.tyku += 1, _mez = true), 0 == _mez) return _mey;
            var _mf1 = 0;
            return [237, 322, 323, 490].forEach(function(_mf2) {
                var _mf3 = null;
                _mf1 += _mew.get_slotnums(_mf2);
            }), _mey.add(_mf0.multiply(_mf1)), _mey;
        };
    },
    81018: function(_mf4, _mf5, _mf6) {
        'use strict';
        var _mf7 = null;
        var _mf8 = this && this.__importDefault || function(_mf9) {
            var _mfa = null;
            return _mf9 && _mf9.__esModule ? _mf9 : {
                'default': _mf9
            };
        };
        defineModule(_mf5);
        Object.defineProperty(_mf5, '__esModule', {
            'value': true
        }), _mf5.getRaderPrivateEffect = void 0;
        var _mfb = _mf6(74496),
            _mfc = _mf8(_mf6(18622));
        _mf5.getRaderPrivateEffect = function(_mfd) {
            var _mfe = null,
                _mff = new _mfb.SlotItemEffectModel(),
                _mfg = 0,
                _mfh = 0;
            if (569 == _mfd.ship_id || 648 == _mfd.ship_id || 961 == _mfd.ship_id || 951 == _mfd.ship_id) _mfg = 1;
            else {
                if (955 != _mfd.ship_id && 960 != _mfd.ship_id) return _mff;
                _mfg = 2, _mfh = 1;
            }
            for (var _mfi = 0, _mfj = 0, _mfk = _mfd.have_slot_ids(); _mfj < _mfk.length; _mfj++) {
                var _mfl = _mfk[_mfj],
                    _mfm = _mfc.default.model.slot.getMst(_mfl),
                    _mfn = _mfm.equipType;
                12 != _mfn && 13 != _mfn || (_mfm.sakuteki >= 5 && _mfd.get_slotnums(parseInt(_mfl)), _mfm.taiku >= 2 && (_mfi += _mfd.get_slotnums(parseInt(_mfl))));
            }
            if (_mfi > 0 && (1 == _mfg ? (_mff.houg += 1, _mff.kaih += 3, _mff.tyku += 2) : 2 == _mfg && (_mff.tyku += 2, _mff.kaih += 1)), 0 == _mfh) return _mff;
            for (var _mfo = [], _mfp = function(_mfq) {
                    var _mfr = null;
                    if (null == _mfd.have_slots_dict[_mfq]) return 'continue';
                    var _mfs = _mfd.get_each_level_nums(_mfq);
                    null == _mfo[_mfq] && (_mfo[_mfq] = []), _mfs.forEach(function(_mft, _mfu) {
                        var _mfv = null;
                        for (var _mfw = 1; _mfw <= _mfd.SLOT_LEVEL_MAX; _mfw++) null == _mfo[_mfq][_mfw] && (_mfo[_mfq][_mfw] = 0), _mfu >= _mfw && (_mfo[_mfq][_mfw] += _mft);
                    });
                }, _mfx = 0, _mfy = [450]; _mfx < _mfy.length; _mfx++) {
                _mfp(_mfy[_mfx]);
            }
            var _mfz = null != _mfo[450] ? _mfo[450][4] : 0;
            return 1 == _mfh && _mfz > 0 && (_mff.houg += 1, _mff.houm += 1, _mff.tyku += 1, _mff.kaih += 2), _mff;
        };
    },
    56716: (_mg0, _mg1, _mg2) => {
        'use strict';
        var _mg3 = null;
        defineModule(_mg1);
        Object.defineProperty(_mg1, '__esModule', {
            'value': true
        }), _mg1.getSearchLightEffect = void 0;
        var _mg4 = _mg2(74496);
        _mg1.getSearchLightEffect = function(_mg5) {
            var _mg6 = null,
                _mg7 = new _mg4.SlotItemEffectModel(),
                _mg8 = _mg5.get_type3_nums(29);
            return 'ひえい' == _mg5.yomi || 'きりしま' == _mg5.yomi || 'ちょうかい' == _mg5.yomi || 'じんつう' == _mg5.yomi || 'あかつき' == _mg5.yomi ? (_mg7.houg += 4, _mg7.kaih -= 1) : 'あきぐも' == _mg5.yomi ? _mg7.houg = _mg7.houg + 2 * _mg8 : 'ゆきかぜ' == _mg5.yomi && (_mg7.houg = _mg7.houg + _mg8, _mg7.tyku = _mg7.tyku + _mg8), 662 != _mg5.ship_id && 663 != _mg5.ship_id && 668 != _mg5.ship_id || (_mg7.raig += 2, _mg7.houg += 4), 'じんつう' == _mg5.yomi && (_mg7.raig += 8, _mg7.houg += 4), _mg7;
        };
    },
    17713: (_mg9, _mga, _mgb) => {
        'use strict';
        var _mgc = null;
        defineModule(_mga);
        Object.defineProperty(_mga, '__esModule', {
            'value': true
        }), _mga.getSearchLightLargeEffect = void 0;
        var _mgd = _mgb(74496);
        _mga.getSearchLightLargeEffect = function(_mge) {
            var _mgf = null,
                _mgg = new _mgd.SlotItemEffectModel();
            'ひえい' == _mge.yomi || 'きりしま' == _mge.yomi ? (_mgg.houg += 6, _mgg.kaih -= 2) : 'やまと' != _mge.yomi && 'むさし' != _mge.yomi || (_mgg.houg += 4, _mgg.kaih -= 1);
            var _mgh = _mge.get_slotnums(174);
            return 592 == _mge.ship_id && (_mgg.houg += 3, _mgg.raig += 3, _mgh > 0 && (_mgg.raig += 5)), _mgg;
        };
    },
    17213: (_mgi, _mgj, _mgk) => {
        'use strict';
        var _mgl = null;
        defineModule(_mgj);
        Object.defineProperty(_mgj, '__esModule', {
            'value': true
        }), _mgj.getSlot100PersonalEffect = void 0;
        var _mgm = _mgk(74496);
        _mgj.getSlot100PersonalEffect = function(_mgn) {
            var _mgo = null,
                _mgp = new _mgm.SlotItemEffectModel(),
                _mgq = new _mgm.SlotItemEffectModel();
            if (553 == _mgn.ship_id) _mgq.houg = 4;
            else {
                if (554 != _mgn.ship_id) return 196 == _mgn.ship_id ? (_mgp.houg = 3, _mgp) : 197 == _mgn.ship_id ? (_mgp.houg = 6, _mgp) : _mgp;
                _mgq.houg = 4;
            }
            var _mgr = _mgn.get_slotnums(100);
            return _mgp = _mgq.multiply(_mgr);
        };
    },
    40176: (_mgs, _mgt, _mgu) => {
        'use strict';
        var _mgv = null;
        defineModule(_mgt);
        Object.defineProperty(_mgt, '__esModule', {
            'value': true
        }), _mgt.getSlot104PersonalEffect = void 0;
        var _mgw = _mgu(74496);
        _mgt.getSlot104PersonalEffect = function(_mgx) {
            var _mgy = null,
                _mgz = new _mgw.SlotItemEffectModel(),
                _mh0 = new _mgw.SlotItemEffectModel();
            if (149 == _mgx.ship_id || 591 == _mgx.ship_id) _mh0.houg = 2;
            else {
                if (150 == _mgx.ship_id || 592 == _mgx.ship_id) _mh0.houg = 1;
                else {
                    if (152 == _mgx.ship_id) _mh0.houg = 1;
                    else {
                        if (151 != _mgx.ship_id && 593 != _mgx.ship_id && 954 != _mgx.ship_id) return _mgz;
                        _mh0.houg = 2, _mh0.tyku = 1, _mh0.kaih = 2;
                    }
                }
            }
            var _mh1 = _mgx.get_slotnums(104);
            return _mgz = _mh0.multiply(_mh1);
        };
    },
    32889: (_mh2, _mh3, _mh4) => {
        'use strict';
        var _mh5 = null;
        defineModule(_mh3);
        Object.defineProperty(_mh3, '__esModule', {
            'value': true
        }), _mh3.getSlot106PersonalEffect = void 0;
        var _mh6 = _mh4(74496);
        _mh3.getSlot106PersonalEffect = function(_mh7) {
            var _mh8 = null,
                _mh9 = new _mh6.SlotItemEffectModel(),
                _mha = new _mh6.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mh7.ship_id) >= 0 ? (_mha.houg += 1, _mha.tyku += 2, _mha.souk += 1, _mha.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mh7.yomi) >= 0 ? (_mha.tyku += 1, _mha.souk += 1, _mha.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mh7.yomi) >= 0 && (_mha.tyku += 2, _mha.souk += 1, _mha.kaih += 2, 663 != _mh7.ship_id && 668 != _mh7.ship_id || (_mh9.houg += 1, _mh9.tyku += 1, _mh9.souk += 1, _mh9.kaih += 1), 668 == _mh7.ship_id && (_mh9.tyku += 1, _mh9.kaih += 1)), !_mha.exists()) return _mh9;
            var _mhb = _mh7.get_slotnums(106) + _mh7.get_slotnums(450);
            return _mh9.add(_mha.multiply(_mhb)), _mh9;
        };
    },
    15133: (_mhc, _mhd, _mhe) => {
        'use strict';
        var _mhf = null;
        defineModule(_mhd);
        Object.defineProperty(_mhd, '__esModule', {
            'value': true
        }), _mhd.getSlot115PersonalEffect = void 0;
        var _mhg = _mhe(74496);
        _mhd.getSlot115PersonalEffect = function(_mhh) {
            var _mhi = null,
                _mhj = new _mhg.SlotItemEffectModel(),
                _mhk = false,
                _mhl = new _mhg.SlotItemEffectModel(),
                _mhm = 0;
            if (55 != _mhh.ctype && 47 != _mhh.ctype || (_mhl.houg += 2, _mhl.saku += 2, _mhl.kaih += 1, _mhk = true, _mhm = 1), 0 == _mhk) return _mhj;
            var _mhn = _mhh.get_slotnums(115);
            if (_mhj.add(_mhl.multiply(_mhn)), 0 == _mhm) return _mhj;
            var _mho = _mhh.get_each_level_nums(115)[10];
            return 1 == _mhm && (_mhj.houg += 1 * _mho, _mhj.kaih += 1 * _mho), _mhj;
        };
    },
    55747: (_mhp, _mhq, _mhr) => {
        'use strict';
        var _mhs = null;
        defineModule(_mhq);
        Object.defineProperty(_mhq, '__esModule', {
            'value': true
        }), _mhq.getSlot118PersonalEffect = void 0;
        var _mht = _mhr(74496);
        _mhq.getSlot118PersonalEffect = function(_mhu) {
            var _mhv = null,
                _mhw = new _mht.SlotItemEffectModel(),
                _mhx = false,
                _mhy = new _mht.SlotItemEffectModel(),
                _mhz = 0;
            if (52 == _mhu.ctype && (_mhy.houg += 1, _mhy.saku += 2, _mhy.kaih += 2, _mhz = 1, _mhx = true), 507 == _mhu.ship_id && (_mhy.houg += 3, _mhy.saku += 2, _mhy.kaih += 1, _mhz = 2, _mhx = true), 0 == _mhx) return _mhw;
            var _mi0 = _mhu.get_slotnums(118) + _mhu.get_slotnums(521);
            if (_mhw.add(_mhy.multiply(_mi0)), 0 == _mhu.get_slotnums(118)) return _mhw;
            if (0 == _mhz) return _mhw;
            var _mi1 = _mhu.get_each_level_nums(118),
                _mi2 = 0,
                _mi3 = 0,
                _mi4 = 0,
                _mi5 = _mi1[10];
            return _mi1.forEach(function(_mi6, _mi7) {
                _mi7 >= 2 && (_mi2 += _mi6), _mi7 >= 5 && (_mi3 += _mi6), _mi7 >= 7 && (_mi4 += _mi6);
            }), 1 == _mhz ? (_mhw.houg += 2 * _mi5, _mhw.saku += 1 * _mi5) : 2 == _mhz && (_mhw.houm += 1 * _mi2, _mhw.kaih += 1 * _mi3, _mhw.houg += 1 * _mi4, _mhw.houg += 1 * _mi5, _mhw.raig += 1 * _mi5, _mhw.tyku += 1 * _mi5, _mhw.saku += 1 * _mi5, _mhw.kaih += 1 * _mi5), _mhw;
        };
    },
    11285: (_mi8, _mi9, _mia) => {
        'use strict';
        var _mib = null;
        defineModule(_mi9);
        Object.defineProperty(_mi9, '__esModule', {
            'value': true
        }), _mi9.getSlot119PersonalEffect = void 0;
        var _mic = _mia(74496);
        _mi9.getSlot119PersonalEffect = function(_mid) {
            var _mie = null,
                _mif = new _mic.SlotItemEffectModel(),
                _mig = new _mic.SlotItemEffectModel();
            34 == _mid.ctype || 56 == _mid.ctype ? _mig.houg += 1 : 90 == _mid.ctype && (_mig.houg += 2, _mig.raig += 1);
            var _mih = true;
            if (_mig.exists() || (_mih = false), 0 == _mih) return _mif;
            var _mii = _mid.get_slotnums(119);
            return _mif = _mig.multiply(_mii);
        };
    },
    96200: (_mij, _mik, _mil) => {
        'use strict';
        var _mim = null;
        defineModule(_mik);
        Object.defineProperty(_mik, '__esModule', {
            'value': true
        }), _mik.getSlot120mm50GroupPersonalEffect = void 0;
        var _min = _mil(74496);
        _mik.getSlot120mm50GroupPersonalEffect = function(_mio) {
            var _mip = null,
                _miq = new _min.SlotItemEffectModel(),
                _mir = false,
                _mis = new _min.SlotItemEffectModel(),
                _mit = _mio.get_slotnums(147),
                _miu = _mio.get_slotnums(393),
                _miv = _mio.get_slotnums(394),
                _miw = new _min.SlotItemEffectModel(),
                _mix = new _min.SlotItemEffectModel();
            if (61 == _mio.ctype && (_mis.houg += 1, _mis.kaih += 1, _mir = true, _miu >= 1 && (_miw.houg += 1, _miw.tyku += 1), _miv >= 1 && (_mix.houg += 1, _mix.tyku += 1, _mix.kaih += 1, 'グレカーレ' == _mio.yomi && (_mix.kaih += 1)), 1), 0 == _mir) return _miq;
            var _miy = _mit + _miu + _miv;
            _miq.add(_mis.multiply(_miy)).add(_miw.multiply(_miu)).add(_mix.multiply(_miv));
            var _miz = _mio.get_each_level_over_nums([394]).slot[394];
            return _miz[7] >= 1 && (_miq.houm += 1 * _miz[7], 'グレカーレ' == _mio.yomi && (_miq.houg += 1 * _miz[7])), _miz[8] >= 1 && (_miq.houg += 1 * _miz[8]), _miz[9] >= 1 && (_miq.houm += 1 * _miz[9]), _miz[10] >= 1 && (_miq.houg += 1 * _miz[10], 'グレカーレ' == _mio.yomi && (_miq.kaih += 1 * _miz[10])), _miq;
        };
    },
    33155: function(_mj0, _mj1, _mj2) {
        'use strict';
        var _mj3 = null;
        var _mj4 = this && this.__importDefault || function(_mj5) {
            var _mj6 = null;
            return _mj5 && _mj5.__esModule ? _mj5 : {
                'default': _mj5
            };
        };
        defineModule(_mj1);
        Object.defineProperty(_mj1, '__esModule', {
            'value': true
        }), _mj1.getSlot121PersonalEffect = void 0;
        var _mj7 = _mj2(74496),
            _mj8 = _mj4(_mj2(18622));
        _mj1.getSlot121PersonalEffect = function(_mj9) {
            var _mja = null,
                _mjb = new _mj7.SlotItemEffectModel(),
                _mjc = 0;
            if (54 == _mj9.ctype && (_mjb.tyku += 4, _mjb.kaih += 2, _mjc = 1), 0 == _mjc) return _mjb;
            for (var _mjd = 0, _mje = 0, _mjf = _mj9.have_slot_ids(); _mje < _mjf.length; _mje++) {
                var _mjg = _mjf[_mje],
                    _mjh = _mj8.default.model.slot.getMst(_mjg),
                    _mji = _mjh.equipType;
                12 != _mji && 13 != _mji || (_mjh.sakuteki >= 5 && _mj9.get_slotnums(parseInt(_mjg)), _mjh.taiku >= 2 && (_mjd += _mj9.get_slotnums(parseInt(_mjg))));
            }
            return _mjd >= 1 && (_mjb.tyku += 2, _mjb.kaih += 2), _mjb;
        };
    },
    9115: function(_mjj, _mjk, _mjl) {
        'use strict';
        var _mjm = null;
        var _mjn = this && this.__importDefault || function(_mjo) {
            var _mjp = null;
            return _mjo && _mjo.__esModule ? _mjo : {
                'default': _mjo
            };
        };
        defineModule(_mjk);
        Object.defineProperty(_mjk, '__esModule', {
            'value': true
        }), _mjk.getSlot122PersonalEffect = void 0;
        var _mjq = _mjl(74496),
            _mjr = _mjn(_mjl(18622));
        _mjk.getSlot122PersonalEffect = function(_mjs) {
            var _mjt = null,
                _mju = new _mjq.SlotItemEffectModel(),
                _mjv = 0,
                _mjw = 0,
                _mjx = false;
            656 == _mjs.ship_id && (_mjx = true, _mjv = 1, _mjw = 1);
            var _mjy = 0,
                _mjz = 0,
                _mk0 = _mjs.get_each_level_nums(122),
                _mk1 = 0;
            if (_mjx) {
                _mk0.forEach(function(_mk2, _mk3) {
                    _mk3 >= 4 && (_mk1 += _mk2);
                });
                for (var _mk4 = 0, _mk5 = _mjs.have_slot_ids(); _mk4 < _mk5.length; _mk4++) {
                    var _mk6 = _mk5[_mk4],
                        _mk7 = _mjr.default.model.slot.getMst(_mk6),
                        _mk8 = _mk7.equipType;
                    12 != _mk8 && 13 != _mk8 || (_mk7.sakuteki >= 5 && (_mjy += _mjs.get_slotnums(parseInt(_mk6))), _mk7.taiku >= 2 && (_mjz += _mjs.get_slotnums(parseInt(_mk6))));
                }
            }
            return _mk1 > 0 && (1 == _mjw && (_mjy > 0 && (_mju.houg += 4, _mju.kaih += 3), _mjz > 0 && (_mju.tyku += 4, _mju.kaih += 3)), 1 == _mjv && (_mju.houg += 5 * _mk1, _mju.tyku += 3 * _mk1, _mju.kaih += 2 * _mk1)), _mju;
        };
    },
    85127: (_mk9, _mka, _mkb) => {
        'use strict';
        var _mkc = null;
        defineModule(_mka);
        Object.defineProperty(_mka, '__esModule', {
            'value': true
        }), _mka.getSlot123PersonalEffect = void 0;
        var _mkd = _mkb(74496);
        _mka.getSlot123PersonalEffect = function(_mke) {
            var _mkf = null,
                _mkg = new _mkd.SlotItemEffectModel(),
                _mkh = (new _mkd.SlotItemEffectModel(), 0),
                _mki = (_mke.get_slotnums(123), _mke.get_slotnums(124));
            if ('ドイツ' != _mke.getCountryName()) return _mkg;
            _mkh = 1, _mki >= 1 && (_mkg.kaih += 1 * _mki);
            var _mkj = _mke.get_each_level_over_nums([123, 124]),
                _mkk = _mkj.slot[123],
                _mkl = _mkj.slot[124];
            return 1 == _mkh && (_mkk[5] >= 1 && (_mkg.houg += 1 * _mkk[5]), _mkk[7] >= 1 && (_mkg.houm += 1 * _mkk[7]), _mkk[9] >= 1 && (_mkg.houg += 1 * _mkk[9]), _mkk[10] >= 1 && (_mkg.houm += 1 * _mkk[10]), _mkl[8] >= 1 && (_mkg.kaih += 1 * _mkl[8]), _mkl[10] >= 1 && (_mkg.houm += 1 * _mkl[10])), _mkg;
        };
    },
    87204: (_mkm, _mkn, _mko) => {
        'use strict';
        var _mkp = null;
        defineModule(_mkn);
        Object.defineProperty(_mkn, '__esModule', {
            'value': true
        }), _mkn.getSlot124PersonalEffect = void 0;
        var _mkq = _mko(74496);
        _mkn.getSlot124PersonalEffect = function(_mkr) {
            var _mks = null,
                _mkt = new _mkq.SlotItemEffectModel(),
                _mku = (new _mkq.SlotItemEffectModel(), 0),
                _mkv = _mkr.getCountryName();
            if ('ドイツ' == _mkv) _mku = 1;
            else {
                if ('イタリア' != _mkv) return _mkt;
                _mku = 2;
            }
            var _mkw = _mkr.get_each_level_over_nums([124]).slot[124];
            return 1 == _mku ? (_mkw[7] >= 1 && (_mkt.houm += 1 * _mkw[7]), _mkw[8] >= 1 && (_mkt.houg += 1 * _mkw[8]), _mkw[9] >= 1 && (_mkt.tyku += 1 * _mkw[9]), _mkw[10] >= 1 && (_mkt.houm += 1 * _mkw[10])) : 2 == _mku && (_mkw[8] >= 1 && (_mkt.houm += 1 * _mkw[8]), _mkw[9] >= 1 && (_mkt.tyku += 1 * _mkw[9]), _mkw[10] >= 1 && (_mkt.houg += 1 * _mkw[10])), _mkt;
        };
    },
    37173: (_mkx, _mky, _mkz) => {
        'use strict';
        var _ml0 = null;
        defineModule(_mky);
        Object.defineProperty(_mky, '__esModule', {
            'value': true
        }), _mky.getSlot129PersonalEffect = void 0;
        var _ml1 = _mkz(74496);
        _mky.getSlot129PersonalEffect = function(_ml2) {
            var _ml3 = null,
                _ml4 = new _ml1.SlotItemEffectModel(),
                _ml5 = false,
                _ml6 = new _ml1.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_ml2.ctype) >= 0 ? (_ml6.houg = 1, _ml6.raig = 2, _ml6.kaih = 2, _ml6.tais = 2, _ml6.saku = 1, _ml5 = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_ml2.ctype) >= 0 ? (_ml6.houg = 1, _ml6.raig = 2, _ml6.kaih = 2, _ml6.saku = 3, _ml5 = true) : [7, 13, 29, 8, 9, 31].indexOf(_ml2.ctype) >= 0 && (_ml6.houg = 1, _ml6.kaih = 2, _ml6.saku = 3, _ml5 = true), 0 == _ml5) return _ml4;
            var _ml7 = _ml2.get_slotnums(129);
            return _ml4 = _ml6.multiply(_ml7);
        };
    },
    73254: (_ml8, _ml9, _mla) => {
        'use strict';
        var _mlb = null;
        defineModule(_ml9);
        Object.defineProperty(_ml9, '__esModule', {
            'value': true
        }), _ml9.getSlot12PersonalEffect = void 0;
        var _mlc = _mla(74496);
        _ml9.getSlot12PersonalEffect = function(_mld) {
            var _mle = null,
                _mlf = new _mlc.SlotItemEffectModel(),
                _mlg = false,
                _mlh = new _mlc.SlotItemEffectModel(),
                _mli = _mld.get_slotnums(142) + _mld.get_slotnums(460);
            if (37 == _mld.ctype && (_mlh.houg += 1, _mlh.kaih += 1, _mlh.houm += 1, _mli >= 1 && (_mlf.kaih += 1, _mlf.houm += 1), _mlg = true), 0 == _mlg) return _mlf;
            var _mlj = _mld.get_slotnums(12);
            return _mlf.add(_mlh.multiply(_mlj)), _mlf;
        };
    },
    93373: (_mlk, _mll, _mlm) => {
        'use strict';
        var _mln = null;
        defineModule(_mll);
        Object.defineProperty(_mll, '__esModule', {
            'value': true
        }), _mll.getSlot132PersonalEffect = void 0;
        var _mlo = _mlm(74496);
        _mll.getSlot132PersonalEffect = function(_mlp) {
            var _mlq = null,
                _mlr = new _mlo.SlotItemEffectModel(),
                _mls = _mlp.get_each_level_nums(132),
                _mlt = 0,
                _mlu = 0,
                _mlv = 0,
                _mlw = 0,
                _mlx = 0;
            return _mls.forEach(function(_mly, _mlz) {
                _mlz >= 3 && (_mlt += _mly), _mlz >= 5 && (_mlu += _mly), _mlz >= 7 && (_mlv += _mly), _mlz >= 8 && (_mlw += _mly), _mlz >= 9 && (_mlx += _mly);
            }), _mlt >= 1 && (_mlr.kaih += 1), _mlu >= 1 && (_mlr.tais += 1), _mlv >= 1 && (_mlr.kaih += 1), _mlw >= 1 && (_mlr.tais += 1), _mlx >= 1 && (_mlr.houm += 1), _mls[10] >= 1 && (_mlr.tais += 1), 911 != _mlp.ship_id && 916 != _mlp.ship_id && 546 != _mlp.ship_id || (_mlr.kaih += 1), 461 != _mlp.ship_id && 466 != _mlp.ship_id && 462 != _mlp.ship_id && 467 != _mlp.ship_id && 156 != _mlp.ship_id || (_mlr.kaih += 2), _mlr;
        };
    },
    88838: (_mm0, _mm1, _mm2) => {
        'use strict';
        var _mm3 = null;
        defineModule(_mm1);
        Object.defineProperty(_mm1, '__esModule', {
            'value': true
        }), _mm1.getSlot136PersonalEffect = void 0;
        var _mm4 = _mm2(74496);
        _mm1.getSlot136PersonalEffect = function(_mm5) {
            var _mm6 = null,
                _mm7 = new _mm4.SlotItemEffectModel(),
                _mm8 = 0;
            if (58 != _mm5.ctype && 61 != _mm5.ctype && 64 != _mm5.ctype && 68 != _mm5.ctype && 80 != _mm5.ctype && 92 != _mm5.ctype && 113 != _mm5.ctype && 124 != _mm5.ctype || (_mm7.souk += 2, _mm7.kaih += 1, _mm8 = 1), 879 == _mm5.ship_id && (_mm7.souk += 1, _mm7.kaih += 1), 0 == _mm8) return _mm7;
            var _mm9 = _mm5.get_each_level_nums(136),
                _mma = 0,
                _mmb = 0,
                _mmc = _mm9[10];
            return _mm8 > 0 && _mm9.forEach(function(_mmd, _mme) {
                _mme >= 3 && (_mma += _mmd), _mme >= 6 && (_mmb += _mmd);
            }), 1 == _mm8 && (_mma >= 1 && (_mm7.souk += 1 * _mma), _mmb >= 1 && (_mm7.souk += 1 * _mmb), _mmc >= 1 && (_mm7.souk += 1 * _mmc)), _mm7;
        };
    },
    17274: (_mmf, _mmg, _mmh) => {
        'use strict';
        var _mmi = null;
        defineModule(_mmg);
        Object.defineProperty(_mmg, '__esModule', {
            'value': true
        }), _mmg.getSlot139PersonalEffect = void 0;
        var _mmj = _mmh(74496);
        _mmg.getSlot139PersonalEffect = function(_mmk) {
            var _mml = null,
                _mmm = new _mmj.SlotItemEffectModel(),
                _mmn = false,
                _mmo = new _mmj.SlotItemEffectModel();
            if (662 != _mmk.ship_id && 663 != _mmk.ship_id && 668 != _mmk.ship_id || (_mmo.houg += 2, _mmo.tyku += 1, _mmn = true), 0 == _mmn) return _mmm;
            var _mmp = _mmk.get_slotnums(139);
            return _mmm.add(_mmo.multiply(_mmp)), _mmm;
        };
    },
    21713: (_mmq, _mmr, _mms) => {
        'use strict';
        var _mmt = null;
        defineModule(_mmr);
        Object.defineProperty(_mmr, '__esModule', {
            'value': true
        }), _mmr.getSlot143PersonalEffect = void 0;
        var _mmu = _mms(74496);
        _mmr.getSlot143PersonalEffect = function(_mmv) {
            var _mmw = null,
                _mmx = new _mmu.SlotItemEffectModel();
            return 'あかぎ' == _mmv.yomi ? _mmx.houg = 3 : 'かが' == _mmv.yomi || 'しょうかく' == _mmv.yomi ? _mmx.houg = 2 : ('ずいかく' == _mmv.yomi || 'りゅうじょう' == _mmv.yomi) && (_mmx.houg = 1), _mmx;
        };
    },
    59823: (_mmy, _mmz, _mn0) => {
        'use strict';
        var _mn1 = null;
        defineModule(_mmz);
        Object.defineProperty(_mmz, '__esModule', {
            'value': true
        }), _mmz.getSlot144PersonalEffect = void 0;
        var _mn2 = _mn0(74496);
        _mmz.getSlot144PersonalEffect = function(_mn3) {
            var _mn4 = null,
                _mn5 = new _mn2.SlotItemEffectModel();
            return 'あかぎ' == _mn3.yomi ? _mn5.houg = 3 : 'かが' == _mn3.yomi ? _mn5.houg = 2 : 'しょうかく' == _mn3.yomi ? (_mn5.houg = 2, 461 != _mn3.ship_id && 466 != _mn3.ship_id || (_mn5.houg += 2)) : 'ずいかく' == _mn3.yomi ? (_mn5.houg = 1, 462 != _mn3.ship_id && 467 != _mn3.ship_id || (_mn5.houg += 1)) : 'りゅうじょう' == _mn3.yomi && (_mn5.houg = 1), _mn5;
        };
    },
    57440: (_mn6, _mn7, _mn8) => {
        'use strict';
        var _mn9 = null;
        defineModule(_mn7);
        Object.defineProperty(_mn7, '__esModule', {
            'value': true
        }), _mn7.getSlot149PersonalEffect = void 0;
        var _mna = _mn8(74496);
        _mn7.getSlot149PersonalEffect = function(_mnb) {
            var _mnc = null,
                _mnd = new _mna.SlotItemEffectModel(),
                _mne = new _mna.SlotItemEffectModel(),
                _mnf = false;
            return 488 == _mnb.ship_id || 141 == _mnb.ship_id || 160 == _mnb.ship_id || 622 == _mnb.ship_id || 623 == _mnb.ship_id || 656 == _mnb.ship_id || 961 == _mnb.ship_id ? (_mne.tais = 1, _mne.kaih = 3, _mnf = true) : 624 == _mnb.ship_id ? (_mne.tais = 3, _mne.kaih = 5, _mnf = true) : 662 == _mnb.ship_id && (_mne.tais = 2, _mne.kaih = 4, _mnf = true), 54 == _mnb.ctype && (_mne.tais = 1, _mne.kaih = 2, _mnf = true), 0 == _mnf ? _mnd : _mnd = _mne.multiply(1);
        };
    },
    29493: (_mng, _mnh, _mni) => {
        'use strict';
        var _mnj = null;
        defineModule(_mnh);
        Object.defineProperty(_mnh, '__esModule', {
            'value': true
        }), _mnh.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mnk = _mni(74496);
        _mnh.getSlot14inch45CaliberGunPersonalEffect = function(_mnl) {
            var _mnm = null,
                _mnn, _mno, _mnp, _mnq = new _mnk.SlotItemEffectModel(),
                _mnr = false,
                _mns = new _mnk.SlotItemEffectModel(),
                _mnt = {
                    507: 507,
                    508: 507
                },
                _mnu = _mnl.get_slotnums(507),
                _mnv = _mnl.get_slotnums(508),
                _mnw = _mnu + _mnv,
                _mnx = _mnl.getCountryName(),
                _mny = _mnl.getUSSWaterRaderDict();
            if (125 == _mnl.ctype && (_mns.houg += 1, _mns.kaih += 1, _mns.houm += 1, _mnr = true, _mnu >= 1 && _mnv >= 1 && (_mnq.houg += 1, _mnq.houm += 1)), 'アメリカ' == _mnx && _mnl.stype >= 8 && _mnl.stype <= 10) {
                _mns.houg += 2, _mns.kaih += 1, _mns.houm += 1, _mnr = true;
                for (var _mnz = 0, _mo0 = 0, _mo1 = _mnl.have_slot_ids(); _mo0 < _mo1.length; _mo0++) {
                    var _mo2 = _mo1[_mo0];
                    _mny[Number(_mo2)] && (_mnz += _mnl.get_slotnums(parseInt(_mo2)));
                }
                _mnz >= 1 && (_mnq.houg += 1, _mnq.kaih += 1, _mnq.houm += 2), _mnu >= 1 && _mnv >= 1 && (_mnq.houg += 1, _mnq.houm += 1, _mnq.kaih += 2);
            }
            else 6 != _mnl.ctype && 26 != _mnl.ctype && 2 != _mnl.ctype && 'イギリス' != _mnx || (_mnq.kaih += 1, _mnq.houm += 1, _mnu >= 1 && _mnv >= 1 && (_mnq.houg += 1, _mnq.houm += 1, _mnq.kaih += 1));
            _mnr && _mnq.add(_mns.multiply(_mnw));
            for (var _mo3 = {}, _mo4 = {}, _mo5 = {}, _mo6 = function(_mo7) {
                    var _mo8 = null,
                        _mo9 = Number(_mo7),
                        _moa = _mnt[_mo9];
                    _mo3[_moa] = null !== (_mnn = _mo3[_moa]) && void 0 !== _mnn ? _mnn : 0, _mo4[_moa] = null !== (_mno = _mo4[_moa]) && void 0 !== _mno ? _mno : 0, _mo5[_moa] = null !== (_mnp = _mo5[_moa]) && void 0 !== _mnp ? _mnp : 0, _mnl.get_each_level_nums(_mo9).forEach(function(_mob, _moc) {
                        _moc >= 3 && (_mo3[_moa] += _mob), _moc >= 6 && (_mo4[_moa] += _mob), _moc >= 9 && (_mo5[_moa] += _mob);
                    });
                }, _mod = 0, _moe = Object.keys(_mnt); _mod < _moe.length; _mod++) {
                _mo6(_moe[_mod]);
            }
            return _mo3[507] >= 1 && (_mnq.houg += 1 * _mo3[507]), _mo4[507] >= 1 && (_mnq.souk += 1 * _mo4[507]), _mo5[507] >= 1 && (_mnq.houm += 1 * _mo5[507]), _mnq;
        };
    },
    66985: (_mof, _mog, _moh) => {
        'use strict';
        var _moi = null;
        defineModule(_mog);
        Object.defineProperty(_mog, '__esModule', {
            'value': true
        }), _mog.getSlot15PersonalEffect = void 0;
        var _moj = _moh(74496);
        _mog.getSlot15PersonalEffect = function(_mok) {
            var _mol = null,
                _mom = new _moj.SlotItemEffectModel(),
                _mon = false;
            if ((566 == _mok.ship_id || 567 == _mok.ship_id || 568 == _mok.ship_id || 648 == _mok.ship_id || 651 == _mok.ship_id || 656 == _mok.ship_id || 670 == _mok.ship_id || 915 == _mok.ship_id || 951 == _mok.ship_id || 'たけ' == _mok.yomi) && (_mon = true), 0 == _mon) return _mom;
            var _moo = _mok.get_slotnums(15);
            return 30 == _mok.ctype && (1 == _moo ? _mom.raig = 2 : _moo >= 2 && (_mom.raig = 4)), 'たけ' == _mok.yomi && (_mom.raig += 5, _mom.kaih += 1), _mom;
        };
    },
    79086: (_mop, _moq, _mor) => {
        'use strict';
        var _mos = null;
        defineModule(_moq);
        Object.defineProperty(_moq, '__esModule', {
            'value': true
        }), _moq.getSlot165_216PersonalEffect = void 0;
        var _mot = _mor(74496);
        _moq.getSlot165_216PersonalEffect = function(_mou) {
            var _mov = null,
                _mow = new _mot.SlotItemEffectModel();
            return 501 != _mou.ship_id && 506 != _mou.ship_id && 502 != _mou.ship_id && 507 != _mou.ship_id || (_mow.tyku += 2, _mow.kaih += 2), _mow;
        };
    },
    88102: (_mox, _moy, _moz) => {
        'use strict';
        var _mp0 = null;
        defineModule(_moy);
        Object.defineProperty(_moy, '__esModule', {
            'value': true
        }), _moy.getSlot16M1PersonalEffect = void 0;
        var _mp1 = _moz(74496);
        _moy.getSlot16M1PersonalEffect = function(_mp2) {
            var _mp3 = null,
                _mp4 = new _mp1.SlotItemEffectModel(),
                _mp5 = new _mp1.SlotItemEffectModel();
            67 == _mp2.ctype || 78 == _mp2.ctype || 82 == _mp2.ctype || 88 == _mp2.ctype || 108 == _mp2.ctype || 112 == _mp2.ctype ? (_mp5.houg += 2, _mp5.souk += 1, 67 == _mp2.ctype && (_mp5.kaih -= 2)) : 149 == _mp2.ship_id || 150 == _mp2.ship_id || 151 == _mp2.ship_id || 152 == _mp2.ship_id ? (_mp5.houg += 1, _mp5.souk += 1, _mp5.kaih -= 3) : 591 == _mp2.ship_id || 592 == _mp2.ship_id ? (_mp5.houg += 2, _mp5.souk += 1, _mp5.kaih -= 2) : 593 != _mp2.ship_id && 954 != _mp2.ship_id || (_mp5.houg += 1, _mp5.souk += 1, _mp5.kaih -= 1);
            var _mp6 = true;
            if (_mp5.exists() || (_mp6 = false), 0 == _mp6) return _mp4;
            var _mp7 = _mp2.get_slotnums(298) + _mp2.get_slotnums(299) + _mp2.get_slotnums(300);
            return _mp4 = _mp5.multiply(_mp7);
        };
    },
    29240: (_mp8, _mp9, _mpa) => {
        'use strict';
        var _mpb = null;
        defineModule(_mp9);
        Object.defineProperty(_mp9, '__esModule', {
            'value': true
        }), _mp9.getSlot171PersonalEffect = void 0;
        var _mpc = _mpa(74496);
        _mp9.getSlot171PersonalEffect = function(_mpd) {
            var _mpe = null,
                _mpf = new _mpc.SlotItemEffectModel(),
                _mpg = 0;
            'アメリカ' == _mpd.getCountryName() && (_mpg = 1), 65 != _mpd.ctype && 93 != _mpd.ctype && 102 != _mpd.ctype && 107 != _mpd.ctype && 125 != _mpd.ctype || (_mpf.houg += 1, _mpf.saku += 1, _mpg = 2);
            var _mph = _mpd.get_each_level_nums(171),
                _mpi = 0,
                _mpj = 0,
                _mpk = 0;
            return _mpg > 0 && (_mph.map(function(_mpl, _mpm) {
                _mpm >= 5 && (_mpi += _mpl), _mpm >= 3 && (_mpj += _mpl), _mpm >= 8 && (_mpk += _mpl);
            }), 1 != _mpg && 2 != _mpg || (_mph[10] > 0 && (_mpf.houg += 1), _mpi > 0 && (_mpf.kaih += 1)), 2 == _mpg && (_mpj > 0 && (_mpf.saku += 1), _mpk > 0 && (_mpf.saku += 1))), _mpf;
        };
    },
    40885: (_mpn, _mpo, _mpp) => {
        'use strict';
        var _mpq = null;
        defineModule(_mpo);
        Object.defineProperty(_mpo, '__esModule', {
            'value': true
        }), _mpo.getSlot174PersonalEffect = void 0;
        var _mpr = _mpp(74496);
        _mpo.getSlot174PersonalEffect = function(_mps) {
            var _mpt = null,
                _mpu = new _mpr.SlotItemEffectModel(),
                _mpv = new _mpr.SlotItemEffectModel();
            if (66 == _mps.ctype && (_mpv.raig = 1, _mpv.kaih = 2), 591 == _mps.ship_id || 592 == _mps.ship_id || 954 == _mps.ship_id ? (_mpv.raig += 6, _mpv.kaih += 3) : 593 == _mps.ship_id ? (_mpv.raig += 5, _mpv.kaih += 2) : 488 != _mps.ship_id && 622 != _mps.ship_id && 623 != _mps.ship_id && 624 != _mps.ship_id || (_mpv.houg += 2, _mpv.raig += 4, _mpv.kaih += 4), !_mpv.exists()) return _mpu;
            var _mpw = _mps.get_slotnums(174);
            return _mpu = _mpv.multiply(_mpw);
        };
    },
    19614: (_mpx, _mpy, _mpz) => {
        'use strict';
        var _mq0 = null;
        defineModule(_mpy);
        Object.defineProperty(_mpy, '__esModule', {
            'value': true
        }), _mpy.getSlot179PersonalEffect = void 0;
        var _mq1 = _mpz(74496);
        _mpy.getSlot179PersonalEffect = function(_mq2) {
            var _mq3 = null,
                _mq4 = new _mq1.SlotItemEffectModel(),
                _mq5 = new _mq1.SlotItemEffectModel();
            if (54 == _mq2.ctype && (_mq5.raig = 1), !_mq5.exists()) return _mq4;
            var _mq6 = _mq2.get_slotnums(179);
            return _mq4 = _mq5.multiply(_mq6);
        };
    },
    87220: (_mq7, _mq8, _mq9) => {
        'use strict';
        var _mqa = null;
        defineModule(_mq8);
        Object.defineProperty(_mq8, '__esModule', {
            'value': true
        }), _mq8.getSlot184PersonalEffect = void 0;
        var _mqb = _mq9(74496);
        _mq8.getSlot184PersonalEffect = function(_mqc) {
            var _mqd = null,
                _mqe = new _mqb.SlotItemEffectModel(),
                _mqf = new _mqb.SlotItemEffectModel();
            if (68 == _mqc.ctype && (_mqf.houg += 1, _mqf.tyku += 2, _mqf.kaih += 3), !_mqf.exists()) return _mqe;
            var _mqg = _mqc.get_slotnums(184);
            return _mqe = _mqf.multiply(_mqg);
        };
    },
    81367: (_mqh, _mqi, _mqj) => {
        'use strict';
        var _mqk = null;
        defineModule(_mqi);
        Object.defineProperty(_mqi, '__esModule', {
            'value': true
        }), _mqi.getSlot188PersonalEffect = void 0;
        var _mql = _mqj(74496);
        _mqi.getSlot188PersonalEffect = function(_mqm) {
            var _mqn = null,
                _mqo = new _mql.SlotItemEffectModel(),
                _mqp = new _mql.SlotItemEffectModel();
            if (68 == _mqm.ctype && (_mqp.houg += 3, _mqp.tyku += 1, _mqp.kaih += 1), !_mqp.exists()) return _mqo;
            var _mqq = _mqm.get_slotnums(188);
            return _mqo = _mqp.multiply(_mqq);
        };
    },
    13052: (_mqr, _mqs, _mqt) => {
        'use strict';
        var _mqu = null;
        defineModule(_mqs);
        Object.defineProperty(_mqs, '__esModule', {
            'value': true
        }), _mqs.getSlot189PersonalEffect = void 0;
        var _mqv = _mqt(74496);
        _mqs.getSlot189PersonalEffect = function(_mqw) {
            var _mqx = null,
                _mqy = new _mqv.SlotItemEffectModel(),
                _mqz = new _mqv.SlotItemEffectModel();
            if (68 != _mqw.ctype && 63 != _mqw.ctype || (_mqz.tyku += 1, _mqz.kaih += 2), !_mqz.exists()) return _mqy;
            var _mr0 = _mqw.get_slotnums(189);
            return _mqy = _mqz.multiply(_mr0);
        };
    },
    66904: (_mr1, _mr2, _mr3) => {
        'use strict';
        var _mr4 = null;
        defineModule(_mr2);
        Object.defineProperty(_mr2, '__esModule', {
            'value': true
        }), _mr2.getSlot18_52_PersonalEffect = void 0;
        var _mr5 = _mr3(74496);
        _mr2.getSlot18_52_PersonalEffect = function(_mr6) {
            var _mr7 = null,
                _mr8 = new _mr5.SlotItemEffectModel(),
                _mr9 = new _mr5.SlotItemEffectModel();
            if (277 == _mr6.ship_id || 278 == _mr6.ship_id || 156 == _mr6.ship_id ? _mr9.houg = 1 : 594 == _mr6.ship_id || 698 == _mr6.ship_id || 646 == _mr6.ship_id ? (_mr9.houg = 1, _mr9.kaih = 1) : 599 != _mr6.ship_id && 610 != _mr6.ship_id || (_mr9.houg = 2, _mr9.kaih = 1), !_mr9.exists()) return _mr8;
            var _mra = _mr6.get_slotnums(18) + _mr6.get_slotnums(52);
            return _mr8 = _mr9.multiply(_mra);
        };
    },
    94968: (_mrb, _mrc, _mrd) => {
        'use strict';
        var _mre = null;
        defineModule(_mrc);
        Object.defineProperty(_mrc, '__esModule', {
            'value': true
        }), _mrc.getSlot194PersonalEffect = void 0;
        var _mrf = _mrd(74496);
        _mrc.getSlot194PersonalEffect = function(_mrg) {
            var _mrh = null,
                _mri = new _mrf.SlotItemEffectModel(),
                _mrj = new _mrf.SlotItemEffectModel();
            if (70 == _mrg.ctype ? (_mrj.houg += 3, _mrj.kaih += 2, _mrj.saku += 2) : 72 != _mrg.ctype && 62 != _mrg.ctype || (_mrj.kaih += 1, _mrj.saku += 2), 392 == _mrg.ship_id && (_mrj.houg += 1, _mrj.kaih += 2, _mrj.saku += 2), !_mrj.exists()) return _mri;
            var _mrk = _mrg.get_slotnums(194);
            return _mri = _mrj.multiply(_mrk);
        };
    },
    94781: (_mrl, _mrm, _mrn) => {
        'use strict';
        var _mro = null;
        defineModule(_mrm);
        Object.defineProperty(_mrm, '__esModule', {
            'value': true
        }), _mrm.getSlot195PersonalEffect = void 0;
        var _mrp = _mrn(74496);
        _mrm.getSlot195PersonalEffect = function(_mrq) {
            var _mrr = null,
                _mrs = new _mrp.SlotItemEffectModel(),
                _mrt = false,
                _mru = new _mrp.SlotItemEffectModel();
            if ('アメリカ' == _mrq.getCountryName() && (_mru.houg += 1, _mrt = true), 0 == _mrt) return _mrs;
            var _mrv = _mrq.get_slotnums(195);
            return _mrs.add(_mru.multiply(_mrv));
        };
    },
    98137: (_mrw, _mrx, _mry) => {
        'use strict';
        var _mrz = null;
        defineModule(_mrx);
        Object.defineProperty(_mrx, '__esModule', {
            'value': true
        }), _mrx.getSlot19PersonalEffect = void 0;
        var _ms0 = _mry(74496);
        _mrx.getSlot19PersonalEffect = function(_ms1) {
            var _ms2 = null,
                _ms3 = new _ms0.SlotItemEffectModel(),
                _ms4 = new _ms0.SlotItemEffectModel();
            if ('ほうしょう' == _ms1.yomi && (_ms4.houg = 2, _ms4.kaih = 2, _ms4.tais = 2, _ms4.tyku = 2), 75 != _ms1.ctype && 76 != _ms1.ctype || (_ms4.houg = 2, _ms4.tais = 3), 7 == _ms1.stype && (_ms4.tyku += 1, _ms4.kaih += 1), 894 != _ms1.ship_id && 899 != _ms1.ship_id || (_ms4.houg += 1, _ms4.kaih += 1, _ms4.tais += 1, _ms4.tyku += 1), !_ms4.exists()) return _ms3;
            var _ms5 = _ms1.get_slotnums(19);
            return _ms3 = _ms4.multiply(_ms5);
        };
    },
    48658: (_ms6, _ms7, _ms8) => {
        'use strict';
        var _ms9 = null;
        defineModule(_ms7);
        Object.defineProperty(_ms7, '__esModule', {
            'value': true
        }), _ms7.getSlot204PersonalEffect = void 0;
        var _msa = _ms8(74496);
        _ms7.getSlot204PersonalEffect = function(_msb) {
            var _msc = null,
                _msd = new _msa.SlotItemEffectModel();
            if (591 != _msb.ship_id && 592 != _msb.ship_id && 593 != _msb.ship_id && 954 != _msb.ship_id) return _msd;
            _msd.souk = _msd.souk + 1, _msd.raig = _msd.raig + 1;
            for (var _mse = _msb.get_each_level_nums(204), _msf = 0, _msg = 0; _msg <= 10; _msg++) _msg >= 7 && (_msf += _mse[_msg]);
            return _msf > 0 && (_msd.souk = _msd.souk + 1), _mse[10] > 0 && (_msd.raig = _msd.raig + 1), _msd;
        };
    },
    2306: (_msh, _msi, _msj) => {
        'use strict';
        var _msk = null;
        defineModule(_msi);
        Object.defineProperty(_msi, '__esModule', {
            'value': true
        }), _msi.getSlot217PersonalEffect = void 0;
        var _msl = _msj(74496);
        _msi.getSlot217PersonalEffect = function(_msm) {
            var _msn = null,
                _mso = new _msl.SlotItemEffectModel(),
                _msp = false,
                _msq = new _msl.SlotItemEffectModel();
            if (501 == _msm.ship_id || 506 == _msm.ship_id ? (_msq.houg += 1, _msq.kaih += 3, _msq.tyku += 5, _msp = true) : 502 != _msm.ship_id && 507 != _msm.ship_id || (_msq.houg += 1, _msq.kaih += 2, _msq.tyku += 4, _msp = true), 0 == _msp) return _mso;
            var _msr = _msm.get_slotnums(217);
            return _mso.add(_msq.multiply(_msr)), _mso;
        };
    },
    91302: function(_mss, _mst, _msu) {
        'use strict';
        var _msv = null;
        var _msw = this && this.__importDefault || function(_msx) {
            var _msy = null;
            return _msx && _msx.__esModule ? _msx : {
                'default': _msx
            };
        };
        defineModule(_mst);
        Object.defineProperty(_mst, '__esModule', {
            'value': true
        }), _mst.getSlot220PersonalEffect = void 0;
        var _msz = _msu(74496),
            _mt0 = _msw(_msu(18622));
        _mst.getSlot220PersonalEffect = function(_mt1) {
            var _mt2 = null,
                _mt3 = new _msz.SlotItemEffectModel(),
                _mt4 = false,
                _mt5 = new _msz.SlotItemEffectModel(),
                _mt6 = 0,
                _mt7 = 0;
            if (662 == _mt1.ship_id || 663 == _mt1.ship_id || 668 == _mt1.ship_id || 501 == _mt1.ship_id || 506 == _mt1.ship_id || 502 == _mt1.ship_id || 507 == _mt1.ship_id ? (_mt5.houg += 1, _mt5.tyku += 3, _mt5.kaih += 2, _mt4 = true, _mt6 = 1) : 894 != _mt1.ship_id && 899 != _mt1.ship_id || (_mt5.tyku += 2, _mt5.kaih += 2, _mt4 = true, _mt6 = 1, _mt7 = 1), 0 == _mt4) return _mt3;
            var _mt8 = _mt1.get_slotnums(220);
            _mt3.add(_mt5.multiply(_mt8));
            for (var _mt9 = 0, _mta = 0, _mtb = _mt1.have_slot_ids(); _mta < _mtb.length; _mta++) {
                var _mtc = _mtb[_mta],
                    _mtd = _mt0.default.model.slot.getMst(_mtc),
                    _mte = _mtd.equipType;
                12 != _mte && 13 != _mte || (_mtd.sakuteki >= 5 && _mt1.get_slotnums(parseInt(_mtc)), _mtd.taiku >= 2 && (_mt9 += _mt1.get_slotnums(parseInt(_mtc))));
            }
            if (_mt9 >= 1 && 1 == _mt6 && (_mt3.tyku += 3, _mt3.kaih += 3), 0 == _mt7) return _mt3;
            var _mtf = _mt1.get_each_level_nums(220)[10];
            return 1 == _mt7 && _mtf > 0 && (_mt3.houg += 1 * _mtf, _mt3.tyku += 1 * _mtf, _mt3.kaih += 1 * _mtf), _mt3;
        };
    },
    20418: (_mtg, _mth, _mti) => {
        'use strict';
        var _mtj = null;
        defineModule(_mth);
        Object.defineProperty(_mth, '__esModule', {
            'value': true
        }), _mth.getSlot227PersonalEffect = void 0;
        var _mtk = _mti(74496);
        _mth.getSlot227PersonalEffect = function(_mtl) {
            var _mtm = null,
                _mtn = new _mtk.SlotItemEffectModel(),
                _mto = _mtl.get_each_level_nums(227),
                _mtp = 0;
            _mto.forEach(function(_mtq, _mtr) {
                _mtr >= 8 && (_mtp += _mtq);
            }), _mtp >= 1 && (_mtn.tais += 1 * _mtp);
            var _mts = _mto[10];
            return _mts >= 1 && (_mtn.tais += 1 * _mts), _mtn;
        };
    },
    1906: (_mtt, _mtu, _mtv) => {
        'use strict';
        var _mtw = null;
        defineModule(_mtu);
        Object.defineProperty(_mtu, '__esModule', {
            'value': true
        }), _mtu.getSlot228PersonalEffect = void 0;
        var _mtx = _mtv(74496);
        _mtu.getSlot228PersonalEffect = function(_mty) {
            var _mtz = null,
                _mu0 = new _mtx.SlotItemEffectModel(),
                _mu1 = new _mtx.SlotItemEffectModel();
            if ('ほうしょう' == _mty.yomi && (_mu1.houg = 3, _mu1.kaih = 4, _mu1.tais = 4, _mu1.tyku = 3), 75 != _mty.ctype && 76 != _mty.ctype || (_mu1.houg = 2, _mu1.tais = 5, _mu1.tyku = 1, _mu1.kaih = 1), 7 == _mty.stype && (_mu1.tais += 2, _mu1.tyku += 1, _mu1.kaih += 1), 894 != _mty.ship_id && 899 != _mty.ship_id || (_mu1.houg += 1, _mu1.kaih += 2, _mu1.tais += 2, _mu1.tyku += 1), !_mu1.exists()) return _mu0;
            var _mu2 = _mty.get_slotnums(228);
            return _mu0 = _mu1.multiply(_mu2);
        };
    },
    61887: function(_mu3, _mu4, _mu5) {
        'use strict';
        var _mu6 = null;
        var _mu7 = this && this.__importDefault || function(_mu8) {
            var _mu9 = null;
            return _mu8 && _mu8.__esModule ? _mu8 : {
                'default': _mu8
            };
        };
        defineModule(_mu4);
        Object.defineProperty(_mu4, '__esModule', {
            'value': true
        }), _mu4.getSlot229PersonalEffect = void 0;
        var _mua = _mu5(74496),
            _mub = _mu7(_mu5(18622));
        _mu4.getSlot229PersonalEffect = function(_muc) {
            var _mud = null;
            for (var _mue = new _mua.SlotItemEffectModel(), _muf = 0, _mug = 0, _muh = _muc.have_slots_dict[229]; _mug < _muh.length; _mug++) {
                _muh[_mug].level >= 7 && _muf++;
            }
            var _mui = _muf,
                _muj = 0,
                _muk = 0,
                _mul = 0,
                _mum = _muc.get_slotnums(229);
            if (622 == _muc.ship_id || 623 == _muc.ship_id || 624 == _muc.ship_id) _mue.houg += 1 * _mum, _mue.tyku += 1 * _mum, _muj = 2;
            else {
                if (656 == _muc.ship_id) _mue.houg += 2 * _mum, _mue.tyku += 3 * _mum, _mue.tais += 2 * _mum, _muj = 3;
                else {
                    if (0 == _muf) return _mue;
                }
            }
            if (488 == _muc.ship_id ? (_mue.tyku += 3 * _mui, _muj = 1) : 220 == _muc.ship_id ? _mue.tyku += 2 * _mui : 23 == _muc.ship_id ? _mue.tyku += 1 * _mui : 160 == _muc.ship_id ? (_mue.tyku += 2 * _mui, _muj = 1) : 224 == _muc.ship_id ? _mue.tyku += 1 * _mui : 487 == _muc.ship_id ? (_mue.tyku += 2 * _mui, _muj = 1) : 289 == _muc.ship_id && (_mue.tyku += 1 * _mui), (66 == _muc.ctype || 28 == _muc.ctype) && (_mue.houg += 1 * _mui, _mue.tyku += 1 * _mui, _muk = 1), 1 == _muc.stype && (_mue.houg += 1 * _mui, _mue.tyku += 1 * _mui, _mul = 1), ('ゆら' == _muc.yomi || 'なか' == _muc.yomi || 'きぬ' == _muc.yomi) && (_mue.houg += 2 * _mui), 0 == _muj + _muk + _mul) return _mue;
            for (var _mun = 0, _muo = 0, _mup = 0, _muq = _muc.have_slot_ids(); _mup < _muq.length; _mup++) {
                var _mur = _muq[_mup],
                    _mus = _mub.default.model.slot.getMst(_mur),
                    _mut = _mus.equipType;
                12 != _mut && 13 != _mut || (_mus.sakuteki >= 5 && (_mun += _muc.get_slotnums(parseInt(_mur))), _mus.taiku >= 2 && (_muo += _muc.get_slotnums(parseInt(_mur))));
            }
            return 1 == _muj ? _mun > 0 && (_mue.houg += 3, _mue.kaih += 2) : 2 == _muj ? (_mun > 0 && (_mue.houg += 1, _mue.kaih += 1), _muo > 0 && (_mue.tyku += 2, _mue.kaih += 2)) : 3 == _muj && (_mun > 0 && (_mue.houg += 2, _mue.kaih += 2), _muo > 0 && (_mue.tyku += 3, _mue.kaih += 2)), 1 == _muk && _mun > 0 && (_mue.houg += 2, _mue.kaih += 3), 1 == _mul && _mun > 0 && (_mue.houg += 1, _mue.kaih += 4), _mue;
        };
    },
    55734: (_muu, _muv, _muw) => {
        'use strict';
        var _mux = null;
        defineModule(_muv);
        Object.defineProperty(_muv, '__esModule', {
            'value': true
        }), _muv.getSlot234PersonalEffect = void 0;
        var _muy = _muw(74496);
        _muv.getSlot234PersonalEffect = function(_muz) {
            var _mv0 = null,
                _mv1 = new _muy.SlotItemEffectModel(),
                _mv2 = false,
                _mv3 = new _muy.SlotItemEffectModel(),
                _mv4 = _muz.get_slotnums(142) + _muz.get_slotnums(460);
            if (37 == _muz.ctype && (_mv3.houg += 1, _mv3.tyku += 1, _mv3.kaih += 1, _mv3.houm += 1, _mv4 >= 1 && (_mv1.tyku += 1, _mv1.kaih += 1, _mv1.houm += 1), _mv2 = true), 0 == _mv2) return _mv1;
            var _mv5 = _muz.get_slotnums(234);
            return _mv1.add(_mv3.multiply(_mv5)), _mv1;
        };
    },
    17562: function(_mv6, _mv7, _mv8) {
        'use strict';
        var _mv9 = null;
        var _mva = this && this.__importDefault || function(_mvb) {
            var _mvc = null;
            return _mvb && _mvb.__esModule ? _mvb : {
                'default': _mvb
            };
        };
        defineModule(_mv7);
        Object.defineProperty(_mv7, '__esModule', {
            'value': true
        }), _mv7.getSlot235PersonalEffect = void 0;
        var _mvd = _mv8(74496),
            _mve = _mva(_mv8(18622));
        _mv7.getSlot235PersonalEffect = function(_mvf) {
            var _mvg = null,
                _mvh = new _mvd.SlotItemEffectModel(),
                _mvi = false,
                _mvj = new _mvd.SlotItemEffectModel(),
                _mvk = 0;
            if (52 != _mvf.ctype && 9 != _mvf.ctype || (_mvj.houg += 2, _mvj.tyku += 1, _mvi = true), 321 == _mvf.ship_id && (_mvj.houg += 1, _mvj.kaih += 1, _mvk = 1), 0 == _mvi) return _mvh;
            var _mvl = _mvf.get_slotnums(235);
            if (_mvh.add(_mvj.multiply(_mvl)), 0 == _mvk) return _mvh;
            for (var _mvm = 0, _mvn = 0, _mvo = 0, _mvp = _mvf.have_slot_ids(); _mvo < _mvp.length; _mvo++) {
                var _mvq = _mvp[_mvo],
                    _mvr = _mve.default.model.slot.getMst(_mvq),
                    _mvs = _mvr.equipType;
                12 != _mvs && 13 != _mvs || (_mvr.sakuteki >= 5 && (_mvm += _mvf.get_slotnums(parseInt(_mvq))), _mvr.taiku >= 2 && (_mvn += _mvf.get_slotnums(parseInt(_mvq))));
            }
            return _mvm >= 1 && 1 == _mvk && (_mvh.houg += 3, _mvh.kaih += 2), _mvn >= 1 && 1 == _mvk && (_mvh.tyku += 3, _mvh.kaih += 3), _mvh;
        };
    },
    47970: (_mvt, _mvu, _mvv) => {
        'use strict';
        var _mvw = null;
        defineModule(_mvu);
        Object.defineProperty(_mvu, '__esModule', {
            'value': true
        }), _mvu.getSlot237PersonalEffect = void 0;
        var _mvx = _mvv(74496);
        _mvu.getSlot237PersonalEffect = function(_mvy) {
            var _mvz = null,
                _mw0 = new _mvx.SlotItemEffectModel(),
                _mw1 = new _mvx.SlotItemEffectModel();
            if (553 == _mvy.ship_id) _mw1.houg = 4, _mw1.kaih = 2;
            else {
                if (82 == _mvy.ship_id) _mw1.houg = 3, _mw1.kaih = 1;
                else {
                    if (88 == _mvy.ship_id) _mw1.houg = 3, _mw1.kaih = 1;
                    else {
                        if (554 == _mvy.ship_id) _mw1.houg = 4, _mw1.kaih = 2;
                        else {
                            if (411 == _mvy.ship_id) _mw1.houg = 2;
                            else {
                                if (412 != _mvy.ship_id) return _mw0;
                                _mw1.houg = 2;
                            }
                        }
                    }
                }
            }
            var _mw2 = _mvy.get_slotnums(237);
            return _mw0 = _mw1.multiply(_mw2);
        };
    },
    14386: (_mw3, _mw4, _mw5) => {
        'use strict';
        var _mw6 = null;
        defineModule(_mw4);
        Object.defineProperty(_mw4, '__esModule', {
            'value': true
        }), _mw4.getSlot238_239PersonalEffect = void 0;
        var _mw7 = _mw5(74496);
        _mw4.getSlot238_239PersonalEffect = function(_mw8) {
            var _mw9 = null,
                _mwa = new _mw7.SlotItemEffectModel();
            return 501 != _mw8.ship_id && 506 != _mw8.ship_id && 502 != _mw8.ship_id && 507 != _mw8.ship_id || (_mwa.kaih += 1, _mwa.raig += 1), _mwa;
        };
    },
    82229: (_mwb, _mwc, _mwd) => {
        'use strict';
        var _mwe = null;
        defineModule(_mwc);
        Object.defineProperty(_mwc, '__esModule', {
            'value': true
        }), _mwc.getSlot242PersonalEffect = void 0;
        var _mwf = _mwd(74496);
        _mwc.getSlot242PersonalEffect = function(_mwg) {
            var _mwh = null,
                _mwi = new _mwf.SlotItemEffectModel(),
                _mwj = false,
                _mwk = new _mwf.SlotItemEffectModel();
            if (78 == _mwg.ctype && (_mwk.houg += 2, _mwk.kaih += 1, _mwj = true), 'ほうしょう' == _mwg.yomi && (_mwk.houg += 1, _mwj = true), 0 == _mwj) return _mwi;
            var _mwl = _mwg.get_slotnums(242);
            return _mwi.add(_mwk.multiply(_mwl)), _mwi;
        };
    },
    10325: (_mwm, _mwn, _mwo) => {
        'use strict';
        var _mwp = null;
        defineModule(_mwn);
        Object.defineProperty(_mwn, '__esModule', {
            'value': true
        }), _mwn.getSlot243PersonalEffect = void 0;
        var _mwq = _mwo(74496);
        _mwn.getSlot243PersonalEffect = function(_mwr) {
            var _mws = null,
                _mwt = new _mwq.SlotItemEffectModel(),
                _mwu = false,
                _mwv = new _mwq.SlotItemEffectModel();
            if (78 == _mwr.ctype && (_mwv.houg += 3, _mwv.kaih += 1, _mwu = true), 'ほうしょう' == _mwr.yomi && (_mwv.houg += 2, _mwu = true), 0 == _mwu) return _mwt;
            var _mww = _mwr.get_slotnums(243);
            return _mwt.add(_mwv.multiply(_mww)), _mwt;
        };
    },
    351: (_mwx, _mwy, _mwz) => {
        'use strict';
        var _mx0 = null;
        defineModule(_mwy);
        Object.defineProperty(_mwy, '__esModule', {
            'value': true
        }), _mwy.getSlot244PersonalEffect = void 0;
        var _mx1 = _mwz(74496);
        _mwy.getSlot244PersonalEffect = function(_mx2) {
            var _mx3 = null,
                _mx4 = new _mx1.SlotItemEffectModel(),
                _mx5 = false,
                _mx6 = new _mx1.SlotItemEffectModel(),
                _mx7 = 0;
            if (78 == _mx2.ctype && (_mx6.houg += 4, _mx6.kaih += 2, _mx5 = true, _mx7 = 1), 'ほうしょう' == _mx2.yomi && (_mx6.houg += 3, _mx5 = true, _mx7 = 2), 0 == _mx5) return _mx4;
            var _mx8 = _mx2.get_slotnums(244);
            if (_mx4.add(_mx6.multiply(_mx8)), 0 == _mx7) return _mx4;
            var _mx9 = _mx2.get_each_level_over_nums([244]).slot[244];
            return 1 == _mx7 ? (_mx9[3] >= 1 && (_mx4.houg += 1 * _mx9[3]), _mx9[5] >= 1 && (_mx4.houm += 1 * _mx9[5]), _mx9[7] >= 1 && (_mx4.houg += 1 * _mx9[7]), _mx9[8] >= 1 && (_mx4.kaih += 1 * _mx9[8]), _mx9[9] >= 1 && (_mx4.houm += 1 * _mx9[9]), _mx9[10] >= 1 && (_mx4.houg += 1 * _mx9[10])) : 2 == _mx7 && (_mx9[3] >= 1 && (_mx4.kaih += 1 * _mx9[3]), _mx9[7] >= 1 && (_mx4.houg += 1 * _mx9[7]), _mx9[9] >= 1 && (_mx4.houm += 1 * _mx9[9]), _mx9[10] >= 1 && (_mx4.houg += 1 * _mx9[10])), _mx4;
        };
    },
    61977: (_mxa, _mxb, _mxc) => {
        'use strict';
        var _mxd = null;
        defineModule(_mxb);
        Object.defineProperty(_mxb, '__esModule', {
            'value': true
        }), _mxb.getSlot247PersonalEffect = void 0;
        var _mxe = _mxc(74496);
        _mxb.getSlot247PersonalEffect = function(_mxf) {
            var _mxg = null,
                _mxh = new _mxe.SlotItemEffectModel(),
                _mxi = false,
                _mxj = new _mxe.SlotItemEffectModel(),
                _mxk = 0;
            if ('フランス' == _mxf.getCountryName() && (_mxj.houg += 2, _mxj.houm += 2, _mxi = true, _mxk = 1), 0 == _mxi) return _mxh;
            var _mxl = _mxf.get_slotnums(247);
            if (_mxh.add(_mxj.multiply(_mxl)), 0 == _mxk) return _mxh;
            var _mxm = _mxf.get_each_level_nums(247),
                _mxn = 0,
                _mxo = 0;
            _mxk > 0 && _mxm.forEach(function(_mxp, _mxq) {
                _mxq >= 4 && (_mxn += _mxp), _mxq >= 8 && (_mxo += _mxp);
            });
            var _mxr = _mxm[10];
            return 1 == _mxk && (_mxn >= 1 && (_mxh.houg += 1 * _mxn, _mxh.houm += 1 * _mxn), _mxo >= 1 && (_mxh.kaih += 1 * _mxo, _mxh.houg += 1 * _mxo, _mxh.houm += 1 * _mxo), _mxr >= 1 && (_mxh.kaih += 1 * _mxr, _mxh.houm += 1 * _mxr)), _mxh;
        };
    },
    96580: (_mxs, _mxt, _mxu) => {
        'use strict';
        var _mxv = null;
        defineModule(_mxt);
        Object.defineProperty(_mxt, '__esModule', {
            'value': true
        }), _mxt.getSlot252PersonalEffect = void 0;
        var _mxw = _mxu(74496);
        _mxt.getSlot252PersonalEffect = function(_mxx) {
            var _mxy = null,
                _mxz = new _mxw.SlotItemEffectModel(),
                _my0 = (new _mxw.SlotItemEffectModel(), 0);
            if (78 != _mxx.ctype && 112 != _mxx.ctype || (_my0 = 1), 0 == _my0) return _mxz;
            var _my1 = _mxx.get_each_level_over_nums([252]).slot[252];
            return 1 == _my0 && (_my1[4] >= 1 && (_mxz.kaih += 1 * _my1[4]), _my1[6] >= 1 && (_mxz.houm += 1 * _my1[6]), _my1[7] >= 1 && (_mxz.houg += 1 * _my1[7]), _my1[8] >= 1 && (_mxz.kaih += 1 * _my1[8]), _my1[9] >= 1 && (_mxz.houm += 1 * _my1[9]), _my1[10] >= 1 && (_mxz.houg += 1 * _my1[10])), _mxz;
        };
    },
    31797: function(_my2, _my3, _my4) {
        'use strict';
        var _my5 = null;
        var _my6 = this && this.__importDefault || function(_my7) {
            var _my8 = null;
            return _my7 && _my7.__esModule ? _my7 : {
                'default': _my7
            };
        };
        defineModule(_my3);
        Object.defineProperty(_my3, '__esModule', {
            'value': true
        }), _my3.getSlot266PersonalEffect2 = _my3.getSlot266PersonalEffect = void 0;
        var _my9 = _my4(74496),
            _mya = _my6(_my4(18622));
        _my3.getSlot266PersonalEffect = function(_myb) {
            var _myc = null,
                _myd = new _my9.SlotItemEffectModel(),
                _mye = false;
            if (566 != _myb.ship_id && 567 != _myb.ship_id && 568 != _myb.ship_id && 656 != _myb.ship_id && 670 != _myb.ship_id && 915 != _myb.ship_id && 951 != _myb.ship_id || (_mye = true), 0 == _mye) return _myd;
            var _myf = _myb.get_slotnums(266);
            return 30 == _myb.ctype && (1 == _myf ? _myd.houg = 1 : _myf >= 2 && (_myd.houg = 3)), _myd;
        }, _my3.getSlot266PersonalEffect2 = function(_myg) {
            var _myh = null,
                _myi = new _my9.SlotItemEffectModel(),
                _myj = 0,
                _myk = new _my9.SlotItemEffectModel();
            if (23 == _myg.ctype || 18 == _myg.ctype ? (_myk.houg = 1, _myj = 1) : 30 == _myg.ctype && (_myk.houg = 1, _myj = 2), ('しぐれ' == _myg.yomi || 'ゆきかぜ' == _myg.yomi || 'いそかぜ' == _myg.yomi) && (_myk.kaih = 1), 961 == _myg.ship_id && (_myk.houg += 1, _myk.houm += 1, _myk.kaih += 1), !_myk.exists()) return _myi;
            var _myl = _myg.get_slotnums(266);
            if (_myi = _myk.multiply(_myl), 0 == _myj) return _myi;
            for (var _mym = 0, _myn = 0, _myo = _myg.have_slot_ids(); _myn < _myo.length; _myn++) {
                var _myp = _myo[_myn],
                    _myq = _mya.default.model.slot.getMst(_myp),
                    _myr = _myq.equipType;
                (12 == _myr || 13 == _myr) && _myq.sakuteki >= 5 && (_mym += _myg.get_slotnums(parseInt(_myp)));
            }
            return _mym > 0 && (1 == _myj ? (_myi.houg += 1, _myi.kaih += 1, _myi.raig += 3) : 2 == _myj && (_myi.houg += 2, _myi.kaih += 1, _myi.raig += 3)), _myi;
        };
    },
    45738: function(_mys, _myt, _myu) {
        'use strict';
        var _myv = null;
        var _myw = this && this.__importDefault || function(_myx) {
            var _myy = null;
            return _myx && _myx.__esModule ? _myx : {
                'default': _myx
            };
        };
        defineModule(_myt);
        Object.defineProperty(_myt, '__esModule', {
            'value': true
        }), _myt.getSlot267PersonalEffect2 = _myt.getSlot267PersonalEffect = void 0;
        var _myz = _myu(74496),
            _mz0 = _myw(_myu(18622));
        _myt.getSlot267PersonalEffect = function(_mz1) {
            var _mz2 = null,
                _mz3 = new _myz.SlotItemEffectModel(),
                _mz4 = 0,
                _mz5 = 0;
            if (38 == _mz1.ctype || 22 == _mz1.ctype) _mz4 = 2, _mz5 = 1;
            else {
                if (30 != _mz1.ctype) return _mz3;
                _mz4 = 1, _mz5 = 1;
            }
            var _mz6 = _mz1.get_slotnums(267) + _mz1.get_slotnums(366);
            return _mz3.houg = _mz4 * _mz6, _mz3.kaih = _mz5 * _mz6, _mz3;
        }, _myt.getSlot267PersonalEffect2 = function(_mz7) {
            var _mz8 = null,
                _mz9 = new _myz.SlotItemEffectModel(),
                _mza = _mz7.get_slotnums(267),
                _mzb = _mz7.get_slotnums(366),
                _mzc = _mza + _mzb;
            if (566 != _mz7.ship_id && 567 != _mz7.ship_id && 568 != _mz7.ship_id && 656 != _mz7.ship_id && 670 != _mz7.ship_id && 915 != _mz7.ship_id && 951 != _mz7.ship_id || (_mza > 0 && (_mz9.houg += 1), 1 == _mzb ? (_mz9.houg += 1, _mz9.tyku += 2) : _mzb >= 2 && (_mz9.houg += 2, _mz9.tyku += 4)), 38 != _mz7.ctype && 229 != _mz7.ship_id && [648, 961].indexOf(_mz7.ship_id) < 0) return _mz9;
            var _mzd = false,
                _mze = false,
                _mzf = false,
                _mzg = false,
                _mzh = false,
                _mzi = false,
                _mzj = false,
                _mzk = false,
                _mzl = false,
                _mzm = false,
                _mzn = false,
                _mzo = 0,
                _mzp = 0,
                _mzq = 0;
            543 == _mz7.ship_id ? (_mz9.houg = 1 * _mzc, _mze = true) : 229 == _mz7.ship_id ? _mzf = true : 542 == _mz7.ship_id ? (_mz9.houg = 1 * _mzc, _mzg = true) : 563 == _mz7.ship_id ? (_mz9.houg = 1 * _mzc, _mzh = true) : 564 == _mz7.ship_id ? (_mz9.houg = 1 * _mzc, _mzi = true) : 578 == _mz7.ship_id ? (_mz9.houg = 1 * _mzc, _mzj = true) : 569 == _mz7.ship_id ? (_mz9.houg = 1 * _mzc, _mzk = true) : 649 == _mz7.ship_id ? (_mz9.houg = 2 * _mzc, _mzm = true) : 955 == _mz7.ship_id || 960 == _mz7.ship_id ? (_mz9.houg = 2 * _mzc, _mzn = true) : 648 == _mz7.ship_id ? (_mz9.houg = 2 * _mzc, _mzl = true, _mzo = 1, _mzp = 1, _mzq = 1) : 961 == _mz7.ship_id && (_mz9.houg = 2 * _mzc, _mzd = true, _mzo = 1, _mzp = 1, _mzq = 1);
            for (var _mzr = 0, _mzs = 0, _mzt = 0, _mzu = _mz7.have_slot_ids(); _mzt < _mzu.length; _mzt++) {
                var _mzv = _mzu[_mzt],
                    _mzw = _mz0.default.model.slot.getMst(_mzv),
                    _mzx = _mzw.equipType;
                12 != _mzx && 13 != _mzx || (_mzw.sakuteki >= 5 && (_mzr += _mz7.get_slotnums(parseInt(_mzv))), _mzw.taiku >= 2 && (_mzs += _mz7.get_slotnums(parseInt(_mzv))));
            }
            if (_mzr > 0 && _mza > 0 && ((38 == _mz7.ctype || _mzl) && (_mz9.houg += 2, _mz9.raig += 3, _mz9.kaih += 1, 955 == _mz7.ship_id ? _mz9.raig -= 1 : 960 == _mz7.ship_id && (_mz9.raig -= 2)), (_mzg || _mze || _mzf || _mzh || _mzi || _mzj || _mzk || _mzl || _mzm || _mzn) && (_mz9.houg += 1, _mz9.raig += 3, _mz9.kaih += 2)), _mzb > 0 && (_mzg || _mze || _mzh || _mzi || _mzj || _mzf || _mzk || _mzl || _mzm || _mzd || _mzn)) {
                1 == _mzb ? (_mz9.tyku += 3, _mz9.houg += 1, _mz9.houm += 1) : _mzb >= 2 && (_mz9.tyku += 5, _mz9.houg += 3, _mz9.houm += 1, 955 == _mz7.ship_id && (_mz9.houg += 1)), (_mzk || _mzl) && (_mz9.houg += 1, _mz9.tyku += 2), _mzr > 0 && (_mz9.houg += 2, _mz9.kaih += 2, _mz9.raig += 4, _mz9.houm += 2, 960 == _mz7.ship_id && (_mz9.raig -= 1, _mz9.houg += 1)), _mzs > 0 && (_mz9.houg += 1, _mz9.kaih += 3, _mz9.tyku += 5, _mz9.houm += 1);
                var _mzy = _mz7.get_each_level_nums(366),
                    _mzz = 0,
                    _n00 = 0;
                _mzy.forEach(function(_n01, _n02) {
                    _n02 >= 5 && (_mzz += _n01), _n02 >= 8 && (_n00 += _n01);
                }), _mzz >= 1 && (_mz9.houm += 1 * _mzz), _n00 >= 1 && (_mz9.houg += 1 * _n00);
                var _n03 = _mzy[10];
                _n03 >= 1 && (_mz9.houm += 1 * _n03);
            }
            var _n04 = _mz7.get_slotnums(129),
                _n05 = _mz7.get_slotnums(74),
                _n06 = _mz7.get_slotnums(412);
            return _mzo > 0 && _n04 > 0 && 1 == _mzo && (_mz9.houg += 2, _mz9.kaih += 3, _mz9.tyku += 2), _mzq > 0 && _n06 > 0 && 1 == _mzq && (_mz9.houg += 2, _mz9.kaih += 3, _mz9.tyku += 2), _mzp > 0 && _n05 > 0 && 1 == _mzp && (_mz9.houg += 3, _mz9.kaih -= 3), _mz9;
        };
    },
    23934: (_n07, _n08, _n09) => {
        'use strict';
        var _n0a = null;
        defineModule(_n08);
        Object.defineProperty(_n08, '__esModule', {
            'value': true
        }), _n08.getSlot271PersonalEffect = void 0;
        var _n0b = _n09(74496);
        _n08.getSlot271PersonalEffect = function(_n0c) {
            var _n0d = null,
                _n0e = new _n0b.SlotItemEffectModel(),
                _n0f = 0;
            if (508 != _n0c.ship_id && 509 != _n0c.ship_id && 888 != _n0c.ship_id && 883 != _n0c.ship_id || (_n0f = 1), 0 == _n0f) return _n0e;
            var _n0g = _n0c.get_each_level_nums(271),
                _n0h = 0,
                _n0i = 0,
                _n0j = 0,
                _n0k = _n0g[10];
            return _n0f > 0 && _n0g.forEach(function(_n0l, _n0m) {
                _n0m >= 4 && (_n0h += _n0l), _n0m >= 6 && (_n0i += _n0l), _n0m >= 8 && (_n0j += _n0l);
            }), 1 == _n0f && (_n0h >= 1 && (_n0e.houg += 1 * _n0h), _n0i >= 1 && (_n0e.tyku += 2 * _n0i), _n0j >= 1 && (_n0e.kaih += 2 * _n0j), _n0k >= 1 && (_n0e.houg += 1 * _n0k)), _n0e;
        };
    },
    17712: function(_n0n, _n0o, _n0p) {
        'use strict';
        var _n0q = null;
        var _n0r = this && this.__importDefault || function(_n0s) {
            var _n0t = null;
            return _n0s && _n0s.__esModule ? _n0s : {
                'default': _n0s
            };
        };
        defineModule(_n0o);
        Object.defineProperty(_n0o, '__esModule', {
            'value': true
        }), _n0o.getSlot275PersonalEffect = void 0;
        var _n0u = _n0p(74496),
            _n0v = _n0r(_n0p(18622));
        _n0o.getSlot275PersonalEffect = function(_n0w) {
            var _n0x = null,
                _n0y = new _n0u.SlotItemEffectModel(),
                _n0z = false,
                _n10 = new _n0u.SlotItemEffectModel(),
                _n11 = 0,
                _n12 = 0;
            if (894 != _n0w.ship_id && 899 != _n0w.ship_id || (_n10.houg += 1, _n10.tyku += 3, _n10.kaih += 2, _n0z = true, _n12 = 1, _n11 = 1), 0 == _n0z) return _n0y;
            var _n13 = _n0w.get_slotnums(275);
            _n0y.add(_n10.multiply(_n13));
            var _n14 = 0;
            if (_n11 > 0)
                for (var _n15 = 0, _n16 = _n0w.have_slot_ids(); _n15 < _n16.length; _n15++) {
                    var _n17 = _n16[_n15],
                        _n18 = _n0v.default.model.slot.getMst(_n17),
                        _n19 = _n18.equipType;
                    12 != _n19 && 13 != _n19 || (_n18.sakuteki >= 5 && _n0w.get_slotnums(parseInt(_n17)), _n18.taiku >= 2 && (_n14 += _n0w.get_slotnums(parseInt(_n17))));
                }
            if (1 == _n11 && _n14 > 0 && (_n0y.tyku += 3, _n0y.kaih += 3), 0 == _n12) return _n0y;
            var _n1a = _n0w.get_each_level_nums(275),
                _n1b = 0,
                _n1c = _n1a[10];
            return _n12 > 0 && _n1a.forEach(function(_n1d, _n1e) {
                _n1e >= 7 && (_n1b += _n1d);
            }), 1 == _n12 && (_n1b > 0 && (_n0y.tyku += 1 * _n1b, _n0y.kaih += 1 * _n1b), _n1c > 0 && (_n0y.houg += 1 * _n1c, _n0y.tyku += 1 * _n1c, _n0y.houm += 1 * _n1c)), _n0y;
        };
    },
    93733: (_n1f, _n1g, _n1h) => {
        'use strict';
        var _n1i = null;
        defineModule(_n1g);
        Object.defineProperty(_n1g, '__esModule', {
            'value': true
        }), _n1g.getSlot277PersonalEffect = void 0;
        var _n1j = _n1h(74496);
        _n1g.getSlot277PersonalEffect = function(_n1k) {
            var _n1l = null,
                _n1m = new _n1j.SlotItemEffectModel(),
                _n1n = false,
                _n1o = new _n1j.SlotItemEffectModel();
            if ('アメリカ' != _n1k.getCountryName() && 67 != _n1k.ctype && 78 != _n1k.ctype && 82 != _n1k.ctype && 88 != _n1k.ctype && 108 != _n1k.ctype && 112 != _n1k.ctype || (_n1o.houg += 1, _n1o.kaih += 1, _n1n = true), 83 == _n1k.ctype && (_n1o.houg += 1, _n1o.kaih += 1, _n1o.tyku += 1, _n1n = true), 0 == _n1n) return _n1m;
            var _n1p = _n1k.get_slotnums(277);
            return _n1m.add(_n1o.multiply(_n1p)), _n1m;
        };
    },
    34718: (_n1q, _n1r, _n1s) => {
        'use strict';
        var _n1t = null;
        defineModule(_n1r);
        Object.defineProperty(_n1r, '__esModule', {
            'value': true
        }), _n1r.getSlot278PersonalEffect = void 0;
        var _n1u = _n1s(74496);
        _n1r.getSlot278PersonalEffect = function(_n1v) {
            var _n1w = null,
                _n1x = new _n1u.SlotItemEffectModel();
            return 'アメリカ' == _n1v.getCountryName() ? (_n1x.tyku += 1, _n1x.kaih += 3, _n1x.saku += 1) : 67 == _n1v.ctype || 78 == _n1v.ctype || 82 == _n1v.ctype || 88 == _n1v.ctype || 108 == _n1v.ctype || 112 == _n1v.ctype ? (_n1x.tyku += 1, _n1x.kaih += 2) : 96 == _n1v.ctype && (_n1x.tyku += 1, _n1x.kaih += 1), _n1x;
        };
    },
    69245: (_n1y, _n1z, _n20) => {
        'use strict';
        var _n21 = null;
        defineModule(_n1z);
        Object.defineProperty(_n1z, '__esModule', {
            'value': true
        }), _n1z.getSlot279PersonalEffect = void 0;
        var _n22 = _n20(74496);
        _n1z.getSlot279PersonalEffect = function(_n23) {
            var _n24 = null,
                _n25 = new _n22.SlotItemEffectModel();
            return 'アメリカ' == _n23.getCountryName() ? (_n25.houg += 2, _n25.tyku += 2, _n25.kaih += 3, _n25.saku += 2) : 67 == _n23.ctype || 78 == _n23.ctype || 82 == _n23.ctype || 88 == _n23.ctype || 108 == _n23.ctype || 112 == _n23.ctype ? (_n25.houg += 1, _n25.tyku += 1, _n25.kaih += 2, _n25.saku += 1) : 96 == _n23.ctype && (_n25.houg += 1, _n25.tyku += 1, _n25.kaih += 1), _n25;
        };
    },
    18478: (_n26, _n27, _n28) => {
        'use strict';
        var _n29 = null;
        defineModule(_n27);
        Object.defineProperty(_n27, '__esModule', {
            'value': true
        }), _n27.getSlot282PersonalEffect = void 0;
        var _n2a = _n28(74496);
        _n27.getSlot282PersonalEffect = function(_n2b) {
            var _n2c = null,
                _n2d = new _n2a.SlotItemEffectModel(),
                _n2e = false,
                _n2f = false;
            147 != _n2b.ship_id && 73 != _n2b.ctype && 81 != _n2b.ctype || (_n2e = true), 'ゆうばり' == _n2b.yomi && (_n2f = true);
            var _n2g = new _n2a.SlotItemEffectModel();
            if ((_n2e || _n2f) && (_n2g.houg += 2, _n2g.souk += 1), !_n2g.exists()) return _n2d;
            var _n2h = _n2b.get_slotnums(282);
            return _n2d = _n2g.multiply(_n2h);
        };
    },
    2899: (_n2i, _n2j, _n2k) => {
        'use strict';
        var _n2l = null;
        defineModule(_n2j);
        Object.defineProperty(_n2j, '__esModule', {
            'value': true
        }), _n2j.getSlot283PersonalEffect = void 0;
        var _n2m = _n2k(74496);
        _n2j.getSlot283PersonalEffect = function(_n2n) {
            var _n2o = null,
                _n2p = new _n2m.SlotItemEffectModel(),
                _n2q = false;
            147 != _n2n.ship_id && 73 != _n2n.ctype && 81 != _n2n.ctype || (_n2q = true);
            var _n2r = new _n2m.SlotItemEffectModel();
            if (_n2q && (_n2r.raig += 3, _n2r.houg += 1, _n2r.souk += 1), !_n2r.exists()) return _n2p;
            var _n2s = _n2n.get_slotnums(283);
            return _n2p = _n2r.multiply(_n2s);
        };
    },
    57120: (_n2t, _n2u, _n2v) => {
        'use strict';
        var _n2w = null;
        defineModule(_n2u);
        Object.defineProperty(_n2u, '__esModule', {
            'value': true
        }), _n2u.getSlot285PersonalEffect = void 0;
        var _n2x = _n2v(74496);
        _n2u.getSlot285PersonalEffect = function(_n2y) {
            var _n2z = null,
                _n30 = new _n2x.SlotItemEffectModel(),
                _n31 = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_n2y.ship_id) >= 0 && (_n31 = true), 0 == _n31) return _n30;
            var _n32 = _n2y.get_each_level_nums(285),
                _n33 = _n2y.get_slotnums(285);
            _n33 > 2 && (_n33 = 2), _n30.raig = 2 * _n33, _n30.kaih = 1 * _n33;
            var _n34 = _n32[10];
            1 == _n34 && (_n30.houg += 1, _n30.raig += 1), _n34 >= 2 && (_n30.houg += 2, _n30.raig += 1), _n34 >= 3 && (_n30.raig += 3);
            var _n35 = _n2y.get_slotnums(285);
            return 903 == _n2y.ship_id ? (_n35 >= 2 && (_n30.raig += 2), _n35 >= 3 && (_n30.raig += 2)) : 908 != _n2y.ship_id && 959 != _n2y.ship_id || (_n35 >= 2 && (_n30.raig += 1), _n35 >= 3 && (_n30.raig += 1)), _n30;
        };
    },
    74985: function(_n36, _n37, _n38) {
        'use strict';
        var _n39 = null;
        var _n3a = this && this.__importDefault || function(_n3b) {
            var _n3c = null;
            return _n3b && _n3b.__esModule ? _n3b : {
                'default': _n3b
            };
        };
        defineModule(_n37);
        Object.defineProperty(_n37, '__esModule', {
            'value': true
        }), _n37.getSlot286PersonalEffect3 = _n37.getSlot286PersonalEffect2 = _n37.getSlot286PersonalEffect = void 0;
        var _n3d = _n38(74496),
            _n3e = _n3a(_n38(18622));
        _n37.getSlot286PersonalEffect = function(_n3f) {
            var _n3g = null,
                _n3h = new _n3d.SlotItemEffectModel(),
                _n3i = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975].indexOf(_n3f.ship_id) >= 0 && (_n3i = true), 0 == _n3i) return _n3h;
            var _n3j = _n3f.get_each_level_nums(286),
                _n3k = _n3f.get_slotnums(286);
            _n3k > 2 && (_n3k = 2), _n3h.raig = 2 * _n3k, _n3h.kaih = 1 * _n3k;
            var _n3l = _n3j[10];
            if (1 == _n3l ? _n3h.houg = _n3h.houg + 1 : _n3l >= 2 && (_n3h.houg = _n3h.houg + 2), 30 == _n3f.ctype || 961 == _n3f.ship_id) {
                var _n3m = _n3j[5] + _n3j[6] + _n3j[7] + _n3j[8] + _n3j[9] + _n3j[10];
                1 == _n3m ? _n3h.raig = _n3h.raig + 1 : _n3m >= 2 && (_n3h.raig = _n3h.raig + 2);
            }
            return _n3h;
        }, _n37.getSlot286PersonalEffect2 = function(_n3n) {
            var _n3o = null,
                _n3p = new _n3d.SlotItemEffectModel(),
                _n3q = false,
                _n3r = 0;
            if ('たけ' == _n3n.yomi && (_n3q = true, _n3r = 1), 0 == _n3q) return _n3p;
            var _n3s = _n3n.get_each_level_nums(286),
                _n3t = 0;
            return _n3r > 0 && _n3s.forEach(function(_n3u, _n3v) {
                _n3v >= 7 && (_n3t += _n3u);
            }), 'たけ' == _n3n.yomi && (_n3p.raig += 7, _n3p.kaih += 2, _n3t >= 1 && (_n3p.raig += 2), _n3s[10] >= 1 && (_n3p.raig += 2)), _n3p;
        }, _n37.getSlot286PersonalEffect3 = function(_n3w) {
            var _n3x = null,
                _n3y = new _n3d.SlotItemEffectModel(),
                _n3z = false,
                _n40 = new _n3d.SlotItemEffectModel(),
                _n41 = 0;
            if (662 != _n3w.ship_id && 663 != _n3w.ship_id && 668 != _n3w.ship_id || (_n40.raig += 2, _n3z = true, _n41 = 1), 0 == _n3z) return _n3y;
            var _n42 = _n3w.get_slotnums(286);
            _n3y.add(_n40.multiply(_n42));
            for (var _n43 = 0, _n44 = 0, _n45 = _n3w.have_slot_ids(); _n44 < _n45.length; _n44++) {
                var _n46 = _n45[_n44],
                    _n47 = _n3e.default.model.slot.getMst(_n46),
                    _n48 = _n47.equipType;
                12 != _n48 && 13 != _n48 || (_n47.sakuteki >= 5 && (_n43 += _n3w.get_slotnums(parseInt(_n46))), _n47.taiku >= 2 && _n3w.get_slotnums(parseInt(_n46)));
            }
            return _n43 >= 1 && 1 == _n41 && (_n3y.raig += 3, _n3y.kaih += 2), _n3y;
        };
    },
    9234: (_n49, _n4a, _n4b) => {
        'use strict';
        var _n4c = null;
        defineModule(_n4a);
        Object.defineProperty(_n4a, '__esModule', {
            'value': true
        }), _n4a.getSlot287PersonalEffect = void 0;
        var _n4d = _n4b(74496);
        _n4a.getSlot287PersonalEffect = function(_n4e) {
            var _n4f = null,
                _n4g = new _n4d.SlotItemEffectModel(),
                _n4h = new _n4d.SlotItemEffectModel(),
                _n4i = false;
            if (488 == _n4e.ship_id || 141 == _n4e.ship_id || 160 == _n4e.ship_id || 624 == _n4e.ship_id || 656 == _n4e.ship_id ? (_n4h.tais = 1, _n4h.kaih = 1, _n4i = true) : 662 != _n4e.ship_id && 961 != _n4e.ship_id || (_n4h.tais = 3, _n4i = true), 0 == _n4i) return _n4g;
            var _n4j = _n4e.get_slotnums(287);
            return _n4g = _n4h.multiply(_n4j);
        };
    },
    30802: (_n4k, _n4l, _n4m) => {
        'use strict';
        var _n4n = null;
        defineModule(_n4l);
        Object.defineProperty(_n4l, '__esModule', {
            'value': true
        }), _n4l.getSlot288PersonalEffect = void 0;
        var _n4o = _n4m(74496);
        _n4l.getSlot288PersonalEffect = function(_n4p) {
            var _n4q = null,
                _n4r = new _n4o.SlotItemEffectModel(),
                _n4s = new _n4o.SlotItemEffectModel(),
                _n4t = false;
            if (488 == _n4p.ship_id || 141 == _n4p.ship_id || 160 == _n4p.ship_id || 656 == _n4p.ship_id ? (_n4s.tais = 2, _n4s.kaih = 1, _n4t = true) : 624 == _n4p.ship_id ? (_n4s.houg = 1, _n4s.tais = 3, _n4s.kaih = 2, _n4t = true) : 662 != _n4p.ship_id && 961 != _n4p.ship_id || (_n4s.tais = 4, _n4s.kaih = 1, _n4t = true), 0 == _n4t) return _n4r;
            var _n4u = _n4p.get_slotnums(288);
            return _n4r = _n4s.multiply(_n4u);
        };
    },
    97002: function(_n4v, _n4w, _n4x) {
        'use strict';
        var _n4y = null;
        var _n4z = this && this.__importDefault || function(_n50) {
            var _n51 = null;
            return _n50 && _n50.__esModule ? _n50 : {
                'default': _n50
            };
        };
        defineModule(_n4w);
        Object.defineProperty(_n4w, '__esModule', {
            'value': true
        }), _n4w.getSlot289PersonalEffect = void 0;
        var _n52 = _n4x(74496),
            _n53 = _n4z(_n4x(18622));
        _n4w.getSlot289PersonalEffect = function(_n54) {
            var _n55 = null,
                _n56 = new _n52.SlotItemEffectModel(),
                _n57 = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n58 = 0,
                _n59 = new _n52.SlotItemEffectModel();
            if (149 == _n54.ship_id || 591 == _n54.ship_id) _n59.houg = 2, _n59.tyku = 1, _n58 = 1;
            else {
                if (150 == _n54.ship_id || 592 == _n54.ship_id) _n59.houg = 1;
                else {
                    if (152 == _n54.ship_id) _n59.houg = 1;
                    else {
                        if (151 != _n54.ship_id && 593 != _n54.ship_id && 954 != _n54.ship_id) return _n56;
                        _n59.houg = 2, _n59.tyku = 2, _n59.kaih = 2, _n58 = 1;
                    }
                }
            }
            var _n5a = _n54.get_slotnums(289);
            if (_n56 = _n59.multiply(_n5a), _n57[_n54.ship_id]) {
                var _n5b = _n54.get_each_level_nums(289),
                    _n5c = new Array();
                _n5b.forEach(function(_n5d, _n5e) {
                    var _n5f = null;
                    for (var _n5g = 1; _n5g <= _n54.SLOT_LEVEL_MAX; _n5g++) _n5e >= _n5g && (null == _n5c[_n5g] && (_n5c[_n5g] = 0), _n5c[_n5g] += _n5d);
                });
                var _n5h = _n57[_n54.ship_id];
                1 == _n5h ? (_n5c[1] >= 1 && (_n56.kaih += 1 * _n5c[1]), _n5c[3] >= 1 && (_n56.tyku = _n56.tyku + 1 * _n5c[3]), _n5c[5] >= 1 && (_n56.houg = _n56.houg + 1 * _n5c[5]), _n5c[7] >= 1 && (_n56.kaih += 1 * _n5c[7]), _n5c[8] >= 1 && (_n56.tyku += 1 * _n5c[8]), _n5c[9] >= 1 && (_n56.houg += 1 * _n5c[9]), _n5c[10] >= 1 && (_n56.kaih += 1 * _n5c[10])) : 2 == _n5h ? (_n5c[4] >= 1 && (_n56.tyku += 1 * _n5c[4]), _n5c[6] >= 1 && (_n56.kaih += 1 * _n5c[6]), _n5c[8] >= 1 && (_n56.houg += 1 * _n5c[8]), _n5c[10] >= 1 && (_n56.kaih += 1 * _n5c[10])) : 3 == _n5h && (_n5c[7] >= 1 && (_n56.tyku += 1 * _n5c[7]), _n5c[9] >= 1 && (_n56.houg += 1 * _n5c[9]), _n5c[10] >= 1 && (_n56.kaih += 1 * _n5c[10]));
            }
            if (0 == _n58) return _n56;
            for (var _n5i = 0, _n5j = 0, _n5k = _n54.have_slot_ids(); _n5j < _n5k.length; _n5j++) {
                var _n5l = _n5k[_n5j],
                    _n5m = _n53.default.model.slot.getMst(_n5l),
                    _n5n = _n5m.equipType;
                (12 == _n5n || 13 == _n5n) && _n5m.sakuteki >= 5 && (_n5i += _n54.get_slotnums(parseInt(_n5l)));
            }
            return _n5i > 0 && (_n56.houg += 2, _n56.kaih += 2), _n56;
        };
    },
    16748: function(_n5o, _n5p, _n5q) {
        'use strict';
        var _n5r = null;
        var _n5s = this && this.__importDefault || function(_n5t) {
            var _n5u = null;
            return _n5t && _n5t.__esModule ? _n5t : {
                'default': _n5t
            };
        };
        defineModule(_n5p);
        Object.defineProperty(_n5p, '__esModule', {
            'value': true
        }), _n5p.getSlot290PersonalEffect = void 0;
        var _n5v = _n5q(74496),
            _n5w = _n5s(_n5q(18622));
        _n5p.getSlot290PersonalEffect = function(_n5x) {
            var _n5y = null,
                _n5z = new _n5v.SlotItemEffectModel(),
                _n60 = 0,
                _n61 = new _n5v.SlotItemEffectModel();
            if (411 == _n5x.ship_id) _n61.houg = 1;
            else {
                if (412 == _n5x.ship_id) _n61.houg = 1;
                else {
                    if (82 == _n5x.ship_id) _n61.houg = 2, _n61.tyku = 2, _n61.kaih = 1, _n60 = 1;
                    else {
                        if (553 == _n5x.ship_id) _n61.houg = 3, _n61.tyku = 2, _n61.kaih = 1, _n61.houm = 3, _n60 = 1;
                        else {
                            if (88 == _n5x.ship_id) _n61.houg = 2, _n61.tyku = 2, _n61.kaih = 1, _n60 = 1;
                            else {
                                if (554 != _n5x.ship_id) return _n5z;
                                _n61.houg = 3, _n61.tyku = 2, _n61.kaih = 2, _n61.houm = 3, _n60 = 1;
                            }
                        }
                    }
                }
            }
            var _n62 = _n5x.get_slotnums(290);
            if (_n5z = _n61.multiply(_n62), 0 == _n60) return _n5z;
            for (var _n63 = 0, _n64 = 0, _n65 = _n5x.have_slot_ids(); _n64 < _n65.length; _n64++) {
                var _n66 = _n65[_n64],
                    _n67 = _n5w.default.model.slot.getMst(_n66),
                    _n68 = _n67.equipType;
                (12 == _n68 || 13 == _n68) && _n67.taiku >= 2 && (_n63 += _n5x.get_slotnums(parseInt(_n66)));
            }
            return _n63 > 0 && (_n5z.tyku += 2, _n5z.kaih += 3), _n5z;
        };
    },
    53618: (_n69, _n6a, _n6b) => {
        'use strict';
        var _n6c = null;
        defineModule(_n6a);
        Object.defineProperty(_n6a, '__esModule', {
            'value': true
        }), _n6a.getSlot291PersonalEffect = void 0;
        var _n6d = _n6b(74496);
        _n6a.getSlot291PersonalEffect = function(_n6e) {
            var _n6f = null,
                _n6g = new _n6d.SlotItemEffectModel(),
                _n6h = new _n6d.SlotItemEffectModel();
            if (553 == _n6e.ship_id) _n6h.houg = 6, _n6h.kaih = 1;
            else {
                if (554 != _n6e.ship_id) return _n6g;
                _n6h.houg = 6, _n6h.kaih = 1;
            }
            var _n6i = _n6e.get_slotnums(291);
            return _n6g = _n6h.multiply(_n6i);
        };
    },
    72573: (_n6j, _n6k, _n6l) => {
        'use strict';
        var _n6m = null;
        defineModule(_n6k);
        Object.defineProperty(_n6k, '__esModule', {
            'value': true
        }), _n6k.getSlot292PersonalEffect = void 0;
        var _n6n = _n6l(74496);
        _n6k.getSlot292PersonalEffect = function(_n6o) {
            var _n6p = null,
                _n6q = new _n6n.SlotItemEffectModel(),
                _n6r = new _n6n.SlotItemEffectModel();
            if (553 == _n6o.ship_id) _n6r.houg = 8, _n6r.kaih = 2, _n6r.tyku = 1;
            else {
                if (554 != _n6o.ship_id) return _n6q;
                _n6r.houg = 8, _n6r.kaih = 2, _n6r.tyku = 1;
            }
            var _n6s = _n6o.get_slotnums(292);
            return _n6q = _n6r.multiply(_n6s);
        };
    },
    8955: function(_n6t, _n6u, _n6v) {
        'use strict';
        var _n6w = null;
        var _n6x = this && this.__importDefault || function(_n6y) {
            var _n6z = null;
            return _n6y && _n6y.__esModule ? _n6y : {
                'default': _n6y
            };
        };
        defineModule(_n6u);
        Object.defineProperty(_n6u, '__esModule', {
            'value': true
        }), _n6u.getSlot293PersonalEffect = void 0;
        var _n70 = _n6v(74496),
            _n71 = _n6x(_n6v(18622));
        _n6u.getSlot293PersonalEffect = function(_n72) {
            var _n73 = null,
                _n74 = new _n70.SlotItemEffectModel(),
                _n75 = new _n70.SlotItemEffectModel(),
                _n76 = 0;
            if (66 == _n72.ctype || 28 == _n72.ctype) _n75.houg = 2, _n75.tyku = 1, _n75.kaih = 3, _n76 = 1;
            else {
                if (74 != _n72.ctype && 77 != _n72.ctype) return _n74;
                _n75.houg = 1, _n75.tyku = 1, _n75.kaih = 2, _n76 = 2;
            }
            var _n77 = _n72.get_slotnums(293);
            _n74 = _n75.multiply(_n77);
            for (var _n78 = 0, _n79 = 0, _n7a = _n72.have_slot_ids(); _n79 < _n7a.length; _n79++) {
                var _n7b = _n7a[_n79],
                    _n7c = _n71.default.model.slot.getMst(_n7b),
                    _n7d = _n7c.equipType;
                (12 == _n7d || 13 == _n7d) && _n7c.sakuteki >= 5 && (_n78 += _n72.get_slotnums(parseInt(_n7b)));
            }
            var _n7e = _n72.get_slotnums(174);
            return 1 == _n76 ? (_n78 > 0 && (_n74.houg += 2, _n74.kaih += 3, _n74.raig += 1), 1 == _n7e ? (_n74.houg += 2, _n74.raig += 4) : _n7e >= 2 && (_n74.houg += 3, _n74.raig += 7)) : 2 == _n76 && _n78 > 0 && (_n74.houg += 2, _n74.kaih += 3, _n74.tais += 1), _n74;
        };
    },
    98947: function(_n7f, _n7g, _n7h) {
        'use strict';
        var _n7i = null;
        var _n7j = this && this.__importDefault || function(_n7k) {
            var _n7l = null;
            return _n7k && _n7k.__esModule ? _n7k : {
                'default': _n7k
            };
        };
        defineModule(_n7g);
        Object.defineProperty(_n7g, '__esModule', {
            'value': true
        }), _n7g.getSlot294PersonalEffect = void 0;
        var _n7m = _n7h(74496),
            _n7n = _n7j(_n7h(18622));
        _n7g.getSlot294PersonalEffect = function(_n7o) {
            var _n7p = null,
                _n7q = new _n7m.SlotItemEffectModel(),
                _n7r = new _n7m.SlotItemEffectModel(),
                _n7s = 0,
                _n7t = _n7o.get_slotnums(294);
            if (12 != _n7o.ctype && 1 != _n7o.ctype && 5 != _n7o.ctype) return _n7q;
            _n7r.houg = 1, 959 == _n7o.ship_id && (_n7r.houg += 1, _n7t >= 2 && (_n7q.houg += 2), _n7t >= 3 && (_n7q.houg += 3), _n7s = 1), _n7q.add(_n7r.multiply(_n7t));
            for (var _n7u = 0, _n7v = 0, _n7w = _n7o.have_slot_ids(); _n7v < _n7w.length; _n7v++) {
                var _n7x = _n7w[_n7v],
                    _n7y = _n7n.default.model.slot.getMst(_n7x),
                    _n7z = _n7y.equipType;
                (12 == _n7z || 13 == _n7z) && _n7y.sakuteki >= 5 && (_n7u += _n7o.get_slotnums(parseInt(_n7x)));
            }
            var _n80 = _n7o.get_slotnums(13),
                _n81 = _n7o.get_slotnums(125),
                _n82 = _n7o.get_slotnums(285),
                _n83 = _n80 + _n81 + _n82;
            if (_n7u > 0 && (_n7q.houg += 3, _n7q.kaih += 2, _n7q.raig += 1), 1 == _n83 ? (_n7q.houg += 1, _n7q.raig += 3) : _n83 >= 2 && (_n7q.houg += 2, _n7q.raig += 5), _n82 >= 1 && (_n7q.raig += 1), 0 == _n7s) return _n7q;
            var _n84 = _n7o.get_each_level_nums(294),
                _n85 = [];
            return _n7s > 0 && _n84.forEach(function(_n86, _n87) {
                var _n88 = null;
                for (var _n89 = 1; _n89 <= _n7o.SLOT_LEVEL_MAX; _n89++) null == _n85[_n89] && (_n85[_n89] = 0), _n87 >= _n89 && (_n85[_n89] += _n86);
            }), 1 == _n7s && (_n85[6] >= 1 && (_n7q.houm += 4 * _n85[6]), _n85[7] >= 1 && (_n7q.houg = _n7q.houg + 6 * _n85[7]), _n85[8] >= 1 && (_n7q.houg = _n7q.houg + 1 * _n85[8]), _n85[9] >= 1 && (_n7q.houg = _n7q.houg + 1 * _n85[9]), _n85[10] >= 1 && (_n7q.houg += 1 * _n85[10])), _n7q;
        };
    },
    44726: function(_n8a, _n8b, _n8c) {
        'use strict';
        var _n8d = null;
        var _n8e = this && this.__importDefault || function(_n8f) {
            var _n8g = null;
            return _n8f && _n8f.__esModule ? _n8f : {
                'default': _n8f
            };
        };
        defineModule(_n8b);
        Object.defineProperty(_n8b, '__esModule', {
            'value': true
        }), _n8b.getSlot295PersonalEffect = void 0;
        var _n8h = _n8c(74496),
            _n8i = _n8e(_n8c(18622));
        _n8b.getSlot295PersonalEffect = function(_n8j) {
            var _n8k = null,
                _n8l = new _n8h.SlotItemEffectModel(),
                _n8m = new _n8h.SlotItemEffectModel(),
                _n8n = _n8j.get_slotnums(295);
            if (12 != _n8j.ctype && 1 != _n8j.ctype && 5 != _n8j.ctype) return _n8l;
            _n8m.houg = 2, _n8m.tyku = 2, 666 == _n8j.ship_id ? (_n8m.houg += 1, _n8m.tyku += 1, _n8m.tais += 1) : 959 == _n8j.ship_id && (_n8m.houg += 2, _n8n >= 2 && (_n8l.houg += 2), _n8n >= 3 && (_n8l.houg += 3)), _n8l.add(_n8m.multiply(_n8n));
            for (var _n8o = 0, _n8p = 0, _n8q = 0, _n8r = _n8j.have_slot_ids(); _n8q < _n8r.length; _n8q++) {
                var _n8s = _n8r[_n8q],
                    _n8t = _n8i.default.model.slot.getMst(_n8s),
                    _n8u = _n8t.equipType;
                12 != _n8u && 13 != _n8u || (_n8t.sakuteki >= 5 && (_n8o += _n8j.get_slotnums(parseInt(_n8s))), _n8t.taiku >= 2 && (_n8p += _n8j.get_slotnums(parseInt(_n8s))));
            }
            var _n8v = _n8j.get_slotnums(13),
                _n8w = _n8j.get_slotnums(125),
                _n8x = _n8j.get_slotnums(285),
                _n8y = _n8v + _n8w + _n8x;
            return _n8o > 0 && (_n8l.houg += 3, _n8l.kaih += 2, _n8l.raig += 1), 1 == _n8y ? (_n8l.houg += 1, _n8l.raig += 3) : _n8y >= 2 && (_n8l.houg += 2, _n8l.raig += 5), _n8x >= 1 && (_n8l.raig += 1), _n8p > 0 && (_n8l.tyku += 6), _n8l;
        };
    },
    93065: function(_n8z, _n90, _n91) {
        'use strict';
        var _n92 = null;
        var _n93 = this && this.__importDefault || function(_n94) {
            var _n95 = null;
            return _n94 && _n94.__esModule ? _n94 : {
                'default': _n94
            };
        };
        defineModule(_n90);
        Object.defineProperty(_n90, '__esModule', {
            'value': true
        }), _n90.getSlot296PersonalEffect = void 0;
        var _n96 = _n91(74496),
            _n97 = _n93(_n91(18622));
        _n90.getSlot296PersonalEffect = function(_n98) {
            var _n99 = null,
                _n9a = new _n96.SlotItemEffectModel(),
                _n9b = new _n96.SlotItemEffectModel();
            1 != _n98.ctype && 5 != _n98.ctype && 10 != _n98.ctype && 23 != _n98.ctype || (_n9b.houg += 1), 10 != _n98.ctype && 23 != _n98.ctype || (_n9b.kaih += 1), 145 == _n98.ship_id || 961 == _n98.ship_id ? (_n9b.houg += 1, _n9b.tyku += 1) : 144 == _n98.ship_id ? (_n9b.houg += 1, _n9b.raig += 1) : 469 == _n98.ship_id || 588 == _n98.ship_id || 667 == _n98.ship_id || 587 == _n98.ship_id || 242 == _n98.ship_id ? _n9b.kaih += 1 : 497 == _n98.ship_id ? (_n9b.houg += 1, _n9b.kaih += 1) : 244 == _n98.ship_id ? _n9b.kaih += 1 : 498 == _n98.ship_id || 975 == _n98.ship_id ? (_n9b.tyku += 1, _n9b.kaih += 1) : 627 == _n98.ship_id ? (_n9b.houg += 2, _n9b.raig += 1) : 903 != _n98.ship_id && 908 != _n98.ship_id || (_n9b.houg += 3);
            var _n9c = true;
            if (_n9b.exists() || (_n9c = false), 0 == _n9c) return _n9a;
            var _n9d = _n98.get_slotnums(296);
            _n9a = _n9b.multiply(_n9d);
            var _n9e = 0;
            if (1 != _n98.ctype && 5 != _n98.ctype && 10 != _n98.ctype || (_n9e = 1), 23 == _n98.ctype && (_n9e = 2), 0 == _n9e) return _n9a;
            for (var _n9f = 0, _n9g = 0, _n9h = 0, _n9i = _n98.have_slot_ids(); _n9h < _n9i.length; _n9h++) {
                var _n9j = _n9i[_n9h],
                    _n9k = _n97.default.model.slot.getMst(_n9j),
                    _n9l = _n9k.equipType;
                12 != _n9l && 13 != _n9l || (_n9k.sakuteki >= 5 && (_n9f += _n98.get_slotnums(parseInt(_n9j))), _n9k.taiku >= 2 && (_n9g += _n98.get_slotnums(parseInt(_n9j))));
            }
            return _n9f > 0 && (1 == _n9e ? (_n9a.houg += 1, _n9a.kaih += 2, _n9a.raig += 2) : 2 == _n9e && (_n9a.houg += 1, _n9a.kaih += 2, _n9a.raig += 3)), _n98.get_slotnums(285) + _n98.get_slotnums(125) >= 1 && 1 == _n9e && (_n9a.houg += 1, _n9a.raig += 3), _n98.get_slotnums(15) + _n98.get_slotnums(286) >= 1 && 2 == _n9e && (_n9a.houg += 1, _n9a.raig += 3), _n9g > 0 && (1 == _n9e ? _n9a.tyku += 5 : 2 == _n9e && (_n9a.tyku += 6)), _n9a;
        };
    },
    85767: (_n9m, _n9n, _n9o) => {
        'use strict';
        var _n9p = null;
        defineModule(_n9n);
        Object.defineProperty(_n9n, '__esModule', {
            'value': true
        }), _n9n.getSlot297PersonalEffect = void 0;
        var _n9q = _n9o(74496);
        _n9n.getSlot297PersonalEffect = function(_n9r) {
            var _n9s = null,
                _n9t = new _n9q.SlotItemEffectModel(),
                _n9u = new _n9q.SlotItemEffectModel();
            if (12 == _n9r.ctype) _n9u.kaih = 2;
            else {
                if (1 != _n9r.ctype && 5 != _n9r.ctype) return _n9t;
                _n9u.kaih = 1;
            }
            var _n9v = _n9r.get_slotnums(297);
            return _n9t = _n9u.multiply(_n9v);
        };
    },
    38314: (_n9w, _n9x, _n9y) => {
        'use strict';
        var _n9z = null;
        defineModule(_n9x);
        Object.defineProperty(_n9x, '__esModule', {
            'value': true
        }), _n9x.getSlot301PersonalEffect = void 0;
        var _na0 = _n9y(74496);
        _n9x.getSlot301PersonalEffect = function(_na1) {
            var _na2 = null,
                _na3 = new _na0.SlotItemEffectModel(),
                _na4 = new _na0.SlotItemEffectModel();
            67 != _na1.ctype && 78 != _na1.ctype && 82 != _na1.ctype && 88 != _na1.ctype && 108 != _na1.ctype && 112 != _na1.ctype || (_na4.tyku += 2, _na4.kaih += 1, _na4.souk += 1);
            var _na5 = true;
            if (_na4.exists() || (_na5 = false), 0 == _na5) return _na3;
            var _na6 = _na1.get_slotnums(301);
            return _na3 = _na4.multiply(_na6);
        };
    },
    59747: (_na7, _na8, _na9) => {
        'use strict';
        var _naa = null;
        defineModule(_na8);
        Object.defineProperty(_na8, '__esModule', {
            'value': true
        }), _na8.getSlot302PersonalEffect = void 0;
        var _nab = _na9(74496);
        _na8.getSlot302PersonalEffect = function(_nac) {
            var _nad = null,
                _nae = new _nab.SlotItemEffectModel(),
                _naf = new _nab.SlotItemEffectModel();
            if (76 == _nac.ctype && (_naf.tais = 1, _naf.kaih = 1), !_naf.exists()) return _nae;
            var _nag = _nac.get_slotnums(302);
            return _nae = _naf.multiply(_nag);
        };
    },
    40649: (_nah, _nai, _naj) => {
        'use strict';
        var _nak = null;
        defineModule(_nai);
        Object.defineProperty(_nai, '__esModule', {
            'value': true
        }), _nai.getSlot303PersonalEffect = void 0;
        var _nal = _naj(74496);
        _nai.getSlot303PersonalEffect = function(_nam) {
            var _nan = null,
                _nao = new _nal.SlotItemEffectModel(),
                _nap = new _nal.SlotItemEffectModel();
            if (16 == _nam.ctype || 4 == _nam.ctype || 20 == _nam.ctype || 41 == _nam.ctype ? (_nap.houg = 1, _nap.tyku = 1) : 89 == _nam.ctype && (_nap.houg = 1, _nap.tyku = 2, _nap.kaih = 1), !_nap.exists()) return _nao;
            var _naq = _nam.get_slotnums(303);
            return _nao = _nap.multiply(_naq);
        };
    },
    13533: (_nar, _nas, _nat) => {
        'use strict';
        var _nau = null;
        defineModule(_nas);
        Object.defineProperty(_nas, '__esModule', {
            'value': true
        }), _nas.getSlot304PersonalEffect = void 0;
        var _nav = _nat(74496);
        _nas.getSlot304PersonalEffect = function(_naw) {
            var _nax = null,
                _nay = new _nav.SlotItemEffectModel(),
                _naz = new _nav.SlotItemEffectModel();
            if (16 == _naw.ctype || 4 == _naw.ctype || 20 == _naw.ctype || 41 == _naw.ctype ? (_naz.houg = 1, _naz.tais = 1, _naz.kaih = 1) : 89 == _naw.ctype && (_naz.houg = 1, _naz.tais = 2, _naz.kaih = 2), !_naz.exists()) return _nay;
            var _nb0 = _naw.get_slotnums(304);
            return _nay = _naz.multiply(_nb0);
        };
    },
    99791: (_nb1, _nb2, _nb3) => {
        'use strict';
        var _nb4 = null;
        defineModule(_nb2);
        Object.defineProperty(_nb2, '__esModule', {
            'value': true
        }), _nb2.getSlot305More320mmGunPersonalEffect = void 0;
        var _nb5 = _nb3(74496);
        _nb2.getSlot305More320mmGunPersonalEffect = function(_nb6) {
            var _nb7 = null,
                _nb8 = new _nb5.SlotItemEffectModel(),
                _nb9 = _nb6.get_slotnums(426),
                _nba = _nb6.get_slotnums(427),
                _nbb = _nb6.get_slotnums(428),
                _nbc = _nb6.get_slotnums(429),
                _nbd = _nb9 + _nba + _nbb + _nbc;
            return 113 == _nb6.ctype ? (_nb8.houg = _nb8.houg + 2 * _nbd, _nb9 >= 1 && (_nb8.houg = _nb8.houg + 1 * _nb9, _nb8.kaih = _nb8.kaih + 1 * _nb9, (_nb9 >= 2 || _nba >= 1) && (_nb8.houg = _nb8.houg + 1, _nb8.kaih = _nb8.kaih + 1)), _nbb >= 1 && (_nb8.houg = _nb8.houg + 1 * _nbb, _nb8.kaih = _nb8.kaih + 1 * _nbb, (_nbb >= 2 || _nbc >= 1) && (_nb8.houg = _nb8.houg + 2, _nb8.kaih = _nb8.kaih + 1))) : 73 == _nb6.ctype ? (_nb8.houg = _nb8.houg + 1 * _nbd, _nb9 >= 1 && (_nb8.houg = _nb8.houg + 1 * _nb9, _nb8.kaih = _nb8.kaih + 1 * _nb9, (_nb9 >= 2 || _nba >= 1) && (_nb8.houg = _nb8.houg + 1)), _nbb >= 1 && (_nb8.houg = _nb8.houg + 1 * _nbb, _nb8.kaih = _nb8.kaih + 1 * _nbb, (_nbb >= 2 || _nbc >= 1) && (_nb8.houg = _nb8.houg + 1))) : 58 == _nb6.ctype && _nbb >= 1 && (_nb8.houg = _nb8.houg + 1 * _nbb, _nb8.kaih = _nb8.kaih + 2 * _nbb, (_nbb >= 2 || _nbc >= 1) && (_nb8.houg = _nb8.houg + 2, _nb8.kaih = _nb8.kaih + 1)), _nb8;
        };
    },
    12138: (_nbe, _nbf, _nbg) => {
        'use strict';
        var _nbh = null;
        defineModule(_nbf);
        Object.defineProperty(_nbf, '__esModule', {
            'value': true
        }), _nbf.getSlot305_And_306_PersonalEffect = void 0;
        var _nbi = _nbg(74496);
        _nbf.getSlot305_And_306_PersonalEffect = function(_nbj) {
            var _nbk = null,
                _nbl = new _nbi.SlotItemEffectModel(),
                _nbm = new _nbi.SlotItemEffectModel();
            if (76 == _nbj.ctype && (_nbm.tais = 1, _nbm.kaih = 1), 'しんよう' == _nbj.yomi ? (_nbm.tais += 2, _nbm.kaih += 1) : 'グラーフ・ツェッペリン' != _nbj.yomi && 'アクィラ' != _nbj.yomi || (_nbm.houg = 1, _nbm.kaih = 1), !_nbm.exists()) return _nbl;
            var _nbn = _nbj.get_slotnums(305) + _nbj.get_slotnums(306);
            return _nbl = _nbm.multiply(_nbn);
        };
    },
    30042: (_nbo, _nbp, _nbq) => {
        'use strict';
        var _nbr = null;
        defineModule(_nbp);
        Object.defineProperty(_nbp, '__esModule', {
            'value': true
        }), _nbp.getSlot307PersonalEffect = void 0;
        var _nbs = _nbq(74496);
        _nbp.getSlot307PersonalEffect = function(_nbt) {
            var _nbu = null,
                _nbv = new _nbs.SlotItemEffectModel(),
                _nbw = new _nbs.SlotItemEffectModel();
            if ('アメリカ' == _nbt.getCountryName() && (_nbw.houg = 1, _nbw.tyku = 1, _nbw.kaih = 1), !_nbw.exists()) return _nbv;
            var _nbx = _nbt.get_slotnums(307);
            return _nbv = _nbw.multiply(_nbx);
        };
    },
    33623: (_nby, _nbz, _nc0) => {
        'use strict';
        var _nc1 = null;
        defineModule(_nbz);
        Object.defineProperty(_nbz, '__esModule', {
            'value': true
        }), _nbz.getSlot308PersonalEffect = void 0;
        var _nc2 = _nc0(74496);
        _nbz.getSlot308PersonalEffect = function(_nc3) {
            var _nc4 = null,
                _nc5 = new _nc2.SlotItemEffectModel(),
                _nc6 = new _nc2.SlotItemEffectModel();
            if ('アメリカ' == _nc3.getCountryName() && (_nc6.houg = 1, _nc6.tyku = 1, _nc6.kaih = 1), 2 == _nc3.stype ? _nc6.houg += 1 : 1 == _nc3.stype && (_nc6.tyku += 1, _nc6.kaih += 1), 651 != _nc3.ship_id && 656 != _nc3.ship_id || (_nc6.houg += 1, _nc6.tyku += 1, _nc6.kaih += 1), !_nc6.exists()) return _nc5;
            var _nc7 = _nc3.get_slotnums(308);
            return _nc5 = _nc6.multiply(_nc7);
        };
    },
    17732: (_nc8, _nc9, _nca) => {
        'use strict';
        var _ncb = null;
        defineModule(_nc9);
        Object.defineProperty(_nc9, '__esModule', {
            'value': true
        }), _nc9.getSlot30_410PersonalEffect = void 0;
        var _ncc = _nca(74496);
        _nc9.getSlot30_410PersonalEffect = function(_ncd) {
            var _nce = null,
                _ncf = new _ncc.SlotItemEffectModel();
            return 73 != _ncd.ship_id && 501 != _ncd.ship_id && 506 != _ncd.ship_id && 502 != _ncd.ship_id && 507 != _ncd.ship_id || (_ncf.tyku += 3, _ncf.kaih += 2, _ncf.saku += 2, _ncd.get_slotnums(410) >= 1 && (_ncf.tyku += 2, _ncf.kaih += 2, _ncf.houg += 1, _ncf.souk += 1)), 54 == _ncd.ctype && (_ncf.tyku += 3, _ncf.kaih += 2, _ncf.saku += 2, _ncd.get_slotnums(410) >= 1 && (_ncf.tyku += 2, _ncf.kaih += 2, _ncf.houg += 1, _ncf.souk += 1)), _ncf;
        };
    },
    85630: function(_ncg, _nch, _nci) {
        'use strict';
        var _ncj = null;
        var _nck = this && this.__importDefault || function(_ncl) {
            var _ncm = null;
            return _ncl && _ncl.__esModule ? _ncl : {
                'default': _ncl
            };
        };
        defineModule(_nch);
        Object.defineProperty(_nch, '__esModule', {
            'value': true
        }), _nch.getSlot310PersonalEffect = void 0;
        var _ncn = _nci(74496),
            _nco = _nck(_nci(18622));
        _nch.getSlot310PersonalEffect = function(_ncp) {
            var _ncq = null,
                _ncr = new _ncn.SlotItemEffectModel(),
                _ncs = new _ncn.SlotItemEffectModel(),
                _nct = new _ncn.SlotItemEffectModel();
            34 == _ncp.ctype ? (_ncs.houg += 2, _ncs.tyku += 1, _ncs.kaih += 1, _nct.houg += 2) : 56 == _ncp.ctype ? (_ncs.houg += 2, _ncs.kaih += 1, _nct.houg += 2, _nct.kaih += 2) : 90 == _ncp.ctype && (_ncs.houg += 3, _ncs.raig += 2, _ncs.tyku += 1, _ncs.kaih += 1, _nct.houg += 1, _nct.raig += 1);
            var _ncu = new _ncn.SlotItemEffectModel(),
                _ncv = new _ncn.SlotItemEffectModel();
            622 != _ncp.ship_id && 623 != _ncp.ship_id && 624 != _ncp.ship_id || (_ncs.houg += 2, _ncs.kaih += 1, _ncs.tais += 1, _ncu.houg = 1, _ncu.raig = 1, _ncv.houg = 3, _ncv.kaih = 2, _ncv.raig = 2);
            var _ncw = true;
            if (_ncs.exists() || (_ncw = false), 0 == _ncw) return _ncr;
            var _ncx = _ncp.get_slotnums(310) + _ncp.get_slotnums(518);
            _ncr = _ncs.multiply(_ncx);
            for (var _ncy = 0, _ncz = 0, _nd0 = 0, _nd1 = [310, 518]; _nd0 < _nd1.length; _nd0++) {
                var _nd2 = _nd1[_nd0],
                    _nd3 = _ncp.have_slots_dict[_nd2];
                if (null != _nd3)
                    for (var _nd4 = 0, _nd5 = _nd3; _nd4 < _nd5.length; _nd4++) {
                        var _nd6 = _nd5[_nd4];
                        null != _nd6 && (_nd6.level >= 7 && _ncy++, _nd6.level >= 10 && _ncz++);
                    }
            }
            if (_ncu.exists() && _ncy > 0 && _ncr.add(_ncu.multiply(_ncy)), _nct.exists() && _ncz > 0 && _ncr.add(_nct.multiply(_ncz)), _ncv.exists()) {
                for (var _nd7 = 0, _nd8 = 0, _nd9 = _ncp.have_slot_ids(); _nd8 < _nd9.length; _nd8++) {
                    var _nda = _nd9[_nd8],
                        _ndb = _nco.default.model.slot.getMst(_nda),
                        _ndc = _ndb.equipType;
                    (12 == _ndc || 13 == _ndc) && _ndb.sakuteki >= 5 && (_nd7 += _ncp.get_slotnums(parseInt(_nda)));
                }
                _nd7 > 0 && _ncr.add(_ncv);
            }
            return _ncr;
        };
    },
    88736: (_ndd, _nde, _ndf) => {
        'use strict';
        var _ndg = null;
        defineModule(_nde);
        Object.defineProperty(_nde, '__esModule', {
            'value': true
        }), _nde.getSlot313PersonalEffect = void 0;
        var _ndh = _ndf(74496);
        _nde.getSlot313PersonalEffect = function(_ndi) {
            var _ndj = null,
                _ndk = new _ndh.SlotItemEffectModel(),
                _ndl = new _ndh.SlotItemEffectModel();
            87 != _ndi.ctype && 91 != _ndi.ctype || (_ndl.houg += 2, _ndl.tyku += 2, _ndl.kaih += 1, _ndl.souk += 1), 651 != _ndi.ship_id && 656 != _ndi.ship_id || (_ndl.houg += 2, _ndl.tyku += 2, _ndl.kaih += 1, _ndl.souk += 1);
            var _ndm = true;
            if (_ndl.exists() || (_ndm = false), 0 == _ndm) return _ndk;
            var _ndn = _ndi.get_slotnums(313);
            return _ndk = _ndl.multiply(_ndn);
        };
    },
    49341: (_ndo, _ndp, _ndq) => {
        'use strict';
        var _ndr = null;
        defineModule(_ndp);
        Object.defineProperty(_ndp, '__esModule', {
            'value': true
        }), _ndp.getSlot314PersonalEffect = void 0;
        var _nds = _ndq(74496);
        _ndp.getSlot314PersonalEffect = function(_ndt) {
            var _ndu = null,
                _ndv = new _nds.SlotItemEffectModel(),
                _ndw = new _nds.SlotItemEffectModel();
            87 != _ndt.ctype && 91 != _ndt.ctype || (_ndw.houg += 1, _ndw.raig += 3);
            var _ndx = true;
            if (_ndw.exists() || (_ndx = false), 0 == _ndx) return _ndv;
            var _ndy = _ndt.get_slotnums(314);
            return _ndv = _ndw.multiply(_ndy);
        };
    },
    74306: (_ndz, _ne0, _ne1) => {
        'use strict';
        var _ne2 = null;
        defineModule(_ne0);
        Object.defineProperty(_ne0, '__esModule', {
            'value': true
        }), _ne0.getSlot315PersonalEffect = void 0;
        var _ne3 = _ne1(74496);
        _ne0.getSlot315PersonalEffect = function(_ne4) {
            var _ne5 = null,
                _ne6 = new _ne3.SlotItemEffectModel(),
                _ne7 = new _ne3.SlotItemEffectModel();
            'アメリカ' == _ne4.getCountryName() && (_ne7.houg += 2, _ne7.kaih += 3, _ne7.saku += 4), 87 != _ne4.ctype && 91 != _ne4.ctype || (_ne7.houg += 1, _ne6.leng += 1), 651 != _ne4.ship_id && 656 != _ne4.ship_id || (_ne6.houg += 2, _ne6.kaih += 2, _ne6.saku += 3, _ne6.leng += 1);
            var _ne8 = true;
            if (_ne7.exists() || (_ne8 = false), 0 == _ne8) return _ne6;
            var _ne9 = _ne4.get_slotnums(315);
            return _ne6.add(_ne7.multiply(_ne9)), _ne6;
        };
    },
    83898: (_nea, _neb, _nec) => {
        'use strict';
        var _ned = null;
        defineModule(_neb);
        Object.defineProperty(_neb, '__esModule', {
            'value': true
        }), _neb.getSlot316PersonalEffect = void 0;
        var _nee = _nec(74496);
        _neb.getSlot316PersonalEffect = function(_nef) {
            var _neg = null,
                _neh = new _nee.SlotItemEffectModel(),
                _nei = new _nee.SlotItemEffectModel();
            if (68 == _nef.ctype) {
                if (_nei.houg += 4, _nei.tyku += 1, _nei.kaih += 1, !_nei.exists()) return _neh;
                var _nej = _nef.get_slotnums(316);
                _neh = _nei.multiply(_nej);
            }
            return _neh;
        };
    },
    71873: (_nek, _nel, _nem) => {
        'use strict';
        var _nen = null;
        defineModule(_nel);
        Object.defineProperty(_nel, '__esModule', {
            'value': true
        }), _nel.getSlot317PersonalEffect = void 0;
        var _neo = _nem(74496);
        _nel.getSlot317PersonalEffect = function(_nep) {
            var _neq = null,
                _ner = new _neo.SlotItemEffectModel(),
                _nes = new _neo.SlotItemEffectModel(),
                _net = 0,
                _neu = false;
            if (6 == _nep.ctype ? (_nes.houg += 2, _nes.tyku += 1, _net = 1, _neu = true) : 2 == _nep.ctype && (_nes.houg += 1, _nes.tyku += 1, _nes.kaih += 1, _net = 2, _neu = true), 149 == _nep.ship_id || 591 == _nep.ship_id || 592 == _nep.ship_id ? (_nes.houg += 2, _nes.tyku += 2, _neu = true) : 150 == _nep.ship_id ? (_nes.houg += 1, _nes.tyku += 1, _neu = true) : 151 == _nep.ship_id ? (_nes.houg += 1, _nes.tyku += 1, _nes.kaih += 1, _neu = true) : 593 == _nep.ship_id ? (_nes.houg += 1, _nes.tyku += 3, _nes.kaih += 2, _neu = true) : 954 == _nep.ship_id ? (_nes.houg += 2, _nes.tyku += 2, _nes.kaih += 1, _neu = true) : 152 == _nep.ship_id ? (_nes.houg += 2, _nes.tyku += 1, _neu = true) : 541 == _nep.ship_id ? (_nes.houg += 1, _nes.tyku += 2, _neu = true) : 573 == _nep.ship_id && (_nes.houg += 2, _nes.tyku += 2, _nes.kaih += 1, _neu = true), 0 == _neu) return _ner;
            if (_ner.add(_nes), 0 == _net) return _ner;
            var _nev = _nep.get_each_level_nums(317),
                _new = [];
            return _net > 0 && _nev.forEach(function(_nex, _ney) {
                var _nez = null;
                for (var _nf0 = 1; _nf0 <= _nep.SLOT_LEVEL_MAX; _nf0++) null == _new[_nf0] && (_new[_nf0] = 0), _ney >= _nf0 && (_new[_nf0] += _nex);
            }), 1 == _net ? _new[8] >= 1 && (_ner.houm += 1) : 2 == _net && _nev[10] >= 1 && (_ner.houm += 1), _ner;
        };
    },
    53122: function(_nf1, _nf2, _nf3) {
        'use strict';
        var _nf4 = null;
        var _nf5 = this && this.__importDefault || function(_nf6) {
            var _nf7 = null;
            return _nf6 && _nf6.__esModule ? _nf6 : {
                'default': _nf6
            };
        };
        defineModule(_nf2);
        Object.defineProperty(_nf2, '__esModule', {
            'value': true
        }), _nf2.getSlot318PersonalEffect = void 0;
        var _nf8 = _nf3(74496),
            _nf9 = _nf5(_nf3(18622));
        _nf2.getSlot318PersonalEffect = function(_nfa) {
            var _nfb = null,
                _nfc = new _nf8.SlotItemEffectModel(),
                _nfd = new _nf8.SlotItemEffectModel(),
                _nfe = new _nf8.SlotItemEffectModel(),
                _nff = new _nf8.SlotItemEffectModel();
            if (411 == _nfa.ship_id || 412 == _nfa.ship_id ? _nfd.houg += 1 : 82 == _nfa.ship_id ? (_nfd.houg += 2, _nfd.tyku += 2, _nfd.kaih += 2, _nff.tyku = 2, _nff.kaih = 3, _nff.houm = 1) : 553 == _nfa.ship_id ? (_nfd.houg += 2, _nfd.tyku += 2, _nfd.kaih += 2, _nfd.houm += 3, _nff.tyku = 2, _nff.kaih = 3, _nff.houm = 1, _nfe.kaih = 2, _nfe.souk = 1) : 88 == _nfa.ship_id ? (_nfd.houg += 2, _nfd.tyku += 2, _nfd.kaih += 2, _nff.tyku = 2, _nff.kaih = 3, _nff.houm = 1) : 541 == _nfa.ship_id || 573 == _nfa.ship_id ? (_nfd.houg += 3, _nfd.tyku += 2, _nfd.kaih += 1, _nfd.houm += 2, _nfe.houg = 2, _nfe.kaih = 2, _nfe.souk = 1, _nfe.houm = 1) : 554 == _nfa.ship_id && (_nfd.houg += 3, _nfd.tyku += 2, _nfd.kaih += 2, _nfd.houm += 3, _nff.tyku = 2, _nff.kaih = 3, _nff.houm = 1, _nfe.houg = 1, _nfe.kaih = 2, _nfe.souk = 1, _nfe.houm = 1), !_nfd.exists()) return _nfc;
            var _nfg = _nfa.get_slotnums(318);
            if (_nfc = _nfd.multiply(_nfg), !_nfe.exists() && !_nff.exists()) return _nfc;
            for (var _nfh = 0, _nfi = 0, _nfj = _nfa.have_slot_ids(); _nfi < _nfj.length; _nfi++) {
                var _nfk = _nfj[_nfi],
                    _nfl = _nf9.default.model.slot.getMst(_nfk),
                    _nfm = _nfl.equipType;
                (12 == _nfm || 13 == _nfm) && _nfl.taiku >= 2 && (_nfh += _nfa.get_slotnums(parseInt(_nfk)));
            }
            var _nfn = _nfa.get_slotnums(290);
            return _nff.exists() && _nfh > 0 && 0 == _nfn && _nfc.add(_nff), _nfe.exists() && _nfn >= 1 && _nfc.add(_nfe), _nfc;
        };
    },
    51063: (_nfo, _nfp, _nfq) => {
        'use strict';
        var _nfr = null;
        defineModule(_nfp);
        Object.defineProperty(_nfp, '__esModule', {
            'value': true
        }), _nfp.getSlot319PersonalEffect = void 0;
        var _nfs = _nfq(74496);
        _nfp.getSlot319PersonalEffect = function(_nft) {
            var _nfu = null,
                _nfv = new _nfs.SlotItemEffectModel(),
                _nfw = new _nfs.SlotItemEffectModel();
            if (554 != _nft.ship_id && 553 != _nft.ship_id || (_nfw.houg = 7, _nfw.tyku = 3, _nfw.kaih = 2), !_nfw.exists()) return _nfv;
            var _nfx = _nft.get_slotnums(319);
            return _nfv = _nfw.multiply(_nfx);
        };
    },
    91491: (_nfy, _nfz, _ng0) => {
        'use strict';
        var _ng1 = null;
        defineModule(_nfz);
        Object.defineProperty(_nfz, '__esModule', {
            'value': true
        }), _nfz.getSlot320PersonalEffect = void 0;
        var _ng2 = _ng0(74496);
        _nfz.getSlot320PersonalEffect = function(_ng3) {
            var _ng4 = null,
                _ng5 = new _ng2.SlotItemEffectModel(),
                _ng6 = new _ng2.SlotItemEffectModel();
            if (553 == _ng3.ship_id) _ng6.houg = 2;
            else {
                if (554 == _ng3.ship_id) _ng6.houg = 4;
                else {
                    if (196 == _ng3.ship_id) _ng6.houg = 3;
                    else {
                        if (197 == _ng3.ship_id) _ng6.houg = 3;
                        else {
                            if (508 == _ng3.ship_id) _ng6.houg = 4;
                            else {
                                if (509 != _ng3.ship_id) return _ng5;
                                _ng6.houg = 4;
                            }
                        }
                    }
                }
            }
            var _ng7 = _ng3.get_slotnums(320);
            return _ng5 = _ng6.multiply(_ng7);
        };
    },
    85495: (_ng8, _ng9, _nga) => {
        'use strict';
        var _ngb = null;
        defineModule(_ng9);
        Object.defineProperty(_ng9, '__esModule', {
            'value': true
        }), _ng9.getSlot322PersonalEffect = void 0;
        var _ngc = _nga(74496);
        _ng9.getSlot322PersonalEffect = function(_ngd) {
            var _nge = null,
                _ngf = new _ngc.SlotItemEffectModel(),
                _ngg = new _ngc.SlotItemEffectModel();
            if (554 != _ngd.ship_id && 553 != _ngd.ship_id || (_ngg.houg = 5, _ngg.tyku = 2, _ngg.kaih = 2, _ngg.tais = 1), !_ngg.exists()) return _ngf;
            var _ngh = _ngd.get_slotnums(322);
            return _ngf = _ngg.multiply(_ngh);
        };
    },
    65365: (_ngi, _ngj, _ngk) => {
        'use strict';
        var _ngl = null;
        defineModule(_ngj);
        Object.defineProperty(_ngj, '__esModule', {
            'value': true
        }), _ngj.getSlot323PersonalEffect = void 0;
        var _ngm = _ngk(74496);
        _ngj.getSlot323PersonalEffect = function(_ngn) {
            var _ngo = null,
                _ngp = new _ngm.SlotItemEffectModel(),
                _ngq = new _ngm.SlotItemEffectModel();
            if (554 != _ngn.ship_id && 553 != _ngn.ship_id || (_ngq.houg = 6, _ngq.tyku = 3, _ngq.kaih = 3, _ngq.tais = 2), !_ngq.exists()) return _ngp;
            var _ngr = _ngn.get_slotnums(323);
            return _ngp = _ngq.multiply(_ngr);
        };
    },
    98164: (_ngs, _ngt, _ngu) => {
        'use strict';
        var _ngv = null;
        defineModule(_ngt);
        Object.defineProperty(_ngt, '__esModule', {
            'value': true
        }), _ngt.getSlot324And325PersonalEffect = void 0;
        var _ngw = _ngu(74496);
        _ngt.getSlot324And325PersonalEffect = function(_ngx) {
            var _ngy = null,
                _ngz = new _ngw.SlotItemEffectModel(),
                _nh0 = new _ngw.SlotItemEffectModel();
            if (554 == _ngx.ship_id || 646 == _ngx.ship_id ? (_nh0.houg = 2, _nh0.tais = 3, _nh0.kaih = 1) : 553 == _ngx.ship_id && (_nh0.houg = 1, _nh0.tais = 2, _nh0.kaih = 1), !_nh0.exists()) return _ngz;
            var _nh1 = _ngx.get_slotnums(324) + _ngx.get_slotnums(325);
            return _ngz = _nh0.multiply(_nh1);
        };
    },
    38114: (_nh2, _nh3, _nh4) => {
        'use strict';
        var _nh5 = null;
        defineModule(_nh3);
        Object.defineProperty(_nh3, '__esModule', {
            'value': true
        }), _nh3.getSlot326PersonalEffect = void 0;
        var _nh6 = _nh4(74496);
        _nh3.getSlot326PersonalEffect = function(_nh7) {
            var _nh8 = null,
                _nh9 = new _nh6.SlotItemEffectModel(),
                _nha = new _nh6.SlotItemEffectModel();
            if (646 == _nh7.ship_id ? (_nha.houg = 3, _nha.tais = 5, _nha.kaih = 3) : 554 == _nh7.ship_id ? (_nha.houg = 3, _nha.tais = 4, _nha.kaih = 2) : 553 == _nh7.ship_id && (_nha.houg = 1, _nha.tais = 3, _nha.kaih = 1), !_nha.exists()) return _nh9;
            var _nhb = _nh7.get_slotnums(326);
            return _nh9 = _nha.multiply(_nhb);
        };
    },
    21003: (_nhc, _nhd, _nhe) => {
        'use strict';
        var _nhf = null;
        defineModule(_nhd);
        Object.defineProperty(_nhd, '__esModule', {
            'value': true
        }), _nhd.getSlot327PersonalEffect = void 0;
        var _nhg = _nhe(74496);
        _nhd.getSlot327PersonalEffect = function(_nhh) {
            var _nhi = null,
                _nhj = new _nhg.SlotItemEffectModel(),
                _nhk = new _nhg.SlotItemEffectModel();
            if (646 == _nhh.ship_id ? (_nhk.houg = 5, _nhk.tais = 6, _nhk.kaih = 4) : 554 == _nhh.ship_id ? (_nhk.houg = 4, _nhk.tais = 5, _nhk.kaih = 2) : 553 == _nhh.ship_id && (_nhk.houg = 2, _nhk.tais = 4, _nhk.kaih = 1), !_nhk.exists()) return _nhj;
            var _nhl = _nhh.get_slotnums(327);
            return _nhj = _nhk.multiply(_nhl);
        };
    },
    77010: (_nhm, _nhn, _nho) => {
        'use strict';
        var _nhp = null;
        defineModule(_nhn);
        Object.defineProperty(_nhn, '__esModule', {
            'value': true
        }), _nhn.getSlot328PersonalEffect = void 0;
        var _nhq = _nho(74496);
        _nhn.getSlot328PersonalEffect = function(_nhr) {
            var _nhs = null,
                _nht = new _nhq.SlotItemEffectModel(),
                _nhu = new _nhq.SlotItemEffectModel();
            if ('こんごう' == _nhr.yomi ? (_nhu.houg = 1, _nhu.kaih = 1, 209 == _nhr.ship_id || 149 == _nhr.ship_id ? _nhu.houg += 1 : 591 == _nhr.ship_id && (_nhu.houg += 2, _nhu.raig += 1)) : 'ひえい' == _nhr.yomi ? (_nhu.houg = 1, _nhu.kaih = 1, 210 == _nhr.ship_id || 150 == _nhr.ship_id ? _nhu.houg += 1 : 592 == _nhr.ship_id && (_nhu.houg += 2, _nhu.tyku += 1)) : 'はるな' == _nhr.yomi ? (_nhu.houg = 1, _nhu.kaih = 1, 211 == _nhr.ship_id || 151 == _nhr.ship_id ? _nhu.houg += 1 : 593 == _nhr.ship_id ? (_nhu.houg += 1, _nhu.tyku += 2) : 954 == _nhr.ship_id && (_nhu.houg += 2, _nhu.tyku += 1)) : 'きりしま' == _nhr.yomi ? (_nhu.houg = 1, _nhu.kaih = 1, 212 != _nhr.ship_id && 152 != _nhr.ship_id || (_nhu.houg += 1)) : ('ふそう' == _nhr.yomi || 'やましろ' == _nhr.yomi || 'いせ' == _nhr.yomi || 'ひゅうが' == _nhr.yomi) && (_nhu.houg = 1), !_nhu.exists()) return _nht;
            var _nhv = _nhr.get_slotnums(328);
            return _nht = _nhu.multiply(_nhv);
        };
    },
    39126: (_nhw, _nhx, _nhy) => {
        'use strict';
        var _nhz = null;
        defineModule(_nhx);
        Object.defineProperty(_nhx, '__esModule', {
            'value': true
        }), _nhx.getSlot329PersonalEffect = void 0;
        var _ni0 = _nhy(74496);
        _nhx.getSlot329PersonalEffect = function(_ni1) {
            var _ni2 = null,
                _ni3 = new _ni0.SlotItemEffectModel(),
                _ni4 = new _ni0.SlotItemEffectModel();
            if ('こんごう' == _ni1.yomi ? (_ni4.houg = 1, _ni4.kaih = 1, 209 == _ni1.ship_id ? _ni4.houg += 1 : 149 == _ni1.ship_id ? (_ni4.houg += 2, _ni4.tyku += 1) : 591 == _ni1.ship_id && (_ni4.houg += 3, _ni4.tyku += 1, _ni4.raig += 2)) : 'ひえい' == _ni1.yomi ? (_ni4.houg = 1, _ni4.kaih = 1, 210 == _ni1.ship_id ? _ni4.houg += 1 : 150 == _ni1.ship_id ? (_ni4.houg += 2, _ni4.tyku += 1) : 592 == _ni1.ship_id && (_ni4.houg += 3, _ni4.tyku += 1, _ni4.raig += 2)) : 'はるな' == _ni1.yomi ? (_ni4.houg = 1, _ni4.kaih = 1, 211 == _ni1.ship_id ? _ni4.houg += 1 : 151 == _ni1.ship_id ? (_ni4.houg += 2, _ni4.tyku += 1) : 593 == _ni1.ship_id ? (_ni4.houg += 2, _ni4.tyku += 3, _ni4.raig += 1) : 954 == _ni1.ship_id && (_ni4.houg += 3, _ni4.tyku += 1, _ni4.raig += 2)) : 'きりしま' == _ni1.yomi ? (_ni4.houg = 1, _ni4.kaih = 1, 212 == _ni1.ship_id ? _ni4.houg += 1 : 152 == _ni1.ship_id && (_ni4.houg += 2, _ni4.tyku += 1)) : ('ふそう' == _ni1.yomi || 'やましろ' == _ni1.yomi || 'いせ' == _ni1.yomi || 'ひゅうが' == _ni1.yomi) && (_ni4.houg = 1), !_ni4.exists()) return _ni3;
            var _ni5 = _ni1.get_slotnums(329);
            return _ni3 = _ni4.multiply(_ni5);
        };
    },
    72176: (_ni6, _ni7, _ni8) => {
        'use strict';
        var _ni9 = null;
        defineModule(_ni7);
        Object.defineProperty(_ni7, '__esModule', {
            'value': true
        }), _ni7.getSlot335PersonalEffect = void 0;
        var _nia = _ni8(74496);
        _ni7.getSlot335PersonalEffect = function(_nib) {
            var _nic = null,
                _nid = new _nia.SlotItemEffectModel(),
                _nie = new _nia.SlotItemEffectModel();
            if (277 == _nib.ship_id || 278 == _nib.ship_id ? (_nie.tyku = 1, _nie.kaih = 1) : 594 != _nib.ship_id && 599 != _nib.ship_id && 610 != _nib.ship_id && 646 != _nib.ship_id && 698 != _nib.ship_id || (_nie.tyku = 2, _nie.kaih = 1), !_nie.exists()) return _nid;
            var _nif = _nib.get_slotnums(335);
            return _nid = _nie.multiply(_nif);
        };
    },
    33846: (_nig, _nih, _nii) => {
        'use strict';
        var _nij = null;
        defineModule(_nih);
        Object.defineProperty(_nih, '__esModule', {
            'value': true
        }), _nih.getSlot336PersonalEffect = void 0;
        var _nik = _nii(74496);
        _nih.getSlot336PersonalEffect = function(_nil) {
            var _nim = null,
                _nin = new _nik.SlotItemEffectModel(),
                _nio = new _nik.SlotItemEffectModel();
            if (277 == _nil.ship_id || 278 == _nil.ship_id ? (_nio.houg = 1, _nio.tyku = 1, _nio.kaih = 1) : 594 != _nil.ship_id && 599 != _nil.ship_id && 610 != _nil.ship_id && 646 != _nil.ship_id && 698 != _nil.ship_id || (_nio.houg = 1, _nio.tyku = 2, _nio.kaih = 1), !_nio.exists()) return _nin;
            var _nip = _nil.get_slotnums(336);
            return _nin = _nio.multiply(_nip);
        };
    },
    97157: (_niq, _nir, _nis) => {
        'use strict';
        var _nit = null;
        defineModule(_nir);
        Object.defineProperty(_nir, '__esModule', {
            'value': true
        }), _nir.getSlot337PersonalEffect = void 0;
        var _niu = _nis(74496);
        _nir.getSlot337PersonalEffect = function(_niv) {
            var _niw = null,
                _nix = new _niu.SlotItemEffectModel(),
                _niy = new _niu.SlotItemEffectModel();
            if (277 == _niv.ship_id || 278 == _niv.ship_id ? (_niy.houg = 1, _niy.tyku = 1, _niy.kaih = 1) : 594 != _niv.ship_id && 599 != _niv.ship_id && 610 != _niv.ship_id && 646 != _niv.ship_id && 698 != _niv.ship_id || (_niy.houg = 2, _niy.tyku = 2, _niy.kaih = 1), !_niy.exists()) return _nix;
            var _niz = _niv.get_slotnums(337);
            return _nix = _niy.multiply(_niz);
        };
    },
    63406: (_nj0, _nj1, _nj2) => {
        'use strict';
        var _nj3 = null;
        defineModule(_nj1);
        Object.defineProperty(_nj1, '__esModule', {
            'value': true
        }), _nj1.getSlot338PersonalEffect = void 0;
        var _nj4 = _nj2(74496);
        _nj1.getSlot338PersonalEffect = function(_nj5) {
            var _nj6 = null,
                _nj7 = new _nj4.SlotItemEffectModel(),
                _nj8 = new _nj4.SlotItemEffectModel();
            if (277 == _nj5.ship_id || 278 == _nj5.ship_id ? (_nj8.houg = 1, _nj8.tyku = 1, _nj8.kaih = 2) : 594 == _nj5.ship_id || 646 == _nj5.ship_id || 698 == _nj5.ship_id ? (_nj8.houg = 1, _nj8.tyku = 2, _nj8.kaih = 3) : 599 != _nj5.ship_id && 610 != _nj5.ship_id || (_nj8.houg = 4, _nj8.tyku = 3, _nj8.kaih = 4), !_nj8.exists()) return _nj7;
            var _nj9 = _nj5.get_slotnums(338);
            return _nj7 = _nj8.multiply(_nj9);
        };
    },
    66373: (_nja, _njb, _njc) => {
        'use strict';
        var _njd = null;
        defineModule(_njb);
        Object.defineProperty(_njb, '__esModule', {
            'value': true
        }), _njb.getSlot339PersonalEffect = void 0;
        var _nje = _njc(74496);
        _njb.getSlot339PersonalEffect = function(_njf) {
            var _njg = null,
                _njh = new _nje.SlotItemEffectModel(),
                _nji = new _nje.SlotItemEffectModel();
            if (277 == _njf.ship_id || 278 == _njf.ship_id ? (_nji.houg = 1, _nji.tyku = 2, _nji.kaih = 2) : 594 == _njf.ship_id || 646 == _njf.ship_id || 698 == _njf.ship_id ? (_nji.houg = 1, _nji.tyku = 3, _nji.kaih = 4) : 599 != _njf.ship_id && 610 != _njf.ship_id || (_nji.houg = 6, _nji.tyku = 4, _nji.kaih = 5), !_nji.exists()) return _njh;
            var _njj = _njf.get_slotnums(339);
            return _njh = _nji.multiply(_njj);
        };
    },
    19707: (_njk, _njl, _njm) => {
        'use strict';
        var _njn = null;
        defineModule(_njl);
        Object.defineProperty(_njl, '__esModule', {
            'value': true
        }), _njl.getSlot340PersonalEffect = void 0;
        var _njo = _njm(74496);
        _njl.getSlot340PersonalEffect = function(_njp) {
            var _njq = null,
                _njr = new _njo.SlotItemEffectModel(),
                _njs = new _njo.SlotItemEffectModel();
            if ('ガリバルディ' != _njp.yomi && 'アブルッツィ' != _njp.yomi || (_njs.houg = 1, _njs.tyku = 1, _njs.kaih = 1), !_njs.exists()) return _njr;
            var _njt = _njp.get_slotnums(340);
            return _njr = _njs.multiply(_njt);
        };
    },
    63978: (_nju, _njv, _njw) => {
        'use strict';
        var _njx = null;
        defineModule(_njv);
        Object.defineProperty(_njv, '__esModule', {
            'value': true
        }), _njv.getSlot341PersonalEffect = void 0;
        var _njy = _njw(74496);
        _njv.getSlot341PersonalEffect = function(_njz) {
            var _nk0 = null,
                _nk1 = new _njy.SlotItemEffectModel(),
                _nk2 = new _njy.SlotItemEffectModel();
            if ('ガリバルディ' == _njz.yomi || 'アブルッツィ' == _njz.yomi ? (_nk2.houg = 2, _nk2.tyku = 1, _nk2.kaih = 1) : 'ゴトランド' == _njz.yomi && (_nk2.houg = 1, _nk2.tyku = 1, _nk2.kaih = 1), !_nk2.exists()) return _nk1;
            var _nk3 = _njz.get_slotnums(341);
            return _nk1 = _nk2.multiply(_nk3);
        };
    },
    92382: (_nk4, _nk5, _nk6) => {
        'use strict';
        var _nk7 = null;
        defineModule(_nk5);
        Object.defineProperty(_nk5, '__esModule', {
            'value': true
        }), _nk5.getSlot342PersonalEffect = void 0;
        var _nk8 = _nk6(74496);
        _nk5.getSlot342PersonalEffect = function(_nk9) {
            var _nka = null,
                _nkb = new _nk8.SlotItemEffectModel(),
                _nkc = new _nk8.SlotItemEffectModel();
            if (277 == _nk9.ship_id || 278 == _nk9.ship_id || 461 == _nk9.ship_id || 466 == _nk9.ship_id || 462 == _nk9.ship_id || 467 == _nk9.ship_id ? _nkc.houg = 1 : 594 == _nk9.ship_id || 646 == _nk9.ship_id || 698 == _nk9.ship_id ? (_nkc.houg = 2, _nkc.tyku = 1, _nkc.kaih = 1) : 599 != _nk9.ship_id && 610 != _nk9.ship_id || (_nkc.houg = 3, _nkc.tyku = 2, _nkc.kaih = 2), !_nkc.exists()) return _nkb;
            var _nkd = _nk9.get_slotnums(342);
            return _nkb = _nkc.multiply(_nkd);
        };
    },
    78415: (_nke, _nkf, _nkg) => {
        'use strict';
        var _nkh = null;
        defineModule(_nkf);
        Object.defineProperty(_nkf, '__esModule', {
            'value': true
        }), _nkf.getSlot343PersonalEffect = void 0;
        var _nki = _nkg(74496);
        _nkf.getSlot343PersonalEffect = function(_nkj) {
            var _nkk = null,
                _nkl = new _nki.SlotItemEffectModel(),
                _nkm = new _nki.SlotItemEffectModel();
            if (277 == _nkj.ship_id || 278 == _nkj.ship_id ? _nkm.houg = 2 : 461 == _nkj.ship_id || 466 == _nkj.ship_id || 462 == _nkj.ship_id || 467 == _nkj.ship_id ? _nkm.houg = 1 : 594 == _nkj.ship_id || 646 == _nkj.ship_id || 698 == _nkj.ship_id ? (_nkm.houg = 3, _nkm.tyku = 2, _nkm.kaih = 1) : 599 != _nkj.ship_id && 610 != _nkj.ship_id || (_nkm.houg = 5, _nkm.tyku = 3, _nkm.kaih = 3), !_nkm.exists()) return _nkl;
            var _nkn = _nkj.get_slotnums(343);
            return _nkl = _nkm.multiply(_nkn);
        };
    },
    23090: (_nko, _nkp, _nkq) => {
        'use strict';
        var _nkr = null;
        defineModule(_nkp);
        Object.defineProperty(_nkp, '__esModule', {
            'value': true
        }), _nkp.getSlot344PersonalEffect = void 0;
        var _nks = _nkq(74496);
        _nkp.getSlot344PersonalEffect = function(_nkt) {
            var _nku = null,
                _nkv = new _nks.SlotItemEffectModel(),
                _nkw = new _nks.SlotItemEffectModel();
            if (599 == _nkt.ship_id || 610 == _nkt.ship_id ? _nkw.houg = 3 : 555 == _nkt.ship_id || 560 == _nkt.ship_id ? (_nkw.houg = 2, _nkw.tais = 2) : 318 == _nkt.ship_id ? (_nkw.houg = 4, _nkw.tais = 1) : 282 == _nkt.ship_id ? (_nkw.houg = 2, _nkw.tais = 1) : 888 == _nkt.ship_id ? (_nkw.houg = 4, _nkw.tais = 2) : 883 == _nkt.ship_id && (_nkw.houg = 5, _nkw.tais = 2), !_nkw.exists()) return _nkv;
            var _nkx = _nkt.get_slotnums(344);
            return _nkv = _nkw.multiply(_nkx);
        };
    },
    18776: (_nky, _nkz, _nl0) => {
        'use strict';
        var _nl1 = null;
        defineModule(_nkz);
        Object.defineProperty(_nkz, '__esModule', {
            'value': true
        }), _nkz.getSlot345PersonalEffect = void 0;
        var _nl2 = _nl0(74496);
        _nkz.getSlot345PersonalEffect = function(_nl3) {
            var _nl4 = null,
                _nl5 = new _nl2.SlotItemEffectModel(),
                _nl6 = new _nl2.SlotItemEffectModel();
            if (599 == _nl3.ship_id || 610 == _nl3.ship_id ? (_nl6.houg = 3, _nl6.kaih = 1) : 555 == _nl3.ship_id || 560 == _nl3.ship_id ? (_nl6.houg = 3, _nl6.tais = 2, _nl6.kaih = 2) : 318 == _nl3.ship_id ? (_nl6.houg = 5, _nl6.tais = 1, _nl6.kaih = 2) : 282 == _nl3.ship_id ? (_nl6.houg = 3, _nl6.tais = 1, _nl6.kaih = 1) : 888 == _nl3.ship_id ? (_nl6.houg = 4, _nl6.tais = 2, _nl6.kaih = 2) : 883 == _nl3.ship_id && (_nl6.houg = 5, _nl6.tais = 2, _nl6.kaih = 3), !_nl6.exists()) return _nl5;
            var _nl7 = _nl3.get_slotnums(345);
            return _nl5 = _nl6.multiply(_nl7);
        };
    },
    89058: (_nl8, _nl9, _nla) => {
        'use strict';
        var _nlb = null;
        defineModule(_nl9);
        Object.defineProperty(_nl9, '__esModule', {
            'value': true
        }), _nl9.getSlot346PersonalEffect = void 0;
        var _nlc = _nla(74496);
        _nl9.getSlot346PersonalEffect = function(_nld) {
            var _nle = null,
                _nlf = new _nlc.SlotItemEffectModel();
            return 'やましおまる' == _nld.yomi && (_nlf.kaih += 1, _nlf.tais += 1), _nlf;
        };
    },
    84372: (_nlg, _nlh, _nli) => {
        'use strict';
        var _nlj = null;
        defineModule(_nlh);
        Object.defineProperty(_nlh, '__esModule', {
            'value': true
        }), _nlh.getSlot347PersonalEffect = void 0;
        var _nlk = _nli(74496);
        _nlh.getSlot347PersonalEffect = function(_nll) {
            var _nlm = null,
                _nln = new _nlk.SlotItemEffectModel();
            return 'やましおまる' == _nll.yomi && (_nln.kaih += 2, _nln.tais += 2), _nln;
        };
    },
    39656: (_nlo, _nlp, _nlq) => {
        'use strict';
        var _nlr = null;
        defineModule(_nlp);
        Object.defineProperty(_nlp, '__esModule', {
            'value': true
        }), _nlp.getSlot356_357PersonalEffect = void 0;
        var _nls = _nlq(74496);
        _nlp.getSlot356_357PersonalEffect = function(_nlt) {
            var _nlu = null,
                _nlv = new _nls.SlotItemEffectModel(),
                _nlw = new _nls.SlotItemEffectModel();
            if (95 == _nlt.ctype ? _nlw.houg = 2 : 9 == _nlt.ctype && (_nlw.houg = 1), !_nlw.exists()) return _nlv;
            var _nlx = _nlt.get_slotnums(356) + _nlt.get_slotnums(357);
            return _nlv = _nlw.multiply(_nlx);
        };
    },
    66039: (_nly, _nlz, _nm0) => {
        'use strict';
        var _nm1 = null;
        defineModule(_nlz);
        Object.defineProperty(_nlz, '__esModule', {
            'value': true
        }), _nlz.getSlot358PersonalEffect = void 0;
        var _nm2 = _nm0(74496);
        _nlz.getSlot358PersonalEffect = function(_nm3) {
            var _nm4 = null,
                _nm5 = new _nm2.SlotItemEffectModel(),
                _nm6 = new _nm2.SlotItemEffectModel();
            if ('アメリカ' != _nm3.getCountryName() && 67 != _nm3.ctype && 78 != _nm3.ctype && 82 != _nm3.ctype && 88 != _nm3.ctype && 108 != _nm3.ctype && 112 != _nm3.ctype) return _nm5;
            _nm6.houg += 1, _nm6.kaih += 1, _nm6.tyku += 1, 95 == _nm3.ctype && (_nm6.houg += 1, _nm6.kaih += 2, _nm6.tyku += 2);
            var _nm7 = _nm3.get_slotnums(358);
            return _nm5 = _nm6.multiply(_nm7);
        };
    },
    64679: (_nm8, _nm9, _nma) => {
        'use strict';
        var _nmb = null;
        defineModule(_nm9);
        Object.defineProperty(_nm9, '__esModule', {
            'value': true
        }), _nm9.getSlot359PersonalEffect = void 0;
        var _nmc = _nma(74496);
        _nm9.getSlot359PersonalEffect = function(_nmd) {
            var _nme = null,
                _nmf = new _nmc.SlotItemEffectModel(),
                _nmg = new _nmc.SlotItemEffectModel();
            if ('パース' == _nmd.yomi ? (_nmg.houg = 2, _nmg.tyku = 2, _nmg.kaih = 1) : 'ゆうばり' == _nmd.yomi && (_nmg.houg = 1, _nmg.tyku = 1, _nmg.kaih = 1), 622 != _nmd.ship_id && 623 != _nmd.ship_id && 624 != _nmd.ship_id || (_nmg.houg += 1, _nmg.tyku += 1), !_nmg.exists()) return _nmf;
            var _nmh = _nmd.get_slotnums(359);
            return _nmf = _nmg.multiply(_nmh);
        };
    },
    69954: (_nmi, _nmj, _nmk) => {
        'use strict';
        var _nml = null;
        defineModule(_nmj);
        Object.defineProperty(_nmj, '__esModule', {
            'value': true
        }), _nmj.getSlot35PersonalEffect = void 0;
        var _nmm = _nmk(74496);
        _nmj.getSlot35PersonalEffect = function(_nmn) {
            var _nmo = null,
                _nmp = new _nmm.SlotItemEffectModel(),
                _nmq = new _nmm.SlotItemEffectModel();
            return 149 == _nmn.ship_id || 591 == _nmn.ship_id || 592 == _nmn.ship_id ? (_nmq.houg += 1, _nmq.tyku += 1) : 150 == _nmn.ship_id ? _nmq.tyku += 1 : 151 == _nmn.ship_id || 593 == _nmn.ship_id || 954 == _nmn.ship_id ? (_nmq.tyku += 1, _nmq.kaih += 1) : 152 == _nmn.ship_id && (_nmq.houg += 1), _nmq.exists() ? _nmp = _nmq.multiply(1) : _nmp;
        };
    },
    95953: (_nmr, _nms, _nmt) => {
        'use strict';
        var _nmu = null;
        defineModule(_nms);
        Object.defineProperty(_nms, '__esModule', {
            'value': true
        }), _nms.getSlot360_361PersonalEffect = void 0;
        var _nmv = _nmt(74496);
        _nms.getSlot360_361PersonalEffect = function(_nmw) {
            var _nmx = null,
                _nmy = new _nmv.SlotItemEffectModel(),
                _nmz = new _nmv.SlotItemEffectModel();
            if ('デ・ロイテル' == _nmw.yomi ? (_nmz.houg = 2, _nmz.tyku = 2, _nmz.kaih = 1) : 'ゴトランド' == _nmw.yomi && (_nmz.houg = 2, _nmz.tyku = 1, _nmz.kaih = 1), 41 == _nmw.ctype && (_nmz.houg = 1, _nmz.tyku = 1), !_nmz.exists()) return _nmy;
            var _nn0 = _nmw.get_slotnums(360) + _nmw.get_slotnums(361);
            return _nmy = _nmz.multiply(_nn0);
        };
    },
    86384: (_nn1, _nn2, _nn3) => {
        'use strict';
        var _nn4 = null;
        defineModule(_nn2);
        Object.defineProperty(_nn2, '__esModule', {
            'value': true
        }), _nn2.getSlot362_363PersonalEffect = void 0;
        var _nn5 = _nn3(74496);
        _nn2.getSlot362_363PersonalEffect = function(_nn6) {
            var _nn7 = null,
                _nn8 = new _nn5.SlotItemEffectModel(),
                _nn9 = new _nn5.SlotItemEffectModel(),
                _nna = false;
            if (99 == _nn6.ctype ? (_nn9.houg = 1, _nn9.tyku = 2, _nn9.kaih = 1, _nna = true) : 34 == _nn6.ctype || 21 == _nn6.ctype ? (_nn9.houg = -3, _nn9.tyku = -3, _nn9.kaih = -8, _nna = true) : 4 == _nn6.ctype || 20 == _nn6.ctype || 16 == _nn6.ctype ? (_nn9.houg = -3, _nn9.tyku = -2, _nn9.kaih = -6, _nna = true) : 89 == _nn6.ctype || 56 == _nn6.ctype ? (_nn9.houg = -2, _nn9.tyku = -1, _nn9.kaih = -4, _nna = true) : 52 != _nn6.ctype && 41 != _nn6.ctype && 98 != _nn6.ctype || (_nn9.tyku = -1, _nn9.kaih = -2, _nna = true), 'アメリカ' == _nn6.getCountryName() && (_nn9.tyku += 1, _nn9.kaih += 1, _nna = true), 0 == _nna) return _nn8;
            var _nnb = _nn6.get_slotnums(362) + _nn6.get_slotnums(363);
            return _nn8 = _nn9.multiply(_nnb);
        };
    },
    65345: (_nnc, _nnd, _nne) => {
        'use strict';
        var _nnf = null;
        defineModule(_nnd);
        Object.defineProperty(_nnd, '__esModule', {
            'value': true
        }), _nnd.getSlot364PersonalEffect = void 0;
        var _nng = _nne(74496);
        _nnd.getSlot364PersonalEffect = function(_nnh) {
            var _nni = null;
            new _nng.SlotItemEffectModel();
            var _nnj = new _nng.SlotItemEffectModel();
            623 == _nnh.ship_id || 586 == _nnh.ship_id || 119 == _nnh.ship_id || 118 == _nnh.ship_id || 657 == _nnh.ship_id || 506 == _nnh.ship_id || 668 == _nnh.ship_id || 507 == _nnh.ship_id ? (_nnj.raig = 1, _nnj.kaih = -2, 119 == _nnh.ship_id ? _nnj.raig += 1 : 507 == _nnh.ship_id ? _nnj.raig += 2 : 623 == _nnh.ship_id && (_nnj.houg += 1, _nnj.raig += 3)) : (_nnj.houg = -1, _nnj.kaih = -7);
            var _nnk = _nnh.get_slotnums(364);
            return _nnj.multiply(_nnk);
        };
    },
    46514: (_nnl, _nnm, _nnn) => {
        'use strict';
        var _nno = null;
        defineModule(_nnm);
        Object.defineProperty(_nnm, '__esModule', {
            'value': true
        }), _nnm.getSlot365PersonalEffect = void 0;
        var _nnp = _nnn(74496);
        _nnm.getSlot365PersonalEffect = function(_nnq) {
            var _nnr = null,
                _nns = new _nnp.SlotItemEffectModel(),
                _nnt = new _nnp.SlotItemEffectModel(),
                _nnu = false;
            return 37 != _nnq.ctype && 19 != _nnq.ctype && 2 != _nnq.ctype && 26 != _nnq.ctype && 6 != _nnq.ctype || (_nnt.houg += 1, _nnu = true), 136 != _nnq.ship_id && 148 != _nnq.ship_id && 546 != _nnq.ship_id && 541 != _nnq.ship_id && 573 != _nnq.ship_id && 911 != _nnq.ship_id && 916 != _nnq.ship_id && 593 != _nnq.ship_id || (_nnt.houg += 1, _nnu = true), 591 != _nnq.ship_id && 592 != _nnq.ship_id && 954 != _nnq.ship_id || (_nnt.houg += 2, _nnu = true), 0 == _nnu ? _nns : _nns = _nnt.multiply(1);
        };
    },
    81976: (_nnv, _nnw, _nnx) => {
        'use strict';
        var _nny = null;
        defineModule(_nnw);
        Object.defineProperty(_nnw, '__esModule', {
            'value': true
        }), _nnw.getSlot367PersonalEffect = void 0;
        var _nnz = _nnx(74496);
        _nnw.getSlot367PersonalEffect = function(_no0) {
            var _no1 = null,
                _no2 = new _nnz.SlotItemEffectModel(),
                _no3 = new _nnz.SlotItemEffectModel(),
                _no4 = false;
            if ('ゴトランド' == _no0.yomi && (_no3.houg += 2, _no3.tais += 1, _no3.kaih += 1, _no3.saku += 1, _no4 = true), 70 == _no0.ctype ? (_no3.houg += 1, _no3.tais += 1, _no3.kaih += 1, _no3.saku += 1, _no4 = true) : 72 == _no0.ctype || 62 == _no0.ctype ? (_no3.houg += 1, _no3.kaih += 1, _no3.saku += 1, _no4 = true) : 67 != _no0.ctype && 78 != _no0.ctype && 82 != _no0.ctype && 88 != _no0.ctype && 108 != _no0.ctype && 112 != _no0.ctype || (_no3.houg += 2, _no3.kaih += 2, _no3.saku += 2, _no4 = true), 0 == _no4) return _no2;
            var _no5 = _no0.get_slotnums(367);
            return _no2 = _no3.multiply(_no5);
        };
    },
    89331: (_no6, _no7, _no8) => {
        'use strict';
        var _no9 = null;
        defineModule(_no7);
        Object.defineProperty(_no7, '__esModule', {
            'value': true
        }), _no7.getSlot368PersonalEffect = void 0;
        var _noa = _no8(74496);
        _no7.getSlot368PersonalEffect = function(_nob) {
            var _noc = null,
                _nod = new _noa.SlotItemEffectModel(),
                _noe = new _noa.SlotItemEffectModel(),
                _nof = false;
            if ('ゴトランド' == _nob.yomi && (_noe.houg = 4, _noe.tais = 3, _noe.kaih = 2, _noe.saku = 3, _nof = true, 630 == _nob.ship_id && (_nod.houg += 2, _nod.raig += 2, _nod.kaih += 1, _nod.saku += 1)), 70 == _nob.ctype ? (_noe.houg = 2, _noe.tais = 3, _noe.kaih = 1, _noe.saku = 2, _nof = true) : 72 == _nob.ctype || 62 == _nob.ctype ? (_noe.houg += 1, _noe.tais += 2, _noe.kaih += 1, _noe.saku += 2, _nof = true) : 67 != _nob.ctype && 78 != _nob.ctype && 82 != _nob.ctype && 88 != _nob.ctype && 108 != _nob.ctype && 112 != _nob.ctype || (_noe.houg += 2, _noe.tais += 2, _noe.kaih += 2, _noe.saku += 2, _nof = true), 0 == _nof) return _nod;
            var _nog = _nob.get_slotnums(368);
            return _nod.add(_noe.multiply(_nog)), _nod;
        };
    },
    73973: (_noh, _noi, _noj) => {
        'use strict';
        var _nok = null;
        defineModule(_noi);
        Object.defineProperty(_noi, '__esModule', {
            'value': true
        }), _noi.getSlot369PersonalEffect = void 0;
        var _nol = _noj(74496);
        _noi.getSlot369PersonalEffect = function(_nom) {
            var _non = null,
                _noo = new _nol.SlotItemEffectModel(),
                _nop = new _nol.SlotItemEffectModel(),
                _noq = false;
            if ('ゴトランド' == _nom.yomi && (_nop.houg = 5, _nop.tais = 4, _nop.kaih = 4, _nop.saku = 3, _noq = true, 630 == _nom.ship_id && (_noo.houg += 3, _noo.raig += 3, _noo.kaih += 2, _noo.saku += 2)), 70 == _nom.ctype ? (_nop.houg += 3, _nop.tais += 3, _nop.kaih += 2, _nop.saku += 3, _noq = true) : 72 == _nom.ctype || 62 == _nom.ctype ? (_nop.houg += 2, _nop.tais += 2, _nop.kaih += 1, _nop.saku += 2, _noq = true) : 67 != _nom.ctype && 78 != _nom.ctype && 82 != _nom.ctype && 88 != _nom.ctype && 108 != _nom.ctype && 112 != _nom.ctype || (_nop.houg += 2, _nop.tais += 2, _nop.kaih += 2, _nop.saku += 2, _noq = true), 0 == _noq) return _noo;
            var _nor = _nom.get_slotnums(369);
            return _noo.add(_nop.multiply(_nor)), _noo;
        };
    },
    21178: (_nos, _not, _nou) => {
        'use strict';
        var _nov = null;
        defineModule(_not);
        Object.defineProperty(_not, '__esModule', {
            'value': true
        }), _not.getSlot370PersonalEffect = void 0;
        var _now = _nou(74496);
        _not.getSlot370PersonalEffect = function(_nox) {
            var _noy = null,
                _noz = new _now.SlotItemEffectModel(),
                _np0 = new _now.SlotItemEffectModel(),
                _np1 = false;
            if ('ゴトランド' == _nox.yomi && (_np0.houg = 1, _np0.tais = 3, _np0.kaih = 1, _np0.saku = 2, _np1 = true), 70 == _nox.ctype ? (_np0.houg += 1, _np0.tais += 3, _np0.kaih += 1, _np0.saku += 1, _np1 = true) : 72 == _nox.ctype || 62 == _nox.ctype ? (_np0.houg += 1, _np0.tais += 2, _np0.kaih += 1, _np0.saku += 1, _np1 = true) : 67 != _nox.ctype && 78 != _nox.ctype && 82 != _nox.ctype && 88 != _nox.ctype && 108 != _nox.ctype && 112 != _nox.ctype || (_np0.houg += 2, _np0.tais += 3, _np0.kaih += 2, _np0.saku += 2, _np1 = true, 'ウォースパイト' == _nox.yomi && (_noz.houg += 4, _noz.kaih += 1, _noz.saku += 1)), 0 == _np1) return _noz;
            var _np2 = _nox.get_slotnums(370);
            return _noz.add(_np0.multiply(_np2)), _noz;
        };
    },
    5079: (_np3, _np4, _np5) => {
        'use strict';
        var _np6 = null;
        defineModule(_np4);
        Object.defineProperty(_np4, '__esModule', {
            'value': true
        }), _np4.getSlot371PersonalEffect = void 0;
        var _np7 = _np5(74496);
        _np4.getSlot371PersonalEffect = function(_np8) {
            var _np9 = null,
                _npa = new _np7.SlotItemEffectModel(),
                _npb = new _np7.SlotItemEffectModel(),
                _npc = false;
            if ('ゴトランド' == _np8.yomi && (_npb.houg = 4, _npb.tais = 2, _npb.kaih = 3, _npb.saku = 6, _npc = true, 630 == _np8.ship_id && (_npa.houg += 2, _npa.kaih += 2, _npa.saku += 3)), 70 == _np8.ctype ? (_npb.houg += 2, _npb.tais += 1, _npb.kaih += 2, _npb.saku += 4, _npc = true) : 79 == _np8.ctype ? (_npb.houg += 2, _npb.kaih += 1, _npb.saku += 3, _npc = true) : 67 != _np8.ctype && 78 != _np8.ctype && 82 != _np8.ctype && 88 != _np8.ctype && 108 != _np8.ctype && 112 != _np8.ctype || (_npb.houg += 3, _npb.tais += 1, _npb.kaih += 2, _npb.saku += 3, _npc = true, 88 == _np8.ctype && (_npa.houg += 3, _npa.kaih += 2, _npa.saku += 2)), 0 == _npc) return _npa;
            var _npd = _np8.get_slotnums(371);
            return _npa.add(_npb.multiply(_npd)), _npa;
        };
    },
    95014: (_npe, _npf, _npg) => {
        'use strict';
        var _nph = null;
        defineModule(_npf);
        Object.defineProperty(_npf, '__esModule', {
            'value': true
        }), _npf.getSlot372PersonalEffect = void 0;
        var _npi = _npg(74496);
        _npf.getSlot372PersonalEffect = function(_npj) {
            var _npk = null,
                _npl = new _npi.SlotItemEffectModel(),
                _npm = false,
                _npn = new _npi.SlotItemEffectModel();
            if ('しょうかく' == _npj.yomi || 'ずいかく' == _npj.yomi || 'たいほう' == _npj.yomi ? (_npn.houg += 1, _npm = true, _npl.raig += 1) : 'じゅんよう' != _npj.yomi && 'ひよう' != _npj.yomi || (_npn.houg += 1, _npm = true), 108 == _npj.ship_id || 109 == _npj.ship_id || 291 == _npj.ship_id || 292 == _npj.ship_id || 296 == _npj.ship_id || 297 == _npj.ship_id ? (_npn.houg += 1, _npm = true) : 116 == _npj.ship_id || 74 == _npj.ship_id || 117 == _npj.ship_id || 282 == _npj.ship_id || 185 == _npj.ship_id ? (_npn.tais += 1, _npm = true) : 560 == _npj.ship_id || 555 == _npj.ship_id || 318 == _npj.ship_id ? (_npn.tais += 1, _npm = true, _npl.raig += 1) : 508 == _npj.ship_id || 509 == _npj.ship_id ? (_npn.houg += 1, _npm = true) : 883 != _npj.ship_id && 888 != _npj.ship_id || (_npn.houg += 2, _npn.tais += 1, _npm = true, _npl.raig += 2), 0 == _npm) return _npl;
            var _npo = _npj.get_slotnums(372);
            return _npl.add(_npn.multiply(_npo)), _npl;
        };
    },
    53099: (_npp, _npq, _npr) => {
        'use strict';
        var _nps = null;
        defineModule(_npq);
        Object.defineProperty(_npq, '__esModule', {
            'value': true
        }), _npq.getSlot373PersonalEffect = void 0;
        var _npt = _npr(74496);
        _npq.getSlot373PersonalEffect = function(_npu) {
            var _npv = null,
                _npw = new _npt.SlotItemEffectModel(),
                _npx = new _npt.SlotItemEffectModel(),
                _npy = false;
            if ('しょうかく' == _npu.yomi ? (_npx.houg += 2, _npy = true, _npw.raig += 2, _npw.kaih += 2) : 'ずいかく' == _npu.yomi ? (_npx.houg += 1, _npy = true, _npw.raig += 2, _npw.kaih += 3) : 'たいほう' == _npu.yomi ? (_npx.houg += 1, _npy = true, _npw.raig += 2, _npw.kaih += 2) : 'じゅんよう' != _npu.yomi && 'ひよう' != _npu.yomi || (_npx.houg += 1, _npy = true, _npw.raig += 1, _npw.kaih += 1), 108 == _npu.ship_id || 109 == _npu.ship_id ? (_npx.houg += 1, _npy = true) : 291 == _npu.ship_id || 292 == _npu.ship_id ? (_npx.houg += 1, _npy = true, _npw.raig += 1) : 296 == _npu.ship_id || 297 == _npu.ship_id ? (_npx.houg += 1, _npy = true, _npw.raig += 1, _npw.kaih += 1) : 116 == _npu.ship_id || 74 == _npu.ship_id ? (_npx.tais += 1, _npy = true) : 117 == _npu.ship_id || 282 == _npu.ship_id || 185 == _npu.ship_id ? (_npx.houg += 1, _npx.tais += 1, _npy = true, _npw.raig += 1) : 560 == _npu.ship_id || 555 == _npu.ship_id || 318 == _npu.ship_id ? (_npx.houg += 1, _npx.tais += 2, _npy = true, _npw.raig += 1, _npw.kaih += 1) : 508 == _npu.ship_id || 509 == _npu.ship_id ? (_npx.houg += 1, _npy = true, _npw.raig += 2, _npw.kaih += 2) : 888 == _npu.ship_id ? (_npx.houg += 2, _npx.tais += 2, _npy = true, _npw.raig += 2, _npw.kaih += 2) : 883 == _npu.ship_id && (_npx.houg += 1, _npx.tais += 2, _npy = true, _npw.raig += 3, _npw.kaih += 4), 0 == _npy) return _npw;
            var _npz = _npu.get_slotnums(373);
            return _npw.add(_npx.multiply(_npz)), _npw;
        };
    },
    76201: (_nq0, _nq1, _nq2) => {
        'use strict';
        var _nq3 = null;
        defineModule(_nq1);
        Object.defineProperty(_nq1, '__esModule', {
            'value': true
        }), _nq1.getSlot374PersonalEffect = void 0;
        var _nq4 = _nq2(74496);
        _nq1.getSlot374PersonalEffect = function(_nq5) {
            var _nq6 = null,
                _nq7 = new _nq4.SlotItemEffectModel(),
                _nq8 = new _nq4.SlotItemEffectModel(),
                _nq9 = false;
            if ('しょうかく' == _nq5.yomi ? (_nq8.houg += 3, _nq9 = true, _nq7.raig += 3, _nq7.kaih += 3) : 'ずいかく' == _nq5.yomi ? (_nq8.houg += 2, _nq9 = true, _nq7.raig += 3, _nq7.kaih += 4) : 'たいほう' == _nq5.yomi ? (_nq8.houg += 2, _nq9 = true, _nq7.raig += 3, _nq7.kaih += 2) : 'じゅんよう' != _nq5.yomi && 'ひよう' != _nq5.yomi || (_nq8.houg += 1, _nq9 = true, _nq7.raig += 2, _nq7.kaih += 2), 108 == _nq5.ship_id || 109 == _nq5.ship_id ? (_nq8.houg += 1, _nq9 = true, _nq7.raig += 1) : 291 == _nq5.ship_id || 292 == _nq5.ship_id ? (_nq8.houg += 1, _nq8.tais += 1, _nq9 = true, _nq7.raig += 1) : 296 == _nq5.ship_id || 297 == _nq5.ship_id ? (_nq8.houg += 1, _nq8.tais += 1, _nq9 = true, _nq7.raig += 1, _nq7.kaih += 1) : 116 == _nq5.ship_id || 74 == _nq5.ship_id ? (_nq8.houg += 1, _nq8.tais += 1, _nq9 = true) : 117 == _nq5.ship_id || 282 == _nq5.ship_id || 185 == _nq5.ship_id ? (_nq8.houg += 1, _nq8.tais += 2, _nq9 = true, _nq7.raig += 1, _nq7.kaih += 1) : 560 == _nq5.ship_id || 555 == _nq5.ship_id || 318 == _nq5.ship_id ? (_nq8.houg += 1, _nq8.tais += 3, _nq9 = true, _nq7.raig += 1, _nq7.kaih += 2) : 508 == _nq5.ship_id || 509 == _nq5.ship_id ? (_nq8.houg += 1, _nq8.tais += 2, _nq9 = true, _nq7.raig += 2, _nq7.kaih += 3) : 888 == _nq5.ship_id ? (_nq8.houg += 3, _nq8.tais += 3, _nq9 = true, _nq7.raig += 2, _nq7.kaih += 3) : 883 == _nq5.ship_id && (_nq8.houg += 2, _nq8.tais += 3, _nq9 = true, _nq7.raig += 3, _nq7.kaih += 5), 0 == _nq9) return _nq7;
            var _nqa = _nq5.get_slotnums(374);
            return _nq7.add(_nq8.multiply(_nqa)), _nq7;
        };
    },
    24931: (_nqb, _nqc, _nqd) => {
        'use strict';
        var _nqe = null;
        defineModule(_nqc);
        Object.defineProperty(_nqc, '__esModule', {
            'value': true
        }), _nqc.getSlot375PersonalEffect = void 0;
        var _nqf = _nqd(74496);
        _nqc.getSlot375PersonalEffect = function(_nqg) {
            var _nqh = null,
                _nqi = new _nqf.SlotItemEffectModel(),
                _nqj = new _nqf.SlotItemEffectModel(),
                _nqk = false;
            if (69 != _nqg.ctype && 83 != _nqg.ctype && 84 != _nqg.ctype && 105 != _nqg.ctype && 116 != _nqg.ctype && 118 != _nqg.ctype || (_nqj.tyku += 3, _nqj.houg += 3, _nqj.kaih += 3, _nqj.tais += 3, _nqk = true), 'かが' == _nqg.yomi && (_nqj.tyku += 1, _nqj.houg += 1, _nqj.kaih += 1, _nqj.tais += 1, _nqk = true), 0 == _nqk) return _nqi;
            var _nql = _nqg.get_slotnums(375);
            return _nqi.add(_nqj.multiply(_nql)), _nqi;
        };
    },
    60978: (_nqm, _nqn, _nqo) => {
        'use strict';
        var _nqp = null;
        defineModule(_nqn);
        Object.defineProperty(_nqn, '__esModule', {
            'value': true
        }), _nqn.getSlot376PersonalEffect = void 0;
        var _nqq = _nqo(74496);
        _nqn.getSlot376PersonalEffect = function(_nqr) {
            var _nqs = null,
                _nqt = new _nqq.SlotItemEffectModel(),
                _nqu = new _nqq.SlotItemEffectModel(),
                _nqv = false;
            if ('アメリカ' == _nqr.getCountryName() ? (_nqu.houg += 2, _nqu.raig += 4, _nqv = true) : 67 == _nqr.ctype || 78 == _nqr.ctype || 82 == _nqr.ctype || 88 == _nqr.ctype || 108 == _nqr.ctype || 112 == _nqr.ctype ? (_nqu.houg += 1, _nqu.raig += 2, _nqv = true) : 96 == _nqr.ctype && (_nqu.houg += 1, _nqu.raig += 1, _nqv = true), 0 == _nqv) return _nqt;
            var _nqw = _nqr.get_slotnums(376);
            return _nqt.add(_nqu.multiply(_nqw)), _nqt;
        };
    },
    74312: (_nqx, _nqy, _nqz) => {
        'use strict';
        var _nr0 = null;
        defineModule(_nqy);
        Object.defineProperty(_nqy, '__esModule', {
            'value': true
        }), _nqy.getSlot377PersonalEffect = void 0;
        var _nr1 = _nqz(74496);
        _nqy.getSlot377PersonalEffect = function(_nr2) {
            var _nr3 = null,
                _nr4 = new _nr1.SlotItemEffectModel();
            return 'アメリカ' == _nr2.getCountryName() ? (_nr4.tais += 2, _nr4.kaih += 1, 629 == _nr2.ship_id && (_nr4.tais += 1, _nr4.kaih += 2)) : 67 != _nr2.ctype && 78 != _nr2.ctype && 82 != _nr2.ctype && 88 != _nr2.ctype && 108 != _nr2.ctype && 112 != _nr2.ctype && 96 != _nr2.ctype || (_nr4.tais += 1, _nr4.kaih += 1), 651 != _nr2.ship_id && 656 != _nr2.ship_id || (_nr4.tais += 1, _nr4.kaih += 2), _nr4;
        };
    },
    54350: (_nr5, _nr6, _nr7) => {
        'use strict';
        var _nr8 = null;
        defineModule(_nr6);
        Object.defineProperty(_nr6, '__esModule', {
            'value': true
        }), _nr6.getSlot378PersonalEffect = void 0;
        var _nr9 = _nr7(74496);
        _nr6.getSlot378PersonalEffect = function(_nra) {
            var _nrb = null,
                _nrc = new _nr9.SlotItemEffectModel();
            return 'アメリカ' == _nra.getCountryName() ? (_nrc.tais += 3, _nrc.kaih += 1, 629 == _nra.ship_id && (_nrc.tais += 1, _nrc.kaih += 1)) : 67 == _nra.ctype || 78 == _nra.ctype || 82 == _nra.ctype || 88 == _nra.ctype || 108 == _nra.ctype || 112 == _nra.ctype ? (_nrc.tais += 2, _nrc.kaih += 1) : 96 == _nra.ctype && (_nrc.tais += 1, _nrc.kaih += 1), 651 != _nra.ship_id && 656 != _nra.ship_id || (_nrc.tais += 1, _nrc.kaih += 1), _nrc;
        };
    },
    26262: function(_nrd, _nre, _nrf) {
        'use strict';
        var _nrg = null;
        var _nrh = this && this.__importDefault || function(_nri) {
            var _nrj = null;
            return _nri && _nri.__esModule ? _nri : {
                'default': _nri
            };
        };
        defineModule(_nre);
        Object.defineProperty(_nre, '__esModule', {
            'value': true
        }), _nre.getSlot379PersonalEffect = void 0;
        var _nrk = _nrf(74496),
            _nrl = _nrh(_nrf(18622));
        _nre.getSlot379PersonalEffect = function(_nrm) {
            var _nrn = null,
                _nro = new _nrk.SlotItemEffectModel(),
                _nrp = false,
                _nrq = new _nrk.SlotItemEffectModel();
            if (1 == _nrm.stype ? (_nrq.tyku += 2, _nrq.houg += 1, _nrp = true) : 21 != _nrm.stype && 16 != _nrm.stype || (_nrq.tyku += 1, _nrq.houg += 1, _nrp = true), 66 == _nrm.ctype || 28 == _nrm.ctype ? (_nrq.houg += 1, _nrq.tyku += 2, _nrp = true) : 101 == _nrm.ctype && (_nrq.tyku += 2, _nrq.houg += 1, _nro.tyku += 2, _nro.houg += 2, _nrp = true), 'ゆら' == _nrm.yomi || 'なか' == _nrm.yomi || 'きぬ' == _nrm.yomi || 'いすず' == _nrm.yomi ? (_nrq.houg += 2, _nrp = true) : 'おおい' != _nrm.yomi && 'きたかみ' != _nrm.yomi || (_nrq.tyku += 2, _nrq.houg += 2, _nrp = true), 'ゆら' != _nrm.yomi && 'なか' != _nrm.yomi && 'きぬ' != _nrm.yomi && 'いすず' != _nrm.yomi && 'ゆうばり' != _nrm.yomi || (_nrq.tais += 1, _nrp = true), 'てんりゅう' != _nrm.yomi && 'たつた' != _nrm.yomi && 'ゆうばり' != _nrm.yomi || (_nrq.houg += 1, _nrp = true), 488 == _nrm.ship_id ? (_nrq.tyku += 4, _nrp = true) : 220 == _nrm.ship_id ? (_nrq.tyku += 3, _nrp = true) : 23 == _nrm.ship_id ? (_nrq.tyku += 2, _nrp = true) : 160 == _nrm.ship_id || 487 == _nrm.ship_id || 141 == _nrm.ship_id ? (_nrq.tyku += 3, _nrp = true) : 224 == _nrm.ship_id || 289 == _nrm.ship_id || 219 == _nrm.ship_id || 56 == _nrm.ship_id || 113 == _nrm.ship_id || 22 == _nrm.ship_id ? (_nrq.tyku += 2, _nrp = true) : 651 != _nrm.ship_id && 656 != _nrm.ship_id || (_nrq.tyku += 3, _nrq.houg += 3, 656 == _nrm.ship_id && (_nrq.kaih += 3, _nrq.tais += 2), _nrp = true), 488 != _nrm.ship_id && 160 != _nrm.ship_id && 487 != _nrm.ship_id && 141 != _nrm.ship_id || (_nrq.tais += 1, _nrp = true), 477 != _nrm.ship_id && 478 != _nrm.ship_id && 624 != _nrm.ship_id || (_nrq.tais += 2, _nrp = true), 477 != _nrm.ship_id && 478 != _nrm.ship_id && 624 != _nrm.ship_id && 622 != _nrm.ship_id || (_nrq.tyku += 2, _nrp = true), 652 != _nrm.ship_id && 657 != _nrm.ship_id && 547 != _nrm.ship_id && 146 != _nrm.ship_id || (_nro.houg += 2), 652 != _nrm.ship_id && 657 != _nrm.ship_id && 547 != _nrm.ship_id && 146 != _nrm.ship_id || (_nro.tyku += 2), _nrp) {
                var _nrr = _nrm.get_slotnums(379);
                _nro.add(_nrq.multiply(_nrr));
            }
            var _nrs = new _nrk.SlotItemEffectModel(),
                _nrt = false;
            16 == _nrm.stype || 3 == _nrm.stype || 4 == _nrm.stype || 21 == _nrm.stype ? (_nrs.houg += 1, _nrs.kaih += 2, _nrt = true) : 1 == _nrm.stype && (_nrs.houg += 1, _nrs.kaih += 4, _nrt = true), 66 == _nrm.ctype || 28 == _nrm.ctype || 21 == _nrm.ctype || 34 == _nrm.ctype ? (_nrs.houg += 2, _nrs.kaih += 3, _nrt = true) : 101 == _nrm.ctype && (_nrs.houg += 4, _nrs.kaih += 3, _nrt = true), 488 == _nrm.ship_id || 651 == _nrm.ship_id || 656 == _nrm.ship_id ? (_nrs.houg += 2, _nrs.kaih += 2, _nrt = true) : 487 == _nrm.ship_id || 160 == _nrm.ship_id || 141 == _nrm.ship_id || 118 == _nrm.ship_id || 119 == _nrm.ship_id ? (_nrs.houg += 1, _nrs.kaih += 1, _nrt = true) : 652 != _nrm.ship_id && 657 != _nrm.ship_id && 547 != _nrm.ship_id && 146 != _nrm.ship_id || (_nrs.houg += 1, _nrs.kaih += 1, _nrt = true);
            var _nru = new _nrk.SlotItemEffectModel(),
                _nrv = false;
            if (656 == _nrm.ship_id && (_nru.tyku += 3, _nru.kaih += 2, _nrv = true), _nrt || _nrv) {
                for (var _nrw = 0, _nrx = 0, _nry = 0, _nrz = _nrm.have_slot_ids(); _nry < _nrz.length; _nry++) {
                    var _ns0 = _nrz[_nry],
                        _ns1 = _nrl.default.model.slot.getMst(_ns0),
                        _ns2 = _ns1.equipType;
                    12 != _ns2 && 13 != _ns2 || (_ns1.sakuteki >= 5 && (_nrw += _nrm.get_slotnums(parseInt(_ns0))), _ns1.taiku >= 2 && (_nrx += _nrm.get_slotnums(parseInt(_ns0))));
                }
                _nrt && _nrw > 0 && _nro.add(_nrs), _nrv && _nrx > 0 && _nro.add(_nru);
            }
            return _nro;
        };
    },
    45530: function(_ns3, _ns4, _ns5) {
        'use strict';
        var _ns6 = null;
        var _ns7 = this && this.__importDefault || function(_ns8) {
            var _ns9 = null;
            return _ns8 && _ns8.__esModule ? _ns8 : {
                'default': _ns8
            };
        };
        defineModule(_ns4);
        Object.defineProperty(_ns4, '__esModule', {
            'value': true
        }), _ns4.getSlot380PersonalEffect = void 0;
        var _nsa = _ns5(74496),
            _nsb = _ns7(_ns5(18622));
        _ns4.getSlot380PersonalEffect = function(_nsc) {
            var _nsd = null,
                _nse = new _nsa.SlotItemEffectModel(),
                _nsf = false,
                _nsg = new _nsa.SlotItemEffectModel();
            if (21 != _nsc.stype && 16 != _nsc.stype || (_nsg.tyku += 2, _nsg.houg += 1, _nsf = true), 101 == _nsc.ctype && (_nsg.tyku += 2, _nsg.houg += 1, _nsf = true, _nse.tyku += 2, _nse.houg += 2), 'ゆら' == _nsc.yomi || 'なか' == _nsc.yomi || 'きぬ' == _nsc.yomi || 'いすず' == _nsc.yomi ? (_nsg.houg += 2, _nsf = true) : 'おおい' != _nsc.yomi && 'きたかみ' != _nsc.yomi || (_nsg.tyku += 2, _nsg.houg += 3, _nsf = true), 'ゆら' != _nsc.yomi && 'なか' != _nsc.yomi && 'きぬ' != _nsc.yomi && 'いすず' != _nsc.yomi && 'ゆうばり' != _nsc.yomi || (_nsg.tais += 1, _nsf = true), 'てんりゅう' != _nsc.yomi && 'たつた' != _nsc.yomi && 'ゆうばり' != _nsc.yomi || (_nsg.houg += 1, _nsf = true), 488 == _nsc.ship_id ? (_nsg.tyku += 4, _nsf = true) : 220 == _nsc.ship_id ? (_nsg.tyku += 3, _nsf = true) : 23 == _nsc.ship_id ? (_nsg.tyku += 2, _nsf = true) : 160 == _nsc.ship_id || 487 == _nsc.ship_id || 141 == _nsc.ship_id ? (_nsg.tyku += 3, _nsf = true) : 224 == _nsc.ship_id || 289 == _nsc.ship_id || 219 == _nsc.ship_id || 56 == _nsc.ship_id || 113 == _nsc.ship_id || 22 == _nsc.ship_id ? (_nsg.tyku += 2, _nsf = true) : 651 == _nsc.ship_id || 656 == _nsc.ship_id ? (_nsg.tyku += 3, _nsg.houg += 3, _nsf = true) : 407 != _nsc.ship_id && 665 != _nsc.ship_id || (_nsg.houg += 2, _nsg.tyku += 2, _nsf = true, _nse.houg += 1, _nse.tyku += 1, _nse.kaih += 2), 488 != _nsc.ship_id && 160 != _nsc.ship_id && 487 != _nsc.ship_id && 141 != _nsc.ship_id || (_nsg.tais += 1, _nsf = true), 477 != _nsc.ship_id && 478 != _nsc.ship_id && 624 != _nsc.ship_id || (_nsg.tais += 2, _nsf = true), 477 != _nsc.ship_id && 478 != _nsc.ship_id && 624 != _nsc.ship_id && 622 != _nsc.ship_id || (_nsg.tyku += 2, _nsf = true), 652 != _nsc.ship_id && 657 != _nsc.ship_id || (_nsg.houg += 3, _nsf = true), 547 != _nsc.ship_id && 146 != _nsc.ship_id || (_nse.houg += 2), 652 != _nsc.ship_id && 657 != _nsc.ship_id && 547 != _nsc.ship_id && 146 != _nsc.ship_id || (_nse.tyku += 2), _nsf) {
                var _nsh = _nsc.get_slotnums(380);
                _nse.add(_nsg.multiply(_nsh));
            }
            var _nsi = new _nsa.SlotItemEffectModel(),
                _nsj = false,
                _nsk = new _nsa.SlotItemEffectModel(),
                _nsl = false,
                _nsm = false;
            if (16 != _nsc.stype && 3 != _nsc.stype && 4 != _nsc.stype && 21 != _nsc.stype || (_nsi.houg += 2, _nsi.kaih += 1, _nsj = true), 101 == _nsc.ctype && (_nsi.houg += 4, _nsi.kaih += 3, _nsj = true), 488 != _nsc.ship_id && 487 != _nsc.ship_id && 160 != _nsc.ship_id && 141 != _nsc.ship_id && 118 != _nsc.ship_id && 119 != _nsc.ship_id && 651 != _nsc.ship_id && 656 != _nsc.ship_id || (_nsi.houg += 1, _nsi.kaih += 2, _nsj = true), 652 == _nsc.ship_id || 657 == _nsc.ship_id || 547 == _nsc.ship_id || 146 == _nsc.ship_id ? (_nsi.houg += 1, _nsi.kaih += 3, _nsj = true) : 407 != _nsc.ship_id && 665 != _nsc.ship_id || (_nsm = true, _nsj = true, _nsi.houg += 2, _nsi.kaih += 1, _nsl = true, _nsk.houg += 1, _nsk.tyku += 2, _nsk.kaih += 1), _nsj || _nsm) {
                for (var _nsn = 0, _nso = 0, _nsp = 0, _nsq = _nsc.have_slot_ids(); _nsp < _nsq.length; _nsp++) {
                    var _nsr = _nsq[_nsp],
                        _nss = _nsb.default.model.slot.getMst(_nsr),
                        _nst = _nss.equipType;
                    12 == _nst || 13 == _nst ? _nss.sakuteki >= 5 && (_nsn += _nsc.get_slotnums(parseInt(_nsr))) : 21 == _nst && (_nso += _nsc.get_slotnums(parseInt(_nsr)));
                }
                _nsj && _nsn > 0 && _nse.add(_nsi), _nsl && _nso > 0 && _nse.add(_nsk);
            }
            return _nse;
        };
    },
    44053: (_nsu, _nsv, _nsw) => {
        'use strict';
        var _nsx = null;
        defineModule(_nsv);
        Object.defineProperty(_nsv, '__esModule', {
            'value': true
        }), _nsv.getSlot381PersonalEffect = void 0;
        var _nsy = _nsw(74496);
        _nsv.getSlot381PersonalEffect = function(_nsz) {
            var _nt0 = null,
                _nt1 = new _nsy.SlotItemEffectModel(),
                _nt2 = false,
                _nt3 = new _nsy.SlotItemEffectModel(),
                _nt4 = 0;
            if ('アメリカ' == _nsz.getCountryName() && (_nt3.houg += 1, 102 == _nsz.ctype && (_nt3.houg += 1), _nt2 = true, _nt4 = 1), 0 == _nt2) return _nt1;
            var _nt5 = _nsz.get_slotnums(381);
            if (_nt1.add(_nt3.multiply(_nt5)), 0 == _nt4) return _nt1;
            var _nt6 = _nsz.get_each_level_nums(381),
                _nt7 = 0;
            return _nt6.map(function(_nt8, _nt9) {
                _nt9 >= 6 && (_nt7 += _nt8);
            }), 1 == _nt4 && (_nt1.houg += 1 * _nt7), _nt1;
        };
    },
    65441: function(_nta, _ntb, _ntc) {
        'use strict';
        var _ntd = null;
        var _nte = this && this.__importDefault || function(_ntf) {
            var _ntg = null;
            return _ntf && _ntf.__esModule ? _ntf : {
                'default': _ntf
            };
        };
        defineModule(_ntb);
        Object.defineProperty(_ntb, '__esModule', {
            'value': true
        }), _ntb.getSlot382PersonalEffect = void 0;
        var _nth = _ntc(74496),
            _nti = _nte(_ntc(18622));
        _ntb.getSlot382PersonalEffect = function(_ntj) {
            var _ntk = null,
                _ntl = new _nth.SlotItemEffectModel(),
                _ntm = false,
                _ntn = new _nth.SlotItemEffectModel(),
                _nto = false,
                _ntp = new _nth.SlotItemEffectModel(),
                _ntq = new _nth.SlotItemEffectModel(),
                _ntr = {},
                _nts = 2,
                _ntt = [];
            1 == _ntj.stype && (_ntn.tyku += 2, _ntn.kaih += 2, _ntn.tais += 1, _ntm = true, _ntp.houg += 2, _ntp.kaih += 3, _ntq.tyku += 2, _ntq.kaih += 3, _nto = true, _nts = 1), 66 != _ntj.ctype && 28 != _ntj.ctype && 101 != _ntj.ctype || (_ntn.tyku += 2, _ntn.kaih += 1, _ntm = true, _ntp.houg += 1, _ntp.kaih += 2, _ntq.tyku += 2, _ntq.kaih += 2, _nto = true, _nts = 1), 'ゆら' != _ntj.yomi && 'なか' != _ntj.yomi && 'きぬ' != _ntj.yomi || (_ntn.tyku += 1, _ntm = true), 488 == _ntj.ship_id || 220 == _ntj.ship_id ? (_ntn.kaih += 1, _ntm = true, 488 == _ntj.ship_id && (_ntp.houg += 1, _ntp.kaih += 1, _ntq.tyku += 2, _ntq.kaih += 2, _nto = true, _nts = 1)) : 160 == _ntj.ship_id || 224 == _ntj.ship_id ? (_ntn.kaih += 1, _ntm = true, 160 == _ntj.ship_id && (_ntp.houg += 1, _ntp.kaih += 1, _ntq.tyku += 2, _ntq.kaih += 2, _nto = true)) : 487 == _ntj.ship_id || 289 == _ntj.ship_id ? (_ntn.kaih += 1, _ntm = true, 487 == _ntj.ship_id && (_ntp.houg += 1, _ntp.kaih += 1, _ntq.tyku += 2, _ntq.kaih += 2, _nto = true)) : 656 == _ntj.ship_id ? (_ntn.tyku += 3, _ntn.kaih += 2, _ntm = true, _ntp.houg += 2, _ntp.kaih += 2, _ntq.tyku += 3, _ntq.kaih += 2, _nto = true, _nts = 1) : 145 == _ntj.ship_id || 961 == _ntj.ship_id ? _nts = 1 : 979 == _ntj.ship_id && (_ntn.houg += 1, _ntn.tyku += 1, _ntn.houm += 1, _ntn.kaih += 1, _ntr[509] = new _nth.SlotItemEffectModel(), _ntr[509].houm += 1, _ntm = true, _ntt[1] = 1);
            for (var _ntu = 0, _ntv = 0, _ntw = 0, _ntx = _ntj.have_slot_ids(); _ntw < _ntx.length; _ntw++) {
                var _nty = _ntx[_ntw],
                    _ntz = _nti.default.model.slot.getMst(_nty),
                    _nu0 = _ntz.equipType;
                12 != _nu0 && 13 != _nu0 || (_ntz.sakuteki >= 5 && (_ntu += _ntj.get_slotnums(parseInt(_nty))), _ntz.taiku >= 2 && (_ntv += _ntj.get_slotnums(parseInt(_nty))));
            }
            for (var _nu1 = [], _nu2 = function(_nu3) {
                    var _nu4 = null;
                    if (null == _ntj.have_slots_dict[_nu3]) return 'continue';
                    var _nu5 = _ntj.get_each_level_nums(_nu3);
                    null == _nu1[_nu3] && (_nu1[_nu3] = []), _nu5.forEach(function(_nu6, _nu7) {
                        var _nu8 = null;
                        for (var _nu9 = 1; _nu9 <= _ntj.SLOT_LEVEL_MAX; _nu9++) null == _nu1[_nu3][_nu9] && (_nu1[_nu3][_nu9] = 0), _nu7 >= _nu9 && (_nu1[_nu3][_nu9] += _nu6);
                    });
                }, _nua = 0, _nub = [509]; _nua < _nub.length; _nua++) {
                _nu2(_nub[_nua]);
            }
            var _nuc = 0,
                _nud = 0,
                _nue = 0,
                _nuf = 0,
                _nug = 0,
                _nuh = 0,
                _nui = 0,
                _nuj = 0,
                _nuk = 0,
                _nul = 0;
            null != _nu1[509] && (_nuc = _nu1[509][1], _nud = _nu1[509][2], _nue = _nu1[509][3], _nuf = _nu1[509][4], _nug = _nu1[509][5], _nuh = _nu1[509][6], _nui = _nu1[509][7], _nuj = _nu1[509][8], _nuk = _nu1[509][9], _nul = _nu1[509][10], null != _ntt[1] && (_nue >= 1 && (_ntl.kaih += 1 * _nue), _nug >= 1 && (_ntl.houg += 1 * _nug), _nui >= 1 && (_ntl.tyku += 2 * _nui), _nuk >= 1 && (_ntl.houm += 1 * _nuk), _nul >= 1 && (_ntl.houg += 1 * _nul)), 1 == _nts ? (_nuc >= 1 && (_ntl.tyku += 1 * _nuc), _nud >= 1 && (_ntl.kaih += 2 * _nud), _nuf >= 1 && (_ntl.houg += 1 * _nuf), _nuh >= 1 && (_ntl.tyku += 1 * _nuh), _nuj >= 1 && (_ntl.houm += 1 * _nuj), _nul >= 1 && (_ntl.tyku += 1 * _nul)) : 2 == _nts && (_nud >= 1 && (_ntl.tyku += 1 * _nud), _nuf >= 1 && (_ntl.kaih += 2 * _nuf), _nuh >= 1 && (_ntl.houg += 1 * _nuh), _nuj >= 1 && (_ntl.tyku += 1 * _nuj), _nul >= 1 && (_ntl.houm += 1 * _nul)));
            var _num = _ntj.get_slotnums(509),
                _nun = _num + _ntj.get_slotnums(382);
            return _ntm && (_ntl.add(_ntn.multiply(_nun)), Object.keys(_ntr).forEach(function(_nuo) {
                var _nup = null,
                    _nuq = parseInt(_nuo);
                if (null != _ntj.have_slots_dict[_nuq]) {
                    var _nur = _ntj.get_slotnums(_nuq);
                    _ntl.add(_ntr[_nuq].multiply(_nur));
                }
            })), 3 != _ntj.stype && 21 != _ntj.stype && 4 != _ntj.stype || _nud >= 1 && (_ntu > 0 && (_ntl.houg += 1, _ntl.kaih += 1), _ntv > 0 && (_ntl.tyku += 2, _ntl.kaih += 1)), 145 == _ntj.ship_id ? _nud >= 1 && (_ntu > 0 && (_ntl.houg += 1, _ntl.tyku += 1, _ntl.kaih += 2), _ntv > 0 && (_ntl.tyku += 4, _ntl.kaih += 2)) : 961 != _ntj.ship_id && 979 != _ntj.ship_id || _num > 0 && (_ntu > 0 && (_ntl.houg += 2, _ntl.tyku += 2, _ntl.kaih += 3), _ntv > 0 && (_ntl.houg += 1, _ntl.tyku += 5, _ntl.kaih += 3)), _nto && _ntu > 0 && _ntl.add(_ntp), _nto && _ntv > 0 && _ntl.add(_ntq), _ntl;
        };
    },
    33258: (_nus, _nut, _nuu) => {
        'use strict';
        var _nuv = null;
        defineModule(_nut);
        Object.defineProperty(_nut, '__esModule', {
            'value': true
        }), _nut.getSlot383PersonalEffect = void 0;
        var _nuw = _nuu(74496);
        _nut.getSlot383PersonalEffect = function(_nux) {
            var _nuy = null,
                _nuz = new _nuw.SlotItemEffectModel(),
                _nv0 = false,
                _nv1 = new _nuw.SlotItemEffectModel(),
                _nv2 = _nux.get_each_level_over_nums([383]).slot[383];
            if (44 == _nux.ctype && (_nv1.raig += 2, _nv0 = true, _nv2[4] > 0 && (_nuz.raig += 1), _nv2[6] > 0 && (_nuz.houm += 1)), 'い58' == _nux.yomi && (_nv1.raig += 1, _nv0 = true), 636 == _nux.ship_id ? (_nv1.raig += 3, _nv0 = true) : 607 == _nux.ship_id && (_nv1.raig += 4, _nv0 = true), _nv2[8] > 0 && (_nuz.raig += 1), _nv2[10] > 0 && (_nuz.houm += 1), 'い58' != _nux.yomi && 'い47' != _nux.yomi || _nv2[5] > 0 && (_nuz.houm += 1), 0 == _nv0) return _nuz;
            var _nv3 = _nux.get_slotnums(383);
            return _nuz.add(_nv1.multiply(_nv3)), _nuz;
        };
    },
    92168: (_nv4, _nv5, _nv6) => {
        'use strict';
        var _nv7 = null;
        defineModule(_nv5);
        Object.defineProperty(_nv5, '__esModule', {
            'value': true
        }), _nv5.getSlot384PersonalEffect = void 0;
        var _nv8 = _nv6(74496);
        _nv5.getSlot384PersonalEffect = function(_nv9) {
            var _nva = null,
                _nvb = new _nv8.SlotItemEffectModel(),
                _nvc = false,
                _nvd = new _nv8.SlotItemEffectModel();
            44 == _nv9.ctype && (_nvd.kaih += 3, _nvc = true), 'い58' == _nv9.yomi && (_nvd.kaih += 2, _nvc = true), 636 == _nv9.ship_id ? (_nvd.kaih += 3, _nvc = true) : 607 == _nv9.ship_id && (_nvd.kaih += 4, _nvc = true);
            var _nve = _nv9.get_slotnums(384);
            _nvc && _nvb.add(_nvd.multiply(_nve));
            var _nvf = _nve,
                _nvg = _nv9.get_slotnums(213),
                _nvh = _nv9.get_slotnums(214),
                _nvi = _nv9.get_slotnums(383);
            return _nvf > 0 && _nvg + _nvh + _nvi > 0 && (_nvb.raig += 3, _nvb.kaih += 2), _nvb;
        };
    },
    85975: (_nvj, _nvk, _nvl) => {
        'use strict';
        var _nvm = null;
        defineModule(_nvk);
        Object.defineProperty(_nvk, '__esModule', {
            'value': true
        }), _nvk.getSlot385PersonalEffect = void 0;
        var _nvn = _nvl(74496);
        _nvk.getSlot385PersonalEffect = function(_nvo) {
            var _nvp = null,
                _nvq = new _nvn.SlotItemEffectModel(),
                _nvr = false,
                _nvs = new _nvn.SlotItemEffectModel(),
                _nvt = 0;
            if ('アメリカ' == _nvo.getCountryName() && (_nvs.houg += 1, 102 == _nvo.ctype || 107 == _nvo.ctype ? (_nvs.houg += 1, _nvs.souk += 1) : 93 == _nvo.ctype && (_nvs.houg += 1), _nvr = true, _nvt = 1), 8 == _nvo.stype && (_nvs.houg += 1, _nvr = true), 0 == _nvr) return _nvq;
            var _nvu = _nvo.get_slotnums(385);
            if (_nvq.add(_nvs.multiply(_nvu)), 0 == _nvt) return _nvq;
            var _nvv = _nvo.get_each_level_nums(385),
                _nvw = 0;
            return _nvv.forEach(function(_nvx, _nvy) {
                _nvy >= 6 && (_nvw += _nvx);
            }), 1 == _nvt && (_nvq.houg += 1 * _nvw, _nvq.souk += 1 * _nvv[10]), _nvq;
        };
    },
    98467: (_nvz, _nw0, _nw1) => {
        'use strict';
        var _nw2 = null;
        defineModule(_nw0);
        Object.defineProperty(_nw0, '__esModule', {
            'value': true
        }), _nw0.getSlot386PersonalEffect = void 0;
        var _nw3 = _nw1(74496);
        _nw0.getSlot386PersonalEffect = function(_nw4) {
            var _nw5 = null,
                _nw6 = new _nw3.SlotItemEffectModel(),
                _nw7 = false,
                _nw8 = new _nw3.SlotItemEffectModel(),
                _nw9 = 0;
            if ('アメリカ' == _nw4.getCountryName() && (_nw8.houg += 1, _nw7 = true, _nw9 = 1), 0 == _nw7) return _nw6;
            var _nwa = _nw4.get_slotnums(386);
            if (_nw6.add(_nw8.multiply(_nwa)), 0 == _nw9) return _nw6;
            var _nwb = _nw4.get_each_level_nums(386),
                _nwc = 0,
                _nwd = 0;
            return _nwb.forEach(function(_nwe, _nwf) {
                _nwf >= 2 && (_nwc += _nwe), _nwf >= 7 && (_nwd += _nwe);
            }), 1 == _nw9 && (_nw6.houg += 1 * _nwc, _nw6.houg += 1 * _nwd), _nw6;
        };
    },
    88348: (_nwg, _nwh, _nwi) => {
        'use strict';
        var _nwj = null;
        defineModule(_nwh);
        Object.defineProperty(_nwh, '__esModule', {
            'value': true
        }), _nwh.getSlot387PersonalEffect = void 0;
        var _nwk = _nwi(74496);
        _nwh.getSlot387PersonalEffect = function(_nwl) {
            var _nwm = null,
                _nwn = new _nwk.SlotItemEffectModel(),
                _nwo = false,
                _nwp = new _nwk.SlotItemEffectModel(),
                _nwq = 0;
            if ('アメリカ' == _nwl.getCountryName() && (_nwp.houg += 1, _nwo = true, _nwq = 1), 0 == _nwo) return _nwn;
            var _nwr = _nwl.get_slotnums(387);
            if (_nwn.add(_nwp.multiply(_nwr)), 0 == _nwq) return _nwn;
            var _nws = _nwl.get_each_level_nums(387),
                _nwt = 0,
                _nwu = 0;
            return _nws.forEach(function(_nwv, _nww) {
                _nww >= 2 && (_nwt += _nwv), _nww >= 7 && (_nwu += _nwv);
            }), 1 == _nwq && (_nwn.houg += 1 * _nwt, _nwn.houg += 1 * _nwu), _nwn;
        };
    },
    21097: (_nwx, _nwy, _nwz) => {
        'use strict';
        var _nx0 = null;
        defineModule(_nwy);
        Object.defineProperty(_nwy, '__esModule', {
            'value': true
        }), _nwy.getSlot389PersonalEffect = void 0;
        var _nx1 = _nwz(74496);
        _nwy.getSlot389PersonalEffect = function(_nx2) {
            var _nx3 = null,
                _nx4 = new _nx1.SlotItemEffectModel(),
                _nx5 = false,
                _nx6 = new _nx1.SlotItemEffectModel();
            if (594 == _nx2.ship_id || 599 == _nx2.ship_id) _nx6.houg += 2, _nx6.kaih += 2, _nx5 = true;
            else {
                if (698 == _nx2.ship_id || 610 == _nx2.ship_id) _nx6.houg += 3, _nx6.kaih += 2, _nx5 = true;
                else 646 == _nx2.ship_id && (_nx6.houg += 4, _nx6.tais += 4, _nx6.kaih += 3, _nx5 = true, _nx2.get_type3_nums(25) > 0 && (_nx4.houg += 3, _nx4.tais += 6), _nx2.get_slotnums(326) + _nx2.get_slotnums(327) > 0 && (_nx4.houg += 5, _nx4.tais += 4));
            }
            if ('アメリカ' == _nx2.getCountryName() && (_nx6.houg += 2, _nx6.tais += 3, _nx6.kaih += 1, _nx5 = true), 0 == _nx5) return _nx4;
            var _nx7 = _nx2.get_slotnums(389);
            return _nx4.add(_nx6.multiply(_nx7)), _nx4;
        };
    },
    43607: (_nx8, _nx9, _nxa) => {
        'use strict';
        var _nxb = null;
        defineModule(_nx9);
        Object.defineProperty(_nx9, '__esModule', {
            'value': true
        }), _nx9.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _nxc = _nxa(74496);
        _nx9.getSlot38cmFourBarrelGunPersonalEffect = function(_nxd) {
            var _nxe = null,
                _nxf = new _nxc.SlotItemEffectModel(),
                _nxg = _nxd.get_slotnums(245),
                _nxh = _nxd.get_slotnums(246),
                _nxi = _nxd.get_slotnums(468),
                _nxj = _nxg + _nxh + _nxi,
                _nxk = 0,
                _nxl = 0,
                _nxm = new Array();
            if (79 != _nxd.ctype) return _nxf;
            _nxf.houg += 2 * _nxj, _nxf.houm += 1 * _nxj, _nxi >= 1 && (_nxf.houg += 1 * _nxi, _nxl = 1, _nxm.push(468), _nxm.push(471)), _nxk = 1;
            var _nxn = _nxd.get_slotnums(247),
                _nxo = _nxd.get_slotnums(471);
            if (1 == _nxk && _nxn >= 1 && (_nxf.kaih += 2 * _nxn, _nxf.houg += 2 * _nxn, _nxf.houm += 2 * _nxn), 0 == _nxl) return _nxf;
            for (var _nxp = {}, _nxq = {}, _nxr = {}, _nxs = {}, _nxt = {}, _nxu = 0, _nxv = _nxm; _nxu < _nxv.length; _nxu++) {
                var _nxw = _nxv[_nxu];
                if (_nxq[_nxw] = 0, _nxr[_nxw] = 0, _nxs[_nxw] = 0, _nxt[_nxw] = 0, _nxp[_nxw] = 0, null != _nxd.have_slots_dict[_nxw])
                    for (var _nxx = 0, _nxy = _nxd.have_slots_dict[_nxw]; _nxx < _nxy.length; _nxx++) {
                        var _nxz = _nxy[_nxx].level;
                        _nxz >= 4 && _nxq[_nxw]++, _nxz >= 7 && _nxr[_nxw]++, _nxz >= 8 && _nxs[_nxw]++, _nxz >= 9 && _nxt[_nxw]++, _nxz >= 10 && _nxp[_nxw]++;
                    }
            }
            if (1 == _nxl && _nxi > 0) {
                var _ny0 = _nxq[468],
                    _ny1 = _nxs[468],
                    _ny2 = _nxt[468],
                    _ny3 = _nxp[468],
                    _ny4 = _nxr[471],
                    _ny5 = _nxt[471];
                _ny0 >= 1 && (_nxf.houg += 1 * _ny0, _nxf.houm += 1 * _ny0), _ny1 >= 1 && (_nxf.houg += 1 * _ny1, _nxf.houm += 1 * _ny1), _ny2 >= 1 && (_nxf.tyku += 1 * _ny2, _nxo >= 1 && (_nxf.houm += 2 * _nxo), _nxn >= 1 && (_nxf.kaih += 1 * _nxn, _nxf.houm += 1 * _nxn)), _ny3 >= 1 && (_nxf.houm += 1 * _ny3, _nxo >= 1 && (_nxf.houm += 1 * _nxo, _ny4 >= 1 && (_nxf.houm += 1 * _ny4), _ny5 >= 1 && (_nxf.kaih += 1 * _ny5)), _nxn >= 1 && (_nxf.houg += 1 * _nxn, _nxf.kaih += 1 * _nxn, _nxf.houm += 1 * _nxn));
            }
            return _nxf;
        };
    },
    2380: (_ny6, _ny7, _ny8) => {
        'use strict';
        var _ny9 = null;
        defineModule(_ny7);
        Object.defineProperty(_ny7, '__esModule', {
            'value': true
        }), _ny7.getSlot38cmTwinGunPersonalEffect = void 0;
        var _nya = _ny8(74496);
        _ny7.getSlot38cmTwinGunPersonalEffect = function(_nyb) {
            var _nyc = null,
                _nyd = new _nya.SlotItemEffectModel(),
                _nye = false,
                _nyf = new _nya.SlotItemEffectModel(),
                _nyg = 0,
                _nyh = _nyb.get_slotnums(76),
                _nyi = _nyb.get_slotnums(114),
                _nyj = _nyb.get_slotnums(124);
            if ('ドイツ' == _nyb.getCountryName() && (_nyf.houg += 1, _nye = true, _nyg = 1, _nyj >= 1 && (_nyd.kaih += 1 * _nyj)), 0 == _nye) return _nyd;
            var _nyk = _nyh + _nyi;
            _nyd.add(_nyf.multiply(_nyk));
            var _nyl = _nyb.get_each_level_over_nums([114]).slot[114];
            return 1 == _nyg && (_nyl[7] >= 1 && (_nyd.houg += 1 * _nyl[7]), _nyl[8] >= 1 && (_nyd.houm += 1 * _nyl[8]), _nyl[9] >= 1 && (_nyd.souk += 1 * _nyl[9]), _nyl[10] >= 1 && (_nyd.houg += 1 * _nyl[10])), _nyd;
        };
    },
    37273: (_nym, _nyn, _nyo) => {
        'use strict';
        var _nyp = null;
        defineModule(_nyn);
        Object.defineProperty(_nyn, '__esModule', {
            'value': true
        }), _nyn.getSlot390PersonalEffect = void 0;
        var _nyq = _nyo(74496);
        _nyn.getSlot390PersonalEffect = function(_nyr) {
            var _nys = null,
                _nyt = new _nyq.SlotItemEffectModel(),
                _nyu = false,
                _nyv = new _nyq.SlotItemEffectModel(),
                _nyw = 0;
            if ('アメリカ' == _nyr.getCountryName() && (_nyv.houg += 1, _nyu = true, _nyw = 1), 102 == _nyr.ctype || 107 == _nyr.ctype ? (_nyv.houg += 1, _nyv.souk += 1, _nyu = true) : 93 == _nyr.ctype && (_nyv.houg += 1, _nyu = true), 8 == _nyr.stype && (_nyv.houg += 1, _nyu = true), 0 == _nyu) return _nyt;
            var _nyx = _nyr.get_slotnums(390);
            if (_nyt.add(_nyv.multiply(_nyx)), 0 == _nyw) return _nyt;
            var _nyy = _nyr.get_each_level_nums(390),
                _nyz = 0,
                _nz0 = 0;
            return _nyy.forEach(function(_nz1, _nz2) {
                _nz2 >= 3 && (_nyz += _nz1), _nz2 >= 6 && (_nz0 += _nz1);
            }), 1 == _nyw && (_nyt.houg += 1 * _nyz, _nyt.kaih += 1 * _nz0, _nyt.souk += 1 * _nyy[10]), _nyt;
        };
    },
    72694: (_nz3, _nz4, _nz5) => {
        'use strict';
        var _nz6 = null;
        defineModule(_nz4);
        Object.defineProperty(_nz4, '__esModule', {
            'value': true
        }), _nz4.getSlot391PersonalEffect = void 0;
        var _nz7 = _nz5(74496);
        _nz4.getSlot391PersonalEffect = function(_nz8) {
            var _nz9 = null,
                _nza = new _nz7.SlotItemEffectModel(),
                _nzb = false,
                _nzc = new _nz7.SlotItemEffectModel();
            if ('しょうかく' == _nz8.yomi || 'ずいかく' == _nz8.yomi ? (_nzc.houg += 1, _nzb = true) : 'じゅんよう' != _nz8.yomi && 'ひよう' != _nz8.yomi || (_nzc.houg += 1, _nzb = true), 116 == _nz8.ship_id || 185 == _nz8.ship_id || 282 == _nz8.ship_id ? (_nzc.houg += 1, _nzb = true) : 117 == _nz8.ship_id || 318 == _nz8.ship_id || 883 == _nz8.ship_id || 888 == _nz8.ship_id ? (_nzc.houg += 1, _nza.kaih += 1, _nzb = true) : 560 != _nz8.ship_id && 555 != _nz8.ship_id || (_nzc.houg += 1, _nzc.kaih += 1, _nzb = true), 0 == _nzb) return _nza;
            var _nzd = _nz8.get_slotnums(391);
            return _nza.add(_nzc.multiply(_nzd)), _nza;
        };
    },
    62067: (_nze, _nzf, _nzg) => {
        'use strict';
        var _nzh = null;
        defineModule(_nzf);
        Object.defineProperty(_nzf, '__esModule', {
            'value': true
        }), _nzf.getSlot392PersonalEffect = void 0;
        var _nzi = _nzg(74496);
        _nzf.getSlot392PersonalEffect = function(_nzj) {
            var _nzk = null,
                _nzl = new _nzi.SlotItemEffectModel(),
                _nzm = false,
                _nzn = new _nzi.SlotItemEffectModel();
            if ('しょうかく' == _nzj.yomi || 'ずいかく' == _nzj.yomi ? (_nzn.houg += 2, _nzn.kaih += 1, _nzm = true) : 'じゅんよう' != _nzj.yomi && 'ひよう' != _nzj.yomi || (_nzn.houg += 1, _nzn.kaih += 1, _nzm = true), 116 == _nzj.ship_id || 185 == _nzj.ship_id || 282 == _nzj.ship_id ? (_nzn.houg += 2, _nzn.kaih += 1, _nzm = true) : 117 == _nzj.ship_id || 318 == _nzj.ship_id || 883 == _nzj.ship_id || 888 == _nzj.ship_id ? (_nzn.houg += 2, _nzn.kaih += 2, _nzm = true) : 560 != _nzj.ship_id && 555 != _nzj.ship_id || (_nzn.houg += 3, _nzn.kaih += 2, _nzm = true), 0 == _nzm) return _nzl;
            var _nzo = _nzj.get_slotnums(392);
            return _nzl.add(_nzn.multiply(_nzo)), _nzl;
        };
    },
    87817: function(_nzp, _nzq, _nzr) {
        'use strict';
        var _nzs = null;
        var _nzt = this && this.__importDefault || function(_nzu) {
            var _nzv = null;
            return _nzu && _nzu.__esModule ? _nzu : {
                'default': _nzu
            };
        };
        defineModule(_nzq);
        Object.defineProperty(_nzq, '__esModule', {
            'value': true
        }), _nzq.getSlot397PersonalEffect = void 0;
        var _nzw = _nzr(74496),
            _nzx = _nzt(_nzr(18622));
        _nzq.getSlot397PersonalEffect = function(_nzy) {
            var _nzz = null,
                _o00 = new _nzw.SlotItemEffectModel(),
                _o01 = false,
                _o02 = new _nzw.SlotItemEffectModel(),
                _o03 = 0,
                _o04 = 0,
                _o05 = false;
            if (651 == _nzy.ship_id ? (_o02.houg += 5, _o02.tyku += 2, _o02.kaih += 1, _o01 = true, _o05 = true, _o03 = 1, _o04 = 1) : 656 == _nzy.ship_id && (_o02.houg += 3, _o02.tyku += 1, _o02.kaih += 1, _o01 = true, _o05 = true, _o03 = 1), 0 == _o01) return _o00;
            var _o06 = _nzy.get_slotnums(397);
            _o00.add(_o02.multiply(_o06));
            var _o07 = 0,
                _o08 = _nzy.get_each_level_nums(397),
                _o09 = 0;
            if (_o05) {
                _o08.forEach(function(_o0a, _o0b) {
                    _o0b >= 4 && (_o09 += _o0a);
                });
                for (var _o0c = 0, _o0d = _nzy.have_slot_ids(); _o0c < _o0d.length; _o0c++) {
                    var _o0e = _o0d[_o0c],
                        _o0f = _nzx.default.model.slot.getMst(_o0e),
                        _o0g = _o0f.equipType;
                    12 != _o0g && 13 != _o0g || (_o0f.sakuteki >= 5 && (_o07 += _nzy.get_slotnums(parseInt(_o0e))), _o0f.taiku >= 2 && _nzy.get_slotnums(parseInt(_o0e)));
                }
            }
            return 1 == _o03 && _o07 > 0 && (_o00.houg += 3, _o00.kaih += 3), 1 == _o04 && (_o00.houg += 4 * _o09, _o00.kaih += 1 * _o09), _o00;
        };
    },
    93526: function(_o0h, _o0i, _o0j) {
        'use strict';
        var _o0k = null;
        var _o0l = this && this.__importDefault || function(_o0m) {
            var _o0n = null;
            return _o0m && _o0m.__esModule ? _o0m : {
                'default': _o0m
            };
        };
        defineModule(_o0i);
        Object.defineProperty(_o0i, '__esModule', {
            'value': true
        }), _o0i.getSlot398PersonalEffect = void 0;
        var _o0o = _o0j(74496),
            _o0p = _o0l(_o0j(18622));
        _o0i.getSlot398PersonalEffect = function(_o0q) {
            var _o0r = null,
                _o0s = new _o0o.SlotItemEffectModel(),
                _o0t = false,
                _o0u = new _o0o.SlotItemEffectModel(),
                _o0v = 0,
                _o0w = 0,
                _o0x = false;
            if (651 == _o0q.ship_id ? (_o0u.houg += 4, _o0u.tyku += 4, _o0u.kaih += 2, _o0t = true, _o0x = true, _o0v = 1, _o0w = 1) : 656 == _o0q.ship_id && (_o0u.houg += 3, _o0u.tyku += 2, _o0u.kaih += 2, _o0t = true, _o0x = true, _o0v = 1, _o0w = 2), 0 == _o0t) return _o0s;
            var _o0y = _o0q.get_slotnums(398);
            _o0s.add(_o0u.multiply(_o0y));
            var _o0z = 0,
                _o10 = 0,
                _o11 = _o0q.get_each_level_nums(398),
                _o12 = 0;
            if (_o0x) {
                _o11.forEach(function(_o13, _o14) {
                    _o14 >= 4 && (_o12 += _o13);
                });
                for (var _o15 = 0, _o16 = _o0q.have_slot_ids(); _o15 < _o16.length; _o15++) {
                    var _o17 = _o16[_o15],
                        _o18 = _o0p.default.model.slot.getMst(_o17),
                        _o19 = _o18.equipType;
                    12 != _o19 && 13 != _o19 || (_o18.sakuteki >= 5 && (_o0z += _o0q.get_slotnums(parseInt(_o17))), _o18.taiku >= 2 && (_o10 += _o0q.get_slotnums(parseInt(_o17))));
                }
            }
            return 1 == _o0v && (_o0z > 0 && (_o0s.houg += 3, _o0s.kaih += 3), _o10 > 0 && (_o0s.tyku += 3, _o0s.kaih += 3)), 1 == _o0w ? (_o0s.houg += 3 * _o12, _o0s.kaih += 2 * _o12) : 2 == _o0w && (_o0s.houg += 2 * _o12, _o0s.kaih += 1 * _o12), _o0s;
        };
    },
    33084: (_o1a, _o1b, _o1c) => {
        'use strict';
        var _o1d = null;
        defineModule(_o1b);
        Object.defineProperty(_o1b, '__esModule', {
            'value': true
        }), _o1b.getSlot399PersonalEffect = void 0;
        var _o1e = _o1c(74496);
        _o1b.getSlot399PersonalEffect = function(_o1f) {
            var _o1g = null,
                _o1h = new _o1e.SlotItemEffectModel(),
                _o1i = false,
                _o1j = new _o1e.SlotItemEffectModel(),
                _o1k = 0;
            if (108 == _o1f.ctype && (_o1j.houg += 1, _o1j.kaih += 2, _o1k = 1, _o1i = true), 0 == _o1i) return _o1h;
            var _o1l = _o1f.get_slotnums(399);
            if (_o1h.add(_o1j.multiply(_o1l)), 0 == _o1k) return _o1h;
            var _o1m = _o1f.get_each_level_nums(399),
                _o1n = 0,
                _o1o = 0;
            return _o1m.map(function(_o1p, _o1q) {
                _o1q >= 3 && (_o1n += _o1p), _o1q >= 5 && (_o1o += _o1p);
            }), 1 == _o1k && (_o1h.houg += 1 * _o1n, _o1h.houg += 1 * _o1o), _o1h;
        };
    },
    80225: (_o1r, _o1s, _o1t) => {
        'use strict';
        var _o1u = null;
        defineModule(_o1s);
        Object.defineProperty(_o1s, '__esModule', {
            'value': true
        }), _o1s.getSlot3_122PersonalEffect = void 0;
        var _o1v = _o1t(74496);
        _o1s.getSlot3_122PersonalEffect = function(_o1w) {
            var _o1x = null,
                _o1y = new _o1v.SlotItemEffectModel(),
                _o1z = false,
                _o20 = new _o1v.SlotItemEffectModel(),
                _o21 = 0;
            if (54 == _o1w.ctype && (_o20.houg += 1, _o20.tyku += 2, _o20.kaih += 1, _o1z = true, _o21 = 1), 0 == _o1z) return _o1y;
            var _o22 = _o1w.get_slotnums(3) + _o1w.get_slotnums(122);
            if (_o1y.add(_o20.multiply(_o22)), 0 == _o21) return _o1y;
            var _o23 = _o1w.get_each_level_over_nums([122]).slot[122];
            return 1 == _o21 && (_o23[6] >= 1 && (_o1y.kaih += 1 * _o23[6]), _o23[7] >= 1 && (_o1y.tyku += 1 * _o23[7]), _o23[8] >= 1 && (_o1y.houm += 1 * _o23[8]), _o23[9] >= 1 && (_o1y.kaih += 1 * _o23[9]), _o23[10] >= 1 && (_o1y.houg += 1 * _o23[10])), _o1y;
        };
    },
    97831: (_o24, _o25, _o26) => {
        'use strict';
        var _o27 = null;
        defineModule(_o25);
        Object.defineProperty(_o25, '__esModule', {
            'value': true
        }), _o25.getSlot400PersonalEffect = void 0;
        var _o28 = _o26(74496);
        _o25.getSlot400PersonalEffect = function(_o29) {
            var _o2a = null,
                _o2b = new _o28.SlotItemEffectModel(),
                _o2c = false,
                _o2d = new _o28.SlotItemEffectModel(),
                _o2e = 0,
                _o2f = false;
            if (147 != _o29.ship_id && 73 != _o29.ctype && 81 != _o29.ctype || (_o2f = true), _o2f && (_o2d.kaih += 2, _o2d.raig += 5, _o2d.houg += 1, _o2d.souk += 1, _o2c = true, _o2e = 1), 0 == _o2c) return _o2b;
            var _o2g = _o29.get_slotnums(400);
            return _o2b.add(_o2d.multiply(_o2g)), _o29.get_slotnums(282) > 0 && 1 == _o2e && (_o2b.houg += 2), _o2b;
        };
    },
    4050: function(_o2h, _o2i, _o2j) {
        'use strict';
        var _o2k = null;
        var _o2l = this && this.__importDefault || function(_o2m) {
            var _o2n = null;
            return _o2m && _o2m.__esModule ? _o2m : {
                'default': _o2m
            };
        };
        defineModule(_o2i);
        Object.defineProperty(_o2i, '__esModule', {
            'value': true
        }), _o2i.getSlot407PersonalEffect = void 0;
        var _o2o = _o2j(74496),
            _o2p = _o2l(_o2j(18622));
        _o2i.getSlot407PersonalEffect = function(_o2q) {
            var _o2r = null,
                _o2s = new _o2o.SlotItemEffectModel(),
                _o2t = false,
                _o2u = new _o2o.SlotItemEffectModel(),
                _o2v = 0;
            if (662 != _o2q.ship_id && 663 != _o2q.ship_id && 668 != _o2q.ship_id || (_o2u.houg += 4, _o2u.tyku += 2, _o2u.kaih += 1, _o2t = true, _o2v = 1), 0 == _o2t) return _o2s;
            var _o2w = _o2q.get_slotnums(407);
            _o2s.add(_o2u.multiply(_o2w));
            for (var _o2x = 0, _o2y = 0, _o2z = 0, _o30 = _o2q.have_slot_ids(); _o2z < _o30.length; _o2z++) {
                var _o31 = _o30[_o2z],
                    _o32 = _o2p.default.model.slot.getMst(_o31),
                    _o33 = _o32.equipType;
                12 != _o33 && 13 != _o33 || (_o32.sakuteki >= 5 && (_o2x += _o2q.get_slotnums(parseInt(_o31))), _o32.taiku >= 2 && (_o2y += _o2q.get_slotnums(parseInt(_o31))));
            }
            return _o2x >= 1 && 1 == _o2v && (_o2s.houg += 2, _o2s.kaih += 2, _o2s.raig += 2), _o2y >= 1 && 1 == _o2v && (_o2s.tyku += 2, _o2s.kaih += 3), _o2s;
        };
    },
    78466: (_o34, _o35, _o36) => {
        'use strict';
        var _o37 = null;
        defineModule(_o35);
        Object.defineProperty(_o35, '__esModule', {
            'value': true
        }), _o35.getSlot408PersonalEffect = void 0;
        var _o38 = _o36(74496);
        _o35.getSlot408PersonalEffect = function(_o39) {
            var _o3a = null,
                _o3b = new _o38.SlotItemEffectModel(),
                _o3c = false,
                _o3d = new _o38.SlotItemEffectModel();
            if ('しんしゅうまる' == _o39.yomi ? (_o3d.houg += 2, _o3d.saku += 2, _o3d.kaih += 2, _o3c = true) : 'あきつまる' == _o39.yomi && (_o3d.houg += 1, _o3d.saku += 1, _o3d.kaih += 1, _o3d.tais += 1, _o3c = true), 2 == _o39.stype && (_o3d.houg += 1, _o3d.saku += 1, _o3d.kaih -= 5, _o3c = true), 0 == _o3c) return _o3b;
            var _o3e = _o39.get_slotnums(408);
            return _o3b.add(_o3d.multiply(_o3e)), _o3b;
        };
    },
    40061: (_o3f, _o3g, _o3h) => {
        'use strict';
        var _o3i = null;
        defineModule(_o3g);
        Object.defineProperty(_o3g, '__esModule', {
            'value': true
        }), _o3g.getSlot409PersonalEffect = void 0;
        var _o3j = _o3h(74496);
        _o3g.getSlot409PersonalEffect = function(_o3k) {
            var _o3l = null,
                _o3m = new _o3j.SlotItemEffectModel(),
                _o3n = false,
                _o3o = new _o3j.SlotItemEffectModel();
            if ('しんしゅうまる' == _o3k.yomi ? (_o3o.houg += 1, _o3o.tyku += 2, _o3o.kaih += 3, _o3n = true) : 'あきつまる' == _o3k.yomi && (_o3o.houg += 1, _o3o.tyku += 1, _o3o.kaih += 2, _o3o.tais += 1, _o3n = true), 0 == _o3n) return _o3m;
            var _o3p = _o3k.get_slotnums(409);
            return _o3m.add(_o3o.multiply(_o3p)), _o3m;
        };
    },
    79988: (_o3q, _o3r, _o3s) => {
        'use strict';
        var _o3t = null;
        defineModule(_o3r);
        Object.defineProperty(_o3r, '__esModule', {
            'value': true
        }), _o3r.getSlot411PersonalEffect = void 0;
        var _o3u = _o3s(74496);
        _o3r.getSlot411PersonalEffect = function(_o3v) {
            var _o3w = null,
                _o3x = new _o3u.SlotItemEffectModel(),
                _o3y = new _o3u.SlotItemEffectModel(),
                _o3z = false,
                _o40 = 0;
            if (2 == _o3v.stype && (_o3y.kaih -= 9, _o3z = true), 3 != _o3v.stype && 4 != _o3v.stype || (_o3y.kaih -= 7, _o3z = true), 21 == _o3v.stype && (_o3y.kaih -= 6, _o3z = true), 5 != _o3v.stype && 6 != _o3v.stype || (_o3y.kaih -= 5, _o3z = true), 593 == _o3v.ship_id && (_o3x.houg += 1, _o3x.tyku += 2, _o3x.kaih += 3), 151 == _o3v.ship_id || 411 == _o3v.ship_id || 412 == _o3v.ship_id || 593 == _o3v.ship_id || 954 == _o3v.ship_id ? (_o3x.houg += 3, _o3x.tyku += 4, _o40 = 1) : 541 != _o3v.ship_id && 573 != _o3v.ship_id && 553 != _o3v.ship_id && 554 != _o3v.ship_id || (_o3x.houg += 2, _o3x.tyku += 2, _o40 = 1), _o3z) {
                var _o41 = _o3v.get_slotnums(411);
                _o3x.add(_o3y.multiply(_o41));
            }
            if (0 == _o40) return _o3x;
            var _o42 = _o3v.get_each_level_nums(411),
                _o43 = 0;
            return _o40 > 0 && _o42.forEach(function(_o44, _o45) {
                _o45 >= 4 && (_o43 += _o44);
            }), 1 == _o40 && (_o43 >= 1 && (_o3x.houg += 1, _o3x.tyku += 1), _o42[10] >= 1 && (_o3x.houg += 1, _o3x.tyku += 1)), _o3x;
        };
    },
    74428: (_o46, _o47, _o48) => {
        'use strict';
        var _o49 = null;
        defineModule(_o47);
        Object.defineProperty(_o47, '__esModule', {
            'value': true
        }), _o47.getSlot412PersonalEffect = void 0;
        var _o4a = _o48(74496);
        _o47.getSlot412PersonalEffect = function(_o4b) {
            var _o4c = null,
                _o4d = new _o4a.SlotItemEffectModel(),
                _o4e = false,
                _o4f = 0,
                _o4g = new _o4a.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o4b.ctype) >= 0 ? (_o4d.houg += 2, _o4d.raig += 4, _o4d.tais += 2, _o4g.kaih += 3, _o4g.saku += 1, _o4e = true, _o4f = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o4b.ctype) >= 0 ? (_o4d.houg += 3, _o4d.raig += 3, _o4g.kaih += 2, _o4g.saku += 3, _o4e = true, _o4f = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o4b.ctype) >= 0 && (_o4d.houg += 1, _o4g.kaih += 1, _o4g.saku += 1, _o4e = true), 0 == _o4e) return _o4d;
            var _o4h = _o4b.get_slotnums(412);
            if (_o4d.add(_o4g.multiply(_o4h)), 0 == _o4f) return _o4d;
            var _o4i = _o4b.get_each_level_nums(412),
                _o4j = 0,
                _o4k = 0;
            return _o4f > 0 && _o4i.forEach(function(_o4l, _o4m) {
                _o4m >= 4 && (_o4j += _o4l), _o4m >= 8 && (_o4k += _o4l);
            }), 1 == _o4f && (_o4j > 0 && (_o4d.houg += 1), _o4k > 0 && (_o4d.raig += 1)), _o4d;
        };
    },
    2631: (_o4n, _o4o, _o4p) => {
        'use strict';
        var _o4q = null;
        defineModule(_o4o);
        Object.defineProperty(_o4o, '__esModule', {
            'value': true
        }), _o4o.getSlot413PersonalEffect = void 0;
        var _o4r = _o4p(74496);
        _o4o.getSlot413PersonalEffect = function(_o4s) {
            var _o4t = null,
                _o4u = new _o4r.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o4s.ctype) >= 0 ? (_o4u.houg += 2, _o4u.raig += 2, _o4u.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o4s.ctype) >= 0 && (_o4u.houg += 4, _o4u.raig += 2, _o4u.kaih += 2), 38 == _o4s.ctype || 54 == _o4s.ctype ? (_o4u.houg += 2, _o4u.raig += 3, _o4u.kaih += 3) : 4 == _o4s.ctype || 20 == _o4s.ctype || 16 == _o4s.ctype || 41 == _o4s.ctype || 52 == _o4s.ctype ? (_o4u.houg += 1, _o4u.raig += 2, _o4u.kaih += 2) : 21 != _o4s.ctype && 34 != _o4s.ctype || (_o4u.tyku += 2, _o4u.raig += 1, _o4u.kaih += 1), 'なか' == _o4s.yomi || 'ゆら' == _o4s.yomi || 'やはぎ' == _o4s.yomi || 'のしろ' == _o4s.yomi || 'はまなみ' == _o4s.yomi || 'しまかぜ' == _o4s.yomi || 'きよしも' == _o4s.yomi || 'はつしも' == _o4s.yomi ? (_o4u.tyku += 1, _o4u.kaih += 1) : 'じんつう' != _o4s.yomi && 'せんだい' != _o4s.yomi && 'ながなみ' != _o4s.yomi && 'はつしも' != _o4s.yomi && 'てるづき' != _o4s.yomi || (_o4u.houg += 1, _o4u.raig += 1), 543 == _o4s.ship_id ? (_o4u.houg += 1, _o4u.kaih += 1) : 159 == _o4s.ship_id && (_o4u.houg += 2), _o4u;
        };
    },
    16498: (_o4v, _o4w, _o4x) => {
        'use strict';
        var _o4y = null;
        defineModule(_o4w);
        Object.defineProperty(_o4w, '__esModule', {
            'value': true
        }), _o4w.getSlot414PersonalEffect = void 0;
        var _o4z = _o4x(74496);
        _o4w.getSlot414PersonalEffect = function(_o50) {
            var _o51 = null,
                _o52 = new _o4z.SlotItemEffectModel(),
                _o53 = 0;
            if ('アメリカ' == _o50.getCountryName() && (_o52.saku += 1, _o53 = 1), 95 != _o50.ctype && 99 != _o50.ctype && 106 != _o50.ctype && 110 != _o50.ctype && 121 != _o50.ctype || (_o52.houg += 1, _o52.saku += 1, _o53 = 2), 0 == _o53) return _o52;
            var _o54 = _o50.get_each_level_nums(414),
                _o55 = 0,
                _o56 = 0,
                _o57 = 0;
            return _o53 > 0 && _o54.forEach(function(_o58, _o59) {
                _o59 >= 5 && (_o55 += _o58), _o59 >= 3 && (_o56 += _o58), _o59 >= 8 && (_o57 += _o58);
            }), _o53 > 0 && _o55 >= 1 && (_o52.kaih += 1), 2 == _o53 && (_o56 >= 1 && (_o52.saku += 1), _o57 >= 1 && (_o52.kaih += 1), _o54[10] >= 1 && (_o52.houg += 1)), _o52;
        };
    },
    27177: (_o5a, _o5b, _o5c) => {
        'use strict';
        var _o5d = null;
        defineModule(_o5b);
        Object.defineProperty(_o5b, '__esModule', {
            'value': true
        }), _o5b.getSlot415PersonalEffect = void 0;
        var _o5e = _o5c(74496);
        _o5b.getSlot415PersonalEffect = function(_o5f) {
            var _o5g = null,
                _o5h = new _o5e.SlotItemEffectModel(),
                _o5i = [];
            if ('アメリカ' == _o5f.getCountryName() && (_o5h.saku += 1, _o5h.tais += 1, _o5i.push(1)), 95 != _o5f.ctype && 99 != _o5f.ctype && 106 != _o5f.ctype && 110 != _o5f.ctype && 121 != _o5f.ctype || (_o5h.houg += 1, _o5i.push(2)), 0 == _o5i.length) return _o5h;
            var _o5j = _o5f.get_each_level_nums(415),
                _o5k = 0,
                _o5l = 0,
                _o5m = 0;
            return _o5i.length > 0 && (_o5j.forEach(function(_o5n, _o5o) {
                _o5o >= 5 && (_o5k += _o5n), _o5o >= 3 && (_o5l += _o5n), _o5o >= 8 && (_o5m += _o5n);
            }), _o5i.forEach(function(_o5p) {
                var _o5q = null;
                1 == _o5p ? _o5k >= 1 && (_o5h.kaih += 1) : 2 == _o5p && (_o5l >= 1 && (_o5h.kaih += 1), _o5m >= 1 && (_o5h.houg += 1));
            })), _o5h;
        };
    },
    53908: (_o5r, _o5s, _o5t) => {
        'use strict';
        var _o5u = null;
        defineModule(_o5s);
        Object.defineProperty(_o5s, '__esModule', {
            'value': true
        }), _o5s.getSlot419PersonalEffect = void 0;
        var _o5v = _o5t(74496);
        _o5s.getSlot419PersonalEffect = function(_o5w) {
            var _o5x = null,
                _o5y = new _o5v.SlotItemEffectModel(),
                _o5z = false,
                _o60 = new _o5v.SlotItemEffectModel(),
                _o61 = 0;
            if ('アメリカ' == _o5w.getCountryName() && (_o60.houg += 2, _o5z = true, _o61 = 1), 0 == _o5z) return _o5y;
            var _o62 = _o5w.get_slotnums(419);
            if (_o5y.add(_o60.multiply(_o62)), 0 == _o61) return _o5y;
            var _o63 = _o5w.get_each_level_nums(419),
                _o64 = 0,
                _o65 = 0;
            return _o61 > 0 && _o63.forEach(function(_o66, _o67) {
                _o67 >= 2 && (_o64 += _o66), _o67 >= 7 && (_o65 += _o66);
            }), 1 == _o61 && (_o64 >= 1 && (_o5y.houg += 1 * _o64), _o65 >= 1 && (_o5y.houg += 1 * _o65)), _o5y;
        };
    },
    79813: (_o68, _o69, _o6a) => {
        'use strict';
        var _o6b = null;
        defineModule(_o69);
        Object.defineProperty(_o69, '__esModule', {
            'value': true
        }), _o69.getSlot420PersonalEffect = void 0;
        var _o6c = _o6a(74496);
        _o69.getSlot420PersonalEffect = function(_o6d) {
            var _o6e = null,
                _o6f = new _o6c.SlotItemEffectModel(),
                _o6g = false,
                _o6h = new _o6c.SlotItemEffectModel(),
                _o6i = 0,
                _o6j = _o6d.getCountryName();
            if ('アメリカ' != _o6j && 67 != _o6d.ctype && 78 != _o6d.ctype && 82 != _o6d.ctype && 88 != _o6d.ctype && 108 != _o6d.ctype && 112 != _o6d.ctype || (_o6h.houg += 1, _o6i = 1, _o6g = true), 84 == _o6d.ctype ? (_o6h.houg += 1, _o6g = true) : 78 == _o6d.ctype && (_o6h.houg -= 1, _o6g = true), 7 == _o6d.stype && (_o6h.houg -= 2, _o6h.kaih -= 1, _o6h.souk -= 2, _o6g = true), 0 == _o6g) return _o6f;
            var _o6k = _o6d.get_slotnums(420);
            if (_o6f.add(_o6h.multiply(_o6k)), 0 == _o6i) return _o6f;
            var _o6l = _o6d.get_each_level_nums(420),
                _o6m = 0,
                _o6n = 0,
                _o6o = 0,
                _o6p = 0;
            _o6i > 0 && _o6l.forEach(function(_o6q, _o6r) {
                _o6r >= 3 && (_o6m += _o6q), _o6r >= 7 && (_o6n += _o6q), _o6r >= 8 && (_o6o += _o6q), _o6r >= 9 && (_o6p += _o6q);
            });
            var _o6s = _o6l[10];
            return 1 == _o6i && (_o6m >= 1 && (_o6f.houg += 1 * _o6m), 'アメリカ' == _o6j && (_o6n >= 1 && (_o6f.houm += 1 * _o6n), _o6o >= 1 && (_o6f.houg += 1 * _o6o), _o6p >= 1 && (_o6f.houm += 1 * _o6p), _o6s >= 1 && (_o6f.houg += 1 * _o6s))), _o6f;
        };
    },
    16088: (_o6t, _o6u, _o6v) => {
        'use strict';
        var _o6w = null;
        defineModule(_o6u);
        Object.defineProperty(_o6u, '__esModule', {
            'value': true
        }), _o6u.getSlot421PersonalEffect = void 0;
        var _o6x = _o6v(74496);
        _o6u.getSlot421PersonalEffect = function(_o6y) {
            var _o6z = null,
                _o70 = new _o6x.SlotItemEffectModel(),
                _o71 = false,
                _o72 = new _o6x.SlotItemEffectModel(),
                _o73 = 0,
                _o74 = _o6y.getCountryName();
            if ('アメリカ' != _o74 && 67 != _o6y.ctype && 78 != _o6y.ctype && 82 != _o6y.ctype && 88 != _o6y.ctype && 108 != _o6y.ctype && 112 != _o6y.ctype || (_o72.houg += 2, _o71 = true, _o73 = 1), 84 == _o6y.ctype ? (_o72.houg += 1, _o71 = true) : 78 == _o6y.ctype && (_o72.houg -= 1, _o71 = true), 7 == _o6y.stype && (_o72.houg -= 2, _o72.kaih -= 1, _o72.souk -= 2, _o71 = true), 0 == _o71) return _o70;
            var _o75 = _o6y.get_slotnums(421);
            if (_o70.add(_o72.multiply(_o75)), 0 == _o73) return _o70;
            var _o76 = _o6y.get_each_level_nums(421),
                _o77 = 0,
                _o78 = 0,
                _o79 = 0,
                _o7a = 0,
                _o7b = 0;
            _o73 > 0 && _o76.forEach(function(_o7c, _o7d) {
                _o7d >= 5 && (_o77 += _o7c), _o7d >= 6 && (_o78 += _o7c), _o7d >= 7 && (_o79 += _o7c), _o7d >= 8 && (_o7a += _o7c), _o7d >= 9 && (_o7b += _o7c);
            });
            var _o7e = _o76[10];
            return 1 == _o73 && (_o77 >= 1 && (_o70.houg += 1 * _o77), 'アメリカ' == _o74 && (_o78 >= 1 && (_o70.houm += 1 * _o78), _o79 >= 1 && (_o70.houg += 1 * _o79), _o7a >= 1 && (_o70.houm += 1 * _o7a), _o7b >= 1 && (_o70.houg += 1 * _o7b), _o7e >= 1 && (_o70.houm += 1 * _o7e))), _o70;
        };
    },
    69939: (_o7f, _o7g, _o7h) => {
        'use strict';
        var _o7i = null;
        defineModule(_o7g);
        Object.defineProperty(_o7g, '__esModule', {
            'value': true
        }), _o7g.getSlot422PersonalEffect = void 0;
        var _o7j = _o7h(74496);
        _o7g.getSlot422PersonalEffect = function(_o7k) {
            var _o7l = null,
                _o7m = new _o7j.SlotItemEffectModel(),
                _o7n = false,
                _o7o = new _o7j.SlotItemEffectModel();
            if ('アメリカ' != _o7k.getCountryName() && 67 != _o7k.ctype && 78 != _o7k.ctype && 82 != _o7k.ctype && 88 != _o7k.ctype && 108 != _o7k.ctype && 112 != _o7k.ctype || (_o7o.houg += 1, _o7o.kaih += 1, _o7n = true), 84 == _o7k.ctype && (_o7o.houg += 1, _o7o.tyku += 1, _o7n = true), 707 == _o7k.ship_id && (_o7o.houg += 2, _o7o.kaih += 2, _o7o.tyku += 2, _o7n = true), 0 == _o7n) return _o7m;
            var _o7p = _o7k.get_slotnums(422);
            return _o7m.add(_o7o.multiply(_o7p)), _o7m;
        };
    },
    33734: (_o7q, _o7r, _o7s) => {
        'use strict';
        var _o7t = null;
        defineModule(_o7r);
        Object.defineProperty(_o7r, '__esModule', {
            'value': true
        }), _o7r.getSlot423PersonalEffect = void 0;
        var _o7u = _o7s(74496);
        _o7r.getSlot423PersonalEffect = function(_o7v) {
            var _o7w = null,
                _o7x = new _o7u.SlotItemEffectModel(),
                _o7y = false,
                _o7z = new _o7u.SlotItemEffectModel();
            78 != _o7v.ctype && 112 != _o7v.ctype || (_o7z.houg += 2, _o7z.tyku += 2, _o7z.kaih += 2, _o7z.saku += 2, _o7y = true);
            var _o80 = _o7v.getCountryName();
            if (67 == _o7v.ctype || 78 == _o7v.ctype || 82 == _o7v.ctype || 88 == _o7v.ctype || 108 == _o7v.ctype || 112 == _o7v.ctype ? (_o7z.houg += 2, _o7z.tyku += 2, _o7z.kaih += 2, _o7z.saku += 2, _o7y = true) : 'アメリカ' == _o80 && (_o7z.houg += 1, _o7z.tyku += 1, _o7z.kaih += 1, _o7z.saku += 1, _o7y = true), 0 == _o7y) return _o7x;
            var _o81 = _o7v.get_slotnums(423);
            return _o7x.add(_o7z.multiply(_o81)), _o7x;
        };
    },
    34432: (_o82, _o83, _o84) => {
        'use strict';
        var _o85 = null;
        defineModule(_o83);
        Object.defineProperty(_o83, '__esModule', {
            'value': true
        }), _o83.getSlot424PersonalEffect = void 0;
        var _o86 = _o84(74496);
        _o83.getSlot424PersonalEffect = function(_o87) {
            var _o88 = null,
                _o89 = new _o86.SlotItemEffectModel(),
                _o8a = false,
                _o8b = new _o86.SlotItemEffectModel(),
                _o8c = 0;
            67 != _o87.ctype && 78 != _o87.ctype && 82 != _o87.ctype && 88 != _o87.ctype && 108 != _o87.ctype && 112 != _o87.ctype || (_o8b.houg += 2, _o8b.raig += 3, _o8a = true, _o8c = 1);
            var _o8d = _o87.get_slotnums(424);
            _o8a && _o89.add(_o8b.multiply(_o8d));
            var _o8e = _o87.get_each_level_nums(424),
                _o8f = 0,
                _o8g = 0,
                _o8h = 0;
            _o8e.forEach(function(_o8i, _o8j) {
                _o8j >= 2 && (_o8f += _o8i), _o8j >= 6 && (_o8g += _o8i), _o8j >= 8 && (_o8h += _o8i);
            });
            var _o8k = _o8e[10];
            return 1 == _o8c && (_o8f >= 1 && (_o89.houg += 1 * _o8f), _o8g >= 1 && (_o89.houg += 1 * _o8g), _o8h >= 1 && (_o89.houm += 1 * _o8h)), _o8k > 0 && (_o89.houm += 1 * _o8k), _o89;
        };
    },
    97423: (_o8l, _o8m, _o8n) => {
        'use strict';
        var _o8o = null;
        defineModule(_o8m);
        Object.defineProperty(_o8m, '__esModule', {
            'value': true
        }), _o8m.getSlot425PersonalEffect = void 0;
        var _o8p = _o8n(74496);
        _o8m.getSlot425PersonalEffect = function(_o8q) {
            var _o8r = null,
                _o8s = new _o8p.SlotItemEffectModel(),
                _o8t = false,
                _o8u = new _o8p.SlotItemEffectModel(),
                _o8v = 0;
            67 != _o8q.ctype && 78 != _o8q.ctype && 82 != _o8q.ctype && 88 != _o8q.ctype && 108 != _o8q.ctype && 112 != _o8q.ctype || (_o8u.houg += 2, _o8u.tais += 2, _o8u.raig += 1, _o8u.saku += 1, _o8t = true, _o8v = 1);
            var _o8w = _o8q.get_slotnums(425);
            _o8t && _o8s.add(_o8u.multiply(_o8w));
            var _o8x = _o8q.get_each_level_nums(425),
                _o8y = 0,
                _o8z = 0,
                _o90 = 0,
                _o91 = 0,
                _o92 = 0,
                _o93 = 0;
            _o8x.forEach(function(_o94, _o95) {
                _o95 >= 2 && (_o8y += _o94), _o95 >= 4 && (_o8z += _o94), _o95 >= 6 && (_o90 += _o94), _o95 >= 7 && (_o91 += _o94), _o95 >= 8 && (_o92 += _o94), _o95 >= 9 && (_o93 += _o94);
            });
            var _o96 = _o8x[10];
            return 1 == _o8v && (_o8y >= 1 && (_o8s.tais += 1 * _o8y), _o8z >= 1 && (_o8s.houg += 1 * _o8z), _o90 >= 1 && (_o8s.tais += 1 * _o90), _o91 >= 1 && (_o8s.houm += 1 * _o91), _o92 >= 1 && (_o8s.raig += 1 * _o92), _o93 >= 1 && (_o8s.houg += 1 * _o93), _o96 >= 1 && (_o8s.tais += 1 * _o96)), _o91 >= 1 && (_o8s.houg += 1 * _o91), _o92 >= 1 && (_o8s.tais += 1 * _o92), _o93 >= 1 && (_o8s.houm += 1 * _o93), _o96 >= 1 && (_o8s.houm += 1 * _o96), _o8s;
        };
    },
    23551: (_o97, _o98, _o99) => {
        'use strict';
        var _o9a = null;
        defineModule(_o98);
        Object.defineProperty(_o98, '__esModule', {
            'value': true
        }), _o98.getSlot430PersonalEffect = void 0;
        var _o9b = _o99(74496);
        _o98.getSlot430PersonalEffect = function(_o9c) {
            var _o9d = null,
                _o9e = new _o9b.SlotItemEffectModel(),
                _o9f = false,
                _o9g = new _o9b.SlotItemEffectModel(),
                _o9h = 0;
            if (113 == _o9c.ctype && (_o9g.tyku += 1, _o9g.kaih += 1, _o9f = true), 58 != _o9c.ctype && 61 != _o9c.ctype && 64 != _o9c.ctype && 68 != _o9c.ctype && 80 != _o9c.ctype && 92 != _o9c.ctype && 113 != _o9c.ctype && 124 != _o9c.ctype || (_o9g.tyku += 2, _o9g.kaih += 1, _o9f = true, _o9h = 1), 0 == _o9f) return _o9e;
            var _o9i = _o9c.get_slotnums(430);
            if (_o9e.add(_o9g.multiply(_o9i)), 0 == _o9h) return _o9e;
            var _o9j = _o9c.get_each_level_nums(430),
                _o9k = 0,
                _o9l = 0,
                _o9m = 0;
            if (_o9h > 0 && _o9j.forEach(function(_o9n, _o9o) {
                    _o9o >= 2 && (_o9k += _o9n), _o9o >= 4 && (_o9l += _o9n), _o9o >= 7 && (_o9m += _o9n);
                }), 1 == _o9h) {
                _o9k >= 1 && (_o9e.kaih += 1 * _o9k), _o9l >= 1 && (_o9e.tyku += 1 * _o9l), _o9m >= 1 && (_o9e.kaih += 1 * _o9m);
                var _o9p = _o9j[10];
                _o9p >= 1 && (_o9e.tyku += 1 * _o9p);
            }
            return _o9e;
        };
    },
    6173: (_o9q, _o9r, _o9s) => {
        'use strict';
        var _o9t = null;
        defineModule(_o9r);
        Object.defineProperty(_o9r, '__esModule', {
            'value': true
        }), _o9r.getSlot437PersonalEffect = void 0;
        var _o9u = _o9s(74496);
        _o9r.getSlot437PersonalEffect = function(_o9v) {
            var _o9w = null,
                _o9x = new _o9u.SlotItemEffectModel(),
                _o9y = false,
                _o9z = new _o9u.SlotItemEffectModel();
            if (285 == _o9v.ship_id ? (_o9z.houg += 3, _o9z.tyku += 3, _o9z.kaih += 4, _o9y = true) : 894 == _o9v.ship_id || 899 == _o9v.ship_id ? (_o9z.houg += 4, _o9z.tyku += 4, _o9z.kaih += 4, _o9y = true) : 196 == _o9v.ship_id || 197 == _o9v.ship_id ? (_o9z.houg += 2, _o9z.tyku += 2, _o9z.kaih += 3, _o9y = true) : 508 == _o9v.ship_id || 509 == _o9v.ship_id || 646 == _o9v.ship_id ? (_o9z.houg += 2, _o9z.tyku += 2, _o9z.kaih += 2, _o9y = true) : 888 != _o9v.ship_id && 883 != _o9v.ship_id && 553 != _o9v.ship_id && 554 != _o9v.ship_id || (_o9z.houg += 1, _o9z.tyku += 2, _o9z.kaih += 2, _o9y = true), 0 == _o9y) return _o9x;
            var _oa0 = _o9v.get_slotnums(437);
            return _o9x.add(_o9z.multiply(_oa0)), _o9x;
        };
    },
    53709: (_oa1, _oa2, _oa3) => {
        'use strict';
        var _oa4 = null;
        defineModule(_oa2);
        Object.defineProperty(_oa2, '__esModule', {
            'value': true
        }), _oa2.getSlot438PersonalEffect = void 0;
        var _oa5 = _oa3(74496);
        _oa2.getSlot438PersonalEffect = function(_oa6) {
            var _oa7 = null,
                _oa8 = new _oa5.SlotItemEffectModel(),
                _oa9 = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_oa6.ctype) > -1 && (_oa8.tais += 1, _oa8.kaih += 1), 160 == _oa6.ship_id || 488 == _oa6.ship_id || 141 == _oa6.ship_id ? (_oa8.tais += 1, _oa8.kaih += 1) : 145 != _oa6.ship_id && 588 != _oa6.ship_id && 667 != _oa6.ship_id && 578 != _oa6.ship_id && 476 != _oa6.ship_id && 363 != _oa6.ship_id && 961 != _oa6.ship_id || (_oa9 = 1), 'うしお' == _oa6.yomi || 'まいかぜ' == _oa6.yomi || 'いそかぜ' == _oa6.yomi || 'はまかぜ' == _oa6.yomi || 'いかづち' == _oa6.yomi || 'やまぐも' == _oa6.yomi || 'うみかぜ' == _oa6.yomi || 'かわかぜ' == _oa6.yomi || 'すずかぜ' == _oa6.yomi ? _oa8.tais += 1 : 'しぐれ' != _oa6.yomi && 'やまかぜ' != _oa6.yomi && 'かみかぜ' != _oa6.yomi && 'はるかぜ' != _oa6.yomi && 'みくら' != _oa6.yomi && 'いしがき' != _oa6.yomi || (_oa8.tais += 1, _oa8.kaih += 1), 0 == _oa9) return _oa8;
            var _oaa = _oa6.get_each_level_nums(438),
                _oab = 0,
                _oac = 0,
                _oad = 0,
                _oae = _oaa[10];
            return _oa9 > 0 && _oaa.forEach(function(_oaf, _oag) {
                _oag >= 4 && (_oab += _oaf), _oag >= 6 && (_oac += _oaf), _oag >= 8 && (_oad += _oaf);
            }), 1 == _oa9 && (_oab >= 1 && (_oa8.tais += 1), _oac >= 1 && (_oa8.kaih += 1), _oad >= 1 && (_oa8.tais += 1), _oae >= 1 && (_oa8.kaih += 1)), _oa8;
        };
    },
    99790: (_oah, _oai, _oaj) => {
        'use strict';
        var _oak = null;
        defineModule(_oai);
        Object.defineProperty(_oai, '__esModule', {
            'value': true
        }), _oai.getSlot439PersonalEffect = void 0;
        var _oal = _oaj(74496);
        _oai.getSlot439PersonalEffect = function(_oam) {
            var _oan = null,
                _oao = new _oal.SlotItemEffectModel();
            1 != _oam.stype && 2 != _oam.stype && 3 != _oam.stype && 21 != _oam.stype || (_oao.tais += 1, _oao.kaih += 1), 101 != _oam.ctype && 1 != _oam.stype || (_oao.tais += 1);
            var _oap = _oam.getCountryName();
            return 'アメリカ' != _oap && 'イギリス' != _oap || (_oao.tais += 2), _oao;
        };
    },
    18387: (_oaq, _oar, _oas) => {
        'use strict';
        var _oat = null;
        defineModule(_oar);
        Object.defineProperty(_oar, '__esModule', {
            'value': true
        }), _oar.getSlot440_441PersonalEffect = void 0;
        var _oau = _oas(74496);
        _oar.getSlot440_441PersonalEffect = function(_oav) {
            var _oaw = null,
                _oax = new _oau.SlotItemEffectModel();
            return 114 == _oav.ctype && (_oax.raig += 2), _oax;
        };
    },
    70941: (_oay, _oaz, _ob0) => {
        'use strict';
        var _ob1 = null;
        defineModule(_oaz);
        Object.defineProperty(_oaz, '__esModule', {
            'value': true
        }), _oaz.getSlot442_443PersonalEffect = void 0;
        var _ob2 = _ob0(74496);
        _oaz.getSlot442_443PersonalEffect = function(_ob3) {
            var _ob4 = null,
                _ob5 = new _ob2.SlotItemEffectModel();
            return 122 == _ob3.ctype ? (_ob5.raig += 1, _ob5.kaih += 2) : 114 == _ob3.ctype && (_ob5.raig += 2), _ob5;
        };
    },
    35025: (_ob6, _ob7, _ob8) => {
        'use strict';
        var _ob9 = null;
        defineModule(_ob7);
        Object.defineProperty(_ob7, '__esModule', {
            'value': true
        }), _ob7.getSlot447PersonalEffect = void 0;
        var _oba = _ob8(74496);
        _ob7.getSlot447PersonalEffect = function(_obb) {
            var _obc = null,
                _obd = new _oba.SlotItemEffectModel(),
                _obe = _obb.get_each_level_nums(447),
                _obf = 0,
                _obg = 0,
                _obh = 0,
                _obi = 0;
            _obe.forEach(function(_obj, _obk) {
                _obk >= 2 && (_obf += _obj), _obk >= 4 && (_obg += _obj), _obk >= 6 && (_obh += _obj), _obk >= 8 && (_obi += _obj);
            }), _obf >= 1 && (_obd.houg += 1 * _obf), _obg >= 1 && (_obd.tyku += 1 * _obg), _obh >= 1 && (_obd.tais += 1 * _obh), _obi >= 1 && (_obd.kaih += 1 * _obi);
            var _obl = _obe[10];
            _obl >= 1 && (_obd.tais += 1 * _obl);
            var _obm = false,
                _obn = new _oba.SlotItemEffectModel();
            if (76 == _obb.ctype && (_obn.houg += 1, _obn.tais += 1, _obn.kaih += 2, _obm = true), 'うんよう' == _obb.yomi ? (_obn.houg += 1, _obn.tais += 1, _obn.kaih += 1, _obm = true) : 'ほうしょう' != _obb.yomi && 'たいげい・りゅうほう' != _obb.yomi || (_obn.houg += 1, _obn.tais += 2, _obn.kaih += 1, _obm = true), 0 == _obm) return _obd;
            894 != _obb.ship_id && 899 != _obb.ship_id || (_obn.houg += 1, _obn.kaih += 1, _obn.tais += 1, _obn.tyku += 1, _obm = true);
            var _obo = _obb.get_slotnums(447);
            return _obd.add(_obn.multiply(_obo)), _obd;
        };
    },
    96804: (_obp, _obq, _obr) => {
        'use strict';
        var _obs = null;
        defineModule(_obq);
        Object.defineProperty(_obq, '__esModule', {
            'value': true
        }), _obq.getSlot450PersonalEffect = void 0;
        var _obt = _obr(74496);
        _obq.getSlot450PersonalEffect = function(_obu) {
            var _obv = null,
                _obw = new _obt.SlotItemEffectModel(),
                _obx = false,
                _oby = new _obt.SlotItemEffectModel();
            if (101 == _obu.ctype && (_oby.houg += 1, _oby.tyku += 2, _oby.souk += 1, _oby.kaih += 3, _obx = true), 1 == _obu.stype && (_oby.tyku += 1, _oby.souk += 1, _oby.kaih += 2, _obx = true), 0 == _obx) return _obw;
            var _obz = _obu.get_slotnums(450);
            return _obw.add(_oby.multiply(_obz)), _obw;
        };
    },
    33896: (_oc0, _oc1, _oc2) => {
        'use strict';
        var _oc3 = null;
        defineModule(_oc1);
        Object.defineProperty(_oc1, '__esModule', {
            'value': true
        }), _oc1.getSlot451PersonalEffect = void 0;
        var _oc4 = _oc2(74496);
        _oc1.getSlot451PersonalEffect = function(_oc5) {
            var _oc6 = null,
                _oc7 = new _oc4.SlotItemEffectModel(),
                _oc8 = false,
                _oc9 = new _oc4.SlotItemEffectModel(),
                _oca = 0;
            if ('あきつまる' == _oc5.yomi ? (_oc9.houg += 1, _oc9.tais += 2, _oc8 = true, 166 == _oc5.ship_id && (_oca = 2)) : 'やましおまる' == _oc5.yomi && (_oc9.houg += 1, _oc9.tais += 3, _oc8 = true, _oca = 1), 0 == _oc8) return _oc7;
            var _ocb = _oc5.get_slotnums(451);
            if (_oc7.add(_oc9.multiply(_ocb)), 0 == _oca) return _oc7;
            var _occ = _oc5.get_each_level_nums(451),
                _ocd = [];
            return _oca > 0 && _occ.forEach(function(_oce, _ocf) {
                var _ocg = null;
                for (var _och = 1; _och <= _oc5.SLOT_LEVEL_MAX; _och++) _ocf >= _och && (null == _ocd[_och] && (_ocd[_och] = 0), _ocd[_och] += _oce);
            }), 1 == _oca ? (_ocd[1] >= 1 && (_oc7.houg += 2 * _ocd[1]), _ocd[2] >= 1 && (_oc7.houm += 1 * _ocd[2]), _ocd[3] >= 1 && (_oc7.tais += 1 * _ocd[3]), _ocd[4] >= 1 && (_oc7.houg += 1 * _ocd[4]), _ocd[6] >= 1 && (_oc7.houm += 1 * _ocd[6]), _ocd[8] >= 1 && (_oc7.tais += 1 * _ocd[8]), _ocd[10] >= 1 && (_oc7.houg += 1 * _ocd[10])) : 2 == _oca && (_ocd[1] >= 1 && (_oc7.houg += 1 * _ocd[1]), _ocd[3] >= 1 && (_oc7.tais += 1 * _ocd[3]), _ocd[5] >= 1 && (_oc7.houm += 1 * _ocd[5]), _ocd[7] >= 1 && (_oc7.tais += 1 * _ocd[7]), _ocd[10] >= 1 && (_oc7.houg += 1 * _ocd[10])), _oc7;
        };
    },
    11031: function(_oci, _ocj, _ock) {
        'use strict';
        var _ocl = null;
        var _ocm = this && this.__importDefault || function(_ocn) {
            var _oco = null;
            return _ocn && _ocn.__esModule ? _ocn : {
                'default': _ocn
            };
        };
        defineModule(_ocj);
        Object.defineProperty(_ocj, '__esModule', {
            'value': true
        }), _ocj.getSlot455PersonalEffect = void 0;
        var _ocp = _ock(74496),
            _ocq = _ocm(_ock(18622));
        _ocj.getSlot455PersonalEffect = function(_ocr) {
            var _ocs = null,
                _oct = new _ocp.SlotItemEffectModel(),
                _ocu = false,
                _ocv = new _ocp.SlotItemEffectModel(),
                _ocw = 0,
                _ocx = _ocr.get_slotnums(455);
            if (1 != _ocr.ctype && 5 != _ocr.ctype && 12 != _ocr.ctype || (_ocv.houg += 2, _ocv.tyku += 1, 12 == _ocr.ctype && (_ocv.houg += 1), 666 == _ocr.ship_id ? (_ocv.houg += 1, _ocv.tais += 1) : 959 == _ocr.ship_id && (_ocv.houg += 2, _ocx >= 2 && (_oct.houg += 2), _ocx >= 3 && (_oct.houg += 3)), _ocw = 1, _ocu = true), 'うらなみ' == _ocr.yomi && (_ocv.houg += 1, 647 == _ocr.ship_id && (_ocv.houg += 1, _ocv.raig += 1, _ocv.tais += 1, _ocv.kaih += 1), _ocu = true), 0 == _ocu) return _oct;
            if (_oct.add(_ocv.multiply(_ocx)), 0 == _ocw) return _oct;
            for (var _ocy = 0, _ocz = 0, _od0 = 0, _od1 = _ocr.have_slot_ids(); _od0 < _od1.length; _od0++) {
                var _od2 = _od1[_od0],
                    _od3 = _ocq.default.model.slot.getMst(_od2),
                    _od4 = _od3.equipType;
                12 != _od4 && 13 != _od4 || (_od3.sakuteki >= 5 && (_ocy += _ocr.get_slotnums(parseInt(_od2))), _od3.taiku >= 2 && (_ocz += _ocr.get_slotnums(parseInt(_od2))));
            }
            if (1 == _ocw) {
                _ocy >= 1 && (_oct.houg += 3, _oct.kaih += 2, _oct.raig += 1);
                var _od5 = _ocr.get_slotnums(13),
                    _od6 = _ocr.get_slotnums(125),
                    _od7 = _ocr.get_slotnums(285),
                    _od8 = _od5 + _od6 + _od7;
                1 == _od8 ? (_oct.houg += 1, _oct.raig += 3) : _od8 >= 2 && (_oct.houg += 2, _oct.raig += 5), _od7 >= 1 && (_oct.raig += 1), _ocz >= 1 && (_oct.tyku += 4);
            }
            return _oct;
        };
    },
    71383: (_od9, _oda, _odb) => {
        'use strict';
        var _odc = null;
        defineModule(_oda);
        Object.defineProperty(_oda, '__esModule', {
            'value': true
        }), _oda.getSlot456PersonalEffect = void 0;
        var _odd = _odb(74496);
        _oda.getSlot456PersonalEffect = function(_ode) {
            var _odf = null,
                _odg = new _odd.SlotItemEffectModel(),
                _odh = false,
                _odi = new _odd.SlotItemEffectModel(),
                _odj = _ode.getCountryName();
            if ('アメリカ' == _odj && (_odi.houg += 3, _odi.kaih += 4, _odi.saku += 4, _odg.houm += 3, _odh = true), 'イギリス' != _odj && 'オーストラリア' != _odj || (_odi.houg += 2, _odi.kaih += 2, _odi.saku += 2, _odg.houm += 2, _odh = true), 87 != _ode.ctype && 91 != _ode.ctype || (_odi.houg += 1, _odg.leng += 1, _odh = true), 651 != _ode.ship_id && 656 != _ode.ship_id || (_odg.houg += 2, _odg.kaih += 2, _odg.saku += 3, _odg.leng += 1, _odg.houm += 2), 0 == _odh) return _odg;
            var _odk = _ode.get_slotnums(456);
            return _odg.add(_odi.multiply(_odk)), _odg;
        };
    },
    55888: (_odl, _odm, _odn) => {
        'use strict';
        var _odo = null;
        defineModule(_odm);
        Object.defineProperty(_odm, '__esModule', {
            'value': true
        }), _odm.getSlot457PersonalEffect = void 0;
        var _odp = _odn(74496);
        _odm.getSlot457PersonalEffect = function(_odq) {
            var _odr = null,
                _ods = new _odp.SlotItemEffectModel(),
                _odt = 0;
            if (109 == _odq.ctype ? (_ods.raig += 3, _ods.kaih += 3, _odt = 1) : 71 == _odq.ctype || 103 == _odq.ctype ? (_ods.raig += 2, _ods.kaih += 2, _odt = 2) : 44 == _odq.ctype && (_ods.raig += 1, _ods.kaih += 4, _odt = 3), 0 == _odt) return _ods;
            var _odu = _odq.get_each_level_nums(461),
                _odv = [];
            return _odt > 0 && _odu.forEach(function(_odw, _odx) {
                var _ody = null;
                for (var _odz = 1; _odz <= _odq.SLOT_LEVEL_MAX; _odz++) null == _odv[_odz] && (_odv[_odz] = 0), _odx >= _odz && (_odv[_odz] += _odw);
            }), 1 == _odt ? (_odv[2] >= 1 && (_ods.raig += 1 * _odv[2]), _odv[3] >= 1 && (_ods.kaih += 1 * _odv[3]), _odv[4] >= 1 && (_ods.raig += 1 * _odv[4]), _odv[5] >= 1 && (_ods.houm += 1 * _odv[5]), _odv[6] >= 1 && (_ods.raig += 1 * _odv[6]), _odv[8] >= 1 && (_ods.raig += 1 * _odv[8]), _odv[10] >= 1 && (_ods.houm += 1 * _odv[10])) : 2 == _odt ? (_odv[3] >= 1 && (_ods.kaih += 1 * _odv[3]), _odv[4] >= 1 && (_ods.raig += 1 * _odv[4]), _odv[6] >= 1 && (_ods.raig += 1 * _odv[6]), _odv[8] >= 1 && (_ods.raig += 1 * _odv[8]), _odv[10] >= 1 && (_ods.houm += 1 * _odv[10])) : 3 == _odt && (_odv[4] >= 1 && (_ods.raig += 1 * _odv[4]), _odv[6] >= 1 && (_ods.raig += 1 * _odv[6]), _odv[8] >= 1 && (_ods.raig += 1 * _odv[8]), _odv[10] >= 1 && (_ods.houm += 1 * _odv[10])), _ods;
        };
    },
    2258: (_oe0, _oe1, _oe2) => {
        'use strict';
        var _oe3 = null;
        defineModule(_oe1);
        Object.defineProperty(_oe1, '__esModule', {
            'value': true
        }), _oe1.getSlot458PersonalEffect = void 0;
        var _oe4 = _oe2(74496);
        _oe1.getSlot458PersonalEffect = function(_oe5) {
            var _oe6 = null,
                _oe7 = new _oe4.SlotItemEffectModel(),
                _oe8 = 0,
                _oe9 = false;
            if (13 != _oe5.stype && 14 != _oe5.stype || (_oe9 = true), 109 == _oe5.ctype ? (_oe7.raig += 3, _oe7.kaih += 6, _oe8 = 1) : 71 == _oe5.ctype || 103 == _oe5.ctype ? (_oe7.raig += 3, _oe7.kaih += 4, _oe8 = 2) : 44 == _oe5.ctype && (_oe7.raig += 3, _oe7.kaih += 3, _oe8 = 3), 0 == _oe9 && 0 == _oe8) return _oe7;
            var _oea = [];
            [458, 461].forEach(function(_oeb) {
                var _oec = null,
                    _oed = _oe5.get_each_level_nums(_oeb);
                null == _oea[_oeb] && (_oea[_oeb] = []), _oed.forEach(function(_oee, _oef) {
                    var _oeg = null;
                    for (var _oeh = 1; _oeh <= _oe5.SLOT_LEVEL_MAX; _oeh++) null == _oea[_oeb][_oeh] && (_oea[_oeb][_oeh] = 0), _oef >= _oeh && (_oea[_oeb][_oeh] += _oee);
                });
            });
            var _oei = _oea[458][2],
                _oej = _oea[458][3],
                _oek = _oea[458][4],
                _oel = _oea[458][5],
                _oem = _oea[458][6],
                _oen = _oea[458][8],
                _oeo = _oea[458][10],
                _oep = _oea[461][4];
            return _oe8 >= 1 && _oe8 <= 3 && (_oek >= 1 && (_oe7.houm += 1 * _oek), _oem >= 1 && (_oe7.kaih += 1 * _oem), _oen >= 1 && (_oe7.raig += 1 * _oen)), _oe9 && (_oej >= 1 && (_oe7.kaih += 1 * _oej), _oel >= 1 && (_oe7.raig += 1 * _oel), _oeo >= 1 && (_oe7.houm += 1 * _oeo), _oei >= 1 && _oep >= 1 && (_oe7.raig += 7, _oe7.houm += 5)), _oe7;
        };
    },
    43768: (_oeq, _oer, _oes) => {
        'use strict';
        var _oet = null;
        defineModule(_oer);
        Object.defineProperty(_oer, '__esModule', {
            'value': true
        }), _oer.getSlot463PersonalEffect = void 0;
        var _oeu = _oes(74496);
        _oer.getSlot463PersonalEffect = function(_oev) {
            var _oew = null,
                _oex = new _oeu.SlotItemEffectModel(),
                _oey = false,
                _oez = new _oeu.SlotItemEffectModel(),
                _of0 = _oev.get_slotnums(142),
                _of1 = _oev.get_slotnums(460),
                _of2 = _of0 + _of1;
            if (37 == _oev.ctype && (_oez.houg += 1, _oez.tyku += 2, _oez.kaih += 1, _oez.houm += 1, _of2 >= 1 && (_oex.tyku += 1, _oex.kaih += 1, _oex.houm += 1), _oey = true), 916 != _oev.ship_id && 911 != _oev.ship_id && 546 != _oev.ship_id || (_oez.houg += 1, _oez.kaih += 1, _oez.houm += 2, _of1 >= 1 && (_oex.houg += 1, _oex.kaih += 1, _oex.houm += 2), _oey = true), 0 == _oey) return _oex;
            var _of3 = _oev.get_slotnums(463);
            return _oex.add(_oez.multiply(_of3)), _oex;
        };
    },
    92174: (_of4, _of5, _of6) => {
        'use strict';
        var _of7 = null;
        defineModule(_of5);
        Object.defineProperty(_of5, '__esModule', {
            'value': true
        }), _of5.getSlot464PersonalEffect = void 0;
        var _of8 = _of6(74496);
        _of5.getSlot464PersonalEffect = function(_of9) {
            var _ofa = null,
                _ofb = new _of8.SlotItemEffectModel(),
                _ofc = false,
                _ofd = new _of8.SlotItemEffectModel(),
                _ofe = _of9.get_slotnums(142),
                _off = _of9.get_slotnums(460),
                _ofg = _ofe + _off;
            if (37 == _of9.ctype ? (_ofd.tyku += 3, _ofd.kaih += 2, _ofg >= 1 && (_ofb.tyku += 2, _ofb.kaih += 1, _ofb.houm += 1), _ofc = true) : 6 != _of9.ctype && 73 != _of9.ctype && 113 != _of9.ctype || (_ofd.tyku = _ofd.tyku - 2, _ofd.kaih = _ofd.kaih - 2, _ofc = true), 916 != _of9.ship_id && 911 != _of9.ship_id && 546 != _of9.ship_id && 593 != _of9.ship_id && 954 != _of9.ship_id || (_ofd.tyku += 2, _ofd.kaih += 2, _off >= 1 && (_ofb.houg += 2, _ofb.tyku += 2, _ofb.kaih += 2, _ofb.houm += 3), _ofc = true), 0 == _ofc) return _ofb;
            var _ofh = _of9.get_slotnums(464);
            return _ofb.add(_ofd.multiply(_ofh)), _ofb;
        };
    },
    38003: (_ofi, _ofj, _ofk) => {
        'use strict';
        var _ofl = null;
        defineModule(_ofj);
        Object.defineProperty(_ofj, '__esModule', {
            'value': true
        }), _ofj.getSlot465PersonalEffect = void 0;
        var _ofm = _ofk(74496);
        _ofj.getSlot465PersonalEffect = function(_ofn) {
            var _ofo = null,
                _ofp = new _ofm.SlotItemEffectModel(),
                _ofq = false,
                _ofr = new _ofm.SlotItemEffectModel(),
                _ofs = _ofn.get_slotnums(142),
                _oft = _ofn.get_slotnums(460),
                _ofu = _ofs + _oft;
            if (916 == _ofn.ship_id ? (_ofr.houg += 2, _ofr.kaih += 8, _ofr.houm += 2, _oft >= 1 && (_ofp.kaih += 2, _ofp.houm += 1), _ofq = true) : 911 != _ofn.ship_id && 546 != _ofn.ship_id || (_ofr.houg += 1, _ofr.kaih += 2, _ofr.houm += 1, _oft >= 1 && (_ofp.kaih += 1, _ofp.houm += 1), _ofq = true), 37 == _ofn.ctype && _ofu >= 1 && (_ofp.houg += 2, _ofp.houm += 2), 0 == _ofq) return _ofp;
            var _ofv = _ofn.get_slotnums(465);
            return _ofp.add(_ofr.multiply(_ofv)), _ofp;
        };
    },
    65455: (_ofw, _ofx, _ofy) => {
        'use strict';
        var _ofz = null;
        defineModule(_ofx);
        Object.defineProperty(_ofx, '__esModule', {
            'value': true
        }), _ofx.getSlot466PersonalEffect = void 0;
        var _og0 = _ofy(74496);
        _ofx.getSlot466PersonalEffect = function(_og1) {
            var _og2 = null,
                _og3 = new _og0.SlotItemEffectModel(),
                _og4 = false,
                _og5 = new _og0.SlotItemEffectModel();
            if (277 == _og1.ship_id || 278 == _og1.ship_id || 156 == _og1.ship_id || 288 == _og1.ship_id || 112 == _og1.ship_id || 280 == _og1.ship_id || 279 == _og1.ship_id ? (_og5.houg += 1, _og5.houm += 1, _og4 = true) : 461 == _og1.ship_id || 462 == _og1.ship_id || 466 == _og1.ship_id || 467 == _og1.ship_id ? (_og5.houg += 2, _og5.kaih += 2, _og5.houm += 1, _og4 = true) : 594 != _og1.ship_id && 698 != _og1.ship_id && 646 != _og1.ship_id && 599 != _og1.ship_id && 610 != _og1.ship_id && 196 != _og1.ship_id && 197 != _og1.ship_id || (_og5.houg += 1, _og5.kaih += 1, _og5.houm += 2, _og4 = true), 0 == _og4) return _og3;
            var _og6 = _og1.get_slotnums(466);
            return _og3.add(_og5.multiply(_og6)), _og3;
        };
    },
    70362: (_og7, _og8, _og9) => {
        'use strict';
        var _oga = null;
        defineModule(_og8);
        Object.defineProperty(_og8, '__esModule', {
            'value': true
        }), _og8.getSlot467PersonalEffect = void 0;
        var _ogb = _og9(74496);
        _og8.getSlot467PersonalEffect = function(_ogc) {
            var _ogd = null,
                _oge = new _ogb.SlotItemEffectModel(),
                _ogf = false,
                _ogg = new _ogb.SlotItemEffectModel();
            if ('アメリカ' == _ogc.getCountryName()) {
                for (var _ogh = _ogc.getUSSWaterRaderDict(), _ogi = _ogc.getUSSAirRaderDict(), _ogj = 0, _ogk = 0, _ogl = 0, _ogm = _ogc.have_slot_ids(); _ogl < _ogm.length; _ogl++) {
                    var _ogn = _ogm[_ogl];
                    _ogh[parseInt(_ogn)] && (_ogj += _ogc.get_slotnums(parseInt(_ogn))), _ogi[parseInt(_ogn)] && (_ogk += _ogc.get_slotnums(parseInt(_ogn)));
                }
                _ogg.houg += 1, _ogg.tyku += 1, _ogg.kaih += 2, _ogj >= 1 && (_oge.houg += 1, _oge.tyku += 1, _oge.kaih += 1, _oge.houm += 2), _ogk >= 1 && (_oge.tyku += 2, _oge.kaih += 2), 65 != _ogc.ctype && 93 != _ogc.ctype && 102 != _ogc.ctype && 107 != _ogc.ctype && 125 != _ogc.ctype || (_ogg.tyku += 2, _ogg.kaih += 1), _ogf = true;
            }
            if (0 == _ogf) return _oge;
            var _ogo = _ogc.get_slotnums(467);
            return _oge.add(_ogg.multiply(_ogo)), _oge;
        };
    },
    68086: (_ogp, _ogq, _ogr) => {
        'use strict';
        var _ogs = null;
        defineModule(_ogq);
        Object.defineProperty(_ogq, '__esModule', {
            'value': true
        }), _ogq.getSlot470PersonalEffect = void 0;
        var _ogt = _ogr(74496);
        _ogq.getSlot470PersonalEffect = function(_ogu) {
            var _ogv = null,
                _ogw = new _ogt.SlotItemEffectModel(),
                _ogx = false,
                _ogy = new _ogt.SlotItemEffectModel(),
                _ogz = _ogu.get_slotnums(470),
                _oh0 = _ogu.get_slotnums(529),
                _oh1 = _ogz + _oh0,
                _oh2 = _ogu.get_each_level_over_nums([470, 529]),
                _oh3 = (_oh2.slot[470], _oh2.slot[529]),
                _oh4 = _oh2.total,
                _oh5 = 0;
            23 == _ogu.ctype || 18 == _ogu.ctype ? (_ogy.houg += 1, _ogx = true, _oh5 = 1) : 30 == _ogu.ctype && (_ogy.houg += 2, _ogx = true, _oh5 = 2), ('しぐれ' == _ogu.yomi || 'ゆきかぜ' == _ogu.yomi || 'いそかぜ' == _ogu.yomi) && (_ogy.kaih += 2, _ogx = true), 405 == _ogu.ship_id || 246 == _ogu.ship_id || 144 == _ogu.ship_id || 145 == _ogu.ship_id || 497 == _ogu.ship_id ? (_oh0 >= 1 && (_ogw.houg += 1 * _oh0, _ogw.tyku += 1 * _oh0, _ogw.houm += 1 * _oh0, _ogw.kaih += 1 * _oh0), 2 == _oh0 ? _ogw.houg += 1 : _oh0 >= 3 && (_ogw.houg += 3), _oh3[8] >= 1 && (_ogw.tyku += 1 * _oh3[8]), _oh3[10] >= 1 && (_ogw.houg += 1 * _oh3[10])) : 323 == _ogu.ship_id || 498 == _ogu.ship_id || 961 == _ogu.ship_id ? (_oh0 >= 1 && (_ogw.houg += 2 * _oh0, _ogw.tyku += 2 * _oh0, _ogw.houm += 1 * _oh0, _ogw.kaih += 1 * _oh0), 2 == _oh0 ? _ogw.houg += 2 : _oh0 >= 3 && (_ogw.houg += 4), _oh3[6] >= 1 && (_ogw.tyku += 1 * _oh3[6]), _oh3[8] >= 1 && (_ogw.houm += 1 * _oh3[8]), _oh3[10] >= 1 && (_ogw.houg += 1 * _oh3[10])) : 975 == _ogu.ship_id && (_oh0 >= 1 && (_ogw.houg += 3 * _oh0, _ogw.tyku += 3 * _oh0, _ogw.houm += 2 * _oh0, _ogw.kaih += 2 * _oh0), 2 == _oh0 ? _ogw.houg += 3 : _oh0 >= 3 && (_ogw.houg += 6), _oh3[4] >= 1 && (_ogw.tyku += 1 * _oh3[4]), _oh3[6] >= 1 && (_ogw.houg += 1 * _oh3[6]), _oh3[8] >= 1 && (_ogw.houm += 1 * _oh3[8]), _oh3[10] >= 1 && (_ogw.houg += 1 * _oh3[10])), 961 == _ogu.ship_id && (_ogy.houg += 3, _ogy.houm += 3, _ogy.kaih += 2, _ogx = true), 566 != _ogu.ship_id && 567 != _ogu.ship_id && 568 != _ogu.ship_id && 656 != _ogu.ship_id && 670 != _ogu.ship_id && 915 != _ogu.ship_id && 651 != _ogu.ship_id && 145 != _ogu.ship_id && 961 != _ogu.ship_id && 951 != _ogu.ship_id || (_ogw.houg += 1, _ogw.houm += 2, _oh1 >= 2 && (_ogw.houg += 2), _oh4[5] >= 1 && (_ogw.houm += 1 * _oh4[5]), _oh4[8] >= 1 && (_ogw.houg += 1 * _oh4[8]), _oh4[10] >= 1 && (_ogw.houm += 1 * _oh4[10])), _ogx && _ogw.add(_ogy.multiply(_oh1));
            var _oh6 = _ogu.get_have_rader_nums(),
                _oh7 = _oh6.water_rader,
                _oh8 = _oh6.air_rader;
            return _oh7 >= 1 && (1 == _oh5 ? (_ogw.houg += 1, _ogw.raig += 3, _ogw.kaih += 1, _ogw.houm += 1) : 2 == _oh5 && (_ogw.houg += 2, _ogw.raig += 3, _ogw.kaih += 1, _ogw.houm += 3)), _oh8 >= 1 && (_oh0 >= 1 && (_ogw.tyku += 2, _ogw.kaih += 2), 2 == _oh0 ? _ogw.tyku += 2 : _oh0 >= 3 && (_ogw.tyku += 4)), _ogw;
        };
    },
    78173: (_oh9, _oha, _ohb) => {
        'use strict';
        var _ohc = null;
        defineModule(_oha);
        Object.defineProperty(_oha, '__esModule', {
            'value': true
        }), _oha.getSlot471PersonalEffect = void 0;
        var _ohd = _ohb(74496);
        _oha.getSlot471PersonalEffect = function(_ohe) {
            var _ohf = null,
                _ohg = new _ohd.SlotItemEffectModel(),
                _ohh = false,
                _ohi = new _ohd.SlotItemEffectModel(),
                _ohj = 0;
            if ('フランス' == _ohe.getCountryName() && (_ohi.houg += 2, _ohi.kaih += 2, _ohi.houm += 2, _ohh = true, _ohj = 1), 79 == _ohe.ctype && (_ohi.houg += 2, _ohi.houm += 1, _ohh = true), 0 == _ohh) return _ohg;
            var _ohk = _ohe.get_slotnums(471);
            if (_ohg.add(_ohi.multiply(_ohk)), 0 == _ohj) return _ohg;
            var _ohl = _ohe.get_each_level_nums(471),
                _ohm = 0,
                _ohn = 0;
            if (_ohj > 0 && _ohl.forEach(function(_oho, _ohp) {
                    _ohp >= 6 && (_ohm += _oho), _ohp >= 8 && (_ohn += _oho);
                }), 1 == _ohj) {
                _ohm >= 1 && (_ohg.kaih += 1 * _ohm, _ohg.houm += 1 * _ohm), _ohn >= 1 && (_ohg.houg += 1 * _ohn, _ohg.kaih += 1 * _ohn, _ohg.houm += 1 * _ohn);
                var _ohq = _ohl[10];
                _ohq >= 1 && (_ohg.houg += 1 * _ohq, _ohg.houm += 1 * _ohq);
            }
            return _ohg;
        };
    },
    22581: (_ohr, _ohs, _oht) => {
        'use strict';
        var _ohu = null;
        defineModule(_ohs);
        Object.defineProperty(_ohs, '__esModule', {
            'value': true
        }), _ohs.getSlot472PersonalEffect = void 0;
        var _ohv = _oht(74496);
        _ohs.getSlot472PersonalEffect = function(_ohw) {
            var _ohx = null,
                _ohy = new _ohv.SlotItemEffectModel(),
                _ohz = false,
                _oi0 = new _ohv.SlotItemEffectModel(),
                _oi1 = _ohw.getCountryName();
            if ('アメリカ' == _oi1 && (_oi0.tais += 2, _ohz = true), 'イギリス' == _oi1 && (_oi0.tais += 1, _ohz = true), 1 == _ohw.stype && (_oi0.kaih += 1, _ohz = true), _ohz) {
                var _oi2 = _ohw.get_slotnums(472);
                _ohy.add(_oi0.multiply(_oi2));
            }
            return 920 == _ohw.ship_id && (_ohy.tais += 1, _ohy.kaih += 1, _ohy.houm += 1), _ohy;
        };
    },
    13053: (_oi3, _oi4, _oi5) => {
        'use strict';
        var _oi6 = null;
        defineModule(_oi4);
        Object.defineProperty(_oi4, '__esModule', {
            'value': true
        }), _oi4.getSlot473PersonalEffect = void 0;
        var _oi7 = _oi5(74496);
        _oi4.getSlot473PersonalEffect = function(_oi8) {
            var _oi9 = null,
                _oia = new _oi7.SlotItemEffectModel(),
                _oib = false,
                _oic = new _oi7.SlotItemEffectModel(),
                _oid = _oi8.getCountryName();
            if ('アメリカ' == _oid && (_oic.houg += 1, _oic.kaih += 1, _oic.tyku += 1, _oib = true), 'イギリス' == _oid && (_oic.houg += 1, _oic.kaih += 1, _oib = true), 0 == _oib) return _oia;
            var _oie = _oi8.get_slotnums(473);
            return _oia.add(_oic.multiply(_oie)), _oia;
        };
    },
    47874: (_oif, _oig, _oih) => {
        'use strict';
        var _oii = null;
        defineModule(_oig);
        Object.defineProperty(_oig, '__esModule', {
            'value': true
        }), _oig.getSlot474PersonalEffect = void 0;
        var _oij = _oih(74496);
        _oig.getSlot474PersonalEffect = function(_oik) {
            var _oil = null,
                _oim = new _oij.SlotItemEffectModel(),
                _oin = false,
                _oio = new _oij.SlotItemEffectModel(),
                _oip = _oik.getCountryName();
            if ('アメリカ' == _oip && (_oio.houg += 2, _oio.kaih += 1, _oio.tyku += 1, _oin = true), 'イギリス' == _oip && (_oio.houg += 1, _oio.kaih += 1, _oio.tyku += 1, _oin = true), 'フランス' == _oip && (_oio.houg += 1, _oio.tyku += 1, _oin = true), 707 != _oik.ship_id && 930 != _oik.ship_id || (_oio.houg += 1, _oio.kaih += 1, _oin = true), 0 == _oin) return _oim;
            var _oiq = _oik.get_slotnums(474);
            return _oim.add(_oio.multiply(_oiq)), _oim;
        };
    },
    42788: (_oir, _ois, _oit) => {
        'use strict';
        var _oiu = null;
        defineModule(_ois);
        Object.defineProperty(_ois, '__esModule', {
            'value': true
        }), _ois.getSlot478PersonalEffect = void 0;
        var _oiv = _oit(74496);
        _ois.getSlot478PersonalEffect = function(_oiw) {
            var _oix = null,
                _oiy = new _oiv.SlotItemEffectModel(),
                _oiz = _oiw.get_each_level_nums(478),
                _oj0 = [];
            return _oiz.forEach(function(_oj1, _oj2) {
                var _oj3 = null;
                for (var _oj4 = 1; _oj4 <= _oiw.SLOT_LEVEL_MAX; _oj4++) _oj2 >= _oj4 && (null == _oj0[_oj4] && (_oj0[_oj4] = 0), _oj0[_oj4] += _oj1);
            }), _oj0.every(function(_oj5) {
                return 0 == _oj5;
            }) || (_oj0[1] >= 1 && (_oiy.houg += 1), _oj0[2] >= 1 && (_oiy.houm += 1), _oj0[3] >= 1 && (_oiy.kaih += 1), _oj0[4] >= 1 && (_oiy.baku += 1), _oj0[5] >= 1 && (_oiy.raig += 1), _oj0[6] >= 1 && (_oiy.tyku += 1), _oj0[7] >= 1 && (_oiy.houg += 1), _oj0[8] >= 1 && (_oiy.houm += 1), _oj0[9] >= 1 && (_oiy.kaih += 1), _oj0[10] >= 1 && (_oiy.houg += 1)), _oiy;
        };
    },
    22218: (_oj6, _oj7, _oj8) => {
        'use strict';
        var _oj9 = null;
        defineModule(_oj7);
        Object.defineProperty(_oj7, '__esModule', {
            'value': true
        }), _oj7.getSlot47PersonalEffect = void 0;
        var _oja = _oj8(74496);
        _oj7.getSlot47PersonalEffect = function(_ojb) {
            var _ojc = null,
                _ojd = new _oja.SlotItemEffectModel(),
                _oje = new _oja.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_ojb.yomi) >= 0 ? (_oje.tais += 3, _oje.kaih += 2, _oje.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_ojb.yomi) >= 0 && (_oje.tais += 2, _oje.kaih += 2), !_oje.exists()) return _ojd;
            var _ojf = _ojb.get_slotnums(47) + _ojb.get_slotnums(438);
            return _ojd = _oje.multiply(_ojf);
        };
    },
    57664: (_ojg, _ojh, _oji) => {
        'use strict';
        var _ojj = null;
        defineModule(_ojh);
        Object.defineProperty(_ojh, '__esModule', {
            'value': true
        }), _ojh.getSlot483PersonalEffect = void 0;
        var _ojk = _oji(74496);
        _ojh.getSlot483PersonalEffect = function(_ojl) {
            var _ojm = null,
                _ojn = new _ojk.SlotItemEffectModel(),
                _ojo = 0,
                _ojp = 0,
                _ojq = 0,
                _ojr = 0,
                _ojs = 0,
                _ojt = 0,
                _oju = 0;
            if (6 == _ojl.ctype ? (_ojn.houg += 2, _ojn.tyku += 3, _ojn.houm += 1, _ojo = 1) : 2 == _ojl.ctype ? (_ojn.houg += 1, _ojn.tyku += 2, _ojn.kaih += 2, _ojn.houm += 1, _ojp = 1) : 37 == _ojl.ctype && (_ojq = 1), 8 == _ojl.stype || 9 == _ojl.stype || 10 == _ojl.stype ? _ojr = 1 : 5 != _ojl.stype && 6 != _ojl.stype || (_ojs = 1), 149 == _ojl.ship_id ? (_ojn.houg += 2, _ojn.tyku += 2) : 591 == _ojl.ship_id ? (_ojn.houg += 3, _ojn.tyku += 3, _ojn.kaih += 1) : 150 == _ojl.ship_id ? (_ojn.houg += 1, _ojn.tyku += 1) : 592 == _ojl.ship_id ? (_ojn.houg += 2, _ojn.tyku += 2, _ojn.kaih += 2) : 151 == _ojl.ship_id ? (_ojn.houg += 1, _ojn.tyku += 2, _ojn.kaih += 2) : 593 == _ojl.ship_id ? (_ojn.houg += 2, _ojn.tyku += 5, _ojn.kaih += 3) : 954 == _ojl.ship_id ? (_ojn.houg += 2, _ojn.tyku += 4, _ojn.kaih += 2) : 152 == _ojl.ship_id ? (_ojn.houg += 2, _ojn.tyku += 2) : 911 == _ojl.ship_id || 916 == _ojl.ship_id || 546 == _ojl.ship_id ? (_ojn.houg += 2, _ojn.tyku += 2, _ojn.kaih += 2, _ojt = 1) : 553 == _ojl.ship_id || 554 == _ojl.ship_id ? (_ojn.houg += 1, _ojn.tyku += 2, _ojn.kaih += 1, _oju = 1) : 541 == _ojl.ship_id || 411 == _ojl.ship_id || 412 == _ojl.ship_id ? (_ojn.houg += 1, _ojn.tyku += 2) : 573 == _ojl.ship_id && (_ojn.houg += 2, _ojn.tyku += 2, _ojn.kaih += 1), 0 == [_ojo, _ojp, _ojq, _ojr, _ojs, _ojt, _oju].reduce(function(_ojv, _ojw) {
                    return _ojv + _ojw;
                }, 0)) return _ojn;
            var _ojx = _ojl.get_each_level_nums(483),
                _ojy = 0,
                _ojz = [];
            return _ojx.forEach(function(_ok0, _ok1) {
                var _ok2 = null;
                _ok1 >= 6 && (_ojy += _ok0);
                for (var _ok3 = 1; _ok3 <= _ojl.SLOT_LEVEL_MAX; _ok3++) null == _ojz[_ok3] && (_ojz[_ok3] = 0), _ok1 >= _ok3 && (_ojz[_ok3] += _ok0);
            }), 1 == _ojo ? (_ojy >= 1 && (_ojn.houm += 1), _ojx[10] >= 1 && (_ojn.houm += 1)) : 1 == _ojp ? (_ojz[5] >= 1 && (_ojn.kaih += 1), _ojz[6] >= 1 && (_ojn.houm += 1), _ojz[10] >= 1 && (_ojn.kaih += 1)) : 1 == _ojq && (_ojz[6] >= 1 && (_ojn.houm += 1), _ojz[10] >= 1 && (_ojn.kaih += 1)), 1 == _ojr ? (_ojz[2] >= 1 && (_ojn.tyku += 1), _ojz[4] >= 1 && (_ojn.houg += 1), _ojz[7] >= 1 && (_ojn.kaih += 1), _ojz[8] >= 1 && (_ojn.tyku += 1), _ojz[9] >= 1 && (_ojn.houg += 1)) : 1 == _ojs && (_ojz[2] >= 1 && (_ojn.tyku += 1), _ojz[4] >= 1 && (_ojn.houg += 1), _ojz[6] >= 1 && (_ojn.kaih += 1), _ojz[8] >= 1 && (_ojn.houm += 1), _ojz[10] >= 1 && (_ojn.houg += 1)), 1 == _ojt ? _ojz[5] >= 1 && (_ojn.houm += 1) : 1 == _oju && (_ojz[1] >= 1 && (_ojn.houm += 1), _ojz[3] >= 1 && (_ojn.houm += 1)), _ojn;
        };
    },
    44990: (_ok4, _ok5, _ok6) => {
        'use strict';
        var _ok7 = null;
        defineModule(_ok5);
        Object.defineProperty(_ok5, '__esModule', {
            'value': true
        }), _ok5.getSlot485PersonalEffect = void 0;
        var _ok8 = _ok6(74496);
        _ok5.getSlot485PersonalEffect = function(_ok9) {
            var _oka = null,
                _okb = new _ok8.SlotItemEffectModel(),
                _okc = false,
                _okd = new _ok8.SlotItemEffectModel();
            if (9 == _ok9.ctype && (_okd.houg += 1, _okd.kaih += 2, _okd.tyku += 3, _okc = true), 501 == _ok9.ship_id || 506 == _ok9.ship_id ? (_okd.kaih += 1, _okd.tyku += 2, _okd.houm += 1, _okc = true) : 502 != _ok9.ship_id && 507 != _ok9.ship_id || (_okd.kaih += 1, _okd.tyku += 1, _okd.houm += 1, _okc = true), _okc) {
                var _oke = _ok9.get_slotnums(485);
                _okb.add(_okd.multiply(_oke));
            }
            var _okf = _ok9.get_each_level_nums(485),
                _okg = 0,
                _okh = 0,
                _oki = 0,
                _okj = _okf[10];
            return _okf.forEach(function(_okk, _okl) {
                _okl >= 3 && (_okg += _okk), _okl >= 5 && (_okh += _okk), _okl >= 7 && (_oki += _okk);
            }), _okg > 0 && (_okb.houg += 1 * _okg), _okh > 0 && (_okb.tyku += 1 * _okh), _oki > 0 && (_okb.kaih += 1 * _oki), _okj > 0 && (_okb.houm += 1 * _okj), _okb;
        };
    },
    83957: (_okm, _okn, _oko) => {
        'use strict';
        var _okp = null;
        defineModule(_okn);
        Object.defineProperty(_okn, '__esModule', {
            'value': true
        }), _okn.getSlot486PersonalEffect = void 0;
        var _okq = _oko(74496);
        _okn.getSlot486PersonalEffect = function(_okr) {
            var _oks = null,
                _okt = new _okq.SlotItemEffectModel(),
                _oku = false,
                _okv = new _okq.SlotItemEffectModel();
            if (894 == _okr.ship_id || 899 == _okr.ship_id ? (_okv.houg += 4, _okv.tyku += 4, _okv.kaih += 3, _okv.houm += 2, _oku = true) : 888 != _okr.ship_id && 883 != _okr.ship_id || (_okv.houg += 2, _okv.tyku += 2, _okv.kaih += 2, _okv.houm += 1, _oku = true), _oku) {
                var _okw = _okr.get_slotnums(486);
                _okt.add(_okv.multiply(_okw));
            }
            var _okx = _okr.get_each_level_nums(486),
                _oky = 0,
                _okz = 0,
                _ol0 = _okx[10];
            return _okx.forEach(function(_ol1, _ol2) {
                _ol2 >= 6 && (_oky += _ol1), _ol2 >= 8 && (_okz += _ol1);
            }), _oky > 0 && (_okt.kaih += 1 * _oky, _okt.houm += 1 * _oky), _okz > 0 && (_okt.tyku += 1 * _okz, _okt.kaih += 1 * _okz), _ol0 > 0 && (_okt.houg += 1 * _ol0, _okt.houm += 1 * _ol0), _okt;
        };
    },
    78539: (_ol3, _ol4, _ol5) => {
        'use strict';
        var _ol6 = null;
        defineModule(_ol4);
        Object.defineProperty(_ol4, '__esModule', {
            'value': true
        }), _ol4.getSlot487PersonalEffect = void 0;
        var _ol7 = _ol5(74496);
        _ol4.getSlot487PersonalEffect = function(_ol8) {
            var _ol9 = null,
                _ola = new _ol7.SlotItemEffectModel(),
                _olb = false,
                _olc = new _ol7.SlotItemEffectModel();
            if (894 == _ol8.ship_id || 899 == _ol8.ship_id ? (_olc.houg += 5, _olc.tyku += 3, _olc.kaih += 2, _olc.houm += 4, _olb = true) : 888 != _ol8.ship_id && 883 != _ol8.ship_id || (_olc.houg += 3, _olc.tyku += 1, _olc.kaih += 1, _olc.houm += 2, _olb = true), _olb) {
                var _old = _ol8.get_slotnums(487);
                _ola.add(_olc.multiply(_old));
            }
            var _ole = _ol8.get_each_level_nums(487),
                _olf = 0,
                _olg = 0,
                _olh = _ole[10];
            return _ole.forEach(function(_oli, _olj) {
                _olj >= 6 && (_olf += _oli), _olj >= 8 && (_olg += _oli);
            }), _olf > 0 && (_ola.houg += 1 * _olf, _ola.kaih += 1 * _olf), _olg > 0 && (_ola.tyku += 1 * _olg, _ola.houm += 1 * _olg), _olh > 0 && (_ola.houg += 1 * _olh, _ola.houm += 1 * _olh), _ola;
        };
    },
    96282: (_olk, _oll, _olm) => {
        'use strict';
        var _oln = null;
        defineModule(_oll);
        Object.defineProperty(_oll, '__esModule', {
            'value': true
        }), _oll.getSlot488PersonalEffect = void 0;
        var _olo = _olm(74496);
        _oll.getSlot488PersonalEffect = function(_olp) {
            var _olq = null,
                _olr = new _olo.SlotItemEffectModel(),
                _ols = false,
                _olt = new _olo.SlotItemEffectModel(),
                _olu = 0,
                _olv = _olp.getCountryName(),
                _olw = {
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
                }[_olp.ship_id];
            if (('日本' == _olv && 2 == _olp.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_olp.ctype] && 1 == _olp.stype) && (_olt.tais += 1, _olt.kaih += 1, _ols = true), 1 == _olw ? (_olt.tais += 5, _olt.kaih += 4, _olt.houm += 2, _ols = true, _olu = 1) : 2 == _olw ? (_olt.tais += 2, _olt.kaih += 1, _olt.houm += 1, _ols = true, _olu = 2) : 3 == _olw && (_olt.tais += 1, _ols = true, _olu = 2), 0 == _ols) return _olr;
            var _olx = _olp.get_slotnums(488);
            if (_olr.add(_olt.multiply(_olx)), 0 == _olu) return _olr;
            var _oly = _olp.get_each_level_nums(488),
                _olz = [];
            return _oly.forEach(function(_om0, _om1) {
                var _om2 = null;
                for (var _om3 = 1; _om3 <= _olp.SLOT_LEVEL_MAX; _om3++) _om1 >= _om3 && (null == _olz[_om3] && (_olz[_om3] = 0), _olz[_om3] += _om0);
            }), 1 == _olu ? (_olz[3] >= 1 && (_olr.kaih += 1 * _olz[3]), _olz[5] >= 1 && (_olr.tais += 1 * _olz[5]), _olz[7] >= 1 && (_olr.houm += 1 * _olz[7]), _olz[8] >= 1 && (_olr.kaih += 1 * _olz[8]), _olz[9] >= 1 && (_olr.tais += 1 * _olz[9]), _olz[10] >= 1 && (_olr.tais += 1 * _olz[10])) : 2 == _olu && (_olz[5] >= 1 && (_olr.tais += 1 * _olz[5]), _olz[7] >= 1 && (_olr.kaih += 1 * _olz[7]), _olz[9] >= 1 && (_olr.houm += 1 * _olz[9]), _olz[10] >= 1 && (_olr.tais += 1 * _olz[10])), _olr;
        };
    },
    49679: (_om4, _om5, _om6) => {
        'use strict';
        var _om7 = null;
        defineModule(_om5);
        Object.defineProperty(_om5, '__esModule', {
            'value': true
        }), _om5.getSlot489PersonalEffect = void 0;
        var _om8 = _om6(74496);
        _om5.getSlot489PersonalEffect = function(_om9) {
            var _oma = null,
                _omb = new _om8.SlotItemEffectModel(),
                _omc = false,
                _omd = new _om8.SlotItemEffectModel();
            if ('あきつまる' != _om9.yomi && 'やましおまる' != _om9.yomi && 'くまのまる' != _om9.yomi || (_omd.tyku = _omd.tyku + 2, _omd.kaih = _omd.kaih + 1, _omd.houg = _omd.houg + 1, _omd.tais = _omd.tais + 1, _omd.houm = _omd.houm + 1, _omc = true), 717 != _om9.ship_id && 948 != _om9.ship_id || (_omd.tyku = _omd.tyku + 2, _omd.kaih = _omd.kaih + 2, _omd.houg = _omd.houg + 2, _omd.tais = _omd.tais + 1, _omd.houm = _omd.houm + 1, _omc = true), _omc) {
                var _ome = _om9.get_slotnums(489) + _om9.get_slotnums(491);
                _omb.add(_omd.multiply(_ome));
            }
            var _omf = _om9.get_each_level_nums(489),
                _omg = _om9.get_each_level_nums(491),
                _omh = 0,
                _omi = 0,
                _omj = 0;
            _omf.forEach(function(_omk, _oml) {
                _oml >= 3 && (_omh += _omk), _oml >= 6 && (_omi += _omk), _oml >= 8 && (_omj += _omk);
            }), _omg.forEach(function(_omm, _omn) {
                _omn >= 3 && (_omh += _omm), _omn >= 6 && (_omi += _omm), _omn >= 8 && (_omj += _omm);
            });
            var _omo = _omf[10] + _omg[10];
            return _omh >= 1 && (_omb.kaih = _omb.kaih + 1 * _omh), _omi >= 1 && (_omb.tais = _omb.tais + 1 * _omi), _omj >= 1 && (_omb.houm = _omb.houm + 1 * _omj), _omo >= 1 && (_omb.houg = _omb.houg + 1 * _omo), _omb;
        };
    },
    90312: function(_omp, _omq, _omr) {
        'use strict';
        var _oms = null;
        var _omt = this && this.__importDefault || function(_omu) {
            var _omv = null;
            return _omu && _omu.__esModule ? _omu : {
                'default': _omu
            };
        };
        defineModule(_omq);
        Object.defineProperty(_omq, '__esModule', {
            'value': true
        }), _omq.getSlot502PersonalEffect = void 0;
        var _omw = _omr(74496),
            _omx = _omt(_omr(18622));
        _omq.getSlot502PersonalEffect = function(_omy) {
            var _omz = null,
                _on0 = new _omw.SlotItemEffectModel(),
                _on1 = _omy.get_slotnums(502),
                _on2 = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _on3 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _on4 = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _on5 = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _on6 = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_on2[_omy.ship_id]) {
                var _on7 = _on2[_omy.ship_id];
                _on0.houg += _on1 * _on7;
            }
            if (_on3[_omy.ship_id]) {
                var _on8 = _on3[_omy.ship_id];
                _on0.tyku += _on1 * _on8;
            }
            if (_on4[_omy.ship_id]) {
                var _on9 = _on4[_omy.ship_id],
                    _ona = _omy.get_each_level_nums(502),
                    _onb = [];
                _ona.forEach(function(_onc, _ond) {
                    var _one = null;
                    for (var _onf = 1; _onf <= _omy.SLOT_LEVEL_MAX; _onf++) _ond >= _onf && (null == _onb[_onf] && (_onb[_onf] = 0), _onb[_onf] += _onc);
                }), 1 == _on9 ? (_on0.kaih += 3 * _on1, _onb[1] > 0 && (_on0.kaih += 1 * _onb[1]), _onb[3] > 0 && (_on0.tyku += 1 * _onb[3]), _onb[5] > 0 && (_on0.houg += 1 * _onb[5]), _onb[7] > 0 && (_on0.kaih += 1 * _onb[7]), _onb[8] > 0 && (_on0.tyku += 1 * _onb[8]), _onb[9] > 0 && (_on0.houg += 1 * _onb[9]), _onb[10] > 0 && (_on0.tyku += 1 * _onb[10])) : 2 == _on9 ? (_on0.kaih += 1 * _on1, _onb[2] > 0 && 151 == _omy.ship_id && (_on0.kaih += 1 * _onb[2]), _onb[4] > 0 && (_on0.tyku += 1 * _onb[4]), _onb[6] > 0 && (_on0.houg += 1 * _onb[6]), _onb[8] > 0 && (_on0.kaih += 1 * _onb[8]), _onb[10] > 0 && (_on0.tyku += 1 * _onb[10])) : 3 == _on9 && (_onb[5] > 0 && (_on0.kaih += 1 * _onb[5]), _onb[8] > 0 && (_on0.houg += 1 * _onb[8]), _onb[10] > 0 && (_on0.tyku += 1 * _onb[10]));
            }
            if (_on5[_omy.ship_id]) {
                for (var _ong = 0, _onh = 0, _oni = _omy.have_slot_ids(); _onh < _oni.length; _onh++) {
                    var _onj = _oni[_onh],
                        _onk = _omx.default.model.slot.getMst(_onj),
                        _onl = _onk.equipType;
                    12 != _onl && 13 != _onl || (_onk.sakuteki >= 5 && (_ong += _omy.get_slotnums(parseInt(_onj))), _onk.taiku >= 2 && _omy.get_slotnums(parseInt(_onj)));
                }
                0;
                var _onm = _on5[_omy.ship_id];
                1 == _onm && _ong >= 1 ? (_on0.houg += 3, _on0.kaih += 4) : 2 == _onm && _ong >= 1 && (_on0.houg += 2, _on0.kaih += 2);
            }
            if (_on6[_omy.ship_id]) {
                var _onn = _on6[_omy.ship_id],
                    _ono = [],
                    _onp = [],
                    _onq = _omy.have_slot_ids();
                [410, 411].forEach(function(_onr) {
                    var _ons = null;
                    _onq.indexOf(_onr.toString()) > -1 && (_onp[_onr] = _omy.get_each_level_nums(_onr), null == _ono[_onr] && (_ono[_onr] = []), _onp[_onr].forEach(function(_ont, _onu) {
                        var _onv = null;
                        for (var _onw = 1; _onw <= _omy.SLOT_LEVEL_MAX; _onw++) null == _ono[_onr][_onw] && (_ono[_onr][_onw] = 0), _onu >= _onw && (_ono[_onr][_onw] += _ont);
                    }));
                });
                var _onx = _onp[410],
                    _ony = _onp[411];
                if (1 == _onn) {
                    if (_onx) {
                        _on0.tyku += 1;
                        var _onz = _ono[410];
                        _onz[7] >= 1 && (_on0.houg += 1), _onz[10] >= 1 && (_on0.kaih += 1);
                    }
                    if (_ony) {
                        _on0.tyku += 2;
                        var _oo0 = _ono[411];
                        _oo0[2] >= 1 && (_on0.houg += 1), _oo0[4] >= 1 && (_on0.kaih += 1), _oo0[6] >= 1 && (_on0.houm += 1), _oo0[8] >= 1 && (_on0.tyku += 1), _oo0[10] >= 1 && (_on0.houg += 1);
                    }
                }
            }
            return _on0;
        };
    },
    86856: function(_oo1, _oo2, _oo3) {
        'use strict';
        var _oo4 = null;
        var _oo5 = this && this.__importDefault || function(_oo6) {
            var _oo7 = null;
            return _oo6 && _oo6.__esModule ? _oo6 : {
                'default': _oo6
            };
        };
        defineModule(_oo2);
        Object.defineProperty(_oo2, '__esModule', {
            'value': true
        }), _oo2.getSlot503PersonalEffect = void 0;
        var _oo8 = _oo3(74496),
            _oo9 = _oo5(_oo3(18622));
        _oo2.getSlot503PersonalEffect = function(_ooa) {
            var _oob = null,
                _ooc = new _oo8.SlotItemEffectModel(),
                _ood = _ooa.get_slotnums(503),
                _ooe = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _oof = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _oog = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _ooh = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _ooi = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _ooj = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_ooe[_ooa.ship_id]) {
                var _ook = _ooe[_ooa.ship_id];
                _ooc.houg += _ood * _ook;
            }
            if (_oof[_ooa.ship_id]) {
                var _ool = _oof[_ooa.ship_id];
                _ooc.tyku += _ood * _ool;
            }
            if (_oog[_ooa.ship_id]) {
                var _oom = _oog[_ooa.ship_id],
                    _oon = _ooa.get_each_level_nums(503),
                    _ooo = [];
                _oon.forEach(function(_oop, _ooq) {
                    var _oor = null;
                    for (var _oos = 1; _oos <= _ooa.SLOT_LEVEL_MAX; _oos++) _ooq >= _oos && (null == _ooo[_oos] && (_ooo[_oos] = 0), _ooo[_oos] += _oop);
                }), 1 == _oom ? (_ooc.houm += 2 * _ood, _ooo[1] > 0 && (_ooc.houg += 1 * _ooo[1]), _ooo[2] > 0 && (_ooc.tyku += 1 * _ooo[2]), _ooo[4] > 0 && (_ooc.houm += 1 * _ooo[4]), _ooo[6] > 0 && (_ooc.houg += 1 * _ooo[6]), _ooo[8] > 0 && (_ooc.tyku += 1 * _ooo[8]), _ooo[10] > 0 && (_ooc.houm += 1 * _ooo[10])) : 2 == _oom ? (_ooc.houm += 1 * _ood, _ooo[2] > 0 && (_ooc.houg += 1 * _ooo[2]), _ooo[4] > 0 && (_ooc.tyku += 1 * _ooo[4]), _ooo[6] > 0 && (_ooc.houm += 1 * _ooo[6]), _ooo[8] > 0 && (_ooc.houg += 1 * _ooo[8]), _ooo[10] > 0 && (_ooc.houm += 1 * _ooo[10])) : 3 == _oom && (_ooo[4] > 0 && (_ooc.houm += 1 * _ooo[4]), _ooo[7] > 0 && (_ooc.houg += 1 * _ooo[7]), _ooo[10] > 0 && (_ooc.tyku += 1 * _ooo[10]));
            }
            var _oot = 0;
            _ooh[_ooa.ship_id] && (_oot = _ooh[_ooa.ship_id]);
            var _oou = 0;
            _ooj[_ooa.ship_id] && (_oou = _ooj[_ooa.ship_id]);
            var _oov = 0,
                _oow = 0,
                _oox = _ooa.have_slot_ids();
            if (_oot + _oou > 0)
                for (var _ooy = 0, _ooz = _oox; _ooy < _ooz.length; _ooy++) {
                    var _op0 = _ooz[_ooy],
                        _op1 = _oo9.default.model.slot.getMst(_op0),
                        _op2 = _op1.equipType;
                    12 != _op2 && 13 != _op2 || (_op1.sakuteki >= 5 && (_oov += _ooa.get_slotnums(parseInt(_op0))), _op1.taiku >= 2 && _ooa.get_slotnums(parseInt(_op0)), _op1.meichu >= 8 && (_oow += _ooa.get_slotnums(parseInt(_op0))));
                }
            1 == _oot ? _oov >= 1 && (_ooc.houg += 3, _ooc.houm += 3, _ooc.kaih += 2) : 2 == _oot && _oov >= 1 && (_ooc.houg += 2, _ooc.houm += 2, _ooc.kaih += 1);
            var _op3 = 0,
                _op4 = [],
                _op5 = [];
            if (_ooi[_ooa.ship_id]) {
                _op3 = _ooi[_ooa.ship_id];
                var _op6 = _ooa.have_slot_ids();
                [174].forEach(function(_op7) {
                    var _op8 = null;
                    _op6.indexOf(_op7.toString()) > -1 && (_op5[_op7] = _ooa.get_each_level_nums(_op7), null == _op4[_op7] && (_op4[_op7] = []), _op5[_op7].forEach(function(_op9, _opa) {
                        var _opb = null;
                        for (var _opc = 1; _opc <= _ooa.SLOT_LEVEL_MAX; _opc++) null == _op4[_op7][_opc] && (_op4[_op7][_opc] = 0), _opa >= _opc && (_op4[_op7][_opc] += _op9);
                    }));
                });
            }
            if (_op3 > 0) {
                var _opd = _op5[174];
                if (1 == _op3 && _opd) {
                    var _ope = _op4[174];
                    _ooc.raig += 4, _ope[6] >= 1 && (_ooc.raig += 1), _ope[8] >= 1 && (_ooc.houm += 1), _ope[10] >= 1 && (_ooc.houg += 1);
                }
            }
            return _oow > 0 && (_oou >= 1 && _oou <= 3 && (_ooc.houg += 2, _ooc.houm += 2, _ooc.kaih += 2), 1 == _oou ? _ooc.houg += 1 : 3 == _oou && (_ooc.houg += 2)), _ooc;
        };
    },
    78123: function(_opf, _opg, _oph) {
        'use strict';
        var _opi = null;
        var _opj = this && this.__importDefault || function(_opk) {
            var _opl = null;
            return _opk && _opk.__esModule ? _opk : {
                'default': _opk
            };
        };
        defineModule(_opg);
        Object.defineProperty(_opg, '__esModule', {
            'value': true
        }), _opg.getSlot505PersonalEffect = void 0;
        var _opm = _oph(74496),
            _opn = _opj(_oph(18622));
        _opg.getSlot505PersonalEffect = function(_opo) {
            var _opp = null,
                _opq = new _opm.SlotItemEffectModel(),
                _opr = false,
                _ops = new _opm.SlotItemEffectModel();
            if (2 == _opo.stype ? (_ops.houg += 1, _ops.tyku += 2, _ops.kaih += 2, _opr = true) : 1 == _opo.stype ? (_ops.houg += 1, _ops.tyku += 1, _ops.kaih += 1, _opr = true) : 3 == _opo.stype || 21 == _opo.stype || 4 == _opo.stype ? (_ops.tyku += 1, _ops.kaih += 2, _opr = true) : 5 != _opo.stype && 6 != _opo.stype && 16 != _opo.stype || (_ops.tyku += 1, _ops.kaih += 1, _opr = true), _opr) {
                var _opt = _opo.get_slotnums(505);
                _opq.add(_ops.multiply(_opt));
            }
            var _opu = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    668: 2,
                    951: 2,
                    975: 2,
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
                _opv = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2
                },
                _opw = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _opu[_opo.ship_id] ? (_opq.houg += 2, _opq.tyku += 3, _opq.kaih += 4) : 2 == _opu[_opo.ship_id] ? (_opq.houg += 1, _opq.tyku += 2, _opq.kaih += 3) : 3 == _opu[_opo.ship_id] ? (_opq.tyku += 2, _opq.kaih += 2) : 4 == _opu[_opo.ship_id] ? (_opq.tyku += 1, _opq.kaih += 2) : 5 == _opu[_opo.ship_id] && (_opq.houg += 1, _opq.tyku += 1, _opq.kaih += 1);
            var _opx = 0;
            if (_opv[_opo.ship_id] && _opx++, _opw[_opo.ship_id] && _opx++, 0 == _opx) return _opq;
            for (var _opy = 0, _opz = 0, _oq0 = 0, _oq1 = _opo.have_slot_ids(); _oq0 < _oq1.length; _oq0++) {
                var _oq2 = _oq1[_oq0],
                    _oq3 = _opn.default.model.slot.getMst(_oq2),
                    _oq4 = _oq3.equipType;
                12 != _oq4 && 13 != _oq4 || (_oq3.sakuteki >= 5 && (_opy += _opo.get_slotnums(parseInt(_oq2))), _oq3.taiku >= 2 && (_opz += _opo.get_slotnums(parseInt(_oq2))));
            }
            var _oq5 = _opv[_opo.ship_id];
            _opz > 0 && _oq5 > 0 && (1 == _oq5 ? (_opq.houg += 1, _opq.tyku += 2, _opq.kaih += 3) : 2 == _oq5 && (_opq.tyku += 2, _opq.kaih += 2));
            var _oq6 = _opw[_opo.ship_id];
            return _opy > 0 && _oq6 > 0 && 1 == _oq6 && (_opq.houg += 1, _opq.kaih += 1), _opq;
        };
    },
    25765: (_oq7, _oq8, _oq9) => {
        'use strict';
        var _oqa = null;
        defineModule(_oq8);
        Object.defineProperty(_oq8, '__esModule', {
            'value': true
        }), _oq8.getSlot506PersonalEffect = void 0;
        var _oqb = _oq9(74496);
        _oq8.getSlot506PersonalEffect = function(_oqc) {
            var _oqd = null,
                _oqe = new _oqb.SlotItemEffectModel();
            return 961 == _oqc.ship_id ? (_oqe.houg += 2, _oqe.houm += 3, _oqe.tyku += 2, _oqe.kaih += 4) : 145 == _oqc.ship_id || 497 == _oqc.ship_id || 656 == _oqc.ship_id || 557 == _oqc.ship_id || 558 == _oqc.ship_id || 951 == _oqc.ship_id || 975 == _oqc.ship_id ? (_oqe.houg += 1, _oqe.houm += 2, _oqe.tyku += 1, _oqe.kaih += 3) : 578 != _oqc.ship_id && 419 != _oqc.ship_id && 464 != _oqc.ship_id && 470 != _oqc.ship_id && 407 != _oqc.ship_id && 235 != _oqc.ship_id && 147 != _oqc.ship_id && 538 != _oqc.ship_id && 537 != _oqc.ship_id && 955 != _oqc.ship_id && 960 != _oqc.ship_id || (_oqe.houg += 1, _oqe.houm += 1, _oqe.tyku += 1, _oqe.kaih += 2), _oqe;
        };
    },
    88271: function(_oqf, _oqg, _oqh) {
        'use strict';
        var _oqi = null;
        var _oqj = this && this.__importDefault || function(_oqk) {
            var _oql = null;
            return _oqk && _oqk.__esModule ? _oqk : {
                'default': _oqk
            };
        };
        defineModule(_oqg);
        Object.defineProperty(_oqg, '__esModule', {
            'value': true
        }), _oqg.getSlot50PersonalEffect = void 0;
        var _oqm = _oqh(74496),
            _oqn = _oqj(_oqh(18622));
        _oqg.getSlot50PersonalEffect = function(_oqo) {
            var _oqp = null,
                _oqq = new _oqm.SlotItemEffectModel(),
                _oqr = false,
                _oqs = new _oqm.SlotItemEffectModel();
            7 != _oqo.ctype && 13 != _oqo.ctype && 8 != _oqo.ctype && 29 != _oqo.ctype && 9 != _oqo.ctype && 31 != _oqo.ctype || (_oqs.houg += 1, _oqr = true), 8 != _oqo.ctype && 29 != _oqo.ctype && 9 != _oqo.ctype && 31 != _oqo.ctype || (_oqs.houg += 1, _oqs.kaih += 1, _oqr = true);
            var _oqt = _oqo.get_slotnums(50);
            9 != _oqo.ctype && 31 != _oqo.ctype || _oqt >= 2 && (_oqs.houg += 1, _oqr = true);
            var _oqu = 0;
            if (501 != _oqo.ship_id && 506 != _oqo.ship_id && 502 != _oqo.ship_id && 507 != _oqo.ship_id || (_oqs.houg += 1, _oqr = true, _oqu = 1), 0 == _oqr) return _oqq;
            _oqq = _oqs.multiply(_oqt);
            for (var _oqv = 0, _oqw = 0, _oqx = _oqo.have_slot_ids(); _oqw < _oqx.length; _oqw++) {
                var _oqy = _oqx[_oqw],
                    _oqz = _oqn.default.model.slot.getMst(_oqy),
                    _or0 = _oqz.equipType;
                12 != _or0 && 13 != _or0 || _oqz.sakuteki >= 5 && (_oqv += _oqo.get_slotnums(parseInt(_oqy)));
            }
            if (_oqv > 0) {
                if (7 == _oqo.ctype || 13 == _oqo.ctype) 0 == _oqo.get_slotnums(90) && (_oqq.houg += 1, _oqq.kaih += 1, _oqq.raig += 1);
                else 8 != _oqo.ctype && 29 != _oqo.ctype && 9 != _oqo.ctype && 31 != _oqo.ctype || (_oqq.houg += 3, _oqq.kaih += 2, _oqq.raig += 2);
                501 != _oqo.ship_id && 506 != _oqo.ship_id || (_oqq.houg += 1, _oqq.kaih += 1);
            }
            var _or1 = _oqo.get_slotnums(30),
                _or2 = _oqo.get_slotnums(410);
            return 1 == _oqu && (_or1 + _or2 > 0 && (_oqq.houg += 1, _oqq.tyku += 3, _oqq.kaih += 2), _or2 > 0 && (_oqq.houg += 2)), _oqq;
        };
    },
    28221: (_or3, _or4, _or5) => {
        'use strict';
        var _or6 = null;
        defineModule(_or4);
        Object.defineProperty(_or4, '__esModule', {
            'value': true
        }), _or4.getSlot510PersonalEffect = void 0;
        var _or7 = _or5(74496);
        _or4.getSlot510PersonalEffect = function(_or8) {
            var _or9 = null,
                _ora = new _or7.SlotItemEffectModel(),
                _orb = false,
                _orc = new _or7.SlotItemEffectModel();
            if ('イギリス' == _or8.getCountryName() && (_orc.houg += 2, _orc.tais += 3, _orc.kaih += 2, _orc.saku += 2, _orb = true), 88 == _or8.ctype && (_ora.houg += 4, _ora.kaih += 2, _orc.saku += 3, _orc.houm += 2, _orb = true), 0 == _orb) return _ora;
            var _ord = _or8.get_slotnums(510);
            return _ora.add(_orc.multiply(_ord)), _ora;
        };
    },
    14830: (_ore, _orf, _org) => {
        'use strict';
        var _orh = null;
        defineModule(_orf);
        Object.defineProperty(_orf, '__esModule', {
            'value': true
        }), _orf.getSlot511PersonalEffect = void 0;
        var _ori = _org(74496);
        _orf.getSlot511PersonalEffect = function(_orj) {
            var _ork = null,
                _orl = new _ori.SlotItemEffectModel();
            return 122 == _orj.ctype ? (_orl.raig += 3, _orl.kaih += 4) : 114 == _orj.ctype && (_orl.raig += 1, _orl.kaih += 2), _orl;
        };
    },
    54047: (_orm, _orn, _oro) => {
        'use strict';
        var _orp = null;
        defineModule(_orn);
        Object.defineProperty(_orn, '__esModule', {
            'value': true
        }), _orn.getSlot517PersonalEffect = void 0;
        var _orq = _oro(74496);
        _orn.getSlot517PersonalEffect = function(_orr) {
            var _ors = null,
                _ort = new _orq.SlotItemEffectModel();
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
            }[_orr.ctype] && 74 != _orr.ctype && 77 != _orr.ctype && 85 != _orr.ctype && 117 != _orr.ctype && 104 != _orr.ctype || (_ort.houm += 1, _ort.kaih += 1, _ort.saku += 1), 38 == _orr.ctype && (_ort.houg += 1, _ort.houm += 1), 960 == _orr.ship_id ? (_ort.houg += 2, _ort.houm += 1, _ort.kaih += 3, _ort.saku += 2) : 955 != _orr.ship_id && 578 != _orr.ship_id && 961 != _orr.ship_id && 656 != _orr.ship_id && 464 != _orr.ship_id && 470 != _orr.ship_id && 419 != _orr.ship_id && 407 != _orr.ship_id && 235 != _orr.ship_id && 147 != _orr.ship_id && 975 != _orr.ship_id || (_ort.houg += 1, _ort.houm += 1, _ort.kaih += 2, _ort.saku += 1);
            for (var _oru = [], _orv = function(_orw) {
                    var _orx = null,
                        _ory = _orr.get_each_level_nums(_orw);
                    null == _oru[_orw] && (_oru[_orw] = []), _ory.forEach(function(_orz, _os0) {
                        var _os1 = null;
                        for (var _os2 = 1; _os2 <= _orr.SLOT_LEVEL_MAX; _os2++) null == _oru[_orw][_os2] && (_oru[_orw][_os2] = 0), _os0 >= _os2 && (_oru[_orw][_os2] += _orz);
                    });
                }, _os3 = 0, _os4 = [267, 366, 450, 517]; _os3 < _os4.length; _os3++) {
                _orv(_os4[_os3]);
            }
            var _os5 = _oru[517];
            return _os5[7] > 0 && (_ort.houm += 1), _os5[8] > 0 && (_ort.kaih += 1), _os5[9] > 0 && (_ort.houg += 1), _os5[10] > 0 && (_ort.houm += 1), (_oru[267][3] > 0 || _oru[366][3] > 0) && (_ort.houg += 1, _ort.houm += 1, 38 == _orr.ctype && (_ort.houg += 1, _ort.houm += 1), _oru[450][4] > 0 && (_ort.houg += 1, _ort.houm += 1, _ort.tyku += 4, _ort.kaih += 3)), _ort;
        };
    },
    76054: (_os6, _os7, _os8) => {
        'use strict';
        var _os9 = null;
        defineModule(_os7);
        Object.defineProperty(_os7, '__esModule', {
            'value': true
        }), _os7.getSlot518PersonalEffect = void 0;
        var _osa = _os8(74496);
        _os7.getSlot518PersonalEffect = function(_osb) {
            var _osc = null,
                _osd = new _osa.SlotItemEffectModel(),
                _ose = false,
                _osf = new _osa.SlotItemEffectModel();
            if (34 != _osb.ctype && 56 != _osb.ctype || (_osf.houg += 1, _osf.tyku += 1, _osf.tais += 1, _osf.kaih += 1, _ose = true), 16 == _osb.stype && (_osf.houg += 1, _osf.raig += 1, _osf.kaih += 1, _ose = true), 622 != _osb.ship_id && 624 != _osb.ship_id && 623 != _osb.ship_id || (_osf.houg += 1, _ose = true), 622 != _osb.ship_id && 624 != _osb.ship_id || (_osf.tyku += 1, _ose = true), 624 == _osb.ship_id && (_osf.tais += 2, _ose = true), 0 == _ose) return _osd;
            var _osg = _osb.get_slotnums(518);
            return _osd.add(_osf.multiply(_osg)), _osd;
        };
    },
    93053: (_osh, _osi, _osj) => {
        'use strict';
        var _osk = null;
        defineModule(_osi);
        Object.defineProperty(_osi, '__esModule', {
            'value': true
        }), _osi.getSlot519PersonalEffect = void 0;
        var _osl = _osj(74496);
        _osi.getSlot519PersonalEffect = function(_osm) {
            var _osn = null,
                _oso = new _osl.SlotItemEffectModel();
            return 122 == _osm.ctype && (_oso.houm += 2, _oso.kaih += 2), 114 == _osm.ctype && (_oso.raig += 1, _oso.houm += 2, _oso.kaih += 2), _oso;
        };
    },
    81254: (_osp, _osq, _osr) => {
        'use strict';
        var _oss = null;
        defineModule(_osq);
        Object.defineProperty(_osq, '__esModule', {
            'value': true
        }), _osq.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _ost = _osr(74496);
        _osq.getSlot51cmSeriesGunPersonalEffect = function(_osu) {
            var _osv = null,
                _osw = new _ost.SlotItemEffectModel(),
                _osx = false,
                _osy = new _ost.SlotItemEffectModel(),
                _osz = _osu.get_slotnums(142),
                _ot0 = _osu.get_slotnums(460),
                _ot1 = _osz + _ot0;
            if (916 != _osu.ship_id && 911 != _osu.ship_id && 546 != _osu.ship_id || (_osy.houg += 1, _osy.houm += 1, _ot0 >= 1 && (_osw.kaih += 1, _osw.houm += 1), _osx = true), 37 == _osu.ctype && _ot1 >= 1 && (_osw.houg += 1, _osw.houm += 2), 0 == _osx) return _osw;
            var _ot2 = _osu.get_slotnums(128) + _osu.get_slotnums(281);
            return _osw.add(_osy.multiply(_ot2)), _osw;
        };
    },
    88792: (_ot3, _ot4, _ot5) => {
        'use strict';
        var _ot6 = null;
        defineModule(_ot4);
        Object.defineProperty(_ot4, '__esModule', {
            'value': true
        }), _ot4.getSlot520PersonalEffect = void 0;
        var _ot7 = _ot5(74496);
        _ot4.getSlot520PersonalEffect = function(_ot8) {
            var _ot9 = null,
                _ota = new _ot7.SlotItemEffectModel(),
                _otb = false,
                _otc = new _ot7.SlotItemEffectModel(),
                _otd = 0,
                _ote = 0,
                _otf = 0,
                _otg = _ot8.get_slotnums(520);
            7 == _ot8.ctype || 13 == _ot8.ctype ? (_otc.houg += 1, _otb = true, _ote = 1, _otf = 1) : 8 == _ot8.ctype || 29 == _ot8.ctype ? (_otc.houg += 2, _otc.kaih += 1, _otb = true, _ote = 2, _otf = 1) : 9 != _ot8.ctype && 31 != _ot8.ctype || (_otc.houg += 3, _otc.kaih += 1, _otc.houm += 1, _otb = true, _ote = 2, _otf = 1, 2 == _otg && (_ota.houg += 2), _otg >= 3 && (_ota.houg += 4));
            var _oth = _ot8.get_have_rader_nums().water_rader,
                _oti = 0,
                _otj = 0;
            if (_ote + _otf > 0) {
                for (var _otk = _ot8.getSpItemDict_FukuhouTaikuHeisou(), _otl = _ot8.getSpItemDict_Tansou21GouDentan(), _otm = 0, _otn = _ot8.have_slot_ids(); _otm < _otn.length; _otm++) {
                    var _oto = _otn[_otm],
                        _otp = parseInt(_oto);
                    null != _otk[_otp] ? (_otk[_otp] += _ot8.get_slotnums(_otp), _oti += _ot8.get_slotnums(_otp)) : null != _otl[_otp] && (_otl[_otp] += _ot8.get_slotnums(_otp), _otj += _ot8.get_slotnums(_otp));
                }
                _oth > 0 && (1 == _ote ? (_ota.houg += 2, _ota.raig += 2, _ota.kaih += 1, _ota.houm += 1) : 2 == _ote && (_ota.houg += 3, _ota.raig += 2, _ota.kaih += 2, _ota.houm += 1)), _oti > 0 && 1 == _otf && (_ota.houg += 1, _ota.tyku += 4, _ota.kaih += 4, _ota.houm += 1);
            }
            if (269 == _ot8.ship_id || 265 == _ot8.ship_id || 319 == _ot8.ship_id ? (2 == _otg && (_ota.houg += 2), _otg >= 3 && (_ota.houg += 4)) : 501 != _ot8.ship_id && 506 != _ot8.ship_id && 502 != _ot8.ship_id && 507 != _ot8.ship_id && 503 != _ot8.ship_id && 504 != _ot8.ship_id || (_otc.houg += 1, _otb = true, _oth >= 1 && (_ota.houg += 1, _ota.kaih += 1, _ota.houm += 2), _otj >= 1 && (_ota.houg += 1, _ota.tyku += 3, _ota.kaih += 2, _ota.houm += 1), _ot8.get_slotnums(410) > 0 && (_ota.houg += 2, _ota.tyku += 3, _ota.kaih += 2, _ota.houm += 1), _otd = 1), 502 == _ot8.ship_id || 269 == _ot8.ship_id || 265 == _ot8.ship_id || 319 == _ot8.ship_id ? (_otc.houg += 1, _otc.houm += 1, _otb = true) : 507 == _ot8.ship_id && (_otc.houg += 1, _otc.houm += 2, _otc.tyku += 1, _otb = true), _otb && _ota.add(_otc.multiply(_otg)), 0 == _otd) return _ota;
            var _otq = _ot8.get_each_level_over_nums([520]),
                _otr = _otq.slot[520][7],
                _ots = _otq.slot[520][10];
            return 1 == _otd && (_otr > 0 && (_ota.houg += 1 * _otr), _ots > 0 && (_ota.houm += 1 * _ots)), _ota;
        };
    },
    33242: (_ott, _otu, _otv) => {
        'use strict';
        var _otw = null;
        defineModule(_otu);
        Object.defineProperty(_otu, '__esModule', {
            'value': true
        }), _otu.getSlot521PersonalEffect = void 0;
        var _otx = _otv(74496);
        _otu.getSlot521PersonalEffect = function(_oty) {
            var _otz = null,
                _ou0 = new _otx.SlotItemEffectModel(),
                _ou1 = false,
                _ou2 = new _otx.SlotItemEffectModel(),
                _ou3 = 0;
            if (52 == _oty.ctype && (_ou3 = 1), 183 == _oty.ship_id ? (_ou2.houg += 1, _ou2.houm += 1, _ou2.saku += 2, _ou2.kaih += 2, _ou1 = true) : 321 == _oty.ship_id ? (_ou2.houg += 2, _ou2.houm += 2, _ou2.saku += 3, _ou2.kaih += 3, _ou1 = true) : 507 == _oty.ship_id && (_ou2.houg += 3, _ou2.tyku += 1, _ou2.houm += 3, _ou2.saku += 2, _ou2.kaih += 2, _ou1 = true, _ou3 = 1), _ou1) {
                var _ou4 = _oty.get_slotnums(521);
                _ou0.add(_ou2.multiply(_ou4));
            }
            if (0 == _ou3) return _ou0;
            var _ou5 = _oty.get_each_level_over_nums([521]).slot[521];
            return 1 == _ou3 && (_ou5[1] >= 1 && (_ou0.houm += 1 * _ou5[1]), _ou5[2] >= 1 && (_ou0.kaih += 1 * _ou5[2]), _ou5[3] >= 1 && (_ou0.saku += 1 * _ou5[3], _ou0.raig += 1 * _ou5[3]), _ou5[4] >= 1 && (_ou0.houg += 1 * _ou5[4]), _ou5[6] >= 1 && (_ou0.houm += 1 * _ou5[6]), _ou5[8] >= 1 && (_ou0.saku += 1 * _ou5[8]), _ou5[10] >= 1 && (_ou0.houm += 1 * _ou5[10])), _ou0;
        };
    },
    3296: (_ou6, _ou7, _ou8) => {
        'use strict';
        var _ou9 = null;
        defineModule(_ou7);
        Object.defineProperty(_ou7, '__esModule', {
            'value': true
        }), _ou7.getSlot522_523PersonalEffect = void 0;
        var _oua = _ou8(74496);
        _ou7.getSlot522_523PersonalEffect = function(_oub) {
            var _ouc = null,
                _oud = new _oua.SlotItemEffectModel(),
                _oue = false,
                _ouf = new _oua.SlotItemEffectModel(),
                _oug = 0,
                _ouh = _oub.get_slotnums(522),
                _oui = _oub.get_slotnums(523),
                _ouj = _ouh + _oui;
            if (14 == _oub.stype && (_ouf.raig += 1, _ouf.kaih += 5, _ouf.houm += 1, _ouf.saku += 3, _oue = true, _oui >= 1 && (_oud.raig += 2 * _oui, _oud.baku += 2 * _oui, _oud.kaih += 1 * _oui, _oud.houm += 1 * _oui, _oud.saku += 1 * _oui), _oug = 1), 0 == _oue) return _oud;
            if (_oud.add(_ouf.multiply(_ouj)), 0 == _oug) return _oud;
            var _ouk = _oub.get_each_level_over_nums([522, 523]),
                _oul = _ouk.slot[522],
                _oum = _ouk.slot[523];
            if (1 == _oug) {
                if (_oul[1] >= 1 || _oum[1] >= 1) {
                    var _oun = _oul[1] + _oum[1];
                    _oud.raig += 1 * _oun;
                }
                if (_oul[2] >= 1 || _oum[2] >= 1) {
                    var _ouo = _oul[2] + _oum[2];
                    _oud.houm += 1 * _ouo;
                }
                if (_oul[3] >= 1 || _oum[3] >= 1) {
                    var _oup = _oul[3] + _oum[3];
                    _oud.kaih += 1 * _oup;
                }
                if (_oul[5] >= 1 || _oum[5] >= 1) {
                    var _ouq = _oul[5] + _oum[5];
                    _oud.saku += 1 * _ouq;
                }
                if (_oul[8] >= 1 || _oum[8] >= 1) {
                    var _our = _oul[8] + _oum[8];
                    _oud.houm += 1 * _our;
                }
                if (_oul[10] >= 1 || _oum[10] >= 1) {
                    var _ous = _oul[10] + _oum[10];
                    _oud.kaih += 1 * _ous;
                }
            }
            return _oud;
        };
    },
    59415: (_out, _ouu, _ouv) => {
        'use strict';
        var _ouw = null;
        defineModule(_ouu);
        Object.defineProperty(_ouu, '__esModule', {
            'value': true
        }), _ouu.getSlot524PersonalEffect = void 0;
        var _oux = _ouv(74496);
        _ouu.getSlot524PersonalEffect = function(_ouy) {
            var _ouz = null,
                _ov0 = new _oux.SlotItemEffectModel(),
                _ov1 = false,
                _ov2 = new _oux.SlotItemEffectModel(),
                _ov3 = 0,
                _ov4 = 0;
            if (17 != _ouy.stype && 19 != _ouy.stype && 20 != _ouy.stype && 21 != _ouy.stype && 22 != _ouy.stype || (_ov2.houg += 1, _ov2.tyku += 2, _ov2.kaih += 2, _ov2.houm += 1, _ov1 = true, _ov3 = 1, _ov4 = 1), 0 == _ov1) return _ov0;
            var _ov5 = _ouy.get_slotnums(524);
            _ov0.add(_ov2.multiply(_ov5));
            var _ov6 = _ouy.get_have_rader_nums().air_rader;
            if (1 == _ov4 && _ov6 >= 1 && (_ov0.tyku += 2, _ov0.kaih += 2), 0 == _ov3) return _ov0;
            var _ov7 = _ouy.get_each_level_over_nums([524]).slot[524];
            return 1 == _ov3 && (_ov7[1] >= 1 && (_ov0.kaih += 1 * _ov7[1]), _ov7[2] >= 1 && (_ov0.kaih += 1 * _ov7[2]), _ov7[4] >= 1 && (_ov0.tyku += 1 * _ov7[4]), _ov7[6] >= 1 && (_ov0.kaih += 1 * _ov7[6]), _ov7[7] >= 1 && (_ov0.houm += 1 * _ov7[7]), _ov7[8] >= 1 && (_ov0.tyku += 1 * _ov7[8]), _ov7[9] >= 1 && (_ov0.kaih += 1 * _ov7[9]), _ov7[10] >= 1 && (_ov0.houg += 1 * _ov7[10])), _ov0;
        };
    },
    36731: (_ov8, _ov9, _ova) => {
        'use strict';
        var _ovb = null;
        defineModule(_ov9);
        Object.defineProperty(_ov9, '__esModule', {
            'value': true
        }), _ov9.getSlot527PersonalEffect = void 0;
        var _ovc = _ova(74496);
        _ov9.getSlot527PersonalEffect = function(_ovd) {
            var _ove = null,
                _ovf = new _ovc.SlotItemEffectModel(),
                _ovg = 0;
            if ('イギリス' == _ovd.getCountryName() && (_ovg = 1, _ovf.tyku += 2, _ovf.houm += 1, _ovf.kaih += 1, _ovf.saku += 2, 88 == _ovd.ctype && (_ovf.houg += 2), 67 == _ovd.ctype && (_ovf.houg += 1)), 0 == _ovg) return _ovf;
            var _ovh = _ovd.get_each_level_over_nums([527]),
                _ovi = _ovh.slot[527][2],
                _ovj = _ovh.slot[527][4],
                _ovk = _ovh.slot[527][7],
                _ovl = _ovh.slot[527][10];
            return 1 == _ovg && (_ovi >= 1 && (_ovf.tyku += 1), _ovj >= 1 && (_ovf.kaih += 1), _ovk >= 1 && (_ovf.tyku += 1), _ovl >= 1 && (_ovf.houm += 1)), _ovf;
        };
    },
    30450: (_ovm, _ovn, _ovo) => {
        'use strict';
        var _ovp = null;
        defineModule(_ovn);
        Object.defineProperty(_ovn, '__esModule', {
            'value': true
        }), _ovn.getSlot528PersonalEffect = void 0;
        var _ovq = _ovo(74496);
        _ovn.getSlot528PersonalEffect = function(_ovr) {
            var _ovs = null,
                _ovt = new _ovq.SlotItemEffectModel(),
                _ovu = false,
                _ovv = new _ovq.SlotItemEffectModel(),
                _ovw = 0;
            if ('イギリス' == _ovr.getCountryName() && (_ovv.houg += 1, _ovv.houm += 2, _ovv.kaih += 1, 108 == _ovr.ctype && (_ovv.houg += 1, _ovv.kaih += 1), _ovu = true, _ovw = 1), 0 == _ovu) return _ovt;
            var _ovx = _ovr.get_slotnums(528);
            if (_ovt.add(_ovv.multiply(_ovx)), 0 == _ovw) return _ovt;
            var _ovy = _ovr.get_each_level_over_nums([528]),
                _ovz = _ovy.slot[528][2],
                _ow0 = _ovy.slot[528][4],
                _ow1 = _ovy.slot[528][7],
                _ow2 = _ovy.slot[528][10];
            return 1 == _ovw && (_ovz >= 1 && (_ovt.houg += 1 * _ovz), _ow0 >= 1 && (_ovt.houm += 1 * _ow0), _ow1 >= 1 && (_ovt.kaih += 1 * _ow1), _ow2 >= 1 && (_ovt.houm += 1 * _ow2)), _ovt;
        };
    },
    23035: (_ow3, _ow4, _ow5) => {
        'use strict';
        var _ow6 = null;
        defineModule(_ow4);
        Object.defineProperty(_ow4, '__esModule', {
            'value': true
        }), _ow4.getSlot58PersonalEffect = void 0;
        var _ow7 = _ow5(74496);
        _ow4.getSlot58PersonalEffect = function(_ow8) {
            var _ow9 = null,
                _owa = new _ow7.SlotItemEffectModel(),
                _owb = new _ow7.SlotItemEffectModel();
            if ('しまかぜ' != _ow8.yomi && 4 != _ow8.stype && 54 != _ow8.ctype || (_owb.raig = 1), !_owb.exists()) return _owa;
            var _owc = _ow8.get_slotnums(58);
            return _owa = _owb.multiply(_owc);
        };
    },
    47169: (_owd, _owe, _owf) => {
        'use strict';
        var _owg = null;
        defineModule(_owe);
        Object.defineProperty(_owe, '__esModule', {
            'value': true
        }), _owe.getSlot59PersonalEffect = void 0;
        var _owh = _owf(74496);
        _owe.getSlot59PersonalEffect = function(_owi) {
            var _owj = null,
                _owk = new _owh.SlotItemEffectModel();
            return 501 != _owi.ship_id && 506 != _owi.ship_id && 502 != _owi.ship_id && 507 != _owi.ship_id || (_owk.tyku += 1, _owk.kaih += 1), _owk;
        };
    },
    87845: (_owl, _owm, _own) => {
        'use strict';
        var _owo = null;
        defineModule(_owm);
        Object.defineProperty(_owm, '__esModule', {
            'value': true
        }), _owm.getSlot5PersonalEffect = void 0;
        var _owp = _own(74496);
        _owm.getSlot5PersonalEffect = function(_owq) {
            var _owr = null,
                _ows = new _owp.SlotItemEffectModel(),
                _owt = false,
                _owu = new _owp.SlotItemEffectModel();
            if (52 != _owq.ctype && 9 != _owq.ctype || (_owu.houg += 1, 52 == _owq.ctype && (_owu.houg = _owu.houg + 1), _owt = true), 0 == _owt) return _ows;
            var _owv = _owq.get_slotnums(5);
            return _ows.add(_owu.multiply(_owv)), _ows;
        };
    },
    92253: (_oww, _owx, _owy) => {
        'use strict';
        var _owz = null;
        defineModule(_owx);
        Object.defineProperty(_owx, '__esModule', {
            'value': true
        }), _owx.getSlot60_154_219PersonalEffec = void 0;
        var _ox0 = _owy(74496);
        _owx.getSlot60_154_219PersonalEffec = function(_ox1) {
            var _ox2 = null,
                _ox3 = new _ox0.SlotItemEffectModel(),
                _ox4 = false,
                _ox5 = new _ox0.SlotItemEffectModel();
            if ('じゅんよう' != _ox1.yomi && 'ひよう' != _ox1.yomi && 'ずいほう' != _ox1.yomi && 'ちとせ' != _ox1.yomi && 'ちよだ' != _ox1.yomi || (_ox5.houg += 1, _ox5.tyku += 1, _ox5.kaih += 1, _ox4 = true), 185 != _ox1.ship_id && 318 != _ox1.ship_id && 282 != _ox1.ship_id || (_ox5.houg += 1, _ox5.tyku += 1, _ox5.kaih += 1, _ox4 = true), 888 != _ox1.ship_id && 883 != _ox1.ship_id || (_ox5.houg += 2, _ox5.tyku += 1, _ox5.kaih += 2, _ox4 = true), 0 == _ox4) return _ox3;
            var _ox6 = _ox1.get_slotnums(60) + _ox1.get_slotnums(154) + _ox1.get_slotnums(219);
            return _ox3.add(_ox5.multiply(_ox6)), _ox3;
        };
    },
    2578: (_ox7, _ox8, _ox9) => {
        'use strict';
        var _oxa = null;
        defineModule(_ox8);
        Object.defineProperty(_ox8, '__esModule', {
            'value': true
        }), _ox8.getSlot61PersonalEffect2 = _ox8.getSlot61PersonalEffect = void 0;
        var _oxb = _ox9(74496);
        _ox8.getSlot61PersonalEffect = function(_oxc) {
            var _oxd = null,
                _oxe = new _oxb.SlotItemEffectModel();
            if (553 == _oxc.ship_id) _oxe.houg = 3, _oxe.kaih = 2, _oxe.souk = 1, _oxe.houm = 5, _oxe.leng = 1;
            else {
                if (554 == _oxc.ship_id) _oxe.houg = 3, _oxe.kaih = 3, _oxe.souk = 3, _oxe.houm = 5, _oxe.leng = 1;
                else {
                    if (196 == _oxc.ship_id) _oxe.houm = 5, _oxe.leng = 1;
                    else {
                        if (197 != _oxc.ship_id) return _oxe;
                        _oxe.houm = 5, _oxe.leng = 1;
                    }
                }
            }
            return _oxe;
        }, _ox8.getSlot61PersonalEffect2 = function(_oxf) {
            var _oxg = null,
                _oxh = new _oxb.SlotItemEffectModel();
            if (null == _oxf.have_slots_dict[61]) return _oxh;
            for (var _oxi = 0, _oxj = 0, _oxk = _oxf.have_slots_dict[61]; _oxj < _oxk.length; _oxj++) {
                var _oxl = _oxk[_oxj].level;
                _oxi < _oxl && (_oxi = _oxl);
            }
            return 0 == _oxi || ('そうりゅう' == _oxf.yomi ? (_oxh.houg += 3, _oxh.saku += 3) : 'ひりゅう' == _oxf.yomi && (_oxh.houg += 2, _oxh.saku += 2), 508 != _oxf.ship_id && 509 != _oxf.ship_id && 560 != _oxf.ship_id || (_oxh.houg += 1, _oxh.saku += 1), _oxi >= 8 && 197 == _oxf.ship_id && (_oxh.houg += 1, _oxh.saku += 1)), _oxh;
        };
    },
    17143: (_oxm, _oxn, _oxo) => {
        'use strict';
        var _oxp = null;
        defineModule(_oxn);
        Object.defineProperty(_oxn, '__esModule', {
            'value': true
        }), _oxn.getSlot63PersonalEffect = void 0;
        var _oxq = _oxo(74496);
        _oxn.getSlot63PersonalEffect = function(_oxr) {
            var _oxs = null,
                _oxt = new _oxq.SlotItemEffectModel(),
                _oxu = new _oxq.SlotItemEffectModel();
            1 != _oxr.ctype && 5 != _oxr.ctype && 10 != _oxr.ctype || (_oxu.tyku += 1), 'ゆうだち' == _oxr.yomi && (_oxu.houg += 1, _oxu.tyku += 1, _oxu.kaih += 2), 145 == _oxr.ship_id || 961 == _oxr.ship_id ? _oxu.houg += 1 : 144 == _oxr.ship_id ? _oxu.raig += 1 : 469 == _oxr.ship_id ? _oxu.kaih += 2 : 242 == _oxr.ship_id || 497 == _oxr.ship_id || 244 == _oxr.ship_id || 498 == _oxr.ship_id || 975 == _oxr.ship_id ? _oxu.kaih += 1 : 627 == _oxr.ship_id ? _oxu.houg += 1 : 903 != _oxr.ship_id && 908 != _oxr.ship_id || (_oxu.houg += 2);
            var _oxv = true;
            if (_oxu.exists() || (_oxv = false), 0 == _oxv) return _oxt;
            var _oxw = _oxr.get_slotnums(63);
            return _oxt = _oxu.multiply(_oxw);
        };
    },
    16164: (_oxx, _oxy, _oxz) => {
        'use strict';
        var _oy0 = null;
        defineModule(_oxy);
        Object.defineProperty(_oxy, '__esModule', {
            'value': true
        }), _oxy.getSlot67PersonalEffect = void 0;
        var _oy1 = _oxz(74496);
        _oxy.getSlot67PersonalEffect = function(_oy2) {
            var _oy3 = null,
                _oy4 = new _oy1.SlotItemEffectModel(),
                _oy5 = new _oy1.SlotItemEffectModel();
            if (13 != _oy2.stype && 14 != _oy2.stype && (_oy5.raig = -5), !_oy5.exists()) return _oy4;
            var _oy6 = _oy2.get_slotnums(67);
            return _oy4 = _oy5.multiply(_oy6);
        };
    },
    35023: (_oy7, _oy8, _oy9) => {
        'use strict';
        var _oya = null;
        defineModule(_oy8);
        Object.defineProperty(_oy8, '__esModule', {
            'value': true
        }), _oy8.getSlot69PersonalEffect = void 0;
        var _oyb = _oy9(74496);
        _oy8.getSlot69PersonalEffect = function(_oyc) {
            var _oyd = null,
                _oye = new _oyb.SlotItemEffectModel(),
                _oyf = false,
                _oyg = new _oyb.SlotItemEffectModel();
            if (554 == _oyc.ship_id || 646 == _oyc.ship_id ? (_oyg.houg += 1, _oyg.tais += 2, _oyf = true) : 553 == _oyc.ship_id && (_oyg.houg += 1, _oyg.tais += 1, _oyf = true), 0 == _oyf) return _oye;
            var _oyh = _oyc.get_slotnums(69);
            return _oye.add(_oyg.multiply(_oyh)), _oye;
        };
    },
    78707: (_oyi, _oyj, _oyk) => {
        'use strict';
        var _oyl = null;
        defineModule(_oyj);
        Object.defineProperty(_oyj, '__esModule', {
            'value': true
        }), _oyj.getSlot70PersonalEffect = void 0;
        var _oym = _oyk(74496);
        _oyj.getSlot70PersonalEffect = function(_oyn) {
            var _oyo = null,
                _oyp = new _oym.SlotItemEffectModel(),
                _oyq = false,
                _oyr = new _oym.SlotItemEffectModel();
            if ('やましおまる' == _oyn.yomi && (_oyr.houg += 1, _oyr.tais += 1, _oyq = true), 0 == _oyq) return _oyp;
            var _oys = _oyn.get_slotnums(70);
            return _oyp.add(_oyr.multiply(_oys)), _oyp;
        };
    },
    44680: function(_oyt, _oyu, _oyv) {
        'use strict';
        var _oyw = null;
        var _oyx = this && this.__importDefault || function(_oyy) {
            var _oyz = null;
            return _oyy && _oyy.__esModule ? _oyy : {
                'default': _oyy
            };
        };
        defineModule(_oyu);
        Object.defineProperty(_oyu, '__esModule', {
            'value': true
        }), _oyu.getSlot78PersonalEffect = void 0;
        var _oz0 = _oyv(74496),
            _oz1 = _oyx(_oyv(18622));
        _oyu.getSlot78PersonalEffect = function(_oz2) {
            var _oz3 = null,
                _oz4 = new _oz0.SlotItemEffectModel(),
                _oz5 = false,
                _oz6 = new _oz0.SlotItemEffectModel(),
                _oz7 = 0,
                _oz8 = 0,
                _oz9 = false;
            if (48 == _oz2.ctype && (_oz6.houg += 1, _oz6.kaih += 1, _oz7 = 1, _oz8 = 1, _oz9 = true, _oz5 = true), 0 == _oz5) return _oz4;
            var _oza = _oz2.get_slotnums(78);
            _oz4.add(_oz6.multiply(_oza));
            var _ozb = 0,
                _ozc = _oz2.get_each_level_nums(78),
                _ozd = 0;
            if (_oz9) {
                _ozc.map(function(_oze, _ozf) {
                    _ozf >= 7 && (_ozd += _oze);
                });
                for (var _ozg = 0, _ozh = _oz2.have_slot_ids(); _ozg < _ozh.length; _ozg++) {
                    var _ozi = _ozh[_ozg],
                        _ozj = _oz1.default.model.slot.getMst(_ozi),
                        _ozk = _ozj.equipType;
                    12 != _ozk && 13 != _ozk || _ozj.sakuteki >= 5 && (_ozb += _oz2.get_slotnums(parseInt(_ozi)));
                }
            }
            if (1 == _oz7 && _ozb > 0 && (_oz4.houg += 2, _oz4.kaih += 2, _oz4.raig += 2), 1 == _oz8) {
                _oz4.houg += 1 * _ozd;
                var _ozl = _ozc[10];
                _oz4.souk += 1 * _ozl;
            }
            return _oz4;
        };
    },
    45749: (_ozm, _ozn, _ozo) => {
        'use strict';
        var _ozp = null;
        defineModule(_ozn);
        Object.defineProperty(_ozn, '__esModule', {
            'value': true
        }), _ozn.getSlot79And81PersonalEffect = void 0;
        var _ozq = _ozo(74496);
        _ozn.getSlot79And81PersonalEffect = function(_ozr) {
            var _ozs = null,
                _ozt = new _ozq.SlotItemEffectModel(),
                _ozu = new _ozq.SlotItemEffectModel();
            if (553 == _ozr.ship_id) _ozu.houg = 3;
            else {
                if (82 == _ozr.ship_id) _ozu.houg = 2;
                else {
                    if (88 == _ozr.ship_id) _ozu.houg = 2;
                    else {
                        if (554 == _ozr.ship_id) _ozu.houg = 3;
                        else {
                            if (411 == _ozr.ship_id) _ozu.houg = 2;
                            else {
                                if (412 != _ozr.ship_id) return _ozt;
                                _ozu.houg = 2;
                            }
                        }
                    }
                }
            }
            var _ozv = _ozr.get_slotnums(79) + _ozr.get_slotnums(81);
            return _ozt = _ozu.multiply(_ozv);
        };
    },
    37334: (_ozw, _ozx, _ozy) => {
        'use strict';
        var _ozz = null;
        defineModule(_ozx);
        Object.defineProperty(_ozx, '__esModule', {
            'value': true
        }), _ozx.getSlot82PersonalEffect = void 0;
        var _p00 = _ozy(74496);
        _ozx.getSlot82PersonalEffect = function(_p01) {
            var _p02 = null,
                _p03 = new _p00.SlotItemEffectModel(),
                _p04 = new _p00.SlotItemEffectModel();
            if (76 == _p01.ctype && (_p04.tais = 1, _p04.kaih = 1), !_p04.exists()) return _p03;
            var _p05 = _p01.get_slotnums(82);
            return _p03 = _p04.multiply(_p05);
        };
    },
    2603: function(_p06, _p07, _p08) {
        'use strict';
        var _p09 = null;
        var _p0a = this && this.__importDefault || function(_p0b) {
            var _p0c = null;
            return _p0b && _p0b.__esModule ? _p0b : {
                'default': _p0b
            };
        };
        defineModule(_p07);
        Object.defineProperty(_p07, '__esModule', {
            'value': true
        }), _p07.getSlot84PersonalEffect = void 0;
        var _p0d = _p08(74496),
            _p0e = _p0a(_p08(18622));
        _p07.getSlot84PersonalEffect = function(_p0f) {
            var _p0g = null,
                _p0h = new _p0d.SlotItemEffectModel(),
                _p0i = _p0f.get_each_level_nums(84),
                _p0j = 0,
                _p0k = 0;
            if (_p0i.forEach(function(_p0l, _p0m) {
                    _p0m >= 4 && (_p0j += _p0l), _p0m >= 7 && (_p0k += _p0l);
                }), 0 == _p0j) return _p0h;
            for (var _p0n = 0, _p0o = 0, _p0p = _p0f.have_slot_ids(); _p0o < _p0p.length; _p0o++) {
                var _p0q = _p0p[_p0o],
                    _p0r = _p0e.default.model.slot.getMst(_p0q),
                    _p0s = _p0r.equipType;
                12 != _p0s && 13 != _p0s || (_p0r.sakuteki >= 5 && _p0f.get_slotnums(parseInt(_p0q)), _p0r.taiku >= 2 && (_p0n += _p0f.get_slotnums(parseInt(_p0q))));
            }
            var _p0t = _p0f.getCountryName();
            _p0j >= 1 && (_p0h.tyku += 1 * _p0j, _p0h.kaih += 1 * _p0j, 'ドイツ' != _p0t && 'イタリア' != _p0t || (_p0h.tyku += 1 * _p0j, _p0h.kaih += 1 * _p0j), _p0n >= 1 && (_p0h.tyku += 1)), _p0k >= 1 && (_p0h.tyku += 1 * _p0k, _p0h.houg += 1 * _p0k);
            var _p0u = _p0i[10];
            return _p0u >= 1 && (_p0h.tyku += 1 * _p0u, _p0h.kaih += 1 * _p0u, 'ドイツ' != _p0t && 'イタリア' != _p0t || (_p0h.houg += 1)), _p0h;
        };
    },
    90725: (_p0v, _p0w, _p0x) => {
        'use strict';
        var _p0y = null;
        defineModule(_p0w);
        Object.defineProperty(_p0w, '__esModule', {
            'value': true
        }), _p0w.getSlot85PersonalEffect = void 0;
        var _p0z = _p0x(74496);
        _p0w.getSlot85PersonalEffect = function(_p10) {
            var _p11 = null,
                _p12 = new _p0z.SlotItemEffectModel(),
                _p13 = _p10.get_each_level_over_nums([85]),
                _p14 = _p13.slot[85][6],
                _p15 = _p13.slot[85][8],
                _p16 = _p13.slot[85][10],
                _p17 = _p10.get_have_rader_nums().air_rader,
                _p18 = _p10.getCountryName();
            return _p14 > 0 && (_p12.tyku += 1 * _p14, _p12.kaih += 1 * _p14, _p17 >= 1 && (_p12.tyku += 2)), _p15 > 0 && (_p12.houg += 1 * _p15, 'ドイツ' != _p18 && 'イタリア' != _p18 || (_p12.tyku += 1 * _p15, _p12.kaih += 1 * _p15)), _p16 > 0 && (_p12.kaih += 1 * _p16, _p12.houm += 1 * _p16, 'ドイツ' != _p18 && 'イタリア' != _p18 || (_p12.houg += 1)), _p12;
        };
    },
    29180: (_p19, _p1a, _p1b) => {
        'use strict';
        var _p1c = null;
        defineModule(_p1a);
        Object.defineProperty(_p1a, '__esModule', {
            'value': true
        }), _p1a.getSlot87PersonalEffect = void 0;
        var _p1d = _p1b(74496);
        _p1a.getSlot87PersonalEffect = function(_p1e) {
            var _p1f = null,
                _p1g = new _p1d.SlotItemEffectModel(),
                _p1h = false,
                _p1i = new _p1d.SlotItemEffectModel(),
                _p1j = 0;
            if (951 == _p1e.ship_id ? (_p1i.houg += 1, _p1i.kaih += 1, _p1i.raig += 1, _p1i.houm += 1, _p1h = true, _p1j = 1) : 181 == _p1e.ship_id || 316 == _p1e.ship_id || 50 == _p1e.ship_id || 229 == _p1e.ship_id || 961 == _p1e.ship_id ? _p1j = 2 : 591 != _p1e.ship_id && 592 != _p1e.ship_id && 593 != _p1e.ship_id && 954 != _p1e.ship_id || (_p1g.kaih += 2, _p1g.raig += 1, _p1j = 3), 38 != _p1e.ctype && 54 != _p1e.ctype && 101 != _p1e.ctype || (_p1j = 4), _p1h) {
                var _p1k = _p1e.get_slotnums(87);
                _p1g.add(_p1i.multiply(_p1k));
            }
            if (0 == _p1j) return _p1g;
            var _p1l = _p1e.get_each_level_nums(87),
                _p1m = [];
            return _p1j > 0 && _p1l.forEach(function(_p1n, _p1o) {
                var _p1p = null;
                for (var _p1q = 1; _p1q <= _p1e.SLOT_LEVEL_MAX; _p1q++) null == _p1m[_p1q] && (_p1m[_p1q] = 0), _p1o >= _p1q && (_p1m[_p1q] += _p1n);
            }), 1 == _p1j ? (_p1m[6] >= 1 && (_p1g.tyku += 1 * _p1m[6]), _p1m[7] >= 1 && (_p1g.kaih += 1 * _p1m[7]), _p1m[8] >= 1 && (_p1g.raig += 1 * _p1m[8]), _p1m[9] >= 1 && (_p1g.houg += 1 * _p1m[9]), _p1m[10] >= 1 && (_p1g.houm += 1 * _p1m[10])) : 2 == _p1j ? (_p1m[6] >= 1 && (_p1g.kaih += 1 * _p1m[6]), _p1m[7] >= 1 && (_p1g.raig += 1 * _p1m[7]), _p1m[8] >= 1 && (_p1g.houg += 1 * _p1m[8]), _p1m[9] >= 1 && (_p1g.houm += 1 * _p1m[9]), _p1m[10] >= 1 && (_p1g.kaih += 1 * _p1m[10])) : 3 == _p1j ? (_p1m[6] > 0 && (_p1g.kaih += 1), _p1m[8] > 0 && (_p1g.raig += 1), _p1m[10] > 0 && (_p1g.houg += 1)) : 4 == _p1j && (_p1m[7] >= 1 && (_p1g.kaih += 1 * _p1m[7]), _p1m[8] >= 1 && (_p1g.raig += 1 * _p1m[8]), _p1m[10] >= 1 && (_p1g.houm += 1 * _p1m[10])), _p1g;
        };
    },
    68685: function(_p1r, _p1s, _p1t) {
        'use strict';
        var _p1u = null;
        var _p1v = this && this.__importDefault || function(_p1w) {
            var _p1x = null;
            return _p1w && _p1w.__esModule ? _p1w : {
                'default': _p1w
            };
        };
        defineModule(_p1s);
        Object.defineProperty(_p1s, '__esModule', {
            'value': true
        }), _p1s.getSlot90PersonalEffect = void 0;
        var _p1y = _p1t(74496),
            _p1z = _p1v(_p1t(18622));
        _p1s.getSlot90PersonalEffect = function(_p20) {
            var _p21 = null,
                _p22 = new _p1y.SlotItemEffectModel(),
                _p23 = new _p1y.SlotItemEffectModel();
            if (142 == _p20.ship_id ? (_p23.houg += 2, _p23.kaih += 1) : 295 == _p20.ship_id || 416 == _p20.ship_id || 417 == _p20.ship_id ? _p23.houg += 1 : 264 == _p20.ship_id ? (_p23.houg += 1, _p23.tyku += 1) : 501 != _p20.ship_id && 506 != _p20.ship_id && 502 != _p20.ship_id && 507 != _p20.ship_id || (_p23.houg += 1), 7 != _p20.ctype && 13 != _p20.ctype && 8 != _p20.ctype && 29 != _p20.ctype && 9 != _p20.ctype && 31 != _p20.ctype || (_p23.houg += 1), _p23.exists()) {
                var _p24 = _p20.get_slotnums(90);
                _p22 = _p23.multiply(_p24);
            }
            var _p25 = [];
            if ('あおば' == _p20.yomi && (_p25[1] = 1), 13 != _p20.ctype && 7 != _p20.ctype || (_p25[2] = 1), 0 == _p25.length) return _p22;
            for (var _p26 = 0, _p27 = 0, _p28 = 0, _p29 = _p20.have_slot_ids(); _p28 < _p29.length; _p28++) {
                var _p2a = _p29[_p28],
                    _p2b = _p1z.default.model.slot.getMst(_p2a),
                    _p2c = _p2b.equipType;
                12 != _p2c && 13 != _p2c || (_p2b.sakuteki >= 5 && (_p26 += _p20.get_slotnums(parseInt(_p2a))), _p2b.taiku >= 2 && (_p27 += _p20.get_slotnums(parseInt(_p2a))));
            }
            return _p27 > 0 && null != _p25[1] && (_p22.tyku += 5, _p22.kaih += 2), _p26 > 0 && null != _p25[2] && (_p22.houg += 3, _p22.kaih += 2, _p22.raig += 2), _p22;
        };
    },
    26078: (_p2d, _p2e, _p2f) => {
        'use strict';
        var _p2g = null;
        defineModule(_p2e);
        Object.defineProperty(_p2e, '__esModule', {
            'value': true
        }), _p2e.getSlot93PersonalEffect = void 0;
        var _p2h = _p2f(74496);
        _p2e.getSlot93PersonalEffect = function(_p2i) {
            var _p2j = null,
                _p2k = new _p2h.SlotItemEffectModel();
            return 'そうりゅう' == _p2i.yomi ? _p2k.houg = 1 : 'ひりゅう' == _p2i.yomi && (_p2k.houg = 3), _p2k;
        };
    },
    20829: (_p2l, _p2m, _p2n) => {
        'use strict';
        var _p2o = null;
        defineModule(_p2m);
        Object.defineProperty(_p2m, '__esModule', {
            'value': true
        }), _p2m.getSlot94PersonalEffect = void 0;
        var _p2p = _p2n(74496);
        _p2m.getSlot94PersonalEffect = function(_p2q) {
            var _p2r = null,
                _p2s = new _p2p.SlotItemEffectModel();
            if (196 == _p2q.ship_id) _p2s.houg = 7;
            else {
                if (197 != _p2q.ship_id) return _p2s;
                _p2s.houg = 3;
            }
            return _p2s;
        };
    },
    6880: (_p2t, _p2u, _p2v) => {
        'use strict';
        var _p2w = null;
        defineModule(_p2u);
        Object.defineProperty(_p2u, '__esModule', {
            'value': true
        }), _p2u.getSlot99PersonalEffect = void 0;
        var _p2x = _p2v(74496);
        _p2u.getSlot99PersonalEffect = function(_p2y) {
            var _p2z = null,
                _p30 = new _p2x.SlotItemEffectModel();
            return 'そうりゅう' == _p2y.yomi ? _p30.houg = 4 : 'ひりゅう' == _p2y.yomi && (_p30.houg = 1), _p30;
        };
    },
    21403: (_p31, _p32, _p33) => {
        'use strict';
        var _p34 = null;
        defineModule(_p32);
        Object.defineProperty(_p32, '__esModule', {
            'value': true
        }), _p32.getSlotCorsairMkIIPersonalEffect = void 0;
        var _p35 = _p33(74496);
        _p32.getSlotCorsairMkIIPersonalEffect = function(_p36) {
            var _p37 = null,
                _p38 = new _p35.SlotItemEffectModel(),
                _p39 = false,
                _p3a = new _p35.SlotItemEffectModel();
            112 == _p36.ctype && (_p3a.houg += 1, _p3a.tyku += 1, _p3a.kaih += 2, _p39 = true);
            var _p3b = _p36.getCountryName();
            if (67 == _p36.ctype || 78 == _p36.ctype || 82 == _p36.ctype || 88 == _p36.ctype || 108 == _p36.ctype || 112 == _p36.ctype ? (_p3a.houg += 1, _p3a.tyku += 2, _p3a.kaih += 3, _p39 = true) : 'アメリカ' == _p3b && (_p3a.houg += 1, _p3a.tyku += 1, _p3a.kaih += 2, _p39 = true), 0 == _p39) return _p38;
            var _p3c = _p36.get_slotnums(434) + _p36.get_slotnums(435);
            return _p38.add(_p3a.multiply(_p3c)), _p38;
        };
    },
    9195: (_p3d, _p3e, _p3f) => {
        'use strict';
        var _p3g = null;
        defineModule(_p3e);
        Object.defineProperty(_p3e, '__esModule', {
            'value': true
        }), _p3e.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _p3h = _p3f(74496);
        _p3e.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_p3i) {
            var _p3j = null,
                _p3k = new _p3h.SlotItemEffectModel(),
                _p3l = false,
                _p3m = new _p3h.SlotItemEffectModel();
            if (56 == _p3i.ctype && (_p3m.tais += 3, _p3m.kaih += 2, _p3l = true), 0 == _p3l) return _p3k;
            var _p3n = _p3i.get_slotnums(44) + _p3i.get_slotnums(45) + _p3i.get_slotnums(287) + _p3i.get_slotnums(288);
            return _p3k.add(_p3m.multiply(_p3n)), _p3k;
        };
    },
    93297: (_p3o, _p3p, _p3q) => {
        'use strict';
        var _p3r = null;
        defineModule(_p3p);
        Object.defineProperty(_p3p, '__esModule', {
            'value': true
        }), _p3p.getSlotDomesticSonarPersonalEffect = void 0;
        var _p3s = _p3q(74496);
        _p3p.getSlotDomesticSonarPersonalEffect = function(_p3t) {
            var _p3u = null,
                _p3v = new _p3s.SlotItemEffectModel();
            return 56 == _p3t.ctype && (_p3v.tais += 2, _p3v.kaih += 3), _p3v;
        };
    },
    45482: (_p3w, _p3x, _p3y) => {
        'use strict';
        var _p3z = null;
        defineModule(_p3x);
        Object.defineProperty(_p3x, '__esModule', {
            'value': true
        }), _p3x.getSlotOtherSuiseiPersonalEffect = void 0;
        var _p40 = _p3y(74496);
        _p3x.getSlotOtherSuiseiPersonalEffect = function(_p41) {
            var _p42 = null,
                _p43 = new _p40.SlotItemEffectModel(),
                _p44 = new _p40.SlotItemEffectModel();
            if (553 == _p41.ship_id) _p44.houg = 2;
            else {
                if (554 != _p41.ship_id) return _p43;
                _p44.houg = 2;
            }
            var _p45 = _p41.get_slotnums(24) + _p41.get_slotnums(57) + _p41.get_slotnums(111);
            return _p43 = _p44.multiply(_p45);
        };
    },
    45927: (_p46, _p47, _p48) => {
        'use strict';
        var _p49 = null;
        defineModule(_p47);
        Object.defineProperty(_p47, '__esModule', {
            'value': true
        }), _p47.getSlotSmokePersonalEffect = void 0;
        var _p4a = _p48(74496);
        _p47.getSlotSmokePersonalEffect = function(_p4b) {
            var _p4c = null,
                _p4d = new _p4a.SlotItemEffectModel(),
                _p4e = false,
                _p4f = new _p4a.SlotItemEffectModel();
            if (959 == _p4b.ship_id && (_p4f.kaih += 4, _p4e = true), 'ジョンストン' == _p4b.yomi || 'サミュエル・B・ロバーツ' == _p4b.yomi || 'せんだい' == _p4b.yomi || 'はるかぜ' == _p4b.yomi || 'かみかぜ' == _p4b.yomi || 'しきなみ' == _p4b.yomi || 'うらなみ' == _p4b.yomi || 'あおば' == _p4b.yomi ? (_p4f.kaih += 3, _p4e = true) : 'いなづま' != _p4b.yomi && 'はぐろ' != _p4b.yomi && 'はつしも' != _p4b.yomi && 'かすみ' != _p4b.yomi && 'ふぶき' != _p4b.yomi && 'あたご' != _p4b.yomi && 'あまぎり' != _p4b.yomi && 'はまなみ' != _p4b.yomi || (_p4f.kaih += 2, _p4e = true), 0 == _p4e) return _p4d;
            var _p4g = _p4b.get_slotnums(500) + _p4b.get_slotnums(501);
            return _p4d.add(_p4f.multiply(_p4g)), _p4d;
        };
    },
    32666: (_p4h, _p4i, _p4j) => {
        'use strict';
        var _p4k = null;
        defineModule(_p4i);
        Object.defineProperty(_p4i, '__esModule', {
            'value': true
        }), _p4i.getSlotTokuYonPersonalEffect = void 0;
        var _p4l = _p4j(74496);
        _p4i.getSlotTokuYonPersonalEffect = function(_p4m) {
            var _p4n = null,
                _p4o = new _p4l.SlotItemEffectModel(),
                _p4p = false,
                _p4q = new _p4l.SlotItemEffectModel(),
                _p4r = 0,
                _p4s = _p4m.get_slotnums(525),
                _p4t = _p4m.get_slotnums(526),
                _p4u = _p4s + _p4t;
            if (13 != _p4m.stype && 14 != _p4m.stype || (_p4q.houg += 1, _p4q.raig += 2, _p4q.kaih -= 1, _p4p = true, _p4r = 1, 'い36' != _p4m.yomi && 'い41' != _p4m.yomi || (_p4o.houg += 2, _p4o.raig += 1, _p4o.houm += 2), _p4t >= 1 && (_p4o.houg += 1 * _p4t, _p4o.raig += 1 * _p4t, _p4o.houm += 1 * _p4t)), 0 == _p4p) return _p4o;
            if (_p4o.add(_p4q.multiply(_p4u)), 0 == _p4r) return _p4o;
            var _p4v = _p4m.get_each_level_over_nums([525, 526]),
                _p4w = _p4v.slot[525],
                _p4x = _p4v.slot[526];
            if (1 == _p4r) {
                if (_p4w[1] >= 1 || _p4x[1] >= 1) {
                    var _p4y = _p4w[1] + _p4x[1];
                    _p4o.raig += 1 * _p4y;
                }
                if (_p4x[2] >= 1) {
                    var _p4z = _p4w[2] + _p4x[2];
                    _p4o.houg += 1 * _p4z;
                }
                if (_p4w[3] >= 1 || _p4x[3] >= 1) {
                    var _p50 = _p4w[3] + _p4x[3];
                    _p4o.houm += 1 * _p50;
                }
                if (_p4x[4] >= 1) {
                    var _p51 = _p4w[4] + _p4x[4];
                    _p4o.raig += 1 * _p51;
                }
                if (_p4w[6] >= 1 || _p4x[6] >= 1) {
                    var _p52 = _p4w[6] + _p4x[6];
                    _p4o.houm += 1 * _p52;
                }
                if (_p4x[8] >= 1) {
                    var _p53 = _p4w[8] + _p4x[8];
                    _p4o.houg += 1 * _p53;
                }
                if (_p4w[10] >= 1 || _p4x[10] >= 1) {
                    var _p54 = _p4w[10] + _p4x[10];
                    _p4o.raig += 1 * _p54;
                }
            }
            return _p4o;
        };
    },
    29805: (_p55, _p56, _p57) => {
        'use strict';
        var _p58 = null;
        defineModule(_p56);
        Object.defineProperty(_p56, '__esModule', {
            'value': true
        }), _p56.getSlotType10PersonalEffect = void 0;
        var _p59 = _p57(74496);
        _p56.getSlotType10PersonalEffect = function(_p5a) {
            var _p5b = null,
                _p5c = new _p59.SlotItemEffectModel();
            return 662 == _p5a.ship_id || 663 == _p5a.ship_id || 668 == _p5a.ship_id ? (_p5c.houg += 2, _p5c.kaih += 1, _p5c.tais += 3) : 501 != _p5a.ship_id && 506 != _p5a.ship_id && 502 != _p5a.ship_id && 507 != _p5a.ship_id || (_p5c.houg += 2), _p5c;
        };
    },
    58913: (_p5d, _p5e, _p5f) => {
        'use strict';
        var _p5g = null;
        defineModule(_p5e);
        Object.defineProperty(_p5e, '__esModule', {
            'value': true
        }), _p5e.getSlotType11PersonalEffect = void 0;
        var _p5h = _p5f(74496);
        _p5e.getSlotType11PersonalEffect = function(_p5i) {
            var _p5j = null,
                _p5k = new _p5h.SlotItemEffectModel();
            return 662 == _p5i.ship_id || 663 == _p5i.ship_id || 668 == _p5i.ship_id ? (_p5k.houg += 1, _p5k.kaih += 1, _p5k.tais += 1) : 501 != _p5i.ship_id && 506 != _p5i.ship_id && 502 != _p5i.ship_id && 507 != _p5i.ship_id || (_p5k.houg += 1, _p5k.kaih += 1), _p5k;
        };
    },
    55421: (_p5l, _p5m, _p5n) => {
        'use strict';
        var _p5o = null;
        defineModule(_p5m);
        Object.defineProperty(_p5m, '__esModule', {
            'value': true
        }), _p5m.getSlotType25PersonalEffect = void 0;
        var _p5p = _p5n(74496);
        _p5m.getSlotType25PersonalEffect = function(_p5q) {
            var _p5r = null,
                _p5s = new _p5p.SlotItemEffectModel();
            return 662 == _p5q.ship_id ? (_p5s.tais += 4, _p5s.kaih += 1) : 663 != _p5q.ship_id && 668 != _p5q.ship_id || (_p5s.tais += 3, _p5s.kaih += 1), _p5s;
        };
    },
    272: function(_p5t, _p5u, _p5v) {
        'use strict';
        var _p5w = null;
        var _p5x = this && this.__importDefault || function(_p5y) {
            var _p5z = null;
            return _p5y && _p5y.__esModule ? _p5y : {
                'default': _p5y
            };
        };
        defineModule(_p5u);
        Object.defineProperty(_p5u, '__esModule', {
            'value': true
        }), _p5u.getSlotType9PersonalEffect = void 0;
        var _p60 = _p5v(74496),
            _p61 = _p5x(_p5v(18622));
        _p5u.getSlotType9PersonalEffect = function(_p62) {
            var _p63 = null,
                _p64 = new _p60.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_p62.stype]) return _p64;
            for (var _p65 = 0, _p66 = 0, _p67 = _p62.have_slot_ids(); _p66 < _p67.length; _p66++) {
                var _p68 = _p67[_p66];
                if (9 == _p61.default.model.slot.getMst(_p68).equipType)
                    for (var _p69 = 0, _p6a = _p62.have_slots_dict[parseInt(_p68)]; _p69 < _p6a.length; _p69++) {
                        var _p6b = _p6a[_p69].level;
                        _p65 < _p6b && (_p65 = _p6b);
                    }
            }
            return _p65 >= 2 && (_p64.saku += 1), _p65 >= 4 && (_p64.houg += 1), _p65 >= 6 && (_p64.saku += 1), _p65 >= 10 && (_p64.houg += 1, _p64.saku += 1), _p64;
        };
    },
    54518: (_p6c, _p6d, _p6e) => {
        'use strict';
        var _p6f = null;
        defineModule(_p6d);
        Object.defineProperty(_p6d, '__esModule', {
            'value': true
        }), _p6d.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _p6g = _p6e(74496);
        _p6d.getSlot_16InchMkXRensouhou_PersonalEffect = function(_p6h) {
            var _p6i = null,
                _p6j = new _p6g.SlotItemEffectModel();
            if (93 == _p6h.ctype) {
                var _p6k = _p6h.get_slotnums(330);
                _p6k > 0 && (_p6j.houg = _p6j.houg + 1 * _p6k);
                var _p6l = _p6h.get_slotnums(331);
                _p6l > 0 && (_p6j.houg = _p6j.houg + 1 * _p6l, 1496 != _p6h.ship_id && 918 != _p6h.ship_id || (_p6j.houg = _p6j.houg + 1 * _p6l, _p6j.kaih = _p6j.kaih + 1 * _p6l));
                var _p6m = _p6h.get_slotnums(332);
                return _p6m > 0 && (_p6j.houg = _p6j.houg + 1 * _p6m, 1496 != _p6h.ship_id && 918 != _p6h.ship_id || (_p6j.houg = _p6j.houg + 1 * _p6m, _p6j.kaih = _p6j.kaih + 1 * _p6m, _p6j.tyku = _p6j.tyku + 1 * _p6m)), _p6j;
            }
            var _p6n = new _p6g.SlotItemEffectModel();
            if (19 == _p6h.ctype ? (_p6n.houg = 1, (541 == _p6h.ship_id || 573 == _p6h.ship_id) && (_p6n.houg += 1)) : 88 == _p6h.ctype && (_p6n.houg = 1, 576 == _p6h.ship_id && (_p6n.houg += 1)), !_p6n.exists()) return _p6j;
            var _p6o = _p6h.get_slotnums(330) + _p6h.get_slotnums(331) + _p6h.get_slotnums(332);
            return _p6j = _p6n.multiply(_p6o);
        };
    },
    79353: (_p6p, _p6q, _p6r) => {
        'use strict';
        var _p6s = null;
        defineModule(_p6q);
        Object.defineProperty(_p6q, '__esModule', {
            'value': true
        }), _p6q.getZuiunSeriesEffect = void 0;
        var _p6t = _p6r(74496);
        _p6q.getZuiunSeriesEffect = function(_p6u) {
            var _p6v = null,
                _p6w = new _p6t.SlotItemEffectModel(),
                _p6x = false,
                _p6y = new _p6t.SlotItemEffectModel();
            if (662 == _p6u.ship_id ? (_p6w.houg += 2, _p6w.kaih += 1) : 663 == _p6u.ship_id || 668 == _p6u.ship_id || 501 == _p6u.ship_id || 506 == _p6u.ship_id ? (_p6w.houg += 2, _p6y.kaih += 1, _p6y.tyku += 1, _p6x = true) : 502 != _p6u.ship_id && 507 != _p6u.ship_id || (_p6w.houg += 1, _p6y.kaih += 1, _p6y.tyku += 1, _p6x = true), 0 == _p6x) return _p6w;
            var _p6z = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_p70) {
                var _p71 = null;
                _p6z += _p6u.get_slotnums(_p70);
            }), _p6w.add(_p6y.multiply(_p6z)), _p6w;
        };
    },
    89051: function(_p72, _p73, _p74) {
        'use strict';
        var _p75 = null;
        var _p76 = this && this.__createBinding || (Object.create ? function(_p77, _p78, _p79, _p7a) {
                var _p7b = null;
                void 0 === _p7a && (_p7a = _p79);
                var _p7c = Object.getOwnPropertyDescriptor(_p78, _p79);
                _p7c && !('get' in _p7c ? !_p78.__esModule : _p7c.writable || _p7c.configurable) || (_p7c = {
                    'enumerable': true,
                    'get': function() {
                        return _p78[_p79];
                    }
                }), Object.defineProperty(_p77, _p7a, _p7c);
            } : function(_p7d, _p7e, _p7f, _p7g) {
                void 0 === _p7g && (_p7g = _p7f), _p7d[_p7g] = _p7e[_p7f];
            }),
            _p7h = this && this.__exportStar || function(_p7i, _p7j) {
                var _p7k = null;
                for (var _p7l in _p7i) 'default' === _p7l || Object.prototype.hasOwnProperty.call(_p7j, _p7l) || _p76(_p7j, _p7i, _p7l);
            };
        defineModule(_p73);
        Object.defineProperty(_p73, '__esModule', {
            'value': true
        }), _p7h(_p74(34165), _p73), _p7h(_p74(81018), _p73), _p7h(_p74(56716), _p73), _p7h(_p74(17713), _p73), _p7h(_p74(54518), _p73), _p7h(_p74(66985), _p73), _p7h(_p74(88102), _p73), _p7h(_p74(66904), _p73), _p7h(_p74(98137), _p73), _p7h(_p74(69954), _p73), _p7h(_p74(22218), _p73), _p7h(_p74(88271), _p73), _p7h(_p74(23035), _p73), _p7h(_p74(2578), _p73), _p7h(_p74(17143), _p73), _p7h(_p74(16164), _p73), _p7h(_p74(35023), _p73), _p7h(_p74(44680), _p73), _p7h(_p74(45749), _p73), _p7h(_p74(37334), _p73), _p7h(_p74(29180), _p73), _p7h(_p74(68685), _p73), _p7h(_p74(26078), _p73), _p7h(_p74(20829), _p73), _p7h(_p74(6880), _p73), _p7h(_p74(17213), _p73), _p7h(_p74(40176), _p73), _p7h(_p74(32889), _p73), _p7h(_p74(11285), _p73), _p7h(_p74(96200), _p73), _p7h(_p74(9115), _p73), _p7h(_p74(37173), _p73), _p7h(_p74(21713), _p73), _p7h(_p74(59823), _p73), _p7h(_p74(57440), _p73), _p7h(_p74(29240), _p73), _p7h(_p74(40885), _p73), _p7h(_p74(19614), _p73), _p7h(_p74(87220), _p73), _p7h(_p74(81367), _p73), _p7h(_p74(13052), _p73), _p7h(_p74(94968), _p73), _p7h(_p74(48658), _p73), _p7h(_p74(1906), _p73), _p7h(_p74(61887), _p73), _p7h(_p74(47970), _p73), _p7h(_p74(31797), _p73), _p7h(_p74(45738), _p73), _p7h(_p74(34718), _p73), _p7h(_p74(69245), _p73), _p7h(_p74(18478), _p73), _p7h(_p74(2899), _p73), _p7h(_p74(57120), _p73), _p7h(_p74(74985), _p73), _p7h(_p74(9234), _p73), _p7h(_p74(30802), _p73), _p7h(_p74(97002), _p73), _p7h(_p74(16748), _p73), _p7h(_p74(53618), _p73), _p7h(_p74(72573), _p73), _p7h(_p74(8955), _p73), _p7h(_p74(98947), _p73), _p7h(_p74(44726), _p73), _p7h(_p74(93065), _p73), _p7h(_p74(85767), _p73), _p7h(_p74(38314), _p73), _p7h(_p74(59747), _p73), _p7h(_p74(40649), _p73), _p7h(_p74(13533), _p73), _p7h(_p74(12138), _p73), _p7h(_p74(30042), _p73), _p7h(_p74(33623), _p73), _p7h(_p74(85630), _p73), _p7h(_p74(88736), _p73), _p7h(_p74(49341), _p73), _p7h(_p74(74306), _p73), _p7h(_p74(83898), _p73), _p7h(_p74(71873), _p73), _p7h(_p74(53122), _p73), _p7h(_p74(51063), _p73), _p7h(_p74(91491), _p73), _p7h(_p74(85495), _p73), _p7h(_p74(65365), _p73), _p7h(_p74(98164), _p73), _p7h(_p74(38114), _p73), _p7h(_p74(21003), _p73), _p7h(_p74(77010), _p73), _p7h(_p74(39126), _p73), _p7h(_p74(72176), _p73), _p7h(_p74(33846), _p73), _p7h(_p74(97157), _p73), _p7h(_p74(63406), _p73), _p7h(_p74(66373), _p73), _p7h(_p74(19707), _p73), _p7h(_p74(63978), _p73), _p7h(_p74(92382), _p73), _p7h(_p74(78415), _p73), _p7h(_p74(23090), _p73), _p7h(_p74(18776), _p73), _p7h(_p74(39656), _p73), _p7h(_p74(66039), _p73), _p7h(_p74(64679), _p73), _p7h(_p74(95953), _p73), _p7h(_p74(86384), _p73), _p7h(_p74(65345), _p73), _p7h(_p74(46514), _p73), _p7h(_p74(81976), _p73), _p7h(_p74(89331), _p73), _p7h(_p74(73973), _p73), _p7h(_p74(21178), _p73), _p7h(_p74(5079), _p73), _p7h(_p74(95014), _p73), _p7h(_p74(53099), _p73), _p7h(_p74(76201), _p73), _p7h(_p74(24931), _p73), _p7h(_p74(60978), _p73), _p7h(_p74(74312), _p73), _p7h(_p74(54350), _p73), _p7h(_p74(26262), _p73), _p7h(_p74(45530), _p73), _p7h(_p74(44053), _p73), _p7h(_p74(65441), _p73), _p7h(_p74(33258), _p73), _p7h(_p74(92168), _p73), _p7h(_p74(85975), _p73), _p7h(_p74(98467), _p73), _p7h(_p74(88348), _p73), _p7h(_p74(21097), _p73), _p7h(_p74(37273), _p73), _p7h(_p74(72694), _p73), _p7h(_p74(62067), _p73), _p7h(_p74(87817), _p73), _p7h(_p74(93526), _p73), _p7h(_p74(33084), _p73), _p7h(_p74(97831), _p73), _p7h(_p74(45482), _p73), _p7h(_p74(272), _p73), _p7h(_p74(69377), _p73), _p7h(_p74(31127), _p73), _p7h(_p74(79353), _p73), _p7h(_p74(17274), _p73), _p7h(_p74(91302), _p73), _p7h(_p74(82229), _p73), _p7h(_p74(10325), _p73), _p7h(_p74(351), _p73), _p7h(_p74(4050), _p73), _p7h(_p74(29805), _p73), _p7h(_p74(58913), _p73), _p7h(_p74(55421), _p73), _p7h(_p74(87845), _p73), _p7h(_p74(17562), _p73), _p7h(_p74(78466), _p73), _p7h(_p74(40061), _p73), _p7h(_p74(9195), _p73), _p7h(_p74(93297), _p73), _p7h(_p74(15133), _p73), _p7h(_p74(55747), _p73), _p7h(_p74(33155), _p73), _p7h(_p74(79086), _p73), _p7h(_p74(2306), _p73), _p7h(_p74(14386), _p73), _p7h(_p74(80225), _p73), _p7h(_p74(17732), _p73), _p7h(_p74(47169), _p73), _p7h(_p74(77670), _p73), _p7h(_p74(79988), _p73), _p7h(_p74(92253), _p73), _p7h(_p74(74428), _p73), _p7h(_p74(16498), _p73), _p7h(_p74(2631), _p73), _p7h(_p74(27177), _p73), _p7h(_p74(94781), _p73), _p7h(_p74(53908), _p73), _p7h(_p74(79813), _p73), _p7h(_p74(16088), _p73), _p7h(_p74(93733), _p73), _p7h(_p74(69939), _p73), _p7h(_p74(33734), _p73), _p7h(_p74(34432), _p73), _p7h(_p74(97423), _p73), _p7h(_p74(23551), _p73), _p7h(_p74(99791), _p73), _p7h(_p74(21403), _p73), _p7h(_p74(6173), _p73), _p7h(_p74(23934), _p73), _p7h(_p74(53709), _p73), _p7h(_p74(88838), _p73), _p7h(_p74(99790), _p73), _p7h(_p74(18387), _p73), _p7h(_p74(70941), _p73), _p7h(_p74(35025), _p73), _p7h(_p74(2603), _p73), _p7h(_p74(78707), _p73), _p7h(_p74(89058), _p73), _p7h(_p74(84372), _p73), _p7h(_p74(96804), _p73), _p7h(_p74(33896), _p73), _p7h(_p74(11031), _p73), _p7h(_p74(71383), _p73), _p7h(_p74(55888), _p73), _p7h(_p74(2258), _p73), _p7h(_p74(38003), _p73), _p7h(_p74(92174), _p73), _p7h(_p74(43768), _p73), _p7h(_p74(73254), _p73), _p7h(_p74(55734), _p73), _p7h(_p74(81254), _p73), _p7h(_p74(65455), _p73), _p7h(_p74(70362), _p73), _p7h(_p74(61977), _p73), _p7h(_p74(43607), _p73), _p7h(_p74(68086), _p73), _p7h(_p74(78173), _p73), _p7h(_p74(22581), _p73), _p7h(_p74(20418), _p73), _p7h(_p74(93373), _p73), _p7h(_p74(13053), _p73), _p7h(_p74(47874), _p73), _p7h(_p74(42788), _p73), _p7h(_p74(57664), _p73), _p7h(_p74(44990), _p73), _p7h(_p74(17712), _p73), _p7h(_p74(83957), _p73), _p7h(_p74(78539), _p73), _p7h(_p74(96282), _p73), _p7h(_p74(49679), _p73), _p7h(_p74(45927), _p73), _p7h(_p74(90312), _p73), _p7h(_p74(86856), _p73), _p7h(_p74(78123), _p73), _p7h(_p74(25765), _p73), _p7h(_p74(29493), _p73), _p7h(_p74(28221), _p73), _p7h(_p74(14830), _p73), _p7h(_p74(54047), _p73), _p7h(_p74(76054), _p73), _p7h(_p74(90725), _p73), _p7h(_p74(93053), _p73), _p7h(_p74(88792), _p73), _p7h(_p74(33242), _p73), _p7h(_p74(59415), _p73), _p7h(_p74(3296), _p73), _p7h(_p74(32666), _p73), _p7h(_p74(36731), _p73), _p7h(_p74(30450), _p73), _p7h(_p74(85127), _p73), _p7h(_p74(87204), _p73), _p7h(_p74(2380), _p73), _p7h(_p74(96580), _p73);
    },
    82692: function(_p7m, _p7n, _p7o) {
        'use strict';
        var _p7p = null;
        var _p7q = this && this.__createBinding || (Object.create ? function(_p7r, _p7s, _p7t, _p7u) {
                var _p7v = null;
                void 0 === _p7u && (_p7u = _p7t);
                var _p7w = Object.getOwnPropertyDescriptor(_p7s, _p7t);
                _p7w && !('get' in _p7w ? !_p7s.__esModule : _p7w.writable || _p7w.configurable) || (_p7w = {
                    'enumerable': true,
                    'get': function() {
                        return _p7s[_p7t];
                    }
                }), Object.defineProperty(_p7r, _p7u, _p7w);
            } : function(_p7x, _p7y, _p7z, _p80) {
                void 0 === _p80 && (_p80 = _p7z), _p7x[_p80] = _p7y[_p7z];
            }),
            _p81 = this && this.__setModuleDefault || (Object.create ? function(_p82, _p83) {
                var _p84 = null;
                Object.defineProperty(_p82, 'default', {
                    'enumerable': true,
                    'value': _p83
                });
            } : function(_p85, _p86) {
                var _p87 = null;
                _p85.default = _p86;
            }),
            _p88 = this && this.__importStar || function(_p89) {
                var _p8a = null;
                if (_p89 && _p89.__esModule) return _p89;
                var _p8b = {};
                if (null != _p89) {
                    for (var _p8c in _p89) 'default' !== _p8c && Object.prototype.hasOwnProperty.call(_p89, _p8c) && _p7q(_p8b, _p89, _p8c);
                }
                return _p81(_p8b, _p89), _p8b;
            };
        defineModule(_p7n);
        Object.defineProperty(_p7n, '__esModule', {
            'value': true
        }), _p7n.SlotItemEffectUtil = void 0;
        var _p8d, _p8e = _p7o(73785),
            _p8f = _p88(_p7o(89051)),
            _p8g = _p7o(74496);
        ! function(_p8h) {
            var _p8i = null;
            _p8h.getSlotitemEffect = function(_p8j, _p8k) {
                var _p8l = null;
                if (null == _p8j || null == _p8k) return null;
                for (var _p8m = new _p8e.SlotItemEffectParamModel(_p8j, _p8k), _p8n = [{
                        'isExecute': Boolean(_p8m.get_type3_nums(9)),
                        'execFunc': _p8f.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_type3_nums(10)),
                        'execFunc': _p8f.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_type3_nums(11)),
                        'execFunc': _p8f.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_type3_nums(12)) || Boolean(_p8m.get_type3_nums(13)),
                        'execFunc': _p8f.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_type3_nums(25)),
                        'execFunc': _p8f.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_type3_nums(29)),
                        'execFunc': _p8f.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_type3_nums(42)),
                        'execFunc': _p8f.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(3)) || Boolean(_p8m.get_slotnums(122)),
                        'execFunc': _p8f.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(5)),
                        'execFunc': _p8f.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(12)),
                        'execFunc': _p8f.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(15)),
                        'execFunc': _p8f.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(18)) || Boolean(_p8m.get_slotnums(52)),
                        'execFunc': _p8f.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(19)),
                        'execFunc': _p8f.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(24)) || Boolean(_p8m.get_slotnums(57)) || Boolean(_p8m.get_slotnums(111)),
                        'execFunc': _p8f.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(26)) || Boolean(_p8m.get_slotnums(62)) || Boolean(_p8m.get_slotnums(79)) || Boolean(_p8m.get_slotnums(80)) || Boolean(_p8m.get_slotnums(81)) || Boolean(_p8m.get_slotnums(207)) || Boolean(_p8m.get_slotnums(208)),
                        'execFunc': _p8f.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(35)),
                        'execFunc': _p8f.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(39)) || Boolean(_p8m.get_slotnums(40)) || Boolean(_p8m.get_slotnums(49)) || Boolean(_p8m.get_slotnums(131)),
                        'execFunc': _p8f.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(30)) || Boolean(_p8m.get_slotnums(410)),
                        'execFunc': _p8f.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(44)) || Boolean(_p8m.get_slotnums(45)) || Boolean(_p8m.get_slotnums(287)) || Boolean(_p8m.get_slotnums(288)),
                        'execFunc': _p8f.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(46)) || Boolean(_p8m.get_slotnums(47)) || Boolean(_p8m.get_slotnums(149)) || Boolean(_p8m.get_slotnums(132)) || Boolean(_p8m.get_slotnums(438)),
                        'execFunc': _p8f.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(47)) || Boolean(_p8m.get_slotnums(438)),
                        'execFunc': _p8f.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(50)),
                        'execFunc': _p8f.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(58)),
                        'execFunc': _p8f.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(59)),
                        'execFunc': _p8f.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(60)) || Boolean(_p8m.get_slotnums(154)) || Boolean(_p8m.get_slotnums(219)),
                        'execFunc': _p8f.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(61)),
                        'execFunc': _p8f.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(61)),
                        'execFunc': _p8f.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(63)),
                        'execFunc': _p8f.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(66)) || Boolean(_p8m.get_slotnums(220)),
                        'execFunc': _p8f.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(67)),
                        'execFunc': _p8f.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(69)),
                        'execFunc': _p8f.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(70)),
                        'execFunc': _p8f.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(76)) || Boolean(_p8m.get_slotnums(114)),
                        'execFunc': _p8f.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(78)),
                        'execFunc': _p8f.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(79)) || Boolean(_p8m.get_slotnums(81)),
                        'execFunc': _p8f.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(82)),
                        'execFunc': _p8f.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(84)),
                        'execFunc': _p8f.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(85)),
                        'execFunc': _p8f.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(87)),
                        'execFunc': _p8f.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(90)),
                        'execFunc': _p8f.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(93)),
                        'execFunc': _p8f.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(94)),
                        'execFunc': _p8f.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(99)),
                        'execFunc': _p8f.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(100)),
                        'execFunc': _p8f.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(104)),
                        'execFunc': _p8f.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(106)) || Boolean(_p8m.get_slotnums(450)),
                        'execFunc': _p8f.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(115)),
                        'execFunc': _p8f.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(118)) || Boolean(_p8m.get_slotnums(521)),
                        'execFunc': _p8f.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(119)),
                        'execFunc': _p8f.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(121)),
                        'execFunc': _p8f.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(122)),
                        'execFunc': _p8f.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(123)),
                        'execFunc': _p8f.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(124)),
                        'execFunc': _p8f.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(128)) || Boolean(_p8m.get_slotnums(281)),
                        'execFunc': _p8f.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(129)),
                        'execFunc': _p8f.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(132)),
                        'execFunc': _p8f.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(136)),
                        'execFunc': _p8f.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(139)),
                        'execFunc': _p8f.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(143)),
                        'execFunc': _p8f.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(144)),
                        'execFunc': _p8f.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(147)) || Boolean(_p8m.get_slotnums(393)) || Boolean(_p8m.get_slotnums(394)),
                        'execFunc': _p8f.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(149)),
                        'execFunc': _p8f.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(165)) || Boolean(_p8m.get_slotnums(216)),
                        'execFunc': _p8f.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(171)),
                        'execFunc': _p8f.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(174)),
                        'execFunc': _p8f.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(179)),
                        'execFunc': _p8f.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(184)),
                        'execFunc': _p8f.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(188)),
                        'execFunc': _p8f.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(189)),
                        'execFunc': _p8f.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(194)),
                        'execFunc': _p8f.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(195)),
                        'execFunc': _p8f.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(204)),
                        'execFunc': _p8f.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(217)),
                        'execFunc': _p8f.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(220)),
                        'execFunc': _p8f.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(227)),
                        'execFunc': _p8f.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(228)),
                        'execFunc': _p8f.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(229)),
                        'execFunc': _p8f.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(234)),
                        'execFunc': _p8f.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(235)),
                        'execFunc': _p8f.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(237)) || Boolean(_p8m.get_slotnums(322)) || Boolean(_p8m.get_slotnums(323)) || Boolean(_p8m.get_slotnums(490)),
                        'execFunc': _p8f.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(237)),
                        'execFunc': _p8f.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(238)) || Boolean(_p8m.get_slotnums(239)),
                        'execFunc': _p8f.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(242)),
                        'execFunc': _p8f.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(243)),
                        'execFunc': _p8f.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(244)),
                        'execFunc': _p8f.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(245)) || Boolean(_p8m.get_slotnums(246)) || Boolean(_p8m.get_slotnums(468)),
                        'execFunc': _p8f.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(247)),
                        'execFunc': _p8f.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(252)),
                        'execFunc': _p8f.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(266)),
                        'execFunc': _p8f.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(266)),
                        'execFunc': _p8f.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(267)) || Boolean(_p8m.get_slotnums(366)),
                        'execFunc': _p8f.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(267)) || Boolean(_p8m.get_slotnums(366)),
                        'execFunc': _p8f.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(268)),
                        'execFunc': _p8f.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(271)),
                        'execFunc': _p8f.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(275)),
                        'execFunc': _p8f.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(277)),
                        'execFunc': _p8f.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(278)),
                        'execFunc': _p8f.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(279)),
                        'execFunc': _p8f.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(282)),
                        'execFunc': _p8f.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(283)),
                        'execFunc': _p8f.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(285)),
                        'execFunc': _p8f.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(286)),
                        'execFunc': _p8f.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(286)),
                        'execFunc': _p8f.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(286)),
                        'execFunc': _p8f.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(287)),
                        'execFunc': _p8f.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(288)),
                        'execFunc': _p8f.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(289)),
                        'execFunc': _p8f.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(290)),
                        'execFunc': _p8f.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(291)),
                        'execFunc': _p8f.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(292)),
                        'execFunc': _p8f.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(293)),
                        'execFunc': _p8f.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(294)),
                        'execFunc': _p8f.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(295)),
                        'execFunc': _p8f.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(296)),
                        'execFunc': _p8f.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(297)),
                        'execFunc': _p8f.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(298)) || Boolean(_p8m.get_slotnums(299)) || Boolean(_p8m.get_slotnums(300)),
                        'execFunc': _p8f.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(301)),
                        'execFunc': _p8f.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(302)),
                        'execFunc': _p8f.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(303)),
                        'execFunc': _p8f.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(304)),
                        'execFunc': _p8f.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(305)) || Boolean(_p8m.get_slotnums(306)),
                        'execFunc': _p8f.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(307)),
                        'execFunc': _p8f.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(308)),
                        'execFunc': _p8f.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(310)) || Boolean(_p8m.get_slotnums(518)),
                        'execFunc': _p8f.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(313)),
                        'execFunc': _p8f.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(314)),
                        'execFunc': _p8f.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(315)),
                        'execFunc': _p8f.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(316)),
                        'execFunc': _p8f.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(317)),
                        'execFunc': _p8f.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(318)),
                        'execFunc': _p8f.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(319)),
                        'execFunc': _p8f.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(320)),
                        'execFunc': _p8f.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(322)),
                        'execFunc': _p8f.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(323)),
                        'execFunc': _p8f.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(324)) || Boolean(_p8m.get_slotnums(325)),
                        'execFunc': _p8f.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(326)),
                        'execFunc': _p8f.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(327)),
                        'execFunc': _p8f.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(328)),
                        'execFunc': _p8f.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(329)),
                        'execFunc': _p8f.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(330)) || Boolean(_p8m.get_slotnums(331)) || Boolean(_p8m.get_slotnums(332)),
                        'execFunc': _p8f.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(335)),
                        'execFunc': _p8f.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(336)),
                        'execFunc': _p8f.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(337)),
                        'execFunc': _p8f.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(338)),
                        'execFunc': _p8f.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(339)),
                        'execFunc': _p8f.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(340)),
                        'execFunc': _p8f.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(341)),
                        'execFunc': _p8f.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(342)),
                        'execFunc': _p8f.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(343)),
                        'execFunc': _p8f.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(344)),
                        'execFunc': _p8f.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(345)),
                        'execFunc': _p8f.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(346)),
                        'execFunc': _p8f.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(347)),
                        'execFunc': _p8f.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(356)) || Boolean(_p8m.get_slotnums(357)),
                        'execFunc': _p8f.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(358)),
                        'execFunc': _p8f.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(359)),
                        'execFunc': _p8f.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(360)) || Boolean(_p8m.get_slotnums(361)),
                        'execFunc': _p8f.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(362)) || Boolean(_p8m.get_slotnums(363)),
                        'execFunc': _p8f.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(364)),
                        'execFunc': _p8f.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(365)),
                        'execFunc': _p8f.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(367)),
                        'execFunc': _p8f.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(368)),
                        'execFunc': _p8f.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(369)),
                        'execFunc': _p8f.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(370)),
                        'execFunc': _p8f.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(371)),
                        'execFunc': _p8f.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(372)),
                        'execFunc': _p8f.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(373)),
                        'execFunc': _p8f.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(374)),
                        'execFunc': _p8f.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(375)),
                        'execFunc': _p8f.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(376)),
                        'execFunc': _p8f.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(377)),
                        'execFunc': _p8f.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(378)),
                        'execFunc': _p8f.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(379)),
                        'execFunc': _p8f.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(380)),
                        'execFunc': _p8f.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(381)),
                        'execFunc': _p8f.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(382)) || Boolean(_p8m.get_slotnums(509)),
                        'execFunc': _p8f.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(383)),
                        'execFunc': _p8f.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(384)),
                        'execFunc': _p8f.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(385)),
                        'execFunc': _p8f.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(386)),
                        'execFunc': _p8f.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(387)),
                        'execFunc': _p8f.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(389)),
                        'execFunc': _p8f.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(390)),
                        'execFunc': _p8f.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(391)),
                        'execFunc': _p8f.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(392)),
                        'execFunc': _p8f.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(397)),
                        'execFunc': _p8f.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(398)),
                        'execFunc': _p8f.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(399)),
                        'execFunc': _p8f.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(400)),
                        'execFunc': _p8f.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(407)),
                        'execFunc': _p8f.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(408)),
                        'execFunc': _p8f.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(409)),
                        'execFunc': _p8f.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(411)),
                        'execFunc': _p8f.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(412)),
                        'execFunc': _p8f.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(413)),
                        'execFunc': _p8f.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(414)),
                        'execFunc': _p8f.getSlot414PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(415)),
                        'execFunc': _p8f.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(419)),
                        'execFunc': _p8f.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(420)),
                        'execFunc': _p8f.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(421)),
                        'execFunc': _p8f.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(422)),
                        'execFunc': _p8f.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(423)),
                        'execFunc': _p8f.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(424)),
                        'execFunc': _p8f.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(425)),
                        'execFunc': _p8f.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(426)) || Boolean(_p8m.get_slotnums(427)) || Boolean(_p8m.get_slotnums(428)) || Boolean(_p8m.get_slotnums(429)),
                        'execFunc': _p8f.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(430)),
                        'execFunc': _p8f.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(434)) || Boolean(_p8m.get_slotnums(435)),
                        'execFunc': _p8f.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(437)),
                        'execFunc': _p8f.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(438)),
                        'execFunc': _p8f.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(439)),
                        'execFunc': _p8f.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(440)) || Boolean(_p8m.get_slotnums(441)),
                        'execFunc': _p8f.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(442)) || Boolean(_p8m.get_slotnums(443)),
                        'execFunc': _p8f.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(447)),
                        'execFunc': _p8f.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(450)),
                        'execFunc': _p8f.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(451)),
                        'execFunc': _p8f.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(455)),
                        'execFunc': _p8f.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(456)),
                        'execFunc': _p8f.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(457)) || Boolean(_p8m.get_slotnums(461)),
                        'execFunc': _p8f.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(458)),
                        'execFunc': _p8f.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(463)),
                        'execFunc': _p8f.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(464)),
                        'execFunc': _p8f.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(465)),
                        'execFunc': _p8f.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(466)),
                        'execFunc': _p8f.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(467)),
                        'execFunc': _p8f.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(470)) || Boolean(_p8m.get_slotnums(529)),
                        'execFunc': _p8f.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(471)),
                        'execFunc': _p8f.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(472)),
                        'execFunc': _p8f.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(473)),
                        'execFunc': _p8f.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(474)),
                        'execFunc': _p8f.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(478)),
                        'execFunc': _p8f.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(483)),
                        'execFunc': _p8f.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(485)),
                        'execFunc': _p8f.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(486)),
                        'execFunc': _p8f.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(487)),
                        'execFunc': _p8f.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(488)),
                        'execFunc': _p8f.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(489)) || Boolean(_p8m.get_slotnums(491)),
                        'execFunc': _p8f.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(500)) || Boolean(_p8m.get_slotnums(501)),
                        'execFunc': _p8f.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(502)),
                        'execFunc': _p8f.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(503)),
                        'execFunc': _p8f.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(505)),
                        'execFunc': _p8f.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(506)),
                        'execFunc': _p8f.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(507)) || Boolean(_p8m.get_slotnums(508)),
                        'execFunc': _p8f.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(510)),
                        'execFunc': _p8f.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(511)) || Boolean(_p8m.get_slotnums(512)),
                        'execFunc': _p8f.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(517)),
                        'execFunc': _p8f.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(518)),
                        'execFunc': _p8f.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(519)),
                        'execFunc': _p8f.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(520)),
                        'execFunc': _p8f.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(521)),
                        'execFunc': _p8f.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(522)) || Boolean(_p8m.get_slotnums(523)),
                        'execFunc': _p8f.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(524)),
                        'execFunc': _p8f.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(525)) || Boolean(_p8m.get_slotnums(526)),
                        'execFunc': _p8f.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(527)),
                        'execFunc': _p8f.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_p8m.get_slotnums(528)),
                        'execFunc': _p8f.getSlot528PersonalEffect
                    }], _p8o = new _p8g.SlotItemEffectModel(), _p8p = 0, _p8q = _p8n; _p8p < _p8q.length; _p8p++) {
                    var _p8r = _p8q[_p8p];
                    if (_p8r.isExecute) {
                        var _p8s = _p8r.execFunc(_p8m);
                        0, _p8o.add(_p8s);
                    }
                }
                return _p8o;
            };
        }(_p8d || (_p7n.SlotItemEffectUtil = _p8d = {}));
    },
}
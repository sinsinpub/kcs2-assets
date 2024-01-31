{
    73785: function(_l96, _l97, _l98) {
        'use strict';
        var _l99 = null;
        var _l9a = this && this.__importDefault || function(_l9b) {
            var _l9c = null;
            return _l9b && _l9b.__esModule ? _l9b : {
                'default': _l9b
            };
        };
        defineModule(_l97);
        Object.defineProperty(_l97, '__esModule', {
            'value': !0
        }), _l97.SlotItemEffectParamModel = void 0;
        var _l9d = _l9a(_l98(18622)),
            _l9e = (function() {
                var _l9f = null;

                function _l9g(_l9h, _l9i) {
                    var _l9j = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _l9k = {}, _l9l = {}, _l9m = {}, _l9n = 0, _l9o = _l9i; _l9n < _l9o.length; _l9n++) {
                        var _l9p = _l9o[_l9n];
                        null != _l9p && (null == _l9k[_l9p.mstID] && (_l9k[_l9p.mstID] = new Array()), _l9k[_l9p.mstID].push(_l9p), null == _l9l[_l9p.mstID] ? _l9l[_l9p.mstID] = 1 : _l9l[_l9p.mstID] += 1, null == _l9m[_l9p.equipType] ? _l9m[_l9p.equipType] = 1 : _l9m[_l9p.equipType] += 1);
                    }
                    this._have_slots_dict = _l9k, this._have_slotnums_dict = _l9l, this._have_type3nums_dict = _l9m, this._ship_id = _l9h.mstID, this._yomi = _l9h.yomi, this._stype = _l9h.shipTypeID, this._ctype = _l9h.getClassType();
                }
                return Object.defineProperty(_l9g.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _l9q = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': !1,
                    'configurable': !0
                }), Object.defineProperty(_l9g.prototype, 'ship_id', {
                    'get': function() {
                        var _l9r = null;
                        return this._ship_id;
                    },
                    'enumerable': !1,
                    'configurable': !0
                }), Object.defineProperty(_l9g.prototype, 'yomi', {
                    'get': function() {
                        var _l9s = null;
                        return this._yomi;
                    },
                    'enumerable': !1,
                    'configurable': !0
                }), Object.defineProperty(_l9g.prototype, 'stype', {
                    'get': function() {
                        var _l9t = null;
                        return this._stype;
                    },
                    'enumerable': !1,
                    'configurable': !0
                }), Object.defineProperty(_l9g.prototype, 'ctype', {
                    'get': function() {
                        var _l9u = null;
                        return this._ctype;
                    },
                    'enumerable': !1,
                    'configurable': !0
                }), _l9g.prototype.get_slotnums = function(_l9v) {
                    var _l9w = null;
                    return null == this._have_slotnums_dict[_l9v] ? 0 : this._have_slotnums_dict[_l9v];
                }, _l9g.prototype.get_type3_nums = function(_l9x) {
                    var _l9y = null;
                    return null == this._have_type3nums_dict[_l9x] ? 0 : this._have_type3nums_dict[_l9x];
                }, _l9g.prototype.have_slot_ids = function() {
                    var _l9z = null;
                    return Object.keys(this._have_slots_dict);
                }, _l9g.prototype.get_each_level_nums = function(_la0) {
                    var _la1 = null,
                        _la2 = this._have_slots_dict[_la0],
                        _la3 = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _la2)
                        for (var _la4 = 0, _la5 = _la2; _la4 < _la5.length; _la4++) {
                            _la3[_la5[_la4].level]++;
                        }
                    return _la3;
                }, _l9g.prototype.get_each_level_over_nums = function(_la6) {
                    var _la7 = null;
                    for (var _la8 = this, _la9 = [], _laa = function(_lab) {
                            var _lac = null;
                            if (_la9[_lab] = Array.apply(null, new Array(_lad.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _lad.have_slots_dict[_lab]) return 'continue';
                            _lad.get_each_level_nums(_lab).forEach(function(_lae, _laf) {
                                var _lag = null;
                                for (var _lah = 1; _lah <= _la8.SLOT_LEVEL_MAX; _lah++) _laf >= _lah && (_la9[_lab][_lah] += _lae);
                            });
                        }, _lad = this, _lai = 0, _laj = _la6; _lai < _laj.length; _lai++) {
                        _laa(_laj[_lai]);
                    }
                    return _la9;
                }, _l9g.prototype.get_have_rader_nums = function() {
                    var _lak = null;
                    for (var _lal = 0, _lam = 0, _lan = 0, _lao = this.have_slot_ids(); _lan < _lao.length; _lan++) {
                        var _lap = _lao[_lan],
                            _laq = _l9d.default.model.slot.getMst(_lap),
                            _lar = _laq.equipType;
                        12 != _lar && 13 != _lar || (_laq.sakuteki >= 5 && (_lal += this.get_slotnums(parseInt(_lap))), _laq.taiku >= 2 && (_lam += this.get_slotnums(parseInt(_lap))));
                    }
                    return {
                        'water_rader': _lal,
                        'air_rader': _lam
                    };
                }, _l9g.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _l9g.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _l9g.prototype.getCountryName = function() {
                    var _las = null;
                    return null == _l9g.SHIP_COUNTRY[this._ctype] ? '' : _l9g.SHIP_COUNTRY[this._ctype];
                }, _l9g.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _l9g.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _l9g.SHIP_COUNTRY = {
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
                }, _l9g;
            }());
        _l97.SlotItemEffectParamModel = _l9e;
    },
    16718: (_lm0, _lm1, _lm2) => {
        'use strict';
        var _lm3 = null;
        defineModule(_lm1);
        Object.defineProperty(_lm1, '__esModule', {
            'value': !0
        }), _lm1.TaskGetSlotItemEffectParams = void 0;
        var _lm4 = _lm2(74496),
            _lm5 = _lm2(82692),
            _lm6 = (function() {
                var _lm7 = null;

                function _lm8(_lm9, _lma, _lmb) {
                    var _lmc = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lm9;
                    var _lmd = _lm9.getSlotitems();
                    _lmd.push(_lm9.getSlotitemEx());
                    var _lme = _lmd.map(function(_lmf) {
                        var _lmg = null;
                        return null == _lmf || null != _lma && _lmf.memID == _lma.memID ? null : _lmf;
                    });
                    this._removeSlots = _lme;
                    var _lmh = _lme.map(function(_lmi) {
                        return _lmi;
                    });
                    _lmh.push(_lmb), this._toSlots = _lmh;
                }
                return _lm8.prototype.start = function() {
                    var _lmj = null,
                        _lmk = this._ship.getSlotitems();
                    _lmk.push(this._ship.getSlotitemEx());
                    var _lml = _lm5.SlotItemEffectUtil.getSlotitemEffect(this._ship, _lmk),
                        _lmm = _lm5.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lmn = _lm5.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_lml, _lmm),
                        'toSlotItemEffect': this._subEffectModels(_lmn, _lmm)
                    };
                }, _lm8.prototype._subEffectModels = function(_lmo, _lmp) {
                    var _lmq = null,
                        _lmr = new _lm4.SlotItemEffectModel();
                    return _lmr.houg = _lmo.houg - _lmp.houg, _lmr.raig = _lmo.raig - _lmp.raig, _lmr.tyku = _lmo.tyku - _lmp.tyku, _lmr.souk = _lmo.souk - _lmp.souk, _lmr.kaih = _lmo.kaih - _lmp.kaih, _lmr.tais = _lmo.tais - _lmp.tais, _lmr.saku = _lmo.saku - _lmp.saku, _lmr.baku = _lmo.baku - _lmp.baku, _lmr.houm = _lmo.houm - _lmp.houm, _lmr.leng = _lmo.leng - _lmp.leng, _lmr;
                }, _lm8;
            }());
        _lm1.TaskGetSlotItemEffectParams = _lm6;
    },
    69377: function(_mah, _mai, _maj) {
        'use strict';
        var _mak = null;
        var _mal = this && this.__importDefault || function(_mam) {
            var _man = null;
            return _mam && _mam.__esModule ? _mam : {
                'default': _mam
            };
        };
        defineModule(_mai);
        Object.defineProperty(_mai, '__esModule', {
            'value': !0
        }), _mai.get25mmMachinegunEffect = void 0;
        var _mao = _maj(74496),
            _map = _mal(_maj(18622));
        _mai.get25mmMachinegunEffect = function(_maq) {
            var _mar = null,
                _mas = new _mao.SlotItemEffectModel(),
                _mat = !1,
                _mau = new _mao.SlotItemEffectModel(),
                _mav = 0;
            if (662 == _maq.ship_id || 663 == _maq.ship_id ? (_mau.tyku += 2, _mau.kaih += 1, _mat = !0) : 668 == _maq.ship_id && (_mau.tyku += 3, _mau.kaih += 2, _mat = !0), 56 == _maq.ctype && (_mau.houg += 1, _mau.tyku += 2, _mau.kaih += 2, _mat = !0, _mav = 1), 0 == _mat) return _mas;
            var _maw = _maq.get_slotnums(39) + _maq.get_slotnums(40) + _maq.get_slotnums(49) + _maq.get_slotnums(131);
            if (_mas.add(_mau.multiply(_maw)), 0 == _mav) return _mas;
            for (var _max = 0, _may = 0, _maz = _maq.have_slot_ids(); _may < _maz.length; _may++) {
                var _mb0 = _maz[_may],
                    _mb1 = _map.default.model.slot.getMst(_mb0),
                    _mb2 = _mb1.equipType;
                12 != _mb2 && 13 != _mb2 || (_mb1.sakuteki >= 5 && _maq.get_slotnums(parseInt(_mb0)), _mb1.taiku >= 2 && (_max += _maq.get_slotnums(parseInt(_mb0))));
            }
            return _max >= 1 && 1 == _mav && (_mas.tyku += 2, _mas.kaih += 2), _mas;
        };
    },
    77670: function(_mb3, _mb4, _mb5) {
        'use strict';
        var _mb6 = null;
        var _mb7 = this && this.__importDefault || function(_mb8) {
            var _mb9 = null;
            return _mb8 && _mb8.__esModule ? _mb8 : {
                'default': _mb8
            };
        };
        defineModule(_mb4);
        Object.defineProperty(_mb4, '__esModule', {
            'value': !0
        }), _mb4.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mba = _mb5(74496),
            _mbb = _mb7(_mb5(18622));
        _mb4.get8cmAntiAircraftGunPersonalEffect = function(_mbc) {
            var _mbd = null,
                _mbe = new _mba.SlotItemEffectModel(),
                _mbf = !1,
                _mbg = new _mba.SlotItemEffectModel(),
                _mbh = 0;
            if (501 != _mbc.ship_id && 506 != _mbc.ship_id && 502 != _mbc.ship_id && 507 != _mbc.ship_id || (_mbg.tyku += 2, _mbg.kaih += 1, _mbf = !0, _mbh = 1), 501 != _mbc.ship_id && 506 != _mbc.ship_id || (_mbg.houg += 1, _mbg.tyku += 2, _mbg.kaih += 2, _mbf = !0, _mbh = 1), 0 == _mbf) return _mbe;
            var _mbi = _mbc.get_slotnums(66) + _mbc.get_slotnums(220);
            _mbe.add(_mbg.multiply(_mbi));
            for (var _mbj = 0, _mbk = 0, _mbl = _mbc.have_slot_ids(); _mbk < _mbl.length; _mbk++) {
                var _mbm = _mbl[_mbk],
                    _mbn = _mbb.default.model.slot.getMst(_mbm),
                    _mbo = _mbn.equipType;
                12 != _mbo && 13 != _mbo || (_mbn.sakuteki >= 5 && _mbc.get_slotnums(parseInt(_mbm)), _mbn.taiku >= 2 && (_mbj += _mbc.get_slotnums(parseInt(_mbm))));
            }
            return 0 == _mbh || _mbj >= 1 && (_mbe.tyku += 1, _mbe.kaih += 2), _mbe;
        };
    },
    34165: (_mbp, _mbq, _mbr) => {
        'use strict';
        var _mbs = null;
        defineModule(_mbq);
        Object.defineProperty(_mbq, '__esModule', {
            'value': !0
        }), _mbq.getCamouflageSlotPersonalEffect = void 0;
        var _mbt = _mbr(74496);
        _mbq.getCamouflageSlotPersonalEffect = function(_mbu) {
            var _mbv = null,
                _mbw = new _mbt.SlotItemEffectModel();
            return 'きそ' != _mbu.yomi && 'たま' != _mbu.yomi || (_mbw.kaih = 7, _mbw.souk = 2), _mbw;
        };
    },
    31127: (_mbx, _mby, _mbz) => {
        'use strict';
        var _mc0 = null;
        defineModule(_mby);
        Object.defineProperty(_mby, '__esModule', {
            'value': !0
        }), _mby.getHighZuiunSeriesEffect = void 0;
        var _mc1 = _mbz(74496);
        _mby.getHighZuiunSeriesEffect = function(_mc2) {
            var _mc3 = null,
                _mc4 = new _mc1.SlotItemEffectModel(),
                _mc5 = !1,
                _mc6 = new _mc1.SlotItemEffectModel();
            if (662 == _mc2.ship_id ? (_mc4.houg += 3, _mc4.kaih += 1) : 663 == _mc2.ship_id || 668 == _mc2.ship_id || 501 == _mc2.ship_id || 506 == _mc2.ship_id || 553 == _mc2.ship_id || 554 == _mc2.ship_id ? (_mc6.houg += 3, _mc6.kaih += 2, _mc6.tyku += 1, _mc5 = !0) : 502 != _mc2.ship_id && 507 != _mc2.ship_id || (_mc6.houg += 2, _mc6.kaih += 2, _mc6.tyku += 1, _mc5 = !0), 0 == _mc5) return _mc4;
            var _mc7 = 0;
            return [237, 322, 323, 490].forEach(function(_mc8) {
                var _mc9 = null;
                _mc7 += _mc2.get_slotnums(_mc8);
            }), _mc4.add(_mc6.multiply(_mc7)), _mc4;
        };
    },
    81018: function(_mca, _mcb, _mcc) {
        'use strict';
        var _mcd = null;
        var _mce = this && this.__importDefault || function(_mcf) {
            var _mcg = null;
            return _mcf && _mcf.__esModule ? _mcf : {
                'default': _mcf
            };
        };
        defineModule(_mcb);
        Object.defineProperty(_mcb, '__esModule', {
            'value': !0
        }), _mcb.getRaderPrivateEffect = void 0;
        var _mch = _mcc(74496),
            _mci = _mce(_mcc(18622));
        _mcb.getRaderPrivateEffect = function(_mcj) {
            var _mck = null,
                _mcl = new _mch.SlotItemEffectModel(),
                _mcm = 0,
                _mcn = 0;
            if (569 == _mcj.ship_id || 648 == _mcj.ship_id || 961 == _mcj.ship_id || 951 == _mcj.ship_id) _mcm = 1;
            else {
                if (955 != _mcj.ship_id && 960 != _mcj.ship_id) return _mcl;
                _mcm = 2, _mcn = 1;
            }
            for (var _mco = 0, _mcp = 0, _mcq = _mcj.have_slot_ids(); _mcp < _mcq.length; _mcp++) {
                var _mcr = _mcq[_mcp],
                    _mcs = _mci.default.model.slot.getMst(_mcr),
                    _mct = _mcs.equipType;
                12 != _mct && 13 != _mct || (_mcs.sakuteki >= 5 && _mcj.get_slotnums(parseInt(_mcr)), _mcs.taiku >= 2 && (_mco += _mcj.get_slotnums(parseInt(_mcr))));
            }
            if (_mco > 0 && (1 == _mcm ? (_mcl.houg += 1, _mcl.kaih += 3, _mcl.tyku += 2) : 2 == _mcm && (_mcl.tyku += 2, _mcl.kaih += 1)), 0 == _mcn) return _mcl;
            for (var _mcu = [], _mcv = function(_mcw) {
                    var _mcx = null;
                    if (null == _mcj.have_slots_dict[_mcw]) return 'continue';
                    var _mcy = _mcj.get_each_level_nums(_mcw);
                    null == _mcu[_mcw] && (_mcu[_mcw] = []), _mcy.forEach(function(_mcz, _md0) {
                        var _md1 = null;
                        for (var _md2 = 1; _md2 <= _mcj.SLOT_LEVEL_MAX; _md2++) null == _mcu[_mcw][_md2] && (_mcu[_mcw][_md2] = 0), _md0 >= _md2 && (_mcu[_mcw][_md2] += _mcz);
                    });
                }, _md3 = 0, _md4 = [450]; _md3 < _md4.length; _md3++) {
                _mcv(_md4[_md3]);
            }
            var _md5 = null != _mcu[450] ? _mcu[450][4] : 0;
            return 1 == _mcn && _md5 > 0 && (_mcl.houg += 1, _mcl.houm += 1, _mcl.tyku += 1, _mcl.kaih += 2), _mcl;
        };
    },
    56716: (_md6, _md7, _md8) => {
        'use strict';
        var _md9 = null;
        defineModule(_md7);
        Object.defineProperty(_md7, '__esModule', {
            'value': !0
        }), _md7.getSearchLightEffect = void 0;
        var _mda = _md8(74496);
        _md7.getSearchLightEffect = function(_mdb) {
            var _mdc = null,
                _mdd = new _mda.SlotItemEffectModel(),
                _mde = _mdb.get_type3_nums(29);
            return 'ひえい' == _mdb.yomi || 'きりしま' == _mdb.yomi || 'ちょうかい' == _mdb.yomi || 'じんつう' == _mdb.yomi || 'あかつき' == _mdb.yomi ? (_mdd.houg += 4, _mdd.kaih -= 1) : 'あきぐも' == _mdb.yomi ? _mdd.houg = _mdd.houg + 2 * _mde : 'ゆきかぜ' == _mdb.yomi && (_mdd.houg = _mdd.houg + _mde, _mdd.tyku = _mdd.tyku + _mde), 662 != _mdb.ship_id && 663 != _mdb.ship_id && 668 != _mdb.ship_id || (_mdd.raig += 2, _mdd.houg += 4), 'じんつう' == _mdb.yomi && (_mdd.raig += 8, _mdd.houg += 4), _mdd;
        };
    },
    17713: (_mdf, _mdg, _mdh) => {
        'use strict';
        var _mdi = null;
        defineModule(_mdg);
        Object.defineProperty(_mdg, '__esModule', {
            'value': !0
        }), _mdg.getSearchLightLargeEffect = void 0;
        var _mdj = _mdh(74496);
        _mdg.getSearchLightLargeEffect = function(_mdk) {
            var _mdl = null,
                _mdm = new _mdj.SlotItemEffectModel();
            'ひえい' == _mdk.yomi || 'きりしま' == _mdk.yomi ? (_mdm.houg += 6, _mdm.kaih -= 2) : 'やまと' != _mdk.yomi && 'むさし' != _mdk.yomi || (_mdm.houg += 4, _mdm.kaih -= 1);
            var _mdn = _mdk.get_slotnums(174);
            return 592 == _mdk.ship_id && (_mdm.houg += 3, _mdm.raig += 3, _mdn > 0 && (_mdm.raig += 5)), _mdm;
        };
    },
    17213: (_mdo, _mdp, _mdq) => {
        'use strict';
        var _mdr = null;
        defineModule(_mdp);
        Object.defineProperty(_mdp, '__esModule', {
            'value': !0
        }), _mdp.getSlot100PersonalEffect = void 0;
        var _mds = _mdq(74496);
        _mdp.getSlot100PersonalEffect = function(_mdt) {
            var _mdu = null,
                _mdv = new _mds.SlotItemEffectModel(),
                _mdw = new _mds.SlotItemEffectModel();
            if (553 == _mdt.ship_id) _mdw.houg = 4;
            else {
                if (554 != _mdt.ship_id) return 196 == _mdt.ship_id ? (_mdv.houg = 3, _mdv) : 197 == _mdt.ship_id ? (_mdv.houg = 6, _mdv) : _mdv;
                _mdw.houg = 4;
            }
            var _mdx = _mdt.get_slotnums(100);
            return _mdv = _mdw.multiply(_mdx);
        };
    },
    40176: (_mdy, _mdz, _me0) => {
        'use strict';
        var _me1 = null;
        defineModule(_mdz);
        Object.defineProperty(_mdz, '__esModule', {
            'value': !0
        }), _mdz.getSlot104PersonalEffect = void 0;
        var _me2 = _me0(74496);
        _mdz.getSlot104PersonalEffect = function(_me3) {
            var _me4 = null,
                _me5 = new _me2.SlotItemEffectModel(),
                _me6 = new _me2.SlotItemEffectModel();
            if (149 == _me3.ship_id || 591 == _me3.ship_id) _me6.houg = 2;
            else {
                if (150 == _me3.ship_id || 592 == _me3.ship_id) _me6.houg = 1;
                else {
                    if (152 == _me3.ship_id) _me6.houg = 1;
                    else {
                        if (151 != _me3.ship_id && 593 != _me3.ship_id && 954 != _me3.ship_id) return _me5;
                        _me6.houg = 2, _me6.tyku = 1, _me6.kaih = 2;
                    }
                }
            }
            var _me7 = _me3.get_slotnums(104);
            return _me5 = _me6.multiply(_me7);
        };
    },
    32889: (_me8, _me9, _mea) => {
        'use strict';
        var _meb = null;
        defineModule(_me9);
        Object.defineProperty(_me9, '__esModule', {
            'value': !0
        }), _me9.getSlot106PersonalEffect = void 0;
        var _mec = _mea(74496);
        _me9.getSlot106PersonalEffect = function(_med) {
            var _mee = null,
                _mef = new _mec.SlotItemEffectModel(),
                _meg = new _mec.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961].indexOf(_med.ship_id) >= 0 ? (_meg.houg += 1, _meg.tyku += 2, _meg.souk += 1, _meg.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_med.yomi) >= 0 ? (_meg.tyku += 1, _meg.souk += 1, _meg.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_med.yomi) >= 0 && (_meg.tyku += 2, _meg.souk += 1, _meg.kaih += 2, 663 != _med.ship_id && 668 != _med.ship_id || (_mef.houg += 1, _mef.tyku += 1, _mef.souk += 1, _mef.kaih += 1), 668 == _med.ship_id && (_mef.tyku += 1, _mef.kaih += 1)), !_meg.exists()) return _mef;
            var _meh = _med.get_slotnums(106) + _med.get_slotnums(450);
            return _mef.add(_meg.multiply(_meh)), _mef;
        };
    },
    15133: (_mei, _mej, _mek) => {
        'use strict';
        var _mel = null;
        defineModule(_mej);
        Object.defineProperty(_mej, '__esModule', {
            'value': !0
        }), _mej.getSlot115PersonalEffect = void 0;
        var _mem = _mek(74496);
        _mej.getSlot115PersonalEffect = function(_men) {
            var _meo = null,
                _mep = new _mem.SlotItemEffectModel(),
                _meq = !1,
                _mer = new _mem.SlotItemEffectModel(),
                _mes = 0;
            if (55 != _men.ctype && 47 != _men.ctype || (_mer.houg += 2, _mer.saku += 2, _mer.kaih += 1, _meq = !0, _mes = 1), 0 == _meq) return _mep;
            var _met = _men.get_slotnums(115);
            if (_mep.add(_mer.multiply(_met)), 0 == _mes) return _mep;
            var _meu = _men.get_each_level_nums(115)[10];
            return 1 == _mes && (_mep.houg += 1 * _meu, _mep.kaih += 1 * _meu), _mep;
        };
    },
    55747: (_mev, _mew, _mex) => {
        'use strict';
        var _mey = null;
        defineModule(_mew);
        Object.defineProperty(_mew, '__esModule', {
            'value': !0
        }), _mew.getSlot118PersonalEffect = void 0;
        var _mez = _mex(74496);
        _mew.getSlot118PersonalEffect = function(_mf0) {
            var _mf1 = null,
                _mf2 = new _mez.SlotItemEffectModel(),
                _mf3 = !1,
                _mf4 = new _mez.SlotItemEffectModel(),
                _mf5 = 0;
            if (52 == _mf0.ctype && (_mf4.houg += 1, _mf4.saku += 2, _mf4.kaih += 2, _mf5 = 1, _mf3 = !0), 507 == _mf0.ship_id && (_mf4.houg += 3, _mf4.saku += 2, _mf4.kaih += 1, _mf5 = 2, _mf3 = !0), 0 == _mf3) return _mf2;
            var _mf6 = _mf0.get_slotnums(118) + _mf0.get_slotnums(521);
            if (_mf2.add(_mf4.multiply(_mf6)), 0 == _mf0.get_slotnums(118)) return _mf2;
            if (0 == _mf5) return _mf2;
            var _mf7 = _mf0.get_each_level_nums(118),
                _mf8 = 0,
                _mf9 = 0,
                _mfa = 0,
                _mfb = _mf7[10];
            return _mf7.forEach(function(_mfc, _mfd) {
                _mfd >= 2 && (_mf8 += _mfc), _mfd >= 5 && (_mf9 += _mfc), _mfd >= 7 && (_mfa += _mfc);
            }), 1 == _mf5 ? (_mf2.houg += 2 * _mfb, _mf2.saku += 1 * _mfb) : 2 == _mf5 && (_mf2.houm += 1 * _mf8, _mf2.kaih += 1 * _mf9, _mf2.houg += 1 * _mfa, _mf2.houg += 1 * _mfb, _mf2.raig += 1 * _mfb, _mf2.tyku += 1 * _mfb, _mf2.saku += 1 * _mfb, _mf2.kaih += 1 * _mfb), _mf2;
        };
    },
    11285: (_mfe, _mff, _mfg) => {
        'use strict';
        var _mfh = null;
        defineModule(_mff);
        Object.defineProperty(_mff, '__esModule', {
            'value': !0
        }), _mff.getSlot119PersonalEffect = void 0;
        var _mfi = _mfg(74496);
        _mff.getSlot119PersonalEffect = function(_mfj) {
            var _mfk = null,
                _mfl = new _mfi.SlotItemEffectModel(),
                _mfm = new _mfi.SlotItemEffectModel();
            34 == _mfj.ctype || 56 == _mfj.ctype ? _mfm.houg += 1 : 90 == _mfj.ctype && (_mfm.houg += 2, _mfm.raig += 1);
            var _mfn = !0;
            if (_mfm.exists() || (_mfn = !1), 0 == _mfn) return _mfl;
            var _mfo = _mfj.get_slotnums(119);
            return _mfl = _mfm.multiply(_mfo);
        };
    },
    96200: (_mfp, _mfq, _mfr) => {
        'use strict';
        var _mfs = null;
        defineModule(_mfq);
        Object.defineProperty(_mfq, '__esModule', {
            'value': !0
        }), _mfq.getSlot120mm50GroupPersonalEffect = void 0;
        var _mft = _mfr(74496);
        _mfq.getSlot120mm50GroupPersonalEffect = function(_mfu) {
            var _mfv = null,
                _mfw = new _mft.SlotItemEffectModel(),
                _mfx = !1,
                _mfy = new _mft.SlotItemEffectModel(),
                _mfz = _mfu.get_slotnums(147),
                _mg0 = _mfu.get_slotnums(393),
                _mg1 = _mfu.get_slotnums(394),
                _mg2 = new _mft.SlotItemEffectModel(),
                _mg3 = new _mft.SlotItemEffectModel();
            if (61 == _mfu.ctype && (_mfy.houg += 1, _mfy.kaih += 1, _mfx = !0, _mg0 >= 1 && (_mg2.houg += 1, _mg2.tyku += 1), _mg1 >= 1 && (_mg3.houg += 1, _mg3.tyku += 1, _mg3.kaih += 1, 'グレカーレ' == _mfu.yomi && (_mg3.kaih += 1))), 0 == _mfx) return _mfw;
            var _mg4 = _mfz + _mg0 + _mg1;
            return _mfw.add(_mfy.multiply(_mg4)).add(_mg2.multiply(_mg0)).add(_mg3.multiply(_mg1)), _mfw;
        };
    },
    33155: function(_mg5, _mg6, _mg7) {
        'use strict';
        var _mg8 = null;
        var _mg9 = this && this.__importDefault || function(_mga) {
            var _mgb = null;
            return _mga && _mga.__esModule ? _mga : {
                'default': _mga
            };
        };
        defineModule(_mg6);
        Object.defineProperty(_mg6, '__esModule', {
            'value': !0
        }), _mg6.getSlot121PersonalEffect = void 0;
        var _mgc = _mg7(74496),
            _mgd = _mg9(_mg7(18622));
        _mg6.getSlot121PersonalEffect = function(_mge) {
            var _mgf = null,
                _mgg = new _mgc.SlotItemEffectModel(),
                _mgh = 0;
            if (54 == _mge.ctype && (_mgg.tyku += 4, _mgg.kaih += 2, _mgh = 1), 0 == _mgh) return _mgg;
            for (var _mgi = 0, _mgj = 0, _mgk = _mge.have_slot_ids(); _mgj < _mgk.length; _mgj++) {
                var _mgl = _mgk[_mgj],
                    _mgm = _mgd.default.model.slot.getMst(_mgl),
                    _mgn = _mgm.equipType;
                12 != _mgn && 13 != _mgn || (_mgm.sakuteki >= 5 && _mge.get_slotnums(parseInt(_mgl)), _mgm.taiku >= 2 && (_mgi += _mge.get_slotnums(parseInt(_mgl))));
            }
            return _mgi >= 1 && (_mgg.tyku += 2, _mgg.kaih += 2), _mgg;
        };
    },
    9115: function(_mgo, _mgp, _mgq) {
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
            'value': !0
        }), _mgp.getSlot122PersonalEffect = void 0;
        var _mgv = _mgq(74496),
            _mgw = _mgs(_mgq(18622));
        _mgp.getSlot122PersonalEffect = function(_mgx) {
            var _mgy = null,
                _mgz = new _mgv.SlotItemEffectModel(),
                _mh0 = 0,
                _mh1 = 0,
                _mh2 = !1;
            656 == _mgx.ship_id && (_mh2 = !0, _mh0 = 1, _mh1 = 1);
            var _mh3 = 0,
                _mh4 = 0,
                _mh5 = _mgx.get_each_level_nums(122),
                _mh6 = 0;
            if (_mh2) {
                _mh5.forEach(function(_mh7, _mh8) {
                    _mh8 >= 4 && (_mh6 += _mh7);
                });
                for (var _mh9 = 0, _mha = _mgx.have_slot_ids(); _mh9 < _mha.length; _mh9++) {
                    var _mhb = _mha[_mh9],
                        _mhc = _mgw.default.model.slot.getMst(_mhb),
                        _mhd = _mhc.equipType;
                    12 != _mhd && 13 != _mhd || (_mhc.sakuteki >= 5 && (_mh3 += _mgx.get_slotnums(parseInt(_mhb))), _mhc.taiku >= 2 && (_mh4 += _mgx.get_slotnums(parseInt(_mhb))));
                }
            }
            return _mh6 > 0 && (1 == _mh1 && (_mh3 > 0 && (_mgz.houg += 4, _mgz.kaih += 3), _mh4 > 0 && (_mgz.tyku += 4, _mgz.kaih += 3)), 1 == _mh0 && (_mgz.houg += 5 * _mh6, _mgz.tyku += 3 * _mh6, _mgz.kaih += 2 * _mh6)), _mgz;
        };
    },
    37173: (_mhe, _mhf, _mhg) => {
        'use strict';
        var _mhh = null;
        defineModule(_mhf);
        Object.defineProperty(_mhf, '__esModule', {
            'value': !0
        }), _mhf.getSlot129PersonalEffect = void 0;
        var _mhi = _mhg(74496);
        _mhf.getSlot129PersonalEffect = function(_mhj) {
            var _mhk = null,
                _mhl = new _mhi.SlotItemEffectModel(),
                _mhm = !1,
                _mhn = new _mhi.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mhj.ctype) >= 0 ? (_mhn.houg = 1, _mhn.raig = 2, _mhn.kaih = 2, _mhn.tais = 2, _mhn.saku = 1, _mhm = !0) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mhj.ctype) >= 0 ? (_mhn.houg = 1, _mhn.raig = 2, _mhn.kaih = 2, _mhn.saku = 3, _mhm = !0) : [7, 13, 29, 8, 9, 31].indexOf(_mhj.ctype) >= 0 && (_mhn.houg = 1, _mhn.kaih = 2, _mhn.saku = 3, _mhm = !0), 0 == _mhm) return _mhl;
            var _mho = _mhj.get_slotnums(129);
            return _mhl = _mhn.multiply(_mho);
        };
    },
    73254: (_mhp, _mhq, _mhr) => {
        'use strict';
        var _mhs = null;
        defineModule(_mhq);
        Object.defineProperty(_mhq, '__esModule', {
            'value': !0
        }), _mhq.getSlot12PersonalEffect = void 0;
        var _mht = _mhr(74496);
        _mhq.getSlot12PersonalEffect = function(_mhu) {
            var _mhv = null,
                _mhw = new _mht.SlotItemEffectModel(),
                _mhx = !1,
                _mhy = new _mht.SlotItemEffectModel(),
                _mhz = _mhu.get_slotnums(142) + _mhu.get_slotnums(460);
            if (37 == _mhu.ctype && (_mhy.houg += 1, _mhy.kaih += 1, _mhy.houm += 1, _mhz >= 1 && (_mhw.kaih += 1, _mhw.houm += 1), _mhx = !0), 0 == _mhx) return _mhw;
            var _mi0 = _mhu.get_slotnums(12);
            return _mhw.add(_mhy.multiply(_mi0)), _mhw;
        };
    },
    93373: (_mi1, _mi2, _mi3) => {
        'use strict';
        var _mi4 = null;
        defineModule(_mi2);
        Object.defineProperty(_mi2, '__esModule', {
            'value': !0
        }), _mi2.getSlot132PersonalEffect = void 0;
        var _mi5 = _mi3(74496);
        _mi2.getSlot132PersonalEffect = function(_mi6) {
            var _mi7 = null,
                _mi8 = new _mi5.SlotItemEffectModel(),
                _mi9 = _mi6.get_each_level_nums(132),
                _mia = 0,
                _mib = 0,
                _mic = 0,
                _mid = 0,
                _mie = 0;
            return _mi9.forEach(function(_mif, _mig) {
                _mig >= 3 && (_mia += _mif), _mig >= 5 && (_mib += _mif), _mig >= 7 && (_mic += _mif), _mig >= 8 && (_mid += _mif), _mig >= 9 && (_mie += _mif);
            }), _mia >= 1 && (_mi8.kaih += 1), _mib >= 1 && (_mi8.tais += 1), _mic >= 1 && (_mi8.kaih += 1), _mid >= 1 && (_mi8.tais += 1), _mie >= 1 && (_mi8.houm += 1), _mi9[10] >= 1 && (_mi8.tais += 1), 911 != _mi6.ship_id && 916 != _mi6.ship_id && 546 != _mi6.ship_id || (_mi8.kaih += 1), 461 != _mi6.ship_id && 466 != _mi6.ship_id && 462 != _mi6.ship_id && 467 != _mi6.ship_id && 156 != _mi6.ship_id || (_mi8.kaih += 2), _mi8;
        };
    },
    88838: (_mih, _mii, _mij) => {
        'use strict';
        var _mik = null;
        defineModule(_mii);
        Object.defineProperty(_mii, '__esModule', {
            'value': !0
        }), _mii.getSlot136PersonalEffect = void 0;
        var _mil = _mij(74496);
        _mii.getSlot136PersonalEffect = function(_mim) {
            var _min = null,
                _mio = new _mil.SlotItemEffectModel(),
                _mip = 0;
            if (58 != _mim.ctype && 61 != _mim.ctype && 64 != _mim.ctype && 68 != _mim.ctype && 80 != _mim.ctype && 92 != _mim.ctype && 113 != _mim.ctype && 124 != _mim.ctype || (_mio.souk += 2, _mio.kaih += 1, _mip = 1), 879 == _mim.ship_id && (_mio.souk += 1, _mio.kaih += 1), 0 == _mip) return _mio;
            var _miq = _mim.get_each_level_nums(136),
                _mir = 0,
                _mis = 0,
                _mit = _miq[10];
            return _mip > 0 && _miq.forEach(function(_miu, _miv) {
                _miv >= 3 && (_mir += _miu), _miv >= 6 && (_mis += _miu);
            }), 1 == _mip && (_mir >= 1 && (_mio.souk += 1 * _mir), _mis >= 1 && (_mio.souk += 1 * _mis), _mit >= 1 && (_mio.souk += 1 * _mit)), _mio;
        };
    },
    17274: (_miw, _mix, _miy) => {
        'use strict';
        var _miz = null;
        defineModule(_mix);
        Object.defineProperty(_mix, '__esModule', {
            'value': !0
        }), _mix.getSlot139PersonalEffect = void 0;
        var _mj0 = _miy(74496);
        _mix.getSlot139PersonalEffect = function(_mj1) {
            var _mj2 = null,
                _mj3 = new _mj0.SlotItemEffectModel(),
                _mj4 = !1,
                _mj5 = new _mj0.SlotItemEffectModel();
            if (662 != _mj1.ship_id && 663 != _mj1.ship_id && 668 != _mj1.ship_id || (_mj5.houg += 2, _mj5.tyku += 1, _mj4 = !0), 0 == _mj4) return _mj3;
            var _mj6 = _mj1.get_slotnums(139);
            return _mj3.add(_mj5.multiply(_mj6)), _mj3;
        };
    },
    21713: (_mj7, _mj8, _mj9) => {
        'use strict';
        var _mja = null;
        defineModule(_mj8);
        Object.defineProperty(_mj8, '__esModule', {
            'value': !0
        }), _mj8.getSlot143PersonalEffect = void 0;
        var _mjb = _mj9(74496);
        _mj8.getSlot143PersonalEffect = function(_mjc) {
            var _mjd = null,
                _mje = new _mjb.SlotItemEffectModel();
            return 'あかぎ' == _mjc.yomi ? _mje.houg = 3 : 'かが' == _mjc.yomi || 'しょうかく' == _mjc.yomi ? _mje.houg = 2 : ('ずいかく' == _mjc.yomi || 'りゅうじょう' == _mjc.yomi) && (_mje.houg = 1), _mje;
        };
    },
    59823: (_mjf, _mjg, _mjh) => {
        'use strict';
        var _mji = null;
        defineModule(_mjg);
        Object.defineProperty(_mjg, '__esModule', {
            'value': !0
        }), _mjg.getSlot144PersonalEffect = void 0;
        var _mjj = _mjh(74496);
        _mjg.getSlot144PersonalEffect = function(_mjk) {
            var _mjl = null,
                _mjm = new _mjj.SlotItemEffectModel();
            return 'あかぎ' == _mjk.yomi ? _mjm.houg = 3 : 'かが' == _mjk.yomi ? _mjm.houg = 2 : 'しょうかく' == _mjk.yomi ? (_mjm.houg = 2, 461 != _mjk.ship_id && 466 != _mjk.ship_id || (_mjm.houg += 2)) : 'ずいかく' == _mjk.yomi ? (_mjm.houg = 1, 462 != _mjk.ship_id && 467 != _mjk.ship_id || (_mjm.houg += 1)) : 'りゅうじょう' == _mjk.yomi && (_mjm.houg = 1), _mjm;
        };
    },
    57440: (_mjn, _mjo, _mjp) => {
        'use strict';
        var _mjq = null;
        defineModule(_mjo);
        Object.defineProperty(_mjo, '__esModule', {
            'value': !0
        }), _mjo.getSlot149PersonalEffect = void 0;
        var _mjr = _mjp(74496);
        _mjo.getSlot149PersonalEffect = function(_mjs) {
            var _mjt = null,
                _mju = new _mjr.SlotItemEffectModel(),
                _mjv = new _mjr.SlotItemEffectModel(),
                _mjw = !1;
            return 488 == _mjs.ship_id || 141 == _mjs.ship_id || 160 == _mjs.ship_id || 622 == _mjs.ship_id || 623 == _mjs.ship_id || 656 == _mjs.ship_id || 961 == _mjs.ship_id ? (_mjv.tais = 1, _mjv.kaih = 3, _mjw = !0) : 624 == _mjs.ship_id ? (_mjv.tais = 3, _mjv.kaih = 5, _mjw = !0) : 662 == _mjs.ship_id && (_mjv.tais = 2, _mjv.kaih = 4, _mjw = !0), 54 == _mjs.ctype && (_mjv.tais = 1, _mjv.kaih = 2, _mjw = !0), 0 == _mjw ? _mju : _mju = _mjv.multiply(1);
        };
    },
    29493: (_mjx, _mjy, _mjz) => {
        'use strict';
        var _mk0 = null;
        defineModule(_mjy);
        Object.defineProperty(_mjy, '__esModule', {
            'value': !0
        }), _mjy.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mk1 = _mjz(74496);
        _mjy.getSlot14inch45CaliberGunPersonalEffect = function(_mk2) {
            var _mk3 = null,
                _mk4, _mk5, _mk6, _mk7 = new _mk1.SlotItemEffectModel(),
                _mk8 = !1,
                _mk9 = new _mk1.SlotItemEffectModel(),
                _mka = {
                    507: 507,
                    508: 507
                },
                _mkb = _mk2.get_slotnums(507),
                _mkc = _mk2.get_slotnums(508),
                _mkd = _mkb + _mkc,
                _mke = _mk2.getCountryName(),
                _mkf = _mk2.getUSSWaterRaderDict();
            if (125 == _mk2.ctype && (_mk9.houg += 1, _mk9.kaih += 1, _mk9.houm += 1, _mk8 = !0, _mkb >= 1 && _mkc >= 1 && (_mk7.houg += 1, _mk7.houm += 1)), 'アメリカ' == _mke && _mk2.stype >= 8 && _mk2.stype <= 10) {
                _mk9.houg += 2, _mk9.kaih += 1, _mk9.houm += 1, _mk8 = !0;
                for (var _mkg = 0, _mkh = 0, _mki = _mk2.have_slot_ids(); _mkh < _mki.length; _mkh++) {
                    var _mkj = _mki[_mkh];
                    _mkf[Number(_mkj)] && (_mkg += _mk2.get_slotnums(parseInt(_mkj)));
                }
                _mkg >= 1 && (_mk7.houg += 1, _mk7.kaih += 1, _mk7.houm += 2), _mkb >= 1 && _mkc >= 1 && (_mk7.houg += 1, _mk7.houm += 1, _mk7.kaih += 2);
            }
            else 6 != _mk2.ctype && 26 != _mk2.ctype && 2 != _mk2.ctype && 'イギリス' != _mke || (_mk7.kaih += 1, _mk7.houm += 1, _mkb >= 1 && _mkc >= 1 && (_mk7.houg += 1, _mk7.houm += 1, _mk7.kaih += 1));
            _mk8 && _mk7.add(_mk9.multiply(_mkd));
            for (var _mkk = {}, _mkl = {}, _mkm = {}, _mkn = function(_mko) {
                    var _mkp = null,
                        _mkq = Number(_mko),
                        _mkr = _mka[_mkq];
                    _mkk[_mkr] = null !== (_mk4 = _mkk[_mkr]) && void 0 !== _mk4 ? _mk4 : 0, _mkl[_mkr] = null !== (_mk5 = _mkl[_mkr]) && void 0 !== _mk5 ? _mk5 : 0, _mkm[_mkr] = null !== (_mk6 = _mkm[_mkr]) && void 0 !== _mk6 ? _mk6 : 0, _mk2.get_each_level_nums(_mkq).forEach(function(_mks, _mkt) {
                        _mkt >= 3 && (_mkk[_mkr] += _mks), _mkt >= 6 && (_mkl[_mkr] += _mks), _mkt >= 9 && (_mkm[_mkr] += _mks);
                    });
                }, _mku = 0, _mkv = Object.keys(_mka); _mku < _mkv.length; _mku++) {
                _mkn(_mkv[_mku]);
            }
            return _mkk[507] >= 1 && (_mk7.houg += 1 * _mkk[507]), _mkl[507] >= 1 && (_mk7.souk += 1 * _mkl[507]), _mkm[507] >= 1 && (_mk7.houm += 1 * _mkm[507]), _mk7;
        };
    },
    66985: (_mkw, _mkx, _mky) => {
        'use strict';
        var _mkz = null;
        defineModule(_mkx);
        Object.defineProperty(_mkx, '__esModule', {
            'value': !0
        }), _mkx.getSlot15PersonalEffect = void 0;
        var _ml0 = _mky(74496);
        _mkx.getSlot15PersonalEffect = function(_ml1) {
            var _ml2 = null,
                _ml3 = new _ml0.SlotItemEffectModel(),
                _ml4 = !1;
            if ((566 == _ml1.ship_id || 567 == _ml1.ship_id || 568 == _ml1.ship_id || 648 == _ml1.ship_id || 651 == _ml1.ship_id || 656 == _ml1.ship_id || 670 == _ml1.ship_id || 915 == _ml1.ship_id || 951 == _ml1.ship_id || 'たけ' == _ml1.yomi) && (_ml4 = !0), 0 == _ml4) return _ml3;
            var _ml5 = _ml1.get_slotnums(15);
            return 30 == _ml1.ctype && (1 == _ml5 ? _ml3.raig = 2 : _ml5 >= 2 && (_ml3.raig = 4)), 'たけ' == _ml1.yomi && (_ml3.raig += 5, _ml3.kaih += 1), _ml3;
        };
    },
    79086: (_ml6, _ml7, _ml8) => {
        'use strict';
        var _ml9 = null;
        defineModule(_ml7);
        Object.defineProperty(_ml7, '__esModule', {
            'value': !0
        }), _ml7.getSlot165_216PersonalEffect = void 0;
        var _mla = _ml8(74496);
        _ml7.getSlot165_216PersonalEffect = function(_mlb) {
            var _mlc = null,
                _mld = new _mla.SlotItemEffectModel();
            return 501 != _mlb.ship_id && 506 != _mlb.ship_id && 502 != _mlb.ship_id && 507 != _mlb.ship_id || (_mld.tyku += 2, _mld.kaih += 2), _mld;
        };
    },
    88102: (_mle, _mlf, _mlg) => {
        'use strict';
        var _mlh = null;
        defineModule(_mlf);
        Object.defineProperty(_mlf, '__esModule', {
            'value': !0
        }), _mlf.getSlot16M1PersonalEffect = void 0;
        var _mli = _mlg(74496);
        _mlf.getSlot16M1PersonalEffect = function(_mlj) {
            var _mlk = null,
                _mll = new _mli.SlotItemEffectModel(),
                _mlm = new _mli.SlotItemEffectModel();
            67 == _mlj.ctype || 78 == _mlj.ctype || 82 == _mlj.ctype || 88 == _mlj.ctype || 108 == _mlj.ctype || 112 == _mlj.ctype ? (_mlm.houg += 2, _mlm.souk += 1, 67 == _mlj.ctype && (_mlm.kaih -= 2)) : 149 == _mlj.ship_id || 150 == _mlj.ship_id || 151 == _mlj.ship_id || 152 == _mlj.ship_id ? (_mlm.houg += 1, _mlm.souk += 1, _mlm.kaih -= 3) : 591 == _mlj.ship_id || 592 == _mlj.ship_id ? (_mlm.houg += 2, _mlm.souk += 1, _mlm.kaih -= 2) : 593 != _mlj.ship_id && 954 != _mlj.ship_id || (_mlm.houg += 1, _mlm.souk += 1, _mlm.kaih -= 1);
            var _mln = !0;
            if (_mlm.exists() || (_mln = !1), 0 == _mln) return _mll;
            var _mlo = _mlj.get_slotnums(298) + _mlj.get_slotnums(299) + _mlj.get_slotnums(300);
            return _mll = _mlm.multiply(_mlo);
        };
    },
    29240: (_mlp, _mlq, _mlr) => {
        'use strict';
        var _mls = null;
        defineModule(_mlq);
        Object.defineProperty(_mlq, '__esModule', {
            'value': !0
        }), _mlq.getSlot171PersonalEffect = void 0;
        var _mlt = _mlr(74496);
        _mlq.getSlot171PersonalEffect = function(_mlu) {
            var _mlv = null,
                _mlw = new _mlt.SlotItemEffectModel(),
                _mlx = 0;
            'アメリカ' == _mlu.getCountryName() && (_mlx = 1), 65 != _mlu.ctype && 93 != _mlu.ctype && 102 != _mlu.ctype && 107 != _mlu.ctype && 125 != _mlu.ctype || (_mlw.houg += 1, _mlw.saku += 1, _mlx = 2);
            var _mly = _mlu.get_each_level_nums(171),
                _mlz = 0,
                _mm0 = 0,
                _mm1 = 0;
            return _mlx > 0 && (_mly.map(function(_mm2, _mm3) {
                _mm3 >= 5 && (_mlz += _mm2), _mm3 >= 3 && (_mm0 += _mm2), _mm3 >= 8 && (_mm1 += _mm2);
            }), 1 != _mlx && 2 != _mlx || (_mly[10] > 0 && (_mlw.houg += 1), _mlz > 0 && (_mlw.kaih += 1)), 2 == _mlx && (_mm0 > 0 && (_mlw.saku += 1), _mm1 > 0 && (_mlw.saku += 1))), _mlw;
        };
    },
    40885: (_mm4, _mm5, _mm6) => {
        'use strict';
        var _mm7 = null;
        defineModule(_mm5);
        Object.defineProperty(_mm5, '__esModule', {
            'value': !0
        }), _mm5.getSlot174PersonalEffect = void 0;
        var _mm8 = _mm6(74496);
        _mm5.getSlot174PersonalEffect = function(_mm9) {
            var _mma = null,
                _mmb = new _mm8.SlotItemEffectModel(),
                _mmc = new _mm8.SlotItemEffectModel();
            if (66 == _mm9.ctype && (_mmc.raig = 1, _mmc.kaih = 2), 591 == _mm9.ship_id || 592 == _mm9.ship_id || 954 == _mm9.ship_id ? (_mmc.raig += 6, _mmc.kaih += 3) : 593 == _mm9.ship_id ? (_mmc.raig += 5, _mmc.kaih += 2) : 488 != _mm9.ship_id && 622 != _mm9.ship_id && 623 != _mm9.ship_id && 624 != _mm9.ship_id || (_mmc.houg += 2, _mmc.raig += 4, _mmc.kaih += 4), !_mmc.exists()) return _mmb;
            var _mmd = _mm9.get_slotnums(174);
            return _mmb = _mmc.multiply(_mmd);
        };
    },
    19614: (_mme, _mmf, _mmg) => {
        'use strict';
        var _mmh = null;
        defineModule(_mmf);
        Object.defineProperty(_mmf, '__esModule', {
            'value': !0
        }), _mmf.getSlot179PersonalEffect = void 0;
        var _mmi = _mmg(74496);
        _mmf.getSlot179PersonalEffect = function(_mmj) {
            var _mmk = null,
                _mml = new _mmi.SlotItemEffectModel(),
                _mmm = new _mmi.SlotItemEffectModel();
            if (54 == _mmj.ctype && (_mmm.raig = 1), !_mmm.exists()) return _mml;
            var _mmn = _mmj.get_slotnums(179);
            return _mml = _mmm.multiply(_mmn);
        };
    },
    87220: (_mmo, _mmp, _mmq) => {
        'use strict';
        var _mmr = null;
        defineModule(_mmp);
        Object.defineProperty(_mmp, '__esModule', {
            'value': !0
        }), _mmp.getSlot184PersonalEffect = void 0;
        var _mms = _mmq(74496);
        _mmp.getSlot184PersonalEffect = function(_mmt) {
            var _mmu = null,
                _mmv = new _mms.SlotItemEffectModel(),
                _mmw = new _mms.SlotItemEffectModel();
            if (68 == _mmt.ctype && (_mmw.houg += 1, _mmw.tyku += 2, _mmw.kaih += 3), !_mmw.exists()) return _mmv;
            var _mmx = _mmt.get_slotnums(184);
            return _mmv = _mmw.multiply(_mmx);
        };
    },
    81367: (_mmy, _mmz, _mn0) => {
        'use strict';
        var _mn1 = null;
        defineModule(_mmz);
        Object.defineProperty(_mmz, '__esModule', {
            'value': !0
        }), _mmz.getSlot188PersonalEffect = void 0;
        var _mn2 = _mn0(74496);
        _mmz.getSlot188PersonalEffect = function(_mn3) {
            var _mn4 = null,
                _mn5 = new _mn2.SlotItemEffectModel(),
                _mn6 = new _mn2.SlotItemEffectModel();
            if (68 == _mn3.ctype && (_mn6.houg += 3, _mn6.tyku += 1, _mn6.kaih += 1), !_mn6.exists()) return _mn5;
            var _mn7 = _mn3.get_slotnums(188);
            return _mn5 = _mn6.multiply(_mn7);
        };
    },
    13052: (_mn8, _mn9, _mna) => {
        'use strict';
        var _mnb = null;
        defineModule(_mn9);
        Object.defineProperty(_mn9, '__esModule', {
            'value': !0
        }), _mn9.getSlot189PersonalEffect = void 0;
        var _mnc = _mna(74496);
        _mn9.getSlot189PersonalEffect = function(_mnd) {
            var _mne = null,
                _mnf = new _mnc.SlotItemEffectModel(),
                _mng = new _mnc.SlotItemEffectModel();
            if (68 != _mnd.ctype && 63 != _mnd.ctype || (_mng.tyku += 1, _mng.kaih += 2), !_mng.exists()) return _mnf;
            var _mnh = _mnd.get_slotnums(189);
            return _mnf = _mng.multiply(_mnh);
        };
    },
    66904: (_mni, _mnj, _mnk) => {
        'use strict';
        var _mnl = null;
        defineModule(_mnj);
        Object.defineProperty(_mnj, '__esModule', {
            'value': !0
        }), _mnj.getSlot18_52_PersonalEffect = void 0;
        var _mnm = _mnk(74496);
        _mnj.getSlot18_52_PersonalEffect = function(_mnn) {
            var _mno = null,
                _mnp = new _mnm.SlotItemEffectModel(),
                _mnq = new _mnm.SlotItemEffectModel();
            if (277 == _mnn.ship_id || 278 == _mnn.ship_id || 156 == _mnn.ship_id ? _mnq.houg = 1 : 594 == _mnn.ship_id || 698 == _mnn.ship_id || 646 == _mnn.ship_id ? (_mnq.houg = 1, _mnq.kaih = 1) : 599 != _mnn.ship_id && 610 != _mnn.ship_id || (_mnq.houg = 2, _mnq.kaih = 1), !_mnq.exists()) return _mnp;
            var _mnr = _mnn.get_slotnums(18) + _mnn.get_slotnums(52);
            return _mnp = _mnq.multiply(_mnr);
        };
    },
    94968: (_mns, _mnt, _mnu) => {
        'use strict';
        var _mnv = null;
        defineModule(_mnt);
        Object.defineProperty(_mnt, '__esModule', {
            'value': !0
        }), _mnt.getSlot194PersonalEffect = void 0;
        var _mnw = _mnu(74496);
        _mnt.getSlot194PersonalEffect = function(_mnx) {
            var _mny = null,
                _mnz = new _mnw.SlotItemEffectModel(),
                _mo0 = new _mnw.SlotItemEffectModel();
            if (70 == _mnx.ctype ? (_mo0.houg += 3, _mo0.kaih += 2, _mo0.saku += 2) : 72 != _mnx.ctype && 62 != _mnx.ctype || (_mo0.kaih += 1, _mo0.saku += 2), 392 == _mnx.ship_id && (_mo0.houg += 1, _mo0.kaih += 2, _mo0.saku += 2), !_mo0.exists()) return _mnz;
            var _mo1 = _mnx.get_slotnums(194);
            return _mnz = _mo0.multiply(_mo1);
        };
    },
    94781: (_mo2, _mo3, _mo4) => {
        'use strict';
        var _mo5 = null;
        defineModule(_mo3);
        Object.defineProperty(_mo3, '__esModule', {
            'value': !0
        }), _mo3.getSlot195PersonalEffect = void 0;
        var _mo6 = _mo4(74496);
        _mo3.getSlot195PersonalEffect = function(_mo7) {
            var _mo8 = null,
                _mo9 = new _mo6.SlotItemEffectModel(),
                _moa = !1,
                _mob = new _mo6.SlotItemEffectModel();
            if ('アメリカ' == _mo7.getCountryName() && (_mob.houg += 1, _moa = !0), 0 == _moa) return _mo9;
            var _moc = _mo7.get_slotnums(195);
            return _mo9.add(_mob.multiply(_moc));
        };
    },
    98137: (_mod, _moe, _mof) => {
        'use strict';
        var _mog = null;
        defineModule(_moe);
        Object.defineProperty(_moe, '__esModule', {
            'value': !0
        }), _moe.getSlot19PersonalEffect = void 0;
        var _moh = _mof(74496);
        _moe.getSlot19PersonalEffect = function(_moi) {
            var _moj = null,
                _mok = new _moh.SlotItemEffectModel(),
                _mol = new _moh.SlotItemEffectModel();
            if ('ほうしょう' == _moi.yomi && (_mol.houg = 2, _mol.kaih = 2, _mol.tais = 2, _mol.tyku = 2), 75 != _moi.ctype && 76 != _moi.ctype || (_mol.houg = 2, _mol.tais = 3), 7 == _moi.stype && (_mol.tyku += 1, _mol.kaih += 1), 894 != _moi.ship_id && 899 != _moi.ship_id || (_mol.houg += 1, _mol.kaih += 1, _mol.tais += 1, _mol.tyku += 1), !_mol.exists()) return _mok;
            var _mom = _moi.get_slotnums(19);
            return _mok = _mol.multiply(_mom);
        };
    },
    48658: (_mon, _moo, _mop) => {
        'use strict';
        var _moq = null;
        defineModule(_moo);
        Object.defineProperty(_moo, '__esModule', {
            'value': !0
        }), _moo.getSlot204PersonalEffect = void 0;
        var _mor = _mop(74496);
        _moo.getSlot204PersonalEffect = function(_mos) {
            var _mot = null,
                _mou = new _mor.SlotItemEffectModel();
            if (591 != _mos.ship_id && 592 != _mos.ship_id && 593 != _mos.ship_id && 954 != _mos.ship_id) return _mou;
            _mou.souk = _mou.souk + 1, _mou.raig = _mou.raig + 1;
            for (var _mov = _mos.get_each_level_nums(204), _mow = 0, _mox = 0; _mox <= 10; _mox++) _mox >= 7 && (_mow += _mov[_mox]);
            return _mow > 0 && (_mou.souk = _mou.souk + 1), _mov[10] > 0 && (_mou.raig = _mou.raig + 1), _mou;
        };
    },
    2306: (_moy, _moz, _mp0) => {
        'use strict';
        var _mp1 = null;
        defineModule(_moz);
        Object.defineProperty(_moz, '__esModule', {
            'value': !0
        }), _moz.getSlot217PersonalEffect = void 0;
        var _mp2 = _mp0(74496);
        _moz.getSlot217PersonalEffect = function(_mp3) {
            var _mp4 = null,
                _mp5 = new _mp2.SlotItemEffectModel(),
                _mp6 = !1,
                _mp7 = new _mp2.SlotItemEffectModel();
            if (501 == _mp3.ship_id || 506 == _mp3.ship_id ? (_mp7.houg += 1, _mp7.kaih += 3, _mp7.tyku += 5, _mp6 = !0) : 502 != _mp3.ship_id && 507 != _mp3.ship_id || (_mp7.houg += 1, _mp7.kaih += 2, _mp7.tyku += 4, _mp6 = !0), 0 == _mp6) return _mp5;
            var _mp8 = _mp3.get_slotnums(217);
            return _mp5.add(_mp7.multiply(_mp8)), _mp5;
        };
    },
    91302: function(_mp9, _mpa, _mpb) {
        'use strict';
        var _mpc = null;
        var _mpd = this && this.__importDefault || function(_mpe) {
            var _mpf = null;
            return _mpe && _mpe.__esModule ? _mpe : {
                'default': _mpe
            };
        };
        defineModule(_mpa);
        Object.defineProperty(_mpa, '__esModule', {
            'value': !0
        }), _mpa.getSlot220PersonalEffect = void 0;
        var _mpg = _mpb(74496),
            _mph = _mpd(_mpb(18622));
        _mpa.getSlot220PersonalEffect = function(_mpi) {
            var _mpj = null,
                _mpk = new _mpg.SlotItemEffectModel(),
                _mpl = !1,
                _mpm = new _mpg.SlotItemEffectModel(),
                _mpn = 0,
                _mpo = 0;
            if (662 == _mpi.ship_id || 663 == _mpi.ship_id || 668 == _mpi.ship_id || 501 == _mpi.ship_id || 506 == _mpi.ship_id || 502 == _mpi.ship_id || 507 == _mpi.ship_id ? (_mpm.houg += 1, _mpm.tyku += 3, _mpm.kaih += 2, _mpl = !0, _mpn = 1) : 894 != _mpi.ship_id && 899 != _mpi.ship_id || (_mpm.tyku += 2, _mpm.kaih += 2, _mpl = !0, _mpn = 1, _mpo = 1), 0 == _mpl) return _mpk;
            var _mpp = _mpi.get_slotnums(220);
            _mpk.add(_mpm.multiply(_mpp));
            for (var _mpq = 0, _mpr = 0, _mps = _mpi.have_slot_ids(); _mpr < _mps.length; _mpr++) {
                var _mpt = _mps[_mpr],
                    _mpu = _mph.default.model.slot.getMst(_mpt),
                    _mpv = _mpu.equipType;
                12 != _mpv && 13 != _mpv || (_mpu.sakuteki >= 5 && _mpi.get_slotnums(parseInt(_mpt)), _mpu.taiku >= 2 && (_mpq += _mpi.get_slotnums(parseInt(_mpt))));
            }
            if (_mpq >= 1 && 1 == _mpn && (_mpk.tyku += 3, _mpk.kaih += 3), 0 == _mpo) return _mpk;
            var _mpw = _mpi.get_each_level_nums(220)[10];
            return 1 == _mpo && _mpw > 0 && (_mpk.houg += 1 * _mpw, _mpk.tyku += 1 * _mpw, _mpk.kaih += 1 * _mpw), _mpk;
        };
    },
    20418: (_mpx, _mpy, _mpz) => {
        'use strict';
        var _mq0 = null;
        defineModule(_mpy);
        Object.defineProperty(_mpy, '__esModule', {
            'value': !0
        }), _mpy.getSlot227PersonalEffect = void 0;
        var _mq1 = _mpz(74496);
        _mpy.getSlot227PersonalEffect = function(_mq2) {
            var _mq3 = null,
                _mq4 = new _mq1.SlotItemEffectModel(),
                _mq5 = _mq2.get_each_level_nums(227),
                _mq6 = 0;
            _mq5.forEach(function(_mq7, _mq8) {
                _mq8 >= 8 && (_mq6 += _mq7);
            }), _mq6 >= 1 && (_mq4.tais += 1 * _mq6);
            var _mq9 = _mq5[10];
            return _mq9 >= 1 && (_mq4.tais += 1 * _mq9), _mq4;
        };
    },
    1906: (_mqa, _mqb, _mqc) => {
        'use strict';
        var _mqd = null;
        defineModule(_mqb);
        Object.defineProperty(_mqb, '__esModule', {
            'value': !0
        }), _mqb.getSlot228PersonalEffect = void 0;
        var _mqe = _mqc(74496);
        _mqb.getSlot228PersonalEffect = function(_mqf) {
            var _mqg = null,
                _mqh = new _mqe.SlotItemEffectModel(),
                _mqi = new _mqe.SlotItemEffectModel();
            if ('ほうしょう' == _mqf.yomi && (_mqi.houg = 3, _mqi.kaih = 4, _mqi.tais = 4, _mqi.tyku = 3), 75 != _mqf.ctype && 76 != _mqf.ctype || (_mqi.houg = 2, _mqi.tais = 5, _mqi.tyku = 1, _mqi.kaih = 1), 7 == _mqf.stype && (_mqi.tais += 2, _mqi.tyku += 1, _mqi.kaih += 1), 894 != _mqf.ship_id && 899 != _mqf.ship_id || (_mqi.houg += 1, _mqi.kaih += 2, _mqi.tais += 2, _mqi.tyku += 1), !_mqi.exists()) return _mqh;
            var _mqj = _mqf.get_slotnums(228);
            return _mqh = _mqi.multiply(_mqj);
        };
    },
    61887: function(_mqk, _mql, _mqm) {
        'use strict';
        var _mqn = null;
        var _mqo = this && this.__importDefault || function(_mqp) {
            var _mqq = null;
            return _mqp && _mqp.__esModule ? _mqp : {
                'default': _mqp
            };
        };
        defineModule(_mql);
        Object.defineProperty(_mql, '__esModule', {
            'value': !0
        }), _mql.getSlot229PersonalEffect = void 0;
        var _mqr = _mqm(74496),
            _mqs = _mqo(_mqm(18622));
        _mql.getSlot229PersonalEffect = function(_mqt) {
            var _mqu = null;
            for (var _mqv = new _mqr.SlotItemEffectModel(), _mqw = 0, _mqx = 0, _mqy = _mqt.have_slots_dict[229]; _mqx < _mqy.length; _mqx++) {
                _mqy[_mqx].level >= 7 && _mqw++;
            }
            var _mqz = _mqw,
                _mr0 = 0,
                _mr1 = 0,
                _mr2 = 0,
                _mr3 = _mqt.get_slotnums(229);
            if (622 == _mqt.ship_id || 623 == _mqt.ship_id || 624 == _mqt.ship_id) _mqv.houg += 1 * _mr3, _mqv.tyku += 1 * _mr3, _mr0 = 2;
            else {
                if (656 == _mqt.ship_id) _mqv.houg += 2 * _mr3, _mqv.tyku += 3 * _mr3, _mqv.tais += 2 * _mr3, _mr0 = 3;
                else {
                    if (0 == _mqw) return _mqv;
                }
            }
            if (488 == _mqt.ship_id ? (_mqv.tyku += 3 * _mqz, _mr0 = 1) : 220 == _mqt.ship_id ? _mqv.tyku += 2 * _mqz : 23 == _mqt.ship_id ? _mqv.tyku += 1 * _mqz : 160 == _mqt.ship_id ? (_mqv.tyku += 2 * _mqz, _mr0 = 1) : 224 == _mqt.ship_id ? _mqv.tyku += 1 * _mqz : 487 == _mqt.ship_id ? (_mqv.tyku += 2 * _mqz, _mr0 = 1) : 289 == _mqt.ship_id && (_mqv.tyku += 1 * _mqz), (66 == _mqt.ctype || 28 == _mqt.ctype) && (_mqv.houg += 1 * _mqz, _mqv.tyku += 1 * _mqz, _mr1 = 1), 1 == _mqt.stype && (_mqv.houg += 1 * _mqz, _mqv.tyku += 1 * _mqz, _mr2 = 1), ('ゆら' == _mqt.yomi || 'なか' == _mqt.yomi || 'きぬ' == _mqt.yomi) && (_mqv.houg += 2 * _mqz), 0 == _mr0 + _mr1 + _mr2) return _mqv;
            for (var _mr4 = 0, _mr5 = 0, _mr6 = 0, _mr7 = _mqt.have_slot_ids(); _mr6 < _mr7.length; _mr6++) {
                var _mr8 = _mr7[_mr6],
                    _mr9 = _mqs.default.model.slot.getMst(_mr8),
                    _mra = _mr9.equipType;
                12 != _mra && 13 != _mra || (_mr9.sakuteki >= 5 && (_mr4 += _mqt.get_slotnums(parseInt(_mr8))), _mr9.taiku >= 2 && (_mr5 += _mqt.get_slotnums(parseInt(_mr8))));
            }
            return 1 == _mr0 ? _mr4 > 0 && (_mqv.houg += 3, _mqv.kaih += 2) : 2 == _mr0 ? (_mr4 > 0 && (_mqv.houg += 1, _mqv.kaih += 1), _mr5 > 0 && (_mqv.tyku += 2, _mqv.kaih += 2)) : 3 == _mr0 && (_mr4 > 0 && (_mqv.houg += 2, _mqv.kaih += 2), _mr5 > 0 && (_mqv.tyku += 3, _mqv.kaih += 2)), 1 == _mr1 && _mr4 > 0 && (_mqv.houg += 2, _mqv.kaih += 3), 1 == _mr2 && _mr4 > 0 && (_mqv.houg += 1, _mqv.kaih += 4), _mqv;
        };
    },
    55734: (_mrb, _mrc, _mrd) => {
        'use strict';
        var _mre = null;
        defineModule(_mrc);
        Object.defineProperty(_mrc, '__esModule', {
            'value': !0
        }), _mrc.getSlot234PersonalEffect = void 0;
        var _mrf = _mrd(74496);
        _mrc.getSlot234PersonalEffect = function(_mrg) {
            var _mrh = null,
                _mri = new _mrf.SlotItemEffectModel(),
                _mrj = !1,
                _mrk = new _mrf.SlotItemEffectModel(),
                _mrl = _mrg.get_slotnums(142) + _mrg.get_slotnums(460);
            if (37 == _mrg.ctype && (_mrk.houg += 1, _mrk.tyku += 1, _mrk.kaih += 1, _mrk.houm += 1, _mrl >= 1 && (_mri.tyku += 1, _mri.kaih += 1, _mri.houm += 1), _mrj = !0), 0 == _mrj) return _mri;
            var _mrm = _mrg.get_slotnums(234);
            return _mri.add(_mrk.multiply(_mrm)), _mri;
        };
    },
    17562: function(_mrn, _mro, _mrp) {
        'use strict';
        var _mrq = null;
        var _mrr = this && this.__importDefault || function(_mrs) {
            var _mrt = null;
            return _mrs && _mrs.__esModule ? _mrs : {
                'default': _mrs
            };
        };
        defineModule(_mro);
        Object.defineProperty(_mro, '__esModule', {
            'value': !0
        }), _mro.getSlot235PersonalEffect = void 0;
        var _mru = _mrp(74496),
            _mrv = _mrr(_mrp(18622));
        _mro.getSlot235PersonalEffect = function(_mrw) {
            var _mrx = null,
                _mry = new _mru.SlotItemEffectModel(),
                _mrz = !1,
                _ms0 = new _mru.SlotItemEffectModel(),
                _ms1 = 0;
            if (52 != _mrw.ctype && 9 != _mrw.ctype || (_ms0.houg += 2, _ms0.tyku += 1, _mrz = !0), 321 == _mrw.ship_id && (_ms0.houg += 1, _ms0.kaih += 1, _ms1 = 1), 0 == _mrz) return _mry;
            var _ms2 = _mrw.get_slotnums(235);
            if (_mry.add(_ms0.multiply(_ms2)), 0 == _ms1) return _mry;
            for (var _ms3 = 0, _ms4 = 0, _ms5 = 0, _ms6 = _mrw.have_slot_ids(); _ms5 < _ms6.length; _ms5++) {
                var _ms7 = _ms6[_ms5],
                    _ms8 = _mrv.default.model.slot.getMst(_ms7),
                    _ms9 = _ms8.equipType;
                12 != _ms9 && 13 != _ms9 || (_ms8.sakuteki >= 5 && (_ms3 += _mrw.get_slotnums(parseInt(_ms7))), _ms8.taiku >= 2 && (_ms4 += _mrw.get_slotnums(parseInt(_ms7))));
            }
            return _ms3 >= 1 && 1 == _ms1 && (_mry.houg += 3, _mry.kaih += 2), _ms4 >= 1 && 1 == _ms1 && (_mry.tyku += 3, _mry.kaih += 3), _mry;
        };
    },
    47970: (_msa, _msb, _msc) => {
        'use strict';
        var _msd = null;
        defineModule(_msb);
        Object.defineProperty(_msb, '__esModule', {
            'value': !0
        }), _msb.getSlot237PersonalEffect = void 0;
        var _mse = _msc(74496);
        _msb.getSlot237PersonalEffect = function(_msf) {
            var _msg = null,
                _msh = new _mse.SlotItemEffectModel(),
                _msi = new _mse.SlotItemEffectModel();
            if (553 == _msf.ship_id) _msi.houg = 4, _msi.kaih = 2;
            else {
                if (82 == _msf.ship_id) _msi.houg = 3, _msi.kaih = 1;
                else {
                    if (88 == _msf.ship_id) _msi.houg = 3, _msi.kaih = 1;
                    else {
                        if (554 == _msf.ship_id) _msi.houg = 4, _msi.kaih = 2;
                        else {
                            if (411 == _msf.ship_id) _msi.houg = 2;
                            else {
                                if (412 != _msf.ship_id) return _msh;
                                _msi.houg = 2;
                            }
                        }
                    }
                }
            }
            var _msj = _msf.get_slotnums(237);
            return _msh = _msi.multiply(_msj);
        };
    },
    14386: (_msk, _msl, _msm) => {
        'use strict';
        var _msn = null;
        defineModule(_msl);
        Object.defineProperty(_msl, '__esModule', {
            'value': !0
        }), _msl.getSlot238_239PersonalEffect = void 0;
        var _mso = _msm(74496);
        _msl.getSlot238_239PersonalEffect = function(_msp) {
            var _msq = null,
                _msr = new _mso.SlotItemEffectModel();
            return 501 != _msp.ship_id && 506 != _msp.ship_id && 502 != _msp.ship_id && 507 != _msp.ship_id || (_msr.kaih += 1, _msr.raig += 1), _msr;
        };
    },
    82229: (_mss, _mst, _msu) => {
        'use strict';
        var _msv = null;
        defineModule(_mst);
        Object.defineProperty(_mst, '__esModule', {
            'value': !0
        }), _mst.getSlot242PersonalEffect = void 0;
        var _msw = _msu(74496);
        _mst.getSlot242PersonalEffect = function(_msx) {
            var _msy = null,
                _msz = new _msw.SlotItemEffectModel(),
                _mt0 = !1,
                _mt1 = new _msw.SlotItemEffectModel();
            if (78 == _msx.ctype && (_mt1.houg += 2, _mt1.kaih += 1, _mt0 = !0), 'ほうしょう' == _msx.yomi && (_mt1.houg += 1, _mt0 = !0), 0 == _mt0) return _msz;
            var _mt2 = _msx.get_slotnums(242);
            return _msz.add(_mt1.multiply(_mt2)), _msz;
        };
    },
    10325: (_mt3, _mt4, _mt5) => {
        'use strict';
        var _mt6 = null;
        defineModule(_mt4);
        Object.defineProperty(_mt4, '__esModule', {
            'value': !0
        }), _mt4.getSlot243PersonalEffect = void 0;
        var _mt7 = _mt5(74496);
        _mt4.getSlot243PersonalEffect = function(_mt8) {
            var _mt9 = null,
                _mta = new _mt7.SlotItemEffectModel(),
                _mtb = !1,
                _mtc = new _mt7.SlotItemEffectModel();
            if (78 == _mt8.ctype && (_mtc.houg += 3, _mtc.kaih += 1, _mtb = !0), 'ほうしょう' == _mt8.yomi && (_mtc.houg += 2, _mtb = !0), 0 == _mtb) return _mta;
            var _mtd = _mt8.get_slotnums(243);
            return _mta.add(_mtc.multiply(_mtd)), _mta;
        };
    },
    351: (_mte, _mtf, _mtg) => {
        'use strict';
        var _mth = null;
        defineModule(_mtf);
        Object.defineProperty(_mtf, '__esModule', {
            'value': !0
        }), _mtf.getSlot244PersonalEffect = void 0;
        var _mti = _mtg(74496);
        _mtf.getSlot244PersonalEffect = function(_mtj) {
            var _mtk = null,
                _mtl = new _mti.SlotItemEffectModel(),
                _mtm = !1,
                _mtn = new _mti.SlotItemEffectModel();
            if (78 == _mtj.ctype && (_mtn.houg += 4, _mtn.kaih += 2, _mtm = !0), 'ほうしょう' == _mtj.yomi && (_mtn.houg += 3, _mtm = !0), 0 == _mtm) return _mtl;
            var _mto = _mtj.get_slotnums(244);
            return _mtl.add(_mtn.multiply(_mto)), _mtl;
        };
    },
    61977: (_mtp, _mtq, _mtr) => {
        'use strict';
        var _mts = null;
        defineModule(_mtq);
        Object.defineProperty(_mtq, '__esModule', {
            'value': !0
        }), _mtq.getSlot247PersonalEffect = void 0;
        var _mtt = _mtr(74496);
        _mtq.getSlot247PersonalEffect = function(_mtu) {
            var _mtv = null,
                _mtw = new _mtt.SlotItemEffectModel(),
                _mtx = !1,
                _mty = new _mtt.SlotItemEffectModel(),
                _mtz = 0;
            if ('フランス' == _mtu.getCountryName() && (_mty.houg += 2, _mty.houm += 2, _mtx = !0, _mtz = 1), 0 == _mtx) return _mtw;
            var _mu0 = _mtu.get_slotnums(247);
            if (_mtw.add(_mty.multiply(_mu0)), 0 == _mtz) return _mtw;
            var _mu1 = _mtu.get_each_level_nums(247),
                _mu2 = 0,
                _mu3 = 0;
            _mtz > 0 && _mu1.forEach(function(_mu4, _mu5) {
                _mu5 >= 4 && (_mu2 += _mu4), _mu5 >= 8 && (_mu3 += _mu4);
            });
            var _mu6 = _mu1[10];
            return 1 == _mtz && (_mu2 >= 1 && (_mtw.houg += 1 * _mu2, _mtw.houm += 1 * _mu2), _mu3 >= 1 && (_mtw.kaih += 1 * _mu3, _mtw.houg += 1 * _mu3, _mtw.houm += 1 * _mu3), _mu6 >= 1 && (_mtw.kaih += 1 * _mu6, _mtw.houm += 1 * _mu6)), _mtw;
        };
    },
    31797: function(_mu7, _mu8, _mu9) {
        'use strict';
        var _mua = null;
        var _mub = this && this.__importDefault || function(_muc) {
            var _mud = null;
            return _muc && _muc.__esModule ? _muc : {
                'default': _muc
            };
        };
        defineModule(_mu8);
        Object.defineProperty(_mu8, '__esModule', {
            'value': !0
        }), _mu8.getSlot266PersonalEffect2 = _mu8.getSlot266PersonalEffect = void 0;
        var _mue = _mu9(74496),
            _muf = _mub(_mu9(18622));
        _mu8.getSlot266PersonalEffect = function(_mug) {
            var _muh = null,
                _mui = new _mue.SlotItemEffectModel(),
                _muj = !1;
            if (566 != _mug.ship_id && 567 != _mug.ship_id && 568 != _mug.ship_id && 656 != _mug.ship_id && 670 != _mug.ship_id && 915 != _mug.ship_id && 951 != _mug.ship_id || (_muj = !0), 0 == _muj) return _mui;
            var _muk = _mug.get_slotnums(266);
            return 30 == _mug.ctype && (1 == _muk ? _mui.houg = 1 : _muk >= 2 && (_mui.houg = 3)), _mui;
        }, _mu8.getSlot266PersonalEffect2 = function(_mul) {
            var _mum = null,
                _mun = new _mue.SlotItemEffectModel(),
                _muo = 0,
                _mup = new _mue.SlotItemEffectModel();
            if (23 == _mul.ctype || 18 == _mul.ctype ? (_mup.houg = 1, _muo = 1) : 30 == _mul.ctype && (_mup.houg = 1, _muo = 2), ('しぐれ' == _mul.yomi || 'ゆきかぜ' == _mul.yomi || 'いそかぜ' == _mul.yomi) && (_mup.kaih = 1), 961 == _mul.ship_id && (_mup.houg += 1, _mup.houm += 1, _mup.kaih += 1), !_mup.exists()) return _mun;
            var _muq = _mul.get_slotnums(266);
            if (_mun = _mup.multiply(_muq), 0 == _muo) return _mun;
            for (var _mur = 0, _mus = 0, _mut = _mul.have_slot_ids(); _mus < _mut.length; _mus++) {
                var _muu = _mut[_mus],
                    _muv = _muf.default.model.slot.getMst(_muu),
                    _muw = _muv.equipType;
                (12 == _muw || 13 == _muw) && _muv.sakuteki >= 5 && (_mur += _mul.get_slotnums(parseInt(_muu)));
            }
            return _mur > 0 && (1 == _muo ? (_mun.houg += 1, _mun.kaih += 1, _mun.raig += 3) : 2 == _muo && (_mun.houg += 2, _mun.kaih += 1, _mun.raig += 3)), _mun;
        };
    },
    45738: function(_mux, _muy, _muz) {
        'use strict';
        var _mv0 = null;
        var _mv1 = this && this.__importDefault || function(_mv2) {
            var _mv3 = null;
            return _mv2 && _mv2.__esModule ? _mv2 : {
                'default': _mv2
            };
        };
        defineModule(_muy);
        Object.defineProperty(_muy, '__esModule', {
            'value': !0
        }), _muy.getSlot267PersonalEffect2 = _muy.getSlot267PersonalEffect = void 0;
        var _mv4 = _muz(74496),
            _mv5 = _mv1(_muz(18622));
        _muy.getSlot267PersonalEffect = function(_mv6) {
            var _mv7 = null,
                _mv8 = new _mv4.SlotItemEffectModel(),
                _mv9 = 0,
                _mva = 0;
            if (38 == _mv6.ctype || 22 == _mv6.ctype) _mv9 = 2, _mva = 1;
            else {
                if (30 != _mv6.ctype) return _mv8;
                _mv9 = 1, _mva = 1;
            }
            var _mvb = _mv6.get_slotnums(267) + _mv6.get_slotnums(366);
            return _mv8.houg = _mv9 * _mvb, _mv8.kaih = _mva * _mvb, _mv8;
        }, _muy.getSlot267PersonalEffect2 = function(_mvc) {
            var _mvd = null,
                _mve = new _mv4.SlotItemEffectModel(),
                _mvf = _mvc.get_slotnums(267),
                _mvg = _mvc.get_slotnums(366),
                _mvh = _mvf + _mvg;
            if (566 != _mvc.ship_id && 567 != _mvc.ship_id && 568 != _mvc.ship_id && 656 != _mvc.ship_id && 670 != _mvc.ship_id && 915 != _mvc.ship_id && 951 != _mvc.ship_id || (_mvf > 0 && (_mve.houg += 1), 1 == _mvg ? (_mve.houg += 1, _mve.tyku += 2) : _mvg >= 2 && (_mve.houg += 2, _mve.tyku += 4)), 38 != _mvc.ctype && 229 != _mvc.ship_id && [648, 961].indexOf(_mvc.ship_id) < 0) return _mve;
            var _mvi = !1,
                _mvj = !1,
                _mvk = !1,
                _mvl = !1,
                _mvm = !1,
                _mvn = !1,
                _mvo = !1,
                _mvp = !1,
                _mvq = !1,
                _mvr = !1,
                _mvs = !1,
                _mvt = 0,
                _mvu = 0,
                _mvv = 0;
            543 == _mvc.ship_id ? (_mve.houg = 1 * _mvh, _mvj = !0) : 229 == _mvc.ship_id ? _mvk = !0 : 542 == _mvc.ship_id ? (_mve.houg = 1 * _mvh, _mvl = !0) : 563 == _mvc.ship_id ? (_mve.houg = 1 * _mvh, _mvm = !0) : 564 == _mvc.ship_id ? (_mve.houg = 1 * _mvh, _mvn = !0) : 578 == _mvc.ship_id ? (_mve.houg = 1 * _mvh, _mvo = !0) : 569 == _mvc.ship_id ? (_mve.houg = 1 * _mvh, _mvp = !0) : 649 == _mvc.ship_id ? (_mve.houg = 2 * _mvh, _mvr = !0) : 955 == _mvc.ship_id || 960 == _mvc.ship_id ? (_mve.houg = 2 * _mvh, _mvs = !0) : 648 == _mvc.ship_id ? (_mve.houg = 2 * _mvh, _mvq = !0, _mvt = 1, _mvu = 1, _mvv = 1) : 961 == _mvc.ship_id && (_mve.houg = 2 * _mvh, _mvi = !0, _mvt = 1, _mvu = 1, _mvv = 1);
            for (var _mvw = 0, _mvx = 0, _mvy = 0, _mvz = _mvc.have_slot_ids(); _mvy < _mvz.length; _mvy++) {
                var _mw0 = _mvz[_mvy],
                    _mw1 = _mv5.default.model.slot.getMst(_mw0),
                    _mw2 = _mw1.equipType;
                12 != _mw2 && 13 != _mw2 || (_mw1.sakuteki >= 5 && (_mvw += _mvc.get_slotnums(parseInt(_mw0))), _mw1.taiku >= 2 && (_mvx += _mvc.get_slotnums(parseInt(_mw0))));
            }
            if (_mvw > 0 && _mvf > 0 && ((38 == _mvc.ctype || _mvq) && (_mve.houg += 2, _mve.raig += 3, _mve.kaih += 1, 955 == _mvc.ship_id ? _mve.raig -= 1 : 960 == _mvc.ship_id && (_mve.raig -= 2)), (_mvl || _mvj || _mvk || _mvm || _mvn || _mvo || _mvp || _mvq || _mvr || _mvs) && (_mve.houg += 1, _mve.raig += 3, _mve.kaih += 2)), _mvg > 0 && (_mvl || _mvj || _mvm || _mvn || _mvo || _mvk || _mvp || _mvq || _mvr || _mvi || _mvs)) {
                1 == _mvg ? (_mve.tyku += 3, _mve.houg += 1, _mve.houm += 1) : _mvg >= 2 && (_mve.tyku += 5, _mve.houg += 3, _mve.houm += 1, 955 == _mvc.ship_id && (_mve.houg += 1)), (_mvp || _mvq) && (_mve.houg += 1, _mve.tyku += 2), _mvw > 0 && (_mve.houg += 2, _mve.kaih += 2, _mve.raig += 4, _mve.houm += 2, 960 == _mvc.ship_id && (_mve.raig -= 1, _mve.houg += 1)), _mvx > 0 && (_mve.houg += 1, _mve.kaih += 3, _mve.tyku += 5, _mve.houm += 1);
                var _mw3 = _mvc.get_each_level_nums(366),
                    _mw4 = 0,
                    _mw5 = 0;
                _mw3.forEach(function(_mw6, _mw7) {
                    _mw7 >= 5 && (_mw4 += _mw6), _mw7 >= 8 && (_mw5 += _mw6);
                }), _mw4 >= 1 && (_mve.houm += 1 * _mw4), _mw5 >= 1 && (_mve.houg += 1 * _mw5);
                var _mw8 = _mw3[10];
                _mw8 >= 1 && (_mve.houm += 1 * _mw8);
            }
            var _mw9 = _mvc.get_slotnums(129),
                _mwa = _mvc.get_slotnums(74),
                _mwb = _mvc.get_slotnums(412);
            return _mvt > 0 && _mw9 > 0 && 1 == _mvt && (_mve.houg += 2, _mve.kaih += 3, _mve.tyku += 2), _mvv > 0 && _mwb > 0 && 1 == _mvv && (_mve.houg += 2, _mve.kaih += 3, _mve.tyku += 2), _mvu > 0 && _mwa > 0 && 1 == _mvu && (_mve.houg += 3, _mve.kaih -= 3), _mve;
        };
    },
    23934: (_mwc, _mwd, _mwe) => {
        'use strict';
        var _mwf = null;
        defineModule(_mwd);
        Object.defineProperty(_mwd, '__esModule', {
            'value': !0
        }), _mwd.getSlot271PersonalEffect = void 0;
        var _mwg = _mwe(74496);
        _mwd.getSlot271PersonalEffect = function(_mwh) {
            var _mwi = null,
                _mwj = new _mwg.SlotItemEffectModel(),
                _mwk = 0;
            if (508 != _mwh.ship_id && 509 != _mwh.ship_id && 888 != _mwh.ship_id && 883 != _mwh.ship_id || (_mwk = 1), 0 == _mwk) return _mwj;
            var _mwl = _mwh.get_each_level_nums(271),
                _mwm = 0,
                _mwn = 0,
                _mwo = 0,
                _mwp = _mwl[10];
            return _mwk > 0 && _mwl.forEach(function(_mwq, _mwr) {
                _mwr >= 4 && (_mwm += _mwq), _mwr >= 6 && (_mwn += _mwq), _mwr >= 8 && (_mwo += _mwq);
            }), 1 == _mwk && (_mwm >= 1 && (_mwj.houg += 1 * _mwm), _mwn >= 1 && (_mwj.tyku += 2 * _mwn), _mwo >= 1 && (_mwj.kaih += 2 * _mwo), _mwp >= 1 && (_mwj.houg += 1 * _mwp)), _mwj;
        };
    },
    17712: function(_mws, _mwt, _mwu) {
        'use strict';
        var _mwv = null;
        var _mww = this && this.__importDefault || function(_mwx) {
            var _mwy = null;
            return _mwx && _mwx.__esModule ? _mwx : {
                'default': _mwx
            };
        };
        defineModule(_mwt);
        Object.defineProperty(_mwt, '__esModule', {
            'value': !0
        }), _mwt.getSlot275PersonalEffect = void 0;
        var _mwz = _mwu(74496),
            _mx0 = _mww(_mwu(18622));
        _mwt.getSlot275PersonalEffect = function(_mx1) {
            var _mx2 = null,
                _mx3 = new _mwz.SlotItemEffectModel(),
                _mx4 = !1,
                _mx5 = new _mwz.SlotItemEffectModel(),
                _mx6 = 0,
                _mx7 = 0;
            if (894 != _mx1.ship_id && 899 != _mx1.ship_id || (_mx5.houg += 1, _mx5.tyku += 3, _mx5.kaih += 2, _mx4 = !0, _mx7 = 1, _mx6 = 1), 0 == _mx4) return _mx3;
            var _mx8 = _mx1.get_slotnums(275);
            _mx3.add(_mx5.multiply(_mx8));
            var _mx9 = 0;
            if (_mx6 > 0)
                for (var _mxa = 0, _mxb = _mx1.have_slot_ids(); _mxa < _mxb.length; _mxa++) {
                    var _mxc = _mxb[_mxa],
                        _mxd = _mx0.default.model.slot.getMst(_mxc),
                        _mxe = _mxd.equipType;
                    12 != _mxe && 13 != _mxe || (_mxd.sakuteki >= 5 && _mx1.get_slotnums(parseInt(_mxc)), _mxd.taiku >= 2 && (_mx9 += _mx1.get_slotnums(parseInt(_mxc))));
                }
            if (1 == _mx6 && _mx9 > 0 && (_mx3.tyku += 3, _mx3.kaih += 3), 0 == _mx7) return _mx3;
            var _mxf = _mx1.get_each_level_nums(275),
                _mxg = 0,
                _mxh = _mxf[10];
            return _mx7 > 0 && _mxf.forEach(function(_mxi, _mxj) {
                _mxj >= 7 && (_mxg += _mxi);
            }), 1 == _mx7 && (_mxg > 0 && (_mx3.tyku += 1 * _mxg, _mx3.kaih += 1 * _mxg), _mxh > 0 && (_mx3.houg += 1 * _mxh, _mx3.tyku += 1 * _mxh, _mx3.houm += 1 * _mxh)), _mx3;
        };
    },
    93733: (_mxk, _mxl, _mxm) => {
        'use strict';
        var _mxn = null;
        defineModule(_mxl);
        Object.defineProperty(_mxl, '__esModule', {
            'value': !0
        }), _mxl.getSlot277PersonalEffect = void 0;
        var _mxo = _mxm(74496);
        _mxl.getSlot277PersonalEffect = function(_mxp) {
            var _mxq = null,
                _mxr = new _mxo.SlotItemEffectModel(),
                _mxs = !1,
                _mxt = new _mxo.SlotItemEffectModel();
            if ('アメリカ' != _mxp.getCountryName() && 67 != _mxp.ctype && 78 != _mxp.ctype && 82 != _mxp.ctype && 88 != _mxp.ctype && 108 != _mxp.ctype && 112 != _mxp.ctype || (_mxt.houg += 1, _mxt.kaih += 1, _mxs = !0), 83 == _mxp.ctype && (_mxt.houg += 1, _mxt.kaih += 1, _mxt.tyku += 1, _mxs = !0), 0 == _mxs) return _mxr;
            var _mxu = _mxp.get_slotnums(277);
            return _mxr.add(_mxt.multiply(_mxu)), _mxr;
        };
    },
    34718: (_mxv, _mxw, _mxx) => {
        'use strict';
        var _mxy = null;
        defineModule(_mxw);
        Object.defineProperty(_mxw, '__esModule', {
            'value': !0
        }), _mxw.getSlot278PersonalEffect = void 0;
        var _mxz = _mxx(74496);
        _mxw.getSlot278PersonalEffect = function(_my0) {
            var _my1 = null,
                _my2 = new _mxz.SlotItemEffectModel();
            return 'アメリカ' == _my0.getCountryName() ? (_my2.tyku += 1, _my2.kaih += 3, _my2.saku += 1) : 67 == _my0.ctype || 78 == _my0.ctype || 82 == _my0.ctype || 88 == _my0.ctype || 108 == _my0.ctype || 112 == _my0.ctype ? (_my2.tyku += 1, _my2.kaih += 2) : 96 == _my0.ctype && (_my2.tyku += 1, _my2.kaih += 1), _my2;
        };
    },
    69245: (_my3, _my4, _my5) => {
        'use strict';
        var _my6 = null;
        defineModule(_my4);
        Object.defineProperty(_my4, '__esModule', {
            'value': !0
        }), _my4.getSlot279PersonalEffect = void 0;
        var _my7 = _my5(74496);
        _my4.getSlot279PersonalEffect = function(_my8) {
            var _my9 = null,
                _mya = new _my7.SlotItemEffectModel();
            return 'アメリカ' == _my8.getCountryName() ? (_mya.houg += 2, _mya.tyku += 2, _mya.kaih += 3, _mya.saku += 2) : 67 == _my8.ctype || 78 == _my8.ctype || 82 == _my8.ctype || 88 == _my8.ctype || 108 == _my8.ctype || 112 == _my8.ctype ? (_mya.houg += 1, _mya.tyku += 1, _mya.kaih += 2, _mya.saku += 1) : 96 == _my8.ctype && (_mya.houg += 1, _mya.tyku += 1, _mya.kaih += 1), _mya;
        };
    },
    18478: (_myb, _myc, _myd) => {
        'use strict';
        var _mye = null;
        defineModule(_myc);
        Object.defineProperty(_myc, '__esModule', {
            'value': !0
        }), _myc.getSlot282PersonalEffect = void 0;
        var _myf = _myd(74496);
        _myc.getSlot282PersonalEffect = function(_myg) {
            var _myh = null,
                _myi = new _myf.SlotItemEffectModel(),
                _myj = !1,
                _myk = !1;
            147 != _myg.ship_id && 73 != _myg.ctype && 81 != _myg.ctype || (_myj = !0), 'ゆうばり' == _myg.yomi && (_myk = !0);
            var _myl = new _myf.SlotItemEffectModel();
            if ((_myj || _myk) && (_myl.houg += 2, _myl.souk += 1), !_myl.exists()) return _myi;
            var _mym = _myg.get_slotnums(282);
            return _myi = _myl.multiply(_mym);
        };
    },
    2899: (_myn, _myo, _myp) => {
        'use strict';
        var _myq = null;
        defineModule(_myo);
        Object.defineProperty(_myo, '__esModule', {
            'value': !0
        }), _myo.getSlot283PersonalEffect = void 0;
        var _myr = _myp(74496);
        _myo.getSlot283PersonalEffect = function(_mys) {
            var _myt = null,
                _myu = new _myr.SlotItemEffectModel(),
                _myv = !1;
            147 != _mys.ship_id && 73 != _mys.ctype && 81 != _mys.ctype || (_myv = !0);
            var _myw = new _myr.SlotItemEffectModel();
            if (_myv && (_myw.raig += 3, _myw.houg += 1, _myw.souk += 1), !_myw.exists()) return _myu;
            var _myx = _mys.get_slotnums(283);
            return _myu = _myw.multiply(_myx);
        };
    },
    57120: (_myy, _myz, _mz0) => {
        'use strict';
        var _mz1 = null;
        defineModule(_myz);
        Object.defineProperty(_myz, '__esModule', {
            'value': !0
        }), _myz.getSlot285PersonalEffect = void 0;
        var _mz2 = _mz0(74496);
        _myz.getSlot285PersonalEffect = function(_mz3) {
            var _mz4 = null,
                _mz5 = new _mz2.SlotItemEffectModel(),
                _mz6 = !1;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_mz3.ship_id) >= 0 && (_mz6 = !0), 0 == _mz6) return _mz5;
            var _mz7 = _mz3.get_each_level_nums(285),
                _mz8 = _mz3.get_slotnums(285);
            _mz8 > 2 && (_mz8 = 2), _mz5.raig = 2 * _mz8, _mz5.kaih = 1 * _mz8;
            var _mz9 = _mz7[10];
            1 == _mz9 && (_mz5.houg += 1, _mz5.raig += 1), _mz9 >= 2 && (_mz5.houg += 2, _mz5.raig += 1), _mz9 >= 3 && (_mz5.raig += 3);
            var _mza = _mz3.get_slotnums(285);
            return 903 == _mz3.ship_id ? (_mza >= 2 && (_mz5.raig += 2), _mza >= 3 && (_mz5.raig += 2)) : 908 != _mz3.ship_id && 959 != _mz3.ship_id || (_mza >= 2 && (_mz5.raig += 1), _mza >= 3 && (_mz5.raig += 1)), _mz5;
        };
    },
    74985: function(_mzb, _mzc, _mzd) {
        'use strict';
        var _mze = null;
        var _mzf = this && this.__importDefault || function(_mzg) {
            var _mzh = null;
            return _mzg && _mzg.__esModule ? _mzg : {
                'default': _mzg
            };
        };
        defineModule(_mzc);
        Object.defineProperty(_mzc, '__esModule', {
            'value': !0
        }), _mzc.getSlot286PersonalEffect3 = _mzc.getSlot286PersonalEffect2 = _mzc.getSlot286PersonalEffect = void 0;
        var _mzi = _mzd(74496),
            _mzj = _mzf(_mzd(18622));
        _mzc.getSlot286PersonalEffect = function(_mzk) {
            var _mzl = null,
                _mzm = new _mzi.SlotItemEffectModel(),
                _mzn = !1;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960].indexOf(_mzk.ship_id) >= 0 && (_mzn = !0), 0 == _mzn) return _mzm;
            var _mzo = _mzk.get_each_level_nums(286),
                _mzp = _mzk.get_slotnums(286);
            _mzp > 2 && (_mzp = 2), _mzm.raig = 2 * _mzp, _mzm.kaih = 1 * _mzp;
            var _mzq = _mzo[10];
            if (1 == _mzq ? _mzm.houg = _mzm.houg + 1 : _mzq >= 2 && (_mzm.houg = _mzm.houg + 2), 30 == _mzk.ctype || 961 == _mzk.ship_id) {
                var _mzr = _mzo[5] + _mzo[6] + _mzo[7] + _mzo[8] + _mzo[9] + _mzo[10];
                1 == _mzr ? _mzm.raig = _mzm.raig + 1 : _mzr >= 2 && (_mzm.raig = _mzm.raig + 2);
            }
            return _mzm;
        }, _mzc.getSlot286PersonalEffect2 = function(_mzs) {
            var _mzt = null,
                _mzu = new _mzi.SlotItemEffectModel(),
                _mzv = !1,
                _mzw = 0;
            if ('たけ' == _mzs.yomi && (_mzv = !0, _mzw = 1), 0 == _mzv) return _mzu;
            var _mzx = _mzs.get_each_level_nums(286),
                _mzy = 0;
            return _mzw > 0 && _mzx.forEach(function(_mzz, _n00) {
                _n00 >= 7 && (_mzy += _mzz);
            }), 'たけ' == _mzs.yomi && (_mzu.raig += 7, _mzu.kaih += 2, _mzy >= 1 && (_mzu.raig += 2), _mzx[10] >= 1 && (_mzu.raig += 2)), _mzu;
        }, _mzc.getSlot286PersonalEffect3 = function(_n01) {
            var _n02 = null,
                _n03 = new _mzi.SlotItemEffectModel(),
                _n04 = !1,
                _n05 = new _mzi.SlotItemEffectModel(),
                _n06 = 0;
            if (662 != _n01.ship_id && 663 != _n01.ship_id && 668 != _n01.ship_id || (_n05.raig += 2, _n04 = !0, _n06 = 1), 0 == _n04) return _n03;
            var _n07 = _n01.get_slotnums(286);
            _n03.add(_n05.multiply(_n07));
            for (var _n08 = 0, _n09 = 0, _n0a = _n01.have_slot_ids(); _n09 < _n0a.length; _n09++) {
                var _n0b = _n0a[_n09],
                    _n0c = _mzj.default.model.slot.getMst(_n0b),
                    _n0d = _n0c.equipType;
                12 != _n0d && 13 != _n0d || (_n0c.sakuteki >= 5 && (_n08 += _n01.get_slotnums(parseInt(_n0b))), _n0c.taiku >= 2 && _n01.get_slotnums(parseInt(_n0b)));
            }
            return _n08 >= 1 && 1 == _n06 && (_n03.raig += 3, _n03.kaih += 2), _n03;
        };
    },
    9234: (_n0e, _n0f, _n0g) => {
        'use strict';
        var _n0h = null;
        defineModule(_n0f);
        Object.defineProperty(_n0f, '__esModule', {
            'value': !0
        }), _n0f.getSlot287PersonalEffect = void 0;
        var _n0i = _n0g(74496);
        _n0f.getSlot287PersonalEffect = function(_n0j) {
            var _n0k = null,
                _n0l = new _n0i.SlotItemEffectModel(),
                _n0m = new _n0i.SlotItemEffectModel(),
                _n0n = !1;
            if (488 == _n0j.ship_id || 141 == _n0j.ship_id || 160 == _n0j.ship_id || 624 == _n0j.ship_id || 656 == _n0j.ship_id ? (_n0m.tais = 1, _n0m.kaih = 1, _n0n = !0) : 662 != _n0j.ship_id && 961 != _n0j.ship_id || (_n0m.tais = 3, _n0n = !0), 0 == _n0n) return _n0l;
            var _n0o = _n0j.get_slotnums(287);
            return _n0l = _n0m.multiply(_n0o);
        };
    },
    30802: (_n0p, _n0q, _n0r) => {
        'use strict';
        var _n0s = null;
        defineModule(_n0q);
        Object.defineProperty(_n0q, '__esModule', {
            'value': !0
        }), _n0q.getSlot288PersonalEffect = void 0;
        var _n0t = _n0r(74496);
        _n0q.getSlot288PersonalEffect = function(_n0u) {
            var _n0v = null,
                _n0w = new _n0t.SlotItemEffectModel(),
                _n0x = new _n0t.SlotItemEffectModel(),
                _n0y = !1;
            if (488 == _n0u.ship_id || 141 == _n0u.ship_id || 160 == _n0u.ship_id || 656 == _n0u.ship_id ? (_n0x.tais = 2, _n0x.kaih = 1, _n0y = !0) : 624 == _n0u.ship_id ? (_n0x.houg = 1, _n0x.tais = 3, _n0x.kaih = 2, _n0y = !0) : 662 != _n0u.ship_id && 961 != _n0u.ship_id || (_n0x.tais = 4, _n0x.kaih = 1, _n0y = !0), 0 == _n0y) return _n0w;
            var _n0z = _n0u.get_slotnums(288);
            return _n0w = _n0x.multiply(_n0z);
        };
    },
    97002: function(_n10, _n11, _n12) {
        'use strict';
        var _n13 = null;
        var _n14 = this && this.__importDefault || function(_n15) {
            var _n16 = null;
            return _n15 && _n15.__esModule ? _n15 : {
                'default': _n15
            };
        };
        defineModule(_n11);
        Object.defineProperty(_n11, '__esModule', {
            'value': !0
        }), _n11.getSlot289PersonalEffect = void 0;
        var _n17 = _n12(74496),
            _n18 = _n14(_n12(18622));
        _n11.getSlot289PersonalEffect = function(_n19) {
            var _n1a = null,
                _n1b = new _n17.SlotItemEffectModel(),
                _n1c = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n1d = 0,
                _n1e = new _n17.SlotItemEffectModel();
            if (149 == _n19.ship_id || 591 == _n19.ship_id) _n1e.houg = 2, _n1e.tyku = 1, _n1d = 1;
            else {
                if (150 == _n19.ship_id || 592 == _n19.ship_id) _n1e.houg = 1;
                else {
                    if (152 == _n19.ship_id) _n1e.houg = 1;
                    else {
                        if (151 != _n19.ship_id && 593 != _n19.ship_id && 954 != _n19.ship_id) return _n1b;
                        _n1e.houg = 2, _n1e.tyku = 2, _n1e.kaih = 2, _n1d = 1;
                    }
                }
            }
            var _n1f = _n19.get_slotnums(289);
            if (_n1b = _n1e.multiply(_n1f), _n1c[_n19.ship_id]) {
                var _n1g = _n19.get_each_level_nums(289),
                    _n1h = new Array();
                _n1g.forEach(function(_n1i, _n1j) {
                    var _n1k = null;
                    for (var _n1l = 1; _n1l <= _n19.SLOT_LEVEL_MAX; _n1l++) _n1j >= _n1l && (null == _n1h[_n1l] && (_n1h[_n1l] = 0), _n1h[_n1l] += _n1i);
                });
                var _n1m = _n1c[_n19.ship_id];
                1 == _n1m ? (_n1h[1] >= 1 && (_n1b.kaih += 1 * _n1h[1]), _n1h[3] >= 1 && (_n1b.tyku = _n1b.tyku + 1 * _n1h[3]), _n1h[5] >= 1 && (_n1b.houg = _n1b.houg + 1 * _n1h[5]), _n1h[7] >= 1 && (_n1b.kaih += 1 * _n1h[7]), _n1h[8] >= 1 && (_n1b.tyku += 1 * _n1h[8]), _n1h[9] >= 1 && (_n1b.houg += 1 * _n1h[9]), _n1h[10] >= 1 && (_n1b.kaih += 1 * _n1h[10])) : 2 == _n1m ? (_n1h[4] >= 1 && (_n1b.tyku += 1 * _n1h[4]), _n1h[6] >= 1 && (_n1b.kaih += 1 * _n1h[6]), _n1h[8] >= 1 && (_n1b.houg += 1 * _n1h[8]), _n1h[10] >= 1 && (_n1b.kaih += 1 * _n1h[10])) : 3 == _n1m && (_n1h[7] >= 1 && (_n1b.tyku += 1 * _n1h[7]), _n1h[9] >= 1 && (_n1b.houg += 1 * _n1h[9]), _n1h[10] >= 1 && (_n1b.kaih += 1 * _n1h[10]));
            }
            if (0 == _n1d) return _n1b;
            for (var _n1n = 0, _n1o = 0, _n1p = _n19.have_slot_ids(); _n1o < _n1p.length; _n1o++) {
                var _n1q = _n1p[_n1o],
                    _n1r = _n18.default.model.slot.getMst(_n1q),
                    _n1s = _n1r.equipType;
                (12 == _n1s || 13 == _n1s) && _n1r.sakuteki >= 5 && (_n1n += _n19.get_slotnums(parseInt(_n1q)));
            }
            return _n1n > 0 && (_n1b.houg += 2, _n1b.kaih += 2), _n1b;
        };
    },
    16748: function(_n1t, _n1u, _n1v) {
        'use strict';
        var _n1w = null;
        var _n1x = this && this.__importDefault || function(_n1y) {
            var _n1z = null;
            return _n1y && _n1y.__esModule ? _n1y : {
                'default': _n1y
            };
        };
        defineModule(_n1u);
        Object.defineProperty(_n1u, '__esModule', {
            'value': !0
        }), _n1u.getSlot290PersonalEffect = void 0;
        var _n20 = _n1v(74496),
            _n21 = _n1x(_n1v(18622));
        _n1u.getSlot290PersonalEffect = function(_n22) {
            var _n23 = null,
                _n24 = new _n20.SlotItemEffectModel(),
                _n25 = 0,
                _n26 = new _n20.SlotItemEffectModel();
            if (411 == _n22.ship_id) _n26.houg = 1;
            else {
                if (412 == _n22.ship_id) _n26.houg = 1;
                else {
                    if (82 == _n22.ship_id) _n26.houg = 2, _n26.tyku = 2, _n26.kaih = 1, _n25 = 1;
                    else {
                        if (553 == _n22.ship_id) _n26.houg = 3, _n26.tyku = 2, _n26.kaih = 1, _n26.houm = 3, _n25 = 1;
                        else {
                            if (88 == _n22.ship_id) _n26.houg = 2, _n26.tyku = 2, _n26.kaih = 1, _n25 = 1;
                            else {
                                if (554 != _n22.ship_id) return _n24;
                                _n26.houg = 3, _n26.tyku = 2, _n26.kaih = 2, _n26.houm = 3, _n25 = 1;
                            }
                        }
                    }
                }
            }
            var _n27 = _n22.get_slotnums(290);
            if (_n24 = _n26.multiply(_n27), 0 == _n25) return _n24;
            for (var _n28 = 0, _n29 = 0, _n2a = _n22.have_slot_ids(); _n29 < _n2a.length; _n29++) {
                var _n2b = _n2a[_n29],
                    _n2c = _n21.default.model.slot.getMst(_n2b),
                    _n2d = _n2c.equipType;
                (12 == _n2d || 13 == _n2d) && _n2c.taiku >= 2 && (_n28 += _n22.get_slotnums(parseInt(_n2b)));
            }
            return _n28 > 0 && (_n24.tyku += 2, _n24.kaih += 3), _n24;
        };
    },
    53618: (_n2e, _n2f, _n2g) => {
        'use strict';
        var _n2h = null;
        defineModule(_n2f);
        Object.defineProperty(_n2f, '__esModule', {
            'value': !0
        }), _n2f.getSlot291PersonalEffect = void 0;
        var _n2i = _n2g(74496);
        _n2f.getSlot291PersonalEffect = function(_n2j) {
            var _n2k = null,
                _n2l = new _n2i.SlotItemEffectModel(),
                _n2m = new _n2i.SlotItemEffectModel();
            if (553 == _n2j.ship_id) _n2m.houg = 6, _n2m.kaih = 1;
            else {
                if (554 != _n2j.ship_id) return _n2l;
                _n2m.houg = 6, _n2m.kaih = 1;
            }
            var _n2n = _n2j.get_slotnums(291);
            return _n2l = _n2m.multiply(_n2n);
        };
    },
    72573: (_n2o, _n2p, _n2q) => {
        'use strict';
        var _n2r = null;
        defineModule(_n2p);
        Object.defineProperty(_n2p, '__esModule', {
            'value': !0
        }), _n2p.getSlot292PersonalEffect = void 0;
        var _n2s = _n2q(74496);
        _n2p.getSlot292PersonalEffect = function(_n2t) {
            var _n2u = null,
                _n2v = new _n2s.SlotItemEffectModel(),
                _n2w = new _n2s.SlotItemEffectModel();
            if (553 == _n2t.ship_id) _n2w.houg = 8, _n2w.kaih = 2, _n2w.tyku = 1;
            else {
                if (554 != _n2t.ship_id) return _n2v;
                _n2w.houg = 8, _n2w.kaih = 2, _n2w.tyku = 1;
            }
            var _n2x = _n2t.get_slotnums(292);
            return _n2v = _n2w.multiply(_n2x);
        };
    },
    8955: function(_n2y, _n2z, _n30) {
        'use strict';
        var _n31 = null;
        var _n32 = this && this.__importDefault || function(_n33) {
            var _n34 = null;
            return _n33 && _n33.__esModule ? _n33 : {
                'default': _n33
            };
        };
        defineModule(_n2z);
        Object.defineProperty(_n2z, '__esModule', {
            'value': !0
        }), _n2z.getSlot293PersonalEffect = void 0;
        var _n35 = _n30(74496),
            _n36 = _n32(_n30(18622));
        _n2z.getSlot293PersonalEffect = function(_n37) {
            var _n38 = null,
                _n39 = new _n35.SlotItemEffectModel(),
                _n3a = new _n35.SlotItemEffectModel(),
                _n3b = 0;
            if (66 == _n37.ctype || 28 == _n37.ctype) _n3a.houg = 2, _n3a.tyku = 1, _n3a.kaih = 3, _n3b = 1;
            else {
                if (74 != _n37.ctype && 77 != _n37.ctype) return _n39;
                _n3a.houg = 1, _n3a.tyku = 1, _n3a.kaih = 2, _n3b = 2;
            }
            var _n3c = _n37.get_slotnums(293);
            _n39 = _n3a.multiply(_n3c);
            for (var _n3d = 0, _n3e = 0, _n3f = _n37.have_slot_ids(); _n3e < _n3f.length; _n3e++) {
                var _n3g = _n3f[_n3e],
                    _n3h = _n36.default.model.slot.getMst(_n3g),
                    _n3i = _n3h.equipType;
                (12 == _n3i || 13 == _n3i) && _n3h.sakuteki >= 5 && (_n3d += _n37.get_slotnums(parseInt(_n3g)));
            }
            var _n3j = _n37.get_slotnums(174);
            return 1 == _n3b ? (_n3d > 0 && (_n39.houg += 2, _n39.kaih += 3, _n39.raig += 1), 1 == _n3j ? (_n39.houg += 2, _n39.raig += 4) : _n3j >= 2 && (_n39.houg += 3, _n39.raig += 7)) : 2 == _n3b && _n3d > 0 && (_n39.houg += 2, _n39.kaih += 3, _n39.tais += 1), _n39;
        };
    },
    98947: function(_n3k, _n3l, _n3m) {
        'use strict';
        var _n3n = null;
        var _n3o = this && this.__importDefault || function(_n3p) {
            var _n3q = null;
            return _n3p && _n3p.__esModule ? _n3p : {
                'default': _n3p
            };
        };
        defineModule(_n3l);
        Object.defineProperty(_n3l, '__esModule', {
            'value': !0
        }), _n3l.getSlot294PersonalEffect = void 0;
        var _n3r = _n3m(74496),
            _n3s = _n3o(_n3m(18622));
        _n3l.getSlot294PersonalEffect = function(_n3t) {
            var _n3u = null,
                _n3v = new _n3r.SlotItemEffectModel(),
                _n3w = new _n3r.SlotItemEffectModel(),
                _n3x = 0,
                _n3y = _n3t.get_slotnums(294);
            if (12 != _n3t.ctype && 1 != _n3t.ctype && 5 != _n3t.ctype) return _n3v;
            _n3w.houg = 1, 959 == _n3t.ship_id && (_n3w.houg += 1, _n3y >= 2 && (_n3v.houg += 2), _n3y >= 3 && (_n3v.houg += 3), _n3x = 1), _n3v.add(_n3w.multiply(_n3y));
            for (var _n3z = 0, _n40 = 0, _n41 = _n3t.have_slot_ids(); _n40 < _n41.length; _n40++) {
                var _n42 = _n41[_n40],
                    _n43 = _n3s.default.model.slot.getMst(_n42),
                    _n44 = _n43.equipType;
                (12 == _n44 || 13 == _n44) && _n43.sakuteki >= 5 && (_n3z += _n3t.get_slotnums(parseInt(_n42)));
            }
            var _n45 = _n3t.get_slotnums(13),
                _n46 = _n3t.get_slotnums(125),
                _n47 = _n3t.get_slotnums(285),
                _n48 = _n45 + _n46 + _n47;
            if (_n3z > 0 && (_n3v.houg += 3, _n3v.kaih += 2, _n3v.raig += 1), 1 == _n48 ? (_n3v.houg += 1, _n3v.raig += 3) : _n48 >= 2 && (_n3v.houg += 2, _n3v.raig += 5), _n47 >= 1 && (_n3v.raig += 1), 0 == _n3x) return _n3v;
            var _n49 = _n3t.get_each_level_nums(294),
                _n4a = [];
            return _n3x > 0 && _n49.forEach(function(_n4b, _n4c) {
                var _n4d = null;
                for (var _n4e = 1; _n4e <= _n3t.SLOT_LEVEL_MAX; _n4e++) null == _n4a[_n4e] && (_n4a[_n4e] = 0), _n4c >= _n4e && (_n4a[_n4e] += _n4b);
            }), 1 == _n3x && (_n4a[6] >= 1 && (_n3v.houm += 4 * _n4a[6]), _n4a[7] >= 1 && (_n3v.houg = _n3v.houg + 6 * _n4a[7]), _n4a[8] >= 1 && (_n3v.houg = _n3v.houg + 1 * _n4a[8]), _n4a[9] >= 1 && (_n3v.houg = _n3v.houg + 1 * _n4a[9]), _n4a[10] >= 1 && (_n3v.houg += 1 * _n4a[10])), _n3v;
        };
    },
    44726: function(_n4f, _n4g, _n4h) {
        'use strict';
        var _n4i = null;
        var _n4j = this && this.__importDefault || function(_n4k) {
            var _n4l = null;
            return _n4k && _n4k.__esModule ? _n4k : {
                'default': _n4k
            };
        };
        defineModule(_n4g);
        Object.defineProperty(_n4g, '__esModule', {
            'value': !0
        }), _n4g.getSlot295PersonalEffect = void 0;
        var _n4m = _n4h(74496),
            _n4n = _n4j(_n4h(18622));
        _n4g.getSlot295PersonalEffect = function(_n4o) {
            var _n4p = null,
                _n4q = new _n4m.SlotItemEffectModel(),
                _n4r = new _n4m.SlotItemEffectModel(),
                _n4s = _n4o.get_slotnums(295);
            if (12 != _n4o.ctype && 1 != _n4o.ctype && 5 != _n4o.ctype) return _n4q;
            _n4r.houg = 2, _n4r.tyku = 2, 666 == _n4o.ship_id ? (_n4r.houg += 1, _n4r.tyku += 1, _n4r.tais += 1) : 959 == _n4o.ship_id && (_n4r.houg += 2, _n4s >= 2 && (_n4q.houg += 2), _n4s >= 3 && (_n4q.houg += 3)), _n4q.add(_n4r.multiply(_n4s));
            for (var _n4t = 0, _n4u = 0, _n4v = 0, _n4w = _n4o.have_slot_ids(); _n4v < _n4w.length; _n4v++) {
                var _n4x = _n4w[_n4v],
                    _n4y = _n4n.default.model.slot.getMst(_n4x),
                    _n4z = _n4y.equipType;
                12 != _n4z && 13 != _n4z || (_n4y.sakuteki >= 5 && (_n4t += _n4o.get_slotnums(parseInt(_n4x))), _n4y.taiku >= 2 && (_n4u += _n4o.get_slotnums(parseInt(_n4x))));
            }
            var _n50 = _n4o.get_slotnums(13),
                _n51 = _n4o.get_slotnums(125),
                _n52 = _n4o.get_slotnums(285),
                _n53 = _n50 + _n51 + _n52;
            return _n4t > 0 && (_n4q.houg += 3, _n4q.kaih += 2, _n4q.raig += 1), 1 == _n53 ? (_n4q.houg += 1, _n4q.raig += 3) : _n53 >= 2 && (_n4q.houg += 2, _n4q.raig += 5), _n52 >= 1 && (_n4q.raig += 1), _n4u > 0 && (_n4q.tyku += 6), _n4q;
        };
    },
    93065: function(_n54, _n55, _n56) {
        'use strict';
        var _n57 = null;
        var _n58 = this && this.__importDefault || function(_n59) {
            var _n5a = null;
            return _n59 && _n59.__esModule ? _n59 : {
                'default': _n59
            };
        };
        defineModule(_n55);
        Object.defineProperty(_n55, '__esModule', {
            'value': !0
        }), _n55.getSlot296PersonalEffect = void 0;
        var _n5b = _n56(74496),
            _n5c = _n58(_n56(18622));
        _n55.getSlot296PersonalEffect = function(_n5d) {
            var _n5e = null,
                _n5f = new _n5b.SlotItemEffectModel(),
                _n5g = new _n5b.SlotItemEffectModel();
            1 != _n5d.ctype && 5 != _n5d.ctype && 10 != _n5d.ctype && 23 != _n5d.ctype || (_n5g.houg += 1), 10 != _n5d.ctype && 23 != _n5d.ctype || (_n5g.kaih += 1), 145 == _n5d.ship_id || 961 == _n5d.ship_id ? (_n5g.houg += 1, _n5g.tyku += 1) : 144 == _n5d.ship_id ? (_n5g.houg += 1, _n5g.raig += 1) : 469 == _n5d.ship_id || 588 == _n5d.ship_id || 667 == _n5d.ship_id || 587 == _n5d.ship_id || 242 == _n5d.ship_id ? _n5g.kaih += 1 : 497 == _n5d.ship_id ? (_n5g.houg += 1, _n5g.kaih += 1) : 244 == _n5d.ship_id ? _n5g.kaih += 1 : 498 == _n5d.ship_id ? (_n5g.tyku += 1, _n5g.kaih += 1) : 627 == _n5d.ship_id ? (_n5g.houg += 2, _n5g.raig += 1) : 903 != _n5d.ship_id && 908 != _n5d.ship_id || (_n5g.houg += 3);
            var _n5h = !0;
            if (_n5g.exists() || (_n5h = !1), 0 == _n5h) return _n5f;
            var _n5i = _n5d.get_slotnums(296);
            _n5f = _n5g.multiply(_n5i);
            var _n5j = 0;
            if (1 != _n5d.ctype && 5 != _n5d.ctype && 10 != _n5d.ctype || (_n5j = 1), 23 == _n5d.ctype && (_n5j = 2), 0 == _n5j) return _n5f;
            for (var _n5k = 0, _n5l = 0, _n5m = 0, _n5n = _n5d.have_slot_ids(); _n5m < _n5n.length; _n5m++) {
                var _n5o = _n5n[_n5m],
                    _n5p = _n5c.default.model.slot.getMst(_n5o),
                    _n5q = _n5p.equipType;
                12 != _n5q && 13 != _n5q || (_n5p.sakuteki >= 5 && (_n5k += _n5d.get_slotnums(parseInt(_n5o))), _n5p.taiku >= 2 && (_n5l += _n5d.get_slotnums(parseInt(_n5o))));
            }
            return _n5k > 0 && (1 == _n5j ? (_n5f.houg += 1, _n5f.kaih += 2, _n5f.raig += 2) : 2 == _n5j && (_n5f.houg += 1, _n5f.kaih += 2, _n5f.raig += 3)), _n5d.get_slotnums(285) + _n5d.get_slotnums(125) >= 1 && 1 == _n5j && (_n5f.houg += 1, _n5f.raig += 3), _n5d.get_slotnums(15) + _n5d.get_slotnums(286) >= 1 && 2 == _n5j && (_n5f.houg += 1, _n5f.raig += 3), _n5l > 0 && (1 == _n5j ? _n5f.tyku += 5 : 2 == _n5j && (_n5f.tyku += 6)), _n5f;
        };
    },
    85767: (_n5r, _n5s, _n5t) => {
        'use strict';
        var _n5u = null;
        defineModule(_n5s);
        Object.defineProperty(_n5s, '__esModule', {
            'value': !0
        }), _n5s.getSlot297PersonalEffect = void 0;
        var _n5v = _n5t(74496);
        _n5s.getSlot297PersonalEffect = function(_n5w) {
            var _n5x = null,
                _n5y = new _n5v.SlotItemEffectModel(),
                _n5z = new _n5v.SlotItemEffectModel();
            if (12 == _n5w.ctype) _n5z.kaih = 2;
            else {
                if (1 != _n5w.ctype && 5 != _n5w.ctype) return _n5y;
                _n5z.kaih = 1;
            }
            var _n60 = _n5w.get_slotnums(297);
            return _n5y = _n5z.multiply(_n60);
        };
    },
    38314: (_n61, _n62, _n63) => {
        'use strict';
        var _n64 = null;
        defineModule(_n62);
        Object.defineProperty(_n62, '__esModule', {
            'value': !0
        }), _n62.getSlot301PersonalEffect = void 0;
        var _n65 = _n63(74496);
        _n62.getSlot301PersonalEffect = function(_n66) {
            var _n67 = null,
                _n68 = new _n65.SlotItemEffectModel(),
                _n69 = new _n65.SlotItemEffectModel();
            67 != _n66.ctype && 78 != _n66.ctype && 82 != _n66.ctype && 88 != _n66.ctype && 108 != _n66.ctype && 112 != _n66.ctype || (_n69.tyku += 2, _n69.kaih += 1, _n69.souk += 1);
            var _n6a = !0;
            if (_n69.exists() || (_n6a = !1), 0 == _n6a) return _n68;
            var _n6b = _n66.get_slotnums(301);
            return _n68 = _n69.multiply(_n6b);
        };
    },
    59747: (_n6c, _n6d, _n6e) => {
        'use strict';
        var _n6f = null;
        defineModule(_n6d);
        Object.defineProperty(_n6d, '__esModule', {
            'value': !0
        }), _n6d.getSlot302PersonalEffect = void 0;
        var _n6g = _n6e(74496);
        _n6d.getSlot302PersonalEffect = function(_n6h) {
            var _n6i = null,
                _n6j = new _n6g.SlotItemEffectModel(),
                _n6k = new _n6g.SlotItemEffectModel();
            if (76 == _n6h.ctype && (_n6k.tais = 1, _n6k.kaih = 1), !_n6k.exists()) return _n6j;
            var _n6l = _n6h.get_slotnums(302);
            return _n6j = _n6k.multiply(_n6l);
        };
    },
    40649: (_n6m, _n6n, _n6o) => {
        'use strict';
        var _n6p = null;
        defineModule(_n6n);
        Object.defineProperty(_n6n, '__esModule', {
            'value': !0
        }), _n6n.getSlot303PersonalEffect = void 0;
        var _n6q = _n6o(74496);
        _n6n.getSlot303PersonalEffect = function(_n6r) {
            var _n6s = null,
                _n6t = new _n6q.SlotItemEffectModel(),
                _n6u = new _n6q.SlotItemEffectModel();
            if (16 == _n6r.ctype || 4 == _n6r.ctype || 20 == _n6r.ctype || 41 == _n6r.ctype ? (_n6u.houg = 1, _n6u.tyku = 1) : 89 == _n6r.ctype && (_n6u.houg = 1, _n6u.tyku = 2, _n6u.kaih = 1), !_n6u.exists()) return _n6t;
            var _n6v = _n6r.get_slotnums(303);
            return _n6t = _n6u.multiply(_n6v);
        };
    },
    13533: (_n6w, _n6x, _n6y) => {
        'use strict';
        var _n6z = null;
        defineModule(_n6x);
        Object.defineProperty(_n6x, '__esModule', {
            'value': !0
        }), _n6x.getSlot304PersonalEffect = void 0;
        var _n70 = _n6y(74496);
        _n6x.getSlot304PersonalEffect = function(_n71) {
            var _n72 = null,
                _n73 = new _n70.SlotItemEffectModel(),
                _n74 = new _n70.SlotItemEffectModel();
            if (16 == _n71.ctype || 4 == _n71.ctype || 20 == _n71.ctype || 41 == _n71.ctype ? (_n74.houg = 1, _n74.tais = 1, _n74.kaih = 1) : 89 == _n71.ctype && (_n74.houg = 1, _n74.tais = 2, _n74.kaih = 2), !_n74.exists()) return _n73;
            var _n75 = _n71.get_slotnums(304);
            return _n73 = _n74.multiply(_n75);
        };
    },
    99791: (_n76, _n77, _n78) => {
        'use strict';
        var _n79 = null;
        defineModule(_n77);
        Object.defineProperty(_n77, '__esModule', {
            'value': !0
        }), _n77.getSlot305More320mmGunPersonalEffect = void 0;
        var _n7a = _n78(74496);
        _n77.getSlot305More320mmGunPersonalEffect = function(_n7b) {
            var _n7c = null,
                _n7d = new _n7a.SlotItemEffectModel(),
                _n7e = _n7b.get_slotnums(426),
                _n7f = _n7b.get_slotnums(427),
                _n7g = _n7b.get_slotnums(428),
                _n7h = _n7b.get_slotnums(429),
                _n7i = _n7e + _n7f + _n7g + _n7h;
            return 113 == _n7b.ctype ? (_n7d.houg = _n7d.houg + 2 * _n7i, _n7e >= 1 && (_n7d.houg = _n7d.houg + 1 * _n7e, _n7d.kaih = _n7d.kaih + 1 * _n7e, (_n7e >= 2 || _n7f >= 1) && (_n7d.houg = _n7d.houg + 1, _n7d.kaih = _n7d.kaih + 1)), _n7g >= 1 && (_n7d.houg = _n7d.houg + 1 * _n7g, _n7d.kaih = _n7d.kaih + 1 * _n7g, (_n7g >= 2 || _n7h >= 1) && (_n7d.houg = _n7d.houg + 2, _n7d.kaih = _n7d.kaih + 1))) : 73 == _n7b.ctype ? (_n7d.houg = _n7d.houg + 1 * _n7i, _n7e >= 1 && (_n7d.houg = _n7d.houg + 1 * _n7e, _n7d.kaih = _n7d.kaih + 1 * _n7e, (_n7e >= 2 || _n7f >= 1) && (_n7d.houg = _n7d.houg + 1)), _n7g >= 1 && (_n7d.houg = _n7d.houg + 1 * _n7g, _n7d.kaih = _n7d.kaih + 1 * _n7g, (_n7g >= 2 || _n7h >= 1) && (_n7d.houg = _n7d.houg + 1))) : 58 == _n7b.ctype && _n7g >= 1 && (_n7d.houg = _n7d.houg + 1 * _n7g, _n7d.kaih = _n7d.kaih + 2 * _n7g, (_n7g >= 2 || _n7h >= 1) && (_n7d.houg = _n7d.houg + 2, _n7d.kaih = _n7d.kaih + 1)), _n7d;
        };
    },
    12138: (_n7j, _n7k, _n7l) => {
        'use strict';
        var _n7m = null;
        defineModule(_n7k);
        Object.defineProperty(_n7k, '__esModule', {
            'value': !0
        }), _n7k.getSlot305_And_306_PersonalEffect = void 0;
        var _n7n = _n7l(74496);
        _n7k.getSlot305_And_306_PersonalEffect = function(_n7o) {
            var _n7p = null,
                _n7q = new _n7n.SlotItemEffectModel(),
                _n7r = new _n7n.SlotItemEffectModel();
            if (76 == _n7o.ctype && (_n7r.tais = 1, _n7r.kaih = 1), 'しんよう' == _n7o.yomi ? (_n7r.tais += 2, _n7r.kaih += 1) : 'グラーフ・ツェッペリン' != _n7o.yomi && 'アクィラ' != _n7o.yomi || (_n7r.houg = 1, _n7r.kaih = 1), !_n7r.exists()) return _n7q;
            var _n7s = _n7o.get_slotnums(305) + _n7o.get_slotnums(306);
            return _n7q = _n7r.multiply(_n7s);
        };
    },
    30042: (_n7t, _n7u, _n7v) => {
        'use strict';
        var _n7w = null;
        defineModule(_n7u);
        Object.defineProperty(_n7u, '__esModule', {
            'value': !0
        }), _n7u.getSlot307PersonalEffect = void 0;
        var _n7x = _n7v(74496);
        _n7u.getSlot307PersonalEffect = function(_n7y) {
            var _n7z = null,
                _n80 = new _n7x.SlotItemEffectModel(),
                _n81 = new _n7x.SlotItemEffectModel();
            if ('アメリカ' == _n7y.getCountryName() && (_n81.houg = 1, _n81.tyku = 1, _n81.kaih = 1), !_n81.exists()) return _n80;
            var _n82 = _n7y.get_slotnums(307);
            return _n80 = _n81.multiply(_n82);
        };
    },
    33623: (_n83, _n84, _n85) => {
        'use strict';
        var _n86 = null;
        defineModule(_n84);
        Object.defineProperty(_n84, '__esModule', {
            'value': !0
        }), _n84.getSlot308PersonalEffect = void 0;
        var _n87 = _n85(74496);
        _n84.getSlot308PersonalEffect = function(_n88) {
            var _n89 = null,
                _n8a = new _n87.SlotItemEffectModel(),
                _n8b = new _n87.SlotItemEffectModel();
            if ('アメリカ' == _n88.getCountryName() && (_n8b.houg = 1, _n8b.tyku = 1, _n8b.kaih = 1), 2 == _n88.stype ? _n8b.houg += 1 : 1 == _n88.stype && (_n8b.tyku += 1, _n8b.kaih += 1), 651 != _n88.ship_id && 656 != _n88.ship_id || (_n8b.houg += 1, _n8b.tyku += 1, _n8b.kaih += 1), !_n8b.exists()) return _n8a;
            var _n8c = _n88.get_slotnums(308);
            return _n8a = _n8b.multiply(_n8c);
        };
    },
    17732: (_n8d, _n8e, _n8f) => {
        'use strict';
        var _n8g = null;
        defineModule(_n8e);
        Object.defineProperty(_n8e, '__esModule', {
            'value': !0
        }), _n8e.getSlot30_410PersonalEffect = void 0;
        var _n8h = _n8f(74496);
        _n8e.getSlot30_410PersonalEffect = function(_n8i) {
            var _n8j = null,
                _n8k = new _n8h.SlotItemEffectModel();
            return 73 != _n8i.ship_id && 501 != _n8i.ship_id && 506 != _n8i.ship_id && 502 != _n8i.ship_id && 507 != _n8i.ship_id || (_n8k.tyku += 3, _n8k.kaih += 2, _n8k.saku += 2, _n8i.get_slotnums(410) >= 1 && (_n8k.tyku += 2, _n8k.kaih += 2, _n8k.houg += 1, _n8k.souk += 1)), 54 == _n8i.ctype && (_n8k.tyku += 3, _n8k.kaih += 2, _n8k.saku += 2, _n8i.get_slotnums(410) >= 1 && (_n8k.tyku += 2, _n8k.kaih += 2, _n8k.houg += 1, _n8k.souk += 1)), _n8k;
        };
    },
    85630: function(_n8l, _n8m, _n8n) {
        'use strict';
        var _n8o = null;
        var _n8p = this && this.__importDefault || function(_n8q) {
            var _n8r = null;
            return _n8q && _n8q.__esModule ? _n8q : {
                'default': _n8q
            };
        };
        defineModule(_n8m);
        Object.defineProperty(_n8m, '__esModule', {
            'value': !0
        }), _n8m.getSlot310PersonalEffect = void 0;
        var _n8s = _n8n(74496),
            _n8t = _n8p(_n8n(18622));
        _n8m.getSlot310PersonalEffect = function(_n8u) {
            var _n8v = null,
                _n8w = new _n8s.SlotItemEffectModel(),
                _n8x = new _n8s.SlotItemEffectModel(),
                _n8y = new _n8s.SlotItemEffectModel();
            34 == _n8u.ctype ? (_n8x.houg += 2, _n8x.tyku += 1, _n8x.kaih += 1, _n8y.houg += 2) : 56 == _n8u.ctype ? (_n8x.houg += 2, _n8x.kaih += 1, _n8y.houg += 2, _n8y.kaih += 2) : 90 == _n8u.ctype && (_n8x.houg += 3, _n8x.raig += 2, _n8x.tyku += 1, _n8x.kaih += 1, _n8y.houg += 1, _n8y.raig += 1);
            var _n8z = new _n8s.SlotItemEffectModel(),
                _n90 = new _n8s.SlotItemEffectModel();
            622 != _n8u.ship_id && 623 != _n8u.ship_id && 624 != _n8u.ship_id || (_n8x.houg += 2, _n8x.kaih += 1, _n8x.tais += 1, _n8z.houg = 1, _n8z.raig = 1, _n90.houg = 3, _n90.kaih = 2, _n90.raig = 2);
            var _n91 = !0;
            if (_n8x.exists() || (_n91 = !1), 0 == _n91) return _n8w;
            var _n92 = _n8u.get_slotnums(310) + _n8u.get_slotnums(518);
            _n8w = _n8x.multiply(_n92);
            for (var _n93 = 0, _n94 = 0, _n95 = 0, _n96 = [310, 518]; _n95 < _n96.length; _n95++) {
                var _n97 = _n96[_n95],
                    _n98 = _n8u.have_slots_dict[_n97];
                if (null != _n98)
                    for (var _n99 = 0, _n9a = _n98; _n99 < _n9a.length; _n99++) {
                        var _n9b = _n9a[_n99];
                        null != _n9b && (_n9b.level >= 7 && _n93++, _n9b.level >= 10 && _n94++);
                    }
            }
            if (_n8z.exists() && _n93 > 0 && _n8w.add(_n8z.multiply(_n93)), _n8y.exists() && _n94 > 0 && _n8w.add(_n8y.multiply(_n94)), _n90.exists()) {
                for (var _n9c = 0, _n9d = 0, _n9e = _n8u.have_slot_ids(); _n9d < _n9e.length; _n9d++) {
                    var _n9f = _n9e[_n9d],
                        _n9g = _n8t.default.model.slot.getMst(_n9f),
                        _n9h = _n9g.equipType;
                    (12 == _n9h || 13 == _n9h) && _n9g.sakuteki >= 5 && (_n9c += _n8u.get_slotnums(parseInt(_n9f)));
                }
                _n9c > 0 && _n8w.add(_n90);
            }
            return _n8w;
        };
    },
    88736: (_n9i, _n9j, _n9k) => {
        'use strict';
        var _n9l = null;
        defineModule(_n9j);
        Object.defineProperty(_n9j, '__esModule', {
            'value': !0
        }), _n9j.getSlot313PersonalEffect = void 0;
        var _n9m = _n9k(74496);
        _n9j.getSlot313PersonalEffect = function(_n9n) {
            var _n9o = null,
                _n9p = new _n9m.SlotItemEffectModel(),
                _n9q = new _n9m.SlotItemEffectModel();
            87 != _n9n.ctype && 91 != _n9n.ctype || (_n9q.houg += 2, _n9q.tyku += 2, _n9q.kaih += 1, _n9q.souk += 1), 651 != _n9n.ship_id && 656 != _n9n.ship_id || (_n9q.houg += 2, _n9q.tyku += 2, _n9q.kaih += 1, _n9q.souk += 1);
            var _n9r = !0;
            if (_n9q.exists() || (_n9r = !1), 0 == _n9r) return _n9p;
            var _n9s = _n9n.get_slotnums(313);
            return _n9p = _n9q.multiply(_n9s);
        };
    },
    49341: (_n9t, _n9u, _n9v) => {
        'use strict';
        var _n9w = null;
        defineModule(_n9u);
        Object.defineProperty(_n9u, '__esModule', {
            'value': !0
        }), _n9u.getSlot314PersonalEffect = void 0;
        var _n9x = _n9v(74496);
        _n9u.getSlot314PersonalEffect = function(_n9y) {
            var _n9z = null,
                _na0 = new _n9x.SlotItemEffectModel(),
                _na1 = new _n9x.SlotItemEffectModel();
            87 != _n9y.ctype && 91 != _n9y.ctype || (_na1.houg += 1, _na1.raig += 3);
            var _na2 = !0;
            if (_na1.exists() || (_na2 = !1), 0 == _na2) return _na0;
            var _na3 = _n9y.get_slotnums(314);
            return _na0 = _na1.multiply(_na3);
        };
    },
    74306: (_na4, _na5, _na6) => {
        'use strict';
        var _na7 = null;
        defineModule(_na5);
        Object.defineProperty(_na5, '__esModule', {
            'value': !0
        }), _na5.getSlot315PersonalEffect = void 0;
        var _na8 = _na6(74496);
        _na5.getSlot315PersonalEffect = function(_na9) {
            var _naa = null,
                _nab = new _na8.SlotItemEffectModel(),
                _nac = new _na8.SlotItemEffectModel();
            'アメリカ' == _na9.getCountryName() && (_nac.houg += 2, _nac.kaih += 3, _nac.saku += 4), 87 != _na9.ctype && 91 != _na9.ctype || (_nac.houg += 1, _nab.leng += 1), 651 != _na9.ship_id && 656 != _na9.ship_id || (_nab.houg += 2, _nab.kaih += 2, _nab.saku += 3, _nab.leng += 1);
            var _nad = !0;
            if (_nac.exists() || (_nad = !1), 0 == _nad) return _nab;
            var _nae = _na9.get_slotnums(315);
            return _nab.add(_nac.multiply(_nae)), _nab;
        };
    },
    83898: (_naf, _nag, _nah) => {
        'use strict';
        var _nai = null;
        defineModule(_nag);
        Object.defineProperty(_nag, '__esModule', {
            'value': !0
        }), _nag.getSlot316PersonalEffect = void 0;
        var _naj = _nah(74496);
        _nag.getSlot316PersonalEffect = function(_nak) {
            var _nal = null,
                _nam = new _naj.SlotItemEffectModel(),
                _nan = new _naj.SlotItemEffectModel();
            if (68 == _nak.ctype) {
                if (_nan.houg += 4, _nan.tyku += 1, _nan.kaih += 1, !_nan.exists()) return _nam;
                var _nao = _nak.get_slotnums(316);
                _nam = _nan.multiply(_nao);
            }
            return _nam;
        };
    },
    71873: (_nap, _naq, _nar) => {
        'use strict';
        var _nas = null;
        defineModule(_naq);
        Object.defineProperty(_naq, '__esModule', {
            'value': !0
        }), _naq.getSlot317PersonalEffect = void 0;
        var _nat = _nar(74496);
        _naq.getSlot317PersonalEffect = function(_nau) {
            var _nav = null,
                _naw = new _nat.SlotItemEffectModel(),
                _nax = new _nat.SlotItemEffectModel(),
                _nay = 0,
                _naz = !1;
            if (6 == _nau.ctype ? (_nax.houg += 2, _nax.tyku += 1, _nay = 1, _naz = !0) : 2 == _nau.ctype && (_nax.houg += 1, _nax.tyku += 1, _nax.kaih += 1, _nay = 2, _naz = !0), 149 == _nau.ship_id || 591 == _nau.ship_id || 592 == _nau.ship_id ? (_nax.houg += 2, _nax.tyku += 2, _naz = !0) : 150 == _nau.ship_id ? (_nax.houg += 1, _nax.tyku += 1, _naz = !0) : 151 == _nau.ship_id ? (_nax.houg += 1, _nax.tyku += 1, _nax.kaih += 1, _naz = !0) : 593 == _nau.ship_id ? (_nax.houg += 1, _nax.tyku += 3, _nax.kaih += 2, _naz = !0) : 954 == _nau.ship_id ? (_nax.houg += 2, _nax.tyku += 2, _nax.kaih += 1, _naz = !0) : 152 == _nau.ship_id ? (_nax.houg += 2, _nax.tyku += 1, _naz = !0) : 541 == _nau.ship_id ? (_nax.houg += 1, _nax.tyku += 2, _naz = !0) : 573 == _nau.ship_id && (_nax.houg += 2, _nax.tyku += 2, _nax.kaih += 1, _naz = !0), 0 == _naz) return _naw;
            if (_naw.add(_nax), 0 == _nay) return _naw;
            var _nb0 = _nau.get_each_level_nums(317),
                _nb1 = [];
            return _nay > 0 && _nb0.forEach(function(_nb2, _nb3) {
                var _nb4 = null;
                for (var _nb5 = 1; _nb5 <= _nau.SLOT_LEVEL_MAX; _nb5++) null == _nb1[_nb5] && (_nb1[_nb5] = 0), _nb3 >= _nb5 && (_nb1[_nb5] += _nb2);
            }), 1 == _nay ? _nb1[8] >= 1 && (_naw.houm += 1) : 2 == _nay && _nb0[10] >= 1 && (_naw.houm += 1), _naw;
        };
    },
    53122: function(_nb6, _nb7, _nb8) {
        'use strict';
        var _nb9 = null;
        var _nba = this && this.__importDefault || function(_nbb) {
            var _nbc = null;
            return _nbb && _nbb.__esModule ? _nbb : {
                'default': _nbb
            };
        };
        defineModule(_nb7);
        Object.defineProperty(_nb7, '__esModule', {
            'value': !0
        }), _nb7.getSlot318PersonalEffect = void 0;
        var _nbd = _nb8(74496),
            _nbe = _nba(_nb8(18622));
        _nb7.getSlot318PersonalEffect = function(_nbf) {
            var _nbg = null,
                _nbh = new _nbd.SlotItemEffectModel(),
                _nbi = new _nbd.SlotItemEffectModel(),
                _nbj = new _nbd.SlotItemEffectModel(),
                _nbk = new _nbd.SlotItemEffectModel();
            if (411 == _nbf.ship_id || 412 == _nbf.ship_id ? _nbi.houg += 1 : 82 == _nbf.ship_id ? (_nbi.houg += 2, _nbi.tyku += 2, _nbi.kaih += 2, _nbk.tyku = 2, _nbk.kaih = 3, _nbk.houm = 1) : 553 == _nbf.ship_id ? (_nbi.houg += 2, _nbi.tyku += 2, _nbi.kaih += 2, _nbi.houm += 3, _nbk.tyku = 2, _nbk.kaih = 3, _nbk.houm = 1, _nbj.kaih = 2, _nbj.souk = 1) : 88 == _nbf.ship_id ? (_nbi.houg += 2, _nbi.tyku += 2, _nbi.kaih += 2, _nbk.tyku = 2, _nbk.kaih = 3, _nbk.houm = 1) : 541 == _nbf.ship_id || 573 == _nbf.ship_id ? (_nbi.houg += 3, _nbi.tyku += 2, _nbi.kaih += 1, _nbi.houm += 2, _nbj.houg = 2, _nbj.kaih = 2, _nbj.souk = 1, _nbj.houm = 1) : 554 == _nbf.ship_id && (_nbi.houg += 3, _nbi.tyku += 2, _nbi.kaih += 2, _nbi.houm += 3, _nbk.tyku = 2, _nbk.kaih = 3, _nbk.houm = 1, _nbj.houg = 1, _nbj.kaih = 2, _nbj.souk = 1, _nbj.houm = 1), !_nbi.exists()) return _nbh;
            var _nbl = _nbf.get_slotnums(318);
            if (_nbh = _nbi.multiply(_nbl), !_nbj.exists() && !_nbk.exists()) return _nbh;
            for (var _nbm = 0, _nbn = 0, _nbo = _nbf.have_slot_ids(); _nbn < _nbo.length; _nbn++) {
                var _nbp = _nbo[_nbn],
                    _nbq = _nbe.default.model.slot.getMst(_nbp),
                    _nbr = _nbq.equipType;
                (12 == _nbr || 13 == _nbr) && _nbq.taiku >= 2 && (_nbm += _nbf.get_slotnums(parseInt(_nbp)));
            }
            var _nbs = _nbf.get_slotnums(290);
            return _nbk.exists() && _nbm > 0 && 0 == _nbs && _nbh.add(_nbk), _nbj.exists() && _nbs >= 1 && _nbh.add(_nbj), _nbh;
        };
    },
    51063: (_nbt, _nbu, _nbv) => {
        'use strict';
        var _nbw = null;
        defineModule(_nbu);
        Object.defineProperty(_nbu, '__esModule', {
            'value': !0
        }), _nbu.getSlot319PersonalEffect = void 0;
        var _nbx = _nbv(74496);
        _nbu.getSlot319PersonalEffect = function(_nby) {
            var _nbz = null,
                _nc0 = new _nbx.SlotItemEffectModel(),
                _nc1 = new _nbx.SlotItemEffectModel();
            if (554 != _nby.ship_id && 553 != _nby.ship_id || (_nc1.houg = 7, _nc1.tyku = 3, _nc1.kaih = 2), !_nc1.exists()) return _nc0;
            var _nc2 = _nby.get_slotnums(319);
            return _nc0 = _nc1.multiply(_nc2);
        };
    },
    91491: (_nc3, _nc4, _nc5) => {
        'use strict';
        var _nc6 = null;
        defineModule(_nc4);
        Object.defineProperty(_nc4, '__esModule', {
            'value': !0
        }), _nc4.getSlot320PersonalEffect = void 0;
        var _nc7 = _nc5(74496);
        _nc4.getSlot320PersonalEffect = function(_nc8) {
            var _nc9 = null,
                _nca = new _nc7.SlotItemEffectModel(),
                _ncb = new _nc7.SlotItemEffectModel();
            if (553 == _nc8.ship_id) _ncb.houg = 2;
            else {
                if (554 == _nc8.ship_id) _ncb.houg = 4;
                else {
                    if (196 == _nc8.ship_id) _ncb.houg = 3;
                    else {
                        if (197 == _nc8.ship_id) _ncb.houg = 3;
                        else {
                            if (508 == _nc8.ship_id) _ncb.houg = 4;
                            else {
                                if (509 != _nc8.ship_id) return _nca;
                                _ncb.houg = 4;
                            }
                        }
                    }
                }
            }
            var _ncc = _nc8.get_slotnums(320);
            return _nca = _ncb.multiply(_ncc);
        };
    },
    85495: (_ncd, _nce, _ncf) => {
        'use strict';
        var _ncg = null;
        defineModule(_nce);
        Object.defineProperty(_nce, '__esModule', {
            'value': !0
        }), _nce.getSlot322PersonalEffect = void 0;
        var _nch = _ncf(74496);
        _nce.getSlot322PersonalEffect = function(_nci) {
            var _ncj = null,
                _nck = new _nch.SlotItemEffectModel(),
                _ncl = new _nch.SlotItemEffectModel();
            if (554 != _nci.ship_id && 553 != _nci.ship_id || (_ncl.houg = 5, _ncl.tyku = 2, _ncl.kaih = 2, _ncl.tais = 1), !_ncl.exists()) return _nck;
            var _ncm = _nci.get_slotnums(322);
            return _nck = _ncl.multiply(_ncm);
        };
    },
    65365: (_ncn, _nco, _ncp) => {
        'use strict';
        var _ncq = null;
        defineModule(_nco);
        Object.defineProperty(_nco, '__esModule', {
            'value': !0
        }), _nco.getSlot323PersonalEffect = void 0;
        var _ncr = _ncp(74496);
        _nco.getSlot323PersonalEffect = function(_ncs) {
            var _nct = null,
                _ncu = new _ncr.SlotItemEffectModel(),
                _ncv = new _ncr.SlotItemEffectModel();
            if (554 != _ncs.ship_id && 553 != _ncs.ship_id || (_ncv.houg = 6, _ncv.tyku = 3, _ncv.kaih = 3, _ncv.tais = 2), !_ncv.exists()) return _ncu;
            var _ncw = _ncs.get_slotnums(323);
            return _ncu = _ncv.multiply(_ncw);
        };
    },
    98164: (_ncx, _ncy, _ncz) => {
        'use strict';
        var _nd0 = null;
        defineModule(_ncy);
        Object.defineProperty(_ncy, '__esModule', {
            'value': !0
        }), _ncy.getSlot324And325PersonalEffect = void 0;
        var _nd1 = _ncz(74496);
        _ncy.getSlot324And325PersonalEffect = function(_nd2) {
            var _nd3 = null,
                _nd4 = new _nd1.SlotItemEffectModel(),
                _nd5 = new _nd1.SlotItemEffectModel();
            if (554 == _nd2.ship_id || 646 == _nd2.ship_id ? (_nd5.houg = 2, _nd5.tais = 3, _nd5.kaih = 1) : 553 == _nd2.ship_id && (_nd5.houg = 1, _nd5.tais = 2, _nd5.kaih = 1), !_nd5.exists()) return _nd4;
            var _nd6 = _nd2.get_slotnums(324) + _nd2.get_slotnums(325);
            return _nd4 = _nd5.multiply(_nd6);
        };
    },
    38114: (_nd7, _nd8, _nd9) => {
        'use strict';
        var _nda = null;
        defineModule(_nd8);
        Object.defineProperty(_nd8, '__esModule', {
            'value': !0
        }), _nd8.getSlot326PersonalEffect = void 0;
        var _ndb = _nd9(74496);
        _nd8.getSlot326PersonalEffect = function(_ndc) {
            var _ndd = null,
                _nde = new _ndb.SlotItemEffectModel(),
                _ndf = new _ndb.SlotItemEffectModel();
            if (646 == _ndc.ship_id ? (_ndf.houg = 3, _ndf.tais = 5, _ndf.kaih = 3) : 554 == _ndc.ship_id ? (_ndf.houg = 3, _ndf.tais = 4, _ndf.kaih = 2) : 553 == _ndc.ship_id && (_ndf.houg = 1, _ndf.tais = 3, _ndf.kaih = 1), !_ndf.exists()) return _nde;
            var _ndg = _ndc.get_slotnums(326);
            return _nde = _ndf.multiply(_ndg);
        };
    },
    21003: (_ndh, _ndi, _ndj) => {
        'use strict';
        var _ndk = null;
        defineModule(_ndi);
        Object.defineProperty(_ndi, '__esModule', {
            'value': !0
        }), _ndi.getSlot327PersonalEffect = void 0;
        var _ndl = _ndj(74496);
        _ndi.getSlot327PersonalEffect = function(_ndm) {
            var _ndn = null,
                _ndo = new _ndl.SlotItemEffectModel(),
                _ndp = new _ndl.SlotItemEffectModel();
            if (646 == _ndm.ship_id ? (_ndp.houg = 5, _ndp.tais = 6, _ndp.kaih = 4) : 554 == _ndm.ship_id ? (_ndp.houg = 4, _ndp.tais = 5, _ndp.kaih = 2) : 553 == _ndm.ship_id && (_ndp.houg = 2, _ndp.tais = 4, _ndp.kaih = 1), !_ndp.exists()) return _ndo;
            var _ndq = _ndm.get_slotnums(327);
            return _ndo = _ndp.multiply(_ndq);
        };
    },
    77010: (_ndr, _nds, _ndt) => {
        'use strict';
        var _ndu = null;
        defineModule(_nds);
        Object.defineProperty(_nds, '__esModule', {
            'value': !0
        }), _nds.getSlot328PersonalEffect = void 0;
        var _ndv = _ndt(74496);
        _nds.getSlot328PersonalEffect = function(_ndw) {
            var _ndx = null,
                _ndy = new _ndv.SlotItemEffectModel(),
                _ndz = new _ndv.SlotItemEffectModel();
            if ('こんごう' == _ndw.yomi ? (_ndz.houg = 1, _ndz.kaih = 1, 209 == _ndw.ship_id || 149 == _ndw.ship_id ? _ndz.houg += 1 : 591 == _ndw.ship_id && (_ndz.houg += 2, _ndz.raig += 1)) : 'ひえい' == _ndw.yomi ? (_ndz.houg = 1, _ndz.kaih = 1, 210 == _ndw.ship_id || 150 == _ndw.ship_id ? _ndz.houg += 1 : 592 == _ndw.ship_id && (_ndz.houg += 2, _ndz.tyku += 1)) : 'はるな' == _ndw.yomi ? (_ndz.houg = 1, _ndz.kaih = 1, 211 == _ndw.ship_id || 151 == _ndw.ship_id ? _ndz.houg += 1 : 593 == _ndw.ship_id ? (_ndz.houg += 1, _ndz.tyku += 2) : 954 == _ndw.ship_id && (_ndz.houg += 2, _ndz.tyku += 1)) : 'きりしま' == _ndw.yomi ? (_ndz.houg = 1, _ndz.kaih = 1, 212 != _ndw.ship_id && 152 != _ndw.ship_id || (_ndz.houg += 1)) : ('ふそう' == _ndw.yomi || 'やましろ' == _ndw.yomi || 'いせ' == _ndw.yomi || 'ひゅうが' == _ndw.yomi) && (_ndz.houg = 1), !_ndz.exists()) return _ndy;
            var _ne0 = _ndw.get_slotnums(328);
            return _ndy = _ndz.multiply(_ne0);
        };
    },
    39126: (_ne1, _ne2, _ne3) => {
        'use strict';
        var _ne4 = null;
        defineModule(_ne2);
        Object.defineProperty(_ne2, '__esModule', {
            'value': !0
        }), _ne2.getSlot329PersonalEffect = void 0;
        var _ne5 = _ne3(74496);
        _ne2.getSlot329PersonalEffect = function(_ne6) {
            var _ne7 = null,
                _ne8 = new _ne5.SlotItemEffectModel(),
                _ne9 = new _ne5.SlotItemEffectModel();
            if ('こんごう' == _ne6.yomi ? (_ne9.houg = 1, _ne9.kaih = 1, 209 == _ne6.ship_id ? _ne9.houg += 1 : 149 == _ne6.ship_id ? (_ne9.houg += 2, _ne9.tyku += 1) : 591 == _ne6.ship_id && (_ne9.houg += 3, _ne9.tyku += 1, _ne9.raig += 2)) : 'ひえい' == _ne6.yomi ? (_ne9.houg = 1, _ne9.kaih = 1, 210 == _ne6.ship_id ? _ne9.houg += 1 : 150 == _ne6.ship_id ? (_ne9.houg += 2, _ne9.tyku += 1) : 592 == _ne6.ship_id && (_ne9.houg += 3, _ne9.tyku += 1, _ne9.raig += 2)) : 'はるな' == _ne6.yomi ? (_ne9.houg = 1, _ne9.kaih = 1, 211 == _ne6.ship_id ? _ne9.houg += 1 : 151 == _ne6.ship_id ? (_ne9.houg += 2, _ne9.tyku += 1) : 593 == _ne6.ship_id ? (_ne9.houg += 2, _ne9.tyku += 3, _ne9.raig += 1) : 954 == _ne6.ship_id && (_ne9.houg += 3, _ne9.tyku += 1, _ne9.raig += 2)) : 'きりしま' == _ne6.yomi ? (_ne9.houg = 1, _ne9.kaih = 1, 212 == _ne6.ship_id ? _ne9.houg += 1 : 152 == _ne6.ship_id && (_ne9.houg += 2, _ne9.tyku += 1)) : ('ふそう' == _ne6.yomi || 'やましろ' == _ne6.yomi || 'いせ' == _ne6.yomi || 'ひゅうが' == _ne6.yomi) && (_ne9.houg = 1), !_ne9.exists()) return _ne8;
            var _nea = _ne6.get_slotnums(329);
            return _ne8 = _ne9.multiply(_nea);
        };
    },
    72176: (_neb, _nec, _ned) => {
        'use strict';
        var _nee = null;
        defineModule(_nec);
        Object.defineProperty(_nec, '__esModule', {
            'value': !0
        }), _nec.getSlot335PersonalEffect = void 0;
        var _nef = _ned(74496);
        _nec.getSlot335PersonalEffect = function(_neg) {
            var _neh = null,
                _nei = new _nef.SlotItemEffectModel(),
                _nej = new _nef.SlotItemEffectModel();
            if (277 == _neg.ship_id || 278 == _neg.ship_id ? (_nej.tyku = 1, _nej.kaih = 1) : 594 != _neg.ship_id && 599 != _neg.ship_id && 610 != _neg.ship_id && 646 != _neg.ship_id && 698 != _neg.ship_id || (_nej.tyku = 2, _nej.kaih = 1), !_nej.exists()) return _nei;
            var _nek = _neg.get_slotnums(335);
            return _nei = _nej.multiply(_nek);
        };
    },
    33846: (_nel, _nem, _nen) => {
        'use strict';
        var _neo = null;
        defineModule(_nem);
        Object.defineProperty(_nem, '__esModule', {
            'value': !0
        }), _nem.getSlot336PersonalEffect = void 0;
        var _nep = _nen(74496);
        _nem.getSlot336PersonalEffect = function(_neq) {
            var _ner = null,
                _nes = new _nep.SlotItemEffectModel(),
                _net = new _nep.SlotItemEffectModel();
            if (277 == _neq.ship_id || 278 == _neq.ship_id ? (_net.houg = 1, _net.tyku = 1, _net.kaih = 1) : 594 != _neq.ship_id && 599 != _neq.ship_id && 610 != _neq.ship_id && 646 != _neq.ship_id && 698 != _neq.ship_id || (_net.houg = 1, _net.tyku = 2, _net.kaih = 1), !_net.exists()) return _nes;
            var _neu = _neq.get_slotnums(336);
            return _nes = _net.multiply(_neu);
        };
    },
    97157: (_nev, _new, _nex) => {
        'use strict';
        var _ney = null;
        defineModule(_new);
        Object.defineProperty(_new, '__esModule', {
            'value': !0
        }), _new.getSlot337PersonalEffect = void 0;
        var _nez = _nex(74496);
        _new.getSlot337PersonalEffect = function(_nf0) {
            var _nf1 = null,
                _nf2 = new _nez.SlotItemEffectModel(),
                _nf3 = new _nez.SlotItemEffectModel();
            if (277 == _nf0.ship_id || 278 == _nf0.ship_id ? (_nf3.houg = 1, _nf3.tyku = 1, _nf3.kaih = 1) : 594 != _nf0.ship_id && 599 != _nf0.ship_id && 610 != _nf0.ship_id && 646 != _nf0.ship_id && 698 != _nf0.ship_id || (_nf3.houg = 2, _nf3.tyku = 2, _nf3.kaih = 1), !_nf3.exists()) return _nf2;
            var _nf4 = _nf0.get_slotnums(337);
            return _nf2 = _nf3.multiply(_nf4);
        };
    },
    63406: (_nf5, _nf6, _nf7) => {
        'use strict';
        var _nf8 = null;
        defineModule(_nf6);
        Object.defineProperty(_nf6, '__esModule', {
            'value': !0
        }), _nf6.getSlot338PersonalEffect = void 0;
        var _nf9 = _nf7(74496);
        _nf6.getSlot338PersonalEffect = function(_nfa) {
            var _nfb = null,
                _nfc = new _nf9.SlotItemEffectModel(),
                _nfd = new _nf9.SlotItemEffectModel();
            if (277 == _nfa.ship_id || 278 == _nfa.ship_id ? (_nfd.houg = 1, _nfd.tyku = 1, _nfd.kaih = 2) : 594 == _nfa.ship_id || 646 == _nfa.ship_id || 698 == _nfa.ship_id ? (_nfd.houg = 1, _nfd.tyku = 2, _nfd.kaih = 3) : 599 != _nfa.ship_id && 610 != _nfa.ship_id || (_nfd.houg = 4, _nfd.tyku = 3, _nfd.kaih = 4), !_nfd.exists()) return _nfc;
            var _nfe = _nfa.get_slotnums(338);
            return _nfc = _nfd.multiply(_nfe);
        };
    },
    66373: (_nff, _nfg, _nfh) => {
        'use strict';
        var _nfi = null;
        defineModule(_nfg);
        Object.defineProperty(_nfg, '__esModule', {
            'value': !0
        }), _nfg.getSlot339PersonalEffect = void 0;
        var _nfj = _nfh(74496);
        _nfg.getSlot339PersonalEffect = function(_nfk) {
            var _nfl = null,
                _nfm = new _nfj.SlotItemEffectModel(),
                _nfn = new _nfj.SlotItemEffectModel();
            if (277 == _nfk.ship_id || 278 == _nfk.ship_id ? (_nfn.houg = 1, _nfn.tyku = 2, _nfn.kaih = 2) : 594 == _nfk.ship_id || 646 == _nfk.ship_id || 698 == _nfk.ship_id ? (_nfn.houg = 1, _nfn.tyku = 3, _nfn.kaih = 4) : 599 != _nfk.ship_id && 610 != _nfk.ship_id || (_nfn.houg = 6, _nfn.tyku = 4, _nfn.kaih = 5), !_nfn.exists()) return _nfm;
            var _nfo = _nfk.get_slotnums(339);
            return _nfm = _nfn.multiply(_nfo);
        };
    },
    19707: (_nfp, _nfq, _nfr) => {
        'use strict';
        var _nfs = null;
        defineModule(_nfq);
        Object.defineProperty(_nfq, '__esModule', {
            'value': !0
        }), _nfq.getSlot340PersonalEffect = void 0;
        var _nft = _nfr(74496);
        _nfq.getSlot340PersonalEffect = function(_nfu) {
            var _nfv = null,
                _nfw = new _nft.SlotItemEffectModel(),
                _nfx = new _nft.SlotItemEffectModel();
            if ('ガリバルディ' != _nfu.yomi && 'アブルッツィ' != _nfu.yomi || (_nfx.houg = 1, _nfx.tyku = 1, _nfx.kaih = 1), !_nfx.exists()) return _nfw;
            var _nfy = _nfu.get_slotnums(340);
            return _nfw = _nfx.multiply(_nfy);
        };
    },
    63978: (_nfz, _ng0, _ng1) => {
        'use strict';
        var _ng2 = null;
        defineModule(_ng0);
        Object.defineProperty(_ng0, '__esModule', {
            'value': !0
        }), _ng0.getSlot341PersonalEffect = void 0;
        var _ng3 = _ng1(74496);
        _ng0.getSlot341PersonalEffect = function(_ng4) {
            var _ng5 = null,
                _ng6 = new _ng3.SlotItemEffectModel(),
                _ng7 = new _ng3.SlotItemEffectModel();
            if ('ガリバルディ' == _ng4.yomi || 'アブルッツィ' == _ng4.yomi ? (_ng7.houg = 2, _ng7.tyku = 1, _ng7.kaih = 1) : 'ゴトランド' == _ng4.yomi && (_ng7.houg = 1, _ng7.tyku = 1, _ng7.kaih = 1), !_ng7.exists()) return _ng6;
            var _ng8 = _ng4.get_slotnums(341);
            return _ng6 = _ng7.multiply(_ng8);
        };
    },
    92382: (_ng9, _nga, _ngb) => {
        'use strict';
        var _ngc = null;
        defineModule(_nga);
        Object.defineProperty(_nga, '__esModule', {
            'value': !0
        }), _nga.getSlot342PersonalEffect = void 0;
        var _ngd = _ngb(74496);
        _nga.getSlot342PersonalEffect = function(_nge) {
            var _ngf = null,
                _ngg = new _ngd.SlotItemEffectModel(),
                _ngh = new _ngd.SlotItemEffectModel();
            if (277 == _nge.ship_id || 278 == _nge.ship_id || 461 == _nge.ship_id || 466 == _nge.ship_id || 462 == _nge.ship_id || 467 == _nge.ship_id ? _ngh.houg = 1 : 594 == _nge.ship_id || 646 == _nge.ship_id || 698 == _nge.ship_id ? (_ngh.houg = 2, _ngh.tyku = 1, _ngh.kaih = 1) : 599 != _nge.ship_id && 610 != _nge.ship_id || (_ngh.houg = 3, _ngh.tyku = 2, _ngh.kaih = 2), !_ngh.exists()) return _ngg;
            var _ngi = _nge.get_slotnums(342);
            return _ngg = _ngh.multiply(_ngi);
        };
    },
    78415: (_ngj, _ngk, _ngl) => {
        'use strict';
        var _ngm = null;
        defineModule(_ngk);
        Object.defineProperty(_ngk, '__esModule', {
            'value': !0
        }), _ngk.getSlot343PersonalEffect = void 0;
        var _ngn = _ngl(74496);
        _ngk.getSlot343PersonalEffect = function(_ngo) {
            var _ngp = null,
                _ngq = new _ngn.SlotItemEffectModel(),
                _ngr = new _ngn.SlotItemEffectModel();
            if (277 == _ngo.ship_id || 278 == _ngo.ship_id ? _ngr.houg = 2 : 461 == _ngo.ship_id || 466 == _ngo.ship_id || 462 == _ngo.ship_id || 467 == _ngo.ship_id ? _ngr.houg = 1 : 594 == _ngo.ship_id || 646 == _ngo.ship_id || 698 == _ngo.ship_id ? (_ngr.houg = 3, _ngr.tyku = 2, _ngr.kaih = 1) : 599 != _ngo.ship_id && 610 != _ngo.ship_id || (_ngr.houg = 5, _ngr.tyku = 3, _ngr.kaih = 3), !_ngr.exists()) return _ngq;
            var _ngs = _ngo.get_slotnums(343);
            return _ngq = _ngr.multiply(_ngs);
        };
    },
    23090: (_ngt, _ngu, _ngv) => {
        'use strict';
        var _ngw = null;
        defineModule(_ngu);
        Object.defineProperty(_ngu, '__esModule', {
            'value': !0
        }), _ngu.getSlot344PersonalEffect = void 0;
        var _ngx = _ngv(74496);
        _ngu.getSlot344PersonalEffect = function(_ngy) {
            var _ngz = null,
                _nh0 = new _ngx.SlotItemEffectModel(),
                _nh1 = new _ngx.SlotItemEffectModel();
            if (599 == _ngy.ship_id || 610 == _ngy.ship_id ? _nh1.houg = 3 : 555 == _ngy.ship_id || 560 == _ngy.ship_id ? (_nh1.houg = 2, _nh1.tais = 2) : 318 == _ngy.ship_id ? (_nh1.houg = 4, _nh1.tais = 1) : 282 == _ngy.ship_id ? (_nh1.houg = 2, _nh1.tais = 1) : 888 == _ngy.ship_id ? (_nh1.houg = 4, _nh1.tais = 2) : 883 == _ngy.ship_id && (_nh1.houg = 5, _nh1.tais = 2), !_nh1.exists()) return _nh0;
            var _nh2 = _ngy.get_slotnums(344);
            return _nh0 = _nh1.multiply(_nh2);
        };
    },
    18776: (_nh3, _nh4, _nh5) => {
        'use strict';
        var _nh6 = null;
        defineModule(_nh4);
        Object.defineProperty(_nh4, '__esModule', {
            'value': !0
        }), _nh4.getSlot345PersonalEffect = void 0;
        var _nh7 = _nh5(74496);
        _nh4.getSlot345PersonalEffect = function(_nh8) {
            var _nh9 = null,
                _nha = new _nh7.SlotItemEffectModel(),
                _nhb = new _nh7.SlotItemEffectModel();
            if (599 == _nh8.ship_id || 610 == _nh8.ship_id ? (_nhb.houg = 3, _nhb.kaih = 1) : 555 == _nh8.ship_id || 560 == _nh8.ship_id ? (_nhb.houg = 3, _nhb.tais = 2, _nhb.kaih = 2) : 318 == _nh8.ship_id ? (_nhb.houg = 5, _nhb.tais = 1, _nhb.kaih = 2) : 282 == _nh8.ship_id ? (_nhb.houg = 3, _nhb.tais = 1, _nhb.kaih = 1) : 888 == _nh8.ship_id ? (_nhb.houg = 4, _nhb.tais = 2, _nhb.kaih = 2) : 883 == _nh8.ship_id && (_nhb.houg = 5, _nhb.tais = 2, _nhb.kaih = 3), !_nhb.exists()) return _nha;
            var _nhc = _nh8.get_slotnums(345);
            return _nha = _nhb.multiply(_nhc);
        };
    },
    89058: (_nhd, _nhe, _nhf) => {
        'use strict';
        var _nhg = null;
        defineModule(_nhe);
        Object.defineProperty(_nhe, '__esModule', {
            'value': !0
        }), _nhe.getSlot346PersonalEffect = void 0;
        var _nhh = _nhf(74496);
        _nhe.getSlot346PersonalEffect = function(_nhi) {
            var _nhj = null,
                _nhk = new _nhh.SlotItemEffectModel();
            return 'やましおまる' == _nhi.yomi && (_nhk.kaih += 1, _nhk.tais += 1), _nhk;
        };
    },
    84372: (_nhl, _nhm, _nhn) => {
        'use strict';
        var _nho = null;
        defineModule(_nhm);
        Object.defineProperty(_nhm, '__esModule', {
            'value': !0
        }), _nhm.getSlot347PersonalEffect = void 0;
        var _nhp = _nhn(74496);
        _nhm.getSlot347PersonalEffect = function(_nhq) {
            var _nhr = null,
                _nhs = new _nhp.SlotItemEffectModel();
            return 'やましおまる' == _nhq.yomi && (_nhs.kaih += 2, _nhs.tais += 2), _nhs;
        };
    },
    39656: (_nht, _nhu, _nhv) => {
        'use strict';
        var _nhw = null;
        defineModule(_nhu);
        Object.defineProperty(_nhu, '__esModule', {
            'value': !0
        }), _nhu.getSlot356_357PersonalEffect = void 0;
        var _nhx = _nhv(74496);
        _nhu.getSlot356_357PersonalEffect = function(_nhy) {
            var _nhz = null,
                _ni0 = new _nhx.SlotItemEffectModel(),
                _ni1 = new _nhx.SlotItemEffectModel();
            if (95 == _nhy.ctype ? _ni1.houg = 2 : 9 == _nhy.ctype && (_ni1.houg = 1), !_ni1.exists()) return _ni0;
            var _ni2 = _nhy.get_slotnums(356) + _nhy.get_slotnums(357);
            return _ni0 = _ni1.multiply(_ni2);
        };
    },
    66039: (_ni3, _ni4, _ni5) => {
        'use strict';
        var _ni6 = null;
        defineModule(_ni4);
        Object.defineProperty(_ni4, '__esModule', {
            'value': !0
        }), _ni4.getSlot358PersonalEffect = void 0;
        var _ni7 = _ni5(74496);
        _ni4.getSlot358PersonalEffect = function(_ni8) {
            var _ni9 = null,
                _nia = new _ni7.SlotItemEffectModel(),
                _nib = new _ni7.SlotItemEffectModel();
            if ('アメリカ' != _ni8.getCountryName() && 67 != _ni8.ctype && 78 != _ni8.ctype && 82 != _ni8.ctype && 88 != _ni8.ctype && 108 != _ni8.ctype && 112 != _ni8.ctype) return _nia;
            _nib.houg += 1, _nib.kaih += 1, _nib.tyku += 1, 95 == _ni8.ctype && (_nib.houg += 1, _nib.kaih += 2, _nib.tyku += 2);
            var _nic = _ni8.get_slotnums(358);
            return _nia = _nib.multiply(_nic);
        };
    },
    64679: (_nid, _nie, _nif) => {
        'use strict';
        var _nig = null;
        defineModule(_nie);
        Object.defineProperty(_nie, '__esModule', {
            'value': !0
        }), _nie.getSlot359PersonalEffect = void 0;
        var _nih = _nif(74496);
        _nie.getSlot359PersonalEffect = function(_nii) {
            var _nij = null,
                _nik = new _nih.SlotItemEffectModel(),
                _nil = new _nih.SlotItemEffectModel();
            if ('パース' == _nii.yomi ? (_nil.houg = 2, _nil.tyku = 2, _nil.kaih = 1) : 'ゆうばり' == _nii.yomi && (_nil.houg = 1, _nil.tyku = 1, _nil.kaih = 1), 622 != _nii.ship_id && 623 != _nii.ship_id && 624 != _nii.ship_id || (_nil.houg += 1, _nil.tyku += 1), !_nil.exists()) return _nik;
            var _nim = _nii.get_slotnums(359);
            return _nik = _nil.multiply(_nim);
        };
    },
    69954: (_nin, _nio, _nip) => {
        'use strict';
        var _niq = null;
        defineModule(_nio);
        Object.defineProperty(_nio, '__esModule', {
            'value': !0
        }), _nio.getSlot35PersonalEffect = void 0;
        var _nir = _nip(74496);
        _nio.getSlot35PersonalEffect = function(_nis) {
            var _nit = null,
                _niu = new _nir.SlotItemEffectModel(),
                _niv = new _nir.SlotItemEffectModel();
            return 149 == _nis.ship_id || 591 == _nis.ship_id || 592 == _nis.ship_id ? (_niv.houg += 1, _niv.tyku += 1) : 150 == _nis.ship_id ? _niv.tyku += 1 : 151 == _nis.ship_id || 593 == _nis.ship_id || 954 == _nis.ship_id ? (_niv.tyku += 1, _niv.kaih += 1) : 152 == _nis.ship_id && (_niv.houg += 1), _niv.exists() ? _niu = _niv.multiply(1) : _niu;
        };
    },
    95953: (_niw, _nix, _niy) => {
        'use strict';
        var _niz = null;
        defineModule(_nix);
        Object.defineProperty(_nix, '__esModule', {
            'value': !0
        }), _nix.getSlot360_361PersonalEffect = void 0;
        var _nj0 = _niy(74496);
        _nix.getSlot360_361PersonalEffect = function(_nj1) {
            var _nj2 = null,
                _nj3 = new _nj0.SlotItemEffectModel(),
                _nj4 = new _nj0.SlotItemEffectModel();
            if ('デ・ロイテル' == _nj1.yomi ? (_nj4.houg = 2, _nj4.tyku = 2, _nj4.kaih = 1) : 'ゴトランド' == _nj1.yomi && (_nj4.houg = 2, _nj4.tyku = 1, _nj4.kaih = 1), 41 == _nj1.ctype && (_nj4.houg = 1, _nj4.tyku = 1), !_nj4.exists()) return _nj3;
            var _nj5 = _nj1.get_slotnums(360) + _nj1.get_slotnums(361);
            return _nj3 = _nj4.multiply(_nj5);
        };
    },
    86384: (_nj6, _nj7, _nj8) => {
        'use strict';
        var _nj9 = null;
        defineModule(_nj7);
        Object.defineProperty(_nj7, '__esModule', {
            'value': !0
        }), _nj7.getSlot362_363PersonalEffect = void 0;
        var _nja = _nj8(74496);
        _nj7.getSlot362_363PersonalEffect = function(_njb) {
            var _njc = null,
                _njd = new _nja.SlotItemEffectModel(),
                _nje = new _nja.SlotItemEffectModel(),
                _njf = !1;
            if (99 == _njb.ctype ? (_nje.houg = 1, _nje.tyku = 2, _nje.kaih = 1, _njf = !0) : 34 == _njb.ctype || 21 == _njb.ctype ? (_nje.houg = -3, _nje.tyku = -3, _nje.kaih = -8, _njf = !0) : 4 == _njb.ctype || 20 == _njb.ctype || 16 == _njb.ctype ? (_nje.houg = -3, _nje.tyku = -2, _nje.kaih = -6, _njf = !0) : 89 == _njb.ctype || 56 == _njb.ctype ? (_nje.houg = -2, _nje.tyku = -1, _nje.kaih = -4, _njf = !0) : 52 != _njb.ctype && 41 != _njb.ctype && 98 != _njb.ctype || (_nje.tyku = -1, _nje.kaih = -2, _njf = !0), 'アメリカ' == _njb.getCountryName() && (_nje.tyku += 1, _nje.kaih += 1, _njf = !0), 0 == _njf) return _njd;
            var _njg = _njb.get_slotnums(362) + _njb.get_slotnums(363);
            return _njd = _nje.multiply(_njg);
        };
    },
    65345: (_njh, _nji, _njj) => {
        'use strict';
        var _njk = null;
        defineModule(_nji);
        Object.defineProperty(_nji, '__esModule', {
            'value': !0
        }), _nji.getSlot364PersonalEffect = void 0;
        var _njl = _njj(74496);
        _nji.getSlot364PersonalEffect = function(_njm) {
            var _njn = null;
            new _njl.SlotItemEffectModel();
            var _njo = new _njl.SlotItemEffectModel();
            623 == _njm.ship_id || 586 == _njm.ship_id || 119 == _njm.ship_id || 118 == _njm.ship_id || 657 == _njm.ship_id || 506 == _njm.ship_id || 668 == _njm.ship_id || 507 == _njm.ship_id ? (_njo.raig = 1, _njo.kaih = -2, 119 == _njm.ship_id ? _njo.raig += 1 : 507 == _njm.ship_id ? _njo.raig += 2 : 623 == _njm.ship_id && (_njo.houg += 1, _njo.raig += 3)) : (_njo.houg = -1, _njo.kaih = -7);
            var _njp = _njm.get_slotnums(364);
            return _njo.multiply(_njp);
        };
    },
    46514: (_njq, _njr, _njs) => {
        'use strict';
        var _njt = null;
        defineModule(_njr);
        Object.defineProperty(_njr, '__esModule', {
            'value': !0
        }), _njr.getSlot365PersonalEffect = void 0;
        var _nju = _njs(74496);
        _njr.getSlot365PersonalEffect = function(_njv) {
            var _njw = null,
                _njx = new _nju.SlotItemEffectModel(),
                _njy = new _nju.SlotItemEffectModel(),
                _njz = !1;
            return 37 != _njv.ctype && 19 != _njv.ctype && 2 != _njv.ctype && 26 != _njv.ctype && 6 != _njv.ctype || (_njy.houg += 1, _njz = !0), 136 != _njv.ship_id && 148 != _njv.ship_id && 546 != _njv.ship_id && 541 != _njv.ship_id && 573 != _njv.ship_id && 911 != _njv.ship_id && 916 != _njv.ship_id && 593 != _njv.ship_id || (_njy.houg += 1, _njz = !0), 591 != _njv.ship_id && 592 != _njv.ship_id && 954 != _njv.ship_id || (_njy.houg += 2, _njz = !0), 0 == _njz ? _njx : _njx = _njy.multiply(1);
        };
    },
    81976: (_nk0, _nk1, _nk2) => {
        'use strict';
        var _nk3 = null;
        defineModule(_nk1);
        Object.defineProperty(_nk1, '__esModule', {
            'value': !0
        }), _nk1.getSlot367PersonalEffect = void 0;
        var _nk4 = _nk2(74496);
        _nk1.getSlot367PersonalEffect = function(_nk5) {
            var _nk6 = null,
                _nk7 = new _nk4.SlotItemEffectModel(),
                _nk8 = new _nk4.SlotItemEffectModel(),
                _nk9 = !1;
            if ('ゴトランド' == _nk5.yomi && (_nk8.houg += 2, _nk8.tais += 1, _nk8.kaih += 1, _nk8.saku += 1, _nk9 = !0), 70 == _nk5.ctype ? (_nk8.houg += 1, _nk8.tais += 1, _nk8.kaih += 1, _nk8.saku += 1, _nk9 = !0) : 72 == _nk5.ctype || 62 == _nk5.ctype ? (_nk8.houg += 1, _nk8.kaih += 1, _nk8.saku += 1, _nk9 = !0) : 67 != _nk5.ctype && 78 != _nk5.ctype && 82 != _nk5.ctype && 88 != _nk5.ctype && 108 != _nk5.ctype && 112 != _nk5.ctype || (_nk8.houg += 2, _nk8.kaih += 2, _nk8.saku += 2, _nk9 = !0), 0 == _nk9) return _nk7;
            var _nka = _nk5.get_slotnums(367);
            return _nk7 = _nk8.multiply(_nka);
        };
    },
    89331: (_nkb, _nkc, _nkd) => {
        'use strict';
        var _nke = null;
        defineModule(_nkc);
        Object.defineProperty(_nkc, '__esModule', {
            'value': !0
        }), _nkc.getSlot368PersonalEffect = void 0;
        var _nkf = _nkd(74496);
        _nkc.getSlot368PersonalEffect = function(_nkg) {
            var _nkh = null,
                _nki = new _nkf.SlotItemEffectModel(),
                _nkj = new _nkf.SlotItemEffectModel(),
                _nkk = !1;
            if ('ゴトランド' == _nkg.yomi && (_nkj.houg = 4, _nkj.tais = 3, _nkj.kaih = 2, _nkj.saku = 3, _nkk = !0, 630 == _nkg.ship_id && (_nki.houg += 2, _nki.raig += 2, _nki.kaih += 1, _nki.saku += 1)), 70 == _nkg.ctype ? (_nkj.houg = 2, _nkj.tais = 3, _nkj.kaih = 1, _nkj.saku = 2, _nkk = !0) : 72 == _nkg.ctype || 62 == _nkg.ctype ? (_nkj.houg += 1, _nkj.tais += 2, _nkj.kaih += 1, _nkj.saku += 2, _nkk = !0) : 67 != _nkg.ctype && 78 != _nkg.ctype && 82 != _nkg.ctype && 88 != _nkg.ctype && 108 != _nkg.ctype && 112 != _nkg.ctype || (_nkj.houg += 2, _nkj.tais += 2, _nkj.kaih += 2, _nkj.saku += 2, _nkk = !0), 0 == _nkk) return _nki;
            var _nkl = _nkg.get_slotnums(368);
            return _nki.add(_nkj.multiply(_nkl)), _nki;
        };
    },
    73973: (_nkm, _nkn, _nko) => {
        'use strict';
        var _nkp = null;
        defineModule(_nkn);
        Object.defineProperty(_nkn, '__esModule', {
            'value': !0
        }), _nkn.getSlot369PersonalEffect = void 0;
        var _nkq = _nko(74496);
        _nkn.getSlot369PersonalEffect = function(_nkr) {
            var _nks = null,
                _nkt = new _nkq.SlotItemEffectModel(),
                _nku = new _nkq.SlotItemEffectModel(),
                _nkv = !1;
            if ('ゴトランド' == _nkr.yomi && (_nku.houg = 5, _nku.tais = 4, _nku.kaih = 4, _nku.saku = 3, _nkv = !0, 630 == _nkr.ship_id && (_nkt.houg += 3, _nkt.raig += 3, _nkt.kaih += 2, _nkt.saku += 2)), 70 == _nkr.ctype ? (_nku.houg += 3, _nku.tais += 3, _nku.kaih += 2, _nku.saku += 3, _nkv = !0) : 72 == _nkr.ctype || 62 == _nkr.ctype ? (_nku.houg += 2, _nku.tais += 2, _nku.kaih += 1, _nku.saku += 2, _nkv = !0) : 67 != _nkr.ctype && 78 != _nkr.ctype && 82 != _nkr.ctype && 88 != _nkr.ctype && 108 != _nkr.ctype && 112 != _nkr.ctype || (_nku.houg += 2, _nku.tais += 2, _nku.kaih += 2, _nku.saku += 2, _nkv = !0), 0 == _nkv) return _nkt;
            var _nkw = _nkr.get_slotnums(369);
            return _nkt.add(_nku.multiply(_nkw)), _nkt;
        };
    },
    21178: (_nkx, _nky, _nkz) => {
        'use strict';
        var _nl0 = null;
        defineModule(_nky);
        Object.defineProperty(_nky, '__esModule', {
            'value': !0
        }), _nky.getSlot370PersonalEffect = void 0;
        var _nl1 = _nkz(74496);
        _nky.getSlot370PersonalEffect = function(_nl2) {
            var _nl3 = null,
                _nl4 = new _nl1.SlotItemEffectModel(),
                _nl5 = new _nl1.SlotItemEffectModel(),
                _nl6 = !1;
            if ('ゴトランド' == _nl2.yomi && (_nl5.houg = 1, _nl5.tais = 3, _nl5.kaih = 1, _nl5.saku = 2, _nl6 = !0), 70 == _nl2.ctype ? (_nl5.houg += 1, _nl5.tais += 3, _nl5.kaih += 1, _nl5.saku += 1, _nl6 = !0) : 72 == _nl2.ctype || 62 == _nl2.ctype ? (_nl5.houg += 1, _nl5.tais += 2, _nl5.kaih += 1, _nl5.saku += 1, _nl6 = !0) : 67 != _nl2.ctype && 78 != _nl2.ctype && 82 != _nl2.ctype && 88 != _nl2.ctype && 108 != _nl2.ctype && 112 != _nl2.ctype || (_nl5.houg += 2, _nl5.tais += 3, _nl5.kaih += 2, _nl5.saku += 2, _nl6 = !0, 'ウォースパイト' == _nl2.yomi && (_nl4.houg += 4, _nl4.kaih += 1, _nl4.saku += 1)), 0 == _nl6) return _nl4;
            var _nl7 = _nl2.get_slotnums(370);
            return _nl4.add(_nl5.multiply(_nl7)), _nl4;
        };
    },
    5079: (_nl8, _nl9, _nla) => {
        'use strict';
        var _nlb = null;
        defineModule(_nl9);
        Object.defineProperty(_nl9, '__esModule', {
            'value': !0
        }), _nl9.getSlot371PersonalEffect = void 0;
        var _nlc = _nla(74496);
        _nl9.getSlot371PersonalEffect = function(_nld) {
            var _nle = null,
                _nlf = new _nlc.SlotItemEffectModel(),
                _nlg = new _nlc.SlotItemEffectModel(),
                _nlh = !1;
            if ('ゴトランド' == _nld.yomi && (_nlg.houg = 4, _nlg.tais = 2, _nlg.kaih = 3, _nlg.saku = 6, _nlh = !0, 630 == _nld.ship_id && (_nlf.houg += 2, _nlf.kaih += 2, _nlf.saku += 3)), 70 == _nld.ctype ? (_nlg.houg += 2, _nlg.tais += 1, _nlg.kaih += 2, _nlg.saku += 4, _nlh = !0) : 79 == _nld.ctype ? (_nlg.houg += 2, _nlg.kaih += 1, _nlg.saku += 3, _nlh = !0) : 67 != _nld.ctype && 78 != _nld.ctype && 82 != _nld.ctype && 88 != _nld.ctype && 108 != _nld.ctype && 112 != _nld.ctype || (_nlg.houg += 3, _nlg.tais += 1, _nlg.kaih += 2, _nlg.saku += 3, _nlh = !0, 88 == _nld.ctype && (_nlf.houg += 3, _nlf.kaih += 2, _nlf.saku += 2)), 0 == _nlh) return _nlf;
            var _nli = _nld.get_slotnums(371);
            return _nlf.add(_nlg.multiply(_nli)), _nlf;
        };
    },
    95014: (_nlj, _nlk, _nll) => {
        'use strict';
        var _nlm = null;
        defineModule(_nlk);
        Object.defineProperty(_nlk, '__esModule', {
            'value': !0
        }), _nlk.getSlot372PersonalEffect = void 0;
        var _nln = _nll(74496);
        _nlk.getSlot372PersonalEffect = function(_nlo) {
            var _nlp = null,
                _nlq = new _nln.SlotItemEffectModel(),
                _nlr = !1,
                _nls = new _nln.SlotItemEffectModel();
            if ('しょうかく' == _nlo.yomi || 'ずいかく' == _nlo.yomi || 'たいほう' == _nlo.yomi ? (_nls.houg += 1, _nlr = !0, _nlq.raig += 1) : 'じゅんよう' != _nlo.yomi && 'ひよう' != _nlo.yomi || (_nls.houg += 1, _nlr = !0), 108 == _nlo.ship_id || 109 == _nlo.ship_id || 291 == _nlo.ship_id || 292 == _nlo.ship_id || 296 == _nlo.ship_id || 297 == _nlo.ship_id ? (_nls.houg += 1, _nlr = !0) : 116 == _nlo.ship_id || 74 == _nlo.ship_id || 117 == _nlo.ship_id || 282 == _nlo.ship_id || 185 == _nlo.ship_id ? (_nls.tais += 1, _nlr = !0) : 560 == _nlo.ship_id || 555 == _nlo.ship_id || 318 == _nlo.ship_id ? (_nls.tais += 1, _nlr = !0, _nlq.raig += 1) : 508 == _nlo.ship_id || 509 == _nlo.ship_id ? (_nls.houg += 1, _nlr = !0) : 883 != _nlo.ship_id && 888 != _nlo.ship_id || (_nls.houg += 2, _nls.tais += 1, _nlr = !0, _nlq.raig += 2), 0 == _nlr) return _nlq;
            var _nlt = _nlo.get_slotnums(372);
            return _nlq.add(_nls.multiply(_nlt)), _nlq;
        };
    },
    53099: (_nlu, _nlv, _nlw) => {
        'use strict';
        var _nlx = null;
        defineModule(_nlv);
        Object.defineProperty(_nlv, '__esModule', {
            'value': !0
        }), _nlv.getSlot373PersonalEffect = void 0;
        var _nly = _nlw(74496);
        _nlv.getSlot373PersonalEffect = function(_nlz) {
            var _nm0 = null,
                _nm1 = new _nly.SlotItemEffectModel(),
                _nm2 = new _nly.SlotItemEffectModel(),
                _nm3 = !1;
            if ('しょうかく' == _nlz.yomi ? (_nm2.houg += 2, _nm3 = !0, _nm1.raig += 2, _nm1.kaih += 2) : 'ずいかく' == _nlz.yomi ? (_nm2.houg += 1, _nm3 = !0, _nm1.raig += 2, _nm1.kaih += 3) : 'たいほう' == _nlz.yomi ? (_nm2.houg += 1, _nm3 = !0, _nm1.raig += 2, _nm1.kaih += 2) : 'じゅんよう' != _nlz.yomi && 'ひよう' != _nlz.yomi || (_nm2.houg += 1, _nm3 = !0, _nm1.raig += 1, _nm1.kaih += 1), 108 == _nlz.ship_id || 109 == _nlz.ship_id ? (_nm2.houg += 1, _nm3 = !0) : 291 == _nlz.ship_id || 292 == _nlz.ship_id ? (_nm2.houg += 1, _nm3 = !0, _nm1.raig += 1) : 296 == _nlz.ship_id || 297 == _nlz.ship_id ? (_nm2.houg += 1, _nm3 = !0, _nm1.raig += 1, _nm1.kaih += 1) : 116 == _nlz.ship_id || 74 == _nlz.ship_id ? (_nm2.tais += 1, _nm3 = !0) : 117 == _nlz.ship_id || 282 == _nlz.ship_id || 185 == _nlz.ship_id ? (_nm2.houg += 1, _nm2.tais += 1, _nm3 = !0, _nm1.raig += 1) : 560 == _nlz.ship_id || 555 == _nlz.ship_id || 318 == _nlz.ship_id ? (_nm2.houg += 1, _nm2.tais += 2, _nm3 = !0, _nm1.raig += 1, _nm1.kaih += 1) : 508 == _nlz.ship_id || 509 == _nlz.ship_id ? (_nm2.houg += 1, _nm3 = !0, _nm1.raig += 2, _nm1.kaih += 2) : 888 == _nlz.ship_id ? (_nm2.houg += 2, _nm2.tais += 2, _nm3 = !0, _nm1.raig += 2, _nm1.kaih += 2) : 883 == _nlz.ship_id && (_nm2.houg += 1, _nm2.tais += 2, _nm3 = !0, _nm1.raig += 3, _nm1.kaih += 4), 0 == _nm3) return _nm1;
            var _nm4 = _nlz.get_slotnums(373);
            return _nm1.add(_nm2.multiply(_nm4)), _nm1;
        };
    },
    76201: (_nm5, _nm6, _nm7) => {
        'use strict';
        var _nm8 = null;
        defineModule(_nm6);
        Object.defineProperty(_nm6, '__esModule', {
            'value': !0
        }), _nm6.getSlot374PersonalEffect = void 0;
        var _nm9 = _nm7(74496);
        _nm6.getSlot374PersonalEffect = function(_nma) {
            var _nmb = null,
                _nmc = new _nm9.SlotItemEffectModel(),
                _nmd = new _nm9.SlotItemEffectModel(),
                _nme = !1;
            if ('しょうかく' == _nma.yomi ? (_nmd.houg += 3, _nme = !0, _nmc.raig += 3, _nmc.kaih += 3) : 'ずいかく' == _nma.yomi ? (_nmd.houg += 2, _nme = !0, _nmc.raig += 3, _nmc.kaih += 4) : 'たいほう' == _nma.yomi ? (_nmd.houg += 2, _nme = !0, _nmc.raig += 3, _nmc.kaih += 2) : 'じゅんよう' != _nma.yomi && 'ひよう' != _nma.yomi || (_nmd.houg += 1, _nme = !0, _nmc.raig += 2, _nmc.kaih += 2), 108 == _nma.ship_id || 109 == _nma.ship_id ? (_nmd.houg += 1, _nme = !0, _nmc.raig += 1) : 291 == _nma.ship_id || 292 == _nma.ship_id ? (_nmd.houg += 1, _nmd.tais += 1, _nme = !0, _nmc.raig += 1) : 296 == _nma.ship_id || 297 == _nma.ship_id ? (_nmd.houg += 1, _nmd.tais += 1, _nme = !0, _nmc.raig += 1, _nmc.kaih += 1) : 116 == _nma.ship_id || 74 == _nma.ship_id ? (_nmd.houg += 1, _nmd.tais += 1, _nme = !0) : 117 == _nma.ship_id || 282 == _nma.ship_id || 185 == _nma.ship_id ? (_nmd.houg += 1, _nmd.tais += 2, _nme = !0, _nmc.raig += 1, _nmc.kaih += 1) : 560 == _nma.ship_id || 555 == _nma.ship_id || 318 == _nma.ship_id ? (_nmd.houg += 1, _nmd.tais += 3, _nme = !0, _nmc.raig += 1, _nmc.kaih += 2) : 508 == _nma.ship_id || 509 == _nma.ship_id ? (_nmd.houg += 1, _nmd.tais += 2, _nme = !0, _nmc.raig += 2, _nmc.kaih += 3) : 888 == _nma.ship_id ? (_nmd.houg += 3, _nmd.tais += 3, _nme = !0, _nmc.raig += 2, _nmc.kaih += 3) : 883 == _nma.ship_id && (_nmd.houg += 2, _nmd.tais += 3, _nme = !0, _nmc.raig += 3, _nmc.kaih += 5), 0 == _nme) return _nmc;
            var _nmf = _nma.get_slotnums(374);
            return _nmc.add(_nmd.multiply(_nmf)), _nmc;
        };
    },
    24931: (_nmg, _nmh, _nmi) => {
        'use strict';
        var _nmj = null;
        defineModule(_nmh);
        Object.defineProperty(_nmh, '__esModule', {
            'value': !0
        }), _nmh.getSlot375PersonalEffect = void 0;
        var _nmk = _nmi(74496);
        _nmh.getSlot375PersonalEffect = function(_nml) {
            var _nmm = null,
                _nmn = new _nmk.SlotItemEffectModel(),
                _nmo = new _nmk.SlotItemEffectModel(),
                _nmp = !1;
            if (69 != _nml.ctype && 83 != _nml.ctype && 84 != _nml.ctype && 105 != _nml.ctype && 116 != _nml.ctype && 118 != _nml.ctype || (_nmo.tyku += 3, _nmo.houg += 3, _nmo.kaih += 3, _nmo.tais += 3, _nmp = !0), 'かが' == _nml.yomi && (_nmo.tyku += 1, _nmo.houg += 1, _nmo.kaih += 1, _nmo.tais += 1, _nmp = !0), 0 == _nmp) return _nmn;
            var _nmq = _nml.get_slotnums(375);
            return _nmn.add(_nmo.multiply(_nmq)), _nmn;
        };
    },
    60978: (_nmr, _nms, _nmt) => {
        'use strict';
        var _nmu = null;
        defineModule(_nms);
        Object.defineProperty(_nms, '__esModule', {
            'value': !0
        }), _nms.getSlot376PersonalEffect = void 0;
        var _nmv = _nmt(74496);
        _nms.getSlot376PersonalEffect = function(_nmw) {
            var _nmx = null,
                _nmy = new _nmv.SlotItemEffectModel(),
                _nmz = new _nmv.SlotItemEffectModel(),
                _nn0 = !1;
            if ('アメリカ' == _nmw.getCountryName() ? (_nmz.houg += 2, _nmz.raig += 4, _nn0 = !0) : 67 == _nmw.ctype || 78 == _nmw.ctype || 82 == _nmw.ctype || 88 == _nmw.ctype || 108 == _nmw.ctype || 112 == _nmw.ctype ? (_nmz.houg += 1, _nmz.raig += 2, _nn0 = !0) : 96 == _nmw.ctype && (_nmz.houg += 1, _nmz.raig += 1, _nn0 = !0), 0 == _nn0) return _nmy;
            var _nn1 = _nmw.get_slotnums(376);
            return _nmy.add(_nmz.multiply(_nn1)), _nmy;
        };
    },
    74312: (_nn2, _nn3, _nn4) => {
        'use strict';
        var _nn5 = null;
        defineModule(_nn3);
        Object.defineProperty(_nn3, '__esModule', {
            'value': !0
        }), _nn3.getSlot377PersonalEffect = void 0;
        var _nn6 = _nn4(74496);
        _nn3.getSlot377PersonalEffect = function(_nn7) {
            var _nn8 = null,
                _nn9 = new _nn6.SlotItemEffectModel();
            return 'アメリカ' == _nn7.getCountryName() ? (_nn9.tais += 2, _nn9.kaih += 1, 629 == _nn7.ship_id && (_nn9.tais += 1, _nn9.kaih += 2)) : 67 != _nn7.ctype && 78 != _nn7.ctype && 82 != _nn7.ctype && 88 != _nn7.ctype && 108 != _nn7.ctype && 112 != _nn7.ctype && 96 != _nn7.ctype || (_nn9.tais += 1, _nn9.kaih += 1), 651 != _nn7.ship_id && 656 != _nn7.ship_id || (_nn9.tais += 1, _nn9.kaih += 2), _nn9;
        };
    },
    54350: (_nna, _nnb, _nnc) => {
        'use strict';
        var _nnd = null;
        defineModule(_nnb);
        Object.defineProperty(_nnb, '__esModule', {
            'value': !0
        }), _nnb.getSlot378PersonalEffect = void 0;
        var _nne = _nnc(74496);
        _nnb.getSlot378PersonalEffect = function(_nnf) {
            var _nng = null,
                _nnh = new _nne.SlotItemEffectModel();
            return 'アメリカ' == _nnf.getCountryName() ? (_nnh.tais += 3, _nnh.kaih += 1, 629 == _nnf.ship_id && (_nnh.tais += 1, _nnh.kaih += 1)) : 67 == _nnf.ctype || 78 == _nnf.ctype || 82 == _nnf.ctype || 88 == _nnf.ctype || 108 == _nnf.ctype || 112 == _nnf.ctype ? (_nnh.tais += 2, _nnh.kaih += 1) : 96 == _nnf.ctype && (_nnh.tais += 1, _nnh.kaih += 1), 651 != _nnf.ship_id && 656 != _nnf.ship_id || (_nnh.tais += 1, _nnh.kaih += 1), _nnh;
        };
    },
    26262: function(_nni, _nnj, _nnk) {
        'use strict';
        var _nnl = null;
        var _nnm = this && this.__importDefault || function(_nnn) {
            var _nno = null;
            return _nnn && _nnn.__esModule ? _nnn : {
                'default': _nnn
            };
        };
        defineModule(_nnj);
        Object.defineProperty(_nnj, '__esModule', {
            'value': !0
        }), _nnj.getSlot379PersonalEffect = void 0;
        var _nnp = _nnk(74496),
            _nnq = _nnm(_nnk(18622));
        _nnj.getSlot379PersonalEffect = function(_nnr) {
            var _nns = null,
                _nnt = new _nnp.SlotItemEffectModel(),
                _nnu = !1,
                _nnv = new _nnp.SlotItemEffectModel();
            if (1 == _nnr.stype ? (_nnv.tyku += 2, _nnv.houg += 1, _nnu = !0) : 21 != _nnr.stype && 16 != _nnr.stype || (_nnv.tyku += 1, _nnv.houg += 1, _nnu = !0), 66 == _nnr.ctype || 28 == _nnr.ctype ? (_nnv.houg += 1, _nnv.tyku += 2, _nnu = !0) : 101 == _nnr.ctype && (_nnv.tyku += 2, _nnv.houg += 1, _nnt.tyku += 2, _nnt.houg += 2, _nnu = !0), 'ゆら' == _nnr.yomi || 'なか' == _nnr.yomi || 'きぬ' == _nnr.yomi || 'いすず' == _nnr.yomi ? (_nnv.houg += 2, _nnu = !0) : 'おおい' != _nnr.yomi && 'きたかみ' != _nnr.yomi || (_nnv.tyku += 2, _nnv.houg += 2, _nnu = !0), 'ゆら' != _nnr.yomi && 'なか' != _nnr.yomi && 'きぬ' != _nnr.yomi && 'いすず' != _nnr.yomi && 'ゆうばり' != _nnr.yomi || (_nnv.tais += 1, _nnu = !0), 'てんりゅう' != _nnr.yomi && 'たつた' != _nnr.yomi && 'ゆうばり' != _nnr.yomi || (_nnv.houg += 1, _nnu = !0), 488 == _nnr.ship_id ? (_nnv.tyku += 4, _nnu = !0) : 220 == _nnr.ship_id ? (_nnv.tyku += 3, _nnu = !0) : 23 == _nnr.ship_id ? (_nnv.tyku += 2, _nnu = !0) : 160 == _nnr.ship_id || 487 == _nnr.ship_id || 141 == _nnr.ship_id ? (_nnv.tyku += 3, _nnu = !0) : 224 == _nnr.ship_id || 289 == _nnr.ship_id || 219 == _nnr.ship_id || 56 == _nnr.ship_id || 113 == _nnr.ship_id || 22 == _nnr.ship_id ? (_nnv.tyku += 2, _nnu = !0) : 651 != _nnr.ship_id && 656 != _nnr.ship_id || (_nnv.tyku += 3, _nnv.houg += 3, 656 == _nnr.ship_id && (_nnv.kaih += 3, _nnv.tais += 2), _nnu = !0), 488 != _nnr.ship_id && 160 != _nnr.ship_id && 487 != _nnr.ship_id && 141 != _nnr.ship_id || (_nnv.tais += 1, _nnu = !0), 477 != _nnr.ship_id && 478 != _nnr.ship_id && 624 != _nnr.ship_id || (_nnv.tais += 2, _nnu = !0), 477 != _nnr.ship_id && 478 != _nnr.ship_id && 624 != _nnr.ship_id && 622 != _nnr.ship_id || (_nnv.tyku += 2, _nnu = !0), 652 != _nnr.ship_id && 657 != _nnr.ship_id && 547 != _nnr.ship_id && 146 != _nnr.ship_id || (_nnt.houg += 2), 652 != _nnr.ship_id && 657 != _nnr.ship_id && 547 != _nnr.ship_id && 146 != _nnr.ship_id || (_nnt.tyku += 2), _nnu) {
                var _nnw = _nnr.get_slotnums(379);
                _nnt.add(_nnv.multiply(_nnw));
            }
            var _nnx = new _nnp.SlotItemEffectModel(),
                _nny = !1;
            16 == _nnr.stype || 3 == _nnr.stype || 4 == _nnr.stype || 21 == _nnr.stype ? (_nnx.houg += 1, _nnx.kaih += 2, _nny = !0) : 1 == _nnr.stype && (_nnx.houg += 1, _nnx.kaih += 4, _nny = !0), 66 == _nnr.ctype || 28 == _nnr.ctype || 21 == _nnr.ctype || 34 == _nnr.ctype ? (_nnx.houg += 2, _nnx.kaih += 3, _nny = !0) : 101 == _nnr.ctype && (_nnx.houg += 4, _nnx.kaih += 3, _nny = !0), 488 == _nnr.ship_id || 651 == _nnr.ship_id || 656 == _nnr.ship_id ? (_nnx.houg += 2, _nnx.kaih += 2, _nny = !0) : 487 == _nnr.ship_id || 160 == _nnr.ship_id || 141 == _nnr.ship_id || 118 == _nnr.ship_id || 119 == _nnr.ship_id ? (_nnx.houg += 1, _nnx.kaih += 1, _nny = !0) : 652 != _nnr.ship_id && 657 != _nnr.ship_id && 547 != _nnr.ship_id && 146 != _nnr.ship_id || (_nnx.houg += 1, _nnx.kaih += 1, _nny = !0);
            var _nnz = new _nnp.SlotItemEffectModel(),
                _no0 = !1;
            if (656 == _nnr.ship_id && (_nnz.tyku += 3, _nnz.kaih += 2, _no0 = !0), _nny || _no0) {
                for (var _no1 = 0, _no2 = 0, _no3 = 0, _no4 = _nnr.have_slot_ids(); _no3 < _no4.length; _no3++) {
                    var _no5 = _no4[_no3],
                        _no6 = _nnq.default.model.slot.getMst(_no5),
                        _no7 = _no6.equipType;
                    12 != _no7 && 13 != _no7 || (_no6.sakuteki >= 5 && (_no1 += _nnr.get_slotnums(parseInt(_no5))), _no6.taiku >= 2 && (_no2 += _nnr.get_slotnums(parseInt(_no5))));
                }
                _nny && _no1 > 0 && _nnt.add(_nnx), _no0 && _no2 > 0 && _nnt.add(_nnz);
            }
            return _nnt;
        };
    },
    45530: function(_no8, _no9, _noa) {
        'use strict';
        var _nob = null;
        var _noc = this && this.__importDefault || function(_nod) {
            var _noe = null;
            return _nod && _nod.__esModule ? _nod : {
                'default': _nod
            };
        };
        defineModule(_no9);
        Object.defineProperty(_no9, '__esModule', {
            'value': !0
        }), _no9.getSlot380PersonalEffect = void 0;
        var _nof = _noa(74496),
            _nog = _noc(_noa(18622));
        _no9.getSlot380PersonalEffect = function(_noh) {
            var _noi = null,
                _noj = new _nof.SlotItemEffectModel(),
                _nok = !1,
                _nol = new _nof.SlotItemEffectModel();
            if (21 != _noh.stype && 16 != _noh.stype || (_nol.tyku += 2, _nol.houg += 1, _nok = !0), 101 == _noh.ctype && (_nol.tyku += 2, _nol.houg += 1, _nok = !0, _noj.tyku += 2, _noj.houg += 2), 'ゆら' == _noh.yomi || 'なか' == _noh.yomi || 'きぬ' == _noh.yomi || 'いすず' == _noh.yomi ? (_nol.houg += 2, _nok = !0) : 'おおい' != _noh.yomi && 'きたかみ' != _noh.yomi || (_nol.tyku += 2, _nol.houg += 3, _nok = !0), 'ゆら' != _noh.yomi && 'なか' != _noh.yomi && 'きぬ' != _noh.yomi && 'いすず' != _noh.yomi && 'ゆうばり' != _noh.yomi || (_nol.tais += 1, _nok = !0), 'てんりゅう' != _noh.yomi && 'たつた' != _noh.yomi && 'ゆうばり' != _noh.yomi || (_nol.houg += 1, _nok = !0), 488 == _noh.ship_id ? (_nol.tyku += 4, _nok = !0) : 220 == _noh.ship_id ? (_nol.tyku += 3, _nok = !0) : 23 == _noh.ship_id ? (_nol.tyku += 2, _nok = !0) : 160 == _noh.ship_id || 487 == _noh.ship_id || 141 == _noh.ship_id ? (_nol.tyku += 3, _nok = !0) : 224 == _noh.ship_id || 289 == _noh.ship_id || 219 == _noh.ship_id || 56 == _noh.ship_id || 113 == _noh.ship_id || 22 == _noh.ship_id ? (_nol.tyku += 2, _nok = !0) : 651 == _noh.ship_id || 656 == _noh.ship_id ? (_nol.tyku += 3, _nol.houg += 3, _nok = !0) : 407 != _noh.ship_id && 665 != _noh.ship_id || (_nol.houg += 2, _nol.tyku += 2, _nok = !0, _noj.houg += 1, _noj.tyku += 1, _noj.kaih += 2), 488 != _noh.ship_id && 160 != _noh.ship_id && 487 != _noh.ship_id && 141 != _noh.ship_id || (_nol.tais += 1, _nok = !0), 477 != _noh.ship_id && 478 != _noh.ship_id && 624 != _noh.ship_id || (_nol.tais += 2, _nok = !0), 477 != _noh.ship_id && 478 != _noh.ship_id && 624 != _noh.ship_id && 622 != _noh.ship_id || (_nol.tyku += 2, _nok = !0), 652 != _noh.ship_id && 657 != _noh.ship_id || (_nol.houg += 3, _nok = !0), 547 != _noh.ship_id && 146 != _noh.ship_id || (_noj.houg += 2), 652 != _noh.ship_id && 657 != _noh.ship_id && 547 != _noh.ship_id && 146 != _noh.ship_id || (_noj.tyku += 2), _nok) {
                var _nom = _noh.get_slotnums(380);
                _noj.add(_nol.multiply(_nom));
            }
            var _non = new _nof.SlotItemEffectModel(),
                _noo = !1,
                _nop = new _nof.SlotItemEffectModel(),
                _noq = !1,
                _nor = !1;
            if (16 != _noh.stype && 3 != _noh.stype && 4 != _noh.stype && 21 != _noh.stype || (_non.houg += 2, _non.kaih += 1, _noo = !0), 101 == _noh.ctype && (_non.houg += 4, _non.kaih += 3, _noo = !0), 488 != _noh.ship_id && 487 != _noh.ship_id && 160 != _noh.ship_id && 141 != _noh.ship_id && 118 != _noh.ship_id && 119 != _noh.ship_id && 651 != _noh.ship_id && 656 != _noh.ship_id || (_non.houg += 1, _non.kaih += 2, _noo = !0), 652 == _noh.ship_id || 657 == _noh.ship_id || 547 == _noh.ship_id || 146 == _noh.ship_id ? (_non.houg += 1, _non.kaih += 3, _noo = !0) : 407 != _noh.ship_id && 665 != _noh.ship_id || (_nor = !0, _noo = !0, _non.houg += 2, _non.kaih += 1, _noq = !0, _nop.houg += 1, _nop.tyku += 2, _nop.kaih += 1), _noo || _nor) {
                for (var _nos = 0, _not = 0, _nou = 0, _nov = _noh.have_slot_ids(); _nou < _nov.length; _nou++) {
                    var _now = _nov[_nou],
                        _nox = _nog.default.model.slot.getMst(_now),
                        _noy = _nox.equipType;
                    12 == _noy || 13 == _noy ? _nox.sakuteki >= 5 && (_nos += _noh.get_slotnums(parseInt(_now))) : 21 == _noy && (_not += _noh.get_slotnums(parseInt(_now)));
                }
                _noo && _nos > 0 && _noj.add(_non), _noq && _not > 0 && _noj.add(_nop);
            }
            return _noj;
        };
    },
    44053: (_noz, _np0, _np1) => {
        'use strict';
        var _np2 = null;
        defineModule(_np0);
        Object.defineProperty(_np0, '__esModule', {
            'value': !0
        }), _np0.getSlot381PersonalEffect = void 0;
        var _np3 = _np1(74496);
        _np0.getSlot381PersonalEffect = function(_np4) {
            var _np5 = null,
                _np6 = new _np3.SlotItemEffectModel(),
                _np7 = !1,
                _np8 = new _np3.SlotItemEffectModel(),
                _np9 = 0;
            if ('アメリカ' == _np4.getCountryName() && (_np8.houg += 1, 102 == _np4.ctype && (_np8.houg += 1), _np7 = !0, _np9 = 1), 0 == _np7) return _np6;
            var _npa = _np4.get_slotnums(381);
            if (_np6.add(_np8.multiply(_npa)), 0 == _np9) return _np6;
            var _npb = _np4.get_each_level_nums(381),
                _npc = 0;
            return _npb.map(function(_npd, _npe) {
                _npe >= 6 && (_npc += _npd);
            }), 1 == _np9 && (_np6.houg += 1 * _npc), _np6;
        };
    },
    65441: function(_npf, _npg, _nph) {
        'use strict';
        var _npi = null;
        var _npj = this && this.__importDefault || function(_npk) {
            var _npl = null;
            return _npk && _npk.__esModule ? _npk : {
                'default': _npk
            };
        };
        defineModule(_npg);
        Object.defineProperty(_npg, '__esModule', {
            'value': !0
        }), _npg.getSlot382PersonalEffect = void 0;
        var _npm = _nph(74496),
            _npn = _npj(_nph(18622));
        _npg.getSlot382PersonalEffect = function(_npo) {
            var _npp = null,
                _npq = new _npm.SlotItemEffectModel(),
                _npr = !1,
                _nps = new _npm.SlotItemEffectModel(),
                _npt = !1,
                _npu = new _npm.SlotItemEffectModel(),
                _npv = new _npm.SlotItemEffectModel(),
                _npw = 2;
            1 == _npo.stype && (_nps.tyku += 2, _nps.kaih += 2, _nps.tais += 1, _npr = !0, _npu.houg += 2, _npu.kaih += 3, _npv.tyku += 2, _npv.kaih += 3, _npt = !0, _npw = 1), 66 != _npo.ctype && 28 != _npo.ctype && 101 != _npo.ctype || (_nps.tyku += 2, _nps.kaih += 1, _npr = !0, _npu.houg += 1, _npu.kaih += 2, _npv.tyku += 2, _npv.kaih += 2, _npt = !0, _npw = 1), 'ゆら' != _npo.yomi && 'なか' != _npo.yomi && 'きぬ' != _npo.yomi || (_nps.tyku += 1, _npr = !0), 488 == _npo.ship_id || 220 == _npo.ship_id ? (_nps.kaih += 1, _npr = !0, 488 == _npo.ship_id && (_npu.houg += 1, _npu.kaih += 1, _npv.tyku += 2, _npv.kaih += 2, _npt = !0, _npw = 1)) : 160 == _npo.ship_id || 224 == _npo.ship_id ? (_nps.kaih += 1, _npr = !0, 160 == _npo.ship_id && (_npu.houg += 1, _npu.kaih += 1, _npv.tyku += 2, _npv.kaih += 2, _npt = !0)) : 487 == _npo.ship_id || 289 == _npo.ship_id ? (_nps.kaih += 1, _npr = !0, 487 == _npo.ship_id && (_npu.houg += 1, _npu.kaih += 1, _npv.tyku += 2, _npv.kaih += 2, _npt = !0)) : 656 == _npo.ship_id ? (_nps.tyku += 3, _nps.kaih += 2, _npr = !0, _npu.houg += 2, _npu.kaih += 2, _npv.tyku += 3, _npv.kaih += 2, _npt = !0, _npw = 1) : 145 != _npo.ship_id && 961 != _npo.ship_id || (_npw = 1);
            for (var _npx = 0, _npy = 0, _npz = 0, _nq0 = _npo.have_slot_ids(); _npz < _nq0.length; _npz++) {
                var _nq1 = _nq0[_npz],
                    _nq2 = _npn.default.model.slot.getMst(_nq1),
                    _nq3 = _nq2.equipType;
                12 != _nq3 && 13 != _nq3 || (_nq2.sakuteki >= 5 && (_npx += _npo.get_slotnums(parseInt(_nq1))), _nq2.taiku >= 2 && (_npy += _npo.get_slotnums(parseInt(_nq1))));
            }
            for (var _nq4 = [], _nq5 = function(_nq6) {
                    var _nq7 = null;
                    if (null == _npo.have_slots_dict[_nq6]) return 'continue';
                    var _nq8 = _npo.get_each_level_nums(_nq6);
                    null == _nq4[_nq6] && (_nq4[_nq6] = []), _nq8.forEach(function(_nq9, _nqa) {
                        var _nqb = null;
                        for (var _nqc = 1; _nqc <= _npo.SLOT_LEVEL_MAX; _nqc++) null == _nq4[_nq6][_nqc] && (_nq4[_nq6][_nqc] = 0), _nqa >= _nqc && (_nq4[_nq6][_nqc] += _nq9);
                    });
                }, _nqd = 0, _nqe = [509]; _nqd < _nqe.length; _nqd++) {
                _nq5(_nqe[_nqd]);
            }
            var _nqf = 0,
                _nqg = 0,
                _nqh = 0,
                _nqi = 0,
                _nqj = 0,
                _nqk = 0;
            null != _nq4[509] && (_nqf = _nq4[509][1], _nqg = _nq4[509][2], _nqh = _nq4[509][4], _nqi = _nq4[509][6], _nqj = _nq4[509][8], _nqk = _nq4[509][10], 1 == _npw ? (_nqf >= 1 && (_npq.tyku += 1 * _nqf), _nqg >= 1 && (_npq.kaih += 2 * _nqg), _nqh >= 1 && (_npq.houg += 1 * _nqh), _nqi >= 1 && (_npq.tyku += 1 * _nqi), _nqj >= 1 && (_npq.houm += 1 * _nqj), _nqk >= 1 && (_npq.tyku += 1 * _nqk)) : 2 == _npw && (_nqg >= 1 && (_npq.tyku += 1 * _nqg), _nqh >= 1 && (_npq.kaih += 2 * _nqh), _nqi >= 1 && (_npq.houg += 1 * _nqi), _nqj >= 1 && (_npq.tyku += 1 * _nqj), _nqk >= 1 && (_npq.houm += 1 * _nqk)));
            var _nql = _npo.get_slotnums(509),
                _nqm = _nql + _npo.get_slotnums(382);
            return _npr && _npq.add(_nps.multiply(_nqm)), 3 != _npo.stype && 21 != _npo.stype && 4 != _npo.stype || _nqg >= 1 && (_npx > 0 && (_npq.houg += 1, _npq.kaih += 1), _npy > 0 && (_npq.tyku += 2, _npq.kaih += 1)), 145 == _npo.ship_id ? _nqg >= 1 && (_npx > 0 && (_npq.houg += 1, _npq.tyku += 1, _npq.kaih += 2), _npy > 0 && (_npq.tyku += 4, _npq.kaih += 2)) : 961 == _npo.ship_id && _nql > 0 && (_npx > 0 && (_npq.houg += 2, _npq.tyku += 2, _npq.kaih += 3), _npy > 0 && (_npq.houg += 1, _npq.tyku += 5, _npq.kaih += 3)), _npt && _npx > 0 && _npq.add(_npu), _npt && _npy > 0 && _npq.add(_npv), _npq;
        };
    },
    33258: (_nqn, _nqo, _nqp) => {
        'use strict';
        var _nqq = null;
        defineModule(_nqo);
        Object.defineProperty(_nqo, '__esModule', {
            'value': !0
        }), _nqo.getSlot383PersonalEffect = void 0;
        var _nqr = _nqp(74496);
        _nqo.getSlot383PersonalEffect = function(_nqs) {
            var _nqt = null,
                _nqu = new _nqr.SlotItemEffectModel(),
                _nqv = !1,
                _nqw = new _nqr.SlotItemEffectModel(),
                _nqx = _nqs.get_each_level_over_nums([383])[383];
            if (44 == _nqs.ctype && (_nqw.raig += 2, _nqv = !0, _nqx[4] > 0 && (_nqu.raig += 1), _nqx[6] > 0 && (_nqu.houm += 1)), 'い58' == _nqs.yomi && (_nqw.raig += 1, _nqv = !0), 636 == _nqs.ship_id ? (_nqw.raig += 3, _nqv = !0) : 607 == _nqs.ship_id && (_nqw.raig += 4, _nqv = !0), _nqx[8] > 0 && (_nqu.raig += 1), _nqx[10] > 0 && (_nqu.houm += 1), 'い58' != _nqs.yomi && 'い47' != _nqs.yomi || _nqx[5] > 0 && (_nqu.houm += 1), 0 == _nqv) return _nqu;
            var _nqy = _nqs.get_slotnums(383);
            return _nqu.add(_nqw.multiply(_nqy)), _nqu;
        };
    },
    92168: (_nqz, _nr0, _nr1) => {
        'use strict';
        var _nr2 = null;
        defineModule(_nr0);
        Object.defineProperty(_nr0, '__esModule', {
            'value': !0
        }), _nr0.getSlot384PersonalEffect = void 0;
        var _nr3 = _nr1(74496);
        _nr0.getSlot384PersonalEffect = function(_nr4) {
            var _nr5 = null,
                _nr6 = new _nr3.SlotItemEffectModel(),
                _nr7 = !1,
                _nr8 = new _nr3.SlotItemEffectModel();
            44 == _nr4.ctype && (_nr8.kaih += 3, _nr7 = !0), 'い58' == _nr4.yomi && (_nr8.kaih += 2, _nr7 = !0), 636 == _nr4.ship_id ? (_nr8.kaih += 3, _nr7 = !0) : 607 == _nr4.ship_id && (_nr8.kaih += 4, _nr7 = !0);
            var _nr9 = _nr4.get_slotnums(384);
            _nr7 && _nr6.add(_nr8.multiply(_nr9));
            var _nra = _nr9,
                _nrb = _nr4.get_slotnums(213),
                _nrc = _nr4.get_slotnums(214),
                _nrd = _nr4.get_slotnums(383);
            return _nra > 0 && _nrb + _nrc + _nrd > 0 && (_nr6.raig += 3, _nr6.kaih += 2), _nr6;
        };
    },
    85975: (_nre, _nrf, _nrg) => {
        'use strict';
        var _nrh = null;
        defineModule(_nrf);
        Object.defineProperty(_nrf, '__esModule', {
            'value': !0
        }), _nrf.getSlot385PersonalEffect = void 0;
        var _nri = _nrg(74496);
        _nrf.getSlot385PersonalEffect = function(_nrj) {
            var _nrk = null,
                _nrl = new _nri.SlotItemEffectModel(),
                _nrm = !1,
                _nrn = new _nri.SlotItemEffectModel(),
                _nro = 0;
            if ('アメリカ' == _nrj.getCountryName() && (_nrn.houg += 1, 102 == _nrj.ctype || 107 == _nrj.ctype ? (_nrn.houg += 1, _nrn.souk += 1) : 93 == _nrj.ctype && (_nrn.houg += 1), _nrm = !0, _nro = 1), 8 == _nrj.stype && (_nrn.houg += 1, _nrm = !0), 0 == _nrm) return _nrl;
            var _nrp = _nrj.get_slotnums(385);
            if (_nrl.add(_nrn.multiply(_nrp)), 0 == _nro) return _nrl;
            var _nrq = _nrj.get_each_level_nums(385),
                _nrr = 0;
            return _nrq.forEach(function(_nrs, _nrt) {
                _nrt >= 6 && (_nrr += _nrs);
            }), 1 == _nro && (_nrl.houg += 1 * _nrr, _nrl.souk += 1 * _nrq[10]), _nrl;
        };
    },
    98467: (_nru, _nrv, _nrw) => {
        'use strict';
        var _nrx = null;
        defineModule(_nrv);
        Object.defineProperty(_nrv, '__esModule', {
            'value': !0
        }), _nrv.getSlot386PersonalEffect = void 0;
        var _nry = _nrw(74496);
        _nrv.getSlot386PersonalEffect = function(_nrz) {
            var _ns0 = null,
                _ns1 = new _nry.SlotItemEffectModel(),
                _ns2 = !1,
                _ns3 = new _nry.SlotItemEffectModel(),
                _ns4 = 0;
            if ('アメリカ' == _nrz.getCountryName() && (_ns3.houg += 1, _ns2 = !0, _ns4 = 1), 0 == _ns2) return _ns1;
            var _ns5 = _nrz.get_slotnums(386);
            if (_ns1.add(_ns3.multiply(_ns5)), 0 == _ns4) return _ns1;
            var _ns6 = _nrz.get_each_level_nums(386),
                _ns7 = 0,
                _ns8 = 0;
            return _ns6.forEach(function(_ns9, _nsa) {
                _nsa >= 2 && (_ns7 += _ns9), _nsa >= 7 && (_ns8 += _ns9);
            }), 1 == _ns4 && (_ns1.houg += 1 * _ns7, _ns1.houg += 1 * _ns8), _ns1;
        };
    },
    88348: (_nsb, _nsc, _nsd) => {
        'use strict';
        var _nse = null;
        defineModule(_nsc);
        Object.defineProperty(_nsc, '__esModule', {
            'value': !0
        }), _nsc.getSlot387PersonalEffect = void 0;
        var _nsf = _nsd(74496);
        _nsc.getSlot387PersonalEffect = function(_nsg) {
            var _nsh = null,
                _nsi = new _nsf.SlotItemEffectModel(),
                _nsj = !1,
                _nsk = new _nsf.SlotItemEffectModel(),
                _nsl = 0;
            if ('アメリカ' == _nsg.getCountryName() && (_nsk.houg += 1, _nsj = !0, _nsl = 1), 0 == _nsj) return _nsi;
            var _nsm = _nsg.get_slotnums(387);
            if (_nsi.add(_nsk.multiply(_nsm)), 0 == _nsl) return _nsi;
            var _nsn = _nsg.get_each_level_nums(387),
                _nso = 0,
                _nsp = 0;
            return _nsn.forEach(function(_nsq, _nsr) {
                _nsr >= 2 && (_nso += _nsq), _nsr >= 7 && (_nsp += _nsq);
            }), 1 == _nsl && (_nsi.houg += 1 * _nso, _nsi.houg += 1 * _nsp), _nsi;
        };
    },
    21097: (_nss, _nst, _nsu) => {
        'use strict';
        var _nsv = null;
        defineModule(_nst);
        Object.defineProperty(_nst, '__esModule', {
            'value': !0
        }), _nst.getSlot389PersonalEffect = void 0;
        var _nsw = _nsu(74496);
        _nst.getSlot389PersonalEffect = function(_nsx) {
            var _nsy = null,
                _nsz = new _nsw.SlotItemEffectModel(),
                _nt0 = !1,
                _nt1 = new _nsw.SlotItemEffectModel();
            if (594 == _nsx.ship_id || 599 == _nsx.ship_id) _nt1.houg += 2, _nt1.kaih += 2, _nt0 = !0;
            else {
                if (698 == _nsx.ship_id || 610 == _nsx.ship_id) _nt1.houg += 3, _nt1.kaih += 2, _nt0 = !0;
                else 646 == _nsx.ship_id && (_nt1.houg += 4, _nt1.tais += 4, _nt1.kaih += 3, _nt0 = !0, _nsx.get_type3_nums(25) > 0 && (_nsz.houg += 3, _nsz.tais += 6), _nsx.get_slotnums(326) + _nsx.get_slotnums(327) > 0 && (_nsz.houg += 5, _nsz.tais += 4));
            }
            if ('アメリカ' == _nsx.getCountryName() && (_nt1.houg += 2, _nt1.tais += 3, _nt1.kaih += 1, _nt0 = !0), 0 == _nt0) return _nsz;
            var _nt2 = _nsx.get_slotnums(389);
            return _nsz.add(_nt1.multiply(_nt2)), _nsz;
        };
    },
    43607: (_nt3, _nt4, _nt5) => {
        'use strict';
        var _nt6 = null;
        defineModule(_nt4);
        Object.defineProperty(_nt4, '__esModule', {
            'value': !0
        }), _nt4.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _nt7 = _nt5(74496);
        _nt4.getSlot38cmFourBarrelGunPersonalEffect = function(_nt8) {
            var _nt9 = null,
                _nta = new _nt7.SlotItemEffectModel(),
                _ntb = _nt8.get_slotnums(245),
                _ntc = _nt8.get_slotnums(246),
                _ntd = _nt8.get_slotnums(468),
                _nte = _ntb + _ntc + _ntd,
                _ntf = 0,
                _ntg = 0,
                _nth = new Array();
            if (79 != _nt8.ctype) return _nta;
            _nta.houg += 2 * _nte, _nta.houm += 1 * _nte, _ntd >= 1 && (_nta.houg += 1 * _ntd, _ntg = 1, _nth.push(468)), _ntf = 1;
            var _nti = _nt8.get_slotnums(247);
            if (1 == _ntf && _nti >= 1 && (_nta.kaih += 2 * _nti, _nta.houg += 2 * _nti, _nta.houm += 2 * _nti), 0 == _ntg) return _nta;
            for (var _ntj = {}, _ntk = {}, _ntl = {}, _ntm = 0, _ntn = _nth; _ntm < _ntn.length; _ntm++) {
                var _nto = _ntn[_ntm];
                _ntk[_nto] = 0, _ntl[_nto] = 0, _ntj[_nto] = 0;
                for (var _ntp = 0, _ntq = _nt8.have_slots_dict[_nto]; _ntp < _ntq.length; _ntp++) {
                    var _ntr = _ntq[_ntp].level;
                    _ntr >= 4 && _ntk[_nto]++, _ntr >= 8 && _ntl[_nto]++, _ntr >= 10 && _ntj[_nto]++;
                }
            }
            if (1 == _ntg && _ntd > 0) {
                var _nts = _ntk[468],
                    _ntt = _ntl[468],
                    _ntu = _ntj[468];
                _nts >= 1 && (_nta.houg += 1 * _nts, _nta.houm += 1 * _nts), _ntt >= 1 && (_nta.houg += 1 * _ntt, _nta.houm += 1 * _ntt), _ntu >= 1 && (_nta.houm += 1 * _ntu);
            }
            return _nta;
        };
    },
    37273: (_ntv, _ntw, _ntx) => {
        'use strict';
        var _nty = null;
        defineModule(_ntw);
        Object.defineProperty(_ntw, '__esModule', {
            'value': !0
        }), _ntw.getSlot390PersonalEffect = void 0;
        var _ntz = _ntx(74496);
        _ntw.getSlot390PersonalEffect = function(_nu0) {
            var _nu1 = null,
                _nu2 = new _ntz.SlotItemEffectModel(),
                _nu3 = !1,
                _nu4 = new _ntz.SlotItemEffectModel(),
                _nu5 = 0;
            if ('アメリカ' == _nu0.getCountryName() && (_nu4.houg += 1, _nu3 = !0, _nu5 = 1), 102 == _nu0.ctype || 107 == _nu0.ctype ? (_nu4.houg += 1, _nu4.souk += 1, _nu3 = !0) : 93 == _nu0.ctype && (_nu4.houg += 1, _nu3 = !0), 8 == _nu0.stype && (_nu4.houg += 1, _nu3 = !0), 0 == _nu3) return _nu2;
            var _nu6 = _nu0.get_slotnums(390);
            if (_nu2.add(_nu4.multiply(_nu6)), 0 == _nu5) return _nu2;
            var _nu7 = _nu0.get_each_level_nums(390),
                _nu8 = 0,
                _nu9 = 0;
            return _nu7.forEach(function(_nua, _nub) {
                _nub >= 3 && (_nu8 += _nua), _nub >= 6 && (_nu9 += _nua);
            }), 1 == _nu5 && (_nu2.houg += 1 * _nu8, _nu2.kaih += 1 * _nu9, _nu2.souk += 1 * _nu7[10]), _nu2;
        };
    },
    72694: (_nuc, _nud, _nue) => {
        'use strict';
        var _nuf = null;
        defineModule(_nud);
        Object.defineProperty(_nud, '__esModule', {
            'value': !0
        }), _nud.getSlot391PersonalEffect = void 0;
        var _nug = _nue(74496);
        _nud.getSlot391PersonalEffect = function(_nuh) {
            var _nui = null,
                _nuj = new _nug.SlotItemEffectModel(),
                _nuk = !1,
                _nul = new _nug.SlotItemEffectModel();
            if ('しょうかく' == _nuh.yomi || 'ずいかく' == _nuh.yomi ? (_nul.houg += 1, _nuk = !0) : 'じゅんよう' != _nuh.yomi && 'ひよう' != _nuh.yomi || (_nul.houg += 1, _nuk = !0), 116 == _nuh.ship_id || 185 == _nuh.ship_id || 282 == _nuh.ship_id ? (_nul.houg += 1, _nuk = !0) : 117 == _nuh.ship_id || 318 == _nuh.ship_id || 883 == _nuh.ship_id || 888 == _nuh.ship_id ? (_nul.houg += 1, _nuj.kaih += 1, _nuk = !0) : 560 != _nuh.ship_id && 555 != _nuh.ship_id || (_nul.houg += 1, _nul.kaih += 1, _nuk = !0), 0 == _nuk) return _nuj;
            var _num = _nuh.get_slotnums(391);
            return _nuj.add(_nul.multiply(_num)), _nuj;
        };
    },
    62067: (_nun, _nuo, _nup) => {
        'use strict';
        var _nuq = null;
        defineModule(_nuo);
        Object.defineProperty(_nuo, '__esModule', {
            'value': !0
        }), _nuo.getSlot392PersonalEffect = void 0;
        var _nur = _nup(74496);
        _nuo.getSlot392PersonalEffect = function(_nus) {
            var _nut = null,
                _nuu = new _nur.SlotItemEffectModel(),
                _nuv = !1,
                _nuw = new _nur.SlotItemEffectModel();
            if ('しょうかく' == _nus.yomi || 'ずいかく' == _nus.yomi ? (_nuw.houg += 2, _nuw.kaih += 1, _nuv = !0) : 'じゅんよう' != _nus.yomi && 'ひよう' != _nus.yomi || (_nuw.houg += 1, _nuw.kaih += 1, _nuv = !0), 116 == _nus.ship_id || 185 == _nus.ship_id || 282 == _nus.ship_id ? (_nuw.houg += 2, _nuw.kaih += 1, _nuv = !0) : 117 == _nus.ship_id || 318 == _nus.ship_id || 883 == _nus.ship_id || 888 == _nus.ship_id ? (_nuw.houg += 2, _nuw.kaih += 2, _nuv = !0) : 560 != _nus.ship_id && 555 != _nus.ship_id || (_nuw.houg += 3, _nuw.kaih += 2, _nuv = !0), 0 == _nuv) return _nuu;
            var _nux = _nus.get_slotnums(392);
            return _nuu.add(_nuw.multiply(_nux)), _nuu;
        };
    },
    87817: function(_nuy, _nuz, _nv0) {
        'use strict';
        var _nv1 = null;
        var _nv2 = this && this.__importDefault || function(_nv3) {
            var _nv4 = null;
            return _nv3 && _nv3.__esModule ? _nv3 : {
                'default': _nv3
            };
        };
        defineModule(_nuz);
        Object.defineProperty(_nuz, '__esModule', {
            'value': !0
        }), _nuz.getSlot397PersonalEffect = void 0;
        var _nv5 = _nv0(74496),
            _nv6 = _nv2(_nv0(18622));
        _nuz.getSlot397PersonalEffect = function(_nv7) {
            var _nv8 = null,
                _nv9 = new _nv5.SlotItemEffectModel(),
                _nva = !1,
                _nvb = new _nv5.SlotItemEffectModel(),
                _nvc = 0,
                _nvd = 0,
                _nve = !1;
            if (651 == _nv7.ship_id ? (_nvb.houg += 5, _nvb.tyku += 2, _nvb.kaih += 1, _nva = !0, _nve = !0, _nvc = 1, _nvd = 1) : 656 == _nv7.ship_id && (_nvb.houg += 3, _nvb.tyku += 1, _nvb.kaih += 1, _nva = !0, _nve = !0, _nvc = 1), 0 == _nva) return _nv9;
            var _nvf = _nv7.get_slotnums(397);
            _nv9.add(_nvb.multiply(_nvf));
            var _nvg = 0,
                _nvh = _nv7.get_each_level_nums(397),
                _nvi = 0;
            if (_nve) {
                _nvh.forEach(function(_nvj, _nvk) {
                    _nvk >= 4 && (_nvi += _nvj);
                });
                for (var _nvl = 0, _nvm = _nv7.have_slot_ids(); _nvl < _nvm.length; _nvl++) {
                    var _nvn = _nvm[_nvl],
                        _nvo = _nv6.default.model.slot.getMst(_nvn),
                        _nvp = _nvo.equipType;
                    12 != _nvp && 13 != _nvp || (_nvo.sakuteki >= 5 && (_nvg += _nv7.get_slotnums(parseInt(_nvn))), _nvo.taiku >= 2 && _nv7.get_slotnums(parseInt(_nvn)));
                }
            }
            return 1 == _nvc && _nvg > 0 && (_nv9.houg += 3, _nv9.kaih += 3), 1 == _nvd && (_nv9.houg += 4 * _nvi, _nv9.kaih += 1 * _nvi), _nv9;
        };
    },
    93526: function(_nvq, _nvr, _nvs) {
        'use strict';
        var _nvt = null;
        var _nvu = this && this.__importDefault || function(_nvv) {
            var _nvw = null;
            return _nvv && _nvv.__esModule ? _nvv : {
                'default': _nvv
            };
        };
        defineModule(_nvr);
        Object.defineProperty(_nvr, '__esModule', {
            'value': !0
        }), _nvr.getSlot398PersonalEffect = void 0;
        var _nvx = _nvs(74496),
            _nvy = _nvu(_nvs(18622));
        _nvr.getSlot398PersonalEffect = function(_nvz) {
            var _nw0 = null,
                _nw1 = new _nvx.SlotItemEffectModel(),
                _nw2 = !1,
                _nw3 = new _nvx.SlotItemEffectModel(),
                _nw4 = 0,
                _nw5 = 0,
                _nw6 = !1;
            if (651 == _nvz.ship_id ? (_nw3.houg += 4, _nw3.tyku += 4, _nw3.kaih += 2, _nw2 = !0, _nw6 = !0, _nw4 = 1, _nw5 = 1) : 656 == _nvz.ship_id && (_nw3.houg += 3, _nw3.tyku += 2, _nw3.kaih += 2, _nw2 = !0, _nw6 = !0, _nw4 = 1, _nw5 = 2), 0 == _nw2) return _nw1;
            var _nw7 = _nvz.get_slotnums(398);
            _nw1.add(_nw3.multiply(_nw7));
            var _nw8 = 0,
                _nw9 = 0,
                _nwa = _nvz.get_each_level_nums(398),
                _nwb = 0;
            if (_nw6) {
                _nwa.forEach(function(_nwc, _nwd) {
                    _nwd >= 4 && (_nwb += _nwc);
                });
                for (var _nwe = 0, _nwf = _nvz.have_slot_ids(); _nwe < _nwf.length; _nwe++) {
                    var _nwg = _nwf[_nwe],
                        _nwh = _nvy.default.model.slot.getMst(_nwg),
                        _nwi = _nwh.equipType;
                    12 != _nwi && 13 != _nwi || (_nwh.sakuteki >= 5 && (_nw8 += _nvz.get_slotnums(parseInt(_nwg))), _nwh.taiku >= 2 && (_nw9 += _nvz.get_slotnums(parseInt(_nwg))));
                }
            }
            return 1 == _nw4 && (_nw8 > 0 && (_nw1.houg += 3, _nw1.kaih += 3), _nw9 > 0 && (_nw1.tyku += 3, _nw1.kaih += 3)), 1 == _nw5 ? (_nw1.houg += 3 * _nwb, _nw1.kaih += 2 * _nwb) : 2 == _nw5 && (_nw1.houg += 2 * _nwb, _nw1.kaih += 1 * _nwb), _nw1;
        };
    },
    33084: (_nwj, _nwk, _nwl) => {
        'use strict';
        var _nwm = null;
        defineModule(_nwk);
        Object.defineProperty(_nwk, '__esModule', {
            'value': !0
        }), _nwk.getSlot399PersonalEffect = void 0;
        var _nwn = _nwl(74496);
        _nwk.getSlot399PersonalEffect = function(_nwo) {
            var _nwp = null,
                _nwq = new _nwn.SlotItemEffectModel(),
                _nwr = !1,
                _nws = new _nwn.SlotItemEffectModel(),
                _nwt = 0;
            if (108 == _nwo.ctype && (_nws.houg += 1, _nws.kaih += 2, _nwt = 1, _nwr = !0), 0 == _nwr) return _nwq;
            var _nwu = _nwo.get_slotnums(399);
            if (_nwq.add(_nws.multiply(_nwu)), 0 == _nwt) return _nwq;
            var _nwv = _nwo.get_each_level_nums(399),
                _nww = 0,
                _nwx = 0;
            return _nwv.map(function(_nwy, _nwz) {
                _nwz >= 3 && (_nww += _nwy), _nwz >= 5 && (_nwx += _nwy);
            }), 1 == _nwt && (_nwq.houg += 1 * _nww, _nwq.houg += 1 * _nwx), _nwq;
        };
    },
    80225: (_nx0, _nx1, _nx2) => {
        'use strict';
        var _nx3 = null;
        defineModule(_nx1);
        Object.defineProperty(_nx1, '__esModule', {
            'value': !0
        }), _nx1.getSlot3_122PersonalEffect = void 0;
        var _nx4 = _nx2(74496);
        _nx1.getSlot3_122PersonalEffect = function(_nx5) {
            var _nx6 = null,
                _nx7 = new _nx4.SlotItemEffectModel(),
                _nx8 = !1,
                _nx9 = new _nx4.SlotItemEffectModel();
            if (54 == _nx5.ctype && (_nx9.houg += 1, _nx9.tyku += 2, _nx9.kaih += 1, _nx8 = !0), 0 == _nx8) return _nx7;
            var _nxa = _nx5.get_slotnums(3) + _nx5.get_slotnums(122);
            return _nx7.add(_nx9.multiply(_nxa)), _nx7;
        };
    },
    97831: (_nxb, _nxc, _nxd) => {
        'use strict';
        var _nxe = null;
        defineModule(_nxc);
        Object.defineProperty(_nxc, '__esModule', {
            'value': !0
        }), _nxc.getSlot400PersonalEffect = void 0;
        var _nxf = _nxd(74496);
        _nxc.getSlot400PersonalEffect = function(_nxg) {
            var _nxh = null,
                _nxi = new _nxf.SlotItemEffectModel(),
                _nxj = !1,
                _nxk = new _nxf.SlotItemEffectModel(),
                _nxl = 0,
                _nxm = !1;
            if (147 != _nxg.ship_id && 73 != _nxg.ctype && 81 != _nxg.ctype || (_nxm = !0), _nxm && (_nxk.kaih += 2, _nxk.raig += 5, _nxk.houg += 1, _nxk.souk += 1, _nxj = !0, _nxl = 1), 0 == _nxj) return _nxi;
            var _nxn = _nxg.get_slotnums(400);
            return _nxi.add(_nxk.multiply(_nxn)), _nxg.get_slotnums(282) > 0 && 1 == _nxl && (_nxi.houg += 2), _nxi;
        };
    },
    4050: function(_nxo, _nxp, _nxq) {
        'use strict';
        var _nxr = null;
        var _nxs = this && this.__importDefault || function(_nxt) {
            var _nxu = null;
            return _nxt && _nxt.__esModule ? _nxt : {
                'default': _nxt
            };
        };
        defineModule(_nxp);
        Object.defineProperty(_nxp, '__esModule', {
            'value': !0
        }), _nxp.getSlot407PersonalEffect = void 0;
        var _nxv = _nxq(74496),
            _nxw = _nxs(_nxq(18622));
        _nxp.getSlot407PersonalEffect = function(_nxx) {
            var _nxy = null,
                _nxz = new _nxv.SlotItemEffectModel(),
                _ny0 = !1,
                _ny1 = new _nxv.SlotItemEffectModel(),
                _ny2 = 0;
            if (662 != _nxx.ship_id && 663 != _nxx.ship_id && 668 != _nxx.ship_id || (_ny1.houg += 4, _ny1.tyku += 2, _ny1.kaih += 1, _ny0 = !0, _ny2 = 1), 0 == _ny0) return _nxz;
            var _ny3 = _nxx.get_slotnums(407);
            _nxz.add(_ny1.multiply(_ny3));
            for (var _ny4 = 0, _ny5 = 0, _ny6 = 0, _ny7 = _nxx.have_slot_ids(); _ny6 < _ny7.length; _ny6++) {
                var _ny8 = _ny7[_ny6],
                    _ny9 = _nxw.default.model.slot.getMst(_ny8),
                    _nya = _ny9.equipType;
                12 != _nya && 13 != _nya || (_ny9.sakuteki >= 5 && (_ny4 += _nxx.get_slotnums(parseInt(_ny8))), _ny9.taiku >= 2 && (_ny5 += _nxx.get_slotnums(parseInt(_ny8))));
            }
            return _ny4 >= 1 && 1 == _ny2 && (_nxz.houg += 2, _nxz.kaih += 2, _nxz.raig += 2), _ny5 >= 1 && 1 == _ny2 && (_nxz.tyku += 2, _nxz.kaih += 3), _nxz;
        };
    },
    78466: (_nyb, _nyc, _nyd) => {
        'use strict';
        var _nye = null;
        defineModule(_nyc);
        Object.defineProperty(_nyc, '__esModule', {
            'value': !0
        }), _nyc.getSlot408PersonalEffect = void 0;
        var _nyf = _nyd(74496);
        _nyc.getSlot408PersonalEffect = function(_nyg) {
            var _nyh = null,
                _nyi = new _nyf.SlotItemEffectModel(),
                _nyj = !1,
                _nyk = new _nyf.SlotItemEffectModel();
            if ('しんしゅうまる' == _nyg.yomi ? (_nyk.houg += 2, _nyk.saku += 2, _nyk.kaih += 2, _nyj = !0) : 'あきつまる' == _nyg.yomi && (_nyk.houg += 1, _nyk.saku += 1, _nyk.kaih += 1, _nyk.tais += 1, _nyj = !0), 2 == _nyg.stype && (_nyk.houg += 1, _nyk.saku += 1, _nyk.kaih -= 5, _nyj = !0), 0 == _nyj) return _nyi;
            var _nyl = _nyg.get_slotnums(408);
            return _nyi.add(_nyk.multiply(_nyl)), _nyi;
        };
    },
    40061: (_nym, _nyn, _nyo) => {
        'use strict';
        var _nyp = null;
        defineModule(_nyn);
        Object.defineProperty(_nyn, '__esModule', {
            'value': !0
        }), _nyn.getSlot409PersonalEffect = void 0;
        var _nyq = _nyo(74496);
        _nyn.getSlot409PersonalEffect = function(_nyr) {
            var _nys = null,
                _nyt = new _nyq.SlotItemEffectModel(),
                _nyu = !1,
                _nyv = new _nyq.SlotItemEffectModel();
            if ('しんしゅうまる' == _nyr.yomi ? (_nyv.houg += 1, _nyv.tyku += 2, _nyv.kaih += 3, _nyu = !0) : 'あきつまる' == _nyr.yomi && (_nyv.houg += 1, _nyv.tyku += 1, _nyv.kaih += 2, _nyv.tais += 1, _nyu = !0), 0 == _nyu) return _nyt;
            var _nyw = _nyr.get_slotnums(409);
            return _nyt.add(_nyv.multiply(_nyw)), _nyt;
        };
    },
    79988: (_nyx, _nyy, _nyz) => {
        'use strict';
        var _nz0 = null;
        defineModule(_nyy);
        Object.defineProperty(_nyy, '__esModule', {
            'value': !0
        }), _nyy.getSlot411PersonalEffect = void 0;
        var _nz1 = _nyz(74496);
        _nyy.getSlot411PersonalEffect = function(_nz2) {
            var _nz3 = null,
                _nz4 = new _nz1.SlotItemEffectModel(),
                _nz5 = new _nz1.SlotItemEffectModel(),
                _nz6 = !1,
                _nz7 = 0;
            if (2 == _nz2.stype && (_nz5.kaih -= 9, _nz6 = !0), 3 != _nz2.stype && 4 != _nz2.stype || (_nz5.kaih -= 7, _nz6 = !0), 21 == _nz2.stype && (_nz5.kaih -= 6, _nz6 = !0), 5 != _nz2.stype && 6 != _nz2.stype || (_nz5.kaih -= 5, _nz6 = !0), 593 == _nz2.ship_id && (_nz4.houg += 1, _nz4.tyku += 2, _nz4.kaih += 3), 151 == _nz2.ship_id || 411 == _nz2.ship_id || 412 == _nz2.ship_id || 593 == _nz2.ship_id || 954 == _nz2.ship_id ? (_nz4.houg += 3, _nz4.tyku += 4, _nz7 = 1) : 541 != _nz2.ship_id && 573 != _nz2.ship_id && 553 != _nz2.ship_id && 554 != _nz2.ship_id || (_nz4.houg += 2, _nz4.tyku += 2, _nz7 = 1), _nz6) {
                var _nz8 = _nz2.get_slotnums(411);
                _nz4.add(_nz5.multiply(_nz8));
            }
            if (0 == _nz7) return _nz4;
            var _nz9 = _nz2.get_each_level_nums(411),
                _nza = 0;
            return _nz7 > 0 && _nz9.forEach(function(_nzb, _nzc) {
                _nzc >= 4 && (_nza += _nzb);
            }), 1 == _nz7 && (_nza >= 1 && (_nz4.houg += 1, _nz4.tyku += 1), _nz9[10] >= 1 && (_nz4.houg += 1, _nz4.tyku += 1)), _nz4;
        };
    },
    74428: (_nzd, _nze, _nzf) => {
        'use strict';
        var _nzg = null;
        defineModule(_nze);
        Object.defineProperty(_nze, '__esModule', {
            'value': !0
        }), _nze.getSlot412PersonalEffect = void 0;
        var _nzh = _nzf(74496);
        _nze.getSlot412PersonalEffect = function(_nzi) {
            var _nzj = null,
                _nzk = new _nzh.SlotItemEffectModel(),
                _nzl = !1,
                _nzm = 0,
                _nzn = new _nzh.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_nzi.ctype) >= 0 ? (_nzk.houg += 2, _nzk.raig += 4, _nzk.tais += 2, _nzn.kaih += 3, _nzn.saku += 1, _nzl = !0, _nzm = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_nzi.ctype) >= 0 ? (_nzk.houg += 3, _nzk.raig += 3, _nzn.kaih += 2, _nzn.saku += 3, _nzl = !0, _nzm = 1) : [7, 13, 29, 8, 9, 31].indexOf(_nzi.ctype) >= 0 && (_nzk.houg += 1, _nzn.kaih += 1, _nzn.saku += 1, _nzl = !0), 0 == _nzl) return _nzk;
            var _nzo = _nzi.get_slotnums(412);
            if (_nzk.add(_nzn.multiply(_nzo)), 0 == _nzm) return _nzk;
            var _nzp = _nzi.get_each_level_nums(412),
                _nzq = 0,
                _nzr = 0;
            return _nzm > 0 && _nzp.forEach(function(_nzs, _nzt) {
                _nzt >= 4 && (_nzq += _nzs), _nzt >= 8 && (_nzr += _nzs);
            }), 1 == _nzm && (_nzq > 0 && (_nzk.houg += 1), _nzr > 0 && (_nzk.raig += 1)), _nzk;
        };
    },
    2631: (_nzu, _nzv, _nzw) => {
        'use strict';
        var _nzx = null;
        defineModule(_nzv);
        Object.defineProperty(_nzv, '__esModule', {
            'value': !0
        }), _nzv.getSlot413PersonalEffect = void 0;
        var _nzy = _nzw(74496);
        _nzv.getSlot413PersonalEffect = function(_nzz) {
            var _o00 = null,
                _o01 = new _nzy.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_nzz.ctype) >= 0 ? (_o01.houg += 2, _o01.raig += 2, _o01.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_nzz.ctype) >= 0 && (_o01.houg += 4, _o01.raig += 2, _o01.kaih += 2), 38 == _nzz.ctype || 54 == _nzz.ctype ? (_o01.houg += 2, _o01.raig += 3, _o01.kaih += 3) : 4 == _nzz.ctype || 20 == _nzz.ctype || 16 == _nzz.ctype || 41 == _nzz.ctype || 52 == _nzz.ctype ? (_o01.houg += 1, _o01.raig += 2, _o01.kaih += 2) : 21 != _nzz.ctype && 34 != _nzz.ctype || (_o01.tyku += 2, _o01.raig += 1, _o01.kaih += 1), 'なか' == _nzz.yomi || 'ゆら' == _nzz.yomi || 'やはぎ' == _nzz.yomi || 'のしろ' == _nzz.yomi || 'はまなみ' == _nzz.yomi || 'しまかぜ' == _nzz.yomi || 'きよしも' == _nzz.yomi || 'はつしも' == _nzz.yomi ? (_o01.tyku += 1, _o01.kaih += 1) : 'じんつう' != _nzz.yomi && 'せんだい' != _nzz.yomi && 'ながなみ' != _nzz.yomi && 'はつしも' != _nzz.yomi && 'てるづき' != _nzz.yomi || (_o01.houg += 1, _o01.raig += 1), 543 == _nzz.ship_id ? (_o01.houg += 1, _o01.kaih += 1) : 159 == _nzz.ship_id && (_o01.houg += 2), _o01;
        };
    },
    16498: (_o02, _o03, _o04) => {
        'use strict';
        var _o05 = null;
        defineModule(_o03);
        Object.defineProperty(_o03, '__esModule', {
            'value': !0
        }), _o03.getSlot414PersonalEffect = void 0;
        var _o06 = _o04(74496);
        _o03.getSlot414PersonalEffect = function(_o07) {
            var _o08 = null,
                _o09 = new _o06.SlotItemEffectModel(),
                _o0a = 0;
            if ('アメリカ' == _o07.getCountryName() && (_o09.saku += 1, _o0a = 1), 95 != _o07.ctype && 99 != _o07.ctype && 106 != _o07.ctype && 110 != _o07.ctype && 121 != _o07.ctype || (_o09.houg += 1, _o09.saku += 1, _o0a = 2), 0 == _o0a) return _o09;
            var _o0b = _o07.get_each_level_nums(414),
                _o0c = 0,
                _o0d = 0,
                _o0e = 0;
            return _o0a > 0 && _o0b.forEach(function(_o0f, _o0g) {
                _o0g >= 5 && (_o0c += _o0f), _o0g >= 3 && (_o0d += _o0f), _o0g >= 8 && (_o0e += _o0f);
            }), _o0a > 0 && _o0c >= 1 && (_o09.kaih += 1), 2 == _o0a && (_o0d >= 1 && (_o09.saku += 1), _o0e >= 1 && (_o09.kaih += 1), _o0b[10] >= 1 && (_o09.houg += 1)), _o09;
        };
    },
    27177: (_o0h, _o0i, _o0j) => {
        'use strict';
        var _o0k = null;
        defineModule(_o0i);
        Object.defineProperty(_o0i, '__esModule', {
            'value': !0
        }), _o0i.getSlot415PersonalEffect = void 0;
        var _o0l = _o0j(74496);
        _o0i.getSlot415PersonalEffect = function(_o0m) {
            var _o0n = null,
                _o0o = new _o0l.SlotItemEffectModel(),
                _o0p = [];
            if ('アメリカ' == _o0m.getCountryName() && (_o0o.saku += 1, _o0o.tais += 1, _o0p.push(1)), 95 != _o0m.ctype && 99 != _o0m.ctype && 106 != _o0m.ctype && 110 != _o0m.ctype && 121 != _o0m.ctype || (_o0o.houg += 1, _o0p.push(2)), 0 == _o0p.length) return _o0o;
            var _o0q = _o0m.get_each_level_nums(415),
                _o0r = 0,
                _o0s = 0,
                _o0t = 0;
            return _o0p.length > 0 && (_o0q.forEach(function(_o0u, _o0v) {
                _o0v >= 5 && (_o0r += _o0u), _o0v >= 3 && (_o0s += _o0u), _o0v >= 8 && (_o0t += _o0u);
            }), _o0p.forEach(function(_o0w) {
                var _o0x = null;
                1 == _o0w ? _o0r >= 1 && (_o0o.kaih += 1) : 2 == _o0w && (_o0s >= 1 && (_o0o.kaih += 1), _o0t >= 1 && (_o0o.houg += 1));
            })), _o0o;
        };
    },
    53908: (_o0y, _o0z, _o10) => {
        'use strict';
        var _o11 = null;
        defineModule(_o0z);
        Object.defineProperty(_o0z, '__esModule', {
            'value': !0
        }), _o0z.getSlot419PersonalEffect = void 0;
        var _o12 = _o10(74496);
        _o0z.getSlot419PersonalEffect = function(_o13) {
            var _o14 = null,
                _o15 = new _o12.SlotItemEffectModel(),
                _o16 = !1,
                _o17 = new _o12.SlotItemEffectModel(),
                _o18 = 0;
            if ('アメリカ' == _o13.getCountryName() && (_o17.houg += 2, _o16 = !0, _o18 = 1), 0 == _o16) return _o15;
            var _o19 = _o13.get_slotnums(419);
            if (_o15.add(_o17.multiply(_o19)), 0 == _o18) return _o15;
            var _o1a = _o13.get_each_level_nums(419),
                _o1b = 0,
                _o1c = 0;
            return _o18 > 0 && _o1a.forEach(function(_o1d, _o1e) {
                _o1e >= 2 && (_o1b += _o1d), _o1e >= 7 && (_o1c += _o1d);
            }), 1 == _o18 && (_o1b >= 1 && (_o15.houg += 1 * _o1b), _o1c >= 1 && (_o15.houg += 1 * _o1c)), _o15;
        };
    },
    79813: (_o1f, _o1g, _o1h) => {
        'use strict';
        var _o1i = null;
        defineModule(_o1g);
        Object.defineProperty(_o1g, '__esModule', {
            'value': !0
        }), _o1g.getSlot420PersonalEffect = void 0;
        var _o1j = _o1h(74496);
        _o1g.getSlot420PersonalEffect = function(_o1k) {
            var _o1l = null,
                _o1m = new _o1j.SlotItemEffectModel(),
                _o1n = !1,
                _o1o = new _o1j.SlotItemEffectModel(),
                _o1p = 0;
            if ('アメリカ' != _o1k.getCountryName() && 67 != _o1k.ctype && 78 != _o1k.ctype && 82 != _o1k.ctype && 88 != _o1k.ctype && 108 != _o1k.ctype && 112 != _o1k.ctype || (_o1o.houg += 1, _o1p = 1, _o1n = !0), 84 == _o1k.ctype ? (_o1o.houg += 1, _o1n = !0) : 78 == _o1k.ctype && (_o1o.houg -= 1, _o1n = !0), 7 == _o1k.stype && (_o1o.houg -= 2, _o1o.kaih -= 1, _o1o.souk -= 2, _o1n = !0), 0 == _o1n) return _o1m;
            var _o1q = _o1k.get_slotnums(420);
            if (_o1m.add(_o1o.multiply(_o1q)), 0 == _o1p) return _o1m;
            var _o1r = _o1k.get_each_level_nums(420),
                _o1s = 0;
            return _o1p > 0 && _o1r.forEach(function(_o1t, _o1u) {
                _o1u >= 3 && (_o1s += _o1t);
            }), 1 == _o1p && _o1s >= 1 && (_o1m.houg += 1 * _o1s), _o1m;
        };
    },
    16088: (_o1v, _o1w, _o1x) => {
        'use strict';
        var _o1y = null;
        defineModule(_o1w);
        Object.defineProperty(_o1w, '__esModule', {
            'value': !0
        }), _o1w.getSlot421PersonalEffect = void 0;
        var _o1z = _o1x(74496);
        _o1w.getSlot421PersonalEffect = function(_o20) {
            var _o21 = null,
                _o22 = new _o1z.SlotItemEffectModel(),
                _o23 = !1,
                _o24 = new _o1z.SlotItemEffectModel(),
                _o25 = 0;
            if ('アメリカ' != _o20.getCountryName() && 67 != _o20.ctype && 78 != _o20.ctype && 82 != _o20.ctype && 88 != _o20.ctype && 108 != _o20.ctype && 112 != _o20.ctype || (_o24.houg += 2, _o23 = !0, _o25 = 1), 84 == _o20.ctype ? (_o24.houg += 1, _o23 = !0) : 78 == _o20.ctype && (_o24.houg -= 1, _o23 = !0), 7 == _o20.stype && (_o24.houg -= 2, _o24.kaih -= 1, _o24.souk -= 2, _o23 = !0), 0 == _o23) return _o22;
            var _o26 = _o20.get_slotnums(421);
            if (_o22.add(_o24.multiply(_o26)), 0 == _o25) return _o22;
            var _o27 = _o20.get_each_level_nums(421),
                _o28 = 0;
            return _o25 > 0 && _o27.forEach(function(_o29, _o2a) {
                _o2a >= 5 && (_o28 += _o29);
            }), 1 == _o25 && _o28 >= 1 && (_o22.houg += 1 * _o28), _o22;
        };
    },
    69939: (_o2b, _o2c, _o2d) => {
        'use strict';
        var _o2e = null;
        defineModule(_o2c);
        Object.defineProperty(_o2c, '__esModule', {
            'value': !0
        }), _o2c.getSlot422PersonalEffect = void 0;
        var _o2f = _o2d(74496);
        _o2c.getSlot422PersonalEffect = function(_o2g) {
            var _o2h = null,
                _o2i = new _o2f.SlotItemEffectModel(),
                _o2j = !1,
                _o2k = new _o2f.SlotItemEffectModel();
            if ('アメリカ' != _o2g.getCountryName() && 67 != _o2g.ctype && 78 != _o2g.ctype && 82 != _o2g.ctype && 88 != _o2g.ctype && 108 != _o2g.ctype && 112 != _o2g.ctype || (_o2k.houg += 1, _o2k.kaih += 1, _o2j = !0), 84 == _o2g.ctype && (_o2k.houg += 1, _o2k.tyku += 1, _o2j = !0), 707 == _o2g.ship_id && (_o2k.houg += 2, _o2k.kaih += 2, _o2k.tyku += 2, _o2j = !0), 0 == _o2j) return _o2i;
            var _o2l = _o2g.get_slotnums(422);
            return _o2i.add(_o2k.multiply(_o2l)), _o2i;
        };
    },
    33734: (_o2m, _o2n, _o2o) => {
        'use strict';
        var _o2p = null;
        defineModule(_o2n);
        Object.defineProperty(_o2n, '__esModule', {
            'value': !0
        }), _o2n.getSlot423PersonalEffect = void 0;
        var _o2q = _o2o(74496);
        _o2n.getSlot423PersonalEffect = function(_o2r) {
            var _o2s = null,
                _o2t = new _o2q.SlotItemEffectModel(),
                _o2u = !1,
                _o2v = new _o2q.SlotItemEffectModel();
            78 != _o2r.ctype && 112 != _o2r.ctype || (_o2v.houg += 2, _o2v.tyku += 2, _o2v.kaih += 2, _o2v.saku += 2, _o2u = !0);
            var _o2w = _o2r.getCountryName();
            if (67 == _o2r.ctype || 78 == _o2r.ctype || 82 == _o2r.ctype || 88 == _o2r.ctype || 108 == _o2r.ctype || 112 == _o2r.ctype ? (_o2v.houg += 2, _o2v.tyku += 2, _o2v.kaih += 2, _o2v.saku += 2, _o2u = !0) : 'アメリカ' == _o2w && (_o2v.houg += 1, _o2v.tyku += 1, _o2v.kaih += 1, _o2v.saku += 1, _o2u = !0), 0 == _o2u) return _o2t;
            var _o2x = _o2r.get_slotnums(423);
            return _o2t.add(_o2v.multiply(_o2x)), _o2t;
        };
    },
    34432: (_o2y, _o2z, _o30) => {
        'use strict';
        var _o31 = null;
        defineModule(_o2z);
        Object.defineProperty(_o2z, '__esModule', {
            'value': !0
        }), _o2z.getSlot424PersonalEffect = void 0;
        var _o32 = _o30(74496);
        _o2z.getSlot424PersonalEffect = function(_o33) {
            var _o34 = null,
                _o35 = new _o32.SlotItemEffectModel(),
                _o36 = !1,
                _o37 = new _o32.SlotItemEffectModel(),
                _o38 = 0;
            67 != _o33.ctype && 78 != _o33.ctype && 82 != _o33.ctype && 88 != _o33.ctype && 108 != _o33.ctype && 112 != _o33.ctype || (_o37.houg += 2, _o37.raig += 3, _o36 = !0, _o38 = 1);
            var _o39 = _o33.get_slotnums(424);
            _o36 && _o35.add(_o37.multiply(_o39));
            var _o3a = _o33.get_each_level_nums(424),
                _o3b = 0,
                _o3c = 0,
                _o3d = 0;
            _o3a.forEach(function(_o3e, _o3f) {
                _o3f >= 2 && (_o3b += _o3e), _o3f >= 6 && (_o3c += _o3e), _o3f >= 8 && (_o3d += _o3e);
            });
            var _o3g = _o3a[10];
            return 1 == _o38 && (_o3b >= 1 && (_o35.houg += 1 * _o3b), _o3c >= 1 && (_o35.houg += 1 * _o3c), _o3d >= 1 && (_o35.houm += 1 * _o3d)), _o3g > 0 && (_o35.houm += 1 * _o3g), _o35;
        };
    },
    97423: (_o3h, _o3i, _o3j) => {
        'use strict';
        var _o3k = null;
        defineModule(_o3i);
        Object.defineProperty(_o3i, '__esModule', {
            'value': !0
        }), _o3i.getSlot425PersonalEffect = void 0;
        var _o3l = _o3j(74496);
        _o3i.getSlot425PersonalEffect = function(_o3m) {
            var _o3n = null,
                _o3o = new _o3l.SlotItemEffectModel(),
                _o3p = !1,
                _o3q = new _o3l.SlotItemEffectModel(),
                _o3r = 0;
            67 != _o3m.ctype && 78 != _o3m.ctype && 82 != _o3m.ctype && 88 != _o3m.ctype && 108 != _o3m.ctype && 112 != _o3m.ctype || (_o3q.houg += 2, _o3q.tais += 2, _o3q.raig += 1, _o3q.saku += 1, _o3p = !0, _o3r = 1);
            var _o3s = _o3m.get_slotnums(425);
            _o3p && _o3o.add(_o3q.multiply(_o3s));
            var _o3t = _o3m.get_each_level_nums(425),
                _o3u = 0,
                _o3v = 0,
                _o3w = 0,
                _o3x = 0,
                _o3y = 0,
                _o3z = 0;
            _o3t.forEach(function(_o40, _o41) {
                _o41 >= 2 && (_o3u += _o40), _o41 >= 4 && (_o3v += _o40), _o41 >= 6 && (_o3w += _o40), _o41 >= 7 && (_o3x += _o40), _o41 >= 8 && (_o3y += _o40), _o41 >= 9 && (_o3z += _o40);
            });
            var _o42 = _o3t[10];
            return 1 == _o3r && (_o3u >= 1 && (_o3o.tais += 1 * _o3u), _o3v >= 1 && (_o3o.houg += 1 * _o3v), _o3w >= 1 && (_o3o.tais += 1 * _o3w), _o3x >= 1 && (_o3o.houm += 1 * _o3x), _o3y >= 1 && (_o3o.raig += 1 * _o3y), _o3z >= 1 && (_o3o.houg += 1 * _o3z), _o42 >= 1 && (_o3o.tais += 1 * _o42)), _o3x >= 1 && (_o3o.houg += 1 * _o3x), _o3y >= 1 && (_o3o.tais += 1 * _o3y), _o3z >= 1 && (_o3o.houm += 1 * _o3z), _o42 >= 1 && (_o3o.houm += 1 * _o42), _o3o;
        };
    },
    23551: (_o43, _o44, _o45) => {
        'use strict';
        var _o46 = null;
        defineModule(_o44);
        Object.defineProperty(_o44, '__esModule', {
            'value': !0
        }), _o44.getSlot430PersonalEffect = void 0;
        var _o47 = _o45(74496);
        _o44.getSlot430PersonalEffect = function(_o48) {
            var _o49 = null,
                _o4a = new _o47.SlotItemEffectModel(),
                _o4b = !1,
                _o4c = new _o47.SlotItemEffectModel(),
                _o4d = 0;
            if (113 == _o48.ctype && (_o4c.tyku += 1, _o4c.kaih += 1, _o4b = !0), 58 != _o48.ctype && 61 != _o48.ctype && 64 != _o48.ctype && 68 != _o48.ctype && 80 != _o48.ctype && 92 != _o48.ctype && 113 != _o48.ctype && 124 != _o48.ctype || (_o4c.tyku += 2, _o4c.kaih += 1, _o4b = !0, _o4d = 1), 0 == _o4b) return _o4a;
            var _o4e = _o48.get_slotnums(430);
            if (_o4a.add(_o4c.multiply(_o4e)), 0 == _o4d) return _o4a;
            var _o4f = _o48.get_each_level_nums(430),
                _o4g = 0,
                _o4h = 0,
                _o4i = 0;
            if (_o4d > 0 && _o4f.forEach(function(_o4j, _o4k) {
                    _o4k >= 2 && (_o4g += _o4j), _o4k >= 4 && (_o4h += _o4j), _o4k >= 7 && (_o4i += _o4j);
                }), 1 == _o4d) {
                _o4g >= 1 && (_o4a.kaih += 1 * _o4g), _o4h >= 1 && (_o4a.tyku += 1 * _o4h), _o4i >= 1 && (_o4a.kaih += 1 * _o4i);
                var _o4l = _o4f[10];
                _o4l >= 1 && (_o4a.tyku += 1 * _o4l);
            }
            return _o4a;
        };
    },
    6173: (_o4m, _o4n, _o4o) => {
        'use strict';
        var _o4p = null;
        defineModule(_o4n);
        Object.defineProperty(_o4n, '__esModule', {
            'value': !0
        }), _o4n.getSlot437PersonalEffect = void 0;
        var _o4q = _o4o(74496);
        _o4n.getSlot437PersonalEffect = function(_o4r) {
            var _o4s = null,
                _o4t = new _o4q.SlotItemEffectModel(),
                _o4u = !1,
                _o4v = new _o4q.SlotItemEffectModel();
            if (285 == _o4r.ship_id ? (_o4v.houg += 3, _o4v.tyku += 3, _o4v.kaih += 4, _o4u = !0) : 894 == _o4r.ship_id || 899 == _o4r.ship_id ? (_o4v.houg += 4, _o4v.tyku += 4, _o4v.kaih += 4, _o4u = !0) : 196 == _o4r.ship_id || 197 == _o4r.ship_id ? (_o4v.houg += 2, _o4v.tyku += 2, _o4v.kaih += 3, _o4u = !0) : 508 == _o4r.ship_id || 509 == _o4r.ship_id || 646 == _o4r.ship_id ? (_o4v.houg += 2, _o4v.tyku += 2, _o4v.kaih += 2, _o4u = !0) : 888 != _o4r.ship_id && 883 != _o4r.ship_id && 553 != _o4r.ship_id && 554 != _o4r.ship_id || (_o4v.houg += 1, _o4v.tyku += 2, _o4v.kaih += 2, _o4u = !0), 0 == _o4u) return _o4t;
            var _o4w = _o4r.get_slotnums(437);
            return _o4t.add(_o4v.multiply(_o4w)), _o4t;
        };
    },
    53709: (_o4x, _o4y, _o4z) => {
        'use strict';
        var _o50 = null;
        defineModule(_o4y);
        Object.defineProperty(_o4y, '__esModule', {
            'value': !0
        }), _o4y.getSlot438PersonalEffect = void 0;
        var _o51 = _o4z(74496);
        _o4y.getSlot438PersonalEffect = function(_o52) {
            var _o53 = null,
                _o54 = new _o51.SlotItemEffectModel(),
                _o55 = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o52.ctype) > -1 && (_o54.tais += 1, _o54.kaih += 1), 160 == _o52.ship_id || 488 == _o52.ship_id || 141 == _o52.ship_id ? (_o54.tais += 1, _o54.kaih += 1) : 145 != _o52.ship_id && 588 != _o52.ship_id && 667 != _o52.ship_id && 578 != _o52.ship_id && 476 != _o52.ship_id && 363 != _o52.ship_id && 961 != _o52.ship_id || (_o55 = 1), 'うしお' == _o52.yomi || 'まいかぜ' == _o52.yomi || 'いそかぜ' == _o52.yomi || 'はまかぜ' == _o52.yomi || 'いかづち' == _o52.yomi || 'やまぐも' == _o52.yomi || 'うみかぜ' == _o52.yomi || 'かわかぜ' == _o52.yomi || 'すずかぜ' == _o52.yomi ? _o54.tais += 1 : 'しぐれ' != _o52.yomi && 'やまかぜ' != _o52.yomi && 'かみかぜ' != _o52.yomi && 'はるかぜ' != _o52.yomi && 'みくら' != _o52.yomi && 'いしがき' != _o52.yomi || (_o54.tais += 1, _o54.kaih += 1), 0 == _o55) return _o54;
            var _o56 = _o52.get_each_level_nums(438),
                _o57 = 0,
                _o58 = 0,
                _o59 = 0,
                _o5a = _o56[10];
            return _o55 > 0 && _o56.forEach(function(_o5b, _o5c) {
                _o5c >= 4 && (_o57 += _o5b), _o5c >= 6 && (_o58 += _o5b), _o5c >= 8 && (_o59 += _o5b);
            }), 1 == _o55 && (_o57 >= 1 && (_o54.tais += 1), _o58 >= 1 && (_o54.kaih += 1), _o59 >= 1 && (_o54.tais += 1), _o5a >= 1 && (_o54.kaih += 1)), _o54;
        };
    },
    99790: (_o5d, _o5e, _o5f) => {
        'use strict';
        var _o5g = null;
        defineModule(_o5e);
        Object.defineProperty(_o5e, '__esModule', {
            'value': !0
        }), _o5e.getSlot439PersonalEffect = void 0;
        var _o5h = _o5f(74496);
        _o5e.getSlot439PersonalEffect = function(_o5i) {
            var _o5j = null,
                _o5k = new _o5h.SlotItemEffectModel();
            1 != _o5i.stype && 2 != _o5i.stype && 3 != _o5i.stype && 21 != _o5i.stype || (_o5k.tais += 1, _o5k.kaih += 1), 101 != _o5i.ctype && 1 != _o5i.stype || (_o5k.tais += 1);
            var _o5l = _o5i.getCountryName();
            return 'アメリカ' != _o5l && 'イギリス' != _o5l || (_o5k.tais += 2), _o5k;
        };
    },
    18387: (_o5m, _o5n, _o5o) => {
        'use strict';
        var _o5p = null;
        defineModule(_o5n);
        Object.defineProperty(_o5n, '__esModule', {
            'value': !0
        }), _o5n.getSlot440_441PersonalEffect = void 0;
        var _o5q = _o5o(74496);
        _o5n.getSlot440_441PersonalEffect = function(_o5r) {
            var _o5s = null,
                _o5t = new _o5q.SlotItemEffectModel();
            return 114 == _o5r.ctype && (_o5t.raig += 2), _o5t;
        };
    },
    70941: (_o5u, _o5v, _o5w) => {
        'use strict';
        var _o5x = null;
        defineModule(_o5v);
        Object.defineProperty(_o5v, '__esModule', {
            'value': !0
        }), _o5v.getSlot442_443PersonalEffect = void 0;
        var _o5y = _o5w(74496);
        _o5v.getSlot442_443PersonalEffect = function(_o5z) {
            var _o60 = null,
                _o61 = new _o5y.SlotItemEffectModel();
            return 122 == _o5z.ctype ? (_o61.raig += 1, _o61.kaih += 2) : 114 == _o5z.ctype && (_o61.raig += 2), _o61;
        };
    },
    35025: (_o62, _o63, _o64) => {
        'use strict';
        var _o65 = null;
        defineModule(_o63);
        Object.defineProperty(_o63, '__esModule', {
            'value': !0
        }), _o63.getSlot447PersonalEffect = void 0;
        var _o66 = _o64(74496);
        _o63.getSlot447PersonalEffect = function(_o67) {
            var _o68 = null,
                _o69 = new _o66.SlotItemEffectModel(),
                _o6a = _o67.get_each_level_nums(447),
                _o6b = 0,
                _o6c = 0,
                _o6d = 0,
                _o6e = 0;
            _o6a.forEach(function(_o6f, _o6g) {
                _o6g >= 2 && (_o6b += _o6f), _o6g >= 4 && (_o6c += _o6f), _o6g >= 6 && (_o6d += _o6f), _o6g >= 8 && (_o6e += _o6f);
            }), _o6b >= 1 && (_o69.houg += 1 * _o6b), _o6c >= 1 && (_o69.tyku += 1 * _o6c), _o6d >= 1 && (_o69.tais += 1 * _o6d), _o6e >= 1 && (_o69.kaih += 1 * _o6e);
            var _o6h = _o6a[10];
            _o6h >= 1 && (_o69.tais += 1 * _o6h);
            var _o6i = !1,
                _o6j = new _o66.SlotItemEffectModel();
            if (76 == _o67.ctype && (_o6j.houg += 1, _o6j.tais += 1, _o6j.kaih += 2, _o6i = !0), 'うんよう' == _o67.yomi ? (_o6j.houg += 1, _o6j.tais += 1, _o6j.kaih += 1, _o6i = !0) : 'ほうしょう' != _o67.yomi && 'たいげい・りゅうほう' != _o67.yomi || (_o6j.houg += 1, _o6j.tais += 2, _o6j.kaih += 1, _o6i = !0), 0 == _o6i) return _o69;
            894 != _o67.ship_id && 899 != _o67.ship_id || (_o6j.houg += 1, _o6j.kaih += 1, _o6j.tais += 1, _o6j.tyku += 1, _o6i = !0);
            var _o6k = _o67.get_slotnums(447);
            return _o69.add(_o6j.multiply(_o6k)), _o69;
        };
    },
    96804: (_o6l, _o6m, _o6n) => {
        'use strict';
        var _o6o = null;
        defineModule(_o6m);
        Object.defineProperty(_o6m, '__esModule', {
            'value': !0
        }), _o6m.getSlot450PersonalEffect = void 0;
        var _o6p = _o6n(74496);
        _o6m.getSlot450PersonalEffect = function(_o6q) {
            var _o6r = null,
                _o6s = new _o6p.SlotItemEffectModel(),
                _o6t = !1,
                _o6u = new _o6p.SlotItemEffectModel();
            if (101 == _o6q.ctype && (_o6u.houg += 1, _o6u.tyku += 2, _o6u.souk += 1, _o6u.kaih += 3, _o6t = !0), 1 == _o6q.stype && (_o6u.tyku += 1, _o6u.souk += 1, _o6u.kaih += 2, _o6t = !0), 0 == _o6t) return _o6s;
            var _o6v = _o6q.get_slotnums(450);
            return _o6s.add(_o6u.multiply(_o6v)), _o6s;
        };
    },
    33896: (_o6w, _o6x, _o6y) => {
        'use strict';
        var _o6z = null;
        defineModule(_o6x);
        Object.defineProperty(_o6x, '__esModule', {
            'value': !0
        }), _o6x.getSlot451PersonalEffect = void 0;
        var _o70 = _o6y(74496);
        _o6x.getSlot451PersonalEffect = function(_o71) {
            var _o72 = null,
                _o73 = new _o70.SlotItemEffectModel(),
                _o74 = !1,
                _o75 = new _o70.SlotItemEffectModel(),
                _o76 = 0;
            if ('あきつまる' == _o71.yomi ? (_o75.houg += 1, _o75.tais += 2, _o74 = !0, 166 == _o71.ship_id && (_o76 = 2)) : 'やましおまる' == _o71.yomi && (_o75.houg += 1, _o75.tais += 3, _o74 = !0, _o76 = 1), 0 == _o74) return _o73;
            var _o77 = _o71.get_slotnums(451);
            if (_o73.add(_o75.multiply(_o77)), 0 == _o76) return _o73;
            var _o78 = _o71.get_each_level_nums(451),
                _o79 = [];
            return _o76 > 0 && _o78.forEach(function(_o7a, _o7b) {
                var _o7c = null;
                for (var _o7d = 1; _o7d <= _o71.SLOT_LEVEL_MAX; _o7d++) _o7b >= _o7d && (null == _o79[_o7d] && (_o79[_o7d] = 0), _o79[_o7d] += _o7a);
            }), 1 == _o76 ? (_o79[1] >= 1 && (_o73.houg += 2 * _o79[1]), _o79[2] >= 1 && (_o73.houm += 1 * _o79[2]), _o79[3] >= 1 && (_o73.tais += 1 * _o79[3]), _o79[4] >= 1 && (_o73.houg += 1 * _o79[4]), _o79[6] >= 1 && (_o73.houm += 1 * _o79[6]), _o79[8] >= 1 && (_o73.tais += 1 * _o79[8]), _o79[10] >= 1 && (_o73.houg += 1 * _o79[10])) : 2 == _o76 && (_o79[1] >= 1 && (_o73.houg += 1 * _o79[1]), _o79[3] >= 1 && (_o73.tais += 1 * _o79[3]), _o79[5] >= 1 && (_o73.houm += 1 * _o79[5]), _o79[7] >= 1 && (_o73.tais += 1 * _o79[7]), _o79[10] >= 1 && (_o73.houg += 1 * _o79[10])), _o73;
        };
    },
    11031: function(_o7e, _o7f, _o7g) {
        'use strict';
        var _o7h = null;
        var _o7i = this && this.__importDefault || function(_o7j) {
            var _o7k = null;
            return _o7j && _o7j.__esModule ? _o7j : {
                'default': _o7j
            };
        };
        defineModule(_o7f);
        Object.defineProperty(_o7f, '__esModule', {
            'value': !0
        }), _o7f.getSlot455PersonalEffect = void 0;
        var _o7l = _o7g(74496),
            _o7m = _o7i(_o7g(18622));
        _o7f.getSlot455PersonalEffect = function(_o7n) {
            var _o7o = null,
                _o7p = new _o7l.SlotItemEffectModel(),
                _o7q = !1,
                _o7r = new _o7l.SlotItemEffectModel(),
                _o7s = 0,
                _o7t = _o7n.get_slotnums(455);
            if (1 != _o7n.ctype && 5 != _o7n.ctype && 12 != _o7n.ctype || (_o7r.houg += 2, _o7r.tyku += 1, 12 == _o7n.ctype && (_o7r.houg += 1), 666 == _o7n.ship_id ? (_o7r.houg += 1, _o7r.tais += 1) : 959 == _o7n.ship_id && (_o7r.houg += 2, _o7t >= 2 && (_o7p.houg += 2), _o7t >= 3 && (_o7p.houg += 3)), _o7s = 1, _o7q = !0), 'うらなみ' == _o7n.yomi && (_o7r.houg += 1, 647 == _o7n.ship_id && (_o7r.houg += 1, _o7r.raig += 1, _o7r.tais += 1, _o7r.kaih += 1), _o7q = !0), 0 == _o7q) return _o7p;
            if (_o7p.add(_o7r.multiply(_o7t)), 0 == _o7s) return _o7p;
            for (var _o7u = 0, _o7v = 0, _o7w = 0, _o7x = _o7n.have_slot_ids(); _o7w < _o7x.length; _o7w++) {
                var _o7y = _o7x[_o7w],
                    _o7z = _o7m.default.model.slot.getMst(_o7y),
                    _o80 = _o7z.equipType;
                12 != _o80 && 13 != _o80 || (_o7z.sakuteki >= 5 && (_o7u += _o7n.get_slotnums(parseInt(_o7y))), _o7z.taiku >= 2 && (_o7v += _o7n.get_slotnums(parseInt(_o7y))));
            }
            if (1 == _o7s) {
                _o7u >= 1 && (_o7p.houg += 3, _o7p.kaih += 2, _o7p.raig += 1);
                var _o81 = _o7n.get_slotnums(13),
                    _o82 = _o7n.get_slotnums(125),
                    _o83 = _o7n.get_slotnums(285),
                    _o84 = _o81 + _o82 + _o83;
                1 == _o84 ? (_o7p.houg += 1, _o7p.raig += 3) : _o84 >= 2 && (_o7p.houg += 2, _o7p.raig += 5), _o83 >= 1 && (_o7p.raig += 1), _o7v >= 1 && (_o7p.tyku += 4);
            }
            return _o7p;
        };
    },
    71383: (_o85, _o86, _o87) => {
        'use strict';
        var _o88 = null;
        defineModule(_o86);
        Object.defineProperty(_o86, '__esModule', {
            'value': !0
        }), _o86.getSlot456PersonalEffect = void 0;
        var _o89 = _o87(74496);
        _o86.getSlot456PersonalEffect = function(_o8a) {
            var _o8b = null,
                _o8c = new _o89.SlotItemEffectModel(),
                _o8d = !1,
                _o8e = new _o89.SlotItemEffectModel(),
                _o8f = _o8a.getCountryName();
            if ('アメリカ' == _o8f && (_o8e.houg += 3, _o8e.kaih += 4, _o8e.saku += 4, _o8c.houm += 3, _o8d = !0), 'イギリス' != _o8f && 'オーストラリア' != _o8f || (_o8e.houg += 2, _o8e.kaih += 2, _o8e.saku += 2, _o8c.houm += 2, _o8d = !0), 87 != _o8a.ctype && 91 != _o8a.ctype || (_o8e.houg += 1, _o8c.leng += 1, _o8d = !0), 651 != _o8a.ship_id && 656 != _o8a.ship_id || (_o8c.houg += 2, _o8c.kaih += 2, _o8c.saku += 3, _o8c.leng += 1, _o8c.houm += 2), 0 == _o8d) return _o8c;
            var _o8g = _o8a.get_slotnums(456);
            return _o8c.add(_o8e.multiply(_o8g)), _o8c;
        };
    },
    55888: (_o8h, _o8i, _o8j) => {
        'use strict';
        var _o8k = null;
        defineModule(_o8i);
        Object.defineProperty(_o8i, '__esModule', {
            'value': !0
        }), _o8i.getSlot457PersonalEffect = void 0;
        var _o8l = _o8j(74496);
        _o8i.getSlot457PersonalEffect = function(_o8m) {
            var _o8n = null,
                _o8o = new _o8l.SlotItemEffectModel(),
                _o8p = 0;
            if (109 == _o8m.ctype ? (_o8o.raig += 3, _o8o.kaih += 3, _o8p = 1) : 71 == _o8m.ctype || 103 == _o8m.ctype ? (_o8o.raig += 2, _o8o.kaih += 2, _o8p = 2) : 44 == _o8m.ctype && (_o8o.raig += 1, _o8o.kaih += 4, _o8p = 3), 0 == _o8p) return _o8o;
            var _o8q = _o8m.get_each_level_nums(461),
                _o8r = [];
            return _o8p > 0 && _o8q.forEach(function(_o8s, _o8t) {
                var _o8u = null;
                for (var _o8v = 1; _o8v <= _o8m.SLOT_LEVEL_MAX; _o8v++) null == _o8r[_o8v] && (_o8r[_o8v] = 0), _o8t >= _o8v && (_o8r[_o8v] += _o8s);
            }), 1 == _o8p ? (_o8r[2] >= 1 && (_o8o.raig += 1 * _o8r[2]), _o8r[3] >= 1 && (_o8o.kaih += 1 * _o8r[3]), _o8r[4] >= 1 && (_o8o.raig += 1 * _o8r[4]), _o8r[5] >= 1 && (_o8o.houm += 1 * _o8r[5]), _o8r[6] >= 1 && (_o8o.raig += 1 * _o8r[6]), _o8r[8] >= 1 && (_o8o.raig += 1 * _o8r[8]), _o8r[10] >= 1 && (_o8o.houm += 1 * _o8r[10])) : 2 == _o8p ? (_o8r[3] >= 1 && (_o8o.kaih += 1 * _o8r[3]), _o8r[4] >= 1 && (_o8o.raig += 1 * _o8r[4]), _o8r[6] >= 1 && (_o8o.raig += 1 * _o8r[6]), _o8r[8] >= 1 && (_o8o.raig += 1 * _o8r[8]), _o8r[10] >= 1 && (_o8o.houm += 1 * _o8r[10])) : 3 == _o8p && (_o8r[4] >= 1 && (_o8o.raig += 1 * _o8r[4]), _o8r[6] >= 1 && (_o8o.raig += 1 * _o8r[6]), _o8r[8] >= 1 && (_o8o.raig += 1 * _o8r[8]), _o8r[10] >= 1 && (_o8o.houm += 1 * _o8r[10])), _o8o;
        };
    },
    2258: (_o8w, _o8x, _o8y) => {
        'use strict';
        var _o8z = null;
        defineModule(_o8x);
        Object.defineProperty(_o8x, '__esModule', {
            'value': !0
        }), _o8x.getSlot458PersonalEffect = void 0;
        var _o90 = _o8y(74496);
        _o8x.getSlot458PersonalEffect = function(_o91) {
            var _o92 = null,
                _o93 = new _o90.SlotItemEffectModel(),
                _o94 = 0,
                _o95 = !1;
            if (13 != _o91.stype && 14 != _o91.stype || (_o95 = !0), 109 == _o91.ctype ? (_o93.raig += 3, _o93.kaih += 6, _o94 = 1) : 71 == _o91.ctype || 103 == _o91.ctype ? (_o93.raig += 3, _o93.kaih += 4, _o94 = 2) : 44 == _o91.ctype && (_o93.raig += 3, _o93.kaih += 3, _o94 = 3), 0 == _o95 && 0 == _o94) return _o93;
            var _o96 = [];
            [458, 461].forEach(function(_o97) {
                var _o98 = null,
                    _o99 = _o91.get_each_level_nums(_o97);
                null == _o96[_o97] && (_o96[_o97] = []), _o99.forEach(function(_o9a, _o9b) {
                    var _o9c = null;
                    for (var _o9d = 1; _o9d <= _o91.SLOT_LEVEL_MAX; _o9d++) null == _o96[_o97][_o9d] && (_o96[_o97][_o9d] = 0), _o9b >= _o9d && (_o96[_o97][_o9d] += _o9a);
                });
            });
            var _o9e = _o96[458][2],
                _o9f = _o96[458][3],
                _o9g = _o96[458][4],
                _o9h = _o96[458][5],
                _o9i = _o96[458][6],
                _o9j = _o96[458][8],
                _o9k = _o96[458][10],
                _o9l = _o96[461][4];
            return _o94 >= 1 && _o94 <= 3 && (_o9g >= 1 && (_o93.houm += 1 * _o9g), _o9i >= 1 && (_o93.kaih += 1 * _o9i), _o9j >= 1 && (_o93.raig += 1 * _o9j)), _o95 && (_o9f >= 1 && (_o93.kaih += 1 * _o9f), _o9h >= 1 && (_o93.raig += 1 * _o9h), _o9k >= 1 && (_o93.houm += 1 * _o9k), _o9e >= 1 && _o9l >= 1 && (_o93.raig += 7, _o93.houm += 5)), _o93;
        };
    },
    43768: (_o9m, _o9n, _o9o) => {
        'use strict';
        var _o9p = null;
        defineModule(_o9n);
        Object.defineProperty(_o9n, '__esModule', {
            'value': !0
        }), _o9n.getSlot463PersonalEffect = void 0;
        var _o9q = _o9o(74496);
        _o9n.getSlot463PersonalEffect = function(_o9r) {
            var _o9s = null,
                _o9t = new _o9q.SlotItemEffectModel(),
                _o9u = !1,
                _o9v = new _o9q.SlotItemEffectModel(),
                _o9w = _o9r.get_slotnums(142),
                _o9x = _o9r.get_slotnums(460),
                _o9y = _o9w + _o9x;
            if (37 == _o9r.ctype && (_o9v.houg += 1, _o9v.tyku += 2, _o9v.kaih += 1, _o9v.houm += 1, _o9y >= 1 && (_o9t.tyku += 1, _o9t.kaih += 1, _o9t.houm += 1), _o9u = !0), 916 != _o9r.ship_id && 911 != _o9r.ship_id && 546 != _o9r.ship_id || (_o9v.houg += 1, _o9v.kaih += 1, _o9v.houm += 2, _o9x >= 1 && (_o9t.houg += 1, _o9t.kaih += 1, _o9t.houm += 2), _o9u = !0), 0 == _o9u) return _o9t;
            var _o9z = _o9r.get_slotnums(463);
            return _o9t.add(_o9v.multiply(_o9z)), _o9t;
        };
    },
    92174: (_oa0, _oa1, _oa2) => {
        'use strict';
        var _oa3 = null;
        defineModule(_oa1);
        Object.defineProperty(_oa1, '__esModule', {
            'value': !0
        }), _oa1.getSlot464PersonalEffect = void 0;
        var _oa4 = _oa2(74496);
        _oa1.getSlot464PersonalEffect = function(_oa5) {
            var _oa6 = null,
                _oa7 = new _oa4.SlotItemEffectModel(),
                _oa8 = !1,
                _oa9 = new _oa4.SlotItemEffectModel(),
                _oaa = _oa5.get_slotnums(142),
                _oab = _oa5.get_slotnums(460),
                _oac = _oaa + _oab;
            if (37 == _oa5.ctype ? (_oa9.tyku += 3, _oa9.kaih += 2, _oac >= 1 && (_oa7.tyku += 2, _oa7.kaih += 1, _oa7.houm += 1), _oa8 = !0) : 6 != _oa5.ctype && 73 != _oa5.ctype && 113 != _oa5.ctype || (_oa9.tyku = _oa9.tyku - 2, _oa9.kaih = _oa9.kaih - 2, _oa8 = !0), 916 != _oa5.ship_id && 911 != _oa5.ship_id && 546 != _oa5.ship_id && 593 != _oa5.ship_id && 954 != _oa5.ship_id || (_oa9.tyku += 2, _oa9.kaih += 2, _oab >= 1 && (_oa7.houg += 2, _oa7.tyku += 2, _oa7.kaih += 2, _oa7.houm += 3), _oa8 = !0), 0 == _oa8) return _oa7;
            var _oad = _oa5.get_slotnums(464);
            return _oa7.add(_oa9.multiply(_oad)), _oa7;
        };
    },
    38003: (_oae, _oaf, _oag) => {
        'use strict';
        var _oah = null;
        defineModule(_oaf);
        Object.defineProperty(_oaf, '__esModule', {
            'value': !0
        }), _oaf.getSlot465PersonalEffect = void 0;
        var _oai = _oag(74496);
        _oaf.getSlot465PersonalEffect = function(_oaj) {
            var _oak = null,
                _oal = new _oai.SlotItemEffectModel(),
                _oam = !1,
                _oan = new _oai.SlotItemEffectModel(),
                _oao = _oaj.get_slotnums(142),
                _oap = _oaj.get_slotnums(460),
                _oaq = _oao + _oap;
            if (916 == _oaj.ship_id ? (_oan.houg += 2, _oan.kaih += 8, _oan.houm += 2, _oap >= 1 && (_oal.kaih += 2, _oal.houm += 1), _oam = !0) : 911 != _oaj.ship_id && 546 != _oaj.ship_id || (_oan.houg += 1, _oan.kaih += 2, _oan.houm += 1, _oap >= 1 && (_oal.kaih += 1, _oal.houm += 1), _oam = !0), 37 == _oaj.ctype && _oaq >= 1 && (_oal.houg += 2, _oal.houm += 2), 0 == _oam) return _oal;
            var _oar = _oaj.get_slotnums(465);
            return _oal.add(_oan.multiply(_oar)), _oal;
        };
    },
    65455: (_oas, _oat, _oau) => {
        'use strict';
        var _oav = null;
        defineModule(_oat);
        Object.defineProperty(_oat, '__esModule', {
            'value': !0
        }), _oat.getSlot466PersonalEffect = void 0;
        var _oaw = _oau(74496);
        _oat.getSlot466PersonalEffect = function(_oax) {
            var _oay = null,
                _oaz = new _oaw.SlotItemEffectModel(),
                _ob0 = !1,
                _ob1 = new _oaw.SlotItemEffectModel();
            if (277 == _oax.ship_id || 278 == _oax.ship_id || 156 == _oax.ship_id || 288 == _oax.ship_id || 112 == _oax.ship_id || 280 == _oax.ship_id || 279 == _oax.ship_id ? (_ob1.houg += 1, _ob1.houm += 1, _ob0 = !0) : 461 == _oax.ship_id || 462 == _oax.ship_id || 466 == _oax.ship_id || 467 == _oax.ship_id ? (_ob1.houg += 2, _ob1.kaih += 2, _ob1.houm += 1, _ob0 = !0) : 594 != _oax.ship_id && 698 != _oax.ship_id && 646 != _oax.ship_id && 599 != _oax.ship_id && 610 != _oax.ship_id && 196 != _oax.ship_id && 197 != _oax.ship_id || (_ob1.houg += 1, _ob1.kaih += 1, _ob1.houm += 2, _ob0 = !0), 0 == _ob0) return _oaz;
            var _ob2 = _oax.get_slotnums(466);
            return _oaz.add(_ob1.multiply(_ob2)), _oaz;
        };
    },
    70362: (_ob3, _ob4, _ob5) => {
        'use strict';
        var _ob6 = null;
        defineModule(_ob4);
        Object.defineProperty(_ob4, '__esModule', {
            'value': !0
        }), _ob4.getSlot467PersonalEffect = void 0;
        var _ob7 = _ob5(74496);
        _ob4.getSlot467PersonalEffect = function(_ob8) {
            var _ob9 = null,
                _oba = new _ob7.SlotItemEffectModel(),
                _obb = !1,
                _obc = new _ob7.SlotItemEffectModel();
            if ('アメリカ' == _ob8.getCountryName()) {
                for (var _obd = _ob8.getUSSWaterRaderDict(), _obe = _ob8.getUSSAirRaderDict(), _obf = 0, _obg = 0, _obh = 0, _obi = _ob8.have_slot_ids(); _obh < _obi.length; _obh++) {
                    var _obj = _obi[_obh];
                    _obd[parseInt(_obj)] && (_obf += _ob8.get_slotnums(parseInt(_obj))), _obe[parseInt(_obj)] && (_obg += _ob8.get_slotnums(parseInt(_obj)));
                }
                _obc.houg += 1, _obc.tyku += 1, _obc.kaih += 2, _obf >= 1 && (_oba.houg += 1, _oba.tyku += 1, _oba.kaih += 1, _oba.houm += 2), _obg >= 1 && (_oba.tyku += 2, _oba.kaih += 2), 65 != _ob8.ctype && 93 != _ob8.ctype && 102 != _ob8.ctype && 107 != _ob8.ctype && 125 != _ob8.ctype || (_obc.tyku += 2, _obc.kaih += 1), _obb = !0;
            }
            if (0 == _obb) return _oba;
            var _obk = _ob8.get_slotnums(467);
            return _oba.add(_obc.multiply(_obk)), _oba;
        };
    },
    68086: function(_obl, _obm, _obn) {
        'use strict';
        var _obo = null;
        var _obp = this && this.__importDefault || function(_obq) {
            var _obr = null;
            return _obq && _obq.__esModule ? _obq : {
                'default': _obq
            };
        };
        defineModule(_obm);
        Object.defineProperty(_obm, '__esModule', {
            'value': !0
        }), _obm.getSlot470PersonalEffect = void 0;
        var _obs = _obn(74496),
            _obt = _obp(_obn(18622));
        _obm.getSlot470PersonalEffect = function(_obu) {
            var _obv = null,
                _obw = new _obs.SlotItemEffectModel(),
                _obx = !1,
                _oby = new _obs.SlotItemEffectModel(),
                _obz = 0,
                _oc0 = 0;
            23 == _obu.ctype || 18 == _obu.ctype ? (_oby.houg += 1, _obx = !0, _obz = 1) : 30 == _obu.ctype && (_oby.houg += 2, _obx = !0, _obz = 2), ('しぐれ' == _obu.yomi || 'ゆきかぜ' == _obu.yomi || 'いそかぜ' == _obu.yomi) && (_oby.kaih += 2, _obx = !0), 961 == _obu.ship_id && (_oby.houg += 3, _oby.houm += 3, _oby.kaih += 2, _obx = !0);
            var _oc1 = _obu.get_slotnums(470);
            566 != _obu.ship_id && 567 != _obu.ship_id && 568 != _obu.ship_id && 656 != _obu.ship_id && 670 != _obu.ship_id && 915 != _obu.ship_id && 651 != _obu.ship_id && 145 != _obu.ship_id && 961 != _obu.ship_id && 951 != _obu.ship_id || (_obw.houg += 1, _obw.houm += 2, _oc1 >= 2 && (_obw.houg += 2), _oc0 = 1), _obx && _obw.add(_oby.multiply(_oc1));
            var _oc2 = 0;
            if (_obz > 0)
                for (var _oc3 = 0, _oc4 = _obu.have_slot_ids(); _oc3 < _oc4.length; _oc3++) {
                    var _oc5 = _oc4[_oc3],
                        _oc6 = _obt.default.model.slot.getMst(_oc5),
                        _oc7 = _oc6.equipType;
                    12 != _oc7 && 13 != _oc7 || (_oc6.sakuteki >= 5 && (_oc2 += _obu.get_slotnums(parseInt(_oc5))), _oc6.taiku >= 2 && _obu.get_slotnums(parseInt(_oc5)));
                }
            if (1 == _obz ? _oc2 >= 1 && (_obw.houg += 1, _obw.kaih += 1, _obw.raig += 3, _obw.houm += 1) : 2 == _obz && _oc2 >= 1 && (_obw.houg += 2, _obw.kaih += 1, _obw.raig += 3, _obw.houm += 3), 0 == _oc0) return _obw;
            var _oc8 = _obu.get_each_level_nums(470),
                _oc9 = 0,
                _oca = 0;
            if (_oc0 > 0 && _oc8.forEach(function(_ocb, _occ) {
                    _occ >= 5 && (_oc9 += _ocb), _occ >= 8 && (_oca += _ocb);
                }), 1 == _oc0) {
                _oc9 >= 1 && (_obw.houm += 1 * _oc9), _oca >= 1 && (_obw.houg += 1 * _oca);
                var _ocd = _oc8[10];
                _ocd >= 1 && (_obw.houm += 1 * _ocd);
            }
            return _obw;
        };
    },
    78173: (_oce, _ocf, _ocg) => {
        'use strict';
        var _och = null;
        defineModule(_ocf);
        Object.defineProperty(_ocf, '__esModule', {
            'value': !0
        }), _ocf.getSlot471PersonalEffect = void 0;
        var _oci = _ocg(74496);
        _ocf.getSlot471PersonalEffect = function(_ocj) {
            var _ock = null,
                _ocl = new _oci.SlotItemEffectModel(),
                _ocm = !1,
                _ocn = new _oci.SlotItemEffectModel(),
                _oco = 0;
            if ('フランス' == _ocj.getCountryName() && (_ocn.houg += 2, _ocn.kaih += 2, _ocn.houm += 2, _ocm = !0, _oco = 1), 79 == _ocj.ctype && (_ocn.houg += 2, _ocn.houm += 1, _ocm = !0), 0 == _ocm) return _ocl;
            var _ocp = _ocj.get_slotnums(471);
            if (_ocl.add(_ocn.multiply(_ocp)), 0 == _oco) return _ocl;
            var _ocq = _ocj.get_each_level_nums(471),
                _ocr = 0,
                _ocs = 0;
            if (_oco > 0 && _ocq.forEach(function(_oct, _ocu) {
                    _ocu >= 6 && (_ocr += _oct), _ocu >= 8 && (_ocs += _oct);
                }), 1 == _oco) {
                _ocr >= 1 && (_ocl.kaih += 1 * _ocr, _ocl.houm += 1 * _ocr), _ocs >= 1 && (_ocl.houg += 1 * _ocs, _ocl.kaih += 1 * _ocs, _ocl.houm += 1 * _ocs);
                var _ocv = _ocq[10];
                _ocv >= 1 && (_ocl.houg += 1 * _ocv, _ocl.houm += 1 * _ocv);
            }
            return _ocl;
        };
    },
    22581: (_ocw, _ocx, _ocy) => {
        'use strict';
        var _ocz = null;
        defineModule(_ocx);
        Object.defineProperty(_ocx, '__esModule', {
            'value': !0
        }), _ocx.getSlot472PersonalEffect = void 0;
        var _od0 = _ocy(74496);
        _ocx.getSlot472PersonalEffect = function(_od1) {
            var _od2 = null,
                _od3 = new _od0.SlotItemEffectModel(),
                _od4 = !1,
                _od5 = new _od0.SlotItemEffectModel(),
                _od6 = _od1.getCountryName();
            if ('アメリカ' == _od6 && (_od5.tais += 2, _od4 = !0), 'イギリス' == _od6 && (_od5.tais += 1, _od4 = !0), 1 == _od1.stype && (_od5.kaih += 1, _od4 = !0), _od4) {
                var _od7 = _od1.get_slotnums(472);
                _od3.add(_od5.multiply(_od7));
            }
            return 920 == _od1.ship_id && (_od3.tais += 1, _od3.kaih += 1, _od3.houm += 1), _od3;
        };
    },
    13053: (_od8, _od9, _oda) => {
        'use strict';
        var _odb = null;
        defineModule(_od9);
        Object.defineProperty(_od9, '__esModule', {
            'value': !0
        }), _od9.getSlot473PersonalEffect = void 0;
        var _odc = _oda(74496);
        _od9.getSlot473PersonalEffect = function(_odd) {
            var _ode = null,
                _odf = new _odc.SlotItemEffectModel(),
                _odg = !1,
                _odh = new _odc.SlotItemEffectModel(),
                _odi = _odd.getCountryName();
            if ('アメリカ' == _odi && (_odh.houg += 1, _odh.kaih += 1, _odh.tyku += 1, _odg = !0), 'イギリス' == _odi && (_odh.houg += 1, _odh.kaih += 1, _odg = !0), 0 == _odg) return _odf;
            var _odj = _odd.get_slotnums(473);
            return _odf.add(_odh.multiply(_odj)), _odf;
        };
    },
    47874: (_odk, _odl, _odm) => {
        'use strict';
        var _odn = null;
        defineModule(_odl);
        Object.defineProperty(_odl, '__esModule', {
            'value': !0
        }), _odl.getSlot474PersonalEffect = void 0;
        var _odo = _odm(74496);
        _odl.getSlot474PersonalEffect = function(_odp) {
            var _odq = null,
                _odr = new _odo.SlotItemEffectModel(),
                _ods = !1,
                _odt = new _odo.SlotItemEffectModel(),
                _odu = _odp.getCountryName();
            if ('アメリカ' == _odu && (_odt.houg += 2, _odt.kaih += 1, _odt.tyku += 1, _ods = !0), 'イギリス' == _odu && (_odt.houg += 1, _odt.kaih += 1, _odt.tyku += 1, _ods = !0), 'フランス' == _odu && (_odt.houg += 1, _odt.tyku += 1, _ods = !0), 707 != _odp.ship_id && 930 != _odp.ship_id || (_odt.houg += 1, _odt.kaih += 1, _ods = !0), 0 == _ods) return _odr;
            var _odv = _odp.get_slotnums(474);
            return _odr.add(_odt.multiply(_odv)), _odr;
        };
    },
    42788: (_odw, _odx, _ody) => {
        'use strict';
        var _odz = null;
        defineModule(_odx);
        Object.defineProperty(_odx, '__esModule', {
            'value': !0
        }), _odx.getSlot478PersonalEffect = void 0;
        var _oe0 = _ody(74496);
        _odx.getSlot478PersonalEffect = function(_oe1) {
            var _oe2 = null,
                _oe3 = new _oe0.SlotItemEffectModel(),
                _oe4 = _oe1.get_each_level_nums(478),
                _oe5 = [];
            return _oe4.forEach(function(_oe6, _oe7) {
                var _oe8 = null;
                for (var _oe9 = 1; _oe9 <= _oe1.SLOT_LEVEL_MAX; _oe9++) _oe7 >= _oe9 && (null == _oe5[_oe9] && (_oe5[_oe9] = 0), _oe5[_oe9] += _oe6);
            }), _oe5.every(function(_oea) {
                return 0 == _oea;
            }) || (_oe5[1] >= 1 && (_oe3.houg += 1), _oe5[2] >= 1 && (_oe3.houm += 1), _oe5[3] >= 1 && (_oe3.kaih += 1), _oe5[4] >= 1 && (_oe3.baku += 1), _oe5[5] >= 1 && (_oe3.raig += 1), _oe5[6] >= 1 && (_oe3.tyku += 1), _oe5[7] >= 1 && (_oe3.houg += 1), _oe5[8] >= 1 && (_oe3.houm += 1), _oe5[9] >= 1 && (_oe3.kaih += 1), _oe5[10] >= 1 && (_oe3.houg += 1)), _oe3;
        };
    },
    22218: (_oeb, _oec, _oed) => {
        'use strict';
        var _oee = null;
        defineModule(_oec);
        Object.defineProperty(_oec, '__esModule', {
            'value': !0
        }), _oec.getSlot47PersonalEffect = void 0;
        var _oef = _oed(74496);
        _oec.getSlot47PersonalEffect = function(_oeg) {
            var _oeh = null,
                _oei = new _oef.SlotItemEffectModel(),
                _oej = new _oef.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_oeg.yomi) >= 0 ? (_oej.tais += 3, _oej.kaih += 2, _oej.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_oeg.yomi) >= 0 && (_oej.tais += 2, _oej.kaih += 2), !_oej.exists()) return _oei;
            var _oek = _oeg.get_slotnums(47) + _oeg.get_slotnums(438);
            return _oei = _oej.multiply(_oek);
        };
    },
    57664: (_oel, _oem, _oen) => {
        'use strict';
        var _oeo = null;
        defineModule(_oem);
        Object.defineProperty(_oem, '__esModule', {
            'value': !0
        }), _oem.getSlot483PersonalEffect = void 0;
        var _oep = _oen(74496);
        _oem.getSlot483PersonalEffect = function(_oeq) {
            var _oer = null,
                _oes = new _oep.SlotItemEffectModel(),
                _oet = 0,
                _oeu = 0,
                _oev = 0,
                _oew = 0,
                _oex = 0,
                _oey = 0,
                _oez = 0;
            if (6 == _oeq.ctype ? (_oes.houg += 2, _oes.tyku += 3, _oes.houm += 1, _oet = 1) : 2 == _oeq.ctype ? (_oes.houg += 1, _oes.tyku += 2, _oes.kaih += 2, _oes.houm += 1, _oeu = 1) : 37 == _oeq.ctype && (_oev = 1), 8 == _oeq.stype || 9 == _oeq.stype || 10 == _oeq.stype ? _oew = 1 : 5 != _oeq.stype && 6 != _oeq.stype || (_oex = 1), 149 == _oeq.ship_id ? (_oes.houg += 2, _oes.tyku += 2) : 591 == _oeq.ship_id ? (_oes.houg += 3, _oes.tyku += 3, _oes.kaih += 1) : 150 == _oeq.ship_id ? (_oes.houg += 1, _oes.tyku += 1) : 592 == _oeq.ship_id ? (_oes.houg += 2, _oes.tyku += 2, _oes.kaih += 2) : 151 == _oeq.ship_id ? (_oes.houg += 1, _oes.tyku += 2, _oes.kaih += 2) : 593 == _oeq.ship_id ? (_oes.houg += 2, _oes.tyku += 5, _oes.kaih += 3) : 954 == _oeq.ship_id ? (_oes.houg += 2, _oes.tyku += 4, _oes.kaih += 2) : 152 == _oeq.ship_id ? (_oes.houg += 2, _oes.tyku += 2) : 911 == _oeq.ship_id || 916 == _oeq.ship_id || 546 == _oeq.ship_id ? (_oes.houg += 2, _oes.tyku += 2, _oes.kaih += 2, _oey = 1) : 553 == _oeq.ship_id || 554 == _oeq.ship_id ? (_oes.houg += 1, _oes.tyku += 2, _oes.kaih += 1, _oez = 1) : 541 == _oeq.ship_id || 411 == _oeq.ship_id || 412 == _oeq.ship_id ? (_oes.houg += 1, _oes.tyku += 2) : 573 == _oeq.ship_id && (_oes.houg += 2, _oes.tyku += 2, _oes.kaih += 1), 0 == [_oet, _oeu, _oev, _oew, _oex, _oey, _oez].reduce(function(_of0, _of1) {
                    return _of0 + _of1;
                }, 0)) return _oes;
            var _of2 = _oeq.get_each_level_nums(483),
                _of3 = 0,
                _of4 = [];
            return _of2.forEach(function(_of5, _of6) {
                var _of7 = null;
                _of6 >= 6 && (_of3 += _of5);
                for (var _of8 = 1; _of8 <= _oeq.SLOT_LEVEL_MAX; _of8++) null == _of4[_of8] && (_of4[_of8] = 0), _of6 >= _of8 && (_of4[_of8] += _of5);
            }), 1 == _oet ? (_of3 >= 1 && (_oes.houm += 1), _of2[10] >= 1 && (_oes.houm += 1)) : 1 == _oeu ? (_of4[5] >= 1 && (_oes.kaih += 1), _of4[6] >= 1 && (_oes.houm += 1), _of4[10] >= 1 && (_oes.kaih += 1)) : 1 == _oev && (_of4[6] >= 1 && (_oes.houm += 1), _of4[10] >= 1 && (_oes.kaih += 1)), 1 == _oew ? (_of4[2] >= 1 && (_oes.tyku += 1), _of4[4] >= 1 && (_oes.houg += 1), _of4[7] >= 1 && (_oes.kaih += 1), _of4[8] >= 1 && (_oes.tyku += 1), _of4[9] >= 1 && (_oes.houg += 1)) : 1 == _oex && (_of4[2] >= 1 && (_oes.tyku += 1), _of4[4] >= 1 && (_oes.houg += 1), _of4[6] >= 1 && (_oes.kaih += 1), _of4[8] >= 1 && (_oes.houm += 1), _of4[10] >= 1 && (_oes.houg += 1)), 1 == _oey ? _of4[5] >= 1 && (_oes.houm += 1) : 1 == _oez && (_of4[1] >= 1 && (_oes.houm += 1), _of4[3] >= 1 && (_oes.houm += 1)), _oes;
        };
    },
    44990: (_of9, _ofa, _ofb) => {
        'use strict';
        var _ofc = null;
        defineModule(_ofa);
        Object.defineProperty(_ofa, '__esModule', {
            'value': !0
        }), _ofa.getSlot485PersonalEffect = void 0;
        var _ofd = _ofb(74496);
        _ofa.getSlot485PersonalEffect = function(_ofe) {
            var _off = null,
                _ofg = new _ofd.SlotItemEffectModel(),
                _ofh = !1,
                _ofi = new _ofd.SlotItemEffectModel();
            if (9 == _ofe.ctype && (_ofi.houg += 1, _ofi.kaih += 2, _ofi.tyku += 3, _ofh = !0), 501 == _ofe.ship_id || 506 == _ofe.ship_id ? (_ofi.kaih += 1, _ofi.tyku += 2, _ofi.houm += 1, _ofh = !0) : 502 != _ofe.ship_id && 507 != _ofe.ship_id || (_ofi.kaih += 1, _ofi.tyku += 1, _ofi.houm += 1, _ofh = !0), _ofh) {
                var _ofj = _ofe.get_slotnums(485);
                _ofg.add(_ofi.multiply(_ofj));
            }
            var _ofk = _ofe.get_each_level_nums(485),
                _ofl = 0,
                _ofm = 0,
                _ofn = 0,
                _ofo = _ofk[10];
            return _ofk.forEach(function(_ofp, _ofq) {
                _ofq >= 3 && (_ofl += _ofp), _ofq >= 5 && (_ofm += _ofp), _ofq >= 7 && (_ofn += _ofp);
            }), _ofl > 0 && (_ofg.houg += 1 * _ofl), _ofm > 0 && (_ofg.tyku += 1 * _ofm), _ofn > 0 && (_ofg.kaih += 1 * _ofn), _ofo > 0 && (_ofg.houm += 1 * _ofo), _ofg;
        };
    },
    83957: (_ofr, _ofs, _oft) => {
        'use strict';
        var _ofu = null;
        defineModule(_ofs);
        Object.defineProperty(_ofs, '__esModule', {
            'value': !0
        }), _ofs.getSlot486PersonalEffect = void 0;
        var _ofv = _oft(74496);
        _ofs.getSlot486PersonalEffect = function(_ofw) {
            var _ofx = null,
                _ofy = new _ofv.SlotItemEffectModel(),
                _ofz = !1,
                _og0 = new _ofv.SlotItemEffectModel();
            if (894 == _ofw.ship_id || 899 == _ofw.ship_id ? (_og0.houg += 4, _og0.tyku += 4, _og0.kaih += 3, _og0.houm += 2, _ofz = !0) : 888 != _ofw.ship_id && 883 != _ofw.ship_id || (_og0.houg += 2, _og0.tyku += 2, _og0.kaih += 2, _og0.houm += 1, _ofz = !0), _ofz) {
                var _og1 = _ofw.get_slotnums(486);
                _ofy.add(_og0.multiply(_og1));
            }
            var _og2 = _ofw.get_each_level_nums(486),
                _og3 = 0,
                _og4 = 0,
                _og5 = _og2[10];
            return _og2.forEach(function(_og6, _og7) {
                _og7 >= 6 && (_og3 += _og6), _og7 >= 8 && (_og4 += _og6);
            }), _og3 > 0 && (_ofy.kaih += 1 * _og3, _ofy.houm += 1 * _og3), _og4 > 0 && (_ofy.tyku += 1 * _og4, _ofy.kaih += 1 * _og4), _og5 > 0 && (_ofy.houg += 1 * _og5, _ofy.houm += 1 * _og5), _ofy;
        };
    },
    78539: (_og8, _og9, _oga) => {
        'use strict';
        var _ogb = null;
        defineModule(_og9);
        Object.defineProperty(_og9, '__esModule', {
            'value': !0
        }), _og9.getSlot487PersonalEffect = void 0;
        var _ogc = _oga(74496);
        _og9.getSlot487PersonalEffect = function(_ogd) {
            var _oge = null,
                _ogf = new _ogc.SlotItemEffectModel(),
                _ogg = !1,
                _ogh = new _ogc.SlotItemEffectModel();
            if (894 == _ogd.ship_id || 899 == _ogd.ship_id ? (_ogh.houg += 5, _ogh.tyku += 3, _ogh.kaih += 2, _ogh.houm += 4, _ogg = !0) : 888 != _ogd.ship_id && 883 != _ogd.ship_id || (_ogh.houg += 3, _ogh.tyku += 1, _ogh.kaih += 1, _ogh.houm += 2, _ogg = !0), _ogg) {
                var _ogi = _ogd.get_slotnums(487);
                _ogf.add(_ogh.multiply(_ogi));
            }
            var _ogj = _ogd.get_each_level_nums(487),
                _ogk = 0,
                _ogl = 0,
                _ogm = _ogj[10];
            return _ogj.forEach(function(_ogn, _ogo) {
                _ogo >= 6 && (_ogk += _ogn), _ogo >= 8 && (_ogl += _ogn);
            }), _ogk > 0 && (_ogf.houg += 1 * _ogk, _ogf.kaih += 1 * _ogk), _ogl > 0 && (_ogf.tyku += 1 * _ogl, _ogf.houm += 1 * _ogl), _ogm > 0 && (_ogf.houg += 1 * _ogm, _ogf.houm += 1 * _ogm), _ogf;
        };
    },
    96282: (_ogp, _ogq, _ogr) => {
        'use strict';
        var _ogs = null;
        defineModule(_ogq);
        Object.defineProperty(_ogq, '__esModule', {
            'value': !0
        }), _ogq.getSlot488PersonalEffect = void 0;
        var _ogt = _ogr(74496);
        _ogq.getSlot488PersonalEffect = function(_ogu) {
            var _ogv = null,
                _ogw = new _ogt.SlotItemEffectModel(),
                _ogx = !1,
                _ogy = new _ogt.SlotItemEffectModel(),
                _ogz = 0,
                _oh0 = _ogu.getCountryName(),
                _oh1 = {
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
                }[_ogu.ship_id];
            if (('日本' == _oh0 && 2 == _ogu.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_ogu.ctype] && 1 == _ogu.stype) && (_ogy.tais += 1, _ogy.kaih += 1, _ogx = !0), 1 == _oh1 ? (_ogy.tais += 5, _ogy.kaih += 4, _ogy.houm += 2, _ogx = !0, _ogz = 1) : 2 == _oh1 ? (_ogy.tais += 2, _ogy.kaih += 1, _ogy.houm += 1, _ogx = !0, _ogz = 2) : 3 == _oh1 && (_ogy.tais += 1, _ogx = !0, _ogz = 2), 0 == _ogx) return _ogw;
            var _oh2 = _ogu.get_slotnums(488);
            if (_ogw.add(_ogy.multiply(_oh2)), 0 == _ogz) return _ogw;
            var _oh3 = _ogu.get_each_level_nums(488),
                _oh4 = [];
            return _oh3.forEach(function(_oh5, _oh6) {
                var _oh7 = null;
                for (var _oh8 = 1; _oh8 <= _ogu.SLOT_LEVEL_MAX; _oh8++) _oh6 >= _oh8 && (null == _oh4[_oh8] && (_oh4[_oh8] = 0), _oh4[_oh8] += _oh5);
            }), 1 == _ogz ? (_oh4[3] >= 1 && (_ogw.kaih += 1 * _oh4[3]), _oh4[5] >= 1 && (_ogw.tais += 1 * _oh4[5]), _oh4[7] >= 1 && (_ogw.houm += 1 * _oh4[7]), _oh4[8] >= 1 && (_ogw.kaih += 1 * _oh4[8]), _oh4[9] >= 1 && (_ogw.tais += 1 * _oh4[9]), _oh4[10] >= 1 && (_ogw.tais += 1 * _oh4[10])) : 2 == _ogz && (_oh4[5] >= 1 && (_ogw.tais += 1 * _oh4[5]), _oh4[7] >= 1 && (_ogw.kaih += 1 * _oh4[7]), _oh4[9] >= 1 && (_ogw.houm += 1 * _oh4[9]), _oh4[10] >= 1 && (_ogw.tais += 1 * _oh4[10])), _ogw;
        };
    },
    49679: (_oh9, _oha, _ohb) => {
        'use strict';
        var _ohc = null;
        defineModule(_oha);
        Object.defineProperty(_oha, '__esModule', {
            'value': !0
        }), _oha.getSlot489PersonalEffect = void 0;
        var _ohd = _ohb(74496);
        _oha.getSlot489PersonalEffect = function(_ohe) {
            var _ohf = null,
                _ohg = new _ohd.SlotItemEffectModel(),
                _ohh = !1,
                _ohi = new _ohd.SlotItemEffectModel();
            if ('あきつまる' != _ohe.yomi && 'やましおまる' != _ohe.yomi && 'くまのまる' != _ohe.yomi || (_ohi.tyku = _ohi.tyku + 2, _ohi.kaih = _ohi.kaih + 1, _ohi.houg = _ohi.houg + 1, _ohi.tais = _ohi.tais + 1, _ohi.houm = _ohi.houm + 1, _ohh = !0), 717 != _ohe.ship_id && 948 != _ohe.ship_id || (_ohi.tyku = _ohi.tyku + 2, _ohi.kaih = _ohi.kaih + 2, _ohi.houg = _ohi.houg + 2, _ohi.tais = _ohi.tais + 1, _ohi.houm = _ohi.houm + 1, _ohh = !0), _ohh) {
                var _ohj = _ohe.get_slotnums(489) + _ohe.get_slotnums(491);
                _ohg.add(_ohi.multiply(_ohj));
            }
            var _ohk = _ohe.get_each_level_nums(489),
                _ohl = _ohe.get_each_level_nums(491),
                _ohm = 0,
                _ohn = 0,
                _oho = 0;
            _ohk.forEach(function(_ohp, _ohq) {
                _ohq >= 3 && (_ohm += _ohp), _ohq >= 6 && (_ohn += _ohp), _ohq >= 8 && (_oho += _ohp);
            }), _ohl.forEach(function(_ohr, _ohs) {
                _ohs >= 3 && (_ohm += _ohr), _ohs >= 6 && (_ohn += _ohr), _ohs >= 8 && (_oho += _ohr);
            });
            var _oht = _ohk[10] + _ohl[10];
            return _ohm >= 1 && (_ohg.kaih = _ohg.kaih + 1 * _ohm), _ohn >= 1 && (_ohg.tais = _ohg.tais + 1 * _ohn), _oho >= 1 && (_ohg.houm = _ohg.houm + 1 * _oho), _oht >= 1 && (_ohg.houg = _ohg.houg + 1 * _oht), _ohg;
        };
    },
    90312: function(_ohu, _ohv, _ohw) {
        'use strict';
        var _ohx = null;
        var _ohy = this && this.__importDefault || function(_ohz) {
            var _oi0 = null;
            return _ohz && _ohz.__esModule ? _ohz : {
                'default': _ohz
            };
        };
        defineModule(_ohv);
        Object.defineProperty(_ohv, '__esModule', {
            'value': !0
        }), _ohv.getSlot502PersonalEffect = void 0;
        var _oi1 = _ohw(74496),
            _oi2 = _ohy(_ohw(18622));
        _ohv.getSlot502PersonalEffect = function(_oi3) {
            var _oi4 = null,
                _oi5 = new _oi1.SlotItemEffectModel(),
                _oi6 = _oi3.get_slotnums(502),
                _oi7 = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _oi8 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _oi9 = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _oia = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _oib = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_oi7[_oi3.ship_id]) {
                var _oic = _oi7[_oi3.ship_id];
                _oi5.houg += _oi6 * _oic;
            }
            if (_oi8[_oi3.ship_id]) {
                var _oid = _oi8[_oi3.ship_id];
                _oi5.tyku += _oi6 * _oid;
            }
            if (_oi9[_oi3.ship_id]) {
                var _oie = _oi9[_oi3.ship_id],
                    _oif = _oi3.get_each_level_nums(502),
                    _oig = [];
                _oif.forEach(function(_oih, _oii) {
                    var _oij = null;
                    for (var _oik = 1; _oik <= _oi3.SLOT_LEVEL_MAX; _oik++) _oii >= _oik && (null == _oig[_oik] && (_oig[_oik] = 0), _oig[_oik] += _oih);
                }), 1 == _oie ? (_oi5.kaih += 3 * _oi6, _oig[1] > 0 && (_oi5.kaih += 1 * _oig[1]), _oig[3] > 0 && (_oi5.tyku += 1 * _oig[3]), _oig[5] > 0 && (_oi5.houg += 1 * _oig[5]), _oig[7] > 0 && (_oi5.kaih += 1 * _oig[7]), _oig[8] > 0 && (_oi5.tyku += 1 * _oig[8]), _oig[9] > 0 && (_oi5.houg += 1 * _oig[9]), _oig[10] > 0 && (_oi5.tyku += 1 * _oig[10])) : 2 == _oie ? (_oi5.kaih += 1 * _oi6, _oig[2] > 0 && 151 == _oi3.ship_id && (_oi5.kaih += 1 * _oig[2]), _oig[4] > 0 && (_oi5.tyku += 1 * _oig[4]), _oig[6] > 0 && (_oi5.houg += 1 * _oig[6]), _oig[8] > 0 && (_oi5.kaih += 1 * _oig[8]), _oig[10] > 0 && (_oi5.tyku += 1 * _oig[10])) : 3 == _oie && (_oig[5] > 0 && (_oi5.kaih += 1 * _oig[5]), _oig[8] > 0 && (_oi5.houg += 1 * _oig[8]), _oig[10] > 0 && (_oi5.tyku += 1 * _oig[10]));
            }
            if (_oia[_oi3.ship_id]) {
                for (var _oil = 0, _oim = 0, _oin = _oi3.have_slot_ids(); _oim < _oin.length; _oim++) {
                    var _oio = _oin[_oim],
                        _oip = _oi2.default.model.slot.getMst(_oio),
                        _oiq = _oip.equipType;
                    12 != _oiq && 13 != _oiq || (_oip.sakuteki >= 5 && (_oil += _oi3.get_slotnums(parseInt(_oio))), _oip.taiku >= 2 && _oi3.get_slotnums(parseInt(_oio)));
                }
                0;
                var _oir = _oia[_oi3.ship_id];
                1 == _oir && _oil >= 1 ? (_oi5.houg += 3, _oi5.kaih += 4) : 2 == _oir && _oil >= 1 && (_oi5.houg += 2, _oi5.kaih += 2);
            }
            if (_oib[_oi3.ship_id]) {
                var _ois = _oib[_oi3.ship_id],
                    _oit = [],
                    _oiu = [],
                    _oiv = _oi3.have_slot_ids();
                [410, 411].forEach(function(_oiw) {
                    var _oix = null;
                    _oiv.indexOf(_oiw.toString()) > -1 && (_oiu[_oiw] = _oi3.get_each_level_nums(_oiw), null == _oit[_oiw] && (_oit[_oiw] = []), _oiu[_oiw].forEach(function(_oiy, _oiz) {
                        var _oj0 = null;
                        for (var _oj1 = 1; _oj1 <= _oi3.SLOT_LEVEL_MAX; _oj1++) null == _oit[_oiw][_oj1] && (_oit[_oiw][_oj1] = 0), _oiz >= _oj1 && (_oit[_oiw][_oj1] += _oiy);
                    }));
                });
                var _oj2 = _oiu[410],
                    _oj3 = _oiu[411];
                if (1 == _ois) {
                    if (_oj2) {
                        _oi5.tyku += 1;
                        var _oj4 = _oit[410];
                        _oj4[7] >= 1 && (_oi5.houg += 1), _oj4[10] >= 1 && (_oi5.kaih += 1);
                    }
                    if (_oj3) {
                        _oi5.tyku += 2;
                        var _oj5 = _oit[411];
                        _oj5[2] >= 1 && (_oi5.houg += 1), _oj5[4] >= 1 && (_oi5.kaih += 1), _oj5[6] >= 1 && (_oi5.houm += 1), _oj5[8] >= 1 && (_oi5.tyku += 1), _oj5[10] >= 1 && (_oi5.houg += 1);
                    }
                }
            }
            return _oi5;
        };
    },
    86856: function(_oj6, _oj7, _oj8) {
        'use strict';
        var _oj9 = null;
        var _oja = this && this.__importDefault || function(_ojb) {
            var _ojc = null;
            return _ojb && _ojb.__esModule ? _ojb : {
                'default': _ojb
            };
        };
        defineModule(_oj7);
        Object.defineProperty(_oj7, '__esModule', {
            'value': !0
        }), _oj7.getSlot503PersonalEffect = void 0;
        var _ojd = _oj8(74496),
            _oje = _oja(_oj8(18622));
        _oj7.getSlot503PersonalEffect = function(_ojf) {
            var _ojg = null,
                _ojh = new _ojd.SlotItemEffectModel(),
                _oji = _ojf.get_slotnums(503),
                _ojj = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _ojk = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _ojl = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _ojm = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _ojn = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _ojo = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_ojj[_ojf.ship_id]) {
                var _ojp = _ojj[_ojf.ship_id];
                _ojh.houg += _oji * _ojp;
            }
            if (_ojk[_ojf.ship_id]) {
                var _ojq = _ojk[_ojf.ship_id];
                _ojh.tyku += _oji * _ojq;
            }
            if (_ojl[_ojf.ship_id]) {
                var _ojr = _ojl[_ojf.ship_id],
                    _ojs = _ojf.get_each_level_nums(503),
                    _ojt = [];
                _ojs.forEach(function(_oju, _ojv) {
                    var _ojw = null;
                    for (var _ojx = 1; _ojx <= _ojf.SLOT_LEVEL_MAX; _ojx++) _ojv >= _ojx && (null == _ojt[_ojx] && (_ojt[_ojx] = 0), _ojt[_ojx] += _oju);
                }), 1 == _ojr ? (_ojh.houm += 2 * _oji, _ojt[1] > 0 && (_ojh.houg += 1 * _ojt[1]), _ojt[2] > 0 && (_ojh.tyku += 1 * _ojt[2]), _ojt[4] > 0 && (_ojh.houm += 1 * _ojt[4]), _ojt[6] > 0 && (_ojh.houg += 1 * _ojt[6]), _ojt[8] > 0 && (_ojh.tyku += 1 * _ojt[8]), _ojt[10] > 0 && (_ojh.houm += 1 * _ojt[10])) : 2 == _ojr ? (_ojh.houm += 1 * _oji, _ojt[2] > 0 && (_ojh.houg += 1 * _ojt[2]), _ojt[4] > 0 && (_ojh.tyku += 1 * _ojt[4]), _ojt[6] > 0 && (_ojh.houm += 1 * _ojt[6]), _ojt[8] > 0 && (_ojh.houg += 1 * _ojt[8]), _ojt[10] > 0 && (_ojh.houm += 1 * _ojt[10])) : 3 == _ojr && (_ojt[4] > 0 && (_ojh.houm += 1 * _ojt[4]), _ojt[7] > 0 && (_ojh.houg += 1 * _ojt[7]), _ojt[10] > 0 && (_ojh.tyku += 1 * _ojt[10]));
            }
            var _ojy = 0;
            _ojm[_ojf.ship_id] && (_ojy = _ojm[_ojf.ship_id]);
            var _ojz = 0;
            _ojo[_ojf.ship_id] && (_ojz = _ojo[_ojf.ship_id]);
            var _ok0 = 0,
                _ok1 = 0,
                _ok2 = _ojf.have_slot_ids();
            if (_ojy + _ojz > 0)
                for (var _ok3 = 0, _ok4 = _ok2; _ok3 < _ok4.length; _ok3++) {
                    var _ok5 = _ok4[_ok3],
                        _ok6 = _oje.default.model.slot.getMst(_ok5),
                        _ok7 = _ok6.equipType;
                    12 != _ok7 && 13 != _ok7 || (_ok6.sakuteki >= 5 && (_ok0 += _ojf.get_slotnums(parseInt(_ok5))), _ok6.taiku >= 2 && _ojf.get_slotnums(parseInt(_ok5)), _ok6.meichu >= 8 && (_ok1 += _ojf.get_slotnums(parseInt(_ok5))));
                }
            1 == _ojy ? _ok0 >= 1 && (_ojh.houg += 3, _ojh.houm += 3, _ojh.kaih += 2) : 2 == _ojy && _ok0 >= 1 && (_ojh.houg += 2, _ojh.houm += 2, _ojh.kaih += 1);
            var _ok8 = 0,
                _ok9 = [],
                _oka = [];
            if (_ojn[_ojf.ship_id]) {
                _ok8 = _ojn[_ojf.ship_id];
                var _okb = _ojf.have_slot_ids();
                [174].forEach(function(_okc) {
                    var _okd = null;
                    _okb.indexOf(_okc.toString()) > -1 && (_oka[_okc] = _ojf.get_each_level_nums(_okc), null == _ok9[_okc] && (_ok9[_okc] = []), _oka[_okc].forEach(function(_oke, _okf) {
                        var _okg = null;
                        for (var _okh = 1; _okh <= _ojf.SLOT_LEVEL_MAX; _okh++) null == _ok9[_okc][_okh] && (_ok9[_okc][_okh] = 0), _okf >= _okh && (_ok9[_okc][_okh] += _oke);
                    }));
                });
            }
            if (_ok8 > 0) {
                var _oki = _oka[174];
                if (1 == _ok8 && _oki) {
                    var _okj = _ok9[174];
                    _ojh.raig += 4, _okj[6] >= 1 && (_ojh.raig += 1), _okj[8] >= 1 && (_ojh.houm += 1), _okj[10] >= 1 && (_ojh.houg += 1);
                }
            }
            return _ok1 > 0 && (_ojz >= 1 && _ojz <= 3 && (_ojh.houg += 2, _ojh.houm += 2, _ojh.kaih += 2), 1 == _ojz ? _ojh.houg += 1 : 3 == _ojz && (_ojh.houg += 2)), _ojh;
        };
    },
    78123: function(_okk, _okl, _okm) {
        'use strict';
        var _okn = null;
        var _oko = this && this.__importDefault || function(_okp) {
            var _okq = null;
            return _okp && _okp.__esModule ? _okp : {
                'default': _okp
            };
        };
        defineModule(_okl);
        Object.defineProperty(_okl, '__esModule', {
            'value': !0
        }), _okl.getSlot505PersonalEffect = void 0;
        var _okr = _okm(74496),
            _oks = _oko(_okm(18622));
        _okl.getSlot505PersonalEffect = function(_okt) {
            var _oku = null,
                _okv = new _okr.SlotItemEffectModel(),
                _okw = !1,
                _okx = new _okr.SlotItemEffectModel();
            if (2 == _okt.stype ? (_okx.houg += 1, _okx.tyku += 2, _okx.kaih += 2, _okw = !0) : 1 == _okt.stype ? (_okx.houg += 1, _okx.tyku += 1, _okx.kaih += 1, _okw = !0) : 3 == _okt.stype || 21 == _okt.stype || 4 == _okt.stype ? (_okx.tyku += 1, _okx.kaih += 2, _okw = !0) : 5 != _okt.stype && 6 != _okt.stype && 16 != _okt.stype || (_okx.tyku += 1, _okx.kaih += 1, _okw = !0), _okw) {
                var _oky = _okt.get_slotnums(505);
                _okv.add(_okx.multiply(_oky));
            }
            var _okz = {
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
                _ol0 = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2
                },
                _ol1 = {
                    961: 1,
                    656: 1,
                    951: 1
                };
            1 == _okz[_okt.ship_id] ? (_okv.houg += 2, _okv.tyku += 3, _okv.kaih += 4) : 2 == _okz[_okt.ship_id] ? (_okv.houg += 1, _okv.tyku += 2, _okv.kaih += 3) : 3 == _okz[_okt.ship_id] ? (_okv.tyku += 2, _okv.kaih += 2) : 4 == _okz[_okt.ship_id] ? (_okv.tyku += 1, _okv.kaih += 2) : 5 == _okz[_okt.ship_id] && (_okv.houg += 1, _okv.tyku += 1, _okv.kaih += 1);
            var _ol2 = 0;
            if (_ol0[_okt.ship_id] && _ol2++, _ol1[_okt.ship_id] && _ol2++, 0 == _ol2) return _okv;
            for (var _ol3 = 0, _ol4 = 0, _ol5 = 0, _ol6 = _okt.have_slot_ids(); _ol5 < _ol6.length; _ol5++) {
                var _ol7 = _ol6[_ol5],
                    _ol8 = _oks.default.model.slot.getMst(_ol7),
                    _ol9 = _ol8.equipType;
                12 != _ol9 && 13 != _ol9 || (_ol8.sakuteki >= 5 && (_ol3 += _okt.get_slotnums(parseInt(_ol7))), _ol8.taiku >= 2 && (_ol4 += _okt.get_slotnums(parseInt(_ol7))));
            }
            var _ola = _ol0[_okt.ship_id];
            _ol4 > 0 && _ola > 0 && (1 == _ola ? (_okv.houg += 1, _okv.tyku += 2, _okv.kaih += 3) : 2 == _ola && (_okv.tyku += 2, _okv.kaih += 2));
            var _olb = _ol1[_okt.ship_id];
            return _ol3 > 0 && _olb > 0 && 1 == _olb && (_okv.houg += 1, _okv.kaih += 1), _okv;
        };
    },
    25765: (_olc, _old, _ole) => {
        'use strict';
        var _olf = null;
        defineModule(_old);
        Object.defineProperty(_old, '__esModule', {
            'value': !0
        }), _old.getSlot506PersonalEffect = void 0;
        var _olg = _ole(74496);
        _old.getSlot506PersonalEffect = function(_olh) {
            var _oli = null,
                _olj = new _olg.SlotItemEffectModel();
            return 961 == _olh.ship_id ? (_olj.houg += 2, _olj.houm += 3, _olj.tyku += 2, _olj.kaih += 4) : 145 == _olh.ship_id || 497 == _olh.ship_id || 656 == _olh.ship_id || 557 == _olh.ship_id || 558 == _olh.ship_id || 951 == _olh.ship_id ? (_olj.houg += 1, _olj.houm += 2, _olj.tyku += 1, _olj.kaih += 3) : 578 != _olh.ship_id && 419 != _olh.ship_id && 464 != _olh.ship_id && 470 != _olh.ship_id && 407 != _olh.ship_id && 235 != _olh.ship_id && 147 != _olh.ship_id && 538 != _olh.ship_id && 537 != _olh.ship_id && 955 != _olh.ship_id && 960 != _olh.ship_id || (_olj.houg += 1, _olj.houm += 1, _olj.tyku += 1, _olj.kaih += 2), _olj;
        };
    },
    88271: function(_olk, _oll, _olm) {
        'use strict';
        var _oln = null;
        var _olo = this && this.__importDefault || function(_olp) {
            var _olq = null;
            return _olp && _olp.__esModule ? _olp : {
                'default': _olp
            };
        };
        defineModule(_oll);
        Object.defineProperty(_oll, '__esModule', {
            'value': !0
        }), _oll.getSlot50PersonalEffect = void 0;
        var _olr = _olm(74496),
            _ols = _olo(_olm(18622));
        _oll.getSlot50PersonalEffect = function(_olt) {
            var _olu = null,
                _olv = new _olr.SlotItemEffectModel(),
                _olw = !1,
                _olx = new _olr.SlotItemEffectModel();
            7 != _olt.ctype && 13 != _olt.ctype && 8 != _olt.ctype && 29 != _olt.ctype && 9 != _olt.ctype && 31 != _olt.ctype || (_olx.houg += 1, _olw = !0), 8 != _olt.ctype && 29 != _olt.ctype && 9 != _olt.ctype && 31 != _olt.ctype || (_olx.houg += 1, _olx.kaih += 1, _olw = !0);
            var _oly = _olt.get_slotnums(50);
            9 != _olt.ctype && 31 != _olt.ctype || _oly >= 2 && (_olx.houg += 1, _olw = !0);
            var _olz = 0;
            if (501 != _olt.ship_id && 506 != _olt.ship_id && 502 != _olt.ship_id && 507 != _olt.ship_id || (_olx.houg += 1, _olw = !0, _olz = 1), 0 == _olw) return _olv;
            _olv = _olx.multiply(_oly);
            for (var _om0 = 0, _om1 = 0, _om2 = _olt.have_slot_ids(); _om1 < _om2.length; _om1++) {
                var _om3 = _om2[_om1],
                    _om4 = _ols.default.model.slot.getMst(_om3),
                    _om5 = _om4.equipType;
                12 != _om5 && 13 != _om5 || _om4.sakuteki >= 5 && (_om0 += _olt.get_slotnums(parseInt(_om3)));
            }
            if (_om0 > 0) {
                if (7 == _olt.ctype || 13 == _olt.ctype) 0 == _olt.get_slotnums(90) && (_olv.houg += 1, _olv.kaih += 1, _olv.raig += 1);
                else 8 != _olt.ctype && 29 != _olt.ctype && 9 != _olt.ctype && 31 != _olt.ctype || (_olv.houg += 3, _olv.kaih += 2, _olv.raig += 2);
                501 != _olt.ship_id && 506 != _olt.ship_id || (_olv.houg += 1, _olv.kaih += 1);
            }
            var _om6 = _olt.get_slotnums(30),
                _om7 = _olt.get_slotnums(410);
            return 1 == _olz && (_om6 + _om7 > 0 && (_olv.houg += 1, _olv.tyku += 3, _olv.kaih += 2), _om7 > 0 && (_olv.houg += 2)), _olv;
        };
    },
    28221: (_om8, _om9, _oma) => {
        'use strict';
        var _omb = null;
        defineModule(_om9);
        Object.defineProperty(_om9, '__esModule', {
            'value': !0
        }), _om9.getSlot510PersonalEffect = void 0;
        var _omc = _oma(74496);
        _om9.getSlot510PersonalEffect = function(_omd) {
            var _ome = null,
                _omf = new _omc.SlotItemEffectModel(),
                _omg = !1,
                _omh = new _omc.SlotItemEffectModel();
            if ('イギリス' == _omd.getCountryName() && (_omh.houg += 2, _omh.tais += 3, _omh.kaih += 2, _omh.saku += 2, _omg = !0), 88 == _omd.ctype && (_omf.houg += 4, _omf.kaih += 2, _omh.saku += 3, _omh.houm += 2, _omg = !0), 0 == _omg) return _omf;
            var _omi = _omd.get_slotnums(510);
            return _omf.add(_omh.multiply(_omi)), _omf;
        };
    },
    14830: (_omj, _omk, _oml) => {
        'use strict';
        var _omm = null;
        defineModule(_omk);
        Object.defineProperty(_omk, '__esModule', {
            'value': !0
        }), _omk.getSlot511PersonalEffect = void 0;
        var _omn = _oml(74496);
        _omk.getSlot511PersonalEffect = function(_omo) {
            var _omp = null,
                _omq = new _omn.SlotItemEffectModel();
            return 122 == _omo.ctype ? (_omq.raig += 3, _omq.kaih += 4) : 114 == _omo.ctype && (_omq.raig += 1, _omq.kaih += 2), _omq;
        };
    },
    54047: (_omr, _oms, _omt) => {
        'use strict';
        var _omu = null;
        defineModule(_oms);
        Object.defineProperty(_oms, '__esModule', {
            'value': !0
        }), _oms.getSlot517PersonalEffect = void 0;
        var _omv = _omt(74496);
        _oms.getSlot517PersonalEffect = function(_omw) {
            var _omx = null,
                _omy = new _omv.SlotItemEffectModel();
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
            }[_omw.ctype] && 74 != _omw.ctype && 77 != _omw.ctype && 85 != _omw.ctype && 117 != _omw.ctype && 104 != _omw.ctype || (_omy.houm += 1, _omy.kaih += 1, _omy.saku += 1), 38 == _omw.ctype && (_omy.houg += 1, _omy.houm += 1), 960 == _omw.ship_id ? (_omy.houg += 2, _omy.houm += 1, _omy.kaih += 3, _omy.saku += 2) : 955 != _omw.ship_id && 578 != _omw.ship_id && 961 != _omw.ship_id && 656 != _omw.ship_id && 464 != _omw.ship_id && 470 != _omw.ship_id && 419 != _omw.ship_id && 407 != _omw.ship_id && 235 != _omw.ship_id && 147 != _omw.ship_id || (_omy.houg += 1, _omy.houm += 1, _omy.kaih += 2, _omy.saku += 1);
            for (var _omz = [], _on0 = function(_on1) {
                    var _on2 = null,
                        _on3 = _omw.get_each_level_nums(_on1);
                    null == _omz[_on1] && (_omz[_on1] = []), _on3.forEach(function(_on4, _on5) {
                        var _on6 = null;
                        for (var _on7 = 1; _on7 <= _omw.SLOT_LEVEL_MAX; _on7++) null == _omz[_on1][_on7] && (_omz[_on1][_on7] = 0), _on5 >= _on7 && (_omz[_on1][_on7] += _on4);
                    });
                }, _on8 = 0, _on9 = [267, 366, 450, 517]; _on8 < _on9.length; _on8++) {
                _on0(_on9[_on8]);
            }
            var _ona = _omz[517];
            return _ona[7] > 0 && (_omy.houm += 1), _ona[8] > 0 && (_omy.kaih += 1), _ona[9] > 0 && (_omy.houg += 1), _ona[10] > 0 && (_omy.houm += 1), (_omz[267][3] > 0 || _omz[366][3] > 0) && (_omy.houg += 1, _omy.houm += 1, 38 == _omw.ctype && (_omy.houg += 1, _omy.houm += 1), _omz[450][4] > 0 && (_omy.houg += 1, _omy.houm += 1, _omy.tyku += 4, _omy.kaih += 3)), _omy;
        };
    },
    76054: (_onb, _onc, _ond) => {
        'use strict';
        var _one = null;
        defineModule(_onc);
        Object.defineProperty(_onc, '__esModule', {
            'value': !0
        }), _onc.getSlot518PersonalEffect = void 0;
        var _onf = _ond(74496);
        _onc.getSlot518PersonalEffect = function(_ong) {
            var _onh = null,
                _oni = new _onf.SlotItemEffectModel(),
                _onj = !1,
                _onk = new _onf.SlotItemEffectModel();
            if (34 != _ong.ctype && 56 != _ong.ctype || (_onk.houg += 1, _onk.tyku += 1, _onk.tais += 1, _onk.kaih += 1, _onj = !0), 16 == _ong.stype && (_onk.houg += 1, _onk.raig += 1, _onk.kaih += 1, _onj = !0), 622 != _ong.ship_id && 624 != _ong.ship_id && 623 != _ong.ship_id || (_onk.houg += 1, _onj = !0), 622 != _ong.ship_id && 624 != _ong.ship_id || (_onk.tyku += 1, _onj = !0), 624 == _ong.ship_id && (_onk.tais += 2, _onj = !0), 0 == _onj) return _oni;
            var _onl = _ong.get_slotnums(518);
            return _oni.add(_onk.multiply(_onl)), _oni;
        };
    },
    93053: (_onm, _onn, _ono) => {
        'use strict';
        var _onp = null;
        defineModule(_onn);
        Object.defineProperty(_onn, '__esModule', {
            'value': !0
        }), _onn.getSlot519PersonalEffect = void 0;
        var _onq = _ono(74496);
        _onn.getSlot519PersonalEffect = function(_onr) {
            var _ons = null,
                _ont = new _onq.SlotItemEffectModel();
            return 122 == _onr.ctype && (_ont.houm += 2, _ont.kaih += 2), 114 == _onr.ctype && (_ont.raig += 1, _ont.houm += 2, _ont.kaih += 2), _ont;
        };
    },
    81254: (_onu, _onv, _onw) => {
        'use strict';
        var _onx = null;
        defineModule(_onv);
        Object.defineProperty(_onv, '__esModule', {
            'value': !0
        }), _onv.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _ony = _onw(74496);
        _onv.getSlot51cmSeriesGunPersonalEffect = function(_onz) {
            var _oo0 = null,
                _oo1 = new _ony.SlotItemEffectModel(),
                _oo2 = !1,
                _oo3 = new _ony.SlotItemEffectModel(),
                _oo4 = _onz.get_slotnums(142),
                _oo5 = _onz.get_slotnums(460),
                _oo6 = _oo4 + _oo5;
            if (916 != _onz.ship_id && 911 != _onz.ship_id && 546 != _onz.ship_id || (_oo3.houg += 1, _oo3.houm += 1, _oo5 >= 1 && (_oo1.kaih += 1, _oo1.houm += 1), _oo2 = !0), 37 == _onz.ctype && _oo6 >= 1 && (_oo1.houg += 1, _oo1.houm += 2), 0 == _oo2) return _oo1;
            var _oo7 = _onz.get_slotnums(128) + _onz.get_slotnums(281);
            return _oo1.add(_oo3.multiply(_oo7)), _oo1;
        };
    },
    88792: (_oo8, _oo9, _ooa) => {
        'use strict';
        var _oob = null;
        defineModule(_oo9);
        Object.defineProperty(_oo9, '__esModule', {
            'value': !0
        }), _oo9.getSlot520PersonalEffect = void 0;
        var _ooc = _ooa(74496);
        _oo9.getSlot520PersonalEffect = function(_ood) {
            var _ooe = null,
                _oof = new _ooc.SlotItemEffectModel(),
                _oog = !1,
                _ooh = new _ooc.SlotItemEffectModel(),
                _ooi = 0,
                _ooj = 0,
                _ook = 0,
                _ool = _ood.get_slotnums(520);
            7 == _ood.ctype || 13 == _ood.ctype ? (_ooh.houg += 1, _oog = !0, _ooj = 1, _ook = 1) : 8 == _ood.ctype || 29 == _ood.ctype ? (_ooh.houg += 2, _ooh.kaih += 1, _oog = !0, _ooj = 2, _ook = 1) : 9 != _ood.ctype && 31 != _ood.ctype || (_ooh.houg += 3, _ooh.kaih += 1, _ooh.houm += 1, _oog = !0, _ooj = 2, _ook = 1, 2 == _ool && (_oof.houg += 2), _ool >= 3 && (_oof.houg += 4));
            var _oom = _ood.get_have_rader_nums().water_rader,
                _oon = 0,
                _ooo = 0;
            if (_ooj + _ook > 0) {
                for (var _oop = _ood.getSpItemDict_FukuhouTaikuHeisou(), _ooq = _ood.getSpItemDict_Tansou21GouDentan(), _oor = 0, _oos = _ood.have_slot_ids(); _oor < _oos.length; _oor++) {
                    var _oot = _oos[_oor],
                        _oou = parseInt(_oot);
                    null != _oop[_oou] ? (_oop[_oou] += _ood.get_slotnums(_oou), _oon += _ood.get_slotnums(_oou)) : null != _ooq[_oou] && (_ooq[_oou] += _ood.get_slotnums(_oou), _ooo += _ood.get_slotnums(_oou));
                }
                _oom > 0 && (1 == _ooj ? (_oof.houg += 2, _oof.raig += 2, _oof.kaih += 1, _oof.houm += 1) : 2 == _ooj && (_oof.houg += 3, _oof.raig += 2, _oof.kaih += 2, _oof.houm += 1)), _oon > 0 && 1 == _ook && (_oof.houg += 1, _oof.tyku += 4, _oof.kaih += 4, _oof.houm += 1);
            }
            if (269 == _ood.ship_id || 265 == _ood.ship_id || 319 == _ood.ship_id ? (2 == _ool && (_oof.houg += 2), _ool >= 3 && (_oof.houg += 4)) : 501 != _ood.ship_id && 506 != _ood.ship_id && 502 != _ood.ship_id && 507 != _ood.ship_id && 503 != _ood.ship_id && 504 != _ood.ship_id || (_ooh.houg += 1, _oog = !0, _oom >= 1 && (_oof.houg += 1, _oof.kaih += 1, _oof.houm += 2), _ooo >= 1 && (_oof.houg += 1, _oof.tyku += 3, _oof.kaih += 2, _oof.houm += 1), _ood.get_slotnums(410) > 0 && (_oof.houg += 2, _oof.tyku += 3, _oof.kaih += 2, _oof.houm += 1), _ooi = 1), 502 == _ood.ship_id || 269 == _ood.ship_id || 265 == _ood.ship_id || 319 == _ood.ship_id ? (_ooh.houg += 1, _ooh.houm += 1, _oog = !0) : 507 == _ood.ship_id && (_ooh.houg += 1, _ooh.houm += 2, _ooh.tyku += 1, _oog = !0), _oog && _oof.add(_ooh.multiply(_ool)), 0 == _ooi) return _oof;
            var _oov = _ood.get_each_level_over_nums([520]),
                _oow = _oov[520][7],
                _oox = _oov[520][10];
            return 1 == _ooi && (_oow > 0 && (_oof.houg += 1 * _oow), _oox > 0 && (_oof.houm += 1 * _oox)), _oof;
        };
    },
    33242: (_ooy, _ooz, _op0) => {
        'use strict';
        var _op1 = null;
        defineModule(_ooz);
        Object.defineProperty(_ooz, '__esModule', {
            'value': !0
        }), _ooz.getSlot521PersonalEffect = void 0;
        var _op2 = _op0(74496);
        _ooz.getSlot521PersonalEffect = function(_op3) {
            var _op4 = null,
                _op5 = new _op2.SlotItemEffectModel(),
                _op6 = !1,
                _op7 = new _op2.SlotItemEffectModel(),
                _op8 = 0;
            if (52 == _op3.ctype && (_op8 = 1), 183 == _op3.ship_id ? (_op7.houg += 1, _op7.houm += 1, _op7.saku += 2, _op7.kaih += 2, _op6 = !0) : 321 == _op3.ship_id ? (_op7.houg += 2, _op7.houm += 2, _op7.saku += 3, _op7.kaih += 3, _op6 = !0) : 507 == _op3.ship_id && (_op7.houg += 3, _op7.tyku += 1, _op7.houm += 3, _op7.saku += 2, _op7.kaih += 2, _op6 = !0, _op8 = 1), _op6) {
                var _op9 = _op3.get_slotnums(521);
                _op5.add(_op7.multiply(_op9));
            }
            if (0 == _op8) return _op5;
            var _opa = _op3.get_each_level_over_nums([521])[521];
            return 1 == _op8 && (_opa[1] >= 1 && (_op5.houm += 1 * _opa[1]), _opa[2] >= 1 && (_op5.kaih += 1 * _opa[2]), _opa[3] >= 1 && (_op5.saku += 1 * _opa[3], _op5.raig += 1 * _opa[3]), _opa[4] >= 1 && (_op5.houg += 1 * _opa[4]), _opa[6] >= 1 && (_op5.houm += 1 * _opa[6]), _opa[8] >= 1 && (_op5.saku += 1 * _opa[8]), _opa[10] >= 1 && (_op5.houm += 1 * _opa[10])), _op5;
        };
    },
    23035: (_opb, _opc, _opd) => {
        'use strict';
        var _ope = null;
        defineModule(_opc);
        Object.defineProperty(_opc, '__esModule', {
            'value': !0
        }), _opc.getSlot58PersonalEffect = void 0;
        var _opf = _opd(74496);
        _opc.getSlot58PersonalEffect = function(_opg) {
            var _oph = null,
                _opi = new _opf.SlotItemEffectModel(),
                _opj = new _opf.SlotItemEffectModel();
            if ('しまかぜ' != _opg.yomi && 4 != _opg.stype && 54 != _opg.ctype || (_opj.raig = 1), !_opj.exists()) return _opi;
            var _opk = _opg.get_slotnums(58);
            return _opi = _opj.multiply(_opk);
        };
    },
    47169: (_opl, _opm, _opn) => {
        'use strict';
        var _opo = null;
        defineModule(_opm);
        Object.defineProperty(_opm, '__esModule', {
            'value': !0
        }), _opm.getSlot59PersonalEffect = void 0;
        var _opp = _opn(74496);
        _opm.getSlot59PersonalEffect = function(_opq) {
            var _opr = null,
                _ops = new _opp.SlotItemEffectModel();
            return 501 != _opq.ship_id && 506 != _opq.ship_id && 502 != _opq.ship_id && 507 != _opq.ship_id || (_ops.tyku += 1, _ops.kaih += 1), _ops;
        };
    },
    87845: (_opt, _opu, _opv) => {
        'use strict';
        var _opw = null;
        defineModule(_opu);
        Object.defineProperty(_opu, '__esModule', {
            'value': !0
        }), _opu.getSlot5PersonalEffect = void 0;
        var _opx = _opv(74496);
        _opu.getSlot5PersonalEffect = function(_opy) {
            var _opz = null,
                _oq0 = new _opx.SlotItemEffectModel(),
                _oq1 = !1,
                _oq2 = new _opx.SlotItemEffectModel();
            if (52 != _opy.ctype && 9 != _opy.ctype || (_oq2.houg += 1, 52 == _opy.ctype && (_oq2.houg = _oq2.houg + 1), _oq1 = !0), 0 == _oq1) return _oq0;
            var _oq3 = _opy.get_slotnums(5);
            return _oq0.add(_oq2.multiply(_oq3)), _oq0;
        };
    },
    92253: (_oq4, _oq5, _oq6) => {
        'use strict';
        var _oq7 = null;
        defineModule(_oq5);
        Object.defineProperty(_oq5, '__esModule', {
            'value': !0
        }), _oq5.getSlot60_154_219PersonalEffec = void 0;
        var _oq8 = _oq6(74496);
        _oq5.getSlot60_154_219PersonalEffec = function(_oq9) {
            var _oqa = null,
                _oqb = new _oq8.SlotItemEffectModel(),
                _oqc = !1,
                _oqd = new _oq8.SlotItemEffectModel();
            if ('じゅんよう' != _oq9.yomi && 'ひよう' != _oq9.yomi && 'ずいほう' != _oq9.yomi && 'ちとせ' != _oq9.yomi && 'ちよだ' != _oq9.yomi || (_oqd.houg += 1, _oqd.tyku += 1, _oqd.kaih += 1, _oqc = !0), 185 != _oq9.ship_id && 318 != _oq9.ship_id && 282 != _oq9.ship_id || (_oqd.houg += 1, _oqd.tyku += 1, _oqd.kaih += 1, _oqc = !0), 888 != _oq9.ship_id && 883 != _oq9.ship_id || (_oqd.houg += 2, _oqd.tyku += 1, _oqd.kaih += 2, _oqc = !0), 0 == _oqc) return _oqb;
            var _oqe = _oq9.get_slotnums(60) + _oq9.get_slotnums(154) + _oq9.get_slotnums(219);
            return _oqb.add(_oqd.multiply(_oqe)), _oqb;
        };
    },
    2578: (_oqf, _oqg, _oqh) => {
        'use strict';
        var _oqi = null;
        defineModule(_oqg);
        Object.defineProperty(_oqg, '__esModule', {
            'value': !0
        }), _oqg.getSlot61PersonalEffect2 = _oqg.getSlot61PersonalEffect = void 0;
        var _oqj = _oqh(74496);
        _oqg.getSlot61PersonalEffect = function(_oqk) {
            var _oql = null,
                _oqm = new _oqj.SlotItemEffectModel();
            if (553 == _oqk.ship_id) _oqm.houg = 3, _oqm.kaih = 2, _oqm.souk = 1, _oqm.houm = 5, _oqm.leng = 1;
            else {
                if (554 == _oqk.ship_id) _oqm.houg = 3, _oqm.kaih = 3, _oqm.souk = 3, _oqm.houm = 5, _oqm.leng = 1;
                else {
                    if (196 == _oqk.ship_id) _oqm.houm = 5, _oqm.leng = 1;
                    else {
                        if (197 != _oqk.ship_id) return _oqm;
                        _oqm.houm = 5, _oqm.leng = 1;
                    }
                }
            }
            return _oqm;
        }, _oqg.getSlot61PersonalEffect2 = function(_oqn) {
            var _oqo = null,
                _oqp = new _oqj.SlotItemEffectModel();
            if (null == _oqn.have_slots_dict[61]) return _oqp;
            for (var _oqq = 0, _oqr = 0, _oqs = _oqn.have_slots_dict[61]; _oqr < _oqs.length; _oqr++) {
                var _oqt = _oqs[_oqr].level;
                _oqq < _oqt && (_oqq = _oqt);
            }
            return 0 == _oqq || ('そうりゅう' == _oqn.yomi ? (_oqp.houg += 3, _oqp.saku += 3) : 'ひりゅう' == _oqn.yomi && (_oqp.houg += 2, _oqp.saku += 2), 508 != _oqn.ship_id && 509 != _oqn.ship_id && 560 != _oqn.ship_id || (_oqp.houg += 1, _oqp.saku += 1), _oqq >= 8 && 197 == _oqn.ship_id && (_oqp.houg += 1, _oqp.saku += 1)), _oqp;
        };
    },
    17143: (_oqu, _oqv, _oqw) => {
        'use strict';
        var _oqx = null;
        defineModule(_oqv);
        Object.defineProperty(_oqv, '__esModule', {
            'value': !0
        }), _oqv.getSlot63PersonalEffect = void 0;
        var _oqy = _oqw(74496);
        _oqv.getSlot63PersonalEffect = function(_oqz) {
            var _or0 = null,
                _or1 = new _oqy.SlotItemEffectModel(),
                _or2 = new _oqy.SlotItemEffectModel();
            1 != _oqz.ctype && 5 != _oqz.ctype && 10 != _oqz.ctype || (_or2.tyku += 1), 'ゆうだち' == _oqz.yomi && (_or2.houg += 1, _or2.tyku += 1, _or2.kaih += 2), 145 == _oqz.ship_id || 961 == _oqz.ship_id ? _or2.houg += 1 : 144 == _oqz.ship_id ? _or2.raig += 1 : 469 == _oqz.ship_id ? _or2.kaih += 2 : 242 == _oqz.ship_id || 497 == _oqz.ship_id || 244 == _oqz.ship_id || 498 == _oqz.ship_id ? _or2.kaih += 1 : 627 == _oqz.ship_id ? _or2.houg += 1 : 903 != _oqz.ship_id && 908 != _oqz.ship_id || (_or2.houg += 2);
            var _or3 = !0;
            if (_or2.exists() || (_or3 = !1), 0 == _or3) return _or1;
            var _or4 = _oqz.get_slotnums(63);
            return _or1 = _or2.multiply(_or4);
        };
    },
    16164: (_or5, _or6, _or7) => {
        'use strict';
        var _or8 = null;
        defineModule(_or6);
        Object.defineProperty(_or6, '__esModule', {
            'value': !0
        }), _or6.getSlot67PersonalEffect = void 0;
        var _or9 = _or7(74496);
        _or6.getSlot67PersonalEffect = function(_ora) {
            var _orb = null,
                _orc = new _or9.SlotItemEffectModel(),
                _ord = new _or9.SlotItemEffectModel();
            if (13 != _ora.stype && 14 != _ora.stype && (_ord.raig = -5), !_ord.exists()) return _orc;
            var _ore = _ora.get_slotnums(67);
            return _orc = _ord.multiply(_ore);
        };
    },
    35023: (_orf, _org, _orh) => {
        'use strict';
        var _ori = null;
        defineModule(_org);
        Object.defineProperty(_org, '__esModule', {
            'value': !0
        }), _org.getSlot69PersonalEffect = void 0;
        var _orj = _orh(74496);
        _org.getSlot69PersonalEffect = function(_ork) {
            var _orl = null,
                _orm = new _orj.SlotItemEffectModel(),
                _orn = !1,
                _oro = new _orj.SlotItemEffectModel();
            if (554 == _ork.ship_id || 646 == _ork.ship_id ? (_oro.houg += 1, _oro.tais += 2, _orn = !0) : 553 == _ork.ship_id && (_oro.houg += 1, _oro.tais += 1, _orn = !0), 0 == _orn) return _orm;
            var _orp = _ork.get_slotnums(69);
            return _orm.add(_oro.multiply(_orp)), _orm;
        };
    },
    78707: (_orq, _orr, _ors) => {
        'use strict';
        var _ort = null;
        defineModule(_orr);
        Object.defineProperty(_orr, '__esModule', {
            'value': !0
        }), _orr.getSlot70PersonalEffect = void 0;
        var _oru = _ors(74496);
        _orr.getSlot70PersonalEffect = function(_orv) {
            var _orw = null,
                _orx = new _oru.SlotItemEffectModel(),
                _ory = !1,
                _orz = new _oru.SlotItemEffectModel();
            if ('やましおまる' == _orv.yomi && (_orz.houg += 1, _orz.tais += 1, _ory = !0), 0 == _ory) return _orx;
            var _os0 = _orv.get_slotnums(70);
            return _orx.add(_orz.multiply(_os0)), _orx;
        };
    },
    44680: function(_os1, _os2, _os3) {
        'use strict';
        var _os4 = null;
        var _os5 = this && this.__importDefault || function(_os6) {
            var _os7 = null;
            return _os6 && _os6.__esModule ? _os6 : {
                'default': _os6
            };
        };
        defineModule(_os2);
        Object.defineProperty(_os2, '__esModule', {
            'value': !0
        }), _os2.getSlot78PersonalEffect = void 0;
        var _os8 = _os3(74496),
            _os9 = _os5(_os3(18622));
        _os2.getSlot78PersonalEffect = function(_osa) {
            var _osb = null,
                _osc = new _os8.SlotItemEffectModel(),
                _osd = !1,
                _ose = new _os8.SlotItemEffectModel(),
                _osf = 0,
                _osg = 0,
                _osh = !1;
            if (48 == _osa.ctype && (_ose.houg += 1, _ose.kaih += 1, _osf = 1, _osg = 1, _osh = !0, _osd = !0), 0 == _osd) return _osc;
            var _osi = _osa.get_slotnums(78);
            _osc.add(_ose.multiply(_osi));
            var _osj = 0,
                _osk = _osa.get_each_level_nums(78),
                _osl = 0;
            if (_osh) {
                _osk.map(function(_osm, _osn) {
                    _osn >= 7 && (_osl += _osm);
                });
                for (var _oso = 0, _osp = _osa.have_slot_ids(); _oso < _osp.length; _oso++) {
                    var _osq = _osp[_oso],
                        _osr = _os9.default.model.slot.getMst(_osq),
                        _oss = _osr.equipType;
                    12 != _oss && 13 != _oss || _osr.sakuteki >= 5 && (_osj += _osa.get_slotnums(parseInt(_osq)));
                }
            }
            if (1 == _osf && _osj > 0 && (_osc.houg += 2, _osc.kaih += 2, _osc.raig += 2), 1 == _osg) {
                _osc.houg += 1 * _osl;
                var _ost = _osk[10];
                _osc.souk += 1 * _ost;
            }
            return _osc;
        };
    },
    45749: (_osu, _osv, _osw) => {
        'use strict';
        var _osx = null;
        defineModule(_osv);
        Object.defineProperty(_osv, '__esModule', {
            'value': !0
        }), _osv.getSlot79And81PersonalEffect = void 0;
        var _osy = _osw(74496);
        _osv.getSlot79And81PersonalEffect = function(_osz) {
            var _ot0 = null,
                _ot1 = new _osy.SlotItemEffectModel(),
                _ot2 = new _osy.SlotItemEffectModel();
            if (553 == _osz.ship_id) _ot2.houg = 3;
            else {
                if (82 == _osz.ship_id) _ot2.houg = 2;
                else {
                    if (88 == _osz.ship_id) _ot2.houg = 2;
                    else {
                        if (554 == _osz.ship_id) _ot2.houg = 3;
                        else {
                            if (411 == _osz.ship_id) _ot2.houg = 2;
                            else {
                                if (412 != _osz.ship_id) return _ot1;
                                _ot2.houg = 2;
                            }
                        }
                    }
                }
            }
            var _ot3 = _osz.get_slotnums(79) + _osz.get_slotnums(81);
            return _ot1 = _ot2.multiply(_ot3);
        };
    },
    37334: (_ot4, _ot5, _ot6) => {
        'use strict';
        var _ot7 = null;
        defineModule(_ot5);
        Object.defineProperty(_ot5, '__esModule', {
            'value': !0
        }), _ot5.getSlot82PersonalEffect = void 0;
        var _ot8 = _ot6(74496);
        _ot5.getSlot82PersonalEffect = function(_ot9) {
            var _ota = null,
                _otb = new _ot8.SlotItemEffectModel(),
                _otc = new _ot8.SlotItemEffectModel();
            if (76 == _ot9.ctype && (_otc.tais = 1, _otc.kaih = 1), !_otc.exists()) return _otb;
            var _otd = _ot9.get_slotnums(82);
            return _otb = _otc.multiply(_otd);
        };
    },
    2603: function(_ote, _otf, _otg) {
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
            'value': !0
        }), _otf.getSlot84PersonalEffect = void 0;
        var _otl = _otg(74496),
            _otm = _oti(_otg(18622));
        _otf.getSlot84PersonalEffect = function(_otn) {
            var _oto = null,
                _otp = new _otl.SlotItemEffectModel(),
                _otq = _otn.get_each_level_nums(84),
                _otr = 0,
                _ots = 0;
            if (_otq.forEach(function(_ott, _otu) {
                    _otu >= 4 && (_otr += _ott), _otu >= 7 && (_ots += _ott);
                }), 0 == _otr) return _otp;
            for (var _otv = 0, _otw = 0, _otx = _otn.have_slot_ids(); _otw < _otx.length; _otw++) {
                var _oty = _otx[_otw],
                    _otz = _otm.default.model.slot.getMst(_oty),
                    _ou0 = _otz.equipType;
                12 != _ou0 && 13 != _ou0 || (_otz.sakuteki >= 5 && _otn.get_slotnums(parseInt(_oty)), _otz.taiku >= 2 && (_otv += _otn.get_slotnums(parseInt(_oty))));
            }
            var _ou1 = _otn.getCountryName();
            _otr >= 1 && (_otp.tyku += 1 * _otr, _otp.kaih += 1 * _otr, 'ドイツ' != _ou1 && 'イタリア' != _ou1 || (_otp.tyku += 1 * _otr, _otp.kaih += 1 * _otr), _otv >= 1 && (_otp.tyku += 1)), _ots >= 1 && (_otp.tyku += 1 * _ots, _otp.houg += 1 * _ots);
            var _ou2 = _otq[10];
            return _ou2 >= 1 && (_otp.tyku += 1 * _ou2, _otp.kaih += 1 * _ou2, 'ドイツ' != _ou1 && 'イタリア' != _ou1 || (_otp.houg += 1)), _otp;
        };
    },
    90725: (_ou3, _ou4, _ou5) => {
        'use strict';
        var _ou6 = null;
        defineModule(_ou4);
        Object.defineProperty(_ou4, '__esModule', {
            'value': !0
        }), _ou4.getSlot85PersonalEffect = void 0;
        var _ou7 = _ou5(74496);
        _ou4.getSlot85PersonalEffect = function(_ou8) {
            var _ou9 = null,
                _oua = new _ou7.SlotItemEffectModel(),
                _oub = _ou8.get_each_level_over_nums([85]),
                _ouc = _oub[85][6],
                _oud = _oub[85][8],
                _oue = _oub[85][10],
                _ouf = _ou8.get_have_rader_nums().air_rader,
                _oug = _ou8.getCountryName();
            return _ouc > 0 && (_oua.tyku += 1 * _ouc, _oua.kaih += 1 * _ouc, _ouf >= 1 && (_oua.tyku += 2)), _oud > 0 && (_oua.houg += 1 * _oud, 'ドイツ' != _oug && 'イタリア' != _oug || (_oua.tyku += 1 * _oud, _oua.kaih += 1 * _oud)), _oue > 0 && (_oua.kaih += 1 * _oue, _oua.houm += 1 * _oue, 'ドイツ' != _oug && 'イタリア' != _oug || (_oua.houg += 1)), _oua;
        };
    },
    29180: (_ouh, _oui, _ouj) => {
        'use strict';
        var _ouk = null;
        defineModule(_oui);
        Object.defineProperty(_oui, '__esModule', {
            'value': !0
        }), _oui.getSlot87PersonalEffect = void 0;
        var _oul = _ouj(74496);
        _oui.getSlot87PersonalEffect = function(_oum) {
            var _oun = null,
                _ouo = new _oul.SlotItemEffectModel(),
                _oup = !1,
                _ouq = new _oul.SlotItemEffectModel(),
                _our = 0;
            if (951 == _oum.ship_id ? (_ouq.houg += 1, _ouq.kaih += 1, _ouq.raig += 1, _ouq.houm += 1, _oup = !0, _our = 1) : 181 == _oum.ship_id || 316 == _oum.ship_id || 50 == _oum.ship_id || 229 == _oum.ship_id || 961 == _oum.ship_id ? _our = 2 : 591 != _oum.ship_id && 592 != _oum.ship_id && 593 != _oum.ship_id && 954 != _oum.ship_id || (_ouo.kaih += 2, _ouo.raig += 1, _our = 3), 38 != _oum.ctype && 54 != _oum.ctype && 101 != _oum.ctype || (_our = 4), _oup) {
                var _ous = _oum.get_slotnums(87);
                _ouo.add(_ouq.multiply(_ous));
            }
            if (0 == _our) return _ouo;
            var _out = _oum.get_each_level_nums(87),
                _ouu = [];
            return _our > 0 && _out.forEach(function(_ouv, _ouw) {
                var _oux = null;
                for (var _ouy = 1; _ouy <= _oum.SLOT_LEVEL_MAX; _ouy++) null == _ouu[_ouy] && (_ouu[_ouy] = 0), _ouw >= _ouy && (_ouu[_ouy] += _ouv);
            }), 1 == _our ? (_ouu[6] >= 1 && (_ouo.tyku += 1 * _ouu[6]), _ouu[7] >= 1 && (_ouo.kaih += 1 * _ouu[7]), _ouu[8] >= 1 && (_ouo.raig += 1 * _ouu[8]), _ouu[9] >= 1 && (_ouo.houg += 1 * _ouu[9]), _ouu[10] >= 1 && (_ouo.houm += 1 * _ouu[10])) : 2 == _our ? (_ouu[6] >= 1 && (_ouo.kaih += 1 * _ouu[6]), _ouu[7] >= 1 && (_ouo.raig += 1 * _ouu[7]), _ouu[8] >= 1 && (_ouo.houg += 1 * _ouu[8]), _ouu[9] >= 1 && (_ouo.houm += 1 * _ouu[9]), _ouu[10] >= 1 && (_ouo.kaih += 1 * _ouu[10])) : 3 == _our ? (_ouu[6] > 0 && (_ouo.kaih += 1), _ouu[8] > 0 && (_ouo.raig += 1), _ouu[10] > 0 && (_ouo.houg += 1)) : 4 == _our && (_ouu[7] >= 1 && (_ouo.kaih += 1 * _ouu[7]), _ouu[8] >= 1 && (_ouo.raig += 1 * _ouu[8]), _ouu[10] >= 1 && (_ouo.houm += 1 * _ouu[10])), _ouo;
        };
    },
    68685: function(_ouz, _ov0, _ov1) {
        'use strict';
        var _ov2 = null;
        var _ov3 = this && this.__importDefault || function(_ov4) {
            var _ov5 = null;
            return _ov4 && _ov4.__esModule ? _ov4 : {
                'default': _ov4
            };
        };
        defineModule(_ov0);
        Object.defineProperty(_ov0, '__esModule', {
            'value': !0
        }), _ov0.getSlot90PersonalEffect = void 0;
        var _ov6 = _ov1(74496),
            _ov7 = _ov3(_ov1(18622));
        _ov0.getSlot90PersonalEffect = function(_ov8) {
            var _ov9 = null,
                _ova = new _ov6.SlotItemEffectModel(),
                _ovb = new _ov6.SlotItemEffectModel();
            if (142 == _ov8.ship_id ? (_ovb.houg += 2, _ovb.kaih += 1) : 295 == _ov8.ship_id || 416 == _ov8.ship_id || 417 == _ov8.ship_id ? _ovb.houg += 1 : 264 == _ov8.ship_id ? (_ovb.houg += 1, _ovb.tyku += 1) : 501 != _ov8.ship_id && 506 != _ov8.ship_id && 502 != _ov8.ship_id && 507 != _ov8.ship_id || (_ovb.houg += 1), 7 != _ov8.ctype && 13 != _ov8.ctype && 8 != _ov8.ctype && 29 != _ov8.ctype && 9 != _ov8.ctype && 31 != _ov8.ctype || (_ovb.houg += 1), _ovb.exists()) {
                var _ovc = _ov8.get_slotnums(90);
                _ova = _ovb.multiply(_ovc);
            }
            var _ovd = [];
            if ('あおば' == _ov8.yomi && (_ovd[1] = 1), 13 != _ov8.ctype && 7 != _ov8.ctype || (_ovd[2] = 1), 0 == _ovd.length) return _ova;
            for (var _ove = 0, _ovf = 0, _ovg = 0, _ovh = _ov8.have_slot_ids(); _ovg < _ovh.length; _ovg++) {
                var _ovi = _ovh[_ovg],
                    _ovj = _ov7.default.model.slot.getMst(_ovi),
                    _ovk = _ovj.equipType;
                12 != _ovk && 13 != _ovk || (_ovj.sakuteki >= 5 && (_ove += _ov8.get_slotnums(parseInt(_ovi))), _ovj.taiku >= 2 && (_ovf += _ov8.get_slotnums(parseInt(_ovi))));
            }
            return _ovf > 0 && null != _ovd[1] && (_ova.tyku += 5, _ova.kaih += 2), _ove > 0 && null != _ovd[2] && (_ova.houg += 3, _ova.kaih += 2, _ova.raig += 2), _ova;
        };
    },
    26078: (_ovl, _ovm, _ovn) => {
        'use strict';
        var _ovo = null;
        defineModule(_ovm);
        Object.defineProperty(_ovm, '__esModule', {
            'value': !0
        }), _ovm.getSlot93PersonalEffect = void 0;
        var _ovp = _ovn(74496);
        _ovm.getSlot93PersonalEffect = function(_ovq) {
            var _ovr = null,
                _ovs = new _ovp.SlotItemEffectModel();
            return 'そうりゅう' == _ovq.yomi ? _ovs.houg = 1 : 'ひりゅう' == _ovq.yomi && (_ovs.houg = 3), _ovs;
        };
    },
    20829: (_ovt, _ovu, _ovv) => {
        'use strict';
        var _ovw = null;
        defineModule(_ovu);
        Object.defineProperty(_ovu, '__esModule', {
            'value': !0
        }), _ovu.getSlot94PersonalEffect = void 0;
        var _ovx = _ovv(74496);
        _ovu.getSlot94PersonalEffect = function(_ovy) {
            var _ovz = null,
                _ow0 = new _ovx.SlotItemEffectModel();
            if (196 == _ovy.ship_id) _ow0.houg = 7;
            else {
                if (197 != _ovy.ship_id) return _ow0;
                _ow0.houg = 3;
            }
            return _ow0;
        };
    },
    6880: (_ow1, _ow2, _ow3) => {
        'use strict';
        var _ow4 = null;
        defineModule(_ow2);
        Object.defineProperty(_ow2, '__esModule', {
            'value': !0
        }), _ow2.getSlot99PersonalEffect = void 0;
        var _ow5 = _ow3(74496);
        _ow2.getSlot99PersonalEffect = function(_ow6) {
            var _ow7 = null,
                _ow8 = new _ow5.SlotItemEffectModel();
            return 'そうりゅう' == _ow6.yomi ? _ow8.houg = 4 : 'ひりゅう' == _ow6.yomi && (_ow8.houg = 1), _ow8;
        };
    },
    21403: (_ow9, _owa, _owb) => {
        'use strict';
        var _owc = null;
        defineModule(_owa);
        Object.defineProperty(_owa, '__esModule', {
            'value': !0
        }), _owa.getSlotCorsairMkIIPersonalEffect = void 0;
        var _owd = _owb(74496);
        _owa.getSlotCorsairMkIIPersonalEffect = function(_owe) {
            var _owf = null,
                _owg = new _owd.SlotItemEffectModel(),
                _owh = !1,
                _owi = new _owd.SlotItemEffectModel();
            112 == _owe.ctype && (_owi.houg += 1, _owi.tyku += 1, _owi.kaih += 2, _owh = !0);
            var _owj = _owe.getCountryName();
            if (67 == _owe.ctype || 78 == _owe.ctype || 82 == _owe.ctype || 88 == _owe.ctype || 108 == _owe.ctype || 112 == _owe.ctype ? (_owi.houg += 1, _owi.tyku += 2, _owi.kaih += 3, _owh = !0) : 'アメリカ' == _owj && (_owi.houg += 1, _owi.tyku += 1, _owi.kaih += 2, _owh = !0), 0 == _owh) return _owg;
            var _owk = _owe.get_slotnums(434) + _owe.get_slotnums(435);
            return _owg.add(_owi.multiply(_owk)), _owg;
        };
    },
    9195: (_owl, _owm, _own) => {
        'use strict';
        var _owo = null;
        defineModule(_owm);
        Object.defineProperty(_owm, '__esModule', {
            'value': !0
        }), _owm.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _owp = _own(74496);
        _owm.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_owq) {
            var _owr = null,
                _ows = new _owp.SlotItemEffectModel(),
                _owt = !1,
                _owu = new _owp.SlotItemEffectModel();
            if (56 == _owq.ctype && (_owu.tais += 3, _owu.kaih += 2, _owt = !0), 0 == _owt) return _ows;
            var _owv = _owq.get_slotnums(44) + _owq.get_slotnums(45) + _owq.get_slotnums(287) + _owq.get_slotnums(288);
            return _ows.add(_owu.multiply(_owv)), _ows;
        };
    },
    93297: (_oww, _owx, _owy) => {
        'use strict';
        var _owz = null;
        defineModule(_owx);
        Object.defineProperty(_owx, '__esModule', {
            'value': !0
        }), _owx.getSlotDomesticSonarPersonalEffect = void 0;
        var _ox0 = _owy(74496);
        _owx.getSlotDomesticSonarPersonalEffect = function(_ox1) {
            var _ox2 = null,
                _ox3 = new _ox0.SlotItemEffectModel();
            return 56 == _ox1.ctype && (_ox3.tais += 2, _ox3.kaih += 3), _ox3;
        };
    },
    45482: (_ox4, _ox5, _ox6) => {
        'use strict';
        var _ox7 = null;
        defineModule(_ox5);
        Object.defineProperty(_ox5, '__esModule', {
            'value': !0
        }), _ox5.getSlotOtherSuiseiPersonalEffect = void 0;
        var _ox8 = _ox6(74496);
        _ox5.getSlotOtherSuiseiPersonalEffect = function(_ox9) {
            var _oxa = null,
                _oxb = new _ox8.SlotItemEffectModel(),
                _oxc = new _ox8.SlotItemEffectModel();
            if (553 == _ox9.ship_id) _oxc.houg = 2;
            else {
                if (554 != _ox9.ship_id) return _oxb;
                _oxc.houg = 2;
            }
            var _oxd = _ox9.get_slotnums(24) + _ox9.get_slotnums(57) + _ox9.get_slotnums(111);
            return _oxb = _oxc.multiply(_oxd);
        };
    },
    45927: (_oxe, _oxf, _oxg) => {
        'use strict';
        var _oxh = null;
        defineModule(_oxf);
        Object.defineProperty(_oxf, '__esModule', {
            'value': !0
        }), _oxf.getSlotSmokePersonalEffect = void 0;
        var _oxi = _oxg(74496);
        _oxf.getSlotSmokePersonalEffect = function(_oxj) {
            var _oxk = null,
                _oxl = new _oxi.SlotItemEffectModel(),
                _oxm = !1,
                _oxn = new _oxi.SlotItemEffectModel();
            if (959 == _oxj.ship_id && (_oxn.kaih += 4, _oxm = !0), 'ジョンストン' == _oxj.yomi || 'サミュエル・B・ロバーツ' == _oxj.yomi || 'せんだい' == _oxj.yomi || 'はるかぜ' == _oxj.yomi || 'かみかぜ' == _oxj.yomi || 'しきなみ' == _oxj.yomi || 'うらなみ' == _oxj.yomi || 'あおば' == _oxj.yomi ? (_oxn.kaih += 3, _oxm = !0) : 'いなづま' != _oxj.yomi && 'はぐろ' != _oxj.yomi && 'はつしも' != _oxj.yomi && 'かすみ' != _oxj.yomi && 'ふぶき' != _oxj.yomi && 'あたご' != _oxj.yomi && 'あまぎり' != _oxj.yomi && 'はまなみ' != _oxj.yomi || (_oxn.kaih += 2, _oxm = !0), 0 == _oxm) return _oxl;
            var _oxo = _oxj.get_slotnums(500) + _oxj.get_slotnums(501);
            return _oxl.add(_oxn.multiply(_oxo)), _oxl;
        };
    },
    29805: (_oxp, _oxq, _oxr) => {
        'use strict';
        var _oxs = null;
        defineModule(_oxq);
        Object.defineProperty(_oxq, '__esModule', {
            'value': !0
        }), _oxq.getSlotType10PersonalEffect = void 0;
        var _oxt = _oxr(74496);
        _oxq.getSlotType10PersonalEffect = function(_oxu) {
            var _oxv = null,
                _oxw = new _oxt.SlotItemEffectModel();
            return 662 == _oxu.ship_id || 663 == _oxu.ship_id || 668 == _oxu.ship_id ? (_oxw.houg += 2, _oxw.kaih += 1, _oxw.tais += 3) : 501 != _oxu.ship_id && 506 != _oxu.ship_id && 502 != _oxu.ship_id && 507 != _oxu.ship_id || (_oxw.houg += 2), _oxw;
        };
    },
    58913: (_oxx, _oxy, _oxz) => {
        'use strict';
        var _oy0 = null;
        defineModule(_oxy);
        Object.defineProperty(_oxy, '__esModule', {
            'value': !0
        }), _oxy.getSlotType11PersonalEffect = void 0;
        var _oy1 = _oxz(74496);
        _oxy.getSlotType11PersonalEffect = function(_oy2) {
            var _oy3 = null,
                _oy4 = new _oy1.SlotItemEffectModel();
            return 662 == _oy2.ship_id || 663 == _oy2.ship_id || 668 == _oy2.ship_id ? (_oy4.houg += 1, _oy4.kaih += 1, _oy4.tais += 1) : 501 != _oy2.ship_id && 506 != _oy2.ship_id && 502 != _oy2.ship_id && 507 != _oy2.ship_id || (_oy4.houg += 1, _oy4.kaih += 1), _oy4;
        };
    },
    55421: (_oy5, _oy6, _oy7) => {
        'use strict';
        var _oy8 = null;
        defineModule(_oy6);
        Object.defineProperty(_oy6, '__esModule', {
            'value': !0
        }), _oy6.getSlotType25PersonalEffect = void 0;
        var _oy9 = _oy7(74496);
        _oy6.getSlotType25PersonalEffect = function(_oya) {
            var _oyb = null,
                _oyc = new _oy9.SlotItemEffectModel();
            return 662 == _oya.ship_id ? (_oyc.tais += 4, _oyc.kaih += 1) : 663 != _oya.ship_id && 668 != _oya.ship_id || (_oyc.tais += 3, _oyc.kaih += 1), _oyc;
        };
    },
    272: function(_oyd, _oye, _oyf) {
        'use strict';
        var _oyg = null;
        var _oyh = this && this.__importDefault || function(_oyi) {
            var _oyj = null;
            return _oyi && _oyi.__esModule ? _oyi : {
                'default': _oyi
            };
        };
        defineModule(_oye);
        Object.defineProperty(_oye, '__esModule', {
            'value': !0
        }), _oye.getSlotType9PersonalEffect = void 0;
        var _oyk = _oyf(74496),
            _oyl = _oyh(_oyf(18622));
        _oye.getSlotType9PersonalEffect = function(_oym) {
            var _oyn = null,
                _oyo = new _oyk.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_oym.stype]) return _oyo;
            for (var _oyp = 0, _oyq = 0, _oyr = _oym.have_slot_ids(); _oyq < _oyr.length; _oyq++) {
                var _oys = _oyr[_oyq];
                if (9 == _oyl.default.model.slot.getMst(_oys).equipType)
                    for (var _oyt = 0, _oyu = _oym.have_slots_dict[parseInt(_oys)]; _oyt < _oyu.length; _oyt++) {
                        var _oyv = _oyu[_oyt].level;
                        _oyp < _oyv && (_oyp = _oyv);
                    }
            }
            return _oyp >= 2 && (_oyo.saku += 1), _oyp >= 4 && (_oyo.houg += 1), _oyp >= 6 && (_oyo.saku += 1), _oyp >= 10 && (_oyo.houg += 1, _oyo.saku += 1), _oyo;
        };
    },
    54518: (_oyw, _oyx, _oyy) => {
        'use strict';
        var _oyz = null;
        defineModule(_oyx);
        Object.defineProperty(_oyx, '__esModule', {
            'value': !0
        }), _oyx.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _oz0 = _oyy(74496);
        _oyx.getSlot_16InchMkXRensouhou_PersonalEffect = function(_oz1) {
            var _oz2 = null,
                _oz3 = new _oz0.SlotItemEffectModel();
            if (93 == _oz1.ctype) {
                var _oz4 = _oz1.get_slotnums(330);
                _oz4 > 0 && (_oz3.houg = _oz3.houg + 1 * _oz4);
                var _oz5 = _oz1.get_slotnums(331);
                _oz5 > 0 && (_oz3.houg = _oz3.houg + 1 * _oz5, 1496 != _oz1.ship_id && 918 != _oz1.ship_id || (_oz3.houg = _oz3.houg + 1 * _oz5, _oz3.kaih = _oz3.kaih + 1 * _oz5));
                var _oz6 = _oz1.get_slotnums(332);
                return _oz6 > 0 && (_oz3.houg = _oz3.houg + 1 * _oz6, 1496 != _oz1.ship_id && 918 != _oz1.ship_id || (_oz3.houg = _oz3.houg + 1 * _oz6, _oz3.kaih = _oz3.kaih + 1 * _oz6, _oz3.tyku = _oz3.tyku + 1 * _oz6)), _oz3;
            }
            var _oz7 = new _oz0.SlotItemEffectModel();
            if (19 == _oz1.ctype ? (_oz7.houg = 1, (541 == _oz1.ship_id || 573 == _oz1.ship_id) && (_oz7.houg += 1)) : 88 == _oz1.ctype && (_oz7.houg = 1, 576 == _oz1.ship_id && (_oz7.houg += 1)), !_oz7.exists()) return _oz3;
            var _oz8 = _oz1.get_slotnums(330) + _oz1.get_slotnums(331) + _oz1.get_slotnums(332);
            return _oz3 = _oz7.multiply(_oz8);
        };
    },
    79353: (_oz9, _oza, _ozb) => {
        'use strict';
        var _ozc = null;
        defineModule(_oza);
        Object.defineProperty(_oza, '__esModule', {
            'value': !0
        }), _oza.getZuiunSeriesEffect = void 0;
        var _ozd = _ozb(74496);
        _oza.getZuiunSeriesEffect = function(_oze) {
            var _ozf = null,
                _ozg = new _ozd.SlotItemEffectModel(),
                _ozh = !1,
                _ozi = new _ozd.SlotItemEffectModel();
            if (662 == _oze.ship_id ? (_ozg.houg += 2, _ozg.kaih += 1) : 663 == _oze.ship_id || 668 == _oze.ship_id || 501 == _oze.ship_id || 506 == _oze.ship_id ? (_ozg.houg += 2, _ozi.kaih += 1, _ozi.tyku += 1, _ozh = !0) : 502 != _oze.ship_id && 507 != _oze.ship_id || (_ozg.houg += 1, _ozi.kaih += 1, _ozi.tyku += 1, _ozh = !0), 0 == _ozh) return _ozg;
            var _ozj = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_ozk) {
                var _ozl = null;
                _ozj += _oze.get_slotnums(_ozk);
            }), _ozg.add(_ozi.multiply(_ozj)), _ozg;
        };
    },
    89051: function(_ozm, _ozn, _ozo) {
        'use strict';
        var _ozp = null;
        var _ozq = this && this.__createBinding || (Object.create ? function(_ozr, _ozs, _ozt, _ozu) {
                var _ozv = null;
                void 0 === _ozu && (_ozu = _ozt);
                var _ozw = Object.getOwnPropertyDescriptor(_ozs, _ozt);
                _ozw && !('get' in _ozw ? !_ozs.__esModule : _ozw.writable || _ozw.configurable) || (_ozw = {
                    'enumerable': !0,
                    'get': function() {
                        return _ozs[_ozt];
                    }
                }), Object.defineProperty(_ozr, _ozu, _ozw);
            } : function(_ozx, _ozy, _ozz, _p00) {
                void 0 === _p00 && (_p00 = _ozz), _ozx[_p00] = _ozy[_ozz];
            }),
            _p01 = this && this.__exportStar || function(_p02, _p03) {
                var _p04 = null;
                for (var _p05 in _p02) 'default' === _p05 || Object.prototype.hasOwnProperty.call(_p03, _p05) || _ozq(_p03, _p02, _p05);
            };
        defineModule(_ozn);
        Object.defineProperty(_ozn, '__esModule', {
            'value': !0
        }), _p01(_ozo(34165), _ozn), _p01(_ozo(81018), _ozn), _p01(_ozo(56716), _ozn), _p01(_ozo(17713), _ozn), _p01(_ozo(54518), _ozn), _p01(_ozo(66985), _ozn), _p01(_ozo(88102), _ozn), _p01(_ozo(66904), _ozn), _p01(_ozo(98137), _ozn), _p01(_ozo(69954), _ozn), _p01(_ozo(22218), _ozn), _p01(_ozo(88271), _ozn), _p01(_ozo(23035), _ozn), _p01(_ozo(2578), _ozn), _p01(_ozo(17143), _ozn), _p01(_ozo(16164), _ozn), _p01(_ozo(35023), _ozn), _p01(_ozo(44680), _ozn), _p01(_ozo(45749), _ozn), _p01(_ozo(37334), _ozn), _p01(_ozo(29180), _ozn), _p01(_ozo(68685), _ozn), _p01(_ozo(26078), _ozn), _p01(_ozo(20829), _ozn), _p01(_ozo(6880), _ozn), _p01(_ozo(17213), _ozn), _p01(_ozo(40176), _ozn), _p01(_ozo(32889), _ozn), _p01(_ozo(11285), _ozn), _p01(_ozo(96200), _ozn), _p01(_ozo(9115), _ozn), _p01(_ozo(37173), _ozn), _p01(_ozo(21713), _ozn), _p01(_ozo(59823), _ozn), _p01(_ozo(57440), _ozn), _p01(_ozo(29240), _ozn), _p01(_ozo(40885), _ozn), _p01(_ozo(19614), _ozn), _p01(_ozo(87220), _ozn), _p01(_ozo(81367), _ozn), _p01(_ozo(13052), _ozn), _p01(_ozo(94968), _ozn), _p01(_ozo(48658), _ozn), _p01(_ozo(1906), _ozn), _p01(_ozo(61887), _ozn), _p01(_ozo(47970), _ozn), _p01(_ozo(31797), _ozn), _p01(_ozo(45738), _ozn), _p01(_ozo(34718), _ozn), _p01(_ozo(69245), _ozn), _p01(_ozo(18478), _ozn), _p01(_ozo(2899), _ozn), _p01(_ozo(57120), _ozn), _p01(_ozo(74985), _ozn), _p01(_ozo(9234), _ozn), _p01(_ozo(30802), _ozn), _p01(_ozo(97002), _ozn), _p01(_ozo(16748), _ozn), _p01(_ozo(53618), _ozn), _p01(_ozo(72573), _ozn), _p01(_ozo(8955), _ozn), _p01(_ozo(98947), _ozn), _p01(_ozo(44726), _ozn), _p01(_ozo(93065), _ozn), _p01(_ozo(85767), _ozn), _p01(_ozo(38314), _ozn), _p01(_ozo(59747), _ozn), _p01(_ozo(40649), _ozn), _p01(_ozo(13533), _ozn), _p01(_ozo(12138), _ozn), _p01(_ozo(30042), _ozn), _p01(_ozo(33623), _ozn), _p01(_ozo(85630), _ozn), _p01(_ozo(88736), _ozn), _p01(_ozo(49341), _ozn), _p01(_ozo(74306), _ozn), _p01(_ozo(83898), _ozn), _p01(_ozo(71873), _ozn), _p01(_ozo(53122), _ozn), _p01(_ozo(51063), _ozn), _p01(_ozo(91491), _ozn), _p01(_ozo(85495), _ozn), _p01(_ozo(65365), _ozn), _p01(_ozo(98164), _ozn), _p01(_ozo(38114), _ozn), _p01(_ozo(21003), _ozn), _p01(_ozo(77010), _ozn), _p01(_ozo(39126), _ozn), _p01(_ozo(72176), _ozn), _p01(_ozo(33846), _ozn), _p01(_ozo(97157), _ozn), _p01(_ozo(63406), _ozn), _p01(_ozo(66373), _ozn), _p01(_ozo(19707), _ozn), _p01(_ozo(63978), _ozn), _p01(_ozo(92382), _ozn), _p01(_ozo(78415), _ozn), _p01(_ozo(23090), _ozn), _p01(_ozo(18776), _ozn), _p01(_ozo(39656), _ozn), _p01(_ozo(66039), _ozn), _p01(_ozo(64679), _ozn), _p01(_ozo(95953), _ozn), _p01(_ozo(86384), _ozn), _p01(_ozo(65345), _ozn), _p01(_ozo(46514), _ozn), _p01(_ozo(81976), _ozn), _p01(_ozo(89331), _ozn), _p01(_ozo(73973), _ozn), _p01(_ozo(21178), _ozn), _p01(_ozo(5079), _ozn), _p01(_ozo(95014), _ozn), _p01(_ozo(53099), _ozn), _p01(_ozo(76201), _ozn), _p01(_ozo(24931), _ozn), _p01(_ozo(60978), _ozn), _p01(_ozo(74312), _ozn), _p01(_ozo(54350), _ozn), _p01(_ozo(26262), _ozn), _p01(_ozo(45530), _ozn), _p01(_ozo(44053), _ozn), _p01(_ozo(65441), _ozn), _p01(_ozo(33258), _ozn), _p01(_ozo(92168), _ozn), _p01(_ozo(85975), _ozn), _p01(_ozo(98467), _ozn), _p01(_ozo(88348), _ozn), _p01(_ozo(21097), _ozn), _p01(_ozo(37273), _ozn), _p01(_ozo(72694), _ozn), _p01(_ozo(62067), _ozn), _p01(_ozo(87817), _ozn), _p01(_ozo(93526), _ozn), _p01(_ozo(33084), _ozn), _p01(_ozo(97831), _ozn), _p01(_ozo(45482), _ozn), _p01(_ozo(272), _ozn), _p01(_ozo(69377), _ozn), _p01(_ozo(31127), _ozn), _p01(_ozo(79353), _ozn), _p01(_ozo(17274), _ozn), _p01(_ozo(91302), _ozn), _p01(_ozo(82229), _ozn), _p01(_ozo(10325), _ozn), _p01(_ozo(351), _ozn), _p01(_ozo(4050), _ozn), _p01(_ozo(29805), _ozn), _p01(_ozo(58913), _ozn), _p01(_ozo(55421), _ozn), _p01(_ozo(87845), _ozn), _p01(_ozo(17562), _ozn), _p01(_ozo(78466), _ozn), _p01(_ozo(40061), _ozn), _p01(_ozo(9195), _ozn), _p01(_ozo(93297), _ozn), _p01(_ozo(15133), _ozn), _p01(_ozo(55747), _ozn), _p01(_ozo(33155), _ozn), _p01(_ozo(79086), _ozn), _p01(_ozo(2306), _ozn), _p01(_ozo(14386), _ozn), _p01(_ozo(80225), _ozn), _p01(_ozo(17732), _ozn), _p01(_ozo(47169), _ozn), _p01(_ozo(77670), _ozn), _p01(_ozo(79988), _ozn), _p01(_ozo(92253), _ozn), _p01(_ozo(74428), _ozn), _p01(_ozo(16498), _ozn), _p01(_ozo(2631), _ozn), _p01(_ozo(27177), _ozn), _p01(_ozo(94781), _ozn), _p01(_ozo(53908), _ozn), _p01(_ozo(79813), _ozn), _p01(_ozo(16088), _ozn), _p01(_ozo(93733), _ozn), _p01(_ozo(69939), _ozn), _p01(_ozo(33734), _ozn), _p01(_ozo(34432), _ozn), _p01(_ozo(97423), _ozn), _p01(_ozo(23551), _ozn), _p01(_ozo(99791), _ozn), _p01(_ozo(21403), _ozn), _p01(_ozo(6173), _ozn), _p01(_ozo(23934), _ozn), _p01(_ozo(53709), _ozn), _p01(_ozo(88838), _ozn), _p01(_ozo(99790), _ozn), _p01(_ozo(18387), _ozn), _p01(_ozo(70941), _ozn), _p01(_ozo(35025), _ozn), _p01(_ozo(2603), _ozn), _p01(_ozo(78707), _ozn), _p01(_ozo(89058), _ozn), _p01(_ozo(84372), _ozn), _p01(_ozo(96804), _ozn), _p01(_ozo(33896), _ozn), _p01(_ozo(11031), _ozn), _p01(_ozo(71383), _ozn), _p01(_ozo(55888), _ozn), _p01(_ozo(2258), _ozn), _p01(_ozo(38003), _ozn), _p01(_ozo(92174), _ozn), _p01(_ozo(43768), _ozn), _p01(_ozo(73254), _ozn), _p01(_ozo(55734), _ozn), _p01(_ozo(81254), _ozn), _p01(_ozo(65455), _ozn), _p01(_ozo(70362), _ozn), _p01(_ozo(61977), _ozn), _p01(_ozo(43607), _ozn), _p01(_ozo(68086), _ozn), _p01(_ozo(78173), _ozn), _p01(_ozo(22581), _ozn), _p01(_ozo(20418), _ozn), _p01(_ozo(93373), _ozn), _p01(_ozo(13053), _ozn), _p01(_ozo(47874), _ozn), _p01(_ozo(42788), _ozn), _p01(_ozo(57664), _ozn), _p01(_ozo(44990), _ozn), _p01(_ozo(17712), _ozn), _p01(_ozo(83957), _ozn), _p01(_ozo(78539), _ozn), _p01(_ozo(96282), _ozn), _p01(_ozo(49679), _ozn), _p01(_ozo(45927), _ozn), _p01(_ozo(90312), _ozn), _p01(_ozo(86856), _ozn), _p01(_ozo(78123), _ozn), _p01(_ozo(25765), _ozn), _p01(_ozo(29493), _ozn), _p01(_ozo(28221), _ozn), _p01(_ozo(14830), _ozn), _p01(_ozo(54047), _ozn), _p01(_ozo(76054), _ozn), _p01(_ozo(90725), _ozn), _p01(_ozo(93053), _ozn), _p01(_ozo(88792), _ozn), _p01(_ozo(33242), _ozn);
    },
    82692: function(_p06, _p07, _p08) {
        'use strict';
        var _p09 = null;
        var _p0a = this && this.__createBinding || (Object.create ? function(_p0b, _p0c, _p0d, _p0e) {
                var _p0f = null;
                void 0 === _p0e && (_p0e = _p0d);
                var _p0g = Object.getOwnPropertyDescriptor(_p0c, _p0d);
                _p0g && !('get' in _p0g ? !_p0c.__esModule : _p0g.writable || _p0g.configurable) || (_p0g = {
                    'enumerable': !0,
                    'get': function() {
                        return _p0c[_p0d];
                    }
                }), Object.defineProperty(_p0b, _p0e, _p0g);
            } : function(_p0h, _p0i, _p0j, _p0k) {
                void 0 === _p0k && (_p0k = _p0j), _p0h[_p0k] = _p0i[_p0j];
            }),
            _p0l = this && this.__setModuleDefault || (Object.create ? function(_p0m, _p0n) {
                var _p0o = null;
                Object.defineProperty(_p0m, 'default', {
                    'enumerable': !0,
                    'value': _p0n
                });
            } : function(_p0p, _p0q) {
                var _p0r = null;
                _p0p.default = _p0q;
            }),
            _p0s = this && this.__importStar || function(_p0t) {
                var _p0u = null;
                if (_p0t && _p0t.__esModule) return _p0t;
                var _p0v = {};
                if (null != _p0t) {
                    for (var _p0w in _p0t) 'default' !== _p0w && Object.prototype.hasOwnProperty.call(_p0t, _p0w) && _p0a(_p0v, _p0t, _p0w);
                }
                return _p0l(_p0v, _p0t), _p0v;
            };
        defineModule(_p07);
        Object.defineProperty(_p07, '__esModule', {
            'value': !0
        }), _p07.SlotItemEffectUtil = void 0;
        var _p0x, _p0y = _p08(73785),
            _p0z = _p0s(_p08(89051)),
            _p10 = _p08(74496);
        ! function(_p11) {
            var _p12 = null;
            _p11.getSlotitemEffect = function(_p13, _p14) {
                var _p15 = null;
                if (null == _p13 || null == _p14) return null;
                for (var _p16 = new _p0y.SlotItemEffectParamModel(_p13, _p14), _p17 = [{
                        'isExecute': Boolean(_p16.get_type3_nums(9)),
                        'execFunc': _p0z.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_type3_nums(10)),
                        'execFunc': _p0z.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_type3_nums(11)),
                        'execFunc': _p0z.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_type3_nums(12)) || Boolean(_p16.get_type3_nums(13)),
                        'execFunc': _p0z.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_p16.get_type3_nums(25)),
                        'execFunc': _p0z.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_type3_nums(29)),
                        'execFunc': _p0z.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_p16.get_type3_nums(42)),
                        'execFunc': _p0z.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(3)) || Boolean(_p16.get_slotnums(122)),
                        'execFunc': _p0z.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(5)),
                        'execFunc': _p0z.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(12)),
                        'execFunc': _p0z.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(15)),
                        'execFunc': _p0z.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(18)) || Boolean(_p16.get_slotnums(52)),
                        'execFunc': _p0z.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(19)),
                        'execFunc': _p0z.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(24)) || Boolean(_p16.get_slotnums(57)) || Boolean(_p16.get_slotnums(111)),
                        'execFunc': _p0z.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(26)) || Boolean(_p16.get_slotnums(62)) || Boolean(_p16.get_slotnums(79)) || Boolean(_p16.get_slotnums(80)) || Boolean(_p16.get_slotnums(81)) || Boolean(_p16.get_slotnums(207)) || Boolean(_p16.get_slotnums(208)),
                        'execFunc': _p0z.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(35)),
                        'execFunc': _p0z.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(39)) || Boolean(_p16.get_slotnums(40)) || Boolean(_p16.get_slotnums(49)) || Boolean(_p16.get_slotnums(131)),
                        'execFunc': _p0z.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(30)) || Boolean(_p16.get_slotnums(410)),
                        'execFunc': _p0z.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(44)) || Boolean(_p16.get_slotnums(45)) || Boolean(_p16.get_slotnums(287)) || Boolean(_p16.get_slotnums(288)),
                        'execFunc': _p0z.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(46)) || Boolean(_p16.get_slotnums(47)) || Boolean(_p16.get_slotnums(149)) || Boolean(_p16.get_slotnums(132)) || Boolean(_p16.get_slotnums(438)),
                        'execFunc': _p0z.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(47)) || Boolean(_p16.get_slotnums(438)),
                        'execFunc': _p0z.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(50)),
                        'execFunc': _p0z.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(58)),
                        'execFunc': _p0z.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(59)),
                        'execFunc': _p0z.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(60)) || Boolean(_p16.get_slotnums(154)) || Boolean(_p16.get_slotnums(219)),
                        'execFunc': _p0z.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(61)),
                        'execFunc': _p0z.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(61)),
                        'execFunc': _p0z.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(63)),
                        'execFunc': _p0z.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(66)) || Boolean(_p16.get_slotnums(220)),
                        'execFunc': _p0z.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(67)),
                        'execFunc': _p0z.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(69)),
                        'execFunc': _p0z.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(70)),
                        'execFunc': _p0z.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(78)),
                        'execFunc': _p0z.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(79)) || Boolean(_p16.get_slotnums(81)),
                        'execFunc': _p0z.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(82)),
                        'execFunc': _p0z.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(84)),
                        'execFunc': _p0z.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(85)),
                        'execFunc': _p0z.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(87)),
                        'execFunc': _p0z.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(90)),
                        'execFunc': _p0z.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(93)),
                        'execFunc': _p0z.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(94)),
                        'execFunc': _p0z.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(99)),
                        'execFunc': _p0z.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(100)),
                        'execFunc': _p0z.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(104)),
                        'execFunc': _p0z.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(106)) || Boolean(_p16.get_slotnums(450)),
                        'execFunc': _p0z.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(115)),
                        'execFunc': _p0z.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(118)) || Boolean(_p16.get_slotnums(521)),
                        'execFunc': _p0z.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(119)),
                        'execFunc': _p0z.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(121)),
                        'execFunc': _p0z.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(122)),
                        'execFunc': _p0z.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(128)) || Boolean(_p16.get_slotnums(281)),
                        'execFunc': _p0z.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(129)),
                        'execFunc': _p0z.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(132)),
                        'execFunc': _p0z.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(136)),
                        'execFunc': _p0z.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(139)),
                        'execFunc': _p0z.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(143)),
                        'execFunc': _p0z.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(144)),
                        'execFunc': _p0z.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(147)) || Boolean(_p16.get_slotnums(393)) || Boolean(_p16.get_slotnums(394)),
                        'execFunc': _p0z.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(149)),
                        'execFunc': _p0z.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(165)) || Boolean(_p16.get_slotnums(216)),
                        'execFunc': _p0z.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(171)),
                        'execFunc': _p0z.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(174)),
                        'execFunc': _p0z.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(179)),
                        'execFunc': _p0z.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(184)),
                        'execFunc': _p0z.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(188)),
                        'execFunc': _p0z.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(189)),
                        'execFunc': _p0z.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(194)),
                        'execFunc': _p0z.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(195)),
                        'execFunc': _p0z.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(204)),
                        'execFunc': _p0z.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(217)),
                        'execFunc': _p0z.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(220)),
                        'execFunc': _p0z.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(227)),
                        'execFunc': _p0z.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(228)),
                        'execFunc': _p0z.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(229)),
                        'execFunc': _p0z.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(234)),
                        'execFunc': _p0z.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(235)),
                        'execFunc': _p0z.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(237)) || Boolean(_p16.get_slotnums(322)) || Boolean(_p16.get_slotnums(323)) || Boolean(_p16.get_slotnums(490)),
                        'execFunc': _p0z.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(237)),
                        'execFunc': _p0z.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(238)) || Boolean(_p16.get_slotnums(239)),
                        'execFunc': _p0z.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(242)),
                        'execFunc': _p0z.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(243)),
                        'execFunc': _p0z.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(244)),
                        'execFunc': _p0z.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(245)) || Boolean(_p16.get_slotnums(246)) || Boolean(_p16.get_slotnums(468)),
                        'execFunc': _p0z.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(247)),
                        'execFunc': _p0z.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(266)),
                        'execFunc': _p0z.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(266)),
                        'execFunc': _p0z.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(267)) || Boolean(_p16.get_slotnums(366)),
                        'execFunc': _p0z.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(267)) || Boolean(_p16.get_slotnums(366)),
                        'execFunc': _p0z.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(268)),
                        'execFunc': _p0z.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(271)),
                        'execFunc': _p0z.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(275)),
                        'execFunc': _p0z.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(277)),
                        'execFunc': _p0z.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(278)),
                        'execFunc': _p0z.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(279)),
                        'execFunc': _p0z.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(282)),
                        'execFunc': _p0z.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(283)),
                        'execFunc': _p0z.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(285)),
                        'execFunc': _p0z.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(286)),
                        'execFunc': _p0z.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(286)),
                        'execFunc': _p0z.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(286)),
                        'execFunc': _p0z.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(287)),
                        'execFunc': _p0z.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(288)),
                        'execFunc': _p0z.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(289)),
                        'execFunc': _p0z.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(290)),
                        'execFunc': _p0z.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(291)),
                        'execFunc': _p0z.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(292)),
                        'execFunc': _p0z.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(293)),
                        'execFunc': _p0z.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(294)),
                        'execFunc': _p0z.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(295)),
                        'execFunc': _p0z.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(296)),
                        'execFunc': _p0z.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(297)),
                        'execFunc': _p0z.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(298)) || Boolean(_p16.get_slotnums(299)) || Boolean(_p16.get_slotnums(300)),
                        'execFunc': _p0z.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(301)),
                        'execFunc': _p0z.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(302)),
                        'execFunc': _p0z.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(303)),
                        'execFunc': _p0z.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(304)),
                        'execFunc': _p0z.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(305)) || Boolean(_p16.get_slotnums(306)),
                        'execFunc': _p0z.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(307)),
                        'execFunc': _p0z.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(308)),
                        'execFunc': _p0z.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(310)) || Boolean(_p16.get_slotnums(518)),
                        'execFunc': _p0z.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(313)),
                        'execFunc': _p0z.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(314)),
                        'execFunc': _p0z.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(315)),
                        'execFunc': _p0z.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(316)),
                        'execFunc': _p0z.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(317)),
                        'execFunc': _p0z.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(318)),
                        'execFunc': _p0z.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(319)),
                        'execFunc': _p0z.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(320)),
                        'execFunc': _p0z.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(322)),
                        'execFunc': _p0z.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(323)),
                        'execFunc': _p0z.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(324)) || Boolean(_p16.get_slotnums(325)),
                        'execFunc': _p0z.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(326)),
                        'execFunc': _p0z.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(327)),
                        'execFunc': _p0z.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(328)),
                        'execFunc': _p0z.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(329)),
                        'execFunc': _p0z.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(330)) || Boolean(_p16.get_slotnums(331)) || Boolean(_p16.get_slotnums(332)),
                        'execFunc': _p0z.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(335)),
                        'execFunc': _p0z.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(336)),
                        'execFunc': _p0z.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(337)),
                        'execFunc': _p0z.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(338)),
                        'execFunc': _p0z.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(339)),
                        'execFunc': _p0z.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(340)),
                        'execFunc': _p0z.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(341)),
                        'execFunc': _p0z.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(342)),
                        'execFunc': _p0z.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(343)),
                        'execFunc': _p0z.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(344)),
                        'execFunc': _p0z.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(345)),
                        'execFunc': _p0z.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(346)),
                        'execFunc': _p0z.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(347)),
                        'execFunc': _p0z.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(356)) || Boolean(_p16.get_slotnums(357)),
                        'execFunc': _p0z.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(358)),
                        'execFunc': _p0z.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(359)),
                        'execFunc': _p0z.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(360)) || Boolean(_p16.get_slotnums(361)),
                        'execFunc': _p0z.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(362)) || Boolean(_p16.get_slotnums(363)),
                        'execFunc': _p0z.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(364)),
                        'execFunc': _p0z.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(365)),
                        'execFunc': _p0z.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(367)),
                        'execFunc': _p0z.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(368)),
                        'execFunc': _p0z.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(369)),
                        'execFunc': _p0z.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(370)),
                        'execFunc': _p0z.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(371)),
                        'execFunc': _p0z.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(372)),
                        'execFunc': _p0z.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(373)),
                        'execFunc': _p0z.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(374)),
                        'execFunc': _p0z.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(375)),
                        'execFunc': _p0z.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(376)),
                        'execFunc': _p0z.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(377)),
                        'execFunc': _p0z.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(378)),
                        'execFunc': _p0z.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(379)),
                        'execFunc': _p0z.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(380)),
                        'execFunc': _p0z.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(381)),
                        'execFunc': _p0z.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(382)) || Boolean(_p16.get_slotnums(509)),
                        'execFunc': _p0z.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(383)),
                        'execFunc': _p0z.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(384)),
                        'execFunc': _p0z.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(385)),
                        'execFunc': _p0z.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(386)),
                        'execFunc': _p0z.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(387)),
                        'execFunc': _p0z.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(389)),
                        'execFunc': _p0z.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(390)),
                        'execFunc': _p0z.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(391)),
                        'execFunc': _p0z.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(392)),
                        'execFunc': _p0z.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(397)),
                        'execFunc': _p0z.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(398)),
                        'execFunc': _p0z.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(399)),
                        'execFunc': _p0z.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(400)),
                        'execFunc': _p0z.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(407)),
                        'execFunc': _p0z.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(408)),
                        'execFunc': _p0z.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(409)),
                        'execFunc': _p0z.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(411)),
                        'execFunc': _p0z.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(412)),
                        'execFunc': _p0z.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(413)),
                        'execFunc': _p0z.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(414)),
                        'execFunc': _p0z.getSlot414PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(415)),
                        'execFunc': _p0z.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(419)),
                        'execFunc': _p0z.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(420)),
                        'execFunc': _p0z.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(421)),
                        'execFunc': _p0z.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(422)),
                        'execFunc': _p0z.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(423)),
                        'execFunc': _p0z.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(424)),
                        'execFunc': _p0z.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(425)),
                        'execFunc': _p0z.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(426)) || Boolean(_p16.get_slotnums(427)) || Boolean(_p16.get_slotnums(428)) || Boolean(_p16.get_slotnums(429)),
                        'execFunc': _p0z.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(430)),
                        'execFunc': _p0z.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(434)) || Boolean(_p16.get_slotnums(435)),
                        'execFunc': _p0z.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(437)),
                        'execFunc': _p0z.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(438)),
                        'execFunc': _p0z.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(439)),
                        'execFunc': _p0z.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(440)) || Boolean(_p16.get_slotnums(441)),
                        'execFunc': _p0z.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(442)) || Boolean(_p16.get_slotnums(443)),
                        'execFunc': _p0z.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(447)),
                        'execFunc': _p0z.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(450)),
                        'execFunc': _p0z.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(451)),
                        'execFunc': _p0z.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(455)),
                        'execFunc': _p0z.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(456)),
                        'execFunc': _p0z.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(457)) || Boolean(_p16.get_slotnums(461)),
                        'execFunc': _p0z.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(458)),
                        'execFunc': _p0z.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(463)),
                        'execFunc': _p0z.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(464)),
                        'execFunc': _p0z.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(465)),
                        'execFunc': _p0z.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(466)),
                        'execFunc': _p0z.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(467)),
                        'execFunc': _p0z.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(470)),
                        'execFunc': _p0z.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(471)),
                        'execFunc': _p0z.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(472)),
                        'execFunc': _p0z.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(473)),
                        'execFunc': _p0z.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(474)),
                        'execFunc': _p0z.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(478)),
                        'execFunc': _p0z.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(483)),
                        'execFunc': _p0z.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(485)),
                        'execFunc': _p0z.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(486)),
                        'execFunc': _p0z.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(487)),
                        'execFunc': _p0z.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(488)),
                        'execFunc': _p0z.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(489)) || Boolean(_p16.get_slotnums(491)),
                        'execFunc': _p0z.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(500)) || Boolean(_p16.get_slotnums(501)),
                        'execFunc': _p0z.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(502)),
                        'execFunc': _p0z.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(503)),
                        'execFunc': _p0z.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(505)),
                        'execFunc': _p0z.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(506)),
                        'execFunc': _p0z.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(507)) || Boolean(_p16.get_slotnums(508)),
                        'execFunc': _p0z.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(510)),
                        'execFunc': _p0z.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(511)) || Boolean(_p16.get_slotnums(512)),
                        'execFunc': _p0z.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(517)),
                        'execFunc': _p0z.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(518)),
                        'execFunc': _p0z.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(519)),
                        'execFunc': _p0z.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(520)),
                        'execFunc': _p0z.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_p16.get_slotnums(521)),
                        'execFunc': _p0z.getSlot521PersonalEffect
                    }], _p18 = new _p10.SlotItemEffectModel(), _p19 = 0, _p1a = _p17; _p19 < _p1a.length; _p19++) {
                    var _p1b = _p1a[_p19];
                    if (_p1b.isExecute) {
                        var _p1c = _p1b.execFunc(_p16);
                        0, _p18.add(_p1c);
                    }
                }
                return _p18;
            };
        }(_p0x || (_p07.SlotItemEffectUtil = _p0x = {}));
    },
}
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
            128: 'フランス',
            129: 'フランス',
            73: 'ロシア',
            81: 'ロシア'
        };
    },
    73785: function(_lc7, _lc8, _lc9) {
        'use strict';
        var _lca = null;
        var _lcb = this && this.__importDefault || function(_lcc) {
            var _lcd = null;
            return _lcc && _lcc.__esModule ? _lcc : {
                'default': _lcc
            };
        };
        defineModule(_lc8);
        Object.defineProperty(_lc8, '__esModule', {
            'value': true
        }), _lc8.SlotItemEffectParamModel = void 0;
        var _lce = _lcb(_lc9(18622)),
            _lcf = _lc9(72170),
            _lcg = (function() {
                var _lch = null;

                function _lci(_lcj, _lck) {
                    var _lcl = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _lcm = {}, _lcn = {}, _lco = {}, _lcp = {}, _lcq = {}, _lcr = 0, _lcs = _lck; _lcr < _lcs.length; _lcr++) {
                        var _lct = _lcs[_lcr];
                        if (null != _lct) {
                            null == _lcm[_lct.mstID] && (_lcm[_lct.mstID] = new Array()), _lcm[_lct.mstID].push(_lct), null == _lcn[_lct.mstID] ? _lcn[_lct.mstID] = 1 : _lcn[_lct.mstID] += 1, null == _lco[_lct.equipType] ? _lco[_lct.equipType] = 1 : _lco[_lct.equipType] += 1, null == _lcp[_lct.mstID] && (_lcp[_lct.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            })), _lcp[_lct.mstID][_lct.level]++, null == _lcq[_lct.mstID] && (_lcq[_lct.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            }));
                            for (var _lcu = 0; _lcu <= this.SLOT_LEVEL_MAX && _lct.level >= _lcu; _lcu++) _lcq[_lct.mstID][_lcu]++;
                        }
                    }
                    this._have_slots_dict = _lcm, this._have_slotnums_dict = _lcn, this._have_type3nums_dict = _lco, this._have_level_num_dict = _lcp, this._have_level_num_over_dict = _lcq, this._ship_id = _lcj.mstID, this._yomi = _lcj.yomi, this._stype = _lcj.shipTypeID, this._ctype = _lcj.getClassType();
                }
                return Object.defineProperty(_lci.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _lcv = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lci.prototype, 'have_level_num_over_dict', {
                    'get': function() {
                        var _lcw = null;
                        return this._have_level_num_over_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lci.prototype, 'ship_id', {
                    'get': function() {
                        var _lcx = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lci.prototype, 'yomi', {
                    'get': function() {
                        var _lcy = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lci.prototype, 'stype', {
                    'get': function() {
                        var _lcz = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lci.prototype, 'ctype', {
                    'get': function() {
                        var _ld0 = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _lci.prototype.get_slotnums = function(_ld1) {
                    var _ld2 = null;
                    return null == this._have_slotnums_dict[_ld1] ? 0 : this._have_slotnums_dict[_ld1];
                }, _lci.prototype.get_type3_nums = function(_ld3) {
                    var _ld4 = null;
                    return null == this._have_type3nums_dict[_ld3] ? 0 : this._have_type3nums_dict[_ld3];
                }, _lci.prototype.haveSlotLevelNum = function(_ld5) {
                    var _ld6 = null;
                    return null == this._have_level_num_dict[_ld5] ? [] : this._have_level_num_dict[_ld5];
                }, _lci.prototype.haveSlotLevelNumOver = function(_ld7) {
                    var _ld8 = null;
                    return null == this._have_level_num_over_dict[_ld7] ? [] : this._have_level_num_over_dict[_ld7];
                }, _lci.prototype.have_slot_ids = function() {
                    var _ld9 = null;
                    return Object.keys(this._have_slots_dict);
                }, _lci.prototype.get_each_level_nums = function(_lda) {
                    var _ldb = null,
                        _ldc = this._have_slots_dict[_lda],
                        _ldd = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _ldc)
                        for (var _lde = 0, _ldf = _ldc; _lde < _ldf.length; _lde++) {
                            _ldd[_ldf[_lde].level]++;
                        }
                    return _ldd;
                }, _lci.prototype.get_each_level_over_nums = function(_ldg) {
                    var _ldh = null;
                    for (var _ldi = this, _ldj = [], _ldk = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _ldl = function(_ldm) {
                            var _ldn = null;
                            if (_ldj[_ldm] = Array.apply(null, new Array(_ldo.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _ldo.have_slots_dict[_ldm]) return 'continue';
                            _ldo.get_each_level_nums(_ldm).forEach(function(_ldp, _ldq) {
                                var _ldr = null;
                                for (var _lds = 1; _lds <= _ldi.SLOT_LEVEL_MAX; _lds++) _ldq >= _lds && (_ldj[_ldm][_lds] += _ldp, _ldk[_lds] += _ldp);
                            });
                        }, _ldo = this, _ldt = 0, _ldu = _ldg; _ldt < _ldu.length; _ldt++) {
                        _ldl(_ldu[_ldt]);
                    }
                    return {
                        'slot': _ldj,
                        'total': _ldk
                    };
                }, _lci.prototype.getTotalCountWithOverLeveledItem = function(_ldv) {
                    var _ldw = null;
                    for (var _ldx = this, _ldy = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _ldz = 0, _le0 = _ldv; _ldz < _le0.length; _ldz++) {
                        var _le1 = _le0[_ldz];
                        if (null != this._have_slots_dict[_le1]) this._have_level_num_dict[_le1].forEach(function(_le2, _le3) {
                            var _le4 = null;
                            for (var _le5 = 0; _le5 <= _ldx.SLOT_LEVEL_MAX; _le5++) _le3 >= _le5 && (_ldy[_le5] += _le2);
                        });
                    }
                    return _ldy;
                }, _lci.prototype.get_have_rader_nums = function() {
                    var _le6 = null;
                    for (var _le7 = 0, _le8 = 0, _le9 = 0, _lea = 0, _leb = this.have_slot_ids(); _lea < _leb.length; _lea++) {
                        var _lec = _leb[_lea],
                            _led = _lce.default.model.slot.getMst(_lec),
                            _lee = _led.equipType;
                        12 != _lee && 13 != _lee || (_led.sakuteki >= 5 && (_le7 += this.get_slotnums(parseInt(_lec))), _led.meichu >= 8 && (_le8 += this.get_slotnums(parseInt(_lec))), _led.taiku >= 2 && (_le9 += this.get_slotnums(parseInt(_lec))));
                    }
                    return {
                        'water_rader': _le7,
                        'high_water_rader': _le8,
                        'air_rader': _le9
                    };
                }, _lci.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _lci.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _lci.prototype.getCountryName = function() {
                    var _lef = null;
                    return null == _lcf.SHIP_COUNTRY[this._ctype] ? '' : _lcf.SHIP_COUNTRY[this._ctype];
                }, _lci.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _lci.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _lci;
            }());
        _lc8.SlotItemEffectParamModel = _lcg;
    },
    16718: (_lpm, _lpn, _lpo) => {
        'use strict';
        var _lpp = null;
        defineModule(_lpn);
        Object.defineProperty(_lpn, '__esModule', {
            'value': true
        }), _lpn.TaskGetSlotItemEffectParams = void 0;
        var _lpq = _lpo(74496),
            _lpr = _lpo(82692),
            _lps = (function() {
                var _lpt = null;

                function _lpu(_lpv, _lpw, _lpx) {
                    var _lpy = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lpv;
                    var _lpz = _lpv.getSlotitems();
                    _lpz.push(_lpv.getSlotitemEx());
                    var _lq0 = _lpz.map(function(_lq1) {
                        var _lq2 = null;
                        return null == _lq1 || null != _lpw && _lq1.memID == _lpw.memID ? null : _lq1;
                    });
                    this._removeSlots = _lq0;
                    var _lq3 = _lq0.map(function(_lq4) {
                        return _lq4;
                    });
                    _lq3.push(_lpx), this._toSlots = _lq3;
                }
                return _lpu.prototype.start = function() {
                    var _lq5 = null,
                        _lq6 = this._ship.getSlotitems();
                    _lq6.push(this._ship.getSlotitemEx());
                    var _lq7 = _lpr.SlotItemEffectUtil.getSlotitemEffect(this._ship, _lq6),
                        _lq8 = _lpr.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lq9 = _lpr.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_lq7, _lq8),
                        'toSlotItemEffect': this._subEffectModels(_lq9, _lq8)
                    };
                }, _lpu.prototype._subEffectModels = function(_lqa, _lqb) {
                    var _lqc = null,
                        _lqd = new _lpq.SlotItemEffectModel();
                    return _lqd.houg = _lqa.houg - _lqb.houg, _lqd.raig = _lqa.raig - _lqb.raig, _lqd.tyku = _lqa.tyku - _lqb.tyku, _lqd.souk = _lqa.souk - _lqb.souk, _lqd.kaih = _lqa.kaih - _lqb.kaih, _lqd.tais = _lqa.tais - _lqb.tais, _lqd.saku = _lqa.saku - _lqb.saku, _lqd.baku = _lqa.baku - _lqb.baku, _lqd.houm = _lqa.houm - _lqb.houm, _lqd.leng = _lqa.leng - _lqb.leng, _lqd;
                }, _lpu;
            }());
        _lpn.TaskGetSlotItemEffectParams = _lps;
    },
    69377: function(_me3, _me4, _me5) {
        'use strict';
        var _me6 = null;
        var _me7 = this && this.__importDefault || function(_me8) {
            var _me9 = null;
            return _me8 && _me8.__esModule ? _me8 : {
                'default': _me8
            };
        };
        defineModule(_me4);
        Object.defineProperty(_me4, '__esModule', {
            'value': true
        }), _me4.get25mmMachinegunEffect = void 0;
        var _mea = _me5(74496),
            _meb = _me7(_me5(18622));
        _me4.get25mmMachinegunEffect = function(_mec) {
            var _med = null,
                _mee = new _mea.SlotItemEffectModel(),
                _mef = false,
                _meg = new _mea.SlotItemEffectModel(),
                _meh = 0,
                _mei = new _mea.SlotItemEffectModel(),
                _mej = {},
                _mek = 0;
            if (662 == _mec.ship_id || 663 == _mec.ship_id ? (_meg.tyku += 2, _meg.kaih += 1, _mef = true) : 668 == _mec.ship_id ? (_meg.tyku += 3, _meg.kaih += 2, _mef = true) : 979 == _mec.ship_id && (_meg.tyku += 2, _meg.kaih += 3, _mef = true, _mei.kaih += 2, _mej[49] = _mei, _mek = 1), 56 == _mec.ctype && (_meg.houg += 1, _meg.tyku += 2, _meg.kaih += 2, _mef = true, _meh = 1), Object.keys(_mej).forEach(function(_mel) {
                    var _mem = null,
                        _men = _mej[parseInt(_mel)],
                        _meo = _mec.get_slotnums(parseInt(_mel));
                    _mee.add(_men.multiply(_meo));
                }), _mek > 0) {
                var _mep = _mec.get_each_level_over_nums([49, 39, 40, 131]),
                    _meq = _mep.slot[49],
                    _mer = _mep.slot[39],
                    _mes = _mep.slot[40],
                    _met = _mep.slot[131];
                1 == _mek && (_meq[6] >= 1 && (_mee.houm += 1 * _meq[6]), _meq[7] >= 1 && (_mee.tyku += 1 * _meq[7]), _meq[8] >= 1 && (_mee.kaih += 1 * _meq[8]), _meq[9] >= 1 && (_mee.tyku += 1 * _meq[9]), _meq[10] >= 1 && (_mee.houg += 1 * _meq[10]), _mer[8] >= 1 && (_mee.kaih += 1 * _mer[8]), _mer[9] >= 1 && (_mee.tyku += 2 * _mer[9]), _mer[10] >= 1 && (_mee.houg += 1 * _mer[10]), _mes[9] >= 1 && (_mee.tyku += 2 * _mes[9]), _mes[10] >= 1 && (_mee.houg += 1 * _mes[10]), _met[10] >= 1 && (_mee.tyku += 2 * _met[10]));
            }
            if (0 == _mef) return _mee;
            var _meu = _mec.get_slotnums(39) + _mec.get_slotnums(40) + _mec.get_slotnums(49) + _mec.get_slotnums(131);
            if (_mee.add(_meg.multiply(_meu)), 0 == _meh) return _mee;
            for (var _mev = 0, _mew = 0, _mex = _mec.have_slot_ids(); _mew < _mex.length; _mew++) {
                var _mey = _mex[_mew],
                    _mez = _meb.default.model.slot.getMst(_mey),
                    _mf0 = _mez.equipType;
                12 != _mf0 && 13 != _mf0 || (_mez.sakuteki >= 5 && _mec.get_slotnums(parseInt(_mey)), _mez.taiku >= 2 && (_mev += _mec.get_slotnums(parseInt(_mey))));
            }
            return _mev >= 1 && 1 == _meh && (_mee.tyku += 2, _mee.kaih += 2), _mee;
        };
    },
    77670: function(_mf1, _mf2, _mf3) {
        'use strict';
        var _mf4 = null;
        var _mf5 = this && this.__importDefault || function(_mf6) {
            var _mf7 = null;
            return _mf6 && _mf6.__esModule ? _mf6 : {
                'default': _mf6
            };
        };
        defineModule(_mf2);
        Object.defineProperty(_mf2, '__esModule', {
            'value': true
        }), _mf2.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mf8 = _mf3(74496),
            _mf9 = _mf5(_mf3(18622));
        _mf2.get8cmAntiAircraftGunPersonalEffect = function(_mfa) {
            var _mfb = null,
                _mfc = new _mf8.SlotItemEffectModel(),
                _mfd = false,
                _mfe = new _mf8.SlotItemEffectModel(),
                _mff = 0;
            if (501 != _mfa.ship_id && 506 != _mfa.ship_id && 502 != _mfa.ship_id && 507 != _mfa.ship_id || (_mfe.tyku += 2, _mfe.kaih += 1, _mfd = true, _mff = 1), 501 != _mfa.ship_id && 506 != _mfa.ship_id || (_mfe.houg += 1, _mfe.tyku += 2, _mfe.kaih += 2, _mfd = true, _mff = 1), 0 == _mfd) return _mfc;
            var _mfg = _mfa.get_slotnums(66) + _mfa.get_slotnums(220);
            _mfc.add(_mfe.multiply(_mfg));
            for (var _mfh = 0, _mfi = 0, _mfj = _mfa.have_slot_ids(); _mfi < _mfj.length; _mfi++) {
                var _mfk = _mfj[_mfi],
                    _mfl = _mf9.default.model.slot.getMst(_mfk),
                    _mfm = _mfl.equipType;
                12 != _mfm && 13 != _mfm || (_mfl.sakuteki >= 5 && _mfa.get_slotnums(parseInt(_mfk)), _mfl.taiku >= 2 && (_mfh += _mfa.get_slotnums(parseInt(_mfk))));
            }
            return 0 == _mff || _mfh >= 1 && (_mfc.tyku += 1, _mfc.kaih += 2), _mfc;
        };
    },
    34165: (_mfn, _mfo, _mfp) => {
        'use strict';
        var _mfq = null;
        defineModule(_mfo);
        Object.defineProperty(_mfo, '__esModule', {
            'value': true
        }), _mfo.getCamouflageSlotPersonalEffect = void 0;
        var _mfr = _mfp(74496);
        _mfo.getCamouflageSlotPersonalEffect = function(_mfs) {
            var _mft = null,
                _mfu = new _mfr.SlotItemEffectModel();
            return 'きそ' != _mfs.yomi && 'たま' != _mfs.yomi || (_mfu.kaih = 7, _mfu.souk = 2), _mfu;
        };
    },
    31127: (_mfv, _mfw, _mfx) => {
        'use strict';
        var _mfy = null;
        defineModule(_mfw);
        Object.defineProperty(_mfw, '__esModule', {
            'value': true
        }), _mfw.getHighZuiunSeriesEffect = void 0;
        var _mfz = _mfx(74496);
        _mfw.getHighZuiunSeriesEffect = function(_mg0) {
            var _mg1 = null,
                _mg2 = new _mfz.SlotItemEffectModel(),
                _mg3 = false,
                _mg4 = new _mfz.SlotItemEffectModel();
            if (662 == _mg0.ship_id ? (_mg2.houg += 3, _mg2.kaih += 1) : 663 == _mg0.ship_id || 668 == _mg0.ship_id || 501 == _mg0.ship_id || 506 == _mg0.ship_id || 553 == _mg0.ship_id || 554 == _mg0.ship_id ? (_mg4.houg += 3, _mg4.kaih += 2, _mg4.tyku += 1, _mg3 = true) : 502 != _mg0.ship_id && 507 != _mg0.ship_id || (_mg4.houg += 2, _mg4.kaih += 2, _mg4.tyku += 1, _mg3 = true), 0 == _mg3) return _mg2;
            var _mg5 = 0;
            return [237, 322, 323, 490].forEach(function(_mg6) {
                var _mg7 = null;
                _mg5 += _mg0.get_slotnums(_mg6);
            }), _mg2.add(_mg4.multiply(_mg5)), _mg2;
        };
    },
    81018: function(_mg8, _mg9, _mga) {
        'use strict';
        var _mgb = null;
        var _mgc = this && this.__importDefault || function(_mgd) {
            var _mge = null;
            return _mgd && _mgd.__esModule ? _mgd : {
                'default': _mgd
            };
        };
        defineModule(_mg9);
        Object.defineProperty(_mg9, '__esModule', {
            'value': true
        }), _mg9.getRaderPrivateEffect = void 0;
        var _mgf = _mga(74496),
            _mgg = _mgc(_mga(18622));
        _mg9.getRaderPrivateEffect = function(_mgh) {
            var _mgi = null,
                _mgj = new _mgf.SlotItemEffectModel(),
                _mgk = 0,
                _mgl = 0;
            if (569 == _mgh.ship_id || 648 == _mgh.ship_id || 961 == _mgh.ship_id || 951 == _mgh.ship_id) _mgk = 1;
            else {
                if (955 != _mgh.ship_id && 960 != _mgh.ship_id) return _mgj;
                _mgk = 2, _mgl = 1;
            }
            for (var _mgm = 0, _mgn = 0, _mgo = _mgh.have_slot_ids(); _mgn < _mgo.length; _mgn++) {
                var _mgp = _mgo[_mgn],
                    _mgq = _mgg.default.model.slot.getMst(_mgp),
                    _mgr = _mgq.equipType;
                12 != _mgr && 13 != _mgr || (_mgq.sakuteki >= 5 && _mgh.get_slotnums(parseInt(_mgp)), _mgq.taiku >= 2 && (_mgm += _mgh.get_slotnums(parseInt(_mgp))));
            }
            if (_mgm > 0 && (1 == _mgk ? (_mgj.houg += 1, _mgj.kaih += 3, _mgj.tyku += 2) : 2 == _mgk && (_mgj.tyku += 2, _mgj.kaih += 1)), 0 == _mgl) return _mgj;
            for (var _mgs = [], _mgt = function(_mgu) {
                    var _mgv = null;
                    if (null == _mgh.have_slots_dict[_mgu]) return 'continue';
                    var _mgw = _mgh.get_each_level_nums(_mgu);
                    null == _mgs[_mgu] && (_mgs[_mgu] = []), _mgw.forEach(function(_mgx, _mgy) {
                        var _mgz = null;
                        for (var _mh0 = 1; _mh0 <= _mgh.SLOT_LEVEL_MAX; _mh0++) null == _mgs[_mgu][_mh0] && (_mgs[_mgu][_mh0] = 0), _mgy >= _mh0 && (_mgs[_mgu][_mh0] += _mgx);
                    });
                }, _mh1 = 0, _mh2 = [450]; _mh1 < _mh2.length; _mh1++) {
                _mgt(_mh2[_mh1]);
            }
            var _mh3 = null != _mgs[450] ? _mgs[450][4] : 0;
            return 1 == _mgl && _mh3 > 0 && (_mgj.houg += 1, _mgj.houm += 1, _mgj.tyku += 1, _mgj.kaih += 2), _mgj;
        };
    },
    56716: (_mh4, _mh5, _mh6) => {
        'use strict';
        var _mh7 = null;
        defineModule(_mh5);
        Object.defineProperty(_mh5, '__esModule', {
            'value': true
        }), _mh5.getSearchLightEffect = void 0;
        var _mh8 = _mh6(74496);
        _mh5.getSearchLightEffect = function(_mh9) {
            var _mha = null,
                _mhb = new _mh8.SlotItemEffectModel(),
                _mhc = _mh9.get_type3_nums(29);
            return 'ひえい' == _mh9.yomi || 'きりしま' == _mh9.yomi || 'ちょうかい' == _mh9.yomi || 'じんつう' == _mh9.yomi || 'あかつき' == _mh9.yomi ? (_mhb.houg += 4, _mhb.kaih -= 1) : 'あきぐも' == _mh9.yomi ? _mhb.houg = _mhb.houg + 2 * _mhc : 'ゆきかぜ' == _mh9.yomi && (_mhb.houg = _mhb.houg + _mhc, _mhb.tyku = _mhb.tyku + _mhc), 662 != _mh9.ship_id && 663 != _mh9.ship_id && 668 != _mh9.ship_id || (_mhb.raig += 2, _mhb.houg += 4), 'じんつう' == _mh9.yomi && (_mhb.raig += 8, _mhb.houg += 4), _mhb;
        };
    },
    17713: (_mhd, _mhe, _mhf) => {
        'use strict';
        var _mhg = null;
        defineModule(_mhe);
        Object.defineProperty(_mhe, '__esModule', {
            'value': true
        }), _mhe.getSearchLightLargeEffect = void 0;
        var _mhh = _mhf(74496);
        _mhe.getSearchLightLargeEffect = function(_mhi) {
            var _mhj = null,
                _mhk = new _mhh.SlotItemEffectModel();
            'ひえい' == _mhi.yomi || 'きりしま' == _mhi.yomi ? (_mhk.houg += 6, _mhk.kaih -= 2) : 'やまと' != _mhi.yomi && 'むさし' != _mhi.yomi || (_mhk.houg += 4, _mhk.kaih -= 1);
            var _mhl = _mhi.get_slotnums(174);
            return 592 == _mhi.ship_id && (_mhk.houg += 3, _mhk.raig += 3, _mhl > 0 && (_mhk.raig += 5)), _mhk;
        };
    },
    17213: (_mhm, _mhn, _mho) => {
        'use strict';
        var _mhp = null;
        defineModule(_mhn);
        Object.defineProperty(_mhn, '__esModule', {
            'value': true
        }), _mhn.getSlot100PersonalEffect = void 0;
        var _mhq = _mho(74496);
        _mhn.getSlot100PersonalEffect = function(_mhr) {
            var _mhs = null,
                _mht = new _mhq.SlotItemEffectModel(),
                _mhu = new _mhq.SlotItemEffectModel();
            if (553 == _mhr.ship_id) _mhu.houg = 4;
            else {
                if (554 != _mhr.ship_id) return 196 == _mhr.ship_id ? (_mht.houg = 3, _mht) : 197 == _mhr.ship_id ? (_mht.houg = 6, _mht) : _mht;
                _mhu.houg = 4;
            }
            var _mhv = _mhr.get_slotnums(100);
            return _mht = _mhu.multiply(_mhv);
        };
    },
    40176: (_mhw, _mhx, _mhy) => {
        'use strict';
        var _mhz = null;
        defineModule(_mhx);
        Object.defineProperty(_mhx, '__esModule', {
            'value': true
        }), _mhx.getSlot104PersonalEffect = void 0;
        var _mi0 = _mhy(74496);
        _mhx.getSlot104PersonalEffect = function(_mi1) {
            var _mi2 = null,
                _mi3 = new _mi0.SlotItemEffectModel(),
                _mi4 = new _mi0.SlotItemEffectModel();
            if (149 == _mi1.ship_id || 591 == _mi1.ship_id) _mi4.houg = 2;
            else {
                if (150 == _mi1.ship_id || 592 == _mi1.ship_id) _mi4.houg = 1;
                else {
                    if (152 == _mi1.ship_id) _mi4.houg = 1;
                    else {
                        if (151 != _mi1.ship_id && 593 != _mi1.ship_id && 954 != _mi1.ship_id) return _mi3;
                        _mi4.houg = 2, _mi4.tyku = 1, _mi4.kaih = 2;
                    }
                }
            }
            var _mi5 = _mi1.get_slotnums(104);
            return _mi3 = _mi4.multiply(_mi5);
        };
    },
    32889: (_mi6, _mi7, _mi8) => {
        'use strict';
        var _mi9 = null;
        defineModule(_mi7);
        Object.defineProperty(_mi7, '__esModule', {
            'value': true
        }), _mi7.getSlot106PersonalEffect = void 0;
        var _mia = _mi8(74496);
        _mi7.getSlot106PersonalEffect = function(_mib) {
            var _mic = null,
                _mid = new _mia.SlotItemEffectModel(),
                _mie = new _mia.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mib.ship_id) >= 0 ? (_mie.houg += 1, _mie.tyku += 2, _mie.souk += 1, _mie.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mib.yomi) >= 0 ? (_mie.tyku += 1, _mie.souk += 1, _mie.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mib.yomi) >= 0 && (_mie.tyku += 2, _mie.souk += 1, _mie.kaih += 2, 663 != _mib.ship_id && 668 != _mib.ship_id || (_mid.houg += 1, _mid.tyku += 1, _mid.souk += 1, _mid.kaih += 1), 668 == _mib.ship_id && (_mid.tyku += 1, _mid.kaih += 1)), !_mie.exists()) return _mid;
            var _mif = _mib.get_slotnums(106) + _mib.get_slotnums(450);
            return _mid.add(_mie.multiply(_mif)), _mid;
        };
    },
    15133: (_mig, _mih, _mii) => {
        'use strict';
        var _mij = null;
        defineModule(_mih);
        Object.defineProperty(_mih, '__esModule', {
            'value': true
        }), _mih.getSlot115PersonalEffect = void 0;
        var _mik = _mii(74496);
        _mih.getSlot115PersonalEffect = function(_mil) {
            var _mim = null,
                _min = new _mik.SlotItemEffectModel(),
                _mio = false,
                _mip = new _mik.SlotItemEffectModel(),
                _miq = 0;
            if (55 != _mil.ctype && 47 != _mil.ctype || (_mip.houg += 2, _mip.saku += 2, _mip.kaih += 1, _mio = true, _miq = 1), 0 == _mio) return _min;
            var _mir = _mil.get_slotnums(115);
            if (_min.add(_mip.multiply(_mir)), 0 == _miq) return _min;
            var _mis = _mil.get_each_level_nums(115)[10];
            return 1 == _miq && (_min.houg += 1 * _mis, _min.kaih += 1 * _mis), _min;
        };
    },
    55747: (_mit, _miu, _miv) => {
        'use strict';
        var _miw = null;
        defineModule(_miu);
        Object.defineProperty(_miu, '__esModule', {
            'value': true
        }), _miu.getSlot118PersonalEffect = void 0;
        var _mix = _miv(74496);
        _miu.getSlot118PersonalEffect = function(_miy) {
            var _miz = null,
                _mj0 = new _mix.SlotItemEffectModel(),
                _mj1 = false,
                _mj2 = new _mix.SlotItemEffectModel(),
                _mj3 = 0;
            if (52 == _miy.ctype && (_mj2.houg += 1, _mj2.saku += 2, _mj2.kaih += 2, _mj3 = 1, _mj1 = true), 507 == _miy.ship_id && (_mj2.houg += 3, _mj2.saku += 2, _mj2.kaih += 1, _mj3 = 2, _mj1 = true), 0 == _mj1) return _mj0;
            var _mj4 = _miy.get_slotnums(118) + _miy.get_slotnums(521);
            if (_mj0.add(_mj2.multiply(_mj4)), 0 == _miy.get_slotnums(118)) return _mj0;
            if (0 == _mj3) return _mj0;
            var _mj5 = _miy.get_each_level_nums(118),
                _mj6 = 0,
                _mj7 = 0,
                _mj8 = 0,
                _mj9 = _mj5[10];
            return _mj5.forEach(function(_mja, _mjb) {
                _mjb >= 2 && (_mj6 += _mja), _mjb >= 5 && (_mj7 += _mja), _mjb >= 7 && (_mj8 += _mja);
            }), 1 == _mj3 ? (_mj0.houg += 2 * _mj9, _mj0.saku += 1 * _mj9) : 2 == _mj3 && (_mj0.houm += 1 * _mj6, _mj0.kaih += 1 * _mj7, _mj0.houg += 1 * _mj8, _mj0.houg += 1 * _mj9, _mj0.raig += 1 * _mj9, _mj0.tyku += 1 * _mj9, _mj0.saku += 1 * _mj9, _mj0.kaih += 1 * _mj9), _mj0;
        };
    },
    11285: (_mjc, _mjd, _mje) => {
        'use strict';
        var _mjf = null;
        defineModule(_mjd);
        Object.defineProperty(_mjd, '__esModule', {
            'value': true
        }), _mjd.getSlot119PersonalEffect = void 0;
        var _mjg = _mje(74496);
        _mjd.getSlot119PersonalEffect = function(_mjh) {
            var _mji = null,
                _mjj = new _mjg.SlotItemEffectModel(),
                _mjk = new _mjg.SlotItemEffectModel();
            34 == _mjh.ctype || 56 == _mjh.ctype ? _mjk.houg += 1 : 90 == _mjh.ctype && (_mjk.houg += 2, _mjk.raig += 1);
            var _mjl = true;
            if (_mjk.exists() || (_mjl = false), 0 == _mjl) return _mjj;
            var _mjm = _mjh.get_slotnums(119);
            return _mjj = _mjk.multiply(_mjm);
        };
    },
    96200: (_mjn, _mjo, _mjp) => {
        'use strict';
        var _mjq = null;
        defineModule(_mjo);
        Object.defineProperty(_mjo, '__esModule', {
            'value': true
        }), _mjo.getSlot120mm50GroupPersonalEffect = void 0;
        var _mjr = _mjp(74496);
        _mjo.getSlot120mm50GroupPersonalEffect = function(_mjs) {
            var _mjt = null,
                _mju = new _mjr.SlotItemEffectModel(),
                _mjv = false,
                _mjw = new _mjr.SlotItemEffectModel(),
                _mjx = _mjs.get_slotnums(147),
                _mjy = _mjs.get_slotnums(393),
                _mjz = _mjs.get_slotnums(394),
                _mk0 = new _mjr.SlotItemEffectModel(),
                _mk1 = new _mjr.SlotItemEffectModel();
            if (61 == _mjs.ctype && (_mjw.houg += 1, _mjw.kaih += 1, _mjv = true, _mjy >= 1 && (_mk0.houg += 1, _mk0.tyku += 1), _mjz >= 1 && (_mk1.houg += 1, _mk1.tyku += 1, _mk1.kaih += 1, 'グレカーレ' == _mjs.yomi && (_mk1.kaih += 1)), 1), 0 == _mjv) return _mju;
            var _mk2 = _mjx + _mjy + _mjz;
            _mju.add(_mjw.multiply(_mk2)).add(_mk0.multiply(_mjy)).add(_mk1.multiply(_mjz));
            var _mk3 = _mjs.get_each_level_over_nums([394]).slot[394];
            return _mk3[7] >= 1 && (_mju.houm += 1 * _mk3[7], 'グレカーレ' == _mjs.yomi && (_mju.houg += 1 * _mk3[7])), _mk3[8] >= 1 && (_mju.houg += 1 * _mk3[8]), _mk3[9] >= 1 && (_mju.houm += 1 * _mk3[9]), _mk3[10] >= 1 && (_mju.houg += 1 * _mk3[10], 'グレカーレ' == _mjs.yomi && (_mju.kaih += 1 * _mk3[10])), _mju;
        };
    },
    33155: function(_mk4, _mk5, _mk6) {
        'use strict';
        var _mk7 = null;
        var _mk8 = this && this.__importDefault || function(_mk9) {
            var _mka = null;
            return _mk9 && _mk9.__esModule ? _mk9 : {
                'default': _mk9
            };
        };
        defineModule(_mk5);
        Object.defineProperty(_mk5, '__esModule', {
            'value': true
        }), _mk5.getSlot121PersonalEffect = void 0;
        var _mkb = _mk6(74496),
            _mkc = _mk8(_mk6(18622));
        _mk5.getSlot121PersonalEffect = function(_mkd) {
            var _mke = null,
                _mkf = new _mkb.SlotItemEffectModel(),
                _mkg = 0,
                _mkh = new _mkb.SlotItemEffectModel(),
                _mki = false;
            54 == _mkd.ctype && (_mkf.tyku += 4, _mkf.kaih += 2, _mkg = 1), 968 == _mkd.ship_id && (_mkh.houg += 1, _mkh.tyku += 1, _mkh.kaih += 1, _mki = true);
            var _mkj = _mkd.get_slotnums(121);
            if (_mki && _mkf.add(_mkh.multiply(_mkj)), 0 == _mkg) return _mkf;
            for (var _mkk = 0, _mkl = 0, _mkm = _mkd.have_slot_ids(); _mkl < _mkm.length; _mkl++) {
                var _mkn = _mkm[_mkl],
                    _mko = _mkc.default.model.slot.getMst(_mkn),
                    _mkp = _mko.equipType;
                12 != _mkp && 13 != _mkp || (_mko.sakuteki >= 5 && _mkd.get_slotnums(parseInt(_mkn)), _mko.taiku >= 2 && (_mkk += _mkd.get_slotnums(parseInt(_mkn))));
            }
            return _mkk >= 1 && (_mkf.tyku += 2, _mkf.kaih += 2, 968 == _mkd.ship_id && (_mkf.houg += 1 * _mkj, _mkf.houm += 1 * _mkj)), _mkf;
        };
    },
    9115: function(_mkq, _mkr, _mks) {
        'use strict';
        var _mkt = null;
        var _mku = this && this.__importDefault || function(_mkv) {
            var _mkw = null;
            return _mkv && _mkv.__esModule ? _mkv : {
                'default': _mkv
            };
        };
        defineModule(_mkr);
        Object.defineProperty(_mkr, '__esModule', {
            'value': true
        }), _mkr.getSlot122PersonalEffect = void 0;
        var _mkx = _mks(74496),
            _mky = _mku(_mks(18622));
        _mkr.getSlot122PersonalEffect = function(_mkz) {
            var _ml0 = null,
                _ml1 = new _mkx.SlotItemEffectModel(),
                _ml2 = 0,
                _ml3 = 0,
                _ml4 = false;
            656 == _mkz.ship_id && (_ml4 = true, _ml2 = 1, _ml3 = 1);
            var _ml5 = 0,
                _ml6 = 0,
                _ml7 = _mkz.get_each_level_nums(122),
                _ml8 = 0;
            if (_ml4) {
                _ml7.forEach(function(_ml9, _mla) {
                    _mla >= 4 && (_ml8 += _ml9);
                });
                for (var _mlb = 0, _mlc = _mkz.have_slot_ids(); _mlb < _mlc.length; _mlb++) {
                    var _mld = _mlc[_mlb],
                        _mle = _mky.default.model.slot.getMst(_mld),
                        _mlf = _mle.equipType;
                    12 != _mlf && 13 != _mlf || (_mle.sakuteki >= 5 && (_ml5 += _mkz.get_slotnums(parseInt(_mld))), _mle.taiku >= 2 && (_ml6 += _mkz.get_slotnums(parseInt(_mld))));
                }
            }
            return _ml8 > 0 && (1 == _ml3 && (_ml5 > 0 && (_ml1.houg += 4, _ml1.kaih += 3), _ml6 > 0 && (_ml1.tyku += 4, _ml1.kaih += 3)), 1 == _ml2 && (_ml1.houg += 5 * _ml8, _ml1.tyku += 3 * _ml8, _ml1.kaih += 2 * _ml8)), _ml1;
        };
    },
    85127: (_mlg, _mlh, _mli) => {
        'use strict';
        var _mlj = null;
        defineModule(_mlh);
        Object.defineProperty(_mlh, '__esModule', {
            'value': true
        }), _mlh.getSlot123PersonalEffect = void 0;
        var _mlk = _mli(74496);
        _mlh.getSlot123PersonalEffect = function(_mll) {
            var _mlm = null,
                _mln = new _mlk.SlotItemEffectModel(),
                _mlo = (new _mlk.SlotItemEffectModel(), 0),
                _mlp = (_mll.get_slotnums(123), _mll.get_slotnums(124));
            if ('ドイツ' != _mll.getCountryName()) return _mln;
            _mlo = 1, _mlp >= 1 && (_mln.kaih += 1 * _mlp);
            var _mlq = _mll.get_each_level_over_nums([123, 124]),
                _mlr = _mlq.slot[123],
                _mls = _mlq.slot[124];
            return 1 == _mlo && (_mlr[5] >= 1 && (_mln.houg += 1 * _mlr[5]), _mlr[7] >= 1 && (_mln.houm += 1 * _mlr[7]), _mlr[9] >= 1 && (_mln.houg += 1 * _mlr[9]), _mlr[10] >= 1 && (_mln.houm += 1 * _mlr[10]), _mls[8] >= 1 && (_mln.kaih += 1 * _mls[8]), _mls[10] >= 1 && (_mln.houm += 1 * _mls[10])), _mln;
        };
    },
    87204: (_mlt, _mlu, _mlv) => {
        'use strict';
        var _mlw = null;
        defineModule(_mlu);
        Object.defineProperty(_mlu, '__esModule', {
            'value': true
        }), _mlu.getSlot124PersonalEffect = void 0;
        var _mlx = _mlv(74496);
        _mlu.getSlot124PersonalEffect = function(_mly) {
            var _mlz = null,
                _mm0 = new _mlx.SlotItemEffectModel(),
                _mm1 = (new _mlx.SlotItemEffectModel(), 0),
                _mm2 = _mly.getCountryName();
            if ('ドイツ' == _mm2) _mm1 = 1;
            else {
                if ('イタリア' != _mm2) return _mm0;
                _mm1 = 2;
            }
            var _mm3 = _mly.get_each_level_over_nums([124]).slot[124];
            return 1 == _mm1 ? (_mm3[7] >= 1 && (_mm0.houm += 1 * _mm3[7]), _mm3[8] >= 1 && (_mm0.houg += 1 * _mm3[8]), _mm3[9] >= 1 && (_mm0.tyku += 1 * _mm3[9]), _mm3[10] >= 1 && (_mm0.houm += 1 * _mm3[10])) : 2 == _mm1 && (_mm3[8] >= 1 && (_mm0.houm += 1 * _mm3[8]), _mm3[9] >= 1 && (_mm0.tyku += 1 * _mm3[9]), _mm3[10] >= 1 && (_mm0.houg += 1 * _mm3[10])), _mm0;
        };
    },
    37173: (_mm4, _mm5, _mm6) => {
        'use strict';
        var _mm7 = null;
        defineModule(_mm5);
        Object.defineProperty(_mm5, '__esModule', {
            'value': true
        }), _mm5.getSlot129PersonalEffect = void 0;
        var _mm8 = _mm6(74496);
        _mm5.getSlot129PersonalEffect = function(_mm9) {
            var _mma = null,
                _mmb = new _mm8.SlotItemEffectModel(),
                _mmc = false,
                _mmd = new _mm8.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mm9.ctype) >= 0 ? (_mmd.houg = 1, _mmd.raig = 2, _mmd.kaih = 2, _mmd.tais = 2, _mmd.saku = 1, _mmc = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mm9.ctype) >= 0 ? (_mmd.houg = 1, _mmd.raig = 2, _mmd.kaih = 2, _mmd.saku = 3, _mmc = true) : [7, 13, 29, 8, 9, 31].indexOf(_mm9.ctype) >= 0 && (_mmd.houg = 1, _mmd.kaih = 2, _mmd.saku = 3, _mmc = true), 0 == _mmc) return _mmb;
            var _mme = _mm9.get_slotnums(129);
            return _mmb = _mmd.multiply(_mme);
        };
    },
    73254: (_mmf, _mmg, _mmh) => {
        'use strict';
        var _mmi = null;
        defineModule(_mmg);
        Object.defineProperty(_mmg, '__esModule', {
            'value': true
        }), _mmg.getSlot12PersonalEffect = void 0;
        var _mmj = _mmh(74496);
        _mmg.getSlot12PersonalEffect = function(_mmk) {
            var _mml = null,
                _mmm = new _mmj.SlotItemEffectModel(),
                _mmn = false,
                _mmo = new _mmj.SlotItemEffectModel(),
                _mmp = _mmk.get_slotnums(142) + _mmk.get_slotnums(460);
            if (37 == _mmk.ctype && (_mmo.houg += 1, _mmo.kaih += 1, _mmo.houm += 1, _mmp >= 1 && (_mmm.kaih += 1, _mmm.houm += 1), _mmn = true), 0 == _mmn) return _mmm;
            var _mmq = _mmk.get_slotnums(12);
            return _mmm.add(_mmo.multiply(_mmq)), _mmm;
        };
    },
    41410: (_mmr, _mms, _mmt) => {
        'use strict';
        var _mmu = null;
        defineModule(_mms);
        Object.defineProperty(_mms, '__esModule', {
            'value': true
        }), _mms.getSlot130PersonalEffect = void 0;
        var _mmv = _mmt(74496);
        _mms.getSlot130PersonalEffect = function(_mmw) {
            var _mmx = null,
                _mmy = new _mmv.SlotItemEffectModel(),
                _mmz = _mmw.have_level_num_over_dict[130];
            return null == _mmz || (428 == _mmw.ship_id ? (_mmz[1] >= 1 && (_mmy.tyku += 1 * _mmz[1]), _mmz[3] >= 1 && (_mmy.kaih += 1 * _mmz[3]), _mmz[5] >= 1 && (_mmy.houm += 1 * _mmz[5]), _mmz[7] >= 1 && (_mmy.tyku += 1 * _mmz[7]), _mmz[8] >= 1 && (_mmy.kaih += 1 * _mmz[8]), _mmz[9] >= 1 && (_mmy.tyku += 1 * _mmz[9]), _mmz[10] >= 1 && (_mmy.houg += 1 * _mmz[10])) : 141 == _mmw.ship_id && (_mmz[2] >= 1 && (_mmy.tyku += 1 * _mmz[2]), _mmz[4] >= 1 && (_mmy.kaih += 1 * _mmz[4]), _mmz[6] >= 1 && (_mmy.houm += 1 * _mmz[6]), _mmz[8] >= 1 && (_mmy.tyku += 1 * _mmz[8]), _mmz[10] >= 1 && (_mmy.kaih += 1 * _mmz[10])), 1 == _mmw.stype && (_mmz[3] >= 1 && (_mmy.tyku += 1 * _mmz[3]), _mmz[6] >= 1 && (_mmy.kaih += 1 * _mmz[6]), _mmz[9] >= 1 && (_mmy.tyku += 1 * _mmz[9]), _mmz[10] >= 1 && (_mmy.kaih += 1 * _mmz[10]))), _mmy;
        };
    },
    93373: (_mn0, _mn1, _mn2) => {
        'use strict';
        var _mn3 = null;
        defineModule(_mn1);
        Object.defineProperty(_mn1, '__esModule', {
            'value': true
        }), _mn1.getSlot132PersonalEffect = void 0;
        var _mn4 = _mn2(74496);
        _mn1.getSlot132PersonalEffect = function(_mn5) {
            var _mn6 = null,
                _mn7 = new _mn4.SlotItemEffectModel(),
                _mn8 = _mn5.get_each_level_nums(132),
                _mn9 = 0,
                _mna = 0,
                _mnb = 0,
                _mnc = 0,
                _mnd = 0;
            return _mn8.forEach(function(_mne, _mnf) {
                _mnf >= 3 && (_mn9 += _mne), _mnf >= 5 && (_mna += _mne), _mnf >= 7 && (_mnb += _mne), _mnf >= 8 && (_mnc += _mne), _mnf >= 9 && (_mnd += _mne);
            }), _mn9 >= 1 && (_mn7.kaih += 1), _mna >= 1 && (_mn7.tais += 1), _mnb >= 1 && (_mn7.kaih += 1), _mnc >= 1 && (_mn7.tais += 1), _mnd >= 1 && (_mn7.houm += 1), _mn8[10] >= 1 && (_mn7.tais += 1), 911 != _mn5.ship_id && 916 != _mn5.ship_id && 546 != _mn5.ship_id || (_mn7.kaih += 1), 461 != _mn5.ship_id && 466 != _mn5.ship_id && 462 != _mn5.ship_id && 467 != _mn5.ship_id && 156 != _mn5.ship_id || (_mn7.kaih += 2), _mn7;
        };
    },
    88838: (_mng, _mnh, _mni) => {
        'use strict';
        var _mnj = null;
        defineModule(_mnh);
        Object.defineProperty(_mnh, '__esModule', {
            'value': true
        }), _mnh.getSlot136PersonalEffect = void 0;
        var _mnk = _mni(74496);
        _mnh.getSlot136PersonalEffect = function(_mnl) {
            var _mnm = null,
                _mnn = new _mnk.SlotItemEffectModel(),
                _mno = 0;
            if (58 != _mnl.ctype && 61 != _mnl.ctype && 64 != _mnl.ctype && 68 != _mnl.ctype && 80 != _mnl.ctype && 92 != _mnl.ctype && 113 != _mnl.ctype && 124 != _mnl.ctype || (_mnn.souk += 2, _mnn.kaih += 1, _mno = 1), 879 == _mnl.ship_id && (_mnn.souk += 1, _mnn.kaih += 1), 0 == _mno) return _mnn;
            var _mnp = _mnl.get_each_level_nums(136),
                _mnq = 0,
                _mnr = 0,
                _mns = _mnp[10];
            return _mno > 0 && _mnp.forEach(function(_mnt, _mnu) {
                _mnu >= 3 && (_mnq += _mnt), _mnu >= 6 && (_mnr += _mnt);
            }), 1 == _mno && (_mnq >= 1 && (_mnn.souk += 1 * _mnq), _mnr >= 1 && (_mnn.souk += 1 * _mnr), _mns >= 1 && (_mnn.souk += 1 * _mns)), _mnn;
        };
    },
    17274: (_mnv, _mnw, _mnx) => {
        'use strict';
        var _mny = null;
        defineModule(_mnw);
        Object.defineProperty(_mnw, '__esModule', {
            'value': true
        }), _mnw.getSlot139PersonalEffect = void 0;
        var _mnz = _mnx(74496);
        _mnw.getSlot139PersonalEffect = function(_mo0) {
            var _mo1 = null,
                _mo2 = new _mnz.SlotItemEffectModel(),
                _mo3 = false,
                _mo4 = new _mnz.SlotItemEffectModel();
            if (662 != _mo0.ship_id && 663 != _mo0.ship_id && 668 != _mo0.ship_id || (_mo4.houg += 2, _mo4.tyku += 1, _mo3 = true), 0 == _mo3) return _mo2;
            var _mo5 = _mo0.get_slotnums(139);
            return _mo2.add(_mo4.multiply(_mo5)), _mo2;
        };
    },
    6482: (_mo6, _mo7, _mo8) => {
        'use strict';
        var _mo9 = null;
        defineModule(_mo7);
        Object.defineProperty(_mo7, '__esModule', {
            'value': true
        }), _mo7.getSlot13_8cmRensouhouPersonalEffect = void 0;
        var _moa = _mo8(74496);
        _mo7.getSlot13_8cmRensouhouPersonalEffect = function(_mob) {
            var _moc = null,
                _mod = new _moa.SlotItemEffectModel(),
                _moe = false,
                _mof = new _moa.SlotItemEffectModel(),
                _mog = 0,
                _moh = _mob.getCountryName(),
                _moi = _mob.get_slotnums(534),
                _moj = _mob.get_slotnums(535);
            if ('フランス' == _moh && (_mof.houg += 2, _mof.houm += 1, 129 == _mob.ctype && (_mof.houm += 1), 967 == _mob.ship_id && _moj >= 1 && (_mof.houg += 1), _moe = true, _mog = 1), 0 == _moe) return _mod;
            var _mok = _moi + _moj;
            if (_mod.add(_mof.multiply(_mok)), 0 == _mog) return _mod;
            _mob.haveSlotLevelNumOver(534);
            var _mol = _mob.haveSlotLevelNumOver(535),
                _mom = _mob.getTotalCountWithOverLeveledItem([534, 535]);
            return 1 == _mog && (_mom[2] >= 1 && (_mod.houm += 1 * _mom[2]), _mom[4] >= 1 && (_mod.houg += 1 * _mom[4]), _mom[6] >= 1 && (_mod.houm += 1 * _mom[6]), _mol[7] >= 1 && (_mod.houg += 1 * _mol[7]), _mom[8] >= 1 && (_mod.houg += 1 * _mom[8]), _mol[9] >= 1 && (_mod.houm += 1 * _mol[9]), _mom[10] >= 1 && (_mod.houg += 1 * _mom[10])), _mod;
        };
    },
    21713: (_mon, _moo, _mop) => {
        'use strict';
        var _moq = null;
        defineModule(_moo);
        Object.defineProperty(_moo, '__esModule', {
            'value': true
        }), _moo.getSlot143PersonalEffect = void 0;
        var _mor = _mop(74496);
        _moo.getSlot143PersonalEffect = function(_mos) {
            var _mot = null,
                _mou = new _mor.SlotItemEffectModel();
            return 'あかぎ' == _mos.yomi ? _mou.houg = 3 : 'かが' == _mos.yomi || 'しょうかく' == _mos.yomi ? _mou.houg = 2 : ('ずいかく' == _mos.yomi || 'りゅうじょう' == _mos.yomi) && (_mou.houg = 1), _mou;
        };
    },
    59823: (_mov, _mow, _mox) => {
        'use strict';
        var _moy = null;
        defineModule(_mow);
        Object.defineProperty(_mow, '__esModule', {
            'value': true
        }), _mow.getSlot144PersonalEffect = void 0;
        var _moz = _mox(74496);
        _mow.getSlot144PersonalEffect = function(_mp0) {
            var _mp1 = null,
                _mp2 = new _moz.SlotItemEffectModel();
            return 'あかぎ' == _mp0.yomi ? _mp2.houg = 3 : 'かが' == _mp0.yomi ? _mp2.houg = 2 : 'しょうかく' == _mp0.yomi ? (_mp2.houg = 2, 461 != _mp0.ship_id && 466 != _mp0.ship_id || (_mp2.houg += 2)) : 'ずいかく' == _mp0.yomi ? (_mp2.houg = 1, 462 != _mp0.ship_id && 467 != _mp0.ship_id || (_mp2.houg += 1)) : 'りゅうじょう' == _mp0.yomi && (_mp2.houg = 1), _mp2;
        };
    },
    57440: (_mp3, _mp4, _mp5) => {
        'use strict';
        var _mp6 = null;
        defineModule(_mp4);
        Object.defineProperty(_mp4, '__esModule', {
            'value': true
        }), _mp4.getSlot149PersonalEffect = void 0;
        var _mp7 = _mp5(74496);
        _mp4.getSlot149PersonalEffect = function(_mp8) {
            var _mp9 = null,
                _mpa = new _mp7.SlotItemEffectModel(),
                _mpb = new _mp7.SlotItemEffectModel(),
                _mpc = false;
            return 488 == _mp8.ship_id || 141 == _mp8.ship_id || 160 == _mp8.ship_id || 622 == _mp8.ship_id || 623 == _mp8.ship_id || 656 == _mp8.ship_id || 961 == _mp8.ship_id ? (_mpb.tais = 1, _mpb.kaih = 3, _mpc = true) : 624 == _mp8.ship_id ? (_mpb.tais = 3, _mpb.kaih = 5, _mpc = true) : 662 == _mp8.ship_id && (_mpb.tais = 2, _mpb.kaih = 4, _mpc = true), 54 == _mp8.ctype && (_mpb.tais = 1, _mpb.kaih = 2, _mpc = true), 0 == _mpc ? _mpa : _mpa = _mpb.multiply(1);
        };
    },
    29493: (_mpd, _mpe, _mpf) => {
        'use strict';
        var _mpg = null;
        defineModule(_mpe);
        Object.defineProperty(_mpe, '__esModule', {
            'value': true
        }), _mpe.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mph = _mpf(74496);
        _mpe.getSlot14inch45CaliberGunPersonalEffect = function(_mpi) {
            var _mpj = null,
                _mpk, _mpl, _mpm, _mpn = new _mph.SlotItemEffectModel(),
                _mpo = false,
                _mpp = new _mph.SlotItemEffectModel(),
                _mpq = {
                    507: 507,
                    508: 507
                },
                _mpr = _mpi.get_slotnums(507),
                _mps = _mpi.get_slotnums(508),
                _mpt = _mpr + _mps,
                _mpu = _mpi.getCountryName(),
                _mpv = _mpi.getUSSWaterRaderDict();
            if (125 == _mpi.ctype && (_mpp.houg += 1, _mpp.kaih += 1, _mpp.houm += 1, _mpo = true, _mpr >= 1 && _mps >= 1 && (_mpn.houg += 1, _mpn.houm += 1)), 'アメリカ' == _mpu && _mpi.stype >= 8 && _mpi.stype <= 10) {
                _mpp.houg += 2, _mpp.kaih += 1, _mpp.houm += 1, _mpo = true;
                for (var _mpw = 0, _mpx = 0, _mpy = _mpi.have_slot_ids(); _mpx < _mpy.length; _mpx++) {
                    var _mpz = _mpy[_mpx];
                    _mpv[Number(_mpz)] && (_mpw += _mpi.get_slotnums(parseInt(_mpz)));
                }
                _mpw >= 1 && (_mpn.houg += 1, _mpn.kaih += 1, _mpn.houm += 2), _mpr >= 1 && _mps >= 1 && (_mpn.houg += 1, _mpn.houm += 1, _mpn.kaih += 2);
            }
            else 6 != _mpi.ctype && 26 != _mpi.ctype && 2 != _mpi.ctype && 'イギリス' != _mpu || (_mpn.kaih += 1, _mpn.houm += 1, _mpr >= 1 && _mps >= 1 && (_mpn.houg += 1, _mpn.houm += 1, _mpn.kaih += 1));
            _mpo && _mpn.add(_mpp.multiply(_mpt));
            for (var _mq0 = {}, _mq1 = {}, _mq2 = {}, _mq3 = function(_mq4) {
                    var _mq5 = null,
                        _mq6 = Number(_mq4),
                        _mq7 = _mpq[_mq6];
                    _mq0[_mq7] = null !== (_mpk = _mq0[_mq7]) && void 0 !== _mpk ? _mpk : 0, _mq1[_mq7] = null !== (_mpl = _mq1[_mq7]) && void 0 !== _mpl ? _mpl : 0, _mq2[_mq7] = null !== (_mpm = _mq2[_mq7]) && void 0 !== _mpm ? _mpm : 0, _mpi.get_each_level_nums(_mq6).forEach(function(_mq8, _mq9) {
                        _mq9 >= 3 && (_mq0[_mq7] += _mq8), _mq9 >= 6 && (_mq1[_mq7] += _mq8), _mq9 >= 9 && (_mq2[_mq7] += _mq8);
                    });
                }, _mqa = 0, _mqb = Object.keys(_mpq); _mqa < _mqb.length; _mqa++) {
                _mq3(_mqb[_mqa]);
            }
            return _mq0[507] >= 1 && (_mpn.houg += 1 * _mq0[507]), _mq1[507] >= 1 && (_mpn.souk += 1 * _mq1[507]), _mq2[507] >= 1 && (_mpn.houm += 1 * _mq2[507]), _mpn;
        };
    },
    66985: (_mqc, _mqd, _mqe) => {
        'use strict';
        var _mqf = null;
        defineModule(_mqd);
        Object.defineProperty(_mqd, '__esModule', {
            'value': true
        }), _mqd.getSlot15PersonalEffect = void 0;
        var _mqg = _mqe(74496);
        _mqd.getSlot15PersonalEffect = function(_mqh) {
            var _mqi = null,
                _mqj = new _mqg.SlotItemEffectModel(),
                _mqk = false;
            if ((566 == _mqh.ship_id || 567 == _mqh.ship_id || 568 == _mqh.ship_id || 648 == _mqh.ship_id || 651 == _mqh.ship_id || 656 == _mqh.ship_id || 670 == _mqh.ship_id || 915 == _mqh.ship_id || 951 == _mqh.ship_id || 'たけ' == _mqh.yomi) && (_mqk = true), 0 == _mqk) return _mqj;
            var _mql = _mqh.get_slotnums(15);
            return 30 == _mqh.ctype && (1 == _mql ? _mqj.raig = 2 : _mql >= 2 && (_mqj.raig = 4)), 'たけ' == _mqh.yomi && (_mqj.raig += 5, _mqj.kaih += 1), _mqj;
        };
    },
    70332: (_mqm, _mqn, _mqo) => {
        'use strict';
        var _mqp = null;
        defineModule(_mqn);
        Object.defineProperty(_mqn, '__esModule', {
            'value': true
        }), _mqn.getSlot15_2cmSanrensouSyuhouPersonalEffect = void 0;
        var _mqq = _mqo(74496);
        _mqn.getSlot15_2cmSanrensouSyuhouPersonalEffect = function(_mqr) {
            var _mqs = null,
                _mqt = new _mqq.SlotItemEffectModel(),
                _mqu = false,
                _mqv = new _mqq.SlotItemEffectModel(),
                _mqw = 0,
                _mqx = _mqr.getCountryName(),
                _mqy = _mqr.get_slotnums(536),
                _mqz = _mqr.get_slotnums(537);
            if ('フランス' == _mqx && (_mqv.houg += 2, _mqv.houm += 1, 128 == _mqr.ctype && (_mqv.houm += 1), 970 == _mqr.ship_id && _mqz >= 1 && (_mqv.houg += 1, _mqv.kaih += 2, _mqv.houm += 1), _mqu = true, _mqw = 1), 0 == _mqu) return _mqt;
            var _mr0 = _mqy + _mqz;
            if (_mqt.add(_mqv.multiply(_mr0)), 0 == _mqw) return _mqt;
            _mqr.haveSlotLevelNumOver(536);
            var _mr1 = _mqr.haveSlotLevelNumOver(537),
                _mr2 = _mqr.getTotalCountWithOverLeveledItem([536, 537]),
                _mr3 = _mqr.get_slotnums(471) + _mqr.get_slotnums(538),
                _mr4 = _mqr.haveSlotLevelNumOver(538);
            return 1 == _mqw && (_mr2[3] >= 1 && (_mqt.houm += 1 * _mr2[3]), _mr2[4] >= 1 && (_mqt.houg += 1 * _mr2[4]), _mr1[5] >= 1 && (_mqt.kaih += 1 * _mr1[5]), _mr2[6] >= 1 && (_mqt.houm += 1 * _mr2[6]), _mr2[7] >= 1 && (_mqt.houg += 1 * _mr2[7]), _mr1[8] >= 1 && (_mqt.kaih += 1 * _mr1[8]), _mr2[9] >= 1 && (_mqt.houm += 1 * _mr2[9]), _mr2[10] >= 1 && (_mqt.houg += 1 * _mr2[10]), _mr2[1] >= 1 && (_mr3 >= 1 && (970 == _mqr.ship_id && (_mqt.kaih += 1 * _mr3), _mqt.houm += 1 * _mr3), _mr4[7] >= 1 && (_mqt.kaih += 1 * _mr4[7]), _mr4[9] >= 1 && (_mqt.houm += 1 * _mr4[9]))), _mqt;
        };
    },
    79086: (_mr5, _mr6, _mr7) => {
        'use strict';
        var _mr8 = null;
        defineModule(_mr6);
        Object.defineProperty(_mr6, '__esModule', {
            'value': true
        }), _mr6.getSlot165_216PersonalEffect = void 0;
        var _mr9 = _mr7(74496);
        _mr6.getSlot165_216PersonalEffect = function(_mra) {
            var _mrb = null,
                _mrc = new _mr9.SlotItemEffectModel();
            return 501 != _mra.ship_id && 506 != _mra.ship_id && 502 != _mra.ship_id && 507 != _mra.ship_id || (_mrc.tyku += 2, _mrc.kaih += 2), _mrc;
        };
    },
    88102: (_mrd, _mre, _mrf) => {
        'use strict';
        var _mrg = null;
        defineModule(_mre);
        Object.defineProperty(_mre, '__esModule', {
            'value': true
        }), _mre.getSlot16M1PersonalEffect = void 0;
        var _mrh = _mrf(74496);
        _mre.getSlot16M1PersonalEffect = function(_mri) {
            var _mrj = null,
                _mrk = new _mrh.SlotItemEffectModel(),
                _mrl = new _mrh.SlotItemEffectModel();
            67 == _mri.ctype || 78 == _mri.ctype || 82 == _mri.ctype || 88 == _mri.ctype || 108 == _mri.ctype || 112 == _mri.ctype ? (_mrl.houg += 2, _mrl.souk += 1, 67 == _mri.ctype && (_mrl.kaih -= 2)) : 149 == _mri.ship_id || 150 == _mri.ship_id || 151 == _mri.ship_id || 152 == _mri.ship_id ? (_mrl.houg += 1, _mrl.souk += 1, _mrl.kaih -= 3) : 591 == _mri.ship_id || 592 == _mri.ship_id ? (_mrl.houg += 2, _mrl.souk += 1, _mrl.kaih -= 2) : 593 != _mri.ship_id && 954 != _mri.ship_id || (_mrl.houg += 1, _mrl.souk += 1, _mrl.kaih -= 1);
            var _mrm = true;
            if (_mrl.exists() || (_mrm = false), 0 == _mrm) return _mrk;
            var _mrn = _mri.get_slotnums(298) + _mri.get_slotnums(299) + _mri.get_slotnums(300);
            return _mrk = _mrl.multiply(_mrn);
        };
    },
    29240: (_mro, _mrp, _mrq) => {
        'use strict';
        var _mrr = null;
        defineModule(_mrp);
        Object.defineProperty(_mrp, '__esModule', {
            'value': true
        }), _mrp.getSlot171PersonalEffect = void 0;
        var _mrs = _mrq(74496);
        _mrp.getSlot171PersonalEffect = function(_mrt) {
            var _mru = null,
                _mrv = new _mrs.SlotItemEffectModel(),
                _mrw = 0;
            'アメリカ' == _mrt.getCountryName() && (_mrw = 1), 65 != _mrt.ctype && 93 != _mrt.ctype && 102 != _mrt.ctype && 107 != _mrt.ctype && 125 != _mrt.ctype || (_mrv.houg += 1, _mrv.saku += 1, _mrw = 2);
            var _mrx = _mrt.get_each_level_nums(171),
                _mry = 0,
                _mrz = 0,
                _ms0 = 0;
            return _mrw > 0 && (_mrx.map(function(_ms1, _ms2) {
                _ms2 >= 5 && (_mry += _ms1), _ms2 >= 3 && (_mrz += _ms1), _ms2 >= 8 && (_ms0 += _ms1);
            }), 1 != _mrw && 2 != _mrw || (_mrx[10] > 0 && (_mrv.houg += 1), _mry > 0 && (_mrv.kaih += 1)), 2 == _mrw && (_mrz > 0 && (_mrv.saku += 1), _ms0 > 0 && (_mrv.saku += 1))), _mrv;
        };
    },
    40885: (_ms3, _ms4, _ms5) => {
        'use strict';
        var _ms6 = null;
        defineModule(_ms4);
        Object.defineProperty(_ms4, '__esModule', {
            'value': true
        }), _ms4.getSlot174PersonalEffect = void 0;
        var _ms7 = _ms5(74496);
        _ms4.getSlot174PersonalEffect = function(_ms8) {
            var _ms9 = null,
                _msa = new _ms7.SlotItemEffectModel(),
                _msb = new _ms7.SlotItemEffectModel();
            if (66 == _ms8.ctype && (_msb.raig = 1, _msb.kaih = 2), 591 == _ms8.ship_id || 592 == _ms8.ship_id || 954 == _ms8.ship_id ? (_msb.raig += 6, _msb.kaih += 3) : 593 == _ms8.ship_id ? (_msb.raig += 5, _msb.kaih += 2) : 488 != _ms8.ship_id && 622 != _ms8.ship_id && 623 != _ms8.ship_id && 624 != _ms8.ship_id || (_msb.houg += 2, _msb.raig += 4, _msb.kaih += 4), !_msb.exists()) return _msa;
            var _msc = _ms8.get_slotnums(174);
            return _msa = _msb.multiply(_msc);
        };
    },
    19614: (_msd, _mse, _msf) => {
        'use strict';
        var _msg = null;
        defineModule(_mse);
        Object.defineProperty(_mse, '__esModule', {
            'value': true
        }), _mse.getSlot179PersonalEffect = void 0;
        var _msh = _msf(74496);
        _mse.getSlot179PersonalEffect = function(_msi) {
            var _msj = null,
                _msk = new _msh.SlotItemEffectModel(),
                _msl = new _msh.SlotItemEffectModel();
            if (54 == _msi.ctype && (_msl.raig = 1), !_msl.exists()) return _msk;
            var _msm = _msi.get_slotnums(179);
            return _msk = _msl.multiply(_msm);
        };
    },
    87220: (_msn, _mso, _msp) => {
        'use strict';
        var _msq = null;
        defineModule(_mso);
        Object.defineProperty(_mso, '__esModule', {
            'value': true
        }), _mso.getSlot184PersonalEffect = void 0;
        var _msr = _msp(74496);
        _mso.getSlot184PersonalEffect = function(_mss) {
            var _mst = null,
                _msu = new _msr.SlotItemEffectModel(),
                _msv = new _msr.SlotItemEffectModel();
            if (68 == _mss.ctype && (_msv.houg += 1, _msv.tyku += 2, _msv.kaih += 3), !_msv.exists()) return _msu;
            var _msw = _mss.get_slotnums(184);
            return _msu = _msv.multiply(_msw);
        };
    },
    81367: (_msx, _msy, _msz) => {
        'use strict';
        var _mt0 = null;
        defineModule(_msy);
        Object.defineProperty(_msy, '__esModule', {
            'value': true
        }), _msy.getSlot188PersonalEffect = void 0;
        var _mt1 = _msz(74496);
        _msy.getSlot188PersonalEffect = function(_mt2) {
            var _mt3 = null,
                _mt4 = new _mt1.SlotItemEffectModel(),
                _mt5 = new _mt1.SlotItemEffectModel();
            if (68 == _mt2.ctype && (_mt5.houg += 3, _mt5.tyku += 1, _mt5.kaih += 1), !_mt5.exists()) return _mt4;
            var _mt6 = _mt2.get_slotnums(188);
            return _mt4 = _mt5.multiply(_mt6);
        };
    },
    13052: (_mt7, _mt8, _mt9) => {
        'use strict';
        var _mta = null;
        defineModule(_mt8);
        Object.defineProperty(_mt8, '__esModule', {
            'value': true
        }), _mt8.getSlot189PersonalEffect = void 0;
        var _mtb = _mt9(74496);
        _mt8.getSlot189PersonalEffect = function(_mtc) {
            var _mtd = null,
                _mte = new _mtb.SlotItemEffectModel(),
                _mtf = new _mtb.SlotItemEffectModel();
            if (68 != _mtc.ctype && 63 != _mtc.ctype || (_mtf.tyku += 1, _mtf.kaih += 2), !_mtf.exists()) return _mte;
            var _mtg = _mtc.get_slotnums(189);
            return _mte = _mtf.multiply(_mtg);
        };
    },
    66904: (_mth, _mti, _mtj) => {
        'use strict';
        var _mtk = null;
        defineModule(_mti);
        Object.defineProperty(_mti, '__esModule', {
            'value': true
        }), _mti.getSlot18_52_PersonalEffect = void 0;
        var _mtl = _mtj(74496);
        _mti.getSlot18_52_PersonalEffect = function(_mtm) {
            var _mtn = null,
                _mto = new _mtl.SlotItemEffectModel(),
                _mtp = new _mtl.SlotItemEffectModel();
            if (277 == _mtm.ship_id || 278 == _mtm.ship_id || 156 == _mtm.ship_id ? _mtp.houg = 1 : 594 == _mtm.ship_id || 698 == _mtm.ship_id || 646 == _mtm.ship_id ? (_mtp.houg = 1, _mtp.kaih = 1) : 599 != _mtm.ship_id && 610 != _mtm.ship_id || (_mtp.houg = 2, _mtp.kaih = 1), !_mtp.exists()) return _mto;
            var _mtq = _mtm.get_slotnums(18) + _mtm.get_slotnums(52);
            return _mto = _mtp.multiply(_mtq);
        };
    },
    94968: (_mtr, _mts, _mtt) => {
        'use strict';
        var _mtu = null;
        defineModule(_mts);
        Object.defineProperty(_mts, '__esModule', {
            'value': true
        }), _mts.getSlot194PersonalEffect = void 0;
        var _mtv = _mtt(74496);
        _mts.getSlot194PersonalEffect = function(_mtw) {
            var _mtx = null,
                _mty = new _mtv.SlotItemEffectModel(),
                _mtz = new _mtv.SlotItemEffectModel();
            if (70 == _mtw.ctype ? (_mtz.houg += 3, _mtz.kaih += 2, _mtz.saku += 2) : 72 != _mtw.ctype && 62 != _mtw.ctype || (_mtz.kaih += 1, _mtz.saku += 2), 392 != _mtw.ship_id && 969 != _mtw.ship_id || (_mtz.houg += 1, _mtz.kaih += 2, _mtz.saku += 2), !_mtz.exists()) return _mty;
            var _mu0 = _mtw.get_slotnums(194);
            return _mty = _mtz.multiply(_mu0);
        };
    },
    94781: (_mu1, _mu2, _mu3) => {
        'use strict';
        var _mu4 = null;
        defineModule(_mu2);
        Object.defineProperty(_mu2, '__esModule', {
            'value': true
        }), _mu2.getSlot195PersonalEffect = void 0;
        var _mu5 = _mu3(74496);
        _mu2.getSlot195PersonalEffect = function(_mu6) {
            var _mu7 = null,
                _mu8 = new _mu5.SlotItemEffectModel(),
                _mu9 = false,
                _mua = new _mu5.SlotItemEffectModel();
            if ('アメリカ' == _mu6.getCountryName() && (_mua.houg += 1, _mu9 = true), 0 == _mu9) return _mu8;
            var _mub = _mu6.get_slotnums(195);
            return _mu8.add(_mua.multiply(_mub));
        };
    },
    98137: (_muc, _mud, _mue) => {
        'use strict';
        var _muf = null;
        defineModule(_mud);
        Object.defineProperty(_mud, '__esModule', {
            'value': true
        }), _mud.getSlot19PersonalEffect = void 0;
        var _mug = _mue(74496);
        _mud.getSlot19PersonalEffect = function(_muh) {
            var _mui = null,
                _muj = new _mug.SlotItemEffectModel(),
                _muk = new _mug.SlotItemEffectModel();
            if ('ほうしょう' == _muh.yomi && (_muk.houg = 2, _muk.kaih = 2, _muk.tais = 2, _muk.tyku = 2), 75 != _muh.ctype && 76 != _muh.ctype || (_muk.houg = 2, _muk.tais = 3), 7 == _muh.stype && (_muk.tyku += 1, _muk.kaih += 1), 894 != _muh.ship_id && 899 != _muh.ship_id || (_muk.houg += 1, _muk.kaih += 1, _muk.tais += 1, _muk.tyku += 1), !_muk.exists()) return _muj;
            var _mul = _muh.get_slotnums(19);
            return _muj = _muk.multiply(_mul);
        };
    },
    48658: (_mum, _mun, _muo) => {
        'use strict';
        var _mup = null;
        defineModule(_mun);
        Object.defineProperty(_mun, '__esModule', {
            'value': true
        }), _mun.getSlot204PersonalEffect = void 0;
        var _muq = _muo(74496);
        _mun.getSlot204PersonalEffect = function(_mur) {
            var _mus = null,
                _mut = new _muq.SlotItemEffectModel();
            if (591 != _mur.ship_id && 592 != _mur.ship_id && 593 != _mur.ship_id && 954 != _mur.ship_id) return _mut;
            _mut.souk = _mut.souk + 1, _mut.raig = _mut.raig + 1;
            for (var _muu = _mur.get_each_level_nums(204), _muv = 0, _muw = 0; _muw <= 10; _muw++) _muw >= 7 && (_muv += _muu[_muw]);
            return _muv > 0 && (_mut.souk = _mut.souk + 1), _muu[10] > 0 && (_mut.raig = _mut.raig + 1), _mut;
        };
    },
    2306: (_mux, _muy, _muz) => {
        'use strict';
        var _mv0 = null;
        defineModule(_muy);
        Object.defineProperty(_muy, '__esModule', {
            'value': true
        }), _muy.getSlot217PersonalEffect = void 0;
        var _mv1 = _muz(74496);
        _muy.getSlot217PersonalEffect = function(_mv2) {
            var _mv3 = null,
                _mv4 = new _mv1.SlotItemEffectModel(),
                _mv5 = false,
                _mv6 = new _mv1.SlotItemEffectModel();
            if (501 == _mv2.ship_id || 506 == _mv2.ship_id ? (_mv6.houg += 1, _mv6.kaih += 3, _mv6.tyku += 5, _mv5 = true) : 502 != _mv2.ship_id && 507 != _mv2.ship_id || (_mv6.houg += 1, _mv6.kaih += 2, _mv6.tyku += 4, _mv5 = true), 0 == _mv5) return _mv4;
            var _mv7 = _mv2.get_slotnums(217);
            return _mv4.add(_mv6.multiply(_mv7)), _mv4;
        };
    },
    91302: function(_mv8, _mv9, _mva) {
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
        }), _mv9.getSlot220PersonalEffect = void 0;
        var _mvf = _mva(74496),
            _mvg = _mvc(_mva(18622));
        _mv9.getSlot220PersonalEffect = function(_mvh) {
            var _mvi = null,
                _mvj = new _mvf.SlotItemEffectModel(),
                _mvk = false,
                _mvl = new _mvf.SlotItemEffectModel(),
                _mvm = 0,
                _mvn = 0;
            if (662 == _mvh.ship_id || 663 == _mvh.ship_id || 668 == _mvh.ship_id || 501 == _mvh.ship_id || 506 == _mvh.ship_id || 502 == _mvh.ship_id || 507 == _mvh.ship_id ? (_mvl.houg += 1, _mvl.tyku += 3, _mvl.kaih += 2, _mvk = true, _mvm = 1) : 894 != _mvh.ship_id && 899 != _mvh.ship_id || (_mvl.tyku += 2, _mvl.kaih += 2, _mvk = true, _mvm = 1, _mvn = 1), 0 == _mvk) return _mvj;
            var _mvo = _mvh.get_slotnums(220);
            _mvj.add(_mvl.multiply(_mvo));
            for (var _mvp = 0, _mvq = 0, _mvr = _mvh.have_slot_ids(); _mvq < _mvr.length; _mvq++) {
                var _mvs = _mvr[_mvq],
                    _mvt = _mvg.default.model.slot.getMst(_mvs),
                    _mvu = _mvt.equipType;
                12 != _mvu && 13 != _mvu || (_mvt.sakuteki >= 5 && _mvh.get_slotnums(parseInt(_mvs)), _mvt.taiku >= 2 && (_mvp += _mvh.get_slotnums(parseInt(_mvs))));
            }
            if (_mvp >= 1 && 1 == _mvm && (_mvj.tyku += 3, _mvj.kaih += 3), 0 == _mvn) return _mvj;
            var _mvv = _mvh.get_each_level_nums(220)[10];
            return 1 == _mvn && _mvv > 0 && (_mvj.houg += 1 * _mvv, _mvj.tyku += 1 * _mvv, _mvj.kaih += 1 * _mvv), _mvj;
        };
    },
    20418: (_mvw, _mvx, _mvy) => {
        'use strict';
        var _mvz = null;
        defineModule(_mvx);
        Object.defineProperty(_mvx, '__esModule', {
            'value': true
        }), _mvx.getSlot227PersonalEffect = void 0;
        var _mw0 = _mvy(74496);
        _mvx.getSlot227PersonalEffect = function(_mw1) {
            var _mw2 = null,
                _mw3 = new _mw0.SlotItemEffectModel(),
                _mw4 = _mw1.get_each_level_nums(227),
                _mw5 = 0;
            _mw4.forEach(function(_mw6, _mw7) {
                _mw7 >= 8 && (_mw5 += _mw6);
            }), _mw5 >= 1 && (_mw3.tais += 1 * _mw5);
            var _mw8 = _mw4[10];
            return _mw8 >= 1 && (_mw3.tais += 1 * _mw8), _mw3;
        };
    },
    1906: (_mw9, _mwa, _mwb) => {
        'use strict';
        var _mwc = null;
        defineModule(_mwa);
        Object.defineProperty(_mwa, '__esModule', {
            'value': true
        }), _mwa.getSlot228PersonalEffect = void 0;
        var _mwd = _mwb(74496);
        _mwa.getSlot228PersonalEffect = function(_mwe) {
            var _mwf = null,
                _mwg = new _mwd.SlotItemEffectModel(),
                _mwh = new _mwd.SlotItemEffectModel();
            if ('ほうしょう' == _mwe.yomi && (_mwh.houg = 3, _mwh.kaih = 4, _mwh.tais = 4, _mwh.tyku = 3), 75 != _mwe.ctype && 76 != _mwe.ctype || (_mwh.houg = 2, _mwh.tais = 5, _mwh.tyku = 1, _mwh.kaih = 1), 7 == _mwe.stype && (_mwh.tais += 2, _mwh.tyku += 1, _mwh.kaih += 1), 894 != _mwe.ship_id && 899 != _mwe.ship_id || (_mwh.houg += 1, _mwh.kaih += 2, _mwh.tais += 2, _mwh.tyku += 1), !_mwh.exists()) return _mwg;
            var _mwi = _mwe.get_slotnums(228);
            return _mwg = _mwh.multiply(_mwi);
        };
    },
    61887: function(_mwj, _mwk, _mwl) {
        'use strict';
        var _mwm = null;
        var _mwn = this && this.__importDefault || function(_mwo) {
            var _mwp = null;
            return _mwo && _mwo.__esModule ? _mwo : {
                'default': _mwo
            };
        };
        defineModule(_mwk);
        Object.defineProperty(_mwk, '__esModule', {
            'value': true
        }), _mwk.getSlot229PersonalEffect = void 0;
        var _mwq = _mwl(74496),
            _mwr = _mwn(_mwl(18622));
        _mwk.getSlot229PersonalEffect = function(_mws) {
            var _mwt = null;
            for (var _mwu = new _mwq.SlotItemEffectModel(), _mwv = 0, _mww = 0, _mwx = _mws.have_slots_dict[229]; _mww < _mwx.length; _mww++) {
                _mwx[_mww].level >= 7 && _mwv++;
            }
            var _mwy = _mwv,
                _mwz = 0,
                _mx0 = 0,
                _mx1 = 0,
                _mx2 = _mws.get_slotnums(229);
            if (622 == _mws.ship_id || 623 == _mws.ship_id || 624 == _mws.ship_id) _mwu.houg += 1 * _mx2, _mwu.tyku += 1 * _mx2, _mwz = 2;
            else {
                if (656 == _mws.ship_id) _mwu.houg += 2 * _mx2, _mwu.tyku += 3 * _mx2, _mwu.tais += 2 * _mx2, _mwz = 3;
                else {
                    if (0 == _mwv) return _mwu;
                }
            }
            if (488 == _mws.ship_id ? (_mwu.tyku += 3 * _mwy, _mwz = 1) : 220 == _mws.ship_id ? _mwu.tyku += 2 * _mwy : 23 == _mws.ship_id ? _mwu.tyku += 1 * _mwy : 160 == _mws.ship_id ? (_mwu.tyku += 2 * _mwy, _mwz = 1) : 224 == _mws.ship_id ? _mwu.tyku += 1 * _mwy : 487 == _mws.ship_id ? (_mwu.tyku += 2 * _mwy, _mwz = 1) : 289 == _mws.ship_id && (_mwu.tyku += 1 * _mwy), (66 == _mws.ctype || 28 == _mws.ctype) && (_mwu.houg += 1 * _mwy, _mwu.tyku += 1 * _mwy, _mx0 = 1), 1 == _mws.stype && (_mwu.houg += 1 * _mwy, _mwu.tyku += 1 * _mwy, _mx1 = 1), ('ゆら' == _mws.yomi || 'なか' == _mws.yomi || 'きぬ' == _mws.yomi) && (_mwu.houg += 2 * _mwy), 0 == _mwz + _mx0 + _mx1) return _mwu;
            for (var _mx3 = 0, _mx4 = 0, _mx5 = 0, _mx6 = _mws.have_slot_ids(); _mx5 < _mx6.length; _mx5++) {
                var _mx7 = _mx6[_mx5],
                    _mx8 = _mwr.default.model.slot.getMst(_mx7),
                    _mx9 = _mx8.equipType;
                12 != _mx9 && 13 != _mx9 || (_mx8.sakuteki >= 5 && (_mx3 += _mws.get_slotnums(parseInt(_mx7))), _mx8.taiku >= 2 && (_mx4 += _mws.get_slotnums(parseInt(_mx7))));
            }
            return 1 == _mwz ? _mx3 > 0 && (_mwu.houg += 3, _mwu.kaih += 2) : 2 == _mwz ? (_mx3 > 0 && (_mwu.houg += 1, _mwu.kaih += 1), _mx4 > 0 && (_mwu.tyku += 2, _mwu.kaih += 2)) : 3 == _mwz && (_mx3 > 0 && (_mwu.houg += 2, _mwu.kaih += 2), _mx4 > 0 && (_mwu.tyku += 3, _mwu.kaih += 2)), 1 == _mx0 && _mx3 > 0 && (_mwu.houg += 2, _mwu.kaih += 3), 1 == _mx1 && _mx3 > 0 && (_mwu.houg += 1, _mwu.kaih += 4), _mwu;
        };
    },
    55734: (_mxa, _mxb, _mxc) => {
        'use strict';
        var _mxd = null;
        defineModule(_mxb);
        Object.defineProperty(_mxb, '__esModule', {
            'value': true
        }), _mxb.getSlot234PersonalEffect = void 0;
        var _mxe = _mxc(74496);
        _mxb.getSlot234PersonalEffect = function(_mxf) {
            var _mxg = null,
                _mxh = new _mxe.SlotItemEffectModel(),
                _mxi = false,
                _mxj = new _mxe.SlotItemEffectModel(),
                _mxk = _mxf.get_slotnums(142) + _mxf.get_slotnums(460);
            if (37 == _mxf.ctype && (_mxj.houg += 1, _mxj.tyku += 1, _mxj.kaih += 1, _mxj.houm += 1, _mxk >= 1 && (_mxh.tyku += 1, _mxh.kaih += 1, _mxh.houm += 1), _mxi = true), 0 == _mxi) return _mxh;
            var _mxl = _mxf.get_slotnums(234);
            return _mxh.add(_mxj.multiply(_mxl)), _mxh;
        };
    },
    17562: function(_mxm, _mxn, _mxo) {
        'use strict';
        var _mxp = null;
        var _mxq = this && this.__importDefault || function(_mxr) {
            var _mxs = null;
            return _mxr && _mxr.__esModule ? _mxr : {
                'default': _mxr
            };
        };
        defineModule(_mxn);
        Object.defineProperty(_mxn, '__esModule', {
            'value': true
        }), _mxn.getSlot235PersonalEffect = void 0;
        var _mxt = _mxo(74496),
            _mxu = _mxq(_mxo(18622));
        _mxn.getSlot235PersonalEffect = function(_mxv) {
            var _mxw = null,
                _mxx = new _mxt.SlotItemEffectModel(),
                _mxy = false,
                _mxz = new _mxt.SlotItemEffectModel(),
                _my0 = 0;
            if (52 != _mxv.ctype && 9 != _mxv.ctype || (_mxz.houg += 2, _mxz.tyku += 1, _mxy = true), 321 == _mxv.ship_id && (_mxz.houg += 1, _mxz.kaih += 1, _my0 = 1), 0 == _mxy) return _mxx;
            var _my1 = _mxv.get_slotnums(235);
            if (_mxx.add(_mxz.multiply(_my1)), 0 == _my0) return _mxx;
            for (var _my2 = 0, _my3 = 0, _my4 = 0, _my5 = _mxv.have_slot_ids(); _my4 < _my5.length; _my4++) {
                var _my6 = _my5[_my4],
                    _my7 = _mxu.default.model.slot.getMst(_my6),
                    _my8 = _my7.equipType;
                12 != _my8 && 13 != _my8 || (_my7.sakuteki >= 5 && (_my2 += _mxv.get_slotnums(parseInt(_my6))), _my7.taiku >= 2 && (_my3 += _mxv.get_slotnums(parseInt(_my6))));
            }
            return _my2 >= 1 && 1 == _my0 && (_mxx.houg += 3, _mxx.kaih += 2), _my3 >= 1 && 1 == _my0 && (_mxx.tyku += 3, _mxx.kaih += 3), _mxx;
        };
    },
    47970: (_my9, _mya, _myb) => {
        'use strict';
        var _myc = null;
        defineModule(_mya);
        Object.defineProperty(_mya, '__esModule', {
            'value': true
        }), _mya.getSlot237PersonalEffect = void 0;
        var _myd = _myb(74496);
        _mya.getSlot237PersonalEffect = function(_mye) {
            var _myf = null,
                _myg = new _myd.SlotItemEffectModel(),
                _myh = new _myd.SlotItemEffectModel();
            if (553 == _mye.ship_id) _myh.houg = 4, _myh.kaih = 2;
            else {
                if (82 == _mye.ship_id) _myh.houg = 3, _myh.kaih = 1;
                else {
                    if (88 == _mye.ship_id) _myh.houg = 3, _myh.kaih = 1;
                    else {
                        if (554 == _mye.ship_id) _myh.houg = 4, _myh.kaih = 2;
                        else {
                            if (411 == _mye.ship_id) _myh.houg = 2;
                            else {
                                if (412 != _mye.ship_id) return _myg;
                                _myh.houg = 2;
                            }
                        }
                    }
                }
            }
            var _myi = _mye.get_slotnums(237);
            return _myg = _myh.multiply(_myi);
        };
    },
    14386: (_myj, _myk, _myl) => {
        'use strict';
        var _mym = null;
        defineModule(_myk);
        Object.defineProperty(_myk, '__esModule', {
            'value': true
        }), _myk.getSlot238_239PersonalEffect = void 0;
        var _myn = _myl(74496);
        _myk.getSlot238_239PersonalEffect = function(_myo) {
            var _myp = null,
                _myq = new _myn.SlotItemEffectModel();
            return 501 != _myo.ship_id && 506 != _myo.ship_id && 502 != _myo.ship_id && 507 != _myo.ship_id || (_myq.kaih += 1, _myq.raig += 1), _myq;
        };
    },
    82229: (_myr, _mys, _myt) => {
        'use strict';
        var _myu = null;
        defineModule(_mys);
        Object.defineProperty(_mys, '__esModule', {
            'value': true
        }), _mys.getSlot242PersonalEffect = void 0;
        var _myv = _myt(74496);
        _mys.getSlot242PersonalEffect = function(_myw) {
            var _myx = null,
                _myy = new _myv.SlotItemEffectModel(),
                _myz = false,
                _mz0 = new _myv.SlotItemEffectModel();
            if (78 == _myw.ctype && (_mz0.houg += 2, _mz0.kaih += 1, _myz = true), 'ほうしょう' == _myw.yomi && (_mz0.houg += 1, _myz = true), 0 == _myz) return _myy;
            var _mz1 = _myw.get_slotnums(242);
            return _myy.add(_mz0.multiply(_mz1)), _myy;
        };
    },
    10325: (_mz2, _mz3, _mz4) => {
        'use strict';
        var _mz5 = null;
        defineModule(_mz3);
        Object.defineProperty(_mz3, '__esModule', {
            'value': true
        }), _mz3.getSlot243PersonalEffect = void 0;
        var _mz6 = _mz4(74496);
        _mz3.getSlot243PersonalEffect = function(_mz7) {
            var _mz8 = null,
                _mz9 = new _mz6.SlotItemEffectModel(),
                _mza = false,
                _mzb = new _mz6.SlotItemEffectModel();
            if (78 == _mz7.ctype && (_mzb.houg += 3, _mzb.kaih += 1, _mza = true), 'ほうしょう' == _mz7.yomi && (_mzb.houg += 2, _mza = true), 0 == _mza) return _mz9;
            var _mzc = _mz7.get_slotnums(243);
            return _mz9.add(_mzb.multiply(_mzc)), _mz9;
        };
    },
    351: (_mzd, _mze, _mzf) => {
        'use strict';
        var _mzg = null;
        defineModule(_mze);
        Object.defineProperty(_mze, '__esModule', {
            'value': true
        }), _mze.getSlot244PersonalEffect = void 0;
        var _mzh = _mzf(74496);
        _mze.getSlot244PersonalEffect = function(_mzi) {
            var _mzj = null,
                _mzk = new _mzh.SlotItemEffectModel(),
                _mzl = false,
                _mzm = new _mzh.SlotItemEffectModel(),
                _mzn = 0;
            if (78 == _mzi.ctype && (_mzm.houg += 4, _mzm.kaih += 2, _mzl = true, _mzn = 1), 'ほうしょう' == _mzi.yomi && (_mzm.houg += 3, _mzl = true, _mzn = 2), 0 == _mzl) return _mzk;
            var _mzo = _mzi.get_slotnums(244);
            if (_mzk.add(_mzm.multiply(_mzo)), 0 == _mzn) return _mzk;
            var _mzp = _mzi.get_each_level_over_nums([244]).slot[244];
            return 1 == _mzn ? (_mzp[3] >= 1 && (_mzk.houg += 1 * _mzp[3]), _mzp[5] >= 1 && (_mzk.houm += 1 * _mzp[5]), _mzp[7] >= 1 && (_mzk.houg += 1 * _mzp[7]), _mzp[8] >= 1 && (_mzk.kaih += 1 * _mzp[8]), _mzp[9] >= 1 && (_mzk.houm += 1 * _mzp[9]), _mzp[10] >= 1 && (_mzk.houg += 1 * _mzp[10])) : 2 == _mzn && (_mzp[3] >= 1 && (_mzk.kaih += 1 * _mzp[3]), _mzp[7] >= 1 && (_mzk.houg += 1 * _mzp[7]), _mzp[9] >= 1 && (_mzk.houm += 1 * _mzp[9]), _mzp[10] >= 1 && (_mzk.houg += 1 * _mzp[10])), _mzk;
        };
    },
    61977: (_mzq, _mzr, _mzs) => {
        'use strict';
        var _mzt = null;
        defineModule(_mzr);
        Object.defineProperty(_mzr, '__esModule', {
            'value': true
        }), _mzr.getSlot247PersonalEffect = void 0;
        var _mzu = _mzs(74496);
        _mzr.getSlot247PersonalEffect = function(_mzv) {
            var _mzw = null,
                _mzx = new _mzu.SlotItemEffectModel(),
                _mzy = false,
                _mzz = new _mzu.SlotItemEffectModel(),
                _n00 = 0;
            if ('フランス' == _mzv.getCountryName() && (_mzz.houg += 2, _mzz.houm += 2, _mzy = true, _n00 = 1), 0 == _mzy) return _mzx;
            var _n01 = _mzv.get_slotnums(247);
            if (_mzx.add(_mzz.multiply(_n01)), 0 == _n00) return _mzx;
            var _n02 = _mzv.get_each_level_nums(247),
                _n03 = 0,
                _n04 = 0;
            _n00 > 0 && _n02.forEach(function(_n05, _n06) {
                _n06 >= 4 && (_n03 += _n05), _n06 >= 8 && (_n04 += _n05);
            });
            var _n07 = _n02[10];
            return 1 == _n00 && (_n03 >= 1 && (_mzx.houg += 1 * _n03, _mzx.houm += 1 * _n03), _n04 >= 1 && (_mzx.kaih += 1 * _n04, _mzx.houg += 1 * _n04, _mzx.houm += 1 * _n04), _n07 >= 1 && (_mzx.kaih += 1 * _n07, _mzx.houm += 1 * _n07)), _mzx;
        };
    },
    96580: (_n08, _n09, _n0a) => {
        'use strict';
        var _n0b = null;
        defineModule(_n09);
        Object.defineProperty(_n09, '__esModule', {
            'value': true
        }), _n09.getSlot252PersonalEffect = void 0;
        var _n0c = _n0a(74496);
        _n09.getSlot252PersonalEffect = function(_n0d) {
            var _n0e = null,
                _n0f = new _n0c.SlotItemEffectModel(),
                _n0g = (new _n0c.SlotItemEffectModel(), 0);
            if (78 != _n0d.ctype && 112 != _n0d.ctype || (_n0g = 1), 0 == _n0g) return _n0f;
            var _n0h = _n0d.get_each_level_over_nums([252]).slot[252];
            return 1 == _n0g && (_n0h[4] >= 1 && (_n0f.kaih += 1 * _n0h[4]), _n0h[6] >= 1 && (_n0f.houm += 1 * _n0h[6]), _n0h[7] >= 1 && (_n0f.houg += 1 * _n0h[7]), _n0h[8] >= 1 && (_n0f.kaih += 1 * _n0h[8]), _n0h[9] >= 1 && (_n0f.houm += 1 * _n0h[9]), _n0h[10] >= 1 && (_n0f.houg += 1 * _n0h[10])), _n0f;
        };
    },
    31797: function(_n0i, _n0j, _n0k) {
        'use strict';
        var _n0l = null;
        var _n0m = this && this.__importDefault || function(_n0n) {
            var _n0o = null;
            return _n0n && _n0n.__esModule ? _n0n : {
                'default': _n0n
            };
        };
        defineModule(_n0j);
        Object.defineProperty(_n0j, '__esModule', {
            'value': true
        }), _n0j.getSlot266PersonalEffect2 = _n0j.getSlot266PersonalEffect = void 0;
        var _n0p = _n0k(74496),
            _n0q = _n0m(_n0k(18622));
        _n0j.getSlot266PersonalEffect = function(_n0r) {
            var _n0s = null,
                _n0t = new _n0p.SlotItemEffectModel(),
                _n0u = false;
            if (566 != _n0r.ship_id && 567 != _n0r.ship_id && 568 != _n0r.ship_id && 656 != _n0r.ship_id && 670 != _n0r.ship_id && 915 != _n0r.ship_id && 951 != _n0r.ship_id || (_n0u = true), 0 == _n0u) return _n0t;
            var _n0v = _n0r.get_slotnums(266);
            return 30 == _n0r.ctype && (1 == _n0v ? _n0t.houg = 1 : _n0v >= 2 && (_n0t.houg = 3)), _n0t;
        }, _n0j.getSlot266PersonalEffect2 = function(_n0w) {
            var _n0x = null,
                _n0y = new _n0p.SlotItemEffectModel(),
                _n0z = 0,
                _n10 = new _n0p.SlotItemEffectModel();
            if (23 == _n0w.ctype || 18 == _n0w.ctype ? (_n10.houg = 1, _n0z = 1) : 30 == _n0w.ctype && (_n10.houg = 1, _n0z = 2), ('しぐれ' == _n0w.yomi || 'ゆきかぜ' == _n0w.yomi || 'いそかぜ' == _n0w.yomi) && (_n10.kaih = 1), 961 == _n0w.ship_id && (_n10.houg += 1, _n10.houm += 1, _n10.kaih += 1), !_n10.exists()) return _n0y;
            var _n11 = _n0w.get_slotnums(266);
            if (_n0y = _n10.multiply(_n11), 0 == _n0z) return _n0y;
            for (var _n12 = 0, _n13 = 0, _n14 = _n0w.have_slot_ids(); _n13 < _n14.length; _n13++) {
                var _n15 = _n14[_n13],
                    _n16 = _n0q.default.model.slot.getMst(_n15),
                    _n17 = _n16.equipType;
                (12 == _n17 || 13 == _n17) && _n16.sakuteki >= 5 && (_n12 += _n0w.get_slotnums(parseInt(_n15)));
            }
            return _n12 > 0 && (1 == _n0z ? (_n0y.houg += 1, _n0y.kaih += 1, _n0y.raig += 3) : 2 == _n0z && (_n0y.houg += 2, _n0y.kaih += 1, _n0y.raig += 3)), _n0y;
        };
    },
    45738: function(_n18, _n19, _n1a) {
        'use strict';
        var _n1b = null;
        var _n1c = this && this.__importDefault || function(_n1d) {
            var _n1e = null;
            return _n1d && _n1d.__esModule ? _n1d : {
                'default': _n1d
            };
        };
        defineModule(_n19);
        Object.defineProperty(_n19, '__esModule', {
            'value': true
        }), _n19.getSlot267PersonalEffect2 = _n19.getSlot267PersonalEffect = void 0;
        var _n1f = _n1a(74496),
            _n1g = _n1c(_n1a(18622));
        _n19.getSlot267PersonalEffect = function(_n1h) {
            var _n1i = null,
                _n1j = new _n1f.SlotItemEffectModel(),
                _n1k = 0,
                _n1l = 0;
            if (38 == _n1h.ctype || 22 == _n1h.ctype) _n1k = 2, _n1l = 1;
            else {
                if (30 != _n1h.ctype) return _n1j;
                _n1k = 1, _n1l = 1;
            }
            var _n1m = _n1h.get_slotnums(267) + _n1h.get_slotnums(366);
            return _n1j.houg = _n1k * _n1m, _n1j.kaih = _n1l * _n1m, _n1j;
        }, _n19.getSlot267PersonalEffect2 = function(_n1n) {
            var _n1o = null,
                _n1p = new _n1f.SlotItemEffectModel(),
                _n1q = _n1n.get_slotnums(267),
                _n1r = _n1n.get_slotnums(366),
                _n1s = _n1q + _n1r;
            if (566 != _n1n.ship_id && 567 != _n1n.ship_id && 568 != _n1n.ship_id && 656 != _n1n.ship_id && 670 != _n1n.ship_id && 915 != _n1n.ship_id && 951 != _n1n.ship_id || (_n1q > 0 && (_n1p.houg += 1), 1 == _n1r ? (_n1p.houg += 1, _n1p.tyku += 2) : _n1r >= 2 && (_n1p.houg += 2, _n1p.tyku += 4)), 38 != _n1n.ctype && 229 != _n1n.ship_id && [648, 961].indexOf(_n1n.ship_id) < 0) return _n1p;
            var _n1t = false,
                _n1u = false,
                _n1v = false,
                _n1w = false,
                _n1x = false,
                _n1y = false,
                _n1z = false,
                _n20 = false,
                _n21 = false,
                _n22 = false,
                _n23 = false,
                _n24 = 0,
                _n25 = 0,
                _n26 = 0;
            543 == _n1n.ship_id ? (_n1p.houg = 1 * _n1s, _n1u = true) : 229 == _n1n.ship_id ? _n1v = true : 542 == _n1n.ship_id ? (_n1p.houg = 1 * _n1s, _n1w = true) : 563 == _n1n.ship_id ? (_n1p.houg = 1 * _n1s, _n1x = true) : 564 == _n1n.ship_id ? (_n1p.houg = 1 * _n1s, _n1y = true) : 578 == _n1n.ship_id ? (_n1p.houg = 1 * _n1s, _n1z = true) : 569 == _n1n.ship_id ? (_n1p.houg = 1 * _n1s, _n20 = true) : 649 == _n1n.ship_id ? (_n1p.houg = 2 * _n1s, _n22 = true) : 955 == _n1n.ship_id || 960 == _n1n.ship_id ? (_n1p.houg = 2 * _n1s, _n23 = true) : 648 == _n1n.ship_id ? (_n1p.houg = 2 * _n1s, _n21 = true, _n24 = 1, _n25 = 1, _n26 = 1) : 961 == _n1n.ship_id && (_n1p.houg = 2 * _n1s, _n1t = true, _n24 = 1, _n25 = 1, _n26 = 1);
            for (var _n27 = 0, _n28 = 0, _n29 = 0, _n2a = _n1n.have_slot_ids(); _n29 < _n2a.length; _n29++) {
                var _n2b = _n2a[_n29],
                    _n2c = _n1g.default.model.slot.getMst(_n2b),
                    _n2d = _n2c.equipType;
                12 != _n2d && 13 != _n2d || (_n2c.sakuteki >= 5 && (_n27 += _n1n.get_slotnums(parseInt(_n2b))), _n2c.taiku >= 2 && (_n28 += _n1n.get_slotnums(parseInt(_n2b))));
            }
            if (_n27 > 0 && _n1q > 0 && ((38 == _n1n.ctype || _n21) && (_n1p.houg += 2, _n1p.raig += 3, _n1p.kaih += 1, 955 == _n1n.ship_id ? _n1p.raig -= 1 : 960 == _n1n.ship_id && (_n1p.raig -= 2)), (_n1w || _n1u || _n1v || _n1x || _n1y || _n1z || _n20 || _n21 || _n22 || _n23) && (_n1p.houg += 1, _n1p.raig += 3, _n1p.kaih += 2)), _n1r > 0 && (_n1w || _n1u || _n1x || _n1y || _n1z || _n1v || _n20 || _n21 || _n22 || _n1t || _n23)) {
                1 == _n1r ? (_n1p.tyku += 3, _n1p.houg += 1, _n1p.houm += 1) : _n1r >= 2 && (_n1p.tyku += 5, _n1p.houg += 3, _n1p.houm += 1, 955 == _n1n.ship_id && (_n1p.houg += 1)), (_n20 || _n21) && (_n1p.houg += 1, _n1p.tyku += 2), _n27 > 0 && (_n1p.houg += 2, _n1p.kaih += 2, _n1p.raig += 4, _n1p.houm += 2, 960 == _n1n.ship_id && (_n1p.raig -= 1, _n1p.houg += 1)), _n28 > 0 && (_n1p.houg += 1, _n1p.kaih += 3, _n1p.tyku += 5, _n1p.houm += 1);
                var _n2e = _n1n.get_each_level_nums(366),
                    _n2f = 0,
                    _n2g = 0;
                _n2e.forEach(function(_n2h, _n2i) {
                    _n2i >= 5 && (_n2f += _n2h), _n2i >= 8 && (_n2g += _n2h);
                }), _n2f >= 1 && (_n1p.houm += 1 * _n2f), _n2g >= 1 && (_n1p.houg += 1 * _n2g);
                var _n2j = _n2e[10];
                _n2j >= 1 && (_n1p.houm += 1 * _n2j);
            }
            var _n2k = _n1n.get_slotnums(129),
                _n2l = _n1n.get_slotnums(74),
                _n2m = _n1n.get_slotnums(412);
            return _n24 > 0 && _n2k > 0 && 1 == _n24 && (_n1p.houg += 2, _n1p.kaih += 3, _n1p.tyku += 2), _n26 > 0 && _n2m > 0 && 1 == _n26 && (_n1p.houg += 2, _n1p.kaih += 3, _n1p.tyku += 2), _n25 > 0 && _n2l > 0 && 1 == _n25 && (_n1p.houg += 3, _n1p.kaih -= 3), _n1p;
        };
    },
    23934: (_n2n, _n2o, _n2p) => {
        'use strict';
        var _n2q = null;
        defineModule(_n2o);
        Object.defineProperty(_n2o, '__esModule', {
            'value': true
        }), _n2o.getSlot271PersonalEffect = void 0;
        var _n2r = _n2p(74496);
        _n2o.getSlot271PersonalEffect = function(_n2s) {
            var _n2t = null,
                _n2u = new _n2r.SlotItemEffectModel(),
                _n2v = 0;
            if (508 != _n2s.ship_id && 509 != _n2s.ship_id && 888 != _n2s.ship_id && 883 != _n2s.ship_id || (_n2v = 1), 0 == _n2v) return _n2u;
            var _n2w = _n2s.get_each_level_nums(271),
                _n2x = 0,
                _n2y = 0,
                _n2z = 0,
                _n30 = _n2w[10];
            return _n2v > 0 && _n2w.forEach(function(_n31, _n32) {
                _n32 >= 4 && (_n2x += _n31), _n32 >= 6 && (_n2y += _n31), _n32 >= 8 && (_n2z += _n31);
            }), 1 == _n2v && (_n2x >= 1 && (_n2u.houg += 1 * _n2x), _n2y >= 1 && (_n2u.tyku += 2 * _n2y), _n2z >= 1 && (_n2u.kaih += 2 * _n2z), _n30 >= 1 && (_n2u.houg += 1 * _n30)), _n2u;
        };
    },
    17712: function(_n33, _n34, _n35) {
        'use strict';
        var _n36 = null;
        var _n37 = this && this.__importDefault || function(_n38) {
            var _n39 = null;
            return _n38 && _n38.__esModule ? _n38 : {
                'default': _n38
            };
        };
        defineModule(_n34);
        Object.defineProperty(_n34, '__esModule', {
            'value': true
        }), _n34.getSlot275PersonalEffect = void 0;
        var _n3a = _n35(74496),
            _n3b = _n37(_n35(18622));
        _n34.getSlot275PersonalEffect = function(_n3c) {
            var _n3d = null,
                _n3e = new _n3a.SlotItemEffectModel(),
                _n3f = false,
                _n3g = new _n3a.SlotItemEffectModel(),
                _n3h = 0,
                _n3i = 0;
            if (894 != _n3c.ship_id && 899 != _n3c.ship_id || (_n3g.houg += 1, _n3g.tyku += 3, _n3g.kaih += 2, _n3f = true, _n3i = 1, _n3h = 1), 0 == _n3f) return _n3e;
            var _n3j = _n3c.get_slotnums(275);
            _n3e.add(_n3g.multiply(_n3j));
            var _n3k = 0;
            if (_n3h > 0)
                for (var _n3l = 0, _n3m = _n3c.have_slot_ids(); _n3l < _n3m.length; _n3l++) {
                    var _n3n = _n3m[_n3l],
                        _n3o = _n3b.default.model.slot.getMst(_n3n),
                        _n3p = _n3o.equipType;
                    12 != _n3p && 13 != _n3p || (_n3o.sakuteki >= 5 && _n3c.get_slotnums(parseInt(_n3n)), _n3o.taiku >= 2 && (_n3k += _n3c.get_slotnums(parseInt(_n3n))));
                }
            if (1 == _n3h && _n3k > 0 && (_n3e.tyku += 3, _n3e.kaih += 3), 0 == _n3i) return _n3e;
            var _n3q = _n3c.get_each_level_nums(275),
                _n3r = 0,
                _n3s = _n3q[10];
            return _n3i > 0 && _n3q.forEach(function(_n3t, _n3u) {
                _n3u >= 7 && (_n3r += _n3t);
            }), 1 == _n3i && (_n3r > 0 && (_n3e.tyku += 1 * _n3r, _n3e.kaih += 1 * _n3r), _n3s > 0 && (_n3e.houg += 1 * _n3s, _n3e.tyku += 1 * _n3s, _n3e.houm += 1 * _n3s)), _n3e;
        };
    },
    93733: (_n3v, _n3w, _n3x) => {
        'use strict';
        var _n3y = null;
        defineModule(_n3w);
        Object.defineProperty(_n3w, '__esModule', {
            'value': true
        }), _n3w.getSlot277PersonalEffect = void 0;
        var _n3z = _n3x(74496);
        _n3w.getSlot277PersonalEffect = function(_n40) {
            var _n41 = null,
                _n42 = new _n3z.SlotItemEffectModel(),
                _n43 = false,
                _n44 = new _n3z.SlotItemEffectModel();
            if ('アメリカ' != _n40.getCountryName() && 67 != _n40.ctype && 78 != _n40.ctype && 82 != _n40.ctype && 88 != _n40.ctype && 108 != _n40.ctype && 112 != _n40.ctype || (_n44.houg += 1, _n44.kaih += 1, _n43 = true), 83 == _n40.ctype && (_n44.houg += 1, _n44.kaih += 1, _n44.tyku += 1, _n43 = true), 0 == _n43) return _n42;
            var _n45 = _n40.get_slotnums(277);
            return _n42.add(_n44.multiply(_n45)), _n42;
        };
    },
    34718: (_n46, _n47, _n48) => {
        'use strict';
        var _n49 = null;
        defineModule(_n47);
        Object.defineProperty(_n47, '__esModule', {
            'value': true
        }), _n47.getSlot278PersonalEffect = void 0;
        var _n4a = _n48(74496);
        _n47.getSlot278PersonalEffect = function(_n4b) {
            var _n4c = null,
                _n4d = new _n4a.SlotItemEffectModel();
            return 'アメリカ' == _n4b.getCountryName() ? (_n4d.tyku += 1, _n4d.kaih += 3, _n4d.saku += 1) : 67 == _n4b.ctype || 78 == _n4b.ctype || 82 == _n4b.ctype || 88 == _n4b.ctype || 108 == _n4b.ctype || 112 == _n4b.ctype ? (_n4d.tyku += 1, _n4d.kaih += 2) : 96 == _n4b.ctype && (_n4d.tyku += 1, _n4d.kaih += 1), _n4d;
        };
    },
    69245: (_n4e, _n4f, _n4g) => {
        'use strict';
        var _n4h = null;
        defineModule(_n4f);
        Object.defineProperty(_n4f, '__esModule', {
            'value': true
        }), _n4f.getSlot279PersonalEffect = void 0;
        var _n4i = _n4g(74496);
        _n4f.getSlot279PersonalEffect = function(_n4j) {
            var _n4k = null,
                _n4l = new _n4i.SlotItemEffectModel();
            return 'アメリカ' == _n4j.getCountryName() ? (_n4l.houg += 2, _n4l.tyku += 2, _n4l.kaih += 3, _n4l.saku += 2) : 67 == _n4j.ctype || 78 == _n4j.ctype || 82 == _n4j.ctype || 88 == _n4j.ctype || 108 == _n4j.ctype || 112 == _n4j.ctype ? (_n4l.houg += 1, _n4l.tyku += 1, _n4l.kaih += 2, _n4l.saku += 1) : 96 == _n4j.ctype && (_n4l.houg += 1, _n4l.tyku += 1, _n4l.kaih += 1), _n4l;
        };
    },
    18478: (_n4m, _n4n, _n4o) => {
        'use strict';
        var _n4p = null;
        defineModule(_n4n);
        Object.defineProperty(_n4n, '__esModule', {
            'value': true
        }), _n4n.getSlot282PersonalEffect = void 0;
        var _n4q = _n4o(74496);
        _n4n.getSlot282PersonalEffect = function(_n4r) {
            var _n4s = null,
                _n4t = new _n4q.SlotItemEffectModel(),
                _n4u = false,
                _n4v = false;
            147 != _n4r.ship_id && 73 != _n4r.ctype && 81 != _n4r.ctype || (_n4u = true), 'ゆうばり' == _n4r.yomi && (_n4v = true);
            var _n4w = new _n4q.SlotItemEffectModel();
            if ((_n4u || _n4v) && (_n4w.houg += 2, _n4w.souk += 1), !_n4w.exists()) return _n4t;
            var _n4x = _n4r.get_slotnums(282);
            return _n4t = _n4w.multiply(_n4x);
        };
    },
    2899: (_n4y, _n4z, _n50) => {
        'use strict';
        var _n51 = null;
        defineModule(_n4z);
        Object.defineProperty(_n4z, '__esModule', {
            'value': true
        }), _n4z.getSlot283PersonalEffect = void 0;
        var _n52 = _n50(74496);
        _n4z.getSlot283PersonalEffect = function(_n53) {
            var _n54 = null,
                _n55 = new _n52.SlotItemEffectModel(),
                _n56 = false;
            147 != _n53.ship_id && 73 != _n53.ctype && 81 != _n53.ctype || (_n56 = true);
            var _n57 = new _n52.SlotItemEffectModel();
            if (_n56 && (_n57.raig += 3, _n57.houg += 1, _n57.souk += 1), !_n57.exists()) return _n55;
            var _n58 = _n53.get_slotnums(283);
            return _n55 = _n57.multiply(_n58);
        };
    },
    57120: (_n59, _n5a, _n5b) => {
        'use strict';
        var _n5c = null;
        defineModule(_n5a);
        Object.defineProperty(_n5a, '__esModule', {
            'value': true
        }), _n5a.getSlot285PersonalEffect = void 0;
        var _n5d = _n5b(74496);
        _n5a.getSlot285PersonalEffect = function(_n5e) {
            var _n5f = null,
                _n5g = new _n5d.SlotItemEffectModel(),
                _n5h = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_n5e.ship_id) >= 0 && (_n5h = true), 0 == _n5h) return _n5g;
            var _n5i = _n5e.get_each_level_nums(285),
                _n5j = _n5e.get_slotnums(285);
            _n5j > 2 && (_n5j = 2), _n5g.raig = 2 * _n5j, _n5g.kaih = 1 * _n5j;
            var _n5k = _n5i[10];
            1 == _n5k && (_n5g.houg += 1, _n5g.raig += 1), _n5k >= 2 && (_n5g.houg += 2, _n5g.raig += 1), _n5k >= 3 && (_n5g.raig += 3);
            var _n5l = _n5e.get_slotnums(285);
            return 903 == _n5e.ship_id ? (_n5l >= 2 && (_n5g.raig += 2), _n5l >= 3 && (_n5g.raig += 2)) : 908 != _n5e.ship_id && 959 != _n5e.ship_id || (_n5l >= 2 && (_n5g.raig += 1), _n5l >= 3 && (_n5g.raig += 1)), _n5g;
        };
    },
    74985: function(_n5m, _n5n, _n5o) {
        'use strict';
        var _n5p = null;
        var _n5q = this && this.__importDefault || function(_n5r) {
            var _n5s = null;
            return _n5r && _n5r.__esModule ? _n5r : {
                'default': _n5r
            };
        };
        defineModule(_n5n);
        Object.defineProperty(_n5n, '__esModule', {
            'value': true
        }), _n5n.getSlot286PersonalEffect3 = _n5n.getSlot286PersonalEffect2 = _n5n.getSlot286PersonalEffect = void 0;
        var _n5t = _n5o(74496),
            _n5u = _n5q(_n5o(18622));
        _n5n.getSlot286PersonalEffect = function(_n5v) {
            var _n5w = null,
                _n5x = new _n5t.SlotItemEffectModel(),
                _n5y = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975].indexOf(_n5v.ship_id) >= 0 && (_n5y = true), 0 == _n5y) return _n5x;
            var _n5z = _n5v.get_each_level_nums(286),
                _n60 = _n5v.get_slotnums(286);
            _n60 > 2 && (_n60 = 2), _n5x.raig = 2 * _n60, _n5x.kaih = 1 * _n60;
            var _n61 = _n5z[10];
            if (1 == _n61 ? _n5x.houg = _n5x.houg + 1 : _n61 >= 2 && (_n5x.houg = _n5x.houg + 2), 30 == _n5v.ctype || 961 == _n5v.ship_id) {
                var _n62 = _n5z[5] + _n5z[6] + _n5z[7] + _n5z[8] + _n5z[9] + _n5z[10];
                1 == _n62 ? _n5x.raig = _n5x.raig + 1 : _n62 >= 2 && (_n5x.raig = _n5x.raig + 2);
            }
            return _n5x;
        }, _n5n.getSlot286PersonalEffect2 = function(_n63) {
            var _n64 = null,
                _n65 = new _n5t.SlotItemEffectModel(),
                _n66 = false,
                _n67 = 0;
            if ('たけ' == _n63.yomi && (_n66 = true, _n67 = 1), 0 == _n66) return _n65;
            var _n68 = _n63.get_each_level_nums(286),
                _n69 = 0;
            return _n67 > 0 && _n68.forEach(function(_n6a, _n6b) {
                _n6b >= 7 && (_n69 += _n6a);
            }), 'たけ' == _n63.yomi && (_n65.raig += 7, _n65.kaih += 2, _n69 >= 1 && (_n65.raig += 2), _n68[10] >= 1 && (_n65.raig += 2)), _n65;
        }, _n5n.getSlot286PersonalEffect3 = function(_n6c) {
            var _n6d = null,
                _n6e = new _n5t.SlotItemEffectModel(),
                _n6f = false,
                _n6g = new _n5t.SlotItemEffectModel(),
                _n6h = 0;
            if (662 != _n6c.ship_id && 663 != _n6c.ship_id && 668 != _n6c.ship_id || (_n6g.raig += 2, _n6f = true, _n6h = 1), 0 == _n6f) return _n6e;
            var _n6i = _n6c.get_slotnums(286);
            _n6e.add(_n6g.multiply(_n6i));
            for (var _n6j = 0, _n6k = 0, _n6l = _n6c.have_slot_ids(); _n6k < _n6l.length; _n6k++) {
                var _n6m = _n6l[_n6k],
                    _n6n = _n5u.default.model.slot.getMst(_n6m),
                    _n6o = _n6n.equipType;
                12 != _n6o && 13 != _n6o || (_n6n.sakuteki >= 5 && (_n6j += _n6c.get_slotnums(parseInt(_n6m))), _n6n.taiku >= 2 && _n6c.get_slotnums(parseInt(_n6m)));
            }
            return _n6j >= 1 && 1 == _n6h && (_n6e.raig += 3, _n6e.kaih += 2), _n6e;
        };
    },
    9234: (_n6p, _n6q, _n6r) => {
        'use strict';
        var _n6s = null;
        defineModule(_n6q);
        Object.defineProperty(_n6q, '__esModule', {
            'value': true
        }), _n6q.getSlot287PersonalEffect = void 0;
        var _n6t = _n6r(74496);
        _n6q.getSlot287PersonalEffect = function(_n6u) {
            var _n6v = null,
                _n6w = new _n6t.SlotItemEffectModel(),
                _n6x = new _n6t.SlotItemEffectModel(),
                _n6y = false;
            if (488 == _n6u.ship_id || 141 == _n6u.ship_id || 160 == _n6u.ship_id || 624 == _n6u.ship_id || 656 == _n6u.ship_id ? (_n6x.tais = 1, _n6x.kaih = 1, _n6y = true) : 662 != _n6u.ship_id && 961 != _n6u.ship_id || (_n6x.tais = 3, _n6y = true), 0 == _n6y) return _n6w;
            var _n6z = _n6u.get_slotnums(287);
            return _n6w = _n6x.multiply(_n6z);
        };
    },
    30802: (_n70, _n71, _n72) => {
        'use strict';
        var _n73 = null;
        defineModule(_n71);
        Object.defineProperty(_n71, '__esModule', {
            'value': true
        }), _n71.getSlot288PersonalEffect = void 0;
        var _n74 = _n72(74496);
        _n71.getSlot288PersonalEffect = function(_n75) {
            var _n76 = null,
                _n77 = new _n74.SlotItemEffectModel(),
                _n78 = new _n74.SlotItemEffectModel(),
                _n79 = false;
            if (488 == _n75.ship_id || 141 == _n75.ship_id || 160 == _n75.ship_id || 656 == _n75.ship_id ? (_n78.tais = 2, _n78.kaih = 1, _n79 = true) : 624 == _n75.ship_id ? (_n78.houg = 1, _n78.tais = 3, _n78.kaih = 2, _n79 = true) : 662 != _n75.ship_id && 961 != _n75.ship_id || (_n78.tais = 4, _n78.kaih = 1, _n79 = true), 0 == _n79) return _n77;
            var _n7a = _n75.get_slotnums(288);
            return _n77 = _n78.multiply(_n7a);
        };
    },
    97002: function(_n7b, _n7c, _n7d) {
        'use strict';
        var _n7e = null;
        var _n7f = this && this.__importDefault || function(_n7g) {
            var _n7h = null;
            return _n7g && _n7g.__esModule ? _n7g : {
                'default': _n7g
            };
        };
        defineModule(_n7c);
        Object.defineProperty(_n7c, '__esModule', {
            'value': true
        }), _n7c.getSlot289PersonalEffect = void 0;
        var _n7i = _n7d(74496),
            _n7j = _n7f(_n7d(18622));
        _n7c.getSlot289PersonalEffect = function(_n7k) {
            var _n7l = null,
                _n7m = new _n7i.SlotItemEffectModel(),
                _n7n = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n7o = 0,
                _n7p = new _n7i.SlotItemEffectModel();
            if (149 == _n7k.ship_id || 591 == _n7k.ship_id) _n7p.houg = 2, _n7p.tyku = 1, _n7o = 1;
            else {
                if (150 == _n7k.ship_id || 592 == _n7k.ship_id) _n7p.houg = 1;
                else {
                    if (152 == _n7k.ship_id) _n7p.houg = 1;
                    else {
                        if (151 != _n7k.ship_id && 593 != _n7k.ship_id && 954 != _n7k.ship_id) return _n7m;
                        _n7p.houg = 2, _n7p.tyku = 2, _n7p.kaih = 2, _n7o = 1;
                    }
                }
            }
            var _n7q = _n7k.get_slotnums(289);
            if (_n7m = _n7p.multiply(_n7q), _n7n[_n7k.ship_id]) {
                var _n7r = _n7k.get_each_level_nums(289),
                    _n7s = new Array();
                _n7r.forEach(function(_n7t, _n7u) {
                    var _n7v = null;
                    for (var _n7w = 1; _n7w <= _n7k.SLOT_LEVEL_MAX; _n7w++) _n7u >= _n7w && (null == _n7s[_n7w] && (_n7s[_n7w] = 0), _n7s[_n7w] += _n7t);
                });
                var _n7x = _n7n[_n7k.ship_id];
                1 == _n7x ? (_n7s[1] >= 1 && (_n7m.kaih += 1 * _n7s[1]), _n7s[3] >= 1 && (_n7m.tyku = _n7m.tyku + 1 * _n7s[3]), _n7s[5] >= 1 && (_n7m.houg = _n7m.houg + 1 * _n7s[5]), _n7s[7] >= 1 && (_n7m.kaih += 1 * _n7s[7]), _n7s[8] >= 1 && (_n7m.tyku += 1 * _n7s[8]), _n7s[9] >= 1 && (_n7m.houg += 1 * _n7s[9]), _n7s[10] >= 1 && (_n7m.kaih += 1 * _n7s[10])) : 2 == _n7x ? (_n7s[4] >= 1 && (_n7m.tyku += 1 * _n7s[4]), _n7s[6] >= 1 && (_n7m.kaih += 1 * _n7s[6]), _n7s[8] >= 1 && (_n7m.houg += 1 * _n7s[8]), _n7s[10] >= 1 && (_n7m.kaih += 1 * _n7s[10])) : 3 == _n7x && (_n7s[7] >= 1 && (_n7m.tyku += 1 * _n7s[7]), _n7s[9] >= 1 && (_n7m.houg += 1 * _n7s[9]), _n7s[10] >= 1 && (_n7m.kaih += 1 * _n7s[10]));
            }
            if (0 == _n7o) return _n7m;
            for (var _n7y = 0, _n7z = 0, _n80 = _n7k.have_slot_ids(); _n7z < _n80.length; _n7z++) {
                var _n81 = _n80[_n7z],
                    _n82 = _n7j.default.model.slot.getMst(_n81),
                    _n83 = _n82.equipType;
                (12 == _n83 || 13 == _n83) && _n82.sakuteki >= 5 && (_n7y += _n7k.get_slotnums(parseInt(_n81)));
            }
            return _n7y > 0 && (_n7m.houg += 2, _n7m.kaih += 2), _n7m;
        };
    },
    16748: function(_n84, _n85, _n86) {
        'use strict';
        var _n87 = null;
        var _n88 = this && this.__importDefault || function(_n89) {
            var _n8a = null;
            return _n89 && _n89.__esModule ? _n89 : {
                'default': _n89
            };
        };
        defineModule(_n85);
        Object.defineProperty(_n85, '__esModule', {
            'value': true
        }), _n85.getSlot290PersonalEffect = void 0;
        var _n8b = _n86(74496),
            _n8c = _n88(_n86(18622));
        _n85.getSlot290PersonalEffect = function(_n8d) {
            var _n8e = null,
                _n8f = new _n8b.SlotItemEffectModel(),
                _n8g = 0,
                _n8h = new _n8b.SlotItemEffectModel();
            if (411 == _n8d.ship_id) _n8h.houg = 1;
            else {
                if (412 == _n8d.ship_id) _n8h.houg = 1;
                else {
                    if (82 == _n8d.ship_id) _n8h.houg = 2, _n8h.tyku = 2, _n8h.kaih = 1, _n8g = 1;
                    else {
                        if (553 == _n8d.ship_id) _n8h.houg = 3, _n8h.tyku = 2, _n8h.kaih = 1, _n8h.houm = 3, _n8g = 1;
                        else {
                            if (88 == _n8d.ship_id) _n8h.houg = 2, _n8h.tyku = 2, _n8h.kaih = 1, _n8g = 1;
                            else {
                                if (554 != _n8d.ship_id) return _n8f;
                                _n8h.houg = 3, _n8h.tyku = 2, _n8h.kaih = 2, _n8h.houm = 3, _n8g = 1;
                            }
                        }
                    }
                }
            }
            var _n8i = _n8d.get_slotnums(290);
            if (_n8f = _n8h.multiply(_n8i), 0 == _n8g) return _n8f;
            for (var _n8j = 0, _n8k = 0, _n8l = _n8d.have_slot_ids(); _n8k < _n8l.length; _n8k++) {
                var _n8m = _n8l[_n8k],
                    _n8n = _n8c.default.model.slot.getMst(_n8m),
                    _n8o = _n8n.equipType;
                (12 == _n8o || 13 == _n8o) && _n8n.taiku >= 2 && (_n8j += _n8d.get_slotnums(parseInt(_n8m)));
            }
            return _n8j > 0 && (_n8f.tyku += 2, _n8f.kaih += 3), _n8f;
        };
    },
    53618: (_n8p, _n8q, _n8r) => {
        'use strict';
        var _n8s = null;
        defineModule(_n8q);
        Object.defineProperty(_n8q, '__esModule', {
            'value': true
        }), _n8q.getSlot291PersonalEffect = void 0;
        var _n8t = _n8r(74496);
        _n8q.getSlot291PersonalEffect = function(_n8u) {
            var _n8v = null,
                _n8w = new _n8t.SlotItemEffectModel(),
                _n8x = new _n8t.SlotItemEffectModel();
            if (553 == _n8u.ship_id) _n8x.houg = 6, _n8x.kaih = 1;
            else {
                if (554 != _n8u.ship_id) return _n8w;
                _n8x.houg = 6, _n8x.kaih = 1;
            }
            var _n8y = _n8u.get_slotnums(291);
            return _n8w = _n8x.multiply(_n8y);
        };
    },
    72573: (_n8z, _n90, _n91) => {
        'use strict';
        var _n92 = null;
        defineModule(_n90);
        Object.defineProperty(_n90, '__esModule', {
            'value': true
        }), _n90.getSlot292PersonalEffect = void 0;
        var _n93 = _n91(74496);
        _n90.getSlot292PersonalEffect = function(_n94) {
            var _n95 = null,
                _n96 = new _n93.SlotItemEffectModel(),
                _n97 = new _n93.SlotItemEffectModel();
            if (553 == _n94.ship_id) _n97.houg = 8, _n97.kaih = 2, _n97.tyku = 1;
            else {
                if (554 != _n94.ship_id) return _n96;
                _n97.houg = 8, _n97.kaih = 2, _n97.tyku = 1;
            }
            var _n98 = _n94.get_slotnums(292);
            return _n96 = _n97.multiply(_n98);
        };
    },
    8955: function(_n99, _n9a, _n9b) {
        'use strict';
        var _n9c = null;
        var _n9d = this && this.__importDefault || function(_n9e) {
            var _n9f = null;
            return _n9e && _n9e.__esModule ? _n9e : {
                'default': _n9e
            };
        };
        defineModule(_n9a);
        Object.defineProperty(_n9a, '__esModule', {
            'value': true
        }), _n9a.getSlot293PersonalEffect = void 0;
        var _n9g = _n9b(74496),
            _n9h = _n9d(_n9b(18622));
        _n9a.getSlot293PersonalEffect = function(_n9i) {
            var _n9j = null,
                _n9k = new _n9g.SlotItemEffectModel(),
                _n9l = new _n9g.SlotItemEffectModel(),
                _n9m = 0;
            if (66 == _n9i.ctype || 28 == _n9i.ctype) _n9l.houg = 2, _n9l.tyku = 1, _n9l.kaih = 3, _n9m = 1;
            else {
                if (74 != _n9i.ctype && 77 != _n9i.ctype) return _n9k;
                _n9l.houg = 1, _n9l.tyku = 1, _n9l.kaih = 2, _n9m = 2;
            }
            var _n9n = _n9i.get_slotnums(293);
            _n9k = _n9l.multiply(_n9n);
            for (var _n9o = 0, _n9p = 0, _n9q = _n9i.have_slot_ids(); _n9p < _n9q.length; _n9p++) {
                var _n9r = _n9q[_n9p],
                    _n9s = _n9h.default.model.slot.getMst(_n9r),
                    _n9t = _n9s.equipType;
                (12 == _n9t || 13 == _n9t) && _n9s.sakuteki >= 5 && (_n9o += _n9i.get_slotnums(parseInt(_n9r)));
            }
            var _n9u = _n9i.get_slotnums(174);
            return 1 == _n9m ? (_n9o > 0 && (_n9k.houg += 2, _n9k.kaih += 3, _n9k.raig += 1), 1 == _n9u ? (_n9k.houg += 2, _n9k.raig += 4) : _n9u >= 2 && (_n9k.houg += 3, _n9k.raig += 7)) : 2 == _n9m && _n9o > 0 && (_n9k.houg += 2, _n9k.kaih += 3, _n9k.tais += 1), _n9k;
        };
    },
    98947: function(_n9v, _n9w, _n9x) {
        'use strict';
        var _n9y = null;
        var _n9z = this && this.__importDefault || function(_na0) {
            var _na1 = null;
            return _na0 && _na0.__esModule ? _na0 : {
                'default': _na0
            };
        };
        defineModule(_n9w);
        Object.defineProperty(_n9w, '__esModule', {
            'value': true
        }), _n9w.getSlot294PersonalEffect = void 0;
        var _na2 = _n9x(74496),
            _na3 = _n9z(_n9x(18622));
        _n9w.getSlot294PersonalEffect = function(_na4) {
            var _na5 = null,
                _na6 = new _na2.SlotItemEffectModel(),
                _na7 = new _na2.SlotItemEffectModel(),
                _na8 = 0,
                _na9 = _na4.get_slotnums(294);
            if (12 != _na4.ctype && 1 != _na4.ctype && 5 != _na4.ctype) return _na6;
            _na7.houg = 1, 959 == _na4.ship_id && (_na7.houg += 1, _na9 >= 2 && (_na6.houg += 2), _na9 >= 3 && (_na6.houg += 3), _na8 = 1), _na6.add(_na7.multiply(_na9));
            for (var _naa = 0, _nab = 0, _nac = _na4.have_slot_ids(); _nab < _nac.length; _nab++) {
                var _nad = _nac[_nab],
                    _nae = _na3.default.model.slot.getMst(_nad),
                    _naf = _nae.equipType;
                (12 == _naf || 13 == _naf) && _nae.sakuteki >= 5 && (_naa += _na4.get_slotnums(parseInt(_nad)));
            }
            var _nag = _na4.get_slotnums(13),
                _nah = _na4.get_slotnums(125),
                _nai = _na4.get_slotnums(285),
                _naj = _nag + _nah + _nai;
            if (_naa > 0 && (_na6.houg += 3, _na6.kaih += 2, _na6.raig += 1), 1 == _naj ? (_na6.houg += 1, _na6.raig += 3) : _naj >= 2 && (_na6.houg += 2, _na6.raig += 5), _nai >= 1 && (_na6.raig += 1), 0 == _na8) return _na6;
            var _nak = _na4.get_each_level_nums(294),
                _nal = [];
            return _na8 > 0 && _nak.forEach(function(_nam, _nan) {
                var _nao = null;
                for (var _nap = 1; _nap <= _na4.SLOT_LEVEL_MAX; _nap++) null == _nal[_nap] && (_nal[_nap] = 0), _nan >= _nap && (_nal[_nap] += _nam);
            }), 1 == _na8 && (_nal[6] >= 1 && (_na6.houm += 4 * _nal[6]), _nal[7] >= 1 && (_na6.houg = _na6.houg + 6 * _nal[7]), _nal[8] >= 1 && (_na6.houg = _na6.houg + 1 * _nal[8]), _nal[9] >= 1 && (_na6.houg = _na6.houg + 1 * _nal[9]), _nal[10] >= 1 && (_na6.houg += 1 * _nal[10])), _na6;
        };
    },
    44726: function(_naq, _nar, _nas) {
        'use strict';
        var _nat = null;
        var _nau = this && this.__importDefault || function(_nav) {
            var _naw = null;
            return _nav && _nav.__esModule ? _nav : {
                'default': _nav
            };
        };
        defineModule(_nar);
        Object.defineProperty(_nar, '__esModule', {
            'value': true
        }), _nar.getSlot295PersonalEffect = void 0;
        var _nax = _nas(74496),
            _nay = _nau(_nas(18622));
        _nar.getSlot295PersonalEffect = function(_naz) {
            var _nb0 = null,
                _nb1 = new _nax.SlotItemEffectModel(),
                _nb2 = new _nax.SlotItemEffectModel(),
                _nb3 = _naz.get_slotnums(295);
            if (12 != _naz.ctype && 1 != _naz.ctype && 5 != _naz.ctype) return _nb1;
            _nb2.houg = 2, _nb2.tyku = 2, 666 == _naz.ship_id ? (_nb2.houg += 1, _nb2.tyku += 1, _nb2.tais += 1) : 959 == _naz.ship_id && (_nb2.houg += 2, _nb3 >= 2 && (_nb1.houg += 2), _nb3 >= 3 && (_nb1.houg += 3)), _nb1.add(_nb2.multiply(_nb3));
            for (var _nb4 = 0, _nb5 = 0, _nb6 = 0, _nb7 = _naz.have_slot_ids(); _nb6 < _nb7.length; _nb6++) {
                var _nb8 = _nb7[_nb6],
                    _nb9 = _nay.default.model.slot.getMst(_nb8),
                    _nba = _nb9.equipType;
                12 != _nba && 13 != _nba || (_nb9.sakuteki >= 5 && (_nb4 += _naz.get_slotnums(parseInt(_nb8))), _nb9.taiku >= 2 && (_nb5 += _naz.get_slotnums(parseInt(_nb8))));
            }
            var _nbb = _naz.get_slotnums(13),
                _nbc = _naz.get_slotnums(125),
                _nbd = _naz.get_slotnums(285),
                _nbe = _nbb + _nbc + _nbd;
            return _nb4 > 0 && (_nb1.houg += 3, _nb1.kaih += 2, _nb1.raig += 1), 1 == _nbe ? (_nb1.houg += 1, _nb1.raig += 3) : _nbe >= 2 && (_nb1.houg += 2, _nb1.raig += 5), _nbd >= 1 && (_nb1.raig += 1), _nb5 > 0 && (_nb1.tyku += 6), _nb1;
        };
    },
    93065: function(_nbf, _nbg, _nbh) {
        'use strict';
        var _nbi = null;
        var _nbj = this && this.__importDefault || function(_nbk) {
            var _nbl = null;
            return _nbk && _nbk.__esModule ? _nbk : {
                'default': _nbk
            };
        };
        defineModule(_nbg);
        Object.defineProperty(_nbg, '__esModule', {
            'value': true
        }), _nbg.getSlot296PersonalEffect = void 0;
        var _nbm = _nbh(74496),
            _nbn = _nbj(_nbh(18622));
        _nbg.getSlot296PersonalEffect = function(_nbo) {
            var _nbp = null,
                _nbq = new _nbm.SlotItemEffectModel(),
                _nbr = new _nbm.SlotItemEffectModel();
            1 != _nbo.ctype && 5 != _nbo.ctype && 10 != _nbo.ctype && 23 != _nbo.ctype || (_nbr.houg += 1), 10 != _nbo.ctype && 23 != _nbo.ctype || (_nbr.kaih += 1), 145 == _nbo.ship_id || 961 == _nbo.ship_id ? (_nbr.houg += 1, _nbr.tyku += 1) : 144 == _nbo.ship_id ? (_nbr.houg += 1, _nbr.raig += 1) : 469 == _nbo.ship_id || 588 == _nbo.ship_id || 667 == _nbo.ship_id || 587 == _nbo.ship_id || 242 == _nbo.ship_id ? _nbr.kaih += 1 : 497 == _nbo.ship_id ? (_nbr.houg += 1, _nbr.kaih += 1) : 244 == _nbo.ship_id ? _nbr.kaih += 1 : 498 == _nbo.ship_id || 975 == _nbo.ship_id ? (_nbr.tyku += 1, _nbr.kaih += 1) : 627 == _nbo.ship_id ? (_nbr.houg += 2, _nbr.raig += 1) : 903 != _nbo.ship_id && 908 != _nbo.ship_id || (_nbr.houg += 3);
            var _nbs = true;
            if (_nbr.exists() || (_nbs = false), 0 == _nbs) return _nbq;
            var _nbt = _nbo.get_slotnums(296);
            _nbq = _nbr.multiply(_nbt);
            var _nbu = 0;
            if (1 != _nbo.ctype && 5 != _nbo.ctype && 10 != _nbo.ctype || (_nbu = 1), 23 == _nbo.ctype && (_nbu = 2), 0 == _nbu) return _nbq;
            for (var _nbv = 0, _nbw = 0, _nbx = 0, _nby = _nbo.have_slot_ids(); _nbx < _nby.length; _nbx++) {
                var _nbz = _nby[_nbx],
                    _nc0 = _nbn.default.model.slot.getMst(_nbz),
                    _nc1 = _nc0.equipType;
                12 != _nc1 && 13 != _nc1 || (_nc0.sakuteki >= 5 && (_nbv += _nbo.get_slotnums(parseInt(_nbz))), _nc0.taiku >= 2 && (_nbw += _nbo.get_slotnums(parseInt(_nbz))));
            }
            return _nbv > 0 && (1 == _nbu ? (_nbq.houg += 1, _nbq.kaih += 2, _nbq.raig += 2) : 2 == _nbu && (_nbq.houg += 1, _nbq.kaih += 2, _nbq.raig += 3)), _nbo.get_slotnums(285) + _nbo.get_slotnums(125) >= 1 && 1 == _nbu && (_nbq.houg += 1, _nbq.raig += 3), _nbo.get_slotnums(15) + _nbo.get_slotnums(286) >= 1 && 2 == _nbu && (_nbq.houg += 1, _nbq.raig += 3), _nbw > 0 && (1 == _nbu ? _nbq.tyku += 5 : 2 == _nbu && (_nbq.tyku += 6)), _nbq;
        };
    },
    85767: (_nc2, _nc3, _nc4) => {
        'use strict';
        var _nc5 = null;
        defineModule(_nc3);
        Object.defineProperty(_nc3, '__esModule', {
            'value': true
        }), _nc3.getSlot297PersonalEffect = void 0;
        var _nc6 = _nc4(74496);
        _nc3.getSlot297PersonalEffect = function(_nc7) {
            var _nc8 = null,
                _nc9 = new _nc6.SlotItemEffectModel(),
                _nca = new _nc6.SlotItemEffectModel();
            if (12 == _nc7.ctype) _nca.kaih = 2;
            else {
                if (1 != _nc7.ctype && 5 != _nc7.ctype) return _nc9;
                _nca.kaih = 1;
            }
            var _ncb = _nc7.get_slotnums(297);
            return _nc9 = _nca.multiply(_ncb);
        };
    },
    38314: (_ncc, _ncd, _nce) => {
        'use strict';
        var _ncf = null;
        defineModule(_ncd);
        Object.defineProperty(_ncd, '__esModule', {
            'value': true
        }), _ncd.getSlot301PersonalEffect = void 0;
        var _ncg = _nce(74496);
        _ncd.getSlot301PersonalEffect = function(_nch) {
            var _nci = null,
                _ncj = new _ncg.SlotItemEffectModel(),
                _nck = new _ncg.SlotItemEffectModel();
            67 != _nch.ctype && 78 != _nch.ctype && 82 != _nch.ctype && 88 != _nch.ctype && 108 != _nch.ctype && 112 != _nch.ctype || (_nck.tyku += 2, _nck.kaih += 1, _nck.souk += 1);
            var _ncl = true;
            if (_nck.exists() || (_ncl = false), 0 == _ncl) return _ncj;
            var _ncm = _nch.get_slotnums(301);
            return _ncj = _nck.multiply(_ncm);
        };
    },
    59747: (_ncn, _nco, _ncp) => {
        'use strict';
        var _ncq = null;
        defineModule(_nco);
        Object.defineProperty(_nco, '__esModule', {
            'value': true
        }), _nco.getSlot302PersonalEffect = void 0;
        var _ncr = _ncp(74496);
        _nco.getSlot302PersonalEffect = function(_ncs) {
            var _nct = null,
                _ncu = new _ncr.SlotItemEffectModel(),
                _ncv = new _ncr.SlotItemEffectModel();
            if (76 == _ncs.ctype && (_ncv.tais = 1, _ncv.kaih = 1), !_ncv.exists()) return _ncu;
            var _ncw = _ncs.get_slotnums(302);
            return _ncu = _ncv.multiply(_ncw);
        };
    },
    40649: (_ncx, _ncy, _ncz) => {
        'use strict';
        var _nd0 = null;
        defineModule(_ncy);
        Object.defineProperty(_ncy, '__esModule', {
            'value': true
        }), _ncy.getSlot303PersonalEffect = void 0;
        var _nd1 = _ncz(74496);
        _ncy.getSlot303PersonalEffect = function(_nd2) {
            var _nd3 = null,
                _nd4 = new _nd1.SlotItemEffectModel(),
                _nd5 = new _nd1.SlotItemEffectModel();
            if (16 == _nd2.ctype || 4 == _nd2.ctype || 20 == _nd2.ctype || 41 == _nd2.ctype ? (_nd5.houg = 1, _nd5.tyku = 1) : 89 == _nd2.ctype && (_nd5.houg = 1, _nd5.tyku = 2, _nd5.kaih = 1), !_nd5.exists()) return _nd4;
            var _nd6 = _nd2.get_slotnums(303);
            return _nd4 = _nd5.multiply(_nd6);
        };
    },
    13533: (_nd7, _nd8, _nd9) => {
        'use strict';
        var _nda = null;
        defineModule(_nd8);
        Object.defineProperty(_nd8, '__esModule', {
            'value': true
        }), _nd8.getSlot304PersonalEffect = void 0;
        var _ndb = _nd9(74496);
        _nd8.getSlot304PersonalEffect = function(_ndc) {
            var _ndd = null,
                _nde = new _ndb.SlotItemEffectModel(),
                _ndf = new _ndb.SlotItemEffectModel();
            if (16 == _ndc.ctype || 4 == _ndc.ctype || 20 == _ndc.ctype || 41 == _ndc.ctype ? (_ndf.houg = 1, _ndf.tais = 1, _ndf.kaih = 1) : 89 == _ndc.ctype && (_ndf.houg = 1, _ndf.tais = 2, _ndf.kaih = 2), !_ndf.exists()) return _nde;
            var _ndg = _ndc.get_slotnums(304);
            return _nde = _ndf.multiply(_ndg);
        };
    },
    99791: (_ndh, _ndi, _ndj) => {
        'use strict';
        var _ndk = null;
        defineModule(_ndi);
        Object.defineProperty(_ndi, '__esModule', {
            'value': true
        }), _ndi.getSlot305More320mmGunPersonalEffect = void 0;
        var _ndl = _ndj(74496);
        _ndi.getSlot305More320mmGunPersonalEffect = function(_ndm) {
            var _ndn = null,
                _ndo = new _ndl.SlotItemEffectModel(),
                _ndp = _ndm.get_slotnums(426),
                _ndq = _ndm.get_slotnums(427),
                _ndr = _ndm.get_slotnums(428),
                _nds = _ndm.get_slotnums(429),
                _ndt = _ndp + _ndq + _ndr + _nds;
            return 113 == _ndm.ctype ? (_ndo.houg = _ndo.houg + 2 * _ndt, _ndp >= 1 && (_ndo.houg = _ndo.houg + 1 * _ndp, _ndo.kaih = _ndo.kaih + 1 * _ndp, (_ndp >= 2 || _ndq >= 1) && (_ndo.houg = _ndo.houg + 1, _ndo.kaih = _ndo.kaih + 1)), _ndr >= 1 && (_ndo.houg = _ndo.houg + 1 * _ndr, _ndo.kaih = _ndo.kaih + 1 * _ndr, (_ndr >= 2 || _nds >= 1) && (_ndo.houg = _ndo.houg + 2, _ndo.kaih = _ndo.kaih + 1))) : 73 == _ndm.ctype ? (_ndo.houg = _ndo.houg + 1 * _ndt, _ndp >= 1 && (_ndo.houg = _ndo.houg + 1 * _ndp, _ndo.kaih = _ndo.kaih + 1 * _ndp, (_ndp >= 2 || _ndq >= 1) && (_ndo.houg = _ndo.houg + 1)), _ndr >= 1 && (_ndo.houg = _ndo.houg + 1 * _ndr, _ndo.kaih = _ndo.kaih + 1 * _ndr, (_ndr >= 2 || _nds >= 1) && (_ndo.houg = _ndo.houg + 1))) : 58 == _ndm.ctype && _ndr >= 1 && (_ndo.houg = _ndo.houg + 1 * _ndr, _ndo.kaih = _ndo.kaih + 2 * _ndr, (_ndr >= 2 || _nds >= 1) && (_ndo.houg = _ndo.houg + 2, _ndo.kaih = _ndo.kaih + 1)), _ndo;
        };
    },
    12138: (_ndu, _ndv, _ndw) => {
        'use strict';
        var _ndx = null;
        defineModule(_ndv);
        Object.defineProperty(_ndv, '__esModule', {
            'value': true
        }), _ndv.getSlot305_And_306_PersonalEffect = void 0;
        var _ndy = _ndw(74496);
        _ndv.getSlot305_And_306_PersonalEffect = function(_ndz) {
            var _ne0 = null,
                _ne1 = new _ndy.SlotItemEffectModel(),
                _ne2 = new _ndy.SlotItemEffectModel();
            if (76 == _ndz.ctype && (_ne2.tais = 1, _ne2.kaih = 1), 'しんよう' == _ndz.yomi ? (_ne2.tais += 2, _ne2.kaih += 1) : 'グラーフ・ツェッペリン' != _ndz.yomi && 'アクィラ' != _ndz.yomi || (_ne2.houg = 1, _ne2.kaih = 1), !_ne2.exists()) return _ne1;
            var _ne3 = _ndz.get_slotnums(305) + _ndz.get_slotnums(306);
            return _ne1 = _ne2.multiply(_ne3);
        };
    },
    30042: (_ne4, _ne5, _ne6) => {
        'use strict';
        var _ne7 = null;
        defineModule(_ne5);
        Object.defineProperty(_ne5, '__esModule', {
            'value': true
        }), _ne5.getSlot307PersonalEffect = void 0;
        var _ne8 = _ne6(74496);
        _ne5.getSlot307PersonalEffect = function(_ne9) {
            var _nea = null,
                _neb = new _ne8.SlotItemEffectModel(),
                _nec = new _ne8.SlotItemEffectModel();
            if ('アメリカ' == _ne9.getCountryName() && (_nec.houg = 1, _nec.tyku = 1, _nec.kaih = 1), !_nec.exists()) return _neb;
            var _ned = _ne9.get_slotnums(307);
            return _neb = _nec.multiply(_ned);
        };
    },
    33623: (_nee, _nef, _neg) => {
        'use strict';
        var _neh = null;
        defineModule(_nef);
        Object.defineProperty(_nef, '__esModule', {
            'value': true
        }), _nef.getSlot308PersonalEffect = void 0;
        var _nei = _neg(74496);
        _nef.getSlot308PersonalEffect = function(_nej) {
            var _nek = null,
                _nel = new _nei.SlotItemEffectModel(),
                _nem = new _nei.SlotItemEffectModel();
            if ('アメリカ' == _nej.getCountryName() && (_nem.houg = 1, _nem.tyku = 1, _nem.kaih = 1), 2 == _nej.stype ? _nem.houg += 1 : 1 == _nej.stype && (_nem.tyku += 1, _nem.kaih += 1), 651 != _nej.ship_id && 656 != _nej.ship_id || (_nem.houg += 1, _nem.tyku += 1, _nem.kaih += 1), !_nem.exists()) return _nel;
            var _nen = _nej.get_slotnums(308);
            return _nel = _nem.multiply(_nen);
        };
    },
    17732: (_neo, _nep, _neq) => {
        'use strict';
        var _ner = null;
        defineModule(_nep);
        Object.defineProperty(_nep, '__esModule', {
            'value': true
        }), _nep.getSlot30_410PersonalEffect = void 0;
        var _nes = _neq(74496);
        _nep.getSlot30_410PersonalEffect = function(_net) {
            var _neu = null,
                _nev = new _nes.SlotItemEffectModel();
            return 73 != _net.ship_id && 501 != _net.ship_id && 506 != _net.ship_id && 502 != _net.ship_id && 507 != _net.ship_id || (_nev.tyku += 3, _nev.kaih += 2, _nev.saku += 2, _net.get_slotnums(410) >= 1 && (_nev.tyku += 2, _nev.kaih += 2, _nev.houg += 1, _nev.souk += 1)), 54 == _net.ctype && (_nev.tyku += 3, _nev.kaih += 2, _nev.saku += 2, _net.get_slotnums(410) >= 1 && (_nev.tyku += 2, _nev.kaih += 2, _nev.houg += 1, _nev.souk += 1, 968 == _net.ship_id && (_nev.houg += 1, _nev.tyku += 1, _nev.kaih += 1))), _nev;
        };
    },
    85630: function(_new, _nex, _ney) {
        'use strict';
        var _nez = null;
        var _nf0 = this && this.__importDefault || function(_nf1) {
            var _nf2 = null;
            return _nf1 && _nf1.__esModule ? _nf1 : {
                'default': _nf1
            };
        };
        defineModule(_nex);
        Object.defineProperty(_nex, '__esModule', {
            'value': true
        }), _nex.getSlot310PersonalEffect = void 0;
        var _nf3 = _ney(74496),
            _nf4 = _nf0(_ney(18622));
        _nex.getSlot310PersonalEffect = function(_nf5) {
            var _nf6 = null,
                _nf7 = new _nf3.SlotItemEffectModel(),
                _nf8 = new _nf3.SlotItemEffectModel(),
                _nf9 = new _nf3.SlotItemEffectModel();
            34 == _nf5.ctype ? (_nf8.houg += 2, _nf8.tyku += 1, _nf8.kaih += 1, _nf9.houg += 2) : 56 == _nf5.ctype ? (_nf8.houg += 2, _nf8.kaih += 1, _nf9.houg += 2, _nf9.kaih += 2) : 90 == _nf5.ctype && (_nf8.houg += 3, _nf8.raig += 2, _nf8.tyku += 1, _nf8.kaih += 1, _nf9.houg += 1, _nf9.raig += 1);
            var _nfa = new _nf3.SlotItemEffectModel(),
                _nfb = new _nf3.SlotItemEffectModel();
            622 != _nf5.ship_id && 623 != _nf5.ship_id && 624 != _nf5.ship_id || (_nf8.houg += 2, _nf8.kaih += 1, _nf8.tais += 1, _nfa.houg = 1, _nfa.raig = 1, _nfb.houg = 3, _nfb.kaih = 2, _nfb.raig = 2);
            var _nfc = true;
            if (_nf8.exists() || (_nfc = false), 0 == _nfc) return _nf7;
            var _nfd = _nf5.get_slotnums(310) + _nf5.get_slotnums(518);
            _nf7 = _nf8.multiply(_nfd);
            for (var _nfe = 0, _nff = 0, _nfg = 0, _nfh = [310, 518]; _nfg < _nfh.length; _nfg++) {
                var _nfi = _nfh[_nfg],
                    _nfj = _nf5.have_slots_dict[_nfi];
                if (null != _nfj)
                    for (var _nfk = 0, _nfl = _nfj; _nfk < _nfl.length; _nfk++) {
                        var _nfm = _nfl[_nfk];
                        null != _nfm && (_nfm.level >= 7 && _nfe++, _nfm.level >= 10 && _nff++);
                    }
            }
            if (_nfa.exists() && _nfe > 0 && _nf7.add(_nfa.multiply(_nfe)), _nf9.exists() && _nff > 0 && _nf7.add(_nf9.multiply(_nff)), _nfb.exists()) {
                for (var _nfn = 0, _nfo = 0, _nfp = _nf5.have_slot_ids(); _nfo < _nfp.length; _nfo++) {
                    var _nfq = _nfp[_nfo],
                        _nfr = _nf4.default.model.slot.getMst(_nfq),
                        _nfs = _nfr.equipType;
                    (12 == _nfs || 13 == _nfs) && _nfr.sakuteki >= 5 && (_nfn += _nf5.get_slotnums(parseInt(_nfq)));
                }
                _nfn > 0 && _nf7.add(_nfb);
            }
            return _nf7;
        };
    },
    88736: (_nft, _nfu, _nfv) => {
        'use strict';
        var _nfw = null;
        defineModule(_nfu);
        Object.defineProperty(_nfu, '__esModule', {
            'value': true
        }), _nfu.getSlot313PersonalEffect = void 0;
        var _nfx = _nfv(74496);
        _nfu.getSlot313PersonalEffect = function(_nfy) {
            var _nfz = null,
                _ng0 = new _nfx.SlotItemEffectModel(),
                _ng1 = new _nfx.SlotItemEffectModel();
            87 != _nfy.ctype && 91 != _nfy.ctype || (_ng1.houg += 2, _ng1.tyku += 2, _ng1.kaih += 1, _ng1.souk += 1), 651 != _nfy.ship_id && 656 != _nfy.ship_id || (_ng1.houg += 2, _ng1.tyku += 2, _ng1.kaih += 1, _ng1.souk += 1);
            var _ng2 = true;
            if (_ng1.exists() || (_ng2 = false), 0 == _ng2) return _ng0;
            var _ng3 = _nfy.get_slotnums(313);
            return _ng0 = _ng1.multiply(_ng3);
        };
    },
    49341: (_ng4, _ng5, _ng6) => {
        'use strict';
        var _ng7 = null;
        defineModule(_ng5);
        Object.defineProperty(_ng5, '__esModule', {
            'value': true
        }), _ng5.getSlot314PersonalEffect = void 0;
        var _ng8 = _ng6(74496);
        _ng5.getSlot314PersonalEffect = function(_ng9) {
            var _nga = null,
                _ngb = new _ng8.SlotItemEffectModel(),
                _ngc = new _ng8.SlotItemEffectModel();
            87 != _ng9.ctype && 91 != _ng9.ctype || (_ngc.houg += 1, _ngc.raig += 3);
            var _ngd = true;
            if (_ngc.exists() || (_ngd = false), 0 == _ngd) return _ngb;
            var _nge = _ng9.get_slotnums(314);
            return _ngb = _ngc.multiply(_nge);
        };
    },
    74306: (_ngf, _ngg, _ngh) => {
        'use strict';
        var _ngi = null;
        defineModule(_ngg);
        Object.defineProperty(_ngg, '__esModule', {
            'value': true
        }), _ngg.getSlot315PersonalEffect = void 0;
        var _ngj = _ngh(74496);
        _ngg.getSlot315PersonalEffect = function(_ngk) {
            var _ngl = null,
                _ngm = new _ngj.SlotItemEffectModel(),
                _ngn = new _ngj.SlotItemEffectModel();
            'アメリカ' == _ngk.getCountryName() && (_ngn.houg += 2, _ngn.kaih += 3, _ngn.saku += 4), 87 != _ngk.ctype && 91 != _ngk.ctype || (_ngn.houg += 1, _ngm.leng += 1), 651 != _ngk.ship_id && 656 != _ngk.ship_id || (_ngm.houg += 2, _ngm.kaih += 2, _ngm.saku += 3, _ngm.leng += 1);
            var _ngo = true;
            if (_ngn.exists() || (_ngo = false), 0 == _ngo) return _ngm;
            var _ngp = _ngk.get_slotnums(315);
            return _ngm.add(_ngn.multiply(_ngp)), _ngm;
        };
    },
    83898: (_ngq, _ngr, _ngs) => {
        'use strict';
        var _ngt = null;
        defineModule(_ngr);
        Object.defineProperty(_ngr, '__esModule', {
            'value': true
        }), _ngr.getSlot316PersonalEffect = void 0;
        var _ngu = _ngs(74496);
        _ngr.getSlot316PersonalEffect = function(_ngv) {
            var _ngw = null,
                _ngx = new _ngu.SlotItemEffectModel(),
                _ngy = new _ngu.SlotItemEffectModel();
            if (68 == _ngv.ctype) {
                if (_ngy.houg += 4, _ngy.tyku += 1, _ngy.kaih += 1, !_ngy.exists()) return _ngx;
                var _ngz = _ngv.get_slotnums(316);
                _ngx = _ngy.multiply(_ngz);
            }
            return _ngx;
        };
    },
    71873: (_nh0, _nh1, _nh2) => {
        'use strict';
        var _nh3 = null;
        defineModule(_nh1);
        Object.defineProperty(_nh1, '__esModule', {
            'value': true
        }), _nh1.getSlot317PersonalEffect = void 0;
        var _nh4 = _nh2(74496);
        _nh1.getSlot317PersonalEffect = function(_nh5) {
            var _nh6 = null,
                _nh7 = new _nh4.SlotItemEffectModel(),
                _nh8 = new _nh4.SlotItemEffectModel(),
                _nh9 = 0,
                _nha = false;
            if (6 == _nh5.ctype ? (_nh8.houg += 2, _nh8.tyku += 1, _nh9 = 1, _nha = true) : 2 == _nh5.ctype && (_nh8.houg += 1, _nh8.tyku += 1, _nh8.kaih += 1, _nh9 = 2, _nha = true), 149 == _nh5.ship_id || 591 == _nh5.ship_id || 592 == _nh5.ship_id ? (_nh8.houg += 2, _nh8.tyku += 2, _nha = true) : 150 == _nh5.ship_id ? (_nh8.houg += 1, _nh8.tyku += 1, _nha = true) : 151 == _nh5.ship_id ? (_nh8.houg += 1, _nh8.tyku += 1, _nh8.kaih += 1, _nha = true) : 593 == _nh5.ship_id ? (_nh8.houg += 1, _nh8.tyku += 3, _nh8.kaih += 2, _nha = true) : 954 == _nh5.ship_id ? (_nh8.houg += 2, _nh8.tyku += 2, _nh8.kaih += 1, _nha = true) : 152 == _nh5.ship_id ? (_nh8.houg += 2, _nh8.tyku += 1, _nha = true) : 541 == _nh5.ship_id ? (_nh8.houg += 1, _nh8.tyku += 2, _nha = true) : 573 == _nh5.ship_id && (_nh8.houg += 2, _nh8.tyku += 2, _nh8.kaih += 1, _nha = true), 0 == _nha) return _nh7;
            if (_nh7.add(_nh8), 0 == _nh9) return _nh7;
            var _nhb = _nh5.get_each_level_nums(317),
                _nhc = [];
            return _nh9 > 0 && _nhb.forEach(function(_nhd, _nhe) {
                var _nhf = null;
                for (var _nhg = 1; _nhg <= _nh5.SLOT_LEVEL_MAX; _nhg++) null == _nhc[_nhg] && (_nhc[_nhg] = 0), _nhe >= _nhg && (_nhc[_nhg] += _nhd);
            }), 1 == _nh9 ? _nhc[8] >= 1 && (_nh7.houm += 1) : 2 == _nh9 && _nhb[10] >= 1 && (_nh7.houm += 1), _nh7;
        };
    },
    53122: function(_nhh, _nhi, _nhj) {
        'use strict';
        var _nhk = null;
        var _nhl = this && this.__importDefault || function(_nhm) {
            var _nhn = null;
            return _nhm && _nhm.__esModule ? _nhm : {
                'default': _nhm
            };
        };
        defineModule(_nhi);
        Object.defineProperty(_nhi, '__esModule', {
            'value': true
        }), _nhi.getSlot318PersonalEffect = void 0;
        var _nho = _nhj(74496),
            _nhp = _nhl(_nhj(18622));
        _nhi.getSlot318PersonalEffect = function(_nhq) {
            var _nhr = null,
                _nhs = new _nho.SlotItemEffectModel(),
                _nht = new _nho.SlotItemEffectModel(),
                _nhu = new _nho.SlotItemEffectModel(),
                _nhv = new _nho.SlotItemEffectModel();
            if (411 == _nhq.ship_id || 412 == _nhq.ship_id ? _nht.houg += 1 : 82 == _nhq.ship_id ? (_nht.houg += 2, _nht.tyku += 2, _nht.kaih += 2, _nhv.tyku = 2, _nhv.kaih = 3, _nhv.houm = 1) : 553 == _nhq.ship_id ? (_nht.houg += 2, _nht.tyku += 2, _nht.kaih += 2, _nht.houm += 3, _nhv.tyku = 2, _nhv.kaih = 3, _nhv.houm = 1, _nhu.kaih = 2, _nhu.souk = 1) : 88 == _nhq.ship_id ? (_nht.houg += 2, _nht.tyku += 2, _nht.kaih += 2, _nhv.tyku = 2, _nhv.kaih = 3, _nhv.houm = 1) : 541 == _nhq.ship_id || 573 == _nhq.ship_id ? (_nht.houg += 3, _nht.tyku += 2, _nht.kaih += 1, _nht.houm += 2, _nhu.houg = 2, _nhu.kaih = 2, _nhu.souk = 1, _nhu.houm = 1) : 554 == _nhq.ship_id && (_nht.houg += 3, _nht.tyku += 2, _nht.kaih += 2, _nht.houm += 3, _nhv.tyku = 2, _nhv.kaih = 3, _nhv.houm = 1, _nhu.houg = 1, _nhu.kaih = 2, _nhu.souk = 1, _nhu.houm = 1), !_nht.exists()) return _nhs;
            var _nhw = _nhq.get_slotnums(318);
            if (_nhs = _nht.multiply(_nhw), !_nhu.exists() && !_nhv.exists()) return _nhs;
            for (var _nhx = 0, _nhy = 0, _nhz = _nhq.have_slot_ids(); _nhy < _nhz.length; _nhy++) {
                var _ni0 = _nhz[_nhy],
                    _ni1 = _nhp.default.model.slot.getMst(_ni0),
                    _ni2 = _ni1.equipType;
                (12 == _ni2 || 13 == _ni2) && _ni1.taiku >= 2 && (_nhx += _nhq.get_slotnums(parseInt(_ni0)));
            }
            var _ni3 = _nhq.get_slotnums(290);
            return _nhv.exists() && _nhx > 0 && 0 == _ni3 && _nhs.add(_nhv), _nhu.exists() && _ni3 >= 1 && _nhs.add(_nhu), _nhs;
        };
    },
    51063: (_ni4, _ni5, _ni6) => {
        'use strict';
        var _ni7 = null;
        defineModule(_ni5);
        Object.defineProperty(_ni5, '__esModule', {
            'value': true
        }), _ni5.getSlot319PersonalEffect = void 0;
        var _ni8 = _ni6(74496);
        _ni5.getSlot319PersonalEffect = function(_ni9) {
            var _nia = null,
                _nib = new _ni8.SlotItemEffectModel(),
                _nic = new _ni8.SlotItemEffectModel();
            if (554 != _ni9.ship_id && 553 != _ni9.ship_id || (_nic.houg = 7, _nic.tyku = 3, _nic.kaih = 2), !_nic.exists()) return _nib;
            var _nid = _ni9.get_slotnums(319);
            return _nib = _nic.multiply(_nid);
        };
    },
    91491: (_nie, _nif, _nig) => {
        'use strict';
        var _nih = null;
        defineModule(_nif);
        Object.defineProperty(_nif, '__esModule', {
            'value': true
        }), _nif.getSlot320PersonalEffect = void 0;
        var _nii = _nig(74496);
        _nif.getSlot320PersonalEffect = function(_nij) {
            var _nik = null,
                _nil = new _nii.SlotItemEffectModel(),
                _nim = new _nii.SlotItemEffectModel();
            if (553 == _nij.ship_id) _nim.houg = 2;
            else {
                if (554 == _nij.ship_id) _nim.houg = 4;
                else {
                    if (196 == _nij.ship_id) _nim.houg = 3;
                    else {
                        if (197 == _nij.ship_id) _nim.houg = 3;
                        else {
                            if (508 == _nij.ship_id) _nim.houg = 4;
                            else {
                                if (509 != _nij.ship_id) return _nil;
                                _nim.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nin = _nij.get_slotnums(320);
            return _nil = _nim.multiply(_nin);
        };
    },
    85495: (_nio, _nip, _niq) => {
        'use strict';
        var _nir = null;
        defineModule(_nip);
        Object.defineProperty(_nip, '__esModule', {
            'value': true
        }), _nip.getSlot322PersonalEffect = void 0;
        var _nis = _niq(74496);
        _nip.getSlot322PersonalEffect = function(_nit) {
            var _niu = null,
                _niv = new _nis.SlotItemEffectModel(),
                _niw = new _nis.SlotItemEffectModel();
            if (554 != _nit.ship_id && 553 != _nit.ship_id || (_niw.houg = 5, _niw.tyku = 2, _niw.kaih = 2, _niw.tais = 1), !_niw.exists()) return _niv;
            var _nix = _nit.get_slotnums(322);
            return _niv = _niw.multiply(_nix);
        };
    },
    65365: (_niy, _niz, _nj0) => {
        'use strict';
        var _nj1 = null;
        defineModule(_niz);
        Object.defineProperty(_niz, '__esModule', {
            'value': true
        }), _niz.getSlot323PersonalEffect = void 0;
        var _nj2 = _nj0(74496);
        _niz.getSlot323PersonalEffect = function(_nj3) {
            var _nj4 = null,
                _nj5 = new _nj2.SlotItemEffectModel(),
                _nj6 = new _nj2.SlotItemEffectModel();
            if (554 != _nj3.ship_id && 553 != _nj3.ship_id || (_nj6.houg = 6, _nj6.tyku = 3, _nj6.kaih = 3, _nj6.tais = 2), !_nj6.exists()) return _nj5;
            var _nj7 = _nj3.get_slotnums(323);
            return _nj5 = _nj6.multiply(_nj7);
        };
    },
    98164: (_nj8, _nj9, _nja) => {
        'use strict';
        var _njb = null;
        defineModule(_nj9);
        Object.defineProperty(_nj9, '__esModule', {
            'value': true
        }), _nj9.getSlot324And325PersonalEffect = void 0;
        var _njc = _nja(74496);
        _nj9.getSlot324And325PersonalEffect = function(_njd) {
            var _nje = null,
                _njf = new _njc.SlotItemEffectModel(),
                _njg = new _njc.SlotItemEffectModel();
            if (554 == _njd.ship_id || 646 == _njd.ship_id ? (_njg.houg = 2, _njg.tais = 3, _njg.kaih = 1) : 553 == _njd.ship_id && (_njg.houg = 1, _njg.tais = 2, _njg.kaih = 1), !_njg.exists()) return _njf;
            var _njh = _njd.get_slotnums(324) + _njd.get_slotnums(325);
            return _njf = _njg.multiply(_njh);
        };
    },
    38114: (_nji, _njj, _njk) => {
        'use strict';
        var _njl = null;
        defineModule(_njj);
        Object.defineProperty(_njj, '__esModule', {
            'value': true
        }), _njj.getSlot326PersonalEffect = void 0;
        var _njm = _njk(74496);
        _njj.getSlot326PersonalEffect = function(_njn) {
            var _njo = null,
                _njp = new _njm.SlotItemEffectModel(),
                _njq = new _njm.SlotItemEffectModel();
            if (646 == _njn.ship_id ? (_njq.houg = 3, _njq.tais = 5, _njq.kaih = 3) : 554 == _njn.ship_id ? (_njq.houg = 3, _njq.tais = 4, _njq.kaih = 2) : 553 == _njn.ship_id && (_njq.houg = 1, _njq.tais = 3, _njq.kaih = 1), !_njq.exists()) return _njp;
            var _njr = _njn.get_slotnums(326);
            return _njp = _njq.multiply(_njr);
        };
    },
    21003: (_njs, _njt, _nju) => {
        'use strict';
        var _njv = null;
        defineModule(_njt);
        Object.defineProperty(_njt, '__esModule', {
            'value': true
        }), _njt.getSlot327PersonalEffect = void 0;
        var _njw = _nju(74496);
        _njt.getSlot327PersonalEffect = function(_njx) {
            var _njy = null,
                _njz = new _njw.SlotItemEffectModel(),
                _nk0 = new _njw.SlotItemEffectModel();
            if (646 == _njx.ship_id ? (_nk0.houg = 5, _nk0.tais = 6, _nk0.kaih = 4) : 554 == _njx.ship_id ? (_nk0.houg = 4, _nk0.tais = 5, _nk0.kaih = 2) : 553 == _njx.ship_id && (_nk0.houg = 2, _nk0.tais = 4, _nk0.kaih = 1), !_nk0.exists()) return _njz;
            var _nk1 = _njx.get_slotnums(327);
            return _njz = _nk0.multiply(_nk1);
        };
    },
    77010: (_nk2, _nk3, _nk4) => {
        'use strict';
        var _nk5 = null;
        defineModule(_nk3);
        Object.defineProperty(_nk3, '__esModule', {
            'value': true
        }), _nk3.getSlot328PersonalEffect = void 0;
        var _nk6 = _nk4(74496);
        _nk3.getSlot328PersonalEffect = function(_nk7) {
            var _nk8 = null,
                _nk9 = new _nk6.SlotItemEffectModel(),
                _nka = new _nk6.SlotItemEffectModel();
            if ('こんごう' == _nk7.yomi ? (_nka.houg = 1, _nka.kaih = 1, 209 == _nk7.ship_id || 149 == _nk7.ship_id ? _nka.houg += 1 : 591 == _nk7.ship_id && (_nka.houg += 2, _nka.raig += 1)) : 'ひえい' == _nk7.yomi ? (_nka.houg = 1, _nka.kaih = 1, 210 == _nk7.ship_id || 150 == _nk7.ship_id ? _nka.houg += 1 : 592 == _nk7.ship_id && (_nka.houg += 2, _nka.tyku += 1)) : 'はるな' == _nk7.yomi ? (_nka.houg = 1, _nka.kaih = 1, 211 == _nk7.ship_id || 151 == _nk7.ship_id ? _nka.houg += 1 : 593 == _nk7.ship_id ? (_nka.houg += 1, _nka.tyku += 2) : 954 == _nk7.ship_id && (_nka.houg += 2, _nka.tyku += 1)) : 'きりしま' == _nk7.yomi ? (_nka.houg = 1, _nka.kaih = 1, 212 != _nk7.ship_id && 152 != _nk7.ship_id || (_nka.houg += 1)) : ('ふそう' == _nk7.yomi || 'やましろ' == _nk7.yomi || 'いせ' == _nk7.yomi || 'ひゅうが' == _nk7.yomi) && (_nka.houg = 1), !_nka.exists()) return _nk9;
            var _nkb = _nk7.get_slotnums(328);
            return _nk9 = _nka.multiply(_nkb);
        };
    },
    39126: (_nkc, _nkd, _nke) => {
        'use strict';
        var _nkf = null;
        defineModule(_nkd);
        Object.defineProperty(_nkd, '__esModule', {
            'value': true
        }), _nkd.getSlot329PersonalEffect = void 0;
        var _nkg = _nke(74496);
        _nkd.getSlot329PersonalEffect = function(_nkh) {
            var _nki = null,
                _nkj = new _nkg.SlotItemEffectModel(),
                _nkk = new _nkg.SlotItemEffectModel();
            if ('こんごう' == _nkh.yomi ? (_nkk.houg = 1, _nkk.kaih = 1, 209 == _nkh.ship_id ? _nkk.houg += 1 : 149 == _nkh.ship_id ? (_nkk.houg += 2, _nkk.tyku += 1) : 591 == _nkh.ship_id && (_nkk.houg += 3, _nkk.tyku += 1, _nkk.raig += 2)) : 'ひえい' == _nkh.yomi ? (_nkk.houg = 1, _nkk.kaih = 1, 210 == _nkh.ship_id ? _nkk.houg += 1 : 150 == _nkh.ship_id ? (_nkk.houg += 2, _nkk.tyku += 1) : 592 == _nkh.ship_id && (_nkk.houg += 3, _nkk.tyku += 1, _nkk.raig += 2)) : 'はるな' == _nkh.yomi ? (_nkk.houg = 1, _nkk.kaih = 1, 211 == _nkh.ship_id ? _nkk.houg += 1 : 151 == _nkh.ship_id ? (_nkk.houg += 2, _nkk.tyku += 1) : 593 == _nkh.ship_id ? (_nkk.houg += 2, _nkk.tyku += 3, _nkk.raig += 1) : 954 == _nkh.ship_id && (_nkk.houg += 3, _nkk.tyku += 1, _nkk.raig += 2)) : 'きりしま' == _nkh.yomi ? (_nkk.houg = 1, _nkk.kaih = 1, 212 == _nkh.ship_id ? _nkk.houg += 1 : 152 == _nkh.ship_id && (_nkk.houg += 2, _nkk.tyku += 1)) : ('ふそう' == _nkh.yomi || 'やましろ' == _nkh.yomi || 'いせ' == _nkh.yomi || 'ひゅうが' == _nkh.yomi) && (_nkk.houg = 1), !_nkk.exists()) return _nkj;
            var _nkl = _nkh.get_slotnums(329);
            return _nkj = _nkk.multiply(_nkl);
        };
    },
    72176: (_nkm, _nkn, _nko) => {
        'use strict';
        var _nkp = null;
        defineModule(_nkn);
        Object.defineProperty(_nkn, '__esModule', {
            'value': true
        }), _nkn.getSlot335PersonalEffect = void 0;
        var _nkq = _nko(74496);
        _nkn.getSlot335PersonalEffect = function(_nkr) {
            var _nks = null,
                _nkt = new _nkq.SlotItemEffectModel(),
                _nku = new _nkq.SlotItemEffectModel();
            if (277 == _nkr.ship_id || 278 == _nkr.ship_id ? (_nku.tyku = 1, _nku.kaih = 1) : 594 != _nkr.ship_id && 599 != _nkr.ship_id && 610 != _nkr.ship_id && 646 != _nkr.ship_id && 698 != _nkr.ship_id || (_nku.tyku = 2, _nku.kaih = 1), !_nku.exists()) return _nkt;
            var _nkv = _nkr.get_slotnums(335);
            return _nkt = _nku.multiply(_nkv);
        };
    },
    33846: (_nkw, _nkx, _nky) => {
        'use strict';
        var _nkz = null;
        defineModule(_nkx);
        Object.defineProperty(_nkx, '__esModule', {
            'value': true
        }), _nkx.getSlot336PersonalEffect = void 0;
        var _nl0 = _nky(74496);
        _nkx.getSlot336PersonalEffect = function(_nl1) {
            var _nl2 = null,
                _nl3 = new _nl0.SlotItemEffectModel(),
                _nl4 = new _nl0.SlotItemEffectModel();
            if (277 == _nl1.ship_id || 278 == _nl1.ship_id ? (_nl4.houg = 1, _nl4.tyku = 1, _nl4.kaih = 1) : 594 != _nl1.ship_id && 599 != _nl1.ship_id && 610 != _nl1.ship_id && 646 != _nl1.ship_id && 698 != _nl1.ship_id || (_nl4.houg = 1, _nl4.tyku = 2, _nl4.kaih = 1), !_nl4.exists()) return _nl3;
            var _nl5 = _nl1.get_slotnums(336);
            return _nl3 = _nl4.multiply(_nl5);
        };
    },
    97157: (_nl6, _nl7, _nl8) => {
        'use strict';
        var _nl9 = null;
        defineModule(_nl7);
        Object.defineProperty(_nl7, '__esModule', {
            'value': true
        }), _nl7.getSlot337PersonalEffect = void 0;
        var _nla = _nl8(74496);
        _nl7.getSlot337PersonalEffect = function(_nlb) {
            var _nlc = null,
                _nld = new _nla.SlotItemEffectModel(),
                _nle = new _nla.SlotItemEffectModel();
            if (277 == _nlb.ship_id || 278 == _nlb.ship_id ? (_nle.houg = 1, _nle.tyku = 1, _nle.kaih = 1) : 594 != _nlb.ship_id && 599 != _nlb.ship_id && 610 != _nlb.ship_id && 646 != _nlb.ship_id && 698 != _nlb.ship_id || (_nle.houg = 2, _nle.tyku = 2, _nle.kaih = 1), !_nle.exists()) return _nld;
            var _nlf = _nlb.get_slotnums(337);
            return _nld = _nle.multiply(_nlf);
        };
    },
    63406: (_nlg, _nlh, _nli) => {
        'use strict';
        var _nlj = null;
        defineModule(_nlh);
        Object.defineProperty(_nlh, '__esModule', {
            'value': true
        }), _nlh.getSlot338PersonalEffect = void 0;
        var _nlk = _nli(74496);
        _nlh.getSlot338PersonalEffect = function(_nll) {
            var _nlm = null,
                _nln = new _nlk.SlotItemEffectModel(),
                _nlo = new _nlk.SlotItemEffectModel();
            if (277 == _nll.ship_id || 278 == _nll.ship_id ? (_nlo.houg = 1, _nlo.tyku = 1, _nlo.kaih = 2) : 594 == _nll.ship_id || 646 == _nll.ship_id || 698 == _nll.ship_id ? (_nlo.houg = 1, _nlo.tyku = 2, _nlo.kaih = 3) : 599 != _nll.ship_id && 610 != _nll.ship_id || (_nlo.houg = 4, _nlo.tyku = 3, _nlo.kaih = 4), !_nlo.exists()) return _nln;
            var _nlp = _nll.get_slotnums(338);
            return _nln = _nlo.multiply(_nlp);
        };
    },
    66373: (_nlq, _nlr, _nls) => {
        'use strict';
        var _nlt = null;
        defineModule(_nlr);
        Object.defineProperty(_nlr, '__esModule', {
            'value': true
        }), _nlr.getSlot339PersonalEffect = void 0;
        var _nlu = _nls(74496);
        _nlr.getSlot339PersonalEffect = function(_nlv) {
            var _nlw = null,
                _nlx = new _nlu.SlotItemEffectModel(),
                _nly = new _nlu.SlotItemEffectModel();
            if (277 == _nlv.ship_id || 278 == _nlv.ship_id ? (_nly.houg = 1, _nly.tyku = 2, _nly.kaih = 2) : 594 == _nlv.ship_id || 646 == _nlv.ship_id || 698 == _nlv.ship_id ? (_nly.houg = 1, _nly.tyku = 3, _nly.kaih = 4) : 599 != _nlv.ship_id && 610 != _nlv.ship_id || (_nly.houg = 6, _nly.tyku = 4, _nly.kaih = 5), !_nly.exists()) return _nlx;
            var _nlz = _nlv.get_slotnums(339);
            return _nlx = _nly.multiply(_nlz);
        };
    },
    19707: (_nm0, _nm1, _nm2) => {
        'use strict';
        var _nm3 = null;
        defineModule(_nm1);
        Object.defineProperty(_nm1, '__esModule', {
            'value': true
        }), _nm1.getSlot340PersonalEffect = void 0;
        var _nm4 = _nm2(74496);
        _nm1.getSlot340PersonalEffect = function(_nm5) {
            var _nm6 = null,
                _nm7 = new _nm4.SlotItemEffectModel(),
                _nm8 = new _nm4.SlotItemEffectModel();
            if ('ガリバルディ' != _nm5.yomi && 'アブルッツィ' != _nm5.yomi || (_nm8.houg = 1, _nm8.tyku = 1, _nm8.kaih = 1), !_nm8.exists()) return _nm7;
            var _nm9 = _nm5.get_slotnums(340);
            return _nm7 = _nm8.multiply(_nm9);
        };
    },
    63978: (_nma, _nmb, _nmc) => {
        'use strict';
        var _nmd = null;
        defineModule(_nmb);
        Object.defineProperty(_nmb, '__esModule', {
            'value': true
        }), _nmb.getSlot341PersonalEffect = void 0;
        var _nme = _nmc(74496);
        _nmb.getSlot341PersonalEffect = function(_nmf) {
            var _nmg = null,
                _nmh = new _nme.SlotItemEffectModel(),
                _nmi = new _nme.SlotItemEffectModel();
            if ('ガリバルディ' == _nmf.yomi || 'アブルッツィ' == _nmf.yomi ? (_nmi.houg = 2, _nmi.tyku = 1, _nmi.kaih = 1) : 'ゴトランド' == _nmf.yomi && (_nmi.houg = 1, _nmi.tyku = 1, _nmi.kaih = 1), !_nmi.exists()) return _nmh;
            var _nmj = _nmf.get_slotnums(341);
            return _nmh = _nmi.multiply(_nmj);
        };
    },
    92382: (_nmk, _nml, _nmm) => {
        'use strict';
        var _nmn = null;
        defineModule(_nml);
        Object.defineProperty(_nml, '__esModule', {
            'value': true
        }), _nml.getSlot342PersonalEffect = void 0;
        var _nmo = _nmm(74496);
        _nml.getSlot342PersonalEffect = function(_nmp) {
            var _nmq = null,
                _nmr = new _nmo.SlotItemEffectModel(),
                _nms = new _nmo.SlotItemEffectModel();
            if (277 == _nmp.ship_id || 278 == _nmp.ship_id || 461 == _nmp.ship_id || 466 == _nmp.ship_id || 462 == _nmp.ship_id || 467 == _nmp.ship_id ? _nms.houg = 1 : 594 == _nmp.ship_id || 646 == _nmp.ship_id || 698 == _nmp.ship_id ? (_nms.houg = 2, _nms.tyku = 1, _nms.kaih = 1) : 599 != _nmp.ship_id && 610 != _nmp.ship_id || (_nms.houg = 3, _nms.tyku = 2, _nms.kaih = 2), !_nms.exists()) return _nmr;
            var _nmt = _nmp.get_slotnums(342);
            return _nmr = _nms.multiply(_nmt);
        };
    },
    78415: (_nmu, _nmv, _nmw) => {
        'use strict';
        var _nmx = null;
        defineModule(_nmv);
        Object.defineProperty(_nmv, '__esModule', {
            'value': true
        }), _nmv.getSlot343PersonalEffect = void 0;
        var _nmy = _nmw(74496);
        _nmv.getSlot343PersonalEffect = function(_nmz) {
            var _nn0 = null,
                _nn1 = new _nmy.SlotItemEffectModel(),
                _nn2 = new _nmy.SlotItemEffectModel();
            if (277 == _nmz.ship_id || 278 == _nmz.ship_id ? _nn2.houg = 2 : 461 == _nmz.ship_id || 466 == _nmz.ship_id || 462 == _nmz.ship_id || 467 == _nmz.ship_id ? _nn2.houg = 1 : 594 == _nmz.ship_id || 646 == _nmz.ship_id || 698 == _nmz.ship_id ? (_nn2.houg = 3, _nn2.tyku = 2, _nn2.kaih = 1) : 599 != _nmz.ship_id && 610 != _nmz.ship_id || (_nn2.houg = 5, _nn2.tyku = 3, _nn2.kaih = 3), !_nn2.exists()) return _nn1;
            var _nn3 = _nmz.get_slotnums(343);
            return _nn1 = _nn2.multiply(_nn3);
        };
    },
    23090: (_nn4, _nn5, _nn6) => {
        'use strict';
        var _nn7 = null;
        defineModule(_nn5);
        Object.defineProperty(_nn5, '__esModule', {
            'value': true
        }), _nn5.getSlot344PersonalEffect = void 0;
        var _nn8 = _nn6(74496);
        _nn5.getSlot344PersonalEffect = function(_nn9) {
            var _nna = null,
                _nnb = new _nn8.SlotItemEffectModel(),
                _nnc = new _nn8.SlotItemEffectModel();
            if (599 == _nn9.ship_id || 610 == _nn9.ship_id ? _nnc.houg = 3 : 555 == _nn9.ship_id || 560 == _nn9.ship_id ? (_nnc.houg = 2, _nnc.tais = 2) : 318 == _nn9.ship_id ? (_nnc.houg = 4, _nnc.tais = 1) : 282 == _nn9.ship_id ? (_nnc.houg = 2, _nnc.tais = 1) : 888 == _nn9.ship_id ? (_nnc.houg = 4, _nnc.tais = 2) : 883 == _nn9.ship_id && (_nnc.houg = 5, _nnc.tais = 2), !_nnc.exists()) return _nnb;
            var _nnd = _nn9.get_slotnums(344);
            return _nnb = _nnc.multiply(_nnd);
        };
    },
    18776: (_nne, _nnf, _nng) => {
        'use strict';
        var _nnh = null;
        defineModule(_nnf);
        Object.defineProperty(_nnf, '__esModule', {
            'value': true
        }), _nnf.getSlot345PersonalEffect = void 0;
        var _nni = _nng(74496);
        _nnf.getSlot345PersonalEffect = function(_nnj) {
            var _nnk = null,
                _nnl = new _nni.SlotItemEffectModel(),
                _nnm = new _nni.SlotItemEffectModel();
            if (599 == _nnj.ship_id || 610 == _nnj.ship_id ? (_nnm.houg = 3, _nnm.kaih = 1) : 555 == _nnj.ship_id || 560 == _nnj.ship_id ? (_nnm.houg = 3, _nnm.tais = 2, _nnm.kaih = 2) : 318 == _nnj.ship_id ? (_nnm.houg = 5, _nnm.tais = 1, _nnm.kaih = 2) : 282 == _nnj.ship_id ? (_nnm.houg = 3, _nnm.tais = 1, _nnm.kaih = 1) : 888 == _nnj.ship_id ? (_nnm.houg = 4, _nnm.tais = 2, _nnm.kaih = 2) : 883 == _nnj.ship_id && (_nnm.houg = 5, _nnm.tais = 2, _nnm.kaih = 3), !_nnm.exists()) return _nnl;
            var _nnn = _nnj.get_slotnums(345);
            return _nnl = _nnm.multiply(_nnn);
        };
    },
    89058: (_nno, _nnp, _nnq) => {
        'use strict';
        var _nnr = null;
        defineModule(_nnp);
        Object.defineProperty(_nnp, '__esModule', {
            'value': true
        }), _nnp.getSlot346PersonalEffect = void 0;
        var _nns = _nnq(74496);
        _nnp.getSlot346PersonalEffect = function(_nnt) {
            var _nnu = null,
                _nnv = new _nns.SlotItemEffectModel();
            return 'やましおまる' == _nnt.yomi && (_nnv.kaih += 1, _nnv.tais += 1), _nnv;
        };
    },
    84372: (_nnw, _nnx, _nny) => {
        'use strict';
        var _nnz = null;
        defineModule(_nnx);
        Object.defineProperty(_nnx, '__esModule', {
            'value': true
        }), _nnx.getSlot347PersonalEffect = void 0;
        var _no0 = _nny(74496);
        _nnx.getSlot347PersonalEffect = function(_no1) {
            var _no2 = null,
                _no3 = new _no0.SlotItemEffectModel();
            return 'やましおまる' == _no1.yomi && (_no3.kaih += 2, _no3.tais += 2), _no3;
        };
    },
    39656: (_no4, _no5, _no6) => {
        'use strict';
        var _no7 = null;
        defineModule(_no5);
        Object.defineProperty(_no5, '__esModule', {
            'value': true
        }), _no5.getSlot356_357PersonalEffect = void 0;
        var _no8 = _no6(74496);
        _no5.getSlot356_357PersonalEffect = function(_no9) {
            var _noa = null,
                _nob = new _no8.SlotItemEffectModel(),
                _noc = new _no8.SlotItemEffectModel();
            if (95 == _no9.ctype ? _noc.houg = 2 : 9 == _no9.ctype && (_noc.houg = 1), !_noc.exists()) return _nob;
            var _nod = _no9.get_slotnums(356) + _no9.get_slotnums(357);
            return _nob = _noc.multiply(_nod);
        };
    },
    66039: (_noe, _nof, _nog) => {
        'use strict';
        var _noh = null;
        defineModule(_nof);
        Object.defineProperty(_nof, '__esModule', {
            'value': true
        }), _nof.getSlot358PersonalEffect = void 0;
        var _noi = _nog(74496);
        _nof.getSlot358PersonalEffect = function(_noj) {
            var _nok = null,
                _nol = new _noi.SlotItemEffectModel(),
                _nom = new _noi.SlotItemEffectModel();
            if ('アメリカ' != _noj.getCountryName() && 67 != _noj.ctype && 78 != _noj.ctype && 82 != _noj.ctype && 88 != _noj.ctype && 108 != _noj.ctype && 112 != _noj.ctype) return _nol;
            _nom.houg += 1, _nom.kaih += 1, _nom.tyku += 1, 95 == _noj.ctype && (_nom.houg += 1, _nom.kaih += 2, _nom.tyku += 2);
            var _non = _noj.get_slotnums(358);
            return _nol = _nom.multiply(_non);
        };
    },
    64679: (_noo, _nop, _noq) => {
        'use strict';
        var _nor = null;
        defineModule(_nop);
        Object.defineProperty(_nop, '__esModule', {
            'value': true
        }), _nop.getSlot359PersonalEffect = void 0;
        var _nos = _noq(74496);
        _nop.getSlot359PersonalEffect = function(_not) {
            var _nou = null,
                _nov = new _nos.SlotItemEffectModel(),
                _now = new _nos.SlotItemEffectModel();
            if ('パース' == _not.yomi ? (_now.houg = 2, _now.tyku = 2, _now.kaih = 1) : 'ゆうばり' == _not.yomi && (_now.houg = 1, _now.tyku = 1, _now.kaih = 1), 622 != _not.ship_id && 623 != _not.ship_id && 624 != _not.ship_id || (_now.houg += 1, _now.tyku += 1), !_now.exists()) return _nov;
            var _nox = _not.get_slotnums(359);
            return _nov = _now.multiply(_nox);
        };
    },
    69954: (_noy, _noz, _np0) => {
        'use strict';
        var _np1 = null;
        defineModule(_noz);
        Object.defineProperty(_noz, '__esModule', {
            'value': true
        }), _noz.getSlot35PersonalEffect = void 0;
        var _np2 = _np0(74496);
        _noz.getSlot35PersonalEffect = function(_np3) {
            var _np4 = null,
                _np5 = new _np2.SlotItemEffectModel(),
                _np6 = new _np2.SlotItemEffectModel();
            return 149 == _np3.ship_id || 591 == _np3.ship_id || 592 == _np3.ship_id ? (_np6.houg += 1, _np6.tyku += 1) : 150 == _np3.ship_id ? _np6.tyku += 1 : 151 == _np3.ship_id || 593 == _np3.ship_id || 954 == _np3.ship_id ? (_np6.tyku += 1, _np6.kaih += 1) : 152 == _np3.ship_id && (_np6.houg += 1), _np6.exists() ? _np5 = _np6.multiply(1) : _np5;
        };
    },
    95953: (_np7, _np8, _np9) => {
        'use strict';
        var _npa = null;
        defineModule(_np8);
        Object.defineProperty(_np8, '__esModule', {
            'value': true
        }), _np8.getSlot360_361PersonalEffect = void 0;
        var _npb = _np9(74496);
        _np8.getSlot360_361PersonalEffect = function(_npc) {
            var _npd = null,
                _npe = new _npb.SlotItemEffectModel(),
                _npf = new _npb.SlotItemEffectModel();
            if ('デ・ロイテル' == _npc.yomi ? (_npf.houg = 2, _npf.tyku = 2, _npf.kaih = 1) : 'ゴトランド' == _npc.yomi && (_npf.houg = 2, _npf.tyku = 1, _npf.kaih = 1), 41 == _npc.ctype && (_npf.houg = 1, _npf.tyku = 1), !_npf.exists()) return _npe;
            var _npg = _npc.get_slotnums(360) + _npc.get_slotnums(361);
            return _npe = _npf.multiply(_npg);
        };
    },
    86384: (_nph, _npi, _npj) => {
        'use strict';
        var _npk = null;
        defineModule(_npi);
        Object.defineProperty(_npi, '__esModule', {
            'value': true
        }), _npi.getSlot362_363PersonalEffect = void 0;
        var _npl = _npj(74496);
        _npi.getSlot362_363PersonalEffect = function(_npm) {
            var _npn = null,
                _npo = new _npl.SlotItemEffectModel(),
                _npp = new _npl.SlotItemEffectModel(),
                _npq = false;
            if (99 == _npm.ctype ? (_npp.houg = 1, _npp.tyku = 2, _npp.kaih = 1, _npq = true) : 34 == _npm.ctype || 21 == _npm.ctype ? (_npp.houg = -3, _npp.tyku = -3, _npp.kaih = -8, _npq = true) : 4 == _npm.ctype || 20 == _npm.ctype || 16 == _npm.ctype ? (_npp.houg = -3, _npp.tyku = -2, _npp.kaih = -6, _npq = true) : 89 == _npm.ctype || 56 == _npm.ctype ? (_npp.houg = -2, _npp.tyku = -1, _npp.kaih = -4, _npq = true) : 52 != _npm.ctype && 41 != _npm.ctype && 98 != _npm.ctype || (_npp.tyku = -1, _npp.kaih = -2, _npq = true), 'アメリカ' == _npm.getCountryName() && (_npp.tyku += 1, _npp.kaih += 1, _npq = true), 0 == _npq) return _npo;
            var _npr = _npm.get_slotnums(362) + _npm.get_slotnums(363);
            return _npo = _npp.multiply(_npr);
        };
    },
    65345: (_nps, _npt, _npu) => {
        'use strict';
        var _npv = null;
        defineModule(_npt);
        Object.defineProperty(_npt, '__esModule', {
            'value': true
        }), _npt.getSlot364PersonalEffect = void 0;
        var _npw = _npu(74496);
        _npt.getSlot364PersonalEffect = function(_npx) {
            var _npy = null;
            new _npw.SlotItemEffectModel();
            var _npz = new _npw.SlotItemEffectModel();
            623 == _npx.ship_id || 586 == _npx.ship_id || 119 == _npx.ship_id || 118 == _npx.ship_id || 657 == _npx.ship_id || 506 == _npx.ship_id || 668 == _npx.ship_id || 507 == _npx.ship_id ? (_npz.raig = 1, _npz.kaih = -2, 119 == _npx.ship_id ? _npz.raig += 1 : 507 == _npx.ship_id ? _npz.raig += 2 : 623 == _npx.ship_id && (_npz.houg += 1, _npz.raig += 3)) : (_npz.houg = -1, _npz.kaih = -7);
            var _nq0 = _npx.get_slotnums(364);
            return _npz.multiply(_nq0);
        };
    },
    46514: (_nq1, _nq2, _nq3) => {
        'use strict';
        var _nq4 = null;
        defineModule(_nq2);
        Object.defineProperty(_nq2, '__esModule', {
            'value': true
        }), _nq2.getSlot365PersonalEffect = void 0;
        var _nq5 = _nq3(74496);
        _nq2.getSlot365PersonalEffect = function(_nq6) {
            var _nq7 = null,
                _nq8 = new _nq5.SlotItemEffectModel(),
                _nq9 = new _nq5.SlotItemEffectModel(),
                _nqa = false;
            return 37 != _nq6.ctype && 19 != _nq6.ctype && 2 != _nq6.ctype && 26 != _nq6.ctype && 6 != _nq6.ctype || (_nq9.houg += 1, _nqa = true), 136 != _nq6.ship_id && 148 != _nq6.ship_id && 546 != _nq6.ship_id && 541 != _nq6.ship_id && 573 != _nq6.ship_id && 911 != _nq6.ship_id && 916 != _nq6.ship_id && 593 != _nq6.ship_id || (_nq9.houg += 1, _nqa = true), 591 != _nq6.ship_id && 592 != _nq6.ship_id && 954 != _nq6.ship_id || (_nq9.houg += 2, _nqa = true), 0 == _nqa ? _nq8 : _nq8 = _nq9.multiply(1);
        };
    },
    81976: (_nqb, _nqc, _nqd) => {
        'use strict';
        var _nqe = null;
        defineModule(_nqc);
        Object.defineProperty(_nqc, '__esModule', {
            'value': true
        }), _nqc.getSlot367PersonalEffect = void 0;
        var _nqf = _nqd(74496);
        _nqc.getSlot367PersonalEffect = function(_nqg) {
            var _nqh = null,
                _nqi = new _nqf.SlotItemEffectModel(),
                _nqj = new _nqf.SlotItemEffectModel(),
                _nqk = false;
            if ('ゴトランド' == _nqg.yomi && (_nqj.houg += 2, _nqj.tais += 1, _nqj.kaih += 1, _nqj.saku += 1, _nqk = true), 70 == _nqg.ctype ? (_nqj.houg += 1, _nqj.tais += 1, _nqj.kaih += 1, _nqj.saku += 1, _nqk = true) : 72 == _nqg.ctype || 62 == _nqg.ctype ? (_nqj.houg += 1, _nqj.kaih += 1, _nqj.saku += 1, _nqk = true) : 67 != _nqg.ctype && 78 != _nqg.ctype && 82 != _nqg.ctype && 88 != _nqg.ctype && 108 != _nqg.ctype && 112 != _nqg.ctype || (_nqj.houg += 2, _nqj.kaih += 2, _nqj.saku += 2, _nqk = true), 0 == _nqk) return _nqi;
            var _nql = _nqg.get_slotnums(367);
            return _nqi = _nqj.multiply(_nql);
        };
    },
    89331: (_nqm, _nqn, _nqo) => {
        'use strict';
        var _nqp = null;
        defineModule(_nqn);
        Object.defineProperty(_nqn, '__esModule', {
            'value': true
        }), _nqn.getSlot368PersonalEffect = void 0;
        var _nqq = _nqo(74496);
        _nqn.getSlot368PersonalEffect = function(_nqr) {
            var _nqs = null,
                _nqt = new _nqq.SlotItemEffectModel(),
                _nqu = new _nqq.SlotItemEffectModel(),
                _nqv = false;
            if ('ゴトランド' == _nqr.yomi && (_nqu.houg = 4, _nqu.tais = 3, _nqu.kaih = 2, _nqu.saku = 3, _nqv = true, 630 == _nqr.ship_id && (_nqt.houg += 2, _nqt.raig += 2, _nqt.kaih += 1, _nqt.saku += 1)), 70 == _nqr.ctype ? (_nqu.houg = 2, _nqu.tais = 3, _nqu.kaih = 1, _nqu.saku = 2, _nqv = true) : 72 == _nqr.ctype || 62 == _nqr.ctype ? (_nqu.houg += 1, _nqu.tais += 2, _nqu.kaih += 1, _nqu.saku += 2, _nqv = true) : 67 != _nqr.ctype && 78 != _nqr.ctype && 82 != _nqr.ctype && 88 != _nqr.ctype && 108 != _nqr.ctype && 112 != _nqr.ctype || (_nqu.houg += 2, _nqu.tais += 2, _nqu.kaih += 2, _nqu.saku += 2, _nqv = true), 0 == _nqv) return _nqt;
            var _nqw = _nqr.get_slotnums(368);
            return _nqt.add(_nqu.multiply(_nqw)), _nqt;
        };
    },
    73973: (_nqx, _nqy, _nqz) => {
        'use strict';
        var _nr0 = null;
        defineModule(_nqy);
        Object.defineProperty(_nqy, '__esModule', {
            'value': true
        }), _nqy.getSlot369PersonalEffect = void 0;
        var _nr1 = _nqz(74496);
        _nqy.getSlot369PersonalEffect = function(_nr2) {
            var _nr3 = null,
                _nr4 = new _nr1.SlotItemEffectModel(),
                _nr5 = new _nr1.SlotItemEffectModel(),
                _nr6 = false;
            if ('ゴトランド' == _nr2.yomi && (_nr5.houg = 5, _nr5.tais = 4, _nr5.kaih = 4, _nr5.saku = 3, _nr6 = true, 630 == _nr2.ship_id && (_nr4.houg += 3, _nr4.raig += 3, _nr4.kaih += 2, _nr4.saku += 2)), 70 == _nr2.ctype ? (_nr5.houg += 3, _nr5.tais += 3, _nr5.kaih += 2, _nr5.saku += 3, _nr6 = true) : 72 == _nr2.ctype || 62 == _nr2.ctype ? (_nr5.houg += 2, _nr5.tais += 2, _nr5.kaih += 1, _nr5.saku += 2, _nr6 = true) : 67 != _nr2.ctype && 78 != _nr2.ctype && 82 != _nr2.ctype && 88 != _nr2.ctype && 108 != _nr2.ctype && 112 != _nr2.ctype || (_nr5.houg += 2, _nr5.tais += 2, _nr5.kaih += 2, _nr5.saku += 2, _nr6 = true), 0 == _nr6) return _nr4;
            var _nr7 = _nr2.get_slotnums(369);
            return _nr4.add(_nr5.multiply(_nr7)), _nr4;
        };
    },
    21178: (_nr8, _nr9, _nra) => {
        'use strict';
        var _nrb = null;
        defineModule(_nr9);
        Object.defineProperty(_nr9, '__esModule', {
            'value': true
        }), _nr9.getSlot370PersonalEffect = void 0;
        var _nrc = _nra(74496);
        _nr9.getSlot370PersonalEffect = function(_nrd) {
            var _nre = null,
                _nrf = new _nrc.SlotItemEffectModel(),
                _nrg = new _nrc.SlotItemEffectModel(),
                _nrh = false;
            if ('ゴトランド' == _nrd.yomi && (_nrg.houg = 1, _nrg.tais = 3, _nrg.kaih = 1, _nrg.saku = 2, _nrh = true), 70 == _nrd.ctype ? (_nrg.houg += 1, _nrg.tais += 3, _nrg.kaih += 1, _nrg.saku += 1, _nrh = true) : 72 == _nrd.ctype || 62 == _nrd.ctype ? (_nrg.houg += 1, _nrg.tais += 2, _nrg.kaih += 1, _nrg.saku += 1, _nrh = true) : 67 != _nrd.ctype && 78 != _nrd.ctype && 82 != _nrd.ctype && 88 != _nrd.ctype && 108 != _nrd.ctype && 112 != _nrd.ctype || (_nrg.houg += 2, _nrg.tais += 3, _nrg.kaih += 2, _nrg.saku += 2, _nrh = true, 'ウォースパイト' == _nrd.yomi ? (_nrf.houg += 4, _nrf.kaih += 1, _nrf.saku += 1) : 'ヴァリアント' == _nrd.yomi && (_nrf.houg += 3, _nrf.kaih += 2, _nrf.saku += 1)), 0 == _nrh) return _nrf;
            var _nri = _nrd.get_slotnums(370);
            return _nrf.add(_nrg.multiply(_nri)), _nrf;
        };
    },
    5079: (_nrj, _nrk, _nrl) => {
        'use strict';
        var _nrm = null;
        defineModule(_nrk);
        Object.defineProperty(_nrk, '__esModule', {
            'value': true
        }), _nrk.getSlot371PersonalEffect = void 0;
        var _nrn = _nrl(74496);
        _nrk.getSlot371PersonalEffect = function(_nro) {
            var _nrp = null,
                _nrq = new _nrn.SlotItemEffectModel(),
                _nrr = new _nrn.SlotItemEffectModel(),
                _nrs = false;
            if ('ゴトランド' == _nro.yomi && (_nrr.houg = 4, _nrr.tais = 2, _nrr.kaih = 3, _nrr.saku = 6, _nrs = true, 630 == _nro.ship_id && (_nrq.houg += 2, _nrq.kaih += 2, _nrq.saku += 3)), 70 == _nro.ctype ? (_nrr.houg += 2, _nrr.tais += 1, _nrr.kaih += 2, _nrr.saku += 4, _nrs = true) : 79 == _nro.ctype ? (_nrr.houg += 2, _nrr.kaih += 1, _nrr.saku += 3, _nrs = true) : 67 != _nro.ctype && 78 != _nro.ctype && 82 != _nro.ctype && 88 != _nro.ctype && 108 != _nro.ctype && 112 != _nro.ctype || (_nrr.houg += 3, _nrr.tais += 1, _nrr.kaih += 2, _nrr.saku += 3, _nrs = true, 88 == _nro.ctype && (_nrq.houg += 3, _nrq.kaih += 2, _nrq.saku += 2)), 0 == _nrs) return _nrq;
            var _nrt = _nro.get_slotnums(371);
            return _nrq.add(_nrr.multiply(_nrt)), _nrq;
        };
    },
    95014: (_nru, _nrv, _nrw) => {
        'use strict';
        var _nrx = null;
        defineModule(_nrv);
        Object.defineProperty(_nrv, '__esModule', {
            'value': true
        }), _nrv.getSlot372PersonalEffect = void 0;
        var _nry = _nrw(74496);
        _nrv.getSlot372PersonalEffect = function(_nrz) {
            var _ns0 = null,
                _ns1 = new _nry.SlotItemEffectModel(),
                _ns2 = false,
                _ns3 = new _nry.SlotItemEffectModel();
            if ('しょうかく' == _nrz.yomi || 'ずいかく' == _nrz.yomi || 'たいほう' == _nrz.yomi ? (_ns3.houg += 1, _ns2 = true, _ns1.raig += 1) : 'じゅんよう' != _nrz.yomi && 'ひよう' != _nrz.yomi || (_ns3.houg += 1, _ns2 = true), 108 == _nrz.ship_id || 109 == _nrz.ship_id || 291 == _nrz.ship_id || 292 == _nrz.ship_id || 296 == _nrz.ship_id || 297 == _nrz.ship_id ? (_ns3.houg += 1, _ns2 = true) : 116 == _nrz.ship_id || 74 == _nrz.ship_id || 117 == _nrz.ship_id || 282 == _nrz.ship_id || 185 == _nrz.ship_id ? (_ns3.tais += 1, _ns2 = true) : 560 == _nrz.ship_id || 555 == _nrz.ship_id || 318 == _nrz.ship_id ? (_ns3.tais += 1, _ns2 = true, _ns1.raig += 1) : 508 == _nrz.ship_id || 509 == _nrz.ship_id ? (_ns3.houg += 1, _ns2 = true) : 883 != _nrz.ship_id && 888 != _nrz.ship_id || (_ns3.houg += 2, _ns3.tais += 1, _ns2 = true, _ns1.raig += 2), 0 == _ns2) return _ns1;
            var _ns4 = _nrz.get_slotnums(372);
            return _ns1.add(_ns3.multiply(_ns4)), _ns1;
        };
    },
    53099: (_ns5, _ns6, _ns7) => {
        'use strict';
        var _ns8 = null;
        defineModule(_ns6);
        Object.defineProperty(_ns6, '__esModule', {
            'value': true
        }), _ns6.getSlot373PersonalEffect = void 0;
        var _ns9 = _ns7(74496);
        _ns6.getSlot373PersonalEffect = function(_nsa) {
            var _nsb = null,
                _nsc = new _ns9.SlotItemEffectModel(),
                _nsd = new _ns9.SlotItemEffectModel(),
                _nse = false;
            if ('しょうかく' == _nsa.yomi ? (_nsd.houg += 2, _nse = true, _nsc.raig += 2, _nsc.kaih += 2) : 'ずいかく' == _nsa.yomi ? (_nsd.houg += 1, _nse = true, _nsc.raig += 2, _nsc.kaih += 3) : 'たいほう' == _nsa.yomi ? (_nsd.houg += 1, _nse = true, _nsc.raig += 2, _nsc.kaih += 2) : 'じゅんよう' != _nsa.yomi && 'ひよう' != _nsa.yomi || (_nsd.houg += 1, _nse = true, _nsc.raig += 1, _nsc.kaih += 1), 108 == _nsa.ship_id || 109 == _nsa.ship_id ? (_nsd.houg += 1, _nse = true) : 291 == _nsa.ship_id || 292 == _nsa.ship_id ? (_nsd.houg += 1, _nse = true, _nsc.raig += 1) : 296 == _nsa.ship_id || 297 == _nsa.ship_id ? (_nsd.houg += 1, _nse = true, _nsc.raig += 1, _nsc.kaih += 1) : 116 == _nsa.ship_id || 74 == _nsa.ship_id ? (_nsd.tais += 1, _nse = true) : 117 == _nsa.ship_id || 282 == _nsa.ship_id || 185 == _nsa.ship_id ? (_nsd.houg += 1, _nsd.tais += 1, _nse = true, _nsc.raig += 1) : 560 == _nsa.ship_id || 555 == _nsa.ship_id || 318 == _nsa.ship_id ? (_nsd.houg += 1, _nsd.tais += 2, _nse = true, _nsc.raig += 1, _nsc.kaih += 1) : 508 == _nsa.ship_id || 509 == _nsa.ship_id ? (_nsd.houg += 1, _nse = true, _nsc.raig += 2, _nsc.kaih += 2) : 888 == _nsa.ship_id ? (_nsd.houg += 2, _nsd.tais += 2, _nse = true, _nsc.raig += 2, _nsc.kaih += 2) : 883 == _nsa.ship_id && (_nsd.houg += 1, _nsd.tais += 2, _nse = true, _nsc.raig += 3, _nsc.kaih += 4), 0 == _nse) return _nsc;
            var _nsf = _nsa.get_slotnums(373);
            return _nsc.add(_nsd.multiply(_nsf)), _nsc;
        };
    },
    76201: (_nsg, _nsh, _nsi) => {
        'use strict';
        var _nsj = null;
        defineModule(_nsh);
        Object.defineProperty(_nsh, '__esModule', {
            'value': true
        }), _nsh.getSlot374PersonalEffect = void 0;
        var _nsk = _nsi(74496);
        _nsh.getSlot374PersonalEffect = function(_nsl) {
            var _nsm = null,
                _nsn = new _nsk.SlotItemEffectModel(),
                _nso = new _nsk.SlotItemEffectModel(),
                _nsp = false;
            if ('しょうかく' == _nsl.yomi ? (_nso.houg += 3, _nsp = true, _nsn.raig += 3, _nsn.kaih += 3) : 'ずいかく' == _nsl.yomi ? (_nso.houg += 2, _nsp = true, _nsn.raig += 3, _nsn.kaih += 4) : 'たいほう' == _nsl.yomi ? (_nso.houg += 2, _nsp = true, _nsn.raig += 3, _nsn.kaih += 2) : 'じゅんよう' != _nsl.yomi && 'ひよう' != _nsl.yomi || (_nso.houg += 1, _nsp = true, _nsn.raig += 2, _nsn.kaih += 2), 108 == _nsl.ship_id || 109 == _nsl.ship_id ? (_nso.houg += 1, _nsp = true, _nsn.raig += 1) : 291 == _nsl.ship_id || 292 == _nsl.ship_id ? (_nso.houg += 1, _nso.tais += 1, _nsp = true, _nsn.raig += 1) : 296 == _nsl.ship_id || 297 == _nsl.ship_id ? (_nso.houg += 1, _nso.tais += 1, _nsp = true, _nsn.raig += 1, _nsn.kaih += 1) : 116 == _nsl.ship_id || 74 == _nsl.ship_id ? (_nso.houg += 1, _nso.tais += 1, _nsp = true) : 117 == _nsl.ship_id || 282 == _nsl.ship_id || 185 == _nsl.ship_id ? (_nso.houg += 1, _nso.tais += 2, _nsp = true, _nsn.raig += 1, _nsn.kaih += 1) : 560 == _nsl.ship_id || 555 == _nsl.ship_id || 318 == _nsl.ship_id ? (_nso.houg += 1, _nso.tais += 3, _nsp = true, _nsn.raig += 1, _nsn.kaih += 2) : 508 == _nsl.ship_id || 509 == _nsl.ship_id ? (_nso.houg += 1, _nso.tais += 2, _nsp = true, _nsn.raig += 2, _nsn.kaih += 3) : 888 == _nsl.ship_id ? (_nso.houg += 3, _nso.tais += 3, _nsp = true, _nsn.raig += 2, _nsn.kaih += 3) : 883 == _nsl.ship_id && (_nso.houg += 2, _nso.tais += 3, _nsp = true, _nsn.raig += 3, _nsn.kaih += 5), 0 == _nsp) return _nsn;
            var _nsq = _nsl.get_slotnums(374);
            return _nsn.add(_nso.multiply(_nsq)), _nsn;
        };
    },
    24931: (_nsr, _nss, _nst) => {
        'use strict';
        var _nsu = null;
        defineModule(_nss);
        Object.defineProperty(_nss, '__esModule', {
            'value': true
        }), _nss.getSlot375PersonalEffect = void 0;
        var _nsv = _nst(74496);
        _nss.getSlot375PersonalEffect = function(_nsw) {
            var _nsx = null,
                _nsy = new _nsv.SlotItemEffectModel(),
                _nsz = new _nsv.SlotItemEffectModel(),
                _nt0 = false;
            if (69 != _nsw.ctype && 83 != _nsw.ctype && 84 != _nsw.ctype && 105 != _nsw.ctype && 116 != _nsw.ctype && 118 != _nsw.ctype || (_nsz.tyku += 3, _nsz.houg += 3, _nsz.kaih += 3, _nsz.tais += 3, _nt0 = true), 'かが' == _nsw.yomi && (_nsz.tyku += 1, _nsz.houg += 1, _nsz.kaih += 1, _nsz.tais += 1, _nt0 = true), 0 == _nt0) return _nsy;
            var _nt1 = _nsw.get_slotnums(375);
            return _nsy.add(_nsz.multiply(_nt1)), _nsy;
        };
    },
    60978: (_nt2, _nt3, _nt4) => {
        'use strict';
        var _nt5 = null;
        defineModule(_nt3);
        Object.defineProperty(_nt3, '__esModule', {
            'value': true
        }), _nt3.getSlot376PersonalEffect = void 0;
        var _nt6 = _nt4(74496);
        _nt3.getSlot376PersonalEffect = function(_nt7) {
            var _nt8 = null,
                _nt9 = new _nt6.SlotItemEffectModel(),
                _nta = new _nt6.SlotItemEffectModel(),
                _ntb = false;
            if ('アメリカ' == _nt7.getCountryName() ? (_nta.houg += 2, _nta.raig += 4, _ntb = true) : 67 == _nt7.ctype || 78 == _nt7.ctype || 82 == _nt7.ctype || 88 == _nt7.ctype || 108 == _nt7.ctype || 112 == _nt7.ctype ? (_nta.houg += 1, _nta.raig += 2, _ntb = true) : 96 == _nt7.ctype && (_nta.houg += 1, _nta.raig += 1, _ntb = true), 0 == _ntb) return _nt9;
            var _ntc = _nt7.get_slotnums(376);
            return _nt9.add(_nta.multiply(_ntc)), _nt9;
        };
    },
    74312: (_ntd, _nte, _ntf) => {
        'use strict';
        var _ntg = null;
        defineModule(_nte);
        Object.defineProperty(_nte, '__esModule', {
            'value': true
        }), _nte.getSlot377PersonalEffect = void 0;
        var _nth = _ntf(74496);
        _nte.getSlot377PersonalEffect = function(_nti) {
            var _ntj = null,
                _ntk = new _nth.SlotItemEffectModel();
            return 'アメリカ' == _nti.getCountryName() ? (_ntk.tais += 2, _ntk.kaih += 1, 629 == _nti.ship_id && (_ntk.tais += 1, _ntk.kaih += 2)) : 67 != _nti.ctype && 78 != _nti.ctype && 82 != _nti.ctype && 88 != _nti.ctype && 108 != _nti.ctype && 112 != _nti.ctype && 96 != _nti.ctype || (_ntk.tais += 1, _ntk.kaih += 1), 651 != _nti.ship_id && 656 != _nti.ship_id || (_ntk.tais += 1, _ntk.kaih += 2), _ntk;
        };
    },
    54350: (_ntl, _ntm, _ntn) => {
        'use strict';
        var _nto = null;
        defineModule(_ntm);
        Object.defineProperty(_ntm, '__esModule', {
            'value': true
        }), _ntm.getSlot378PersonalEffect = void 0;
        var _ntp = _ntn(74496);
        _ntm.getSlot378PersonalEffect = function(_ntq) {
            var _ntr = null,
                _nts = new _ntp.SlotItemEffectModel();
            return 'アメリカ' == _ntq.getCountryName() ? (_nts.tais += 3, _nts.kaih += 1, 629 == _ntq.ship_id && (_nts.tais += 1, _nts.kaih += 1)) : 67 == _ntq.ctype || 78 == _ntq.ctype || 82 == _ntq.ctype || 88 == _ntq.ctype || 108 == _ntq.ctype || 112 == _ntq.ctype ? (_nts.tais += 2, _nts.kaih += 1) : 96 == _ntq.ctype && (_nts.tais += 1, _nts.kaih += 1), 651 != _ntq.ship_id && 656 != _ntq.ship_id || (_nts.tais += 1, _nts.kaih += 1), _nts;
        };
    },
    26262: function(_ntt, _ntu, _ntv) {
        'use strict';
        var _ntw = null;
        var _ntx = this && this.__importDefault || function(_nty) {
            var _ntz = null;
            return _nty && _nty.__esModule ? _nty : {
                'default': _nty
            };
        };
        defineModule(_ntu);
        Object.defineProperty(_ntu, '__esModule', {
            'value': true
        }), _ntu.getSlot379PersonalEffect = void 0;
        var _nu0 = _ntv(74496),
            _nu1 = _ntx(_ntv(18622));
        _ntu.getSlot379PersonalEffect = function(_nu2) {
            var _nu3 = null,
                _nu4 = new _nu0.SlotItemEffectModel(),
                _nu5 = false,
                _nu6 = new _nu0.SlotItemEffectModel();
            if (1 == _nu2.stype ? (_nu6.tyku += 2, _nu6.houg += 1, _nu5 = true) : 21 != _nu2.stype && 16 != _nu2.stype || (_nu6.tyku += 1, _nu6.houg += 1, _nu5 = true), 66 == _nu2.ctype || 28 == _nu2.ctype ? (_nu6.houg += 1, _nu6.tyku += 2, _nu5 = true) : 101 == _nu2.ctype && (_nu6.tyku += 2, _nu6.houg += 1, _nu4.tyku += 2, _nu4.houg += 2, _nu5 = true), 'ゆら' == _nu2.yomi || 'なか' == _nu2.yomi || 'きぬ' == _nu2.yomi || 'いすず' == _nu2.yomi ? (_nu6.houg += 2, _nu5 = true) : 'おおい' != _nu2.yomi && 'きたかみ' != _nu2.yomi || (_nu6.tyku += 2, _nu6.houg += 2, _nu5 = true), 'ゆら' != _nu2.yomi && 'なか' != _nu2.yomi && 'きぬ' != _nu2.yomi && 'いすず' != _nu2.yomi && 'ゆうばり' != _nu2.yomi || (_nu6.tais += 1, _nu5 = true), 'てんりゅう' != _nu2.yomi && 'たつた' != _nu2.yomi && 'ゆうばり' != _nu2.yomi || (_nu6.houg += 1, _nu5 = true), 488 == _nu2.ship_id ? (_nu6.tyku += 4, _nu5 = true) : 220 == _nu2.ship_id ? (_nu6.tyku += 3, _nu5 = true) : 23 == _nu2.ship_id ? (_nu6.tyku += 2, _nu5 = true) : 160 == _nu2.ship_id || 487 == _nu2.ship_id || 141 == _nu2.ship_id ? (_nu6.tyku += 3, _nu5 = true) : 224 == _nu2.ship_id || 289 == _nu2.ship_id || 219 == _nu2.ship_id || 56 == _nu2.ship_id || 113 == _nu2.ship_id || 22 == _nu2.ship_id ? (_nu6.tyku += 2, _nu5 = true) : 651 != _nu2.ship_id && 656 != _nu2.ship_id || (_nu6.tyku += 3, _nu6.houg += 3, 656 == _nu2.ship_id && (_nu6.kaih += 3, _nu6.tais += 2), _nu5 = true), 488 != _nu2.ship_id && 160 != _nu2.ship_id && 487 != _nu2.ship_id && 141 != _nu2.ship_id || (_nu6.tais += 1, _nu5 = true), 477 != _nu2.ship_id && 478 != _nu2.ship_id && 624 != _nu2.ship_id || (_nu6.tais += 2, _nu5 = true), 477 != _nu2.ship_id && 478 != _nu2.ship_id && 624 != _nu2.ship_id && 622 != _nu2.ship_id || (_nu6.tyku += 2, _nu5 = true), 652 != _nu2.ship_id && 657 != _nu2.ship_id && 547 != _nu2.ship_id && 146 != _nu2.ship_id || (_nu4.houg += 2), 652 != _nu2.ship_id && 657 != _nu2.ship_id && 547 != _nu2.ship_id && 146 != _nu2.ship_id || (_nu4.tyku += 2), _nu5) {
                var _nu7 = _nu2.get_slotnums(379);
                _nu4.add(_nu6.multiply(_nu7));
            }
            var _nu8 = new _nu0.SlotItemEffectModel(),
                _nu9 = false;
            16 == _nu2.stype || 3 == _nu2.stype || 4 == _nu2.stype || 21 == _nu2.stype ? (_nu8.houg += 1, _nu8.kaih += 2, _nu9 = true) : 1 == _nu2.stype && (_nu8.houg += 1, _nu8.kaih += 4, _nu9 = true), 66 == _nu2.ctype || 28 == _nu2.ctype || 21 == _nu2.ctype || 34 == _nu2.ctype ? (_nu8.houg += 2, _nu8.kaih += 3, _nu9 = true) : 101 == _nu2.ctype && (_nu8.houg += 4, _nu8.kaih += 3, _nu9 = true), 488 == _nu2.ship_id || 651 == _nu2.ship_id || 656 == _nu2.ship_id ? (_nu8.houg += 2, _nu8.kaih += 2, _nu9 = true) : 487 == _nu2.ship_id || 160 == _nu2.ship_id || 141 == _nu2.ship_id || 118 == _nu2.ship_id || 119 == _nu2.ship_id ? (_nu8.houg += 1, _nu8.kaih += 1, _nu9 = true) : 652 != _nu2.ship_id && 657 != _nu2.ship_id && 547 != _nu2.ship_id && 146 != _nu2.ship_id || (_nu8.houg += 1, _nu8.kaih += 1, _nu9 = true);
            var _nua = new _nu0.SlotItemEffectModel(),
                _nub = false;
            if (656 == _nu2.ship_id && (_nua.tyku += 3, _nua.kaih += 2, _nub = true), _nu9 || _nub) {
                for (var _nuc = 0, _nud = 0, _nue = 0, _nuf = _nu2.have_slot_ids(); _nue < _nuf.length; _nue++) {
                    var _nug = _nuf[_nue],
                        _nuh = _nu1.default.model.slot.getMst(_nug),
                        _nui = _nuh.equipType;
                    12 != _nui && 13 != _nui || (_nuh.sakuteki >= 5 && (_nuc += _nu2.get_slotnums(parseInt(_nug))), _nuh.taiku >= 2 && (_nud += _nu2.get_slotnums(parseInt(_nug))));
                }
                _nu9 && _nuc > 0 && _nu4.add(_nu8), _nub && _nud > 0 && _nu4.add(_nua);
            }
            return _nu4;
        };
    },
    45530: function(_nuj, _nuk, _nul) {
        'use strict';
        var _num = null;
        var _nun = this && this.__importDefault || function(_nuo) {
            var _nup = null;
            return _nuo && _nuo.__esModule ? _nuo : {
                'default': _nuo
            };
        };
        defineModule(_nuk);
        Object.defineProperty(_nuk, '__esModule', {
            'value': true
        }), _nuk.getSlot380PersonalEffect = void 0;
        var _nuq = _nul(74496),
            _nur = _nun(_nul(18622));
        _nuk.getSlot380PersonalEffect = function(_nus) {
            var _nut = null,
                _nuu = new _nuq.SlotItemEffectModel(),
                _nuv = false,
                _nuw = new _nuq.SlotItemEffectModel();
            if (21 != _nus.stype && 16 != _nus.stype || (_nuw.tyku += 2, _nuw.houg += 1, _nuv = true), 101 == _nus.ctype && (_nuw.tyku += 2, _nuw.houg += 1, _nuv = true, _nuu.tyku += 2, _nuu.houg += 2), 'ゆら' == _nus.yomi || 'なか' == _nus.yomi || 'きぬ' == _nus.yomi || 'いすず' == _nus.yomi ? (_nuw.houg += 2, _nuv = true) : 'おおい' != _nus.yomi && 'きたかみ' != _nus.yomi || (_nuw.tyku += 2, _nuw.houg += 3, _nuv = true), 'ゆら' != _nus.yomi && 'なか' != _nus.yomi && 'きぬ' != _nus.yomi && 'いすず' != _nus.yomi && 'ゆうばり' != _nus.yomi || (_nuw.tais += 1, _nuv = true), 'てんりゅう' != _nus.yomi && 'たつた' != _nus.yomi && 'ゆうばり' != _nus.yomi || (_nuw.houg += 1, _nuv = true), 488 == _nus.ship_id ? (_nuw.tyku += 4, _nuv = true) : 220 == _nus.ship_id ? (_nuw.tyku += 3, _nuv = true) : 23 == _nus.ship_id ? (_nuw.tyku += 2, _nuv = true) : 160 == _nus.ship_id || 487 == _nus.ship_id || 141 == _nus.ship_id ? (_nuw.tyku += 3, _nuv = true) : 224 == _nus.ship_id || 289 == _nus.ship_id || 219 == _nus.ship_id || 56 == _nus.ship_id || 113 == _nus.ship_id || 22 == _nus.ship_id ? (_nuw.tyku += 2, _nuv = true) : 651 == _nus.ship_id || 656 == _nus.ship_id ? (_nuw.tyku += 3, _nuw.houg += 3, _nuv = true) : 407 != _nus.ship_id && 665 != _nus.ship_id || (_nuw.houg += 2, _nuw.tyku += 2, _nuv = true, _nuu.houg += 1, _nuu.tyku += 1, _nuu.kaih += 2), 488 != _nus.ship_id && 160 != _nus.ship_id && 487 != _nus.ship_id && 141 != _nus.ship_id || (_nuw.tais += 1, _nuv = true), 477 != _nus.ship_id && 478 != _nus.ship_id && 624 != _nus.ship_id || (_nuw.tais += 2, _nuv = true), 477 != _nus.ship_id && 478 != _nus.ship_id && 624 != _nus.ship_id && 622 != _nus.ship_id || (_nuw.tyku += 2, _nuv = true), 652 != _nus.ship_id && 657 != _nus.ship_id || (_nuw.houg += 3, _nuv = true), 547 != _nus.ship_id && 146 != _nus.ship_id || (_nuu.houg += 2), 652 != _nus.ship_id && 657 != _nus.ship_id && 547 != _nus.ship_id && 146 != _nus.ship_id || (_nuu.tyku += 2), _nuv) {
                var _nux = _nus.get_slotnums(380);
                _nuu.add(_nuw.multiply(_nux));
            }
            var _nuy = new _nuq.SlotItemEffectModel(),
                _nuz = false,
                _nv0 = new _nuq.SlotItemEffectModel(),
                _nv1 = false,
                _nv2 = false;
            if (16 != _nus.stype && 3 != _nus.stype && 4 != _nus.stype && 21 != _nus.stype || (_nuy.houg += 2, _nuy.kaih += 1, _nuz = true), 101 == _nus.ctype && (_nuy.houg += 4, _nuy.kaih += 3, _nuz = true), 488 != _nus.ship_id && 487 != _nus.ship_id && 160 != _nus.ship_id && 141 != _nus.ship_id && 118 != _nus.ship_id && 119 != _nus.ship_id && 651 != _nus.ship_id && 656 != _nus.ship_id || (_nuy.houg += 1, _nuy.kaih += 2, _nuz = true), 652 == _nus.ship_id || 657 == _nus.ship_id || 547 == _nus.ship_id || 146 == _nus.ship_id ? (_nuy.houg += 1, _nuy.kaih += 3, _nuz = true) : 407 != _nus.ship_id && 665 != _nus.ship_id || (_nv2 = true, _nuz = true, _nuy.houg += 2, _nuy.kaih += 1, _nv1 = true, _nv0.houg += 1, _nv0.tyku += 2, _nv0.kaih += 1), _nuz || _nv2) {
                for (var _nv3 = 0, _nv4 = 0, _nv5 = 0, _nv6 = _nus.have_slot_ids(); _nv5 < _nv6.length; _nv5++) {
                    var _nv7 = _nv6[_nv5],
                        _nv8 = _nur.default.model.slot.getMst(_nv7),
                        _nv9 = _nv8.equipType;
                    12 == _nv9 || 13 == _nv9 ? _nv8.sakuteki >= 5 && (_nv3 += _nus.get_slotnums(parseInt(_nv7))) : 21 == _nv9 && (_nv4 += _nus.get_slotnums(parseInt(_nv7)));
                }
                _nuz && _nv3 > 0 && _nuu.add(_nuy), _nv1 && _nv4 > 0 && _nuu.add(_nv0);
            }
            return _nuu;
        };
    },
    44053: (_nva, _nvb, _nvc) => {
        'use strict';
        var _nvd = null;
        defineModule(_nvb);
        Object.defineProperty(_nvb, '__esModule', {
            'value': true
        }), _nvb.getSlot381PersonalEffect = void 0;
        var _nve = _nvc(74496);
        _nvb.getSlot381PersonalEffect = function(_nvf) {
            var _nvg = null,
                _nvh = new _nve.SlotItemEffectModel(),
                _nvi = false,
                _nvj = new _nve.SlotItemEffectModel(),
                _nvk = 0;
            if ('アメリカ' == _nvf.getCountryName() && (_nvj.houg += 1, 102 == _nvf.ctype && (_nvj.houg += 1), _nvi = true, _nvk = 1), 0 == _nvi) return _nvh;
            var _nvl = _nvf.get_slotnums(381);
            if (_nvh.add(_nvj.multiply(_nvl)), 0 == _nvk) return _nvh;
            var _nvm = _nvf.get_each_level_nums(381),
                _nvn = 0;
            return _nvm.map(function(_nvo, _nvp) {
                _nvp >= 6 && (_nvn += _nvo);
            }), 1 == _nvk && (_nvh.houg += 1 * _nvn), _nvh;
        };
    },
    65441: function(_nvq, _nvr, _nvs) {
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
            'value': true
        }), _nvr.getSlot382PersonalEffect = void 0;
        var _nvx = _nvs(74496),
            _nvy = _nvu(_nvs(18622));
        _nvr.getSlot382PersonalEffect = function(_nvz) {
            var _nw0 = null,
                _nw1 = new _nvx.SlotItemEffectModel(),
                _nw2 = false,
                _nw3 = new _nvx.SlotItemEffectModel(),
                _nw4 = false,
                _nw5 = new _nvx.SlotItemEffectModel(),
                _nw6 = new _nvx.SlotItemEffectModel(),
                _nw7 = {},
                _nw8 = 2,
                _nw9 = [];
            1 == _nvz.stype && (_nw3.tyku += 2, _nw3.kaih += 2, _nw3.tais += 1, _nw2 = true, _nw5.houg += 2, _nw5.kaih += 3, _nw6.tyku += 2, _nw6.kaih += 3, _nw4 = true, _nw8 = 1), 66 != _nvz.ctype && 28 != _nvz.ctype && 101 != _nvz.ctype || (_nw3.tyku += 2, _nw3.kaih += 1, _nw2 = true, _nw5.houg += 1, _nw5.kaih += 2, _nw6.tyku += 2, _nw6.kaih += 2, _nw4 = true, _nw8 = 1), 'ゆら' != _nvz.yomi && 'なか' != _nvz.yomi && 'きぬ' != _nvz.yomi || (_nw3.tyku += 1, _nw2 = true), 488 == _nvz.ship_id || 220 == _nvz.ship_id ? (_nw3.kaih += 1, _nw2 = true, 488 == _nvz.ship_id && (_nw5.houg += 1, _nw5.kaih += 1, _nw6.tyku += 2, _nw6.kaih += 2, _nw4 = true, _nw8 = 1)) : 160 == _nvz.ship_id || 224 == _nvz.ship_id ? (_nw3.kaih += 1, _nw2 = true, 160 == _nvz.ship_id && (_nw5.houg += 1, _nw5.kaih += 1, _nw6.tyku += 2, _nw6.kaih += 2, _nw4 = true)) : 487 == _nvz.ship_id || 289 == _nvz.ship_id ? (_nw3.kaih += 1, _nw2 = true, 487 == _nvz.ship_id && (_nw5.houg += 1, _nw5.kaih += 1, _nw6.tyku += 2, _nw6.kaih += 2, _nw4 = true)) : 656 == _nvz.ship_id ? (_nw3.tyku += 3, _nw3.kaih += 2, _nw2 = true, _nw5.houg += 2, _nw5.kaih += 2, _nw6.tyku += 3, _nw6.kaih += 2, _nw4 = true, _nw8 = 1) : 145 == _nvz.ship_id || 961 == _nvz.ship_id ? _nw8 = 1 : 979 == _nvz.ship_id && (_nw3.houg += 1, _nw3.tyku += 1, _nw3.houm += 1, _nw3.kaih += 1, _nw7[509] = new _nvx.SlotItemEffectModel(), _nw7[509].houm += 1, _nw2 = true, _nw9[1] = 1);
            for (var _nwa = 0, _nwb = 0, _nwc = 0, _nwd = _nvz.have_slot_ids(); _nwc < _nwd.length; _nwc++) {
                var _nwe = _nwd[_nwc],
                    _nwf = _nvy.default.model.slot.getMst(_nwe),
                    _nwg = _nwf.equipType;
                12 != _nwg && 13 != _nwg || (_nwf.sakuteki >= 5 && (_nwa += _nvz.get_slotnums(parseInt(_nwe))), _nwf.taiku >= 2 && (_nwb += _nvz.get_slotnums(parseInt(_nwe))));
            }
            for (var _nwh = [], _nwi = function(_nwj) {
                    var _nwk = null;
                    if (null == _nvz.have_slots_dict[_nwj]) return 'continue';
                    var _nwl = _nvz.get_each_level_nums(_nwj);
                    null == _nwh[_nwj] && (_nwh[_nwj] = []), _nwl.forEach(function(_nwm, _nwn) {
                        var _nwo = null;
                        for (var _nwp = 1; _nwp <= _nvz.SLOT_LEVEL_MAX; _nwp++) null == _nwh[_nwj][_nwp] && (_nwh[_nwj][_nwp] = 0), _nwn >= _nwp && (_nwh[_nwj][_nwp] += _nwm);
                    });
                }, _nwq = 0, _nwr = [509]; _nwq < _nwr.length; _nwq++) {
                _nwi(_nwr[_nwq]);
            }
            var _nws = 0,
                _nwt = 0,
                _nwu = 0,
                _nwv = 0,
                _nww = 0,
                _nwx = 0,
                _nwy = 0,
                _nwz = 0,
                _nx0 = 0,
                _nx1 = 0;
            null != _nwh[509] && (_nws = _nwh[509][1], _nwt = _nwh[509][2], _nwu = _nwh[509][3], _nwv = _nwh[509][4], _nww = _nwh[509][5], _nwx = _nwh[509][6], _nwy = _nwh[509][7], _nwz = _nwh[509][8], _nx0 = _nwh[509][9], _nx1 = _nwh[509][10], null != _nw9[1] && (_nwu >= 1 && (_nw1.kaih += 1 * _nwu), _nww >= 1 && (_nw1.houg += 1 * _nww), _nwy >= 1 && (_nw1.tyku += 2 * _nwy), _nx0 >= 1 && (_nw1.houm += 1 * _nx0), _nx1 >= 1 && (_nw1.houg += 1 * _nx1)), 1 == _nw8 ? (_nws >= 1 && (_nw1.tyku += 1 * _nws), _nwt >= 1 && (_nw1.kaih += 2 * _nwt), _nwv >= 1 && (_nw1.houg += 1 * _nwv), _nwx >= 1 && (_nw1.tyku += 1 * _nwx), _nwz >= 1 && (_nw1.houm += 1 * _nwz), _nx1 >= 1 && (_nw1.tyku += 1 * _nx1)) : 2 == _nw8 && (_nwt >= 1 && (_nw1.tyku += 1 * _nwt), _nwv >= 1 && (_nw1.kaih += 2 * _nwv), _nwx >= 1 && (_nw1.houg += 1 * _nwx), _nwz >= 1 && (_nw1.tyku += 1 * _nwz), _nx1 >= 1 && (_nw1.houm += 1 * _nx1)));
            var _nx2 = _nvz.get_slotnums(509),
                _nx3 = _nx2 + _nvz.get_slotnums(382);
            return _nw2 && (_nw1.add(_nw3.multiply(_nx3)), Object.keys(_nw7).forEach(function(_nx4) {
                var _nx5 = null,
                    _nx6 = parseInt(_nx4);
                if (null != _nvz.have_slots_dict[_nx6]) {
                    var _nx7 = _nvz.get_slotnums(_nx6);
                    _nw1.add(_nw7[_nx6].multiply(_nx7));
                }
            })), 3 != _nvz.stype && 21 != _nvz.stype && 4 != _nvz.stype || _nwt >= 1 && (_nwa > 0 && (_nw1.houg += 1, _nw1.kaih += 1), _nwb > 0 && (_nw1.tyku += 2, _nw1.kaih += 1)), 145 == _nvz.ship_id ? _nwt >= 1 && (_nwa > 0 && (_nw1.houg += 1, _nw1.tyku += 1, _nw1.kaih += 2), _nwb > 0 && (_nw1.tyku += 4, _nw1.kaih += 2)) : 961 != _nvz.ship_id && 979 != _nvz.ship_id || _nx2 > 0 && (_nwa > 0 && (_nw1.houg += 2, _nw1.tyku += 2, _nw1.kaih += 3), _nwb > 0 && (_nw1.houg += 1, _nw1.tyku += 5, _nw1.kaih += 3)), _nw4 && _nwa > 0 && _nw1.add(_nw5), _nw4 && _nwb > 0 && _nw1.add(_nw6), _nw1;
        };
    },
    33258: (_nx8, _nx9, _nxa) => {
        'use strict';
        var _nxb = null;
        defineModule(_nx9);
        Object.defineProperty(_nx9, '__esModule', {
            'value': true
        }), _nx9.getSlot383PersonalEffect = void 0;
        var _nxc = _nxa(74496);
        _nx9.getSlot383PersonalEffect = function(_nxd) {
            var _nxe = null,
                _nxf = new _nxc.SlotItemEffectModel(),
                _nxg = false,
                _nxh = new _nxc.SlotItemEffectModel(),
                _nxi = _nxd.get_each_level_over_nums([383]).slot[383];
            if (44 == _nxd.ctype && (_nxh.raig += 2, _nxg = true, _nxi[4] > 0 && (_nxf.raig += 1), _nxi[6] > 0 && (_nxf.houm += 1)), 'い58' == _nxd.yomi && (_nxh.raig += 1, _nxg = true), 636 == _nxd.ship_id ? (_nxh.raig += 3, _nxg = true) : 607 == _nxd.ship_id && (_nxh.raig += 4, _nxg = true), _nxi[8] > 0 && (_nxf.raig += 1), _nxi[10] > 0 && (_nxf.houm += 1), 'い58' != _nxd.yomi && 'い47' != _nxd.yomi || _nxi[5] > 0 && (_nxf.houm += 1), 0 == _nxg) return _nxf;
            var _nxj = _nxd.get_slotnums(383);
            return _nxf.add(_nxh.multiply(_nxj)), _nxf;
        };
    },
    92168: (_nxk, _nxl, _nxm) => {
        'use strict';
        var _nxn = null;
        defineModule(_nxl);
        Object.defineProperty(_nxl, '__esModule', {
            'value': true
        }), _nxl.getSlot384PersonalEffect = void 0;
        var _nxo = _nxm(74496);
        _nxl.getSlot384PersonalEffect = function(_nxp) {
            var _nxq = null,
                _nxr = new _nxo.SlotItemEffectModel(),
                _nxs = false,
                _nxt = new _nxo.SlotItemEffectModel();
            44 == _nxp.ctype && (_nxt.kaih += 3, _nxs = true), 'い58' == _nxp.yomi && (_nxt.kaih += 2, _nxs = true), 636 == _nxp.ship_id ? (_nxt.kaih += 3, _nxs = true) : 607 == _nxp.ship_id && (_nxt.kaih += 4, _nxs = true);
            var _nxu = _nxp.get_slotnums(384);
            _nxs && _nxr.add(_nxt.multiply(_nxu));
            var _nxv = _nxu,
                _nxw = _nxp.get_slotnums(213),
                _nxx = _nxp.get_slotnums(214),
                _nxy = _nxp.get_slotnums(383);
            return _nxv > 0 && _nxw + _nxx + _nxy > 0 && (_nxr.raig += 3, _nxr.kaih += 2), _nxr;
        };
    },
    85975: (_nxz, _ny0, _ny1) => {
        'use strict';
        var _ny2 = null;
        defineModule(_ny0);
        Object.defineProperty(_ny0, '__esModule', {
            'value': true
        }), _ny0.getSlot385PersonalEffect = void 0;
        var _ny3 = _ny1(74496);
        _ny0.getSlot385PersonalEffect = function(_ny4) {
            var _ny5 = null,
                _ny6 = new _ny3.SlotItemEffectModel(),
                _ny7 = false,
                _ny8 = new _ny3.SlotItemEffectModel(),
                _ny9 = 0;
            if ('アメリカ' == _ny4.getCountryName() && (_ny8.houg += 1, 102 == _ny4.ctype || 107 == _ny4.ctype ? (_ny8.houg += 1, _ny8.souk += 1) : 93 == _ny4.ctype && (_ny8.houg += 1), _ny7 = true, _ny9 = 1), 8 == _ny4.stype && (_ny8.houg += 1, _ny7 = true), 0 == _ny7) return _ny6;
            var _nya = _ny4.get_slotnums(385);
            if (_ny6.add(_ny8.multiply(_nya)), 0 == _ny9) return _ny6;
            var _nyb = _ny4.get_each_level_nums(385),
                _nyc = 0;
            return _nyb.forEach(function(_nyd, _nye) {
                _nye >= 6 && (_nyc += _nyd);
            }), 1 == _ny9 && (_ny6.houg += 1 * _nyc, _ny6.souk += 1 * _nyb[10]), _ny6;
        };
    },
    98467: (_nyf, _nyg, _nyh) => {
        'use strict';
        var _nyi = null;
        defineModule(_nyg);
        Object.defineProperty(_nyg, '__esModule', {
            'value': true
        }), _nyg.getSlot386PersonalEffect = void 0;
        var _nyj = _nyh(74496);
        _nyg.getSlot386PersonalEffect = function(_nyk) {
            var _nyl = null,
                _nym = new _nyj.SlotItemEffectModel(),
                _nyn = false,
                _nyo = new _nyj.SlotItemEffectModel(),
                _nyp = 0;
            if ('アメリカ' == _nyk.getCountryName() && (_nyo.houg += 1, _nyn = true, _nyp = 1), 0 == _nyn) return _nym;
            var _nyq = _nyk.get_slotnums(386);
            if (_nym.add(_nyo.multiply(_nyq)), 0 == _nyp) return _nym;
            var _nyr = _nyk.get_each_level_nums(386),
                _nys = 0,
                _nyt = 0;
            return _nyr.forEach(function(_nyu, _nyv) {
                _nyv >= 2 && (_nys += _nyu), _nyv >= 7 && (_nyt += _nyu);
            }), 1 == _nyp && (_nym.houg += 1 * _nys, _nym.houg += 1 * _nyt), _nym;
        };
    },
    88348: (_nyw, _nyx, _nyy) => {
        'use strict';
        var _nyz = null;
        defineModule(_nyx);
        Object.defineProperty(_nyx, '__esModule', {
            'value': true
        }), _nyx.getSlot387PersonalEffect = void 0;
        var _nz0 = _nyy(74496);
        _nyx.getSlot387PersonalEffect = function(_nz1) {
            var _nz2 = null,
                _nz3 = new _nz0.SlotItemEffectModel(),
                _nz4 = false,
                _nz5 = new _nz0.SlotItemEffectModel(),
                _nz6 = 0;
            if ('アメリカ' == _nz1.getCountryName() && (_nz5.houg += 1, _nz4 = true, _nz6 = 1), 0 == _nz4) return _nz3;
            var _nz7 = _nz1.get_slotnums(387);
            if (_nz3.add(_nz5.multiply(_nz7)), 0 == _nz6) return _nz3;
            var _nz8 = _nz1.get_each_level_nums(387),
                _nz9 = 0,
                _nza = 0;
            return _nz8.forEach(function(_nzb, _nzc) {
                _nzc >= 2 && (_nz9 += _nzb), _nzc >= 7 && (_nza += _nzb);
            }), 1 == _nz6 && (_nz3.houg += 1 * _nz9, _nz3.houg += 1 * _nza), _nz3;
        };
    },
    21097: (_nzd, _nze, _nzf) => {
        'use strict';
        var _nzg = null;
        defineModule(_nze);
        Object.defineProperty(_nze, '__esModule', {
            'value': true
        }), _nze.getSlot389PersonalEffect = void 0;
        var _nzh = _nzf(74496);
        _nze.getSlot389PersonalEffect = function(_nzi) {
            var _nzj = null,
                _nzk = new _nzh.SlotItemEffectModel(),
                _nzl = false,
                _nzm = new _nzh.SlotItemEffectModel();
            if (594 == _nzi.ship_id || 599 == _nzi.ship_id) _nzm.houg += 2, _nzm.kaih += 2, _nzl = true;
            else {
                if (698 == _nzi.ship_id || 610 == _nzi.ship_id) _nzm.houg += 3, _nzm.kaih += 2, _nzl = true;
                else 646 == _nzi.ship_id && (_nzm.houg += 4, _nzm.tais += 4, _nzm.kaih += 3, _nzl = true, _nzi.get_type3_nums(25) > 0 && (_nzk.houg += 3, _nzk.tais += 6), _nzi.get_slotnums(326) + _nzi.get_slotnums(327) > 0 && (_nzk.houg += 5, _nzk.tais += 4));
            }
            if ('アメリカ' == _nzi.getCountryName() && (_nzm.houg += 2, _nzm.tais += 3, _nzm.kaih += 1, _nzl = true), 0 == _nzl) return _nzk;
            var _nzn = _nzi.get_slotnums(389);
            return _nzk.add(_nzm.multiply(_nzn)), _nzk;
        };
    },
    43607: (_nzo, _nzp, _nzq) => {
        'use strict';
        var _nzr = null;
        defineModule(_nzp);
        Object.defineProperty(_nzp, '__esModule', {
            'value': true
        }), _nzp.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _nzs = _nzq(74496);
        _nzp.getSlot38cmFourBarrelGunPersonalEffect = function(_nzt) {
            var _nzu = null,
                _nzv = new _nzs.SlotItemEffectModel(),
                _nzw = _nzt.get_slotnums(245),
                _nzx = _nzt.get_slotnums(246),
                _nzy = _nzt.get_slotnums(468),
                _nzz = _nzw + _nzx + _nzy,
                _o00 = 0,
                _o01 = 0;
            if (79 != _nzt.ctype) return _nzv;
            _nzv.houg += 2 * _nzz, _nzv.houm += 1 * _nzz, _nzy >= 1 && (_nzv.houg += 1 * _nzy, _o01 = 1), _o00 = 1;
            var _o02 = _nzt.get_slotnums(247),
                _o03 = _nzt.get_slotnums(471) + _nzt.get_slotnums(538);
            if (1 == _o00 && _o02 >= 1 && (_nzv.kaih += 2 * _o02, _nzv.houg += 2 * _o02, _nzv.houm += 2 * _o02), 0 == _o01) return _nzv;
            var _o04 = _nzt.haveSlotLevelNumOver(468),
                _o05 = _nzt.haveSlotLevelNumOver(471),
                _o06 = _nzt.haveSlotLevelNumOver(538);
            if (1 == _o01 && _nzy > 0) {
                var _o07 = _o04[4],
                    _o08 = _o04[8],
                    _o09 = _o04[9],
                    _o0a = _o04[10],
                    _o0b = _o05[7],
                    _o0c = _o05[9];
                _o07 >= 1 && (_nzv.houg += 1 * _o07, _nzv.houm += 1 * _o07), _o08 >= 1 && (_nzv.houg += 1 * _o08, _nzv.houm += 1 * _o08), _o09 >= 1 && (_nzv.tyku += 1 * _o09, _o03 >= 1 && (_nzv.houm += 2 * _o03), _o02 >= 1 && (_nzv.kaih += 1 * _o02, _nzv.houm += 1 * _o02)), _o0a >= 1 && (_nzv.houm += 1 * _o0a, _o03 >= 1 && (_nzv.houm += 1 * _o03, _o06[7] >= 1 && (_nzv.houm += 1 * _o06[7]), _o06[8] >= 1 && (_nzv.kaih += 1 * _o06[8]), _o06[9] >= 1 && (_nzv.houm += 1 * _o06[9]), _o0b >= 1 && (_nzv.houm += 1 * _o0b), _o0c >= 1 && (_nzv.kaih += 1 * _o0c)), _o02 >= 1 && (_nzv.houg += 1 * _o02, _nzv.kaih += 1 * _o02, _nzv.houm += 1 * _o02));
            }
            return _nzv;
        };
    },
    2380: (_o0d, _o0e, _o0f) => {
        'use strict';
        var _o0g = null;
        defineModule(_o0e);
        Object.defineProperty(_o0e, '__esModule', {
            'value': true
        }), _o0e.getSlot38cmTwinGunPersonalEffect = void 0;
        var _o0h = _o0f(74496);
        _o0e.getSlot38cmTwinGunPersonalEffect = function(_o0i) {
            var _o0j = null,
                _o0k = new _o0h.SlotItemEffectModel(),
                _o0l = false,
                _o0m = new _o0h.SlotItemEffectModel(),
                _o0n = 0,
                _o0o = _o0i.get_slotnums(76),
                _o0p = _o0i.get_slotnums(114),
                _o0q = _o0i.get_slotnums(124);
            if ('ドイツ' == _o0i.getCountryName() && (_o0m.houg += 1, _o0l = true, _o0n = 1, _o0q >= 1 && (_o0k.kaih += 1 * _o0q)), 0 == _o0l) return _o0k;
            var _o0r = _o0o + _o0p;
            _o0k.add(_o0m.multiply(_o0r));
            var _o0s = _o0i.have_level_num_over_dict[114];
            return 1 == _o0n && null != _o0s && (_o0s[7] >= 1 && (_o0k.houg += 1 * _o0s[7]), _o0s[8] >= 1 && (_o0k.houm += 1 * _o0s[8]), _o0s[9] >= 1 && (_o0k.souk += 1 * _o0s[9]), _o0s[10] >= 1 && (_o0k.houg += 1 * _o0s[10])), _o0k;
        };
    },
    37273: (_o0t, _o0u, _o0v) => {
        'use strict';
        var _o0w = null;
        defineModule(_o0u);
        Object.defineProperty(_o0u, '__esModule', {
            'value': true
        }), _o0u.getSlot390PersonalEffect = void 0;
        var _o0x = _o0v(74496);
        _o0u.getSlot390PersonalEffect = function(_o0y) {
            var _o0z = null,
                _o10 = new _o0x.SlotItemEffectModel(),
                _o11 = false,
                _o12 = new _o0x.SlotItemEffectModel(),
                _o13 = 0;
            if ('アメリカ' == _o0y.getCountryName() && (_o12.houg += 1, _o11 = true, _o13 = 1), 102 == _o0y.ctype || 107 == _o0y.ctype ? (_o12.houg += 1, _o12.souk += 1, _o11 = true) : 93 == _o0y.ctype && (_o12.houg += 1, _o11 = true), 8 == _o0y.stype && (_o12.houg += 1, _o11 = true), 0 == _o11) return _o10;
            var _o14 = _o0y.get_slotnums(390);
            if (_o10.add(_o12.multiply(_o14)), 0 == _o13) return _o10;
            var _o15 = _o0y.get_each_level_nums(390),
                _o16 = 0,
                _o17 = 0;
            return _o15.forEach(function(_o18, _o19) {
                _o19 >= 3 && (_o16 += _o18), _o19 >= 6 && (_o17 += _o18);
            }), 1 == _o13 && (_o10.houg += 1 * _o16, _o10.kaih += 1 * _o17, _o10.souk += 1 * _o15[10]), _o10;
        };
    },
    72694: (_o1a, _o1b, _o1c) => {
        'use strict';
        var _o1d = null;
        defineModule(_o1b);
        Object.defineProperty(_o1b, '__esModule', {
            'value': true
        }), _o1b.getSlot391PersonalEffect = void 0;
        var _o1e = _o1c(74496);
        _o1b.getSlot391PersonalEffect = function(_o1f) {
            var _o1g = null,
                _o1h = new _o1e.SlotItemEffectModel(),
                _o1i = false,
                _o1j = new _o1e.SlotItemEffectModel();
            if ('しょうかく' == _o1f.yomi || 'ずいかく' == _o1f.yomi ? (_o1j.houg += 1, _o1i = true) : 'じゅんよう' != _o1f.yomi && 'ひよう' != _o1f.yomi || (_o1j.houg += 1, _o1i = true), 116 == _o1f.ship_id || 185 == _o1f.ship_id || 282 == _o1f.ship_id ? (_o1j.houg += 1, _o1i = true) : 117 == _o1f.ship_id || 318 == _o1f.ship_id || 883 == _o1f.ship_id || 888 == _o1f.ship_id ? (_o1j.houg += 1, _o1h.kaih += 1, _o1i = true) : 560 != _o1f.ship_id && 555 != _o1f.ship_id || (_o1j.houg += 1, _o1j.kaih += 1, _o1i = true), 0 == _o1i) return _o1h;
            var _o1k = _o1f.get_slotnums(391);
            return _o1h.add(_o1j.multiply(_o1k)), _o1h;
        };
    },
    62067: (_o1l, _o1m, _o1n) => {
        'use strict';
        var _o1o = null;
        defineModule(_o1m);
        Object.defineProperty(_o1m, '__esModule', {
            'value': true
        }), _o1m.getSlot392PersonalEffect = void 0;
        var _o1p = _o1n(74496);
        _o1m.getSlot392PersonalEffect = function(_o1q) {
            var _o1r = null,
                _o1s = new _o1p.SlotItemEffectModel(),
                _o1t = false,
                _o1u = new _o1p.SlotItemEffectModel();
            if ('しょうかく' == _o1q.yomi || 'ずいかく' == _o1q.yomi ? (_o1u.houg += 2, _o1u.kaih += 1, _o1t = true) : 'じゅんよう' != _o1q.yomi && 'ひよう' != _o1q.yomi || (_o1u.houg += 1, _o1u.kaih += 1, _o1t = true), 116 == _o1q.ship_id || 185 == _o1q.ship_id || 282 == _o1q.ship_id ? (_o1u.houg += 2, _o1u.kaih += 1, _o1t = true) : 117 == _o1q.ship_id || 318 == _o1q.ship_id || 883 == _o1q.ship_id || 888 == _o1q.ship_id ? (_o1u.houg += 2, _o1u.kaih += 2, _o1t = true) : 560 != _o1q.ship_id && 555 != _o1q.ship_id || (_o1u.houg += 3, _o1u.kaih += 2, _o1t = true), 0 == _o1t) return _o1s;
            var _o1v = _o1q.get_slotnums(392);
            return _o1s.add(_o1u.multiply(_o1v)), _o1s;
        };
    },
    87817: function(_o1w, _o1x, _o1y) {
        'use strict';
        var _o1z = null;
        var _o20 = this && this.__importDefault || function(_o21) {
            var _o22 = null;
            return _o21 && _o21.__esModule ? _o21 : {
                'default': _o21
            };
        };
        defineModule(_o1x);
        Object.defineProperty(_o1x, '__esModule', {
            'value': true
        }), _o1x.getSlot397PersonalEffect = void 0;
        var _o23 = _o1y(74496),
            _o24 = _o20(_o1y(18622));
        _o1x.getSlot397PersonalEffect = function(_o25) {
            var _o26 = null,
                _o27 = new _o23.SlotItemEffectModel(),
                _o28 = false,
                _o29 = new _o23.SlotItemEffectModel(),
                _o2a = 0,
                _o2b = 0,
                _o2c = false;
            if (651 == _o25.ship_id ? (_o29.houg += 5, _o29.tyku += 2, _o29.kaih += 1, _o28 = true, _o2c = true, _o2a = 1, _o2b = 1) : 656 == _o25.ship_id && (_o29.houg += 3, _o29.tyku += 1, _o29.kaih += 1, _o28 = true, _o2c = true, _o2a = 1), 0 == _o28) return _o27;
            var _o2d = _o25.get_slotnums(397);
            _o27.add(_o29.multiply(_o2d));
            var _o2e = 0,
                _o2f = _o25.get_each_level_nums(397),
                _o2g = 0;
            if (_o2c) {
                _o2f.forEach(function(_o2h, _o2i) {
                    _o2i >= 4 && (_o2g += _o2h);
                });
                for (var _o2j = 0, _o2k = _o25.have_slot_ids(); _o2j < _o2k.length; _o2j++) {
                    var _o2l = _o2k[_o2j],
                        _o2m = _o24.default.model.slot.getMst(_o2l),
                        _o2n = _o2m.equipType;
                    12 != _o2n && 13 != _o2n || (_o2m.sakuteki >= 5 && (_o2e += _o25.get_slotnums(parseInt(_o2l))), _o2m.taiku >= 2 && _o25.get_slotnums(parseInt(_o2l)));
                }
            }
            return 1 == _o2a && _o2e > 0 && (_o27.houg += 3, _o27.kaih += 3), 1 == _o2b && (_o27.houg += 4 * _o2g, _o27.kaih += 1 * _o2g), _o27;
        };
    },
    93526: function(_o2o, _o2p, _o2q) {
        'use strict';
        var _o2r = null;
        var _o2s = this && this.__importDefault || function(_o2t) {
            var _o2u = null;
            return _o2t && _o2t.__esModule ? _o2t : {
                'default': _o2t
            };
        };
        defineModule(_o2p);
        Object.defineProperty(_o2p, '__esModule', {
            'value': true
        }), _o2p.getSlot398PersonalEffect = void 0;
        var _o2v = _o2q(74496),
            _o2w = _o2s(_o2q(18622));
        _o2p.getSlot398PersonalEffect = function(_o2x) {
            var _o2y = null,
                _o2z = new _o2v.SlotItemEffectModel(),
                _o30 = false,
                _o31 = new _o2v.SlotItemEffectModel(),
                _o32 = 0,
                _o33 = 0,
                _o34 = false;
            if (651 == _o2x.ship_id ? (_o31.houg += 4, _o31.tyku += 4, _o31.kaih += 2, _o30 = true, _o34 = true, _o32 = 1, _o33 = 1) : 656 == _o2x.ship_id && (_o31.houg += 3, _o31.tyku += 2, _o31.kaih += 2, _o30 = true, _o34 = true, _o32 = 1, _o33 = 2), 0 == _o30) return _o2z;
            var _o35 = _o2x.get_slotnums(398);
            _o2z.add(_o31.multiply(_o35));
            var _o36 = 0,
                _o37 = 0,
                _o38 = _o2x.get_each_level_nums(398),
                _o39 = 0;
            if (_o34) {
                _o38.forEach(function(_o3a, _o3b) {
                    _o3b >= 4 && (_o39 += _o3a);
                });
                for (var _o3c = 0, _o3d = _o2x.have_slot_ids(); _o3c < _o3d.length; _o3c++) {
                    var _o3e = _o3d[_o3c],
                        _o3f = _o2w.default.model.slot.getMst(_o3e),
                        _o3g = _o3f.equipType;
                    12 != _o3g && 13 != _o3g || (_o3f.sakuteki >= 5 && (_o36 += _o2x.get_slotnums(parseInt(_o3e))), _o3f.taiku >= 2 && (_o37 += _o2x.get_slotnums(parseInt(_o3e))));
                }
            }
            return 1 == _o32 && (_o36 > 0 && (_o2z.houg += 3, _o2z.kaih += 3), _o37 > 0 && (_o2z.tyku += 3, _o2z.kaih += 3)), 1 == _o33 ? (_o2z.houg += 3 * _o39, _o2z.kaih += 2 * _o39) : 2 == _o33 && (_o2z.houg += 2 * _o39, _o2z.kaih += 1 * _o39), _o2z;
        };
    },
    33084: (_o3h, _o3i, _o3j) => {
        'use strict';
        var _o3k = null;
        defineModule(_o3i);
        Object.defineProperty(_o3i, '__esModule', {
            'value': true
        }), _o3i.getSlot399PersonalEffect = void 0;
        var _o3l = _o3j(74496);
        _o3i.getSlot399PersonalEffect = function(_o3m) {
            var _o3n = null,
                _o3o = new _o3l.SlotItemEffectModel(),
                _o3p = false,
                _o3q = new _o3l.SlotItemEffectModel(),
                _o3r = 0;
            if (108 == _o3m.ctype && (_o3q.houg += 1, _o3q.kaih += 2, _o3r = 1, _o3p = true), 0 == _o3p) return _o3o;
            var _o3s = _o3m.get_slotnums(399);
            if (_o3o.add(_o3q.multiply(_o3s)), 0 == _o3r) return _o3o;
            var _o3t = _o3m.get_each_level_nums(399),
                _o3u = 0,
                _o3v = 0;
            return _o3t.map(function(_o3w, _o3x) {
                _o3x >= 3 && (_o3u += _o3w), _o3x >= 5 && (_o3v += _o3w);
            }), 1 == _o3r && (_o3o.houg += 1 * _o3u, _o3o.houg += 1 * _o3v), _o3o;
        };
    },
    80225: (_o3y, _o3z, _o40) => {
        'use strict';
        var _o41 = null;
        defineModule(_o3z);
        Object.defineProperty(_o3z, '__esModule', {
            'value': true
        }), _o3z.getSlot3_122PersonalEffect = void 0;
        var _o42 = _o40(74496);
        _o3z.getSlot3_122PersonalEffect = function(_o43) {
            var _o44 = null,
                _o45 = new _o42.SlotItemEffectModel(),
                _o46 = false,
                _o47 = new _o42.SlotItemEffectModel(),
                _o48 = 0;
            if (54 == _o43.ctype && (_o47.houg += 1, _o47.tyku += 2, _o47.kaih += 1, _o46 = true, _o48 = 1, 968 == _o43.ship_id && (_o47.houg += 1, _o47.houm += 1, _o47.kaih += 1)), 0 == _o46) return _o45;
            var _o49 = _o43.get_slotnums(3) + _o43.get_slotnums(122) + _o43.get_slotnums(533);
            if (_o45.add(_o47.multiply(_o49)), 0 == _o48) return _o45;
            var _o4a = _o43.get_each_level_over_nums([122]).slot[122],
                _o4b = _o43.have_level_num_over_dict[533];
            return 1 == _o48 && (null != _o4a && (_o4a[6] >= 1 && (_o45.kaih += 1 * _o4a[6]), _o4a[7] >= 1 && (_o45.tyku += 1 * _o4a[7]), _o4a[8] >= 1 && (_o45.houm += 1 * _o4a[8]), _o4a[9] >= 1 && (_o45.kaih += 1 * _o4a[9]), _o4a[10] >= 1 && (_o45.houg += 1 * _o4a[10])), null != _o4b && (_o4b[2] >= 1 && (_o45.tyku += 1 * _o4b[2]), _o4b[4] >= 1 && (_o45.houg += 1 * _o4b[4]), _o4b[6] >= 1 && (_o45.houm += 1 * _o4b[6]), _o4b[8] >= 1 && (_o45.tyku += 1 * _o4b[8]), _o4b[10] >= 1 && (_o45.kaih += 1 * _o4b[10])), 968 == _o43.ship_id && null != _o4b && (_o4b[1] >= 1 && (_o45.kaih += 1 * _o4b[1]), _o4b[3] >= 1 && (_o45.tyku += 1 * _o4b[3]), _o4b[5] >= 1 && (_o45.houm += 1 * _o4b[5]), _o4b[7] >= 1 && (_o45.kaih += 1 * _o4b[7]), _o4b[9] >= 1 && (_o45.houg += 1 * _o4b[9]))), _o45;
        };
    },
    97831: (_o4c, _o4d, _o4e) => {
        'use strict';
        var _o4f = null;
        defineModule(_o4d);
        Object.defineProperty(_o4d, '__esModule', {
            'value': true
        }), _o4d.getSlot400PersonalEffect = void 0;
        var _o4g = _o4e(74496);
        _o4d.getSlot400PersonalEffect = function(_o4h) {
            var _o4i = null,
                _o4j = new _o4g.SlotItemEffectModel(),
                _o4k = false,
                _o4l = new _o4g.SlotItemEffectModel(),
                _o4m = 0,
                _o4n = false;
            if (147 != _o4h.ship_id && 73 != _o4h.ctype && 81 != _o4h.ctype || (_o4n = true), _o4n && (_o4l.kaih += 2, _o4l.raig += 5, _o4l.houg += 1, _o4l.souk += 1, _o4k = true, _o4m = 1), 0 == _o4k) return _o4j;
            var _o4o = _o4h.get_slotnums(400);
            return _o4j.add(_o4l.multiply(_o4o)), _o4h.get_slotnums(282) > 0 && 1 == _o4m && (_o4j.houg += 2), _o4j;
        };
    },
    4050: function(_o4p, _o4q, _o4r) {
        'use strict';
        var _o4s = null;
        var _o4t = this && this.__importDefault || function(_o4u) {
            var _o4v = null;
            return _o4u && _o4u.__esModule ? _o4u : {
                'default': _o4u
            };
        };
        defineModule(_o4q);
        Object.defineProperty(_o4q, '__esModule', {
            'value': true
        }), _o4q.getSlot407PersonalEffect = void 0;
        var _o4w = _o4r(74496),
            _o4x = _o4t(_o4r(18622));
        _o4q.getSlot407PersonalEffect = function(_o4y) {
            var _o4z = null,
                _o50 = new _o4w.SlotItemEffectModel(),
                _o51 = false,
                _o52 = new _o4w.SlotItemEffectModel(),
                _o53 = 0;
            if (662 != _o4y.ship_id && 663 != _o4y.ship_id && 668 != _o4y.ship_id || (_o52.houg += 4, _o52.tyku += 2, _o52.kaih += 1, _o51 = true, _o53 = 1), 0 == _o51) return _o50;
            var _o54 = _o4y.get_slotnums(407);
            _o50.add(_o52.multiply(_o54));
            for (var _o55 = 0, _o56 = 0, _o57 = 0, _o58 = _o4y.have_slot_ids(); _o57 < _o58.length; _o57++) {
                var _o59 = _o58[_o57],
                    _o5a = _o4x.default.model.slot.getMst(_o59),
                    _o5b = _o5a.equipType;
                12 != _o5b && 13 != _o5b || (_o5a.sakuteki >= 5 && (_o55 += _o4y.get_slotnums(parseInt(_o59))), _o5a.taiku >= 2 && (_o56 += _o4y.get_slotnums(parseInt(_o59))));
            }
            return _o55 >= 1 && 1 == _o53 && (_o50.houg += 2, _o50.kaih += 2, _o50.raig += 2), _o56 >= 1 && 1 == _o53 && (_o50.tyku += 2, _o50.kaih += 3), _o50;
        };
    },
    78466: (_o5c, _o5d, _o5e) => {
        'use strict';
        var _o5f = null;
        defineModule(_o5d);
        Object.defineProperty(_o5d, '__esModule', {
            'value': true
        }), _o5d.getSlot408PersonalEffect = void 0;
        var _o5g = _o5e(74496);
        _o5d.getSlot408PersonalEffect = function(_o5h) {
            var _o5i = null,
                _o5j = new _o5g.SlotItemEffectModel(),
                _o5k = false,
                _o5l = new _o5g.SlotItemEffectModel();
            if ('しんしゅうまる' == _o5h.yomi ? (_o5l.houg += 2, _o5l.saku += 2, _o5l.kaih += 2, _o5k = true) : 'あきつまる' == _o5h.yomi && (_o5l.houg += 1, _o5l.saku += 1, _o5l.kaih += 1, _o5l.tais += 1, _o5k = true), 2 == _o5h.stype && (_o5l.houg += 1, _o5l.saku += 1, _o5l.kaih -= 5, _o5k = true), 0 == _o5k) return _o5j;
            var _o5m = _o5h.get_slotnums(408);
            return _o5j.add(_o5l.multiply(_o5m)), _o5j;
        };
    },
    40061: (_o5n, _o5o, _o5p) => {
        'use strict';
        var _o5q = null;
        defineModule(_o5o);
        Object.defineProperty(_o5o, '__esModule', {
            'value': true
        }), _o5o.getSlot409PersonalEffect = void 0;
        var _o5r = _o5p(74496);
        _o5o.getSlot409PersonalEffect = function(_o5s) {
            var _o5t = null,
                _o5u = new _o5r.SlotItemEffectModel(),
                _o5v = false,
                _o5w = new _o5r.SlotItemEffectModel();
            if ('しんしゅうまる' == _o5s.yomi ? (_o5w.houg += 1, _o5w.tyku += 2, _o5w.kaih += 3, _o5v = true) : 'あきつまる' == _o5s.yomi && (_o5w.houg += 1, _o5w.tyku += 1, _o5w.kaih += 2, _o5w.tais += 1, _o5v = true), 0 == _o5v) return _o5u;
            var _o5x = _o5s.get_slotnums(409);
            return _o5u.add(_o5w.multiply(_o5x)), _o5u;
        };
    },
    79988: (_o5y, _o5z, _o60) => {
        'use strict';
        var _o61 = null;
        defineModule(_o5z);
        Object.defineProperty(_o5z, '__esModule', {
            'value': true
        }), _o5z.getSlot411PersonalEffect = void 0;
        var _o62 = _o60(74496);
        _o5z.getSlot411PersonalEffect = function(_o63) {
            var _o64 = null,
                _o65 = new _o62.SlotItemEffectModel(),
                _o66 = new _o62.SlotItemEffectModel(),
                _o67 = false,
                _o68 = 0;
            if (2 == _o63.stype && (_o66.kaih -= 9, _o67 = true), 3 != _o63.stype && 4 != _o63.stype || (_o66.kaih -= 7, _o67 = true), 21 == _o63.stype && (_o66.kaih -= 6, _o67 = true), 5 != _o63.stype && 6 != _o63.stype || (_o66.kaih -= 5, _o67 = true), 593 == _o63.ship_id && (_o65.houg += 1, _o65.tyku += 2, _o65.kaih += 3), 151 == _o63.ship_id || 411 == _o63.ship_id || 412 == _o63.ship_id || 593 == _o63.ship_id || 954 == _o63.ship_id ? (_o65.houg += 3, _o65.tyku += 4, _o68 = 1) : 541 != _o63.ship_id && 573 != _o63.ship_id && 553 != _o63.ship_id && 554 != _o63.ship_id || (_o65.houg += 2, _o65.tyku += 2, _o68 = 1), _o67) {
                var _o69 = _o63.get_slotnums(411);
                _o65.add(_o66.multiply(_o69));
            }
            if (0 == _o68) return _o65;
            var _o6a = _o63.get_each_level_nums(411),
                _o6b = 0;
            return _o68 > 0 && _o6a.forEach(function(_o6c, _o6d) {
                _o6d >= 4 && (_o6b += _o6c);
            }), 1 == _o68 && (_o6b >= 1 && (_o65.houg += 1, _o65.tyku += 1), _o6a[10] >= 1 && (_o65.houg += 1, _o65.tyku += 1)), _o65;
        };
    },
    74428: (_o6e, _o6f, _o6g) => {
        'use strict';
        var _o6h = null;
        defineModule(_o6f);
        Object.defineProperty(_o6f, '__esModule', {
            'value': true
        }), _o6f.getSlot412PersonalEffect = void 0;
        var _o6i = _o6g(74496);
        _o6f.getSlot412PersonalEffect = function(_o6j) {
            var _o6k = null,
                _o6l = new _o6i.SlotItemEffectModel(),
                _o6m = false,
                _o6n = 0,
                _o6o = new _o6i.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o6j.ctype) >= 0 ? (_o6l.houg += 2, _o6l.raig += 4, _o6l.tais += 2, _o6o.kaih += 3, _o6o.saku += 1, _o6m = true, _o6n = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o6j.ctype) >= 0 ? (_o6l.houg += 3, _o6l.raig += 3, _o6o.kaih += 2, _o6o.saku += 3, _o6m = true, _o6n = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o6j.ctype) >= 0 && (_o6l.houg += 1, _o6o.kaih += 1, _o6o.saku += 1, _o6m = true), 0 == _o6m) return _o6l;
            var _o6p = _o6j.get_slotnums(412);
            if (_o6l.add(_o6o.multiply(_o6p)), 0 == _o6n) return _o6l;
            var _o6q = _o6j.get_each_level_nums(412),
                _o6r = 0,
                _o6s = 0;
            return _o6n > 0 && _o6q.forEach(function(_o6t, _o6u) {
                _o6u >= 4 && (_o6r += _o6t), _o6u >= 8 && (_o6s += _o6t);
            }), 1 == _o6n && (_o6r > 0 && (_o6l.houg += 1), _o6s > 0 && (_o6l.raig += 1)), _o6l;
        };
    },
    2631: (_o6v, _o6w, _o6x) => {
        'use strict';
        var _o6y = null;
        defineModule(_o6w);
        Object.defineProperty(_o6w, '__esModule', {
            'value': true
        }), _o6w.getSlot413PersonalEffect = void 0;
        var _o6z = _o6x(74496);
        _o6w.getSlot413PersonalEffect = function(_o70) {
            var _o71 = null,
                _o72 = new _o6z.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o70.ctype) >= 0 ? (_o72.houg += 2, _o72.raig += 2, _o72.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o70.ctype) >= 0 && (_o72.houg += 4, _o72.raig += 2, _o72.kaih += 2), 38 == _o70.ctype || 54 == _o70.ctype ? (_o72.houg += 2, _o72.raig += 3, _o72.kaih += 3) : 4 == _o70.ctype || 20 == _o70.ctype || 16 == _o70.ctype || 41 == _o70.ctype || 52 == _o70.ctype ? (_o72.houg += 1, _o72.raig += 2, _o72.kaih += 2) : 21 != _o70.ctype && 34 != _o70.ctype || (_o72.tyku += 2, _o72.raig += 1, _o72.kaih += 1), 'なか' == _o70.yomi || 'ゆら' == _o70.yomi || 'やはぎ' == _o70.yomi || 'のしろ' == _o70.yomi || 'はまなみ' == _o70.yomi || 'しまかぜ' == _o70.yomi || 'きよしも' == _o70.yomi || 'はつしも' == _o70.yomi ? (_o72.tyku += 1, _o72.kaih += 1) : 'じんつう' != _o70.yomi && 'せんだい' != _o70.yomi && 'ながなみ' != _o70.yomi && 'はつしも' != _o70.yomi && 'てるづき' != _o70.yomi || (_o72.houg += 1, _o72.raig += 1), 543 == _o70.ship_id ? (_o72.houg += 1, _o72.kaih += 1) : 159 == _o70.ship_id && (_o72.houg += 2), _o72;
        };
    },
    16498: (_o73, _o74, _o75) => {
        'use strict';
        var _o76 = null;
        defineModule(_o74);
        Object.defineProperty(_o74, '__esModule', {
            'value': true
        }), _o74.getSlot414PersonalEffect = void 0;
        var _o77 = _o75(74496);
        _o74.getSlot414PersonalEffect = function(_o78) {
            var _o79 = null,
                _o7a = new _o77.SlotItemEffectModel(),
                _o7b = 0;
            if ('アメリカ' == _o78.getCountryName() && (_o7a.saku += 1, _o7b = 1), 95 != _o78.ctype && 99 != _o78.ctype && 106 != _o78.ctype && 110 != _o78.ctype && 121 != _o78.ctype || (_o7a.houg += 1, _o7a.saku += 1, _o7b = 2), 0 == _o7b) return _o7a;
            var _o7c = _o78.get_each_level_nums(414),
                _o7d = 0,
                _o7e = 0,
                _o7f = 0;
            return _o7b > 0 && _o7c.forEach(function(_o7g, _o7h) {
                _o7h >= 5 && (_o7d += _o7g), _o7h >= 3 && (_o7e += _o7g), _o7h >= 8 && (_o7f += _o7g);
            }), _o7b > 0 && _o7d >= 1 && (_o7a.kaih += 1), 2 == _o7b && (_o7e >= 1 && (_o7a.saku += 1), _o7f >= 1 && (_o7a.kaih += 1), _o7c[10] >= 1 && (_o7a.houg += 1)), _o7a;
        };
    },
    27177: (_o7i, _o7j, _o7k) => {
        'use strict';
        var _o7l = null;
        defineModule(_o7j);
        Object.defineProperty(_o7j, '__esModule', {
            'value': true
        }), _o7j.getSlot415PersonalEffect = void 0;
        var _o7m = _o7k(74496);
        _o7j.getSlot415PersonalEffect = function(_o7n) {
            var _o7o = null,
                _o7p = new _o7m.SlotItemEffectModel(),
                _o7q = [];
            if ('アメリカ' == _o7n.getCountryName() && (_o7p.saku += 1, _o7p.tais += 1, _o7q.push(1)), 95 != _o7n.ctype && 99 != _o7n.ctype && 106 != _o7n.ctype && 110 != _o7n.ctype && 121 != _o7n.ctype || (_o7p.houg += 1, _o7q.push(2)), 0 == _o7q.length) return _o7p;
            var _o7r = _o7n.get_each_level_nums(415),
                _o7s = 0,
                _o7t = 0,
                _o7u = 0;
            return _o7q.length > 0 && (_o7r.forEach(function(_o7v, _o7w) {
                _o7w >= 5 && (_o7s += _o7v), _o7w >= 3 && (_o7t += _o7v), _o7w >= 8 && (_o7u += _o7v);
            }), _o7q.forEach(function(_o7x) {
                var _o7y = null;
                1 == _o7x ? _o7s >= 1 && (_o7p.kaih += 1) : 2 == _o7x && (_o7t >= 1 && (_o7p.kaih += 1), _o7u >= 1 && (_o7p.houg += 1));
            })), _o7p;
        };
    },
    53908: (_o7z, _o80, _o81) => {
        'use strict';
        var _o82 = null;
        defineModule(_o80);
        Object.defineProperty(_o80, '__esModule', {
            'value': true
        }), _o80.getSlot419PersonalEffect = void 0;
        var _o83 = _o81(74496);
        _o80.getSlot419PersonalEffect = function(_o84) {
            var _o85 = null,
                _o86 = new _o83.SlotItemEffectModel(),
                _o87 = false,
                _o88 = new _o83.SlotItemEffectModel(),
                _o89 = 0;
            if ('アメリカ' == _o84.getCountryName() && (_o88.houg += 2, _o87 = true, _o89 = 1), 0 == _o87) return _o86;
            var _o8a = _o84.get_slotnums(419);
            if (_o86.add(_o88.multiply(_o8a)), 0 == _o89) return _o86;
            var _o8b = _o84.get_each_level_nums(419),
                _o8c = 0,
                _o8d = 0;
            return _o89 > 0 && _o8b.forEach(function(_o8e, _o8f) {
                _o8f >= 2 && (_o8c += _o8e), _o8f >= 7 && (_o8d += _o8e);
            }), 1 == _o89 && (_o8c >= 1 && (_o86.houg += 1 * _o8c), _o8d >= 1 && (_o86.houg += 1 * _o8d)), _o86;
        };
    },
    79813: (_o8g, _o8h, _o8i) => {
        'use strict';
        var _o8j = null;
        defineModule(_o8h);
        Object.defineProperty(_o8h, '__esModule', {
            'value': true
        }), _o8h.getSlot420PersonalEffect = void 0;
        var _o8k = _o8i(74496);
        _o8h.getSlot420PersonalEffect = function(_o8l) {
            var _o8m = null,
                _o8n = new _o8k.SlotItemEffectModel(),
                _o8o = false,
                _o8p = new _o8k.SlotItemEffectModel(),
                _o8q = 0,
                _o8r = _o8l.getCountryName();
            if ('アメリカ' != _o8r && 67 != _o8l.ctype && 78 != _o8l.ctype && 82 != _o8l.ctype && 88 != _o8l.ctype && 108 != _o8l.ctype && 112 != _o8l.ctype || (_o8p.houg += 1, _o8q = 1, _o8o = true), 84 == _o8l.ctype ? (_o8p.houg += 1, _o8o = true) : 78 == _o8l.ctype && (_o8p.houg -= 1, _o8o = true), 7 == _o8l.stype && (_o8p.houg -= 2, _o8p.kaih -= 1, _o8p.souk -= 2, _o8o = true), 0 == _o8o) return _o8n;
            var _o8s = _o8l.get_slotnums(420);
            if (_o8n.add(_o8p.multiply(_o8s)), 0 == _o8q) return _o8n;
            var _o8t = _o8l.get_each_level_nums(420),
                _o8u = 0,
                _o8v = 0,
                _o8w = 0,
                _o8x = 0;
            _o8q > 0 && _o8t.forEach(function(_o8y, _o8z) {
                _o8z >= 3 && (_o8u += _o8y), _o8z >= 7 && (_o8v += _o8y), _o8z >= 8 && (_o8w += _o8y), _o8z >= 9 && (_o8x += _o8y);
            });
            var _o90 = _o8t[10];
            return 1 == _o8q && (_o8u >= 1 && (_o8n.houg += 1 * _o8u), 'アメリカ' == _o8r && (_o8v >= 1 && (_o8n.houm += 1 * _o8v), _o8w >= 1 && (_o8n.houg += 1 * _o8w), _o8x >= 1 && (_o8n.houm += 1 * _o8x), _o90 >= 1 && (_o8n.houg += 1 * _o90))), _o8n;
        };
    },
    16088: (_o91, _o92, _o93) => {
        'use strict';
        var _o94 = null;
        defineModule(_o92);
        Object.defineProperty(_o92, '__esModule', {
            'value': true
        }), _o92.getSlot421PersonalEffect = void 0;
        var _o95 = _o93(74496);
        _o92.getSlot421PersonalEffect = function(_o96) {
            var _o97 = null,
                _o98 = new _o95.SlotItemEffectModel(),
                _o99 = false,
                _o9a = new _o95.SlotItemEffectModel(),
                _o9b = 0,
                _o9c = _o96.getCountryName();
            if ('アメリカ' != _o9c && 67 != _o96.ctype && 78 != _o96.ctype && 82 != _o96.ctype && 88 != _o96.ctype && 108 != _o96.ctype && 112 != _o96.ctype || (_o9a.houg += 2, _o99 = true, _o9b = 1), 84 == _o96.ctype ? (_o9a.houg += 1, _o99 = true) : 78 == _o96.ctype && (_o9a.houg -= 1, _o99 = true), 7 == _o96.stype && (_o9a.houg -= 2, _o9a.kaih -= 1, _o9a.souk -= 2, _o99 = true), 0 == _o99) return _o98;
            var _o9d = _o96.get_slotnums(421);
            if (_o98.add(_o9a.multiply(_o9d)), 0 == _o9b) return _o98;
            var _o9e = _o96.get_each_level_nums(421),
                _o9f = 0,
                _o9g = 0,
                _o9h = 0,
                _o9i = 0,
                _o9j = 0;
            _o9b > 0 && _o9e.forEach(function(_o9k, _o9l) {
                _o9l >= 5 && (_o9f += _o9k), _o9l >= 6 && (_o9g += _o9k), _o9l >= 7 && (_o9h += _o9k), _o9l >= 8 && (_o9i += _o9k), _o9l >= 9 && (_o9j += _o9k);
            });
            var _o9m = _o9e[10];
            return 1 == _o9b && (_o9f >= 1 && (_o98.houg += 1 * _o9f), 'アメリカ' == _o9c && (_o9g >= 1 && (_o98.houm += 1 * _o9g), _o9h >= 1 && (_o98.houg += 1 * _o9h), _o9i >= 1 && (_o98.houm += 1 * _o9i), _o9j >= 1 && (_o98.houg += 1 * _o9j), _o9m >= 1 && (_o98.houm += 1 * _o9m))), _o98;
        };
    },
    69939: (_o9n, _o9o, _o9p) => {
        'use strict';
        var _o9q = null;
        defineModule(_o9o);
        Object.defineProperty(_o9o, '__esModule', {
            'value': true
        }), _o9o.getSlot422PersonalEffect = void 0;
        var _o9r = _o9p(74496);
        _o9o.getSlot422PersonalEffect = function(_o9s) {
            var _o9t = null,
                _o9u = new _o9r.SlotItemEffectModel(),
                _o9v = false,
                _o9w = new _o9r.SlotItemEffectModel();
            if ('アメリカ' != _o9s.getCountryName() && 67 != _o9s.ctype && 78 != _o9s.ctype && 82 != _o9s.ctype && 88 != _o9s.ctype && 108 != _o9s.ctype && 112 != _o9s.ctype || (_o9w.houg += 1, _o9w.kaih += 1, _o9v = true), 84 == _o9s.ctype && (_o9w.houg += 1, _o9w.tyku += 1, _o9v = true), 707 == _o9s.ship_id && (_o9w.houg += 2, _o9w.kaih += 2, _o9w.tyku += 2, _o9v = true), 0 == _o9v) return _o9u;
            var _o9x = _o9s.get_slotnums(422);
            return _o9u.add(_o9w.multiply(_o9x)), _o9u;
        };
    },
    33734: (_o9y, _o9z, _oa0) => {
        'use strict';
        var _oa1 = null;
        defineModule(_o9z);
        Object.defineProperty(_o9z, '__esModule', {
            'value': true
        }), _o9z.getSlot423PersonalEffect = void 0;
        var _oa2 = _oa0(74496);
        _o9z.getSlot423PersonalEffect = function(_oa3) {
            var _oa4 = null,
                _oa5 = new _oa2.SlotItemEffectModel(),
                _oa6 = false,
                _oa7 = new _oa2.SlotItemEffectModel();
            78 != _oa3.ctype && 112 != _oa3.ctype || (_oa7.houg += 2, _oa7.tyku += 2, _oa7.kaih += 2, _oa7.saku += 2, _oa6 = true);
            var _oa8 = _oa3.getCountryName();
            if (67 == _oa3.ctype || 78 == _oa3.ctype || 82 == _oa3.ctype || 88 == _oa3.ctype || 108 == _oa3.ctype || 112 == _oa3.ctype ? (_oa7.houg += 2, _oa7.tyku += 2, _oa7.kaih += 2, _oa7.saku += 2, _oa6 = true) : 'アメリカ' == _oa8 && (_oa7.houg += 1, _oa7.tyku += 1, _oa7.kaih += 1, _oa7.saku += 1, _oa6 = true), 0 == _oa6) return _oa5;
            var _oa9 = _oa3.get_slotnums(423);
            return _oa5.add(_oa7.multiply(_oa9)), _oa5;
        };
    },
    34432: (_oaa, _oab, _oac) => {
        'use strict';
        var _oad = null;
        defineModule(_oab);
        Object.defineProperty(_oab, '__esModule', {
            'value': true
        }), _oab.getSlot424PersonalEffect = void 0;
        var _oae = _oac(74496);
        _oab.getSlot424PersonalEffect = function(_oaf) {
            var _oag = null,
                _oah = new _oae.SlotItemEffectModel(),
                _oai = false,
                _oaj = new _oae.SlotItemEffectModel(),
                _oak = 0;
            67 != _oaf.ctype && 78 != _oaf.ctype && 82 != _oaf.ctype && 88 != _oaf.ctype && 108 != _oaf.ctype && 112 != _oaf.ctype || (_oaj.houg += 2, _oaj.raig += 3, _oai = true, _oak = 1);
            var _oal = _oaf.get_slotnums(424);
            _oai && _oah.add(_oaj.multiply(_oal));
            var _oam = _oaf.get_each_level_nums(424),
                _oan = 0,
                _oao = 0,
                _oap = 0;
            _oam.forEach(function(_oaq, _oar) {
                _oar >= 2 && (_oan += _oaq), _oar >= 6 && (_oao += _oaq), _oar >= 8 && (_oap += _oaq);
            });
            var _oas = _oam[10];
            return 1 == _oak && (_oan >= 1 && (_oah.houg += 1 * _oan), _oao >= 1 && (_oah.houg += 1 * _oao), _oap >= 1 && (_oah.houm += 1 * _oap)), _oas > 0 && (_oah.houm += 1 * _oas), _oah;
        };
    },
    97423: (_oat, _oau, _oav) => {
        'use strict';
        var _oaw = null;
        defineModule(_oau);
        Object.defineProperty(_oau, '__esModule', {
            'value': true
        }), _oau.getSlot425PersonalEffect = void 0;
        var _oax = _oav(74496);
        _oau.getSlot425PersonalEffect = function(_oay) {
            var _oaz = null,
                _ob0 = new _oax.SlotItemEffectModel(),
                _ob1 = false,
                _ob2 = new _oax.SlotItemEffectModel(),
                _ob3 = 0;
            67 != _oay.ctype && 78 != _oay.ctype && 82 != _oay.ctype && 88 != _oay.ctype && 108 != _oay.ctype && 112 != _oay.ctype || (_ob2.houg += 2, _ob2.tais += 2, _ob2.raig += 1, _ob2.saku += 1, _ob1 = true, _ob3 = 1);
            var _ob4 = _oay.get_slotnums(425);
            _ob1 && _ob0.add(_ob2.multiply(_ob4));
            var _ob5 = _oay.get_each_level_nums(425),
                _ob6 = 0,
                _ob7 = 0,
                _ob8 = 0,
                _ob9 = 0,
                _oba = 0,
                _obb = 0;
            _ob5.forEach(function(_obc, _obd) {
                _obd >= 2 && (_ob6 += _obc), _obd >= 4 && (_ob7 += _obc), _obd >= 6 && (_ob8 += _obc), _obd >= 7 && (_ob9 += _obc), _obd >= 8 && (_oba += _obc), _obd >= 9 && (_obb += _obc);
            });
            var _obe = _ob5[10];
            return 1 == _ob3 && (_ob6 >= 1 && (_ob0.tais += 1 * _ob6), _ob7 >= 1 && (_ob0.houg += 1 * _ob7), _ob8 >= 1 && (_ob0.tais += 1 * _ob8), _ob9 >= 1 && (_ob0.houm += 1 * _ob9), _oba >= 1 && (_ob0.raig += 1 * _oba), _obb >= 1 && (_ob0.houg += 1 * _obb), _obe >= 1 && (_ob0.tais += 1 * _obe)), _ob9 >= 1 && (_ob0.houg += 1 * _ob9), _oba >= 1 && (_ob0.tais += 1 * _oba), _obb >= 1 && (_ob0.houm += 1 * _obb), _obe >= 1 && (_ob0.houm += 1 * _obe), _ob0;
        };
    },
    23551: (_obf, _obg, _obh) => {
        'use strict';
        var _obi = null;
        defineModule(_obg);
        Object.defineProperty(_obg, '__esModule', {
            'value': true
        }), _obg.getSlot430PersonalEffect = void 0;
        var _obj = _obh(74496);
        _obg.getSlot430PersonalEffect = function(_obk) {
            var _obl = null,
                _obm = new _obj.SlotItemEffectModel(),
                _obn = false,
                _obo = new _obj.SlotItemEffectModel(),
                _obp = 0;
            if (113 == _obk.ctype && (_obo.tyku += 1, _obo.kaih += 1, _obn = true), 58 != _obk.ctype && 61 != _obk.ctype && 64 != _obk.ctype && 68 != _obk.ctype && 80 != _obk.ctype && 92 != _obk.ctype && 113 != _obk.ctype && 124 != _obk.ctype || (_obo.tyku += 2, _obo.kaih += 1, _obn = true, _obp = 1), 0 == _obn) return _obm;
            var _obq = _obk.get_slotnums(430);
            if (_obm.add(_obo.multiply(_obq)), 0 == _obp) return _obm;
            var _obr = _obk.get_each_level_nums(430),
                _obs = 0,
                _obt = 0,
                _obu = 0;
            if (_obp > 0 && _obr.forEach(function(_obv, _obw) {
                    _obw >= 2 && (_obs += _obv), _obw >= 4 && (_obt += _obv), _obw >= 7 && (_obu += _obv);
                }), 1 == _obp) {
                _obs >= 1 && (_obm.kaih += 1 * _obs), _obt >= 1 && (_obm.tyku += 1 * _obt), _obu >= 1 && (_obm.kaih += 1 * _obu);
                var _obx = _obr[10];
                _obx >= 1 && (_obm.tyku += 1 * _obx);
            }
            return _obm;
        };
    },
    6173: (_oby, _obz, _oc0) => {
        'use strict';
        var _oc1 = null;
        defineModule(_obz);
        Object.defineProperty(_obz, '__esModule', {
            'value': true
        }), _obz.getSlot437PersonalEffect = void 0;
        var _oc2 = _oc0(74496);
        _obz.getSlot437PersonalEffect = function(_oc3) {
            var _oc4 = null,
                _oc5 = new _oc2.SlotItemEffectModel(),
                _oc6 = false,
                _oc7 = new _oc2.SlotItemEffectModel();
            if (285 == _oc3.ship_id ? (_oc7.houg += 3, _oc7.tyku += 3, _oc7.kaih += 4, _oc6 = true) : 894 == _oc3.ship_id || 899 == _oc3.ship_id ? (_oc7.houg += 4, _oc7.tyku += 4, _oc7.kaih += 4, _oc6 = true) : 196 == _oc3.ship_id || 197 == _oc3.ship_id ? (_oc7.houg += 2, _oc7.tyku += 2, _oc7.kaih += 3, _oc6 = true) : 508 == _oc3.ship_id || 509 == _oc3.ship_id || 646 == _oc3.ship_id ? (_oc7.houg += 2, _oc7.tyku += 2, _oc7.kaih += 2, _oc6 = true) : 888 != _oc3.ship_id && 883 != _oc3.ship_id && 553 != _oc3.ship_id && 554 != _oc3.ship_id || (_oc7.houg += 1, _oc7.tyku += 2, _oc7.kaih += 2, _oc6 = true), 0 == _oc6) return _oc5;
            var _oc8 = _oc3.get_slotnums(437);
            return _oc5.add(_oc7.multiply(_oc8)), _oc5;
        };
    },
    53709: (_oc9, _oca, _ocb) => {
        'use strict';
        var _occ = null;
        defineModule(_oca);
        Object.defineProperty(_oca, '__esModule', {
            'value': true
        }), _oca.getSlot438PersonalEffect = void 0;
        var _ocd = _ocb(74496);
        _oca.getSlot438PersonalEffect = function(_oce) {
            var _ocf = null,
                _ocg = new _ocd.SlotItemEffectModel(),
                _och = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_oce.ctype) > -1 && (_ocg.tais += 1, _ocg.kaih += 1), 160 == _oce.ship_id || 488 == _oce.ship_id || 141 == _oce.ship_id ? (_ocg.tais += 1, _ocg.kaih += 1) : 145 != _oce.ship_id && 588 != _oce.ship_id && 667 != _oce.ship_id && 578 != _oce.ship_id && 476 != _oce.ship_id && 363 != _oce.ship_id && 961 != _oce.ship_id || (_och = 1), 'うしお' == _oce.yomi || 'まいかぜ' == _oce.yomi || 'いそかぜ' == _oce.yomi || 'はまかぜ' == _oce.yomi || 'いかづち' == _oce.yomi || 'やまぐも' == _oce.yomi || 'うみかぜ' == _oce.yomi || 'かわかぜ' == _oce.yomi || 'すずかぜ' == _oce.yomi ? _ocg.tais += 1 : 'しぐれ' != _oce.yomi && 'やまかぜ' != _oce.yomi && 'かみかぜ' != _oce.yomi && 'はるかぜ' != _oce.yomi && 'みくら' != _oce.yomi && 'いしがき' != _oce.yomi || (_ocg.tais += 1, _ocg.kaih += 1), 0 == _och) return _ocg;
            var _oci = _oce.get_each_level_nums(438),
                _ocj = 0,
                _ock = 0,
                _ocl = 0,
                _ocm = _oci[10];
            return _och > 0 && _oci.forEach(function(_ocn, _oco) {
                _oco >= 4 && (_ocj += _ocn), _oco >= 6 && (_ock += _ocn), _oco >= 8 && (_ocl += _ocn);
            }), 1 == _och && (_ocj >= 1 && (_ocg.tais += 1), _ock >= 1 && (_ocg.kaih += 1), _ocl >= 1 && (_ocg.tais += 1), _ocm >= 1 && (_ocg.kaih += 1)), _ocg;
        };
    },
    99790: (_ocp, _ocq, _ocr) => {
        'use strict';
        var _ocs = null;
        defineModule(_ocq);
        Object.defineProperty(_ocq, '__esModule', {
            'value': true
        }), _ocq.getSlot439PersonalEffect = void 0;
        var _oct = _ocr(74496);
        _ocq.getSlot439PersonalEffect = function(_ocu) {
            var _ocv = null,
                _ocw = new _oct.SlotItemEffectModel();
            1 != _ocu.stype && 2 != _ocu.stype && 3 != _ocu.stype && 21 != _ocu.stype || (_ocw.tais += 1, _ocw.kaih += 1), 101 != _ocu.ctype && 1 != _ocu.stype || (_ocw.tais += 1);
            var _ocx = _ocu.getCountryName();
            return 'アメリカ' != _ocx && 'イギリス' != _ocx || (_ocw.tais += 2), _ocw;
        };
    },
    18387: (_ocy, _ocz, _od0) => {
        'use strict';
        var _od1 = null;
        defineModule(_ocz);
        Object.defineProperty(_ocz, '__esModule', {
            'value': true
        }), _ocz.getSlot440_441PersonalEffect = void 0;
        var _od2 = _od0(74496);
        _ocz.getSlot440_441PersonalEffect = function(_od3) {
            var _od4 = null,
                _od5 = new _od2.SlotItemEffectModel();
            return 114 == _od3.ctype && (_od5.raig += 2), _od5;
        };
    },
    70941: (_od6, _od7, _od8) => {
        'use strict';
        var _od9 = null;
        defineModule(_od7);
        Object.defineProperty(_od7, '__esModule', {
            'value': true
        }), _od7.getSlot442_443PersonalEffect = void 0;
        var _oda = _od8(74496);
        _od7.getSlot442_443PersonalEffect = function(_odb) {
            var _odc = null,
                _odd = new _oda.SlotItemEffectModel();
            return 122 == _odb.ctype ? (_odd.raig += 1, _odd.kaih += 2) : 114 == _odb.ctype && (_odd.raig += 2), _odd;
        };
    },
    35025: (_ode, _odf, _odg) => {
        'use strict';
        var _odh = null;
        defineModule(_odf);
        Object.defineProperty(_odf, '__esModule', {
            'value': true
        }), _odf.getSlot447PersonalEffect = void 0;
        var _odi = _odg(74496);
        _odf.getSlot447PersonalEffect = function(_odj) {
            var _odk = null,
                _odl = new _odi.SlotItemEffectModel(),
                _odm = _odj.get_each_level_nums(447),
                _odn = 0,
                _odo = 0,
                _odp = 0,
                _odq = 0;
            _odm.forEach(function(_odr, _ods) {
                _ods >= 2 && (_odn += _odr), _ods >= 4 && (_odo += _odr), _ods >= 6 && (_odp += _odr), _ods >= 8 && (_odq += _odr);
            }), _odn >= 1 && (_odl.houg += 1 * _odn), _odo >= 1 && (_odl.tyku += 1 * _odo), _odp >= 1 && (_odl.tais += 1 * _odp), _odq >= 1 && (_odl.kaih += 1 * _odq);
            var _odt = _odm[10];
            _odt >= 1 && (_odl.tais += 1 * _odt);
            var _odu = false,
                _odv = new _odi.SlotItemEffectModel();
            if (76 == _odj.ctype && (_odv.houg += 1, _odv.tais += 1, _odv.kaih += 2, _odu = true), 'うんよう' == _odj.yomi ? (_odv.houg += 1, _odv.tais += 1, _odv.kaih += 1, _odu = true) : 'ほうしょう' != _odj.yomi && 'たいげい・りゅうほう' != _odj.yomi || (_odv.houg += 1, _odv.tais += 2, _odv.kaih += 1, _odu = true), 0 == _odu) return _odl;
            894 != _odj.ship_id && 899 != _odj.ship_id || (_odv.houg += 1, _odv.kaih += 1, _odv.tais += 1, _odv.tyku += 1, _odu = true);
            var _odw = _odj.get_slotnums(447);
            return _odl.add(_odv.multiply(_odw)), _odl;
        };
    },
    96804: (_odx, _ody, _odz) => {
        'use strict';
        var _oe0 = null;
        defineModule(_ody);
        Object.defineProperty(_ody, '__esModule', {
            'value': true
        }), _ody.getSlot450PersonalEffect = void 0;
        var _oe1 = _odz(74496);
        _ody.getSlot450PersonalEffect = function(_oe2) {
            var _oe3 = null,
                _oe4 = new _oe1.SlotItemEffectModel(),
                _oe5 = false,
                _oe6 = new _oe1.SlotItemEffectModel();
            if (101 == _oe2.ctype && (_oe6.houg += 1, _oe6.tyku += 2, _oe6.souk += 1, _oe6.kaih += 3, _oe5 = true), 1 == _oe2.stype && (_oe6.tyku += 1, _oe6.souk += 1, _oe6.kaih += 2, _oe5 = true), 0 == _oe5) return _oe4;
            var _oe7 = _oe2.get_slotnums(450);
            return _oe4.add(_oe6.multiply(_oe7)), _oe4;
        };
    },
    33896: (_oe8, _oe9, _oea) => {
        'use strict';
        var _oeb = null;
        defineModule(_oe9);
        Object.defineProperty(_oe9, '__esModule', {
            'value': true
        }), _oe9.getSlot451PersonalEffect = void 0;
        var _oec = _oea(74496);
        _oe9.getSlot451PersonalEffect = function(_oed) {
            var _oee = null,
                _oef = new _oec.SlotItemEffectModel(),
                _oeg = false,
                _oeh = new _oec.SlotItemEffectModel(),
                _oei = 0;
            if ('あきつまる' == _oed.yomi ? (_oeh.houg += 1, _oeh.tais += 2, _oeg = true, 166 == _oed.ship_id && (_oei = 2)) : 'やましおまる' == _oed.yomi && (_oeh.houg += 1, _oeh.tais += 3, _oeg = true, _oei = 1), 0 == _oeg) return _oef;
            var _oej = _oed.get_slotnums(451);
            if (_oef.add(_oeh.multiply(_oej)), 0 == _oei) return _oef;
            var _oek = _oed.get_each_level_nums(451),
                _oel = [];
            return _oei > 0 && _oek.forEach(function(_oem, _oen) {
                var _oeo = null;
                for (var _oep = 1; _oep <= _oed.SLOT_LEVEL_MAX; _oep++) _oen >= _oep && (null == _oel[_oep] && (_oel[_oep] = 0), _oel[_oep] += _oem);
            }), 1 == _oei ? (_oel[1] >= 1 && (_oef.houg += 2 * _oel[1]), _oel[2] >= 1 && (_oef.houm += 1 * _oel[2]), _oel[3] >= 1 && (_oef.tais += 1 * _oel[3]), _oel[4] >= 1 && (_oef.houg += 1 * _oel[4]), _oel[6] >= 1 && (_oef.houm += 1 * _oel[6]), _oel[8] >= 1 && (_oef.tais += 1 * _oel[8]), _oel[10] >= 1 && (_oef.houg += 1 * _oel[10])) : 2 == _oei && (_oel[1] >= 1 && (_oef.houg += 1 * _oel[1]), _oel[3] >= 1 && (_oef.tais += 1 * _oel[3]), _oel[5] >= 1 && (_oef.houm += 1 * _oel[5]), _oel[7] >= 1 && (_oef.tais += 1 * _oel[7]), _oel[10] >= 1 && (_oef.houg += 1 * _oel[10])), _oef;
        };
    },
    11031: function(_oeq, _oer, _oes) {
        'use strict';
        var _oet = null;
        var _oeu = this && this.__importDefault || function(_oev) {
            var _oew = null;
            return _oev && _oev.__esModule ? _oev : {
                'default': _oev
            };
        };
        defineModule(_oer);
        Object.defineProperty(_oer, '__esModule', {
            'value': true
        }), _oer.getSlot455PersonalEffect = void 0;
        var _oex = _oes(74496),
            _oey = _oeu(_oes(18622));
        _oer.getSlot455PersonalEffect = function(_oez) {
            var _of0 = null,
                _of1 = new _oex.SlotItemEffectModel(),
                _of2 = false,
                _of3 = new _oex.SlotItemEffectModel(),
                _of4 = 0,
                _of5 = _oez.get_slotnums(455);
            if (1 != _oez.ctype && 5 != _oez.ctype && 12 != _oez.ctype || (_of3.houg += 2, _of3.tyku += 1, 12 == _oez.ctype && (_of3.houg += 1), 666 == _oez.ship_id ? (_of3.houg += 1, _of3.tais += 1) : 959 == _oez.ship_id && (_of3.houg += 2, _of5 >= 2 && (_of1.houg += 2), _of5 >= 3 && (_of1.houg += 3)), _of4 = 1, _of2 = true), 'うらなみ' == _oez.yomi && (_of3.houg += 1, 647 == _oez.ship_id && (_of3.houg += 1, _of3.raig += 1, _of3.tais += 1, _of3.kaih += 1), _of2 = true), 0 == _of2) return _of1;
            if (_of1.add(_of3.multiply(_of5)), 0 == _of4) return _of1;
            for (var _of6 = 0, _of7 = 0, _of8 = 0, _of9 = _oez.have_slot_ids(); _of8 < _of9.length; _of8++) {
                var _ofa = _of9[_of8],
                    _ofb = _oey.default.model.slot.getMst(_ofa),
                    _ofc = _ofb.equipType;
                12 != _ofc && 13 != _ofc || (_ofb.sakuteki >= 5 && (_of6 += _oez.get_slotnums(parseInt(_ofa))), _ofb.taiku >= 2 && (_of7 += _oez.get_slotnums(parseInt(_ofa))));
            }
            if (1 == _of4) {
                _of6 >= 1 && (_of1.houg += 3, _of1.kaih += 2, _of1.raig += 1);
                var _ofd = _oez.get_slotnums(13),
                    _ofe = _oez.get_slotnums(125),
                    _off = _oez.get_slotnums(285),
                    _ofg = _ofd + _ofe + _off;
                1 == _ofg ? (_of1.houg += 1, _of1.raig += 3) : _ofg >= 2 && (_of1.houg += 2, _of1.raig += 5), _off >= 1 && (_of1.raig += 1), _of7 >= 1 && (_of1.tyku += 4);
            }
            return _of1;
        };
    },
    71383: (_ofh, _ofi, _ofj) => {
        'use strict';
        var _ofk = null;
        defineModule(_ofi);
        Object.defineProperty(_ofi, '__esModule', {
            'value': true
        }), _ofi.getSlot456PersonalEffect = void 0;
        var _ofl = _ofj(74496);
        _ofi.getSlot456PersonalEffect = function(_ofm) {
            var _ofn = null,
                _ofo = new _ofl.SlotItemEffectModel(),
                _ofp = false,
                _ofq = new _ofl.SlotItemEffectModel(),
                _ofr = _ofm.getCountryName();
            if ('アメリカ' == _ofr && (_ofq.houg += 3, _ofq.kaih += 4, _ofq.saku += 4, _ofo.houm += 3, _ofp = true), 'イギリス' != _ofr && 'オーストラリア' != _ofr || (_ofq.houg += 2, _ofq.kaih += 2, _ofq.saku += 2, _ofo.houm += 2, _ofp = true), 87 != _ofm.ctype && 91 != _ofm.ctype || (_ofq.houg += 1, _ofo.leng += 1, _ofp = true), 651 != _ofm.ship_id && 656 != _ofm.ship_id || (_ofo.houg += 2, _ofo.kaih += 2, _ofo.saku += 3, _ofo.leng += 1, _ofo.houm += 2), 0 == _ofp) return _ofo;
            var _ofs = _ofm.get_slotnums(456);
            return _ofo.add(_ofq.multiply(_ofs)), _ofo;
        };
    },
    55888: (_oft, _ofu, _ofv) => {
        'use strict';
        var _ofw = null;
        defineModule(_ofu);
        Object.defineProperty(_ofu, '__esModule', {
            'value': true
        }), _ofu.getSlot457PersonalEffect = void 0;
        var _ofx = _ofv(74496);
        _ofu.getSlot457PersonalEffect = function(_ofy) {
            var _ofz = null,
                _og0 = new _ofx.SlotItemEffectModel(),
                _og1 = 0;
            if (109 == _ofy.ctype ? (_og0.raig += 3, _og0.kaih += 3, _og1 = 1) : 71 == _ofy.ctype || 103 == _ofy.ctype ? (_og0.raig += 2, _og0.kaih += 2, _og1 = 2) : 44 == _ofy.ctype && (_og0.raig += 1, _og0.kaih += 4, _og1 = 3), 0 == _og1) return _og0;
            var _og2 = _ofy.get_each_level_nums(461),
                _og3 = [];
            return _og1 > 0 && _og2.forEach(function(_og4, _og5) {
                var _og6 = null;
                for (var _og7 = 1; _og7 <= _ofy.SLOT_LEVEL_MAX; _og7++) null == _og3[_og7] && (_og3[_og7] = 0), _og5 >= _og7 && (_og3[_og7] += _og4);
            }), 1 == _og1 ? (_og3[2] >= 1 && (_og0.raig += 1 * _og3[2]), _og3[3] >= 1 && (_og0.kaih += 1 * _og3[3]), _og3[4] >= 1 && (_og0.raig += 1 * _og3[4]), _og3[5] >= 1 && (_og0.houm += 1 * _og3[5]), _og3[6] >= 1 && (_og0.raig += 1 * _og3[6]), _og3[8] >= 1 && (_og0.raig += 1 * _og3[8]), _og3[10] >= 1 && (_og0.houm += 1 * _og3[10])) : 2 == _og1 ? (_og3[3] >= 1 && (_og0.kaih += 1 * _og3[3]), _og3[4] >= 1 && (_og0.raig += 1 * _og3[4]), _og3[6] >= 1 && (_og0.raig += 1 * _og3[6]), _og3[8] >= 1 && (_og0.raig += 1 * _og3[8]), _og3[10] >= 1 && (_og0.houm += 1 * _og3[10])) : 3 == _og1 && (_og3[4] >= 1 && (_og0.raig += 1 * _og3[4]), _og3[6] >= 1 && (_og0.raig += 1 * _og3[6]), _og3[8] >= 1 && (_og0.raig += 1 * _og3[8]), _og3[10] >= 1 && (_og0.houm += 1 * _og3[10])), _og0;
        };
    },
    2258: (_og8, _og9, _oga) => {
        'use strict';
        var _ogb = null;
        defineModule(_og9);
        Object.defineProperty(_og9, '__esModule', {
            'value': true
        }), _og9.getSlot458PersonalEffect = void 0;
        var _ogc = _oga(74496);
        _og9.getSlot458PersonalEffect = function(_ogd) {
            var _oge = null,
                _ogf = new _ogc.SlotItemEffectModel(),
                _ogg = 0,
                _ogh = false;
            if (13 != _ogd.stype && 14 != _ogd.stype || (_ogh = true), 109 == _ogd.ctype ? (_ogf.raig += 3, _ogf.kaih += 6, _ogg = 1) : 71 == _ogd.ctype || 103 == _ogd.ctype ? (_ogf.raig += 3, _ogf.kaih += 4, _ogg = 2) : 44 == _ogd.ctype && (_ogf.raig += 3, _ogf.kaih += 3, _ogg = 3), 0 == _ogh && 0 == _ogg) return _ogf;
            var _ogi = [];
            [458, 461].forEach(function(_ogj) {
                var _ogk = null,
                    _ogl = _ogd.get_each_level_nums(_ogj);
                null == _ogi[_ogj] && (_ogi[_ogj] = []), _ogl.forEach(function(_ogm, _ogn) {
                    var _ogo = null;
                    for (var _ogp = 1; _ogp <= _ogd.SLOT_LEVEL_MAX; _ogp++) null == _ogi[_ogj][_ogp] && (_ogi[_ogj][_ogp] = 0), _ogn >= _ogp && (_ogi[_ogj][_ogp] += _ogm);
                });
            });
            var _ogq = _ogi[458][2],
                _ogr = _ogi[458][3],
                _ogs = _ogi[458][4],
                _ogt = _ogi[458][5],
                _ogu = _ogi[458][6],
                _ogv = _ogi[458][8],
                _ogw = _ogi[458][10],
                _ogx = _ogi[461][4];
            return _ogg >= 1 && _ogg <= 3 && (_ogs >= 1 && (_ogf.houm += 1 * _ogs), _ogu >= 1 && (_ogf.kaih += 1 * _ogu), _ogv >= 1 && (_ogf.raig += 1 * _ogv)), _ogh && (_ogr >= 1 && (_ogf.kaih += 1 * _ogr), _ogt >= 1 && (_ogf.raig += 1 * _ogt), _ogw >= 1 && (_ogf.houm += 1 * _ogw), _ogq >= 1 && _ogx >= 1 && (_ogf.raig += 7, _ogf.houm += 5)), _ogf;
        };
    },
    43768: (_ogy, _ogz, _oh0) => {
        'use strict';
        var _oh1 = null;
        defineModule(_ogz);
        Object.defineProperty(_ogz, '__esModule', {
            'value': true
        }), _ogz.getSlot463PersonalEffect = void 0;
        var _oh2 = _oh0(74496);
        _ogz.getSlot463PersonalEffect = function(_oh3) {
            var _oh4 = null,
                _oh5 = new _oh2.SlotItemEffectModel(),
                _oh6 = false,
                _oh7 = new _oh2.SlotItemEffectModel(),
                _oh8 = _oh3.get_slotnums(142),
                _oh9 = _oh3.get_slotnums(460),
                _oha = _oh8 + _oh9;
            if (37 == _oh3.ctype && (_oh7.houg += 1, _oh7.tyku += 2, _oh7.kaih += 1, _oh7.houm += 1, _oha >= 1 && (_oh5.tyku += 1, _oh5.kaih += 1, _oh5.houm += 1), _oh6 = true), 916 != _oh3.ship_id && 911 != _oh3.ship_id && 546 != _oh3.ship_id || (_oh7.houg += 1, _oh7.kaih += 1, _oh7.houm += 2, _oh9 >= 1 && (_oh5.houg += 1, _oh5.kaih += 1, _oh5.houm += 2), _oh6 = true), 0 == _oh6) return _oh5;
            var _ohb = _oh3.get_slotnums(463);
            return _oh5.add(_oh7.multiply(_ohb)), _oh5;
        };
    },
    92174: (_ohc, _ohd, _ohe) => {
        'use strict';
        var _ohf = null;
        defineModule(_ohd);
        Object.defineProperty(_ohd, '__esModule', {
            'value': true
        }), _ohd.getSlot464PersonalEffect = void 0;
        var _ohg = _ohe(74496);
        _ohd.getSlot464PersonalEffect = function(_ohh) {
            var _ohi = null,
                _ohj = new _ohg.SlotItemEffectModel(),
                _ohk = false,
                _ohl = new _ohg.SlotItemEffectModel(),
                _ohm = _ohh.get_slotnums(142),
                _ohn = _ohh.get_slotnums(460),
                _oho = _ohm + _ohn;
            if (37 == _ohh.ctype ? (_ohl.tyku += 3, _ohl.kaih += 2, _oho >= 1 && (_ohj.tyku += 2, _ohj.kaih += 1, _ohj.houm += 1), _ohk = true) : 6 != _ohh.ctype && 73 != _ohh.ctype && 113 != _ohh.ctype || (_ohl.tyku = _ohl.tyku - 2, _ohl.kaih = _ohl.kaih - 2, _ohk = true), 916 != _ohh.ship_id && 911 != _ohh.ship_id && 546 != _ohh.ship_id && 593 != _ohh.ship_id && 954 != _ohh.ship_id || (_ohl.tyku += 2, _ohl.kaih += 2, _ohn >= 1 && (_ohj.houg += 2, _ohj.tyku += 2, _ohj.kaih += 2, _ohj.houm += 3), _ohk = true), 0 == _ohk) return _ohj;
            var _ohp = _ohh.get_slotnums(464);
            return _ohj.add(_ohl.multiply(_ohp)), _ohj;
        };
    },
    38003: (_ohq, _ohr, _ohs) => {
        'use strict';
        var _oht = null;
        defineModule(_ohr);
        Object.defineProperty(_ohr, '__esModule', {
            'value': true
        }), _ohr.getSlot465PersonalEffect = void 0;
        var _ohu = _ohs(74496);
        _ohr.getSlot465PersonalEffect = function(_ohv) {
            var _ohw = null,
                _ohx = new _ohu.SlotItemEffectModel(),
                _ohy = false,
                _ohz = new _ohu.SlotItemEffectModel(),
                _oi0 = _ohv.get_slotnums(142),
                _oi1 = _ohv.get_slotnums(460),
                _oi2 = _oi0 + _oi1;
            if (916 == _ohv.ship_id ? (_ohz.houg += 2, _ohz.kaih += 8, _ohz.houm += 2, _oi1 >= 1 && (_ohx.kaih += 2, _ohx.houm += 1), _ohy = true) : 911 != _ohv.ship_id && 546 != _ohv.ship_id || (_ohz.houg += 1, _ohz.kaih += 2, _ohz.houm += 1, _oi1 >= 1 && (_ohx.kaih += 1, _ohx.houm += 1), _ohy = true), 37 == _ohv.ctype && _oi2 >= 1 && (_ohx.houg += 2, _ohx.houm += 2), 0 == _ohy) return _ohx;
            var _oi3 = _ohv.get_slotnums(465);
            return _ohx.add(_ohz.multiply(_oi3)), _ohx;
        };
    },
    65455: (_oi4, _oi5, _oi6) => {
        'use strict';
        var _oi7 = null;
        defineModule(_oi5);
        Object.defineProperty(_oi5, '__esModule', {
            'value': true
        }), _oi5.getSlot466PersonalEffect = void 0;
        var _oi8 = _oi6(74496);
        _oi5.getSlot466PersonalEffect = function(_oi9) {
            var _oia = null,
                _oib = new _oi8.SlotItemEffectModel(),
                _oic = false,
                _oid = new _oi8.SlotItemEffectModel();
            if (277 == _oi9.ship_id || 278 == _oi9.ship_id || 156 == _oi9.ship_id || 288 == _oi9.ship_id || 112 == _oi9.ship_id || 280 == _oi9.ship_id || 279 == _oi9.ship_id ? (_oid.houg += 1, _oid.houm += 1, _oic = true) : 461 == _oi9.ship_id || 462 == _oi9.ship_id || 466 == _oi9.ship_id || 467 == _oi9.ship_id ? (_oid.houg += 2, _oid.kaih += 2, _oid.houm += 1, _oic = true) : 594 != _oi9.ship_id && 698 != _oi9.ship_id && 646 != _oi9.ship_id && 599 != _oi9.ship_id && 610 != _oi9.ship_id && 196 != _oi9.ship_id && 197 != _oi9.ship_id || (_oid.houg += 1, _oid.kaih += 1, _oid.houm += 2, _oic = true), 0 == _oic) return _oib;
            var _oie = _oi9.get_slotnums(466);
            return _oib.add(_oid.multiply(_oie)), _oib;
        };
    },
    70362: (_oif, _oig, _oih) => {
        'use strict';
        var _oii = null;
        defineModule(_oig);
        Object.defineProperty(_oig, '__esModule', {
            'value': true
        }), _oig.getSlot467PersonalEffect = void 0;
        var _oij = _oih(74496);
        _oig.getSlot467PersonalEffect = function(_oik) {
            var _oil = null,
                _oim = new _oij.SlotItemEffectModel(),
                _oin = false,
                _oio = new _oij.SlotItemEffectModel();
            if ('アメリカ' == _oik.getCountryName()) {
                for (var _oip = _oik.getUSSWaterRaderDict(), _oiq = _oik.getUSSAirRaderDict(), _oir = 0, _ois = 0, _oit = 0, _oiu = _oik.have_slot_ids(); _oit < _oiu.length; _oit++) {
                    var _oiv = _oiu[_oit];
                    _oip[parseInt(_oiv)] && (_oir += _oik.get_slotnums(parseInt(_oiv))), _oiq[parseInt(_oiv)] && (_ois += _oik.get_slotnums(parseInt(_oiv)));
                }
                _oio.houg += 1, _oio.tyku += 1, _oio.kaih += 2, _oir >= 1 && (_oim.houg += 1, _oim.tyku += 1, _oim.kaih += 1, _oim.houm += 2), _ois >= 1 && (_oim.tyku += 2, _oim.kaih += 2), 65 != _oik.ctype && 93 != _oik.ctype && 102 != _oik.ctype && 107 != _oik.ctype && 125 != _oik.ctype || (_oio.tyku += 2, _oio.kaih += 1), _oin = true;
            }
            if (0 == _oin) return _oim;
            var _oiw = _oik.get_slotnums(467);
            return _oim.add(_oio.multiply(_oiw)), _oim;
        };
    },
    68086: (_oix, _oiy, _oiz) => {
        'use strict';
        var _oj0 = null;
        defineModule(_oiy);
        Object.defineProperty(_oiy, '__esModule', {
            'value': true
        }), _oiy.getSlot470PersonalEffect = void 0;
        var _oj1 = _oiz(74496);
        _oiy.getSlot470PersonalEffect = function(_oj2) {
            var _oj3 = null,
                _oj4 = new _oj1.SlotItemEffectModel(),
                _oj5 = false,
                _oj6 = new _oj1.SlotItemEffectModel(),
                _oj7 = _oj2.get_slotnums(470),
                _oj8 = _oj2.get_slotnums(529),
                _oj9 = _oj7 + _oj8,
                _oja = _oj2.get_each_level_over_nums([470, 529]),
                _ojb = (_oja.slot[470], _oja.slot[529]),
                _ojc = _oja.total,
                _ojd = 0;
            23 == _oj2.ctype || 18 == _oj2.ctype ? (_oj6.houg += 1, _oj5 = true, _ojd = 1) : 30 == _oj2.ctype && (_oj6.houg += 2, _oj5 = true, _ojd = 2), ('しぐれ' == _oj2.yomi || 'ゆきかぜ' == _oj2.yomi || 'いそかぜ' == _oj2.yomi) && (_oj6.kaih += 2, _oj5 = true), 405 == _oj2.ship_id || 246 == _oj2.ship_id || 144 == _oj2.ship_id || 145 == _oj2.ship_id || 497 == _oj2.ship_id ? (_oj8 >= 1 && (_oj4.houg += 1 * _oj8, _oj4.tyku += 1 * _oj8, _oj4.houm += 1 * _oj8, _oj4.kaih += 1 * _oj8), 2 == _oj8 ? _oj4.houg += 1 : _oj8 >= 3 && (_oj4.houg += 3), _ojb[8] >= 1 && (_oj4.tyku += 1 * _ojb[8]), _ojb[10] >= 1 && (_oj4.houg += 1 * _ojb[10])) : 323 == _oj2.ship_id || 498 == _oj2.ship_id || 961 == _oj2.ship_id ? (_oj8 >= 1 && (_oj4.houg += 2 * _oj8, _oj4.tyku += 2 * _oj8, _oj4.houm += 1 * _oj8, _oj4.kaih += 1 * _oj8), 2 == _oj8 ? _oj4.houg += 2 : _oj8 >= 3 && (_oj4.houg += 4), _ojb[6] >= 1 && (_oj4.tyku += 1 * _ojb[6]), _ojb[8] >= 1 && (_oj4.houm += 1 * _ojb[8]), _ojb[10] >= 1 && (_oj4.houg += 1 * _ojb[10])) : 975 == _oj2.ship_id && (_oj8 >= 1 && (_oj4.houg += 3 * _oj8, _oj4.tyku += 3 * _oj8, _oj4.houm += 2 * _oj8, _oj4.kaih += 2 * _oj8), 2 == _oj8 ? _oj4.houg += 3 : _oj8 >= 3 && (_oj4.houg += 6), _ojb[4] >= 1 && (_oj4.tyku += 1 * _ojb[4]), _ojb[6] >= 1 && (_oj4.houg += 1 * _ojb[6]), _ojb[8] >= 1 && (_oj4.houm += 1 * _ojb[8]), _ojb[10] >= 1 && (_oj4.houg += 1 * _ojb[10])), 961 == _oj2.ship_id && (_oj6.houg += 3, _oj6.houm += 3, _oj6.kaih += 2, _oj5 = true), 566 != _oj2.ship_id && 567 != _oj2.ship_id && 568 != _oj2.ship_id && 656 != _oj2.ship_id && 670 != _oj2.ship_id && 915 != _oj2.ship_id && 651 != _oj2.ship_id && 145 != _oj2.ship_id && 961 != _oj2.ship_id && 951 != _oj2.ship_id || (_oj4.houg += 1, _oj4.houm += 2, _oj9 >= 2 && (_oj4.houg += 2), _ojc[5] >= 1 && (_oj4.houm += 1 * _ojc[5]), _ojc[8] >= 1 && (_oj4.houg += 1 * _ojc[8]), _ojc[10] >= 1 && (_oj4.houm += 1 * _ojc[10])), _oj5 && _oj4.add(_oj6.multiply(_oj9));
            var _oje = _oj2.get_have_rader_nums(),
                _ojf = _oje.water_rader,
                _ojg = _oje.air_rader;
            return _ojf >= 1 && (1 == _ojd ? (_oj4.houg += 1, _oj4.raig += 3, _oj4.kaih += 1, _oj4.houm += 1) : 2 == _ojd && (_oj4.houg += 2, _oj4.raig += 3, _oj4.kaih += 1, _oj4.houm += 3)), _ojg >= 1 && (_oj8 >= 1 && (_oj4.tyku += 2, _oj4.kaih += 2), 2 == _oj8 ? _oj4.tyku += 2 : _oj8 >= 3 && (_oj4.tyku += 4)), _oj4;
        };
    },
    78173: (_ojh, _oji, _ojj) => {
        'use strict';
        var _ojk = null;
        defineModule(_oji);
        Object.defineProperty(_oji, '__esModule', {
            'value': true
        }), _oji.getSlot471PersonalEffect = void 0;
        var _ojl = _ojj(74496);
        _oji.getSlot471PersonalEffect = function(_ojm) {
            var _ojn = null,
                _ojo = new _ojl.SlotItemEffectModel(),
                _ojp = false,
                _ojq = new _ojl.SlotItemEffectModel(),
                _ojr = 0;
            if ('フランス' == _ojm.getCountryName() && (_ojq.houg += 2, _ojq.kaih += 2, _ojq.houm += 2, _ojp = true, _ojr = 1), 79 == _ojm.ctype && (_ojq.houg += 2, _ojq.houm += 1, _ojp = true), 0 == _ojp) return _ojo;
            var _ojs = _ojm.get_slotnums(471);
            if (_ojo.add(_ojq.multiply(_ojs)), 0 == _ojr) return _ojo;
            var _ojt = _ojm.get_each_level_nums(471),
                _oju = 0,
                _ojv = 0;
            if (_ojr > 0 && _ojt.forEach(function(_ojw, _ojx) {
                    _ojx >= 6 && (_oju += _ojw), _ojx >= 8 && (_ojv += _ojw);
                }), 1 == _ojr) {
                _oju >= 1 && (_ojo.kaih += 1 * _oju, _ojo.houm += 1 * _oju), _ojv >= 1 && (_ojo.houg += 1 * _ojv, _ojo.kaih += 1 * _ojv, _ojo.houm += 1 * _ojv);
                var _ojy = _ojt[10];
                _ojy >= 1 && (_ojo.houg += 1 * _ojy, _ojo.houm += 1 * _ojy);
            }
            return _ojo;
        };
    },
    22581: (_ojz, _ok0, _ok1) => {
        'use strict';
        var _ok2 = null;
        defineModule(_ok0);
        Object.defineProperty(_ok0, '__esModule', {
            'value': true
        }), _ok0.getSlot472PersonalEffect = void 0;
        var _ok3 = _ok1(74496);
        _ok0.getSlot472PersonalEffect = function(_ok4) {
            var _ok5 = null,
                _ok6 = new _ok3.SlotItemEffectModel(),
                _ok7 = false,
                _ok8 = new _ok3.SlotItemEffectModel(),
                _ok9 = _ok4.getCountryName();
            if ('アメリカ' == _ok9 && (_ok8.tais += 2, _ok7 = true), 'イギリス' == _ok9 && (_ok8.tais += 1, _ok7 = true), 1 == _ok4.stype && (_ok8.kaih += 1, _ok7 = true), _ok7) {
                var _oka = _ok4.get_slotnums(472);
                _ok6.add(_ok8.multiply(_oka));
            }
            return 920 == _ok4.ship_id && (_ok6.tais += 1, _ok6.kaih += 1, _ok6.houm += 1), _ok6;
        };
    },
    13053: (_okb, _okc, _okd) => {
        'use strict';
        var _oke = null;
        defineModule(_okc);
        Object.defineProperty(_okc, '__esModule', {
            'value': true
        }), _okc.getSlot473PersonalEffect = void 0;
        var _okf = _okd(74496);
        _okc.getSlot473PersonalEffect = function(_okg) {
            var _okh = null,
                _oki = new _okf.SlotItemEffectModel(),
                _okj = false,
                _okk = new _okf.SlotItemEffectModel(),
                _okl = _okg.getCountryName();
            if ('アメリカ' == _okl && (_okk.houg += 1, _okk.kaih += 1, _okk.tyku += 1, _okj = true), 'イギリス' == _okl && (_okk.houg += 1, _okk.kaih += 1, _okj = true), 0 == _okj) return _oki;
            var _okm = _okg.get_slotnums(473);
            return _oki.add(_okk.multiply(_okm)), _oki;
        };
    },
    47874: (_okn, _oko, _okp) => {
        'use strict';
        var _okq = null;
        defineModule(_oko);
        Object.defineProperty(_oko, '__esModule', {
            'value': true
        }), _oko.getSlot474PersonalEffect = void 0;
        var _okr = _okp(74496);
        _oko.getSlot474PersonalEffect = function(_oks) {
            var _okt = null,
                _oku = new _okr.SlotItemEffectModel(),
                _okv = false,
                _okw = new _okr.SlotItemEffectModel(),
                _okx = _oks.getCountryName();
            if ('アメリカ' == _okx && (_okw.houg += 2, _okw.kaih += 1, _okw.tyku += 1, _okv = true), 'イギリス' == _okx && (_okw.houg += 1, _okw.kaih += 1, _okw.tyku += 1, _okv = true), 'フランス' == _okx && (_okw.houg += 1, _okw.tyku += 1, _okv = true), 707 != _oks.ship_id && 930 != _oks.ship_id || (_okw.houg += 1, _okw.kaih += 1, _okv = true), 0 == _okv) return _oku;
            var _oky = _oks.get_slotnums(474);
            return _oku.add(_okw.multiply(_oky)), _oku;
        };
    },
    42788: (_okz, _ol0, _ol1) => {
        'use strict';
        var _ol2 = null;
        defineModule(_ol0);
        Object.defineProperty(_ol0, '__esModule', {
            'value': true
        }), _ol0.getSlot478PersonalEffect = void 0;
        var _ol3 = _ol1(74496);
        _ol0.getSlot478PersonalEffect = function(_ol4) {
            var _ol5 = null,
                _ol6 = new _ol3.SlotItemEffectModel(),
                _ol7 = _ol4.get_each_level_nums(478),
                _ol8 = [];
            return _ol7.forEach(function(_ol9, _ola) {
                var _olb = null;
                for (var _olc = 1; _olc <= _ol4.SLOT_LEVEL_MAX; _olc++) _ola >= _olc && (null == _ol8[_olc] && (_ol8[_olc] = 0), _ol8[_olc] += _ol9);
            }), _ol8.every(function(_old) {
                return 0 == _old;
            }) || (_ol8[1] >= 1 && (_ol6.houg += 1), _ol8[2] >= 1 && (_ol6.houm += 1), _ol8[3] >= 1 && (_ol6.kaih += 1), _ol8[4] >= 1 && (_ol6.baku += 1), _ol8[5] >= 1 && (_ol6.raig += 1), _ol8[6] >= 1 && (_ol6.tyku += 1), _ol8[7] >= 1 && (_ol6.houg += 1), _ol8[8] >= 1 && (_ol6.houm += 1), _ol8[9] >= 1 && (_ol6.kaih += 1), _ol8[10] >= 1 && (_ol6.houg += 1)), _ol6;
        };
    },
    22218: (_ole, _olf, _olg) => {
        'use strict';
        var _olh = null;
        defineModule(_olf);
        Object.defineProperty(_olf, '__esModule', {
            'value': true
        }), _olf.getSlot47PersonalEffect = void 0;
        var _oli = _olg(74496);
        _olf.getSlot47PersonalEffect = function(_olj) {
            var _olk = null,
                _oll = new _oli.SlotItemEffectModel(),
                _olm = new _oli.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_olj.yomi) >= 0 ? (_olm.tais += 3, _olm.kaih += 2, _olm.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_olj.yomi) >= 0 && (_olm.tais += 2, _olm.kaih += 2), !_olm.exists()) return _oll;
            var _oln = _olj.get_slotnums(47) + _olj.get_slotnums(438);
            return _oll = _olm.multiply(_oln);
        };
    },
    57664: (_olo, _olp, _olq) => {
        'use strict';
        var _olr = null;
        defineModule(_olp);
        Object.defineProperty(_olp, '__esModule', {
            'value': true
        }), _olp.getSlot483PersonalEffect = void 0;
        var _ols = _olq(74496);
        _olp.getSlot483PersonalEffect = function(_olt) {
            var _olu = null,
                _olv = new _ols.SlotItemEffectModel(),
                _olw = 0,
                _olx = 0,
                _oly = 0,
                _olz = 0,
                _om0 = 0,
                _om1 = 0,
                _om2 = 0;
            if (6 == _olt.ctype ? (_olv.houg += 2, _olv.tyku += 3, _olv.houm += 1, _olw = 1) : 2 == _olt.ctype ? (_olv.houg += 1, _olv.tyku += 2, _olv.kaih += 2, _olv.houm += 1, _olx = 1) : 37 == _olt.ctype && (_oly = 1), 8 == _olt.stype || 9 == _olt.stype || 10 == _olt.stype ? _olz = 1 : 5 != _olt.stype && 6 != _olt.stype || (_om0 = 1), 149 == _olt.ship_id ? (_olv.houg += 2, _olv.tyku += 2) : 591 == _olt.ship_id ? (_olv.houg += 3, _olv.tyku += 3, _olv.kaih += 1) : 150 == _olt.ship_id ? (_olv.houg += 1, _olv.tyku += 1) : 592 == _olt.ship_id ? (_olv.houg += 2, _olv.tyku += 2, _olv.kaih += 2) : 151 == _olt.ship_id ? (_olv.houg += 1, _olv.tyku += 2, _olv.kaih += 2) : 593 == _olt.ship_id ? (_olv.houg += 2, _olv.tyku += 5, _olv.kaih += 3) : 954 == _olt.ship_id ? (_olv.houg += 2, _olv.tyku += 4, _olv.kaih += 2) : 152 == _olt.ship_id ? (_olv.houg += 2, _olv.tyku += 2) : 911 == _olt.ship_id || 916 == _olt.ship_id || 546 == _olt.ship_id ? (_olv.houg += 2, _olv.tyku += 2, _olv.kaih += 2, _om1 = 1) : 553 == _olt.ship_id || 554 == _olt.ship_id ? (_olv.houg += 1, _olv.tyku += 2, _olv.kaih += 1, _om2 = 1) : 541 == _olt.ship_id || 411 == _olt.ship_id || 412 == _olt.ship_id ? (_olv.houg += 1, _olv.tyku += 2) : 573 == _olt.ship_id && (_olv.houg += 2, _olv.tyku += 2, _olv.kaih += 1), 0 == [_olw, _olx, _oly, _olz, _om0, _om1, _om2].reduce(function(_om3, _om4) {
                    return _om3 + _om4;
                }, 0)) return _olv;
            var _om5 = _olt.get_each_level_nums(483),
                _om6 = 0,
                _om7 = [];
            return _om5.forEach(function(_om8, _om9) {
                var _oma = null;
                _om9 >= 6 && (_om6 += _om8);
                for (var _omb = 1; _omb <= _olt.SLOT_LEVEL_MAX; _omb++) null == _om7[_omb] && (_om7[_omb] = 0), _om9 >= _omb && (_om7[_omb] += _om8);
            }), 1 == _olw ? (_om6 >= 1 && (_olv.houm += 1), _om5[10] >= 1 && (_olv.houm += 1)) : 1 == _olx ? (_om7[5] >= 1 && (_olv.kaih += 1), _om7[6] >= 1 && (_olv.houm += 1), _om7[10] >= 1 && (_olv.kaih += 1)) : 1 == _oly && (_om7[6] >= 1 && (_olv.houm += 1), _om7[10] >= 1 && (_olv.kaih += 1)), 1 == _olz ? (_om7[2] >= 1 && (_olv.tyku += 1), _om7[4] >= 1 && (_olv.houg += 1), _om7[7] >= 1 && (_olv.kaih += 1), _om7[8] >= 1 && (_olv.tyku += 1), _om7[9] >= 1 && (_olv.houg += 1)) : 1 == _om0 && (_om7[2] >= 1 && (_olv.tyku += 1), _om7[4] >= 1 && (_olv.houg += 1), _om7[6] >= 1 && (_olv.kaih += 1), _om7[8] >= 1 && (_olv.houm += 1), _om7[10] >= 1 && (_olv.houg += 1)), 1 == _om1 ? _om7[5] >= 1 && (_olv.houm += 1) : 1 == _om2 && (_om7[1] >= 1 && (_olv.houm += 1), _om7[3] >= 1 && (_olv.houm += 1)), _olv;
        };
    },
    44990: (_omc, _omd, _ome) => {
        'use strict';
        var _omf = null;
        defineModule(_omd);
        Object.defineProperty(_omd, '__esModule', {
            'value': true
        }), _omd.getSlot485PersonalEffect = void 0;
        var _omg = _ome(74496);
        _omd.getSlot485PersonalEffect = function(_omh) {
            var _omi = null,
                _omj = new _omg.SlotItemEffectModel(),
                _omk = false,
                _oml = new _omg.SlotItemEffectModel();
            if (9 == _omh.ctype && (_oml.houg += 1, _oml.kaih += 2, _oml.tyku += 3, _omk = true), 501 == _omh.ship_id || 506 == _omh.ship_id ? (_oml.kaih += 1, _oml.tyku += 2, _oml.houm += 1, _omk = true) : 502 != _omh.ship_id && 507 != _omh.ship_id || (_oml.kaih += 1, _oml.tyku += 1, _oml.houm += 1, _omk = true), _omk) {
                var _omm = _omh.get_slotnums(485);
                _omj.add(_oml.multiply(_omm));
            }
            var _omn = _omh.get_each_level_nums(485),
                _omo = 0,
                _omp = 0,
                _omq = 0,
                _omr = _omn[10];
            return _omn.forEach(function(_oms, _omt) {
                _omt >= 3 && (_omo += _oms), _omt >= 5 && (_omp += _oms), _omt >= 7 && (_omq += _oms);
            }), _omo > 0 && (_omj.houg += 1 * _omo), _omp > 0 && (_omj.tyku += 1 * _omp), _omq > 0 && (_omj.kaih += 1 * _omq), _omr > 0 && (_omj.houm += 1 * _omr), _omj;
        };
    },
    83957: (_omu, _omv, _omw) => {
        'use strict';
        var _omx = null;
        defineModule(_omv);
        Object.defineProperty(_omv, '__esModule', {
            'value': true
        }), _omv.getSlot486PersonalEffect = void 0;
        var _omy = _omw(74496);
        _omv.getSlot486PersonalEffect = function(_omz) {
            var _on0 = null,
                _on1 = new _omy.SlotItemEffectModel(),
                _on2 = false,
                _on3 = new _omy.SlotItemEffectModel();
            if (894 == _omz.ship_id || 899 == _omz.ship_id ? (_on3.houg += 4, _on3.tyku += 4, _on3.kaih += 3, _on3.houm += 2, _on2 = true) : 888 != _omz.ship_id && 883 != _omz.ship_id || (_on3.houg += 2, _on3.tyku += 2, _on3.kaih += 2, _on3.houm += 1, _on2 = true), _on2) {
                var _on4 = _omz.get_slotnums(486);
                _on1.add(_on3.multiply(_on4));
            }
            var _on5 = _omz.get_each_level_nums(486),
                _on6 = 0,
                _on7 = 0,
                _on8 = _on5[10];
            return _on5.forEach(function(_on9, _ona) {
                _ona >= 6 && (_on6 += _on9), _ona >= 8 && (_on7 += _on9);
            }), _on6 > 0 && (_on1.kaih += 1 * _on6, _on1.houm += 1 * _on6), _on7 > 0 && (_on1.tyku += 1 * _on7, _on1.kaih += 1 * _on7), _on8 > 0 && (_on1.houg += 1 * _on8, _on1.houm += 1 * _on8), _on1;
        };
    },
    78539: (_onb, _onc, _ond) => {
        'use strict';
        var _one = null;
        defineModule(_onc);
        Object.defineProperty(_onc, '__esModule', {
            'value': true
        }), _onc.getSlot487PersonalEffect = void 0;
        var _onf = _ond(74496);
        _onc.getSlot487PersonalEffect = function(_ong) {
            var _onh = null,
                _oni = new _onf.SlotItemEffectModel(),
                _onj = false,
                _onk = new _onf.SlotItemEffectModel();
            if (894 == _ong.ship_id || 899 == _ong.ship_id ? (_onk.houg += 5, _onk.tyku += 3, _onk.kaih += 2, _onk.houm += 4, _onj = true) : 888 != _ong.ship_id && 883 != _ong.ship_id || (_onk.houg += 3, _onk.tyku += 1, _onk.kaih += 1, _onk.houm += 2, _onj = true), _onj) {
                var _onl = _ong.get_slotnums(487);
                _oni.add(_onk.multiply(_onl));
            }
            var _onm = _ong.get_each_level_nums(487),
                _onn = 0,
                _ono = 0,
                _onp = _onm[10];
            return _onm.forEach(function(_onq, _onr) {
                _onr >= 6 && (_onn += _onq), _onr >= 8 && (_ono += _onq);
            }), _onn > 0 && (_oni.houg += 1 * _onn, _oni.kaih += 1 * _onn), _ono > 0 && (_oni.tyku += 1 * _ono, _oni.houm += 1 * _ono), _onp > 0 && (_oni.houg += 1 * _onp, _oni.houm += 1 * _onp), _oni;
        };
    },
    96282: (_ons, _ont, _onu) => {
        'use strict';
        var _onv = null;
        defineModule(_ont);
        Object.defineProperty(_ont, '__esModule', {
            'value': true
        }), _ont.getSlot488PersonalEffect = void 0;
        var _onw = _onu(74496);
        _ont.getSlot488PersonalEffect = function(_onx) {
            var _ony = null,
                _onz = new _onw.SlotItemEffectModel(),
                _oo0 = false,
                _oo1 = new _onw.SlotItemEffectModel(),
                _oo2 = 0,
                _oo3 = _onx.getCountryName(),
                _oo4 = {
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
                }[_onx.ship_id];
            if (('日本' == _oo3 && 2 == _onx.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_onx.ctype] && 1 == _onx.stype) && (_oo1.tais += 1, _oo1.kaih += 1, _oo0 = true), 1 == _oo4 ? (_oo1.tais += 5, _oo1.kaih += 4, _oo1.houm += 2, _oo0 = true, _oo2 = 1) : 2 == _oo4 ? (_oo1.tais += 2, _oo1.kaih += 1, _oo1.houm += 1, _oo0 = true, _oo2 = 2) : 3 == _oo4 && (_oo1.tais += 1, _oo0 = true, _oo2 = 2), 0 == _oo0) return _onz;
            var _oo5 = _onx.get_slotnums(488);
            if (_onz.add(_oo1.multiply(_oo5)), 0 == _oo2) return _onz;
            var _oo6 = _onx.get_each_level_nums(488),
                _oo7 = [];
            return _oo6.forEach(function(_oo8, _oo9) {
                var _ooa = null;
                for (var _oob = 1; _oob <= _onx.SLOT_LEVEL_MAX; _oob++) _oo9 >= _oob && (null == _oo7[_oob] && (_oo7[_oob] = 0), _oo7[_oob] += _oo8);
            }), 1 == _oo2 ? (_oo7[3] >= 1 && (_onz.kaih += 1 * _oo7[3]), _oo7[5] >= 1 && (_onz.tais += 1 * _oo7[5]), _oo7[7] >= 1 && (_onz.houm += 1 * _oo7[7]), _oo7[8] >= 1 && (_onz.kaih += 1 * _oo7[8]), _oo7[9] >= 1 && (_onz.tais += 1 * _oo7[9]), _oo7[10] >= 1 && (_onz.tais += 1 * _oo7[10])) : 2 == _oo2 && (_oo7[5] >= 1 && (_onz.tais += 1 * _oo7[5]), _oo7[7] >= 1 && (_onz.kaih += 1 * _oo7[7]), _oo7[9] >= 1 && (_onz.houm += 1 * _oo7[9]), _oo7[10] >= 1 && (_onz.tais += 1 * _oo7[10])), _onz;
        };
    },
    49679: (_ooc, _ood, _ooe) => {
        'use strict';
        var _oof = null;
        defineModule(_ood);
        Object.defineProperty(_ood, '__esModule', {
            'value': true
        }), _ood.getSlot489PersonalEffect = void 0;
        var _oog = _ooe(74496);
        _ood.getSlot489PersonalEffect = function(_ooh) {
            var _ooi = null,
                _ooj = new _oog.SlotItemEffectModel(),
                _ook = false,
                _ool = new _oog.SlotItemEffectModel();
            if ('あきつまる' != _ooh.yomi && 'やましおまる' != _ooh.yomi && 'くまのまる' != _ooh.yomi || (_ool.tyku = _ool.tyku + 2, _ool.kaih = _ool.kaih + 1, _ool.houg = _ool.houg + 1, _ool.tais = _ool.tais + 1, _ool.houm = _ool.houm + 1, _ook = true), 717 != _ooh.ship_id && 948 != _ooh.ship_id || (_ool.tyku = _ool.tyku + 2, _ool.kaih = _ool.kaih + 2, _ool.houg = _ool.houg + 2, _ool.tais = _ool.tais + 1, _ool.houm = _ool.houm + 1, _ook = true), _ook) {
                var _oom = _ooh.get_slotnums(489) + _ooh.get_slotnums(491);
                _ooj.add(_ool.multiply(_oom));
            }
            var _oon = _ooh.get_each_level_nums(489),
                _ooo = _ooh.get_each_level_nums(491),
                _oop = 0,
                _ooq = 0,
                _oor = 0;
            _oon.forEach(function(_oos, _oot) {
                _oot >= 3 && (_oop += _oos), _oot >= 6 && (_ooq += _oos), _oot >= 8 && (_oor += _oos);
            }), _ooo.forEach(function(_oou, _oov) {
                _oov >= 3 && (_oop += _oou), _oov >= 6 && (_ooq += _oou), _oov >= 8 && (_oor += _oou);
            });
            var _oow = _oon[10] + _ooo[10];
            return _oop >= 1 && (_ooj.kaih = _ooj.kaih + 1 * _oop), _ooq >= 1 && (_ooj.tais = _ooj.tais + 1 * _ooq), _oor >= 1 && (_ooj.houm = _ooj.houm + 1 * _oor), _oow >= 1 && (_ooj.houg = _ooj.houg + 1 * _oow), _ooj;
        };
    },
    90312: function(_oox, _ooy, _ooz) {
        'use strict';
        var _op0 = null;
        var _op1 = this && this.__importDefault || function(_op2) {
            var _op3 = null;
            return _op2 && _op2.__esModule ? _op2 : {
                'default': _op2
            };
        };
        defineModule(_ooy);
        Object.defineProperty(_ooy, '__esModule', {
            'value': true
        }), _ooy.getSlot502PersonalEffect = void 0;
        var _op4 = _ooz(74496),
            _op5 = _op1(_ooz(18622));
        _ooy.getSlot502PersonalEffect = function(_op6) {
            var _op7 = null,
                _op8 = new _op4.SlotItemEffectModel(),
                _op9 = _op6.get_slotnums(502),
                _opa = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _opb = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _opc = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _opd = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _ope = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_opa[_op6.ship_id]) {
                var _opf = _opa[_op6.ship_id];
                _op8.houg += _op9 * _opf;
            }
            if (_opb[_op6.ship_id]) {
                var _opg = _opb[_op6.ship_id];
                _op8.tyku += _op9 * _opg;
            }
            if (_opc[_op6.ship_id]) {
                var _oph = _opc[_op6.ship_id],
                    _opi = _op6.get_each_level_nums(502),
                    _opj = [];
                _opi.forEach(function(_opk, _opl) {
                    var _opm = null;
                    for (var _opn = 1; _opn <= _op6.SLOT_LEVEL_MAX; _opn++) _opl >= _opn && (null == _opj[_opn] && (_opj[_opn] = 0), _opj[_opn] += _opk);
                }), 1 == _oph ? (_op8.kaih += 3 * _op9, _opj[1] > 0 && (_op8.kaih += 1 * _opj[1]), _opj[3] > 0 && (_op8.tyku += 1 * _opj[3]), _opj[5] > 0 && (_op8.houg += 1 * _opj[5]), _opj[7] > 0 && (_op8.kaih += 1 * _opj[7]), _opj[8] > 0 && (_op8.tyku += 1 * _opj[8]), _opj[9] > 0 && (_op8.houg += 1 * _opj[9]), _opj[10] > 0 && (_op8.tyku += 1 * _opj[10])) : 2 == _oph ? (_op8.kaih += 1 * _op9, _opj[2] > 0 && 151 == _op6.ship_id && (_op8.kaih += 1 * _opj[2]), _opj[4] > 0 && (_op8.tyku += 1 * _opj[4]), _opj[6] > 0 && (_op8.houg += 1 * _opj[6]), _opj[8] > 0 && (_op8.kaih += 1 * _opj[8]), _opj[10] > 0 && (_op8.tyku += 1 * _opj[10])) : 3 == _oph && (_opj[5] > 0 && (_op8.kaih += 1 * _opj[5]), _opj[8] > 0 && (_op8.houg += 1 * _opj[8]), _opj[10] > 0 && (_op8.tyku += 1 * _opj[10]));
            }
            if (_opd[_op6.ship_id]) {
                for (var _opo = 0, _opp = 0, _opq = _op6.have_slot_ids(); _opp < _opq.length; _opp++) {
                    var _opr = _opq[_opp],
                        _ops = _op5.default.model.slot.getMst(_opr),
                        _opt = _ops.equipType;
                    12 != _opt && 13 != _opt || (_ops.sakuteki >= 5 && (_opo += _op6.get_slotnums(parseInt(_opr))), _ops.taiku >= 2 && _op6.get_slotnums(parseInt(_opr)));
                }
                0;
                var _opu = _opd[_op6.ship_id];
                1 == _opu && _opo >= 1 ? (_op8.houg += 3, _op8.kaih += 4) : 2 == _opu && _opo >= 1 && (_op8.houg += 2, _op8.kaih += 2);
            }
            if (_ope[_op6.ship_id]) {
                var _opv = _ope[_op6.ship_id],
                    _opw = [],
                    _opx = [],
                    _opy = _op6.have_slot_ids();
                [410, 411].forEach(function(_opz) {
                    var _oq0 = null;
                    _opy.indexOf(_opz.toString()) > -1 && (_opx[_opz] = _op6.get_each_level_nums(_opz), null == _opw[_opz] && (_opw[_opz] = []), _opx[_opz].forEach(function(_oq1, _oq2) {
                        var _oq3 = null;
                        for (var _oq4 = 1; _oq4 <= _op6.SLOT_LEVEL_MAX; _oq4++) null == _opw[_opz][_oq4] && (_opw[_opz][_oq4] = 0), _oq2 >= _oq4 && (_opw[_opz][_oq4] += _oq1);
                    }));
                });
                var _oq5 = _opx[410],
                    _oq6 = _opx[411];
                if (1 == _opv) {
                    if (_oq5) {
                        _op8.tyku += 1;
                        var _oq7 = _opw[410];
                        _oq7[7] >= 1 && (_op8.houg += 1), _oq7[10] >= 1 && (_op8.kaih += 1);
                    }
                    if (_oq6) {
                        _op8.tyku += 2;
                        var _oq8 = _opw[411];
                        _oq8[2] >= 1 && (_op8.houg += 1), _oq8[4] >= 1 && (_op8.kaih += 1), _oq8[6] >= 1 && (_op8.houm += 1), _oq8[8] >= 1 && (_op8.tyku += 1), _oq8[10] >= 1 && (_op8.houg += 1);
                    }
                }
            }
            return _op8;
        };
    },
    86856: function(_oq9, _oqa, _oqb) {
        'use strict';
        var _oqc = null;
        var _oqd = this && this.__importDefault || function(_oqe) {
            var _oqf = null;
            return _oqe && _oqe.__esModule ? _oqe : {
                'default': _oqe
            };
        };
        defineModule(_oqa);
        Object.defineProperty(_oqa, '__esModule', {
            'value': true
        }), _oqa.getSlot503PersonalEffect = void 0;
        var _oqg = _oqb(74496),
            _oqh = _oqd(_oqb(18622));
        _oqa.getSlot503PersonalEffect = function(_oqi) {
            var _oqj = null,
                _oqk = new _oqg.SlotItemEffectModel(),
                _oql = _oqi.get_slotnums(503),
                _oqm = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _oqn = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _oqo = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _oqp = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _oqq = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _oqr = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_oqm[_oqi.ship_id]) {
                var _oqs = _oqm[_oqi.ship_id];
                _oqk.houg += _oql * _oqs;
            }
            if (_oqn[_oqi.ship_id]) {
                var _oqt = _oqn[_oqi.ship_id];
                _oqk.tyku += _oql * _oqt;
            }
            if (_oqo[_oqi.ship_id]) {
                var _oqu = _oqo[_oqi.ship_id],
                    _oqv = _oqi.get_each_level_nums(503),
                    _oqw = [];
                _oqv.forEach(function(_oqx, _oqy) {
                    var _oqz = null;
                    for (var _or0 = 1; _or0 <= _oqi.SLOT_LEVEL_MAX; _or0++) _oqy >= _or0 && (null == _oqw[_or0] && (_oqw[_or0] = 0), _oqw[_or0] += _oqx);
                }), 1 == _oqu ? (_oqk.houm += 2 * _oql, _oqw[1] > 0 && (_oqk.houg += 1 * _oqw[1]), _oqw[2] > 0 && (_oqk.tyku += 1 * _oqw[2]), _oqw[4] > 0 && (_oqk.houm += 1 * _oqw[4]), _oqw[6] > 0 && (_oqk.houg += 1 * _oqw[6]), _oqw[8] > 0 && (_oqk.tyku += 1 * _oqw[8]), _oqw[10] > 0 && (_oqk.houm += 1 * _oqw[10])) : 2 == _oqu ? (_oqk.houm += 1 * _oql, _oqw[2] > 0 && (_oqk.houg += 1 * _oqw[2]), _oqw[4] > 0 && (_oqk.tyku += 1 * _oqw[4]), _oqw[6] > 0 && (_oqk.houm += 1 * _oqw[6]), _oqw[8] > 0 && (_oqk.houg += 1 * _oqw[8]), _oqw[10] > 0 && (_oqk.houm += 1 * _oqw[10])) : 3 == _oqu && (_oqw[4] > 0 && (_oqk.houm += 1 * _oqw[4]), _oqw[7] > 0 && (_oqk.houg += 1 * _oqw[7]), _oqw[10] > 0 && (_oqk.tyku += 1 * _oqw[10]));
            }
            var _or1 = 0;
            _oqp[_oqi.ship_id] && (_or1 = _oqp[_oqi.ship_id]);
            var _or2 = 0;
            _oqr[_oqi.ship_id] && (_or2 = _oqr[_oqi.ship_id]);
            var _or3 = 0,
                _or4 = 0,
                _or5 = _oqi.have_slot_ids();
            if (_or1 + _or2 > 0)
                for (var _or6 = 0, _or7 = _or5; _or6 < _or7.length; _or6++) {
                    var _or8 = _or7[_or6],
                        _or9 = _oqh.default.model.slot.getMst(_or8),
                        _ora = _or9.equipType;
                    12 != _ora && 13 != _ora || (_or9.sakuteki >= 5 && (_or3 += _oqi.get_slotnums(parseInt(_or8))), _or9.taiku >= 2 && _oqi.get_slotnums(parseInt(_or8)), _or9.meichu >= 8 && (_or4 += _oqi.get_slotnums(parseInt(_or8))));
                }
            1 == _or1 ? _or3 >= 1 && (_oqk.houg += 3, _oqk.houm += 3, _oqk.kaih += 2) : 2 == _or1 && _or3 >= 1 && (_oqk.houg += 2, _oqk.houm += 2, _oqk.kaih += 1);
            var _orb = 0,
                _orc = [],
                _ord = [];
            if (_oqq[_oqi.ship_id]) {
                _orb = _oqq[_oqi.ship_id];
                var _ore = _oqi.have_slot_ids();
                [174].forEach(function(_orf) {
                    var _org = null;
                    _ore.indexOf(_orf.toString()) > -1 && (_ord[_orf] = _oqi.get_each_level_nums(_orf), null == _orc[_orf] && (_orc[_orf] = []), _ord[_orf].forEach(function(_orh, _ori) {
                        var _orj = null;
                        for (var _ork = 1; _ork <= _oqi.SLOT_LEVEL_MAX; _ork++) null == _orc[_orf][_ork] && (_orc[_orf][_ork] = 0), _ori >= _ork && (_orc[_orf][_ork] += _orh);
                    }));
                });
            }
            if (_orb > 0) {
                var _orl = _ord[174];
                if (1 == _orb && _orl) {
                    var _orm = _orc[174];
                    _oqk.raig += 4, _orm[6] >= 1 && (_oqk.raig += 1), _orm[8] >= 1 && (_oqk.houm += 1), _orm[10] >= 1 && (_oqk.houg += 1);
                }
            }
            return _or4 > 0 && (_or2 >= 1 && _or2 <= 3 && (_oqk.houg += 2, _oqk.houm += 2, _oqk.kaih += 2), 1 == _or2 ? _oqk.houg += 1 : 3 == _or2 && (_oqk.houg += 2)), _oqk;
        };
    },
    78123: function(_orn, _oro, _orp) {
        'use strict';
        var _orq = null;
        var _orr = this && this.__importDefault || function(_ors) {
            var _ort = null;
            return _ors && _ors.__esModule ? _ors : {
                'default': _ors
            };
        };
        defineModule(_oro);
        Object.defineProperty(_oro, '__esModule', {
            'value': true
        }), _oro.getSlot505PersonalEffect = void 0;
        var _oru = _orp(74496),
            _orv = _orr(_orp(18622));
        _oro.getSlot505PersonalEffect = function(_orw) {
            var _orx = null,
                _ory = new _oru.SlotItemEffectModel(),
                _orz = false,
                _os0 = new _oru.SlotItemEffectModel();
            if (2 == _orw.stype ? (_os0.houg += 1, _os0.tyku += 2, _os0.kaih += 2, _orz = true) : 1 == _orw.stype ? (_os0.houg += 1, _os0.tyku += 1, _os0.kaih += 1, _orz = true) : 3 == _orw.stype || 21 == _orw.stype || 4 == _orw.stype ? (_os0.tyku += 1, _os0.kaih += 2, _orz = true) : 5 != _orw.stype && 6 != _orw.stype && 16 != _orw.stype || (_os0.tyku += 1, _os0.kaih += 1, _orz = true), _orz) {
                var _os1 = _orw.get_slotnums(505);
                _ory.add(_os0.multiply(_os1));
            }
            var _os2 = {
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
                _os3 = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2
                },
                _os4 = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _os2[_orw.ship_id] ? (_ory.houg += 2, _ory.tyku += 3, _ory.kaih += 4) : 2 == _os2[_orw.ship_id] ? (_ory.houg += 1, _ory.tyku += 2, _ory.kaih += 3) : 3 == _os2[_orw.ship_id] ? (_ory.tyku += 2, _ory.kaih += 2) : 4 == _os2[_orw.ship_id] ? (_ory.tyku += 1, _ory.kaih += 2) : 5 == _os2[_orw.ship_id] && (_ory.houg += 1, _ory.tyku += 1, _ory.kaih += 1);
            var _os5 = 0;
            if (_os3[_orw.ship_id] && _os5++, _os4[_orw.ship_id] && _os5++, 0 == _os5) return _ory;
            for (var _os6 = 0, _os7 = 0, _os8 = 0, _os9 = _orw.have_slot_ids(); _os8 < _os9.length; _os8++) {
                var _osa = _os9[_os8],
                    _osb = _orv.default.model.slot.getMst(_osa),
                    _osc = _osb.equipType;
                12 != _osc && 13 != _osc || (_osb.sakuteki >= 5 && (_os6 += _orw.get_slotnums(parseInt(_osa))), _osb.taiku >= 2 && (_os7 += _orw.get_slotnums(parseInt(_osa))));
            }
            var _osd = _os3[_orw.ship_id];
            _os7 > 0 && _osd > 0 && (1 == _osd ? (_ory.houg += 1, _ory.tyku += 2, _ory.kaih += 3) : 2 == _osd && (_ory.tyku += 2, _ory.kaih += 2));
            var _ose = _os4[_orw.ship_id];
            return _os6 > 0 && _ose > 0 && 1 == _ose && (_ory.houg += 1, _ory.kaih += 1), _ory;
        };
    },
    25765: (_osf, _osg, _osh) => {
        'use strict';
        var _osi = null;
        defineModule(_osg);
        Object.defineProperty(_osg, '__esModule', {
            'value': true
        }), _osg.getSlot506PersonalEffect = void 0;
        var _osj = _osh(74496);
        _osg.getSlot506PersonalEffect = function(_osk) {
            var _osl = null,
                _osm = new _osj.SlotItemEffectModel();
            return 961 == _osk.ship_id ? (_osm.houg += 2, _osm.houm += 3, _osm.tyku += 2, _osm.kaih += 4) : 145 == _osk.ship_id || 497 == _osk.ship_id || 656 == _osk.ship_id || 557 == _osk.ship_id || 558 == _osk.ship_id || 951 == _osk.ship_id || 975 == _osk.ship_id ? (_osm.houg += 1, _osm.houm += 2, _osm.tyku += 1, _osm.kaih += 3) : 578 != _osk.ship_id && 419 != _osk.ship_id && 464 != _osk.ship_id && 470 != _osk.ship_id && 407 != _osk.ship_id && 235 != _osk.ship_id && 147 != _osk.ship_id && 538 != _osk.ship_id && 537 != _osk.ship_id && 955 != _osk.ship_id && 960 != _osk.ship_id || (_osm.houg += 1, _osm.houm += 1, _osm.tyku += 1, _osm.kaih += 2), _osm;
        };
    },
    88271: function(_osn, _oso, _osp) {
        'use strict';
        var _osq = null;
        var _osr = this && this.__importDefault || function(_oss) {
            var _ost = null;
            return _oss && _oss.__esModule ? _oss : {
                'default': _oss
            };
        };
        defineModule(_oso);
        Object.defineProperty(_oso, '__esModule', {
            'value': true
        }), _oso.getSlot50PersonalEffect = void 0;
        var _osu = _osp(74496),
            _osv = _osr(_osp(18622));
        _oso.getSlot50PersonalEffect = function(_osw) {
            var _osx = null,
                _osy = new _osu.SlotItemEffectModel(),
                _osz = false,
                _ot0 = new _osu.SlotItemEffectModel();
            7 != _osw.ctype && 13 != _osw.ctype && 8 != _osw.ctype && 29 != _osw.ctype && 9 != _osw.ctype && 31 != _osw.ctype || (_ot0.houg += 1, _osz = true), 8 != _osw.ctype && 29 != _osw.ctype && 9 != _osw.ctype && 31 != _osw.ctype || (_ot0.houg += 1, _ot0.kaih += 1, _osz = true);
            var _ot1 = _osw.get_slotnums(50);
            9 != _osw.ctype && 31 != _osw.ctype || _ot1 >= 2 && (_ot0.houg += 1, _osz = true);
            var _ot2 = 0;
            if (501 != _osw.ship_id && 506 != _osw.ship_id && 502 != _osw.ship_id && 507 != _osw.ship_id || (_ot0.houg += 1, _osz = true, _ot2 = 1), 0 == _osz) return _osy;
            _osy = _ot0.multiply(_ot1);
            for (var _ot3 = 0, _ot4 = 0, _ot5 = _osw.have_slot_ids(); _ot4 < _ot5.length; _ot4++) {
                var _ot6 = _ot5[_ot4],
                    _ot7 = _osv.default.model.slot.getMst(_ot6),
                    _ot8 = _ot7.equipType;
                12 != _ot8 && 13 != _ot8 || _ot7.sakuteki >= 5 && (_ot3 += _osw.get_slotnums(parseInt(_ot6)));
            }
            if (_ot3 > 0) {
                if (7 == _osw.ctype || 13 == _osw.ctype) 0 == _osw.get_slotnums(90) && (_osy.houg += 1, _osy.kaih += 1, _osy.raig += 1);
                else 8 != _osw.ctype && 29 != _osw.ctype && 9 != _osw.ctype && 31 != _osw.ctype || (_osy.houg += 3, _osy.kaih += 2, _osy.raig += 2);
                501 != _osw.ship_id && 506 != _osw.ship_id || (_osy.houg += 1, _osy.kaih += 1);
            }
            var _ot9 = _osw.get_slotnums(30),
                _ota = _osw.get_slotnums(410);
            return 1 == _ot2 && (_ot9 + _ota > 0 && (_osy.houg += 1, _osy.tyku += 3, _osy.kaih += 2), _ota > 0 && (_osy.houg += 2)), _osy;
        };
    },
    28221: (_otb, _otc, _otd) => {
        'use strict';
        var _ote = null;
        defineModule(_otc);
        Object.defineProperty(_otc, '__esModule', {
            'value': true
        }), _otc.getSlot510PersonalEffect = void 0;
        var _otf = _otd(74496);
        _otc.getSlot510PersonalEffect = function(_otg) {
            var _oth = null,
                _oti = new _otf.SlotItemEffectModel(),
                _otj = false,
                _otk = new _otf.SlotItemEffectModel();
            if ('イギリス' == _otg.getCountryName() && (_otk.houg += 2, _otk.tais += 3, _otk.kaih += 2, _otk.saku += 2, _otj = true), 88 == _otg.ctype && (_oti.houg += 4, _oti.kaih += 2, _otk.saku += 3, _otk.houm += 2, _otj = true), 0 == _otj) return _oti;
            var _otl = _otg.get_slotnums(510);
            return _oti.add(_otk.multiply(_otl)), _oti;
        };
    },
    14830: (_otm, _otn, _oto) => {
        'use strict';
        var _otp = null;
        defineModule(_otn);
        Object.defineProperty(_otn, '__esModule', {
            'value': true
        }), _otn.getSlot511PersonalEffect = void 0;
        var _otq = _oto(74496);
        _otn.getSlot511PersonalEffect = function(_otr) {
            var _ots = null,
                _ott = new _otq.SlotItemEffectModel();
            return 122 == _otr.ctype ? (_ott.raig += 3, _ott.kaih += 4) : 114 == _otr.ctype && (_ott.raig += 1, _ott.kaih += 2), _ott;
        };
    },
    54047: (_otu, _otv, _otw) => {
        'use strict';
        var _otx = null;
        defineModule(_otv);
        Object.defineProperty(_otv, '__esModule', {
            'value': true
        }), _otv.getSlot517PersonalEffect = void 0;
        var _oty = _otw(74496);
        _otv.getSlot517PersonalEffect = function(_otz) {
            var _ou0 = null,
                _ou1 = new _oty.SlotItemEffectModel();
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
            }[_otz.ctype] && 74 != _otz.ctype && 77 != _otz.ctype && 85 != _otz.ctype && 117 != _otz.ctype && 104 != _otz.ctype || (_ou1.houm += 1, _ou1.kaih += 1, _ou1.saku += 1), 38 == _otz.ctype && (_ou1.houg += 1, _ou1.houm += 1), 960 == _otz.ship_id ? (_ou1.houg += 2, _ou1.houm += 1, _ou1.kaih += 3, _ou1.saku += 2) : 955 != _otz.ship_id && 578 != _otz.ship_id && 961 != _otz.ship_id && 656 != _otz.ship_id && 464 != _otz.ship_id && 470 != _otz.ship_id && 419 != _otz.ship_id && 407 != _otz.ship_id && 235 != _otz.ship_id && 147 != _otz.ship_id && 975 != _otz.ship_id || (_ou1.houg += 1, _ou1.houm += 1, _ou1.kaih += 2, _ou1.saku += 1);
            for (var _ou2 = [], _ou3 = function(_ou4) {
                    var _ou5 = null,
                        _ou6 = _otz.get_each_level_nums(_ou4);
                    null == _ou2[_ou4] && (_ou2[_ou4] = []), _ou6.forEach(function(_ou7, _ou8) {
                        var _ou9 = null;
                        for (var _oua = 1; _oua <= _otz.SLOT_LEVEL_MAX; _oua++) null == _ou2[_ou4][_oua] && (_ou2[_ou4][_oua] = 0), _ou8 >= _oua && (_ou2[_ou4][_oua] += _ou7);
                    });
                }, _oub = 0, _ouc = [267, 366, 450, 517]; _oub < _ouc.length; _oub++) {
                _ou3(_ouc[_oub]);
            }
            var _oud = _ou2[517];
            return _oud[7] > 0 && (_ou1.houm += 1), _oud[8] > 0 && (_ou1.kaih += 1), _oud[9] > 0 && (_ou1.houg += 1), _oud[10] > 0 && (_ou1.houm += 1), (_ou2[267][3] > 0 || _ou2[366][3] > 0) && (_ou1.houg += 1, _ou1.houm += 1, 38 == _otz.ctype && (_ou1.houg += 1, _ou1.houm += 1), _ou2[450][4] > 0 && (_ou1.houg += 1, _ou1.houm += 1, _ou1.tyku += 4, _ou1.kaih += 3)), _ou1;
        };
    },
    76054: (_oue, _ouf, _oug) => {
        'use strict';
        var _ouh = null;
        defineModule(_ouf);
        Object.defineProperty(_ouf, '__esModule', {
            'value': true
        }), _ouf.getSlot518PersonalEffect = void 0;
        var _oui = _oug(74496);
        _ouf.getSlot518PersonalEffect = function(_ouj) {
            var _ouk = null,
                _oul = new _oui.SlotItemEffectModel(),
                _oum = false,
                _oun = new _oui.SlotItemEffectModel();
            if (34 != _ouj.ctype && 56 != _ouj.ctype || (_oun.houg += 1, _oun.tyku += 1, _oun.tais += 1, _oun.kaih += 1, _oum = true), 16 == _ouj.stype && (_oun.houg += 1, _oun.raig += 1, _oun.kaih += 1, _oum = true), 622 != _ouj.ship_id && 624 != _ouj.ship_id && 623 != _ouj.ship_id || (_oun.houg += 1, _oum = true), 622 != _ouj.ship_id && 624 != _ouj.ship_id || (_oun.tyku += 1, _oum = true), 624 == _ouj.ship_id && (_oun.tais += 2, _oum = true), 0 == _oum) return _oul;
            var _ouo = _ouj.get_slotnums(518);
            return _oul.add(_oun.multiply(_ouo)), _oul;
        };
    },
    93053: (_oup, _ouq, _our) => {
        'use strict';
        var _ous = null;
        defineModule(_ouq);
        Object.defineProperty(_ouq, '__esModule', {
            'value': true
        }), _ouq.getSlot519PersonalEffect = void 0;
        var _out = _our(74496);
        _ouq.getSlot519PersonalEffect = function(_ouu) {
            var _ouv = null,
                _ouw = new _out.SlotItemEffectModel();
            return 122 == _ouu.ctype && (_ouw.houm += 2, _ouw.kaih += 2), 114 == _ouu.ctype && (_ouw.raig += 1, _ouw.houm += 2, _ouw.kaih += 2), _ouw;
        };
    },
    81254: (_oux, _ouy, _ouz) => {
        'use strict';
        var _ov0 = null;
        defineModule(_ouy);
        Object.defineProperty(_ouy, '__esModule', {
            'value': true
        }), _ouy.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _ov1 = _ouz(74496);
        _ouy.getSlot51cmSeriesGunPersonalEffect = function(_ov2) {
            var _ov3 = null,
                _ov4 = new _ov1.SlotItemEffectModel(),
                _ov5 = false,
                _ov6 = new _ov1.SlotItemEffectModel(),
                _ov7 = _ov2.get_slotnums(142),
                _ov8 = _ov2.get_slotnums(460),
                _ov9 = _ov7 + _ov8;
            if (916 != _ov2.ship_id && 911 != _ov2.ship_id && 546 != _ov2.ship_id || (_ov6.houg += 1, _ov6.houm += 1, _ov8 >= 1 && (_ov4.kaih += 1, _ov4.houm += 1), _ov5 = true), 37 == _ov2.ctype && _ov9 >= 1 && (_ov4.houg += 1, _ov4.houm += 2), 0 == _ov5) return _ov4;
            var _ova = _ov2.get_slotnums(128) + _ov2.get_slotnums(281);
            return _ov4.add(_ov6.multiply(_ova)), _ov4;
        };
    },
    88792: (_ovb, _ovc, _ovd) => {
        'use strict';
        var _ove = null;
        defineModule(_ovc);
        Object.defineProperty(_ovc, '__esModule', {
            'value': true
        }), _ovc.getSlot520PersonalEffect = void 0;
        var _ovf = _ovd(74496);
        _ovc.getSlot520PersonalEffect = function(_ovg) {
            var _ovh = null,
                _ovi = new _ovf.SlotItemEffectModel(),
                _ovj = false,
                _ovk = new _ovf.SlotItemEffectModel(),
                _ovl = 0,
                _ovm = 0,
                _ovn = 0,
                _ovo = _ovg.get_slotnums(520);
            7 == _ovg.ctype || 13 == _ovg.ctype ? (_ovk.houg += 1, _ovj = true, _ovm = 1, _ovn = 1) : 8 == _ovg.ctype || 29 == _ovg.ctype ? (_ovk.houg += 2, _ovk.kaih += 1, _ovj = true, _ovm = 2, _ovn = 1) : 9 != _ovg.ctype && 31 != _ovg.ctype || (_ovk.houg += 3, _ovk.kaih += 1, _ovk.houm += 1, _ovj = true, _ovm = 2, _ovn = 1, 2 == _ovo && (_ovi.houg += 2), _ovo >= 3 && (_ovi.houg += 4));
            var _ovp = _ovg.get_have_rader_nums().water_rader,
                _ovq = 0,
                _ovr = 0;
            if (_ovm + _ovn > 0) {
                for (var _ovs = _ovg.getSpItemDict_FukuhouTaikuHeisou(), _ovt = _ovg.getSpItemDict_Tansou21GouDentan(), _ovu = 0, _ovv = _ovg.have_slot_ids(); _ovu < _ovv.length; _ovu++) {
                    var _ovw = _ovv[_ovu],
                        _ovx = parseInt(_ovw);
                    null != _ovs[_ovx] ? (_ovs[_ovx] += _ovg.get_slotnums(_ovx), _ovq += _ovg.get_slotnums(_ovx)) : null != _ovt[_ovx] && (_ovt[_ovx] += _ovg.get_slotnums(_ovx), _ovr += _ovg.get_slotnums(_ovx));
                }
                _ovp > 0 && (1 == _ovm ? (_ovi.houg += 2, _ovi.raig += 2, _ovi.kaih += 1, _ovi.houm += 1) : 2 == _ovm && (_ovi.houg += 3, _ovi.raig += 2, _ovi.kaih += 2, _ovi.houm += 1)), _ovq > 0 && 1 == _ovn && (_ovi.houg += 1, _ovi.tyku += 4, _ovi.kaih += 4, _ovi.houm += 1);
            }
            if (269 == _ovg.ship_id || 265 == _ovg.ship_id || 319 == _ovg.ship_id ? (2 == _ovo && (_ovi.houg += 2), _ovo >= 3 && (_ovi.houg += 4)) : 501 != _ovg.ship_id && 506 != _ovg.ship_id && 502 != _ovg.ship_id && 507 != _ovg.ship_id && 503 != _ovg.ship_id && 504 != _ovg.ship_id || (_ovk.houg += 1, _ovj = true, _ovp >= 1 && (_ovi.houg += 1, _ovi.kaih += 1, _ovi.houm += 2), _ovr >= 1 && (_ovi.houg += 1, _ovi.tyku += 3, _ovi.kaih += 2, _ovi.houm += 1), _ovg.get_slotnums(410) > 0 && (_ovi.houg += 2, _ovi.tyku += 3, _ovi.kaih += 2, _ovi.houm += 1), _ovl = 1), 502 == _ovg.ship_id || 269 == _ovg.ship_id || 265 == _ovg.ship_id || 319 == _ovg.ship_id ? (_ovk.houg += 1, _ovk.houm += 1, _ovj = true) : 507 == _ovg.ship_id && (_ovk.houg += 1, _ovk.houm += 2, _ovk.tyku += 1, _ovj = true), _ovj && _ovi.add(_ovk.multiply(_ovo)), 0 == _ovl) return _ovi;
            var _ovy = _ovg.get_each_level_over_nums([520]),
                _ovz = _ovy.slot[520][7],
                _ow0 = _ovy.slot[520][10];
            return 1 == _ovl && (_ovz > 0 && (_ovi.houg += 1 * _ovz), _ow0 > 0 && (_ovi.houm += 1 * _ow0)), _ovi;
        };
    },
    33242: (_ow1, _ow2, _ow3) => {
        'use strict';
        var _ow4 = null;
        defineModule(_ow2);
        Object.defineProperty(_ow2, '__esModule', {
            'value': true
        }), _ow2.getSlot521PersonalEffect = void 0;
        var _ow5 = _ow3(74496);
        _ow2.getSlot521PersonalEffect = function(_ow6) {
            var _ow7 = null,
                _ow8 = new _ow5.SlotItemEffectModel(),
                _ow9 = false,
                _owa = new _ow5.SlotItemEffectModel(),
                _owb = 0;
            if (52 == _ow6.ctype && (_owb = 1), 183 == _ow6.ship_id ? (_owa.houg += 1, _owa.houm += 1, _owa.saku += 2, _owa.kaih += 2, _ow9 = true) : 321 == _ow6.ship_id ? (_owa.houg += 2, _owa.houm += 2, _owa.saku += 3, _owa.kaih += 3, _ow9 = true) : 507 == _ow6.ship_id && (_owa.houg += 3, _owa.tyku += 1, _owa.houm += 3, _owa.saku += 2, _owa.kaih += 2, _ow9 = true, _owb = 1), _ow9) {
                var _owc = _ow6.get_slotnums(521);
                _ow8.add(_owa.multiply(_owc));
            }
            if (0 == _owb) return _ow8;
            var _owd = _ow6.get_each_level_over_nums([521]).slot[521];
            return 1 == _owb && (_owd[1] >= 1 && (_ow8.houm += 1 * _owd[1]), _owd[2] >= 1 && (_ow8.kaih += 1 * _owd[2]), _owd[3] >= 1 && (_ow8.saku += 1 * _owd[3], _ow8.raig += 1 * _owd[3]), _owd[4] >= 1 && (_ow8.houg += 1 * _owd[4]), _owd[6] >= 1 && (_ow8.houm += 1 * _owd[6]), _owd[8] >= 1 && (_ow8.saku += 1 * _owd[8]), _owd[10] >= 1 && (_ow8.houm += 1 * _owd[10])), _ow8;
        };
    },
    3296: (_owe, _owf, _owg) => {
        'use strict';
        var _owh = null;
        defineModule(_owf);
        Object.defineProperty(_owf, '__esModule', {
            'value': true
        }), _owf.getSlot522_523PersonalEffect = void 0;
        var _owi = _owg(74496);
        _owf.getSlot522_523PersonalEffect = function(_owj) {
            var _owk = null,
                _owl = new _owi.SlotItemEffectModel(),
                _owm = false,
                _own = new _owi.SlotItemEffectModel(),
                _owo = 0,
                _owp = _owj.get_slotnums(522),
                _owq = _owj.get_slotnums(523),
                _owr = _owp + _owq;
            if (14 == _owj.stype && (_own.raig += 1, _own.kaih += 5, _own.houm += 1, _own.saku += 3, _owm = true, _owq >= 1 && (_owl.raig += 2 * _owq, _owl.baku += 2 * _owq, _owl.kaih += 1 * _owq, _owl.houm += 1 * _owq, _owl.saku += 1 * _owq), _owo = 1), 0 == _owm) return _owl;
            if (_owl.add(_own.multiply(_owr)), 0 == _owo) return _owl;
            var _ows = _owj.get_each_level_over_nums([522, 523]),
                _owt = _ows.slot[522],
                _owu = _ows.slot[523];
            if (1 == _owo) {
                if (_owt[1] >= 1 || _owu[1] >= 1) {
                    var _owv = _owt[1] + _owu[1];
                    _owl.raig += 1 * _owv;
                }
                if (_owt[2] >= 1 || _owu[2] >= 1) {
                    var _oww = _owt[2] + _owu[2];
                    _owl.houm += 1 * _oww;
                }
                if (_owt[3] >= 1 || _owu[3] >= 1) {
                    var _owx = _owt[3] + _owu[3];
                    _owl.kaih += 1 * _owx;
                }
                if (_owt[5] >= 1 || _owu[5] >= 1) {
                    var _owy = _owt[5] + _owu[5];
                    _owl.saku += 1 * _owy;
                }
                if (_owt[8] >= 1 || _owu[8] >= 1) {
                    var _owz = _owt[8] + _owu[8];
                    _owl.houm += 1 * _owz;
                }
                if (_owt[10] >= 1 || _owu[10] >= 1) {
                    var _ox0 = _owt[10] + _owu[10];
                    _owl.kaih += 1 * _ox0;
                }
            }
            return _owl;
        };
    },
    59415: (_ox1, _ox2, _ox3) => {
        'use strict';
        var _ox4 = null;
        defineModule(_ox2);
        Object.defineProperty(_ox2, '__esModule', {
            'value': true
        }), _ox2.getSlot524PersonalEffect = void 0;
        var _ox5 = _ox3(74496);
        _ox2.getSlot524PersonalEffect = function(_ox6) {
            var _ox7 = null,
                _ox8 = new _ox5.SlotItemEffectModel(),
                _ox9 = false,
                _oxa = new _ox5.SlotItemEffectModel(),
                _oxb = 0,
                _oxc = 0;
            if (17 != _ox6.stype && 19 != _ox6.stype && 20 != _ox6.stype && 21 != _ox6.stype && 22 != _ox6.stype || (_oxa.houg += 1, _oxa.tyku += 2, _oxa.kaih += 2, _oxa.houm += 1, _ox9 = true, _oxb = 1, _oxc = 1), 0 == _ox9) return _ox8;
            var _oxd = _ox6.get_slotnums(524);
            _ox8.add(_oxa.multiply(_oxd));
            var _oxe = _ox6.get_have_rader_nums().air_rader;
            if (1 == _oxc && _oxe >= 1 && (_ox8.tyku += 2, _ox8.kaih += 2), 0 == _oxb) return _ox8;
            var _oxf = _ox6.get_each_level_over_nums([524]).slot[524];
            return 1 == _oxb && (_oxf[1] >= 1 && (_ox8.kaih += 1 * _oxf[1]), _oxf[2] >= 1 && (_ox8.kaih += 1 * _oxf[2]), _oxf[4] >= 1 && (_ox8.tyku += 1 * _oxf[4]), _oxf[6] >= 1 && (_ox8.kaih += 1 * _oxf[6]), _oxf[7] >= 1 && (_ox8.houm += 1 * _oxf[7]), _oxf[8] >= 1 && (_ox8.tyku += 1 * _oxf[8]), _oxf[9] >= 1 && (_ox8.kaih += 1 * _oxf[9]), _oxf[10] >= 1 && (_ox8.houg += 1 * _oxf[10])), _ox8;
        };
    },
    36731: (_oxg, _oxh, _oxi) => {
        'use strict';
        var _oxj = null;
        defineModule(_oxh);
        Object.defineProperty(_oxh, '__esModule', {
            'value': true
        }), _oxh.getSlot527PersonalEffect = void 0;
        var _oxk = _oxi(74496);
        _oxh.getSlot527PersonalEffect = function(_oxl) {
            var _oxm = null,
                _oxn = new _oxk.SlotItemEffectModel(),
                _oxo = 0;
            if ('イギリス' == _oxl.getCountryName() && (_oxo = 1, _oxn.tyku += 2, _oxn.houm += 1, _oxn.kaih += 1, _oxn.saku += 2, 88 == _oxl.ctype && (_oxn.houg += 2), 67 == _oxl.ctype && (_oxn.houg += 1)), 0 == _oxo) return _oxn;
            var _oxp = _oxl.get_each_level_over_nums([527]),
                _oxq = _oxp.slot[527][2],
                _oxr = _oxp.slot[527][4],
                _oxs = _oxp.slot[527][7],
                _oxt = _oxp.slot[527][10];
            return 1 == _oxo && (_oxq >= 1 && (_oxn.tyku += 1), _oxr >= 1 && (_oxn.kaih += 1), _oxs >= 1 && (_oxn.tyku += 1), _oxt >= 1 && (_oxn.houm += 1)), _oxn;
        };
    },
    30450: (_oxu, _oxv, _oxw) => {
        'use strict';
        var _oxx = null;
        defineModule(_oxv);
        Object.defineProperty(_oxv, '__esModule', {
            'value': true
        }), _oxv.getSlot528PersonalEffect = void 0;
        var _oxy = _oxw(74496);
        _oxv.getSlot528PersonalEffect = function(_oxz) {
            var _oy0 = null,
                _oy1 = new _oxy.SlotItemEffectModel(),
                _oy2 = false,
                _oy3 = new _oxy.SlotItemEffectModel(),
                _oy4 = 0;
            if ('イギリス' == _oxz.getCountryName() && (_oy3.houg += 1, _oy3.houm += 2, _oy3.kaih += 1, 108 == _oxz.ctype && (_oy3.houg += 1, _oy3.kaih += 1), _oy2 = true, _oy4 = 1), 0 == _oy2) return _oy1;
            var _oy5 = _oxz.get_slotnums(528);
            if (_oy1.add(_oy3.multiply(_oy5)), 0 == _oy4) return _oy1;
            var _oy6 = _oxz.get_each_level_over_nums([528]),
                _oy7 = _oy6.slot[528][2],
                _oy8 = _oy6.slot[528][4],
                _oy9 = _oy6.slot[528][7],
                _oya = _oy6.slot[528][10];
            return 1 == _oy4 && (_oy7 >= 1 && (_oy1.houg += 1 * _oy7), _oy8 >= 1 && (_oy1.houm += 1 * _oy8), _oy9 >= 1 && (_oy1.kaih += 1 * _oy9), _oya >= 1 && (_oy1.houm += 1 * _oya)), _oy1;
        };
    },
    15653: (_oyb, _oyc, _oyd) => {
        'use strict';
        var _oye = null;
        defineModule(_oyc);
        Object.defineProperty(_oyc, '__esModule', {
            'value': true
        }), _oyc.getSlot530PersonalEffect = void 0;
        var _oyf = _oyd(74496);
        _oyc.getSlot530PersonalEffect = function(_oyg) {
            var _oyh = null,
                _oyi = new _oyf.SlotItemEffectModel(),
                _oyj = false;
            if (6 == _oyg.ctype && (_oyj = true), 0 == _oyj) return _oyi;
            var _oyk = false,
                _oyl = new _oyf.SlotItemEffectModel(),
                _oym = _oyg.get_slotnums(530),
                _oyn = _oyg.get_slotnums(174),
                _oyo = _oyg.get_each_level_over_nums([530, 174]),
                _oyp = _oyo.slot[530],
                _oyq = _oyo.slot[174],
                _oyr = _oyg.get_have_rader_nums(),
                _oys = _oyr.water_rader,
                _oyt = _oyr.high_water_rader;
            return _oyr.air_rader, 149 != _oyg.ship_id && 150 != _oyg.ship_id && 151 != _oyg.ship_id && 152 != _oyg.ship_id && 593 != _oyg.ship_id || (_oyl.houg += 2, _oyk = true), 591 != _oyg.ship_id && 954 != _oyg.ship_id || (_oyl.houg += 3, _oyk = true), 592 == _oyg.ship_id && (_oyl.houg += 4, _oyk = true), 149 != _oyg.ship_id && 150 != _oyg.ship_id && 151 != _oyg.ship_id && 152 != _oyg.ship_id || (_oyl.tyku += 1, _oyk = true), 591 != _oyg.ship_id && 592 != _oyg.ship_id && 954 != _oyg.ship_id || (_oyl.tyku += 2, _oyk = true), 593 == _oyg.ship_id && (_oyl.tyku += 3, _oyk = true), 592 == _oyg.ship_id && (_oyl.houg += 1, _oyl.houm += 2, _oyk = true, _oyp[2] >= 1 && (_oyi.houm += 1 * _oyp[2]), _oyp[4] >= 1 && (_oyi.houg += 1 * _oyp[4]), _oyp[6] >= 1 && (_oyi.souk += 1 * _oyp[6]), _oyp[7] >= 1 && (_oyi.houm += 1 * _oyp[7]), _oyp[8] >= 1 && (_oyi.houg += 1 * _oyp[8]), _oyp[9] >= 1 && (_oyi.souk += 1 * _oyp[9]), _oyp[10] >= 1 && (_oyi.houm += 1 * _oyp[10])), 150 != _oyg.ship_id && 152 != _oyg.ship_id && 591 != _oyg.ship_id && 954 != _oyg.ship_id || (_oyl.houm += 1, _oyk = true, _oyp[2] >= 1 && (_oyi.houg += 1 * _oyp[2]), _oyp[4] >= 1 && (_oyi.souk += 1 * _oyp[4]), _oyp[6] >= 1 && (_oyi.houm += 1 * _oyp[6]), _oyp[8] >= 1 && (_oyi.houg += 1 * _oyp[8]), _oyp[10] >= 1 && (_oyi.houm += 1 * _oyp[10])), 149 != _oyg.ship_id && 151 != _oyg.ship_id && 593 != _oyg.ship_id || (_oyp[4] >= 1 && (_oyi.houg += 1 * _oyp[4]), _oyp[7] >= 1 && (_oyi.souk += 1 * _oyp[7]), _oyp[10] >= 1 && (_oyi.houm += 1 * _oyp[10])), 592 == _oyg.ship_id && (_oys >= 1 && (_oyi.houg += 3, _oyi.houm += 3, _oyi.kaih += 3, 592 == _oyg.ship_id && (_oyi.houg += 3)), _oym >= 2 && (_oyi.houm += 2), _oym >= 3 && (_oyi.houm += 2), _oym >= 4 && (_oyi.houm += 2), _oyt >= 1 && (_oyi.houm += 1)), 149 != _oyg.ship_id && 150 != _oyg.ship_id && 151 != _oyg.ship_id && 152 != _oyg.ship_id && 591 != _oyg.ship_id && 954 != _oyg.ship_id && 593 != _oyg.ship_id || (_oys >= 1 && (_oyi.houg += 2, _oyi.houm += 2, _oyi.kaih += 2, 591 == _oyg.ship_id || 152 == _oyg.ship_id ? _oyi.houg += 3 : 954 == _oyg.ship_id || 150 == _oyg.ship_id ? _oyi.houg += 2 : 149 != _oyg.ship_id && 151 != _oyg.ship_id && 593 != _oyg.ship_id || (_oyi.houg += 1)), _oyt >= 1 && (_oyi.houm += 1)), 591 != _oyg.ship_id && 592 != _oyg.ship_id && 593 != _oyg.ship_id && 954 != _oyg.ship_id || (_oyn >= 1 && (_oyi.raig += 6, _oyq[6] >= 1 && (_oyi.raig += 1), _oyq[8] >= 1 && (_oyi.houm += 1), _oyq[10] >= 1 && (_oyi.houg += 1)), _oyt >= 1 && (_oyi.houg += 2, _oyi.raig += 2, _oyi.houm += 2, _oyi.kaih += 3, 591 == _oyg.ship_id || 592 == _oyg.ship_id ? _oyi.houg += 2 : 954 != _oyg.ship_id && 593 != _oyg.ship_id || (_oyi.houg += 1)), _oym >= 2 && (_oyi.houm += 1)), _oyk && _oyi.add(_oyl.multiply(_oym)), _oyi;
        };
    },
    25851: (_oyu, _oyv, _oyw) => {
        'use strict';
        var _oyx = null;
        defineModule(_oyv);
        Object.defineProperty(_oyv, '__esModule', {
            'value': true
        }), _oyv.getSlot531PersonalEffect = void 0;
        var _oyy = _oyw(74496);
        _oyv.getSlot531PersonalEffect = function(_oyz) {
            var _oz0 = null,
                _oz1 = new _oyy.SlotItemEffectModel(),
                _oz2 = _oyz.have_level_num_over_dict[531];
            return null == _oz2 || (_oz2[4] >= 1 && (_oz1.houm += 1 * _oz2[4]), _oz2[5] >= 1 && (_oz1.houg += 1 * _oz2[5]), _oz2[6] >= 1 && (_oz1.kaih += 1 * _oz2[6]), _oz2[7] >= 1 && (_oz1.houm += 1 * _oz2[7]), _oz2[8] >= 1 && (_oz1.houg += 1 * _oz2[8]), _oz2[9] >= 1 && (_oz1.kaih += 1 * _oz2[9]), _oz2[10] >= 1 && (_oz1.houm += 1 * _oz2[10])), _oz1;
        };
    },
    91275: (_oz3, _oz4, _oz5) => {
        'use strict';
        var _oz6 = null;
        defineModule(_oz4);
        Object.defineProperty(_oz4, '__esModule', {
            'value': true
        }), _oz4.getSlot538PersonalEffect = void 0;
        var _oz7 = _oz5(74496);
        _oz4.getSlot538PersonalEffect = function(_oz8) {
            var _oz9 = null,
                _oza = new _oz7.SlotItemEffectModel(),
                _ozb = false,
                _ozc = new _oz7.SlotItemEffectModel(),
                _ozd = 0;
            if ('フランス' == _oz8.getCountryName() && (_ozc.houg += 3, _ozc.kaih += 2, _ozc.houm += 2, _ozb = true, _ozd = 1), 79 == _oz8.ctype ? (_ozc.houg += 2, 969 == _oz8.ship_id && (_ozc.houg += 1, _ozc.houm += 1, _ozc.kaih += 1), _ozb = true) : 70 == _oz8.ctype && (_ozc.houg += 1, _ozc.houm += 1, _ozc.tyku += 2, _ozc.kaih += 2, _ozb = true), 0 == _ozb) return _oza;
            var _oze = _oz8.get_slotnums(538);
            if (_oza.add(_ozc.multiply(_oze)), 0 == _ozd) return _oza;
            var _ozf = _oz8.haveSlotLevelNumOver(538);
            return 1 == _ozd && (_ozf[3] >= 1 && (_oza.kaih += 1 * _ozf[3]), _ozf[4] >= 1 && (_oza.houm += 1 * _ozf[4]), _ozf[5] >= 1 && (_oza.houg += 1 * _ozf[5]), _ozf[6] >= 1 && (_oza.kaih += 1 * _ozf[6]), _ozf[7] >= 1 && (_oza.houm += 1 * _ozf[7]), _ozf[8] >= 1 && (_oza.houg += 1 * _ozf[8]), _ozf[9] >= 1 && (_oza.kaih += 1 * _ozf[9]), _ozf[10] >= 1 && (_oza.houg += 1 * _ozf[10], _oza.houm += 1 * _ozf[10])), _oza;
        };
    },
    23035: (_ozg, _ozh, _ozi) => {
        'use strict';
        var _ozj = null;
        defineModule(_ozh);
        Object.defineProperty(_ozh, '__esModule', {
            'value': true
        }), _ozh.getSlot58PersonalEffect = void 0;
        var _ozk = _ozi(74496);
        _ozh.getSlot58PersonalEffect = function(_ozl) {
            var _ozm = null,
                _ozn = new _ozk.SlotItemEffectModel(),
                _ozo = new _ozk.SlotItemEffectModel();
            if ('しまかぜ' != _ozl.yomi && 4 != _ozl.stype && 54 != _ozl.ctype || (_ozo.raig = 1), !_ozo.exists()) return _ozn;
            var _ozp = _ozl.get_slotnums(58);
            return _ozn = _ozo.multiply(_ozp);
        };
    },
    47169: (_ozq, _ozr, _ozs) => {
        'use strict';
        var _ozt = null;
        defineModule(_ozr);
        Object.defineProperty(_ozr, '__esModule', {
            'value': true
        }), _ozr.getSlot59PersonalEffect = void 0;
        var _ozu = _ozs(74496);
        _ozr.getSlot59PersonalEffect = function(_ozv) {
            var _ozw = null,
                _ozx = new _ozu.SlotItemEffectModel();
            return 501 != _ozv.ship_id && 506 != _ozv.ship_id && 502 != _ozv.ship_id && 507 != _ozv.ship_id || (_ozx.tyku += 1, _ozx.kaih += 1), _ozx;
        };
    },
    87845: (_ozy, _ozz, _p00) => {
        'use strict';
        var _p01 = null;
        defineModule(_ozz);
        Object.defineProperty(_ozz, '__esModule', {
            'value': true
        }), _ozz.getSlot5PersonalEffect = void 0;
        var _p02 = _p00(74496);
        _ozz.getSlot5PersonalEffect = function(_p03) {
            var _p04 = null,
                _p05 = new _p02.SlotItemEffectModel(),
                _p06 = false,
                _p07 = new _p02.SlotItemEffectModel();
            if (52 != _p03.ctype && 9 != _p03.ctype || (_p07.houg += 1, 52 == _p03.ctype && (_p07.houg = _p07.houg + 1), _p06 = true), 0 == _p06) return _p05;
            var _p08 = _p03.get_slotnums(5);
            return _p05.add(_p07.multiply(_p08)), _p05;
        };
    },
    92253: (_p09, _p0a, _p0b) => {
        'use strict';
        var _p0c = null;
        defineModule(_p0a);
        Object.defineProperty(_p0a, '__esModule', {
            'value': true
        }), _p0a.getSlot60_154_219PersonalEffec = void 0;
        var _p0d = _p0b(74496);
        _p0a.getSlot60_154_219PersonalEffec = function(_p0e) {
            var _p0f = null,
                _p0g = new _p0d.SlotItemEffectModel(),
                _p0h = false,
                _p0i = new _p0d.SlotItemEffectModel();
            if ('じゅんよう' != _p0e.yomi && 'ひよう' != _p0e.yomi && 'ずいほう' != _p0e.yomi && 'ちとせ' != _p0e.yomi && 'ちよだ' != _p0e.yomi || (_p0i.houg += 1, _p0i.tyku += 1, _p0i.kaih += 1, _p0h = true), 185 != _p0e.ship_id && 318 != _p0e.ship_id && 282 != _p0e.ship_id || (_p0i.houg += 1, _p0i.tyku += 1, _p0i.kaih += 1, _p0h = true), 888 != _p0e.ship_id && 883 != _p0e.ship_id || (_p0i.houg += 2, _p0i.tyku += 1, _p0i.kaih += 2, _p0h = true), 0 == _p0h) return _p0g;
            var _p0j = _p0e.get_slotnums(60) + _p0e.get_slotnums(154) + _p0e.get_slotnums(219);
            return _p0g.add(_p0i.multiply(_p0j)), _p0g;
        };
    },
    2578: (_p0k, _p0l, _p0m) => {
        'use strict';
        var _p0n = null;
        defineModule(_p0l);
        Object.defineProperty(_p0l, '__esModule', {
            'value': true
        }), _p0l.getSlot61PersonalEffect2 = _p0l.getSlot61PersonalEffect = void 0;
        var _p0o = _p0m(74496);
        _p0l.getSlot61PersonalEffect = function(_p0p) {
            var _p0q = null,
                _p0r = new _p0o.SlotItemEffectModel();
            if (553 == _p0p.ship_id) _p0r.houg = 3, _p0r.kaih = 2, _p0r.souk = 1, _p0r.houm = 5, _p0r.leng = 1;
            else {
                if (554 == _p0p.ship_id) _p0r.houg = 3, _p0r.kaih = 3, _p0r.souk = 3, _p0r.houm = 5, _p0r.leng = 1;
                else {
                    if (196 == _p0p.ship_id) _p0r.houm = 5, _p0r.leng = 1;
                    else {
                        if (197 != _p0p.ship_id) return _p0r;
                        _p0r.houm = 5, _p0r.leng = 1;
                    }
                }
            }
            return _p0r;
        }, _p0l.getSlot61PersonalEffect2 = function(_p0s) {
            var _p0t = null,
                _p0u = new _p0o.SlotItemEffectModel();
            if (null == _p0s.have_slots_dict[61]) return _p0u;
            for (var _p0v = 0, _p0w = 0, _p0x = _p0s.have_slots_dict[61]; _p0w < _p0x.length; _p0w++) {
                var _p0y = _p0x[_p0w].level;
                _p0v < _p0y && (_p0v = _p0y);
            }
            return 0 == _p0v || ('そうりゅう' == _p0s.yomi ? (_p0u.houg += 3, _p0u.saku += 3) : 'ひりゅう' == _p0s.yomi && (_p0u.houg += 2, _p0u.saku += 2), 508 != _p0s.ship_id && 509 != _p0s.ship_id && 560 != _p0s.ship_id || (_p0u.houg += 1, _p0u.saku += 1), _p0v >= 8 && 197 == _p0s.ship_id && (_p0u.houg += 1, _p0u.saku += 1)), _p0u;
        };
    },
    17143: (_p0z, _p10, _p11) => {
        'use strict';
        var _p12 = null;
        defineModule(_p10);
        Object.defineProperty(_p10, '__esModule', {
            'value': true
        }), _p10.getSlot63PersonalEffect = void 0;
        var _p13 = _p11(74496);
        _p10.getSlot63PersonalEffect = function(_p14) {
            var _p15 = null,
                _p16 = new _p13.SlotItemEffectModel(),
                _p17 = new _p13.SlotItemEffectModel();
            1 != _p14.ctype && 5 != _p14.ctype && 10 != _p14.ctype || (_p17.tyku += 1), 'ゆうだち' == _p14.yomi && (_p17.houg += 1, _p17.tyku += 1, _p17.kaih += 2), 145 == _p14.ship_id || 961 == _p14.ship_id ? _p17.houg += 1 : 144 == _p14.ship_id ? _p17.raig += 1 : 469 == _p14.ship_id ? _p17.kaih += 2 : 242 == _p14.ship_id || 497 == _p14.ship_id || 244 == _p14.ship_id || 498 == _p14.ship_id || 975 == _p14.ship_id ? _p17.kaih += 1 : 627 == _p14.ship_id ? _p17.houg += 1 : 903 != _p14.ship_id && 908 != _p14.ship_id || (_p17.houg += 2);
            var _p18 = true;
            if (_p17.exists() || (_p18 = false), 0 == _p18) return _p16;
            var _p19 = _p14.get_slotnums(63);
            return _p16 = _p17.multiply(_p19);
        };
    },
    16164: (_p1a, _p1b, _p1c) => {
        'use strict';
        var _p1d = null;
        defineModule(_p1b);
        Object.defineProperty(_p1b, '__esModule', {
            'value': true
        }), _p1b.getSlot67PersonalEffect = void 0;
        var _p1e = _p1c(74496);
        _p1b.getSlot67PersonalEffect = function(_p1f) {
            var _p1g = null,
                _p1h = new _p1e.SlotItemEffectModel(),
                _p1i = new _p1e.SlotItemEffectModel();
            if (13 != _p1f.stype && 14 != _p1f.stype && (_p1i.raig = -5), !_p1i.exists()) return _p1h;
            var _p1j = _p1f.get_slotnums(67);
            return _p1h = _p1i.multiply(_p1j);
        };
    },
    35023: (_p1k, _p1l, _p1m) => {
        'use strict';
        var _p1n = null;
        defineModule(_p1l);
        Object.defineProperty(_p1l, '__esModule', {
            'value': true
        }), _p1l.getSlot69PersonalEffect = void 0;
        var _p1o = _p1m(74496);
        _p1l.getSlot69PersonalEffect = function(_p1p) {
            var _p1q = null,
                _p1r = new _p1o.SlotItemEffectModel(),
                _p1s = false,
                _p1t = new _p1o.SlotItemEffectModel();
            if (554 == _p1p.ship_id || 646 == _p1p.ship_id ? (_p1t.houg += 1, _p1t.tais += 2, _p1s = true) : 553 == _p1p.ship_id && (_p1t.houg += 1, _p1t.tais += 1, _p1s = true), 0 == _p1s) return _p1r;
            var _p1u = _p1p.get_slotnums(69);
            return _p1r.add(_p1t.multiply(_p1u)), _p1r;
        };
    },
    78707: (_p1v, _p1w, _p1x) => {
        'use strict';
        var _p1y = null;
        defineModule(_p1w);
        Object.defineProperty(_p1w, '__esModule', {
            'value': true
        }), _p1w.getSlot70PersonalEffect = void 0;
        var _p1z = _p1x(74496);
        _p1w.getSlot70PersonalEffect = function(_p20) {
            var _p21 = null,
                _p22 = new _p1z.SlotItemEffectModel(),
                _p23 = false,
                _p24 = new _p1z.SlotItemEffectModel();
            if ('やましおまる' == _p20.yomi && (_p24.houg += 1, _p24.tais += 1, _p23 = true), 0 == _p23) return _p22;
            var _p25 = _p20.get_slotnums(70);
            return _p22.add(_p24.multiply(_p25)), _p22;
        };
    },
    44680: function(_p26, _p27, _p28) {
        'use strict';
        var _p29 = null;
        var _p2a = this && this.__importDefault || function(_p2b) {
            var _p2c = null;
            return _p2b && _p2b.__esModule ? _p2b : {
                'default': _p2b
            };
        };
        defineModule(_p27);
        Object.defineProperty(_p27, '__esModule', {
            'value': true
        }), _p27.getSlot78PersonalEffect = void 0;
        var _p2d = _p28(74496),
            _p2e = _p2a(_p28(18622));
        _p27.getSlot78PersonalEffect = function(_p2f) {
            var _p2g = null,
                _p2h = new _p2d.SlotItemEffectModel(),
                _p2i = false,
                _p2j = new _p2d.SlotItemEffectModel(),
                _p2k = 0,
                _p2l = 0,
                _p2m = false;
            if (48 == _p2f.ctype && (_p2j.houg += 1, _p2j.kaih += 1, _p2k = 1, _p2l = 1, _p2m = true, _p2i = true), 0 == _p2i) return _p2h;
            var _p2n = _p2f.get_slotnums(78);
            _p2h.add(_p2j.multiply(_p2n));
            var _p2o = 0,
                _p2p = _p2f.get_each_level_nums(78),
                _p2q = 0;
            if (_p2m) {
                _p2p.map(function(_p2r, _p2s) {
                    _p2s >= 7 && (_p2q += _p2r);
                });
                for (var _p2t = 0, _p2u = _p2f.have_slot_ids(); _p2t < _p2u.length; _p2t++) {
                    var _p2v = _p2u[_p2t],
                        _p2w = _p2e.default.model.slot.getMst(_p2v),
                        _p2x = _p2w.equipType;
                    12 != _p2x && 13 != _p2x || _p2w.sakuteki >= 5 && (_p2o += _p2f.get_slotnums(parseInt(_p2v)));
                }
            }
            if (1 == _p2k && _p2o > 0 && (_p2h.houg += 2, _p2h.kaih += 2, _p2h.raig += 2), 1 == _p2l) {
                _p2h.houg += 1 * _p2q;
                var _p2y = _p2p[10];
                _p2h.souk += 1 * _p2y;
            }
            return _p2h;
        };
    },
    45749: (_p2z, _p30, _p31) => {
        'use strict';
        var _p32 = null;
        defineModule(_p30);
        Object.defineProperty(_p30, '__esModule', {
            'value': true
        }), _p30.getSlot79And81PersonalEffect = void 0;
        var _p33 = _p31(74496);
        _p30.getSlot79And81PersonalEffect = function(_p34) {
            var _p35 = null,
                _p36 = new _p33.SlotItemEffectModel(),
                _p37 = new _p33.SlotItemEffectModel();
            if (553 == _p34.ship_id) _p37.houg = 3;
            else {
                if (82 == _p34.ship_id) _p37.houg = 2;
                else {
                    if (88 == _p34.ship_id) _p37.houg = 2;
                    else {
                        if (554 == _p34.ship_id) _p37.houg = 3;
                        else {
                            if (411 == _p34.ship_id) _p37.houg = 2;
                            else {
                                if (412 != _p34.ship_id) return _p36;
                                _p37.houg = 2;
                            }
                        }
                    }
                }
            }
            var _p38 = _p34.get_slotnums(79) + _p34.get_slotnums(81);
            return _p36 = _p37.multiply(_p38);
        };
    },
    37334: (_p39, _p3a, _p3b) => {
        'use strict';
        var _p3c = null;
        defineModule(_p3a);
        Object.defineProperty(_p3a, '__esModule', {
            'value': true
        }), _p3a.getSlot82PersonalEffect = void 0;
        var _p3d = _p3b(74496);
        _p3a.getSlot82PersonalEffect = function(_p3e) {
            var _p3f = null,
                _p3g = new _p3d.SlotItemEffectModel(),
                _p3h = new _p3d.SlotItemEffectModel();
            if (76 == _p3e.ctype && (_p3h.tais = 1, _p3h.kaih = 1), !_p3h.exists()) return _p3g;
            var _p3i = _p3e.get_slotnums(82);
            return _p3g = _p3h.multiply(_p3i);
        };
    },
    2603: function(_p3j, _p3k, _p3l) {
        'use strict';
        var _p3m = null;
        var _p3n = this && this.__importDefault || function(_p3o) {
            var _p3p = null;
            return _p3o && _p3o.__esModule ? _p3o : {
                'default': _p3o
            };
        };
        defineModule(_p3k);
        Object.defineProperty(_p3k, '__esModule', {
            'value': true
        }), _p3k.getSlot84PersonalEffect = void 0;
        var _p3q = _p3l(74496),
            _p3r = _p3n(_p3l(18622));
        _p3k.getSlot84PersonalEffect = function(_p3s) {
            var _p3t = null,
                _p3u = new _p3q.SlotItemEffectModel(),
                _p3v = _p3s.get_each_level_nums(84),
                _p3w = 0,
                _p3x = 0;
            if (_p3v.forEach(function(_p3y, _p3z) {
                    _p3z >= 4 && (_p3w += _p3y), _p3z >= 7 && (_p3x += _p3y);
                }), 0 == _p3w) return _p3u;
            for (var _p40 = 0, _p41 = 0, _p42 = _p3s.have_slot_ids(); _p41 < _p42.length; _p41++) {
                var _p43 = _p42[_p41],
                    _p44 = _p3r.default.model.slot.getMst(_p43),
                    _p45 = _p44.equipType;
                12 != _p45 && 13 != _p45 || (_p44.sakuteki >= 5 && _p3s.get_slotnums(parseInt(_p43)), _p44.taiku >= 2 && (_p40 += _p3s.get_slotnums(parseInt(_p43))));
            }
            var _p46 = _p3s.getCountryName();
            _p3w >= 1 && (_p3u.tyku += 1 * _p3w, _p3u.kaih += 1 * _p3w, 'ドイツ' != _p46 && 'イタリア' != _p46 || (_p3u.tyku += 1 * _p3w, _p3u.kaih += 1 * _p3w), _p40 >= 1 && (_p3u.tyku += 1)), _p3x >= 1 && (_p3u.tyku += 1 * _p3x, _p3u.houg += 1 * _p3x);
            var _p47 = _p3v[10];
            return _p47 >= 1 && (_p3u.tyku += 1 * _p47, _p3u.kaih += 1 * _p47, 'ドイツ' != _p46 && 'イタリア' != _p46 || (_p3u.houg += 1)), _p3u;
        };
    },
    90725: (_p48, _p49, _p4a) => {
        'use strict';
        var _p4b = null;
        defineModule(_p49);
        Object.defineProperty(_p49, '__esModule', {
            'value': true
        }), _p49.getSlot85PersonalEffect = void 0;
        var _p4c = _p4a(74496);
        _p49.getSlot85PersonalEffect = function(_p4d) {
            var _p4e = null,
                _p4f = new _p4c.SlotItemEffectModel(),
                _p4g = _p4d.get_each_level_over_nums([85]),
                _p4h = _p4g.slot[85][6],
                _p4i = _p4g.slot[85][8],
                _p4j = _p4g.slot[85][10],
                _p4k = _p4d.get_have_rader_nums().air_rader,
                _p4l = _p4d.getCountryName();
            return _p4h > 0 && (_p4f.tyku += 1 * _p4h, _p4f.kaih += 1 * _p4h, _p4k >= 1 && (_p4f.tyku += 2)), _p4i > 0 && (_p4f.houg += 1 * _p4i, 'ドイツ' != _p4l && 'イタリア' != _p4l || (_p4f.tyku += 1 * _p4i, _p4f.kaih += 1 * _p4i)), _p4j > 0 && (_p4f.kaih += 1 * _p4j, _p4f.houm += 1 * _p4j, 'ドイツ' != _p4l && 'イタリア' != _p4l || (_p4f.houg += 1)), _p4f;
        };
    },
    29180: (_p4m, _p4n, _p4o) => {
        'use strict';
        var _p4p = null;
        defineModule(_p4n);
        Object.defineProperty(_p4n, '__esModule', {
            'value': true
        }), _p4n.getSlot87PersonalEffect = void 0;
        var _p4q = _p4o(74496);
        _p4n.getSlot87PersonalEffect = function(_p4r) {
            var _p4s = null,
                _p4t = new _p4q.SlotItemEffectModel(),
                _p4u = false,
                _p4v = new _p4q.SlotItemEffectModel(),
                _p4w = 0;
            if (951 == _p4r.ship_id ? (_p4v.houg += 1, _p4v.kaih += 1, _p4v.raig += 1, _p4v.houm += 1, _p4u = true, _p4w = 1) : 181 == _p4r.ship_id || 316 == _p4r.ship_id || 50 == _p4r.ship_id || 229 == _p4r.ship_id || 961 == _p4r.ship_id ? _p4w = 2 : 591 != _p4r.ship_id && 592 != _p4r.ship_id && 593 != _p4r.ship_id && 954 != _p4r.ship_id || (_p4t.kaih += 2, _p4t.raig += 1, _p4w = 3), 38 != _p4r.ctype && 54 != _p4r.ctype && 101 != _p4r.ctype || (_p4w = 4), _p4u) {
                var _p4x = _p4r.get_slotnums(87);
                _p4t.add(_p4v.multiply(_p4x));
            }
            if (0 == _p4w) return _p4t;
            var _p4y = _p4r.get_each_level_nums(87),
                _p4z = [];
            return _p4w > 0 && _p4y.forEach(function(_p50, _p51) {
                var _p52 = null;
                for (var _p53 = 1; _p53 <= _p4r.SLOT_LEVEL_MAX; _p53++) null == _p4z[_p53] && (_p4z[_p53] = 0), _p51 >= _p53 && (_p4z[_p53] += _p50);
            }), 1 == _p4w ? (_p4z[6] >= 1 && (_p4t.tyku += 1 * _p4z[6]), _p4z[7] >= 1 && (_p4t.kaih += 1 * _p4z[7]), _p4z[8] >= 1 && (_p4t.raig += 1 * _p4z[8]), _p4z[9] >= 1 && (_p4t.houg += 1 * _p4z[9]), _p4z[10] >= 1 && (_p4t.houm += 1 * _p4z[10])) : 2 == _p4w ? (_p4z[6] >= 1 && (_p4t.kaih += 1 * _p4z[6]), _p4z[7] >= 1 && (_p4t.raig += 1 * _p4z[7]), _p4z[8] >= 1 && (_p4t.houg += 1 * _p4z[8]), _p4z[9] >= 1 && (_p4t.houm += 1 * _p4z[9]), _p4z[10] >= 1 && (_p4t.kaih += 1 * _p4z[10])) : 3 == _p4w ? (_p4z[6] > 0 && (_p4t.kaih += 1), _p4z[8] > 0 && (_p4t.raig += 1), _p4z[10] > 0 && (_p4t.houg += 1)) : 4 == _p4w && (_p4z[7] >= 1 && (_p4t.kaih += 1 * _p4z[7]), _p4z[8] >= 1 && (_p4t.raig += 1 * _p4z[8]), _p4z[10] >= 1 && (_p4t.houm += 1 * _p4z[10])), _p4t;
        };
    },
    68685: function(_p54, _p55, _p56) {
        'use strict';
        var _p57 = null;
        var _p58 = this && this.__importDefault || function(_p59) {
            var _p5a = null;
            return _p59 && _p59.__esModule ? _p59 : {
                'default': _p59
            };
        };
        defineModule(_p55);
        Object.defineProperty(_p55, '__esModule', {
            'value': true
        }), _p55.getSlot90PersonalEffect = void 0;
        var _p5b = _p56(74496),
            _p5c = _p58(_p56(18622));
        _p55.getSlot90PersonalEffect = function(_p5d) {
            var _p5e = null,
                _p5f = new _p5b.SlotItemEffectModel(),
                _p5g = new _p5b.SlotItemEffectModel();
            if (142 == _p5d.ship_id ? (_p5g.houg += 2, _p5g.kaih += 1) : 295 == _p5d.ship_id || 416 == _p5d.ship_id || 417 == _p5d.ship_id ? _p5g.houg += 1 : 264 == _p5d.ship_id ? (_p5g.houg += 1, _p5g.tyku += 1) : 501 != _p5d.ship_id && 506 != _p5d.ship_id && 502 != _p5d.ship_id && 507 != _p5d.ship_id || (_p5g.houg += 1), 7 != _p5d.ctype && 13 != _p5d.ctype && 8 != _p5d.ctype && 29 != _p5d.ctype && 9 != _p5d.ctype && 31 != _p5d.ctype || (_p5g.houg += 1), _p5g.exists()) {
                var _p5h = _p5d.get_slotnums(90);
                _p5f = _p5g.multiply(_p5h);
            }
            var _p5i = [];
            if ('あおば' == _p5d.yomi && (_p5i[1] = 1), 13 != _p5d.ctype && 7 != _p5d.ctype || (_p5i[2] = 1), 0 == _p5i.length) return _p5f;
            for (var _p5j = 0, _p5k = 0, _p5l = 0, _p5m = _p5d.have_slot_ids(); _p5l < _p5m.length; _p5l++) {
                var _p5n = _p5m[_p5l],
                    _p5o = _p5c.default.model.slot.getMst(_p5n),
                    _p5p = _p5o.equipType;
                12 != _p5p && 13 != _p5p || (_p5o.sakuteki >= 5 && (_p5j += _p5d.get_slotnums(parseInt(_p5n))), _p5o.taiku >= 2 && (_p5k += _p5d.get_slotnums(parseInt(_p5n))));
            }
            return _p5k > 0 && null != _p5i[1] && (_p5f.tyku += 5, _p5f.kaih += 2), _p5j > 0 && null != _p5i[2] && (_p5f.houg += 3, _p5f.kaih += 2, _p5f.raig += 2), _p5f;
        };
    },
    26078: (_p5q, _p5r, _p5s) => {
        'use strict';
        var _p5t = null;
        defineModule(_p5r);
        Object.defineProperty(_p5r, '__esModule', {
            'value': true
        }), _p5r.getSlot93PersonalEffect = void 0;
        var _p5u = _p5s(74496);
        _p5r.getSlot93PersonalEffect = function(_p5v) {
            var _p5w = null,
                _p5x = new _p5u.SlotItemEffectModel();
            return 'そうりゅう' == _p5v.yomi ? _p5x.houg = 1 : 'ひりゅう' == _p5v.yomi && (_p5x.houg = 3), _p5x;
        };
    },
    20829: (_p5y, _p5z, _p60) => {
        'use strict';
        var _p61 = null;
        defineModule(_p5z);
        Object.defineProperty(_p5z, '__esModule', {
            'value': true
        }), _p5z.getSlot94PersonalEffect = void 0;
        var _p62 = _p60(74496);
        _p5z.getSlot94PersonalEffect = function(_p63) {
            var _p64 = null,
                _p65 = new _p62.SlotItemEffectModel();
            if (196 == _p63.ship_id) _p65.houg = 7;
            else {
                if (197 != _p63.ship_id) return _p65;
                _p65.houg = 3;
            }
            return _p65;
        };
    },
    6880: (_p66, _p67, _p68) => {
        'use strict';
        var _p69 = null;
        defineModule(_p67);
        Object.defineProperty(_p67, '__esModule', {
            'value': true
        }), _p67.getSlot99PersonalEffect = void 0;
        var _p6a = _p68(74496);
        _p67.getSlot99PersonalEffect = function(_p6b) {
            var _p6c = null,
                _p6d = new _p6a.SlotItemEffectModel();
            return 'そうりゅう' == _p6b.yomi ? _p6d.houg = 4 : 'ひりゅう' == _p6b.yomi && (_p6d.houg = 1), _p6d;
        };
    },
    21403: (_p6e, _p6f, _p6g) => {
        'use strict';
        var _p6h = null;
        defineModule(_p6f);
        Object.defineProperty(_p6f, '__esModule', {
            'value': true
        }), _p6f.getSlotCorsairMkIIPersonalEffect = void 0;
        var _p6i = _p6g(74496);
        _p6f.getSlotCorsairMkIIPersonalEffect = function(_p6j) {
            var _p6k = null,
                _p6l = new _p6i.SlotItemEffectModel(),
                _p6m = false,
                _p6n = new _p6i.SlotItemEffectModel();
            112 == _p6j.ctype && (_p6n.houg += 1, _p6n.tyku += 1, _p6n.kaih += 2, _p6m = true);
            var _p6o = _p6j.getCountryName();
            if (67 == _p6j.ctype || 78 == _p6j.ctype || 82 == _p6j.ctype || 88 == _p6j.ctype || 108 == _p6j.ctype || 112 == _p6j.ctype ? (_p6n.houg += 1, _p6n.tyku += 2, _p6n.kaih += 3, _p6m = true) : 'アメリカ' == _p6o && (_p6n.houg += 1, _p6n.tyku += 1, _p6n.kaih += 2, _p6m = true), 0 == _p6m) return _p6l;
            var _p6p = _p6j.get_slotnums(434) + _p6j.get_slotnums(435);
            return _p6l.add(_p6n.multiply(_p6p)), _p6l;
        };
    },
    9195: (_p6q, _p6r, _p6s) => {
        'use strict';
        var _p6t = null;
        defineModule(_p6r);
        Object.defineProperty(_p6r, '__esModule', {
            'value': true
        }), _p6r.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _p6u = _p6s(74496);
        _p6r.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_p6v) {
            var _p6w = null,
                _p6x = new _p6u.SlotItemEffectModel(),
                _p6y = false,
                _p6z = new _p6u.SlotItemEffectModel();
            if (56 == _p6v.ctype && (_p6z.tais += 3, _p6z.kaih += 2, _p6y = true), 0 == _p6y) return _p6x;
            var _p70 = _p6v.get_slotnums(44) + _p6v.get_slotnums(45) + _p6v.get_slotnums(287) + _p6v.get_slotnums(288);
            return _p6x.add(_p6z.multiply(_p70)), _p6x;
        };
    },
    93297: (_p71, _p72, _p73) => {
        'use strict';
        var _p74 = null;
        defineModule(_p72);
        Object.defineProperty(_p72, '__esModule', {
            'value': true
        }), _p72.getSlotDomesticSonarPersonalEffect = void 0;
        var _p75 = _p73(74496);
        _p72.getSlotDomesticSonarPersonalEffect = function(_p76) {
            var _p77 = null,
                _p78 = new _p75.SlotItemEffectModel();
            return 56 == _p76.ctype && (_p78.tais += 2, _p78.kaih += 3), _p78;
        };
    },
    45482: (_p79, _p7a, _p7b) => {
        'use strict';
        var _p7c = null;
        defineModule(_p7a);
        Object.defineProperty(_p7a, '__esModule', {
            'value': true
        }), _p7a.getSlotOtherSuiseiPersonalEffect = void 0;
        var _p7d = _p7b(74496);
        _p7a.getSlotOtherSuiseiPersonalEffect = function(_p7e) {
            var _p7f = null,
                _p7g = new _p7d.SlotItemEffectModel(),
                _p7h = new _p7d.SlotItemEffectModel();
            if (553 == _p7e.ship_id) _p7h.houg = 2;
            else {
                if (554 != _p7e.ship_id) return _p7g;
                _p7h.houg = 2;
            }
            var _p7i = _p7e.get_slotnums(24) + _p7e.get_slotnums(57) + _p7e.get_slotnums(111);
            return _p7g = _p7h.multiply(_p7i);
        };
    },
    45927: (_p7j, _p7k, _p7l) => {
        'use strict';
        var _p7m = null;
        defineModule(_p7k);
        Object.defineProperty(_p7k, '__esModule', {
            'value': true
        }), _p7k.getSlotSmokePersonalEffect = void 0;
        var _p7n = _p7l(74496);
        _p7k.getSlotSmokePersonalEffect = function(_p7o) {
            var _p7p = null,
                _p7q = new _p7n.SlotItemEffectModel(),
                _p7r = false,
                _p7s = new _p7n.SlotItemEffectModel();
            if (959 == _p7o.ship_id && (_p7s.kaih += 4, _p7r = true), 'ジョンストン' == _p7o.yomi || 'サミュエル・B・ロバーツ' == _p7o.yomi || 'せんだい' == _p7o.yomi || 'はるかぜ' == _p7o.yomi || 'かみかぜ' == _p7o.yomi || 'しきなみ' == _p7o.yomi || 'うらなみ' == _p7o.yomi || 'あおば' == _p7o.yomi ? (_p7s.kaih += 3, _p7r = true) : 'いなづま' != _p7o.yomi && 'はぐろ' != _p7o.yomi && 'はつしも' != _p7o.yomi && 'かすみ' != _p7o.yomi && 'ふぶき' != _p7o.yomi && 'あたご' != _p7o.yomi && 'あまぎり' != _p7o.yomi && 'はまなみ' != _p7o.yomi || (_p7s.kaih += 2, _p7r = true), 0 == _p7r) return _p7q;
            var _p7t = _p7o.get_slotnums(500) + _p7o.get_slotnums(501);
            return _p7q.add(_p7s.multiply(_p7t)), _p7q;
        };
    },
    32666: (_p7u, _p7v, _p7w) => {
        'use strict';
        var _p7x = null;
        defineModule(_p7v);
        Object.defineProperty(_p7v, '__esModule', {
            'value': true
        }), _p7v.getSlotTokuYonPersonalEffect = void 0;
        var _p7y = _p7w(74496);
        _p7v.getSlotTokuYonPersonalEffect = function(_p7z) {
            var _p80 = null,
                _p81 = new _p7y.SlotItemEffectModel(),
                _p82 = false,
                _p83 = new _p7y.SlotItemEffectModel(),
                _p84 = 0,
                _p85 = _p7z.get_slotnums(525),
                _p86 = _p7z.get_slotnums(526),
                _p87 = _p85 + _p86;
            if (13 != _p7z.stype && 14 != _p7z.stype || (_p83.houg += 1, _p83.raig += 2, _p83.kaih -= 1, _p82 = true, _p84 = 1, 'い36' != _p7z.yomi && 'い41' != _p7z.yomi || (_p81.houg += 2, _p81.raig += 1, _p81.houm += 2), _p86 >= 1 && (_p81.houg += 1 * _p86, _p81.raig += 1 * _p86, _p81.houm += 1 * _p86)), 0 == _p82) return _p81;
            if (_p81.add(_p83.multiply(_p87)), 0 == _p84) return _p81;
            var _p88 = _p7z.get_each_level_over_nums([525, 526]),
                _p89 = _p88.slot[525],
                _p8a = _p88.slot[526];
            if (1 == _p84) {
                if (_p89[1] >= 1 || _p8a[1] >= 1) {
                    var _p8b = _p89[1] + _p8a[1];
                    _p81.raig += 1 * _p8b;
                }
                if (_p8a[2] >= 1) {
                    var _p8c = _p89[2] + _p8a[2];
                    _p81.houg += 1 * _p8c;
                }
                if (_p89[3] >= 1 || _p8a[3] >= 1) {
                    var _p8d = _p89[3] + _p8a[3];
                    _p81.houm += 1 * _p8d;
                }
                if (_p8a[4] >= 1) {
                    var _p8e = _p89[4] + _p8a[4];
                    _p81.raig += 1 * _p8e;
                }
                if (_p89[6] >= 1 || _p8a[6] >= 1) {
                    var _p8f = _p89[6] + _p8a[6];
                    _p81.houm += 1 * _p8f;
                }
                if (_p8a[8] >= 1) {
                    var _p8g = _p89[8] + _p8a[8];
                    _p81.houg += 1 * _p8g;
                }
                if (_p89[10] >= 1 || _p8a[10] >= 1) {
                    var _p8h = _p89[10] + _p8a[10];
                    _p81.raig += 1 * _p8h;
                }
            }
            return _p81;
        };
    },
    29805: (_p8i, _p8j, _p8k) => {
        'use strict';
        var _p8l = null;
        defineModule(_p8j);
        Object.defineProperty(_p8j, '__esModule', {
            'value': true
        }), _p8j.getSlotType10PersonalEffect = void 0;
        var _p8m = _p8k(74496);
        _p8j.getSlotType10PersonalEffect = function(_p8n) {
            var _p8o = null,
                _p8p = new _p8m.SlotItemEffectModel();
            return 662 == _p8n.ship_id || 663 == _p8n.ship_id || 668 == _p8n.ship_id ? (_p8p.houg += 2, _p8p.kaih += 1, _p8p.tais += 3) : 501 != _p8n.ship_id && 506 != _p8n.ship_id && 502 != _p8n.ship_id && 507 != _p8n.ship_id || (_p8p.houg += 2), _p8p;
        };
    },
    58913: (_p8q, _p8r, _p8s) => {
        'use strict';
        var _p8t = null;
        defineModule(_p8r);
        Object.defineProperty(_p8r, '__esModule', {
            'value': true
        }), _p8r.getSlotType11PersonalEffect = void 0;
        var _p8u = _p8s(74496);
        _p8r.getSlotType11PersonalEffect = function(_p8v) {
            var _p8w = null,
                _p8x = new _p8u.SlotItemEffectModel();
            return 662 == _p8v.ship_id || 663 == _p8v.ship_id || 668 == _p8v.ship_id ? (_p8x.houg += 1, _p8x.kaih += 1, _p8x.tais += 1) : 501 != _p8v.ship_id && 506 != _p8v.ship_id && 502 != _p8v.ship_id && 507 != _p8v.ship_id || (_p8x.houg += 1, _p8x.kaih += 1), _p8x;
        };
    },
    55421: (_p8y, _p8z, _p90) => {
        'use strict';
        var _p91 = null;
        defineModule(_p8z);
        Object.defineProperty(_p8z, '__esModule', {
            'value': true
        }), _p8z.getSlotType25PersonalEffect = void 0;
        var _p92 = _p90(74496);
        _p8z.getSlotType25PersonalEffect = function(_p93) {
            var _p94 = null,
                _p95 = new _p92.SlotItemEffectModel();
            return 662 == _p93.ship_id ? (_p95.tais += 4, _p95.kaih += 1) : 663 != _p93.ship_id && 668 != _p93.ship_id || (_p95.tais += 3, _p95.kaih += 1), _p95;
        };
    },
    272: function(_p96, _p97, _p98) {
        'use strict';
        var _p99 = null;
        var _p9a = this && this.__importDefault || function(_p9b) {
            var _p9c = null;
            return _p9b && _p9b.__esModule ? _p9b : {
                'default': _p9b
            };
        };
        defineModule(_p97);
        Object.defineProperty(_p97, '__esModule', {
            'value': true
        }), _p97.getSlotType9PersonalEffect = void 0;
        var _p9d = _p98(74496),
            _p9e = _p9a(_p98(18622));
        _p97.getSlotType9PersonalEffect = function(_p9f) {
            var _p9g = null,
                _p9h = new _p9d.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_p9f.stype]) return _p9h;
            for (var _p9i = 0, _p9j = 0, _p9k = _p9f.have_slot_ids(); _p9j < _p9k.length; _p9j++) {
                var _p9l = _p9k[_p9j];
                if (9 == _p9e.default.model.slot.getMst(_p9l).equipType)
                    for (var _p9m = 0, _p9n = _p9f.have_slots_dict[parseInt(_p9l)]; _p9m < _p9n.length; _p9m++) {
                        var _p9o = _p9n[_p9m].level;
                        _p9i < _p9o && (_p9i = _p9o);
                    }
            }
            return _p9i >= 2 && (_p9h.saku += 1), _p9i >= 4 && (_p9h.houg += 1), _p9i >= 6 && (_p9h.saku += 1), _p9i >= 10 && (_p9h.houg += 1, _p9h.saku += 1), _p9h;
        };
    },
    54518: (_p9p, _p9q, _p9r) => {
        'use strict';
        var _p9s = null;
        defineModule(_p9q);
        Object.defineProperty(_p9q, '__esModule', {
            'value': true
        }), _p9q.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _p9t = _p9r(74496);
        _p9q.getSlot_16InchMkXRensouhou_PersonalEffect = function(_p9u) {
            var _p9v = null,
                _p9w = new _p9t.SlotItemEffectModel();
            if (93 == _p9u.ctype) {
                var _p9x = _p9u.get_slotnums(330);
                _p9x > 0 && (_p9w.houg = _p9w.houg + 1 * _p9x);
                var _p9y = _p9u.get_slotnums(331);
                _p9y > 0 && (_p9w.houg = _p9w.houg + 1 * _p9y, 1496 != _p9u.ship_id && 918 != _p9u.ship_id || (_p9w.houg = _p9w.houg + 1 * _p9y, _p9w.kaih = _p9w.kaih + 1 * _p9y));
                var _p9z = _p9u.get_slotnums(332);
                return _p9z > 0 && (_p9w.houg = _p9w.houg + 1 * _p9z, 1496 != _p9u.ship_id && 918 != _p9u.ship_id || (_p9w.houg = _p9w.houg + 1 * _p9z, _p9w.kaih = _p9w.kaih + 1 * _p9z, _p9w.tyku = _p9w.tyku + 1 * _p9z)), _p9w;
            }
            var _pa0 = new _p9t.SlotItemEffectModel();
            if (19 == _p9u.ctype ? (_pa0.houg = 1, (541 == _p9u.ship_id || 573 == _p9u.ship_id) && (_pa0.houg += 1)) : 88 == _p9u.ctype && (_pa0.houg = 1, 576 == _p9u.ship_id && (_pa0.houg += 1)), !_pa0.exists()) return _p9w;
            var _pa1 = _p9u.get_slotnums(330) + _p9u.get_slotnums(331) + _p9u.get_slotnums(332);
            return _p9w = _pa0.multiply(_pa1);
        };
    },
    79353: (_pa2, _pa3, _pa4) => {
        'use strict';
        var _pa5 = null;
        defineModule(_pa3);
        Object.defineProperty(_pa3, '__esModule', {
            'value': true
        }), _pa3.getZuiunSeriesEffect = void 0;
        var _pa6 = _pa4(74496);
        _pa3.getZuiunSeriesEffect = function(_pa7) {
            var _pa8 = null,
                _pa9 = new _pa6.SlotItemEffectModel(),
                _paa = false,
                _pab = new _pa6.SlotItemEffectModel();
            if (662 == _pa7.ship_id ? (_pa9.houg += 2, _pa9.kaih += 1) : 663 == _pa7.ship_id || 668 == _pa7.ship_id || 501 == _pa7.ship_id || 506 == _pa7.ship_id ? (_pa9.houg += 2, _pab.kaih += 1, _pab.tyku += 1, _paa = true) : 502 != _pa7.ship_id && 507 != _pa7.ship_id || (_pa9.houg += 1, _pab.kaih += 1, _pab.tyku += 1, _paa = true), 0 == _paa) return _pa9;
            var _pac = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_pad) {
                var _pae = null;
                _pac += _pa7.get_slotnums(_pad);
            }), _pa9.add(_pab.multiply(_pac)), _pa9;
        };
    },
    89051: function(_paf, _pag, _pah) {
        'use strict';
        var _pai = null;
        var _paj = this && this.__createBinding || (Object.create ? function(_pak, _pal, _pam, _pan) {
                var _pao = null;
                void 0 === _pan && (_pan = _pam);
                var _pap = Object.getOwnPropertyDescriptor(_pal, _pam);
                _pap && !('get' in _pap ? !_pal.__esModule : _pap.writable || _pap.configurable) || (_pap = {
                    'enumerable': true,
                    'get': function() {
                        return _pal[_pam];
                    }
                }), Object.defineProperty(_pak, _pan, _pap);
            } : function(_paq, _par, _pas, _pat) {
                void 0 === _pat && (_pat = _pas), _paq[_pat] = _par[_pas];
            }),
            _pau = this && this.__exportStar || function(_pav, _paw) {
                var _pax = null;
                for (var _pay in _pav) 'default' === _pay || Object.prototype.hasOwnProperty.call(_paw, _pay) || _paj(_paw, _pav, _pay);
            };
        defineModule(_pag);
        Object.defineProperty(_pag, '__esModule', {
            'value': true
        }), _pau(_pah(34165), _pag), _pau(_pah(81018), _pag), _pau(_pah(56716), _pag), _pau(_pah(17713), _pag), _pau(_pah(54518), _pag), _pau(_pah(66985), _pag), _pau(_pah(88102), _pag), _pau(_pah(66904), _pag), _pau(_pah(98137), _pag), _pau(_pah(69954), _pag), _pau(_pah(22218), _pag), _pau(_pah(88271), _pag), _pau(_pah(23035), _pag), _pau(_pah(2578), _pag), _pau(_pah(17143), _pag), _pau(_pah(16164), _pag), _pau(_pah(35023), _pag), _pau(_pah(44680), _pag), _pau(_pah(45749), _pag), _pau(_pah(37334), _pag), _pau(_pah(29180), _pag), _pau(_pah(68685), _pag), _pau(_pah(26078), _pag), _pau(_pah(20829), _pag), _pau(_pah(6880), _pag), _pau(_pah(17213), _pag), _pau(_pah(40176), _pag), _pau(_pah(32889), _pag), _pau(_pah(11285), _pag), _pau(_pah(96200), _pag), _pau(_pah(9115), _pag), _pau(_pah(37173), _pag), _pau(_pah(21713), _pag), _pau(_pah(59823), _pag), _pau(_pah(57440), _pag), _pau(_pah(29240), _pag), _pau(_pah(40885), _pag), _pau(_pah(19614), _pag), _pau(_pah(87220), _pag), _pau(_pah(81367), _pag), _pau(_pah(13052), _pag), _pau(_pah(94968), _pag), _pau(_pah(48658), _pag), _pau(_pah(1906), _pag), _pau(_pah(61887), _pag), _pau(_pah(47970), _pag), _pau(_pah(31797), _pag), _pau(_pah(45738), _pag), _pau(_pah(34718), _pag), _pau(_pah(69245), _pag), _pau(_pah(18478), _pag), _pau(_pah(2899), _pag), _pau(_pah(57120), _pag), _pau(_pah(74985), _pag), _pau(_pah(9234), _pag), _pau(_pah(30802), _pag), _pau(_pah(97002), _pag), _pau(_pah(16748), _pag), _pau(_pah(53618), _pag), _pau(_pah(72573), _pag), _pau(_pah(8955), _pag), _pau(_pah(98947), _pag), _pau(_pah(44726), _pag), _pau(_pah(93065), _pag), _pau(_pah(85767), _pag), _pau(_pah(38314), _pag), _pau(_pah(59747), _pag), _pau(_pah(40649), _pag), _pau(_pah(13533), _pag), _pau(_pah(12138), _pag), _pau(_pah(30042), _pag), _pau(_pah(33623), _pag), _pau(_pah(85630), _pag), _pau(_pah(88736), _pag), _pau(_pah(49341), _pag), _pau(_pah(74306), _pag), _pau(_pah(83898), _pag), _pau(_pah(71873), _pag), _pau(_pah(53122), _pag), _pau(_pah(51063), _pag), _pau(_pah(91491), _pag), _pau(_pah(85495), _pag), _pau(_pah(65365), _pag), _pau(_pah(98164), _pag), _pau(_pah(38114), _pag), _pau(_pah(21003), _pag), _pau(_pah(77010), _pag), _pau(_pah(39126), _pag), _pau(_pah(72176), _pag), _pau(_pah(33846), _pag), _pau(_pah(97157), _pag), _pau(_pah(63406), _pag), _pau(_pah(66373), _pag), _pau(_pah(19707), _pag), _pau(_pah(63978), _pag), _pau(_pah(92382), _pag), _pau(_pah(78415), _pag), _pau(_pah(23090), _pag), _pau(_pah(18776), _pag), _pau(_pah(39656), _pag), _pau(_pah(66039), _pag), _pau(_pah(64679), _pag), _pau(_pah(95953), _pag), _pau(_pah(86384), _pag), _pau(_pah(65345), _pag), _pau(_pah(46514), _pag), _pau(_pah(81976), _pag), _pau(_pah(89331), _pag), _pau(_pah(73973), _pag), _pau(_pah(21178), _pag), _pau(_pah(5079), _pag), _pau(_pah(95014), _pag), _pau(_pah(53099), _pag), _pau(_pah(76201), _pag), _pau(_pah(24931), _pag), _pau(_pah(60978), _pag), _pau(_pah(74312), _pag), _pau(_pah(54350), _pag), _pau(_pah(26262), _pag), _pau(_pah(45530), _pag), _pau(_pah(44053), _pag), _pau(_pah(65441), _pag), _pau(_pah(33258), _pag), _pau(_pah(92168), _pag), _pau(_pah(85975), _pag), _pau(_pah(98467), _pag), _pau(_pah(88348), _pag), _pau(_pah(21097), _pag), _pau(_pah(37273), _pag), _pau(_pah(72694), _pag), _pau(_pah(62067), _pag), _pau(_pah(87817), _pag), _pau(_pah(93526), _pag), _pau(_pah(33084), _pag), _pau(_pah(97831), _pag), _pau(_pah(45482), _pag), _pau(_pah(272), _pag), _pau(_pah(69377), _pag), _pau(_pah(31127), _pag), _pau(_pah(79353), _pag), _pau(_pah(17274), _pag), _pau(_pah(91302), _pag), _pau(_pah(82229), _pag), _pau(_pah(10325), _pag), _pau(_pah(351), _pag), _pau(_pah(4050), _pag), _pau(_pah(29805), _pag), _pau(_pah(58913), _pag), _pau(_pah(55421), _pag), _pau(_pah(87845), _pag), _pau(_pah(17562), _pag), _pau(_pah(78466), _pag), _pau(_pah(40061), _pag), _pau(_pah(9195), _pag), _pau(_pah(93297), _pag), _pau(_pah(15133), _pag), _pau(_pah(55747), _pag), _pau(_pah(33155), _pag), _pau(_pah(79086), _pag), _pau(_pah(2306), _pag), _pau(_pah(14386), _pag), _pau(_pah(80225), _pag), _pau(_pah(17732), _pag), _pau(_pah(47169), _pag), _pau(_pah(77670), _pag), _pau(_pah(79988), _pag), _pau(_pah(92253), _pag), _pau(_pah(74428), _pag), _pau(_pah(16498), _pag), _pau(_pah(2631), _pag), _pau(_pah(27177), _pag), _pau(_pah(94781), _pag), _pau(_pah(53908), _pag), _pau(_pah(79813), _pag), _pau(_pah(16088), _pag), _pau(_pah(93733), _pag), _pau(_pah(69939), _pag), _pau(_pah(33734), _pag), _pau(_pah(34432), _pag), _pau(_pah(97423), _pag), _pau(_pah(23551), _pag), _pau(_pah(99791), _pag), _pau(_pah(21403), _pag), _pau(_pah(6173), _pag), _pau(_pah(23934), _pag), _pau(_pah(53709), _pag), _pau(_pah(88838), _pag), _pau(_pah(99790), _pag), _pau(_pah(18387), _pag), _pau(_pah(70941), _pag), _pau(_pah(35025), _pag), _pau(_pah(2603), _pag), _pau(_pah(78707), _pag), _pau(_pah(89058), _pag), _pau(_pah(84372), _pag), _pau(_pah(96804), _pag), _pau(_pah(33896), _pag), _pau(_pah(11031), _pag), _pau(_pah(71383), _pag), _pau(_pah(55888), _pag), _pau(_pah(2258), _pag), _pau(_pah(38003), _pag), _pau(_pah(92174), _pag), _pau(_pah(43768), _pag), _pau(_pah(73254), _pag), _pau(_pah(55734), _pag), _pau(_pah(81254), _pag), _pau(_pah(65455), _pag), _pau(_pah(70362), _pag), _pau(_pah(61977), _pag), _pau(_pah(43607), _pag), _pau(_pah(68086), _pag), _pau(_pah(78173), _pag), _pau(_pah(22581), _pag), _pau(_pah(20418), _pag), _pau(_pah(93373), _pag), _pau(_pah(13053), _pag), _pau(_pah(47874), _pag), _pau(_pah(42788), _pag), _pau(_pah(57664), _pag), _pau(_pah(44990), _pag), _pau(_pah(17712), _pag), _pau(_pah(83957), _pag), _pau(_pah(78539), _pag), _pau(_pah(96282), _pag), _pau(_pah(49679), _pag), _pau(_pah(45927), _pag), _pau(_pah(90312), _pag), _pau(_pah(86856), _pag), _pau(_pah(78123), _pag), _pau(_pah(25765), _pag), _pau(_pah(29493), _pag), _pau(_pah(28221), _pag), _pau(_pah(14830), _pag), _pau(_pah(54047), _pag), _pau(_pah(76054), _pag), _pau(_pah(90725), _pag), _pau(_pah(93053), _pag), _pau(_pah(88792), _pag), _pau(_pah(33242), _pag), _pau(_pah(59415), _pag), _pau(_pah(3296), _pag), _pau(_pah(32666), _pag), _pau(_pah(36731), _pag), _pau(_pah(30450), _pag), _pau(_pah(85127), _pag), _pau(_pah(87204), _pag), _pau(_pah(2380), _pag), _pau(_pah(96580), _pag), _pau(_pah(15653), _pag), _pau(_pah(41410), _pag), _pau(_pah(25851), _pag), _pau(_pah(6482), _pag), _pau(_pah(70332), _pag), _pau(_pah(91275), _pag);
    },
    82692: function(_paz, _pb0, _pb1) {
        'use strict';
        var _pb2 = null;
        var _pb3 = this && this.__createBinding || (Object.create ? function(_pb4, _pb5, _pb6, _pb7) {
                var _pb8 = null;
                void 0 === _pb7 && (_pb7 = _pb6);
                var _pb9 = Object.getOwnPropertyDescriptor(_pb5, _pb6);
                _pb9 && !('get' in _pb9 ? !_pb5.__esModule : _pb9.writable || _pb9.configurable) || (_pb9 = {
                    'enumerable': true,
                    'get': function() {
                        return _pb5[_pb6];
                    }
                }), Object.defineProperty(_pb4, _pb7, _pb9);
            } : function(_pba, _pbb, _pbc, _pbd) {
                void 0 === _pbd && (_pbd = _pbc), _pba[_pbd] = _pbb[_pbc];
            }),
            _pbe = this && this.__setModuleDefault || (Object.create ? function(_pbf, _pbg) {
                var _pbh = null;
                Object.defineProperty(_pbf, 'default', {
                    'enumerable': true,
                    'value': _pbg
                });
            } : function(_pbi, _pbj) {
                var _pbk = null;
                _pbi.default = _pbj;
            }),
            _pbl = this && this.__importStar || function(_pbm) {
                var _pbn = null;
                if (_pbm && _pbm.__esModule) return _pbm;
                var _pbo = {};
                if (null != _pbm) {
                    for (var _pbp in _pbm) 'default' !== _pbp && Object.prototype.hasOwnProperty.call(_pbm, _pbp) && _pb3(_pbo, _pbm, _pbp);
                }
                return _pbe(_pbo, _pbm), _pbo;
            };
        defineModule(_pb0);
        Object.defineProperty(_pb0, '__esModule', {
            'value': true
        }), _pb0.SlotItemEffectUtil = void 0;
        var _pbq, _pbr = _pb1(73785),
            _pbs = _pbl(_pb1(89051)),
            _pbt = _pb1(74496);
        ! function(_pbu) {
            var _pbv = null;
            _pbu.getSlotitemEffect = function(_pbw, _pbx) {
                var _pby = null;
                if (null == _pbw || null == _pbx) return null;
                for (var _pbz = new _pbr.SlotItemEffectParamModel(_pbw, _pbx), _pc0 = [{
                        'isExecute': Boolean(_pbz.get_type3_nums(9)),
                        'execFunc': _pbs.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_type3_nums(10)),
                        'execFunc': _pbs.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_type3_nums(11)),
                        'execFunc': _pbs.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_type3_nums(12)) || Boolean(_pbz.get_type3_nums(13)),
                        'execFunc': _pbs.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_type3_nums(25)),
                        'execFunc': _pbs.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_type3_nums(29)),
                        'execFunc': _pbs.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_type3_nums(42)),
                        'execFunc': _pbs.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(3)) || Boolean(_pbz.get_slotnums(122)) || Boolean(_pbz.get_slotnums(533)),
                        'execFunc': _pbs.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(5)),
                        'execFunc': _pbs.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(12)),
                        'execFunc': _pbs.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(15)),
                        'execFunc': _pbs.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(18)) || Boolean(_pbz.get_slotnums(52)),
                        'execFunc': _pbs.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(19)),
                        'execFunc': _pbs.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(24)) || Boolean(_pbz.get_slotnums(57)) || Boolean(_pbz.get_slotnums(111)),
                        'execFunc': _pbs.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(26)) || Boolean(_pbz.get_slotnums(62)) || Boolean(_pbz.get_slotnums(79)) || Boolean(_pbz.get_slotnums(80)) || Boolean(_pbz.get_slotnums(81)) || Boolean(_pbz.get_slotnums(207)) || Boolean(_pbz.get_slotnums(208)),
                        'execFunc': _pbs.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(35)),
                        'execFunc': _pbs.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(39)) || Boolean(_pbz.get_slotnums(40)) || Boolean(_pbz.get_slotnums(49)) || Boolean(_pbz.get_slotnums(131)),
                        'execFunc': _pbs.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(30)) || Boolean(_pbz.get_slotnums(410)),
                        'execFunc': _pbs.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(44)) || Boolean(_pbz.get_slotnums(45)) || Boolean(_pbz.get_slotnums(287)) || Boolean(_pbz.get_slotnums(288)),
                        'execFunc': _pbs.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(46)) || Boolean(_pbz.get_slotnums(47)) || Boolean(_pbz.get_slotnums(149)) || Boolean(_pbz.get_slotnums(132)) || Boolean(_pbz.get_slotnums(438)),
                        'execFunc': _pbs.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(47)) || Boolean(_pbz.get_slotnums(438)),
                        'execFunc': _pbs.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(50)),
                        'execFunc': _pbs.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(58)),
                        'execFunc': _pbs.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(59)),
                        'execFunc': _pbs.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(60)) || Boolean(_pbz.get_slotnums(154)) || Boolean(_pbz.get_slotnums(219)),
                        'execFunc': _pbs.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(61)),
                        'execFunc': _pbs.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(61)),
                        'execFunc': _pbs.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(63)),
                        'execFunc': _pbs.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(66)) || Boolean(_pbz.get_slotnums(220)),
                        'execFunc': _pbs.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(67)),
                        'execFunc': _pbs.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(69)),
                        'execFunc': _pbs.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(70)),
                        'execFunc': _pbs.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(76)) || Boolean(_pbz.get_slotnums(114)),
                        'execFunc': _pbs.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(78)),
                        'execFunc': _pbs.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(79)) || Boolean(_pbz.get_slotnums(81)),
                        'execFunc': _pbs.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(82)),
                        'execFunc': _pbs.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(84)),
                        'execFunc': _pbs.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(85)),
                        'execFunc': _pbs.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(87)),
                        'execFunc': _pbs.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(90)),
                        'execFunc': _pbs.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(93)),
                        'execFunc': _pbs.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(94)),
                        'execFunc': _pbs.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(99)),
                        'execFunc': _pbs.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(100)),
                        'execFunc': _pbs.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(104)),
                        'execFunc': _pbs.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(106)) || Boolean(_pbz.get_slotnums(450)),
                        'execFunc': _pbs.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(115)),
                        'execFunc': _pbs.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(118)) || Boolean(_pbz.get_slotnums(521)),
                        'execFunc': _pbs.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(119)),
                        'execFunc': _pbs.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(121)),
                        'execFunc': _pbs.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(122)),
                        'execFunc': _pbs.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(123)),
                        'execFunc': _pbs.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(124)),
                        'execFunc': _pbs.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(128)) || Boolean(_pbz.get_slotnums(281)),
                        'execFunc': _pbs.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(129)),
                        'execFunc': _pbs.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(130)),
                        'execFunc': _pbs.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(132)),
                        'execFunc': _pbs.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(136)),
                        'execFunc': _pbs.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(139)),
                        'execFunc': _pbs.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(143)),
                        'execFunc': _pbs.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(144)),
                        'execFunc': _pbs.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(147)) || Boolean(_pbz.get_slotnums(393)) || Boolean(_pbz.get_slotnums(394)),
                        'execFunc': _pbs.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(149)),
                        'execFunc': _pbs.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(165)) || Boolean(_pbz.get_slotnums(216)),
                        'execFunc': _pbs.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(171)),
                        'execFunc': _pbs.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(174)),
                        'execFunc': _pbs.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(179)),
                        'execFunc': _pbs.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(184)),
                        'execFunc': _pbs.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(188)),
                        'execFunc': _pbs.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(189)),
                        'execFunc': _pbs.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(194)),
                        'execFunc': _pbs.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(195)),
                        'execFunc': _pbs.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(204)),
                        'execFunc': _pbs.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(217)),
                        'execFunc': _pbs.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(220)),
                        'execFunc': _pbs.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(227)),
                        'execFunc': _pbs.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(228)),
                        'execFunc': _pbs.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(229)),
                        'execFunc': _pbs.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(234)),
                        'execFunc': _pbs.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(235)),
                        'execFunc': _pbs.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(237)) || Boolean(_pbz.get_slotnums(322)) || Boolean(_pbz.get_slotnums(323)) || Boolean(_pbz.get_slotnums(490)),
                        'execFunc': _pbs.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(237)),
                        'execFunc': _pbs.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(238)) || Boolean(_pbz.get_slotnums(239)),
                        'execFunc': _pbs.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(242)),
                        'execFunc': _pbs.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(243)),
                        'execFunc': _pbs.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(244)),
                        'execFunc': _pbs.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(245)) || Boolean(_pbz.get_slotnums(246)) || Boolean(_pbz.get_slotnums(468)),
                        'execFunc': _pbs.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(247)),
                        'execFunc': _pbs.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(252)),
                        'execFunc': _pbs.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(266)),
                        'execFunc': _pbs.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(266)),
                        'execFunc': _pbs.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(267)) || Boolean(_pbz.get_slotnums(366)),
                        'execFunc': _pbs.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(267)) || Boolean(_pbz.get_slotnums(366)),
                        'execFunc': _pbs.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(268)),
                        'execFunc': _pbs.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(271)),
                        'execFunc': _pbs.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(275)),
                        'execFunc': _pbs.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(277)),
                        'execFunc': _pbs.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(278)),
                        'execFunc': _pbs.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(279)),
                        'execFunc': _pbs.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(282)),
                        'execFunc': _pbs.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(283)),
                        'execFunc': _pbs.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(285)),
                        'execFunc': _pbs.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(286)),
                        'execFunc': _pbs.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(286)),
                        'execFunc': _pbs.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(286)),
                        'execFunc': _pbs.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(287)),
                        'execFunc': _pbs.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(288)),
                        'execFunc': _pbs.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(289)),
                        'execFunc': _pbs.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(290)),
                        'execFunc': _pbs.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(291)),
                        'execFunc': _pbs.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(292)),
                        'execFunc': _pbs.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(293)),
                        'execFunc': _pbs.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(294)),
                        'execFunc': _pbs.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(295)),
                        'execFunc': _pbs.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(296)),
                        'execFunc': _pbs.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(297)),
                        'execFunc': _pbs.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(298)) || Boolean(_pbz.get_slotnums(299)) || Boolean(_pbz.get_slotnums(300)),
                        'execFunc': _pbs.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(301)),
                        'execFunc': _pbs.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(302)),
                        'execFunc': _pbs.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(303)),
                        'execFunc': _pbs.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(304)),
                        'execFunc': _pbs.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(305)) || Boolean(_pbz.get_slotnums(306)),
                        'execFunc': _pbs.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(307)),
                        'execFunc': _pbs.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(308)),
                        'execFunc': _pbs.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(310)) || Boolean(_pbz.get_slotnums(518)),
                        'execFunc': _pbs.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(313)),
                        'execFunc': _pbs.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(314)),
                        'execFunc': _pbs.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(315)),
                        'execFunc': _pbs.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(316)),
                        'execFunc': _pbs.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(317)),
                        'execFunc': _pbs.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(318)),
                        'execFunc': _pbs.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(319)),
                        'execFunc': _pbs.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(320)),
                        'execFunc': _pbs.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(322)),
                        'execFunc': _pbs.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(323)),
                        'execFunc': _pbs.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(324)) || Boolean(_pbz.get_slotnums(325)),
                        'execFunc': _pbs.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(326)),
                        'execFunc': _pbs.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(327)),
                        'execFunc': _pbs.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(328)),
                        'execFunc': _pbs.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(329)),
                        'execFunc': _pbs.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(330)) || Boolean(_pbz.get_slotnums(331)) || Boolean(_pbz.get_slotnums(332)),
                        'execFunc': _pbs.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(335)),
                        'execFunc': _pbs.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(336)),
                        'execFunc': _pbs.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(337)),
                        'execFunc': _pbs.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(338)),
                        'execFunc': _pbs.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(339)),
                        'execFunc': _pbs.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(340)),
                        'execFunc': _pbs.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(341)),
                        'execFunc': _pbs.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(342)),
                        'execFunc': _pbs.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(343)),
                        'execFunc': _pbs.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(344)),
                        'execFunc': _pbs.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(345)),
                        'execFunc': _pbs.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(346)),
                        'execFunc': _pbs.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(347)),
                        'execFunc': _pbs.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(356)) || Boolean(_pbz.get_slotnums(357)),
                        'execFunc': _pbs.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(358)),
                        'execFunc': _pbs.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(359)),
                        'execFunc': _pbs.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(360)) || Boolean(_pbz.get_slotnums(361)),
                        'execFunc': _pbs.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(362)) || Boolean(_pbz.get_slotnums(363)),
                        'execFunc': _pbs.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(364)),
                        'execFunc': _pbs.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(365)),
                        'execFunc': _pbs.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(367)),
                        'execFunc': _pbs.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(368)),
                        'execFunc': _pbs.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(369)),
                        'execFunc': _pbs.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(370)),
                        'execFunc': _pbs.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(371)),
                        'execFunc': _pbs.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(372)),
                        'execFunc': _pbs.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(373)),
                        'execFunc': _pbs.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(374)),
                        'execFunc': _pbs.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(375)),
                        'execFunc': _pbs.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(376)),
                        'execFunc': _pbs.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(377)),
                        'execFunc': _pbs.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(378)),
                        'execFunc': _pbs.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(379)),
                        'execFunc': _pbs.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(380)),
                        'execFunc': _pbs.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(381)),
                        'execFunc': _pbs.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(382)) || Boolean(_pbz.get_slotnums(509)),
                        'execFunc': _pbs.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(383)),
                        'execFunc': _pbs.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(384)),
                        'execFunc': _pbs.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(385)),
                        'execFunc': _pbs.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(386)),
                        'execFunc': _pbs.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(387)),
                        'execFunc': _pbs.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(389)),
                        'execFunc': _pbs.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(390)),
                        'execFunc': _pbs.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(391)),
                        'execFunc': _pbs.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(392)),
                        'execFunc': _pbs.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(397)),
                        'execFunc': _pbs.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(398)),
                        'execFunc': _pbs.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(399)),
                        'execFunc': _pbs.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(400)),
                        'execFunc': _pbs.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(407)),
                        'execFunc': _pbs.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(408)),
                        'execFunc': _pbs.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(409)),
                        'execFunc': _pbs.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(411)),
                        'execFunc': _pbs.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(412)),
                        'execFunc': _pbs.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(413)),
                        'execFunc': _pbs.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(414)),
                        'execFunc': _pbs.getSlot414PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(415)),
                        'execFunc': _pbs.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(419)),
                        'execFunc': _pbs.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(420)),
                        'execFunc': _pbs.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(421)),
                        'execFunc': _pbs.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(422)),
                        'execFunc': _pbs.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(423)),
                        'execFunc': _pbs.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(424)),
                        'execFunc': _pbs.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(425)),
                        'execFunc': _pbs.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(426)) || Boolean(_pbz.get_slotnums(427)) || Boolean(_pbz.get_slotnums(428)) || Boolean(_pbz.get_slotnums(429)),
                        'execFunc': _pbs.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(430)),
                        'execFunc': _pbs.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(434)) || Boolean(_pbz.get_slotnums(435)),
                        'execFunc': _pbs.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(437)),
                        'execFunc': _pbs.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(438)),
                        'execFunc': _pbs.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(439)),
                        'execFunc': _pbs.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(440)) || Boolean(_pbz.get_slotnums(441)),
                        'execFunc': _pbs.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(442)) || Boolean(_pbz.get_slotnums(443)),
                        'execFunc': _pbs.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(447)),
                        'execFunc': _pbs.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(450)),
                        'execFunc': _pbs.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(451)),
                        'execFunc': _pbs.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(455)),
                        'execFunc': _pbs.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(456)),
                        'execFunc': _pbs.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(457)) || Boolean(_pbz.get_slotnums(461)),
                        'execFunc': _pbs.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(458)),
                        'execFunc': _pbs.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(463)),
                        'execFunc': _pbs.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(464)),
                        'execFunc': _pbs.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(465)),
                        'execFunc': _pbs.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(466)),
                        'execFunc': _pbs.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(467)),
                        'execFunc': _pbs.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(470)) || Boolean(_pbz.get_slotnums(529)),
                        'execFunc': _pbs.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(471)),
                        'execFunc': _pbs.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(472)),
                        'execFunc': _pbs.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(473)),
                        'execFunc': _pbs.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(474)),
                        'execFunc': _pbs.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(478)),
                        'execFunc': _pbs.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(483)),
                        'execFunc': _pbs.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(485)),
                        'execFunc': _pbs.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(486)),
                        'execFunc': _pbs.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(487)),
                        'execFunc': _pbs.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(488)),
                        'execFunc': _pbs.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(489)) || Boolean(_pbz.get_slotnums(491)),
                        'execFunc': _pbs.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(500)) || Boolean(_pbz.get_slotnums(501)),
                        'execFunc': _pbs.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(502)),
                        'execFunc': _pbs.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(503)),
                        'execFunc': _pbs.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(505)),
                        'execFunc': _pbs.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(506)),
                        'execFunc': _pbs.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(507)) || Boolean(_pbz.get_slotnums(508)),
                        'execFunc': _pbs.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(510)),
                        'execFunc': _pbs.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(511)) || Boolean(_pbz.get_slotnums(512)),
                        'execFunc': _pbs.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(517)),
                        'execFunc': _pbs.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(518)),
                        'execFunc': _pbs.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(519)),
                        'execFunc': _pbs.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(520)),
                        'execFunc': _pbs.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(521)),
                        'execFunc': _pbs.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(522)) || Boolean(_pbz.get_slotnums(523)),
                        'execFunc': _pbs.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(524)),
                        'execFunc': _pbs.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(525)) || Boolean(_pbz.get_slotnums(526)),
                        'execFunc': _pbs.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(527)),
                        'execFunc': _pbs.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(528)),
                        'execFunc': _pbs.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(530)),
                        'execFunc': _pbs.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(531)),
                        'execFunc': _pbs.getSlot531PersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(534)) || Boolean(_pbz.get_slotnums(535)),
                        'execFunc': _pbs.getSlot13_8cmRensouhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(536)) || Boolean(_pbz.get_slotnums(537)),
                        'execFunc': _pbs.getSlot15_2cmSanrensouSyuhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pbz.get_slotnums(538)),
                        'execFunc': _pbs.getSlot538PersonalEffect
                    }], _pc1 = new _pbt.SlotItemEffectModel(), _pc2 = 0, _pc3 = _pc0; _pc2 < _pc3.length; _pc2++) {
                    var _pc4 = _pc3[_pc2];
                    if (_pc4.isExecute) {
                        var _pc5 = _pc4.execFunc(_pbz);
                        0, _pc1.add(_pc5);
                    }
                }
                return _pc1;
            };
        }(_pbq || (_pb0.SlotItemEffectUtil = _pbq = {}));
    },
}
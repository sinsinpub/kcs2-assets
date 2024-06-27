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
    73785: function(_lby, _lbz, _lc0) {
        'use strict';
        var _lc1 = null;
        var _lc2 = this && this.__importDefault || function(_lc3) {
            var _lc4 = null;
            return _lc3 && _lc3.__esModule ? _lc3 : {
                'default': _lc3
            };
        };
        defineModule(_lbz);
        Object.defineProperty(_lbz, '__esModule', {
            'value': true
        }), _lbz.SlotItemEffectParamModel = void 0;
        var _lc5 = _lc2(_lc0(18622)),
            _lc6 = _lc0(72170),
            _lc7 = (function() {
                var _lc8 = null;

                function _lc9(_lca, _lcb) {
                    var _lcc = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _lcd = {}, _lce = {}, _lcf = {}, _lcg = {}, _lch = {}, _lci = 0, _lcj = _lcb; _lci < _lcj.length; _lci++) {
                        var _lck = _lcj[_lci];
                        if (null != _lck) {
                            null == _lcd[_lck.mstID] && (_lcd[_lck.mstID] = new Array()), _lcd[_lck.mstID].push(_lck), null == _lce[_lck.mstID] ? _lce[_lck.mstID] = 1 : _lce[_lck.mstID] += 1, null == _lcf[_lck.equipType] ? _lcf[_lck.equipType] = 1 : _lcf[_lck.equipType] += 1, null == _lcg[_lck.mstID] && (_lcg[_lck.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            })), _lcg[_lck.mstID][_lck.level]++, null == _lch[_lck.mstID] && (_lch[_lck.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            }));
                            for (var _lcl = 0; _lcl <= this.SLOT_LEVEL_MAX && _lck.level >= _lcl; _lcl++) _lch[_lck.mstID][_lcl]++;
                        }
                    }
                    this._have_slots_dict = _lcd, this._have_slotnums_dict = _lce, this._have_type3nums_dict = _lcf, this._have_level_num_dict = _lcg, this._have_level_num_over_dict = _lch, this._ship_id = _lca.mstID, this._yomi = _lca.yomi, this._stype = _lca.shipTypeID, this._ctype = _lca.getClassType();
                }
                return Object.defineProperty(_lc9.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _lcm = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lc9.prototype, 'have_lavel_num_dict', {
                    'get': function() {
                        var _lcn = null;
                        return this._have_level_num_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lc9.prototype, 'have_level_num_over_dict', {
                    'get': function() {
                        var _lco = null;
                        return this._have_level_num_over_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lc9.prototype, 'ship_id', {
                    'get': function() {
                        var _lcp = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lc9.prototype, 'yomi', {
                    'get': function() {
                        var _lcq = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lc9.prototype, 'stype', {
                    'get': function() {
                        var _lcr = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lc9.prototype, 'ctype', {
                    'get': function() {
                        var _lcs = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _lc9.prototype.get_slotnums = function(_lct) {
                    var _lcu = null;
                    return null == this._have_slotnums_dict[_lct] ? 0 : this._have_slotnums_dict[_lct];
                }, _lc9.prototype.get_type3_nums = function(_lcv) {
                    var _lcw = null;
                    return null == this._have_type3nums_dict[_lcv] ? 0 : this._have_type3nums_dict[_lcv];
                }, _lc9.prototype.have_slot_ids = function() {
                    var _lcx = null;
                    return Object.keys(this._have_slots_dict);
                }, _lc9.prototype.get_each_level_nums = function(_lcy) {
                    var _lcz = null,
                        _ld0 = this._have_slots_dict[_lcy],
                        _ld1 = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _ld0)
                        for (var _ld2 = 0, _ld3 = _ld0; _ld2 < _ld3.length; _ld2++) {
                            _ld1[_ld3[_ld2].level]++;
                        }
                    return _ld1;
                }, _lc9.prototype.get_each_level_over_nums = function(_ld4) {
                    var _ld5 = null;
                    for (var _ld6 = this, _ld7 = [], _ld8 = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _ld9 = function(_lda) {
                            var _ldb = null;
                            if (_ld7[_lda] = Array.apply(null, new Array(_ldc.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _ldc.have_slots_dict[_lda]) return 'continue';
                            _ldc.get_each_level_nums(_lda).forEach(function(_ldd, _lde) {
                                var _ldf = null;
                                for (var _ldg = 1; _ldg <= _ld6.SLOT_LEVEL_MAX; _ldg++) _lde >= _ldg && (_ld7[_lda][_ldg] += _ldd, _ld8[_ldg] += _ldd);
                            });
                        }, _ldc = this, _ldh = 0, _ldi = _ld4; _ldh < _ldi.length; _ldh++) {
                        _ld9(_ldi[_ldh]);
                    }
                    return {
                        'slot': _ld7,
                        'total': _ld8
                    };
                }, _lc9.prototype.getTotalCountWithOverLeveledItem = function(_ldj) {
                    var _ldk = null;
                    for (var _ldl = this, _ldm = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _ldn = 0, _ldo = _ldj; _ldn < _ldo.length; _ldn++) {
                        var _ldp = _ldo[_ldn];
                        if (null != this._have_slots_dict[_ldp]) this._have_level_num_dict[_ldp].forEach(function(_ldq, _ldr) {
                            var _lds = null;
                            for (var _ldt = 0; _ldt <= _ldl.SLOT_LEVEL_MAX; _ldt++) _ldr >= _ldt && (_ldm[_ldt] += _ldq);
                        });
                    }
                    return _ldm;
                }, _lc9.prototype.get_have_rader_nums = function() {
                    var _ldu = null;
                    for (var _ldv = 0, _ldw = 0, _ldx = 0, _ldy = 0, _ldz = this.have_slot_ids(); _ldy < _ldz.length; _ldy++) {
                        var _le0 = _ldz[_ldy],
                            _le1 = _lc5.default.model.slot.getMst(_le0),
                            _le2 = _le1.equipType;
                        12 != _le2 && 13 != _le2 || (_le1.sakuteki >= 5 && (_ldv += this.get_slotnums(parseInt(_le0))), _le1.meichu >= 8 && (_ldw += this.get_slotnums(parseInt(_le0))), _le1.taiku >= 2 && (_ldx += this.get_slotnums(parseInt(_le0))));
                    }
                    return {
                        'water_rader': _ldv,
                        'high_water_rader': _ldw,
                        'air_rader': _ldx
                    };
                }, _lc9.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _lc9.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _lc9.prototype.getCountryName = function() {
                    var _le3 = null;
                    return null == _lc6.SHIP_COUNTRY[this._ctype] ? '' : _lc6.SHIP_COUNTRY[this._ctype];
                }, _lc9.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _lc9.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _lc9;
            }());
        _lbz.SlotItemEffectParamModel = _lc7;
    },
    16718: (_lpa, _lpb, _lpc) => {
        'use strict';
        var _lpd = null;
        defineModule(_lpb);
        Object.defineProperty(_lpb, '__esModule', {
            'value': true
        }), _lpb.TaskGetSlotItemEffectParams = void 0;
        var _lpe = _lpc(74496),
            _lpf = _lpc(82692),
            _lpg = (function() {
                var _lph = null;

                function _lpi(_lpj, _lpk, _lpl) {
                    var _lpm = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lpj;
                    var _lpn = _lpj.getSlotitems();
                    _lpn.push(_lpj.getSlotitemEx());
                    var _lpo = _lpn.map(function(_lpp) {
                        var _lpq = null;
                        return null == _lpp || null != _lpk && _lpp.memID == _lpk.memID ? null : _lpp;
                    });
                    this._removeSlots = _lpo;
                    var _lpr = _lpo.map(function(_lps) {
                        return _lps;
                    });
                    _lpr.push(_lpl), this._toSlots = _lpr;
                }
                return _lpi.prototype.start = function() {
                    var _lpt = null,
                        _lpu = this._ship.getSlotitems();
                    _lpu.push(this._ship.getSlotitemEx());
                    var _lpv = _lpf.SlotItemEffectUtil.getSlotitemEffect(this._ship, _lpu),
                        _lpw = _lpf.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lpx = _lpf.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_lpv, _lpw),
                        'toSlotItemEffect': this._subEffectModels(_lpx, _lpw)
                    };
                }, _lpi.prototype._subEffectModels = function(_lpy, _lpz) {
                    var _lq0 = null,
                        _lq1 = new _lpe.SlotItemEffectModel();
                    return _lq1.houg = _lpy.houg - _lpz.houg, _lq1.raig = _lpy.raig - _lpz.raig, _lq1.tyku = _lpy.tyku - _lpz.tyku, _lq1.souk = _lpy.souk - _lpz.souk, _lq1.kaih = _lpy.kaih - _lpz.kaih, _lq1.tais = _lpy.tais - _lpz.tais, _lq1.saku = _lpy.saku - _lpz.saku, _lq1.baku = _lpy.baku - _lpz.baku, _lq1.houm = _lpy.houm - _lpz.houm, _lq1.leng = _lpy.leng - _lpz.leng, _lq1;
                }, _lpi;
            }());
        _lpb.TaskGetSlotItemEffectParams = _lpg;
    },
    69377: function(_mdr, _mds, _mdt) {
        'use strict';
        var _mdu = null;
        var _mdv = this && this.__importDefault || function(_mdw) {
            var _mdx = null;
            return _mdw && _mdw.__esModule ? _mdw : {
                'default': _mdw
            };
        };
        defineModule(_mds);
        Object.defineProperty(_mds, '__esModule', {
            'value': true
        }), _mds.get25mmMachinegunEffect = void 0;
        var _mdy = _mdt(74496),
            _mdz = _mdv(_mdt(18622));
        _mds.get25mmMachinegunEffect = function(_me0) {
            var _me1 = null,
                _me2 = new _mdy.SlotItemEffectModel(),
                _me3 = false,
                _me4 = new _mdy.SlotItemEffectModel(),
                _me5 = 0,
                _me6 = new _mdy.SlotItemEffectModel(),
                _me7 = {},
                _me8 = 0;
            if (662 == _me0.ship_id || 663 == _me0.ship_id ? (_me4.tyku += 2, _me4.kaih += 1, _me3 = true) : 668 == _me0.ship_id ? (_me4.tyku += 3, _me4.kaih += 2, _me3 = true) : 979 == _me0.ship_id && (_me4.tyku += 2, _me4.kaih += 3, _me3 = true, _me6.kaih += 2, _me7[49] = _me6, _me8 = 1), 56 == _me0.ctype && (_me4.houg += 1, _me4.tyku += 2, _me4.kaih += 2, _me3 = true, _me5 = 1), Object.keys(_me7).forEach(function(_me9) {
                    var _mea = null,
                        _meb = _me7[parseInt(_me9)],
                        _mec = _me0.get_slotnums(parseInt(_me9));
                    _me2.add(_meb.multiply(_mec));
                }), _me8 > 0) {
                var _med = _me0.get_each_level_over_nums([49, 39, 40, 131]),
                    _mee = _med.slot[49],
                    _mef = _med.slot[39],
                    _meg = _med.slot[40],
                    _meh = _med.slot[131];
                1 == _me8 && (_mee[6] >= 1 && (_me2.houm += 1 * _mee[6]), _mee[7] >= 1 && (_me2.tyku += 1 * _mee[7]), _mee[8] >= 1 && (_me2.kaih += 1 * _mee[8]), _mee[9] >= 1 && (_me2.tyku += 1 * _mee[9]), _mee[10] >= 1 && (_me2.houg += 1 * _mee[10]), _mef[8] >= 1 && (_me2.kaih += 1 * _mef[8]), _mef[9] >= 1 && (_me2.tyku += 2 * _mef[9]), _mef[10] >= 1 && (_me2.houg += 1 * _mef[10]), _meg[9] >= 1 && (_me2.tyku += 2 * _meg[9]), _meg[10] >= 1 && (_me2.houg += 1 * _meg[10]), _meh[10] >= 1 && (_me2.tyku += 2 * _meh[10]));
            }
            if (0 == _me3) return _me2;
            var _mei = _me0.get_slotnums(39) + _me0.get_slotnums(40) + _me0.get_slotnums(49) + _me0.get_slotnums(131);
            if (_me2.add(_me4.multiply(_mei)), 0 == _me5) return _me2;
            for (var _mej = 0, _mek = 0, _mel = _me0.have_slot_ids(); _mek < _mel.length; _mek++) {
                var _mem = _mel[_mek],
                    _men = _mdz.default.model.slot.getMst(_mem),
                    _meo = _men.equipType;
                12 != _meo && 13 != _meo || (_men.sakuteki >= 5 && _me0.get_slotnums(parseInt(_mem)), _men.taiku >= 2 && (_mej += _me0.get_slotnums(parseInt(_mem))));
            }
            return _mej >= 1 && 1 == _me5 && (_me2.tyku += 2, _me2.kaih += 2), _me2;
        };
    },
    77670: function(_mep, _meq, _mer) {
        'use strict';
        var _mes = null;
        var _met = this && this.__importDefault || function(_meu) {
            var _mev = null;
            return _meu && _meu.__esModule ? _meu : {
                'default': _meu
            };
        };
        defineModule(_meq);
        Object.defineProperty(_meq, '__esModule', {
            'value': true
        }), _meq.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mew = _mer(74496),
            _mex = _met(_mer(18622));
        _meq.get8cmAntiAircraftGunPersonalEffect = function(_mey) {
            var _mez = null,
                _mf0 = new _mew.SlotItemEffectModel(),
                _mf1 = false,
                _mf2 = new _mew.SlotItemEffectModel(),
                _mf3 = 0;
            if (501 != _mey.ship_id && 506 != _mey.ship_id && 502 != _mey.ship_id && 507 != _mey.ship_id || (_mf2.tyku += 2, _mf2.kaih += 1, _mf1 = true, _mf3 = 1), 501 != _mey.ship_id && 506 != _mey.ship_id || (_mf2.houg += 1, _mf2.tyku += 2, _mf2.kaih += 2, _mf1 = true, _mf3 = 1), 0 == _mf1) return _mf0;
            var _mf4 = _mey.get_slotnums(66) + _mey.get_slotnums(220);
            _mf0.add(_mf2.multiply(_mf4));
            for (var _mf5 = 0, _mf6 = 0, _mf7 = _mey.have_slot_ids(); _mf6 < _mf7.length; _mf6++) {
                var _mf8 = _mf7[_mf6],
                    _mf9 = _mex.default.model.slot.getMst(_mf8),
                    _mfa = _mf9.equipType;
                12 != _mfa && 13 != _mfa || (_mf9.sakuteki >= 5 && _mey.get_slotnums(parseInt(_mf8)), _mf9.taiku >= 2 && (_mf5 += _mey.get_slotnums(parseInt(_mf8))));
            }
            return 0 == _mf3 || _mf5 >= 1 && (_mf0.tyku += 1, _mf0.kaih += 2), _mf0;
        };
    },
    34165: (_mfb, _mfc, _mfd) => {
        'use strict';
        var _mfe = null;
        defineModule(_mfc);
        Object.defineProperty(_mfc, '__esModule', {
            'value': true
        }), _mfc.getCamouflageSlotPersonalEffect = void 0;
        var _mff = _mfd(74496);
        _mfc.getCamouflageSlotPersonalEffect = function(_mfg) {
            var _mfh = null,
                _mfi = new _mff.SlotItemEffectModel();
            return 'きそ' != _mfg.yomi && 'たま' != _mfg.yomi || (_mfi.kaih = 7, _mfi.souk = 2), _mfi;
        };
    },
    31127: (_mfj, _mfk, _mfl) => {
        'use strict';
        var _mfm = null;
        defineModule(_mfk);
        Object.defineProperty(_mfk, '__esModule', {
            'value': true
        }), _mfk.getHighZuiunSeriesEffect = void 0;
        var _mfn = _mfl(74496);
        _mfk.getHighZuiunSeriesEffect = function(_mfo) {
            var _mfp = null,
                _mfq = new _mfn.SlotItemEffectModel(),
                _mfr = false,
                _mfs = new _mfn.SlotItemEffectModel();
            if (662 == _mfo.ship_id ? (_mfq.houg += 3, _mfq.kaih += 1) : 663 == _mfo.ship_id || 668 == _mfo.ship_id || 501 == _mfo.ship_id || 506 == _mfo.ship_id || 553 == _mfo.ship_id || 554 == _mfo.ship_id ? (_mfs.houg += 3, _mfs.kaih += 2, _mfs.tyku += 1, _mfr = true) : 502 != _mfo.ship_id && 507 != _mfo.ship_id || (_mfs.houg += 2, _mfs.kaih += 2, _mfs.tyku += 1, _mfr = true), 0 == _mfr) return _mfq;
            var _mft = 0;
            return [237, 322, 323, 490].forEach(function(_mfu) {
                var _mfv = null;
                _mft += _mfo.get_slotnums(_mfu);
            }), _mfq.add(_mfs.multiply(_mft)), _mfq;
        };
    },
    81018: function(_mfw, _mfx, _mfy) {
        'use strict';
        var _mfz = null;
        var _mg0 = this && this.__importDefault || function(_mg1) {
            var _mg2 = null;
            return _mg1 && _mg1.__esModule ? _mg1 : {
                'default': _mg1
            };
        };
        defineModule(_mfx);
        Object.defineProperty(_mfx, '__esModule', {
            'value': true
        }), _mfx.getRaderPrivateEffect = void 0;
        var _mg3 = _mfy(74496),
            _mg4 = _mg0(_mfy(18622));
        _mfx.getRaderPrivateEffect = function(_mg5) {
            var _mg6 = null,
                _mg7 = new _mg3.SlotItemEffectModel(),
                _mg8 = 0,
                _mg9 = 0;
            if (569 == _mg5.ship_id || 648 == _mg5.ship_id || 961 == _mg5.ship_id || 951 == _mg5.ship_id) _mg8 = 1;
            else {
                if (955 != _mg5.ship_id && 960 != _mg5.ship_id) return _mg7;
                _mg8 = 2, _mg9 = 1;
            }
            for (var _mga = 0, _mgb = 0, _mgc = _mg5.have_slot_ids(); _mgb < _mgc.length; _mgb++) {
                var _mgd = _mgc[_mgb],
                    _mge = _mg4.default.model.slot.getMst(_mgd),
                    _mgf = _mge.equipType;
                12 != _mgf && 13 != _mgf || (_mge.sakuteki >= 5 && _mg5.get_slotnums(parseInt(_mgd)), _mge.taiku >= 2 && (_mga += _mg5.get_slotnums(parseInt(_mgd))));
            }
            if (_mga > 0 && (1 == _mg8 ? (_mg7.houg += 1, _mg7.kaih += 3, _mg7.tyku += 2) : 2 == _mg8 && (_mg7.tyku += 2, _mg7.kaih += 1)), 0 == _mg9) return _mg7;
            for (var _mgg = [], _mgh = function(_mgi) {
                    var _mgj = null;
                    if (null == _mg5.have_slots_dict[_mgi]) return 'continue';
                    var _mgk = _mg5.get_each_level_nums(_mgi);
                    null == _mgg[_mgi] && (_mgg[_mgi] = []), _mgk.forEach(function(_mgl, _mgm) {
                        var _mgn = null;
                        for (var _mgo = 1; _mgo <= _mg5.SLOT_LEVEL_MAX; _mgo++) null == _mgg[_mgi][_mgo] && (_mgg[_mgi][_mgo] = 0), _mgm >= _mgo && (_mgg[_mgi][_mgo] += _mgl);
                    });
                }, _mgp = 0, _mgq = [450]; _mgp < _mgq.length; _mgp++) {
                _mgh(_mgq[_mgp]);
            }
            var _mgr = null != _mgg[450] ? _mgg[450][4] : 0;
            return 1 == _mg9 && _mgr > 0 && (_mg7.houg += 1, _mg7.houm += 1, _mg7.tyku += 1, _mg7.kaih += 2), _mg7;
        };
    },
    56716: (_mgs, _mgt, _mgu) => {
        'use strict';
        var _mgv = null;
        defineModule(_mgt);
        Object.defineProperty(_mgt, '__esModule', {
            'value': true
        }), _mgt.getSearchLightEffect = void 0;
        var _mgw = _mgu(74496);
        _mgt.getSearchLightEffect = function(_mgx) {
            var _mgy = null,
                _mgz = new _mgw.SlotItemEffectModel(),
                _mh0 = _mgx.get_type3_nums(29);
            return 'ひえい' == _mgx.yomi || 'きりしま' == _mgx.yomi || 'ちょうかい' == _mgx.yomi || 'じんつう' == _mgx.yomi || 'あかつき' == _mgx.yomi ? (_mgz.houg += 4, _mgz.kaih -= 1) : 'あきぐも' == _mgx.yomi ? _mgz.houg = _mgz.houg + 2 * _mh0 : 'ゆきかぜ' == _mgx.yomi && (_mgz.houg = _mgz.houg + _mh0, _mgz.tyku = _mgz.tyku + _mh0), 662 != _mgx.ship_id && 663 != _mgx.ship_id && 668 != _mgx.ship_id || (_mgz.raig += 2, _mgz.houg += 4), 'じんつう' == _mgx.yomi && (_mgz.raig += 8, _mgz.houg += 4), _mgz;
        };
    },
    17713: (_mh1, _mh2, _mh3) => {
        'use strict';
        var _mh4 = null;
        defineModule(_mh2);
        Object.defineProperty(_mh2, '__esModule', {
            'value': true
        }), _mh2.getSearchLightLargeEffect = void 0;
        var _mh5 = _mh3(74496);
        _mh2.getSearchLightLargeEffect = function(_mh6) {
            var _mh7 = null,
                _mh8 = new _mh5.SlotItemEffectModel();
            'ひえい' == _mh6.yomi || 'きりしま' == _mh6.yomi ? (_mh8.houg += 6, _mh8.kaih -= 2) : 'やまと' != _mh6.yomi && 'むさし' != _mh6.yomi || (_mh8.houg += 4, _mh8.kaih -= 1);
            var _mh9 = _mh6.get_slotnums(174);
            return 592 == _mh6.ship_id && (_mh8.houg += 3, _mh8.raig += 3, _mh9 > 0 && (_mh8.raig += 5)), _mh8;
        };
    },
    17213: (_mha, _mhb, _mhc) => {
        'use strict';
        var _mhd = null;
        defineModule(_mhb);
        Object.defineProperty(_mhb, '__esModule', {
            'value': true
        }), _mhb.getSlot100PersonalEffect = void 0;
        var _mhe = _mhc(74496);
        _mhb.getSlot100PersonalEffect = function(_mhf) {
            var _mhg = null,
                _mhh = new _mhe.SlotItemEffectModel(),
                _mhi = new _mhe.SlotItemEffectModel();
            if (553 == _mhf.ship_id) _mhi.houg = 4;
            else {
                if (554 != _mhf.ship_id) return 196 == _mhf.ship_id ? (_mhh.houg = 3, _mhh) : 197 == _mhf.ship_id ? (_mhh.houg = 6, _mhh) : _mhh;
                _mhi.houg = 4;
            }
            var _mhj = _mhf.get_slotnums(100);
            return _mhh = _mhi.multiply(_mhj);
        };
    },
    40176: (_mhk, _mhl, _mhm) => {
        'use strict';
        var _mhn = null;
        defineModule(_mhl);
        Object.defineProperty(_mhl, '__esModule', {
            'value': true
        }), _mhl.getSlot104PersonalEffect = void 0;
        var _mho = _mhm(74496);
        _mhl.getSlot104PersonalEffect = function(_mhp) {
            var _mhq = null,
                _mhr = new _mho.SlotItemEffectModel(),
                _mhs = new _mho.SlotItemEffectModel();
            if (149 == _mhp.ship_id || 591 == _mhp.ship_id) _mhs.houg = 2;
            else {
                if (150 == _mhp.ship_id || 592 == _mhp.ship_id) _mhs.houg = 1;
                else {
                    if (152 == _mhp.ship_id) _mhs.houg = 1;
                    else {
                        if (151 != _mhp.ship_id && 593 != _mhp.ship_id && 954 != _mhp.ship_id) return _mhr;
                        _mhs.houg = 2, _mhs.tyku = 1, _mhs.kaih = 2;
                    }
                }
            }
            var _mht = _mhp.get_slotnums(104);
            return _mhr = _mhs.multiply(_mht);
        };
    },
    32889: (_mhu, _mhv, _mhw) => {
        'use strict';
        var _mhx = null;
        defineModule(_mhv);
        Object.defineProperty(_mhv, '__esModule', {
            'value': true
        }), _mhv.getSlot106PersonalEffect = void 0;
        var _mhy = _mhw(74496);
        _mhv.getSlot106PersonalEffect = function(_mhz) {
            var _mi0 = null,
                _mi1 = new _mhy.SlotItemEffectModel(),
                _mi2 = new _mhy.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mhz.ship_id) >= 0 ? (_mi2.houg += 1, _mi2.tyku += 2, _mi2.souk += 1, _mi2.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mhz.yomi) >= 0 ? (_mi2.tyku += 1, _mi2.souk += 1, _mi2.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mhz.yomi) >= 0 && (_mi2.tyku += 2, _mi2.souk += 1, _mi2.kaih += 2, 663 != _mhz.ship_id && 668 != _mhz.ship_id || (_mi1.houg += 1, _mi1.tyku += 1, _mi1.souk += 1, _mi1.kaih += 1), 668 == _mhz.ship_id && (_mi1.tyku += 1, _mi1.kaih += 1)), !_mi2.exists()) return _mi1;
            var _mi3 = _mhz.get_slotnums(106) + _mhz.get_slotnums(450);
            return _mi1.add(_mi2.multiply(_mi3)), _mi1;
        };
    },
    15133: (_mi4, _mi5, _mi6) => {
        'use strict';
        var _mi7 = null;
        defineModule(_mi5);
        Object.defineProperty(_mi5, '__esModule', {
            'value': true
        }), _mi5.getSlot115PersonalEffect = void 0;
        var _mi8 = _mi6(74496);
        _mi5.getSlot115PersonalEffect = function(_mi9) {
            var _mia = null,
                _mib = new _mi8.SlotItemEffectModel(),
                _mic = false,
                _mid = new _mi8.SlotItemEffectModel(),
                _mie = 0;
            if (55 != _mi9.ctype && 47 != _mi9.ctype || (_mid.houg += 2, _mid.saku += 2, _mid.kaih += 1, _mic = true, _mie = 1), 0 == _mic) return _mib;
            var _mif = _mi9.get_slotnums(115);
            if (_mib.add(_mid.multiply(_mif)), 0 == _mie) return _mib;
            var _mig = _mi9.get_each_level_nums(115)[10];
            return 1 == _mie && (_mib.houg += 1 * _mig, _mib.kaih += 1 * _mig), _mib;
        };
    },
    55747: (_mih, _mii, _mij) => {
        'use strict';
        var _mik = null;
        defineModule(_mii);
        Object.defineProperty(_mii, '__esModule', {
            'value': true
        }), _mii.getSlot118PersonalEffect = void 0;
        var _mil = _mij(74496);
        _mii.getSlot118PersonalEffect = function(_mim) {
            var _min = null,
                _mio = new _mil.SlotItemEffectModel(),
                _mip = false,
                _miq = new _mil.SlotItemEffectModel(),
                _mir = 0;
            if (52 == _mim.ctype && (_miq.houg += 1, _miq.saku += 2, _miq.kaih += 2, _mir = 1, _mip = true), 507 == _mim.ship_id && (_miq.houg += 3, _miq.saku += 2, _miq.kaih += 1, _mir = 2, _mip = true), 0 == _mip) return _mio;
            var _mis = _mim.get_slotnums(118) + _mim.get_slotnums(521);
            if (_mio.add(_miq.multiply(_mis)), 0 == _mim.get_slotnums(118)) return _mio;
            if (0 == _mir) return _mio;
            var _mit = _mim.get_each_level_nums(118),
                _miu = 0,
                _miv = 0,
                _miw = 0,
                _mix = _mit[10];
            return _mit.forEach(function(_miy, _miz) {
                _miz >= 2 && (_miu += _miy), _miz >= 5 && (_miv += _miy), _miz >= 7 && (_miw += _miy);
            }), 1 == _mir ? (_mio.houg += 2 * _mix, _mio.saku += 1 * _mix) : 2 == _mir && (_mio.houm += 1 * _miu, _mio.kaih += 1 * _miv, _mio.houg += 1 * _miw, _mio.houg += 1 * _mix, _mio.raig += 1 * _mix, _mio.tyku += 1 * _mix, _mio.saku += 1 * _mix, _mio.kaih += 1 * _mix), _mio;
        };
    },
    11285: (_mj0, _mj1, _mj2) => {
        'use strict';
        var _mj3 = null;
        defineModule(_mj1);
        Object.defineProperty(_mj1, '__esModule', {
            'value': true
        }), _mj1.getSlot119PersonalEffect = void 0;
        var _mj4 = _mj2(74496);
        _mj1.getSlot119PersonalEffect = function(_mj5) {
            var _mj6 = null,
                _mj7 = new _mj4.SlotItemEffectModel(),
                _mj8 = new _mj4.SlotItemEffectModel();
            34 == _mj5.ctype || 56 == _mj5.ctype ? _mj8.houg += 1 : 90 == _mj5.ctype && (_mj8.houg += 2, _mj8.raig += 1);
            var _mj9 = true;
            if (_mj8.exists() || (_mj9 = false), 0 == _mj9) return _mj7;
            var _mja = _mj5.get_slotnums(119);
            return _mj7 = _mj8.multiply(_mja);
        };
    },
    96200: (_mjb, _mjc, _mjd) => {
        'use strict';
        var _mje = null;
        defineModule(_mjc);
        Object.defineProperty(_mjc, '__esModule', {
            'value': true
        }), _mjc.getSlot120mm50GroupPersonalEffect = void 0;
        var _mjf = _mjd(74496);
        _mjc.getSlot120mm50GroupPersonalEffect = function(_mjg) {
            var _mjh = null,
                _mji = new _mjf.SlotItemEffectModel(),
                _mjj = false,
                _mjk = new _mjf.SlotItemEffectModel(),
                _mjl = _mjg.get_slotnums(147),
                _mjm = _mjg.get_slotnums(393),
                _mjn = _mjg.get_slotnums(394),
                _mjo = new _mjf.SlotItemEffectModel(),
                _mjp = new _mjf.SlotItemEffectModel();
            if (61 == _mjg.ctype && (_mjk.houg += 1, _mjk.kaih += 1, _mjj = true, _mjm >= 1 && (_mjo.houg += 1, _mjo.tyku += 1), _mjn >= 1 && (_mjp.houg += 1, _mjp.tyku += 1, _mjp.kaih += 1, 'グレカーレ' == _mjg.yomi && (_mjp.kaih += 1)), 1), 0 == _mjj) return _mji;
            var _mjq = _mjl + _mjm + _mjn;
            _mji.add(_mjk.multiply(_mjq)).add(_mjo.multiply(_mjm)).add(_mjp.multiply(_mjn));
            var _mjr = _mjg.get_each_level_over_nums([394]).slot[394];
            return _mjr[7] >= 1 && (_mji.houm += 1 * _mjr[7], 'グレカーレ' == _mjg.yomi && (_mji.houg += 1 * _mjr[7])), _mjr[8] >= 1 && (_mji.houg += 1 * _mjr[8]), _mjr[9] >= 1 && (_mji.houm += 1 * _mjr[9]), _mjr[10] >= 1 && (_mji.houg += 1 * _mjr[10], 'グレカーレ' == _mjg.yomi && (_mji.kaih += 1 * _mjr[10])), _mji;
        };
    },
    33155: function(_mjs, _mjt, _mju) {
        'use strict';
        var _mjv = null;
        var _mjw = this && this.__importDefault || function(_mjx) {
            var _mjy = null;
            return _mjx && _mjx.__esModule ? _mjx : {
                'default': _mjx
            };
        };
        defineModule(_mjt);
        Object.defineProperty(_mjt, '__esModule', {
            'value': true
        }), _mjt.getSlot121PersonalEffect = void 0;
        var _mjz = _mju(74496),
            _mk0 = _mjw(_mju(18622));
        _mjt.getSlot121PersonalEffect = function(_mk1) {
            var _mk2 = null,
                _mk3 = new _mjz.SlotItemEffectModel(),
                _mk4 = 0,
                _mk5 = new _mjz.SlotItemEffectModel(),
                _mk6 = false;
            54 == _mk1.ctype && (_mk3.tyku += 4, _mk3.kaih += 2, _mk4 = 1), 968 == _mk1.ship_id && (_mk5.houg += 1, _mk5.tyku += 1, _mk5.kaih += 1, _mk6 = true);
            var _mk7 = _mk1.get_slotnums(121);
            if (_mk6 && _mk3.add(_mk5.multiply(_mk7)), 0 == _mk4) return _mk3;
            for (var _mk8 = 0, _mk9 = 0, _mka = _mk1.have_slot_ids(); _mk9 < _mka.length; _mk9++) {
                var _mkb = _mka[_mk9],
                    _mkc = _mk0.default.model.slot.getMst(_mkb),
                    _mkd = _mkc.equipType;
                12 != _mkd && 13 != _mkd || (_mkc.sakuteki >= 5 && _mk1.get_slotnums(parseInt(_mkb)), _mkc.taiku >= 2 && (_mk8 += _mk1.get_slotnums(parseInt(_mkb))));
            }
            return _mk8 >= 1 && (_mk3.tyku += 2, _mk3.kaih += 2, 968 == _mk1.ship_id && (_mk3.houg += 1 * _mk7, _mk3.houm += 1 * _mk7)), _mk3;
        };
    },
    9115: function(_mke, _mkf, _mkg) {
        'use strict';
        var _mkh = null;
        var _mki = this && this.__importDefault || function(_mkj) {
            var _mkk = null;
            return _mkj && _mkj.__esModule ? _mkj : {
                'default': _mkj
            };
        };
        defineModule(_mkf);
        Object.defineProperty(_mkf, '__esModule', {
            'value': true
        }), _mkf.getSlot122PersonalEffect = void 0;
        var _mkl = _mkg(74496),
            _mkm = _mki(_mkg(18622));
        _mkf.getSlot122PersonalEffect = function(_mkn) {
            var _mko = null,
                _mkp = new _mkl.SlotItemEffectModel(),
                _mkq = 0,
                _mkr = 0,
                _mks = false;
            656 == _mkn.ship_id && (_mks = true, _mkq = 1, _mkr = 1);
            var _mkt = 0,
                _mku = 0,
                _mkv = _mkn.get_each_level_nums(122),
                _mkw = 0;
            if (_mks) {
                _mkv.forEach(function(_mkx, _mky) {
                    _mky >= 4 && (_mkw += _mkx);
                });
                for (var _mkz = 0, _ml0 = _mkn.have_slot_ids(); _mkz < _ml0.length; _mkz++) {
                    var _ml1 = _ml0[_mkz],
                        _ml2 = _mkm.default.model.slot.getMst(_ml1),
                        _ml3 = _ml2.equipType;
                    12 != _ml3 && 13 != _ml3 || (_ml2.sakuteki >= 5 && (_mkt += _mkn.get_slotnums(parseInt(_ml1))), _ml2.taiku >= 2 && (_mku += _mkn.get_slotnums(parseInt(_ml1))));
                }
            }
            return _mkw > 0 && (1 == _mkr && (_mkt > 0 && (_mkp.houg += 4, _mkp.kaih += 3), _mku > 0 && (_mkp.tyku += 4, _mkp.kaih += 3)), 1 == _mkq && (_mkp.houg += 5 * _mkw, _mkp.tyku += 3 * _mkw, _mkp.kaih += 2 * _mkw)), _mkp;
        };
    },
    85127: (_ml4, _ml5, _ml6) => {
        'use strict';
        var _ml7 = null;
        defineModule(_ml5);
        Object.defineProperty(_ml5, '__esModule', {
            'value': true
        }), _ml5.getSlot123PersonalEffect = void 0;
        var _ml8 = _ml6(74496);
        _ml5.getSlot123PersonalEffect = function(_ml9) {
            var _mla = null,
                _mlb = new _ml8.SlotItemEffectModel(),
                _mlc = (new _ml8.SlotItemEffectModel(), 0),
                _mld = (_ml9.get_slotnums(123), _ml9.get_slotnums(124));
            if ('ドイツ' != _ml9.getCountryName()) return _mlb;
            _mlc = 1, _mld >= 1 && (_mlb.kaih += 1 * _mld);
            var _mle = _ml9.get_each_level_over_nums([123, 124]),
                _mlf = _mle.slot[123],
                _mlg = _mle.slot[124];
            return 1 == _mlc && (_mlf[5] >= 1 && (_mlb.houg += 1 * _mlf[5]), _mlf[7] >= 1 && (_mlb.houm += 1 * _mlf[7]), _mlf[9] >= 1 && (_mlb.houg += 1 * _mlf[9]), _mlf[10] >= 1 && (_mlb.houm += 1 * _mlf[10]), _mlg[8] >= 1 && (_mlb.kaih += 1 * _mlg[8]), _mlg[10] >= 1 && (_mlb.houm += 1 * _mlg[10])), _mlb;
        };
    },
    87204: (_mlh, _mli, _mlj) => {
        'use strict';
        var _mlk = null;
        defineModule(_mli);
        Object.defineProperty(_mli, '__esModule', {
            'value': true
        }), _mli.getSlot124PersonalEffect = void 0;
        var _mll = _mlj(74496);
        _mli.getSlot124PersonalEffect = function(_mlm) {
            var _mln = null,
                _mlo = new _mll.SlotItemEffectModel(),
                _mlp = (new _mll.SlotItemEffectModel(), 0),
                _mlq = _mlm.getCountryName();
            if ('ドイツ' == _mlq) _mlp = 1;
            else {
                if ('イタリア' != _mlq) return _mlo;
                _mlp = 2;
            }
            var _mlr = _mlm.get_each_level_over_nums([124]).slot[124];
            return 1 == _mlp ? (_mlr[7] >= 1 && (_mlo.houm += 1 * _mlr[7]), _mlr[8] >= 1 && (_mlo.houg += 1 * _mlr[8]), _mlr[9] >= 1 && (_mlo.tyku += 1 * _mlr[9]), _mlr[10] >= 1 && (_mlo.houm += 1 * _mlr[10])) : 2 == _mlp && (_mlr[8] >= 1 && (_mlo.houm += 1 * _mlr[8]), _mlr[9] >= 1 && (_mlo.tyku += 1 * _mlr[9]), _mlr[10] >= 1 && (_mlo.houg += 1 * _mlr[10])), _mlo;
        };
    },
    37173: (_mls, _mlt, _mlu) => {
        'use strict';
        var _mlv = null;
        defineModule(_mlt);
        Object.defineProperty(_mlt, '__esModule', {
            'value': true
        }), _mlt.getSlot129PersonalEffect = void 0;
        var _mlw = _mlu(74496);
        _mlt.getSlot129PersonalEffect = function(_mlx) {
            var _mly = null,
                _mlz = new _mlw.SlotItemEffectModel(),
                _mm0 = false,
                _mm1 = new _mlw.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mlx.ctype) >= 0 ? (_mm1.houg = 1, _mm1.raig = 2, _mm1.kaih = 2, _mm1.tais = 2, _mm1.saku = 1, _mm0 = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mlx.ctype) >= 0 ? (_mm1.houg = 1, _mm1.raig = 2, _mm1.kaih = 2, _mm1.saku = 3, _mm0 = true) : [7, 13, 29, 8, 9, 31].indexOf(_mlx.ctype) >= 0 && (_mm1.houg = 1, _mm1.kaih = 2, _mm1.saku = 3, _mm0 = true), 0 == _mm0) return _mlz;
            var _mm2 = _mlx.get_slotnums(129);
            return _mlz = _mm1.multiply(_mm2);
        };
    },
    73254: (_mm3, _mm4, _mm5) => {
        'use strict';
        var _mm6 = null;
        defineModule(_mm4);
        Object.defineProperty(_mm4, '__esModule', {
            'value': true
        }), _mm4.getSlot12PersonalEffect = void 0;
        var _mm7 = _mm5(74496);
        _mm4.getSlot12PersonalEffect = function(_mm8) {
            var _mm9 = null,
                _mma = new _mm7.SlotItemEffectModel(),
                _mmb = false,
                _mmc = new _mm7.SlotItemEffectModel(),
                _mmd = _mm8.get_slotnums(142) + _mm8.get_slotnums(460);
            if (37 == _mm8.ctype && (_mmc.houg += 1, _mmc.kaih += 1, _mmc.houm += 1, _mmd >= 1 && (_mma.kaih += 1, _mma.houm += 1), _mmb = true), 0 == _mmb) return _mma;
            var _mme = _mm8.get_slotnums(12);
            return _mma.add(_mmc.multiply(_mme)), _mma;
        };
    },
    41410: (_mmf, _mmg, _mmh) => {
        'use strict';
        var _mmi = null;
        defineModule(_mmg);
        Object.defineProperty(_mmg, '__esModule', {
            'value': true
        }), _mmg.getSlot130PersonalEffect = void 0;
        var _mmj = _mmh(74496);
        _mmg.getSlot130PersonalEffect = function(_mmk) {
            var _mml = null,
                _mmm = new _mmj.SlotItemEffectModel(),
                _mmn = _mmk.have_level_num_over_dict[130];
            return null == _mmn || (428 == _mmk.ship_id ? (_mmn[1] >= 1 && (_mmm.tyku += 1 * _mmn[1]), _mmn[3] >= 1 && (_mmm.kaih += 1 * _mmn[3]), _mmn[5] >= 1 && (_mmm.houm += 1 * _mmn[5]), _mmn[7] >= 1 && (_mmm.tyku += 1 * _mmn[7]), _mmn[8] >= 1 && (_mmm.kaih += 1 * _mmn[8]), _mmn[9] >= 1 && (_mmm.tyku += 1 * _mmn[9]), _mmn[10] >= 1 && (_mmm.houg += 1 * _mmn[10])) : 141 == _mmk.ship_id && (_mmn[2] >= 1 && (_mmm.tyku += 1 * _mmn[2]), _mmn[4] >= 1 && (_mmm.kaih += 1 * _mmn[4]), _mmn[6] >= 1 && (_mmm.houm += 1 * _mmn[6]), _mmn[8] >= 1 && (_mmm.tyku += 1 * _mmn[8]), _mmn[10] >= 1 && (_mmm.kaih += 1 * _mmn[10])), 1 == _mmk.stype && (_mmn[3] >= 1 && (_mmm.tyku += 1 * _mmn[3]), _mmn[6] >= 1 && (_mmm.kaih += 1 * _mmn[6]), _mmn[9] >= 1 && (_mmm.tyku += 1 * _mmn[9]), _mmn[10] >= 1 && (_mmm.kaih += 1 * _mmn[10]))), _mmm;
        };
    },
    93373: (_mmo, _mmp, _mmq) => {
        'use strict';
        var _mmr = null;
        defineModule(_mmp);
        Object.defineProperty(_mmp, '__esModule', {
            'value': true
        }), _mmp.getSlot132PersonalEffect = void 0;
        var _mms = _mmq(74496);
        _mmp.getSlot132PersonalEffect = function(_mmt) {
            var _mmu = null,
                _mmv = new _mms.SlotItemEffectModel(),
                _mmw = _mmt.get_each_level_nums(132),
                _mmx = 0,
                _mmy = 0,
                _mmz = 0,
                _mn0 = 0,
                _mn1 = 0;
            return _mmw.forEach(function(_mn2, _mn3) {
                _mn3 >= 3 && (_mmx += _mn2), _mn3 >= 5 && (_mmy += _mn2), _mn3 >= 7 && (_mmz += _mn2), _mn3 >= 8 && (_mn0 += _mn2), _mn3 >= 9 && (_mn1 += _mn2);
            }), _mmx >= 1 && (_mmv.kaih += 1), _mmy >= 1 && (_mmv.tais += 1), _mmz >= 1 && (_mmv.kaih += 1), _mn0 >= 1 && (_mmv.tais += 1), _mn1 >= 1 && (_mmv.houm += 1), _mmw[10] >= 1 && (_mmv.tais += 1), 911 != _mmt.ship_id && 916 != _mmt.ship_id && 546 != _mmt.ship_id || (_mmv.kaih += 1), 461 != _mmt.ship_id && 466 != _mmt.ship_id && 462 != _mmt.ship_id && 467 != _mmt.ship_id && 156 != _mmt.ship_id || (_mmv.kaih += 2), _mmv;
        };
    },
    88838: (_mn4, _mn5, _mn6) => {
        'use strict';
        var _mn7 = null;
        defineModule(_mn5);
        Object.defineProperty(_mn5, '__esModule', {
            'value': true
        }), _mn5.getSlot136PersonalEffect = void 0;
        var _mn8 = _mn6(74496);
        _mn5.getSlot136PersonalEffect = function(_mn9) {
            var _mna = null,
                _mnb = new _mn8.SlotItemEffectModel(),
                _mnc = 0;
            if (58 != _mn9.ctype && 61 != _mn9.ctype && 64 != _mn9.ctype && 68 != _mn9.ctype && 80 != _mn9.ctype && 92 != _mn9.ctype && 113 != _mn9.ctype && 124 != _mn9.ctype || (_mnb.souk += 2, _mnb.kaih += 1, _mnc = 1), 879 == _mn9.ship_id && (_mnb.souk += 1, _mnb.kaih += 1), 0 == _mnc) return _mnb;
            var _mnd = _mn9.get_each_level_nums(136),
                _mne = 0,
                _mnf = 0,
                _mng = _mnd[10];
            return _mnc > 0 && _mnd.forEach(function(_mnh, _mni) {
                _mni >= 3 && (_mne += _mnh), _mni >= 6 && (_mnf += _mnh);
            }), 1 == _mnc && (_mne >= 1 && (_mnb.souk += 1 * _mne), _mnf >= 1 && (_mnb.souk += 1 * _mnf), _mng >= 1 && (_mnb.souk += 1 * _mng)), _mnb;
        };
    },
    17274: (_mnj, _mnk, _mnl) => {
        'use strict';
        var _mnm = null;
        defineModule(_mnk);
        Object.defineProperty(_mnk, '__esModule', {
            'value': true
        }), _mnk.getSlot139PersonalEffect = void 0;
        var _mnn = _mnl(74496);
        _mnk.getSlot139PersonalEffect = function(_mno) {
            var _mnp = null,
                _mnq = new _mnn.SlotItemEffectModel(),
                _mnr = false,
                _mns = new _mnn.SlotItemEffectModel();
            if (662 != _mno.ship_id && 663 != _mno.ship_id && 668 != _mno.ship_id || (_mns.houg += 2, _mns.tyku += 1, _mnr = true), 0 == _mnr) return _mnq;
            var _mnt = _mno.get_slotnums(139);
            return _mnq.add(_mns.multiply(_mnt)), _mnq;
        };
    },
    21713: (_mnu, _mnv, _mnw) => {
        'use strict';
        var _mnx = null;
        defineModule(_mnv);
        Object.defineProperty(_mnv, '__esModule', {
            'value': true
        }), _mnv.getSlot143PersonalEffect = void 0;
        var _mny = _mnw(74496);
        _mnv.getSlot143PersonalEffect = function(_mnz) {
            var _mo0 = null,
                _mo1 = new _mny.SlotItemEffectModel();
            return 'あかぎ' == _mnz.yomi ? _mo1.houg = 3 : 'かが' == _mnz.yomi || 'しょうかく' == _mnz.yomi ? _mo1.houg = 2 : ('ずいかく' == _mnz.yomi || 'りゅうじょう' == _mnz.yomi) && (_mo1.houg = 1), _mo1;
        };
    },
    59823: (_mo2, _mo3, _mo4) => {
        'use strict';
        var _mo5 = null;
        defineModule(_mo3);
        Object.defineProperty(_mo3, '__esModule', {
            'value': true
        }), _mo3.getSlot144PersonalEffect = void 0;
        var _mo6 = _mo4(74496);
        _mo3.getSlot144PersonalEffect = function(_mo7) {
            var _mo8 = null,
                _mo9 = new _mo6.SlotItemEffectModel();
            return 'あかぎ' == _mo7.yomi ? _mo9.houg = 3 : 'かが' == _mo7.yomi ? _mo9.houg = 2 : 'しょうかく' == _mo7.yomi ? (_mo9.houg = 2, 461 != _mo7.ship_id && 466 != _mo7.ship_id || (_mo9.houg += 2)) : 'ずいかく' == _mo7.yomi ? (_mo9.houg = 1, 462 != _mo7.ship_id && 467 != _mo7.ship_id || (_mo9.houg += 1)) : 'りゅうじょう' == _mo7.yomi && (_mo9.houg = 1), _mo9;
        };
    },
    57440: (_moa, _mob, _moc) => {
        'use strict';
        var _mod = null;
        defineModule(_mob);
        Object.defineProperty(_mob, '__esModule', {
            'value': true
        }), _mob.getSlot149PersonalEffect = void 0;
        var _moe = _moc(74496);
        _mob.getSlot149PersonalEffect = function(_mof) {
            var _mog = null,
                _moh = new _moe.SlotItemEffectModel(),
                _moi = new _moe.SlotItemEffectModel(),
                _moj = false;
            return 488 == _mof.ship_id || 141 == _mof.ship_id || 160 == _mof.ship_id || 622 == _mof.ship_id || 623 == _mof.ship_id || 656 == _mof.ship_id || 961 == _mof.ship_id ? (_moi.tais = 1, _moi.kaih = 3, _moj = true) : 624 == _mof.ship_id ? (_moi.tais = 3, _moi.kaih = 5, _moj = true) : 662 == _mof.ship_id && (_moi.tais = 2, _moi.kaih = 4, _moj = true), 54 == _mof.ctype && (_moi.tais = 1, _moi.kaih = 2, _moj = true), 0 == _moj ? _moh : _moh = _moi.multiply(1);
        };
    },
    29493: (_mok, _mol, _mom) => {
        'use strict';
        var _mon = null;
        defineModule(_mol);
        Object.defineProperty(_mol, '__esModule', {
            'value': true
        }), _mol.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _moo = _mom(74496);
        _mol.getSlot14inch45CaliberGunPersonalEffect = function(_mop) {
            var _moq = null,
                _mor, _mos, _mot, _mou = new _moo.SlotItemEffectModel(),
                _mov = false,
                _mow = new _moo.SlotItemEffectModel(),
                _mox = {
                    507: 507,
                    508: 507
                },
                _moy = _mop.get_slotnums(507),
                _moz = _mop.get_slotnums(508),
                _mp0 = _moy + _moz,
                _mp1 = _mop.getCountryName(),
                _mp2 = _mop.getUSSWaterRaderDict();
            if (125 == _mop.ctype && (_mow.houg += 1, _mow.kaih += 1, _mow.houm += 1, _mov = true, _moy >= 1 && _moz >= 1 && (_mou.houg += 1, _mou.houm += 1)), 'アメリカ' == _mp1 && _mop.stype >= 8 && _mop.stype <= 10) {
                _mow.houg += 2, _mow.kaih += 1, _mow.houm += 1, _mov = true;
                for (var _mp3 = 0, _mp4 = 0, _mp5 = _mop.have_slot_ids(); _mp4 < _mp5.length; _mp4++) {
                    var _mp6 = _mp5[_mp4];
                    _mp2[Number(_mp6)] && (_mp3 += _mop.get_slotnums(parseInt(_mp6)));
                }
                _mp3 >= 1 && (_mou.houg += 1, _mou.kaih += 1, _mou.houm += 2), _moy >= 1 && _moz >= 1 && (_mou.houg += 1, _mou.houm += 1, _mou.kaih += 2);
            }
            else 6 != _mop.ctype && 26 != _mop.ctype && 2 != _mop.ctype && 'イギリス' != _mp1 || (_mou.kaih += 1, _mou.houm += 1, _moy >= 1 && _moz >= 1 && (_mou.houg += 1, _mou.houm += 1, _mou.kaih += 1));
            _mov && _mou.add(_mow.multiply(_mp0));
            for (var _mp7 = {}, _mp8 = {}, _mp9 = {}, _mpa = function(_mpb) {
                    var _mpc = null,
                        _mpd = Number(_mpb),
                        _mpe = _mox[_mpd];
                    _mp7[_mpe] = null !== (_mor = _mp7[_mpe]) && void 0 !== _mor ? _mor : 0, _mp8[_mpe] = null !== (_mos = _mp8[_mpe]) && void 0 !== _mos ? _mos : 0, _mp9[_mpe] = null !== (_mot = _mp9[_mpe]) && void 0 !== _mot ? _mot : 0, _mop.get_each_level_nums(_mpd).forEach(function(_mpf, _mpg) {
                        _mpg >= 3 && (_mp7[_mpe] += _mpf), _mpg >= 6 && (_mp8[_mpe] += _mpf), _mpg >= 9 && (_mp9[_mpe] += _mpf);
                    });
                }, _mph = 0, _mpi = Object.keys(_mox); _mph < _mpi.length; _mph++) {
                _mpa(_mpi[_mph]);
            }
            return _mp7[507] >= 1 && (_mou.houg += 1 * _mp7[507]), _mp8[507] >= 1 && (_mou.souk += 1 * _mp8[507]), _mp9[507] >= 1 && (_mou.houm += 1 * _mp9[507]), _mou;
        };
    },
    66985: (_mpj, _mpk, _mpl) => {
        'use strict';
        var _mpm = null;
        defineModule(_mpk);
        Object.defineProperty(_mpk, '__esModule', {
            'value': true
        }), _mpk.getSlot15PersonalEffect = void 0;
        var _mpn = _mpl(74496);
        _mpk.getSlot15PersonalEffect = function(_mpo) {
            var _mpp = null,
                _mpq = new _mpn.SlotItemEffectModel(),
                _mpr = false;
            if ((566 == _mpo.ship_id || 567 == _mpo.ship_id || 568 == _mpo.ship_id || 648 == _mpo.ship_id || 651 == _mpo.ship_id || 656 == _mpo.ship_id || 670 == _mpo.ship_id || 915 == _mpo.ship_id || 951 == _mpo.ship_id || 'たけ' == _mpo.yomi) && (_mpr = true), 0 == _mpr) return _mpq;
            var _mps = _mpo.get_slotnums(15);
            return 30 == _mpo.ctype && (1 == _mps ? _mpq.raig = 2 : _mps >= 2 && (_mpq.raig = 4)), 'たけ' == _mpo.yomi && (_mpq.raig += 5, _mpq.kaih += 1), _mpq;
        };
    },
    79086: (_mpt, _mpu, _mpv) => {
        'use strict';
        var _mpw = null;
        defineModule(_mpu);
        Object.defineProperty(_mpu, '__esModule', {
            'value': true
        }), _mpu.getSlot165_216PersonalEffect = void 0;
        var _mpx = _mpv(74496);
        _mpu.getSlot165_216PersonalEffect = function(_mpy) {
            var _mpz = null,
                _mq0 = new _mpx.SlotItemEffectModel();
            return 501 != _mpy.ship_id && 506 != _mpy.ship_id && 502 != _mpy.ship_id && 507 != _mpy.ship_id || (_mq0.tyku += 2, _mq0.kaih += 2), _mq0;
        };
    },
    88102: (_mq1, _mq2, _mq3) => {
        'use strict';
        var _mq4 = null;
        defineModule(_mq2);
        Object.defineProperty(_mq2, '__esModule', {
            'value': true
        }), _mq2.getSlot16M1PersonalEffect = void 0;
        var _mq5 = _mq3(74496);
        _mq2.getSlot16M1PersonalEffect = function(_mq6) {
            var _mq7 = null,
                _mq8 = new _mq5.SlotItemEffectModel(),
                _mq9 = new _mq5.SlotItemEffectModel();
            67 == _mq6.ctype || 78 == _mq6.ctype || 82 == _mq6.ctype || 88 == _mq6.ctype || 108 == _mq6.ctype || 112 == _mq6.ctype ? (_mq9.houg += 2, _mq9.souk += 1, 67 == _mq6.ctype && (_mq9.kaih -= 2)) : 149 == _mq6.ship_id || 150 == _mq6.ship_id || 151 == _mq6.ship_id || 152 == _mq6.ship_id ? (_mq9.houg += 1, _mq9.souk += 1, _mq9.kaih -= 3) : 591 == _mq6.ship_id || 592 == _mq6.ship_id ? (_mq9.houg += 2, _mq9.souk += 1, _mq9.kaih -= 2) : 593 != _mq6.ship_id && 954 != _mq6.ship_id || (_mq9.houg += 1, _mq9.souk += 1, _mq9.kaih -= 1);
            var _mqa = true;
            if (_mq9.exists() || (_mqa = false), 0 == _mqa) return _mq8;
            var _mqb = _mq6.get_slotnums(298) + _mq6.get_slotnums(299) + _mq6.get_slotnums(300);
            return _mq8 = _mq9.multiply(_mqb);
        };
    },
    29240: (_mqc, _mqd, _mqe) => {
        'use strict';
        var _mqf = null;
        defineModule(_mqd);
        Object.defineProperty(_mqd, '__esModule', {
            'value': true
        }), _mqd.getSlot171PersonalEffect = void 0;
        var _mqg = _mqe(74496);
        _mqd.getSlot171PersonalEffect = function(_mqh) {
            var _mqi = null,
                _mqj = new _mqg.SlotItemEffectModel(),
                _mqk = 0;
            'アメリカ' == _mqh.getCountryName() && (_mqk = 1), 65 != _mqh.ctype && 93 != _mqh.ctype && 102 != _mqh.ctype && 107 != _mqh.ctype && 125 != _mqh.ctype || (_mqj.houg += 1, _mqj.saku += 1, _mqk = 2);
            var _mql = _mqh.get_each_level_nums(171),
                _mqm = 0,
                _mqn = 0,
                _mqo = 0;
            return _mqk > 0 && (_mql.map(function(_mqp, _mqq) {
                _mqq >= 5 && (_mqm += _mqp), _mqq >= 3 && (_mqn += _mqp), _mqq >= 8 && (_mqo += _mqp);
            }), 1 != _mqk && 2 != _mqk || (_mql[10] > 0 && (_mqj.houg += 1), _mqm > 0 && (_mqj.kaih += 1)), 2 == _mqk && (_mqn > 0 && (_mqj.saku += 1), _mqo > 0 && (_mqj.saku += 1))), _mqj;
        };
    },
    40885: (_mqr, _mqs, _mqt) => {
        'use strict';
        var _mqu = null;
        defineModule(_mqs);
        Object.defineProperty(_mqs, '__esModule', {
            'value': true
        }), _mqs.getSlot174PersonalEffect = void 0;
        var _mqv = _mqt(74496);
        _mqs.getSlot174PersonalEffect = function(_mqw) {
            var _mqx = null,
                _mqy = new _mqv.SlotItemEffectModel(),
                _mqz = new _mqv.SlotItemEffectModel();
            if (66 == _mqw.ctype && (_mqz.raig = 1, _mqz.kaih = 2), 591 == _mqw.ship_id || 592 == _mqw.ship_id || 954 == _mqw.ship_id ? (_mqz.raig += 6, _mqz.kaih += 3) : 593 == _mqw.ship_id ? (_mqz.raig += 5, _mqz.kaih += 2) : 488 != _mqw.ship_id && 622 != _mqw.ship_id && 623 != _mqw.ship_id && 624 != _mqw.ship_id || (_mqz.houg += 2, _mqz.raig += 4, _mqz.kaih += 4), !_mqz.exists()) return _mqy;
            var _mr0 = _mqw.get_slotnums(174);
            return _mqy = _mqz.multiply(_mr0);
        };
    },
    19614: (_mr1, _mr2, _mr3) => {
        'use strict';
        var _mr4 = null;
        defineModule(_mr2);
        Object.defineProperty(_mr2, '__esModule', {
            'value': true
        }), _mr2.getSlot179PersonalEffect = void 0;
        var _mr5 = _mr3(74496);
        _mr2.getSlot179PersonalEffect = function(_mr6) {
            var _mr7 = null,
                _mr8 = new _mr5.SlotItemEffectModel(),
                _mr9 = new _mr5.SlotItemEffectModel();
            if (54 == _mr6.ctype && (_mr9.raig = 1), !_mr9.exists()) return _mr8;
            var _mra = _mr6.get_slotnums(179);
            return _mr8 = _mr9.multiply(_mra);
        };
    },
    87220: (_mrb, _mrc, _mrd) => {
        'use strict';
        var _mre = null;
        defineModule(_mrc);
        Object.defineProperty(_mrc, '__esModule', {
            'value': true
        }), _mrc.getSlot184PersonalEffect = void 0;
        var _mrf = _mrd(74496);
        _mrc.getSlot184PersonalEffect = function(_mrg) {
            var _mrh = null,
                _mri = new _mrf.SlotItemEffectModel(),
                _mrj = new _mrf.SlotItemEffectModel();
            if (68 == _mrg.ctype && (_mrj.houg += 1, _mrj.tyku += 2, _mrj.kaih += 3), !_mrj.exists()) return _mri;
            var _mrk = _mrg.get_slotnums(184);
            return _mri = _mrj.multiply(_mrk);
        };
    },
    81367: (_mrl, _mrm, _mrn) => {
        'use strict';
        var _mro = null;
        defineModule(_mrm);
        Object.defineProperty(_mrm, '__esModule', {
            'value': true
        }), _mrm.getSlot188PersonalEffect = void 0;
        var _mrp = _mrn(74496);
        _mrm.getSlot188PersonalEffect = function(_mrq) {
            var _mrr = null,
                _mrs = new _mrp.SlotItemEffectModel(),
                _mrt = new _mrp.SlotItemEffectModel();
            if (68 == _mrq.ctype && (_mrt.houg += 3, _mrt.tyku += 1, _mrt.kaih += 1), !_mrt.exists()) return _mrs;
            var _mru = _mrq.get_slotnums(188);
            return _mrs = _mrt.multiply(_mru);
        };
    },
    13052: (_mrv, _mrw, _mrx) => {
        'use strict';
        var _mry = null;
        defineModule(_mrw);
        Object.defineProperty(_mrw, '__esModule', {
            'value': true
        }), _mrw.getSlot189PersonalEffect = void 0;
        var _mrz = _mrx(74496);
        _mrw.getSlot189PersonalEffect = function(_ms0) {
            var _ms1 = null,
                _ms2 = new _mrz.SlotItemEffectModel(),
                _ms3 = new _mrz.SlotItemEffectModel();
            if (68 != _ms0.ctype && 63 != _ms0.ctype || (_ms3.tyku += 1, _ms3.kaih += 2), !_ms3.exists()) return _ms2;
            var _ms4 = _ms0.get_slotnums(189);
            return _ms2 = _ms3.multiply(_ms4);
        };
    },
    66904: (_ms5, _ms6, _ms7) => {
        'use strict';
        var _ms8 = null;
        defineModule(_ms6);
        Object.defineProperty(_ms6, '__esModule', {
            'value': true
        }), _ms6.getSlot18_52_PersonalEffect = void 0;
        var _ms9 = _ms7(74496);
        _ms6.getSlot18_52_PersonalEffect = function(_msa) {
            var _msb = null,
                _msc = new _ms9.SlotItemEffectModel(),
                _msd = new _ms9.SlotItemEffectModel();
            if (277 == _msa.ship_id || 278 == _msa.ship_id || 156 == _msa.ship_id ? _msd.houg = 1 : 594 == _msa.ship_id || 698 == _msa.ship_id || 646 == _msa.ship_id ? (_msd.houg = 1, _msd.kaih = 1) : 599 != _msa.ship_id && 610 != _msa.ship_id || (_msd.houg = 2, _msd.kaih = 1), !_msd.exists()) return _msc;
            var _mse = _msa.get_slotnums(18) + _msa.get_slotnums(52);
            return _msc = _msd.multiply(_mse);
        };
    },
    94968: (_msf, _msg, _msh) => {
        'use strict';
        var _msi = null;
        defineModule(_msg);
        Object.defineProperty(_msg, '__esModule', {
            'value': true
        }), _msg.getSlot194PersonalEffect = void 0;
        var _msj = _msh(74496);
        _msg.getSlot194PersonalEffect = function(_msk) {
            var _msl = null,
                _msm = new _msj.SlotItemEffectModel(),
                _msn = new _msj.SlotItemEffectModel();
            if (70 == _msk.ctype ? (_msn.houg += 3, _msn.kaih += 2, _msn.saku += 2) : 72 != _msk.ctype && 62 != _msk.ctype || (_msn.kaih += 1, _msn.saku += 2), 392 == _msk.ship_id && (_msn.houg += 1, _msn.kaih += 2, _msn.saku += 2), !_msn.exists()) return _msm;
            var _mso = _msk.get_slotnums(194);
            return _msm = _msn.multiply(_mso);
        };
    },
    94781: (_msp, _msq, _msr) => {
        'use strict';
        var _mss = null;
        defineModule(_msq);
        Object.defineProperty(_msq, '__esModule', {
            'value': true
        }), _msq.getSlot195PersonalEffect = void 0;
        var _mst = _msr(74496);
        _msq.getSlot195PersonalEffect = function(_msu) {
            var _msv = null,
                _msw = new _mst.SlotItemEffectModel(),
                _msx = false,
                _msy = new _mst.SlotItemEffectModel();
            if ('アメリカ' == _msu.getCountryName() && (_msy.houg += 1, _msx = true), 0 == _msx) return _msw;
            var _msz = _msu.get_slotnums(195);
            return _msw.add(_msy.multiply(_msz));
        };
    },
    98137: (_mt0, _mt1, _mt2) => {
        'use strict';
        var _mt3 = null;
        defineModule(_mt1);
        Object.defineProperty(_mt1, '__esModule', {
            'value': true
        }), _mt1.getSlot19PersonalEffect = void 0;
        var _mt4 = _mt2(74496);
        _mt1.getSlot19PersonalEffect = function(_mt5) {
            var _mt6 = null,
                _mt7 = new _mt4.SlotItemEffectModel(),
                _mt8 = new _mt4.SlotItemEffectModel();
            if ('ほうしょう' == _mt5.yomi && (_mt8.houg = 2, _mt8.kaih = 2, _mt8.tais = 2, _mt8.tyku = 2), 75 != _mt5.ctype && 76 != _mt5.ctype || (_mt8.houg = 2, _mt8.tais = 3), 7 == _mt5.stype && (_mt8.tyku += 1, _mt8.kaih += 1), 894 != _mt5.ship_id && 899 != _mt5.ship_id || (_mt8.houg += 1, _mt8.kaih += 1, _mt8.tais += 1, _mt8.tyku += 1), !_mt8.exists()) return _mt7;
            var _mt9 = _mt5.get_slotnums(19);
            return _mt7 = _mt8.multiply(_mt9);
        };
    },
    48658: (_mta, _mtb, _mtc) => {
        'use strict';
        var _mtd = null;
        defineModule(_mtb);
        Object.defineProperty(_mtb, '__esModule', {
            'value': true
        }), _mtb.getSlot204PersonalEffect = void 0;
        var _mte = _mtc(74496);
        _mtb.getSlot204PersonalEffect = function(_mtf) {
            var _mtg = null,
                _mth = new _mte.SlotItemEffectModel();
            if (591 != _mtf.ship_id && 592 != _mtf.ship_id && 593 != _mtf.ship_id && 954 != _mtf.ship_id) return _mth;
            _mth.souk = _mth.souk + 1, _mth.raig = _mth.raig + 1;
            for (var _mti = _mtf.get_each_level_nums(204), _mtj = 0, _mtk = 0; _mtk <= 10; _mtk++) _mtk >= 7 && (_mtj += _mti[_mtk]);
            return _mtj > 0 && (_mth.souk = _mth.souk + 1), _mti[10] > 0 && (_mth.raig = _mth.raig + 1), _mth;
        };
    },
    2306: (_mtl, _mtm, _mtn) => {
        'use strict';
        var _mto = null;
        defineModule(_mtm);
        Object.defineProperty(_mtm, '__esModule', {
            'value': true
        }), _mtm.getSlot217PersonalEffect = void 0;
        var _mtp = _mtn(74496);
        _mtm.getSlot217PersonalEffect = function(_mtq) {
            var _mtr = null,
                _mts = new _mtp.SlotItemEffectModel(),
                _mtt = false,
                _mtu = new _mtp.SlotItemEffectModel();
            if (501 == _mtq.ship_id || 506 == _mtq.ship_id ? (_mtu.houg += 1, _mtu.kaih += 3, _mtu.tyku += 5, _mtt = true) : 502 != _mtq.ship_id && 507 != _mtq.ship_id || (_mtu.houg += 1, _mtu.kaih += 2, _mtu.tyku += 4, _mtt = true), 0 == _mtt) return _mts;
            var _mtv = _mtq.get_slotnums(217);
            return _mts.add(_mtu.multiply(_mtv)), _mts;
        };
    },
    91302: function(_mtw, _mtx, _mty) {
        'use strict';
        var _mtz = null;
        var _mu0 = this && this.__importDefault || function(_mu1) {
            var _mu2 = null;
            return _mu1 && _mu1.__esModule ? _mu1 : {
                'default': _mu1
            };
        };
        defineModule(_mtx);
        Object.defineProperty(_mtx, '__esModule', {
            'value': true
        }), _mtx.getSlot220PersonalEffect = void 0;
        var _mu3 = _mty(74496),
            _mu4 = _mu0(_mty(18622));
        _mtx.getSlot220PersonalEffect = function(_mu5) {
            var _mu6 = null,
                _mu7 = new _mu3.SlotItemEffectModel(),
                _mu8 = false,
                _mu9 = new _mu3.SlotItemEffectModel(),
                _mua = 0,
                _mub = 0;
            if (662 == _mu5.ship_id || 663 == _mu5.ship_id || 668 == _mu5.ship_id || 501 == _mu5.ship_id || 506 == _mu5.ship_id || 502 == _mu5.ship_id || 507 == _mu5.ship_id ? (_mu9.houg += 1, _mu9.tyku += 3, _mu9.kaih += 2, _mu8 = true, _mua = 1) : 894 != _mu5.ship_id && 899 != _mu5.ship_id || (_mu9.tyku += 2, _mu9.kaih += 2, _mu8 = true, _mua = 1, _mub = 1), 0 == _mu8) return _mu7;
            var _muc = _mu5.get_slotnums(220);
            _mu7.add(_mu9.multiply(_muc));
            for (var _mud = 0, _mue = 0, _muf = _mu5.have_slot_ids(); _mue < _muf.length; _mue++) {
                var _mug = _muf[_mue],
                    _muh = _mu4.default.model.slot.getMst(_mug),
                    _mui = _muh.equipType;
                12 != _mui && 13 != _mui || (_muh.sakuteki >= 5 && _mu5.get_slotnums(parseInt(_mug)), _muh.taiku >= 2 && (_mud += _mu5.get_slotnums(parseInt(_mug))));
            }
            if (_mud >= 1 && 1 == _mua && (_mu7.tyku += 3, _mu7.kaih += 3), 0 == _mub) return _mu7;
            var _muj = _mu5.get_each_level_nums(220)[10];
            return 1 == _mub && _muj > 0 && (_mu7.houg += 1 * _muj, _mu7.tyku += 1 * _muj, _mu7.kaih += 1 * _muj), _mu7;
        };
    },
    20418: (_muk, _mul, _mum) => {
        'use strict';
        var _mun = null;
        defineModule(_mul);
        Object.defineProperty(_mul, '__esModule', {
            'value': true
        }), _mul.getSlot227PersonalEffect = void 0;
        var _muo = _mum(74496);
        _mul.getSlot227PersonalEffect = function(_mup) {
            var _muq = null,
                _mur = new _muo.SlotItemEffectModel(),
                _mus = _mup.get_each_level_nums(227),
                _mut = 0;
            _mus.forEach(function(_muu, _muv) {
                _muv >= 8 && (_mut += _muu);
            }), _mut >= 1 && (_mur.tais += 1 * _mut);
            var _muw = _mus[10];
            return _muw >= 1 && (_mur.tais += 1 * _muw), _mur;
        };
    },
    1906: (_mux, _muy, _muz) => {
        'use strict';
        var _mv0 = null;
        defineModule(_muy);
        Object.defineProperty(_muy, '__esModule', {
            'value': true
        }), _muy.getSlot228PersonalEffect = void 0;
        var _mv1 = _muz(74496);
        _muy.getSlot228PersonalEffect = function(_mv2) {
            var _mv3 = null,
                _mv4 = new _mv1.SlotItemEffectModel(),
                _mv5 = new _mv1.SlotItemEffectModel();
            if ('ほうしょう' == _mv2.yomi && (_mv5.houg = 3, _mv5.kaih = 4, _mv5.tais = 4, _mv5.tyku = 3), 75 != _mv2.ctype && 76 != _mv2.ctype || (_mv5.houg = 2, _mv5.tais = 5, _mv5.tyku = 1, _mv5.kaih = 1), 7 == _mv2.stype && (_mv5.tais += 2, _mv5.tyku += 1, _mv5.kaih += 1), 894 != _mv2.ship_id && 899 != _mv2.ship_id || (_mv5.houg += 1, _mv5.kaih += 2, _mv5.tais += 2, _mv5.tyku += 1), !_mv5.exists()) return _mv4;
            var _mv6 = _mv2.get_slotnums(228);
            return _mv4 = _mv5.multiply(_mv6);
        };
    },
    61887: function(_mv7, _mv8, _mv9) {
        'use strict';
        var _mva = null;
        var _mvb = this && this.__importDefault || function(_mvc) {
            var _mvd = null;
            return _mvc && _mvc.__esModule ? _mvc : {
                'default': _mvc
            };
        };
        defineModule(_mv8);
        Object.defineProperty(_mv8, '__esModule', {
            'value': true
        }), _mv8.getSlot229PersonalEffect = void 0;
        var _mve = _mv9(74496),
            _mvf = _mvb(_mv9(18622));
        _mv8.getSlot229PersonalEffect = function(_mvg) {
            var _mvh = null;
            for (var _mvi = new _mve.SlotItemEffectModel(), _mvj = 0, _mvk = 0, _mvl = _mvg.have_slots_dict[229]; _mvk < _mvl.length; _mvk++) {
                _mvl[_mvk].level >= 7 && _mvj++;
            }
            var _mvm = _mvj,
                _mvn = 0,
                _mvo = 0,
                _mvp = 0,
                _mvq = _mvg.get_slotnums(229);
            if (622 == _mvg.ship_id || 623 == _mvg.ship_id || 624 == _mvg.ship_id) _mvi.houg += 1 * _mvq, _mvi.tyku += 1 * _mvq, _mvn = 2;
            else {
                if (656 == _mvg.ship_id) _mvi.houg += 2 * _mvq, _mvi.tyku += 3 * _mvq, _mvi.tais += 2 * _mvq, _mvn = 3;
                else {
                    if (0 == _mvj) return _mvi;
                }
            }
            if (488 == _mvg.ship_id ? (_mvi.tyku += 3 * _mvm, _mvn = 1) : 220 == _mvg.ship_id ? _mvi.tyku += 2 * _mvm : 23 == _mvg.ship_id ? _mvi.tyku += 1 * _mvm : 160 == _mvg.ship_id ? (_mvi.tyku += 2 * _mvm, _mvn = 1) : 224 == _mvg.ship_id ? _mvi.tyku += 1 * _mvm : 487 == _mvg.ship_id ? (_mvi.tyku += 2 * _mvm, _mvn = 1) : 289 == _mvg.ship_id && (_mvi.tyku += 1 * _mvm), (66 == _mvg.ctype || 28 == _mvg.ctype) && (_mvi.houg += 1 * _mvm, _mvi.tyku += 1 * _mvm, _mvo = 1), 1 == _mvg.stype && (_mvi.houg += 1 * _mvm, _mvi.tyku += 1 * _mvm, _mvp = 1), ('ゆら' == _mvg.yomi || 'なか' == _mvg.yomi || 'きぬ' == _mvg.yomi) && (_mvi.houg += 2 * _mvm), 0 == _mvn + _mvo + _mvp) return _mvi;
            for (var _mvr = 0, _mvs = 0, _mvt = 0, _mvu = _mvg.have_slot_ids(); _mvt < _mvu.length; _mvt++) {
                var _mvv = _mvu[_mvt],
                    _mvw = _mvf.default.model.slot.getMst(_mvv),
                    _mvx = _mvw.equipType;
                12 != _mvx && 13 != _mvx || (_mvw.sakuteki >= 5 && (_mvr += _mvg.get_slotnums(parseInt(_mvv))), _mvw.taiku >= 2 && (_mvs += _mvg.get_slotnums(parseInt(_mvv))));
            }
            return 1 == _mvn ? _mvr > 0 && (_mvi.houg += 3, _mvi.kaih += 2) : 2 == _mvn ? (_mvr > 0 && (_mvi.houg += 1, _mvi.kaih += 1), _mvs > 0 && (_mvi.tyku += 2, _mvi.kaih += 2)) : 3 == _mvn && (_mvr > 0 && (_mvi.houg += 2, _mvi.kaih += 2), _mvs > 0 && (_mvi.tyku += 3, _mvi.kaih += 2)), 1 == _mvo && _mvr > 0 && (_mvi.houg += 2, _mvi.kaih += 3), 1 == _mvp && _mvr > 0 && (_mvi.houg += 1, _mvi.kaih += 4), _mvi;
        };
    },
    55734: (_mvy, _mvz, _mw0) => {
        'use strict';
        var _mw1 = null;
        defineModule(_mvz);
        Object.defineProperty(_mvz, '__esModule', {
            'value': true
        }), _mvz.getSlot234PersonalEffect = void 0;
        var _mw2 = _mw0(74496);
        _mvz.getSlot234PersonalEffect = function(_mw3) {
            var _mw4 = null,
                _mw5 = new _mw2.SlotItemEffectModel(),
                _mw6 = false,
                _mw7 = new _mw2.SlotItemEffectModel(),
                _mw8 = _mw3.get_slotnums(142) + _mw3.get_slotnums(460);
            if (37 == _mw3.ctype && (_mw7.houg += 1, _mw7.tyku += 1, _mw7.kaih += 1, _mw7.houm += 1, _mw8 >= 1 && (_mw5.tyku += 1, _mw5.kaih += 1, _mw5.houm += 1), _mw6 = true), 0 == _mw6) return _mw5;
            var _mw9 = _mw3.get_slotnums(234);
            return _mw5.add(_mw7.multiply(_mw9)), _mw5;
        };
    },
    17562: function(_mwa, _mwb, _mwc) {
        'use strict';
        var _mwd = null;
        var _mwe = this && this.__importDefault || function(_mwf) {
            var _mwg = null;
            return _mwf && _mwf.__esModule ? _mwf : {
                'default': _mwf
            };
        };
        defineModule(_mwb);
        Object.defineProperty(_mwb, '__esModule', {
            'value': true
        }), _mwb.getSlot235PersonalEffect = void 0;
        var _mwh = _mwc(74496),
            _mwi = _mwe(_mwc(18622));
        _mwb.getSlot235PersonalEffect = function(_mwj) {
            var _mwk = null,
                _mwl = new _mwh.SlotItemEffectModel(),
                _mwm = false,
                _mwn = new _mwh.SlotItemEffectModel(),
                _mwo = 0;
            if (52 != _mwj.ctype && 9 != _mwj.ctype || (_mwn.houg += 2, _mwn.tyku += 1, _mwm = true), 321 == _mwj.ship_id && (_mwn.houg += 1, _mwn.kaih += 1, _mwo = 1), 0 == _mwm) return _mwl;
            var _mwp = _mwj.get_slotnums(235);
            if (_mwl.add(_mwn.multiply(_mwp)), 0 == _mwo) return _mwl;
            for (var _mwq = 0, _mwr = 0, _mws = 0, _mwt = _mwj.have_slot_ids(); _mws < _mwt.length; _mws++) {
                var _mwu = _mwt[_mws],
                    _mwv = _mwi.default.model.slot.getMst(_mwu),
                    _mww = _mwv.equipType;
                12 != _mww && 13 != _mww || (_mwv.sakuteki >= 5 && (_mwq += _mwj.get_slotnums(parseInt(_mwu))), _mwv.taiku >= 2 && (_mwr += _mwj.get_slotnums(parseInt(_mwu))));
            }
            return _mwq >= 1 && 1 == _mwo && (_mwl.houg += 3, _mwl.kaih += 2), _mwr >= 1 && 1 == _mwo && (_mwl.tyku += 3, _mwl.kaih += 3), _mwl;
        };
    },
    47970: (_mwx, _mwy, _mwz) => {
        'use strict';
        var _mx0 = null;
        defineModule(_mwy);
        Object.defineProperty(_mwy, '__esModule', {
            'value': true
        }), _mwy.getSlot237PersonalEffect = void 0;
        var _mx1 = _mwz(74496);
        _mwy.getSlot237PersonalEffect = function(_mx2) {
            var _mx3 = null,
                _mx4 = new _mx1.SlotItemEffectModel(),
                _mx5 = new _mx1.SlotItemEffectModel();
            if (553 == _mx2.ship_id) _mx5.houg = 4, _mx5.kaih = 2;
            else {
                if (82 == _mx2.ship_id) _mx5.houg = 3, _mx5.kaih = 1;
                else {
                    if (88 == _mx2.ship_id) _mx5.houg = 3, _mx5.kaih = 1;
                    else {
                        if (554 == _mx2.ship_id) _mx5.houg = 4, _mx5.kaih = 2;
                        else {
                            if (411 == _mx2.ship_id) _mx5.houg = 2;
                            else {
                                if (412 != _mx2.ship_id) return _mx4;
                                _mx5.houg = 2;
                            }
                        }
                    }
                }
            }
            var _mx6 = _mx2.get_slotnums(237);
            return _mx4 = _mx5.multiply(_mx6);
        };
    },
    14386: (_mx7, _mx8, _mx9) => {
        'use strict';
        var _mxa = null;
        defineModule(_mx8);
        Object.defineProperty(_mx8, '__esModule', {
            'value': true
        }), _mx8.getSlot238_239PersonalEffect = void 0;
        var _mxb = _mx9(74496);
        _mx8.getSlot238_239PersonalEffect = function(_mxc) {
            var _mxd = null,
                _mxe = new _mxb.SlotItemEffectModel();
            return 501 != _mxc.ship_id && 506 != _mxc.ship_id && 502 != _mxc.ship_id && 507 != _mxc.ship_id || (_mxe.kaih += 1, _mxe.raig += 1), _mxe;
        };
    },
    82229: (_mxf, _mxg, _mxh) => {
        'use strict';
        var _mxi = null;
        defineModule(_mxg);
        Object.defineProperty(_mxg, '__esModule', {
            'value': true
        }), _mxg.getSlot242PersonalEffect = void 0;
        var _mxj = _mxh(74496);
        _mxg.getSlot242PersonalEffect = function(_mxk) {
            var _mxl = null,
                _mxm = new _mxj.SlotItemEffectModel(),
                _mxn = false,
                _mxo = new _mxj.SlotItemEffectModel();
            if (78 == _mxk.ctype && (_mxo.houg += 2, _mxo.kaih += 1, _mxn = true), 'ほうしょう' == _mxk.yomi && (_mxo.houg += 1, _mxn = true), 0 == _mxn) return _mxm;
            var _mxp = _mxk.get_slotnums(242);
            return _mxm.add(_mxo.multiply(_mxp)), _mxm;
        };
    },
    10325: (_mxq, _mxr, _mxs) => {
        'use strict';
        var _mxt = null;
        defineModule(_mxr);
        Object.defineProperty(_mxr, '__esModule', {
            'value': true
        }), _mxr.getSlot243PersonalEffect = void 0;
        var _mxu = _mxs(74496);
        _mxr.getSlot243PersonalEffect = function(_mxv) {
            var _mxw = null,
                _mxx = new _mxu.SlotItemEffectModel(),
                _mxy = false,
                _mxz = new _mxu.SlotItemEffectModel();
            if (78 == _mxv.ctype && (_mxz.houg += 3, _mxz.kaih += 1, _mxy = true), 'ほうしょう' == _mxv.yomi && (_mxz.houg += 2, _mxy = true), 0 == _mxy) return _mxx;
            var _my0 = _mxv.get_slotnums(243);
            return _mxx.add(_mxz.multiply(_my0)), _mxx;
        };
    },
    351: (_my1, _my2, _my3) => {
        'use strict';
        var _my4 = null;
        defineModule(_my2);
        Object.defineProperty(_my2, '__esModule', {
            'value': true
        }), _my2.getSlot244PersonalEffect = void 0;
        var _my5 = _my3(74496);
        _my2.getSlot244PersonalEffect = function(_my6) {
            var _my7 = null,
                _my8 = new _my5.SlotItemEffectModel(),
                _my9 = false,
                _mya = new _my5.SlotItemEffectModel(),
                _myb = 0;
            if (78 == _my6.ctype && (_mya.houg += 4, _mya.kaih += 2, _my9 = true, _myb = 1), 'ほうしょう' == _my6.yomi && (_mya.houg += 3, _my9 = true, _myb = 2), 0 == _my9) return _my8;
            var _myc = _my6.get_slotnums(244);
            if (_my8.add(_mya.multiply(_myc)), 0 == _myb) return _my8;
            var _myd = _my6.get_each_level_over_nums([244]).slot[244];
            return 1 == _myb ? (_myd[3] >= 1 && (_my8.houg += 1 * _myd[3]), _myd[5] >= 1 && (_my8.houm += 1 * _myd[5]), _myd[7] >= 1 && (_my8.houg += 1 * _myd[7]), _myd[8] >= 1 && (_my8.kaih += 1 * _myd[8]), _myd[9] >= 1 && (_my8.houm += 1 * _myd[9]), _myd[10] >= 1 && (_my8.houg += 1 * _myd[10])) : 2 == _myb && (_myd[3] >= 1 && (_my8.kaih += 1 * _myd[3]), _myd[7] >= 1 && (_my8.houg += 1 * _myd[7]), _myd[9] >= 1 && (_my8.houm += 1 * _myd[9]), _myd[10] >= 1 && (_my8.houg += 1 * _myd[10])), _my8;
        };
    },
    61977: (_mye, _myf, _myg) => {
        'use strict';
        var _myh = null;
        defineModule(_myf);
        Object.defineProperty(_myf, '__esModule', {
            'value': true
        }), _myf.getSlot247PersonalEffect = void 0;
        var _myi = _myg(74496);
        _myf.getSlot247PersonalEffect = function(_myj) {
            var _myk = null,
                _myl = new _myi.SlotItemEffectModel(),
                _mym = false,
                _myn = new _myi.SlotItemEffectModel(),
                _myo = 0;
            if ('フランス' == _myj.getCountryName() && (_myn.houg += 2, _myn.houm += 2, _mym = true, _myo = 1), 0 == _mym) return _myl;
            var _myp = _myj.get_slotnums(247);
            if (_myl.add(_myn.multiply(_myp)), 0 == _myo) return _myl;
            var _myq = _myj.get_each_level_nums(247),
                _myr = 0,
                _mys = 0;
            _myo > 0 && _myq.forEach(function(_myt, _myu) {
                _myu >= 4 && (_myr += _myt), _myu >= 8 && (_mys += _myt);
            });
            var _myv = _myq[10];
            return 1 == _myo && (_myr >= 1 && (_myl.houg += 1 * _myr, _myl.houm += 1 * _myr), _mys >= 1 && (_myl.kaih += 1 * _mys, _myl.houg += 1 * _mys, _myl.houm += 1 * _mys), _myv >= 1 && (_myl.kaih += 1 * _myv, _myl.houm += 1 * _myv)), _myl;
        };
    },
    96580: (_myw, _myx, _myy) => {
        'use strict';
        var _myz = null;
        defineModule(_myx);
        Object.defineProperty(_myx, '__esModule', {
            'value': true
        }), _myx.getSlot252PersonalEffect = void 0;
        var _mz0 = _myy(74496);
        _myx.getSlot252PersonalEffect = function(_mz1) {
            var _mz2 = null,
                _mz3 = new _mz0.SlotItemEffectModel(),
                _mz4 = (new _mz0.SlotItemEffectModel(), 0);
            if (78 != _mz1.ctype && 112 != _mz1.ctype || (_mz4 = 1), 0 == _mz4) return _mz3;
            var _mz5 = _mz1.get_each_level_over_nums([252]).slot[252];
            return 1 == _mz4 && (_mz5[4] >= 1 && (_mz3.kaih += 1 * _mz5[4]), _mz5[6] >= 1 && (_mz3.houm += 1 * _mz5[6]), _mz5[7] >= 1 && (_mz3.houg += 1 * _mz5[7]), _mz5[8] >= 1 && (_mz3.kaih += 1 * _mz5[8]), _mz5[9] >= 1 && (_mz3.houm += 1 * _mz5[9]), _mz5[10] >= 1 && (_mz3.houg += 1 * _mz5[10])), _mz3;
        };
    },
    31797: function(_mz6, _mz7, _mz8) {
        'use strict';
        var _mz9 = null;
        var _mza = this && this.__importDefault || function(_mzb) {
            var _mzc = null;
            return _mzb && _mzb.__esModule ? _mzb : {
                'default': _mzb
            };
        };
        defineModule(_mz7);
        Object.defineProperty(_mz7, '__esModule', {
            'value': true
        }), _mz7.getSlot266PersonalEffect2 = _mz7.getSlot266PersonalEffect = void 0;
        var _mzd = _mz8(74496),
            _mze = _mza(_mz8(18622));
        _mz7.getSlot266PersonalEffect = function(_mzf) {
            var _mzg = null,
                _mzh = new _mzd.SlotItemEffectModel(),
                _mzi = false;
            if (566 != _mzf.ship_id && 567 != _mzf.ship_id && 568 != _mzf.ship_id && 656 != _mzf.ship_id && 670 != _mzf.ship_id && 915 != _mzf.ship_id && 951 != _mzf.ship_id || (_mzi = true), 0 == _mzi) return _mzh;
            var _mzj = _mzf.get_slotnums(266);
            return 30 == _mzf.ctype && (1 == _mzj ? _mzh.houg = 1 : _mzj >= 2 && (_mzh.houg = 3)), _mzh;
        }, _mz7.getSlot266PersonalEffect2 = function(_mzk) {
            var _mzl = null,
                _mzm = new _mzd.SlotItemEffectModel(),
                _mzn = 0,
                _mzo = new _mzd.SlotItemEffectModel();
            if (23 == _mzk.ctype || 18 == _mzk.ctype ? (_mzo.houg = 1, _mzn = 1) : 30 == _mzk.ctype && (_mzo.houg = 1, _mzn = 2), ('しぐれ' == _mzk.yomi || 'ゆきかぜ' == _mzk.yomi || 'いそかぜ' == _mzk.yomi) && (_mzo.kaih = 1), 961 == _mzk.ship_id && (_mzo.houg += 1, _mzo.houm += 1, _mzo.kaih += 1), !_mzo.exists()) return _mzm;
            var _mzp = _mzk.get_slotnums(266);
            if (_mzm = _mzo.multiply(_mzp), 0 == _mzn) return _mzm;
            for (var _mzq = 0, _mzr = 0, _mzs = _mzk.have_slot_ids(); _mzr < _mzs.length; _mzr++) {
                var _mzt = _mzs[_mzr],
                    _mzu = _mze.default.model.slot.getMst(_mzt),
                    _mzv = _mzu.equipType;
                (12 == _mzv || 13 == _mzv) && _mzu.sakuteki >= 5 && (_mzq += _mzk.get_slotnums(parseInt(_mzt)));
            }
            return _mzq > 0 && (1 == _mzn ? (_mzm.houg += 1, _mzm.kaih += 1, _mzm.raig += 3) : 2 == _mzn && (_mzm.houg += 2, _mzm.kaih += 1, _mzm.raig += 3)), _mzm;
        };
    },
    45738: function(_mzw, _mzx, _mzy) {
        'use strict';
        var _mzz = null;
        var _n00 = this && this.__importDefault || function(_n01) {
            var _n02 = null;
            return _n01 && _n01.__esModule ? _n01 : {
                'default': _n01
            };
        };
        defineModule(_mzx);
        Object.defineProperty(_mzx, '__esModule', {
            'value': true
        }), _mzx.getSlot267PersonalEffect2 = _mzx.getSlot267PersonalEffect = void 0;
        var _n03 = _mzy(74496),
            _n04 = _n00(_mzy(18622));
        _mzx.getSlot267PersonalEffect = function(_n05) {
            var _n06 = null,
                _n07 = new _n03.SlotItemEffectModel(),
                _n08 = 0,
                _n09 = 0;
            if (38 == _n05.ctype || 22 == _n05.ctype) _n08 = 2, _n09 = 1;
            else {
                if (30 != _n05.ctype) return _n07;
                _n08 = 1, _n09 = 1;
            }
            var _n0a = _n05.get_slotnums(267) + _n05.get_slotnums(366);
            return _n07.houg = _n08 * _n0a, _n07.kaih = _n09 * _n0a, _n07;
        }, _mzx.getSlot267PersonalEffect2 = function(_n0b) {
            var _n0c = null,
                _n0d = new _n03.SlotItemEffectModel(),
                _n0e = _n0b.get_slotnums(267),
                _n0f = _n0b.get_slotnums(366),
                _n0g = _n0e + _n0f;
            if (566 != _n0b.ship_id && 567 != _n0b.ship_id && 568 != _n0b.ship_id && 656 != _n0b.ship_id && 670 != _n0b.ship_id && 915 != _n0b.ship_id && 951 != _n0b.ship_id || (_n0e > 0 && (_n0d.houg += 1), 1 == _n0f ? (_n0d.houg += 1, _n0d.tyku += 2) : _n0f >= 2 && (_n0d.houg += 2, _n0d.tyku += 4)), 38 != _n0b.ctype && 229 != _n0b.ship_id && [648, 961].indexOf(_n0b.ship_id) < 0) return _n0d;
            var _n0h = false,
                _n0i = false,
                _n0j = false,
                _n0k = false,
                _n0l = false,
                _n0m = false,
                _n0n = false,
                _n0o = false,
                _n0p = false,
                _n0q = false,
                _n0r = false,
                _n0s = 0,
                _n0t = 0,
                _n0u = 0;
            543 == _n0b.ship_id ? (_n0d.houg = 1 * _n0g, _n0i = true) : 229 == _n0b.ship_id ? _n0j = true : 542 == _n0b.ship_id ? (_n0d.houg = 1 * _n0g, _n0k = true) : 563 == _n0b.ship_id ? (_n0d.houg = 1 * _n0g, _n0l = true) : 564 == _n0b.ship_id ? (_n0d.houg = 1 * _n0g, _n0m = true) : 578 == _n0b.ship_id ? (_n0d.houg = 1 * _n0g, _n0n = true) : 569 == _n0b.ship_id ? (_n0d.houg = 1 * _n0g, _n0o = true) : 649 == _n0b.ship_id ? (_n0d.houg = 2 * _n0g, _n0q = true) : 955 == _n0b.ship_id || 960 == _n0b.ship_id ? (_n0d.houg = 2 * _n0g, _n0r = true) : 648 == _n0b.ship_id ? (_n0d.houg = 2 * _n0g, _n0p = true, _n0s = 1, _n0t = 1, _n0u = 1) : 961 == _n0b.ship_id && (_n0d.houg = 2 * _n0g, _n0h = true, _n0s = 1, _n0t = 1, _n0u = 1);
            for (var _n0v = 0, _n0w = 0, _n0x = 0, _n0y = _n0b.have_slot_ids(); _n0x < _n0y.length; _n0x++) {
                var _n0z = _n0y[_n0x],
                    _n10 = _n04.default.model.slot.getMst(_n0z),
                    _n11 = _n10.equipType;
                12 != _n11 && 13 != _n11 || (_n10.sakuteki >= 5 && (_n0v += _n0b.get_slotnums(parseInt(_n0z))), _n10.taiku >= 2 && (_n0w += _n0b.get_slotnums(parseInt(_n0z))));
            }
            if (_n0v > 0 && _n0e > 0 && ((38 == _n0b.ctype || _n0p) && (_n0d.houg += 2, _n0d.raig += 3, _n0d.kaih += 1, 955 == _n0b.ship_id ? _n0d.raig -= 1 : 960 == _n0b.ship_id && (_n0d.raig -= 2)), (_n0k || _n0i || _n0j || _n0l || _n0m || _n0n || _n0o || _n0p || _n0q || _n0r) && (_n0d.houg += 1, _n0d.raig += 3, _n0d.kaih += 2)), _n0f > 0 && (_n0k || _n0i || _n0l || _n0m || _n0n || _n0j || _n0o || _n0p || _n0q || _n0h || _n0r)) {
                1 == _n0f ? (_n0d.tyku += 3, _n0d.houg += 1, _n0d.houm += 1) : _n0f >= 2 && (_n0d.tyku += 5, _n0d.houg += 3, _n0d.houm += 1, 955 == _n0b.ship_id && (_n0d.houg += 1)), (_n0o || _n0p) && (_n0d.houg += 1, _n0d.tyku += 2), _n0v > 0 && (_n0d.houg += 2, _n0d.kaih += 2, _n0d.raig += 4, _n0d.houm += 2, 960 == _n0b.ship_id && (_n0d.raig -= 1, _n0d.houg += 1)), _n0w > 0 && (_n0d.houg += 1, _n0d.kaih += 3, _n0d.tyku += 5, _n0d.houm += 1);
                var _n12 = _n0b.get_each_level_nums(366),
                    _n13 = 0,
                    _n14 = 0;
                _n12.forEach(function(_n15, _n16) {
                    _n16 >= 5 && (_n13 += _n15), _n16 >= 8 && (_n14 += _n15);
                }), _n13 >= 1 && (_n0d.houm += 1 * _n13), _n14 >= 1 && (_n0d.houg += 1 * _n14);
                var _n17 = _n12[10];
                _n17 >= 1 && (_n0d.houm += 1 * _n17);
            }
            var _n18 = _n0b.get_slotnums(129),
                _n19 = _n0b.get_slotnums(74),
                _n1a = _n0b.get_slotnums(412);
            return _n0s > 0 && _n18 > 0 && 1 == _n0s && (_n0d.houg += 2, _n0d.kaih += 3, _n0d.tyku += 2), _n0u > 0 && _n1a > 0 && 1 == _n0u && (_n0d.houg += 2, _n0d.kaih += 3, _n0d.tyku += 2), _n0t > 0 && _n19 > 0 && 1 == _n0t && (_n0d.houg += 3, _n0d.kaih -= 3), _n0d;
        };
    },
    23934: (_n1b, _n1c, _n1d) => {
        'use strict';
        var _n1e = null;
        defineModule(_n1c);
        Object.defineProperty(_n1c, '__esModule', {
            'value': true
        }), _n1c.getSlot271PersonalEffect = void 0;
        var _n1f = _n1d(74496);
        _n1c.getSlot271PersonalEffect = function(_n1g) {
            var _n1h = null,
                _n1i = new _n1f.SlotItemEffectModel(),
                _n1j = 0;
            if (508 != _n1g.ship_id && 509 != _n1g.ship_id && 888 != _n1g.ship_id && 883 != _n1g.ship_id || (_n1j = 1), 0 == _n1j) return _n1i;
            var _n1k = _n1g.get_each_level_nums(271),
                _n1l = 0,
                _n1m = 0,
                _n1n = 0,
                _n1o = _n1k[10];
            return _n1j > 0 && _n1k.forEach(function(_n1p, _n1q) {
                _n1q >= 4 && (_n1l += _n1p), _n1q >= 6 && (_n1m += _n1p), _n1q >= 8 && (_n1n += _n1p);
            }), 1 == _n1j && (_n1l >= 1 && (_n1i.houg += 1 * _n1l), _n1m >= 1 && (_n1i.tyku += 2 * _n1m), _n1n >= 1 && (_n1i.kaih += 2 * _n1n), _n1o >= 1 && (_n1i.houg += 1 * _n1o)), _n1i;
        };
    },
    17712: function(_n1r, _n1s, _n1t) {
        'use strict';
        var _n1u = null;
        var _n1v = this && this.__importDefault || function(_n1w) {
            var _n1x = null;
            return _n1w && _n1w.__esModule ? _n1w : {
                'default': _n1w
            };
        };
        defineModule(_n1s);
        Object.defineProperty(_n1s, '__esModule', {
            'value': true
        }), _n1s.getSlot275PersonalEffect = void 0;
        var _n1y = _n1t(74496),
            _n1z = _n1v(_n1t(18622));
        _n1s.getSlot275PersonalEffect = function(_n20) {
            var _n21 = null,
                _n22 = new _n1y.SlotItemEffectModel(),
                _n23 = false,
                _n24 = new _n1y.SlotItemEffectModel(),
                _n25 = 0,
                _n26 = 0;
            if (894 != _n20.ship_id && 899 != _n20.ship_id || (_n24.houg += 1, _n24.tyku += 3, _n24.kaih += 2, _n23 = true, _n26 = 1, _n25 = 1), 0 == _n23) return _n22;
            var _n27 = _n20.get_slotnums(275);
            _n22.add(_n24.multiply(_n27));
            var _n28 = 0;
            if (_n25 > 0)
                for (var _n29 = 0, _n2a = _n20.have_slot_ids(); _n29 < _n2a.length; _n29++) {
                    var _n2b = _n2a[_n29],
                        _n2c = _n1z.default.model.slot.getMst(_n2b),
                        _n2d = _n2c.equipType;
                    12 != _n2d && 13 != _n2d || (_n2c.sakuteki >= 5 && _n20.get_slotnums(parseInt(_n2b)), _n2c.taiku >= 2 && (_n28 += _n20.get_slotnums(parseInt(_n2b))));
                }
            if (1 == _n25 && _n28 > 0 && (_n22.tyku += 3, _n22.kaih += 3), 0 == _n26) return _n22;
            var _n2e = _n20.get_each_level_nums(275),
                _n2f = 0,
                _n2g = _n2e[10];
            return _n26 > 0 && _n2e.forEach(function(_n2h, _n2i) {
                _n2i >= 7 && (_n2f += _n2h);
            }), 1 == _n26 && (_n2f > 0 && (_n22.tyku += 1 * _n2f, _n22.kaih += 1 * _n2f), _n2g > 0 && (_n22.houg += 1 * _n2g, _n22.tyku += 1 * _n2g, _n22.houm += 1 * _n2g)), _n22;
        };
    },
    93733: (_n2j, _n2k, _n2l) => {
        'use strict';
        var _n2m = null;
        defineModule(_n2k);
        Object.defineProperty(_n2k, '__esModule', {
            'value': true
        }), _n2k.getSlot277PersonalEffect = void 0;
        var _n2n = _n2l(74496);
        _n2k.getSlot277PersonalEffect = function(_n2o) {
            var _n2p = null,
                _n2q = new _n2n.SlotItemEffectModel(),
                _n2r = false,
                _n2s = new _n2n.SlotItemEffectModel();
            if ('アメリカ' != _n2o.getCountryName() && 67 != _n2o.ctype && 78 != _n2o.ctype && 82 != _n2o.ctype && 88 != _n2o.ctype && 108 != _n2o.ctype && 112 != _n2o.ctype || (_n2s.houg += 1, _n2s.kaih += 1, _n2r = true), 83 == _n2o.ctype && (_n2s.houg += 1, _n2s.kaih += 1, _n2s.tyku += 1, _n2r = true), 0 == _n2r) return _n2q;
            var _n2t = _n2o.get_slotnums(277);
            return _n2q.add(_n2s.multiply(_n2t)), _n2q;
        };
    },
    34718: (_n2u, _n2v, _n2w) => {
        'use strict';
        var _n2x = null;
        defineModule(_n2v);
        Object.defineProperty(_n2v, '__esModule', {
            'value': true
        }), _n2v.getSlot278PersonalEffect = void 0;
        var _n2y = _n2w(74496);
        _n2v.getSlot278PersonalEffect = function(_n2z) {
            var _n30 = null,
                _n31 = new _n2y.SlotItemEffectModel();
            return 'アメリカ' == _n2z.getCountryName() ? (_n31.tyku += 1, _n31.kaih += 3, _n31.saku += 1) : 67 == _n2z.ctype || 78 == _n2z.ctype || 82 == _n2z.ctype || 88 == _n2z.ctype || 108 == _n2z.ctype || 112 == _n2z.ctype ? (_n31.tyku += 1, _n31.kaih += 2) : 96 == _n2z.ctype && (_n31.tyku += 1, _n31.kaih += 1), _n31;
        };
    },
    69245: (_n32, _n33, _n34) => {
        'use strict';
        var _n35 = null;
        defineModule(_n33);
        Object.defineProperty(_n33, '__esModule', {
            'value': true
        }), _n33.getSlot279PersonalEffect = void 0;
        var _n36 = _n34(74496);
        _n33.getSlot279PersonalEffect = function(_n37) {
            var _n38 = null,
                _n39 = new _n36.SlotItemEffectModel();
            return 'アメリカ' == _n37.getCountryName() ? (_n39.houg += 2, _n39.tyku += 2, _n39.kaih += 3, _n39.saku += 2) : 67 == _n37.ctype || 78 == _n37.ctype || 82 == _n37.ctype || 88 == _n37.ctype || 108 == _n37.ctype || 112 == _n37.ctype ? (_n39.houg += 1, _n39.tyku += 1, _n39.kaih += 2, _n39.saku += 1) : 96 == _n37.ctype && (_n39.houg += 1, _n39.tyku += 1, _n39.kaih += 1), _n39;
        };
    },
    18478: (_n3a, _n3b, _n3c) => {
        'use strict';
        var _n3d = null;
        defineModule(_n3b);
        Object.defineProperty(_n3b, '__esModule', {
            'value': true
        }), _n3b.getSlot282PersonalEffect = void 0;
        var _n3e = _n3c(74496);
        _n3b.getSlot282PersonalEffect = function(_n3f) {
            var _n3g = null,
                _n3h = new _n3e.SlotItemEffectModel(),
                _n3i = false,
                _n3j = false;
            147 != _n3f.ship_id && 73 != _n3f.ctype && 81 != _n3f.ctype || (_n3i = true), 'ゆうばり' == _n3f.yomi && (_n3j = true);
            var _n3k = new _n3e.SlotItemEffectModel();
            if ((_n3i || _n3j) && (_n3k.houg += 2, _n3k.souk += 1), !_n3k.exists()) return _n3h;
            var _n3l = _n3f.get_slotnums(282);
            return _n3h = _n3k.multiply(_n3l);
        };
    },
    2899: (_n3m, _n3n, _n3o) => {
        'use strict';
        var _n3p = null;
        defineModule(_n3n);
        Object.defineProperty(_n3n, '__esModule', {
            'value': true
        }), _n3n.getSlot283PersonalEffect = void 0;
        var _n3q = _n3o(74496);
        _n3n.getSlot283PersonalEffect = function(_n3r) {
            var _n3s = null,
                _n3t = new _n3q.SlotItemEffectModel(),
                _n3u = false;
            147 != _n3r.ship_id && 73 != _n3r.ctype && 81 != _n3r.ctype || (_n3u = true);
            var _n3v = new _n3q.SlotItemEffectModel();
            if (_n3u && (_n3v.raig += 3, _n3v.houg += 1, _n3v.souk += 1), !_n3v.exists()) return _n3t;
            var _n3w = _n3r.get_slotnums(283);
            return _n3t = _n3v.multiply(_n3w);
        };
    },
    57120: (_n3x, _n3y, _n3z) => {
        'use strict';
        var _n40 = null;
        defineModule(_n3y);
        Object.defineProperty(_n3y, '__esModule', {
            'value': true
        }), _n3y.getSlot285PersonalEffect = void 0;
        var _n41 = _n3z(74496);
        _n3y.getSlot285PersonalEffect = function(_n42) {
            var _n43 = null,
                _n44 = new _n41.SlotItemEffectModel(),
                _n45 = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_n42.ship_id) >= 0 && (_n45 = true), 0 == _n45) return _n44;
            var _n46 = _n42.get_each_level_nums(285),
                _n47 = _n42.get_slotnums(285);
            _n47 > 2 && (_n47 = 2), _n44.raig = 2 * _n47, _n44.kaih = 1 * _n47;
            var _n48 = _n46[10];
            1 == _n48 && (_n44.houg += 1, _n44.raig += 1), _n48 >= 2 && (_n44.houg += 2, _n44.raig += 1), _n48 >= 3 && (_n44.raig += 3);
            var _n49 = _n42.get_slotnums(285);
            return 903 == _n42.ship_id ? (_n49 >= 2 && (_n44.raig += 2), _n49 >= 3 && (_n44.raig += 2)) : 908 != _n42.ship_id && 959 != _n42.ship_id || (_n49 >= 2 && (_n44.raig += 1), _n49 >= 3 && (_n44.raig += 1)), _n44;
        };
    },
    74985: function(_n4a, _n4b, _n4c) {
        'use strict';
        var _n4d = null;
        var _n4e = this && this.__importDefault || function(_n4f) {
            var _n4g = null;
            return _n4f && _n4f.__esModule ? _n4f : {
                'default': _n4f
            };
        };
        defineModule(_n4b);
        Object.defineProperty(_n4b, '__esModule', {
            'value': true
        }), _n4b.getSlot286PersonalEffect3 = _n4b.getSlot286PersonalEffect2 = _n4b.getSlot286PersonalEffect = void 0;
        var _n4h = _n4c(74496),
            _n4i = _n4e(_n4c(18622));
        _n4b.getSlot286PersonalEffect = function(_n4j) {
            var _n4k = null,
                _n4l = new _n4h.SlotItemEffectModel(),
                _n4m = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975].indexOf(_n4j.ship_id) >= 0 && (_n4m = true), 0 == _n4m) return _n4l;
            var _n4n = _n4j.get_each_level_nums(286),
                _n4o = _n4j.get_slotnums(286);
            _n4o > 2 && (_n4o = 2), _n4l.raig = 2 * _n4o, _n4l.kaih = 1 * _n4o;
            var _n4p = _n4n[10];
            if (1 == _n4p ? _n4l.houg = _n4l.houg + 1 : _n4p >= 2 && (_n4l.houg = _n4l.houg + 2), 30 == _n4j.ctype || 961 == _n4j.ship_id) {
                var _n4q = _n4n[5] + _n4n[6] + _n4n[7] + _n4n[8] + _n4n[9] + _n4n[10];
                1 == _n4q ? _n4l.raig = _n4l.raig + 1 : _n4q >= 2 && (_n4l.raig = _n4l.raig + 2);
            }
            return _n4l;
        }, _n4b.getSlot286PersonalEffect2 = function(_n4r) {
            var _n4s = null,
                _n4t = new _n4h.SlotItemEffectModel(),
                _n4u = false,
                _n4v = 0;
            if ('たけ' == _n4r.yomi && (_n4u = true, _n4v = 1), 0 == _n4u) return _n4t;
            var _n4w = _n4r.get_each_level_nums(286),
                _n4x = 0;
            return _n4v > 0 && _n4w.forEach(function(_n4y, _n4z) {
                _n4z >= 7 && (_n4x += _n4y);
            }), 'たけ' == _n4r.yomi && (_n4t.raig += 7, _n4t.kaih += 2, _n4x >= 1 && (_n4t.raig += 2), _n4w[10] >= 1 && (_n4t.raig += 2)), _n4t;
        }, _n4b.getSlot286PersonalEffect3 = function(_n50) {
            var _n51 = null,
                _n52 = new _n4h.SlotItemEffectModel(),
                _n53 = false,
                _n54 = new _n4h.SlotItemEffectModel(),
                _n55 = 0;
            if (662 != _n50.ship_id && 663 != _n50.ship_id && 668 != _n50.ship_id || (_n54.raig += 2, _n53 = true, _n55 = 1), 0 == _n53) return _n52;
            var _n56 = _n50.get_slotnums(286);
            _n52.add(_n54.multiply(_n56));
            for (var _n57 = 0, _n58 = 0, _n59 = _n50.have_slot_ids(); _n58 < _n59.length; _n58++) {
                var _n5a = _n59[_n58],
                    _n5b = _n4i.default.model.slot.getMst(_n5a),
                    _n5c = _n5b.equipType;
                12 != _n5c && 13 != _n5c || (_n5b.sakuteki >= 5 && (_n57 += _n50.get_slotnums(parseInt(_n5a))), _n5b.taiku >= 2 && _n50.get_slotnums(parseInt(_n5a)));
            }
            return _n57 >= 1 && 1 == _n55 && (_n52.raig += 3, _n52.kaih += 2), _n52;
        };
    },
    9234: (_n5d, _n5e, _n5f) => {
        'use strict';
        var _n5g = null;
        defineModule(_n5e);
        Object.defineProperty(_n5e, '__esModule', {
            'value': true
        }), _n5e.getSlot287PersonalEffect = void 0;
        var _n5h = _n5f(74496);
        _n5e.getSlot287PersonalEffect = function(_n5i) {
            var _n5j = null,
                _n5k = new _n5h.SlotItemEffectModel(),
                _n5l = new _n5h.SlotItemEffectModel(),
                _n5m = false;
            if (488 == _n5i.ship_id || 141 == _n5i.ship_id || 160 == _n5i.ship_id || 624 == _n5i.ship_id || 656 == _n5i.ship_id ? (_n5l.tais = 1, _n5l.kaih = 1, _n5m = true) : 662 != _n5i.ship_id && 961 != _n5i.ship_id || (_n5l.tais = 3, _n5m = true), 0 == _n5m) return _n5k;
            var _n5n = _n5i.get_slotnums(287);
            return _n5k = _n5l.multiply(_n5n);
        };
    },
    30802: (_n5o, _n5p, _n5q) => {
        'use strict';
        var _n5r = null;
        defineModule(_n5p);
        Object.defineProperty(_n5p, '__esModule', {
            'value': true
        }), _n5p.getSlot288PersonalEffect = void 0;
        var _n5s = _n5q(74496);
        _n5p.getSlot288PersonalEffect = function(_n5t) {
            var _n5u = null,
                _n5v = new _n5s.SlotItemEffectModel(),
                _n5w = new _n5s.SlotItemEffectModel(),
                _n5x = false;
            if (488 == _n5t.ship_id || 141 == _n5t.ship_id || 160 == _n5t.ship_id || 656 == _n5t.ship_id ? (_n5w.tais = 2, _n5w.kaih = 1, _n5x = true) : 624 == _n5t.ship_id ? (_n5w.houg = 1, _n5w.tais = 3, _n5w.kaih = 2, _n5x = true) : 662 != _n5t.ship_id && 961 != _n5t.ship_id || (_n5w.tais = 4, _n5w.kaih = 1, _n5x = true), 0 == _n5x) return _n5v;
            var _n5y = _n5t.get_slotnums(288);
            return _n5v = _n5w.multiply(_n5y);
        };
    },
    97002: function(_n5z, _n60, _n61) {
        'use strict';
        var _n62 = null;
        var _n63 = this && this.__importDefault || function(_n64) {
            var _n65 = null;
            return _n64 && _n64.__esModule ? _n64 : {
                'default': _n64
            };
        };
        defineModule(_n60);
        Object.defineProperty(_n60, '__esModule', {
            'value': true
        }), _n60.getSlot289PersonalEffect = void 0;
        var _n66 = _n61(74496),
            _n67 = _n63(_n61(18622));
        _n60.getSlot289PersonalEffect = function(_n68) {
            var _n69 = null,
                _n6a = new _n66.SlotItemEffectModel(),
                _n6b = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n6c = 0,
                _n6d = new _n66.SlotItemEffectModel();
            if (149 == _n68.ship_id || 591 == _n68.ship_id) _n6d.houg = 2, _n6d.tyku = 1, _n6c = 1;
            else {
                if (150 == _n68.ship_id || 592 == _n68.ship_id) _n6d.houg = 1;
                else {
                    if (152 == _n68.ship_id) _n6d.houg = 1;
                    else {
                        if (151 != _n68.ship_id && 593 != _n68.ship_id && 954 != _n68.ship_id) return _n6a;
                        _n6d.houg = 2, _n6d.tyku = 2, _n6d.kaih = 2, _n6c = 1;
                    }
                }
            }
            var _n6e = _n68.get_slotnums(289);
            if (_n6a = _n6d.multiply(_n6e), _n6b[_n68.ship_id]) {
                var _n6f = _n68.get_each_level_nums(289),
                    _n6g = new Array();
                _n6f.forEach(function(_n6h, _n6i) {
                    var _n6j = null;
                    for (var _n6k = 1; _n6k <= _n68.SLOT_LEVEL_MAX; _n6k++) _n6i >= _n6k && (null == _n6g[_n6k] && (_n6g[_n6k] = 0), _n6g[_n6k] += _n6h);
                });
                var _n6l = _n6b[_n68.ship_id];
                1 == _n6l ? (_n6g[1] >= 1 && (_n6a.kaih += 1 * _n6g[1]), _n6g[3] >= 1 && (_n6a.tyku = _n6a.tyku + 1 * _n6g[3]), _n6g[5] >= 1 && (_n6a.houg = _n6a.houg + 1 * _n6g[5]), _n6g[7] >= 1 && (_n6a.kaih += 1 * _n6g[7]), _n6g[8] >= 1 && (_n6a.tyku += 1 * _n6g[8]), _n6g[9] >= 1 && (_n6a.houg += 1 * _n6g[9]), _n6g[10] >= 1 && (_n6a.kaih += 1 * _n6g[10])) : 2 == _n6l ? (_n6g[4] >= 1 && (_n6a.tyku += 1 * _n6g[4]), _n6g[6] >= 1 && (_n6a.kaih += 1 * _n6g[6]), _n6g[8] >= 1 && (_n6a.houg += 1 * _n6g[8]), _n6g[10] >= 1 && (_n6a.kaih += 1 * _n6g[10])) : 3 == _n6l && (_n6g[7] >= 1 && (_n6a.tyku += 1 * _n6g[7]), _n6g[9] >= 1 && (_n6a.houg += 1 * _n6g[9]), _n6g[10] >= 1 && (_n6a.kaih += 1 * _n6g[10]));
            }
            if (0 == _n6c) return _n6a;
            for (var _n6m = 0, _n6n = 0, _n6o = _n68.have_slot_ids(); _n6n < _n6o.length; _n6n++) {
                var _n6p = _n6o[_n6n],
                    _n6q = _n67.default.model.slot.getMst(_n6p),
                    _n6r = _n6q.equipType;
                (12 == _n6r || 13 == _n6r) && _n6q.sakuteki >= 5 && (_n6m += _n68.get_slotnums(parseInt(_n6p)));
            }
            return _n6m > 0 && (_n6a.houg += 2, _n6a.kaih += 2), _n6a;
        };
    },
    16748: function(_n6s, _n6t, _n6u) {
        'use strict';
        var _n6v = null;
        var _n6w = this && this.__importDefault || function(_n6x) {
            var _n6y = null;
            return _n6x && _n6x.__esModule ? _n6x : {
                'default': _n6x
            };
        };
        defineModule(_n6t);
        Object.defineProperty(_n6t, '__esModule', {
            'value': true
        }), _n6t.getSlot290PersonalEffect = void 0;
        var _n6z = _n6u(74496),
            _n70 = _n6w(_n6u(18622));
        _n6t.getSlot290PersonalEffect = function(_n71) {
            var _n72 = null,
                _n73 = new _n6z.SlotItemEffectModel(),
                _n74 = 0,
                _n75 = new _n6z.SlotItemEffectModel();
            if (411 == _n71.ship_id) _n75.houg = 1;
            else {
                if (412 == _n71.ship_id) _n75.houg = 1;
                else {
                    if (82 == _n71.ship_id) _n75.houg = 2, _n75.tyku = 2, _n75.kaih = 1, _n74 = 1;
                    else {
                        if (553 == _n71.ship_id) _n75.houg = 3, _n75.tyku = 2, _n75.kaih = 1, _n75.houm = 3, _n74 = 1;
                        else {
                            if (88 == _n71.ship_id) _n75.houg = 2, _n75.tyku = 2, _n75.kaih = 1, _n74 = 1;
                            else {
                                if (554 != _n71.ship_id) return _n73;
                                _n75.houg = 3, _n75.tyku = 2, _n75.kaih = 2, _n75.houm = 3, _n74 = 1;
                            }
                        }
                    }
                }
            }
            var _n76 = _n71.get_slotnums(290);
            if (_n73 = _n75.multiply(_n76), 0 == _n74) return _n73;
            for (var _n77 = 0, _n78 = 0, _n79 = _n71.have_slot_ids(); _n78 < _n79.length; _n78++) {
                var _n7a = _n79[_n78],
                    _n7b = _n70.default.model.slot.getMst(_n7a),
                    _n7c = _n7b.equipType;
                (12 == _n7c || 13 == _n7c) && _n7b.taiku >= 2 && (_n77 += _n71.get_slotnums(parseInt(_n7a)));
            }
            return _n77 > 0 && (_n73.tyku += 2, _n73.kaih += 3), _n73;
        };
    },
    53618: (_n7d, _n7e, _n7f) => {
        'use strict';
        var _n7g = null;
        defineModule(_n7e);
        Object.defineProperty(_n7e, '__esModule', {
            'value': true
        }), _n7e.getSlot291PersonalEffect = void 0;
        var _n7h = _n7f(74496);
        _n7e.getSlot291PersonalEffect = function(_n7i) {
            var _n7j = null,
                _n7k = new _n7h.SlotItemEffectModel(),
                _n7l = new _n7h.SlotItemEffectModel();
            if (553 == _n7i.ship_id) _n7l.houg = 6, _n7l.kaih = 1;
            else {
                if (554 != _n7i.ship_id) return _n7k;
                _n7l.houg = 6, _n7l.kaih = 1;
            }
            var _n7m = _n7i.get_slotnums(291);
            return _n7k = _n7l.multiply(_n7m);
        };
    },
    72573: (_n7n, _n7o, _n7p) => {
        'use strict';
        var _n7q = null;
        defineModule(_n7o);
        Object.defineProperty(_n7o, '__esModule', {
            'value': true
        }), _n7o.getSlot292PersonalEffect = void 0;
        var _n7r = _n7p(74496);
        _n7o.getSlot292PersonalEffect = function(_n7s) {
            var _n7t = null,
                _n7u = new _n7r.SlotItemEffectModel(),
                _n7v = new _n7r.SlotItemEffectModel();
            if (553 == _n7s.ship_id) _n7v.houg = 8, _n7v.kaih = 2, _n7v.tyku = 1;
            else {
                if (554 != _n7s.ship_id) return _n7u;
                _n7v.houg = 8, _n7v.kaih = 2, _n7v.tyku = 1;
            }
            var _n7w = _n7s.get_slotnums(292);
            return _n7u = _n7v.multiply(_n7w);
        };
    },
    8955: function(_n7x, _n7y, _n7z) {
        'use strict';
        var _n80 = null;
        var _n81 = this && this.__importDefault || function(_n82) {
            var _n83 = null;
            return _n82 && _n82.__esModule ? _n82 : {
                'default': _n82
            };
        };
        defineModule(_n7y);
        Object.defineProperty(_n7y, '__esModule', {
            'value': true
        }), _n7y.getSlot293PersonalEffect = void 0;
        var _n84 = _n7z(74496),
            _n85 = _n81(_n7z(18622));
        _n7y.getSlot293PersonalEffect = function(_n86) {
            var _n87 = null,
                _n88 = new _n84.SlotItemEffectModel(),
                _n89 = new _n84.SlotItemEffectModel(),
                _n8a = 0;
            if (66 == _n86.ctype || 28 == _n86.ctype) _n89.houg = 2, _n89.tyku = 1, _n89.kaih = 3, _n8a = 1;
            else {
                if (74 != _n86.ctype && 77 != _n86.ctype) return _n88;
                _n89.houg = 1, _n89.tyku = 1, _n89.kaih = 2, _n8a = 2;
            }
            var _n8b = _n86.get_slotnums(293);
            _n88 = _n89.multiply(_n8b);
            for (var _n8c = 0, _n8d = 0, _n8e = _n86.have_slot_ids(); _n8d < _n8e.length; _n8d++) {
                var _n8f = _n8e[_n8d],
                    _n8g = _n85.default.model.slot.getMst(_n8f),
                    _n8h = _n8g.equipType;
                (12 == _n8h || 13 == _n8h) && _n8g.sakuteki >= 5 && (_n8c += _n86.get_slotnums(parseInt(_n8f)));
            }
            var _n8i = _n86.get_slotnums(174);
            return 1 == _n8a ? (_n8c > 0 && (_n88.houg += 2, _n88.kaih += 3, _n88.raig += 1), 1 == _n8i ? (_n88.houg += 2, _n88.raig += 4) : _n8i >= 2 && (_n88.houg += 3, _n88.raig += 7)) : 2 == _n8a && _n8c > 0 && (_n88.houg += 2, _n88.kaih += 3, _n88.tais += 1), _n88;
        };
    },
    98947: function(_n8j, _n8k, _n8l) {
        'use strict';
        var _n8m = null;
        var _n8n = this && this.__importDefault || function(_n8o) {
            var _n8p = null;
            return _n8o && _n8o.__esModule ? _n8o : {
                'default': _n8o
            };
        };
        defineModule(_n8k);
        Object.defineProperty(_n8k, '__esModule', {
            'value': true
        }), _n8k.getSlot294PersonalEffect = void 0;
        var _n8q = _n8l(74496),
            _n8r = _n8n(_n8l(18622));
        _n8k.getSlot294PersonalEffect = function(_n8s) {
            var _n8t = null,
                _n8u = new _n8q.SlotItemEffectModel(),
                _n8v = new _n8q.SlotItemEffectModel(),
                _n8w = 0,
                _n8x = _n8s.get_slotnums(294);
            if (12 != _n8s.ctype && 1 != _n8s.ctype && 5 != _n8s.ctype) return _n8u;
            _n8v.houg = 1, 959 == _n8s.ship_id && (_n8v.houg += 1, _n8x >= 2 && (_n8u.houg += 2), _n8x >= 3 && (_n8u.houg += 3), _n8w = 1), _n8u.add(_n8v.multiply(_n8x));
            for (var _n8y = 0, _n8z = 0, _n90 = _n8s.have_slot_ids(); _n8z < _n90.length; _n8z++) {
                var _n91 = _n90[_n8z],
                    _n92 = _n8r.default.model.slot.getMst(_n91),
                    _n93 = _n92.equipType;
                (12 == _n93 || 13 == _n93) && _n92.sakuteki >= 5 && (_n8y += _n8s.get_slotnums(parseInt(_n91)));
            }
            var _n94 = _n8s.get_slotnums(13),
                _n95 = _n8s.get_slotnums(125),
                _n96 = _n8s.get_slotnums(285),
                _n97 = _n94 + _n95 + _n96;
            if (_n8y > 0 && (_n8u.houg += 3, _n8u.kaih += 2, _n8u.raig += 1), 1 == _n97 ? (_n8u.houg += 1, _n8u.raig += 3) : _n97 >= 2 && (_n8u.houg += 2, _n8u.raig += 5), _n96 >= 1 && (_n8u.raig += 1), 0 == _n8w) return _n8u;
            var _n98 = _n8s.get_each_level_nums(294),
                _n99 = [];
            return _n8w > 0 && _n98.forEach(function(_n9a, _n9b) {
                var _n9c = null;
                for (var _n9d = 1; _n9d <= _n8s.SLOT_LEVEL_MAX; _n9d++) null == _n99[_n9d] && (_n99[_n9d] = 0), _n9b >= _n9d && (_n99[_n9d] += _n9a);
            }), 1 == _n8w && (_n99[6] >= 1 && (_n8u.houm += 4 * _n99[6]), _n99[7] >= 1 && (_n8u.houg = _n8u.houg + 6 * _n99[7]), _n99[8] >= 1 && (_n8u.houg = _n8u.houg + 1 * _n99[8]), _n99[9] >= 1 && (_n8u.houg = _n8u.houg + 1 * _n99[9]), _n99[10] >= 1 && (_n8u.houg += 1 * _n99[10])), _n8u;
        };
    },
    44726: function(_n9e, _n9f, _n9g) {
        'use strict';
        var _n9h = null;
        var _n9i = this && this.__importDefault || function(_n9j) {
            var _n9k = null;
            return _n9j && _n9j.__esModule ? _n9j : {
                'default': _n9j
            };
        };
        defineModule(_n9f);
        Object.defineProperty(_n9f, '__esModule', {
            'value': true
        }), _n9f.getSlot295PersonalEffect = void 0;
        var _n9l = _n9g(74496),
            _n9m = _n9i(_n9g(18622));
        _n9f.getSlot295PersonalEffect = function(_n9n) {
            var _n9o = null,
                _n9p = new _n9l.SlotItemEffectModel(),
                _n9q = new _n9l.SlotItemEffectModel(),
                _n9r = _n9n.get_slotnums(295);
            if (12 != _n9n.ctype && 1 != _n9n.ctype && 5 != _n9n.ctype) return _n9p;
            _n9q.houg = 2, _n9q.tyku = 2, 666 == _n9n.ship_id ? (_n9q.houg += 1, _n9q.tyku += 1, _n9q.tais += 1) : 959 == _n9n.ship_id && (_n9q.houg += 2, _n9r >= 2 && (_n9p.houg += 2), _n9r >= 3 && (_n9p.houg += 3)), _n9p.add(_n9q.multiply(_n9r));
            for (var _n9s = 0, _n9t = 0, _n9u = 0, _n9v = _n9n.have_slot_ids(); _n9u < _n9v.length; _n9u++) {
                var _n9w = _n9v[_n9u],
                    _n9x = _n9m.default.model.slot.getMst(_n9w),
                    _n9y = _n9x.equipType;
                12 != _n9y && 13 != _n9y || (_n9x.sakuteki >= 5 && (_n9s += _n9n.get_slotnums(parseInt(_n9w))), _n9x.taiku >= 2 && (_n9t += _n9n.get_slotnums(parseInt(_n9w))));
            }
            var _n9z = _n9n.get_slotnums(13),
                _na0 = _n9n.get_slotnums(125),
                _na1 = _n9n.get_slotnums(285),
                _na2 = _n9z + _na0 + _na1;
            return _n9s > 0 && (_n9p.houg += 3, _n9p.kaih += 2, _n9p.raig += 1), 1 == _na2 ? (_n9p.houg += 1, _n9p.raig += 3) : _na2 >= 2 && (_n9p.houg += 2, _n9p.raig += 5), _na1 >= 1 && (_n9p.raig += 1), _n9t > 0 && (_n9p.tyku += 6), _n9p;
        };
    },
    93065: function(_na3, _na4, _na5) {
        'use strict';
        var _na6 = null;
        var _na7 = this && this.__importDefault || function(_na8) {
            var _na9 = null;
            return _na8 && _na8.__esModule ? _na8 : {
                'default': _na8
            };
        };
        defineModule(_na4);
        Object.defineProperty(_na4, '__esModule', {
            'value': true
        }), _na4.getSlot296PersonalEffect = void 0;
        var _naa = _na5(74496),
            _nab = _na7(_na5(18622));
        _na4.getSlot296PersonalEffect = function(_nac) {
            var _nad = null,
                _nae = new _naa.SlotItemEffectModel(),
                _naf = new _naa.SlotItemEffectModel();
            1 != _nac.ctype && 5 != _nac.ctype && 10 != _nac.ctype && 23 != _nac.ctype || (_naf.houg += 1), 10 != _nac.ctype && 23 != _nac.ctype || (_naf.kaih += 1), 145 == _nac.ship_id || 961 == _nac.ship_id ? (_naf.houg += 1, _naf.tyku += 1) : 144 == _nac.ship_id ? (_naf.houg += 1, _naf.raig += 1) : 469 == _nac.ship_id || 588 == _nac.ship_id || 667 == _nac.ship_id || 587 == _nac.ship_id || 242 == _nac.ship_id ? _naf.kaih += 1 : 497 == _nac.ship_id ? (_naf.houg += 1, _naf.kaih += 1) : 244 == _nac.ship_id ? _naf.kaih += 1 : 498 == _nac.ship_id || 975 == _nac.ship_id ? (_naf.tyku += 1, _naf.kaih += 1) : 627 == _nac.ship_id ? (_naf.houg += 2, _naf.raig += 1) : 903 != _nac.ship_id && 908 != _nac.ship_id || (_naf.houg += 3);
            var _nag = true;
            if (_naf.exists() || (_nag = false), 0 == _nag) return _nae;
            var _nah = _nac.get_slotnums(296);
            _nae = _naf.multiply(_nah);
            var _nai = 0;
            if (1 != _nac.ctype && 5 != _nac.ctype && 10 != _nac.ctype || (_nai = 1), 23 == _nac.ctype && (_nai = 2), 0 == _nai) return _nae;
            for (var _naj = 0, _nak = 0, _nal = 0, _nam = _nac.have_slot_ids(); _nal < _nam.length; _nal++) {
                var _nan = _nam[_nal],
                    _nao = _nab.default.model.slot.getMst(_nan),
                    _nap = _nao.equipType;
                12 != _nap && 13 != _nap || (_nao.sakuteki >= 5 && (_naj += _nac.get_slotnums(parseInt(_nan))), _nao.taiku >= 2 && (_nak += _nac.get_slotnums(parseInt(_nan))));
            }
            return _naj > 0 && (1 == _nai ? (_nae.houg += 1, _nae.kaih += 2, _nae.raig += 2) : 2 == _nai && (_nae.houg += 1, _nae.kaih += 2, _nae.raig += 3)), _nac.get_slotnums(285) + _nac.get_slotnums(125) >= 1 && 1 == _nai && (_nae.houg += 1, _nae.raig += 3), _nac.get_slotnums(15) + _nac.get_slotnums(286) >= 1 && 2 == _nai && (_nae.houg += 1, _nae.raig += 3), _nak > 0 && (1 == _nai ? _nae.tyku += 5 : 2 == _nai && (_nae.tyku += 6)), _nae;
        };
    },
    85767: (_naq, _nar, _nas) => {
        'use strict';
        var _nat = null;
        defineModule(_nar);
        Object.defineProperty(_nar, '__esModule', {
            'value': true
        }), _nar.getSlot297PersonalEffect = void 0;
        var _nau = _nas(74496);
        _nar.getSlot297PersonalEffect = function(_nav) {
            var _naw = null,
                _nax = new _nau.SlotItemEffectModel(),
                _nay = new _nau.SlotItemEffectModel();
            if (12 == _nav.ctype) _nay.kaih = 2;
            else {
                if (1 != _nav.ctype && 5 != _nav.ctype) return _nax;
                _nay.kaih = 1;
            }
            var _naz = _nav.get_slotnums(297);
            return _nax = _nay.multiply(_naz);
        };
    },
    38314: (_nb0, _nb1, _nb2) => {
        'use strict';
        var _nb3 = null;
        defineModule(_nb1);
        Object.defineProperty(_nb1, '__esModule', {
            'value': true
        }), _nb1.getSlot301PersonalEffect = void 0;
        var _nb4 = _nb2(74496);
        _nb1.getSlot301PersonalEffect = function(_nb5) {
            var _nb6 = null,
                _nb7 = new _nb4.SlotItemEffectModel(),
                _nb8 = new _nb4.SlotItemEffectModel();
            67 != _nb5.ctype && 78 != _nb5.ctype && 82 != _nb5.ctype && 88 != _nb5.ctype && 108 != _nb5.ctype && 112 != _nb5.ctype || (_nb8.tyku += 2, _nb8.kaih += 1, _nb8.souk += 1);
            var _nb9 = true;
            if (_nb8.exists() || (_nb9 = false), 0 == _nb9) return _nb7;
            var _nba = _nb5.get_slotnums(301);
            return _nb7 = _nb8.multiply(_nba);
        };
    },
    59747: (_nbb, _nbc, _nbd) => {
        'use strict';
        var _nbe = null;
        defineModule(_nbc);
        Object.defineProperty(_nbc, '__esModule', {
            'value': true
        }), _nbc.getSlot302PersonalEffect = void 0;
        var _nbf = _nbd(74496);
        _nbc.getSlot302PersonalEffect = function(_nbg) {
            var _nbh = null,
                _nbi = new _nbf.SlotItemEffectModel(),
                _nbj = new _nbf.SlotItemEffectModel();
            if (76 == _nbg.ctype && (_nbj.tais = 1, _nbj.kaih = 1), !_nbj.exists()) return _nbi;
            var _nbk = _nbg.get_slotnums(302);
            return _nbi = _nbj.multiply(_nbk);
        };
    },
    40649: (_nbl, _nbm, _nbn) => {
        'use strict';
        var _nbo = null;
        defineModule(_nbm);
        Object.defineProperty(_nbm, '__esModule', {
            'value': true
        }), _nbm.getSlot303PersonalEffect = void 0;
        var _nbp = _nbn(74496);
        _nbm.getSlot303PersonalEffect = function(_nbq) {
            var _nbr = null,
                _nbs = new _nbp.SlotItemEffectModel(),
                _nbt = new _nbp.SlotItemEffectModel();
            if (16 == _nbq.ctype || 4 == _nbq.ctype || 20 == _nbq.ctype || 41 == _nbq.ctype ? (_nbt.houg = 1, _nbt.tyku = 1) : 89 == _nbq.ctype && (_nbt.houg = 1, _nbt.tyku = 2, _nbt.kaih = 1), !_nbt.exists()) return _nbs;
            var _nbu = _nbq.get_slotnums(303);
            return _nbs = _nbt.multiply(_nbu);
        };
    },
    13533: (_nbv, _nbw, _nbx) => {
        'use strict';
        var _nby = null;
        defineModule(_nbw);
        Object.defineProperty(_nbw, '__esModule', {
            'value': true
        }), _nbw.getSlot304PersonalEffect = void 0;
        var _nbz = _nbx(74496);
        _nbw.getSlot304PersonalEffect = function(_nc0) {
            var _nc1 = null,
                _nc2 = new _nbz.SlotItemEffectModel(),
                _nc3 = new _nbz.SlotItemEffectModel();
            if (16 == _nc0.ctype || 4 == _nc0.ctype || 20 == _nc0.ctype || 41 == _nc0.ctype ? (_nc3.houg = 1, _nc3.tais = 1, _nc3.kaih = 1) : 89 == _nc0.ctype && (_nc3.houg = 1, _nc3.tais = 2, _nc3.kaih = 2), !_nc3.exists()) return _nc2;
            var _nc4 = _nc0.get_slotnums(304);
            return _nc2 = _nc3.multiply(_nc4);
        };
    },
    99791: (_nc5, _nc6, _nc7) => {
        'use strict';
        var _nc8 = null;
        defineModule(_nc6);
        Object.defineProperty(_nc6, '__esModule', {
            'value': true
        }), _nc6.getSlot305More320mmGunPersonalEffect = void 0;
        var _nc9 = _nc7(74496);
        _nc6.getSlot305More320mmGunPersonalEffect = function(_nca) {
            var _ncb = null,
                _ncc = new _nc9.SlotItemEffectModel(),
                _ncd = _nca.get_slotnums(426),
                _nce = _nca.get_slotnums(427),
                _ncf = _nca.get_slotnums(428),
                _ncg = _nca.get_slotnums(429),
                _nch = _ncd + _nce + _ncf + _ncg;
            return 113 == _nca.ctype ? (_ncc.houg = _ncc.houg + 2 * _nch, _ncd >= 1 && (_ncc.houg = _ncc.houg + 1 * _ncd, _ncc.kaih = _ncc.kaih + 1 * _ncd, (_ncd >= 2 || _nce >= 1) && (_ncc.houg = _ncc.houg + 1, _ncc.kaih = _ncc.kaih + 1)), _ncf >= 1 && (_ncc.houg = _ncc.houg + 1 * _ncf, _ncc.kaih = _ncc.kaih + 1 * _ncf, (_ncf >= 2 || _ncg >= 1) && (_ncc.houg = _ncc.houg + 2, _ncc.kaih = _ncc.kaih + 1))) : 73 == _nca.ctype ? (_ncc.houg = _ncc.houg + 1 * _nch, _ncd >= 1 && (_ncc.houg = _ncc.houg + 1 * _ncd, _ncc.kaih = _ncc.kaih + 1 * _ncd, (_ncd >= 2 || _nce >= 1) && (_ncc.houg = _ncc.houg + 1)), _ncf >= 1 && (_ncc.houg = _ncc.houg + 1 * _ncf, _ncc.kaih = _ncc.kaih + 1 * _ncf, (_ncf >= 2 || _ncg >= 1) && (_ncc.houg = _ncc.houg + 1))) : 58 == _nca.ctype && _ncf >= 1 && (_ncc.houg = _ncc.houg + 1 * _ncf, _ncc.kaih = _ncc.kaih + 2 * _ncf, (_ncf >= 2 || _ncg >= 1) && (_ncc.houg = _ncc.houg + 2, _ncc.kaih = _ncc.kaih + 1)), _ncc;
        };
    },
    12138: (_nci, _ncj, _nck) => {
        'use strict';
        var _ncl = null;
        defineModule(_ncj);
        Object.defineProperty(_ncj, '__esModule', {
            'value': true
        }), _ncj.getSlot305_And_306_PersonalEffect = void 0;
        var _ncm = _nck(74496);
        _ncj.getSlot305_And_306_PersonalEffect = function(_ncn) {
            var _nco = null,
                _ncp = new _ncm.SlotItemEffectModel(),
                _ncq = new _ncm.SlotItemEffectModel();
            if (76 == _ncn.ctype && (_ncq.tais = 1, _ncq.kaih = 1), 'しんよう' == _ncn.yomi ? (_ncq.tais += 2, _ncq.kaih += 1) : 'グラーフ・ツェッペリン' != _ncn.yomi && 'アクィラ' != _ncn.yomi || (_ncq.houg = 1, _ncq.kaih = 1), !_ncq.exists()) return _ncp;
            var _ncr = _ncn.get_slotnums(305) + _ncn.get_slotnums(306);
            return _ncp = _ncq.multiply(_ncr);
        };
    },
    30042: (_ncs, _nct, _ncu) => {
        'use strict';
        var _ncv = null;
        defineModule(_nct);
        Object.defineProperty(_nct, '__esModule', {
            'value': true
        }), _nct.getSlot307PersonalEffect = void 0;
        var _ncw = _ncu(74496);
        _nct.getSlot307PersonalEffect = function(_ncx) {
            var _ncy = null,
                _ncz = new _ncw.SlotItemEffectModel(),
                _nd0 = new _ncw.SlotItemEffectModel();
            if ('アメリカ' == _ncx.getCountryName() && (_nd0.houg = 1, _nd0.tyku = 1, _nd0.kaih = 1), !_nd0.exists()) return _ncz;
            var _nd1 = _ncx.get_slotnums(307);
            return _ncz = _nd0.multiply(_nd1);
        };
    },
    33623: (_nd2, _nd3, _nd4) => {
        'use strict';
        var _nd5 = null;
        defineModule(_nd3);
        Object.defineProperty(_nd3, '__esModule', {
            'value': true
        }), _nd3.getSlot308PersonalEffect = void 0;
        var _nd6 = _nd4(74496);
        _nd3.getSlot308PersonalEffect = function(_nd7) {
            var _nd8 = null,
                _nd9 = new _nd6.SlotItemEffectModel(),
                _nda = new _nd6.SlotItemEffectModel();
            if ('アメリカ' == _nd7.getCountryName() && (_nda.houg = 1, _nda.tyku = 1, _nda.kaih = 1), 2 == _nd7.stype ? _nda.houg += 1 : 1 == _nd7.stype && (_nda.tyku += 1, _nda.kaih += 1), 651 != _nd7.ship_id && 656 != _nd7.ship_id || (_nda.houg += 1, _nda.tyku += 1, _nda.kaih += 1), !_nda.exists()) return _nd9;
            var _ndb = _nd7.get_slotnums(308);
            return _nd9 = _nda.multiply(_ndb);
        };
    },
    17732: (_ndc, _ndd, _nde) => {
        'use strict';
        var _ndf = null;
        defineModule(_ndd);
        Object.defineProperty(_ndd, '__esModule', {
            'value': true
        }), _ndd.getSlot30_410PersonalEffect = void 0;
        var _ndg = _nde(74496);
        _ndd.getSlot30_410PersonalEffect = function(_ndh) {
            var _ndi = null,
                _ndj = new _ndg.SlotItemEffectModel();
            return 73 != _ndh.ship_id && 501 != _ndh.ship_id && 506 != _ndh.ship_id && 502 != _ndh.ship_id && 507 != _ndh.ship_id || (_ndj.tyku += 3, _ndj.kaih += 2, _ndj.saku += 2, _ndh.get_slotnums(410) >= 1 && (_ndj.tyku += 2, _ndj.kaih += 2, _ndj.houg += 1, _ndj.souk += 1)), 54 == _ndh.ctype && (_ndj.tyku += 3, _ndj.kaih += 2, _ndj.saku += 2, _ndh.get_slotnums(410) >= 1 && (_ndj.tyku += 2, _ndj.kaih += 2, _ndj.houg += 1, _ndj.souk += 1, 968 == _ndh.ship_id && (_ndj.houg += 1, _ndj.tyku += 1, _ndj.kaih += 1))), _ndj;
        };
    },
    85630: function(_ndk, _ndl, _ndm) {
        'use strict';
        var _ndn = null;
        var _ndo = this && this.__importDefault || function(_ndp) {
            var _ndq = null;
            return _ndp && _ndp.__esModule ? _ndp : {
                'default': _ndp
            };
        };
        defineModule(_ndl);
        Object.defineProperty(_ndl, '__esModule', {
            'value': true
        }), _ndl.getSlot310PersonalEffect = void 0;
        var _ndr = _ndm(74496),
            _nds = _ndo(_ndm(18622));
        _ndl.getSlot310PersonalEffect = function(_ndt) {
            var _ndu = null,
                _ndv = new _ndr.SlotItemEffectModel(),
                _ndw = new _ndr.SlotItemEffectModel(),
                _ndx = new _ndr.SlotItemEffectModel();
            34 == _ndt.ctype ? (_ndw.houg += 2, _ndw.tyku += 1, _ndw.kaih += 1, _ndx.houg += 2) : 56 == _ndt.ctype ? (_ndw.houg += 2, _ndw.kaih += 1, _ndx.houg += 2, _ndx.kaih += 2) : 90 == _ndt.ctype && (_ndw.houg += 3, _ndw.raig += 2, _ndw.tyku += 1, _ndw.kaih += 1, _ndx.houg += 1, _ndx.raig += 1);
            var _ndy = new _ndr.SlotItemEffectModel(),
                _ndz = new _ndr.SlotItemEffectModel();
            622 != _ndt.ship_id && 623 != _ndt.ship_id && 624 != _ndt.ship_id || (_ndw.houg += 2, _ndw.kaih += 1, _ndw.tais += 1, _ndy.houg = 1, _ndy.raig = 1, _ndz.houg = 3, _ndz.kaih = 2, _ndz.raig = 2);
            var _ne0 = true;
            if (_ndw.exists() || (_ne0 = false), 0 == _ne0) return _ndv;
            var _ne1 = _ndt.get_slotnums(310) + _ndt.get_slotnums(518);
            _ndv = _ndw.multiply(_ne1);
            for (var _ne2 = 0, _ne3 = 0, _ne4 = 0, _ne5 = [310, 518]; _ne4 < _ne5.length; _ne4++) {
                var _ne6 = _ne5[_ne4],
                    _ne7 = _ndt.have_slots_dict[_ne6];
                if (null != _ne7)
                    for (var _ne8 = 0, _ne9 = _ne7; _ne8 < _ne9.length; _ne8++) {
                        var _nea = _ne9[_ne8];
                        null != _nea && (_nea.level >= 7 && _ne2++, _nea.level >= 10 && _ne3++);
                    }
            }
            if (_ndy.exists() && _ne2 > 0 && _ndv.add(_ndy.multiply(_ne2)), _ndx.exists() && _ne3 > 0 && _ndv.add(_ndx.multiply(_ne3)), _ndz.exists()) {
                for (var _neb = 0, _nec = 0, _ned = _ndt.have_slot_ids(); _nec < _ned.length; _nec++) {
                    var _nee = _ned[_nec],
                        _nef = _nds.default.model.slot.getMst(_nee),
                        _neg = _nef.equipType;
                    (12 == _neg || 13 == _neg) && _nef.sakuteki >= 5 && (_neb += _ndt.get_slotnums(parseInt(_nee)));
                }
                _neb > 0 && _ndv.add(_ndz);
            }
            return _ndv;
        };
    },
    88736: (_neh, _nei, _nej) => {
        'use strict';
        var _nek = null;
        defineModule(_nei);
        Object.defineProperty(_nei, '__esModule', {
            'value': true
        }), _nei.getSlot313PersonalEffect = void 0;
        var _nel = _nej(74496);
        _nei.getSlot313PersonalEffect = function(_nem) {
            var _nen = null,
                _neo = new _nel.SlotItemEffectModel(),
                _nep = new _nel.SlotItemEffectModel();
            87 != _nem.ctype && 91 != _nem.ctype || (_nep.houg += 2, _nep.tyku += 2, _nep.kaih += 1, _nep.souk += 1), 651 != _nem.ship_id && 656 != _nem.ship_id || (_nep.houg += 2, _nep.tyku += 2, _nep.kaih += 1, _nep.souk += 1);
            var _neq = true;
            if (_nep.exists() || (_neq = false), 0 == _neq) return _neo;
            var _ner = _nem.get_slotnums(313);
            return _neo = _nep.multiply(_ner);
        };
    },
    49341: (_nes, _net, _neu) => {
        'use strict';
        var _nev = null;
        defineModule(_net);
        Object.defineProperty(_net, '__esModule', {
            'value': true
        }), _net.getSlot314PersonalEffect = void 0;
        var _new = _neu(74496);
        _net.getSlot314PersonalEffect = function(_nex) {
            var _ney = null,
                _nez = new _new.SlotItemEffectModel(),
                _nf0 = new _new.SlotItemEffectModel();
            87 != _nex.ctype && 91 != _nex.ctype || (_nf0.houg += 1, _nf0.raig += 3);
            var _nf1 = true;
            if (_nf0.exists() || (_nf1 = false), 0 == _nf1) return _nez;
            var _nf2 = _nex.get_slotnums(314);
            return _nez = _nf0.multiply(_nf2);
        };
    },
    74306: (_nf3, _nf4, _nf5) => {
        'use strict';
        var _nf6 = null;
        defineModule(_nf4);
        Object.defineProperty(_nf4, '__esModule', {
            'value': true
        }), _nf4.getSlot315PersonalEffect = void 0;
        var _nf7 = _nf5(74496);
        _nf4.getSlot315PersonalEffect = function(_nf8) {
            var _nf9 = null,
                _nfa = new _nf7.SlotItemEffectModel(),
                _nfb = new _nf7.SlotItemEffectModel();
            'アメリカ' == _nf8.getCountryName() && (_nfb.houg += 2, _nfb.kaih += 3, _nfb.saku += 4), 87 != _nf8.ctype && 91 != _nf8.ctype || (_nfb.houg += 1, _nfa.leng += 1), 651 != _nf8.ship_id && 656 != _nf8.ship_id || (_nfa.houg += 2, _nfa.kaih += 2, _nfa.saku += 3, _nfa.leng += 1);
            var _nfc = true;
            if (_nfb.exists() || (_nfc = false), 0 == _nfc) return _nfa;
            var _nfd = _nf8.get_slotnums(315);
            return _nfa.add(_nfb.multiply(_nfd)), _nfa;
        };
    },
    83898: (_nfe, _nff, _nfg) => {
        'use strict';
        var _nfh = null;
        defineModule(_nff);
        Object.defineProperty(_nff, '__esModule', {
            'value': true
        }), _nff.getSlot316PersonalEffect = void 0;
        var _nfi = _nfg(74496);
        _nff.getSlot316PersonalEffect = function(_nfj) {
            var _nfk = null,
                _nfl = new _nfi.SlotItemEffectModel(),
                _nfm = new _nfi.SlotItemEffectModel();
            if (68 == _nfj.ctype) {
                if (_nfm.houg += 4, _nfm.tyku += 1, _nfm.kaih += 1, !_nfm.exists()) return _nfl;
                var _nfn = _nfj.get_slotnums(316);
                _nfl = _nfm.multiply(_nfn);
            }
            return _nfl;
        };
    },
    71873: (_nfo, _nfp, _nfq) => {
        'use strict';
        var _nfr = null;
        defineModule(_nfp);
        Object.defineProperty(_nfp, '__esModule', {
            'value': true
        }), _nfp.getSlot317PersonalEffect = void 0;
        var _nfs = _nfq(74496);
        _nfp.getSlot317PersonalEffect = function(_nft) {
            var _nfu = null,
                _nfv = new _nfs.SlotItemEffectModel(),
                _nfw = new _nfs.SlotItemEffectModel(),
                _nfx = 0,
                _nfy = false;
            if (6 == _nft.ctype ? (_nfw.houg += 2, _nfw.tyku += 1, _nfx = 1, _nfy = true) : 2 == _nft.ctype && (_nfw.houg += 1, _nfw.tyku += 1, _nfw.kaih += 1, _nfx = 2, _nfy = true), 149 == _nft.ship_id || 591 == _nft.ship_id || 592 == _nft.ship_id ? (_nfw.houg += 2, _nfw.tyku += 2, _nfy = true) : 150 == _nft.ship_id ? (_nfw.houg += 1, _nfw.tyku += 1, _nfy = true) : 151 == _nft.ship_id ? (_nfw.houg += 1, _nfw.tyku += 1, _nfw.kaih += 1, _nfy = true) : 593 == _nft.ship_id ? (_nfw.houg += 1, _nfw.tyku += 3, _nfw.kaih += 2, _nfy = true) : 954 == _nft.ship_id ? (_nfw.houg += 2, _nfw.tyku += 2, _nfw.kaih += 1, _nfy = true) : 152 == _nft.ship_id ? (_nfw.houg += 2, _nfw.tyku += 1, _nfy = true) : 541 == _nft.ship_id ? (_nfw.houg += 1, _nfw.tyku += 2, _nfy = true) : 573 == _nft.ship_id && (_nfw.houg += 2, _nfw.tyku += 2, _nfw.kaih += 1, _nfy = true), 0 == _nfy) return _nfv;
            if (_nfv.add(_nfw), 0 == _nfx) return _nfv;
            var _nfz = _nft.get_each_level_nums(317),
                _ng0 = [];
            return _nfx > 0 && _nfz.forEach(function(_ng1, _ng2) {
                var _ng3 = null;
                for (var _ng4 = 1; _ng4 <= _nft.SLOT_LEVEL_MAX; _ng4++) null == _ng0[_ng4] && (_ng0[_ng4] = 0), _ng2 >= _ng4 && (_ng0[_ng4] += _ng1);
            }), 1 == _nfx ? _ng0[8] >= 1 && (_nfv.houm += 1) : 2 == _nfx && _nfz[10] >= 1 && (_nfv.houm += 1), _nfv;
        };
    },
    53122: function(_ng5, _ng6, _ng7) {
        'use strict';
        var _ng8 = null;
        var _ng9 = this && this.__importDefault || function(_nga) {
            var _ngb = null;
            return _nga && _nga.__esModule ? _nga : {
                'default': _nga
            };
        };
        defineModule(_ng6);
        Object.defineProperty(_ng6, '__esModule', {
            'value': true
        }), _ng6.getSlot318PersonalEffect = void 0;
        var _ngc = _ng7(74496),
            _ngd = _ng9(_ng7(18622));
        _ng6.getSlot318PersonalEffect = function(_nge) {
            var _ngf = null,
                _ngg = new _ngc.SlotItemEffectModel(),
                _ngh = new _ngc.SlotItemEffectModel(),
                _ngi = new _ngc.SlotItemEffectModel(),
                _ngj = new _ngc.SlotItemEffectModel();
            if (411 == _nge.ship_id || 412 == _nge.ship_id ? _ngh.houg += 1 : 82 == _nge.ship_id ? (_ngh.houg += 2, _ngh.tyku += 2, _ngh.kaih += 2, _ngj.tyku = 2, _ngj.kaih = 3, _ngj.houm = 1) : 553 == _nge.ship_id ? (_ngh.houg += 2, _ngh.tyku += 2, _ngh.kaih += 2, _ngh.houm += 3, _ngj.tyku = 2, _ngj.kaih = 3, _ngj.houm = 1, _ngi.kaih = 2, _ngi.souk = 1) : 88 == _nge.ship_id ? (_ngh.houg += 2, _ngh.tyku += 2, _ngh.kaih += 2, _ngj.tyku = 2, _ngj.kaih = 3, _ngj.houm = 1) : 541 == _nge.ship_id || 573 == _nge.ship_id ? (_ngh.houg += 3, _ngh.tyku += 2, _ngh.kaih += 1, _ngh.houm += 2, _ngi.houg = 2, _ngi.kaih = 2, _ngi.souk = 1, _ngi.houm = 1) : 554 == _nge.ship_id && (_ngh.houg += 3, _ngh.tyku += 2, _ngh.kaih += 2, _ngh.houm += 3, _ngj.tyku = 2, _ngj.kaih = 3, _ngj.houm = 1, _ngi.houg = 1, _ngi.kaih = 2, _ngi.souk = 1, _ngi.houm = 1), !_ngh.exists()) return _ngg;
            var _ngk = _nge.get_slotnums(318);
            if (_ngg = _ngh.multiply(_ngk), !_ngi.exists() && !_ngj.exists()) return _ngg;
            for (var _ngl = 0, _ngm = 0, _ngn = _nge.have_slot_ids(); _ngm < _ngn.length; _ngm++) {
                var _ngo = _ngn[_ngm],
                    _ngp = _ngd.default.model.slot.getMst(_ngo),
                    _ngq = _ngp.equipType;
                (12 == _ngq || 13 == _ngq) && _ngp.taiku >= 2 && (_ngl += _nge.get_slotnums(parseInt(_ngo)));
            }
            var _ngr = _nge.get_slotnums(290);
            return _ngj.exists() && _ngl > 0 && 0 == _ngr && _ngg.add(_ngj), _ngi.exists() && _ngr >= 1 && _ngg.add(_ngi), _ngg;
        };
    },
    51063: (_ngs, _ngt, _ngu) => {
        'use strict';
        var _ngv = null;
        defineModule(_ngt);
        Object.defineProperty(_ngt, '__esModule', {
            'value': true
        }), _ngt.getSlot319PersonalEffect = void 0;
        var _ngw = _ngu(74496);
        _ngt.getSlot319PersonalEffect = function(_ngx) {
            var _ngy = null,
                _ngz = new _ngw.SlotItemEffectModel(),
                _nh0 = new _ngw.SlotItemEffectModel();
            if (554 != _ngx.ship_id && 553 != _ngx.ship_id || (_nh0.houg = 7, _nh0.tyku = 3, _nh0.kaih = 2), !_nh0.exists()) return _ngz;
            var _nh1 = _ngx.get_slotnums(319);
            return _ngz = _nh0.multiply(_nh1);
        };
    },
    91491: (_nh2, _nh3, _nh4) => {
        'use strict';
        var _nh5 = null;
        defineModule(_nh3);
        Object.defineProperty(_nh3, '__esModule', {
            'value': true
        }), _nh3.getSlot320PersonalEffect = void 0;
        var _nh6 = _nh4(74496);
        _nh3.getSlot320PersonalEffect = function(_nh7) {
            var _nh8 = null,
                _nh9 = new _nh6.SlotItemEffectModel(),
                _nha = new _nh6.SlotItemEffectModel();
            if (553 == _nh7.ship_id) _nha.houg = 2;
            else {
                if (554 == _nh7.ship_id) _nha.houg = 4;
                else {
                    if (196 == _nh7.ship_id) _nha.houg = 3;
                    else {
                        if (197 == _nh7.ship_id) _nha.houg = 3;
                        else {
                            if (508 == _nh7.ship_id) _nha.houg = 4;
                            else {
                                if (509 != _nh7.ship_id) return _nh9;
                                _nha.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nhb = _nh7.get_slotnums(320);
            return _nh9 = _nha.multiply(_nhb);
        };
    },
    85495: (_nhc, _nhd, _nhe) => {
        'use strict';
        var _nhf = null;
        defineModule(_nhd);
        Object.defineProperty(_nhd, '__esModule', {
            'value': true
        }), _nhd.getSlot322PersonalEffect = void 0;
        var _nhg = _nhe(74496);
        _nhd.getSlot322PersonalEffect = function(_nhh) {
            var _nhi = null,
                _nhj = new _nhg.SlotItemEffectModel(),
                _nhk = new _nhg.SlotItemEffectModel();
            if (554 != _nhh.ship_id && 553 != _nhh.ship_id || (_nhk.houg = 5, _nhk.tyku = 2, _nhk.kaih = 2, _nhk.tais = 1), !_nhk.exists()) return _nhj;
            var _nhl = _nhh.get_slotnums(322);
            return _nhj = _nhk.multiply(_nhl);
        };
    },
    65365: (_nhm, _nhn, _nho) => {
        'use strict';
        var _nhp = null;
        defineModule(_nhn);
        Object.defineProperty(_nhn, '__esModule', {
            'value': true
        }), _nhn.getSlot323PersonalEffect = void 0;
        var _nhq = _nho(74496);
        _nhn.getSlot323PersonalEffect = function(_nhr) {
            var _nhs = null,
                _nht = new _nhq.SlotItemEffectModel(),
                _nhu = new _nhq.SlotItemEffectModel();
            if (554 != _nhr.ship_id && 553 != _nhr.ship_id || (_nhu.houg = 6, _nhu.tyku = 3, _nhu.kaih = 3, _nhu.tais = 2), !_nhu.exists()) return _nht;
            var _nhv = _nhr.get_slotnums(323);
            return _nht = _nhu.multiply(_nhv);
        };
    },
    98164: (_nhw, _nhx, _nhy) => {
        'use strict';
        var _nhz = null;
        defineModule(_nhx);
        Object.defineProperty(_nhx, '__esModule', {
            'value': true
        }), _nhx.getSlot324And325PersonalEffect = void 0;
        var _ni0 = _nhy(74496);
        _nhx.getSlot324And325PersonalEffect = function(_ni1) {
            var _ni2 = null,
                _ni3 = new _ni0.SlotItemEffectModel(),
                _ni4 = new _ni0.SlotItemEffectModel();
            if (554 == _ni1.ship_id || 646 == _ni1.ship_id ? (_ni4.houg = 2, _ni4.tais = 3, _ni4.kaih = 1) : 553 == _ni1.ship_id && (_ni4.houg = 1, _ni4.tais = 2, _ni4.kaih = 1), !_ni4.exists()) return _ni3;
            var _ni5 = _ni1.get_slotnums(324) + _ni1.get_slotnums(325);
            return _ni3 = _ni4.multiply(_ni5);
        };
    },
    38114: (_ni6, _ni7, _ni8) => {
        'use strict';
        var _ni9 = null;
        defineModule(_ni7);
        Object.defineProperty(_ni7, '__esModule', {
            'value': true
        }), _ni7.getSlot326PersonalEffect = void 0;
        var _nia = _ni8(74496);
        _ni7.getSlot326PersonalEffect = function(_nib) {
            var _nic = null,
                _nid = new _nia.SlotItemEffectModel(),
                _nie = new _nia.SlotItemEffectModel();
            if (646 == _nib.ship_id ? (_nie.houg = 3, _nie.tais = 5, _nie.kaih = 3) : 554 == _nib.ship_id ? (_nie.houg = 3, _nie.tais = 4, _nie.kaih = 2) : 553 == _nib.ship_id && (_nie.houg = 1, _nie.tais = 3, _nie.kaih = 1), !_nie.exists()) return _nid;
            var _nif = _nib.get_slotnums(326);
            return _nid = _nie.multiply(_nif);
        };
    },
    21003: (_nig, _nih, _nii) => {
        'use strict';
        var _nij = null;
        defineModule(_nih);
        Object.defineProperty(_nih, '__esModule', {
            'value': true
        }), _nih.getSlot327PersonalEffect = void 0;
        var _nik = _nii(74496);
        _nih.getSlot327PersonalEffect = function(_nil) {
            var _nim = null,
                _nin = new _nik.SlotItemEffectModel(),
                _nio = new _nik.SlotItemEffectModel();
            if (646 == _nil.ship_id ? (_nio.houg = 5, _nio.tais = 6, _nio.kaih = 4) : 554 == _nil.ship_id ? (_nio.houg = 4, _nio.tais = 5, _nio.kaih = 2) : 553 == _nil.ship_id && (_nio.houg = 2, _nio.tais = 4, _nio.kaih = 1), !_nio.exists()) return _nin;
            var _nip = _nil.get_slotnums(327);
            return _nin = _nio.multiply(_nip);
        };
    },
    77010: (_niq, _nir, _nis) => {
        'use strict';
        var _nit = null;
        defineModule(_nir);
        Object.defineProperty(_nir, '__esModule', {
            'value': true
        }), _nir.getSlot328PersonalEffect = void 0;
        var _niu = _nis(74496);
        _nir.getSlot328PersonalEffect = function(_niv) {
            var _niw = null,
                _nix = new _niu.SlotItemEffectModel(),
                _niy = new _niu.SlotItemEffectModel();
            if ('こんごう' == _niv.yomi ? (_niy.houg = 1, _niy.kaih = 1, 209 == _niv.ship_id || 149 == _niv.ship_id ? _niy.houg += 1 : 591 == _niv.ship_id && (_niy.houg += 2, _niy.raig += 1)) : 'ひえい' == _niv.yomi ? (_niy.houg = 1, _niy.kaih = 1, 210 == _niv.ship_id || 150 == _niv.ship_id ? _niy.houg += 1 : 592 == _niv.ship_id && (_niy.houg += 2, _niy.tyku += 1)) : 'はるな' == _niv.yomi ? (_niy.houg = 1, _niy.kaih = 1, 211 == _niv.ship_id || 151 == _niv.ship_id ? _niy.houg += 1 : 593 == _niv.ship_id ? (_niy.houg += 1, _niy.tyku += 2) : 954 == _niv.ship_id && (_niy.houg += 2, _niy.tyku += 1)) : 'きりしま' == _niv.yomi ? (_niy.houg = 1, _niy.kaih = 1, 212 != _niv.ship_id && 152 != _niv.ship_id || (_niy.houg += 1)) : ('ふそう' == _niv.yomi || 'やましろ' == _niv.yomi || 'いせ' == _niv.yomi || 'ひゅうが' == _niv.yomi) && (_niy.houg = 1), !_niy.exists()) return _nix;
            var _niz = _niv.get_slotnums(328);
            return _nix = _niy.multiply(_niz);
        };
    },
    39126: (_nj0, _nj1, _nj2) => {
        'use strict';
        var _nj3 = null;
        defineModule(_nj1);
        Object.defineProperty(_nj1, '__esModule', {
            'value': true
        }), _nj1.getSlot329PersonalEffect = void 0;
        var _nj4 = _nj2(74496);
        _nj1.getSlot329PersonalEffect = function(_nj5) {
            var _nj6 = null,
                _nj7 = new _nj4.SlotItemEffectModel(),
                _nj8 = new _nj4.SlotItemEffectModel();
            if ('こんごう' == _nj5.yomi ? (_nj8.houg = 1, _nj8.kaih = 1, 209 == _nj5.ship_id ? _nj8.houg += 1 : 149 == _nj5.ship_id ? (_nj8.houg += 2, _nj8.tyku += 1) : 591 == _nj5.ship_id && (_nj8.houg += 3, _nj8.tyku += 1, _nj8.raig += 2)) : 'ひえい' == _nj5.yomi ? (_nj8.houg = 1, _nj8.kaih = 1, 210 == _nj5.ship_id ? _nj8.houg += 1 : 150 == _nj5.ship_id ? (_nj8.houg += 2, _nj8.tyku += 1) : 592 == _nj5.ship_id && (_nj8.houg += 3, _nj8.tyku += 1, _nj8.raig += 2)) : 'はるな' == _nj5.yomi ? (_nj8.houg = 1, _nj8.kaih = 1, 211 == _nj5.ship_id ? _nj8.houg += 1 : 151 == _nj5.ship_id ? (_nj8.houg += 2, _nj8.tyku += 1) : 593 == _nj5.ship_id ? (_nj8.houg += 2, _nj8.tyku += 3, _nj8.raig += 1) : 954 == _nj5.ship_id && (_nj8.houg += 3, _nj8.tyku += 1, _nj8.raig += 2)) : 'きりしま' == _nj5.yomi ? (_nj8.houg = 1, _nj8.kaih = 1, 212 == _nj5.ship_id ? _nj8.houg += 1 : 152 == _nj5.ship_id && (_nj8.houg += 2, _nj8.tyku += 1)) : ('ふそう' == _nj5.yomi || 'やましろ' == _nj5.yomi || 'いせ' == _nj5.yomi || 'ひゅうが' == _nj5.yomi) && (_nj8.houg = 1), !_nj8.exists()) return _nj7;
            var _nj9 = _nj5.get_slotnums(329);
            return _nj7 = _nj8.multiply(_nj9);
        };
    },
    72176: (_nja, _njb, _njc) => {
        'use strict';
        var _njd = null;
        defineModule(_njb);
        Object.defineProperty(_njb, '__esModule', {
            'value': true
        }), _njb.getSlot335PersonalEffect = void 0;
        var _nje = _njc(74496);
        _njb.getSlot335PersonalEffect = function(_njf) {
            var _njg = null,
                _njh = new _nje.SlotItemEffectModel(),
                _nji = new _nje.SlotItemEffectModel();
            if (277 == _njf.ship_id || 278 == _njf.ship_id ? (_nji.tyku = 1, _nji.kaih = 1) : 594 != _njf.ship_id && 599 != _njf.ship_id && 610 != _njf.ship_id && 646 != _njf.ship_id && 698 != _njf.ship_id || (_nji.tyku = 2, _nji.kaih = 1), !_nji.exists()) return _njh;
            var _njj = _njf.get_slotnums(335);
            return _njh = _nji.multiply(_njj);
        };
    },
    33846: (_njk, _njl, _njm) => {
        'use strict';
        var _njn = null;
        defineModule(_njl);
        Object.defineProperty(_njl, '__esModule', {
            'value': true
        }), _njl.getSlot336PersonalEffect = void 0;
        var _njo = _njm(74496);
        _njl.getSlot336PersonalEffect = function(_njp) {
            var _njq = null,
                _njr = new _njo.SlotItemEffectModel(),
                _njs = new _njo.SlotItemEffectModel();
            if (277 == _njp.ship_id || 278 == _njp.ship_id ? (_njs.houg = 1, _njs.tyku = 1, _njs.kaih = 1) : 594 != _njp.ship_id && 599 != _njp.ship_id && 610 != _njp.ship_id && 646 != _njp.ship_id && 698 != _njp.ship_id || (_njs.houg = 1, _njs.tyku = 2, _njs.kaih = 1), !_njs.exists()) return _njr;
            var _njt = _njp.get_slotnums(336);
            return _njr = _njs.multiply(_njt);
        };
    },
    97157: (_nju, _njv, _njw) => {
        'use strict';
        var _njx = null;
        defineModule(_njv);
        Object.defineProperty(_njv, '__esModule', {
            'value': true
        }), _njv.getSlot337PersonalEffect = void 0;
        var _njy = _njw(74496);
        _njv.getSlot337PersonalEffect = function(_njz) {
            var _nk0 = null,
                _nk1 = new _njy.SlotItemEffectModel(),
                _nk2 = new _njy.SlotItemEffectModel();
            if (277 == _njz.ship_id || 278 == _njz.ship_id ? (_nk2.houg = 1, _nk2.tyku = 1, _nk2.kaih = 1) : 594 != _njz.ship_id && 599 != _njz.ship_id && 610 != _njz.ship_id && 646 != _njz.ship_id && 698 != _njz.ship_id || (_nk2.houg = 2, _nk2.tyku = 2, _nk2.kaih = 1), !_nk2.exists()) return _nk1;
            var _nk3 = _njz.get_slotnums(337);
            return _nk1 = _nk2.multiply(_nk3);
        };
    },
    63406: (_nk4, _nk5, _nk6) => {
        'use strict';
        var _nk7 = null;
        defineModule(_nk5);
        Object.defineProperty(_nk5, '__esModule', {
            'value': true
        }), _nk5.getSlot338PersonalEffect = void 0;
        var _nk8 = _nk6(74496);
        _nk5.getSlot338PersonalEffect = function(_nk9) {
            var _nka = null,
                _nkb = new _nk8.SlotItemEffectModel(),
                _nkc = new _nk8.SlotItemEffectModel();
            if (277 == _nk9.ship_id || 278 == _nk9.ship_id ? (_nkc.houg = 1, _nkc.tyku = 1, _nkc.kaih = 2) : 594 == _nk9.ship_id || 646 == _nk9.ship_id || 698 == _nk9.ship_id ? (_nkc.houg = 1, _nkc.tyku = 2, _nkc.kaih = 3) : 599 != _nk9.ship_id && 610 != _nk9.ship_id || (_nkc.houg = 4, _nkc.tyku = 3, _nkc.kaih = 4), !_nkc.exists()) return _nkb;
            var _nkd = _nk9.get_slotnums(338);
            return _nkb = _nkc.multiply(_nkd);
        };
    },
    66373: (_nke, _nkf, _nkg) => {
        'use strict';
        var _nkh = null;
        defineModule(_nkf);
        Object.defineProperty(_nkf, '__esModule', {
            'value': true
        }), _nkf.getSlot339PersonalEffect = void 0;
        var _nki = _nkg(74496);
        _nkf.getSlot339PersonalEffect = function(_nkj) {
            var _nkk = null,
                _nkl = new _nki.SlotItemEffectModel(),
                _nkm = new _nki.SlotItemEffectModel();
            if (277 == _nkj.ship_id || 278 == _nkj.ship_id ? (_nkm.houg = 1, _nkm.tyku = 2, _nkm.kaih = 2) : 594 == _nkj.ship_id || 646 == _nkj.ship_id || 698 == _nkj.ship_id ? (_nkm.houg = 1, _nkm.tyku = 3, _nkm.kaih = 4) : 599 != _nkj.ship_id && 610 != _nkj.ship_id || (_nkm.houg = 6, _nkm.tyku = 4, _nkm.kaih = 5), !_nkm.exists()) return _nkl;
            var _nkn = _nkj.get_slotnums(339);
            return _nkl = _nkm.multiply(_nkn);
        };
    },
    19707: (_nko, _nkp, _nkq) => {
        'use strict';
        var _nkr = null;
        defineModule(_nkp);
        Object.defineProperty(_nkp, '__esModule', {
            'value': true
        }), _nkp.getSlot340PersonalEffect = void 0;
        var _nks = _nkq(74496);
        _nkp.getSlot340PersonalEffect = function(_nkt) {
            var _nku = null,
                _nkv = new _nks.SlotItemEffectModel(),
                _nkw = new _nks.SlotItemEffectModel();
            if ('ガリバルディ' != _nkt.yomi && 'アブルッツィ' != _nkt.yomi || (_nkw.houg = 1, _nkw.tyku = 1, _nkw.kaih = 1), !_nkw.exists()) return _nkv;
            var _nkx = _nkt.get_slotnums(340);
            return _nkv = _nkw.multiply(_nkx);
        };
    },
    63978: (_nky, _nkz, _nl0) => {
        'use strict';
        var _nl1 = null;
        defineModule(_nkz);
        Object.defineProperty(_nkz, '__esModule', {
            'value': true
        }), _nkz.getSlot341PersonalEffect = void 0;
        var _nl2 = _nl0(74496);
        _nkz.getSlot341PersonalEffect = function(_nl3) {
            var _nl4 = null,
                _nl5 = new _nl2.SlotItemEffectModel(),
                _nl6 = new _nl2.SlotItemEffectModel();
            if ('ガリバルディ' == _nl3.yomi || 'アブルッツィ' == _nl3.yomi ? (_nl6.houg = 2, _nl6.tyku = 1, _nl6.kaih = 1) : 'ゴトランド' == _nl3.yomi && (_nl6.houg = 1, _nl6.tyku = 1, _nl6.kaih = 1), !_nl6.exists()) return _nl5;
            var _nl7 = _nl3.get_slotnums(341);
            return _nl5 = _nl6.multiply(_nl7);
        };
    },
    92382: (_nl8, _nl9, _nla) => {
        'use strict';
        var _nlb = null;
        defineModule(_nl9);
        Object.defineProperty(_nl9, '__esModule', {
            'value': true
        }), _nl9.getSlot342PersonalEffect = void 0;
        var _nlc = _nla(74496);
        _nl9.getSlot342PersonalEffect = function(_nld) {
            var _nle = null,
                _nlf = new _nlc.SlotItemEffectModel(),
                _nlg = new _nlc.SlotItemEffectModel();
            if (277 == _nld.ship_id || 278 == _nld.ship_id || 461 == _nld.ship_id || 466 == _nld.ship_id || 462 == _nld.ship_id || 467 == _nld.ship_id ? _nlg.houg = 1 : 594 == _nld.ship_id || 646 == _nld.ship_id || 698 == _nld.ship_id ? (_nlg.houg = 2, _nlg.tyku = 1, _nlg.kaih = 1) : 599 != _nld.ship_id && 610 != _nld.ship_id || (_nlg.houg = 3, _nlg.tyku = 2, _nlg.kaih = 2), !_nlg.exists()) return _nlf;
            var _nlh = _nld.get_slotnums(342);
            return _nlf = _nlg.multiply(_nlh);
        };
    },
    78415: (_nli, _nlj, _nlk) => {
        'use strict';
        var _nll = null;
        defineModule(_nlj);
        Object.defineProperty(_nlj, '__esModule', {
            'value': true
        }), _nlj.getSlot343PersonalEffect = void 0;
        var _nlm = _nlk(74496);
        _nlj.getSlot343PersonalEffect = function(_nln) {
            var _nlo = null,
                _nlp = new _nlm.SlotItemEffectModel(),
                _nlq = new _nlm.SlotItemEffectModel();
            if (277 == _nln.ship_id || 278 == _nln.ship_id ? _nlq.houg = 2 : 461 == _nln.ship_id || 466 == _nln.ship_id || 462 == _nln.ship_id || 467 == _nln.ship_id ? _nlq.houg = 1 : 594 == _nln.ship_id || 646 == _nln.ship_id || 698 == _nln.ship_id ? (_nlq.houg = 3, _nlq.tyku = 2, _nlq.kaih = 1) : 599 != _nln.ship_id && 610 != _nln.ship_id || (_nlq.houg = 5, _nlq.tyku = 3, _nlq.kaih = 3), !_nlq.exists()) return _nlp;
            var _nlr = _nln.get_slotnums(343);
            return _nlp = _nlq.multiply(_nlr);
        };
    },
    23090: (_nls, _nlt, _nlu) => {
        'use strict';
        var _nlv = null;
        defineModule(_nlt);
        Object.defineProperty(_nlt, '__esModule', {
            'value': true
        }), _nlt.getSlot344PersonalEffect = void 0;
        var _nlw = _nlu(74496);
        _nlt.getSlot344PersonalEffect = function(_nlx) {
            var _nly = null,
                _nlz = new _nlw.SlotItemEffectModel(),
                _nm0 = new _nlw.SlotItemEffectModel();
            if (599 == _nlx.ship_id || 610 == _nlx.ship_id ? _nm0.houg = 3 : 555 == _nlx.ship_id || 560 == _nlx.ship_id ? (_nm0.houg = 2, _nm0.tais = 2) : 318 == _nlx.ship_id ? (_nm0.houg = 4, _nm0.tais = 1) : 282 == _nlx.ship_id ? (_nm0.houg = 2, _nm0.tais = 1) : 888 == _nlx.ship_id ? (_nm0.houg = 4, _nm0.tais = 2) : 883 == _nlx.ship_id && (_nm0.houg = 5, _nm0.tais = 2), !_nm0.exists()) return _nlz;
            var _nm1 = _nlx.get_slotnums(344);
            return _nlz = _nm0.multiply(_nm1);
        };
    },
    18776: (_nm2, _nm3, _nm4) => {
        'use strict';
        var _nm5 = null;
        defineModule(_nm3);
        Object.defineProperty(_nm3, '__esModule', {
            'value': true
        }), _nm3.getSlot345PersonalEffect = void 0;
        var _nm6 = _nm4(74496);
        _nm3.getSlot345PersonalEffect = function(_nm7) {
            var _nm8 = null,
                _nm9 = new _nm6.SlotItemEffectModel(),
                _nma = new _nm6.SlotItemEffectModel();
            if (599 == _nm7.ship_id || 610 == _nm7.ship_id ? (_nma.houg = 3, _nma.kaih = 1) : 555 == _nm7.ship_id || 560 == _nm7.ship_id ? (_nma.houg = 3, _nma.tais = 2, _nma.kaih = 2) : 318 == _nm7.ship_id ? (_nma.houg = 5, _nma.tais = 1, _nma.kaih = 2) : 282 == _nm7.ship_id ? (_nma.houg = 3, _nma.tais = 1, _nma.kaih = 1) : 888 == _nm7.ship_id ? (_nma.houg = 4, _nma.tais = 2, _nma.kaih = 2) : 883 == _nm7.ship_id && (_nma.houg = 5, _nma.tais = 2, _nma.kaih = 3), !_nma.exists()) return _nm9;
            var _nmb = _nm7.get_slotnums(345);
            return _nm9 = _nma.multiply(_nmb);
        };
    },
    89058: (_nmc, _nmd, _nme) => {
        'use strict';
        var _nmf = null;
        defineModule(_nmd);
        Object.defineProperty(_nmd, '__esModule', {
            'value': true
        }), _nmd.getSlot346PersonalEffect = void 0;
        var _nmg = _nme(74496);
        _nmd.getSlot346PersonalEffect = function(_nmh) {
            var _nmi = null,
                _nmj = new _nmg.SlotItemEffectModel();
            return 'やましおまる' == _nmh.yomi && (_nmj.kaih += 1, _nmj.tais += 1), _nmj;
        };
    },
    84372: (_nmk, _nml, _nmm) => {
        'use strict';
        var _nmn = null;
        defineModule(_nml);
        Object.defineProperty(_nml, '__esModule', {
            'value': true
        }), _nml.getSlot347PersonalEffect = void 0;
        var _nmo = _nmm(74496);
        _nml.getSlot347PersonalEffect = function(_nmp) {
            var _nmq = null,
                _nmr = new _nmo.SlotItemEffectModel();
            return 'やましおまる' == _nmp.yomi && (_nmr.kaih += 2, _nmr.tais += 2), _nmr;
        };
    },
    39656: (_nms, _nmt, _nmu) => {
        'use strict';
        var _nmv = null;
        defineModule(_nmt);
        Object.defineProperty(_nmt, '__esModule', {
            'value': true
        }), _nmt.getSlot356_357PersonalEffect = void 0;
        var _nmw = _nmu(74496);
        _nmt.getSlot356_357PersonalEffect = function(_nmx) {
            var _nmy = null,
                _nmz = new _nmw.SlotItemEffectModel(),
                _nn0 = new _nmw.SlotItemEffectModel();
            if (95 == _nmx.ctype ? _nn0.houg = 2 : 9 == _nmx.ctype && (_nn0.houg = 1), !_nn0.exists()) return _nmz;
            var _nn1 = _nmx.get_slotnums(356) + _nmx.get_slotnums(357);
            return _nmz = _nn0.multiply(_nn1);
        };
    },
    66039: (_nn2, _nn3, _nn4) => {
        'use strict';
        var _nn5 = null;
        defineModule(_nn3);
        Object.defineProperty(_nn3, '__esModule', {
            'value': true
        }), _nn3.getSlot358PersonalEffect = void 0;
        var _nn6 = _nn4(74496);
        _nn3.getSlot358PersonalEffect = function(_nn7) {
            var _nn8 = null,
                _nn9 = new _nn6.SlotItemEffectModel(),
                _nna = new _nn6.SlotItemEffectModel();
            if ('アメリカ' != _nn7.getCountryName() && 67 != _nn7.ctype && 78 != _nn7.ctype && 82 != _nn7.ctype && 88 != _nn7.ctype && 108 != _nn7.ctype && 112 != _nn7.ctype) return _nn9;
            _nna.houg += 1, _nna.kaih += 1, _nna.tyku += 1, 95 == _nn7.ctype && (_nna.houg += 1, _nna.kaih += 2, _nna.tyku += 2);
            var _nnb = _nn7.get_slotnums(358);
            return _nn9 = _nna.multiply(_nnb);
        };
    },
    64679: (_nnc, _nnd, _nne) => {
        'use strict';
        var _nnf = null;
        defineModule(_nnd);
        Object.defineProperty(_nnd, '__esModule', {
            'value': true
        }), _nnd.getSlot359PersonalEffect = void 0;
        var _nng = _nne(74496);
        _nnd.getSlot359PersonalEffect = function(_nnh) {
            var _nni = null,
                _nnj = new _nng.SlotItemEffectModel(),
                _nnk = new _nng.SlotItemEffectModel();
            if ('パース' == _nnh.yomi ? (_nnk.houg = 2, _nnk.tyku = 2, _nnk.kaih = 1) : 'ゆうばり' == _nnh.yomi && (_nnk.houg = 1, _nnk.tyku = 1, _nnk.kaih = 1), 622 != _nnh.ship_id && 623 != _nnh.ship_id && 624 != _nnh.ship_id || (_nnk.houg += 1, _nnk.tyku += 1), !_nnk.exists()) return _nnj;
            var _nnl = _nnh.get_slotnums(359);
            return _nnj = _nnk.multiply(_nnl);
        };
    },
    69954: (_nnm, _nnn, _nno) => {
        'use strict';
        var _nnp = null;
        defineModule(_nnn);
        Object.defineProperty(_nnn, '__esModule', {
            'value': true
        }), _nnn.getSlot35PersonalEffect = void 0;
        var _nnq = _nno(74496);
        _nnn.getSlot35PersonalEffect = function(_nnr) {
            var _nns = null,
                _nnt = new _nnq.SlotItemEffectModel(),
                _nnu = new _nnq.SlotItemEffectModel();
            return 149 == _nnr.ship_id || 591 == _nnr.ship_id || 592 == _nnr.ship_id ? (_nnu.houg += 1, _nnu.tyku += 1) : 150 == _nnr.ship_id ? _nnu.tyku += 1 : 151 == _nnr.ship_id || 593 == _nnr.ship_id || 954 == _nnr.ship_id ? (_nnu.tyku += 1, _nnu.kaih += 1) : 152 == _nnr.ship_id && (_nnu.houg += 1), _nnu.exists() ? _nnt = _nnu.multiply(1) : _nnt;
        };
    },
    95953: (_nnv, _nnw, _nnx) => {
        'use strict';
        var _nny = null;
        defineModule(_nnw);
        Object.defineProperty(_nnw, '__esModule', {
            'value': true
        }), _nnw.getSlot360_361PersonalEffect = void 0;
        var _nnz = _nnx(74496);
        _nnw.getSlot360_361PersonalEffect = function(_no0) {
            var _no1 = null,
                _no2 = new _nnz.SlotItemEffectModel(),
                _no3 = new _nnz.SlotItemEffectModel();
            if ('デ・ロイテル' == _no0.yomi ? (_no3.houg = 2, _no3.tyku = 2, _no3.kaih = 1) : 'ゴトランド' == _no0.yomi && (_no3.houg = 2, _no3.tyku = 1, _no3.kaih = 1), 41 == _no0.ctype && (_no3.houg = 1, _no3.tyku = 1), !_no3.exists()) return _no2;
            var _no4 = _no0.get_slotnums(360) + _no0.get_slotnums(361);
            return _no2 = _no3.multiply(_no4);
        };
    },
    86384: (_no5, _no6, _no7) => {
        'use strict';
        var _no8 = null;
        defineModule(_no6);
        Object.defineProperty(_no6, '__esModule', {
            'value': true
        }), _no6.getSlot362_363PersonalEffect = void 0;
        var _no9 = _no7(74496);
        _no6.getSlot362_363PersonalEffect = function(_noa) {
            var _nob = null,
                _noc = new _no9.SlotItemEffectModel(),
                _nod = new _no9.SlotItemEffectModel(),
                _noe = false;
            if (99 == _noa.ctype ? (_nod.houg = 1, _nod.tyku = 2, _nod.kaih = 1, _noe = true) : 34 == _noa.ctype || 21 == _noa.ctype ? (_nod.houg = -3, _nod.tyku = -3, _nod.kaih = -8, _noe = true) : 4 == _noa.ctype || 20 == _noa.ctype || 16 == _noa.ctype ? (_nod.houg = -3, _nod.tyku = -2, _nod.kaih = -6, _noe = true) : 89 == _noa.ctype || 56 == _noa.ctype ? (_nod.houg = -2, _nod.tyku = -1, _nod.kaih = -4, _noe = true) : 52 != _noa.ctype && 41 != _noa.ctype && 98 != _noa.ctype || (_nod.tyku = -1, _nod.kaih = -2, _noe = true), 'アメリカ' == _noa.getCountryName() && (_nod.tyku += 1, _nod.kaih += 1, _noe = true), 0 == _noe) return _noc;
            var _nof = _noa.get_slotnums(362) + _noa.get_slotnums(363);
            return _noc = _nod.multiply(_nof);
        };
    },
    65345: (_nog, _noh, _noi) => {
        'use strict';
        var _noj = null;
        defineModule(_noh);
        Object.defineProperty(_noh, '__esModule', {
            'value': true
        }), _noh.getSlot364PersonalEffect = void 0;
        var _nok = _noi(74496);
        _noh.getSlot364PersonalEffect = function(_nol) {
            var _nom = null;
            new _nok.SlotItemEffectModel();
            var _non = new _nok.SlotItemEffectModel();
            623 == _nol.ship_id || 586 == _nol.ship_id || 119 == _nol.ship_id || 118 == _nol.ship_id || 657 == _nol.ship_id || 506 == _nol.ship_id || 668 == _nol.ship_id || 507 == _nol.ship_id ? (_non.raig = 1, _non.kaih = -2, 119 == _nol.ship_id ? _non.raig += 1 : 507 == _nol.ship_id ? _non.raig += 2 : 623 == _nol.ship_id && (_non.houg += 1, _non.raig += 3)) : (_non.houg = -1, _non.kaih = -7);
            var _noo = _nol.get_slotnums(364);
            return _non.multiply(_noo);
        };
    },
    46514: (_nop, _noq, _nor) => {
        'use strict';
        var _nos = null;
        defineModule(_noq);
        Object.defineProperty(_noq, '__esModule', {
            'value': true
        }), _noq.getSlot365PersonalEffect = void 0;
        var _not = _nor(74496);
        _noq.getSlot365PersonalEffect = function(_nou) {
            var _nov = null,
                _now = new _not.SlotItemEffectModel(),
                _nox = new _not.SlotItemEffectModel(),
                _noy = false;
            return 37 != _nou.ctype && 19 != _nou.ctype && 2 != _nou.ctype && 26 != _nou.ctype && 6 != _nou.ctype || (_nox.houg += 1, _noy = true), 136 != _nou.ship_id && 148 != _nou.ship_id && 546 != _nou.ship_id && 541 != _nou.ship_id && 573 != _nou.ship_id && 911 != _nou.ship_id && 916 != _nou.ship_id && 593 != _nou.ship_id || (_nox.houg += 1, _noy = true), 591 != _nou.ship_id && 592 != _nou.ship_id && 954 != _nou.ship_id || (_nox.houg += 2, _noy = true), 0 == _noy ? _now : _now = _nox.multiply(1);
        };
    },
    81976: (_noz, _np0, _np1) => {
        'use strict';
        var _np2 = null;
        defineModule(_np0);
        Object.defineProperty(_np0, '__esModule', {
            'value': true
        }), _np0.getSlot367PersonalEffect = void 0;
        var _np3 = _np1(74496);
        _np0.getSlot367PersonalEffect = function(_np4) {
            var _np5 = null,
                _np6 = new _np3.SlotItemEffectModel(),
                _np7 = new _np3.SlotItemEffectModel(),
                _np8 = false;
            if ('ゴトランド' == _np4.yomi && (_np7.houg += 2, _np7.tais += 1, _np7.kaih += 1, _np7.saku += 1, _np8 = true), 70 == _np4.ctype ? (_np7.houg += 1, _np7.tais += 1, _np7.kaih += 1, _np7.saku += 1, _np8 = true) : 72 == _np4.ctype || 62 == _np4.ctype ? (_np7.houg += 1, _np7.kaih += 1, _np7.saku += 1, _np8 = true) : 67 != _np4.ctype && 78 != _np4.ctype && 82 != _np4.ctype && 88 != _np4.ctype && 108 != _np4.ctype && 112 != _np4.ctype || (_np7.houg += 2, _np7.kaih += 2, _np7.saku += 2, _np8 = true), 0 == _np8) return _np6;
            var _np9 = _np4.get_slotnums(367);
            return _np6 = _np7.multiply(_np9);
        };
    },
    89331: (_npa, _npb, _npc) => {
        'use strict';
        var _npd = null;
        defineModule(_npb);
        Object.defineProperty(_npb, '__esModule', {
            'value': true
        }), _npb.getSlot368PersonalEffect = void 0;
        var _npe = _npc(74496);
        _npb.getSlot368PersonalEffect = function(_npf) {
            var _npg = null,
                _nph = new _npe.SlotItemEffectModel(),
                _npi = new _npe.SlotItemEffectModel(),
                _npj = false;
            if ('ゴトランド' == _npf.yomi && (_npi.houg = 4, _npi.tais = 3, _npi.kaih = 2, _npi.saku = 3, _npj = true, 630 == _npf.ship_id && (_nph.houg += 2, _nph.raig += 2, _nph.kaih += 1, _nph.saku += 1)), 70 == _npf.ctype ? (_npi.houg = 2, _npi.tais = 3, _npi.kaih = 1, _npi.saku = 2, _npj = true) : 72 == _npf.ctype || 62 == _npf.ctype ? (_npi.houg += 1, _npi.tais += 2, _npi.kaih += 1, _npi.saku += 2, _npj = true) : 67 != _npf.ctype && 78 != _npf.ctype && 82 != _npf.ctype && 88 != _npf.ctype && 108 != _npf.ctype && 112 != _npf.ctype || (_npi.houg += 2, _npi.tais += 2, _npi.kaih += 2, _npi.saku += 2, _npj = true), 0 == _npj) return _nph;
            var _npk = _npf.get_slotnums(368);
            return _nph.add(_npi.multiply(_npk)), _nph;
        };
    },
    73973: (_npl, _npm, _npn) => {
        'use strict';
        var _npo = null;
        defineModule(_npm);
        Object.defineProperty(_npm, '__esModule', {
            'value': true
        }), _npm.getSlot369PersonalEffect = void 0;
        var _npp = _npn(74496);
        _npm.getSlot369PersonalEffect = function(_npq) {
            var _npr = null,
                _nps = new _npp.SlotItemEffectModel(),
                _npt = new _npp.SlotItemEffectModel(),
                _npu = false;
            if ('ゴトランド' == _npq.yomi && (_npt.houg = 5, _npt.tais = 4, _npt.kaih = 4, _npt.saku = 3, _npu = true, 630 == _npq.ship_id && (_nps.houg += 3, _nps.raig += 3, _nps.kaih += 2, _nps.saku += 2)), 70 == _npq.ctype ? (_npt.houg += 3, _npt.tais += 3, _npt.kaih += 2, _npt.saku += 3, _npu = true) : 72 == _npq.ctype || 62 == _npq.ctype ? (_npt.houg += 2, _npt.tais += 2, _npt.kaih += 1, _npt.saku += 2, _npu = true) : 67 != _npq.ctype && 78 != _npq.ctype && 82 != _npq.ctype && 88 != _npq.ctype && 108 != _npq.ctype && 112 != _npq.ctype || (_npt.houg += 2, _npt.tais += 2, _npt.kaih += 2, _npt.saku += 2, _npu = true), 0 == _npu) return _nps;
            var _npv = _npq.get_slotnums(369);
            return _nps.add(_npt.multiply(_npv)), _nps;
        };
    },
    21178: (_npw, _npx, _npy) => {
        'use strict';
        var _npz = null;
        defineModule(_npx);
        Object.defineProperty(_npx, '__esModule', {
            'value': true
        }), _npx.getSlot370PersonalEffect = void 0;
        var _nq0 = _npy(74496);
        _npx.getSlot370PersonalEffect = function(_nq1) {
            var _nq2 = null,
                _nq3 = new _nq0.SlotItemEffectModel(),
                _nq4 = new _nq0.SlotItemEffectModel(),
                _nq5 = false;
            if ('ゴトランド' == _nq1.yomi && (_nq4.houg = 1, _nq4.tais = 3, _nq4.kaih = 1, _nq4.saku = 2, _nq5 = true), 70 == _nq1.ctype ? (_nq4.houg += 1, _nq4.tais += 3, _nq4.kaih += 1, _nq4.saku += 1, _nq5 = true) : 72 == _nq1.ctype || 62 == _nq1.ctype ? (_nq4.houg += 1, _nq4.tais += 2, _nq4.kaih += 1, _nq4.saku += 1, _nq5 = true) : 67 != _nq1.ctype && 78 != _nq1.ctype && 82 != _nq1.ctype && 88 != _nq1.ctype && 108 != _nq1.ctype && 112 != _nq1.ctype || (_nq4.houg += 2, _nq4.tais += 3, _nq4.kaih += 2, _nq4.saku += 2, _nq5 = true, 'ウォースパイト' == _nq1.yomi && (_nq3.houg += 4, _nq3.kaih += 1, _nq3.saku += 1)), 0 == _nq5) return _nq3;
            var _nq6 = _nq1.get_slotnums(370);
            return _nq3.add(_nq4.multiply(_nq6)), _nq3;
        };
    },
    5079: (_nq7, _nq8, _nq9) => {
        'use strict';
        var _nqa = null;
        defineModule(_nq8);
        Object.defineProperty(_nq8, '__esModule', {
            'value': true
        }), _nq8.getSlot371PersonalEffect = void 0;
        var _nqb = _nq9(74496);
        _nq8.getSlot371PersonalEffect = function(_nqc) {
            var _nqd = null,
                _nqe = new _nqb.SlotItemEffectModel(),
                _nqf = new _nqb.SlotItemEffectModel(),
                _nqg = false;
            if ('ゴトランド' == _nqc.yomi && (_nqf.houg = 4, _nqf.tais = 2, _nqf.kaih = 3, _nqf.saku = 6, _nqg = true, 630 == _nqc.ship_id && (_nqe.houg += 2, _nqe.kaih += 2, _nqe.saku += 3)), 70 == _nqc.ctype ? (_nqf.houg += 2, _nqf.tais += 1, _nqf.kaih += 2, _nqf.saku += 4, _nqg = true) : 79 == _nqc.ctype ? (_nqf.houg += 2, _nqf.kaih += 1, _nqf.saku += 3, _nqg = true) : 67 != _nqc.ctype && 78 != _nqc.ctype && 82 != _nqc.ctype && 88 != _nqc.ctype && 108 != _nqc.ctype && 112 != _nqc.ctype || (_nqf.houg += 3, _nqf.tais += 1, _nqf.kaih += 2, _nqf.saku += 3, _nqg = true, 88 == _nqc.ctype && (_nqe.houg += 3, _nqe.kaih += 2, _nqe.saku += 2)), 0 == _nqg) return _nqe;
            var _nqh = _nqc.get_slotnums(371);
            return _nqe.add(_nqf.multiply(_nqh)), _nqe;
        };
    },
    95014: (_nqi, _nqj, _nqk) => {
        'use strict';
        var _nql = null;
        defineModule(_nqj);
        Object.defineProperty(_nqj, '__esModule', {
            'value': true
        }), _nqj.getSlot372PersonalEffect = void 0;
        var _nqm = _nqk(74496);
        _nqj.getSlot372PersonalEffect = function(_nqn) {
            var _nqo = null,
                _nqp = new _nqm.SlotItemEffectModel(),
                _nqq = false,
                _nqr = new _nqm.SlotItemEffectModel();
            if ('しょうかく' == _nqn.yomi || 'ずいかく' == _nqn.yomi || 'たいほう' == _nqn.yomi ? (_nqr.houg += 1, _nqq = true, _nqp.raig += 1) : 'じゅんよう' != _nqn.yomi && 'ひよう' != _nqn.yomi || (_nqr.houg += 1, _nqq = true), 108 == _nqn.ship_id || 109 == _nqn.ship_id || 291 == _nqn.ship_id || 292 == _nqn.ship_id || 296 == _nqn.ship_id || 297 == _nqn.ship_id ? (_nqr.houg += 1, _nqq = true) : 116 == _nqn.ship_id || 74 == _nqn.ship_id || 117 == _nqn.ship_id || 282 == _nqn.ship_id || 185 == _nqn.ship_id ? (_nqr.tais += 1, _nqq = true) : 560 == _nqn.ship_id || 555 == _nqn.ship_id || 318 == _nqn.ship_id ? (_nqr.tais += 1, _nqq = true, _nqp.raig += 1) : 508 == _nqn.ship_id || 509 == _nqn.ship_id ? (_nqr.houg += 1, _nqq = true) : 883 != _nqn.ship_id && 888 != _nqn.ship_id || (_nqr.houg += 2, _nqr.tais += 1, _nqq = true, _nqp.raig += 2), 0 == _nqq) return _nqp;
            var _nqs = _nqn.get_slotnums(372);
            return _nqp.add(_nqr.multiply(_nqs)), _nqp;
        };
    },
    53099: (_nqt, _nqu, _nqv) => {
        'use strict';
        var _nqw = null;
        defineModule(_nqu);
        Object.defineProperty(_nqu, '__esModule', {
            'value': true
        }), _nqu.getSlot373PersonalEffect = void 0;
        var _nqx = _nqv(74496);
        _nqu.getSlot373PersonalEffect = function(_nqy) {
            var _nqz = null,
                _nr0 = new _nqx.SlotItemEffectModel(),
                _nr1 = new _nqx.SlotItemEffectModel(),
                _nr2 = false;
            if ('しょうかく' == _nqy.yomi ? (_nr1.houg += 2, _nr2 = true, _nr0.raig += 2, _nr0.kaih += 2) : 'ずいかく' == _nqy.yomi ? (_nr1.houg += 1, _nr2 = true, _nr0.raig += 2, _nr0.kaih += 3) : 'たいほう' == _nqy.yomi ? (_nr1.houg += 1, _nr2 = true, _nr0.raig += 2, _nr0.kaih += 2) : 'じゅんよう' != _nqy.yomi && 'ひよう' != _nqy.yomi || (_nr1.houg += 1, _nr2 = true, _nr0.raig += 1, _nr0.kaih += 1), 108 == _nqy.ship_id || 109 == _nqy.ship_id ? (_nr1.houg += 1, _nr2 = true) : 291 == _nqy.ship_id || 292 == _nqy.ship_id ? (_nr1.houg += 1, _nr2 = true, _nr0.raig += 1) : 296 == _nqy.ship_id || 297 == _nqy.ship_id ? (_nr1.houg += 1, _nr2 = true, _nr0.raig += 1, _nr0.kaih += 1) : 116 == _nqy.ship_id || 74 == _nqy.ship_id ? (_nr1.tais += 1, _nr2 = true) : 117 == _nqy.ship_id || 282 == _nqy.ship_id || 185 == _nqy.ship_id ? (_nr1.houg += 1, _nr1.tais += 1, _nr2 = true, _nr0.raig += 1) : 560 == _nqy.ship_id || 555 == _nqy.ship_id || 318 == _nqy.ship_id ? (_nr1.houg += 1, _nr1.tais += 2, _nr2 = true, _nr0.raig += 1, _nr0.kaih += 1) : 508 == _nqy.ship_id || 509 == _nqy.ship_id ? (_nr1.houg += 1, _nr2 = true, _nr0.raig += 2, _nr0.kaih += 2) : 888 == _nqy.ship_id ? (_nr1.houg += 2, _nr1.tais += 2, _nr2 = true, _nr0.raig += 2, _nr0.kaih += 2) : 883 == _nqy.ship_id && (_nr1.houg += 1, _nr1.tais += 2, _nr2 = true, _nr0.raig += 3, _nr0.kaih += 4), 0 == _nr2) return _nr0;
            var _nr3 = _nqy.get_slotnums(373);
            return _nr0.add(_nr1.multiply(_nr3)), _nr0;
        };
    },
    76201: (_nr4, _nr5, _nr6) => {
        'use strict';
        var _nr7 = null;
        defineModule(_nr5);
        Object.defineProperty(_nr5, '__esModule', {
            'value': true
        }), _nr5.getSlot374PersonalEffect = void 0;
        var _nr8 = _nr6(74496);
        _nr5.getSlot374PersonalEffect = function(_nr9) {
            var _nra = null,
                _nrb = new _nr8.SlotItemEffectModel(),
                _nrc = new _nr8.SlotItemEffectModel(),
                _nrd = false;
            if ('しょうかく' == _nr9.yomi ? (_nrc.houg += 3, _nrd = true, _nrb.raig += 3, _nrb.kaih += 3) : 'ずいかく' == _nr9.yomi ? (_nrc.houg += 2, _nrd = true, _nrb.raig += 3, _nrb.kaih += 4) : 'たいほう' == _nr9.yomi ? (_nrc.houg += 2, _nrd = true, _nrb.raig += 3, _nrb.kaih += 2) : 'じゅんよう' != _nr9.yomi && 'ひよう' != _nr9.yomi || (_nrc.houg += 1, _nrd = true, _nrb.raig += 2, _nrb.kaih += 2), 108 == _nr9.ship_id || 109 == _nr9.ship_id ? (_nrc.houg += 1, _nrd = true, _nrb.raig += 1) : 291 == _nr9.ship_id || 292 == _nr9.ship_id ? (_nrc.houg += 1, _nrc.tais += 1, _nrd = true, _nrb.raig += 1) : 296 == _nr9.ship_id || 297 == _nr9.ship_id ? (_nrc.houg += 1, _nrc.tais += 1, _nrd = true, _nrb.raig += 1, _nrb.kaih += 1) : 116 == _nr9.ship_id || 74 == _nr9.ship_id ? (_nrc.houg += 1, _nrc.tais += 1, _nrd = true) : 117 == _nr9.ship_id || 282 == _nr9.ship_id || 185 == _nr9.ship_id ? (_nrc.houg += 1, _nrc.tais += 2, _nrd = true, _nrb.raig += 1, _nrb.kaih += 1) : 560 == _nr9.ship_id || 555 == _nr9.ship_id || 318 == _nr9.ship_id ? (_nrc.houg += 1, _nrc.tais += 3, _nrd = true, _nrb.raig += 1, _nrb.kaih += 2) : 508 == _nr9.ship_id || 509 == _nr9.ship_id ? (_nrc.houg += 1, _nrc.tais += 2, _nrd = true, _nrb.raig += 2, _nrb.kaih += 3) : 888 == _nr9.ship_id ? (_nrc.houg += 3, _nrc.tais += 3, _nrd = true, _nrb.raig += 2, _nrb.kaih += 3) : 883 == _nr9.ship_id && (_nrc.houg += 2, _nrc.tais += 3, _nrd = true, _nrb.raig += 3, _nrb.kaih += 5), 0 == _nrd) return _nrb;
            var _nre = _nr9.get_slotnums(374);
            return _nrb.add(_nrc.multiply(_nre)), _nrb;
        };
    },
    24931: (_nrf, _nrg, _nrh) => {
        'use strict';
        var _nri = null;
        defineModule(_nrg);
        Object.defineProperty(_nrg, '__esModule', {
            'value': true
        }), _nrg.getSlot375PersonalEffect = void 0;
        var _nrj = _nrh(74496);
        _nrg.getSlot375PersonalEffect = function(_nrk) {
            var _nrl = null,
                _nrm = new _nrj.SlotItemEffectModel(),
                _nrn = new _nrj.SlotItemEffectModel(),
                _nro = false;
            if (69 != _nrk.ctype && 83 != _nrk.ctype && 84 != _nrk.ctype && 105 != _nrk.ctype && 116 != _nrk.ctype && 118 != _nrk.ctype || (_nrn.tyku += 3, _nrn.houg += 3, _nrn.kaih += 3, _nrn.tais += 3, _nro = true), 'かが' == _nrk.yomi && (_nrn.tyku += 1, _nrn.houg += 1, _nrn.kaih += 1, _nrn.tais += 1, _nro = true), 0 == _nro) return _nrm;
            var _nrp = _nrk.get_slotnums(375);
            return _nrm.add(_nrn.multiply(_nrp)), _nrm;
        };
    },
    60978: (_nrq, _nrr, _nrs) => {
        'use strict';
        var _nrt = null;
        defineModule(_nrr);
        Object.defineProperty(_nrr, '__esModule', {
            'value': true
        }), _nrr.getSlot376PersonalEffect = void 0;
        var _nru = _nrs(74496);
        _nrr.getSlot376PersonalEffect = function(_nrv) {
            var _nrw = null,
                _nrx = new _nru.SlotItemEffectModel(),
                _nry = new _nru.SlotItemEffectModel(),
                _nrz = false;
            if ('アメリカ' == _nrv.getCountryName() ? (_nry.houg += 2, _nry.raig += 4, _nrz = true) : 67 == _nrv.ctype || 78 == _nrv.ctype || 82 == _nrv.ctype || 88 == _nrv.ctype || 108 == _nrv.ctype || 112 == _nrv.ctype ? (_nry.houg += 1, _nry.raig += 2, _nrz = true) : 96 == _nrv.ctype && (_nry.houg += 1, _nry.raig += 1, _nrz = true), 0 == _nrz) return _nrx;
            var _ns0 = _nrv.get_slotnums(376);
            return _nrx.add(_nry.multiply(_ns0)), _nrx;
        };
    },
    74312: (_ns1, _ns2, _ns3) => {
        'use strict';
        var _ns4 = null;
        defineModule(_ns2);
        Object.defineProperty(_ns2, '__esModule', {
            'value': true
        }), _ns2.getSlot377PersonalEffect = void 0;
        var _ns5 = _ns3(74496);
        _ns2.getSlot377PersonalEffect = function(_ns6) {
            var _ns7 = null,
                _ns8 = new _ns5.SlotItemEffectModel();
            return 'アメリカ' == _ns6.getCountryName() ? (_ns8.tais += 2, _ns8.kaih += 1, 629 == _ns6.ship_id && (_ns8.tais += 1, _ns8.kaih += 2)) : 67 != _ns6.ctype && 78 != _ns6.ctype && 82 != _ns6.ctype && 88 != _ns6.ctype && 108 != _ns6.ctype && 112 != _ns6.ctype && 96 != _ns6.ctype || (_ns8.tais += 1, _ns8.kaih += 1), 651 != _ns6.ship_id && 656 != _ns6.ship_id || (_ns8.tais += 1, _ns8.kaih += 2), _ns8;
        };
    },
    54350: (_ns9, _nsa, _nsb) => {
        'use strict';
        var _nsc = null;
        defineModule(_nsa);
        Object.defineProperty(_nsa, '__esModule', {
            'value': true
        }), _nsa.getSlot378PersonalEffect = void 0;
        var _nsd = _nsb(74496);
        _nsa.getSlot378PersonalEffect = function(_nse) {
            var _nsf = null,
                _nsg = new _nsd.SlotItemEffectModel();
            return 'アメリカ' == _nse.getCountryName() ? (_nsg.tais += 3, _nsg.kaih += 1, 629 == _nse.ship_id && (_nsg.tais += 1, _nsg.kaih += 1)) : 67 == _nse.ctype || 78 == _nse.ctype || 82 == _nse.ctype || 88 == _nse.ctype || 108 == _nse.ctype || 112 == _nse.ctype ? (_nsg.tais += 2, _nsg.kaih += 1) : 96 == _nse.ctype && (_nsg.tais += 1, _nsg.kaih += 1), 651 != _nse.ship_id && 656 != _nse.ship_id || (_nsg.tais += 1, _nsg.kaih += 1), _nsg;
        };
    },
    26262: function(_nsh, _nsi, _nsj) {
        'use strict';
        var _nsk = null;
        var _nsl = this && this.__importDefault || function(_nsm) {
            var _nsn = null;
            return _nsm && _nsm.__esModule ? _nsm : {
                'default': _nsm
            };
        };
        defineModule(_nsi);
        Object.defineProperty(_nsi, '__esModule', {
            'value': true
        }), _nsi.getSlot379PersonalEffect = void 0;
        var _nso = _nsj(74496),
            _nsp = _nsl(_nsj(18622));
        _nsi.getSlot379PersonalEffect = function(_nsq) {
            var _nsr = null,
                _nss = new _nso.SlotItemEffectModel(),
                _nst = false,
                _nsu = new _nso.SlotItemEffectModel();
            if (1 == _nsq.stype ? (_nsu.tyku += 2, _nsu.houg += 1, _nst = true) : 21 != _nsq.stype && 16 != _nsq.stype || (_nsu.tyku += 1, _nsu.houg += 1, _nst = true), 66 == _nsq.ctype || 28 == _nsq.ctype ? (_nsu.houg += 1, _nsu.tyku += 2, _nst = true) : 101 == _nsq.ctype && (_nsu.tyku += 2, _nsu.houg += 1, _nss.tyku += 2, _nss.houg += 2, _nst = true), 'ゆら' == _nsq.yomi || 'なか' == _nsq.yomi || 'きぬ' == _nsq.yomi || 'いすず' == _nsq.yomi ? (_nsu.houg += 2, _nst = true) : 'おおい' != _nsq.yomi && 'きたかみ' != _nsq.yomi || (_nsu.tyku += 2, _nsu.houg += 2, _nst = true), 'ゆら' != _nsq.yomi && 'なか' != _nsq.yomi && 'きぬ' != _nsq.yomi && 'いすず' != _nsq.yomi && 'ゆうばり' != _nsq.yomi || (_nsu.tais += 1, _nst = true), 'てんりゅう' != _nsq.yomi && 'たつた' != _nsq.yomi && 'ゆうばり' != _nsq.yomi || (_nsu.houg += 1, _nst = true), 488 == _nsq.ship_id ? (_nsu.tyku += 4, _nst = true) : 220 == _nsq.ship_id ? (_nsu.tyku += 3, _nst = true) : 23 == _nsq.ship_id ? (_nsu.tyku += 2, _nst = true) : 160 == _nsq.ship_id || 487 == _nsq.ship_id || 141 == _nsq.ship_id ? (_nsu.tyku += 3, _nst = true) : 224 == _nsq.ship_id || 289 == _nsq.ship_id || 219 == _nsq.ship_id || 56 == _nsq.ship_id || 113 == _nsq.ship_id || 22 == _nsq.ship_id ? (_nsu.tyku += 2, _nst = true) : 651 != _nsq.ship_id && 656 != _nsq.ship_id || (_nsu.tyku += 3, _nsu.houg += 3, 656 == _nsq.ship_id && (_nsu.kaih += 3, _nsu.tais += 2), _nst = true), 488 != _nsq.ship_id && 160 != _nsq.ship_id && 487 != _nsq.ship_id && 141 != _nsq.ship_id || (_nsu.tais += 1, _nst = true), 477 != _nsq.ship_id && 478 != _nsq.ship_id && 624 != _nsq.ship_id || (_nsu.tais += 2, _nst = true), 477 != _nsq.ship_id && 478 != _nsq.ship_id && 624 != _nsq.ship_id && 622 != _nsq.ship_id || (_nsu.tyku += 2, _nst = true), 652 != _nsq.ship_id && 657 != _nsq.ship_id && 547 != _nsq.ship_id && 146 != _nsq.ship_id || (_nss.houg += 2), 652 != _nsq.ship_id && 657 != _nsq.ship_id && 547 != _nsq.ship_id && 146 != _nsq.ship_id || (_nss.tyku += 2), _nst) {
                var _nsv = _nsq.get_slotnums(379);
                _nss.add(_nsu.multiply(_nsv));
            }
            var _nsw = new _nso.SlotItemEffectModel(),
                _nsx = false;
            16 == _nsq.stype || 3 == _nsq.stype || 4 == _nsq.stype || 21 == _nsq.stype ? (_nsw.houg += 1, _nsw.kaih += 2, _nsx = true) : 1 == _nsq.stype && (_nsw.houg += 1, _nsw.kaih += 4, _nsx = true), 66 == _nsq.ctype || 28 == _nsq.ctype || 21 == _nsq.ctype || 34 == _nsq.ctype ? (_nsw.houg += 2, _nsw.kaih += 3, _nsx = true) : 101 == _nsq.ctype && (_nsw.houg += 4, _nsw.kaih += 3, _nsx = true), 488 == _nsq.ship_id || 651 == _nsq.ship_id || 656 == _nsq.ship_id ? (_nsw.houg += 2, _nsw.kaih += 2, _nsx = true) : 487 == _nsq.ship_id || 160 == _nsq.ship_id || 141 == _nsq.ship_id || 118 == _nsq.ship_id || 119 == _nsq.ship_id ? (_nsw.houg += 1, _nsw.kaih += 1, _nsx = true) : 652 != _nsq.ship_id && 657 != _nsq.ship_id && 547 != _nsq.ship_id && 146 != _nsq.ship_id || (_nsw.houg += 1, _nsw.kaih += 1, _nsx = true);
            var _nsy = new _nso.SlotItemEffectModel(),
                _nsz = false;
            if (656 == _nsq.ship_id && (_nsy.tyku += 3, _nsy.kaih += 2, _nsz = true), _nsx || _nsz) {
                for (var _nt0 = 0, _nt1 = 0, _nt2 = 0, _nt3 = _nsq.have_slot_ids(); _nt2 < _nt3.length; _nt2++) {
                    var _nt4 = _nt3[_nt2],
                        _nt5 = _nsp.default.model.slot.getMst(_nt4),
                        _nt6 = _nt5.equipType;
                    12 != _nt6 && 13 != _nt6 || (_nt5.sakuteki >= 5 && (_nt0 += _nsq.get_slotnums(parseInt(_nt4))), _nt5.taiku >= 2 && (_nt1 += _nsq.get_slotnums(parseInt(_nt4))));
                }
                _nsx && _nt0 > 0 && _nss.add(_nsw), _nsz && _nt1 > 0 && _nss.add(_nsy);
            }
            return _nss;
        };
    },
    45530: function(_nt7, _nt8, _nt9) {
        'use strict';
        var _nta = null;
        var _ntb = this && this.__importDefault || function(_ntc) {
            var _ntd = null;
            return _ntc && _ntc.__esModule ? _ntc : {
                'default': _ntc
            };
        };
        defineModule(_nt8);
        Object.defineProperty(_nt8, '__esModule', {
            'value': true
        }), _nt8.getSlot380PersonalEffect = void 0;
        var _nte = _nt9(74496),
            _ntf = _ntb(_nt9(18622));
        _nt8.getSlot380PersonalEffect = function(_ntg) {
            var _nth = null,
                _nti = new _nte.SlotItemEffectModel(),
                _ntj = false,
                _ntk = new _nte.SlotItemEffectModel();
            if (21 != _ntg.stype && 16 != _ntg.stype || (_ntk.tyku += 2, _ntk.houg += 1, _ntj = true), 101 == _ntg.ctype && (_ntk.tyku += 2, _ntk.houg += 1, _ntj = true, _nti.tyku += 2, _nti.houg += 2), 'ゆら' == _ntg.yomi || 'なか' == _ntg.yomi || 'きぬ' == _ntg.yomi || 'いすず' == _ntg.yomi ? (_ntk.houg += 2, _ntj = true) : 'おおい' != _ntg.yomi && 'きたかみ' != _ntg.yomi || (_ntk.tyku += 2, _ntk.houg += 3, _ntj = true), 'ゆら' != _ntg.yomi && 'なか' != _ntg.yomi && 'きぬ' != _ntg.yomi && 'いすず' != _ntg.yomi && 'ゆうばり' != _ntg.yomi || (_ntk.tais += 1, _ntj = true), 'てんりゅう' != _ntg.yomi && 'たつた' != _ntg.yomi && 'ゆうばり' != _ntg.yomi || (_ntk.houg += 1, _ntj = true), 488 == _ntg.ship_id ? (_ntk.tyku += 4, _ntj = true) : 220 == _ntg.ship_id ? (_ntk.tyku += 3, _ntj = true) : 23 == _ntg.ship_id ? (_ntk.tyku += 2, _ntj = true) : 160 == _ntg.ship_id || 487 == _ntg.ship_id || 141 == _ntg.ship_id ? (_ntk.tyku += 3, _ntj = true) : 224 == _ntg.ship_id || 289 == _ntg.ship_id || 219 == _ntg.ship_id || 56 == _ntg.ship_id || 113 == _ntg.ship_id || 22 == _ntg.ship_id ? (_ntk.tyku += 2, _ntj = true) : 651 == _ntg.ship_id || 656 == _ntg.ship_id ? (_ntk.tyku += 3, _ntk.houg += 3, _ntj = true) : 407 != _ntg.ship_id && 665 != _ntg.ship_id || (_ntk.houg += 2, _ntk.tyku += 2, _ntj = true, _nti.houg += 1, _nti.tyku += 1, _nti.kaih += 2), 488 != _ntg.ship_id && 160 != _ntg.ship_id && 487 != _ntg.ship_id && 141 != _ntg.ship_id || (_ntk.tais += 1, _ntj = true), 477 != _ntg.ship_id && 478 != _ntg.ship_id && 624 != _ntg.ship_id || (_ntk.tais += 2, _ntj = true), 477 != _ntg.ship_id && 478 != _ntg.ship_id && 624 != _ntg.ship_id && 622 != _ntg.ship_id || (_ntk.tyku += 2, _ntj = true), 652 != _ntg.ship_id && 657 != _ntg.ship_id || (_ntk.houg += 3, _ntj = true), 547 != _ntg.ship_id && 146 != _ntg.ship_id || (_nti.houg += 2), 652 != _ntg.ship_id && 657 != _ntg.ship_id && 547 != _ntg.ship_id && 146 != _ntg.ship_id || (_nti.tyku += 2), _ntj) {
                var _ntl = _ntg.get_slotnums(380);
                _nti.add(_ntk.multiply(_ntl));
            }
            var _ntm = new _nte.SlotItemEffectModel(),
                _ntn = false,
                _nto = new _nte.SlotItemEffectModel(),
                _ntp = false,
                _ntq = false;
            if (16 != _ntg.stype && 3 != _ntg.stype && 4 != _ntg.stype && 21 != _ntg.stype || (_ntm.houg += 2, _ntm.kaih += 1, _ntn = true), 101 == _ntg.ctype && (_ntm.houg += 4, _ntm.kaih += 3, _ntn = true), 488 != _ntg.ship_id && 487 != _ntg.ship_id && 160 != _ntg.ship_id && 141 != _ntg.ship_id && 118 != _ntg.ship_id && 119 != _ntg.ship_id && 651 != _ntg.ship_id && 656 != _ntg.ship_id || (_ntm.houg += 1, _ntm.kaih += 2, _ntn = true), 652 == _ntg.ship_id || 657 == _ntg.ship_id || 547 == _ntg.ship_id || 146 == _ntg.ship_id ? (_ntm.houg += 1, _ntm.kaih += 3, _ntn = true) : 407 != _ntg.ship_id && 665 != _ntg.ship_id || (_ntq = true, _ntn = true, _ntm.houg += 2, _ntm.kaih += 1, _ntp = true, _nto.houg += 1, _nto.tyku += 2, _nto.kaih += 1), _ntn || _ntq) {
                for (var _ntr = 0, _nts = 0, _ntt = 0, _ntu = _ntg.have_slot_ids(); _ntt < _ntu.length; _ntt++) {
                    var _ntv = _ntu[_ntt],
                        _ntw = _ntf.default.model.slot.getMst(_ntv),
                        _ntx = _ntw.equipType;
                    12 == _ntx || 13 == _ntx ? _ntw.sakuteki >= 5 && (_ntr += _ntg.get_slotnums(parseInt(_ntv))) : 21 == _ntx && (_nts += _ntg.get_slotnums(parseInt(_ntv)));
                }
                _ntn && _ntr > 0 && _nti.add(_ntm), _ntp && _nts > 0 && _nti.add(_nto);
            }
            return _nti;
        };
    },
    44053: (_nty, _ntz, _nu0) => {
        'use strict';
        var _nu1 = null;
        defineModule(_ntz);
        Object.defineProperty(_ntz, '__esModule', {
            'value': true
        }), _ntz.getSlot381PersonalEffect = void 0;
        var _nu2 = _nu0(74496);
        _ntz.getSlot381PersonalEffect = function(_nu3) {
            var _nu4 = null,
                _nu5 = new _nu2.SlotItemEffectModel(),
                _nu6 = false,
                _nu7 = new _nu2.SlotItemEffectModel(),
                _nu8 = 0;
            if ('アメリカ' == _nu3.getCountryName() && (_nu7.houg += 1, 102 == _nu3.ctype && (_nu7.houg += 1), _nu6 = true, _nu8 = 1), 0 == _nu6) return _nu5;
            var _nu9 = _nu3.get_slotnums(381);
            if (_nu5.add(_nu7.multiply(_nu9)), 0 == _nu8) return _nu5;
            var _nua = _nu3.get_each_level_nums(381),
                _nub = 0;
            return _nua.map(function(_nuc, _nud) {
                _nud >= 6 && (_nub += _nuc);
            }), 1 == _nu8 && (_nu5.houg += 1 * _nub), _nu5;
        };
    },
    65441: function(_nue, _nuf, _nug) {
        'use strict';
        var _nuh = null;
        var _nui = this && this.__importDefault || function(_nuj) {
            var _nuk = null;
            return _nuj && _nuj.__esModule ? _nuj : {
                'default': _nuj
            };
        };
        defineModule(_nuf);
        Object.defineProperty(_nuf, '__esModule', {
            'value': true
        }), _nuf.getSlot382PersonalEffect = void 0;
        var _nul = _nug(74496),
            _num = _nui(_nug(18622));
        _nuf.getSlot382PersonalEffect = function(_nun) {
            var _nuo = null,
                _nup = new _nul.SlotItemEffectModel(),
                _nuq = false,
                _nur = new _nul.SlotItemEffectModel(),
                _nus = false,
                _nut = new _nul.SlotItemEffectModel(),
                _nuu = new _nul.SlotItemEffectModel(),
                _nuv = {},
                _nuw = 2,
                _nux = [];
            1 == _nun.stype && (_nur.tyku += 2, _nur.kaih += 2, _nur.tais += 1, _nuq = true, _nut.houg += 2, _nut.kaih += 3, _nuu.tyku += 2, _nuu.kaih += 3, _nus = true, _nuw = 1), 66 != _nun.ctype && 28 != _nun.ctype && 101 != _nun.ctype || (_nur.tyku += 2, _nur.kaih += 1, _nuq = true, _nut.houg += 1, _nut.kaih += 2, _nuu.tyku += 2, _nuu.kaih += 2, _nus = true, _nuw = 1), 'ゆら' != _nun.yomi && 'なか' != _nun.yomi && 'きぬ' != _nun.yomi || (_nur.tyku += 1, _nuq = true), 488 == _nun.ship_id || 220 == _nun.ship_id ? (_nur.kaih += 1, _nuq = true, 488 == _nun.ship_id && (_nut.houg += 1, _nut.kaih += 1, _nuu.tyku += 2, _nuu.kaih += 2, _nus = true, _nuw = 1)) : 160 == _nun.ship_id || 224 == _nun.ship_id ? (_nur.kaih += 1, _nuq = true, 160 == _nun.ship_id && (_nut.houg += 1, _nut.kaih += 1, _nuu.tyku += 2, _nuu.kaih += 2, _nus = true)) : 487 == _nun.ship_id || 289 == _nun.ship_id ? (_nur.kaih += 1, _nuq = true, 487 == _nun.ship_id && (_nut.houg += 1, _nut.kaih += 1, _nuu.tyku += 2, _nuu.kaih += 2, _nus = true)) : 656 == _nun.ship_id ? (_nur.tyku += 3, _nur.kaih += 2, _nuq = true, _nut.houg += 2, _nut.kaih += 2, _nuu.tyku += 3, _nuu.kaih += 2, _nus = true, _nuw = 1) : 145 == _nun.ship_id || 961 == _nun.ship_id ? _nuw = 1 : 979 == _nun.ship_id && (_nur.houg += 1, _nur.tyku += 1, _nur.houm += 1, _nur.kaih += 1, _nuv[509] = new _nul.SlotItemEffectModel(), _nuv[509].houm += 1, _nuq = true, _nux[1] = 1);
            for (var _nuy = 0, _nuz = 0, _nv0 = 0, _nv1 = _nun.have_slot_ids(); _nv0 < _nv1.length; _nv0++) {
                var _nv2 = _nv1[_nv0],
                    _nv3 = _num.default.model.slot.getMst(_nv2),
                    _nv4 = _nv3.equipType;
                12 != _nv4 && 13 != _nv4 || (_nv3.sakuteki >= 5 && (_nuy += _nun.get_slotnums(parseInt(_nv2))), _nv3.taiku >= 2 && (_nuz += _nun.get_slotnums(parseInt(_nv2))));
            }
            for (var _nv5 = [], _nv6 = function(_nv7) {
                    var _nv8 = null;
                    if (null == _nun.have_slots_dict[_nv7]) return 'continue';
                    var _nv9 = _nun.get_each_level_nums(_nv7);
                    null == _nv5[_nv7] && (_nv5[_nv7] = []), _nv9.forEach(function(_nva, _nvb) {
                        var _nvc = null;
                        for (var _nvd = 1; _nvd <= _nun.SLOT_LEVEL_MAX; _nvd++) null == _nv5[_nv7][_nvd] && (_nv5[_nv7][_nvd] = 0), _nvb >= _nvd && (_nv5[_nv7][_nvd] += _nva);
                    });
                }, _nve = 0, _nvf = [509]; _nve < _nvf.length; _nve++) {
                _nv6(_nvf[_nve]);
            }
            var _nvg = 0,
                _nvh = 0,
                _nvi = 0,
                _nvj = 0,
                _nvk = 0,
                _nvl = 0,
                _nvm = 0,
                _nvn = 0,
                _nvo = 0,
                _nvp = 0;
            null != _nv5[509] && (_nvg = _nv5[509][1], _nvh = _nv5[509][2], _nvi = _nv5[509][3], _nvj = _nv5[509][4], _nvk = _nv5[509][5], _nvl = _nv5[509][6], _nvm = _nv5[509][7], _nvn = _nv5[509][8], _nvo = _nv5[509][9], _nvp = _nv5[509][10], null != _nux[1] && (_nvi >= 1 && (_nup.kaih += 1 * _nvi), _nvk >= 1 && (_nup.houg += 1 * _nvk), _nvm >= 1 && (_nup.tyku += 2 * _nvm), _nvo >= 1 && (_nup.houm += 1 * _nvo), _nvp >= 1 && (_nup.houg += 1 * _nvp)), 1 == _nuw ? (_nvg >= 1 && (_nup.tyku += 1 * _nvg), _nvh >= 1 && (_nup.kaih += 2 * _nvh), _nvj >= 1 && (_nup.houg += 1 * _nvj), _nvl >= 1 && (_nup.tyku += 1 * _nvl), _nvn >= 1 && (_nup.houm += 1 * _nvn), _nvp >= 1 && (_nup.tyku += 1 * _nvp)) : 2 == _nuw && (_nvh >= 1 && (_nup.tyku += 1 * _nvh), _nvj >= 1 && (_nup.kaih += 2 * _nvj), _nvl >= 1 && (_nup.houg += 1 * _nvl), _nvn >= 1 && (_nup.tyku += 1 * _nvn), _nvp >= 1 && (_nup.houm += 1 * _nvp)));
            var _nvq = _nun.get_slotnums(509),
                _nvr = _nvq + _nun.get_slotnums(382);
            return _nuq && (_nup.add(_nur.multiply(_nvr)), Object.keys(_nuv).forEach(function(_nvs) {
                var _nvt = null,
                    _nvu = parseInt(_nvs);
                if (null != _nun.have_slots_dict[_nvu]) {
                    var _nvv = _nun.get_slotnums(_nvu);
                    _nup.add(_nuv[_nvu].multiply(_nvv));
                }
            })), 3 != _nun.stype && 21 != _nun.stype && 4 != _nun.stype || _nvh >= 1 && (_nuy > 0 && (_nup.houg += 1, _nup.kaih += 1), _nuz > 0 && (_nup.tyku += 2, _nup.kaih += 1)), 145 == _nun.ship_id ? _nvh >= 1 && (_nuy > 0 && (_nup.houg += 1, _nup.tyku += 1, _nup.kaih += 2), _nuz > 0 && (_nup.tyku += 4, _nup.kaih += 2)) : 961 != _nun.ship_id && 979 != _nun.ship_id || _nvq > 0 && (_nuy > 0 && (_nup.houg += 2, _nup.tyku += 2, _nup.kaih += 3), _nuz > 0 && (_nup.houg += 1, _nup.tyku += 5, _nup.kaih += 3)), _nus && _nuy > 0 && _nup.add(_nut), _nus && _nuz > 0 && _nup.add(_nuu), _nup;
        };
    },
    33258: (_nvw, _nvx, _nvy) => {
        'use strict';
        var _nvz = null;
        defineModule(_nvx);
        Object.defineProperty(_nvx, '__esModule', {
            'value': true
        }), _nvx.getSlot383PersonalEffect = void 0;
        var _nw0 = _nvy(74496);
        _nvx.getSlot383PersonalEffect = function(_nw1) {
            var _nw2 = null,
                _nw3 = new _nw0.SlotItemEffectModel(),
                _nw4 = false,
                _nw5 = new _nw0.SlotItemEffectModel(),
                _nw6 = _nw1.get_each_level_over_nums([383]).slot[383];
            if (44 == _nw1.ctype && (_nw5.raig += 2, _nw4 = true, _nw6[4] > 0 && (_nw3.raig += 1), _nw6[6] > 0 && (_nw3.houm += 1)), 'い58' == _nw1.yomi && (_nw5.raig += 1, _nw4 = true), 636 == _nw1.ship_id ? (_nw5.raig += 3, _nw4 = true) : 607 == _nw1.ship_id && (_nw5.raig += 4, _nw4 = true), _nw6[8] > 0 && (_nw3.raig += 1), _nw6[10] > 0 && (_nw3.houm += 1), 'い58' != _nw1.yomi && 'い47' != _nw1.yomi || _nw6[5] > 0 && (_nw3.houm += 1), 0 == _nw4) return _nw3;
            var _nw7 = _nw1.get_slotnums(383);
            return _nw3.add(_nw5.multiply(_nw7)), _nw3;
        };
    },
    92168: (_nw8, _nw9, _nwa) => {
        'use strict';
        var _nwb = null;
        defineModule(_nw9);
        Object.defineProperty(_nw9, '__esModule', {
            'value': true
        }), _nw9.getSlot384PersonalEffect = void 0;
        var _nwc = _nwa(74496);
        _nw9.getSlot384PersonalEffect = function(_nwd) {
            var _nwe = null,
                _nwf = new _nwc.SlotItemEffectModel(),
                _nwg = false,
                _nwh = new _nwc.SlotItemEffectModel();
            44 == _nwd.ctype && (_nwh.kaih += 3, _nwg = true), 'い58' == _nwd.yomi && (_nwh.kaih += 2, _nwg = true), 636 == _nwd.ship_id ? (_nwh.kaih += 3, _nwg = true) : 607 == _nwd.ship_id && (_nwh.kaih += 4, _nwg = true);
            var _nwi = _nwd.get_slotnums(384);
            _nwg && _nwf.add(_nwh.multiply(_nwi));
            var _nwj = _nwi,
                _nwk = _nwd.get_slotnums(213),
                _nwl = _nwd.get_slotnums(214),
                _nwm = _nwd.get_slotnums(383);
            return _nwj > 0 && _nwk + _nwl + _nwm > 0 && (_nwf.raig += 3, _nwf.kaih += 2), _nwf;
        };
    },
    85975: (_nwn, _nwo, _nwp) => {
        'use strict';
        var _nwq = null;
        defineModule(_nwo);
        Object.defineProperty(_nwo, '__esModule', {
            'value': true
        }), _nwo.getSlot385PersonalEffect = void 0;
        var _nwr = _nwp(74496);
        _nwo.getSlot385PersonalEffect = function(_nws) {
            var _nwt = null,
                _nwu = new _nwr.SlotItemEffectModel(),
                _nwv = false,
                _nww = new _nwr.SlotItemEffectModel(),
                _nwx = 0;
            if ('アメリカ' == _nws.getCountryName() && (_nww.houg += 1, 102 == _nws.ctype || 107 == _nws.ctype ? (_nww.houg += 1, _nww.souk += 1) : 93 == _nws.ctype && (_nww.houg += 1), _nwv = true, _nwx = 1), 8 == _nws.stype && (_nww.houg += 1, _nwv = true), 0 == _nwv) return _nwu;
            var _nwy = _nws.get_slotnums(385);
            if (_nwu.add(_nww.multiply(_nwy)), 0 == _nwx) return _nwu;
            var _nwz = _nws.get_each_level_nums(385),
                _nx0 = 0;
            return _nwz.forEach(function(_nx1, _nx2) {
                _nx2 >= 6 && (_nx0 += _nx1);
            }), 1 == _nwx && (_nwu.houg += 1 * _nx0, _nwu.souk += 1 * _nwz[10]), _nwu;
        };
    },
    98467: (_nx3, _nx4, _nx5) => {
        'use strict';
        var _nx6 = null;
        defineModule(_nx4);
        Object.defineProperty(_nx4, '__esModule', {
            'value': true
        }), _nx4.getSlot386PersonalEffect = void 0;
        var _nx7 = _nx5(74496);
        _nx4.getSlot386PersonalEffect = function(_nx8) {
            var _nx9 = null,
                _nxa = new _nx7.SlotItemEffectModel(),
                _nxb = false,
                _nxc = new _nx7.SlotItemEffectModel(),
                _nxd = 0;
            if ('アメリカ' == _nx8.getCountryName() && (_nxc.houg += 1, _nxb = true, _nxd = 1), 0 == _nxb) return _nxa;
            var _nxe = _nx8.get_slotnums(386);
            if (_nxa.add(_nxc.multiply(_nxe)), 0 == _nxd) return _nxa;
            var _nxf = _nx8.get_each_level_nums(386),
                _nxg = 0,
                _nxh = 0;
            return _nxf.forEach(function(_nxi, _nxj) {
                _nxj >= 2 && (_nxg += _nxi), _nxj >= 7 && (_nxh += _nxi);
            }), 1 == _nxd && (_nxa.houg += 1 * _nxg, _nxa.houg += 1 * _nxh), _nxa;
        };
    },
    88348: (_nxk, _nxl, _nxm) => {
        'use strict';
        var _nxn = null;
        defineModule(_nxl);
        Object.defineProperty(_nxl, '__esModule', {
            'value': true
        }), _nxl.getSlot387PersonalEffect = void 0;
        var _nxo = _nxm(74496);
        _nxl.getSlot387PersonalEffect = function(_nxp) {
            var _nxq = null,
                _nxr = new _nxo.SlotItemEffectModel(),
                _nxs = false,
                _nxt = new _nxo.SlotItemEffectModel(),
                _nxu = 0;
            if ('アメリカ' == _nxp.getCountryName() && (_nxt.houg += 1, _nxs = true, _nxu = 1), 0 == _nxs) return _nxr;
            var _nxv = _nxp.get_slotnums(387);
            if (_nxr.add(_nxt.multiply(_nxv)), 0 == _nxu) return _nxr;
            var _nxw = _nxp.get_each_level_nums(387),
                _nxx = 0,
                _nxy = 0;
            return _nxw.forEach(function(_nxz, _ny0) {
                _ny0 >= 2 && (_nxx += _nxz), _ny0 >= 7 && (_nxy += _nxz);
            }), 1 == _nxu && (_nxr.houg += 1 * _nxx, _nxr.houg += 1 * _nxy), _nxr;
        };
    },
    21097: (_ny1, _ny2, _ny3) => {
        'use strict';
        var _ny4 = null;
        defineModule(_ny2);
        Object.defineProperty(_ny2, '__esModule', {
            'value': true
        }), _ny2.getSlot389PersonalEffect = void 0;
        var _ny5 = _ny3(74496);
        _ny2.getSlot389PersonalEffect = function(_ny6) {
            var _ny7 = null,
                _ny8 = new _ny5.SlotItemEffectModel(),
                _ny9 = false,
                _nya = new _ny5.SlotItemEffectModel();
            if (594 == _ny6.ship_id || 599 == _ny6.ship_id) _nya.houg += 2, _nya.kaih += 2, _ny9 = true;
            else {
                if (698 == _ny6.ship_id || 610 == _ny6.ship_id) _nya.houg += 3, _nya.kaih += 2, _ny9 = true;
                else 646 == _ny6.ship_id && (_nya.houg += 4, _nya.tais += 4, _nya.kaih += 3, _ny9 = true, _ny6.get_type3_nums(25) > 0 && (_ny8.houg += 3, _ny8.tais += 6), _ny6.get_slotnums(326) + _ny6.get_slotnums(327) > 0 && (_ny8.houg += 5, _ny8.tais += 4));
            }
            if ('アメリカ' == _ny6.getCountryName() && (_nya.houg += 2, _nya.tais += 3, _nya.kaih += 1, _ny9 = true), 0 == _ny9) return _ny8;
            var _nyb = _ny6.get_slotnums(389);
            return _ny8.add(_nya.multiply(_nyb)), _ny8;
        };
    },
    43607: (_nyc, _nyd, _nye) => {
        'use strict';
        var _nyf = null;
        defineModule(_nyd);
        Object.defineProperty(_nyd, '__esModule', {
            'value': true
        }), _nyd.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _nyg = _nye(74496);
        _nyd.getSlot38cmFourBarrelGunPersonalEffect = function(_nyh) {
            var _nyi = null,
                _nyj = new _nyg.SlotItemEffectModel(),
                _nyk = _nyh.get_slotnums(245),
                _nyl = _nyh.get_slotnums(246),
                _nym = _nyh.get_slotnums(468),
                _nyn = _nyk + _nyl + _nym,
                _nyo = 0,
                _nyp = 0,
                _nyq = new Array();
            if (79 != _nyh.ctype) return _nyj;
            _nyj.houg += 2 * _nyn, _nyj.houm += 1 * _nyn, _nym >= 1 && (_nyj.houg += 1 * _nym, _nyp = 1, _nyq.push(468), _nyq.push(471)), _nyo = 1;
            var _nyr = _nyh.get_slotnums(247),
                _nys = _nyh.get_slotnums(471);
            if (1 == _nyo && _nyr >= 1 && (_nyj.kaih += 2 * _nyr, _nyj.houg += 2 * _nyr, _nyj.houm += 2 * _nyr), 0 == _nyp) return _nyj;
            for (var _nyt = {}, _nyu = {}, _nyv = {}, _nyw = {}, _nyx = {}, _nyy = 0, _nyz = _nyq; _nyy < _nyz.length; _nyy++) {
                var _nz0 = _nyz[_nyy];
                if (_nyu[_nz0] = 0, _nyv[_nz0] = 0, _nyw[_nz0] = 0, _nyx[_nz0] = 0, _nyt[_nz0] = 0, null != _nyh.have_slots_dict[_nz0])
                    for (var _nz1 = 0, _nz2 = _nyh.have_slots_dict[_nz0]; _nz1 < _nz2.length; _nz1++) {
                        var _nz3 = _nz2[_nz1].level;
                        _nz3 >= 4 && _nyu[_nz0]++, _nz3 >= 7 && _nyv[_nz0]++, _nz3 >= 8 && _nyw[_nz0]++, _nz3 >= 9 && _nyx[_nz0]++, _nz3 >= 10 && _nyt[_nz0]++;
                    }
            }
            if (1 == _nyp && _nym > 0) {
                var _nz4 = _nyu[468],
                    _nz5 = _nyw[468],
                    _nz6 = _nyx[468],
                    _nz7 = _nyt[468],
                    _nz8 = _nyv[471],
                    _nz9 = _nyx[471];
                _nz4 >= 1 && (_nyj.houg += 1 * _nz4, _nyj.houm += 1 * _nz4), _nz5 >= 1 && (_nyj.houg += 1 * _nz5, _nyj.houm += 1 * _nz5), _nz6 >= 1 && (_nyj.tyku += 1 * _nz6, _nys >= 1 && (_nyj.houm += 2 * _nys), _nyr >= 1 && (_nyj.kaih += 1 * _nyr, _nyj.houm += 1 * _nyr)), _nz7 >= 1 && (_nyj.houm += 1 * _nz7, _nys >= 1 && (_nyj.houm += 1 * _nys, _nz8 >= 1 && (_nyj.houm += 1 * _nz8), _nz9 >= 1 && (_nyj.kaih += 1 * _nz9)), _nyr >= 1 && (_nyj.houg += 1 * _nyr, _nyj.kaih += 1 * _nyr, _nyj.houm += 1 * _nyr));
            }
            return _nyj;
        };
    },
    2380: (_nza, _nzb, _nzc) => {
        'use strict';
        var _nzd = null;
        defineModule(_nzb);
        Object.defineProperty(_nzb, '__esModule', {
            'value': true
        }), _nzb.getSlot38cmTwinGunPersonalEffect = void 0;
        var _nze = _nzc(74496);
        _nzb.getSlot38cmTwinGunPersonalEffect = function(_nzf) {
            var _nzg = null,
                _nzh = new _nze.SlotItemEffectModel(),
                _nzi = false,
                _nzj = new _nze.SlotItemEffectModel(),
                _nzk = 0,
                _nzl = _nzf.get_slotnums(76),
                _nzm = _nzf.get_slotnums(114),
                _nzn = _nzf.get_slotnums(124);
            if ('ドイツ' == _nzf.getCountryName() && (_nzj.houg += 1, _nzi = true, _nzk = 1, _nzn >= 1 && (_nzh.kaih += 1 * _nzn)), 0 == _nzi) return _nzh;
            var _nzo = _nzl + _nzm;
            _nzh.add(_nzj.multiply(_nzo));
            var _nzp = _nzf.have_level_num_over_dict[114];
            return 1 == _nzk && null != _nzp && (_nzp[7] >= 1 && (_nzh.houg += 1 * _nzp[7]), _nzp[8] >= 1 && (_nzh.houm += 1 * _nzp[8]), _nzp[9] >= 1 && (_nzh.souk += 1 * _nzp[9]), _nzp[10] >= 1 && (_nzh.houg += 1 * _nzp[10])), _nzh;
        };
    },
    37273: (_nzq, _nzr, _nzs) => {
        'use strict';
        var _nzt = null;
        defineModule(_nzr);
        Object.defineProperty(_nzr, '__esModule', {
            'value': true
        }), _nzr.getSlot390PersonalEffect = void 0;
        var _nzu = _nzs(74496);
        _nzr.getSlot390PersonalEffect = function(_nzv) {
            var _nzw = null,
                _nzx = new _nzu.SlotItemEffectModel(),
                _nzy = false,
                _nzz = new _nzu.SlotItemEffectModel(),
                _o00 = 0;
            if ('アメリカ' == _nzv.getCountryName() && (_nzz.houg += 1, _nzy = true, _o00 = 1), 102 == _nzv.ctype || 107 == _nzv.ctype ? (_nzz.houg += 1, _nzz.souk += 1, _nzy = true) : 93 == _nzv.ctype && (_nzz.houg += 1, _nzy = true), 8 == _nzv.stype && (_nzz.houg += 1, _nzy = true), 0 == _nzy) return _nzx;
            var _o01 = _nzv.get_slotnums(390);
            if (_nzx.add(_nzz.multiply(_o01)), 0 == _o00) return _nzx;
            var _o02 = _nzv.get_each_level_nums(390),
                _o03 = 0,
                _o04 = 0;
            return _o02.forEach(function(_o05, _o06) {
                _o06 >= 3 && (_o03 += _o05), _o06 >= 6 && (_o04 += _o05);
            }), 1 == _o00 && (_nzx.houg += 1 * _o03, _nzx.kaih += 1 * _o04, _nzx.souk += 1 * _o02[10]), _nzx;
        };
    },
    72694: (_o07, _o08, _o09) => {
        'use strict';
        var _o0a = null;
        defineModule(_o08);
        Object.defineProperty(_o08, '__esModule', {
            'value': true
        }), _o08.getSlot391PersonalEffect = void 0;
        var _o0b = _o09(74496);
        _o08.getSlot391PersonalEffect = function(_o0c) {
            var _o0d = null,
                _o0e = new _o0b.SlotItemEffectModel(),
                _o0f = false,
                _o0g = new _o0b.SlotItemEffectModel();
            if ('しょうかく' == _o0c.yomi || 'ずいかく' == _o0c.yomi ? (_o0g.houg += 1, _o0f = true) : 'じゅんよう' != _o0c.yomi && 'ひよう' != _o0c.yomi || (_o0g.houg += 1, _o0f = true), 116 == _o0c.ship_id || 185 == _o0c.ship_id || 282 == _o0c.ship_id ? (_o0g.houg += 1, _o0f = true) : 117 == _o0c.ship_id || 318 == _o0c.ship_id || 883 == _o0c.ship_id || 888 == _o0c.ship_id ? (_o0g.houg += 1, _o0e.kaih += 1, _o0f = true) : 560 != _o0c.ship_id && 555 != _o0c.ship_id || (_o0g.houg += 1, _o0g.kaih += 1, _o0f = true), 0 == _o0f) return _o0e;
            var _o0h = _o0c.get_slotnums(391);
            return _o0e.add(_o0g.multiply(_o0h)), _o0e;
        };
    },
    62067: (_o0i, _o0j, _o0k) => {
        'use strict';
        var _o0l = null;
        defineModule(_o0j);
        Object.defineProperty(_o0j, '__esModule', {
            'value': true
        }), _o0j.getSlot392PersonalEffect = void 0;
        var _o0m = _o0k(74496);
        _o0j.getSlot392PersonalEffect = function(_o0n) {
            var _o0o = null,
                _o0p = new _o0m.SlotItemEffectModel(),
                _o0q = false,
                _o0r = new _o0m.SlotItemEffectModel();
            if ('しょうかく' == _o0n.yomi || 'ずいかく' == _o0n.yomi ? (_o0r.houg += 2, _o0r.kaih += 1, _o0q = true) : 'じゅんよう' != _o0n.yomi && 'ひよう' != _o0n.yomi || (_o0r.houg += 1, _o0r.kaih += 1, _o0q = true), 116 == _o0n.ship_id || 185 == _o0n.ship_id || 282 == _o0n.ship_id ? (_o0r.houg += 2, _o0r.kaih += 1, _o0q = true) : 117 == _o0n.ship_id || 318 == _o0n.ship_id || 883 == _o0n.ship_id || 888 == _o0n.ship_id ? (_o0r.houg += 2, _o0r.kaih += 2, _o0q = true) : 560 != _o0n.ship_id && 555 != _o0n.ship_id || (_o0r.houg += 3, _o0r.kaih += 2, _o0q = true), 0 == _o0q) return _o0p;
            var _o0s = _o0n.get_slotnums(392);
            return _o0p.add(_o0r.multiply(_o0s)), _o0p;
        };
    },
    87817: function(_o0t, _o0u, _o0v) {
        'use strict';
        var _o0w = null;
        var _o0x = this && this.__importDefault || function(_o0y) {
            var _o0z = null;
            return _o0y && _o0y.__esModule ? _o0y : {
                'default': _o0y
            };
        };
        defineModule(_o0u);
        Object.defineProperty(_o0u, '__esModule', {
            'value': true
        }), _o0u.getSlot397PersonalEffect = void 0;
        var _o10 = _o0v(74496),
            _o11 = _o0x(_o0v(18622));
        _o0u.getSlot397PersonalEffect = function(_o12) {
            var _o13 = null,
                _o14 = new _o10.SlotItemEffectModel(),
                _o15 = false,
                _o16 = new _o10.SlotItemEffectModel(),
                _o17 = 0,
                _o18 = 0,
                _o19 = false;
            if (651 == _o12.ship_id ? (_o16.houg += 5, _o16.tyku += 2, _o16.kaih += 1, _o15 = true, _o19 = true, _o17 = 1, _o18 = 1) : 656 == _o12.ship_id && (_o16.houg += 3, _o16.tyku += 1, _o16.kaih += 1, _o15 = true, _o19 = true, _o17 = 1), 0 == _o15) return _o14;
            var _o1a = _o12.get_slotnums(397);
            _o14.add(_o16.multiply(_o1a));
            var _o1b = 0,
                _o1c = _o12.get_each_level_nums(397),
                _o1d = 0;
            if (_o19) {
                _o1c.forEach(function(_o1e, _o1f) {
                    _o1f >= 4 && (_o1d += _o1e);
                });
                for (var _o1g = 0, _o1h = _o12.have_slot_ids(); _o1g < _o1h.length; _o1g++) {
                    var _o1i = _o1h[_o1g],
                        _o1j = _o11.default.model.slot.getMst(_o1i),
                        _o1k = _o1j.equipType;
                    12 != _o1k && 13 != _o1k || (_o1j.sakuteki >= 5 && (_o1b += _o12.get_slotnums(parseInt(_o1i))), _o1j.taiku >= 2 && _o12.get_slotnums(parseInt(_o1i)));
                }
            }
            return 1 == _o17 && _o1b > 0 && (_o14.houg += 3, _o14.kaih += 3), 1 == _o18 && (_o14.houg += 4 * _o1d, _o14.kaih += 1 * _o1d), _o14;
        };
    },
    93526: function(_o1l, _o1m, _o1n) {
        'use strict';
        var _o1o = null;
        var _o1p = this && this.__importDefault || function(_o1q) {
            var _o1r = null;
            return _o1q && _o1q.__esModule ? _o1q : {
                'default': _o1q
            };
        };
        defineModule(_o1m);
        Object.defineProperty(_o1m, '__esModule', {
            'value': true
        }), _o1m.getSlot398PersonalEffect = void 0;
        var _o1s = _o1n(74496),
            _o1t = _o1p(_o1n(18622));
        _o1m.getSlot398PersonalEffect = function(_o1u) {
            var _o1v = null,
                _o1w = new _o1s.SlotItemEffectModel(),
                _o1x = false,
                _o1y = new _o1s.SlotItemEffectModel(),
                _o1z = 0,
                _o20 = 0,
                _o21 = false;
            if (651 == _o1u.ship_id ? (_o1y.houg += 4, _o1y.tyku += 4, _o1y.kaih += 2, _o1x = true, _o21 = true, _o1z = 1, _o20 = 1) : 656 == _o1u.ship_id && (_o1y.houg += 3, _o1y.tyku += 2, _o1y.kaih += 2, _o1x = true, _o21 = true, _o1z = 1, _o20 = 2), 0 == _o1x) return _o1w;
            var _o22 = _o1u.get_slotnums(398);
            _o1w.add(_o1y.multiply(_o22));
            var _o23 = 0,
                _o24 = 0,
                _o25 = _o1u.get_each_level_nums(398),
                _o26 = 0;
            if (_o21) {
                _o25.forEach(function(_o27, _o28) {
                    _o28 >= 4 && (_o26 += _o27);
                });
                for (var _o29 = 0, _o2a = _o1u.have_slot_ids(); _o29 < _o2a.length; _o29++) {
                    var _o2b = _o2a[_o29],
                        _o2c = _o1t.default.model.slot.getMst(_o2b),
                        _o2d = _o2c.equipType;
                    12 != _o2d && 13 != _o2d || (_o2c.sakuteki >= 5 && (_o23 += _o1u.get_slotnums(parseInt(_o2b))), _o2c.taiku >= 2 && (_o24 += _o1u.get_slotnums(parseInt(_o2b))));
                }
            }
            return 1 == _o1z && (_o23 > 0 && (_o1w.houg += 3, _o1w.kaih += 3), _o24 > 0 && (_o1w.tyku += 3, _o1w.kaih += 3)), 1 == _o20 ? (_o1w.houg += 3 * _o26, _o1w.kaih += 2 * _o26) : 2 == _o20 && (_o1w.houg += 2 * _o26, _o1w.kaih += 1 * _o26), _o1w;
        };
    },
    33084: (_o2e, _o2f, _o2g) => {
        'use strict';
        var _o2h = null;
        defineModule(_o2f);
        Object.defineProperty(_o2f, '__esModule', {
            'value': true
        }), _o2f.getSlot399PersonalEffect = void 0;
        var _o2i = _o2g(74496);
        _o2f.getSlot399PersonalEffect = function(_o2j) {
            var _o2k = null,
                _o2l = new _o2i.SlotItemEffectModel(),
                _o2m = false,
                _o2n = new _o2i.SlotItemEffectModel(),
                _o2o = 0;
            if (108 == _o2j.ctype && (_o2n.houg += 1, _o2n.kaih += 2, _o2o = 1, _o2m = true), 0 == _o2m) return _o2l;
            var _o2p = _o2j.get_slotnums(399);
            if (_o2l.add(_o2n.multiply(_o2p)), 0 == _o2o) return _o2l;
            var _o2q = _o2j.get_each_level_nums(399),
                _o2r = 0,
                _o2s = 0;
            return _o2q.map(function(_o2t, _o2u) {
                _o2u >= 3 && (_o2r += _o2t), _o2u >= 5 && (_o2s += _o2t);
            }), 1 == _o2o && (_o2l.houg += 1 * _o2r, _o2l.houg += 1 * _o2s), _o2l;
        };
    },
    80225: (_o2v, _o2w, _o2x) => {
        'use strict';
        var _o2y = null;
        defineModule(_o2w);
        Object.defineProperty(_o2w, '__esModule', {
            'value': true
        }), _o2w.getSlot3_122PersonalEffect = void 0;
        var _o2z = _o2x(74496);
        _o2w.getSlot3_122PersonalEffect = function(_o30) {
            var _o31 = null,
                _o32 = new _o2z.SlotItemEffectModel(),
                _o33 = false,
                _o34 = new _o2z.SlotItemEffectModel(),
                _o35 = 0;
            if (54 == _o30.ctype && (_o34.houg += 1, _o34.tyku += 2, _o34.kaih += 1, _o33 = true, _o35 = 1, 968 == _o30.ship_id && (_o34.houg += 1, _o34.houm += 1, _o34.kaih += 1)), 0 == _o33) return _o32;
            var _o36 = _o30.get_slotnums(3) + _o30.get_slotnums(122) + _o30.get_slotnums(533);
            if (_o32.add(_o34.multiply(_o36)), 0 == _o35) return _o32;
            var _o37 = _o30.get_each_level_over_nums([122]).slot[122],
                _o38 = _o30.have_level_num_over_dict[533];
            return 1 == _o35 && (null != _o37 && (_o37[6] >= 1 && (_o32.kaih += 1 * _o37[6]), _o37[7] >= 1 && (_o32.tyku += 1 * _o37[7]), _o37[8] >= 1 && (_o32.houm += 1 * _o37[8]), _o37[9] >= 1 && (_o32.kaih += 1 * _o37[9]), _o37[10] >= 1 && (_o32.houg += 1 * _o37[10])), null != _o38 && (_o38[2] >= 1 && (_o32.tyku += 1 * _o38[2]), _o38[4] >= 1 && (_o32.houg += 1 * _o38[4]), _o38[6] >= 1 && (_o32.houm += 1 * _o38[6]), _o38[8] >= 1 && (_o32.tyku += 1 * _o38[8]), _o38[10] >= 1 && (_o32.kaih += 1 * _o38[10])), 968 == _o30.ship_id && null != _o38 && (_o38[1] >= 1 && (_o32.kaih += 1 * _o38[1]), _o38[3] >= 1 && (_o32.tyku += 1 * _o38[3]), _o38[5] >= 1 && (_o32.houm += 1 * _o38[5]), _o38[7] >= 1 && (_o32.kaih += 1 * _o38[7]), _o38[9] >= 1 && (_o32.houg += 1 * _o38[9]))), _o32;
        };
    },
    97831: (_o39, _o3a, _o3b) => {
        'use strict';
        var _o3c = null;
        defineModule(_o3a);
        Object.defineProperty(_o3a, '__esModule', {
            'value': true
        }), _o3a.getSlot400PersonalEffect = void 0;
        var _o3d = _o3b(74496);
        _o3a.getSlot400PersonalEffect = function(_o3e) {
            var _o3f = null,
                _o3g = new _o3d.SlotItemEffectModel(),
                _o3h = false,
                _o3i = new _o3d.SlotItemEffectModel(),
                _o3j = 0,
                _o3k = false;
            if (147 != _o3e.ship_id && 73 != _o3e.ctype && 81 != _o3e.ctype || (_o3k = true), _o3k && (_o3i.kaih += 2, _o3i.raig += 5, _o3i.houg += 1, _o3i.souk += 1, _o3h = true, _o3j = 1), 0 == _o3h) return _o3g;
            var _o3l = _o3e.get_slotnums(400);
            return _o3g.add(_o3i.multiply(_o3l)), _o3e.get_slotnums(282) > 0 && 1 == _o3j && (_o3g.houg += 2), _o3g;
        };
    },
    4050: function(_o3m, _o3n, _o3o) {
        'use strict';
        var _o3p = null;
        var _o3q = this && this.__importDefault || function(_o3r) {
            var _o3s = null;
            return _o3r && _o3r.__esModule ? _o3r : {
                'default': _o3r
            };
        };
        defineModule(_o3n);
        Object.defineProperty(_o3n, '__esModule', {
            'value': true
        }), _o3n.getSlot407PersonalEffect = void 0;
        var _o3t = _o3o(74496),
            _o3u = _o3q(_o3o(18622));
        _o3n.getSlot407PersonalEffect = function(_o3v) {
            var _o3w = null,
                _o3x = new _o3t.SlotItemEffectModel(),
                _o3y = false,
                _o3z = new _o3t.SlotItemEffectModel(),
                _o40 = 0;
            if (662 != _o3v.ship_id && 663 != _o3v.ship_id && 668 != _o3v.ship_id || (_o3z.houg += 4, _o3z.tyku += 2, _o3z.kaih += 1, _o3y = true, _o40 = 1), 0 == _o3y) return _o3x;
            var _o41 = _o3v.get_slotnums(407);
            _o3x.add(_o3z.multiply(_o41));
            for (var _o42 = 0, _o43 = 0, _o44 = 0, _o45 = _o3v.have_slot_ids(); _o44 < _o45.length; _o44++) {
                var _o46 = _o45[_o44],
                    _o47 = _o3u.default.model.slot.getMst(_o46),
                    _o48 = _o47.equipType;
                12 != _o48 && 13 != _o48 || (_o47.sakuteki >= 5 && (_o42 += _o3v.get_slotnums(parseInt(_o46))), _o47.taiku >= 2 && (_o43 += _o3v.get_slotnums(parseInt(_o46))));
            }
            return _o42 >= 1 && 1 == _o40 && (_o3x.houg += 2, _o3x.kaih += 2, _o3x.raig += 2), _o43 >= 1 && 1 == _o40 && (_o3x.tyku += 2, _o3x.kaih += 3), _o3x;
        };
    },
    78466: (_o49, _o4a, _o4b) => {
        'use strict';
        var _o4c = null;
        defineModule(_o4a);
        Object.defineProperty(_o4a, '__esModule', {
            'value': true
        }), _o4a.getSlot408PersonalEffect = void 0;
        var _o4d = _o4b(74496);
        _o4a.getSlot408PersonalEffect = function(_o4e) {
            var _o4f = null,
                _o4g = new _o4d.SlotItemEffectModel(),
                _o4h = false,
                _o4i = new _o4d.SlotItemEffectModel();
            if ('しんしゅうまる' == _o4e.yomi ? (_o4i.houg += 2, _o4i.saku += 2, _o4i.kaih += 2, _o4h = true) : 'あきつまる' == _o4e.yomi && (_o4i.houg += 1, _o4i.saku += 1, _o4i.kaih += 1, _o4i.tais += 1, _o4h = true), 2 == _o4e.stype && (_o4i.houg += 1, _o4i.saku += 1, _o4i.kaih -= 5, _o4h = true), 0 == _o4h) return _o4g;
            var _o4j = _o4e.get_slotnums(408);
            return _o4g.add(_o4i.multiply(_o4j)), _o4g;
        };
    },
    40061: (_o4k, _o4l, _o4m) => {
        'use strict';
        var _o4n = null;
        defineModule(_o4l);
        Object.defineProperty(_o4l, '__esModule', {
            'value': true
        }), _o4l.getSlot409PersonalEffect = void 0;
        var _o4o = _o4m(74496);
        _o4l.getSlot409PersonalEffect = function(_o4p) {
            var _o4q = null,
                _o4r = new _o4o.SlotItemEffectModel(),
                _o4s = false,
                _o4t = new _o4o.SlotItemEffectModel();
            if ('しんしゅうまる' == _o4p.yomi ? (_o4t.houg += 1, _o4t.tyku += 2, _o4t.kaih += 3, _o4s = true) : 'あきつまる' == _o4p.yomi && (_o4t.houg += 1, _o4t.tyku += 1, _o4t.kaih += 2, _o4t.tais += 1, _o4s = true), 0 == _o4s) return _o4r;
            var _o4u = _o4p.get_slotnums(409);
            return _o4r.add(_o4t.multiply(_o4u)), _o4r;
        };
    },
    79988: (_o4v, _o4w, _o4x) => {
        'use strict';
        var _o4y = null;
        defineModule(_o4w);
        Object.defineProperty(_o4w, '__esModule', {
            'value': true
        }), _o4w.getSlot411PersonalEffect = void 0;
        var _o4z = _o4x(74496);
        _o4w.getSlot411PersonalEffect = function(_o50) {
            var _o51 = null,
                _o52 = new _o4z.SlotItemEffectModel(),
                _o53 = new _o4z.SlotItemEffectModel(),
                _o54 = false,
                _o55 = 0;
            if (2 == _o50.stype && (_o53.kaih -= 9, _o54 = true), 3 != _o50.stype && 4 != _o50.stype || (_o53.kaih -= 7, _o54 = true), 21 == _o50.stype && (_o53.kaih -= 6, _o54 = true), 5 != _o50.stype && 6 != _o50.stype || (_o53.kaih -= 5, _o54 = true), 593 == _o50.ship_id && (_o52.houg += 1, _o52.tyku += 2, _o52.kaih += 3), 151 == _o50.ship_id || 411 == _o50.ship_id || 412 == _o50.ship_id || 593 == _o50.ship_id || 954 == _o50.ship_id ? (_o52.houg += 3, _o52.tyku += 4, _o55 = 1) : 541 != _o50.ship_id && 573 != _o50.ship_id && 553 != _o50.ship_id && 554 != _o50.ship_id || (_o52.houg += 2, _o52.tyku += 2, _o55 = 1), _o54) {
                var _o56 = _o50.get_slotnums(411);
                _o52.add(_o53.multiply(_o56));
            }
            if (0 == _o55) return _o52;
            var _o57 = _o50.get_each_level_nums(411),
                _o58 = 0;
            return _o55 > 0 && _o57.forEach(function(_o59, _o5a) {
                _o5a >= 4 && (_o58 += _o59);
            }), 1 == _o55 && (_o58 >= 1 && (_o52.houg += 1, _o52.tyku += 1), _o57[10] >= 1 && (_o52.houg += 1, _o52.tyku += 1)), _o52;
        };
    },
    74428: (_o5b, _o5c, _o5d) => {
        'use strict';
        var _o5e = null;
        defineModule(_o5c);
        Object.defineProperty(_o5c, '__esModule', {
            'value': true
        }), _o5c.getSlot412PersonalEffect = void 0;
        var _o5f = _o5d(74496);
        _o5c.getSlot412PersonalEffect = function(_o5g) {
            var _o5h = null,
                _o5i = new _o5f.SlotItemEffectModel(),
                _o5j = false,
                _o5k = 0,
                _o5l = new _o5f.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o5g.ctype) >= 0 ? (_o5i.houg += 2, _o5i.raig += 4, _o5i.tais += 2, _o5l.kaih += 3, _o5l.saku += 1, _o5j = true, _o5k = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o5g.ctype) >= 0 ? (_o5i.houg += 3, _o5i.raig += 3, _o5l.kaih += 2, _o5l.saku += 3, _o5j = true, _o5k = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o5g.ctype) >= 0 && (_o5i.houg += 1, _o5l.kaih += 1, _o5l.saku += 1, _o5j = true), 0 == _o5j) return _o5i;
            var _o5m = _o5g.get_slotnums(412);
            if (_o5i.add(_o5l.multiply(_o5m)), 0 == _o5k) return _o5i;
            var _o5n = _o5g.get_each_level_nums(412),
                _o5o = 0,
                _o5p = 0;
            return _o5k > 0 && _o5n.forEach(function(_o5q, _o5r) {
                _o5r >= 4 && (_o5o += _o5q), _o5r >= 8 && (_o5p += _o5q);
            }), 1 == _o5k && (_o5o > 0 && (_o5i.houg += 1), _o5p > 0 && (_o5i.raig += 1)), _o5i;
        };
    },
    2631: (_o5s, _o5t, _o5u) => {
        'use strict';
        var _o5v = null;
        defineModule(_o5t);
        Object.defineProperty(_o5t, '__esModule', {
            'value': true
        }), _o5t.getSlot413PersonalEffect = void 0;
        var _o5w = _o5u(74496);
        _o5t.getSlot413PersonalEffect = function(_o5x) {
            var _o5y = null,
                _o5z = new _o5w.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o5x.ctype) >= 0 ? (_o5z.houg += 2, _o5z.raig += 2, _o5z.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o5x.ctype) >= 0 && (_o5z.houg += 4, _o5z.raig += 2, _o5z.kaih += 2), 38 == _o5x.ctype || 54 == _o5x.ctype ? (_o5z.houg += 2, _o5z.raig += 3, _o5z.kaih += 3) : 4 == _o5x.ctype || 20 == _o5x.ctype || 16 == _o5x.ctype || 41 == _o5x.ctype || 52 == _o5x.ctype ? (_o5z.houg += 1, _o5z.raig += 2, _o5z.kaih += 2) : 21 != _o5x.ctype && 34 != _o5x.ctype || (_o5z.tyku += 2, _o5z.raig += 1, _o5z.kaih += 1), 'なか' == _o5x.yomi || 'ゆら' == _o5x.yomi || 'やはぎ' == _o5x.yomi || 'のしろ' == _o5x.yomi || 'はまなみ' == _o5x.yomi || 'しまかぜ' == _o5x.yomi || 'きよしも' == _o5x.yomi || 'はつしも' == _o5x.yomi ? (_o5z.tyku += 1, _o5z.kaih += 1) : 'じんつう' != _o5x.yomi && 'せんだい' != _o5x.yomi && 'ながなみ' != _o5x.yomi && 'はつしも' != _o5x.yomi && 'てるづき' != _o5x.yomi || (_o5z.houg += 1, _o5z.raig += 1), 543 == _o5x.ship_id ? (_o5z.houg += 1, _o5z.kaih += 1) : 159 == _o5x.ship_id && (_o5z.houg += 2), _o5z;
        };
    },
    16498: (_o60, _o61, _o62) => {
        'use strict';
        var _o63 = null;
        defineModule(_o61);
        Object.defineProperty(_o61, '__esModule', {
            'value': true
        }), _o61.getSlot414PersonalEffect = void 0;
        var _o64 = _o62(74496);
        _o61.getSlot414PersonalEffect = function(_o65) {
            var _o66 = null,
                _o67 = new _o64.SlotItemEffectModel(),
                _o68 = 0;
            if ('アメリカ' == _o65.getCountryName() && (_o67.saku += 1, _o68 = 1), 95 != _o65.ctype && 99 != _o65.ctype && 106 != _o65.ctype && 110 != _o65.ctype && 121 != _o65.ctype || (_o67.houg += 1, _o67.saku += 1, _o68 = 2), 0 == _o68) return _o67;
            var _o69 = _o65.get_each_level_nums(414),
                _o6a = 0,
                _o6b = 0,
                _o6c = 0;
            return _o68 > 0 && _o69.forEach(function(_o6d, _o6e) {
                _o6e >= 5 && (_o6a += _o6d), _o6e >= 3 && (_o6b += _o6d), _o6e >= 8 && (_o6c += _o6d);
            }), _o68 > 0 && _o6a >= 1 && (_o67.kaih += 1), 2 == _o68 && (_o6b >= 1 && (_o67.saku += 1), _o6c >= 1 && (_o67.kaih += 1), _o69[10] >= 1 && (_o67.houg += 1)), _o67;
        };
    },
    27177: (_o6f, _o6g, _o6h) => {
        'use strict';
        var _o6i = null;
        defineModule(_o6g);
        Object.defineProperty(_o6g, '__esModule', {
            'value': true
        }), _o6g.getSlot415PersonalEffect = void 0;
        var _o6j = _o6h(74496);
        _o6g.getSlot415PersonalEffect = function(_o6k) {
            var _o6l = null,
                _o6m = new _o6j.SlotItemEffectModel(),
                _o6n = [];
            if ('アメリカ' == _o6k.getCountryName() && (_o6m.saku += 1, _o6m.tais += 1, _o6n.push(1)), 95 != _o6k.ctype && 99 != _o6k.ctype && 106 != _o6k.ctype && 110 != _o6k.ctype && 121 != _o6k.ctype || (_o6m.houg += 1, _o6n.push(2)), 0 == _o6n.length) return _o6m;
            var _o6o = _o6k.get_each_level_nums(415),
                _o6p = 0,
                _o6q = 0,
                _o6r = 0;
            return _o6n.length > 0 && (_o6o.forEach(function(_o6s, _o6t) {
                _o6t >= 5 && (_o6p += _o6s), _o6t >= 3 && (_o6q += _o6s), _o6t >= 8 && (_o6r += _o6s);
            }), _o6n.forEach(function(_o6u) {
                var _o6v = null;
                1 == _o6u ? _o6p >= 1 && (_o6m.kaih += 1) : 2 == _o6u && (_o6q >= 1 && (_o6m.kaih += 1), _o6r >= 1 && (_o6m.houg += 1));
            })), _o6m;
        };
    },
    53908: (_o6w, _o6x, _o6y) => {
        'use strict';
        var _o6z = null;
        defineModule(_o6x);
        Object.defineProperty(_o6x, '__esModule', {
            'value': true
        }), _o6x.getSlot419PersonalEffect = void 0;
        var _o70 = _o6y(74496);
        _o6x.getSlot419PersonalEffect = function(_o71) {
            var _o72 = null,
                _o73 = new _o70.SlotItemEffectModel(),
                _o74 = false,
                _o75 = new _o70.SlotItemEffectModel(),
                _o76 = 0;
            if ('アメリカ' == _o71.getCountryName() && (_o75.houg += 2, _o74 = true, _o76 = 1), 0 == _o74) return _o73;
            var _o77 = _o71.get_slotnums(419);
            if (_o73.add(_o75.multiply(_o77)), 0 == _o76) return _o73;
            var _o78 = _o71.get_each_level_nums(419),
                _o79 = 0,
                _o7a = 0;
            return _o76 > 0 && _o78.forEach(function(_o7b, _o7c) {
                _o7c >= 2 && (_o79 += _o7b), _o7c >= 7 && (_o7a += _o7b);
            }), 1 == _o76 && (_o79 >= 1 && (_o73.houg += 1 * _o79), _o7a >= 1 && (_o73.houg += 1 * _o7a)), _o73;
        };
    },
    79813: (_o7d, _o7e, _o7f) => {
        'use strict';
        var _o7g = null;
        defineModule(_o7e);
        Object.defineProperty(_o7e, '__esModule', {
            'value': true
        }), _o7e.getSlot420PersonalEffect = void 0;
        var _o7h = _o7f(74496);
        _o7e.getSlot420PersonalEffect = function(_o7i) {
            var _o7j = null,
                _o7k = new _o7h.SlotItemEffectModel(),
                _o7l = false,
                _o7m = new _o7h.SlotItemEffectModel(),
                _o7n = 0,
                _o7o = _o7i.getCountryName();
            if ('アメリカ' != _o7o && 67 != _o7i.ctype && 78 != _o7i.ctype && 82 != _o7i.ctype && 88 != _o7i.ctype && 108 != _o7i.ctype && 112 != _o7i.ctype || (_o7m.houg += 1, _o7n = 1, _o7l = true), 84 == _o7i.ctype ? (_o7m.houg += 1, _o7l = true) : 78 == _o7i.ctype && (_o7m.houg -= 1, _o7l = true), 7 == _o7i.stype && (_o7m.houg -= 2, _o7m.kaih -= 1, _o7m.souk -= 2, _o7l = true), 0 == _o7l) return _o7k;
            var _o7p = _o7i.get_slotnums(420);
            if (_o7k.add(_o7m.multiply(_o7p)), 0 == _o7n) return _o7k;
            var _o7q = _o7i.get_each_level_nums(420),
                _o7r = 0,
                _o7s = 0,
                _o7t = 0,
                _o7u = 0;
            _o7n > 0 && _o7q.forEach(function(_o7v, _o7w) {
                _o7w >= 3 && (_o7r += _o7v), _o7w >= 7 && (_o7s += _o7v), _o7w >= 8 && (_o7t += _o7v), _o7w >= 9 && (_o7u += _o7v);
            });
            var _o7x = _o7q[10];
            return 1 == _o7n && (_o7r >= 1 && (_o7k.houg += 1 * _o7r), 'アメリカ' == _o7o && (_o7s >= 1 && (_o7k.houm += 1 * _o7s), _o7t >= 1 && (_o7k.houg += 1 * _o7t), _o7u >= 1 && (_o7k.houm += 1 * _o7u), _o7x >= 1 && (_o7k.houg += 1 * _o7x))), _o7k;
        };
    },
    16088: (_o7y, _o7z, _o80) => {
        'use strict';
        var _o81 = null;
        defineModule(_o7z);
        Object.defineProperty(_o7z, '__esModule', {
            'value': true
        }), _o7z.getSlot421PersonalEffect = void 0;
        var _o82 = _o80(74496);
        _o7z.getSlot421PersonalEffect = function(_o83) {
            var _o84 = null,
                _o85 = new _o82.SlotItemEffectModel(),
                _o86 = false,
                _o87 = new _o82.SlotItemEffectModel(),
                _o88 = 0,
                _o89 = _o83.getCountryName();
            if ('アメリカ' != _o89 && 67 != _o83.ctype && 78 != _o83.ctype && 82 != _o83.ctype && 88 != _o83.ctype && 108 != _o83.ctype && 112 != _o83.ctype || (_o87.houg += 2, _o86 = true, _o88 = 1), 84 == _o83.ctype ? (_o87.houg += 1, _o86 = true) : 78 == _o83.ctype && (_o87.houg -= 1, _o86 = true), 7 == _o83.stype && (_o87.houg -= 2, _o87.kaih -= 1, _o87.souk -= 2, _o86 = true), 0 == _o86) return _o85;
            var _o8a = _o83.get_slotnums(421);
            if (_o85.add(_o87.multiply(_o8a)), 0 == _o88) return _o85;
            var _o8b = _o83.get_each_level_nums(421),
                _o8c = 0,
                _o8d = 0,
                _o8e = 0,
                _o8f = 0,
                _o8g = 0;
            _o88 > 0 && _o8b.forEach(function(_o8h, _o8i) {
                _o8i >= 5 && (_o8c += _o8h), _o8i >= 6 && (_o8d += _o8h), _o8i >= 7 && (_o8e += _o8h), _o8i >= 8 && (_o8f += _o8h), _o8i >= 9 && (_o8g += _o8h);
            });
            var _o8j = _o8b[10];
            return 1 == _o88 && (_o8c >= 1 && (_o85.houg += 1 * _o8c), 'アメリカ' == _o89 && (_o8d >= 1 && (_o85.houm += 1 * _o8d), _o8e >= 1 && (_o85.houg += 1 * _o8e), _o8f >= 1 && (_o85.houm += 1 * _o8f), _o8g >= 1 && (_o85.houg += 1 * _o8g), _o8j >= 1 && (_o85.houm += 1 * _o8j))), _o85;
        };
    },
    69939: (_o8k, _o8l, _o8m) => {
        'use strict';
        var _o8n = null;
        defineModule(_o8l);
        Object.defineProperty(_o8l, '__esModule', {
            'value': true
        }), _o8l.getSlot422PersonalEffect = void 0;
        var _o8o = _o8m(74496);
        _o8l.getSlot422PersonalEffect = function(_o8p) {
            var _o8q = null,
                _o8r = new _o8o.SlotItemEffectModel(),
                _o8s = false,
                _o8t = new _o8o.SlotItemEffectModel();
            if ('アメリカ' != _o8p.getCountryName() && 67 != _o8p.ctype && 78 != _o8p.ctype && 82 != _o8p.ctype && 88 != _o8p.ctype && 108 != _o8p.ctype && 112 != _o8p.ctype || (_o8t.houg += 1, _o8t.kaih += 1, _o8s = true), 84 == _o8p.ctype && (_o8t.houg += 1, _o8t.tyku += 1, _o8s = true), 707 == _o8p.ship_id && (_o8t.houg += 2, _o8t.kaih += 2, _o8t.tyku += 2, _o8s = true), 0 == _o8s) return _o8r;
            var _o8u = _o8p.get_slotnums(422);
            return _o8r.add(_o8t.multiply(_o8u)), _o8r;
        };
    },
    33734: (_o8v, _o8w, _o8x) => {
        'use strict';
        var _o8y = null;
        defineModule(_o8w);
        Object.defineProperty(_o8w, '__esModule', {
            'value': true
        }), _o8w.getSlot423PersonalEffect = void 0;
        var _o8z = _o8x(74496);
        _o8w.getSlot423PersonalEffect = function(_o90) {
            var _o91 = null,
                _o92 = new _o8z.SlotItemEffectModel(),
                _o93 = false,
                _o94 = new _o8z.SlotItemEffectModel();
            78 != _o90.ctype && 112 != _o90.ctype || (_o94.houg += 2, _o94.tyku += 2, _o94.kaih += 2, _o94.saku += 2, _o93 = true);
            var _o95 = _o90.getCountryName();
            if (67 == _o90.ctype || 78 == _o90.ctype || 82 == _o90.ctype || 88 == _o90.ctype || 108 == _o90.ctype || 112 == _o90.ctype ? (_o94.houg += 2, _o94.tyku += 2, _o94.kaih += 2, _o94.saku += 2, _o93 = true) : 'アメリカ' == _o95 && (_o94.houg += 1, _o94.tyku += 1, _o94.kaih += 1, _o94.saku += 1, _o93 = true), 0 == _o93) return _o92;
            var _o96 = _o90.get_slotnums(423);
            return _o92.add(_o94.multiply(_o96)), _o92;
        };
    },
    34432: (_o97, _o98, _o99) => {
        'use strict';
        var _o9a = null;
        defineModule(_o98);
        Object.defineProperty(_o98, '__esModule', {
            'value': true
        }), _o98.getSlot424PersonalEffect = void 0;
        var _o9b = _o99(74496);
        _o98.getSlot424PersonalEffect = function(_o9c) {
            var _o9d = null,
                _o9e = new _o9b.SlotItemEffectModel(),
                _o9f = false,
                _o9g = new _o9b.SlotItemEffectModel(),
                _o9h = 0;
            67 != _o9c.ctype && 78 != _o9c.ctype && 82 != _o9c.ctype && 88 != _o9c.ctype && 108 != _o9c.ctype && 112 != _o9c.ctype || (_o9g.houg += 2, _o9g.raig += 3, _o9f = true, _o9h = 1);
            var _o9i = _o9c.get_slotnums(424);
            _o9f && _o9e.add(_o9g.multiply(_o9i));
            var _o9j = _o9c.get_each_level_nums(424),
                _o9k = 0,
                _o9l = 0,
                _o9m = 0;
            _o9j.forEach(function(_o9n, _o9o) {
                _o9o >= 2 && (_o9k += _o9n), _o9o >= 6 && (_o9l += _o9n), _o9o >= 8 && (_o9m += _o9n);
            });
            var _o9p = _o9j[10];
            return 1 == _o9h && (_o9k >= 1 && (_o9e.houg += 1 * _o9k), _o9l >= 1 && (_o9e.houg += 1 * _o9l), _o9m >= 1 && (_o9e.houm += 1 * _o9m)), _o9p > 0 && (_o9e.houm += 1 * _o9p), _o9e;
        };
    },
    97423: (_o9q, _o9r, _o9s) => {
        'use strict';
        var _o9t = null;
        defineModule(_o9r);
        Object.defineProperty(_o9r, '__esModule', {
            'value': true
        }), _o9r.getSlot425PersonalEffect = void 0;
        var _o9u = _o9s(74496);
        _o9r.getSlot425PersonalEffect = function(_o9v) {
            var _o9w = null,
                _o9x = new _o9u.SlotItemEffectModel(),
                _o9y = false,
                _o9z = new _o9u.SlotItemEffectModel(),
                _oa0 = 0;
            67 != _o9v.ctype && 78 != _o9v.ctype && 82 != _o9v.ctype && 88 != _o9v.ctype && 108 != _o9v.ctype && 112 != _o9v.ctype || (_o9z.houg += 2, _o9z.tais += 2, _o9z.raig += 1, _o9z.saku += 1, _o9y = true, _oa0 = 1);
            var _oa1 = _o9v.get_slotnums(425);
            _o9y && _o9x.add(_o9z.multiply(_oa1));
            var _oa2 = _o9v.get_each_level_nums(425),
                _oa3 = 0,
                _oa4 = 0,
                _oa5 = 0,
                _oa6 = 0,
                _oa7 = 0,
                _oa8 = 0;
            _oa2.forEach(function(_oa9, _oaa) {
                _oaa >= 2 && (_oa3 += _oa9), _oaa >= 4 && (_oa4 += _oa9), _oaa >= 6 && (_oa5 += _oa9), _oaa >= 7 && (_oa6 += _oa9), _oaa >= 8 && (_oa7 += _oa9), _oaa >= 9 && (_oa8 += _oa9);
            });
            var _oab = _oa2[10];
            return 1 == _oa0 && (_oa3 >= 1 && (_o9x.tais += 1 * _oa3), _oa4 >= 1 && (_o9x.houg += 1 * _oa4), _oa5 >= 1 && (_o9x.tais += 1 * _oa5), _oa6 >= 1 && (_o9x.houm += 1 * _oa6), _oa7 >= 1 && (_o9x.raig += 1 * _oa7), _oa8 >= 1 && (_o9x.houg += 1 * _oa8), _oab >= 1 && (_o9x.tais += 1 * _oab)), _oa6 >= 1 && (_o9x.houg += 1 * _oa6), _oa7 >= 1 && (_o9x.tais += 1 * _oa7), _oa8 >= 1 && (_o9x.houm += 1 * _oa8), _oab >= 1 && (_o9x.houm += 1 * _oab), _o9x;
        };
    },
    23551: (_oac, _oad, _oae) => {
        'use strict';
        var _oaf = null;
        defineModule(_oad);
        Object.defineProperty(_oad, '__esModule', {
            'value': true
        }), _oad.getSlot430PersonalEffect = void 0;
        var _oag = _oae(74496);
        _oad.getSlot430PersonalEffect = function(_oah) {
            var _oai = null,
                _oaj = new _oag.SlotItemEffectModel(),
                _oak = false,
                _oal = new _oag.SlotItemEffectModel(),
                _oam = 0;
            if (113 == _oah.ctype && (_oal.tyku += 1, _oal.kaih += 1, _oak = true), 58 != _oah.ctype && 61 != _oah.ctype && 64 != _oah.ctype && 68 != _oah.ctype && 80 != _oah.ctype && 92 != _oah.ctype && 113 != _oah.ctype && 124 != _oah.ctype || (_oal.tyku += 2, _oal.kaih += 1, _oak = true, _oam = 1), 0 == _oak) return _oaj;
            var _oan = _oah.get_slotnums(430);
            if (_oaj.add(_oal.multiply(_oan)), 0 == _oam) return _oaj;
            var _oao = _oah.get_each_level_nums(430),
                _oap = 0,
                _oaq = 0,
                _oar = 0;
            if (_oam > 0 && _oao.forEach(function(_oas, _oat) {
                    _oat >= 2 && (_oap += _oas), _oat >= 4 && (_oaq += _oas), _oat >= 7 && (_oar += _oas);
                }), 1 == _oam) {
                _oap >= 1 && (_oaj.kaih += 1 * _oap), _oaq >= 1 && (_oaj.tyku += 1 * _oaq), _oar >= 1 && (_oaj.kaih += 1 * _oar);
                var _oau = _oao[10];
                _oau >= 1 && (_oaj.tyku += 1 * _oau);
            }
            return _oaj;
        };
    },
    6173: (_oav, _oaw, _oax) => {
        'use strict';
        var _oay = null;
        defineModule(_oaw);
        Object.defineProperty(_oaw, '__esModule', {
            'value': true
        }), _oaw.getSlot437PersonalEffect = void 0;
        var _oaz = _oax(74496);
        _oaw.getSlot437PersonalEffect = function(_ob0) {
            var _ob1 = null,
                _ob2 = new _oaz.SlotItemEffectModel(),
                _ob3 = false,
                _ob4 = new _oaz.SlotItemEffectModel();
            if (285 == _ob0.ship_id ? (_ob4.houg += 3, _ob4.tyku += 3, _ob4.kaih += 4, _ob3 = true) : 894 == _ob0.ship_id || 899 == _ob0.ship_id ? (_ob4.houg += 4, _ob4.tyku += 4, _ob4.kaih += 4, _ob3 = true) : 196 == _ob0.ship_id || 197 == _ob0.ship_id ? (_ob4.houg += 2, _ob4.tyku += 2, _ob4.kaih += 3, _ob3 = true) : 508 == _ob0.ship_id || 509 == _ob0.ship_id || 646 == _ob0.ship_id ? (_ob4.houg += 2, _ob4.tyku += 2, _ob4.kaih += 2, _ob3 = true) : 888 != _ob0.ship_id && 883 != _ob0.ship_id && 553 != _ob0.ship_id && 554 != _ob0.ship_id || (_ob4.houg += 1, _ob4.tyku += 2, _ob4.kaih += 2, _ob3 = true), 0 == _ob3) return _ob2;
            var _ob5 = _ob0.get_slotnums(437);
            return _ob2.add(_ob4.multiply(_ob5)), _ob2;
        };
    },
    53709: (_ob6, _ob7, _ob8) => {
        'use strict';
        var _ob9 = null;
        defineModule(_ob7);
        Object.defineProperty(_ob7, '__esModule', {
            'value': true
        }), _ob7.getSlot438PersonalEffect = void 0;
        var _oba = _ob8(74496);
        _ob7.getSlot438PersonalEffect = function(_obb) {
            var _obc = null,
                _obd = new _oba.SlotItemEffectModel(),
                _obe = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_obb.ctype) > -1 && (_obd.tais += 1, _obd.kaih += 1), 160 == _obb.ship_id || 488 == _obb.ship_id || 141 == _obb.ship_id ? (_obd.tais += 1, _obd.kaih += 1) : 145 != _obb.ship_id && 588 != _obb.ship_id && 667 != _obb.ship_id && 578 != _obb.ship_id && 476 != _obb.ship_id && 363 != _obb.ship_id && 961 != _obb.ship_id || (_obe = 1), 'うしお' == _obb.yomi || 'まいかぜ' == _obb.yomi || 'いそかぜ' == _obb.yomi || 'はまかぜ' == _obb.yomi || 'いかづち' == _obb.yomi || 'やまぐも' == _obb.yomi || 'うみかぜ' == _obb.yomi || 'かわかぜ' == _obb.yomi || 'すずかぜ' == _obb.yomi ? _obd.tais += 1 : 'しぐれ' != _obb.yomi && 'やまかぜ' != _obb.yomi && 'かみかぜ' != _obb.yomi && 'はるかぜ' != _obb.yomi && 'みくら' != _obb.yomi && 'いしがき' != _obb.yomi || (_obd.tais += 1, _obd.kaih += 1), 0 == _obe) return _obd;
            var _obf = _obb.get_each_level_nums(438),
                _obg = 0,
                _obh = 0,
                _obi = 0,
                _obj = _obf[10];
            return _obe > 0 && _obf.forEach(function(_obk, _obl) {
                _obl >= 4 && (_obg += _obk), _obl >= 6 && (_obh += _obk), _obl >= 8 && (_obi += _obk);
            }), 1 == _obe && (_obg >= 1 && (_obd.tais += 1), _obh >= 1 && (_obd.kaih += 1), _obi >= 1 && (_obd.tais += 1), _obj >= 1 && (_obd.kaih += 1)), _obd;
        };
    },
    99790: (_obm, _obn, _obo) => {
        'use strict';
        var _obp = null;
        defineModule(_obn);
        Object.defineProperty(_obn, '__esModule', {
            'value': true
        }), _obn.getSlot439PersonalEffect = void 0;
        var _obq = _obo(74496);
        _obn.getSlot439PersonalEffect = function(_obr) {
            var _obs = null,
                _obt = new _obq.SlotItemEffectModel();
            1 != _obr.stype && 2 != _obr.stype && 3 != _obr.stype && 21 != _obr.stype || (_obt.tais += 1, _obt.kaih += 1), 101 != _obr.ctype && 1 != _obr.stype || (_obt.tais += 1);
            var _obu = _obr.getCountryName();
            return 'アメリカ' != _obu && 'イギリス' != _obu || (_obt.tais += 2), _obt;
        };
    },
    18387: (_obv, _obw, _obx) => {
        'use strict';
        var _oby = null;
        defineModule(_obw);
        Object.defineProperty(_obw, '__esModule', {
            'value': true
        }), _obw.getSlot440_441PersonalEffect = void 0;
        var _obz = _obx(74496);
        _obw.getSlot440_441PersonalEffect = function(_oc0) {
            var _oc1 = null,
                _oc2 = new _obz.SlotItemEffectModel();
            return 114 == _oc0.ctype && (_oc2.raig += 2), _oc2;
        };
    },
    70941: (_oc3, _oc4, _oc5) => {
        'use strict';
        var _oc6 = null;
        defineModule(_oc4);
        Object.defineProperty(_oc4, '__esModule', {
            'value': true
        }), _oc4.getSlot442_443PersonalEffect = void 0;
        var _oc7 = _oc5(74496);
        _oc4.getSlot442_443PersonalEffect = function(_oc8) {
            var _oc9 = null,
                _oca = new _oc7.SlotItemEffectModel();
            return 122 == _oc8.ctype ? (_oca.raig += 1, _oca.kaih += 2) : 114 == _oc8.ctype && (_oca.raig += 2), _oca;
        };
    },
    35025: (_ocb, _occ, _ocd) => {
        'use strict';
        var _oce = null;
        defineModule(_occ);
        Object.defineProperty(_occ, '__esModule', {
            'value': true
        }), _occ.getSlot447PersonalEffect = void 0;
        var _ocf = _ocd(74496);
        _occ.getSlot447PersonalEffect = function(_ocg) {
            var _och = null,
                _oci = new _ocf.SlotItemEffectModel(),
                _ocj = _ocg.get_each_level_nums(447),
                _ock = 0,
                _ocl = 0,
                _ocm = 0,
                _ocn = 0;
            _ocj.forEach(function(_oco, _ocp) {
                _ocp >= 2 && (_ock += _oco), _ocp >= 4 && (_ocl += _oco), _ocp >= 6 && (_ocm += _oco), _ocp >= 8 && (_ocn += _oco);
            }), _ock >= 1 && (_oci.houg += 1 * _ock), _ocl >= 1 && (_oci.tyku += 1 * _ocl), _ocm >= 1 && (_oci.tais += 1 * _ocm), _ocn >= 1 && (_oci.kaih += 1 * _ocn);
            var _ocq = _ocj[10];
            _ocq >= 1 && (_oci.tais += 1 * _ocq);
            var _ocr = false,
                _ocs = new _ocf.SlotItemEffectModel();
            if (76 == _ocg.ctype && (_ocs.houg += 1, _ocs.tais += 1, _ocs.kaih += 2, _ocr = true), 'うんよう' == _ocg.yomi ? (_ocs.houg += 1, _ocs.tais += 1, _ocs.kaih += 1, _ocr = true) : 'ほうしょう' != _ocg.yomi && 'たいげい・りゅうほう' != _ocg.yomi || (_ocs.houg += 1, _ocs.tais += 2, _ocs.kaih += 1, _ocr = true), 0 == _ocr) return _oci;
            894 != _ocg.ship_id && 899 != _ocg.ship_id || (_ocs.houg += 1, _ocs.kaih += 1, _ocs.tais += 1, _ocs.tyku += 1, _ocr = true);
            var _oct = _ocg.get_slotnums(447);
            return _oci.add(_ocs.multiply(_oct)), _oci;
        };
    },
    96804: (_ocu, _ocv, _ocw) => {
        'use strict';
        var _ocx = null;
        defineModule(_ocv);
        Object.defineProperty(_ocv, '__esModule', {
            'value': true
        }), _ocv.getSlot450PersonalEffect = void 0;
        var _ocy = _ocw(74496);
        _ocv.getSlot450PersonalEffect = function(_ocz) {
            var _od0 = null,
                _od1 = new _ocy.SlotItemEffectModel(),
                _od2 = false,
                _od3 = new _ocy.SlotItemEffectModel();
            if (101 == _ocz.ctype && (_od3.houg += 1, _od3.tyku += 2, _od3.souk += 1, _od3.kaih += 3, _od2 = true), 1 == _ocz.stype && (_od3.tyku += 1, _od3.souk += 1, _od3.kaih += 2, _od2 = true), 0 == _od2) return _od1;
            var _od4 = _ocz.get_slotnums(450);
            return _od1.add(_od3.multiply(_od4)), _od1;
        };
    },
    33896: (_od5, _od6, _od7) => {
        'use strict';
        var _od8 = null;
        defineModule(_od6);
        Object.defineProperty(_od6, '__esModule', {
            'value': true
        }), _od6.getSlot451PersonalEffect = void 0;
        var _od9 = _od7(74496);
        _od6.getSlot451PersonalEffect = function(_oda) {
            var _odb = null,
                _odc = new _od9.SlotItemEffectModel(),
                _odd = false,
                _ode = new _od9.SlotItemEffectModel(),
                _odf = 0;
            if ('あきつまる' == _oda.yomi ? (_ode.houg += 1, _ode.tais += 2, _odd = true, 166 == _oda.ship_id && (_odf = 2)) : 'やましおまる' == _oda.yomi && (_ode.houg += 1, _ode.tais += 3, _odd = true, _odf = 1), 0 == _odd) return _odc;
            var _odg = _oda.get_slotnums(451);
            if (_odc.add(_ode.multiply(_odg)), 0 == _odf) return _odc;
            var _odh = _oda.get_each_level_nums(451),
                _odi = [];
            return _odf > 0 && _odh.forEach(function(_odj, _odk) {
                var _odl = null;
                for (var _odm = 1; _odm <= _oda.SLOT_LEVEL_MAX; _odm++) _odk >= _odm && (null == _odi[_odm] && (_odi[_odm] = 0), _odi[_odm] += _odj);
            }), 1 == _odf ? (_odi[1] >= 1 && (_odc.houg += 2 * _odi[1]), _odi[2] >= 1 && (_odc.houm += 1 * _odi[2]), _odi[3] >= 1 && (_odc.tais += 1 * _odi[3]), _odi[4] >= 1 && (_odc.houg += 1 * _odi[4]), _odi[6] >= 1 && (_odc.houm += 1 * _odi[6]), _odi[8] >= 1 && (_odc.tais += 1 * _odi[8]), _odi[10] >= 1 && (_odc.houg += 1 * _odi[10])) : 2 == _odf && (_odi[1] >= 1 && (_odc.houg += 1 * _odi[1]), _odi[3] >= 1 && (_odc.tais += 1 * _odi[3]), _odi[5] >= 1 && (_odc.houm += 1 * _odi[5]), _odi[7] >= 1 && (_odc.tais += 1 * _odi[7]), _odi[10] >= 1 && (_odc.houg += 1 * _odi[10])), _odc;
        };
    },
    11031: function(_odn, _odo, _odp) {
        'use strict';
        var _odq = null;
        var _odr = this && this.__importDefault || function(_ods) {
            var _odt = null;
            return _ods && _ods.__esModule ? _ods : {
                'default': _ods
            };
        };
        defineModule(_odo);
        Object.defineProperty(_odo, '__esModule', {
            'value': true
        }), _odo.getSlot455PersonalEffect = void 0;
        var _odu = _odp(74496),
            _odv = _odr(_odp(18622));
        _odo.getSlot455PersonalEffect = function(_odw) {
            var _odx = null,
                _ody = new _odu.SlotItemEffectModel(),
                _odz = false,
                _oe0 = new _odu.SlotItemEffectModel(),
                _oe1 = 0,
                _oe2 = _odw.get_slotnums(455);
            if (1 != _odw.ctype && 5 != _odw.ctype && 12 != _odw.ctype || (_oe0.houg += 2, _oe0.tyku += 1, 12 == _odw.ctype && (_oe0.houg += 1), 666 == _odw.ship_id ? (_oe0.houg += 1, _oe0.tais += 1) : 959 == _odw.ship_id && (_oe0.houg += 2, _oe2 >= 2 && (_ody.houg += 2), _oe2 >= 3 && (_ody.houg += 3)), _oe1 = 1, _odz = true), 'うらなみ' == _odw.yomi && (_oe0.houg += 1, 647 == _odw.ship_id && (_oe0.houg += 1, _oe0.raig += 1, _oe0.tais += 1, _oe0.kaih += 1), _odz = true), 0 == _odz) return _ody;
            if (_ody.add(_oe0.multiply(_oe2)), 0 == _oe1) return _ody;
            for (var _oe3 = 0, _oe4 = 0, _oe5 = 0, _oe6 = _odw.have_slot_ids(); _oe5 < _oe6.length; _oe5++) {
                var _oe7 = _oe6[_oe5],
                    _oe8 = _odv.default.model.slot.getMst(_oe7),
                    _oe9 = _oe8.equipType;
                12 != _oe9 && 13 != _oe9 || (_oe8.sakuteki >= 5 && (_oe3 += _odw.get_slotnums(parseInt(_oe7))), _oe8.taiku >= 2 && (_oe4 += _odw.get_slotnums(parseInt(_oe7))));
            }
            if (1 == _oe1) {
                _oe3 >= 1 && (_ody.houg += 3, _ody.kaih += 2, _ody.raig += 1);
                var _oea = _odw.get_slotnums(13),
                    _oeb = _odw.get_slotnums(125),
                    _oec = _odw.get_slotnums(285),
                    _oed = _oea + _oeb + _oec;
                1 == _oed ? (_ody.houg += 1, _ody.raig += 3) : _oed >= 2 && (_ody.houg += 2, _ody.raig += 5), _oec >= 1 && (_ody.raig += 1), _oe4 >= 1 && (_ody.tyku += 4);
            }
            return _ody;
        };
    },
    71383: (_oee, _oef, _oeg) => {
        'use strict';
        var _oeh = null;
        defineModule(_oef);
        Object.defineProperty(_oef, '__esModule', {
            'value': true
        }), _oef.getSlot456PersonalEffect = void 0;
        var _oei = _oeg(74496);
        _oef.getSlot456PersonalEffect = function(_oej) {
            var _oek = null,
                _oel = new _oei.SlotItemEffectModel(),
                _oem = false,
                _oen = new _oei.SlotItemEffectModel(),
                _oeo = _oej.getCountryName();
            if ('アメリカ' == _oeo && (_oen.houg += 3, _oen.kaih += 4, _oen.saku += 4, _oel.houm += 3, _oem = true), 'イギリス' != _oeo && 'オーストラリア' != _oeo || (_oen.houg += 2, _oen.kaih += 2, _oen.saku += 2, _oel.houm += 2, _oem = true), 87 != _oej.ctype && 91 != _oej.ctype || (_oen.houg += 1, _oel.leng += 1, _oem = true), 651 != _oej.ship_id && 656 != _oej.ship_id || (_oel.houg += 2, _oel.kaih += 2, _oel.saku += 3, _oel.leng += 1, _oel.houm += 2), 0 == _oem) return _oel;
            var _oep = _oej.get_slotnums(456);
            return _oel.add(_oen.multiply(_oep)), _oel;
        };
    },
    55888: (_oeq, _oer, _oes) => {
        'use strict';
        var _oet = null;
        defineModule(_oer);
        Object.defineProperty(_oer, '__esModule', {
            'value': true
        }), _oer.getSlot457PersonalEffect = void 0;
        var _oeu = _oes(74496);
        _oer.getSlot457PersonalEffect = function(_oev) {
            var _oew = null,
                _oex = new _oeu.SlotItemEffectModel(),
                _oey = 0;
            if (109 == _oev.ctype ? (_oex.raig += 3, _oex.kaih += 3, _oey = 1) : 71 == _oev.ctype || 103 == _oev.ctype ? (_oex.raig += 2, _oex.kaih += 2, _oey = 2) : 44 == _oev.ctype && (_oex.raig += 1, _oex.kaih += 4, _oey = 3), 0 == _oey) return _oex;
            var _oez = _oev.get_each_level_nums(461),
                _of0 = [];
            return _oey > 0 && _oez.forEach(function(_of1, _of2) {
                var _of3 = null;
                for (var _of4 = 1; _of4 <= _oev.SLOT_LEVEL_MAX; _of4++) null == _of0[_of4] && (_of0[_of4] = 0), _of2 >= _of4 && (_of0[_of4] += _of1);
            }), 1 == _oey ? (_of0[2] >= 1 && (_oex.raig += 1 * _of0[2]), _of0[3] >= 1 && (_oex.kaih += 1 * _of0[3]), _of0[4] >= 1 && (_oex.raig += 1 * _of0[4]), _of0[5] >= 1 && (_oex.houm += 1 * _of0[5]), _of0[6] >= 1 && (_oex.raig += 1 * _of0[6]), _of0[8] >= 1 && (_oex.raig += 1 * _of0[8]), _of0[10] >= 1 && (_oex.houm += 1 * _of0[10])) : 2 == _oey ? (_of0[3] >= 1 && (_oex.kaih += 1 * _of0[3]), _of0[4] >= 1 && (_oex.raig += 1 * _of0[4]), _of0[6] >= 1 && (_oex.raig += 1 * _of0[6]), _of0[8] >= 1 && (_oex.raig += 1 * _of0[8]), _of0[10] >= 1 && (_oex.houm += 1 * _of0[10])) : 3 == _oey && (_of0[4] >= 1 && (_oex.raig += 1 * _of0[4]), _of0[6] >= 1 && (_oex.raig += 1 * _of0[6]), _of0[8] >= 1 && (_oex.raig += 1 * _of0[8]), _of0[10] >= 1 && (_oex.houm += 1 * _of0[10])), _oex;
        };
    },
    2258: (_of5, _of6, _of7) => {
        'use strict';
        var _of8 = null;
        defineModule(_of6);
        Object.defineProperty(_of6, '__esModule', {
            'value': true
        }), _of6.getSlot458PersonalEffect = void 0;
        var _of9 = _of7(74496);
        _of6.getSlot458PersonalEffect = function(_ofa) {
            var _ofb = null,
                _ofc = new _of9.SlotItemEffectModel(),
                _ofd = 0,
                _ofe = false;
            if (13 != _ofa.stype && 14 != _ofa.stype || (_ofe = true), 109 == _ofa.ctype ? (_ofc.raig += 3, _ofc.kaih += 6, _ofd = 1) : 71 == _ofa.ctype || 103 == _ofa.ctype ? (_ofc.raig += 3, _ofc.kaih += 4, _ofd = 2) : 44 == _ofa.ctype && (_ofc.raig += 3, _ofc.kaih += 3, _ofd = 3), 0 == _ofe && 0 == _ofd) return _ofc;
            var _off = [];
            [458, 461].forEach(function(_ofg) {
                var _ofh = null,
                    _ofi = _ofa.get_each_level_nums(_ofg);
                null == _off[_ofg] && (_off[_ofg] = []), _ofi.forEach(function(_ofj, _ofk) {
                    var _ofl = null;
                    for (var _ofm = 1; _ofm <= _ofa.SLOT_LEVEL_MAX; _ofm++) null == _off[_ofg][_ofm] && (_off[_ofg][_ofm] = 0), _ofk >= _ofm && (_off[_ofg][_ofm] += _ofj);
                });
            });
            var _ofn = _off[458][2],
                _ofo = _off[458][3],
                _ofp = _off[458][4],
                _ofq = _off[458][5],
                _ofr = _off[458][6],
                _ofs = _off[458][8],
                _oft = _off[458][10],
                _ofu = _off[461][4];
            return _ofd >= 1 && _ofd <= 3 && (_ofp >= 1 && (_ofc.houm += 1 * _ofp), _ofr >= 1 && (_ofc.kaih += 1 * _ofr), _ofs >= 1 && (_ofc.raig += 1 * _ofs)), _ofe && (_ofo >= 1 && (_ofc.kaih += 1 * _ofo), _ofq >= 1 && (_ofc.raig += 1 * _ofq), _oft >= 1 && (_ofc.houm += 1 * _oft), _ofn >= 1 && _ofu >= 1 && (_ofc.raig += 7, _ofc.houm += 5)), _ofc;
        };
    },
    43768: (_ofv, _ofw, _ofx) => {
        'use strict';
        var _ofy = null;
        defineModule(_ofw);
        Object.defineProperty(_ofw, '__esModule', {
            'value': true
        }), _ofw.getSlot463PersonalEffect = void 0;
        var _ofz = _ofx(74496);
        _ofw.getSlot463PersonalEffect = function(_og0) {
            var _og1 = null,
                _og2 = new _ofz.SlotItemEffectModel(),
                _og3 = false,
                _og4 = new _ofz.SlotItemEffectModel(),
                _og5 = _og0.get_slotnums(142),
                _og6 = _og0.get_slotnums(460),
                _og7 = _og5 + _og6;
            if (37 == _og0.ctype && (_og4.houg += 1, _og4.tyku += 2, _og4.kaih += 1, _og4.houm += 1, _og7 >= 1 && (_og2.tyku += 1, _og2.kaih += 1, _og2.houm += 1), _og3 = true), 916 != _og0.ship_id && 911 != _og0.ship_id && 546 != _og0.ship_id || (_og4.houg += 1, _og4.kaih += 1, _og4.houm += 2, _og6 >= 1 && (_og2.houg += 1, _og2.kaih += 1, _og2.houm += 2), _og3 = true), 0 == _og3) return _og2;
            var _og8 = _og0.get_slotnums(463);
            return _og2.add(_og4.multiply(_og8)), _og2;
        };
    },
    92174: (_og9, _oga, _ogb) => {
        'use strict';
        var _ogc = null;
        defineModule(_oga);
        Object.defineProperty(_oga, '__esModule', {
            'value': true
        }), _oga.getSlot464PersonalEffect = void 0;
        var _ogd = _ogb(74496);
        _oga.getSlot464PersonalEffect = function(_oge) {
            var _ogf = null,
                _ogg = new _ogd.SlotItemEffectModel(),
                _ogh = false,
                _ogi = new _ogd.SlotItemEffectModel(),
                _ogj = _oge.get_slotnums(142),
                _ogk = _oge.get_slotnums(460),
                _ogl = _ogj + _ogk;
            if (37 == _oge.ctype ? (_ogi.tyku += 3, _ogi.kaih += 2, _ogl >= 1 && (_ogg.tyku += 2, _ogg.kaih += 1, _ogg.houm += 1), _ogh = true) : 6 != _oge.ctype && 73 != _oge.ctype && 113 != _oge.ctype || (_ogi.tyku = _ogi.tyku - 2, _ogi.kaih = _ogi.kaih - 2, _ogh = true), 916 != _oge.ship_id && 911 != _oge.ship_id && 546 != _oge.ship_id && 593 != _oge.ship_id && 954 != _oge.ship_id || (_ogi.tyku += 2, _ogi.kaih += 2, _ogk >= 1 && (_ogg.houg += 2, _ogg.tyku += 2, _ogg.kaih += 2, _ogg.houm += 3), _ogh = true), 0 == _ogh) return _ogg;
            var _ogm = _oge.get_slotnums(464);
            return _ogg.add(_ogi.multiply(_ogm)), _ogg;
        };
    },
    38003: (_ogn, _ogo, _ogp) => {
        'use strict';
        var _ogq = null;
        defineModule(_ogo);
        Object.defineProperty(_ogo, '__esModule', {
            'value': true
        }), _ogo.getSlot465PersonalEffect = void 0;
        var _ogr = _ogp(74496);
        _ogo.getSlot465PersonalEffect = function(_ogs) {
            var _ogt = null,
                _ogu = new _ogr.SlotItemEffectModel(),
                _ogv = false,
                _ogw = new _ogr.SlotItemEffectModel(),
                _ogx = _ogs.get_slotnums(142),
                _ogy = _ogs.get_slotnums(460),
                _ogz = _ogx + _ogy;
            if (916 == _ogs.ship_id ? (_ogw.houg += 2, _ogw.kaih += 8, _ogw.houm += 2, _ogy >= 1 && (_ogu.kaih += 2, _ogu.houm += 1), _ogv = true) : 911 != _ogs.ship_id && 546 != _ogs.ship_id || (_ogw.houg += 1, _ogw.kaih += 2, _ogw.houm += 1, _ogy >= 1 && (_ogu.kaih += 1, _ogu.houm += 1), _ogv = true), 37 == _ogs.ctype && _ogz >= 1 && (_ogu.houg += 2, _ogu.houm += 2), 0 == _ogv) return _ogu;
            var _oh0 = _ogs.get_slotnums(465);
            return _ogu.add(_ogw.multiply(_oh0)), _ogu;
        };
    },
    65455: (_oh1, _oh2, _oh3) => {
        'use strict';
        var _oh4 = null;
        defineModule(_oh2);
        Object.defineProperty(_oh2, '__esModule', {
            'value': true
        }), _oh2.getSlot466PersonalEffect = void 0;
        var _oh5 = _oh3(74496);
        _oh2.getSlot466PersonalEffect = function(_oh6) {
            var _oh7 = null,
                _oh8 = new _oh5.SlotItemEffectModel(),
                _oh9 = false,
                _oha = new _oh5.SlotItemEffectModel();
            if (277 == _oh6.ship_id || 278 == _oh6.ship_id || 156 == _oh6.ship_id || 288 == _oh6.ship_id || 112 == _oh6.ship_id || 280 == _oh6.ship_id || 279 == _oh6.ship_id ? (_oha.houg += 1, _oha.houm += 1, _oh9 = true) : 461 == _oh6.ship_id || 462 == _oh6.ship_id || 466 == _oh6.ship_id || 467 == _oh6.ship_id ? (_oha.houg += 2, _oha.kaih += 2, _oha.houm += 1, _oh9 = true) : 594 != _oh6.ship_id && 698 != _oh6.ship_id && 646 != _oh6.ship_id && 599 != _oh6.ship_id && 610 != _oh6.ship_id && 196 != _oh6.ship_id && 197 != _oh6.ship_id || (_oha.houg += 1, _oha.kaih += 1, _oha.houm += 2, _oh9 = true), 0 == _oh9) return _oh8;
            var _ohb = _oh6.get_slotnums(466);
            return _oh8.add(_oha.multiply(_ohb)), _oh8;
        };
    },
    70362: (_ohc, _ohd, _ohe) => {
        'use strict';
        var _ohf = null;
        defineModule(_ohd);
        Object.defineProperty(_ohd, '__esModule', {
            'value': true
        }), _ohd.getSlot467PersonalEffect = void 0;
        var _ohg = _ohe(74496);
        _ohd.getSlot467PersonalEffect = function(_ohh) {
            var _ohi = null,
                _ohj = new _ohg.SlotItemEffectModel(),
                _ohk = false,
                _ohl = new _ohg.SlotItemEffectModel();
            if ('アメリカ' == _ohh.getCountryName()) {
                for (var _ohm = _ohh.getUSSWaterRaderDict(), _ohn = _ohh.getUSSAirRaderDict(), _oho = 0, _ohp = 0, _ohq = 0, _ohr = _ohh.have_slot_ids(); _ohq < _ohr.length; _ohq++) {
                    var _ohs = _ohr[_ohq];
                    _ohm[parseInt(_ohs)] && (_oho += _ohh.get_slotnums(parseInt(_ohs))), _ohn[parseInt(_ohs)] && (_ohp += _ohh.get_slotnums(parseInt(_ohs)));
                }
                _ohl.houg += 1, _ohl.tyku += 1, _ohl.kaih += 2, _oho >= 1 && (_ohj.houg += 1, _ohj.tyku += 1, _ohj.kaih += 1, _ohj.houm += 2), _ohp >= 1 && (_ohj.tyku += 2, _ohj.kaih += 2), 65 != _ohh.ctype && 93 != _ohh.ctype && 102 != _ohh.ctype && 107 != _ohh.ctype && 125 != _ohh.ctype || (_ohl.tyku += 2, _ohl.kaih += 1), _ohk = true;
            }
            if (0 == _ohk) return _ohj;
            var _oht = _ohh.get_slotnums(467);
            return _ohj.add(_ohl.multiply(_oht)), _ohj;
        };
    },
    68086: (_ohu, _ohv, _ohw) => {
        'use strict';
        var _ohx = null;
        defineModule(_ohv);
        Object.defineProperty(_ohv, '__esModule', {
            'value': true
        }), _ohv.getSlot470PersonalEffect = void 0;
        var _ohy = _ohw(74496);
        _ohv.getSlot470PersonalEffect = function(_ohz) {
            var _oi0 = null,
                _oi1 = new _ohy.SlotItemEffectModel(),
                _oi2 = false,
                _oi3 = new _ohy.SlotItemEffectModel(),
                _oi4 = _ohz.get_slotnums(470),
                _oi5 = _ohz.get_slotnums(529),
                _oi6 = _oi4 + _oi5,
                _oi7 = _ohz.get_each_level_over_nums([470, 529]),
                _oi8 = (_oi7.slot[470], _oi7.slot[529]),
                _oi9 = _oi7.total,
                _oia = 0;
            23 == _ohz.ctype || 18 == _ohz.ctype ? (_oi3.houg += 1, _oi2 = true, _oia = 1) : 30 == _ohz.ctype && (_oi3.houg += 2, _oi2 = true, _oia = 2), ('しぐれ' == _ohz.yomi || 'ゆきかぜ' == _ohz.yomi || 'いそかぜ' == _ohz.yomi) && (_oi3.kaih += 2, _oi2 = true), 405 == _ohz.ship_id || 246 == _ohz.ship_id || 144 == _ohz.ship_id || 145 == _ohz.ship_id || 497 == _ohz.ship_id ? (_oi5 >= 1 && (_oi1.houg += 1 * _oi5, _oi1.tyku += 1 * _oi5, _oi1.houm += 1 * _oi5, _oi1.kaih += 1 * _oi5), 2 == _oi5 ? _oi1.houg += 1 : _oi5 >= 3 && (_oi1.houg += 3), _oi8[8] >= 1 && (_oi1.tyku += 1 * _oi8[8]), _oi8[10] >= 1 && (_oi1.houg += 1 * _oi8[10])) : 323 == _ohz.ship_id || 498 == _ohz.ship_id || 961 == _ohz.ship_id ? (_oi5 >= 1 && (_oi1.houg += 2 * _oi5, _oi1.tyku += 2 * _oi5, _oi1.houm += 1 * _oi5, _oi1.kaih += 1 * _oi5), 2 == _oi5 ? _oi1.houg += 2 : _oi5 >= 3 && (_oi1.houg += 4), _oi8[6] >= 1 && (_oi1.tyku += 1 * _oi8[6]), _oi8[8] >= 1 && (_oi1.houm += 1 * _oi8[8]), _oi8[10] >= 1 && (_oi1.houg += 1 * _oi8[10])) : 975 == _ohz.ship_id && (_oi5 >= 1 && (_oi1.houg += 3 * _oi5, _oi1.tyku += 3 * _oi5, _oi1.houm += 2 * _oi5, _oi1.kaih += 2 * _oi5), 2 == _oi5 ? _oi1.houg += 3 : _oi5 >= 3 && (_oi1.houg += 6), _oi8[4] >= 1 && (_oi1.tyku += 1 * _oi8[4]), _oi8[6] >= 1 && (_oi1.houg += 1 * _oi8[6]), _oi8[8] >= 1 && (_oi1.houm += 1 * _oi8[8]), _oi8[10] >= 1 && (_oi1.houg += 1 * _oi8[10])), 961 == _ohz.ship_id && (_oi3.houg += 3, _oi3.houm += 3, _oi3.kaih += 2, _oi2 = true), 566 != _ohz.ship_id && 567 != _ohz.ship_id && 568 != _ohz.ship_id && 656 != _ohz.ship_id && 670 != _ohz.ship_id && 915 != _ohz.ship_id && 651 != _ohz.ship_id && 145 != _ohz.ship_id && 961 != _ohz.ship_id && 951 != _ohz.ship_id || (_oi1.houg += 1, _oi1.houm += 2, _oi6 >= 2 && (_oi1.houg += 2), _oi9[5] >= 1 && (_oi1.houm += 1 * _oi9[5]), _oi9[8] >= 1 && (_oi1.houg += 1 * _oi9[8]), _oi9[10] >= 1 && (_oi1.houm += 1 * _oi9[10])), _oi2 && _oi1.add(_oi3.multiply(_oi6));
            var _oib = _ohz.get_have_rader_nums(),
                _oic = _oib.water_rader,
                _oid = _oib.air_rader;
            return _oic >= 1 && (1 == _oia ? (_oi1.houg += 1, _oi1.raig += 3, _oi1.kaih += 1, _oi1.houm += 1) : 2 == _oia && (_oi1.houg += 2, _oi1.raig += 3, _oi1.kaih += 1, _oi1.houm += 3)), _oid >= 1 && (_oi5 >= 1 && (_oi1.tyku += 2, _oi1.kaih += 2), 2 == _oi5 ? _oi1.tyku += 2 : _oi5 >= 3 && (_oi1.tyku += 4)), _oi1;
        };
    },
    78173: (_oie, _oif, _oig) => {
        'use strict';
        var _oih = null;
        defineModule(_oif);
        Object.defineProperty(_oif, '__esModule', {
            'value': true
        }), _oif.getSlot471PersonalEffect = void 0;
        var _oii = _oig(74496);
        _oif.getSlot471PersonalEffect = function(_oij) {
            var _oik = null,
                _oil = new _oii.SlotItemEffectModel(),
                _oim = false,
                _oin = new _oii.SlotItemEffectModel(),
                _oio = 0;
            if ('フランス' == _oij.getCountryName() && (_oin.houg += 2, _oin.kaih += 2, _oin.houm += 2, _oim = true, _oio = 1), 79 == _oij.ctype && (_oin.houg += 2, _oin.houm += 1, _oim = true), 0 == _oim) return _oil;
            var _oip = _oij.get_slotnums(471);
            if (_oil.add(_oin.multiply(_oip)), 0 == _oio) return _oil;
            var _oiq = _oij.get_each_level_nums(471),
                _oir = 0,
                _ois = 0;
            if (_oio > 0 && _oiq.forEach(function(_oit, _oiu) {
                    _oiu >= 6 && (_oir += _oit), _oiu >= 8 && (_ois += _oit);
                }), 1 == _oio) {
                _oir >= 1 && (_oil.kaih += 1 * _oir, _oil.houm += 1 * _oir), _ois >= 1 && (_oil.houg += 1 * _ois, _oil.kaih += 1 * _ois, _oil.houm += 1 * _ois);
                var _oiv = _oiq[10];
                _oiv >= 1 && (_oil.houg += 1 * _oiv, _oil.houm += 1 * _oiv);
            }
            return _oil;
        };
    },
    22581: (_oiw, _oix, _oiy) => {
        'use strict';
        var _oiz = null;
        defineModule(_oix);
        Object.defineProperty(_oix, '__esModule', {
            'value': true
        }), _oix.getSlot472PersonalEffect = void 0;
        var _oj0 = _oiy(74496);
        _oix.getSlot472PersonalEffect = function(_oj1) {
            var _oj2 = null,
                _oj3 = new _oj0.SlotItemEffectModel(),
                _oj4 = false,
                _oj5 = new _oj0.SlotItemEffectModel(),
                _oj6 = _oj1.getCountryName();
            if ('アメリカ' == _oj6 && (_oj5.tais += 2, _oj4 = true), 'イギリス' == _oj6 && (_oj5.tais += 1, _oj4 = true), 1 == _oj1.stype && (_oj5.kaih += 1, _oj4 = true), _oj4) {
                var _oj7 = _oj1.get_slotnums(472);
                _oj3.add(_oj5.multiply(_oj7));
            }
            return 920 == _oj1.ship_id && (_oj3.tais += 1, _oj3.kaih += 1, _oj3.houm += 1), _oj3;
        };
    },
    13053: (_oj8, _oj9, _oja) => {
        'use strict';
        var _ojb = null;
        defineModule(_oj9);
        Object.defineProperty(_oj9, '__esModule', {
            'value': true
        }), _oj9.getSlot473PersonalEffect = void 0;
        var _ojc = _oja(74496);
        _oj9.getSlot473PersonalEffect = function(_ojd) {
            var _oje = null,
                _ojf = new _ojc.SlotItemEffectModel(),
                _ojg = false,
                _ojh = new _ojc.SlotItemEffectModel(),
                _oji = _ojd.getCountryName();
            if ('アメリカ' == _oji && (_ojh.houg += 1, _ojh.kaih += 1, _ojh.tyku += 1, _ojg = true), 'イギリス' == _oji && (_ojh.houg += 1, _ojh.kaih += 1, _ojg = true), 0 == _ojg) return _ojf;
            var _ojj = _ojd.get_slotnums(473);
            return _ojf.add(_ojh.multiply(_ojj)), _ojf;
        };
    },
    47874: (_ojk, _ojl, _ojm) => {
        'use strict';
        var _ojn = null;
        defineModule(_ojl);
        Object.defineProperty(_ojl, '__esModule', {
            'value': true
        }), _ojl.getSlot474PersonalEffect = void 0;
        var _ojo = _ojm(74496);
        _ojl.getSlot474PersonalEffect = function(_ojp) {
            var _ojq = null,
                _ojr = new _ojo.SlotItemEffectModel(),
                _ojs = false,
                _ojt = new _ojo.SlotItemEffectModel(),
                _oju = _ojp.getCountryName();
            if ('アメリカ' == _oju && (_ojt.houg += 2, _ojt.kaih += 1, _ojt.tyku += 1, _ojs = true), 'イギリス' == _oju && (_ojt.houg += 1, _ojt.kaih += 1, _ojt.tyku += 1, _ojs = true), 'フランス' == _oju && (_ojt.houg += 1, _ojt.tyku += 1, _ojs = true), 707 != _ojp.ship_id && 930 != _ojp.ship_id || (_ojt.houg += 1, _ojt.kaih += 1, _ojs = true), 0 == _ojs) return _ojr;
            var _ojv = _ojp.get_slotnums(474);
            return _ojr.add(_ojt.multiply(_ojv)), _ojr;
        };
    },
    42788: (_ojw, _ojx, _ojy) => {
        'use strict';
        var _ojz = null;
        defineModule(_ojx);
        Object.defineProperty(_ojx, '__esModule', {
            'value': true
        }), _ojx.getSlot478PersonalEffect = void 0;
        var _ok0 = _ojy(74496);
        _ojx.getSlot478PersonalEffect = function(_ok1) {
            var _ok2 = null,
                _ok3 = new _ok0.SlotItemEffectModel(),
                _ok4 = _ok1.get_each_level_nums(478),
                _ok5 = [];
            return _ok4.forEach(function(_ok6, _ok7) {
                var _ok8 = null;
                for (var _ok9 = 1; _ok9 <= _ok1.SLOT_LEVEL_MAX; _ok9++) _ok7 >= _ok9 && (null == _ok5[_ok9] && (_ok5[_ok9] = 0), _ok5[_ok9] += _ok6);
            }), _ok5.every(function(_oka) {
                return 0 == _oka;
            }) || (_ok5[1] >= 1 && (_ok3.houg += 1), _ok5[2] >= 1 && (_ok3.houm += 1), _ok5[3] >= 1 && (_ok3.kaih += 1), _ok5[4] >= 1 && (_ok3.baku += 1), _ok5[5] >= 1 && (_ok3.raig += 1), _ok5[6] >= 1 && (_ok3.tyku += 1), _ok5[7] >= 1 && (_ok3.houg += 1), _ok5[8] >= 1 && (_ok3.houm += 1), _ok5[9] >= 1 && (_ok3.kaih += 1), _ok5[10] >= 1 && (_ok3.houg += 1)), _ok3;
        };
    },
    22218: (_okb, _okc, _okd) => {
        'use strict';
        var _oke = null;
        defineModule(_okc);
        Object.defineProperty(_okc, '__esModule', {
            'value': true
        }), _okc.getSlot47PersonalEffect = void 0;
        var _okf = _okd(74496);
        _okc.getSlot47PersonalEffect = function(_okg) {
            var _okh = null,
                _oki = new _okf.SlotItemEffectModel(),
                _okj = new _okf.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_okg.yomi) >= 0 ? (_okj.tais += 3, _okj.kaih += 2, _okj.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_okg.yomi) >= 0 && (_okj.tais += 2, _okj.kaih += 2), !_okj.exists()) return _oki;
            var _okk = _okg.get_slotnums(47) + _okg.get_slotnums(438);
            return _oki = _okj.multiply(_okk);
        };
    },
    57664: (_okl, _okm, _okn) => {
        'use strict';
        var _oko = null;
        defineModule(_okm);
        Object.defineProperty(_okm, '__esModule', {
            'value': true
        }), _okm.getSlot483PersonalEffect = void 0;
        var _okp = _okn(74496);
        _okm.getSlot483PersonalEffect = function(_okq) {
            var _okr = null,
                _oks = new _okp.SlotItemEffectModel(),
                _okt = 0,
                _oku = 0,
                _okv = 0,
                _okw = 0,
                _okx = 0,
                _oky = 0,
                _okz = 0;
            if (6 == _okq.ctype ? (_oks.houg += 2, _oks.tyku += 3, _oks.houm += 1, _okt = 1) : 2 == _okq.ctype ? (_oks.houg += 1, _oks.tyku += 2, _oks.kaih += 2, _oks.houm += 1, _oku = 1) : 37 == _okq.ctype && (_okv = 1), 8 == _okq.stype || 9 == _okq.stype || 10 == _okq.stype ? _okw = 1 : 5 != _okq.stype && 6 != _okq.stype || (_okx = 1), 149 == _okq.ship_id ? (_oks.houg += 2, _oks.tyku += 2) : 591 == _okq.ship_id ? (_oks.houg += 3, _oks.tyku += 3, _oks.kaih += 1) : 150 == _okq.ship_id ? (_oks.houg += 1, _oks.tyku += 1) : 592 == _okq.ship_id ? (_oks.houg += 2, _oks.tyku += 2, _oks.kaih += 2) : 151 == _okq.ship_id ? (_oks.houg += 1, _oks.tyku += 2, _oks.kaih += 2) : 593 == _okq.ship_id ? (_oks.houg += 2, _oks.tyku += 5, _oks.kaih += 3) : 954 == _okq.ship_id ? (_oks.houg += 2, _oks.tyku += 4, _oks.kaih += 2) : 152 == _okq.ship_id ? (_oks.houg += 2, _oks.tyku += 2) : 911 == _okq.ship_id || 916 == _okq.ship_id || 546 == _okq.ship_id ? (_oks.houg += 2, _oks.tyku += 2, _oks.kaih += 2, _oky = 1) : 553 == _okq.ship_id || 554 == _okq.ship_id ? (_oks.houg += 1, _oks.tyku += 2, _oks.kaih += 1, _okz = 1) : 541 == _okq.ship_id || 411 == _okq.ship_id || 412 == _okq.ship_id ? (_oks.houg += 1, _oks.tyku += 2) : 573 == _okq.ship_id && (_oks.houg += 2, _oks.tyku += 2, _oks.kaih += 1), 0 == [_okt, _oku, _okv, _okw, _okx, _oky, _okz].reduce(function(_ol0, _ol1) {
                    return _ol0 + _ol1;
                }, 0)) return _oks;
            var _ol2 = _okq.get_each_level_nums(483),
                _ol3 = 0,
                _ol4 = [];
            return _ol2.forEach(function(_ol5, _ol6) {
                var _ol7 = null;
                _ol6 >= 6 && (_ol3 += _ol5);
                for (var _ol8 = 1; _ol8 <= _okq.SLOT_LEVEL_MAX; _ol8++) null == _ol4[_ol8] && (_ol4[_ol8] = 0), _ol6 >= _ol8 && (_ol4[_ol8] += _ol5);
            }), 1 == _okt ? (_ol3 >= 1 && (_oks.houm += 1), _ol2[10] >= 1 && (_oks.houm += 1)) : 1 == _oku ? (_ol4[5] >= 1 && (_oks.kaih += 1), _ol4[6] >= 1 && (_oks.houm += 1), _ol4[10] >= 1 && (_oks.kaih += 1)) : 1 == _okv && (_ol4[6] >= 1 && (_oks.houm += 1), _ol4[10] >= 1 && (_oks.kaih += 1)), 1 == _okw ? (_ol4[2] >= 1 && (_oks.tyku += 1), _ol4[4] >= 1 && (_oks.houg += 1), _ol4[7] >= 1 && (_oks.kaih += 1), _ol4[8] >= 1 && (_oks.tyku += 1), _ol4[9] >= 1 && (_oks.houg += 1)) : 1 == _okx && (_ol4[2] >= 1 && (_oks.tyku += 1), _ol4[4] >= 1 && (_oks.houg += 1), _ol4[6] >= 1 && (_oks.kaih += 1), _ol4[8] >= 1 && (_oks.houm += 1), _ol4[10] >= 1 && (_oks.houg += 1)), 1 == _oky ? _ol4[5] >= 1 && (_oks.houm += 1) : 1 == _okz && (_ol4[1] >= 1 && (_oks.houm += 1), _ol4[3] >= 1 && (_oks.houm += 1)), _oks;
        };
    },
    44990: (_ol9, _ola, _olb) => {
        'use strict';
        var _olc = null;
        defineModule(_ola);
        Object.defineProperty(_ola, '__esModule', {
            'value': true
        }), _ola.getSlot485PersonalEffect = void 0;
        var _old = _olb(74496);
        _ola.getSlot485PersonalEffect = function(_ole) {
            var _olf = null,
                _olg = new _old.SlotItemEffectModel(),
                _olh = false,
                _oli = new _old.SlotItemEffectModel();
            if (9 == _ole.ctype && (_oli.houg += 1, _oli.kaih += 2, _oli.tyku += 3, _olh = true), 501 == _ole.ship_id || 506 == _ole.ship_id ? (_oli.kaih += 1, _oli.tyku += 2, _oli.houm += 1, _olh = true) : 502 != _ole.ship_id && 507 != _ole.ship_id || (_oli.kaih += 1, _oli.tyku += 1, _oli.houm += 1, _olh = true), _olh) {
                var _olj = _ole.get_slotnums(485);
                _olg.add(_oli.multiply(_olj));
            }
            var _olk = _ole.get_each_level_nums(485),
                _oll = 0,
                _olm = 0,
                _oln = 0,
                _olo = _olk[10];
            return _olk.forEach(function(_olp, _olq) {
                _olq >= 3 && (_oll += _olp), _olq >= 5 && (_olm += _olp), _olq >= 7 && (_oln += _olp);
            }), _oll > 0 && (_olg.houg += 1 * _oll), _olm > 0 && (_olg.tyku += 1 * _olm), _oln > 0 && (_olg.kaih += 1 * _oln), _olo > 0 && (_olg.houm += 1 * _olo), _olg;
        };
    },
    83957: (_olr, _ols, _olt) => {
        'use strict';
        var _olu = null;
        defineModule(_ols);
        Object.defineProperty(_ols, '__esModule', {
            'value': true
        }), _ols.getSlot486PersonalEffect = void 0;
        var _olv = _olt(74496);
        _ols.getSlot486PersonalEffect = function(_olw) {
            var _olx = null,
                _oly = new _olv.SlotItemEffectModel(),
                _olz = false,
                _om0 = new _olv.SlotItemEffectModel();
            if (894 == _olw.ship_id || 899 == _olw.ship_id ? (_om0.houg += 4, _om0.tyku += 4, _om0.kaih += 3, _om0.houm += 2, _olz = true) : 888 != _olw.ship_id && 883 != _olw.ship_id || (_om0.houg += 2, _om0.tyku += 2, _om0.kaih += 2, _om0.houm += 1, _olz = true), _olz) {
                var _om1 = _olw.get_slotnums(486);
                _oly.add(_om0.multiply(_om1));
            }
            var _om2 = _olw.get_each_level_nums(486),
                _om3 = 0,
                _om4 = 0,
                _om5 = _om2[10];
            return _om2.forEach(function(_om6, _om7) {
                _om7 >= 6 && (_om3 += _om6), _om7 >= 8 && (_om4 += _om6);
            }), _om3 > 0 && (_oly.kaih += 1 * _om3, _oly.houm += 1 * _om3), _om4 > 0 && (_oly.tyku += 1 * _om4, _oly.kaih += 1 * _om4), _om5 > 0 && (_oly.houg += 1 * _om5, _oly.houm += 1 * _om5), _oly;
        };
    },
    78539: (_om8, _om9, _oma) => {
        'use strict';
        var _omb = null;
        defineModule(_om9);
        Object.defineProperty(_om9, '__esModule', {
            'value': true
        }), _om9.getSlot487PersonalEffect = void 0;
        var _omc = _oma(74496);
        _om9.getSlot487PersonalEffect = function(_omd) {
            var _ome = null,
                _omf = new _omc.SlotItemEffectModel(),
                _omg = false,
                _omh = new _omc.SlotItemEffectModel();
            if (894 == _omd.ship_id || 899 == _omd.ship_id ? (_omh.houg += 5, _omh.tyku += 3, _omh.kaih += 2, _omh.houm += 4, _omg = true) : 888 != _omd.ship_id && 883 != _omd.ship_id || (_omh.houg += 3, _omh.tyku += 1, _omh.kaih += 1, _omh.houm += 2, _omg = true), _omg) {
                var _omi = _omd.get_slotnums(487);
                _omf.add(_omh.multiply(_omi));
            }
            var _omj = _omd.get_each_level_nums(487),
                _omk = 0,
                _oml = 0,
                _omm = _omj[10];
            return _omj.forEach(function(_omn, _omo) {
                _omo >= 6 && (_omk += _omn), _omo >= 8 && (_oml += _omn);
            }), _omk > 0 && (_omf.houg += 1 * _omk, _omf.kaih += 1 * _omk), _oml > 0 && (_omf.tyku += 1 * _oml, _omf.houm += 1 * _oml), _omm > 0 && (_omf.houg += 1 * _omm, _omf.houm += 1 * _omm), _omf;
        };
    },
    96282: (_omp, _omq, _omr) => {
        'use strict';
        var _oms = null;
        defineModule(_omq);
        Object.defineProperty(_omq, '__esModule', {
            'value': true
        }), _omq.getSlot488PersonalEffect = void 0;
        var _omt = _omr(74496);
        _omq.getSlot488PersonalEffect = function(_omu) {
            var _omv = null,
                _omw = new _omt.SlotItemEffectModel(),
                _omx = false,
                _omy = new _omt.SlotItemEffectModel(),
                _omz = 0,
                _on0 = _omu.getCountryName(),
                _on1 = {
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
                }[_omu.ship_id];
            if (('日本' == _on0 && 2 == _omu.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_omu.ctype] && 1 == _omu.stype) && (_omy.tais += 1, _omy.kaih += 1, _omx = true), 1 == _on1 ? (_omy.tais += 5, _omy.kaih += 4, _omy.houm += 2, _omx = true, _omz = 1) : 2 == _on1 ? (_omy.tais += 2, _omy.kaih += 1, _omy.houm += 1, _omx = true, _omz = 2) : 3 == _on1 && (_omy.tais += 1, _omx = true, _omz = 2), 0 == _omx) return _omw;
            var _on2 = _omu.get_slotnums(488);
            if (_omw.add(_omy.multiply(_on2)), 0 == _omz) return _omw;
            var _on3 = _omu.get_each_level_nums(488),
                _on4 = [];
            return _on3.forEach(function(_on5, _on6) {
                var _on7 = null;
                for (var _on8 = 1; _on8 <= _omu.SLOT_LEVEL_MAX; _on8++) _on6 >= _on8 && (null == _on4[_on8] && (_on4[_on8] = 0), _on4[_on8] += _on5);
            }), 1 == _omz ? (_on4[3] >= 1 && (_omw.kaih += 1 * _on4[3]), _on4[5] >= 1 && (_omw.tais += 1 * _on4[5]), _on4[7] >= 1 && (_omw.houm += 1 * _on4[7]), _on4[8] >= 1 && (_omw.kaih += 1 * _on4[8]), _on4[9] >= 1 && (_omw.tais += 1 * _on4[9]), _on4[10] >= 1 && (_omw.tais += 1 * _on4[10])) : 2 == _omz && (_on4[5] >= 1 && (_omw.tais += 1 * _on4[5]), _on4[7] >= 1 && (_omw.kaih += 1 * _on4[7]), _on4[9] >= 1 && (_omw.houm += 1 * _on4[9]), _on4[10] >= 1 && (_omw.tais += 1 * _on4[10])), _omw;
        };
    },
    49679: (_on9, _ona, _onb) => {
        'use strict';
        var _onc = null;
        defineModule(_ona);
        Object.defineProperty(_ona, '__esModule', {
            'value': true
        }), _ona.getSlot489PersonalEffect = void 0;
        var _ond = _onb(74496);
        _ona.getSlot489PersonalEffect = function(_one) {
            var _onf = null,
                _ong = new _ond.SlotItemEffectModel(),
                _onh = false,
                _oni = new _ond.SlotItemEffectModel();
            if ('あきつまる' != _one.yomi && 'やましおまる' != _one.yomi && 'くまのまる' != _one.yomi || (_oni.tyku = _oni.tyku + 2, _oni.kaih = _oni.kaih + 1, _oni.houg = _oni.houg + 1, _oni.tais = _oni.tais + 1, _oni.houm = _oni.houm + 1, _onh = true), 717 != _one.ship_id && 948 != _one.ship_id || (_oni.tyku = _oni.tyku + 2, _oni.kaih = _oni.kaih + 2, _oni.houg = _oni.houg + 2, _oni.tais = _oni.tais + 1, _oni.houm = _oni.houm + 1, _onh = true), _onh) {
                var _onj = _one.get_slotnums(489) + _one.get_slotnums(491);
                _ong.add(_oni.multiply(_onj));
            }
            var _onk = _one.get_each_level_nums(489),
                _onl = _one.get_each_level_nums(491),
                _onm = 0,
                _onn = 0,
                _ono = 0;
            _onk.forEach(function(_onp, _onq) {
                _onq >= 3 && (_onm += _onp), _onq >= 6 && (_onn += _onp), _onq >= 8 && (_ono += _onp);
            }), _onl.forEach(function(_onr, _ons) {
                _ons >= 3 && (_onm += _onr), _ons >= 6 && (_onn += _onr), _ons >= 8 && (_ono += _onr);
            });
            var _ont = _onk[10] + _onl[10];
            return _onm >= 1 && (_ong.kaih = _ong.kaih + 1 * _onm), _onn >= 1 && (_ong.tais = _ong.tais + 1 * _onn), _ono >= 1 && (_ong.houm = _ong.houm + 1 * _ono), _ont >= 1 && (_ong.houg = _ong.houg + 1 * _ont), _ong;
        };
    },
    90312: function(_onu, _onv, _onw) {
        'use strict';
        var _onx = null;
        var _ony = this && this.__importDefault || function(_onz) {
            var _oo0 = null;
            return _onz && _onz.__esModule ? _onz : {
                'default': _onz
            };
        };
        defineModule(_onv);
        Object.defineProperty(_onv, '__esModule', {
            'value': true
        }), _onv.getSlot502PersonalEffect = void 0;
        var _oo1 = _onw(74496),
            _oo2 = _ony(_onw(18622));
        _onv.getSlot502PersonalEffect = function(_oo3) {
            var _oo4 = null,
                _oo5 = new _oo1.SlotItemEffectModel(),
                _oo6 = _oo3.get_slotnums(502),
                _oo7 = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _oo8 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _oo9 = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _ooa = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _oob = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_oo7[_oo3.ship_id]) {
                var _ooc = _oo7[_oo3.ship_id];
                _oo5.houg += _oo6 * _ooc;
            }
            if (_oo8[_oo3.ship_id]) {
                var _ood = _oo8[_oo3.ship_id];
                _oo5.tyku += _oo6 * _ood;
            }
            if (_oo9[_oo3.ship_id]) {
                var _ooe = _oo9[_oo3.ship_id],
                    _oof = _oo3.get_each_level_nums(502),
                    _oog = [];
                _oof.forEach(function(_ooh, _ooi) {
                    var _ooj = null;
                    for (var _ook = 1; _ook <= _oo3.SLOT_LEVEL_MAX; _ook++) _ooi >= _ook && (null == _oog[_ook] && (_oog[_ook] = 0), _oog[_ook] += _ooh);
                }), 1 == _ooe ? (_oo5.kaih += 3 * _oo6, _oog[1] > 0 && (_oo5.kaih += 1 * _oog[1]), _oog[3] > 0 && (_oo5.tyku += 1 * _oog[3]), _oog[5] > 0 && (_oo5.houg += 1 * _oog[5]), _oog[7] > 0 && (_oo5.kaih += 1 * _oog[7]), _oog[8] > 0 && (_oo5.tyku += 1 * _oog[8]), _oog[9] > 0 && (_oo5.houg += 1 * _oog[9]), _oog[10] > 0 && (_oo5.tyku += 1 * _oog[10])) : 2 == _ooe ? (_oo5.kaih += 1 * _oo6, _oog[2] > 0 && 151 == _oo3.ship_id && (_oo5.kaih += 1 * _oog[2]), _oog[4] > 0 && (_oo5.tyku += 1 * _oog[4]), _oog[6] > 0 && (_oo5.houg += 1 * _oog[6]), _oog[8] > 0 && (_oo5.kaih += 1 * _oog[8]), _oog[10] > 0 && (_oo5.tyku += 1 * _oog[10])) : 3 == _ooe && (_oog[5] > 0 && (_oo5.kaih += 1 * _oog[5]), _oog[8] > 0 && (_oo5.houg += 1 * _oog[8]), _oog[10] > 0 && (_oo5.tyku += 1 * _oog[10]));
            }
            if (_ooa[_oo3.ship_id]) {
                for (var _ool = 0, _oom = 0, _oon = _oo3.have_slot_ids(); _oom < _oon.length; _oom++) {
                    var _ooo = _oon[_oom],
                        _oop = _oo2.default.model.slot.getMst(_ooo),
                        _ooq = _oop.equipType;
                    12 != _ooq && 13 != _ooq || (_oop.sakuteki >= 5 && (_ool += _oo3.get_slotnums(parseInt(_ooo))), _oop.taiku >= 2 && _oo3.get_slotnums(parseInt(_ooo)));
                }
                0;
                var _oor = _ooa[_oo3.ship_id];
                1 == _oor && _ool >= 1 ? (_oo5.houg += 3, _oo5.kaih += 4) : 2 == _oor && _ool >= 1 && (_oo5.houg += 2, _oo5.kaih += 2);
            }
            if (_oob[_oo3.ship_id]) {
                var _oos = _oob[_oo3.ship_id],
                    _oot = [],
                    _oou = [],
                    _oov = _oo3.have_slot_ids();
                [410, 411].forEach(function(_oow) {
                    var _oox = null;
                    _oov.indexOf(_oow.toString()) > -1 && (_oou[_oow] = _oo3.get_each_level_nums(_oow), null == _oot[_oow] && (_oot[_oow] = []), _oou[_oow].forEach(function(_ooy, _ooz) {
                        var _op0 = null;
                        for (var _op1 = 1; _op1 <= _oo3.SLOT_LEVEL_MAX; _op1++) null == _oot[_oow][_op1] && (_oot[_oow][_op1] = 0), _ooz >= _op1 && (_oot[_oow][_op1] += _ooy);
                    }));
                });
                var _op2 = _oou[410],
                    _op3 = _oou[411];
                if (1 == _oos) {
                    if (_op2) {
                        _oo5.tyku += 1;
                        var _op4 = _oot[410];
                        _op4[7] >= 1 && (_oo5.houg += 1), _op4[10] >= 1 && (_oo5.kaih += 1);
                    }
                    if (_op3) {
                        _oo5.tyku += 2;
                        var _op5 = _oot[411];
                        _op5[2] >= 1 && (_oo5.houg += 1), _op5[4] >= 1 && (_oo5.kaih += 1), _op5[6] >= 1 && (_oo5.houm += 1), _op5[8] >= 1 && (_oo5.tyku += 1), _op5[10] >= 1 && (_oo5.houg += 1);
                    }
                }
            }
            return _oo5;
        };
    },
    86856: function(_op6, _op7, _op8) {
        'use strict';
        var _op9 = null;
        var _opa = this && this.__importDefault || function(_opb) {
            var _opc = null;
            return _opb && _opb.__esModule ? _opb : {
                'default': _opb
            };
        };
        defineModule(_op7);
        Object.defineProperty(_op7, '__esModule', {
            'value': true
        }), _op7.getSlot503PersonalEffect = void 0;
        var _opd = _op8(74496),
            _ope = _opa(_op8(18622));
        _op7.getSlot503PersonalEffect = function(_opf) {
            var _opg = null,
                _oph = new _opd.SlotItemEffectModel(),
                _opi = _opf.get_slotnums(503),
                _opj = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _opk = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _opl = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _opm = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _opn = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _opo = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_opj[_opf.ship_id]) {
                var _opp = _opj[_opf.ship_id];
                _oph.houg += _opi * _opp;
            }
            if (_opk[_opf.ship_id]) {
                var _opq = _opk[_opf.ship_id];
                _oph.tyku += _opi * _opq;
            }
            if (_opl[_opf.ship_id]) {
                var _opr = _opl[_opf.ship_id],
                    _ops = _opf.get_each_level_nums(503),
                    _opt = [];
                _ops.forEach(function(_opu, _opv) {
                    var _opw = null;
                    for (var _opx = 1; _opx <= _opf.SLOT_LEVEL_MAX; _opx++) _opv >= _opx && (null == _opt[_opx] && (_opt[_opx] = 0), _opt[_opx] += _opu);
                }), 1 == _opr ? (_oph.houm += 2 * _opi, _opt[1] > 0 && (_oph.houg += 1 * _opt[1]), _opt[2] > 0 && (_oph.tyku += 1 * _opt[2]), _opt[4] > 0 && (_oph.houm += 1 * _opt[4]), _opt[6] > 0 && (_oph.houg += 1 * _opt[6]), _opt[8] > 0 && (_oph.tyku += 1 * _opt[8]), _opt[10] > 0 && (_oph.houm += 1 * _opt[10])) : 2 == _opr ? (_oph.houm += 1 * _opi, _opt[2] > 0 && (_oph.houg += 1 * _opt[2]), _opt[4] > 0 && (_oph.tyku += 1 * _opt[4]), _opt[6] > 0 && (_oph.houm += 1 * _opt[6]), _opt[8] > 0 && (_oph.houg += 1 * _opt[8]), _opt[10] > 0 && (_oph.houm += 1 * _opt[10])) : 3 == _opr && (_opt[4] > 0 && (_oph.houm += 1 * _opt[4]), _opt[7] > 0 && (_oph.houg += 1 * _opt[7]), _opt[10] > 0 && (_oph.tyku += 1 * _opt[10]));
            }
            var _opy = 0;
            _opm[_opf.ship_id] && (_opy = _opm[_opf.ship_id]);
            var _opz = 0;
            _opo[_opf.ship_id] && (_opz = _opo[_opf.ship_id]);
            var _oq0 = 0,
                _oq1 = 0,
                _oq2 = _opf.have_slot_ids();
            if (_opy + _opz > 0)
                for (var _oq3 = 0, _oq4 = _oq2; _oq3 < _oq4.length; _oq3++) {
                    var _oq5 = _oq4[_oq3],
                        _oq6 = _ope.default.model.slot.getMst(_oq5),
                        _oq7 = _oq6.equipType;
                    12 != _oq7 && 13 != _oq7 || (_oq6.sakuteki >= 5 && (_oq0 += _opf.get_slotnums(parseInt(_oq5))), _oq6.taiku >= 2 && _opf.get_slotnums(parseInt(_oq5)), _oq6.meichu >= 8 && (_oq1 += _opf.get_slotnums(parseInt(_oq5))));
                }
            1 == _opy ? _oq0 >= 1 && (_oph.houg += 3, _oph.houm += 3, _oph.kaih += 2) : 2 == _opy && _oq0 >= 1 && (_oph.houg += 2, _oph.houm += 2, _oph.kaih += 1);
            var _oq8 = 0,
                _oq9 = [],
                _oqa = [];
            if (_opn[_opf.ship_id]) {
                _oq8 = _opn[_opf.ship_id];
                var _oqb = _opf.have_slot_ids();
                [174].forEach(function(_oqc) {
                    var _oqd = null;
                    _oqb.indexOf(_oqc.toString()) > -1 && (_oqa[_oqc] = _opf.get_each_level_nums(_oqc), null == _oq9[_oqc] && (_oq9[_oqc] = []), _oqa[_oqc].forEach(function(_oqe, _oqf) {
                        var _oqg = null;
                        for (var _oqh = 1; _oqh <= _opf.SLOT_LEVEL_MAX; _oqh++) null == _oq9[_oqc][_oqh] && (_oq9[_oqc][_oqh] = 0), _oqf >= _oqh && (_oq9[_oqc][_oqh] += _oqe);
                    }));
                });
            }
            if (_oq8 > 0) {
                var _oqi = _oqa[174];
                if (1 == _oq8 && _oqi) {
                    var _oqj = _oq9[174];
                    _oph.raig += 4, _oqj[6] >= 1 && (_oph.raig += 1), _oqj[8] >= 1 && (_oph.houm += 1), _oqj[10] >= 1 && (_oph.houg += 1);
                }
            }
            return _oq1 > 0 && (_opz >= 1 && _opz <= 3 && (_oph.houg += 2, _oph.houm += 2, _oph.kaih += 2), 1 == _opz ? _oph.houg += 1 : 3 == _opz && (_oph.houg += 2)), _oph;
        };
    },
    78123: function(_oqk, _oql, _oqm) {
        'use strict';
        var _oqn = null;
        var _oqo = this && this.__importDefault || function(_oqp) {
            var _oqq = null;
            return _oqp && _oqp.__esModule ? _oqp : {
                'default': _oqp
            };
        };
        defineModule(_oql);
        Object.defineProperty(_oql, '__esModule', {
            'value': true
        }), _oql.getSlot505PersonalEffect = void 0;
        var _oqr = _oqm(74496),
            _oqs = _oqo(_oqm(18622));
        _oql.getSlot505PersonalEffect = function(_oqt) {
            var _oqu = null,
                _oqv = new _oqr.SlotItemEffectModel(),
                _oqw = false,
                _oqx = new _oqr.SlotItemEffectModel();
            if (2 == _oqt.stype ? (_oqx.houg += 1, _oqx.tyku += 2, _oqx.kaih += 2, _oqw = true) : 1 == _oqt.stype ? (_oqx.houg += 1, _oqx.tyku += 1, _oqx.kaih += 1, _oqw = true) : 3 == _oqt.stype || 21 == _oqt.stype || 4 == _oqt.stype ? (_oqx.tyku += 1, _oqx.kaih += 2, _oqw = true) : 5 != _oqt.stype && 6 != _oqt.stype && 16 != _oqt.stype || (_oqx.tyku += 1, _oqx.kaih += 1, _oqw = true), _oqw) {
                var _oqy = _oqt.get_slotnums(505);
                _oqv.add(_oqx.multiply(_oqy));
            }
            var _oqz = {
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
                _or0 = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2
                },
                _or1 = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _oqz[_oqt.ship_id] ? (_oqv.houg += 2, _oqv.tyku += 3, _oqv.kaih += 4) : 2 == _oqz[_oqt.ship_id] ? (_oqv.houg += 1, _oqv.tyku += 2, _oqv.kaih += 3) : 3 == _oqz[_oqt.ship_id] ? (_oqv.tyku += 2, _oqv.kaih += 2) : 4 == _oqz[_oqt.ship_id] ? (_oqv.tyku += 1, _oqv.kaih += 2) : 5 == _oqz[_oqt.ship_id] && (_oqv.houg += 1, _oqv.tyku += 1, _oqv.kaih += 1);
            var _or2 = 0;
            if (_or0[_oqt.ship_id] && _or2++, _or1[_oqt.ship_id] && _or2++, 0 == _or2) return _oqv;
            for (var _or3 = 0, _or4 = 0, _or5 = 0, _or6 = _oqt.have_slot_ids(); _or5 < _or6.length; _or5++) {
                var _or7 = _or6[_or5],
                    _or8 = _oqs.default.model.slot.getMst(_or7),
                    _or9 = _or8.equipType;
                12 != _or9 && 13 != _or9 || (_or8.sakuteki >= 5 && (_or3 += _oqt.get_slotnums(parseInt(_or7))), _or8.taiku >= 2 && (_or4 += _oqt.get_slotnums(parseInt(_or7))));
            }
            var _ora = _or0[_oqt.ship_id];
            _or4 > 0 && _ora > 0 && (1 == _ora ? (_oqv.houg += 1, _oqv.tyku += 2, _oqv.kaih += 3) : 2 == _ora && (_oqv.tyku += 2, _oqv.kaih += 2));
            var _orb = _or1[_oqt.ship_id];
            return _or3 > 0 && _orb > 0 && 1 == _orb && (_oqv.houg += 1, _oqv.kaih += 1), _oqv;
        };
    },
    25765: (_orc, _ord, _ore) => {
        'use strict';
        var _orf = null;
        defineModule(_ord);
        Object.defineProperty(_ord, '__esModule', {
            'value': true
        }), _ord.getSlot506PersonalEffect = void 0;
        var _org = _ore(74496);
        _ord.getSlot506PersonalEffect = function(_orh) {
            var _ori = null,
                _orj = new _org.SlotItemEffectModel();
            return 961 == _orh.ship_id ? (_orj.houg += 2, _orj.houm += 3, _orj.tyku += 2, _orj.kaih += 4) : 145 == _orh.ship_id || 497 == _orh.ship_id || 656 == _orh.ship_id || 557 == _orh.ship_id || 558 == _orh.ship_id || 951 == _orh.ship_id || 975 == _orh.ship_id ? (_orj.houg += 1, _orj.houm += 2, _orj.tyku += 1, _orj.kaih += 3) : 578 != _orh.ship_id && 419 != _orh.ship_id && 464 != _orh.ship_id && 470 != _orh.ship_id && 407 != _orh.ship_id && 235 != _orh.ship_id && 147 != _orh.ship_id && 538 != _orh.ship_id && 537 != _orh.ship_id && 955 != _orh.ship_id && 960 != _orh.ship_id || (_orj.houg += 1, _orj.houm += 1, _orj.tyku += 1, _orj.kaih += 2), _orj;
        };
    },
    88271: function(_ork, _orl, _orm) {
        'use strict';
        var _orn = null;
        var _oro = this && this.__importDefault || function(_orp) {
            var _orq = null;
            return _orp && _orp.__esModule ? _orp : {
                'default': _orp
            };
        };
        defineModule(_orl);
        Object.defineProperty(_orl, '__esModule', {
            'value': true
        }), _orl.getSlot50PersonalEffect = void 0;
        var _orr = _orm(74496),
            _ors = _oro(_orm(18622));
        _orl.getSlot50PersonalEffect = function(_ort) {
            var _oru = null,
                _orv = new _orr.SlotItemEffectModel(),
                _orw = false,
                _orx = new _orr.SlotItemEffectModel();
            7 != _ort.ctype && 13 != _ort.ctype && 8 != _ort.ctype && 29 != _ort.ctype && 9 != _ort.ctype && 31 != _ort.ctype || (_orx.houg += 1, _orw = true), 8 != _ort.ctype && 29 != _ort.ctype && 9 != _ort.ctype && 31 != _ort.ctype || (_orx.houg += 1, _orx.kaih += 1, _orw = true);
            var _ory = _ort.get_slotnums(50);
            9 != _ort.ctype && 31 != _ort.ctype || _ory >= 2 && (_orx.houg += 1, _orw = true);
            var _orz = 0;
            if (501 != _ort.ship_id && 506 != _ort.ship_id && 502 != _ort.ship_id && 507 != _ort.ship_id || (_orx.houg += 1, _orw = true, _orz = 1), 0 == _orw) return _orv;
            _orv = _orx.multiply(_ory);
            for (var _os0 = 0, _os1 = 0, _os2 = _ort.have_slot_ids(); _os1 < _os2.length; _os1++) {
                var _os3 = _os2[_os1],
                    _os4 = _ors.default.model.slot.getMst(_os3),
                    _os5 = _os4.equipType;
                12 != _os5 && 13 != _os5 || _os4.sakuteki >= 5 && (_os0 += _ort.get_slotnums(parseInt(_os3)));
            }
            if (_os0 > 0) {
                if (7 == _ort.ctype || 13 == _ort.ctype) 0 == _ort.get_slotnums(90) && (_orv.houg += 1, _orv.kaih += 1, _orv.raig += 1);
                else 8 != _ort.ctype && 29 != _ort.ctype && 9 != _ort.ctype && 31 != _ort.ctype || (_orv.houg += 3, _orv.kaih += 2, _orv.raig += 2);
                501 != _ort.ship_id && 506 != _ort.ship_id || (_orv.houg += 1, _orv.kaih += 1);
            }
            var _os6 = _ort.get_slotnums(30),
                _os7 = _ort.get_slotnums(410);
            return 1 == _orz && (_os6 + _os7 > 0 && (_orv.houg += 1, _orv.tyku += 3, _orv.kaih += 2), _os7 > 0 && (_orv.houg += 2)), _orv;
        };
    },
    28221: (_os8, _os9, _osa) => {
        'use strict';
        var _osb = null;
        defineModule(_os9);
        Object.defineProperty(_os9, '__esModule', {
            'value': true
        }), _os9.getSlot510PersonalEffect = void 0;
        var _osc = _osa(74496);
        _os9.getSlot510PersonalEffect = function(_osd) {
            var _ose = null,
                _osf = new _osc.SlotItemEffectModel(),
                _osg = false,
                _osh = new _osc.SlotItemEffectModel();
            if ('イギリス' == _osd.getCountryName() && (_osh.houg += 2, _osh.tais += 3, _osh.kaih += 2, _osh.saku += 2, _osg = true), 88 == _osd.ctype && (_osf.houg += 4, _osf.kaih += 2, _osh.saku += 3, _osh.houm += 2, _osg = true), 0 == _osg) return _osf;
            var _osi = _osd.get_slotnums(510);
            return _osf.add(_osh.multiply(_osi)), _osf;
        };
    },
    14830: (_osj, _osk, _osl) => {
        'use strict';
        var _osm = null;
        defineModule(_osk);
        Object.defineProperty(_osk, '__esModule', {
            'value': true
        }), _osk.getSlot511PersonalEffect = void 0;
        var _osn = _osl(74496);
        _osk.getSlot511PersonalEffect = function(_oso) {
            var _osp = null,
                _osq = new _osn.SlotItemEffectModel();
            return 122 == _oso.ctype ? (_osq.raig += 3, _osq.kaih += 4) : 114 == _oso.ctype && (_osq.raig += 1, _osq.kaih += 2), _osq;
        };
    },
    54047: (_osr, _oss, _ost) => {
        'use strict';
        var _osu = null;
        defineModule(_oss);
        Object.defineProperty(_oss, '__esModule', {
            'value': true
        }), _oss.getSlot517PersonalEffect = void 0;
        var _osv = _ost(74496);
        _oss.getSlot517PersonalEffect = function(_osw) {
            var _osx = null,
                _osy = new _osv.SlotItemEffectModel();
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
            }[_osw.ctype] && 74 != _osw.ctype && 77 != _osw.ctype && 85 != _osw.ctype && 117 != _osw.ctype && 104 != _osw.ctype || (_osy.houm += 1, _osy.kaih += 1, _osy.saku += 1), 38 == _osw.ctype && (_osy.houg += 1, _osy.houm += 1), 960 == _osw.ship_id ? (_osy.houg += 2, _osy.houm += 1, _osy.kaih += 3, _osy.saku += 2) : 955 != _osw.ship_id && 578 != _osw.ship_id && 961 != _osw.ship_id && 656 != _osw.ship_id && 464 != _osw.ship_id && 470 != _osw.ship_id && 419 != _osw.ship_id && 407 != _osw.ship_id && 235 != _osw.ship_id && 147 != _osw.ship_id && 975 != _osw.ship_id || (_osy.houg += 1, _osy.houm += 1, _osy.kaih += 2, _osy.saku += 1);
            for (var _osz = [], _ot0 = function(_ot1) {
                    var _ot2 = null,
                        _ot3 = _osw.get_each_level_nums(_ot1);
                    null == _osz[_ot1] && (_osz[_ot1] = []), _ot3.forEach(function(_ot4, _ot5) {
                        var _ot6 = null;
                        for (var _ot7 = 1; _ot7 <= _osw.SLOT_LEVEL_MAX; _ot7++) null == _osz[_ot1][_ot7] && (_osz[_ot1][_ot7] = 0), _ot5 >= _ot7 && (_osz[_ot1][_ot7] += _ot4);
                    });
                }, _ot8 = 0, _ot9 = [267, 366, 450, 517]; _ot8 < _ot9.length; _ot8++) {
                _ot0(_ot9[_ot8]);
            }
            var _ota = _osz[517];
            return _ota[7] > 0 && (_osy.houm += 1), _ota[8] > 0 && (_osy.kaih += 1), _ota[9] > 0 && (_osy.houg += 1), _ota[10] > 0 && (_osy.houm += 1), (_osz[267][3] > 0 || _osz[366][3] > 0) && (_osy.houg += 1, _osy.houm += 1, 38 == _osw.ctype && (_osy.houg += 1, _osy.houm += 1), _osz[450][4] > 0 && (_osy.houg += 1, _osy.houm += 1, _osy.tyku += 4, _osy.kaih += 3)), _osy;
        };
    },
    76054: (_otb, _otc, _otd) => {
        'use strict';
        var _ote = null;
        defineModule(_otc);
        Object.defineProperty(_otc, '__esModule', {
            'value': true
        }), _otc.getSlot518PersonalEffect = void 0;
        var _otf = _otd(74496);
        _otc.getSlot518PersonalEffect = function(_otg) {
            var _oth = null,
                _oti = new _otf.SlotItemEffectModel(),
                _otj = false,
                _otk = new _otf.SlotItemEffectModel();
            if (34 != _otg.ctype && 56 != _otg.ctype || (_otk.houg += 1, _otk.tyku += 1, _otk.tais += 1, _otk.kaih += 1, _otj = true), 16 == _otg.stype && (_otk.houg += 1, _otk.raig += 1, _otk.kaih += 1, _otj = true), 622 != _otg.ship_id && 624 != _otg.ship_id && 623 != _otg.ship_id || (_otk.houg += 1, _otj = true), 622 != _otg.ship_id && 624 != _otg.ship_id || (_otk.tyku += 1, _otj = true), 624 == _otg.ship_id && (_otk.tais += 2, _otj = true), 0 == _otj) return _oti;
            var _otl = _otg.get_slotnums(518);
            return _oti.add(_otk.multiply(_otl)), _oti;
        };
    },
    93053: (_otm, _otn, _oto) => {
        'use strict';
        var _otp = null;
        defineModule(_otn);
        Object.defineProperty(_otn, '__esModule', {
            'value': true
        }), _otn.getSlot519PersonalEffect = void 0;
        var _otq = _oto(74496);
        _otn.getSlot519PersonalEffect = function(_otr) {
            var _ots = null,
                _ott = new _otq.SlotItemEffectModel();
            return 122 == _otr.ctype && (_ott.houm += 2, _ott.kaih += 2), 114 == _otr.ctype && (_ott.raig += 1, _ott.houm += 2, _ott.kaih += 2), _ott;
        };
    },
    81254: (_otu, _otv, _otw) => {
        'use strict';
        var _otx = null;
        defineModule(_otv);
        Object.defineProperty(_otv, '__esModule', {
            'value': true
        }), _otv.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _oty = _otw(74496);
        _otv.getSlot51cmSeriesGunPersonalEffect = function(_otz) {
            var _ou0 = null,
                _ou1 = new _oty.SlotItemEffectModel(),
                _ou2 = false,
                _ou3 = new _oty.SlotItemEffectModel(),
                _ou4 = _otz.get_slotnums(142),
                _ou5 = _otz.get_slotnums(460),
                _ou6 = _ou4 + _ou5;
            if (916 != _otz.ship_id && 911 != _otz.ship_id && 546 != _otz.ship_id || (_ou3.houg += 1, _ou3.houm += 1, _ou5 >= 1 && (_ou1.kaih += 1, _ou1.houm += 1), _ou2 = true), 37 == _otz.ctype && _ou6 >= 1 && (_ou1.houg += 1, _ou1.houm += 2), 0 == _ou2) return _ou1;
            var _ou7 = _otz.get_slotnums(128) + _otz.get_slotnums(281);
            return _ou1.add(_ou3.multiply(_ou7)), _ou1;
        };
    },
    88792: (_ou8, _ou9, _oua) => {
        'use strict';
        var _oub = null;
        defineModule(_ou9);
        Object.defineProperty(_ou9, '__esModule', {
            'value': true
        }), _ou9.getSlot520PersonalEffect = void 0;
        var _ouc = _oua(74496);
        _ou9.getSlot520PersonalEffect = function(_oud) {
            var _oue = null,
                _ouf = new _ouc.SlotItemEffectModel(),
                _oug = false,
                _ouh = new _ouc.SlotItemEffectModel(),
                _oui = 0,
                _ouj = 0,
                _ouk = 0,
                _oul = _oud.get_slotnums(520);
            7 == _oud.ctype || 13 == _oud.ctype ? (_ouh.houg += 1, _oug = true, _ouj = 1, _ouk = 1) : 8 == _oud.ctype || 29 == _oud.ctype ? (_ouh.houg += 2, _ouh.kaih += 1, _oug = true, _ouj = 2, _ouk = 1) : 9 != _oud.ctype && 31 != _oud.ctype || (_ouh.houg += 3, _ouh.kaih += 1, _ouh.houm += 1, _oug = true, _ouj = 2, _ouk = 1, 2 == _oul && (_ouf.houg += 2), _oul >= 3 && (_ouf.houg += 4));
            var _oum = _oud.get_have_rader_nums().water_rader,
                _oun = 0,
                _ouo = 0;
            if (_ouj + _ouk > 0) {
                for (var _oup = _oud.getSpItemDict_FukuhouTaikuHeisou(), _ouq = _oud.getSpItemDict_Tansou21GouDentan(), _our = 0, _ous = _oud.have_slot_ids(); _our < _ous.length; _our++) {
                    var _out = _ous[_our],
                        _ouu = parseInt(_out);
                    null != _oup[_ouu] ? (_oup[_ouu] += _oud.get_slotnums(_ouu), _oun += _oud.get_slotnums(_ouu)) : null != _ouq[_ouu] && (_ouq[_ouu] += _oud.get_slotnums(_ouu), _ouo += _oud.get_slotnums(_ouu));
                }
                _oum > 0 && (1 == _ouj ? (_ouf.houg += 2, _ouf.raig += 2, _ouf.kaih += 1, _ouf.houm += 1) : 2 == _ouj && (_ouf.houg += 3, _ouf.raig += 2, _ouf.kaih += 2, _ouf.houm += 1)), _oun > 0 && 1 == _ouk && (_ouf.houg += 1, _ouf.tyku += 4, _ouf.kaih += 4, _ouf.houm += 1);
            }
            if (269 == _oud.ship_id || 265 == _oud.ship_id || 319 == _oud.ship_id ? (2 == _oul && (_ouf.houg += 2), _oul >= 3 && (_ouf.houg += 4)) : 501 != _oud.ship_id && 506 != _oud.ship_id && 502 != _oud.ship_id && 507 != _oud.ship_id && 503 != _oud.ship_id && 504 != _oud.ship_id || (_ouh.houg += 1, _oug = true, _oum >= 1 && (_ouf.houg += 1, _ouf.kaih += 1, _ouf.houm += 2), _ouo >= 1 && (_ouf.houg += 1, _ouf.tyku += 3, _ouf.kaih += 2, _ouf.houm += 1), _oud.get_slotnums(410) > 0 && (_ouf.houg += 2, _ouf.tyku += 3, _ouf.kaih += 2, _ouf.houm += 1), _oui = 1), 502 == _oud.ship_id || 269 == _oud.ship_id || 265 == _oud.ship_id || 319 == _oud.ship_id ? (_ouh.houg += 1, _ouh.houm += 1, _oug = true) : 507 == _oud.ship_id && (_ouh.houg += 1, _ouh.houm += 2, _ouh.tyku += 1, _oug = true), _oug && _ouf.add(_ouh.multiply(_oul)), 0 == _oui) return _ouf;
            var _ouv = _oud.get_each_level_over_nums([520]),
                _ouw = _ouv.slot[520][7],
                _oux = _ouv.slot[520][10];
            return 1 == _oui && (_ouw > 0 && (_ouf.houg += 1 * _ouw), _oux > 0 && (_ouf.houm += 1 * _oux)), _ouf;
        };
    },
    33242: (_ouy, _ouz, _ov0) => {
        'use strict';
        var _ov1 = null;
        defineModule(_ouz);
        Object.defineProperty(_ouz, '__esModule', {
            'value': true
        }), _ouz.getSlot521PersonalEffect = void 0;
        var _ov2 = _ov0(74496);
        _ouz.getSlot521PersonalEffect = function(_ov3) {
            var _ov4 = null,
                _ov5 = new _ov2.SlotItemEffectModel(),
                _ov6 = false,
                _ov7 = new _ov2.SlotItemEffectModel(),
                _ov8 = 0;
            if (52 == _ov3.ctype && (_ov8 = 1), 183 == _ov3.ship_id ? (_ov7.houg += 1, _ov7.houm += 1, _ov7.saku += 2, _ov7.kaih += 2, _ov6 = true) : 321 == _ov3.ship_id ? (_ov7.houg += 2, _ov7.houm += 2, _ov7.saku += 3, _ov7.kaih += 3, _ov6 = true) : 507 == _ov3.ship_id && (_ov7.houg += 3, _ov7.tyku += 1, _ov7.houm += 3, _ov7.saku += 2, _ov7.kaih += 2, _ov6 = true, _ov8 = 1), _ov6) {
                var _ov9 = _ov3.get_slotnums(521);
                _ov5.add(_ov7.multiply(_ov9));
            }
            if (0 == _ov8) return _ov5;
            var _ova = _ov3.get_each_level_over_nums([521]).slot[521];
            return 1 == _ov8 && (_ova[1] >= 1 && (_ov5.houm += 1 * _ova[1]), _ova[2] >= 1 && (_ov5.kaih += 1 * _ova[2]), _ova[3] >= 1 && (_ov5.saku += 1 * _ova[3], _ov5.raig += 1 * _ova[3]), _ova[4] >= 1 && (_ov5.houg += 1 * _ova[4]), _ova[6] >= 1 && (_ov5.houm += 1 * _ova[6]), _ova[8] >= 1 && (_ov5.saku += 1 * _ova[8]), _ova[10] >= 1 && (_ov5.houm += 1 * _ova[10])), _ov5;
        };
    },
    3296: (_ovb, _ovc, _ovd) => {
        'use strict';
        var _ove = null;
        defineModule(_ovc);
        Object.defineProperty(_ovc, '__esModule', {
            'value': true
        }), _ovc.getSlot522_523PersonalEffect = void 0;
        var _ovf = _ovd(74496);
        _ovc.getSlot522_523PersonalEffect = function(_ovg) {
            var _ovh = null,
                _ovi = new _ovf.SlotItemEffectModel(),
                _ovj = false,
                _ovk = new _ovf.SlotItemEffectModel(),
                _ovl = 0,
                _ovm = _ovg.get_slotnums(522),
                _ovn = _ovg.get_slotnums(523),
                _ovo = _ovm + _ovn;
            if (14 == _ovg.stype && (_ovk.raig += 1, _ovk.kaih += 5, _ovk.houm += 1, _ovk.saku += 3, _ovj = true, _ovn >= 1 && (_ovi.raig += 2 * _ovn, _ovi.baku += 2 * _ovn, _ovi.kaih += 1 * _ovn, _ovi.houm += 1 * _ovn, _ovi.saku += 1 * _ovn), _ovl = 1), 0 == _ovj) return _ovi;
            if (_ovi.add(_ovk.multiply(_ovo)), 0 == _ovl) return _ovi;
            var _ovp = _ovg.get_each_level_over_nums([522, 523]),
                _ovq = _ovp.slot[522],
                _ovr = _ovp.slot[523];
            if (1 == _ovl) {
                if (_ovq[1] >= 1 || _ovr[1] >= 1) {
                    var _ovs = _ovq[1] + _ovr[1];
                    _ovi.raig += 1 * _ovs;
                }
                if (_ovq[2] >= 1 || _ovr[2] >= 1) {
                    var _ovt = _ovq[2] + _ovr[2];
                    _ovi.houm += 1 * _ovt;
                }
                if (_ovq[3] >= 1 || _ovr[3] >= 1) {
                    var _ovu = _ovq[3] + _ovr[3];
                    _ovi.kaih += 1 * _ovu;
                }
                if (_ovq[5] >= 1 || _ovr[5] >= 1) {
                    var _ovv = _ovq[5] + _ovr[5];
                    _ovi.saku += 1 * _ovv;
                }
                if (_ovq[8] >= 1 || _ovr[8] >= 1) {
                    var _ovw = _ovq[8] + _ovr[8];
                    _ovi.houm += 1 * _ovw;
                }
                if (_ovq[10] >= 1 || _ovr[10] >= 1) {
                    var _ovx = _ovq[10] + _ovr[10];
                    _ovi.kaih += 1 * _ovx;
                }
            }
            return _ovi;
        };
    },
    59415: (_ovy, _ovz, _ow0) => {
        'use strict';
        var _ow1 = null;
        defineModule(_ovz);
        Object.defineProperty(_ovz, '__esModule', {
            'value': true
        }), _ovz.getSlot524PersonalEffect = void 0;
        var _ow2 = _ow0(74496);
        _ovz.getSlot524PersonalEffect = function(_ow3) {
            var _ow4 = null,
                _ow5 = new _ow2.SlotItemEffectModel(),
                _ow6 = false,
                _ow7 = new _ow2.SlotItemEffectModel(),
                _ow8 = 0,
                _ow9 = 0;
            if (17 != _ow3.stype && 19 != _ow3.stype && 20 != _ow3.stype && 21 != _ow3.stype && 22 != _ow3.stype || (_ow7.houg += 1, _ow7.tyku += 2, _ow7.kaih += 2, _ow7.houm += 1, _ow6 = true, _ow8 = 1, _ow9 = 1), 0 == _ow6) return _ow5;
            var _owa = _ow3.get_slotnums(524);
            _ow5.add(_ow7.multiply(_owa));
            var _owb = _ow3.get_have_rader_nums().air_rader;
            if (1 == _ow9 && _owb >= 1 && (_ow5.tyku += 2, _ow5.kaih += 2), 0 == _ow8) return _ow5;
            var _owc = _ow3.get_each_level_over_nums([524]).slot[524];
            return 1 == _ow8 && (_owc[1] >= 1 && (_ow5.kaih += 1 * _owc[1]), _owc[2] >= 1 && (_ow5.kaih += 1 * _owc[2]), _owc[4] >= 1 && (_ow5.tyku += 1 * _owc[4]), _owc[6] >= 1 && (_ow5.kaih += 1 * _owc[6]), _owc[7] >= 1 && (_ow5.houm += 1 * _owc[7]), _owc[8] >= 1 && (_ow5.tyku += 1 * _owc[8]), _owc[9] >= 1 && (_ow5.kaih += 1 * _owc[9]), _owc[10] >= 1 && (_ow5.houg += 1 * _owc[10])), _ow5;
        };
    },
    36731: (_owd, _owe, _owf) => {
        'use strict';
        var _owg = null;
        defineModule(_owe);
        Object.defineProperty(_owe, '__esModule', {
            'value': true
        }), _owe.getSlot527PersonalEffect = void 0;
        var _owh = _owf(74496);
        _owe.getSlot527PersonalEffect = function(_owi) {
            var _owj = null,
                _owk = new _owh.SlotItemEffectModel(),
                _owl = 0;
            if ('イギリス' == _owi.getCountryName() && (_owl = 1, _owk.tyku += 2, _owk.houm += 1, _owk.kaih += 1, _owk.saku += 2, 88 == _owi.ctype && (_owk.houg += 2), 67 == _owi.ctype && (_owk.houg += 1)), 0 == _owl) return _owk;
            var _owm = _owi.get_each_level_over_nums([527]),
                _own = _owm.slot[527][2],
                _owo = _owm.slot[527][4],
                _owp = _owm.slot[527][7],
                _owq = _owm.slot[527][10];
            return 1 == _owl && (_own >= 1 && (_owk.tyku += 1), _owo >= 1 && (_owk.kaih += 1), _owp >= 1 && (_owk.tyku += 1), _owq >= 1 && (_owk.houm += 1)), _owk;
        };
    },
    30450: (_owr, _ows, _owt) => {
        'use strict';
        var _owu = null;
        defineModule(_ows);
        Object.defineProperty(_ows, '__esModule', {
            'value': true
        }), _ows.getSlot528PersonalEffect = void 0;
        var _owv = _owt(74496);
        _ows.getSlot528PersonalEffect = function(_oww) {
            var _owx = null,
                _owy = new _owv.SlotItemEffectModel(),
                _owz = false,
                _ox0 = new _owv.SlotItemEffectModel(),
                _ox1 = 0;
            if ('イギリス' == _oww.getCountryName() && (_ox0.houg += 1, _ox0.houm += 2, _ox0.kaih += 1, 108 == _oww.ctype && (_ox0.houg += 1, _ox0.kaih += 1), _owz = true, _ox1 = 1), 0 == _owz) return _owy;
            var _ox2 = _oww.get_slotnums(528);
            if (_owy.add(_ox0.multiply(_ox2)), 0 == _ox1) return _owy;
            var _ox3 = _oww.get_each_level_over_nums([528]),
                _ox4 = _ox3.slot[528][2],
                _ox5 = _ox3.slot[528][4],
                _ox6 = _ox3.slot[528][7],
                _ox7 = _ox3.slot[528][10];
            return 1 == _ox1 && (_ox4 >= 1 && (_owy.houg += 1 * _ox4), _ox5 >= 1 && (_owy.houm += 1 * _ox5), _ox6 >= 1 && (_owy.kaih += 1 * _ox6), _ox7 >= 1 && (_owy.houm += 1 * _ox7)), _owy;
        };
    },
    15653: (_ox8, _ox9, _oxa) => {
        'use strict';
        var _oxb = null;
        defineModule(_ox9);
        Object.defineProperty(_ox9, '__esModule', {
            'value': true
        }), _ox9.getSlot530PersonalEffect = void 0;
        var _oxc = _oxa(74496);
        _ox9.getSlot530PersonalEffect = function(_oxd) {
            var _oxe = null,
                _oxf = new _oxc.SlotItemEffectModel(),
                _oxg = false;
            if (6 == _oxd.ctype && (_oxg = true), 0 == _oxg) return _oxf;
            var _oxh = false,
                _oxi = new _oxc.SlotItemEffectModel(),
                _oxj = _oxd.get_slotnums(530),
                _oxk = _oxd.get_slotnums(174),
                _oxl = _oxd.get_each_level_over_nums([530, 174]),
                _oxm = _oxl.slot[530],
                _oxn = _oxl.slot[174],
                _oxo = _oxd.get_have_rader_nums(),
                _oxp = _oxo.water_rader,
                _oxq = _oxo.high_water_rader;
            return _oxo.air_rader, 149 != _oxd.ship_id && 150 != _oxd.ship_id && 151 != _oxd.ship_id && 152 != _oxd.ship_id && 593 != _oxd.ship_id || (_oxi.houg += 2, _oxh = true), 591 != _oxd.ship_id && 954 != _oxd.ship_id || (_oxi.houg += 3, _oxh = true), 592 == _oxd.ship_id && (_oxi.houg += 4, _oxh = true), 149 != _oxd.ship_id && 150 != _oxd.ship_id && 151 != _oxd.ship_id && 152 != _oxd.ship_id || (_oxi.tyku += 1, _oxh = true), 591 != _oxd.ship_id && 592 != _oxd.ship_id && 954 != _oxd.ship_id || (_oxi.tyku += 2, _oxh = true), 593 == _oxd.ship_id && (_oxi.tyku += 3, _oxh = true), 592 == _oxd.ship_id && (_oxi.houg += 1, _oxi.houm += 2, _oxh = true, _oxm[2] >= 1 && (_oxf.houm += 1 * _oxm[2]), _oxm[4] >= 1 && (_oxf.houg += 1 * _oxm[4]), _oxm[6] >= 1 && (_oxf.souk += 1 * _oxm[6]), _oxm[7] >= 1 && (_oxf.houm += 1 * _oxm[7]), _oxm[8] >= 1 && (_oxf.houg += 1 * _oxm[8]), _oxm[9] >= 1 && (_oxf.souk += 1 * _oxm[9]), _oxm[10] >= 1 && (_oxf.houm += 1 * _oxm[10])), 150 != _oxd.ship_id && 152 != _oxd.ship_id && 591 != _oxd.ship_id && 954 != _oxd.ship_id || (_oxi.houm += 1, _oxh = true, _oxm[2] >= 1 && (_oxf.houg += 1 * _oxm[2]), _oxm[4] >= 1 && (_oxf.souk += 1 * _oxm[4]), _oxm[6] >= 1 && (_oxf.houm += 1 * _oxm[6]), _oxm[8] >= 1 && (_oxf.houg += 1 * _oxm[8]), _oxm[10] >= 1 && (_oxf.houm += 1 * _oxm[10])), 149 != _oxd.ship_id && 151 != _oxd.ship_id && 593 != _oxd.ship_id || (_oxm[4] >= 1 && (_oxf.houg += 1 * _oxm[4]), _oxm[7] >= 1 && (_oxf.souk += 1 * _oxm[7]), _oxm[10] >= 1 && (_oxf.houm += 1 * _oxm[10])), 592 == _oxd.ship_id && (_oxp >= 1 && (_oxf.houg += 3, _oxf.houm += 3, _oxf.kaih += 3, 592 == _oxd.ship_id && (_oxf.houg += 3)), _oxj >= 2 && (_oxf.houm += 2), _oxj >= 3 && (_oxf.houm += 2), _oxj >= 4 && (_oxf.houm += 2), _oxq >= 1 && (_oxf.houm += 1)), 149 != _oxd.ship_id && 150 != _oxd.ship_id && 151 != _oxd.ship_id && 152 != _oxd.ship_id && 591 != _oxd.ship_id && 954 != _oxd.ship_id && 593 != _oxd.ship_id || (_oxp >= 1 && (_oxf.houg += 2, _oxf.houm += 2, _oxf.kaih += 2, 591 == _oxd.ship_id || 152 == _oxd.ship_id ? _oxf.houg += 3 : 954 == _oxd.ship_id || 150 == _oxd.ship_id ? _oxf.houg += 2 : 149 != _oxd.ship_id && 151 != _oxd.ship_id && 593 != _oxd.ship_id || (_oxf.houg += 1)), _oxq >= 1 && (_oxf.houm += 1)), 591 != _oxd.ship_id && 592 != _oxd.ship_id && 593 != _oxd.ship_id && 954 != _oxd.ship_id || (_oxk >= 1 && (_oxf.raig += 6, _oxn[6] >= 1 && (_oxf.raig += 1), _oxn[8] >= 1 && (_oxf.houm += 1), _oxn[10] >= 1 && (_oxf.houg += 1)), _oxq >= 1 && (_oxf.houg += 2, _oxf.raig += 2, _oxf.houm += 2, _oxf.kaih += 3, 591 == _oxd.ship_id || 592 == _oxd.ship_id ? _oxf.houg += 2 : 954 != _oxd.ship_id && 593 != _oxd.ship_id || (_oxf.houg += 1)), _oxj >= 2 && (_oxf.houm += 1)), _oxh && _oxf.add(_oxi.multiply(_oxj)), _oxf;
        };
    },
    25851: (_oxr, _oxs, _oxt) => {
        'use strict';
        var _oxu = null;
        defineModule(_oxs);
        Object.defineProperty(_oxs, '__esModule', {
            'value': true
        }), _oxs.getSlot531PersonalEffect = void 0;
        var _oxv = _oxt(74496);
        _oxs.getSlot531PersonalEffect = function(_oxw) {
            var _oxx = null,
                _oxy = new _oxv.SlotItemEffectModel(),
                _oxz = _oxw.have_level_num_over_dict[531];
            return null == _oxz || (_oxz[4] >= 1 && (_oxy.houm += 1 * _oxz[4]), _oxz[5] >= 1 && (_oxy.houg += 1 * _oxz[5]), _oxz[6] >= 1 && (_oxy.kaih += 1 * _oxz[6]), _oxz[7] >= 1 && (_oxy.houm += 1 * _oxz[7]), _oxz[8] >= 1 && (_oxy.houg += 1 * _oxz[8]), _oxz[9] >= 1 && (_oxy.kaih += 1 * _oxz[9]), _oxz[10] >= 1 && (_oxy.houm += 1 * _oxz[10])), _oxy;
        };
    },
    23035: (_oy0, _oy1, _oy2) => {
        'use strict';
        var _oy3 = null;
        defineModule(_oy1);
        Object.defineProperty(_oy1, '__esModule', {
            'value': true
        }), _oy1.getSlot58PersonalEffect = void 0;
        var _oy4 = _oy2(74496);
        _oy1.getSlot58PersonalEffect = function(_oy5) {
            var _oy6 = null,
                _oy7 = new _oy4.SlotItemEffectModel(),
                _oy8 = new _oy4.SlotItemEffectModel();
            if ('しまかぜ' != _oy5.yomi && 4 != _oy5.stype && 54 != _oy5.ctype || (_oy8.raig = 1), !_oy8.exists()) return _oy7;
            var _oy9 = _oy5.get_slotnums(58);
            return _oy7 = _oy8.multiply(_oy9);
        };
    },
    47169: (_oya, _oyb, _oyc) => {
        'use strict';
        var _oyd = null;
        defineModule(_oyb);
        Object.defineProperty(_oyb, '__esModule', {
            'value': true
        }), _oyb.getSlot59PersonalEffect = void 0;
        var _oye = _oyc(74496);
        _oyb.getSlot59PersonalEffect = function(_oyf) {
            var _oyg = null,
                _oyh = new _oye.SlotItemEffectModel();
            return 501 != _oyf.ship_id && 506 != _oyf.ship_id && 502 != _oyf.ship_id && 507 != _oyf.ship_id || (_oyh.tyku += 1, _oyh.kaih += 1), _oyh;
        };
    },
    87845: (_oyi, _oyj, _oyk) => {
        'use strict';
        var _oyl = null;
        defineModule(_oyj);
        Object.defineProperty(_oyj, '__esModule', {
            'value': true
        }), _oyj.getSlot5PersonalEffect = void 0;
        var _oym = _oyk(74496);
        _oyj.getSlot5PersonalEffect = function(_oyn) {
            var _oyo = null,
                _oyp = new _oym.SlotItemEffectModel(),
                _oyq = false,
                _oyr = new _oym.SlotItemEffectModel();
            if (52 != _oyn.ctype && 9 != _oyn.ctype || (_oyr.houg += 1, 52 == _oyn.ctype && (_oyr.houg = _oyr.houg + 1), _oyq = true), 0 == _oyq) return _oyp;
            var _oys = _oyn.get_slotnums(5);
            return _oyp.add(_oyr.multiply(_oys)), _oyp;
        };
    },
    92253: (_oyt, _oyu, _oyv) => {
        'use strict';
        var _oyw = null;
        defineModule(_oyu);
        Object.defineProperty(_oyu, '__esModule', {
            'value': true
        }), _oyu.getSlot60_154_219PersonalEffec = void 0;
        var _oyx = _oyv(74496);
        _oyu.getSlot60_154_219PersonalEffec = function(_oyy) {
            var _oyz = null,
                _oz0 = new _oyx.SlotItemEffectModel(),
                _oz1 = false,
                _oz2 = new _oyx.SlotItemEffectModel();
            if ('じゅんよう' != _oyy.yomi && 'ひよう' != _oyy.yomi && 'ずいほう' != _oyy.yomi && 'ちとせ' != _oyy.yomi && 'ちよだ' != _oyy.yomi || (_oz2.houg += 1, _oz2.tyku += 1, _oz2.kaih += 1, _oz1 = true), 185 != _oyy.ship_id && 318 != _oyy.ship_id && 282 != _oyy.ship_id || (_oz2.houg += 1, _oz2.tyku += 1, _oz2.kaih += 1, _oz1 = true), 888 != _oyy.ship_id && 883 != _oyy.ship_id || (_oz2.houg += 2, _oz2.tyku += 1, _oz2.kaih += 2, _oz1 = true), 0 == _oz1) return _oz0;
            var _oz3 = _oyy.get_slotnums(60) + _oyy.get_slotnums(154) + _oyy.get_slotnums(219);
            return _oz0.add(_oz2.multiply(_oz3)), _oz0;
        };
    },
    2578: (_oz4, _oz5, _oz6) => {
        'use strict';
        var _oz7 = null;
        defineModule(_oz5);
        Object.defineProperty(_oz5, '__esModule', {
            'value': true
        }), _oz5.getSlot61PersonalEffect2 = _oz5.getSlot61PersonalEffect = void 0;
        var _oz8 = _oz6(74496);
        _oz5.getSlot61PersonalEffect = function(_oz9) {
            var _oza = null,
                _ozb = new _oz8.SlotItemEffectModel();
            if (553 == _oz9.ship_id) _ozb.houg = 3, _ozb.kaih = 2, _ozb.souk = 1, _ozb.houm = 5, _ozb.leng = 1;
            else {
                if (554 == _oz9.ship_id) _ozb.houg = 3, _ozb.kaih = 3, _ozb.souk = 3, _ozb.houm = 5, _ozb.leng = 1;
                else {
                    if (196 == _oz9.ship_id) _ozb.houm = 5, _ozb.leng = 1;
                    else {
                        if (197 != _oz9.ship_id) return _ozb;
                        _ozb.houm = 5, _ozb.leng = 1;
                    }
                }
            }
            return _ozb;
        }, _oz5.getSlot61PersonalEffect2 = function(_ozc) {
            var _ozd = null,
                _oze = new _oz8.SlotItemEffectModel();
            if (null == _ozc.have_slots_dict[61]) return _oze;
            for (var _ozf = 0, _ozg = 0, _ozh = _ozc.have_slots_dict[61]; _ozg < _ozh.length; _ozg++) {
                var _ozi = _ozh[_ozg].level;
                _ozf < _ozi && (_ozf = _ozi);
            }
            return 0 == _ozf || ('そうりゅう' == _ozc.yomi ? (_oze.houg += 3, _oze.saku += 3) : 'ひりゅう' == _ozc.yomi && (_oze.houg += 2, _oze.saku += 2), 508 != _ozc.ship_id && 509 != _ozc.ship_id && 560 != _ozc.ship_id || (_oze.houg += 1, _oze.saku += 1), _ozf >= 8 && 197 == _ozc.ship_id && (_oze.houg += 1, _oze.saku += 1)), _oze;
        };
    },
    17143: (_ozj, _ozk, _ozl) => {
        'use strict';
        var _ozm = null;
        defineModule(_ozk);
        Object.defineProperty(_ozk, '__esModule', {
            'value': true
        }), _ozk.getSlot63PersonalEffect = void 0;
        var _ozn = _ozl(74496);
        _ozk.getSlot63PersonalEffect = function(_ozo) {
            var _ozp = null,
                _ozq = new _ozn.SlotItemEffectModel(),
                _ozr = new _ozn.SlotItemEffectModel();
            1 != _ozo.ctype && 5 != _ozo.ctype && 10 != _ozo.ctype || (_ozr.tyku += 1), 'ゆうだち' == _ozo.yomi && (_ozr.houg += 1, _ozr.tyku += 1, _ozr.kaih += 2), 145 == _ozo.ship_id || 961 == _ozo.ship_id ? _ozr.houg += 1 : 144 == _ozo.ship_id ? _ozr.raig += 1 : 469 == _ozo.ship_id ? _ozr.kaih += 2 : 242 == _ozo.ship_id || 497 == _ozo.ship_id || 244 == _ozo.ship_id || 498 == _ozo.ship_id || 975 == _ozo.ship_id ? _ozr.kaih += 1 : 627 == _ozo.ship_id ? _ozr.houg += 1 : 903 != _ozo.ship_id && 908 != _ozo.ship_id || (_ozr.houg += 2);
            var _ozs = true;
            if (_ozr.exists() || (_ozs = false), 0 == _ozs) return _ozq;
            var _ozt = _ozo.get_slotnums(63);
            return _ozq = _ozr.multiply(_ozt);
        };
    },
    16164: (_ozu, _ozv, _ozw) => {
        'use strict';
        var _ozx = null;
        defineModule(_ozv);
        Object.defineProperty(_ozv, '__esModule', {
            'value': true
        }), _ozv.getSlot67PersonalEffect = void 0;
        var _ozy = _ozw(74496);
        _ozv.getSlot67PersonalEffect = function(_ozz) {
            var _p00 = null,
                _p01 = new _ozy.SlotItemEffectModel(),
                _p02 = new _ozy.SlotItemEffectModel();
            if (13 != _ozz.stype && 14 != _ozz.stype && (_p02.raig = -5), !_p02.exists()) return _p01;
            var _p03 = _ozz.get_slotnums(67);
            return _p01 = _p02.multiply(_p03);
        };
    },
    35023: (_p04, _p05, _p06) => {
        'use strict';
        var _p07 = null;
        defineModule(_p05);
        Object.defineProperty(_p05, '__esModule', {
            'value': true
        }), _p05.getSlot69PersonalEffect = void 0;
        var _p08 = _p06(74496);
        _p05.getSlot69PersonalEffect = function(_p09) {
            var _p0a = null,
                _p0b = new _p08.SlotItemEffectModel(),
                _p0c = false,
                _p0d = new _p08.SlotItemEffectModel();
            if (554 == _p09.ship_id || 646 == _p09.ship_id ? (_p0d.houg += 1, _p0d.tais += 2, _p0c = true) : 553 == _p09.ship_id && (_p0d.houg += 1, _p0d.tais += 1, _p0c = true), 0 == _p0c) return _p0b;
            var _p0e = _p09.get_slotnums(69);
            return _p0b.add(_p0d.multiply(_p0e)), _p0b;
        };
    },
    78707: (_p0f, _p0g, _p0h) => {
        'use strict';
        var _p0i = null;
        defineModule(_p0g);
        Object.defineProperty(_p0g, '__esModule', {
            'value': true
        }), _p0g.getSlot70PersonalEffect = void 0;
        var _p0j = _p0h(74496);
        _p0g.getSlot70PersonalEffect = function(_p0k) {
            var _p0l = null,
                _p0m = new _p0j.SlotItemEffectModel(),
                _p0n = false,
                _p0o = new _p0j.SlotItemEffectModel();
            if ('やましおまる' == _p0k.yomi && (_p0o.houg += 1, _p0o.tais += 1, _p0n = true), 0 == _p0n) return _p0m;
            var _p0p = _p0k.get_slotnums(70);
            return _p0m.add(_p0o.multiply(_p0p)), _p0m;
        };
    },
    44680: function(_p0q, _p0r, _p0s) {
        'use strict';
        var _p0t = null;
        var _p0u = this && this.__importDefault || function(_p0v) {
            var _p0w = null;
            return _p0v && _p0v.__esModule ? _p0v : {
                'default': _p0v
            };
        };
        defineModule(_p0r);
        Object.defineProperty(_p0r, '__esModule', {
            'value': true
        }), _p0r.getSlot78PersonalEffect = void 0;
        var _p0x = _p0s(74496),
            _p0y = _p0u(_p0s(18622));
        _p0r.getSlot78PersonalEffect = function(_p0z) {
            var _p10 = null,
                _p11 = new _p0x.SlotItemEffectModel(),
                _p12 = false,
                _p13 = new _p0x.SlotItemEffectModel(),
                _p14 = 0,
                _p15 = 0,
                _p16 = false;
            if (48 == _p0z.ctype && (_p13.houg += 1, _p13.kaih += 1, _p14 = 1, _p15 = 1, _p16 = true, _p12 = true), 0 == _p12) return _p11;
            var _p17 = _p0z.get_slotnums(78);
            _p11.add(_p13.multiply(_p17));
            var _p18 = 0,
                _p19 = _p0z.get_each_level_nums(78),
                _p1a = 0;
            if (_p16) {
                _p19.map(function(_p1b, _p1c) {
                    _p1c >= 7 && (_p1a += _p1b);
                });
                for (var _p1d = 0, _p1e = _p0z.have_slot_ids(); _p1d < _p1e.length; _p1d++) {
                    var _p1f = _p1e[_p1d],
                        _p1g = _p0y.default.model.slot.getMst(_p1f),
                        _p1h = _p1g.equipType;
                    12 != _p1h && 13 != _p1h || _p1g.sakuteki >= 5 && (_p18 += _p0z.get_slotnums(parseInt(_p1f)));
                }
            }
            if (1 == _p14 && _p18 > 0 && (_p11.houg += 2, _p11.kaih += 2, _p11.raig += 2), 1 == _p15) {
                _p11.houg += 1 * _p1a;
                var _p1i = _p19[10];
                _p11.souk += 1 * _p1i;
            }
            return _p11;
        };
    },
    45749: (_p1j, _p1k, _p1l) => {
        'use strict';
        var _p1m = null;
        defineModule(_p1k);
        Object.defineProperty(_p1k, '__esModule', {
            'value': true
        }), _p1k.getSlot79And81PersonalEffect = void 0;
        var _p1n = _p1l(74496);
        _p1k.getSlot79And81PersonalEffect = function(_p1o) {
            var _p1p = null,
                _p1q = new _p1n.SlotItemEffectModel(),
                _p1r = new _p1n.SlotItemEffectModel();
            if (553 == _p1o.ship_id) _p1r.houg = 3;
            else {
                if (82 == _p1o.ship_id) _p1r.houg = 2;
                else {
                    if (88 == _p1o.ship_id) _p1r.houg = 2;
                    else {
                        if (554 == _p1o.ship_id) _p1r.houg = 3;
                        else {
                            if (411 == _p1o.ship_id) _p1r.houg = 2;
                            else {
                                if (412 != _p1o.ship_id) return _p1q;
                                _p1r.houg = 2;
                            }
                        }
                    }
                }
            }
            var _p1s = _p1o.get_slotnums(79) + _p1o.get_slotnums(81);
            return _p1q = _p1r.multiply(_p1s);
        };
    },
    37334: (_p1t, _p1u, _p1v) => {
        'use strict';
        var _p1w = null;
        defineModule(_p1u);
        Object.defineProperty(_p1u, '__esModule', {
            'value': true
        }), _p1u.getSlot82PersonalEffect = void 0;
        var _p1x = _p1v(74496);
        _p1u.getSlot82PersonalEffect = function(_p1y) {
            var _p1z = null,
                _p20 = new _p1x.SlotItemEffectModel(),
                _p21 = new _p1x.SlotItemEffectModel();
            if (76 == _p1y.ctype && (_p21.tais = 1, _p21.kaih = 1), !_p21.exists()) return _p20;
            var _p22 = _p1y.get_slotnums(82);
            return _p20 = _p21.multiply(_p22);
        };
    },
    2603: function(_p23, _p24, _p25) {
        'use strict';
        var _p26 = null;
        var _p27 = this && this.__importDefault || function(_p28) {
            var _p29 = null;
            return _p28 && _p28.__esModule ? _p28 : {
                'default': _p28
            };
        };
        defineModule(_p24);
        Object.defineProperty(_p24, '__esModule', {
            'value': true
        }), _p24.getSlot84PersonalEffect = void 0;
        var _p2a = _p25(74496),
            _p2b = _p27(_p25(18622));
        _p24.getSlot84PersonalEffect = function(_p2c) {
            var _p2d = null,
                _p2e = new _p2a.SlotItemEffectModel(),
                _p2f = _p2c.get_each_level_nums(84),
                _p2g = 0,
                _p2h = 0;
            if (_p2f.forEach(function(_p2i, _p2j) {
                    _p2j >= 4 && (_p2g += _p2i), _p2j >= 7 && (_p2h += _p2i);
                }), 0 == _p2g) return _p2e;
            for (var _p2k = 0, _p2l = 0, _p2m = _p2c.have_slot_ids(); _p2l < _p2m.length; _p2l++) {
                var _p2n = _p2m[_p2l],
                    _p2o = _p2b.default.model.slot.getMst(_p2n),
                    _p2p = _p2o.equipType;
                12 != _p2p && 13 != _p2p || (_p2o.sakuteki >= 5 && _p2c.get_slotnums(parseInt(_p2n)), _p2o.taiku >= 2 && (_p2k += _p2c.get_slotnums(parseInt(_p2n))));
            }
            var _p2q = _p2c.getCountryName();
            _p2g >= 1 && (_p2e.tyku += 1 * _p2g, _p2e.kaih += 1 * _p2g, 'ドイツ' != _p2q && 'イタリア' != _p2q || (_p2e.tyku += 1 * _p2g, _p2e.kaih += 1 * _p2g), _p2k >= 1 && (_p2e.tyku += 1)), _p2h >= 1 && (_p2e.tyku += 1 * _p2h, _p2e.houg += 1 * _p2h);
            var _p2r = _p2f[10];
            return _p2r >= 1 && (_p2e.tyku += 1 * _p2r, _p2e.kaih += 1 * _p2r, 'ドイツ' != _p2q && 'イタリア' != _p2q || (_p2e.houg += 1)), _p2e;
        };
    },
    90725: (_p2s, _p2t, _p2u) => {
        'use strict';
        var _p2v = null;
        defineModule(_p2t);
        Object.defineProperty(_p2t, '__esModule', {
            'value': true
        }), _p2t.getSlot85PersonalEffect = void 0;
        var _p2w = _p2u(74496);
        _p2t.getSlot85PersonalEffect = function(_p2x) {
            var _p2y = null,
                _p2z = new _p2w.SlotItemEffectModel(),
                _p30 = _p2x.get_each_level_over_nums([85]),
                _p31 = _p30.slot[85][6],
                _p32 = _p30.slot[85][8],
                _p33 = _p30.slot[85][10],
                _p34 = _p2x.get_have_rader_nums().air_rader,
                _p35 = _p2x.getCountryName();
            return _p31 > 0 && (_p2z.tyku += 1 * _p31, _p2z.kaih += 1 * _p31, _p34 >= 1 && (_p2z.tyku += 2)), _p32 > 0 && (_p2z.houg += 1 * _p32, 'ドイツ' != _p35 && 'イタリア' != _p35 || (_p2z.tyku += 1 * _p32, _p2z.kaih += 1 * _p32)), _p33 > 0 && (_p2z.kaih += 1 * _p33, _p2z.houm += 1 * _p33, 'ドイツ' != _p35 && 'イタリア' != _p35 || (_p2z.houg += 1)), _p2z;
        };
    },
    29180: (_p36, _p37, _p38) => {
        'use strict';
        var _p39 = null;
        defineModule(_p37);
        Object.defineProperty(_p37, '__esModule', {
            'value': true
        }), _p37.getSlot87PersonalEffect = void 0;
        var _p3a = _p38(74496);
        _p37.getSlot87PersonalEffect = function(_p3b) {
            var _p3c = null,
                _p3d = new _p3a.SlotItemEffectModel(),
                _p3e = false,
                _p3f = new _p3a.SlotItemEffectModel(),
                _p3g = 0;
            if (951 == _p3b.ship_id ? (_p3f.houg += 1, _p3f.kaih += 1, _p3f.raig += 1, _p3f.houm += 1, _p3e = true, _p3g = 1) : 181 == _p3b.ship_id || 316 == _p3b.ship_id || 50 == _p3b.ship_id || 229 == _p3b.ship_id || 961 == _p3b.ship_id ? _p3g = 2 : 591 != _p3b.ship_id && 592 != _p3b.ship_id && 593 != _p3b.ship_id && 954 != _p3b.ship_id || (_p3d.kaih += 2, _p3d.raig += 1, _p3g = 3), 38 != _p3b.ctype && 54 != _p3b.ctype && 101 != _p3b.ctype || (_p3g = 4), _p3e) {
                var _p3h = _p3b.get_slotnums(87);
                _p3d.add(_p3f.multiply(_p3h));
            }
            if (0 == _p3g) return _p3d;
            var _p3i = _p3b.get_each_level_nums(87),
                _p3j = [];
            return _p3g > 0 && _p3i.forEach(function(_p3k, _p3l) {
                var _p3m = null;
                for (var _p3n = 1; _p3n <= _p3b.SLOT_LEVEL_MAX; _p3n++) null == _p3j[_p3n] && (_p3j[_p3n] = 0), _p3l >= _p3n && (_p3j[_p3n] += _p3k);
            }), 1 == _p3g ? (_p3j[6] >= 1 && (_p3d.tyku += 1 * _p3j[6]), _p3j[7] >= 1 && (_p3d.kaih += 1 * _p3j[7]), _p3j[8] >= 1 && (_p3d.raig += 1 * _p3j[8]), _p3j[9] >= 1 && (_p3d.houg += 1 * _p3j[9]), _p3j[10] >= 1 && (_p3d.houm += 1 * _p3j[10])) : 2 == _p3g ? (_p3j[6] >= 1 && (_p3d.kaih += 1 * _p3j[6]), _p3j[7] >= 1 && (_p3d.raig += 1 * _p3j[7]), _p3j[8] >= 1 && (_p3d.houg += 1 * _p3j[8]), _p3j[9] >= 1 && (_p3d.houm += 1 * _p3j[9]), _p3j[10] >= 1 && (_p3d.kaih += 1 * _p3j[10])) : 3 == _p3g ? (_p3j[6] > 0 && (_p3d.kaih += 1), _p3j[8] > 0 && (_p3d.raig += 1), _p3j[10] > 0 && (_p3d.houg += 1)) : 4 == _p3g && (_p3j[7] >= 1 && (_p3d.kaih += 1 * _p3j[7]), _p3j[8] >= 1 && (_p3d.raig += 1 * _p3j[8]), _p3j[10] >= 1 && (_p3d.houm += 1 * _p3j[10])), _p3d;
        };
    },
    68685: function(_p3o, _p3p, _p3q) {
        'use strict';
        var _p3r = null;
        var _p3s = this && this.__importDefault || function(_p3t) {
            var _p3u = null;
            return _p3t && _p3t.__esModule ? _p3t : {
                'default': _p3t
            };
        };
        defineModule(_p3p);
        Object.defineProperty(_p3p, '__esModule', {
            'value': true
        }), _p3p.getSlot90PersonalEffect = void 0;
        var _p3v = _p3q(74496),
            _p3w = _p3s(_p3q(18622));
        _p3p.getSlot90PersonalEffect = function(_p3x) {
            var _p3y = null,
                _p3z = new _p3v.SlotItemEffectModel(),
                _p40 = new _p3v.SlotItemEffectModel();
            if (142 == _p3x.ship_id ? (_p40.houg += 2, _p40.kaih += 1) : 295 == _p3x.ship_id || 416 == _p3x.ship_id || 417 == _p3x.ship_id ? _p40.houg += 1 : 264 == _p3x.ship_id ? (_p40.houg += 1, _p40.tyku += 1) : 501 != _p3x.ship_id && 506 != _p3x.ship_id && 502 != _p3x.ship_id && 507 != _p3x.ship_id || (_p40.houg += 1), 7 != _p3x.ctype && 13 != _p3x.ctype && 8 != _p3x.ctype && 29 != _p3x.ctype && 9 != _p3x.ctype && 31 != _p3x.ctype || (_p40.houg += 1), _p40.exists()) {
                var _p41 = _p3x.get_slotnums(90);
                _p3z = _p40.multiply(_p41);
            }
            var _p42 = [];
            if ('あおば' == _p3x.yomi && (_p42[1] = 1), 13 != _p3x.ctype && 7 != _p3x.ctype || (_p42[2] = 1), 0 == _p42.length) return _p3z;
            for (var _p43 = 0, _p44 = 0, _p45 = 0, _p46 = _p3x.have_slot_ids(); _p45 < _p46.length; _p45++) {
                var _p47 = _p46[_p45],
                    _p48 = _p3w.default.model.slot.getMst(_p47),
                    _p49 = _p48.equipType;
                12 != _p49 && 13 != _p49 || (_p48.sakuteki >= 5 && (_p43 += _p3x.get_slotnums(parseInt(_p47))), _p48.taiku >= 2 && (_p44 += _p3x.get_slotnums(parseInt(_p47))));
            }
            return _p44 > 0 && null != _p42[1] && (_p3z.tyku += 5, _p3z.kaih += 2), _p43 > 0 && null != _p42[2] && (_p3z.houg += 3, _p3z.kaih += 2, _p3z.raig += 2), _p3z;
        };
    },
    26078: (_p4a, _p4b, _p4c) => {
        'use strict';
        var _p4d = null;
        defineModule(_p4b);
        Object.defineProperty(_p4b, '__esModule', {
            'value': true
        }), _p4b.getSlot93PersonalEffect = void 0;
        var _p4e = _p4c(74496);
        _p4b.getSlot93PersonalEffect = function(_p4f) {
            var _p4g = null,
                _p4h = new _p4e.SlotItemEffectModel();
            return 'そうりゅう' == _p4f.yomi ? _p4h.houg = 1 : 'ひりゅう' == _p4f.yomi && (_p4h.houg = 3), _p4h;
        };
    },
    20829: (_p4i, _p4j, _p4k) => {
        'use strict';
        var _p4l = null;
        defineModule(_p4j);
        Object.defineProperty(_p4j, '__esModule', {
            'value': true
        }), _p4j.getSlot94PersonalEffect = void 0;
        var _p4m = _p4k(74496);
        _p4j.getSlot94PersonalEffect = function(_p4n) {
            var _p4o = null,
                _p4p = new _p4m.SlotItemEffectModel();
            if (196 == _p4n.ship_id) _p4p.houg = 7;
            else {
                if (197 != _p4n.ship_id) return _p4p;
                _p4p.houg = 3;
            }
            return _p4p;
        };
    },
    6880: (_p4q, _p4r, _p4s) => {
        'use strict';
        var _p4t = null;
        defineModule(_p4r);
        Object.defineProperty(_p4r, '__esModule', {
            'value': true
        }), _p4r.getSlot99PersonalEffect = void 0;
        var _p4u = _p4s(74496);
        _p4r.getSlot99PersonalEffect = function(_p4v) {
            var _p4w = null,
                _p4x = new _p4u.SlotItemEffectModel();
            return 'そうりゅう' == _p4v.yomi ? _p4x.houg = 4 : 'ひりゅう' == _p4v.yomi && (_p4x.houg = 1), _p4x;
        };
    },
    21403: (_p4y, _p4z, _p50) => {
        'use strict';
        var _p51 = null;
        defineModule(_p4z);
        Object.defineProperty(_p4z, '__esModule', {
            'value': true
        }), _p4z.getSlotCorsairMkIIPersonalEffect = void 0;
        var _p52 = _p50(74496);
        _p4z.getSlotCorsairMkIIPersonalEffect = function(_p53) {
            var _p54 = null,
                _p55 = new _p52.SlotItemEffectModel(),
                _p56 = false,
                _p57 = new _p52.SlotItemEffectModel();
            112 == _p53.ctype && (_p57.houg += 1, _p57.tyku += 1, _p57.kaih += 2, _p56 = true);
            var _p58 = _p53.getCountryName();
            if (67 == _p53.ctype || 78 == _p53.ctype || 82 == _p53.ctype || 88 == _p53.ctype || 108 == _p53.ctype || 112 == _p53.ctype ? (_p57.houg += 1, _p57.tyku += 2, _p57.kaih += 3, _p56 = true) : 'アメリカ' == _p58 && (_p57.houg += 1, _p57.tyku += 1, _p57.kaih += 2, _p56 = true), 0 == _p56) return _p55;
            var _p59 = _p53.get_slotnums(434) + _p53.get_slotnums(435);
            return _p55.add(_p57.multiply(_p59)), _p55;
        };
    },
    9195: (_p5a, _p5b, _p5c) => {
        'use strict';
        var _p5d = null;
        defineModule(_p5b);
        Object.defineProperty(_p5b, '__esModule', {
            'value': true
        }), _p5b.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _p5e = _p5c(74496);
        _p5b.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_p5f) {
            var _p5g = null,
                _p5h = new _p5e.SlotItemEffectModel(),
                _p5i = false,
                _p5j = new _p5e.SlotItemEffectModel();
            if (56 == _p5f.ctype && (_p5j.tais += 3, _p5j.kaih += 2, _p5i = true), 0 == _p5i) return _p5h;
            var _p5k = _p5f.get_slotnums(44) + _p5f.get_slotnums(45) + _p5f.get_slotnums(287) + _p5f.get_slotnums(288);
            return _p5h.add(_p5j.multiply(_p5k)), _p5h;
        };
    },
    93297: (_p5l, _p5m, _p5n) => {
        'use strict';
        var _p5o = null;
        defineModule(_p5m);
        Object.defineProperty(_p5m, '__esModule', {
            'value': true
        }), _p5m.getSlotDomesticSonarPersonalEffect = void 0;
        var _p5p = _p5n(74496);
        _p5m.getSlotDomesticSonarPersonalEffect = function(_p5q) {
            var _p5r = null,
                _p5s = new _p5p.SlotItemEffectModel();
            return 56 == _p5q.ctype && (_p5s.tais += 2, _p5s.kaih += 3), _p5s;
        };
    },
    45482: (_p5t, _p5u, _p5v) => {
        'use strict';
        var _p5w = null;
        defineModule(_p5u);
        Object.defineProperty(_p5u, '__esModule', {
            'value': true
        }), _p5u.getSlotOtherSuiseiPersonalEffect = void 0;
        var _p5x = _p5v(74496);
        _p5u.getSlotOtherSuiseiPersonalEffect = function(_p5y) {
            var _p5z = null,
                _p60 = new _p5x.SlotItemEffectModel(),
                _p61 = new _p5x.SlotItemEffectModel();
            if (553 == _p5y.ship_id) _p61.houg = 2;
            else {
                if (554 != _p5y.ship_id) return _p60;
                _p61.houg = 2;
            }
            var _p62 = _p5y.get_slotnums(24) + _p5y.get_slotnums(57) + _p5y.get_slotnums(111);
            return _p60 = _p61.multiply(_p62);
        };
    },
    45927: (_p63, _p64, _p65) => {
        'use strict';
        var _p66 = null;
        defineModule(_p64);
        Object.defineProperty(_p64, '__esModule', {
            'value': true
        }), _p64.getSlotSmokePersonalEffect = void 0;
        var _p67 = _p65(74496);
        _p64.getSlotSmokePersonalEffect = function(_p68) {
            var _p69 = null,
                _p6a = new _p67.SlotItemEffectModel(),
                _p6b = false,
                _p6c = new _p67.SlotItemEffectModel();
            if (959 == _p68.ship_id && (_p6c.kaih += 4, _p6b = true), 'ジョンストン' == _p68.yomi || 'サミュエル・B・ロバーツ' == _p68.yomi || 'せんだい' == _p68.yomi || 'はるかぜ' == _p68.yomi || 'かみかぜ' == _p68.yomi || 'しきなみ' == _p68.yomi || 'うらなみ' == _p68.yomi || 'あおば' == _p68.yomi ? (_p6c.kaih += 3, _p6b = true) : 'いなづま' != _p68.yomi && 'はぐろ' != _p68.yomi && 'はつしも' != _p68.yomi && 'かすみ' != _p68.yomi && 'ふぶき' != _p68.yomi && 'あたご' != _p68.yomi && 'あまぎり' != _p68.yomi && 'はまなみ' != _p68.yomi || (_p6c.kaih += 2, _p6b = true), 0 == _p6b) return _p6a;
            var _p6d = _p68.get_slotnums(500) + _p68.get_slotnums(501);
            return _p6a.add(_p6c.multiply(_p6d)), _p6a;
        };
    },
    32666: (_p6e, _p6f, _p6g) => {
        'use strict';
        var _p6h = null;
        defineModule(_p6f);
        Object.defineProperty(_p6f, '__esModule', {
            'value': true
        }), _p6f.getSlotTokuYonPersonalEffect = void 0;
        var _p6i = _p6g(74496);
        _p6f.getSlotTokuYonPersonalEffect = function(_p6j) {
            var _p6k = null,
                _p6l = new _p6i.SlotItemEffectModel(),
                _p6m = false,
                _p6n = new _p6i.SlotItemEffectModel(),
                _p6o = 0,
                _p6p = _p6j.get_slotnums(525),
                _p6q = _p6j.get_slotnums(526),
                _p6r = _p6p + _p6q;
            if (13 != _p6j.stype && 14 != _p6j.stype || (_p6n.houg += 1, _p6n.raig += 2, _p6n.kaih -= 1, _p6m = true, _p6o = 1, 'い36' != _p6j.yomi && 'い41' != _p6j.yomi || (_p6l.houg += 2, _p6l.raig += 1, _p6l.houm += 2), _p6q >= 1 && (_p6l.houg += 1 * _p6q, _p6l.raig += 1 * _p6q, _p6l.houm += 1 * _p6q)), 0 == _p6m) return _p6l;
            if (_p6l.add(_p6n.multiply(_p6r)), 0 == _p6o) return _p6l;
            var _p6s = _p6j.get_each_level_over_nums([525, 526]),
                _p6t = _p6s.slot[525],
                _p6u = _p6s.slot[526];
            if (1 == _p6o) {
                if (_p6t[1] >= 1 || _p6u[1] >= 1) {
                    var _p6v = _p6t[1] + _p6u[1];
                    _p6l.raig += 1 * _p6v;
                }
                if (_p6u[2] >= 1) {
                    var _p6w = _p6t[2] + _p6u[2];
                    _p6l.houg += 1 * _p6w;
                }
                if (_p6t[3] >= 1 || _p6u[3] >= 1) {
                    var _p6x = _p6t[3] + _p6u[3];
                    _p6l.houm += 1 * _p6x;
                }
                if (_p6u[4] >= 1) {
                    var _p6y = _p6t[4] + _p6u[4];
                    _p6l.raig += 1 * _p6y;
                }
                if (_p6t[6] >= 1 || _p6u[6] >= 1) {
                    var _p6z = _p6t[6] + _p6u[6];
                    _p6l.houm += 1 * _p6z;
                }
                if (_p6u[8] >= 1) {
                    var _p70 = _p6t[8] + _p6u[8];
                    _p6l.houg += 1 * _p70;
                }
                if (_p6t[10] >= 1 || _p6u[10] >= 1) {
                    var _p71 = _p6t[10] + _p6u[10];
                    _p6l.raig += 1 * _p71;
                }
            }
            return _p6l;
        };
    },
    29805: (_p72, _p73, _p74) => {
        'use strict';
        var _p75 = null;
        defineModule(_p73);
        Object.defineProperty(_p73, '__esModule', {
            'value': true
        }), _p73.getSlotType10PersonalEffect = void 0;
        var _p76 = _p74(74496);
        _p73.getSlotType10PersonalEffect = function(_p77) {
            var _p78 = null,
                _p79 = new _p76.SlotItemEffectModel();
            return 662 == _p77.ship_id || 663 == _p77.ship_id || 668 == _p77.ship_id ? (_p79.houg += 2, _p79.kaih += 1, _p79.tais += 3) : 501 != _p77.ship_id && 506 != _p77.ship_id && 502 != _p77.ship_id && 507 != _p77.ship_id || (_p79.houg += 2), _p79;
        };
    },
    58913: (_p7a, _p7b, _p7c) => {
        'use strict';
        var _p7d = null;
        defineModule(_p7b);
        Object.defineProperty(_p7b, '__esModule', {
            'value': true
        }), _p7b.getSlotType11PersonalEffect = void 0;
        var _p7e = _p7c(74496);
        _p7b.getSlotType11PersonalEffect = function(_p7f) {
            var _p7g = null,
                _p7h = new _p7e.SlotItemEffectModel();
            return 662 == _p7f.ship_id || 663 == _p7f.ship_id || 668 == _p7f.ship_id ? (_p7h.houg += 1, _p7h.kaih += 1, _p7h.tais += 1) : 501 != _p7f.ship_id && 506 != _p7f.ship_id && 502 != _p7f.ship_id && 507 != _p7f.ship_id || (_p7h.houg += 1, _p7h.kaih += 1), _p7h;
        };
    },
    55421: (_p7i, _p7j, _p7k) => {
        'use strict';
        var _p7l = null;
        defineModule(_p7j);
        Object.defineProperty(_p7j, '__esModule', {
            'value': true
        }), _p7j.getSlotType25PersonalEffect = void 0;
        var _p7m = _p7k(74496);
        _p7j.getSlotType25PersonalEffect = function(_p7n) {
            var _p7o = null,
                _p7p = new _p7m.SlotItemEffectModel();
            return 662 == _p7n.ship_id ? (_p7p.tais += 4, _p7p.kaih += 1) : 663 != _p7n.ship_id && 668 != _p7n.ship_id || (_p7p.tais += 3, _p7p.kaih += 1), _p7p;
        };
    },
    272: function(_p7q, _p7r, _p7s) {
        'use strict';
        var _p7t = null;
        var _p7u = this && this.__importDefault || function(_p7v) {
            var _p7w = null;
            return _p7v && _p7v.__esModule ? _p7v : {
                'default': _p7v
            };
        };
        defineModule(_p7r);
        Object.defineProperty(_p7r, '__esModule', {
            'value': true
        }), _p7r.getSlotType9PersonalEffect = void 0;
        var _p7x = _p7s(74496),
            _p7y = _p7u(_p7s(18622));
        _p7r.getSlotType9PersonalEffect = function(_p7z) {
            var _p80 = null,
                _p81 = new _p7x.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_p7z.stype]) return _p81;
            for (var _p82 = 0, _p83 = 0, _p84 = _p7z.have_slot_ids(); _p83 < _p84.length; _p83++) {
                var _p85 = _p84[_p83];
                if (9 == _p7y.default.model.slot.getMst(_p85).equipType)
                    for (var _p86 = 0, _p87 = _p7z.have_slots_dict[parseInt(_p85)]; _p86 < _p87.length; _p86++) {
                        var _p88 = _p87[_p86].level;
                        _p82 < _p88 && (_p82 = _p88);
                    }
            }
            return _p82 >= 2 && (_p81.saku += 1), _p82 >= 4 && (_p81.houg += 1), _p82 >= 6 && (_p81.saku += 1), _p82 >= 10 && (_p81.houg += 1, _p81.saku += 1), _p81;
        };
    },
    54518: (_p89, _p8a, _p8b) => {
        'use strict';
        var _p8c = null;
        defineModule(_p8a);
        Object.defineProperty(_p8a, '__esModule', {
            'value': true
        }), _p8a.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _p8d = _p8b(74496);
        _p8a.getSlot_16InchMkXRensouhou_PersonalEffect = function(_p8e) {
            var _p8f = null,
                _p8g = new _p8d.SlotItemEffectModel();
            if (93 == _p8e.ctype) {
                var _p8h = _p8e.get_slotnums(330);
                _p8h > 0 && (_p8g.houg = _p8g.houg + 1 * _p8h);
                var _p8i = _p8e.get_slotnums(331);
                _p8i > 0 && (_p8g.houg = _p8g.houg + 1 * _p8i, 1496 != _p8e.ship_id && 918 != _p8e.ship_id || (_p8g.houg = _p8g.houg + 1 * _p8i, _p8g.kaih = _p8g.kaih + 1 * _p8i));
                var _p8j = _p8e.get_slotnums(332);
                return _p8j > 0 && (_p8g.houg = _p8g.houg + 1 * _p8j, 1496 != _p8e.ship_id && 918 != _p8e.ship_id || (_p8g.houg = _p8g.houg + 1 * _p8j, _p8g.kaih = _p8g.kaih + 1 * _p8j, _p8g.tyku = _p8g.tyku + 1 * _p8j)), _p8g;
            }
            var _p8k = new _p8d.SlotItemEffectModel();
            if (19 == _p8e.ctype ? (_p8k.houg = 1, (541 == _p8e.ship_id || 573 == _p8e.ship_id) && (_p8k.houg += 1)) : 88 == _p8e.ctype && (_p8k.houg = 1, 576 == _p8e.ship_id && (_p8k.houg += 1)), !_p8k.exists()) return _p8g;
            var _p8l = _p8e.get_slotnums(330) + _p8e.get_slotnums(331) + _p8e.get_slotnums(332);
            return _p8g = _p8k.multiply(_p8l);
        };
    },
    79353: (_p8m, _p8n, _p8o) => {
        'use strict';
        var _p8p = null;
        defineModule(_p8n);
        Object.defineProperty(_p8n, '__esModule', {
            'value': true
        }), _p8n.getZuiunSeriesEffect = void 0;
        var _p8q = _p8o(74496);
        _p8n.getZuiunSeriesEffect = function(_p8r) {
            var _p8s = null,
                _p8t = new _p8q.SlotItemEffectModel(),
                _p8u = false,
                _p8v = new _p8q.SlotItemEffectModel();
            if (662 == _p8r.ship_id ? (_p8t.houg += 2, _p8t.kaih += 1) : 663 == _p8r.ship_id || 668 == _p8r.ship_id || 501 == _p8r.ship_id || 506 == _p8r.ship_id ? (_p8t.houg += 2, _p8v.kaih += 1, _p8v.tyku += 1, _p8u = true) : 502 != _p8r.ship_id && 507 != _p8r.ship_id || (_p8t.houg += 1, _p8v.kaih += 1, _p8v.tyku += 1, _p8u = true), 0 == _p8u) return _p8t;
            var _p8w = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_p8x) {
                var _p8y = null;
                _p8w += _p8r.get_slotnums(_p8x);
            }), _p8t.add(_p8v.multiply(_p8w)), _p8t;
        };
    },
    89051: function(_p8z, _p90, _p91) {
        'use strict';
        var _p92 = null;
        var _p93 = this && this.__createBinding || (Object.create ? function(_p94, _p95, _p96, _p97) {
                var _p98 = null;
                void 0 === _p97 && (_p97 = _p96);
                var _p99 = Object.getOwnPropertyDescriptor(_p95, _p96);
                _p99 && !('get' in _p99 ? !_p95.__esModule : _p99.writable || _p99.configurable) || (_p99 = {
                    'enumerable': true,
                    'get': function() {
                        return _p95[_p96];
                    }
                }), Object.defineProperty(_p94, _p97, _p99);
            } : function(_p9a, _p9b, _p9c, _p9d) {
                void 0 === _p9d && (_p9d = _p9c), _p9a[_p9d] = _p9b[_p9c];
            }),
            _p9e = this && this.__exportStar || function(_p9f, _p9g) {
                var _p9h = null;
                for (var _p9i in _p9f) 'default' === _p9i || Object.prototype.hasOwnProperty.call(_p9g, _p9i) || _p93(_p9g, _p9f, _p9i);
            };
        defineModule(_p90);
        Object.defineProperty(_p90, '__esModule', {
            'value': true
        }), _p9e(_p91(34165), _p90), _p9e(_p91(81018), _p90), _p9e(_p91(56716), _p90), _p9e(_p91(17713), _p90), _p9e(_p91(54518), _p90), _p9e(_p91(66985), _p90), _p9e(_p91(88102), _p90), _p9e(_p91(66904), _p90), _p9e(_p91(98137), _p90), _p9e(_p91(69954), _p90), _p9e(_p91(22218), _p90), _p9e(_p91(88271), _p90), _p9e(_p91(23035), _p90), _p9e(_p91(2578), _p90), _p9e(_p91(17143), _p90), _p9e(_p91(16164), _p90), _p9e(_p91(35023), _p90), _p9e(_p91(44680), _p90), _p9e(_p91(45749), _p90), _p9e(_p91(37334), _p90), _p9e(_p91(29180), _p90), _p9e(_p91(68685), _p90), _p9e(_p91(26078), _p90), _p9e(_p91(20829), _p90), _p9e(_p91(6880), _p90), _p9e(_p91(17213), _p90), _p9e(_p91(40176), _p90), _p9e(_p91(32889), _p90), _p9e(_p91(11285), _p90), _p9e(_p91(96200), _p90), _p9e(_p91(9115), _p90), _p9e(_p91(37173), _p90), _p9e(_p91(21713), _p90), _p9e(_p91(59823), _p90), _p9e(_p91(57440), _p90), _p9e(_p91(29240), _p90), _p9e(_p91(40885), _p90), _p9e(_p91(19614), _p90), _p9e(_p91(87220), _p90), _p9e(_p91(81367), _p90), _p9e(_p91(13052), _p90), _p9e(_p91(94968), _p90), _p9e(_p91(48658), _p90), _p9e(_p91(1906), _p90), _p9e(_p91(61887), _p90), _p9e(_p91(47970), _p90), _p9e(_p91(31797), _p90), _p9e(_p91(45738), _p90), _p9e(_p91(34718), _p90), _p9e(_p91(69245), _p90), _p9e(_p91(18478), _p90), _p9e(_p91(2899), _p90), _p9e(_p91(57120), _p90), _p9e(_p91(74985), _p90), _p9e(_p91(9234), _p90), _p9e(_p91(30802), _p90), _p9e(_p91(97002), _p90), _p9e(_p91(16748), _p90), _p9e(_p91(53618), _p90), _p9e(_p91(72573), _p90), _p9e(_p91(8955), _p90), _p9e(_p91(98947), _p90), _p9e(_p91(44726), _p90), _p9e(_p91(93065), _p90), _p9e(_p91(85767), _p90), _p9e(_p91(38314), _p90), _p9e(_p91(59747), _p90), _p9e(_p91(40649), _p90), _p9e(_p91(13533), _p90), _p9e(_p91(12138), _p90), _p9e(_p91(30042), _p90), _p9e(_p91(33623), _p90), _p9e(_p91(85630), _p90), _p9e(_p91(88736), _p90), _p9e(_p91(49341), _p90), _p9e(_p91(74306), _p90), _p9e(_p91(83898), _p90), _p9e(_p91(71873), _p90), _p9e(_p91(53122), _p90), _p9e(_p91(51063), _p90), _p9e(_p91(91491), _p90), _p9e(_p91(85495), _p90), _p9e(_p91(65365), _p90), _p9e(_p91(98164), _p90), _p9e(_p91(38114), _p90), _p9e(_p91(21003), _p90), _p9e(_p91(77010), _p90), _p9e(_p91(39126), _p90), _p9e(_p91(72176), _p90), _p9e(_p91(33846), _p90), _p9e(_p91(97157), _p90), _p9e(_p91(63406), _p90), _p9e(_p91(66373), _p90), _p9e(_p91(19707), _p90), _p9e(_p91(63978), _p90), _p9e(_p91(92382), _p90), _p9e(_p91(78415), _p90), _p9e(_p91(23090), _p90), _p9e(_p91(18776), _p90), _p9e(_p91(39656), _p90), _p9e(_p91(66039), _p90), _p9e(_p91(64679), _p90), _p9e(_p91(95953), _p90), _p9e(_p91(86384), _p90), _p9e(_p91(65345), _p90), _p9e(_p91(46514), _p90), _p9e(_p91(81976), _p90), _p9e(_p91(89331), _p90), _p9e(_p91(73973), _p90), _p9e(_p91(21178), _p90), _p9e(_p91(5079), _p90), _p9e(_p91(95014), _p90), _p9e(_p91(53099), _p90), _p9e(_p91(76201), _p90), _p9e(_p91(24931), _p90), _p9e(_p91(60978), _p90), _p9e(_p91(74312), _p90), _p9e(_p91(54350), _p90), _p9e(_p91(26262), _p90), _p9e(_p91(45530), _p90), _p9e(_p91(44053), _p90), _p9e(_p91(65441), _p90), _p9e(_p91(33258), _p90), _p9e(_p91(92168), _p90), _p9e(_p91(85975), _p90), _p9e(_p91(98467), _p90), _p9e(_p91(88348), _p90), _p9e(_p91(21097), _p90), _p9e(_p91(37273), _p90), _p9e(_p91(72694), _p90), _p9e(_p91(62067), _p90), _p9e(_p91(87817), _p90), _p9e(_p91(93526), _p90), _p9e(_p91(33084), _p90), _p9e(_p91(97831), _p90), _p9e(_p91(45482), _p90), _p9e(_p91(272), _p90), _p9e(_p91(69377), _p90), _p9e(_p91(31127), _p90), _p9e(_p91(79353), _p90), _p9e(_p91(17274), _p90), _p9e(_p91(91302), _p90), _p9e(_p91(82229), _p90), _p9e(_p91(10325), _p90), _p9e(_p91(351), _p90), _p9e(_p91(4050), _p90), _p9e(_p91(29805), _p90), _p9e(_p91(58913), _p90), _p9e(_p91(55421), _p90), _p9e(_p91(87845), _p90), _p9e(_p91(17562), _p90), _p9e(_p91(78466), _p90), _p9e(_p91(40061), _p90), _p9e(_p91(9195), _p90), _p9e(_p91(93297), _p90), _p9e(_p91(15133), _p90), _p9e(_p91(55747), _p90), _p9e(_p91(33155), _p90), _p9e(_p91(79086), _p90), _p9e(_p91(2306), _p90), _p9e(_p91(14386), _p90), _p9e(_p91(80225), _p90), _p9e(_p91(17732), _p90), _p9e(_p91(47169), _p90), _p9e(_p91(77670), _p90), _p9e(_p91(79988), _p90), _p9e(_p91(92253), _p90), _p9e(_p91(74428), _p90), _p9e(_p91(16498), _p90), _p9e(_p91(2631), _p90), _p9e(_p91(27177), _p90), _p9e(_p91(94781), _p90), _p9e(_p91(53908), _p90), _p9e(_p91(79813), _p90), _p9e(_p91(16088), _p90), _p9e(_p91(93733), _p90), _p9e(_p91(69939), _p90), _p9e(_p91(33734), _p90), _p9e(_p91(34432), _p90), _p9e(_p91(97423), _p90), _p9e(_p91(23551), _p90), _p9e(_p91(99791), _p90), _p9e(_p91(21403), _p90), _p9e(_p91(6173), _p90), _p9e(_p91(23934), _p90), _p9e(_p91(53709), _p90), _p9e(_p91(88838), _p90), _p9e(_p91(99790), _p90), _p9e(_p91(18387), _p90), _p9e(_p91(70941), _p90), _p9e(_p91(35025), _p90), _p9e(_p91(2603), _p90), _p9e(_p91(78707), _p90), _p9e(_p91(89058), _p90), _p9e(_p91(84372), _p90), _p9e(_p91(96804), _p90), _p9e(_p91(33896), _p90), _p9e(_p91(11031), _p90), _p9e(_p91(71383), _p90), _p9e(_p91(55888), _p90), _p9e(_p91(2258), _p90), _p9e(_p91(38003), _p90), _p9e(_p91(92174), _p90), _p9e(_p91(43768), _p90), _p9e(_p91(73254), _p90), _p9e(_p91(55734), _p90), _p9e(_p91(81254), _p90), _p9e(_p91(65455), _p90), _p9e(_p91(70362), _p90), _p9e(_p91(61977), _p90), _p9e(_p91(43607), _p90), _p9e(_p91(68086), _p90), _p9e(_p91(78173), _p90), _p9e(_p91(22581), _p90), _p9e(_p91(20418), _p90), _p9e(_p91(93373), _p90), _p9e(_p91(13053), _p90), _p9e(_p91(47874), _p90), _p9e(_p91(42788), _p90), _p9e(_p91(57664), _p90), _p9e(_p91(44990), _p90), _p9e(_p91(17712), _p90), _p9e(_p91(83957), _p90), _p9e(_p91(78539), _p90), _p9e(_p91(96282), _p90), _p9e(_p91(49679), _p90), _p9e(_p91(45927), _p90), _p9e(_p91(90312), _p90), _p9e(_p91(86856), _p90), _p9e(_p91(78123), _p90), _p9e(_p91(25765), _p90), _p9e(_p91(29493), _p90), _p9e(_p91(28221), _p90), _p9e(_p91(14830), _p90), _p9e(_p91(54047), _p90), _p9e(_p91(76054), _p90), _p9e(_p91(90725), _p90), _p9e(_p91(93053), _p90), _p9e(_p91(88792), _p90), _p9e(_p91(33242), _p90), _p9e(_p91(59415), _p90), _p9e(_p91(3296), _p90), _p9e(_p91(32666), _p90), _p9e(_p91(36731), _p90), _p9e(_p91(30450), _p90), _p9e(_p91(85127), _p90), _p9e(_p91(87204), _p90), _p9e(_p91(2380), _p90), _p9e(_p91(96580), _p90), _p9e(_p91(15653), _p90), _p9e(_p91(41410), _p90), _p9e(_p91(25851), _p90);
    },
    82692: function(_p9j, _p9k, _p9l) {
        'use strict';
        var _p9m = null;
        var _p9n = this && this.__createBinding || (Object.create ? function(_p9o, _p9p, _p9q, _p9r) {
                var _p9s = null;
                void 0 === _p9r && (_p9r = _p9q);
                var _p9t = Object.getOwnPropertyDescriptor(_p9p, _p9q);
                _p9t && !('get' in _p9t ? !_p9p.__esModule : _p9t.writable || _p9t.configurable) || (_p9t = {
                    'enumerable': true,
                    'get': function() {
                        return _p9p[_p9q];
                    }
                }), Object.defineProperty(_p9o, _p9r, _p9t);
            } : function(_p9u, _p9v, _p9w, _p9x) {
                void 0 === _p9x && (_p9x = _p9w), _p9u[_p9x] = _p9v[_p9w];
            }),
            _p9y = this && this.__setModuleDefault || (Object.create ? function(_p9z, _pa0) {
                var _pa1 = null;
                Object.defineProperty(_p9z, 'default', {
                    'enumerable': true,
                    'value': _pa0
                });
            } : function(_pa2, _pa3) {
                var _pa4 = null;
                _pa2.default = _pa3;
            }),
            _pa5 = this && this.__importStar || function(_pa6) {
                var _pa7 = null;
                if (_pa6 && _pa6.__esModule) return _pa6;
                var _pa8 = {};
                if (null != _pa6) {
                    for (var _pa9 in _pa6) 'default' !== _pa9 && Object.prototype.hasOwnProperty.call(_pa6, _pa9) && _p9n(_pa8, _pa6, _pa9);
                }
                return _p9y(_pa8, _pa6), _pa8;
            };
        defineModule(_p9k);
        Object.defineProperty(_p9k, '__esModule', {
            'value': true
        }), _p9k.SlotItemEffectUtil = void 0;
        var _paa, _pab = _p9l(73785),
            _pac = _pa5(_p9l(89051)),
            _pad = _p9l(74496);
        ! function(_pae) {
            var _paf = null;
            _pae.getSlotitemEffect = function(_pag, _pah) {
                var _pai = null;
                if (null == _pag || null == _pah) return null;
                for (var _paj = new _pab.SlotItemEffectParamModel(_pag, _pah), _pak = [{
                        'isExecute': Boolean(_paj.get_type3_nums(9)),
                        'execFunc': _pac.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_type3_nums(10)),
                        'execFunc': _pac.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_type3_nums(11)),
                        'execFunc': _pac.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_type3_nums(12)) || Boolean(_paj.get_type3_nums(13)),
                        'execFunc': _pac.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_paj.get_type3_nums(25)),
                        'execFunc': _pac.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_type3_nums(29)),
                        'execFunc': _pac.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_paj.get_type3_nums(42)),
                        'execFunc': _pac.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(3)) || Boolean(_paj.get_slotnums(122)) || Boolean(_paj.get_slotnums(533)),
                        'execFunc': _pac.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(5)),
                        'execFunc': _pac.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(12)),
                        'execFunc': _pac.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(15)),
                        'execFunc': _pac.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(18)) || Boolean(_paj.get_slotnums(52)),
                        'execFunc': _pac.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(19)),
                        'execFunc': _pac.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(24)) || Boolean(_paj.get_slotnums(57)) || Boolean(_paj.get_slotnums(111)),
                        'execFunc': _pac.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(26)) || Boolean(_paj.get_slotnums(62)) || Boolean(_paj.get_slotnums(79)) || Boolean(_paj.get_slotnums(80)) || Boolean(_paj.get_slotnums(81)) || Boolean(_paj.get_slotnums(207)) || Boolean(_paj.get_slotnums(208)),
                        'execFunc': _pac.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(35)),
                        'execFunc': _pac.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(39)) || Boolean(_paj.get_slotnums(40)) || Boolean(_paj.get_slotnums(49)) || Boolean(_paj.get_slotnums(131)),
                        'execFunc': _pac.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(30)) || Boolean(_paj.get_slotnums(410)),
                        'execFunc': _pac.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(44)) || Boolean(_paj.get_slotnums(45)) || Boolean(_paj.get_slotnums(287)) || Boolean(_paj.get_slotnums(288)),
                        'execFunc': _pac.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(46)) || Boolean(_paj.get_slotnums(47)) || Boolean(_paj.get_slotnums(149)) || Boolean(_paj.get_slotnums(132)) || Boolean(_paj.get_slotnums(438)),
                        'execFunc': _pac.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(47)) || Boolean(_paj.get_slotnums(438)),
                        'execFunc': _pac.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(50)),
                        'execFunc': _pac.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(58)),
                        'execFunc': _pac.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(59)),
                        'execFunc': _pac.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(60)) || Boolean(_paj.get_slotnums(154)) || Boolean(_paj.get_slotnums(219)),
                        'execFunc': _pac.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(61)),
                        'execFunc': _pac.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(61)),
                        'execFunc': _pac.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(63)),
                        'execFunc': _pac.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(66)) || Boolean(_paj.get_slotnums(220)),
                        'execFunc': _pac.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(67)),
                        'execFunc': _pac.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(69)),
                        'execFunc': _pac.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(70)),
                        'execFunc': _pac.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(76)) || Boolean(_paj.get_slotnums(114)),
                        'execFunc': _pac.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(78)),
                        'execFunc': _pac.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(79)) || Boolean(_paj.get_slotnums(81)),
                        'execFunc': _pac.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(82)),
                        'execFunc': _pac.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(84)),
                        'execFunc': _pac.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(85)),
                        'execFunc': _pac.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(87)),
                        'execFunc': _pac.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(90)),
                        'execFunc': _pac.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(93)),
                        'execFunc': _pac.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(94)),
                        'execFunc': _pac.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(99)),
                        'execFunc': _pac.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(100)),
                        'execFunc': _pac.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(104)),
                        'execFunc': _pac.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(106)) || Boolean(_paj.get_slotnums(450)),
                        'execFunc': _pac.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(115)),
                        'execFunc': _pac.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(118)) || Boolean(_paj.get_slotnums(521)),
                        'execFunc': _pac.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(119)),
                        'execFunc': _pac.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(121)),
                        'execFunc': _pac.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(122)),
                        'execFunc': _pac.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(123)),
                        'execFunc': _pac.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(124)),
                        'execFunc': _pac.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(128)) || Boolean(_paj.get_slotnums(281)),
                        'execFunc': _pac.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(129)),
                        'execFunc': _pac.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(130)),
                        'execFunc': _pac.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(132)),
                        'execFunc': _pac.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(136)),
                        'execFunc': _pac.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(139)),
                        'execFunc': _pac.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(143)),
                        'execFunc': _pac.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(144)),
                        'execFunc': _pac.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(147)) || Boolean(_paj.get_slotnums(393)) || Boolean(_paj.get_slotnums(394)),
                        'execFunc': _pac.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(149)),
                        'execFunc': _pac.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(165)) || Boolean(_paj.get_slotnums(216)),
                        'execFunc': _pac.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(171)),
                        'execFunc': _pac.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(174)),
                        'execFunc': _pac.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(179)),
                        'execFunc': _pac.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(184)),
                        'execFunc': _pac.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(188)),
                        'execFunc': _pac.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(189)),
                        'execFunc': _pac.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(194)),
                        'execFunc': _pac.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(195)),
                        'execFunc': _pac.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(204)),
                        'execFunc': _pac.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(217)),
                        'execFunc': _pac.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(220)),
                        'execFunc': _pac.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(227)),
                        'execFunc': _pac.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(228)),
                        'execFunc': _pac.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(229)),
                        'execFunc': _pac.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(234)),
                        'execFunc': _pac.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(235)),
                        'execFunc': _pac.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(237)) || Boolean(_paj.get_slotnums(322)) || Boolean(_paj.get_slotnums(323)) || Boolean(_paj.get_slotnums(490)),
                        'execFunc': _pac.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(237)),
                        'execFunc': _pac.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(238)) || Boolean(_paj.get_slotnums(239)),
                        'execFunc': _pac.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(242)),
                        'execFunc': _pac.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(243)),
                        'execFunc': _pac.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(244)),
                        'execFunc': _pac.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(245)) || Boolean(_paj.get_slotnums(246)) || Boolean(_paj.get_slotnums(468)),
                        'execFunc': _pac.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(247)),
                        'execFunc': _pac.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(252)),
                        'execFunc': _pac.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(266)),
                        'execFunc': _pac.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(266)),
                        'execFunc': _pac.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(267)) || Boolean(_paj.get_slotnums(366)),
                        'execFunc': _pac.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(267)) || Boolean(_paj.get_slotnums(366)),
                        'execFunc': _pac.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(268)),
                        'execFunc': _pac.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(271)),
                        'execFunc': _pac.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(275)),
                        'execFunc': _pac.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(277)),
                        'execFunc': _pac.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(278)),
                        'execFunc': _pac.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(279)),
                        'execFunc': _pac.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(282)),
                        'execFunc': _pac.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(283)),
                        'execFunc': _pac.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(285)),
                        'execFunc': _pac.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(286)),
                        'execFunc': _pac.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(286)),
                        'execFunc': _pac.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(286)),
                        'execFunc': _pac.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(287)),
                        'execFunc': _pac.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(288)),
                        'execFunc': _pac.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(289)),
                        'execFunc': _pac.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(290)),
                        'execFunc': _pac.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(291)),
                        'execFunc': _pac.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(292)),
                        'execFunc': _pac.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(293)),
                        'execFunc': _pac.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(294)),
                        'execFunc': _pac.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(295)),
                        'execFunc': _pac.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(296)),
                        'execFunc': _pac.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(297)),
                        'execFunc': _pac.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(298)) || Boolean(_paj.get_slotnums(299)) || Boolean(_paj.get_slotnums(300)),
                        'execFunc': _pac.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(301)),
                        'execFunc': _pac.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(302)),
                        'execFunc': _pac.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(303)),
                        'execFunc': _pac.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(304)),
                        'execFunc': _pac.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(305)) || Boolean(_paj.get_slotnums(306)),
                        'execFunc': _pac.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(307)),
                        'execFunc': _pac.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(308)),
                        'execFunc': _pac.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(310)) || Boolean(_paj.get_slotnums(518)),
                        'execFunc': _pac.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(313)),
                        'execFunc': _pac.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(314)),
                        'execFunc': _pac.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(315)),
                        'execFunc': _pac.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(316)),
                        'execFunc': _pac.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(317)),
                        'execFunc': _pac.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(318)),
                        'execFunc': _pac.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(319)),
                        'execFunc': _pac.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(320)),
                        'execFunc': _pac.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(322)),
                        'execFunc': _pac.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(323)),
                        'execFunc': _pac.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(324)) || Boolean(_paj.get_slotnums(325)),
                        'execFunc': _pac.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(326)),
                        'execFunc': _pac.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(327)),
                        'execFunc': _pac.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(328)),
                        'execFunc': _pac.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(329)),
                        'execFunc': _pac.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(330)) || Boolean(_paj.get_slotnums(331)) || Boolean(_paj.get_slotnums(332)),
                        'execFunc': _pac.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(335)),
                        'execFunc': _pac.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(336)),
                        'execFunc': _pac.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(337)),
                        'execFunc': _pac.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(338)),
                        'execFunc': _pac.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(339)),
                        'execFunc': _pac.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(340)),
                        'execFunc': _pac.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(341)),
                        'execFunc': _pac.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(342)),
                        'execFunc': _pac.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(343)),
                        'execFunc': _pac.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(344)),
                        'execFunc': _pac.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(345)),
                        'execFunc': _pac.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(346)),
                        'execFunc': _pac.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(347)),
                        'execFunc': _pac.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(356)) || Boolean(_paj.get_slotnums(357)),
                        'execFunc': _pac.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(358)),
                        'execFunc': _pac.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(359)),
                        'execFunc': _pac.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(360)) || Boolean(_paj.get_slotnums(361)),
                        'execFunc': _pac.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(362)) || Boolean(_paj.get_slotnums(363)),
                        'execFunc': _pac.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(364)),
                        'execFunc': _pac.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(365)),
                        'execFunc': _pac.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(367)),
                        'execFunc': _pac.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(368)),
                        'execFunc': _pac.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(369)),
                        'execFunc': _pac.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(370)),
                        'execFunc': _pac.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(371)),
                        'execFunc': _pac.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(372)),
                        'execFunc': _pac.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(373)),
                        'execFunc': _pac.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(374)),
                        'execFunc': _pac.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(375)),
                        'execFunc': _pac.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(376)),
                        'execFunc': _pac.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(377)),
                        'execFunc': _pac.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(378)),
                        'execFunc': _pac.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(379)),
                        'execFunc': _pac.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(380)),
                        'execFunc': _pac.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(381)),
                        'execFunc': _pac.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(382)) || Boolean(_paj.get_slotnums(509)),
                        'execFunc': _pac.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(383)),
                        'execFunc': _pac.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(384)),
                        'execFunc': _pac.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(385)),
                        'execFunc': _pac.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(386)),
                        'execFunc': _pac.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(387)),
                        'execFunc': _pac.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(389)),
                        'execFunc': _pac.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(390)),
                        'execFunc': _pac.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(391)),
                        'execFunc': _pac.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(392)),
                        'execFunc': _pac.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(397)),
                        'execFunc': _pac.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(398)),
                        'execFunc': _pac.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(399)),
                        'execFunc': _pac.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(400)),
                        'execFunc': _pac.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(407)),
                        'execFunc': _pac.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(408)),
                        'execFunc': _pac.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(409)),
                        'execFunc': _pac.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(411)),
                        'execFunc': _pac.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(412)),
                        'execFunc': _pac.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(413)),
                        'execFunc': _pac.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(414)),
                        'execFunc': _pac.getSlot414PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(415)),
                        'execFunc': _pac.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(419)),
                        'execFunc': _pac.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(420)),
                        'execFunc': _pac.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(421)),
                        'execFunc': _pac.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(422)),
                        'execFunc': _pac.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(423)),
                        'execFunc': _pac.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(424)),
                        'execFunc': _pac.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(425)),
                        'execFunc': _pac.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(426)) || Boolean(_paj.get_slotnums(427)) || Boolean(_paj.get_slotnums(428)) || Boolean(_paj.get_slotnums(429)),
                        'execFunc': _pac.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(430)),
                        'execFunc': _pac.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(434)) || Boolean(_paj.get_slotnums(435)),
                        'execFunc': _pac.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(437)),
                        'execFunc': _pac.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(438)),
                        'execFunc': _pac.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(439)),
                        'execFunc': _pac.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(440)) || Boolean(_paj.get_slotnums(441)),
                        'execFunc': _pac.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(442)) || Boolean(_paj.get_slotnums(443)),
                        'execFunc': _pac.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(447)),
                        'execFunc': _pac.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(450)),
                        'execFunc': _pac.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(451)),
                        'execFunc': _pac.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(455)),
                        'execFunc': _pac.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(456)),
                        'execFunc': _pac.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(457)) || Boolean(_paj.get_slotnums(461)),
                        'execFunc': _pac.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(458)),
                        'execFunc': _pac.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(463)),
                        'execFunc': _pac.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(464)),
                        'execFunc': _pac.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(465)),
                        'execFunc': _pac.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(466)),
                        'execFunc': _pac.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(467)),
                        'execFunc': _pac.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(470)) || Boolean(_paj.get_slotnums(529)),
                        'execFunc': _pac.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(471)),
                        'execFunc': _pac.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(472)),
                        'execFunc': _pac.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(473)),
                        'execFunc': _pac.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(474)),
                        'execFunc': _pac.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(478)),
                        'execFunc': _pac.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(483)),
                        'execFunc': _pac.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(485)),
                        'execFunc': _pac.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(486)),
                        'execFunc': _pac.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(487)),
                        'execFunc': _pac.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(488)),
                        'execFunc': _pac.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(489)) || Boolean(_paj.get_slotnums(491)),
                        'execFunc': _pac.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(500)) || Boolean(_paj.get_slotnums(501)),
                        'execFunc': _pac.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(502)),
                        'execFunc': _pac.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(503)),
                        'execFunc': _pac.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(505)),
                        'execFunc': _pac.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(506)),
                        'execFunc': _pac.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(507)) || Boolean(_paj.get_slotnums(508)),
                        'execFunc': _pac.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(510)),
                        'execFunc': _pac.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(511)) || Boolean(_paj.get_slotnums(512)),
                        'execFunc': _pac.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(517)),
                        'execFunc': _pac.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(518)),
                        'execFunc': _pac.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(519)),
                        'execFunc': _pac.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(520)),
                        'execFunc': _pac.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(521)),
                        'execFunc': _pac.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(522)) || Boolean(_paj.get_slotnums(523)),
                        'execFunc': _pac.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(524)),
                        'execFunc': _pac.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(525)) || Boolean(_paj.get_slotnums(526)),
                        'execFunc': _pac.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(527)),
                        'execFunc': _pac.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(528)),
                        'execFunc': _pac.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(530)),
                        'execFunc': _pac.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_paj.get_slotnums(531)),
                        'execFunc': _pac.getSlot531PersonalEffect
                    }], _pal = new _pad.SlotItemEffectModel(), _pam = 0, _pan = _pak; _pam < _pan.length; _pam++) {
                    var _pao = _pan[_pam];
                    if (_pao.isExecute) {
                        var _pap = _pao.execFunc(_paj);
                        0, _pal.add(_pap);
                    }
                }
                return _pal;
            };
        }(_paa || (_p9k.SlotItemEffectUtil = _paa = {}));
    },
}
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
    73785: function(_lcz, _ld0, _ld1) {
        'use strict';
        var _ld2 = null;
        var _ld3 = this && this.__importDefault || function(_ld4) {
            var _ld5 = null;
            return _ld4 && _ld4.__esModule ? _ld4 : {
                'default': _ld4
            };
        };
        defineModule(_ld0);
        Object.defineProperty(_ld0, '__esModule', {
            'value': true
        }), _ld0.SlotItemEffectParamModel = void 0;
        var _ld6 = _ld3(_ld1(18622)),
            _ld7 = _ld1(72170),
            _ld8 = (function() {
                var _ld9 = null;

                function _lda(_ldb, _ldc) {
                    var _ldd = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _lde = {}, _ldf = {}, _ldg = {}, _ldh = {}, _ldi = {}, _ldj = 0, _ldk = _ldc; _ldj < _ldk.length; _ldj++) {
                        var _ldl = _ldk[_ldj];
                        if (null != _ldl) {
                            null == _lde[_ldl.mstID] && (_lde[_ldl.mstID] = new Array()), _lde[_ldl.mstID].push(_ldl), null == _ldf[_ldl.mstID] ? _ldf[_ldl.mstID] = 1 : _ldf[_ldl.mstID] += 1, null == _ldg[_ldl.equipType] ? _ldg[_ldl.equipType] = 1 : _ldg[_ldl.equipType] += 1, null == _ldh[_ldl.mstID] && (_ldh[_ldl.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            })), _ldh[_ldl.mstID][_ldl.level]++, null == _ldi[_ldl.mstID] && (_ldi[_ldl.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            }));
                            for (var _ldm = 0; _ldm <= this.SLOT_LEVEL_MAX && _ldl.level >= _ldm; _ldm++) _ldi[_ldl.mstID][_ldm]++;
                        }
                    }
                    this._have_slots_dict = _lde, this._have_slotnums_dict = _ldf, this._have_type3nums_dict = _ldg, this._have_level_num_dict = _ldh, this._have_level_num_over_dict = _ldi, this._ship_id = _ldb.mstID, this._yomi = _ldb.yomi, this._stype = _ldb.shipTypeID, this._ctype = _ldb.getClassType();
                }
                return Object.defineProperty(_lda.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _ldn = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lda.prototype, 'have_level_num_over_dict', {
                    'get': function() {
                        var _ldo = null;
                        return this._have_level_num_over_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lda.prototype, 'ship_id', {
                    'get': function() {
                        var _ldp = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lda.prototype, 'yomi', {
                    'get': function() {
                        var _ldq = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lda.prototype, 'stype', {
                    'get': function() {
                        var _ldr = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lda.prototype, 'ctype', {
                    'get': function() {
                        var _lds = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _lda.prototype.get_slotnums = function(_ldt) {
                    var _ldu = null;
                    return null == this._have_slotnums_dict[_ldt] ? 0 : this._have_slotnums_dict[_ldt];
                }, _lda.prototype.get_type3_nums = function(_ldv) {
                    var _ldw = null;
                    return null == this._have_type3nums_dict[_ldv] ? 0 : this._have_type3nums_dict[_ldv];
                }, _lda.prototype.haveSlotLevelNum = function(_ldx) {
                    var _ldy = null;
                    return null == this._have_level_num_dict[_ldx] ? [] : this._have_level_num_dict[_ldx];
                }, _lda.prototype.haveSlotLevelNumOver = function(_ldz) {
                    var _le0 = null;
                    return null == this._have_level_num_over_dict[_ldz] ? [] : this._have_level_num_over_dict[_ldz];
                }, _lda.prototype.have_slot_ids = function() {
                    var _le1 = null;
                    return Object.keys(this._have_slots_dict);
                }, _lda.prototype.get_each_level_nums = function(_le2) {
                    var _le3 = null,
                        _le4 = this._have_slots_dict[_le2],
                        _le5 = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _le4)
                        for (var _le6 = 0, _le7 = _le4; _le6 < _le7.length; _le6++) {
                            _le5[_le7[_le6].level]++;
                        }
                    return _le5;
                }, _lda.prototype.get_each_level_over_nums = function(_le8) {
                    var _le9 = null;
                    for (var _lea = this, _leb = [], _lec = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _led = function(_lee) {
                            var _lef = null;
                            if (_leb[_lee] = Array.apply(null, new Array(_leg.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _leg.have_slots_dict[_lee]) return 'continue';
                            _leg.get_each_level_nums(_lee).forEach(function(_leh, _lei) {
                                var _lej = null;
                                for (var _lek = 1; _lek <= _lea.SLOT_LEVEL_MAX; _lek++) _lei >= _lek && (_leb[_lee][_lek] += _leh, _lec[_lek] += _leh);
                            });
                        }, _leg = this, _lel = 0, _lem = _le8; _lel < _lem.length; _lel++) {
                        _led(_lem[_lel]);
                    }
                    return {
                        'slot': _leb,
                        'total': _lec
                    };
                }, _lda.prototype.getTotalCountWithOverLeveledItem = function(_len) {
                    var _leo = null;
                    for (var _lep = this, _leq = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _ler = 0, _les = _len; _ler < _les.length; _ler++) {
                        var _let = _les[_ler];
                        if (null != this._have_slots_dict[_let]) this._have_level_num_dict[_let].forEach(function(_leu, _lev) {
                            var _lew = null;
                            for (var _lex = 0; _lex <= _lep.SLOT_LEVEL_MAX; _lex++) _lev >= _lex && (_leq[_lex] += _leu);
                        });
                    }
                    return _leq;
                }, _lda.prototype.get_have_rader_nums = function() {
                    var _ley = null;
                    for (var _lez = 0, _lf0 = 0, _lf1 = 0, _lf2 = 0, _lf3 = this.have_slot_ids(); _lf2 < _lf3.length; _lf2++) {
                        var _lf4 = _lf3[_lf2],
                            _lf5 = _ld6.default.model.slot.getMst(_lf4),
                            _lf6 = _lf5.equipType;
                        12 != _lf6 && 13 != _lf6 || (_lf5.sakuteki >= 5 && (_lez += this.get_slotnums(parseInt(_lf4))), _lf5.meichu >= 8 && (_lf0 += this.get_slotnums(parseInt(_lf4))), _lf5.taiku >= 2 && (_lf1 += this.get_slotnums(parseInt(_lf4))));
                    }
                    return {
                        'water_rader': _lez,
                        'high_water_rader': _lf0,
                        'air_rader': _lf1
                    };
                }, _lda.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _lda.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _lda.prototype.getCountryName = function() {
                    var _lf7 = null;
                    return null == _ld7.SHIP_COUNTRY[this._ctype] ? '' : _ld7.SHIP_COUNTRY[this._ctype];
                }, _lda.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _lda.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _lda;
            }());
        _ld0.SlotItemEffectParamModel = _ld8;
    },
    16718: (_lqe, _lqf, _lqg) => {
        'use strict';
        var _lqh = null;
        defineModule(_lqf);
        Object.defineProperty(_lqf, '__esModule', {
            'value': true
        }), _lqf.TaskGetSlotItemEffectParams = void 0;
        var _lqi = _lqg(74496),
            _lqj = _lqg(82692),
            _lqk = (function() {
                var _lql = null;

                function _lqm(_lqn, _lqo, _lqp) {
                    var _lqq = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lqn;
                    var _lqr = _lqn.getSlotitems();
                    _lqr.push(_lqn.getSlotitemEx());
                    var _lqs = _lqr.map(function(_lqt) {
                        var _lqu = null;
                        return null == _lqt || null != _lqo && _lqt.memID == _lqo.memID ? null : _lqt;
                    });
                    this._removeSlots = _lqs;
                    var _lqv = _lqs.map(function(_lqw) {
                        return _lqw;
                    });
                    _lqv.push(_lqp), this._toSlots = _lqv;
                }
                return _lqm.prototype.start = function() {
                    var _lqx = null,
                        _lqy = this._ship.getSlotitems();
                    _lqy.push(this._ship.getSlotitemEx());
                    var _lqz = _lqj.SlotItemEffectUtil.getSlotitemEffect(this._ship, _lqy),
                        _lr0 = _lqj.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lr1 = _lqj.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_lqz, _lr0),
                        'toSlotItemEffect': this._subEffectModels(_lr1, _lr0)
                    };
                }, _lqm.prototype._subEffectModels = function(_lr2, _lr3) {
                    var _lr4 = null,
                        _lr5 = new _lqi.SlotItemEffectModel();
                    return _lr5.houg = _lr2.houg - _lr3.houg, _lr5.raig = _lr2.raig - _lr3.raig, _lr5.tyku = _lr2.tyku - _lr3.tyku, _lr5.souk = _lr2.souk - _lr3.souk, _lr5.kaih = _lr2.kaih - _lr3.kaih, _lr5.tais = _lr2.tais - _lr3.tais, _lr5.saku = _lr2.saku - _lr3.saku, _lr5.baku = _lr2.baku - _lr3.baku, _lr5.houm = _lr2.houm - _lr3.houm, _lr5.leng = _lr2.leng - _lr3.leng, _lr5;
                }, _lqm;
            }());
        _lqf.TaskGetSlotItemEffectParams = _lqk;
    },
    69377: function(_mev, _mew, _mex) {
        'use strict';
        var _mey = null;
        var _mez = this && this.__importDefault || function(_mf0) {
            var _mf1 = null;
            return _mf0 && _mf0.__esModule ? _mf0 : {
                'default': _mf0
            };
        };
        defineModule(_mew);
        Object.defineProperty(_mew, '__esModule', {
            'value': true
        }), _mew.get25mmMachinegunEffect = void 0;
        var _mf2 = _mex(74496),
            _mf3 = _mez(_mex(18622));
        _mew.get25mmMachinegunEffect = function(_mf4) {
            var _mf5 = null,
                _mf6 = new _mf2.SlotItemEffectModel(),
                _mf7 = false,
                _mf8 = new _mf2.SlotItemEffectModel(),
                _mf9 = 0,
                _mfa = new _mf2.SlotItemEffectModel(),
                _mfb = {},
                _mfc = 0;
            if (662 == _mf4.ship_id || 663 == _mf4.ship_id ? (_mf8.tyku += 2, _mf8.kaih += 1, _mf7 = true) : 668 == _mf4.ship_id ? (_mf8.tyku += 3, _mf8.kaih += 2, _mf7 = true) : 979 == _mf4.ship_id && (_mf8.tyku += 2, _mf8.kaih += 3, _mf7 = true, _mfa.kaih += 2, _mfb[49] = _mfa, _mfc = 1), 56 == _mf4.ctype && (_mf8.houg += 1, _mf8.tyku += 2, _mf8.kaih += 2, _mf7 = true, _mf9 = 1), Object.keys(_mfb).forEach(function(_mfd) {
                    var _mfe = null,
                        _mff = _mfb[parseInt(_mfd)],
                        _mfg = _mf4.get_slotnums(parseInt(_mfd));
                    _mf6.add(_mff.multiply(_mfg));
                }), _mfc > 0) {
                var _mfh = _mf4.get_each_level_over_nums([49, 39, 40, 131]),
                    _mfi = _mfh.slot[49],
                    _mfj = _mfh.slot[39],
                    _mfk = _mfh.slot[40],
                    _mfl = _mfh.slot[131];
                1 == _mfc && (_mfi[6] >= 1 && (_mf6.houm += 1 * _mfi[6]), _mfi[7] >= 1 && (_mf6.tyku += 1 * _mfi[7]), _mfi[8] >= 1 && (_mf6.kaih += 1 * _mfi[8]), _mfi[9] >= 1 && (_mf6.tyku += 1 * _mfi[9]), _mfi[10] >= 1 && (_mf6.houg += 1 * _mfi[10]), _mfj[8] >= 1 && (_mf6.kaih += 1 * _mfj[8]), _mfj[9] >= 1 && (_mf6.tyku += 2 * _mfj[9]), _mfj[10] >= 1 && (_mf6.houg += 1 * _mfj[10]), _mfk[9] >= 1 && (_mf6.tyku += 2 * _mfk[9]), _mfk[10] >= 1 && (_mf6.houg += 1 * _mfk[10]), _mfl[10] >= 1 && (_mf6.tyku += 2 * _mfl[10]));
            }
            if (0 == _mf7) return _mf6;
            var _mfm = _mf4.get_slotnums(39) + _mf4.get_slotnums(40) + _mf4.get_slotnums(49) + _mf4.get_slotnums(131);
            if (_mf6.add(_mf8.multiply(_mfm)), 0 == _mf9) return _mf6;
            for (var _mfn = 0, _mfo = 0, _mfp = _mf4.have_slot_ids(); _mfo < _mfp.length; _mfo++) {
                var _mfq = _mfp[_mfo],
                    _mfr = _mf3.default.model.slot.getMst(_mfq),
                    _mfs = _mfr.equipType;
                12 != _mfs && 13 != _mfs || (_mfr.sakuteki >= 5 && _mf4.get_slotnums(parseInt(_mfq)), _mfr.taiku >= 2 && (_mfn += _mf4.get_slotnums(parseInt(_mfq))));
            }
            return _mfn >= 1 && 1 == _mf9 && (_mf6.tyku += 2, _mf6.kaih += 2), _mf6;
        };
    },
    77670: function(_mft, _mfu, _mfv) {
        'use strict';
        var _mfw = null;
        var _mfx = this && this.__importDefault || function(_mfy) {
            var _mfz = null;
            return _mfy && _mfy.__esModule ? _mfy : {
                'default': _mfy
            };
        };
        defineModule(_mfu);
        Object.defineProperty(_mfu, '__esModule', {
            'value': true
        }), _mfu.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mg0 = _mfv(74496),
            _mg1 = _mfx(_mfv(18622));
        _mfu.get8cmAntiAircraftGunPersonalEffect = function(_mg2) {
            var _mg3 = null,
                _mg4 = new _mg0.SlotItemEffectModel(),
                _mg5 = false,
                _mg6 = new _mg0.SlotItemEffectModel(),
                _mg7 = 0;
            if (501 != _mg2.ship_id && 506 != _mg2.ship_id && 502 != _mg2.ship_id && 507 != _mg2.ship_id || (_mg6.tyku += 2, _mg6.kaih += 1, _mg5 = true, _mg7 = 1), 501 != _mg2.ship_id && 506 != _mg2.ship_id || (_mg6.houg += 1, _mg6.tyku += 2, _mg6.kaih += 2, _mg5 = true, _mg7 = 1), 0 == _mg5) return _mg4;
            var _mg8 = _mg2.get_slotnums(66) + _mg2.get_slotnums(220);
            _mg4.add(_mg6.multiply(_mg8));
            for (var _mg9 = 0, _mga = 0, _mgb = _mg2.have_slot_ids(); _mga < _mgb.length; _mga++) {
                var _mgc = _mgb[_mga],
                    _mgd = _mg1.default.model.slot.getMst(_mgc),
                    _mge = _mgd.equipType;
                12 != _mge && 13 != _mge || (_mgd.sakuteki >= 5 && _mg2.get_slotnums(parseInt(_mgc)), _mgd.taiku >= 2 && (_mg9 += _mg2.get_slotnums(parseInt(_mgc))));
            }
            return 0 == _mg7 || _mg9 >= 1 && (_mg4.tyku += 1, _mg4.kaih += 2), _mg4;
        };
    },
    34165: (_mgf, _mgg, _mgh) => {
        'use strict';
        var _mgi = null;
        defineModule(_mgg);
        Object.defineProperty(_mgg, '__esModule', {
            'value': true
        }), _mgg.getCamouflageSlotPersonalEffect = void 0;
        var _mgj = _mgh(74496);
        _mgg.getCamouflageSlotPersonalEffect = function(_mgk) {
            var _mgl = null,
                _mgm = new _mgj.SlotItemEffectModel();
            return 'きそ' != _mgk.yomi && 'たま' != _mgk.yomi || (_mgm.kaih = 7, _mgm.souk = 2), _mgm;
        };
    },
    31127: (_mgn, _mgo, _mgp) => {
        'use strict';
        var _mgq = null;
        defineModule(_mgo);
        Object.defineProperty(_mgo, '__esModule', {
            'value': true
        }), _mgo.getHighZuiunSeriesEffect = void 0;
        var _mgr = _mgp(74496);
        _mgo.getHighZuiunSeriesEffect = function(_mgs) {
            var _mgt = null,
                _mgu = new _mgr.SlotItemEffectModel(),
                _mgv = false,
                _mgw = new _mgr.SlotItemEffectModel();
            if (662 == _mgs.ship_id ? (_mgu.houg += 3, _mgu.kaih += 1) : 663 == _mgs.ship_id || 668 == _mgs.ship_id || 501 == _mgs.ship_id || 506 == _mgs.ship_id || 553 == _mgs.ship_id || 554 == _mgs.ship_id ? (_mgw.houg += 3, _mgw.kaih += 2, _mgw.tyku += 1, _mgv = true) : 502 != _mgs.ship_id && 507 != _mgs.ship_id || (_mgw.houg += 2, _mgw.kaih += 2, _mgw.tyku += 1, _mgv = true), 0 == _mgv) return _mgu;
            var _mgx = 0;
            return [237, 322, 323, 490].forEach(function(_mgy) {
                var _mgz = null;
                _mgx += _mgs.get_slotnums(_mgy);
            }), _mgu.add(_mgw.multiply(_mgx)), _mgu;
        };
    },
    81018: function(_mh0, _mh1, _mh2) {
        'use strict';
        var _mh3 = null;
        var _mh4 = this && this.__importDefault || function(_mh5) {
            var _mh6 = null;
            return _mh5 && _mh5.__esModule ? _mh5 : {
                'default': _mh5
            };
        };
        defineModule(_mh1);
        Object.defineProperty(_mh1, '__esModule', {
            'value': true
        }), _mh1.getRaderPrivateEffect = void 0;
        var _mh7 = _mh2(74496),
            _mh8 = _mh4(_mh2(18622));
        _mh1.getRaderPrivateEffect = function(_mh9) {
            var _mha = null,
                _mhb = new _mh7.SlotItemEffectModel(),
                _mhc = 0,
                _mhd = 0;
            if (569 == _mh9.ship_id || 648 == _mh9.ship_id || 961 == _mh9.ship_id || 951 == _mh9.ship_id) _mhc = 1;
            else {
                if (955 != _mh9.ship_id && 960 != _mh9.ship_id) return _mhb;
                _mhc = 2, _mhd = 1;
            }
            for (var _mhe = 0, _mhf = 0, _mhg = _mh9.have_slot_ids(); _mhf < _mhg.length; _mhf++) {
                var _mhh = _mhg[_mhf],
                    _mhi = _mh8.default.model.slot.getMst(_mhh),
                    _mhj = _mhi.equipType;
                12 != _mhj && 13 != _mhj || (_mhi.sakuteki >= 5 && _mh9.get_slotnums(parseInt(_mhh)), _mhi.taiku >= 2 && (_mhe += _mh9.get_slotnums(parseInt(_mhh))));
            }
            if (_mhe > 0 && (1 == _mhc ? (_mhb.houg += 1, _mhb.kaih += 3, _mhb.tyku += 2) : 2 == _mhc && (_mhb.tyku += 2, _mhb.kaih += 1)), 0 == _mhd) return _mhb;
            for (var _mhk = [], _mhl = function(_mhm) {
                    var _mhn = null;
                    if (null == _mh9.have_slots_dict[_mhm]) return 'continue';
                    var _mho = _mh9.get_each_level_nums(_mhm);
                    null == _mhk[_mhm] && (_mhk[_mhm] = []), _mho.forEach(function(_mhp, _mhq) {
                        var _mhr = null;
                        for (var _mhs = 1; _mhs <= _mh9.SLOT_LEVEL_MAX; _mhs++) null == _mhk[_mhm][_mhs] && (_mhk[_mhm][_mhs] = 0), _mhq >= _mhs && (_mhk[_mhm][_mhs] += _mhp);
                    });
                }, _mht = 0, _mhu = [450]; _mht < _mhu.length; _mht++) {
                _mhl(_mhu[_mht]);
            }
            var _mhv = null != _mhk[450] ? _mhk[450][4] : 0;
            return 1 == _mhd && _mhv > 0 && (_mhb.houg += 1, _mhb.houm += 1, _mhb.tyku += 1, _mhb.kaih += 2), _mhb;
        };
    },
    56716: (_mhw, _mhx, _mhy) => {
        'use strict';
        var _mhz = null;
        defineModule(_mhx);
        Object.defineProperty(_mhx, '__esModule', {
            'value': true
        }), _mhx.getSearchLightEffect = void 0;
        var _mi0 = _mhy(74496);
        _mhx.getSearchLightEffect = function(_mi1) {
            var _mi2 = null,
                _mi3 = new _mi0.SlotItemEffectModel(),
                _mi4 = _mi1.get_type3_nums(29);
            return 'ひえい' == _mi1.yomi || 'きりしま' == _mi1.yomi || 'ちょうかい' == _mi1.yomi || 'じんつう' == _mi1.yomi || 'あかつき' == _mi1.yomi ? (_mi3.houg += 4, _mi3.kaih -= 1) : 'あきぐも' == _mi1.yomi ? _mi3.houg = _mi3.houg + 2 * _mi4 : 'ゆきかぜ' == _mi1.yomi && (_mi3.houg = _mi3.houg + _mi4, _mi3.tyku = _mi3.tyku + _mi4), 662 != _mi1.ship_id && 663 != _mi1.ship_id && 668 != _mi1.ship_id || (_mi3.raig += 2, _mi3.houg += 4), 'じんつう' == _mi1.yomi && (_mi3.raig += 8, _mi3.houg += 4), _mi3;
        };
    },
    17713: (_mi5, _mi6, _mi7) => {
        'use strict';
        var _mi8 = null;
        defineModule(_mi6);
        Object.defineProperty(_mi6, '__esModule', {
            'value': true
        }), _mi6.getSearchLightLargeEffect = void 0;
        var _mi9 = _mi7(74496);
        _mi6.getSearchLightLargeEffect = function(_mia) {
            var _mib = null,
                _mic = new _mi9.SlotItemEffectModel();
            'ひえい' == _mia.yomi || 'きりしま' == _mia.yomi ? (_mic.houg += 6, _mic.kaih -= 2) : 'やまと' != _mia.yomi && 'むさし' != _mia.yomi || (_mic.houg += 4, _mic.kaih -= 1);
            var _mid = _mia.get_slotnums(174);
            return 592 == _mia.ship_id && (_mic.houg += 3, _mic.raig += 3, _mid > 0 && (_mic.raig += 5)), _mic;
        };
    },
    17213: (_mie, _mif, _mig) => {
        'use strict';
        var _mih = null;
        defineModule(_mif);
        Object.defineProperty(_mif, '__esModule', {
            'value': true
        }), _mif.getSlot100PersonalEffect = void 0;
        var _mii = _mig(74496);
        _mif.getSlot100PersonalEffect = function(_mij) {
            var _mik = null,
                _mil = new _mii.SlotItemEffectModel(),
                _mim = new _mii.SlotItemEffectModel();
            if (553 == _mij.ship_id) _mim.houg = 4;
            else {
                if (554 != _mij.ship_id) return 196 == _mij.ship_id ? (_mil.houg = 3, _mil) : 197 == _mij.ship_id ? (_mil.houg = 6, _mil) : _mil;
                _mim.houg = 4;
            }
            var _min = _mij.get_slotnums(100);
            return _mil = _mim.multiply(_min);
        };
    },
    40176: (_mio, _mip, _miq) => {
        'use strict';
        var _mir = null;
        defineModule(_mip);
        Object.defineProperty(_mip, '__esModule', {
            'value': true
        }), _mip.getSlot104PersonalEffect = void 0;
        var _mis = _miq(74496);
        _mip.getSlot104PersonalEffect = function(_mit) {
            var _miu = null,
                _miv = new _mis.SlotItemEffectModel(),
                _miw = new _mis.SlotItemEffectModel();
            if (149 == _mit.ship_id || 591 == _mit.ship_id) _miw.houg = 2;
            else {
                if (150 == _mit.ship_id || 592 == _mit.ship_id) _miw.houg = 1;
                else {
                    if (152 == _mit.ship_id) _miw.houg = 1;
                    else {
                        if (151 != _mit.ship_id && 593 != _mit.ship_id && 954 != _mit.ship_id) return _miv;
                        _miw.houg = 2, _miw.tyku = 1, _miw.kaih = 2;
                    }
                }
            }
            var _mix = _mit.get_slotnums(104);
            return _miv = _miw.multiply(_mix);
        };
    },
    32889: (_miy, _miz, _mj0) => {
        'use strict';
        var _mj1 = null;
        defineModule(_miz);
        Object.defineProperty(_miz, '__esModule', {
            'value': true
        }), _miz.getSlot106PersonalEffect = void 0;
        var _mj2 = _mj0(74496);
        _miz.getSlot106PersonalEffect = function(_mj3) {
            var _mj4 = null,
                _mj5 = new _mj2.SlotItemEffectModel(),
                _mj6 = new _mj2.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mj3.ship_id) >= 0 ? (_mj6.houg += 1, _mj6.tyku += 2, _mj6.souk += 1, _mj6.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mj3.yomi) >= 0 ? (_mj6.tyku += 1, _mj6.souk += 1, _mj6.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mj3.yomi) >= 0 && (_mj6.tyku += 2, _mj6.souk += 1, _mj6.kaih += 2, 663 != _mj3.ship_id && 668 != _mj3.ship_id || (_mj5.houg += 1, _mj5.tyku += 1, _mj5.souk += 1, _mj5.kaih += 1), 668 == _mj3.ship_id && (_mj5.tyku += 1, _mj5.kaih += 1)), !_mj6.exists()) return _mj5;
            var _mj7 = _mj3.get_slotnums(106) + _mj3.get_slotnums(450);
            return _mj5.add(_mj6.multiply(_mj7)), _mj5;
        };
    },
    15133: (_mj8, _mj9, _mja) => {
        'use strict';
        var _mjb = null;
        defineModule(_mj9);
        Object.defineProperty(_mj9, '__esModule', {
            'value': true
        }), _mj9.getSlot115PersonalEffect = void 0;
        var _mjc = _mja(74496);
        _mj9.getSlot115PersonalEffect = function(_mjd) {
            var _mje = null,
                _mjf = new _mjc.SlotItemEffectModel(),
                _mjg = false,
                _mjh = new _mjc.SlotItemEffectModel(),
                _mji = 0;
            if (55 != _mjd.ctype && 47 != _mjd.ctype || (_mjh.houg += 2, _mjh.saku += 2, _mjh.kaih += 1, _mjg = true, _mji = 1), 0 == _mjg) return _mjf;
            var _mjj = _mjd.get_slotnums(115);
            if (_mjf.add(_mjh.multiply(_mjj)), 0 == _mji) return _mjf;
            var _mjk = _mjd.get_each_level_nums(115)[10];
            return 1 == _mji && (_mjf.houg += 1 * _mjk, _mjf.kaih += 1 * _mjk), _mjf;
        };
    },
    55747: (_mjl, _mjm, _mjn) => {
        'use strict';
        var _mjo = null;
        defineModule(_mjm);
        Object.defineProperty(_mjm, '__esModule', {
            'value': true
        }), _mjm.getSlot118PersonalEffect = void 0;
        var _mjp = _mjn(74496);
        _mjm.getSlot118PersonalEffect = function(_mjq) {
            var _mjr = null,
                _mjs = new _mjp.SlotItemEffectModel(),
                _mjt = false,
                _mju = new _mjp.SlotItemEffectModel(),
                _mjv = 0;
            if (52 == _mjq.ctype && (_mju.houg += 1, _mju.saku += 2, _mju.kaih += 2, _mjv = 1, _mjt = true), 507 == _mjq.ship_id && (_mju.houg += 3, _mju.saku += 2, _mju.kaih += 1, _mjv = 2, _mjt = true), 0 == _mjt) return _mjs;
            var _mjw = _mjq.get_slotnums(118) + _mjq.get_slotnums(521);
            if (_mjs.add(_mju.multiply(_mjw)), 0 == _mjq.get_slotnums(118)) return _mjs;
            if (0 == _mjv) return _mjs;
            var _mjx = _mjq.get_each_level_nums(118),
                _mjy = 0,
                _mjz = 0,
                _mk0 = 0,
                _mk1 = _mjx[10];
            return _mjx.forEach(function(_mk2, _mk3) {
                _mk3 >= 2 && (_mjy += _mk2), _mk3 >= 5 && (_mjz += _mk2), _mk3 >= 7 && (_mk0 += _mk2);
            }), 1 == _mjv ? (_mjs.houg += 2 * _mk1, _mjs.saku += 1 * _mk1) : 2 == _mjv && (_mjs.houm += 1 * _mjy, _mjs.kaih += 1 * _mjz, _mjs.houg += 1 * _mk0, _mjs.houg += 1 * _mk1, _mjs.raig += 1 * _mk1, _mjs.tyku += 1 * _mk1, _mjs.saku += 1 * _mk1, _mjs.kaih += 1 * _mk1), _mjs;
        };
    },
    11285: (_mk4, _mk5, _mk6) => {
        'use strict';
        var _mk7 = null;
        defineModule(_mk5);
        Object.defineProperty(_mk5, '__esModule', {
            'value': true
        }), _mk5.getSlot119PersonalEffect = void 0;
        var _mk8 = _mk6(74496);
        _mk5.getSlot119PersonalEffect = function(_mk9) {
            var _mka = null,
                _mkb = new _mk8.SlotItemEffectModel(),
                _mkc = new _mk8.SlotItemEffectModel();
            34 == _mk9.ctype || 56 == _mk9.ctype ? _mkc.houg += 1 : 90 == _mk9.ctype && (_mkc.houg += 2, _mkc.raig += 1);
            var _mkd = true;
            if (_mkc.exists() || (_mkd = false), 0 == _mkd) return _mkb;
            var _mke = _mk9.get_slotnums(119);
            return _mkb = _mkc.multiply(_mke);
        };
    },
    96200: (_mkf, _mkg, _mkh) => {
        'use strict';
        var _mki = null;
        defineModule(_mkg);
        Object.defineProperty(_mkg, '__esModule', {
            'value': true
        }), _mkg.getSlot120mm50GroupPersonalEffect = void 0;
        var _mkj = _mkh(74496);
        _mkg.getSlot120mm50GroupPersonalEffect = function(_mkk) {
            var _mkl = null,
                _mkm = new _mkj.SlotItemEffectModel(),
                _mkn = false,
                _mko = new _mkj.SlotItemEffectModel(),
                _mkp = _mkk.get_slotnums(147),
                _mkq = _mkk.get_slotnums(393),
                _mkr = _mkk.get_slotnums(394),
                _mks = new _mkj.SlotItemEffectModel(),
                _mkt = new _mkj.SlotItemEffectModel();
            if (61 == _mkk.ctype && (_mko.houg += 1, _mko.kaih += 1, _mkn = true, _mkq >= 1 && (_mks.houg += 1, _mks.tyku += 1), _mkr >= 1 && (_mkt.houg += 1, _mkt.tyku += 1, _mkt.kaih += 1, 'グレカーレ' == _mkk.yomi && (_mkt.kaih += 1)), 1), 0 == _mkn) return _mkm;
            var _mku = _mkp + _mkq + _mkr;
            _mkm.add(_mko.multiply(_mku)).add(_mks.multiply(_mkq)).add(_mkt.multiply(_mkr));
            var _mkv = _mkk.get_each_level_over_nums([394]).slot[394];
            return _mkv[7] >= 1 && (_mkm.houm += 1 * _mkv[7], 'グレカーレ' == _mkk.yomi && (_mkm.houg += 1 * _mkv[7])), _mkv[8] >= 1 && (_mkm.houg += 1 * _mkv[8]), _mkv[9] >= 1 && (_mkm.houm += 1 * _mkv[9]), _mkv[10] >= 1 && (_mkm.houg += 1 * _mkv[10], 'グレカーレ' == _mkk.yomi && (_mkm.kaih += 1 * _mkv[10])), _mkm;
        };
    },
    33155: function(_mkw, _mkx, _mky) {
        'use strict';
        var _mkz = null;
        var _ml0 = this && this.__importDefault || function(_ml1) {
            var _ml2 = null;
            return _ml1 && _ml1.__esModule ? _ml1 : {
                'default': _ml1
            };
        };
        defineModule(_mkx);
        Object.defineProperty(_mkx, '__esModule', {
            'value': true
        }), _mkx.getSlot121PersonalEffect = void 0;
        var _ml3 = _mky(74496),
            _ml4 = _ml0(_mky(18622));
        _mkx.getSlot121PersonalEffect = function(_ml5) {
            var _ml6 = null,
                _ml7 = new _ml3.SlotItemEffectModel(),
                _ml8 = 0,
                _ml9 = new _ml3.SlotItemEffectModel(),
                _mla = false;
            54 == _ml5.ctype && (_ml7.tyku += 4, _ml7.kaih += 2, _ml8 = 1), 968 == _ml5.ship_id && (_ml9.houg += 1, _ml9.tyku += 1, _ml9.kaih += 1, _mla = true);
            var _mlb = _ml5.get_slotnums(121);
            if (_mla && _ml7.add(_ml9.multiply(_mlb)), 0 == _ml8) return _ml7;
            for (var _mlc = 0, _mld = 0, _mle = _ml5.have_slot_ids(); _mld < _mle.length; _mld++) {
                var _mlf = _mle[_mld],
                    _mlg = _ml4.default.model.slot.getMst(_mlf),
                    _mlh = _mlg.equipType;
                12 != _mlh && 13 != _mlh || (_mlg.sakuteki >= 5 && _ml5.get_slotnums(parseInt(_mlf)), _mlg.taiku >= 2 && (_mlc += _ml5.get_slotnums(parseInt(_mlf))));
            }
            return _mlc >= 1 && (_ml7.tyku += 2, _ml7.kaih += 2, 968 == _ml5.ship_id && (_ml7.houg += 1 * _mlb, _ml7.houm += 1 * _mlb)), _ml7;
        };
    },
    9115: function(_mli, _mlj, _mlk) {
        'use strict';
        var _mll = null;
        var _mlm = this && this.__importDefault || function(_mln) {
            var _mlo = null;
            return _mln && _mln.__esModule ? _mln : {
                'default': _mln
            };
        };
        defineModule(_mlj);
        Object.defineProperty(_mlj, '__esModule', {
            'value': true
        }), _mlj.getSlot122PersonalEffect = void 0;
        var _mlp = _mlk(74496),
            _mlq = _mlm(_mlk(18622));
        _mlj.getSlot122PersonalEffect = function(_mlr) {
            var _mls = null,
                _mlt = new _mlp.SlotItemEffectModel(),
                _mlu = 0,
                _mlv = 0,
                _mlw = false;
            656 == _mlr.ship_id && (_mlw = true, _mlu = 1, _mlv = 1);
            var _mlx = 0,
                _mly = 0,
                _mlz = _mlr.get_each_level_nums(122),
                _mm0 = 0;
            if (_mlw) {
                _mlz.forEach(function(_mm1, _mm2) {
                    _mm2 >= 4 && (_mm0 += _mm1);
                });
                for (var _mm3 = 0, _mm4 = _mlr.have_slot_ids(); _mm3 < _mm4.length; _mm3++) {
                    var _mm5 = _mm4[_mm3],
                        _mm6 = _mlq.default.model.slot.getMst(_mm5),
                        _mm7 = _mm6.equipType;
                    12 != _mm7 && 13 != _mm7 || (_mm6.sakuteki >= 5 && (_mlx += _mlr.get_slotnums(parseInt(_mm5))), _mm6.taiku >= 2 && (_mly += _mlr.get_slotnums(parseInt(_mm5))));
                }
            }
            return _mm0 > 0 && (1 == _mlv && (_mlx > 0 && (_mlt.houg += 4, _mlt.kaih += 3), _mly > 0 && (_mlt.tyku += 4, _mlt.kaih += 3)), 1 == _mlu && (_mlt.houg += 5 * _mm0, _mlt.tyku += 3 * _mm0, _mlt.kaih += 2 * _mm0)), _mlt;
        };
    },
    85127: (_mm8, _mm9, _mma) => {
        'use strict';
        var _mmb = null;
        defineModule(_mm9);
        Object.defineProperty(_mm9, '__esModule', {
            'value': true
        }), _mm9.getSlot123PersonalEffect = void 0;
        var _mmc = _mma(74496);
        _mm9.getSlot123PersonalEffect = function(_mmd) {
            var _mme = null,
                _mmf = new _mmc.SlotItemEffectModel(),
                _mmg = (new _mmc.SlotItemEffectModel(), 0),
                _mmh = (_mmd.get_slotnums(123), _mmd.get_slotnums(124));
            if ('ドイツ' != _mmd.getCountryName()) return _mmf;
            _mmg = 1, _mmh >= 1 && (_mmf.kaih += 1 * _mmh);
            var _mmi = _mmd.get_each_level_over_nums([123, 124]),
                _mmj = _mmi.slot[123],
                _mmk = _mmi.slot[124];
            return 1 == _mmg && (_mmj[5] >= 1 && (_mmf.houg += 1 * _mmj[5]), _mmj[7] >= 1 && (_mmf.houm += 1 * _mmj[7]), _mmj[9] >= 1 && (_mmf.houg += 1 * _mmj[9]), _mmj[10] >= 1 && (_mmf.houm += 1 * _mmj[10]), _mmk[8] >= 1 && (_mmf.kaih += 1 * _mmk[8]), _mmk[10] >= 1 && (_mmf.houm += 1 * _mmk[10])), _mmf;
        };
    },
    87204: (_mml, _mmm, _mmn) => {
        'use strict';
        var _mmo = null;
        defineModule(_mmm);
        Object.defineProperty(_mmm, '__esModule', {
            'value': true
        }), _mmm.getSlot124PersonalEffect = void 0;
        var _mmp = _mmn(74496);
        _mmm.getSlot124PersonalEffect = function(_mmq) {
            var _mmr = null,
                _mms = new _mmp.SlotItemEffectModel(),
                _mmt = (new _mmp.SlotItemEffectModel(), 0),
                _mmu = _mmq.getCountryName();
            if ('ドイツ' == _mmu) _mmt = 1;
            else {
                if ('イタリア' != _mmu) return _mms;
                _mmt = 2;
            }
            var _mmv = _mmq.get_each_level_over_nums([124]).slot[124];
            return 1 == _mmt ? (_mmv[7] >= 1 && (_mms.houm += 1 * _mmv[7]), _mmv[8] >= 1 && (_mms.houg += 1 * _mmv[8]), _mmv[9] >= 1 && (_mms.tyku += 1 * _mmv[9]), _mmv[10] >= 1 && (_mms.houm += 1 * _mmv[10])) : 2 == _mmt && (_mmv[8] >= 1 && (_mms.houm += 1 * _mmv[8]), _mmv[9] >= 1 && (_mms.tyku += 1 * _mmv[9]), _mmv[10] >= 1 && (_mms.houg += 1 * _mmv[10])), _mms;
        };
    },
    37173: (_mmw, _mmx, _mmy) => {
        'use strict';
        var _mmz = null;
        defineModule(_mmx);
        Object.defineProperty(_mmx, '__esModule', {
            'value': true
        }), _mmx.getSlot129PersonalEffect = void 0;
        var _mn0 = _mmy(74496);
        _mmx.getSlot129PersonalEffect = function(_mn1) {
            var _mn2 = null,
                _mn3 = new _mn0.SlotItemEffectModel(),
                _mn4 = false,
                _mn5 = new _mn0.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mn1.ctype) >= 0 ? (_mn5.houg = 1, _mn5.raig = 2, _mn5.kaih = 2, _mn5.tais = 2, _mn5.saku = 1, _mn4 = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mn1.ctype) >= 0 ? (_mn5.houg = 1, _mn5.raig = 2, _mn5.kaih = 2, _mn5.saku = 3, _mn4 = true) : [7, 13, 29, 8, 9, 31].indexOf(_mn1.ctype) >= 0 && (_mn5.houg = 1, _mn5.kaih = 2, _mn5.saku = 3, _mn4 = true), 0 == _mn4) return _mn3;
            var _mn6 = _mn1.get_slotnums(129);
            return _mn3 = _mn5.multiply(_mn6);
        };
    },
    73254: (_mn7, _mn8, _mn9) => {
        'use strict';
        var _mna = null;
        defineModule(_mn8);
        Object.defineProperty(_mn8, '__esModule', {
            'value': true
        }), _mn8.getSlot12PersonalEffect = void 0;
        var _mnb = _mn9(74496);
        _mn8.getSlot12PersonalEffect = function(_mnc) {
            var _mnd = null,
                _mne = new _mnb.SlotItemEffectModel(),
                _mnf = false,
                _mng = new _mnb.SlotItemEffectModel(),
                _mnh = _mnc.get_slotnums(142) + _mnc.get_slotnums(460);
            if (37 == _mnc.ctype && (_mng.houg += 1, _mng.kaih += 1, _mng.houm += 1, _mnh >= 1 && (_mne.kaih += 1, _mne.houm += 1), _mnf = true), 0 == _mnf) return _mne;
            var _mni = _mnc.get_slotnums(12);
            return _mne.add(_mng.multiply(_mni)), _mne;
        };
    },
    41410: (_mnj, _mnk, _mnl) => {
        'use strict';
        var _mnm = null;
        defineModule(_mnk);
        Object.defineProperty(_mnk, '__esModule', {
            'value': true
        }), _mnk.getSlot130PersonalEffect = void 0;
        var _mnn = _mnl(74496);
        _mnk.getSlot130PersonalEffect = function(_mno) {
            var _mnp = null,
                _mnq = new _mnn.SlotItemEffectModel(),
                _mnr = _mno.have_level_num_over_dict[130];
            return null == _mnr || (428 == _mno.ship_id ? (_mnr[1] >= 1 && (_mnq.tyku += 1 * _mnr[1]), _mnr[3] >= 1 && (_mnq.kaih += 1 * _mnr[3]), _mnr[5] >= 1 && (_mnq.houm += 1 * _mnr[5]), _mnr[7] >= 1 && (_mnq.tyku += 1 * _mnr[7]), _mnr[8] >= 1 && (_mnq.kaih += 1 * _mnr[8]), _mnr[9] >= 1 && (_mnq.tyku += 1 * _mnr[9]), _mnr[10] >= 1 && (_mnq.houg += 1 * _mnr[10])) : 141 == _mno.ship_id && (_mnr[2] >= 1 && (_mnq.tyku += 1 * _mnr[2]), _mnr[4] >= 1 && (_mnq.kaih += 1 * _mnr[4]), _mnr[6] >= 1 && (_mnq.houm += 1 * _mnr[6]), _mnr[8] >= 1 && (_mnq.tyku += 1 * _mnr[8]), _mnr[10] >= 1 && (_mnq.kaih += 1 * _mnr[10])), 1 == _mno.stype && (_mnr[3] >= 1 && (_mnq.tyku += 1 * _mnr[3]), _mnr[6] >= 1 && (_mnq.kaih += 1 * _mnr[6]), _mnr[9] >= 1 && (_mnq.tyku += 1 * _mnr[9]), _mnr[10] >= 1 && (_mnq.kaih += 1 * _mnr[10]))), _mnq;
        };
    },
    93373: (_mns, _mnt, _mnu) => {
        'use strict';
        var _mnv = null;
        defineModule(_mnt);
        Object.defineProperty(_mnt, '__esModule', {
            'value': true
        }), _mnt.getSlot132PersonalEffect = void 0;
        var _mnw = _mnu(74496);
        _mnt.getSlot132PersonalEffect = function(_mnx) {
            var _mny = null,
                _mnz = new _mnw.SlotItemEffectModel(),
                _mo0 = _mnx.get_each_level_nums(132),
                _mo1 = 0,
                _mo2 = 0,
                _mo3 = 0,
                _mo4 = 0,
                _mo5 = 0;
            return _mo0.forEach(function(_mo6, _mo7) {
                _mo7 >= 3 && (_mo1 += _mo6), _mo7 >= 5 && (_mo2 += _mo6), _mo7 >= 7 && (_mo3 += _mo6), _mo7 >= 8 && (_mo4 += _mo6), _mo7 >= 9 && (_mo5 += _mo6);
            }), _mo1 >= 1 && (_mnz.kaih += 1), _mo2 >= 1 && (_mnz.tais += 1), _mo3 >= 1 && (_mnz.kaih += 1), _mo4 >= 1 && (_mnz.tais += 1), _mo5 >= 1 && (_mnz.houm += 1), _mo0[10] >= 1 && (_mnz.tais += 1), 911 != _mnx.ship_id && 916 != _mnx.ship_id && 546 != _mnx.ship_id || (_mnz.kaih += 1), 461 != _mnx.ship_id && 466 != _mnx.ship_id && 462 != _mnx.ship_id && 467 != _mnx.ship_id && 156 != _mnx.ship_id || (_mnz.kaih += 2), _mnz;
        };
    },
    88838: (_mo8, _mo9, _moa) => {
        'use strict';
        var _mob = null;
        defineModule(_mo9);
        Object.defineProperty(_mo9, '__esModule', {
            'value': true
        }), _mo9.getSlot136PersonalEffect = void 0;
        var _moc = _moa(74496);
        _mo9.getSlot136PersonalEffect = function(_mod) {
            var _moe = null,
                _mof = new _moc.SlotItemEffectModel(),
                _mog = 0;
            if (58 != _mod.ctype && 61 != _mod.ctype && 64 != _mod.ctype && 68 != _mod.ctype && 80 != _mod.ctype && 92 != _mod.ctype && 113 != _mod.ctype && 124 != _mod.ctype || (_mof.souk += 2, _mof.kaih += 1, _mog = 1), 879 == _mod.ship_id && (_mof.souk += 1, _mof.kaih += 1), 0 == _mog) return _mof;
            var _moh = _mod.get_each_level_nums(136),
                _moi = 0,
                _moj = 0,
                _mok = _moh[10];
            return _mog > 0 && _moh.forEach(function(_mol, _mom) {
                _mom >= 3 && (_moi += _mol), _mom >= 6 && (_moj += _mol);
            }), 1 == _mog && (_moi >= 1 && (_mof.souk += 1 * _moi), _moj >= 1 && (_mof.souk += 1 * _moj), _mok >= 1 && (_mof.souk += 1 * _mok)), _mof;
        };
    },
    17274: (_mon, _moo, _mop) => {
        'use strict';
        var _moq = null;
        defineModule(_moo);
        Object.defineProperty(_moo, '__esModule', {
            'value': true
        }), _moo.getSlot139PersonalEffect = void 0;
        var _mor = _mop(74496);
        _moo.getSlot139PersonalEffect = function(_mos) {
            var _mot = null,
                _mou = new _mor.SlotItemEffectModel(),
                _mov = false,
                _mow = new _mor.SlotItemEffectModel();
            if (662 != _mos.ship_id && 663 != _mos.ship_id && 668 != _mos.ship_id || (_mow.houg += 2, _mow.tyku += 1, _mov = true), 0 == _mov) return _mou;
            var _mox = _mos.get_slotnums(139);
            return _mou.add(_mow.multiply(_mox)), _mou;
        };
    },
    6482: (_moy, _moz, _mp0) => {
        'use strict';
        var _mp1 = null;
        defineModule(_moz);
        Object.defineProperty(_moz, '__esModule', {
            'value': true
        }), _moz.getSlot13_8cmRensouhouPersonalEffect = void 0;
        var _mp2 = _mp0(74496);
        _moz.getSlot13_8cmRensouhouPersonalEffect = function(_mp3) {
            var _mp4 = null,
                _mp5 = new _mp2.SlotItemEffectModel(),
                _mp6 = false,
                _mp7 = new _mp2.SlotItemEffectModel(),
                _mp8 = 0,
                _mp9 = _mp3.getCountryName(),
                _mpa = _mp3.get_slotnums(534),
                _mpb = _mp3.get_slotnums(535);
            if ('フランス' == _mp9 && (_mp7.houg += 2, _mp7.houm += 1, 129 == _mp3.ctype && (_mp7.houm += 1), 967 == _mp3.ship_id && _mpb >= 1 && (_mp7.houg += 1), _mp6 = true, _mp8 = 1), 0 == _mp6) return _mp5;
            var _mpc = _mpa + _mpb;
            if (_mp5.add(_mp7.multiply(_mpc)), 0 == _mp8) return _mp5;
            _mp3.haveSlotLevelNumOver(534);
            var _mpd = _mp3.haveSlotLevelNumOver(535),
                _mpe = _mp3.getTotalCountWithOverLeveledItem([534, 535]);
            return 1 == _mp8 && (_mpe[2] >= 1 && (_mp5.houm += 1 * _mpe[2]), _mpe[4] >= 1 && (_mp5.houg += 1 * _mpe[4]), _mpe[6] >= 1 && (_mp5.houm += 1 * _mpe[6]), _mpd[7] >= 1 && (_mp5.houg += 1 * _mpd[7]), _mpe[8] >= 1 && (_mp5.houg += 1 * _mpe[8]), _mpd[9] >= 1 && (_mp5.houm += 1 * _mpd[9]), _mpe[10] >= 1 && (_mp5.houg += 1 * _mpe[10])), _mp5;
        };
    },
    21713: (_mpf, _mpg, _mph) => {
        'use strict';
        var _mpi = null;
        defineModule(_mpg);
        Object.defineProperty(_mpg, '__esModule', {
            'value': true
        }), _mpg.getSlot143PersonalEffect = void 0;
        var _mpj = _mph(74496);
        _mpg.getSlot143PersonalEffect = function(_mpk) {
            var _mpl = null,
                _mpm = new _mpj.SlotItemEffectModel();
            return 'あかぎ' == _mpk.yomi ? _mpm.houg = 3 : 'かが' == _mpk.yomi || 'しょうかく' == _mpk.yomi ? _mpm.houg = 2 : ('ずいかく' == _mpk.yomi || 'りゅうじょう' == _mpk.yomi) && (_mpm.houg = 1), _mpm;
        };
    },
    59823: (_mpn, _mpo, _mpp) => {
        'use strict';
        var _mpq = null;
        defineModule(_mpo);
        Object.defineProperty(_mpo, '__esModule', {
            'value': true
        }), _mpo.getSlot144PersonalEffect = void 0;
        var _mpr = _mpp(74496);
        _mpo.getSlot144PersonalEffect = function(_mps) {
            var _mpt = null,
                _mpu = new _mpr.SlotItemEffectModel();
            return 'あかぎ' == _mps.yomi ? _mpu.houg = 3 : 'かが' == _mps.yomi ? _mpu.houg = 2 : 'しょうかく' == _mps.yomi ? (_mpu.houg = 2, 461 != _mps.ship_id && 466 != _mps.ship_id || (_mpu.houg += 2)) : 'ずいかく' == _mps.yomi ? (_mpu.houg = 1, 462 != _mps.ship_id && 467 != _mps.ship_id || (_mpu.houg += 1)) : 'りゅうじょう' == _mps.yomi && (_mpu.houg = 1), _mpu;
        };
    },
    57440: (_mpv, _mpw, _mpx) => {
        'use strict';
        var _mpy = null;
        defineModule(_mpw);
        Object.defineProperty(_mpw, '__esModule', {
            'value': true
        }), _mpw.getSlot149PersonalEffect = void 0;
        var _mpz = _mpx(74496);
        _mpw.getSlot149PersonalEffect = function(_mq0) {
            var _mq1 = null,
                _mq2 = new _mpz.SlotItemEffectModel(),
                _mq3 = new _mpz.SlotItemEffectModel(),
                _mq4 = false;
            return 488 == _mq0.ship_id || 141 == _mq0.ship_id || 160 == _mq0.ship_id || 622 == _mq0.ship_id || 623 == _mq0.ship_id || 656 == _mq0.ship_id || 961 == _mq0.ship_id ? (_mq3.tais = 1, _mq3.kaih = 3, _mq4 = true) : 624 == _mq0.ship_id ? (_mq3.tais = 3, _mq3.kaih = 5, _mq4 = true) : 662 == _mq0.ship_id && (_mq3.tais = 2, _mq3.kaih = 4, _mq4 = true), 54 == _mq0.ctype && (_mq3.tais = 1, _mq3.kaih = 2, _mq4 = true), 0 == _mq4 ? _mq2 : _mq2 = _mq3.multiply(1);
        };
    },
    29493: (_mq5, _mq6, _mq7) => {
        'use strict';
        var _mq8 = null;
        defineModule(_mq6);
        Object.defineProperty(_mq6, '__esModule', {
            'value': true
        }), _mq6.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mq9 = _mq7(74496);
        _mq6.getSlot14inch45CaliberGunPersonalEffect = function(_mqa) {
            var _mqb = null,
                _mqc, _mqd, _mqe, _mqf = new _mq9.SlotItemEffectModel(),
                _mqg = false,
                _mqh = new _mq9.SlotItemEffectModel(),
                _mqi = {
                    507: 507,
                    508: 507
                },
                _mqj = _mqa.get_slotnums(507),
                _mqk = _mqa.get_slotnums(508),
                _mql = _mqj + _mqk,
                _mqm = _mqa.getCountryName(),
                _mqn = _mqa.getUSSWaterRaderDict();
            if (125 == _mqa.ctype && (_mqh.houg += 1, _mqh.kaih += 1, _mqh.houm += 1, _mqg = true, _mqj >= 1 && _mqk >= 1 && (_mqf.houg += 1, _mqf.houm += 1)), 'アメリカ' == _mqm && _mqa.stype >= 8 && _mqa.stype <= 10) {
                _mqh.houg += 2, _mqh.kaih += 1, _mqh.houm += 1, _mqg = true;
                for (var _mqo = 0, _mqp = 0, _mqq = _mqa.have_slot_ids(); _mqp < _mqq.length; _mqp++) {
                    var _mqr = _mqq[_mqp];
                    _mqn[Number(_mqr)] && (_mqo += _mqa.get_slotnums(parseInt(_mqr)));
                }
                _mqo >= 1 && (_mqf.houg += 1, _mqf.kaih += 1, _mqf.houm += 2), _mqj >= 1 && _mqk >= 1 && (_mqf.houg += 1, _mqf.houm += 1, _mqf.kaih += 2);
            }
            else 6 != _mqa.ctype && 26 != _mqa.ctype && 2 != _mqa.ctype && 'イギリス' != _mqm || (_mqf.kaih += 1, _mqf.houm += 1, _mqj >= 1 && _mqk >= 1 && (_mqf.houg += 1, _mqf.houm += 1, _mqf.kaih += 1));
            _mqg && _mqf.add(_mqh.multiply(_mql));
            for (var _mqs = {}, _mqt = {}, _mqu = {}, _mqv = function(_mqw) {
                    var _mqx = null,
                        _mqy = Number(_mqw),
                        _mqz = _mqi[_mqy];
                    _mqs[_mqz] = null !== (_mqc = _mqs[_mqz]) && void 0 !== _mqc ? _mqc : 0, _mqt[_mqz] = null !== (_mqd = _mqt[_mqz]) && void 0 !== _mqd ? _mqd : 0, _mqu[_mqz] = null !== (_mqe = _mqu[_mqz]) && void 0 !== _mqe ? _mqe : 0, _mqa.get_each_level_nums(_mqy).forEach(function(_mr0, _mr1) {
                        _mr1 >= 3 && (_mqs[_mqz] += _mr0), _mr1 >= 6 && (_mqt[_mqz] += _mr0), _mr1 >= 9 && (_mqu[_mqz] += _mr0);
                    });
                }, _mr2 = 0, _mr3 = Object.keys(_mqi); _mr2 < _mr3.length; _mr2++) {
                _mqv(_mr3[_mr2]);
            }
            return _mqs[507] >= 1 && (_mqf.houg += 1 * _mqs[507]), _mqt[507] >= 1 && (_mqf.souk += 1 * _mqt[507]), _mqu[507] >= 1 && (_mqf.houm += 1 * _mqu[507]), _mqf;
        };
    },
    66985: (_mr4, _mr5, _mr6) => {
        'use strict';
        var _mr7 = null;
        defineModule(_mr5);
        Object.defineProperty(_mr5, '__esModule', {
            'value': true
        }), _mr5.getSlot15PersonalEffect = void 0;
        var _mr8 = _mr6(74496);
        _mr5.getSlot15PersonalEffect = function(_mr9) {
            var _mra = null,
                _mrb = new _mr8.SlotItemEffectModel(),
                _mrc = false;
            if ((566 == _mr9.ship_id || 567 == _mr9.ship_id || 568 == _mr9.ship_id || 648 == _mr9.ship_id || 651 == _mr9.ship_id || 656 == _mr9.ship_id || 670 == _mr9.ship_id || 915 == _mr9.ship_id || 951 == _mr9.ship_id || 'たけ' == _mr9.yomi) && (_mrc = true), 0 == _mrc) return _mrb;
            var _mrd = _mr9.get_slotnums(15);
            return 30 == _mr9.ctype && (1 == _mrd ? _mrb.raig = 2 : _mrd >= 2 && (_mrb.raig = 4)), 'たけ' == _mr9.yomi && (_mrb.raig += 5, _mrb.kaih += 1), _mrb;
        };
    },
    70332: (_mre, _mrf, _mrg) => {
        'use strict';
        var _mrh = null;
        defineModule(_mrf);
        Object.defineProperty(_mrf, '__esModule', {
            'value': true
        }), _mrf.getSlot15_2cmSanrensouSyuhouPersonalEffect = void 0;
        var _mri = _mrg(74496);
        _mrf.getSlot15_2cmSanrensouSyuhouPersonalEffect = function(_mrj) {
            var _mrk = null,
                _mrl = new _mri.SlotItemEffectModel(),
                _mrm = false,
                _mrn = new _mri.SlotItemEffectModel(),
                _mro = 0,
                _mrp = _mrj.getCountryName(),
                _mrq = _mrj.get_slotnums(536),
                _mrr = _mrj.get_slotnums(537);
            if ('フランス' == _mrp && (_mrn.houg += 2, _mrn.houm += 1, 128 == _mrj.ctype && (_mrn.houm += 1), 970 == _mrj.ship_id && _mrr >= 1 && (_mrn.houg += 1, _mrn.kaih += 2, _mrn.houm += 1), _mrm = true, _mro = 1), 0 == _mrm) return _mrl;
            var _mrs = _mrq + _mrr;
            if (_mrl.add(_mrn.multiply(_mrs)), 0 == _mro) return _mrl;
            _mrj.haveSlotLevelNumOver(536);
            var _mrt = _mrj.haveSlotLevelNumOver(537),
                _mru = _mrj.getTotalCountWithOverLeveledItem([536, 537]),
                _mrv = _mrj.get_slotnums(471) + _mrj.get_slotnums(538),
                _mrw = _mrj.haveSlotLevelNumOver(538);
            return 1 == _mro && (_mru[3] >= 1 && (_mrl.houm += 1 * _mru[3]), _mru[4] >= 1 && (_mrl.houg += 1 * _mru[4]), _mrt[5] >= 1 && (_mrl.kaih += 1 * _mrt[5]), _mru[6] >= 1 && (_mrl.houm += 1 * _mru[6]), _mru[7] >= 1 && (_mrl.houg += 1 * _mru[7]), _mrt[8] >= 1 && (_mrl.kaih += 1 * _mrt[8]), _mru[9] >= 1 && (_mrl.houm += 1 * _mru[9]), _mru[10] >= 1 && (_mrl.houg += 1 * _mru[10]), _mru[1] >= 1 && (_mrv >= 1 && (970 == _mrj.ship_id && (_mrl.kaih += 1 * _mrv), _mrl.houm += 1 * _mrv), _mrw[7] >= 1 && (_mrl.kaih += 1 * _mrw[7]), _mrw[9] >= 1 && (_mrl.houm += 1 * _mrw[9]))), _mrl;
        };
    },
    79086: (_mrx, _mry, _mrz) => {
        'use strict';
        var _ms0 = null;
        defineModule(_mry);
        Object.defineProperty(_mry, '__esModule', {
            'value': true
        }), _mry.getSlot165_216PersonalEffect = void 0;
        var _ms1 = _mrz(74496);
        _mry.getSlot165_216PersonalEffect = function(_ms2) {
            var _ms3 = null,
                _ms4 = new _ms1.SlotItemEffectModel();
            return 501 != _ms2.ship_id && 506 != _ms2.ship_id && 502 != _ms2.ship_id && 507 != _ms2.ship_id || (_ms4.tyku += 2, _ms4.kaih += 2), _ms4;
        };
    },
    88102: (_ms5, _ms6, _ms7) => {
        'use strict';
        var _ms8 = null;
        defineModule(_ms6);
        Object.defineProperty(_ms6, '__esModule', {
            'value': true
        }), _ms6.getSlot16M1PersonalEffect = void 0;
        var _ms9 = _ms7(74496);
        _ms6.getSlot16M1PersonalEffect = function(_msa) {
            var _msb = null,
                _msc = new _ms9.SlotItemEffectModel(),
                _msd = new _ms9.SlotItemEffectModel();
            67 == _msa.ctype || 78 == _msa.ctype || 82 == _msa.ctype || 88 == _msa.ctype || 108 == _msa.ctype || 112 == _msa.ctype ? (_msd.houg += 2, _msd.souk += 1, 67 == _msa.ctype && (_msd.kaih -= 2)) : 149 == _msa.ship_id || 150 == _msa.ship_id || 151 == _msa.ship_id || 152 == _msa.ship_id ? (_msd.houg += 1, _msd.souk += 1, _msd.kaih -= 3) : 591 == _msa.ship_id || 592 == _msa.ship_id ? (_msd.houg += 2, _msd.souk += 1, _msd.kaih -= 2) : 593 != _msa.ship_id && 954 != _msa.ship_id || (_msd.houg += 1, _msd.souk += 1, _msd.kaih -= 1);
            var _mse = true;
            if (_msd.exists() || (_mse = false), 0 == _mse) return _msc;
            var _msf = _msa.get_slotnums(298) + _msa.get_slotnums(299) + _msa.get_slotnums(300);
            return _msc = _msd.multiply(_msf);
        };
    },
    29240: (_msg, _msh, _msi) => {
        'use strict';
        var _msj = null;
        defineModule(_msh);
        Object.defineProperty(_msh, '__esModule', {
            'value': true
        }), _msh.getSlot171PersonalEffect = void 0;
        var _msk = _msi(74496);
        _msh.getSlot171PersonalEffect = function(_msl) {
            var _msm = null,
                _msn = new _msk.SlotItemEffectModel(),
                _mso = 0;
            'アメリカ' == _msl.getCountryName() && (_mso = 1), 65 != _msl.ctype && 93 != _msl.ctype && 102 != _msl.ctype && 107 != _msl.ctype && 125 != _msl.ctype || (_msn.houg += 1, _msn.saku += 1, _mso = 2);
            var _msp = _msl.get_each_level_nums(171),
                _msq = 0,
                _msr = 0,
                _mss = 0;
            return _mso > 0 && (_msp.map(function(_mst, _msu) {
                _msu >= 5 && (_msq += _mst), _msu >= 3 && (_msr += _mst), _msu >= 8 && (_mss += _mst);
            }), 1 != _mso && 2 != _mso || (_msp[10] > 0 && (_msn.houg += 1), _msq > 0 && (_msn.kaih += 1)), 2 == _mso && (_msr > 0 && (_msn.saku += 1), _mss > 0 && (_msn.saku += 1))), _msn;
        };
    },
    40885: (_msv, _msw, _msx) => {
        'use strict';
        var _msy = null;
        defineModule(_msw);
        Object.defineProperty(_msw, '__esModule', {
            'value': true
        }), _msw.getSlot174PersonalEffect = void 0;
        var _msz = _msx(74496);
        _msw.getSlot174PersonalEffect = function(_mt0) {
            var _mt1 = null,
                _mt2 = new _msz.SlotItemEffectModel(),
                _mt3 = new _msz.SlotItemEffectModel();
            if (66 == _mt0.ctype && (_mt3.raig = 1, _mt3.kaih = 2), 591 == _mt0.ship_id || 592 == _mt0.ship_id || 954 == _mt0.ship_id ? (_mt3.raig += 6, _mt3.kaih += 3) : 593 == _mt0.ship_id ? (_mt3.raig += 5, _mt3.kaih += 2) : 488 != _mt0.ship_id && 622 != _mt0.ship_id && 623 != _mt0.ship_id && 624 != _mt0.ship_id || (_mt3.houg += 2, _mt3.raig += 4, _mt3.kaih += 4), !_mt3.exists()) return _mt2;
            var _mt4 = _mt0.get_slotnums(174);
            return _mt2 = _mt3.multiply(_mt4);
        };
    },
    19614: (_mt5, _mt6, _mt7) => {
        'use strict';
        var _mt8 = null;
        defineModule(_mt6);
        Object.defineProperty(_mt6, '__esModule', {
            'value': true
        }), _mt6.getSlot179PersonalEffect = void 0;
        var _mt9 = _mt7(74496);
        _mt6.getSlot179PersonalEffect = function(_mta) {
            var _mtb = null,
                _mtc = new _mt9.SlotItemEffectModel(),
                _mtd = new _mt9.SlotItemEffectModel();
            if (54 == _mta.ctype && (_mtd.raig = 1), !_mtd.exists()) return _mtc;
            var _mte = _mta.get_slotnums(179);
            return _mtc = _mtd.multiply(_mte);
        };
    },
    87220: (_mtf, _mtg, _mth) => {
        'use strict';
        var _mti = null;
        defineModule(_mtg);
        Object.defineProperty(_mtg, '__esModule', {
            'value': true
        }), _mtg.getSlot184PersonalEffect = void 0;
        var _mtj = _mth(74496);
        _mtg.getSlot184PersonalEffect = function(_mtk) {
            var _mtl = null,
                _mtm = new _mtj.SlotItemEffectModel(),
                _mtn = new _mtj.SlotItemEffectModel();
            if (68 == _mtk.ctype && (_mtn.houg += 1, _mtn.tyku += 2, _mtn.kaih += 3), !_mtn.exists()) return _mtm;
            var _mto = _mtk.get_slotnums(184);
            return _mtm = _mtn.multiply(_mto);
        };
    },
    81367: (_mtp, _mtq, _mtr) => {
        'use strict';
        var _mts = null;
        defineModule(_mtq);
        Object.defineProperty(_mtq, '__esModule', {
            'value': true
        }), _mtq.getSlot188PersonalEffect = void 0;
        var _mtt = _mtr(74496);
        _mtq.getSlot188PersonalEffect = function(_mtu) {
            var _mtv = null,
                _mtw = new _mtt.SlotItemEffectModel(),
                _mtx = new _mtt.SlotItemEffectModel();
            if (68 == _mtu.ctype && (_mtx.houg += 3, _mtx.tyku += 1, _mtx.kaih += 1), !_mtx.exists()) return _mtw;
            var _mty = _mtu.get_slotnums(188);
            return _mtw = _mtx.multiply(_mty);
        };
    },
    13052: (_mtz, _mu0, _mu1) => {
        'use strict';
        var _mu2 = null;
        defineModule(_mu0);
        Object.defineProperty(_mu0, '__esModule', {
            'value': true
        }), _mu0.getSlot189PersonalEffect = void 0;
        var _mu3 = _mu1(74496);
        _mu0.getSlot189PersonalEffect = function(_mu4) {
            var _mu5 = null,
                _mu6 = new _mu3.SlotItemEffectModel(),
                _mu7 = new _mu3.SlotItemEffectModel();
            if (68 != _mu4.ctype && 63 != _mu4.ctype || (_mu7.tyku += 1, _mu7.kaih += 2), !_mu7.exists()) return _mu6;
            var _mu8 = _mu4.get_slotnums(189);
            return _mu6 = _mu7.multiply(_mu8);
        };
    },
    66904: (_mu9, _mua, _mub) => {
        'use strict';
        var _muc = null;
        defineModule(_mua);
        Object.defineProperty(_mua, '__esModule', {
            'value': true
        }), _mua.getSlot18_52_PersonalEffect = void 0;
        var _mud = _mub(74496);
        _mua.getSlot18_52_PersonalEffect = function(_mue) {
            var _muf = null,
                _mug = new _mud.SlotItemEffectModel(),
                _muh = new _mud.SlotItemEffectModel();
            if (277 == _mue.ship_id || 278 == _mue.ship_id || 156 == _mue.ship_id ? _muh.houg = 1 : 594 == _mue.ship_id || 698 == _mue.ship_id || 646 == _mue.ship_id ? (_muh.houg = 1, _muh.kaih = 1) : 599 != _mue.ship_id && 610 != _mue.ship_id || (_muh.houg = 2, _muh.kaih = 1), !_muh.exists()) return _mug;
            var _mui = _mue.get_slotnums(18) + _mue.get_slotnums(52);
            return _mug = _muh.multiply(_mui);
        };
    },
    94968: (_muj, _muk, _mul) => {
        'use strict';
        var _mum = null;
        defineModule(_muk);
        Object.defineProperty(_muk, '__esModule', {
            'value': true
        }), _muk.getSlot194PersonalEffect = void 0;
        var _mun = _mul(74496);
        _muk.getSlot194PersonalEffect = function(_muo) {
            var _mup = null,
                _muq = new _mun.SlotItemEffectModel(),
                _mur = new _mun.SlotItemEffectModel();
            if (70 == _muo.ctype ? (_mur.houg += 3, _mur.kaih += 2, _mur.saku += 2) : 72 != _muo.ctype && 62 != _muo.ctype || (_mur.kaih += 1, _mur.saku += 2), 392 != _muo.ship_id && 969 != _muo.ship_id || (_mur.houg += 1, _mur.kaih += 2, _mur.saku += 2), !_mur.exists()) return _muq;
            var _mus = _muo.get_slotnums(194);
            return _muq = _mur.multiply(_mus);
        };
    },
    94781: (_mut, _muu, _muv) => {
        'use strict';
        var _muw = null;
        defineModule(_muu);
        Object.defineProperty(_muu, '__esModule', {
            'value': true
        }), _muu.getSlot195PersonalEffect = void 0;
        var _mux = _muv(74496);
        _muu.getSlot195PersonalEffect = function(_muy) {
            var _muz = null,
                _mv0 = new _mux.SlotItemEffectModel(),
                _mv1 = false,
                _mv2 = new _mux.SlotItemEffectModel();
            if ('アメリカ' == _muy.getCountryName() && (_mv2.houg += 1, _mv1 = true), 0 == _mv1) return _mv0;
            var _mv3 = _muy.get_slotnums(195);
            return _mv0.add(_mv2.multiply(_mv3));
        };
    },
    98137: (_mv4, _mv5, _mv6) => {
        'use strict';
        var _mv7 = null;
        defineModule(_mv5);
        Object.defineProperty(_mv5, '__esModule', {
            'value': true
        }), _mv5.getSlot19PersonalEffect = void 0;
        var _mv8 = _mv6(74496);
        _mv5.getSlot19PersonalEffect = function(_mv9) {
            var _mva = null,
                _mvb = new _mv8.SlotItemEffectModel(),
                _mvc = new _mv8.SlotItemEffectModel();
            if ('ほうしょう' == _mv9.yomi && (_mvc.houg = 2, _mvc.kaih = 2, _mvc.tais = 2, _mvc.tyku = 2), 75 != _mv9.ctype && 76 != _mv9.ctype || (_mvc.houg = 2, _mvc.tais = 3), 7 == _mv9.stype && (_mvc.tyku += 1, _mvc.kaih += 1), 894 != _mv9.ship_id && 899 != _mv9.ship_id || (_mvc.houg += 1, _mvc.kaih += 1, _mvc.tais += 1, _mvc.tyku += 1), !_mvc.exists()) return _mvb;
            var _mvd = _mv9.get_slotnums(19);
            return _mvb = _mvc.multiply(_mvd);
        };
    },
    48658: (_mve, _mvf, _mvg) => {
        'use strict';
        var _mvh = null;
        defineModule(_mvf);
        Object.defineProperty(_mvf, '__esModule', {
            'value': true
        }), _mvf.getSlot204PersonalEffect = void 0;
        var _mvi = _mvg(74496);
        _mvf.getSlot204PersonalEffect = function(_mvj) {
            var _mvk = null,
                _mvl = new _mvi.SlotItemEffectModel();
            if (591 != _mvj.ship_id && 592 != _mvj.ship_id && 593 != _mvj.ship_id && 954 != _mvj.ship_id) return _mvl;
            _mvl.souk = _mvl.souk + 1, _mvl.raig = _mvl.raig + 1;
            for (var _mvm = _mvj.get_each_level_nums(204), _mvn = 0, _mvo = 0; _mvo <= 10; _mvo++) _mvo >= 7 && (_mvn += _mvm[_mvo]);
            return _mvn > 0 && (_mvl.souk = _mvl.souk + 1), _mvm[10] > 0 && (_mvl.raig = _mvl.raig + 1), _mvl;
        };
    },
    2306: (_mvp, _mvq, _mvr) => {
        'use strict';
        var _mvs = null;
        defineModule(_mvq);
        Object.defineProperty(_mvq, '__esModule', {
            'value': true
        }), _mvq.getSlot217PersonalEffect = void 0;
        var _mvt = _mvr(74496);
        _mvq.getSlot217PersonalEffect = function(_mvu) {
            var _mvv = null,
                _mvw = new _mvt.SlotItemEffectModel(),
                _mvx = false,
                _mvy = new _mvt.SlotItemEffectModel();
            if (501 == _mvu.ship_id || 506 == _mvu.ship_id ? (_mvy.houg += 1, _mvy.kaih += 3, _mvy.tyku += 5, _mvx = true) : 502 != _mvu.ship_id && 507 != _mvu.ship_id || (_mvy.houg += 1, _mvy.kaih += 2, _mvy.tyku += 4, _mvx = true), 0 == _mvx) return _mvw;
            var _mvz = _mvu.get_slotnums(217);
            return _mvw.add(_mvy.multiply(_mvz)), _mvw;
        };
    },
    91302: function(_mw0, _mw1, _mw2) {
        'use strict';
        var _mw3 = null;
        var _mw4 = this && this.__importDefault || function(_mw5) {
            var _mw6 = null;
            return _mw5 && _mw5.__esModule ? _mw5 : {
                'default': _mw5
            };
        };
        defineModule(_mw1);
        Object.defineProperty(_mw1, '__esModule', {
            'value': true
        }), _mw1.getSlot220PersonalEffect = void 0;
        var _mw7 = _mw2(74496),
            _mw8 = _mw4(_mw2(18622));
        _mw1.getSlot220PersonalEffect = function(_mw9) {
            var _mwa = null,
                _mwb = new _mw7.SlotItemEffectModel(),
                _mwc = false,
                _mwd = new _mw7.SlotItemEffectModel(),
                _mwe = 0,
                _mwf = 0;
            if (662 == _mw9.ship_id || 663 == _mw9.ship_id || 668 == _mw9.ship_id || 501 == _mw9.ship_id || 506 == _mw9.ship_id || 502 == _mw9.ship_id || 507 == _mw9.ship_id ? (_mwd.houg += 1, _mwd.tyku += 3, _mwd.kaih += 2, _mwc = true, _mwe = 1) : 894 != _mw9.ship_id && 899 != _mw9.ship_id || (_mwd.tyku += 2, _mwd.kaih += 2, _mwc = true, _mwe = 1, _mwf = 1), 0 == _mwc) return _mwb;
            var _mwg = _mw9.get_slotnums(220);
            _mwb.add(_mwd.multiply(_mwg));
            for (var _mwh = 0, _mwi = 0, _mwj = _mw9.have_slot_ids(); _mwi < _mwj.length; _mwi++) {
                var _mwk = _mwj[_mwi],
                    _mwl = _mw8.default.model.slot.getMst(_mwk),
                    _mwm = _mwl.equipType;
                12 != _mwm && 13 != _mwm || (_mwl.sakuteki >= 5 && _mw9.get_slotnums(parseInt(_mwk)), _mwl.taiku >= 2 && (_mwh += _mw9.get_slotnums(parseInt(_mwk))));
            }
            if (_mwh >= 1 && 1 == _mwe && (_mwb.tyku += 3, _mwb.kaih += 3), 0 == _mwf) return _mwb;
            var _mwn = _mw9.get_each_level_nums(220)[10];
            return 1 == _mwf && _mwn > 0 && (_mwb.houg += 1 * _mwn, _mwb.tyku += 1 * _mwn, _mwb.kaih += 1 * _mwn), _mwb;
        };
    },
    20418: (_mwo, _mwp, _mwq) => {
        'use strict';
        var _mwr = null;
        defineModule(_mwp);
        Object.defineProperty(_mwp, '__esModule', {
            'value': true
        }), _mwp.getSlot227PersonalEffect = void 0;
        var _mws = _mwq(74496);
        _mwp.getSlot227PersonalEffect = function(_mwt) {
            var _mwu = null,
                _mwv = new _mws.SlotItemEffectModel(),
                _mww = _mwt.get_each_level_nums(227),
                _mwx = 0;
            _mww.forEach(function(_mwy, _mwz) {
                _mwz >= 8 && (_mwx += _mwy);
            }), _mwx >= 1 && (_mwv.tais += 1 * _mwx);
            var _mx0 = _mww[10];
            return _mx0 >= 1 && (_mwv.tais += 1 * _mx0), _mwv;
        };
    },
    1906: (_mx1, _mx2, _mx3) => {
        'use strict';
        var _mx4 = null;
        defineModule(_mx2);
        Object.defineProperty(_mx2, '__esModule', {
            'value': true
        }), _mx2.getSlot228PersonalEffect = void 0;
        var _mx5 = _mx3(74496);
        _mx2.getSlot228PersonalEffect = function(_mx6) {
            var _mx7 = null,
                _mx8 = new _mx5.SlotItemEffectModel(),
                _mx9 = new _mx5.SlotItemEffectModel();
            if ('ほうしょう' == _mx6.yomi && (_mx9.houg = 3, _mx9.kaih = 4, _mx9.tais = 4, _mx9.tyku = 3), 75 != _mx6.ctype && 76 != _mx6.ctype || (_mx9.houg = 2, _mx9.tais = 5, _mx9.tyku = 1, _mx9.kaih = 1), 7 == _mx6.stype && (_mx9.tais += 2, _mx9.tyku += 1, _mx9.kaih += 1), 894 != _mx6.ship_id && 899 != _mx6.ship_id || (_mx9.houg += 1, _mx9.kaih += 2, _mx9.tais += 2, _mx9.tyku += 1), !_mx9.exists()) return _mx8;
            var _mxa = _mx6.get_slotnums(228);
            return _mx8 = _mx9.multiply(_mxa);
        };
    },
    61887: function(_mxb, _mxc, _mxd) {
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
        }), _mxc.getSlot229PersonalEffect = void 0;
        var _mxi = _mxd(74496),
            _mxj = _mxf(_mxd(18622));
        _mxc.getSlot229PersonalEffect = function(_mxk) {
            var _mxl = null;
            for (var _mxm = new _mxi.SlotItemEffectModel(), _mxn = 0, _mxo = 0, _mxp = _mxk.have_slots_dict[229]; _mxo < _mxp.length; _mxo++) {
                _mxp[_mxo].level >= 7 && _mxn++;
            }
            var _mxq = _mxn,
                _mxr = 0,
                _mxs = 0,
                _mxt = 0,
                _mxu = _mxk.get_slotnums(229);
            if (622 == _mxk.ship_id || 623 == _mxk.ship_id || 624 == _mxk.ship_id) _mxm.houg += 1 * _mxu, _mxm.tyku += 1 * _mxu, _mxr = 2;
            else {
                if (656 == _mxk.ship_id) _mxm.houg += 2 * _mxu, _mxm.tyku += 3 * _mxu, _mxm.tais += 2 * _mxu, _mxr = 3;
                else {
                    if (0 == _mxn) return _mxm;
                }
            }
            if (488 == _mxk.ship_id ? (_mxm.tyku += 3 * _mxq, _mxr = 1) : 220 == _mxk.ship_id ? _mxm.tyku += 2 * _mxq : 23 == _mxk.ship_id ? _mxm.tyku += 1 * _mxq : 160 == _mxk.ship_id ? (_mxm.tyku += 2 * _mxq, _mxr = 1) : 224 == _mxk.ship_id ? _mxm.tyku += 1 * _mxq : 487 == _mxk.ship_id ? (_mxm.tyku += 2 * _mxq, _mxr = 1) : 289 == _mxk.ship_id && (_mxm.tyku += 1 * _mxq), (66 == _mxk.ctype || 28 == _mxk.ctype) && (_mxm.houg += 1 * _mxq, _mxm.tyku += 1 * _mxq, _mxs = 1), 1 == _mxk.stype && (_mxm.houg += 1 * _mxq, _mxm.tyku += 1 * _mxq, _mxt = 1), ('ゆら' == _mxk.yomi || 'なか' == _mxk.yomi || 'きぬ' == _mxk.yomi) && (_mxm.houg += 2 * _mxq), 0 == _mxr + _mxs + _mxt) return _mxm;
            for (var _mxv = 0, _mxw = 0, _mxx = 0, _mxy = _mxk.have_slot_ids(); _mxx < _mxy.length; _mxx++) {
                var _mxz = _mxy[_mxx],
                    _my0 = _mxj.default.model.slot.getMst(_mxz),
                    _my1 = _my0.equipType;
                12 != _my1 && 13 != _my1 || (_my0.sakuteki >= 5 && (_mxv += _mxk.get_slotnums(parseInt(_mxz))), _my0.taiku >= 2 && (_mxw += _mxk.get_slotnums(parseInt(_mxz))));
            }
            return 1 == _mxr ? _mxv > 0 && (_mxm.houg += 3, _mxm.kaih += 2) : 2 == _mxr ? (_mxv > 0 && (_mxm.houg += 1, _mxm.kaih += 1), _mxw > 0 && (_mxm.tyku += 2, _mxm.kaih += 2)) : 3 == _mxr && (_mxv > 0 && (_mxm.houg += 2, _mxm.kaih += 2), _mxw > 0 && (_mxm.tyku += 3, _mxm.kaih += 2)), 1 == _mxs && _mxv > 0 && (_mxm.houg += 2, _mxm.kaih += 3), 1 == _mxt && _mxv > 0 && (_mxm.houg += 1, _mxm.kaih += 4), _mxm;
        };
    },
    55734: (_my2, _my3, _my4) => {
        'use strict';
        var _my5 = null;
        defineModule(_my3);
        Object.defineProperty(_my3, '__esModule', {
            'value': true
        }), _my3.getSlot234PersonalEffect = void 0;
        var _my6 = _my4(74496);
        _my3.getSlot234PersonalEffect = function(_my7) {
            var _my8 = null,
                _my9 = new _my6.SlotItemEffectModel(),
                _mya = false,
                _myb = new _my6.SlotItemEffectModel(),
                _myc = _my7.get_slotnums(142) + _my7.get_slotnums(460);
            if (37 == _my7.ctype && (_myb.houg += 1, _myb.tyku += 1, _myb.kaih += 1, _myb.houm += 1, _myc >= 1 && (_my9.tyku += 1, _my9.kaih += 1, _my9.houm += 1), _mya = true), 0 == _mya) return _my9;
            var _myd = _my7.get_slotnums(234);
            return _my9.add(_myb.multiply(_myd)), _my9;
        };
    },
    17562: function(_mye, _myf, _myg) {
        'use strict';
        var _myh = null;
        var _myi = this && this.__importDefault || function(_myj) {
            var _myk = null;
            return _myj && _myj.__esModule ? _myj : {
                'default': _myj
            };
        };
        defineModule(_myf);
        Object.defineProperty(_myf, '__esModule', {
            'value': true
        }), _myf.getSlot235PersonalEffect = void 0;
        var _myl = _myg(74496),
            _mym = _myi(_myg(18622));
        _myf.getSlot235PersonalEffect = function(_myn) {
            var _myo = null,
                _myp = new _myl.SlotItemEffectModel(),
                _myq = false,
                _myr = new _myl.SlotItemEffectModel(),
                _mys = 0;
            if (52 != _myn.ctype && 9 != _myn.ctype || (_myr.houg += 2, _myr.tyku += 1, _myq = true), 321 == _myn.ship_id && (_myr.houg += 1, _myr.kaih += 1, _mys = 1), 0 == _myq) return _myp;
            var _myt = _myn.get_slotnums(235);
            if (_myp.add(_myr.multiply(_myt)), 0 == _mys) return _myp;
            for (var _myu = 0, _myv = 0, _myw = 0, _myx = _myn.have_slot_ids(); _myw < _myx.length; _myw++) {
                var _myy = _myx[_myw],
                    _myz = _mym.default.model.slot.getMst(_myy),
                    _mz0 = _myz.equipType;
                12 != _mz0 && 13 != _mz0 || (_myz.sakuteki >= 5 && (_myu += _myn.get_slotnums(parseInt(_myy))), _myz.taiku >= 2 && (_myv += _myn.get_slotnums(parseInt(_myy))));
            }
            return _myu >= 1 && 1 == _mys && (_myp.houg += 3, _myp.kaih += 2), _myv >= 1 && 1 == _mys && (_myp.tyku += 3, _myp.kaih += 3), _myp;
        };
    },
    47970: (_mz1, _mz2, _mz3) => {
        'use strict';
        var _mz4 = null;
        defineModule(_mz2);
        Object.defineProperty(_mz2, '__esModule', {
            'value': true
        }), _mz2.getSlot237PersonalEffect = void 0;
        var _mz5 = _mz3(74496);
        _mz2.getSlot237PersonalEffect = function(_mz6) {
            var _mz7 = null,
                _mz8 = new _mz5.SlotItemEffectModel(),
                _mz9 = new _mz5.SlotItemEffectModel();
            if (553 == _mz6.ship_id) _mz9.houg = 4, _mz9.kaih = 2;
            else {
                if (82 == _mz6.ship_id) _mz9.houg = 3, _mz9.kaih = 1;
                else {
                    if (88 == _mz6.ship_id) _mz9.houg = 3, _mz9.kaih = 1;
                    else {
                        if (554 == _mz6.ship_id) _mz9.houg = 4, _mz9.kaih = 2;
                        else {
                            if (411 == _mz6.ship_id) _mz9.houg = 2;
                            else {
                                if (412 != _mz6.ship_id) return _mz8;
                                _mz9.houg = 2;
                            }
                        }
                    }
                }
            }
            var _mza = _mz6.get_slotnums(237);
            return _mz8 = _mz9.multiply(_mza);
        };
    },
    14386: (_mzb, _mzc, _mzd) => {
        'use strict';
        var _mze = null;
        defineModule(_mzc);
        Object.defineProperty(_mzc, '__esModule', {
            'value': true
        }), _mzc.getSlot238_239PersonalEffect = void 0;
        var _mzf = _mzd(74496);
        _mzc.getSlot238_239PersonalEffect = function(_mzg) {
            var _mzh = null,
                _mzi = new _mzf.SlotItemEffectModel();
            return 501 != _mzg.ship_id && 506 != _mzg.ship_id && 502 != _mzg.ship_id && 507 != _mzg.ship_id || (_mzi.kaih += 1, _mzi.raig += 1), _mzi;
        };
    },
    82229: (_mzj, _mzk, _mzl) => {
        'use strict';
        var _mzm = null;
        defineModule(_mzk);
        Object.defineProperty(_mzk, '__esModule', {
            'value': true
        }), _mzk.getSlot242PersonalEffect = void 0;
        var _mzn = _mzl(74496);
        _mzk.getSlot242PersonalEffect = function(_mzo) {
            var _mzp = null,
                _mzq = new _mzn.SlotItemEffectModel(),
                _mzr = false,
                _mzs = new _mzn.SlotItemEffectModel();
            if (78 == _mzo.ctype && (_mzs.houg += 2, _mzs.kaih += 1, _mzr = true), 'ほうしょう' == _mzo.yomi && (_mzs.houg += 1, _mzr = true), 0 == _mzr) return _mzq;
            var _mzt = _mzo.get_slotnums(242);
            return _mzq.add(_mzs.multiply(_mzt)), _mzq;
        };
    },
    10325: (_mzu, _mzv, _mzw) => {
        'use strict';
        var _mzx = null;
        defineModule(_mzv);
        Object.defineProperty(_mzv, '__esModule', {
            'value': true
        }), _mzv.getSlot243PersonalEffect = void 0;
        var _mzy = _mzw(74496);
        _mzv.getSlot243PersonalEffect = function(_mzz) {
            var _n00 = null,
                _n01 = new _mzy.SlotItemEffectModel(),
                _n02 = false,
                _n03 = new _mzy.SlotItemEffectModel();
            if (78 == _mzz.ctype && (_n03.houg += 3, _n03.kaih += 1, _n02 = true), 'ほうしょう' == _mzz.yomi && (_n03.houg += 2, _n02 = true), 0 == _n02) return _n01;
            var _n04 = _mzz.get_slotnums(243);
            return _n01.add(_n03.multiply(_n04)), _n01;
        };
    },
    351: (_n05, _n06, _n07) => {
        'use strict';
        var _n08 = null;
        defineModule(_n06);
        Object.defineProperty(_n06, '__esModule', {
            'value': true
        }), _n06.getSlot244PersonalEffect = void 0;
        var _n09 = _n07(74496);
        _n06.getSlot244PersonalEffect = function(_n0a) {
            var _n0b = null,
                _n0c = new _n09.SlotItemEffectModel(),
                _n0d = false,
                _n0e = new _n09.SlotItemEffectModel(),
                _n0f = 0;
            if (78 == _n0a.ctype && (_n0e.houg += 4, _n0e.kaih += 2, _n0d = true, _n0f = 1), 'ほうしょう' == _n0a.yomi && (_n0e.houg += 3, _n0d = true, _n0f = 2), 0 == _n0d) return _n0c;
            var _n0g = _n0a.get_slotnums(244);
            if (_n0c.add(_n0e.multiply(_n0g)), 0 == _n0f) return _n0c;
            var _n0h = _n0a.get_each_level_over_nums([244]).slot[244];
            return 1 == _n0f ? (_n0h[3] >= 1 && (_n0c.houg += 1 * _n0h[3]), _n0h[5] >= 1 && (_n0c.houm += 1 * _n0h[5]), _n0h[7] >= 1 && (_n0c.houg += 1 * _n0h[7]), _n0h[8] >= 1 && (_n0c.kaih += 1 * _n0h[8]), _n0h[9] >= 1 && (_n0c.houm += 1 * _n0h[9]), _n0h[10] >= 1 && (_n0c.houg += 1 * _n0h[10])) : 2 == _n0f && (_n0h[3] >= 1 && (_n0c.kaih += 1 * _n0h[3]), _n0h[7] >= 1 && (_n0c.houg += 1 * _n0h[7]), _n0h[9] >= 1 && (_n0c.houm += 1 * _n0h[9]), _n0h[10] >= 1 && (_n0c.houg += 1 * _n0h[10])), _n0c;
        };
    },
    61977: (_n0i, _n0j, _n0k) => {
        'use strict';
        var _n0l = null;
        defineModule(_n0j);
        Object.defineProperty(_n0j, '__esModule', {
            'value': true
        }), _n0j.getSlot247PersonalEffect = void 0;
        var _n0m = _n0k(74496);
        _n0j.getSlot247PersonalEffect = function(_n0n) {
            var _n0o = null,
                _n0p = new _n0m.SlotItemEffectModel(),
                _n0q = false,
                _n0r = new _n0m.SlotItemEffectModel(),
                _n0s = 0;
            if ('フランス' == _n0n.getCountryName() && (_n0r.houg += 2, _n0r.houm += 2, _n0q = true, _n0s = 1), 0 == _n0q) return _n0p;
            var _n0t = _n0n.get_slotnums(247);
            if (_n0p.add(_n0r.multiply(_n0t)), 0 == _n0s) return _n0p;
            var _n0u = _n0n.get_each_level_nums(247),
                _n0v = 0,
                _n0w = 0;
            _n0s > 0 && _n0u.forEach(function(_n0x, _n0y) {
                _n0y >= 4 && (_n0v += _n0x), _n0y >= 8 && (_n0w += _n0x);
            });
            var _n0z = _n0u[10];
            return 1 == _n0s && (_n0v >= 1 && (_n0p.houg += 1 * _n0v, _n0p.houm += 1 * _n0v), _n0w >= 1 && (_n0p.kaih += 1 * _n0w, _n0p.houg += 1 * _n0w, _n0p.houm += 1 * _n0w), _n0z >= 1 && (_n0p.kaih += 1 * _n0z, _n0p.houm += 1 * _n0z)), _n0p;
        };
    },
    96580: (_n10, _n11, _n12) => {
        'use strict';
        var _n13 = null;
        defineModule(_n11);
        Object.defineProperty(_n11, '__esModule', {
            'value': true
        }), _n11.getSlot252PersonalEffect = void 0;
        var _n14 = _n12(74496);
        _n11.getSlot252PersonalEffect = function(_n15) {
            var _n16 = null,
                _n17 = new _n14.SlotItemEffectModel(),
                _n18 = (new _n14.SlotItemEffectModel(), 0);
            if (78 != _n15.ctype && 112 != _n15.ctype || (_n18 = 1), 0 == _n18) return _n17;
            var _n19 = _n15.get_each_level_over_nums([252]).slot[252];
            return 1 == _n18 && (_n19[4] >= 1 && (_n17.kaih += 1 * _n19[4]), _n19[6] >= 1 && (_n17.houm += 1 * _n19[6]), _n19[7] >= 1 && (_n17.houg += 1 * _n19[7]), _n19[8] >= 1 && (_n17.kaih += 1 * _n19[8]), _n19[9] >= 1 && (_n17.houm += 1 * _n19[9]), _n19[10] >= 1 && (_n17.houg += 1 * _n19[10])), _n17;
        };
    },
    31797: function(_n1a, _n1b, _n1c) {
        'use strict';
        var _n1d = null;
        var _n1e = this && this.__importDefault || function(_n1f) {
            var _n1g = null;
            return _n1f && _n1f.__esModule ? _n1f : {
                'default': _n1f
            };
        };
        defineModule(_n1b);
        Object.defineProperty(_n1b, '__esModule', {
            'value': true
        }), _n1b.getSlot266PersonalEffect2 = _n1b.getSlot266PersonalEffect = void 0;
        var _n1h = _n1c(74496),
            _n1i = _n1e(_n1c(18622));
        _n1b.getSlot266PersonalEffect = function(_n1j) {
            var _n1k = null,
                _n1l = new _n1h.SlotItemEffectModel(),
                _n1m = false;
            if (566 != _n1j.ship_id && 567 != _n1j.ship_id && 568 != _n1j.ship_id && 656 != _n1j.ship_id && 670 != _n1j.ship_id && 915 != _n1j.ship_id && 951 != _n1j.ship_id || (_n1m = true), 0 == _n1m) return _n1l;
            var _n1n = _n1j.get_slotnums(266);
            return 30 == _n1j.ctype && (1 == _n1n ? _n1l.houg = 1 : _n1n >= 2 && (_n1l.houg = 3)), _n1l;
        }, _n1b.getSlot266PersonalEffect2 = function(_n1o) {
            var _n1p = null,
                _n1q = new _n1h.SlotItemEffectModel(),
                _n1r = 0,
                _n1s = new _n1h.SlotItemEffectModel();
            if (23 == _n1o.ctype || 18 == _n1o.ctype ? (_n1s.houg = 1, _n1r = 1) : 30 == _n1o.ctype && (_n1s.houg = 1, _n1r = 2), ('しぐれ' == _n1o.yomi || 'ゆきかぜ' == _n1o.yomi || 'いそかぜ' == _n1o.yomi) && (_n1s.kaih = 1), 961 == _n1o.ship_id && (_n1s.houg += 1, _n1s.houm += 1, _n1s.kaih += 1), !_n1s.exists()) return _n1q;
            var _n1t = _n1o.get_slotnums(266);
            if (_n1q = _n1s.multiply(_n1t), 0 == _n1r) return _n1q;
            for (var _n1u = 0, _n1v = 0, _n1w = _n1o.have_slot_ids(); _n1v < _n1w.length; _n1v++) {
                var _n1x = _n1w[_n1v],
                    _n1y = _n1i.default.model.slot.getMst(_n1x),
                    _n1z = _n1y.equipType;
                (12 == _n1z || 13 == _n1z) && _n1y.sakuteki >= 5 && (_n1u += _n1o.get_slotnums(parseInt(_n1x)));
            }
            return _n1u > 0 && (1 == _n1r ? (_n1q.houg += 1, _n1q.kaih += 1, _n1q.raig += 3) : 2 == _n1r && (_n1q.houg += 2, _n1q.kaih += 1, _n1q.raig += 3)), _n1q;
        };
    },
    45738: function(_n20, _n21, _n22) {
        'use strict';
        var _n23 = null;
        var _n24 = this && this.__importDefault || function(_n25) {
            var _n26 = null;
            return _n25 && _n25.__esModule ? _n25 : {
                'default': _n25
            };
        };
        defineModule(_n21);
        Object.defineProperty(_n21, '__esModule', {
            'value': true
        }), _n21.getSlot267PersonalEffect2 = _n21.getSlot267PersonalEffect = void 0;
        var _n27 = _n22(74496),
            _n28 = _n24(_n22(18622));
        _n21.getSlot267PersonalEffect = function(_n29) {
            var _n2a = null,
                _n2b = new _n27.SlotItemEffectModel(),
                _n2c = 0,
                _n2d = 0;
            if (38 == _n29.ctype || 22 == _n29.ctype) _n2c = 2, _n2d = 1;
            else {
                if (30 != _n29.ctype) return _n2b;
                _n2c = 1, _n2d = 1;
            }
            var _n2e = _n29.get_slotnums(267) + _n29.get_slotnums(366);
            return _n2b.houg = _n2c * _n2e, _n2b.kaih = _n2d * _n2e, _n2b;
        }, _n21.getSlot267PersonalEffect2 = function(_n2f) {
            var _n2g = null,
                _n2h = new _n27.SlotItemEffectModel(),
                _n2i = _n2f.get_slotnums(267),
                _n2j = _n2f.get_slotnums(366),
                _n2k = _n2i + _n2j;
            if (566 != _n2f.ship_id && 567 != _n2f.ship_id && 568 != _n2f.ship_id && 656 != _n2f.ship_id && 670 != _n2f.ship_id && 915 != _n2f.ship_id && 951 != _n2f.ship_id || (_n2i > 0 && (_n2h.houg += 1), 1 == _n2j ? (_n2h.houg += 1, _n2h.tyku += 2) : _n2j >= 2 && (_n2h.houg += 2, _n2h.tyku += 4)), 38 != _n2f.ctype && 229 != _n2f.ship_id && [648, 961].indexOf(_n2f.ship_id) < 0) return _n2h;
            var _n2l = false,
                _n2m = false,
                _n2n = false,
                _n2o = false,
                _n2p = false,
                _n2q = false,
                _n2r = false,
                _n2s = false,
                _n2t = false,
                _n2u = false,
                _n2v = false,
                _n2w = 0,
                _n2x = 0,
                _n2y = 0;
            543 == _n2f.ship_id ? (_n2h.houg = 1 * _n2k, _n2m = true) : 229 == _n2f.ship_id ? _n2n = true : 542 == _n2f.ship_id ? (_n2h.houg = 1 * _n2k, _n2o = true) : 563 == _n2f.ship_id ? (_n2h.houg = 1 * _n2k, _n2p = true) : 564 == _n2f.ship_id ? (_n2h.houg = 1 * _n2k, _n2q = true) : 578 == _n2f.ship_id ? (_n2h.houg = 1 * _n2k, _n2r = true) : 569 == _n2f.ship_id ? (_n2h.houg = 1 * _n2k, _n2s = true) : 649 == _n2f.ship_id ? (_n2h.houg = 2 * _n2k, _n2u = true) : 955 == _n2f.ship_id || 960 == _n2f.ship_id ? (_n2h.houg = 2 * _n2k, _n2v = true) : 648 == _n2f.ship_id ? (_n2h.houg = 2 * _n2k, _n2t = true, _n2w = 1, _n2x = 1, _n2y = 1) : 961 == _n2f.ship_id && (_n2h.houg = 2 * _n2k, _n2l = true, _n2w = 1, _n2x = 1, _n2y = 1);
            for (var _n2z = 0, _n30 = 0, _n31 = 0, _n32 = _n2f.have_slot_ids(); _n31 < _n32.length; _n31++) {
                var _n33 = _n32[_n31],
                    _n34 = _n28.default.model.slot.getMst(_n33),
                    _n35 = _n34.equipType;
                12 != _n35 && 13 != _n35 || (_n34.sakuteki >= 5 && (_n2z += _n2f.get_slotnums(parseInt(_n33))), _n34.taiku >= 2 && (_n30 += _n2f.get_slotnums(parseInt(_n33))));
            }
            if (_n2z > 0 && _n2i > 0 && ((38 == _n2f.ctype || _n2t) && (_n2h.houg += 2, _n2h.raig += 3, _n2h.kaih += 1, 955 == _n2f.ship_id ? _n2h.raig -= 1 : 960 == _n2f.ship_id && (_n2h.raig -= 2)), (_n2o || _n2m || _n2n || _n2p || _n2q || _n2r || _n2s || _n2t || _n2u || _n2v) && (_n2h.houg += 1, _n2h.raig += 3, _n2h.kaih += 2)), _n2j > 0 && (_n2o || _n2m || _n2p || _n2q || _n2r || _n2n || _n2s || _n2t || _n2u || _n2l || _n2v)) {
                1 == _n2j ? (_n2h.tyku += 3, _n2h.houg += 1, _n2h.houm += 1) : _n2j >= 2 && (_n2h.tyku += 5, _n2h.houg += 3, _n2h.houm += 1, 955 == _n2f.ship_id && (_n2h.houg += 1)), (_n2s || _n2t) && (_n2h.houg += 1, _n2h.tyku += 2), _n2z > 0 && (_n2h.houg += 2, _n2h.kaih += 2, _n2h.raig += 4, _n2h.houm += 2, 960 == _n2f.ship_id && (_n2h.raig -= 1, _n2h.houg += 1)), _n30 > 0 && (_n2h.houg += 1, _n2h.kaih += 3, _n2h.tyku += 5, _n2h.houm += 1);
                var _n36 = _n2f.get_each_level_nums(366),
                    _n37 = 0,
                    _n38 = 0;
                _n36.forEach(function(_n39, _n3a) {
                    _n3a >= 5 && (_n37 += _n39), _n3a >= 8 && (_n38 += _n39);
                }), _n37 >= 1 && (_n2h.houm += 1 * _n37), _n38 >= 1 && (_n2h.houg += 1 * _n38);
                var _n3b = _n36[10];
                _n3b >= 1 && (_n2h.houm += 1 * _n3b);
            }
            var _n3c = _n2f.get_slotnums(129),
                _n3d = _n2f.get_slotnums(74),
                _n3e = _n2f.get_slotnums(412);
            return _n2w > 0 && _n3c > 0 && 1 == _n2w && (_n2h.houg += 2, _n2h.kaih += 3, _n2h.tyku += 2), _n2y > 0 && _n3e > 0 && 1 == _n2y && (_n2h.houg += 2, _n2h.kaih += 3, _n2h.tyku += 2), _n2x > 0 && _n3d > 0 && 1 == _n2x && (_n2h.houg += 3, _n2h.kaih -= 3), _n2h;
        };
    },
    23934: (_n3f, _n3g, _n3h) => {
        'use strict';
        var _n3i = null;
        defineModule(_n3g);
        Object.defineProperty(_n3g, '__esModule', {
            'value': true
        }), _n3g.getSlot271PersonalEffect = void 0;
        var _n3j = _n3h(74496);
        _n3g.getSlot271PersonalEffect = function(_n3k) {
            var _n3l = null,
                _n3m = new _n3j.SlotItemEffectModel(),
                _n3n = 0;
            if (508 != _n3k.ship_id && 509 != _n3k.ship_id && 888 != _n3k.ship_id && 883 != _n3k.ship_id || (_n3n = 1), 0 == _n3n) return _n3m;
            var _n3o = _n3k.get_each_level_nums(271),
                _n3p = 0,
                _n3q = 0,
                _n3r = 0,
                _n3s = _n3o[10];
            return _n3n > 0 && _n3o.forEach(function(_n3t, _n3u) {
                _n3u >= 4 && (_n3p += _n3t), _n3u >= 6 && (_n3q += _n3t), _n3u >= 8 && (_n3r += _n3t);
            }), 1 == _n3n && (_n3p >= 1 && (_n3m.houg += 1 * _n3p), _n3q >= 1 && (_n3m.tyku += 2 * _n3q), _n3r >= 1 && (_n3m.kaih += 2 * _n3r), _n3s >= 1 && (_n3m.houg += 1 * _n3s)), _n3m;
        };
    },
    17712: function(_n3v, _n3w, _n3x) {
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
        }), _n3w.getSlot275PersonalEffect = void 0;
        var _n42 = _n3x(74496),
            _n43 = _n3z(_n3x(18622));
        _n3w.getSlot275PersonalEffect = function(_n44) {
            var _n45 = null,
                _n46 = new _n42.SlotItemEffectModel(),
                _n47 = false,
                _n48 = new _n42.SlotItemEffectModel(),
                _n49 = 0,
                _n4a = 0;
            if (894 != _n44.ship_id && 899 != _n44.ship_id || (_n48.houg += 1, _n48.tyku += 3, _n48.kaih += 2, _n47 = true, _n4a = 1, _n49 = 1), 0 == _n47) return _n46;
            var _n4b = _n44.get_slotnums(275);
            _n46.add(_n48.multiply(_n4b));
            var _n4c = 0;
            if (_n49 > 0)
                for (var _n4d = 0, _n4e = _n44.have_slot_ids(); _n4d < _n4e.length; _n4d++) {
                    var _n4f = _n4e[_n4d],
                        _n4g = _n43.default.model.slot.getMst(_n4f),
                        _n4h = _n4g.equipType;
                    12 != _n4h && 13 != _n4h || (_n4g.sakuteki >= 5 && _n44.get_slotnums(parseInt(_n4f)), _n4g.taiku >= 2 && (_n4c += _n44.get_slotnums(parseInt(_n4f))));
                }
            if (1 == _n49 && _n4c > 0 && (_n46.tyku += 3, _n46.kaih += 3), 0 == _n4a) return _n46;
            var _n4i = _n44.get_each_level_nums(275),
                _n4j = 0,
                _n4k = _n4i[10];
            return _n4a > 0 && _n4i.forEach(function(_n4l, _n4m) {
                _n4m >= 7 && (_n4j += _n4l);
            }), 1 == _n4a && (_n4j > 0 && (_n46.tyku += 1 * _n4j, _n46.kaih += 1 * _n4j), _n4k > 0 && (_n46.houg += 1 * _n4k, _n46.tyku += 1 * _n4k, _n46.houm += 1 * _n4k)), _n46;
        };
    },
    93733: (_n4n, _n4o, _n4p) => {
        'use strict';
        var _n4q = null;
        defineModule(_n4o);
        Object.defineProperty(_n4o, '__esModule', {
            'value': true
        }), _n4o.getSlot277PersonalEffect = void 0;
        var _n4r = _n4p(74496);
        _n4o.getSlot277PersonalEffect = function(_n4s) {
            var _n4t = null,
                _n4u = new _n4r.SlotItemEffectModel(),
                _n4v = false,
                _n4w = new _n4r.SlotItemEffectModel();
            if ('アメリカ' != _n4s.getCountryName() && 67 != _n4s.ctype && 78 != _n4s.ctype && 82 != _n4s.ctype && 88 != _n4s.ctype && 108 != _n4s.ctype && 112 != _n4s.ctype || (_n4w.houg += 1, _n4w.kaih += 1, _n4v = true), 83 == _n4s.ctype && (_n4w.houg += 1, _n4w.kaih += 1, _n4w.tyku += 1, _n4v = true), 0 == _n4v) return _n4u;
            var _n4x = _n4s.get_slotnums(277);
            return _n4u.add(_n4w.multiply(_n4x)), _n4u;
        };
    },
    34718: (_n4y, _n4z, _n50) => {
        'use strict';
        var _n51 = null;
        defineModule(_n4z);
        Object.defineProperty(_n4z, '__esModule', {
            'value': true
        }), _n4z.getSlot278PersonalEffect = void 0;
        var _n52 = _n50(74496);
        _n4z.getSlot278PersonalEffect = function(_n53) {
            var _n54 = null,
                _n55 = new _n52.SlotItemEffectModel();
            return 'アメリカ' == _n53.getCountryName() ? (_n55.tyku += 1, _n55.kaih += 3, _n55.saku += 1) : 67 == _n53.ctype || 78 == _n53.ctype || 82 == _n53.ctype || 88 == _n53.ctype || 108 == _n53.ctype || 112 == _n53.ctype ? (_n55.tyku += 1, _n55.kaih += 2) : 96 == _n53.ctype && (_n55.tyku += 1, _n55.kaih += 1), _n55;
        };
    },
    69245: (_n56, _n57, _n58) => {
        'use strict';
        var _n59 = null;
        defineModule(_n57);
        Object.defineProperty(_n57, '__esModule', {
            'value': true
        }), _n57.getSlot279PersonalEffect = void 0;
        var _n5a = _n58(74496);
        _n57.getSlot279PersonalEffect = function(_n5b) {
            var _n5c = null,
                _n5d = new _n5a.SlotItemEffectModel();
            return 'アメリカ' == _n5b.getCountryName() ? (_n5d.houg += 2, _n5d.tyku += 2, _n5d.kaih += 3, _n5d.saku += 2) : 67 == _n5b.ctype || 78 == _n5b.ctype || 82 == _n5b.ctype || 88 == _n5b.ctype || 108 == _n5b.ctype || 112 == _n5b.ctype ? (_n5d.houg += 1, _n5d.tyku += 1, _n5d.kaih += 2, _n5d.saku += 1) : 96 == _n5b.ctype && (_n5d.houg += 1, _n5d.tyku += 1, _n5d.kaih += 1), _n5d;
        };
    },
    18478: (_n5e, _n5f, _n5g) => {
        'use strict';
        var _n5h = null;
        defineModule(_n5f);
        Object.defineProperty(_n5f, '__esModule', {
            'value': true
        }), _n5f.getSlot282PersonalEffect = void 0;
        var _n5i = _n5g(74496);
        _n5f.getSlot282PersonalEffect = function(_n5j) {
            var _n5k = null,
                _n5l = new _n5i.SlotItemEffectModel(),
                _n5m = false,
                _n5n = false;
            147 != _n5j.ship_id && 73 != _n5j.ctype && 81 != _n5j.ctype || (_n5m = true), 'ゆうばり' == _n5j.yomi && (_n5n = true);
            var _n5o = new _n5i.SlotItemEffectModel();
            if ((_n5m || _n5n) && (_n5o.houg += 2, _n5o.souk += 1), !_n5o.exists()) return _n5l;
            var _n5p = _n5j.get_slotnums(282);
            return _n5l = _n5o.multiply(_n5p);
        };
    },
    2899: (_n5q, _n5r, _n5s) => {
        'use strict';
        var _n5t = null;
        defineModule(_n5r);
        Object.defineProperty(_n5r, '__esModule', {
            'value': true
        }), _n5r.getSlot283PersonalEffect = void 0;
        var _n5u = _n5s(74496);
        _n5r.getSlot283PersonalEffect = function(_n5v) {
            var _n5w = null,
                _n5x = new _n5u.SlotItemEffectModel(),
                _n5y = false;
            147 != _n5v.ship_id && 73 != _n5v.ctype && 81 != _n5v.ctype || (_n5y = true);
            var _n5z = new _n5u.SlotItemEffectModel();
            if (_n5y && (_n5z.raig += 3, _n5z.houg += 1, _n5z.souk += 1), !_n5z.exists()) return _n5x;
            var _n60 = _n5v.get_slotnums(283);
            return _n5x = _n5z.multiply(_n60);
        };
    },
    57120: (_n61, _n62, _n63) => {
        'use strict';
        var _n64 = null;
        defineModule(_n62);
        Object.defineProperty(_n62, '__esModule', {
            'value': true
        }), _n62.getSlot285PersonalEffect = void 0;
        var _n65 = _n63(74496);
        _n62.getSlot285PersonalEffect = function(_n66) {
            var _n67 = null,
                _n68 = new _n65.SlotItemEffectModel(),
                _n69 = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_n66.ship_id) >= 0 && (_n69 = true), 0 == _n69) return _n68;
            var _n6a = _n66.get_each_level_nums(285),
                _n6b = _n66.get_slotnums(285);
            _n6b > 2 && (_n6b = 2), _n68.raig = 2 * _n6b, _n68.kaih = 1 * _n6b;
            var _n6c = _n6a[10];
            1 == _n6c && (_n68.houg += 1, _n68.raig += 1), _n6c >= 2 && (_n68.houg += 2, _n68.raig += 1), _n6c >= 3 && (_n68.raig += 3);
            var _n6d = _n66.get_slotnums(285);
            return 903 == _n66.ship_id ? (_n6d >= 2 && (_n68.raig += 2), _n6d >= 3 && (_n68.raig += 2)) : 908 != _n66.ship_id && 959 != _n66.ship_id || (_n6d >= 2 && (_n68.raig += 1), _n6d >= 3 && (_n68.raig += 1)), _n68;
        };
    },
    74985: function(_n6e, _n6f, _n6g) {
        'use strict';
        var _n6h = null;
        var _n6i = this && this.__importDefault || function(_n6j) {
            var _n6k = null;
            return _n6j && _n6j.__esModule ? _n6j : {
                'default': _n6j
            };
        };
        defineModule(_n6f);
        Object.defineProperty(_n6f, '__esModule', {
            'value': true
        }), _n6f.getSlot286PersonalEffect3 = _n6f.getSlot286PersonalEffect2 = _n6f.getSlot286PersonalEffect = void 0;
        var _n6l = _n6g(74496),
            _n6m = _n6i(_n6g(18622));
        _n6f.getSlot286PersonalEffect = function(_n6n) {
            var _n6o = null,
                _n6p = new _n6l.SlotItemEffectModel(),
                _n6q = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975].indexOf(_n6n.ship_id) >= 0 && (_n6q = true), 0 == _n6q) return _n6p;
            var _n6r = _n6n.get_each_level_nums(286),
                _n6s = _n6n.get_slotnums(286);
            _n6s > 2 && (_n6s = 2), _n6p.raig = 2 * _n6s, _n6p.kaih = 1 * _n6s;
            var _n6t = _n6r[10];
            if (1 == _n6t ? _n6p.houg = _n6p.houg + 1 : _n6t >= 2 && (_n6p.houg = _n6p.houg + 2), 30 == _n6n.ctype || 961 == _n6n.ship_id) {
                var _n6u = _n6r[5] + _n6r[6] + _n6r[7] + _n6r[8] + _n6r[9] + _n6r[10];
                1 == _n6u ? _n6p.raig = _n6p.raig + 1 : _n6u >= 2 && (_n6p.raig = _n6p.raig + 2);
            }
            return _n6p;
        }, _n6f.getSlot286PersonalEffect2 = function(_n6v) {
            var _n6w = null,
                _n6x = new _n6l.SlotItemEffectModel(),
                _n6y = false,
                _n6z = 0;
            if ('たけ' == _n6v.yomi && (_n6y = true, _n6z = 1), 0 == _n6y) return _n6x;
            var _n70 = _n6v.get_each_level_nums(286),
                _n71 = 0;
            return _n6z > 0 && _n70.forEach(function(_n72, _n73) {
                _n73 >= 7 && (_n71 += _n72);
            }), 'たけ' == _n6v.yomi && (_n6x.raig += 7, _n6x.kaih += 2, _n71 >= 1 && (_n6x.raig += 2), _n70[10] >= 1 && (_n6x.raig += 2)), _n6x;
        }, _n6f.getSlot286PersonalEffect3 = function(_n74) {
            var _n75 = null,
                _n76 = new _n6l.SlotItemEffectModel(),
                _n77 = false,
                _n78 = new _n6l.SlotItemEffectModel(),
                _n79 = 0;
            if (662 != _n74.ship_id && 663 != _n74.ship_id && 668 != _n74.ship_id || (_n78.raig += 2, _n77 = true, _n79 = 1), 0 == _n77) return _n76;
            var _n7a = _n74.get_slotnums(286);
            _n76.add(_n78.multiply(_n7a));
            for (var _n7b = 0, _n7c = 0, _n7d = _n74.have_slot_ids(); _n7c < _n7d.length; _n7c++) {
                var _n7e = _n7d[_n7c],
                    _n7f = _n6m.default.model.slot.getMst(_n7e),
                    _n7g = _n7f.equipType;
                12 != _n7g && 13 != _n7g || (_n7f.sakuteki >= 5 && (_n7b += _n74.get_slotnums(parseInt(_n7e))), _n7f.taiku >= 2 && _n74.get_slotnums(parseInt(_n7e)));
            }
            return _n7b >= 1 && 1 == _n79 && (_n76.raig += 3, _n76.kaih += 2), _n76;
        };
    },
    9234: (_n7h, _n7i, _n7j) => {
        'use strict';
        var _n7k = null;
        defineModule(_n7i);
        Object.defineProperty(_n7i, '__esModule', {
            'value': true
        }), _n7i.getSlot287PersonalEffect = void 0;
        var _n7l = _n7j(74496);
        _n7i.getSlot287PersonalEffect = function(_n7m) {
            var _n7n = null,
                _n7o = new _n7l.SlotItemEffectModel(),
                _n7p = new _n7l.SlotItemEffectModel(),
                _n7q = false;
            if (488 == _n7m.ship_id || 141 == _n7m.ship_id || 160 == _n7m.ship_id || 624 == _n7m.ship_id || 656 == _n7m.ship_id ? (_n7p.tais = 1, _n7p.kaih = 1, _n7q = true) : 662 != _n7m.ship_id && 961 != _n7m.ship_id || (_n7p.tais = 3, _n7q = true), 0 == _n7q) return _n7o;
            var _n7r = _n7m.get_slotnums(287);
            return _n7o = _n7p.multiply(_n7r);
        };
    },
    30802: (_n7s, _n7t, _n7u) => {
        'use strict';
        var _n7v = null;
        defineModule(_n7t);
        Object.defineProperty(_n7t, '__esModule', {
            'value': true
        }), _n7t.getSlot288PersonalEffect = void 0;
        var _n7w = _n7u(74496);
        _n7t.getSlot288PersonalEffect = function(_n7x) {
            var _n7y = null,
                _n7z = new _n7w.SlotItemEffectModel(),
                _n80 = new _n7w.SlotItemEffectModel(),
                _n81 = false;
            if (488 == _n7x.ship_id || 141 == _n7x.ship_id || 160 == _n7x.ship_id || 656 == _n7x.ship_id ? (_n80.tais = 2, _n80.kaih = 1, _n81 = true) : 624 == _n7x.ship_id ? (_n80.houg = 1, _n80.tais = 3, _n80.kaih = 2, _n81 = true) : 662 != _n7x.ship_id && 961 != _n7x.ship_id || (_n80.tais = 4, _n80.kaih = 1, _n81 = true), 0 == _n81) return _n7z;
            var _n82 = _n7x.get_slotnums(288);
            return _n7z = _n80.multiply(_n82);
        };
    },
    97002: function(_n83, _n84, _n85) {
        'use strict';
        var _n86 = null;
        var _n87 = this && this.__importDefault || function(_n88) {
            var _n89 = null;
            return _n88 && _n88.__esModule ? _n88 : {
                'default': _n88
            };
        };
        defineModule(_n84);
        Object.defineProperty(_n84, '__esModule', {
            'value': true
        }), _n84.getSlot289PersonalEffect = void 0;
        var _n8a = _n85(74496),
            _n8b = _n87(_n85(18622));
        _n84.getSlot289PersonalEffect = function(_n8c) {
            var _n8d = null,
                _n8e = new _n8a.SlotItemEffectModel(),
                _n8f = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n8g = 0,
                _n8h = new _n8a.SlotItemEffectModel();
            if (149 == _n8c.ship_id || 591 == _n8c.ship_id) _n8h.houg = 2, _n8h.tyku = 1, _n8g = 1;
            else {
                if (150 == _n8c.ship_id || 592 == _n8c.ship_id) _n8h.houg = 1;
                else {
                    if (152 == _n8c.ship_id) _n8h.houg = 1;
                    else {
                        if (151 != _n8c.ship_id && 593 != _n8c.ship_id && 954 != _n8c.ship_id) return _n8e;
                        _n8h.houg = 2, _n8h.tyku = 2, _n8h.kaih = 2, _n8g = 1;
                    }
                }
            }
            var _n8i = _n8c.get_slotnums(289);
            if (_n8e = _n8h.multiply(_n8i), _n8f[_n8c.ship_id]) {
                var _n8j = _n8c.get_each_level_nums(289),
                    _n8k = new Array();
                _n8j.forEach(function(_n8l, _n8m) {
                    var _n8n = null;
                    for (var _n8o = 1; _n8o <= _n8c.SLOT_LEVEL_MAX; _n8o++) _n8m >= _n8o && (null == _n8k[_n8o] && (_n8k[_n8o] = 0), _n8k[_n8o] += _n8l);
                });
                var _n8p = _n8f[_n8c.ship_id];
                1 == _n8p ? (_n8k[1] >= 1 && (_n8e.kaih += 1 * _n8k[1]), _n8k[3] >= 1 && (_n8e.tyku = _n8e.tyku + 1 * _n8k[3]), _n8k[5] >= 1 && (_n8e.houg = _n8e.houg + 1 * _n8k[5]), _n8k[7] >= 1 && (_n8e.kaih += 1 * _n8k[7]), _n8k[8] >= 1 && (_n8e.tyku += 1 * _n8k[8]), _n8k[9] >= 1 && (_n8e.houg += 1 * _n8k[9]), _n8k[10] >= 1 && (_n8e.kaih += 1 * _n8k[10])) : 2 == _n8p ? (_n8k[4] >= 1 && (_n8e.tyku += 1 * _n8k[4]), _n8k[6] >= 1 && (_n8e.kaih += 1 * _n8k[6]), _n8k[8] >= 1 && (_n8e.houg += 1 * _n8k[8]), _n8k[10] >= 1 && (_n8e.kaih += 1 * _n8k[10])) : 3 == _n8p && (_n8k[7] >= 1 && (_n8e.tyku += 1 * _n8k[7]), _n8k[9] >= 1 && (_n8e.houg += 1 * _n8k[9]), _n8k[10] >= 1 && (_n8e.kaih += 1 * _n8k[10]));
            }
            if (0 == _n8g) return _n8e;
            for (var _n8q = 0, _n8r = 0, _n8s = _n8c.have_slot_ids(); _n8r < _n8s.length; _n8r++) {
                var _n8t = _n8s[_n8r],
                    _n8u = _n8b.default.model.slot.getMst(_n8t),
                    _n8v = _n8u.equipType;
                (12 == _n8v || 13 == _n8v) && _n8u.sakuteki >= 5 && (_n8q += _n8c.get_slotnums(parseInt(_n8t)));
            }
            return _n8q > 0 && (_n8e.houg += 2, _n8e.kaih += 2), _n8e;
        };
    },
    16748: function(_n8w, _n8x, _n8y) {
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
        }), _n8x.getSlot290PersonalEffect = void 0;
        var _n93 = _n8y(74496),
            _n94 = _n90(_n8y(18622));
        _n8x.getSlot290PersonalEffect = function(_n95) {
            var _n96 = null,
                _n97 = new _n93.SlotItemEffectModel(),
                _n98 = 0,
                _n99 = new _n93.SlotItemEffectModel();
            if (411 == _n95.ship_id) _n99.houg = 1;
            else {
                if (412 == _n95.ship_id) _n99.houg = 1;
                else {
                    if (82 == _n95.ship_id) _n99.houg = 2, _n99.tyku = 2, _n99.kaih = 1, _n98 = 1;
                    else {
                        if (553 == _n95.ship_id) _n99.houg = 3, _n99.tyku = 2, _n99.kaih = 1, _n99.houm = 3, _n98 = 1;
                        else {
                            if (88 == _n95.ship_id) _n99.houg = 2, _n99.tyku = 2, _n99.kaih = 1, _n98 = 1;
                            else {
                                if (554 != _n95.ship_id) return _n97;
                                _n99.houg = 3, _n99.tyku = 2, _n99.kaih = 2, _n99.houm = 3, _n98 = 1;
                            }
                        }
                    }
                }
            }
            var _n9a = _n95.get_slotnums(290);
            if (_n97 = _n99.multiply(_n9a), 0 == _n98) return _n97;
            for (var _n9b = 0, _n9c = 0, _n9d = _n95.have_slot_ids(); _n9c < _n9d.length; _n9c++) {
                var _n9e = _n9d[_n9c],
                    _n9f = _n94.default.model.slot.getMst(_n9e),
                    _n9g = _n9f.equipType;
                (12 == _n9g || 13 == _n9g) && _n9f.taiku >= 2 && (_n9b += _n95.get_slotnums(parseInt(_n9e)));
            }
            return _n9b > 0 && (_n97.tyku += 2, _n97.kaih += 3), _n97;
        };
    },
    53618: (_n9h, _n9i, _n9j) => {
        'use strict';
        var _n9k = null;
        defineModule(_n9i);
        Object.defineProperty(_n9i, '__esModule', {
            'value': true
        }), _n9i.getSlot291PersonalEffect = void 0;
        var _n9l = _n9j(74496);
        _n9i.getSlot291PersonalEffect = function(_n9m) {
            var _n9n = null,
                _n9o = new _n9l.SlotItemEffectModel(),
                _n9p = new _n9l.SlotItemEffectModel();
            if (553 == _n9m.ship_id) _n9p.houg = 6, _n9p.kaih = 1;
            else {
                if (554 != _n9m.ship_id) return _n9o;
                _n9p.houg = 6, _n9p.kaih = 1;
            }
            var _n9q = _n9m.get_slotnums(291);
            return _n9o = _n9p.multiply(_n9q);
        };
    },
    72573: (_n9r, _n9s, _n9t) => {
        'use strict';
        var _n9u = null;
        defineModule(_n9s);
        Object.defineProperty(_n9s, '__esModule', {
            'value': true
        }), _n9s.getSlot292PersonalEffect = void 0;
        var _n9v = _n9t(74496);
        _n9s.getSlot292PersonalEffect = function(_n9w) {
            var _n9x = null,
                _n9y = new _n9v.SlotItemEffectModel(),
                _n9z = new _n9v.SlotItemEffectModel();
            if (553 == _n9w.ship_id) _n9z.houg = 8, _n9z.kaih = 2, _n9z.tyku = 1;
            else {
                if (554 != _n9w.ship_id) return _n9y;
                _n9z.houg = 8, _n9z.kaih = 2, _n9z.tyku = 1;
            }
            var _na0 = _n9w.get_slotnums(292);
            return _n9y = _n9z.multiply(_na0);
        };
    },
    8955: function(_na1, _na2, _na3) {
        'use strict';
        var _na4 = null;
        var _na5 = this && this.__importDefault || function(_na6) {
            var _na7 = null;
            return _na6 && _na6.__esModule ? _na6 : {
                'default': _na6
            };
        };
        defineModule(_na2);
        Object.defineProperty(_na2, '__esModule', {
            'value': true
        }), _na2.getSlot293PersonalEffect = void 0;
        var _na8 = _na3(74496),
            _na9 = _na5(_na3(18622));
        _na2.getSlot293PersonalEffect = function(_naa) {
            var _nab = null,
                _nac = new _na8.SlotItemEffectModel(),
                _nad = new _na8.SlotItemEffectModel(),
                _nae = 0;
            if (66 == _naa.ctype || 28 == _naa.ctype) _nad.houg = 2, _nad.tyku = 1, _nad.kaih = 3, _nae = 1;
            else {
                if (74 != _naa.ctype && 77 != _naa.ctype) return _nac;
                _nad.houg = 1, _nad.tyku = 1, _nad.kaih = 2, _nae = 2;
            }
            var _naf = _naa.get_slotnums(293);
            _nac = _nad.multiply(_naf);
            for (var _nag = 0, _nah = 0, _nai = _naa.have_slot_ids(); _nah < _nai.length; _nah++) {
                var _naj = _nai[_nah],
                    _nak = _na9.default.model.slot.getMst(_naj),
                    _nal = _nak.equipType;
                (12 == _nal || 13 == _nal) && _nak.sakuteki >= 5 && (_nag += _naa.get_slotnums(parseInt(_naj)));
            }
            var _nam = _naa.get_slotnums(174);
            return 1 == _nae ? (_nag > 0 && (_nac.houg += 2, _nac.kaih += 3, _nac.raig += 1), 1 == _nam ? (_nac.houg += 2, _nac.raig += 4) : _nam >= 2 && (_nac.houg += 3, _nac.raig += 7)) : 2 == _nae && _nag > 0 && (_nac.houg += 2, _nac.kaih += 3, _nac.tais += 1), _nac;
        };
    },
    98947: function(_nan, _nao, _nap) {
        'use strict';
        var _naq = null;
        var _nar = this && this.__importDefault || function(_nas) {
            var _nat = null;
            return _nas && _nas.__esModule ? _nas : {
                'default': _nas
            };
        };
        defineModule(_nao);
        Object.defineProperty(_nao, '__esModule', {
            'value': true
        }), _nao.getSlot294PersonalEffect = void 0;
        var _nau = _nap(74496),
            _nav = _nar(_nap(18622));
        _nao.getSlot294PersonalEffect = function(_naw) {
            var _nax = null,
                _nay = new _nau.SlotItemEffectModel(),
                _naz = new _nau.SlotItemEffectModel(),
                _nb0 = 0,
                _nb1 = _naw.get_slotnums(294);
            if (12 != _naw.ctype && 1 != _naw.ctype && 5 != _naw.ctype) return _nay;
            _naz.houg = 1, 959 == _naw.ship_id && (_naz.houg += 1, _nb1 >= 2 && (_nay.houg += 2), _nb1 >= 3 && (_nay.houg += 3), _nb0 = 1), _nay.add(_naz.multiply(_nb1));
            for (var _nb2 = 0, _nb3 = 0, _nb4 = _naw.have_slot_ids(); _nb3 < _nb4.length; _nb3++) {
                var _nb5 = _nb4[_nb3],
                    _nb6 = _nav.default.model.slot.getMst(_nb5),
                    _nb7 = _nb6.equipType;
                (12 == _nb7 || 13 == _nb7) && _nb6.sakuteki >= 5 && (_nb2 += _naw.get_slotnums(parseInt(_nb5)));
            }
            var _nb8 = _naw.get_slotnums(13),
                _nb9 = _naw.get_slotnums(125),
                _nba = _naw.get_slotnums(285),
                _nbb = _nb8 + _nb9 + _nba;
            if (_nb2 > 0 && (_nay.houg += 3, _nay.kaih += 2, _nay.raig += 1), 1 == _nbb ? (_nay.houg += 1, _nay.raig += 3) : _nbb >= 2 && (_nay.houg += 2, _nay.raig += 5), _nba >= 1 && (_nay.raig += 1), 0 == _nb0) return _nay;
            var _nbc = _naw.get_each_level_nums(294),
                _nbd = [];
            return _nb0 > 0 && _nbc.forEach(function(_nbe, _nbf) {
                var _nbg = null;
                for (var _nbh = 1; _nbh <= _naw.SLOT_LEVEL_MAX; _nbh++) null == _nbd[_nbh] && (_nbd[_nbh] = 0), _nbf >= _nbh && (_nbd[_nbh] += _nbe);
            }), 1 == _nb0 && (_nbd[6] >= 1 && (_nay.houm += 4 * _nbd[6]), _nbd[7] >= 1 && (_nay.houg = _nay.houg + 6 * _nbd[7]), _nbd[8] >= 1 && (_nay.houg = _nay.houg + 1 * _nbd[8]), _nbd[9] >= 1 && (_nay.houg = _nay.houg + 1 * _nbd[9]), _nbd[10] >= 1 && (_nay.houg += 1 * _nbd[10])), _nay;
        };
    },
    44726: function(_nbi, _nbj, _nbk) {
        'use strict';
        var _nbl = null;
        var _nbm = this && this.__importDefault || function(_nbn) {
            var _nbo = null;
            return _nbn && _nbn.__esModule ? _nbn : {
                'default': _nbn
            };
        };
        defineModule(_nbj);
        Object.defineProperty(_nbj, '__esModule', {
            'value': true
        }), _nbj.getSlot295PersonalEffect = void 0;
        var _nbp = _nbk(74496),
            _nbq = _nbm(_nbk(18622));
        _nbj.getSlot295PersonalEffect = function(_nbr) {
            var _nbs = null,
                _nbt = new _nbp.SlotItemEffectModel(),
                _nbu = new _nbp.SlotItemEffectModel(),
                _nbv = _nbr.get_slotnums(295);
            if (12 != _nbr.ctype && 1 != _nbr.ctype && 5 != _nbr.ctype) return _nbt;
            _nbu.houg = 2, _nbu.tyku = 2, 666 == _nbr.ship_id ? (_nbu.houg += 1, _nbu.tyku += 1, _nbu.tais += 1) : 959 == _nbr.ship_id && (_nbu.houg += 2, _nbv >= 2 && (_nbt.houg += 2), _nbv >= 3 && (_nbt.houg += 3)), _nbt.add(_nbu.multiply(_nbv));
            for (var _nbw = 0, _nbx = 0, _nby = 0, _nbz = _nbr.have_slot_ids(); _nby < _nbz.length; _nby++) {
                var _nc0 = _nbz[_nby],
                    _nc1 = _nbq.default.model.slot.getMst(_nc0),
                    _nc2 = _nc1.equipType;
                12 != _nc2 && 13 != _nc2 || (_nc1.sakuteki >= 5 && (_nbw += _nbr.get_slotnums(parseInt(_nc0))), _nc1.taiku >= 2 && (_nbx += _nbr.get_slotnums(parseInt(_nc0))));
            }
            var _nc3 = _nbr.get_slotnums(13),
                _nc4 = _nbr.get_slotnums(125),
                _nc5 = _nbr.get_slotnums(285),
                _nc6 = _nc3 + _nc4 + _nc5;
            return _nbw > 0 && (_nbt.houg += 3, _nbt.kaih += 2, _nbt.raig += 1), 1 == _nc6 ? (_nbt.houg += 1, _nbt.raig += 3) : _nc6 >= 2 && (_nbt.houg += 2, _nbt.raig += 5), _nc5 >= 1 && (_nbt.raig += 1), _nbx > 0 && (_nbt.tyku += 6), _nbt;
        };
    },
    93065: function(_nc7, _nc8, _nc9) {
        'use strict';
        var _nca = null;
        var _ncb = this && this.__importDefault || function(_ncc) {
            var _ncd = null;
            return _ncc && _ncc.__esModule ? _ncc : {
                'default': _ncc
            };
        };
        defineModule(_nc8);
        Object.defineProperty(_nc8, '__esModule', {
            'value': true
        }), _nc8.getSlot296PersonalEffect = void 0;
        var _nce = _nc9(74496),
            _ncf = _ncb(_nc9(18622));
        _nc8.getSlot296PersonalEffect = function(_ncg) {
            var _nch = null,
                _nci = new _nce.SlotItemEffectModel(),
                _ncj = new _nce.SlotItemEffectModel();
            1 != _ncg.ctype && 5 != _ncg.ctype && 10 != _ncg.ctype && 23 != _ncg.ctype || (_ncj.houg += 1), 10 != _ncg.ctype && 23 != _ncg.ctype || (_ncj.kaih += 1), 145 == _ncg.ship_id || 961 == _ncg.ship_id ? (_ncj.houg += 1, _ncj.tyku += 1) : 144 == _ncg.ship_id ? (_ncj.houg += 1, _ncj.raig += 1) : 469 == _ncg.ship_id || 588 == _ncg.ship_id || 667 == _ncg.ship_id || 587 == _ncg.ship_id || 242 == _ncg.ship_id ? _ncj.kaih += 1 : 497 == _ncg.ship_id ? (_ncj.houg += 1, _ncj.kaih += 1) : 244 == _ncg.ship_id ? _ncj.kaih += 1 : 498 == _ncg.ship_id || 975 == _ncg.ship_id ? (_ncj.tyku += 1, _ncj.kaih += 1) : 627 == _ncg.ship_id ? (_ncj.houg += 2, _ncj.raig += 1) : 903 != _ncg.ship_id && 908 != _ncg.ship_id || (_ncj.houg += 3);
            var _nck = true;
            if (_ncj.exists() || (_nck = false), 0 == _nck) return _nci;
            var _ncl = _ncg.get_slotnums(296);
            _nci = _ncj.multiply(_ncl);
            var _ncm = 0;
            if (1 != _ncg.ctype && 5 != _ncg.ctype && 10 != _ncg.ctype || (_ncm = 1), 23 == _ncg.ctype && (_ncm = 2), 0 == _ncm) return _nci;
            for (var _ncn = 0, _nco = 0, _ncp = 0, _ncq = _ncg.have_slot_ids(); _ncp < _ncq.length; _ncp++) {
                var _ncr = _ncq[_ncp],
                    _ncs = _ncf.default.model.slot.getMst(_ncr),
                    _nct = _ncs.equipType;
                12 != _nct && 13 != _nct || (_ncs.sakuteki >= 5 && (_ncn += _ncg.get_slotnums(parseInt(_ncr))), _ncs.taiku >= 2 && (_nco += _ncg.get_slotnums(parseInt(_ncr))));
            }
            return _ncn > 0 && (1 == _ncm ? (_nci.houg += 1, _nci.kaih += 2, _nci.raig += 2) : 2 == _ncm && (_nci.houg += 1, _nci.kaih += 2, _nci.raig += 3)), _ncg.get_slotnums(285) + _ncg.get_slotnums(125) >= 1 && 1 == _ncm && (_nci.houg += 1, _nci.raig += 3), _ncg.get_slotnums(15) + _ncg.get_slotnums(286) >= 1 && 2 == _ncm && (_nci.houg += 1, _nci.raig += 3), _nco > 0 && (1 == _ncm ? _nci.tyku += 5 : 2 == _ncm && (_nci.tyku += 6)), _nci;
        };
    },
    85767: (_ncu, _ncv, _ncw) => {
        'use strict';
        var _ncx = null;
        defineModule(_ncv);
        Object.defineProperty(_ncv, '__esModule', {
            'value': true
        }), _ncv.getSlot297PersonalEffect = void 0;
        var _ncy = _ncw(74496);
        _ncv.getSlot297PersonalEffect = function(_ncz) {
            var _nd0 = null,
                _nd1 = new _ncy.SlotItemEffectModel(),
                _nd2 = new _ncy.SlotItemEffectModel();
            if (12 == _ncz.ctype) _nd2.kaih = 2;
            else {
                if (1 != _ncz.ctype && 5 != _ncz.ctype) return _nd1;
                _nd2.kaih = 1;
            }
            var _nd3 = _ncz.get_slotnums(297);
            return _nd1 = _nd2.multiply(_nd3);
        };
    },
    38314: (_nd4, _nd5, _nd6) => {
        'use strict';
        var _nd7 = null;
        defineModule(_nd5);
        Object.defineProperty(_nd5, '__esModule', {
            'value': true
        }), _nd5.getSlot301PersonalEffect = void 0;
        var _nd8 = _nd6(74496);
        _nd5.getSlot301PersonalEffect = function(_nd9) {
            var _nda = null,
                _ndb = new _nd8.SlotItemEffectModel(),
                _ndc = new _nd8.SlotItemEffectModel();
            67 != _nd9.ctype && 78 != _nd9.ctype && 82 != _nd9.ctype && 88 != _nd9.ctype && 108 != _nd9.ctype && 112 != _nd9.ctype || (_ndc.tyku += 2, _ndc.kaih += 1, _ndc.souk += 1);
            var _ndd = true;
            if (_ndc.exists() || (_ndd = false), 0 == _ndd) return _ndb;
            var _nde = _nd9.get_slotnums(301);
            return _ndb = _ndc.multiply(_nde);
        };
    },
    59747: (_ndf, _ndg, _ndh) => {
        'use strict';
        var _ndi = null;
        defineModule(_ndg);
        Object.defineProperty(_ndg, '__esModule', {
            'value': true
        }), _ndg.getSlot302PersonalEffect = void 0;
        var _ndj = _ndh(74496);
        _ndg.getSlot302PersonalEffect = function(_ndk) {
            var _ndl = null,
                _ndm = new _ndj.SlotItemEffectModel(),
                _ndn = new _ndj.SlotItemEffectModel();
            if (76 == _ndk.ctype && (_ndn.tais = 1, _ndn.kaih = 1), !_ndn.exists()) return _ndm;
            var _ndo = _ndk.get_slotnums(302);
            return _ndm = _ndn.multiply(_ndo);
        };
    },
    40649: (_ndp, _ndq, _ndr) => {
        'use strict';
        var _nds = null;
        defineModule(_ndq);
        Object.defineProperty(_ndq, '__esModule', {
            'value': true
        }), _ndq.getSlot303PersonalEffect = void 0;
        var _ndt = _ndr(74496);
        _ndq.getSlot303PersonalEffect = function(_ndu) {
            var _ndv = null,
                _ndw = new _ndt.SlotItemEffectModel(),
                _ndx = new _ndt.SlotItemEffectModel();
            if (16 == _ndu.ctype || 4 == _ndu.ctype || 20 == _ndu.ctype || 41 == _ndu.ctype ? (_ndx.houg = 1, _ndx.tyku = 1) : 89 == _ndu.ctype && (_ndx.houg = 1, _ndx.tyku = 2, _ndx.kaih = 1), !_ndx.exists()) return _ndw;
            var _ndy = _ndu.get_slotnums(303);
            return _ndw = _ndx.multiply(_ndy);
        };
    },
    13533: (_ndz, _ne0, _ne1) => {
        'use strict';
        var _ne2 = null;
        defineModule(_ne0);
        Object.defineProperty(_ne0, '__esModule', {
            'value': true
        }), _ne0.getSlot304PersonalEffect = void 0;
        var _ne3 = _ne1(74496);
        _ne0.getSlot304PersonalEffect = function(_ne4) {
            var _ne5 = null,
                _ne6 = new _ne3.SlotItemEffectModel(),
                _ne7 = new _ne3.SlotItemEffectModel();
            if (16 == _ne4.ctype || 4 == _ne4.ctype || 20 == _ne4.ctype || 41 == _ne4.ctype ? (_ne7.houg = 1, _ne7.tais = 1, _ne7.kaih = 1) : 89 == _ne4.ctype && (_ne7.houg = 1, _ne7.tais = 2, _ne7.kaih = 2), !_ne7.exists()) return _ne6;
            var _ne8 = _ne4.get_slotnums(304);
            return _ne6 = _ne7.multiply(_ne8);
        };
    },
    99791: (_ne9, _nea, _neb) => {
        'use strict';
        var _nec = null;
        defineModule(_nea);
        Object.defineProperty(_nea, '__esModule', {
            'value': true
        }), _nea.getSlot305More320mmGunPersonalEffect = void 0;
        var _ned = _neb(74496);
        _nea.getSlot305More320mmGunPersonalEffect = function(_nee) {
            var _nef = null,
                _neg = new _ned.SlotItemEffectModel(),
                _neh = _nee.get_slotnums(426),
                _nei = _nee.get_slotnums(427),
                _nej = _nee.get_slotnums(428),
                _nek = _nee.get_slotnums(429),
                _nel = _neh + _nei + _nej + _nek;
            return 113 == _nee.ctype ? (_neg.houg = _neg.houg + 2 * _nel, _neh >= 1 && (_neg.houg = _neg.houg + 1 * _neh, _neg.kaih = _neg.kaih + 1 * _neh, (_neh >= 2 || _nei >= 1) && (_neg.houg = _neg.houg + 1, _neg.kaih = _neg.kaih + 1)), _nej >= 1 && (_neg.houg = _neg.houg + 1 * _nej, _neg.kaih = _neg.kaih + 1 * _nej, (_nej >= 2 || _nek >= 1) && (_neg.houg = _neg.houg + 2, _neg.kaih = _neg.kaih + 1))) : 73 == _nee.ctype ? (_neg.houg = _neg.houg + 1 * _nel, _neh >= 1 && (_neg.houg = _neg.houg + 1 * _neh, _neg.kaih = _neg.kaih + 1 * _neh, (_neh >= 2 || _nei >= 1) && (_neg.houg = _neg.houg + 1)), _nej >= 1 && (_neg.houg = _neg.houg + 1 * _nej, _neg.kaih = _neg.kaih + 1 * _nej, (_nej >= 2 || _nek >= 1) && (_neg.houg = _neg.houg + 1))) : 58 == _nee.ctype && _nej >= 1 && (_neg.houg = _neg.houg + 1 * _nej, _neg.kaih = _neg.kaih + 2 * _nej, (_nej >= 2 || _nek >= 1) && (_neg.houg = _neg.houg + 2, _neg.kaih = _neg.kaih + 1)), _neg;
        };
    },
    12138: (_nem, _nen, _neo) => {
        'use strict';
        var _nep = null;
        defineModule(_nen);
        Object.defineProperty(_nen, '__esModule', {
            'value': true
        }), _nen.getSlot305_And_306_PersonalEffect = void 0;
        var _neq = _neo(74496);
        _nen.getSlot305_And_306_PersonalEffect = function(_ner) {
            var _nes = null,
                _net = new _neq.SlotItemEffectModel(),
                _neu = new _neq.SlotItemEffectModel();
            if (76 == _ner.ctype && (_neu.tais = 1, _neu.kaih = 1), 'しんよう' == _ner.yomi ? (_neu.tais += 2, _neu.kaih += 1) : 'グラーフ・ツェッペリン' != _ner.yomi && 'アクィラ' != _ner.yomi || (_neu.houg = 1, _neu.kaih = 1), !_neu.exists()) return _net;
            var _nev = _ner.get_slotnums(305) + _ner.get_slotnums(306);
            return _net = _neu.multiply(_nev);
        };
    },
    30042: (_new, _nex, _ney) => {
        'use strict';
        var _nez = null;
        defineModule(_nex);
        Object.defineProperty(_nex, '__esModule', {
            'value': true
        }), _nex.getSlot307PersonalEffect = void 0;
        var _nf0 = _ney(74496);
        _nex.getSlot307PersonalEffect = function(_nf1) {
            var _nf2 = null,
                _nf3 = new _nf0.SlotItemEffectModel(),
                _nf4 = new _nf0.SlotItemEffectModel();
            if ('アメリカ' == _nf1.getCountryName() && (_nf4.houg = 1, _nf4.tyku = 1, _nf4.kaih = 1), !_nf4.exists()) return _nf3;
            var _nf5 = _nf1.get_slotnums(307);
            return _nf3 = _nf4.multiply(_nf5);
        };
    },
    33623: (_nf6, _nf7, _nf8) => {
        'use strict';
        var _nf9 = null;
        defineModule(_nf7);
        Object.defineProperty(_nf7, '__esModule', {
            'value': true
        }), _nf7.getSlot308PersonalEffect = void 0;
        var _nfa = _nf8(74496);
        _nf7.getSlot308PersonalEffect = function(_nfb) {
            var _nfc = null,
                _nfd = new _nfa.SlotItemEffectModel(),
                _nfe = new _nfa.SlotItemEffectModel();
            if ('アメリカ' == _nfb.getCountryName() && (_nfe.houg = 1, _nfe.tyku = 1, _nfe.kaih = 1), 2 == _nfb.stype ? _nfe.houg += 1 : 1 == _nfb.stype && (_nfe.tyku += 1, _nfe.kaih += 1), 651 != _nfb.ship_id && 656 != _nfb.ship_id || (_nfe.houg += 1, _nfe.tyku += 1, _nfe.kaih += 1), !_nfe.exists()) return _nfd;
            var _nff = _nfb.get_slotnums(308);
            return _nfd = _nfe.multiply(_nff);
        };
    },
    17732: (_nfg, _nfh, _nfi) => {
        'use strict';
        var _nfj = null;
        defineModule(_nfh);
        Object.defineProperty(_nfh, '__esModule', {
            'value': true
        }), _nfh.getSlot30_410PersonalEffect = void 0;
        var _nfk = _nfi(74496);
        _nfh.getSlot30_410PersonalEffect = function(_nfl) {
            var _nfm = null,
                _nfn = new _nfk.SlotItemEffectModel();
            return 73 != _nfl.ship_id && 501 != _nfl.ship_id && 506 != _nfl.ship_id && 502 != _nfl.ship_id && 507 != _nfl.ship_id || (_nfn.tyku += 3, _nfn.kaih += 2, _nfn.saku += 2, _nfl.get_slotnums(410) >= 1 && (_nfn.tyku += 2, _nfn.kaih += 2, _nfn.houg += 1, _nfn.souk += 1)), 54 == _nfl.ctype && (_nfn.tyku += 3, _nfn.kaih += 2, _nfn.saku += 2, _nfl.get_slotnums(410) >= 1 && (_nfn.tyku += 2, _nfn.kaih += 2, _nfn.houg += 1, _nfn.souk += 1, 968 == _nfl.ship_id && (_nfn.houg += 1, _nfn.tyku += 1, _nfn.kaih += 1))), _nfn;
        };
    },
    85630: function(_nfo, _nfp, _nfq) {
        'use strict';
        var _nfr = null;
        var _nfs = this && this.__importDefault || function(_nft) {
            var _nfu = null;
            return _nft && _nft.__esModule ? _nft : {
                'default': _nft
            };
        };
        defineModule(_nfp);
        Object.defineProperty(_nfp, '__esModule', {
            'value': true
        }), _nfp.getSlot310PersonalEffect = void 0;
        var _nfv = _nfq(74496),
            _nfw = _nfs(_nfq(18622));
        _nfp.getSlot310PersonalEffect = function(_nfx) {
            var _nfy = null,
                _nfz = new _nfv.SlotItemEffectModel(),
                _ng0 = new _nfv.SlotItemEffectModel(),
                _ng1 = new _nfv.SlotItemEffectModel();
            34 == _nfx.ctype ? (_ng0.houg += 2, _ng0.tyku += 1, _ng0.kaih += 1, _ng1.houg += 2) : 56 == _nfx.ctype ? (_ng0.houg += 2, _ng0.kaih += 1, _ng1.houg += 2, _ng1.kaih += 2) : 90 == _nfx.ctype && (_ng0.houg += 3, _ng0.raig += 2, _ng0.tyku += 1, _ng0.kaih += 1, _ng1.houg += 1, _ng1.raig += 1);
            var _ng2 = new _nfv.SlotItemEffectModel(),
                _ng3 = new _nfv.SlotItemEffectModel();
            622 != _nfx.ship_id && 623 != _nfx.ship_id && 624 != _nfx.ship_id || (_ng0.houg += 2, _ng0.kaih += 1, _ng0.tais += 1, _ng2.houg = 1, _ng2.raig = 1, _ng3.houg = 3, _ng3.kaih = 2, _ng3.raig = 2);
            var _ng4 = true;
            if (_ng0.exists() || (_ng4 = false), 0 == _ng4) return _nfz;
            var _ng5 = _nfx.get_slotnums(310) + _nfx.get_slotnums(518);
            _nfz = _ng0.multiply(_ng5);
            for (var _ng6 = 0, _ng7 = 0, _ng8 = 0, _ng9 = [310, 518]; _ng8 < _ng9.length; _ng8++) {
                var _nga = _ng9[_ng8],
                    _ngb = _nfx.have_slots_dict[_nga];
                if (null != _ngb)
                    for (var _ngc = 0, _ngd = _ngb; _ngc < _ngd.length; _ngc++) {
                        var _nge = _ngd[_ngc];
                        null != _nge && (_nge.level >= 7 && _ng6++, _nge.level >= 10 && _ng7++);
                    }
            }
            if (_ng2.exists() && _ng6 > 0 && _nfz.add(_ng2.multiply(_ng6)), _ng1.exists() && _ng7 > 0 && _nfz.add(_ng1.multiply(_ng7)), _ng3.exists()) {
                for (var _ngf = 0, _ngg = 0, _ngh = _nfx.have_slot_ids(); _ngg < _ngh.length; _ngg++) {
                    var _ngi = _ngh[_ngg],
                        _ngj = _nfw.default.model.slot.getMst(_ngi),
                        _ngk = _ngj.equipType;
                    (12 == _ngk || 13 == _ngk) && _ngj.sakuteki >= 5 && (_ngf += _nfx.get_slotnums(parseInt(_ngi)));
                }
                _ngf > 0 && _nfz.add(_ng3);
            }
            return _nfz;
        };
    },
    88736: (_ngl, _ngm, _ngn) => {
        'use strict';
        var _ngo = null;
        defineModule(_ngm);
        Object.defineProperty(_ngm, '__esModule', {
            'value': true
        }), _ngm.getSlot313PersonalEffect = void 0;
        var _ngp = _ngn(74496);
        _ngm.getSlot313PersonalEffect = function(_ngq) {
            var _ngr = null,
                _ngs = new _ngp.SlotItemEffectModel(),
                _ngt = new _ngp.SlotItemEffectModel();
            87 != _ngq.ctype && 91 != _ngq.ctype || (_ngt.houg += 2, _ngt.tyku += 2, _ngt.kaih += 1, _ngt.souk += 1), 651 != _ngq.ship_id && 656 != _ngq.ship_id || (_ngt.houg += 2, _ngt.tyku += 2, _ngt.kaih += 1, _ngt.souk += 1);
            var _ngu = true;
            if (_ngt.exists() || (_ngu = false), 0 == _ngu) return _ngs;
            var _ngv = _ngq.get_slotnums(313);
            return _ngs = _ngt.multiply(_ngv);
        };
    },
    49341: (_ngw, _ngx, _ngy) => {
        'use strict';
        var _ngz = null;
        defineModule(_ngx);
        Object.defineProperty(_ngx, '__esModule', {
            'value': true
        }), _ngx.getSlot314PersonalEffect = void 0;
        var _nh0 = _ngy(74496);
        _ngx.getSlot314PersonalEffect = function(_nh1) {
            var _nh2 = null,
                _nh3 = new _nh0.SlotItemEffectModel(),
                _nh4 = new _nh0.SlotItemEffectModel();
            87 != _nh1.ctype && 91 != _nh1.ctype || (_nh4.houg += 1, _nh4.raig += 3);
            var _nh5 = true;
            if (_nh4.exists() || (_nh5 = false), 0 == _nh5) return _nh3;
            var _nh6 = _nh1.get_slotnums(314);
            return _nh3 = _nh4.multiply(_nh6);
        };
    },
    74306: (_nh7, _nh8, _nh9) => {
        'use strict';
        var _nha = null;
        defineModule(_nh8);
        Object.defineProperty(_nh8, '__esModule', {
            'value': true
        }), _nh8.getSlot315PersonalEffect = void 0;
        var _nhb = _nh9(74496);
        _nh8.getSlot315PersonalEffect = function(_nhc) {
            var _nhd = null,
                _nhe = new _nhb.SlotItemEffectModel(),
                _nhf = new _nhb.SlotItemEffectModel();
            'アメリカ' == _nhc.getCountryName() && (_nhf.houg += 2, _nhf.kaih += 3, _nhf.saku += 4), 87 != _nhc.ctype && 91 != _nhc.ctype || (_nhf.houg += 1, _nhe.leng += 1), 651 != _nhc.ship_id && 656 != _nhc.ship_id || (_nhe.houg += 2, _nhe.kaih += 2, _nhe.saku += 3, _nhe.leng += 1);
            var _nhg = true;
            if (_nhf.exists() || (_nhg = false), 0 == _nhg) return _nhe;
            var _nhh = _nhc.get_slotnums(315);
            return _nhe.add(_nhf.multiply(_nhh)), _nhe;
        };
    },
    83898: (_nhi, _nhj, _nhk) => {
        'use strict';
        var _nhl = null;
        defineModule(_nhj);
        Object.defineProperty(_nhj, '__esModule', {
            'value': true
        }), _nhj.getSlot316PersonalEffect = void 0;
        var _nhm = _nhk(74496);
        _nhj.getSlot316PersonalEffect = function(_nhn) {
            var _nho = null,
                _nhp = new _nhm.SlotItemEffectModel(),
                _nhq = new _nhm.SlotItemEffectModel();
            if (68 == _nhn.ctype) {
                if (_nhq.houg += 4, _nhq.tyku += 1, _nhq.kaih += 1, !_nhq.exists()) return _nhp;
                var _nhr = _nhn.get_slotnums(316);
                _nhp = _nhq.multiply(_nhr);
            }
            return _nhp;
        };
    },
    71873: (_nhs, _nht, _nhu) => {
        'use strict';
        var _nhv = null;
        defineModule(_nht);
        Object.defineProperty(_nht, '__esModule', {
            'value': true
        }), _nht.getSlot317PersonalEffect = void 0;
        var _nhw = _nhu(74496);
        _nht.getSlot317PersonalEffect = function(_nhx) {
            var _nhy = null,
                _nhz = new _nhw.SlotItemEffectModel(),
                _ni0 = new _nhw.SlotItemEffectModel(),
                _ni1 = 0,
                _ni2 = false;
            if (6 == _nhx.ctype ? (_ni0.houg += 2, _ni0.tyku += 1, _ni1 = 1, _ni2 = true) : 2 == _nhx.ctype && (_ni0.houg += 1, _ni0.tyku += 1, _ni0.kaih += 1, _ni1 = 2, _ni2 = true), 149 == _nhx.ship_id || 591 == _nhx.ship_id || 592 == _nhx.ship_id ? (_ni0.houg += 2, _ni0.tyku += 2, _ni2 = true) : 150 == _nhx.ship_id ? (_ni0.houg += 1, _ni0.tyku += 1, _ni2 = true) : 151 == _nhx.ship_id ? (_ni0.houg += 1, _ni0.tyku += 1, _ni0.kaih += 1, _ni2 = true) : 593 == _nhx.ship_id ? (_ni0.houg += 1, _ni0.tyku += 3, _ni0.kaih += 2, _ni2 = true) : 954 == _nhx.ship_id ? (_ni0.houg += 2, _ni0.tyku += 2, _ni0.kaih += 1, _ni2 = true) : 152 == _nhx.ship_id ? (_ni0.houg += 2, _ni0.tyku += 1, _ni2 = true) : 541 == _nhx.ship_id ? (_ni0.houg += 1, _ni0.tyku += 2, _ni2 = true) : 573 == _nhx.ship_id && (_ni0.houg += 2, _ni0.tyku += 2, _ni0.kaih += 1, _ni2 = true), 0 == _ni2) return _nhz;
            if (_nhz.add(_ni0), 0 == _ni1) return _nhz;
            var _ni3 = _nhx.get_each_level_nums(317),
                _ni4 = [];
            return _ni1 > 0 && _ni3.forEach(function(_ni5, _ni6) {
                var _ni7 = null;
                for (var _ni8 = 1; _ni8 <= _nhx.SLOT_LEVEL_MAX; _ni8++) null == _ni4[_ni8] && (_ni4[_ni8] = 0), _ni6 >= _ni8 && (_ni4[_ni8] += _ni5);
            }), 1 == _ni1 ? _ni4[8] >= 1 && (_nhz.houm += 1) : 2 == _ni1 && _ni3[10] >= 1 && (_nhz.houm += 1), _nhz;
        };
    },
    53122: function(_ni9, _nia, _nib) {
        'use strict';
        var _nic = null;
        var _nid = this && this.__importDefault || function(_nie) {
            var _nif = null;
            return _nie && _nie.__esModule ? _nie : {
                'default': _nie
            };
        };
        defineModule(_nia);
        Object.defineProperty(_nia, '__esModule', {
            'value': true
        }), _nia.getSlot318PersonalEffect = void 0;
        var _nig = _nib(74496),
            _nih = _nid(_nib(18622));
        _nia.getSlot318PersonalEffect = function(_nii) {
            var _nij = null,
                _nik = new _nig.SlotItemEffectModel(),
                _nil = new _nig.SlotItemEffectModel(),
                _nim = new _nig.SlotItemEffectModel(),
                _nin = new _nig.SlotItemEffectModel();
            if (411 == _nii.ship_id || 412 == _nii.ship_id ? _nil.houg += 1 : 82 == _nii.ship_id ? (_nil.houg += 2, _nil.tyku += 2, _nil.kaih += 2, _nin.tyku = 2, _nin.kaih = 3, _nin.houm = 1) : 553 == _nii.ship_id ? (_nil.houg += 2, _nil.tyku += 2, _nil.kaih += 2, _nil.houm += 3, _nin.tyku = 2, _nin.kaih = 3, _nin.houm = 1, _nim.kaih = 2, _nim.souk = 1) : 88 == _nii.ship_id ? (_nil.houg += 2, _nil.tyku += 2, _nil.kaih += 2, _nin.tyku = 2, _nin.kaih = 3, _nin.houm = 1) : 541 == _nii.ship_id || 573 == _nii.ship_id ? (_nil.houg += 3, _nil.tyku += 2, _nil.kaih += 1, _nil.houm += 2, _nim.houg = 2, _nim.kaih = 2, _nim.souk = 1, _nim.houm = 1) : 554 == _nii.ship_id && (_nil.houg += 3, _nil.tyku += 2, _nil.kaih += 2, _nil.houm += 3, _nin.tyku = 2, _nin.kaih = 3, _nin.houm = 1, _nim.houg = 1, _nim.kaih = 2, _nim.souk = 1, _nim.houm = 1), !_nil.exists()) return _nik;
            var _nio = _nii.get_slotnums(318);
            if (_nik = _nil.multiply(_nio), !_nim.exists() && !_nin.exists()) return _nik;
            for (var _nip = 0, _niq = 0, _nir = _nii.have_slot_ids(); _niq < _nir.length; _niq++) {
                var _nis = _nir[_niq],
                    _nit = _nih.default.model.slot.getMst(_nis),
                    _niu = _nit.equipType;
                (12 == _niu || 13 == _niu) && _nit.taiku >= 2 && (_nip += _nii.get_slotnums(parseInt(_nis)));
            }
            var _niv = _nii.get_slotnums(290);
            return _nin.exists() && _nip > 0 && 0 == _niv && _nik.add(_nin), _nim.exists() && _niv >= 1 && _nik.add(_nim), _nik;
        };
    },
    51063: (_niw, _nix, _niy) => {
        'use strict';
        var _niz = null;
        defineModule(_nix);
        Object.defineProperty(_nix, '__esModule', {
            'value': true
        }), _nix.getSlot319PersonalEffect = void 0;
        var _nj0 = _niy(74496);
        _nix.getSlot319PersonalEffect = function(_nj1) {
            var _nj2 = null,
                _nj3 = new _nj0.SlotItemEffectModel(),
                _nj4 = new _nj0.SlotItemEffectModel();
            if (554 != _nj1.ship_id && 553 != _nj1.ship_id || (_nj4.houg = 7, _nj4.tyku = 3, _nj4.kaih = 2), !_nj4.exists()) return _nj3;
            var _nj5 = _nj1.get_slotnums(319);
            return _nj3 = _nj4.multiply(_nj5);
        };
    },
    91491: (_nj6, _nj7, _nj8) => {
        'use strict';
        var _nj9 = null;
        defineModule(_nj7);
        Object.defineProperty(_nj7, '__esModule', {
            'value': true
        }), _nj7.getSlot320PersonalEffect = void 0;
        var _nja = _nj8(74496);
        _nj7.getSlot320PersonalEffect = function(_njb) {
            var _njc = null,
                _njd = new _nja.SlotItemEffectModel(),
                _nje = new _nja.SlotItemEffectModel();
            if (553 == _njb.ship_id) _nje.houg = 2;
            else {
                if (554 == _njb.ship_id) _nje.houg = 4;
                else {
                    if (196 == _njb.ship_id) _nje.houg = 3;
                    else {
                        if (197 == _njb.ship_id) _nje.houg = 3;
                        else {
                            if (508 == _njb.ship_id) _nje.houg = 4;
                            else {
                                if (509 != _njb.ship_id) return _njd;
                                _nje.houg = 4;
                            }
                        }
                    }
                }
            }
            var _njf = _njb.get_slotnums(320);
            return _njd = _nje.multiply(_njf);
        };
    },
    85495: (_njg, _njh, _nji) => {
        'use strict';
        var _njj = null;
        defineModule(_njh);
        Object.defineProperty(_njh, '__esModule', {
            'value': true
        }), _njh.getSlot322PersonalEffect = void 0;
        var _njk = _nji(74496);
        _njh.getSlot322PersonalEffect = function(_njl) {
            var _njm = null,
                _njn = new _njk.SlotItemEffectModel(),
                _njo = new _njk.SlotItemEffectModel();
            if (554 != _njl.ship_id && 553 != _njl.ship_id || (_njo.houg = 5, _njo.tyku = 2, _njo.kaih = 2, _njo.tais = 1), !_njo.exists()) return _njn;
            var _njp = _njl.get_slotnums(322);
            return _njn = _njo.multiply(_njp);
        };
    },
    65365: (_njq, _njr, _njs) => {
        'use strict';
        var _njt = null;
        defineModule(_njr);
        Object.defineProperty(_njr, '__esModule', {
            'value': true
        }), _njr.getSlot323PersonalEffect = void 0;
        var _nju = _njs(74496);
        _njr.getSlot323PersonalEffect = function(_njv) {
            var _njw = null,
                _njx = new _nju.SlotItemEffectModel(),
                _njy = new _nju.SlotItemEffectModel();
            if (554 != _njv.ship_id && 553 != _njv.ship_id || (_njy.houg = 6, _njy.tyku = 3, _njy.kaih = 3, _njy.tais = 2), !_njy.exists()) return _njx;
            var _njz = _njv.get_slotnums(323);
            return _njx = _njy.multiply(_njz);
        };
    },
    98164: (_nk0, _nk1, _nk2) => {
        'use strict';
        var _nk3 = null;
        defineModule(_nk1);
        Object.defineProperty(_nk1, '__esModule', {
            'value': true
        }), _nk1.getSlot324And325PersonalEffect = void 0;
        var _nk4 = _nk2(74496);
        _nk1.getSlot324And325PersonalEffect = function(_nk5) {
            var _nk6 = null,
                _nk7 = new _nk4.SlotItemEffectModel(),
                _nk8 = new _nk4.SlotItemEffectModel();
            if (554 == _nk5.ship_id || 646 == _nk5.ship_id ? (_nk8.houg = 2, _nk8.tais = 3, _nk8.kaih = 1) : 553 == _nk5.ship_id && (_nk8.houg = 1, _nk8.tais = 2, _nk8.kaih = 1), !_nk8.exists()) return _nk7;
            var _nk9 = _nk5.get_slotnums(324) + _nk5.get_slotnums(325);
            return _nk7 = _nk8.multiply(_nk9);
        };
    },
    38114: (_nka, _nkb, _nkc) => {
        'use strict';
        var _nkd = null;
        defineModule(_nkb);
        Object.defineProperty(_nkb, '__esModule', {
            'value': true
        }), _nkb.getSlot326PersonalEffect = void 0;
        var _nke = _nkc(74496);
        _nkb.getSlot326PersonalEffect = function(_nkf) {
            var _nkg = null,
                _nkh = new _nke.SlotItemEffectModel(),
                _nki = new _nke.SlotItemEffectModel();
            if (646 == _nkf.ship_id ? (_nki.houg = 3, _nki.tais = 5, _nki.kaih = 3) : 554 == _nkf.ship_id ? (_nki.houg = 3, _nki.tais = 4, _nki.kaih = 2) : 553 == _nkf.ship_id && (_nki.houg = 1, _nki.tais = 3, _nki.kaih = 1), !_nki.exists()) return _nkh;
            var _nkj = _nkf.get_slotnums(326);
            return _nkh = _nki.multiply(_nkj);
        };
    },
    21003: (_nkk, _nkl, _nkm) => {
        'use strict';
        var _nkn = null;
        defineModule(_nkl);
        Object.defineProperty(_nkl, '__esModule', {
            'value': true
        }), _nkl.getSlot327PersonalEffect = void 0;
        var _nko = _nkm(74496);
        _nkl.getSlot327PersonalEffect = function(_nkp) {
            var _nkq = null,
                _nkr = new _nko.SlotItemEffectModel(),
                _nks = new _nko.SlotItemEffectModel();
            if (646 == _nkp.ship_id ? (_nks.houg = 5, _nks.tais = 6, _nks.kaih = 4) : 554 == _nkp.ship_id ? (_nks.houg = 4, _nks.tais = 5, _nks.kaih = 2) : 553 == _nkp.ship_id && (_nks.houg = 2, _nks.tais = 4, _nks.kaih = 1), !_nks.exists()) return _nkr;
            var _nkt = _nkp.get_slotnums(327);
            return _nkr = _nks.multiply(_nkt);
        };
    },
    77010: (_nku, _nkv, _nkw) => {
        'use strict';
        var _nkx = null;
        defineModule(_nkv);
        Object.defineProperty(_nkv, '__esModule', {
            'value': true
        }), _nkv.getSlot328PersonalEffect = void 0;
        var _nky = _nkw(74496);
        _nkv.getSlot328PersonalEffect = function(_nkz) {
            var _nl0 = null,
                _nl1 = new _nky.SlotItemEffectModel(),
                _nl2 = new _nky.SlotItemEffectModel();
            if ('こんごう' == _nkz.yomi ? (_nl2.houg = 1, _nl2.kaih = 1, 209 == _nkz.ship_id || 149 == _nkz.ship_id ? _nl2.houg += 1 : 591 == _nkz.ship_id && (_nl2.houg += 2, _nl2.raig += 1)) : 'ひえい' == _nkz.yomi ? (_nl2.houg = 1, _nl2.kaih = 1, 210 == _nkz.ship_id || 150 == _nkz.ship_id ? _nl2.houg += 1 : 592 == _nkz.ship_id && (_nl2.houg += 2, _nl2.tyku += 1)) : 'はるな' == _nkz.yomi ? (_nl2.houg = 1, _nl2.kaih = 1, 211 == _nkz.ship_id || 151 == _nkz.ship_id ? _nl2.houg += 1 : 593 == _nkz.ship_id ? (_nl2.houg += 1, _nl2.tyku += 2) : 954 == _nkz.ship_id && (_nl2.houg += 2, _nl2.tyku += 1)) : 'きりしま' == _nkz.yomi ? (_nl2.houg = 1, _nl2.kaih = 1, 212 != _nkz.ship_id && 152 != _nkz.ship_id || (_nl2.houg += 1)) : ('ふそう' == _nkz.yomi || 'やましろ' == _nkz.yomi || 'いせ' == _nkz.yomi || 'ひゅうが' == _nkz.yomi) && (_nl2.houg = 1), !_nl2.exists()) return _nl1;
            var _nl3 = _nkz.get_slotnums(328);
            return _nl1 = _nl2.multiply(_nl3);
        };
    },
    39126: (_nl4, _nl5, _nl6) => {
        'use strict';
        var _nl7 = null;
        defineModule(_nl5);
        Object.defineProperty(_nl5, '__esModule', {
            'value': true
        }), _nl5.getSlot329PersonalEffect = void 0;
        var _nl8 = _nl6(74496);
        _nl5.getSlot329PersonalEffect = function(_nl9) {
            var _nla = null,
                _nlb = new _nl8.SlotItemEffectModel(),
                _nlc = new _nl8.SlotItemEffectModel();
            if ('こんごう' == _nl9.yomi ? (_nlc.houg = 1, _nlc.kaih = 1, 209 == _nl9.ship_id ? _nlc.houg += 1 : 149 == _nl9.ship_id ? (_nlc.houg += 2, _nlc.tyku += 1) : 591 == _nl9.ship_id && (_nlc.houg += 3, _nlc.tyku += 1, _nlc.raig += 2)) : 'ひえい' == _nl9.yomi ? (_nlc.houg = 1, _nlc.kaih = 1, 210 == _nl9.ship_id ? _nlc.houg += 1 : 150 == _nl9.ship_id ? (_nlc.houg += 2, _nlc.tyku += 1) : 592 == _nl9.ship_id && (_nlc.houg += 3, _nlc.tyku += 1, _nlc.raig += 2)) : 'はるな' == _nl9.yomi ? (_nlc.houg = 1, _nlc.kaih = 1, 211 == _nl9.ship_id ? _nlc.houg += 1 : 151 == _nl9.ship_id ? (_nlc.houg += 2, _nlc.tyku += 1) : 593 == _nl9.ship_id ? (_nlc.houg += 2, _nlc.tyku += 3, _nlc.raig += 1) : 954 == _nl9.ship_id && (_nlc.houg += 3, _nlc.tyku += 1, _nlc.raig += 2)) : 'きりしま' == _nl9.yomi ? (_nlc.houg = 1, _nlc.kaih = 1, 212 == _nl9.ship_id ? _nlc.houg += 1 : 152 == _nl9.ship_id && (_nlc.houg += 2, _nlc.tyku += 1)) : ('ふそう' == _nl9.yomi || 'やましろ' == _nl9.yomi || 'いせ' == _nl9.yomi || 'ひゅうが' == _nl9.yomi) && (_nlc.houg = 1), !_nlc.exists()) return _nlb;
            var _nld = _nl9.get_slotnums(329);
            return _nlb = _nlc.multiply(_nld);
        };
    },
    72176: (_nle, _nlf, _nlg) => {
        'use strict';
        var _nlh = null;
        defineModule(_nlf);
        Object.defineProperty(_nlf, '__esModule', {
            'value': true
        }), _nlf.getSlot335PersonalEffect = void 0;
        var _nli = _nlg(74496);
        _nlf.getSlot335PersonalEffect = function(_nlj) {
            var _nlk = null,
                _nll = new _nli.SlotItemEffectModel(),
                _nlm = new _nli.SlotItemEffectModel();
            if (277 == _nlj.ship_id || 278 == _nlj.ship_id ? (_nlm.tyku = 1, _nlm.kaih = 1) : 594 != _nlj.ship_id && 599 != _nlj.ship_id && 610 != _nlj.ship_id && 646 != _nlj.ship_id && 698 != _nlj.ship_id || (_nlm.tyku = 2, _nlm.kaih = 1), !_nlm.exists()) return _nll;
            var _nln = _nlj.get_slotnums(335);
            return _nll = _nlm.multiply(_nln);
        };
    },
    33846: (_nlo, _nlp, _nlq) => {
        'use strict';
        var _nlr = null;
        defineModule(_nlp);
        Object.defineProperty(_nlp, '__esModule', {
            'value': true
        }), _nlp.getSlot336PersonalEffect = void 0;
        var _nls = _nlq(74496);
        _nlp.getSlot336PersonalEffect = function(_nlt) {
            var _nlu = null,
                _nlv = new _nls.SlotItemEffectModel(),
                _nlw = new _nls.SlotItemEffectModel();
            if (277 == _nlt.ship_id || 278 == _nlt.ship_id ? (_nlw.houg = 1, _nlw.tyku = 1, _nlw.kaih = 1) : 594 != _nlt.ship_id && 599 != _nlt.ship_id && 610 != _nlt.ship_id && 646 != _nlt.ship_id && 698 != _nlt.ship_id || (_nlw.houg = 1, _nlw.tyku = 2, _nlw.kaih = 1), !_nlw.exists()) return _nlv;
            var _nlx = _nlt.get_slotnums(336);
            return _nlv = _nlw.multiply(_nlx);
        };
    },
    97157: (_nly, _nlz, _nm0) => {
        'use strict';
        var _nm1 = null;
        defineModule(_nlz);
        Object.defineProperty(_nlz, '__esModule', {
            'value': true
        }), _nlz.getSlot337PersonalEffect = void 0;
        var _nm2 = _nm0(74496);
        _nlz.getSlot337PersonalEffect = function(_nm3) {
            var _nm4 = null,
                _nm5 = new _nm2.SlotItemEffectModel(),
                _nm6 = new _nm2.SlotItemEffectModel();
            if (277 == _nm3.ship_id || 278 == _nm3.ship_id ? (_nm6.houg = 1, _nm6.tyku = 1, _nm6.kaih = 1) : 594 != _nm3.ship_id && 599 != _nm3.ship_id && 610 != _nm3.ship_id && 646 != _nm3.ship_id && 698 != _nm3.ship_id || (_nm6.houg = 2, _nm6.tyku = 2, _nm6.kaih = 1), !_nm6.exists()) return _nm5;
            var _nm7 = _nm3.get_slotnums(337);
            return _nm5 = _nm6.multiply(_nm7);
        };
    },
    63406: (_nm8, _nm9, _nma) => {
        'use strict';
        var _nmb = null;
        defineModule(_nm9);
        Object.defineProperty(_nm9, '__esModule', {
            'value': true
        }), _nm9.getSlot338PersonalEffect = void 0;
        var _nmc = _nma(74496);
        _nm9.getSlot338PersonalEffect = function(_nmd) {
            var _nme = null,
                _nmf = new _nmc.SlotItemEffectModel(),
                _nmg = new _nmc.SlotItemEffectModel();
            if (277 == _nmd.ship_id || 278 == _nmd.ship_id ? (_nmg.houg = 1, _nmg.tyku = 1, _nmg.kaih = 2) : 594 == _nmd.ship_id || 646 == _nmd.ship_id || 698 == _nmd.ship_id ? (_nmg.houg = 1, _nmg.tyku = 2, _nmg.kaih = 3) : 599 != _nmd.ship_id && 610 != _nmd.ship_id || (_nmg.houg = 4, _nmg.tyku = 3, _nmg.kaih = 4), !_nmg.exists()) return _nmf;
            var _nmh = _nmd.get_slotnums(338);
            return _nmf = _nmg.multiply(_nmh);
        };
    },
    66373: (_nmi, _nmj, _nmk) => {
        'use strict';
        var _nml = null;
        defineModule(_nmj);
        Object.defineProperty(_nmj, '__esModule', {
            'value': true
        }), _nmj.getSlot339PersonalEffect = void 0;
        var _nmm = _nmk(74496);
        _nmj.getSlot339PersonalEffect = function(_nmn) {
            var _nmo = null,
                _nmp = new _nmm.SlotItemEffectModel(),
                _nmq = new _nmm.SlotItemEffectModel();
            if (277 == _nmn.ship_id || 278 == _nmn.ship_id ? (_nmq.houg = 1, _nmq.tyku = 2, _nmq.kaih = 2) : 594 == _nmn.ship_id || 646 == _nmn.ship_id || 698 == _nmn.ship_id ? (_nmq.houg = 1, _nmq.tyku = 3, _nmq.kaih = 4) : 599 != _nmn.ship_id && 610 != _nmn.ship_id || (_nmq.houg = 6, _nmq.tyku = 4, _nmq.kaih = 5), !_nmq.exists()) return _nmp;
            var _nmr = _nmn.get_slotnums(339);
            return _nmp = _nmq.multiply(_nmr);
        };
    },
    19707: (_nms, _nmt, _nmu) => {
        'use strict';
        var _nmv = null;
        defineModule(_nmt);
        Object.defineProperty(_nmt, '__esModule', {
            'value': true
        }), _nmt.getSlot340PersonalEffect = void 0;
        var _nmw = _nmu(74496);
        _nmt.getSlot340PersonalEffect = function(_nmx) {
            var _nmy = null,
                _nmz = new _nmw.SlotItemEffectModel(),
                _nn0 = new _nmw.SlotItemEffectModel();
            if ('ガリバルディ' != _nmx.yomi && 'アブルッツィ' != _nmx.yomi || (_nn0.houg = 1, _nn0.tyku = 1, _nn0.kaih = 1), !_nn0.exists()) return _nmz;
            var _nn1 = _nmx.get_slotnums(340);
            return _nmz = _nn0.multiply(_nn1);
        };
    },
    63978: (_nn2, _nn3, _nn4) => {
        'use strict';
        var _nn5 = null;
        defineModule(_nn3);
        Object.defineProperty(_nn3, '__esModule', {
            'value': true
        }), _nn3.getSlot341PersonalEffect = void 0;
        var _nn6 = _nn4(74496);
        _nn3.getSlot341PersonalEffect = function(_nn7) {
            var _nn8 = null,
                _nn9 = new _nn6.SlotItemEffectModel(),
                _nna = new _nn6.SlotItemEffectModel();
            if ('ガリバルディ' == _nn7.yomi || 'アブルッツィ' == _nn7.yomi ? (_nna.houg = 2, _nna.tyku = 1, _nna.kaih = 1) : 'ゴトランド' == _nn7.yomi && (_nna.houg = 1, _nna.tyku = 1, _nna.kaih = 1), !_nna.exists()) return _nn9;
            var _nnb = _nn7.get_slotnums(341);
            return _nn9 = _nna.multiply(_nnb);
        };
    },
    92382: (_nnc, _nnd, _nne) => {
        'use strict';
        var _nnf = null;
        defineModule(_nnd);
        Object.defineProperty(_nnd, '__esModule', {
            'value': true
        }), _nnd.getSlot342PersonalEffect = void 0;
        var _nng = _nne(74496);
        _nnd.getSlot342PersonalEffect = function(_nnh) {
            var _nni = null,
                _nnj = new _nng.SlotItemEffectModel(),
                _nnk = new _nng.SlotItemEffectModel();
            if (277 == _nnh.ship_id || 278 == _nnh.ship_id || 461 == _nnh.ship_id || 466 == _nnh.ship_id || 462 == _nnh.ship_id || 467 == _nnh.ship_id ? _nnk.houg = 1 : 594 == _nnh.ship_id || 646 == _nnh.ship_id || 698 == _nnh.ship_id ? (_nnk.houg = 2, _nnk.tyku = 1, _nnk.kaih = 1) : 599 != _nnh.ship_id && 610 != _nnh.ship_id || (_nnk.houg = 3, _nnk.tyku = 2, _nnk.kaih = 2), !_nnk.exists()) return _nnj;
            var _nnl = _nnh.get_slotnums(342);
            return _nnj = _nnk.multiply(_nnl);
        };
    },
    78415: (_nnm, _nnn, _nno) => {
        'use strict';
        var _nnp = null;
        defineModule(_nnn);
        Object.defineProperty(_nnn, '__esModule', {
            'value': true
        }), _nnn.getSlot343PersonalEffect = void 0;
        var _nnq = _nno(74496);
        _nnn.getSlot343PersonalEffect = function(_nnr) {
            var _nns = null,
                _nnt = new _nnq.SlotItemEffectModel(),
                _nnu = new _nnq.SlotItemEffectModel();
            if (277 == _nnr.ship_id || 278 == _nnr.ship_id ? _nnu.houg = 2 : 461 == _nnr.ship_id || 466 == _nnr.ship_id || 462 == _nnr.ship_id || 467 == _nnr.ship_id ? _nnu.houg = 1 : 594 == _nnr.ship_id || 646 == _nnr.ship_id || 698 == _nnr.ship_id ? (_nnu.houg = 3, _nnu.tyku = 2, _nnu.kaih = 1) : 599 != _nnr.ship_id && 610 != _nnr.ship_id || (_nnu.houg = 5, _nnu.tyku = 3, _nnu.kaih = 3), !_nnu.exists()) return _nnt;
            var _nnv = _nnr.get_slotnums(343);
            return _nnt = _nnu.multiply(_nnv);
        };
    },
    23090: (_nnw, _nnx, _nny) => {
        'use strict';
        var _nnz = null;
        defineModule(_nnx);
        Object.defineProperty(_nnx, '__esModule', {
            'value': true
        }), _nnx.getSlot344PersonalEffect = void 0;
        var _no0 = _nny(74496);
        _nnx.getSlot344PersonalEffect = function(_no1) {
            var _no2 = null,
                _no3 = new _no0.SlotItemEffectModel(),
                _no4 = new _no0.SlotItemEffectModel();
            if (599 == _no1.ship_id || 610 == _no1.ship_id ? _no4.houg = 3 : 555 == _no1.ship_id || 560 == _no1.ship_id ? (_no4.houg = 2, _no4.tais = 2) : 318 == _no1.ship_id ? (_no4.houg = 4, _no4.tais = 1) : 282 == _no1.ship_id ? (_no4.houg = 2, _no4.tais = 1) : 888 == _no1.ship_id ? (_no4.houg = 4, _no4.tais = 2) : 883 == _no1.ship_id && (_no4.houg = 5, _no4.tais = 2), !_no4.exists()) return _no3;
            var _no5 = _no1.get_slotnums(344);
            return _no3 = _no4.multiply(_no5);
        };
    },
    18776: (_no6, _no7, _no8) => {
        'use strict';
        var _no9 = null;
        defineModule(_no7);
        Object.defineProperty(_no7, '__esModule', {
            'value': true
        }), _no7.getSlot345PersonalEffect = void 0;
        var _noa = _no8(74496);
        _no7.getSlot345PersonalEffect = function(_nob) {
            var _noc = null,
                _nod = new _noa.SlotItemEffectModel(),
                _noe = new _noa.SlotItemEffectModel();
            if (599 == _nob.ship_id || 610 == _nob.ship_id ? (_noe.houg = 3, _noe.kaih = 1) : 555 == _nob.ship_id || 560 == _nob.ship_id ? (_noe.houg = 3, _noe.tais = 2, _noe.kaih = 2) : 318 == _nob.ship_id ? (_noe.houg = 5, _noe.tais = 1, _noe.kaih = 2) : 282 == _nob.ship_id ? (_noe.houg = 3, _noe.tais = 1, _noe.kaih = 1) : 888 == _nob.ship_id ? (_noe.houg = 4, _noe.tais = 2, _noe.kaih = 2) : 883 == _nob.ship_id && (_noe.houg = 5, _noe.tais = 2, _noe.kaih = 3), !_noe.exists()) return _nod;
            var _nof = _nob.get_slotnums(345);
            return _nod = _noe.multiply(_nof);
        };
    },
    89058: (_nog, _noh, _noi) => {
        'use strict';
        var _noj = null;
        defineModule(_noh);
        Object.defineProperty(_noh, '__esModule', {
            'value': true
        }), _noh.getSlot346PersonalEffect = void 0;
        var _nok = _noi(74496);
        _noh.getSlot346PersonalEffect = function(_nol) {
            var _nom = null,
                _non = new _nok.SlotItemEffectModel();
            return 'やましおまる' == _nol.yomi && (_non.kaih += 1, _non.tais += 1), _non;
        };
    },
    84372: (_noo, _nop, _noq) => {
        'use strict';
        var _nor = null;
        defineModule(_nop);
        Object.defineProperty(_nop, '__esModule', {
            'value': true
        }), _nop.getSlot347PersonalEffect = void 0;
        var _nos = _noq(74496);
        _nop.getSlot347PersonalEffect = function(_not) {
            var _nou = null,
                _nov = new _nos.SlotItemEffectModel();
            return 'やましおまる' == _not.yomi && (_nov.kaih += 2, _nov.tais += 2), _nov;
        };
    },
    39656: (_now, _nox, _noy) => {
        'use strict';
        var _noz = null;
        defineModule(_nox);
        Object.defineProperty(_nox, '__esModule', {
            'value': true
        }), _nox.getSlot356_357PersonalEffect = void 0;
        var _np0 = _noy(74496);
        _nox.getSlot356_357PersonalEffect = function(_np1) {
            var _np2 = null,
                _np3 = new _np0.SlotItemEffectModel(),
                _np4 = new _np0.SlotItemEffectModel();
            if (95 == _np1.ctype ? _np4.houg = 2 : 9 == _np1.ctype && (_np4.houg = 1), !_np4.exists()) return _np3;
            var _np5 = _np1.get_slotnums(356) + _np1.get_slotnums(357);
            return _np3 = _np4.multiply(_np5);
        };
    },
    66039: (_np6, _np7, _np8) => {
        'use strict';
        var _np9 = null;
        defineModule(_np7);
        Object.defineProperty(_np7, '__esModule', {
            'value': true
        }), _np7.getSlot358PersonalEffect = void 0;
        var _npa = _np8(74496);
        _np7.getSlot358PersonalEffect = function(_npb) {
            var _npc = null,
                _npd = new _npa.SlotItemEffectModel(),
                _npe = new _npa.SlotItemEffectModel();
            if ('アメリカ' != _npb.getCountryName() && 67 != _npb.ctype && 78 != _npb.ctype && 82 != _npb.ctype && 88 != _npb.ctype && 108 != _npb.ctype && 112 != _npb.ctype) return _npd;
            _npe.houg += 1, _npe.kaih += 1, _npe.tyku += 1, 95 == _npb.ctype && (_npe.houg += 1, _npe.kaih += 2, _npe.tyku += 2);
            var _npf = _npb.get_slotnums(358);
            return _npd = _npe.multiply(_npf);
        };
    },
    64679: (_npg, _nph, _npi) => {
        'use strict';
        var _npj = null;
        defineModule(_nph);
        Object.defineProperty(_nph, '__esModule', {
            'value': true
        }), _nph.getSlot359PersonalEffect = void 0;
        var _npk = _npi(74496);
        _nph.getSlot359PersonalEffect = function(_npl) {
            var _npm = null,
                _npn = new _npk.SlotItemEffectModel(),
                _npo = new _npk.SlotItemEffectModel();
            if ('パース' == _npl.yomi ? (_npo.houg = 2, _npo.tyku = 2, _npo.kaih = 1) : 'ゆうばり' == _npl.yomi && (_npo.houg = 1, _npo.tyku = 1, _npo.kaih = 1), 622 != _npl.ship_id && 623 != _npl.ship_id && 624 != _npl.ship_id || (_npo.houg += 1, _npo.tyku += 1), !_npo.exists()) return _npn;
            var _npp = _npl.get_slotnums(359);
            return _npn = _npo.multiply(_npp);
        };
    },
    69954: (_npq, _npr, _nps) => {
        'use strict';
        var _npt = null;
        defineModule(_npr);
        Object.defineProperty(_npr, '__esModule', {
            'value': true
        }), _npr.getSlot35PersonalEffect = void 0;
        var _npu = _nps(74496);
        _npr.getSlot35PersonalEffect = function(_npv) {
            var _npw = null,
                _npx = new _npu.SlotItemEffectModel(),
                _npy = new _npu.SlotItemEffectModel();
            return 149 == _npv.ship_id || 591 == _npv.ship_id || 592 == _npv.ship_id ? (_npy.houg += 1, _npy.tyku += 1) : 150 == _npv.ship_id ? _npy.tyku += 1 : 151 == _npv.ship_id || 593 == _npv.ship_id || 954 == _npv.ship_id ? (_npy.tyku += 1, _npy.kaih += 1) : 152 == _npv.ship_id && (_npy.houg += 1), _npy.exists() ? _npx = _npy.multiply(1) : _npx;
        };
    },
    95953: (_npz, _nq0, _nq1) => {
        'use strict';
        var _nq2 = null;
        defineModule(_nq0);
        Object.defineProperty(_nq0, '__esModule', {
            'value': true
        }), _nq0.getSlot360_361PersonalEffect = void 0;
        var _nq3 = _nq1(74496);
        _nq0.getSlot360_361PersonalEffect = function(_nq4) {
            var _nq5 = null,
                _nq6 = new _nq3.SlotItemEffectModel(),
                _nq7 = new _nq3.SlotItemEffectModel();
            if ('デ・ロイテル' == _nq4.yomi ? (_nq7.houg = 2, _nq7.tyku = 2, _nq7.kaih = 1) : 'ゴトランド' == _nq4.yomi && (_nq7.houg = 2, _nq7.tyku = 1, _nq7.kaih = 1), 41 == _nq4.ctype && (_nq7.houg = 1, _nq7.tyku = 1), !_nq7.exists()) return _nq6;
            var _nq8 = _nq4.get_slotnums(360) + _nq4.get_slotnums(361);
            return _nq6 = _nq7.multiply(_nq8);
        };
    },
    86384: (_nq9, _nqa, _nqb) => {
        'use strict';
        var _nqc = null;
        defineModule(_nqa);
        Object.defineProperty(_nqa, '__esModule', {
            'value': true
        }), _nqa.getSlot362_363PersonalEffect = void 0;
        var _nqd = _nqb(74496);
        _nqa.getSlot362_363PersonalEffect = function(_nqe) {
            var _nqf = null,
                _nqg = new _nqd.SlotItemEffectModel(),
                _nqh = new _nqd.SlotItemEffectModel(),
                _nqi = false;
            if (99 == _nqe.ctype ? (_nqh.houg = 1, _nqh.tyku = 2, _nqh.kaih = 1, _nqi = true) : 34 == _nqe.ctype || 21 == _nqe.ctype ? (_nqh.houg = -3, _nqh.tyku = -3, _nqh.kaih = -8, _nqi = true) : 4 == _nqe.ctype || 20 == _nqe.ctype || 16 == _nqe.ctype ? (_nqh.houg = -3, _nqh.tyku = -2, _nqh.kaih = -6, _nqi = true) : 89 == _nqe.ctype || 56 == _nqe.ctype ? (_nqh.houg = -2, _nqh.tyku = -1, _nqh.kaih = -4, _nqi = true) : 52 != _nqe.ctype && 41 != _nqe.ctype && 98 != _nqe.ctype || (_nqh.tyku = -1, _nqh.kaih = -2, _nqi = true), 'アメリカ' == _nqe.getCountryName() && (_nqh.tyku += 1, _nqh.kaih += 1, _nqi = true), 0 == _nqi) return _nqg;
            var _nqj = _nqe.get_slotnums(362) + _nqe.get_slotnums(363);
            return _nqg = _nqh.multiply(_nqj);
        };
    },
    65345: (_nqk, _nql, _nqm) => {
        'use strict';
        var _nqn = null;
        defineModule(_nql);
        Object.defineProperty(_nql, '__esModule', {
            'value': true
        }), _nql.getSlot364PersonalEffect = void 0;
        var _nqo = _nqm(74496);
        _nql.getSlot364PersonalEffect = function(_nqp) {
            var _nqq = null;
            new _nqo.SlotItemEffectModel();
            var _nqr = new _nqo.SlotItemEffectModel();
            623 == _nqp.ship_id || 586 == _nqp.ship_id || 119 == _nqp.ship_id || 118 == _nqp.ship_id || 657 == _nqp.ship_id || 506 == _nqp.ship_id || 668 == _nqp.ship_id || 507 == _nqp.ship_id ? (_nqr.raig = 1, _nqr.kaih = -2, 119 == _nqp.ship_id ? _nqr.raig += 1 : 507 == _nqp.ship_id ? _nqr.raig += 2 : 623 == _nqp.ship_id && (_nqr.houg += 1, _nqr.raig += 3)) : (_nqr.houg = -1, _nqr.kaih = -7);
            var _nqs = _nqp.get_slotnums(364);
            return _nqr.multiply(_nqs);
        };
    },
    46514: (_nqt, _nqu, _nqv) => {
        'use strict';
        var _nqw = null;
        defineModule(_nqu);
        Object.defineProperty(_nqu, '__esModule', {
            'value': true
        }), _nqu.getSlot365PersonalEffect = void 0;
        var _nqx = _nqv(74496);
        _nqu.getSlot365PersonalEffect = function(_nqy) {
            var _nqz = null,
                _nr0 = new _nqx.SlotItemEffectModel(),
                _nr1 = new _nqx.SlotItemEffectModel(),
                _nr2 = false;
            return 37 != _nqy.ctype && 19 != _nqy.ctype && 2 != _nqy.ctype && 26 != _nqy.ctype && 6 != _nqy.ctype || (_nr1.houg += 1, _nr2 = true), 136 != _nqy.ship_id && 148 != _nqy.ship_id && 546 != _nqy.ship_id && 541 != _nqy.ship_id && 573 != _nqy.ship_id && 911 != _nqy.ship_id && 916 != _nqy.ship_id && 593 != _nqy.ship_id || (_nr1.houg += 1, _nr2 = true), 591 != _nqy.ship_id && 592 != _nqy.ship_id && 954 != _nqy.ship_id || (_nr1.houg += 2, _nr2 = true), 0 == _nr2 ? _nr0 : _nr0 = _nr1.multiply(1);
        };
    },
    81976: (_nr3, _nr4, _nr5) => {
        'use strict';
        var _nr6 = null;
        defineModule(_nr4);
        Object.defineProperty(_nr4, '__esModule', {
            'value': true
        }), _nr4.getSlot367PersonalEffect = void 0;
        var _nr7 = _nr5(74496);
        _nr4.getSlot367PersonalEffect = function(_nr8) {
            var _nr9 = null,
                _nra = new _nr7.SlotItemEffectModel(),
                _nrb = new _nr7.SlotItemEffectModel(),
                _nrc = false;
            if ('ゴトランド' == _nr8.yomi && (_nrb.houg += 2, _nrb.tais += 1, _nrb.kaih += 1, _nrb.saku += 1, _nrc = true), 70 == _nr8.ctype ? (_nrb.houg += 1, _nrb.tais += 1, _nrb.kaih += 1, _nrb.saku += 1, _nrc = true) : 72 == _nr8.ctype || 62 == _nr8.ctype ? (_nrb.houg += 1, _nrb.kaih += 1, _nrb.saku += 1, _nrc = true) : 67 != _nr8.ctype && 78 != _nr8.ctype && 82 != _nr8.ctype && 88 != _nr8.ctype && 108 != _nr8.ctype && 112 != _nr8.ctype || (_nrb.houg += 2, _nrb.kaih += 2, _nrb.saku += 2, _nrc = true), 0 == _nrc) return _nra;
            var _nrd = _nr8.get_slotnums(367);
            return _nra = _nrb.multiply(_nrd);
        };
    },
    89331: (_nre, _nrf, _nrg) => {
        'use strict';
        var _nrh = null;
        defineModule(_nrf);
        Object.defineProperty(_nrf, '__esModule', {
            'value': true
        }), _nrf.getSlot368PersonalEffect = void 0;
        var _nri = _nrg(74496);
        _nrf.getSlot368PersonalEffect = function(_nrj) {
            var _nrk = null,
                _nrl = new _nri.SlotItemEffectModel(),
                _nrm = new _nri.SlotItemEffectModel(),
                _nrn = false;
            if ('ゴトランド' == _nrj.yomi && (_nrm.houg = 4, _nrm.tais = 3, _nrm.kaih = 2, _nrm.saku = 3, _nrn = true, 630 == _nrj.ship_id && (_nrl.houg += 2, _nrl.raig += 2, _nrl.kaih += 1, _nrl.saku += 1)), 70 == _nrj.ctype ? (_nrm.houg = 2, _nrm.tais = 3, _nrm.kaih = 1, _nrm.saku = 2, _nrn = true) : 72 == _nrj.ctype || 62 == _nrj.ctype ? (_nrm.houg += 1, _nrm.tais += 2, _nrm.kaih += 1, _nrm.saku += 2, _nrn = true) : 67 != _nrj.ctype && 78 != _nrj.ctype && 82 != _nrj.ctype && 88 != _nrj.ctype && 108 != _nrj.ctype && 112 != _nrj.ctype || (_nrm.houg += 2, _nrm.tais += 2, _nrm.kaih += 2, _nrm.saku += 2, _nrn = true), 0 == _nrn) return _nrl;
            var _nro = _nrj.get_slotnums(368);
            return _nrl.add(_nrm.multiply(_nro)), _nrl;
        };
    },
    73973: (_nrp, _nrq, _nrr) => {
        'use strict';
        var _nrs = null;
        defineModule(_nrq);
        Object.defineProperty(_nrq, '__esModule', {
            'value': true
        }), _nrq.getSlot369PersonalEffect = void 0;
        var _nrt = _nrr(74496);
        _nrq.getSlot369PersonalEffect = function(_nru) {
            var _nrv = null,
                _nrw = new _nrt.SlotItemEffectModel(),
                _nrx = new _nrt.SlotItemEffectModel(),
                _nry = false;
            if ('ゴトランド' == _nru.yomi && (_nrx.houg = 5, _nrx.tais = 4, _nrx.kaih = 4, _nrx.saku = 3, _nry = true, 630 == _nru.ship_id && (_nrw.houg += 3, _nrw.raig += 3, _nrw.kaih += 2, _nrw.saku += 2)), 70 == _nru.ctype ? (_nrx.houg += 3, _nrx.tais += 3, _nrx.kaih += 2, _nrx.saku += 3, _nry = true) : 72 == _nru.ctype || 62 == _nru.ctype ? (_nrx.houg += 2, _nrx.tais += 2, _nrx.kaih += 1, _nrx.saku += 2, _nry = true) : 67 != _nru.ctype && 78 != _nru.ctype && 82 != _nru.ctype && 88 != _nru.ctype && 108 != _nru.ctype && 112 != _nru.ctype || (_nrx.houg += 2, _nrx.tais += 2, _nrx.kaih += 2, _nrx.saku += 2, _nry = true), 0 == _nry) return _nrw;
            var _nrz = _nru.get_slotnums(369);
            return _nrw.add(_nrx.multiply(_nrz)), _nrw;
        };
    },
    21178: (_ns0, _ns1, _ns2) => {
        'use strict';
        var _ns3 = null;
        defineModule(_ns1);
        Object.defineProperty(_ns1, '__esModule', {
            'value': true
        }), _ns1.getSlot370PersonalEffect = void 0;
        var _ns4 = _ns2(74496);
        _ns1.getSlot370PersonalEffect = function(_ns5) {
            var _ns6 = null,
                _ns7 = new _ns4.SlotItemEffectModel(),
                _ns8 = new _ns4.SlotItemEffectModel(),
                _ns9 = false;
            if ('ゴトランド' == _ns5.yomi && (_ns8.houg = 1, _ns8.tais = 3, _ns8.kaih = 1, _ns8.saku = 2, _ns9 = true), 70 == _ns5.ctype ? (_ns8.houg += 1, _ns8.tais += 3, _ns8.kaih += 1, _ns8.saku += 1, _ns9 = true) : 72 == _ns5.ctype || 62 == _ns5.ctype ? (_ns8.houg += 1, _ns8.tais += 2, _ns8.kaih += 1, _ns8.saku += 1, _ns9 = true) : 67 != _ns5.ctype && 78 != _ns5.ctype && 82 != _ns5.ctype && 88 != _ns5.ctype && 108 != _ns5.ctype && 112 != _ns5.ctype || (_ns8.houg += 2, _ns8.tais += 3, _ns8.kaih += 2, _ns8.saku += 2, _ns9 = true, 'ウォースパイト' == _ns5.yomi ? (_ns7.houg += 4, _ns7.kaih += 1, _ns7.saku += 1) : 'ヴァリアント' == _ns5.yomi && (_ns7.houg += 3, _ns7.kaih += 2, _ns7.saku += 1)), 0 == _ns9) return _ns7;
            var _nsa = _ns5.get_slotnums(370);
            return _ns7.add(_ns8.multiply(_nsa)), _ns7;
        };
    },
    5079: (_nsb, _nsc, _nsd) => {
        'use strict';
        var _nse = null;
        defineModule(_nsc);
        Object.defineProperty(_nsc, '__esModule', {
            'value': true
        }), _nsc.getSlot371PersonalEffect = void 0;
        var _nsf = _nsd(74496);
        _nsc.getSlot371PersonalEffect = function(_nsg) {
            var _nsh = null,
                _nsi = new _nsf.SlotItemEffectModel(),
                _nsj = new _nsf.SlotItemEffectModel(),
                _nsk = false;
            if ('ゴトランド' == _nsg.yomi && (_nsj.houg = 4, _nsj.tais = 2, _nsj.kaih = 3, _nsj.saku = 6, _nsk = true, 630 == _nsg.ship_id && (_nsi.houg += 2, _nsi.kaih += 2, _nsi.saku += 3)), 70 == _nsg.ctype ? (_nsj.houg += 2, _nsj.tais += 1, _nsj.kaih += 2, _nsj.saku += 4, _nsk = true) : 79 == _nsg.ctype ? (_nsj.houg += 2, _nsj.kaih += 1, _nsj.saku += 3, _nsk = true) : 67 != _nsg.ctype && 78 != _nsg.ctype && 82 != _nsg.ctype && 88 != _nsg.ctype && 108 != _nsg.ctype && 112 != _nsg.ctype || (_nsj.houg += 3, _nsj.tais += 1, _nsj.kaih += 2, _nsj.saku += 3, _nsk = true, 88 == _nsg.ctype && (_nsi.houg += 3, _nsi.kaih += 2, _nsi.saku += 2)), 0 == _nsk) return _nsi;
            var _nsl = _nsg.get_slotnums(371);
            return _nsi.add(_nsj.multiply(_nsl)), _nsi;
        };
    },
    95014: (_nsm, _nsn, _nso) => {
        'use strict';
        var _nsp = null;
        defineModule(_nsn);
        Object.defineProperty(_nsn, '__esModule', {
            'value': true
        }), _nsn.getSlot372PersonalEffect = void 0;
        var _nsq = _nso(74496);
        _nsn.getSlot372PersonalEffect = function(_nsr) {
            var _nss = null,
                _nst = new _nsq.SlotItemEffectModel(),
                _nsu = false,
                _nsv = new _nsq.SlotItemEffectModel();
            if ('しょうかく' == _nsr.yomi || 'ずいかく' == _nsr.yomi || 'たいほう' == _nsr.yomi ? (_nsv.houg += 1, _nsu = true, _nst.raig += 1) : 'じゅんよう' != _nsr.yomi && 'ひよう' != _nsr.yomi || (_nsv.houg += 1, _nsu = true), 108 == _nsr.ship_id || 109 == _nsr.ship_id || 291 == _nsr.ship_id || 292 == _nsr.ship_id || 296 == _nsr.ship_id || 297 == _nsr.ship_id ? (_nsv.houg += 1, _nsu = true) : 116 == _nsr.ship_id || 74 == _nsr.ship_id || 117 == _nsr.ship_id || 282 == _nsr.ship_id || 185 == _nsr.ship_id ? (_nsv.tais += 1, _nsu = true) : 560 == _nsr.ship_id || 555 == _nsr.ship_id || 318 == _nsr.ship_id ? (_nsv.tais += 1, _nsu = true, _nst.raig += 1) : 508 == _nsr.ship_id || 509 == _nsr.ship_id ? (_nsv.houg += 1, _nsu = true) : 883 != _nsr.ship_id && 888 != _nsr.ship_id || (_nsv.houg += 2, _nsv.tais += 1, _nsu = true, _nst.raig += 2), 0 == _nsu) return _nst;
            var _nsw = _nsr.get_slotnums(372);
            return _nst.add(_nsv.multiply(_nsw)), _nst;
        };
    },
    53099: (_nsx, _nsy, _nsz) => {
        'use strict';
        var _nt0 = null;
        defineModule(_nsy);
        Object.defineProperty(_nsy, '__esModule', {
            'value': true
        }), _nsy.getSlot373PersonalEffect = void 0;
        var _nt1 = _nsz(74496);
        _nsy.getSlot373PersonalEffect = function(_nt2) {
            var _nt3 = null,
                _nt4 = new _nt1.SlotItemEffectModel(),
                _nt5 = new _nt1.SlotItemEffectModel(),
                _nt6 = false;
            if ('しょうかく' == _nt2.yomi ? (_nt5.houg += 2, _nt6 = true, _nt4.raig += 2, _nt4.kaih += 2) : 'ずいかく' == _nt2.yomi ? (_nt5.houg += 1, _nt6 = true, _nt4.raig += 2, _nt4.kaih += 3) : 'たいほう' == _nt2.yomi ? (_nt5.houg += 1, _nt6 = true, _nt4.raig += 2, _nt4.kaih += 2) : 'じゅんよう' != _nt2.yomi && 'ひよう' != _nt2.yomi || (_nt5.houg += 1, _nt6 = true, _nt4.raig += 1, _nt4.kaih += 1), 108 == _nt2.ship_id || 109 == _nt2.ship_id ? (_nt5.houg += 1, _nt6 = true) : 291 == _nt2.ship_id || 292 == _nt2.ship_id ? (_nt5.houg += 1, _nt6 = true, _nt4.raig += 1) : 296 == _nt2.ship_id || 297 == _nt2.ship_id ? (_nt5.houg += 1, _nt6 = true, _nt4.raig += 1, _nt4.kaih += 1) : 116 == _nt2.ship_id || 74 == _nt2.ship_id ? (_nt5.tais += 1, _nt6 = true) : 117 == _nt2.ship_id || 282 == _nt2.ship_id || 185 == _nt2.ship_id ? (_nt5.houg += 1, _nt5.tais += 1, _nt6 = true, _nt4.raig += 1) : 560 == _nt2.ship_id || 555 == _nt2.ship_id || 318 == _nt2.ship_id ? (_nt5.houg += 1, _nt5.tais += 2, _nt6 = true, _nt4.raig += 1, _nt4.kaih += 1) : 508 == _nt2.ship_id || 509 == _nt2.ship_id ? (_nt5.houg += 1, _nt6 = true, _nt4.raig += 2, _nt4.kaih += 2) : 888 == _nt2.ship_id ? (_nt5.houg += 2, _nt5.tais += 2, _nt6 = true, _nt4.raig += 2, _nt4.kaih += 2) : 883 == _nt2.ship_id && (_nt5.houg += 1, _nt5.tais += 2, _nt6 = true, _nt4.raig += 3, _nt4.kaih += 4), 0 == _nt6) return _nt4;
            var _nt7 = _nt2.get_slotnums(373);
            return _nt4.add(_nt5.multiply(_nt7)), _nt4;
        };
    },
    76201: (_nt8, _nt9, _nta) => {
        'use strict';
        var _ntb = null;
        defineModule(_nt9);
        Object.defineProperty(_nt9, '__esModule', {
            'value': true
        }), _nt9.getSlot374PersonalEffect = void 0;
        var _ntc = _nta(74496);
        _nt9.getSlot374PersonalEffect = function(_ntd) {
            var _nte = null,
                _ntf = new _ntc.SlotItemEffectModel(),
                _ntg = new _ntc.SlotItemEffectModel(),
                _nth = false;
            if ('しょうかく' == _ntd.yomi ? (_ntg.houg += 3, _nth = true, _ntf.raig += 3, _ntf.kaih += 3) : 'ずいかく' == _ntd.yomi ? (_ntg.houg += 2, _nth = true, _ntf.raig += 3, _ntf.kaih += 4) : 'たいほう' == _ntd.yomi ? (_ntg.houg += 2, _nth = true, _ntf.raig += 3, _ntf.kaih += 2) : 'じゅんよう' != _ntd.yomi && 'ひよう' != _ntd.yomi || (_ntg.houg += 1, _nth = true, _ntf.raig += 2, _ntf.kaih += 2), 108 == _ntd.ship_id || 109 == _ntd.ship_id ? (_ntg.houg += 1, _nth = true, _ntf.raig += 1) : 291 == _ntd.ship_id || 292 == _ntd.ship_id ? (_ntg.houg += 1, _ntg.tais += 1, _nth = true, _ntf.raig += 1) : 296 == _ntd.ship_id || 297 == _ntd.ship_id ? (_ntg.houg += 1, _ntg.tais += 1, _nth = true, _ntf.raig += 1, _ntf.kaih += 1) : 116 == _ntd.ship_id || 74 == _ntd.ship_id ? (_ntg.houg += 1, _ntg.tais += 1, _nth = true) : 117 == _ntd.ship_id || 282 == _ntd.ship_id || 185 == _ntd.ship_id ? (_ntg.houg += 1, _ntg.tais += 2, _nth = true, _ntf.raig += 1, _ntf.kaih += 1) : 560 == _ntd.ship_id || 555 == _ntd.ship_id || 318 == _ntd.ship_id ? (_ntg.houg += 1, _ntg.tais += 3, _nth = true, _ntf.raig += 1, _ntf.kaih += 2) : 508 == _ntd.ship_id || 509 == _ntd.ship_id ? (_ntg.houg += 1, _ntg.tais += 2, _nth = true, _ntf.raig += 2, _ntf.kaih += 3) : 888 == _ntd.ship_id ? (_ntg.houg += 3, _ntg.tais += 3, _nth = true, _ntf.raig += 2, _ntf.kaih += 3) : 883 == _ntd.ship_id && (_ntg.houg += 2, _ntg.tais += 3, _nth = true, _ntf.raig += 3, _ntf.kaih += 5), 0 == _nth) return _ntf;
            var _nti = _ntd.get_slotnums(374);
            return _ntf.add(_ntg.multiply(_nti)), _ntf;
        };
    },
    24931: (_ntj, _ntk, _ntl) => {
        'use strict';
        var _ntm = null;
        defineModule(_ntk);
        Object.defineProperty(_ntk, '__esModule', {
            'value': true
        }), _ntk.getSlot375PersonalEffect = void 0;
        var _ntn = _ntl(74496);
        _ntk.getSlot375PersonalEffect = function(_nto) {
            var _ntp = null,
                _ntq = new _ntn.SlotItemEffectModel(),
                _ntr = new _ntn.SlotItemEffectModel(),
                _nts = false;
            if (69 != _nto.ctype && 83 != _nto.ctype && 84 != _nto.ctype && 105 != _nto.ctype && 116 != _nto.ctype && 118 != _nto.ctype || (_ntr.tyku += 3, _ntr.houg += 3, _ntr.kaih += 3, _ntr.tais += 3, _nts = true), 'かが' == _nto.yomi && (_ntr.tyku += 1, _ntr.houg += 1, _ntr.kaih += 1, _ntr.tais += 1, _nts = true), 0 == _nts) return _ntq;
            var _ntt = _nto.get_slotnums(375);
            return _ntq.add(_ntr.multiply(_ntt)), _ntq;
        };
    },
    60978: (_ntu, _ntv, _ntw) => {
        'use strict';
        var _ntx = null;
        defineModule(_ntv);
        Object.defineProperty(_ntv, '__esModule', {
            'value': true
        }), _ntv.getSlot376PersonalEffect = void 0;
        var _nty = _ntw(74496);
        _ntv.getSlot376PersonalEffect = function(_ntz) {
            var _nu0 = null,
                _nu1 = new _nty.SlotItemEffectModel(),
                _nu2 = new _nty.SlotItemEffectModel(),
                _nu3 = false;
            if ('アメリカ' == _ntz.getCountryName() ? (_nu2.houg += 2, _nu2.raig += 4, _nu3 = true) : 67 == _ntz.ctype || 78 == _ntz.ctype || 82 == _ntz.ctype || 88 == _ntz.ctype || 108 == _ntz.ctype || 112 == _ntz.ctype ? (_nu2.houg += 1, _nu2.raig += 2, _nu3 = true) : 96 == _ntz.ctype && (_nu2.houg += 1, _nu2.raig += 1, _nu3 = true), 0 == _nu3) return _nu1;
            var _nu4 = _ntz.get_slotnums(376);
            return _nu1.add(_nu2.multiply(_nu4)), _nu1;
        };
    },
    74312: (_nu5, _nu6, _nu7) => {
        'use strict';
        var _nu8 = null;
        defineModule(_nu6);
        Object.defineProperty(_nu6, '__esModule', {
            'value': true
        }), _nu6.getSlot377PersonalEffect = void 0;
        var _nu9 = _nu7(74496);
        _nu6.getSlot377PersonalEffect = function(_nua) {
            var _nub = null,
                _nuc = new _nu9.SlotItemEffectModel();
            return 'アメリカ' == _nua.getCountryName() ? (_nuc.tais += 2, _nuc.kaih += 1, 629 == _nua.ship_id && (_nuc.tais += 1, _nuc.kaih += 2)) : 67 != _nua.ctype && 78 != _nua.ctype && 82 != _nua.ctype && 88 != _nua.ctype && 108 != _nua.ctype && 112 != _nua.ctype && 96 != _nua.ctype || (_nuc.tais += 1, _nuc.kaih += 1), 651 != _nua.ship_id && 656 != _nua.ship_id || (_nuc.tais += 1, _nuc.kaih += 2), _nuc;
        };
    },
    54350: (_nud, _nue, _nuf) => {
        'use strict';
        var _nug = null;
        defineModule(_nue);
        Object.defineProperty(_nue, '__esModule', {
            'value': true
        }), _nue.getSlot378PersonalEffect = void 0;
        var _nuh = _nuf(74496);
        _nue.getSlot378PersonalEffect = function(_nui) {
            var _nuj = null,
                _nuk = new _nuh.SlotItemEffectModel();
            return 'アメリカ' == _nui.getCountryName() ? (_nuk.tais += 3, _nuk.kaih += 1, 629 == _nui.ship_id && (_nuk.tais += 1, _nuk.kaih += 1)) : 67 == _nui.ctype || 78 == _nui.ctype || 82 == _nui.ctype || 88 == _nui.ctype || 108 == _nui.ctype || 112 == _nui.ctype ? (_nuk.tais += 2, _nuk.kaih += 1) : 96 == _nui.ctype && (_nuk.tais += 1, _nuk.kaih += 1), 651 != _nui.ship_id && 656 != _nui.ship_id || (_nuk.tais += 1, _nuk.kaih += 1), _nuk;
        };
    },
    26262: function(_nul, _num, _nun) {
        'use strict';
        var _nuo = null;
        var _nup = this && this.__importDefault || function(_nuq) {
            var _nur = null;
            return _nuq && _nuq.__esModule ? _nuq : {
                'default': _nuq
            };
        };
        defineModule(_num);
        Object.defineProperty(_num, '__esModule', {
            'value': true
        }), _num.getSlot379PersonalEffect = void 0;
        var _nus = _nun(74496),
            _nut = _nup(_nun(18622));
        _num.getSlot379PersonalEffect = function(_nuu) {
            var _nuv = null,
                _nuw = new _nus.SlotItemEffectModel(),
                _nux = false,
                _nuy = new _nus.SlotItemEffectModel();
            if (1 == _nuu.stype ? (_nuy.tyku += 2, _nuy.houg += 1, _nux = true) : 21 != _nuu.stype && 16 != _nuu.stype || (_nuy.tyku += 1, _nuy.houg += 1, _nux = true), 66 == _nuu.ctype || 28 == _nuu.ctype ? (_nuy.houg += 1, _nuy.tyku += 2, _nux = true) : 101 == _nuu.ctype && (_nuy.tyku += 2, _nuy.houg += 1, _nuw.tyku += 2, _nuw.houg += 2, _nux = true), 'ゆら' == _nuu.yomi || 'なか' == _nuu.yomi || 'きぬ' == _nuu.yomi || 'いすず' == _nuu.yomi ? (_nuy.houg += 2, _nux = true) : 'おおい' != _nuu.yomi && 'きたかみ' != _nuu.yomi || (_nuy.tyku += 2, _nuy.houg += 2, _nux = true), 'ゆら' != _nuu.yomi && 'なか' != _nuu.yomi && 'きぬ' != _nuu.yomi && 'いすず' != _nuu.yomi && 'ゆうばり' != _nuu.yomi || (_nuy.tais += 1, _nux = true), 'てんりゅう' != _nuu.yomi && 'たつた' != _nuu.yomi && 'ゆうばり' != _nuu.yomi || (_nuy.houg += 1, _nux = true), 488 == _nuu.ship_id ? (_nuy.tyku += 4, _nux = true) : 220 == _nuu.ship_id ? (_nuy.tyku += 3, _nux = true) : 23 == _nuu.ship_id ? (_nuy.tyku += 2, _nux = true) : 160 == _nuu.ship_id || 487 == _nuu.ship_id || 141 == _nuu.ship_id ? (_nuy.tyku += 3, _nux = true) : 224 == _nuu.ship_id || 289 == _nuu.ship_id || 219 == _nuu.ship_id || 56 == _nuu.ship_id || 113 == _nuu.ship_id || 22 == _nuu.ship_id ? (_nuy.tyku += 2, _nux = true) : 651 != _nuu.ship_id && 656 != _nuu.ship_id || (_nuy.tyku += 3, _nuy.houg += 3, 656 == _nuu.ship_id && (_nuy.kaih += 3, _nuy.tais += 2), _nux = true), 488 != _nuu.ship_id && 160 != _nuu.ship_id && 487 != _nuu.ship_id && 141 != _nuu.ship_id || (_nuy.tais += 1, _nux = true), 477 != _nuu.ship_id && 478 != _nuu.ship_id && 624 != _nuu.ship_id || (_nuy.tais += 2, _nux = true), 477 != _nuu.ship_id && 478 != _nuu.ship_id && 624 != _nuu.ship_id && 622 != _nuu.ship_id || (_nuy.tyku += 2, _nux = true), 652 != _nuu.ship_id && 657 != _nuu.ship_id && 547 != _nuu.ship_id && 146 != _nuu.ship_id || (_nuw.houg += 2), 652 != _nuu.ship_id && 657 != _nuu.ship_id && 547 != _nuu.ship_id && 146 != _nuu.ship_id || (_nuw.tyku += 2), _nux) {
                var _nuz = _nuu.get_slotnums(379);
                _nuw.add(_nuy.multiply(_nuz));
            }
            var _nv0 = new _nus.SlotItemEffectModel(),
                _nv1 = false;
            16 == _nuu.stype || 3 == _nuu.stype || 4 == _nuu.stype || 21 == _nuu.stype ? (_nv0.houg += 1, _nv0.kaih += 2, _nv1 = true) : 1 == _nuu.stype && (_nv0.houg += 1, _nv0.kaih += 4, _nv1 = true), 66 == _nuu.ctype || 28 == _nuu.ctype || 21 == _nuu.ctype || 34 == _nuu.ctype ? (_nv0.houg += 2, _nv0.kaih += 3, _nv1 = true) : 101 == _nuu.ctype && (_nv0.houg += 4, _nv0.kaih += 3, _nv1 = true), 488 == _nuu.ship_id || 651 == _nuu.ship_id || 656 == _nuu.ship_id ? (_nv0.houg += 2, _nv0.kaih += 2, _nv1 = true) : 487 == _nuu.ship_id || 160 == _nuu.ship_id || 141 == _nuu.ship_id || 118 == _nuu.ship_id || 119 == _nuu.ship_id ? (_nv0.houg += 1, _nv0.kaih += 1, _nv1 = true) : 652 != _nuu.ship_id && 657 != _nuu.ship_id && 547 != _nuu.ship_id && 146 != _nuu.ship_id || (_nv0.houg += 1, _nv0.kaih += 1, _nv1 = true);
            var _nv2 = new _nus.SlotItemEffectModel(),
                _nv3 = false;
            if (656 == _nuu.ship_id && (_nv2.tyku += 3, _nv2.kaih += 2, _nv3 = true), _nv1 || _nv3) {
                for (var _nv4 = 0, _nv5 = 0, _nv6 = 0, _nv7 = _nuu.have_slot_ids(); _nv6 < _nv7.length; _nv6++) {
                    var _nv8 = _nv7[_nv6],
                        _nv9 = _nut.default.model.slot.getMst(_nv8),
                        _nva = _nv9.equipType;
                    12 != _nva && 13 != _nva || (_nv9.sakuteki >= 5 && (_nv4 += _nuu.get_slotnums(parseInt(_nv8))), _nv9.taiku >= 2 && (_nv5 += _nuu.get_slotnums(parseInt(_nv8))));
                }
                _nv1 && _nv4 > 0 && _nuw.add(_nv0), _nv3 && _nv5 > 0 && _nuw.add(_nv2);
            }
            return _nuw;
        };
    },
    45530: function(_nvb, _nvc, _nvd) {
        'use strict';
        var _nve = null;
        var _nvf = this && this.__importDefault || function(_nvg) {
            var _nvh = null;
            return _nvg && _nvg.__esModule ? _nvg : {
                'default': _nvg
            };
        };
        defineModule(_nvc);
        Object.defineProperty(_nvc, '__esModule', {
            'value': true
        }), _nvc.getSlot380PersonalEffect = void 0;
        var _nvi = _nvd(74496),
            _nvj = _nvf(_nvd(18622));
        _nvc.getSlot380PersonalEffect = function(_nvk) {
            var _nvl = null,
                _nvm = new _nvi.SlotItemEffectModel(),
                _nvn = false,
                _nvo = new _nvi.SlotItemEffectModel();
            if (21 != _nvk.stype && 16 != _nvk.stype || (_nvo.tyku += 2, _nvo.houg += 1, _nvn = true), 101 == _nvk.ctype && (_nvo.tyku += 2, _nvo.houg += 1, _nvn = true, _nvm.tyku += 2, _nvm.houg += 2), 'ゆら' == _nvk.yomi || 'なか' == _nvk.yomi || 'きぬ' == _nvk.yomi || 'いすず' == _nvk.yomi ? (_nvo.houg += 2, _nvn = true) : 'おおい' != _nvk.yomi && 'きたかみ' != _nvk.yomi || (_nvo.tyku += 2, _nvo.houg += 3, _nvn = true), 'ゆら' != _nvk.yomi && 'なか' != _nvk.yomi && 'きぬ' != _nvk.yomi && 'いすず' != _nvk.yomi && 'ゆうばり' != _nvk.yomi || (_nvo.tais += 1, _nvn = true), 'てんりゅう' != _nvk.yomi && 'たつた' != _nvk.yomi && 'ゆうばり' != _nvk.yomi || (_nvo.houg += 1, _nvn = true), 488 == _nvk.ship_id ? (_nvo.tyku += 4, _nvn = true) : 220 == _nvk.ship_id ? (_nvo.tyku += 3, _nvn = true) : 23 == _nvk.ship_id ? (_nvo.tyku += 2, _nvn = true) : 160 == _nvk.ship_id || 487 == _nvk.ship_id || 141 == _nvk.ship_id ? (_nvo.tyku += 3, _nvn = true) : 224 == _nvk.ship_id || 289 == _nvk.ship_id || 219 == _nvk.ship_id || 56 == _nvk.ship_id || 113 == _nvk.ship_id || 22 == _nvk.ship_id ? (_nvo.tyku += 2, _nvn = true) : 651 == _nvk.ship_id || 656 == _nvk.ship_id ? (_nvo.tyku += 3, _nvo.houg += 3, _nvn = true) : 407 != _nvk.ship_id && 665 != _nvk.ship_id || (_nvo.houg += 2, _nvo.tyku += 2, _nvn = true, _nvm.houg += 1, _nvm.tyku += 1, _nvm.kaih += 2), 488 != _nvk.ship_id && 160 != _nvk.ship_id && 487 != _nvk.ship_id && 141 != _nvk.ship_id || (_nvo.tais += 1, _nvn = true), 477 != _nvk.ship_id && 478 != _nvk.ship_id && 624 != _nvk.ship_id || (_nvo.tais += 2, _nvn = true), 477 != _nvk.ship_id && 478 != _nvk.ship_id && 624 != _nvk.ship_id && 622 != _nvk.ship_id || (_nvo.tyku += 2, _nvn = true), 652 != _nvk.ship_id && 657 != _nvk.ship_id || (_nvo.houg += 3, _nvn = true), 547 != _nvk.ship_id && 146 != _nvk.ship_id || (_nvm.houg += 2), 652 != _nvk.ship_id && 657 != _nvk.ship_id && 547 != _nvk.ship_id && 146 != _nvk.ship_id || (_nvm.tyku += 2), _nvn) {
                var _nvp = _nvk.get_slotnums(380);
                _nvm.add(_nvo.multiply(_nvp));
            }
            var _nvq = new _nvi.SlotItemEffectModel(),
                _nvr = false,
                _nvs = new _nvi.SlotItemEffectModel(),
                _nvt = false,
                _nvu = false;
            if (16 != _nvk.stype && 3 != _nvk.stype && 4 != _nvk.stype && 21 != _nvk.stype || (_nvq.houg += 2, _nvq.kaih += 1, _nvr = true), 101 == _nvk.ctype && (_nvq.houg += 4, _nvq.kaih += 3, _nvr = true), 488 != _nvk.ship_id && 487 != _nvk.ship_id && 160 != _nvk.ship_id && 141 != _nvk.ship_id && 118 != _nvk.ship_id && 119 != _nvk.ship_id && 651 != _nvk.ship_id && 656 != _nvk.ship_id || (_nvq.houg += 1, _nvq.kaih += 2, _nvr = true), 652 == _nvk.ship_id || 657 == _nvk.ship_id || 547 == _nvk.ship_id || 146 == _nvk.ship_id ? (_nvq.houg += 1, _nvq.kaih += 3, _nvr = true) : 407 != _nvk.ship_id && 665 != _nvk.ship_id || (_nvu = true, _nvr = true, _nvq.houg += 2, _nvq.kaih += 1, _nvt = true, _nvs.houg += 1, _nvs.tyku += 2, _nvs.kaih += 1), _nvr || _nvu) {
                for (var _nvv = 0, _nvw = 0, _nvx = 0, _nvy = _nvk.have_slot_ids(); _nvx < _nvy.length; _nvx++) {
                    var _nvz = _nvy[_nvx],
                        _nw0 = _nvj.default.model.slot.getMst(_nvz),
                        _nw1 = _nw0.equipType;
                    12 == _nw1 || 13 == _nw1 ? _nw0.sakuteki >= 5 && (_nvv += _nvk.get_slotnums(parseInt(_nvz))) : 21 == _nw1 && (_nvw += _nvk.get_slotnums(parseInt(_nvz)));
                }
                _nvr && _nvv > 0 && _nvm.add(_nvq), _nvt && _nvw > 0 && _nvm.add(_nvs);
            }
            return _nvm;
        };
    },
    44053: (_nw2, _nw3, _nw4) => {
        'use strict';
        var _nw5 = null;
        defineModule(_nw3);
        Object.defineProperty(_nw3, '__esModule', {
            'value': true
        }), _nw3.getSlot381PersonalEffect = void 0;
        var _nw6 = _nw4(74496);
        _nw3.getSlot381PersonalEffect = function(_nw7) {
            var _nw8 = null,
                _nw9 = new _nw6.SlotItemEffectModel(),
                _nwa = false,
                _nwb = new _nw6.SlotItemEffectModel(),
                _nwc = 0;
            if ('アメリカ' == _nw7.getCountryName() && (_nwb.houg += 1, 102 == _nw7.ctype && (_nwb.houg += 1), _nwa = true, _nwc = 1), 0 == _nwa) return _nw9;
            var _nwd = _nw7.get_slotnums(381);
            if (_nw9.add(_nwb.multiply(_nwd)), 0 == _nwc) return _nw9;
            var _nwe = _nw7.get_each_level_nums(381),
                _nwf = 0;
            return _nwe.map(function(_nwg, _nwh) {
                _nwh >= 6 && (_nwf += _nwg);
            }), 1 == _nwc && (_nw9.houg += 1 * _nwf), _nw9;
        };
    },
    65441: function(_nwi, _nwj, _nwk) {
        'use strict';
        var _nwl = null;
        var _nwm = this && this.__importDefault || function(_nwn) {
            var _nwo = null;
            return _nwn && _nwn.__esModule ? _nwn : {
                'default': _nwn
            };
        };
        defineModule(_nwj);
        Object.defineProperty(_nwj, '__esModule', {
            'value': true
        }), _nwj.getSlot382PersonalEffect = void 0;
        var _nwp = _nwk(74496),
            _nwq = _nwm(_nwk(18622));
        _nwj.getSlot382PersonalEffect = function(_nwr) {
            var _nws = null,
                _nwt = new _nwp.SlotItemEffectModel(),
                _nwu = false,
                _nwv = new _nwp.SlotItemEffectModel(),
                _nww = false,
                _nwx = new _nwp.SlotItemEffectModel(),
                _nwy = new _nwp.SlotItemEffectModel(),
                _nwz = {},
                _nx0 = 2,
                _nx1 = [];
            1 == _nwr.stype && (_nwv.tyku += 2, _nwv.kaih += 2, _nwv.tais += 1, _nwu = true, _nwx.houg += 2, _nwx.kaih += 3, _nwy.tyku += 2, _nwy.kaih += 3, _nww = true, _nx0 = 1), 66 != _nwr.ctype && 28 != _nwr.ctype && 101 != _nwr.ctype || (_nwv.tyku += 2, _nwv.kaih += 1, _nwu = true, _nwx.houg += 1, _nwx.kaih += 2, _nwy.tyku += 2, _nwy.kaih += 2, _nww = true, _nx0 = 1), 'ゆら' != _nwr.yomi && 'なか' != _nwr.yomi && 'きぬ' != _nwr.yomi || (_nwv.tyku += 1, _nwu = true), 488 == _nwr.ship_id || 220 == _nwr.ship_id ? (_nwv.kaih += 1, _nwu = true, 488 == _nwr.ship_id && (_nwx.houg += 1, _nwx.kaih += 1, _nwy.tyku += 2, _nwy.kaih += 2, _nww = true, _nx0 = 1)) : 160 == _nwr.ship_id || 224 == _nwr.ship_id ? (_nwv.kaih += 1, _nwu = true, 160 == _nwr.ship_id && (_nwx.houg += 1, _nwx.kaih += 1, _nwy.tyku += 2, _nwy.kaih += 2, _nww = true)) : 487 == _nwr.ship_id || 289 == _nwr.ship_id ? (_nwv.kaih += 1, _nwu = true, 487 == _nwr.ship_id && (_nwx.houg += 1, _nwx.kaih += 1, _nwy.tyku += 2, _nwy.kaih += 2, _nww = true)) : 656 == _nwr.ship_id ? (_nwv.tyku += 3, _nwv.kaih += 2, _nwu = true, _nwx.houg += 2, _nwx.kaih += 2, _nwy.tyku += 3, _nwy.kaih += 2, _nww = true, _nx0 = 1) : 145 == _nwr.ship_id || 961 == _nwr.ship_id ? _nx0 = 1 : 979 == _nwr.ship_id && (_nwv.houg += 1, _nwv.tyku += 1, _nwv.houm += 1, _nwv.kaih += 1, _nwz[509] = new _nwp.SlotItemEffectModel(), _nwz[509].houm += 1, _nwu = true, _nx1[1] = 1);
            for (var _nx2 = 0, _nx3 = 0, _nx4 = 0, _nx5 = _nwr.have_slot_ids(); _nx4 < _nx5.length; _nx4++) {
                var _nx6 = _nx5[_nx4],
                    _nx7 = _nwq.default.model.slot.getMst(_nx6),
                    _nx8 = _nx7.equipType;
                12 != _nx8 && 13 != _nx8 || (_nx7.sakuteki >= 5 && (_nx2 += _nwr.get_slotnums(parseInt(_nx6))), _nx7.taiku >= 2 && (_nx3 += _nwr.get_slotnums(parseInt(_nx6))));
            }
            for (var _nx9 = [], _nxa = function(_nxb) {
                    var _nxc = null;
                    if (null == _nwr.have_slots_dict[_nxb]) return 'continue';
                    var _nxd = _nwr.get_each_level_nums(_nxb);
                    null == _nx9[_nxb] && (_nx9[_nxb] = []), _nxd.forEach(function(_nxe, _nxf) {
                        var _nxg = null;
                        for (var _nxh = 1; _nxh <= _nwr.SLOT_LEVEL_MAX; _nxh++) null == _nx9[_nxb][_nxh] && (_nx9[_nxb][_nxh] = 0), _nxf >= _nxh && (_nx9[_nxb][_nxh] += _nxe);
                    });
                }, _nxi = 0, _nxj = [509]; _nxi < _nxj.length; _nxi++) {
                _nxa(_nxj[_nxi]);
            }
            var _nxk = 0,
                _nxl = 0,
                _nxm = 0,
                _nxn = 0,
                _nxo = 0,
                _nxp = 0,
                _nxq = 0,
                _nxr = 0,
                _nxs = 0,
                _nxt = 0;
            null != _nx9[509] && (_nxk = _nx9[509][1], _nxl = _nx9[509][2], _nxm = _nx9[509][3], _nxn = _nx9[509][4], _nxo = _nx9[509][5], _nxp = _nx9[509][6], _nxq = _nx9[509][7], _nxr = _nx9[509][8], _nxs = _nx9[509][9], _nxt = _nx9[509][10], null != _nx1[1] && (_nxm >= 1 && (_nwt.kaih += 1 * _nxm), _nxo >= 1 && (_nwt.houg += 1 * _nxo), _nxq >= 1 && (_nwt.tyku += 2 * _nxq), _nxs >= 1 && (_nwt.houm += 1 * _nxs), _nxt >= 1 && (_nwt.houg += 1 * _nxt)), 1 == _nx0 ? (_nxk >= 1 && (_nwt.tyku += 1 * _nxk), _nxl >= 1 && (_nwt.kaih += 2 * _nxl), _nxn >= 1 && (_nwt.houg += 1 * _nxn), _nxp >= 1 && (_nwt.tyku += 1 * _nxp), _nxr >= 1 && (_nwt.houm += 1 * _nxr), _nxt >= 1 && (_nwt.tyku += 1 * _nxt)) : 2 == _nx0 && (_nxl >= 1 && (_nwt.tyku += 1 * _nxl), _nxn >= 1 && (_nwt.kaih += 2 * _nxn), _nxp >= 1 && (_nwt.houg += 1 * _nxp), _nxr >= 1 && (_nwt.tyku += 1 * _nxr), _nxt >= 1 && (_nwt.houm += 1 * _nxt)));
            var _nxu = _nwr.get_slotnums(509),
                _nxv = _nxu + _nwr.get_slotnums(382);
            return _nwu && (_nwt.add(_nwv.multiply(_nxv)), Object.keys(_nwz).forEach(function(_nxw) {
                var _nxx = null,
                    _nxy = parseInt(_nxw);
                if (null != _nwr.have_slots_dict[_nxy]) {
                    var _nxz = _nwr.get_slotnums(_nxy);
                    _nwt.add(_nwz[_nxy].multiply(_nxz));
                }
            })), 3 != _nwr.stype && 21 != _nwr.stype && 4 != _nwr.stype || _nxl >= 1 && (_nx2 > 0 && (_nwt.houg += 1, _nwt.kaih += 1), _nx3 > 0 && (_nwt.tyku += 2, _nwt.kaih += 1)), 145 == _nwr.ship_id ? _nxl >= 1 && (_nx2 > 0 && (_nwt.houg += 1, _nwt.tyku += 1, _nwt.kaih += 2), _nx3 > 0 && (_nwt.tyku += 4, _nwt.kaih += 2)) : 961 != _nwr.ship_id && 979 != _nwr.ship_id || _nxu > 0 && (_nx2 > 0 && (_nwt.houg += 2, _nwt.tyku += 2, _nwt.kaih += 3), _nx3 > 0 && (_nwt.houg += 1, _nwt.tyku += 5, _nwt.kaih += 3)), _nww && _nx2 > 0 && _nwt.add(_nwx), _nww && _nx3 > 0 && _nwt.add(_nwy), _nwt;
        };
    },
    33258: (_ny0, _ny1, _ny2) => {
        'use strict';
        var _ny3 = null;
        defineModule(_ny1);
        Object.defineProperty(_ny1, '__esModule', {
            'value': true
        }), _ny1.getSlot383PersonalEffect = void 0;
        var _ny4 = _ny2(74496);
        _ny1.getSlot383PersonalEffect = function(_ny5) {
            var _ny6 = null,
                _ny7 = new _ny4.SlotItemEffectModel(),
                _ny8 = false,
                _ny9 = new _ny4.SlotItemEffectModel(),
                _nya = _ny5.get_each_level_over_nums([383]).slot[383];
            if (44 == _ny5.ctype && (_ny9.raig += 2, _ny8 = true, _nya[4] > 0 && (_ny7.raig += 1), _nya[6] > 0 && (_ny7.houm += 1)), 'い58' == _ny5.yomi && (_ny9.raig += 1, _ny8 = true), 636 == _ny5.ship_id ? (_ny9.raig += 3, _ny8 = true) : 607 == _ny5.ship_id && (_ny9.raig += 4, _ny8 = true), _nya[8] > 0 && (_ny7.raig += 1), _nya[10] > 0 && (_ny7.houm += 1), 'い58' != _ny5.yomi && 'い47' != _ny5.yomi || _nya[5] > 0 && (_ny7.houm += 1), 0 == _ny8) return _ny7;
            var _nyb = _ny5.get_slotnums(383);
            return _ny7.add(_ny9.multiply(_nyb)), _ny7;
        };
    },
    92168: (_nyc, _nyd, _nye) => {
        'use strict';
        var _nyf = null;
        defineModule(_nyd);
        Object.defineProperty(_nyd, '__esModule', {
            'value': true
        }), _nyd.getSlot384PersonalEffect = void 0;
        var _nyg = _nye(74496);
        _nyd.getSlot384PersonalEffect = function(_nyh) {
            var _nyi = null,
                _nyj = new _nyg.SlotItemEffectModel(),
                _nyk = false,
                _nyl = new _nyg.SlotItemEffectModel();
            44 == _nyh.ctype && (_nyl.kaih += 3, _nyk = true), 'い58' == _nyh.yomi && (_nyl.kaih += 2, _nyk = true), 636 == _nyh.ship_id ? (_nyl.kaih += 3, _nyk = true) : 607 == _nyh.ship_id && (_nyl.kaih += 4, _nyk = true);
            var _nym = _nyh.get_slotnums(384);
            _nyk && _nyj.add(_nyl.multiply(_nym));
            var _nyn = _nym,
                _nyo = _nyh.get_slotnums(213),
                _nyp = _nyh.get_slotnums(214),
                _nyq = _nyh.get_slotnums(383);
            return _nyn > 0 && _nyo + _nyp + _nyq > 0 && (_nyj.raig += 3, _nyj.kaih += 2), _nyj;
        };
    },
    85975: (_nyr, _nys, _nyt) => {
        'use strict';
        var _nyu = null;
        defineModule(_nys);
        Object.defineProperty(_nys, '__esModule', {
            'value': true
        }), _nys.getSlot385PersonalEffect = void 0;
        var _nyv = _nyt(74496);
        _nys.getSlot385PersonalEffect = function(_nyw) {
            var _nyx = null,
                _nyy = new _nyv.SlotItemEffectModel(),
                _nyz = false,
                _nz0 = new _nyv.SlotItemEffectModel(),
                _nz1 = 0;
            if ('アメリカ' == _nyw.getCountryName() && (_nz0.houg += 1, 102 == _nyw.ctype || 107 == _nyw.ctype ? (_nz0.houg += 1, _nz0.souk += 1) : 93 == _nyw.ctype && (_nz0.houg += 1), _nyz = true, _nz1 = 1), 8 == _nyw.stype && (_nz0.houg += 1, _nyz = true), 0 == _nyz) return _nyy;
            var _nz2 = _nyw.get_slotnums(385);
            if (_nyy.add(_nz0.multiply(_nz2)), 0 == _nz1) return _nyy;
            var _nz3 = _nyw.get_each_level_nums(385),
                _nz4 = 0;
            return _nz3.forEach(function(_nz5, _nz6) {
                _nz6 >= 6 && (_nz4 += _nz5);
            }), 1 == _nz1 && (_nyy.houg += 1 * _nz4, _nyy.souk += 1 * _nz3[10]), _nyy;
        };
    },
    98467: (_nz7, _nz8, _nz9) => {
        'use strict';
        var _nza = null;
        defineModule(_nz8);
        Object.defineProperty(_nz8, '__esModule', {
            'value': true
        }), _nz8.getSlot386PersonalEffect = void 0;
        var _nzb = _nz9(74496);
        _nz8.getSlot386PersonalEffect = function(_nzc) {
            var _nzd = null,
                _nze = new _nzb.SlotItemEffectModel(),
                _nzf = false,
                _nzg = new _nzb.SlotItemEffectModel(),
                _nzh = 0;
            if ('アメリカ' == _nzc.getCountryName() && (_nzg.houg += 1, _nzf = true, _nzh = 1), 0 == _nzf) return _nze;
            var _nzi = _nzc.get_slotnums(386);
            if (_nze.add(_nzg.multiply(_nzi)), 0 == _nzh) return _nze;
            var _nzj = _nzc.get_each_level_nums(386),
                _nzk = 0,
                _nzl = 0;
            return _nzj.forEach(function(_nzm, _nzn) {
                _nzn >= 2 && (_nzk += _nzm), _nzn >= 7 && (_nzl += _nzm);
            }), 1 == _nzh && (_nze.houg += 1 * _nzk, _nze.houg += 1 * _nzl), _nze;
        };
    },
    88348: (_nzo, _nzp, _nzq) => {
        'use strict';
        var _nzr = null;
        defineModule(_nzp);
        Object.defineProperty(_nzp, '__esModule', {
            'value': true
        }), _nzp.getSlot387PersonalEffect = void 0;
        var _nzs = _nzq(74496);
        _nzp.getSlot387PersonalEffect = function(_nzt) {
            var _nzu = null,
                _nzv = new _nzs.SlotItemEffectModel(),
                _nzw = false,
                _nzx = new _nzs.SlotItemEffectModel(),
                _nzy = 0;
            if ('アメリカ' == _nzt.getCountryName() && (_nzx.houg += 1, _nzw = true, _nzy = 1), 0 == _nzw) return _nzv;
            var _nzz = _nzt.get_slotnums(387);
            if (_nzv.add(_nzx.multiply(_nzz)), 0 == _nzy) return _nzv;
            var _o00 = _nzt.get_each_level_nums(387),
                _o01 = 0,
                _o02 = 0;
            return _o00.forEach(function(_o03, _o04) {
                _o04 >= 2 && (_o01 += _o03), _o04 >= 7 && (_o02 += _o03);
            }), 1 == _nzy && (_nzv.houg += 1 * _o01, _nzv.houg += 1 * _o02), _nzv;
        };
    },
    21097: (_o05, _o06, _o07) => {
        'use strict';
        var _o08 = null;
        defineModule(_o06);
        Object.defineProperty(_o06, '__esModule', {
            'value': true
        }), _o06.getSlot389PersonalEffect = void 0;
        var _o09 = _o07(74496);
        _o06.getSlot389PersonalEffect = function(_o0a) {
            var _o0b = null,
                _o0c = new _o09.SlotItemEffectModel(),
                _o0d = false,
                _o0e = new _o09.SlotItemEffectModel();
            if (594 == _o0a.ship_id || 599 == _o0a.ship_id) _o0e.houg += 2, _o0e.kaih += 2, _o0d = true;
            else {
                if (698 == _o0a.ship_id || 610 == _o0a.ship_id) _o0e.houg += 3, _o0e.kaih += 2, _o0d = true;
                else 646 == _o0a.ship_id && (_o0e.houg += 4, _o0e.tais += 4, _o0e.kaih += 3, _o0d = true, _o0a.get_type3_nums(25) > 0 && (_o0c.houg += 3, _o0c.tais += 6), _o0a.get_slotnums(326) + _o0a.get_slotnums(327) > 0 && (_o0c.houg += 5, _o0c.tais += 4));
            }
            if ('アメリカ' == _o0a.getCountryName() && (_o0e.houg += 2, _o0e.tais += 3, _o0e.kaih += 1, _o0d = true), 0 == _o0d) return _o0c;
            var _o0f = _o0a.get_slotnums(389);
            return _o0c.add(_o0e.multiply(_o0f)), _o0c;
        };
    },
    43607: (_o0g, _o0h, _o0i) => {
        'use strict';
        var _o0j = null;
        defineModule(_o0h);
        Object.defineProperty(_o0h, '__esModule', {
            'value': true
        }), _o0h.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _o0k = _o0i(74496);
        _o0h.getSlot38cmFourBarrelGunPersonalEffect = function(_o0l) {
            var _o0m = null,
                _o0n = new _o0k.SlotItemEffectModel(),
                _o0o = _o0l.get_slotnums(245),
                _o0p = _o0l.get_slotnums(246),
                _o0q = _o0l.get_slotnums(468),
                _o0r = _o0o + _o0p + _o0q,
                _o0s = 0,
                _o0t = 0;
            if (79 != _o0l.ctype) return _o0n;
            _o0n.houg += 2 * _o0r, _o0n.houm += 1 * _o0r, _o0q >= 1 && (_o0n.houg += 1 * _o0q, _o0t = 1), _o0s = 1;
            var _o0u = _o0l.get_slotnums(247),
                _o0v = _o0l.get_slotnums(471) + _o0l.get_slotnums(538);
            if (1 == _o0s && _o0u >= 1 && (_o0n.kaih += 2 * _o0u, _o0n.houg += 2 * _o0u, _o0n.houm += 2 * _o0u), 0 == _o0t) return _o0n;
            var _o0w = _o0l.haveSlotLevelNumOver(468),
                _o0x = _o0l.haveSlotLevelNumOver(471),
                _o0y = _o0l.haveSlotLevelNumOver(538);
            if (1 == _o0t && _o0q > 0) {
                var _o0z = _o0w[4],
                    _o10 = _o0w[8],
                    _o11 = _o0w[9],
                    _o12 = _o0w[10],
                    _o13 = _o0x[7],
                    _o14 = _o0x[9];
                _o0z >= 1 && (_o0n.houg += 1 * _o0z, _o0n.houm += 1 * _o0z), _o10 >= 1 && (_o0n.houg += 1 * _o10, _o0n.houm += 1 * _o10), _o11 >= 1 && (_o0n.tyku += 1 * _o11, _o0v >= 1 && (_o0n.houm += 2 * _o0v), _o0u >= 1 && (_o0n.kaih += 1 * _o0u, _o0n.houm += 1 * _o0u)), _o12 >= 1 && (_o0n.houm += 1 * _o12, _o0v >= 1 && (_o0n.houm += 1 * _o0v, _o0y[7] >= 1 && (_o0n.houm += 1 * _o0y[7]), _o0y[8] >= 1 && (_o0n.kaih += 1 * _o0y[8]), _o0y[9] >= 1 && (_o0n.houm += 1 * _o0y[9]), _o13 >= 1 && (_o0n.houm += 1 * _o13), _o14 >= 1 && (_o0n.kaih += 1 * _o14)), _o0u >= 1 && (_o0n.houg += 1 * _o0u, _o0n.kaih += 1 * _o0u, _o0n.houm += 1 * _o0u));
            }
            return _o0n;
        };
    },
    2380: (_o15, _o16, _o17) => {
        'use strict';
        var _o18 = null;
        defineModule(_o16);
        Object.defineProperty(_o16, '__esModule', {
            'value': true
        }), _o16.getSlot38cmTwinGunPersonalEffect = void 0;
        var _o19 = _o17(74496);
        _o16.getSlot38cmTwinGunPersonalEffect = function(_o1a) {
            var _o1b = null,
                _o1c = new _o19.SlotItemEffectModel(),
                _o1d = false,
                _o1e = new _o19.SlotItemEffectModel(),
                _o1f = 0,
                _o1g = _o1a.get_slotnums(76),
                _o1h = _o1a.get_slotnums(114),
                _o1i = _o1a.get_slotnums(124);
            if ('ドイツ' == _o1a.getCountryName() && (_o1e.houg += 1, _o1d = true, _o1f = 1, _o1i >= 1 && (_o1c.kaih += 1 * _o1i)), 0 == _o1d) return _o1c;
            var _o1j = _o1g + _o1h;
            _o1c.add(_o1e.multiply(_o1j));
            var _o1k = _o1a.have_level_num_over_dict[114];
            return 1 == _o1f && null != _o1k && (_o1k[7] >= 1 && (_o1c.houg += 1 * _o1k[7]), _o1k[8] >= 1 && (_o1c.houm += 1 * _o1k[8]), _o1k[9] >= 1 && (_o1c.souk += 1 * _o1k[9]), _o1k[10] >= 1 && (_o1c.houg += 1 * _o1k[10])), _o1c;
        };
    },
    37273: (_o1l, _o1m, _o1n) => {
        'use strict';
        var _o1o = null;
        defineModule(_o1m);
        Object.defineProperty(_o1m, '__esModule', {
            'value': true
        }), _o1m.getSlot390PersonalEffect = void 0;
        var _o1p = _o1n(74496);
        _o1m.getSlot390PersonalEffect = function(_o1q) {
            var _o1r = null,
                _o1s = new _o1p.SlotItemEffectModel(),
                _o1t = false,
                _o1u = new _o1p.SlotItemEffectModel(),
                _o1v = 0;
            if ('アメリカ' == _o1q.getCountryName() && (_o1u.houg += 1, _o1t = true, _o1v = 1), 102 == _o1q.ctype || 107 == _o1q.ctype ? (_o1u.houg += 1, _o1u.souk += 1, _o1t = true) : 93 == _o1q.ctype && (_o1u.houg += 1, _o1t = true), 8 == _o1q.stype && (_o1u.houg += 1, _o1t = true), 0 == _o1t) return _o1s;
            var _o1w = _o1q.get_slotnums(390);
            if (_o1s.add(_o1u.multiply(_o1w)), 0 == _o1v) return _o1s;
            var _o1x = _o1q.get_each_level_nums(390),
                _o1y = 0,
                _o1z = 0;
            return _o1x.forEach(function(_o20, _o21) {
                _o21 >= 3 && (_o1y += _o20), _o21 >= 6 && (_o1z += _o20);
            }), 1 == _o1v && (_o1s.houg += 1 * _o1y, _o1s.kaih += 1 * _o1z, _o1s.souk += 1 * _o1x[10]), _o1s;
        };
    },
    72694: (_o22, _o23, _o24) => {
        'use strict';
        var _o25 = null;
        defineModule(_o23);
        Object.defineProperty(_o23, '__esModule', {
            'value': true
        }), _o23.getSlot391PersonalEffect = void 0;
        var _o26 = _o24(74496);
        _o23.getSlot391PersonalEffect = function(_o27) {
            var _o28 = null,
                _o29 = new _o26.SlotItemEffectModel(),
                _o2a = false,
                _o2b = new _o26.SlotItemEffectModel();
            if ('しょうかく' == _o27.yomi || 'ずいかく' == _o27.yomi ? (_o2b.houg += 1, _o2a = true) : 'じゅんよう' != _o27.yomi && 'ひよう' != _o27.yomi || (_o2b.houg += 1, _o2a = true), 116 == _o27.ship_id || 185 == _o27.ship_id || 282 == _o27.ship_id ? (_o2b.houg += 1, _o2a = true) : 117 == _o27.ship_id || 318 == _o27.ship_id || 883 == _o27.ship_id || 888 == _o27.ship_id ? (_o2b.houg += 1, _o29.kaih += 1, _o2a = true) : 560 != _o27.ship_id && 555 != _o27.ship_id || (_o2b.houg += 1, _o2b.kaih += 1, _o2a = true), 0 == _o2a) return _o29;
            var _o2c = _o27.get_slotnums(391);
            return _o29.add(_o2b.multiply(_o2c)), _o29;
        };
    },
    62067: (_o2d, _o2e, _o2f) => {
        'use strict';
        var _o2g = null;
        defineModule(_o2e);
        Object.defineProperty(_o2e, '__esModule', {
            'value': true
        }), _o2e.getSlot392PersonalEffect = void 0;
        var _o2h = _o2f(74496);
        _o2e.getSlot392PersonalEffect = function(_o2i) {
            var _o2j = null,
                _o2k = new _o2h.SlotItemEffectModel(),
                _o2l = false,
                _o2m = new _o2h.SlotItemEffectModel();
            if ('しょうかく' == _o2i.yomi || 'ずいかく' == _o2i.yomi ? (_o2m.houg += 2, _o2m.kaih += 1, _o2l = true) : 'じゅんよう' != _o2i.yomi && 'ひよう' != _o2i.yomi || (_o2m.houg += 1, _o2m.kaih += 1, _o2l = true), 116 == _o2i.ship_id || 185 == _o2i.ship_id || 282 == _o2i.ship_id ? (_o2m.houg += 2, _o2m.kaih += 1, _o2l = true) : 117 == _o2i.ship_id || 318 == _o2i.ship_id || 883 == _o2i.ship_id || 888 == _o2i.ship_id ? (_o2m.houg += 2, _o2m.kaih += 2, _o2l = true) : 560 != _o2i.ship_id && 555 != _o2i.ship_id || (_o2m.houg += 3, _o2m.kaih += 2, _o2l = true), 0 == _o2l) return _o2k;
            var _o2n = _o2i.get_slotnums(392);
            return _o2k.add(_o2m.multiply(_o2n)), _o2k;
        };
    },
    87817: function(_o2o, _o2p, _o2q) {
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
        }), _o2p.getSlot397PersonalEffect = void 0;
        var _o2v = _o2q(74496),
            _o2w = _o2s(_o2q(18622));
        _o2p.getSlot397PersonalEffect = function(_o2x) {
            var _o2y = null,
                _o2z = new _o2v.SlotItemEffectModel(),
                _o30 = false,
                _o31 = new _o2v.SlotItemEffectModel(),
                _o32 = 0,
                _o33 = 0,
                _o34 = false;
            if (651 == _o2x.ship_id ? (_o31.houg += 5, _o31.tyku += 2, _o31.kaih += 1, _o30 = true, _o34 = true, _o32 = 1, _o33 = 1) : 656 == _o2x.ship_id && (_o31.houg += 3, _o31.tyku += 1, _o31.kaih += 1, _o30 = true, _o34 = true, _o32 = 1), 0 == _o30) return _o2z;
            var _o35 = _o2x.get_slotnums(397);
            _o2z.add(_o31.multiply(_o35));
            var _o36 = 0,
                _o37 = _o2x.get_each_level_nums(397),
                _o38 = 0;
            if (_o34) {
                _o37.forEach(function(_o39, _o3a) {
                    _o3a >= 4 && (_o38 += _o39);
                });
                for (var _o3b = 0, _o3c = _o2x.have_slot_ids(); _o3b < _o3c.length; _o3b++) {
                    var _o3d = _o3c[_o3b],
                        _o3e = _o2w.default.model.slot.getMst(_o3d),
                        _o3f = _o3e.equipType;
                    12 != _o3f && 13 != _o3f || (_o3e.sakuteki >= 5 && (_o36 += _o2x.get_slotnums(parseInt(_o3d))), _o3e.taiku >= 2 && _o2x.get_slotnums(parseInt(_o3d)));
                }
            }
            return 1 == _o32 && _o36 > 0 && (_o2z.houg += 3, _o2z.kaih += 3), 1 == _o33 && (_o2z.houg += 4 * _o38, _o2z.kaih += 1 * _o38), _o2z;
        };
    },
    93526: function(_o3g, _o3h, _o3i) {
        'use strict';
        var _o3j = null;
        var _o3k = this && this.__importDefault || function(_o3l) {
            var _o3m = null;
            return _o3l && _o3l.__esModule ? _o3l : {
                'default': _o3l
            };
        };
        defineModule(_o3h);
        Object.defineProperty(_o3h, '__esModule', {
            'value': true
        }), _o3h.getSlot398PersonalEffect = void 0;
        var _o3n = _o3i(74496),
            _o3o = _o3k(_o3i(18622));
        _o3h.getSlot398PersonalEffect = function(_o3p) {
            var _o3q = null,
                _o3r = new _o3n.SlotItemEffectModel(),
                _o3s = false,
                _o3t = new _o3n.SlotItemEffectModel(),
                _o3u = 0,
                _o3v = 0,
                _o3w = false;
            if (651 == _o3p.ship_id ? (_o3t.houg += 4, _o3t.tyku += 4, _o3t.kaih += 2, _o3s = true, _o3w = true, _o3u = 1, _o3v = 1) : 656 == _o3p.ship_id && (_o3t.houg += 3, _o3t.tyku += 2, _o3t.kaih += 2, _o3s = true, _o3w = true, _o3u = 1, _o3v = 2), 0 == _o3s) return _o3r;
            var _o3x = _o3p.get_slotnums(398);
            _o3r.add(_o3t.multiply(_o3x));
            var _o3y = 0,
                _o3z = 0,
                _o40 = _o3p.get_each_level_nums(398),
                _o41 = 0;
            if (_o3w) {
                _o40.forEach(function(_o42, _o43) {
                    _o43 >= 4 && (_o41 += _o42);
                });
                for (var _o44 = 0, _o45 = _o3p.have_slot_ids(); _o44 < _o45.length; _o44++) {
                    var _o46 = _o45[_o44],
                        _o47 = _o3o.default.model.slot.getMst(_o46),
                        _o48 = _o47.equipType;
                    12 != _o48 && 13 != _o48 || (_o47.sakuteki >= 5 && (_o3y += _o3p.get_slotnums(parseInt(_o46))), _o47.taiku >= 2 && (_o3z += _o3p.get_slotnums(parseInt(_o46))));
                }
            }
            return 1 == _o3u && (_o3y > 0 && (_o3r.houg += 3, _o3r.kaih += 3), _o3z > 0 && (_o3r.tyku += 3, _o3r.kaih += 3)), 1 == _o3v ? (_o3r.houg += 3 * _o41, _o3r.kaih += 2 * _o41) : 2 == _o3v && (_o3r.houg += 2 * _o41, _o3r.kaih += 1 * _o41), _o3r;
        };
    },
    33084: (_o49, _o4a, _o4b) => {
        'use strict';
        var _o4c = null;
        defineModule(_o4a);
        Object.defineProperty(_o4a, '__esModule', {
            'value': true
        }), _o4a.getSlot399PersonalEffect = void 0;
        var _o4d = _o4b(74496);
        _o4a.getSlot399PersonalEffect = function(_o4e) {
            var _o4f = null,
                _o4g = new _o4d.SlotItemEffectModel(),
                _o4h = false,
                _o4i = new _o4d.SlotItemEffectModel(),
                _o4j = 0;
            if (108 == _o4e.ctype && (_o4i.houg += 1, _o4i.kaih += 2, _o4j = 1, _o4h = true), 0 == _o4h) return _o4g;
            var _o4k = _o4e.get_slotnums(399);
            if (_o4g.add(_o4i.multiply(_o4k)), 0 == _o4j) return _o4g;
            var _o4l = _o4e.get_each_level_nums(399),
                _o4m = 0,
                _o4n = 0;
            return _o4l.map(function(_o4o, _o4p) {
                _o4p >= 3 && (_o4m += _o4o), _o4p >= 5 && (_o4n += _o4o);
            }), 1 == _o4j && (_o4g.houg += 1 * _o4m, _o4g.houg += 1 * _o4n), _o4g;
        };
    },
    80225: (_o4q, _o4r, _o4s) => {
        'use strict';
        var _o4t = null;
        defineModule(_o4r);
        Object.defineProperty(_o4r, '__esModule', {
            'value': true
        }), _o4r.getSlot3_122PersonalEffect = void 0;
        var _o4u = _o4s(74496);
        _o4r.getSlot3_122PersonalEffect = function(_o4v) {
            var _o4w = null,
                _o4x = new _o4u.SlotItemEffectModel(),
                _o4y = false,
                _o4z = new _o4u.SlotItemEffectModel(),
                _o50 = 0;
            if (54 == _o4v.ctype && (_o4z.houg += 1, _o4z.tyku += 2, _o4z.kaih += 1, _o4y = true, _o50 = 1, 968 == _o4v.ship_id && (_o4z.houg += 1, _o4z.houm += 1, _o4z.kaih += 1)), 0 == _o4y) return _o4x;
            var _o51 = _o4v.get_slotnums(3) + _o4v.get_slotnums(122) + _o4v.get_slotnums(533);
            if (_o4x.add(_o4z.multiply(_o51)), 0 == _o50) return _o4x;
            var _o52 = _o4v.get_each_level_over_nums([122]).slot[122],
                _o53 = _o4v.have_level_num_over_dict[533];
            return 1 == _o50 && (null != _o52 && (_o52[6] >= 1 && (_o4x.kaih += 1 * _o52[6]), _o52[7] >= 1 && (_o4x.tyku += 1 * _o52[7]), _o52[8] >= 1 && (_o4x.houm += 1 * _o52[8]), _o52[9] >= 1 && (_o4x.kaih += 1 * _o52[9]), _o52[10] >= 1 && (_o4x.houg += 1 * _o52[10])), null != _o53 && (_o53[2] >= 1 && (_o4x.tyku += 1 * _o53[2]), _o53[4] >= 1 && (_o4x.houg += 1 * _o53[4]), _o53[6] >= 1 && (_o4x.houm += 1 * _o53[6]), _o53[8] >= 1 && (_o4x.tyku += 1 * _o53[8]), _o53[10] >= 1 && (_o4x.kaih += 1 * _o53[10])), 968 == _o4v.ship_id && null != _o53 && (_o53[1] >= 1 && (_o4x.kaih += 1 * _o53[1]), _o53[3] >= 1 && (_o4x.tyku += 1 * _o53[3]), _o53[5] >= 1 && (_o4x.houm += 1 * _o53[5]), _o53[7] >= 1 && (_o4x.kaih += 1 * _o53[7]), _o53[9] >= 1 && (_o4x.houg += 1 * _o53[9]))), _o4x;
        };
    },
    97831: (_o54, _o55, _o56) => {
        'use strict';
        var _o57 = null;
        defineModule(_o55);
        Object.defineProperty(_o55, '__esModule', {
            'value': true
        }), _o55.getSlot400PersonalEffect = void 0;
        var _o58 = _o56(74496);
        _o55.getSlot400PersonalEffect = function(_o59) {
            var _o5a = null,
                _o5b = new _o58.SlotItemEffectModel(),
                _o5c = false,
                _o5d = new _o58.SlotItemEffectModel(),
                _o5e = 0,
                _o5f = false;
            if (147 != _o59.ship_id && 73 != _o59.ctype && 81 != _o59.ctype || (_o5f = true), _o5f && (_o5d.kaih += 2, _o5d.raig += 5, _o5d.houg += 1, _o5d.souk += 1, _o5c = true, _o5e = 1), 0 == _o5c) return _o5b;
            var _o5g = _o59.get_slotnums(400);
            return _o5b.add(_o5d.multiply(_o5g)), _o59.get_slotnums(282) > 0 && 1 == _o5e && (_o5b.houg += 2), _o5b;
        };
    },
    4050: function(_o5h, _o5i, _o5j) {
        'use strict';
        var _o5k = null;
        var _o5l = this && this.__importDefault || function(_o5m) {
            var _o5n = null;
            return _o5m && _o5m.__esModule ? _o5m : {
                'default': _o5m
            };
        };
        defineModule(_o5i);
        Object.defineProperty(_o5i, '__esModule', {
            'value': true
        }), _o5i.getSlot407PersonalEffect = void 0;
        var _o5o = _o5j(74496),
            _o5p = _o5l(_o5j(18622));
        _o5i.getSlot407PersonalEffect = function(_o5q) {
            var _o5r = null,
                _o5s = new _o5o.SlotItemEffectModel(),
                _o5t = false,
                _o5u = new _o5o.SlotItemEffectModel(),
                _o5v = 0;
            if (662 != _o5q.ship_id && 663 != _o5q.ship_id && 668 != _o5q.ship_id || (_o5u.houg += 4, _o5u.tyku += 2, _o5u.kaih += 1, _o5t = true, _o5v = 1), 0 == _o5t) return _o5s;
            var _o5w = _o5q.get_slotnums(407);
            _o5s.add(_o5u.multiply(_o5w));
            for (var _o5x = 0, _o5y = 0, _o5z = 0, _o60 = _o5q.have_slot_ids(); _o5z < _o60.length; _o5z++) {
                var _o61 = _o60[_o5z],
                    _o62 = _o5p.default.model.slot.getMst(_o61),
                    _o63 = _o62.equipType;
                12 != _o63 && 13 != _o63 || (_o62.sakuteki >= 5 && (_o5x += _o5q.get_slotnums(parseInt(_o61))), _o62.taiku >= 2 && (_o5y += _o5q.get_slotnums(parseInt(_o61))));
            }
            return _o5x >= 1 && 1 == _o5v && (_o5s.houg += 2, _o5s.kaih += 2, _o5s.raig += 2), _o5y >= 1 && 1 == _o5v && (_o5s.tyku += 2, _o5s.kaih += 3), _o5s;
        };
    },
    78466: (_o64, _o65, _o66) => {
        'use strict';
        var _o67 = null;
        defineModule(_o65);
        Object.defineProperty(_o65, '__esModule', {
            'value': true
        }), _o65.getSlot408PersonalEffect = void 0;
        var _o68 = _o66(74496);
        _o65.getSlot408PersonalEffect = function(_o69) {
            var _o6a = null,
                _o6b = new _o68.SlotItemEffectModel(),
                _o6c = false,
                _o6d = new _o68.SlotItemEffectModel();
            if ('しんしゅうまる' == _o69.yomi ? (_o6d.houg += 2, _o6d.saku += 2, _o6d.kaih += 2, _o6c = true) : 'あきつまる' == _o69.yomi && (_o6d.houg += 1, _o6d.saku += 1, _o6d.kaih += 1, _o6d.tais += 1, _o6c = true), 2 == _o69.stype && (_o6d.houg += 1, _o6d.saku += 1, _o6d.kaih -= 5, _o6c = true), 0 == _o6c) return _o6b;
            var _o6e = _o69.get_slotnums(408);
            return _o6b.add(_o6d.multiply(_o6e)), _o6b;
        };
    },
    40061: (_o6f, _o6g, _o6h) => {
        'use strict';
        var _o6i = null;
        defineModule(_o6g);
        Object.defineProperty(_o6g, '__esModule', {
            'value': true
        }), _o6g.getSlot409PersonalEffect = void 0;
        var _o6j = _o6h(74496);
        _o6g.getSlot409PersonalEffect = function(_o6k) {
            var _o6l = null,
                _o6m = new _o6j.SlotItemEffectModel(),
                _o6n = false,
                _o6o = new _o6j.SlotItemEffectModel();
            if ('しんしゅうまる' == _o6k.yomi ? (_o6o.houg += 1, _o6o.tyku += 2, _o6o.kaih += 3, _o6n = true) : 'あきつまる' == _o6k.yomi && (_o6o.houg += 1, _o6o.tyku += 1, _o6o.kaih += 2, _o6o.tais += 1, _o6n = true), 0 == _o6n) return _o6m;
            var _o6p = _o6k.get_slotnums(409);
            return _o6m.add(_o6o.multiply(_o6p)), _o6m;
        };
    },
    79988: (_o6q, _o6r, _o6s) => {
        'use strict';
        var _o6t = null;
        defineModule(_o6r);
        Object.defineProperty(_o6r, '__esModule', {
            'value': true
        }), _o6r.getSlot411PersonalEffect = void 0;
        var _o6u = _o6s(74496);
        _o6r.getSlot411PersonalEffect = function(_o6v) {
            var _o6w = null,
                _o6x = new _o6u.SlotItemEffectModel(),
                _o6y = new _o6u.SlotItemEffectModel(),
                _o6z = false,
                _o70 = 0;
            if (2 == _o6v.stype && (_o6y.kaih -= 9, _o6z = true), 3 != _o6v.stype && 4 != _o6v.stype || (_o6y.kaih -= 7, _o6z = true), 21 == _o6v.stype && (_o6y.kaih -= 6, _o6z = true), 5 != _o6v.stype && 6 != _o6v.stype || (_o6y.kaih -= 5, _o6z = true), 593 == _o6v.ship_id && (_o6x.houg += 1, _o6x.tyku += 2, _o6x.kaih += 3), 151 == _o6v.ship_id || 411 == _o6v.ship_id || 412 == _o6v.ship_id || 593 == _o6v.ship_id || 954 == _o6v.ship_id ? (_o6x.houg += 3, _o6x.tyku += 4, _o70 = 1) : 541 != _o6v.ship_id && 573 != _o6v.ship_id && 553 != _o6v.ship_id && 554 != _o6v.ship_id || (_o6x.houg += 2, _o6x.tyku += 2, _o70 = 1), _o6z) {
                var _o71 = _o6v.get_slotnums(411);
                _o6x.add(_o6y.multiply(_o71));
            }
            if (0 == _o70) return _o6x;
            var _o72 = _o6v.get_each_level_nums(411),
                _o73 = 0;
            return _o70 > 0 && _o72.forEach(function(_o74, _o75) {
                _o75 >= 4 && (_o73 += _o74);
            }), 1 == _o70 && (_o73 >= 1 && (_o6x.houg += 1, _o6x.tyku += 1), _o72[10] >= 1 && (_o6x.houg += 1, _o6x.tyku += 1)), _o6x;
        };
    },
    74428: (_o76, _o77, _o78) => {
        'use strict';
        var _o79 = null;
        defineModule(_o77);
        Object.defineProperty(_o77, '__esModule', {
            'value': true
        }), _o77.getSlot412PersonalEffect = void 0;
        var _o7a = _o78(74496);
        _o77.getSlot412PersonalEffect = function(_o7b) {
            var _o7c = null,
                _o7d = new _o7a.SlotItemEffectModel(),
                _o7e = false,
                _o7f = 0,
                _o7g = new _o7a.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o7b.ctype) >= 0 ? (_o7d.houg += 2, _o7d.raig += 4, _o7d.tais += 2, _o7g.kaih += 3, _o7g.saku += 1, _o7e = true, _o7f = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o7b.ctype) >= 0 ? (_o7d.houg += 3, _o7d.raig += 3, _o7g.kaih += 2, _o7g.saku += 3, _o7e = true, _o7f = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o7b.ctype) >= 0 && (_o7d.houg += 1, _o7g.kaih += 1, _o7g.saku += 1, _o7e = true), 0 == _o7e) return _o7d;
            var _o7h = _o7b.get_slotnums(412);
            if (_o7d.add(_o7g.multiply(_o7h)), 0 == _o7f) return _o7d;
            var _o7i = _o7b.get_each_level_nums(412),
                _o7j = 0,
                _o7k = 0;
            return _o7f > 0 && _o7i.forEach(function(_o7l, _o7m) {
                _o7m >= 4 && (_o7j += _o7l), _o7m >= 8 && (_o7k += _o7l);
            }), 1 == _o7f && (_o7j > 0 && (_o7d.houg += 1), _o7k > 0 && (_o7d.raig += 1)), _o7d;
        };
    },
    2631: (_o7n, _o7o, _o7p) => {
        'use strict';
        var _o7q = null;
        defineModule(_o7o);
        Object.defineProperty(_o7o, '__esModule', {
            'value': true
        }), _o7o.getSlot413PersonalEffect = void 0;
        var _o7r = _o7p(74496);
        _o7o.getSlot413PersonalEffect = function(_o7s) {
            var _o7t = null,
                _o7u = new _o7r.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o7s.ctype) >= 0 ? (_o7u.houg += 2, _o7u.raig += 2, _o7u.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o7s.ctype) >= 0 && (_o7u.houg += 4, _o7u.raig += 2, _o7u.kaih += 2), 38 == _o7s.ctype || 54 == _o7s.ctype ? (_o7u.houg += 2, _o7u.raig += 3, _o7u.kaih += 3) : 4 == _o7s.ctype || 20 == _o7s.ctype || 16 == _o7s.ctype || 41 == _o7s.ctype || 52 == _o7s.ctype ? (_o7u.houg += 1, _o7u.raig += 2, _o7u.kaih += 2) : 21 != _o7s.ctype && 34 != _o7s.ctype || (_o7u.tyku += 2, _o7u.raig += 1, _o7u.kaih += 1), 'なか' == _o7s.yomi || 'ゆら' == _o7s.yomi || 'やはぎ' == _o7s.yomi || 'のしろ' == _o7s.yomi || 'はまなみ' == _o7s.yomi || 'しまかぜ' == _o7s.yomi || 'きよしも' == _o7s.yomi || 'はつしも' == _o7s.yomi ? (_o7u.tyku += 1, _o7u.kaih += 1) : 'じんつう' != _o7s.yomi && 'せんだい' != _o7s.yomi && 'ながなみ' != _o7s.yomi && 'はつしも' != _o7s.yomi && 'てるづき' != _o7s.yomi || (_o7u.houg += 1, _o7u.raig += 1), 543 == _o7s.ship_id ? (_o7u.houg += 1, _o7u.kaih += 1) : 159 == _o7s.ship_id && (_o7u.houg += 2), _o7u;
        };
    },
    27177: (_o7v, _o7w, _o7x) => {
        'use strict';
        var _o7y = null;
        defineModule(_o7w);
        Object.defineProperty(_o7w, '__esModule', {
            'value': true
        }), _o7w.getSlot415PersonalEffect = void 0;
        var _o7z = _o7x(74496);
        _o7w.getSlot415PersonalEffect = function(_o80) {
            var _o81 = null,
                _o82 = new _o7z.SlotItemEffectModel(),
                _o83 = [];
            if ('アメリカ' == _o80.getCountryName() && (_o82.saku += 1, _o82.tais += 1, _o83.push(1)), 95 != _o80.ctype && 99 != _o80.ctype && 106 != _o80.ctype && 110 != _o80.ctype && 121 != _o80.ctype || (_o82.houg += 1, _o83.push(2)), 0 == _o83.length) return _o82;
            var _o84 = _o80.get_each_level_nums(415),
                _o85 = 0,
                _o86 = 0,
                _o87 = 0;
            return _o83.length > 0 && (_o84.forEach(function(_o88, _o89) {
                _o89 >= 5 && (_o85 += _o88), _o89 >= 3 && (_o86 += _o88), _o89 >= 8 && (_o87 += _o88);
            }), _o83.forEach(function(_o8a) {
                var _o8b = null;
                1 == _o8a ? _o85 >= 1 && (_o82.kaih += 1) : 2 == _o8a && (_o86 >= 1 && (_o82.kaih += 1), _o87 >= 1 && (_o82.houg += 1));
            })), _o82;
        };
    },
    53908: (_o8c, _o8d, _o8e) => {
        'use strict';
        var _o8f = null;
        defineModule(_o8d);
        Object.defineProperty(_o8d, '__esModule', {
            'value': true
        }), _o8d.getSlot419PersonalEffect = void 0;
        var _o8g = _o8e(74496);
        _o8d.getSlot419PersonalEffect = function(_o8h) {
            var _o8i = null,
                _o8j = new _o8g.SlotItemEffectModel(),
                _o8k = false,
                _o8l = new _o8g.SlotItemEffectModel(),
                _o8m = 0;
            if ('アメリカ' == _o8h.getCountryName() && (_o8l.houg += 2, _o8k = true, _o8m = 1), 0 == _o8k) return _o8j;
            var _o8n = _o8h.get_slotnums(419);
            if (_o8j.add(_o8l.multiply(_o8n)), 0 == _o8m) return _o8j;
            var _o8o = _o8h.get_each_level_nums(419),
                _o8p = 0,
                _o8q = 0;
            return _o8m > 0 && _o8o.forEach(function(_o8r, _o8s) {
                _o8s >= 2 && (_o8p += _o8r), _o8s >= 7 && (_o8q += _o8r);
            }), 1 == _o8m && (_o8p >= 1 && (_o8j.houg += 1 * _o8p), _o8q >= 1 && (_o8j.houg += 1 * _o8q)), _o8j;
        };
    },
    79813: (_o8t, _o8u, _o8v) => {
        'use strict';
        var _o8w = null;
        defineModule(_o8u);
        Object.defineProperty(_o8u, '__esModule', {
            'value': true
        }), _o8u.getSlot420PersonalEffect = void 0;
        var _o8x = _o8v(74496);
        _o8u.getSlot420PersonalEffect = function(_o8y) {
            var _o8z = null,
                _o90 = new _o8x.SlotItemEffectModel(),
                _o91 = false,
                _o92 = new _o8x.SlotItemEffectModel(),
                _o93 = 0,
                _o94 = _o8y.getCountryName();
            if ('アメリカ' != _o94 && 67 != _o8y.ctype && 78 != _o8y.ctype && 82 != _o8y.ctype && 88 != _o8y.ctype && 108 != _o8y.ctype && 112 != _o8y.ctype || (_o92.houg += 1, _o93 = 1, _o91 = true), 84 == _o8y.ctype ? (_o92.houg += 1, _o91 = true) : 78 == _o8y.ctype && (_o92.houg -= 1, _o91 = true), 7 == _o8y.stype && (_o92.houg -= 2, _o92.kaih -= 1, _o92.souk -= 2, _o91 = true), 0 == _o91) return _o90;
            var _o95 = _o8y.get_slotnums(420);
            if (_o90.add(_o92.multiply(_o95)), 0 == _o93) return _o90;
            var _o96 = _o8y.get_each_level_nums(420),
                _o97 = 0,
                _o98 = 0,
                _o99 = 0,
                _o9a = 0;
            _o93 > 0 && _o96.forEach(function(_o9b, _o9c) {
                _o9c >= 3 && (_o97 += _o9b), _o9c >= 7 && (_o98 += _o9b), _o9c >= 8 && (_o99 += _o9b), _o9c >= 9 && (_o9a += _o9b);
            });
            var _o9d = _o96[10];
            return 1 == _o93 && (_o97 >= 1 && (_o90.houg += 1 * _o97), 'アメリカ' == _o94 && (_o98 >= 1 && (_o90.houm += 1 * _o98), _o99 >= 1 && (_o90.houg += 1 * _o99), _o9a >= 1 && (_o90.houm += 1 * _o9a), _o9d >= 1 && (_o90.houg += 1 * _o9d))), _o90;
        };
    },
    16088: (_o9e, _o9f, _o9g) => {
        'use strict';
        var _o9h = null;
        defineModule(_o9f);
        Object.defineProperty(_o9f, '__esModule', {
            'value': true
        }), _o9f.getSlot421PersonalEffect = void 0;
        var _o9i = _o9g(74496);
        _o9f.getSlot421PersonalEffect = function(_o9j) {
            var _o9k = null,
                _o9l = new _o9i.SlotItemEffectModel(),
                _o9m = false,
                _o9n = new _o9i.SlotItemEffectModel(),
                _o9o = 0,
                _o9p = _o9j.getCountryName();
            if ('アメリカ' != _o9p && 67 != _o9j.ctype && 78 != _o9j.ctype && 82 != _o9j.ctype && 88 != _o9j.ctype && 108 != _o9j.ctype && 112 != _o9j.ctype || (_o9n.houg += 2, _o9m = true, _o9o = 1), 84 == _o9j.ctype ? (_o9n.houg += 1, _o9m = true) : 78 == _o9j.ctype && (_o9n.houg -= 1, _o9m = true), 7 == _o9j.stype && (_o9n.houg -= 2, _o9n.kaih -= 1, _o9n.souk -= 2, _o9m = true), 0 == _o9m) return _o9l;
            var _o9q = _o9j.get_slotnums(421);
            if (_o9l.add(_o9n.multiply(_o9q)), 0 == _o9o) return _o9l;
            var _o9r = _o9j.get_each_level_nums(421),
                _o9s = 0,
                _o9t = 0,
                _o9u = 0,
                _o9v = 0,
                _o9w = 0;
            _o9o > 0 && _o9r.forEach(function(_o9x, _o9y) {
                _o9y >= 5 && (_o9s += _o9x), _o9y >= 6 && (_o9t += _o9x), _o9y >= 7 && (_o9u += _o9x), _o9y >= 8 && (_o9v += _o9x), _o9y >= 9 && (_o9w += _o9x);
            });
            var _o9z = _o9r[10];
            return 1 == _o9o && (_o9s >= 1 && (_o9l.houg += 1 * _o9s), 'アメリカ' == _o9p && (_o9t >= 1 && (_o9l.houm += 1 * _o9t), _o9u >= 1 && (_o9l.houg += 1 * _o9u), _o9v >= 1 && (_o9l.houm += 1 * _o9v), _o9w >= 1 && (_o9l.houg += 1 * _o9w), _o9z >= 1 && (_o9l.houm += 1 * _o9z))), _o9l;
        };
    },
    69939: (_oa0, _oa1, _oa2) => {
        'use strict';
        var _oa3 = null;
        defineModule(_oa1);
        Object.defineProperty(_oa1, '__esModule', {
            'value': true
        }), _oa1.getSlot422PersonalEffect = void 0;
        var _oa4 = _oa2(74496);
        _oa1.getSlot422PersonalEffect = function(_oa5) {
            var _oa6 = null,
                _oa7 = new _oa4.SlotItemEffectModel(),
                _oa8 = false,
                _oa9 = new _oa4.SlotItemEffectModel();
            if ('アメリカ' != _oa5.getCountryName() && 67 != _oa5.ctype && 78 != _oa5.ctype && 82 != _oa5.ctype && 88 != _oa5.ctype && 108 != _oa5.ctype && 112 != _oa5.ctype || (_oa9.houg += 1, _oa9.kaih += 1, _oa8 = true), 84 == _oa5.ctype && (_oa9.houg += 1, _oa9.tyku += 1, _oa8 = true), 707 == _oa5.ship_id && (_oa9.houg += 2, _oa9.kaih += 2, _oa9.tyku += 2, _oa8 = true), 0 == _oa8) return _oa7;
            var _oaa = _oa5.get_slotnums(422);
            return _oa7.add(_oa9.multiply(_oaa)), _oa7;
        };
    },
    33734: (_oab, _oac, _oad) => {
        'use strict';
        var _oae = null;
        defineModule(_oac);
        Object.defineProperty(_oac, '__esModule', {
            'value': true
        }), _oac.getSlot423PersonalEffect = void 0;
        var _oaf = _oad(74496);
        _oac.getSlot423PersonalEffect = function(_oag) {
            var _oah = null,
                _oai = new _oaf.SlotItemEffectModel(),
                _oaj = false,
                _oak = new _oaf.SlotItemEffectModel();
            78 != _oag.ctype && 112 != _oag.ctype || (_oak.houg += 2, _oak.tyku += 2, _oak.kaih += 2, _oak.saku += 2, _oaj = true);
            var _oal = _oag.getCountryName();
            if (67 == _oag.ctype || 78 == _oag.ctype || 82 == _oag.ctype || 88 == _oag.ctype || 108 == _oag.ctype || 112 == _oag.ctype ? (_oak.houg += 2, _oak.tyku += 2, _oak.kaih += 2, _oak.saku += 2, _oaj = true) : 'アメリカ' == _oal && (_oak.houg += 1, _oak.tyku += 1, _oak.kaih += 1, _oak.saku += 1, _oaj = true), 0 == _oaj) return _oai;
            var _oam = _oag.get_slotnums(423);
            return _oai.add(_oak.multiply(_oam)), _oai;
        };
    },
    34432: (_oan, _oao, _oap) => {
        'use strict';
        var _oaq = null;
        defineModule(_oao);
        Object.defineProperty(_oao, '__esModule', {
            'value': true
        }), _oao.getSlot424PersonalEffect = void 0;
        var _oar = _oap(74496);
        _oao.getSlot424PersonalEffect = function(_oas) {
            var _oat = null,
                _oau = new _oar.SlotItemEffectModel(),
                _oav = false,
                _oaw = new _oar.SlotItemEffectModel(),
                _oax = 0;
            67 != _oas.ctype && 78 != _oas.ctype && 82 != _oas.ctype && 88 != _oas.ctype && 108 != _oas.ctype && 112 != _oas.ctype || (_oaw.houg += 2, _oaw.raig += 3, _oav = true, _oax = 1);
            var _oay = _oas.get_slotnums(424);
            _oav && _oau.add(_oaw.multiply(_oay));
            var _oaz = _oas.get_each_level_nums(424),
                _ob0 = 0,
                _ob1 = 0,
                _ob2 = 0;
            _oaz.forEach(function(_ob3, _ob4) {
                _ob4 >= 2 && (_ob0 += _ob3), _ob4 >= 6 && (_ob1 += _ob3), _ob4 >= 8 && (_ob2 += _ob3);
            });
            var _ob5 = _oaz[10];
            return 1 == _oax && (_ob0 >= 1 && (_oau.houg += 1 * _ob0), _ob1 >= 1 && (_oau.houg += 1 * _ob1), _ob2 >= 1 && (_oau.houm += 1 * _ob2)), _ob5 > 0 && (_oau.houm += 1 * _ob5), _oau;
        };
    },
    97423: (_ob6, _ob7, _ob8) => {
        'use strict';
        var _ob9 = null;
        defineModule(_ob7);
        Object.defineProperty(_ob7, '__esModule', {
            'value': true
        }), _ob7.getSlot425PersonalEffect = void 0;
        var _oba = _ob8(74496);
        _ob7.getSlot425PersonalEffect = function(_obb) {
            var _obc = null,
                _obd = new _oba.SlotItemEffectModel(),
                _obe = false,
                _obf = new _oba.SlotItemEffectModel(),
                _obg = 0;
            67 != _obb.ctype && 78 != _obb.ctype && 82 != _obb.ctype && 88 != _obb.ctype && 108 != _obb.ctype && 112 != _obb.ctype || (_obf.houg += 2, _obf.tais += 2, _obf.raig += 1, _obf.saku += 1, _obe = true, _obg = 1);
            var _obh = _obb.get_slotnums(425);
            _obe && _obd.add(_obf.multiply(_obh));
            var _obi = _obb.get_each_level_nums(425),
                _obj = 0,
                _obk = 0,
                _obl = 0,
                _obm = 0,
                _obn = 0,
                _obo = 0;
            _obi.forEach(function(_obp, _obq) {
                _obq >= 2 && (_obj += _obp), _obq >= 4 && (_obk += _obp), _obq >= 6 && (_obl += _obp), _obq >= 7 && (_obm += _obp), _obq >= 8 && (_obn += _obp), _obq >= 9 && (_obo += _obp);
            });
            var _obr = _obi[10];
            return 1 == _obg && (_obj >= 1 && (_obd.tais += 1 * _obj), _obk >= 1 && (_obd.houg += 1 * _obk), _obl >= 1 && (_obd.tais += 1 * _obl), _obm >= 1 && (_obd.houm += 1 * _obm), _obn >= 1 && (_obd.raig += 1 * _obn), _obo >= 1 && (_obd.houg += 1 * _obo), _obr >= 1 && (_obd.tais += 1 * _obr)), _obm >= 1 && (_obd.houg += 1 * _obm), _obn >= 1 && (_obd.tais += 1 * _obn), _obo >= 1 && (_obd.houm += 1 * _obo), _obr >= 1 && (_obd.houm += 1 * _obr), _obd;
        };
    },
    23551: (_obs, _obt, _obu) => {
        'use strict';
        var _obv = null;
        defineModule(_obt);
        Object.defineProperty(_obt, '__esModule', {
            'value': true
        }), _obt.getSlot430PersonalEffect = void 0;
        var _obw = _obu(74496);
        _obt.getSlot430PersonalEffect = function(_obx) {
            var _oby = null,
                _obz = new _obw.SlotItemEffectModel(),
                _oc0 = false,
                _oc1 = new _obw.SlotItemEffectModel(),
                _oc2 = 0;
            if (113 == _obx.ctype && (_oc1.tyku += 1, _oc1.kaih += 1, _oc0 = true), 58 != _obx.ctype && 61 != _obx.ctype && 64 != _obx.ctype && 68 != _obx.ctype && 80 != _obx.ctype && 92 != _obx.ctype && 113 != _obx.ctype && 124 != _obx.ctype || (_oc1.tyku += 2, _oc1.kaih += 1, _oc0 = true, _oc2 = 1), 0 == _oc0) return _obz;
            var _oc3 = _obx.get_slotnums(430);
            if (_obz.add(_oc1.multiply(_oc3)), 0 == _oc2) return _obz;
            var _oc4 = _obx.get_each_level_nums(430),
                _oc5 = 0,
                _oc6 = 0,
                _oc7 = 0;
            if (_oc2 > 0 && _oc4.forEach(function(_oc8, _oc9) {
                    _oc9 >= 2 && (_oc5 += _oc8), _oc9 >= 4 && (_oc6 += _oc8), _oc9 >= 7 && (_oc7 += _oc8);
                }), 1 == _oc2) {
                _oc5 >= 1 && (_obz.kaih += 1 * _oc5), _oc6 >= 1 && (_obz.tyku += 1 * _oc6), _oc7 >= 1 && (_obz.kaih += 1 * _oc7);
                var _oca = _oc4[10];
                _oca >= 1 && (_obz.tyku += 1 * _oca);
            }
            return _obz;
        };
    },
    6173: (_ocb, _occ, _ocd) => {
        'use strict';
        var _oce = null;
        defineModule(_occ);
        Object.defineProperty(_occ, '__esModule', {
            'value': true
        }), _occ.getSlot437PersonalEffect = void 0;
        var _ocf = _ocd(74496);
        _occ.getSlot437PersonalEffect = function(_ocg) {
            var _och = null,
                _oci = new _ocf.SlotItemEffectModel(),
                _ocj = false,
                _ock = new _ocf.SlotItemEffectModel();
            if (285 == _ocg.ship_id ? (_ock.houg += 3, _ock.tyku += 3, _ock.kaih += 4, _ocj = true) : 894 == _ocg.ship_id || 899 == _ocg.ship_id ? (_ock.houg += 4, _ock.tyku += 4, _ock.kaih += 4, _ocj = true) : 196 == _ocg.ship_id || 197 == _ocg.ship_id ? (_ock.houg += 2, _ock.tyku += 2, _ock.kaih += 3, _ocj = true) : 508 == _ocg.ship_id || 509 == _ocg.ship_id || 646 == _ocg.ship_id ? (_ock.houg += 2, _ock.tyku += 2, _ock.kaih += 2, _ocj = true) : 888 != _ocg.ship_id && 883 != _ocg.ship_id && 553 != _ocg.ship_id && 554 != _ocg.ship_id || (_ock.houg += 1, _ock.tyku += 2, _ock.kaih += 2, _ocj = true), 0 == _ocj) return _oci;
            var _ocl = _ocg.get_slotnums(437);
            return _oci.add(_ock.multiply(_ocl)), _oci;
        };
    },
    53709: (_ocm, _ocn, _oco) => {
        'use strict';
        var _ocp = null;
        defineModule(_ocn);
        Object.defineProperty(_ocn, '__esModule', {
            'value': true
        }), _ocn.getSlot438PersonalEffect = void 0;
        var _ocq = _oco(74496);
        _ocn.getSlot438PersonalEffect = function(_ocr) {
            var _ocs = null,
                _oct = new _ocq.SlotItemEffectModel(),
                _ocu = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_ocr.ctype) > -1 && (_oct.tais += 1, _oct.kaih += 1), 160 == _ocr.ship_id || 488 == _ocr.ship_id || 141 == _ocr.ship_id ? (_oct.tais += 1, _oct.kaih += 1) : 145 != _ocr.ship_id && 588 != _ocr.ship_id && 667 != _ocr.ship_id && 578 != _ocr.ship_id && 476 != _ocr.ship_id && 363 != _ocr.ship_id && 961 != _ocr.ship_id || (_ocu = 1), 'うしお' == _ocr.yomi || 'まいかぜ' == _ocr.yomi || 'いそかぜ' == _ocr.yomi || 'はまかぜ' == _ocr.yomi || 'いかづち' == _ocr.yomi || 'やまぐも' == _ocr.yomi || 'うみかぜ' == _ocr.yomi || 'かわかぜ' == _ocr.yomi || 'すずかぜ' == _ocr.yomi ? _oct.tais += 1 : 'しぐれ' != _ocr.yomi && 'やまかぜ' != _ocr.yomi && 'かみかぜ' != _ocr.yomi && 'はるかぜ' != _ocr.yomi && 'みくら' != _ocr.yomi && 'いしがき' != _ocr.yomi || (_oct.tais += 1, _oct.kaih += 1), 0 == _ocu) return _oct;
            var _ocv = _ocr.get_each_level_nums(438),
                _ocw = 0,
                _ocx = 0,
                _ocy = 0,
                _ocz = _ocv[10];
            return _ocu > 0 && _ocv.forEach(function(_od0, _od1) {
                _od1 >= 4 && (_ocw += _od0), _od1 >= 6 && (_ocx += _od0), _od1 >= 8 && (_ocy += _od0);
            }), 1 == _ocu && (_ocw >= 1 && (_oct.tais += 1), _ocx >= 1 && (_oct.kaih += 1), _ocy >= 1 && (_oct.tais += 1), _ocz >= 1 && (_oct.kaih += 1)), _oct;
        };
    },
    99790: (_od2, _od3, _od4) => {
        'use strict';
        var _od5 = null;
        defineModule(_od3);
        Object.defineProperty(_od3, '__esModule', {
            'value': true
        }), _od3.getSlot439PersonalEffect = void 0;
        var _od6 = _od4(74496);
        _od3.getSlot439PersonalEffect = function(_od7) {
            var _od8 = null,
                _od9 = new _od6.SlotItemEffectModel();
            1 != _od7.stype && 2 != _od7.stype && 3 != _od7.stype && 21 != _od7.stype || (_od9.tais += 1, _od9.kaih += 1), 101 != _od7.ctype && 1 != _od7.stype || (_od9.tais += 1);
            var _oda = _od7.getCountryName();
            return 'アメリカ' != _oda && 'イギリス' != _oda || (_od9.tais += 2), _od9;
        };
    },
    18387: (_odb, _odc, _odd) => {
        'use strict';
        var _ode = null;
        defineModule(_odc);
        Object.defineProperty(_odc, '__esModule', {
            'value': true
        }), _odc.getSlot440_441PersonalEffect = void 0;
        var _odf = _odd(74496);
        _odc.getSlot440_441PersonalEffect = function(_odg) {
            var _odh = null,
                _odi = new _odf.SlotItemEffectModel();
            return 114 == _odg.ctype && (_odi.raig += 2), _odi;
        };
    },
    70941: (_odj, _odk, _odl) => {
        'use strict';
        var _odm = null;
        defineModule(_odk);
        Object.defineProperty(_odk, '__esModule', {
            'value': true
        }), _odk.getSlot442_443PersonalEffect = void 0;
        var _odn = _odl(74496);
        _odk.getSlot442_443PersonalEffect = function(_odo) {
            var _odp = null,
                _odq = new _odn.SlotItemEffectModel();
            return 122 == _odo.ctype ? (_odq.raig += 1, _odq.kaih += 2) : 114 == _odo.ctype && (_odq.raig += 2), _odq;
        };
    },
    35025: (_odr, _ods, _odt) => {
        'use strict';
        var _odu = null;
        defineModule(_ods);
        Object.defineProperty(_ods, '__esModule', {
            'value': true
        }), _ods.getSlot447PersonalEffect = void 0;
        var _odv = _odt(74496);
        _ods.getSlot447PersonalEffect = function(_odw) {
            var _odx = null,
                _ody = new _odv.SlotItemEffectModel(),
                _odz = _odw.get_each_level_nums(447),
                _oe0 = 0,
                _oe1 = 0,
                _oe2 = 0,
                _oe3 = 0;
            _odz.forEach(function(_oe4, _oe5) {
                _oe5 >= 2 && (_oe0 += _oe4), _oe5 >= 4 && (_oe1 += _oe4), _oe5 >= 6 && (_oe2 += _oe4), _oe5 >= 8 && (_oe3 += _oe4);
            }), _oe0 >= 1 && (_ody.houg += 1 * _oe0), _oe1 >= 1 && (_ody.tyku += 1 * _oe1), _oe2 >= 1 && (_ody.tais += 1 * _oe2), _oe3 >= 1 && (_ody.kaih += 1 * _oe3);
            var _oe6 = _odz[10];
            _oe6 >= 1 && (_ody.tais += 1 * _oe6);
            var _oe7 = false,
                _oe8 = new _odv.SlotItemEffectModel();
            if (76 == _odw.ctype && (_oe8.houg += 1, _oe8.tais += 1, _oe8.kaih += 2, _oe7 = true), 'うんよう' == _odw.yomi ? (_oe8.houg += 1, _oe8.tais += 1, _oe8.kaih += 1, _oe7 = true) : 'ほうしょう' != _odw.yomi && 'たいげい・りゅうほう' != _odw.yomi || (_oe8.houg += 1, _oe8.tais += 2, _oe8.kaih += 1, _oe7 = true), 0 == _oe7) return _ody;
            894 != _odw.ship_id && 899 != _odw.ship_id || (_oe8.houg += 1, _oe8.kaih += 1, _oe8.tais += 1, _oe8.tyku += 1, _oe7 = true);
            var _oe9 = _odw.get_slotnums(447);
            return _ody.add(_oe8.multiply(_oe9)), _ody;
        };
    },
    96804: (_oea, _oeb, _oec) => {
        'use strict';
        var _oed = null;
        defineModule(_oeb);
        Object.defineProperty(_oeb, '__esModule', {
            'value': true
        }), _oeb.getSlot450PersonalEffect = void 0;
        var _oee = _oec(74496);
        _oeb.getSlot450PersonalEffect = function(_oef) {
            var _oeg = null,
                _oeh = new _oee.SlotItemEffectModel(),
                _oei = false,
                _oej = new _oee.SlotItemEffectModel();
            if (101 == _oef.ctype && (_oej.houg += 1, _oej.tyku += 2, _oej.souk += 1, _oej.kaih += 3, _oei = true), 1 == _oef.stype && (_oej.tyku += 1, _oej.souk += 1, _oej.kaih += 2, _oei = true), 0 == _oei) return _oeh;
            var _oek = _oef.get_slotnums(450);
            return _oeh.add(_oej.multiply(_oek)), _oeh;
        };
    },
    33896: (_oel, _oem, _oen) => {
        'use strict';
        var _oeo = null;
        defineModule(_oem);
        Object.defineProperty(_oem, '__esModule', {
            'value': true
        }), _oem.getSlot451PersonalEffect = void 0;
        var _oep = _oen(74496);
        _oem.getSlot451PersonalEffect = function(_oeq) {
            var _oer = null,
                _oes = new _oep.SlotItemEffectModel(),
                _oet = false,
                _oeu = new _oep.SlotItemEffectModel(),
                _oev = 0;
            if ('あきつまる' == _oeq.yomi ? (_oeu.houg += 1, _oeu.tais += 2, _oet = true, 166 == _oeq.ship_id && (_oev = 2)) : 'やましおまる' == _oeq.yomi && (_oeu.houg += 1, _oeu.tais += 3, _oet = true, _oev = 1), 0 == _oet) return _oes;
            var _oew = _oeq.get_slotnums(451);
            if (_oes.add(_oeu.multiply(_oew)), 0 == _oev) return _oes;
            var _oex = _oeq.get_each_level_nums(451),
                _oey = [];
            return _oev > 0 && _oex.forEach(function(_oez, _of0) {
                var _of1 = null;
                for (var _of2 = 1; _of2 <= _oeq.SLOT_LEVEL_MAX; _of2++) _of0 >= _of2 && (null == _oey[_of2] && (_oey[_of2] = 0), _oey[_of2] += _oez);
            }), 1 == _oev ? (_oey[1] >= 1 && (_oes.houg += 2 * _oey[1]), _oey[2] >= 1 && (_oes.houm += 1 * _oey[2]), _oey[3] >= 1 && (_oes.tais += 1 * _oey[3]), _oey[4] >= 1 && (_oes.houg += 1 * _oey[4]), _oey[6] >= 1 && (_oes.houm += 1 * _oey[6]), _oey[8] >= 1 && (_oes.tais += 1 * _oey[8]), _oey[10] >= 1 && (_oes.houg += 1 * _oey[10])) : 2 == _oev && (_oey[1] >= 1 && (_oes.houg += 1 * _oey[1]), _oey[3] >= 1 && (_oes.tais += 1 * _oey[3]), _oey[5] >= 1 && (_oes.houm += 1 * _oey[5]), _oey[7] >= 1 && (_oes.tais += 1 * _oey[7]), _oey[10] >= 1 && (_oes.houg += 1 * _oey[10])), _oes;
        };
    },
    11031: function(_of3, _of4, _of5) {
        'use strict';
        var _of6 = null;
        var _of7 = this && this.__importDefault || function(_of8) {
            var _of9 = null;
            return _of8 && _of8.__esModule ? _of8 : {
                'default': _of8
            };
        };
        defineModule(_of4);
        Object.defineProperty(_of4, '__esModule', {
            'value': true
        }), _of4.getSlot455PersonalEffect = void 0;
        var _ofa = _of5(74496),
            _ofb = _of7(_of5(18622));
        _of4.getSlot455PersonalEffect = function(_ofc) {
            var _ofd = null,
                _ofe = new _ofa.SlotItemEffectModel(),
                _off = false,
                _ofg = new _ofa.SlotItemEffectModel(),
                _ofh = 0,
                _ofi = _ofc.get_slotnums(455);
            if (1 != _ofc.ctype && 5 != _ofc.ctype && 12 != _ofc.ctype || (_ofg.houg += 2, _ofg.tyku += 1, 12 == _ofc.ctype && (_ofg.houg += 1), 666 == _ofc.ship_id ? (_ofg.houg += 1, _ofg.tais += 1) : 959 == _ofc.ship_id && (_ofg.houg += 2, _ofi >= 2 && (_ofe.houg += 2), _ofi >= 3 && (_ofe.houg += 3)), _ofh = 1, _off = true), 'うらなみ' == _ofc.yomi && (_ofg.houg += 1, 647 == _ofc.ship_id && (_ofg.houg += 1, _ofg.raig += 1, _ofg.tais += 1, _ofg.kaih += 1), _off = true), 0 == _off) return _ofe;
            if (_ofe.add(_ofg.multiply(_ofi)), 0 == _ofh) return _ofe;
            for (var _ofj = 0, _ofk = 0, _ofl = 0, _ofm = _ofc.have_slot_ids(); _ofl < _ofm.length; _ofl++) {
                var _ofn = _ofm[_ofl],
                    _ofo = _ofb.default.model.slot.getMst(_ofn),
                    _ofp = _ofo.equipType;
                12 != _ofp && 13 != _ofp || (_ofo.sakuteki >= 5 && (_ofj += _ofc.get_slotnums(parseInt(_ofn))), _ofo.taiku >= 2 && (_ofk += _ofc.get_slotnums(parseInt(_ofn))));
            }
            if (1 == _ofh) {
                _ofj >= 1 && (_ofe.houg += 3, _ofe.kaih += 2, _ofe.raig += 1);
                var _ofq = _ofc.get_slotnums(13),
                    _ofr = _ofc.get_slotnums(125),
                    _ofs = _ofc.get_slotnums(285),
                    _oft = _ofq + _ofr + _ofs;
                1 == _oft ? (_ofe.houg += 1, _ofe.raig += 3) : _oft >= 2 && (_ofe.houg += 2, _ofe.raig += 5), _ofs >= 1 && (_ofe.raig += 1), _ofk >= 1 && (_ofe.tyku += 4);
            }
            return _ofe;
        };
    },
    71383: (_ofu, _ofv, _ofw) => {
        'use strict';
        var _ofx = null;
        defineModule(_ofv);
        Object.defineProperty(_ofv, '__esModule', {
            'value': true
        }), _ofv.getSlot456PersonalEffect = void 0;
        var _ofy = _ofw(74496);
        _ofv.getSlot456PersonalEffect = function(_ofz) {
            var _og0 = null,
                _og1 = new _ofy.SlotItemEffectModel(),
                _og2 = false,
                _og3 = new _ofy.SlotItemEffectModel(),
                _og4 = _ofz.getCountryName();
            if ('アメリカ' == _og4 && (_og3.houg += 3, _og3.kaih += 4, _og3.saku += 4, _og1.houm += 3, _og2 = true), 'イギリス' != _og4 && 'オーストラリア' != _og4 || (_og3.houg += 2, _og3.kaih += 2, _og3.saku += 2, _og1.houm += 2, _og2 = true), 87 != _ofz.ctype && 91 != _ofz.ctype || (_og3.houg += 1, _og1.leng += 1, _og2 = true), 651 != _ofz.ship_id && 656 != _ofz.ship_id || (_og1.houg += 2, _og1.kaih += 2, _og1.saku += 3, _og1.leng += 1, _og1.houm += 2), 0 == _og2) return _og1;
            var _og5 = _ofz.get_slotnums(456);
            return _og1.add(_og3.multiply(_og5)), _og1;
        };
    },
    55888: (_og6, _og7, _og8) => {
        'use strict';
        var _og9 = null;
        defineModule(_og7);
        Object.defineProperty(_og7, '__esModule', {
            'value': true
        }), _og7.getSlot457PersonalEffect = void 0;
        var _oga = _og8(74496);
        _og7.getSlot457PersonalEffect = function(_ogb) {
            var _ogc = null,
                _ogd = new _oga.SlotItemEffectModel(),
                _oge = 0;
            if (109 == _ogb.ctype ? (_ogd.raig += 3, _ogd.kaih += 3, _oge = 1) : 71 == _ogb.ctype || 103 == _ogb.ctype ? (_ogd.raig += 2, _ogd.kaih += 2, _oge = 2) : 44 == _ogb.ctype && (_ogd.raig += 1, _ogd.kaih += 4, _oge = 3), 0 == _oge) return _ogd;
            var _ogf = _ogb.get_each_level_nums(461),
                _ogg = [];
            return _oge > 0 && _ogf.forEach(function(_ogh, _ogi) {
                var _ogj = null;
                for (var _ogk = 1; _ogk <= _ogb.SLOT_LEVEL_MAX; _ogk++) null == _ogg[_ogk] && (_ogg[_ogk] = 0), _ogi >= _ogk && (_ogg[_ogk] += _ogh);
            }), 1 == _oge ? (_ogg[2] >= 1 && (_ogd.raig += 1 * _ogg[2]), _ogg[3] >= 1 && (_ogd.kaih += 1 * _ogg[3]), _ogg[4] >= 1 && (_ogd.raig += 1 * _ogg[4]), _ogg[5] >= 1 && (_ogd.houm += 1 * _ogg[5]), _ogg[6] >= 1 && (_ogd.raig += 1 * _ogg[6]), _ogg[8] >= 1 && (_ogd.raig += 1 * _ogg[8]), _ogg[10] >= 1 && (_ogd.houm += 1 * _ogg[10])) : 2 == _oge ? (_ogg[3] >= 1 && (_ogd.kaih += 1 * _ogg[3]), _ogg[4] >= 1 && (_ogd.raig += 1 * _ogg[4]), _ogg[6] >= 1 && (_ogd.raig += 1 * _ogg[6]), _ogg[8] >= 1 && (_ogd.raig += 1 * _ogg[8]), _ogg[10] >= 1 && (_ogd.houm += 1 * _ogg[10])) : 3 == _oge && (_ogg[4] >= 1 && (_ogd.raig += 1 * _ogg[4]), _ogg[6] >= 1 && (_ogd.raig += 1 * _ogg[6]), _ogg[8] >= 1 && (_ogd.raig += 1 * _ogg[8]), _ogg[10] >= 1 && (_ogd.houm += 1 * _ogg[10])), _ogd;
        };
    },
    2258: (_ogl, _ogm, _ogn) => {
        'use strict';
        var _ogo = null;
        defineModule(_ogm);
        Object.defineProperty(_ogm, '__esModule', {
            'value': true
        }), _ogm.getSlot458PersonalEffect = void 0;
        var _ogp = _ogn(74496);
        _ogm.getSlot458PersonalEffect = function(_ogq) {
            var _ogr = null,
                _ogs = new _ogp.SlotItemEffectModel(),
                _ogt = 0,
                _ogu = false;
            if (13 != _ogq.stype && 14 != _ogq.stype || (_ogu = true), 109 == _ogq.ctype ? (_ogs.raig += 3, _ogs.kaih += 6, _ogt = 1) : 71 == _ogq.ctype || 103 == _ogq.ctype ? (_ogs.raig += 3, _ogs.kaih += 4, _ogt = 2) : 44 == _ogq.ctype && (_ogs.raig += 3, _ogs.kaih += 3, _ogt = 3), 0 == _ogu && 0 == _ogt) return _ogs;
            var _ogv = [];
            [458, 461].forEach(function(_ogw) {
                var _ogx = null,
                    _ogy = _ogq.get_each_level_nums(_ogw);
                null == _ogv[_ogw] && (_ogv[_ogw] = []), _ogy.forEach(function(_ogz, _oh0) {
                    var _oh1 = null;
                    for (var _oh2 = 1; _oh2 <= _ogq.SLOT_LEVEL_MAX; _oh2++) null == _ogv[_ogw][_oh2] && (_ogv[_ogw][_oh2] = 0), _oh0 >= _oh2 && (_ogv[_ogw][_oh2] += _ogz);
                });
            });
            var _oh3 = _ogv[458][2],
                _oh4 = _ogv[458][3],
                _oh5 = _ogv[458][4],
                _oh6 = _ogv[458][5],
                _oh7 = _ogv[458][6],
                _oh8 = _ogv[458][8],
                _oh9 = _ogv[458][10],
                _oha = _ogv[461][4];
            return _ogt >= 1 && _ogt <= 3 && (_oh5 >= 1 && (_ogs.houm += 1 * _oh5), _oh7 >= 1 && (_ogs.kaih += 1 * _oh7), _oh8 >= 1 && (_ogs.raig += 1 * _oh8)), _ogu && (_oh4 >= 1 && (_ogs.kaih += 1 * _oh4), _oh6 >= 1 && (_ogs.raig += 1 * _oh6), _oh9 >= 1 && (_ogs.houm += 1 * _oh9), _oh3 >= 1 && _oha >= 1 && (_ogs.raig += 7, _ogs.houm += 5)), _ogs;
        };
    },
    43768: (_ohb, _ohc, _ohd) => {
        'use strict';
        var _ohe = null;
        defineModule(_ohc);
        Object.defineProperty(_ohc, '__esModule', {
            'value': true
        }), _ohc.getSlot463PersonalEffect = void 0;
        var _ohf = _ohd(74496);
        _ohc.getSlot463PersonalEffect = function(_ohg) {
            var _ohh = null,
                _ohi = new _ohf.SlotItemEffectModel(),
                _ohj = false,
                _ohk = new _ohf.SlotItemEffectModel(),
                _ohl = _ohg.get_slotnums(142),
                _ohm = _ohg.get_slotnums(460),
                _ohn = _ohl + _ohm;
            if (37 == _ohg.ctype && (_ohk.houg += 1, _ohk.tyku += 2, _ohk.kaih += 1, _ohk.houm += 1, _ohn >= 1 && (_ohi.tyku += 1, _ohi.kaih += 1, _ohi.houm += 1), _ohj = true), 916 != _ohg.ship_id && 911 != _ohg.ship_id && 546 != _ohg.ship_id || (_ohk.houg += 1, _ohk.kaih += 1, _ohk.houm += 2, _ohm >= 1 && (_ohi.houg += 1, _ohi.kaih += 1, _ohi.houm += 2), _ohj = true), 0 == _ohj) return _ohi;
            var _oho = _ohg.get_slotnums(463);
            return _ohi.add(_ohk.multiply(_oho)), _ohi;
        };
    },
    92174: (_ohp, _ohq, _ohr) => {
        'use strict';
        var _ohs = null;
        defineModule(_ohq);
        Object.defineProperty(_ohq, '__esModule', {
            'value': true
        }), _ohq.getSlot464PersonalEffect = void 0;
        var _oht = _ohr(74496);
        _ohq.getSlot464PersonalEffect = function(_ohu) {
            var _ohv = null,
                _ohw = new _oht.SlotItemEffectModel(),
                _ohx = false,
                _ohy = new _oht.SlotItemEffectModel(),
                _ohz = _ohu.get_slotnums(142),
                _oi0 = _ohu.get_slotnums(460),
                _oi1 = _ohz + _oi0;
            if (37 == _ohu.ctype ? (_ohy.tyku += 3, _ohy.kaih += 2, _oi1 >= 1 && (_ohw.tyku += 2, _ohw.kaih += 1, _ohw.houm += 1), _ohx = true) : 6 != _ohu.ctype && 73 != _ohu.ctype && 113 != _ohu.ctype || (_ohy.tyku = _ohy.tyku - 2, _ohy.kaih = _ohy.kaih - 2, _ohx = true), 916 != _ohu.ship_id && 911 != _ohu.ship_id && 546 != _ohu.ship_id && 593 != _ohu.ship_id && 954 != _ohu.ship_id || (_ohy.tyku += 2, _ohy.kaih += 2, _oi0 >= 1 && (_ohw.houg += 2, _ohw.tyku += 2, _ohw.kaih += 2, _ohw.houm += 3), _ohx = true), 0 == _ohx) return _ohw;
            var _oi2 = _ohu.get_slotnums(464);
            return _ohw.add(_ohy.multiply(_oi2)), _ohw;
        };
    },
    38003: (_oi3, _oi4, _oi5) => {
        'use strict';
        var _oi6 = null;
        defineModule(_oi4);
        Object.defineProperty(_oi4, '__esModule', {
            'value': true
        }), _oi4.getSlot465PersonalEffect = void 0;
        var _oi7 = _oi5(74496);
        _oi4.getSlot465PersonalEffect = function(_oi8) {
            var _oi9 = null,
                _oia = new _oi7.SlotItemEffectModel(),
                _oib = false,
                _oic = new _oi7.SlotItemEffectModel(),
                _oid = _oi8.get_slotnums(142),
                _oie = _oi8.get_slotnums(460),
                _oif = _oid + _oie;
            if (916 == _oi8.ship_id ? (_oic.houg += 2, _oic.kaih += 8, _oic.houm += 2, _oie >= 1 && (_oia.kaih += 2, _oia.houm += 1), _oib = true) : 911 != _oi8.ship_id && 546 != _oi8.ship_id || (_oic.houg += 1, _oic.kaih += 2, _oic.houm += 1, _oie >= 1 && (_oia.kaih += 1, _oia.houm += 1), _oib = true), 37 == _oi8.ctype && _oif >= 1 && (_oia.houg += 2, _oia.houm += 2), 0 == _oib) return _oia;
            var _oig = _oi8.get_slotnums(465);
            return _oia.add(_oic.multiply(_oig)), _oia;
        };
    },
    65455: (_oih, _oii, _oij) => {
        'use strict';
        var _oik = null;
        defineModule(_oii);
        Object.defineProperty(_oii, '__esModule', {
            'value': true
        }), _oii.getSlot466PersonalEffect = void 0;
        var _oil = _oij(74496);
        _oii.getSlot466PersonalEffect = function(_oim) {
            var _oin = null,
                _oio = new _oil.SlotItemEffectModel(),
                _oip = false,
                _oiq = new _oil.SlotItemEffectModel();
            if (277 == _oim.ship_id || 278 == _oim.ship_id || 156 == _oim.ship_id || 288 == _oim.ship_id || 112 == _oim.ship_id || 280 == _oim.ship_id || 279 == _oim.ship_id ? (_oiq.houg += 1, _oiq.houm += 1, _oip = true) : 461 == _oim.ship_id || 462 == _oim.ship_id || 466 == _oim.ship_id || 467 == _oim.ship_id ? (_oiq.houg += 2, _oiq.kaih += 2, _oiq.houm += 1, _oip = true) : 594 != _oim.ship_id && 698 != _oim.ship_id && 646 != _oim.ship_id && 599 != _oim.ship_id && 610 != _oim.ship_id && 196 != _oim.ship_id && 197 != _oim.ship_id || (_oiq.houg += 1, _oiq.kaih += 1, _oiq.houm += 2, _oip = true), 0 == _oip) return _oio;
            var _oir = _oim.get_slotnums(466);
            return _oio.add(_oiq.multiply(_oir)), _oio;
        };
    },
    70362: (_ois, _oit, _oiu) => {
        'use strict';
        var _oiv = null;
        defineModule(_oit);
        Object.defineProperty(_oit, '__esModule', {
            'value': true
        }), _oit.getSlot467PersonalEffect = void 0;
        var _oiw = _oiu(74496);
        _oit.getSlot467PersonalEffect = function(_oix) {
            var _oiy = null,
                _oiz = new _oiw.SlotItemEffectModel(),
                _oj0 = false,
                _oj1 = new _oiw.SlotItemEffectModel();
            if ('アメリカ' == _oix.getCountryName()) {
                for (var _oj2 = _oix.getUSSWaterRaderDict(), _oj3 = _oix.getUSSAirRaderDict(), _oj4 = 0, _oj5 = 0, _oj6 = 0, _oj7 = _oix.have_slot_ids(); _oj6 < _oj7.length; _oj6++) {
                    var _oj8 = _oj7[_oj6];
                    _oj2[parseInt(_oj8)] && (_oj4 += _oix.get_slotnums(parseInt(_oj8))), _oj3[parseInt(_oj8)] && (_oj5 += _oix.get_slotnums(parseInt(_oj8)));
                }
                _oj1.houg += 1, _oj1.tyku += 1, _oj1.kaih += 2, _oj4 >= 1 && (_oiz.houg += 1, _oiz.tyku += 1, _oiz.kaih += 1, _oiz.houm += 2), _oj5 >= 1 && (_oiz.tyku += 2, _oiz.kaih += 2), 65 != _oix.ctype && 93 != _oix.ctype && 102 != _oix.ctype && 107 != _oix.ctype && 125 != _oix.ctype || (_oj1.tyku += 2, _oj1.kaih += 1), _oj0 = true;
            }
            if (0 == _oj0) return _oiz;
            var _oj9 = _oix.get_slotnums(467);
            return _oiz.add(_oj1.multiply(_oj9)), _oiz;
        };
    },
    68086: (_oja, _ojb, _ojc) => {
        'use strict';
        var _ojd = null;
        defineModule(_ojb);
        Object.defineProperty(_ojb, '__esModule', {
            'value': true
        }), _ojb.getSlot470PersonalEffect = void 0;
        var _oje = _ojc(74496);
        _ojb.getSlot470PersonalEffect = function(_ojf) {
            var _ojg = null,
                _ojh = new _oje.SlotItemEffectModel(),
                _oji = false,
                _ojj = new _oje.SlotItemEffectModel(),
                _ojk = _ojf.get_slotnums(470),
                _ojl = _ojf.get_slotnums(529),
                _ojm = _ojk + _ojl,
                _ojn = _ojf.get_each_level_over_nums([470, 529]),
                _ojo = (_ojn.slot[470], _ojn.slot[529]),
                _ojp = _ojn.total,
                _ojq = 0;
            23 == _ojf.ctype || 18 == _ojf.ctype ? (_ojj.houg += 1, _oji = true, _ojq = 1) : 30 == _ojf.ctype && (_ojj.houg += 2, _oji = true, _ojq = 2), ('しぐれ' == _ojf.yomi || 'ゆきかぜ' == _ojf.yomi || 'いそかぜ' == _ojf.yomi) && (_ojj.kaih += 2, _oji = true), 405 == _ojf.ship_id || 246 == _ojf.ship_id || 144 == _ojf.ship_id || 145 == _ojf.ship_id || 497 == _ojf.ship_id ? (_ojl >= 1 && (_ojh.houg += 1 * _ojl, _ojh.tyku += 1 * _ojl, _ojh.houm += 1 * _ojl, _ojh.kaih += 1 * _ojl), 2 == _ojl ? _ojh.houg += 1 : _ojl >= 3 && (_ojh.houg += 3), _ojo[8] >= 1 && (_ojh.tyku += 1 * _ojo[8]), _ojo[10] >= 1 && (_ojh.houg += 1 * _ojo[10])) : 323 == _ojf.ship_id || 498 == _ojf.ship_id || 961 == _ojf.ship_id ? (_ojl >= 1 && (_ojh.houg += 2 * _ojl, _ojh.tyku += 2 * _ojl, _ojh.houm += 1 * _ojl, _ojh.kaih += 1 * _ojl), 2 == _ojl ? _ojh.houg += 2 : _ojl >= 3 && (_ojh.houg += 4), _ojo[6] >= 1 && (_ojh.tyku += 1 * _ojo[6]), _ojo[8] >= 1 && (_ojh.houm += 1 * _ojo[8]), _ojo[10] >= 1 && (_ojh.houg += 1 * _ojo[10])) : 975 == _ojf.ship_id && (_ojl >= 1 && (_ojh.houg += 3 * _ojl, _ojh.tyku += 3 * _ojl, _ojh.houm += 2 * _ojl, _ojh.kaih += 2 * _ojl), 2 == _ojl ? _ojh.houg += 3 : _ojl >= 3 && (_ojh.houg += 6), _ojo[4] >= 1 && (_ojh.tyku += 1 * _ojo[4]), _ojo[6] >= 1 && (_ojh.houg += 1 * _ojo[6]), _ojo[8] >= 1 && (_ojh.houm += 1 * _ojo[8]), _ojo[10] >= 1 && (_ojh.houg += 1 * _ojo[10])), 961 == _ojf.ship_id && (_ojj.houg += 3, _ojj.houm += 3, _ojj.kaih += 2, _oji = true), 566 != _ojf.ship_id && 567 != _ojf.ship_id && 568 != _ojf.ship_id && 656 != _ojf.ship_id && 670 != _ojf.ship_id && 915 != _ojf.ship_id && 651 != _ojf.ship_id && 145 != _ojf.ship_id && 961 != _ojf.ship_id && 951 != _ojf.ship_id || (_ojh.houg += 1, _ojh.houm += 2, _ojm >= 2 && (_ojh.houg += 2), _ojp[5] >= 1 && (_ojh.houm += 1 * _ojp[5]), _ojp[8] >= 1 && (_ojh.houg += 1 * _ojp[8]), _ojp[10] >= 1 && (_ojh.houm += 1 * _ojp[10])), _oji && _ojh.add(_ojj.multiply(_ojm));
            var _ojr = _ojf.get_have_rader_nums(),
                _ojs = _ojr.water_rader,
                _ojt = _ojr.air_rader;
            return _ojs >= 1 && (1 == _ojq ? (_ojh.houg += 1, _ojh.raig += 3, _ojh.kaih += 1, _ojh.houm += 1) : 2 == _ojq && (_ojh.houg += 2, _ojh.raig += 3, _ojh.kaih += 1, _ojh.houm += 3)), _ojt >= 1 && (_ojl >= 1 && (_ojh.tyku += 2, _ojh.kaih += 2), 2 == _ojl ? _ojh.tyku += 2 : _ojl >= 3 && (_ojh.tyku += 4)), _ojh;
        };
    },
    78173: (_oju, _ojv, _ojw) => {
        'use strict';
        var _ojx = null;
        defineModule(_ojv);
        Object.defineProperty(_ojv, '__esModule', {
            'value': true
        }), _ojv.getSlot471PersonalEffect = void 0;
        var _ojy = _ojw(74496);
        _ojv.getSlot471PersonalEffect = function(_ojz) {
            var _ok0 = null,
                _ok1 = new _ojy.SlotItemEffectModel(),
                _ok2 = false,
                _ok3 = new _ojy.SlotItemEffectModel(),
                _ok4 = 0;
            if ('フランス' == _ojz.getCountryName() && (_ok3.houg += 2, _ok3.kaih += 2, _ok3.houm += 2, _ok2 = true, _ok4 = 1), 79 == _ojz.ctype && (_ok3.houg += 2, _ok3.houm += 1, _ok2 = true), 0 == _ok2) return _ok1;
            var _ok5 = _ojz.get_slotnums(471);
            if (_ok1.add(_ok3.multiply(_ok5)), 0 == _ok4) return _ok1;
            var _ok6 = _ojz.get_each_level_nums(471),
                _ok7 = 0,
                _ok8 = 0;
            if (_ok4 > 0 && _ok6.forEach(function(_ok9, _oka) {
                    _oka >= 6 && (_ok7 += _ok9), _oka >= 8 && (_ok8 += _ok9);
                }), 1 == _ok4) {
                _ok7 >= 1 && (_ok1.kaih += 1 * _ok7, _ok1.houm += 1 * _ok7), _ok8 >= 1 && (_ok1.houg += 1 * _ok8, _ok1.kaih += 1 * _ok8, _ok1.houm += 1 * _ok8);
                var _okb = _ok6[10];
                _okb >= 1 && (_ok1.houg += 1 * _okb, _ok1.houm += 1 * _okb);
            }
            return _ok1;
        };
    },
    22581: (_okc, _okd, _oke) => {
        'use strict';
        var _okf = null;
        defineModule(_okd);
        Object.defineProperty(_okd, '__esModule', {
            'value': true
        }), _okd.getSlot472PersonalEffect = void 0;
        var _okg = _oke(74496);
        _okd.getSlot472PersonalEffect = function(_okh) {
            var _oki = null,
                _okj = new _okg.SlotItemEffectModel(),
                _okk = false,
                _okl = new _okg.SlotItemEffectModel(),
                _okm = _okh.getCountryName();
            if ('アメリカ' == _okm && (_okl.tais += 2, _okk = true), 'イギリス' == _okm && (_okl.tais += 1, _okk = true), 1 == _okh.stype && (_okl.kaih += 1, _okk = true), _okk) {
                var _okn = _okh.get_slotnums(472);
                _okj.add(_okl.multiply(_okn));
            }
            return 920 == _okh.ship_id && (_okj.tais += 1, _okj.kaih += 1, _okj.houm += 1), _okj;
        };
    },
    13053: (_oko, _okp, _okq) => {
        'use strict';
        var _okr = null;
        defineModule(_okp);
        Object.defineProperty(_okp, '__esModule', {
            'value': true
        }), _okp.getSlot473PersonalEffect = void 0;
        var _oks = _okq(74496);
        _okp.getSlot473PersonalEffect = function(_okt) {
            var _oku = null,
                _okv = new _oks.SlotItemEffectModel(),
                _okw = false,
                _okx = new _oks.SlotItemEffectModel(),
                _oky = _okt.getCountryName();
            if ('アメリカ' == _oky && (_okx.houg += 1, _okx.kaih += 1, _okx.tyku += 1, _okw = true), 'イギリス' == _oky && (_okx.houg += 1, _okx.kaih += 1, _okw = true), 0 == _okw) return _okv;
            var _okz = _okt.get_slotnums(473);
            return _okv.add(_okx.multiply(_okz)), _okv;
        };
    },
    47874: (_ol0, _ol1, _ol2) => {
        'use strict';
        var _ol3 = null;
        defineModule(_ol1);
        Object.defineProperty(_ol1, '__esModule', {
            'value': true
        }), _ol1.getSlot474PersonalEffect = void 0;
        var _ol4 = _ol2(74496);
        _ol1.getSlot474PersonalEffect = function(_ol5) {
            var _ol6 = null,
                _ol7 = new _ol4.SlotItemEffectModel(),
                _ol8 = false,
                _ol9 = new _ol4.SlotItemEffectModel(),
                _ola = _ol5.getCountryName();
            if ('アメリカ' == _ola && (_ol9.houg += 2, _ol9.kaih += 1, _ol9.tyku += 1, _ol8 = true), 'イギリス' == _ola && (_ol9.houg += 1, _ol9.kaih += 1, _ol9.tyku += 1, _ol8 = true), 'フランス' == _ola && (_ol9.houg += 1, _ol9.tyku += 1, _ol8 = true), 707 != _ol5.ship_id && 930 != _ol5.ship_id || (_ol9.houg += 1, _ol9.kaih += 1, _ol8 = true), 0 == _ol8) return _ol7;
            var _olb = _ol5.get_slotnums(474);
            return _ol7.add(_ol9.multiply(_olb)), _ol7;
        };
    },
    42788: (_olc, _old, _ole) => {
        'use strict';
        var _olf = null;
        defineModule(_old);
        Object.defineProperty(_old, '__esModule', {
            'value': true
        }), _old.getSlot478PersonalEffect = void 0;
        var _olg = _ole(74496);
        _old.getSlot478PersonalEffect = function(_olh) {
            var _oli = null,
                _olj = new _olg.SlotItemEffectModel(),
                _olk = _olh.get_each_level_nums(478),
                _oll = [];
            return _olk.forEach(function(_olm, _oln) {
                var _olo = null;
                for (var _olp = 1; _olp <= _olh.SLOT_LEVEL_MAX; _olp++) _oln >= _olp && (null == _oll[_olp] && (_oll[_olp] = 0), _oll[_olp] += _olm);
            }), _oll.every(function(_olq) {
                return 0 == _olq;
            }) || (_oll[1] >= 1 && (_olj.houg += 1), _oll[2] >= 1 && (_olj.houm += 1), _oll[3] >= 1 && (_olj.kaih += 1), _oll[4] >= 1 && (_olj.baku += 1), _oll[5] >= 1 && (_olj.raig += 1), _oll[6] >= 1 && (_olj.tyku += 1), _oll[7] >= 1 && (_olj.houg += 1), _oll[8] >= 1 && (_olj.houm += 1), _oll[9] >= 1 && (_olj.kaih += 1), _oll[10] >= 1 && (_olj.houg += 1)), _olj;
        };
    },
    22218: (_olr, _ols, _olt) => {
        'use strict';
        var _olu = null;
        defineModule(_ols);
        Object.defineProperty(_ols, '__esModule', {
            'value': true
        }), _ols.getSlot47PersonalEffect = void 0;
        var _olv = _olt(74496);
        _ols.getSlot47PersonalEffect = function(_olw) {
            var _olx = null,
                _oly = new _olv.SlotItemEffectModel(),
                _olz = new _olv.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_olw.yomi) >= 0 ? (_olz.tais += 3, _olz.kaih += 2, _olz.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_olw.yomi) >= 0 && (_olz.tais += 2, _olz.kaih += 2), !_olz.exists()) return _oly;
            var _om0 = _olw.get_slotnums(47) + _olw.get_slotnums(438);
            return _oly = _olz.multiply(_om0);
        };
    },
    57664: (_om1, _om2, _om3) => {
        'use strict';
        var _om4 = null;
        defineModule(_om2);
        Object.defineProperty(_om2, '__esModule', {
            'value': true
        }), _om2.getSlot483PersonalEffect = void 0;
        var _om5 = _om3(74496);
        _om2.getSlot483PersonalEffect = function(_om6) {
            var _om7 = null,
                _om8 = new _om5.SlotItemEffectModel(),
                _om9 = 0,
                _oma = 0,
                _omb = 0,
                _omc = 0,
                _omd = 0,
                _ome = 0,
                _omf = 0;
            if (6 == _om6.ctype ? (_om8.houg += 2, _om8.tyku += 3, _om8.houm += 1, _om9 = 1) : 2 == _om6.ctype ? (_om8.houg += 1, _om8.tyku += 2, _om8.kaih += 2, _om8.houm += 1, _oma = 1) : 37 == _om6.ctype && (_omb = 1), 8 == _om6.stype || 9 == _om6.stype || 10 == _om6.stype ? _omc = 1 : 5 != _om6.stype && 6 != _om6.stype || (_omd = 1), 149 == _om6.ship_id ? (_om8.houg += 2, _om8.tyku += 2) : 591 == _om6.ship_id ? (_om8.houg += 3, _om8.tyku += 3, _om8.kaih += 1) : 150 == _om6.ship_id ? (_om8.houg += 1, _om8.tyku += 1) : 592 == _om6.ship_id ? (_om8.houg += 2, _om8.tyku += 2, _om8.kaih += 2) : 151 == _om6.ship_id ? (_om8.houg += 1, _om8.tyku += 2, _om8.kaih += 2) : 593 == _om6.ship_id ? (_om8.houg += 2, _om8.tyku += 5, _om8.kaih += 3) : 954 == _om6.ship_id ? (_om8.houg += 2, _om8.tyku += 4, _om8.kaih += 2) : 152 == _om6.ship_id ? (_om8.houg += 2, _om8.tyku += 2) : 911 == _om6.ship_id || 916 == _om6.ship_id || 546 == _om6.ship_id ? (_om8.houg += 2, _om8.tyku += 2, _om8.kaih += 2, _ome = 1) : 553 == _om6.ship_id || 554 == _om6.ship_id ? (_om8.houg += 1, _om8.tyku += 2, _om8.kaih += 1, _omf = 1) : 541 == _om6.ship_id || 411 == _om6.ship_id || 412 == _om6.ship_id ? (_om8.houg += 1, _om8.tyku += 2) : 573 == _om6.ship_id && (_om8.houg += 2, _om8.tyku += 2, _om8.kaih += 1), 0 == [_om9, _oma, _omb, _omc, _omd, _ome, _omf].reduce(function(_omg, _omh) {
                    return _omg + _omh;
                }, 0)) return _om8;
            var _omi = _om6.get_each_level_nums(483),
                _omj = 0,
                _omk = [];
            return _omi.forEach(function(_oml, _omm) {
                var _omn = null;
                _omm >= 6 && (_omj += _oml);
                for (var _omo = 1; _omo <= _om6.SLOT_LEVEL_MAX; _omo++) null == _omk[_omo] && (_omk[_omo] = 0), _omm >= _omo && (_omk[_omo] += _oml);
            }), 1 == _om9 ? (_omj >= 1 && (_om8.houm += 1), _omi[10] >= 1 && (_om8.houm += 1)) : 1 == _oma ? (_omk[5] >= 1 && (_om8.kaih += 1), _omk[6] >= 1 && (_om8.houm += 1), _omk[10] >= 1 && (_om8.kaih += 1)) : 1 == _omb && (_omk[6] >= 1 && (_om8.houm += 1), _omk[10] >= 1 && (_om8.kaih += 1)), 1 == _omc ? (_omk[2] >= 1 && (_om8.tyku += 1), _omk[4] >= 1 && (_om8.houg += 1), _omk[7] >= 1 && (_om8.kaih += 1), _omk[8] >= 1 && (_om8.tyku += 1), _omk[9] >= 1 && (_om8.houg += 1)) : 1 == _omd && (_omk[2] >= 1 && (_om8.tyku += 1), _omk[4] >= 1 && (_om8.houg += 1), _omk[6] >= 1 && (_om8.kaih += 1), _omk[8] >= 1 && (_om8.houm += 1), _omk[10] >= 1 && (_om8.houg += 1)), 1 == _ome ? _omk[5] >= 1 && (_om8.houm += 1) : 1 == _omf && (_omk[1] >= 1 && (_om8.houm += 1), _omk[3] >= 1 && (_om8.houm += 1)), _om8;
        };
    },
    44990: (_omp, _omq, _omr) => {
        'use strict';
        var _oms = null;
        defineModule(_omq);
        Object.defineProperty(_omq, '__esModule', {
            'value': true
        }), _omq.getSlot485PersonalEffect = void 0;
        var _omt = _omr(74496);
        _omq.getSlot485PersonalEffect = function(_omu) {
            var _omv = null,
                _omw = new _omt.SlotItemEffectModel(),
                _omx = false,
                _omy = new _omt.SlotItemEffectModel();
            if (9 == _omu.ctype && (_omy.houg += 1, _omy.kaih += 2, _omy.tyku += 3, _omx = true), 501 == _omu.ship_id || 506 == _omu.ship_id ? (_omy.kaih += 1, _omy.tyku += 2, _omy.houm += 1, _omx = true) : 502 != _omu.ship_id && 507 != _omu.ship_id || (_omy.kaih += 1, _omy.tyku += 1, _omy.houm += 1, _omx = true), _omx) {
                var _omz = _omu.get_slotnums(485);
                _omw.add(_omy.multiply(_omz));
            }
            var _on0 = _omu.get_each_level_nums(485),
                _on1 = 0,
                _on2 = 0,
                _on3 = 0,
                _on4 = _on0[10];
            return _on0.forEach(function(_on5, _on6) {
                _on6 >= 3 && (_on1 += _on5), _on6 >= 5 && (_on2 += _on5), _on6 >= 7 && (_on3 += _on5);
            }), _on1 > 0 && (_omw.houg += 1 * _on1), _on2 > 0 && (_omw.tyku += 1 * _on2), _on3 > 0 && (_omw.kaih += 1 * _on3), _on4 > 0 && (_omw.houm += 1 * _on4), _omw;
        };
    },
    83957: (_on7, _on8, _on9) => {
        'use strict';
        var _ona = null;
        defineModule(_on8);
        Object.defineProperty(_on8, '__esModule', {
            'value': true
        }), _on8.getSlot486PersonalEffect = void 0;
        var _onb = _on9(74496);
        _on8.getSlot486PersonalEffect = function(_onc) {
            var _ond = null,
                _one = new _onb.SlotItemEffectModel(),
                _onf = false,
                _ong = new _onb.SlotItemEffectModel();
            if (894 == _onc.ship_id || 899 == _onc.ship_id ? (_ong.houg += 4, _ong.tyku += 4, _ong.kaih += 3, _ong.houm += 2, _onf = true) : 888 != _onc.ship_id && 883 != _onc.ship_id || (_ong.houg += 2, _ong.tyku += 2, _ong.kaih += 2, _ong.houm += 1, _onf = true), _onf) {
                var _onh = _onc.get_slotnums(486);
                _one.add(_ong.multiply(_onh));
            }
            var _oni = _onc.get_each_level_nums(486),
                _onj = 0,
                _onk = 0,
                _onl = _oni[10];
            return _oni.forEach(function(_onm, _onn) {
                _onn >= 6 && (_onj += _onm), _onn >= 8 && (_onk += _onm);
            }), _onj > 0 && (_one.kaih += 1 * _onj, _one.houm += 1 * _onj), _onk > 0 && (_one.tyku += 1 * _onk, _one.kaih += 1 * _onk), _onl > 0 && (_one.houg += 1 * _onl, _one.houm += 1 * _onl), _one;
        };
    },
    78539: (_ono, _onp, _onq) => {
        'use strict';
        var _onr = null;
        defineModule(_onp);
        Object.defineProperty(_onp, '__esModule', {
            'value': true
        }), _onp.getSlot487PersonalEffect = void 0;
        var _ons = _onq(74496);
        _onp.getSlot487PersonalEffect = function(_ont) {
            var _onu = null,
                _onv = new _ons.SlotItemEffectModel(),
                _onw = false,
                _onx = new _ons.SlotItemEffectModel();
            if (894 == _ont.ship_id || 899 == _ont.ship_id ? (_onx.houg += 5, _onx.tyku += 3, _onx.kaih += 2, _onx.houm += 4, _onw = true) : 888 != _ont.ship_id && 883 != _ont.ship_id || (_onx.houg += 3, _onx.tyku += 1, _onx.kaih += 1, _onx.houm += 2, _onw = true), _onw) {
                var _ony = _ont.get_slotnums(487);
                _onv.add(_onx.multiply(_ony));
            }
            var _onz = _ont.get_each_level_nums(487),
                _oo0 = 0,
                _oo1 = 0,
                _oo2 = _onz[10];
            return _onz.forEach(function(_oo3, _oo4) {
                _oo4 >= 6 && (_oo0 += _oo3), _oo4 >= 8 && (_oo1 += _oo3);
            }), _oo0 > 0 && (_onv.houg += 1 * _oo0, _onv.kaih += 1 * _oo0), _oo1 > 0 && (_onv.tyku += 1 * _oo1, _onv.houm += 1 * _oo1), _oo2 > 0 && (_onv.houg += 1 * _oo2, _onv.houm += 1 * _oo2), _onv;
        };
    },
    96282: (_oo5, _oo6, _oo7) => {
        'use strict';
        var _oo8 = null;
        defineModule(_oo6);
        Object.defineProperty(_oo6, '__esModule', {
            'value': true
        }), _oo6.getSlot488PersonalEffect = void 0;
        var _oo9 = _oo7(74496);
        _oo6.getSlot488PersonalEffect = function(_ooa) {
            var _oob = null,
                _ooc = new _oo9.SlotItemEffectModel(),
                _ood = false,
                _ooe = new _oo9.SlotItemEffectModel(),
                _oof = 0,
                _oog = _ooa.getCountryName(),
                _ooh = {
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
                }[_ooa.ship_id];
            if (('日本' == _oog && 2 == _ooa.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_ooa.ctype] && 1 == _ooa.stype) && (_ooe.tais += 1, _ooe.kaih += 1, _ood = true), 1 == _ooh ? (_ooe.tais += 5, _ooe.kaih += 4, _ooe.houm += 2, _ood = true, _oof = 1) : 2 == _ooh ? (_ooe.tais += 2, _ooe.kaih += 1, _ooe.houm += 1, _ood = true, _oof = 2) : 3 == _ooh && (_ooe.tais += 1, _ood = true, _oof = 2), 0 == _ood) return _ooc;
            var _ooi = _ooa.get_slotnums(488);
            if (_ooc.add(_ooe.multiply(_ooi)), 0 == _oof) return _ooc;
            var _ooj = _ooa.get_each_level_nums(488),
                _ook = [];
            return _ooj.forEach(function(_ool, _oom) {
                var _oon = null;
                for (var _ooo = 1; _ooo <= _ooa.SLOT_LEVEL_MAX; _ooo++) _oom >= _ooo && (null == _ook[_ooo] && (_ook[_ooo] = 0), _ook[_ooo] += _ool);
            }), 1 == _oof ? (_ook[3] >= 1 && (_ooc.kaih += 1 * _ook[3]), _ook[5] >= 1 && (_ooc.tais += 1 * _ook[5]), _ook[7] >= 1 && (_ooc.houm += 1 * _ook[7]), _ook[8] >= 1 && (_ooc.kaih += 1 * _ook[8]), _ook[9] >= 1 && (_ooc.tais += 1 * _ook[9]), _ook[10] >= 1 && (_ooc.tais += 1 * _ook[10])) : 2 == _oof && (_ook[5] >= 1 && (_ooc.tais += 1 * _ook[5]), _ook[7] >= 1 && (_ooc.kaih += 1 * _ook[7]), _ook[9] >= 1 && (_ooc.houm += 1 * _ook[9]), _ook[10] >= 1 && (_ooc.tais += 1 * _ook[10])), _ooc;
        };
    },
    49679: (_oop, _ooq, _oor) => {
        'use strict';
        var _oos = null;
        defineModule(_ooq);
        Object.defineProperty(_ooq, '__esModule', {
            'value': true
        }), _ooq.getSlot489PersonalEffect = void 0;
        var _oot = _oor(74496);
        _ooq.getSlot489PersonalEffect = function(_oou) {
            var _oov = null,
                _oow = new _oot.SlotItemEffectModel(),
                _oox = false,
                _ooy = new _oot.SlotItemEffectModel();
            if ('あきつまる' != _oou.yomi && 'やましおまる' != _oou.yomi && 'くまのまる' != _oou.yomi || (_ooy.tyku = _ooy.tyku + 2, _ooy.kaih = _ooy.kaih + 1, _ooy.houg = _ooy.houg + 1, _ooy.tais = _ooy.tais + 1, _ooy.houm = _ooy.houm + 1, _oox = true), 717 != _oou.ship_id && 948 != _oou.ship_id || (_ooy.tyku = _ooy.tyku + 2, _ooy.kaih = _ooy.kaih + 2, _ooy.houg = _ooy.houg + 2, _ooy.tais = _ooy.tais + 1, _ooy.houm = _ooy.houm + 1, _oox = true), _oox) {
                var _ooz = _oou.get_slotnums(489) + _oou.get_slotnums(491);
                _oow.add(_ooy.multiply(_ooz));
            }
            var _op0 = _oou.get_each_level_nums(489),
                _op1 = _oou.get_each_level_nums(491),
                _op2 = 0,
                _op3 = 0,
                _op4 = 0;
            _op0.forEach(function(_op5, _op6) {
                _op6 >= 3 && (_op2 += _op5), _op6 >= 6 && (_op3 += _op5), _op6 >= 8 && (_op4 += _op5);
            }), _op1.forEach(function(_op7, _op8) {
                _op8 >= 3 && (_op2 += _op7), _op8 >= 6 && (_op3 += _op7), _op8 >= 8 && (_op4 += _op7);
            });
            var _op9 = _op0[10] + _op1[10];
            return _op2 >= 1 && (_oow.kaih = _oow.kaih + 1 * _op2), _op3 >= 1 && (_oow.tais = _oow.tais + 1 * _op3), _op4 >= 1 && (_oow.houm = _oow.houm + 1 * _op4), _op9 >= 1 && (_oow.houg = _oow.houg + 1 * _op9), _oow;
        };
    },
    90312: function(_opa, _opb, _opc) {
        'use strict';
        var _opd = null;
        var _ope = this && this.__importDefault || function(_opf) {
            var _opg = null;
            return _opf && _opf.__esModule ? _opf : {
                'default': _opf
            };
        };
        defineModule(_opb);
        Object.defineProperty(_opb, '__esModule', {
            'value': true
        }), _opb.getSlot502PersonalEffect = void 0;
        var _oph = _opc(74496),
            _opi = _ope(_opc(18622));
        _opb.getSlot502PersonalEffect = function(_opj) {
            var _opk = null,
                _opl = new _oph.SlotItemEffectModel(),
                _opm = _opj.get_slotnums(502),
                _opn = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _opo = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _opp = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _opq = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _opr = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_opn[_opj.ship_id]) {
                var _ops = _opn[_opj.ship_id];
                _opl.houg += _opm * _ops;
            }
            if (_opo[_opj.ship_id]) {
                var _opt = _opo[_opj.ship_id];
                _opl.tyku += _opm * _opt;
            }
            if (_opp[_opj.ship_id]) {
                var _opu = _opp[_opj.ship_id],
                    _opv = _opj.get_each_level_nums(502),
                    _opw = [];
                _opv.forEach(function(_opx, _opy) {
                    var _opz = null;
                    for (var _oq0 = 1; _oq0 <= _opj.SLOT_LEVEL_MAX; _oq0++) _opy >= _oq0 && (null == _opw[_oq0] && (_opw[_oq0] = 0), _opw[_oq0] += _opx);
                }), 1 == _opu ? (_opl.kaih += 3 * _opm, _opw[1] > 0 && (_opl.kaih += 1 * _opw[1]), _opw[3] > 0 && (_opl.tyku += 1 * _opw[3]), _opw[5] > 0 && (_opl.houg += 1 * _opw[5]), _opw[7] > 0 && (_opl.kaih += 1 * _opw[7]), _opw[8] > 0 && (_opl.tyku += 1 * _opw[8]), _opw[9] > 0 && (_opl.houg += 1 * _opw[9]), _opw[10] > 0 && (_opl.tyku += 1 * _opw[10])) : 2 == _opu ? (_opl.kaih += 1 * _opm, _opw[2] > 0 && 151 == _opj.ship_id && (_opl.kaih += 1 * _opw[2]), _opw[4] > 0 && (_opl.tyku += 1 * _opw[4]), _opw[6] > 0 && (_opl.houg += 1 * _opw[6]), _opw[8] > 0 && (_opl.kaih += 1 * _opw[8]), _opw[10] > 0 && (_opl.tyku += 1 * _opw[10])) : 3 == _opu && (_opw[5] > 0 && (_opl.kaih += 1 * _opw[5]), _opw[8] > 0 && (_opl.houg += 1 * _opw[8]), _opw[10] > 0 && (_opl.tyku += 1 * _opw[10]));
            }
            if (_opq[_opj.ship_id]) {
                for (var _oq1 = 0, _oq2 = 0, _oq3 = _opj.have_slot_ids(); _oq2 < _oq3.length; _oq2++) {
                    var _oq4 = _oq3[_oq2],
                        _oq5 = _opi.default.model.slot.getMst(_oq4),
                        _oq6 = _oq5.equipType;
                    12 != _oq6 && 13 != _oq6 || (_oq5.sakuteki >= 5 && (_oq1 += _opj.get_slotnums(parseInt(_oq4))), _oq5.taiku >= 2 && _opj.get_slotnums(parseInt(_oq4)));
                }
                0;
                var _oq7 = _opq[_opj.ship_id];
                1 == _oq7 && _oq1 >= 1 ? (_opl.houg += 3, _opl.kaih += 4) : 2 == _oq7 && _oq1 >= 1 && (_opl.houg += 2, _opl.kaih += 2);
            }
            if (_opr[_opj.ship_id]) {
                var _oq8 = _opr[_opj.ship_id],
                    _oq9 = [],
                    _oqa = [],
                    _oqb = _opj.have_slot_ids();
                [410, 411].forEach(function(_oqc) {
                    var _oqd = null;
                    _oqb.indexOf(_oqc.toString()) > -1 && (_oqa[_oqc] = _opj.get_each_level_nums(_oqc), null == _oq9[_oqc] && (_oq9[_oqc] = []), _oqa[_oqc].forEach(function(_oqe, _oqf) {
                        var _oqg = null;
                        for (var _oqh = 1; _oqh <= _opj.SLOT_LEVEL_MAX; _oqh++) null == _oq9[_oqc][_oqh] && (_oq9[_oqc][_oqh] = 0), _oqf >= _oqh && (_oq9[_oqc][_oqh] += _oqe);
                    }));
                });
                var _oqi = _oqa[410],
                    _oqj = _oqa[411];
                if (1 == _oq8) {
                    if (_oqi) {
                        _opl.tyku += 1;
                        var _oqk = _oq9[410];
                        _oqk[7] >= 1 && (_opl.houg += 1), _oqk[10] >= 1 && (_opl.kaih += 1);
                    }
                    if (_oqj) {
                        _opl.tyku += 2;
                        var _oql = _oq9[411];
                        _oql[2] >= 1 && (_opl.houg += 1), _oql[4] >= 1 && (_opl.kaih += 1), _oql[6] >= 1 && (_opl.houm += 1), _oql[8] >= 1 && (_opl.tyku += 1), _oql[10] >= 1 && (_opl.houg += 1);
                    }
                }
            }
            return _opl;
        };
    },
    86856: function(_oqm, _oqn, _oqo) {
        'use strict';
        var _oqp = null;
        var _oqq = this && this.__importDefault || function(_oqr) {
            var _oqs = null;
            return _oqr && _oqr.__esModule ? _oqr : {
                'default': _oqr
            };
        };
        defineModule(_oqn);
        Object.defineProperty(_oqn, '__esModule', {
            'value': true
        }), _oqn.getSlot503PersonalEffect = void 0;
        var _oqt = _oqo(74496),
            _oqu = _oqq(_oqo(18622));
        _oqn.getSlot503PersonalEffect = function(_oqv) {
            var _oqw = null,
                _oqx = new _oqt.SlotItemEffectModel(),
                _oqy = _oqv.get_slotnums(503),
                _oqz = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _or0 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _or1 = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _or2 = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _or3 = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _or4 = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_oqz[_oqv.ship_id]) {
                var _or5 = _oqz[_oqv.ship_id];
                _oqx.houg += _oqy * _or5;
            }
            if (_or0[_oqv.ship_id]) {
                var _or6 = _or0[_oqv.ship_id];
                _oqx.tyku += _oqy * _or6;
            }
            if (_or1[_oqv.ship_id]) {
                var _or7 = _or1[_oqv.ship_id],
                    _or8 = _oqv.get_each_level_nums(503),
                    _or9 = [];
                _or8.forEach(function(_ora, _orb) {
                    var _orc = null;
                    for (var _ord = 1; _ord <= _oqv.SLOT_LEVEL_MAX; _ord++) _orb >= _ord && (null == _or9[_ord] && (_or9[_ord] = 0), _or9[_ord] += _ora);
                }), 1 == _or7 ? (_oqx.houm += 2 * _oqy, _or9[1] > 0 && (_oqx.houg += 1 * _or9[1]), _or9[2] > 0 && (_oqx.tyku += 1 * _or9[2]), _or9[4] > 0 && (_oqx.houm += 1 * _or9[4]), _or9[6] > 0 && (_oqx.houg += 1 * _or9[6]), _or9[8] > 0 && (_oqx.tyku += 1 * _or9[8]), _or9[10] > 0 && (_oqx.houm += 1 * _or9[10])) : 2 == _or7 ? (_oqx.houm += 1 * _oqy, _or9[2] > 0 && (_oqx.houg += 1 * _or9[2]), _or9[4] > 0 && (_oqx.tyku += 1 * _or9[4]), _or9[6] > 0 && (_oqx.houm += 1 * _or9[6]), _or9[8] > 0 && (_oqx.houg += 1 * _or9[8]), _or9[10] > 0 && (_oqx.houm += 1 * _or9[10])) : 3 == _or7 && (_or9[4] > 0 && (_oqx.houm += 1 * _or9[4]), _or9[7] > 0 && (_oqx.houg += 1 * _or9[7]), _or9[10] > 0 && (_oqx.tyku += 1 * _or9[10]));
            }
            var _ore = 0;
            _or2[_oqv.ship_id] && (_ore = _or2[_oqv.ship_id]);
            var _orf = 0;
            _or4[_oqv.ship_id] && (_orf = _or4[_oqv.ship_id]);
            var _org = 0,
                _orh = 0,
                _ori = _oqv.have_slot_ids();
            if (_ore + _orf > 0)
                for (var _orj = 0, _ork = _ori; _orj < _ork.length; _orj++) {
                    var _orl = _ork[_orj],
                        _orm = _oqu.default.model.slot.getMst(_orl),
                        _orn = _orm.equipType;
                    12 != _orn && 13 != _orn || (_orm.sakuteki >= 5 && (_org += _oqv.get_slotnums(parseInt(_orl))), _orm.taiku >= 2 && _oqv.get_slotnums(parseInt(_orl)), _orm.meichu >= 8 && (_orh += _oqv.get_slotnums(parseInt(_orl))));
                }
            1 == _ore ? _org >= 1 && (_oqx.houg += 3, _oqx.houm += 3, _oqx.kaih += 2) : 2 == _ore && _org >= 1 && (_oqx.houg += 2, _oqx.houm += 2, _oqx.kaih += 1);
            var _oro = 0,
                _orp = [],
                _orq = [];
            if (_or3[_oqv.ship_id]) {
                _oro = _or3[_oqv.ship_id];
                var _orr = _oqv.have_slot_ids();
                [174].forEach(function(_ors) {
                    var _ort = null;
                    _orr.indexOf(_ors.toString()) > -1 && (_orq[_ors] = _oqv.get_each_level_nums(_ors), null == _orp[_ors] && (_orp[_ors] = []), _orq[_ors].forEach(function(_oru, _orv) {
                        var _orw = null;
                        for (var _orx = 1; _orx <= _oqv.SLOT_LEVEL_MAX; _orx++) null == _orp[_ors][_orx] && (_orp[_ors][_orx] = 0), _orv >= _orx && (_orp[_ors][_orx] += _oru);
                    }));
                });
            }
            if (_oro > 0) {
                var _ory = _orq[174];
                if (1 == _oro && _ory) {
                    var _orz = _orp[174];
                    _oqx.raig += 4, _orz[6] >= 1 && (_oqx.raig += 1), _orz[8] >= 1 && (_oqx.houm += 1), _orz[10] >= 1 && (_oqx.houg += 1);
                }
            }
            return _orh > 0 && (_orf >= 1 && _orf <= 3 && (_oqx.houg += 2, _oqx.houm += 2, _oqx.kaih += 2), 1 == _orf ? _oqx.houg += 1 : 3 == _orf && (_oqx.houg += 2)), _oqx;
        };
    },
    78123: function(_os0, _os1, _os2) {
        'use strict';
        var _os3 = null;
        var _os4 = this && this.__importDefault || function(_os5) {
            var _os6 = null;
            return _os5 && _os5.__esModule ? _os5 : {
                'default': _os5
            };
        };
        defineModule(_os1);
        Object.defineProperty(_os1, '__esModule', {
            'value': true
        }), _os1.getSlot505PersonalEffect = void 0;
        var _os7 = _os2(74496),
            _os8 = _os4(_os2(18622));
        _os1.getSlot505PersonalEffect = function(_os9) {
            var _osa = null,
                _osb = new _os7.SlotItemEffectModel(),
                _osc = false,
                _osd = new _os7.SlotItemEffectModel();
            if (2 == _os9.stype ? (_osd.houg += 1, _osd.tyku += 2, _osd.kaih += 2, _osc = true) : 1 == _os9.stype ? (_osd.houg += 1, _osd.tyku += 1, _osd.kaih += 1, _osc = true) : 3 == _os9.stype || 21 == _os9.stype || 4 == _os9.stype ? (_osd.tyku += 1, _osd.kaih += 2, _osc = true) : 5 != _os9.stype && 6 != _os9.stype && 16 != _os9.stype || (_osd.tyku += 1, _osd.kaih += 1, _osc = true), _osc) {
                var _ose = _os9.get_slotnums(505);
                _osb.add(_osd.multiply(_ose));
            }
            var _osf = {
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
                _osg = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2
                },
                _osh = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _osf[_os9.ship_id] ? (_osb.houg += 2, _osb.tyku += 3, _osb.kaih += 4) : 2 == _osf[_os9.ship_id] ? (_osb.houg += 1, _osb.tyku += 2, _osb.kaih += 3) : 3 == _osf[_os9.ship_id] ? (_osb.tyku += 2, _osb.kaih += 2) : 4 == _osf[_os9.ship_id] ? (_osb.tyku += 1, _osb.kaih += 2) : 5 == _osf[_os9.ship_id] && (_osb.houg += 1, _osb.tyku += 1, _osb.kaih += 1);
            var _osi = 0;
            if (_osg[_os9.ship_id] && _osi++, _osh[_os9.ship_id] && _osi++, 0 == _osi) return _osb;
            for (var _osj = 0, _osk = 0, _osl = 0, _osm = _os9.have_slot_ids(); _osl < _osm.length; _osl++) {
                var _osn = _osm[_osl],
                    _oso = _os8.default.model.slot.getMst(_osn),
                    _osp = _oso.equipType;
                12 != _osp && 13 != _osp || (_oso.sakuteki >= 5 && (_osj += _os9.get_slotnums(parseInt(_osn))), _oso.taiku >= 2 && (_osk += _os9.get_slotnums(parseInt(_osn))));
            }
            var _osq = _osg[_os9.ship_id];
            _osk > 0 && _osq > 0 && (1 == _osq ? (_osb.houg += 1, _osb.tyku += 2, _osb.kaih += 3) : 2 == _osq && (_osb.tyku += 2, _osb.kaih += 2));
            var _osr = _osh[_os9.ship_id];
            return _osj > 0 && _osr > 0 && 1 == _osr && (_osb.houg += 1, _osb.kaih += 1), _osb;
        };
    },
    25765: (_oss, _ost, _osu) => {
        'use strict';
        var _osv = null;
        defineModule(_ost);
        Object.defineProperty(_ost, '__esModule', {
            'value': true
        }), _ost.getSlot506PersonalEffect = void 0;
        var _osw = _osu(74496);
        _ost.getSlot506PersonalEffect = function(_osx) {
            var _osy = null,
                _osz = new _osw.SlotItemEffectModel();
            return 961 == _osx.ship_id ? (_osz.houg += 2, _osz.houm += 3, _osz.tyku += 2, _osz.kaih += 4) : 145 == _osx.ship_id || 497 == _osx.ship_id || 656 == _osx.ship_id || 557 == _osx.ship_id || 558 == _osx.ship_id || 951 == _osx.ship_id || 975 == _osx.ship_id ? (_osz.houg += 1, _osz.houm += 2, _osz.tyku += 1, _osz.kaih += 3) : 578 != _osx.ship_id && 419 != _osx.ship_id && 464 != _osx.ship_id && 470 != _osx.ship_id && 407 != _osx.ship_id && 235 != _osx.ship_id && 147 != _osx.ship_id && 538 != _osx.ship_id && 537 != _osx.ship_id && 955 != _osx.ship_id && 960 != _osx.ship_id || (_osz.houg += 1, _osz.houm += 1, _osz.tyku += 1, _osz.kaih += 2), _osz;
        };
    },
    88271: function(_ot0, _ot1, _ot2) {
        'use strict';
        var _ot3 = null;
        var _ot4 = this && this.__importDefault || function(_ot5) {
            var _ot6 = null;
            return _ot5 && _ot5.__esModule ? _ot5 : {
                'default': _ot5
            };
        };
        defineModule(_ot1);
        Object.defineProperty(_ot1, '__esModule', {
            'value': true
        }), _ot1.getSlot50PersonalEffect = void 0;
        var _ot7 = _ot2(74496),
            _ot8 = _ot4(_ot2(18622));
        _ot1.getSlot50PersonalEffect = function(_ot9) {
            var _ota = null,
                _otb = new _ot7.SlotItemEffectModel(),
                _otc = false,
                _otd = new _ot7.SlotItemEffectModel();
            7 != _ot9.ctype && 13 != _ot9.ctype && 8 != _ot9.ctype && 29 != _ot9.ctype && 9 != _ot9.ctype && 31 != _ot9.ctype || (_otd.houg += 1, _otc = true), 8 != _ot9.ctype && 29 != _ot9.ctype && 9 != _ot9.ctype && 31 != _ot9.ctype || (_otd.houg += 1, _otd.kaih += 1, _otc = true);
            var _ote = _ot9.get_slotnums(50);
            9 != _ot9.ctype && 31 != _ot9.ctype || _ote >= 2 && (_otd.houg += 1, _otc = true);
            var _otf = 0;
            if (501 != _ot9.ship_id && 506 != _ot9.ship_id && 502 != _ot9.ship_id && 507 != _ot9.ship_id || (_otd.houg += 1, _otc = true, _otf = 1), 0 == _otc) return _otb;
            _otb = _otd.multiply(_ote);
            for (var _otg = 0, _oth = 0, _oti = _ot9.have_slot_ids(); _oth < _oti.length; _oth++) {
                var _otj = _oti[_oth],
                    _otk = _ot8.default.model.slot.getMst(_otj),
                    _otl = _otk.equipType;
                12 != _otl && 13 != _otl || _otk.sakuteki >= 5 && (_otg += _ot9.get_slotnums(parseInt(_otj)));
            }
            if (_otg > 0) {
                if (7 == _ot9.ctype || 13 == _ot9.ctype) 0 == _ot9.get_slotnums(90) && (_otb.houg += 1, _otb.kaih += 1, _otb.raig += 1);
                else 8 != _ot9.ctype && 29 != _ot9.ctype && 9 != _ot9.ctype && 31 != _ot9.ctype || (_otb.houg += 3, _otb.kaih += 2, _otb.raig += 2);
                501 != _ot9.ship_id && 506 != _ot9.ship_id || (_otb.houg += 1, _otb.kaih += 1);
            }
            var _otm = _ot9.get_slotnums(30),
                _otn = _ot9.get_slotnums(410);
            return 1 == _otf && (_otm + _otn > 0 && (_otb.houg += 1, _otb.tyku += 3, _otb.kaih += 2), _otn > 0 && (_otb.houg += 2)), _otb;
        };
    },
    28221: (_oto, _otp, _otq) => {
        'use strict';
        var _otr = null;
        defineModule(_otp);
        Object.defineProperty(_otp, '__esModule', {
            'value': true
        }), _otp.getSlot510PersonalEffect = void 0;
        var _ots = _otq(74496);
        _otp.getSlot510PersonalEffect = function(_ott) {
            var _otu = null,
                _otv = new _ots.SlotItemEffectModel(),
                _otw = false,
                _otx = new _ots.SlotItemEffectModel();
            if ('イギリス' == _ott.getCountryName() && (_otx.houg += 2, _otx.tais += 3, _otx.kaih += 2, _otx.saku += 2, _otw = true), 88 == _ott.ctype && (_otv.houg += 4, _otv.kaih += 2, _otx.saku += 3, _otx.houm += 2, _otw = true), 0 == _otw) return _otv;
            var _oty = _ott.get_slotnums(510);
            return _otv.add(_otx.multiply(_oty)), _otv;
        };
    },
    14830: (_otz, _ou0, _ou1) => {
        'use strict';
        var _ou2 = null;
        defineModule(_ou0);
        Object.defineProperty(_ou0, '__esModule', {
            'value': true
        }), _ou0.getSlot511PersonalEffect = void 0;
        var _ou3 = _ou1(74496);
        _ou0.getSlot511PersonalEffect = function(_ou4) {
            var _ou5 = null,
                _ou6 = new _ou3.SlotItemEffectModel();
            return 122 == _ou4.ctype ? (_ou6.raig += 3, _ou6.kaih += 4) : 114 == _ou4.ctype && (_ou6.raig += 1, _ou6.kaih += 2), _ou6;
        };
    },
    54047: (_ou7, _ou8, _ou9) => {
        'use strict';
        var _oua = null;
        defineModule(_ou8);
        Object.defineProperty(_ou8, '__esModule', {
            'value': true
        }), _ou8.getSlot517PersonalEffect = void 0;
        var _oub = _ou9(74496);
        _ou8.getSlot517PersonalEffect = function(_ouc) {
            var _oud = null,
                _oue = new _oub.SlotItemEffectModel();
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
            }[_ouc.ctype] && 74 != _ouc.ctype && 77 != _ouc.ctype && 85 != _ouc.ctype && 117 != _ouc.ctype && 104 != _ouc.ctype || (_oue.houm += 1, _oue.kaih += 1, _oue.saku += 1), 38 == _ouc.ctype && (_oue.houg += 1, _oue.houm += 1), 960 == _ouc.ship_id ? (_oue.houg += 2, _oue.houm += 1, _oue.kaih += 3, _oue.saku += 2) : 955 != _ouc.ship_id && 578 != _ouc.ship_id && 961 != _ouc.ship_id && 656 != _ouc.ship_id && 464 != _ouc.ship_id && 470 != _ouc.ship_id && 419 != _ouc.ship_id && 407 != _ouc.ship_id && 235 != _ouc.ship_id && 147 != _ouc.ship_id && 975 != _ouc.ship_id || (_oue.houg += 1, _oue.houm += 1, _oue.kaih += 2, _oue.saku += 1);
            for (var _ouf = [], _oug = function(_ouh) {
                    var _oui = null,
                        _ouj = _ouc.get_each_level_nums(_ouh);
                    null == _ouf[_ouh] && (_ouf[_ouh] = []), _ouj.forEach(function(_ouk, _oul) {
                        var _oum = null;
                        for (var _oun = 1; _oun <= _ouc.SLOT_LEVEL_MAX; _oun++) null == _ouf[_ouh][_oun] && (_ouf[_ouh][_oun] = 0), _oul >= _oun && (_ouf[_ouh][_oun] += _ouk);
                    });
                }, _ouo = 0, _oup = [267, 366, 450, 517]; _ouo < _oup.length; _ouo++) {
                _oug(_oup[_ouo]);
            }
            var _ouq = _ouf[517];
            return _ouq[7] > 0 && (_oue.houm += 1), _ouq[8] > 0 && (_oue.kaih += 1), _ouq[9] > 0 && (_oue.houg += 1), _ouq[10] > 0 && (_oue.houm += 1), (_ouf[267][3] > 0 || _ouf[366][3] > 0) && (_oue.houg += 1, _oue.houm += 1, 38 == _ouc.ctype && (_oue.houg += 1, _oue.houm += 1), _ouf[450][4] > 0 && (_oue.houg += 1, _oue.houm += 1, _oue.tyku += 4, _oue.kaih += 3)), _oue;
        };
    },
    76054: (_our, _ous, _out) => {
        'use strict';
        var _ouu = null;
        defineModule(_ous);
        Object.defineProperty(_ous, '__esModule', {
            'value': true
        }), _ous.getSlot518PersonalEffect = void 0;
        var _ouv = _out(74496);
        _ous.getSlot518PersonalEffect = function(_ouw) {
            var _oux = null,
                _ouy = new _ouv.SlotItemEffectModel(),
                _ouz = false,
                _ov0 = new _ouv.SlotItemEffectModel();
            if (34 != _ouw.ctype && 56 != _ouw.ctype || (_ov0.houg += 1, _ov0.tyku += 1, _ov0.tais += 1, _ov0.kaih += 1, _ouz = true), 16 == _ouw.stype && (_ov0.houg += 1, _ov0.raig += 1, _ov0.kaih += 1, _ouz = true), 622 != _ouw.ship_id && 624 != _ouw.ship_id && 623 != _ouw.ship_id || (_ov0.houg += 1, _ouz = true), 622 != _ouw.ship_id && 624 != _ouw.ship_id || (_ov0.tyku += 1, _ouz = true), 624 == _ouw.ship_id && (_ov0.tais += 2, _ouz = true), 0 == _ouz) return _ouy;
            var _ov1 = _ouw.get_slotnums(518);
            return _ouy.add(_ov0.multiply(_ov1)), _ouy;
        };
    },
    93053: (_ov2, _ov3, _ov4) => {
        'use strict';
        var _ov5 = null;
        defineModule(_ov3);
        Object.defineProperty(_ov3, '__esModule', {
            'value': true
        }), _ov3.getSlot519PersonalEffect = void 0;
        var _ov6 = _ov4(74496);
        _ov3.getSlot519PersonalEffect = function(_ov7) {
            var _ov8 = null,
                _ov9 = new _ov6.SlotItemEffectModel();
            return 122 == _ov7.ctype && (_ov9.houm += 2, _ov9.kaih += 2), 114 == _ov7.ctype && (_ov9.raig += 1, _ov9.houm += 2, _ov9.kaih += 2), _ov9;
        };
    },
    81254: (_ova, _ovb, _ovc) => {
        'use strict';
        var _ovd = null;
        defineModule(_ovb);
        Object.defineProperty(_ovb, '__esModule', {
            'value': true
        }), _ovb.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _ove = _ovc(74496);
        _ovb.getSlot51cmSeriesGunPersonalEffect = function(_ovf) {
            var _ovg = null,
                _ovh = new _ove.SlotItemEffectModel(),
                _ovi = false,
                _ovj = new _ove.SlotItemEffectModel(),
                _ovk = _ovf.get_slotnums(142),
                _ovl = _ovf.get_slotnums(460),
                _ovm = _ovk + _ovl;
            if (916 != _ovf.ship_id && 911 != _ovf.ship_id && 546 != _ovf.ship_id || (_ovj.houg += 1, _ovj.houm += 1, _ovl >= 1 && (_ovh.kaih += 1, _ovh.houm += 1), _ovi = true), 37 == _ovf.ctype && _ovm >= 1 && (_ovh.houg += 1, _ovh.houm += 2), 0 == _ovi) return _ovh;
            var _ovn = _ovf.get_slotnums(128) + _ovf.get_slotnums(281);
            return _ovh.add(_ovj.multiply(_ovn)), _ovh;
        };
    },
    88792: (_ovo, _ovp, _ovq) => {
        'use strict';
        var _ovr = null;
        defineModule(_ovp);
        Object.defineProperty(_ovp, '__esModule', {
            'value': true
        }), _ovp.getSlot520PersonalEffect = void 0;
        var _ovs = _ovq(74496);
        _ovp.getSlot520PersonalEffect = function(_ovt) {
            var _ovu = null,
                _ovv = new _ovs.SlotItemEffectModel(),
                _ovw = false,
                _ovx = new _ovs.SlotItemEffectModel(),
                _ovy = 0,
                _ovz = 0,
                _ow0 = 0,
                _ow1 = _ovt.get_slotnums(520);
            7 == _ovt.ctype || 13 == _ovt.ctype ? (_ovx.houg += 1, _ovw = true, _ovz = 1, _ow0 = 1) : 8 == _ovt.ctype || 29 == _ovt.ctype ? (_ovx.houg += 2, _ovx.kaih += 1, _ovw = true, _ovz = 2, _ow0 = 1) : 9 != _ovt.ctype && 31 != _ovt.ctype || (_ovx.houg += 3, _ovx.kaih += 1, _ovx.houm += 1, _ovw = true, _ovz = 2, _ow0 = 1, 2 == _ow1 && (_ovv.houg += 2), _ow1 >= 3 && (_ovv.houg += 4));
            var _ow2 = _ovt.get_have_rader_nums().water_rader,
                _ow3 = 0,
                _ow4 = 0;
            if (_ovz + _ow0 > 0) {
                for (var _ow5 = _ovt.getSpItemDict_FukuhouTaikuHeisou(), _ow6 = _ovt.getSpItemDict_Tansou21GouDentan(), _ow7 = 0, _ow8 = _ovt.have_slot_ids(); _ow7 < _ow8.length; _ow7++) {
                    var _ow9 = _ow8[_ow7],
                        _owa = parseInt(_ow9);
                    null != _ow5[_owa] ? (_ow5[_owa] += _ovt.get_slotnums(_owa), _ow3 += _ovt.get_slotnums(_owa)) : null != _ow6[_owa] && (_ow6[_owa] += _ovt.get_slotnums(_owa), _ow4 += _ovt.get_slotnums(_owa));
                }
                _ow2 > 0 && (1 == _ovz ? (_ovv.houg += 2, _ovv.raig += 2, _ovv.kaih += 1, _ovv.houm += 1) : 2 == _ovz && (_ovv.houg += 3, _ovv.raig += 2, _ovv.kaih += 2, _ovv.houm += 1)), _ow3 > 0 && 1 == _ow0 && (_ovv.houg += 1, _ovv.tyku += 4, _ovv.kaih += 4, _ovv.houm += 1);
            }
            if (269 == _ovt.ship_id || 265 == _ovt.ship_id || 319 == _ovt.ship_id ? (2 == _ow1 && (_ovv.houg += 2), _ow1 >= 3 && (_ovv.houg += 4)) : 501 != _ovt.ship_id && 506 != _ovt.ship_id && 502 != _ovt.ship_id && 507 != _ovt.ship_id && 503 != _ovt.ship_id && 504 != _ovt.ship_id || (_ovx.houg += 1, _ovw = true, _ow2 >= 1 && (_ovv.houg += 1, _ovv.kaih += 1, _ovv.houm += 2), _ow4 >= 1 && (_ovv.houg += 1, _ovv.tyku += 3, _ovv.kaih += 2, _ovv.houm += 1), _ovt.get_slotnums(410) > 0 && (_ovv.houg += 2, _ovv.tyku += 3, _ovv.kaih += 2, _ovv.houm += 1), _ovy = 1), 502 == _ovt.ship_id || 269 == _ovt.ship_id || 265 == _ovt.ship_id || 319 == _ovt.ship_id ? (_ovx.houg += 1, _ovx.houm += 1, _ovw = true) : 507 == _ovt.ship_id && (_ovx.houg += 1, _ovx.houm += 2, _ovx.tyku += 1, _ovw = true), _ovw && _ovv.add(_ovx.multiply(_ow1)), 0 == _ovy) return _ovv;
            var _owb = _ovt.get_each_level_over_nums([520]),
                _owc = _owb.slot[520][7],
                _owd = _owb.slot[520][10];
            return 1 == _ovy && (_owc > 0 && (_ovv.houg += 1 * _owc), _owd > 0 && (_ovv.houm += 1 * _owd)), _ovv;
        };
    },
    33242: (_owe, _owf, _owg) => {
        'use strict';
        var _owh = null;
        defineModule(_owf);
        Object.defineProperty(_owf, '__esModule', {
            'value': true
        }), _owf.getSlot521PersonalEffect = void 0;
        var _owi = _owg(74496);
        _owf.getSlot521PersonalEffect = function(_owj) {
            var _owk = null,
                _owl = new _owi.SlotItemEffectModel(),
                _owm = false,
                _own = new _owi.SlotItemEffectModel(),
                _owo = 0;
            if (52 == _owj.ctype && (_owo = 1), 183 == _owj.ship_id ? (_own.houg += 1, _own.houm += 1, _own.saku += 2, _own.kaih += 2, _owm = true) : 321 == _owj.ship_id ? (_own.houg += 2, _own.houm += 2, _own.saku += 3, _own.kaih += 3, _owm = true) : 507 == _owj.ship_id && (_own.houg += 3, _own.tyku += 1, _own.houm += 3, _own.saku += 2, _own.kaih += 2, _owm = true, _owo = 1), _owm) {
                var _owp = _owj.get_slotnums(521);
                _owl.add(_own.multiply(_owp));
            }
            if (0 == _owo) return _owl;
            var _owq = _owj.get_each_level_over_nums([521]).slot[521];
            return 1 == _owo && (_owq[1] >= 1 && (_owl.houm += 1 * _owq[1]), _owq[2] >= 1 && (_owl.kaih += 1 * _owq[2]), _owq[3] >= 1 && (_owl.saku += 1 * _owq[3], _owl.raig += 1 * _owq[3]), _owq[4] >= 1 && (_owl.houg += 1 * _owq[4]), _owq[6] >= 1 && (_owl.houm += 1 * _owq[6]), _owq[8] >= 1 && (_owl.saku += 1 * _owq[8]), _owq[10] >= 1 && (_owl.houm += 1 * _owq[10])), _owl;
        };
    },
    3296: (_owr, _ows, _owt) => {
        'use strict';
        var _owu = null;
        defineModule(_ows);
        Object.defineProperty(_ows, '__esModule', {
            'value': true
        }), _ows.getSlot522_523PersonalEffect = void 0;
        var _owv = _owt(74496);
        _ows.getSlot522_523PersonalEffect = function(_oww) {
            var _owx = null,
                _owy = new _owv.SlotItemEffectModel(),
                _owz = false,
                _ox0 = new _owv.SlotItemEffectModel(),
                _ox1 = 0,
                _ox2 = _oww.get_slotnums(522),
                _ox3 = _oww.get_slotnums(523),
                _ox4 = _ox2 + _ox3;
            if (14 == _oww.stype && (_ox0.raig += 1, _ox0.kaih += 5, _ox0.houm += 1, _ox0.saku += 3, _owz = true, _ox3 >= 1 && (_owy.raig += 2 * _ox3, _owy.baku += 2 * _ox3, _owy.kaih += 1 * _ox3, _owy.houm += 1 * _ox3, _owy.saku += 1 * _ox3), _ox1 = 1), 0 == _owz) return _owy;
            if (_owy.add(_ox0.multiply(_ox4)), 0 == _ox1) return _owy;
            var _ox5 = _oww.get_each_level_over_nums([522, 523]),
                _ox6 = _ox5.slot[522],
                _ox7 = _ox5.slot[523];
            if (1 == _ox1) {
                if (_ox6[1] >= 1 || _ox7[1] >= 1) {
                    var _ox8 = _ox6[1] + _ox7[1];
                    _owy.raig += 1 * _ox8;
                }
                if (_ox6[2] >= 1 || _ox7[2] >= 1) {
                    var _ox9 = _ox6[2] + _ox7[2];
                    _owy.houm += 1 * _ox9;
                }
                if (_ox6[3] >= 1 || _ox7[3] >= 1) {
                    var _oxa = _ox6[3] + _ox7[3];
                    _owy.kaih += 1 * _oxa;
                }
                if (_ox6[5] >= 1 || _ox7[5] >= 1) {
                    var _oxb = _ox6[5] + _ox7[5];
                    _owy.saku += 1 * _oxb;
                }
                if (_ox6[8] >= 1 || _ox7[8] >= 1) {
                    var _oxc = _ox6[8] + _ox7[8];
                    _owy.houm += 1 * _oxc;
                }
                if (_ox6[10] >= 1 || _ox7[10] >= 1) {
                    var _oxd = _ox6[10] + _ox7[10];
                    _owy.kaih += 1 * _oxd;
                }
            }
            return _owy;
        };
    },
    59415: (_oxe, _oxf, _oxg) => {
        'use strict';
        var _oxh = null;
        defineModule(_oxf);
        Object.defineProperty(_oxf, '__esModule', {
            'value': true
        }), _oxf.getSlot524PersonalEffect = void 0;
        var _oxi = _oxg(74496);
        _oxf.getSlot524PersonalEffect = function(_oxj) {
            var _oxk = null,
                _oxl = new _oxi.SlotItemEffectModel(),
                _oxm = false,
                _oxn = new _oxi.SlotItemEffectModel(),
                _oxo = 0,
                _oxp = 0;
            if (17 != _oxj.stype && 19 != _oxj.stype && 20 != _oxj.stype && 21 != _oxj.stype && 22 != _oxj.stype || (_oxn.houg += 1, _oxn.tyku += 2, _oxn.kaih += 2, _oxn.houm += 1, _oxm = true, _oxo = 1, _oxp = 1), 0 == _oxm) return _oxl;
            var _oxq = _oxj.get_slotnums(524);
            _oxl.add(_oxn.multiply(_oxq));
            var _oxr = _oxj.get_have_rader_nums().air_rader;
            if (1 == _oxp && _oxr >= 1 && (_oxl.tyku += 2, _oxl.kaih += 2), 0 == _oxo) return _oxl;
            var _oxs = _oxj.get_each_level_over_nums([524]).slot[524];
            return 1 == _oxo && (_oxs[1] >= 1 && (_oxl.kaih += 1 * _oxs[1]), _oxs[2] >= 1 && (_oxl.kaih += 1 * _oxs[2]), _oxs[4] >= 1 && (_oxl.tyku += 1 * _oxs[4]), _oxs[6] >= 1 && (_oxl.kaih += 1 * _oxs[6]), _oxs[7] >= 1 && (_oxl.houm += 1 * _oxs[7]), _oxs[8] >= 1 && (_oxl.tyku += 1 * _oxs[8]), _oxs[9] >= 1 && (_oxl.kaih += 1 * _oxs[9]), _oxs[10] >= 1 && (_oxl.houg += 1 * _oxs[10])), _oxl;
        };
    },
    36731: (_oxt, _oxu, _oxv) => {
        'use strict';
        var _oxw = null;
        defineModule(_oxu);
        Object.defineProperty(_oxu, '__esModule', {
            'value': true
        }), _oxu.getSlot527PersonalEffect = void 0;
        var _oxx = _oxv(74496);
        _oxu.getSlot527PersonalEffect = function(_oxy) {
            var _oxz = null,
                _oy0 = new _oxx.SlotItemEffectModel(),
                _oy1 = 0;
            if ('イギリス' == _oxy.getCountryName() && (_oy1 = 1, _oy0.tyku += 2, _oy0.houm += 1, _oy0.kaih += 1, _oy0.saku += 2, 88 == _oxy.ctype && (_oy0.houg += 2), 67 == _oxy.ctype && (_oy0.houg += 1)), 0 == _oy1) return _oy0;
            var _oy2 = _oxy.get_each_level_over_nums([527]),
                _oy3 = _oy2.slot[527][2],
                _oy4 = _oy2.slot[527][4],
                _oy5 = _oy2.slot[527][7],
                _oy6 = _oy2.slot[527][10];
            return 1 == _oy1 && (_oy3 >= 1 && (_oy0.tyku += 1), _oy4 >= 1 && (_oy0.kaih += 1), _oy5 >= 1 && (_oy0.tyku += 1), _oy6 >= 1 && (_oy0.houm += 1)), _oy0;
        };
    },
    30450: (_oy7, _oy8, _oy9) => {
        'use strict';
        var _oya = null;
        defineModule(_oy8);
        Object.defineProperty(_oy8, '__esModule', {
            'value': true
        }), _oy8.getSlot528PersonalEffect = void 0;
        var _oyb = _oy9(74496);
        _oy8.getSlot528PersonalEffect = function(_oyc) {
            var _oyd = null,
                _oye = new _oyb.SlotItemEffectModel(),
                _oyf = false,
                _oyg = new _oyb.SlotItemEffectModel(),
                _oyh = 0;
            if ('イギリス' == _oyc.getCountryName() && (_oyg.houg += 1, _oyg.houm += 2, _oyg.kaih += 1, 108 == _oyc.ctype && (_oyg.houg += 1, _oyg.kaih += 1), _oyf = true, _oyh = 1), 0 == _oyf) return _oye;
            var _oyi = _oyc.get_slotnums(528);
            if (_oye.add(_oyg.multiply(_oyi)), 0 == _oyh) return _oye;
            var _oyj = _oyc.get_each_level_over_nums([528]),
                _oyk = _oyj.slot[528][2],
                _oyl = _oyj.slot[528][4],
                _oym = _oyj.slot[528][7],
                _oyn = _oyj.slot[528][10];
            return 1 == _oyh && (_oyk >= 1 && (_oye.houg += 1 * _oyk), _oyl >= 1 && (_oye.houm += 1 * _oyl), _oym >= 1 && (_oye.kaih += 1 * _oym), _oyn >= 1 && (_oye.houm += 1 * _oyn)), _oye;
        };
    },
    15653: (_oyo, _oyp, _oyq) => {
        'use strict';
        var _oyr = null;
        defineModule(_oyp);
        Object.defineProperty(_oyp, '__esModule', {
            'value': true
        }), _oyp.getSlot530PersonalEffect = void 0;
        var _oys = _oyq(74496);
        _oyp.getSlot530PersonalEffect = function(_oyt) {
            var _oyu = null,
                _oyv = new _oys.SlotItemEffectModel(),
                _oyw = false;
            if (6 == _oyt.ctype && (_oyw = true), 0 == _oyw) return _oyv;
            var _oyx = false,
                _oyy = new _oys.SlotItemEffectModel(),
                _oyz = _oyt.get_slotnums(530),
                _oz0 = _oyt.get_slotnums(174),
                _oz1 = _oyt.get_each_level_over_nums([530, 174]),
                _oz2 = _oz1.slot[530],
                _oz3 = _oz1.slot[174],
                _oz4 = _oyt.get_have_rader_nums(),
                _oz5 = _oz4.water_rader,
                _oz6 = _oz4.high_water_rader;
            return _oz4.air_rader, 149 != _oyt.ship_id && 150 != _oyt.ship_id && 151 != _oyt.ship_id && 152 != _oyt.ship_id && 593 != _oyt.ship_id || (_oyy.houg += 2, _oyx = true), 591 != _oyt.ship_id && 954 != _oyt.ship_id || (_oyy.houg += 3, _oyx = true), 592 == _oyt.ship_id && (_oyy.houg += 4, _oyx = true), 149 != _oyt.ship_id && 150 != _oyt.ship_id && 151 != _oyt.ship_id && 152 != _oyt.ship_id || (_oyy.tyku += 1, _oyx = true), 591 != _oyt.ship_id && 592 != _oyt.ship_id && 954 != _oyt.ship_id || (_oyy.tyku += 2, _oyx = true), 593 == _oyt.ship_id && (_oyy.tyku += 3, _oyx = true), 592 == _oyt.ship_id && (_oyy.houg += 1, _oyy.houm += 2, _oyx = true, _oz2[2] >= 1 && (_oyv.houm += 1 * _oz2[2]), _oz2[4] >= 1 && (_oyv.houg += 1 * _oz2[4]), _oz2[6] >= 1 && (_oyv.souk += 1 * _oz2[6]), _oz2[7] >= 1 && (_oyv.houm += 1 * _oz2[7]), _oz2[8] >= 1 && (_oyv.houg += 1 * _oz2[8]), _oz2[9] >= 1 && (_oyv.souk += 1 * _oz2[9]), _oz2[10] >= 1 && (_oyv.houm += 1 * _oz2[10])), 150 != _oyt.ship_id && 152 != _oyt.ship_id && 591 != _oyt.ship_id && 954 != _oyt.ship_id || (_oyy.houm += 1, _oyx = true, _oz2[2] >= 1 && (_oyv.houg += 1 * _oz2[2]), _oz2[4] >= 1 && (_oyv.souk += 1 * _oz2[4]), _oz2[6] >= 1 && (_oyv.houm += 1 * _oz2[6]), _oz2[8] >= 1 && (_oyv.houg += 1 * _oz2[8]), _oz2[10] >= 1 && (_oyv.houm += 1 * _oz2[10])), 149 != _oyt.ship_id && 151 != _oyt.ship_id && 593 != _oyt.ship_id || (_oz2[4] >= 1 && (_oyv.houg += 1 * _oz2[4]), _oz2[7] >= 1 && (_oyv.souk += 1 * _oz2[7]), _oz2[10] >= 1 && (_oyv.houm += 1 * _oz2[10])), 592 == _oyt.ship_id && (_oz5 >= 1 && (_oyv.houg += 3, _oyv.houm += 3, _oyv.kaih += 3, 592 == _oyt.ship_id && (_oyv.houg += 3)), _oyz >= 2 && (_oyv.houm += 2), _oyz >= 3 && (_oyv.houm += 2), _oyz >= 4 && (_oyv.houm += 2), _oz6 >= 1 && (_oyv.houm += 1)), 149 != _oyt.ship_id && 150 != _oyt.ship_id && 151 != _oyt.ship_id && 152 != _oyt.ship_id && 591 != _oyt.ship_id && 954 != _oyt.ship_id && 593 != _oyt.ship_id || (_oz5 >= 1 && (_oyv.houg += 2, _oyv.houm += 2, _oyv.kaih += 2, 591 == _oyt.ship_id || 152 == _oyt.ship_id ? _oyv.houg += 3 : 954 == _oyt.ship_id || 150 == _oyt.ship_id ? _oyv.houg += 2 : 149 != _oyt.ship_id && 151 != _oyt.ship_id && 593 != _oyt.ship_id || (_oyv.houg += 1)), _oz6 >= 1 && (_oyv.houm += 1)), 591 != _oyt.ship_id && 592 != _oyt.ship_id && 593 != _oyt.ship_id && 954 != _oyt.ship_id || (_oz0 >= 1 && (_oyv.raig += 6, _oz3[6] >= 1 && (_oyv.raig += 1), _oz3[8] >= 1 && (_oyv.houm += 1), _oz3[10] >= 1 && (_oyv.houg += 1)), _oz6 >= 1 && (_oyv.houg += 2, _oyv.raig += 2, _oyv.houm += 2, _oyv.kaih += 3, 591 == _oyt.ship_id || 592 == _oyt.ship_id ? _oyv.houg += 2 : 954 != _oyt.ship_id && 593 != _oyt.ship_id || (_oyv.houg += 1)), _oyz >= 2 && (_oyv.houm += 1)), _oyx && _oyv.add(_oyy.multiply(_oyz)), _oyv;
        };
    },
    25851: (_oz7, _oz8, _oz9) => {
        'use strict';
        var _oza = null;
        defineModule(_oz8);
        Object.defineProperty(_oz8, '__esModule', {
            'value': true
        }), _oz8.getSlot531PersonalEffect = void 0;
        var _ozb = _oz9(74496);
        _oz8.getSlot531PersonalEffect = function(_ozc) {
            var _ozd = null,
                _oze = new _ozb.SlotItemEffectModel(),
                _ozf = _ozc.have_level_num_over_dict[531];
            return null == _ozf || (_ozf[4] >= 1 && (_oze.houm += 1 * _ozf[4]), _ozf[5] >= 1 && (_oze.houg += 1 * _ozf[5]), _ozf[6] >= 1 && (_oze.kaih += 1 * _ozf[6]), _ozf[7] >= 1 && (_oze.houm += 1 * _ozf[7]), _ozf[8] >= 1 && (_oze.houg += 1 * _ozf[8]), _ozf[9] >= 1 && (_oze.kaih += 1 * _ozf[9]), _ozf[10] >= 1 && (_oze.houm += 1 * _ozf[10])), _oze;
        };
    },
    91275: (_ozg, _ozh, _ozi) => {
        'use strict';
        var _ozj = null;
        defineModule(_ozh);
        Object.defineProperty(_ozh, '__esModule', {
            'value': true
        }), _ozh.getSlot538PersonalEffect = void 0;
        var _ozk = _ozi(74496);
        _ozh.getSlot538PersonalEffect = function(_ozl) {
            var _ozm = null,
                _ozn = new _ozk.SlotItemEffectModel(),
                _ozo = false,
                _ozp = new _ozk.SlotItemEffectModel(),
                _ozq = 0;
            if ('フランス' == _ozl.getCountryName() && (_ozp.houg += 3, _ozp.kaih += 2, _ozp.houm += 2, _ozo = true, _ozq = 1), 79 == _ozl.ctype ? (_ozp.houg += 2, 969 == _ozl.ship_id && (_ozp.houg += 1, _ozp.houm += 1, _ozp.kaih += 1), _ozo = true) : 70 == _ozl.ctype && (_ozp.houg += 1, _ozp.houm += 1, _ozp.tyku += 2, _ozp.kaih += 2, _ozo = true), 0 == _ozo) return _ozn;
            var _ozr = _ozl.get_slotnums(538);
            if (_ozn.add(_ozp.multiply(_ozr)), 0 == _ozq) return _ozn;
            var _ozs = _ozl.haveSlotLevelNumOver(538);
            return 1 == _ozq && (_ozs[3] >= 1 && (_ozn.kaih += 1 * _ozs[3]), _ozs[4] >= 1 && (_ozn.houm += 1 * _ozs[4]), _ozs[5] >= 1 && (_ozn.houg += 1 * _ozs[5]), _ozs[6] >= 1 && (_ozn.kaih += 1 * _ozs[6]), _ozs[7] >= 1 && (_ozn.houm += 1 * _ozs[7]), _ozs[8] >= 1 && (_ozn.houg += 1 * _ozs[8]), _ozs[9] >= 1 && (_ozn.kaih += 1 * _ozs[9]), _ozs[10] >= 1 && (_ozn.houg += 1 * _ozs[10], _ozn.houm += 1 * _ozs[10])), _ozn;
        };
    },
    72743: (_ozt, _ozu, _ozv) => {
        'use strict';
        var _ozw = null;
        defineModule(_ozu);
        Object.defineProperty(_ozu, '__esModule', {
            'value': true
        }), _ozu.getSlot540PersonalEffect = void 0;
        var _ozx = _ozv(74496);
        _ozu.getSlot540PersonalEffect = function(_ozy) {
            var _ozz = null,
                _p00 = new _ozx.SlotItemEffectModel(),
                _p01 = false,
                _p02 = new _ozx.SlotItemEffectModel();
            if (911 == _ozy.ship_id || 916 == _ozy.ship_id || 546 == _ozy.ship_id || 662 == _ozy.ship_id || 663 == _ozy.ship_id || 668 == _ozy.ship_id ? (_p02.kaih += 1, _p02.saku += 1, _p01 = true) : 73 == _ozy.ship_id || 506 == _ozy.ship_id || 121 == _ozy.ship_id || 503 == _ozy.ship_id || 504 == _ozy.ship_id || 188 == _ozy.ship_id || 189 == _ozy.ship_id ? (_p02.houm += 1, _p02.kaih += 1, _p02.saku += 1, _p01 = true) : 488 != _ozy.ship_id && 200 != _ozy.ship_id && 487 != _ozy.ship_id && 501 != _ozy.ship_id && 502 != _ozy.ship_id && 507 != _ozy.ship_id || (_p02.houg += 1, _p02.houm += 1, _p02.kaih += 1, _p02.saku += 1, _p01 = true), 'にっしん' == _ozy.yomi || 'ちとせ' == _ozy.yomi || 'ちよだ' == _ozy.yomi || 'あきつしま' == _ozy.yomi ? (_p02.houg += 1, _p02.houm += 1, _p02.tyku += 2, _p02.kaih += 2, _p02.saku += 2, _p01 = true) : 'みずほ' != _ozy.yomi && 'かもい' != _ozy.yomi || (_p02.houg += 2, _p02.houm += 1, _p02.tyku += 2, _p02.kaih += 2, _p02.saku += 2, _p01 = true), 0 == _p01) return _p00;
            var _p03 = _ozy.get_slotnums(540);
            return _p00.add(_p02.multiply(_p03)), _p00;
        };
    },
    57041: (_p04, _p05, _p06) => {
        'use strict';
        var _p07 = null;
        defineModule(_p05);
        Object.defineProperty(_p05, '__esModule', {
            'value': true
        }), _p05.getSlot545PersonalEffect = void 0;
        var _p08 = _p06(74496);
        _p05.getSlot545PersonalEffect = function(_p09) {
            var _p0a = null,
                _p0b = new _p08.SlotItemEffectModel(),
                _p0c = false,
                _p0d = new _p08.SlotItemEffectModel();
            if ('しょうかく' == _p09.yomi ? _p0b.houg += 4 : 'ずいかく' == _p09.yomi ? _p0b.houg += 3 : 'あかぎ' == _p09.yomi ? _p0b.houg += 2 : 'かが' != _p09.yomi && 'たいほう' != _p09.yomi || (_p0b.houg += 1), 461 == _p09.ship_id || 466 == _p09.ship_id ? (_p0d.houg += 1, _p0d.houm += 2, _p0d.kaih += 1, _p0d.saku += 2, _p0c = true) : 462 == _p09.ship_id || 467 == _p09.ship_id || 646 == _p09.ship_id ? (_p0d.houg += 1, _p0d.houm += 1, _p0d.saku += 1, _p0c = true) : 599 != _p09.ship_id && 610 != _p09.ship_id && 156 != _p09.ship_id || (_p0d.houm += 1, _p0d.saku += 1, _p0c = true), 0 == _p0c) return _p0b;
            var _p0e = _p09.get_slotnums(545);
            return _p0b.add(_p0d.multiply(_p0e)), _p0b;
        };
    },
    23035: (_p0f, _p0g, _p0h) => {
        'use strict';
        var _p0i = null;
        defineModule(_p0g);
        Object.defineProperty(_p0g, '__esModule', {
            'value': true
        }), _p0g.getSlot58PersonalEffect = void 0;
        var _p0j = _p0h(74496);
        _p0g.getSlot58PersonalEffect = function(_p0k) {
            var _p0l = null,
                _p0m = new _p0j.SlotItemEffectModel(),
                _p0n = new _p0j.SlotItemEffectModel();
            if ('しまかぜ' != _p0k.yomi && 4 != _p0k.stype && 54 != _p0k.ctype || (_p0n.raig = 1), !_p0n.exists()) return _p0m;
            var _p0o = _p0k.get_slotnums(58);
            return _p0m = _p0n.multiply(_p0o);
        };
    },
    47169: (_p0p, _p0q, _p0r) => {
        'use strict';
        var _p0s = null;
        defineModule(_p0q);
        Object.defineProperty(_p0q, '__esModule', {
            'value': true
        }), _p0q.getSlot59PersonalEffect = void 0;
        var _p0t = _p0r(74496);
        _p0q.getSlot59PersonalEffect = function(_p0u) {
            var _p0v = null,
                _p0w = new _p0t.SlotItemEffectModel();
            return 501 != _p0u.ship_id && 506 != _p0u.ship_id && 502 != _p0u.ship_id && 507 != _p0u.ship_id || (_p0w.tyku += 1, _p0w.kaih += 1), _p0w;
        };
    },
    87845: (_p0x, _p0y, _p0z) => {
        'use strict';
        var _p10 = null;
        defineModule(_p0y);
        Object.defineProperty(_p0y, '__esModule', {
            'value': true
        }), _p0y.getSlot5PersonalEffect = void 0;
        var _p11 = _p0z(74496);
        _p0y.getSlot5PersonalEffect = function(_p12) {
            var _p13 = null,
                _p14 = new _p11.SlotItemEffectModel(),
                _p15 = false,
                _p16 = new _p11.SlotItemEffectModel();
            if (52 != _p12.ctype && 9 != _p12.ctype || (_p16.houg += 1, 52 == _p12.ctype && (_p16.houg = _p16.houg + 1), _p15 = true), 0 == _p15) return _p14;
            var _p17 = _p12.get_slotnums(5);
            return _p14.add(_p16.multiply(_p17)), _p14;
        };
    },
    92253: (_p18, _p19, _p1a) => {
        'use strict';
        var _p1b = null;
        defineModule(_p19);
        Object.defineProperty(_p19, '__esModule', {
            'value': true
        }), _p19.getSlot60_154_219PersonalEffec = void 0;
        var _p1c = _p1a(74496);
        _p19.getSlot60_154_219PersonalEffec = function(_p1d) {
            var _p1e = null,
                _p1f = new _p1c.SlotItemEffectModel(),
                _p1g = false,
                _p1h = new _p1c.SlotItemEffectModel();
            if ('じゅんよう' != _p1d.yomi && 'ひよう' != _p1d.yomi && 'ずいほう' != _p1d.yomi && 'ちとせ' != _p1d.yomi && 'ちよだ' != _p1d.yomi || (_p1h.houg += 1, _p1h.tyku += 1, _p1h.kaih += 1, _p1g = true), 185 != _p1d.ship_id && 318 != _p1d.ship_id && 282 != _p1d.ship_id || (_p1h.houg += 1, _p1h.tyku += 1, _p1h.kaih += 1, _p1g = true), 888 != _p1d.ship_id && 883 != _p1d.ship_id || (_p1h.houg += 2, _p1h.tyku += 1, _p1h.kaih += 2, _p1g = true), 0 == _p1g) return _p1f;
            var _p1i = _p1d.get_slotnums(60) + _p1d.get_slotnums(154) + _p1d.get_slotnums(219);
            return _p1f.add(_p1h.multiply(_p1i)), _p1f;
        };
    },
    2578: (_p1j, _p1k, _p1l) => {
        'use strict';
        var _p1m = null;
        defineModule(_p1k);
        Object.defineProperty(_p1k, '__esModule', {
            'value': true
        }), _p1k.getSlot61PersonalEffect2 = _p1k.getSlot61PersonalEffect = void 0;
        var _p1n = _p1l(74496);
        _p1k.getSlot61PersonalEffect = function(_p1o) {
            var _p1p = null,
                _p1q = new _p1n.SlotItemEffectModel();
            if (553 == _p1o.ship_id) _p1q.houg = 3, _p1q.kaih = 2, _p1q.souk = 1, _p1q.houm = 5, _p1q.leng = 1;
            else {
                if (554 == _p1o.ship_id) _p1q.houg = 3, _p1q.kaih = 3, _p1q.souk = 3, _p1q.houm = 5, _p1q.leng = 1;
                else {
                    if (196 == _p1o.ship_id) _p1q.houm = 5, _p1q.leng = 1;
                    else {
                        if (197 != _p1o.ship_id) return _p1q;
                        _p1q.houm = 5, _p1q.leng = 1;
                    }
                }
            }
            return _p1q;
        }, _p1k.getSlot61PersonalEffect2 = function(_p1r) {
            var _p1s = null,
                _p1t = new _p1n.SlotItemEffectModel();
            if (null == _p1r.have_slots_dict[61]) return _p1t;
            for (var _p1u = 0, _p1v = 0, _p1w = _p1r.have_slots_dict[61]; _p1v < _p1w.length; _p1v++) {
                var _p1x = _p1w[_p1v].level;
                _p1u < _p1x && (_p1u = _p1x);
            }
            return 0 == _p1u || ('そうりゅう' == _p1r.yomi ? (_p1t.houg += 3, _p1t.saku += 3) : 'ひりゅう' == _p1r.yomi && (_p1t.houg += 2, _p1t.saku += 2), 508 != _p1r.ship_id && 509 != _p1r.ship_id && 560 != _p1r.ship_id || (_p1t.houg += 1, _p1t.saku += 1), _p1u >= 8 && 197 == _p1r.ship_id && (_p1t.houg += 1, _p1t.saku += 1)), _p1t;
        };
    },
    17143: (_p1y, _p1z, _p20) => {
        'use strict';
        var _p21 = null;
        defineModule(_p1z);
        Object.defineProperty(_p1z, '__esModule', {
            'value': true
        }), _p1z.getSlot63PersonalEffect = void 0;
        var _p22 = _p20(74496);
        _p1z.getSlot63PersonalEffect = function(_p23) {
            var _p24 = null,
                _p25 = new _p22.SlotItemEffectModel(),
                _p26 = new _p22.SlotItemEffectModel();
            1 != _p23.ctype && 5 != _p23.ctype && 10 != _p23.ctype || (_p26.tyku += 1), 'ゆうだち' == _p23.yomi && (_p26.houg += 1, _p26.tyku += 1, _p26.kaih += 2), 145 == _p23.ship_id || 961 == _p23.ship_id ? _p26.houg += 1 : 144 == _p23.ship_id ? _p26.raig += 1 : 469 == _p23.ship_id ? _p26.kaih += 2 : 242 == _p23.ship_id || 497 == _p23.ship_id || 244 == _p23.ship_id || 498 == _p23.ship_id || 975 == _p23.ship_id ? _p26.kaih += 1 : 627 == _p23.ship_id ? _p26.houg += 1 : 903 != _p23.ship_id && 908 != _p23.ship_id || (_p26.houg += 2);
            var _p27 = true;
            if (_p26.exists() || (_p27 = false), 0 == _p27) return _p25;
            var _p28 = _p23.get_slotnums(63);
            return _p25 = _p26.multiply(_p28);
        };
    },
    16164: (_p29, _p2a, _p2b) => {
        'use strict';
        var _p2c = null;
        defineModule(_p2a);
        Object.defineProperty(_p2a, '__esModule', {
            'value': true
        }), _p2a.getSlot67PersonalEffect = void 0;
        var _p2d = _p2b(74496);
        _p2a.getSlot67PersonalEffect = function(_p2e) {
            var _p2f = null,
                _p2g = new _p2d.SlotItemEffectModel(),
                _p2h = new _p2d.SlotItemEffectModel();
            if (13 != _p2e.stype && 14 != _p2e.stype && (_p2h.raig = -5), !_p2h.exists()) return _p2g;
            var _p2i = _p2e.get_slotnums(67);
            return _p2g = _p2h.multiply(_p2i);
        };
    },
    35023: (_p2j, _p2k, _p2l) => {
        'use strict';
        var _p2m = null;
        defineModule(_p2k);
        Object.defineProperty(_p2k, '__esModule', {
            'value': true
        }), _p2k.getSlot69PersonalEffect = void 0;
        var _p2n = _p2l(74496);
        _p2k.getSlot69PersonalEffect = function(_p2o) {
            var _p2p = null,
                _p2q = new _p2n.SlotItemEffectModel(),
                _p2r = false,
                _p2s = new _p2n.SlotItemEffectModel();
            if (554 == _p2o.ship_id || 646 == _p2o.ship_id ? (_p2s.houg += 1, _p2s.tais += 2, _p2r = true) : 553 == _p2o.ship_id && (_p2s.houg += 1, _p2s.tais += 1, _p2r = true), 0 == _p2r) return _p2q;
            var _p2t = _p2o.get_slotnums(69);
            return _p2q.add(_p2s.multiply(_p2t)), _p2q;
        };
    },
    78707: (_p2u, _p2v, _p2w) => {
        'use strict';
        var _p2x = null;
        defineModule(_p2v);
        Object.defineProperty(_p2v, '__esModule', {
            'value': true
        }), _p2v.getSlot70PersonalEffect = void 0;
        var _p2y = _p2w(74496);
        _p2v.getSlot70PersonalEffect = function(_p2z) {
            var _p30 = null,
                _p31 = new _p2y.SlotItemEffectModel(),
                _p32 = false,
                _p33 = new _p2y.SlotItemEffectModel();
            if ('やましおまる' == _p2z.yomi && (_p33.houg += 1, _p33.tais += 1, _p32 = true), 0 == _p32) return _p31;
            var _p34 = _p2z.get_slotnums(70);
            return _p31.add(_p33.multiply(_p34)), _p31;
        };
    },
    44680: function(_p35, _p36, _p37) {
        'use strict';
        var _p38 = null;
        var _p39 = this && this.__importDefault || function(_p3a) {
            var _p3b = null;
            return _p3a && _p3a.__esModule ? _p3a : {
                'default': _p3a
            };
        };
        defineModule(_p36);
        Object.defineProperty(_p36, '__esModule', {
            'value': true
        }), _p36.getSlot78PersonalEffect = void 0;
        var _p3c = _p37(74496),
            _p3d = _p39(_p37(18622));
        _p36.getSlot78PersonalEffect = function(_p3e) {
            var _p3f = null,
                _p3g = new _p3c.SlotItemEffectModel(),
                _p3h = false,
                _p3i = new _p3c.SlotItemEffectModel(),
                _p3j = 0,
                _p3k = 0,
                _p3l = false;
            if (48 == _p3e.ctype && (_p3i.houg += 1, _p3i.kaih += 1, _p3j = 1, _p3k = 1, _p3l = true, _p3h = true), 0 == _p3h) return _p3g;
            var _p3m = _p3e.get_slotnums(78);
            _p3g.add(_p3i.multiply(_p3m));
            var _p3n = 0,
                _p3o = _p3e.get_each_level_nums(78),
                _p3p = 0;
            if (_p3l) {
                _p3o.map(function(_p3q, _p3r) {
                    _p3r >= 7 && (_p3p += _p3q);
                });
                for (var _p3s = 0, _p3t = _p3e.have_slot_ids(); _p3s < _p3t.length; _p3s++) {
                    var _p3u = _p3t[_p3s],
                        _p3v = _p3d.default.model.slot.getMst(_p3u),
                        _p3w = _p3v.equipType;
                    12 != _p3w && 13 != _p3w || _p3v.sakuteki >= 5 && (_p3n += _p3e.get_slotnums(parseInt(_p3u)));
                }
            }
            if (1 == _p3j && _p3n > 0 && (_p3g.houg += 2, _p3g.kaih += 2, _p3g.raig += 2), 1 == _p3k) {
                _p3g.houg += 1 * _p3p;
                var _p3x = _p3o[10];
                _p3g.souk += 1 * _p3x;
            }
            return _p3g;
        };
    },
    45749: (_p3y, _p3z, _p40) => {
        'use strict';
        var _p41 = null;
        defineModule(_p3z);
        Object.defineProperty(_p3z, '__esModule', {
            'value': true
        }), _p3z.getSlot79And81PersonalEffect = void 0;
        var _p42 = _p40(74496);
        _p3z.getSlot79And81PersonalEffect = function(_p43) {
            var _p44 = null,
                _p45 = new _p42.SlotItemEffectModel(),
                _p46 = new _p42.SlotItemEffectModel();
            if (553 == _p43.ship_id) _p46.houg = 3;
            else {
                if (82 == _p43.ship_id) _p46.houg = 2;
                else {
                    if (88 == _p43.ship_id) _p46.houg = 2;
                    else {
                        if (554 == _p43.ship_id) _p46.houg = 3;
                        else {
                            if (411 == _p43.ship_id) _p46.houg = 2;
                            else {
                                if (412 != _p43.ship_id) return _p45;
                                _p46.houg = 2;
                            }
                        }
                    }
                }
            }
            var _p47 = _p43.get_slotnums(79) + _p43.get_slotnums(81);
            return _p45 = _p46.multiply(_p47);
        };
    },
    37334: (_p48, _p49, _p4a) => {
        'use strict';
        var _p4b = null;
        defineModule(_p49);
        Object.defineProperty(_p49, '__esModule', {
            'value': true
        }), _p49.getSlot82PersonalEffect = void 0;
        var _p4c = _p4a(74496);
        _p49.getSlot82PersonalEffect = function(_p4d) {
            var _p4e = null,
                _p4f = new _p4c.SlotItemEffectModel(),
                _p4g = new _p4c.SlotItemEffectModel();
            if (76 == _p4d.ctype && (_p4g.tais = 1, _p4g.kaih = 1), !_p4g.exists()) return _p4f;
            var _p4h = _p4d.get_slotnums(82);
            return _p4f = _p4g.multiply(_p4h);
        };
    },
    2603: function(_p4i, _p4j, _p4k) {
        'use strict';
        var _p4l = null;
        var _p4m = this && this.__importDefault || function(_p4n) {
            var _p4o = null;
            return _p4n && _p4n.__esModule ? _p4n : {
                'default': _p4n
            };
        };
        defineModule(_p4j);
        Object.defineProperty(_p4j, '__esModule', {
            'value': true
        }), _p4j.getSlot84PersonalEffect = void 0;
        var _p4p = _p4k(74496),
            _p4q = _p4m(_p4k(18622));
        _p4j.getSlot84PersonalEffect = function(_p4r) {
            var _p4s = null,
                _p4t = new _p4p.SlotItemEffectModel(),
                _p4u = _p4r.get_each_level_nums(84),
                _p4v = 0,
                _p4w = 0;
            if (_p4u.forEach(function(_p4x, _p4y) {
                    _p4y >= 4 && (_p4v += _p4x), _p4y >= 7 && (_p4w += _p4x);
                }), 0 == _p4v) return _p4t;
            for (var _p4z = 0, _p50 = 0, _p51 = _p4r.have_slot_ids(); _p50 < _p51.length; _p50++) {
                var _p52 = _p51[_p50],
                    _p53 = _p4q.default.model.slot.getMst(_p52),
                    _p54 = _p53.equipType;
                12 != _p54 && 13 != _p54 || (_p53.sakuteki >= 5 && _p4r.get_slotnums(parseInt(_p52)), _p53.taiku >= 2 && (_p4z += _p4r.get_slotnums(parseInt(_p52))));
            }
            var _p55 = _p4r.getCountryName();
            _p4v >= 1 && (_p4t.tyku += 1 * _p4v, _p4t.kaih += 1 * _p4v, 'ドイツ' != _p55 && 'イタリア' != _p55 || (_p4t.tyku += 1 * _p4v, _p4t.kaih += 1 * _p4v), _p4z >= 1 && (_p4t.tyku += 1)), _p4w >= 1 && (_p4t.tyku += 1 * _p4w, _p4t.houg += 1 * _p4w);
            var _p56 = _p4u[10];
            return _p56 >= 1 && (_p4t.tyku += 1 * _p56, _p4t.kaih += 1 * _p56, 'ドイツ' != _p55 && 'イタリア' != _p55 || (_p4t.houg += 1)), _p4t;
        };
    },
    90725: (_p57, _p58, _p59) => {
        'use strict';
        var _p5a = null;
        defineModule(_p58);
        Object.defineProperty(_p58, '__esModule', {
            'value': true
        }), _p58.getSlot85PersonalEffect = void 0;
        var _p5b = _p59(74496);
        _p58.getSlot85PersonalEffect = function(_p5c) {
            var _p5d = null,
                _p5e = new _p5b.SlotItemEffectModel(),
                _p5f = _p5c.get_each_level_over_nums([85]),
                _p5g = _p5f.slot[85][6],
                _p5h = _p5f.slot[85][8],
                _p5i = _p5f.slot[85][10],
                _p5j = _p5c.get_have_rader_nums().air_rader,
                _p5k = _p5c.getCountryName();
            return _p5g > 0 && (_p5e.tyku += 1 * _p5g, _p5e.kaih += 1 * _p5g, _p5j >= 1 && (_p5e.tyku += 2)), _p5h > 0 && (_p5e.houg += 1 * _p5h, 'ドイツ' != _p5k && 'イタリア' != _p5k || (_p5e.tyku += 1 * _p5h, _p5e.kaih += 1 * _p5h)), _p5i > 0 && (_p5e.kaih += 1 * _p5i, _p5e.houm += 1 * _p5i, 'ドイツ' != _p5k && 'イタリア' != _p5k || (_p5e.houg += 1)), _p5e;
        };
    },
    29180: (_p5l, _p5m, _p5n) => {
        'use strict';
        var _p5o = null;
        defineModule(_p5m);
        Object.defineProperty(_p5m, '__esModule', {
            'value': true
        }), _p5m.getSlot87PersonalEffect = void 0;
        var _p5p = _p5n(74496);
        _p5m.getSlot87PersonalEffect = function(_p5q) {
            var _p5r = null,
                _p5s = new _p5p.SlotItemEffectModel(),
                _p5t = false,
                _p5u = new _p5p.SlotItemEffectModel(),
                _p5v = 0;
            if (951 == _p5q.ship_id ? (_p5u.houg += 1, _p5u.kaih += 1, _p5u.raig += 1, _p5u.houm += 1, _p5t = true, _p5v = 1) : 181 == _p5q.ship_id || 316 == _p5q.ship_id || 50 == _p5q.ship_id || 229 == _p5q.ship_id || 961 == _p5q.ship_id ? _p5v = 2 : 591 != _p5q.ship_id && 592 != _p5q.ship_id && 593 != _p5q.ship_id && 954 != _p5q.ship_id || (_p5s.kaih += 2, _p5s.raig += 1, _p5v = 3), 38 != _p5q.ctype && 54 != _p5q.ctype && 101 != _p5q.ctype || (_p5v = 4), _p5t) {
                var _p5w = _p5q.get_slotnums(87);
                _p5s.add(_p5u.multiply(_p5w));
            }
            if (0 == _p5v) return _p5s;
            var _p5x = _p5q.get_each_level_nums(87),
                _p5y = [];
            return _p5v > 0 && _p5x.forEach(function(_p5z, _p60) {
                var _p61 = null;
                for (var _p62 = 1; _p62 <= _p5q.SLOT_LEVEL_MAX; _p62++) null == _p5y[_p62] && (_p5y[_p62] = 0), _p60 >= _p62 && (_p5y[_p62] += _p5z);
            }), 1 == _p5v ? (_p5y[6] >= 1 && (_p5s.tyku += 1 * _p5y[6]), _p5y[7] >= 1 && (_p5s.kaih += 1 * _p5y[7]), _p5y[8] >= 1 && (_p5s.raig += 1 * _p5y[8]), _p5y[9] >= 1 && (_p5s.houg += 1 * _p5y[9]), _p5y[10] >= 1 && (_p5s.houm += 1 * _p5y[10])) : 2 == _p5v ? (_p5y[6] >= 1 && (_p5s.kaih += 1 * _p5y[6]), _p5y[7] >= 1 && (_p5s.raig += 1 * _p5y[7]), _p5y[8] >= 1 && (_p5s.houg += 1 * _p5y[8]), _p5y[9] >= 1 && (_p5s.houm += 1 * _p5y[9]), _p5y[10] >= 1 && (_p5s.kaih += 1 * _p5y[10])) : 3 == _p5v ? (_p5y[6] > 0 && (_p5s.kaih += 1), _p5y[8] > 0 && (_p5s.raig += 1), _p5y[10] > 0 && (_p5s.houg += 1)) : 4 == _p5v && (_p5y[7] >= 1 && (_p5s.kaih += 1 * _p5y[7]), _p5y[8] >= 1 && (_p5s.raig += 1 * _p5y[8]), _p5y[10] >= 1 && (_p5s.houm += 1 * _p5y[10])), _p5s;
        };
    },
    68685: function(_p63, _p64, _p65) {
        'use strict';
        var _p66 = null;
        var _p67 = this && this.__importDefault || function(_p68) {
            var _p69 = null;
            return _p68 && _p68.__esModule ? _p68 : {
                'default': _p68
            };
        };
        defineModule(_p64);
        Object.defineProperty(_p64, '__esModule', {
            'value': true
        }), _p64.getSlot90PersonalEffect = void 0;
        var _p6a = _p65(74496),
            _p6b = _p67(_p65(18622));
        _p64.getSlot90PersonalEffect = function(_p6c) {
            var _p6d = null,
                _p6e = new _p6a.SlotItemEffectModel(),
                _p6f = new _p6a.SlotItemEffectModel();
            if (142 == _p6c.ship_id ? (_p6f.houg += 2, _p6f.kaih += 1) : 295 == _p6c.ship_id || 416 == _p6c.ship_id || 417 == _p6c.ship_id ? _p6f.houg += 1 : 264 == _p6c.ship_id ? (_p6f.houg += 1, _p6f.tyku += 1) : 501 != _p6c.ship_id && 506 != _p6c.ship_id && 502 != _p6c.ship_id && 507 != _p6c.ship_id || (_p6f.houg += 1), 7 != _p6c.ctype && 13 != _p6c.ctype && 8 != _p6c.ctype && 29 != _p6c.ctype && 9 != _p6c.ctype && 31 != _p6c.ctype || (_p6f.houg += 1), _p6f.exists()) {
                var _p6g = _p6c.get_slotnums(90);
                _p6e = _p6f.multiply(_p6g);
            }
            var _p6h = [];
            if ('あおば' == _p6c.yomi && (_p6h[1] = 1), 13 != _p6c.ctype && 7 != _p6c.ctype || (_p6h[2] = 1), 0 == _p6h.length) return _p6e;
            for (var _p6i = 0, _p6j = 0, _p6k = 0, _p6l = _p6c.have_slot_ids(); _p6k < _p6l.length; _p6k++) {
                var _p6m = _p6l[_p6k],
                    _p6n = _p6b.default.model.slot.getMst(_p6m),
                    _p6o = _p6n.equipType;
                12 != _p6o && 13 != _p6o || (_p6n.sakuteki >= 5 && (_p6i += _p6c.get_slotnums(parseInt(_p6m))), _p6n.taiku >= 2 && (_p6j += _p6c.get_slotnums(parseInt(_p6m))));
            }
            return _p6j > 0 && null != _p6h[1] && (_p6e.tyku += 5, _p6e.kaih += 2), _p6i > 0 && null != _p6h[2] && (_p6e.houg += 3, _p6e.kaih += 2, _p6e.raig += 2), _p6e;
        };
    },
    26078: (_p6p, _p6q, _p6r) => {
        'use strict';
        var _p6s = null;
        defineModule(_p6q);
        Object.defineProperty(_p6q, '__esModule', {
            'value': true
        }), _p6q.getSlot93PersonalEffect = void 0;
        var _p6t = _p6r(74496);
        _p6q.getSlot93PersonalEffect = function(_p6u) {
            var _p6v = null,
                _p6w = new _p6t.SlotItemEffectModel();
            return 'そうりゅう' == _p6u.yomi ? _p6w.houg = 1 : 'ひりゅう' == _p6u.yomi && (_p6w.houg = 3), _p6w;
        };
    },
    20829: (_p6x, _p6y, _p6z) => {
        'use strict';
        var _p70 = null;
        defineModule(_p6y);
        Object.defineProperty(_p6y, '__esModule', {
            'value': true
        }), _p6y.getSlot94PersonalEffect = void 0;
        var _p71 = _p6z(74496);
        _p6y.getSlot94PersonalEffect = function(_p72) {
            var _p73 = null,
                _p74 = new _p71.SlotItemEffectModel();
            if (196 == _p72.ship_id) _p74.houg = 7;
            else {
                if (197 != _p72.ship_id) return _p74;
                _p74.houg = 3;
            }
            return _p74;
        };
    },
    6880: (_p75, _p76, _p77) => {
        'use strict';
        var _p78 = null;
        defineModule(_p76);
        Object.defineProperty(_p76, '__esModule', {
            'value': true
        }), _p76.getSlot99PersonalEffect = void 0;
        var _p79 = _p77(74496);
        _p76.getSlot99PersonalEffect = function(_p7a) {
            var _p7b = null,
                _p7c = new _p79.SlotItemEffectModel();
            return 'そうりゅう' == _p7a.yomi ? _p7c.houg = 4 : 'ひりゅう' == _p7a.yomi && (_p7c.houg = 1), _p7c;
        };
    },
    21403: (_p7d, _p7e, _p7f) => {
        'use strict';
        var _p7g = null;
        defineModule(_p7e);
        Object.defineProperty(_p7e, '__esModule', {
            'value': true
        }), _p7e.getSlotCorsairMkIIPersonalEffect = void 0;
        var _p7h = _p7f(74496);
        _p7e.getSlotCorsairMkIIPersonalEffect = function(_p7i) {
            var _p7j = null,
                _p7k = new _p7h.SlotItemEffectModel(),
                _p7l = false,
                _p7m = new _p7h.SlotItemEffectModel();
            112 == _p7i.ctype && (_p7m.houg += 1, _p7m.tyku += 1, _p7m.kaih += 2, _p7l = true);
            var _p7n = _p7i.getCountryName();
            if (67 == _p7i.ctype || 78 == _p7i.ctype || 82 == _p7i.ctype || 88 == _p7i.ctype || 108 == _p7i.ctype || 112 == _p7i.ctype ? (_p7m.houg += 1, _p7m.tyku += 2, _p7m.kaih += 3, _p7l = true) : 'アメリカ' == _p7n && (_p7m.houg += 1, _p7m.tyku += 1, _p7m.kaih += 2, _p7l = true), 0 == _p7l) return _p7k;
            var _p7o = _p7i.get_slotnums(434) + _p7i.get_slotnums(435);
            return _p7k.add(_p7m.multiply(_p7o)), _p7k;
        };
    },
    9195: (_p7p, _p7q, _p7r) => {
        'use strict';
        var _p7s = null;
        defineModule(_p7q);
        Object.defineProperty(_p7q, '__esModule', {
            'value': true
        }), _p7q.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _p7t = _p7r(74496);
        _p7q.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_p7u) {
            var _p7v = null,
                _p7w = new _p7t.SlotItemEffectModel(),
                _p7x = false,
                _p7y = new _p7t.SlotItemEffectModel();
            if (56 == _p7u.ctype && (_p7y.tais += 3, _p7y.kaih += 2, _p7x = true), 0 == _p7x) return _p7w;
            var _p7z = _p7u.get_slotnums(44) + _p7u.get_slotnums(45) + _p7u.get_slotnums(287) + _p7u.get_slotnums(288);
            return _p7w.add(_p7y.multiply(_p7z)), _p7w;
        };
    },
    93297: (_p80, _p81, _p82) => {
        'use strict';
        var _p83 = null;
        defineModule(_p81);
        Object.defineProperty(_p81, '__esModule', {
            'value': true
        }), _p81.getSlotDomesticSonarPersonalEffect = void 0;
        var _p84 = _p82(74496);
        _p81.getSlotDomesticSonarPersonalEffect = function(_p85) {
            var _p86 = null,
                _p87 = new _p84.SlotItemEffectModel();
            return 56 == _p85.ctype && (_p87.tais += 2, _p87.kaih += 3), _p87;
        };
    },
    45482: (_p88, _p89, _p8a) => {
        'use strict';
        var _p8b = null;
        defineModule(_p89);
        Object.defineProperty(_p89, '__esModule', {
            'value': true
        }), _p89.getSlotOtherSuiseiPersonalEffect = void 0;
        var _p8c = _p8a(74496);
        _p89.getSlotOtherSuiseiPersonalEffect = function(_p8d) {
            var _p8e = null,
                _p8f = new _p8c.SlotItemEffectModel(),
                _p8g = new _p8c.SlotItemEffectModel();
            if (553 == _p8d.ship_id) _p8g.houg = 2;
            else {
                if (554 != _p8d.ship_id) return _p8f;
                _p8g.houg = 2;
            }
            var _p8h = _p8d.get_slotnums(24) + _p8d.get_slotnums(57) + _p8d.get_slotnums(111);
            return _p8f = _p8g.multiply(_p8h);
        };
    },
    10950: (_p8i, _p8j, _p8k) => {
        'use strict';
        var _p8l = null;
        defineModule(_p8j);
        Object.defineProperty(_p8j, '__esModule', {
            'value': true
        }), _p8j.getSlotSBD_Type_VS_VBPersonalEffect = void 0;
        var _p8m = _p8k(74496);
        _p8j.getSlotSBD_Type_VS_VBPersonalEffect = function(_p8n) {
            var _p8o = null,
                _p8p = new _p8m.SlotItemEffectModel(),
                _p8q = false,
                _p8r = new _p8m.SlotItemEffectModel();
            'レキシントン' == _p8n.yomi ? (_p8r.houg += 4, _p8r.houm += 2, _p8r.tyku += 1, _p8r.kaih += 2, _p8r.saku += 2, _p8q = true) : 'サラトガ' == _p8n.yomi ? (_p8r.houg += 2, _p8r.houm += 1, _p8r.tyku += 1, _p8r.kaih += 1, _p8r.saku += 1, _p8q = true) : 'ホーネット' == _p8n.yomi || 'レンジャー' == _p8n.yomi ? (_p8r.houg += 1, _p8r.houm += 1, _p8r.tyku += 1, _p8r.kaih += 1, _p8q = true) : 'ガンビア・ベイ' != _p8n.yomi && 'ラングレー' != _p8n.yomi || (_p8r.houg += 1, _p8r.kaih += 1, _p8q = true);
            var _p8s = _p8n.get_slotnums(543) + _p8n.get_slotnums(544);
            _p8q && _p8p.add(_p8r.multiply(_p8s));
            var _p8t = _p8n.haveSlotLevelNumOver(543),
                _p8u = _p8n.haveSlotLevelNumOver(544);
            return 'アメリカ' == _p8n.getCountryName() && (_p8t[7] >= 1 && (_p8p.houm += 1 * _p8t[7]), _p8t[8] >= 1 && (_p8p.saku += 1 * _p8t[8]), _p8t[9] >= 1 && (_p8p.houg += 1 * _p8t[9]), _p8t[10] >= 1 && (_p8p.houm += 1 * _p8t[10]), _p8u[7] >= 1 && (_p8p.houg += 1 * _p8u[7]), _p8u[8] >= 1 && (_p8p.houm += 1 * _p8u[8]), _p8u[9] >= 1 && (_p8p.tyku += 1 * _p8u[9]), _p8u[10] >= 1 && (_p8p.houg += 1 * _p8u[10])), _p8p;
        };
    },
    45927: (_p8v, _p8w, _p8x) => {
        'use strict';
        var _p8y = null;
        defineModule(_p8w);
        Object.defineProperty(_p8w, '__esModule', {
            'value': true
        }), _p8w.getSlotSmokePersonalEffect = void 0;
        var _p8z = _p8x(74496);
        _p8w.getSlotSmokePersonalEffect = function(_p90) {
            var _p91 = null,
                _p92 = new _p8z.SlotItemEffectModel(),
                _p93 = false,
                _p94 = new _p8z.SlotItemEffectModel();
            if (959 == _p90.ship_id && (_p94.kaih += 4, _p93 = true), 'ジョンストン' == _p90.yomi || 'サミュエル・B・ロバーツ' == _p90.yomi || 'せんだい' == _p90.yomi || 'はるかぜ' == _p90.yomi || 'かみかぜ' == _p90.yomi || 'しきなみ' == _p90.yomi || 'うらなみ' == _p90.yomi || 'あおば' == _p90.yomi ? (_p94.kaih += 3, _p93 = true) : 'いなづま' != _p90.yomi && 'はぐろ' != _p90.yomi && 'はつしも' != _p90.yomi && 'かすみ' != _p90.yomi && 'ふぶき' != _p90.yomi && 'あたご' != _p90.yomi && 'あまぎり' != _p90.yomi && 'はまなみ' != _p90.yomi || (_p94.kaih += 2, _p93 = true), 0 == _p93) return _p92;
            var _p95 = _p90.get_slotnums(500) + _p90.get_slotnums(501);
            return _p92.add(_p94.multiply(_p95)), _p92;
        };
    },
    75873: (_p96, _p97, _p98) => {
        'use strict';
        var _p99 = null;
        defineModule(_p97);
        Object.defineProperty(_p97, '__esModule', {
            'value': true
        }), _p97.getSlotSocSeagullPersonalEffect = void 0;
        var _p9a = _p98(74496);
        _p97.getSlotSocSeagullPersonalEffect = function(_p9b) {
            var _p9c = null,
                _p9d = new _p9a.SlotItemEffectModel(),
                _p9e = {},
                _p9f = false,
                _p9g = false;
            'アメリカ' == _p9b.getCountryName() && (_p9f = true, 3 != _p9b.stype && 5 != _p9b.stype || (_p9g = true)), _p9b.get_slotnums(414);
            var _p9h = _p9b.get_slotnums(539);
            _p9f && (_p9d.saku += 1, _p9e[1] = 1), _p9g && (_p9d.houg += 1, _p9d.saku += 1, 110 == _p9b.ctype && _p9h >= 1 && (_p9d.houm += 1), _p9e[2] = 1);
            var _p9i = _p9b.haveSlotLevelNumOver(414),
                _p9j = _p9b.haveSlotLevelNumOver(539);
            return null != _p9e[1] && (_p9i[5] >= 1 && (_p9d.kaih += 1), _p9j[3] >= 1 && (_p9d.kaih += 1), _p9j[5] >= 1 && (_p9d.saku += 1), _p9j[7] >= 1 && (_p9d.houm += 1)), null != _p9e[2] && (_p9i[3] >= 1 && (_p9d.saku += 1), _p9i[8] >= 1 && (_p9d.kaih += 1), _p9i[10] >= 1 && (_p9d.houg += 1), _p9j[6] >= 1 && (_p9d.tyku += 1), _p9j[8] >= 1 && (_p9d.kaih += 1), _p9j[9] >= 1 && (_p9d.houg += 1), _p9j[10] >= 1 && (_p9d.houm += 1)), _p9d;
        };
    },
    32666: (_p9k, _p9l, _p9m) => {
        'use strict';
        var _p9n = null;
        defineModule(_p9l);
        Object.defineProperty(_p9l, '__esModule', {
            'value': true
        }), _p9l.getSlotTokuYonPersonalEffect = void 0;
        var _p9o = _p9m(74496);
        _p9l.getSlotTokuYonPersonalEffect = function(_p9p) {
            var _p9q = null,
                _p9r = new _p9o.SlotItemEffectModel(),
                _p9s = false,
                _p9t = new _p9o.SlotItemEffectModel(),
                _p9u = 0,
                _p9v = _p9p.get_slotnums(525),
                _p9w = _p9p.get_slotnums(526),
                _p9x = _p9v + _p9w;
            if (13 != _p9p.stype && 14 != _p9p.stype || (_p9t.houg += 1, _p9t.raig += 2, _p9t.kaih -= 1, _p9s = true, _p9u = 1, 'い36' != _p9p.yomi && 'い41' != _p9p.yomi || (_p9r.houg += 2, _p9r.raig += 1, _p9r.houm += 2), _p9w >= 1 && (_p9r.houg += 1 * _p9w, _p9r.raig += 1 * _p9w, _p9r.houm += 1 * _p9w)), 0 == _p9s) return _p9r;
            if (_p9r.add(_p9t.multiply(_p9x)), 0 == _p9u) return _p9r;
            var _p9y = _p9p.get_each_level_over_nums([525, 526]),
                _p9z = _p9y.slot[525],
                _pa0 = _p9y.slot[526];
            if (1 == _p9u) {
                if (_p9z[1] >= 1 || _pa0[1] >= 1) {
                    var _pa1 = _p9z[1] + _pa0[1];
                    _p9r.raig += 1 * _pa1;
                }
                if (_pa0[2] >= 1) {
                    var _pa2 = _p9z[2] + _pa0[2];
                    _p9r.houg += 1 * _pa2;
                }
                if (_p9z[3] >= 1 || _pa0[3] >= 1) {
                    var _pa3 = _p9z[3] + _pa0[3];
                    _p9r.houm += 1 * _pa3;
                }
                if (_pa0[4] >= 1) {
                    var _pa4 = _p9z[4] + _pa0[4];
                    _p9r.raig += 1 * _pa4;
                }
                if (_p9z[6] >= 1 || _pa0[6] >= 1) {
                    var _pa5 = _p9z[6] + _pa0[6];
                    _p9r.houm += 1 * _pa5;
                }
                if (_pa0[8] >= 1) {
                    var _pa6 = _p9z[8] + _pa0[8];
                    _p9r.houg += 1 * _pa6;
                }
                if (_p9z[10] >= 1 || _pa0[10] >= 1) {
                    var _pa7 = _p9z[10] + _pa0[10];
                    _p9r.raig += 1 * _pa7;
                }
            }
            return _p9r;
        };
    },
    29805: (_pa8, _pa9, _paa) => {
        'use strict';
        var _pab = null;
        defineModule(_pa9);
        Object.defineProperty(_pa9, '__esModule', {
            'value': true
        }), _pa9.getSlotType10PersonalEffect = void 0;
        var _pac = _paa(74496);
        _pa9.getSlotType10PersonalEffect = function(_pad) {
            var _pae = null,
                _paf = new _pac.SlotItemEffectModel();
            return 662 == _pad.ship_id || 663 == _pad.ship_id || 668 == _pad.ship_id ? (_paf.houg += 2, _paf.kaih += 1, _paf.tais += 3) : 501 != _pad.ship_id && 506 != _pad.ship_id && 502 != _pad.ship_id && 507 != _pad.ship_id || (_paf.houg += 2), _paf;
        };
    },
    58913: (_pag, _pah, _pai) => {
        'use strict';
        var _paj = null;
        defineModule(_pah);
        Object.defineProperty(_pah, '__esModule', {
            'value': true
        }), _pah.getSlotType11PersonalEffect = void 0;
        var _pak = _pai(74496);
        _pah.getSlotType11PersonalEffect = function(_pal) {
            var _pam = null,
                _pan = new _pak.SlotItemEffectModel();
            return 662 == _pal.ship_id || 663 == _pal.ship_id || 668 == _pal.ship_id ? (_pan.houg += 1, _pan.kaih += 1, _pan.tais += 1) : 501 != _pal.ship_id && 506 != _pal.ship_id && 502 != _pal.ship_id && 507 != _pal.ship_id || (_pan.houg += 1, _pan.kaih += 1), _pan;
        };
    },
    55421: (_pao, _pap, _paq) => {
        'use strict';
        var _par = null;
        defineModule(_pap);
        Object.defineProperty(_pap, '__esModule', {
            'value': true
        }), _pap.getSlotType25PersonalEffect = void 0;
        var _pas = _paq(74496);
        _pap.getSlotType25PersonalEffect = function(_pat) {
            var _pau = null,
                _pav = new _pas.SlotItemEffectModel();
            return 662 == _pat.ship_id ? (_pav.tais += 4, _pav.kaih += 1) : 663 != _pat.ship_id && 668 != _pat.ship_id || (_pav.tais += 3, _pav.kaih += 1), _pav;
        };
    },
    272: function(_paw, _pax, _pay) {
        'use strict';
        var _paz = null;
        var _pb0 = this && this.__importDefault || function(_pb1) {
            var _pb2 = null;
            return _pb1 && _pb1.__esModule ? _pb1 : {
                'default': _pb1
            };
        };
        defineModule(_pax);
        Object.defineProperty(_pax, '__esModule', {
            'value': true
        }), _pax.getSlotType9PersonalEffect = void 0;
        var _pb3 = _pay(74496),
            _pb4 = _pb0(_pay(18622));
        _pax.getSlotType9PersonalEffect = function(_pb5) {
            var _pb6 = null,
                _pb7 = new _pb3.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_pb5.stype]) return _pb7;
            for (var _pb8 = 0, _pb9 = 0, _pba = _pb5.have_slot_ids(); _pb9 < _pba.length; _pb9++) {
                var _pbb = _pba[_pb9];
                if (9 == _pb4.default.model.slot.getMst(_pbb).equipType)
                    for (var _pbc = 0, _pbd = _pb5.have_slots_dict[parseInt(_pbb)]; _pbc < _pbd.length; _pbc++) {
                        var _pbe = _pbd[_pbc].level;
                        _pb8 < _pbe && (_pb8 = _pbe);
                    }
            }
            return _pb8 >= 2 && (_pb7.saku += 1), _pb8 >= 4 && (_pb7.houg += 1), _pb8 >= 6 && (_pb7.saku += 1), _pb8 >= 10 && (_pb7.houg += 1, _pb7.saku += 1), _pb7;
        };
    },
    49964: (_pbf, _pbg, _pbh) => {
        'use strict';
        var _pbi = null;
        defineModule(_pbg);
        Object.defineProperty(_pbg, '__esModule', {
            'value': true
        }), _pbg.getSlotYellowWingsPersonalEffect = void 0;
        var _pbj = _pbh(74496);
        _pbg.getSlotYellowWingsPersonalEffect = function(_pbk) {
            var _pbl = null,
                _pbm = new _pbj.SlotItemEffectModel(),
                _pbn = false,
                _pbo = new _pbj.SlotItemEffectModel();
            'レキシントン' == _pbk.yomi ? (_pbo.houg += 3, _pbo.houm += 2, _pbo.tyku += 1, _pbo.kaih += 2, _pbo.saku += 1, _pbn = true) : 'サラトガ' == _pbk.yomi ? (_pbo.houg += 2, _pbo.houm += 1, _pbo.tyku += 1, _pbo.kaih += 1, _pbo.saku += 1, _pbn = true) : 'ホーネット' != _pbk.yomi && 'レンジャー' != _pbk.yomi || (_pbo.houg += 1, _pbo.houm += 1, _pbo.kaih += 1, _pbn = true);
            var _pbp = _pbk.get_slotnums(541) + _pbk.get_slotnums(542);
            _pbn && _pbm.add(_pbo.multiply(_pbp));
            var _pbq = _pbk.haveSlotLevelNumOver(541),
                _pbr = _pbk.haveSlotLevelNumOver(542);
            return 'アメリカ' == _pbk.getCountryName() && (_pbq[7] >= 1 && (_pbm.kaih += 1 * _pbq[7]), _pbq[10] >= 1 && (_pbm.houg += 1 * _pbq[10]), _pbr[7] >= 1 && (_pbm.houm += 1 * _pbr[7]), _pbr[10] >= 1 && (_pbm.houg += 1 * _pbr[10])), _pbm;
        };
    },
    54518: (_pbs, _pbt, _pbu) => {
        'use strict';
        var _pbv = null;
        defineModule(_pbt);
        Object.defineProperty(_pbt, '__esModule', {
            'value': true
        }), _pbt.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _pbw = _pbu(74496);
        _pbt.getSlot_16InchMkXRensouhou_PersonalEffect = function(_pbx) {
            var _pby = null,
                _pbz = new _pbw.SlotItemEffectModel();
            if (93 == _pbx.ctype) {
                var _pc0 = _pbx.get_slotnums(330);
                _pc0 > 0 && (_pbz.houg = _pbz.houg + 1 * _pc0);
                var _pc1 = _pbx.get_slotnums(331);
                _pc1 > 0 && (_pbz.houg = _pbz.houg + 1 * _pc1, 1496 != _pbx.ship_id && 918 != _pbx.ship_id || (_pbz.houg = _pbz.houg + 1 * _pc1, _pbz.kaih = _pbz.kaih + 1 * _pc1));
                var _pc2 = _pbx.get_slotnums(332);
                return _pc2 > 0 && (_pbz.houg = _pbz.houg + 1 * _pc2, 1496 != _pbx.ship_id && 918 != _pbx.ship_id || (_pbz.houg = _pbz.houg + 1 * _pc2, _pbz.kaih = _pbz.kaih + 1 * _pc2, _pbz.tyku = _pbz.tyku + 1 * _pc2)), _pbz;
            }
            var _pc3 = new _pbw.SlotItemEffectModel();
            if (19 == _pbx.ctype ? (_pc3.houg = 1, (541 == _pbx.ship_id || 573 == _pbx.ship_id) && (_pc3.houg += 1)) : 88 == _pbx.ctype && (_pc3.houg = 1, 576 == _pbx.ship_id && (_pc3.houg += 1)), !_pc3.exists()) return _pbz;
            var _pc4 = _pbx.get_slotnums(330) + _pbx.get_slotnums(331) + _pbx.get_slotnums(332);
            return _pbz = _pc3.multiply(_pc4);
        };
    },
    79353: (_pc5, _pc6, _pc7) => {
        'use strict';
        var _pc8 = null;
        defineModule(_pc6);
        Object.defineProperty(_pc6, '__esModule', {
            'value': true
        }), _pc6.getZuiunSeriesEffect = void 0;
        var _pc9 = _pc7(74496);
        _pc6.getZuiunSeriesEffect = function(_pca) {
            var _pcb = null,
                _pcc = new _pc9.SlotItemEffectModel(),
                _pcd = false,
                _pce = new _pc9.SlotItemEffectModel();
            if (662 == _pca.ship_id ? (_pcc.houg += 2, _pcc.kaih += 1) : 663 == _pca.ship_id || 668 == _pca.ship_id || 501 == _pca.ship_id || 506 == _pca.ship_id ? (_pcc.houg += 2, _pce.kaih += 1, _pce.tyku += 1, _pcd = true) : 502 != _pca.ship_id && 507 != _pca.ship_id || (_pcc.houg += 1, _pce.kaih += 1, _pce.tyku += 1, _pcd = true), 0 == _pcd) return _pcc;
            var _pcf = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_pcg) {
                var _pch = null;
                _pcf += _pca.get_slotnums(_pcg);
            }), _pcc.add(_pce.multiply(_pcf)), _pcc;
        };
    },
    89051: function(_pci, _pcj, _pck) {
        'use strict';
        var _pcl = null;
        var _pcm = this && this.__createBinding || (Object.create ? function(_pcn, _pco, _pcp, _pcq) {
                var _pcr = null;
                void 0 === _pcq && (_pcq = _pcp);
                var _pcs = Object.getOwnPropertyDescriptor(_pco, _pcp);
                _pcs && !('get' in _pcs ? !_pco.__esModule : _pcs.writable || _pcs.configurable) || (_pcs = {
                    'enumerable': true,
                    'get': function() {
                        return _pco[_pcp];
                    }
                }), Object.defineProperty(_pcn, _pcq, _pcs);
            } : function(_pct, _pcu, _pcv, _pcw) {
                void 0 === _pcw && (_pcw = _pcv), _pct[_pcw] = _pcu[_pcv];
            }),
            _pcx = this && this.__exportStar || function(_pcy, _pcz) {
                var _pd0 = null;
                for (var _pd1 in _pcy) 'default' === _pd1 || Object.prototype.hasOwnProperty.call(_pcz, _pd1) || _pcm(_pcz, _pcy, _pd1);
            };
        defineModule(_pcj);
        Object.defineProperty(_pcj, '__esModule', {
            'value': true
        }), _pcx(_pck(34165), _pcj), _pcx(_pck(81018), _pcj), _pcx(_pck(56716), _pcj), _pcx(_pck(17713), _pcj), _pcx(_pck(54518), _pcj), _pcx(_pck(66985), _pcj), _pcx(_pck(88102), _pcj), _pcx(_pck(66904), _pcj), _pcx(_pck(98137), _pcj), _pcx(_pck(69954), _pcj), _pcx(_pck(22218), _pcj), _pcx(_pck(88271), _pcj), _pcx(_pck(23035), _pcj), _pcx(_pck(2578), _pcj), _pcx(_pck(17143), _pcj), _pcx(_pck(16164), _pcj), _pcx(_pck(35023), _pcj), _pcx(_pck(44680), _pcj), _pcx(_pck(45749), _pcj), _pcx(_pck(37334), _pcj), _pcx(_pck(29180), _pcj), _pcx(_pck(68685), _pcj), _pcx(_pck(26078), _pcj), _pcx(_pck(20829), _pcj), _pcx(_pck(6880), _pcj), _pcx(_pck(17213), _pcj), _pcx(_pck(40176), _pcj), _pcx(_pck(32889), _pcj), _pcx(_pck(11285), _pcj), _pcx(_pck(96200), _pcj), _pcx(_pck(9115), _pcj), _pcx(_pck(37173), _pcj), _pcx(_pck(21713), _pcj), _pcx(_pck(59823), _pcj), _pcx(_pck(57440), _pcj), _pcx(_pck(29240), _pcj), _pcx(_pck(40885), _pcj), _pcx(_pck(19614), _pcj), _pcx(_pck(87220), _pcj), _pcx(_pck(81367), _pcj), _pcx(_pck(13052), _pcj), _pcx(_pck(94968), _pcj), _pcx(_pck(48658), _pcj), _pcx(_pck(1906), _pcj), _pcx(_pck(61887), _pcj), _pcx(_pck(47970), _pcj), _pcx(_pck(31797), _pcj), _pcx(_pck(45738), _pcj), _pcx(_pck(34718), _pcj), _pcx(_pck(69245), _pcj), _pcx(_pck(18478), _pcj), _pcx(_pck(2899), _pcj), _pcx(_pck(57120), _pcj), _pcx(_pck(74985), _pcj), _pcx(_pck(9234), _pcj), _pcx(_pck(30802), _pcj), _pcx(_pck(97002), _pcj), _pcx(_pck(16748), _pcj), _pcx(_pck(53618), _pcj), _pcx(_pck(72573), _pcj), _pcx(_pck(8955), _pcj), _pcx(_pck(98947), _pcj), _pcx(_pck(44726), _pcj), _pcx(_pck(93065), _pcj), _pcx(_pck(85767), _pcj), _pcx(_pck(38314), _pcj), _pcx(_pck(59747), _pcj), _pcx(_pck(40649), _pcj), _pcx(_pck(13533), _pcj), _pcx(_pck(12138), _pcj), _pcx(_pck(30042), _pcj), _pcx(_pck(33623), _pcj), _pcx(_pck(85630), _pcj), _pcx(_pck(88736), _pcj), _pcx(_pck(49341), _pcj), _pcx(_pck(74306), _pcj), _pcx(_pck(83898), _pcj), _pcx(_pck(71873), _pcj), _pcx(_pck(53122), _pcj), _pcx(_pck(51063), _pcj), _pcx(_pck(91491), _pcj), _pcx(_pck(85495), _pcj), _pcx(_pck(65365), _pcj), _pcx(_pck(98164), _pcj), _pcx(_pck(38114), _pcj), _pcx(_pck(21003), _pcj), _pcx(_pck(77010), _pcj), _pcx(_pck(39126), _pcj), _pcx(_pck(72176), _pcj), _pcx(_pck(33846), _pcj), _pcx(_pck(97157), _pcj), _pcx(_pck(63406), _pcj), _pcx(_pck(66373), _pcj), _pcx(_pck(19707), _pcj), _pcx(_pck(63978), _pcj), _pcx(_pck(92382), _pcj), _pcx(_pck(78415), _pcj), _pcx(_pck(23090), _pcj), _pcx(_pck(18776), _pcj), _pcx(_pck(39656), _pcj), _pcx(_pck(66039), _pcj), _pcx(_pck(64679), _pcj), _pcx(_pck(95953), _pcj), _pcx(_pck(86384), _pcj), _pcx(_pck(65345), _pcj), _pcx(_pck(46514), _pcj), _pcx(_pck(81976), _pcj), _pcx(_pck(89331), _pcj), _pcx(_pck(73973), _pcj), _pcx(_pck(21178), _pcj), _pcx(_pck(5079), _pcj), _pcx(_pck(95014), _pcj), _pcx(_pck(53099), _pcj), _pcx(_pck(76201), _pcj), _pcx(_pck(24931), _pcj), _pcx(_pck(60978), _pcj), _pcx(_pck(74312), _pcj), _pcx(_pck(54350), _pcj), _pcx(_pck(26262), _pcj), _pcx(_pck(45530), _pcj), _pcx(_pck(44053), _pcj), _pcx(_pck(65441), _pcj), _pcx(_pck(33258), _pcj), _pcx(_pck(92168), _pcj), _pcx(_pck(85975), _pcj), _pcx(_pck(98467), _pcj), _pcx(_pck(88348), _pcj), _pcx(_pck(21097), _pcj), _pcx(_pck(37273), _pcj), _pcx(_pck(72694), _pcj), _pcx(_pck(62067), _pcj), _pcx(_pck(87817), _pcj), _pcx(_pck(93526), _pcj), _pcx(_pck(33084), _pcj), _pcx(_pck(97831), _pcj), _pcx(_pck(45482), _pcj), _pcx(_pck(272), _pcj), _pcx(_pck(69377), _pcj), _pcx(_pck(31127), _pcj), _pcx(_pck(79353), _pcj), _pcx(_pck(17274), _pcj), _pcx(_pck(91302), _pcj), _pcx(_pck(82229), _pcj), _pcx(_pck(10325), _pcj), _pcx(_pck(351), _pcj), _pcx(_pck(4050), _pcj), _pcx(_pck(29805), _pcj), _pcx(_pck(58913), _pcj), _pcx(_pck(55421), _pcj), _pcx(_pck(87845), _pcj), _pcx(_pck(17562), _pcj), _pcx(_pck(78466), _pcj), _pcx(_pck(40061), _pcj), _pcx(_pck(9195), _pcj), _pcx(_pck(93297), _pcj), _pcx(_pck(15133), _pcj), _pcx(_pck(55747), _pcj), _pcx(_pck(33155), _pcj), _pcx(_pck(79086), _pcj), _pcx(_pck(2306), _pcj), _pcx(_pck(14386), _pcj), _pcx(_pck(80225), _pcj), _pcx(_pck(17732), _pcj), _pcx(_pck(47169), _pcj), _pcx(_pck(77670), _pcj), _pcx(_pck(79988), _pcj), _pcx(_pck(92253), _pcj), _pcx(_pck(74428), _pcj), _pcx(_pck(75873), _pcj), _pcx(_pck(2631), _pcj), _pcx(_pck(27177), _pcj), _pcx(_pck(94781), _pcj), _pcx(_pck(53908), _pcj), _pcx(_pck(79813), _pcj), _pcx(_pck(16088), _pcj), _pcx(_pck(93733), _pcj), _pcx(_pck(69939), _pcj), _pcx(_pck(33734), _pcj), _pcx(_pck(34432), _pcj), _pcx(_pck(97423), _pcj), _pcx(_pck(23551), _pcj), _pcx(_pck(99791), _pcj), _pcx(_pck(21403), _pcj), _pcx(_pck(6173), _pcj), _pcx(_pck(23934), _pcj), _pcx(_pck(53709), _pcj), _pcx(_pck(88838), _pcj), _pcx(_pck(99790), _pcj), _pcx(_pck(18387), _pcj), _pcx(_pck(70941), _pcj), _pcx(_pck(35025), _pcj), _pcx(_pck(2603), _pcj), _pcx(_pck(78707), _pcj), _pcx(_pck(89058), _pcj), _pcx(_pck(84372), _pcj), _pcx(_pck(96804), _pcj), _pcx(_pck(33896), _pcj), _pcx(_pck(11031), _pcj), _pcx(_pck(71383), _pcj), _pcx(_pck(55888), _pcj), _pcx(_pck(2258), _pcj), _pcx(_pck(38003), _pcj), _pcx(_pck(92174), _pcj), _pcx(_pck(43768), _pcj), _pcx(_pck(73254), _pcj), _pcx(_pck(55734), _pcj), _pcx(_pck(81254), _pcj), _pcx(_pck(65455), _pcj), _pcx(_pck(70362), _pcj), _pcx(_pck(61977), _pcj), _pcx(_pck(43607), _pcj), _pcx(_pck(68086), _pcj), _pcx(_pck(78173), _pcj), _pcx(_pck(22581), _pcj), _pcx(_pck(20418), _pcj), _pcx(_pck(93373), _pcj), _pcx(_pck(13053), _pcj), _pcx(_pck(47874), _pcj), _pcx(_pck(42788), _pcj), _pcx(_pck(57664), _pcj), _pcx(_pck(44990), _pcj), _pcx(_pck(17712), _pcj), _pcx(_pck(83957), _pcj), _pcx(_pck(78539), _pcj), _pcx(_pck(96282), _pcj), _pcx(_pck(49679), _pcj), _pcx(_pck(45927), _pcj), _pcx(_pck(90312), _pcj), _pcx(_pck(86856), _pcj), _pcx(_pck(78123), _pcj), _pcx(_pck(25765), _pcj), _pcx(_pck(29493), _pcj), _pcx(_pck(28221), _pcj), _pcx(_pck(14830), _pcj), _pcx(_pck(54047), _pcj), _pcx(_pck(76054), _pcj), _pcx(_pck(90725), _pcj), _pcx(_pck(93053), _pcj), _pcx(_pck(88792), _pcj), _pcx(_pck(33242), _pcj), _pcx(_pck(59415), _pcj), _pcx(_pck(3296), _pcj), _pcx(_pck(32666), _pcj), _pcx(_pck(36731), _pcj), _pcx(_pck(30450), _pcj), _pcx(_pck(85127), _pcj), _pcx(_pck(87204), _pcj), _pcx(_pck(2380), _pcj), _pcx(_pck(96580), _pcj), _pcx(_pck(15653), _pcj), _pcx(_pck(41410), _pcj), _pcx(_pck(25851), _pcj), _pcx(_pck(6482), _pcj), _pcx(_pck(70332), _pcj), _pcx(_pck(91275), _pcj), _pcx(_pck(72743), _pcj), _pcx(_pck(49964), _pcj), _pcx(_pck(10950), _pcj), _pcx(_pck(57041), _pcj);
    },
    82692: function(_pd2, _pd3, _pd4) {
        'use strict';
        var _pd5 = null;
        var _pd6 = this && this.__createBinding || (Object.create ? function(_pd7, _pd8, _pd9, _pda) {
                var _pdb = null;
                void 0 === _pda && (_pda = _pd9);
                var _pdc = Object.getOwnPropertyDescriptor(_pd8, _pd9);
                _pdc && !('get' in _pdc ? !_pd8.__esModule : _pdc.writable || _pdc.configurable) || (_pdc = {
                    'enumerable': true,
                    'get': function() {
                        return _pd8[_pd9];
                    }
                }), Object.defineProperty(_pd7, _pda, _pdc);
            } : function(_pdd, _pde, _pdf, _pdg) {
                void 0 === _pdg && (_pdg = _pdf), _pdd[_pdg] = _pde[_pdf];
            }),
            _pdh = this && this.__setModuleDefault || (Object.create ? function(_pdi, _pdj) {
                var _pdk = null;
                Object.defineProperty(_pdi, 'default', {
                    'enumerable': true,
                    'value': _pdj
                });
            } : function(_pdl, _pdm) {
                var _pdn = null;
                _pdl.default = _pdm;
            }),
            _pdo = this && this.__importStar || function(_pdp) {
                var _pdq = null;
                if (_pdp && _pdp.__esModule) return _pdp;
                var _pdr = {};
                if (null != _pdp) {
                    for (var _pds in _pdp) 'default' !== _pds && Object.prototype.hasOwnProperty.call(_pdp, _pds) && _pd6(_pdr, _pdp, _pds);
                }
                return _pdh(_pdr, _pdp), _pdr;
            };
        defineModule(_pd3);
        Object.defineProperty(_pd3, '__esModule', {
            'value': true
        }), _pd3.SlotItemEffectUtil = void 0;
        var _pdt, _pdu = _pd4(73785),
            _pdv = _pdo(_pd4(89051)),
            _pdw = _pd4(74496);
        ! function(_pdx) {
            var _pdy = null;
            _pdx.getSlotitemEffect = function(_pdz, _pe0) {
                var _pe1 = null;
                if (null == _pdz || null == _pe0) return null;
                for (var _pe2 = new _pdu.SlotItemEffectParamModel(_pdz, _pe0), _pe3 = [{
                        'isExecute': Boolean(_pe2.get_type3_nums(9)),
                        'execFunc': _pdv.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_type3_nums(10)),
                        'execFunc': _pdv.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_type3_nums(11)),
                        'execFunc': _pdv.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_type3_nums(12)) || Boolean(_pe2.get_type3_nums(13)),
                        'execFunc': _pdv.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_type3_nums(25)),
                        'execFunc': _pdv.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_type3_nums(29)),
                        'execFunc': _pdv.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_type3_nums(42)),
                        'execFunc': _pdv.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(3)) || Boolean(_pe2.get_slotnums(122)) || Boolean(_pe2.get_slotnums(533)),
                        'execFunc': _pdv.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(5)),
                        'execFunc': _pdv.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(12)),
                        'execFunc': _pdv.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(15)),
                        'execFunc': _pdv.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(18)) || Boolean(_pe2.get_slotnums(52)),
                        'execFunc': _pdv.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(19)),
                        'execFunc': _pdv.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(24)) || Boolean(_pe2.get_slotnums(57)) || Boolean(_pe2.get_slotnums(111)),
                        'execFunc': _pdv.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(26)) || Boolean(_pe2.get_slotnums(62)) || Boolean(_pe2.get_slotnums(79)) || Boolean(_pe2.get_slotnums(80)) || Boolean(_pe2.get_slotnums(81)) || Boolean(_pe2.get_slotnums(207)) || Boolean(_pe2.get_slotnums(208)),
                        'execFunc': _pdv.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(35)),
                        'execFunc': _pdv.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(39)) || Boolean(_pe2.get_slotnums(40)) || Boolean(_pe2.get_slotnums(49)) || Boolean(_pe2.get_slotnums(131)),
                        'execFunc': _pdv.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(30)) || Boolean(_pe2.get_slotnums(410)),
                        'execFunc': _pdv.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(44)) || Boolean(_pe2.get_slotnums(45)) || Boolean(_pe2.get_slotnums(287)) || Boolean(_pe2.get_slotnums(288)),
                        'execFunc': _pdv.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(46)) || Boolean(_pe2.get_slotnums(47)) || Boolean(_pe2.get_slotnums(149)) || Boolean(_pe2.get_slotnums(132)) || Boolean(_pe2.get_slotnums(438)),
                        'execFunc': _pdv.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(47)) || Boolean(_pe2.get_slotnums(438)),
                        'execFunc': _pdv.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(50)),
                        'execFunc': _pdv.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(58)),
                        'execFunc': _pdv.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(59)),
                        'execFunc': _pdv.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(60)) || Boolean(_pe2.get_slotnums(154)) || Boolean(_pe2.get_slotnums(219)),
                        'execFunc': _pdv.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(61)),
                        'execFunc': _pdv.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(61)),
                        'execFunc': _pdv.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(63)),
                        'execFunc': _pdv.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(66)) || Boolean(_pe2.get_slotnums(220)),
                        'execFunc': _pdv.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(67)),
                        'execFunc': _pdv.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(69)),
                        'execFunc': _pdv.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(70)),
                        'execFunc': _pdv.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(76)) || Boolean(_pe2.get_slotnums(114)),
                        'execFunc': _pdv.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(78)),
                        'execFunc': _pdv.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(79)) || Boolean(_pe2.get_slotnums(81)),
                        'execFunc': _pdv.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(82)),
                        'execFunc': _pdv.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(84)),
                        'execFunc': _pdv.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(85)),
                        'execFunc': _pdv.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(87)),
                        'execFunc': _pdv.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(90)),
                        'execFunc': _pdv.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(93)),
                        'execFunc': _pdv.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(94)),
                        'execFunc': _pdv.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(99)),
                        'execFunc': _pdv.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(100)),
                        'execFunc': _pdv.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(104)),
                        'execFunc': _pdv.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(106)) || Boolean(_pe2.get_slotnums(450)),
                        'execFunc': _pdv.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(115)),
                        'execFunc': _pdv.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(118)) || Boolean(_pe2.get_slotnums(521)),
                        'execFunc': _pdv.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(119)),
                        'execFunc': _pdv.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(121)),
                        'execFunc': _pdv.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(122)),
                        'execFunc': _pdv.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(123)),
                        'execFunc': _pdv.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(124)),
                        'execFunc': _pdv.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(128)) || Boolean(_pe2.get_slotnums(281)),
                        'execFunc': _pdv.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(129)),
                        'execFunc': _pdv.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(130)),
                        'execFunc': _pdv.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(132)),
                        'execFunc': _pdv.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(136)),
                        'execFunc': _pdv.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(139)),
                        'execFunc': _pdv.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(143)),
                        'execFunc': _pdv.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(144)),
                        'execFunc': _pdv.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(147)) || Boolean(_pe2.get_slotnums(393)) || Boolean(_pe2.get_slotnums(394)),
                        'execFunc': _pdv.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(149)),
                        'execFunc': _pdv.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(165)) || Boolean(_pe2.get_slotnums(216)),
                        'execFunc': _pdv.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(171)),
                        'execFunc': _pdv.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(174)),
                        'execFunc': _pdv.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(179)),
                        'execFunc': _pdv.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(184)),
                        'execFunc': _pdv.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(188)),
                        'execFunc': _pdv.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(189)),
                        'execFunc': _pdv.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(194)),
                        'execFunc': _pdv.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(195)),
                        'execFunc': _pdv.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(204)),
                        'execFunc': _pdv.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(217)),
                        'execFunc': _pdv.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(220)),
                        'execFunc': _pdv.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(227)),
                        'execFunc': _pdv.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(228)),
                        'execFunc': _pdv.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(229)),
                        'execFunc': _pdv.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(234)),
                        'execFunc': _pdv.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(235)),
                        'execFunc': _pdv.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(237)) || Boolean(_pe2.get_slotnums(322)) || Boolean(_pe2.get_slotnums(323)) || Boolean(_pe2.get_slotnums(490)),
                        'execFunc': _pdv.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(237)),
                        'execFunc': _pdv.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(238)) || Boolean(_pe2.get_slotnums(239)),
                        'execFunc': _pdv.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(242)),
                        'execFunc': _pdv.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(243)),
                        'execFunc': _pdv.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(244)),
                        'execFunc': _pdv.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(245)) || Boolean(_pe2.get_slotnums(246)) || Boolean(_pe2.get_slotnums(468)),
                        'execFunc': _pdv.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(247)),
                        'execFunc': _pdv.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(252)),
                        'execFunc': _pdv.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(266)),
                        'execFunc': _pdv.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(266)),
                        'execFunc': _pdv.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(267)) || Boolean(_pe2.get_slotnums(366)),
                        'execFunc': _pdv.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(267)) || Boolean(_pe2.get_slotnums(366)),
                        'execFunc': _pdv.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(268)),
                        'execFunc': _pdv.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(271)),
                        'execFunc': _pdv.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(275)),
                        'execFunc': _pdv.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(277)),
                        'execFunc': _pdv.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(278)),
                        'execFunc': _pdv.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(279)),
                        'execFunc': _pdv.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(282)),
                        'execFunc': _pdv.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(283)),
                        'execFunc': _pdv.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(285)),
                        'execFunc': _pdv.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(286)),
                        'execFunc': _pdv.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(286)),
                        'execFunc': _pdv.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(286)),
                        'execFunc': _pdv.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(287)),
                        'execFunc': _pdv.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(288)),
                        'execFunc': _pdv.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(289)),
                        'execFunc': _pdv.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(290)),
                        'execFunc': _pdv.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(291)),
                        'execFunc': _pdv.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(292)),
                        'execFunc': _pdv.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(293)),
                        'execFunc': _pdv.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(294)),
                        'execFunc': _pdv.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(295)),
                        'execFunc': _pdv.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(296)),
                        'execFunc': _pdv.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(297)),
                        'execFunc': _pdv.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(298)) || Boolean(_pe2.get_slotnums(299)) || Boolean(_pe2.get_slotnums(300)),
                        'execFunc': _pdv.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(301)),
                        'execFunc': _pdv.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(302)),
                        'execFunc': _pdv.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(303)),
                        'execFunc': _pdv.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(304)),
                        'execFunc': _pdv.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(305)) || Boolean(_pe2.get_slotnums(306)),
                        'execFunc': _pdv.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(307)),
                        'execFunc': _pdv.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(308)),
                        'execFunc': _pdv.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(310)) || Boolean(_pe2.get_slotnums(518)),
                        'execFunc': _pdv.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(313)),
                        'execFunc': _pdv.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(314)),
                        'execFunc': _pdv.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(315)),
                        'execFunc': _pdv.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(316)),
                        'execFunc': _pdv.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(317)),
                        'execFunc': _pdv.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(318)),
                        'execFunc': _pdv.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(319)),
                        'execFunc': _pdv.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(320)),
                        'execFunc': _pdv.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(322)),
                        'execFunc': _pdv.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(323)),
                        'execFunc': _pdv.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(324)) || Boolean(_pe2.get_slotnums(325)),
                        'execFunc': _pdv.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(326)),
                        'execFunc': _pdv.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(327)),
                        'execFunc': _pdv.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(328)),
                        'execFunc': _pdv.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(329)),
                        'execFunc': _pdv.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(330)) || Boolean(_pe2.get_slotnums(331)) || Boolean(_pe2.get_slotnums(332)),
                        'execFunc': _pdv.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(335)),
                        'execFunc': _pdv.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(336)),
                        'execFunc': _pdv.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(337)),
                        'execFunc': _pdv.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(338)),
                        'execFunc': _pdv.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(339)),
                        'execFunc': _pdv.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(340)),
                        'execFunc': _pdv.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(341)),
                        'execFunc': _pdv.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(342)),
                        'execFunc': _pdv.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(343)),
                        'execFunc': _pdv.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(344)),
                        'execFunc': _pdv.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(345)),
                        'execFunc': _pdv.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(346)),
                        'execFunc': _pdv.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(347)),
                        'execFunc': _pdv.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(356)) || Boolean(_pe2.get_slotnums(357)),
                        'execFunc': _pdv.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(358)),
                        'execFunc': _pdv.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(359)),
                        'execFunc': _pdv.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(360)) || Boolean(_pe2.get_slotnums(361)),
                        'execFunc': _pdv.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(362)) || Boolean(_pe2.get_slotnums(363)),
                        'execFunc': _pdv.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(364)),
                        'execFunc': _pdv.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(365)),
                        'execFunc': _pdv.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(367)),
                        'execFunc': _pdv.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(368)),
                        'execFunc': _pdv.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(369)),
                        'execFunc': _pdv.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(370)),
                        'execFunc': _pdv.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(371)),
                        'execFunc': _pdv.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(372)),
                        'execFunc': _pdv.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(373)),
                        'execFunc': _pdv.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(374)),
                        'execFunc': _pdv.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(375)),
                        'execFunc': _pdv.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(376)),
                        'execFunc': _pdv.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(377)),
                        'execFunc': _pdv.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(378)),
                        'execFunc': _pdv.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(379)),
                        'execFunc': _pdv.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(380)),
                        'execFunc': _pdv.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(381)),
                        'execFunc': _pdv.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(382)) || Boolean(_pe2.get_slotnums(509)),
                        'execFunc': _pdv.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(383)),
                        'execFunc': _pdv.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(384)),
                        'execFunc': _pdv.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(385)),
                        'execFunc': _pdv.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(386)),
                        'execFunc': _pdv.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(387)),
                        'execFunc': _pdv.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(389)),
                        'execFunc': _pdv.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(390)),
                        'execFunc': _pdv.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(391)),
                        'execFunc': _pdv.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(392)),
                        'execFunc': _pdv.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(397)),
                        'execFunc': _pdv.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(398)),
                        'execFunc': _pdv.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(399)),
                        'execFunc': _pdv.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(400)),
                        'execFunc': _pdv.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(407)),
                        'execFunc': _pdv.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(408)),
                        'execFunc': _pdv.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(409)),
                        'execFunc': _pdv.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(411)),
                        'execFunc': _pdv.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(412)),
                        'execFunc': _pdv.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(413)),
                        'execFunc': _pdv.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(414)) || Boolean(_pe2.get_slotnums(539)),
                        'execFunc': _pdv.getSlotSocSeagullPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(415)),
                        'execFunc': _pdv.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(419)),
                        'execFunc': _pdv.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(420)),
                        'execFunc': _pdv.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(421)),
                        'execFunc': _pdv.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(422)),
                        'execFunc': _pdv.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(423)),
                        'execFunc': _pdv.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(424)),
                        'execFunc': _pdv.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(425)),
                        'execFunc': _pdv.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(426)) || Boolean(_pe2.get_slotnums(427)) || Boolean(_pe2.get_slotnums(428)) || Boolean(_pe2.get_slotnums(429)),
                        'execFunc': _pdv.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(430)),
                        'execFunc': _pdv.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(434)) || Boolean(_pe2.get_slotnums(435)),
                        'execFunc': _pdv.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(437)),
                        'execFunc': _pdv.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(438)),
                        'execFunc': _pdv.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(439)),
                        'execFunc': _pdv.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(440)) || Boolean(_pe2.get_slotnums(441)),
                        'execFunc': _pdv.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(442)) || Boolean(_pe2.get_slotnums(443)),
                        'execFunc': _pdv.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(447)),
                        'execFunc': _pdv.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(450)),
                        'execFunc': _pdv.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(451)),
                        'execFunc': _pdv.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(455)),
                        'execFunc': _pdv.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(456)),
                        'execFunc': _pdv.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(457)) || Boolean(_pe2.get_slotnums(461)),
                        'execFunc': _pdv.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(458)),
                        'execFunc': _pdv.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(463)),
                        'execFunc': _pdv.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(464)),
                        'execFunc': _pdv.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(465)),
                        'execFunc': _pdv.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(466)),
                        'execFunc': _pdv.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(467)),
                        'execFunc': _pdv.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(470)) || Boolean(_pe2.get_slotnums(529)),
                        'execFunc': _pdv.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(471)),
                        'execFunc': _pdv.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(472)),
                        'execFunc': _pdv.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(473)),
                        'execFunc': _pdv.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(474)),
                        'execFunc': _pdv.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(478)),
                        'execFunc': _pdv.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(483)),
                        'execFunc': _pdv.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(485)),
                        'execFunc': _pdv.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(486)),
                        'execFunc': _pdv.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(487)),
                        'execFunc': _pdv.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(488)),
                        'execFunc': _pdv.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(489)) || Boolean(_pe2.get_slotnums(491)),
                        'execFunc': _pdv.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(500)) || Boolean(_pe2.get_slotnums(501)),
                        'execFunc': _pdv.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(502)),
                        'execFunc': _pdv.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(503)),
                        'execFunc': _pdv.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(505)),
                        'execFunc': _pdv.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(506)),
                        'execFunc': _pdv.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(507)) || Boolean(_pe2.get_slotnums(508)),
                        'execFunc': _pdv.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(510)),
                        'execFunc': _pdv.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(511)) || Boolean(_pe2.get_slotnums(512)),
                        'execFunc': _pdv.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(517)),
                        'execFunc': _pdv.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(518)),
                        'execFunc': _pdv.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(519)),
                        'execFunc': _pdv.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(520)),
                        'execFunc': _pdv.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(521)),
                        'execFunc': _pdv.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(522)) || Boolean(_pe2.get_slotnums(523)),
                        'execFunc': _pdv.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(524)),
                        'execFunc': _pdv.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(525)) || Boolean(_pe2.get_slotnums(526)),
                        'execFunc': _pdv.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(527)),
                        'execFunc': _pdv.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(528)),
                        'execFunc': _pdv.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(530)),
                        'execFunc': _pdv.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(531)),
                        'execFunc': _pdv.getSlot531PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(534)) || Boolean(_pe2.get_slotnums(535)),
                        'execFunc': _pdv.getSlot13_8cmRensouhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(536)) || Boolean(_pe2.get_slotnums(537)),
                        'execFunc': _pdv.getSlot15_2cmSanrensouSyuhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(538)),
                        'execFunc': _pdv.getSlot538PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(540)),
                        'execFunc': _pdv.getSlot540PersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(541)) || Boolean(_pe2.get_slotnums(542)),
                        'execFunc': _pdv.getSlotYellowWingsPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(543)) || Boolean(_pe2.get_slotnums(544)),
                        'execFunc': _pdv.getSlotSBD_Type_VS_VBPersonalEffect
                    }, {
                        'isExecute': Boolean(_pe2.get_slotnums(545)),
                        'execFunc': _pdv.getSlot545PersonalEffect
                    }], _pe4 = new _pdw.SlotItemEffectModel(), _pe5 = 0, _pe6 = _pe3; _pe5 < _pe6.length; _pe5++) {
                    var _pe7 = _pe6[_pe5];
                    if (_pe7.isExecute) {
                        var _pe8 = _pe7.execFunc(_pe2);
                        0, _pe4.add(_pe8);
                    }
                }
                return _pe4;
            };
        }(_pdt || (_pd3.SlotItemEffectUtil = _pdt = {}));
    },
}
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
    73785: function(_ld7, _ld8, _ld9) {
        'use strict';
        var _lda = null;
        var _ldb = this && this.__importDefault || function(_ldc) {
            var _ldd = null;
            return _ldc && _ldc.__esModule ? _ldc : {
                'default': _ldc
            };
        };
        defineModule(_ld8);
        Object.defineProperty(_ld8, '__esModule', {
            'value': true
        }), _ld8.SlotItemEffectParamModel = void 0;
        var _lde = _ldb(_ld9(18622)),
            _ldf = _ld9(72170),
            _ldg = (function() {
                var _ldh = null;

                function _ldi(_ldj, _ldk) {
                    var _ldl = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _ldm = {}, _ldn = {}, _ldo = {}, _ldp = {}, _ldq = {}, _ldr = 0, _lds = _ldk; _ldr < _lds.length; _ldr++) {
                        var _ldt = _lds[_ldr];
                        if (null != _ldt) {
                            null == _ldm[_ldt.mstID] && (_ldm[_ldt.mstID] = new Array()), _ldm[_ldt.mstID].push(_ldt), null == _ldn[_ldt.mstID] ? _ldn[_ldt.mstID] = 1 : _ldn[_ldt.mstID] += 1, null == _ldo[_ldt.equipType] ? _ldo[_ldt.equipType] = 1 : _ldo[_ldt.equipType] += 1, null == _ldp[_ldt.mstID] && (_ldp[_ldt.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            })), _ldp[_ldt.mstID][_ldt.level]++, null == _ldq[_ldt.mstID] && (_ldq[_ldt.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            }));
                            for (var _ldu = 0; _ldu <= this.SLOT_LEVEL_MAX && _ldt.level >= _ldu; _ldu++) _ldq[_ldt.mstID][_ldu]++;
                        }
                    }
                    this._have_slots_dict = _ldm, this._have_slotnums_dict = _ldn, this._have_type3nums_dict = _ldo, this._have_level_num_dict = _ldp, this._have_level_num_over_dict = _ldq, this._ship_id = _ldj.mstID, this._yomi = _ldj.yomi, this._stype = _ldj.shipTypeID, this._ctype = _ldj.getClassType();
                }
                return Object.defineProperty(_ldi.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _ldv = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'have_level_num_over_dict', {
                    'get': function() {
                        var _ldw = null;
                        return this._have_level_num_over_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'ship_id', {
                    'get': function() {
                        var _ldx = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'yomi', {
                    'get': function() {
                        var _ldy = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'stype', {
                    'get': function() {
                        var _ldz = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'ctype', {
                    'get': function() {
                        var _le0 = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _ldi.prototype.get_slotnums = function(_le1) {
                    var _le2 = null;
                    return null == this._have_slotnums_dict[_le1] ? 0 : this._have_slotnums_dict[_le1];
                }, _ldi.prototype.get_type3_nums = function(_le3) {
                    var _le4 = null;
                    return null == this._have_type3nums_dict[_le3] ? 0 : this._have_type3nums_dict[_le3];
                }, _ldi.prototype.haveSlotLevelNum = function(_le5) {
                    var _le6 = null;
                    return null == this._have_level_num_dict[_le5] ? [] : this._have_level_num_dict[_le5];
                }, _ldi.prototype.haveSlotLevelNumOver = function(_le7) {
                    var _le8 = null;
                    return null == this._have_level_num_over_dict[_le7] ? [] : this._have_level_num_over_dict[_le7];
                }, _ldi.prototype.have_slot_ids = function() {
                    var _le9 = null;
                    return Object.keys(this._have_slots_dict);
                }, _ldi.prototype.get_each_level_nums = function(_lea) {
                    var _leb = null,
                        _lec = this._have_slots_dict[_lea],
                        _led = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _lec)
                        for (var _lee = 0, _lef = _lec; _lee < _lef.length; _lee++) {
                            _led[_lef[_lee].level]++;
                        }
                    return _led;
                }, _ldi.prototype.get_each_level_over_nums = function(_leg) {
                    var _leh = null;
                    for (var _lei = this, _lej = [], _lek = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _lel = function(_lem) {
                            var _len = null;
                            if (_lej[_lem] = Array.apply(null, new Array(_leo.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _leo.have_slots_dict[_lem]) return 'continue';
                            _leo.get_each_level_nums(_lem).forEach(function(_lep, _leq) {
                                var _ler = null;
                                for (var _les = 1; _les <= _lei.SLOT_LEVEL_MAX; _les++) _leq >= _les && (_lej[_lem][_les] += _lep, _lek[_les] += _lep);
                            });
                        }, _leo = this, _let = 0, _leu = _leg; _let < _leu.length; _let++) {
                        _lel(_leu[_let]);
                    }
                    return {
                        'slot': _lej,
                        'total': _lek
                    };
                }, _ldi.prototype.getTotalCountWithOverLeveledItem = function(_lev) {
                    var _lew = null;
                    for (var _lex = this, _ley = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _lez = 0, _lf0 = _lev; _lez < _lf0.length; _lez++) {
                        var _lf1 = _lf0[_lez];
                        if (null != this._have_slots_dict[_lf1]) this._have_level_num_dict[_lf1].forEach(function(_lf2, _lf3) {
                            var _lf4 = null;
                            for (var _lf5 = 0; _lf5 <= _lex.SLOT_LEVEL_MAX; _lf5++) _lf3 >= _lf5 && (_ley[_lf5] += _lf2);
                        });
                    }
                    return _ley;
                }, _ldi.prototype.get_have_rader_nums = function() {
                    var _lf6 = null;
                    for (var _lf7 = 0, _lf8 = 0, _lf9 = 0, _lfa = 0, _lfb = this.have_slot_ids(); _lfa < _lfb.length; _lfa++) {
                        var _lfc = _lfb[_lfa],
                            _lfd = _lde.default.model.slot.getMst(_lfc),
                            _lfe = _lfd.equipType;
                        12 != _lfe && 13 != _lfe || (_lfd.sakuteki >= 5 && (_lf7 += this.get_slotnums(parseInt(_lfc))), _lfd.meichu >= 8 && (_lf8 += this.get_slotnums(parseInt(_lfc))), _lfd.taiku >= 2 && (_lf9 += this.get_slotnums(parseInt(_lfc))));
                    }
                    return {
                        'water_rader': _lf7,
                        'high_water_rader': _lf8,
                        'air_rader': _lf9
                    };
                }, _ldi.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _ldi.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _ldi.prototype.getCountryName = function() {
                    var _lff = null;
                    return null == _ldf.SHIP_COUNTRY[this._ctype] ? '' : _ldf.SHIP_COUNTRY[this._ctype];
                }, _ldi.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _ldi.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _ldi;
            }());
        _ld8.SlotItemEffectParamModel = _ldg;
    },
    16718: (_lqm, _lqn, _lqo) => {
        'use strict';
        var _lqp = null;
        defineModule(_lqn);
        Object.defineProperty(_lqn, '__esModule', {
            'value': true
        }), _lqn.TaskGetSlotItemEffectParams = void 0;
        var _lqq = _lqo(74496),
            _lqr = _lqo(82692),
            _lqs = (function() {
                var _lqt = null;

                function _lqu(_lqv, _lqw, _lqx) {
                    var _lqy = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lqv;
                    var _lqz = _lqv.getSlotitems();
                    _lqz.push(_lqv.getSlotitemEx());
                    var _lr0 = _lqz.map(function(_lr1) {
                        var _lr2 = null;
                        return null == _lr1 || null != _lqw && _lr1.memID == _lqw.memID ? null : _lr1;
                    });
                    this._removeSlots = _lr0;
                    var _lr3 = _lr0.map(function(_lr4) {
                        return _lr4;
                    });
                    _lr3.push(_lqx), this._toSlots = _lr3;
                }
                return _lqu.prototype.start = function() {
                    var _lr5 = null,
                        _lr6 = this._ship.getSlotitems();
                    _lr6.push(this._ship.getSlotitemEx());
                    var _lr7 = _lqr.SlotItemEffectUtil.getSlotitemEffect(this._ship, _lr6),
                        _lr8 = _lqr.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lr9 = _lqr.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_lr7, _lr8),
                        'toSlotItemEffect': this._subEffectModels(_lr9, _lr8)
                    };
                }, _lqu.prototype._subEffectModels = function(_lra, _lrb) {
                    var _lrc = null,
                        _lrd = new _lqq.SlotItemEffectModel();
                    return _lrd.houg = _lra.houg - _lrb.houg, _lrd.raig = _lra.raig - _lrb.raig, _lrd.tyku = _lra.tyku - _lrb.tyku, _lrd.souk = _lra.souk - _lrb.souk, _lrd.kaih = _lra.kaih - _lrb.kaih, _lrd.tais = _lra.tais - _lrb.tais, _lrd.saku = _lra.saku - _lrb.saku, _lrd.baku = _lra.baku - _lrb.baku, _lrd.houm = _lra.houm - _lrb.houm, _lrd.leng = _lra.leng - _lrb.leng, _lrd;
                }, _lqu;
            }());
        _lqn.TaskGetSlotItemEffectParams = _lqs;
    },
    69377: function(_mf3, _mf4, _mf5) {
        'use strict';
        var _mf6 = null;
        var _mf7 = this && this.__importDefault || function(_mf8) {
            var _mf9 = null;
            return _mf8 && _mf8.__esModule ? _mf8 : {
                'default': _mf8
            };
        };
        defineModule(_mf4);
        Object.defineProperty(_mf4, '__esModule', {
            'value': true
        }), _mf4.get25mmMachinegunEffect = void 0;
        var _mfa = _mf5(74496),
            _mfb = _mf7(_mf5(18622));
        _mf4.get25mmMachinegunEffect = function(_mfc) {
            var _mfd = null,
                _mfe = new _mfa.SlotItemEffectModel(),
                _mff = false,
                _mfg = new _mfa.SlotItemEffectModel(),
                _mfh = 0,
                _mfi = new _mfa.SlotItemEffectModel(),
                _mfj = {},
                _mfk = 0;
            if (662 == _mfc.ship_id || 663 == _mfc.ship_id ? (_mfg.tyku += 2, _mfg.kaih += 1, _mff = true) : 668 == _mfc.ship_id ? (_mfg.tyku += 3, _mfg.kaih += 2, _mff = true) : 979 == _mfc.ship_id && (_mfg.tyku += 2, _mfg.kaih += 3, _mff = true, _mfi.kaih += 2, _mfj[49] = _mfi, _mfk = 1), 56 == _mfc.ctype && (_mfg.houg += 1, _mfg.tyku += 2, _mfg.kaih += 2, _mff = true, _mfh = 1), Object.keys(_mfj).forEach(function(_mfl) {
                    var _mfm = null,
                        _mfn = _mfj[parseInt(_mfl)],
                        _mfo = _mfc.get_slotnums(parseInt(_mfl));
                    _mfe.add(_mfn.multiply(_mfo));
                }), _mfk > 0) {
                var _mfp = _mfc.get_each_level_over_nums([49, 39, 40, 131]),
                    _mfq = _mfp.slot[49],
                    _mfr = _mfp.slot[39],
                    _mfs = _mfp.slot[40],
                    _mft = _mfp.slot[131];
                1 == _mfk && (_mfq[6] >= 1 && (_mfe.houm += 1 * _mfq[6]), _mfq[7] >= 1 && (_mfe.tyku += 1 * _mfq[7]), _mfq[8] >= 1 && (_mfe.kaih += 1 * _mfq[8]), _mfq[9] >= 1 && (_mfe.tyku += 1 * _mfq[9]), _mfq[10] >= 1 && (_mfe.houg += 1 * _mfq[10]), _mfr[8] >= 1 && (_mfe.kaih += 1 * _mfr[8]), _mfr[9] >= 1 && (_mfe.tyku += 2 * _mfr[9]), _mfr[10] >= 1 && (_mfe.houg += 1 * _mfr[10]), _mfs[9] >= 1 && (_mfe.tyku += 2 * _mfs[9]), _mfs[10] >= 1 && (_mfe.houg += 1 * _mfs[10]), _mft[10] >= 1 && (_mfe.tyku += 2 * _mft[10]));
            }
            if (0 == _mff) return _mfe;
            var _mfu = _mfc.get_slotnums(39) + _mfc.get_slotnums(40) + _mfc.get_slotnums(49) + _mfc.get_slotnums(131);
            if (_mfe.add(_mfg.multiply(_mfu)), 0 == _mfh) return _mfe;
            for (var _mfv = 0, _mfw = 0, _mfx = _mfc.have_slot_ids(); _mfw < _mfx.length; _mfw++) {
                var _mfy = _mfx[_mfw],
                    _mfz = _mfb.default.model.slot.getMst(_mfy),
                    _mg0 = _mfz.equipType;
                12 != _mg0 && 13 != _mg0 || (_mfz.sakuteki >= 5 && _mfc.get_slotnums(parseInt(_mfy)), _mfz.taiku >= 2 && (_mfv += _mfc.get_slotnums(parseInt(_mfy))));
            }
            return _mfv >= 1 && 1 == _mfh && (_mfe.tyku += 2, _mfe.kaih += 2), _mfe;
        };
    },
    77670: function(_mg1, _mg2, _mg3) {
        'use strict';
        var _mg4 = null;
        var _mg5 = this && this.__importDefault || function(_mg6) {
            var _mg7 = null;
            return _mg6 && _mg6.__esModule ? _mg6 : {
                'default': _mg6
            };
        };
        defineModule(_mg2);
        Object.defineProperty(_mg2, '__esModule', {
            'value': true
        }), _mg2.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mg8 = _mg3(74496),
            _mg9 = _mg5(_mg3(18622));
        _mg2.get8cmAntiAircraftGunPersonalEffect = function(_mga) {
            var _mgb = null,
                _mgc = new _mg8.SlotItemEffectModel(),
                _mgd = false,
                _mge = new _mg8.SlotItemEffectModel(),
                _mgf = 0;
            if (501 != _mga.ship_id && 506 != _mga.ship_id && 502 != _mga.ship_id && 507 != _mga.ship_id || (_mge.tyku += 2, _mge.kaih += 1, _mgd = true, _mgf = 1), 501 != _mga.ship_id && 506 != _mga.ship_id || (_mge.houg += 1, _mge.tyku += 2, _mge.kaih += 2, _mgd = true, _mgf = 1), 0 == _mgd) return _mgc;
            var _mgg = _mga.get_slotnums(66) + _mga.get_slotnums(220);
            _mgc.add(_mge.multiply(_mgg));
            for (var _mgh = 0, _mgi = 0, _mgj = _mga.have_slot_ids(); _mgi < _mgj.length; _mgi++) {
                var _mgk = _mgj[_mgi],
                    _mgl = _mg9.default.model.slot.getMst(_mgk),
                    _mgm = _mgl.equipType;
                12 != _mgm && 13 != _mgm || (_mgl.sakuteki >= 5 && _mga.get_slotnums(parseInt(_mgk)), _mgl.taiku >= 2 && (_mgh += _mga.get_slotnums(parseInt(_mgk))));
            }
            return 0 == _mgf || _mgh >= 1 && (_mgc.tyku += 1, _mgc.kaih += 2), _mgc;
        };
    },
    34165: (_mgn, _mgo, _mgp) => {
        'use strict';
        var _mgq = null;
        defineModule(_mgo);
        Object.defineProperty(_mgo, '__esModule', {
            'value': true
        }), _mgo.getCamouflageSlotPersonalEffect = void 0;
        var _mgr = _mgp(74496);
        _mgo.getCamouflageSlotPersonalEffect = function(_mgs) {
            var _mgt = null,
                _mgu = new _mgr.SlotItemEffectModel();
            return 'きそ' != _mgs.yomi && 'たま' != _mgs.yomi || (_mgu.kaih = 7, _mgu.souk = 2), _mgu;
        };
    },
    31127: (_mgv, _mgw, _mgx) => {
        'use strict';
        var _mgy = null;
        defineModule(_mgw);
        Object.defineProperty(_mgw, '__esModule', {
            'value': true
        }), _mgw.getHighZuiunSeriesEffect = void 0;
        var _mgz = _mgx(74496);
        _mgw.getHighZuiunSeriesEffect = function(_mh0) {
            var _mh1 = null,
                _mh2 = new _mgz.SlotItemEffectModel(),
                _mh3 = false,
                _mh4 = new _mgz.SlotItemEffectModel();
            if (662 == _mh0.ship_id ? (_mh2.houg += 3, _mh2.kaih += 1) : 663 == _mh0.ship_id || 668 == _mh0.ship_id || 501 == _mh0.ship_id || 506 == _mh0.ship_id || 553 == _mh0.ship_id || 554 == _mh0.ship_id ? (_mh4.houg += 3, _mh4.kaih += 2, _mh4.tyku += 1, _mh3 = true) : 502 != _mh0.ship_id && 507 != _mh0.ship_id || (_mh4.houg += 2, _mh4.kaih += 2, _mh4.tyku += 1, _mh3 = true), 0 == _mh3) return _mh2;
            var _mh5 = 0;
            return [237, 322, 323, 490].forEach(function(_mh6) {
                var _mh7 = null;
                _mh5 += _mh0.get_slotnums(_mh6);
            }), _mh2.add(_mh4.multiply(_mh5)), _mh2;
        };
    },
    81018: function(_mh8, _mh9, _mha) {
        'use strict';
        var _mhb = null;
        var _mhc = this && this.__importDefault || function(_mhd) {
            var _mhe = null;
            return _mhd && _mhd.__esModule ? _mhd : {
                'default': _mhd
            };
        };
        defineModule(_mh9);
        Object.defineProperty(_mh9, '__esModule', {
            'value': true
        }), _mh9.getRaderPrivateEffect = void 0;
        var _mhf = _mha(74496),
            _mhg = _mhc(_mha(18622));
        _mh9.getRaderPrivateEffect = function(_mhh) {
            var _mhi = null,
                _mhj = new _mhf.SlotItemEffectModel(),
                _mhk = 0,
                _mhl = 0;
            if (569 == _mhh.ship_id || 648 == _mhh.ship_id || 961 == _mhh.ship_id || 951 == _mhh.ship_id) _mhk = 1;
            else {
                if (955 != _mhh.ship_id && 960 != _mhh.ship_id) return _mhj;
                _mhk = 2, _mhl = 1;
            }
            for (var _mhm = 0, _mhn = 0, _mho = _mhh.have_slot_ids(); _mhn < _mho.length; _mhn++) {
                var _mhp = _mho[_mhn],
                    _mhq = _mhg.default.model.slot.getMst(_mhp),
                    _mhr = _mhq.equipType;
                12 != _mhr && 13 != _mhr || (_mhq.sakuteki >= 5 && _mhh.get_slotnums(parseInt(_mhp)), _mhq.taiku >= 2 && (_mhm += _mhh.get_slotnums(parseInt(_mhp))));
            }
            if (_mhm > 0 && (1 == _mhk ? (_mhj.houg += 1, _mhj.kaih += 3, _mhj.tyku += 2) : 2 == _mhk && (_mhj.tyku += 2, _mhj.kaih += 1)), 0 == _mhl) return _mhj;
            for (var _mhs = [], _mht = function(_mhu) {
                    var _mhv = null;
                    if (null == _mhh.have_slots_dict[_mhu]) return 'continue';
                    var _mhw = _mhh.get_each_level_nums(_mhu);
                    null == _mhs[_mhu] && (_mhs[_mhu] = []), _mhw.forEach(function(_mhx, _mhy) {
                        var _mhz = null;
                        for (var _mi0 = 1; _mi0 <= _mhh.SLOT_LEVEL_MAX; _mi0++) null == _mhs[_mhu][_mi0] && (_mhs[_mhu][_mi0] = 0), _mhy >= _mi0 && (_mhs[_mhu][_mi0] += _mhx);
                    });
                }, _mi1 = 0, _mi2 = [450]; _mi1 < _mi2.length; _mi1++) {
                _mht(_mi2[_mi1]);
            }
            var _mi3 = null != _mhs[450] ? _mhs[450][4] : 0;
            return 1 == _mhl && _mi3 > 0 && (_mhj.houg += 1, _mhj.houm += 1, _mhj.tyku += 1, _mhj.kaih += 2), _mhj;
        };
    },
    56716: (_mi4, _mi5, _mi6) => {
        'use strict';
        var _mi7 = null;
        defineModule(_mi5);
        Object.defineProperty(_mi5, '__esModule', {
            'value': true
        }), _mi5.getSearchLightEffect = void 0;
        var _mi8 = _mi6(74496);
        _mi5.getSearchLightEffect = function(_mi9) {
            var _mia = null,
                _mib = new _mi8.SlotItemEffectModel(),
                _mic = _mi9.get_type3_nums(29);
            return 'ひえい' == _mi9.yomi || 'きりしま' == _mi9.yomi || 'ちょうかい' == _mi9.yomi || 'じんつう' == _mi9.yomi || 'あかつき' == _mi9.yomi ? (_mib.houg += 4, _mib.kaih -= 1) : 'あきぐも' == _mi9.yomi ? _mib.houg = _mib.houg + 2 * _mic : 'ゆきかぜ' == _mi9.yomi && (_mib.houg = _mib.houg + _mic, _mib.tyku = _mib.tyku + _mic), 662 != _mi9.ship_id && 663 != _mi9.ship_id && 668 != _mi9.ship_id || (_mib.raig += 2, _mib.houg += 4), 'じんつう' == _mi9.yomi && (_mib.raig += 8, _mib.houg += 4), _mib;
        };
    },
    17713: (_mid, _mie, _mif) => {
        'use strict';
        var _mig = null;
        defineModule(_mie);
        Object.defineProperty(_mie, '__esModule', {
            'value': true
        }), _mie.getSearchLightLargeEffect = void 0;
        var _mih = _mif(74496);
        _mie.getSearchLightLargeEffect = function(_mii) {
            var _mij = null,
                _mik = new _mih.SlotItemEffectModel();
            'ひえい' == _mii.yomi || 'きりしま' == _mii.yomi ? (_mik.houg += 6, _mik.kaih -= 2) : 'やまと' != _mii.yomi && 'むさし' != _mii.yomi || (_mik.houg += 4, _mik.kaih -= 1);
            var _mil = _mii.get_slotnums(174);
            return 592 == _mii.ship_id ? (_mik.houg += 3, _mik.raig += 3, _mil > 0 && (_mik.raig += 5)) : 694 == _mii.ship_id && (_mik.houg += 4, _mik.raig += 1, _mil > 0 && (_mik.raig += 7)), _mik;
        };
    },
    17213: (_mim, _min, _mio) => {
        'use strict';
        var _mip = null;
        defineModule(_min);
        Object.defineProperty(_min, '__esModule', {
            'value': true
        }), _min.getSlot100PersonalEffect = void 0;
        var _miq = _mio(74496);
        _min.getSlot100PersonalEffect = function(_mir) {
            var _mis = null,
                _mit = new _miq.SlotItemEffectModel(),
                _miu = new _miq.SlotItemEffectModel();
            if (553 == _mir.ship_id) _miu.houg = 4;
            else {
                if (554 != _mir.ship_id) return 196 == _mir.ship_id ? (_mit.houg = 3, _mit) : 197 == _mir.ship_id ? (_mit.houg = 6, _mit) : _mit;
                _miu.houg = 4;
            }
            var _miv = _mir.get_slotnums(100);
            return _mit = _miu.multiply(_miv);
        };
    },
    40176: (_miw, _mix, _miy) => {
        'use strict';
        var _miz = null;
        defineModule(_mix);
        Object.defineProperty(_mix, '__esModule', {
            'value': true
        }), _mix.getSlot104PersonalEffect = void 0;
        var _mj0 = _miy(74496);
        _mix.getSlot104PersonalEffect = function(_mj1) {
            var _mj2 = null,
                _mj3 = new _mj0.SlotItemEffectModel(),
                _mj4 = new _mj0.SlotItemEffectModel();
            if (149 == _mj1.ship_id || 591 == _mj1.ship_id) _mj4.houg = 2;
            else {
                if (150 == _mj1.ship_id || 592 == _mj1.ship_id) _mj4.houg = 1;
                else {
                    if (152 == _mj1.ship_id || 694 == _mj1.ship_id) _mj4.houg = 1;
                    else {
                        if (151 != _mj1.ship_id && 593 != _mj1.ship_id && 954 != _mj1.ship_id) return _mj3;
                        _mj4.houg = 2, _mj4.tyku = 1, _mj4.kaih = 2;
                    }
                }
            }
            var _mj5 = _mj1.get_slotnums(104);
            return _mj3 = _mj4.multiply(_mj5);
        };
    },
    32889: (_mj6, _mj7, _mj8) => {
        'use strict';
        var _mj9 = null;
        defineModule(_mj7);
        Object.defineProperty(_mj7, '__esModule', {
            'value': true
        }), _mj7.getSlot106PersonalEffect = void 0;
        var _mja = _mj8(74496);
        _mj7.getSlot106PersonalEffect = function(_mjb) {
            var _mjc = null,
                _mjd = new _mja.SlotItemEffectModel(),
                _mje = new _mja.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mjb.ship_id) >= 0 ? (_mje.houg += 1, _mje.tyku += 2, _mje.souk += 1, _mje.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mjb.yomi) >= 0 ? (_mje.tyku += 1, _mje.souk += 1, _mje.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mjb.yomi) >= 0 && (_mje.tyku += 2, _mje.souk += 1, _mje.kaih += 2, 663 != _mjb.ship_id && 668 != _mjb.ship_id || (_mjd.houg += 1, _mjd.tyku += 1, _mjd.souk += 1, _mjd.kaih += 1), 668 == _mjb.ship_id && (_mjd.tyku += 1, _mjd.kaih += 1)), !_mje.exists()) return _mjd;
            var _mjf = _mjb.get_slotnums(106) + _mjb.get_slotnums(450);
            return _mjd.add(_mje.multiply(_mjf)), _mjd;
        };
    },
    15133: (_mjg, _mjh, _mji) => {
        'use strict';
        var _mjj = null;
        defineModule(_mjh);
        Object.defineProperty(_mjh, '__esModule', {
            'value': true
        }), _mjh.getSlot115PersonalEffect = void 0;
        var _mjk = _mji(74496);
        _mjh.getSlot115PersonalEffect = function(_mjl) {
            var _mjm = null,
                _mjn = new _mjk.SlotItemEffectModel(),
                _mjo = false,
                _mjp = new _mjk.SlotItemEffectModel(),
                _mjq = 0;
            if (55 != _mjl.ctype && 47 != _mjl.ctype || (_mjp.houg += 2, _mjp.saku += 2, _mjp.kaih += 1, _mjo = true, _mjq = 1), 0 == _mjo) return _mjn;
            var _mjr = _mjl.get_slotnums(115);
            if (_mjn.add(_mjp.multiply(_mjr)), 0 == _mjq) return _mjn;
            var _mjs = _mjl.get_each_level_nums(115)[10];
            return 1 == _mjq && (_mjn.houg += 1 * _mjs, _mjn.kaih += 1 * _mjs), _mjn;
        };
    },
    55747: (_mjt, _mju, _mjv) => {
        'use strict';
        var _mjw = null;
        defineModule(_mju);
        Object.defineProperty(_mju, '__esModule', {
            'value': true
        }), _mju.getSlot118PersonalEffect = void 0;
        var _mjx = _mjv(74496);
        _mju.getSlot118PersonalEffect = function(_mjy) {
            var _mjz = null,
                _mk0 = new _mjx.SlotItemEffectModel(),
                _mk1 = false,
                _mk2 = new _mjx.SlotItemEffectModel(),
                _mk3 = 0;
            if (52 == _mjy.ctype && (_mk2.houg += 1, _mk2.saku += 2, _mk2.kaih += 2, _mk3 = 1, _mk1 = true), 507 == _mjy.ship_id && (_mk2.houg += 3, _mk2.saku += 2, _mk2.kaih += 1, _mk3 = 2, _mk1 = true), 0 == _mk1) return _mk0;
            var _mk4 = _mjy.get_slotnums(118) + _mjy.get_slotnums(521);
            if (_mk0.add(_mk2.multiply(_mk4)), 0 == _mjy.get_slotnums(118)) return _mk0;
            if (0 == _mk3) return _mk0;
            var _mk5 = _mjy.get_each_level_nums(118),
                _mk6 = 0,
                _mk7 = 0,
                _mk8 = 0,
                _mk9 = _mk5[10];
            return _mk5.forEach(function(_mka, _mkb) {
                _mkb >= 2 && (_mk6 += _mka), _mkb >= 5 && (_mk7 += _mka), _mkb >= 7 && (_mk8 += _mka);
            }), 1 == _mk3 ? (_mk0.houg += 2 * _mk9, _mk0.saku += 1 * _mk9) : 2 == _mk3 && (_mk0.houm += 1 * _mk6, _mk0.kaih += 1 * _mk7, _mk0.houg += 1 * _mk8, _mk0.houg += 1 * _mk9, _mk0.raig += 1 * _mk9, _mk0.tyku += 1 * _mk9, _mk0.saku += 1 * _mk9, _mk0.kaih += 1 * _mk9), _mk0;
        };
    },
    11285: (_mkc, _mkd, _mke) => {
        'use strict';
        var _mkf = null;
        defineModule(_mkd);
        Object.defineProperty(_mkd, '__esModule', {
            'value': true
        }), _mkd.getSlot119PersonalEffect = void 0;
        var _mkg = _mke(74496);
        _mkd.getSlot119PersonalEffect = function(_mkh) {
            var _mki = null,
                _mkj = new _mkg.SlotItemEffectModel(),
                _mkk = new _mkg.SlotItemEffectModel();
            34 == _mkh.ctype || 56 == _mkh.ctype ? _mkk.houg += 1 : 90 == _mkh.ctype && (_mkk.houg += 2, _mkk.raig += 1);
            var _mkl = true;
            if (_mkk.exists() || (_mkl = false), 0 == _mkl) return _mkj;
            var _mkm = _mkh.get_slotnums(119);
            return _mkj = _mkk.multiply(_mkm);
        };
    },
    96200: (_mkn, _mko, _mkp) => {
        'use strict';
        var _mkq = null;
        defineModule(_mko);
        Object.defineProperty(_mko, '__esModule', {
            'value': true
        }), _mko.getSlot120mm50GroupPersonalEffect = void 0;
        var _mkr = _mkp(74496);
        _mko.getSlot120mm50GroupPersonalEffect = function(_mks) {
            var _mkt = null,
                _mku = new _mkr.SlotItemEffectModel(),
                _mkv = false,
                _mkw = new _mkr.SlotItemEffectModel(),
                _mkx = _mks.get_slotnums(147),
                _mky = _mks.get_slotnums(393),
                _mkz = _mks.get_slotnums(394),
                _ml0 = new _mkr.SlotItemEffectModel(),
                _ml1 = new _mkr.SlotItemEffectModel();
            if (61 == _mks.ctype && (_mkw.houg += 1, _mkw.kaih += 1, _mkv = true, _mky >= 1 && (_ml0.houg += 1, _ml0.tyku += 1), _mkz >= 1 && (_ml1.houg += 1, _ml1.tyku += 1, _ml1.kaih += 1, 'グレカーレ' == _mks.yomi && (_ml1.kaih += 1)), 1), 0 == _mkv) return _mku;
            var _ml2 = _mkx + _mky + _mkz;
            _mku.add(_mkw.multiply(_ml2)).add(_ml0.multiply(_mky)).add(_ml1.multiply(_mkz));
            var _ml3 = _mks.get_each_level_over_nums([394]).slot[394];
            return _ml3[7] >= 1 && (_mku.houm += 1 * _ml3[7], 'グレカーレ' == _mks.yomi && (_mku.houg += 1 * _ml3[7])), _ml3[8] >= 1 && (_mku.houg += 1 * _ml3[8]), _ml3[9] >= 1 && (_mku.houm += 1 * _ml3[9]), _ml3[10] >= 1 && (_mku.houg += 1 * _ml3[10], 'グレカーレ' == _mks.yomi && (_mku.kaih += 1 * _ml3[10])), _mku;
        };
    },
    33155: function(_ml4, _ml5, _ml6) {
        'use strict';
        var _ml7 = null;
        var _ml8 = this && this.__importDefault || function(_ml9) {
            var _mla = null;
            return _ml9 && _ml9.__esModule ? _ml9 : {
                'default': _ml9
            };
        };
        defineModule(_ml5);
        Object.defineProperty(_ml5, '__esModule', {
            'value': true
        }), _ml5.getSlot121PersonalEffect = void 0;
        var _mlb = _ml6(74496),
            _mlc = _ml8(_ml6(18622));
        _ml5.getSlot121PersonalEffect = function(_mld) {
            var _mle = null,
                _mlf = new _mlb.SlotItemEffectModel(),
                _mlg = 0,
                _mlh = new _mlb.SlotItemEffectModel(),
                _mli = false;
            54 == _mld.ctype && (_mlf.tyku += 4, _mlf.kaih += 2, _mlg = 1), 968 == _mld.ship_id && (_mlh.houg += 1, _mlh.tyku += 1, _mlh.kaih += 1, _mli = true);
            var _mlj = _mld.get_slotnums(121);
            if (_mli && _mlf.add(_mlh.multiply(_mlj)), 0 == _mlg) return _mlf;
            for (var _mlk = 0, _mll = 0, _mlm = _mld.have_slot_ids(); _mll < _mlm.length; _mll++) {
                var _mln = _mlm[_mll],
                    _mlo = _mlc.default.model.slot.getMst(_mln),
                    _mlp = _mlo.equipType;
                12 != _mlp && 13 != _mlp || (_mlo.sakuteki >= 5 && _mld.get_slotnums(parseInt(_mln)), _mlo.taiku >= 2 && (_mlk += _mld.get_slotnums(parseInt(_mln))));
            }
            return _mlk >= 1 && (_mlf.tyku += 2, _mlf.kaih += 2, 968 == _mld.ship_id && (_mlf.houg += 1 * _mlj, _mlf.houm += 1 * _mlj)), _mlf;
        };
    },
    9115: function(_mlq, _mlr, _mls) {
        'use strict';
        var _mlt = null;
        var _mlu = this && this.__importDefault || function(_mlv) {
            var _mlw = null;
            return _mlv && _mlv.__esModule ? _mlv : {
                'default': _mlv
            };
        };
        defineModule(_mlr);
        Object.defineProperty(_mlr, '__esModule', {
            'value': true
        }), _mlr.getSlot122PersonalEffect = void 0;
        var _mlx = _mls(74496),
            _mly = _mlu(_mls(18622));
        _mlr.getSlot122PersonalEffect = function(_mlz) {
            var _mm0 = null,
                _mm1 = new _mlx.SlotItemEffectModel(),
                _mm2 = 0,
                _mm3 = 0,
                _mm4 = false;
            656 == _mlz.ship_id && (_mm4 = true, _mm2 = 1, _mm3 = 1);
            var _mm5 = 0,
                _mm6 = 0,
                _mm7 = _mlz.get_each_level_nums(122),
                _mm8 = 0;
            if (_mm4) {
                _mm7.forEach(function(_mm9, _mma) {
                    _mma >= 4 && (_mm8 += _mm9);
                });
                for (var _mmb = 0, _mmc = _mlz.have_slot_ids(); _mmb < _mmc.length; _mmb++) {
                    var _mmd = _mmc[_mmb],
                        _mme = _mly.default.model.slot.getMst(_mmd),
                        _mmf = _mme.equipType;
                    12 != _mmf && 13 != _mmf || (_mme.sakuteki >= 5 && (_mm5 += _mlz.get_slotnums(parseInt(_mmd))), _mme.taiku >= 2 && (_mm6 += _mlz.get_slotnums(parseInt(_mmd))));
                }
            }
            return _mm8 > 0 && (1 == _mm3 && (_mm5 > 0 && (_mm1.houg += 4, _mm1.kaih += 3), _mm6 > 0 && (_mm1.tyku += 4, _mm1.kaih += 3)), 1 == _mm2 && (_mm1.houg += 5 * _mm8, _mm1.tyku += 3 * _mm8, _mm1.kaih += 2 * _mm8)), _mm1;
        };
    },
    85127: (_mmg, _mmh, _mmi) => {
        'use strict';
        var _mmj = null;
        defineModule(_mmh);
        Object.defineProperty(_mmh, '__esModule', {
            'value': true
        }), _mmh.getSlot123PersonalEffect = void 0;
        var _mmk = _mmi(74496);
        _mmh.getSlot123PersonalEffect = function(_mml) {
            var _mmm = null,
                _mmn = new _mmk.SlotItemEffectModel(),
                _mmo = (new _mmk.SlotItemEffectModel(), 0),
                _mmp = (_mml.get_slotnums(123), _mml.get_slotnums(124));
            if ('ドイツ' != _mml.getCountryName()) return _mmn;
            _mmo = 1, _mmp >= 1 && (_mmn.kaih += 1 * _mmp);
            var _mmq = _mml.get_each_level_over_nums([123, 124]),
                _mmr = _mmq.slot[123],
                _mms = _mmq.slot[124];
            return 1 == _mmo && (_mmr[5] >= 1 && (_mmn.houg += 1 * _mmr[5]), _mmr[7] >= 1 && (_mmn.houm += 1 * _mmr[7]), _mmr[9] >= 1 && (_mmn.houg += 1 * _mmr[9]), _mmr[10] >= 1 && (_mmn.houm += 1 * _mmr[10]), _mms[8] >= 1 && (_mmn.kaih += 1 * _mms[8]), _mms[10] >= 1 && (_mmn.houm += 1 * _mms[10])), _mmn;
        };
    },
    87204: (_mmt, _mmu, _mmv) => {
        'use strict';
        var _mmw = null;
        defineModule(_mmu);
        Object.defineProperty(_mmu, '__esModule', {
            'value': true
        }), _mmu.getSlot124PersonalEffect = void 0;
        var _mmx = _mmv(74496);
        _mmu.getSlot124PersonalEffect = function(_mmy) {
            var _mmz = null,
                _mn0 = new _mmx.SlotItemEffectModel(),
                _mn1 = (new _mmx.SlotItemEffectModel(), 0),
                _mn2 = _mmy.getCountryName();
            if ('ドイツ' == _mn2) _mn1 = 1;
            else {
                if ('イタリア' != _mn2) return _mn0;
                _mn1 = 2;
            }
            var _mn3 = _mmy.get_each_level_over_nums([124]).slot[124];
            return 1 == _mn1 ? (_mn3[7] >= 1 && (_mn0.houm += 1 * _mn3[7]), _mn3[8] >= 1 && (_mn0.houg += 1 * _mn3[8]), _mn3[9] >= 1 && (_mn0.tyku += 1 * _mn3[9]), _mn3[10] >= 1 && (_mn0.houm += 1 * _mn3[10])) : 2 == _mn1 && (_mn3[8] >= 1 && (_mn0.houm += 1 * _mn3[8]), _mn3[9] >= 1 && (_mn0.tyku += 1 * _mn3[9]), _mn3[10] >= 1 && (_mn0.houg += 1 * _mn3[10])), _mn0;
        };
    },
    37173: (_mn4, _mn5, _mn6) => {
        'use strict';
        var _mn7 = null;
        defineModule(_mn5);
        Object.defineProperty(_mn5, '__esModule', {
            'value': true
        }), _mn5.getSlot129PersonalEffect = void 0;
        var _mn8 = _mn6(74496);
        _mn5.getSlot129PersonalEffect = function(_mn9) {
            var _mna = null,
                _mnb = new _mn8.SlotItemEffectModel(),
                _mnc = false,
                _mnd = new _mn8.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mn9.ctype) >= 0 ? (_mnd.houg = 1, _mnd.raig = 2, _mnd.kaih = 2, _mnd.tais = 2, _mnd.saku = 1, _mnc = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mn9.ctype) >= 0 ? (_mnd.houg = 1, _mnd.raig = 2, _mnd.kaih = 2, _mnd.saku = 3, _mnc = true) : [7, 13, 29, 8, 9, 31].indexOf(_mn9.ctype) >= 0 && (_mnd.houg = 1, _mnd.kaih = 2, _mnd.saku = 3, _mnc = true), 0 == _mnc) return _mnb;
            var _mne = _mn9.get_slotnums(129);
            return _mnb = _mnd.multiply(_mne);
        };
    },
    73254: (_mnf, _mng, _mnh) => {
        'use strict';
        var _mni = null;
        defineModule(_mng);
        Object.defineProperty(_mng, '__esModule', {
            'value': true
        }), _mng.getSlot12PersonalEffect = void 0;
        var _mnj = _mnh(74496);
        _mng.getSlot12PersonalEffect = function(_mnk) {
            var _mnl = null,
                _mnm = new _mnj.SlotItemEffectModel(),
                _mnn = false,
                _mno = new _mnj.SlotItemEffectModel(),
                _mnp = _mnk.get_slotnums(142) + _mnk.get_slotnums(460);
            if (37 == _mnk.ctype && (_mno.houg += 1, _mno.kaih += 1, _mno.houm += 1, _mnp >= 1 && (_mnm.kaih += 1, _mnm.houm += 1), _mnn = true), 0 == _mnn) return _mnm;
            var _mnq = _mnk.get_slotnums(12);
            return _mnm.add(_mno.multiply(_mnq)), _mnm;
        };
    },
    41410: (_mnr, _mns, _mnt) => {
        'use strict';
        var _mnu = null;
        defineModule(_mns);
        Object.defineProperty(_mns, '__esModule', {
            'value': true
        }), _mns.getSlot130PersonalEffect = void 0;
        var _mnv = _mnt(74496);
        _mns.getSlot130PersonalEffect = function(_mnw) {
            var _mnx = null,
                _mny = new _mnv.SlotItemEffectModel(),
                _mnz = _mnw.have_level_num_over_dict[130];
            return null == _mnz || (428 == _mnw.ship_id ? (_mnz[1] >= 1 && (_mny.tyku += 1 * _mnz[1]), _mnz[3] >= 1 && (_mny.kaih += 1 * _mnz[3]), _mnz[5] >= 1 && (_mny.houm += 1 * _mnz[5]), _mnz[7] >= 1 && (_mny.tyku += 1 * _mnz[7]), _mnz[8] >= 1 && (_mny.kaih += 1 * _mnz[8]), _mnz[9] >= 1 && (_mny.tyku += 1 * _mnz[9]), _mnz[10] >= 1 && (_mny.houg += 1 * _mnz[10])) : 141 == _mnw.ship_id && (_mnz[2] >= 1 && (_mny.tyku += 1 * _mnz[2]), _mnz[4] >= 1 && (_mny.kaih += 1 * _mnz[4]), _mnz[6] >= 1 && (_mny.houm += 1 * _mnz[6]), _mnz[8] >= 1 && (_mny.tyku += 1 * _mnz[8]), _mnz[10] >= 1 && (_mny.kaih += 1 * _mnz[10])), 1 == _mnw.stype && (_mnz[3] >= 1 && (_mny.tyku += 1 * _mnz[3]), _mnz[6] >= 1 && (_mny.kaih += 1 * _mnz[6]), _mnz[9] >= 1 && (_mny.tyku += 1 * _mnz[9]), _mnz[10] >= 1 && (_mny.kaih += 1 * _mnz[10]))), _mny;
        };
    },
    93373: (_mo0, _mo1, _mo2) => {
        'use strict';
        var _mo3 = null;
        defineModule(_mo1);
        Object.defineProperty(_mo1, '__esModule', {
            'value': true
        }), _mo1.getSlot132PersonalEffect = void 0;
        var _mo4 = _mo2(74496);
        _mo1.getSlot132PersonalEffect = function(_mo5) {
            var _mo6 = null,
                _mo7 = new _mo4.SlotItemEffectModel(),
                _mo8 = _mo5.get_each_level_nums(132),
                _mo9 = 0,
                _moa = 0,
                _mob = 0,
                _moc = 0,
                _mod = 0;
            return _mo8.forEach(function(_moe, _mof) {
                _mof >= 3 && (_mo9 += _moe), _mof >= 5 && (_moa += _moe), _mof >= 7 && (_mob += _moe), _mof >= 8 && (_moc += _moe), _mof >= 9 && (_mod += _moe);
            }), _mo9 >= 1 && (_mo7.kaih += 1), _moa >= 1 && (_mo7.tais += 1), _mob >= 1 && (_mo7.kaih += 1), _moc >= 1 && (_mo7.tais += 1), _mod >= 1 && (_mo7.houm += 1), _mo8[10] >= 1 && (_mo7.tais += 1), 911 != _mo5.ship_id && 916 != _mo5.ship_id && 546 != _mo5.ship_id || (_mo7.kaih += 1), 461 != _mo5.ship_id && 466 != _mo5.ship_id && 462 != _mo5.ship_id && 467 != _mo5.ship_id && 156 != _mo5.ship_id || (_mo7.kaih += 2), _mo7;
        };
    },
    88838: (_mog, _moh, _moi) => {
        'use strict';
        var _moj = null;
        defineModule(_moh);
        Object.defineProperty(_moh, '__esModule', {
            'value': true
        }), _moh.getSlot136PersonalEffect = void 0;
        var _mok = _moi(74496);
        _moh.getSlot136PersonalEffect = function(_mol) {
            var _mom = null,
                _mon = new _mok.SlotItemEffectModel(),
                _moo = 0;
            if (58 != _mol.ctype && 61 != _mol.ctype && 64 != _mol.ctype && 68 != _mol.ctype && 80 != _mol.ctype && 92 != _mol.ctype && 113 != _mol.ctype && 124 != _mol.ctype || (_mon.souk += 2, _mon.kaih += 1, _moo = 1), 879 == _mol.ship_id && (_mon.souk += 1, _mon.kaih += 1), 0 == _moo) return _mon;
            var _mop = _mol.get_each_level_nums(136),
                _moq = 0,
                _mor = 0,
                _mos = _mop[10];
            return _moo > 0 && _mop.forEach(function(_mot, _mou) {
                _mou >= 3 && (_moq += _mot), _mou >= 6 && (_mor += _mot);
            }), 1 == _moo && (_moq >= 1 && (_mon.souk += 1 * _moq), _mor >= 1 && (_mon.souk += 1 * _mor), _mos >= 1 && (_mon.souk += 1 * _mos)), _mon;
        };
    },
    17274: (_mov, _mow, _mox) => {
        'use strict';
        var _moy = null;
        defineModule(_mow);
        Object.defineProperty(_mow, '__esModule', {
            'value': true
        }), _mow.getSlot139PersonalEffect = void 0;
        var _moz = _mox(74496);
        _mow.getSlot139PersonalEffect = function(_mp0) {
            var _mp1 = null,
                _mp2 = new _moz.SlotItemEffectModel(),
                _mp3 = false,
                _mp4 = new _moz.SlotItemEffectModel();
            if (662 != _mp0.ship_id && 663 != _mp0.ship_id && 668 != _mp0.ship_id || (_mp4.houg += 2, _mp4.tyku += 1, _mp3 = true), 0 == _mp3) return _mp2;
            var _mp5 = _mp0.get_slotnums(139);
            return _mp2.add(_mp4.multiply(_mp5)), _mp2;
        };
    },
    6482: (_mp6, _mp7, _mp8) => {
        'use strict';
        var _mp9 = null;
        defineModule(_mp7);
        Object.defineProperty(_mp7, '__esModule', {
            'value': true
        }), _mp7.getSlot13_8cmRensouhouPersonalEffect = void 0;
        var _mpa = _mp8(74496);
        _mp7.getSlot13_8cmRensouhouPersonalEffect = function(_mpb) {
            var _mpc = null,
                _mpd = new _mpa.SlotItemEffectModel(),
                _mpe = false,
                _mpf = new _mpa.SlotItemEffectModel(),
                _mpg = 0,
                _mph = _mpb.getCountryName(),
                _mpi = _mpb.get_slotnums(534),
                _mpj = _mpb.get_slotnums(535);
            if ('フランス' == _mph && (_mpf.houg += 2, _mpf.houm += 1, 129 == _mpb.ctype && (_mpf.houm += 1), 967 == _mpb.ship_id && _mpj >= 1 && (_mpf.houg += 1), _mpe = true, _mpg = 1), 0 == _mpe) return _mpd;
            var _mpk = _mpi + _mpj;
            if (_mpd.add(_mpf.multiply(_mpk)), 0 == _mpg) return _mpd;
            _mpb.haveSlotLevelNumOver(534);
            var _mpl = _mpb.haveSlotLevelNumOver(535),
                _mpm = _mpb.getTotalCountWithOverLeveledItem([534, 535]);
            return 1 == _mpg && (_mpm[2] >= 1 && (_mpd.houm += 1 * _mpm[2]), _mpm[4] >= 1 && (_mpd.houg += 1 * _mpm[4]), _mpm[6] >= 1 && (_mpd.houm += 1 * _mpm[6]), _mpl[7] >= 1 && (_mpd.houg += 1 * _mpl[7]), _mpm[8] >= 1 && (_mpd.houg += 1 * _mpm[8]), _mpl[9] >= 1 && (_mpd.houm += 1 * _mpl[9]), _mpm[10] >= 1 && (_mpd.houg += 1 * _mpm[10])), _mpd;
        };
    },
    21713: (_mpn, _mpo, _mpp) => {
        'use strict';
        var _mpq = null;
        defineModule(_mpo);
        Object.defineProperty(_mpo, '__esModule', {
            'value': true
        }), _mpo.getSlot143PersonalEffect = void 0;
        var _mpr = _mpp(74496);
        _mpo.getSlot143PersonalEffect = function(_mps) {
            var _mpt = null,
                _mpu = new _mpr.SlotItemEffectModel();
            return 'あかぎ' == _mps.yomi ? _mpu.houg = 3 : 'かが' == _mps.yomi || 'しょうかく' == _mps.yomi ? _mpu.houg = 2 : ('ずいかく' == _mps.yomi || 'りゅうじょう' == _mps.yomi) && (_mpu.houg = 1), _mpu;
        };
    },
    59823: (_mpv, _mpw, _mpx) => {
        'use strict';
        var _mpy = null;
        defineModule(_mpw);
        Object.defineProperty(_mpw, '__esModule', {
            'value': true
        }), _mpw.getSlot144PersonalEffect = void 0;
        var _mpz = _mpx(74496);
        _mpw.getSlot144PersonalEffect = function(_mq0) {
            var _mq1 = null,
                _mq2 = new _mpz.SlotItemEffectModel();
            return 'あかぎ' == _mq0.yomi ? _mq2.houg = 3 : 'かが' == _mq0.yomi ? _mq2.houg = 2 : 'しょうかく' == _mq0.yomi ? (_mq2.houg = 2, 461 != _mq0.ship_id && 466 != _mq0.ship_id || (_mq2.houg += 2)) : 'ずいかく' == _mq0.yomi ? (_mq2.houg = 1, 462 != _mq0.ship_id && 467 != _mq0.ship_id || (_mq2.houg += 1)) : 'りゅうじょう' == _mq0.yomi && (_mq2.houg = 1), _mq2;
        };
    },
    57440: (_mq3, _mq4, _mq5) => {
        'use strict';
        var _mq6 = null;
        defineModule(_mq4);
        Object.defineProperty(_mq4, '__esModule', {
            'value': true
        }), _mq4.getSlot149PersonalEffect = void 0;
        var _mq7 = _mq5(74496);
        _mq4.getSlot149PersonalEffect = function(_mq8) {
            var _mq9 = null,
                _mqa = new _mq7.SlotItemEffectModel(),
                _mqb = new _mq7.SlotItemEffectModel(),
                _mqc = false;
            return 488 == _mq8.ship_id || 141 == _mq8.ship_id || 160 == _mq8.ship_id || 622 == _mq8.ship_id || 623 == _mq8.ship_id || 656 == _mq8.ship_id || 961 == _mq8.ship_id ? (_mqb.tais = 1, _mqb.kaih = 3, _mqc = true) : 624 == _mq8.ship_id ? (_mqb.tais = 3, _mqb.kaih = 5, _mqc = true) : 662 == _mq8.ship_id && (_mqb.tais = 2, _mqb.kaih = 4, _mqc = true), 54 == _mq8.ctype && (_mqb.tais = 1, _mqb.kaih = 2, _mqc = true), 0 == _mqc ? _mqa : _mqa = _mqb.multiply(1);
        };
    },
    29493: (_mqd, _mqe, _mqf) => {
        'use strict';
        var _mqg = null;
        defineModule(_mqe);
        Object.defineProperty(_mqe, '__esModule', {
            'value': true
        }), _mqe.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mqh = _mqf(74496);
        _mqe.getSlot14inch45CaliberGunPersonalEffect = function(_mqi) {
            var _mqj = null,
                _mqk, _mql, _mqm, _mqn = new _mqh.SlotItemEffectModel(),
                _mqo = false,
                _mqp = new _mqh.SlotItemEffectModel(),
                _mqq = {
                    507: 507,
                    508: 507
                },
                _mqr = _mqi.get_slotnums(507),
                _mqs = _mqi.get_slotnums(508),
                _mqt = _mqr + _mqs,
                _mqu = _mqi.getCountryName(),
                _mqv = _mqi.getUSSWaterRaderDict();
            if (125 == _mqi.ctype && (_mqp.houg += 1, _mqp.kaih += 1, _mqp.houm += 1, _mqo = true, _mqr >= 1 && _mqs >= 1 && (_mqn.houg += 1, _mqn.houm += 1)), 'アメリカ' == _mqu && _mqi.stype >= 8 && _mqi.stype <= 10) {
                _mqp.houg += 2, _mqp.kaih += 1, _mqp.houm += 1, _mqo = true;
                for (var _mqw = 0, _mqx = 0, _mqy = _mqi.have_slot_ids(); _mqx < _mqy.length; _mqx++) {
                    var _mqz = _mqy[_mqx];
                    _mqv[Number(_mqz)] && (_mqw += _mqi.get_slotnums(parseInt(_mqz)));
                }
                _mqw >= 1 && (_mqn.houg += 1, _mqn.kaih += 1, _mqn.houm += 2), _mqr >= 1 && _mqs >= 1 && (_mqn.houg += 1, _mqn.houm += 1, _mqn.kaih += 2);
            }
            else 6 != _mqi.ctype && 26 != _mqi.ctype && 2 != _mqi.ctype && 'イギリス' != _mqu || (_mqn.kaih += 1, _mqn.houm += 1, _mqr >= 1 && _mqs >= 1 && (_mqn.houg += 1, _mqn.houm += 1, _mqn.kaih += 1));
            _mqo && _mqn.add(_mqp.multiply(_mqt));
            for (var _mr0 = {}, _mr1 = {}, _mr2 = {}, _mr3 = function(_mr4) {
                    var _mr5 = null,
                        _mr6 = Number(_mr4),
                        _mr7 = _mqq[_mr6];
                    _mr0[_mr7] = null !== (_mqk = _mr0[_mr7]) && void 0 !== _mqk ? _mqk : 0, _mr1[_mr7] = null !== (_mql = _mr1[_mr7]) && void 0 !== _mql ? _mql : 0, _mr2[_mr7] = null !== (_mqm = _mr2[_mr7]) && void 0 !== _mqm ? _mqm : 0, _mqi.get_each_level_nums(_mr6).forEach(function(_mr8, _mr9) {
                        _mr9 >= 3 && (_mr0[_mr7] += _mr8), _mr9 >= 6 && (_mr1[_mr7] += _mr8), _mr9 >= 9 && (_mr2[_mr7] += _mr8);
                    });
                }, _mra = 0, _mrb = Object.keys(_mqq); _mra < _mrb.length; _mra++) {
                _mr3(_mrb[_mra]);
            }
            return _mr0[507] >= 1 && (_mqn.houg += 1 * _mr0[507]), _mr1[507] >= 1 && (_mqn.souk += 1 * _mr1[507]), _mr2[507] >= 1 && (_mqn.houm += 1 * _mr2[507]), _mqn;
        };
    },
    66985: (_mrc, _mrd, _mre) => {
        'use strict';
        var _mrf = null;
        defineModule(_mrd);
        Object.defineProperty(_mrd, '__esModule', {
            'value': true
        }), _mrd.getSlot15PersonalEffect = void 0;
        var _mrg = _mre(74496);
        _mrd.getSlot15PersonalEffect = function(_mrh) {
            var _mri = null,
                _mrj = new _mrg.SlotItemEffectModel(),
                _mrk = false;
            if ((566 == _mrh.ship_id || 567 == _mrh.ship_id || 568 == _mrh.ship_id || 648 == _mrh.ship_id || 651 == _mrh.ship_id || 656 == _mrh.ship_id || 670 == _mrh.ship_id || 915 == _mrh.ship_id || 951 == _mrh.ship_id || 'たけ' == _mrh.yomi) && (_mrk = true), 0 == _mrk) return _mrj;
            var _mrl = _mrh.get_slotnums(15);
            return 30 == _mrh.ctype && (1 == _mrl ? _mrj.raig = 2 : _mrl >= 2 && (_mrj.raig = 4)), 'たけ' == _mrh.yomi && (_mrj.raig += 5, _mrj.kaih += 1), _mrj;
        };
    },
    70332: (_mrm, _mrn, _mro) => {
        'use strict';
        var _mrp = null;
        defineModule(_mrn);
        Object.defineProperty(_mrn, '__esModule', {
            'value': true
        }), _mrn.getSlot15_2cmSanrensouSyuhouPersonalEffect = void 0;
        var _mrq = _mro(74496);
        _mrn.getSlot15_2cmSanrensouSyuhouPersonalEffect = function(_mrr) {
            var _mrs = null,
                _mrt = new _mrq.SlotItemEffectModel(),
                _mru = false,
                _mrv = new _mrq.SlotItemEffectModel(),
                _mrw = 0,
                _mrx = _mrr.getCountryName(),
                _mry = _mrr.get_slotnums(536),
                _mrz = _mrr.get_slotnums(537);
            if ('フランス' == _mrx && (_mrv.houg += 2, _mrv.houm += 1, 128 == _mrr.ctype && (_mrv.houm += 1), 970 == _mrr.ship_id && _mrz >= 1 && (_mrv.houg += 1, _mrv.kaih += 2, _mrv.houm += 1), _mru = true, _mrw = 1), 0 == _mru) return _mrt;
            var _ms0 = _mry + _mrz;
            if (_mrt.add(_mrv.multiply(_ms0)), 0 == _mrw) return _mrt;
            _mrr.haveSlotLevelNumOver(536);
            var _ms1 = _mrr.haveSlotLevelNumOver(537),
                _ms2 = _mrr.getTotalCountWithOverLeveledItem([536, 537]),
                _ms3 = _mrr.get_slotnums(471) + _mrr.get_slotnums(538),
                _ms4 = _mrr.haveSlotLevelNumOver(538);
            return 1 == _mrw && (_ms2[3] >= 1 && (_mrt.houm += 1 * _ms2[3]), _ms2[4] >= 1 && (_mrt.houg += 1 * _ms2[4]), _ms1[5] >= 1 && (_mrt.kaih += 1 * _ms1[5]), _ms2[6] >= 1 && (_mrt.houm += 1 * _ms2[6]), _ms2[7] >= 1 && (_mrt.houg += 1 * _ms2[7]), _ms1[8] >= 1 && (_mrt.kaih += 1 * _ms1[8]), _ms2[9] >= 1 && (_mrt.houm += 1 * _ms2[9]), _ms2[10] >= 1 && (_mrt.houg += 1 * _ms2[10]), _ms2[1] >= 1 && (_ms3 >= 1 && (970 == _mrr.ship_id && (_mrt.kaih += 1 * _ms3), _mrt.houm += 1 * _ms3), _ms4[7] >= 1 && (_mrt.kaih += 1 * _ms4[7]), _ms4[9] >= 1 && (_mrt.houm += 1 * _ms4[9]))), _mrt;
        };
    },
    79086: (_ms5, _ms6, _ms7) => {
        'use strict';
        var _ms8 = null;
        defineModule(_ms6);
        Object.defineProperty(_ms6, '__esModule', {
            'value': true
        }), _ms6.getSlot165_216PersonalEffect = void 0;
        var _ms9 = _ms7(74496);
        _ms6.getSlot165_216PersonalEffect = function(_msa) {
            var _msb = null,
                _msc = new _ms9.SlotItemEffectModel();
            return 501 != _msa.ship_id && 506 != _msa.ship_id && 502 != _msa.ship_id && 507 != _msa.ship_id || (_msc.tyku += 2, _msc.kaih += 2), _msc;
        };
    },
    88102: (_msd, _mse, _msf) => {
        'use strict';
        var _msg = null;
        defineModule(_mse);
        Object.defineProperty(_mse, '__esModule', {
            'value': true
        }), _mse.getSlot16M1PersonalEffect = void 0;
        var _msh = _msf(74496);
        _mse.getSlot16M1PersonalEffect = function(_msi) {
            var _msj = null,
                _msk = new _msh.SlotItemEffectModel(),
                _msl = new _msh.SlotItemEffectModel();
            67 == _msi.ctype || 78 == _msi.ctype || 82 == _msi.ctype || 88 == _msi.ctype || 108 == _msi.ctype || 112 == _msi.ctype ? (_msl.houg += 2, _msl.souk += 1, 67 == _msi.ctype && (_msl.kaih -= 2)) : 149 == _msi.ship_id || 150 == _msi.ship_id || 151 == _msi.ship_id || 152 == _msi.ship_id ? (_msl.houg += 1, _msl.souk += 1, _msl.kaih -= 3) : 591 == _msi.ship_id || 592 == _msi.ship_id || 694 == _msi.ship_id ? (_msl.houg += 2, _msl.souk += 1, _msl.kaih -= 2) : 593 != _msi.ship_id && 954 != _msi.ship_id || (_msl.houg += 1, _msl.souk += 1, _msl.kaih -= 1);
            var _msm = true;
            if (_msl.exists() || (_msm = false), 0 == _msm) return _msk;
            var _msn = _msi.get_slotnums(298) + _msi.get_slotnums(299) + _msi.get_slotnums(300);
            return _msk = _msl.multiply(_msn);
        };
    },
    29240: (_mso, _msp, _msq) => {
        'use strict';
        var _msr = null;
        defineModule(_msp);
        Object.defineProperty(_msp, '__esModule', {
            'value': true
        }), _msp.getSlot171PersonalEffect = void 0;
        var _mss = _msq(74496);
        _msp.getSlot171PersonalEffect = function(_mst) {
            var _msu = null,
                _msv = new _mss.SlotItemEffectModel(),
                _msw = 0;
            'アメリカ' == _mst.getCountryName() && (_msw = 1), 65 != _mst.ctype && 93 != _mst.ctype && 102 != _mst.ctype && 107 != _mst.ctype && 125 != _mst.ctype || (_msv.houg += 1, _msv.saku += 1, _msw = 2);
            var _msx = _mst.get_each_level_nums(171),
                _msy = 0,
                _msz = 0,
                _mt0 = 0;
            return _msw > 0 && (_msx.map(function(_mt1, _mt2) {
                _mt2 >= 5 && (_msy += _mt1), _mt2 >= 3 && (_msz += _mt1), _mt2 >= 8 && (_mt0 += _mt1);
            }), 1 != _msw && 2 != _msw || (_msx[10] > 0 && (_msv.houg += 1), _msy > 0 && (_msv.kaih += 1)), 2 == _msw && (_msz > 0 && (_msv.saku += 1), _mt0 > 0 && (_msv.saku += 1))), _msv;
        };
    },
    40885: (_mt3, _mt4, _mt5) => {
        'use strict';
        var _mt6 = null;
        defineModule(_mt4);
        Object.defineProperty(_mt4, '__esModule', {
            'value': true
        }), _mt4.getSlot174PersonalEffect = void 0;
        var _mt7 = _mt5(74496);
        _mt4.getSlot174PersonalEffect = function(_mt8) {
            var _mt9 = null,
                _mta = new _mt7.SlotItemEffectModel(),
                _mtb = new _mt7.SlotItemEffectModel();
            if (66 == _mt8.ctype && (_mtb.raig = 1, _mtb.kaih = 2), 591 == _mt8.ship_id || 592 == _mt8.ship_id || 954 == _mt8.ship_id || 694 == _mt8.ship_id ? (_mtb.raig += 6, _mtb.kaih += 3) : 593 == _mt8.ship_id ? (_mtb.raig += 5, _mtb.kaih += 2) : 488 != _mt8.ship_id && 622 != _mt8.ship_id && 623 != _mt8.ship_id && 624 != _mt8.ship_id || (_mtb.houg += 2, _mtb.raig += 4, _mtb.kaih += 4), !_mtb.exists()) return _mta;
            var _mtc = _mt8.get_slotnums(174);
            return _mta = _mtb.multiply(_mtc);
        };
    },
    19614: (_mtd, _mte, _mtf) => {
        'use strict';
        var _mtg = null;
        defineModule(_mte);
        Object.defineProperty(_mte, '__esModule', {
            'value': true
        }), _mte.getSlot179PersonalEffect = void 0;
        var _mth = _mtf(74496);
        _mte.getSlot179PersonalEffect = function(_mti) {
            var _mtj = null,
                _mtk = new _mth.SlotItemEffectModel(),
                _mtl = new _mth.SlotItemEffectModel();
            if (54 == _mti.ctype && (_mtl.raig = 1), !_mtl.exists()) return _mtk;
            var _mtm = _mti.get_slotnums(179);
            return _mtk = _mtl.multiply(_mtm);
        };
    },
    87220: (_mtn, _mto, _mtp) => {
        'use strict';
        var _mtq = null;
        defineModule(_mto);
        Object.defineProperty(_mto, '__esModule', {
            'value': true
        }), _mto.getSlot184PersonalEffect = void 0;
        var _mtr = _mtp(74496);
        _mto.getSlot184PersonalEffect = function(_mts) {
            var _mtt = null,
                _mtu = new _mtr.SlotItemEffectModel(),
                _mtv = new _mtr.SlotItemEffectModel();
            if (68 == _mts.ctype && (_mtv.houg += 1, _mtv.tyku += 2, _mtv.kaih += 3), !_mtv.exists()) return _mtu;
            var _mtw = _mts.get_slotnums(184);
            return _mtu = _mtv.multiply(_mtw);
        };
    },
    81367: (_mtx, _mty, _mtz) => {
        'use strict';
        var _mu0 = null;
        defineModule(_mty);
        Object.defineProperty(_mty, '__esModule', {
            'value': true
        }), _mty.getSlot188PersonalEffect = void 0;
        var _mu1 = _mtz(74496);
        _mty.getSlot188PersonalEffect = function(_mu2) {
            var _mu3 = null,
                _mu4 = new _mu1.SlotItemEffectModel(),
                _mu5 = new _mu1.SlotItemEffectModel();
            if (68 == _mu2.ctype && (_mu5.houg += 3, _mu5.tyku += 1, _mu5.kaih += 1), !_mu5.exists()) return _mu4;
            var _mu6 = _mu2.get_slotnums(188);
            return _mu4 = _mu5.multiply(_mu6);
        };
    },
    13052: (_mu7, _mu8, _mu9) => {
        'use strict';
        var _mua = null;
        defineModule(_mu8);
        Object.defineProperty(_mu8, '__esModule', {
            'value': true
        }), _mu8.getSlot189PersonalEffect = void 0;
        var _mub = _mu9(74496);
        _mu8.getSlot189PersonalEffect = function(_muc) {
            var _mud = null,
                _mue = new _mub.SlotItemEffectModel(),
                _muf = new _mub.SlotItemEffectModel();
            if (68 != _muc.ctype && 63 != _muc.ctype || (_muf.tyku += 1, _muf.kaih += 2), !_muf.exists()) return _mue;
            var _mug = _muc.get_slotnums(189);
            return _mue = _muf.multiply(_mug);
        };
    },
    66904: (_muh, _mui, _muj) => {
        'use strict';
        var _muk = null;
        defineModule(_mui);
        Object.defineProperty(_mui, '__esModule', {
            'value': true
        }), _mui.getSlot18_52_PersonalEffect = void 0;
        var _mul = _muj(74496);
        _mui.getSlot18_52_PersonalEffect = function(_mum) {
            var _mun = null,
                _muo = new _mul.SlotItemEffectModel(),
                _mup = new _mul.SlotItemEffectModel();
            if (277 == _mum.ship_id || 278 == _mum.ship_id || 156 == _mum.ship_id ? _mup.houg = 1 : 594 == _mum.ship_id || 698 == _mum.ship_id || 646 == _mum.ship_id ? (_mup.houg = 1, _mup.kaih = 1) : 599 != _mum.ship_id && 610 != _mum.ship_id || (_mup.houg = 2, _mup.kaih = 1), !_mup.exists()) return _muo;
            var _muq = _mum.get_slotnums(18) + _mum.get_slotnums(52);
            return _muo = _mup.multiply(_muq);
        };
    },
    94968: (_mur, _mus, _mut) => {
        'use strict';
        var _muu = null;
        defineModule(_mus);
        Object.defineProperty(_mus, '__esModule', {
            'value': true
        }), _mus.getSlot194PersonalEffect = void 0;
        var _muv = _mut(74496);
        _mus.getSlot194PersonalEffect = function(_muw) {
            var _mux = null,
                _muy = new _muv.SlotItemEffectModel(),
                _muz = new _muv.SlotItemEffectModel();
            if (70 == _muw.ctype ? (_muz.houg += 3, _muz.kaih += 2, _muz.saku += 2) : 72 != _muw.ctype && 62 != _muw.ctype || (_muz.kaih += 1, _muz.saku += 2), 392 != _muw.ship_id && 969 != _muw.ship_id || (_muz.houg += 1, _muz.kaih += 2, _muz.saku += 2), !_muz.exists()) return _muy;
            var _mv0 = _muw.get_slotnums(194);
            return _muy = _muz.multiply(_mv0);
        };
    },
    94781: (_mv1, _mv2, _mv3) => {
        'use strict';
        var _mv4 = null;
        defineModule(_mv2);
        Object.defineProperty(_mv2, '__esModule', {
            'value': true
        }), _mv2.getSlot195PersonalEffect = void 0;
        var _mv5 = _mv3(74496);
        _mv2.getSlot195PersonalEffect = function(_mv6) {
            var _mv7 = null,
                _mv8 = new _mv5.SlotItemEffectModel(),
                _mv9 = false,
                _mva = new _mv5.SlotItemEffectModel();
            if ('アメリカ' == _mv6.getCountryName() && (_mva.houg += 1, _mv9 = true), 0 == _mv9) return _mv8;
            var _mvb = _mv6.get_slotnums(195);
            return _mv8.add(_mva.multiply(_mvb));
        };
    },
    98137: (_mvc, _mvd, _mve) => {
        'use strict';
        var _mvf = null;
        defineModule(_mvd);
        Object.defineProperty(_mvd, '__esModule', {
            'value': true
        }), _mvd.getSlot19PersonalEffect = void 0;
        var _mvg = _mve(74496);
        _mvd.getSlot19PersonalEffect = function(_mvh) {
            var _mvi = null,
                _mvj = new _mvg.SlotItemEffectModel(),
                _mvk = new _mvg.SlotItemEffectModel();
            if ('ほうしょう' == _mvh.yomi && (_mvk.houg = 2, _mvk.kaih = 2, _mvk.tais = 2, _mvk.tyku = 2), 75 != _mvh.ctype && 76 != _mvh.ctype || (_mvk.houg = 2, _mvk.tais = 3), 7 == _mvh.stype && (_mvk.tyku += 1, _mvk.kaih += 1), 894 != _mvh.ship_id && 899 != _mvh.ship_id || (_mvk.houg += 1, _mvk.kaih += 1, _mvk.tais += 1, _mvk.tyku += 1), !_mvk.exists()) return _mvj;
            var _mvl = _mvh.get_slotnums(19);
            return _mvj = _mvk.multiply(_mvl);
        };
    },
    48658: (_mvm, _mvn, _mvo) => {
        'use strict';
        var _mvp = null;
        defineModule(_mvn);
        Object.defineProperty(_mvn, '__esModule', {
            'value': true
        }), _mvn.getSlot204PersonalEffect = void 0;
        var _mvq = _mvo(74496);
        _mvn.getSlot204PersonalEffect = function(_mvr) {
            var _mvs = null,
                _mvt = new _mvq.SlotItemEffectModel();
            if (591 != _mvr.ship_id && 592 != _mvr.ship_id && 593 != _mvr.ship_id && 954 != _mvr.ship_id && 694 != _mvr.ship_id) return _mvt;
            _mvt.souk = _mvt.souk + 1, _mvt.raig = _mvt.raig + 1;
            for (var _mvu = _mvr.get_each_level_nums(204), _mvv = 0, _mvw = 0; _mvw <= 10; _mvw++) _mvw >= 7 && (_mvv += _mvu[_mvw]);
            return _mvv > 0 && (_mvt.souk = _mvt.souk + 1, 694 == _mvr.ship_id && (_mvt.souk += 1)), _mvu[10] > 0 && (_mvt.raig = _mvt.raig + 1, 694 == _mvr.ship_id && (_mvt.raig += 1)), _mvt;
        };
    },
    2306: (_mvx, _mvy, _mvz) => {
        'use strict';
        var _mw0 = null;
        defineModule(_mvy);
        Object.defineProperty(_mvy, '__esModule', {
            'value': true
        }), _mvy.getSlot217PersonalEffect = void 0;
        var _mw1 = _mvz(74496);
        _mvy.getSlot217PersonalEffect = function(_mw2) {
            var _mw3 = null,
                _mw4 = new _mw1.SlotItemEffectModel(),
                _mw5 = false,
                _mw6 = new _mw1.SlotItemEffectModel();
            if (501 == _mw2.ship_id || 506 == _mw2.ship_id ? (_mw6.houg += 1, _mw6.kaih += 3, _mw6.tyku += 5, _mw5 = true) : 502 != _mw2.ship_id && 507 != _mw2.ship_id || (_mw6.houg += 1, _mw6.kaih += 2, _mw6.tyku += 4, _mw5 = true), 0 == _mw5) return _mw4;
            var _mw7 = _mw2.get_slotnums(217);
            return _mw4.add(_mw6.multiply(_mw7)), _mw4;
        };
    },
    91302: function(_mw8, _mw9, _mwa) {
        'use strict';
        var _mwb = null;
        var _mwc = this && this.__importDefault || function(_mwd) {
            var _mwe = null;
            return _mwd && _mwd.__esModule ? _mwd : {
                'default': _mwd
            };
        };
        defineModule(_mw9);
        Object.defineProperty(_mw9, '__esModule', {
            'value': true
        }), _mw9.getSlot220PersonalEffect = void 0;
        var _mwf = _mwa(74496),
            _mwg = _mwc(_mwa(18622));
        _mw9.getSlot220PersonalEffect = function(_mwh) {
            var _mwi = null,
                _mwj = new _mwf.SlotItemEffectModel(),
                _mwk = false,
                _mwl = new _mwf.SlotItemEffectModel(),
                _mwm = 0,
                _mwn = 0;
            if (662 == _mwh.ship_id || 663 == _mwh.ship_id || 668 == _mwh.ship_id || 501 == _mwh.ship_id || 506 == _mwh.ship_id || 502 == _mwh.ship_id || 507 == _mwh.ship_id ? (_mwl.houg += 1, _mwl.tyku += 3, _mwl.kaih += 2, _mwk = true, _mwm = 1) : 894 != _mwh.ship_id && 899 != _mwh.ship_id || (_mwl.tyku += 2, _mwl.kaih += 2, _mwk = true, _mwm = 1, _mwn = 1), 0 == _mwk) return _mwj;
            var _mwo = _mwh.get_slotnums(220);
            _mwj.add(_mwl.multiply(_mwo));
            for (var _mwp = 0, _mwq = 0, _mwr = _mwh.have_slot_ids(); _mwq < _mwr.length; _mwq++) {
                var _mws = _mwr[_mwq],
                    _mwt = _mwg.default.model.slot.getMst(_mws),
                    _mwu = _mwt.equipType;
                12 != _mwu && 13 != _mwu || (_mwt.sakuteki >= 5 && _mwh.get_slotnums(parseInt(_mws)), _mwt.taiku >= 2 && (_mwp += _mwh.get_slotnums(parseInt(_mws))));
            }
            if (_mwp >= 1 && 1 == _mwm && (_mwj.tyku += 3, _mwj.kaih += 3), 0 == _mwn) return _mwj;
            var _mwv = _mwh.get_each_level_nums(220)[10];
            return 1 == _mwn && _mwv > 0 && (_mwj.houg += 1 * _mwv, _mwj.tyku += 1 * _mwv, _mwj.kaih += 1 * _mwv), _mwj;
        };
    },
    20418: (_mww, _mwx, _mwy) => {
        'use strict';
        var _mwz = null;
        defineModule(_mwx);
        Object.defineProperty(_mwx, '__esModule', {
            'value': true
        }), _mwx.getSlot227PersonalEffect = void 0;
        var _mx0 = _mwy(74496);
        _mwx.getSlot227PersonalEffect = function(_mx1) {
            var _mx2 = null,
                _mx3 = new _mx0.SlotItemEffectModel(),
                _mx4 = _mx1.get_each_level_nums(227),
                _mx5 = 0;
            _mx4.forEach(function(_mx6, _mx7) {
                _mx7 >= 8 && (_mx5 += _mx6);
            }), _mx5 >= 1 && (_mx3.tais += 1 * _mx5);
            var _mx8 = _mx4[10];
            return _mx8 >= 1 && (_mx3.tais += 1 * _mx8), _mx3;
        };
    },
    1906: (_mx9, _mxa, _mxb) => {
        'use strict';
        var _mxc = null;
        defineModule(_mxa);
        Object.defineProperty(_mxa, '__esModule', {
            'value': true
        }), _mxa.getSlot228PersonalEffect = void 0;
        var _mxd = _mxb(74496);
        _mxa.getSlot228PersonalEffect = function(_mxe) {
            var _mxf = null,
                _mxg = new _mxd.SlotItemEffectModel(),
                _mxh = new _mxd.SlotItemEffectModel();
            if ('ほうしょう' == _mxe.yomi && (_mxh.houg = 3, _mxh.kaih = 4, _mxh.tais = 4, _mxh.tyku = 3), 75 != _mxe.ctype && 76 != _mxe.ctype || (_mxh.houg = 2, _mxh.tais = 5, _mxh.tyku = 1, _mxh.kaih = 1), 7 == _mxe.stype && (_mxh.tais += 2, _mxh.tyku += 1, _mxh.kaih += 1), 894 != _mxe.ship_id && 899 != _mxe.ship_id || (_mxh.houg += 1, _mxh.kaih += 2, _mxh.tais += 2, _mxh.tyku += 1), !_mxh.exists()) return _mxg;
            var _mxi = _mxe.get_slotnums(228);
            return _mxg = _mxh.multiply(_mxi);
        };
    },
    61887: function(_mxj, _mxk, _mxl) {
        'use strict';
        var _mxm = null;
        var _mxn = this && this.__importDefault || function(_mxo) {
            var _mxp = null;
            return _mxo && _mxo.__esModule ? _mxo : {
                'default': _mxo
            };
        };
        defineModule(_mxk);
        Object.defineProperty(_mxk, '__esModule', {
            'value': true
        }), _mxk.getSlot229PersonalEffect = void 0;
        var _mxq = _mxl(74496),
            _mxr = _mxn(_mxl(18622));
        _mxk.getSlot229PersonalEffect = function(_mxs) {
            var _mxt = null;
            for (var _mxu = new _mxq.SlotItemEffectModel(), _mxv = 0, _mxw = 0, _mxx = _mxs.have_slots_dict[229]; _mxw < _mxx.length; _mxw++) {
                _mxx[_mxw].level >= 7 && _mxv++;
            }
            var _mxy = _mxv,
                _mxz = 0,
                _my0 = 0,
                _my1 = 0,
                _my2 = _mxs.get_slotnums(229);
            if (622 == _mxs.ship_id || 623 == _mxs.ship_id || 624 == _mxs.ship_id) _mxu.houg += 1 * _my2, _mxu.tyku += 1 * _my2, _mxz = 2;
            else {
                if (656 == _mxs.ship_id) _mxu.houg += 2 * _my2, _mxu.tyku += 3 * _my2, _mxu.tais += 2 * _my2, _mxz = 3;
                else {
                    if (0 == _mxv) return _mxu;
                }
            }
            if (488 == _mxs.ship_id ? (_mxu.tyku += 3 * _mxy, _mxz = 1) : 220 == _mxs.ship_id ? _mxu.tyku += 2 * _mxy : 23 == _mxs.ship_id ? _mxu.tyku += 1 * _mxy : 160 == _mxs.ship_id ? (_mxu.tyku += 2 * _mxy, _mxz = 1) : 224 == _mxs.ship_id ? _mxu.tyku += 1 * _mxy : 487 == _mxs.ship_id ? (_mxu.tyku += 2 * _mxy, _mxz = 1) : 289 == _mxs.ship_id && (_mxu.tyku += 1 * _mxy), (66 == _mxs.ctype || 28 == _mxs.ctype) && (_mxu.houg += 1 * _mxy, _mxu.tyku += 1 * _mxy, _my0 = 1), 1 == _mxs.stype && (_mxu.houg += 1 * _mxy, _mxu.tyku += 1 * _mxy, _my1 = 1), ('ゆら' == _mxs.yomi || 'なか' == _mxs.yomi || 'きぬ' == _mxs.yomi) && (_mxu.houg += 2 * _mxy), 0 == _mxz + _my0 + _my1) return _mxu;
            for (var _my3 = 0, _my4 = 0, _my5 = 0, _my6 = _mxs.have_slot_ids(); _my5 < _my6.length; _my5++) {
                var _my7 = _my6[_my5],
                    _my8 = _mxr.default.model.slot.getMst(_my7),
                    _my9 = _my8.equipType;
                12 != _my9 && 13 != _my9 || (_my8.sakuteki >= 5 && (_my3 += _mxs.get_slotnums(parseInt(_my7))), _my8.taiku >= 2 && (_my4 += _mxs.get_slotnums(parseInt(_my7))));
            }
            return 1 == _mxz ? _my3 > 0 && (_mxu.houg += 3, _mxu.kaih += 2) : 2 == _mxz ? (_my3 > 0 && (_mxu.houg += 1, _mxu.kaih += 1), _my4 > 0 && (_mxu.tyku += 2, _mxu.kaih += 2)) : 3 == _mxz && (_my3 > 0 && (_mxu.houg += 2, _mxu.kaih += 2), _my4 > 0 && (_mxu.tyku += 3, _mxu.kaih += 2)), 1 == _my0 && _my3 > 0 && (_mxu.houg += 2, _mxu.kaih += 3), 1 == _my1 && _my3 > 0 && (_mxu.houg += 1, _mxu.kaih += 4), _mxu;
        };
    },
    55734: (_mya, _myb, _myc) => {
        'use strict';
        var _myd = null;
        defineModule(_myb);
        Object.defineProperty(_myb, '__esModule', {
            'value': true
        }), _myb.getSlot234PersonalEffect = void 0;
        var _mye = _myc(74496);
        _myb.getSlot234PersonalEffect = function(_myf) {
            var _myg = null,
                _myh = new _mye.SlotItemEffectModel(),
                _myi = false,
                _myj = new _mye.SlotItemEffectModel(),
                _myk = _myf.get_slotnums(142) + _myf.get_slotnums(460);
            if (37 == _myf.ctype && (_myj.houg += 1, _myj.tyku += 1, _myj.kaih += 1, _myj.houm += 1, _myk >= 1 && (_myh.tyku += 1, _myh.kaih += 1, _myh.houm += 1), _myi = true), 0 == _myi) return _myh;
            var _myl = _myf.get_slotnums(234);
            return _myh.add(_myj.multiply(_myl)), _myh;
        };
    },
    17562: function(_mym, _myn, _myo) {
        'use strict';
        var _myp = null;
        var _myq = this && this.__importDefault || function(_myr) {
            var _mys = null;
            return _myr && _myr.__esModule ? _myr : {
                'default': _myr
            };
        };
        defineModule(_myn);
        Object.defineProperty(_myn, '__esModule', {
            'value': true
        }), _myn.getSlot235PersonalEffect = void 0;
        var _myt = _myo(74496),
            _myu = _myq(_myo(18622));
        _myn.getSlot235PersonalEffect = function(_myv) {
            var _myw = null,
                _myx = new _myt.SlotItemEffectModel(),
                _myy = false,
                _myz = new _myt.SlotItemEffectModel(),
                _mz0 = 0;
            if (52 != _myv.ctype && 9 != _myv.ctype || (_myz.houg += 2, _myz.tyku += 1, _myy = true), 321 == _myv.ship_id && (_myz.houg += 1, _myz.kaih += 1, _mz0 = 1), 0 == _myy) return _myx;
            var _mz1 = _myv.get_slotnums(235);
            if (_myx.add(_myz.multiply(_mz1)), 0 == _mz0) return _myx;
            for (var _mz2 = 0, _mz3 = 0, _mz4 = 0, _mz5 = _myv.have_slot_ids(); _mz4 < _mz5.length; _mz4++) {
                var _mz6 = _mz5[_mz4],
                    _mz7 = _myu.default.model.slot.getMst(_mz6),
                    _mz8 = _mz7.equipType;
                12 != _mz8 && 13 != _mz8 || (_mz7.sakuteki >= 5 && (_mz2 += _myv.get_slotnums(parseInt(_mz6))), _mz7.taiku >= 2 && (_mz3 += _myv.get_slotnums(parseInt(_mz6))));
            }
            return _mz2 >= 1 && 1 == _mz0 && (_myx.houg += 3, _myx.kaih += 2), _mz3 >= 1 && 1 == _mz0 && (_myx.tyku += 3, _myx.kaih += 3), _myx;
        };
    },
    47970: (_mz9, _mza, _mzb) => {
        'use strict';
        var _mzc = null;
        defineModule(_mza);
        Object.defineProperty(_mza, '__esModule', {
            'value': true
        }), _mza.getSlot237PersonalEffect = void 0;
        var _mzd = _mzb(74496);
        _mza.getSlot237PersonalEffect = function(_mze) {
            var _mzf = null,
                _mzg = new _mzd.SlotItemEffectModel(),
                _mzh = new _mzd.SlotItemEffectModel();
            if (553 == _mze.ship_id) _mzh.houg = 4, _mzh.kaih = 2;
            else {
                if (82 == _mze.ship_id) _mzh.houg = 3, _mzh.kaih = 1;
                else {
                    if (88 == _mze.ship_id) _mzh.houg = 3, _mzh.kaih = 1;
                    else {
                        if (554 == _mze.ship_id) _mzh.houg = 4, _mzh.kaih = 2;
                        else {
                            if (411 == _mze.ship_id) _mzh.houg = 2;
                            else {
                                if (412 != _mze.ship_id) return _mzg;
                                _mzh.houg = 2;
                            }
                        }
                    }
                }
            }
            var _mzi = _mze.get_slotnums(237);
            return _mzg = _mzh.multiply(_mzi);
        };
    },
    14386: (_mzj, _mzk, _mzl) => {
        'use strict';
        var _mzm = null;
        defineModule(_mzk);
        Object.defineProperty(_mzk, '__esModule', {
            'value': true
        }), _mzk.getSlot238_239PersonalEffect = void 0;
        var _mzn = _mzl(74496);
        _mzk.getSlot238_239PersonalEffect = function(_mzo) {
            var _mzp = null,
                _mzq = new _mzn.SlotItemEffectModel();
            return 501 != _mzo.ship_id && 506 != _mzo.ship_id && 502 != _mzo.ship_id && 507 != _mzo.ship_id || (_mzq.kaih += 1, _mzq.raig += 1), _mzq;
        };
    },
    82229: (_mzr, _mzs, _mzt) => {
        'use strict';
        var _mzu = null;
        defineModule(_mzs);
        Object.defineProperty(_mzs, '__esModule', {
            'value': true
        }), _mzs.getSlot242PersonalEffect = void 0;
        var _mzv = _mzt(74496);
        _mzs.getSlot242PersonalEffect = function(_mzw) {
            var _mzx = null,
                _mzy = new _mzv.SlotItemEffectModel(),
                _mzz = false,
                _n00 = new _mzv.SlotItemEffectModel();
            if (78 == _mzw.ctype && (_n00.houg += 2, _n00.kaih += 1, _mzz = true), 'ほうしょう' == _mzw.yomi && (_n00.houg += 1, _mzz = true), 0 == _mzz) return _mzy;
            var _n01 = _mzw.get_slotnums(242);
            return _mzy.add(_n00.multiply(_n01)), _mzy;
        };
    },
    10325: (_n02, _n03, _n04) => {
        'use strict';
        var _n05 = null;
        defineModule(_n03);
        Object.defineProperty(_n03, '__esModule', {
            'value': true
        }), _n03.getSlot243PersonalEffect = void 0;
        var _n06 = _n04(74496);
        _n03.getSlot243PersonalEffect = function(_n07) {
            var _n08 = null,
                _n09 = new _n06.SlotItemEffectModel(),
                _n0a = false,
                _n0b = new _n06.SlotItemEffectModel();
            if (78 == _n07.ctype && (_n0b.houg += 3, _n0b.kaih += 1, _n0a = true), 'ほうしょう' == _n07.yomi && (_n0b.houg += 2, _n0a = true), 0 == _n0a) return _n09;
            var _n0c = _n07.get_slotnums(243);
            return _n09.add(_n0b.multiply(_n0c)), _n09;
        };
    },
    351: (_n0d, _n0e, _n0f) => {
        'use strict';
        var _n0g = null;
        defineModule(_n0e);
        Object.defineProperty(_n0e, '__esModule', {
            'value': true
        }), _n0e.getSlot244PersonalEffect = void 0;
        var _n0h = _n0f(74496);
        _n0e.getSlot244PersonalEffect = function(_n0i) {
            var _n0j = null,
                _n0k = new _n0h.SlotItemEffectModel(),
                _n0l = false,
                _n0m = new _n0h.SlotItemEffectModel(),
                _n0n = 0;
            if (78 == _n0i.ctype && (_n0m.houg += 4, _n0m.kaih += 2, _n0l = true, _n0n = 1), 'ほうしょう' == _n0i.yomi && (_n0m.houg += 3, _n0l = true, _n0n = 2), 0 == _n0l) return _n0k;
            var _n0o = _n0i.get_slotnums(244);
            if (_n0k.add(_n0m.multiply(_n0o)), 0 == _n0n) return _n0k;
            var _n0p = _n0i.get_each_level_over_nums([244]).slot[244];
            return 1 == _n0n ? (_n0p[3] >= 1 && (_n0k.houg += 1 * _n0p[3]), _n0p[5] >= 1 && (_n0k.houm += 1 * _n0p[5]), _n0p[7] >= 1 && (_n0k.houg += 1 * _n0p[7]), _n0p[8] >= 1 && (_n0k.kaih += 1 * _n0p[8]), _n0p[9] >= 1 && (_n0k.houm += 1 * _n0p[9]), _n0p[10] >= 1 && (_n0k.houg += 1 * _n0p[10])) : 2 == _n0n && (_n0p[3] >= 1 && (_n0k.kaih += 1 * _n0p[3]), _n0p[7] >= 1 && (_n0k.houg += 1 * _n0p[7]), _n0p[9] >= 1 && (_n0k.houm += 1 * _n0p[9]), _n0p[10] >= 1 && (_n0k.houg += 1 * _n0p[10])), _n0k;
        };
    },
    61977: (_n0q, _n0r, _n0s) => {
        'use strict';
        var _n0t = null;
        defineModule(_n0r);
        Object.defineProperty(_n0r, '__esModule', {
            'value': true
        }), _n0r.getSlot247PersonalEffect = void 0;
        var _n0u = _n0s(74496);
        _n0r.getSlot247PersonalEffect = function(_n0v) {
            var _n0w = null,
                _n0x = new _n0u.SlotItemEffectModel(),
                _n0y = false,
                _n0z = new _n0u.SlotItemEffectModel(),
                _n10 = 0;
            if ('フランス' == _n0v.getCountryName() && (_n0z.houg += 2, _n0z.houm += 2, _n0y = true, _n10 = 1), 0 == _n0y) return _n0x;
            var _n11 = _n0v.get_slotnums(247);
            if (_n0x.add(_n0z.multiply(_n11)), 0 == _n10) return _n0x;
            var _n12 = _n0v.get_each_level_nums(247),
                _n13 = 0,
                _n14 = 0;
            _n10 > 0 && _n12.forEach(function(_n15, _n16) {
                _n16 >= 4 && (_n13 += _n15), _n16 >= 8 && (_n14 += _n15);
            });
            var _n17 = _n12[10];
            return 1 == _n10 && (_n13 >= 1 && (_n0x.houg += 1 * _n13, _n0x.houm += 1 * _n13), _n14 >= 1 && (_n0x.kaih += 1 * _n14, _n0x.houg += 1 * _n14, _n0x.houm += 1 * _n14), _n17 >= 1 && (_n0x.kaih += 1 * _n17, _n0x.houm += 1 * _n17)), _n0x;
        };
    },
    96580: (_n18, _n19, _n1a) => {
        'use strict';
        var _n1b = null;
        defineModule(_n19);
        Object.defineProperty(_n19, '__esModule', {
            'value': true
        }), _n19.getSlot252PersonalEffect = void 0;
        var _n1c = _n1a(74496);
        _n19.getSlot252PersonalEffect = function(_n1d) {
            var _n1e = null,
                _n1f = new _n1c.SlotItemEffectModel(),
                _n1g = (new _n1c.SlotItemEffectModel(), 0);
            if (78 != _n1d.ctype && 112 != _n1d.ctype || (_n1g = 1), 0 == _n1g) return _n1f;
            var _n1h = _n1d.get_each_level_over_nums([252]).slot[252];
            return 1 == _n1g && (_n1h[4] >= 1 && (_n1f.kaih += 1 * _n1h[4]), _n1h[6] >= 1 && (_n1f.houm += 1 * _n1h[6]), _n1h[7] >= 1 && (_n1f.houg += 1 * _n1h[7]), _n1h[8] >= 1 && (_n1f.kaih += 1 * _n1h[8]), _n1h[9] >= 1 && (_n1f.houm += 1 * _n1h[9]), _n1h[10] >= 1 && (_n1f.houg += 1 * _n1h[10])), _n1f;
        };
    },
    31797: function(_n1i, _n1j, _n1k) {
        'use strict';
        var _n1l = null;
        var _n1m = this && this.__importDefault || function(_n1n) {
            var _n1o = null;
            return _n1n && _n1n.__esModule ? _n1n : {
                'default': _n1n
            };
        };
        defineModule(_n1j);
        Object.defineProperty(_n1j, '__esModule', {
            'value': true
        }), _n1j.getSlot266PersonalEffect2 = _n1j.getSlot266PersonalEffect = void 0;
        var _n1p = _n1k(74496),
            _n1q = _n1m(_n1k(18622));
        _n1j.getSlot266PersonalEffect = function(_n1r) {
            var _n1s = null,
                _n1t = new _n1p.SlotItemEffectModel(),
                _n1u = false;
            if (566 != _n1r.ship_id && 567 != _n1r.ship_id && 568 != _n1r.ship_id && 656 != _n1r.ship_id && 670 != _n1r.ship_id && 915 != _n1r.ship_id && 951 != _n1r.ship_id || (_n1u = true), 0 == _n1u) return _n1t;
            var _n1v = _n1r.get_slotnums(266);
            return 30 == _n1r.ctype && (1 == _n1v ? _n1t.houg = 1 : _n1v >= 2 && (_n1t.houg = 3)), _n1t;
        }, _n1j.getSlot266PersonalEffect2 = function(_n1w) {
            var _n1x = null,
                _n1y = new _n1p.SlotItemEffectModel(),
                _n1z = 0,
                _n20 = new _n1p.SlotItemEffectModel();
            if (23 == _n1w.ctype || 18 == _n1w.ctype ? (_n20.houg = 1, _n1z = 1) : 30 == _n1w.ctype && (_n20.houg = 1, _n1z = 2), ('しぐれ' == _n1w.yomi || 'ゆきかぜ' == _n1w.yomi || 'いそかぜ' == _n1w.yomi) && (_n20.kaih = 1), 961 == _n1w.ship_id && (_n20.houg += 1, _n20.houm += 1, _n20.kaih += 1), !_n20.exists()) return _n1y;
            var _n21 = _n1w.get_slotnums(266);
            if (_n1y = _n20.multiply(_n21), 0 == _n1z) return _n1y;
            for (var _n22 = 0, _n23 = 0, _n24 = _n1w.have_slot_ids(); _n23 < _n24.length; _n23++) {
                var _n25 = _n24[_n23],
                    _n26 = _n1q.default.model.slot.getMst(_n25),
                    _n27 = _n26.equipType;
                (12 == _n27 || 13 == _n27) && _n26.sakuteki >= 5 && (_n22 += _n1w.get_slotnums(parseInt(_n25)));
            }
            return _n22 > 0 && (1 == _n1z ? (_n1y.houg += 1, _n1y.kaih += 1, _n1y.raig += 3) : 2 == _n1z && (_n1y.houg += 2, _n1y.kaih += 1, _n1y.raig += 3)), _n1y;
        };
    },
    45738: function(_n28, _n29, _n2a) {
        'use strict';
        var _n2b = null;
        var _n2c = this && this.__importDefault || function(_n2d) {
            var _n2e = null;
            return _n2d && _n2d.__esModule ? _n2d : {
                'default': _n2d
            };
        };
        defineModule(_n29);
        Object.defineProperty(_n29, '__esModule', {
            'value': true
        }), _n29.getSlot267PersonalEffect2 = _n29.getSlot267PersonalEffect = void 0;
        var _n2f = _n2a(74496),
            _n2g = _n2c(_n2a(18622));
        _n29.getSlot267PersonalEffect = function(_n2h) {
            var _n2i = null,
                _n2j = new _n2f.SlotItemEffectModel(),
                _n2k = 0,
                _n2l = 0;
            if (38 == _n2h.ctype || 22 == _n2h.ctype) _n2k = 2, _n2l = 1;
            else {
                if (30 != _n2h.ctype) return _n2j;
                _n2k = 1, _n2l = 1;
            }
            var _n2m = _n2h.get_slotnums(267) + _n2h.get_slotnums(366);
            return _n2j.houg = _n2k * _n2m, _n2j.kaih = _n2l * _n2m, _n2j;
        }, _n29.getSlot267PersonalEffect2 = function(_n2n) {
            var _n2o = null,
                _n2p = new _n2f.SlotItemEffectModel(),
                _n2q = _n2n.get_slotnums(267),
                _n2r = _n2n.get_slotnums(366),
                _n2s = _n2q + _n2r;
            if (566 != _n2n.ship_id && 567 != _n2n.ship_id && 568 != _n2n.ship_id && 656 != _n2n.ship_id && 670 != _n2n.ship_id && 915 != _n2n.ship_id && 951 != _n2n.ship_id || (_n2q > 0 && (_n2p.houg += 1), 1 == _n2r ? (_n2p.houg += 1, _n2p.tyku += 2) : _n2r >= 2 && (_n2p.houg += 2, _n2p.tyku += 4)), 38 != _n2n.ctype && 229 != _n2n.ship_id && [648, 961].indexOf(_n2n.ship_id) < 0) return _n2p;
            var _n2t = false,
                _n2u = false,
                _n2v = false,
                _n2w = false,
                _n2x = false,
                _n2y = false,
                _n2z = false,
                _n30 = false,
                _n31 = false,
                _n32 = false,
                _n33 = false,
                _n34 = 0,
                _n35 = 0,
                _n36 = 0;
            543 == _n2n.ship_id ? (_n2p.houg = 1 * _n2s, _n2u = true) : 229 == _n2n.ship_id ? _n2v = true : 542 == _n2n.ship_id ? (_n2p.houg = 1 * _n2s, _n2w = true) : 563 == _n2n.ship_id ? (_n2p.houg = 1 * _n2s, _n2x = true) : 564 == _n2n.ship_id ? (_n2p.houg = 1 * _n2s, _n2y = true) : 578 == _n2n.ship_id ? (_n2p.houg = 1 * _n2s, _n2z = true) : 569 == _n2n.ship_id ? (_n2p.houg = 1 * _n2s, _n30 = true) : 649 == _n2n.ship_id ? (_n2p.houg = 2 * _n2s, _n32 = true) : 955 == _n2n.ship_id || 960 == _n2n.ship_id ? (_n2p.houg = 2 * _n2s, _n33 = true) : 648 == _n2n.ship_id ? (_n2p.houg = 2 * _n2s, _n31 = true, _n34 = 1, _n35 = 1, _n36 = 1) : 961 == _n2n.ship_id && (_n2p.houg = 2 * _n2s, _n2t = true, _n34 = 1, _n35 = 1, _n36 = 1);
            for (var _n37 = 0, _n38 = 0, _n39 = 0, _n3a = _n2n.have_slot_ids(); _n39 < _n3a.length; _n39++) {
                var _n3b = _n3a[_n39],
                    _n3c = _n2g.default.model.slot.getMst(_n3b),
                    _n3d = _n3c.equipType;
                12 != _n3d && 13 != _n3d || (_n3c.sakuteki >= 5 && (_n37 += _n2n.get_slotnums(parseInt(_n3b))), _n3c.taiku >= 2 && (_n38 += _n2n.get_slotnums(parseInt(_n3b))));
            }
            if (_n37 > 0 && _n2q > 0 && ((38 == _n2n.ctype || _n31) && (_n2p.houg += 2, _n2p.raig += 3, _n2p.kaih += 1, 955 == _n2n.ship_id ? _n2p.raig -= 1 : 960 == _n2n.ship_id && (_n2p.raig -= 2)), (_n2w || _n2u || _n2v || _n2x || _n2y || _n2z || _n30 || _n31 || _n32 || _n33) && (_n2p.houg += 1, _n2p.raig += 3, _n2p.kaih += 2)), _n2r > 0 && (_n2w || _n2u || _n2x || _n2y || _n2z || _n2v || _n30 || _n31 || _n32 || _n2t || _n33)) {
                1 == _n2r ? (_n2p.tyku += 3, _n2p.houg += 1, _n2p.houm += 1) : _n2r >= 2 && (_n2p.tyku += 5, _n2p.houg += 3, _n2p.houm += 1, 955 == _n2n.ship_id && (_n2p.houg += 1)), (_n30 || _n31) && (_n2p.houg += 1, _n2p.tyku += 2), _n37 > 0 && (_n2p.houg += 2, _n2p.kaih += 2, _n2p.raig += 4, _n2p.houm += 2, 960 == _n2n.ship_id && (_n2p.raig -= 1, _n2p.houg += 1)), _n38 > 0 && (_n2p.houg += 1, _n2p.kaih += 3, _n2p.tyku += 5, _n2p.houm += 1);
                var _n3e = _n2n.get_each_level_nums(366),
                    _n3f = 0,
                    _n3g = 0;
                _n3e.forEach(function(_n3h, _n3i) {
                    _n3i >= 5 && (_n3f += _n3h), _n3i >= 8 && (_n3g += _n3h);
                }), _n3f >= 1 && (_n2p.houm += 1 * _n3f), _n3g >= 1 && (_n2p.houg += 1 * _n3g);
                var _n3j = _n3e[10];
                _n3j >= 1 && (_n2p.houm += 1 * _n3j);
            }
            var _n3k = _n2n.get_slotnums(129),
                _n3l = _n2n.get_slotnums(74),
                _n3m = _n2n.get_slotnums(412);
            return _n34 > 0 && _n3k > 0 && 1 == _n34 && (_n2p.houg += 2, _n2p.kaih += 3, _n2p.tyku += 2), _n36 > 0 && _n3m > 0 && 1 == _n36 && (_n2p.houg += 2, _n2p.kaih += 3, _n2p.tyku += 2), _n35 > 0 && _n3l > 0 && 1 == _n35 && (_n2p.houg += 3, _n2p.kaih -= 3), _n2p;
        };
    },
    23934: (_n3n, _n3o, _n3p) => {
        'use strict';
        var _n3q = null;
        defineModule(_n3o);
        Object.defineProperty(_n3o, '__esModule', {
            'value': true
        }), _n3o.getSlot271PersonalEffect = void 0;
        var _n3r = _n3p(74496);
        _n3o.getSlot271PersonalEffect = function(_n3s) {
            var _n3t = null,
                _n3u = new _n3r.SlotItemEffectModel(),
                _n3v = 0;
            if (508 != _n3s.ship_id && 509 != _n3s.ship_id && 888 != _n3s.ship_id && 883 != _n3s.ship_id || (_n3v = 1), 0 == _n3v) return _n3u;
            var _n3w = _n3s.get_each_level_nums(271),
                _n3x = 0,
                _n3y = 0,
                _n3z = 0,
                _n40 = _n3w[10];
            return _n3v > 0 && _n3w.forEach(function(_n41, _n42) {
                _n42 >= 4 && (_n3x += _n41), _n42 >= 6 && (_n3y += _n41), _n42 >= 8 && (_n3z += _n41);
            }), 1 == _n3v && (_n3x >= 1 && (_n3u.houg += 1 * _n3x), _n3y >= 1 && (_n3u.tyku += 2 * _n3y), _n3z >= 1 && (_n3u.kaih += 2 * _n3z), _n40 >= 1 && (_n3u.houg += 1 * _n40)), _n3u;
        };
    },
    17712: function(_n43, _n44, _n45) {
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
        }), _n44.getSlot275PersonalEffect = void 0;
        var _n4a = _n45(74496),
            _n4b = _n47(_n45(18622));
        _n44.getSlot275PersonalEffect = function(_n4c) {
            var _n4d = null,
                _n4e = new _n4a.SlotItemEffectModel(),
                _n4f = false,
                _n4g = new _n4a.SlotItemEffectModel(),
                _n4h = 0,
                _n4i = 0;
            if (894 != _n4c.ship_id && 899 != _n4c.ship_id || (_n4g.houg += 1, _n4g.tyku += 3, _n4g.kaih += 2, _n4f = true, _n4i = 1, _n4h = 1), 0 == _n4f) return _n4e;
            var _n4j = _n4c.get_slotnums(275);
            _n4e.add(_n4g.multiply(_n4j));
            var _n4k = 0;
            if (_n4h > 0)
                for (var _n4l = 0, _n4m = _n4c.have_slot_ids(); _n4l < _n4m.length; _n4l++) {
                    var _n4n = _n4m[_n4l],
                        _n4o = _n4b.default.model.slot.getMst(_n4n),
                        _n4p = _n4o.equipType;
                    12 != _n4p && 13 != _n4p || (_n4o.sakuteki >= 5 && _n4c.get_slotnums(parseInt(_n4n)), _n4o.taiku >= 2 && (_n4k += _n4c.get_slotnums(parseInt(_n4n))));
                }
            if (1 == _n4h && _n4k > 0 && (_n4e.tyku += 3, _n4e.kaih += 3), 0 == _n4i) return _n4e;
            var _n4q = _n4c.get_each_level_nums(275),
                _n4r = 0,
                _n4s = _n4q[10];
            return _n4i > 0 && _n4q.forEach(function(_n4t, _n4u) {
                _n4u >= 7 && (_n4r += _n4t);
            }), 1 == _n4i && (_n4r > 0 && (_n4e.tyku += 1 * _n4r, _n4e.kaih += 1 * _n4r), _n4s > 0 && (_n4e.houg += 1 * _n4s, _n4e.tyku += 1 * _n4s, _n4e.houm += 1 * _n4s)), _n4e;
        };
    },
    93733: (_n4v, _n4w, _n4x) => {
        'use strict';
        var _n4y = null;
        defineModule(_n4w);
        Object.defineProperty(_n4w, '__esModule', {
            'value': true
        }), _n4w.getSlot277PersonalEffect = void 0;
        var _n4z = _n4x(74496);
        _n4w.getSlot277PersonalEffect = function(_n50) {
            var _n51 = null,
                _n52 = new _n4z.SlotItemEffectModel(),
                _n53 = false,
                _n54 = new _n4z.SlotItemEffectModel();
            if ('アメリカ' != _n50.getCountryName() && 67 != _n50.ctype && 78 != _n50.ctype && 82 != _n50.ctype && 88 != _n50.ctype && 108 != _n50.ctype && 112 != _n50.ctype || (_n54.houg += 1, _n54.kaih += 1, _n53 = true), 83 == _n50.ctype && (_n54.houg += 1, _n54.kaih += 1, _n54.tyku += 1, _n53 = true), 0 == _n53) return _n52;
            var _n55 = _n50.get_slotnums(277);
            return _n52.add(_n54.multiply(_n55)), _n52;
        };
    },
    34718: (_n56, _n57, _n58) => {
        'use strict';
        var _n59 = null;
        defineModule(_n57);
        Object.defineProperty(_n57, '__esModule', {
            'value': true
        }), _n57.getSlot278PersonalEffect = void 0;
        var _n5a = _n58(74496);
        _n57.getSlot278PersonalEffect = function(_n5b) {
            var _n5c = null,
                _n5d = new _n5a.SlotItemEffectModel();
            return 'アメリカ' == _n5b.getCountryName() ? (_n5d.tyku += 1, _n5d.kaih += 3, _n5d.saku += 1) : 67 == _n5b.ctype || 78 == _n5b.ctype || 82 == _n5b.ctype || 88 == _n5b.ctype || 108 == _n5b.ctype || 112 == _n5b.ctype ? (_n5d.tyku += 1, _n5d.kaih += 2) : 96 == _n5b.ctype && (_n5d.tyku += 1, _n5d.kaih += 1), _n5d;
        };
    },
    69245: (_n5e, _n5f, _n5g) => {
        'use strict';
        var _n5h = null;
        defineModule(_n5f);
        Object.defineProperty(_n5f, '__esModule', {
            'value': true
        }), _n5f.getSlot279PersonalEffect = void 0;
        var _n5i = _n5g(74496);
        _n5f.getSlot279PersonalEffect = function(_n5j) {
            var _n5k = null,
                _n5l = new _n5i.SlotItemEffectModel();
            return 'アメリカ' == _n5j.getCountryName() ? (_n5l.houg += 2, _n5l.tyku += 2, _n5l.kaih += 3, _n5l.saku += 2) : 67 == _n5j.ctype || 78 == _n5j.ctype || 82 == _n5j.ctype || 88 == _n5j.ctype || 108 == _n5j.ctype || 112 == _n5j.ctype ? (_n5l.houg += 1, _n5l.tyku += 1, _n5l.kaih += 2, _n5l.saku += 1) : 96 == _n5j.ctype && (_n5l.houg += 1, _n5l.tyku += 1, _n5l.kaih += 1), _n5l;
        };
    },
    18478: (_n5m, _n5n, _n5o) => {
        'use strict';
        var _n5p = null;
        defineModule(_n5n);
        Object.defineProperty(_n5n, '__esModule', {
            'value': true
        }), _n5n.getSlot282PersonalEffect = void 0;
        var _n5q = _n5o(74496);
        _n5n.getSlot282PersonalEffect = function(_n5r) {
            var _n5s = null,
                _n5t = new _n5q.SlotItemEffectModel(),
                _n5u = false,
                _n5v = false;
            147 != _n5r.ship_id && 73 != _n5r.ctype && 81 != _n5r.ctype || (_n5u = true), 'ゆうばり' == _n5r.yomi && (_n5v = true);
            var _n5w = new _n5q.SlotItemEffectModel();
            if ((_n5u || _n5v) && (_n5w.houg += 2, _n5w.souk += 1), !_n5w.exists()) return _n5t;
            var _n5x = _n5r.get_slotnums(282);
            return _n5t = _n5w.multiply(_n5x);
        };
    },
    2899: (_n5y, _n5z, _n60) => {
        'use strict';
        var _n61 = null;
        defineModule(_n5z);
        Object.defineProperty(_n5z, '__esModule', {
            'value': true
        }), _n5z.getSlot283PersonalEffect = void 0;
        var _n62 = _n60(74496);
        _n5z.getSlot283PersonalEffect = function(_n63) {
            var _n64 = null,
                _n65 = new _n62.SlotItemEffectModel(),
                _n66 = false;
            147 != _n63.ship_id && 73 != _n63.ctype && 81 != _n63.ctype || (_n66 = true);
            var _n67 = new _n62.SlotItemEffectModel();
            if (_n66 && (_n67.raig += 3, _n67.houg += 1, _n67.souk += 1), !_n67.exists()) return _n65;
            var _n68 = _n63.get_slotnums(283);
            return _n65 = _n67.multiply(_n68);
        };
    },
    57120: (_n69, _n6a, _n6b) => {
        'use strict';
        var _n6c = null;
        defineModule(_n6a);
        Object.defineProperty(_n6a, '__esModule', {
            'value': true
        }), _n6a.getSlot285PersonalEffect = void 0;
        var _n6d = _n6b(74496);
        _n6a.getSlot285PersonalEffect = function(_n6e) {
            var _n6f = null,
                _n6g = new _n6d.SlotItemEffectModel(),
                _n6h = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_n6e.ship_id) >= 0 && (_n6h = true), 0 == _n6h) return _n6g;
            var _n6i = _n6e.get_each_level_nums(285),
                _n6j = _n6e.get_slotnums(285);
            _n6j > 2 && (_n6j = 2), _n6g.raig = 2 * _n6j, _n6g.kaih = 1 * _n6j;
            var _n6k = _n6i[10];
            1 == _n6k && (_n6g.houg += 1, _n6g.raig += 1), _n6k >= 2 && (_n6g.houg += 2, _n6g.raig += 1), _n6k >= 3 && (_n6g.raig += 3);
            var _n6l = _n6e.get_slotnums(285);
            return 903 == _n6e.ship_id ? (_n6l >= 2 && (_n6g.raig += 2), _n6l >= 3 && (_n6g.raig += 2)) : 908 != _n6e.ship_id && 959 != _n6e.ship_id || (_n6l >= 2 && (_n6g.raig += 1), _n6l >= 3 && (_n6g.raig += 1)), _n6g;
        };
    },
    74985: function(_n6m, _n6n, _n6o) {
        'use strict';
        var _n6p = null;
        var _n6q = this && this.__importDefault || function(_n6r) {
            var _n6s = null;
            return _n6r && _n6r.__esModule ? _n6r : {
                'default': _n6r
            };
        };
        defineModule(_n6n);
        Object.defineProperty(_n6n, '__esModule', {
            'value': true
        }), _n6n.getSlot286PersonalEffect3 = _n6n.getSlot286PersonalEffect2 = _n6n.getSlot286PersonalEffect = void 0;
        var _n6t = _n6o(74496),
            _n6u = _n6q(_n6o(18622));
        _n6n.getSlot286PersonalEffect = function(_n6v) {
            var _n6w = null,
                _n6x = new _n6t.SlotItemEffectModel(),
                _n6y = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975].indexOf(_n6v.ship_id) >= 0 && (_n6y = true), 0 == _n6y) return _n6x;
            var _n6z = _n6v.get_each_level_nums(286),
                _n70 = _n6v.get_slotnums(286);
            _n70 > 2 && (_n70 = 2), _n6x.raig = 2 * _n70, _n6x.kaih = 1 * _n70;
            var _n71 = _n6z[10];
            if (1 == _n71 ? _n6x.houg = _n6x.houg + 1 : _n71 >= 2 && (_n6x.houg = _n6x.houg + 2), 30 == _n6v.ctype || 961 == _n6v.ship_id) {
                var _n72 = _n6z[5] + _n6z[6] + _n6z[7] + _n6z[8] + _n6z[9] + _n6z[10];
                1 == _n72 ? _n6x.raig = _n6x.raig + 1 : _n72 >= 2 && (_n6x.raig = _n6x.raig + 2);
            }
            return _n6x;
        }, _n6n.getSlot286PersonalEffect2 = function(_n73) {
            var _n74 = null,
                _n75 = new _n6t.SlotItemEffectModel(),
                _n76 = false,
                _n77 = 0;
            if ('たけ' == _n73.yomi && (_n76 = true, _n77 = 1), 0 == _n76) return _n75;
            var _n78 = _n73.get_each_level_nums(286),
                _n79 = 0;
            return _n77 > 0 && _n78.forEach(function(_n7a, _n7b) {
                _n7b >= 7 && (_n79 += _n7a);
            }), 'たけ' == _n73.yomi && (_n75.raig += 7, _n75.kaih += 2, _n79 >= 1 && (_n75.raig += 2), _n78[10] >= 1 && (_n75.raig += 2)), _n75;
        }, _n6n.getSlot286PersonalEffect3 = function(_n7c) {
            var _n7d = null,
                _n7e = new _n6t.SlotItemEffectModel(),
                _n7f = false,
                _n7g = new _n6t.SlotItemEffectModel(),
                _n7h = 0;
            if (662 != _n7c.ship_id && 663 != _n7c.ship_id && 668 != _n7c.ship_id || (_n7g.raig += 2, _n7f = true, _n7h = 1), 0 == _n7f) return _n7e;
            var _n7i = _n7c.get_slotnums(286);
            _n7e.add(_n7g.multiply(_n7i));
            for (var _n7j = 0, _n7k = 0, _n7l = _n7c.have_slot_ids(); _n7k < _n7l.length; _n7k++) {
                var _n7m = _n7l[_n7k],
                    _n7n = _n6u.default.model.slot.getMst(_n7m),
                    _n7o = _n7n.equipType;
                12 != _n7o && 13 != _n7o || (_n7n.sakuteki >= 5 && (_n7j += _n7c.get_slotnums(parseInt(_n7m))), _n7n.taiku >= 2 && _n7c.get_slotnums(parseInt(_n7m)));
            }
            return _n7j >= 1 && 1 == _n7h && (_n7e.raig += 3, _n7e.kaih += 2), _n7e;
        };
    },
    9234: (_n7p, _n7q, _n7r) => {
        'use strict';
        var _n7s = null;
        defineModule(_n7q);
        Object.defineProperty(_n7q, '__esModule', {
            'value': true
        }), _n7q.getSlot287PersonalEffect = void 0;
        var _n7t = _n7r(74496);
        _n7q.getSlot287PersonalEffect = function(_n7u) {
            var _n7v = null,
                _n7w = new _n7t.SlotItemEffectModel(),
                _n7x = new _n7t.SlotItemEffectModel(),
                _n7y = false;
            if (488 == _n7u.ship_id || 141 == _n7u.ship_id || 160 == _n7u.ship_id || 624 == _n7u.ship_id || 656 == _n7u.ship_id ? (_n7x.tais = 1, _n7x.kaih = 1, _n7y = true) : 662 != _n7u.ship_id && 961 != _n7u.ship_id || (_n7x.tais = 3, _n7y = true), 0 == _n7y) return _n7w;
            var _n7z = _n7u.get_slotnums(287);
            return _n7w = _n7x.multiply(_n7z);
        };
    },
    30802: (_n80, _n81, _n82) => {
        'use strict';
        var _n83 = null;
        defineModule(_n81);
        Object.defineProperty(_n81, '__esModule', {
            'value': true
        }), _n81.getSlot288PersonalEffect = void 0;
        var _n84 = _n82(74496);
        _n81.getSlot288PersonalEffect = function(_n85) {
            var _n86 = null,
                _n87 = new _n84.SlotItemEffectModel(),
                _n88 = new _n84.SlotItemEffectModel(),
                _n89 = false;
            if (488 == _n85.ship_id || 141 == _n85.ship_id || 160 == _n85.ship_id || 656 == _n85.ship_id ? (_n88.tais = 2, _n88.kaih = 1, _n89 = true) : 624 == _n85.ship_id ? (_n88.houg = 1, _n88.tais = 3, _n88.kaih = 2, _n89 = true) : 662 != _n85.ship_id && 961 != _n85.ship_id || (_n88.tais = 4, _n88.kaih = 1, _n89 = true), 0 == _n89) return _n87;
            var _n8a = _n85.get_slotnums(288);
            return _n87 = _n88.multiply(_n8a);
        };
    },
    97002: function(_n8b, _n8c, _n8d) {
        'use strict';
        var _n8e = null;
        var _n8f = this && this.__importDefault || function(_n8g) {
            var _n8h = null;
            return _n8g && _n8g.__esModule ? _n8g : {
                'default': _n8g
            };
        };
        defineModule(_n8c);
        Object.defineProperty(_n8c, '__esModule', {
            'value': true
        }), _n8c.getSlot289PersonalEffect = void 0;
        var _n8i = _n8d(74496),
            _n8j = _n8f(_n8d(18622));
        _n8c.getSlot289PersonalEffect = function(_n8k) {
            var _n8l = null,
                _n8m = new _n8i.SlotItemEffectModel(),
                _n8n = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3,
                    694: 3
                },
                _n8o = 0,
                _n8p = new _n8i.SlotItemEffectModel();
            if (149 == _n8k.ship_id || 591 == _n8k.ship_id) _n8p.houg = 2, _n8p.tyku = 1, _n8o = 1;
            else {
                if (150 == _n8k.ship_id || 592 == _n8k.ship_id) _n8p.houg = 1;
                else {
                    if (152 == _n8k.ship_id || 694 == _n8k.ship_id) _n8p.houg = 1;
                    else {
                        if (151 != _n8k.ship_id && 593 != _n8k.ship_id && 954 != _n8k.ship_id) return _n8m;
                        _n8p.houg = 2, _n8p.tyku = 2, _n8p.kaih = 2, _n8o = 1;
                    }
                }
            }
            var _n8q = _n8k.get_slotnums(289);
            if (_n8m = _n8p.multiply(_n8q), _n8n[_n8k.ship_id]) {
                var _n8r = _n8k.get_each_level_nums(289),
                    _n8s = new Array();
                _n8r.forEach(function(_n8t, _n8u) {
                    var _n8v = null;
                    for (var _n8w = 1; _n8w <= _n8k.SLOT_LEVEL_MAX; _n8w++) _n8u >= _n8w && (null == _n8s[_n8w] && (_n8s[_n8w] = 0), _n8s[_n8w] += _n8t);
                });
                var _n8x = _n8n[_n8k.ship_id];
                1 == _n8x ? (_n8s[1] >= 1 && (_n8m.kaih += 1 * _n8s[1]), _n8s[3] >= 1 && (_n8m.tyku = _n8m.tyku + 1 * _n8s[3]), _n8s[5] >= 1 && (_n8m.houg = _n8m.houg + 1 * _n8s[5]), _n8s[7] >= 1 && (_n8m.kaih += 1 * _n8s[7]), _n8s[8] >= 1 && (_n8m.tyku += 1 * _n8s[8]), _n8s[9] >= 1 && (_n8m.houg += 1 * _n8s[9]), _n8s[10] >= 1 && (_n8m.kaih += 1 * _n8s[10])) : 2 == _n8x ? (_n8s[4] >= 1 && (_n8m.tyku += 1 * _n8s[4]), _n8s[6] >= 1 && (_n8m.kaih += 1 * _n8s[6]), _n8s[8] >= 1 && (_n8m.houg += 1 * _n8s[8]), _n8s[10] >= 1 && (_n8m.kaih += 1 * _n8s[10])) : 3 == _n8x && (_n8s[7] >= 1 && (_n8m.tyku += 1 * _n8s[7]), _n8s[9] >= 1 && (_n8m.houg += 1 * _n8s[9]), _n8s[10] >= 1 && (_n8m.kaih += 1 * _n8s[10]));
            }
            if (0 == _n8o) return _n8m;
            for (var _n8y = 0, _n8z = 0, _n90 = _n8k.have_slot_ids(); _n8z < _n90.length; _n8z++) {
                var _n91 = _n90[_n8z],
                    _n92 = _n8j.default.model.slot.getMst(_n91),
                    _n93 = _n92.equipType;
                (12 == _n93 || 13 == _n93) && _n92.sakuteki >= 5 && (_n8y += _n8k.get_slotnums(parseInt(_n91)));
            }
            return _n8y > 0 && (_n8m.houg += 2, _n8m.kaih += 2), _n8m;
        };
    },
    16748: function(_n94, _n95, _n96) {
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
        }), _n95.getSlot290PersonalEffect = void 0;
        var _n9b = _n96(74496),
            _n9c = _n98(_n96(18622));
        _n95.getSlot290PersonalEffect = function(_n9d) {
            var _n9e = null,
                _n9f = new _n9b.SlotItemEffectModel(),
                _n9g = 0,
                _n9h = new _n9b.SlotItemEffectModel();
            if (411 == _n9d.ship_id) _n9h.houg = 1;
            else {
                if (412 == _n9d.ship_id) _n9h.houg = 1;
                else {
                    if (82 == _n9d.ship_id) _n9h.houg = 2, _n9h.tyku = 2, _n9h.kaih = 1, _n9g = 1;
                    else {
                        if (553 == _n9d.ship_id) _n9h.houg = 3, _n9h.tyku = 2, _n9h.kaih = 1, _n9h.houm = 3, _n9g = 1;
                        else {
                            if (88 == _n9d.ship_id) _n9h.houg = 2, _n9h.tyku = 2, _n9h.kaih = 1, _n9g = 1;
                            else {
                                if (554 != _n9d.ship_id) return _n9f;
                                _n9h.houg = 3, _n9h.tyku = 2, _n9h.kaih = 2, _n9h.houm = 3, _n9g = 1;
                            }
                        }
                    }
                }
            }
            var _n9i = _n9d.get_slotnums(290);
            if (_n9f = _n9h.multiply(_n9i), 0 == _n9g) return _n9f;
            for (var _n9j = 0, _n9k = 0, _n9l = _n9d.have_slot_ids(); _n9k < _n9l.length; _n9k++) {
                var _n9m = _n9l[_n9k],
                    _n9n = _n9c.default.model.slot.getMst(_n9m),
                    _n9o = _n9n.equipType;
                (12 == _n9o || 13 == _n9o) && _n9n.taiku >= 2 && (_n9j += _n9d.get_slotnums(parseInt(_n9m)));
            }
            return _n9j > 0 && (_n9f.tyku += 2, _n9f.kaih += 3), _n9f;
        };
    },
    53618: (_n9p, _n9q, _n9r) => {
        'use strict';
        var _n9s = null;
        defineModule(_n9q);
        Object.defineProperty(_n9q, '__esModule', {
            'value': true
        }), _n9q.getSlot291PersonalEffect = void 0;
        var _n9t = _n9r(74496);
        _n9q.getSlot291PersonalEffect = function(_n9u) {
            var _n9v = null,
                _n9w = new _n9t.SlotItemEffectModel(),
                _n9x = new _n9t.SlotItemEffectModel();
            if (553 == _n9u.ship_id) _n9x.houg = 6, _n9x.kaih = 1;
            else {
                if (554 != _n9u.ship_id) return _n9w;
                _n9x.houg = 6, _n9x.kaih = 1;
            }
            var _n9y = _n9u.get_slotnums(291);
            return _n9w = _n9x.multiply(_n9y);
        };
    },
    72573: (_n9z, _na0, _na1) => {
        'use strict';
        var _na2 = null;
        defineModule(_na0);
        Object.defineProperty(_na0, '__esModule', {
            'value': true
        }), _na0.getSlot292PersonalEffect = void 0;
        var _na3 = _na1(74496);
        _na0.getSlot292PersonalEffect = function(_na4) {
            var _na5 = null,
                _na6 = new _na3.SlotItemEffectModel(),
                _na7 = new _na3.SlotItemEffectModel();
            if (553 == _na4.ship_id) _na7.houg = 8, _na7.kaih = 2, _na7.tyku = 1;
            else {
                if (554 != _na4.ship_id) return _na6;
                _na7.houg = 8, _na7.kaih = 2, _na7.tyku = 1;
            }
            var _na8 = _na4.get_slotnums(292);
            return _na6 = _na7.multiply(_na8);
        };
    },
    8955: function(_na9, _naa, _nab) {
        'use strict';
        var _nac = null;
        var _nad = this && this.__importDefault || function(_nae) {
            var _naf = null;
            return _nae && _nae.__esModule ? _nae : {
                'default': _nae
            };
        };
        defineModule(_naa);
        Object.defineProperty(_naa, '__esModule', {
            'value': true
        }), _naa.getSlot293PersonalEffect = void 0;
        var _nag = _nab(74496),
            _nah = _nad(_nab(18622));
        _naa.getSlot293PersonalEffect = function(_nai) {
            var _naj = null,
                _nak = new _nag.SlotItemEffectModel(),
                _nal = new _nag.SlotItemEffectModel(),
                _nam = 0;
            if (66 == _nai.ctype || 28 == _nai.ctype) _nal.houg = 2, _nal.tyku = 1, _nal.kaih = 3, _nam = 1;
            else {
                if (74 != _nai.ctype && 77 != _nai.ctype) return _nak;
                _nal.houg = 1, _nal.tyku = 1, _nal.kaih = 2, _nam = 2;
            }
            var _nan = _nai.get_slotnums(293);
            _nak = _nal.multiply(_nan);
            for (var _nao = 0, _nap = 0, _naq = _nai.have_slot_ids(); _nap < _naq.length; _nap++) {
                var _nar = _naq[_nap],
                    _nas = _nah.default.model.slot.getMst(_nar),
                    _nat = _nas.equipType;
                (12 == _nat || 13 == _nat) && _nas.sakuteki >= 5 && (_nao += _nai.get_slotnums(parseInt(_nar)));
            }
            var _nau = _nai.get_slotnums(174);
            return 1 == _nam ? (_nao > 0 && (_nak.houg += 2, _nak.kaih += 3, _nak.raig += 1), 1 == _nau ? (_nak.houg += 2, _nak.raig += 4) : _nau >= 2 && (_nak.houg += 3, _nak.raig += 7)) : 2 == _nam && _nao > 0 && (_nak.houg += 2, _nak.kaih += 3, _nak.tais += 1), _nak;
        };
    },
    98947: function(_nav, _naw, _nax) {
        'use strict';
        var _nay = null;
        var _naz = this && this.__importDefault || function(_nb0) {
            var _nb1 = null;
            return _nb0 && _nb0.__esModule ? _nb0 : {
                'default': _nb0
            };
        };
        defineModule(_naw);
        Object.defineProperty(_naw, '__esModule', {
            'value': true
        }), _naw.getSlot294PersonalEffect = void 0;
        var _nb2 = _nax(74496),
            _nb3 = _naz(_nax(18622));
        _naw.getSlot294PersonalEffect = function(_nb4) {
            var _nb5 = null,
                _nb6 = new _nb2.SlotItemEffectModel(),
                _nb7 = new _nb2.SlotItemEffectModel(),
                _nb8 = 0,
                _nb9 = _nb4.get_slotnums(294);
            if (12 != _nb4.ctype && 1 != _nb4.ctype && 5 != _nb4.ctype) return _nb6;
            _nb7.houg = 1, 959 == _nb4.ship_id && (_nb7.houg += 1, _nb9 >= 2 && (_nb6.houg += 2), _nb9 >= 3 && (_nb6.houg += 3), _nb8 = 1), _nb6.add(_nb7.multiply(_nb9));
            for (var _nba = 0, _nbb = 0, _nbc = _nb4.have_slot_ids(); _nbb < _nbc.length; _nbb++) {
                var _nbd = _nbc[_nbb],
                    _nbe = _nb3.default.model.slot.getMst(_nbd),
                    _nbf = _nbe.equipType;
                (12 == _nbf || 13 == _nbf) && _nbe.sakuteki >= 5 && (_nba += _nb4.get_slotnums(parseInt(_nbd)));
            }
            var _nbg = _nb4.get_slotnums(13),
                _nbh = _nb4.get_slotnums(125),
                _nbi = _nb4.get_slotnums(285),
                _nbj = _nbg + _nbh + _nbi;
            if (_nba > 0 && (_nb6.houg += 3, _nb6.kaih += 2, _nb6.raig += 1), 1 == _nbj ? (_nb6.houg += 1, _nb6.raig += 3) : _nbj >= 2 && (_nb6.houg += 2, _nb6.raig += 5), _nbi >= 1 && (_nb6.raig += 1), 0 == _nb8) return _nb6;
            var _nbk = _nb4.get_each_level_nums(294),
                _nbl = [];
            return _nb8 > 0 && _nbk.forEach(function(_nbm, _nbn) {
                var _nbo = null;
                for (var _nbp = 1; _nbp <= _nb4.SLOT_LEVEL_MAX; _nbp++) null == _nbl[_nbp] && (_nbl[_nbp] = 0), _nbn >= _nbp && (_nbl[_nbp] += _nbm);
            }), 1 == _nb8 && (_nbl[6] >= 1 && (_nb6.houm += 4 * _nbl[6]), _nbl[7] >= 1 && (_nb6.houg = _nb6.houg + 6 * _nbl[7]), _nbl[8] >= 1 && (_nb6.houg = _nb6.houg + 1 * _nbl[8]), _nbl[9] >= 1 && (_nb6.houg = _nb6.houg + 1 * _nbl[9]), _nbl[10] >= 1 && (_nb6.houg += 1 * _nbl[10])), _nb6;
        };
    },
    44726: function(_nbq, _nbr, _nbs) {
        'use strict';
        var _nbt = null;
        var _nbu = this && this.__importDefault || function(_nbv) {
            var _nbw = null;
            return _nbv && _nbv.__esModule ? _nbv : {
                'default': _nbv
            };
        };
        defineModule(_nbr);
        Object.defineProperty(_nbr, '__esModule', {
            'value': true
        }), _nbr.getSlot295PersonalEffect = void 0;
        var _nbx = _nbs(74496),
            _nby = _nbu(_nbs(18622));
        _nbr.getSlot295PersonalEffect = function(_nbz) {
            var _nc0 = null,
                _nc1 = new _nbx.SlotItemEffectModel(),
                _nc2 = new _nbx.SlotItemEffectModel(),
                _nc3 = _nbz.get_slotnums(295);
            if (12 != _nbz.ctype && 1 != _nbz.ctype && 5 != _nbz.ctype) return _nc1;
            _nc2.houg = 2, _nc2.tyku = 2, 666 == _nbz.ship_id ? (_nc2.houg += 1, _nc2.tyku += 1, _nc2.tais += 1) : 959 == _nbz.ship_id && (_nc2.houg += 2, _nc3 >= 2 && (_nc1.houg += 2), _nc3 >= 3 && (_nc1.houg += 3)), _nc1.add(_nc2.multiply(_nc3));
            for (var _nc4 = 0, _nc5 = 0, _nc6 = 0, _nc7 = _nbz.have_slot_ids(); _nc6 < _nc7.length; _nc6++) {
                var _nc8 = _nc7[_nc6],
                    _nc9 = _nby.default.model.slot.getMst(_nc8),
                    _nca = _nc9.equipType;
                12 != _nca && 13 != _nca || (_nc9.sakuteki >= 5 && (_nc4 += _nbz.get_slotnums(parseInt(_nc8))), _nc9.taiku >= 2 && (_nc5 += _nbz.get_slotnums(parseInt(_nc8))));
            }
            var _ncb = _nbz.get_slotnums(13),
                _ncc = _nbz.get_slotnums(125),
                _ncd = _nbz.get_slotnums(285),
                _nce = _ncb + _ncc + _ncd;
            return _nc4 > 0 && (_nc1.houg += 3, _nc1.kaih += 2, _nc1.raig += 1), 1 == _nce ? (_nc1.houg += 1, _nc1.raig += 3) : _nce >= 2 && (_nc1.houg += 2, _nc1.raig += 5), _ncd >= 1 && (_nc1.raig += 1), _nc5 > 0 && (_nc1.tyku += 6), _nc1;
        };
    },
    93065: function(_ncf, _ncg, _nch) {
        'use strict';
        var _nci = null;
        var _ncj = this && this.__importDefault || function(_nck) {
            var _ncl = null;
            return _nck && _nck.__esModule ? _nck : {
                'default': _nck
            };
        };
        defineModule(_ncg);
        Object.defineProperty(_ncg, '__esModule', {
            'value': true
        }), _ncg.getSlot296PersonalEffect = void 0;
        var _ncm = _nch(74496),
            _ncn = _ncj(_nch(18622));
        _ncg.getSlot296PersonalEffect = function(_nco) {
            var _ncp = null,
                _ncq = new _ncm.SlotItemEffectModel(),
                _ncr = new _ncm.SlotItemEffectModel();
            1 != _nco.ctype && 5 != _nco.ctype && 10 != _nco.ctype && 23 != _nco.ctype || (_ncr.houg += 1), 10 != _nco.ctype && 23 != _nco.ctype || (_ncr.kaih += 1), 145 == _nco.ship_id || 961 == _nco.ship_id ? (_ncr.houg += 1, _ncr.tyku += 1) : 144 == _nco.ship_id ? (_ncr.houg += 1, _ncr.raig += 1) : 469 == _nco.ship_id || 588 == _nco.ship_id || 667 == _nco.ship_id || 587 == _nco.ship_id || 242 == _nco.ship_id ? _ncr.kaih += 1 : 497 == _nco.ship_id ? (_ncr.houg += 1, _ncr.kaih += 1) : 244 == _nco.ship_id ? _ncr.kaih += 1 : 498 == _nco.ship_id || 975 == _nco.ship_id ? (_ncr.tyku += 1, _ncr.kaih += 1) : 627 == _nco.ship_id ? (_ncr.houg += 2, _ncr.raig += 1) : 903 != _nco.ship_id && 908 != _nco.ship_id || (_ncr.houg += 3);
            var _ncs = true;
            if (_ncr.exists() || (_ncs = false), 0 == _ncs) return _ncq;
            var _nct = _nco.get_slotnums(296);
            _ncq = _ncr.multiply(_nct);
            var _ncu = 0;
            if (1 != _nco.ctype && 5 != _nco.ctype && 10 != _nco.ctype || (_ncu = 1), 23 == _nco.ctype && (_ncu = 2), 0 == _ncu) return _ncq;
            for (var _ncv = 0, _ncw = 0, _ncx = 0, _ncy = _nco.have_slot_ids(); _ncx < _ncy.length; _ncx++) {
                var _ncz = _ncy[_ncx],
                    _nd0 = _ncn.default.model.slot.getMst(_ncz),
                    _nd1 = _nd0.equipType;
                12 != _nd1 && 13 != _nd1 || (_nd0.sakuteki >= 5 && (_ncv += _nco.get_slotnums(parseInt(_ncz))), _nd0.taiku >= 2 && (_ncw += _nco.get_slotnums(parseInt(_ncz))));
            }
            return _ncv > 0 && (1 == _ncu ? (_ncq.houg += 1, _ncq.kaih += 2, _ncq.raig += 2) : 2 == _ncu && (_ncq.houg += 1, _ncq.kaih += 2, _ncq.raig += 3)), _nco.get_slotnums(285) + _nco.get_slotnums(125) >= 1 && 1 == _ncu && (_ncq.houg += 1, _ncq.raig += 3), _nco.get_slotnums(15) + _nco.get_slotnums(286) >= 1 && 2 == _ncu && (_ncq.houg += 1, _ncq.raig += 3), _ncw > 0 && (1 == _ncu ? _ncq.tyku += 5 : 2 == _ncu && (_ncq.tyku += 6)), _ncq;
        };
    },
    85767: (_nd2, _nd3, _nd4) => {
        'use strict';
        var _nd5 = null;
        defineModule(_nd3);
        Object.defineProperty(_nd3, '__esModule', {
            'value': true
        }), _nd3.getSlot297PersonalEffect = void 0;
        var _nd6 = _nd4(74496);
        _nd3.getSlot297PersonalEffect = function(_nd7) {
            var _nd8 = null,
                _nd9 = new _nd6.SlotItemEffectModel(),
                _nda = new _nd6.SlotItemEffectModel();
            if (12 == _nd7.ctype) _nda.kaih = 2;
            else {
                if (1 != _nd7.ctype && 5 != _nd7.ctype) return _nd9;
                _nda.kaih = 1;
            }
            var _ndb = _nd7.get_slotnums(297);
            return _nd9 = _nda.multiply(_ndb);
        };
    },
    38314: (_ndc, _ndd, _nde) => {
        'use strict';
        var _ndf = null;
        defineModule(_ndd);
        Object.defineProperty(_ndd, '__esModule', {
            'value': true
        }), _ndd.getSlot301PersonalEffect = void 0;
        var _ndg = _nde(74496);
        _ndd.getSlot301PersonalEffect = function(_ndh) {
            var _ndi = null,
                _ndj = new _ndg.SlotItemEffectModel(),
                _ndk = new _ndg.SlotItemEffectModel();
            67 != _ndh.ctype && 78 != _ndh.ctype && 82 != _ndh.ctype && 88 != _ndh.ctype && 108 != _ndh.ctype && 112 != _ndh.ctype || (_ndk.tyku += 2, _ndk.kaih += 1, _ndk.souk += 1);
            var _ndl = true;
            if (_ndk.exists() || (_ndl = false), 0 == _ndl) return _ndj;
            var _ndm = _ndh.get_slotnums(301);
            return _ndj = _ndk.multiply(_ndm);
        };
    },
    59747: (_ndn, _ndo, _ndp) => {
        'use strict';
        var _ndq = null;
        defineModule(_ndo);
        Object.defineProperty(_ndo, '__esModule', {
            'value': true
        }), _ndo.getSlot302PersonalEffect = void 0;
        var _ndr = _ndp(74496);
        _ndo.getSlot302PersonalEffect = function(_nds) {
            var _ndt = null,
                _ndu = new _ndr.SlotItemEffectModel(),
                _ndv = new _ndr.SlotItemEffectModel();
            if (76 == _nds.ctype && (_ndv.tais = 1, _ndv.kaih = 1), !_ndv.exists()) return _ndu;
            var _ndw = _nds.get_slotnums(302);
            return _ndu = _ndv.multiply(_ndw);
        };
    },
    40649: (_ndx, _ndy, _ndz) => {
        'use strict';
        var _ne0 = null;
        defineModule(_ndy);
        Object.defineProperty(_ndy, '__esModule', {
            'value': true
        }), _ndy.getSlot303PersonalEffect = void 0;
        var _ne1 = _ndz(74496);
        _ndy.getSlot303PersonalEffect = function(_ne2) {
            var _ne3 = null,
                _ne4 = new _ne1.SlotItemEffectModel(),
                _ne5 = new _ne1.SlotItemEffectModel();
            if (16 == _ne2.ctype || 4 == _ne2.ctype || 20 == _ne2.ctype || 41 == _ne2.ctype ? (_ne5.houg = 1, _ne5.tyku = 1) : 89 == _ne2.ctype && (_ne5.houg = 1, _ne5.tyku = 2, _ne5.kaih = 1), !_ne5.exists()) return _ne4;
            var _ne6 = _ne2.get_slotnums(303);
            return _ne4 = _ne5.multiply(_ne6);
        };
    },
    13533: (_ne7, _ne8, _ne9) => {
        'use strict';
        var _nea = null;
        defineModule(_ne8);
        Object.defineProperty(_ne8, '__esModule', {
            'value': true
        }), _ne8.getSlot304PersonalEffect = void 0;
        var _neb = _ne9(74496);
        _ne8.getSlot304PersonalEffect = function(_nec) {
            var _ned = null,
                _nee = new _neb.SlotItemEffectModel(),
                _nef = new _neb.SlotItemEffectModel();
            if (16 == _nec.ctype || 4 == _nec.ctype || 20 == _nec.ctype || 41 == _nec.ctype ? (_nef.houg = 1, _nef.tais = 1, _nef.kaih = 1) : 89 == _nec.ctype && (_nef.houg = 1, _nef.tais = 2, _nef.kaih = 2), !_nef.exists()) return _nee;
            var _neg = _nec.get_slotnums(304);
            return _nee = _nef.multiply(_neg);
        };
    },
    99791: (_neh, _nei, _nej) => {
        'use strict';
        var _nek = null;
        defineModule(_nei);
        Object.defineProperty(_nei, '__esModule', {
            'value': true
        }), _nei.getSlot305More320mmGunPersonalEffect = void 0;
        var _nel = _nej(74496);
        _nei.getSlot305More320mmGunPersonalEffect = function(_nem) {
            var _nen = null,
                _neo = new _nel.SlotItemEffectModel(),
                _nep = _nem.get_slotnums(426),
                _neq = _nem.get_slotnums(427),
                _ner = _nem.get_slotnums(428),
                _nes = _nem.get_slotnums(429),
                _net = _nep + _neq + _ner + _nes;
            return 113 == _nem.ctype ? (_neo.houg = _neo.houg + 2 * _net, _nep >= 1 && (_neo.houg = _neo.houg + 1 * _nep, _neo.kaih = _neo.kaih + 1 * _nep, (_nep >= 2 || _neq >= 1) && (_neo.houg = _neo.houg + 1, _neo.kaih = _neo.kaih + 1)), _ner >= 1 && (_neo.houg = _neo.houg + 1 * _ner, _neo.kaih = _neo.kaih + 1 * _ner, (_ner >= 2 || _nes >= 1) && (_neo.houg = _neo.houg + 2, _neo.kaih = _neo.kaih + 1))) : 73 == _nem.ctype ? (_neo.houg = _neo.houg + 1 * _net, _nep >= 1 && (_neo.houg = _neo.houg + 1 * _nep, _neo.kaih = _neo.kaih + 1 * _nep, (_nep >= 2 || _neq >= 1) && (_neo.houg = _neo.houg + 1)), _ner >= 1 && (_neo.houg = _neo.houg + 1 * _ner, _neo.kaih = _neo.kaih + 1 * _ner, (_ner >= 2 || _nes >= 1) && (_neo.houg = _neo.houg + 1))) : 58 == _nem.ctype && _ner >= 1 && (_neo.houg = _neo.houg + 1 * _ner, _neo.kaih = _neo.kaih + 2 * _ner, (_ner >= 2 || _nes >= 1) && (_neo.houg = _neo.houg + 2, _neo.kaih = _neo.kaih + 1)), _neo;
        };
    },
    12138: (_neu, _nev, _new) => {
        'use strict';
        var _nex = null;
        defineModule(_nev);
        Object.defineProperty(_nev, '__esModule', {
            'value': true
        }), _nev.getSlot305_And_306_PersonalEffect = void 0;
        var _ney = _new(74496);
        _nev.getSlot305_And_306_PersonalEffect = function(_nez) {
            var _nf0 = null,
                _nf1 = new _ney.SlotItemEffectModel(),
                _nf2 = new _ney.SlotItemEffectModel();
            if (76 == _nez.ctype && (_nf2.tais = 1, _nf2.kaih = 1), 'しんよう' == _nez.yomi ? (_nf2.tais += 2, _nf2.kaih += 1) : 'グラーフ・ツェッペリン' != _nez.yomi && 'アクィラ' != _nez.yomi || (_nf2.houg = 1, _nf2.kaih = 1), !_nf2.exists()) return _nf1;
            var _nf3 = _nez.get_slotnums(305) + _nez.get_slotnums(306);
            return _nf1 = _nf2.multiply(_nf3);
        };
    },
    30042: (_nf4, _nf5, _nf6) => {
        'use strict';
        var _nf7 = null;
        defineModule(_nf5);
        Object.defineProperty(_nf5, '__esModule', {
            'value': true
        }), _nf5.getSlot307PersonalEffect = void 0;
        var _nf8 = _nf6(74496);
        _nf5.getSlot307PersonalEffect = function(_nf9) {
            var _nfa = null,
                _nfb = new _nf8.SlotItemEffectModel(),
                _nfc = new _nf8.SlotItemEffectModel();
            if ('アメリカ' == _nf9.getCountryName() && (_nfc.houg = 1, _nfc.tyku = 1, _nfc.kaih = 1), !_nfc.exists()) return _nfb;
            var _nfd = _nf9.get_slotnums(307);
            return _nfb = _nfc.multiply(_nfd);
        };
    },
    33623: (_nfe, _nff, _nfg) => {
        'use strict';
        var _nfh = null;
        defineModule(_nff);
        Object.defineProperty(_nff, '__esModule', {
            'value': true
        }), _nff.getSlot308PersonalEffect = void 0;
        var _nfi = _nfg(74496);
        _nff.getSlot308PersonalEffect = function(_nfj) {
            var _nfk = null,
                _nfl = new _nfi.SlotItemEffectModel(),
                _nfm = new _nfi.SlotItemEffectModel();
            if ('アメリカ' == _nfj.getCountryName() && (_nfm.houg = 1, _nfm.tyku = 1, _nfm.kaih = 1), 2 == _nfj.stype ? _nfm.houg += 1 : 1 == _nfj.stype && (_nfm.tyku += 1, _nfm.kaih += 1), 651 != _nfj.ship_id && 656 != _nfj.ship_id || (_nfm.houg += 1, _nfm.tyku += 1, _nfm.kaih += 1), !_nfm.exists()) return _nfl;
            var _nfn = _nfj.get_slotnums(308);
            return _nfl = _nfm.multiply(_nfn);
        };
    },
    17732: (_nfo, _nfp, _nfq) => {
        'use strict';
        var _nfr = null;
        defineModule(_nfp);
        Object.defineProperty(_nfp, '__esModule', {
            'value': true
        }), _nfp.getSlot30_410PersonalEffect = void 0;
        var _nfs = _nfq(74496);
        _nfp.getSlot30_410PersonalEffect = function(_nft) {
            var _nfu = null,
                _nfv = new _nfs.SlotItemEffectModel();
            return 73 != _nft.ship_id && 501 != _nft.ship_id && 506 != _nft.ship_id && 502 != _nft.ship_id && 507 != _nft.ship_id || (_nfv.tyku += 3, _nfv.kaih += 2, _nfv.saku += 2, _nft.get_slotnums(410) >= 1 && (_nfv.tyku += 2, _nfv.kaih += 2, _nfv.houg += 1, _nfv.souk += 1)), 54 == _nft.ctype && (_nfv.tyku += 3, _nfv.kaih += 2, _nfv.saku += 2, _nft.get_slotnums(410) >= 1 && (_nfv.tyku += 2, _nfv.kaih += 2, _nfv.houg += 1, _nfv.souk += 1, 968 == _nft.ship_id && (_nfv.houg += 1, _nfv.tyku += 1, _nfv.kaih += 1))), _nfv;
        };
    },
    85630: function(_nfw, _nfx, _nfy) {
        'use strict';
        var _nfz = null;
        var _ng0 = this && this.__importDefault || function(_ng1) {
            var _ng2 = null;
            return _ng1 && _ng1.__esModule ? _ng1 : {
                'default': _ng1
            };
        };
        defineModule(_nfx);
        Object.defineProperty(_nfx, '__esModule', {
            'value': true
        }), _nfx.getSlot310PersonalEffect = void 0;
        var _ng3 = _nfy(74496),
            _ng4 = _ng0(_nfy(18622));
        _nfx.getSlot310PersonalEffect = function(_ng5) {
            var _ng6 = null,
                _ng7 = new _ng3.SlotItemEffectModel(),
                _ng8 = new _ng3.SlotItemEffectModel(),
                _ng9 = new _ng3.SlotItemEffectModel();
            34 == _ng5.ctype ? (_ng8.houg += 2, _ng8.tyku += 1, _ng8.kaih += 1, _ng9.houg += 2) : 56 == _ng5.ctype ? (_ng8.houg += 2, _ng8.kaih += 1, _ng9.houg += 2, _ng9.kaih += 2) : 90 == _ng5.ctype && (_ng8.houg += 3, _ng8.raig += 2, _ng8.tyku += 1, _ng8.kaih += 1, _ng9.houg += 1, _ng9.raig += 1);
            var _nga = new _ng3.SlotItemEffectModel(),
                _ngb = new _ng3.SlotItemEffectModel();
            622 != _ng5.ship_id && 623 != _ng5.ship_id && 624 != _ng5.ship_id || (_ng8.houg += 2, _ng8.kaih += 1, _ng8.tais += 1, _nga.houg = 1, _nga.raig = 1, _ngb.houg = 3, _ngb.kaih = 2, _ngb.raig = 2);
            var _ngc = true;
            if (_ng8.exists() || (_ngc = false), 0 == _ngc) return _ng7;
            var _ngd = _ng5.get_slotnums(310) + _ng5.get_slotnums(518);
            _ng7 = _ng8.multiply(_ngd);
            for (var _nge = 0, _ngf = 0, _ngg = 0, _ngh = [310, 518]; _ngg < _ngh.length; _ngg++) {
                var _ngi = _ngh[_ngg],
                    _ngj = _ng5.have_slots_dict[_ngi];
                if (null != _ngj)
                    for (var _ngk = 0, _ngl = _ngj; _ngk < _ngl.length; _ngk++) {
                        var _ngm = _ngl[_ngk];
                        null != _ngm && (_ngm.level >= 7 && _nge++, _ngm.level >= 10 && _ngf++);
                    }
            }
            if (_nga.exists() && _nge > 0 && _ng7.add(_nga.multiply(_nge)), _ng9.exists() && _ngf > 0 && _ng7.add(_ng9.multiply(_ngf)), _ngb.exists()) {
                for (var _ngn = 0, _ngo = 0, _ngp = _ng5.have_slot_ids(); _ngo < _ngp.length; _ngo++) {
                    var _ngq = _ngp[_ngo],
                        _ngr = _ng4.default.model.slot.getMst(_ngq),
                        _ngs = _ngr.equipType;
                    (12 == _ngs || 13 == _ngs) && _ngr.sakuteki >= 5 && (_ngn += _ng5.get_slotnums(parseInt(_ngq)));
                }
                _ngn > 0 && _ng7.add(_ngb);
            }
            return _ng7;
        };
    },
    88736: (_ngt, _ngu, _ngv) => {
        'use strict';
        var _ngw = null;
        defineModule(_ngu);
        Object.defineProperty(_ngu, '__esModule', {
            'value': true
        }), _ngu.getSlot313PersonalEffect = void 0;
        var _ngx = _ngv(74496);
        _ngu.getSlot313PersonalEffect = function(_ngy) {
            var _ngz = null,
                _nh0 = new _ngx.SlotItemEffectModel(),
                _nh1 = new _ngx.SlotItemEffectModel();
            87 != _ngy.ctype && 91 != _ngy.ctype || (_nh1.houg += 2, _nh1.tyku += 2, _nh1.kaih += 1, _nh1.souk += 1), 651 != _ngy.ship_id && 656 != _ngy.ship_id || (_nh1.houg += 2, _nh1.tyku += 2, _nh1.kaih += 1, _nh1.souk += 1);
            var _nh2 = true;
            if (_nh1.exists() || (_nh2 = false), 0 == _nh2) return _nh0;
            var _nh3 = _ngy.get_slotnums(313);
            return _nh0 = _nh1.multiply(_nh3);
        };
    },
    49341: (_nh4, _nh5, _nh6) => {
        'use strict';
        var _nh7 = null;
        defineModule(_nh5);
        Object.defineProperty(_nh5, '__esModule', {
            'value': true
        }), _nh5.getSlot314PersonalEffect = void 0;
        var _nh8 = _nh6(74496);
        _nh5.getSlot314PersonalEffect = function(_nh9) {
            var _nha = null,
                _nhb = new _nh8.SlotItemEffectModel(),
                _nhc = new _nh8.SlotItemEffectModel();
            87 != _nh9.ctype && 91 != _nh9.ctype || (_nhc.houg += 1, _nhc.raig += 3);
            var _nhd = true;
            if (_nhc.exists() || (_nhd = false), 0 == _nhd) return _nhb;
            var _nhe = _nh9.get_slotnums(314);
            return _nhb = _nhc.multiply(_nhe);
        };
    },
    74306: (_nhf, _nhg, _nhh) => {
        'use strict';
        var _nhi = null;
        defineModule(_nhg);
        Object.defineProperty(_nhg, '__esModule', {
            'value': true
        }), _nhg.getSlot315PersonalEffect = void 0;
        var _nhj = _nhh(74496);
        _nhg.getSlot315PersonalEffect = function(_nhk) {
            var _nhl = null,
                _nhm = new _nhj.SlotItemEffectModel(),
                _nhn = new _nhj.SlotItemEffectModel();
            'アメリカ' == _nhk.getCountryName() && (_nhn.houg += 2, _nhn.kaih += 3, _nhn.saku += 4), 87 != _nhk.ctype && 91 != _nhk.ctype || (_nhn.houg += 1, _nhm.leng += 1), 651 != _nhk.ship_id && 656 != _nhk.ship_id || (_nhm.houg += 2, _nhm.kaih += 2, _nhm.saku += 3, _nhm.leng += 1);
            var _nho = true;
            if (_nhn.exists() || (_nho = false), 0 == _nho) return _nhm;
            var _nhp = _nhk.get_slotnums(315);
            return _nhm.add(_nhn.multiply(_nhp)), _nhm;
        };
    },
    83898: (_nhq, _nhr, _nhs) => {
        'use strict';
        var _nht = null;
        defineModule(_nhr);
        Object.defineProperty(_nhr, '__esModule', {
            'value': true
        }), _nhr.getSlot316PersonalEffect = void 0;
        var _nhu = _nhs(74496);
        _nhr.getSlot316PersonalEffect = function(_nhv) {
            var _nhw = null,
                _nhx = new _nhu.SlotItemEffectModel(),
                _nhy = new _nhu.SlotItemEffectModel();
            if (68 == _nhv.ctype) {
                if (_nhy.houg += 4, _nhy.tyku += 1, _nhy.kaih += 1, !_nhy.exists()) return _nhx;
                var _nhz = _nhv.get_slotnums(316);
                _nhx = _nhy.multiply(_nhz);
            }
            return _nhx;
        };
    },
    71873: (_ni0, _ni1, _ni2) => {
        'use strict';
        var _ni3 = null;
        defineModule(_ni1);
        Object.defineProperty(_ni1, '__esModule', {
            'value': true
        }), _ni1.getSlot317PersonalEffect = void 0;
        var _ni4 = _ni2(74496);
        _ni1.getSlot317PersonalEffect = function(_ni5) {
            var _ni6 = null,
                _ni7 = new _ni4.SlotItemEffectModel(),
                _ni8 = new _ni4.SlotItemEffectModel(),
                _ni9 = 0,
                _nia = false;
            if (6 == _ni5.ctype ? (_ni8.houg += 2, _ni8.tyku += 1, _ni9 = 1, _nia = true) : 2 == _ni5.ctype && (_ni8.houg += 1, _ni8.tyku += 1, _ni8.kaih += 1, _ni9 = 2, _nia = true), 149 == _ni5.ship_id || 591 == _ni5.ship_id || 592 == _ni5.ship_id ? (_ni8.houg += 2, _ni8.tyku += 2, _nia = true) : 150 == _ni5.ship_id ? (_ni8.houg += 1, _ni8.tyku += 1, _nia = true) : 151 == _ni5.ship_id ? (_ni8.houg += 1, _ni8.tyku += 1, _ni8.kaih += 1, _nia = true) : 593 == _ni5.ship_id ? (_ni8.houg += 1, _ni8.tyku += 3, _ni8.kaih += 2, _nia = true) : 954 == _ni5.ship_id ? (_ni8.houg += 2, _ni8.tyku += 2, _ni8.kaih += 1, _nia = true) : 152 == _ni5.ship_id || 694 == _ni5.ship_id ? (_ni8.houg += 2, _ni8.tyku += 1, _nia = true) : 541 == _ni5.ship_id ? (_ni8.houg += 1, _ni8.tyku += 2, _nia = true) : 573 == _ni5.ship_id && (_ni8.houg += 2, _ni8.tyku += 2, _ni8.kaih += 1, _nia = true), 0 == _nia) return _ni7;
            if (_ni7.add(_ni8), 0 == _ni9) return _ni7;
            var _nib = _ni5.get_each_level_nums(317),
                _nic = [];
            return _ni9 > 0 && _nib.forEach(function(_nid, _nie) {
                var _nif = null;
                for (var _nig = 1; _nig <= _ni5.SLOT_LEVEL_MAX; _nig++) null == _nic[_nig] && (_nic[_nig] = 0), _nie >= _nig && (_nic[_nig] += _nid);
            }), 1 == _ni9 ? _nic[8] >= 1 && (_ni7.houm += 1) : 2 == _ni9 && _nib[10] >= 1 && (_ni7.houm += 1), _ni7;
        };
    },
    53122: function(_nih, _nii, _nij) {
        'use strict';
        var _nik = null;
        var _nil = this && this.__importDefault || function(_nim) {
            var _nin = null;
            return _nim && _nim.__esModule ? _nim : {
                'default': _nim
            };
        };
        defineModule(_nii);
        Object.defineProperty(_nii, '__esModule', {
            'value': true
        }), _nii.getSlot318PersonalEffect = void 0;
        var _nio = _nij(74496),
            _nip = _nil(_nij(18622));
        _nii.getSlot318PersonalEffect = function(_niq) {
            var _nir = null,
                _nis = new _nio.SlotItemEffectModel(),
                _nit = new _nio.SlotItemEffectModel(),
                _niu = new _nio.SlotItemEffectModel(),
                _niv = new _nio.SlotItemEffectModel();
            if (411 == _niq.ship_id || 412 == _niq.ship_id ? _nit.houg += 1 : 82 == _niq.ship_id ? (_nit.houg += 2, _nit.tyku += 2, _nit.kaih += 2, _niv.tyku = 2, _niv.kaih = 3, _niv.houm = 1) : 553 == _niq.ship_id ? (_nit.houg += 2, _nit.tyku += 2, _nit.kaih += 2, _nit.houm += 3, _niv.tyku = 2, _niv.kaih = 3, _niv.houm = 1, _niu.kaih = 2, _niu.souk = 1) : 88 == _niq.ship_id ? (_nit.houg += 2, _nit.tyku += 2, _nit.kaih += 2, _niv.tyku = 2, _niv.kaih = 3, _niv.houm = 1) : 541 == _niq.ship_id || 573 == _niq.ship_id ? (_nit.houg += 3, _nit.tyku += 2, _nit.kaih += 1, _nit.houm += 2, _niu.houg = 2, _niu.kaih = 2, _niu.souk = 1, _niu.houm = 1) : 554 == _niq.ship_id && (_nit.houg += 3, _nit.tyku += 2, _nit.kaih += 2, _nit.houm += 3, _niv.tyku = 2, _niv.kaih = 3, _niv.houm = 1, _niu.houg = 1, _niu.kaih = 2, _niu.souk = 1, _niu.houm = 1), !_nit.exists()) return _nis;
            var _niw = _niq.get_slotnums(318);
            if (_nis = _nit.multiply(_niw), !_niu.exists() && !_niv.exists()) return _nis;
            for (var _nix = 0, _niy = 0, _niz = _niq.have_slot_ids(); _niy < _niz.length; _niy++) {
                var _nj0 = _niz[_niy],
                    _nj1 = _nip.default.model.slot.getMst(_nj0),
                    _nj2 = _nj1.equipType;
                (12 == _nj2 || 13 == _nj2) && _nj1.taiku >= 2 && (_nix += _niq.get_slotnums(parseInt(_nj0)));
            }
            var _nj3 = _niq.get_slotnums(290);
            return _niv.exists() && _nix > 0 && 0 == _nj3 && _nis.add(_niv), _niu.exists() && _nj3 >= 1 && _nis.add(_niu), _nis;
        };
    },
    51063: (_nj4, _nj5, _nj6) => {
        'use strict';
        var _nj7 = null;
        defineModule(_nj5);
        Object.defineProperty(_nj5, '__esModule', {
            'value': true
        }), _nj5.getSlot319PersonalEffect = void 0;
        var _nj8 = _nj6(74496);
        _nj5.getSlot319PersonalEffect = function(_nj9) {
            var _nja = null,
                _njb = new _nj8.SlotItemEffectModel(),
                _njc = new _nj8.SlotItemEffectModel();
            if (554 != _nj9.ship_id && 553 != _nj9.ship_id || (_njc.houg = 7, _njc.tyku = 3, _njc.kaih = 2), !_njc.exists()) return _njb;
            var _njd = _nj9.get_slotnums(319);
            return _njb = _njc.multiply(_njd);
        };
    },
    91491: (_nje, _njf, _njg) => {
        'use strict';
        var _njh = null;
        defineModule(_njf);
        Object.defineProperty(_njf, '__esModule', {
            'value': true
        }), _njf.getSlot320PersonalEffect = void 0;
        var _nji = _njg(74496);
        _njf.getSlot320PersonalEffect = function(_njj) {
            var _njk = null,
                _njl = new _nji.SlotItemEffectModel(),
                _njm = new _nji.SlotItemEffectModel();
            if (553 == _njj.ship_id) _njm.houg = 2;
            else {
                if (554 == _njj.ship_id) _njm.houg = 4;
                else {
                    if (196 == _njj.ship_id) _njm.houg = 3;
                    else {
                        if (197 == _njj.ship_id) _njm.houg = 3;
                        else {
                            if (508 == _njj.ship_id) _njm.houg = 4;
                            else {
                                if (509 != _njj.ship_id) return _njl;
                                _njm.houg = 4;
                            }
                        }
                    }
                }
            }
            var _njn = _njj.get_slotnums(320);
            return _njl = _njm.multiply(_njn);
        };
    },
    85495: (_njo, _njp, _njq) => {
        'use strict';
        var _njr = null;
        defineModule(_njp);
        Object.defineProperty(_njp, '__esModule', {
            'value': true
        }), _njp.getSlot322PersonalEffect = void 0;
        var _njs = _njq(74496);
        _njp.getSlot322PersonalEffect = function(_njt) {
            var _nju = null,
                _njv = new _njs.SlotItemEffectModel(),
                _njw = new _njs.SlotItemEffectModel();
            if (554 != _njt.ship_id && 553 != _njt.ship_id || (_njw.houg = 5, _njw.tyku = 2, _njw.kaih = 2, _njw.tais = 1), !_njw.exists()) return _njv;
            var _njx = _njt.get_slotnums(322);
            return _njv = _njw.multiply(_njx);
        };
    },
    65365: (_njy, _njz, _nk0) => {
        'use strict';
        var _nk1 = null;
        defineModule(_njz);
        Object.defineProperty(_njz, '__esModule', {
            'value': true
        }), _njz.getSlot323PersonalEffect = void 0;
        var _nk2 = _nk0(74496);
        _njz.getSlot323PersonalEffect = function(_nk3) {
            var _nk4 = null,
                _nk5 = new _nk2.SlotItemEffectModel(),
                _nk6 = new _nk2.SlotItemEffectModel();
            if (554 != _nk3.ship_id && 553 != _nk3.ship_id || (_nk6.houg = 6, _nk6.tyku = 3, _nk6.kaih = 3, _nk6.tais = 2), !_nk6.exists()) return _nk5;
            var _nk7 = _nk3.get_slotnums(323);
            return _nk5 = _nk6.multiply(_nk7);
        };
    },
    98164: (_nk8, _nk9, _nka) => {
        'use strict';
        var _nkb = null;
        defineModule(_nk9);
        Object.defineProperty(_nk9, '__esModule', {
            'value': true
        }), _nk9.getSlot324And325PersonalEffect = void 0;
        var _nkc = _nka(74496);
        _nk9.getSlot324And325PersonalEffect = function(_nkd) {
            var _nke = null,
                _nkf = new _nkc.SlotItemEffectModel(),
                _nkg = new _nkc.SlotItemEffectModel();
            if (554 == _nkd.ship_id || 646 == _nkd.ship_id ? (_nkg.houg = 2, _nkg.tais = 3, _nkg.kaih = 1) : 553 == _nkd.ship_id && (_nkg.houg = 1, _nkg.tais = 2, _nkg.kaih = 1), !_nkg.exists()) return _nkf;
            var _nkh = _nkd.get_slotnums(324) + _nkd.get_slotnums(325);
            return _nkf = _nkg.multiply(_nkh);
        };
    },
    38114: (_nki, _nkj, _nkk) => {
        'use strict';
        var _nkl = null;
        defineModule(_nkj);
        Object.defineProperty(_nkj, '__esModule', {
            'value': true
        }), _nkj.getSlot326PersonalEffect = void 0;
        var _nkm = _nkk(74496);
        _nkj.getSlot326PersonalEffect = function(_nkn) {
            var _nko = null,
                _nkp = new _nkm.SlotItemEffectModel(),
                _nkq = new _nkm.SlotItemEffectModel();
            if (646 == _nkn.ship_id ? (_nkq.houg = 3, _nkq.tais = 5, _nkq.kaih = 3) : 554 == _nkn.ship_id ? (_nkq.houg = 3, _nkq.tais = 4, _nkq.kaih = 2) : 553 == _nkn.ship_id && (_nkq.houg = 1, _nkq.tais = 3, _nkq.kaih = 1), !_nkq.exists()) return _nkp;
            var _nkr = _nkn.get_slotnums(326);
            return _nkp = _nkq.multiply(_nkr);
        };
    },
    21003: (_nks, _nkt, _nku) => {
        'use strict';
        var _nkv = null;
        defineModule(_nkt);
        Object.defineProperty(_nkt, '__esModule', {
            'value': true
        }), _nkt.getSlot327PersonalEffect = void 0;
        var _nkw = _nku(74496);
        _nkt.getSlot327PersonalEffect = function(_nkx) {
            var _nky = null,
                _nkz = new _nkw.SlotItemEffectModel(),
                _nl0 = new _nkw.SlotItemEffectModel();
            if (646 == _nkx.ship_id ? (_nl0.houg = 5, _nl0.tais = 6, _nl0.kaih = 4) : 554 == _nkx.ship_id ? (_nl0.houg = 4, _nl0.tais = 5, _nl0.kaih = 2) : 553 == _nkx.ship_id && (_nl0.houg = 2, _nl0.tais = 4, _nl0.kaih = 1), !_nl0.exists()) return _nkz;
            var _nl1 = _nkx.get_slotnums(327);
            return _nkz = _nl0.multiply(_nl1);
        };
    },
    77010: (_nl2, _nl3, _nl4) => {
        'use strict';
        var _nl5 = null;
        defineModule(_nl3);
        Object.defineProperty(_nl3, '__esModule', {
            'value': true
        }), _nl3.getSlot328PersonalEffect = void 0;
        var _nl6 = _nl4(74496);
        _nl3.getSlot328PersonalEffect = function(_nl7) {
            var _nl8 = null,
                _nl9 = new _nl6.SlotItemEffectModel(),
                _nla = new _nl6.SlotItemEffectModel();
            if ('こんごう' == _nl7.yomi ? (_nla.houg = 1, _nla.kaih = 1, 209 == _nl7.ship_id || 149 == _nl7.ship_id ? _nla.houg += 1 : 591 == _nl7.ship_id && (_nla.houg += 2, _nla.raig += 1)) : 'ひえい' == _nl7.yomi ? (_nla.houg = 1, _nla.kaih = 1, 210 == _nl7.ship_id || 150 == _nl7.ship_id ? _nla.houg += 1 : 592 == _nl7.ship_id && (_nla.houg += 2, _nla.tyku += 1)) : 'はるな' == _nl7.yomi ? (_nla.houg = 1, _nla.kaih = 1, 211 == _nl7.ship_id || 151 == _nl7.ship_id ? _nla.houg += 1 : 593 == _nl7.ship_id ? (_nla.houg += 1, _nla.tyku += 2) : 954 == _nl7.ship_id && (_nla.houg += 2, _nla.tyku += 1)) : 'きりしま' == _nl7.yomi ? (_nla.houg = 1, _nla.kaih = 1, 212 == _nl7.ship_id || 152 == _nl7.ship_id ? _nla.houg += 1 : 694 == _nl7.ship_id && (_nla.houg += 2, _nla.tyku += 1)) : ('ふそう' == _nl7.yomi || 'やましろ' == _nl7.yomi || 'いせ' == _nl7.yomi || 'ひゅうが' == _nl7.yomi) && (_nla.houg = 1), !_nla.exists()) return _nl9;
            var _nlb = _nl7.get_slotnums(328);
            return _nl9 = _nla.multiply(_nlb);
        };
    },
    39126: (_nlc, _nld, _nle) => {
        'use strict';
        var _nlf = null;
        defineModule(_nld);
        Object.defineProperty(_nld, '__esModule', {
            'value': true
        }), _nld.getSlot329PersonalEffect = void 0;
        var _nlg = _nle(74496);
        _nld.getSlot329PersonalEffect = function(_nlh) {
            var _nli = null,
                _nlj = new _nlg.SlotItemEffectModel(),
                _nlk = new _nlg.SlotItemEffectModel();
            if ('こんごう' == _nlh.yomi ? (_nlk.houg = 1, _nlk.kaih = 1, 209 == _nlh.ship_id ? _nlk.houg += 1 : 149 == _nlh.ship_id ? (_nlk.houg += 2, _nlk.tyku += 1) : 591 == _nlh.ship_id && (_nlk.houg += 3, _nlk.tyku += 1, _nlk.raig += 2)) : 'ひえい' == _nlh.yomi ? (_nlk.houg = 1, _nlk.kaih = 1, 210 == _nlh.ship_id ? _nlk.houg += 1 : 150 == _nlh.ship_id ? (_nlk.houg += 2, _nlk.tyku += 1) : 592 == _nlh.ship_id && (_nlk.houg += 3, _nlk.tyku += 1, _nlk.raig += 2)) : 'はるな' == _nlh.yomi ? (_nlk.houg = 1, _nlk.kaih = 1, 211 == _nlh.ship_id ? _nlk.houg += 1 : 151 == _nlh.ship_id ? (_nlk.houg += 2, _nlk.tyku += 1) : 593 == _nlh.ship_id ? (_nlk.houg += 2, _nlk.tyku += 3, _nlk.raig += 1) : 954 == _nlh.ship_id && (_nlk.houg += 3, _nlk.tyku += 1, _nlk.raig += 2)) : 'きりしま' == _nlh.yomi ? (_nlk.houg = 1, _nlk.kaih = 1, 212 == _nlh.ship_id ? _nlk.houg += 1 : 152 == _nlh.ship_id ? (_nlk.houg += 2, _nlk.tyku += 1) : 694 == _nlh.ship_id && (_nlk.houg += 4, _nlk.tyku += 1, _nlk.raig += 1)) : ('ふそう' == _nlh.yomi || 'やましろ' == _nlh.yomi || 'いせ' == _nlh.yomi || 'ひゅうが' == _nlh.yomi) && (_nlk.houg = 1), !_nlk.exists()) return _nlj;
            var _nll = _nlh.get_slotnums(329);
            return _nlj = _nlk.multiply(_nll);
        };
    },
    72176: (_nlm, _nln, _nlo) => {
        'use strict';
        var _nlp = null;
        defineModule(_nln);
        Object.defineProperty(_nln, '__esModule', {
            'value': true
        }), _nln.getSlot335PersonalEffect = void 0;
        var _nlq = _nlo(74496);
        _nln.getSlot335PersonalEffect = function(_nlr) {
            var _nls = null,
                _nlt = new _nlq.SlotItemEffectModel(),
                _nlu = new _nlq.SlotItemEffectModel();
            if (277 == _nlr.ship_id || 278 == _nlr.ship_id ? (_nlu.tyku = 1, _nlu.kaih = 1) : 594 != _nlr.ship_id && 599 != _nlr.ship_id && 610 != _nlr.ship_id && 646 != _nlr.ship_id && 698 != _nlr.ship_id || (_nlu.tyku = 2, _nlu.kaih = 1), !_nlu.exists()) return _nlt;
            var _nlv = _nlr.get_slotnums(335);
            return _nlt = _nlu.multiply(_nlv);
        };
    },
    33846: (_nlw, _nlx, _nly) => {
        'use strict';
        var _nlz = null;
        defineModule(_nlx);
        Object.defineProperty(_nlx, '__esModule', {
            'value': true
        }), _nlx.getSlot336PersonalEffect = void 0;
        var _nm0 = _nly(74496);
        _nlx.getSlot336PersonalEffect = function(_nm1) {
            var _nm2 = null,
                _nm3 = new _nm0.SlotItemEffectModel(),
                _nm4 = new _nm0.SlotItemEffectModel();
            if (277 == _nm1.ship_id || 278 == _nm1.ship_id ? (_nm4.houg = 1, _nm4.tyku = 1, _nm4.kaih = 1) : 594 != _nm1.ship_id && 599 != _nm1.ship_id && 610 != _nm1.ship_id && 646 != _nm1.ship_id && 698 != _nm1.ship_id || (_nm4.houg = 1, _nm4.tyku = 2, _nm4.kaih = 1), !_nm4.exists()) return _nm3;
            var _nm5 = _nm1.get_slotnums(336);
            return _nm3 = _nm4.multiply(_nm5);
        };
    },
    97157: (_nm6, _nm7, _nm8) => {
        'use strict';
        var _nm9 = null;
        defineModule(_nm7);
        Object.defineProperty(_nm7, '__esModule', {
            'value': true
        }), _nm7.getSlot337PersonalEffect = void 0;
        var _nma = _nm8(74496);
        _nm7.getSlot337PersonalEffect = function(_nmb) {
            var _nmc = null,
                _nmd = new _nma.SlotItemEffectModel(),
                _nme = new _nma.SlotItemEffectModel();
            if (277 == _nmb.ship_id || 278 == _nmb.ship_id ? (_nme.houg = 1, _nme.tyku = 1, _nme.kaih = 1) : 594 != _nmb.ship_id && 599 != _nmb.ship_id && 610 != _nmb.ship_id && 646 != _nmb.ship_id && 698 != _nmb.ship_id || (_nme.houg = 2, _nme.tyku = 2, _nme.kaih = 1), !_nme.exists()) return _nmd;
            var _nmf = _nmb.get_slotnums(337);
            return _nmd = _nme.multiply(_nmf);
        };
    },
    63406: (_nmg, _nmh, _nmi) => {
        'use strict';
        var _nmj = null;
        defineModule(_nmh);
        Object.defineProperty(_nmh, '__esModule', {
            'value': true
        }), _nmh.getSlot338PersonalEffect = void 0;
        var _nmk = _nmi(74496);
        _nmh.getSlot338PersonalEffect = function(_nml) {
            var _nmm = null,
                _nmn = new _nmk.SlotItemEffectModel(),
                _nmo = new _nmk.SlotItemEffectModel();
            if (277 == _nml.ship_id || 278 == _nml.ship_id ? (_nmo.houg = 1, _nmo.tyku = 1, _nmo.kaih = 2) : 594 == _nml.ship_id || 646 == _nml.ship_id || 698 == _nml.ship_id ? (_nmo.houg = 1, _nmo.tyku = 2, _nmo.kaih = 3) : 599 != _nml.ship_id && 610 != _nml.ship_id || (_nmo.houg = 4, _nmo.tyku = 3, _nmo.kaih = 4), !_nmo.exists()) return _nmn;
            var _nmp = _nml.get_slotnums(338);
            return _nmn = _nmo.multiply(_nmp);
        };
    },
    66373: (_nmq, _nmr, _nms) => {
        'use strict';
        var _nmt = null;
        defineModule(_nmr);
        Object.defineProperty(_nmr, '__esModule', {
            'value': true
        }), _nmr.getSlot339PersonalEffect = void 0;
        var _nmu = _nms(74496);
        _nmr.getSlot339PersonalEffect = function(_nmv) {
            var _nmw = null,
                _nmx = new _nmu.SlotItemEffectModel(),
                _nmy = new _nmu.SlotItemEffectModel();
            if (277 == _nmv.ship_id || 278 == _nmv.ship_id ? (_nmy.houg = 1, _nmy.tyku = 2, _nmy.kaih = 2) : 594 == _nmv.ship_id || 646 == _nmv.ship_id || 698 == _nmv.ship_id ? (_nmy.houg = 1, _nmy.tyku = 3, _nmy.kaih = 4) : 599 != _nmv.ship_id && 610 != _nmv.ship_id || (_nmy.houg = 6, _nmy.tyku = 4, _nmy.kaih = 5), !_nmy.exists()) return _nmx;
            var _nmz = _nmv.get_slotnums(339);
            return _nmx = _nmy.multiply(_nmz);
        };
    },
    19707: (_nn0, _nn1, _nn2) => {
        'use strict';
        var _nn3 = null;
        defineModule(_nn1);
        Object.defineProperty(_nn1, '__esModule', {
            'value': true
        }), _nn1.getSlot340PersonalEffect = void 0;
        var _nn4 = _nn2(74496);
        _nn1.getSlot340PersonalEffect = function(_nn5) {
            var _nn6 = null,
                _nn7 = new _nn4.SlotItemEffectModel(),
                _nn8 = new _nn4.SlotItemEffectModel();
            if ('ガリバルディ' != _nn5.yomi && 'アブルッツィ' != _nn5.yomi || (_nn8.houg = 1, _nn8.tyku = 1, _nn8.kaih = 1), !_nn8.exists()) return _nn7;
            var _nn9 = _nn5.get_slotnums(340);
            return _nn7 = _nn8.multiply(_nn9);
        };
    },
    63978: (_nna, _nnb, _nnc) => {
        'use strict';
        var _nnd = null;
        defineModule(_nnb);
        Object.defineProperty(_nnb, '__esModule', {
            'value': true
        }), _nnb.getSlot341PersonalEffect = void 0;
        var _nne = _nnc(74496);
        _nnb.getSlot341PersonalEffect = function(_nnf) {
            var _nng = null,
                _nnh = new _nne.SlotItemEffectModel(),
                _nni = new _nne.SlotItemEffectModel();
            if ('ガリバルディ' == _nnf.yomi || 'アブルッツィ' == _nnf.yomi ? (_nni.houg = 2, _nni.tyku = 1, _nni.kaih = 1) : 'ゴトランド' == _nnf.yomi && (_nni.houg = 1, _nni.tyku = 1, _nni.kaih = 1), !_nni.exists()) return _nnh;
            var _nnj = _nnf.get_slotnums(341);
            return _nnh = _nni.multiply(_nnj);
        };
    },
    92382: (_nnk, _nnl, _nnm) => {
        'use strict';
        var _nnn = null;
        defineModule(_nnl);
        Object.defineProperty(_nnl, '__esModule', {
            'value': true
        }), _nnl.getSlot342PersonalEffect = void 0;
        var _nno = _nnm(74496);
        _nnl.getSlot342PersonalEffect = function(_nnp) {
            var _nnq = null,
                _nnr = new _nno.SlotItemEffectModel(),
                _nns = new _nno.SlotItemEffectModel();
            if (277 == _nnp.ship_id || 278 == _nnp.ship_id || 461 == _nnp.ship_id || 466 == _nnp.ship_id || 462 == _nnp.ship_id || 467 == _nnp.ship_id ? _nns.houg = 1 : 594 == _nnp.ship_id || 646 == _nnp.ship_id || 698 == _nnp.ship_id ? (_nns.houg = 2, _nns.tyku = 1, _nns.kaih = 1) : 599 != _nnp.ship_id && 610 != _nnp.ship_id || (_nns.houg = 3, _nns.tyku = 2, _nns.kaih = 2), !_nns.exists()) return _nnr;
            var _nnt = _nnp.get_slotnums(342);
            return _nnr = _nns.multiply(_nnt);
        };
    },
    78415: (_nnu, _nnv, _nnw) => {
        'use strict';
        var _nnx = null;
        defineModule(_nnv);
        Object.defineProperty(_nnv, '__esModule', {
            'value': true
        }), _nnv.getSlot343PersonalEffect = void 0;
        var _nny = _nnw(74496);
        _nnv.getSlot343PersonalEffect = function(_nnz) {
            var _no0 = null,
                _no1 = new _nny.SlotItemEffectModel(),
                _no2 = new _nny.SlotItemEffectModel();
            if (277 == _nnz.ship_id || 278 == _nnz.ship_id ? _no2.houg = 2 : 461 == _nnz.ship_id || 466 == _nnz.ship_id || 462 == _nnz.ship_id || 467 == _nnz.ship_id ? _no2.houg = 1 : 594 == _nnz.ship_id || 646 == _nnz.ship_id || 698 == _nnz.ship_id ? (_no2.houg = 3, _no2.tyku = 2, _no2.kaih = 1) : 599 != _nnz.ship_id && 610 != _nnz.ship_id || (_no2.houg = 5, _no2.tyku = 3, _no2.kaih = 3), !_no2.exists()) return _no1;
            var _no3 = _nnz.get_slotnums(343);
            return _no1 = _no2.multiply(_no3);
        };
    },
    23090: (_no4, _no5, _no6) => {
        'use strict';
        var _no7 = null;
        defineModule(_no5);
        Object.defineProperty(_no5, '__esModule', {
            'value': true
        }), _no5.getSlot344PersonalEffect = void 0;
        var _no8 = _no6(74496);
        _no5.getSlot344PersonalEffect = function(_no9) {
            var _noa = null,
                _nob = new _no8.SlotItemEffectModel(),
                _noc = new _no8.SlotItemEffectModel();
            if (599 == _no9.ship_id || 610 == _no9.ship_id ? _noc.houg = 3 : 555 == _no9.ship_id || 560 == _no9.ship_id ? (_noc.houg = 2, _noc.tais = 2) : 318 == _no9.ship_id ? (_noc.houg = 4, _noc.tais = 1) : 282 == _no9.ship_id ? (_noc.houg = 2, _noc.tais = 1) : 888 == _no9.ship_id ? (_noc.houg = 4, _noc.tais = 2) : 883 == _no9.ship_id && (_noc.houg = 5, _noc.tais = 2), !_noc.exists()) return _nob;
            var _nod = _no9.get_slotnums(344);
            return _nob = _noc.multiply(_nod);
        };
    },
    18776: (_noe, _nof, _nog) => {
        'use strict';
        var _noh = null;
        defineModule(_nof);
        Object.defineProperty(_nof, '__esModule', {
            'value': true
        }), _nof.getSlot345PersonalEffect = void 0;
        var _noi = _nog(74496);
        _nof.getSlot345PersonalEffect = function(_noj) {
            var _nok = null,
                _nol = new _noi.SlotItemEffectModel(),
                _nom = new _noi.SlotItemEffectModel();
            if (599 == _noj.ship_id || 610 == _noj.ship_id ? (_nom.houg = 3, _nom.kaih = 1) : 555 == _noj.ship_id || 560 == _noj.ship_id ? (_nom.houg = 3, _nom.tais = 2, _nom.kaih = 2) : 318 == _noj.ship_id ? (_nom.houg = 5, _nom.tais = 1, _nom.kaih = 2) : 282 == _noj.ship_id ? (_nom.houg = 3, _nom.tais = 1, _nom.kaih = 1) : 888 == _noj.ship_id ? (_nom.houg = 4, _nom.tais = 2, _nom.kaih = 2) : 883 == _noj.ship_id && (_nom.houg = 5, _nom.tais = 2, _nom.kaih = 3), !_nom.exists()) return _nol;
            var _non = _noj.get_slotnums(345);
            return _nol = _nom.multiply(_non);
        };
    },
    89058: (_noo, _nop, _noq) => {
        'use strict';
        var _nor = null;
        defineModule(_nop);
        Object.defineProperty(_nop, '__esModule', {
            'value': true
        }), _nop.getSlot346PersonalEffect = void 0;
        var _nos = _noq(74496);
        _nop.getSlot346PersonalEffect = function(_not) {
            var _nou = null,
                _nov = new _nos.SlotItemEffectModel();
            return 'やましおまる' == _not.yomi && (_nov.kaih += 1, _nov.tais += 1), _nov;
        };
    },
    84372: (_now, _nox, _noy) => {
        'use strict';
        var _noz = null;
        defineModule(_nox);
        Object.defineProperty(_nox, '__esModule', {
            'value': true
        }), _nox.getSlot347PersonalEffect = void 0;
        var _np0 = _noy(74496);
        _nox.getSlot347PersonalEffect = function(_np1) {
            var _np2 = null,
                _np3 = new _np0.SlotItemEffectModel();
            return 'やましおまる' == _np1.yomi && (_np3.kaih += 2, _np3.tais += 2), _np3;
        };
    },
    39656: (_np4, _np5, _np6) => {
        'use strict';
        var _np7 = null;
        defineModule(_np5);
        Object.defineProperty(_np5, '__esModule', {
            'value': true
        }), _np5.getSlot356_357PersonalEffect = void 0;
        var _np8 = _np6(74496);
        _np5.getSlot356_357PersonalEffect = function(_np9) {
            var _npa = null,
                _npb = new _np8.SlotItemEffectModel(),
                _npc = new _np8.SlotItemEffectModel();
            if (95 == _np9.ctype ? _npc.houg = 2 : 9 == _np9.ctype && (_npc.houg = 1), !_npc.exists()) return _npb;
            var _npd = _np9.get_slotnums(356) + _np9.get_slotnums(357);
            return _npb = _npc.multiply(_npd);
        };
    },
    66039: (_npe, _npf, _npg) => {
        'use strict';
        var _nph = null;
        defineModule(_npf);
        Object.defineProperty(_npf, '__esModule', {
            'value': true
        }), _npf.getSlot358PersonalEffect = void 0;
        var _npi = _npg(74496);
        _npf.getSlot358PersonalEffect = function(_npj) {
            var _npk = null,
                _npl = new _npi.SlotItemEffectModel(),
                _npm = new _npi.SlotItemEffectModel();
            if ('アメリカ' != _npj.getCountryName() && 67 != _npj.ctype && 78 != _npj.ctype && 82 != _npj.ctype && 88 != _npj.ctype && 108 != _npj.ctype && 112 != _npj.ctype) return _npl;
            _npm.houg += 1, _npm.kaih += 1, _npm.tyku += 1, 95 == _npj.ctype && (_npm.houg += 1, _npm.kaih += 2, _npm.tyku += 2);
            var _npn = _npj.get_slotnums(358);
            return _npl = _npm.multiply(_npn);
        };
    },
    64679: (_npo, _npp, _npq) => {
        'use strict';
        var _npr = null;
        defineModule(_npp);
        Object.defineProperty(_npp, '__esModule', {
            'value': true
        }), _npp.getSlot359PersonalEffect = void 0;
        var _nps = _npq(74496);
        _npp.getSlot359PersonalEffect = function(_npt) {
            var _npu = null,
                _npv = new _nps.SlotItemEffectModel(),
                _npw = new _nps.SlotItemEffectModel();
            if ('パース' == _npt.yomi ? (_npw.houg = 2, _npw.tyku = 2, _npw.kaih = 1) : 'ゆうばり' == _npt.yomi && (_npw.houg = 1, _npw.tyku = 1, _npw.kaih = 1), 622 != _npt.ship_id && 623 != _npt.ship_id && 624 != _npt.ship_id || (_npw.houg += 1, _npw.tyku += 1), !_npw.exists()) return _npv;
            var _npx = _npt.get_slotnums(359);
            return _npv = _npw.multiply(_npx);
        };
    },
    69954: (_npy, _npz, _nq0) => {
        'use strict';
        var _nq1 = null;
        defineModule(_npz);
        Object.defineProperty(_npz, '__esModule', {
            'value': true
        }), _npz.getSlot35PersonalEffect = void 0;
        var _nq2 = _nq0(74496);
        _npz.getSlot35PersonalEffect = function(_nq3) {
            var _nq4 = null,
                _nq5 = new _nq2.SlotItemEffectModel(),
                _nq6 = new _nq2.SlotItemEffectModel();
            return 149 == _nq3.ship_id || 591 == _nq3.ship_id || 592 == _nq3.ship_id || 694 == _nq3.ship_id ? (_nq6.houg += 1, _nq6.tyku += 1) : 150 == _nq3.ship_id ? _nq6.tyku += 1 : 151 == _nq3.ship_id || 593 == _nq3.ship_id || 954 == _nq3.ship_id ? (_nq6.tyku += 1, _nq6.kaih += 1) : 152 == _nq3.ship_id && (_nq6.houg += 1), _nq6.exists() ? _nq5 = _nq6.multiply(1) : _nq5;
        };
    },
    95953: (_nq7, _nq8, _nq9) => {
        'use strict';
        var _nqa = null;
        defineModule(_nq8);
        Object.defineProperty(_nq8, '__esModule', {
            'value': true
        }), _nq8.getSlot360_361PersonalEffect = void 0;
        var _nqb = _nq9(74496);
        _nq8.getSlot360_361PersonalEffect = function(_nqc) {
            var _nqd = null,
                _nqe = new _nqb.SlotItemEffectModel(),
                _nqf = new _nqb.SlotItemEffectModel();
            if ('デ・ロイテル' == _nqc.yomi ? (_nqf.houg = 2, _nqf.tyku = 2, _nqf.kaih = 1) : 'ゴトランド' == _nqc.yomi && (_nqf.houg = 2, _nqf.tyku = 1, _nqf.kaih = 1), 41 == _nqc.ctype && (_nqf.houg = 1, _nqf.tyku = 1), !_nqf.exists()) return _nqe;
            var _nqg = _nqc.get_slotnums(360) + _nqc.get_slotnums(361);
            return _nqe = _nqf.multiply(_nqg);
        };
    },
    86384: (_nqh, _nqi, _nqj) => {
        'use strict';
        var _nqk = null;
        defineModule(_nqi);
        Object.defineProperty(_nqi, '__esModule', {
            'value': true
        }), _nqi.getSlot362_363PersonalEffect = void 0;
        var _nql = _nqj(74496);
        _nqi.getSlot362_363PersonalEffect = function(_nqm) {
            var _nqn = null,
                _nqo = new _nql.SlotItemEffectModel(),
                _nqp = new _nql.SlotItemEffectModel(),
                _nqq = false;
            if (99 == _nqm.ctype ? (_nqp.houg = 1, _nqp.tyku = 2, _nqp.kaih = 1, _nqq = true) : 34 == _nqm.ctype || 21 == _nqm.ctype ? (_nqp.houg = -3, _nqp.tyku = -3, _nqp.kaih = -8, _nqq = true) : 4 == _nqm.ctype || 20 == _nqm.ctype || 16 == _nqm.ctype ? (_nqp.houg = -3, _nqp.tyku = -2, _nqp.kaih = -6, _nqq = true) : 89 == _nqm.ctype || 56 == _nqm.ctype ? (_nqp.houg = -2, _nqp.tyku = -1, _nqp.kaih = -4, _nqq = true) : 52 != _nqm.ctype && 41 != _nqm.ctype && 98 != _nqm.ctype || (_nqp.tyku = -1, _nqp.kaih = -2, _nqq = true), 'アメリカ' == _nqm.getCountryName() && (_nqp.tyku += 1, _nqp.kaih += 1, _nqq = true), 0 == _nqq) return _nqo;
            var _nqr = _nqm.get_slotnums(362) + _nqm.get_slotnums(363);
            return _nqo = _nqp.multiply(_nqr);
        };
    },
    65345: (_nqs, _nqt, _nqu) => {
        'use strict';
        var _nqv = null;
        defineModule(_nqt);
        Object.defineProperty(_nqt, '__esModule', {
            'value': true
        }), _nqt.getSlot364PersonalEffect = void 0;
        var _nqw = _nqu(74496);
        _nqt.getSlot364PersonalEffect = function(_nqx) {
            var _nqy = null;
            new _nqw.SlotItemEffectModel();
            var _nqz = new _nqw.SlotItemEffectModel();
            623 == _nqx.ship_id || 586 == _nqx.ship_id || 119 == _nqx.ship_id || 118 == _nqx.ship_id || 657 == _nqx.ship_id || 506 == _nqx.ship_id || 668 == _nqx.ship_id || 507 == _nqx.ship_id ? (_nqz.raig = 1, _nqz.kaih = -2, 119 == _nqx.ship_id ? _nqz.raig += 1 : 507 == _nqx.ship_id ? _nqz.raig += 2 : 623 == _nqx.ship_id && (_nqz.houg += 1, _nqz.raig += 3)) : (_nqz.houg = -1, _nqz.kaih = -7);
            var _nr0 = _nqx.get_slotnums(364);
            return _nqz.multiply(_nr0);
        };
    },
    46514: (_nr1, _nr2, _nr3) => {
        'use strict';
        var _nr4 = null;
        defineModule(_nr2);
        Object.defineProperty(_nr2, '__esModule', {
            'value': true
        }), _nr2.getSlot365PersonalEffect = void 0;
        var _nr5 = _nr3(74496);
        _nr2.getSlot365PersonalEffect = function(_nr6) {
            var _nr7 = null,
                _nr8 = new _nr5.SlotItemEffectModel(),
                _nr9 = new _nr5.SlotItemEffectModel(),
                _nra = false;
            return 37 != _nr6.ctype && 19 != _nr6.ctype && 2 != _nr6.ctype && 26 != _nr6.ctype && 6 != _nr6.ctype || (_nr9.houg += 1, _nra = true), 136 != _nr6.ship_id && 148 != _nr6.ship_id && 546 != _nr6.ship_id && 541 != _nr6.ship_id && 573 != _nr6.ship_id && 911 != _nr6.ship_id && 916 != _nr6.ship_id && 593 != _nr6.ship_id || (_nr9.houg += 1, _nra = true), 591 != _nr6.ship_id && 592 != _nr6.ship_id && 954 != _nr6.ship_id && 694 != _nr6.ship_id || (_nr9.houg += 2, _nra = true), 0 == _nra ? _nr8 : _nr8 = _nr9.multiply(1);
        };
    },
    81976: (_nrb, _nrc, _nrd) => {
        'use strict';
        var _nre = null;
        defineModule(_nrc);
        Object.defineProperty(_nrc, '__esModule', {
            'value': true
        }), _nrc.getSlot367PersonalEffect = void 0;
        var _nrf = _nrd(74496);
        _nrc.getSlot367PersonalEffect = function(_nrg) {
            var _nrh = null,
                _nri = new _nrf.SlotItemEffectModel(),
                _nrj = new _nrf.SlotItemEffectModel(),
                _nrk = false;
            if ('ゴトランド' == _nrg.yomi && (_nrj.houg += 2, _nrj.tais += 1, _nrj.kaih += 1, _nrj.saku += 1, _nrk = true), 70 == _nrg.ctype ? (_nrj.houg += 1, _nrj.tais += 1, _nrj.kaih += 1, _nrj.saku += 1, _nrk = true) : 72 == _nrg.ctype || 62 == _nrg.ctype ? (_nrj.houg += 1, _nrj.kaih += 1, _nrj.saku += 1, _nrk = true) : 67 != _nrg.ctype && 78 != _nrg.ctype && 82 != _nrg.ctype && 88 != _nrg.ctype && 108 != _nrg.ctype && 112 != _nrg.ctype || (_nrj.houg += 2, _nrj.kaih += 2, _nrj.saku += 2, _nrk = true), 0 == _nrk) return _nri;
            var _nrl = _nrg.get_slotnums(367);
            return _nri = _nrj.multiply(_nrl);
        };
    },
    89331: (_nrm, _nrn, _nro) => {
        'use strict';
        var _nrp = null;
        defineModule(_nrn);
        Object.defineProperty(_nrn, '__esModule', {
            'value': true
        }), _nrn.getSlot368PersonalEffect = void 0;
        var _nrq = _nro(74496);
        _nrn.getSlot368PersonalEffect = function(_nrr) {
            var _nrs = null,
                _nrt = new _nrq.SlotItemEffectModel(),
                _nru = new _nrq.SlotItemEffectModel(),
                _nrv = false;
            if ('ゴトランド' == _nrr.yomi && (_nru.houg = 4, _nru.tais = 3, _nru.kaih = 2, _nru.saku = 3, _nrv = true, 630 == _nrr.ship_id && (_nrt.houg += 2, _nrt.raig += 2, _nrt.kaih += 1, _nrt.saku += 1)), 70 == _nrr.ctype ? (_nru.houg = 2, _nru.tais = 3, _nru.kaih = 1, _nru.saku = 2, _nrv = true) : 72 == _nrr.ctype || 62 == _nrr.ctype ? (_nru.houg += 1, _nru.tais += 2, _nru.kaih += 1, _nru.saku += 2, _nrv = true) : 67 != _nrr.ctype && 78 != _nrr.ctype && 82 != _nrr.ctype && 88 != _nrr.ctype && 108 != _nrr.ctype && 112 != _nrr.ctype || (_nru.houg += 2, _nru.tais += 2, _nru.kaih += 2, _nru.saku += 2, _nrv = true), 0 == _nrv) return _nrt;
            var _nrw = _nrr.get_slotnums(368);
            return _nrt.add(_nru.multiply(_nrw)), _nrt;
        };
    },
    73973: (_nrx, _nry, _nrz) => {
        'use strict';
        var _ns0 = null;
        defineModule(_nry);
        Object.defineProperty(_nry, '__esModule', {
            'value': true
        }), _nry.getSlot369PersonalEffect = void 0;
        var _ns1 = _nrz(74496);
        _nry.getSlot369PersonalEffect = function(_ns2) {
            var _ns3 = null,
                _ns4 = new _ns1.SlotItemEffectModel(),
                _ns5 = new _ns1.SlotItemEffectModel(),
                _ns6 = false;
            if ('ゴトランド' == _ns2.yomi && (_ns5.houg = 5, _ns5.tais = 4, _ns5.kaih = 4, _ns5.saku = 3, _ns6 = true, 630 == _ns2.ship_id && (_ns4.houg += 3, _ns4.raig += 3, _ns4.kaih += 2, _ns4.saku += 2)), 70 == _ns2.ctype ? (_ns5.houg += 3, _ns5.tais += 3, _ns5.kaih += 2, _ns5.saku += 3, _ns6 = true) : 72 == _ns2.ctype || 62 == _ns2.ctype ? (_ns5.houg += 2, _ns5.tais += 2, _ns5.kaih += 1, _ns5.saku += 2, _ns6 = true) : 67 != _ns2.ctype && 78 != _ns2.ctype && 82 != _ns2.ctype && 88 != _ns2.ctype && 108 != _ns2.ctype && 112 != _ns2.ctype || (_ns5.houg += 2, _ns5.tais += 2, _ns5.kaih += 2, _ns5.saku += 2, _ns6 = true), 0 == _ns6) return _ns4;
            var _ns7 = _ns2.get_slotnums(369);
            return _ns4.add(_ns5.multiply(_ns7)), _ns4;
        };
    },
    21178: (_ns8, _ns9, _nsa) => {
        'use strict';
        var _nsb = null;
        defineModule(_ns9);
        Object.defineProperty(_ns9, '__esModule', {
            'value': true
        }), _ns9.getSlot370PersonalEffect = void 0;
        var _nsc = _nsa(74496);
        _ns9.getSlot370PersonalEffect = function(_nsd) {
            var _nse = null,
                _nsf = new _nsc.SlotItemEffectModel(),
                _nsg = new _nsc.SlotItemEffectModel(),
                _nsh = false;
            if ('ゴトランド' == _nsd.yomi && (_nsg.houg = 1, _nsg.tais = 3, _nsg.kaih = 1, _nsg.saku = 2, _nsh = true), 70 == _nsd.ctype ? (_nsg.houg += 1, _nsg.tais += 3, _nsg.kaih += 1, _nsg.saku += 1, _nsh = true) : 72 == _nsd.ctype || 62 == _nsd.ctype ? (_nsg.houg += 1, _nsg.tais += 2, _nsg.kaih += 1, _nsg.saku += 1, _nsh = true) : 67 != _nsd.ctype && 78 != _nsd.ctype && 82 != _nsd.ctype && 88 != _nsd.ctype && 108 != _nsd.ctype && 112 != _nsd.ctype || (_nsg.houg += 2, _nsg.tais += 3, _nsg.kaih += 2, _nsg.saku += 2, _nsh = true, 'ウォースパイト' == _nsd.yomi ? (_nsf.houg += 4, _nsf.kaih += 1, _nsf.saku += 1) : 'ヴァリアント' == _nsd.yomi && (_nsf.houg += 3, _nsf.kaih += 2, _nsf.saku += 1)), 0 == _nsh) return _nsf;
            var _nsi = _nsd.get_slotnums(370);
            return _nsf.add(_nsg.multiply(_nsi)), _nsf;
        };
    },
    5079: (_nsj, _nsk, _nsl) => {
        'use strict';
        var _nsm = null;
        defineModule(_nsk);
        Object.defineProperty(_nsk, '__esModule', {
            'value': true
        }), _nsk.getSlot371PersonalEffect = void 0;
        var _nsn = _nsl(74496);
        _nsk.getSlot371PersonalEffect = function(_nso) {
            var _nsp = null,
                _nsq = new _nsn.SlotItemEffectModel(),
                _nsr = new _nsn.SlotItemEffectModel(),
                _nss = false;
            if ('ゴトランド' == _nso.yomi && (_nsr.houg = 4, _nsr.tais = 2, _nsr.kaih = 3, _nsr.saku = 6, _nss = true, 630 == _nso.ship_id && (_nsq.houg += 2, _nsq.kaih += 2, _nsq.saku += 3)), 70 == _nso.ctype ? (_nsr.houg += 2, _nsr.tais += 1, _nsr.kaih += 2, _nsr.saku += 4, _nss = true) : 79 == _nso.ctype ? (_nsr.houg += 2, _nsr.kaih += 1, _nsr.saku += 3, _nss = true) : 67 != _nso.ctype && 78 != _nso.ctype && 82 != _nso.ctype && 88 != _nso.ctype && 108 != _nso.ctype && 112 != _nso.ctype || (_nsr.houg += 3, _nsr.tais += 1, _nsr.kaih += 2, _nsr.saku += 3, _nss = true, 88 == _nso.ctype && (_nsq.houg += 3, _nsq.kaih += 2, _nsq.saku += 2)), 0 == _nss) return _nsq;
            var _nst = _nso.get_slotnums(371);
            return _nsq.add(_nsr.multiply(_nst)), _nsq;
        };
    },
    95014: (_nsu, _nsv, _nsw) => {
        'use strict';
        var _nsx = null;
        defineModule(_nsv);
        Object.defineProperty(_nsv, '__esModule', {
            'value': true
        }), _nsv.getSlot372PersonalEffect = void 0;
        var _nsy = _nsw(74496);
        _nsv.getSlot372PersonalEffect = function(_nsz) {
            var _nt0 = null,
                _nt1 = new _nsy.SlotItemEffectModel(),
                _nt2 = false,
                _nt3 = new _nsy.SlotItemEffectModel();
            if ('しょうかく' == _nsz.yomi || 'ずいかく' == _nsz.yomi || 'たいほう' == _nsz.yomi ? (_nt3.houg += 1, _nt2 = true, _nt1.raig += 1) : 'じゅんよう' != _nsz.yomi && 'ひよう' != _nsz.yomi || (_nt3.houg += 1, _nt2 = true), 108 == _nsz.ship_id || 109 == _nsz.ship_id || 291 == _nsz.ship_id || 292 == _nsz.ship_id || 296 == _nsz.ship_id || 297 == _nsz.ship_id ? (_nt3.houg += 1, _nt2 = true) : 116 == _nsz.ship_id || 74 == _nsz.ship_id || 117 == _nsz.ship_id || 282 == _nsz.ship_id || 185 == _nsz.ship_id ? (_nt3.tais += 1, _nt2 = true) : 560 == _nsz.ship_id || 555 == _nsz.ship_id || 318 == _nsz.ship_id ? (_nt3.tais += 1, _nt2 = true, _nt1.raig += 1) : 508 == _nsz.ship_id || 509 == _nsz.ship_id ? (_nt3.houg += 1, _nt2 = true) : 883 != _nsz.ship_id && 888 != _nsz.ship_id || (_nt3.houg += 2, _nt3.tais += 1, _nt2 = true, _nt1.raig += 2), 0 == _nt2) return _nt1;
            var _nt4 = _nsz.get_slotnums(372);
            return _nt1.add(_nt3.multiply(_nt4)), _nt1;
        };
    },
    53099: (_nt5, _nt6, _nt7) => {
        'use strict';
        var _nt8 = null;
        defineModule(_nt6);
        Object.defineProperty(_nt6, '__esModule', {
            'value': true
        }), _nt6.getSlot373PersonalEffect = void 0;
        var _nt9 = _nt7(74496);
        _nt6.getSlot373PersonalEffect = function(_nta) {
            var _ntb = null,
                _ntc = new _nt9.SlotItemEffectModel(),
                _ntd = new _nt9.SlotItemEffectModel(),
                _nte = false;
            if ('しょうかく' == _nta.yomi ? (_ntd.houg += 2, _nte = true, _ntc.raig += 2, _ntc.kaih += 2) : 'ずいかく' == _nta.yomi ? (_ntd.houg += 1, _nte = true, _ntc.raig += 2, _ntc.kaih += 3) : 'たいほう' == _nta.yomi ? (_ntd.houg += 1, _nte = true, _ntc.raig += 2, _ntc.kaih += 2) : 'じゅんよう' != _nta.yomi && 'ひよう' != _nta.yomi || (_ntd.houg += 1, _nte = true, _ntc.raig += 1, _ntc.kaih += 1), 108 == _nta.ship_id || 109 == _nta.ship_id ? (_ntd.houg += 1, _nte = true) : 291 == _nta.ship_id || 292 == _nta.ship_id ? (_ntd.houg += 1, _nte = true, _ntc.raig += 1) : 296 == _nta.ship_id || 297 == _nta.ship_id ? (_ntd.houg += 1, _nte = true, _ntc.raig += 1, _ntc.kaih += 1) : 116 == _nta.ship_id || 74 == _nta.ship_id ? (_ntd.tais += 1, _nte = true) : 117 == _nta.ship_id || 282 == _nta.ship_id || 185 == _nta.ship_id ? (_ntd.houg += 1, _ntd.tais += 1, _nte = true, _ntc.raig += 1) : 560 == _nta.ship_id || 555 == _nta.ship_id || 318 == _nta.ship_id ? (_ntd.houg += 1, _ntd.tais += 2, _nte = true, _ntc.raig += 1, _ntc.kaih += 1) : 508 == _nta.ship_id || 509 == _nta.ship_id ? (_ntd.houg += 1, _nte = true, _ntc.raig += 2, _ntc.kaih += 2) : 888 == _nta.ship_id ? (_ntd.houg += 2, _ntd.tais += 2, _nte = true, _ntc.raig += 2, _ntc.kaih += 2) : 883 == _nta.ship_id && (_ntd.houg += 1, _ntd.tais += 2, _nte = true, _ntc.raig += 3, _ntc.kaih += 4), 0 == _nte) return _ntc;
            var _ntf = _nta.get_slotnums(373);
            return _ntc.add(_ntd.multiply(_ntf)), _ntc;
        };
    },
    76201: (_ntg, _nth, _nti) => {
        'use strict';
        var _ntj = null;
        defineModule(_nth);
        Object.defineProperty(_nth, '__esModule', {
            'value': true
        }), _nth.getSlot374PersonalEffect = void 0;
        var _ntk = _nti(74496);
        _nth.getSlot374PersonalEffect = function(_ntl) {
            var _ntm = null,
                _ntn = new _ntk.SlotItemEffectModel(),
                _nto = new _ntk.SlotItemEffectModel(),
                _ntp = false;
            if ('しょうかく' == _ntl.yomi ? (_nto.houg += 3, _ntp = true, _ntn.raig += 3, _ntn.kaih += 3) : 'ずいかく' == _ntl.yomi ? (_nto.houg += 2, _ntp = true, _ntn.raig += 3, _ntn.kaih += 4) : 'たいほう' == _ntl.yomi ? (_nto.houg += 2, _ntp = true, _ntn.raig += 3, _ntn.kaih += 2) : 'じゅんよう' != _ntl.yomi && 'ひよう' != _ntl.yomi || (_nto.houg += 1, _ntp = true, _ntn.raig += 2, _ntn.kaih += 2), 108 == _ntl.ship_id || 109 == _ntl.ship_id ? (_nto.houg += 1, _ntp = true, _ntn.raig += 1) : 291 == _ntl.ship_id || 292 == _ntl.ship_id ? (_nto.houg += 1, _nto.tais += 1, _ntp = true, _ntn.raig += 1) : 296 == _ntl.ship_id || 297 == _ntl.ship_id ? (_nto.houg += 1, _nto.tais += 1, _ntp = true, _ntn.raig += 1, _ntn.kaih += 1) : 116 == _ntl.ship_id || 74 == _ntl.ship_id ? (_nto.houg += 1, _nto.tais += 1, _ntp = true) : 117 == _ntl.ship_id || 282 == _ntl.ship_id || 185 == _ntl.ship_id ? (_nto.houg += 1, _nto.tais += 2, _ntp = true, _ntn.raig += 1, _ntn.kaih += 1) : 560 == _ntl.ship_id || 555 == _ntl.ship_id || 318 == _ntl.ship_id ? (_nto.houg += 1, _nto.tais += 3, _ntp = true, _ntn.raig += 1, _ntn.kaih += 2) : 508 == _ntl.ship_id || 509 == _ntl.ship_id ? (_nto.houg += 1, _nto.tais += 2, _ntp = true, _ntn.raig += 2, _ntn.kaih += 3) : 888 == _ntl.ship_id ? (_nto.houg += 3, _nto.tais += 3, _ntp = true, _ntn.raig += 2, _ntn.kaih += 3) : 883 == _ntl.ship_id && (_nto.houg += 2, _nto.tais += 3, _ntp = true, _ntn.raig += 3, _ntn.kaih += 5), 0 == _ntp) return _ntn;
            var _ntq = _ntl.get_slotnums(374);
            return _ntn.add(_nto.multiply(_ntq)), _ntn;
        };
    },
    24931: (_ntr, _nts, _ntt) => {
        'use strict';
        var _ntu = null;
        defineModule(_nts);
        Object.defineProperty(_nts, '__esModule', {
            'value': true
        }), _nts.getSlot375PersonalEffect = void 0;
        var _ntv = _ntt(74496);
        _nts.getSlot375PersonalEffect = function(_ntw) {
            var _ntx = null,
                _nty = new _ntv.SlotItemEffectModel(),
                _ntz = new _ntv.SlotItemEffectModel(),
                _nu0 = false;
            if (69 != _ntw.ctype && 83 != _ntw.ctype && 84 != _ntw.ctype && 105 != _ntw.ctype && 116 != _ntw.ctype && 118 != _ntw.ctype || (_ntz.tyku += 3, _ntz.houg += 3, _ntz.kaih += 3, _ntz.tais += 3, _nu0 = true), 'かが' == _ntw.yomi && (_ntz.tyku += 1, _ntz.houg += 1, _ntz.kaih += 1, _ntz.tais += 1, _nu0 = true), 0 == _nu0) return _nty;
            var _nu1 = _ntw.get_slotnums(375);
            return _nty.add(_ntz.multiply(_nu1)), _nty;
        };
    },
    60978: (_nu2, _nu3, _nu4) => {
        'use strict';
        var _nu5 = null;
        defineModule(_nu3);
        Object.defineProperty(_nu3, '__esModule', {
            'value': true
        }), _nu3.getSlot376PersonalEffect = void 0;
        var _nu6 = _nu4(74496);
        _nu3.getSlot376PersonalEffect = function(_nu7) {
            var _nu8 = null,
                _nu9 = new _nu6.SlotItemEffectModel(),
                _nua = new _nu6.SlotItemEffectModel(),
                _nub = false;
            if ('アメリカ' == _nu7.getCountryName() ? (_nua.houg += 2, _nua.raig += 4, _nub = true) : 67 == _nu7.ctype || 78 == _nu7.ctype || 82 == _nu7.ctype || 88 == _nu7.ctype || 108 == _nu7.ctype || 112 == _nu7.ctype ? (_nua.houg += 1, _nua.raig += 2, _nub = true) : 96 == _nu7.ctype && (_nua.houg += 1, _nua.raig += 1, _nub = true), 0 == _nub) return _nu9;
            var _nuc = _nu7.get_slotnums(376);
            return _nu9.add(_nua.multiply(_nuc)), _nu9;
        };
    },
    74312: (_nud, _nue, _nuf) => {
        'use strict';
        var _nug = null;
        defineModule(_nue);
        Object.defineProperty(_nue, '__esModule', {
            'value': true
        }), _nue.getSlot377PersonalEffect = void 0;
        var _nuh = _nuf(74496);
        _nue.getSlot377PersonalEffect = function(_nui) {
            var _nuj = null,
                _nuk = new _nuh.SlotItemEffectModel();
            return 'アメリカ' == _nui.getCountryName() ? (_nuk.tais += 2, _nuk.kaih += 1, 629 == _nui.ship_id && (_nuk.tais += 1, _nuk.kaih += 2)) : 67 != _nui.ctype && 78 != _nui.ctype && 82 != _nui.ctype && 88 != _nui.ctype && 108 != _nui.ctype && 112 != _nui.ctype && 96 != _nui.ctype || (_nuk.tais += 1, _nuk.kaih += 1), 651 != _nui.ship_id && 656 != _nui.ship_id || (_nuk.tais += 1, _nuk.kaih += 2), _nuk;
        };
    },
    54350: (_nul, _num, _nun) => {
        'use strict';
        var _nuo = null;
        defineModule(_num);
        Object.defineProperty(_num, '__esModule', {
            'value': true
        }), _num.getSlot378PersonalEffect = void 0;
        var _nup = _nun(74496);
        _num.getSlot378PersonalEffect = function(_nuq) {
            var _nur = null,
                _nus = new _nup.SlotItemEffectModel();
            return 'アメリカ' == _nuq.getCountryName() ? (_nus.tais += 3, _nus.kaih += 1, 629 == _nuq.ship_id && (_nus.tais += 1, _nus.kaih += 1)) : 67 == _nuq.ctype || 78 == _nuq.ctype || 82 == _nuq.ctype || 88 == _nuq.ctype || 108 == _nuq.ctype || 112 == _nuq.ctype ? (_nus.tais += 2, _nus.kaih += 1) : 96 == _nuq.ctype && (_nus.tais += 1, _nus.kaih += 1), 651 != _nuq.ship_id && 656 != _nuq.ship_id || (_nus.tais += 1, _nus.kaih += 1), _nus;
        };
    },
    26262: function(_nut, _nuu, _nuv) {
        'use strict';
        var _nuw = null;
        var _nux = this && this.__importDefault || function(_nuy) {
            var _nuz = null;
            return _nuy && _nuy.__esModule ? _nuy : {
                'default': _nuy
            };
        };
        defineModule(_nuu);
        Object.defineProperty(_nuu, '__esModule', {
            'value': true
        }), _nuu.getSlot379PersonalEffect = void 0;
        var _nv0 = _nuv(74496),
            _nv1 = _nux(_nuv(18622));
        _nuu.getSlot379PersonalEffect = function(_nv2) {
            var _nv3 = null,
                _nv4 = new _nv0.SlotItemEffectModel(),
                _nv5 = false,
                _nv6 = new _nv0.SlotItemEffectModel();
            if (1 == _nv2.stype ? (_nv6.tyku += 2, _nv6.houg += 1, _nv5 = true) : 21 != _nv2.stype && 16 != _nv2.stype || (_nv6.tyku += 1, _nv6.houg += 1, _nv5 = true), 66 == _nv2.ctype || 28 == _nv2.ctype ? (_nv6.houg += 1, _nv6.tyku += 2, _nv5 = true) : 101 == _nv2.ctype && (_nv6.tyku += 2, _nv6.houg += 1, _nv4.tyku += 2, _nv4.houg += 2, _nv5 = true), 'ゆら' == _nv2.yomi || 'なか' == _nv2.yomi || 'きぬ' == _nv2.yomi || 'いすず' == _nv2.yomi ? (_nv6.houg += 2, _nv5 = true) : 'おおい' != _nv2.yomi && 'きたかみ' != _nv2.yomi || (_nv6.tyku += 2, _nv6.houg += 2, _nv5 = true), 'ゆら' != _nv2.yomi && 'なか' != _nv2.yomi && 'きぬ' != _nv2.yomi && 'いすず' != _nv2.yomi && 'ゆうばり' != _nv2.yomi || (_nv6.tais += 1, _nv5 = true), 'てんりゅう' != _nv2.yomi && 'たつた' != _nv2.yomi && 'ゆうばり' != _nv2.yomi || (_nv6.houg += 1, _nv5 = true), 488 == _nv2.ship_id ? (_nv6.tyku += 4, _nv5 = true) : 220 == _nv2.ship_id ? (_nv6.tyku += 3, _nv5 = true) : 23 == _nv2.ship_id ? (_nv6.tyku += 2, _nv5 = true) : 160 == _nv2.ship_id || 487 == _nv2.ship_id || 141 == _nv2.ship_id ? (_nv6.tyku += 3, _nv5 = true) : 224 == _nv2.ship_id || 289 == _nv2.ship_id || 219 == _nv2.ship_id || 56 == _nv2.ship_id || 113 == _nv2.ship_id || 22 == _nv2.ship_id ? (_nv6.tyku += 2, _nv5 = true) : 651 != _nv2.ship_id && 656 != _nv2.ship_id || (_nv6.tyku += 3, _nv6.houg += 3, 656 == _nv2.ship_id && (_nv6.kaih += 3, _nv6.tais += 2), _nv5 = true), 488 != _nv2.ship_id && 160 != _nv2.ship_id && 487 != _nv2.ship_id && 141 != _nv2.ship_id || (_nv6.tais += 1, _nv5 = true), 477 != _nv2.ship_id && 478 != _nv2.ship_id && 624 != _nv2.ship_id || (_nv6.tais += 2, _nv5 = true), 477 != _nv2.ship_id && 478 != _nv2.ship_id && 624 != _nv2.ship_id && 622 != _nv2.ship_id || (_nv6.tyku += 2, _nv5 = true), 652 != _nv2.ship_id && 657 != _nv2.ship_id && 547 != _nv2.ship_id && 146 != _nv2.ship_id || (_nv4.houg += 2), 652 != _nv2.ship_id && 657 != _nv2.ship_id && 547 != _nv2.ship_id && 146 != _nv2.ship_id || (_nv4.tyku += 2), _nv5) {
                var _nv7 = _nv2.get_slotnums(379);
                _nv4.add(_nv6.multiply(_nv7));
            }
            var _nv8 = new _nv0.SlotItemEffectModel(),
                _nv9 = false;
            16 == _nv2.stype || 3 == _nv2.stype || 4 == _nv2.stype || 21 == _nv2.stype ? (_nv8.houg += 1, _nv8.kaih += 2, _nv9 = true) : 1 == _nv2.stype && (_nv8.houg += 1, _nv8.kaih += 4, _nv9 = true), 66 == _nv2.ctype || 28 == _nv2.ctype || 21 == _nv2.ctype || 34 == _nv2.ctype ? (_nv8.houg += 2, _nv8.kaih += 3, _nv9 = true) : 101 == _nv2.ctype && (_nv8.houg += 4, _nv8.kaih += 3, _nv9 = true), 488 == _nv2.ship_id || 651 == _nv2.ship_id || 656 == _nv2.ship_id ? (_nv8.houg += 2, _nv8.kaih += 2, _nv9 = true) : 487 == _nv2.ship_id || 160 == _nv2.ship_id || 141 == _nv2.ship_id || 118 == _nv2.ship_id || 119 == _nv2.ship_id ? (_nv8.houg += 1, _nv8.kaih += 1, _nv9 = true) : 652 != _nv2.ship_id && 657 != _nv2.ship_id && 547 != _nv2.ship_id && 146 != _nv2.ship_id || (_nv8.houg += 1, _nv8.kaih += 1, _nv9 = true);
            var _nva = new _nv0.SlotItemEffectModel(),
                _nvb = false;
            if (656 == _nv2.ship_id && (_nva.tyku += 3, _nva.kaih += 2, _nvb = true), _nv9 || _nvb) {
                for (var _nvc = 0, _nvd = 0, _nve = 0, _nvf = _nv2.have_slot_ids(); _nve < _nvf.length; _nve++) {
                    var _nvg = _nvf[_nve],
                        _nvh = _nv1.default.model.slot.getMst(_nvg),
                        _nvi = _nvh.equipType;
                    12 != _nvi && 13 != _nvi || (_nvh.sakuteki >= 5 && (_nvc += _nv2.get_slotnums(parseInt(_nvg))), _nvh.taiku >= 2 && (_nvd += _nv2.get_slotnums(parseInt(_nvg))));
                }
                _nv9 && _nvc > 0 && _nv4.add(_nv8), _nvb && _nvd > 0 && _nv4.add(_nva);
            }
            return _nv4;
        };
    },
    45530: function(_nvj, _nvk, _nvl) {
        'use strict';
        var _nvm = null;
        var _nvn = this && this.__importDefault || function(_nvo) {
            var _nvp = null;
            return _nvo && _nvo.__esModule ? _nvo : {
                'default': _nvo
            };
        };
        defineModule(_nvk);
        Object.defineProperty(_nvk, '__esModule', {
            'value': true
        }), _nvk.getSlot380PersonalEffect = void 0;
        var _nvq = _nvl(74496),
            _nvr = _nvn(_nvl(18622));
        _nvk.getSlot380PersonalEffect = function(_nvs) {
            var _nvt = null,
                _nvu = new _nvq.SlotItemEffectModel(),
                _nvv = false,
                _nvw = new _nvq.SlotItemEffectModel();
            if (21 != _nvs.stype && 16 != _nvs.stype || (_nvw.tyku += 2, _nvw.houg += 1, _nvv = true), 101 == _nvs.ctype && (_nvw.tyku += 2, _nvw.houg += 1, _nvv = true, _nvu.tyku += 2, _nvu.houg += 2), 'ゆら' == _nvs.yomi || 'なか' == _nvs.yomi || 'きぬ' == _nvs.yomi || 'いすず' == _nvs.yomi ? (_nvw.houg += 2, _nvv = true) : 'おおい' != _nvs.yomi && 'きたかみ' != _nvs.yomi || (_nvw.tyku += 2, _nvw.houg += 3, _nvv = true), 'ゆら' != _nvs.yomi && 'なか' != _nvs.yomi && 'きぬ' != _nvs.yomi && 'いすず' != _nvs.yomi && 'ゆうばり' != _nvs.yomi || (_nvw.tais += 1, _nvv = true), 'てんりゅう' != _nvs.yomi && 'たつた' != _nvs.yomi && 'ゆうばり' != _nvs.yomi || (_nvw.houg += 1, _nvv = true), 488 == _nvs.ship_id ? (_nvw.tyku += 4, _nvv = true) : 220 == _nvs.ship_id ? (_nvw.tyku += 3, _nvv = true) : 23 == _nvs.ship_id ? (_nvw.tyku += 2, _nvv = true) : 160 == _nvs.ship_id || 487 == _nvs.ship_id || 141 == _nvs.ship_id ? (_nvw.tyku += 3, _nvv = true) : 224 == _nvs.ship_id || 289 == _nvs.ship_id || 219 == _nvs.ship_id || 56 == _nvs.ship_id || 113 == _nvs.ship_id || 22 == _nvs.ship_id ? (_nvw.tyku += 2, _nvv = true) : 651 == _nvs.ship_id || 656 == _nvs.ship_id ? (_nvw.tyku += 3, _nvw.houg += 3, _nvv = true) : 407 != _nvs.ship_id && 665 != _nvs.ship_id || (_nvw.houg += 2, _nvw.tyku += 2, _nvv = true, _nvu.houg += 1, _nvu.tyku += 1, _nvu.kaih += 2), 488 != _nvs.ship_id && 160 != _nvs.ship_id && 487 != _nvs.ship_id && 141 != _nvs.ship_id || (_nvw.tais += 1, _nvv = true), 477 != _nvs.ship_id && 478 != _nvs.ship_id && 624 != _nvs.ship_id || (_nvw.tais += 2, _nvv = true), 477 != _nvs.ship_id && 478 != _nvs.ship_id && 624 != _nvs.ship_id && 622 != _nvs.ship_id || (_nvw.tyku += 2, _nvv = true), 652 != _nvs.ship_id && 657 != _nvs.ship_id || (_nvw.houg += 3, _nvv = true), 547 != _nvs.ship_id && 146 != _nvs.ship_id || (_nvu.houg += 2), 652 != _nvs.ship_id && 657 != _nvs.ship_id && 547 != _nvs.ship_id && 146 != _nvs.ship_id || (_nvu.tyku += 2), _nvv) {
                var _nvx = _nvs.get_slotnums(380);
                _nvu.add(_nvw.multiply(_nvx));
            }
            var _nvy = new _nvq.SlotItemEffectModel(),
                _nvz = false,
                _nw0 = new _nvq.SlotItemEffectModel(),
                _nw1 = false,
                _nw2 = false;
            if (16 != _nvs.stype && 3 != _nvs.stype && 4 != _nvs.stype && 21 != _nvs.stype || (_nvy.houg += 2, _nvy.kaih += 1, _nvz = true), 101 == _nvs.ctype && (_nvy.houg += 4, _nvy.kaih += 3, _nvz = true), 488 != _nvs.ship_id && 487 != _nvs.ship_id && 160 != _nvs.ship_id && 141 != _nvs.ship_id && 118 != _nvs.ship_id && 119 != _nvs.ship_id && 651 != _nvs.ship_id && 656 != _nvs.ship_id || (_nvy.houg += 1, _nvy.kaih += 2, _nvz = true), 652 == _nvs.ship_id || 657 == _nvs.ship_id || 547 == _nvs.ship_id || 146 == _nvs.ship_id ? (_nvy.houg += 1, _nvy.kaih += 3, _nvz = true) : 407 != _nvs.ship_id && 665 != _nvs.ship_id || (_nw2 = true, _nvz = true, _nvy.houg += 2, _nvy.kaih += 1, _nw1 = true, _nw0.houg += 1, _nw0.tyku += 2, _nw0.kaih += 1), _nvz || _nw2) {
                for (var _nw3 = 0, _nw4 = 0, _nw5 = 0, _nw6 = _nvs.have_slot_ids(); _nw5 < _nw6.length; _nw5++) {
                    var _nw7 = _nw6[_nw5],
                        _nw8 = _nvr.default.model.slot.getMst(_nw7),
                        _nw9 = _nw8.equipType;
                    12 == _nw9 || 13 == _nw9 ? _nw8.sakuteki >= 5 && (_nw3 += _nvs.get_slotnums(parseInt(_nw7))) : 21 == _nw9 && (_nw4 += _nvs.get_slotnums(parseInt(_nw7)));
                }
                _nvz && _nw3 > 0 && _nvu.add(_nvy), _nw1 && _nw4 > 0 && _nvu.add(_nw0);
            }
            return _nvu;
        };
    },
    44053: (_nwa, _nwb, _nwc) => {
        'use strict';
        var _nwd = null;
        defineModule(_nwb);
        Object.defineProperty(_nwb, '__esModule', {
            'value': true
        }), _nwb.getSlot381PersonalEffect = void 0;
        var _nwe = _nwc(74496);
        _nwb.getSlot381PersonalEffect = function(_nwf) {
            var _nwg = null,
                _nwh = new _nwe.SlotItemEffectModel(),
                _nwi = false,
                _nwj = new _nwe.SlotItemEffectModel(),
                _nwk = 0;
            if ('アメリカ' == _nwf.getCountryName() && (_nwj.houg += 1, 102 == _nwf.ctype && (_nwj.houg += 1), _nwi = true, _nwk = 1), 0 == _nwi) return _nwh;
            var _nwl = _nwf.get_slotnums(381);
            if (_nwh.add(_nwj.multiply(_nwl)), 0 == _nwk) return _nwh;
            var _nwm = _nwf.get_each_level_nums(381),
                _nwn = 0;
            return _nwm.map(function(_nwo, _nwp) {
                _nwp >= 6 && (_nwn += _nwo);
            }), 1 == _nwk && (_nwh.houg += 1 * _nwn), _nwh;
        };
    },
    65441: function(_nwq, _nwr, _nws) {
        'use strict';
        var _nwt = null;
        var _nwu = this && this.__importDefault || function(_nwv) {
            var _nww = null;
            return _nwv && _nwv.__esModule ? _nwv : {
                'default': _nwv
            };
        };
        defineModule(_nwr);
        Object.defineProperty(_nwr, '__esModule', {
            'value': true
        }), _nwr.getSlot382PersonalEffect = void 0;
        var _nwx = _nws(74496),
            _nwy = _nwu(_nws(18622));
        _nwr.getSlot382PersonalEffect = function(_nwz) {
            var _nx0 = null,
                _nx1 = new _nwx.SlotItemEffectModel(),
                _nx2 = false,
                _nx3 = new _nwx.SlotItemEffectModel(),
                _nx4 = false,
                _nx5 = new _nwx.SlotItemEffectModel(),
                _nx6 = new _nwx.SlotItemEffectModel(),
                _nx7 = {},
                _nx8 = 2,
                _nx9 = [];
            1 == _nwz.stype && (_nx3.tyku += 2, _nx3.kaih += 2, _nx3.tais += 1, _nx2 = true, _nx5.houg += 2, _nx5.kaih += 3, _nx6.tyku += 2, _nx6.kaih += 3, _nx4 = true, _nx8 = 1), 66 != _nwz.ctype && 28 != _nwz.ctype && 101 != _nwz.ctype || (_nx3.tyku += 2, _nx3.kaih += 1, _nx2 = true, _nx5.houg += 1, _nx5.kaih += 2, _nx6.tyku += 2, _nx6.kaih += 2, _nx4 = true, _nx8 = 1), 'ゆら' != _nwz.yomi && 'なか' != _nwz.yomi && 'きぬ' != _nwz.yomi || (_nx3.tyku += 1, _nx2 = true), 488 == _nwz.ship_id || 220 == _nwz.ship_id ? (_nx3.kaih += 1, _nx2 = true, 488 == _nwz.ship_id && (_nx5.houg += 1, _nx5.kaih += 1, _nx6.tyku += 2, _nx6.kaih += 2, _nx4 = true, _nx8 = 1)) : 160 == _nwz.ship_id || 224 == _nwz.ship_id ? (_nx3.kaih += 1, _nx2 = true, 160 == _nwz.ship_id && (_nx5.houg += 1, _nx5.kaih += 1, _nx6.tyku += 2, _nx6.kaih += 2, _nx4 = true)) : 487 == _nwz.ship_id || 289 == _nwz.ship_id ? (_nx3.kaih += 1, _nx2 = true, 487 == _nwz.ship_id && (_nx5.houg += 1, _nx5.kaih += 1, _nx6.tyku += 2, _nx6.kaih += 2, _nx4 = true)) : 656 == _nwz.ship_id ? (_nx3.tyku += 3, _nx3.kaih += 2, _nx2 = true, _nx5.houg += 2, _nx5.kaih += 2, _nx6.tyku += 3, _nx6.kaih += 2, _nx4 = true, _nx8 = 1) : 145 == _nwz.ship_id || 961 == _nwz.ship_id ? _nx8 = 1 : 979 == _nwz.ship_id && (_nx3.houg += 1, _nx3.tyku += 1, _nx3.houm += 1, _nx3.kaih += 1, _nx7[509] = new _nwx.SlotItemEffectModel(), _nx7[509].houm += 1, _nx2 = true, _nx9[1] = 1);
            for (var _nxa = 0, _nxb = 0, _nxc = 0, _nxd = _nwz.have_slot_ids(); _nxc < _nxd.length; _nxc++) {
                var _nxe = _nxd[_nxc],
                    _nxf = _nwy.default.model.slot.getMst(_nxe),
                    _nxg = _nxf.equipType;
                12 != _nxg && 13 != _nxg || (_nxf.sakuteki >= 5 && (_nxa += _nwz.get_slotnums(parseInt(_nxe))), _nxf.taiku >= 2 && (_nxb += _nwz.get_slotnums(parseInt(_nxe))));
            }
            for (var _nxh = [], _nxi = function(_nxj) {
                    var _nxk = null;
                    if (null == _nwz.have_slots_dict[_nxj]) return 'continue';
                    var _nxl = _nwz.get_each_level_nums(_nxj);
                    null == _nxh[_nxj] && (_nxh[_nxj] = []), _nxl.forEach(function(_nxm, _nxn) {
                        var _nxo = null;
                        for (var _nxp = 1; _nxp <= _nwz.SLOT_LEVEL_MAX; _nxp++) null == _nxh[_nxj][_nxp] && (_nxh[_nxj][_nxp] = 0), _nxn >= _nxp && (_nxh[_nxj][_nxp] += _nxm);
                    });
                }, _nxq = 0, _nxr = [509]; _nxq < _nxr.length; _nxq++) {
                _nxi(_nxr[_nxq]);
            }
            var _nxs = 0,
                _nxt = 0,
                _nxu = 0,
                _nxv = 0,
                _nxw = 0,
                _nxx = 0,
                _nxy = 0,
                _nxz = 0,
                _ny0 = 0,
                _ny1 = 0;
            null != _nxh[509] && (_nxs = _nxh[509][1], _nxt = _nxh[509][2], _nxu = _nxh[509][3], _nxv = _nxh[509][4], _nxw = _nxh[509][5], _nxx = _nxh[509][6], _nxy = _nxh[509][7], _nxz = _nxh[509][8], _ny0 = _nxh[509][9], _ny1 = _nxh[509][10], null != _nx9[1] && (_nxu >= 1 && (_nx1.kaih += 1 * _nxu), _nxw >= 1 && (_nx1.houg += 1 * _nxw), _nxy >= 1 && (_nx1.tyku += 2 * _nxy), _ny0 >= 1 && (_nx1.houm += 1 * _ny0), _ny1 >= 1 && (_nx1.houg += 1 * _ny1)), 1 == _nx8 ? (_nxs >= 1 && (_nx1.tyku += 1 * _nxs), _nxt >= 1 && (_nx1.kaih += 2 * _nxt), _nxv >= 1 && (_nx1.houg += 1 * _nxv), _nxx >= 1 && (_nx1.tyku += 1 * _nxx), _nxz >= 1 && (_nx1.houm += 1 * _nxz), _ny1 >= 1 && (_nx1.tyku += 1 * _ny1)) : 2 == _nx8 && (_nxt >= 1 && (_nx1.tyku += 1 * _nxt), _nxv >= 1 && (_nx1.kaih += 2 * _nxv), _nxx >= 1 && (_nx1.houg += 1 * _nxx), _nxz >= 1 && (_nx1.tyku += 1 * _nxz), _ny1 >= 1 && (_nx1.houm += 1 * _ny1)));
            var _ny2 = _nwz.get_slotnums(509),
                _ny3 = _ny2 + _nwz.get_slotnums(382);
            return _nx2 && (_nx1.add(_nx3.multiply(_ny3)), Object.keys(_nx7).forEach(function(_ny4) {
                var _ny5 = null,
                    _ny6 = parseInt(_ny4);
                if (null != _nwz.have_slots_dict[_ny6]) {
                    var _ny7 = _nwz.get_slotnums(_ny6);
                    _nx1.add(_nx7[_ny6].multiply(_ny7));
                }
            })), 3 != _nwz.stype && 21 != _nwz.stype && 4 != _nwz.stype || _nxt >= 1 && (_nxa > 0 && (_nx1.houg += 1, _nx1.kaih += 1), _nxb > 0 && (_nx1.tyku += 2, _nx1.kaih += 1)), 145 == _nwz.ship_id ? _nxt >= 1 && (_nxa > 0 && (_nx1.houg += 1, _nx1.tyku += 1, _nx1.kaih += 2), _nxb > 0 && (_nx1.tyku += 4, _nx1.kaih += 2)) : 961 != _nwz.ship_id && 979 != _nwz.ship_id || _ny2 > 0 && (_nxa > 0 && (_nx1.houg += 2, _nx1.tyku += 2, _nx1.kaih += 3), _nxb > 0 && (_nx1.houg += 1, _nx1.tyku += 5, _nx1.kaih += 3)), _nx4 && _nxa > 0 && _nx1.add(_nx5), _nx4 && _nxb > 0 && _nx1.add(_nx6), _nx1;
        };
    },
    33258: (_ny8, _ny9, _nya) => {
        'use strict';
        var _nyb = null;
        defineModule(_ny9);
        Object.defineProperty(_ny9, '__esModule', {
            'value': true
        }), _ny9.getSlot383PersonalEffect = void 0;
        var _nyc = _nya(74496);
        _ny9.getSlot383PersonalEffect = function(_nyd) {
            var _nye = null,
                _nyf = new _nyc.SlotItemEffectModel(),
                _nyg = false,
                _nyh = new _nyc.SlotItemEffectModel(),
                _nyi = _nyd.get_each_level_over_nums([383]).slot[383];
            if (44 == _nyd.ctype && (_nyh.raig += 2, _nyg = true, _nyi[4] > 0 && (_nyf.raig += 1), _nyi[6] > 0 && (_nyf.houm += 1)), 'い58' == _nyd.yomi && (_nyh.raig += 1, _nyg = true), 636 == _nyd.ship_id ? (_nyh.raig += 3, _nyg = true) : 607 == _nyd.ship_id && (_nyh.raig += 4, _nyg = true), _nyi[8] > 0 && (_nyf.raig += 1), _nyi[10] > 0 && (_nyf.houm += 1), 'い58' != _nyd.yomi && 'い47' != _nyd.yomi || _nyi[5] > 0 && (_nyf.houm += 1), 0 == _nyg) return _nyf;
            var _nyj = _nyd.get_slotnums(383);
            return _nyf.add(_nyh.multiply(_nyj)), _nyf;
        };
    },
    92168: (_nyk, _nyl, _nym) => {
        'use strict';
        var _nyn = null;
        defineModule(_nyl);
        Object.defineProperty(_nyl, '__esModule', {
            'value': true
        }), _nyl.getSlot384PersonalEffect = void 0;
        var _nyo = _nym(74496);
        _nyl.getSlot384PersonalEffect = function(_nyp) {
            var _nyq = null,
                _nyr = new _nyo.SlotItemEffectModel(),
                _nys = false,
                _nyt = new _nyo.SlotItemEffectModel();
            44 == _nyp.ctype && (_nyt.kaih += 3, _nys = true), 'い58' == _nyp.yomi && (_nyt.kaih += 2, _nys = true), 636 == _nyp.ship_id ? (_nyt.kaih += 3, _nys = true) : 607 == _nyp.ship_id && (_nyt.kaih += 4, _nys = true);
            var _nyu = _nyp.get_slotnums(384);
            _nys && _nyr.add(_nyt.multiply(_nyu));
            var _nyv = _nyu,
                _nyw = _nyp.get_slotnums(213),
                _nyx = _nyp.get_slotnums(214),
                _nyy = _nyp.get_slotnums(383);
            return _nyv > 0 && _nyw + _nyx + _nyy > 0 && (_nyr.raig += 3, _nyr.kaih += 2), _nyr;
        };
    },
    85975: (_nyz, _nz0, _nz1) => {
        'use strict';
        var _nz2 = null;
        defineModule(_nz0);
        Object.defineProperty(_nz0, '__esModule', {
            'value': true
        }), _nz0.getSlot385PersonalEffect = void 0;
        var _nz3 = _nz1(74496);
        _nz0.getSlot385PersonalEffect = function(_nz4) {
            var _nz5 = null,
                _nz6 = new _nz3.SlotItemEffectModel(),
                _nz7 = false,
                _nz8 = new _nz3.SlotItemEffectModel(),
                _nz9 = 0;
            if ('アメリカ' == _nz4.getCountryName() && (_nz8.houg += 1, 102 == _nz4.ctype || 107 == _nz4.ctype ? (_nz8.houg += 1, _nz8.souk += 1) : 93 == _nz4.ctype && (_nz8.houg += 1), _nz7 = true, _nz9 = 1), 8 == _nz4.stype && (_nz8.houg += 1, _nz7 = true), 0 == _nz7) return _nz6;
            var _nza = _nz4.get_slotnums(385);
            if (_nz6.add(_nz8.multiply(_nza)), 0 == _nz9) return _nz6;
            var _nzb = _nz4.get_each_level_nums(385),
                _nzc = 0;
            return _nzb.forEach(function(_nzd, _nze) {
                _nze >= 6 && (_nzc += _nzd);
            }), 1 == _nz9 && (_nz6.houg += 1 * _nzc, _nz6.souk += 1 * _nzb[10]), _nz6;
        };
    },
    98467: (_nzf, _nzg, _nzh) => {
        'use strict';
        var _nzi = null;
        defineModule(_nzg);
        Object.defineProperty(_nzg, '__esModule', {
            'value': true
        }), _nzg.getSlot386PersonalEffect = void 0;
        var _nzj = _nzh(74496);
        _nzg.getSlot386PersonalEffect = function(_nzk) {
            var _nzl = null,
                _nzm = new _nzj.SlotItemEffectModel(),
                _nzn = false,
                _nzo = new _nzj.SlotItemEffectModel(),
                _nzp = 0;
            if ('アメリカ' == _nzk.getCountryName() && (_nzo.houg += 1, _nzn = true, _nzp = 1), 0 == _nzn) return _nzm;
            var _nzq = _nzk.get_slotnums(386);
            if (_nzm.add(_nzo.multiply(_nzq)), 0 == _nzp) return _nzm;
            var _nzr = _nzk.get_each_level_nums(386),
                _nzs = 0,
                _nzt = 0;
            return _nzr.forEach(function(_nzu, _nzv) {
                _nzv >= 2 && (_nzs += _nzu), _nzv >= 7 && (_nzt += _nzu);
            }), 1 == _nzp && (_nzm.houg += 1 * _nzs, _nzm.houg += 1 * _nzt), _nzm;
        };
    },
    88348: (_nzw, _nzx, _nzy) => {
        'use strict';
        var _nzz = null;
        defineModule(_nzx);
        Object.defineProperty(_nzx, '__esModule', {
            'value': true
        }), _nzx.getSlot387PersonalEffect = void 0;
        var _o00 = _nzy(74496);
        _nzx.getSlot387PersonalEffect = function(_o01) {
            var _o02 = null,
                _o03 = new _o00.SlotItemEffectModel(),
                _o04 = false,
                _o05 = new _o00.SlotItemEffectModel(),
                _o06 = 0;
            if ('アメリカ' == _o01.getCountryName() && (_o05.houg += 1, _o04 = true, _o06 = 1), 0 == _o04) return _o03;
            var _o07 = _o01.get_slotnums(387);
            if (_o03.add(_o05.multiply(_o07)), 0 == _o06) return _o03;
            var _o08 = _o01.get_each_level_nums(387),
                _o09 = 0,
                _o0a = 0;
            return _o08.forEach(function(_o0b, _o0c) {
                _o0c >= 2 && (_o09 += _o0b), _o0c >= 7 && (_o0a += _o0b);
            }), 1 == _o06 && (_o03.houg += 1 * _o09, _o03.houg += 1 * _o0a), _o03;
        };
    },
    21097: (_o0d, _o0e, _o0f) => {
        'use strict';
        var _o0g = null;
        defineModule(_o0e);
        Object.defineProperty(_o0e, '__esModule', {
            'value': true
        }), _o0e.getSlot389PersonalEffect = void 0;
        var _o0h = _o0f(74496);
        _o0e.getSlot389PersonalEffect = function(_o0i) {
            var _o0j = null,
                _o0k = new _o0h.SlotItemEffectModel(),
                _o0l = false,
                _o0m = new _o0h.SlotItemEffectModel();
            if (594 == _o0i.ship_id || 599 == _o0i.ship_id) _o0m.houg += 2, _o0m.kaih += 2, _o0l = true;
            else {
                if (698 == _o0i.ship_id || 610 == _o0i.ship_id) _o0m.houg += 3, _o0m.kaih += 2, _o0l = true;
                else 646 == _o0i.ship_id && (_o0m.houg += 4, _o0m.tais += 4, _o0m.kaih += 3, _o0l = true, _o0i.get_type3_nums(25) > 0 && (_o0k.houg += 3, _o0k.tais += 6), _o0i.get_slotnums(326) + _o0i.get_slotnums(327) > 0 && (_o0k.houg += 5, _o0k.tais += 4));
            }
            if ('アメリカ' == _o0i.getCountryName() && (_o0m.houg += 2, _o0m.tais += 3, _o0m.kaih += 1, _o0l = true), 0 == _o0l) return _o0k;
            var _o0n = _o0i.get_slotnums(389);
            return _o0k.add(_o0m.multiply(_o0n)), _o0k;
        };
    },
    43607: (_o0o, _o0p, _o0q) => {
        'use strict';
        var _o0r = null;
        defineModule(_o0p);
        Object.defineProperty(_o0p, '__esModule', {
            'value': true
        }), _o0p.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _o0s = _o0q(74496);
        _o0p.getSlot38cmFourBarrelGunPersonalEffect = function(_o0t) {
            var _o0u = null,
                _o0v = new _o0s.SlotItemEffectModel(),
                _o0w = _o0t.get_slotnums(245),
                _o0x = _o0t.get_slotnums(246),
                _o0y = _o0t.get_slotnums(468),
                _o0z = _o0w + _o0x + _o0y,
                _o10 = 0,
                _o11 = 0;
            if (79 != _o0t.ctype) return _o0v;
            _o0v.houg += 2 * _o0z, _o0v.houm += 1 * _o0z, _o0y >= 1 && (_o0v.houg += 1 * _o0y, _o11 = 1), _o10 = 1;
            var _o12 = _o0t.get_slotnums(247),
                _o13 = _o0t.get_slotnums(471) + _o0t.get_slotnums(538);
            if (1 == _o10 && _o12 >= 1 && (_o0v.kaih += 2 * _o12, _o0v.houg += 2 * _o12, _o0v.houm += 2 * _o12), 0 == _o11) return _o0v;
            var _o14 = _o0t.haveSlotLevelNumOver(468),
                _o15 = _o0t.haveSlotLevelNumOver(471),
                _o16 = _o0t.haveSlotLevelNumOver(538);
            if (1 == _o11 && _o0y > 0) {
                var _o17 = _o14[4],
                    _o18 = _o14[8],
                    _o19 = _o14[9],
                    _o1a = _o14[10],
                    _o1b = _o15[7],
                    _o1c = _o15[9];
                _o17 >= 1 && (_o0v.houg += 1 * _o17, _o0v.houm += 1 * _o17), _o18 >= 1 && (_o0v.houg += 1 * _o18, _o0v.houm += 1 * _o18), _o19 >= 1 && (_o0v.tyku += 1 * _o19, _o13 >= 1 && (_o0v.houm += 2 * _o13), _o12 >= 1 && (_o0v.kaih += 1 * _o12, _o0v.houm += 1 * _o12)), _o1a >= 1 && (_o0v.houm += 1 * _o1a, _o13 >= 1 && (_o0v.houm += 1 * _o13, _o16[7] >= 1 && (_o0v.houm += 1 * _o16[7]), _o16[8] >= 1 && (_o0v.kaih += 1 * _o16[8]), _o16[9] >= 1 && (_o0v.houm += 1 * _o16[9]), _o1b >= 1 && (_o0v.houm += 1 * _o1b), _o1c >= 1 && (_o0v.kaih += 1 * _o1c)), _o12 >= 1 && (_o0v.houg += 1 * _o12, _o0v.kaih += 1 * _o12, _o0v.houm += 1 * _o12));
            }
            return _o0v;
        };
    },
    2380: (_o1d, _o1e, _o1f) => {
        'use strict';
        var _o1g = null;
        defineModule(_o1e);
        Object.defineProperty(_o1e, '__esModule', {
            'value': true
        }), _o1e.getSlot38cmTwinGunPersonalEffect = void 0;
        var _o1h = _o1f(74496);
        _o1e.getSlot38cmTwinGunPersonalEffect = function(_o1i) {
            var _o1j = null,
                _o1k = new _o1h.SlotItemEffectModel(),
                _o1l = false,
                _o1m = new _o1h.SlotItemEffectModel(),
                _o1n = 0,
                _o1o = _o1i.get_slotnums(76),
                _o1p = _o1i.get_slotnums(114),
                _o1q = _o1i.get_slotnums(124);
            if ('ドイツ' == _o1i.getCountryName() && (_o1m.houg += 1, _o1l = true, _o1n = 1, _o1q >= 1 && (_o1k.kaih += 1 * _o1q)), 0 == _o1l) return _o1k;
            var _o1r = _o1o + _o1p;
            _o1k.add(_o1m.multiply(_o1r));
            var _o1s = _o1i.have_level_num_over_dict[114];
            return 1 == _o1n && null != _o1s && (_o1s[7] >= 1 && (_o1k.houg += 1 * _o1s[7]), _o1s[8] >= 1 && (_o1k.houm += 1 * _o1s[8]), _o1s[9] >= 1 && (_o1k.souk += 1 * _o1s[9]), _o1s[10] >= 1 && (_o1k.houg += 1 * _o1s[10])), _o1k;
        };
    },
    37273: (_o1t, _o1u, _o1v) => {
        'use strict';
        var _o1w = null;
        defineModule(_o1u);
        Object.defineProperty(_o1u, '__esModule', {
            'value': true
        }), _o1u.getSlot390PersonalEffect = void 0;
        var _o1x = _o1v(74496);
        _o1u.getSlot390PersonalEffect = function(_o1y) {
            var _o1z = null,
                _o20 = new _o1x.SlotItemEffectModel(),
                _o21 = false,
                _o22 = new _o1x.SlotItemEffectModel(),
                _o23 = 0;
            if ('アメリカ' == _o1y.getCountryName() && (_o22.houg += 1, _o21 = true, _o23 = 1), 102 == _o1y.ctype || 107 == _o1y.ctype ? (_o22.houg += 1, _o22.souk += 1, _o21 = true) : 93 == _o1y.ctype && (_o22.houg += 1, _o21 = true), 8 == _o1y.stype && (_o22.houg += 1, _o21 = true), 0 == _o21) return _o20;
            var _o24 = _o1y.get_slotnums(390);
            if (_o20.add(_o22.multiply(_o24)), 0 == _o23) return _o20;
            var _o25 = _o1y.get_each_level_nums(390),
                _o26 = 0,
                _o27 = 0;
            return _o25.forEach(function(_o28, _o29) {
                _o29 >= 3 && (_o26 += _o28), _o29 >= 6 && (_o27 += _o28);
            }), 1 == _o23 && (_o20.houg += 1 * _o26, _o20.kaih += 1 * _o27, _o20.souk += 1 * _o25[10]), _o20;
        };
    },
    72694: (_o2a, _o2b, _o2c) => {
        'use strict';
        var _o2d = null;
        defineModule(_o2b);
        Object.defineProperty(_o2b, '__esModule', {
            'value': true
        }), _o2b.getSlot391PersonalEffect = void 0;
        var _o2e = _o2c(74496);
        _o2b.getSlot391PersonalEffect = function(_o2f) {
            var _o2g = null,
                _o2h = new _o2e.SlotItemEffectModel(),
                _o2i = false,
                _o2j = new _o2e.SlotItemEffectModel();
            if ('しょうかく' == _o2f.yomi || 'ずいかく' == _o2f.yomi ? (_o2j.houg += 1, _o2i = true) : 'じゅんよう' != _o2f.yomi && 'ひよう' != _o2f.yomi || (_o2j.houg += 1, _o2i = true), 116 == _o2f.ship_id || 185 == _o2f.ship_id || 282 == _o2f.ship_id ? (_o2j.houg += 1, _o2i = true) : 117 == _o2f.ship_id || 318 == _o2f.ship_id || 883 == _o2f.ship_id || 888 == _o2f.ship_id ? (_o2j.houg += 1, _o2h.kaih += 1, _o2i = true) : 560 != _o2f.ship_id && 555 != _o2f.ship_id || (_o2j.houg += 1, _o2j.kaih += 1, _o2i = true), 0 == _o2i) return _o2h;
            var _o2k = _o2f.get_slotnums(391);
            return _o2h.add(_o2j.multiply(_o2k)), _o2h;
        };
    },
    62067: (_o2l, _o2m, _o2n) => {
        'use strict';
        var _o2o = null;
        defineModule(_o2m);
        Object.defineProperty(_o2m, '__esModule', {
            'value': true
        }), _o2m.getSlot392PersonalEffect = void 0;
        var _o2p = _o2n(74496);
        _o2m.getSlot392PersonalEffect = function(_o2q) {
            var _o2r = null,
                _o2s = new _o2p.SlotItemEffectModel(),
                _o2t = false,
                _o2u = new _o2p.SlotItemEffectModel();
            if ('しょうかく' == _o2q.yomi || 'ずいかく' == _o2q.yomi ? (_o2u.houg += 2, _o2u.kaih += 1, _o2t = true) : 'じゅんよう' != _o2q.yomi && 'ひよう' != _o2q.yomi || (_o2u.houg += 1, _o2u.kaih += 1, _o2t = true), 116 == _o2q.ship_id || 185 == _o2q.ship_id || 282 == _o2q.ship_id ? (_o2u.houg += 2, _o2u.kaih += 1, _o2t = true) : 117 == _o2q.ship_id || 318 == _o2q.ship_id || 883 == _o2q.ship_id || 888 == _o2q.ship_id ? (_o2u.houg += 2, _o2u.kaih += 2, _o2t = true) : 560 != _o2q.ship_id && 555 != _o2q.ship_id || (_o2u.houg += 3, _o2u.kaih += 2, _o2t = true), 0 == _o2t) return _o2s;
            var _o2v = _o2q.get_slotnums(392);
            return _o2s.add(_o2u.multiply(_o2v)), _o2s;
        };
    },
    87817: function(_o2w, _o2x, _o2y) {
        'use strict';
        var _o2z = null;
        var _o30 = this && this.__importDefault || function(_o31) {
            var _o32 = null;
            return _o31 && _o31.__esModule ? _o31 : {
                'default': _o31
            };
        };
        defineModule(_o2x);
        Object.defineProperty(_o2x, '__esModule', {
            'value': true
        }), _o2x.getSlot397PersonalEffect = void 0;
        var _o33 = _o2y(74496),
            _o34 = _o30(_o2y(18622));
        _o2x.getSlot397PersonalEffect = function(_o35) {
            var _o36 = null,
                _o37 = new _o33.SlotItemEffectModel(),
                _o38 = false,
                _o39 = new _o33.SlotItemEffectModel(),
                _o3a = 0,
                _o3b = 0,
                _o3c = false;
            if (651 == _o35.ship_id ? (_o39.houg += 5, _o39.tyku += 2, _o39.kaih += 1, _o38 = true, _o3c = true, _o3a = 1, _o3b = 1) : 656 == _o35.ship_id && (_o39.houg += 3, _o39.tyku += 1, _o39.kaih += 1, _o38 = true, _o3c = true, _o3a = 1), 0 == _o38) return _o37;
            var _o3d = _o35.get_slotnums(397);
            _o37.add(_o39.multiply(_o3d));
            var _o3e = 0,
                _o3f = _o35.get_each_level_nums(397),
                _o3g = 0;
            if (_o3c) {
                _o3f.forEach(function(_o3h, _o3i) {
                    _o3i >= 4 && (_o3g += _o3h);
                });
                for (var _o3j = 0, _o3k = _o35.have_slot_ids(); _o3j < _o3k.length; _o3j++) {
                    var _o3l = _o3k[_o3j],
                        _o3m = _o34.default.model.slot.getMst(_o3l),
                        _o3n = _o3m.equipType;
                    12 != _o3n && 13 != _o3n || (_o3m.sakuteki >= 5 && (_o3e += _o35.get_slotnums(parseInt(_o3l))), _o3m.taiku >= 2 && _o35.get_slotnums(parseInt(_o3l)));
                }
            }
            return 1 == _o3a && _o3e > 0 && (_o37.houg += 3, _o37.kaih += 3), 1 == _o3b && (_o37.houg += 4 * _o3g, _o37.kaih += 1 * _o3g), _o37;
        };
    },
    93526: function(_o3o, _o3p, _o3q) {
        'use strict';
        var _o3r = null;
        var _o3s = this && this.__importDefault || function(_o3t) {
            var _o3u = null;
            return _o3t && _o3t.__esModule ? _o3t : {
                'default': _o3t
            };
        };
        defineModule(_o3p);
        Object.defineProperty(_o3p, '__esModule', {
            'value': true
        }), _o3p.getSlot398PersonalEffect = void 0;
        var _o3v = _o3q(74496),
            _o3w = _o3s(_o3q(18622));
        _o3p.getSlot398PersonalEffect = function(_o3x) {
            var _o3y = null,
                _o3z = new _o3v.SlotItemEffectModel(),
                _o40 = false,
                _o41 = new _o3v.SlotItemEffectModel(),
                _o42 = 0,
                _o43 = 0,
                _o44 = false;
            if (651 == _o3x.ship_id ? (_o41.houg += 4, _o41.tyku += 4, _o41.kaih += 2, _o40 = true, _o44 = true, _o42 = 1, _o43 = 1) : 656 == _o3x.ship_id && (_o41.houg += 3, _o41.tyku += 2, _o41.kaih += 2, _o40 = true, _o44 = true, _o42 = 1, _o43 = 2), 0 == _o40) return _o3z;
            var _o45 = _o3x.get_slotnums(398);
            _o3z.add(_o41.multiply(_o45));
            var _o46 = 0,
                _o47 = 0,
                _o48 = _o3x.get_each_level_nums(398),
                _o49 = 0;
            if (_o44) {
                _o48.forEach(function(_o4a, _o4b) {
                    _o4b >= 4 && (_o49 += _o4a);
                });
                for (var _o4c = 0, _o4d = _o3x.have_slot_ids(); _o4c < _o4d.length; _o4c++) {
                    var _o4e = _o4d[_o4c],
                        _o4f = _o3w.default.model.slot.getMst(_o4e),
                        _o4g = _o4f.equipType;
                    12 != _o4g && 13 != _o4g || (_o4f.sakuteki >= 5 && (_o46 += _o3x.get_slotnums(parseInt(_o4e))), _o4f.taiku >= 2 && (_o47 += _o3x.get_slotnums(parseInt(_o4e))));
                }
            }
            return 1 == _o42 && (_o46 > 0 && (_o3z.houg += 3, _o3z.kaih += 3), _o47 > 0 && (_o3z.tyku += 3, _o3z.kaih += 3)), 1 == _o43 ? (_o3z.houg += 3 * _o49, _o3z.kaih += 2 * _o49) : 2 == _o43 && (_o3z.houg += 2 * _o49, _o3z.kaih += 1 * _o49), _o3z;
        };
    },
    33084: (_o4h, _o4i, _o4j) => {
        'use strict';
        var _o4k = null;
        defineModule(_o4i);
        Object.defineProperty(_o4i, '__esModule', {
            'value': true
        }), _o4i.getSlot399PersonalEffect = void 0;
        var _o4l = _o4j(74496);
        _o4i.getSlot399PersonalEffect = function(_o4m) {
            var _o4n = null,
                _o4o = new _o4l.SlotItemEffectModel(),
                _o4p = false,
                _o4q = new _o4l.SlotItemEffectModel(),
                _o4r = 0;
            if (108 == _o4m.ctype && (_o4q.houg += 1, _o4q.kaih += 2, _o4r = 1, _o4p = true), 0 == _o4p) return _o4o;
            var _o4s = _o4m.get_slotnums(399);
            if (_o4o.add(_o4q.multiply(_o4s)), 0 == _o4r) return _o4o;
            var _o4t = _o4m.get_each_level_nums(399),
                _o4u = 0,
                _o4v = 0;
            return _o4t.map(function(_o4w, _o4x) {
                _o4x >= 3 && (_o4u += _o4w), _o4x >= 5 && (_o4v += _o4w);
            }), 1 == _o4r && (_o4o.houg += 1 * _o4u, _o4o.houg += 1 * _o4v), _o4o;
        };
    },
    80225: (_o4y, _o4z, _o50) => {
        'use strict';
        var _o51 = null;
        defineModule(_o4z);
        Object.defineProperty(_o4z, '__esModule', {
            'value': true
        }), _o4z.getSlot3_122PersonalEffect = void 0;
        var _o52 = _o50(74496);
        _o4z.getSlot3_122PersonalEffect = function(_o53) {
            var _o54 = null,
                _o55 = new _o52.SlotItemEffectModel(),
                _o56 = false,
                _o57 = new _o52.SlotItemEffectModel(),
                _o58 = 0;
            if (54 == _o53.ctype && (_o57.houg += 1, _o57.tyku += 2, _o57.kaih += 1, _o56 = true, _o58 = 1, 968 == _o53.ship_id && (_o57.houg += 1, _o57.houm += 1, _o57.kaih += 1)), 0 == _o56) return _o55;
            var _o59 = _o53.get_slotnums(3) + _o53.get_slotnums(122) + _o53.get_slotnums(533);
            if (_o55.add(_o57.multiply(_o59)), 0 == _o58) return _o55;
            var _o5a = _o53.get_each_level_over_nums([122]).slot[122],
                _o5b = _o53.have_level_num_over_dict[533];
            return 1 == _o58 && (null != _o5a && (_o5a[6] >= 1 && (_o55.kaih += 1 * _o5a[6]), _o5a[7] >= 1 && (_o55.tyku += 1 * _o5a[7]), _o5a[8] >= 1 && (_o55.houm += 1 * _o5a[8]), _o5a[9] >= 1 && (_o55.kaih += 1 * _o5a[9]), _o5a[10] >= 1 && (_o55.houg += 1 * _o5a[10])), null != _o5b && (_o5b[2] >= 1 && (_o55.tyku += 1 * _o5b[2]), _o5b[4] >= 1 && (_o55.houg += 1 * _o5b[4]), _o5b[6] >= 1 && (_o55.houm += 1 * _o5b[6]), _o5b[8] >= 1 && (_o55.tyku += 1 * _o5b[8]), _o5b[10] >= 1 && (_o55.kaih += 1 * _o5b[10])), 968 == _o53.ship_id && null != _o5b && (_o5b[1] >= 1 && (_o55.kaih += 1 * _o5b[1]), _o5b[3] >= 1 && (_o55.tyku += 1 * _o5b[3]), _o5b[5] >= 1 && (_o55.houm += 1 * _o5b[5]), _o5b[7] >= 1 && (_o55.kaih += 1 * _o5b[7]), _o5b[9] >= 1 && (_o55.houg += 1 * _o5b[9]))), _o55;
        };
    },
    97831: (_o5c, _o5d, _o5e) => {
        'use strict';
        var _o5f = null;
        defineModule(_o5d);
        Object.defineProperty(_o5d, '__esModule', {
            'value': true
        }), _o5d.getSlot400PersonalEffect = void 0;
        var _o5g = _o5e(74496);
        _o5d.getSlot400PersonalEffect = function(_o5h) {
            var _o5i = null,
                _o5j = new _o5g.SlotItemEffectModel(),
                _o5k = false,
                _o5l = new _o5g.SlotItemEffectModel(),
                _o5m = 0,
                _o5n = false;
            if (147 != _o5h.ship_id && 73 != _o5h.ctype && 81 != _o5h.ctype || (_o5n = true), _o5n && (_o5l.kaih += 2, _o5l.raig += 5, _o5l.houg += 1, _o5l.souk += 1, _o5k = true, _o5m = 1), 0 == _o5k) return _o5j;
            var _o5o = _o5h.get_slotnums(400);
            return _o5j.add(_o5l.multiply(_o5o)), _o5h.get_slotnums(282) > 0 && 1 == _o5m && (_o5j.houg += 2), _o5j;
        };
    },
    4050: function(_o5p, _o5q, _o5r) {
        'use strict';
        var _o5s = null;
        var _o5t = this && this.__importDefault || function(_o5u) {
            var _o5v = null;
            return _o5u && _o5u.__esModule ? _o5u : {
                'default': _o5u
            };
        };
        defineModule(_o5q);
        Object.defineProperty(_o5q, '__esModule', {
            'value': true
        }), _o5q.getSlot407PersonalEffect = void 0;
        var _o5w = _o5r(74496),
            _o5x = _o5t(_o5r(18622));
        _o5q.getSlot407PersonalEffect = function(_o5y) {
            var _o5z = null,
                _o60 = new _o5w.SlotItemEffectModel(),
                _o61 = false,
                _o62 = new _o5w.SlotItemEffectModel(),
                _o63 = 0;
            if (662 != _o5y.ship_id && 663 != _o5y.ship_id && 668 != _o5y.ship_id || (_o62.houg += 4, _o62.tyku += 2, _o62.kaih += 1, _o61 = true, _o63 = 1), 0 == _o61) return _o60;
            var _o64 = _o5y.get_slotnums(407);
            _o60.add(_o62.multiply(_o64));
            for (var _o65 = 0, _o66 = 0, _o67 = 0, _o68 = _o5y.have_slot_ids(); _o67 < _o68.length; _o67++) {
                var _o69 = _o68[_o67],
                    _o6a = _o5x.default.model.slot.getMst(_o69),
                    _o6b = _o6a.equipType;
                12 != _o6b && 13 != _o6b || (_o6a.sakuteki >= 5 && (_o65 += _o5y.get_slotnums(parseInt(_o69))), _o6a.taiku >= 2 && (_o66 += _o5y.get_slotnums(parseInt(_o69))));
            }
            return _o65 >= 1 && 1 == _o63 && (_o60.houg += 2, _o60.kaih += 2, _o60.raig += 2), _o66 >= 1 && 1 == _o63 && (_o60.tyku += 2, _o60.kaih += 3), _o60;
        };
    },
    78466: (_o6c, _o6d, _o6e) => {
        'use strict';
        var _o6f = null;
        defineModule(_o6d);
        Object.defineProperty(_o6d, '__esModule', {
            'value': true
        }), _o6d.getSlot408PersonalEffect = void 0;
        var _o6g = _o6e(74496);
        _o6d.getSlot408PersonalEffect = function(_o6h) {
            var _o6i = null,
                _o6j = new _o6g.SlotItemEffectModel(),
                _o6k = false,
                _o6l = new _o6g.SlotItemEffectModel();
            if ('しんしゅうまる' == _o6h.yomi ? (_o6l.houg += 2, _o6l.saku += 2, _o6l.kaih += 2, _o6k = true) : 'あきつまる' == _o6h.yomi && (_o6l.houg += 1, _o6l.saku += 1, _o6l.kaih += 1, _o6l.tais += 1, _o6k = true), 2 == _o6h.stype && (_o6l.houg += 1, _o6l.saku += 1, _o6l.kaih -= 5, _o6k = true), 0 == _o6k) return _o6j;
            var _o6m = _o6h.get_slotnums(408);
            return _o6j.add(_o6l.multiply(_o6m)), _o6j;
        };
    },
    40061: (_o6n, _o6o, _o6p) => {
        'use strict';
        var _o6q = null;
        defineModule(_o6o);
        Object.defineProperty(_o6o, '__esModule', {
            'value': true
        }), _o6o.getSlot409PersonalEffect = void 0;
        var _o6r = _o6p(74496);
        _o6o.getSlot409PersonalEffect = function(_o6s) {
            var _o6t = null,
                _o6u = new _o6r.SlotItemEffectModel(),
                _o6v = false,
                _o6w = new _o6r.SlotItemEffectModel();
            if ('しんしゅうまる' == _o6s.yomi ? (_o6w.houg += 1, _o6w.tyku += 2, _o6w.kaih += 3, _o6v = true) : 'あきつまる' == _o6s.yomi && (_o6w.houg += 1, _o6w.tyku += 1, _o6w.kaih += 2, _o6w.tais += 1, _o6v = true), 0 == _o6v) return _o6u;
            var _o6x = _o6s.get_slotnums(409);
            return _o6u.add(_o6w.multiply(_o6x)), _o6u;
        };
    },
    79988: (_o6y, _o6z, _o70) => {
        'use strict';
        var _o71 = null;
        defineModule(_o6z);
        Object.defineProperty(_o6z, '__esModule', {
            'value': true
        }), _o6z.getSlot411PersonalEffect = void 0;
        var _o72 = _o70(74496);
        _o6z.getSlot411PersonalEffect = function(_o73) {
            var _o74 = null,
                _o75 = new _o72.SlotItemEffectModel(),
                _o76 = new _o72.SlotItemEffectModel(),
                _o77 = false,
                _o78 = 0;
            if (2 == _o73.stype && (_o76.kaih -= 9, _o77 = true), 3 != _o73.stype && 4 != _o73.stype || (_o76.kaih -= 7, _o77 = true), 21 == _o73.stype && (_o76.kaih -= 6, _o77 = true), 5 != _o73.stype && 6 != _o73.stype || (_o76.kaih -= 5, _o77 = true), 593 == _o73.ship_id && (_o75.houg += 1, _o75.tyku += 2, _o75.kaih += 3), 151 == _o73.ship_id || 411 == _o73.ship_id || 412 == _o73.ship_id || 593 == _o73.ship_id || 954 == _o73.ship_id ? (_o75.houg += 3, _o75.tyku += 4, _o78 = 1) : 694 == _o73.ship_id ? (_o75.houg += 4, _o75.tyku += 2, _o78 = 2) : 541 != _o73.ship_id && 573 != _o73.ship_id && 553 != _o73.ship_id && 554 != _o73.ship_id || (_o75.houg += 2, _o75.tyku += 2, _o78 = 1), _o77) {
                var _o79 = _o73.get_slotnums(411);
                _o75.add(_o76.multiply(_o79));
            }
            if (0 == _o78) return _o75;
            var _o7a = _o73.get_each_level_nums(411),
                _o7b = 0,
                _o7c = 0;
            return _o78 > 0 && _o7a.forEach(function(_o7d, _o7e) {
                _o7e >= 4 && (_o7b += _o7d), _o7e >= 5 && (_o7c += _o7d);
            }), 1 == _o78 ? (_o7b >= 1 && (_o75.houg += 1, _o75.tyku += 1), _o7a[10] >= 1 && (_o75.houg += 1, _o75.tyku += 1)) : 2 == _o78 && (_o7c >= 1 && (_o75.houg += 1, _o75.tyku += 1), _o7a[10] >= 1 && (_o75.houg += 2, _o75.tyku += 1)), _o75;
        };
    },
    74428: (_o7f, _o7g, _o7h) => {
        'use strict';
        var _o7i = null;
        defineModule(_o7g);
        Object.defineProperty(_o7g, '__esModule', {
            'value': true
        }), _o7g.getSlot412PersonalEffect = void 0;
        var _o7j = _o7h(74496);
        _o7g.getSlot412PersonalEffect = function(_o7k) {
            var _o7l = null,
                _o7m = new _o7j.SlotItemEffectModel(),
                _o7n = false,
                _o7o = 0,
                _o7p = new _o7j.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o7k.ctype) >= 0 ? (_o7m.houg += 2, _o7m.raig += 4, _o7m.tais += 2, _o7p.kaih += 3, _o7p.saku += 1, _o7n = true, _o7o = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o7k.ctype) >= 0 ? (_o7m.houg += 3, _o7m.raig += 3, _o7p.kaih += 2, _o7p.saku += 3, _o7n = true, _o7o = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o7k.ctype) >= 0 && (_o7m.houg += 1, _o7p.kaih += 1, _o7p.saku += 1, _o7n = true), 0 == _o7n) return _o7m;
            var _o7q = _o7k.get_slotnums(412);
            if (_o7m.add(_o7p.multiply(_o7q)), 0 == _o7o) return _o7m;
            var _o7r = _o7k.get_each_level_nums(412),
                _o7s = 0,
                _o7t = 0;
            return _o7o > 0 && _o7r.forEach(function(_o7u, _o7v) {
                _o7v >= 4 && (_o7s += _o7u), _o7v >= 8 && (_o7t += _o7u);
            }), 1 == _o7o && (_o7s > 0 && (_o7m.houg += 1), _o7t > 0 && (_o7m.raig += 1)), _o7m;
        };
    },
    2631: (_o7w, _o7x, _o7y) => {
        'use strict';
        var _o7z = null;
        defineModule(_o7x);
        Object.defineProperty(_o7x, '__esModule', {
            'value': true
        }), _o7x.getSlot413PersonalEffect = void 0;
        var _o80 = _o7y(74496);
        _o7x.getSlot413PersonalEffect = function(_o81) {
            var _o82 = null,
                _o83 = new _o80.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o81.ctype) >= 0 ? (_o83.houg += 2, _o83.raig += 2, _o83.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o81.ctype) >= 0 && (_o83.houg += 4, _o83.raig += 2, _o83.kaih += 2), 38 == _o81.ctype || 54 == _o81.ctype ? (_o83.houg += 2, _o83.raig += 3, _o83.kaih += 3) : 4 == _o81.ctype || 20 == _o81.ctype || 16 == _o81.ctype || 41 == _o81.ctype || 52 == _o81.ctype ? (_o83.houg += 1, _o83.raig += 2, _o83.kaih += 2) : 21 != _o81.ctype && 34 != _o81.ctype || (_o83.tyku += 2, _o83.raig += 1, _o83.kaih += 1), 'なか' == _o81.yomi || 'ゆら' == _o81.yomi || 'やはぎ' == _o81.yomi || 'のしろ' == _o81.yomi || 'はまなみ' == _o81.yomi || 'しまかぜ' == _o81.yomi || 'きよしも' == _o81.yomi || 'はつしも' == _o81.yomi ? (_o83.tyku += 1, _o83.kaih += 1) : 'じんつう' != _o81.yomi && 'せんだい' != _o81.yomi && 'ながなみ' != _o81.yomi && 'はつしも' != _o81.yomi && 'てるづき' != _o81.yomi || (_o83.houg += 1, _o83.raig += 1), 543 == _o81.ship_id ? (_o83.houg += 1, _o83.kaih += 1) : 159 == _o81.ship_id && (_o83.houg += 2), _o83;
        };
    },
    27177: (_o84, _o85, _o86) => {
        'use strict';
        var _o87 = null;
        defineModule(_o85);
        Object.defineProperty(_o85, '__esModule', {
            'value': true
        }), _o85.getSlot415PersonalEffect = void 0;
        var _o88 = _o86(74496);
        _o85.getSlot415PersonalEffect = function(_o89) {
            var _o8a = null,
                _o8b = new _o88.SlotItemEffectModel(),
                _o8c = [];
            if ('アメリカ' == _o89.getCountryName() && (_o8b.saku += 1, _o8b.tais += 1, _o8c.push(1)), 95 != _o89.ctype && 99 != _o89.ctype && 106 != _o89.ctype && 110 != _o89.ctype && 121 != _o89.ctype || (_o8b.houg += 1, _o8c.push(2)), 0 == _o8c.length) return _o8b;
            var _o8d = _o89.get_each_level_nums(415),
                _o8e = 0,
                _o8f = 0,
                _o8g = 0;
            return _o8c.length > 0 && (_o8d.forEach(function(_o8h, _o8i) {
                _o8i >= 5 && (_o8e += _o8h), _o8i >= 3 && (_o8f += _o8h), _o8i >= 8 && (_o8g += _o8h);
            }), _o8c.forEach(function(_o8j) {
                var _o8k = null;
                1 == _o8j ? _o8e >= 1 && (_o8b.kaih += 1) : 2 == _o8j && (_o8f >= 1 && (_o8b.kaih += 1), _o8g >= 1 && (_o8b.houg += 1));
            })), _o8b;
        };
    },
    53908: (_o8l, _o8m, _o8n) => {
        'use strict';
        var _o8o = null;
        defineModule(_o8m);
        Object.defineProperty(_o8m, '__esModule', {
            'value': true
        }), _o8m.getSlot419PersonalEffect = void 0;
        var _o8p = _o8n(74496);
        _o8m.getSlot419PersonalEffect = function(_o8q) {
            var _o8r = null,
                _o8s = new _o8p.SlotItemEffectModel(),
                _o8t = false,
                _o8u = new _o8p.SlotItemEffectModel(),
                _o8v = 0;
            if ('アメリカ' == _o8q.getCountryName() && (_o8u.houg += 2, _o8t = true, _o8v = 1), 0 == _o8t) return _o8s;
            var _o8w = _o8q.get_slotnums(419);
            if (_o8s.add(_o8u.multiply(_o8w)), 0 == _o8v) return _o8s;
            var _o8x = _o8q.get_each_level_nums(419),
                _o8y = 0,
                _o8z = 0;
            return _o8v > 0 && _o8x.forEach(function(_o90, _o91) {
                _o91 >= 2 && (_o8y += _o90), _o91 >= 7 && (_o8z += _o90);
            }), 1 == _o8v && (_o8y >= 1 && (_o8s.houg += 1 * _o8y), _o8z >= 1 && (_o8s.houg += 1 * _o8z)), _o8s;
        };
    },
    79813: (_o92, _o93, _o94) => {
        'use strict';
        var _o95 = null;
        defineModule(_o93);
        Object.defineProperty(_o93, '__esModule', {
            'value': true
        }), _o93.getSlot420PersonalEffect = void 0;
        var _o96 = _o94(74496);
        _o93.getSlot420PersonalEffect = function(_o97) {
            var _o98 = null,
                _o99 = new _o96.SlotItemEffectModel(),
                _o9a = false,
                _o9b = new _o96.SlotItemEffectModel(),
                _o9c = 0,
                _o9d = _o97.getCountryName();
            if ('アメリカ' != _o9d && 67 != _o97.ctype && 78 != _o97.ctype && 82 != _o97.ctype && 88 != _o97.ctype && 108 != _o97.ctype && 112 != _o97.ctype || (_o9b.houg += 1, _o9c = 1, _o9a = true), 84 == _o97.ctype ? (_o9b.houg += 1, _o9a = true) : 78 == _o97.ctype && (_o9b.houg -= 1, _o9a = true), 7 == _o97.stype && (_o9b.houg -= 2, _o9b.kaih -= 1, _o9b.souk -= 2, _o9a = true), 0 == _o9a) return _o99;
            var _o9e = _o97.get_slotnums(420);
            if (_o99.add(_o9b.multiply(_o9e)), 0 == _o9c) return _o99;
            var _o9f = _o97.get_each_level_nums(420),
                _o9g = 0,
                _o9h = 0,
                _o9i = 0,
                _o9j = 0;
            _o9c > 0 && _o9f.forEach(function(_o9k, _o9l) {
                _o9l >= 3 && (_o9g += _o9k), _o9l >= 7 && (_o9h += _o9k), _o9l >= 8 && (_o9i += _o9k), _o9l >= 9 && (_o9j += _o9k);
            });
            var _o9m = _o9f[10];
            return 1 == _o9c && (_o9g >= 1 && (_o99.houg += 1 * _o9g), 'アメリカ' == _o9d && (_o9h >= 1 && (_o99.houm += 1 * _o9h), _o9i >= 1 && (_o99.houg += 1 * _o9i), _o9j >= 1 && (_o99.houm += 1 * _o9j), _o9m >= 1 && (_o99.houg += 1 * _o9m))), _o99;
        };
    },
    16088: (_o9n, _o9o, _o9p) => {
        'use strict';
        var _o9q = null;
        defineModule(_o9o);
        Object.defineProperty(_o9o, '__esModule', {
            'value': true
        }), _o9o.getSlot421PersonalEffect = void 0;
        var _o9r = _o9p(74496);
        _o9o.getSlot421PersonalEffect = function(_o9s) {
            var _o9t = null,
                _o9u = new _o9r.SlotItemEffectModel(),
                _o9v = false,
                _o9w = new _o9r.SlotItemEffectModel(),
                _o9x = 0,
                _o9y = _o9s.getCountryName();
            if ('アメリカ' != _o9y && 67 != _o9s.ctype && 78 != _o9s.ctype && 82 != _o9s.ctype && 88 != _o9s.ctype && 108 != _o9s.ctype && 112 != _o9s.ctype || (_o9w.houg += 2, _o9v = true, _o9x = 1), 84 == _o9s.ctype ? (_o9w.houg += 1, _o9v = true) : 78 == _o9s.ctype && (_o9w.houg -= 1, _o9v = true), 7 == _o9s.stype && (_o9w.houg -= 2, _o9w.kaih -= 1, _o9w.souk -= 2, _o9v = true), 0 == _o9v) return _o9u;
            var _o9z = _o9s.get_slotnums(421);
            if (_o9u.add(_o9w.multiply(_o9z)), 0 == _o9x) return _o9u;
            var _oa0 = _o9s.get_each_level_nums(421),
                _oa1 = 0,
                _oa2 = 0,
                _oa3 = 0,
                _oa4 = 0,
                _oa5 = 0;
            _o9x > 0 && _oa0.forEach(function(_oa6, _oa7) {
                _oa7 >= 5 && (_oa1 += _oa6), _oa7 >= 6 && (_oa2 += _oa6), _oa7 >= 7 && (_oa3 += _oa6), _oa7 >= 8 && (_oa4 += _oa6), _oa7 >= 9 && (_oa5 += _oa6);
            });
            var _oa8 = _oa0[10];
            return 1 == _o9x && (_oa1 >= 1 && (_o9u.houg += 1 * _oa1), 'アメリカ' == _o9y && (_oa2 >= 1 && (_o9u.houm += 1 * _oa2), _oa3 >= 1 && (_o9u.houg += 1 * _oa3), _oa4 >= 1 && (_o9u.houm += 1 * _oa4), _oa5 >= 1 && (_o9u.houg += 1 * _oa5), _oa8 >= 1 && (_o9u.houm += 1 * _oa8))), _o9u;
        };
    },
    69939: (_oa9, _oaa, _oab) => {
        'use strict';
        var _oac = null;
        defineModule(_oaa);
        Object.defineProperty(_oaa, '__esModule', {
            'value': true
        }), _oaa.getSlot422PersonalEffect = void 0;
        var _oad = _oab(74496);
        _oaa.getSlot422PersonalEffect = function(_oae) {
            var _oaf = null,
                _oag = new _oad.SlotItemEffectModel(),
                _oah = false,
                _oai = new _oad.SlotItemEffectModel();
            if ('アメリカ' != _oae.getCountryName() && 67 != _oae.ctype && 78 != _oae.ctype && 82 != _oae.ctype && 88 != _oae.ctype && 108 != _oae.ctype && 112 != _oae.ctype || (_oai.houg += 1, _oai.kaih += 1, _oah = true), 84 == _oae.ctype && (_oai.houg += 1, _oai.tyku += 1, _oah = true), 707 == _oae.ship_id && (_oai.houg += 2, _oai.kaih += 2, _oai.tyku += 2, _oah = true), 0 == _oah) return _oag;
            var _oaj = _oae.get_slotnums(422);
            return _oag.add(_oai.multiply(_oaj)), _oag;
        };
    },
    33734: (_oak, _oal, _oam) => {
        'use strict';
        var _oan = null;
        defineModule(_oal);
        Object.defineProperty(_oal, '__esModule', {
            'value': true
        }), _oal.getSlot423PersonalEffect = void 0;
        var _oao = _oam(74496);
        _oal.getSlot423PersonalEffect = function(_oap) {
            var _oaq = null,
                _oar = new _oao.SlotItemEffectModel(),
                _oas = false,
                _oat = new _oao.SlotItemEffectModel();
            78 != _oap.ctype && 112 != _oap.ctype || (_oat.houg += 2, _oat.tyku += 2, _oat.kaih += 2, _oat.saku += 2, _oas = true);
            var _oau = _oap.getCountryName();
            if (67 == _oap.ctype || 78 == _oap.ctype || 82 == _oap.ctype || 88 == _oap.ctype || 108 == _oap.ctype || 112 == _oap.ctype ? (_oat.houg += 2, _oat.tyku += 2, _oat.kaih += 2, _oat.saku += 2, _oas = true) : 'アメリカ' == _oau && (_oat.houg += 1, _oat.tyku += 1, _oat.kaih += 1, _oat.saku += 1, _oas = true), 0 == _oas) return _oar;
            var _oav = _oap.get_slotnums(423);
            return _oar.add(_oat.multiply(_oav)), _oar;
        };
    },
    34432: (_oaw, _oax, _oay) => {
        'use strict';
        var _oaz = null;
        defineModule(_oax);
        Object.defineProperty(_oax, '__esModule', {
            'value': true
        }), _oax.getSlot424PersonalEffect = void 0;
        var _ob0 = _oay(74496);
        _oax.getSlot424PersonalEffect = function(_ob1) {
            var _ob2 = null,
                _ob3 = new _ob0.SlotItemEffectModel(),
                _ob4 = false,
                _ob5 = new _ob0.SlotItemEffectModel(),
                _ob6 = 0;
            67 != _ob1.ctype && 78 != _ob1.ctype && 82 != _ob1.ctype && 88 != _ob1.ctype && 108 != _ob1.ctype && 112 != _ob1.ctype || (_ob5.houg += 2, _ob5.raig += 3, _ob4 = true, _ob6 = 1);
            var _ob7 = _ob1.get_slotnums(424);
            _ob4 && _ob3.add(_ob5.multiply(_ob7));
            var _ob8 = _ob1.get_each_level_nums(424),
                _ob9 = 0,
                _oba = 0,
                _obb = 0;
            _ob8.forEach(function(_obc, _obd) {
                _obd >= 2 && (_ob9 += _obc), _obd >= 6 && (_oba += _obc), _obd >= 8 && (_obb += _obc);
            });
            var _obe = _ob8[10];
            return 1 == _ob6 && (_ob9 >= 1 && (_ob3.houg += 1 * _ob9), _oba >= 1 && (_ob3.houg += 1 * _oba), _obb >= 1 && (_ob3.houm += 1 * _obb)), _obe > 0 && (_ob3.houm += 1 * _obe), _ob3;
        };
    },
    97423: (_obf, _obg, _obh) => {
        'use strict';
        var _obi = null;
        defineModule(_obg);
        Object.defineProperty(_obg, '__esModule', {
            'value': true
        }), _obg.getSlot425PersonalEffect = void 0;
        var _obj = _obh(74496);
        _obg.getSlot425PersonalEffect = function(_obk) {
            var _obl = null,
                _obm = new _obj.SlotItemEffectModel(),
                _obn = false,
                _obo = new _obj.SlotItemEffectModel(),
                _obp = 0;
            67 != _obk.ctype && 78 != _obk.ctype && 82 != _obk.ctype && 88 != _obk.ctype && 108 != _obk.ctype && 112 != _obk.ctype || (_obo.houg += 2, _obo.tais += 2, _obo.raig += 1, _obo.saku += 1, _obn = true, _obp = 1);
            var _obq = _obk.get_slotnums(425);
            _obn && _obm.add(_obo.multiply(_obq));
            var _obr = _obk.get_each_level_nums(425),
                _obs = 0,
                _obt = 0,
                _obu = 0,
                _obv = 0,
                _obw = 0,
                _obx = 0;
            _obr.forEach(function(_oby, _obz) {
                _obz >= 2 && (_obs += _oby), _obz >= 4 && (_obt += _oby), _obz >= 6 && (_obu += _oby), _obz >= 7 && (_obv += _oby), _obz >= 8 && (_obw += _oby), _obz >= 9 && (_obx += _oby);
            });
            var _oc0 = _obr[10];
            return 1 == _obp && (_obs >= 1 && (_obm.tais += 1 * _obs), _obt >= 1 && (_obm.houg += 1 * _obt), _obu >= 1 && (_obm.tais += 1 * _obu), _obv >= 1 && (_obm.houm += 1 * _obv), _obw >= 1 && (_obm.raig += 1 * _obw), _obx >= 1 && (_obm.houg += 1 * _obx), _oc0 >= 1 && (_obm.tais += 1 * _oc0)), _obv >= 1 && (_obm.houg += 1 * _obv), _obw >= 1 && (_obm.tais += 1 * _obw), _obx >= 1 && (_obm.houm += 1 * _obx), _oc0 >= 1 && (_obm.houm += 1 * _oc0), _obm;
        };
    },
    23551: (_oc1, _oc2, _oc3) => {
        'use strict';
        var _oc4 = null;
        defineModule(_oc2);
        Object.defineProperty(_oc2, '__esModule', {
            'value': true
        }), _oc2.getSlot430PersonalEffect = void 0;
        var _oc5 = _oc3(74496);
        _oc2.getSlot430PersonalEffect = function(_oc6) {
            var _oc7 = null,
                _oc8 = new _oc5.SlotItemEffectModel(),
                _oc9 = false,
                _oca = new _oc5.SlotItemEffectModel(),
                _ocb = 0;
            if (113 == _oc6.ctype && (_oca.tyku += 1, _oca.kaih += 1, _oc9 = true), 58 != _oc6.ctype && 61 != _oc6.ctype && 64 != _oc6.ctype && 68 != _oc6.ctype && 80 != _oc6.ctype && 92 != _oc6.ctype && 113 != _oc6.ctype && 124 != _oc6.ctype || (_oca.tyku += 2, _oca.kaih += 1, _oc9 = true, _ocb = 1), 0 == _oc9) return _oc8;
            var _occ = _oc6.get_slotnums(430);
            if (_oc8.add(_oca.multiply(_occ)), 0 == _ocb) return _oc8;
            var _ocd = _oc6.get_each_level_nums(430),
                _oce = 0,
                _ocf = 0,
                _ocg = 0;
            if (_ocb > 0 && _ocd.forEach(function(_och, _oci) {
                    _oci >= 2 && (_oce += _och), _oci >= 4 && (_ocf += _och), _oci >= 7 && (_ocg += _och);
                }), 1 == _ocb) {
                _oce >= 1 && (_oc8.kaih += 1 * _oce), _ocf >= 1 && (_oc8.tyku += 1 * _ocf), _ocg >= 1 && (_oc8.kaih += 1 * _ocg);
                var _ocj = _ocd[10];
                _ocj >= 1 && (_oc8.tyku += 1 * _ocj);
            }
            return _oc8;
        };
    },
    6173: (_ock, _ocl, _ocm) => {
        'use strict';
        var _ocn = null;
        defineModule(_ocl);
        Object.defineProperty(_ocl, '__esModule', {
            'value': true
        }), _ocl.getSlot437PersonalEffect = void 0;
        var _oco = _ocm(74496);
        _ocl.getSlot437PersonalEffect = function(_ocp) {
            var _ocq = null,
                _ocr = new _oco.SlotItemEffectModel(),
                _ocs = false,
                _oct = new _oco.SlotItemEffectModel();
            if (285 == _ocp.ship_id ? (_oct.houg += 3, _oct.tyku += 3, _oct.kaih += 4, _ocs = true) : 894 == _ocp.ship_id || 899 == _ocp.ship_id ? (_oct.houg += 4, _oct.tyku += 4, _oct.kaih += 4, _ocs = true) : 196 == _ocp.ship_id || 197 == _ocp.ship_id ? (_oct.houg += 2, _oct.tyku += 2, _oct.kaih += 3, _ocs = true) : 508 == _ocp.ship_id || 509 == _ocp.ship_id || 646 == _ocp.ship_id ? (_oct.houg += 2, _oct.tyku += 2, _oct.kaih += 2, _ocs = true) : 888 != _ocp.ship_id && 883 != _ocp.ship_id && 553 != _ocp.ship_id && 554 != _ocp.ship_id || (_oct.houg += 1, _oct.tyku += 2, _oct.kaih += 2, _ocs = true), 0 == _ocs) return _ocr;
            var _ocu = _ocp.get_slotnums(437);
            return _ocr.add(_oct.multiply(_ocu)), _ocr;
        };
    },
    53709: (_ocv, _ocw, _ocx) => {
        'use strict';
        var _ocy = null;
        defineModule(_ocw);
        Object.defineProperty(_ocw, '__esModule', {
            'value': true
        }), _ocw.getSlot438PersonalEffect = void 0;
        var _ocz = _ocx(74496);
        _ocw.getSlot438PersonalEffect = function(_od0) {
            var _od1 = null,
                _od2 = new _ocz.SlotItemEffectModel(),
                _od3 = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_od0.ctype) > -1 && (_od2.tais += 1, _od2.kaih += 1), 160 == _od0.ship_id || 488 == _od0.ship_id || 141 == _od0.ship_id ? (_od2.tais += 1, _od2.kaih += 1) : 145 != _od0.ship_id && 588 != _od0.ship_id && 667 != _od0.ship_id && 578 != _od0.ship_id && 476 != _od0.ship_id && 363 != _od0.ship_id && 961 != _od0.ship_id || (_od3 = 1), 'うしお' == _od0.yomi || 'まいかぜ' == _od0.yomi || 'いそかぜ' == _od0.yomi || 'はまかぜ' == _od0.yomi || 'いかづち' == _od0.yomi || 'やまぐも' == _od0.yomi || 'うみかぜ' == _od0.yomi || 'かわかぜ' == _od0.yomi || 'すずかぜ' == _od0.yomi ? _od2.tais += 1 : 'しぐれ' != _od0.yomi && 'やまかぜ' != _od0.yomi && 'かみかぜ' != _od0.yomi && 'はるかぜ' != _od0.yomi && 'みくら' != _od0.yomi && 'いしがき' != _od0.yomi || (_od2.tais += 1, _od2.kaih += 1), 0 == _od3) return _od2;
            var _od4 = _od0.get_each_level_nums(438),
                _od5 = 0,
                _od6 = 0,
                _od7 = 0,
                _od8 = _od4[10];
            return _od3 > 0 && _od4.forEach(function(_od9, _oda) {
                _oda >= 4 && (_od5 += _od9), _oda >= 6 && (_od6 += _od9), _oda >= 8 && (_od7 += _od9);
            }), 1 == _od3 && (_od5 >= 1 && (_od2.tais += 1), _od6 >= 1 && (_od2.kaih += 1), _od7 >= 1 && (_od2.tais += 1), _od8 >= 1 && (_od2.kaih += 1)), _od2;
        };
    },
    99790: (_odb, _odc, _odd) => {
        'use strict';
        var _ode = null;
        defineModule(_odc);
        Object.defineProperty(_odc, '__esModule', {
            'value': true
        }), _odc.getSlot439PersonalEffect = void 0;
        var _odf = _odd(74496);
        _odc.getSlot439PersonalEffect = function(_odg) {
            var _odh = null,
                _odi = new _odf.SlotItemEffectModel();
            1 != _odg.stype && 2 != _odg.stype && 3 != _odg.stype && 21 != _odg.stype || (_odi.tais += 1, _odi.kaih += 1), 101 != _odg.ctype && 1 != _odg.stype || (_odi.tais += 1);
            var _odj = _odg.getCountryName();
            return 'アメリカ' != _odj && 'イギリス' != _odj || (_odi.tais += 2), _odi;
        };
    },
    18387: (_odk, _odl, _odm) => {
        'use strict';
        var _odn = null;
        defineModule(_odl);
        Object.defineProperty(_odl, '__esModule', {
            'value': true
        }), _odl.getSlot440_441PersonalEffect = void 0;
        var _odo = _odm(74496);
        _odl.getSlot440_441PersonalEffect = function(_odp) {
            var _odq = null,
                _odr = new _odo.SlotItemEffectModel();
            return 114 == _odp.ctype && (_odr.raig += 2), _odr;
        };
    },
    70941: (_ods, _odt, _odu) => {
        'use strict';
        var _odv = null;
        defineModule(_odt);
        Object.defineProperty(_odt, '__esModule', {
            'value': true
        }), _odt.getSlot442_443PersonalEffect = void 0;
        var _odw = _odu(74496);
        _odt.getSlot442_443PersonalEffect = function(_odx) {
            var _ody = null,
                _odz = new _odw.SlotItemEffectModel();
            return 122 == _odx.ctype ? (_odz.raig += 1, _odz.kaih += 2) : 114 == _odx.ctype && (_odz.raig += 2), _odz;
        };
    },
    35025: (_oe0, _oe1, _oe2) => {
        'use strict';
        var _oe3 = null;
        defineModule(_oe1);
        Object.defineProperty(_oe1, '__esModule', {
            'value': true
        }), _oe1.getSlot447PersonalEffect = void 0;
        var _oe4 = _oe2(74496);
        _oe1.getSlot447PersonalEffect = function(_oe5) {
            var _oe6 = null,
                _oe7 = new _oe4.SlotItemEffectModel(),
                _oe8 = _oe5.get_each_level_nums(447),
                _oe9 = 0,
                _oea = 0,
                _oeb = 0,
                _oec = 0;
            _oe8.forEach(function(_oed, _oee) {
                _oee >= 2 && (_oe9 += _oed), _oee >= 4 && (_oea += _oed), _oee >= 6 && (_oeb += _oed), _oee >= 8 && (_oec += _oed);
            }), _oe9 >= 1 && (_oe7.houg += 1 * _oe9), _oea >= 1 && (_oe7.tyku += 1 * _oea), _oeb >= 1 && (_oe7.tais += 1 * _oeb), _oec >= 1 && (_oe7.kaih += 1 * _oec);
            var _oef = _oe8[10];
            _oef >= 1 && (_oe7.tais += 1 * _oef);
            var _oeg = false,
                _oeh = new _oe4.SlotItemEffectModel();
            if (76 == _oe5.ctype && (_oeh.houg += 1, _oeh.tais += 1, _oeh.kaih += 2, _oeg = true), 'うんよう' == _oe5.yomi ? (_oeh.houg += 1, _oeh.tais += 1, _oeh.kaih += 1, _oeg = true) : 'ほうしょう' != _oe5.yomi && 'たいげい・りゅうほう' != _oe5.yomi || (_oeh.houg += 1, _oeh.tais += 2, _oeh.kaih += 1, _oeg = true), 0 == _oeg) return _oe7;
            894 != _oe5.ship_id && 899 != _oe5.ship_id || (_oeh.houg += 1, _oeh.kaih += 1, _oeh.tais += 1, _oeh.tyku += 1, _oeg = true);
            var _oei = _oe5.get_slotnums(447);
            return _oe7.add(_oeh.multiply(_oei)), _oe7;
        };
    },
    96804: (_oej, _oek, _oel) => {
        'use strict';
        var _oem = null;
        defineModule(_oek);
        Object.defineProperty(_oek, '__esModule', {
            'value': true
        }), _oek.getSlot450PersonalEffect = void 0;
        var _oen = _oel(74496);
        _oek.getSlot450PersonalEffect = function(_oeo) {
            var _oep = null,
                _oeq = new _oen.SlotItemEffectModel(),
                _oer = false,
                _oes = new _oen.SlotItemEffectModel();
            if (101 == _oeo.ctype && (_oes.houg += 1, _oes.tyku += 2, _oes.souk += 1, _oes.kaih += 3, _oer = true), 1 == _oeo.stype && (_oes.tyku += 1, _oes.souk += 1, _oes.kaih += 2, _oer = true), 0 == _oer) return _oeq;
            var _oet = _oeo.get_slotnums(450);
            return _oeq.add(_oes.multiply(_oet)), _oeq;
        };
    },
    33896: (_oeu, _oev, _oew) => {
        'use strict';
        var _oex = null;
        defineModule(_oev);
        Object.defineProperty(_oev, '__esModule', {
            'value': true
        }), _oev.getSlot451PersonalEffect = void 0;
        var _oey = _oew(74496);
        _oev.getSlot451PersonalEffect = function(_oez) {
            var _of0 = null,
                _of1 = new _oey.SlotItemEffectModel(),
                _of2 = false,
                _of3 = new _oey.SlotItemEffectModel(),
                _of4 = 0;
            if ('あきつまる' == _oez.yomi ? (_of3.houg += 1, _of3.tais += 2, _of2 = true, 166 == _oez.ship_id && (_of4 = 2)) : 'やましおまる' == _oez.yomi && (_of3.houg += 1, _of3.tais += 3, _of2 = true, _of4 = 1), 0 == _of2) return _of1;
            var _of5 = _oez.get_slotnums(451);
            if (_of1.add(_of3.multiply(_of5)), 0 == _of4) return _of1;
            var _of6 = _oez.get_each_level_nums(451),
                _of7 = [];
            return _of4 > 0 && _of6.forEach(function(_of8, _of9) {
                var _ofa = null;
                for (var _ofb = 1; _ofb <= _oez.SLOT_LEVEL_MAX; _ofb++) _of9 >= _ofb && (null == _of7[_ofb] && (_of7[_ofb] = 0), _of7[_ofb] += _of8);
            }), 1 == _of4 ? (_of7[1] >= 1 && (_of1.houg += 2 * _of7[1]), _of7[2] >= 1 && (_of1.houm += 1 * _of7[2]), _of7[3] >= 1 && (_of1.tais += 1 * _of7[3]), _of7[4] >= 1 && (_of1.houg += 1 * _of7[4]), _of7[6] >= 1 && (_of1.houm += 1 * _of7[6]), _of7[8] >= 1 && (_of1.tais += 1 * _of7[8]), _of7[10] >= 1 && (_of1.houg += 1 * _of7[10])) : 2 == _of4 && (_of7[1] >= 1 && (_of1.houg += 1 * _of7[1]), _of7[3] >= 1 && (_of1.tais += 1 * _of7[3]), _of7[5] >= 1 && (_of1.houm += 1 * _of7[5]), _of7[7] >= 1 && (_of1.tais += 1 * _of7[7]), _of7[10] >= 1 && (_of1.houg += 1 * _of7[10])), _of1;
        };
    },
    11031: function(_ofc, _ofd, _ofe) {
        'use strict';
        var _off = null;
        var _ofg = this && this.__importDefault || function(_ofh) {
            var _ofi = null;
            return _ofh && _ofh.__esModule ? _ofh : {
                'default': _ofh
            };
        };
        defineModule(_ofd);
        Object.defineProperty(_ofd, '__esModule', {
            'value': true
        }), _ofd.getSlot455PersonalEffect = void 0;
        var _ofj = _ofe(74496),
            _ofk = _ofg(_ofe(18622));
        _ofd.getSlot455PersonalEffect = function(_ofl) {
            var _ofm = null,
                _ofn = new _ofj.SlotItemEffectModel(),
                _ofo = false,
                _ofp = new _ofj.SlotItemEffectModel(),
                _ofq = 0,
                _ofr = _ofl.get_slotnums(455);
            if (1 != _ofl.ctype && 5 != _ofl.ctype && 12 != _ofl.ctype || (_ofp.houg += 2, _ofp.tyku += 1, 12 == _ofl.ctype && (_ofp.houg += 1), 666 == _ofl.ship_id ? (_ofp.houg += 1, _ofp.tais += 1) : 959 == _ofl.ship_id && (_ofp.houg += 2, _ofr >= 2 && (_ofn.houg += 2), _ofr >= 3 && (_ofn.houg += 3)), _ofq = 1, _ofo = true), 'うらなみ' == _ofl.yomi && (_ofp.houg += 1, 647 == _ofl.ship_id && (_ofp.houg += 1, _ofp.raig += 1, _ofp.tais += 1, _ofp.kaih += 1), _ofo = true), 0 == _ofo) return _ofn;
            if (_ofn.add(_ofp.multiply(_ofr)), 0 == _ofq) return _ofn;
            for (var _ofs = 0, _oft = 0, _ofu = 0, _ofv = _ofl.have_slot_ids(); _ofu < _ofv.length; _ofu++) {
                var _ofw = _ofv[_ofu],
                    _ofx = _ofk.default.model.slot.getMst(_ofw),
                    _ofy = _ofx.equipType;
                12 != _ofy && 13 != _ofy || (_ofx.sakuteki >= 5 && (_ofs += _ofl.get_slotnums(parseInt(_ofw))), _ofx.taiku >= 2 && (_oft += _ofl.get_slotnums(parseInt(_ofw))));
            }
            if (1 == _ofq) {
                _ofs >= 1 && (_ofn.houg += 3, _ofn.kaih += 2, _ofn.raig += 1);
                var _ofz = _ofl.get_slotnums(13),
                    _og0 = _ofl.get_slotnums(125),
                    _og1 = _ofl.get_slotnums(285),
                    _og2 = _ofz + _og0 + _og1;
                1 == _og2 ? (_ofn.houg += 1, _ofn.raig += 3) : _og2 >= 2 && (_ofn.houg += 2, _ofn.raig += 5), _og1 >= 1 && (_ofn.raig += 1), _oft >= 1 && (_ofn.tyku += 4);
            }
            return _ofn;
        };
    },
    71383: (_og3, _og4, _og5) => {
        'use strict';
        var _og6 = null;
        defineModule(_og4);
        Object.defineProperty(_og4, '__esModule', {
            'value': true
        }), _og4.getSlot456PersonalEffect = void 0;
        var _og7 = _og5(74496);
        _og4.getSlot456PersonalEffect = function(_og8) {
            var _og9 = null,
                _oga = new _og7.SlotItemEffectModel(),
                _ogb = false,
                _ogc = new _og7.SlotItemEffectModel(),
                _ogd = _og8.getCountryName();
            if ('アメリカ' == _ogd && (_ogc.houg += 3, _ogc.kaih += 4, _ogc.saku += 4, _oga.houm += 3, _ogb = true), 'イギリス' != _ogd && 'オーストラリア' != _ogd || (_ogc.houg += 2, _ogc.kaih += 2, _ogc.saku += 2, _oga.houm += 2, _ogb = true), 87 != _og8.ctype && 91 != _og8.ctype || (_ogc.houg += 1, _oga.leng += 1, _ogb = true), 651 != _og8.ship_id && 656 != _og8.ship_id || (_oga.houg += 2, _oga.kaih += 2, _oga.saku += 3, _oga.leng += 1, _oga.houm += 2), 0 == _ogb) return _oga;
            var _oge = _og8.get_slotnums(456);
            return _oga.add(_ogc.multiply(_oge)), _oga;
        };
    },
    55888: (_ogf, _ogg, _ogh) => {
        'use strict';
        var _ogi = null;
        defineModule(_ogg);
        Object.defineProperty(_ogg, '__esModule', {
            'value': true
        }), _ogg.getSlot457PersonalEffect = void 0;
        var _ogj = _ogh(74496);
        _ogg.getSlot457PersonalEffect = function(_ogk) {
            var _ogl = null,
                _ogm = new _ogj.SlotItemEffectModel(),
                _ogn = 0;
            if (109 == _ogk.ctype ? (_ogm.raig += 3, _ogm.kaih += 3, _ogn = 1) : 71 == _ogk.ctype || 103 == _ogk.ctype ? (_ogm.raig += 2, _ogm.kaih += 2, _ogn = 2) : 44 == _ogk.ctype && (_ogm.raig += 1, _ogm.kaih += 4, _ogn = 3), 0 == _ogn) return _ogm;
            var _ogo = _ogk.get_each_level_nums(461),
                _ogp = [];
            return _ogn > 0 && _ogo.forEach(function(_ogq, _ogr) {
                var _ogs = null;
                for (var _ogt = 1; _ogt <= _ogk.SLOT_LEVEL_MAX; _ogt++) null == _ogp[_ogt] && (_ogp[_ogt] = 0), _ogr >= _ogt && (_ogp[_ogt] += _ogq);
            }), 1 == _ogn ? (_ogp[2] >= 1 && (_ogm.raig += 1 * _ogp[2]), _ogp[3] >= 1 && (_ogm.kaih += 1 * _ogp[3]), _ogp[4] >= 1 && (_ogm.raig += 1 * _ogp[4]), _ogp[5] >= 1 && (_ogm.houm += 1 * _ogp[5]), _ogp[6] >= 1 && (_ogm.raig += 1 * _ogp[6]), _ogp[8] >= 1 && (_ogm.raig += 1 * _ogp[8]), _ogp[10] >= 1 && (_ogm.houm += 1 * _ogp[10])) : 2 == _ogn ? (_ogp[3] >= 1 && (_ogm.kaih += 1 * _ogp[3]), _ogp[4] >= 1 && (_ogm.raig += 1 * _ogp[4]), _ogp[6] >= 1 && (_ogm.raig += 1 * _ogp[6]), _ogp[8] >= 1 && (_ogm.raig += 1 * _ogp[8]), _ogp[10] >= 1 && (_ogm.houm += 1 * _ogp[10])) : 3 == _ogn && (_ogp[4] >= 1 && (_ogm.raig += 1 * _ogp[4]), _ogp[6] >= 1 && (_ogm.raig += 1 * _ogp[6]), _ogp[8] >= 1 && (_ogm.raig += 1 * _ogp[8]), _ogp[10] >= 1 && (_ogm.houm += 1 * _ogp[10])), _ogm;
        };
    },
    2258: (_ogu, _ogv, _ogw) => {
        'use strict';
        var _ogx = null;
        defineModule(_ogv);
        Object.defineProperty(_ogv, '__esModule', {
            'value': true
        }), _ogv.getSlot458PersonalEffect = void 0;
        var _ogy = _ogw(74496);
        _ogv.getSlot458PersonalEffect = function(_ogz) {
            var _oh0 = null,
                _oh1 = new _ogy.SlotItemEffectModel(),
                _oh2 = 0,
                _oh3 = false;
            if (13 != _ogz.stype && 14 != _ogz.stype || (_oh3 = true), 109 == _ogz.ctype ? (_oh1.raig += 3, _oh1.kaih += 6, _oh2 = 1) : 71 == _ogz.ctype || 103 == _ogz.ctype ? (_oh1.raig += 3, _oh1.kaih += 4, _oh2 = 2) : 44 == _ogz.ctype && (_oh1.raig += 3, _oh1.kaih += 3, _oh2 = 3), 0 == _oh3 && 0 == _oh2) return _oh1;
            var _oh4 = [];
            [458, 461].forEach(function(_oh5) {
                var _oh6 = null,
                    _oh7 = _ogz.get_each_level_nums(_oh5);
                null == _oh4[_oh5] && (_oh4[_oh5] = []), _oh7.forEach(function(_oh8, _oh9) {
                    var _oha = null;
                    for (var _ohb = 1; _ohb <= _ogz.SLOT_LEVEL_MAX; _ohb++) null == _oh4[_oh5][_ohb] && (_oh4[_oh5][_ohb] = 0), _oh9 >= _ohb && (_oh4[_oh5][_ohb] += _oh8);
                });
            });
            var _ohc = _oh4[458][2],
                _ohd = _oh4[458][3],
                _ohe = _oh4[458][4],
                _ohf = _oh4[458][5],
                _ohg = _oh4[458][6],
                _ohh = _oh4[458][8],
                _ohi = _oh4[458][10],
                _ohj = _oh4[461][4];
            return _oh2 >= 1 && _oh2 <= 3 && (_ohe >= 1 && (_oh1.houm += 1 * _ohe), _ohg >= 1 && (_oh1.kaih += 1 * _ohg), _ohh >= 1 && (_oh1.raig += 1 * _ohh)), _oh3 && (_ohd >= 1 && (_oh1.kaih += 1 * _ohd), _ohf >= 1 && (_oh1.raig += 1 * _ohf), _ohi >= 1 && (_oh1.houm += 1 * _ohi), _ohc >= 1 && _ohj >= 1 && (_oh1.raig += 7, _oh1.houm += 5)), _oh1;
        };
    },
    43768: (_ohk, _ohl, _ohm) => {
        'use strict';
        var _ohn = null;
        defineModule(_ohl);
        Object.defineProperty(_ohl, '__esModule', {
            'value': true
        }), _ohl.getSlot463PersonalEffect = void 0;
        var _oho = _ohm(74496);
        _ohl.getSlot463PersonalEffect = function(_ohp) {
            var _ohq = null,
                _ohr = new _oho.SlotItemEffectModel(),
                _ohs = false,
                _oht = new _oho.SlotItemEffectModel(),
                _ohu = _ohp.get_slotnums(142),
                _ohv = _ohp.get_slotnums(460),
                _ohw = _ohu + _ohv;
            if (37 == _ohp.ctype && (_oht.houg += 1, _oht.tyku += 2, _oht.kaih += 1, _oht.houm += 1, _ohw >= 1 && (_ohr.tyku += 1, _ohr.kaih += 1, _ohr.houm += 1), _ohs = true), 916 != _ohp.ship_id && 911 != _ohp.ship_id && 546 != _ohp.ship_id || (_oht.houg += 1, _oht.kaih += 1, _oht.houm += 2, _ohv >= 1 && (_ohr.houg += 1, _ohr.kaih += 1, _ohr.houm += 2), _ohs = true), 0 == _ohs) return _ohr;
            var _ohx = _ohp.get_slotnums(463);
            return _ohr.add(_oht.multiply(_ohx)), _ohr;
        };
    },
    92174: (_ohy, _ohz, _oi0) => {
        'use strict';
        var _oi1 = null;
        defineModule(_ohz);
        Object.defineProperty(_ohz, '__esModule', {
            'value': true
        }), _ohz.getSlot464PersonalEffect = void 0;
        var _oi2 = _oi0(74496);
        _ohz.getSlot464PersonalEffect = function(_oi3) {
            var _oi4 = null,
                _oi5 = new _oi2.SlotItemEffectModel(),
                _oi6 = false,
                _oi7 = new _oi2.SlotItemEffectModel(),
                _oi8 = _oi3.get_slotnums(142),
                _oi9 = _oi3.get_slotnums(460),
                _oia = _oi8 + _oi9;
            if (37 == _oi3.ctype ? (_oi7.tyku += 3, _oi7.kaih += 2, _oia >= 1 && (_oi5.tyku += 2, _oi5.kaih += 1, _oi5.houm += 1), _oi6 = true) : 6 != _oi3.ctype && 73 != _oi3.ctype && 113 != _oi3.ctype || (_oi7.tyku = _oi7.tyku - 2, _oi7.kaih = _oi7.kaih - 2, _oi6 = true), 916 != _oi3.ship_id && 911 != _oi3.ship_id && 546 != _oi3.ship_id && 593 != _oi3.ship_id && 954 != _oi3.ship_id || (_oi7.tyku += 2, _oi7.kaih += 2, _oi9 >= 1 && (_oi5.houg += 2, _oi5.tyku += 2, _oi5.kaih += 2, _oi5.houm += 3), _oi6 = true), 0 == _oi6) return _oi5;
            var _oib = _oi3.get_slotnums(464);
            return _oi5.add(_oi7.multiply(_oib)), _oi5;
        };
    },
    38003: (_oic, _oid, _oie) => {
        'use strict';
        var _oif = null;
        defineModule(_oid);
        Object.defineProperty(_oid, '__esModule', {
            'value': true
        }), _oid.getSlot465PersonalEffect = void 0;
        var _oig = _oie(74496);
        _oid.getSlot465PersonalEffect = function(_oih) {
            var _oii = null,
                _oij = new _oig.SlotItemEffectModel(),
                _oik = false,
                _oil = new _oig.SlotItemEffectModel(),
                _oim = _oih.get_slotnums(142),
                _oin = _oih.get_slotnums(460),
                _oio = _oim + _oin;
            if (916 == _oih.ship_id ? (_oil.houg += 2, _oil.kaih += 8, _oil.houm += 2, _oin >= 1 && (_oij.kaih += 2, _oij.houm += 1), _oik = true) : 911 != _oih.ship_id && 546 != _oih.ship_id || (_oil.houg += 1, _oil.kaih += 2, _oil.houm += 1, _oin >= 1 && (_oij.kaih += 1, _oij.houm += 1), _oik = true), 37 == _oih.ctype && _oio >= 1 && (_oij.houg += 2, _oij.houm += 2), 0 == _oik) return _oij;
            var _oip = _oih.get_slotnums(465);
            return _oij.add(_oil.multiply(_oip)), _oij;
        };
    },
    65455: (_oiq, _oir, _ois) => {
        'use strict';
        var _oit = null;
        defineModule(_oir);
        Object.defineProperty(_oir, '__esModule', {
            'value': true
        }), _oir.getSlot466PersonalEffect = void 0;
        var _oiu = _ois(74496);
        _oir.getSlot466PersonalEffect = function(_oiv) {
            var _oiw = null,
                _oix = new _oiu.SlotItemEffectModel(),
                _oiy = false,
                _oiz = new _oiu.SlotItemEffectModel();
            if (277 == _oiv.ship_id || 278 == _oiv.ship_id || 156 == _oiv.ship_id || 288 == _oiv.ship_id || 112 == _oiv.ship_id || 280 == _oiv.ship_id || 279 == _oiv.ship_id ? (_oiz.houg += 1, _oiz.houm += 1, _oiy = true) : 461 == _oiv.ship_id || 462 == _oiv.ship_id || 466 == _oiv.ship_id || 467 == _oiv.ship_id ? (_oiz.houg += 2, _oiz.kaih += 2, _oiz.houm += 1, _oiy = true) : 594 != _oiv.ship_id && 698 != _oiv.ship_id && 646 != _oiv.ship_id && 599 != _oiv.ship_id && 610 != _oiv.ship_id && 196 != _oiv.ship_id && 197 != _oiv.ship_id || (_oiz.houg += 1, _oiz.kaih += 1, _oiz.houm += 2, _oiy = true), 0 == _oiy) return _oix;
            var _oj0 = _oiv.get_slotnums(466);
            return _oix.add(_oiz.multiply(_oj0)), _oix;
        };
    },
    70362: (_oj1, _oj2, _oj3) => {
        'use strict';
        var _oj4 = null;
        defineModule(_oj2);
        Object.defineProperty(_oj2, '__esModule', {
            'value': true
        }), _oj2.getSlot467PersonalEffect = void 0;
        var _oj5 = _oj3(74496);
        _oj2.getSlot467PersonalEffect = function(_oj6) {
            var _oj7 = null,
                _oj8 = new _oj5.SlotItemEffectModel(),
                _oj9 = false,
                _oja = new _oj5.SlotItemEffectModel();
            if ('アメリカ' == _oj6.getCountryName()) {
                for (var _ojb = _oj6.getUSSWaterRaderDict(), _ojc = _oj6.getUSSAirRaderDict(), _ojd = 0, _oje = 0, _ojf = 0, _ojg = _oj6.have_slot_ids(); _ojf < _ojg.length; _ojf++) {
                    var _ojh = _ojg[_ojf];
                    _ojb[parseInt(_ojh)] && (_ojd += _oj6.get_slotnums(parseInt(_ojh))), _ojc[parseInt(_ojh)] && (_oje += _oj6.get_slotnums(parseInt(_ojh)));
                }
                _oja.houg += 1, _oja.tyku += 1, _oja.kaih += 2, _ojd >= 1 && (_oj8.houg += 1, _oj8.tyku += 1, _oj8.kaih += 1, _oj8.houm += 2), _oje >= 1 && (_oj8.tyku += 2, _oj8.kaih += 2), 65 != _oj6.ctype && 93 != _oj6.ctype && 102 != _oj6.ctype && 107 != _oj6.ctype && 125 != _oj6.ctype || (_oja.tyku += 2, _oja.kaih += 1), _oj9 = true;
            }
            if (0 == _oj9) return _oj8;
            var _oji = _oj6.get_slotnums(467);
            return _oj8.add(_oja.multiply(_oji)), _oj8;
        };
    },
    68086: (_ojj, _ojk, _ojl) => {
        'use strict';
        var _ojm = null;
        defineModule(_ojk);
        Object.defineProperty(_ojk, '__esModule', {
            'value': true
        }), _ojk.getSlot470PersonalEffect = void 0;
        var _ojn = _ojl(74496);
        _ojk.getSlot470PersonalEffect = function(_ojo) {
            var _ojp = null,
                _ojq = new _ojn.SlotItemEffectModel(),
                _ojr = false,
                _ojs = new _ojn.SlotItemEffectModel(),
                _ojt = _ojo.get_slotnums(470),
                _oju = _ojo.get_slotnums(529),
                _ojv = _ojt + _oju,
                _ojw = _ojo.get_each_level_over_nums([470, 529]),
                _ojx = (_ojw.slot[470], _ojw.slot[529]),
                _ojy = _ojw.total,
                _ojz = 0;
            23 == _ojo.ctype || 18 == _ojo.ctype ? (_ojs.houg += 1, _ojr = true, _ojz = 1) : 30 == _ojo.ctype && (_ojs.houg += 2, _ojr = true, _ojz = 2), ('しぐれ' == _ojo.yomi || 'ゆきかぜ' == _ojo.yomi || 'いそかぜ' == _ojo.yomi) && (_ojs.kaih += 2, _ojr = true), 405 == _ojo.ship_id || 246 == _ojo.ship_id || 144 == _ojo.ship_id || 145 == _ojo.ship_id || 497 == _ojo.ship_id ? (_oju >= 1 && (_ojq.houg += 1 * _oju, _ojq.tyku += 1 * _oju, _ojq.houm += 1 * _oju, _ojq.kaih += 1 * _oju), 2 == _oju ? _ojq.houg += 1 : _oju >= 3 && (_ojq.houg += 3), _ojx[8] >= 1 && (_ojq.tyku += 1 * _ojx[8]), _ojx[10] >= 1 && (_ojq.houg += 1 * _ojx[10])) : 323 == _ojo.ship_id || 498 == _ojo.ship_id || 961 == _ojo.ship_id ? (_oju >= 1 && (_ojq.houg += 2 * _oju, _ojq.tyku += 2 * _oju, _ojq.houm += 1 * _oju, _ojq.kaih += 1 * _oju), 2 == _oju ? _ojq.houg += 2 : _oju >= 3 && (_ojq.houg += 4), _ojx[6] >= 1 && (_ojq.tyku += 1 * _ojx[6]), _ojx[8] >= 1 && (_ojq.houm += 1 * _ojx[8]), _ojx[10] >= 1 && (_ojq.houg += 1 * _ojx[10])) : 975 == _ojo.ship_id && (_oju >= 1 && (_ojq.houg += 3 * _oju, _ojq.tyku += 3 * _oju, _ojq.houm += 2 * _oju, _ojq.kaih += 2 * _oju), 2 == _oju ? _ojq.houg += 3 : _oju >= 3 && (_ojq.houg += 6), _ojx[4] >= 1 && (_ojq.tyku += 1 * _ojx[4]), _ojx[6] >= 1 && (_ojq.houg += 1 * _ojx[6]), _ojx[8] >= 1 && (_ojq.houm += 1 * _ojx[8]), _ojx[10] >= 1 && (_ojq.houg += 1 * _ojx[10])), 961 == _ojo.ship_id && (_ojs.houg += 3, _ojs.houm += 3, _ojs.kaih += 2, _ojr = true), 566 != _ojo.ship_id && 567 != _ojo.ship_id && 568 != _ojo.ship_id && 656 != _ojo.ship_id && 670 != _ojo.ship_id && 915 != _ojo.ship_id && 651 != _ojo.ship_id && 145 != _ojo.ship_id && 961 != _ojo.ship_id && 951 != _ojo.ship_id || (_ojq.houg += 1, _ojq.houm += 2, _ojv >= 2 && (_ojq.houg += 2), _ojy[5] >= 1 && (_ojq.houm += 1 * _ojy[5]), _ojy[8] >= 1 && (_ojq.houg += 1 * _ojy[8]), _ojy[10] >= 1 && (_ojq.houm += 1 * _ojy[10])), _ojr && _ojq.add(_ojs.multiply(_ojv));
            var _ok0 = _ojo.get_have_rader_nums(),
                _ok1 = _ok0.water_rader,
                _ok2 = _ok0.air_rader;
            return _ok1 >= 1 && (1 == _ojz ? (_ojq.houg += 1, _ojq.raig += 3, _ojq.kaih += 1, _ojq.houm += 1) : 2 == _ojz && (_ojq.houg += 2, _ojq.raig += 3, _ojq.kaih += 1, _ojq.houm += 3)), _ok2 >= 1 && (_oju >= 1 && (_ojq.tyku += 2, _ojq.kaih += 2), 2 == _oju ? _ojq.tyku += 2 : _oju >= 3 && (_ojq.tyku += 4)), _ojq;
        };
    },
    78173: (_ok3, _ok4, _ok5) => {
        'use strict';
        var _ok6 = null;
        defineModule(_ok4);
        Object.defineProperty(_ok4, '__esModule', {
            'value': true
        }), _ok4.getSlot471PersonalEffect = void 0;
        var _ok7 = _ok5(74496);
        _ok4.getSlot471PersonalEffect = function(_ok8) {
            var _ok9 = null,
                _oka = new _ok7.SlotItemEffectModel(),
                _okb = false,
                _okc = new _ok7.SlotItemEffectModel(),
                _okd = 0;
            if ('フランス' == _ok8.getCountryName() && (_okc.houg += 2, _okc.kaih += 2, _okc.houm += 2, _okb = true, _okd = 1), 79 == _ok8.ctype && (_okc.houg += 2, _okc.houm += 1, _okb = true), 0 == _okb) return _oka;
            var _oke = _ok8.get_slotnums(471);
            if (_oka.add(_okc.multiply(_oke)), 0 == _okd) return _oka;
            var _okf = _ok8.get_each_level_nums(471),
                _okg = 0,
                _okh = 0;
            if (_okd > 0 && _okf.forEach(function(_oki, _okj) {
                    _okj >= 6 && (_okg += _oki), _okj >= 8 && (_okh += _oki);
                }), 1 == _okd) {
                _okg >= 1 && (_oka.kaih += 1 * _okg, _oka.houm += 1 * _okg), _okh >= 1 && (_oka.houg += 1 * _okh, _oka.kaih += 1 * _okh, _oka.houm += 1 * _okh);
                var _okk = _okf[10];
                _okk >= 1 && (_oka.houg += 1 * _okk, _oka.houm += 1 * _okk);
            }
            return _oka;
        };
    },
    22581: (_okl, _okm, _okn) => {
        'use strict';
        var _oko = null;
        defineModule(_okm);
        Object.defineProperty(_okm, '__esModule', {
            'value': true
        }), _okm.getSlot472PersonalEffect = void 0;
        var _okp = _okn(74496);
        _okm.getSlot472PersonalEffect = function(_okq) {
            var _okr = null,
                _oks = new _okp.SlotItemEffectModel(),
                _okt = false,
                _oku = new _okp.SlotItemEffectModel(),
                _okv = _okq.getCountryName();
            if ('アメリカ' == _okv && (_oku.tais += 2, _okt = true), 'イギリス' == _okv && (_oku.tais += 1, _okt = true), 1 == _okq.stype && (_oku.kaih += 1, _okt = true), _okt) {
                var _okw = _okq.get_slotnums(472);
                _oks.add(_oku.multiply(_okw));
            }
            return 920 == _okq.ship_id && (_oks.tais += 1, _oks.kaih += 1, _oks.houm += 1), _oks;
        };
    },
    13053: (_okx, _oky, _okz) => {
        'use strict';
        var _ol0 = null;
        defineModule(_oky);
        Object.defineProperty(_oky, '__esModule', {
            'value': true
        }), _oky.getSlot473PersonalEffect = void 0;
        var _ol1 = _okz(74496);
        _oky.getSlot473PersonalEffect = function(_ol2) {
            var _ol3 = null,
                _ol4 = new _ol1.SlotItemEffectModel(),
                _ol5 = false,
                _ol6 = new _ol1.SlotItemEffectModel(),
                _ol7 = _ol2.getCountryName();
            if ('アメリカ' == _ol7 && (_ol6.houg += 1, _ol6.kaih += 1, _ol6.tyku += 1, _ol5 = true), 'イギリス' == _ol7 && (_ol6.houg += 1, _ol6.kaih += 1, _ol5 = true), 0 == _ol5) return _ol4;
            var _ol8 = _ol2.get_slotnums(473);
            return _ol4.add(_ol6.multiply(_ol8)), _ol4;
        };
    },
    47874: (_ol9, _ola, _olb) => {
        'use strict';
        var _olc = null;
        defineModule(_ola);
        Object.defineProperty(_ola, '__esModule', {
            'value': true
        }), _ola.getSlot474PersonalEffect = void 0;
        var _old = _olb(74496);
        _ola.getSlot474PersonalEffect = function(_ole) {
            var _olf = null,
                _olg = new _old.SlotItemEffectModel(),
                _olh = false,
                _oli = new _old.SlotItemEffectModel(),
                _olj = _ole.getCountryName();
            if ('アメリカ' == _olj && (_oli.houg += 2, _oli.kaih += 1, _oli.tyku += 1, _olh = true), 'イギリス' == _olj && (_oli.houg += 1, _oli.kaih += 1, _oli.tyku += 1, _olh = true), 'フランス' == _olj && (_oli.houg += 1, _oli.tyku += 1, _olh = true), 707 != _ole.ship_id && 930 != _ole.ship_id || (_oli.houg += 1, _oli.kaih += 1, _olh = true), 0 == _olh) return _olg;
            var _olk = _ole.get_slotnums(474);
            return _olg.add(_oli.multiply(_olk)), _olg;
        };
    },
    42788: (_oll, _olm, _oln) => {
        'use strict';
        var _olo = null;
        defineModule(_olm);
        Object.defineProperty(_olm, '__esModule', {
            'value': true
        }), _olm.getSlot478PersonalEffect = void 0;
        var _olp = _oln(74496);
        _olm.getSlot478PersonalEffect = function(_olq) {
            var _olr = null,
                _ols = new _olp.SlotItemEffectModel(),
                _olt = _olq.get_each_level_nums(478),
                _olu = [];
            return _olt.forEach(function(_olv, _olw) {
                var _olx = null;
                for (var _oly = 1; _oly <= _olq.SLOT_LEVEL_MAX; _oly++) _olw >= _oly && (null == _olu[_oly] && (_olu[_oly] = 0), _olu[_oly] += _olv);
            }), _olu.every(function(_olz) {
                return 0 == _olz;
            }) || (_olu[1] >= 1 && (_ols.houg += 1), _olu[2] >= 1 && (_ols.houm += 1), _olu[3] >= 1 && (_ols.kaih += 1), _olu[4] >= 1 && (_ols.baku += 1), _olu[5] >= 1 && (_ols.raig += 1), _olu[6] >= 1 && (_ols.tyku += 1), _olu[7] >= 1 && (_ols.houg += 1), _olu[8] >= 1 && (_ols.houm += 1), _olu[9] >= 1 && (_ols.kaih += 1), _olu[10] >= 1 && (_ols.houg += 1)), _ols;
        };
    },
    22218: (_om0, _om1, _om2) => {
        'use strict';
        var _om3 = null;
        defineModule(_om1);
        Object.defineProperty(_om1, '__esModule', {
            'value': true
        }), _om1.getSlot47PersonalEffect = void 0;
        var _om4 = _om2(74496);
        _om1.getSlot47PersonalEffect = function(_om5) {
            var _om6 = null,
                _om7 = new _om4.SlotItemEffectModel(),
                _om8 = new _om4.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_om5.yomi) >= 0 ? (_om8.tais += 3, _om8.kaih += 2, _om8.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_om5.yomi) >= 0 && (_om8.tais += 2, _om8.kaih += 2), !_om8.exists()) return _om7;
            var _om9 = _om5.get_slotnums(47) + _om5.get_slotnums(438);
            return _om7 = _om8.multiply(_om9);
        };
    },
    57664: (_oma, _omb, _omc) => {
        'use strict';
        var _omd = null;
        defineModule(_omb);
        Object.defineProperty(_omb, '__esModule', {
            'value': true
        }), _omb.getSlot483PersonalEffect = void 0;
        var _ome = _omc(74496);
        _omb.getSlot483PersonalEffect = function(_omf) {
            var _omg = null,
                _omh = new _ome.SlotItemEffectModel(),
                _omi = 0,
                _omj = 0,
                _omk = 0,
                _oml = 0,
                _omm = 0,
                _omn = 0,
                _omo = 0;
            if (6 == _omf.ctype ? (_omh.houg += 2, _omh.tyku += 3, _omh.houm += 1, _omi = 1) : 2 == _omf.ctype ? (_omh.houg += 1, _omh.tyku += 2, _omh.kaih += 2, _omh.houm += 1, _omj = 1) : 37 == _omf.ctype && (_omk = 1), 8 == _omf.stype || 9 == _omf.stype || 10 == _omf.stype ? _oml = 1 : 5 != _omf.stype && 6 != _omf.stype || (_omm = 1), 149 == _omf.ship_id ? (_omh.houg += 2, _omh.tyku += 2) : 591 == _omf.ship_id ? (_omh.houg += 3, _omh.tyku += 3, _omh.kaih += 1) : 150 == _omf.ship_id ? (_omh.houg += 1, _omh.tyku += 1) : 592 == _omf.ship_id ? (_omh.houg += 2, _omh.tyku += 2, _omh.kaih += 2) : 151 == _omf.ship_id ? (_omh.houg += 1, _omh.tyku += 2, _omh.kaih += 2) : 593 == _omf.ship_id ? (_omh.houg += 2, _omh.tyku += 5, _omh.kaih += 3) : 954 == _omf.ship_id ? (_omh.houg += 2, _omh.tyku += 4, _omh.kaih += 2) : 694 == _omf.ship_id ? (_omh.houg += 3, _omh.tyku += 2, _omh.kaih += 1) : 152 == _omf.ship_id ? (_omh.houg += 2, _omh.tyku += 2) : 911 == _omf.ship_id || 916 == _omf.ship_id || 546 == _omf.ship_id ? (_omh.houg += 2, _omh.tyku += 2, _omh.kaih += 2, _omn = 1) : 553 == _omf.ship_id || 554 == _omf.ship_id ? (_omh.houg += 1, _omh.tyku += 2, _omh.kaih += 1, _omo = 1) : 541 == _omf.ship_id || 411 == _omf.ship_id || 412 == _omf.ship_id ? (_omh.houg += 1, _omh.tyku += 2) : 573 == _omf.ship_id && (_omh.houg += 2, _omh.tyku += 2, _omh.kaih += 1), 0 == [_omi, _omj, _omk, _oml, _omm, _omn, _omo].reduce(function(_omp, _omq) {
                    return _omp + _omq;
                }, 0)) return _omh;
            var _omr = _omf.get_each_level_nums(483),
                _oms = 0,
                _omt = [];
            return _omr.forEach(function(_omu, _omv) {
                var _omw = null;
                _omv >= 6 && (_oms += _omu);
                for (var _omx = 1; _omx <= _omf.SLOT_LEVEL_MAX; _omx++) null == _omt[_omx] && (_omt[_omx] = 0), _omv >= _omx && (_omt[_omx] += _omu);
            }), 1 == _omi ? (_oms >= 1 && (_omh.houm += 1), _omr[10] >= 1 && (_omh.houm += 1)) : 1 == _omj ? (_omt[5] >= 1 && (_omh.kaih += 1), _omt[6] >= 1 && (_omh.houm += 1), _omt[10] >= 1 && (_omh.kaih += 1)) : 1 == _omk && (_omt[6] >= 1 && (_omh.houm += 1), _omt[10] >= 1 && (_omh.kaih += 1)), 1 == _oml ? (_omt[2] >= 1 && (_omh.tyku += 1), _omt[4] >= 1 && (_omh.houg += 1), _omt[7] >= 1 && (_omh.kaih += 1), _omt[8] >= 1 && (_omh.tyku += 1), _omt[9] >= 1 && (_omh.houg += 1)) : 1 == _omm && (_omt[2] >= 1 && (_omh.tyku += 1), _omt[4] >= 1 && (_omh.houg += 1), _omt[6] >= 1 && (_omh.kaih += 1), _omt[8] >= 1 && (_omh.houm += 1), _omt[10] >= 1 && (_omh.houg += 1)), 1 == _omn ? _omt[5] >= 1 && (_omh.houm += 1) : 1 == _omo && (_omt[1] >= 1 && (_omh.houm += 1), _omt[3] >= 1 && (_omh.houm += 1)), _omh;
        };
    },
    44990: (_omy, _omz, _on0) => {
        'use strict';
        var _on1 = null;
        defineModule(_omz);
        Object.defineProperty(_omz, '__esModule', {
            'value': true
        }), _omz.getSlot485PersonalEffect = void 0;
        var _on2 = _on0(74496);
        _omz.getSlot485PersonalEffect = function(_on3) {
            var _on4 = null,
                _on5 = new _on2.SlotItemEffectModel(),
                _on6 = false,
                _on7 = new _on2.SlotItemEffectModel();
            if (9 == _on3.ctype && (_on7.houg += 1, _on7.kaih += 2, _on7.tyku += 3, _on6 = true), 501 == _on3.ship_id || 506 == _on3.ship_id ? (_on7.kaih += 1, _on7.tyku += 2, _on7.houm += 1, _on6 = true) : 502 != _on3.ship_id && 507 != _on3.ship_id || (_on7.kaih += 1, _on7.tyku += 1, _on7.houm += 1, _on6 = true), _on6) {
                var _on8 = _on3.get_slotnums(485);
                _on5.add(_on7.multiply(_on8));
            }
            var _on9 = _on3.get_each_level_nums(485),
                _ona = 0,
                _onb = 0,
                _onc = 0,
                _ond = _on9[10];
            return _on9.forEach(function(_one, _onf) {
                _onf >= 3 && (_ona += _one), _onf >= 5 && (_onb += _one), _onf >= 7 && (_onc += _one);
            }), _ona > 0 && (_on5.houg += 1 * _ona), _onb > 0 && (_on5.tyku += 1 * _onb), _onc > 0 && (_on5.kaih += 1 * _onc), _ond > 0 && (_on5.houm += 1 * _ond), _on5;
        };
    },
    83957: (_ong, _onh, _oni) => {
        'use strict';
        var _onj = null;
        defineModule(_onh);
        Object.defineProperty(_onh, '__esModule', {
            'value': true
        }), _onh.getSlot486PersonalEffect = void 0;
        var _onk = _oni(74496);
        _onh.getSlot486PersonalEffect = function(_onl) {
            var _onm = null,
                _onn = new _onk.SlotItemEffectModel(),
                _ono = false,
                _onp = new _onk.SlotItemEffectModel();
            if (894 == _onl.ship_id || 899 == _onl.ship_id ? (_onp.houg += 4, _onp.tyku += 4, _onp.kaih += 3, _onp.houm += 2, _ono = true) : 888 != _onl.ship_id && 883 != _onl.ship_id || (_onp.houg += 2, _onp.tyku += 2, _onp.kaih += 2, _onp.houm += 1, _ono = true), _ono) {
                var _onq = _onl.get_slotnums(486);
                _onn.add(_onp.multiply(_onq));
            }
            var _onr = _onl.get_each_level_nums(486),
                _ons = 0,
                _ont = 0,
                _onu = _onr[10];
            return _onr.forEach(function(_onv, _onw) {
                _onw >= 6 && (_ons += _onv), _onw >= 8 && (_ont += _onv);
            }), _ons > 0 && (_onn.kaih += 1 * _ons, _onn.houm += 1 * _ons), _ont > 0 && (_onn.tyku += 1 * _ont, _onn.kaih += 1 * _ont), _onu > 0 && (_onn.houg += 1 * _onu, _onn.houm += 1 * _onu), _onn;
        };
    },
    78539: (_onx, _ony, _onz) => {
        'use strict';
        var _oo0 = null;
        defineModule(_ony);
        Object.defineProperty(_ony, '__esModule', {
            'value': true
        }), _ony.getSlot487PersonalEffect = void 0;
        var _oo1 = _onz(74496);
        _ony.getSlot487PersonalEffect = function(_oo2) {
            var _oo3 = null,
                _oo4 = new _oo1.SlotItemEffectModel(),
                _oo5 = false,
                _oo6 = new _oo1.SlotItemEffectModel();
            if (894 == _oo2.ship_id || 899 == _oo2.ship_id ? (_oo6.houg += 5, _oo6.tyku += 3, _oo6.kaih += 2, _oo6.houm += 4, _oo5 = true) : 888 != _oo2.ship_id && 883 != _oo2.ship_id || (_oo6.houg += 3, _oo6.tyku += 1, _oo6.kaih += 1, _oo6.houm += 2, _oo5 = true), _oo5) {
                var _oo7 = _oo2.get_slotnums(487);
                _oo4.add(_oo6.multiply(_oo7));
            }
            var _oo8 = _oo2.get_each_level_nums(487),
                _oo9 = 0,
                _ooa = 0,
                _oob = _oo8[10];
            return _oo8.forEach(function(_ooc, _ood) {
                _ood >= 6 && (_oo9 += _ooc), _ood >= 8 && (_ooa += _ooc);
            }), _oo9 > 0 && (_oo4.houg += 1 * _oo9, _oo4.kaih += 1 * _oo9), _ooa > 0 && (_oo4.tyku += 1 * _ooa, _oo4.houm += 1 * _ooa), _oob > 0 && (_oo4.houg += 1 * _oob, _oo4.houm += 1 * _oob), _oo4;
        };
    },
    96282: (_ooe, _oof, _oog) => {
        'use strict';
        var _ooh = null;
        defineModule(_oof);
        Object.defineProperty(_oof, '__esModule', {
            'value': true
        }), _oof.getSlot488PersonalEffect = void 0;
        var _ooi = _oog(74496);
        _oof.getSlot488PersonalEffect = function(_ooj) {
            var _ook = null,
                _ool = new _ooi.SlotItemEffectModel(),
                _oom = false,
                _oon = new _ooi.SlotItemEffectModel(),
                _ooo = 0,
                _oop = _ooj.getCountryName(),
                _ooq = {
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
                }[_ooj.ship_id];
            if (('日本' == _oop && 2 == _ooj.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_ooj.ctype] && 1 == _ooj.stype) && (_oon.tais += 1, _oon.kaih += 1, _oom = true), 1 == _ooq ? (_oon.tais += 5, _oon.kaih += 4, _oon.houm += 2, _oom = true, _ooo = 1) : 2 == _ooq ? (_oon.tais += 2, _oon.kaih += 1, _oon.houm += 1, _oom = true, _ooo = 2) : 3 == _ooq && (_oon.tais += 1, _oom = true, _ooo = 2), 0 == _oom) return _ool;
            var _oor = _ooj.get_slotnums(488);
            if (_ool.add(_oon.multiply(_oor)), 0 == _ooo) return _ool;
            var _oos = _ooj.get_each_level_nums(488),
                _oot = [];
            return _oos.forEach(function(_oou, _oov) {
                var _oow = null;
                for (var _oox = 1; _oox <= _ooj.SLOT_LEVEL_MAX; _oox++) _oov >= _oox && (null == _oot[_oox] && (_oot[_oox] = 0), _oot[_oox] += _oou);
            }), 1 == _ooo ? (_oot[3] >= 1 && (_ool.kaih += 1 * _oot[3]), _oot[5] >= 1 && (_ool.tais += 1 * _oot[5]), _oot[7] >= 1 && (_ool.houm += 1 * _oot[7]), _oot[8] >= 1 && (_ool.kaih += 1 * _oot[8]), _oot[9] >= 1 && (_ool.tais += 1 * _oot[9]), _oot[10] >= 1 && (_ool.tais += 1 * _oot[10])) : 2 == _ooo && (_oot[5] >= 1 && (_ool.tais += 1 * _oot[5]), _oot[7] >= 1 && (_ool.kaih += 1 * _oot[7]), _oot[9] >= 1 && (_ool.houm += 1 * _oot[9]), _oot[10] >= 1 && (_ool.tais += 1 * _oot[10])), _ool;
        };
    },
    49679: (_ooy, _ooz, _op0) => {
        'use strict';
        var _op1 = null;
        defineModule(_ooz);
        Object.defineProperty(_ooz, '__esModule', {
            'value': true
        }), _ooz.getSlot489PersonalEffect = void 0;
        var _op2 = _op0(74496);
        _ooz.getSlot489PersonalEffect = function(_op3) {
            var _op4 = null,
                _op5 = new _op2.SlotItemEffectModel(),
                _op6 = false,
                _op7 = new _op2.SlotItemEffectModel();
            if ('あきつまる' != _op3.yomi && 'やましおまる' != _op3.yomi && 'くまのまる' != _op3.yomi || (_op7.tyku = _op7.tyku + 2, _op7.kaih = _op7.kaih + 1, _op7.houg = _op7.houg + 1, _op7.tais = _op7.tais + 1, _op7.houm = _op7.houm + 1, _op6 = true), 717 != _op3.ship_id && 948 != _op3.ship_id || (_op7.tyku = _op7.tyku + 2, _op7.kaih = _op7.kaih + 2, _op7.houg = _op7.houg + 2, _op7.tais = _op7.tais + 1, _op7.houm = _op7.houm + 1, _op6 = true), _op6) {
                var _op8 = _op3.get_slotnums(489) + _op3.get_slotnums(491);
                _op5.add(_op7.multiply(_op8));
            }
            var _op9 = _op3.get_each_level_nums(489),
                _opa = _op3.get_each_level_nums(491),
                _opb = 0,
                _opc = 0,
                _opd = 0;
            _op9.forEach(function(_ope, _opf) {
                _opf >= 3 && (_opb += _ope), _opf >= 6 && (_opc += _ope), _opf >= 8 && (_opd += _ope);
            }), _opa.forEach(function(_opg, _oph) {
                _oph >= 3 && (_opb += _opg), _oph >= 6 && (_opc += _opg), _oph >= 8 && (_opd += _opg);
            });
            var _opi = _op9[10] + _opa[10];
            return _opb >= 1 && (_op5.kaih = _op5.kaih + 1 * _opb), _opc >= 1 && (_op5.tais = _op5.tais + 1 * _opc), _opd >= 1 && (_op5.houm = _op5.houm + 1 * _opd), _opi >= 1 && (_op5.houg = _op5.houg + 1 * _opi), _op5;
        };
    },
    90312: function(_opj, _opk, _opl) {
        'use strict';
        var _opm = null;
        var _opn = this && this.__importDefault || function(_opo) {
            var _opp = null;
            return _opo && _opo.__esModule ? _opo : {
                'default': _opo
            };
        };
        defineModule(_opk);
        Object.defineProperty(_opk, '__esModule', {
            'value': true
        }), _opk.getSlot502PersonalEffect = void 0;
        var _opq = _opl(74496),
            _opr = _opn(_opl(18622));
        _opk.getSlot502PersonalEffect = function(_ops) {
            var _opt = null,
                _opu = new _opq.SlotItemEffectModel(),
                _opv = _ops.get_slotnums(502),
                _opw = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    694: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _opx = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3,
                    694: 1
                },
                _opy = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3,
                    694: 3
                },
                _opz = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _oq0 = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_opw[_ops.ship_id]) {
                var _oq1 = _opw[_ops.ship_id];
                _opu.houg += _opv * _oq1;
            }
            if (_opx[_ops.ship_id]) {
                var _oq2 = _opx[_ops.ship_id];
                _opu.tyku += _opv * _oq2;
            }
            if (_opy[_ops.ship_id]) {
                var _oq3 = _opy[_ops.ship_id],
                    _oq4 = _ops.get_each_level_nums(502),
                    _oq5 = [];
                _oq4.forEach(function(_oq6, _oq7) {
                    var _oq8 = null;
                    for (var _oq9 = 1; _oq9 <= _ops.SLOT_LEVEL_MAX; _oq9++) _oq7 >= _oq9 && (null == _oq5[_oq9] && (_oq5[_oq9] = 0), _oq5[_oq9] += _oq6);
                }), 1 == _oq3 ? (_opu.kaih += 3 * _opv, _oq5[1] > 0 && (_opu.kaih += 1 * _oq5[1]), _oq5[3] > 0 && (_opu.tyku += 1 * _oq5[3]), _oq5[5] > 0 && (_opu.houg += 1 * _oq5[5]), _oq5[7] > 0 && (_opu.kaih += 1 * _oq5[7]), _oq5[8] > 0 && (_opu.tyku += 1 * _oq5[8]), _oq5[9] > 0 && (_opu.houg += 1 * _oq5[9]), _oq5[10] > 0 && (_opu.tyku += 1 * _oq5[10])) : 2 == _oq3 ? (_opu.kaih += 1 * _opv, _oq5[2] > 0 && 151 == _ops.ship_id && (_opu.kaih += 1 * _oq5[2]), _oq5[4] > 0 && (_opu.tyku += 1 * _oq5[4]), _oq5[6] > 0 && (_opu.houg += 1 * _oq5[6]), _oq5[8] > 0 && (_opu.kaih += 1 * _oq5[8]), _oq5[10] > 0 && (_opu.tyku += 1 * _oq5[10])) : 3 == _oq3 && (_oq5[5] > 0 && (_opu.kaih += 1 * _oq5[5]), _oq5[8] > 0 && (_opu.houg += 1 * _oq5[8]), _oq5[10] > 0 && (_opu.tyku += 1 * _oq5[10]));
            }
            if (_opz[_ops.ship_id]) {
                for (var _oqa = 0, _oqb = 0, _oqc = _ops.have_slot_ids(); _oqb < _oqc.length; _oqb++) {
                    var _oqd = _oqc[_oqb],
                        _oqe = _opr.default.model.slot.getMst(_oqd),
                        _oqf = _oqe.equipType;
                    12 != _oqf && 13 != _oqf || (_oqe.sakuteki >= 5 && (_oqa += _ops.get_slotnums(parseInt(_oqd))), _oqe.taiku >= 2 && _ops.get_slotnums(parseInt(_oqd)));
                }
                0;
                var _oqg = _opz[_ops.ship_id];
                1 == _oqg && _oqa >= 1 ? (_opu.houg += 3, _opu.kaih += 4) : 2 == _oqg && _oqa >= 1 && (_opu.houg += 2, _opu.kaih += 2);
            }
            if (_oq0[_ops.ship_id]) {
                var _oqh = _oq0[_ops.ship_id],
                    _oqi = [],
                    _oqj = [],
                    _oqk = _ops.have_slot_ids();
                [410, 411].forEach(function(_oql) {
                    var _oqm = null;
                    _oqk.indexOf(_oql.toString()) > -1 && (_oqj[_oql] = _ops.get_each_level_nums(_oql), null == _oqi[_oql] && (_oqi[_oql] = []), _oqj[_oql].forEach(function(_oqn, _oqo) {
                        var _oqp = null;
                        for (var _oqq = 1; _oqq <= _ops.SLOT_LEVEL_MAX; _oqq++) null == _oqi[_oql][_oqq] && (_oqi[_oql][_oqq] = 0), _oqo >= _oqq && (_oqi[_oql][_oqq] += _oqn);
                    }));
                });
                var _oqr = _oqj[410],
                    _oqs = _oqj[411];
                if (1 == _oqh) {
                    if (_oqr) {
                        _opu.tyku += 1;
                        var _oqt = _oqi[410];
                        _oqt[7] >= 1 && (_opu.houg += 1), _oqt[10] >= 1 && (_opu.kaih += 1);
                    }
                    if (_oqs) {
                        _opu.tyku += 2;
                        var _oqu = _oqi[411];
                        _oqu[2] >= 1 && (_opu.houg += 1), _oqu[4] >= 1 && (_opu.kaih += 1), _oqu[6] >= 1 && (_opu.houm += 1), _oqu[8] >= 1 && (_opu.tyku += 1), _oqu[10] >= 1 && (_opu.houg += 1);
                    }
                }
            }
            return _opu;
        };
    },
    86856: function(_oqv, _oqw, _oqx) {
        'use strict';
        var _oqy = null;
        var _oqz = this && this.__importDefault || function(_or0) {
            var _or1 = null;
            return _or0 && _or0.__esModule ? _or0 : {
                'default': _or0
            };
        };
        defineModule(_oqw);
        Object.defineProperty(_oqw, '__esModule', {
            'value': true
        }), _oqw.getSlot503PersonalEffect = void 0;
        var _or2 = _oqx(74496),
            _or3 = _oqz(_oqx(18622));
        _oqw.getSlot503PersonalEffect = function(_or4) {
            var _or5 = null,
                _or6 = new _or2.SlotItemEffectModel(),
                _or7 = _or4.get_slotnums(503),
                _or8 = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4,
                    694: 4
                },
                _or9 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    694: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _ora = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3,
                    694: 4
                },
                _orb = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2,
                    694: 2
                },
                _orc = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1,
                    694: 1
                },
                _ord = {
                    591: 1,
                    592: 2,
                    593: 2,
                    694: 2,
                    954: 3
                };
            if (_or8[_or4.ship_id]) {
                var _ore = _or8[_or4.ship_id];
                _or6.houg += _or7 * _ore;
            }
            if (_or9[_or4.ship_id]) {
                var _orf = _or9[_or4.ship_id];
                _or6.tyku += _or7 * _orf;
            }
            if (_ora[_or4.ship_id]) {
                var _org = _ora[_or4.ship_id],
                    _orh = _or4.get_each_level_nums(503),
                    _ori = [];
                _orh.forEach(function(_orj, _ork) {
                    var _orl = null;
                    for (var _orm = 1; _orm <= _or4.SLOT_LEVEL_MAX; _orm++) _ork >= _orm && (null == _ori[_orm] && (_ori[_orm] = 0), _ori[_orm] += _orj);
                }), 1 == _org ? (_or6.houm += 2 * _or7, _ori[1] > 0 && (_or6.houg += 1 * _ori[1]), _ori[2] > 0 && (_or6.tyku += 1 * _ori[2]), _ori[4] > 0 && (_or6.houm += 1 * _ori[4]), _ori[6] > 0 && (_or6.houg += 1 * _ori[6]), _ori[8] > 0 && (_or6.tyku += 1 * _ori[8]), _ori[10] > 0 && (_or6.houm += 1 * _ori[10])) : 2 == _org ? (_or6.houm += 1 * _or7, _ori[2] > 0 && (_or6.houg += 1 * _ori[2]), _ori[4] > 0 && (_or6.tyku += 1 * _ori[4]), _ori[6] > 0 && (_or6.houm += 1 * _ori[6]), _ori[8] > 0 && (_or6.houg += 1 * _ori[8]), _ori[10] > 0 && (_or6.houm += 1 * _ori[10])) : 3 == _org ? (_ori[4] > 0 && (_or6.houm += 1 * _ori[4]), _ori[7] > 0 && (_or6.houg += 1 * _ori[7]), _ori[10] > 0 && (_or6.tyku += 1 * _ori[10])) : 4 == _org && (_or6.houm += 1 * _or7, _ori[1] > 0 && (_or6.houg += 1 * _ori[1]), _ori[2] > 0 && (_or6.houg += 1 * _ori[2]), _ori[4] > 0 && (_or6.houm += 1 * _ori[4]), _ori[6] > 0 && (_or6.houg += 1 * _ori[6]), _ori[8] > 0 && (_or6.tyku += 1 * _ori[8]), _ori[10] > 0 && (_or6.houm += 1 * _ori[10]));
            }
            var _orn = 0;
            _orb[_or4.ship_id] && (_orn = _orb[_or4.ship_id]);
            var _oro = 0;
            _ord[_or4.ship_id] && (_oro = _ord[_or4.ship_id]);
            var _orp = 0,
                _orq = 0,
                _orr = _or4.have_slot_ids();
            if (_orn + _oro > 0)
                for (var _ors = 0, _ort = _orr; _ors < _ort.length; _ors++) {
                    var _oru = _ort[_ors],
                        _orv = _or3.default.model.slot.getMst(_oru),
                        _orw = _orv.equipType;
                    12 != _orw && 13 != _orw || (_orv.sakuteki >= 5 && (_orp += _or4.get_slotnums(parseInt(_oru))), _orv.taiku >= 2 && _or4.get_slotnums(parseInt(_oru)), _orv.meichu >= 8 && (_orq += _or4.get_slotnums(parseInt(_oru))));
                }
            1 == _orn ? _orp >= 1 && (_or6.houg += 3, _or6.houm += 3, _or6.kaih += 2) : 2 == _orn && _orp >= 1 && (_or6.houg += 2, _or6.houm += 2, _or6.kaih += 1);
            var _orx = 0,
                _ory = [],
                _orz = [];
            if (_orc[_or4.ship_id]) {
                _orx = _orc[_or4.ship_id];
                var _os0 = _or4.have_slot_ids();
                [174].forEach(function(_os1) {
                    var _os2 = null;
                    _os0.indexOf(_os1.toString()) > -1 && (_orz[_os1] = _or4.get_each_level_nums(_os1), null == _ory[_os1] && (_ory[_os1] = []), _orz[_os1].forEach(function(_os3, _os4) {
                        var _os5 = null;
                        for (var _os6 = 1; _os6 <= _or4.SLOT_LEVEL_MAX; _os6++) null == _ory[_os1][_os6] && (_ory[_os1][_os6] = 0), _os4 >= _os6 && (_ory[_os1][_os6] += _os3);
                    }));
                });
            }
            if (_orx > 0) {
                var _os7 = _orz[174];
                if (1 == _orx && _os7) {
                    var _os8 = _ory[174];
                    _or6.raig += 4, _os8[6] >= 1 && (_or6.raig += 1), _os8[8] >= 1 && (_or6.houm += 1), _os8[10] >= 1 && (_or6.houg += 1);
                }
            }
            return _orq > 0 && (_oro >= 1 && _oro <= 3 && (_or6.houg += 2, _or6.houm += 2, _or6.kaih += 2), 1 == _oro ? _or6.houg += 1 : 3 == _oro && (_or6.houg += 2)), _or6;
        };
    },
    78123: function(_os9, _osa, _osb) {
        'use strict';
        var _osc = null;
        var _osd = this && this.__importDefault || function(_ose) {
            var _osf = null;
            return _ose && _ose.__esModule ? _ose : {
                'default': _ose
            };
        };
        defineModule(_osa);
        Object.defineProperty(_osa, '__esModule', {
            'value': true
        }), _osa.getSlot505PersonalEffect = void 0;
        var _osg = _osb(74496),
            _osh = _osd(_osb(18622));
        _osa.getSlot505PersonalEffect = function(_osi) {
            var _osj = null,
                _osk = new _osg.SlotItemEffectModel(),
                _osl = false,
                _osm = new _osg.SlotItemEffectModel();
            if (2 == _osi.stype ? (_osm.houg += 1, _osm.tyku += 2, _osm.kaih += 2, _osl = true) : 1 == _osi.stype ? (_osm.houg += 1, _osm.tyku += 1, _osm.kaih += 1, _osl = true) : 3 == _osi.stype || 21 == _osi.stype || 4 == _osi.stype ? (_osm.tyku += 1, _osm.kaih += 2, _osl = true) : 5 != _osi.stype && 6 != _osi.stype && 16 != _osi.stype || (_osm.tyku += 1, _osm.kaih += 1, _osl = true), _osl) {
                var _osn = _osi.get_slotnums(505);
                _osk.add(_osm.multiply(_osn));
            }
            var _oso = {
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
                _osp = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2
                },
                _osq = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _oso[_osi.ship_id] ? (_osk.houg += 2, _osk.tyku += 3, _osk.kaih += 4) : 2 == _oso[_osi.ship_id] ? (_osk.houg += 1, _osk.tyku += 2, _osk.kaih += 3) : 3 == _oso[_osi.ship_id] ? (_osk.tyku += 2, _osk.kaih += 2) : 4 == _oso[_osi.ship_id] ? (_osk.tyku += 1, _osk.kaih += 2) : 5 == _oso[_osi.ship_id] && (_osk.houg += 1, _osk.tyku += 1, _osk.kaih += 1);
            var _osr = 0;
            if (_osp[_osi.ship_id] && _osr++, _osq[_osi.ship_id] && _osr++, 0 == _osr) return _osk;
            for (var _oss = 0, _ost = 0, _osu = 0, _osv = _osi.have_slot_ids(); _osu < _osv.length; _osu++) {
                var _osw = _osv[_osu],
                    _osx = _osh.default.model.slot.getMst(_osw),
                    _osy = _osx.equipType;
                12 != _osy && 13 != _osy || (_osx.sakuteki >= 5 && (_oss += _osi.get_slotnums(parseInt(_osw))), _osx.taiku >= 2 && (_ost += _osi.get_slotnums(parseInt(_osw))));
            }
            var _osz = _osp[_osi.ship_id];
            _ost > 0 && _osz > 0 && (1 == _osz ? (_osk.houg += 1, _osk.tyku += 2, _osk.kaih += 3) : 2 == _osz && (_osk.tyku += 2, _osk.kaih += 2));
            var _ot0 = _osq[_osi.ship_id];
            return _oss > 0 && _ot0 > 0 && 1 == _ot0 && (_osk.houg += 1, _osk.kaih += 1), _osk;
        };
    },
    25765: (_ot1, _ot2, _ot3) => {
        'use strict';
        var _ot4 = null;
        defineModule(_ot2);
        Object.defineProperty(_ot2, '__esModule', {
            'value': true
        }), _ot2.getSlot506PersonalEffect = void 0;
        var _ot5 = _ot3(74496);
        _ot2.getSlot506PersonalEffect = function(_ot6) {
            var _ot7 = null,
                _ot8 = new _ot5.SlotItemEffectModel();
            return 961 == _ot6.ship_id ? (_ot8.houg += 2, _ot8.houm += 3, _ot8.tyku += 2, _ot8.kaih += 4) : 145 == _ot6.ship_id || 497 == _ot6.ship_id || 656 == _ot6.ship_id || 557 == _ot6.ship_id || 558 == _ot6.ship_id || 951 == _ot6.ship_id || 975 == _ot6.ship_id ? (_ot8.houg += 1, _ot8.houm += 2, _ot8.tyku += 1, _ot8.kaih += 3) : 578 != _ot6.ship_id && 419 != _ot6.ship_id && 464 != _ot6.ship_id && 470 != _ot6.ship_id && 407 != _ot6.ship_id && 235 != _ot6.ship_id && 147 != _ot6.ship_id && 538 != _ot6.ship_id && 537 != _ot6.ship_id && 955 != _ot6.ship_id && 960 != _ot6.ship_id || (_ot8.houg += 1, _ot8.houm += 1, _ot8.tyku += 1, _ot8.kaih += 2), _ot8;
        };
    },
    88271: function(_ot9, _ota, _otb) {
        'use strict';
        var _otc = null;
        var _otd = this && this.__importDefault || function(_ote) {
            var _otf = null;
            return _ote && _ote.__esModule ? _ote : {
                'default': _ote
            };
        };
        defineModule(_ota);
        Object.defineProperty(_ota, '__esModule', {
            'value': true
        }), _ota.getSlot50PersonalEffect = void 0;
        var _otg = _otb(74496),
            _oth = _otd(_otb(18622));
        _ota.getSlot50PersonalEffect = function(_oti) {
            var _otj = null,
                _otk = new _otg.SlotItemEffectModel(),
                _otl = false,
                _otm = new _otg.SlotItemEffectModel();
            7 != _oti.ctype && 13 != _oti.ctype && 8 != _oti.ctype && 29 != _oti.ctype && 9 != _oti.ctype && 31 != _oti.ctype || (_otm.houg += 1, _otl = true), 8 != _oti.ctype && 29 != _oti.ctype && 9 != _oti.ctype && 31 != _oti.ctype || (_otm.houg += 1, _otm.kaih += 1, _otl = true);
            var _otn = _oti.get_slotnums(50);
            9 != _oti.ctype && 31 != _oti.ctype || _otn >= 2 && (_otm.houg += 1, _otl = true);
            var _oto = 0;
            if (501 != _oti.ship_id && 506 != _oti.ship_id && 502 != _oti.ship_id && 507 != _oti.ship_id || (_otm.houg += 1, _otl = true, _oto = 1), 0 == _otl) return _otk;
            _otk = _otm.multiply(_otn);
            for (var _otp = 0, _otq = 0, _otr = _oti.have_slot_ids(); _otq < _otr.length; _otq++) {
                var _ots = _otr[_otq],
                    _ott = _oth.default.model.slot.getMst(_ots),
                    _otu = _ott.equipType;
                12 != _otu && 13 != _otu || _ott.sakuteki >= 5 && (_otp += _oti.get_slotnums(parseInt(_ots)));
            }
            if (_otp > 0) {
                if (7 == _oti.ctype || 13 == _oti.ctype) 0 == _oti.get_slotnums(90) && (_otk.houg += 1, _otk.kaih += 1, _otk.raig += 1);
                else 8 != _oti.ctype && 29 != _oti.ctype && 9 != _oti.ctype && 31 != _oti.ctype || (_otk.houg += 3, _otk.kaih += 2, _otk.raig += 2);
                501 != _oti.ship_id && 506 != _oti.ship_id || (_otk.houg += 1, _otk.kaih += 1);
            }
            var _otv = _oti.get_slotnums(30),
                _otw = _oti.get_slotnums(410);
            return 1 == _oto && (_otv + _otw > 0 && (_otk.houg += 1, _otk.tyku += 3, _otk.kaih += 2), _otw > 0 && (_otk.houg += 2)), _otk;
        };
    },
    28221: (_otx, _oty, _otz) => {
        'use strict';
        var _ou0 = null;
        defineModule(_oty);
        Object.defineProperty(_oty, '__esModule', {
            'value': true
        }), _oty.getSlot510PersonalEffect = void 0;
        var _ou1 = _otz(74496);
        _oty.getSlot510PersonalEffect = function(_ou2) {
            var _ou3 = null,
                _ou4 = new _ou1.SlotItemEffectModel(),
                _ou5 = false,
                _ou6 = new _ou1.SlotItemEffectModel();
            if ('イギリス' == _ou2.getCountryName() && (_ou6.houg += 2, _ou6.tais += 3, _ou6.kaih += 2, _ou6.saku += 2, _ou5 = true), 88 == _ou2.ctype && (_ou4.houg += 4, _ou4.kaih += 2, _ou6.saku += 3, _ou6.houm += 2, _ou5 = true), 0 == _ou5) return _ou4;
            var _ou7 = _ou2.get_slotnums(510);
            return _ou4.add(_ou6.multiply(_ou7)), _ou4;
        };
    },
    14830: (_ou8, _ou9, _oua) => {
        'use strict';
        var _oub = null;
        defineModule(_ou9);
        Object.defineProperty(_ou9, '__esModule', {
            'value': true
        }), _ou9.getSlot511PersonalEffect = void 0;
        var _ouc = _oua(74496);
        _ou9.getSlot511PersonalEffect = function(_oud) {
            var _oue = null,
                _ouf = new _ouc.SlotItemEffectModel();
            return 122 == _oud.ctype ? (_ouf.raig += 3, _ouf.kaih += 4) : 114 == _oud.ctype && (_ouf.raig += 1, _ouf.kaih += 2), _ouf;
        };
    },
    54047: (_oug, _ouh, _oui) => {
        'use strict';
        var _ouj = null;
        defineModule(_ouh);
        Object.defineProperty(_ouh, '__esModule', {
            'value': true
        }), _ouh.getSlot517PersonalEffect = void 0;
        var _ouk = _oui(74496);
        _ouh.getSlot517PersonalEffect = function(_oul) {
            var _oum = null,
                _oun = new _ouk.SlotItemEffectModel();
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
            }[_oul.ctype] && 74 != _oul.ctype && 77 != _oul.ctype && 85 != _oul.ctype && 117 != _oul.ctype && 104 != _oul.ctype || (_oun.houm += 1, _oun.kaih += 1, _oun.saku += 1), 38 == _oul.ctype && (_oun.houg += 1, _oun.houm += 1), 960 == _oul.ship_id ? (_oun.houg += 2, _oun.houm += 1, _oun.kaih += 3, _oun.saku += 2) : 955 != _oul.ship_id && 578 != _oul.ship_id && 961 != _oul.ship_id && 656 != _oul.ship_id && 464 != _oul.ship_id && 470 != _oul.ship_id && 419 != _oul.ship_id && 407 != _oul.ship_id && 235 != _oul.ship_id && 147 != _oul.ship_id && 975 != _oul.ship_id || (_oun.houg += 1, _oun.houm += 1, _oun.kaih += 2, _oun.saku += 1);
            for (var _ouo = [], _oup = function(_ouq) {
                    var _our = null,
                        _ous = _oul.get_each_level_nums(_ouq);
                    null == _ouo[_ouq] && (_ouo[_ouq] = []), _ous.forEach(function(_out, _ouu) {
                        var _ouv = null;
                        for (var _ouw = 1; _ouw <= _oul.SLOT_LEVEL_MAX; _ouw++) null == _ouo[_ouq][_ouw] && (_ouo[_ouq][_ouw] = 0), _ouu >= _ouw && (_ouo[_ouq][_ouw] += _out);
                    });
                }, _oux = 0, _ouy = [267, 366, 450, 517]; _oux < _ouy.length; _oux++) {
                _oup(_ouy[_oux]);
            }
            var _ouz = _ouo[517];
            return _ouz[7] > 0 && (_oun.houm += 1), _ouz[8] > 0 && (_oun.kaih += 1), _ouz[9] > 0 && (_oun.houg += 1), _ouz[10] > 0 && (_oun.houm += 1), (_ouo[267][3] > 0 || _ouo[366][3] > 0) && (_oun.houg += 1, _oun.houm += 1, 38 == _oul.ctype && (_oun.houg += 1, _oun.houm += 1), _ouo[450][4] > 0 && (_oun.houg += 1, _oun.houm += 1, _oun.tyku += 4, _oun.kaih += 3)), _oun;
        };
    },
    76054: (_ov0, _ov1, _ov2) => {
        'use strict';
        var _ov3 = null;
        defineModule(_ov1);
        Object.defineProperty(_ov1, '__esModule', {
            'value': true
        }), _ov1.getSlot518PersonalEffect = void 0;
        var _ov4 = _ov2(74496);
        _ov1.getSlot518PersonalEffect = function(_ov5) {
            var _ov6 = null,
                _ov7 = new _ov4.SlotItemEffectModel(),
                _ov8 = false,
                _ov9 = new _ov4.SlotItemEffectModel();
            if (34 != _ov5.ctype && 56 != _ov5.ctype || (_ov9.houg += 1, _ov9.tyku += 1, _ov9.tais += 1, _ov9.kaih += 1, _ov8 = true), 16 == _ov5.stype && (_ov9.houg += 1, _ov9.raig += 1, _ov9.kaih += 1, _ov8 = true), 622 != _ov5.ship_id && 624 != _ov5.ship_id && 623 != _ov5.ship_id || (_ov9.houg += 1, _ov8 = true), 622 != _ov5.ship_id && 624 != _ov5.ship_id || (_ov9.tyku += 1, _ov8 = true), 624 == _ov5.ship_id && (_ov9.tais += 2, _ov8 = true), 0 == _ov8) return _ov7;
            var _ova = _ov5.get_slotnums(518);
            return _ov7.add(_ov9.multiply(_ova)), _ov7;
        };
    },
    93053: (_ovb, _ovc, _ovd) => {
        'use strict';
        var _ove = null;
        defineModule(_ovc);
        Object.defineProperty(_ovc, '__esModule', {
            'value': true
        }), _ovc.getSlot519PersonalEffect = void 0;
        var _ovf = _ovd(74496);
        _ovc.getSlot519PersonalEffect = function(_ovg) {
            var _ovh = null,
                _ovi = new _ovf.SlotItemEffectModel();
            return 122 == _ovg.ctype && (_ovi.houm += 2, _ovi.kaih += 2), 114 == _ovg.ctype && (_ovi.raig += 1, _ovi.houm += 2, _ovi.kaih += 2), _ovi;
        };
    },
    81254: (_ovj, _ovk, _ovl) => {
        'use strict';
        var _ovm = null;
        defineModule(_ovk);
        Object.defineProperty(_ovk, '__esModule', {
            'value': true
        }), _ovk.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _ovn = _ovl(74496);
        _ovk.getSlot51cmSeriesGunPersonalEffect = function(_ovo) {
            var _ovp = null,
                _ovq = new _ovn.SlotItemEffectModel(),
                _ovr = false,
                _ovs = new _ovn.SlotItemEffectModel(),
                _ovt = _ovo.get_slotnums(142),
                _ovu = _ovo.get_slotnums(460),
                _ovv = _ovt + _ovu;
            if (916 != _ovo.ship_id && 911 != _ovo.ship_id && 546 != _ovo.ship_id || (_ovs.houg += 1, _ovs.houm += 1, _ovu >= 1 && (_ovq.kaih += 1, _ovq.houm += 1), _ovr = true), 37 == _ovo.ctype && _ovv >= 1 && (_ovq.houg += 1, _ovq.houm += 2), 0 == _ovr) return _ovq;
            var _ovw = _ovo.get_slotnums(128) + _ovo.get_slotnums(281);
            return _ovq.add(_ovs.multiply(_ovw)), _ovq;
        };
    },
    88792: (_ovx, _ovy, _ovz) => {
        'use strict';
        var _ow0 = null;
        defineModule(_ovy);
        Object.defineProperty(_ovy, '__esModule', {
            'value': true
        }), _ovy.getSlot520PersonalEffect = void 0;
        var _ow1 = _ovz(74496);
        _ovy.getSlot520PersonalEffect = function(_ow2) {
            var _ow3 = null,
                _ow4 = new _ow1.SlotItemEffectModel(),
                _ow5 = false,
                _ow6 = new _ow1.SlotItemEffectModel(),
                _ow7 = 0,
                _ow8 = 0,
                _ow9 = 0,
                _owa = _ow2.get_slotnums(520);
            7 == _ow2.ctype || 13 == _ow2.ctype ? (_ow6.houg += 1, _ow5 = true, _ow8 = 1, _ow9 = 1) : 8 == _ow2.ctype || 29 == _ow2.ctype ? (_ow6.houg += 2, _ow6.kaih += 1, _ow5 = true, _ow8 = 2, _ow9 = 1) : 9 != _ow2.ctype && 31 != _ow2.ctype || (_ow6.houg += 3, _ow6.kaih += 1, _ow6.houm += 1, _ow5 = true, _ow8 = 2, _ow9 = 1, 2 == _owa && (_ow4.houg += 2), _owa >= 3 && (_ow4.houg += 4));
            var _owb = _ow2.get_have_rader_nums().water_rader,
                _owc = 0,
                _owd = 0;
            if (_ow8 + _ow9 > 0) {
                for (var _owe = _ow2.getSpItemDict_FukuhouTaikuHeisou(), _owf = _ow2.getSpItemDict_Tansou21GouDentan(), _owg = 0, _owh = _ow2.have_slot_ids(); _owg < _owh.length; _owg++) {
                    var _owi = _owh[_owg],
                        _owj = parseInt(_owi);
                    null != _owe[_owj] ? (_owe[_owj] += _ow2.get_slotnums(_owj), _owc += _ow2.get_slotnums(_owj)) : null != _owf[_owj] && (_owf[_owj] += _ow2.get_slotnums(_owj), _owd += _ow2.get_slotnums(_owj));
                }
                _owb > 0 && (1 == _ow8 ? (_ow4.houg += 2, _ow4.raig += 2, _ow4.kaih += 1, _ow4.houm += 1) : 2 == _ow8 && (_ow4.houg += 3, _ow4.raig += 2, _ow4.kaih += 2, _ow4.houm += 1)), _owc > 0 && 1 == _ow9 && (_ow4.houg += 1, _ow4.tyku += 4, _ow4.kaih += 4, _ow4.houm += 1);
            }
            if (269 == _ow2.ship_id || 265 == _ow2.ship_id || 319 == _ow2.ship_id ? (2 == _owa && (_ow4.houg += 2), _owa >= 3 && (_ow4.houg += 4)) : 501 != _ow2.ship_id && 506 != _ow2.ship_id && 502 != _ow2.ship_id && 507 != _ow2.ship_id && 503 != _ow2.ship_id && 504 != _ow2.ship_id || (_ow6.houg += 1, _ow5 = true, _owb >= 1 && (_ow4.houg += 1, _ow4.kaih += 1, _ow4.houm += 2), _owd >= 1 && (_ow4.houg += 1, _ow4.tyku += 3, _ow4.kaih += 2, _ow4.houm += 1), _ow2.get_slotnums(410) > 0 && (_ow4.houg += 2, _ow4.tyku += 3, _ow4.kaih += 2, _ow4.houm += 1), _ow7 = 1), 502 == _ow2.ship_id || 269 == _ow2.ship_id || 265 == _ow2.ship_id || 319 == _ow2.ship_id ? (_ow6.houg += 1, _ow6.houm += 1, _ow5 = true) : 507 == _ow2.ship_id && (_ow6.houg += 1, _ow6.houm += 2, _ow6.tyku += 1, _ow5 = true), _ow5 && _ow4.add(_ow6.multiply(_owa)), 0 == _ow7) return _ow4;
            var _owk = _ow2.get_each_level_over_nums([520]),
                _owl = _owk.slot[520][7],
                _owm = _owk.slot[520][10];
            return 1 == _ow7 && (_owl > 0 && (_ow4.houg += 1 * _owl), _owm > 0 && (_ow4.houm += 1 * _owm)), _ow4;
        };
    },
    33242: (_own, _owo, _owp) => {
        'use strict';
        var _owq = null;
        defineModule(_owo);
        Object.defineProperty(_owo, '__esModule', {
            'value': true
        }), _owo.getSlot521PersonalEffect = void 0;
        var _owr = _owp(74496);
        _owo.getSlot521PersonalEffect = function(_ows) {
            var _owt = null,
                _owu = new _owr.SlotItemEffectModel(),
                _owv = false,
                _oww = new _owr.SlotItemEffectModel(),
                _owx = 0;
            if (52 == _ows.ctype && (_owx = 1), 183 == _ows.ship_id ? (_oww.houg += 1, _oww.houm += 1, _oww.saku += 2, _oww.kaih += 2, _owv = true) : 321 == _ows.ship_id ? (_oww.houg += 2, _oww.houm += 2, _oww.saku += 3, _oww.kaih += 3, _owv = true) : 507 == _ows.ship_id && (_oww.houg += 3, _oww.tyku += 1, _oww.houm += 3, _oww.saku += 2, _oww.kaih += 2, _owv = true, _owx = 1), _owv) {
                var _owy = _ows.get_slotnums(521);
                _owu.add(_oww.multiply(_owy));
            }
            if (0 == _owx) return _owu;
            var _owz = _ows.get_each_level_over_nums([521]).slot[521];
            return 1 == _owx && (_owz[1] >= 1 && (_owu.houm += 1 * _owz[1]), _owz[2] >= 1 && (_owu.kaih += 1 * _owz[2]), _owz[3] >= 1 && (_owu.saku += 1 * _owz[3], _owu.raig += 1 * _owz[3]), _owz[4] >= 1 && (_owu.houg += 1 * _owz[4]), _owz[6] >= 1 && (_owu.houm += 1 * _owz[6]), _owz[8] >= 1 && (_owu.saku += 1 * _owz[8]), _owz[10] >= 1 && (_owu.houm += 1 * _owz[10])), _owu;
        };
    },
    3296: (_ox0, _ox1, _ox2) => {
        'use strict';
        var _ox3 = null;
        defineModule(_ox1);
        Object.defineProperty(_ox1, '__esModule', {
            'value': true
        }), _ox1.getSlot522_523PersonalEffect = void 0;
        var _ox4 = _ox2(74496);
        _ox1.getSlot522_523PersonalEffect = function(_ox5) {
            var _ox6 = null,
                _ox7 = new _ox4.SlotItemEffectModel(),
                _ox8 = false,
                _ox9 = new _ox4.SlotItemEffectModel(),
                _oxa = 0,
                _oxb = _ox5.get_slotnums(522),
                _oxc = _ox5.get_slotnums(523),
                _oxd = _oxb + _oxc;
            if (14 == _ox5.stype && (_ox9.raig += 1, _ox9.kaih += 5, _ox9.houm += 1, _ox9.saku += 3, _ox8 = true, _oxc >= 1 && (_ox7.raig += 2 * _oxc, _ox7.baku += 2 * _oxc, _ox7.kaih += 1 * _oxc, _ox7.houm += 1 * _oxc, _ox7.saku += 1 * _oxc), _oxa = 1), 0 == _ox8) return _ox7;
            if (_ox7.add(_ox9.multiply(_oxd)), 0 == _oxa) return _ox7;
            var _oxe = _ox5.get_each_level_over_nums([522, 523]),
                _oxf = _oxe.slot[522],
                _oxg = _oxe.slot[523];
            if (1 == _oxa) {
                if (_oxf[1] >= 1 || _oxg[1] >= 1) {
                    var _oxh = _oxf[1] + _oxg[1];
                    _ox7.raig += 1 * _oxh;
                }
                if (_oxf[2] >= 1 || _oxg[2] >= 1) {
                    var _oxi = _oxf[2] + _oxg[2];
                    _ox7.houm += 1 * _oxi;
                }
                if (_oxf[3] >= 1 || _oxg[3] >= 1) {
                    var _oxj = _oxf[3] + _oxg[3];
                    _ox7.kaih += 1 * _oxj;
                }
                if (_oxf[5] >= 1 || _oxg[5] >= 1) {
                    var _oxk = _oxf[5] + _oxg[5];
                    _ox7.saku += 1 * _oxk;
                }
                if (_oxf[8] >= 1 || _oxg[8] >= 1) {
                    var _oxl = _oxf[8] + _oxg[8];
                    _ox7.houm += 1 * _oxl;
                }
                if (_oxf[10] >= 1 || _oxg[10] >= 1) {
                    var _oxm = _oxf[10] + _oxg[10];
                    _ox7.kaih += 1 * _oxm;
                }
            }
            return _ox7;
        };
    },
    59415: (_oxn, _oxo, _oxp) => {
        'use strict';
        var _oxq = null;
        defineModule(_oxo);
        Object.defineProperty(_oxo, '__esModule', {
            'value': true
        }), _oxo.getSlot524PersonalEffect = void 0;
        var _oxr = _oxp(74496);
        _oxo.getSlot524PersonalEffect = function(_oxs) {
            var _oxt = null,
                _oxu = new _oxr.SlotItemEffectModel(),
                _oxv = false,
                _oxw = new _oxr.SlotItemEffectModel(),
                _oxx = 0,
                _oxy = 0;
            if (17 != _oxs.stype && 19 != _oxs.stype && 20 != _oxs.stype && 21 != _oxs.stype && 22 != _oxs.stype || (_oxw.houg += 1, _oxw.tyku += 2, _oxw.kaih += 2, _oxw.houm += 1, _oxv = true, _oxx = 1, _oxy = 1), 0 == _oxv) return _oxu;
            var _oxz = _oxs.get_slotnums(524);
            _oxu.add(_oxw.multiply(_oxz));
            var _oy0 = _oxs.get_have_rader_nums().air_rader;
            if (1 == _oxy && _oy0 >= 1 && (_oxu.tyku += 2, _oxu.kaih += 2), 0 == _oxx) return _oxu;
            var _oy1 = _oxs.get_each_level_over_nums([524]).slot[524];
            return 1 == _oxx && (_oy1[1] >= 1 && (_oxu.kaih += 1 * _oy1[1]), _oy1[2] >= 1 && (_oxu.kaih += 1 * _oy1[2]), _oy1[4] >= 1 && (_oxu.tyku += 1 * _oy1[4]), _oy1[6] >= 1 && (_oxu.kaih += 1 * _oy1[6]), _oy1[7] >= 1 && (_oxu.houm += 1 * _oy1[7]), _oy1[8] >= 1 && (_oxu.tyku += 1 * _oy1[8]), _oy1[9] >= 1 && (_oxu.kaih += 1 * _oy1[9]), _oy1[10] >= 1 && (_oxu.houg += 1 * _oy1[10])), _oxu;
        };
    },
    36731: (_oy2, _oy3, _oy4) => {
        'use strict';
        var _oy5 = null;
        defineModule(_oy3);
        Object.defineProperty(_oy3, '__esModule', {
            'value': true
        }), _oy3.getSlot527PersonalEffect = void 0;
        var _oy6 = _oy4(74496);
        _oy3.getSlot527PersonalEffect = function(_oy7) {
            var _oy8 = null,
                _oy9 = new _oy6.SlotItemEffectModel(),
                _oya = 0;
            if ('イギリス' == _oy7.getCountryName() && (_oya = 1, _oy9.tyku += 2, _oy9.houm += 1, _oy9.kaih += 1, _oy9.saku += 2, 88 == _oy7.ctype && (_oy9.houg += 2), 67 == _oy7.ctype && (_oy9.houg += 1)), 0 == _oya) return _oy9;
            var _oyb = _oy7.get_each_level_over_nums([527]),
                _oyc = _oyb.slot[527][2],
                _oyd = _oyb.slot[527][4],
                _oye = _oyb.slot[527][7],
                _oyf = _oyb.slot[527][10];
            return 1 == _oya && (_oyc >= 1 && (_oy9.tyku += 1), _oyd >= 1 && (_oy9.kaih += 1), _oye >= 1 && (_oy9.tyku += 1), _oyf >= 1 && (_oy9.houm += 1)), _oy9;
        };
    },
    30450: (_oyg, _oyh, _oyi) => {
        'use strict';
        var _oyj = null;
        defineModule(_oyh);
        Object.defineProperty(_oyh, '__esModule', {
            'value': true
        }), _oyh.getSlot528PersonalEffect = void 0;
        var _oyk = _oyi(74496);
        _oyh.getSlot528PersonalEffect = function(_oyl) {
            var _oym = null,
                _oyn = new _oyk.SlotItemEffectModel(),
                _oyo = false,
                _oyp = new _oyk.SlotItemEffectModel(),
                _oyq = 0;
            if ('イギリス' == _oyl.getCountryName() && (_oyp.houg += 1, _oyp.houm += 2, _oyp.kaih += 1, 108 == _oyl.ctype && (_oyp.houg += 1, _oyp.kaih += 1), _oyo = true, _oyq = 1), 0 == _oyo) return _oyn;
            var _oyr = _oyl.get_slotnums(528);
            if (_oyn.add(_oyp.multiply(_oyr)), 0 == _oyq) return _oyn;
            var _oys = _oyl.get_each_level_over_nums([528]),
                _oyt = _oys.slot[528][2],
                _oyu = _oys.slot[528][4],
                _oyv = _oys.slot[528][7],
                _oyw = _oys.slot[528][10];
            return 1 == _oyq && (_oyt >= 1 && (_oyn.houg += 1 * _oyt), _oyu >= 1 && (_oyn.houm += 1 * _oyu), _oyv >= 1 && (_oyn.kaih += 1 * _oyv), _oyw >= 1 && (_oyn.houm += 1 * _oyw)), _oyn;
        };
    },
    15653: (_oyx, _oyy, _oyz) => {
        'use strict';
        var _oz0 = null;
        defineModule(_oyy);
        Object.defineProperty(_oyy, '__esModule', {
            'value': true
        }), _oyy.getSlot530PersonalEffect = void 0;
        var _oz1 = _oyz(74496);
        _oyy.getSlot530PersonalEffect = function(_oz2) {
            var _oz3 = null,
                _oz4 = new _oz1.SlotItemEffectModel(),
                _oz5 = false;
            if (6 == _oz2.ctype && (_oz5 = true), 0 == _oz5) return _oz4;
            var _oz6 = false,
                _oz7 = new _oz1.SlotItemEffectModel(),
                _oz8 = _oz2.get_slotnums(530),
                _oz9 = _oz2.get_slotnums(174),
                _oza = _oz2.get_each_level_over_nums([530, 174]),
                _ozb = _oza.slot[530],
                _ozc = _oza.slot[174],
                _ozd = _oz2.get_have_rader_nums(),
                _oze = _ozd.water_rader,
                _ozf = _ozd.high_water_rader;
            return _ozd.air_rader, 149 != _oz2.ship_id && 150 != _oz2.ship_id && 151 != _oz2.ship_id && 152 != _oz2.ship_id && 593 != _oz2.ship_id || (_oz7.houg += 2, _oz6 = true), 591 != _oz2.ship_id && 954 != _oz2.ship_id || (_oz7.houg += 3, _oz6 = true), 592 != _oz2.ship_id && 694 != _oz2.ship_id || (_oz7.houg += 4, _oz6 = true), 149 != _oz2.ship_id && 150 != _oz2.ship_id && 151 != _oz2.ship_id && 152 != _oz2.ship_id || (_oz7.tyku += 1, _oz6 = true), 591 != _oz2.ship_id && 592 != _oz2.ship_id && 954 != _oz2.ship_id && 694 != _oz2.ship_id || (_oz7.tyku += 2, _oz6 = true), 593 == _oz2.ship_id && (_oz7.tyku += 3, _oz6 = true), 592 != _oz2.ship_id && 694 != _oz2.ship_id || (_oz7.houg += 1, _oz7.houm += 2, _oz6 = true, _ozb[2] >= 1 && (_oz4.houm += 1 * _ozb[2]), _ozb[4] >= 1 && (_oz4.houg += 1 * _ozb[4]), _ozb[6] >= 1 && (_oz4.souk += 1 * _ozb[6]), _ozb[7] >= 1 && (_oz4.houm += 1 * _ozb[7]), _ozb[8] >= 1 && (_oz4.houg += 1 * _ozb[8]), _ozb[9] >= 1 && (_oz4.souk += 1 * _ozb[9]), _ozb[10] >= 1 && (_oz4.houm += 1 * _ozb[10])), 150 != _oz2.ship_id && 152 != _oz2.ship_id && 591 != _oz2.ship_id && 954 != _oz2.ship_id || (_oz7.houm += 1, _oz6 = true, _ozb[2] >= 1 && (_oz4.houg += 1 * _ozb[2]), _ozb[4] >= 1 && (_oz4.souk += 1 * _ozb[4]), _ozb[6] >= 1 && (_oz4.houm += 1 * _ozb[6]), _ozb[8] >= 1 && (_oz4.houg += 1 * _ozb[8]), _ozb[10] >= 1 && (_oz4.houm += 1 * _ozb[10])), 149 != _oz2.ship_id && 151 != _oz2.ship_id && 593 != _oz2.ship_id || (_ozb[4] >= 1 && (_oz4.houg += 1 * _ozb[4]), _ozb[7] >= 1 && (_oz4.souk += 1 * _ozb[7]), _ozb[10] >= 1 && (_oz4.houm += 1 * _ozb[10])), 592 != _oz2.ship_id && 694 != _oz2.ship_id || (_oze >= 1 && (_oz4.houg += 3, _oz4.houm += 3, _oz4.kaih += 3, 592 == _oz2.ship_id ? _oz4.houg += 3 : 694 == _oz2.ship_id && (_oz4.houg += 4)), _oz8 >= 2 && (_oz4.houm += 2), _oz8 >= 3 && (_oz4.houm += 2), _oz8 >= 4 && (_oz4.houm += 2), _ozf >= 1 && (_oz4.houm += 1), 694 == _oz2.ship_id && _oz8 >= 3 && (_oz4.houg += 3)), 149 != _oz2.ship_id && 150 != _oz2.ship_id && 151 != _oz2.ship_id && 152 != _oz2.ship_id && 591 != _oz2.ship_id && 954 != _oz2.ship_id && 593 != _oz2.ship_id || (_oze >= 1 && (_oz4.houg += 2, _oz4.houm += 2, _oz4.kaih += 2, 591 == _oz2.ship_id || 152 == _oz2.ship_id ? _oz4.houg += 3 : 954 == _oz2.ship_id || 150 == _oz2.ship_id ? _oz4.houg += 2 : 149 != _oz2.ship_id && 151 != _oz2.ship_id && 593 != _oz2.ship_id || (_oz4.houg += 1)), _ozf >= 1 && (_oz4.houm += 1)), 591 != _oz2.ship_id && 592 != _oz2.ship_id && 593 != _oz2.ship_id && 954 != _oz2.ship_id && 694 != _oz2.ship_id || (_oz9 >= 1 && (_oz4.raig += 6, _ozc[6] >= 1 && (_oz4.raig += 1), _ozc[8] >= 1 && (_oz4.houm += 1), _ozc[10] >= 1 && (_oz4.houg += 1)), _ozf >= 1 && (_oz4.houg += 2, _oz4.raig += 2, _oz4.houm += 2, _oz4.kaih += 3, 591 == _oz2.ship_id || 592 == _oz2.ship_id ? _oz4.houg += 2 : 954 == _oz2.ship_id || 593 == _oz2.ship_id ? _oz4.houg += 1 : 694 == _oz2.ship_id && (_oz4.houg += 3)), _oz8 >= 2 && (_oz4.houm += 1)), _oz6 && _oz4.add(_oz7.multiply(_oz8)), _oz4;
        };
    },
    25851: (_ozg, _ozh, _ozi) => {
        'use strict';
        var _ozj = null;
        defineModule(_ozh);
        Object.defineProperty(_ozh, '__esModule', {
            'value': true
        }), _ozh.getSlot531PersonalEffect = void 0;
        var _ozk = _ozi(74496);
        _ozh.getSlot531PersonalEffect = function(_ozl) {
            var _ozm = null,
                _ozn = new _ozk.SlotItemEffectModel(),
                _ozo = _ozl.have_level_num_over_dict[531];
            return null == _ozo || (_ozo[4] >= 1 && (_ozn.houm += 1 * _ozo[4]), _ozo[5] >= 1 && (_ozn.houg += 1 * _ozo[5]), _ozo[6] >= 1 && (_ozn.kaih += 1 * _ozo[6]), _ozo[7] >= 1 && (_ozn.houm += 1 * _ozo[7]), _ozo[8] >= 1 && (_ozn.houg += 1 * _ozo[8]), _ozo[9] >= 1 && (_ozn.kaih += 1 * _ozo[9]), _ozo[10] >= 1 && (_ozn.houm += 1 * _ozo[10])), _ozn;
        };
    },
    91275: (_ozp, _ozq, _ozr) => {
        'use strict';
        var _ozs = null;
        defineModule(_ozq);
        Object.defineProperty(_ozq, '__esModule', {
            'value': true
        }), _ozq.getSlot538PersonalEffect = void 0;
        var _ozt = _ozr(74496);
        _ozq.getSlot538PersonalEffect = function(_ozu) {
            var _ozv = null,
                _ozw = new _ozt.SlotItemEffectModel(),
                _ozx = false,
                _ozy = new _ozt.SlotItemEffectModel(),
                _ozz = 0;
            if ('フランス' == _ozu.getCountryName() && (_ozy.houg += 3, _ozy.kaih += 2, _ozy.houm += 2, _ozx = true, _ozz = 1), 79 == _ozu.ctype ? (_ozy.houg += 2, 969 == _ozu.ship_id && (_ozy.houg += 1, _ozy.houm += 1, _ozy.kaih += 1), _ozx = true) : 70 == _ozu.ctype && (_ozy.houg += 1, _ozy.houm += 1, _ozy.tyku += 2, _ozy.kaih += 2, _ozx = true), 0 == _ozx) return _ozw;
            var _p00 = _ozu.get_slotnums(538);
            if (_ozw.add(_ozy.multiply(_p00)), 0 == _ozz) return _ozw;
            var _p01 = _ozu.haveSlotLevelNumOver(538);
            return 1 == _ozz && (_p01[3] >= 1 && (_ozw.kaih += 1 * _p01[3]), _p01[4] >= 1 && (_ozw.houm += 1 * _p01[4]), _p01[5] >= 1 && (_ozw.houg += 1 * _p01[5]), _p01[6] >= 1 && (_ozw.kaih += 1 * _p01[6]), _p01[7] >= 1 && (_ozw.houm += 1 * _p01[7]), _p01[8] >= 1 && (_ozw.houg += 1 * _p01[8]), _p01[9] >= 1 && (_ozw.kaih += 1 * _p01[9]), _p01[10] >= 1 && (_ozw.houg += 1 * _p01[10], _ozw.houm += 1 * _p01[10])), _ozw;
        };
    },
    72743: (_p02, _p03, _p04) => {
        'use strict';
        var _p05 = null;
        defineModule(_p03);
        Object.defineProperty(_p03, '__esModule', {
            'value': true
        }), _p03.getSlot540PersonalEffect = void 0;
        var _p06 = _p04(74496);
        _p03.getSlot540PersonalEffect = function(_p07) {
            var _p08 = null,
                _p09 = new _p06.SlotItemEffectModel(),
                _p0a = false,
                _p0b = new _p06.SlotItemEffectModel();
            if (911 == _p07.ship_id || 916 == _p07.ship_id || 546 == _p07.ship_id || 662 == _p07.ship_id || 663 == _p07.ship_id || 668 == _p07.ship_id ? (_p0b.kaih += 1, _p0b.saku += 1, _p0a = true) : 73 == _p07.ship_id || 506 == _p07.ship_id || 121 == _p07.ship_id || 503 == _p07.ship_id || 504 == _p07.ship_id || 188 == _p07.ship_id || 189 == _p07.ship_id ? (_p0b.houm += 1, _p0b.kaih += 1, _p0b.saku += 1, _p0a = true) : 488 != _p07.ship_id && 200 != _p07.ship_id && 487 != _p07.ship_id && 501 != _p07.ship_id && 502 != _p07.ship_id && 507 != _p07.ship_id || (_p0b.houg += 1, _p0b.houm += 1, _p0b.kaih += 1, _p0b.saku += 1, _p0a = true), 'にっしん' == _p07.yomi || 'ちとせ' == _p07.yomi || 'ちよだ' == _p07.yomi || 'あきつしま' == _p07.yomi ? (_p0b.houg += 1, _p0b.houm += 1, _p0b.tyku += 2, _p0b.kaih += 2, _p0b.saku += 2, _p0a = true) : 'みずほ' != _p07.yomi && 'かもい' != _p07.yomi || (_p0b.houg += 2, _p0b.houm += 1, _p0b.tyku += 2, _p0b.kaih += 2, _p0b.saku += 2, _p0a = true), 0 == _p0a) return _p09;
            var _p0c = _p07.get_slotnums(540);
            return _p09.add(_p0b.multiply(_p0c)), _p09;
        };
    },
    57041: (_p0d, _p0e, _p0f) => {
        'use strict';
        var _p0g = null;
        defineModule(_p0e);
        Object.defineProperty(_p0e, '__esModule', {
            'value': true
        }), _p0e.getSlot545PersonalEffect = void 0;
        var _p0h = _p0f(74496);
        _p0e.getSlot545PersonalEffect = function(_p0i) {
            var _p0j = null,
                _p0k = new _p0h.SlotItemEffectModel(),
                _p0l = false,
                _p0m = new _p0h.SlotItemEffectModel();
            if ('しょうかく' == _p0i.yomi ? _p0k.houg += 4 : 'ずいかく' == _p0i.yomi ? _p0k.houg += 3 : 'あかぎ' == _p0i.yomi ? _p0k.houg += 2 : 'かが' != _p0i.yomi && 'たいほう' != _p0i.yomi || (_p0k.houg += 1), 461 == _p0i.ship_id || 466 == _p0i.ship_id ? (_p0m.houg += 1, _p0m.houm += 2, _p0m.kaih += 1, _p0m.saku += 2, _p0l = true) : 462 == _p0i.ship_id || 467 == _p0i.ship_id || 646 == _p0i.ship_id ? (_p0m.houg += 1, _p0m.houm += 1, _p0m.saku += 1, _p0l = true) : 599 != _p0i.ship_id && 610 != _p0i.ship_id && 156 != _p0i.ship_id || (_p0m.houm += 1, _p0m.saku += 1, _p0l = true), 0 == _p0l) return _p0k;
            var _p0n = _p0i.get_slotnums(545);
            return _p0k.add(_p0m.multiply(_p0n)), _p0k;
        };
    },
    23035: (_p0o, _p0p, _p0q) => {
        'use strict';
        var _p0r = null;
        defineModule(_p0p);
        Object.defineProperty(_p0p, '__esModule', {
            'value': true
        }), _p0p.getSlot58PersonalEffect = void 0;
        var _p0s = _p0q(74496);
        _p0p.getSlot58PersonalEffect = function(_p0t) {
            var _p0u = null,
                _p0v = new _p0s.SlotItemEffectModel(),
                _p0w = new _p0s.SlotItemEffectModel();
            if ('しまかぜ' != _p0t.yomi && 4 != _p0t.stype && 54 != _p0t.ctype || (_p0w.raig = 1), !_p0w.exists()) return _p0v;
            var _p0x = _p0t.get_slotnums(58);
            return _p0v = _p0w.multiply(_p0x);
        };
    },
    47169: (_p0y, _p0z, _p10) => {
        'use strict';
        var _p11 = null;
        defineModule(_p0z);
        Object.defineProperty(_p0z, '__esModule', {
            'value': true
        }), _p0z.getSlot59PersonalEffect = void 0;
        var _p12 = _p10(74496);
        _p0z.getSlot59PersonalEffect = function(_p13) {
            var _p14 = null,
                _p15 = new _p12.SlotItemEffectModel();
            return 501 != _p13.ship_id && 506 != _p13.ship_id && 502 != _p13.ship_id && 507 != _p13.ship_id || (_p15.tyku += 1, _p15.kaih += 1), _p15;
        };
    },
    87845: (_p16, _p17, _p18) => {
        'use strict';
        var _p19 = null;
        defineModule(_p17);
        Object.defineProperty(_p17, '__esModule', {
            'value': true
        }), _p17.getSlot5PersonalEffect = void 0;
        var _p1a = _p18(74496);
        _p17.getSlot5PersonalEffect = function(_p1b) {
            var _p1c = null,
                _p1d = new _p1a.SlotItemEffectModel(),
                _p1e = false,
                _p1f = new _p1a.SlotItemEffectModel();
            if (52 != _p1b.ctype && 9 != _p1b.ctype || (_p1f.houg += 1, 52 == _p1b.ctype && (_p1f.houg = _p1f.houg + 1), _p1e = true), 0 == _p1e) return _p1d;
            var _p1g = _p1b.get_slotnums(5);
            return _p1d.add(_p1f.multiply(_p1g)), _p1d;
        };
    },
    92253: (_p1h, _p1i, _p1j) => {
        'use strict';
        var _p1k = null;
        defineModule(_p1i);
        Object.defineProperty(_p1i, '__esModule', {
            'value': true
        }), _p1i.getSlot60_154_219PersonalEffec = void 0;
        var _p1l = _p1j(74496);
        _p1i.getSlot60_154_219PersonalEffec = function(_p1m) {
            var _p1n = null,
                _p1o = new _p1l.SlotItemEffectModel(),
                _p1p = false,
                _p1q = new _p1l.SlotItemEffectModel();
            if ('じゅんよう' != _p1m.yomi && 'ひよう' != _p1m.yomi && 'ずいほう' != _p1m.yomi && 'ちとせ' != _p1m.yomi && 'ちよだ' != _p1m.yomi || (_p1q.houg += 1, _p1q.tyku += 1, _p1q.kaih += 1, _p1p = true), 185 != _p1m.ship_id && 318 != _p1m.ship_id && 282 != _p1m.ship_id || (_p1q.houg += 1, _p1q.tyku += 1, _p1q.kaih += 1, _p1p = true), 888 != _p1m.ship_id && 883 != _p1m.ship_id || (_p1q.houg += 2, _p1q.tyku += 1, _p1q.kaih += 2, _p1p = true), 0 == _p1p) return _p1o;
            var _p1r = _p1m.get_slotnums(60) + _p1m.get_slotnums(154) + _p1m.get_slotnums(219);
            return _p1o.add(_p1q.multiply(_p1r)), _p1o;
        };
    },
    2578: (_p1s, _p1t, _p1u) => {
        'use strict';
        var _p1v = null;
        defineModule(_p1t);
        Object.defineProperty(_p1t, '__esModule', {
            'value': true
        }), _p1t.getSlot61PersonalEffect2 = _p1t.getSlot61PersonalEffect = void 0;
        var _p1w = _p1u(74496);
        _p1t.getSlot61PersonalEffect = function(_p1x) {
            var _p1y = null,
                _p1z = new _p1w.SlotItemEffectModel();
            if (553 == _p1x.ship_id) _p1z.houg = 3, _p1z.kaih = 2, _p1z.souk = 1, _p1z.houm = 5, _p1z.leng = 1;
            else {
                if (554 == _p1x.ship_id) _p1z.houg = 3, _p1z.kaih = 3, _p1z.souk = 3, _p1z.houm = 5, _p1z.leng = 1;
                else {
                    if (196 == _p1x.ship_id) _p1z.houm = 5, _p1z.leng = 1;
                    else {
                        if (197 != _p1x.ship_id) return _p1z;
                        _p1z.houm = 5, _p1z.leng = 1;
                    }
                }
            }
            return _p1z;
        }, _p1t.getSlot61PersonalEffect2 = function(_p20) {
            var _p21 = null,
                _p22 = new _p1w.SlotItemEffectModel();
            if (null == _p20.have_slots_dict[61]) return _p22;
            for (var _p23 = 0, _p24 = 0, _p25 = _p20.have_slots_dict[61]; _p24 < _p25.length; _p24++) {
                var _p26 = _p25[_p24].level;
                _p23 < _p26 && (_p23 = _p26);
            }
            return 0 == _p23 || ('そうりゅう' == _p20.yomi ? (_p22.houg += 3, _p22.saku += 3) : 'ひりゅう' == _p20.yomi && (_p22.houg += 2, _p22.saku += 2), 508 != _p20.ship_id && 509 != _p20.ship_id && 560 != _p20.ship_id || (_p22.houg += 1, _p22.saku += 1), _p23 >= 8 && 197 == _p20.ship_id && (_p22.houg += 1, _p22.saku += 1)), _p22;
        };
    },
    17143: (_p27, _p28, _p29) => {
        'use strict';
        var _p2a = null;
        defineModule(_p28);
        Object.defineProperty(_p28, '__esModule', {
            'value': true
        }), _p28.getSlot63PersonalEffect = void 0;
        var _p2b = _p29(74496);
        _p28.getSlot63PersonalEffect = function(_p2c) {
            var _p2d = null,
                _p2e = new _p2b.SlotItemEffectModel(),
                _p2f = new _p2b.SlotItemEffectModel();
            1 != _p2c.ctype && 5 != _p2c.ctype && 10 != _p2c.ctype || (_p2f.tyku += 1), 'ゆうだち' == _p2c.yomi && (_p2f.houg += 1, _p2f.tyku += 1, _p2f.kaih += 2), 145 == _p2c.ship_id || 961 == _p2c.ship_id ? _p2f.houg += 1 : 144 == _p2c.ship_id ? _p2f.raig += 1 : 469 == _p2c.ship_id ? _p2f.kaih += 2 : 242 == _p2c.ship_id || 497 == _p2c.ship_id || 244 == _p2c.ship_id || 498 == _p2c.ship_id || 975 == _p2c.ship_id ? _p2f.kaih += 1 : 627 == _p2c.ship_id ? _p2f.houg += 1 : 903 != _p2c.ship_id && 908 != _p2c.ship_id || (_p2f.houg += 2);
            var _p2g = true;
            if (_p2f.exists() || (_p2g = false), 0 == _p2g) return _p2e;
            var _p2h = _p2c.get_slotnums(63);
            return _p2e = _p2f.multiply(_p2h);
        };
    },
    16164: (_p2i, _p2j, _p2k) => {
        'use strict';
        var _p2l = null;
        defineModule(_p2j);
        Object.defineProperty(_p2j, '__esModule', {
            'value': true
        }), _p2j.getSlot67PersonalEffect = void 0;
        var _p2m = _p2k(74496);
        _p2j.getSlot67PersonalEffect = function(_p2n) {
            var _p2o = null,
                _p2p = new _p2m.SlotItemEffectModel(),
                _p2q = new _p2m.SlotItemEffectModel();
            if (13 != _p2n.stype && 14 != _p2n.stype && (_p2q.raig = -5), !_p2q.exists()) return _p2p;
            var _p2r = _p2n.get_slotnums(67);
            return _p2p = _p2q.multiply(_p2r);
        };
    },
    35023: (_p2s, _p2t, _p2u) => {
        'use strict';
        var _p2v = null;
        defineModule(_p2t);
        Object.defineProperty(_p2t, '__esModule', {
            'value': true
        }), _p2t.getSlot69PersonalEffect = void 0;
        var _p2w = _p2u(74496);
        _p2t.getSlot69PersonalEffect = function(_p2x) {
            var _p2y = null,
                _p2z = new _p2w.SlotItemEffectModel(),
                _p30 = false,
                _p31 = new _p2w.SlotItemEffectModel();
            if (554 == _p2x.ship_id || 646 == _p2x.ship_id ? (_p31.houg += 1, _p31.tais += 2, _p30 = true) : 553 == _p2x.ship_id && (_p31.houg += 1, _p31.tais += 1, _p30 = true), 0 == _p30) return _p2z;
            var _p32 = _p2x.get_slotnums(69);
            return _p2z.add(_p31.multiply(_p32)), _p2z;
        };
    },
    78707: (_p33, _p34, _p35) => {
        'use strict';
        var _p36 = null;
        defineModule(_p34);
        Object.defineProperty(_p34, '__esModule', {
            'value': true
        }), _p34.getSlot70PersonalEffect = void 0;
        var _p37 = _p35(74496);
        _p34.getSlot70PersonalEffect = function(_p38) {
            var _p39 = null,
                _p3a = new _p37.SlotItemEffectModel(),
                _p3b = false,
                _p3c = new _p37.SlotItemEffectModel();
            if ('やましおまる' == _p38.yomi && (_p3c.houg += 1, _p3c.tais += 1, _p3b = true), 0 == _p3b) return _p3a;
            var _p3d = _p38.get_slotnums(70);
            return _p3a.add(_p3c.multiply(_p3d)), _p3a;
        };
    },
    44680: function(_p3e, _p3f, _p3g) {
        'use strict';
        var _p3h = null;
        var _p3i = this && this.__importDefault || function(_p3j) {
            var _p3k = null;
            return _p3j && _p3j.__esModule ? _p3j : {
                'default': _p3j
            };
        };
        defineModule(_p3f);
        Object.defineProperty(_p3f, '__esModule', {
            'value': true
        }), _p3f.getSlot78PersonalEffect = void 0;
        var _p3l = _p3g(74496),
            _p3m = _p3i(_p3g(18622));
        _p3f.getSlot78PersonalEffect = function(_p3n) {
            var _p3o = null,
                _p3p = new _p3l.SlotItemEffectModel(),
                _p3q = false,
                _p3r = new _p3l.SlotItemEffectModel(),
                _p3s = 0,
                _p3t = 0,
                _p3u = false;
            if (48 == _p3n.ctype && (_p3r.houg += 1, _p3r.kaih += 1, _p3s = 1, _p3t = 1, _p3u = true, _p3q = true), 0 == _p3q) return _p3p;
            var _p3v = _p3n.get_slotnums(78);
            _p3p.add(_p3r.multiply(_p3v));
            var _p3w = 0,
                _p3x = _p3n.get_each_level_nums(78),
                _p3y = 0;
            if (_p3u) {
                _p3x.map(function(_p3z, _p40) {
                    _p40 >= 7 && (_p3y += _p3z);
                });
                for (var _p41 = 0, _p42 = _p3n.have_slot_ids(); _p41 < _p42.length; _p41++) {
                    var _p43 = _p42[_p41],
                        _p44 = _p3m.default.model.slot.getMst(_p43),
                        _p45 = _p44.equipType;
                    12 != _p45 && 13 != _p45 || _p44.sakuteki >= 5 && (_p3w += _p3n.get_slotnums(parseInt(_p43)));
                }
            }
            if (1 == _p3s && _p3w > 0 && (_p3p.houg += 2, _p3p.kaih += 2, _p3p.raig += 2), 1 == _p3t) {
                _p3p.houg += 1 * _p3y;
                var _p46 = _p3x[10];
                _p3p.souk += 1 * _p46;
            }
            return _p3p;
        };
    },
    45749: (_p47, _p48, _p49) => {
        'use strict';
        var _p4a = null;
        defineModule(_p48);
        Object.defineProperty(_p48, '__esModule', {
            'value': true
        }), _p48.getSlot79And81PersonalEffect = void 0;
        var _p4b = _p49(74496);
        _p48.getSlot79And81PersonalEffect = function(_p4c) {
            var _p4d = null,
                _p4e = new _p4b.SlotItemEffectModel(),
                _p4f = new _p4b.SlotItemEffectModel();
            if (553 == _p4c.ship_id) _p4f.houg = 3;
            else {
                if (82 == _p4c.ship_id) _p4f.houg = 2;
                else {
                    if (88 == _p4c.ship_id) _p4f.houg = 2;
                    else {
                        if (554 == _p4c.ship_id) _p4f.houg = 3;
                        else {
                            if (411 == _p4c.ship_id) _p4f.houg = 2;
                            else {
                                if (412 != _p4c.ship_id) return _p4e;
                                _p4f.houg = 2;
                            }
                        }
                    }
                }
            }
            var _p4g = _p4c.get_slotnums(79) + _p4c.get_slotnums(81);
            return _p4e = _p4f.multiply(_p4g);
        };
    },
    37334: (_p4h, _p4i, _p4j) => {
        'use strict';
        var _p4k = null;
        defineModule(_p4i);
        Object.defineProperty(_p4i, '__esModule', {
            'value': true
        }), _p4i.getSlot82PersonalEffect = void 0;
        var _p4l = _p4j(74496);
        _p4i.getSlot82PersonalEffect = function(_p4m) {
            var _p4n = null,
                _p4o = new _p4l.SlotItemEffectModel(),
                _p4p = new _p4l.SlotItemEffectModel();
            if (76 == _p4m.ctype && (_p4p.tais = 1, _p4p.kaih = 1), !_p4p.exists()) return _p4o;
            var _p4q = _p4m.get_slotnums(82);
            return _p4o = _p4p.multiply(_p4q);
        };
    },
    2603: function(_p4r, _p4s, _p4t) {
        'use strict';
        var _p4u = null;
        var _p4v = this && this.__importDefault || function(_p4w) {
            var _p4x = null;
            return _p4w && _p4w.__esModule ? _p4w : {
                'default': _p4w
            };
        };
        defineModule(_p4s);
        Object.defineProperty(_p4s, '__esModule', {
            'value': true
        }), _p4s.getSlot84PersonalEffect = void 0;
        var _p4y = _p4t(74496),
            _p4z = _p4v(_p4t(18622));
        _p4s.getSlot84PersonalEffect = function(_p50) {
            var _p51 = null,
                _p52 = new _p4y.SlotItemEffectModel(),
                _p53 = _p50.get_each_level_nums(84),
                _p54 = 0,
                _p55 = 0;
            if (_p53.forEach(function(_p56, _p57) {
                    _p57 >= 4 && (_p54 += _p56), _p57 >= 7 && (_p55 += _p56);
                }), 0 == _p54) return _p52;
            for (var _p58 = 0, _p59 = 0, _p5a = _p50.have_slot_ids(); _p59 < _p5a.length; _p59++) {
                var _p5b = _p5a[_p59],
                    _p5c = _p4z.default.model.slot.getMst(_p5b),
                    _p5d = _p5c.equipType;
                12 != _p5d && 13 != _p5d || (_p5c.sakuteki >= 5 && _p50.get_slotnums(parseInt(_p5b)), _p5c.taiku >= 2 && (_p58 += _p50.get_slotnums(parseInt(_p5b))));
            }
            var _p5e = _p50.getCountryName();
            _p54 >= 1 && (_p52.tyku += 1 * _p54, _p52.kaih += 1 * _p54, 'ドイツ' != _p5e && 'イタリア' != _p5e || (_p52.tyku += 1 * _p54, _p52.kaih += 1 * _p54), _p58 >= 1 && (_p52.tyku += 1)), _p55 >= 1 && (_p52.tyku += 1 * _p55, _p52.houg += 1 * _p55);
            var _p5f = _p53[10];
            return _p5f >= 1 && (_p52.tyku += 1 * _p5f, _p52.kaih += 1 * _p5f, 'ドイツ' != _p5e && 'イタリア' != _p5e || (_p52.houg += 1)), _p52;
        };
    },
    90725: (_p5g, _p5h, _p5i) => {
        'use strict';
        var _p5j = null;
        defineModule(_p5h);
        Object.defineProperty(_p5h, '__esModule', {
            'value': true
        }), _p5h.getSlot85PersonalEffect = void 0;
        var _p5k = _p5i(74496);
        _p5h.getSlot85PersonalEffect = function(_p5l) {
            var _p5m = null,
                _p5n = new _p5k.SlotItemEffectModel(),
                _p5o = _p5l.get_each_level_over_nums([85]),
                _p5p = _p5o.slot[85][6],
                _p5q = _p5o.slot[85][8],
                _p5r = _p5o.slot[85][10],
                _p5s = _p5l.get_have_rader_nums().air_rader,
                _p5t = _p5l.getCountryName();
            return _p5p > 0 && (_p5n.tyku += 1 * _p5p, _p5n.kaih += 1 * _p5p, _p5s >= 1 && (_p5n.tyku += 2)), _p5q > 0 && (_p5n.houg += 1 * _p5q, 'ドイツ' != _p5t && 'イタリア' != _p5t || (_p5n.tyku += 1 * _p5q, _p5n.kaih += 1 * _p5q)), _p5r > 0 && (_p5n.kaih += 1 * _p5r, _p5n.houm += 1 * _p5r, 'ドイツ' != _p5t && 'イタリア' != _p5t || (_p5n.houg += 1)), _p5n;
        };
    },
    29180: (_p5u, _p5v, _p5w) => {
        'use strict';
        var _p5x = null;
        defineModule(_p5v);
        Object.defineProperty(_p5v, '__esModule', {
            'value': true
        }), _p5v.getSlot87PersonalEffect = void 0;
        var _p5y = _p5w(74496);
        _p5v.getSlot87PersonalEffect = function(_p5z) {
            var _p60 = null,
                _p61 = new _p5y.SlotItemEffectModel(),
                _p62 = false,
                _p63 = new _p5y.SlotItemEffectModel(),
                _p64 = 0;
            if (951 == _p5z.ship_id ? (_p63.houg += 1, _p63.kaih += 1, _p63.raig += 1, _p63.houm += 1, _p62 = true, _p64 = 1) : 181 == _p5z.ship_id || 316 == _p5z.ship_id || 50 == _p5z.ship_id || 229 == _p5z.ship_id || 961 == _p5z.ship_id ? _p64 = 2 : 591 != _p5z.ship_id && 592 != _p5z.ship_id && 593 != _p5z.ship_id && 954 != _p5z.ship_id && 694 != _p5z.ship_id || (_p61.kaih += 2, _p61.raig += 1, _p64 = 3), 38 != _p5z.ctype && 54 != _p5z.ctype && 101 != _p5z.ctype || (_p64 = 4), _p62) {
                var _p65 = _p5z.get_slotnums(87);
                _p61.add(_p63.multiply(_p65));
            }
            if (0 == _p64) return _p61;
            var _p66 = _p5z.get_each_level_nums(87),
                _p67 = [];
            return _p64 > 0 && _p66.forEach(function(_p68, _p69) {
                var _p6a = null;
                for (var _p6b = 1; _p6b <= _p5z.SLOT_LEVEL_MAX; _p6b++) null == _p67[_p6b] && (_p67[_p6b] = 0), _p69 >= _p6b && (_p67[_p6b] += _p68);
            }), 1 == _p64 ? (_p67[6] >= 1 && (_p61.tyku += 1 * _p67[6]), _p67[7] >= 1 && (_p61.kaih += 1 * _p67[7]), _p67[8] >= 1 && (_p61.raig += 1 * _p67[8]), _p67[9] >= 1 && (_p61.houg += 1 * _p67[9]), _p67[10] >= 1 && (_p61.houm += 1 * _p67[10])) : 2 == _p64 ? (_p67[6] >= 1 && (_p61.kaih += 1 * _p67[6]), _p67[7] >= 1 && (_p61.raig += 1 * _p67[7]), _p67[8] >= 1 && (_p61.houg += 1 * _p67[8]), _p67[9] >= 1 && (_p61.houm += 1 * _p67[9]), _p67[10] >= 1 && (_p61.kaih += 1 * _p67[10])) : 3 == _p64 ? (_p67[6] > 0 && (_p61.kaih += 1), _p67[8] > 0 && (_p61.raig += 1), _p67[10] > 0 && (_p61.houg += 1)) : 4 == _p64 && (_p67[7] >= 1 && (_p61.kaih += 1 * _p67[7]), _p67[8] >= 1 && (_p61.raig += 1 * _p67[8]), _p67[10] >= 1 && (_p61.houm += 1 * _p67[10])), _p61;
        };
    },
    68685: function(_p6c, _p6d, _p6e) {
        'use strict';
        var _p6f = null;
        var _p6g = this && this.__importDefault || function(_p6h) {
            var _p6i = null;
            return _p6h && _p6h.__esModule ? _p6h : {
                'default': _p6h
            };
        };
        defineModule(_p6d);
        Object.defineProperty(_p6d, '__esModule', {
            'value': true
        }), _p6d.getSlot90PersonalEffect = void 0;
        var _p6j = _p6e(74496),
            _p6k = _p6g(_p6e(18622));
        _p6d.getSlot90PersonalEffect = function(_p6l) {
            var _p6m = null,
                _p6n = new _p6j.SlotItemEffectModel(),
                _p6o = new _p6j.SlotItemEffectModel();
            if (142 == _p6l.ship_id ? (_p6o.houg += 2, _p6o.kaih += 1) : 295 == _p6l.ship_id || 416 == _p6l.ship_id || 417 == _p6l.ship_id ? _p6o.houg += 1 : 264 == _p6l.ship_id ? (_p6o.houg += 1, _p6o.tyku += 1) : 501 != _p6l.ship_id && 506 != _p6l.ship_id && 502 != _p6l.ship_id && 507 != _p6l.ship_id || (_p6o.houg += 1), 7 != _p6l.ctype && 13 != _p6l.ctype && 8 != _p6l.ctype && 29 != _p6l.ctype && 9 != _p6l.ctype && 31 != _p6l.ctype || (_p6o.houg += 1), _p6o.exists()) {
                var _p6p = _p6l.get_slotnums(90);
                _p6n = _p6o.multiply(_p6p);
            }
            var _p6q = [];
            if ('あおば' == _p6l.yomi && (_p6q[1] = 1), 13 != _p6l.ctype && 7 != _p6l.ctype || (_p6q[2] = 1), 0 == _p6q.length) return _p6n;
            for (var _p6r = 0, _p6s = 0, _p6t = 0, _p6u = _p6l.have_slot_ids(); _p6t < _p6u.length; _p6t++) {
                var _p6v = _p6u[_p6t],
                    _p6w = _p6k.default.model.slot.getMst(_p6v),
                    _p6x = _p6w.equipType;
                12 != _p6x && 13 != _p6x || (_p6w.sakuteki >= 5 && (_p6r += _p6l.get_slotnums(parseInt(_p6v))), _p6w.taiku >= 2 && (_p6s += _p6l.get_slotnums(parseInt(_p6v))));
            }
            return _p6s > 0 && null != _p6q[1] && (_p6n.tyku += 5, _p6n.kaih += 2), _p6r > 0 && null != _p6q[2] && (_p6n.houg += 3, _p6n.kaih += 2, _p6n.raig += 2), _p6n;
        };
    },
    26078: (_p6y, _p6z, _p70) => {
        'use strict';
        var _p71 = null;
        defineModule(_p6z);
        Object.defineProperty(_p6z, '__esModule', {
            'value': true
        }), _p6z.getSlot93PersonalEffect = void 0;
        var _p72 = _p70(74496);
        _p6z.getSlot93PersonalEffect = function(_p73) {
            var _p74 = null,
                _p75 = new _p72.SlotItemEffectModel();
            return 'そうりゅう' == _p73.yomi ? _p75.houg = 1 : 'ひりゅう' == _p73.yomi && (_p75.houg = 3), _p75;
        };
    },
    20829: (_p76, _p77, _p78) => {
        'use strict';
        var _p79 = null;
        defineModule(_p77);
        Object.defineProperty(_p77, '__esModule', {
            'value': true
        }), _p77.getSlot94PersonalEffect = void 0;
        var _p7a = _p78(74496);
        _p77.getSlot94PersonalEffect = function(_p7b) {
            var _p7c = null,
                _p7d = new _p7a.SlotItemEffectModel();
            if (196 == _p7b.ship_id) _p7d.houg = 7;
            else {
                if (197 != _p7b.ship_id) return _p7d;
                _p7d.houg = 3;
            }
            return _p7d;
        };
    },
    6880: (_p7e, _p7f, _p7g) => {
        'use strict';
        var _p7h = null;
        defineModule(_p7f);
        Object.defineProperty(_p7f, '__esModule', {
            'value': true
        }), _p7f.getSlot99PersonalEffect = void 0;
        var _p7i = _p7g(74496);
        _p7f.getSlot99PersonalEffect = function(_p7j) {
            var _p7k = null,
                _p7l = new _p7i.SlotItemEffectModel();
            return 'そうりゅう' == _p7j.yomi ? _p7l.houg = 4 : 'ひりゅう' == _p7j.yomi && (_p7l.houg = 1), _p7l;
        };
    },
    21403: (_p7m, _p7n, _p7o) => {
        'use strict';
        var _p7p = null;
        defineModule(_p7n);
        Object.defineProperty(_p7n, '__esModule', {
            'value': true
        }), _p7n.getSlotCorsairMkIIPersonalEffect = void 0;
        var _p7q = _p7o(74496);
        _p7n.getSlotCorsairMkIIPersonalEffect = function(_p7r) {
            var _p7s = null,
                _p7t = new _p7q.SlotItemEffectModel(),
                _p7u = false,
                _p7v = new _p7q.SlotItemEffectModel();
            112 == _p7r.ctype && (_p7v.houg += 1, _p7v.tyku += 1, _p7v.kaih += 2, _p7u = true);
            var _p7w = _p7r.getCountryName();
            if (67 == _p7r.ctype || 78 == _p7r.ctype || 82 == _p7r.ctype || 88 == _p7r.ctype || 108 == _p7r.ctype || 112 == _p7r.ctype ? (_p7v.houg += 1, _p7v.tyku += 2, _p7v.kaih += 3, _p7u = true) : 'アメリカ' == _p7w && (_p7v.houg += 1, _p7v.tyku += 1, _p7v.kaih += 2, _p7u = true), 0 == _p7u) return _p7t;
            var _p7x = _p7r.get_slotnums(434) + _p7r.get_slotnums(435);
            return _p7t.add(_p7v.multiply(_p7x)), _p7t;
        };
    },
    9195: (_p7y, _p7z, _p80) => {
        'use strict';
        var _p81 = null;
        defineModule(_p7z);
        Object.defineProperty(_p7z, '__esModule', {
            'value': true
        }), _p7z.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _p82 = _p80(74496);
        _p7z.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_p83) {
            var _p84 = null,
                _p85 = new _p82.SlotItemEffectModel(),
                _p86 = false,
                _p87 = new _p82.SlotItemEffectModel();
            if (56 == _p83.ctype && (_p87.tais += 3, _p87.kaih += 2, _p86 = true), 0 == _p86) return _p85;
            var _p88 = _p83.get_slotnums(44) + _p83.get_slotnums(45) + _p83.get_slotnums(287) + _p83.get_slotnums(288);
            return _p85.add(_p87.multiply(_p88)), _p85;
        };
    },
    93297: (_p89, _p8a, _p8b) => {
        'use strict';
        var _p8c = null;
        defineModule(_p8a);
        Object.defineProperty(_p8a, '__esModule', {
            'value': true
        }), _p8a.getSlotDomesticSonarPersonalEffect = void 0;
        var _p8d = _p8b(74496);
        _p8a.getSlotDomesticSonarPersonalEffect = function(_p8e) {
            var _p8f = null,
                _p8g = new _p8d.SlotItemEffectModel();
            return 56 == _p8e.ctype && (_p8g.tais += 2, _p8g.kaih += 3), _p8g;
        };
    },
    45482: (_p8h, _p8i, _p8j) => {
        'use strict';
        var _p8k = null;
        defineModule(_p8i);
        Object.defineProperty(_p8i, '__esModule', {
            'value': true
        }), _p8i.getSlotOtherSuiseiPersonalEffect = void 0;
        var _p8l = _p8j(74496);
        _p8i.getSlotOtherSuiseiPersonalEffect = function(_p8m) {
            var _p8n = null,
                _p8o = new _p8l.SlotItemEffectModel(),
                _p8p = new _p8l.SlotItemEffectModel();
            if (553 == _p8m.ship_id) _p8p.houg = 2;
            else {
                if (554 != _p8m.ship_id) return _p8o;
                _p8p.houg = 2;
            }
            var _p8q = _p8m.get_slotnums(24) + _p8m.get_slotnums(57) + _p8m.get_slotnums(111);
            return _p8o = _p8p.multiply(_p8q);
        };
    },
    10950: (_p8r, _p8s, _p8t) => {
        'use strict';
        var _p8u = null;
        defineModule(_p8s);
        Object.defineProperty(_p8s, '__esModule', {
            'value': true
        }), _p8s.getSlotSBD_Type_VS_VBPersonalEffect = void 0;
        var _p8v = _p8t(74496);
        _p8s.getSlotSBD_Type_VS_VBPersonalEffect = function(_p8w) {
            var _p8x = null,
                _p8y = new _p8v.SlotItemEffectModel(),
                _p8z = false,
                _p90 = new _p8v.SlotItemEffectModel();
            'レキシントン' == _p8w.yomi ? (_p90.houg += 4, _p90.houm += 2, _p90.tyku += 1, _p90.kaih += 2, _p90.saku += 2, _p8z = true) : 'サラトガ' == _p8w.yomi ? (_p90.houg += 2, _p90.houm += 1, _p90.tyku += 1, _p90.kaih += 1, _p90.saku += 1, _p8z = true) : 'ホーネット' == _p8w.yomi || 'レンジャー' == _p8w.yomi ? (_p90.houg += 1, _p90.houm += 1, _p90.tyku += 1, _p90.kaih += 1, _p8z = true) : 'ガンビア・ベイ' != _p8w.yomi && 'ラングレー' != _p8w.yomi || (_p90.houg += 1, _p90.kaih += 1, _p8z = true);
            var _p91 = _p8w.get_slotnums(543) + _p8w.get_slotnums(544);
            _p8z && _p8y.add(_p90.multiply(_p91));
            var _p92 = _p8w.haveSlotLevelNumOver(543),
                _p93 = _p8w.haveSlotLevelNumOver(544);
            return 'アメリカ' == _p8w.getCountryName() && (_p92[7] >= 1 && (_p8y.houm += 1 * _p92[7]), _p92[8] >= 1 && (_p8y.saku += 1 * _p92[8]), _p92[9] >= 1 && (_p8y.houg += 1 * _p92[9]), _p92[10] >= 1 && (_p8y.houm += 1 * _p92[10]), _p93[7] >= 1 && (_p8y.houg += 1 * _p93[7]), _p93[8] >= 1 && (_p8y.houm += 1 * _p93[8]), _p93[9] >= 1 && (_p8y.tyku += 1 * _p93[9]), _p93[10] >= 1 && (_p8y.houg += 1 * _p93[10])), _p8y;
        };
    },
    45927: (_p94, _p95, _p96) => {
        'use strict';
        var _p97 = null;
        defineModule(_p95);
        Object.defineProperty(_p95, '__esModule', {
            'value': true
        }), _p95.getSlotSmokePersonalEffect = void 0;
        var _p98 = _p96(74496);
        _p95.getSlotSmokePersonalEffect = function(_p99) {
            var _p9a = null,
                _p9b = new _p98.SlotItemEffectModel(),
                _p9c = false,
                _p9d = new _p98.SlotItemEffectModel();
            if (959 == _p99.ship_id && (_p9d.kaih += 4, _p9c = true), 'ジョンストン' == _p99.yomi || 'サミュエル・B・ロバーツ' == _p99.yomi || 'せんだい' == _p99.yomi || 'はるかぜ' == _p99.yomi || 'かみかぜ' == _p99.yomi || 'しきなみ' == _p99.yomi || 'うらなみ' == _p99.yomi || 'あおば' == _p99.yomi ? (_p9d.kaih += 3, _p9c = true) : 'いなづま' != _p99.yomi && 'はぐろ' != _p99.yomi && 'はつしも' != _p99.yomi && 'かすみ' != _p99.yomi && 'ふぶき' != _p99.yomi && 'あたご' != _p99.yomi && 'あまぎり' != _p99.yomi && 'はまなみ' != _p99.yomi || (_p9d.kaih += 2, _p9c = true), 0 == _p9c) return _p9b;
            var _p9e = _p99.get_slotnums(500) + _p99.get_slotnums(501);
            return _p9b.add(_p9d.multiply(_p9e)), _p9b;
        };
    },
    75873: (_p9f, _p9g, _p9h) => {
        'use strict';
        var _p9i = null;
        defineModule(_p9g);
        Object.defineProperty(_p9g, '__esModule', {
            'value': true
        }), _p9g.getSlotSocSeagullPersonalEffect = void 0;
        var _p9j = _p9h(74496);
        _p9g.getSlotSocSeagullPersonalEffect = function(_p9k) {
            var _p9l = null,
                _p9m = new _p9j.SlotItemEffectModel(),
                _p9n = {},
                _p9o = false,
                _p9p = false;
            'アメリカ' == _p9k.getCountryName() && (_p9o = true, 3 != _p9k.stype && 5 != _p9k.stype || (_p9p = true)), _p9k.get_slotnums(414);
            var _p9q = _p9k.get_slotnums(539);
            _p9o && (_p9m.saku += 1, _p9n[1] = 1), _p9p && (_p9m.houg += 1, _p9m.saku += 1, 110 == _p9k.ctype && _p9q >= 1 && (_p9m.houm += 1), _p9n[2] = 1);
            var _p9r = _p9k.haveSlotLevelNumOver(414),
                _p9s = _p9k.haveSlotLevelNumOver(539);
            return null != _p9n[1] && (_p9r[5] >= 1 && (_p9m.kaih += 1), _p9s[3] >= 1 && (_p9m.kaih += 1), _p9s[5] >= 1 && (_p9m.saku += 1), _p9s[7] >= 1 && (_p9m.houm += 1)), null != _p9n[2] && (_p9r[3] >= 1 && (_p9m.saku += 1), _p9r[8] >= 1 && (_p9m.kaih += 1), _p9r[10] >= 1 && (_p9m.houg += 1), _p9s[6] >= 1 && (_p9m.tyku += 1), _p9s[8] >= 1 && (_p9m.kaih += 1), _p9s[9] >= 1 && (_p9m.houg += 1), _p9s[10] >= 1 && (_p9m.houm += 1)), _p9m;
        };
    },
    32666: (_p9t, _p9u, _p9v) => {
        'use strict';
        var _p9w = null;
        defineModule(_p9u);
        Object.defineProperty(_p9u, '__esModule', {
            'value': true
        }), _p9u.getSlotTokuYonPersonalEffect = void 0;
        var _p9x = _p9v(74496);
        _p9u.getSlotTokuYonPersonalEffect = function(_p9y) {
            var _p9z = null,
                _pa0 = new _p9x.SlotItemEffectModel(),
                _pa1 = false,
                _pa2 = new _p9x.SlotItemEffectModel(),
                _pa3 = 0,
                _pa4 = _p9y.get_slotnums(525),
                _pa5 = _p9y.get_slotnums(526),
                _pa6 = _pa4 + _pa5;
            if (13 != _p9y.stype && 14 != _p9y.stype || (_pa2.houg += 1, _pa2.raig += 2, _pa2.kaih -= 1, _pa1 = true, _pa3 = 1, 'い36' != _p9y.yomi && 'い41' != _p9y.yomi || (_pa0.houg += 2, _pa0.raig += 1, _pa0.houm += 2), _pa5 >= 1 && (_pa0.houg += 1 * _pa5, _pa0.raig += 1 * _pa5, _pa0.houm += 1 * _pa5)), 0 == _pa1) return _pa0;
            if (_pa0.add(_pa2.multiply(_pa6)), 0 == _pa3) return _pa0;
            var _pa7 = _p9y.get_each_level_over_nums([525, 526]),
                _pa8 = _pa7.slot[525],
                _pa9 = _pa7.slot[526];
            if (1 == _pa3) {
                if (_pa8[1] >= 1 || _pa9[1] >= 1) {
                    var _paa = _pa8[1] + _pa9[1];
                    _pa0.raig += 1 * _paa;
                }
                if (_pa9[2] >= 1) {
                    var _pab = _pa8[2] + _pa9[2];
                    _pa0.houg += 1 * _pab;
                }
                if (_pa8[3] >= 1 || _pa9[3] >= 1) {
                    var _pac = _pa8[3] + _pa9[3];
                    _pa0.houm += 1 * _pac;
                }
                if (_pa9[4] >= 1) {
                    var _pad = _pa8[4] + _pa9[4];
                    _pa0.raig += 1 * _pad;
                }
                if (_pa8[6] >= 1 || _pa9[6] >= 1) {
                    var _pae = _pa8[6] + _pa9[6];
                    _pa0.houm += 1 * _pae;
                }
                if (_pa9[8] >= 1) {
                    var _paf = _pa8[8] + _pa9[8];
                    _pa0.houg += 1 * _paf;
                }
                if (_pa8[10] >= 1 || _pa9[10] >= 1) {
                    var _pag = _pa8[10] + _pa9[10];
                    _pa0.raig += 1 * _pag;
                }
            }
            return _pa0;
        };
    },
    29805: (_pah, _pai, _paj) => {
        'use strict';
        var _pak = null;
        defineModule(_pai);
        Object.defineProperty(_pai, '__esModule', {
            'value': true
        }), _pai.getSlotType10PersonalEffect = void 0;
        var _pal = _paj(74496);
        _pai.getSlotType10PersonalEffect = function(_pam) {
            var _pan = null,
                _pao = new _pal.SlotItemEffectModel();
            return 662 == _pam.ship_id || 663 == _pam.ship_id || 668 == _pam.ship_id ? (_pao.houg += 2, _pao.kaih += 1, _pao.tais += 3) : 501 != _pam.ship_id && 506 != _pam.ship_id && 502 != _pam.ship_id && 507 != _pam.ship_id || (_pao.houg += 2), _pao;
        };
    },
    58913: (_pap, _paq, _par) => {
        'use strict';
        var _pas = null;
        defineModule(_paq);
        Object.defineProperty(_paq, '__esModule', {
            'value': true
        }), _paq.getSlotType11PersonalEffect = void 0;
        var _pat = _par(74496);
        _paq.getSlotType11PersonalEffect = function(_pau) {
            var _pav = null,
                _paw = new _pat.SlotItemEffectModel();
            return 662 == _pau.ship_id || 663 == _pau.ship_id || 668 == _pau.ship_id ? (_paw.houg += 1, _paw.kaih += 1, _paw.tais += 1) : 501 != _pau.ship_id && 506 != _pau.ship_id && 502 != _pau.ship_id && 507 != _pau.ship_id || (_paw.houg += 1, _paw.kaih += 1), _paw;
        };
    },
    55421: (_pax, _pay, _paz) => {
        'use strict';
        var _pb0 = null;
        defineModule(_pay);
        Object.defineProperty(_pay, '__esModule', {
            'value': true
        }), _pay.getSlotType25PersonalEffect = void 0;
        var _pb1 = _paz(74496);
        _pay.getSlotType25PersonalEffect = function(_pb2) {
            var _pb3 = null,
                _pb4 = new _pb1.SlotItemEffectModel();
            return 662 == _pb2.ship_id ? (_pb4.tais += 4, _pb4.kaih += 1) : 663 != _pb2.ship_id && 668 != _pb2.ship_id || (_pb4.tais += 3, _pb4.kaih += 1), _pb4;
        };
    },
    272: function(_pb5, _pb6, _pb7) {
        'use strict';
        var _pb8 = null;
        var _pb9 = this && this.__importDefault || function(_pba) {
            var _pbb = null;
            return _pba && _pba.__esModule ? _pba : {
                'default': _pba
            };
        };
        defineModule(_pb6);
        Object.defineProperty(_pb6, '__esModule', {
            'value': true
        }), _pb6.getSlotType9PersonalEffect = void 0;
        var _pbc = _pb7(74496),
            _pbd = _pb9(_pb7(18622));
        _pb6.getSlotType9PersonalEffect = function(_pbe) {
            var _pbf = null,
                _pbg = new _pbc.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_pbe.stype]) return _pbg;
            for (var _pbh = 0, _pbi = 0, _pbj = _pbe.have_slot_ids(); _pbi < _pbj.length; _pbi++) {
                var _pbk = _pbj[_pbi];
                if (9 == _pbd.default.model.slot.getMst(_pbk).equipType)
                    for (var _pbl = 0, _pbm = _pbe.have_slots_dict[parseInt(_pbk)]; _pbl < _pbm.length; _pbl++) {
                        var _pbn = _pbm[_pbl].level;
                        _pbh < _pbn && (_pbh = _pbn);
                    }
            }
            return _pbh >= 2 && (_pbg.saku += 1), _pbh >= 4 && (_pbg.houg += 1), _pbh >= 6 && (_pbg.saku += 1), _pbh >= 10 && (_pbg.houg += 1, _pbg.saku += 1), _pbg;
        };
    },
    49964: (_pbo, _pbp, _pbq) => {
        'use strict';
        var _pbr = null;
        defineModule(_pbp);
        Object.defineProperty(_pbp, '__esModule', {
            'value': true
        }), _pbp.getSlotYellowWingsPersonalEffect = void 0;
        var _pbs = _pbq(74496);
        _pbp.getSlotYellowWingsPersonalEffect = function(_pbt) {
            var _pbu = null,
                _pbv = new _pbs.SlotItemEffectModel(),
                _pbw = false,
                _pbx = new _pbs.SlotItemEffectModel();
            'レキシントン' == _pbt.yomi ? (_pbx.houg += 3, _pbx.houm += 2, _pbx.tyku += 1, _pbx.kaih += 2, _pbx.saku += 1, _pbw = true) : 'サラトガ' == _pbt.yomi ? (_pbx.houg += 2, _pbx.houm += 1, _pbx.tyku += 1, _pbx.kaih += 1, _pbx.saku += 1, _pbw = true) : 'ホーネット' != _pbt.yomi && 'レンジャー' != _pbt.yomi || (_pbx.houg += 1, _pbx.houm += 1, _pbx.kaih += 1, _pbw = true);
            var _pby = _pbt.get_slotnums(541) + _pbt.get_slotnums(542);
            _pbw && _pbv.add(_pbx.multiply(_pby));
            var _pbz = _pbt.haveSlotLevelNumOver(541),
                _pc0 = _pbt.haveSlotLevelNumOver(542);
            return 'アメリカ' == _pbt.getCountryName() && (_pbz[7] >= 1 && (_pbv.kaih += 1 * _pbz[7]), _pbz[10] >= 1 && (_pbv.houg += 1 * _pbz[10]), _pc0[7] >= 1 && (_pbv.houm += 1 * _pc0[7]), _pc0[10] >= 1 && (_pbv.houg += 1 * _pc0[10])), _pbv;
        };
    },
    54518: (_pc1, _pc2, _pc3) => {
        'use strict';
        var _pc4 = null;
        defineModule(_pc2);
        Object.defineProperty(_pc2, '__esModule', {
            'value': true
        }), _pc2.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _pc5 = _pc3(74496);
        _pc2.getSlot_16InchMkXRensouhou_PersonalEffect = function(_pc6) {
            var _pc7 = null,
                _pc8 = new _pc5.SlotItemEffectModel();
            if (93 == _pc6.ctype) {
                var _pc9 = _pc6.get_slotnums(330);
                _pc9 > 0 && (_pc8.houg = _pc8.houg + 1 * _pc9);
                var _pca = _pc6.get_slotnums(331);
                _pca > 0 && (_pc8.houg = _pc8.houg + 1 * _pca, 1496 != _pc6.ship_id && 918 != _pc6.ship_id || (_pc8.houg = _pc8.houg + 1 * _pca, _pc8.kaih = _pc8.kaih + 1 * _pca));
                var _pcb = _pc6.get_slotnums(332);
                return _pcb > 0 && (_pc8.houg = _pc8.houg + 1 * _pcb, 1496 != _pc6.ship_id && 918 != _pc6.ship_id || (_pc8.houg = _pc8.houg + 1 * _pcb, _pc8.kaih = _pc8.kaih + 1 * _pcb, _pc8.tyku = _pc8.tyku + 1 * _pcb)), _pc8;
            }
            var _pcc = new _pc5.SlotItemEffectModel();
            if (19 == _pc6.ctype ? (_pcc.houg = 1, (541 == _pc6.ship_id || 573 == _pc6.ship_id) && (_pcc.houg += 1)) : 88 == _pc6.ctype && (_pcc.houg = 1, 576 == _pc6.ship_id && (_pcc.houg += 1)), !_pcc.exists()) return _pc8;
            var _pcd = _pc6.get_slotnums(330) + _pc6.get_slotnums(331) + _pc6.get_slotnums(332);
            return _pc8 = _pcc.multiply(_pcd);
        };
    },
    79353: (_pce, _pcf, _pcg) => {
        'use strict';
        var _pch = null;
        defineModule(_pcf);
        Object.defineProperty(_pcf, '__esModule', {
            'value': true
        }), _pcf.getZuiunSeriesEffect = void 0;
        var _pci = _pcg(74496);
        _pcf.getZuiunSeriesEffect = function(_pcj) {
            var _pck = null,
                _pcl = new _pci.SlotItemEffectModel(),
                _pcm = false,
                _pcn = new _pci.SlotItemEffectModel();
            if (662 == _pcj.ship_id ? (_pcl.houg += 2, _pcl.kaih += 1) : 663 == _pcj.ship_id || 668 == _pcj.ship_id || 501 == _pcj.ship_id || 506 == _pcj.ship_id ? (_pcl.houg += 2, _pcn.kaih += 1, _pcn.tyku += 1, _pcm = true) : 502 != _pcj.ship_id && 507 != _pcj.ship_id || (_pcl.houg += 1, _pcn.kaih += 1, _pcn.tyku += 1, _pcm = true), 0 == _pcm) return _pcl;
            var _pco = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_pcp) {
                var _pcq = null;
                _pco += _pcj.get_slotnums(_pcp);
            }), _pcl.add(_pcn.multiply(_pco)), _pcl;
        };
    },
    89051: function(_pcr, _pcs, _pct) {
        'use strict';
        var _pcu = null;
        var _pcv = this && this.__createBinding || (Object.create ? function(_pcw, _pcx, _pcy, _pcz) {
                var _pd0 = null;
                void 0 === _pcz && (_pcz = _pcy);
                var _pd1 = Object.getOwnPropertyDescriptor(_pcx, _pcy);
                _pd1 && !('get' in _pd1 ? !_pcx.__esModule : _pd1.writable || _pd1.configurable) || (_pd1 = {
                    'enumerable': true,
                    'get': function() {
                        return _pcx[_pcy];
                    }
                }), Object.defineProperty(_pcw, _pcz, _pd1);
            } : function(_pd2, _pd3, _pd4, _pd5) {
                void 0 === _pd5 && (_pd5 = _pd4), _pd2[_pd5] = _pd3[_pd4];
            }),
            _pd6 = this && this.__exportStar || function(_pd7, _pd8) {
                var _pd9 = null;
                for (var _pda in _pd7) 'default' === _pda || Object.prototype.hasOwnProperty.call(_pd8, _pda) || _pcv(_pd8, _pd7, _pda);
            };
        defineModule(_pcs);
        Object.defineProperty(_pcs, '__esModule', {
            'value': true
        }), _pd6(_pct(34165), _pcs), _pd6(_pct(81018), _pcs), _pd6(_pct(56716), _pcs), _pd6(_pct(17713), _pcs), _pd6(_pct(54518), _pcs), _pd6(_pct(66985), _pcs), _pd6(_pct(88102), _pcs), _pd6(_pct(66904), _pcs), _pd6(_pct(98137), _pcs), _pd6(_pct(69954), _pcs), _pd6(_pct(22218), _pcs), _pd6(_pct(88271), _pcs), _pd6(_pct(23035), _pcs), _pd6(_pct(2578), _pcs), _pd6(_pct(17143), _pcs), _pd6(_pct(16164), _pcs), _pd6(_pct(35023), _pcs), _pd6(_pct(44680), _pcs), _pd6(_pct(45749), _pcs), _pd6(_pct(37334), _pcs), _pd6(_pct(29180), _pcs), _pd6(_pct(68685), _pcs), _pd6(_pct(26078), _pcs), _pd6(_pct(20829), _pcs), _pd6(_pct(6880), _pcs), _pd6(_pct(17213), _pcs), _pd6(_pct(40176), _pcs), _pd6(_pct(32889), _pcs), _pd6(_pct(11285), _pcs), _pd6(_pct(96200), _pcs), _pd6(_pct(9115), _pcs), _pd6(_pct(37173), _pcs), _pd6(_pct(21713), _pcs), _pd6(_pct(59823), _pcs), _pd6(_pct(57440), _pcs), _pd6(_pct(29240), _pcs), _pd6(_pct(40885), _pcs), _pd6(_pct(19614), _pcs), _pd6(_pct(87220), _pcs), _pd6(_pct(81367), _pcs), _pd6(_pct(13052), _pcs), _pd6(_pct(94968), _pcs), _pd6(_pct(48658), _pcs), _pd6(_pct(1906), _pcs), _pd6(_pct(61887), _pcs), _pd6(_pct(47970), _pcs), _pd6(_pct(31797), _pcs), _pd6(_pct(45738), _pcs), _pd6(_pct(34718), _pcs), _pd6(_pct(69245), _pcs), _pd6(_pct(18478), _pcs), _pd6(_pct(2899), _pcs), _pd6(_pct(57120), _pcs), _pd6(_pct(74985), _pcs), _pd6(_pct(9234), _pcs), _pd6(_pct(30802), _pcs), _pd6(_pct(97002), _pcs), _pd6(_pct(16748), _pcs), _pd6(_pct(53618), _pcs), _pd6(_pct(72573), _pcs), _pd6(_pct(8955), _pcs), _pd6(_pct(98947), _pcs), _pd6(_pct(44726), _pcs), _pd6(_pct(93065), _pcs), _pd6(_pct(85767), _pcs), _pd6(_pct(38314), _pcs), _pd6(_pct(59747), _pcs), _pd6(_pct(40649), _pcs), _pd6(_pct(13533), _pcs), _pd6(_pct(12138), _pcs), _pd6(_pct(30042), _pcs), _pd6(_pct(33623), _pcs), _pd6(_pct(85630), _pcs), _pd6(_pct(88736), _pcs), _pd6(_pct(49341), _pcs), _pd6(_pct(74306), _pcs), _pd6(_pct(83898), _pcs), _pd6(_pct(71873), _pcs), _pd6(_pct(53122), _pcs), _pd6(_pct(51063), _pcs), _pd6(_pct(91491), _pcs), _pd6(_pct(85495), _pcs), _pd6(_pct(65365), _pcs), _pd6(_pct(98164), _pcs), _pd6(_pct(38114), _pcs), _pd6(_pct(21003), _pcs), _pd6(_pct(77010), _pcs), _pd6(_pct(39126), _pcs), _pd6(_pct(72176), _pcs), _pd6(_pct(33846), _pcs), _pd6(_pct(97157), _pcs), _pd6(_pct(63406), _pcs), _pd6(_pct(66373), _pcs), _pd6(_pct(19707), _pcs), _pd6(_pct(63978), _pcs), _pd6(_pct(92382), _pcs), _pd6(_pct(78415), _pcs), _pd6(_pct(23090), _pcs), _pd6(_pct(18776), _pcs), _pd6(_pct(39656), _pcs), _pd6(_pct(66039), _pcs), _pd6(_pct(64679), _pcs), _pd6(_pct(95953), _pcs), _pd6(_pct(86384), _pcs), _pd6(_pct(65345), _pcs), _pd6(_pct(46514), _pcs), _pd6(_pct(81976), _pcs), _pd6(_pct(89331), _pcs), _pd6(_pct(73973), _pcs), _pd6(_pct(21178), _pcs), _pd6(_pct(5079), _pcs), _pd6(_pct(95014), _pcs), _pd6(_pct(53099), _pcs), _pd6(_pct(76201), _pcs), _pd6(_pct(24931), _pcs), _pd6(_pct(60978), _pcs), _pd6(_pct(74312), _pcs), _pd6(_pct(54350), _pcs), _pd6(_pct(26262), _pcs), _pd6(_pct(45530), _pcs), _pd6(_pct(44053), _pcs), _pd6(_pct(65441), _pcs), _pd6(_pct(33258), _pcs), _pd6(_pct(92168), _pcs), _pd6(_pct(85975), _pcs), _pd6(_pct(98467), _pcs), _pd6(_pct(88348), _pcs), _pd6(_pct(21097), _pcs), _pd6(_pct(37273), _pcs), _pd6(_pct(72694), _pcs), _pd6(_pct(62067), _pcs), _pd6(_pct(87817), _pcs), _pd6(_pct(93526), _pcs), _pd6(_pct(33084), _pcs), _pd6(_pct(97831), _pcs), _pd6(_pct(45482), _pcs), _pd6(_pct(272), _pcs), _pd6(_pct(69377), _pcs), _pd6(_pct(31127), _pcs), _pd6(_pct(79353), _pcs), _pd6(_pct(17274), _pcs), _pd6(_pct(91302), _pcs), _pd6(_pct(82229), _pcs), _pd6(_pct(10325), _pcs), _pd6(_pct(351), _pcs), _pd6(_pct(4050), _pcs), _pd6(_pct(29805), _pcs), _pd6(_pct(58913), _pcs), _pd6(_pct(55421), _pcs), _pd6(_pct(87845), _pcs), _pd6(_pct(17562), _pcs), _pd6(_pct(78466), _pcs), _pd6(_pct(40061), _pcs), _pd6(_pct(9195), _pcs), _pd6(_pct(93297), _pcs), _pd6(_pct(15133), _pcs), _pd6(_pct(55747), _pcs), _pd6(_pct(33155), _pcs), _pd6(_pct(79086), _pcs), _pd6(_pct(2306), _pcs), _pd6(_pct(14386), _pcs), _pd6(_pct(80225), _pcs), _pd6(_pct(17732), _pcs), _pd6(_pct(47169), _pcs), _pd6(_pct(77670), _pcs), _pd6(_pct(79988), _pcs), _pd6(_pct(92253), _pcs), _pd6(_pct(74428), _pcs), _pd6(_pct(75873), _pcs), _pd6(_pct(2631), _pcs), _pd6(_pct(27177), _pcs), _pd6(_pct(94781), _pcs), _pd6(_pct(53908), _pcs), _pd6(_pct(79813), _pcs), _pd6(_pct(16088), _pcs), _pd6(_pct(93733), _pcs), _pd6(_pct(69939), _pcs), _pd6(_pct(33734), _pcs), _pd6(_pct(34432), _pcs), _pd6(_pct(97423), _pcs), _pd6(_pct(23551), _pcs), _pd6(_pct(99791), _pcs), _pd6(_pct(21403), _pcs), _pd6(_pct(6173), _pcs), _pd6(_pct(23934), _pcs), _pd6(_pct(53709), _pcs), _pd6(_pct(88838), _pcs), _pd6(_pct(99790), _pcs), _pd6(_pct(18387), _pcs), _pd6(_pct(70941), _pcs), _pd6(_pct(35025), _pcs), _pd6(_pct(2603), _pcs), _pd6(_pct(78707), _pcs), _pd6(_pct(89058), _pcs), _pd6(_pct(84372), _pcs), _pd6(_pct(96804), _pcs), _pd6(_pct(33896), _pcs), _pd6(_pct(11031), _pcs), _pd6(_pct(71383), _pcs), _pd6(_pct(55888), _pcs), _pd6(_pct(2258), _pcs), _pd6(_pct(38003), _pcs), _pd6(_pct(92174), _pcs), _pd6(_pct(43768), _pcs), _pd6(_pct(73254), _pcs), _pd6(_pct(55734), _pcs), _pd6(_pct(81254), _pcs), _pd6(_pct(65455), _pcs), _pd6(_pct(70362), _pcs), _pd6(_pct(61977), _pcs), _pd6(_pct(43607), _pcs), _pd6(_pct(68086), _pcs), _pd6(_pct(78173), _pcs), _pd6(_pct(22581), _pcs), _pd6(_pct(20418), _pcs), _pd6(_pct(93373), _pcs), _pd6(_pct(13053), _pcs), _pd6(_pct(47874), _pcs), _pd6(_pct(42788), _pcs), _pd6(_pct(57664), _pcs), _pd6(_pct(44990), _pcs), _pd6(_pct(17712), _pcs), _pd6(_pct(83957), _pcs), _pd6(_pct(78539), _pcs), _pd6(_pct(96282), _pcs), _pd6(_pct(49679), _pcs), _pd6(_pct(45927), _pcs), _pd6(_pct(90312), _pcs), _pd6(_pct(86856), _pcs), _pd6(_pct(78123), _pcs), _pd6(_pct(25765), _pcs), _pd6(_pct(29493), _pcs), _pd6(_pct(28221), _pcs), _pd6(_pct(14830), _pcs), _pd6(_pct(54047), _pcs), _pd6(_pct(76054), _pcs), _pd6(_pct(90725), _pcs), _pd6(_pct(93053), _pcs), _pd6(_pct(88792), _pcs), _pd6(_pct(33242), _pcs), _pd6(_pct(59415), _pcs), _pd6(_pct(3296), _pcs), _pd6(_pct(32666), _pcs), _pd6(_pct(36731), _pcs), _pd6(_pct(30450), _pcs), _pd6(_pct(85127), _pcs), _pd6(_pct(87204), _pcs), _pd6(_pct(2380), _pcs), _pd6(_pct(96580), _pcs), _pd6(_pct(15653), _pcs), _pd6(_pct(41410), _pcs), _pd6(_pct(25851), _pcs), _pd6(_pct(6482), _pcs), _pd6(_pct(70332), _pcs), _pd6(_pct(91275), _pcs), _pd6(_pct(72743), _pcs), _pd6(_pct(49964), _pcs), _pd6(_pct(10950), _pcs), _pd6(_pct(57041), _pcs);
    },
    82692: function(_pdb, _pdc, _pdd) {
        'use strict';
        var _pde = null;
        var _pdf = this && this.__createBinding || (Object.create ? function(_pdg, _pdh, _pdi, _pdj) {
                var _pdk = null;
                void 0 === _pdj && (_pdj = _pdi);
                var _pdl = Object.getOwnPropertyDescriptor(_pdh, _pdi);
                _pdl && !('get' in _pdl ? !_pdh.__esModule : _pdl.writable || _pdl.configurable) || (_pdl = {
                    'enumerable': true,
                    'get': function() {
                        return _pdh[_pdi];
                    }
                }), Object.defineProperty(_pdg, _pdj, _pdl);
            } : function(_pdm, _pdn, _pdo, _pdp) {
                void 0 === _pdp && (_pdp = _pdo), _pdm[_pdp] = _pdn[_pdo];
            }),
            _pdq = this && this.__setModuleDefault || (Object.create ? function(_pdr, _pds) {
                var _pdt = null;
                Object.defineProperty(_pdr, 'default', {
                    'enumerable': true,
                    'value': _pds
                });
            } : function(_pdu, _pdv) {
                var _pdw = null;
                _pdu.default = _pdv;
            }),
            _pdx = this && this.__importStar || function(_pdy) {
                var _pdz = null;
                if (_pdy && _pdy.__esModule) return _pdy;
                var _pe0 = {};
                if (null != _pdy) {
                    for (var _pe1 in _pdy) 'default' !== _pe1 && Object.prototype.hasOwnProperty.call(_pdy, _pe1) && _pdf(_pe0, _pdy, _pe1);
                }
                return _pdq(_pe0, _pdy), _pe0;
            };
        defineModule(_pdc);
        Object.defineProperty(_pdc, '__esModule', {
            'value': true
        }), _pdc.SlotItemEffectUtil = void 0;
        var _pe2, _pe3 = _pdd(73785),
            _pe4 = _pdx(_pdd(89051)),
            _pe5 = _pdd(74496);
        ! function(_pe6) {
            var _pe7 = null;
            _pe6.getSlotitemEffect = function(_pe8, _pe9) {
                var _pea = null;
                if (null == _pe8 || null == _pe9) return null;
                for (var _peb = new _pe3.SlotItemEffectParamModel(_pe8, _pe9), _pec = [{
                        'isExecute': Boolean(_peb.get_type3_nums(9)),
                        'execFunc': _pe4.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_type3_nums(10)),
                        'execFunc': _pe4.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_type3_nums(11)),
                        'execFunc': _pe4.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_type3_nums(12)) || Boolean(_peb.get_type3_nums(13)),
                        'execFunc': _pe4.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_peb.get_type3_nums(25)),
                        'execFunc': _pe4.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_type3_nums(29)),
                        'execFunc': _pe4.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_peb.get_type3_nums(42)),
                        'execFunc': _pe4.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(3)) || Boolean(_peb.get_slotnums(122)) || Boolean(_peb.get_slotnums(533)),
                        'execFunc': _pe4.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(5)),
                        'execFunc': _pe4.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(12)),
                        'execFunc': _pe4.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(15)),
                        'execFunc': _pe4.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(18)) || Boolean(_peb.get_slotnums(52)),
                        'execFunc': _pe4.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(19)),
                        'execFunc': _pe4.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(24)) || Boolean(_peb.get_slotnums(57)) || Boolean(_peb.get_slotnums(111)),
                        'execFunc': _pe4.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(26)) || Boolean(_peb.get_slotnums(62)) || Boolean(_peb.get_slotnums(79)) || Boolean(_peb.get_slotnums(80)) || Boolean(_peb.get_slotnums(81)) || Boolean(_peb.get_slotnums(207)) || Boolean(_peb.get_slotnums(208)),
                        'execFunc': _pe4.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(35)),
                        'execFunc': _pe4.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(39)) || Boolean(_peb.get_slotnums(40)) || Boolean(_peb.get_slotnums(49)) || Boolean(_peb.get_slotnums(131)),
                        'execFunc': _pe4.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(30)) || Boolean(_peb.get_slotnums(410)),
                        'execFunc': _pe4.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(44)) || Boolean(_peb.get_slotnums(45)) || Boolean(_peb.get_slotnums(287)) || Boolean(_peb.get_slotnums(288)),
                        'execFunc': _pe4.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(46)) || Boolean(_peb.get_slotnums(47)) || Boolean(_peb.get_slotnums(149)) || Boolean(_peb.get_slotnums(132)) || Boolean(_peb.get_slotnums(438)),
                        'execFunc': _pe4.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(47)) || Boolean(_peb.get_slotnums(438)),
                        'execFunc': _pe4.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(50)),
                        'execFunc': _pe4.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(58)),
                        'execFunc': _pe4.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(59)),
                        'execFunc': _pe4.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(60)) || Boolean(_peb.get_slotnums(154)) || Boolean(_peb.get_slotnums(219)),
                        'execFunc': _pe4.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(61)),
                        'execFunc': _pe4.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(61)),
                        'execFunc': _pe4.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(63)),
                        'execFunc': _pe4.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(66)) || Boolean(_peb.get_slotnums(220)),
                        'execFunc': _pe4.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(67)),
                        'execFunc': _pe4.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(69)),
                        'execFunc': _pe4.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(70)),
                        'execFunc': _pe4.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(76)) || Boolean(_peb.get_slotnums(114)),
                        'execFunc': _pe4.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(78)),
                        'execFunc': _pe4.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(79)) || Boolean(_peb.get_slotnums(81)),
                        'execFunc': _pe4.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(82)),
                        'execFunc': _pe4.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(84)),
                        'execFunc': _pe4.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(85)),
                        'execFunc': _pe4.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(87)),
                        'execFunc': _pe4.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(90)),
                        'execFunc': _pe4.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(93)),
                        'execFunc': _pe4.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(94)),
                        'execFunc': _pe4.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(99)),
                        'execFunc': _pe4.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(100)),
                        'execFunc': _pe4.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(104)),
                        'execFunc': _pe4.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(106)) || Boolean(_peb.get_slotnums(450)),
                        'execFunc': _pe4.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(115)),
                        'execFunc': _pe4.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(118)) || Boolean(_peb.get_slotnums(521)),
                        'execFunc': _pe4.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(119)),
                        'execFunc': _pe4.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(121)),
                        'execFunc': _pe4.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(122)),
                        'execFunc': _pe4.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(123)),
                        'execFunc': _pe4.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(124)),
                        'execFunc': _pe4.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(128)) || Boolean(_peb.get_slotnums(281)),
                        'execFunc': _pe4.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(129)),
                        'execFunc': _pe4.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(130)),
                        'execFunc': _pe4.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(132)),
                        'execFunc': _pe4.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(136)),
                        'execFunc': _pe4.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(139)),
                        'execFunc': _pe4.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(143)),
                        'execFunc': _pe4.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(144)),
                        'execFunc': _pe4.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(147)) || Boolean(_peb.get_slotnums(393)) || Boolean(_peb.get_slotnums(394)),
                        'execFunc': _pe4.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(149)),
                        'execFunc': _pe4.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(165)) || Boolean(_peb.get_slotnums(216)),
                        'execFunc': _pe4.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(171)),
                        'execFunc': _pe4.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(174)),
                        'execFunc': _pe4.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(179)),
                        'execFunc': _pe4.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(184)),
                        'execFunc': _pe4.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(188)),
                        'execFunc': _pe4.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(189)),
                        'execFunc': _pe4.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(194)),
                        'execFunc': _pe4.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(195)),
                        'execFunc': _pe4.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(204)),
                        'execFunc': _pe4.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(217)),
                        'execFunc': _pe4.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(220)),
                        'execFunc': _pe4.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(227)),
                        'execFunc': _pe4.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(228)),
                        'execFunc': _pe4.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(229)),
                        'execFunc': _pe4.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(234)),
                        'execFunc': _pe4.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(235)),
                        'execFunc': _pe4.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(237)) || Boolean(_peb.get_slotnums(322)) || Boolean(_peb.get_slotnums(323)) || Boolean(_peb.get_slotnums(490)),
                        'execFunc': _pe4.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(237)),
                        'execFunc': _pe4.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(238)) || Boolean(_peb.get_slotnums(239)),
                        'execFunc': _pe4.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(242)),
                        'execFunc': _pe4.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(243)),
                        'execFunc': _pe4.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(244)),
                        'execFunc': _pe4.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(245)) || Boolean(_peb.get_slotnums(246)) || Boolean(_peb.get_slotnums(468)),
                        'execFunc': _pe4.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(247)),
                        'execFunc': _pe4.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(252)),
                        'execFunc': _pe4.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(266)),
                        'execFunc': _pe4.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(266)),
                        'execFunc': _pe4.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(267)) || Boolean(_peb.get_slotnums(366)),
                        'execFunc': _pe4.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(267)) || Boolean(_peb.get_slotnums(366)),
                        'execFunc': _pe4.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(268)),
                        'execFunc': _pe4.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(271)),
                        'execFunc': _pe4.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(275)),
                        'execFunc': _pe4.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(277)),
                        'execFunc': _pe4.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(278)),
                        'execFunc': _pe4.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(279)),
                        'execFunc': _pe4.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(282)),
                        'execFunc': _pe4.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(283)),
                        'execFunc': _pe4.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(285)),
                        'execFunc': _pe4.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(286)),
                        'execFunc': _pe4.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(286)),
                        'execFunc': _pe4.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(286)),
                        'execFunc': _pe4.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(287)),
                        'execFunc': _pe4.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(288)),
                        'execFunc': _pe4.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(289)),
                        'execFunc': _pe4.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(290)),
                        'execFunc': _pe4.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(291)),
                        'execFunc': _pe4.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(292)),
                        'execFunc': _pe4.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(293)),
                        'execFunc': _pe4.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(294)),
                        'execFunc': _pe4.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(295)),
                        'execFunc': _pe4.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(296)),
                        'execFunc': _pe4.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(297)),
                        'execFunc': _pe4.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(298)) || Boolean(_peb.get_slotnums(299)) || Boolean(_peb.get_slotnums(300)),
                        'execFunc': _pe4.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(301)),
                        'execFunc': _pe4.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(302)),
                        'execFunc': _pe4.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(303)),
                        'execFunc': _pe4.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(304)),
                        'execFunc': _pe4.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(305)) || Boolean(_peb.get_slotnums(306)),
                        'execFunc': _pe4.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(307)),
                        'execFunc': _pe4.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(308)),
                        'execFunc': _pe4.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(310)) || Boolean(_peb.get_slotnums(518)),
                        'execFunc': _pe4.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(313)),
                        'execFunc': _pe4.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(314)),
                        'execFunc': _pe4.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(315)),
                        'execFunc': _pe4.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(316)),
                        'execFunc': _pe4.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(317)),
                        'execFunc': _pe4.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(318)),
                        'execFunc': _pe4.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(319)),
                        'execFunc': _pe4.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(320)),
                        'execFunc': _pe4.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(322)),
                        'execFunc': _pe4.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(323)),
                        'execFunc': _pe4.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(324)) || Boolean(_peb.get_slotnums(325)),
                        'execFunc': _pe4.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(326)),
                        'execFunc': _pe4.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(327)),
                        'execFunc': _pe4.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(328)),
                        'execFunc': _pe4.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(329)),
                        'execFunc': _pe4.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(330)) || Boolean(_peb.get_slotnums(331)) || Boolean(_peb.get_slotnums(332)),
                        'execFunc': _pe4.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(335)),
                        'execFunc': _pe4.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(336)),
                        'execFunc': _pe4.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(337)),
                        'execFunc': _pe4.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(338)),
                        'execFunc': _pe4.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(339)),
                        'execFunc': _pe4.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(340)),
                        'execFunc': _pe4.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(341)),
                        'execFunc': _pe4.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(342)),
                        'execFunc': _pe4.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(343)),
                        'execFunc': _pe4.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(344)),
                        'execFunc': _pe4.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(345)),
                        'execFunc': _pe4.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(346)),
                        'execFunc': _pe4.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(347)),
                        'execFunc': _pe4.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(356)) || Boolean(_peb.get_slotnums(357)),
                        'execFunc': _pe4.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(358)),
                        'execFunc': _pe4.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(359)),
                        'execFunc': _pe4.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(360)) || Boolean(_peb.get_slotnums(361)),
                        'execFunc': _pe4.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(362)) || Boolean(_peb.get_slotnums(363)),
                        'execFunc': _pe4.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(364)),
                        'execFunc': _pe4.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(365)),
                        'execFunc': _pe4.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(367)),
                        'execFunc': _pe4.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(368)),
                        'execFunc': _pe4.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(369)),
                        'execFunc': _pe4.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(370)),
                        'execFunc': _pe4.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(371)),
                        'execFunc': _pe4.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(372)),
                        'execFunc': _pe4.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(373)),
                        'execFunc': _pe4.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(374)),
                        'execFunc': _pe4.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(375)),
                        'execFunc': _pe4.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(376)),
                        'execFunc': _pe4.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(377)),
                        'execFunc': _pe4.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(378)),
                        'execFunc': _pe4.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(379)),
                        'execFunc': _pe4.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(380)),
                        'execFunc': _pe4.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(381)),
                        'execFunc': _pe4.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(382)) || Boolean(_peb.get_slotnums(509)),
                        'execFunc': _pe4.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(383)),
                        'execFunc': _pe4.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(384)),
                        'execFunc': _pe4.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(385)),
                        'execFunc': _pe4.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(386)),
                        'execFunc': _pe4.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(387)),
                        'execFunc': _pe4.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(389)),
                        'execFunc': _pe4.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(390)),
                        'execFunc': _pe4.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(391)),
                        'execFunc': _pe4.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(392)),
                        'execFunc': _pe4.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(397)),
                        'execFunc': _pe4.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(398)),
                        'execFunc': _pe4.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(399)),
                        'execFunc': _pe4.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(400)),
                        'execFunc': _pe4.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(407)),
                        'execFunc': _pe4.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(408)),
                        'execFunc': _pe4.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(409)),
                        'execFunc': _pe4.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(411)),
                        'execFunc': _pe4.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(412)),
                        'execFunc': _pe4.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(413)),
                        'execFunc': _pe4.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(414)) || Boolean(_peb.get_slotnums(539)),
                        'execFunc': _pe4.getSlotSocSeagullPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(415)),
                        'execFunc': _pe4.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(419)),
                        'execFunc': _pe4.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(420)),
                        'execFunc': _pe4.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(421)),
                        'execFunc': _pe4.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(422)),
                        'execFunc': _pe4.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(423)),
                        'execFunc': _pe4.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(424)),
                        'execFunc': _pe4.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(425)),
                        'execFunc': _pe4.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(426)) || Boolean(_peb.get_slotnums(427)) || Boolean(_peb.get_slotnums(428)) || Boolean(_peb.get_slotnums(429)),
                        'execFunc': _pe4.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(430)),
                        'execFunc': _pe4.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(434)) || Boolean(_peb.get_slotnums(435)),
                        'execFunc': _pe4.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(437)),
                        'execFunc': _pe4.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(438)),
                        'execFunc': _pe4.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(439)),
                        'execFunc': _pe4.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(440)) || Boolean(_peb.get_slotnums(441)),
                        'execFunc': _pe4.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(442)) || Boolean(_peb.get_slotnums(443)),
                        'execFunc': _pe4.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(447)),
                        'execFunc': _pe4.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(450)),
                        'execFunc': _pe4.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(451)),
                        'execFunc': _pe4.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(455)),
                        'execFunc': _pe4.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(456)),
                        'execFunc': _pe4.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(457)) || Boolean(_peb.get_slotnums(461)),
                        'execFunc': _pe4.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(458)),
                        'execFunc': _pe4.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(463)),
                        'execFunc': _pe4.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(464)),
                        'execFunc': _pe4.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(465)),
                        'execFunc': _pe4.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(466)),
                        'execFunc': _pe4.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(467)),
                        'execFunc': _pe4.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(470)) || Boolean(_peb.get_slotnums(529)),
                        'execFunc': _pe4.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(471)),
                        'execFunc': _pe4.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(472)),
                        'execFunc': _pe4.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(473)),
                        'execFunc': _pe4.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(474)),
                        'execFunc': _pe4.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(478)),
                        'execFunc': _pe4.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(483)),
                        'execFunc': _pe4.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(485)),
                        'execFunc': _pe4.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(486)),
                        'execFunc': _pe4.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(487)),
                        'execFunc': _pe4.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(488)),
                        'execFunc': _pe4.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(489)) || Boolean(_peb.get_slotnums(491)),
                        'execFunc': _pe4.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(500)) || Boolean(_peb.get_slotnums(501)),
                        'execFunc': _pe4.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(502)),
                        'execFunc': _pe4.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(503)),
                        'execFunc': _pe4.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(505)),
                        'execFunc': _pe4.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(506)),
                        'execFunc': _pe4.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(507)) || Boolean(_peb.get_slotnums(508)),
                        'execFunc': _pe4.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(510)),
                        'execFunc': _pe4.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(511)) || Boolean(_peb.get_slotnums(512)),
                        'execFunc': _pe4.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(517)),
                        'execFunc': _pe4.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(518)),
                        'execFunc': _pe4.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(519)),
                        'execFunc': _pe4.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(520)),
                        'execFunc': _pe4.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(521)),
                        'execFunc': _pe4.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(522)) || Boolean(_peb.get_slotnums(523)),
                        'execFunc': _pe4.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(524)),
                        'execFunc': _pe4.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(525)) || Boolean(_peb.get_slotnums(526)),
                        'execFunc': _pe4.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(527)),
                        'execFunc': _pe4.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(528)),
                        'execFunc': _pe4.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(530)),
                        'execFunc': _pe4.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(531)),
                        'execFunc': _pe4.getSlot531PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(534)) || Boolean(_peb.get_slotnums(535)),
                        'execFunc': _pe4.getSlot13_8cmRensouhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(536)) || Boolean(_peb.get_slotnums(537)),
                        'execFunc': _pe4.getSlot15_2cmSanrensouSyuhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(538)),
                        'execFunc': _pe4.getSlot538PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(540)),
                        'execFunc': _pe4.getSlot540PersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(541)) || Boolean(_peb.get_slotnums(542)),
                        'execFunc': _pe4.getSlotYellowWingsPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(543)) || Boolean(_peb.get_slotnums(544)),
                        'execFunc': _pe4.getSlotSBD_Type_VS_VBPersonalEffect
                    }, {
                        'isExecute': Boolean(_peb.get_slotnums(545)),
                        'execFunc': _pe4.getSlot545PersonalEffect
                    }], _ped = new _pe5.SlotItemEffectModel(), _pee = 0, _pef = _pec; _pee < _pef.length; _pee++) {
                    var _peg = _pef[_pee];
                    if (_peg.isExecute) {
                        var _peh = _peg.execFunc(_peb);
                        0, _ped.add(_peh);
                    }
                }
                return _ped;
            };
        }(_pe2 || (_pdc.SlotItemEffectUtil = _pe2 = {}));
    },
}
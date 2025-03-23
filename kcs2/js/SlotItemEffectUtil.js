{
    72170: (_1ot, _1ou) => {
        'use strict';
        var _1ov = null;
        defineModule(_1ou);
        Object.defineProperty(_1ou, '__esModule', {
            'value': true
        }), _1ou.SHIP_COUNTRY = void 0, _1ou.SHIP_COUNTRY = {
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
            130: '日本',
            132: '日本',
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
            81: 'ロシア',
            131: 'ロシア'
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
    69377: function(_mt5, _mt6, _mt7) {
        'use strict';
        var _mt8 = null;
        var _mt9 = this && this.__importDefault || function(_mta) {
            var _mtb = null;
            return _mta && _mta.__esModule ? _mta : {
                'default': _mta
            };
        };
        defineModule(_mt6);
        Object.defineProperty(_mt6, '__esModule', {
            'value': true
        }), _mt6.get25mmMachinegunEffect = void 0;
        var _mtc = _mt7(74496),
            _mtd = _mt9(_mt7(18622));
        _mt6.get25mmMachinegunEffect = function(_mte) {
            var _mtf = null,
                _mtg = new _mtc.SlotItemEffectModel(),
                _mth = false,
                _mti = new _mtc.SlotItemEffectModel(),
                _mtj = 0,
                _mtk = new _mtc.SlotItemEffectModel(),
                _mtl = {},
                _mtm = 0;
            if (662 == _mte.ship_id || 663 == _mte.ship_id ? (_mti.tyku += 2, _mti.kaih += 1, _mth = true) : 668 == _mte.ship_id ? (_mti.tyku += 3, _mti.kaih += 2, _mth = true) : 979 == _mte.ship_id && (_mti.tyku += 2, _mti.kaih += 3, _mth = true, _mtk.kaih += 2, _mtl[49] = _mtk, _mtm = 1), 56 == _mte.ctype && (_mti.houg += 1, _mti.tyku += 2, _mti.kaih += 2, _mth = true, _mtj = 1), Object.keys(_mtl).forEach(function(_mtn) {
                    var _mto = null,
                        _mtp = _mtl[parseInt(_mtn)],
                        _mtq = _mte.get_slotnums(parseInt(_mtn));
                    _mtg.add(_mtp.multiply(_mtq));
                }), _mtm > 0) {
                var _mtr = _mte.get_each_level_over_nums([49, 39, 40, 131]),
                    _mts = _mtr.slot[49],
                    _mtt = _mtr.slot[39],
                    _mtu = _mtr.slot[40],
                    _mtv = _mtr.slot[131];
                1 == _mtm && (_mts[6] >= 1 && (_mtg.houm += 1 * _mts[6]), _mts[7] >= 1 && (_mtg.tyku += 1 * _mts[7]), _mts[8] >= 1 && (_mtg.kaih += 1 * _mts[8]), _mts[9] >= 1 && (_mtg.tyku += 1 * _mts[9]), _mts[10] >= 1 && (_mtg.houg += 1 * _mts[10]), _mtt[8] >= 1 && (_mtg.kaih += 1 * _mtt[8]), _mtt[9] >= 1 && (_mtg.tyku += 2 * _mtt[9]), _mtt[10] >= 1 && (_mtg.houg += 1 * _mtt[10]), _mtu[9] >= 1 && (_mtg.tyku += 2 * _mtu[9]), _mtu[10] >= 1 && (_mtg.houg += 1 * _mtu[10]), _mtv[10] >= 1 && (_mtg.tyku += 2 * _mtv[10]));
            }
            if (0 == _mth) return _mtg;
            var _mtw = _mte.get_slotnums(39) + _mte.get_slotnums(40) + _mte.get_slotnums(49) + _mte.get_slotnums(131);
            if (_mtg.add(_mti.multiply(_mtw)), 0 == _mtj) return _mtg;
            for (var _mtx = 0, _mty = 0, _mtz = _mte.have_slot_ids(); _mty < _mtz.length; _mty++) {
                var _mu0 = _mtz[_mty],
                    _mu1 = _mtd.default.model.slot.getMst(_mu0),
                    _mu2 = _mu1.equipType;
                12 != _mu2 && 13 != _mu2 || (_mu1.sakuteki >= 5 && _mte.get_slotnums(parseInt(_mu0)), _mu1.taiku >= 2 && (_mtx += _mte.get_slotnums(parseInt(_mu0))));
            }
            return _mtx >= 1 && 1 == _mtj && (_mtg.tyku += 2, _mtg.kaih += 2), _mtg;
        };
    },
    77670: function(_mu3, _mu4, _mu5) {
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
        }), _mu4.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mua = _mu5(74496),
            _mub = _mu7(_mu5(18622));
        _mu4.get8cmAntiAircraftGunPersonalEffect = function(_muc) {
            var _mud = null,
                _mue = new _mua.SlotItemEffectModel(),
                _muf = false,
                _mug = new _mua.SlotItemEffectModel(),
                _muh = 0;
            if (662 != _muc.ship_id && 663 != _muc.ship_id && 668 != _muc.ship_id || (_mug.tyku += 2, _mug.kaih += 1, _muf = true, _muh = 1), 501 != _muc.ship_id && 506 != _muc.ship_id && 502 != _muc.ship_id && 507 != _muc.ship_id || (_mug.houg += 1, _mug.tyku += 2, _mug.kaih += 2, _muf = true, _muh = 1), 0 == _muf) return _mue;
            var _mui = _muc.get_slotnums(66) + _muc.get_slotnums(220);
            _mue.add(_mug.multiply(_mui));
            for (var _muj = 0, _muk = 0, _mul = _muc.have_slot_ids(); _muk < _mul.length; _muk++) {
                var _mum = _mul[_muk],
                    _mun = _mub.default.model.slot.getMst(_mum),
                    _muo = _mun.equipType;
                12 != _muo && 13 != _muo || (_mun.sakuteki >= 5 && _muc.get_slotnums(parseInt(_mum)), _mun.taiku >= 2 && (_muj += _muc.get_slotnums(parseInt(_mum))));
            }
            return 0 == _muh || _muj >= 1 && (_mue.tyku += 1, _mue.kaih += 2), _mue;
        };
    },
    34165: (_mup, _muq, _mur) => {
        'use strict';
        var _mus = null;
        defineModule(_muq);
        Object.defineProperty(_muq, '__esModule', {
            'value': true
        }), _muq.getCamouflageSlotPersonalEffect = void 0;
        var _mut = _mur(74496);
        _muq.getCamouflageSlotPersonalEffect = function(_muu) {
            var _muv = null,
                _muw = new _mut.SlotItemEffectModel();
            return 'きそ' != _muu.yomi && 'たま' != _muu.yomi && 'ガングート' != _muu.yomi && 290 != _muu.ship_id && 200 != _muu.ship_id || (_muw.kaih = 7, _muw.souk = 2), _muw;
        };
    },
    31127: (_mux, _muy, _muz) => {
        'use strict';
        var _mv0 = null;
        defineModule(_muy);
        Object.defineProperty(_muy, '__esModule', {
            'value': true
        }), _muy.getHighZuiunSeriesEffect = void 0;
        var _mv1 = _muz(74496);
        _muy.getHighZuiunSeriesEffect = function(_mv2) {
            var _mv3 = null,
                _mv4 = new _mv1.SlotItemEffectModel(),
                _mv5 = false,
                _mv6 = new _mv1.SlotItemEffectModel();
            if (662 == _mv2.ship_id ? (_mv4.houg += 3, _mv4.kaih += 1) : 663 == _mv2.ship_id || 668 == _mv2.ship_id || 501 == _mv2.ship_id || 506 == _mv2.ship_id || 553 == _mv2.ship_id || 554 == _mv2.ship_id ? (_mv6.houg += 3, _mv6.kaih += 2, _mv6.tyku += 1, _mv5 = true) : 502 != _mv2.ship_id && 507 != _mv2.ship_id || (_mv6.houg += 2, _mv6.kaih += 2, _mv6.tyku += 1, _mv5 = true), 0 == _mv5) return _mv4;
            var _mv7 = 0;
            return [237, 322, 323, 490].forEach(function(_mv8) {
                var _mv9 = null;
                _mv7 += _mv2.get_slotnums(_mv8);
            }), _mv4.add(_mv6.multiply(_mv7)), _mv4;
        };
    },
    81018: function(_mva, _mvb, _mvc) {
        'use strict';
        var _mvd = null;
        var _mve = this && this.__importDefault || function(_mvf) {
            var _mvg = null;
            return _mvf && _mvf.__esModule ? _mvf : {
                'default': _mvf
            };
        };
        defineModule(_mvb);
        Object.defineProperty(_mvb, '__esModule', {
            'value': true
        }), _mvb.getRaderPrivateEffect = void 0;
        var _mvh = _mvc(74496),
            _mvi = _mve(_mvc(18622));
        _mvb.getRaderPrivateEffect = function(_mvj) {
            var _mvk = null,
                _mvl = new _mvh.SlotItemEffectModel(),
                _mvm = 0,
                _mvn = 0;
            if (569 == _mvj.ship_id || 648 == _mvj.ship_id || 961 == _mvj.ship_id || 951 == _mvj.ship_id) _mvm = 1;
            else {
                if (955 != _mvj.ship_id && 960 != _mvj.ship_id && 956 != _mvj.ship_id && 981 != _mvj.ship_id) return _mvl;
                _mvm = 2, _mvn = 1;
            }
            for (var _mvo = 0, _mvp = 0, _mvq = _mvj.have_slot_ids(); _mvp < _mvq.length; _mvp++) {
                var _mvr = _mvq[_mvp],
                    _mvs = _mvi.default.model.slot.getMst(_mvr),
                    _mvt = _mvs.equipType;
                12 != _mvt && 13 != _mvt || (_mvs.sakuteki >= 5 && _mvj.get_slotnums(parseInt(_mvr)), _mvs.taiku >= 2 && (_mvo += _mvj.get_slotnums(parseInt(_mvr))));
            }
            if (_mvo > 0 && (1 == _mvm ? (_mvl.houg += 1, _mvl.kaih += 3, _mvl.tyku += 2) : 2 == _mvm && (_mvl.tyku += 2, _mvl.kaih += 1)), 0 == _mvn) return _mvl;
            for (var _mvu = [], _mvv = function(_mvw) {
                    var _mvx = null;
                    if (null == _mvj.have_slots_dict[_mvw]) return 'continue';
                    var _mvy = _mvj.get_each_level_nums(_mvw);
                    null == _mvu[_mvw] && (_mvu[_mvw] = []), _mvy.forEach(function(_mvz, _mw0) {
                        var _mw1 = null;
                        for (var _mw2 = 1; _mw2 <= _mvj.SLOT_LEVEL_MAX; _mw2++) null == _mvu[_mvw][_mw2] && (_mvu[_mvw][_mw2] = 0), _mw0 >= _mw2 && (_mvu[_mvw][_mw2] += _mvz);
                    });
                }, _mw3 = 0, _mw4 = [450]; _mw3 < _mw4.length; _mw3++) {
                _mvv(_mw4[_mw3]);
            }
            var _mw5 = null != _mvu[450] ? _mvu[450][4] : 0;
            return 1 == _mvn && _mw5 > 0 && (_mvl.houg += 1, _mvl.houm += 1, _mvl.tyku += 1, _mvl.kaih += 2), _mvl;
        };
    },
    56716: (_mw6, _mw7, _mw8) => {
        'use strict';
        var _mw9 = null;
        defineModule(_mw7);
        Object.defineProperty(_mw7, '__esModule', {
            'value': true
        }), _mw7.getSearchLightEffect = void 0;
        var _mwa = _mw8(74496);
        _mw7.getSearchLightEffect = function(_mwb) {
            var _mwc = null,
                _mwd = new _mwa.SlotItemEffectModel(),
                _mwe = _mwb.get_type3_nums(29);
            return 'ひえい' == _mwb.yomi || 'きりしま' == _mwb.yomi || 'ちょうかい' == _mwb.yomi || 'じんつう' == _mwb.yomi || 'あかつき' == _mwb.yomi ? (_mwd.houg += 4, _mwd.kaih -= 1) : 'あきぐも' == _mwb.yomi ? _mwd.houg = _mwd.houg + 2 * _mwe : 'ゆきかぜ' == _mwb.yomi && (_mwd.houg = _mwd.houg + _mwe, _mwd.tyku = _mwd.tyku + _mwe), 662 != _mwb.ship_id && 663 != _mwb.ship_id && 668 != _mwb.ship_id || (_mwd.raig += 2, _mwd.houg += 4), 'じんつう' == _mwb.yomi && (_mwd.raig += 8, _mwd.houg += 4), _mwd;
        };
    },
    17713: (_mwf, _mwg, _mwh) => {
        'use strict';
        var _mwi = null;
        defineModule(_mwg);
        Object.defineProperty(_mwg, '__esModule', {
            'value': true
        }), _mwg.getSearchLightLargeEffect = void 0;
        var _mwj = _mwh(74496);
        _mwg.getSearchLightLargeEffect = function(_mwk) {
            var _mwl = null,
                _mwm = new _mwj.SlotItemEffectModel();
            'ひえい' == _mwk.yomi || 'きりしま' == _mwk.yomi ? (_mwm.houg += 6, _mwm.kaih -= 2) : 'やまと' != _mwk.yomi && 'むさし' != _mwk.yomi || (_mwm.houg += 4, _mwm.kaih -= 1);
            var _mwn = _mwk.get_slotnums(174);
            return 592 == _mwk.ship_id ? (_mwm.houg += 3, _mwm.raig += 3, _mwn > 0 && (_mwm.raig += 5)) : 694 == _mwk.ship_id && (_mwm.houg += 4, _mwm.raig += 1, _mwn > 0 && (_mwm.raig += 7)), _mwm;
        };
    },
    17213: (_mwo, _mwp, _mwq) => {
        'use strict';
        var _mwr = null;
        defineModule(_mwp);
        Object.defineProperty(_mwp, '__esModule', {
            'value': true
        }), _mwp.getSlot100PersonalEffect = void 0;
        var _mws = _mwq(74496);
        _mwp.getSlot100PersonalEffect = function(_mwt) {
            var _mwu = null,
                _mwv = new _mws.SlotItemEffectModel(),
                _mww = new _mws.SlotItemEffectModel();
            if (553 == _mwt.ship_id) _mww.houg = 4;
            else {
                if (554 != _mwt.ship_id) return 196 == _mwt.ship_id ? (_mwv.houg = 3, _mwv) : 197 == _mwt.ship_id ? (_mwv.houg = 6, _mwv) : _mwv;
                _mww.houg = 4;
            }
            var _mwx = _mwt.get_slotnums(100);
            return _mwv = _mww.multiply(_mwx);
        };
    },
    40176: (_mwy, _mwz, _mx0) => {
        'use strict';
        var _mx1 = null;
        defineModule(_mwz);
        Object.defineProperty(_mwz, '__esModule', {
            'value': true
        }), _mwz.getSlot104PersonalEffect = void 0;
        var _mx2 = _mx0(74496);
        _mwz.getSlot104PersonalEffect = function(_mx3) {
            var _mx4 = null,
                _mx5 = new _mx2.SlotItemEffectModel(),
                _mx6 = new _mx2.SlotItemEffectModel();
            if (149 == _mx3.ship_id || 591 == _mx3.ship_id) _mx6.houg = 2;
            else {
                if (150 == _mx3.ship_id || 592 == _mx3.ship_id) _mx6.houg = 1;
                else {
                    if (152 == _mx3.ship_id || 694 == _mx3.ship_id) _mx6.houg = 1;
                    else {
                        if (151 != _mx3.ship_id && 593 != _mx3.ship_id && 954 != _mx3.ship_id) return _mx5;
                        _mx6.houg = 2, _mx6.tyku = 1, _mx6.kaih = 2;
                    }
                }
            }
            var _mx7 = _mx3.get_slotnums(104);
            return _mx5 = _mx6.multiply(_mx7);
        };
    },
    32889: (_mx8, _mx9, _mxa) => {
        'use strict';
        var _mxb = null;
        defineModule(_mx9);
        Object.defineProperty(_mx9, '__esModule', {
            'value': true
        }), _mx9.getSlot106PersonalEffect = void 0;
        var _mxc = _mxa(74496);
        _mx9.getSlot106PersonalEffect = function(_mxd) {
            var _mxe = null,
                _mxf = new _mxc.SlotItemEffectModel(),
                _mxg = new _mxc.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mxd.ship_id) >= 0 ? (_mxg.houg += 1, _mxg.tyku += 2, _mxg.souk += 1, _mxg.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mxd.yomi) >= 0 ? (_mxg.tyku += 1, _mxg.souk += 1, _mxg.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mxd.yomi) >= 0 && (_mxg.tyku += 2, _mxg.souk += 1, _mxg.kaih += 2, 663 != _mxd.ship_id && 668 != _mxd.ship_id || (_mxf.houg += 1, _mxf.tyku += 1, _mxf.souk += 1, _mxf.kaih += 1), 668 == _mxd.ship_id && (_mxf.tyku += 1, _mxf.kaih += 1)), !_mxg.exists()) return _mxf;
            var _mxh = _mxd.get_slotnums(106) + _mxd.get_slotnums(450);
            return _mxf.add(_mxg.multiply(_mxh)), _mxf;
        };
    },
    15133: (_mxi, _mxj, _mxk) => {
        'use strict';
        var _mxl = null;
        defineModule(_mxj);
        Object.defineProperty(_mxj, '__esModule', {
            'value': true
        }), _mxj.getSlot115PersonalEffect = void 0;
        var _mxm = _mxk(74496);
        _mxj.getSlot115PersonalEffect = function(_mxn) {
            var _mxo = null,
                _mxp = new _mxm.SlotItemEffectModel(),
                _mxq = false,
                _mxr = new _mxm.SlotItemEffectModel(),
                _mxs = 0;
            if (55 != _mxn.ctype && 47 != _mxn.ctype || (_mxr.houg += 2, _mxr.saku += 2, _mxr.kaih += 1, _mxq = true, _mxs = 1), 0 == _mxq) return _mxp;
            var _mxt = _mxn.get_slotnums(115);
            if (_mxp.add(_mxr.multiply(_mxt)), 0 == _mxs) return _mxp;
            var _mxu = _mxn.get_each_level_nums(115)[10];
            return 1 == _mxs && (_mxp.houg += 1 * _mxu, _mxp.kaih += 1 * _mxu), _mxp;
        };
    },
    55747: (_mxv, _mxw, _mxx) => {
        'use strict';
        var _mxy = null;
        defineModule(_mxw);
        Object.defineProperty(_mxw, '__esModule', {
            'value': true
        }), _mxw.getSlot118PersonalEffect = void 0;
        var _mxz = _mxx(74496);
        _mxw.getSlot118PersonalEffect = function(_my0) {
            var _my1 = null,
                _my2 = new _mxz.SlotItemEffectModel(),
                _my3 = false,
                _my4 = new _mxz.SlotItemEffectModel(),
                _my5 = 0;
            if (52 == _my0.ctype && (_my4.houg += 1, _my4.saku += 2, _my4.kaih += 2, _my5 = 1, _my3 = true), 507 == _my0.ship_id && (_my4.houg += 3, _my4.saku += 2, _my4.kaih += 1, _my5 = 2, _my3 = true), 0 == _my3) return _my2;
            var _my6 = _my0.get_slotnums(118) + _my0.get_slotnums(521);
            if (_my2.add(_my4.multiply(_my6)), 0 == _my0.get_slotnums(118)) return _my2;
            if (0 == _my5) return _my2;
            var _my7 = _my0.get_each_level_nums(118),
                _my8 = 0,
                _my9 = 0,
                _mya = 0,
                _myb = _my7[10];
            return _my7.forEach(function(_myc, _myd) {
                _myd >= 2 && (_my8 += _myc), _myd >= 5 && (_my9 += _myc), _myd >= 7 && (_mya += _myc);
            }), 1 == _my5 ? (_my2.houg += 2 * _myb, _my2.saku += 1 * _myb) : 2 == _my5 && (_my2.houm += 1 * _my8, _my2.kaih += 1 * _my9, _my2.houg += 1 * _mya, _my2.houg += 1 * _myb, _my2.raig += 1 * _myb, _my2.tyku += 1 * _myb, _my2.saku += 1 * _myb, _my2.kaih += 1 * _myb), _my2;
        };
    },
    11285: (_mye, _myf, _myg) => {
        'use strict';
        var _myh = null;
        defineModule(_myf);
        Object.defineProperty(_myf, '__esModule', {
            'value': true
        }), _myf.getSlot119PersonalEffect = void 0;
        var _myi = _myg(74496);
        _myf.getSlot119PersonalEffect = function(_myj) {
            var _myk = null,
                _myl = new _myi.SlotItemEffectModel(),
                _mym = new _myi.SlotItemEffectModel();
            34 == _myj.ctype || 56 == _myj.ctype ? _mym.houg += 1 : 90 == _myj.ctype && (_mym.houg += 2, _mym.raig += 1);
            var _myn = true;
            if (_mym.exists() || (_myn = false), 0 == _myn) return _myl;
            var _myo = _myj.get_slotnums(119);
            return _myl = _mym.multiply(_myo);
        };
    },
    96200: (_myp, _myq, _myr) => {
        'use strict';
        var _mys = null;
        defineModule(_myq);
        Object.defineProperty(_myq, '__esModule', {
            'value': true
        }), _myq.getSlot120mm50GroupPersonalEffect = void 0;
        var _myt = _myr(74496);
        _myq.getSlot120mm50GroupPersonalEffect = function(_myu) {
            var _myv = null,
                _myw = new _myt.SlotItemEffectModel(),
                _myx = false,
                _myy = new _myt.SlotItemEffectModel(),
                _myz = _myu.get_slotnums(147),
                _mz0 = _myu.get_slotnums(393),
                _mz1 = _myu.get_slotnums(394),
                _mz2 = new _myt.SlotItemEffectModel(),
                _mz3 = new _myt.SlotItemEffectModel();
            if (61 == _myu.ctype && (_myy.houg += 1, _myy.kaih += 1, _myx = true, _mz0 >= 1 && (_mz2.houg += 1, _mz2.tyku += 1), _mz1 >= 1 && (_mz3.houg += 1, _mz3.tyku += 1, _mz3.kaih += 1, 'グレカーレ' == _myu.yomi && (_mz3.kaih += 1)), 1), 0 == _myx) return _myw;
            var _mz4 = _myz + _mz0 + _mz1;
            _myw.add(_myy.multiply(_mz4)).add(_mz2.multiply(_mz0)).add(_mz3.multiply(_mz1));
            var _mz5 = _myu.get_each_level_over_nums([394]).slot[394];
            return _mz5[7] >= 1 && (_myw.houm += 1 * _mz5[7], 'グレカーレ' == _myu.yomi && (_myw.houg += 1 * _mz5[7])), _mz5[8] >= 1 && (_myw.houg += 1 * _mz5[8]), _mz5[9] >= 1 && (_myw.houm += 1 * _mz5[9]), _mz5[10] >= 1 && (_myw.houg += 1 * _mz5[10], 'グレカーレ' == _myu.yomi && (_myw.kaih += 1 * _mz5[10])), _myw;
        };
    },
    33155: function(_mz6, _mz7, _mz8) {
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
        }), _mz7.getSlot121PersonalEffect = void 0;
        var _mzd = _mz8(74496),
            _mze = _mza(_mz8(18622));
        _mz7.getSlot121PersonalEffect = function(_mzf) {
            var _mzg = null,
                _mzh = new _mzd.SlotItemEffectModel(),
                _mzi = 0,
                _mzj = new _mzd.SlotItemEffectModel(),
                _mzk = false;
            54 == _mzf.ctype && (_mzh.tyku += 4, _mzh.kaih += 2, _mzi = 1), 968 == _mzf.ship_id ? (_mzj.houg += 1, _mzj.tyku += 1, _mzj.kaih += 1, _mzk = true) : 981 == _mzf.ship_id && (_mzj.tyku += 1, _mzj.kaih += 1, _mzk = true, _mzi = 1);
            var _mzl = _mzf.get_slotnums(121);
            if (_mzk && _mzh.add(_mzj.multiply(_mzl)), 0 == _mzi) return _mzh;
            for (var _mzm = 0, _mzn = 0, _mzo = _mzf.have_slot_ids(); _mzn < _mzo.length; _mzn++) {
                var _mzp = _mzo[_mzn],
                    _mzq = _mze.default.model.slot.getMst(_mzp),
                    _mzr = _mzq.equipType;
                12 != _mzr && 13 != _mzr || (_mzq.sakuteki >= 5 && _mzf.get_slotnums(parseInt(_mzp)), _mzq.taiku >= 2 && (_mzm += _mzf.get_slotnums(parseInt(_mzp))));
            }
            return _mzm >= 1 && (_mzh.tyku += 2, _mzh.kaih += 2, 968 == _mzf.ship_id && (_mzh.houg += 1 * _mzl, _mzh.houm += 1 * _mzl)), _mzh;
        };
    },
    9115: function(_mzs, _mzt, _mzu) {
        'use strict';
        var _mzv = null;
        var _mzw = this && this.__importDefault || function(_mzx) {
            var _mzy = null;
            return _mzx && _mzx.__esModule ? _mzx : {
                'default': _mzx
            };
        };
        defineModule(_mzt);
        Object.defineProperty(_mzt, '__esModule', {
            'value': true
        }), _mzt.getSlot122PersonalEffect = void 0;
        var _mzz = _mzu(74496),
            _n00 = _mzw(_mzu(18622));
        _mzt.getSlot122PersonalEffect = function(_n01) {
            var _n02 = null,
                _n03 = new _mzz.SlotItemEffectModel(),
                _n04 = 0,
                _n05 = 0,
                _n06 = false;
            656 == _n01.ship_id && (_n06 = true, _n04 = 1, _n05 = 1);
            var _n07 = 0,
                _n08 = 0,
                _n09 = _n01.get_each_level_nums(122),
                _n0a = 0;
            if (_n06) {
                _n09.forEach(function(_n0b, _n0c) {
                    _n0c >= 4 && (_n0a += _n0b);
                });
                for (var _n0d = 0, _n0e = _n01.have_slot_ids(); _n0d < _n0e.length; _n0d++) {
                    var _n0f = _n0e[_n0d],
                        _n0g = _n00.default.model.slot.getMst(_n0f),
                        _n0h = _n0g.equipType;
                    12 != _n0h && 13 != _n0h || (_n0g.sakuteki >= 5 && (_n07 += _n01.get_slotnums(parseInt(_n0f))), _n0g.taiku >= 2 && (_n08 += _n01.get_slotnums(parseInt(_n0f))));
                }
            }
            return _n0a > 0 && (1 == _n05 && (_n07 > 0 && (_n03.houg += 4, _n03.kaih += 3), _n08 > 0 && (_n03.tyku += 4, _n03.kaih += 3)), 1 == _n04 && (_n03.houg += 5 * _n0a, _n03.tyku += 3 * _n0a, _n03.kaih += 2 * _n0a)), _n03;
        };
    },
    85127: (_n0i, _n0j, _n0k) => {
        'use strict';
        var _n0l = null;
        defineModule(_n0j);
        Object.defineProperty(_n0j, '__esModule', {
            'value': true
        }), _n0j.getSlot123PersonalEffect = void 0;
        var _n0m = _n0k(74496);
        _n0j.getSlot123PersonalEffect = function(_n0n) {
            var _n0o = null,
                _n0p = new _n0m.SlotItemEffectModel(),
                _n0q = (new _n0m.SlotItemEffectModel(), 0),
                _n0r = (_n0n.get_slotnums(123), _n0n.get_slotnums(124));
            if ('ドイツ' != _n0n.getCountryName()) return _n0p;
            _n0q = 1, _n0r >= 1 && (_n0p.kaih += 1 * _n0r);
            var _n0s = _n0n.get_each_level_over_nums([123, 124]),
                _n0t = _n0s.slot[123],
                _n0u = _n0s.slot[124];
            return 1 == _n0q && (_n0t[5] >= 1 && (_n0p.houg += 1 * _n0t[5]), _n0t[7] >= 1 && (_n0p.houm += 1 * _n0t[7]), _n0t[9] >= 1 && (_n0p.houg += 1 * _n0t[9]), _n0t[10] >= 1 && (_n0p.houm += 1 * _n0t[10]), _n0u[8] >= 1 && (_n0p.kaih += 1 * _n0u[8]), _n0u[10] >= 1 && (_n0p.houm += 1 * _n0u[10])), _n0p;
        };
    },
    87204: (_n0v, _n0w, _n0x) => {
        'use strict';
        var _n0y = null;
        defineModule(_n0w);
        Object.defineProperty(_n0w, '__esModule', {
            'value': true
        }), _n0w.getSlot124PersonalEffect = void 0;
        var _n0z = _n0x(74496);
        _n0w.getSlot124PersonalEffect = function(_n10) {
            var _n11 = null,
                _n12 = new _n0z.SlotItemEffectModel(),
                _n13 = (new _n0z.SlotItemEffectModel(), 0),
                _n14 = _n10.getCountryName();
            if ('ドイツ' == _n14) _n13 = 1;
            else {
                if ('イタリア' != _n14) return _n12;
                _n13 = 2;
            }
            var _n15 = _n10.get_each_level_over_nums([124]).slot[124];
            return 1 == _n13 ? (_n15[7] >= 1 && (_n12.houm += 1 * _n15[7]), _n15[8] >= 1 && (_n12.houg += 1 * _n15[8]), _n15[9] >= 1 && (_n12.tyku += 1 * _n15[9]), _n15[10] >= 1 && (_n12.houm += 1 * _n15[10])) : 2 == _n13 && (_n15[8] >= 1 && (_n12.houm += 1 * _n15[8]), _n15[9] >= 1 && (_n12.tyku += 1 * _n15[9]), _n15[10] >= 1 && (_n12.houg += 1 * _n15[10])), _n12;
        };
    },
    37173: (_n16, _n17, _n18) => {
        'use strict';
        var _n19 = null;
        defineModule(_n17);
        Object.defineProperty(_n17, '__esModule', {
            'value': true
        }), _n17.getSlot129PersonalEffect = void 0;
        var _n1a = _n18(74496);
        _n17.getSlot129PersonalEffect = function(_n1b) {
            var _n1c = null,
                _n1d = new _n1a.SlotItemEffectModel(),
                _n1e = false,
                _n1f = new _n1a.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_n1b.ctype) >= 0 ? (_n1f.houg = 1, _n1f.raig = 2, _n1f.kaih = 2, _n1f.tais = 2, _n1f.saku = 1, _n1e = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_n1b.ctype) >= 0 ? (_n1f.houg = 1, _n1f.raig = 2, _n1f.kaih = 2, _n1f.saku = 3, _n1e = true) : [7, 13, 29, 8, 9, 31].indexOf(_n1b.ctype) >= 0 && (_n1f.houg = 1, _n1f.kaih = 2, _n1f.saku = 3, _n1e = true), 0 == _n1e) return _n1d;
            var _n1g = _n1b.get_slotnums(129);
            return _n1d = _n1f.multiply(_n1g);
        };
    },
    73254: (_n1h, _n1i, _n1j) => {
        'use strict';
        var _n1k = null;
        defineModule(_n1i);
        Object.defineProperty(_n1i, '__esModule', {
            'value': true
        }), _n1i.getSlot12PersonalEffect = void 0;
        var _n1l = _n1j(74496);
        _n1i.getSlot12PersonalEffect = function(_n1m) {
            var _n1n = null,
                _n1o = new _n1l.SlotItemEffectModel(),
                _n1p = false,
                _n1q = new _n1l.SlotItemEffectModel(),
                _n1r = _n1m.get_slotnums(142) + _n1m.get_slotnums(460);
            if (37 == _n1m.ctype && (_n1q.houg += 1, _n1q.kaih += 1, _n1q.houm += 1, _n1r >= 1 && (_n1o.kaih += 1, _n1o.houm += 1), _n1p = true), 0 == _n1p) return _n1o;
            var _n1s = _n1m.get_slotnums(12);
            return _n1o.add(_n1q.multiply(_n1s)), _n1o;
        };
    },
    41410: (_n1t, _n1u, _n1v) => {
        'use strict';
        var _n1w = null;
        defineModule(_n1u);
        Object.defineProperty(_n1u, '__esModule', {
            'value': true
        }), _n1u.getSlot130PersonalEffect = void 0;
        var _n1x = _n1v(74496);
        _n1u.getSlot130PersonalEffect = function(_n1y) {
            var _n1z = null,
                _n20 = new _n1x.SlotItemEffectModel(),
                _n21 = _n1y.have_level_num_over_dict[130];
            return null == _n21 || (428 == _n1y.ship_id ? (_n21[1] >= 1 && (_n20.tyku += 1 * _n21[1]), _n21[3] >= 1 && (_n20.kaih += 1 * _n21[3]), _n21[5] >= 1 && (_n20.houm += 1 * _n21[5]), _n21[7] >= 1 && (_n20.tyku += 1 * _n21[7]), _n21[8] >= 1 && (_n20.kaih += 1 * _n21[8]), _n21[9] >= 1 && (_n20.tyku += 1 * _n21[9]), _n21[10] >= 1 && (_n20.houg += 1 * _n21[10])) : 141 == _n1y.ship_id && (_n21[2] >= 1 && (_n20.tyku += 1 * _n21[2]), _n21[4] >= 1 && (_n20.kaih += 1 * _n21[4]), _n21[6] >= 1 && (_n20.houm += 1 * _n21[6]), _n21[8] >= 1 && (_n20.tyku += 1 * _n21[8]), _n21[10] >= 1 && (_n20.kaih += 1 * _n21[10])), 1 == _n1y.stype && (_n21[3] >= 1 && (_n20.tyku += 1 * _n21[3]), _n21[6] >= 1 && (_n20.kaih += 1 * _n21[6]), _n21[9] >= 1 && (_n20.tyku += 1 * _n21[9]), _n21[10] >= 1 && (_n20.kaih += 1 * _n21[10]))), _n20;
        };
    },
    93373: (_n22, _n23, _n24) => {
        'use strict';
        var _n25 = null;
        defineModule(_n23);
        Object.defineProperty(_n23, '__esModule', {
            'value': true
        }), _n23.getSlot132PersonalEffect = void 0;
        var _n26 = _n24(74496);
        _n23.getSlot132PersonalEffect = function(_n27) {
            var _n28 = null,
                _n29 = new _n26.SlotItemEffectModel(),
                _n2a = _n27.get_each_level_nums(132),
                _n2b = 0,
                _n2c = 0,
                _n2d = 0,
                _n2e = 0,
                _n2f = 0;
            return _n2a.forEach(function(_n2g, _n2h) {
                _n2h >= 3 && (_n2b += _n2g), _n2h >= 5 && (_n2c += _n2g), _n2h >= 7 && (_n2d += _n2g), _n2h >= 8 && (_n2e += _n2g), _n2h >= 9 && (_n2f += _n2g);
            }), _n2b >= 1 && (_n29.kaih += 1), _n2c >= 1 && (_n29.tais += 1), _n2d >= 1 && (_n29.kaih += 1), _n2e >= 1 && (_n29.tais += 1), _n2f >= 1 && (_n29.houm += 1), _n2a[10] >= 1 && (_n29.tais += 1), 911 != _n27.ship_id && 916 != _n27.ship_id && 546 != _n27.ship_id || (_n29.kaih += 1), 461 != _n27.ship_id && 466 != _n27.ship_id && 462 != _n27.ship_id && 467 != _n27.ship_id && 156 != _n27.ship_id || (_n29.kaih += 2), _n29;
        };
    },
    88838: (_n2i, _n2j, _n2k) => {
        'use strict';
        var _n2l = null;
        defineModule(_n2j);
        Object.defineProperty(_n2j, '__esModule', {
            'value': true
        }), _n2j.getSlot136PersonalEffect = void 0;
        var _n2m = _n2k(74496);
        _n2j.getSlot136PersonalEffect = function(_n2n) {
            var _n2o = null,
                _n2p = new _n2m.SlotItemEffectModel(),
                _n2q = 0;
            if (58 != _n2n.ctype && 61 != _n2n.ctype && 64 != _n2n.ctype && 68 != _n2n.ctype && 80 != _n2n.ctype && 92 != _n2n.ctype && 113 != _n2n.ctype && 124 != _n2n.ctype || (_n2p.souk += 2, _n2p.kaih += 1, _n2q = 1), 879 == _n2n.ship_id && (_n2p.souk += 1, _n2p.kaih += 1), 0 == _n2q) return _n2p;
            var _n2r = _n2n.get_each_level_nums(136),
                _n2s = 0,
                _n2t = 0,
                _n2u = _n2r[10];
            return _n2q > 0 && _n2r.forEach(function(_n2v, _n2w) {
                _n2w >= 3 && (_n2s += _n2v), _n2w >= 6 && (_n2t += _n2v);
            }), 1 == _n2q && (_n2s >= 1 && (_n2p.souk += 1 * _n2s), _n2t >= 1 && (_n2p.souk += 1 * _n2t), _n2u >= 1 && (_n2p.souk += 1 * _n2u)), _n2p;
        };
    },
    17274: (_n2x, _n2y, _n2z) => {
        'use strict';
        var _n30 = null;
        defineModule(_n2y);
        Object.defineProperty(_n2y, '__esModule', {
            'value': true
        }), _n2y.getSlot139PersonalEffect = void 0;
        var _n31 = _n2z(74496);
        _n2y.getSlot139PersonalEffect = function(_n32) {
            var _n33 = null,
                _n34 = new _n31.SlotItemEffectModel(),
                _n35 = false,
                _n36 = new _n31.SlotItemEffectModel();
            if (662 != _n32.ship_id && 663 != _n32.ship_id && 668 != _n32.ship_id || (_n36.houg += 2, _n36.tyku += 1, _n35 = true), 0 == _n35) return _n34;
            var _n37 = _n32.get_slotnums(139);
            return _n34.add(_n36.multiply(_n37)), _n34;
        };
    },
    6482: (_n38, _n39, _n3a) => {
        'use strict';
        var _n3b = null;
        defineModule(_n39);
        Object.defineProperty(_n39, '__esModule', {
            'value': true
        }), _n39.getSlot13_8cmRensouhouPersonalEffect = void 0;
        var _n3c = _n3a(74496);
        _n39.getSlot13_8cmRensouhouPersonalEffect = function(_n3d) {
            var _n3e = null,
                _n3f = new _n3c.SlotItemEffectModel(),
                _n3g = false,
                _n3h = new _n3c.SlotItemEffectModel(),
                _n3i = 0,
                _n3j = _n3d.getCountryName(),
                _n3k = _n3d.get_slotnums(534),
                _n3l = _n3d.get_slotnums(535);
            if ('フランス' == _n3j && (_n3h.houg += 2, _n3h.houm += 1, 129 == _n3d.ctype && (_n3h.houm += 1), 967 == _n3d.ship_id && _n3l >= 1 && (_n3h.houg += 1), _n3g = true, _n3i = 1), 0 == _n3g) return _n3f;
            var _n3m = _n3k + _n3l;
            if (_n3f.add(_n3h.multiply(_n3m)), 0 == _n3i) return _n3f;
            _n3d.haveSlotLevelNumOver(534);
            var _n3n = _n3d.haveSlotLevelNumOver(535),
                _n3o = _n3d.getTotalCountWithOverLeveledItem([534, 535]);
            return 1 == _n3i && (_n3o[2] >= 1 && (_n3f.houm += 1 * _n3o[2]), _n3o[4] >= 1 && (_n3f.houg += 1 * _n3o[4]), _n3o[6] >= 1 && (_n3f.houm += 1 * _n3o[6]), _n3n[7] >= 1 && (_n3f.houg += 1 * _n3n[7]), _n3o[8] >= 1 && (_n3f.houg += 1 * _n3o[8]), _n3n[9] >= 1 && (_n3f.houm += 1 * _n3n[9]), _n3o[10] >= 1 && (_n3f.houg += 1 * _n3o[10])), _n3f;
        };
    },
    21713: (_n3p, _n3q, _n3r) => {
        'use strict';
        var _n3s = null;
        defineModule(_n3q);
        Object.defineProperty(_n3q, '__esModule', {
            'value': true
        }), _n3q.getSlot143PersonalEffect = void 0;
        var _n3t = _n3r(74496);
        _n3q.getSlot143PersonalEffect = function(_n3u) {
            var _n3v = null,
                _n3w = new _n3t.SlotItemEffectModel();
            return 'あかぎ' == _n3u.yomi ? _n3w.houg = 3 : 'かが' == _n3u.yomi || 'しょうかく' == _n3u.yomi ? _n3w.houg = 2 : ('ずいかく' == _n3u.yomi || 'りゅうじょう' == _n3u.yomi) && (_n3w.houg = 1), _n3w;
        };
    },
    59823: (_n3x, _n3y, _n3z) => {
        'use strict';
        var _n40 = null;
        defineModule(_n3y);
        Object.defineProperty(_n3y, '__esModule', {
            'value': true
        }), _n3y.getSlot144PersonalEffect = void 0;
        var _n41 = _n3z(74496);
        _n3y.getSlot144PersonalEffect = function(_n42) {
            var _n43 = null,
                _n44 = new _n41.SlotItemEffectModel();
            return 'あかぎ' == _n42.yomi ? _n44.houg = 3 : 'かが' == _n42.yomi ? _n44.houg = 2 : 'しょうかく' == _n42.yomi ? (_n44.houg = 2, 461 != _n42.ship_id && 466 != _n42.ship_id || (_n44.houg += 2)) : 'ずいかく' == _n42.yomi ? (_n44.houg = 1, 462 != _n42.ship_id && 467 != _n42.ship_id || (_n44.houg += 1)) : 'りゅうじょう' == _n42.yomi && (_n44.houg = 1), _n44;
        };
    },
    57440: (_n45, _n46, _n47) => {
        'use strict';
        var _n48 = null;
        defineModule(_n46);
        Object.defineProperty(_n46, '__esModule', {
            'value': true
        }), _n46.getSlot149PersonalEffect = void 0;
        var _n49 = _n47(74496);
        _n46.getSlot149PersonalEffect = function(_n4a) {
            var _n4b = null,
                _n4c = new _n49.SlotItemEffectModel(),
                _n4d = new _n49.SlotItemEffectModel(),
                _n4e = false;
            return 488 == _n4a.ship_id || 141 == _n4a.ship_id || 160 == _n4a.ship_id || 622 == _n4a.ship_id || 623 == _n4a.ship_id || 656 == _n4a.ship_id || 961 == _n4a.ship_id ? (_n4d.tais = 1, _n4d.kaih = 3, _n4e = true) : 624 == _n4a.ship_id ? (_n4d.tais = 3, _n4d.kaih = 5, _n4e = true) : 662 == _n4a.ship_id && (_n4d.tais = 2, _n4d.kaih = 4, _n4e = true), 54 == _n4a.ctype && (_n4d.tais = 1, _n4d.kaih = 2, _n4e = true), 0 == _n4e ? _n4c : _n4c = _n4d.multiply(1);
        };
    },
    29493: (_n4f, _n4g, _n4h) => {
        'use strict';
        var _n4i = null;
        defineModule(_n4g);
        Object.defineProperty(_n4g, '__esModule', {
            'value': true
        }), _n4g.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _n4j = _n4h(74496);
        _n4g.getSlot14inch45CaliberGunPersonalEffect = function(_n4k) {
            var _n4l = null,
                _n4m, _n4n, _n4o, _n4p = new _n4j.SlotItemEffectModel(),
                _n4q = false,
                _n4r = new _n4j.SlotItemEffectModel(),
                _n4s = {
                    507: 507,
                    508: 507
                },
                _n4t = _n4k.get_slotnums(507),
                _n4u = _n4k.get_slotnums(508),
                _n4v = _n4t + _n4u,
                _n4w = _n4k.getCountryName(),
                _n4x = _n4k.getUSSWaterRaderDict();
            if (125 == _n4k.ctype && (_n4r.houg += 1, _n4r.kaih += 1, _n4r.houm += 1, _n4q = true, _n4t >= 1 && _n4u >= 1 && (_n4p.houg += 1, _n4p.houm += 1)), 'アメリカ' == _n4w && _n4k.stype >= 8 && _n4k.stype <= 10) {
                _n4r.houg += 2, _n4r.kaih += 1, _n4r.houm += 1, _n4q = true;
                for (var _n4y = 0, _n4z = 0, _n50 = _n4k.have_slot_ids(); _n4z < _n50.length; _n4z++) {
                    var _n51 = _n50[_n4z];
                    _n4x[Number(_n51)] && (_n4y += _n4k.get_slotnums(parseInt(_n51)));
                }
                _n4y >= 1 && (_n4p.houg += 1, _n4p.kaih += 1, _n4p.houm += 2), _n4t >= 1 && _n4u >= 1 && (_n4p.houg += 1, _n4p.houm += 1, _n4p.kaih += 2);
            }
            else 6 != _n4k.ctype && 26 != _n4k.ctype && 2 != _n4k.ctype && 'イギリス' != _n4w || (_n4p.kaih += 1, _n4p.houm += 1, _n4t >= 1 && _n4u >= 1 && (_n4p.houg += 1, _n4p.houm += 1, _n4p.kaih += 1));
            _n4q && _n4p.add(_n4r.multiply(_n4v));
            for (var _n52 = {}, _n53 = {}, _n54 = {}, _n55 = function(_n56) {
                    var _n57 = null,
                        _n58 = Number(_n56),
                        _n59 = _n4s[_n58];
                    _n52[_n59] = null !== (_n4m = _n52[_n59]) && void 0 !== _n4m ? _n4m : 0, _n53[_n59] = null !== (_n4n = _n53[_n59]) && void 0 !== _n4n ? _n4n : 0, _n54[_n59] = null !== (_n4o = _n54[_n59]) && void 0 !== _n4o ? _n4o : 0, _n4k.get_each_level_nums(_n58).forEach(function(_n5a, _n5b) {
                        _n5b >= 3 && (_n52[_n59] += _n5a), _n5b >= 6 && (_n53[_n59] += _n5a), _n5b >= 9 && (_n54[_n59] += _n5a);
                    });
                }, _n5c = 0, _n5d = Object.keys(_n4s); _n5c < _n5d.length; _n5c++) {
                _n55(_n5d[_n5c]);
            }
            return _n52[507] >= 1 && (_n4p.houg += 1 * _n52[507]), _n53[507] >= 1 && (_n4p.souk += 1 * _n53[507]), _n54[507] >= 1 && (_n4p.houm += 1 * _n54[507]), _n4p;
        };
    },
    66985: (_n5e, _n5f, _n5g) => {
        'use strict';
        var _n5h = null;
        defineModule(_n5f);
        Object.defineProperty(_n5f, '__esModule', {
            'value': true
        }), _n5f.getSlot15PersonalEffect = void 0;
        var _n5i = _n5g(74496);
        _n5f.getSlot15PersonalEffect = function(_n5j) {
            var _n5k = null,
                _n5l = new _n5i.SlotItemEffectModel(),
                _n5m = false;
            if ((566 == _n5j.ship_id || 567 == _n5j.ship_id || 568 == _n5j.ship_id || 648 == _n5j.ship_id || 651 == _n5j.ship_id || 656 == _n5j.ship_id || 670 == _n5j.ship_id || 915 == _n5j.ship_id || 951 == _n5j.ship_id || 'たけ' == _n5j.yomi) && (_n5m = true), 0 == _n5m) return _n5l;
            var _n5n = _n5j.get_slotnums(15);
            return 30 == _n5j.ctype && (1 == _n5n ? _n5l.raig = 2 : _n5n >= 2 && (_n5l.raig = 4)), 'たけ' == _n5j.yomi && (_n5l.raig += 5, _n5l.kaih += 1), _n5l;
        };
    },
    70332: (_n5o, _n5p, _n5q) => {
        'use strict';
        var _n5r = null;
        defineModule(_n5p);
        Object.defineProperty(_n5p, '__esModule', {
            'value': true
        }), _n5p.getSlot15_2cmSanrensouSyuhouPersonalEffect = void 0;
        var _n5s = _n5q(74496);
        _n5p.getSlot15_2cmSanrensouSyuhouPersonalEffect = function(_n5t) {
            var _n5u = null,
                _n5v = new _n5s.SlotItemEffectModel(),
                _n5w = false,
                _n5x = new _n5s.SlotItemEffectModel(),
                _n5y = 0,
                _n5z = _n5t.getCountryName(),
                _n60 = _n5t.get_slotnums(536),
                _n61 = _n5t.get_slotnums(537);
            if ('フランス' == _n5z && (_n5x.houg += 2, _n5x.houm += 1, 128 == _n5t.ctype && (_n5x.houm += 1), 970 == _n5t.ship_id && _n61 >= 1 && (_n5x.houg += 1, _n5x.kaih += 2, _n5x.houm += 1), _n5w = true, _n5y = 1), 0 == _n5w) return _n5v;
            var _n62 = _n60 + _n61;
            if (_n5v.add(_n5x.multiply(_n62)), 0 == _n5y) return _n5v;
            _n5t.haveSlotLevelNumOver(536);
            var _n63 = _n5t.haveSlotLevelNumOver(537),
                _n64 = _n5t.getTotalCountWithOverLeveledItem([536, 537]),
                _n65 = _n5t.get_slotnums(471) + _n5t.get_slotnums(538),
                _n66 = _n5t.haveSlotLevelNumOver(538);
            return 1 == _n5y && (_n64[3] >= 1 && (_n5v.houm += 1 * _n64[3]), _n64[4] >= 1 && (_n5v.houg += 1 * _n64[4]), _n63[5] >= 1 && (_n5v.kaih += 1 * _n63[5]), _n64[6] >= 1 && (_n5v.houm += 1 * _n64[6]), _n64[7] >= 1 && (_n5v.houg += 1 * _n64[7]), _n63[8] >= 1 && (_n5v.kaih += 1 * _n63[8]), _n64[9] >= 1 && (_n5v.houm += 1 * _n64[9]), _n64[10] >= 1 && (_n5v.houg += 1 * _n64[10]), _n64[1] >= 1 && (_n65 >= 1 && (970 == _n5t.ship_id && (_n5v.kaih += 1 * _n65), _n5v.houm += 1 * _n65), _n66[7] >= 1 && (_n5v.kaih += 1 * _n66[7]), _n66[9] >= 1 && (_n5v.houm += 1 * _n66[9]))), _n5v;
        };
    },
    79086: (_n67, _n68, _n69) => {
        'use strict';
        var _n6a = null;
        defineModule(_n68);
        Object.defineProperty(_n68, '__esModule', {
            'value': true
        }), _n68.getSlot165_216PersonalEffect = void 0;
        var _n6b = _n69(74496);
        _n68.getSlot165_216PersonalEffect = function(_n6c) {
            var _n6d = null,
                _n6e = new _n6b.SlotItemEffectModel();
            return 501 != _n6c.ship_id && 506 != _n6c.ship_id && 502 != _n6c.ship_id && 507 != _n6c.ship_id || (_n6e.tyku += 2, _n6e.kaih += 2), _n6e;
        };
    },
    88102: (_n6f, _n6g, _n6h) => {
        'use strict';
        var _n6i = null;
        defineModule(_n6g);
        Object.defineProperty(_n6g, '__esModule', {
            'value': true
        }), _n6g.getSlot16M1PersonalEffect = void 0;
        var _n6j = _n6h(74496);
        _n6g.getSlot16M1PersonalEffect = function(_n6k) {
            var _n6l = null,
                _n6m = new _n6j.SlotItemEffectModel(),
                _n6n = new _n6j.SlotItemEffectModel();
            67 == _n6k.ctype || 78 == _n6k.ctype || 82 == _n6k.ctype || 88 == _n6k.ctype || 108 == _n6k.ctype || 112 == _n6k.ctype ? (_n6n.houg += 2, _n6n.souk += 1, 67 == _n6k.ctype && (_n6n.kaih -= 2)) : 149 == _n6k.ship_id || 150 == _n6k.ship_id || 151 == _n6k.ship_id || 152 == _n6k.ship_id ? (_n6n.houg += 1, _n6n.souk += 1, _n6n.kaih -= 3) : 591 == _n6k.ship_id || 592 == _n6k.ship_id || 694 == _n6k.ship_id ? (_n6n.houg += 2, _n6n.souk += 1, _n6n.kaih -= 2) : 593 != _n6k.ship_id && 954 != _n6k.ship_id || (_n6n.houg += 1, _n6n.souk += 1, _n6n.kaih -= 1);
            var _n6o = true;
            if (_n6n.exists() || (_n6o = false), 0 == _n6o) return _n6m;
            var _n6p = _n6k.get_slotnums(298) + _n6k.get_slotnums(299) + _n6k.get_slotnums(300);
            return _n6m = _n6n.multiply(_n6p);
        };
    },
    29240: (_n6q, _n6r, _n6s) => {
        'use strict';
        var _n6t = null;
        defineModule(_n6r);
        Object.defineProperty(_n6r, '__esModule', {
            'value': true
        }), _n6r.getSlot171PersonalEffect = void 0;
        var _n6u = _n6s(74496);
        _n6r.getSlot171PersonalEffect = function(_n6v) {
            var _n6w = null,
                _n6x = new _n6u.SlotItemEffectModel(),
                _n6y = 0;
            'アメリカ' == _n6v.getCountryName() && (_n6y = 1), 65 != _n6v.ctype && 93 != _n6v.ctype && 102 != _n6v.ctype && 107 != _n6v.ctype && 125 != _n6v.ctype || (_n6x.houg += 1, _n6x.saku += 1, _n6y = 2);
            var _n6z = _n6v.get_each_level_nums(171),
                _n70 = 0,
                _n71 = 0,
                _n72 = 0;
            return _n6y > 0 && (_n6z.map(function(_n73, _n74) {
                _n74 >= 5 && (_n70 += _n73), _n74 >= 3 && (_n71 += _n73), _n74 >= 8 && (_n72 += _n73);
            }), 1 != _n6y && 2 != _n6y || (_n6z[10] > 0 && (_n6x.houg += 1), _n70 > 0 && (_n6x.kaih += 1)), 2 == _n6y && (_n71 > 0 && (_n6x.saku += 1), _n72 > 0 && (_n6x.saku += 1))), _n6x;
        };
    },
    40885: (_n75, _n76, _n77) => {
        'use strict';
        var _n78 = null;
        defineModule(_n76);
        Object.defineProperty(_n76, '__esModule', {
            'value': true
        }), _n76.getSlot174PersonalEffect = void 0;
        var _n79 = _n77(74496);
        _n76.getSlot174PersonalEffect = function(_n7a) {
            var _n7b = null,
                _n7c = new _n79.SlotItemEffectModel(),
                _n7d = new _n79.SlotItemEffectModel();
            if (66 == _n7a.ctype && (_n7d.raig = 1, _n7d.kaih = 2), 591 == _n7a.ship_id || 592 == _n7a.ship_id || 954 == _n7a.ship_id || 694 == _n7a.ship_id ? (_n7d.raig += 6, _n7d.kaih += 3) : 593 == _n7a.ship_id ? (_n7d.raig += 5, _n7d.kaih += 2) : 488 != _n7a.ship_id && 622 != _n7a.ship_id && 623 != _n7a.ship_id && 624 != _n7a.ship_id || (_n7d.houg += 2, _n7d.raig += 4, _n7d.kaih += 4), !_n7d.exists()) return _n7c;
            var _n7e = _n7a.get_slotnums(174);
            return _n7c = _n7d.multiply(_n7e);
        };
    },
    19614: (_n7f, _n7g, _n7h) => {
        'use strict';
        var _n7i = null;
        defineModule(_n7g);
        Object.defineProperty(_n7g, '__esModule', {
            'value': true
        }), _n7g.getSlot179PersonalEffect = void 0;
        var _n7j = _n7h(74496);
        _n7g.getSlot179PersonalEffect = function(_n7k) {
            var _n7l = null,
                _n7m = new _n7j.SlotItemEffectModel(),
                _n7n = new _n7j.SlotItemEffectModel();
            if (54 == _n7k.ctype && (_n7n.raig = 1), !_n7n.exists()) return _n7m;
            var _n7o = _n7k.get_slotnums(179);
            return _n7m = _n7n.multiply(_n7o);
        };
    },
    87220: (_n7p, _n7q, _n7r) => {
        'use strict';
        var _n7s = null;
        defineModule(_n7q);
        Object.defineProperty(_n7q, '__esModule', {
            'value': true
        }), _n7q.getSlot184PersonalEffect = void 0;
        var _n7t = _n7r(74496);
        _n7q.getSlot184PersonalEffect = function(_n7u) {
            var _n7v = null,
                _n7w = new _n7t.SlotItemEffectModel(),
                _n7x = new _n7t.SlotItemEffectModel();
            if (68 == _n7u.ctype && (_n7x.houg += 1, _n7x.tyku += 2, _n7x.kaih += 3), !_n7x.exists()) return _n7w;
            var _n7y = _n7u.get_slotnums(184);
            return _n7w = _n7x.multiply(_n7y);
        };
    },
    81367: (_n7z, _n80, _n81) => {
        'use strict';
        var _n82 = null;
        defineModule(_n80);
        Object.defineProperty(_n80, '__esModule', {
            'value': true
        }), _n80.getSlot188PersonalEffect = void 0;
        var _n83 = _n81(74496);
        _n80.getSlot188PersonalEffect = function(_n84) {
            var _n85 = null,
                _n86 = new _n83.SlotItemEffectModel(),
                _n87 = new _n83.SlotItemEffectModel();
            if (68 == _n84.ctype && (_n87.houg += 3, _n87.tyku += 1, _n87.kaih += 1), !_n87.exists()) return _n86;
            var _n88 = _n84.get_slotnums(188);
            return _n86 = _n87.multiply(_n88);
        };
    },
    13052: (_n89, _n8a, _n8b) => {
        'use strict';
        var _n8c = null;
        defineModule(_n8a);
        Object.defineProperty(_n8a, '__esModule', {
            'value': true
        }), _n8a.getSlot189PersonalEffect = void 0;
        var _n8d = _n8b(74496);
        _n8a.getSlot189PersonalEffect = function(_n8e) {
            var _n8f = null,
                _n8g = new _n8d.SlotItemEffectModel(),
                _n8h = new _n8d.SlotItemEffectModel();
            if (68 != _n8e.ctype && 63 != _n8e.ctype || (_n8h.tyku += 1, _n8h.kaih += 2), !_n8h.exists()) return _n8g;
            var _n8i = _n8e.get_slotnums(189);
            return _n8g = _n8h.multiply(_n8i);
        };
    },
    66904: (_n8j, _n8k, _n8l) => {
        'use strict';
        var _n8m = null;
        defineModule(_n8k);
        Object.defineProperty(_n8k, '__esModule', {
            'value': true
        }), _n8k.getSlot18_52_PersonalEffect = void 0;
        var _n8n = _n8l(74496);
        _n8k.getSlot18_52_PersonalEffect = function(_n8o) {
            var _n8p = null,
                _n8q = new _n8n.SlotItemEffectModel(),
                _n8r = new _n8n.SlotItemEffectModel();
            if (277 == _n8o.ship_id || 278 == _n8o.ship_id || 156 == _n8o.ship_id ? _n8r.houg = 1 : 594 == _n8o.ship_id || 698 == _n8o.ship_id || 646 == _n8o.ship_id ? (_n8r.houg = 1, _n8r.kaih = 1) : 599 != _n8o.ship_id && 610 != _n8o.ship_id || (_n8r.houg = 2, _n8r.kaih = 1), !_n8r.exists()) return _n8q;
            var _n8s = _n8o.get_slotnums(18) + _n8o.get_slotnums(52);
            return _n8q = _n8r.multiply(_n8s);
        };
    },
    94968: (_n8t, _n8u, _n8v) => {
        'use strict';
        var _n8w = null;
        defineModule(_n8u);
        Object.defineProperty(_n8u, '__esModule', {
            'value': true
        }), _n8u.getSlot194PersonalEffect = void 0;
        var _n8x = _n8v(74496);
        _n8u.getSlot194PersonalEffect = function(_n8y) {
            var _n8z = null,
                _n90 = new _n8x.SlotItemEffectModel(),
                _n91 = new _n8x.SlotItemEffectModel();
            if (70 == _n8y.ctype ? (_n91.houg += 3, _n91.kaih += 2, _n91.saku += 2) : 72 != _n8y.ctype && 62 != _n8y.ctype || (_n91.kaih += 1, _n91.saku += 2), 392 != _n8y.ship_id && 969 != _n8y.ship_id || (_n91.houg += 1, _n91.kaih += 2, _n91.saku += 2), !_n91.exists()) return _n90;
            var _n92 = _n8y.get_slotnums(194);
            return _n90 = _n91.multiply(_n92);
        };
    },
    94781: (_n93, _n94, _n95) => {
        'use strict';
        var _n96 = null;
        defineModule(_n94);
        Object.defineProperty(_n94, '__esModule', {
            'value': true
        }), _n94.getSlot195PersonalEffect = void 0;
        var _n97 = _n95(74496);
        _n94.getSlot195PersonalEffect = function(_n98) {
            var _n99 = null,
                _n9a = new _n97.SlotItemEffectModel(),
                _n9b = false,
                _n9c = new _n97.SlotItemEffectModel();
            if ('アメリカ' == _n98.getCountryName() && (_n9c.houg += 1, _n9b = true), 0 == _n9b) return _n9a;
            var _n9d = _n98.get_slotnums(195);
            return _n9a.add(_n9c.multiply(_n9d));
        };
    },
    98137: (_n9e, _n9f, _n9g) => {
        'use strict';
        var _n9h = null;
        defineModule(_n9f);
        Object.defineProperty(_n9f, '__esModule', {
            'value': true
        }), _n9f.getSlot19PersonalEffect = void 0;
        var _n9i = _n9g(74496);
        _n9f.getSlot19PersonalEffect = function(_n9j) {
            var _n9k = null,
                _n9l = new _n9i.SlotItemEffectModel(),
                _n9m = new _n9i.SlotItemEffectModel();
            if ('ほうしょう' == _n9j.yomi && (_n9m.houg = 2, _n9m.kaih = 2, _n9m.tais = 2, _n9m.tyku = 2), 75 != _n9j.ctype && 76 != _n9j.ctype || (_n9m.houg = 2, _n9m.tais = 3), 7 == _n9j.stype && (_n9m.tyku += 1, _n9m.kaih += 1), 894 != _n9j.ship_id && 899 != _n9j.ship_id || (_n9m.houg += 1, _n9m.kaih += 1, _n9m.tais += 1, _n9m.tyku += 1), !_n9m.exists()) return _n9l;
            var _n9n = _n9j.get_slotnums(19);
            return _n9l = _n9m.multiply(_n9n);
        };
    },
    48658: (_n9o, _n9p, _n9q) => {
        'use strict';
        var _n9r = null;
        defineModule(_n9p);
        Object.defineProperty(_n9p, '__esModule', {
            'value': true
        }), _n9p.getSlot204PersonalEffect = void 0;
        var _n9s = _n9q(74496);
        _n9p.getSlot204PersonalEffect = function(_n9t) {
            var _n9u = null,
                _n9v = new _n9s.SlotItemEffectModel();
            if (591 != _n9t.ship_id && 592 != _n9t.ship_id && 593 != _n9t.ship_id && 954 != _n9t.ship_id && 694 != _n9t.ship_id) return _n9v;
            _n9v.souk = _n9v.souk + 1, _n9v.raig = _n9v.raig + 1;
            for (var _n9w = _n9t.get_each_level_nums(204), _n9x = 0, _n9y = 0; _n9y <= 10; _n9y++) _n9y >= 7 && (_n9x += _n9w[_n9y]);
            return _n9x > 0 && (_n9v.souk = _n9v.souk + 1, 694 == _n9t.ship_id && (_n9v.souk += 1)), _n9w[10] > 0 && (_n9v.raig = _n9v.raig + 1, 694 == _n9t.ship_id && (_n9v.raig += 1)), _n9v;
        };
    },
    2306: (_n9z, _na0, _na1) => {
        'use strict';
        var _na2 = null;
        defineModule(_na0);
        Object.defineProperty(_na0, '__esModule', {
            'value': true
        }), _na0.getSlot217PersonalEffect = void 0;
        var _na3 = _na1(74496);
        _na0.getSlot217PersonalEffect = function(_na4) {
            var _na5 = null,
                _na6 = new _na3.SlotItemEffectModel(),
                _na7 = false,
                _na8 = new _na3.SlotItemEffectModel();
            if (501 == _na4.ship_id || 506 == _na4.ship_id ? (_na8.houg += 1, _na8.kaih += 3, _na8.tyku += 5, _na7 = true) : 502 != _na4.ship_id && 507 != _na4.ship_id || (_na8.houg += 1, _na8.kaih += 2, _na8.tyku += 4, _na7 = true), 0 == _na7) return _na6;
            var _na9 = _na4.get_slotnums(217);
            return _na6.add(_na8.multiply(_na9)), _na6;
        };
    },
    91302: function(_naa, _nab, _nac) {
        'use strict';
        var _nad = null;
        var _nae = this && this.__importDefault || function(_naf) {
            var _nag = null;
            return _naf && _naf.__esModule ? _naf : {
                'default': _naf
            };
        };
        defineModule(_nab);
        Object.defineProperty(_nab, '__esModule', {
            'value': true
        }), _nab.getSlot220PersonalEffect = void 0;
        var _nah = _nac(74496),
            _nai = _nae(_nac(18622));
        _nab.getSlot220PersonalEffect = function(_naj) {
            var _nak = null,
                _nal = new _nah.SlotItemEffectModel(),
                _nam = false,
                _nan = new _nah.SlotItemEffectModel(),
                _nao = 0,
                _nap = 0;
            if (662 == _naj.ship_id || 663 == _naj.ship_id || 668 == _naj.ship_id || 501 == _naj.ship_id || 506 == _naj.ship_id || 502 == _naj.ship_id || 507 == _naj.ship_id ? (_nan.houg += 1, _nan.tyku += 3, _nan.kaih += 2, _nam = true, _nao = 1) : 894 != _naj.ship_id && 899 != _naj.ship_id || (_nan.tyku += 2, _nan.kaih += 2, _nam = true, _nao = 1, _nap = 1), 0 == _nam) return _nal;
            var _naq = _naj.get_slotnums(220);
            _nal.add(_nan.multiply(_naq));
            for (var _nar = 0, _nas = 0, _nat = _naj.have_slot_ids(); _nas < _nat.length; _nas++) {
                var _nau = _nat[_nas],
                    _nav = _nai.default.model.slot.getMst(_nau),
                    _naw = _nav.equipType;
                12 != _naw && 13 != _naw || (_nav.sakuteki >= 5 && _naj.get_slotnums(parseInt(_nau)), _nav.taiku >= 2 && (_nar += _naj.get_slotnums(parseInt(_nau))));
            }
            if (_nar >= 1 && 1 == _nao && (_nal.tyku += 3, _nal.kaih += 3), 0 == _nap) return _nal;
            var _nax = _naj.get_each_level_nums(220)[10];
            return 1 == _nap && _nax > 0 && (_nal.houg += 1 * _nax, _nal.tyku += 1 * _nax, _nal.kaih += 1 * _nax), _nal;
        };
    },
    20418: (_nay, _naz, _nb0) => {
        'use strict';
        var _nb1 = null;
        defineModule(_naz);
        Object.defineProperty(_naz, '__esModule', {
            'value': true
        }), _naz.getSlot227PersonalEffect = void 0;
        var _nb2 = _nb0(74496);
        _naz.getSlot227PersonalEffect = function(_nb3) {
            var _nb4 = null,
                _nb5 = new _nb2.SlotItemEffectModel(),
                _nb6 = _nb3.get_each_level_nums(227),
                _nb7 = 0;
            _nb6.forEach(function(_nb8, _nb9) {
                _nb9 >= 8 && (_nb7 += _nb8);
            }), _nb7 >= 1 && (_nb5.tais += 1 * _nb7);
            var _nba = _nb6[10];
            return _nba >= 1 && (_nb5.tais += 1 * _nba), _nb5;
        };
    },
    1906: (_nbb, _nbc, _nbd) => {
        'use strict';
        var _nbe = null;
        defineModule(_nbc);
        Object.defineProperty(_nbc, '__esModule', {
            'value': true
        }), _nbc.getSlot228PersonalEffect = void 0;
        var _nbf = _nbd(74496);
        _nbc.getSlot228PersonalEffect = function(_nbg) {
            var _nbh = null,
                _nbi = new _nbf.SlotItemEffectModel(),
                _nbj = new _nbf.SlotItemEffectModel();
            if ('ほうしょう' == _nbg.yomi && (_nbj.houg = 3, _nbj.kaih = 4, _nbj.tais = 4, _nbj.tyku = 3), 75 != _nbg.ctype && 76 != _nbg.ctype || (_nbj.houg = 2, _nbj.tais = 5, _nbj.tyku = 1, _nbj.kaih = 1), 7 == _nbg.stype && (_nbj.tais += 2, _nbj.tyku += 1, _nbj.kaih += 1), 894 != _nbg.ship_id && 899 != _nbg.ship_id || (_nbj.houg += 1, _nbj.kaih += 2, _nbj.tais += 2, _nbj.tyku += 1), !_nbj.exists()) return _nbi;
            var _nbk = _nbg.get_slotnums(228);
            return _nbi = _nbj.multiply(_nbk);
        };
    },
    61887: function(_nbl, _nbm, _nbn) {
        'use strict';
        var _nbo = null;
        var _nbp = this && this.__importDefault || function(_nbq) {
            var _nbr = null;
            return _nbq && _nbq.__esModule ? _nbq : {
                'default': _nbq
            };
        };
        defineModule(_nbm);
        Object.defineProperty(_nbm, '__esModule', {
            'value': true
        }), _nbm.getSlot229PersonalEffect = void 0;
        var _nbs = _nbn(74496),
            _nbt = _nbp(_nbn(18622));
        _nbm.getSlot229PersonalEffect = function(_nbu) {
            var _nbv = null;
            for (var _nbw = new _nbs.SlotItemEffectModel(), _nbx = 0, _nby = 0, _nbz = _nbu.have_slots_dict[229]; _nby < _nbz.length; _nby++) {
                _nbz[_nby].level >= 7 && _nbx++;
            }
            var _nc0 = _nbx,
                _nc1 = 0,
                _nc2 = 0,
                _nc3 = 0,
                _nc4 = _nbu.get_slotnums(229);
            if (622 == _nbu.ship_id || 623 == _nbu.ship_id || 624 == _nbu.ship_id) _nbw.houg += 1 * _nc4, _nbw.tyku += 1 * _nc4, _nc1 = 2;
            else {
                if (656 == _nbu.ship_id) _nbw.houg += 2 * _nc4, _nbw.tyku += 3 * _nc4, _nbw.tais += 2 * _nc4, _nc1 = 3;
                else {
                    if (0 == _nbx) return _nbw;
                }
            }
            if (488 == _nbu.ship_id ? (_nbw.tyku += 3 * _nc0, _nc1 = 1) : 220 == _nbu.ship_id ? _nbw.tyku += 2 * _nc0 : 23 == _nbu.ship_id ? _nbw.tyku += 1 * _nc0 : 160 == _nbu.ship_id ? (_nbw.tyku += 2 * _nc0, _nc1 = 1) : 224 == _nbu.ship_id ? _nbw.tyku += 1 * _nc0 : 487 == _nbu.ship_id ? (_nbw.tyku += 2 * _nc0, _nc1 = 1) : 289 == _nbu.ship_id && (_nbw.tyku += 1 * _nc0), (66 == _nbu.ctype || 28 == _nbu.ctype) && (_nbw.houg += 1 * _nc0, _nbw.tyku += 1 * _nc0, _nc2 = 1), 1 == _nbu.stype && (_nbw.houg += 1 * _nc0, _nbw.tyku += 1 * _nc0, _nc3 = 1), ('ゆら' == _nbu.yomi || 'なか' == _nbu.yomi || 'きぬ' == _nbu.yomi) && (_nbw.houg += 2 * _nc0), 0 == _nc1 + _nc2 + _nc3) return _nbw;
            for (var _nc5 = 0, _nc6 = 0, _nc7 = 0, _nc8 = _nbu.have_slot_ids(); _nc7 < _nc8.length; _nc7++) {
                var _nc9 = _nc8[_nc7],
                    _nca = _nbt.default.model.slot.getMst(_nc9),
                    _ncb = _nca.equipType;
                12 != _ncb && 13 != _ncb || (_nca.sakuteki >= 5 && (_nc5 += _nbu.get_slotnums(parseInt(_nc9))), _nca.taiku >= 2 && (_nc6 += _nbu.get_slotnums(parseInt(_nc9))));
            }
            return 1 == _nc1 ? _nc5 > 0 && (_nbw.houg += 3, _nbw.kaih += 2) : 2 == _nc1 ? (_nc5 > 0 && (_nbw.houg += 1, _nbw.kaih += 1), _nc6 > 0 && (_nbw.tyku += 2, _nbw.kaih += 2)) : 3 == _nc1 && (_nc5 > 0 && (_nbw.houg += 2, _nbw.kaih += 2), _nc6 > 0 && (_nbw.tyku += 3, _nbw.kaih += 2)), 1 == _nc2 && _nc5 > 0 && (_nbw.houg += 2, _nbw.kaih += 3), 1 == _nc3 && _nc5 > 0 && (_nbw.houg += 1, _nbw.kaih += 4), _nbw;
        };
    },
    55734: (_ncc, _ncd, _nce) => {
        'use strict';
        var _ncf = null;
        defineModule(_ncd);
        Object.defineProperty(_ncd, '__esModule', {
            'value': true
        }), _ncd.getSlot234PersonalEffect = void 0;
        var _ncg = _nce(74496);
        _ncd.getSlot234PersonalEffect = function(_nch) {
            var _nci = null,
                _ncj = new _ncg.SlotItemEffectModel(),
                _nck = false,
                _ncl = new _ncg.SlotItemEffectModel(),
                _ncm = _nch.get_slotnums(142) + _nch.get_slotnums(460);
            if (37 == _nch.ctype && (_ncl.houg += 1, _ncl.tyku += 1, _ncl.kaih += 1, _ncl.houm += 1, _ncm >= 1 && (_ncj.tyku += 1, _ncj.kaih += 1, _ncj.houm += 1), _nck = true), 0 == _nck) return _ncj;
            var _ncn = _nch.get_slotnums(234);
            return _ncj.add(_ncl.multiply(_ncn)), _ncj;
        };
    },
    17562: function(_nco, _ncp, _ncq) {
        'use strict';
        var _ncr = null;
        var _ncs = this && this.__importDefault || function(_nct) {
            var _ncu = null;
            return _nct && _nct.__esModule ? _nct : {
                'default': _nct
            };
        };
        defineModule(_ncp);
        Object.defineProperty(_ncp, '__esModule', {
            'value': true
        }), _ncp.getSlot235PersonalEffect = void 0;
        var _ncv = _ncq(74496),
            _ncw = _ncs(_ncq(18622));
        _ncp.getSlot235PersonalEffect = function(_ncx) {
            var _ncy = null,
                _ncz = new _ncv.SlotItemEffectModel(),
                _nd0 = false,
                _nd1 = new _ncv.SlotItemEffectModel(),
                _nd2 = 0;
            if (52 != _ncx.ctype && 9 != _ncx.ctype || (_nd1.houg += 2, _nd1.tyku += 1, _nd0 = true), 321 == _ncx.ship_id && (_nd1.houg += 1, _nd1.kaih += 1, _nd2 = 1), 0 == _nd0) return _ncz;
            var _nd3 = _ncx.get_slotnums(235);
            if (_ncz.add(_nd1.multiply(_nd3)), 0 == _nd2) return _ncz;
            for (var _nd4 = 0, _nd5 = 0, _nd6 = 0, _nd7 = _ncx.have_slot_ids(); _nd6 < _nd7.length; _nd6++) {
                var _nd8 = _nd7[_nd6],
                    _nd9 = _ncw.default.model.slot.getMst(_nd8),
                    _nda = _nd9.equipType;
                12 != _nda && 13 != _nda || (_nd9.sakuteki >= 5 && (_nd4 += _ncx.get_slotnums(parseInt(_nd8))), _nd9.taiku >= 2 && (_nd5 += _ncx.get_slotnums(parseInt(_nd8))));
            }
            return _nd4 >= 1 && 1 == _nd2 && (_ncz.houg += 3, _ncz.kaih += 2), _nd5 >= 1 && 1 == _nd2 && (_ncz.tyku += 3, _ncz.kaih += 3), _ncz;
        };
    },
    47970: (_ndb, _ndc, _ndd) => {
        'use strict';
        var _nde = null;
        defineModule(_ndc);
        Object.defineProperty(_ndc, '__esModule', {
            'value': true
        }), _ndc.getSlot237PersonalEffect = void 0;
        var _ndf = _ndd(74496);
        _ndc.getSlot237PersonalEffect = function(_ndg) {
            var _ndh = null,
                _ndi = new _ndf.SlotItemEffectModel(),
                _ndj = new _ndf.SlotItemEffectModel();
            if (553 == _ndg.ship_id) _ndj.houg = 4, _ndj.kaih = 2;
            else {
                if (82 == _ndg.ship_id) _ndj.houg = 3, _ndj.kaih = 1;
                else {
                    if (88 == _ndg.ship_id) _ndj.houg = 3, _ndj.kaih = 1;
                    else {
                        if (554 == _ndg.ship_id) _ndj.houg = 4, _ndj.kaih = 2;
                        else {
                            if (411 == _ndg.ship_id) _ndj.houg = 2;
                            else {
                                if (412 != _ndg.ship_id) return _ndi;
                                _ndj.houg = 2;
                            }
                        }
                    }
                }
            }
            var _ndk = _ndg.get_slotnums(237);
            return _ndi = _ndj.multiply(_ndk);
        };
    },
    14386: (_ndl, _ndm, _ndn) => {
        'use strict';
        var _ndo = null;
        defineModule(_ndm);
        Object.defineProperty(_ndm, '__esModule', {
            'value': true
        }), _ndm.getSlot238_239PersonalEffect = void 0;
        var _ndp = _ndn(74496);
        _ndm.getSlot238_239PersonalEffect = function(_ndq) {
            var _ndr = null,
                _nds = new _ndp.SlotItemEffectModel();
            return 501 != _ndq.ship_id && 506 != _ndq.ship_id && 502 != _ndq.ship_id && 507 != _ndq.ship_id || (_nds.kaih += 1, _nds.raig += 1), _nds;
        };
    },
    82229: (_ndt, _ndu, _ndv) => {
        'use strict';
        var _ndw = null;
        defineModule(_ndu);
        Object.defineProperty(_ndu, '__esModule', {
            'value': true
        }), _ndu.getSlot242PersonalEffect = void 0;
        var _ndx = _ndv(74496);
        _ndu.getSlot242PersonalEffect = function(_ndy) {
            var _ndz = null,
                _ne0 = new _ndx.SlotItemEffectModel(),
                _ne1 = false,
                _ne2 = new _ndx.SlotItemEffectModel();
            if (78 == _ndy.ctype && (_ne2.houg += 2, _ne2.kaih += 1, _ne1 = true), 'ほうしょう' == _ndy.yomi && (_ne2.houg += 1, _ne1 = true), 0 == _ne1) return _ne0;
            var _ne3 = _ndy.get_slotnums(242);
            return _ne0.add(_ne2.multiply(_ne3)), _ne0;
        };
    },
    10325: (_ne4, _ne5, _ne6) => {
        'use strict';
        var _ne7 = null;
        defineModule(_ne5);
        Object.defineProperty(_ne5, '__esModule', {
            'value': true
        }), _ne5.getSlot243PersonalEffect = void 0;
        var _ne8 = _ne6(74496);
        _ne5.getSlot243PersonalEffect = function(_ne9) {
            var _nea = null,
                _neb = new _ne8.SlotItemEffectModel(),
                _nec = false,
                _ned = new _ne8.SlotItemEffectModel();
            if (78 == _ne9.ctype && (_ned.houg += 3, _ned.kaih += 1, _nec = true), 'ほうしょう' == _ne9.yomi && (_ned.houg += 2, _nec = true), 0 == _nec) return _neb;
            var _nee = _ne9.get_slotnums(243);
            return _neb.add(_ned.multiply(_nee)), _neb;
        };
    },
    351: (_nef, _neg, _neh) => {
        'use strict';
        var _nei = null;
        defineModule(_neg);
        Object.defineProperty(_neg, '__esModule', {
            'value': true
        }), _neg.getSlot244PersonalEffect = void 0;
        var _nej = _neh(74496);
        _neg.getSlot244PersonalEffect = function(_nek) {
            var _nel = null,
                _nem = new _nej.SlotItemEffectModel(),
                _nen = false,
                _neo = new _nej.SlotItemEffectModel(),
                _nep = 0;
            if (78 == _nek.ctype && (_neo.houg += 4, _neo.kaih += 2, _nen = true, _nep = 1), 'ほうしょう' == _nek.yomi && (_neo.houg += 3, _nen = true, _nep = 2), 0 == _nen) return _nem;
            var _neq = _nek.get_slotnums(244);
            if (_nem.add(_neo.multiply(_neq)), 0 == _nep) return _nem;
            var _ner = _nek.get_each_level_over_nums([244]).slot[244];
            return 1 == _nep ? (_ner[3] >= 1 && (_nem.houg += 1 * _ner[3]), _ner[5] >= 1 && (_nem.houm += 1 * _ner[5]), _ner[7] >= 1 && (_nem.houg += 1 * _ner[7]), _ner[8] >= 1 && (_nem.kaih += 1 * _ner[8]), _ner[9] >= 1 && (_nem.houm += 1 * _ner[9]), _ner[10] >= 1 && (_nem.houg += 1 * _ner[10])) : 2 == _nep && (_ner[3] >= 1 && (_nem.kaih += 1 * _ner[3]), _ner[7] >= 1 && (_nem.houg += 1 * _ner[7]), _ner[9] >= 1 && (_nem.houm += 1 * _ner[9]), _ner[10] >= 1 && (_nem.houg += 1 * _ner[10])), _nem;
        };
    },
    61977: (_nes, _net, _neu) => {
        'use strict';
        var _nev = null;
        defineModule(_net);
        Object.defineProperty(_net, '__esModule', {
            'value': true
        }), _net.getSlot247PersonalEffect = void 0;
        var _new = _neu(74496);
        _net.getSlot247PersonalEffect = function(_nex) {
            var _ney = null,
                _nez = new _new.SlotItemEffectModel(),
                _nf0 = false,
                _nf1 = new _new.SlotItemEffectModel(),
                _nf2 = 0;
            if ('フランス' == _nex.getCountryName() && (_nf1.houg += 2, _nf1.houm += 2, _nf0 = true, _nf2 = 1), 0 == _nf0) return _nez;
            var _nf3 = _nex.get_slotnums(247);
            if (_nez.add(_nf1.multiply(_nf3)), 0 == _nf2) return _nez;
            var _nf4 = _nex.get_each_level_nums(247),
                _nf5 = 0,
                _nf6 = 0;
            _nf2 > 0 && _nf4.forEach(function(_nf7, _nf8) {
                _nf8 >= 4 && (_nf5 += _nf7), _nf8 >= 8 && (_nf6 += _nf7);
            });
            var _nf9 = _nf4[10];
            return 1 == _nf2 && (_nf5 >= 1 && (_nez.houg += 1 * _nf5, _nez.houm += 1 * _nf5), _nf6 >= 1 && (_nez.kaih += 1 * _nf6, _nez.houg += 1 * _nf6, _nez.houm += 1 * _nf6), _nf9 >= 1 && (_nez.kaih += 1 * _nf9, _nez.houm += 1 * _nf9)), _nez;
        };
    },
    96580: (_nfa, _nfb, _nfc) => {
        'use strict';
        var _nfd = null;
        defineModule(_nfb);
        Object.defineProperty(_nfb, '__esModule', {
            'value': true
        }), _nfb.getSlot252PersonalEffect = void 0;
        var _nfe = _nfc(74496);
        _nfb.getSlot252PersonalEffect = function(_nff) {
            var _nfg = null,
                _nfh = new _nfe.SlotItemEffectModel(),
                _nfi = (new _nfe.SlotItemEffectModel(), 0);
            if (78 != _nff.ctype && 112 != _nff.ctype || (_nfi = 1), 0 == _nfi) return _nfh;
            var _nfj = _nff.get_each_level_over_nums([252]).slot[252];
            return 1 == _nfi && (_nfj[4] >= 1 && (_nfh.kaih += 1 * _nfj[4]), _nfj[6] >= 1 && (_nfh.houm += 1 * _nfj[6]), _nfj[7] >= 1 && (_nfh.houg += 1 * _nfj[7]), _nfj[8] >= 1 && (_nfh.kaih += 1 * _nfj[8]), _nfj[9] >= 1 && (_nfh.houm += 1 * _nfj[9]), _nfj[10] >= 1 && (_nfh.houg += 1 * _nfj[10])), _nfh;
        };
    },
    81284: (_nfk, _nfl, _nfm) => {
        'use strict';
        var _nfn = null;
        defineModule(_nfl);
        Object.defineProperty(_nfl, '__esModule', {
            'value': true
        }), _nfl.getSlot258PersonalEffect = void 0;
        var _nfo = _nfm(74496);
        _nfl.getSlot258PersonalEffect = function(_nfp) {
            var _nfq = null,
                _nfr = new _nfo.SlotItemEffectModel(),
                _nfs = _nfp.haveSlotLevelNumOver(258);
            return _nfs[2] >= 1 && (_nfr.houm += 1 * _nfs[2], _nfr.kaih += 1 * _nfs[2], {
                883: 1,
                599: 1,
                610: 1,
                899: 1,
                156: 1
            }[_nfp.ship_id] && (_nfr.houg += 1 * _nfs[2], _nfr.houm += 1 * _nfs[2], _nfr.kaih += 1 * _nfs[2])), _nfr;
        };
    },
    4862: (_nft, _nfu, _nfv) => {
        'use strict';
        var _nfw = null;
        defineModule(_nfu);
        Object.defineProperty(_nfu, '__esModule', {
            'value': true
        }), _nfu.getSlot25mmMachinegunLightShipEffect = void 0;
        var _nfx = _nfv(74496);
        _nfu.getSlot25mmMachinegunLightShipEffect = function(_nfy) {
            var _nfz = null,
                _ng0 = new _nfx.SlotItemEffectModel(),
                _ng1 = {
                    986: 1,
                    987: 1
                };
            if (!_ng1[_nfy.ship_id]) return _ng0;
            var _ng2 = _ng1[_nfy.ship_id],
                _ng3 = _nfy.get_slotnums(39),
                _ng4 = _nfy.get_slotnums(40),
                _ng5 = _nfy.get_slotnums(49),
                _ng6 = _nfy.get_slotnums(505),
                _ng7 = _ng3 + _ng4 + _ng5 + _ng6,
                _ng8 = _nfy.get_slotnums(533),
                _ng9 = _nfy.get_slotnums(553),
                _nga = _nfy.haveSlotLevelNumOver(39),
                _ngb = _nfy.haveSlotLevelNumOver(505);
            return 1 == _ng2 && (_ng0.kaih += 1 * _ng7, _ng0.tyku += 1 * _ng7, _ng3 >= 1 && (_nga[7] >= 1 && (_ng0.houg += 1 * _nga[7]), _nga[8] >= 1 && (_ng0.tyku += 1 * _nga[8]), _nga[9] >= 1 && (_ng0.kaih += 1 * _nga[9]), _nga[10] >= 1 && (_ng0.houm += 1 * _nga[10]), _ng8 + _ng9 >= 1 && (_ng0.houm += 1, _ng0.tyku += 1)), _ng6 >= 1 && (_ng0.houg += 1 * _ng6, _ng0.kaih += 1 * _ng6, _ngb[8] >= 1 && (_ng0.houm += 1 * _ngb[8]))), _ng0;
        };
    },
    31797: function(_ngc, _ngd, _nge) {
        'use strict';
        var _ngf = null;
        var _ngg = this && this.__importDefault || function(_ngh) {
            var _ngi = null;
            return _ngh && _ngh.__esModule ? _ngh : {
                'default': _ngh
            };
        };
        defineModule(_ngd);
        Object.defineProperty(_ngd, '__esModule', {
            'value': true
        }), _ngd.getSlot266PersonalEffect2 = _ngd.getSlot266PersonalEffect = void 0;
        var _ngj = _nge(74496),
            _ngk = _ngg(_nge(18622));
        _ngd.getSlot266PersonalEffect = function(_ngl) {
            var _ngm = null,
                _ngn = new _ngj.SlotItemEffectModel(),
                _ngo = false;
            if (566 != _ngl.ship_id && 567 != _ngl.ship_id && 568 != _ngl.ship_id && 656 != _ngl.ship_id && 670 != _ngl.ship_id && 915 != _ngl.ship_id && 951 != _ngl.ship_id || (_ngo = true), 0 == _ngo) return _ngn;
            var _ngp = _ngl.get_slotnums(266);
            return 30 == _ngl.ctype && (1 == _ngp ? _ngn.houg = 1 : _ngp >= 2 && (_ngn.houg = 3)), _ngn;
        }, _ngd.getSlot266PersonalEffect2 = function(_ngq) {
            var _ngr = null,
                _ngs = new _ngj.SlotItemEffectModel(),
                _ngt = 0,
                _ngu = new _ngj.SlotItemEffectModel();
            if (23 == _ngq.ctype || 18 == _ngq.ctype ? (_ngu.houg = 1, _ngt = 1) : 30 == _ngq.ctype && (_ngu.houg = 1, _ngt = 2), ('しぐれ' == _ngq.yomi || 'ゆきかぜ' == _ngq.yomi || 'いそかぜ' == _ngq.yomi) && (_ngu.kaih = 1), 961 == _ngq.ship_id && (_ngu.houg += 1, _ngu.houm += 1, _ngu.kaih += 1), !_ngu.exists()) return _ngs;
            var _ngv = _ngq.get_slotnums(266);
            if (_ngs = _ngu.multiply(_ngv), 0 == _ngt) return _ngs;
            for (var _ngw = 0, _ngx = 0, _ngy = _ngq.have_slot_ids(); _ngx < _ngy.length; _ngx++) {
                var _ngz = _ngy[_ngx],
                    _nh0 = _ngk.default.model.slot.getMst(_ngz),
                    _nh1 = _nh0.equipType;
                (12 == _nh1 || 13 == _nh1) && _nh0.sakuteki >= 5 && (_ngw += _ngq.get_slotnums(parseInt(_ngz)));
            }
            return _ngw > 0 && (1 == _ngt ? (_ngs.houg += 1, _ngs.kaih += 1, _ngs.raig += 3) : 2 == _ngt && (_ngs.houg += 2, _ngs.kaih += 1, _ngs.raig += 3)), _ngs;
        };
    },
    45738: function(_nh2, _nh3, _nh4) {
        'use strict';
        var _nh5 = null;
        var _nh6 = this && this.__importDefault || function(_nh7) {
            var _nh8 = null;
            return _nh7 && _nh7.__esModule ? _nh7 : {
                'default': _nh7
            };
        };
        defineModule(_nh3);
        Object.defineProperty(_nh3, '__esModule', {
            'value': true
        }), _nh3.getSlot267PersonalEffect2 = _nh3.getSlot267PersonalEffect = void 0;
        var _nh9 = _nh4(74496),
            _nha = _nh6(_nh4(18622));
        _nh3.getSlot267PersonalEffect = function(_nhb) {
            var _nhc = null,
                _nhd = new _nh9.SlotItemEffectModel(),
                _nhe = 0,
                _nhf = 0;
            if (38 == _nhb.ctype || 22 == _nhb.ctype) _nhe = 2, _nhf = 1;
            else {
                if (30 != _nhb.ctype) return _nhd;
                _nhe = 1, _nhf = 1;
            }
            var _nhg = _nhb.get_slotnums(267) + _nhb.get_slotnums(366);
            return _nhd.houg = _nhe * _nhg, _nhd.kaih = _nhf * _nhg, _nhd;
        }, _nh3.getSlot267PersonalEffect2 = function(_nhh) {
            var _nhi = null,
                _nhj = new _nh9.SlotItemEffectModel(),
                _nhk = _nhh.get_slotnums(267),
                _nhl = _nhh.get_slotnums(366),
                _nhm = _nhk + _nhl;
            if (566 != _nhh.ship_id && 567 != _nhh.ship_id && 568 != _nhh.ship_id && 656 != _nhh.ship_id && 670 != _nhh.ship_id && 915 != _nhh.ship_id && 951 != _nhh.ship_id || (_nhk > 0 && (_nhj.houg += 1), 1 == _nhl ? (_nhj.houg += 1, _nhj.tyku += 2) : _nhl >= 2 && (_nhj.houg += 2, _nhj.tyku += 4)), 38 != _nhh.ctype && 229 != _nhh.ship_id && [648, 961].indexOf(_nhh.ship_id) < 0) return _nhj;
            var _nhn = false,
                _nho = false,
                _nhp = false,
                _nhq = false,
                _nhr = false,
                _nhs = false,
                _nht = false,
                _nhu = false,
                _nhv = false,
                _nhw = false,
                _nhx = false,
                _nhy = false,
                _nhz = false,
                _ni0 = 0,
                _ni1 = 0,
                _ni2 = 0;
            543 == _nhh.ship_id ? (_nhj.houg = 1 * _nhm, _nho = true) : 229 == _nhh.ship_id ? _nhp = true : 542 == _nhh.ship_id ? (_nhj.houg = 1 * _nhm, _nhq = true) : 563 == _nhh.ship_id ? (_nhj.houg = 1 * _nhm, _nhr = true) : 564 == _nhh.ship_id ? (_nhj.houg = 1 * _nhm, _nhs = true) : 578 == _nhh.ship_id ? (_nhj.houg = 1 * _nhm, _nht = true) : 569 == _nhh.ship_id ? (_nhj.houg = 1 * _nhm, _nhu = true) : 649 == _nhh.ship_id ? (_nhj.houg = 2 * _nhm, _nhw = true) : 955 == _nhh.ship_id || 960 == _nhh.ship_id ? (_nhj.houg = 2 * _nhm, _nhx = true) : 956 == _nhh.ship_id ? (_nhj.houg = 2 * _nhm, _nhy = true) : 648 == _nhh.ship_id ? (_nhj.houg = 2 * _nhm, _nhv = true, _ni0 = 1, _ni1 = 1, _ni2 = 1) : 961 == _nhh.ship_id ? (_nhj.houg = 2 * _nhm, _nhn = true, _ni0 = 1, _ni1 = 1, _ni2 = 1) : 981 == _nhh.ship_id && (_nhj.houg = 1 * _nhm, _nhz = true);
            for (var _ni3 = 0, _ni4 = 0, _ni5 = 0, _ni6 = _nhh.have_slot_ids(); _ni5 < _ni6.length; _ni5++) {
                var _ni7 = _ni6[_ni5],
                    _ni8 = _nha.default.model.slot.getMst(_ni7),
                    _ni9 = _ni8.equipType;
                12 != _ni9 && 13 != _ni9 || (_ni8.sakuteki >= 5 && (_ni3 += _nhh.get_slotnums(parseInt(_ni7))), _ni8.taiku >= 2 && (_ni4 += _nhh.get_slotnums(parseInt(_ni7))));
            }
            if (_ni3 > 0 && _nhk > 0 && ((38 == _nhh.ctype || _nhv) && (_nhj.houg += 2, _nhj.raig += 3, _nhj.kaih += 1, 955 == _nhh.ship_id || 956 == _nhh.ship_id ? _nhj.raig -= 1 : 960 == _nhh.ship_id && (_nhj.raig -= 2)), (_nhq || _nho || _nhp || _nhr || _nhs || _nht || _nhu || _nhv || _nhw || _nhx || _nhy || _nhz) && (_nhj.houg += 1, _nhj.raig += 3, _nhj.kaih += 2)), _nhl > 0 && (_nhq || _nho || _nhr || _nhs || _nht || _nhp || _nhu || _nhv || _nhw || _nhn || _nhx || _nhy || _nhz)) {
                1 == _nhl ? (_nhj.tyku += 3, _nhj.houg += 1, _nhj.houm += 1) : _nhl >= 2 && (_nhj.tyku += 5, _nhj.houg += 3, _nhj.houm += 1, 955 == _nhh.ship_id && (_nhj.houg += 1)), (_nhu || _nhv) && (_nhj.houg += 1, _nhj.tyku += 2), _ni3 > 0 && (_nhj.houg += 2, _nhj.kaih += 2, _nhj.raig += 4, _nhj.houm += 2, 960 == _nhh.ship_id && (_nhj.raig -= 1, _nhj.houg += 1)), _ni4 > 0 && (_nhj.houg += 1, _nhj.kaih += 3, _nhj.tyku += 5, _nhj.houm += 1);
                var _nia = _nhh.get_each_level_nums(366),
                    _nib = 0,
                    _nic = 0;
                _nia.forEach(function(_nid, _nie) {
                    _nie >= 5 && (_nib += _nid), _nie >= 8 && (_nic += _nid);
                }), _nib >= 1 && (_nhj.houm += 1 * _nib), _nic >= 1 && (_nhj.houg += 1 * _nic);
                var _nif = _nia[10];
                _nif >= 1 && (_nhj.houm += 1 * _nif);
            }
            var _nig = _nhh.get_slotnums(129),
                _nih = _nhh.get_slotnums(74),
                _nii = _nhh.get_slotnums(412);
            return _ni0 > 0 && _nig > 0 && 1 == _ni0 && (_nhj.houg += 2, _nhj.kaih += 3, _nhj.tyku += 2), _ni2 > 0 && _nii > 0 && 1 == _ni2 && (_nhj.houg += 2, _nhj.kaih += 3, _nhj.tyku += 2), _ni1 > 0 && _nih > 0 && 1 == _ni1 && (_nhj.houg += 3, _nhj.kaih -= 3), _nhj;
        };
    },
    23934: (_nij, _nik, _nil) => {
        'use strict';
        var _nim = null;
        defineModule(_nik);
        Object.defineProperty(_nik, '__esModule', {
            'value': true
        }), _nik.getSlot271PersonalEffect = void 0;
        var _nin = _nil(74496);
        _nik.getSlot271PersonalEffect = function(_nio) {
            var _nip = null,
                _niq = new _nin.SlotItemEffectModel(),
                _nir = 0;
            if (508 != _nio.ship_id && 509 != _nio.ship_id && 888 != _nio.ship_id && 883 != _nio.ship_id || (_nir = 1), 0 == _nir) return _niq;
            var _nis = _nio.get_each_level_nums(271),
                _nit = 0,
                _niu = 0,
                _niv = 0,
                _niw = _nis[10];
            return _nir > 0 && _nis.forEach(function(_nix, _niy) {
                _niy >= 4 && (_nit += _nix), _niy >= 6 && (_niu += _nix), _niy >= 8 && (_niv += _nix);
            }), 1 == _nir && (_nit >= 1 && (_niq.houg += 1 * _nit), _niu >= 1 && (_niq.tyku += 2 * _niu), _niv >= 1 && (_niq.kaih += 2 * _niv), _niw >= 1 && (_niq.houg += 1 * _niw)), _niq;
        };
    },
    17712: function(_niz, _nj0, _nj1) {
        'use strict';
        var _nj2 = null;
        var _nj3 = this && this.__importDefault || function(_nj4) {
            var _nj5 = null;
            return _nj4 && _nj4.__esModule ? _nj4 : {
                'default': _nj4
            };
        };
        defineModule(_nj0);
        Object.defineProperty(_nj0, '__esModule', {
            'value': true
        }), _nj0.getSlot275PersonalEffect = void 0;
        var _nj6 = _nj1(74496),
            _nj7 = _nj3(_nj1(18622));
        _nj0.getSlot275PersonalEffect = function(_nj8) {
            var _nj9 = null,
                _nja = new _nj6.SlotItemEffectModel(),
                _njb = false,
                _njc = new _nj6.SlotItemEffectModel(),
                _njd = 0,
                _nje = 0;
            if (894 != _nj8.ship_id && 899 != _nj8.ship_id || (_njc.houg += 1, _njc.tyku += 3, _njc.kaih += 2, _njb = true, _nje = 1, _njd = 1), 0 == _njb) return _nja;
            var _njf = _nj8.get_slotnums(275);
            _nja.add(_njc.multiply(_njf));
            var _njg = 0;
            if (_njd > 0)
                for (var _njh = 0, _nji = _nj8.have_slot_ids(); _njh < _nji.length; _njh++) {
                    var _njj = _nji[_njh],
                        _njk = _nj7.default.model.slot.getMst(_njj),
                        _njl = _njk.equipType;
                    12 != _njl && 13 != _njl || (_njk.sakuteki >= 5 && _nj8.get_slotnums(parseInt(_njj)), _njk.taiku >= 2 && (_njg += _nj8.get_slotnums(parseInt(_njj))));
                }
            if (1 == _njd && _njg > 0 && (_nja.tyku += 3, _nja.kaih += 3), 0 == _nje) return _nja;
            var _njm = _nj8.get_each_level_nums(275),
                _njn = 0,
                _njo = _njm[10];
            return _nje > 0 && _njm.forEach(function(_njp, _njq) {
                _njq >= 7 && (_njn += _njp);
            }), 1 == _nje && (_njn > 0 && (_nja.tyku += 1 * _njn, _nja.kaih += 1 * _njn), _njo > 0 && (_nja.houg += 1 * _njo, _nja.tyku += 1 * _njo, _nja.houm += 1 * _njo)), _nja;
        };
    },
    93733: (_njr, _njs, _njt) => {
        'use strict';
        var _nju = null;
        defineModule(_njs);
        Object.defineProperty(_njs, '__esModule', {
            'value': true
        }), _njs.getSlot277PersonalEffect = void 0;
        var _njv = _njt(74496);
        _njs.getSlot277PersonalEffect = function(_njw) {
            var _njx = null,
                _njy = new _njv.SlotItemEffectModel(),
                _njz = false,
                _nk0 = new _njv.SlotItemEffectModel();
            if ('アメリカ' != _njw.getCountryName() && 67 != _njw.ctype && 78 != _njw.ctype && 82 != _njw.ctype && 88 != _njw.ctype && 108 != _njw.ctype && 112 != _njw.ctype || (_nk0.houg += 1, _nk0.kaih += 1, _njz = true), 83 == _njw.ctype && (_nk0.houg += 1, _nk0.kaih += 1, _nk0.tyku += 1, _njz = true), 0 == _njz) return _njy;
            var _nk1 = _njw.get_slotnums(277);
            return _njy.add(_nk0.multiply(_nk1)), _njy;
        };
    },
    34718: (_nk2, _nk3, _nk4) => {
        'use strict';
        var _nk5 = null;
        defineModule(_nk3);
        Object.defineProperty(_nk3, '__esModule', {
            'value': true
        }), _nk3.getSlot278PersonalEffect = void 0;
        var _nk6 = _nk4(74496);
        _nk3.getSlot278PersonalEffect = function(_nk7) {
            var _nk8 = null,
                _nk9 = new _nk6.SlotItemEffectModel();
            return 'アメリカ' == _nk7.getCountryName() ? (_nk9.tyku += 1, _nk9.kaih += 3, _nk9.saku += 1) : 67 == _nk7.ctype || 78 == _nk7.ctype || 82 == _nk7.ctype || 88 == _nk7.ctype || 108 == _nk7.ctype || 112 == _nk7.ctype ? (_nk9.tyku += 1, _nk9.kaih += 2) : 96 == _nk7.ctype && (_nk9.tyku += 1, _nk9.kaih += 1), _nk9;
        };
    },
    69245: (_nka, _nkb, _nkc) => {
        'use strict';
        var _nkd = null;
        defineModule(_nkb);
        Object.defineProperty(_nkb, '__esModule', {
            'value': true
        }), _nkb.getSlot279PersonalEffect = void 0;
        var _nke = _nkc(74496);
        _nkb.getSlot279PersonalEffect = function(_nkf) {
            var _nkg = null,
                _nkh = new _nke.SlotItemEffectModel();
            return 'アメリカ' == _nkf.getCountryName() ? (_nkh.houg += 2, _nkh.tyku += 2, _nkh.kaih += 3, _nkh.saku += 2) : 67 == _nkf.ctype || 78 == _nkf.ctype || 82 == _nkf.ctype || 88 == _nkf.ctype || 108 == _nkf.ctype || 112 == _nkf.ctype ? (_nkh.houg += 1, _nkh.tyku += 1, _nkh.kaih += 2, _nkh.saku += 1) : 96 == _nkf.ctype && (_nkh.houg += 1, _nkh.tyku += 1, _nkh.kaih += 1), _nkh;
        };
    },
    18478: (_nki, _nkj, _nkk) => {
        'use strict';
        var _nkl = null;
        defineModule(_nkj);
        Object.defineProperty(_nkj, '__esModule', {
            'value': true
        }), _nkj.getSlot282PersonalEffect = void 0;
        var _nkm = _nkk(74496);
        _nkj.getSlot282PersonalEffect = function(_nkn) {
            var _nko = null,
                _nkp = new _nkm.SlotItemEffectModel(),
                _nkq = false,
                _nkr = false,
                _nks = _nkn.getCountryName();
            147 != _nkn.ship_id && 'ロシア' != _nks || (_nkq = true), 'ゆうばり' == _nkn.yomi && (_nkr = true);
            var _nkt = new _nkm.SlotItemEffectModel();
            if ((_nkq || _nkr) && (_nkt.houg += 2, _nkt.souk += 1), !_nkt.exists()) return _nkp;
            var _nku = _nkn.get_slotnums(282);
            return _nkp = _nkt.multiply(_nku);
        };
    },
    2899: (_nkv, _nkw, _nkx) => {
        'use strict';
        var _nky = null;
        defineModule(_nkw);
        Object.defineProperty(_nkw, '__esModule', {
            'value': true
        }), _nkw.getSlot283PersonalEffect = void 0;
        var _nkz = _nkx(74496);
        _nkw.getSlot283PersonalEffect = function(_nl0) {
            var _nl1 = null,
                _nl2 = new _nkz.SlotItemEffectModel(),
                _nl3 = false,
                _nl4 = _nl0.getCountryName();
            147 != _nl0.ship_id && 'ロシア' != _nl4 || (_nl3 = true);
            var _nl5 = new _nkz.SlotItemEffectModel();
            if (_nl3 && (_nl5.raig += 6, _nl5.houg += 1, _nl5.souk += 1), !_nl5.exists()) return _nl2;
            var _nl6 = _nl0.get_slotnums(283);
            return _nl2 = _nl5.multiply(_nl6);
        };
    },
    57120: (_nl7, _nl8, _nl9) => {
        'use strict';
        var _nla = null;
        defineModule(_nl8);
        Object.defineProperty(_nl8, '__esModule', {
            'value': true
        }), _nl8.getSlot285PersonalEffect = void 0;
        var _nlb = _nl9(74496);
        _nl8.getSlot285PersonalEffect = function(_nlc) {
            var _nld = null,
                _nle = new _nlb.SlotItemEffectModel(),
                _nlf = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959, 986, 987].indexOf(_nlc.ship_id) >= 0 && (_nlf = true), 0 == _nlf) return _nle;
            var _nlg = _nlc.get_each_level_nums(285),
                _nlh = _nlc.get_slotnums(285);
            _nlh > 2 && (_nlh = 2), _nle.raig = 2 * _nlh, _nle.kaih = 1 * _nlh;
            var _nli = _nlg[10];
            1 == _nli && (_nle.houg += 1, _nle.raig += 1), _nli >= 2 && (_nle.houg += 2, _nle.raig += 1), _nli >= 3 && (_nle.raig += 3);
            var _nlj = _nlc.get_slotnums(285);
            return 903 == _nlc.ship_id ? (_nlj >= 2 && (_nle.raig += 2), _nlj >= 3 && (_nle.raig += 2)) : 908 != _nlc.ship_id && 959 != _nlc.ship_id || (_nlj >= 2 && (_nle.raig += 1), _nlj >= 3 && (_nle.raig += 1)), _nle;
        };
    },
    74985: function(_nlk, _nll, _nlm) {
        'use strict';
        var _nln = null;
        var _nlo = this && this.__importDefault || function(_nlp) {
            var _nlq = null;
            return _nlp && _nlp.__esModule ? _nlp : {
                'default': _nlp
            };
        };
        defineModule(_nll);
        Object.defineProperty(_nll, '__esModule', {
            'value': true
        }), _nll.getSlot286PersonalEffect3 = _nll.getSlot286PersonalEffect2 = _nll.getSlot286PersonalEffect = void 0;
        var _nlr = _nlm(74496),
            _nls = _nlo(_nlm(18622));
        _nll.getSlot286PersonalEffect = function(_nlt) {
            var _nlu = null,
                _nlv = new _nlr.SlotItemEffectModel(),
                _nlw = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975, 956, 981].indexOf(_nlt.ship_id) >= 0 && (_nlw = true), 0 == _nlw) return _nlv;
            var _nlx = _nlt.get_each_level_nums(286),
                _nly = _nlt.get_slotnums(286);
            _nly > 2 && (_nly = 2), _nlv.raig = 2 * _nly, _nlv.kaih = 1 * _nly;
            var _nlz = _nlx[10];
            if (1 == _nlz ? _nlv.houg = _nlv.houg + 1 : _nlz >= 2 && (_nlv.houg = _nlv.houg + 2), 30 == _nlt.ctype || 961 == _nlt.ship_id) {
                var _nm0 = _nlx[5] + _nlx[6] + _nlx[7] + _nlx[8] + _nlx[9] + _nlx[10];
                1 == _nm0 ? _nlv.raig = _nlv.raig + 1 : _nm0 >= 2 && (_nlv.raig = _nlv.raig + 2);
            }
            return _nlv;
        }, _nll.getSlot286PersonalEffect2 = function(_nm1) {
            var _nm2 = null,
                _nm3 = new _nlr.SlotItemEffectModel(),
                _nm4 = false,
                _nm5 = 0;
            if ('たけ' == _nm1.yomi && (_nm4 = true, _nm5 = 1), 0 == _nm4) return _nm3;
            var _nm6 = _nm1.get_each_level_nums(286),
                _nm7 = 0;
            return _nm5 > 0 && _nm6.forEach(function(_nm8, _nm9) {
                _nm9 >= 7 && (_nm7 += _nm8);
            }), 'たけ' == _nm1.yomi && (_nm3.raig += 7, _nm3.kaih += 2, _nm7 >= 1 && (_nm3.raig += 2), _nm6[10] >= 1 && (_nm3.raig += 2)), _nm3;
        }, _nll.getSlot286PersonalEffect3 = function(_nma) {
            var _nmb = null,
                _nmc = new _nlr.SlotItemEffectModel(),
                _nmd = false,
                _nme = new _nlr.SlotItemEffectModel(),
                _nmf = 0;
            if (662 != _nma.ship_id && 663 != _nma.ship_id && 668 != _nma.ship_id || (_nme.raig += 2, _nmd = true, _nmf = 1), 0 == _nmd) return _nmc;
            var _nmg = _nma.get_slotnums(286);
            _nmc.add(_nme.multiply(_nmg));
            for (var _nmh = 0, _nmi = 0, _nmj = _nma.have_slot_ids(); _nmi < _nmj.length; _nmi++) {
                var _nmk = _nmj[_nmi],
                    _nml = _nls.default.model.slot.getMst(_nmk),
                    _nmm = _nml.equipType;
                12 != _nmm && 13 != _nmm || (_nml.sakuteki >= 5 && (_nmh += _nma.get_slotnums(parseInt(_nmk))), _nml.taiku >= 2 && _nma.get_slotnums(parseInt(_nmk)));
            }
            return _nmh >= 1 && 1 == _nmf && (_nmc.raig += 3, _nmc.kaih += 2), _nmc;
        };
    },
    9234: (_nmn, _nmo, _nmp) => {
        'use strict';
        var _nmq = null;
        defineModule(_nmo);
        Object.defineProperty(_nmo, '__esModule', {
            'value': true
        }), _nmo.getSlot287PersonalEffect = void 0;
        var _nmr = _nmp(74496);
        _nmo.getSlot287PersonalEffect = function(_nms) {
            var _nmt = null,
                _nmu = new _nmr.SlotItemEffectModel(),
                _nmv = new _nmr.SlotItemEffectModel(),
                _nmw = false;
            if (488 == _nms.ship_id || 141 == _nms.ship_id || 160 == _nms.ship_id || 624 == _nms.ship_id || 656 == _nms.ship_id ? (_nmv.tais = 1, _nmv.kaih = 1, _nmw = true) : 662 != _nms.ship_id && 961 != _nms.ship_id || (_nmv.tais = 3, _nmw = true), 0 == _nmw) return _nmu;
            var _nmx = _nms.get_slotnums(287);
            return _nmu = _nmv.multiply(_nmx);
        };
    },
    30802: (_nmy, _nmz, _nn0) => {
        'use strict';
        var _nn1 = null;
        defineModule(_nmz);
        Object.defineProperty(_nmz, '__esModule', {
            'value': true
        }), _nmz.getSlot288PersonalEffect = void 0;
        var _nn2 = _nn0(74496);
        _nmz.getSlot288PersonalEffect = function(_nn3) {
            var _nn4 = null,
                _nn5 = new _nn2.SlotItemEffectModel(),
                _nn6 = new _nn2.SlotItemEffectModel(),
                _nn7 = false;
            if (488 == _nn3.ship_id || 141 == _nn3.ship_id || 160 == _nn3.ship_id || 656 == _nn3.ship_id ? (_nn6.tais = 2, _nn6.kaih = 1, _nn7 = true) : 624 == _nn3.ship_id ? (_nn6.houg = 1, _nn6.tais = 3, _nn6.kaih = 2, _nn7 = true) : 662 != _nn3.ship_id && 961 != _nn3.ship_id || (_nn6.tais = 4, _nn6.kaih = 1, _nn7 = true), 0 == _nn7) return _nn5;
            var _nn8 = _nn3.get_slotnums(288);
            return _nn5 = _nn6.multiply(_nn8);
        };
    },
    97002: function(_nn9, _nna, _nnb) {
        'use strict';
        var _nnc = null;
        var _nnd = this && this.__importDefault || function(_nne) {
            var _nnf = null;
            return _nne && _nne.__esModule ? _nne : {
                'default': _nne
            };
        };
        defineModule(_nna);
        Object.defineProperty(_nna, '__esModule', {
            'value': true
        }), _nna.getSlot289PersonalEffect = void 0;
        var _nng = _nnb(74496),
            _nnh = _nnd(_nnb(18622));
        _nna.getSlot289PersonalEffect = function(_nni) {
            var _nnj = null,
                _nnk = new _nng.SlotItemEffectModel(),
                _nnl = {
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
                _nnm = 0,
                _nnn = new _nng.SlotItemEffectModel();
            if (149 == _nni.ship_id || 591 == _nni.ship_id) _nnn.houg = 2, _nnn.tyku = 1, _nnm = 1;
            else {
                if (150 == _nni.ship_id || 592 == _nni.ship_id) _nnn.houg = 1;
                else {
                    if (152 == _nni.ship_id || 694 == _nni.ship_id) _nnn.houg = 1;
                    else {
                        if (151 != _nni.ship_id && 593 != _nni.ship_id && 954 != _nni.ship_id) return _nnk;
                        _nnn.houg = 2, _nnn.tyku = 2, _nnn.kaih = 2, _nnm = 1;
                    }
                }
            }
            var _nno = _nni.get_slotnums(289);
            if (_nnk = _nnn.multiply(_nno), _nnl[_nni.ship_id]) {
                var _nnp = _nni.get_each_level_nums(289),
                    _nnq = new Array();
                _nnp.forEach(function(_nnr, _nns) {
                    var _nnt = null;
                    for (var _nnu = 1; _nnu <= _nni.SLOT_LEVEL_MAX; _nnu++) _nns >= _nnu && (null == _nnq[_nnu] && (_nnq[_nnu] = 0), _nnq[_nnu] += _nnr);
                });
                var _nnv = _nnl[_nni.ship_id];
                1 == _nnv ? (_nnq[1] >= 1 && (_nnk.kaih += 1 * _nnq[1]), _nnq[3] >= 1 && (_nnk.tyku = _nnk.tyku + 1 * _nnq[3]), _nnq[5] >= 1 && (_nnk.houg = _nnk.houg + 1 * _nnq[5]), _nnq[7] >= 1 && (_nnk.kaih += 1 * _nnq[7]), _nnq[8] >= 1 && (_nnk.tyku += 1 * _nnq[8]), _nnq[9] >= 1 && (_nnk.houg += 1 * _nnq[9]), _nnq[10] >= 1 && (_nnk.kaih += 1 * _nnq[10])) : 2 == _nnv ? (_nnq[4] >= 1 && (_nnk.tyku += 1 * _nnq[4]), _nnq[6] >= 1 && (_nnk.kaih += 1 * _nnq[6]), _nnq[8] >= 1 && (_nnk.houg += 1 * _nnq[8]), _nnq[10] >= 1 && (_nnk.kaih += 1 * _nnq[10])) : 3 == _nnv && (_nnq[7] >= 1 && (_nnk.tyku += 1 * _nnq[7]), _nnq[9] >= 1 && (_nnk.houg += 1 * _nnq[9]), _nnq[10] >= 1 && (_nnk.kaih += 1 * _nnq[10]));
            }
            if (0 == _nnm) return _nnk;
            for (var _nnw = 0, _nnx = 0, _nny = _nni.have_slot_ids(); _nnx < _nny.length; _nnx++) {
                var _nnz = _nny[_nnx],
                    _no0 = _nnh.default.model.slot.getMst(_nnz),
                    _no1 = _no0.equipType;
                (12 == _no1 || 13 == _no1) && _no0.sakuteki >= 5 && (_nnw += _nni.get_slotnums(parseInt(_nnz)));
            }
            return _nnw > 0 && (_nnk.houg += 2, _nnk.kaih += 2), _nnk;
        };
    },
    16748: function(_no2, _no3, _no4) {
        'use strict';
        var _no5 = null;
        var _no6 = this && this.__importDefault || function(_no7) {
            var _no8 = null;
            return _no7 && _no7.__esModule ? _no7 : {
                'default': _no7
            };
        };
        defineModule(_no3);
        Object.defineProperty(_no3, '__esModule', {
            'value': true
        }), _no3.getSlot290PersonalEffect = void 0;
        var _no9 = _no4(74496),
            _noa = _no6(_no4(18622));
        _no3.getSlot290PersonalEffect = function(_nob) {
            var _noc = null,
                _nod = new _no9.SlotItemEffectModel(),
                _noe = 0,
                _nof = new _no9.SlotItemEffectModel();
            if (411 == _nob.ship_id) _nof.houg = 1;
            else {
                if (412 == _nob.ship_id) _nof.houg = 1;
                else {
                    if (82 == _nob.ship_id) _nof.houg = 2, _nof.tyku = 2, _nof.kaih = 1, _noe = 1;
                    else {
                        if (553 == _nob.ship_id) _nof.houg = 3, _nof.tyku = 2, _nof.kaih = 1, _nof.houm = 3, _noe = 1;
                        else {
                            if (88 == _nob.ship_id) _nof.houg = 2, _nof.tyku = 2, _nof.kaih = 1, _noe = 1;
                            else {
                                if (554 != _nob.ship_id) return _nod;
                                _nof.houg = 3, _nof.tyku = 2, _nof.kaih = 2, _nof.houm = 3, _noe = 1;
                            }
                        }
                    }
                }
            }
            var _nog = _nob.get_slotnums(290);
            if (_nod = _nof.multiply(_nog), 0 == _noe) return _nod;
            for (var _noh = 0, _noi = 0, _noj = _nob.have_slot_ids(); _noi < _noj.length; _noi++) {
                var _nok = _noj[_noi],
                    _nol = _noa.default.model.slot.getMst(_nok),
                    _nom = _nol.equipType;
                (12 == _nom || 13 == _nom) && _nol.taiku >= 2 && (_noh += _nob.get_slotnums(parseInt(_nok)));
            }
            return _noh > 0 && (_nod.tyku += 2, _nod.kaih += 3), _nod;
        };
    },
    53618: (_non, _noo, _nop) => {
        'use strict';
        var _noq = null;
        defineModule(_noo);
        Object.defineProperty(_noo, '__esModule', {
            'value': true
        }), _noo.getSlot291PersonalEffect = void 0;
        var _nor = _nop(74496);
        _noo.getSlot291PersonalEffect = function(_nos) {
            var _not = null,
                _nou = new _nor.SlotItemEffectModel(),
                _nov = new _nor.SlotItemEffectModel();
            if (553 == _nos.ship_id) _nov.houg = 6, _nov.kaih = 1;
            else {
                if (554 != _nos.ship_id) return _nou;
                _nov.houg = 6, _nov.kaih = 1;
            }
            var _now = _nos.get_slotnums(291);
            return _nou = _nov.multiply(_now);
        };
    },
    72573: (_nox, _noy, _noz) => {
        'use strict';
        var _np0 = null;
        defineModule(_noy);
        Object.defineProperty(_noy, '__esModule', {
            'value': true
        }), _noy.getSlot292PersonalEffect = void 0;
        var _np1 = _noz(74496);
        _noy.getSlot292PersonalEffect = function(_np2) {
            var _np3 = null,
                _np4 = new _np1.SlotItemEffectModel(),
                _np5 = new _np1.SlotItemEffectModel();
            if (553 == _np2.ship_id) _np5.houg = 8, _np5.kaih = 2, _np5.tyku = 1;
            else {
                if (554 != _np2.ship_id) return _np4;
                _np5.houg = 8, _np5.kaih = 2, _np5.tyku = 1;
            }
            var _np6 = _np2.get_slotnums(292);
            return _np4 = _np5.multiply(_np6);
        };
    },
    8955: function(_np7, _np8, _np9) {
        'use strict';
        var _npa = null;
        var _npb = this && this.__importDefault || function(_npc) {
            var _npd = null;
            return _npc && _npc.__esModule ? _npc : {
                'default': _npc
            };
        };
        defineModule(_np8);
        Object.defineProperty(_np8, '__esModule', {
            'value': true
        }), _np8.getSlot293PersonalEffect = void 0;
        var _npe = _np9(74496),
            _npf = _npb(_np9(18622));
        _np8.getSlot293PersonalEffect = function(_npg) {
            var _nph = null,
                _npi = new _npe.SlotItemEffectModel(),
                _npj = new _npe.SlotItemEffectModel(),
                _npk = 0;
            if (66 == _npg.ctype || 28 == _npg.ctype) _npj.houg = 2, _npj.tyku = 1, _npj.kaih = 3, _npk = 1;
            else {
                if (74 != _npg.ctype && 77 != _npg.ctype) return _npi;
                _npj.houg = 1, _npj.tyku = 1, _npj.kaih = 2, _npk = 2;
            }
            var _npl = _npg.get_slotnums(293);
            _npi = _npj.multiply(_npl);
            for (var _npm = 0, _npn = 0, _npo = _npg.have_slot_ids(); _npn < _npo.length; _npn++) {
                var _npp = _npo[_npn],
                    _npq = _npf.default.model.slot.getMst(_npp),
                    _npr = _npq.equipType;
                (12 == _npr || 13 == _npr) && _npq.sakuteki >= 5 && (_npm += _npg.get_slotnums(parseInt(_npp)));
            }
            var _nps = _npg.get_slotnums(174);
            return 1 == _npk ? (_npm > 0 && (_npi.houg += 2, _npi.kaih += 3, _npi.raig += 1), 1 == _nps ? (_npi.houg += 2, _npi.raig += 4) : _nps >= 2 && (_npi.houg += 3, _npi.raig += 7)) : 2 == _npk && _npm > 0 && (_npi.houg += 2, _npi.kaih += 3, _npi.tais += 1), _npi;
        };
    },
    98947: function(_npt, _npu, _npv) {
        'use strict';
        var _npw = null;
        var _npx = this && this.__importDefault || function(_npy) {
            var _npz = null;
            return _npy && _npy.__esModule ? _npy : {
                'default': _npy
            };
        };
        defineModule(_npu);
        Object.defineProperty(_npu, '__esModule', {
            'value': true
        }), _npu.getSlot294PersonalEffect = void 0;
        var _nq0 = _npv(74496),
            _nq1 = _npx(_npv(18622));
        _npu.getSlot294PersonalEffect = function(_nq2) {
            var _nq3 = null,
                _nq4 = new _nq0.SlotItemEffectModel(),
                _nq5 = new _nq0.SlotItemEffectModel(),
                _nq6 = 0,
                _nq7 = _nq2.get_slotnums(294);
            if (12 != _nq2.ctype && 1 != _nq2.ctype && 5 != _nq2.ctype) return _nq4;
            _nq5.houg = 1, 959 == _nq2.ship_id && (_nq5.houg += 1, _nq7 >= 2 && (_nq4.houg += 2), _nq7 >= 3 && (_nq4.houg += 3), _nq6 = 1), _nq4.add(_nq5.multiply(_nq7));
            for (var _nq8 = 0, _nq9 = 0, _nqa = _nq2.have_slot_ids(); _nq9 < _nqa.length; _nq9++) {
                var _nqb = _nqa[_nq9],
                    _nqc = _nq1.default.model.slot.getMst(_nqb),
                    _nqd = _nqc.equipType;
                (12 == _nqd || 13 == _nqd) && _nqc.sakuteki >= 5 && (_nq8 += _nq2.get_slotnums(parseInt(_nqb)));
            }
            var _nqe = _nq2.get_slotnums(13),
                _nqf = _nq2.get_slotnums(125),
                _nqg = _nq2.get_slotnums(285),
                _nqh = _nqe + _nqf + _nqg;
            if (_nq8 > 0 && (_nq4.houg += 3, _nq4.kaih += 2, _nq4.raig += 1), 1 == _nqh ? (_nq4.houg += 1, _nq4.raig += 3) : _nqh >= 2 && (_nq4.houg += 2, _nq4.raig += 5), _nqg >= 1 && (_nq4.raig += 1), 0 == _nq6) return _nq4;
            var _nqi = _nq2.get_each_level_nums(294),
                _nqj = [];
            return _nq6 > 0 && _nqi.forEach(function(_nqk, _nql) {
                var _nqm = null;
                for (var _nqn = 1; _nqn <= _nq2.SLOT_LEVEL_MAX; _nqn++) null == _nqj[_nqn] && (_nqj[_nqn] = 0), _nql >= _nqn && (_nqj[_nqn] += _nqk);
            }), 1 == _nq6 && (_nqj[6] >= 1 && (_nq4.houm += 4 * _nqj[6]), _nqj[7] >= 1 && (_nq4.houg = _nq4.houg + 6 * _nqj[7]), _nqj[8] >= 1 && (_nq4.houg = _nq4.houg + 1 * _nqj[8]), _nqj[9] >= 1 && (_nq4.houg = _nq4.houg + 1 * _nqj[9]), _nqj[10] >= 1 && (_nq4.houg += 1 * _nqj[10])), _nq4;
        };
    },
    44726: function(_nqo, _nqp, _nqq) {
        'use strict';
        var _nqr = null;
        var _nqs = this && this.__importDefault || function(_nqt) {
            var _nqu = null;
            return _nqt && _nqt.__esModule ? _nqt : {
                'default': _nqt
            };
        };
        defineModule(_nqp);
        Object.defineProperty(_nqp, '__esModule', {
            'value': true
        }), _nqp.getSlot295PersonalEffect = void 0;
        var _nqv = _nqq(74496),
            _nqw = _nqs(_nqq(18622));
        _nqp.getSlot295PersonalEffect = function(_nqx) {
            var _nqy = null,
                _nqz = new _nqv.SlotItemEffectModel(),
                _nr0 = new _nqv.SlotItemEffectModel(),
                _nr1 = _nqx.get_slotnums(295);
            if (12 != _nqx.ctype && 1 != _nqx.ctype && 5 != _nqx.ctype) return _nqz;
            _nr0.houg = 2, _nr0.tyku = 2, 666 == _nqx.ship_id ? (_nr0.houg += 1, _nr0.tyku += 1, _nr0.tais += 1) : 959 == _nqx.ship_id && (_nr0.houg += 2, _nr1 >= 2 && (_nqz.houg += 2), _nr1 >= 3 && (_nqz.houg += 3)), _nqz.add(_nr0.multiply(_nr1));
            for (var _nr2 = 0, _nr3 = 0, _nr4 = 0, _nr5 = _nqx.have_slot_ids(); _nr4 < _nr5.length; _nr4++) {
                var _nr6 = _nr5[_nr4],
                    _nr7 = _nqw.default.model.slot.getMst(_nr6),
                    _nr8 = _nr7.equipType;
                12 != _nr8 && 13 != _nr8 || (_nr7.sakuteki >= 5 && (_nr2 += _nqx.get_slotnums(parseInt(_nr6))), _nr7.taiku >= 2 && (_nr3 += _nqx.get_slotnums(parseInt(_nr6))));
            }
            var _nr9 = _nqx.get_slotnums(13),
                _nra = _nqx.get_slotnums(125),
                _nrb = _nqx.get_slotnums(285),
                _nrc = _nr9 + _nra + _nrb;
            return _nr2 > 0 && (_nqz.houg += 3, _nqz.kaih += 2, _nqz.raig += 1), 1 == _nrc ? (_nqz.houg += 1, _nqz.raig += 3) : _nrc >= 2 && (_nqz.houg += 2, _nqz.raig += 5), _nrb >= 1 && (_nqz.raig += 1), _nr3 > 0 && (_nqz.tyku += 6), _nqz;
        };
    },
    93065: function(_nrd, _nre, _nrf) {
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
        }), _nre.getSlot296PersonalEffect = void 0;
        var _nrk = _nrf(74496),
            _nrl = _nrh(_nrf(18622));
        _nre.getSlot296PersonalEffect = function(_nrm) {
            var _nrn = null,
                _nro = new _nrk.SlotItemEffectModel(),
                _nrp = new _nrk.SlotItemEffectModel();
            1 != _nrm.ctype && 5 != _nrm.ctype && 10 != _nrm.ctype && 23 != _nrm.ctype || (_nrp.houg += 1), 10 != _nrm.ctype && 23 != _nrm.ctype || (_nrp.kaih += 1), 145 == _nrm.ship_id || 961 == _nrm.ship_id ? (_nrp.houg += 1, _nrp.tyku += 1) : 144 == _nrm.ship_id ? (_nrp.houg += 1, _nrp.raig += 1) : 469 == _nrm.ship_id || 588 == _nrm.ship_id || 667 == _nrm.ship_id || 587 == _nrm.ship_id || 242 == _nrm.ship_id ? _nrp.kaih += 1 : 497 == _nrm.ship_id ? (_nrp.houg += 1, _nrp.kaih += 1) : 244 == _nrm.ship_id ? _nrp.kaih += 1 : 498 == _nrm.ship_id || 975 == _nrm.ship_id ? (_nrp.tyku += 1, _nrp.kaih += 1) : 627 == _nrm.ship_id ? (_nrp.houg += 2, _nrp.raig += 1) : 903 != _nrm.ship_id && 908 != _nrm.ship_id || (_nrp.houg += 3);
            var _nrq = true;
            if (_nrp.exists() || (_nrq = false), 0 == _nrq) return _nro;
            var _nrr = _nrm.get_slotnums(296);
            _nro = _nrp.multiply(_nrr);
            var _nrs = 0;
            if (1 != _nrm.ctype && 5 != _nrm.ctype && 10 != _nrm.ctype || (_nrs = 1), 23 == _nrm.ctype && (_nrs = 2), 0 == _nrs) return _nro;
            for (var _nrt = 0, _nru = 0, _nrv = 0, _nrw = _nrm.have_slot_ids(); _nrv < _nrw.length; _nrv++) {
                var _nrx = _nrw[_nrv],
                    _nry = _nrl.default.model.slot.getMst(_nrx),
                    _nrz = _nry.equipType;
                12 != _nrz && 13 != _nrz || (_nry.sakuteki >= 5 && (_nrt += _nrm.get_slotnums(parseInt(_nrx))), _nry.taiku >= 2 && (_nru += _nrm.get_slotnums(parseInt(_nrx))));
            }
            return _nrt > 0 && (1 == _nrs ? (_nro.houg += 1, _nro.kaih += 2, _nro.raig += 2) : 2 == _nrs && (_nro.houg += 1, _nro.kaih += 2, _nro.raig += 3)), _nrm.get_slotnums(285) + _nrm.get_slotnums(125) >= 1 && 1 == _nrs && (_nro.houg += 1, _nro.raig += 3), _nrm.get_slotnums(15) + _nrm.get_slotnums(286) >= 1 && 2 == _nrs && (_nro.houg += 1, _nro.raig += 3), _nru > 0 && (1 == _nrs ? _nro.tyku += 5 : 2 == _nrs && (_nro.tyku += 6)), _nro;
        };
    },
    85767: (_ns0, _ns1, _ns2) => {
        'use strict';
        var _ns3 = null;
        defineModule(_ns1);
        Object.defineProperty(_ns1, '__esModule', {
            'value': true
        }), _ns1.getSlot297PersonalEffect = void 0;
        var _ns4 = _ns2(74496);
        _ns1.getSlot297PersonalEffect = function(_ns5) {
            var _ns6 = null,
                _ns7 = new _ns4.SlotItemEffectModel(),
                _ns8 = new _ns4.SlotItemEffectModel();
            if (12 == _ns5.ctype) _ns8.kaih = 2;
            else {
                if (1 != _ns5.ctype && 5 != _ns5.ctype) return _ns7;
                _ns8.kaih = 1;
            }
            var _ns9 = _ns5.get_slotnums(297);
            return _ns7 = _ns8.multiply(_ns9);
        };
    },
    38314: (_nsa, _nsb, _nsc) => {
        'use strict';
        var _nsd = null;
        defineModule(_nsb);
        Object.defineProperty(_nsb, '__esModule', {
            'value': true
        }), _nsb.getSlot301PersonalEffect = void 0;
        var _nse = _nsc(74496);
        _nsb.getSlot301PersonalEffect = function(_nsf) {
            var _nsg = null,
                _nsh = new _nse.SlotItemEffectModel(),
                _nsi = new _nse.SlotItemEffectModel();
            67 != _nsf.ctype && 78 != _nsf.ctype && 82 != _nsf.ctype && 88 != _nsf.ctype && 108 != _nsf.ctype && 112 != _nsf.ctype || (_nsi.tyku += 2, _nsi.kaih += 1, _nsi.souk += 1);
            var _nsj = true;
            if (_nsi.exists() || (_nsj = false), 0 == _nsj) return _nsh;
            var _nsk = _nsf.get_slotnums(301);
            return _nsh = _nsi.multiply(_nsk);
        };
    },
    59747: (_nsl, _nsm, _nsn) => {
        'use strict';
        var _nso = null;
        defineModule(_nsm);
        Object.defineProperty(_nsm, '__esModule', {
            'value': true
        }), _nsm.getSlot302PersonalEffect = void 0;
        var _nsp = _nsn(74496);
        _nsm.getSlot302PersonalEffect = function(_nsq) {
            var _nsr = null,
                _nss = new _nsp.SlotItemEffectModel(),
                _nst = new _nsp.SlotItemEffectModel();
            if (76 == _nsq.ctype && (_nst.tais = 1, _nst.kaih = 1), !_nst.exists()) return _nss;
            var _nsu = _nsq.get_slotnums(302);
            return _nss = _nst.multiply(_nsu);
        };
    },
    40649: (_nsv, _nsw, _nsx) => {
        'use strict';
        var _nsy = null;
        defineModule(_nsw);
        Object.defineProperty(_nsw, '__esModule', {
            'value': true
        }), _nsw.getSlot303PersonalEffect = void 0;
        var _nsz = _nsx(74496);
        _nsw.getSlot303PersonalEffect = function(_nt0) {
            var _nt1 = null,
                _nt2 = new _nsz.SlotItemEffectModel(),
                _nt3 = new _nsz.SlotItemEffectModel();
            if (16 == _nt0.ctype || 4 == _nt0.ctype || 20 == _nt0.ctype || 41 == _nt0.ctype ? (_nt3.houg = 1, _nt3.tyku = 1) : 89 == _nt0.ctype && (_nt3.houg = 1, _nt3.tyku = 2, _nt3.kaih = 1), !_nt3.exists()) return _nt2;
            var _nt4 = _nt0.get_slotnums(303);
            return _nt2 = _nt3.multiply(_nt4);
        };
    },
    13533: (_nt5, _nt6, _nt7) => {
        'use strict';
        var _nt8 = null;
        defineModule(_nt6);
        Object.defineProperty(_nt6, '__esModule', {
            'value': true
        }), _nt6.getSlot304PersonalEffect = void 0;
        var _nt9 = _nt7(74496);
        _nt6.getSlot304PersonalEffect = function(_nta) {
            var _ntb = null,
                _ntc = new _nt9.SlotItemEffectModel(),
                _ntd = new _nt9.SlotItemEffectModel();
            if (16 == _nta.ctype || 4 == _nta.ctype || 20 == _nta.ctype || 41 == _nta.ctype ? (_ntd.houg = 1, _ntd.tais = 1, _ntd.kaih = 1) : 89 == _nta.ctype && (_ntd.houg = 1, _ntd.tais = 2, _ntd.kaih = 2), !_ntd.exists()) return _ntc;
            var _nte = _nta.get_slotnums(304);
            return _ntc = _ntd.multiply(_nte);
        };
    },
    99791: (_ntf, _ntg, _nth) => {
        'use strict';
        var _nti = null;
        defineModule(_ntg);
        Object.defineProperty(_ntg, '__esModule', {
            'value': true
        }), _ntg.getSlot305More320mmGunPersonalEffect = void 0;
        var _ntj = _nth(74496);
        _ntg.getSlot305More320mmGunPersonalEffect = function(_ntk) {
            var _ntl = null,
                _ntm = new _ntj.SlotItemEffectModel(),
                _ntn = _ntk.get_slotnums(426),
                _nto = _ntk.get_slotnums(427),
                _ntp = _ntk.get_slotnums(428),
                _ntq = _ntk.get_slotnums(429),
                _ntr = _ntn + _nto + _ntp + _ntq;
            return 113 == _ntk.ctype ? (_ntm.houg = _ntm.houg + 2 * _ntr, _ntn >= 1 && (_ntm.houg = _ntm.houg + 1 * _ntn, _ntm.kaih = _ntm.kaih + 1 * _ntn, (_ntn >= 2 || _nto >= 1) && (_ntm.houg = _ntm.houg + 1, _ntm.kaih = _ntm.kaih + 1)), _ntp >= 1 && (_ntm.houg = _ntm.houg + 1 * _ntp, _ntm.kaih = _ntm.kaih + 1 * _ntp, (_ntp >= 2 || _ntq >= 1) && (_ntm.houg = _ntm.houg + 2, _ntm.kaih = _ntm.kaih + 1))) : 73 == _ntk.ctype ? (_ntm.houg = _ntm.houg + 1 * _ntr, _ntn >= 1 && (_ntm.houg = _ntm.houg + 1 * _ntn, _ntm.kaih = _ntm.kaih + 1 * _ntn, (_ntn >= 2 || _nto >= 1) && (_ntm.houg = _ntm.houg + 1)), _ntp >= 1 && (_ntm.houg = _ntm.houg + 1 * _ntp, _ntm.kaih = _ntm.kaih + 1 * _ntp, (_ntp >= 2 || _ntq >= 1) && (_ntm.houg = _ntm.houg + 1))) : 58 == _ntk.ctype && _ntp >= 1 && (_ntm.houg = _ntm.houg + 1 * _ntp, _ntm.kaih = _ntm.kaih + 2 * _ntp, (_ntp >= 2 || _ntq >= 1) && (_ntm.houg = _ntm.houg + 2, _ntm.kaih = _ntm.kaih + 1)), _ntm;
        };
    },
    12138: (_nts, _ntt, _ntu) => {
        'use strict';
        var _ntv = null;
        defineModule(_ntt);
        Object.defineProperty(_ntt, '__esModule', {
            'value': true
        }), _ntt.getSlot305_And_306_PersonalEffect = void 0;
        var _ntw = _ntu(74496);
        _ntt.getSlot305_And_306_PersonalEffect = function(_ntx) {
            var _nty = null,
                _ntz = new _ntw.SlotItemEffectModel(),
                _nu0 = new _ntw.SlotItemEffectModel();
            if (76 == _ntx.ctype && (_nu0.tais = 1, _nu0.kaih = 1), 'しんよう' == _ntx.yomi ? (_nu0.tais += 2, _nu0.kaih += 1) : 'グラーフ・ツェッペリン' != _ntx.yomi && 'アクィラ' != _ntx.yomi || (_nu0.houg = 1, _nu0.kaih = 1), !_nu0.exists()) return _ntz;
            var _nu1 = _ntx.get_slotnums(305) + _ntx.get_slotnums(306);
            return _ntz = _nu0.multiply(_nu1);
        };
    },
    30042: (_nu2, _nu3, _nu4) => {
        'use strict';
        var _nu5 = null;
        defineModule(_nu3);
        Object.defineProperty(_nu3, '__esModule', {
            'value': true
        }), _nu3.getSlot307PersonalEffect = void 0;
        var _nu6 = _nu4(74496);
        _nu3.getSlot307PersonalEffect = function(_nu7) {
            var _nu8 = null,
                _nu9 = new _nu6.SlotItemEffectModel(),
                _nua = new _nu6.SlotItemEffectModel();
            if ('アメリカ' == _nu7.getCountryName() && (_nua.houg = 1, _nua.tyku = 1, _nua.kaih = 1), !_nua.exists()) return _nu9;
            var _nub = _nu7.get_slotnums(307);
            return _nu9 = _nua.multiply(_nub);
        };
    },
    33623: (_nuc, _nud, _nue) => {
        'use strict';
        var _nuf = null;
        defineModule(_nud);
        Object.defineProperty(_nud, '__esModule', {
            'value': true
        }), _nud.getSlot308PersonalEffect = void 0;
        var _nug = _nue(74496);
        _nud.getSlot308PersonalEffect = function(_nuh) {
            var _nui = null,
                _nuj = new _nug.SlotItemEffectModel(),
                _nuk = new _nug.SlotItemEffectModel();
            if ('アメリカ' == _nuh.getCountryName() && (_nuk.houg = 1, _nuk.tyku = 1, _nuk.kaih = 1), 2 == _nuh.stype ? _nuk.houg += 1 : 1 == _nuh.stype && (_nuk.tyku += 1, _nuk.kaih += 1), 651 != _nuh.ship_id && 656 != _nuh.ship_id || (_nuk.houg += 1, _nuk.tyku += 1, _nuk.kaih += 1), !_nuk.exists()) return _nuj;
            var _nul = _nuh.get_slotnums(308);
            return _nuj = _nuk.multiply(_nul);
        };
    },
    17732: (_num, _nun, _nuo) => {
        'use strict';
        var _nup = null;
        defineModule(_nun);
        Object.defineProperty(_nun, '__esModule', {
            'value': true
        }), _nun.getSlot30_410PersonalEffect = void 0;
        var _nuq = _nuo(74496);
        _nun.getSlot30_410PersonalEffect = function(_nur) {
            var _nus = null,
                _nut = new _nuq.SlotItemEffectModel();
            return 73 != _nur.ship_id && 501 != _nur.ship_id && 506 != _nur.ship_id && 502 != _nur.ship_id && 507 != _nur.ship_id || (_nut.tyku += 3, _nut.kaih += 2, _nut.saku += 2, _nur.get_slotnums(410) >= 1 && (_nut.tyku += 2, _nut.kaih += 2, _nut.houg += 1, _nut.souk += 1)), 54 == _nur.ctype && (_nut.tyku += 3, _nut.kaih += 2, _nut.saku += 2, _nur.get_slotnums(410) >= 1 && (_nut.tyku += 2, _nut.kaih += 2, _nut.houg += 1, _nut.souk += 1, 968 == _nur.ship_id && (_nut.houg += 1, _nut.tyku += 1, _nut.kaih += 1))), _nut;
        };
    },
    85630: function(_nuu, _nuv, _nuw) {
        'use strict';
        var _nux = null;
        var _nuy = this && this.__importDefault || function(_nuz) {
            var _nv0 = null;
            return _nuz && _nuz.__esModule ? _nuz : {
                'default': _nuz
            };
        };
        defineModule(_nuv);
        Object.defineProperty(_nuv, '__esModule', {
            'value': true
        }), _nuv.getSlot310PersonalEffect = void 0;
        var _nv1 = _nuw(74496),
            _nv2 = _nuy(_nuw(18622));
        _nuv.getSlot310PersonalEffect = function(_nv3) {
            var _nv4 = null,
                _nv5 = new _nv1.SlotItemEffectModel(),
                _nv6 = new _nv1.SlotItemEffectModel(),
                _nv7 = new _nv1.SlotItemEffectModel();
            34 == _nv3.ctype ? (_nv6.houg += 2, _nv6.tyku += 1, _nv6.kaih += 1, _nv7.houg += 2) : 56 == _nv3.ctype ? (_nv6.houg += 2, _nv6.kaih += 1, _nv7.houg += 2, _nv7.kaih += 2) : 90 == _nv3.ctype && (_nv6.houg += 3, _nv6.raig += 2, _nv6.tyku += 1, _nv6.kaih += 1, _nv7.houg += 1, _nv7.raig += 1);
            var _nv8 = new _nv1.SlotItemEffectModel(),
                _nv9 = new _nv1.SlotItemEffectModel();
            622 != _nv3.ship_id && 623 != _nv3.ship_id && 624 != _nv3.ship_id || (_nv6.houg += 2, _nv6.kaih += 1, _nv6.tais += 1, _nv8.houg = 1, _nv8.raig = 1, _nv9.houg = 3, _nv9.kaih = 2, _nv9.raig = 2);
            var _nva = true;
            if (_nv6.exists() || (_nva = false), 0 == _nva) return _nv5;
            var _nvb = _nv3.get_slotnums(310) + _nv3.get_slotnums(518);
            _nv5 = _nv6.multiply(_nvb);
            for (var _nvc = 0, _nvd = 0, _nve = 0, _nvf = [310, 518]; _nve < _nvf.length; _nve++) {
                var _nvg = _nvf[_nve],
                    _nvh = _nv3.have_slots_dict[_nvg];
                if (null != _nvh)
                    for (var _nvi = 0, _nvj = _nvh; _nvi < _nvj.length; _nvi++) {
                        var _nvk = _nvj[_nvi];
                        null != _nvk && (_nvk.level >= 7 && _nvc++, _nvk.level >= 10 && _nvd++);
                    }
            }
            if (_nv8.exists() && _nvc > 0 && _nv5.add(_nv8.multiply(_nvc)), _nv7.exists() && _nvd > 0 && _nv5.add(_nv7.multiply(_nvd)), _nv9.exists()) {
                for (var _nvl = 0, _nvm = 0, _nvn = _nv3.have_slot_ids(); _nvm < _nvn.length; _nvm++) {
                    var _nvo = _nvn[_nvm],
                        _nvp = _nv2.default.model.slot.getMst(_nvo),
                        _nvq = _nvp.equipType;
                    (12 == _nvq || 13 == _nvq) && _nvp.sakuteki >= 5 && (_nvl += _nv3.get_slotnums(parseInt(_nvo)));
                }
                _nvl > 0 && _nv5.add(_nv9);
            }
            return _nv5;
        };
    },
    88736: (_nvr, _nvs, _nvt) => {
        'use strict';
        var _nvu = null;
        defineModule(_nvs);
        Object.defineProperty(_nvs, '__esModule', {
            'value': true
        }), _nvs.getSlot313PersonalEffect = void 0;
        var _nvv = _nvt(74496);
        _nvs.getSlot313PersonalEffect = function(_nvw) {
            var _nvx = null,
                _nvy = new _nvv.SlotItemEffectModel(),
                _nvz = new _nvv.SlotItemEffectModel();
            87 != _nvw.ctype && 91 != _nvw.ctype || (_nvz.houg += 2, _nvz.tyku += 2, _nvz.kaih += 1, _nvz.souk += 1), 651 != _nvw.ship_id && 656 != _nvw.ship_id || (_nvz.houg += 2, _nvz.tyku += 2, _nvz.kaih += 1, _nvz.souk += 1);
            var _nw0 = true;
            if (_nvz.exists() || (_nw0 = false), 0 == _nw0) return _nvy;
            var _nw1 = _nvw.get_slotnums(313);
            return _nvy = _nvz.multiply(_nw1);
        };
    },
    49341: (_nw2, _nw3, _nw4) => {
        'use strict';
        var _nw5 = null;
        defineModule(_nw3);
        Object.defineProperty(_nw3, '__esModule', {
            'value': true
        }), _nw3.getSlot314PersonalEffect = void 0;
        var _nw6 = _nw4(74496);
        _nw3.getSlot314PersonalEffect = function(_nw7) {
            var _nw8 = null,
                _nw9 = new _nw6.SlotItemEffectModel(),
                _nwa = new _nw6.SlotItemEffectModel();
            87 != _nw7.ctype && 91 != _nw7.ctype || (_nwa.houg += 1, _nwa.raig += 3);
            var _nwb = true;
            if (_nwa.exists() || (_nwb = false), 0 == _nwb) return _nw9;
            var _nwc = _nw7.get_slotnums(314);
            return _nw9 = _nwa.multiply(_nwc);
        };
    },
    74306: (_nwd, _nwe, _nwf) => {
        'use strict';
        var _nwg = null;
        defineModule(_nwe);
        Object.defineProperty(_nwe, '__esModule', {
            'value': true
        }), _nwe.getSlot315PersonalEffect = void 0;
        var _nwh = _nwf(74496);
        _nwe.getSlot315PersonalEffect = function(_nwi) {
            var _nwj = null,
                _nwk = new _nwh.SlotItemEffectModel(),
                _nwl = new _nwh.SlotItemEffectModel();
            'アメリカ' == _nwi.getCountryName() && (_nwl.houg += 2, _nwl.kaih += 3, _nwl.saku += 4), 87 != _nwi.ctype && 91 != _nwi.ctype || (_nwl.houg += 1, _nwk.leng += 1), 651 != _nwi.ship_id && 656 != _nwi.ship_id || (_nwk.houg += 2, _nwk.kaih += 2, _nwk.saku += 3, _nwk.leng += 1);
            var _nwm = true;
            if (_nwl.exists() || (_nwm = false), 0 == _nwm) return _nwk;
            var _nwn = _nwi.get_slotnums(315);
            return _nwk.add(_nwl.multiply(_nwn)), _nwk;
        };
    },
    83898: (_nwo, _nwp, _nwq) => {
        'use strict';
        var _nwr = null;
        defineModule(_nwp);
        Object.defineProperty(_nwp, '__esModule', {
            'value': true
        }), _nwp.getSlot316PersonalEffect = void 0;
        var _nws = _nwq(74496);
        _nwp.getSlot316PersonalEffect = function(_nwt) {
            var _nwu = null,
                _nwv = new _nws.SlotItemEffectModel(),
                _nww = new _nws.SlotItemEffectModel();
            if (68 == _nwt.ctype) {
                if (_nww.houg += 4, _nww.tyku += 1, _nww.kaih += 1, !_nww.exists()) return _nwv;
                var _nwx = _nwt.get_slotnums(316);
                _nwv = _nww.multiply(_nwx);
            }
            return _nwv;
        };
    },
    71873: (_nwy, _nwz, _nx0) => {
        'use strict';
        var _nx1 = null;
        defineModule(_nwz);
        Object.defineProperty(_nwz, '__esModule', {
            'value': true
        }), _nwz.getSlot317PersonalEffect = void 0;
        var _nx2 = _nx0(74496);
        _nwz.getSlot317PersonalEffect = function(_nx3) {
            var _nx4 = null,
                _nx5 = new _nx2.SlotItemEffectModel(),
                _nx6 = new _nx2.SlotItemEffectModel(),
                _nx7 = 0,
                _nx8 = false;
            if (6 == _nx3.ctype ? (_nx6.houg += 2, _nx6.tyku += 1, _nx7 = 1, _nx8 = true) : 2 == _nx3.ctype && (_nx6.houg += 1, _nx6.tyku += 1, _nx6.kaih += 1, _nx7 = 2, _nx8 = true), 149 == _nx3.ship_id || 591 == _nx3.ship_id || 592 == _nx3.ship_id ? (_nx6.houg += 2, _nx6.tyku += 2, _nx8 = true) : 150 == _nx3.ship_id ? (_nx6.houg += 1, _nx6.tyku += 1, _nx8 = true) : 151 == _nx3.ship_id ? (_nx6.houg += 1, _nx6.tyku += 1, _nx6.kaih += 1, _nx8 = true) : 593 == _nx3.ship_id ? (_nx6.houg += 1, _nx6.tyku += 3, _nx6.kaih += 2, _nx8 = true) : 954 == _nx3.ship_id ? (_nx6.houg += 2, _nx6.tyku += 2, _nx6.kaih += 1, _nx8 = true) : 152 == _nx3.ship_id || 694 == _nx3.ship_id ? (_nx6.houg += 2, _nx6.tyku += 1, _nx8 = true) : 541 == _nx3.ship_id ? (_nx6.houg += 1, _nx6.tyku += 2, _nx8 = true) : 573 == _nx3.ship_id && (_nx6.houg += 2, _nx6.tyku += 2, _nx6.kaih += 1, _nx8 = true), 0 == _nx8) return _nx5;
            if (_nx5.add(_nx6), 0 == _nx7) return _nx5;
            var _nx9 = _nx3.get_each_level_nums(317),
                _nxa = [];
            return _nx7 > 0 && _nx9.forEach(function(_nxb, _nxc) {
                var _nxd = null;
                for (var _nxe = 1; _nxe <= _nx3.SLOT_LEVEL_MAX; _nxe++) null == _nxa[_nxe] && (_nxa[_nxe] = 0), _nxc >= _nxe && (_nxa[_nxe] += _nxb);
            }), 1 == _nx7 ? _nxa[8] >= 1 && (_nx5.houm += 1) : 2 == _nx7 && _nx9[10] >= 1 && (_nx5.houm += 1), _nx5;
        };
    },
    53122: function(_nxf, _nxg, _nxh) {
        'use strict';
        var _nxi = null;
        var _nxj = this && this.__importDefault || function(_nxk) {
            var _nxl = null;
            return _nxk && _nxk.__esModule ? _nxk : {
                'default': _nxk
            };
        };
        defineModule(_nxg);
        Object.defineProperty(_nxg, '__esModule', {
            'value': true
        }), _nxg.getSlot318PersonalEffect = void 0;
        var _nxm = _nxh(74496),
            _nxn = _nxj(_nxh(18622));
        _nxg.getSlot318PersonalEffect = function(_nxo) {
            var _nxp = null,
                _nxq = new _nxm.SlotItemEffectModel(),
                _nxr = new _nxm.SlotItemEffectModel(),
                _nxs = new _nxm.SlotItemEffectModel(),
                _nxt = new _nxm.SlotItemEffectModel();
            if (411 == _nxo.ship_id || 412 == _nxo.ship_id ? _nxr.houg += 1 : 82 == _nxo.ship_id ? (_nxr.houg += 2, _nxr.tyku += 2, _nxr.kaih += 2, _nxt.tyku = 2, _nxt.kaih = 3, _nxt.houm = 1) : 553 == _nxo.ship_id ? (_nxr.houg += 2, _nxr.tyku += 2, _nxr.kaih += 2, _nxr.houm += 3, _nxt.tyku = 2, _nxt.kaih = 3, _nxt.houm = 1, _nxs.kaih = 2, _nxs.souk = 1) : 88 == _nxo.ship_id ? (_nxr.houg += 2, _nxr.tyku += 2, _nxr.kaih += 2, _nxt.tyku = 2, _nxt.kaih = 3, _nxt.houm = 1) : 541 == _nxo.ship_id || 573 == _nxo.ship_id ? (_nxr.houg += 3, _nxr.tyku += 2, _nxr.kaih += 1, _nxr.houm += 2, _nxs.houg = 2, _nxs.kaih = 2, _nxs.souk = 1, _nxs.houm = 1) : 554 == _nxo.ship_id && (_nxr.houg += 3, _nxr.tyku += 2, _nxr.kaih += 2, _nxr.houm += 3, _nxt.tyku = 2, _nxt.kaih = 3, _nxt.houm = 1, _nxs.houg = 1, _nxs.kaih = 2, _nxs.souk = 1, _nxs.houm = 1), !_nxr.exists()) return _nxq;
            var _nxu = _nxo.get_slotnums(318);
            if (_nxq = _nxr.multiply(_nxu), !_nxs.exists() && !_nxt.exists()) return _nxq;
            for (var _nxv = 0, _nxw = 0, _nxx = _nxo.have_slot_ids(); _nxw < _nxx.length; _nxw++) {
                var _nxy = _nxx[_nxw],
                    _nxz = _nxn.default.model.slot.getMst(_nxy),
                    _ny0 = _nxz.equipType;
                (12 == _ny0 || 13 == _ny0) && _nxz.taiku >= 2 && (_nxv += _nxo.get_slotnums(parseInt(_nxy)));
            }
            var _ny1 = _nxo.get_slotnums(290);
            return _nxt.exists() && _nxv > 0 && 0 == _ny1 && _nxq.add(_nxt), _nxs.exists() && _ny1 >= 1 && _nxq.add(_nxs), _nxq;
        };
    },
    51063: (_ny2, _ny3, _ny4) => {
        'use strict';
        var _ny5 = null;
        defineModule(_ny3);
        Object.defineProperty(_ny3, '__esModule', {
            'value': true
        }), _ny3.getSlot319PersonalEffect = void 0;
        var _ny6 = _ny4(74496);
        _ny3.getSlot319PersonalEffect = function(_ny7) {
            var _ny8 = null,
                _ny9 = new _ny6.SlotItemEffectModel(),
                _nya = new _ny6.SlotItemEffectModel();
            if (554 != _ny7.ship_id && 553 != _ny7.ship_id || (_nya.houg = 7, _nya.tyku = 3, _nya.kaih = 2), !_nya.exists()) return _ny9;
            var _nyb = _ny7.get_slotnums(319);
            return _ny9 = _nya.multiply(_nyb);
        };
    },
    91491: (_nyc, _nyd, _nye) => {
        'use strict';
        var _nyf = null;
        defineModule(_nyd);
        Object.defineProperty(_nyd, '__esModule', {
            'value': true
        }), _nyd.getSlot320PersonalEffect = void 0;
        var _nyg = _nye(74496);
        _nyd.getSlot320PersonalEffect = function(_nyh) {
            var _nyi = null,
                _nyj = new _nyg.SlotItemEffectModel(),
                _nyk = new _nyg.SlotItemEffectModel();
            if (553 == _nyh.ship_id) _nyk.houg = 2;
            else {
                if (554 == _nyh.ship_id) _nyk.houg = 4;
                else {
                    if (196 == _nyh.ship_id) _nyk.houg = 3;
                    else {
                        if (197 == _nyh.ship_id) _nyk.houg = 3;
                        else {
                            if (508 == _nyh.ship_id) _nyk.houg = 4;
                            else {
                                if (509 != _nyh.ship_id) return _nyj;
                                _nyk.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nyl = _nyh.get_slotnums(320);
            return _nyj = _nyk.multiply(_nyl);
        };
    },
    85495: (_nym, _nyn, _nyo) => {
        'use strict';
        var _nyp = null;
        defineModule(_nyn);
        Object.defineProperty(_nyn, '__esModule', {
            'value': true
        }), _nyn.getSlot322PersonalEffect = void 0;
        var _nyq = _nyo(74496);
        _nyn.getSlot322PersonalEffect = function(_nyr) {
            var _nys = null,
                _nyt = new _nyq.SlotItemEffectModel(),
                _nyu = new _nyq.SlotItemEffectModel();
            if (554 != _nyr.ship_id && 553 != _nyr.ship_id || (_nyu.houg = 5, _nyu.tyku = 2, _nyu.kaih = 2, _nyu.tais = 1), !_nyu.exists()) return _nyt;
            var _nyv = _nyr.get_slotnums(322);
            return _nyt = _nyu.multiply(_nyv);
        };
    },
    65365: (_nyw, _nyx, _nyy) => {
        'use strict';
        var _nyz = null;
        defineModule(_nyx);
        Object.defineProperty(_nyx, '__esModule', {
            'value': true
        }), _nyx.getSlot323PersonalEffect = void 0;
        var _nz0 = _nyy(74496);
        _nyx.getSlot323PersonalEffect = function(_nz1) {
            var _nz2 = null,
                _nz3 = new _nz0.SlotItemEffectModel(),
                _nz4 = new _nz0.SlotItemEffectModel();
            if (554 != _nz1.ship_id && 553 != _nz1.ship_id || (_nz4.houg = 6, _nz4.tyku = 3, _nz4.kaih = 3, _nz4.tais = 2), !_nz4.exists()) return _nz3;
            var _nz5 = _nz1.get_slotnums(323);
            return _nz3 = _nz4.multiply(_nz5);
        };
    },
    98164: (_nz6, _nz7, _nz8) => {
        'use strict';
        var _nz9 = null;
        defineModule(_nz7);
        Object.defineProperty(_nz7, '__esModule', {
            'value': true
        }), _nz7.getSlot324And325PersonalEffect = void 0;
        var _nza = _nz8(74496);
        _nz7.getSlot324And325PersonalEffect = function(_nzb) {
            var _nzc = null,
                _nzd = new _nza.SlotItemEffectModel(),
                _nze = new _nza.SlotItemEffectModel();
            if (554 == _nzb.ship_id || 646 == _nzb.ship_id ? (_nze.houg = 2, _nze.tais = 3, _nze.kaih = 1) : 553 == _nzb.ship_id && (_nze.houg = 1, _nze.tais = 2, _nze.kaih = 1), !_nze.exists()) return _nzd;
            var _nzf = _nzb.get_slotnums(324) + _nzb.get_slotnums(325);
            return _nzd = _nze.multiply(_nzf);
        };
    },
    38114: (_nzg, _nzh, _nzi) => {
        'use strict';
        var _nzj = null;
        defineModule(_nzh);
        Object.defineProperty(_nzh, '__esModule', {
            'value': true
        }), _nzh.getSlot326PersonalEffect = void 0;
        var _nzk = _nzi(74496);
        _nzh.getSlot326PersonalEffect = function(_nzl) {
            var _nzm = null,
                _nzn = new _nzk.SlotItemEffectModel(),
                _nzo = new _nzk.SlotItemEffectModel();
            if (646 == _nzl.ship_id ? (_nzo.houg = 3, _nzo.tais = 5, _nzo.kaih = 3) : 554 == _nzl.ship_id ? (_nzo.houg = 3, _nzo.tais = 4, _nzo.kaih = 2) : 553 == _nzl.ship_id && (_nzo.houg = 1, _nzo.tais = 3, _nzo.kaih = 1), !_nzo.exists()) return _nzn;
            var _nzp = _nzl.get_slotnums(326);
            return _nzn = _nzo.multiply(_nzp);
        };
    },
    21003: (_nzq, _nzr, _nzs) => {
        'use strict';
        var _nzt = null;
        defineModule(_nzr);
        Object.defineProperty(_nzr, '__esModule', {
            'value': true
        }), _nzr.getSlot327PersonalEffect = void 0;
        var _nzu = _nzs(74496);
        _nzr.getSlot327PersonalEffect = function(_nzv) {
            var _nzw = null,
                _nzx = new _nzu.SlotItemEffectModel(),
                _nzy = new _nzu.SlotItemEffectModel();
            if (646 == _nzv.ship_id ? (_nzy.houg = 5, _nzy.tais = 6, _nzy.kaih = 4) : 554 == _nzv.ship_id ? (_nzy.houg = 4, _nzy.tais = 5, _nzy.kaih = 2) : 553 == _nzv.ship_id && (_nzy.houg = 2, _nzy.tais = 4, _nzy.kaih = 1), !_nzy.exists()) return _nzx;
            var _nzz = _nzv.get_slotnums(327);
            return _nzx = _nzy.multiply(_nzz);
        };
    },
    77010: (_o00, _o01, _o02) => {
        'use strict';
        var _o03 = null;
        defineModule(_o01);
        Object.defineProperty(_o01, '__esModule', {
            'value': true
        }), _o01.getSlot328PersonalEffect = void 0;
        var _o04 = _o02(74496);
        _o01.getSlot328PersonalEffect = function(_o05) {
            var _o06 = null,
                _o07 = new _o04.SlotItemEffectModel(),
                _o08 = new _o04.SlotItemEffectModel();
            if ('こんごう' == _o05.yomi ? (_o08.houg = 1, _o08.kaih = 1, 209 == _o05.ship_id || 149 == _o05.ship_id ? _o08.houg += 1 : 591 == _o05.ship_id && (_o08.houg += 2, _o08.raig += 1)) : 'ひえい' == _o05.yomi ? (_o08.houg = 1, _o08.kaih = 1, 210 == _o05.ship_id || 150 == _o05.ship_id ? _o08.houg += 1 : 592 == _o05.ship_id && (_o08.houg += 2, _o08.tyku += 1)) : 'はるな' == _o05.yomi ? (_o08.houg = 1, _o08.kaih = 1, 211 == _o05.ship_id || 151 == _o05.ship_id ? _o08.houg += 1 : 593 == _o05.ship_id ? (_o08.houg += 1, _o08.tyku += 2) : 954 == _o05.ship_id && (_o08.houg += 2, _o08.tyku += 1)) : 'きりしま' == _o05.yomi ? (_o08.houg = 1, _o08.kaih = 1, 212 == _o05.ship_id || 152 == _o05.ship_id ? _o08.houg += 1 : 694 == _o05.ship_id && (_o08.houg += 2, _o08.tyku += 1)) : ('ふそう' == _o05.yomi || 'やましろ' == _o05.yomi || 'いせ' == _o05.yomi || 'ひゅうが' == _o05.yomi) && (_o08.houg = 1), !_o08.exists()) return _o07;
            var _o09 = _o05.get_slotnums(328);
            return _o07 = _o08.multiply(_o09);
        };
    },
    39126: (_o0a, _o0b, _o0c) => {
        'use strict';
        var _o0d = null;
        defineModule(_o0b);
        Object.defineProperty(_o0b, '__esModule', {
            'value': true
        }), _o0b.getSlot329PersonalEffect = void 0;
        var _o0e = _o0c(74496);
        _o0b.getSlot329PersonalEffect = function(_o0f) {
            var _o0g = null,
                _o0h = new _o0e.SlotItemEffectModel(),
                _o0i = new _o0e.SlotItemEffectModel();
            if ('こんごう' == _o0f.yomi ? (_o0i.houg = 1, _o0i.kaih = 1, 209 == _o0f.ship_id ? _o0i.houg += 1 : 149 == _o0f.ship_id ? (_o0i.houg += 2, _o0i.tyku += 1) : 591 == _o0f.ship_id && (_o0i.houg += 3, _o0i.tyku += 1, _o0i.raig += 2)) : 'ひえい' == _o0f.yomi ? (_o0i.houg = 1, _o0i.kaih = 1, 210 == _o0f.ship_id ? _o0i.houg += 1 : 150 == _o0f.ship_id ? (_o0i.houg += 2, _o0i.tyku += 1) : 592 == _o0f.ship_id && (_o0i.houg += 3, _o0i.tyku += 1, _o0i.raig += 2)) : 'はるな' == _o0f.yomi ? (_o0i.houg = 1, _o0i.kaih = 1, 211 == _o0f.ship_id ? _o0i.houg += 1 : 151 == _o0f.ship_id ? (_o0i.houg += 2, _o0i.tyku += 1) : 593 == _o0f.ship_id ? (_o0i.houg += 2, _o0i.tyku += 3, _o0i.raig += 1) : 954 == _o0f.ship_id && (_o0i.houg += 3, _o0i.tyku += 1, _o0i.raig += 2)) : 'きりしま' == _o0f.yomi ? (_o0i.houg = 1, _o0i.kaih = 1, 212 == _o0f.ship_id ? _o0i.houg += 1 : 152 == _o0f.ship_id ? (_o0i.houg += 2, _o0i.tyku += 1) : 694 == _o0f.ship_id && (_o0i.houg += 4, _o0i.tyku += 1, _o0i.raig += 1)) : ('ふそう' == _o0f.yomi || 'やましろ' == _o0f.yomi || 'いせ' == _o0f.yomi || 'ひゅうが' == _o0f.yomi) && (_o0i.houg = 1), !_o0i.exists()) return _o0h;
            var _o0j = _o0f.get_slotnums(329);
            return _o0h = _o0i.multiply(_o0j);
        };
    },
    72176: (_o0k, _o0l, _o0m) => {
        'use strict';
        var _o0n = null;
        defineModule(_o0l);
        Object.defineProperty(_o0l, '__esModule', {
            'value': true
        }), _o0l.getSlot335PersonalEffect = void 0;
        var _o0o = _o0m(74496);
        _o0l.getSlot335PersonalEffect = function(_o0p) {
            var _o0q = null,
                _o0r = new _o0o.SlotItemEffectModel(),
                _o0s = new _o0o.SlotItemEffectModel();
            if (277 == _o0p.ship_id || 278 == _o0p.ship_id ? (_o0s.tyku = 1, _o0s.kaih = 1) : 594 != _o0p.ship_id && 599 != _o0p.ship_id && 610 != _o0p.ship_id && 646 != _o0p.ship_id && 698 != _o0p.ship_id || (_o0s.tyku = 2, _o0s.kaih = 1), !_o0s.exists()) return _o0r;
            var _o0t = _o0p.get_slotnums(335);
            return _o0r = _o0s.multiply(_o0t);
        };
    },
    33846: (_o0u, _o0v, _o0w) => {
        'use strict';
        var _o0x = null;
        defineModule(_o0v);
        Object.defineProperty(_o0v, '__esModule', {
            'value': true
        }), _o0v.getSlot336PersonalEffect = void 0;
        var _o0y = _o0w(74496);
        _o0v.getSlot336PersonalEffect = function(_o0z) {
            var _o10 = null,
                _o11 = new _o0y.SlotItemEffectModel(),
                _o12 = new _o0y.SlotItemEffectModel();
            if (277 == _o0z.ship_id || 278 == _o0z.ship_id ? (_o12.houg = 1, _o12.tyku = 1, _o12.kaih = 1) : 594 != _o0z.ship_id && 599 != _o0z.ship_id && 610 != _o0z.ship_id && 646 != _o0z.ship_id && 698 != _o0z.ship_id || (_o12.houg = 1, _o12.tyku = 2, _o12.kaih = 1), !_o12.exists()) return _o11;
            var _o13 = _o0z.get_slotnums(336);
            return _o11 = _o12.multiply(_o13);
        };
    },
    97157: (_o14, _o15, _o16) => {
        'use strict';
        var _o17 = null;
        defineModule(_o15);
        Object.defineProperty(_o15, '__esModule', {
            'value': true
        }), _o15.getSlot337PersonalEffect = void 0;
        var _o18 = _o16(74496);
        _o15.getSlot337PersonalEffect = function(_o19) {
            var _o1a = null,
                _o1b = new _o18.SlotItemEffectModel(),
                _o1c = new _o18.SlotItemEffectModel();
            if (277 == _o19.ship_id || 278 == _o19.ship_id ? (_o1c.houg = 1, _o1c.tyku = 1, _o1c.kaih = 1) : 594 != _o19.ship_id && 599 != _o19.ship_id && 610 != _o19.ship_id && 646 != _o19.ship_id && 698 != _o19.ship_id || (_o1c.houg = 2, _o1c.tyku = 2, _o1c.kaih = 1), !_o1c.exists()) return _o1b;
            var _o1d = _o19.get_slotnums(337);
            return _o1b = _o1c.multiply(_o1d);
        };
    },
    63406: (_o1e, _o1f, _o1g) => {
        'use strict';
        var _o1h = null;
        defineModule(_o1f);
        Object.defineProperty(_o1f, '__esModule', {
            'value': true
        }), _o1f.getSlot338PersonalEffect = void 0;
        var _o1i = _o1g(74496);
        _o1f.getSlot338PersonalEffect = function(_o1j) {
            var _o1k = null,
                _o1l = new _o1i.SlotItemEffectModel(),
                _o1m = new _o1i.SlotItemEffectModel();
            if (277 == _o1j.ship_id || 278 == _o1j.ship_id ? (_o1m.houg = 1, _o1m.tyku = 1, _o1m.kaih = 2) : 594 == _o1j.ship_id || 646 == _o1j.ship_id || 698 == _o1j.ship_id ? (_o1m.houg = 1, _o1m.tyku = 2, _o1m.kaih = 3) : 599 != _o1j.ship_id && 610 != _o1j.ship_id || (_o1m.houg = 4, _o1m.tyku = 3, _o1m.kaih = 4), !_o1m.exists()) return _o1l;
            var _o1n = _o1j.get_slotnums(338);
            return _o1l = _o1m.multiply(_o1n);
        };
    },
    66373: (_o1o, _o1p, _o1q) => {
        'use strict';
        var _o1r = null;
        defineModule(_o1p);
        Object.defineProperty(_o1p, '__esModule', {
            'value': true
        }), _o1p.getSlot339PersonalEffect = void 0;
        var _o1s = _o1q(74496);
        _o1p.getSlot339PersonalEffect = function(_o1t) {
            var _o1u = null,
                _o1v = new _o1s.SlotItemEffectModel(),
                _o1w = new _o1s.SlotItemEffectModel();
            if (277 == _o1t.ship_id || 278 == _o1t.ship_id ? (_o1w.houg = 1, _o1w.tyku = 2, _o1w.kaih = 2) : 594 == _o1t.ship_id || 646 == _o1t.ship_id || 698 == _o1t.ship_id ? (_o1w.houg = 1, _o1w.tyku = 3, _o1w.kaih = 4) : 599 != _o1t.ship_id && 610 != _o1t.ship_id || (_o1w.houg = 6, _o1w.tyku = 4, _o1w.kaih = 5), !_o1w.exists()) return _o1v;
            var _o1x = _o1t.get_slotnums(339);
            return _o1v = _o1w.multiply(_o1x);
        };
    },
    19707: (_o1y, _o1z, _o20) => {
        'use strict';
        var _o21 = null;
        defineModule(_o1z);
        Object.defineProperty(_o1z, '__esModule', {
            'value': true
        }), _o1z.getSlot340PersonalEffect = void 0;
        var _o22 = _o20(74496);
        _o1z.getSlot340PersonalEffect = function(_o23) {
            var _o24 = null,
                _o25 = new _o22.SlotItemEffectModel(),
                _o26 = new _o22.SlotItemEffectModel();
            if ('ガリバルディ' != _o23.yomi && 'アブルッツィ' != _o23.yomi || (_o26.houg = 1, _o26.tyku = 1, _o26.kaih = 1), !_o26.exists()) return _o25;
            var _o27 = _o23.get_slotnums(340);
            return _o25 = _o26.multiply(_o27);
        };
    },
    63978: (_o28, _o29, _o2a) => {
        'use strict';
        var _o2b = null;
        defineModule(_o29);
        Object.defineProperty(_o29, '__esModule', {
            'value': true
        }), _o29.getSlot341PersonalEffect = void 0;
        var _o2c = _o2a(74496);
        _o29.getSlot341PersonalEffect = function(_o2d) {
            var _o2e = null,
                _o2f = new _o2c.SlotItemEffectModel(),
                _o2g = new _o2c.SlotItemEffectModel();
            if ('ガリバルディ' == _o2d.yomi || 'アブルッツィ' == _o2d.yomi ? (_o2g.houg = 2, _o2g.tyku = 1, _o2g.kaih = 1) : 'ゴトランド' == _o2d.yomi && (_o2g.houg = 1, _o2g.tyku = 1, _o2g.kaih = 1), !_o2g.exists()) return _o2f;
            var _o2h = _o2d.get_slotnums(341);
            return _o2f = _o2g.multiply(_o2h);
        };
    },
    92382: (_o2i, _o2j, _o2k) => {
        'use strict';
        var _o2l = null;
        defineModule(_o2j);
        Object.defineProperty(_o2j, '__esModule', {
            'value': true
        }), _o2j.getSlot342PersonalEffect = void 0;
        var _o2m = _o2k(74496);
        _o2j.getSlot342PersonalEffect = function(_o2n) {
            var _o2o = null,
                _o2p = new _o2m.SlotItemEffectModel(),
                _o2q = new _o2m.SlotItemEffectModel();
            if (277 == _o2n.ship_id || 278 == _o2n.ship_id || 461 == _o2n.ship_id || 466 == _o2n.ship_id || 462 == _o2n.ship_id || 467 == _o2n.ship_id ? _o2q.houg = 1 : 594 == _o2n.ship_id || 646 == _o2n.ship_id || 698 == _o2n.ship_id ? (_o2q.houg = 2, _o2q.tyku = 1, _o2q.kaih = 1) : 599 != _o2n.ship_id && 610 != _o2n.ship_id || (_o2q.houg = 3, _o2q.tyku = 2, _o2q.kaih = 2), !_o2q.exists()) return _o2p;
            var _o2r = _o2n.get_slotnums(342);
            return _o2p = _o2q.multiply(_o2r);
        };
    },
    78415: (_o2s, _o2t, _o2u) => {
        'use strict';
        var _o2v = null;
        defineModule(_o2t);
        Object.defineProperty(_o2t, '__esModule', {
            'value': true
        }), _o2t.getSlot343PersonalEffect = void 0;
        var _o2w = _o2u(74496);
        _o2t.getSlot343PersonalEffect = function(_o2x) {
            var _o2y = null,
                _o2z = new _o2w.SlotItemEffectModel(),
                _o30 = new _o2w.SlotItemEffectModel();
            if (277 == _o2x.ship_id || 278 == _o2x.ship_id ? _o30.houg = 2 : 461 == _o2x.ship_id || 466 == _o2x.ship_id || 462 == _o2x.ship_id || 467 == _o2x.ship_id ? _o30.houg = 1 : 594 == _o2x.ship_id || 646 == _o2x.ship_id || 698 == _o2x.ship_id ? (_o30.houg = 3, _o30.tyku = 2, _o30.kaih = 1) : 599 != _o2x.ship_id && 610 != _o2x.ship_id || (_o30.houg = 5, _o30.tyku = 3, _o30.kaih = 3), !_o30.exists()) return _o2z;
            var _o31 = _o2x.get_slotnums(343);
            return _o2z = _o30.multiply(_o31);
        };
    },
    23090: (_o32, _o33, _o34) => {
        'use strict';
        var _o35 = null;
        defineModule(_o33);
        Object.defineProperty(_o33, '__esModule', {
            'value': true
        }), _o33.getSlot344PersonalEffect = void 0;
        var _o36 = _o34(74496);
        _o33.getSlot344PersonalEffect = function(_o37) {
            var _o38 = null,
                _o39 = new _o36.SlotItemEffectModel(),
                _o3a = new _o36.SlotItemEffectModel();
            if (599 == _o37.ship_id || 610 == _o37.ship_id ? _o3a.houg = 3 : 555 == _o37.ship_id || 560 == _o37.ship_id ? (_o3a.houg = 2, _o3a.tais = 2) : 318 == _o37.ship_id ? (_o3a.houg = 4, _o3a.tais = 1) : 282 == _o37.ship_id ? (_o3a.houg = 2, _o3a.tais = 1) : 888 == _o37.ship_id ? (_o3a.houg = 4, _o3a.tais = 2) : 883 == _o37.ship_id && (_o3a.houg = 5, _o3a.tais = 2), !_o3a.exists()) return _o39;
            var _o3b = _o37.get_slotnums(344);
            return _o39 = _o3a.multiply(_o3b);
        };
    },
    18776: (_o3c, _o3d, _o3e) => {
        'use strict';
        var _o3f = null;
        defineModule(_o3d);
        Object.defineProperty(_o3d, '__esModule', {
            'value': true
        }), _o3d.getSlot345PersonalEffect = void 0;
        var _o3g = _o3e(74496);
        _o3d.getSlot345PersonalEffect = function(_o3h) {
            var _o3i = null,
                _o3j = new _o3g.SlotItemEffectModel(),
                _o3k = new _o3g.SlotItemEffectModel();
            if (599 == _o3h.ship_id || 610 == _o3h.ship_id ? (_o3k.houg = 3, _o3k.kaih = 1) : 555 == _o3h.ship_id || 560 == _o3h.ship_id ? (_o3k.houg = 3, _o3k.tais = 2, _o3k.kaih = 2) : 318 == _o3h.ship_id ? (_o3k.houg = 5, _o3k.tais = 1, _o3k.kaih = 2) : 282 == _o3h.ship_id ? (_o3k.houg = 3, _o3k.tais = 1, _o3k.kaih = 1) : 888 == _o3h.ship_id ? (_o3k.houg = 4, _o3k.tais = 2, _o3k.kaih = 2) : 883 == _o3h.ship_id && (_o3k.houg = 5, _o3k.tais = 2, _o3k.kaih = 3), !_o3k.exists()) return _o3j;
            var _o3l = _o3h.get_slotnums(345);
            return _o3j = _o3k.multiply(_o3l);
        };
    },
    89058: (_o3m, _o3n, _o3o) => {
        'use strict';
        var _o3p = null;
        defineModule(_o3n);
        Object.defineProperty(_o3n, '__esModule', {
            'value': true
        }), _o3n.getSlot346PersonalEffect = void 0;
        var _o3q = _o3o(74496);
        _o3n.getSlot346PersonalEffect = function(_o3r) {
            var _o3s = null,
                _o3t = new _o3q.SlotItemEffectModel();
            return 'やましおまる' == _o3r.yomi && (_o3t.kaih += 1, _o3t.tais += 1), _o3t;
        };
    },
    84372: (_o3u, _o3v, _o3w) => {
        'use strict';
        var _o3x = null;
        defineModule(_o3v);
        Object.defineProperty(_o3v, '__esModule', {
            'value': true
        }), _o3v.getSlot347PersonalEffect = void 0;
        var _o3y = _o3w(74496);
        _o3v.getSlot347PersonalEffect = function(_o3z) {
            var _o40 = null,
                _o41 = new _o3y.SlotItemEffectModel();
            return 'やましおまる' == _o3z.yomi && (_o41.kaih += 2, _o41.tais += 2), _o41;
        };
    },
    39656: (_o42, _o43, _o44) => {
        'use strict';
        var _o45 = null;
        defineModule(_o43);
        Object.defineProperty(_o43, '__esModule', {
            'value': true
        }), _o43.getSlot356_357PersonalEffect = void 0;
        var _o46 = _o44(74496);
        _o43.getSlot356_357PersonalEffect = function(_o47) {
            var _o48 = null,
                _o49 = new _o46.SlotItemEffectModel(),
                _o4a = new _o46.SlotItemEffectModel();
            if (95 == _o47.ctype ? _o4a.houg = 2 : 9 == _o47.ctype && (_o4a.houg = 1), !_o4a.exists()) return _o49;
            var _o4b = _o47.get_slotnums(356) + _o47.get_slotnums(357);
            return _o49 = _o4a.multiply(_o4b);
        };
    },
    66039: (_o4c, _o4d, _o4e) => {
        'use strict';
        var _o4f = null;
        defineModule(_o4d);
        Object.defineProperty(_o4d, '__esModule', {
            'value': true
        }), _o4d.getSlot358PersonalEffect = void 0;
        var _o4g = _o4e(74496);
        _o4d.getSlot358PersonalEffect = function(_o4h) {
            var _o4i = null,
                _o4j = new _o4g.SlotItemEffectModel(),
                _o4k = new _o4g.SlotItemEffectModel();
            if ('アメリカ' != _o4h.getCountryName() && 67 != _o4h.ctype && 78 != _o4h.ctype && 82 != _o4h.ctype && 88 != _o4h.ctype && 108 != _o4h.ctype && 112 != _o4h.ctype) return _o4j;
            _o4k.houg += 1, _o4k.kaih += 1, _o4k.tyku += 1, 95 == _o4h.ctype && (_o4k.houg += 1, _o4k.kaih += 2, _o4k.tyku += 2);
            var _o4l = _o4h.get_slotnums(358);
            return _o4j = _o4k.multiply(_o4l);
        };
    },
    64679: (_o4m, _o4n, _o4o) => {
        'use strict';
        var _o4p = null;
        defineModule(_o4n);
        Object.defineProperty(_o4n, '__esModule', {
            'value': true
        }), _o4n.getSlot359PersonalEffect = void 0;
        var _o4q = _o4o(74496);
        _o4n.getSlot359PersonalEffect = function(_o4r) {
            var _o4s = null,
                _o4t = new _o4q.SlotItemEffectModel(),
                _o4u = new _o4q.SlotItemEffectModel();
            if ('パース' == _o4r.yomi ? (_o4u.houg = 2, _o4u.tyku = 2, _o4u.kaih = 1) : 'ゆうばり' == _o4r.yomi && (_o4u.houg = 1, _o4u.tyku = 1, _o4u.kaih = 1), 622 != _o4r.ship_id && 623 != _o4r.ship_id && 624 != _o4r.ship_id || (_o4u.houg += 1, _o4u.tyku += 1), !_o4u.exists()) return _o4t;
            var _o4v = _o4r.get_slotnums(359);
            return _o4t = _o4u.multiply(_o4v);
        };
    },
    69954: (_o4w, _o4x, _o4y) => {
        'use strict';
        var _o4z = null;
        defineModule(_o4x);
        Object.defineProperty(_o4x, '__esModule', {
            'value': true
        }), _o4x.getSlot35PersonalEffect = void 0;
        var _o50 = _o4y(74496);
        _o4x.getSlot35PersonalEffect = function(_o51) {
            var _o52 = null,
                _o53 = new _o50.SlotItemEffectModel(),
                _o54 = new _o50.SlotItemEffectModel();
            return 149 == _o51.ship_id || 591 == _o51.ship_id || 592 == _o51.ship_id || 694 == _o51.ship_id ? (_o54.houg += 1, _o54.tyku += 1) : 150 == _o51.ship_id ? _o54.tyku += 1 : 151 == _o51.ship_id || 593 == _o51.ship_id || 954 == _o51.ship_id ? (_o54.tyku += 1, _o54.kaih += 1) : 152 == _o51.ship_id && (_o54.houg += 1), _o54.exists() ? _o53 = _o54.multiply(1) : _o53;
        };
    },
    95953: (_o55, _o56, _o57) => {
        'use strict';
        var _o58 = null;
        defineModule(_o56);
        Object.defineProperty(_o56, '__esModule', {
            'value': true
        }), _o56.getSlot360_361PersonalEffect = void 0;
        var _o59 = _o57(74496);
        _o56.getSlot360_361PersonalEffect = function(_o5a) {
            var _o5b = null,
                _o5c = new _o59.SlotItemEffectModel(),
                _o5d = new _o59.SlotItemEffectModel();
            if ('デ・ロイテル' == _o5a.yomi ? (_o5d.houg = 2, _o5d.tyku = 2, _o5d.kaih = 1) : 'ゴトランド' == _o5a.yomi && (_o5d.houg = 2, _o5d.tyku = 1, _o5d.kaih = 1), 41 == _o5a.ctype && (_o5d.houg = 1, _o5d.tyku = 1), !_o5d.exists()) return _o5c;
            var _o5e = _o5a.get_slotnums(360) + _o5a.get_slotnums(361);
            return _o5c = _o5d.multiply(_o5e);
        };
    },
    86384: (_o5f, _o5g, _o5h) => {
        'use strict';
        var _o5i = null;
        defineModule(_o5g);
        Object.defineProperty(_o5g, '__esModule', {
            'value': true
        }), _o5g.getSlot362_363PersonalEffect = void 0;
        var _o5j = _o5h(74496);
        _o5g.getSlot362_363PersonalEffect = function(_o5k) {
            var _o5l = null,
                _o5m = new _o5j.SlotItemEffectModel(),
                _o5n = new _o5j.SlotItemEffectModel(),
                _o5o = false;
            if (99 == _o5k.ctype ? (_o5n.houg = 1, _o5n.tyku = 2, _o5n.kaih = 1, _o5o = true) : 34 == _o5k.ctype || 21 == _o5k.ctype ? (_o5n.houg = -3, _o5n.tyku = -3, _o5n.kaih = -8, _o5o = true) : 4 == _o5k.ctype || 20 == _o5k.ctype || 16 == _o5k.ctype ? (_o5n.houg = -3, _o5n.tyku = -2, _o5n.kaih = -6, _o5o = true) : 89 == _o5k.ctype || 56 == _o5k.ctype ? (_o5n.houg = -2, _o5n.tyku = -1, _o5n.kaih = -4, _o5o = true) : 52 != _o5k.ctype && 41 != _o5k.ctype && 98 != _o5k.ctype || (_o5n.tyku = -1, _o5n.kaih = -2, _o5o = true), 'アメリカ' == _o5k.getCountryName() && (_o5n.tyku += 1, _o5n.kaih += 1, _o5o = true), 0 == _o5o) return _o5m;
            var _o5p = _o5k.get_slotnums(362) + _o5k.get_slotnums(363);
            return _o5m = _o5n.multiply(_o5p);
        };
    },
    65345: (_o5q, _o5r, _o5s) => {
        'use strict';
        var _o5t = null;
        defineModule(_o5r);
        Object.defineProperty(_o5r, '__esModule', {
            'value': true
        }), _o5r.getSlot364PersonalEffect = void 0;
        var _o5u = _o5s(74496);
        _o5r.getSlot364PersonalEffect = function(_o5v) {
            var _o5w = null;
            new _o5u.SlotItemEffectModel();
            var _o5x = new _o5u.SlotItemEffectModel();
            623 == _o5v.ship_id || 586 == _o5v.ship_id || 119 == _o5v.ship_id || 118 == _o5v.ship_id || 657 == _o5v.ship_id || 506 == _o5v.ship_id || 668 == _o5v.ship_id || 507 == _o5v.ship_id ? (_o5x.raig = 1, _o5x.kaih = -2, 119 == _o5v.ship_id ? _o5x.raig += 1 : 507 == _o5v.ship_id ? _o5x.raig += 2 : 623 == _o5v.ship_id && (_o5x.houg += 1, _o5x.raig += 3)) : (_o5x.houg = -1, _o5x.kaih = -7);
            var _o5y = _o5v.get_slotnums(364);
            return _o5x.multiply(_o5y);
        };
    },
    46514: (_o5z, _o60, _o61) => {
        'use strict';
        var _o62 = null;
        defineModule(_o60);
        Object.defineProperty(_o60, '__esModule', {
            'value': true
        }), _o60.getSlot365PersonalEffect = void 0;
        var _o63 = _o61(74496);
        _o60.getSlot365PersonalEffect = function(_o64) {
            var _o65 = null,
                _o66 = new _o63.SlotItemEffectModel(),
                _o67 = new _o63.SlotItemEffectModel(),
                _o68 = false;
            return 37 != _o64.ctype && 19 != _o64.ctype && 2 != _o64.ctype && 26 != _o64.ctype && 6 != _o64.ctype || (_o67.houg += 1, _o68 = true), 136 != _o64.ship_id && 148 != _o64.ship_id && 546 != _o64.ship_id && 541 != _o64.ship_id && 573 != _o64.ship_id && 911 != _o64.ship_id && 916 != _o64.ship_id && 593 != _o64.ship_id || (_o67.houg += 1, _o68 = true), 591 != _o64.ship_id && 592 != _o64.ship_id && 954 != _o64.ship_id && 694 != _o64.ship_id || (_o67.houg += 2, _o68 = true), 0 == _o68 ? _o66 : _o66 = _o67.multiply(1);
        };
    },
    81976: (_o69, _o6a, _o6b) => {
        'use strict';
        var _o6c = null;
        defineModule(_o6a);
        Object.defineProperty(_o6a, '__esModule', {
            'value': true
        }), _o6a.getSlot367PersonalEffect = void 0;
        var _o6d = _o6b(74496);
        _o6a.getSlot367PersonalEffect = function(_o6e) {
            var _o6f = null,
                _o6g = new _o6d.SlotItemEffectModel(),
                _o6h = new _o6d.SlotItemEffectModel(),
                _o6i = false;
            if ('ゴトランド' == _o6e.yomi && (_o6h.houg += 2, _o6h.tais += 1, _o6h.kaih += 1, _o6h.saku += 1, _o6i = true), 70 == _o6e.ctype ? (_o6h.houg += 1, _o6h.tais += 1, _o6h.kaih += 1, _o6h.saku += 1, _o6i = true) : 72 == _o6e.ctype || 62 == _o6e.ctype ? (_o6h.houg += 1, _o6h.kaih += 1, _o6h.saku += 1, _o6i = true) : 67 != _o6e.ctype && 78 != _o6e.ctype && 82 != _o6e.ctype && 88 != _o6e.ctype && 108 != _o6e.ctype && 112 != _o6e.ctype || (_o6h.houg += 2, _o6h.kaih += 2, _o6h.saku += 2, _o6i = true), 0 == _o6i) return _o6g;
            var _o6j = _o6e.get_slotnums(367);
            return _o6g = _o6h.multiply(_o6j);
        };
    },
    89331: (_o6k, _o6l, _o6m) => {
        'use strict';
        var _o6n = null;
        defineModule(_o6l);
        Object.defineProperty(_o6l, '__esModule', {
            'value': true
        }), _o6l.getSlot368PersonalEffect = void 0;
        var _o6o = _o6m(74496);
        _o6l.getSlot368PersonalEffect = function(_o6p) {
            var _o6q = null,
                _o6r = new _o6o.SlotItemEffectModel(),
                _o6s = new _o6o.SlotItemEffectModel(),
                _o6t = false;
            if ('ゴトランド' == _o6p.yomi && (_o6s.houg = 4, _o6s.tais = 3, _o6s.kaih = 2, _o6s.saku = 3, _o6t = true, 630 == _o6p.ship_id && (_o6r.houg += 2, _o6r.raig += 2, _o6r.kaih += 1, _o6r.saku += 1)), 70 == _o6p.ctype ? (_o6s.houg = 2, _o6s.tais = 3, _o6s.kaih = 1, _o6s.saku = 2, _o6t = true) : 72 == _o6p.ctype || 62 == _o6p.ctype ? (_o6s.houg += 1, _o6s.tais += 2, _o6s.kaih += 1, _o6s.saku += 2, _o6t = true) : 67 != _o6p.ctype && 78 != _o6p.ctype && 82 != _o6p.ctype && 88 != _o6p.ctype && 108 != _o6p.ctype && 112 != _o6p.ctype || (_o6s.houg += 2, _o6s.tais += 2, _o6s.kaih += 2, _o6s.saku += 2, _o6t = true), 0 == _o6t) return _o6r;
            var _o6u = _o6p.get_slotnums(368);
            return _o6r.add(_o6s.multiply(_o6u)), _o6r;
        };
    },
    73973: (_o6v, _o6w, _o6x) => {
        'use strict';
        var _o6y = null;
        defineModule(_o6w);
        Object.defineProperty(_o6w, '__esModule', {
            'value': true
        }), _o6w.getSlot369PersonalEffect = void 0;
        var _o6z = _o6x(74496);
        _o6w.getSlot369PersonalEffect = function(_o70) {
            var _o71 = null,
                _o72 = new _o6z.SlotItemEffectModel(),
                _o73 = new _o6z.SlotItemEffectModel(),
                _o74 = false;
            if ('ゴトランド' == _o70.yomi && (_o73.houg = 5, _o73.tais = 4, _o73.kaih = 4, _o73.saku = 3, _o74 = true, 630 == _o70.ship_id && (_o72.houg += 3, _o72.raig += 3, _o72.kaih += 2, _o72.saku += 2)), 70 == _o70.ctype ? (_o73.houg += 3, _o73.tais += 3, _o73.kaih += 2, _o73.saku += 3, _o74 = true) : 72 == _o70.ctype || 62 == _o70.ctype ? (_o73.houg += 2, _o73.tais += 2, _o73.kaih += 1, _o73.saku += 2, _o74 = true) : 67 != _o70.ctype && 78 != _o70.ctype && 82 != _o70.ctype && 88 != _o70.ctype && 108 != _o70.ctype && 112 != _o70.ctype || (_o73.houg += 2, _o73.tais += 2, _o73.kaih += 2, _o73.saku += 2, _o74 = true), 0 == _o74) return _o72;
            var _o75 = _o70.get_slotnums(369);
            return _o72.add(_o73.multiply(_o75)), _o72;
        };
    },
    21178: (_o76, _o77, _o78) => {
        'use strict';
        var _o79 = null;
        defineModule(_o77);
        Object.defineProperty(_o77, '__esModule', {
            'value': true
        }), _o77.getSlot370PersonalEffect = void 0;
        var _o7a = _o78(74496);
        _o77.getSlot370PersonalEffect = function(_o7b) {
            var _o7c = null,
                _o7d = new _o7a.SlotItemEffectModel(),
                _o7e = new _o7a.SlotItemEffectModel(),
                _o7f = false;
            if ('ゴトランド' == _o7b.yomi && (_o7e.houg = 1, _o7e.tais = 3, _o7e.kaih = 1, _o7e.saku = 2, _o7f = true), 70 == _o7b.ctype ? (_o7e.houg += 1, _o7e.tais += 3, _o7e.kaih += 1, _o7e.saku += 1, _o7f = true) : 72 == _o7b.ctype || 62 == _o7b.ctype ? (_o7e.houg += 1, _o7e.tais += 2, _o7e.kaih += 1, _o7e.saku += 1, _o7f = true) : 67 != _o7b.ctype && 78 != _o7b.ctype && 82 != _o7b.ctype && 88 != _o7b.ctype && 108 != _o7b.ctype && 112 != _o7b.ctype || (_o7e.houg += 2, _o7e.tais += 3, _o7e.kaih += 2, _o7e.saku += 2, _o7f = true, 'ウォースパイト' == _o7b.yomi ? (_o7d.houg += 4, _o7d.kaih += 1, _o7d.saku += 1) : 'ヴァリアント' == _o7b.yomi && (_o7d.houg += 3, _o7d.kaih += 2, _o7d.saku += 1)), 0 == _o7f) return _o7d;
            var _o7g = _o7b.get_slotnums(370);
            return _o7d.add(_o7e.multiply(_o7g)), _o7d;
        };
    },
    5079: (_o7h, _o7i, _o7j) => {
        'use strict';
        var _o7k = null;
        defineModule(_o7i);
        Object.defineProperty(_o7i, '__esModule', {
            'value': true
        }), _o7i.getSlot371PersonalEffect = void 0;
        var _o7l = _o7j(74496);
        _o7i.getSlot371PersonalEffect = function(_o7m) {
            var _o7n = null,
                _o7o = new _o7l.SlotItemEffectModel(),
                _o7p = new _o7l.SlotItemEffectModel(),
                _o7q = false;
            if ('ゴトランド' == _o7m.yomi && (_o7p.houg = 4, _o7p.tais = 2, _o7p.kaih = 3, _o7p.saku = 6, _o7q = true, 630 == _o7m.ship_id && (_o7o.houg += 2, _o7o.kaih += 2, _o7o.saku += 3)), 70 == _o7m.ctype ? (_o7p.houg += 2, _o7p.tais += 1, _o7p.kaih += 2, _o7p.saku += 4, _o7q = true) : 79 == _o7m.ctype ? (_o7p.houg += 2, _o7p.kaih += 1, _o7p.saku += 3, _o7q = true) : 67 != _o7m.ctype && 78 != _o7m.ctype && 82 != _o7m.ctype && 88 != _o7m.ctype && 108 != _o7m.ctype && 112 != _o7m.ctype || (_o7p.houg += 3, _o7p.tais += 1, _o7p.kaih += 2, _o7p.saku += 3, _o7q = true, 88 == _o7m.ctype && (_o7o.houg += 3, _o7o.kaih += 2, _o7o.saku += 2)), 0 == _o7q) return _o7o;
            var _o7r = _o7m.get_slotnums(371);
            return _o7o.add(_o7p.multiply(_o7r)), _o7o;
        };
    },
    95014: (_o7s, _o7t, _o7u) => {
        'use strict';
        var _o7v = null;
        defineModule(_o7t);
        Object.defineProperty(_o7t, '__esModule', {
            'value': true
        }), _o7t.getSlot372PersonalEffect = void 0;
        var _o7w = _o7u(74496);
        _o7t.getSlot372PersonalEffect = function(_o7x) {
            var _o7y = null,
                _o7z = new _o7w.SlotItemEffectModel(),
                _o80 = false,
                _o81 = new _o7w.SlotItemEffectModel();
            if ('しょうかく' == _o7x.yomi || 'ずいかく' == _o7x.yomi || 'たいほう' == _o7x.yomi ? (_o81.houg += 1, _o80 = true, _o7z.raig += 1) : 'じゅんよう' != _o7x.yomi && 'ひよう' != _o7x.yomi || (_o81.houg += 1, _o80 = true), 108 == _o7x.ship_id || 109 == _o7x.ship_id || 291 == _o7x.ship_id || 292 == _o7x.ship_id || 296 == _o7x.ship_id || 297 == _o7x.ship_id ? (_o81.houg += 1, _o80 = true) : 116 == _o7x.ship_id || 74 == _o7x.ship_id || 117 == _o7x.ship_id || 282 == _o7x.ship_id || 185 == _o7x.ship_id ? (_o81.tais += 1, _o80 = true) : 560 == _o7x.ship_id || 555 == _o7x.ship_id || 318 == _o7x.ship_id ? (_o81.tais += 1, _o80 = true, _o7z.raig += 1) : 508 == _o7x.ship_id || 509 == _o7x.ship_id ? (_o81.houg += 1, _o80 = true) : 883 != _o7x.ship_id && 888 != _o7x.ship_id || (_o81.houg += 2, _o81.tais += 1, _o80 = true, _o7z.raig += 2), 0 == _o80) return _o7z;
            var _o82 = _o7x.get_slotnums(372);
            return _o7z.add(_o81.multiply(_o82)), _o7z;
        };
    },
    53099: (_o83, _o84, _o85) => {
        'use strict';
        var _o86 = null;
        defineModule(_o84);
        Object.defineProperty(_o84, '__esModule', {
            'value': true
        }), _o84.getSlot373PersonalEffect = void 0;
        var _o87 = _o85(74496);
        _o84.getSlot373PersonalEffect = function(_o88) {
            var _o89 = null,
                _o8a = new _o87.SlotItemEffectModel(),
                _o8b = new _o87.SlotItemEffectModel(),
                _o8c = false;
            if ('しょうかく' == _o88.yomi ? (_o8b.houg += 2, _o8c = true, _o8a.raig += 2, _o8a.kaih += 2) : 'ずいかく' == _o88.yomi ? (_o8b.houg += 1, _o8c = true, _o8a.raig += 2, _o8a.kaih += 3) : 'たいほう' == _o88.yomi ? (_o8b.houg += 1, _o8c = true, _o8a.raig += 2, _o8a.kaih += 2) : 'じゅんよう' != _o88.yomi && 'ひよう' != _o88.yomi || (_o8b.houg += 1, _o8c = true, _o8a.raig += 1, _o8a.kaih += 1), 108 == _o88.ship_id || 109 == _o88.ship_id ? (_o8b.houg += 1, _o8c = true) : 291 == _o88.ship_id || 292 == _o88.ship_id ? (_o8b.houg += 1, _o8c = true, _o8a.raig += 1) : 296 == _o88.ship_id || 297 == _o88.ship_id ? (_o8b.houg += 1, _o8c = true, _o8a.raig += 1, _o8a.kaih += 1) : 116 == _o88.ship_id || 74 == _o88.ship_id ? (_o8b.tais += 1, _o8c = true) : 117 == _o88.ship_id || 282 == _o88.ship_id || 185 == _o88.ship_id ? (_o8b.houg += 1, _o8b.tais += 1, _o8c = true, _o8a.raig += 1) : 560 == _o88.ship_id || 555 == _o88.ship_id || 318 == _o88.ship_id ? (_o8b.houg += 1, _o8b.tais += 2, _o8c = true, _o8a.raig += 1, _o8a.kaih += 1) : 508 == _o88.ship_id || 509 == _o88.ship_id ? (_o8b.houg += 1, _o8c = true, _o8a.raig += 2, _o8a.kaih += 2) : 888 == _o88.ship_id ? (_o8b.houg += 2, _o8b.tais += 2, _o8c = true, _o8a.raig += 2, _o8a.kaih += 2) : 883 == _o88.ship_id && (_o8b.houg += 1, _o8b.tais += 2, _o8c = true, _o8a.raig += 3, _o8a.kaih += 4), 0 == _o8c) return _o8a;
            var _o8d = _o88.get_slotnums(373);
            return _o8a.add(_o8b.multiply(_o8d)), _o8a;
        };
    },
    76201: (_o8e, _o8f, _o8g) => {
        'use strict';
        var _o8h = null;
        defineModule(_o8f);
        Object.defineProperty(_o8f, '__esModule', {
            'value': true
        }), _o8f.getSlot374PersonalEffect = void 0;
        var _o8i = _o8g(74496);
        _o8f.getSlot374PersonalEffect = function(_o8j) {
            var _o8k = null,
                _o8l = new _o8i.SlotItemEffectModel(),
                _o8m = new _o8i.SlotItemEffectModel(),
                _o8n = false;
            if ('しょうかく' == _o8j.yomi ? (_o8m.houg += 3, _o8n = true, _o8l.raig += 3, _o8l.kaih += 3) : 'ずいかく' == _o8j.yomi ? (_o8m.houg += 2, _o8n = true, _o8l.raig += 3, _o8l.kaih += 4) : 'たいほう' == _o8j.yomi ? (_o8m.houg += 2, _o8n = true, _o8l.raig += 3, _o8l.kaih += 2) : 'じゅんよう' != _o8j.yomi && 'ひよう' != _o8j.yomi || (_o8m.houg += 1, _o8n = true, _o8l.raig += 2, _o8l.kaih += 2), 108 == _o8j.ship_id || 109 == _o8j.ship_id ? (_o8m.houg += 1, _o8n = true, _o8l.raig += 1) : 291 == _o8j.ship_id || 292 == _o8j.ship_id ? (_o8m.houg += 1, _o8m.tais += 1, _o8n = true, _o8l.raig += 1) : 296 == _o8j.ship_id || 297 == _o8j.ship_id ? (_o8m.houg += 1, _o8m.tais += 1, _o8n = true, _o8l.raig += 1, _o8l.kaih += 1) : 116 == _o8j.ship_id || 74 == _o8j.ship_id ? (_o8m.houg += 1, _o8m.tais += 1, _o8n = true) : 117 == _o8j.ship_id || 282 == _o8j.ship_id || 185 == _o8j.ship_id ? (_o8m.houg += 1, _o8m.tais += 2, _o8n = true, _o8l.raig += 1, _o8l.kaih += 1) : 560 == _o8j.ship_id || 555 == _o8j.ship_id || 318 == _o8j.ship_id ? (_o8m.houg += 1, _o8m.tais += 3, _o8n = true, _o8l.raig += 1, _o8l.kaih += 2) : 508 == _o8j.ship_id || 509 == _o8j.ship_id ? (_o8m.houg += 1, _o8m.tais += 2, _o8n = true, _o8l.raig += 2, _o8l.kaih += 3) : 888 == _o8j.ship_id ? (_o8m.houg += 3, _o8m.tais += 3, _o8n = true, _o8l.raig += 2, _o8l.kaih += 3) : 883 == _o8j.ship_id && (_o8m.houg += 2, _o8m.tais += 3, _o8n = true, _o8l.raig += 3, _o8l.kaih += 5), 0 == _o8n) return _o8l;
            var _o8o = _o8j.get_slotnums(374);
            return _o8l.add(_o8m.multiply(_o8o)), _o8l;
        };
    },
    24931: (_o8p, _o8q, _o8r) => {
        'use strict';
        var _o8s = null;
        defineModule(_o8q);
        Object.defineProperty(_o8q, '__esModule', {
            'value': true
        }), _o8q.getSlot375PersonalEffect = void 0;
        var _o8t = _o8r(74496);
        _o8q.getSlot375PersonalEffect = function(_o8u) {
            var _o8v = null,
                _o8w = new _o8t.SlotItemEffectModel(),
                _o8x = new _o8t.SlotItemEffectModel(),
                _o8y = false;
            if (69 != _o8u.ctype && 83 != _o8u.ctype && 84 != _o8u.ctype && 105 != _o8u.ctype && 116 != _o8u.ctype && 118 != _o8u.ctype || (_o8x.tyku += 3, _o8x.houg += 3, _o8x.kaih += 3, _o8x.tais += 3, _o8y = true), 'かが' == _o8u.yomi && (_o8x.tyku += 1, _o8x.houg += 1, _o8x.kaih += 1, _o8x.tais += 1, _o8y = true), 0 == _o8y) return _o8w;
            var _o8z = _o8u.get_slotnums(375);
            return _o8w.add(_o8x.multiply(_o8z)), _o8w;
        };
    },
    60978: (_o90, _o91, _o92) => {
        'use strict';
        var _o93 = null;
        defineModule(_o91);
        Object.defineProperty(_o91, '__esModule', {
            'value': true
        }), _o91.getSlot376PersonalEffect = void 0;
        var _o94 = _o92(74496);
        _o91.getSlot376PersonalEffect = function(_o95) {
            var _o96 = null,
                _o97 = new _o94.SlotItemEffectModel(),
                _o98 = new _o94.SlotItemEffectModel(),
                _o99 = false;
            if ('アメリカ' == _o95.getCountryName() ? (_o98.houg += 2, _o98.raig += 4, _o99 = true) : 67 == _o95.ctype || 78 == _o95.ctype || 82 == _o95.ctype || 88 == _o95.ctype || 108 == _o95.ctype || 112 == _o95.ctype ? (_o98.houg += 1, _o98.raig += 2, _o99 = true) : 96 == _o95.ctype && (_o98.houg += 1, _o98.raig += 1, _o99 = true), 0 == _o99) return _o97;
            var _o9a = _o95.get_slotnums(376);
            return _o97.add(_o98.multiply(_o9a)), _o97;
        };
    },
    74312: (_o9b, _o9c, _o9d) => {
        'use strict';
        var _o9e = null;
        defineModule(_o9c);
        Object.defineProperty(_o9c, '__esModule', {
            'value': true
        }), _o9c.getSlot377PersonalEffect = void 0;
        var _o9f = _o9d(74496);
        _o9c.getSlot377PersonalEffect = function(_o9g) {
            var _o9h = null,
                _o9i = new _o9f.SlotItemEffectModel();
            return 'アメリカ' == _o9g.getCountryName() ? (_o9i.tais += 2, _o9i.kaih += 1, 629 == _o9g.ship_id && (_o9i.tais += 1, _o9i.kaih += 2)) : 67 != _o9g.ctype && 78 != _o9g.ctype && 82 != _o9g.ctype && 88 != _o9g.ctype && 108 != _o9g.ctype && 112 != _o9g.ctype && 96 != _o9g.ctype || (_o9i.tais += 1, _o9i.kaih += 1), 651 != _o9g.ship_id && 656 != _o9g.ship_id || (_o9i.tais += 1, _o9i.kaih += 2), _o9i;
        };
    },
    54350: (_o9j, _o9k, _o9l) => {
        'use strict';
        var _o9m = null;
        defineModule(_o9k);
        Object.defineProperty(_o9k, '__esModule', {
            'value': true
        }), _o9k.getSlot378PersonalEffect = void 0;
        var _o9n = _o9l(74496);
        _o9k.getSlot378PersonalEffect = function(_o9o) {
            var _o9p = null,
                _o9q = new _o9n.SlotItemEffectModel();
            return 'アメリカ' == _o9o.getCountryName() ? (_o9q.tais += 3, _o9q.kaih += 1, 629 == _o9o.ship_id && (_o9q.tais += 1, _o9q.kaih += 1)) : 67 == _o9o.ctype || 78 == _o9o.ctype || 82 == _o9o.ctype || 88 == _o9o.ctype || 108 == _o9o.ctype || 112 == _o9o.ctype ? (_o9q.tais += 2, _o9q.kaih += 1) : 96 == _o9o.ctype && (_o9q.tais += 1, _o9q.kaih += 1), 651 != _o9o.ship_id && 656 != _o9o.ship_id || (_o9q.tais += 1, _o9q.kaih += 1), _o9q;
        };
    },
    26262: function(_o9r, _o9s, _o9t) {
        'use strict';
        var _o9u = null;
        var _o9v = this && this.__importDefault || function(_o9w) {
            var _o9x = null;
            return _o9w && _o9w.__esModule ? _o9w : {
                'default': _o9w
            };
        };
        defineModule(_o9s);
        Object.defineProperty(_o9s, '__esModule', {
            'value': true
        }), _o9s.getSlot379PersonalEffect = void 0;
        var _o9y = _o9t(74496),
            _o9z = _o9v(_o9t(18622));
        _o9s.getSlot379PersonalEffect = function(_oa0) {
            var _oa1 = null,
                _oa2 = new _o9y.SlotItemEffectModel(),
                _oa3 = false,
                _oa4 = new _o9y.SlotItemEffectModel();
            if (1 == _oa0.stype ? (_oa4.tyku += 2, _oa4.houg += 1, _oa3 = true) : 21 != _oa0.stype && 16 != _oa0.stype || (_oa4.tyku += 1, _oa4.houg += 1, _oa3 = true), 66 == _oa0.ctype || 28 == _oa0.ctype ? (_oa4.houg += 1, _oa4.tyku += 2, _oa3 = true) : 101 == _oa0.ctype && (_oa4.tyku += 2, _oa4.houg += 1, _oa2.tyku += 2, _oa2.houg += 2, _oa3 = true), 'ゆら' == _oa0.yomi || 'なか' == _oa0.yomi || 'きぬ' == _oa0.yomi || 'いすず' == _oa0.yomi ? (_oa4.houg += 2, _oa3 = true) : 'おおい' != _oa0.yomi && 'きたかみ' != _oa0.yomi || (_oa4.tyku += 2, _oa4.houg += 2, _oa3 = true), 'ゆら' != _oa0.yomi && 'なか' != _oa0.yomi && 'きぬ' != _oa0.yomi && 'いすず' != _oa0.yomi && 'ゆうばり' != _oa0.yomi || (_oa4.tais += 1, _oa3 = true), 'てんりゅう' != _oa0.yomi && 'たつた' != _oa0.yomi && 'ゆうばり' != _oa0.yomi || (_oa4.houg += 1, _oa3 = true), 488 == _oa0.ship_id ? (_oa4.tyku += 4, _oa3 = true) : 220 == _oa0.ship_id ? (_oa4.tyku += 3, _oa3 = true) : 23 == _oa0.ship_id ? (_oa4.tyku += 2, _oa3 = true) : 160 == _oa0.ship_id || 487 == _oa0.ship_id || 141 == _oa0.ship_id ? (_oa4.tyku += 3, _oa3 = true) : 224 == _oa0.ship_id || 289 == _oa0.ship_id || 219 == _oa0.ship_id || 56 == _oa0.ship_id || 113 == _oa0.ship_id || 22 == _oa0.ship_id ? (_oa4.tyku += 2, _oa3 = true) : 651 != _oa0.ship_id && 656 != _oa0.ship_id || (_oa4.tyku += 3, _oa4.houg += 3, 656 == _oa0.ship_id && (_oa4.kaih += 3, _oa4.tais += 2), _oa3 = true), 488 != _oa0.ship_id && 160 != _oa0.ship_id && 487 != _oa0.ship_id && 141 != _oa0.ship_id || (_oa4.tais += 1, _oa3 = true), 477 != _oa0.ship_id && 478 != _oa0.ship_id && 624 != _oa0.ship_id || (_oa4.tais += 2, _oa3 = true), 477 != _oa0.ship_id && 478 != _oa0.ship_id && 624 != _oa0.ship_id && 622 != _oa0.ship_id || (_oa4.tyku += 2, _oa3 = true), 652 != _oa0.ship_id && 657 != _oa0.ship_id && 547 != _oa0.ship_id && 146 != _oa0.ship_id || (_oa2.houg += 2), 652 != _oa0.ship_id && 657 != _oa0.ship_id && 547 != _oa0.ship_id && 146 != _oa0.ship_id || (_oa2.tyku += 2), _oa3) {
                var _oa5 = _oa0.get_slotnums(379);
                _oa2.add(_oa4.multiply(_oa5));
            }
            var _oa6 = new _o9y.SlotItemEffectModel(),
                _oa7 = false;
            16 == _oa0.stype || 3 == _oa0.stype || 4 == _oa0.stype || 21 == _oa0.stype ? (_oa6.houg += 1, _oa6.kaih += 2, _oa7 = true) : 1 == _oa0.stype && (_oa6.houg += 1, _oa6.kaih += 4, _oa7 = true), 66 == _oa0.ctype || 28 == _oa0.ctype || 21 == _oa0.ctype || 34 == _oa0.ctype ? (_oa6.houg += 2, _oa6.kaih += 3, _oa7 = true) : 101 == _oa0.ctype && (_oa6.houg += 4, _oa6.kaih += 3, _oa7 = true), 488 == _oa0.ship_id || 651 == _oa0.ship_id || 656 == _oa0.ship_id ? (_oa6.houg += 2, _oa6.kaih += 2, _oa7 = true) : 487 == _oa0.ship_id || 160 == _oa0.ship_id || 141 == _oa0.ship_id || 118 == _oa0.ship_id || 119 == _oa0.ship_id ? (_oa6.houg += 1, _oa6.kaih += 1, _oa7 = true) : 652 != _oa0.ship_id && 657 != _oa0.ship_id && 547 != _oa0.ship_id && 146 != _oa0.ship_id || (_oa6.houg += 1, _oa6.kaih += 1, _oa7 = true);
            var _oa8 = new _o9y.SlotItemEffectModel(),
                _oa9 = false;
            if (656 == _oa0.ship_id && (_oa8.tyku += 3, _oa8.kaih += 2, _oa9 = true), _oa7 || _oa9) {
                for (var _oaa = 0, _oab = 0, _oac = 0, _oad = _oa0.have_slot_ids(); _oac < _oad.length; _oac++) {
                    var _oae = _oad[_oac],
                        _oaf = _o9z.default.model.slot.getMst(_oae),
                        _oag = _oaf.equipType;
                    12 != _oag && 13 != _oag || (_oaf.sakuteki >= 5 && (_oaa += _oa0.get_slotnums(parseInt(_oae))), _oaf.taiku >= 2 && (_oab += _oa0.get_slotnums(parseInt(_oae))));
                }
                _oa7 && _oaa > 0 && _oa2.add(_oa6), _oa9 && _oab > 0 && _oa2.add(_oa8);
            }
            return _oa2;
        };
    },
    45530: function(_oah, _oai, _oaj) {
        'use strict';
        var _oak = null;
        var _oal = this && this.__importDefault || function(_oam) {
            var _oan = null;
            return _oam && _oam.__esModule ? _oam : {
                'default': _oam
            };
        };
        defineModule(_oai);
        Object.defineProperty(_oai, '__esModule', {
            'value': true
        }), _oai.getSlot380PersonalEffect = void 0;
        var _oao = _oaj(74496),
            _oap = _oal(_oaj(18622));
        _oai.getSlot380PersonalEffect = function(_oaq) {
            var _oar = null,
                _oas = new _oao.SlotItemEffectModel(),
                _oat = false,
                _oau = new _oao.SlotItemEffectModel();
            if (21 != _oaq.stype && 16 != _oaq.stype || (_oau.tyku += 2, _oau.houg += 1, _oat = true), 101 == _oaq.ctype && (_oau.tyku += 2, _oau.houg += 1, _oat = true, _oas.tyku += 2, _oas.houg += 2), 'ゆら' == _oaq.yomi || 'なか' == _oaq.yomi || 'きぬ' == _oaq.yomi || 'いすず' == _oaq.yomi ? (_oau.houg += 2, _oat = true) : 'おおい' != _oaq.yomi && 'きたかみ' != _oaq.yomi || (_oau.tyku += 2, _oau.houg += 3, _oat = true), 'ゆら' != _oaq.yomi && 'なか' != _oaq.yomi && 'きぬ' != _oaq.yomi && 'いすず' != _oaq.yomi && 'ゆうばり' != _oaq.yomi || (_oau.tais += 1, _oat = true), 'てんりゅう' != _oaq.yomi && 'たつた' != _oaq.yomi && 'ゆうばり' != _oaq.yomi || (_oau.houg += 1, _oat = true), 488 == _oaq.ship_id ? (_oau.tyku += 4, _oat = true) : 220 == _oaq.ship_id ? (_oau.tyku += 3, _oat = true) : 23 == _oaq.ship_id ? (_oau.tyku += 2, _oat = true) : 160 == _oaq.ship_id || 487 == _oaq.ship_id || 141 == _oaq.ship_id ? (_oau.tyku += 3, _oat = true) : 224 == _oaq.ship_id || 289 == _oaq.ship_id || 219 == _oaq.ship_id || 56 == _oaq.ship_id || 113 == _oaq.ship_id || 22 == _oaq.ship_id ? (_oau.tyku += 2, _oat = true) : 651 == _oaq.ship_id || 656 == _oaq.ship_id ? (_oau.tyku += 3, _oau.houg += 3, _oat = true) : 407 != _oaq.ship_id && 665 != _oaq.ship_id || (_oau.houg += 2, _oau.tyku += 2, _oat = true, _oas.houg += 1, _oas.tyku += 1, _oas.kaih += 2), 488 != _oaq.ship_id && 160 != _oaq.ship_id && 487 != _oaq.ship_id && 141 != _oaq.ship_id || (_oau.tais += 1, _oat = true), 477 != _oaq.ship_id && 478 != _oaq.ship_id && 624 != _oaq.ship_id || (_oau.tais += 2, _oat = true), 477 != _oaq.ship_id && 478 != _oaq.ship_id && 624 != _oaq.ship_id && 622 != _oaq.ship_id || (_oau.tyku += 2, _oat = true), 652 != _oaq.ship_id && 657 != _oaq.ship_id || (_oau.houg += 3, _oat = true), 547 != _oaq.ship_id && 146 != _oaq.ship_id || (_oas.houg += 2), 652 != _oaq.ship_id && 657 != _oaq.ship_id && 547 != _oaq.ship_id && 146 != _oaq.ship_id || (_oas.tyku += 2), _oat) {
                var _oav = _oaq.get_slotnums(380);
                _oas.add(_oau.multiply(_oav));
            }
            var _oaw = new _oao.SlotItemEffectModel(),
                _oax = false,
                _oay = new _oao.SlotItemEffectModel(),
                _oaz = false,
                _ob0 = false;
            if (16 != _oaq.stype && 3 != _oaq.stype && 4 != _oaq.stype && 21 != _oaq.stype || (_oaw.houg += 2, _oaw.kaih += 1, _oax = true), 101 == _oaq.ctype && (_oaw.houg += 4, _oaw.kaih += 3, _oax = true), 488 != _oaq.ship_id && 487 != _oaq.ship_id && 160 != _oaq.ship_id && 141 != _oaq.ship_id && 118 != _oaq.ship_id && 119 != _oaq.ship_id && 651 != _oaq.ship_id && 656 != _oaq.ship_id || (_oaw.houg += 1, _oaw.kaih += 2, _oax = true), 652 == _oaq.ship_id || 657 == _oaq.ship_id || 547 == _oaq.ship_id || 146 == _oaq.ship_id ? (_oaw.houg += 1, _oaw.kaih += 3, _oax = true) : 407 != _oaq.ship_id && 665 != _oaq.ship_id || (_ob0 = true, _oax = true, _oaw.houg += 2, _oaw.kaih += 1, _oaz = true, _oay.houg += 1, _oay.tyku += 2, _oay.kaih += 1), _oax || _ob0) {
                for (var _ob1 = 0, _ob2 = 0, _ob3 = 0, _ob4 = _oaq.have_slot_ids(); _ob3 < _ob4.length; _ob3++) {
                    var _ob5 = _ob4[_ob3],
                        _ob6 = _oap.default.model.slot.getMst(_ob5),
                        _ob7 = _ob6.equipType;
                    12 == _ob7 || 13 == _ob7 ? _ob6.sakuteki >= 5 && (_ob1 += _oaq.get_slotnums(parseInt(_ob5))) : 21 == _ob7 && (_ob2 += _oaq.get_slotnums(parseInt(_ob5)));
                }
                _oax && _ob1 > 0 && _oas.add(_oaw), _oaz && _ob2 > 0 && _oas.add(_oay);
            }
            return _oas;
        };
    },
    44053: (_ob8, _ob9, _oba) => {
        'use strict';
        var _obb = null;
        defineModule(_ob9);
        Object.defineProperty(_ob9, '__esModule', {
            'value': true
        }), _ob9.getSlot381PersonalEffect = void 0;
        var _obc = _oba(74496);
        _ob9.getSlot381PersonalEffect = function(_obd) {
            var _obe = null,
                _obf = new _obc.SlotItemEffectModel(),
                _obg = false,
                _obh = new _obc.SlotItemEffectModel(),
                _obi = 0;
            if ('アメリカ' == _obd.getCountryName() && (_obh.houg += 1, 102 == _obd.ctype && (_obh.houg += 1), _obg = true, _obi = 1), 0 == _obg) return _obf;
            var _obj = _obd.get_slotnums(381);
            if (_obf.add(_obh.multiply(_obj)), 0 == _obi) return _obf;
            var _obk = _obd.get_each_level_nums(381),
                _obl = 0;
            return _obk.map(function(_obm, _obn) {
                _obn >= 6 && (_obl += _obm);
            }), 1 == _obi && (_obf.houg += 1 * _obl), _obf;
        };
    },
    65441: function(_obo, _obp, _obq) {
        'use strict';
        var _obr = null;
        var _obs = this && this.__importDefault || function(_obt) {
            var _obu = null;
            return _obt && _obt.__esModule ? _obt : {
                'default': _obt
            };
        };
        defineModule(_obp);
        Object.defineProperty(_obp, '__esModule', {
            'value': true
        }), _obp.getSlot382PersonalEffect = void 0;
        var _obv = _obq(74496),
            _obw = _obs(_obq(18622));
        _obp.getSlot382PersonalEffect = function(_obx) {
            var _oby = null,
                _obz = new _obv.SlotItemEffectModel(),
                _oc0 = false,
                _oc1 = new _obv.SlotItemEffectModel(),
                _oc2 = false,
                _oc3 = new _obv.SlotItemEffectModel(),
                _oc4 = new _obv.SlotItemEffectModel(),
                _oc5 = {},
                _oc6 = 2,
                _oc7 = [];
            1 == _obx.stype && (_oc1.tyku += 2, _oc1.kaih += 2, _oc1.tais += 1, _oc0 = true, _oc3.houg += 2, _oc3.kaih += 3, _oc4.tyku += 2, _oc4.kaih += 3, _oc2 = true, _oc6 = 1), 66 != _obx.ctype && 28 != _obx.ctype && 101 != _obx.ctype || (_oc1.tyku += 2, _oc1.kaih += 1, _oc0 = true, _oc3.houg += 1, _oc3.kaih += 2, _oc4.tyku += 2, _oc4.kaih += 2, _oc2 = true, _oc6 = 1), 'ゆら' != _obx.yomi && 'なか' != _obx.yomi && 'きぬ' != _obx.yomi || (_oc1.tyku += 1, _oc0 = true), 488 == _obx.ship_id || 220 == _obx.ship_id ? (_oc1.kaih += 1, _oc0 = true, 488 == _obx.ship_id && (_oc3.houg += 1, _oc3.kaih += 1, _oc4.tyku += 2, _oc4.kaih += 2, _oc2 = true, _oc6 = 1)) : 160 == _obx.ship_id || 224 == _obx.ship_id ? (_oc1.kaih += 1, _oc0 = true, 160 == _obx.ship_id && (_oc3.houg += 1, _oc3.kaih += 1, _oc4.tyku += 2, _oc4.kaih += 2, _oc2 = true)) : 487 == _obx.ship_id || 289 == _obx.ship_id ? (_oc1.kaih += 1, _oc0 = true, 487 == _obx.ship_id && (_oc3.houg += 1, _oc3.kaih += 1, _oc4.tyku += 2, _oc4.kaih += 2, _oc2 = true)) : 656 == _obx.ship_id ? (_oc1.tyku += 3, _oc1.kaih += 2, _oc0 = true, _oc3.houg += 2, _oc3.kaih += 2, _oc4.tyku += 3, _oc4.kaih += 2, _oc2 = true, _oc6 = 1) : 145 == _obx.ship_id || 961 == _obx.ship_id ? _oc6 = 1 : 979 == _obx.ship_id && (_oc1.houg += 1, _oc1.tyku += 1, _oc1.houm += 1, _oc1.kaih += 1, _oc5[509] = new _obv.SlotItemEffectModel(), _oc5[509].houm += 1, _oc0 = true, _oc7[1] = 1);
            for (var _oc8 = 0, _oc9 = 0, _oca = 0, _ocb = _obx.have_slot_ids(); _oca < _ocb.length; _oca++) {
                var _occ = _ocb[_oca],
                    _ocd = _obw.default.model.slot.getMst(_occ),
                    _oce = _ocd.equipType;
                12 != _oce && 13 != _oce || (_ocd.sakuteki >= 5 && (_oc8 += _obx.get_slotnums(parseInt(_occ))), _ocd.taiku >= 2 && (_oc9 += _obx.get_slotnums(parseInt(_occ))));
            }
            for (var _ocf = [], _ocg = function(_och) {
                    var _oci = null;
                    if (null == _obx.have_slots_dict[_och]) return 'continue';
                    var _ocj = _obx.get_each_level_nums(_och);
                    null == _ocf[_och] && (_ocf[_och] = []), _ocj.forEach(function(_ock, _ocl) {
                        var _ocm = null;
                        for (var _ocn = 1; _ocn <= _obx.SLOT_LEVEL_MAX; _ocn++) null == _ocf[_och][_ocn] && (_ocf[_och][_ocn] = 0), _ocl >= _ocn && (_ocf[_och][_ocn] += _ock);
                    });
                }, _oco = 0, _ocp = [509]; _oco < _ocp.length; _oco++) {
                _ocg(_ocp[_oco]);
            }
            var _ocq = 0,
                _ocr = 0,
                _ocs = 0,
                _oct = 0,
                _ocu = 0,
                _ocv = 0,
                _ocw = 0,
                _ocx = 0,
                _ocy = 0,
                _ocz = 0;
            null != _ocf[509] && (_ocq = _ocf[509][1], _ocr = _ocf[509][2], _ocs = _ocf[509][3], _oct = _ocf[509][4], _ocu = _ocf[509][5], _ocv = _ocf[509][6], _ocw = _ocf[509][7], _ocx = _ocf[509][8], _ocy = _ocf[509][9], _ocz = _ocf[509][10], null != _oc7[1] && (_ocs >= 1 && (_obz.kaih += 1 * _ocs), _ocu >= 1 && (_obz.houg += 1 * _ocu), _ocw >= 1 && (_obz.tyku += 2 * _ocw), _ocy >= 1 && (_obz.houm += 1 * _ocy), _ocz >= 1 && (_obz.houg += 1 * _ocz)), 1 == _oc6 ? (_ocq >= 1 && (_obz.tyku += 1 * _ocq), _ocr >= 1 && (_obz.kaih += 2 * _ocr), _oct >= 1 && (_obz.houg += 1 * _oct), _ocv >= 1 && (_obz.tyku += 1 * _ocv), _ocx >= 1 && (_obz.houm += 1 * _ocx), _ocz >= 1 && (_obz.tyku += 1 * _ocz)) : 2 == _oc6 && (_ocr >= 1 && (_obz.tyku += 1 * _ocr), _oct >= 1 && (_obz.kaih += 2 * _oct), _ocv >= 1 && (_obz.houg += 1 * _ocv), _ocx >= 1 && (_obz.tyku += 1 * _ocx), _ocz >= 1 && (_obz.houm += 1 * _ocz)));
            var _od0 = _obx.get_slotnums(509),
                _od1 = _od0 + _obx.get_slotnums(382);
            return _oc0 && (_obz.add(_oc1.multiply(_od1)), Object.keys(_oc5).forEach(function(_od2) {
                var _od3 = null,
                    _od4 = parseInt(_od2);
                if (null != _obx.have_slots_dict[_od4]) {
                    var _od5 = _obx.get_slotnums(_od4);
                    _obz.add(_oc5[_od4].multiply(_od5));
                }
            })), 3 != _obx.stype && 21 != _obx.stype && 4 != _obx.stype || _ocr >= 1 && (_oc8 > 0 && (_obz.houg += 1, _obz.kaih += 1), _oc9 > 0 && (_obz.tyku += 2, _obz.kaih += 1)), 145 == _obx.ship_id ? _ocr >= 1 && (_oc8 > 0 && (_obz.houg += 1, _obz.tyku += 1, _obz.kaih += 2), _oc9 > 0 && (_obz.tyku += 4, _obz.kaih += 2)) : 961 != _obx.ship_id && 979 != _obx.ship_id || _od0 > 0 && (_oc8 > 0 && (_obz.houg += 2, _obz.tyku += 2, _obz.kaih += 3), _oc9 > 0 && (_obz.houg += 1, _obz.tyku += 5, _obz.kaih += 3)), _oc2 && _oc8 > 0 && _obz.add(_oc3), _oc2 && _oc9 > 0 && _obz.add(_oc4), _obz;
        };
    },
    33258: (_od6, _od7, _od8) => {
        'use strict';
        var _od9 = null;
        defineModule(_od7);
        Object.defineProperty(_od7, '__esModule', {
            'value': true
        }), _od7.getSlot383PersonalEffect = void 0;
        var _oda = _od8(74496);
        _od7.getSlot383PersonalEffect = function(_odb) {
            var _odc = null,
                _odd = new _oda.SlotItemEffectModel(),
                _ode = false,
                _odf = new _oda.SlotItemEffectModel(),
                _odg = _odb.get_each_level_over_nums([383]).slot[383];
            if (44 == _odb.ctype && (_odf.raig += 2, _ode = true, _odg[4] > 0 && (_odd.raig += 1), _odg[6] > 0 && (_odd.houm += 1)), 'い58' == _odb.yomi && (_odf.raig += 1, _ode = true), 636 == _odb.ship_id ? (_odf.raig += 3, _ode = true) : 607 == _odb.ship_id && (_odf.raig += 4, _ode = true), _odg[8] > 0 && (_odd.raig += 1), _odg[10] > 0 && (_odd.houm += 1), 'い58' != _odb.yomi && 'い47' != _odb.yomi || _odg[5] > 0 && (_odd.houm += 1), 0 == _ode) return _odd;
            var _odh = _odb.get_slotnums(383);
            return _odd.add(_odf.multiply(_odh)), _odd;
        };
    },
    92168: (_odi, _odj, _odk) => {
        'use strict';
        var _odl = null;
        defineModule(_odj);
        Object.defineProperty(_odj, '__esModule', {
            'value': true
        }), _odj.getSlot384PersonalEffect = void 0;
        var _odm = _odk(74496);
        _odj.getSlot384PersonalEffect = function(_odn) {
            var _odo = null,
                _odp = new _odm.SlotItemEffectModel(),
                _odq = false,
                _odr = new _odm.SlotItemEffectModel();
            44 == _odn.ctype && (_odr.kaih += 3, _odq = true), 'い58' == _odn.yomi && (_odr.kaih += 2, _odq = true), 636 == _odn.ship_id ? (_odr.kaih += 3, _odq = true) : 607 == _odn.ship_id && (_odr.kaih += 4, _odq = true);
            var _ods = _odn.get_slotnums(384);
            _odq && _odp.add(_odr.multiply(_ods));
            var _odt = _ods,
                _odu = _odn.get_slotnums(213),
                _odv = _odn.get_slotnums(214),
                _odw = _odn.get_slotnums(383);
            return _odt > 0 && _odu + _odv + _odw > 0 && (_odp.raig += 3, _odp.kaih += 2), _odp;
        };
    },
    85975: (_odx, _ody, _odz) => {
        'use strict';
        var _oe0 = null;
        defineModule(_ody);
        Object.defineProperty(_ody, '__esModule', {
            'value': true
        }), _ody.getSlot385PersonalEffect = void 0;
        var _oe1 = _odz(74496);
        _ody.getSlot385PersonalEffect = function(_oe2) {
            var _oe3 = null,
                _oe4 = new _oe1.SlotItemEffectModel(),
                _oe5 = false,
                _oe6 = new _oe1.SlotItemEffectModel(),
                _oe7 = 0;
            if ('アメリカ' == _oe2.getCountryName() && (_oe6.houg += 1, 102 == _oe2.ctype || 107 == _oe2.ctype ? (_oe6.houg += 1, _oe6.souk += 1) : 93 == _oe2.ctype && (_oe6.houg += 1), _oe5 = true, _oe7 = 1), 8 == _oe2.stype && (_oe6.houg += 1, _oe5 = true), 0 == _oe5) return _oe4;
            var _oe8 = _oe2.get_slotnums(385);
            if (_oe4.add(_oe6.multiply(_oe8)), 0 == _oe7) return _oe4;
            var _oe9 = _oe2.get_each_level_nums(385),
                _oea = 0;
            return _oe9.forEach(function(_oeb, _oec) {
                _oec >= 6 && (_oea += _oeb);
            }), 1 == _oe7 && (_oe4.houg += 1 * _oea, _oe4.souk += 1 * _oe9[10]), _oe4;
        };
    },
    98467: (_oed, _oee, _oef) => {
        'use strict';
        var _oeg = null;
        defineModule(_oee);
        Object.defineProperty(_oee, '__esModule', {
            'value': true
        }), _oee.getSlot386PersonalEffect = void 0;
        var _oeh = _oef(74496);
        _oee.getSlot386PersonalEffect = function(_oei) {
            var _oej = null,
                _oek = new _oeh.SlotItemEffectModel(),
                _oel = false,
                _oem = new _oeh.SlotItemEffectModel(),
                _oen = 0;
            if ('アメリカ' == _oei.getCountryName() && (_oem.houg += 1, _oel = true, _oen = 1), 0 == _oel) return _oek;
            var _oeo = _oei.get_slotnums(386);
            if (_oek.add(_oem.multiply(_oeo)), 0 == _oen) return _oek;
            var _oep = _oei.get_each_level_nums(386),
                _oeq = 0,
                _oer = 0;
            return _oep.forEach(function(_oes, _oet) {
                _oet >= 2 && (_oeq += _oes), _oet >= 7 && (_oer += _oes);
            }), 1 == _oen && (_oek.houg += 1 * _oeq, _oek.houg += 1 * _oer), _oek;
        };
    },
    88348: (_oeu, _oev, _oew) => {
        'use strict';
        var _oex = null;
        defineModule(_oev);
        Object.defineProperty(_oev, '__esModule', {
            'value': true
        }), _oev.getSlot387PersonalEffect = void 0;
        var _oey = _oew(74496);
        _oev.getSlot387PersonalEffect = function(_oez) {
            var _of0 = null,
                _of1 = new _oey.SlotItemEffectModel(),
                _of2 = false,
                _of3 = new _oey.SlotItemEffectModel(),
                _of4 = 0;
            if ('アメリカ' == _oez.getCountryName() && (_of3.houg += 1, _of2 = true, _of4 = 1), 0 == _of2) return _of1;
            var _of5 = _oez.get_slotnums(387);
            if (_of1.add(_of3.multiply(_of5)), 0 == _of4) return _of1;
            var _of6 = _oez.get_each_level_nums(387),
                _of7 = 0,
                _of8 = 0;
            return _of6.forEach(function(_of9, _ofa) {
                _ofa >= 2 && (_of7 += _of9), _ofa >= 7 && (_of8 += _of9);
            }), 1 == _of4 && (_of1.houg += 1 * _of7, _of1.houg += 1 * _of8), _of1;
        };
    },
    21097: (_ofb, _ofc, _ofd) => {
        'use strict';
        var _ofe = null;
        defineModule(_ofc);
        Object.defineProperty(_ofc, '__esModule', {
            'value': true
        }), _ofc.getSlot389PersonalEffect = void 0;
        var _off = _ofd(74496);
        _ofc.getSlot389PersonalEffect = function(_ofg) {
            var _ofh = null,
                _ofi = new _off.SlotItemEffectModel(),
                _ofj = false,
                _ofk = new _off.SlotItemEffectModel();
            if (594 == _ofg.ship_id || 599 == _ofg.ship_id) _ofk.houg += 2, _ofk.kaih += 2, _ofj = true;
            else {
                if (698 == _ofg.ship_id || 610 == _ofg.ship_id) _ofk.houg += 3, _ofk.kaih += 2, _ofj = true;
                else 646 == _ofg.ship_id && (_ofk.houg += 4, _ofk.tais += 4, _ofk.kaih += 3, _ofj = true, _ofg.get_type3_nums(25) > 0 && (_ofi.houg += 3, _ofi.tais += 6), _ofg.get_slotnums(326) + _ofg.get_slotnums(327) > 0 && (_ofi.houg += 5, _ofi.tais += 4));
            }
            if ('アメリカ' == _ofg.getCountryName() && (_ofk.houg += 2, _ofk.tais += 3, _ofk.kaih += 1, _ofj = true), 0 == _ofj) return _ofi;
            var _ofl = _ofg.get_slotnums(389);
            return _ofi.add(_ofk.multiply(_ofl)), _ofi;
        };
    },
    43607: (_ofm, _ofn, _ofo) => {
        'use strict';
        var _ofp = null;
        defineModule(_ofn);
        Object.defineProperty(_ofn, '__esModule', {
            'value': true
        }), _ofn.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _ofq = _ofo(74496);
        _ofn.getSlot38cmFourBarrelGunPersonalEffect = function(_ofr) {
            var _ofs = null,
                _oft = new _ofq.SlotItemEffectModel(),
                _ofu = _ofr.get_slotnums(245),
                _ofv = _ofr.get_slotnums(246),
                _ofw = _ofr.get_slotnums(468),
                _ofx = _ofu + _ofv + _ofw,
                _ofy = 0,
                _ofz = 0;
            if (79 != _ofr.ctype) return _oft;
            _oft.houg += 2 * _ofx, _oft.houm += 1 * _ofx, _ofw >= 1 && (_oft.houg += 1 * _ofw, _ofz = 1), _ofy = 1;
            var _og0 = _ofr.get_slotnums(247),
                _og1 = _ofr.get_slotnums(471) + _ofr.get_slotnums(538);
            if (1 == _ofy && _og0 >= 1 && (_oft.kaih += 2 * _og0, _oft.houg += 2 * _og0, _oft.houm += 2 * _og0), 0 == _ofz) return _oft;
            var _og2 = _ofr.haveSlotLevelNumOver(468),
                _og3 = _ofr.haveSlotLevelNumOver(471),
                _og4 = _ofr.haveSlotLevelNumOver(538);
            if (1 == _ofz && _ofw > 0) {
                var _og5 = _og2[4],
                    _og6 = _og2[8],
                    _og7 = _og2[9],
                    _og8 = _og2[10],
                    _og9 = _og3[7],
                    _oga = _og3[9];
                _og5 >= 1 && (_oft.houg += 1 * _og5, _oft.houm += 1 * _og5), _og6 >= 1 && (_oft.houg += 1 * _og6, _oft.houm += 1 * _og6), _og7 >= 1 && (_oft.tyku += 1 * _og7, _og1 >= 1 && (_oft.houm += 2 * _og1), _og0 >= 1 && (_oft.kaih += 1 * _og0, _oft.houm += 1 * _og0)), _og8 >= 1 && (_oft.houm += 1 * _og8, _og1 >= 1 && (_oft.houm += 1 * _og1, _og4[7] >= 1 && (_oft.houm += 1 * _og4[7]), _og4[8] >= 1 && (_oft.kaih += 1 * _og4[8]), _og4[9] >= 1 && (_oft.houm += 1 * _og4[9]), _og9 >= 1 && (_oft.houm += 1 * _og9), _oga >= 1 && (_oft.kaih += 1 * _oga)), _og0 >= 1 && (_oft.houg += 1 * _og0, _oft.kaih += 1 * _og0, _oft.houm += 1 * _og0));
            }
            return _oft;
        };
    },
    2380: (_ogb, _ogc, _ogd) => {
        'use strict';
        var _oge = null;
        defineModule(_ogc);
        Object.defineProperty(_ogc, '__esModule', {
            'value': true
        }), _ogc.getSlot38cmTwinGunPersonalEffect = void 0;
        var _ogf = _ogd(74496);
        _ogc.getSlot38cmTwinGunPersonalEffect = function(_ogg) {
            var _ogh = null,
                _ogi = new _ogf.SlotItemEffectModel(),
                _ogj = false,
                _ogk = new _ogf.SlotItemEffectModel(),
                _ogl = 0,
                _ogm = _ogg.get_slotnums(76),
                _ogn = _ogg.get_slotnums(114),
                _ogo = _ogg.get_slotnums(124);
            if ('ドイツ' == _ogg.getCountryName() && (_ogk.houg += 1, _ogj = true, _ogl = 1, _ogo >= 1 && (_ogi.kaih += 1 * _ogo)), 0 == _ogj) return _ogi;
            var _ogp = _ogm + _ogn;
            _ogi.add(_ogk.multiply(_ogp));
            var _ogq = _ogg.have_level_num_over_dict[114];
            return 1 == _ogl && null != _ogq && (_ogq[7] >= 1 && (_ogi.houg += 1 * _ogq[7]), _ogq[8] >= 1 && (_ogi.houm += 1 * _ogq[8]), _ogq[9] >= 1 && (_ogi.souk += 1 * _ogq[9]), _ogq[10] >= 1 && (_ogi.houg += 1 * _ogq[10])), _ogi;
        };
    },
    37273: (_ogr, _ogs, _ogt) => {
        'use strict';
        var _ogu = null;
        defineModule(_ogs);
        Object.defineProperty(_ogs, '__esModule', {
            'value': true
        }), _ogs.getSlot390PersonalEffect = void 0;
        var _ogv = _ogt(74496);
        _ogs.getSlot390PersonalEffect = function(_ogw) {
            var _ogx = null,
                _ogy = new _ogv.SlotItemEffectModel(),
                _ogz = false,
                _oh0 = new _ogv.SlotItemEffectModel(),
                _oh1 = 0;
            if ('アメリカ' == _ogw.getCountryName() && (_oh0.houg += 1, _ogz = true, _oh1 = 1), 102 == _ogw.ctype || 107 == _ogw.ctype ? (_oh0.houg += 1, _oh0.souk += 1, _ogz = true) : 93 == _ogw.ctype && (_oh0.houg += 1, _ogz = true), 8 == _ogw.stype && (_oh0.houg += 1, _ogz = true), 0 == _ogz) return _ogy;
            var _oh2 = _ogw.get_slotnums(390);
            if (_ogy.add(_oh0.multiply(_oh2)), 0 == _oh1) return _ogy;
            var _oh3 = _ogw.get_each_level_nums(390),
                _oh4 = 0,
                _oh5 = 0;
            return _oh3.forEach(function(_oh6, _oh7) {
                _oh7 >= 3 && (_oh4 += _oh6), _oh7 >= 6 && (_oh5 += _oh6);
            }), 1 == _oh1 && (_ogy.houg += 1 * _oh4, _ogy.kaih += 1 * _oh5, _ogy.souk += 1 * _oh3[10]), _ogy;
        };
    },
    72694: (_oh8, _oh9, _oha) => {
        'use strict';
        var _ohb = null;
        defineModule(_oh9);
        Object.defineProperty(_oh9, '__esModule', {
            'value': true
        }), _oh9.getSlot391PersonalEffect = void 0;
        var _ohc = _oha(74496);
        _oh9.getSlot391PersonalEffect = function(_ohd) {
            var _ohe = null,
                _ohf = new _ohc.SlotItemEffectModel(),
                _ohg = false,
                _ohh = new _ohc.SlotItemEffectModel();
            if ('しょうかく' == _ohd.yomi || 'ずいかく' == _ohd.yomi ? (_ohh.houg += 1, _ohg = true) : 'じゅんよう' != _ohd.yomi && 'ひよう' != _ohd.yomi || (_ohh.houg += 1, _ohg = true), 116 == _ohd.ship_id || 185 == _ohd.ship_id || 282 == _ohd.ship_id ? (_ohh.houg += 1, _ohg = true) : 117 == _ohd.ship_id || 318 == _ohd.ship_id || 883 == _ohd.ship_id || 888 == _ohd.ship_id ? (_ohh.houg += 1, _ohf.kaih += 1, _ohg = true) : 560 != _ohd.ship_id && 555 != _ohd.ship_id || (_ohh.houg += 1, _ohh.kaih += 1, _ohg = true), 0 == _ohg) return _ohf;
            var _ohi = _ohd.get_slotnums(391);
            return _ohf.add(_ohh.multiply(_ohi)), _ohf;
        };
    },
    62067: (_ohj, _ohk, _ohl) => {
        'use strict';
        var _ohm = null;
        defineModule(_ohk);
        Object.defineProperty(_ohk, '__esModule', {
            'value': true
        }), _ohk.getSlot392PersonalEffect = void 0;
        var _ohn = _ohl(74496);
        _ohk.getSlot392PersonalEffect = function(_oho) {
            var _ohp = null,
                _ohq = new _ohn.SlotItemEffectModel(),
                _ohr = false,
                _ohs = new _ohn.SlotItemEffectModel();
            if ('しょうかく' == _oho.yomi || 'ずいかく' == _oho.yomi ? (_ohs.houg += 2, _ohs.kaih += 1, _ohr = true) : 'じゅんよう' != _oho.yomi && 'ひよう' != _oho.yomi || (_ohs.houg += 1, _ohs.kaih += 1, _ohr = true), 116 == _oho.ship_id || 185 == _oho.ship_id || 282 == _oho.ship_id ? (_ohs.houg += 2, _ohs.kaih += 1, _ohr = true) : 117 == _oho.ship_id || 318 == _oho.ship_id || 883 == _oho.ship_id || 888 == _oho.ship_id ? (_ohs.houg += 2, _ohs.kaih += 2, _ohr = true) : 560 != _oho.ship_id && 555 != _oho.ship_id || (_ohs.houg += 3, _ohs.kaih += 2, _ohr = true), 0 == _ohr) return _ohq;
            var _oht = _oho.get_slotnums(392);
            return _ohq.add(_ohs.multiply(_oht)), _ohq;
        };
    },
    87817: function(_ohu, _ohv, _ohw) {
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
            'value': true
        }), _ohv.getSlot397PersonalEffect = void 0;
        var _oi1 = _ohw(74496),
            _oi2 = _ohy(_ohw(18622));
        _ohv.getSlot397PersonalEffect = function(_oi3) {
            var _oi4 = null,
                _oi5 = new _oi1.SlotItemEffectModel(),
                _oi6 = false,
                _oi7 = new _oi1.SlotItemEffectModel(),
                _oi8 = 0,
                _oi9 = 0,
                _oia = false;
            if (651 == _oi3.ship_id ? (_oi7.houg += 5, _oi7.tyku += 2, _oi7.kaih += 1, _oi6 = true, _oia = true, _oi8 = 1, _oi9 = 1) : 656 == _oi3.ship_id && (_oi7.houg += 3, _oi7.tyku += 1, _oi7.kaih += 1, _oi6 = true, _oia = true, _oi8 = 1), 0 == _oi6) return _oi5;
            var _oib = _oi3.get_slotnums(397);
            _oi5.add(_oi7.multiply(_oib));
            var _oic = 0,
                _oid = _oi3.get_each_level_nums(397),
                _oie = 0;
            if (_oia) {
                _oid.forEach(function(_oif, _oig) {
                    _oig >= 4 && (_oie += _oif);
                });
                for (var _oih = 0, _oii = _oi3.have_slot_ids(); _oih < _oii.length; _oih++) {
                    var _oij = _oii[_oih],
                        _oik = _oi2.default.model.slot.getMst(_oij),
                        _oil = _oik.equipType;
                    12 != _oil && 13 != _oil || (_oik.sakuteki >= 5 && (_oic += _oi3.get_slotnums(parseInt(_oij))), _oik.taiku >= 2 && _oi3.get_slotnums(parseInt(_oij)));
                }
            }
            return 1 == _oi8 && _oic > 0 && (_oi5.houg += 3, _oi5.kaih += 3), 1 == _oi9 && (_oi5.houg += 4 * _oie, _oi5.kaih += 1 * _oie), _oi5;
        };
    },
    93526: function(_oim, _oin, _oio) {
        'use strict';
        var _oip = null;
        var _oiq = this && this.__importDefault || function(_oir) {
            var _ois = null;
            return _oir && _oir.__esModule ? _oir : {
                'default': _oir
            };
        };
        defineModule(_oin);
        Object.defineProperty(_oin, '__esModule', {
            'value': true
        }), _oin.getSlot398PersonalEffect = void 0;
        var _oit = _oio(74496),
            _oiu = _oiq(_oio(18622));
        _oin.getSlot398PersonalEffect = function(_oiv) {
            var _oiw = null,
                _oix = new _oit.SlotItemEffectModel(),
                _oiy = false,
                _oiz = new _oit.SlotItemEffectModel(),
                _oj0 = 0,
                _oj1 = 0,
                _oj2 = false;
            if (651 == _oiv.ship_id ? (_oiz.houg += 4, _oiz.tyku += 4, _oiz.kaih += 2, _oiy = true, _oj2 = true, _oj0 = 1, _oj1 = 1) : 656 == _oiv.ship_id && (_oiz.houg += 3, _oiz.tyku += 2, _oiz.kaih += 2, _oiy = true, _oj2 = true, _oj0 = 1, _oj1 = 2), 0 == _oiy) return _oix;
            var _oj3 = _oiv.get_slotnums(398);
            _oix.add(_oiz.multiply(_oj3));
            var _oj4 = 0,
                _oj5 = 0,
                _oj6 = _oiv.get_each_level_nums(398),
                _oj7 = 0;
            if (_oj2) {
                _oj6.forEach(function(_oj8, _oj9) {
                    _oj9 >= 4 && (_oj7 += _oj8);
                });
                for (var _oja = 0, _ojb = _oiv.have_slot_ids(); _oja < _ojb.length; _oja++) {
                    var _ojc = _ojb[_oja],
                        _ojd = _oiu.default.model.slot.getMst(_ojc),
                        _oje = _ojd.equipType;
                    12 != _oje && 13 != _oje || (_ojd.sakuteki >= 5 && (_oj4 += _oiv.get_slotnums(parseInt(_ojc))), _ojd.taiku >= 2 && (_oj5 += _oiv.get_slotnums(parseInt(_ojc))));
                }
            }
            return 1 == _oj0 && (_oj4 > 0 && (_oix.houg += 3, _oix.kaih += 3), _oj5 > 0 && (_oix.tyku += 3, _oix.kaih += 3)), 1 == _oj1 ? (_oix.houg += 3 * _oj7, _oix.kaih += 2 * _oj7) : 2 == _oj1 && (_oix.houg += 2 * _oj7, _oix.kaih += 1 * _oj7), _oix;
        };
    },
    33084: (_ojf, _ojg, _ojh) => {
        'use strict';
        var _oji = null;
        defineModule(_ojg);
        Object.defineProperty(_ojg, '__esModule', {
            'value': true
        }), _ojg.getSlot399PersonalEffect = void 0;
        var _ojj = _ojh(74496);
        _ojg.getSlot399PersonalEffect = function(_ojk) {
            var _ojl = null,
                _ojm = new _ojj.SlotItemEffectModel(),
                _ojn = false,
                _ojo = new _ojj.SlotItemEffectModel(),
                _ojp = 0;
            if (108 == _ojk.ctype && (_ojo.houg += 1, _ojo.kaih += 2, _ojp = 1, _ojn = true), 0 == _ojn) return _ojm;
            var _ojq = _ojk.get_slotnums(399);
            if (_ojm.add(_ojo.multiply(_ojq)), 0 == _ojp) return _ojm;
            var _ojr = _ojk.get_each_level_nums(399),
                _ojs = 0,
                _ojt = 0;
            return _ojr.map(function(_oju, _ojv) {
                _ojv >= 3 && (_ojs += _oju), _ojv >= 5 && (_ojt += _oju);
            }), 1 == _ojp && (_ojm.houg += 1 * _ojs, _ojm.houg += 1 * _ojt), _ojm;
        };
    },
    80225: (_ojw, _ojx, _ojy) => {
        'use strict';
        var _ojz = null;
        defineModule(_ojx);
        Object.defineProperty(_ojx, '__esModule', {
            'value': true
        }), _ojx.getSlot3_122PersonalEffect = void 0;
        var _ok0 = _ojy(74496);
        _ojx.getSlot3_122PersonalEffect = function(_ok1) {
            var _ok2 = null,
                _ok3 = new _ok0.SlotItemEffectModel(),
                _ok4 = false,
                _ok5 = new _ok0.SlotItemEffectModel(),
                _ok6 = 0,
                _ok7 = _ok1.get_slotnums(3) + _ok1.get_slotnums(122) + _ok1.get_slotnums(533) + _ok1.get_slotnums(553);
            if (54 == _ok1.ctype && (_ok5.houg += 1, _ok5.tyku += 2, _ok5.kaih += 1, _ok4 = true, _ok6 = 1, 968 == _ok1.ship_id && (_ok5.houg += 1, _ok5.houm += 1, _ok5.kaih += 1)), 981 == _ok1.ship_id ? (_ok5.houg += 1, _ok5.tyku += 1, _ok5.kaih += 1, _ok4 = true, _ok6 = 2) : 986 != _ok1.ship_id && 426 != _ok1.ship_id && 987 != _ok1.ship_id || (_ok5.houg += 1, _ok5.tyku += 1, _ok7 = _ok1.get_slotnums(533) + _ok1.get_slotnums(553), _ok4 = true, _ok6 = 3), 0 == _ok4) return _ok3;
            if (_ok3.add(_ok5.multiply(_ok7)), 0 == _ok6) return _ok3;
            var _ok8 = _ok1.get_each_level_over_nums([122]).slot[122],
                _ok9 = _ok1.have_level_num_over_dict[533],
                _oka = _ok1.have_level_num_over_dict[553];
            return 1 == _ok6 ? (null != _ok8 && (_ok8[6] >= 1 && (_ok3.kaih += 1 * _ok8[6]), _ok8[7] >= 1 && (_ok3.tyku += 1 * _ok8[7]), _ok8[8] >= 1 && (_ok3.houm += 1 * _ok8[8]), _ok8[9] >= 1 && (_ok3.kaih += 1 * _ok8[9]), _ok8[10] >= 1 && (_ok3.houg += 1 * _ok8[10])), null != _oka && (_oka[2] >= 1 && (_ok3.tyku += 1 * _oka[2]), _oka[4] >= 1 && (_ok3.houg += 1 * _oka[4]), _oka[6] >= 1 && (_ok3.houm += 1 * _oka[6]), _oka[8] >= 1 && (_ok3.tyku += 1 * _oka[8]), _oka[10] >= 1 && (_ok3.kaih += 1 * _oka[10])), null != _ok9 && (_ok9[2] >= 1 && (_ok3.tyku += 1 * _ok9[2]), _ok9[4] >= 1 && (_ok3.houg += 1 * _ok9[4]), _ok9[6] >= 1 && (_ok3.houm += 1 * _ok9[6]), _ok9[8] >= 1 && (_ok3.tyku += 1 * _ok9[8]), _ok9[10] >= 1 && (_ok3.kaih += 1 * _ok9[10])), 968 == _ok1.ship_id && null != _ok9 && (_ok9[1] >= 1 && (_ok3.kaih += 1 * _ok9[1]), _ok9[3] >= 1 && (_ok3.tyku += 1 * _ok9[3]), _ok9[5] >= 1 && (_ok3.houm += 1 * _ok9[5]), _ok9[7] >= 1 && (_ok3.kaih += 1 * _ok9[7]), _ok9[9] >= 1 && (_ok3.houg += 1 * _ok9[9]))) : 2 == _ok6 ? (null != _ok8 && (_ok8[7] >= 1 && (_ok3.tyku += 1 * _ok8[7]), _ok8[8] >= 1 && (_ok3.kaih += 1 * _ok8[8]), _ok8[9] >= 1 && (_ok3.houm += 1 * _ok8[9]), _ok8[10] >= 1 && (_ok3.houg += 1 * _ok8[10])), null != _oka && (_oka[2] >= 1 && (_ok3.tyku += 1 * _oka[2]), _oka[4] >= 1 && (_ok3.houg += 1 * _oka[4]), _oka[6] >= 1 && (_ok3.houm += 1 * _oka[6]), _oka[8] >= 1 && (_ok3.tyku += 1 * _oka[8]), _oka[10] >= 1 && (_ok3.kaih += 1 * _oka[10])), null != _ok9 && (_ok9[4] >= 1 && (_ok3.tyku += 1 * _ok9[4]), _ok9[6] >= 1 && (_ok3.kaih += 1 * _ok9[6]), _ok9[8] >= 1 && (_ok3.houm += 1 * _ok9[8]), _ok9[10] >= 1 && (_ok3.houg += 1 * _ok9[10]))) : 3 == _ok6 && (null != _ok8 && (_ok8[7] >= 1 && (_ok3.tyku += 1 * _ok8[7]), _ok8[8] >= 1 && (_ok3.kaih += 1 * _ok8[8]), _ok8[9] >= 1 && (_ok3.houm += 1 * _ok8[9]), _ok8[10] >= 1 && (_ok3.houg += 1 * _ok8[10])), null != _oka && (_oka[4] >= 1 && (_ok3.tyku += 1 * _oka[4]), _oka[6] >= 1 && (_ok3.kaih += 1 * _oka[6]), _oka[8] >= 1 && (_ok3.houm += 1 * _oka[8]), _oka[10] >= 1 && (_ok3.houg += 1 * _oka[10])), null != _ok9 && (_ok9[4] >= 1 && (_ok3.tyku += 1 * _ok9[4]), _ok9[6] >= 1 && (_ok3.kaih += 1 * _ok9[6]), _ok9[8] >= 1 && (_ok3.houm += 1 * _ok9[8]), _ok9[10] >= 1 && (_ok3.houg += 1 * _ok9[10]))), _ok3;
        };
    },
    97831: (_okb, _okc, _okd) => {
        'use strict';
        var _oke = null;
        defineModule(_okc);
        Object.defineProperty(_okc, '__esModule', {
            'value': true
        }), _okc.getSlot400PersonalEffect = void 0;
        var _okf = _okd(74496);
        _okc.getSlot400PersonalEffect = function(_okg) {
            var _okh = null,
                _oki = new _okf.SlotItemEffectModel(),
                _okj = false,
                _okk = new _okf.SlotItemEffectModel(),
                _okl = 0,
                _okm = false,
                _okn = _okg.getCountryName();
            if (147 != _okg.ship_id && 'ロシア' != _okn || (_okm = true), _okm && (_okk.kaih += 2, _okk.raig += 8, _okk.houg += 1, _okk.souk += 1, _okj = true, _okl = 1), 0 == _okj) return _oki;
            var _oko = _okg.get_slotnums(400);
            return _oki.add(_okk.multiply(_oko)), _okg.get_slotnums(282) > 0 && 1 == _okl && (_oki.houg += 2), _oki;
        };
    },
    4050: function(_okp, _okq, _okr) {
        'use strict';
        var _oks = null;
        var _okt = this && this.__importDefault || function(_oku) {
            var _okv = null;
            return _oku && _oku.__esModule ? _oku : {
                'default': _oku
            };
        };
        defineModule(_okq);
        Object.defineProperty(_okq, '__esModule', {
            'value': true
        }), _okq.getSlot407PersonalEffect = void 0;
        var _okw = _okr(74496),
            _okx = _okt(_okr(18622));
        _okq.getSlot407PersonalEffect = function(_oky) {
            var _okz = null,
                _ol0 = new _okw.SlotItemEffectModel(),
                _ol1 = false,
                _ol2 = new _okw.SlotItemEffectModel(),
                _ol3 = 0;
            if (662 != _oky.ship_id && 663 != _oky.ship_id && 668 != _oky.ship_id || (_ol2.houg += 4, _ol2.tyku += 2, _ol2.kaih += 1, _ol1 = true, _ol3 = 1), 0 == _ol1) return _ol0;
            var _ol4 = _oky.get_slotnums(407);
            _ol0.add(_ol2.multiply(_ol4));
            for (var _ol5 = 0, _ol6 = 0, _ol7 = 0, _ol8 = _oky.have_slot_ids(); _ol7 < _ol8.length; _ol7++) {
                var _ol9 = _ol8[_ol7],
                    _ola = _okx.default.model.slot.getMst(_ol9),
                    _olb = _ola.equipType;
                12 != _olb && 13 != _olb || (_ola.sakuteki >= 5 && (_ol5 += _oky.get_slotnums(parseInt(_ol9))), _ola.taiku >= 2 && (_ol6 += _oky.get_slotnums(parseInt(_ol9))));
            }
            return _ol5 >= 1 && 1 == _ol3 && (_ol0.houg += 2, _ol0.kaih += 2, _ol0.raig += 2), _ol6 >= 1 && 1 == _ol3 && (_ol0.tyku += 2, _ol0.kaih += 3), _ol0;
        };
    },
    78466: (_olc, _old, _ole) => {
        'use strict';
        var _olf = null;
        defineModule(_old);
        Object.defineProperty(_old, '__esModule', {
            'value': true
        }), _old.getSlot408PersonalEffect = void 0;
        var _olg = _ole(74496);
        _old.getSlot408PersonalEffect = function(_olh) {
            var _oli = null,
                _olj = new _olg.SlotItemEffectModel(),
                _olk = false,
                _oll = new _olg.SlotItemEffectModel();
            if ('しんしゅうまる' == _olh.yomi ? (_oll.houg += 2, _oll.saku += 2, _oll.kaih += 2, _olk = true) : 'あきつまる' == _olh.yomi && (_oll.houg += 1, _oll.saku += 1, _oll.kaih += 1, _oll.tais += 1, _olk = true), 2 == _olh.stype && (_oll.houg += 1, _oll.saku += 1, _oll.kaih -= 5, _olk = true), 0 == _olk) return _olj;
            var _olm = _olh.get_slotnums(408);
            return _olj.add(_oll.multiply(_olm)), _olj;
        };
    },
    40061: (_oln, _olo, _olp) => {
        'use strict';
        var _olq = null;
        defineModule(_olo);
        Object.defineProperty(_olo, '__esModule', {
            'value': true
        }), _olo.getSlot409PersonalEffect = void 0;
        var _olr = _olp(74496);
        _olo.getSlot409PersonalEffect = function(_ols) {
            var _olt = null,
                _olu = new _olr.SlotItemEffectModel(),
                _olv = false,
                _olw = new _olr.SlotItemEffectModel();
            if ('しんしゅうまる' == _ols.yomi ? (_olw.houg += 1, _olw.tyku += 2, _olw.kaih += 3, _olv = true) : 'あきつまる' == _ols.yomi && (_olw.houg += 1, _olw.tyku += 1, _olw.kaih += 2, _olw.tais += 1, _olv = true), 0 == _olv) return _olu;
            var _olx = _ols.get_slotnums(409);
            return _olu.add(_olw.multiply(_olx)), _olu;
        };
    },
    79988: (_oly, _olz, _om0) => {
        'use strict';
        var _om1 = null;
        defineModule(_olz);
        Object.defineProperty(_olz, '__esModule', {
            'value': true
        }), _olz.getSlot411PersonalEffect = void 0;
        var _om2 = _om0(74496);
        _olz.getSlot411PersonalEffect = function(_om3) {
            var _om4 = null,
                _om5 = new _om2.SlotItemEffectModel(),
                _om6 = new _om2.SlotItemEffectModel(),
                _om7 = false,
                _om8 = 0;
            if (2 == _om3.stype && (_om6.kaih -= 9, _om7 = true), 3 != _om3.stype && 4 != _om3.stype || (_om6.kaih -= 7, _om7 = true), 21 == _om3.stype && (_om6.kaih -= 6, _om7 = true), 5 != _om3.stype && 6 != _om3.stype || (_om6.kaih -= 5, _om7 = true), 593 == _om3.ship_id && (_om5.houg += 1, _om5.tyku += 2, _om5.kaih += 3), 151 == _om3.ship_id || 411 == _om3.ship_id || 412 == _om3.ship_id || 593 == _om3.ship_id || 954 == _om3.ship_id ? (_om5.houg += 3, _om5.tyku += 4, _om8 = 1) : 694 == _om3.ship_id ? (_om5.houg += 4, _om5.tyku += 2, _om8 = 2) : 541 != _om3.ship_id && 573 != _om3.ship_id && 553 != _om3.ship_id && 554 != _om3.ship_id || (_om5.houg += 2, _om5.tyku += 2, _om8 = 1), _om7) {
                var _om9 = _om3.get_slotnums(411);
                _om5.add(_om6.multiply(_om9));
            }
            if (0 == _om8) return _om5;
            var _oma = _om3.get_each_level_nums(411),
                _omb = 0,
                _omc = 0;
            return _om8 > 0 && _oma.forEach(function(_omd, _ome) {
                _ome >= 4 && (_omb += _omd), _ome >= 5 && (_omc += _omd);
            }), 1 == _om8 ? (_omb >= 1 && (_om5.houg += 1, _om5.tyku += 1), _oma[10] >= 1 && (_om5.houg += 1, _om5.tyku += 1)) : 2 == _om8 && (_omc >= 1 && (_om5.houg += 1, _om5.tyku += 1), _oma[10] >= 1 && (_om5.houg += 2, _om5.tyku += 1)), _om5;
        };
    },
    74428: (_omf, _omg, _omh) => {
        'use strict';
        var _omi = null;
        defineModule(_omg);
        Object.defineProperty(_omg, '__esModule', {
            'value': true
        }), _omg.getSlot412PersonalEffect = void 0;
        var _omj = _omh(74496);
        _omg.getSlot412PersonalEffect = function(_omk) {
            var _oml = null,
                _omm = new _omj.SlotItemEffectModel(),
                _omn = false,
                _omo = 0,
                _omp = new _omj.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_omk.ctype) >= 0 ? (_omm.houg += 2, _omm.raig += 4, _omm.tais += 2, _omp.kaih += 3, _omp.saku += 1, _omn = true, _omo = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_omk.ctype) >= 0 ? (_omm.houg += 3, _omm.raig += 3, _omp.kaih += 2, _omp.saku += 3, _omn = true, _omo = 1) : [7, 13, 29, 8, 9, 31].indexOf(_omk.ctype) >= 0 && (_omm.houg += 1, _omp.kaih += 1, _omp.saku += 1, _omn = true), 0 == _omn) return _omm;
            var _omq = _omk.get_slotnums(412);
            if (_omm.add(_omp.multiply(_omq)), 0 == _omo) return _omm;
            var _omr = _omk.get_each_level_nums(412),
                _oms = 0,
                _omt = 0;
            return _omo > 0 && _omr.forEach(function(_omu, _omv) {
                _omv >= 4 && (_oms += _omu), _omv >= 8 && (_omt += _omu);
            }), 1 == _omo && (_oms > 0 && (_omm.houg += 1), _omt > 0 && (_omm.raig += 1)), _omm;
        };
    },
    2631: (_omw, _omx, _omy) => {
        'use strict';
        var _omz = null;
        defineModule(_omx);
        Object.defineProperty(_omx, '__esModule', {
            'value': true
        }), _omx.getSlot413PersonalEffect = void 0;
        var _on0 = _omy(74496);
        _omx.getSlot413PersonalEffect = function(_on1) {
            var _on2 = null,
                _on3 = new _on0.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_on1.ctype) >= 0 ? (_on3.houg += 2, _on3.raig += 2, _on3.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_on1.ctype) >= 0 && (_on3.houg += 4, _on3.raig += 2, _on3.kaih += 2), 38 == _on1.ctype || 54 == _on1.ctype ? (_on3.houg += 2, _on3.raig += 3, _on3.kaih += 3) : 4 == _on1.ctype || 20 == _on1.ctype || 16 == _on1.ctype || 41 == _on1.ctype || 52 == _on1.ctype ? (_on3.houg += 1, _on3.raig += 2, _on3.kaih += 2) : 21 != _on1.ctype && 34 != _on1.ctype || (_on3.tyku += 2, _on3.raig += 1, _on3.kaih += 1), 'なか' == _on1.yomi || 'ゆら' == _on1.yomi || 'やはぎ' == _on1.yomi || 'のしろ' == _on1.yomi || 'はまなみ' == _on1.yomi || 'しまかぜ' == _on1.yomi || 'きよしも' == _on1.yomi || 'はつしも' == _on1.yomi ? (_on3.tyku += 1, _on3.kaih += 1) : 'じんつう' != _on1.yomi && 'せんだい' != _on1.yomi && 'ながなみ' != _on1.yomi && 'はつしも' != _on1.yomi && 'てるづき' != _on1.yomi || (_on3.houg += 1, _on3.raig += 1), 543 == _on1.ship_id ? (_on3.houg += 1, _on3.kaih += 1) : 159 == _on1.ship_id && (_on3.houg += 2), _on3;
        };
    },
    27177: (_on4, _on5, _on6) => {
        'use strict';
        var _on7 = null;
        defineModule(_on5);
        Object.defineProperty(_on5, '__esModule', {
            'value': true
        }), _on5.getSlot415PersonalEffect = void 0;
        var _on8 = _on6(74496);
        _on5.getSlot415PersonalEffect = function(_on9) {
            var _ona = null,
                _onb = new _on8.SlotItemEffectModel(),
                _onc = [];
            if ('アメリカ' == _on9.getCountryName() && (_onb.saku += 1, _onb.tais += 1, _onc.push(1)), 95 != _on9.ctype && 99 != _on9.ctype && 106 != _on9.ctype && 110 != _on9.ctype && 121 != _on9.ctype || (_onb.houg += 1, _onc.push(2)), 0 == _onc.length) return _onb;
            var _ond = _on9.get_each_level_nums(415),
                _one = 0,
                _onf = 0,
                _ong = 0;
            return _onc.length > 0 && (_ond.forEach(function(_onh, _oni) {
                _oni >= 5 && (_one += _onh), _oni >= 3 && (_onf += _onh), _oni >= 8 && (_ong += _onh);
            }), _onc.forEach(function(_onj) {
                var _onk = null;
                1 == _onj ? _one >= 1 && (_onb.kaih += 1) : 2 == _onj && (_onf >= 1 && (_onb.kaih += 1), _ong >= 1 && (_onb.houg += 1));
            })), _onb;
        };
    },
    53908: (_onl, _onm, _onn) => {
        'use strict';
        var _ono = null;
        defineModule(_onm);
        Object.defineProperty(_onm, '__esModule', {
            'value': true
        }), _onm.getSlot419PersonalEffect = void 0;
        var _onp = _onn(74496);
        _onm.getSlot419PersonalEffect = function(_onq) {
            var _onr = null,
                _ons = new _onp.SlotItemEffectModel(),
                _ont = false,
                _onu = new _onp.SlotItemEffectModel(),
                _onv = 0;
            if ('アメリカ' == _onq.getCountryName() && (_onu.houg += 2, _ont = true, _onv = 1), 0 == _ont) return _ons;
            var _onw = _onq.get_slotnums(419);
            if (_ons.add(_onu.multiply(_onw)), 0 == _onv) return _ons;
            var _onx = _onq.get_each_level_nums(419),
                _ony = 0,
                _onz = 0;
            return _onv > 0 && _onx.forEach(function(_oo0, _oo1) {
                _oo1 >= 2 && (_ony += _oo0), _oo1 >= 7 && (_onz += _oo0);
            }), 1 == _onv && (_ony >= 1 && (_ons.houg += 1 * _ony), _onz >= 1 && (_ons.houg += 1 * _onz)), _ons;
        };
    },
    79813: (_oo2, _oo3, _oo4) => {
        'use strict';
        var _oo5 = null;
        defineModule(_oo3);
        Object.defineProperty(_oo3, '__esModule', {
            'value': true
        }), _oo3.getSlot420PersonalEffect = void 0;
        var _oo6 = _oo4(74496);
        _oo3.getSlot420PersonalEffect = function(_oo7) {
            var _oo8 = null,
                _oo9 = new _oo6.SlotItemEffectModel(),
                _ooa = false,
                _oob = new _oo6.SlotItemEffectModel(),
                _ooc = 0,
                _ood = _oo7.getCountryName();
            if ('アメリカ' != _ood && 67 != _oo7.ctype && 78 != _oo7.ctype && 82 != _oo7.ctype && 88 != _oo7.ctype && 108 != _oo7.ctype && 112 != _oo7.ctype || (_oob.houg += 1, _ooc = 1, _ooa = true), 84 == _oo7.ctype ? (_oob.houg += 1, _ooa = true) : 78 == _oo7.ctype && (_oob.houg -= 1, _ooa = true), 7 == _oo7.stype && (_oob.houg -= 2, _oob.kaih -= 1, _oob.souk -= 2, _ooa = true), 0 == _ooa) return _oo9;
            var _ooe = _oo7.get_slotnums(420);
            if (_oo9.add(_oob.multiply(_ooe)), 0 == _ooc) return _oo9;
            var _oof = _oo7.get_each_level_nums(420),
                _oog = 0,
                _ooh = 0,
                _ooi = 0,
                _ooj = 0;
            _ooc > 0 && _oof.forEach(function(_ook, _ool) {
                _ool >= 3 && (_oog += _ook), _ool >= 7 && (_ooh += _ook), _ool >= 8 && (_ooi += _ook), _ool >= 9 && (_ooj += _ook);
            });
            var _oom = _oof[10];
            return 1 == _ooc && (_oog >= 1 && (_oo9.houg += 1 * _oog), 'アメリカ' == _ood && (_ooh >= 1 && (_oo9.houm += 1 * _ooh), _ooi >= 1 && (_oo9.houg += 1 * _ooi), _ooj >= 1 && (_oo9.houm += 1 * _ooj), _oom >= 1 && (_oo9.houg += 1 * _oom))), _oo9;
        };
    },
    16088: (_oon, _ooo, _oop) => {
        'use strict';
        var _ooq = null;
        defineModule(_ooo);
        Object.defineProperty(_ooo, '__esModule', {
            'value': true
        }), _ooo.getSlot421PersonalEffect = void 0;
        var _oor = _oop(74496);
        _ooo.getSlot421PersonalEffect = function(_oos) {
            var _oot = null,
                _oou = new _oor.SlotItemEffectModel(),
                _oov = false,
                _oow = new _oor.SlotItemEffectModel(),
                _oox = 0,
                _ooy = _oos.getCountryName();
            if ('アメリカ' != _ooy && 67 != _oos.ctype && 78 != _oos.ctype && 82 != _oos.ctype && 88 != _oos.ctype && 108 != _oos.ctype && 112 != _oos.ctype || (_oow.houg += 2, _oov = true, _oox = 1), 84 == _oos.ctype ? (_oow.houg += 1, _oov = true) : 78 == _oos.ctype && (_oow.houg -= 1, _oov = true), 7 == _oos.stype && (_oow.houg -= 2, _oow.kaih -= 1, _oow.souk -= 2, _oov = true), 0 == _oov) return _oou;
            var _ooz = _oos.get_slotnums(421);
            if (_oou.add(_oow.multiply(_ooz)), 0 == _oox) return _oou;
            var _op0 = _oos.get_each_level_nums(421),
                _op1 = 0,
                _op2 = 0,
                _op3 = 0,
                _op4 = 0,
                _op5 = 0;
            _oox > 0 && _op0.forEach(function(_op6, _op7) {
                _op7 >= 5 && (_op1 += _op6), _op7 >= 6 && (_op2 += _op6), _op7 >= 7 && (_op3 += _op6), _op7 >= 8 && (_op4 += _op6), _op7 >= 9 && (_op5 += _op6);
            });
            var _op8 = _op0[10];
            return 1 == _oox && (_op1 >= 1 && (_oou.houg += 1 * _op1), 'アメリカ' == _ooy && (_op2 >= 1 && (_oou.houm += 1 * _op2), _op3 >= 1 && (_oou.houg += 1 * _op3), _op4 >= 1 && (_oou.houm += 1 * _op4), _op5 >= 1 && (_oou.houg += 1 * _op5), _op8 >= 1 && (_oou.houm += 1 * _op8))), _oou;
        };
    },
    69939: (_op9, _opa, _opb) => {
        'use strict';
        var _opc = null;
        defineModule(_opa);
        Object.defineProperty(_opa, '__esModule', {
            'value': true
        }), _opa.getSlot422PersonalEffect = void 0;
        var _opd = _opb(74496);
        _opa.getSlot422PersonalEffect = function(_ope) {
            var _opf = null,
                _opg = new _opd.SlotItemEffectModel(),
                _oph = false,
                _opi = new _opd.SlotItemEffectModel();
            if ('アメリカ' != _ope.getCountryName() && 67 != _ope.ctype && 78 != _ope.ctype && 82 != _ope.ctype && 88 != _ope.ctype && 108 != _ope.ctype && 112 != _ope.ctype || (_opi.houg += 1, _opi.kaih += 1, _oph = true), 84 == _ope.ctype && (_opi.houg += 1, _opi.tyku += 1, _oph = true), 707 == _ope.ship_id && (_opi.houg += 2, _opi.kaih += 2, _opi.tyku += 2, _oph = true), 0 == _oph) return _opg;
            var _opj = _ope.get_slotnums(422);
            return _opg.add(_opi.multiply(_opj)), _opg;
        };
    },
    33734: (_opk, _opl, _opm) => {
        'use strict';
        var _opn = null;
        defineModule(_opl);
        Object.defineProperty(_opl, '__esModule', {
            'value': true
        }), _opl.getSlot423PersonalEffect = void 0;
        var _opo = _opm(74496);
        _opl.getSlot423PersonalEffect = function(_opp) {
            var _opq = null,
                _opr = new _opo.SlotItemEffectModel(),
                _ops = false,
                _opt = new _opo.SlotItemEffectModel();
            78 != _opp.ctype && 112 != _opp.ctype || (_opt.houg += 2, _opt.tyku += 2, _opt.kaih += 2, _opt.saku += 2, _ops = true);
            var _opu = _opp.getCountryName();
            if (67 == _opp.ctype || 78 == _opp.ctype || 82 == _opp.ctype || 88 == _opp.ctype || 108 == _opp.ctype || 112 == _opp.ctype ? (_opt.houg += 2, _opt.tyku += 2, _opt.kaih += 2, _opt.saku += 2, _ops = true) : 'アメリカ' == _opu && (_opt.houg += 1, _opt.tyku += 1, _opt.kaih += 1, _opt.saku += 1, _ops = true), 0 == _ops) return _opr;
            var _opv = _opp.get_slotnums(423);
            return _opr.add(_opt.multiply(_opv)), _opr;
        };
    },
    34432: (_opw, _opx, _opy) => {
        'use strict';
        var _opz = null;
        defineModule(_opx);
        Object.defineProperty(_opx, '__esModule', {
            'value': true
        }), _opx.getSlot424PersonalEffect = void 0;
        var _oq0 = _opy(74496);
        _opx.getSlot424PersonalEffect = function(_oq1) {
            var _oq2 = null,
                _oq3 = new _oq0.SlotItemEffectModel(),
                _oq4 = false,
                _oq5 = new _oq0.SlotItemEffectModel(),
                _oq6 = 0;
            67 != _oq1.ctype && 78 != _oq1.ctype && 82 != _oq1.ctype && 88 != _oq1.ctype && 108 != _oq1.ctype && 112 != _oq1.ctype || (_oq5.houg += 2, _oq5.raig += 3, _oq4 = true, _oq6 = 1);
            var _oq7 = _oq1.get_slotnums(424);
            _oq4 && _oq3.add(_oq5.multiply(_oq7));
            var _oq8 = _oq1.get_each_level_nums(424),
                _oq9 = 0,
                _oqa = 0,
                _oqb = 0;
            _oq8.forEach(function(_oqc, _oqd) {
                _oqd >= 2 && (_oq9 += _oqc), _oqd >= 6 && (_oqa += _oqc), _oqd >= 8 && (_oqb += _oqc);
            });
            var _oqe = _oq8[10];
            return 1 == _oq6 && (_oq9 >= 1 && (_oq3.houg += 1 * _oq9), _oqa >= 1 && (_oq3.houg += 1 * _oqa), _oqb >= 1 && (_oq3.houm += 1 * _oqb)), _oqe > 0 && (_oq3.houm += 1 * _oqe), _oq3;
        };
    },
    97423: (_oqf, _oqg, _oqh) => {
        'use strict';
        var _oqi = null;
        defineModule(_oqg);
        Object.defineProperty(_oqg, '__esModule', {
            'value': true
        }), _oqg.getSlot425PersonalEffect = void 0;
        var _oqj = _oqh(74496);
        _oqg.getSlot425PersonalEffect = function(_oqk) {
            var _oql = null,
                _oqm = new _oqj.SlotItemEffectModel(),
                _oqn = false,
                _oqo = new _oqj.SlotItemEffectModel(),
                _oqp = 0;
            67 != _oqk.ctype && 78 != _oqk.ctype && 82 != _oqk.ctype && 88 != _oqk.ctype && 108 != _oqk.ctype && 112 != _oqk.ctype || (_oqo.houg += 2, _oqo.tais += 2, _oqo.raig += 1, _oqo.saku += 1, _oqn = true, _oqp = 1);
            var _oqq = _oqk.get_slotnums(425);
            _oqn && _oqm.add(_oqo.multiply(_oqq));
            var _oqr = _oqk.get_each_level_nums(425),
                _oqs = 0,
                _oqt = 0,
                _oqu = 0,
                _oqv = 0,
                _oqw = 0,
                _oqx = 0;
            _oqr.forEach(function(_oqy, _oqz) {
                _oqz >= 2 && (_oqs += _oqy), _oqz >= 4 && (_oqt += _oqy), _oqz >= 6 && (_oqu += _oqy), _oqz >= 7 && (_oqv += _oqy), _oqz >= 8 && (_oqw += _oqy), _oqz >= 9 && (_oqx += _oqy);
            });
            var _or0 = _oqr[10];
            return 1 == _oqp && (_oqs >= 1 && (_oqm.tais += 1 * _oqs), _oqt >= 1 && (_oqm.houg += 1 * _oqt), _oqu >= 1 && (_oqm.tais += 1 * _oqu), _oqv >= 1 && (_oqm.houm += 1 * _oqv), _oqw >= 1 && (_oqm.raig += 1 * _oqw), _oqx >= 1 && (_oqm.houg += 1 * _oqx), _or0 >= 1 && (_oqm.tais += 1 * _or0)), _oqv >= 1 && (_oqm.houg += 1 * _oqv), _oqw >= 1 && (_oqm.tais += 1 * _oqw), _oqx >= 1 && (_oqm.houm += 1 * _oqx), _or0 >= 1 && (_oqm.houm += 1 * _or0), _oqm;
        };
    },
    23551: (_or1, _or2, _or3) => {
        'use strict';
        var _or4 = null;
        defineModule(_or2);
        Object.defineProperty(_or2, '__esModule', {
            'value': true
        }), _or2.getSlot430PersonalEffect = void 0;
        var _or5 = _or3(74496);
        _or2.getSlot430PersonalEffect = function(_or6) {
            var _or7 = null,
                _or8 = new _or5.SlotItemEffectModel(),
                _or9 = false,
                _ora = new _or5.SlotItemEffectModel(),
                _orb = 0;
            if (113 == _or6.ctype && (_ora.tyku += 1, _ora.kaih += 1, _or9 = true), 58 != _or6.ctype && 61 != _or6.ctype && 64 != _or6.ctype && 68 != _or6.ctype && 80 != _or6.ctype && 92 != _or6.ctype && 113 != _or6.ctype && 124 != _or6.ctype || (_ora.tyku += 2, _ora.kaih += 1, _or9 = true, _orb = 1), 0 == _or9) return _or8;
            var _orc = _or6.get_slotnums(430);
            if (_or8.add(_ora.multiply(_orc)), 0 == _orb) return _or8;
            var _ord = _or6.get_each_level_nums(430),
                _ore = 0,
                _orf = 0,
                _org = 0;
            if (_orb > 0 && _ord.forEach(function(_orh, _ori) {
                    _ori >= 2 && (_ore += _orh), _ori >= 4 && (_orf += _orh), _ori >= 7 && (_org += _orh);
                }), 1 == _orb) {
                _ore >= 1 && (_or8.kaih += 1 * _ore), _orf >= 1 && (_or8.tyku += 1 * _orf), _org >= 1 && (_or8.kaih += 1 * _org);
                var _orj = _ord[10];
                _orj >= 1 && (_or8.tyku += 1 * _orj);
            }
            return _or8;
        };
    },
    6173: (_ork, _orl, _orm) => {
        'use strict';
        var _orn = null;
        defineModule(_orl);
        Object.defineProperty(_orl, '__esModule', {
            'value': true
        }), _orl.getSlot437PersonalEffect = void 0;
        var _oro = _orm(74496);
        _orl.getSlot437PersonalEffect = function(_orp) {
            var _orq = null,
                _orr = new _oro.SlotItemEffectModel(),
                _ors = false,
                _ort = new _oro.SlotItemEffectModel();
            if (285 == _orp.ship_id ? (_ort.houg += 3, _ort.tyku += 3, _ort.kaih += 4, _ors = true) : 894 == _orp.ship_id || 899 == _orp.ship_id ? (_ort.houg += 4, _ort.tyku += 4, _ort.kaih += 4, _ors = true) : 196 == _orp.ship_id || 197 == _orp.ship_id ? (_ort.houg += 2, _ort.tyku += 2, _ort.kaih += 3, _ors = true) : 508 == _orp.ship_id || 509 == _orp.ship_id || 646 == _orp.ship_id ? (_ort.houg += 2, _ort.tyku += 2, _ort.kaih += 2, _ors = true) : 888 != _orp.ship_id && 883 != _orp.ship_id && 553 != _orp.ship_id && 554 != _orp.ship_id || (_ort.houg += 1, _ort.tyku += 2, _ort.kaih += 2, _ors = true), 0 == _ors) return _orr;
            var _oru = _orp.get_slotnums(437);
            return _orr.add(_ort.multiply(_oru)), _orr;
        };
    },
    53709: (_orv, _orw, _orx) => {
        'use strict';
        var _ory = null;
        defineModule(_orw);
        Object.defineProperty(_orw, '__esModule', {
            'value': true
        }), _orw.getSlot438PersonalEffect = void 0;
        var _orz = _orx(74496);
        _orw.getSlot438PersonalEffect = function(_os0) {
            var _os1 = null,
                _os2 = new _orz.SlotItemEffectModel(),
                _os3 = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_os0.ctype) > -1 && (_os2.tais += 1, _os2.kaih += 1), 160 == _os0.ship_id || 488 == _os0.ship_id || 141 == _os0.ship_id ? (_os2.tais += 1, _os2.kaih += 1) : 145 != _os0.ship_id && 588 != _os0.ship_id && 667 != _os0.ship_id && 578 != _os0.ship_id && 476 != _os0.ship_id && 363 != _os0.ship_id && 961 != _os0.ship_id || (_os3 = 1), 'うしお' == _os0.yomi || 'まいかぜ' == _os0.yomi || 'いそかぜ' == _os0.yomi || 'はまかぜ' == _os0.yomi || 'いかづち' == _os0.yomi || 'やまぐも' == _os0.yomi || 'うみかぜ' == _os0.yomi || 'かわかぜ' == _os0.yomi || 'すずかぜ' == _os0.yomi ? _os2.tais += 1 : 'しぐれ' != _os0.yomi && 'やまかぜ' != _os0.yomi && 'かみかぜ' != _os0.yomi && 'はるかぜ' != _os0.yomi && 'みくら' != _os0.yomi && 'いしがき' != _os0.yomi || (_os2.tais += 1, _os2.kaih += 1), 0 == _os3) return _os2;
            var _os4 = _os0.get_each_level_nums(438),
                _os5 = 0,
                _os6 = 0,
                _os7 = 0,
                _os8 = _os4[10];
            return _os3 > 0 && _os4.forEach(function(_os9, _osa) {
                _osa >= 4 && (_os5 += _os9), _osa >= 6 && (_os6 += _os9), _osa >= 8 && (_os7 += _os9);
            }), 1 == _os3 && (_os5 >= 1 && (_os2.tais += 1), _os6 >= 1 && (_os2.kaih += 1), _os7 >= 1 && (_os2.tais += 1), _os8 >= 1 && (_os2.kaih += 1)), _os2;
        };
    },
    99790: (_osb, _osc, _osd) => {
        'use strict';
        var _ose = null;
        defineModule(_osc);
        Object.defineProperty(_osc, '__esModule', {
            'value': true
        }), _osc.getSlot439PersonalEffect = void 0;
        var _osf = _osd(74496);
        _osc.getSlot439PersonalEffect = function(_osg) {
            var _osh = null,
                _osi = new _osf.SlotItemEffectModel();
            1 != _osg.stype && 2 != _osg.stype && 3 != _osg.stype && 21 != _osg.stype || (_osi.tais += 1, _osi.kaih += 1), 101 != _osg.ctype && 1 != _osg.stype || (_osi.tais += 1);
            var _osj = _osg.getCountryName();
            return 'アメリカ' != _osj && 'イギリス' != _osj || (_osi.tais += 2), _osi;
        };
    },
    18387: (_osk, _osl, _osm) => {
        'use strict';
        var _osn = null;
        defineModule(_osl);
        Object.defineProperty(_osl, '__esModule', {
            'value': true
        }), _osl.getSlot440_441PersonalEffect = void 0;
        var _oso = _osm(74496);
        _osl.getSlot440_441PersonalEffect = function(_osp) {
            var _osq = null,
                _osr = new _oso.SlotItemEffectModel();
            return 114 == _osp.ctype && (_osr.raig += 2), _osr;
        };
    },
    70941: (_oss, _ost, _osu) => {
        'use strict';
        var _osv = null;
        defineModule(_ost);
        Object.defineProperty(_ost, '__esModule', {
            'value': true
        }), _ost.getSlot442_443PersonalEffect = void 0;
        var _osw = _osu(74496);
        _ost.getSlot442_443PersonalEffect = function(_osx) {
            var _osy = null,
                _osz = new _osw.SlotItemEffectModel();
            return 122 == _osx.ctype ? (_osz.raig += 1, _osz.kaih += 2) : 114 == _osx.ctype && (_osz.raig += 2), _osz;
        };
    },
    35025: (_ot0, _ot1, _ot2) => {
        'use strict';
        var _ot3 = null;
        defineModule(_ot1);
        Object.defineProperty(_ot1, '__esModule', {
            'value': true
        }), _ot1.getSlot447PersonalEffect = void 0;
        var _ot4 = _ot2(74496);
        _ot1.getSlot447PersonalEffect = function(_ot5) {
            var _ot6 = null,
                _ot7 = new _ot4.SlotItemEffectModel(),
                _ot8 = _ot5.get_each_level_nums(447),
                _ot9 = 0,
                _ota = 0,
                _otb = 0,
                _otc = 0;
            _ot8.forEach(function(_otd, _ote) {
                _ote >= 2 && (_ot9 += _otd), _ote >= 4 && (_ota += _otd), _ote >= 6 && (_otb += _otd), _ote >= 8 && (_otc += _otd);
            }), _ot9 >= 1 && (_ot7.houg += 1 * _ot9), _ota >= 1 && (_ot7.tyku += 1 * _ota), _otb >= 1 && (_ot7.tais += 1 * _otb), _otc >= 1 && (_ot7.kaih += 1 * _otc);
            var _otf = _ot8[10];
            _otf >= 1 && (_ot7.tais += 1 * _otf);
            var _otg = false,
                _oth = new _ot4.SlotItemEffectModel();
            if (76 == _ot5.ctype && (_oth.houg += 1, _oth.tais += 1, _oth.kaih += 2, _otg = true), 'うんよう' == _ot5.yomi ? (_oth.houg += 1, _oth.tais += 1, _oth.kaih += 1, _otg = true) : 'ほうしょう' != _ot5.yomi && 'たいげい・りゅうほう' != _ot5.yomi || (_oth.houg += 1, _oth.tais += 2, _oth.kaih += 1, _otg = true), 0 == _otg) return _ot7;
            894 != _ot5.ship_id && 899 != _ot5.ship_id || (_oth.houg += 1, _oth.kaih += 1, _oth.tais += 1, _oth.tyku += 1, _otg = true);
            var _oti = _ot5.get_slotnums(447);
            return _ot7.add(_oth.multiply(_oti)), _ot7;
        };
    },
    96804: (_otj, _otk, _otl) => {
        'use strict';
        var _otm = null;
        defineModule(_otk);
        Object.defineProperty(_otk, '__esModule', {
            'value': true
        }), _otk.getSlot450PersonalEffect = void 0;
        var _otn = _otl(74496);
        _otk.getSlot450PersonalEffect = function(_oto) {
            var _otp = null,
                _otq = new _otn.SlotItemEffectModel(),
                _otr = false,
                _ots = new _otn.SlotItemEffectModel();
            if (101 == _oto.ctype && (_ots.houg += 1, _ots.tyku += 2, _ots.souk += 1, _ots.kaih += 3, _otr = true), 1 == _oto.stype && (_ots.tyku += 1, _ots.souk += 1, _ots.kaih += 2, _otr = true), 0 == _otr) return _otq;
            var _ott = _oto.get_slotnums(450);
            return _otq.add(_ots.multiply(_ott)), _otq;
        };
    },
    33896: (_otu, _otv, _otw) => {
        'use strict';
        var _otx = null;
        defineModule(_otv);
        Object.defineProperty(_otv, '__esModule', {
            'value': true
        }), _otv.getSlot451PersonalEffect = void 0;
        var _oty = _otw(74496);
        _otv.getSlot451PersonalEffect = function(_otz) {
            var _ou0 = null,
                _ou1 = new _oty.SlotItemEffectModel(),
                _ou2 = false,
                _ou3 = new _oty.SlotItemEffectModel(),
                _ou4 = 0;
            if ('あきつまる' == _otz.yomi ? (_ou3.houg += 1, _ou3.tais += 2, _ou2 = true, 166 == _otz.ship_id && (_ou4 = 2)) : 'やましおまる' != _otz.yomi && 'くまのまる' != _otz.yomi || (_ou3.houg += 1, _ou3.tais += 3, _ou2 = true, _ou4 = 1), 0 == _ou2) return _ou1;
            var _ou5 = _otz.get_slotnums(451);
            if (_ou1.add(_ou3.multiply(_ou5)), 0 == _ou4) return _ou1;
            var _ou6 = _otz.get_each_level_nums(451),
                _ou7 = [];
            return _ou4 > 0 && _ou6.forEach(function(_ou8, _ou9) {
                var _oua = null;
                for (var _oub = 1; _oub <= _otz.SLOT_LEVEL_MAX; _oub++) _ou9 >= _oub && (null == _ou7[_oub] && (_ou7[_oub] = 0), _ou7[_oub] += _ou8);
            }), 1 == _ou4 ? (_ou7[1] >= 1 && (_ou1.houg += 2 * _ou7[1]), _ou7[2] >= 1 && (_ou1.houm += 1 * _ou7[2]), _ou7[3] >= 1 && (_ou1.tais += 1 * _ou7[3]), _ou7[4] >= 1 && (_ou1.houg += 1 * _ou7[4]), _ou7[6] >= 1 && (_ou1.houm += 1 * _ou7[6]), _ou7[8] >= 1 && (_ou1.tais += 1 * _ou7[8]), _ou7[10] >= 1 && (_ou1.houg += 1 * _ou7[10])) : 2 == _ou4 && (_ou7[1] >= 1 && (_ou1.houg += 1 * _ou7[1]), _ou7[3] >= 1 && (_ou1.tais += 1 * _ou7[3]), _ou7[5] >= 1 && (_ou1.houm += 1 * _ou7[5]), _ou7[7] >= 1 && (_ou1.tais += 1 * _ou7[7]), _ou7[10] >= 1 && (_ou1.houg += 1 * _ou7[10])), _ou1;
        };
    },
    11031: function(_ouc, _oud, _oue) {
        'use strict';
        var _ouf = null;
        var _oug = this && this.__importDefault || function(_ouh) {
            var _oui = null;
            return _ouh && _ouh.__esModule ? _ouh : {
                'default': _ouh
            };
        };
        defineModule(_oud);
        Object.defineProperty(_oud, '__esModule', {
            'value': true
        }), _oud.getSlot455PersonalEffect = void 0;
        var _ouj = _oue(74496),
            _ouk = _oug(_oue(18622));
        _oud.getSlot455PersonalEffect = function(_oul) {
            var _oum = null,
                _oun = new _ouj.SlotItemEffectModel(),
                _ouo = false,
                _oup = new _ouj.SlotItemEffectModel(),
                _ouq = 0,
                _our = _oul.get_slotnums(455);
            if (1 != _oul.ctype && 5 != _oul.ctype && 12 != _oul.ctype || (_oup.houg += 2, _oup.tyku += 1, 12 == _oul.ctype && (_oup.houg += 1), 666 == _oul.ship_id ? (_oup.houg += 1, _oup.tais += 1) : 959 == _oul.ship_id && (_oup.houg += 2, _our >= 2 && (_oun.houg += 2), _our >= 3 && (_oun.houg += 3)), _ouq = 1, _ouo = true), 'うらなみ' == _oul.yomi && (_oup.houg += 1, 647 == _oul.ship_id && (_oup.houg += 1, _oup.raig += 1, _oup.tais += 1, _oup.kaih += 1), _ouo = true), 0 == _ouo) return _oun;
            if (_oun.add(_oup.multiply(_our)), 0 == _ouq) return _oun;
            for (var _ous = 0, _out = 0, _ouu = 0, _ouv = _oul.have_slot_ids(); _ouu < _ouv.length; _ouu++) {
                var _ouw = _ouv[_ouu],
                    _oux = _ouk.default.model.slot.getMst(_ouw),
                    _ouy = _oux.equipType;
                12 != _ouy && 13 != _ouy || (_oux.sakuteki >= 5 && (_ous += _oul.get_slotnums(parseInt(_ouw))), _oux.taiku >= 2 && (_out += _oul.get_slotnums(parseInt(_ouw))));
            }
            if (1 == _ouq) {
                _ous >= 1 && (_oun.houg += 3, _oun.kaih += 2, _oun.raig += 1);
                var _ouz = _oul.get_slotnums(13),
                    _ov0 = _oul.get_slotnums(125),
                    _ov1 = _oul.get_slotnums(285),
                    _ov2 = _ouz + _ov0 + _ov1;
                1 == _ov2 ? (_oun.houg += 1, _oun.raig += 3) : _ov2 >= 2 && (_oun.houg += 2, _oun.raig += 5), _ov1 >= 1 && (_oun.raig += 1), _out >= 1 && (_oun.tyku += 4);
            }
            return _oun;
        };
    },
    71383: (_ov3, _ov4, _ov5) => {
        'use strict';
        var _ov6 = null;
        defineModule(_ov4);
        Object.defineProperty(_ov4, '__esModule', {
            'value': true
        }), _ov4.getSlot456PersonalEffect = void 0;
        var _ov7 = _ov5(74496);
        _ov4.getSlot456PersonalEffect = function(_ov8) {
            var _ov9 = null,
                _ova = new _ov7.SlotItemEffectModel(),
                _ovb = false,
                _ovc = new _ov7.SlotItemEffectModel(),
                _ovd = _ov8.getCountryName();
            if ('アメリカ' == _ovd && (_ovc.houg += 3, _ovc.kaih += 4, _ovc.saku += 4, _ova.houm += 3, _ovb = true), 'イギリス' != _ovd && 'オーストラリア' != _ovd || (_ovc.houg += 2, _ovc.kaih += 2, _ovc.saku += 2, _ova.houm += 2, _ovb = true), 87 != _ov8.ctype && 91 != _ov8.ctype || (_ovc.houg += 1, _ova.leng += 1, _ovb = true), 651 != _ov8.ship_id && 656 != _ov8.ship_id || (_ova.houg += 2, _ova.kaih += 2, _ova.saku += 3, _ova.leng += 1, _ova.houm += 2), 0 == _ovb) return _ova;
            var _ove = _ov8.get_slotnums(456);
            return _ova.add(_ovc.multiply(_ove)), _ova;
        };
    },
    55888: (_ovf, _ovg, _ovh) => {
        'use strict';
        var _ovi = null;
        defineModule(_ovg);
        Object.defineProperty(_ovg, '__esModule', {
            'value': true
        }), _ovg.getSlot457PersonalEffect = void 0;
        var _ovj = _ovh(74496);
        _ovg.getSlot457PersonalEffect = function(_ovk) {
            var _ovl = null,
                _ovm = new _ovj.SlotItemEffectModel(),
                _ovn = 0;
            if (109 == _ovk.ctype ? (_ovm.raig += 3, _ovm.kaih += 3, _ovn = 1) : 71 == _ovk.ctype || 103 == _ovk.ctype ? (_ovm.raig += 2, _ovm.kaih += 2, _ovn = 2) : 44 == _ovk.ctype && (_ovm.raig += 1, _ovm.kaih += 4, _ovn = 3), 0 == _ovn) return _ovm;
            var _ovo = _ovk.get_each_level_nums(461),
                _ovp = [];
            return _ovn > 0 && _ovo.forEach(function(_ovq, _ovr) {
                var _ovs = null;
                for (var _ovt = 1; _ovt <= _ovk.SLOT_LEVEL_MAX; _ovt++) null == _ovp[_ovt] && (_ovp[_ovt] = 0), _ovr >= _ovt && (_ovp[_ovt] += _ovq);
            }), 1 == _ovn ? (_ovp[2] >= 1 && (_ovm.raig += 1 * _ovp[2]), _ovp[3] >= 1 && (_ovm.kaih += 1 * _ovp[3]), _ovp[4] >= 1 && (_ovm.raig += 1 * _ovp[4]), _ovp[5] >= 1 && (_ovm.houm += 1 * _ovp[5]), _ovp[6] >= 1 && (_ovm.raig += 1 * _ovp[6]), _ovp[8] >= 1 && (_ovm.raig += 1 * _ovp[8]), _ovp[10] >= 1 && (_ovm.houm += 1 * _ovp[10])) : 2 == _ovn ? (_ovp[3] >= 1 && (_ovm.kaih += 1 * _ovp[3]), _ovp[4] >= 1 && (_ovm.raig += 1 * _ovp[4]), _ovp[6] >= 1 && (_ovm.raig += 1 * _ovp[6]), _ovp[8] >= 1 && (_ovm.raig += 1 * _ovp[8]), _ovp[10] >= 1 && (_ovm.houm += 1 * _ovp[10])) : 3 == _ovn && (_ovp[4] >= 1 && (_ovm.raig += 1 * _ovp[4]), _ovp[6] >= 1 && (_ovm.raig += 1 * _ovp[6]), _ovp[8] >= 1 && (_ovm.raig += 1 * _ovp[8]), _ovp[10] >= 1 && (_ovm.houm += 1 * _ovp[10])), _ovm;
        };
    },
    2258: (_ovu, _ovv, _ovw) => {
        'use strict';
        var _ovx = null;
        defineModule(_ovv);
        Object.defineProperty(_ovv, '__esModule', {
            'value': true
        }), _ovv.getSlot458PersonalEffect = void 0;
        var _ovy = _ovw(74496);
        _ovv.getSlot458PersonalEffect = function(_ovz) {
            var _ow0 = null,
                _ow1 = new _ovy.SlotItemEffectModel(),
                _ow2 = 0,
                _ow3 = false;
            if (13 != _ovz.stype && 14 != _ovz.stype || (_ow3 = true), 109 == _ovz.ctype ? (_ow1.raig += 3, _ow1.kaih += 6, _ow2 = 1) : 71 == _ovz.ctype || 103 == _ovz.ctype ? (_ow1.raig += 3, _ow1.kaih += 4, _ow2 = 2) : 44 == _ovz.ctype && (_ow1.raig += 3, _ow1.kaih += 3, _ow2 = 3), 0 == _ow3 && 0 == _ow2) return _ow1;
            var _ow4 = [];
            [458, 461].forEach(function(_ow5) {
                var _ow6 = null,
                    _ow7 = _ovz.get_each_level_nums(_ow5);
                null == _ow4[_ow5] && (_ow4[_ow5] = []), _ow7.forEach(function(_ow8, _ow9) {
                    var _owa = null;
                    for (var _owb = 1; _owb <= _ovz.SLOT_LEVEL_MAX; _owb++) null == _ow4[_ow5][_owb] && (_ow4[_ow5][_owb] = 0), _ow9 >= _owb && (_ow4[_ow5][_owb] += _ow8);
                });
            });
            var _owc = _ow4[458][2],
                _owd = _ow4[458][3],
                _owe = _ow4[458][4],
                _owf = _ow4[458][5],
                _owg = _ow4[458][6],
                _owh = _ow4[458][8],
                _owi = _ow4[458][10],
                _owj = _ow4[461][4];
            return _ow2 >= 1 && _ow2 <= 3 && (_owe >= 1 && (_ow1.houm += 1 * _owe), _owg >= 1 && (_ow1.kaih += 1 * _owg), _owh >= 1 && (_ow1.raig += 1 * _owh)), _ow3 && (_owd >= 1 && (_ow1.kaih += 1 * _owd), _owf >= 1 && (_ow1.raig += 1 * _owf), _owi >= 1 && (_ow1.houm += 1 * _owi), _owc >= 1 && _owj >= 1 && (_ow1.raig += 7, _ow1.houm += 5)), _ow1;
        };
    },
    43768: (_owk, _owl, _owm) => {
        'use strict';
        var _own = null;
        defineModule(_owl);
        Object.defineProperty(_owl, '__esModule', {
            'value': true
        }), _owl.getSlot463PersonalEffect = void 0;
        var _owo = _owm(74496);
        _owl.getSlot463PersonalEffect = function(_owp) {
            var _owq = null,
                _owr = new _owo.SlotItemEffectModel(),
                _ows = false,
                _owt = new _owo.SlotItemEffectModel(),
                _owu = _owp.get_slotnums(142),
                _owv = _owp.get_slotnums(460),
                _oww = _owu + _owv;
            if (37 == _owp.ctype && (_owt.houg += 1, _owt.tyku += 2, _owt.kaih += 1, _owt.houm += 1, _oww >= 1 && (_owr.tyku += 1, _owr.kaih += 1, _owr.houm += 1), _ows = true), 916 != _owp.ship_id && 911 != _owp.ship_id && 546 != _owp.ship_id || (_owt.houg += 1, _owt.kaih += 1, _owt.houm += 2, _owv >= 1 && (_owr.houg += 1, _owr.kaih += 1, _owr.houm += 2), _ows = true), 0 == _ows) return _owr;
            var _owx = _owp.get_slotnums(463);
            return _owr.add(_owt.multiply(_owx)), _owr;
        };
    },
    92174: (_owy, _owz, _ox0) => {
        'use strict';
        var _ox1 = null;
        defineModule(_owz);
        Object.defineProperty(_owz, '__esModule', {
            'value': true
        }), _owz.getSlot464PersonalEffect = void 0;
        var _ox2 = _ox0(74496);
        _owz.getSlot464PersonalEffect = function(_ox3) {
            var _ox4 = null,
                _ox5 = new _ox2.SlotItemEffectModel(),
                _ox6 = false,
                _ox7 = new _ox2.SlotItemEffectModel(),
                _ox8 = _ox3.get_slotnums(142),
                _ox9 = _ox3.get_slotnums(460),
                _oxa = _ox8 + _ox9;
            if (37 == _ox3.ctype ? (_ox7.tyku += 3, _ox7.kaih += 2, _oxa >= 1 && (_ox5.tyku += 2, _ox5.kaih += 1, _ox5.houm += 1), _ox6 = true) : 6 != _ox3.ctype && 73 != _ox3.ctype && 113 != _ox3.ctype || (_ox7.tyku = _ox7.tyku - 2, _ox7.kaih = _ox7.kaih - 2, _ox6 = true), 916 != _ox3.ship_id && 911 != _ox3.ship_id && 546 != _ox3.ship_id && 593 != _ox3.ship_id && 954 != _ox3.ship_id || (_ox7.tyku += 2, _ox7.kaih += 2, _ox9 >= 1 && (_ox5.houg += 2, _ox5.tyku += 2, _ox5.kaih += 2, _ox5.houm += 3), _ox6 = true), 0 == _ox6) return _ox5;
            var _oxb = _ox3.get_slotnums(464);
            return _ox5.add(_ox7.multiply(_oxb)), _ox5;
        };
    },
    38003: (_oxc, _oxd, _oxe) => {
        'use strict';
        var _oxf = null;
        defineModule(_oxd);
        Object.defineProperty(_oxd, '__esModule', {
            'value': true
        }), _oxd.getSlot465PersonalEffect = void 0;
        var _oxg = _oxe(74496);
        _oxd.getSlot465PersonalEffect = function(_oxh) {
            var _oxi = null,
                _oxj = new _oxg.SlotItemEffectModel(),
                _oxk = false,
                _oxl = new _oxg.SlotItemEffectModel(),
                _oxm = _oxh.get_slotnums(142),
                _oxn = _oxh.get_slotnums(460),
                _oxo = _oxm + _oxn;
            if (916 == _oxh.ship_id ? (_oxl.houg += 2, _oxl.kaih += 8, _oxl.houm += 2, _oxn >= 1 && (_oxj.kaih += 2, _oxj.houm += 1), _oxk = true) : 911 != _oxh.ship_id && 546 != _oxh.ship_id || (_oxl.houg += 1, _oxl.kaih += 2, _oxl.houm += 1, _oxn >= 1 && (_oxj.kaih += 1, _oxj.houm += 1), _oxk = true), 37 == _oxh.ctype && _oxo >= 1 && (_oxj.houg += 2, _oxj.houm += 2), 0 == _oxk) return _oxj;
            var _oxp = _oxh.get_slotnums(465);
            return _oxj.add(_oxl.multiply(_oxp)), _oxj;
        };
    },
    65455: (_oxq, _oxr, _oxs) => {
        'use strict';
        var _oxt = null;
        defineModule(_oxr);
        Object.defineProperty(_oxr, '__esModule', {
            'value': true
        }), _oxr.getSlot466PersonalEffect = void 0;
        var _oxu = _oxs(74496);
        _oxr.getSlot466PersonalEffect = function(_oxv) {
            var _oxw = null,
                _oxx = new _oxu.SlotItemEffectModel(),
                _oxy = false,
                _oxz = new _oxu.SlotItemEffectModel();
            if (277 == _oxv.ship_id || 278 == _oxv.ship_id || 156 == _oxv.ship_id || 288 == _oxv.ship_id || 112 == _oxv.ship_id || 280 == _oxv.ship_id || 279 == _oxv.ship_id ? (_oxz.houg += 1, _oxz.houm += 1, _oxy = true) : 461 == _oxv.ship_id || 462 == _oxv.ship_id || 466 == _oxv.ship_id || 467 == _oxv.ship_id ? (_oxz.houg += 2, _oxz.kaih += 2, _oxz.houm += 1, _oxy = true) : 594 != _oxv.ship_id && 698 != _oxv.ship_id && 646 != _oxv.ship_id && 599 != _oxv.ship_id && 610 != _oxv.ship_id && 196 != _oxv.ship_id && 197 != _oxv.ship_id || (_oxz.houg += 1, _oxz.kaih += 1, _oxz.houm += 2, _oxy = true), 0 == _oxy) return _oxx;
            var _oy0 = _oxv.get_slotnums(466);
            return _oxx.add(_oxz.multiply(_oy0)), _oxx;
        };
    },
    70362: (_oy1, _oy2, _oy3) => {
        'use strict';
        var _oy4 = null;
        defineModule(_oy2);
        Object.defineProperty(_oy2, '__esModule', {
            'value': true
        }), _oy2.getSlot467PersonalEffect = void 0;
        var _oy5 = _oy3(74496);
        _oy2.getSlot467PersonalEffect = function(_oy6) {
            var _oy7 = null,
                _oy8 = new _oy5.SlotItemEffectModel(),
                _oy9 = false,
                _oya = new _oy5.SlotItemEffectModel();
            if ('アメリカ' == _oy6.getCountryName()) {
                for (var _oyb = _oy6.getUSSWaterRaderDict(), _oyc = _oy6.getUSSAirRaderDict(), _oyd = 0, _oye = 0, _oyf = 0, _oyg = _oy6.have_slot_ids(); _oyf < _oyg.length; _oyf++) {
                    var _oyh = _oyg[_oyf];
                    _oyb[parseInt(_oyh)] && (_oyd += _oy6.get_slotnums(parseInt(_oyh))), _oyc[parseInt(_oyh)] && (_oye += _oy6.get_slotnums(parseInt(_oyh)));
                }
                _oya.houg += 1, _oya.tyku += 1, _oya.kaih += 2, _oyd >= 1 && (_oy8.houg += 1, _oy8.tyku += 1, _oy8.kaih += 1, _oy8.houm += 2), _oye >= 1 && (_oy8.tyku += 2, _oy8.kaih += 2), 65 != _oy6.ctype && 93 != _oy6.ctype && 102 != _oy6.ctype && 107 != _oy6.ctype && 125 != _oy6.ctype || (_oya.tyku += 2, _oya.kaih += 1), _oy9 = true;
            }
            if (0 == _oy9) return _oy8;
            var _oyi = _oy6.get_slotnums(467);
            return _oy8.add(_oya.multiply(_oyi)), _oy8;
        };
    },
    68086: (_oyj, _oyk, _oyl) => {
        'use strict';
        var _oym = null;
        defineModule(_oyk);
        Object.defineProperty(_oyk, '__esModule', {
            'value': true
        }), _oyk.getSlot470PersonalEffect = void 0;
        var _oyn = _oyl(74496);
        _oyk.getSlot470PersonalEffect = function(_oyo) {
            var _oyp = null,
                _oyq = new _oyn.SlotItemEffectModel(),
                _oyr = false,
                _oys = new _oyn.SlotItemEffectModel(),
                _oyt = _oyo.get_slotnums(470),
                _oyu = _oyo.get_slotnums(529),
                _oyv = _oyt + _oyu,
                _oyw = _oyo.get_each_level_over_nums([470, 529]),
                _oyx = (_oyw.slot[470], _oyw.slot[529]),
                _oyy = _oyw.total,
                _oyz = 0;
            23 == _oyo.ctype || 18 == _oyo.ctype ? (_oys.houg += 1, _oyr = true, _oyz = 1) : 30 == _oyo.ctype && (_oys.houg += 2, _oyr = true, _oyz = 2), ('しぐれ' == _oyo.yomi || 'ゆきかぜ' == _oyo.yomi || 'いそかぜ' == _oyo.yomi) && (_oys.kaih += 2, _oyr = true), 405 == _oyo.ship_id || 246 == _oyo.ship_id || 144 == _oyo.ship_id || 145 == _oyo.ship_id || 497 == _oyo.ship_id ? (_oyu >= 1 && (_oyq.houg += 1 * _oyu, _oyq.tyku += 1 * _oyu, _oyq.houm += 1 * _oyu, _oyq.kaih += 1 * _oyu), 2 == _oyu ? _oyq.houg += 1 : _oyu >= 3 && (_oyq.houg += 3), _oyx[8] >= 1 && (_oyq.tyku += 1 * _oyx[8]), _oyx[10] >= 1 && (_oyq.houg += 1 * _oyx[10])) : 323 == _oyo.ship_id || 498 == _oyo.ship_id || 961 == _oyo.ship_id ? (_oyu >= 1 && (_oyq.houg += 2 * _oyu, _oyq.tyku += 2 * _oyu, _oyq.houm += 1 * _oyu, _oyq.kaih += 1 * _oyu), 2 == _oyu ? _oyq.houg += 2 : _oyu >= 3 && (_oyq.houg += 4), _oyx[6] >= 1 && (_oyq.tyku += 1 * _oyx[6]), _oyx[8] >= 1 && (_oyq.houm += 1 * _oyx[8]), _oyx[10] >= 1 && (_oyq.houg += 1 * _oyx[10])) : 975 == _oyo.ship_id && (_oyu >= 1 && (_oyq.houg += 3 * _oyu, _oyq.tyku += 3 * _oyu, _oyq.houm += 2 * _oyu, _oyq.kaih += 2 * _oyu), 2 == _oyu ? _oyq.houg += 3 : _oyu >= 3 && (_oyq.houg += 6), _oyx[4] >= 1 && (_oyq.tyku += 1 * _oyx[4]), _oyx[6] >= 1 && (_oyq.houg += 1 * _oyx[6]), _oyx[8] >= 1 && (_oyq.houm += 1 * _oyx[8]), _oyx[10] >= 1 && (_oyq.houg += 1 * _oyx[10])), 961 == _oyo.ship_id && (_oys.houg += 3, _oys.houm += 3, _oys.kaih += 2, _oyr = true), 566 != _oyo.ship_id && 567 != _oyo.ship_id && 568 != _oyo.ship_id && 656 != _oyo.ship_id && 670 != _oyo.ship_id && 915 != _oyo.ship_id && 651 != _oyo.ship_id && 145 != _oyo.ship_id && 961 != _oyo.ship_id && 951 != _oyo.ship_id || (_oyq.houg += 1, _oyq.houm += 2, _oyv >= 2 && (_oyq.houg += 2), _oyy[5] >= 1 && (_oyq.houm += 1 * _oyy[5]), _oyy[8] >= 1 && (_oyq.houg += 1 * _oyy[8]), _oyy[10] >= 1 && (_oyq.houm += 1 * _oyy[10])), _oyr && _oyq.add(_oys.multiply(_oyv));
            var _oz0 = _oyo.get_have_rader_nums(),
                _oz1 = _oz0.water_rader,
                _oz2 = _oz0.air_rader;
            return _oz1 >= 1 && (1 == _oyz ? (_oyq.houg += 1, _oyq.raig += 3, _oyq.kaih += 1, _oyq.houm += 1) : 2 == _oyz && (_oyq.houg += 2, _oyq.raig += 3, _oyq.kaih += 1, _oyq.houm += 3)), _oz2 >= 1 && (_oyu >= 1 && (_oyq.tyku += 2, _oyq.kaih += 2), 2 == _oyu ? _oyq.tyku += 2 : _oyu >= 3 && (_oyq.tyku += 4)), _oyq;
        };
    },
    78173: (_oz3, _oz4, _oz5) => {
        'use strict';
        var _oz6 = null;
        defineModule(_oz4);
        Object.defineProperty(_oz4, '__esModule', {
            'value': true
        }), _oz4.getSlot471PersonalEffect = void 0;
        var _oz7 = _oz5(74496);
        _oz4.getSlot471PersonalEffect = function(_oz8) {
            var _oz9 = null,
                _oza = new _oz7.SlotItemEffectModel(),
                _ozb = false,
                _ozc = new _oz7.SlotItemEffectModel(),
                _ozd = 0;
            if ('フランス' == _oz8.getCountryName() && (_ozc.houg += 2, _ozc.kaih += 2, _ozc.houm += 2, _ozb = true, _ozd = 1), 79 == _oz8.ctype && (_ozc.houg += 2, _ozc.houm += 1, _ozb = true), 0 == _ozb) return _oza;
            var _oze = _oz8.get_slotnums(471);
            if (_oza.add(_ozc.multiply(_oze)), 0 == _ozd) return _oza;
            var _ozf = _oz8.get_each_level_nums(471),
                _ozg = 0,
                _ozh = 0;
            if (_ozd > 0 && _ozf.forEach(function(_ozi, _ozj) {
                    _ozj >= 6 && (_ozg += _ozi), _ozj >= 8 && (_ozh += _ozi);
                }), 1 == _ozd) {
                _ozg >= 1 && (_oza.kaih += 1 * _ozg, _oza.houm += 1 * _ozg), _ozh >= 1 && (_oza.houg += 1 * _ozh, _oza.kaih += 1 * _ozh, _oza.houm += 1 * _ozh);
                var _ozk = _ozf[10];
                _ozk >= 1 && (_oza.houg += 1 * _ozk, _oza.houm += 1 * _ozk);
            }
            return _oza;
        };
    },
    22581: (_ozl, _ozm, _ozn) => {
        'use strict';
        var _ozo = null;
        defineModule(_ozm);
        Object.defineProperty(_ozm, '__esModule', {
            'value': true
        }), _ozm.getSlot472PersonalEffect = void 0;
        var _ozp = _ozn(74496);
        _ozm.getSlot472PersonalEffect = function(_ozq) {
            var _ozr = null,
                _ozs = new _ozp.SlotItemEffectModel(),
                _ozt = false,
                _ozu = new _ozp.SlotItemEffectModel(),
                _ozv = _ozq.getCountryName();
            if ('アメリカ' == _ozv && (_ozu.tais += 2, _ozt = true), 'イギリス' == _ozv && (_ozu.tais += 1, _ozt = true), 1 == _ozq.stype && (_ozu.kaih += 1, _ozt = true), _ozt) {
                var _ozw = _ozq.get_slotnums(472);
                _ozs.add(_ozu.multiply(_ozw));
            }
            return 920 == _ozq.ship_id && (_ozs.tais += 1, _ozs.kaih += 1, _ozs.houm += 1), _ozs;
        };
    },
    13053: (_ozx, _ozy, _ozz) => {
        'use strict';
        var _p00 = null;
        defineModule(_ozy);
        Object.defineProperty(_ozy, '__esModule', {
            'value': true
        }), _ozy.getSlot473PersonalEffect = void 0;
        var _p01 = _ozz(74496);
        _ozy.getSlot473PersonalEffect = function(_p02) {
            var _p03 = null,
                _p04 = new _p01.SlotItemEffectModel(),
                _p05 = false,
                _p06 = new _p01.SlotItemEffectModel(),
                _p07 = _p02.getCountryName();
            if ('アメリカ' == _p07 && (_p06.houg += 1, _p06.kaih += 1, _p06.tyku += 1, _p05 = true), 'イギリス' == _p07 && (_p06.houg += 1, _p06.kaih += 1, _p05 = true), 0 == _p05) return _p04;
            var _p08 = _p02.get_slotnums(473);
            return _p04.add(_p06.multiply(_p08)), _p04;
        };
    },
    47874: (_p09, _p0a, _p0b) => {
        'use strict';
        var _p0c = null;
        defineModule(_p0a);
        Object.defineProperty(_p0a, '__esModule', {
            'value': true
        }), _p0a.getSlot474PersonalEffect = void 0;
        var _p0d = _p0b(74496);
        _p0a.getSlot474PersonalEffect = function(_p0e) {
            var _p0f = null,
                _p0g = new _p0d.SlotItemEffectModel(),
                _p0h = false,
                _p0i = new _p0d.SlotItemEffectModel(),
                _p0j = _p0e.getCountryName();
            if ('アメリカ' == _p0j && (_p0i.houg += 2, _p0i.kaih += 1, _p0i.tyku += 1, _p0h = true), 'イギリス' == _p0j && (_p0i.houg += 1, _p0i.kaih += 1, _p0i.tyku += 1, _p0h = true), 'フランス' == _p0j && (_p0i.houg += 1, _p0i.tyku += 1, _p0h = true), 707 != _p0e.ship_id && 930 != _p0e.ship_id || (_p0i.houg += 1, _p0i.kaih += 1, _p0h = true), 0 == _p0h) return _p0g;
            var _p0k = _p0e.get_slotnums(474);
            return _p0g.add(_p0i.multiply(_p0k)), _p0g;
        };
    },
    42788: (_p0l, _p0m, _p0n) => {
        'use strict';
        var _p0o = null;
        defineModule(_p0m);
        Object.defineProperty(_p0m, '__esModule', {
            'value': true
        }), _p0m.getSlot478PersonalEffect = void 0;
        var _p0p = _p0n(74496);
        _p0m.getSlot478PersonalEffect = function(_p0q) {
            var _p0r = null,
                _p0s = new _p0p.SlotItemEffectModel(),
                _p0t = _p0q.get_each_level_nums(478),
                _p0u = [];
            return _p0t.forEach(function(_p0v, _p0w) {
                var _p0x = null;
                for (var _p0y = 1; _p0y <= _p0q.SLOT_LEVEL_MAX; _p0y++) _p0w >= _p0y && (null == _p0u[_p0y] && (_p0u[_p0y] = 0), _p0u[_p0y] += _p0v);
            }), _p0u.every(function(_p0z) {
                return 0 == _p0z;
            }) || (_p0u[1] >= 1 && (_p0s.houg += 1), _p0u[2] >= 1 && (_p0s.houm += 1), _p0u[3] >= 1 && (_p0s.kaih += 1), _p0u[4] >= 1 && (_p0s.baku += 1), _p0u[5] >= 1 && (_p0s.raig += 1), _p0u[6] >= 1 && (_p0s.tyku += 1), _p0u[7] >= 1 && (_p0s.houg += 1), _p0u[8] >= 1 && (_p0s.houm += 1), _p0u[9] >= 1 && (_p0s.kaih += 1), _p0u[10] >= 1 && (_p0s.houg += 1)), _p0s;
        };
    },
    22218: (_p10, _p11, _p12) => {
        'use strict';
        var _p13 = null;
        defineModule(_p11);
        Object.defineProperty(_p11, '__esModule', {
            'value': true
        }), _p11.getSlot47PersonalEffect = void 0;
        var _p14 = _p12(74496);
        _p11.getSlot47PersonalEffect = function(_p15) {
            var _p16 = null,
                _p17 = new _p14.SlotItemEffectModel(),
                _p18 = new _p14.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_p15.yomi) >= 0 ? (_p18.tais += 3, _p18.kaih += 2, _p18.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_p15.yomi) >= 0 && (_p18.tais += 2, _p18.kaih += 2), !_p18.exists()) return _p17;
            var _p19 = _p15.get_slotnums(47) + _p15.get_slotnums(438);
            return _p17 = _p18.multiply(_p19);
        };
    },
    57664: (_p1a, _p1b, _p1c) => {
        'use strict';
        var _p1d = null;
        defineModule(_p1b);
        Object.defineProperty(_p1b, '__esModule', {
            'value': true
        }), _p1b.getSlot483PersonalEffect = void 0;
        var _p1e = _p1c(74496);
        _p1b.getSlot483PersonalEffect = function(_p1f) {
            var _p1g = null,
                _p1h = new _p1e.SlotItemEffectModel(),
                _p1i = 0,
                _p1j = 0,
                _p1k = 0,
                _p1l = 0,
                _p1m = 0,
                _p1n = 0,
                _p1o = 0;
            if (6 == _p1f.ctype ? (_p1h.houg += 2, _p1h.tyku += 3, _p1h.houm += 1, _p1i = 1) : 2 == _p1f.ctype ? (_p1h.houg += 1, _p1h.tyku += 2, _p1h.kaih += 2, _p1h.houm += 1, _p1j = 1) : 37 == _p1f.ctype && (_p1k = 1), 8 == _p1f.stype || 9 == _p1f.stype || 10 == _p1f.stype ? _p1l = 1 : 5 != _p1f.stype && 6 != _p1f.stype || (_p1m = 1), 149 == _p1f.ship_id ? (_p1h.houg += 2, _p1h.tyku += 2) : 591 == _p1f.ship_id ? (_p1h.houg += 3, _p1h.tyku += 3, _p1h.kaih += 1) : 150 == _p1f.ship_id ? (_p1h.houg += 1, _p1h.tyku += 1) : 592 == _p1f.ship_id ? (_p1h.houg += 2, _p1h.tyku += 2, _p1h.kaih += 2) : 151 == _p1f.ship_id ? (_p1h.houg += 1, _p1h.tyku += 2, _p1h.kaih += 2) : 593 == _p1f.ship_id ? (_p1h.houg += 2, _p1h.tyku += 5, _p1h.kaih += 3) : 954 == _p1f.ship_id ? (_p1h.houg += 2, _p1h.tyku += 4, _p1h.kaih += 2) : 694 == _p1f.ship_id ? (_p1h.houg += 3, _p1h.tyku += 2, _p1h.kaih += 1) : 152 == _p1f.ship_id ? (_p1h.houg += 2, _p1h.tyku += 2) : 911 == _p1f.ship_id || 916 == _p1f.ship_id || 546 == _p1f.ship_id ? (_p1h.houg += 2, _p1h.tyku += 2, _p1h.kaih += 2, _p1n = 1) : 553 == _p1f.ship_id || 554 == _p1f.ship_id ? (_p1h.houg += 1, _p1h.tyku += 2, _p1h.kaih += 1, _p1o = 1) : 541 == _p1f.ship_id || 411 == _p1f.ship_id || 412 == _p1f.ship_id ? (_p1h.houg += 1, _p1h.tyku += 2) : 573 == _p1f.ship_id && (_p1h.houg += 2, _p1h.tyku += 2, _p1h.kaih += 1), 0 == [_p1i, _p1j, _p1k, _p1l, _p1m, _p1n, _p1o].reduce(function(_p1p, _p1q) {
                    return _p1p + _p1q;
                }, 0)) return _p1h;
            var _p1r = _p1f.get_each_level_nums(483),
                _p1s = 0,
                _p1t = [];
            return _p1r.forEach(function(_p1u, _p1v) {
                var _p1w = null;
                _p1v >= 6 && (_p1s += _p1u);
                for (var _p1x = 1; _p1x <= _p1f.SLOT_LEVEL_MAX; _p1x++) null == _p1t[_p1x] && (_p1t[_p1x] = 0), _p1v >= _p1x && (_p1t[_p1x] += _p1u);
            }), 1 == _p1i ? (_p1s >= 1 && (_p1h.houm += 1), _p1r[10] >= 1 && (_p1h.houm += 1)) : 1 == _p1j ? (_p1t[5] >= 1 && (_p1h.kaih += 1), _p1t[6] >= 1 && (_p1h.houm += 1), _p1t[10] >= 1 && (_p1h.kaih += 1)) : 1 == _p1k && (_p1t[6] >= 1 && (_p1h.houm += 1), _p1t[10] >= 1 && (_p1h.kaih += 1)), 1 == _p1l ? (_p1t[2] >= 1 && (_p1h.tyku += 1), _p1t[4] >= 1 && (_p1h.houg += 1), _p1t[7] >= 1 && (_p1h.kaih += 1), _p1t[8] >= 1 && (_p1h.tyku += 1), _p1t[9] >= 1 && (_p1h.houg += 1)) : 1 == _p1m && (_p1t[2] >= 1 && (_p1h.tyku += 1), _p1t[4] >= 1 && (_p1h.houg += 1), _p1t[6] >= 1 && (_p1h.kaih += 1), _p1t[8] >= 1 && (_p1h.houm += 1), _p1t[10] >= 1 && (_p1h.houg += 1)), 1 == _p1n ? _p1t[5] >= 1 && (_p1h.houm += 1) : 1 == _p1o && (_p1t[1] >= 1 && (_p1h.houm += 1), _p1t[3] >= 1 && (_p1h.houm += 1)), _p1h;
        };
    },
    44990: (_p1y, _p1z, _p20) => {
        'use strict';
        var _p21 = null;
        defineModule(_p1z);
        Object.defineProperty(_p1z, '__esModule', {
            'value': true
        }), _p1z.getSlot485PersonalEffect = void 0;
        var _p22 = _p20(74496);
        _p1z.getSlot485PersonalEffect = function(_p23) {
            var _p24 = null,
                _p25 = new _p22.SlotItemEffectModel(),
                _p26 = false,
                _p27 = new _p22.SlotItemEffectModel();
            if (9 == _p23.ctype && (_p27.houg += 1, _p27.kaih += 2, _p27.tyku += 3, _p26 = true), 501 == _p23.ship_id || 506 == _p23.ship_id ? (_p27.kaih += 1, _p27.tyku += 2, _p27.houm += 1, _p26 = true) : 502 != _p23.ship_id && 507 != _p23.ship_id || (_p27.kaih += 1, _p27.tyku += 1, _p27.houm += 1, _p26 = true), _p26) {
                var _p28 = _p23.get_slotnums(485);
                _p25.add(_p27.multiply(_p28));
            }
            var _p29 = _p23.get_each_level_nums(485),
                _p2a = 0,
                _p2b = 0,
                _p2c = 0,
                _p2d = _p29[10];
            return _p29.forEach(function(_p2e, _p2f) {
                _p2f >= 3 && (_p2a += _p2e), _p2f >= 5 && (_p2b += _p2e), _p2f >= 7 && (_p2c += _p2e);
            }), _p2a > 0 && (_p25.houg += 1 * _p2a), _p2b > 0 && (_p25.tyku += 1 * _p2b), _p2c > 0 && (_p25.kaih += 1 * _p2c), _p2d > 0 && (_p25.houm += 1 * _p2d), _p25;
        };
    },
    83957: (_p2g, _p2h, _p2i) => {
        'use strict';
        var _p2j = null;
        defineModule(_p2h);
        Object.defineProperty(_p2h, '__esModule', {
            'value': true
        }), _p2h.getSlot486PersonalEffect = void 0;
        var _p2k = _p2i(74496);
        _p2h.getSlot486PersonalEffect = function(_p2l) {
            var _p2m = null,
                _p2n = new _p2k.SlotItemEffectModel(),
                _p2o = false,
                _p2p = new _p2k.SlotItemEffectModel();
            if (894 == _p2l.ship_id || 899 == _p2l.ship_id ? (_p2p.houg += 4, _p2p.tyku += 4, _p2p.kaih += 3, _p2p.houm += 2, _p2o = true) : 888 != _p2l.ship_id && 883 != _p2l.ship_id || (_p2p.houg += 2, _p2p.tyku += 2, _p2p.kaih += 2, _p2p.houm += 1, _p2o = true), _p2o) {
                var _p2q = _p2l.get_slotnums(486);
                _p2n.add(_p2p.multiply(_p2q));
            }
            var _p2r = _p2l.get_each_level_nums(486),
                _p2s = 0,
                _p2t = 0,
                _p2u = _p2r[10];
            return _p2r.forEach(function(_p2v, _p2w) {
                _p2w >= 6 && (_p2s += _p2v), _p2w >= 8 && (_p2t += _p2v);
            }), _p2s > 0 && (_p2n.kaih += 1 * _p2s, _p2n.houm += 1 * _p2s), _p2t > 0 && (_p2n.tyku += 1 * _p2t, _p2n.kaih += 1 * _p2t), _p2u > 0 && (_p2n.houg += 1 * _p2u, _p2n.houm += 1 * _p2u), _p2n;
        };
    },
    78539: (_p2x, _p2y, _p2z) => {
        'use strict';
        var _p30 = null;
        defineModule(_p2y);
        Object.defineProperty(_p2y, '__esModule', {
            'value': true
        }), _p2y.getSlot487PersonalEffect = void 0;
        var _p31 = _p2z(74496);
        _p2y.getSlot487PersonalEffect = function(_p32) {
            var _p33 = null,
                _p34 = new _p31.SlotItemEffectModel(),
                _p35 = false,
                _p36 = new _p31.SlotItemEffectModel();
            if (894 == _p32.ship_id || 899 == _p32.ship_id ? (_p36.houg += 5, _p36.tyku += 3, _p36.kaih += 2, _p36.houm += 4, _p35 = true) : 888 != _p32.ship_id && 883 != _p32.ship_id || (_p36.houg += 3, _p36.tyku += 1, _p36.kaih += 1, _p36.houm += 2, _p35 = true), _p35) {
                var _p37 = _p32.get_slotnums(487);
                _p34.add(_p36.multiply(_p37));
            }
            var _p38 = _p32.get_each_level_nums(487),
                _p39 = 0,
                _p3a = 0,
                _p3b = _p38[10];
            return _p38.forEach(function(_p3c, _p3d) {
                _p3d >= 6 && (_p39 += _p3c), _p3d >= 8 && (_p3a += _p3c);
            }), _p39 > 0 && (_p34.houg += 1 * _p39, _p34.kaih += 1 * _p39), _p3a > 0 && (_p34.tyku += 1 * _p3a, _p34.houm += 1 * _p3a), _p3b > 0 && (_p34.houg += 1 * _p3b, _p34.houm += 1 * _p3b), _p34;
        };
    },
    96282: (_p3e, _p3f, _p3g) => {
        'use strict';
        var _p3h = null;
        defineModule(_p3f);
        Object.defineProperty(_p3f, '__esModule', {
            'value': true
        }), _p3f.getSlot488PersonalEffect = void 0;
        var _p3i = _p3g(74496);
        _p3f.getSlot488PersonalEffect = function(_p3j) {
            var _p3k = null,
                _p3l = new _p3i.SlotItemEffectModel(),
                _p3m = false,
                _p3n = new _p3i.SlotItemEffectModel(),
                _p3o = 0,
                _p3p = _p3j.getCountryName(),
                _p3q = {
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
                }[_p3j.ship_id];
            if (('日本' == _p3p && 2 == _p3j.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_p3j.ctype] && 1 == _p3j.stype) && (_p3n.tais += 1, _p3n.kaih += 1, _p3m = true), 1 == _p3q ? (_p3n.tais += 5, _p3n.kaih += 4, _p3n.houm += 2, _p3m = true, _p3o = 1) : 2 == _p3q ? (_p3n.tais += 2, _p3n.kaih += 1, _p3n.houm += 1, _p3m = true, _p3o = 2) : 3 == _p3q && (_p3n.tais += 1, _p3m = true, _p3o = 2), 0 == _p3m) return _p3l;
            var _p3r = _p3j.get_slotnums(488);
            if (_p3l.add(_p3n.multiply(_p3r)), 0 == _p3o) return _p3l;
            var _p3s = _p3j.get_each_level_nums(488),
                _p3t = [];
            return _p3s.forEach(function(_p3u, _p3v) {
                var _p3w = null;
                for (var _p3x = 1; _p3x <= _p3j.SLOT_LEVEL_MAX; _p3x++) _p3v >= _p3x && (null == _p3t[_p3x] && (_p3t[_p3x] = 0), _p3t[_p3x] += _p3u);
            }), 1 == _p3o ? (_p3t[3] >= 1 && (_p3l.kaih += 1 * _p3t[3]), _p3t[5] >= 1 && (_p3l.tais += 1 * _p3t[5]), _p3t[7] >= 1 && (_p3l.houm += 1 * _p3t[7]), _p3t[8] >= 1 && (_p3l.kaih += 1 * _p3t[8]), _p3t[9] >= 1 && (_p3l.tais += 1 * _p3t[9]), _p3t[10] >= 1 && (_p3l.tais += 1 * _p3t[10])) : 2 == _p3o && (_p3t[5] >= 1 && (_p3l.tais += 1 * _p3t[5]), _p3t[7] >= 1 && (_p3l.kaih += 1 * _p3t[7]), _p3t[9] >= 1 && (_p3l.houm += 1 * _p3t[9]), _p3t[10] >= 1 && (_p3l.tais += 1 * _p3t[10])), _p3l;
        };
    },
    49679: (_p3y, _p3z, _p40) => {
        'use strict';
        var _p41 = null;
        defineModule(_p3z);
        Object.defineProperty(_p3z, '__esModule', {
            'value': true
        }), _p3z.getSlot489PersonalEffect = void 0;
        var _p42 = _p40(74496);
        _p3z.getSlot489PersonalEffect = function(_p43) {
            var _p44 = null,
                _p45 = new _p42.SlotItemEffectModel(),
                _p46 = false,
                _p47 = new _p42.SlotItemEffectModel();
            if ('あきつまる' != _p43.yomi && 'やましおまる' != _p43.yomi && 'くまのまる' != _p43.yomi || (_p47.tyku = _p47.tyku + 2, _p47.kaih = _p47.kaih + 1, _p47.houg = _p47.houg + 1, _p47.tais = _p47.tais + 1, _p47.houm = _p47.houm + 1, _p46 = true), 717 != _p43.ship_id && 948 != _p43.ship_id || (_p47.tyku = _p47.tyku + 2, _p47.kaih = _p47.kaih + 2, _p47.houg = _p47.houg + 2, _p47.tais = _p47.tais + 1, _p47.houm = _p47.houm + 1, _p46 = true), _p46) {
                var _p48 = _p43.get_slotnums(489) + _p43.get_slotnums(491);
                _p45.add(_p47.multiply(_p48));
            }
            var _p49 = _p43.get_each_level_nums(489),
                _p4a = _p43.get_each_level_nums(491),
                _p4b = 0,
                _p4c = 0,
                _p4d = 0;
            _p49.forEach(function(_p4e, _p4f) {
                _p4f >= 3 && (_p4b += _p4e), _p4f >= 6 && (_p4c += _p4e), _p4f >= 8 && (_p4d += _p4e);
            }), _p4a.forEach(function(_p4g, _p4h) {
                _p4h >= 3 && (_p4b += _p4g), _p4h >= 6 && (_p4c += _p4g), _p4h >= 8 && (_p4d += _p4g);
            });
            var _p4i = _p49[10] + _p4a[10];
            return _p4b >= 1 && (_p45.kaih = _p45.kaih + 1 * _p4b), _p4c >= 1 && (_p45.tais = _p45.tais + 1 * _p4c), _p4d >= 1 && (_p45.houm = _p45.houm + 1 * _p4d), _p4i >= 1 && (_p45.houg = _p45.houg + 1 * _p4i), _p45;
        };
    },
    90312: function(_p4j, _p4k, _p4l) {
        'use strict';
        var _p4m = null;
        var _p4n = this && this.__importDefault || function(_p4o) {
            var _p4p = null;
            return _p4o && _p4o.__esModule ? _p4o : {
                'default': _p4o
            };
        };
        defineModule(_p4k);
        Object.defineProperty(_p4k, '__esModule', {
            'value': true
        }), _p4k.getSlot502PersonalEffect = void 0;
        var _p4q = _p4l(74496),
            _p4r = _p4n(_p4l(18622));
        _p4k.getSlot502PersonalEffect = function(_p4s) {
            var _p4t = null,
                _p4u = new _p4q.SlotItemEffectModel(),
                _p4v = _p4s.get_slotnums(502),
                _p4w = {
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
                _p4x = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3,
                    694: 1
                },
                _p4y = {
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
                _p4z = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _p50 = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_p4w[_p4s.ship_id]) {
                var _p51 = _p4w[_p4s.ship_id];
                _p4u.houg += _p4v * _p51;
            }
            if (_p4x[_p4s.ship_id]) {
                var _p52 = _p4x[_p4s.ship_id];
                _p4u.tyku += _p4v * _p52;
            }
            if (_p4y[_p4s.ship_id]) {
                var _p53 = _p4y[_p4s.ship_id],
                    _p54 = _p4s.get_each_level_nums(502),
                    _p55 = [];
                _p54.forEach(function(_p56, _p57) {
                    var _p58 = null;
                    for (var _p59 = 1; _p59 <= _p4s.SLOT_LEVEL_MAX; _p59++) _p57 >= _p59 && (null == _p55[_p59] && (_p55[_p59] = 0), _p55[_p59] += _p56);
                }), 1 == _p53 ? (_p4u.kaih += 3 * _p4v, _p55[1] > 0 && (_p4u.kaih += 1 * _p55[1]), _p55[3] > 0 && (_p4u.tyku += 1 * _p55[3]), _p55[5] > 0 && (_p4u.houg += 1 * _p55[5]), _p55[7] > 0 && (_p4u.kaih += 1 * _p55[7]), _p55[8] > 0 && (_p4u.tyku += 1 * _p55[8]), _p55[9] > 0 && (_p4u.houg += 1 * _p55[9]), _p55[10] > 0 && (_p4u.tyku += 1 * _p55[10])) : 2 == _p53 ? (_p4u.kaih += 1 * _p4v, _p55[2] > 0 && 151 == _p4s.ship_id && (_p4u.kaih += 1 * _p55[2]), _p55[4] > 0 && (_p4u.tyku += 1 * _p55[4]), _p55[6] > 0 && (_p4u.houg += 1 * _p55[6]), _p55[8] > 0 && (_p4u.kaih += 1 * _p55[8]), _p55[10] > 0 && (_p4u.tyku += 1 * _p55[10])) : 3 == _p53 && (_p55[5] > 0 && (_p4u.kaih += 1 * _p55[5]), _p55[8] > 0 && (_p4u.houg += 1 * _p55[8]), _p55[10] > 0 && (_p4u.tyku += 1 * _p55[10]));
            }
            if (_p4z[_p4s.ship_id]) {
                for (var _p5a = 0, _p5b = 0, _p5c = _p4s.have_slot_ids(); _p5b < _p5c.length; _p5b++) {
                    var _p5d = _p5c[_p5b],
                        _p5e = _p4r.default.model.slot.getMst(_p5d),
                        _p5f = _p5e.equipType;
                    12 != _p5f && 13 != _p5f || (_p5e.sakuteki >= 5 && (_p5a += _p4s.get_slotnums(parseInt(_p5d))), _p5e.taiku >= 2 && _p4s.get_slotnums(parseInt(_p5d)));
                }
                0;
                var _p5g = _p4z[_p4s.ship_id];
                1 == _p5g && _p5a >= 1 ? (_p4u.houg += 3, _p4u.kaih += 4) : 2 == _p5g && _p5a >= 1 && (_p4u.houg += 2, _p4u.kaih += 2);
            }
            if (_p50[_p4s.ship_id]) {
                var _p5h = _p50[_p4s.ship_id],
                    _p5i = [],
                    _p5j = [],
                    _p5k = _p4s.have_slot_ids();
                [410, 411].forEach(function(_p5l) {
                    var _p5m = null;
                    _p5k.indexOf(_p5l.toString()) > -1 && (_p5j[_p5l] = _p4s.get_each_level_nums(_p5l), null == _p5i[_p5l] && (_p5i[_p5l] = []), _p5j[_p5l].forEach(function(_p5n, _p5o) {
                        var _p5p = null;
                        for (var _p5q = 1; _p5q <= _p4s.SLOT_LEVEL_MAX; _p5q++) null == _p5i[_p5l][_p5q] && (_p5i[_p5l][_p5q] = 0), _p5o >= _p5q && (_p5i[_p5l][_p5q] += _p5n);
                    }));
                });
                var _p5r = _p5j[410],
                    _p5s = _p5j[411];
                if (1 == _p5h) {
                    if (_p5r) {
                        _p4u.tyku += 1;
                        var _p5t = _p5i[410];
                        _p5t[7] >= 1 && (_p4u.houg += 1), _p5t[10] >= 1 && (_p4u.kaih += 1);
                    }
                    if (_p5s) {
                        _p4u.tyku += 2;
                        var _p5u = _p5i[411];
                        _p5u[2] >= 1 && (_p4u.houg += 1), _p5u[4] >= 1 && (_p4u.kaih += 1), _p5u[6] >= 1 && (_p4u.houm += 1), _p5u[8] >= 1 && (_p4u.tyku += 1), _p5u[10] >= 1 && (_p4u.houg += 1);
                    }
                }
            }
            return _p4u;
        };
    },
    86856: function(_p5v, _p5w, _p5x) {
        'use strict';
        var _p5y = null;
        var _p5z = this && this.__importDefault || function(_p60) {
            var _p61 = null;
            return _p60 && _p60.__esModule ? _p60 : {
                'default': _p60
            };
        };
        defineModule(_p5w);
        Object.defineProperty(_p5w, '__esModule', {
            'value': true
        }), _p5w.getSlot503PersonalEffect = void 0;
        var _p62 = _p5x(74496),
            _p63 = _p5z(_p5x(18622));
        _p5w.getSlot503PersonalEffect = function(_p64) {
            var _p65 = null,
                _p66 = new _p62.SlotItemEffectModel(),
                _p67 = _p64.get_slotnums(503),
                _p68 = {
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
                _p69 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    694: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _p6a = {
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
                _p6b = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2,
                    694: 2
                },
                _p6c = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1,
                    694: 1
                },
                _p6d = {
                    591: 1,
                    592: 2,
                    593: 2,
                    694: 2,
                    954: 3
                };
            if (_p68[_p64.ship_id]) {
                var _p6e = _p68[_p64.ship_id];
                _p66.houg += _p67 * _p6e;
            }
            if (_p69[_p64.ship_id]) {
                var _p6f = _p69[_p64.ship_id];
                _p66.tyku += _p67 * _p6f;
            }
            if (_p6a[_p64.ship_id]) {
                var _p6g = _p6a[_p64.ship_id],
                    _p6h = _p64.get_each_level_nums(503),
                    _p6i = [];
                _p6h.forEach(function(_p6j, _p6k) {
                    var _p6l = null;
                    for (var _p6m = 1; _p6m <= _p64.SLOT_LEVEL_MAX; _p6m++) _p6k >= _p6m && (null == _p6i[_p6m] && (_p6i[_p6m] = 0), _p6i[_p6m] += _p6j);
                }), 1 == _p6g ? (_p66.houm += 2 * _p67, _p6i[1] > 0 && (_p66.houg += 1 * _p6i[1]), _p6i[2] > 0 && (_p66.tyku += 1 * _p6i[2]), _p6i[4] > 0 && (_p66.houm += 1 * _p6i[4]), _p6i[6] > 0 && (_p66.houg += 1 * _p6i[6]), _p6i[8] > 0 && (_p66.tyku += 1 * _p6i[8]), _p6i[10] > 0 && (_p66.houm += 1 * _p6i[10])) : 2 == _p6g ? (_p66.houm += 1 * _p67, _p6i[2] > 0 && (_p66.houg += 1 * _p6i[2]), _p6i[4] > 0 && (_p66.tyku += 1 * _p6i[4]), _p6i[6] > 0 && (_p66.houm += 1 * _p6i[6]), _p6i[8] > 0 && (_p66.houg += 1 * _p6i[8]), _p6i[10] > 0 && (_p66.houm += 1 * _p6i[10])) : 3 == _p6g ? (_p6i[4] > 0 && (_p66.houm += 1 * _p6i[4]), _p6i[7] > 0 && (_p66.houg += 1 * _p6i[7]), _p6i[10] > 0 && (_p66.tyku += 1 * _p6i[10])) : 4 == _p6g && (_p66.houm += 1 * _p67, _p6i[1] > 0 && (_p66.houg += 1 * _p6i[1]), _p6i[2] > 0 && (_p66.houg += 1 * _p6i[2]), _p6i[4] > 0 && (_p66.houm += 1 * _p6i[4]), _p6i[6] > 0 && (_p66.houg += 1 * _p6i[6]), _p6i[8] > 0 && (_p66.tyku += 1 * _p6i[8]), _p6i[10] > 0 && (_p66.houm += 1 * _p6i[10]));
            }
            var _p6n = 0;
            _p6b[_p64.ship_id] && (_p6n = _p6b[_p64.ship_id]);
            var _p6o = 0;
            _p6d[_p64.ship_id] && (_p6o = _p6d[_p64.ship_id]);
            var _p6p = 0,
                _p6q = 0,
                _p6r = _p64.have_slot_ids();
            if (_p6n + _p6o > 0)
                for (var _p6s = 0, _p6t = _p6r; _p6s < _p6t.length; _p6s++) {
                    var _p6u = _p6t[_p6s],
                        _p6v = _p63.default.model.slot.getMst(_p6u),
                        _p6w = _p6v.equipType;
                    12 != _p6w && 13 != _p6w || (_p6v.sakuteki >= 5 && (_p6p += _p64.get_slotnums(parseInt(_p6u))), _p6v.taiku >= 2 && _p64.get_slotnums(parseInt(_p6u)), _p6v.meichu >= 8 && (_p6q += _p64.get_slotnums(parseInt(_p6u))));
                }
            1 == _p6n ? _p6p >= 1 && (_p66.houg += 3, _p66.houm += 3, _p66.kaih += 2) : 2 == _p6n && _p6p >= 1 && (_p66.houg += 2, _p66.houm += 2, _p66.kaih += 1);
            var _p6x = 0,
                _p6y = [],
                _p6z = [];
            if (_p6c[_p64.ship_id]) {
                _p6x = _p6c[_p64.ship_id];
                var _p70 = _p64.have_slot_ids();
                [174].forEach(function(_p71) {
                    var _p72 = null;
                    _p70.indexOf(_p71.toString()) > -1 && (_p6z[_p71] = _p64.get_each_level_nums(_p71), null == _p6y[_p71] && (_p6y[_p71] = []), _p6z[_p71].forEach(function(_p73, _p74) {
                        var _p75 = null;
                        for (var _p76 = 1; _p76 <= _p64.SLOT_LEVEL_MAX; _p76++) null == _p6y[_p71][_p76] && (_p6y[_p71][_p76] = 0), _p74 >= _p76 && (_p6y[_p71][_p76] += _p73);
                    }));
                });
            }
            if (_p6x > 0) {
                var _p77 = _p6z[174];
                if (1 == _p6x && _p77) {
                    var _p78 = _p6y[174];
                    _p66.raig += 4, _p78[6] >= 1 && (_p66.raig += 1), _p78[8] >= 1 && (_p66.houm += 1), _p78[10] >= 1 && (_p66.houg += 1);
                }
            }
            return _p6q > 0 && (_p6o >= 1 && _p6o <= 3 && (_p66.houg += 2, _p66.houm += 2, _p66.kaih += 2), 1 == _p6o ? _p66.houg += 1 : 3 == _p6o && (_p66.houg += 2)), _p66;
        };
    },
    78123: function(_p79, _p7a, _p7b) {
        'use strict';
        var _p7c = null;
        var _p7d = this && this.__importDefault || function(_p7e) {
            var _p7f = null;
            return _p7e && _p7e.__esModule ? _p7e : {
                'default': _p7e
            };
        };
        defineModule(_p7a);
        Object.defineProperty(_p7a, '__esModule', {
            'value': true
        }), _p7a.getSlot505PersonalEffect = void 0;
        var _p7g = _p7b(74496),
            _p7h = _p7d(_p7b(18622));
        _p7a.getSlot505PersonalEffect = function(_p7i) {
            var _p7j = null,
                _p7k = new _p7g.SlotItemEffectModel(),
                _p7l = false,
                _p7m = new _p7g.SlotItemEffectModel();
            if (2 == _p7i.stype ? (_p7m.houg += 1, _p7m.tyku += 2, _p7m.kaih += 2, _p7l = true) : 1 == _p7i.stype ? (_p7m.houg += 1, _p7m.tyku += 1, _p7m.kaih += 1, _p7l = true) : 3 == _p7i.stype || 21 == _p7i.stype || 4 == _p7i.stype ? (_p7m.tyku += 1, _p7m.kaih += 2, _p7l = true) : 5 != _p7i.stype && 6 != _p7i.stype && 16 != _p7i.stype || (_p7m.tyku += 1, _p7m.kaih += 1, _p7l = true), _p7l) {
                var _p7n = _p7i.get_slotnums(505);
                _p7k.add(_p7m.multiply(_p7n));
            }
            var _p7o = {
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
                    960: 5,
                    981: 6
                },
                _p7p = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2,
                    981: 3
                },
                _p7q = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _p7o[_p7i.ship_id] ? (_p7k.houg += 2, _p7k.tyku += 3, _p7k.kaih += 4) : 2 == _p7o[_p7i.ship_id] ? (_p7k.houg += 1, _p7k.tyku += 2, _p7k.kaih += 3) : 3 == _p7o[_p7i.ship_id] ? (_p7k.tyku += 2, _p7k.kaih += 2) : 4 == _p7o[_p7i.ship_id] ? (_p7k.tyku += 1, _p7k.kaih += 2) : 5 == _p7o[_p7i.ship_id] ? (_p7k.houg += 1, _p7k.tyku += 1, _p7k.kaih += 1) : 6 == _p7o[_p7i.ship_id] && (_p7k.tyku += 1, _p7k.kaih += 1);
            var _p7r = 0;
            if (_p7p[_p7i.ship_id] && _p7r++, _p7q[_p7i.ship_id] && _p7r++, 0 == _p7r) return _p7k;
            for (var _p7s = 0, _p7t = 0, _p7u = 0, _p7v = _p7i.have_slot_ids(); _p7u < _p7v.length; _p7u++) {
                var _p7w = _p7v[_p7u],
                    _p7x = _p7h.default.model.slot.getMst(_p7w),
                    _p7y = _p7x.equipType;
                12 != _p7y && 13 != _p7y || (_p7x.sakuteki >= 5 && (_p7s += _p7i.get_slotnums(parseInt(_p7w))), _p7x.taiku >= 2 && (_p7t += _p7i.get_slotnums(parseInt(_p7w))));
            }
            var _p7z = _p7p[_p7i.ship_id];
            _p7t > 0 && _p7z > 0 && (1 == _p7z ? (_p7k.houg += 1, _p7k.tyku += 2, _p7k.kaih += 3) : 2 == _p7z ? (_p7k.tyku += 2, _p7k.kaih += 2) : 3 == _p7z && (_p7k.tyku += 1, _p7k.kaih += 2));
            var _p80 = _p7q[_p7i.ship_id];
            return _p7s > 0 && _p80 > 0 && 1 == _p80 && (_p7k.houg += 1, _p7k.kaih += 1), _p7k;
        };
    },
    25765: (_p81, _p82, _p83) => {
        'use strict';
        var _p84 = null;
        defineModule(_p82);
        Object.defineProperty(_p82, '__esModule', {
            'value': true
        }), _p82.getSlot506PersonalEffect = void 0;
        var _p85 = _p83(74496);
        _p82.getSlot506PersonalEffect = function(_p86) {
            var _p87 = null,
                _p88 = new _p85.SlotItemEffectModel();
            return 961 == _p86.ship_id ? (_p88.houg += 2, _p88.houm += 3, _p88.tyku += 2, _p88.kaih += 4) : 145 == _p86.ship_id || 497 == _p86.ship_id || 656 == _p86.ship_id || 557 == _p86.ship_id || 558 == _p86.ship_id || 951 == _p86.ship_id || 975 == _p86.ship_id ? (_p88.houg += 1, _p88.houm += 2, _p88.tyku += 1, _p88.kaih += 3) : 578 != _p86.ship_id && 419 != _p86.ship_id && 464 != _p86.ship_id && 470 != _p86.ship_id && 407 != _p86.ship_id && 235 != _p86.ship_id && 147 != _p86.ship_id && 538 != _p86.ship_id && 537 != _p86.ship_id && 955 != _p86.ship_id && 960 != _p86.ship_id || (_p88.houg += 1, _p88.houm += 1, _p88.tyku += 1, _p88.kaih += 2), _p88;
        };
    },
    88271: function(_p89, _p8a, _p8b) {
        'use strict';
        var _p8c = null;
        var _p8d = this && this.__importDefault || function(_p8e) {
            var _p8f = null;
            return _p8e && _p8e.__esModule ? _p8e : {
                'default': _p8e
            };
        };
        defineModule(_p8a);
        Object.defineProperty(_p8a, '__esModule', {
            'value': true
        }), _p8a.getSlot50PersonalEffect = void 0;
        var _p8g = _p8b(74496),
            _p8h = _p8d(_p8b(18622));
        _p8a.getSlot50PersonalEffect = function(_p8i) {
            var _p8j = null,
                _p8k = new _p8g.SlotItemEffectModel(),
                _p8l = false,
                _p8m = new _p8g.SlotItemEffectModel();
            7 != _p8i.ctype && 13 != _p8i.ctype && 8 != _p8i.ctype && 29 != _p8i.ctype && 9 != _p8i.ctype && 31 != _p8i.ctype || (_p8m.houg += 1, _p8l = true), 8 != _p8i.ctype && 29 != _p8i.ctype && 9 != _p8i.ctype && 31 != _p8i.ctype || (_p8m.houg += 1, _p8m.kaih += 1, _p8l = true);
            var _p8n = _p8i.get_slotnums(50);
            9 != _p8i.ctype && 31 != _p8i.ctype || _p8n >= 2 && (_p8m.houg += 1, _p8l = true);
            var _p8o = 0;
            if (501 != _p8i.ship_id && 506 != _p8i.ship_id && 502 != _p8i.ship_id && 507 != _p8i.ship_id || (_p8m.houg += 1, _p8l = true, _p8o = 1), 0 == _p8l) return _p8k;
            _p8k = _p8m.multiply(_p8n);
            for (var _p8p = 0, _p8q = 0, _p8r = _p8i.have_slot_ids(); _p8q < _p8r.length; _p8q++) {
                var _p8s = _p8r[_p8q],
                    _p8t = _p8h.default.model.slot.getMst(_p8s),
                    _p8u = _p8t.equipType;
                12 != _p8u && 13 != _p8u || _p8t.sakuteki >= 5 && (_p8p += _p8i.get_slotnums(parseInt(_p8s)));
            }
            if (_p8p > 0) {
                if (7 == _p8i.ctype || 13 == _p8i.ctype) 0 == _p8i.get_slotnums(90) && (_p8k.houg += 1, _p8k.kaih += 1, _p8k.raig += 1);
                else 8 != _p8i.ctype && 29 != _p8i.ctype && 9 != _p8i.ctype && 31 != _p8i.ctype || (_p8k.houg += 3, _p8k.kaih += 2, _p8k.raig += 2);
                501 != _p8i.ship_id && 506 != _p8i.ship_id || (_p8k.houg += 1, _p8k.kaih += 1);
            }
            var _p8v = _p8i.get_slotnums(30),
                _p8w = _p8i.get_slotnums(410);
            return 1 == _p8o && (_p8v + _p8w > 0 && (_p8k.houg += 1, _p8k.tyku += 3, _p8k.kaih += 2), _p8w > 0 && (_p8k.houg += 2)), _p8k;
        };
    },
    28221: (_p8x, _p8y, _p8z) => {
        'use strict';
        var _p90 = null;
        defineModule(_p8y);
        Object.defineProperty(_p8y, '__esModule', {
            'value': true
        }), _p8y.getSlot510PersonalEffect = void 0;
        var _p91 = _p8z(74496);
        _p8y.getSlot510PersonalEffect = function(_p92) {
            var _p93 = null,
                _p94 = new _p91.SlotItemEffectModel(),
                _p95 = false,
                _p96 = new _p91.SlotItemEffectModel();
            if ('イギリス' == _p92.getCountryName() && (_p96.houg += 2, _p96.tais += 3, _p96.kaih += 2, _p96.saku += 2, _p95 = true), 88 == _p92.ctype && (_p94.houg += 4, _p94.kaih += 2, _p96.saku += 3, _p96.houm += 2, _p95 = true), 0 == _p95) return _p94;
            var _p97 = _p92.get_slotnums(510);
            return _p94.add(_p96.multiply(_p97)), _p94;
        };
    },
    14830: (_p98, _p99, _p9a) => {
        'use strict';
        var _p9b = null;
        defineModule(_p99);
        Object.defineProperty(_p99, '__esModule', {
            'value': true
        }), _p99.getSlot511PersonalEffect = void 0;
        var _p9c = _p9a(74496);
        _p99.getSlot511PersonalEffect = function(_p9d) {
            var _p9e = null,
                _p9f = new _p9c.SlotItemEffectModel();
            return 122 == _p9d.ctype ? (_p9f.raig += 3, _p9f.kaih += 4) : 114 == _p9d.ctype && (_p9f.raig += 1, _p9f.kaih += 2), _p9f;
        };
    },
    54047: (_p9g, _p9h, _p9i) => {
        'use strict';
        var _p9j = null;
        defineModule(_p9h);
        Object.defineProperty(_p9h, '__esModule', {
            'value': true
        }), _p9h.getSlot517PersonalEffect = void 0;
        var _p9k = _p9i(74496);
        _p9h.getSlot517PersonalEffect = function(_p9l) {
            var _p9m = null,
                _p9n = new _p9k.SlotItemEffectModel();
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
            }[_p9l.ctype] && 74 != _p9l.ctype && 77 != _p9l.ctype && 85 != _p9l.ctype && 117 != _p9l.ctype && 104 != _p9l.ctype || (_p9n.houm += 1, _p9n.kaih += 1, _p9n.saku += 1), 38 == _p9l.ctype && (_p9n.houg += 1, _p9n.houm += 1), 960 == _p9l.ship_id ? (_p9n.houg += 2, _p9n.houm += 1, _p9n.kaih += 3, _p9n.saku += 2) : 955 == _p9l.ship_id || 578 == _p9l.ship_id || 961 == _p9l.ship_id || 656 == _p9l.ship_id || 464 == _p9l.ship_id || 470 == _p9l.ship_id || 419 == _p9l.ship_id || 407 == _p9l.ship_id || 235 == _p9l.ship_id || 147 == _p9l.ship_id || 975 == _p9l.ship_id ? (_p9n.houg += 1, _p9n.houm += 1, _p9n.kaih += 2, _p9n.saku += 1) : 981 == _p9l.ship_id && (_p9n.houg += 1, _p9n.houm += 1, _p9n.kaih += 1);
            for (var _p9o = [], _p9p = function(_p9q) {
                    var _p9r = null,
                        _p9s = _p9l.get_each_level_nums(_p9q);
                    null == _p9o[_p9q] && (_p9o[_p9q] = []), _p9s.forEach(function(_p9t, _p9u) {
                        var _p9v = null;
                        for (var _p9w = 1; _p9w <= _p9l.SLOT_LEVEL_MAX; _p9w++) null == _p9o[_p9q][_p9w] && (_p9o[_p9q][_p9w] = 0), _p9u >= _p9w && (_p9o[_p9q][_p9w] += _p9t);
                    });
                }, _p9x = 0, _p9y = [267, 366, 450, 517]; _p9x < _p9y.length; _p9x++) {
                _p9p(_p9y[_p9x]);
            }
            var _p9z = _p9o[517];
            return _p9z[7] > 0 && (_p9n.houm += 1), _p9z[8] > 0 && (_p9n.kaih += 1), _p9z[9] > 0 && (_p9n.houg += 1), _p9z[10] > 0 && (_p9n.houm += 1), (_p9o[267][3] > 0 || _p9o[366][3] > 0) && (_p9n.houg += 1, _p9n.houm += 1, 38 == _p9l.ctype && (_p9n.houg += 1, _p9n.houm += 1), _p9o[450][4] > 0 && (_p9n.houg += 1, _p9n.houm += 1, _p9n.tyku += 4, _p9n.kaih += 3)), _p9n;
        };
    },
    76054: (_pa0, _pa1, _pa2) => {
        'use strict';
        var _pa3 = null;
        defineModule(_pa1);
        Object.defineProperty(_pa1, '__esModule', {
            'value': true
        }), _pa1.getSlot518PersonalEffect = void 0;
        var _pa4 = _pa2(74496);
        _pa1.getSlot518PersonalEffect = function(_pa5) {
            var _pa6 = null,
                _pa7 = new _pa4.SlotItemEffectModel(),
                _pa8 = false,
                _pa9 = new _pa4.SlotItemEffectModel();
            if (34 != _pa5.ctype && 56 != _pa5.ctype || (_pa9.houg += 1, _pa9.tyku += 1, _pa9.tais += 1, _pa9.kaih += 1, _pa8 = true), 16 == _pa5.stype && (_pa9.houg += 1, _pa9.raig += 1, _pa9.kaih += 1, _pa8 = true), 622 != _pa5.ship_id && 624 != _pa5.ship_id && 623 != _pa5.ship_id || (_pa9.houg += 1, _pa8 = true), 622 != _pa5.ship_id && 624 != _pa5.ship_id || (_pa9.tyku += 1, _pa8 = true), 624 == _pa5.ship_id && (_pa9.tais += 2, _pa8 = true), 0 == _pa8) return _pa7;
            var _paa = _pa5.get_slotnums(518);
            return _pa7.add(_pa9.multiply(_paa)), _pa7;
        };
    },
    93053: (_pab, _pac, _pad) => {
        'use strict';
        var _pae = null;
        defineModule(_pac);
        Object.defineProperty(_pac, '__esModule', {
            'value': true
        }), _pac.getSlot519PersonalEffect = void 0;
        var _paf = _pad(74496);
        _pac.getSlot519PersonalEffect = function(_pag) {
            var _pah = null,
                _pai = new _paf.SlotItemEffectModel();
            return 122 == _pag.ctype && (_pai.houm += 2, _pai.kaih += 2), 114 == _pag.ctype && (_pai.raig += 1, _pai.houm += 2, _pai.kaih += 2), _pai;
        };
    },
    81254: (_paj, _pak, _pal) => {
        'use strict';
        var _pam = null;
        defineModule(_pak);
        Object.defineProperty(_pak, '__esModule', {
            'value': true
        }), _pak.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _pan = _pal(74496);
        _pak.getSlot51cmSeriesGunPersonalEffect = function(_pao) {
            var _pap = null,
                _paq = new _pan.SlotItemEffectModel(),
                _par = false,
                _pas = new _pan.SlotItemEffectModel(),
                _pat = _pao.get_slotnums(142),
                _pau = _pao.get_slotnums(460),
                _pav = _pat + _pau;
            if (916 != _pao.ship_id && 911 != _pao.ship_id && 546 != _pao.ship_id || (_pas.houg += 1, _pas.houm += 1, _pau >= 1 && (_paq.kaih += 1, _paq.houm += 1), _par = true), 37 == _pao.ctype && _pav >= 1 && (_paq.houg += 1, _paq.houm += 2), 0 == _par) return _paq;
            var _paw = _pao.get_slotnums(128) + _pao.get_slotnums(281);
            return _paq.add(_pas.multiply(_paw)), _paq;
        };
    },
    88792: (_pax, _pay, _paz) => {
        'use strict';
        var _pb0 = null;
        defineModule(_pay);
        Object.defineProperty(_pay, '__esModule', {
            'value': true
        }), _pay.getSlot520PersonalEffect = void 0;
        var _pb1 = _paz(74496);
        _pay.getSlot520PersonalEffect = function(_pb2) {
            var _pb3 = null,
                _pb4 = new _pb1.SlotItemEffectModel(),
                _pb5 = false,
                _pb6 = new _pb1.SlotItemEffectModel(),
                _pb7 = 0,
                _pb8 = 0,
                _pb9 = 0,
                _pba = _pb2.get_slotnums(520);
            7 == _pb2.ctype || 13 == _pb2.ctype ? (_pb6.houg += 1, _pb5 = true, _pb8 = 1, _pb9 = 1) : 8 == _pb2.ctype || 29 == _pb2.ctype ? (_pb6.houg += 2, _pb6.kaih += 1, _pb5 = true, _pb8 = 2, _pb9 = 1) : 9 != _pb2.ctype && 31 != _pb2.ctype || (_pb6.houg += 3, _pb6.kaih += 1, _pb6.houm += 1, _pb5 = true, _pb8 = 2, _pb9 = 1, 2 == _pba && (_pb4.houg += 2), _pba >= 3 && (_pb4.houg += 4));
            var _pbb = _pb2.get_have_rader_nums().water_rader,
                _pbc = 0,
                _pbd = 0;
            if (_pb8 + _pb9 > 0) {
                for (var _pbe = _pb2.getSpItemDict_FukuhouTaikuHeisou(), _pbf = _pb2.getSpItemDict_Tansou21GouDentan(), _pbg = 0, _pbh = _pb2.have_slot_ids(); _pbg < _pbh.length; _pbg++) {
                    var _pbi = _pbh[_pbg],
                        _pbj = parseInt(_pbi);
                    null != _pbe[_pbj] ? (_pbe[_pbj] += _pb2.get_slotnums(_pbj), _pbc += _pb2.get_slotnums(_pbj)) : null != _pbf[_pbj] && (_pbf[_pbj] += _pb2.get_slotnums(_pbj), _pbd += _pb2.get_slotnums(_pbj));
                }
                _pbb > 0 && (1 == _pb8 ? (_pb4.houg += 2, _pb4.raig += 2, _pb4.kaih += 1, _pb4.houm += 1) : 2 == _pb8 && (_pb4.houg += 3, _pb4.raig += 2, _pb4.kaih += 2, _pb4.houm += 1)), _pbc > 0 && 1 == _pb9 && (_pb4.houg += 1, _pb4.tyku += 4, _pb4.kaih += 4, _pb4.houm += 1);
            }
            if (269 == _pb2.ship_id || 265 == _pb2.ship_id || 319 == _pb2.ship_id ? (2 == _pba && (_pb4.houg += 2), _pba >= 3 && (_pb4.houg += 4)) : 501 != _pb2.ship_id && 506 != _pb2.ship_id && 502 != _pb2.ship_id && 507 != _pb2.ship_id && 503 != _pb2.ship_id && 504 != _pb2.ship_id || (_pb6.houg += 1, _pb5 = true, _pbb >= 1 && (_pb4.houg += 1, _pb4.kaih += 1, _pb4.houm += 2), _pbd >= 1 && (_pb4.houg += 1, _pb4.tyku += 3, _pb4.kaih += 2, _pb4.houm += 1), _pb2.get_slotnums(410) > 0 && (_pb4.houg += 2, _pb4.tyku += 3, _pb4.kaih += 2, _pb4.houm += 1), _pb7 = 1), 502 == _pb2.ship_id || 269 == _pb2.ship_id || 265 == _pb2.ship_id || 319 == _pb2.ship_id ? (_pb6.houg += 1, _pb6.houm += 1, _pb5 = true) : 507 == _pb2.ship_id && (_pb6.houg += 1, _pb6.houm += 2, _pb6.tyku += 1, _pb5 = true), _pb5 && _pb4.add(_pb6.multiply(_pba)), 0 == _pb7) return _pb4;
            var _pbk = _pb2.get_each_level_over_nums([520]),
                _pbl = _pbk.slot[520][7],
                _pbm = _pbk.slot[520][10];
            return 1 == _pb7 && (_pbl > 0 && (_pb4.houg += 1 * _pbl), _pbm > 0 && (_pb4.houm += 1 * _pbm)), _pb4;
        };
    },
    33242: (_pbn, _pbo, _pbp) => {
        'use strict';
        var _pbq = null;
        defineModule(_pbo);
        Object.defineProperty(_pbo, '__esModule', {
            'value': true
        }), _pbo.getSlot521PersonalEffect = void 0;
        var _pbr = _pbp(74496);
        _pbo.getSlot521PersonalEffect = function(_pbs) {
            var _pbt = null,
                _pbu = new _pbr.SlotItemEffectModel(),
                _pbv = false,
                _pbw = new _pbr.SlotItemEffectModel(),
                _pbx = 0;
            if (52 == _pbs.ctype && (_pbx = 1), 183 == _pbs.ship_id ? (_pbw.houg += 1, _pbw.houm += 1, _pbw.saku += 2, _pbw.kaih += 2, _pbv = true) : 321 == _pbs.ship_id ? (_pbw.houg += 2, _pbw.houm += 2, _pbw.saku += 3, _pbw.kaih += 3, _pbv = true) : 507 == _pbs.ship_id && (_pbw.houg += 3, _pbw.tyku += 1, _pbw.houm += 3, _pbw.saku += 2, _pbw.kaih += 2, _pbv = true, _pbx = 1), _pbv) {
                var _pby = _pbs.get_slotnums(521);
                _pbu.add(_pbw.multiply(_pby));
            }
            if (0 == _pbx) return _pbu;
            var _pbz = _pbs.get_each_level_over_nums([521]).slot[521];
            return 1 == _pbx && (_pbz[1] >= 1 && (_pbu.houm += 1 * _pbz[1]), _pbz[2] >= 1 && (_pbu.kaih += 1 * _pbz[2]), _pbz[3] >= 1 && (_pbu.saku += 1 * _pbz[3], _pbu.raig += 1 * _pbz[3]), _pbz[4] >= 1 && (_pbu.houg += 1 * _pbz[4]), _pbz[6] >= 1 && (_pbu.houm += 1 * _pbz[6]), _pbz[8] >= 1 && (_pbu.saku += 1 * _pbz[8]), _pbz[10] >= 1 && (_pbu.houm += 1 * _pbz[10])), _pbu;
        };
    },
    3296: (_pc0, _pc1, _pc2) => {
        'use strict';
        var _pc3 = null;
        defineModule(_pc1);
        Object.defineProperty(_pc1, '__esModule', {
            'value': true
        }), _pc1.getSlot522_523PersonalEffect = void 0;
        var _pc4 = _pc2(74496);
        _pc1.getSlot522_523PersonalEffect = function(_pc5) {
            var _pc6 = null,
                _pc7 = new _pc4.SlotItemEffectModel(),
                _pc8 = false,
                _pc9 = new _pc4.SlotItemEffectModel(),
                _pca = 0,
                _pcb = _pc5.get_slotnums(522),
                _pcc = _pc5.get_slotnums(523),
                _pcd = _pcb + _pcc;
            if (14 == _pc5.stype && (_pc9.raig += 1, _pc9.kaih += 5, _pc9.houm += 1, _pc9.saku += 3, _pc8 = true, _pcc >= 1 && (_pc7.raig += 2 * _pcc, _pc7.baku += 2 * _pcc, _pc7.kaih += 1 * _pcc, _pc7.houm += 1 * _pcc, _pc7.saku += 1 * _pcc), _pca = 1), 0 == _pc8) return _pc7;
            if (_pc7.add(_pc9.multiply(_pcd)), 0 == _pca) return _pc7;
            var _pce = _pc5.get_each_level_over_nums([522, 523]),
                _pcf = _pce.slot[522],
                _pcg = _pce.slot[523];
            if (1 == _pca) {
                if (_pcf[1] >= 1 || _pcg[1] >= 1) {
                    var _pch = _pcf[1] + _pcg[1];
                    _pc7.raig += 1 * _pch;
                }
                if (_pcf[2] >= 1 || _pcg[2] >= 1) {
                    var _pci = _pcf[2] + _pcg[2];
                    _pc7.houm += 1 * _pci;
                }
                if (_pcf[3] >= 1 || _pcg[3] >= 1) {
                    var _pcj = _pcf[3] + _pcg[3];
                    _pc7.kaih += 1 * _pcj;
                }
                if (_pcf[5] >= 1 || _pcg[5] >= 1) {
                    var _pck = _pcf[5] + _pcg[5];
                    _pc7.saku += 1 * _pck;
                }
                if (_pcf[8] >= 1 || _pcg[8] >= 1) {
                    var _pcl = _pcf[8] + _pcg[8];
                    _pc7.houm += 1 * _pcl;
                }
                if (_pcf[10] >= 1 || _pcg[10] >= 1) {
                    var _pcm = _pcf[10] + _pcg[10];
                    _pc7.kaih += 1 * _pcm;
                }
            }
            return _pc7;
        };
    },
    59415: (_pcn, _pco, _pcp) => {
        'use strict';
        var _pcq = null;
        defineModule(_pco);
        Object.defineProperty(_pco, '__esModule', {
            'value': true
        }), _pco.getSlot524PersonalEffect = void 0;
        var _pcr = _pcp(74496);
        _pco.getSlot524PersonalEffect = function(_pcs) {
            var _pct = null,
                _pcu = new _pcr.SlotItemEffectModel(),
                _pcv = false,
                _pcw = new _pcr.SlotItemEffectModel(),
                _pcx = 0,
                _pcy = 0;
            if (17 != _pcs.stype && 19 != _pcs.stype && 20 != _pcs.stype && 21 != _pcs.stype && 22 != _pcs.stype || (_pcw.houg += 1, _pcw.tyku += 2, _pcw.kaih += 2, _pcw.houm += 1, _pcv = true, _pcx = 1, _pcy = 1), 0 == _pcv) return _pcu;
            var _pcz = _pcs.get_slotnums(524);
            _pcu.add(_pcw.multiply(_pcz));
            var _pd0 = _pcs.get_have_rader_nums().air_rader;
            if (1 == _pcy && _pd0 >= 1 && (_pcu.tyku += 2, _pcu.kaih += 2), 0 == _pcx) return _pcu;
            var _pd1 = _pcs.get_each_level_over_nums([524]).slot[524];
            return 1 == _pcx && (_pd1[1] >= 1 && (_pcu.kaih += 1 * _pd1[1]), _pd1[2] >= 1 && (_pcu.kaih += 1 * _pd1[2]), _pd1[4] >= 1 && (_pcu.tyku += 1 * _pd1[4]), _pd1[6] >= 1 && (_pcu.kaih += 1 * _pd1[6]), _pd1[7] >= 1 && (_pcu.houm += 1 * _pd1[7]), _pd1[8] >= 1 && (_pcu.tyku += 1 * _pd1[8]), _pd1[9] >= 1 && (_pcu.kaih += 1 * _pd1[9]), _pd1[10] >= 1 && (_pcu.houg += 1 * _pd1[10])), _pcu;
        };
    },
    36731: (_pd2, _pd3, _pd4) => {
        'use strict';
        var _pd5 = null;
        defineModule(_pd3);
        Object.defineProperty(_pd3, '__esModule', {
            'value': true
        }), _pd3.getSlot527PersonalEffect = void 0;
        var _pd6 = _pd4(74496);
        _pd3.getSlot527PersonalEffect = function(_pd7) {
            var _pd8 = null,
                _pd9 = new _pd6.SlotItemEffectModel(),
                _pda = 0;
            if ('イギリス' == _pd7.getCountryName() && (_pda = 1, _pd9.tyku += 2, _pd9.houm += 1, _pd9.kaih += 1, _pd9.saku += 2, 88 == _pd7.ctype && (_pd9.houg += 2), 67 == _pd7.ctype && (_pd9.houg += 1)), 0 == _pda) return _pd9;
            var _pdb = _pd7.get_each_level_over_nums([527]),
                _pdc = _pdb.slot[527][2],
                _pdd = _pdb.slot[527][4],
                _pde = _pdb.slot[527][7],
                _pdf = _pdb.slot[527][10];
            return 1 == _pda && (_pdc >= 1 && (_pd9.tyku += 1), _pdd >= 1 && (_pd9.kaih += 1), _pde >= 1 && (_pd9.tyku += 1), _pdf >= 1 && (_pd9.houm += 1)), _pd9;
        };
    },
    30450: (_pdg, _pdh, _pdi) => {
        'use strict';
        var _pdj = null;
        defineModule(_pdh);
        Object.defineProperty(_pdh, '__esModule', {
            'value': true
        }), _pdh.getSlot528PersonalEffect = void 0;
        var _pdk = _pdi(74496);
        _pdh.getSlot528PersonalEffect = function(_pdl) {
            var _pdm = null,
                _pdn = new _pdk.SlotItemEffectModel(),
                _pdo = false,
                _pdp = new _pdk.SlotItemEffectModel(),
                _pdq = 0;
            if ('イギリス' == _pdl.getCountryName() && (_pdp.houg += 1, _pdp.houm += 2, _pdp.kaih += 1, 108 == _pdl.ctype && (_pdp.houg += 1, _pdp.kaih += 1), _pdo = true, _pdq = 1), 0 == _pdo) return _pdn;
            var _pdr = _pdl.get_slotnums(528);
            if (_pdn.add(_pdp.multiply(_pdr)), 0 == _pdq) return _pdn;
            var _pds = _pdl.get_each_level_over_nums([528]),
                _pdt = _pds.slot[528][2],
                _pdu = _pds.slot[528][4],
                _pdv = _pds.slot[528][7],
                _pdw = _pds.slot[528][10];
            return 1 == _pdq && (_pdt >= 1 && (_pdn.houg += 1 * _pdt), _pdu >= 1 && (_pdn.houm += 1 * _pdu), _pdv >= 1 && (_pdn.kaih += 1 * _pdv), _pdw >= 1 && (_pdn.houm += 1 * _pdw)), _pdn;
        };
    },
    15653: (_pdx, _pdy, _pdz) => {
        'use strict';
        var _pe0 = null;
        defineModule(_pdy);
        Object.defineProperty(_pdy, '__esModule', {
            'value': true
        }), _pdy.getSlot530PersonalEffect = void 0;
        var _pe1 = _pdz(74496);
        _pdy.getSlot530PersonalEffect = function(_pe2) {
            var _pe3 = null,
                _pe4 = new _pe1.SlotItemEffectModel(),
                _pe5 = false;
            if (6 == _pe2.ctype && (_pe5 = true), 0 == _pe5) return _pe4;
            var _pe6 = false,
                _pe7 = new _pe1.SlotItemEffectModel(),
                _pe8 = _pe2.get_slotnums(530),
                _pe9 = _pe2.get_slotnums(174),
                _pea = _pe2.get_each_level_over_nums([530, 174]),
                _peb = _pea.slot[530],
                _pec = _pea.slot[174],
                _ped = _pe2.get_have_rader_nums(),
                _pee = _ped.water_rader,
                _pef = _ped.high_water_rader;
            return _ped.air_rader, 149 != _pe2.ship_id && 150 != _pe2.ship_id && 151 != _pe2.ship_id && 152 != _pe2.ship_id && 593 != _pe2.ship_id || (_pe7.houg += 2, _pe6 = true), 591 != _pe2.ship_id && 954 != _pe2.ship_id || (_pe7.houg += 3, _pe6 = true), 592 != _pe2.ship_id && 694 != _pe2.ship_id || (_pe7.houg += 4, _pe6 = true), 149 != _pe2.ship_id && 150 != _pe2.ship_id && 151 != _pe2.ship_id && 152 != _pe2.ship_id || (_pe7.tyku += 1, _pe6 = true), 591 != _pe2.ship_id && 592 != _pe2.ship_id && 954 != _pe2.ship_id && 694 != _pe2.ship_id || (_pe7.tyku += 2, _pe6 = true), 593 == _pe2.ship_id && (_pe7.tyku += 3, _pe6 = true), 592 != _pe2.ship_id && 694 != _pe2.ship_id || (_pe7.houg += 1, _pe7.houm += 2, _pe6 = true, _peb[2] >= 1 && (_pe4.houm += 1 * _peb[2]), _peb[4] >= 1 && (_pe4.houg += 1 * _peb[4]), _peb[6] >= 1 && (_pe4.souk += 1 * _peb[6]), _peb[7] >= 1 && (_pe4.houm += 1 * _peb[7]), _peb[8] >= 1 && (_pe4.houg += 1 * _peb[8]), _peb[9] >= 1 && (_pe4.souk += 1 * _peb[9]), _peb[10] >= 1 && (_pe4.houm += 1 * _peb[10])), 150 != _pe2.ship_id && 152 != _pe2.ship_id && 591 != _pe2.ship_id && 954 != _pe2.ship_id || (_pe7.houm += 1, _pe6 = true, _peb[2] >= 1 && (_pe4.houg += 1 * _peb[2]), _peb[4] >= 1 && (_pe4.souk += 1 * _peb[4]), _peb[6] >= 1 && (_pe4.houm += 1 * _peb[6]), _peb[8] >= 1 && (_pe4.houg += 1 * _peb[8]), _peb[10] >= 1 && (_pe4.houm += 1 * _peb[10])), 149 != _pe2.ship_id && 151 != _pe2.ship_id && 593 != _pe2.ship_id || (_peb[4] >= 1 && (_pe4.houg += 1 * _peb[4]), _peb[7] >= 1 && (_pe4.souk += 1 * _peb[7]), _peb[10] >= 1 && (_pe4.houm += 1 * _peb[10])), 592 != _pe2.ship_id && 694 != _pe2.ship_id || (_pee >= 1 && (_pe4.houg += 3, _pe4.houm += 3, _pe4.kaih += 3, 592 == _pe2.ship_id ? _pe4.houg += 3 : 694 == _pe2.ship_id && (_pe4.houg += 4)), _pe8 >= 2 && (_pe4.houm += 2), _pe8 >= 3 && (_pe4.houm += 2), _pe8 >= 4 && (_pe4.houm += 2), _pef >= 1 && (_pe4.houm += 1), 694 == _pe2.ship_id && _pe8 >= 3 && (_pe4.houg += 3)), 149 != _pe2.ship_id && 150 != _pe2.ship_id && 151 != _pe2.ship_id && 152 != _pe2.ship_id && 591 != _pe2.ship_id && 954 != _pe2.ship_id && 593 != _pe2.ship_id || (_pee >= 1 && (_pe4.houg += 2, _pe4.houm += 2, _pe4.kaih += 2, 591 == _pe2.ship_id || 152 == _pe2.ship_id ? _pe4.houg += 3 : 954 == _pe2.ship_id || 150 == _pe2.ship_id ? _pe4.houg += 2 : 149 != _pe2.ship_id && 151 != _pe2.ship_id && 593 != _pe2.ship_id || (_pe4.houg += 1)), _pef >= 1 && (_pe4.houm += 1)), 591 != _pe2.ship_id && 592 != _pe2.ship_id && 593 != _pe2.ship_id && 954 != _pe2.ship_id && 694 != _pe2.ship_id || (_pe9 >= 1 && (_pe4.raig += 6, _pec[6] >= 1 && (_pe4.raig += 1), _pec[8] >= 1 && (_pe4.houm += 1), _pec[10] >= 1 && (_pe4.houg += 1)), _pef >= 1 && (_pe4.houg += 2, _pe4.raig += 2, _pe4.houm += 2, _pe4.kaih += 3, 591 == _pe2.ship_id || 592 == _pe2.ship_id ? _pe4.houg += 2 : 954 == _pe2.ship_id || 593 == _pe2.ship_id ? _pe4.houg += 1 : 694 == _pe2.ship_id && (_pe4.houg += 3)), _pe8 >= 2 && (_pe4.houm += 1)), _pe6 && _pe4.add(_pe7.multiply(_pe8)), _pe4;
        };
    },
    25851: (_peg, _peh, _pei) => {
        'use strict';
        var _pej = null;
        defineModule(_peh);
        Object.defineProperty(_peh, '__esModule', {
            'value': true
        }), _peh.getSlot531PersonalEffect = void 0;
        var _pek = _pei(74496);
        _peh.getSlot531PersonalEffect = function(_pel) {
            var _pem = null,
                _pen = new _pek.SlotItemEffectModel(),
                _peo = _pel.have_level_num_over_dict[531];
            return null == _peo || (_peo[4] >= 1 && (_pen.houm += 1 * _peo[4]), _peo[5] >= 1 && (_pen.houg += 1 * _peo[5]), _peo[6] >= 1 && (_pen.kaih += 1 * _peo[6]), _peo[7] >= 1 && (_pen.houm += 1 * _peo[7]), _peo[8] >= 1 && (_pen.houg += 1 * _peo[8]), _peo[9] >= 1 && (_pen.kaih += 1 * _peo[9]), _peo[10] >= 1 && (_pen.houm += 1 * _peo[10])), _pen;
        };
    },
    91275: (_pep, _peq, _per) => {
        'use strict';
        var _pes = null;
        defineModule(_peq);
        Object.defineProperty(_peq, '__esModule', {
            'value': true
        }), _peq.getSlot538PersonalEffect = void 0;
        var _pet = _per(74496);
        _peq.getSlot538PersonalEffect = function(_peu) {
            var _pev = null,
                _pew = new _pet.SlotItemEffectModel(),
                _pex = false,
                _pey = new _pet.SlotItemEffectModel(),
                _pez = 0;
            if ('フランス' == _peu.getCountryName() && (_pey.houg += 3, _pey.kaih += 2, _pey.houm += 2, _pex = true, _pez = 1), 79 == _peu.ctype ? (_pey.houg += 2, 969 == _peu.ship_id && (_pey.houg += 1, _pey.houm += 1, _pey.kaih += 1), _pex = true) : 70 == _peu.ctype && (_pey.houg += 1, _pey.houm += 1, _pey.tyku += 2, _pey.kaih += 2, _pex = true), 0 == _pex) return _pew;
            var _pf0 = _peu.get_slotnums(538);
            if (_pew.add(_pey.multiply(_pf0)), 0 == _pez) return _pew;
            var _pf1 = _peu.haveSlotLevelNumOver(538);
            return 1 == _pez && (_pf1[3] >= 1 && (_pew.kaih += 1 * _pf1[3]), _pf1[4] >= 1 && (_pew.houm += 1 * _pf1[4]), _pf1[5] >= 1 && (_pew.houg += 1 * _pf1[5]), _pf1[6] >= 1 && (_pew.kaih += 1 * _pf1[6]), _pf1[7] >= 1 && (_pew.houm += 1 * _pf1[7]), _pf1[8] >= 1 && (_pew.houg += 1 * _pf1[8]), _pf1[9] >= 1 && (_pew.kaih += 1 * _pf1[9]), _pf1[10] >= 1 && (_pew.houg += 1 * _pf1[10], _pew.houm += 1 * _pf1[10])), _pew;
        };
    },
    72743: (_pf2, _pf3, _pf4) => {
        'use strict';
        var _pf5 = null;
        defineModule(_pf3);
        Object.defineProperty(_pf3, '__esModule', {
            'value': true
        }), _pf3.getSlot540PersonalEffect = void 0;
        var _pf6 = _pf4(74496);
        _pf3.getSlot540PersonalEffect = function(_pf7) {
            var _pf8 = null,
                _pf9 = new _pf6.SlotItemEffectModel(),
                _pfa = false,
                _pfb = new _pf6.SlotItemEffectModel();
            if (911 == _pf7.ship_id || 916 == _pf7.ship_id || 546 == _pf7.ship_id || 662 == _pf7.ship_id || 663 == _pf7.ship_id || 668 == _pf7.ship_id ? (_pfb.kaih += 1, _pfb.saku += 1, _pfa = true) : 73 == _pf7.ship_id || 506 == _pf7.ship_id || 121 == _pf7.ship_id || 503 == _pf7.ship_id || 504 == _pf7.ship_id || 188 == _pf7.ship_id || 189 == _pf7.ship_id ? (_pfb.houm += 1, _pfb.kaih += 1, _pfb.saku += 1, _pfa = true) : 488 != _pf7.ship_id && 200 != _pf7.ship_id && 487 != _pf7.ship_id && 501 != _pf7.ship_id && 502 != _pf7.ship_id && 507 != _pf7.ship_id || (_pfb.houg += 1, _pfb.houm += 1, _pfb.kaih += 1, _pfb.saku += 1, _pfa = true), 'にっしん' == _pf7.yomi || 'ちとせ' == _pf7.yomi || 'ちよだ' == _pf7.yomi || 'あきつしま' == _pf7.yomi ? (_pfb.houg += 1, _pfb.houm += 1, _pfb.tyku += 2, _pfb.kaih += 2, _pfb.saku += 2, _pfa = true) : 'みずほ' != _pf7.yomi && 'かもい' != _pf7.yomi || (_pfb.houg += 2, _pfb.houm += 1, _pfb.tyku += 2, _pfb.kaih += 2, _pfb.saku += 2, _pfa = true), 0 == _pfa) return _pf9;
            var _pfc = _pf7.get_slotnums(540);
            return _pf9.add(_pfb.multiply(_pfc)), _pf9;
        };
    },
    57041: (_pfd, _pfe, _pff) => {
        'use strict';
        var _pfg = null;
        defineModule(_pfe);
        Object.defineProperty(_pfe, '__esModule', {
            'value': true
        }), _pfe.getSlot545PersonalEffect = void 0;
        var _pfh = _pff(74496);
        _pfe.getSlot545PersonalEffect = function(_pfi) {
            var _pfj = null,
                _pfk = new _pfh.SlotItemEffectModel(),
                _pfl = false,
                _pfm = new _pfh.SlotItemEffectModel();
            if ('しょうかく' == _pfi.yomi ? _pfk.houg += 4 : 'ずいかく' == _pfi.yomi ? _pfk.houg += 3 : 'あかぎ' == _pfi.yomi ? _pfk.houg += 2 : 'かが' != _pfi.yomi && 'たいほう' != _pfi.yomi || (_pfk.houg += 1), 461 == _pfi.ship_id || 466 == _pfi.ship_id ? (_pfm.houg += 1, _pfm.houm += 2, _pfm.kaih += 1, _pfm.saku += 2, _pfl = true) : 462 == _pfi.ship_id || 467 == _pfi.ship_id || 646 == _pfi.ship_id ? (_pfm.houg += 1, _pfm.houm += 1, _pfm.saku += 1, _pfl = true) : 599 != _pfi.ship_id && 610 != _pfi.ship_id && 156 != _pfi.ship_id || (_pfm.houm += 1, _pfm.saku += 1, _pfl = true), 0 == _pfl) return _pfk;
            var _pfn = _pfi.get_slotnums(545);
            return _pfk.add(_pfm.multiply(_pfn)), _pfk;
        };
    },
    74608: (_pfo, _pfp, _pfq) => {
        'use strict';
        var _pfr = null;
        defineModule(_pfp);
        Object.defineProperty(_pfp, '__esModule', {
            'value': true
        }), _pfp.getSlot549PersonalEffect = void 0;
        var _pfs = _pfq(74496);
        _pfp.getSlot549PersonalEffect = function(_pft) {
            var _pfu = null,
                _pfv = new _pfs.SlotItemEffectModel(),
                _pfw = false,
                _pfx = new _pfs.SlotItemEffectModel(),
                _pfy = 0;
            if ('やましおまる' != _pft.yomi && 'くまのまる' != _pft.yomi && 'あきつまる' != _pft.yomi || (_pfx.houg += 2, _pfx.houm += 1, _pfx.kaih += 1, _pfx.tais += 4, _pfw = true, _pfy = 1), 76 != _pft.ctype && 27 != _pft.ctype || (_pfx.houg += 1, _pfx.houm += 1, _pfx.tais += 1, _pfw = true, _pfy = 2), 0 == _pfw) return _pfv;
            var _pfz = _pft.get_slotnums(549);
            if (_pfv.add(_pfx.multiply(_pfz)), 0 == _pfy) return _pfv;
            var _pg0 = _pft.haveSlotLevelNumOver(549);
            return 1 == _pfy ? (_pg0[3] >= 1 && (_pfv.houg += 1 * _pg0[3]), _pg0[4] >= 1 && (_pfv.houm += 1 * _pg0[4]), _pg0[5] >= 1 && (_pfv.tais += 1 * _pg0[5]), _pg0[6] >= 1 && (_pfv.kaih += 1 * _pg0[6]), _pg0[7] >= 1 && (_pfv.houg += 1 * _pg0[7]), _pg0[8] >= 1 && (_pfv.houm += 1 * _pg0[8]), _pg0[9] >= 1 && (_pfv.tais += 1 * _pg0[9]), _pg0[10] >= 1 && (_pfv.houg += 1 * _pg0[10])) : 2 == _pfy && (_pg0[4] >= 1 && (_pfv.tais += 1 * _pg0[4]), _pg0[6] >= 1 && (_pfv.kaih += 1 * _pg0[6]), _pg0[8] >= 1 && (_pfv.houm += 1 * _pg0[8]), _pg0[10] >= 1 && (_pfv.houg += 1 * _pg0[10])), _pfv;
        };
    },
    4188: (_pg1, _pg2, _pg3) => {
        'use strict';
        var _pg4 = null;
        defineModule(_pg2);
        Object.defineProperty(_pg2, '__esModule', {
            'value': true
        }), _pg2.getSlot554PersonalEffect = void 0;
        var _pg5 = _pg3(74496);
        _pg2.getSlot554PersonalEffect = function(_pg6) {
            var _pg7 = null,
                _pg8 = new _pg5.SlotItemEffectModel(),
                _pg9 = false,
                _pga = new _pg5.SlotItemEffectModel(),
                _pgb = _pg6.haveSlotLevelNumOver(554);
            if (_pgb[2] >= 1 && (_pg8.houg += 1 * _pgb[2]), _pgb[4] >= 1 && (_pg8.houm += 1 * _pgb[4]), _pgb[6] >= 1 && (_pg8.tais += 1 * _pgb[6]), _pgb[8] >= 1 && (_pg8.houg += 1 * _pgb[8]), _pgb[10] >= 1 && (_pg8.houm += 1 * _pgb[10]), 7 == _pg6.stype && (_pga.houg += 1, _pga.kaih += 1, _pga.tais += 1, _pg9 = true), 117 != _pg6.ship_id && 555 != _pg6.ship_id && 560 != _pg6.ship_id && 285 != _pg6.ship_id && 894 != _pg6.ship_id && 318 != _pg6.ship_id && 888 != _pg6.ship_id && 883 != _pg6.ship_id || (_pga.houg += 1, _pga.houm += 1, 894 == _pg6.ship_id && (_pga.houg += 1), _pg9 = true), 76 != _pg6.ctype && 27 != _pg6.ctype || (_pga.houm += 1, _pga.kaih += 1, _pga.tais += 1, _pg9 = true), _pg6.get_slotnums(402) >= 1 && (_pga.houg += 3, _pga.houm += 2, _pga.kaih += 1, _pga.tais += 3, _pg9 = true), 0 == _pg9) return _pg8;
            var _pgc = _pg6.get_slotnums(554);
            return _pg8.add(_pga.multiply(_pgc)), _pg8;
        };
    },
    37458: (_pgd, _pge, _pgf) => {
        'use strict';
        var _pgg = null;
        defineModule(_pge);
        Object.defineProperty(_pge, '__esModule', {
            'value': true
        }), _pge.getSlot555PersonalEffect = void 0;
        var _pgh = _pgf(74496);
        _pge.getSlot555PersonalEffect = function(_pgi) {
            var _pgj = null,
                _pgk = new _pgh.SlotItemEffectModel(),
                _pgl = false,
                _pgm = new _pgh.SlotItemEffectModel(),
                _pgn = _pgi.haveSlotLevelNumOver(555);
            _pgn[3] >= 1 && (_pgk.houg += 1 * _pgn[3]), _pgn[7] >= 1 && (_pgk.houm += 1 * _pgn[7]), _pgn[10] >= 1 && (_pgk.kaih += 1 * _pgn[10]);
            var _pgo = _pgi.get_slotnums(555),
                _pgp = _pgi.get_slotnums(556),
                _pgq = _pgi.get_slotnums(402);
            if ('キーロフ' == _pgi.yomi && (_pgl = true, _pgm.houg += 2, _pgm.houm += 1, _pgm.tais += 1, _pgp >= 1 && (_pgm.houg += 1, _pgm.houm += 1, _pgm.tyku += 3, _pgm.kaih += 2), _pgq >= 1 && (_pgm.houg += 1, _pgm.kaih += 2, _pgm.tais += 1)), 0 == _pgl) return _pgk;
            var _pgr = _pgo;
            return _pgk.add(_pgm.multiply(_pgr)), _pgk;
        };
    },
    65328: (_pgs, _pgt, _pgu) => {
        'use strict';
        var _pgv = null;
        defineModule(_pgt);
        Object.defineProperty(_pgt, '__esModule', {
            'value': true
        }), _pgt.getSlot556PersonalEffect = void 0;
        var _pgw = _pgu(74496);
        _pgt.getSlot556PersonalEffect = function(_pgx) {
            var _pgy = null,
                _pgz = new _pgw.SlotItemEffectModel(),
                _ph0 = false,
                _ph1 = new _pgw.SlotItemEffectModel();
            if ('キーロフ' != _pgx.yomi && 'ガングート' != _pgx.yomi || (_ph1.houg += 1, _ph1.houm += 1, _ph1.kaih += 1, _ph1.tyku += 3, _ph0 = true), 0 == _ph0) return _pgz;
            var _ph2 = _pgx.get_slotnums(556);
            return _pgz.add(_ph1.multiply(_ph2)), _pgz;
        };
    },
    23035: (_ph3, _ph4, _ph5) => {
        'use strict';
        var _ph6 = null;
        defineModule(_ph4);
        Object.defineProperty(_ph4, '__esModule', {
            'value': true
        }), _ph4.getSlot58PersonalEffect = void 0;
        var _ph7 = _ph5(74496);
        _ph4.getSlot58PersonalEffect = function(_ph8) {
            var _ph9 = null,
                _pha = new _ph7.SlotItemEffectModel(),
                _phb = new _ph7.SlotItemEffectModel();
            if ('しまかぜ' != _ph8.yomi && 4 != _ph8.stype && 54 != _ph8.ctype || (_phb.raig = 1), !_phb.exists()) return _pha;
            var _phc = _ph8.get_slotnums(58);
            return _pha = _phb.multiply(_phc);
        };
    },
    47169: (_phd, _phe, _phf) => {
        'use strict';
        var _phg = null;
        defineModule(_phe);
        Object.defineProperty(_phe, '__esModule', {
            'value': true
        }), _phe.getSlot59PersonalEffect = void 0;
        var _phh = _phf(74496);
        _phe.getSlot59PersonalEffect = function(_phi) {
            var _phj = null,
                _phk = new _phh.SlotItemEffectModel();
            return 501 != _phi.ship_id && 506 != _phi.ship_id && 502 != _phi.ship_id && 507 != _phi.ship_id || (_phk.tyku += 1, _phk.kaih += 1), _phk;
        };
    },
    87845: (_phl, _phm, _phn) => {
        'use strict';
        var _pho = null;
        defineModule(_phm);
        Object.defineProperty(_phm, '__esModule', {
            'value': true
        }), _phm.getSlot5PersonalEffect = void 0;
        var _php = _phn(74496);
        _phm.getSlot5PersonalEffect = function(_phq) {
            var _phr = null,
                _phs = new _php.SlotItemEffectModel(),
                _pht = false,
                _phu = new _php.SlotItemEffectModel();
            if (52 != _phq.ctype && 9 != _phq.ctype || (_phu.houg += 1, 52 == _phq.ctype && (_phu.houg = _phu.houg + 1), _pht = true), 0 == _pht) return _phs;
            var _phv = _phq.get_slotnums(5);
            return _phs.add(_phu.multiply(_phv)), _phs;
        };
    },
    92253: (_phw, _phx, _phy) => {
        'use strict';
        var _phz = null;
        defineModule(_phx);
        Object.defineProperty(_phx, '__esModule', {
            'value': true
        }), _phx.getSlot60_154_219PersonalEffec = void 0;
        var _pi0 = _phy(74496);
        _phx.getSlot60_154_219PersonalEffec = function(_pi1) {
            var _pi2 = null,
                _pi3 = new _pi0.SlotItemEffectModel(),
                _pi4 = false,
                _pi5 = new _pi0.SlotItemEffectModel();
            if ('じゅんよう' != _pi1.yomi && 'ひよう' != _pi1.yomi && 'ずいほう' != _pi1.yomi && 'ちとせ' != _pi1.yomi && 'ちよだ' != _pi1.yomi || (_pi5.houg += 1, _pi5.tyku += 1, _pi5.kaih += 1, _pi4 = true), 185 != _pi1.ship_id && 318 != _pi1.ship_id && 282 != _pi1.ship_id || (_pi5.houg += 1, _pi5.tyku += 1, _pi5.kaih += 1, _pi4 = true), 888 != _pi1.ship_id && 883 != _pi1.ship_id || (_pi5.houg += 2, _pi5.tyku += 1, _pi5.kaih += 2, _pi4 = true), 0 == _pi4) return _pi3;
            var _pi6 = _pi1.get_slotnums(60) + _pi1.get_slotnums(154) + _pi1.get_slotnums(219) + _pi1.get_slotnums(557) + _pi1.get_slotnums(558);
            return _pi3.add(_pi5.multiply(_pi6)), _pi3;
        };
    },
    2578: (_pi7, _pi8, _pi9) => {
        'use strict';
        var _pia = null;
        defineModule(_pi8);
        Object.defineProperty(_pi8, '__esModule', {
            'value': true
        }), _pi8.getSlot61PersonalEffect2 = _pi8.getSlot61PersonalEffect = void 0;
        var _pib = _pi9(74496);
        _pi8.getSlot61PersonalEffect = function(_pic) {
            var _pid = null,
                _pie = new _pib.SlotItemEffectModel();
            if (553 == _pic.ship_id) _pie.houg = 3, _pie.kaih = 2, _pie.souk = 1, _pie.houm = 5, _pie.leng = 1;
            else {
                if (554 == _pic.ship_id) _pie.houg = 3, _pie.kaih = 3, _pie.souk = 3, _pie.houm = 5, _pie.leng = 1;
                else {
                    if (196 == _pic.ship_id) _pie.houm = 5, _pie.leng = 1;
                    else {
                        if (197 != _pic.ship_id) return _pie;
                        _pie.houm = 5, _pie.leng = 1;
                    }
                }
            }
            return _pie;
        }, _pi8.getSlot61PersonalEffect2 = function(_pif) {
            var _pig = null,
                _pih = new _pib.SlotItemEffectModel();
            if (null == _pif.have_slots_dict[61]) return _pih;
            for (var _pii = 0, _pij = 0, _pik = _pif.have_slots_dict[61]; _pij < _pik.length; _pij++) {
                var _pil = _pik[_pij].level;
                _pii < _pil && (_pii = _pil);
            }
            return 0 == _pii || ('そうりゅう' == _pif.yomi ? (_pih.houg += 3, _pih.saku += 3) : 'ひりゅう' == _pif.yomi && (_pih.houg += 2, _pih.saku += 2), 508 != _pif.ship_id && 509 != _pif.ship_id && 560 != _pif.ship_id || (_pih.houg += 1, _pih.saku += 1), _pii >= 8 && 197 == _pif.ship_id && (_pih.houg += 1, _pih.saku += 1)), _pih;
        };
    },
    17143: (_pim, _pin, _pio) => {
        'use strict';
        var _pip = null;
        defineModule(_pin);
        Object.defineProperty(_pin, '__esModule', {
            'value': true
        }), _pin.getSlot63PersonalEffect = void 0;
        var _piq = _pio(74496);
        _pin.getSlot63PersonalEffect = function(_pir) {
            var _pis = null,
                _pit = new _piq.SlotItemEffectModel(),
                _piu = new _piq.SlotItemEffectModel();
            1 != _pir.ctype && 5 != _pir.ctype && 10 != _pir.ctype || (_piu.tyku += 1), 'ゆうだち' == _pir.yomi && (_piu.houg += 1, _piu.tyku += 1, _piu.kaih += 2), 145 == _pir.ship_id || 961 == _pir.ship_id ? _piu.houg += 1 : 144 == _pir.ship_id ? _piu.raig += 1 : 469 == _pir.ship_id ? _piu.kaih += 2 : 242 == _pir.ship_id || 497 == _pir.ship_id || 244 == _pir.ship_id || 498 == _pir.ship_id || 975 == _pir.ship_id ? _piu.kaih += 1 : 627 == _pir.ship_id ? _piu.houg += 1 : 903 != _pir.ship_id && 908 != _pir.ship_id || (_piu.houg += 2);
            var _piv = true;
            if (_piu.exists() || (_piv = false), 0 == _piv) return _pit;
            var _piw = _pir.get_slotnums(63);
            return _pit = _piu.multiply(_piw);
        };
    },
    16164: (_pix, _piy, _piz) => {
        'use strict';
        var _pj0 = null;
        defineModule(_piy);
        Object.defineProperty(_piy, '__esModule', {
            'value': true
        }), _piy.getSlot67PersonalEffect = void 0;
        var _pj1 = _piz(74496);
        _piy.getSlot67PersonalEffect = function(_pj2) {
            var _pj3 = null,
                _pj4 = new _pj1.SlotItemEffectModel(),
                _pj5 = new _pj1.SlotItemEffectModel();
            if (13 != _pj2.stype && 14 != _pj2.stype && (_pj5.raig = -5), !_pj5.exists()) return _pj4;
            var _pj6 = _pj2.get_slotnums(67);
            return _pj4 = _pj5.multiply(_pj6);
        };
    },
    35023: (_pj7, _pj8, _pj9) => {
        'use strict';
        var _pja = null;
        defineModule(_pj8);
        Object.defineProperty(_pj8, '__esModule', {
            'value': true
        }), _pj8.getSlot69PersonalEffect = void 0;
        var _pjb = _pj9(74496);
        _pj8.getSlot69PersonalEffect = function(_pjc) {
            var _pjd = null,
                _pje = new _pjb.SlotItemEffectModel(),
                _pjf = false,
                _pjg = new _pjb.SlotItemEffectModel();
            if (554 == _pjc.ship_id || 646 == _pjc.ship_id ? (_pjg.houg += 1, _pjg.tais += 2, _pjf = true) : 553 == _pjc.ship_id && (_pjg.houg += 1, _pjg.tais += 1, _pjf = true), 0 == _pjf) return _pje;
            var _pjh = _pjc.get_slotnums(69);
            return _pje.add(_pjg.multiply(_pjh)), _pje;
        };
    },
    78707: (_pji, _pjj, _pjk) => {
        'use strict';
        var _pjl = null;
        defineModule(_pjj);
        Object.defineProperty(_pjj, '__esModule', {
            'value': true
        }), _pjj.getSlot70PersonalEffect = void 0;
        var _pjm = _pjk(74496);
        _pjj.getSlot70PersonalEffect = function(_pjn) {
            var _pjo = null,
                _pjp = new _pjm.SlotItemEffectModel(),
                _pjq = false,
                _pjr = new _pjm.SlotItemEffectModel();
            if ('やましおまる' == _pjn.yomi && (_pjr.houg += 1, _pjr.tais += 1, _pjq = true), 0 == _pjq) return _pjp;
            var _pjs = _pjn.get_slotnums(70);
            return _pjp.add(_pjr.multiply(_pjs)), _pjp;
        };
    },
    44680: function(_pjt, _pju, _pjv) {
        'use strict';
        var _pjw = null;
        var _pjx = this && this.__importDefault || function(_pjy) {
            var _pjz = null;
            return _pjy && _pjy.__esModule ? _pjy : {
                'default': _pjy
            };
        };
        defineModule(_pju);
        Object.defineProperty(_pju, '__esModule', {
            'value': true
        }), _pju.getSlot78PersonalEffect = void 0;
        var _pk0 = _pjv(74496),
            _pk1 = _pjx(_pjv(18622));
        _pju.getSlot78PersonalEffect = function(_pk2) {
            var _pk3 = null,
                _pk4 = new _pk0.SlotItemEffectModel(),
                _pk5 = false,
                _pk6 = new _pk0.SlotItemEffectModel(),
                _pk7 = 0,
                _pk8 = 0,
                _pk9 = false;
            if (48 == _pk2.ctype && (_pk6.houg += 1, _pk6.kaih += 1, _pk7 = 1, _pk8 = 1, _pk9 = true, _pk5 = true), 0 == _pk5) return _pk4;
            var _pka = _pk2.get_slotnums(78);
            _pk4.add(_pk6.multiply(_pka));
            var _pkb = 0,
                _pkc = _pk2.get_each_level_nums(78),
                _pkd = 0;
            if (_pk9) {
                _pkc.map(function(_pke, _pkf) {
                    _pkf >= 7 && (_pkd += _pke);
                });
                for (var _pkg = 0, _pkh = _pk2.have_slot_ids(); _pkg < _pkh.length; _pkg++) {
                    var _pki = _pkh[_pkg],
                        _pkj = _pk1.default.model.slot.getMst(_pki),
                        _pkk = _pkj.equipType;
                    12 != _pkk && 13 != _pkk || _pkj.sakuteki >= 5 && (_pkb += _pk2.get_slotnums(parseInt(_pki)));
                }
            }
            if (1 == _pk7 && _pkb > 0 && (_pk4.houg += 2, _pk4.kaih += 2, _pk4.raig += 2), 1 == _pk8) {
                _pk4.houg += 1 * _pkd;
                var _pkl = _pkc[10];
                _pk4.souk += 1 * _pkl;
            }
            return _pk4;
        };
    },
    45749: (_pkm, _pkn, _pko) => {
        'use strict';
        var _pkp = null;
        defineModule(_pkn);
        Object.defineProperty(_pkn, '__esModule', {
            'value': true
        }), _pkn.getSlot79And81PersonalEffect = void 0;
        var _pkq = _pko(74496);
        _pkn.getSlot79And81PersonalEffect = function(_pkr) {
            var _pks = null,
                _pkt = new _pkq.SlotItemEffectModel(),
                _pku = new _pkq.SlotItemEffectModel();
            if (553 == _pkr.ship_id) _pku.houg = 3;
            else {
                if (82 == _pkr.ship_id) _pku.houg = 2;
                else {
                    if (88 == _pkr.ship_id) _pku.houg = 2;
                    else {
                        if (554 == _pkr.ship_id) _pku.houg = 3;
                        else {
                            if (411 == _pkr.ship_id) _pku.houg = 2;
                            else {
                                if (412 != _pkr.ship_id) return _pkt;
                                _pku.houg = 2;
                            }
                        }
                    }
                }
            }
            var _pkv = _pkr.get_slotnums(79) + _pkr.get_slotnums(81);
            return _pkt = _pku.multiply(_pkv);
        };
    },
    37334: (_pkw, _pkx, _pky) => {
        'use strict';
        var _pkz = null;
        defineModule(_pkx);
        Object.defineProperty(_pkx, '__esModule', {
            'value': true
        }), _pkx.getSlot82PersonalEffect = void 0;
        var _pl0 = _pky(74496);
        _pkx.getSlot82PersonalEffect = function(_pl1) {
            var _pl2 = null,
                _pl3 = new _pl0.SlotItemEffectModel(),
                _pl4 = new _pl0.SlotItemEffectModel();
            if (76 == _pl1.ctype && (_pl4.tais = 1, _pl4.kaih = 1), !_pl4.exists()) return _pl3;
            var _pl5 = _pl1.get_slotnums(82);
            return _pl3 = _pl4.multiply(_pl5);
        };
    },
    2603: function(_pl6, _pl7, _pl8) {
        'use strict';
        var _pl9 = null;
        var _pla = this && this.__importDefault || function(_plb) {
            var _plc = null;
            return _plb && _plb.__esModule ? _plb : {
                'default': _plb
            };
        };
        defineModule(_pl7);
        Object.defineProperty(_pl7, '__esModule', {
            'value': true
        }), _pl7.getSlot84PersonalEffect = void 0;
        var _pld = _pl8(74496),
            _ple = _pla(_pl8(18622));
        _pl7.getSlot84PersonalEffect = function(_plf) {
            var _plg = null,
                _plh = new _pld.SlotItemEffectModel(),
                _pli = _plf.get_each_level_nums(84),
                _plj = 0,
                _plk = 0;
            if (_pli.forEach(function(_pll, _plm) {
                    _plm >= 4 && (_plj += _pll), _plm >= 7 && (_plk += _pll);
                }), 0 == _plj) return _plh;
            for (var _pln = 0, _plo = 0, _plp = _plf.have_slot_ids(); _plo < _plp.length; _plo++) {
                var _plq = _plp[_plo],
                    _plr = _ple.default.model.slot.getMst(_plq),
                    _pls = _plr.equipType;
                12 != _pls && 13 != _pls || (_plr.sakuteki >= 5 && _plf.get_slotnums(parseInt(_plq)), _plr.taiku >= 2 && (_pln += _plf.get_slotnums(parseInt(_plq))));
            }
            var _plt = _plf.getCountryName();
            _plj >= 1 && (_plh.tyku += 1 * _plj, _plh.kaih += 1 * _plj, 'ドイツ' != _plt && 'イタリア' != _plt || (_plh.tyku += 1 * _plj, _plh.kaih += 1 * _plj), _pln >= 1 && (_plh.tyku += 1)), _plk >= 1 && (_plh.tyku += 1 * _plk, _plh.houg += 1 * _plk);
            var _plu = _pli[10];
            return _plu >= 1 && (_plh.tyku += 1 * _plu, _plh.kaih += 1 * _plu, 'ドイツ' != _plt && 'イタリア' != _plt || (_plh.houg += 1)), _plh;
        };
    },
    90725: (_plv, _plw, _plx) => {
        'use strict';
        var _ply = null;
        defineModule(_plw);
        Object.defineProperty(_plw, '__esModule', {
            'value': true
        }), _plw.getSlot85PersonalEffect = void 0;
        var _plz = _plx(74496);
        _plw.getSlot85PersonalEffect = function(_pm0) {
            var _pm1 = null,
                _pm2 = new _plz.SlotItemEffectModel(),
                _pm3 = _pm0.get_each_level_over_nums([85]),
                _pm4 = _pm3.slot[85][6],
                _pm5 = _pm3.slot[85][8],
                _pm6 = _pm3.slot[85][10],
                _pm7 = _pm0.get_have_rader_nums().air_rader,
                _pm8 = _pm0.getCountryName();
            return _pm4 > 0 && (_pm2.tyku += 1 * _pm4, _pm2.kaih += 1 * _pm4, _pm7 >= 1 && (_pm2.tyku += 2)), _pm5 > 0 && (_pm2.houg += 1 * _pm5, 'ドイツ' != _pm8 && 'イタリア' != _pm8 || (_pm2.tyku += 1 * _pm5, _pm2.kaih += 1 * _pm5)), _pm6 > 0 && (_pm2.kaih += 1 * _pm6, _pm2.houm += 1 * _pm6, 'ドイツ' != _pm8 && 'イタリア' != _pm8 || (_pm2.houg += 1)), _pm2;
        };
    },
    29180: (_pm9, _pma, _pmb) => {
        'use strict';
        var _pmc = null;
        defineModule(_pma);
        Object.defineProperty(_pma, '__esModule', {
            'value': true
        }), _pma.getSlot87PersonalEffect = void 0;
        var _pmd = _pmb(74496);
        _pma.getSlot87PersonalEffect = function(_pme) {
            var _pmf = null,
                _pmg = new _pmd.SlotItemEffectModel(),
                _pmh = false,
                _pmi = new _pmd.SlotItemEffectModel(),
                _pmj = 0;
            if (951 == _pme.ship_id ? (_pmi.houg += 1, _pmi.kaih += 1, _pmi.raig += 1, _pmi.houm += 1, _pmh = true, _pmj = 1) : 181 == _pme.ship_id || 316 == _pme.ship_id || 50 == _pme.ship_id || 229 == _pme.ship_id || 961 == _pme.ship_id ? _pmj = 2 : 591 != _pme.ship_id && 592 != _pme.ship_id && 593 != _pme.ship_id && 954 != _pme.ship_id && 694 != _pme.ship_id || (_pmg.kaih += 2, _pmg.raig += 1, _pmj = 3), 38 != _pme.ctype && 54 != _pme.ctype && 101 != _pme.ctype || (_pmj = 4), _pmh) {
                var _pmk = _pme.get_slotnums(87);
                _pmg.add(_pmi.multiply(_pmk));
            }
            if (0 == _pmj) return _pmg;
            var _pml = _pme.get_each_level_nums(87),
                _pmm = [];
            return _pmj > 0 && _pml.forEach(function(_pmn, _pmo) {
                var _pmp = null;
                for (var _pmq = 1; _pmq <= _pme.SLOT_LEVEL_MAX; _pmq++) null == _pmm[_pmq] && (_pmm[_pmq] = 0), _pmo >= _pmq && (_pmm[_pmq] += _pmn);
            }), 1 == _pmj ? (_pmm[6] >= 1 && (_pmg.tyku += 1 * _pmm[6]), _pmm[7] >= 1 && (_pmg.kaih += 1 * _pmm[7]), _pmm[8] >= 1 && (_pmg.raig += 1 * _pmm[8]), _pmm[9] >= 1 && (_pmg.houg += 1 * _pmm[9]), _pmm[10] >= 1 && (_pmg.houm += 1 * _pmm[10])) : 2 == _pmj ? (_pmm[6] >= 1 && (_pmg.kaih += 1 * _pmm[6]), _pmm[7] >= 1 && (_pmg.raig += 1 * _pmm[7]), _pmm[8] >= 1 && (_pmg.houg += 1 * _pmm[8]), _pmm[9] >= 1 && (_pmg.houm += 1 * _pmm[9]), _pmm[10] >= 1 && (_pmg.kaih += 1 * _pmm[10])) : 3 == _pmj ? (_pmm[6] > 0 && (_pmg.kaih += 1), _pmm[8] > 0 && (_pmg.raig += 1), _pmm[10] > 0 && (_pmg.houg += 1)) : 4 == _pmj && (_pmm[7] >= 1 && (_pmg.kaih += 1 * _pmm[7]), _pmm[8] >= 1 && (_pmg.raig += 1 * _pmm[8]), _pmm[10] >= 1 && (_pmg.houm += 1 * _pmm[10])), _pmg;
        };
    },
    68685: function(_pmr, _pms, _pmt) {
        'use strict';
        var _pmu = null;
        var _pmv = this && this.__importDefault || function(_pmw) {
            var _pmx = null;
            return _pmw && _pmw.__esModule ? _pmw : {
                'default': _pmw
            };
        };
        defineModule(_pms);
        Object.defineProperty(_pms, '__esModule', {
            'value': true
        }), _pms.getSlot90PersonalEffect = void 0;
        var _pmy = _pmt(74496),
            _pmz = _pmv(_pmt(18622));
        _pms.getSlot90PersonalEffect = function(_pn0) {
            var _pn1 = null,
                _pn2 = new _pmy.SlotItemEffectModel(),
                _pn3 = new _pmy.SlotItemEffectModel();
            if (142 == _pn0.ship_id ? (_pn3.houg += 2, _pn3.kaih += 1) : 295 == _pn0.ship_id || 416 == _pn0.ship_id || 417 == _pn0.ship_id ? _pn3.houg += 1 : 264 == _pn0.ship_id ? (_pn3.houg += 1, _pn3.tyku += 1) : 501 != _pn0.ship_id && 506 != _pn0.ship_id && 502 != _pn0.ship_id && 507 != _pn0.ship_id || (_pn3.houg += 1), 7 != _pn0.ctype && 13 != _pn0.ctype && 8 != _pn0.ctype && 29 != _pn0.ctype && 9 != _pn0.ctype && 31 != _pn0.ctype || (_pn3.houg += 1), _pn3.exists()) {
                var _pn4 = _pn0.get_slotnums(90);
                _pn2 = _pn3.multiply(_pn4);
            }
            var _pn5 = [];
            if ('あおば' == _pn0.yomi && (_pn5[1] = 1), 13 != _pn0.ctype && 7 != _pn0.ctype || (_pn5[2] = 1), 0 == _pn5.length) return _pn2;
            for (var _pn6 = 0, _pn7 = 0, _pn8 = 0, _pn9 = _pn0.have_slot_ids(); _pn8 < _pn9.length; _pn8++) {
                var _pna = _pn9[_pn8],
                    _pnb = _pmz.default.model.slot.getMst(_pna),
                    _pnc = _pnb.equipType;
                12 != _pnc && 13 != _pnc || (_pnb.sakuteki >= 5 && (_pn6 += _pn0.get_slotnums(parseInt(_pna))), _pnb.taiku >= 2 && (_pn7 += _pn0.get_slotnums(parseInt(_pna))));
            }
            return _pn7 > 0 && null != _pn5[1] && (_pn2.tyku += 5, _pn2.kaih += 2), _pn6 > 0 && null != _pn5[2] && (_pn2.houg += 3, _pn2.kaih += 2, _pn2.raig += 2), _pn2;
        };
    },
    26078: (_pnd, _pne, _pnf) => {
        'use strict';
        var _png = null;
        defineModule(_pne);
        Object.defineProperty(_pne, '__esModule', {
            'value': true
        }), _pne.getSlot93PersonalEffect = void 0;
        var _pnh = _pnf(74496);
        _pne.getSlot93PersonalEffect = function(_pni) {
            var _pnj = null,
                _pnk = new _pnh.SlotItemEffectModel();
            return 'そうりゅう' == _pni.yomi ? _pnk.houg = 1 : 'ひりゅう' == _pni.yomi && (_pnk.houg = 3), _pnk;
        };
    },
    20829: (_pnl, _pnm, _pnn) => {
        'use strict';
        var _pno = null;
        defineModule(_pnm);
        Object.defineProperty(_pnm, '__esModule', {
            'value': true
        }), _pnm.getSlot94PersonalEffect = void 0;
        var _pnp = _pnn(74496);
        _pnm.getSlot94PersonalEffect = function(_pnq) {
            var _pnr = null,
                _pns = new _pnp.SlotItemEffectModel();
            if (196 == _pnq.ship_id) _pns.houg = 7;
            else {
                if (197 != _pnq.ship_id) return _pns;
                _pns.houg = 3;
            }
            return _pns;
        };
    },
    6880: (_pnt, _pnu, _pnv) => {
        'use strict';
        var _pnw = null;
        defineModule(_pnu);
        Object.defineProperty(_pnu, '__esModule', {
            'value': true
        }), _pnu.getSlot99PersonalEffect = void 0;
        var _pnx = _pnv(74496);
        _pnu.getSlot99PersonalEffect = function(_pny) {
            var _pnz = null,
                _po0 = new _pnx.SlotItemEffectModel();
            return 'そうりゅう' == _pny.yomi ? _po0.houg = 4 : 'ひりゅう' == _pny.yomi && (_po0.houg = 1), _po0;
        };
    },
    59794: (_po1, _po2, _po3) => {
        'use strict';
        var _po4 = null;
        defineModule(_po2);
        Object.defineProperty(_po2, '__esModule', {
            'value': true
        }), _po2.getSlotCamouflageSlotPersonal2_Effect = void 0;
        var _po5 = _po3(74496);
        _po2.getSlotCamouflageSlotPersonal2_Effect = function(_po6) {
            var _po7 = null,
                _po8 = new _po5.SlotItemEffectModel(),
                _po9 = _po6.haveSlotLevelNumOver(268),
                _poa = _po6.get_slotnums(402);
            return _po9[7] >= 1 && (_po8.kaih += 1 * _po9[7], 'あしがら' != _po6.yomi && 'なち' != _po6.yomi && 'たま' != _po6.yomi && 'きそ' != _po6.yomi && 'あぶくま' != _po6.yomi && 'ひびき' != _po6.yomi && 'タシュケント' != _po6.yomi && 'ゴトランド' != _po6.yomi && 'ガングート' != _po6.yomi && 'キーロフ' != _po6.yomi || (_po8.houm += 1 * _po9[7], _po8.kaih += 2 * _po9[7], _po8.tais += 1 * _po9[7]), _poa >= 1 && (_po8.houm += 1 * _po9[7], _po8.kaih += 4 * _po9[7], _po8.tais += 2 * _po9[7])), _po9[8] >= 1 && (_po8.houm += 1 * _po9[8]), _po9[9] >= 1 && (_po8.houg += 1 * _po9[9]), _po9[10] >= 1 && (_po8.kaih += 1 * _po9[10]), _po8;
        };
    },
    21403: (_pob, _poc, _pod) => {
        'use strict';
        var _poe = null;
        defineModule(_poc);
        Object.defineProperty(_poc, '__esModule', {
            'value': true
        }), _poc.getSlotCorsairMkIIPersonalEffect = void 0;
        var _pof = _pod(74496);
        _poc.getSlotCorsairMkIIPersonalEffect = function(_pog) {
            var _poh = null,
                _poi = new _pof.SlotItemEffectModel(),
                _poj = false,
                _pok = new _pof.SlotItemEffectModel();
            112 == _pog.ctype && (_pok.houg += 1, _pok.tyku += 1, _pok.kaih += 2, _poj = true);
            var _pol = _pog.getCountryName();
            if (67 == _pog.ctype || 78 == _pog.ctype || 82 == _pog.ctype || 88 == _pog.ctype || 108 == _pog.ctype || 112 == _pog.ctype ? (_pok.houg += 1, _pok.tyku += 2, _pok.kaih += 3, _poj = true) : 'アメリカ' == _pol && (_pok.houg += 1, _pok.tyku += 1, _pok.kaih += 2, _poj = true), 0 == _poj) return _poi;
            var _pom = _pog.get_slotnums(434) + _pog.get_slotnums(435);
            return _poi.add(_pok.multiply(_pom)), _poi;
        };
    },
    9195: (_pon, _poo, _pop) => {
        'use strict';
        var _poq = null;
        defineModule(_poo);
        Object.defineProperty(_poo, '__esModule', {
            'value': true
        }), _poo.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _por = _pop(74496);
        _poo.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_pos) {
            var _pot = null,
                _pou = new _por.SlotItemEffectModel(),
                _pov = false,
                _pow = new _por.SlotItemEffectModel();
            if (56 == _pos.ctype && (_pow.tais += 3, _pow.kaih += 2, _pov = true), 0 == _pov) return _pou;
            var _pox = _pos.get_slotnums(44) + _pos.get_slotnums(45) + _pos.get_slotnums(287) + _pos.get_slotnums(288);
            return _pou.add(_pow.multiply(_pox)), _pou;
        };
    },
    93297: (_poy, _poz, _pp0) => {
        'use strict';
        var _pp1 = null;
        defineModule(_poz);
        Object.defineProperty(_poz, '__esModule', {
            'value': true
        }), _poz.getSlotDomesticSonarPersonalEffect = void 0;
        var _pp2 = _pp0(74496);
        _poz.getSlotDomesticSonarPersonalEffect = function(_pp3) {
            var _pp4 = null,
                _pp5 = new _pp2.SlotItemEffectModel();
            return 56 == _pp3.ctype && (_pp5.tais += 2, _pp5.kaih += 3), _pp5;
        };
    },
    34941: (_pp6, _pp7, _pp8) => {
        'use strict';
        var _pp9 = null;
        defineModule(_pp7);
        Object.defineProperty(_pp7, '__esModule', {
            'value': true
        }), _pp7.getSlotMyoujoPlanePersonalEffect = void 0;
        var _ppa = _pp8(74496);
        _pp7.getSlotMyoujoPlanePersonalEffect = function(_ppb) {
            var _ppc = null,
                _ppd = new _ppa.SlotItemEffectModel(),
                _ppe = 0,
                _ppf = false,
                _ppg = false,
                _pph = false,
                _ppi = false;
            if ({
                    'ほうしょう': 1,
                    'ずいほう': 1
                }[_ppb.yomi] && (_ppf = true, _ppe++), {
                    116: 1,
                    117: 1,
                    555: 1,
                    560: 1,
                    285: 1,
                    894: 1,
                    899: 1,
                    318: 1,
                    888: 1,
                    883: 1
                }[_ppb.ship_id] && (_ppg = true, _ppe++), {
                    883: 1,
                    899: 1
                }[_ppb.ship_id] && (_pph = true, _ppe++), {
                    599: 1,
                    610: 1,
                    555: 1,
                    560: 1,
                    888: 1
                }[_ppb.ship_id] && (_ppi = true, _ppe++), 0 == _ppe) return _ppd;
            var _ppj = _ppb.get_slotnums(550),
                _ppk = _ppb.get_slotnums(551),
                _ppl = _ppb.get_slotnums(552),
                _ppm = _ppb.get_slotnums(557),
                _ppn = _ppb.get_slotnums(558),
                _ppo = _ppj + _ppk + _ppl + _ppm + _ppn,
                _ppp = _ppb.haveSlotLevelNumOver(550),
                _ppq = _ppb.haveSlotLevelNumOver(551),
                _ppr = _ppb.haveSlotLevelNumOver(552),
                _pps = _ppb.haveSlotLevelNumOver(557),
                _ppt = _ppb.haveSlotLevelNumOver(558);
            if (_ppf && (_ppd.houm += 1 * _ppo, _ppd.kaih += 1 * _ppo, _ppj >= 1 && (_ppp[7] >= 1 && (_ppd.houg += 1 * _ppp[7]), _ppp[8] >= 1 && (_ppd.kaih += 1 * _ppp[8]), _ppp[9] >= 1 && (_ppd.houm += 1 * _ppp[9]), _ppp[10] >= 1 && (_ppd.houg += 1 * _ppp[10]))), _ppg && (_ppd.houg += 1 * _ppo, _ppd.kaih += 1 * _ppo, _ppk >= 1 && (_ppd.houg += 1 * _ppk, _ppd.houm += 1 * _ppk, _ppd.kaih += 1 * _ppk, _ppq[7] >= 1 && (_ppd.houm += 1 * _ppq[7]), _ppq[8] >= 1 && (_ppd.houg += 1 * _ppq[8]), _ppq[9] >= 1 && (_ppd.kaih += 1 * _ppq[9]), _ppq[10] >= 1 && (_ppd.houg += 1 * _ppq[10]))), _pph && (_ppl >= 1 || _ppm >= 1 || _ppn >= 1)) {
                var _ppu = _ppl + _ppm + _ppn;
                _ppd.houg += 2 * _ppu, _ppd.houm += 3 * _ppu, _ppd.kaih += 3 * _ppu, _ppr[3] >= 1 && (_ppd.kaih += 1 * _ppr[3]), _ppr[6] >= 1 && (_ppd.houg += 1 * _ppr[6]), _ppr[7] >= 1 && (_ppd.houm += 1 * _ppr[7]), _ppr[8] >= 1 && (_ppd.houg += 1 * _ppr[8]), _ppr[9] >= 1 && (_ppd.kaih += 1 * _ppr[9]), _ppr[10] >= 1 && (_ppd.houg += 1 * _ppr[10]), _pps[1] >= 1 && (_ppd.houg += 1 * _pps[1]), _pps[2] >= 1 && (_ppd.houm += 1 * _pps[2]), _ppt[1] >= 1 && (_ppd.houg += 2 * _ppt[1]), _ppt[2] >= 1 && (_ppd.houm += 1 * _ppt[2]);
            }
            return _ppi && (_ppl >= 1 || _ppm >= 1 || _ppn >= 1) && (_ppu = _ppl + _ppm + _ppn, (_ppd.houg += 1 * _ppu, _ppd.houm += 2 * _ppu, _ppd.kaih += 1 * _ppu, null != _ppr && (_ppr[7] >= 1 && (_ppd.kaih += 1 * _ppr[7]), _ppr[8] >= 1 && (_ppd.houm += 1 * _ppr[8]), _ppr[9] >= 1 && (_ppd.kaih += 1 * _ppr[9]), _ppr[10] >= 1 && (_ppd.houg += 1 * _ppr[10])), _pps[2] >= 1 && (_ppd.houm += 1 * _pps[2]), _ppt[1] >= 1 && (_ppd.houg += 1 * _ppt[1]), _ppt[2] >= 1 && (_ppd.houm += 1 * _ppt[2]))), _ppd;
        };
    },
    45482: (_ppv, _ppw, _ppx) => {
        'use strict';
        var _ppy = null;
        defineModule(_ppw);
        Object.defineProperty(_ppw, '__esModule', {
            'value': true
        }), _ppw.getSlotOtherSuiseiPersonalEffect = void 0;
        var _ppz = _ppx(74496);
        _ppw.getSlotOtherSuiseiPersonalEffect = function(_pq0) {
            var _pq1 = null,
                _pq2 = new _ppz.SlotItemEffectModel(),
                _pq3 = new _ppz.SlotItemEffectModel();
            if (553 == _pq0.ship_id) _pq3.houg = 2;
            else {
                if (554 != _pq0.ship_id) return _pq2;
                _pq3.houg = 2;
            }
            var _pq4 = _pq0.get_slotnums(24) + _pq0.get_slotnums(57) + _pq0.get_slotnums(111);
            return _pq2 = _pq3.multiply(_pq4);
        };
    },
    10950: (_pq5, _pq6, _pq7) => {
        'use strict';
        var _pq8 = null;
        defineModule(_pq6);
        Object.defineProperty(_pq6, '__esModule', {
            'value': true
        }), _pq6.getSlotSBD_Type_VS_VBPersonalEffect = void 0;
        var _pq9 = _pq7(74496);
        _pq6.getSlotSBD_Type_VS_VBPersonalEffect = function(_pqa) {
            var _pqb = null,
                _pqc = new _pq9.SlotItemEffectModel(),
                _pqd = false,
                _pqe = new _pq9.SlotItemEffectModel();
            'レキシントン' == _pqa.yomi ? (_pqe.houg += 4, _pqe.houm += 2, _pqe.tyku += 1, _pqe.kaih += 2, _pqe.saku += 2, _pqd = true) : 'サラトガ' == _pqa.yomi ? (_pqe.houg += 2, _pqe.houm += 1, _pqe.tyku += 1, _pqe.kaih += 1, _pqe.saku += 1, _pqd = true) : 'ホーネット' == _pqa.yomi || 'レンジャー' == _pqa.yomi ? (_pqe.houg += 1, _pqe.houm += 1, _pqe.tyku += 1, _pqe.kaih += 1, _pqd = true) : 'ガンビア・ベイ' != _pqa.yomi && 'ラングレー' != _pqa.yomi || (_pqe.houg += 1, _pqe.kaih += 1, _pqd = true);
            var _pqf = _pqa.get_slotnums(543) + _pqa.get_slotnums(544);
            _pqd && _pqc.add(_pqe.multiply(_pqf));
            var _pqg = _pqa.haveSlotLevelNumOver(543),
                _pqh = _pqa.haveSlotLevelNumOver(544);
            return 'アメリカ' == _pqa.getCountryName() && (_pqg[7] >= 1 && (_pqc.houm += 1 * _pqg[7]), _pqg[8] >= 1 && (_pqc.saku += 1 * _pqg[8]), _pqg[9] >= 1 && (_pqc.houg += 1 * _pqg[9]), _pqg[10] >= 1 && (_pqc.houm += 1 * _pqg[10]), _pqh[7] >= 1 && (_pqc.houg += 1 * _pqh[7]), _pqh[8] >= 1 && (_pqc.houm += 1 * _pqh[8]), _pqh[9] >= 1 && (_pqc.tyku += 1 * _pqh[9]), _pqh[10] >= 1 && (_pqc.houg += 1 * _pqh[10])), _pqc;
        };
    },
    45927: (_pqi, _pqj, _pqk) => {
        'use strict';
        var _pql = null;
        defineModule(_pqj);
        Object.defineProperty(_pqj, '__esModule', {
            'value': true
        }), _pqj.getSlotSmokePersonalEffect = void 0;
        var _pqm = _pqk(74496);
        _pqj.getSlotSmokePersonalEffect = function(_pqn) {
            var _pqo = null,
                _pqp = new _pqm.SlotItemEffectModel(),
                _pqq = false,
                _pqr = new _pqm.SlotItemEffectModel();
            if (959 == _pqn.ship_id && (_pqr.kaih += 4, _pqq = true), 'ジョンストン' == _pqn.yomi || 'サミュエル・B・ロバーツ' == _pqn.yomi || 'せんだい' == _pqn.yomi || 'はるかぜ' == _pqn.yomi || 'かみかぜ' == _pqn.yomi || 'しきなみ' == _pqn.yomi || 'うらなみ' == _pqn.yomi || 'あおば' == _pqn.yomi ? (_pqr.kaih += 3, _pqq = true) : 'いなづま' != _pqn.yomi && 'はぐろ' != _pqn.yomi && 'はつしも' != _pqn.yomi && 'かすみ' != _pqn.yomi && 'ふぶき' != _pqn.yomi && 'あたご' != _pqn.yomi && 'あまぎり' != _pqn.yomi && 'はまなみ' != _pqn.yomi || (_pqr.kaih += 2, _pqq = true), 0 == _pqq) return _pqp;
            var _pqs = _pqn.get_slotnums(500) + _pqn.get_slotnums(501);
            return _pqp.add(_pqr.multiply(_pqs)), _pqp;
        };
    },
    75873: (_pqt, _pqu, _pqv) => {
        'use strict';
        var _pqw = null;
        defineModule(_pqu);
        Object.defineProperty(_pqu, '__esModule', {
            'value': true
        }), _pqu.getSlotSocSeagullPersonalEffect = void 0;
        var _pqx = _pqv(74496);
        _pqu.getSlotSocSeagullPersonalEffect = function(_pqy) {
            var _pqz = null,
                _pr0 = new _pqx.SlotItemEffectModel(),
                _pr1 = {},
                _pr2 = false,
                _pr3 = false;
            'アメリカ' == _pqy.getCountryName() && (_pr2 = true, 3 != _pqy.stype && 5 != _pqy.stype || (_pr3 = true)), _pqy.get_slotnums(414);
            var _pr4 = _pqy.get_slotnums(539);
            _pr2 && (_pr0.saku += 1, _pr1[1] = 1), _pr3 && (_pr0.houg += 1, _pr0.saku += 1, 110 == _pqy.ctype && _pr4 >= 1 && (_pr0.houm += 1), _pr1[2] = 1);
            var _pr5 = _pqy.haveSlotLevelNumOver(414),
                _pr6 = _pqy.haveSlotLevelNumOver(539);
            return null != _pr1[1] && (_pr5[5] >= 1 && (_pr0.kaih += 1), _pr6[3] >= 1 && (_pr0.kaih += 1), _pr6[5] >= 1 && (_pr0.saku += 1), _pr6[7] >= 1 && (_pr0.houm += 1)), null != _pr1[2] && (_pr5[3] >= 1 && (_pr0.saku += 1), _pr5[8] >= 1 && (_pr0.kaih += 1), _pr5[10] >= 1 && (_pr0.houg += 1), _pr6[6] >= 1 && (_pr0.tyku += 1), _pr6[8] >= 1 && (_pr0.kaih += 1), _pr6[9] >= 1 && (_pr0.houg += 1), _pr6[10] >= 1 && (_pr0.houm += 1)), _pr0;
        };
    },
    32666: (_pr7, _pr8, _pr9) => {
        'use strict';
        var _pra = null;
        defineModule(_pr8);
        Object.defineProperty(_pr8, '__esModule', {
            'value': true
        }), _pr8.getSlotTokuYonPersonalEffect = void 0;
        var _prb = _pr9(74496);
        _pr8.getSlotTokuYonPersonalEffect = function(_prc) {
            var _prd = null,
                _pre = new _prb.SlotItemEffectModel(),
                _prf = false,
                _prg = new _prb.SlotItemEffectModel(),
                _prh = 0,
                _pri = _prc.get_slotnums(525),
                _prj = _prc.get_slotnums(526),
                _prk = _pri + _prj;
            if (13 != _prc.stype && 14 != _prc.stype || (_prg.houg += 1, _prg.raig += 2, _prg.kaih -= 1, _prf = true, _prh = 1, 'い36' != _prc.yomi && 'い41' != _prc.yomi || (_pre.houg += 2, _pre.raig += 1, _pre.houm += 2), _prj >= 1 && (_pre.houg += 1 * _prj, _pre.raig += 1 * _prj, _pre.houm += 1 * _prj)), 0 == _prf) return _pre;
            if (_pre.add(_prg.multiply(_prk)), 0 == _prh) return _pre;
            var _prl = _prc.get_each_level_over_nums([525, 526]),
                _prm = _prl.slot[525],
                _prn = _prl.slot[526];
            if (1 == _prh) {
                if (_prm[1] >= 1 || _prn[1] >= 1) {
                    var _pro = _prm[1] + _prn[1];
                    _pre.raig += 1 * _pro;
                }
                if (_prn[2] >= 1) {
                    var _prp = _prm[2] + _prn[2];
                    _pre.houg += 1 * _prp;
                }
                if (_prm[3] >= 1 || _prn[3] >= 1) {
                    var _prq = _prm[3] + _prn[3];
                    _pre.houm += 1 * _prq;
                }
                if (_prn[4] >= 1) {
                    var _prr = _prm[4] + _prn[4];
                    _pre.raig += 1 * _prr;
                }
                if (_prm[6] >= 1 || _prn[6] >= 1) {
                    var _prs = _prm[6] + _prn[6];
                    _pre.houm += 1 * _prs;
                }
                if (_prn[8] >= 1) {
                    var _prt = _prm[8] + _prn[8];
                    _pre.houg += 1 * _prt;
                }
                if (_prm[10] >= 1 || _prn[10] >= 1) {
                    var _pru = _prm[10] + _prn[10];
                    _pre.raig += 1 * _pru;
                }
            }
            return _pre;
        };
    },
    29805: (_prv, _prw, _prx) => {
        'use strict';
        var _pry = null;
        defineModule(_prw);
        Object.defineProperty(_prw, '__esModule', {
            'value': true
        }), _prw.getSlotType10PersonalEffect = void 0;
        var _prz = _prx(74496);
        _prw.getSlotType10PersonalEffect = function(_ps0) {
            var _ps1 = null,
                _ps2 = new _prz.SlotItemEffectModel();
            return 662 == _ps0.ship_id || 663 == _ps0.ship_id || 668 == _ps0.ship_id ? (_ps2.houg += 2, _ps2.kaih += 1, _ps2.tais += 3) : 501 != _ps0.ship_id && 506 != _ps0.ship_id && 502 != _ps0.ship_id && 507 != _ps0.ship_id || (_ps2.houg += 2), _ps2;
        };
    },
    58913: (_ps3, _ps4, _ps5) => {
        'use strict';
        var _ps6 = null;
        defineModule(_ps4);
        Object.defineProperty(_ps4, '__esModule', {
            'value': true
        }), _ps4.getSlotType11PersonalEffect = void 0;
        var _ps7 = _ps5(74496);
        _ps4.getSlotType11PersonalEffect = function(_ps8) {
            var _ps9 = null,
                _psa = new _ps7.SlotItemEffectModel();
            return 662 == _ps8.ship_id || 663 == _ps8.ship_id || 668 == _ps8.ship_id ? (_psa.houg += 1, _psa.kaih += 1, _psa.tais += 1) : 501 != _ps8.ship_id && 506 != _ps8.ship_id && 502 != _ps8.ship_id && 507 != _ps8.ship_id || (_psa.houg += 1, _psa.kaih += 1), _psa;
        };
    },
    55421: (_psb, _psc, _psd) => {
        'use strict';
        var _pse = null;
        defineModule(_psc);
        Object.defineProperty(_psc, '__esModule', {
            'value': true
        }), _psc.getSlotType25PersonalEffect = void 0;
        var _psf = _psd(74496);
        _psc.getSlotType25PersonalEffect = function(_psg) {
            var _psh = null,
                _psi = new _psf.SlotItemEffectModel();
            return 662 == _psg.ship_id ? (_psi.tais += 4, _psi.kaih += 1) : 663 != _psg.ship_id && 668 != _psg.ship_id || (_psi.tais += 3, _psi.kaih += 1), _psi;
        };
    },
    272: function(_psj, _psk, _psl) {
        'use strict';
        var _psm = null;
        var _psn = this && this.__importDefault || function(_pso) {
            var _psp = null;
            return _pso && _pso.__esModule ? _pso : {
                'default': _pso
            };
        };
        defineModule(_psk);
        Object.defineProperty(_psk, '__esModule', {
            'value': true
        }), _psk.getSlotType9PersonalEffect = void 0;
        var _psq = _psl(74496),
            _psr = _psn(_psl(18622));
        _psk.getSlotType9PersonalEffect = function(_pss) {
            var _pst = null,
                _psu = new _psq.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_pss.stype]) return _psu;
            for (var _psv = 0, _psw = 0, _psx = _pss.have_slot_ids(); _psw < _psx.length; _psw++) {
                var _psy = _psx[_psw];
                if (9 == _psr.default.model.slot.getMst(_psy).equipType)
                    for (var _psz = 0, _pt0 = _pss.have_slots_dict[parseInt(_psy)]; _psz < _pt0.length; _psz++) {
                        var _pt1 = _pt0[_psz].level;
                        _psv < _pt1 && (_psv = _pt1);
                    }
            }
            return _psv >= 2 && (_psu.saku += 1), _psv >= 4 && (_psu.houg += 1), _psv >= 6 && (_psu.saku += 1), _psv >= 10 && (_psu.houg += 1, _psu.saku += 1), _psu;
        };
    },
    49964: (_pt2, _pt3, _pt4) => {
        'use strict';
        var _pt5 = null;
        defineModule(_pt3);
        Object.defineProperty(_pt3, '__esModule', {
            'value': true
        }), _pt3.getSlotYellowWingsPersonalEffect = void 0;
        var _pt6 = _pt4(74496);
        _pt3.getSlotYellowWingsPersonalEffect = function(_pt7) {
            var _pt8 = null,
                _pt9 = new _pt6.SlotItemEffectModel(),
                _pta = false,
                _ptb = new _pt6.SlotItemEffectModel();
            'レキシントン' == _pt7.yomi ? (_ptb.houg += 3, _ptb.houm += 2, _ptb.tyku += 1, _ptb.kaih += 2, _ptb.saku += 1, _pta = true) : 'サラトガ' == _pt7.yomi ? (_ptb.houg += 2, _ptb.houm += 1, _ptb.tyku += 1, _ptb.kaih += 1, _ptb.saku += 1, _pta = true) : 'ホーネット' != _pt7.yomi && 'レンジャー' != _pt7.yomi || (_ptb.houg += 1, _ptb.houm += 1, _ptb.kaih += 1, _pta = true);
            var _ptc = _pt7.get_slotnums(541) + _pt7.get_slotnums(542);
            _pta && _pt9.add(_ptb.multiply(_ptc));
            var _ptd = _pt7.haveSlotLevelNumOver(541),
                _pte = _pt7.haveSlotLevelNumOver(542);
            return 'アメリカ' == _pt7.getCountryName() && (_ptd[7] >= 1 && (_pt9.kaih += 1 * _ptd[7]), _ptd[10] >= 1 && (_pt9.houg += 1 * _ptd[10]), _pte[7] >= 1 && (_pt9.houm += 1 * _pte[7]), _pte[10] >= 1 && (_pt9.houg += 1 * _pte[10])), _pt9;
        };
    },
    54518: (_ptf, _ptg, _pth) => {
        'use strict';
        var _pti = null;
        defineModule(_ptg);
        Object.defineProperty(_ptg, '__esModule', {
            'value': true
        }), _ptg.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _ptj = _pth(74496);
        _ptg.getSlot_16InchMkXRensouhou_PersonalEffect = function(_ptk) {
            var _ptl = null,
                _ptm = new _ptj.SlotItemEffectModel();
            if (93 == _ptk.ctype) {
                var _ptn = _ptk.get_slotnums(330);
                _ptn > 0 && (_ptm.houg = _ptm.houg + 1 * _ptn);
                var _pto = _ptk.get_slotnums(331);
                _pto > 0 && (_ptm.houg = _ptm.houg + 1 * _pto, 1496 != _ptk.ship_id && 918 != _ptk.ship_id || (_ptm.houg = _ptm.houg + 1 * _pto, _ptm.kaih = _ptm.kaih + 1 * _pto));
                var _ptp = _ptk.get_slotnums(332);
                return _ptp > 0 && (_ptm.houg = _ptm.houg + 1 * _ptp, 1496 != _ptk.ship_id && 918 != _ptk.ship_id || (_ptm.houg = _ptm.houg + 1 * _ptp, _ptm.kaih = _ptm.kaih + 1 * _ptp, _ptm.tyku = _ptm.tyku + 1 * _ptp)), _ptm;
            }
            var _ptq = new _ptj.SlotItemEffectModel();
            if (19 == _ptk.ctype ? (_ptq.houg = 1, (541 == _ptk.ship_id || 573 == _ptk.ship_id) && (_ptq.houg += 1)) : 88 == _ptk.ctype && (_ptq.houg = 1, 576 == _ptk.ship_id && (_ptq.houg += 1)), !_ptq.exists()) return _ptm;
            var _ptr = _ptk.get_slotnums(330) + _ptk.get_slotnums(331) + _ptk.get_slotnums(332);
            return _ptm = _ptq.multiply(_ptr);
        };
    },
    79353: (_pts, _ptt, _ptu) => {
        'use strict';
        var _ptv = null;
        defineModule(_ptt);
        Object.defineProperty(_ptt, '__esModule', {
            'value': true
        }), _ptt.getZuiunSeriesEffect = void 0;
        var _ptw = _ptu(74496);
        _ptt.getZuiunSeriesEffect = function(_ptx) {
            var _pty = null,
                _ptz = new _ptw.SlotItemEffectModel(),
                _pu0 = false,
                _pu1 = new _ptw.SlotItemEffectModel();
            if (662 == _ptx.ship_id ? (_ptz.houg += 2, _ptz.kaih += 1) : 663 == _ptx.ship_id || 668 == _ptx.ship_id || 501 == _ptx.ship_id || 506 == _ptx.ship_id ? (_ptz.houg += 2, _pu1.kaih += 1, _pu1.tyku += 1, _pu0 = true) : 502 != _ptx.ship_id && 507 != _ptx.ship_id || (_ptz.houg += 1, _pu1.kaih += 1, _pu1.tyku += 1, _pu0 = true), 0 == _pu0) return _ptz;
            var _pu2 = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_pu3) {
                var _pu4 = null;
                _pu2 += _ptx.get_slotnums(_pu3);
            }), _ptz.add(_pu1.multiply(_pu2)), _ptz;
        };
    },
    89051: function(_pu5, _pu6, _pu7) {
        'use strict';
        var _pu8 = null;
        var _pu9 = this && this.__createBinding || (Object.create ? function(_pua, _pub, _puc, _pud) {
                var _pue = null;
                void 0 === _pud && (_pud = _puc);
                var _puf = Object.getOwnPropertyDescriptor(_pub, _puc);
                _puf && !('get' in _puf ? !_pub.__esModule : _puf.writable || _puf.configurable) || (_puf = {
                    'enumerable': true,
                    'get': function() {
                        return _pub[_puc];
                    }
                }), Object.defineProperty(_pua, _pud, _puf);
            } : function(_pug, _puh, _pui, _puj) {
                void 0 === _puj && (_puj = _pui), _pug[_puj] = _puh[_pui];
            }),
            _puk = this && this.__exportStar || function(_pul, _pum) {
                var _pun = null;
                for (var _puo in _pul) 'default' === _puo || Object.prototype.hasOwnProperty.call(_pum, _puo) || _pu9(_pum, _pul, _puo);
            };
        defineModule(_pu6);
        Object.defineProperty(_pu6, '__esModule', {
            'value': true
        }), _puk(_pu7(34165), _pu6), _puk(_pu7(81018), _pu6), _puk(_pu7(56716), _pu6), _puk(_pu7(17713), _pu6), _puk(_pu7(54518), _pu6), _puk(_pu7(66985), _pu6), _puk(_pu7(88102), _pu6), _puk(_pu7(66904), _pu6), _puk(_pu7(98137), _pu6), _puk(_pu7(69954), _pu6), _puk(_pu7(22218), _pu6), _puk(_pu7(88271), _pu6), _puk(_pu7(23035), _pu6), _puk(_pu7(2578), _pu6), _puk(_pu7(17143), _pu6), _puk(_pu7(16164), _pu6), _puk(_pu7(35023), _pu6), _puk(_pu7(44680), _pu6), _puk(_pu7(45749), _pu6), _puk(_pu7(37334), _pu6), _puk(_pu7(29180), _pu6), _puk(_pu7(68685), _pu6), _puk(_pu7(26078), _pu6), _puk(_pu7(20829), _pu6), _puk(_pu7(6880), _pu6), _puk(_pu7(17213), _pu6), _puk(_pu7(40176), _pu6), _puk(_pu7(32889), _pu6), _puk(_pu7(11285), _pu6), _puk(_pu7(96200), _pu6), _puk(_pu7(9115), _pu6), _puk(_pu7(37173), _pu6), _puk(_pu7(21713), _pu6), _puk(_pu7(59823), _pu6), _puk(_pu7(57440), _pu6), _puk(_pu7(29240), _pu6), _puk(_pu7(40885), _pu6), _puk(_pu7(19614), _pu6), _puk(_pu7(87220), _pu6), _puk(_pu7(81367), _pu6), _puk(_pu7(13052), _pu6), _puk(_pu7(94968), _pu6), _puk(_pu7(48658), _pu6), _puk(_pu7(1906), _pu6), _puk(_pu7(61887), _pu6), _puk(_pu7(47970), _pu6), _puk(_pu7(31797), _pu6), _puk(_pu7(45738), _pu6), _puk(_pu7(34718), _pu6), _puk(_pu7(69245), _pu6), _puk(_pu7(18478), _pu6), _puk(_pu7(2899), _pu6), _puk(_pu7(57120), _pu6), _puk(_pu7(74985), _pu6), _puk(_pu7(9234), _pu6), _puk(_pu7(30802), _pu6), _puk(_pu7(97002), _pu6), _puk(_pu7(16748), _pu6), _puk(_pu7(53618), _pu6), _puk(_pu7(72573), _pu6), _puk(_pu7(8955), _pu6), _puk(_pu7(98947), _pu6), _puk(_pu7(44726), _pu6), _puk(_pu7(93065), _pu6), _puk(_pu7(85767), _pu6), _puk(_pu7(38314), _pu6), _puk(_pu7(59747), _pu6), _puk(_pu7(40649), _pu6), _puk(_pu7(13533), _pu6), _puk(_pu7(12138), _pu6), _puk(_pu7(30042), _pu6), _puk(_pu7(33623), _pu6), _puk(_pu7(85630), _pu6), _puk(_pu7(88736), _pu6), _puk(_pu7(49341), _pu6), _puk(_pu7(74306), _pu6), _puk(_pu7(83898), _pu6), _puk(_pu7(71873), _pu6), _puk(_pu7(53122), _pu6), _puk(_pu7(51063), _pu6), _puk(_pu7(91491), _pu6), _puk(_pu7(85495), _pu6), _puk(_pu7(65365), _pu6), _puk(_pu7(98164), _pu6), _puk(_pu7(38114), _pu6), _puk(_pu7(21003), _pu6), _puk(_pu7(77010), _pu6), _puk(_pu7(39126), _pu6), _puk(_pu7(72176), _pu6), _puk(_pu7(33846), _pu6), _puk(_pu7(97157), _pu6), _puk(_pu7(63406), _pu6), _puk(_pu7(66373), _pu6), _puk(_pu7(19707), _pu6), _puk(_pu7(63978), _pu6), _puk(_pu7(92382), _pu6), _puk(_pu7(78415), _pu6), _puk(_pu7(23090), _pu6), _puk(_pu7(18776), _pu6), _puk(_pu7(39656), _pu6), _puk(_pu7(66039), _pu6), _puk(_pu7(64679), _pu6), _puk(_pu7(95953), _pu6), _puk(_pu7(86384), _pu6), _puk(_pu7(65345), _pu6), _puk(_pu7(46514), _pu6), _puk(_pu7(81976), _pu6), _puk(_pu7(89331), _pu6), _puk(_pu7(73973), _pu6), _puk(_pu7(21178), _pu6), _puk(_pu7(5079), _pu6), _puk(_pu7(95014), _pu6), _puk(_pu7(53099), _pu6), _puk(_pu7(76201), _pu6), _puk(_pu7(24931), _pu6), _puk(_pu7(60978), _pu6), _puk(_pu7(74312), _pu6), _puk(_pu7(54350), _pu6), _puk(_pu7(26262), _pu6), _puk(_pu7(45530), _pu6), _puk(_pu7(44053), _pu6), _puk(_pu7(65441), _pu6), _puk(_pu7(33258), _pu6), _puk(_pu7(92168), _pu6), _puk(_pu7(85975), _pu6), _puk(_pu7(98467), _pu6), _puk(_pu7(88348), _pu6), _puk(_pu7(21097), _pu6), _puk(_pu7(37273), _pu6), _puk(_pu7(72694), _pu6), _puk(_pu7(62067), _pu6), _puk(_pu7(87817), _pu6), _puk(_pu7(93526), _pu6), _puk(_pu7(33084), _pu6), _puk(_pu7(97831), _pu6), _puk(_pu7(45482), _pu6), _puk(_pu7(272), _pu6), _puk(_pu7(69377), _pu6), _puk(_pu7(31127), _pu6), _puk(_pu7(79353), _pu6), _puk(_pu7(17274), _pu6), _puk(_pu7(91302), _pu6), _puk(_pu7(82229), _pu6), _puk(_pu7(10325), _pu6), _puk(_pu7(351), _pu6), _puk(_pu7(4050), _pu6), _puk(_pu7(29805), _pu6), _puk(_pu7(58913), _pu6), _puk(_pu7(55421), _pu6), _puk(_pu7(87845), _pu6), _puk(_pu7(17562), _pu6), _puk(_pu7(78466), _pu6), _puk(_pu7(40061), _pu6), _puk(_pu7(9195), _pu6), _puk(_pu7(93297), _pu6), _puk(_pu7(15133), _pu6), _puk(_pu7(55747), _pu6), _puk(_pu7(33155), _pu6), _puk(_pu7(79086), _pu6), _puk(_pu7(2306), _pu6), _puk(_pu7(14386), _pu6), _puk(_pu7(80225), _pu6), _puk(_pu7(17732), _pu6), _puk(_pu7(47169), _pu6), _puk(_pu7(77670), _pu6), _puk(_pu7(79988), _pu6), _puk(_pu7(92253), _pu6), _puk(_pu7(74428), _pu6), _puk(_pu7(75873), _pu6), _puk(_pu7(2631), _pu6), _puk(_pu7(27177), _pu6), _puk(_pu7(94781), _pu6), _puk(_pu7(53908), _pu6), _puk(_pu7(79813), _pu6), _puk(_pu7(16088), _pu6), _puk(_pu7(93733), _pu6), _puk(_pu7(69939), _pu6), _puk(_pu7(33734), _pu6), _puk(_pu7(34432), _pu6), _puk(_pu7(97423), _pu6), _puk(_pu7(23551), _pu6), _puk(_pu7(99791), _pu6), _puk(_pu7(21403), _pu6), _puk(_pu7(6173), _pu6), _puk(_pu7(23934), _pu6), _puk(_pu7(53709), _pu6), _puk(_pu7(88838), _pu6), _puk(_pu7(99790), _pu6), _puk(_pu7(18387), _pu6), _puk(_pu7(70941), _pu6), _puk(_pu7(35025), _pu6), _puk(_pu7(2603), _pu6), _puk(_pu7(78707), _pu6), _puk(_pu7(89058), _pu6), _puk(_pu7(84372), _pu6), _puk(_pu7(96804), _pu6), _puk(_pu7(33896), _pu6), _puk(_pu7(11031), _pu6), _puk(_pu7(71383), _pu6), _puk(_pu7(55888), _pu6), _puk(_pu7(2258), _pu6), _puk(_pu7(38003), _pu6), _puk(_pu7(92174), _pu6), _puk(_pu7(43768), _pu6), _puk(_pu7(73254), _pu6), _puk(_pu7(55734), _pu6), _puk(_pu7(81254), _pu6), _puk(_pu7(65455), _pu6), _puk(_pu7(70362), _pu6), _puk(_pu7(61977), _pu6), _puk(_pu7(43607), _pu6), _puk(_pu7(68086), _pu6), _puk(_pu7(78173), _pu6), _puk(_pu7(22581), _pu6), _puk(_pu7(20418), _pu6), _puk(_pu7(93373), _pu6), _puk(_pu7(13053), _pu6), _puk(_pu7(47874), _pu6), _puk(_pu7(42788), _pu6), _puk(_pu7(57664), _pu6), _puk(_pu7(44990), _pu6), _puk(_pu7(17712), _pu6), _puk(_pu7(83957), _pu6), _puk(_pu7(78539), _pu6), _puk(_pu7(96282), _pu6), _puk(_pu7(49679), _pu6), _puk(_pu7(45927), _pu6), _puk(_pu7(90312), _pu6), _puk(_pu7(86856), _pu6), _puk(_pu7(78123), _pu6), _puk(_pu7(25765), _pu6), _puk(_pu7(29493), _pu6), _puk(_pu7(28221), _pu6), _puk(_pu7(14830), _pu6), _puk(_pu7(54047), _pu6), _puk(_pu7(76054), _pu6), _puk(_pu7(90725), _pu6), _puk(_pu7(93053), _pu6), _puk(_pu7(88792), _pu6), _puk(_pu7(33242), _pu6), _puk(_pu7(59415), _pu6), _puk(_pu7(3296), _pu6), _puk(_pu7(32666), _pu6), _puk(_pu7(36731), _pu6), _puk(_pu7(30450), _pu6), _puk(_pu7(85127), _pu6), _puk(_pu7(87204), _pu6), _puk(_pu7(2380), _pu6), _puk(_pu7(96580), _pu6), _puk(_pu7(15653), _pu6), _puk(_pu7(41410), _pu6), _puk(_pu7(25851), _pu6), _puk(_pu7(6482), _pu6), _puk(_pu7(70332), _pu6), _puk(_pu7(91275), _pu6), _puk(_pu7(72743), _pu6), _puk(_pu7(49964), _pu6), _puk(_pu7(10950), _pu6), _puk(_pu7(57041), _pu6), _puk(_pu7(74608), _pu6), _puk(_pu7(34941), _pu6), _puk(_pu7(81284), _pu6), _puk(_pu7(4862), _pu6), _puk(_pu7(4188), _pu6), _puk(_pu7(59794), _pu6), _puk(_pu7(37458), _pu6), _puk(_pu7(65328), _pu6);
    },
    82692: function(_pup, _puq, _pur) {
        'use strict';
        var _pus = null;
        var _put = this && this.__createBinding || (Object.create ? function(_puu, _puv, _puw, _pux) {
                var _puy = null;
                void 0 === _pux && (_pux = _puw);
                var _puz = Object.getOwnPropertyDescriptor(_puv, _puw);
                _puz && !('get' in _puz ? !_puv.__esModule : _puz.writable || _puz.configurable) || (_puz = {
                    'enumerable': true,
                    'get': function() {
                        return _puv[_puw];
                    }
                }), Object.defineProperty(_puu, _pux, _puz);
            } : function(_pv0, _pv1, _pv2, _pv3) {
                void 0 === _pv3 && (_pv3 = _pv2), _pv0[_pv3] = _pv1[_pv2];
            }),
            _pv4 = this && this.__setModuleDefault || (Object.create ? function(_pv5, _pv6) {
                var _pv7 = null;
                Object.defineProperty(_pv5, 'default', {
                    'enumerable': true,
                    'value': _pv6
                });
            } : function(_pv8, _pv9) {
                var _pva = null;
                _pv8.default = _pv9;
            }),
            _pvb = this && this.__importStar || function(_pvc) {
                var _pvd = null;
                if (_pvc && _pvc.__esModule) return _pvc;
                var _pve = {};
                if (null != _pvc) {
                    for (var _pvf in _pvc) 'default' !== _pvf && Object.prototype.hasOwnProperty.call(_pvc, _pvf) && _put(_pve, _pvc, _pvf);
                }
                return _pv4(_pve, _pvc), _pve;
            };
        defineModule(_puq);
        Object.defineProperty(_puq, '__esModule', {
            'value': true
        }), _puq.SlotItemEffectUtil = void 0;
        var _pvg, _pvh = _pur(73785),
            _pvi = _pvb(_pur(89051)),
            _pvj = _pur(74496);
        ! function(_pvk) {
            var _pvl = null;
            _pvk.getSlotitemEffect = function(_pvm, _pvn) {
                var _pvo = null;
                if (null == _pvm || null == _pvn) return null;
                for (var _pvp = new _pvh.SlotItemEffectParamModel(_pvm, _pvn), _pvq = [{
                        'isExecute': Boolean(_pvp.get_type3_nums(9)),
                        'execFunc': _pvi.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_type3_nums(10)),
                        'execFunc': _pvi.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_type3_nums(11)),
                        'execFunc': _pvi.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_type3_nums(12)) || Boolean(_pvp.get_type3_nums(13)),
                        'execFunc': _pvi.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_type3_nums(25)),
                        'execFunc': _pvi.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_type3_nums(29)),
                        'execFunc': _pvi.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_type3_nums(42)),
                        'execFunc': _pvi.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(3)) || Boolean(_pvp.get_slotnums(122)) || Boolean(_pvp.get_slotnums(533)) || Boolean(_pvp.get_slotnums(553)),
                        'execFunc': _pvi.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(5)),
                        'execFunc': _pvi.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(12)),
                        'execFunc': _pvi.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(15)),
                        'execFunc': _pvi.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(18)) || Boolean(_pvp.get_slotnums(52)),
                        'execFunc': _pvi.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(19)),
                        'execFunc': _pvi.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(24)) || Boolean(_pvp.get_slotnums(57)) || Boolean(_pvp.get_slotnums(111)),
                        'execFunc': _pvi.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(26)) || Boolean(_pvp.get_slotnums(62)) || Boolean(_pvp.get_slotnums(79)) || Boolean(_pvp.get_slotnums(80)) || Boolean(_pvp.get_slotnums(81)) || Boolean(_pvp.get_slotnums(207)) || Boolean(_pvp.get_slotnums(208)),
                        'execFunc': _pvi.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(35)),
                        'execFunc': _pvi.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(39)) || Boolean(_pvp.get_slotnums(40)) || Boolean(_pvp.get_slotnums(49)) || Boolean(_pvp.get_slotnums(131)),
                        'execFunc': _pvi.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(30)) || Boolean(_pvp.get_slotnums(410)),
                        'execFunc': _pvi.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(44)) || Boolean(_pvp.get_slotnums(45)) || Boolean(_pvp.get_slotnums(287)) || Boolean(_pvp.get_slotnums(288)),
                        'execFunc': _pvi.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(46)) || Boolean(_pvp.get_slotnums(47)) || Boolean(_pvp.get_slotnums(149)) || Boolean(_pvp.get_slotnums(132)) || Boolean(_pvp.get_slotnums(438)),
                        'execFunc': _pvi.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(47)) || Boolean(_pvp.get_slotnums(438)),
                        'execFunc': _pvi.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(50)),
                        'execFunc': _pvi.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(58)),
                        'execFunc': _pvi.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(59)),
                        'execFunc': _pvi.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(60)) || Boolean(_pvp.get_slotnums(154)) || Boolean(_pvp.get_slotnums(219)) || Boolean(_pvp.get_slotnums(557)) || Boolean(_pvp.get_slotnums(558)),
                        'execFunc': _pvi.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(61)),
                        'execFunc': _pvi.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(61)),
                        'execFunc': _pvi.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(63)),
                        'execFunc': _pvi.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(66)) || Boolean(_pvp.get_slotnums(220)),
                        'execFunc': _pvi.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(67)),
                        'execFunc': _pvi.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(69)),
                        'execFunc': _pvi.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(70)),
                        'execFunc': _pvi.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(76)) || Boolean(_pvp.get_slotnums(114)),
                        'execFunc': _pvi.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(78)),
                        'execFunc': _pvi.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(79)) || Boolean(_pvp.get_slotnums(81)),
                        'execFunc': _pvi.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(82)),
                        'execFunc': _pvi.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(84)),
                        'execFunc': _pvi.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(85)),
                        'execFunc': _pvi.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(87)),
                        'execFunc': _pvi.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(90)),
                        'execFunc': _pvi.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(93)),
                        'execFunc': _pvi.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(94)),
                        'execFunc': _pvi.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(99)),
                        'execFunc': _pvi.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(100)),
                        'execFunc': _pvi.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(104)),
                        'execFunc': _pvi.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(106)) || Boolean(_pvp.get_slotnums(450)),
                        'execFunc': _pvi.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(115)),
                        'execFunc': _pvi.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(118)) || Boolean(_pvp.get_slotnums(521)),
                        'execFunc': _pvi.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(119)),
                        'execFunc': _pvi.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(121)),
                        'execFunc': _pvi.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(122)),
                        'execFunc': _pvi.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(123)),
                        'execFunc': _pvi.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(124)),
                        'execFunc': _pvi.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(128)) || Boolean(_pvp.get_slotnums(281)),
                        'execFunc': _pvi.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(129)),
                        'execFunc': _pvi.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(130)),
                        'execFunc': _pvi.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(132)),
                        'execFunc': _pvi.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(136)),
                        'execFunc': _pvi.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(139)),
                        'execFunc': _pvi.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(143)),
                        'execFunc': _pvi.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(144)),
                        'execFunc': _pvi.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(147)) || Boolean(_pvp.get_slotnums(393)) || Boolean(_pvp.get_slotnums(394)),
                        'execFunc': _pvi.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(149)),
                        'execFunc': _pvi.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(165)) || Boolean(_pvp.get_slotnums(216)),
                        'execFunc': _pvi.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(171)),
                        'execFunc': _pvi.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(174)),
                        'execFunc': _pvi.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(179)),
                        'execFunc': _pvi.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(184)),
                        'execFunc': _pvi.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(188)),
                        'execFunc': _pvi.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(189)),
                        'execFunc': _pvi.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(194)),
                        'execFunc': _pvi.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(195)),
                        'execFunc': _pvi.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(204)),
                        'execFunc': _pvi.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(217)),
                        'execFunc': _pvi.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(220)),
                        'execFunc': _pvi.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(227)),
                        'execFunc': _pvi.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(228)),
                        'execFunc': _pvi.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(229)),
                        'execFunc': _pvi.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(234)),
                        'execFunc': _pvi.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(235)),
                        'execFunc': _pvi.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(237)) || Boolean(_pvp.get_slotnums(322)) || Boolean(_pvp.get_slotnums(323)) || Boolean(_pvp.get_slotnums(490)),
                        'execFunc': _pvi.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(237)),
                        'execFunc': _pvi.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(238)) || Boolean(_pvp.get_slotnums(239)),
                        'execFunc': _pvi.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(242)),
                        'execFunc': _pvi.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(243)),
                        'execFunc': _pvi.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(244)),
                        'execFunc': _pvi.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(245)) || Boolean(_pvp.get_slotnums(246)) || Boolean(_pvp.get_slotnums(468)),
                        'execFunc': _pvi.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(247)),
                        'execFunc': _pvi.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(252)),
                        'execFunc': _pvi.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(258)),
                        'execFunc': _pvi.getSlot258PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(266)),
                        'execFunc': _pvi.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(266)),
                        'execFunc': _pvi.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(267)) || Boolean(_pvp.get_slotnums(366)),
                        'execFunc': _pvi.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(267)) || Boolean(_pvp.get_slotnums(366)),
                        'execFunc': _pvi.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(268)),
                        'execFunc': _pvi.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(268)),
                        'execFunc': _pvi.getSlotCamouflageSlotPersonal2_Effect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(271)),
                        'execFunc': _pvi.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(275)),
                        'execFunc': _pvi.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(277)),
                        'execFunc': _pvi.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(278)),
                        'execFunc': _pvi.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(279)),
                        'execFunc': _pvi.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(282)),
                        'execFunc': _pvi.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(283)),
                        'execFunc': _pvi.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(285)),
                        'execFunc': _pvi.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(286)),
                        'execFunc': _pvi.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(286)),
                        'execFunc': _pvi.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(286)),
                        'execFunc': _pvi.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(287)),
                        'execFunc': _pvi.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(288)),
                        'execFunc': _pvi.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(289)),
                        'execFunc': _pvi.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(290)),
                        'execFunc': _pvi.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(291)),
                        'execFunc': _pvi.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(292)),
                        'execFunc': _pvi.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(293)),
                        'execFunc': _pvi.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(294)),
                        'execFunc': _pvi.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(295)),
                        'execFunc': _pvi.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(296)),
                        'execFunc': _pvi.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(297)),
                        'execFunc': _pvi.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(298)) || Boolean(_pvp.get_slotnums(299)) || Boolean(_pvp.get_slotnums(300)),
                        'execFunc': _pvi.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(301)),
                        'execFunc': _pvi.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(302)),
                        'execFunc': _pvi.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(303)),
                        'execFunc': _pvi.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(304)),
                        'execFunc': _pvi.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(305)) || Boolean(_pvp.get_slotnums(306)),
                        'execFunc': _pvi.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(307)),
                        'execFunc': _pvi.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(308)),
                        'execFunc': _pvi.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(310)) || Boolean(_pvp.get_slotnums(518)),
                        'execFunc': _pvi.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(313)),
                        'execFunc': _pvi.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(314)),
                        'execFunc': _pvi.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(315)),
                        'execFunc': _pvi.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(316)),
                        'execFunc': _pvi.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(317)),
                        'execFunc': _pvi.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(318)),
                        'execFunc': _pvi.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(319)),
                        'execFunc': _pvi.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(320)),
                        'execFunc': _pvi.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(322)),
                        'execFunc': _pvi.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(323)),
                        'execFunc': _pvi.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(324)) || Boolean(_pvp.get_slotnums(325)),
                        'execFunc': _pvi.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(326)),
                        'execFunc': _pvi.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(327)),
                        'execFunc': _pvi.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(328)),
                        'execFunc': _pvi.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(329)),
                        'execFunc': _pvi.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(330)) || Boolean(_pvp.get_slotnums(331)) || Boolean(_pvp.get_slotnums(332)),
                        'execFunc': _pvi.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(335)),
                        'execFunc': _pvi.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(336)),
                        'execFunc': _pvi.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(337)),
                        'execFunc': _pvi.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(338)),
                        'execFunc': _pvi.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(339)),
                        'execFunc': _pvi.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(340)),
                        'execFunc': _pvi.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(341)),
                        'execFunc': _pvi.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(342)),
                        'execFunc': _pvi.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(343)),
                        'execFunc': _pvi.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(344)),
                        'execFunc': _pvi.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(345)),
                        'execFunc': _pvi.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(346)),
                        'execFunc': _pvi.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(347)),
                        'execFunc': _pvi.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(356)) || Boolean(_pvp.get_slotnums(357)),
                        'execFunc': _pvi.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(358)),
                        'execFunc': _pvi.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(359)),
                        'execFunc': _pvi.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(360)) || Boolean(_pvp.get_slotnums(361)),
                        'execFunc': _pvi.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(362)) || Boolean(_pvp.get_slotnums(363)),
                        'execFunc': _pvi.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(364)),
                        'execFunc': _pvi.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(365)),
                        'execFunc': _pvi.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(367)),
                        'execFunc': _pvi.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(368)),
                        'execFunc': _pvi.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(369)),
                        'execFunc': _pvi.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(370)),
                        'execFunc': _pvi.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(371)),
                        'execFunc': _pvi.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(372)),
                        'execFunc': _pvi.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(373)),
                        'execFunc': _pvi.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(374)),
                        'execFunc': _pvi.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(375)),
                        'execFunc': _pvi.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(376)),
                        'execFunc': _pvi.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(377)),
                        'execFunc': _pvi.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(378)),
                        'execFunc': _pvi.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(379)),
                        'execFunc': _pvi.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(380)),
                        'execFunc': _pvi.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(381)),
                        'execFunc': _pvi.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(382)) || Boolean(_pvp.get_slotnums(509)),
                        'execFunc': _pvi.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(383)),
                        'execFunc': _pvi.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(384)),
                        'execFunc': _pvi.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(385)),
                        'execFunc': _pvi.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(386)),
                        'execFunc': _pvi.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(387)),
                        'execFunc': _pvi.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(389)),
                        'execFunc': _pvi.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(390)),
                        'execFunc': _pvi.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(391)),
                        'execFunc': _pvi.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(392)),
                        'execFunc': _pvi.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(397)),
                        'execFunc': _pvi.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(398)),
                        'execFunc': _pvi.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(399)),
                        'execFunc': _pvi.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(400)),
                        'execFunc': _pvi.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(407)),
                        'execFunc': _pvi.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(408)),
                        'execFunc': _pvi.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(409)),
                        'execFunc': _pvi.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(411)),
                        'execFunc': _pvi.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(412)),
                        'execFunc': _pvi.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(413)),
                        'execFunc': _pvi.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(414)) || Boolean(_pvp.get_slotnums(539)),
                        'execFunc': _pvi.getSlotSocSeagullPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(415)),
                        'execFunc': _pvi.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(419)),
                        'execFunc': _pvi.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(420)),
                        'execFunc': _pvi.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(421)),
                        'execFunc': _pvi.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(422)),
                        'execFunc': _pvi.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(423)),
                        'execFunc': _pvi.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(424)),
                        'execFunc': _pvi.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(425)),
                        'execFunc': _pvi.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(426)) || Boolean(_pvp.get_slotnums(427)) || Boolean(_pvp.get_slotnums(428)) || Boolean(_pvp.get_slotnums(429)),
                        'execFunc': _pvi.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(430)),
                        'execFunc': _pvi.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(434)) || Boolean(_pvp.get_slotnums(435)),
                        'execFunc': _pvi.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(437)),
                        'execFunc': _pvi.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(438)),
                        'execFunc': _pvi.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(439)),
                        'execFunc': _pvi.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(440)) || Boolean(_pvp.get_slotnums(441)),
                        'execFunc': _pvi.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(442)) || Boolean(_pvp.get_slotnums(443)),
                        'execFunc': _pvi.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(447)),
                        'execFunc': _pvi.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(450)),
                        'execFunc': _pvi.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(451)),
                        'execFunc': _pvi.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(455)),
                        'execFunc': _pvi.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(456)),
                        'execFunc': _pvi.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(457)) || Boolean(_pvp.get_slotnums(461)),
                        'execFunc': _pvi.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(458)),
                        'execFunc': _pvi.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(463)),
                        'execFunc': _pvi.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(464)),
                        'execFunc': _pvi.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(465)),
                        'execFunc': _pvi.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(466)),
                        'execFunc': _pvi.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(467)),
                        'execFunc': _pvi.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(470)) || Boolean(_pvp.get_slotnums(529)),
                        'execFunc': _pvi.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(471)),
                        'execFunc': _pvi.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(472)),
                        'execFunc': _pvi.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(473)),
                        'execFunc': _pvi.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(474)),
                        'execFunc': _pvi.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(478)),
                        'execFunc': _pvi.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(483)),
                        'execFunc': _pvi.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(485)),
                        'execFunc': _pvi.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(486)),
                        'execFunc': _pvi.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(487)),
                        'execFunc': _pvi.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(488)),
                        'execFunc': _pvi.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(489)) || Boolean(_pvp.get_slotnums(491)),
                        'execFunc': _pvi.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(500)) || Boolean(_pvp.get_slotnums(501)),
                        'execFunc': _pvi.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(502)),
                        'execFunc': _pvi.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(503)),
                        'execFunc': _pvi.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(505)),
                        'execFunc': _pvi.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(506)),
                        'execFunc': _pvi.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(507)) || Boolean(_pvp.get_slotnums(508)),
                        'execFunc': _pvi.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(510)),
                        'execFunc': _pvi.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(511)) || Boolean(_pvp.get_slotnums(512)),
                        'execFunc': _pvi.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(517)),
                        'execFunc': _pvi.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(518)),
                        'execFunc': _pvi.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(519)),
                        'execFunc': _pvi.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(520)),
                        'execFunc': _pvi.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(521)),
                        'execFunc': _pvi.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(522)) || Boolean(_pvp.get_slotnums(523)),
                        'execFunc': _pvi.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(524)),
                        'execFunc': _pvi.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(525)) || Boolean(_pvp.get_slotnums(526)),
                        'execFunc': _pvi.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(527)),
                        'execFunc': _pvi.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(528)),
                        'execFunc': _pvi.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(530)),
                        'execFunc': _pvi.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(531)),
                        'execFunc': _pvi.getSlot531PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(534)) || Boolean(_pvp.get_slotnums(535)),
                        'execFunc': _pvi.getSlot13_8cmRensouhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(536)) || Boolean(_pvp.get_slotnums(537)),
                        'execFunc': _pvi.getSlot15_2cmSanrensouSyuhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(538)),
                        'execFunc': _pvi.getSlot538PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(540)),
                        'execFunc': _pvi.getSlot540PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(541)) || Boolean(_pvp.get_slotnums(542)),
                        'execFunc': _pvi.getSlotYellowWingsPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(543)) || Boolean(_pvp.get_slotnums(544)),
                        'execFunc': _pvi.getSlotSBD_Type_VS_VBPersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(545)),
                        'execFunc': _pvi.getSlot545PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(549)),
                        'execFunc': _pvi.getSlot549PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(550)) || Boolean(_pvp.get_slotnums(551)) || Boolean(_pvp.get_slotnums(552)) || Boolean(_pvp.get_slotnums(557)) || Boolean(_pvp.get_slotnums(558)),
                        'execFunc': _pvi.getSlotMyoujoPlanePersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(39)) || Boolean(_pvp.get_slotnums(40)) || Boolean(_pvp.get_slotnums(49)) || Boolean(_pvp.get_slotnums(505)),
                        'execFunc': _pvi.getSlot25mmMachinegunLightShipEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(554)),
                        'execFunc': _pvi.getSlot554PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(555)),
                        'execFunc': _pvi.getSlot555PersonalEffect
                    }, {
                        'isExecute': Boolean(_pvp.get_slotnums(556)),
                        'execFunc': _pvi.getSlot556PersonalEffect
                    }], _pvr = new _pvj.SlotItemEffectModel(), _pvs = 0, _pvt = _pvq; _pvs < _pvt.length; _pvs++) {
                    var _pvu = _pvt[_pvs];
                    if (_pvu.isExecute) {
                        var _pvv = _pvu.execFunc(_pvp);
                        0, _pvr.add(_pvv);
                    }
                }
                return _pvr;
            };
        }(_pvg || (_puq.SlotItemEffectUtil = _pvg = {}));
    },
}
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
    69377: function(_mr2, _mr3, _mr4) {
        'use strict';
        var _mr5 = null;
        var _mr6 = this && this.__importDefault || function(_mr7) {
            var _mr8 = null;
            return _mr7 && _mr7.__esModule ? _mr7 : {
                'default': _mr7
            };
        };
        defineModule(_mr3);
        Object.defineProperty(_mr3, '__esModule', {
            'value': true
        }), _mr3.get25mmMachinegunEffect = void 0;
        var _mr9 = _mr4(74496),
            _mra = _mr6(_mr4(18622));
        _mr3.get25mmMachinegunEffect = function(_mrb) {
            var _mrc = null,
                _mrd = new _mr9.SlotItemEffectModel(),
                _mre = false,
                _mrf = new _mr9.SlotItemEffectModel(),
                _mrg = 0,
                _mrh = new _mr9.SlotItemEffectModel(),
                _mri = {},
                _mrj = 0;
            if (662 == _mrb.ship_id || 663 == _mrb.ship_id ? (_mrf.tyku += 2, _mrf.kaih += 1, _mre = true) : 668 == _mrb.ship_id ? (_mrf.tyku += 3, _mrf.kaih += 2, _mre = true) : 979 == _mrb.ship_id && (_mrf.tyku += 2, _mrf.kaih += 3, _mre = true, _mrh.kaih += 2, _mri[49] = _mrh, _mrj = 1), 56 == _mrb.ctype && (_mrf.houg += 1, _mrf.tyku += 2, _mrf.kaih += 2, _mre = true, _mrg = 1), Object.keys(_mri).forEach(function(_mrk) {
                    var _mrl = null,
                        _mrm = _mri[parseInt(_mrk)],
                        _mrn = _mrb.get_slotnums(parseInt(_mrk));
                    _mrd.add(_mrm.multiply(_mrn));
                }), _mrj > 0) {
                var _mro = _mrb.get_each_level_over_nums([49, 39, 40, 131]),
                    _mrp = _mro.slot[49],
                    _mrq = _mro.slot[39],
                    _mrr = _mro.slot[40],
                    _mrs = _mro.slot[131];
                1 == _mrj && (_mrp[6] >= 1 && (_mrd.houm += 1 * _mrp[6]), _mrp[7] >= 1 && (_mrd.tyku += 1 * _mrp[7]), _mrp[8] >= 1 && (_mrd.kaih += 1 * _mrp[8]), _mrp[9] >= 1 && (_mrd.tyku += 1 * _mrp[9]), _mrp[10] >= 1 && (_mrd.houg += 1 * _mrp[10]), _mrq[8] >= 1 && (_mrd.kaih += 1 * _mrq[8]), _mrq[9] >= 1 && (_mrd.tyku += 2 * _mrq[9]), _mrq[10] >= 1 && (_mrd.houg += 1 * _mrq[10]), _mrr[9] >= 1 && (_mrd.tyku += 2 * _mrr[9]), _mrr[10] >= 1 && (_mrd.houg += 1 * _mrr[10]), _mrs[10] >= 1 && (_mrd.tyku += 2 * _mrs[10]));
            }
            if (0 == _mre) return _mrd;
            var _mrt = _mrb.get_slotnums(39) + _mrb.get_slotnums(40) + _mrb.get_slotnums(49) + _mrb.get_slotnums(131);
            if (_mrd.add(_mrf.multiply(_mrt)), 0 == _mrg) return _mrd;
            for (var _mru = 0, _mrv = 0, _mrw = _mrb.have_slot_ids(); _mrv < _mrw.length; _mrv++) {
                var _mrx = _mrw[_mrv],
                    _mry = _mra.default.model.slot.getMst(_mrx),
                    _mrz = _mry.equipType;
                12 != _mrz && 13 != _mrz || (_mry.sakuteki >= 5 && _mrb.get_slotnums(parseInt(_mrx)), _mry.taiku >= 2 && (_mru += _mrb.get_slotnums(parseInt(_mrx))));
            }
            return _mru >= 1 && 1 == _mrg && (_mrd.tyku += 2, _mrd.kaih += 2), _mrd;
        };
    },
    77670: function(_ms0, _ms1, _ms2) {
        'use strict';
        var _ms3 = null;
        var _ms4 = this && this.__importDefault || function(_ms5) {
            var _ms6 = null;
            return _ms5 && _ms5.__esModule ? _ms5 : {
                'default': _ms5
            };
        };
        defineModule(_ms1);
        Object.defineProperty(_ms1, '__esModule', {
            'value': true
        }), _ms1.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _ms7 = _ms2(74496),
            _ms8 = _ms4(_ms2(18622));
        _ms1.get8cmAntiAircraftGunPersonalEffect = function(_ms9) {
            var _msa = null,
                _msb = new _ms7.SlotItemEffectModel(),
                _msc = false,
                _msd = new _ms7.SlotItemEffectModel(),
                _mse = 0;
            if (501 != _ms9.ship_id && 506 != _ms9.ship_id && 502 != _ms9.ship_id && 507 != _ms9.ship_id || (_msd.tyku += 2, _msd.kaih += 1, _msc = true, _mse = 1), 501 != _ms9.ship_id && 506 != _ms9.ship_id || (_msd.houg += 1, _msd.tyku += 2, _msd.kaih += 2, _msc = true, _mse = 1), 0 == _msc) return _msb;
            var _msf = _ms9.get_slotnums(66) + _ms9.get_slotnums(220);
            _msb.add(_msd.multiply(_msf));
            for (var _msg = 0, _msh = 0, _msi = _ms9.have_slot_ids(); _msh < _msi.length; _msh++) {
                var _msj = _msi[_msh],
                    _msk = _ms8.default.model.slot.getMst(_msj),
                    _msl = _msk.equipType;
                12 != _msl && 13 != _msl || (_msk.sakuteki >= 5 && _ms9.get_slotnums(parseInt(_msj)), _msk.taiku >= 2 && (_msg += _ms9.get_slotnums(parseInt(_msj))));
            }
            return 0 == _mse || _msg >= 1 && (_msb.tyku += 1, _msb.kaih += 2), _msb;
        };
    },
    34165: (_msm, _msn, _mso) => {
        'use strict';
        var _msp = null;
        defineModule(_msn);
        Object.defineProperty(_msn, '__esModule', {
            'value': true
        }), _msn.getCamouflageSlotPersonalEffect = void 0;
        var _msq = _mso(74496);
        _msn.getCamouflageSlotPersonalEffect = function(_msr) {
            var _mss = null,
                _mst = new _msq.SlotItemEffectModel();
            return 'きそ' != _msr.yomi && 'たま' != _msr.yomi || (_mst.kaih = 7, _mst.souk = 2), _mst;
        };
    },
    31127: (_msu, _msv, _msw) => {
        'use strict';
        var _msx = null;
        defineModule(_msv);
        Object.defineProperty(_msv, '__esModule', {
            'value': true
        }), _msv.getHighZuiunSeriesEffect = void 0;
        var _msy = _msw(74496);
        _msv.getHighZuiunSeriesEffect = function(_msz) {
            var _mt0 = null,
                _mt1 = new _msy.SlotItemEffectModel(),
                _mt2 = false,
                _mt3 = new _msy.SlotItemEffectModel();
            if (662 == _msz.ship_id ? (_mt1.houg += 3, _mt1.kaih += 1) : 663 == _msz.ship_id || 668 == _msz.ship_id || 501 == _msz.ship_id || 506 == _msz.ship_id || 553 == _msz.ship_id || 554 == _msz.ship_id ? (_mt3.houg += 3, _mt3.kaih += 2, _mt3.tyku += 1, _mt2 = true) : 502 != _msz.ship_id && 507 != _msz.ship_id || (_mt3.houg += 2, _mt3.kaih += 2, _mt3.tyku += 1, _mt2 = true), 0 == _mt2) return _mt1;
            var _mt4 = 0;
            return [237, 322, 323, 490].forEach(function(_mt5) {
                var _mt6 = null;
                _mt4 += _msz.get_slotnums(_mt5);
            }), _mt1.add(_mt3.multiply(_mt4)), _mt1;
        };
    },
    81018: function(_mt7, _mt8, _mt9) {
        'use strict';
        var _mta = null;
        var _mtb = this && this.__importDefault || function(_mtc) {
            var _mtd = null;
            return _mtc && _mtc.__esModule ? _mtc : {
                'default': _mtc
            };
        };
        defineModule(_mt8);
        Object.defineProperty(_mt8, '__esModule', {
            'value': true
        }), _mt8.getRaderPrivateEffect = void 0;
        var _mte = _mt9(74496),
            _mtf = _mtb(_mt9(18622));
        _mt8.getRaderPrivateEffect = function(_mtg) {
            var _mth = null,
                _mti = new _mte.SlotItemEffectModel(),
                _mtj = 0,
                _mtk = 0;
            if (569 == _mtg.ship_id || 648 == _mtg.ship_id || 961 == _mtg.ship_id || 951 == _mtg.ship_id) _mtj = 1;
            else {
                if (955 != _mtg.ship_id && 960 != _mtg.ship_id && 956 != _mtg.ship_id && 981 != _mtg.ship_id) return _mti;
                _mtj = 2, _mtk = 1;
            }
            for (var _mtl = 0, _mtm = 0, _mtn = _mtg.have_slot_ids(); _mtm < _mtn.length; _mtm++) {
                var _mto = _mtn[_mtm],
                    _mtp = _mtf.default.model.slot.getMst(_mto),
                    _mtq = _mtp.equipType;
                12 != _mtq && 13 != _mtq || (_mtp.sakuteki >= 5 && _mtg.get_slotnums(parseInt(_mto)), _mtp.taiku >= 2 && (_mtl += _mtg.get_slotnums(parseInt(_mto))));
            }
            if (_mtl > 0 && (1 == _mtj ? (_mti.houg += 1, _mti.kaih += 3, _mti.tyku += 2) : 2 == _mtj && (_mti.tyku += 2, _mti.kaih += 1)), 0 == _mtk) return _mti;
            for (var _mtr = [], _mts = function(_mtt) {
                    var _mtu = null;
                    if (null == _mtg.have_slots_dict[_mtt]) return 'continue';
                    var _mtv = _mtg.get_each_level_nums(_mtt);
                    null == _mtr[_mtt] && (_mtr[_mtt] = []), _mtv.forEach(function(_mtw, _mtx) {
                        var _mty = null;
                        for (var _mtz = 1; _mtz <= _mtg.SLOT_LEVEL_MAX; _mtz++) null == _mtr[_mtt][_mtz] && (_mtr[_mtt][_mtz] = 0), _mtx >= _mtz && (_mtr[_mtt][_mtz] += _mtw);
                    });
                }, _mu0 = 0, _mu1 = [450]; _mu0 < _mu1.length; _mu0++) {
                _mts(_mu1[_mu0]);
            }
            var _mu2 = null != _mtr[450] ? _mtr[450][4] : 0;
            return 1 == _mtk && _mu2 > 0 && (_mti.houg += 1, _mti.houm += 1, _mti.tyku += 1, _mti.kaih += 2), _mti;
        };
    },
    56716: (_mu3, _mu4, _mu5) => {
        'use strict';
        var _mu6 = null;
        defineModule(_mu4);
        Object.defineProperty(_mu4, '__esModule', {
            'value': true
        }), _mu4.getSearchLightEffect = void 0;
        var _mu7 = _mu5(74496);
        _mu4.getSearchLightEffect = function(_mu8) {
            var _mu9 = null,
                _mua = new _mu7.SlotItemEffectModel(),
                _mub = _mu8.get_type3_nums(29);
            return 'ひえい' == _mu8.yomi || 'きりしま' == _mu8.yomi || 'ちょうかい' == _mu8.yomi || 'じんつう' == _mu8.yomi || 'あかつき' == _mu8.yomi ? (_mua.houg += 4, _mua.kaih -= 1) : 'あきぐも' == _mu8.yomi ? _mua.houg = _mua.houg + 2 * _mub : 'ゆきかぜ' == _mu8.yomi && (_mua.houg = _mua.houg + _mub, _mua.tyku = _mua.tyku + _mub), 662 != _mu8.ship_id && 663 != _mu8.ship_id && 668 != _mu8.ship_id || (_mua.raig += 2, _mua.houg += 4), 'じんつう' == _mu8.yomi && (_mua.raig += 8, _mua.houg += 4), _mua;
        };
    },
    17713: (_muc, _mud, _mue) => {
        'use strict';
        var _muf = null;
        defineModule(_mud);
        Object.defineProperty(_mud, '__esModule', {
            'value': true
        }), _mud.getSearchLightLargeEffect = void 0;
        var _mug = _mue(74496);
        _mud.getSearchLightLargeEffect = function(_muh) {
            var _mui = null,
                _muj = new _mug.SlotItemEffectModel();
            'ひえい' == _muh.yomi || 'きりしま' == _muh.yomi ? (_muj.houg += 6, _muj.kaih -= 2) : 'やまと' != _muh.yomi && 'むさし' != _muh.yomi || (_muj.houg += 4, _muj.kaih -= 1);
            var _muk = _muh.get_slotnums(174);
            return 592 == _muh.ship_id ? (_muj.houg += 3, _muj.raig += 3, _muk > 0 && (_muj.raig += 5)) : 694 == _muh.ship_id && (_muj.houg += 4, _muj.raig += 1, _muk > 0 && (_muj.raig += 7)), _muj;
        };
    },
    17213: (_mul, _mum, _mun) => {
        'use strict';
        var _muo = null;
        defineModule(_mum);
        Object.defineProperty(_mum, '__esModule', {
            'value': true
        }), _mum.getSlot100PersonalEffect = void 0;
        var _mup = _mun(74496);
        _mum.getSlot100PersonalEffect = function(_muq) {
            var _mur = null,
                _mus = new _mup.SlotItemEffectModel(),
                _mut = new _mup.SlotItemEffectModel();
            if (553 == _muq.ship_id) _mut.houg = 4;
            else {
                if (554 != _muq.ship_id) return 196 == _muq.ship_id ? (_mus.houg = 3, _mus) : 197 == _muq.ship_id ? (_mus.houg = 6, _mus) : _mus;
                _mut.houg = 4;
            }
            var _muu = _muq.get_slotnums(100);
            return _mus = _mut.multiply(_muu);
        };
    },
    40176: (_muv, _muw, _mux) => {
        'use strict';
        var _muy = null;
        defineModule(_muw);
        Object.defineProperty(_muw, '__esModule', {
            'value': true
        }), _muw.getSlot104PersonalEffect = void 0;
        var _muz = _mux(74496);
        _muw.getSlot104PersonalEffect = function(_mv0) {
            var _mv1 = null,
                _mv2 = new _muz.SlotItemEffectModel(),
                _mv3 = new _muz.SlotItemEffectModel();
            if (149 == _mv0.ship_id || 591 == _mv0.ship_id) _mv3.houg = 2;
            else {
                if (150 == _mv0.ship_id || 592 == _mv0.ship_id) _mv3.houg = 1;
                else {
                    if (152 == _mv0.ship_id || 694 == _mv0.ship_id) _mv3.houg = 1;
                    else {
                        if (151 != _mv0.ship_id && 593 != _mv0.ship_id && 954 != _mv0.ship_id) return _mv2;
                        _mv3.houg = 2, _mv3.tyku = 1, _mv3.kaih = 2;
                    }
                }
            }
            var _mv4 = _mv0.get_slotnums(104);
            return _mv2 = _mv3.multiply(_mv4);
        };
    },
    32889: (_mv5, _mv6, _mv7) => {
        'use strict';
        var _mv8 = null;
        defineModule(_mv6);
        Object.defineProperty(_mv6, '__esModule', {
            'value': true
        }), _mv6.getSlot106PersonalEffect = void 0;
        var _mv9 = _mv7(74496);
        _mv6.getSlot106PersonalEffect = function(_mva) {
            var _mvb = null,
                _mvc = new _mv9.SlotItemEffectModel(),
                _mvd = new _mv9.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mva.ship_id) >= 0 ? (_mvd.houg += 1, _mvd.tyku += 2, _mvd.souk += 1, _mvd.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mva.yomi) >= 0 ? (_mvd.tyku += 1, _mvd.souk += 1, _mvd.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mva.yomi) >= 0 && (_mvd.tyku += 2, _mvd.souk += 1, _mvd.kaih += 2, 663 != _mva.ship_id && 668 != _mva.ship_id || (_mvc.houg += 1, _mvc.tyku += 1, _mvc.souk += 1, _mvc.kaih += 1), 668 == _mva.ship_id && (_mvc.tyku += 1, _mvc.kaih += 1)), !_mvd.exists()) return _mvc;
            var _mve = _mva.get_slotnums(106) + _mva.get_slotnums(450);
            return _mvc.add(_mvd.multiply(_mve)), _mvc;
        };
    },
    15133: (_mvf, _mvg, _mvh) => {
        'use strict';
        var _mvi = null;
        defineModule(_mvg);
        Object.defineProperty(_mvg, '__esModule', {
            'value': true
        }), _mvg.getSlot115PersonalEffect = void 0;
        var _mvj = _mvh(74496);
        _mvg.getSlot115PersonalEffect = function(_mvk) {
            var _mvl = null,
                _mvm = new _mvj.SlotItemEffectModel(),
                _mvn = false,
                _mvo = new _mvj.SlotItemEffectModel(),
                _mvp = 0;
            if (55 != _mvk.ctype && 47 != _mvk.ctype || (_mvo.houg += 2, _mvo.saku += 2, _mvo.kaih += 1, _mvn = true, _mvp = 1), 0 == _mvn) return _mvm;
            var _mvq = _mvk.get_slotnums(115);
            if (_mvm.add(_mvo.multiply(_mvq)), 0 == _mvp) return _mvm;
            var _mvr = _mvk.get_each_level_nums(115)[10];
            return 1 == _mvp && (_mvm.houg += 1 * _mvr, _mvm.kaih += 1 * _mvr), _mvm;
        };
    },
    55747: (_mvs, _mvt, _mvu) => {
        'use strict';
        var _mvv = null;
        defineModule(_mvt);
        Object.defineProperty(_mvt, '__esModule', {
            'value': true
        }), _mvt.getSlot118PersonalEffect = void 0;
        var _mvw = _mvu(74496);
        _mvt.getSlot118PersonalEffect = function(_mvx) {
            var _mvy = null,
                _mvz = new _mvw.SlotItemEffectModel(),
                _mw0 = false,
                _mw1 = new _mvw.SlotItemEffectModel(),
                _mw2 = 0;
            if (52 == _mvx.ctype && (_mw1.houg += 1, _mw1.saku += 2, _mw1.kaih += 2, _mw2 = 1, _mw0 = true), 507 == _mvx.ship_id && (_mw1.houg += 3, _mw1.saku += 2, _mw1.kaih += 1, _mw2 = 2, _mw0 = true), 0 == _mw0) return _mvz;
            var _mw3 = _mvx.get_slotnums(118) + _mvx.get_slotnums(521);
            if (_mvz.add(_mw1.multiply(_mw3)), 0 == _mvx.get_slotnums(118)) return _mvz;
            if (0 == _mw2) return _mvz;
            var _mw4 = _mvx.get_each_level_nums(118),
                _mw5 = 0,
                _mw6 = 0,
                _mw7 = 0,
                _mw8 = _mw4[10];
            return _mw4.forEach(function(_mw9, _mwa) {
                _mwa >= 2 && (_mw5 += _mw9), _mwa >= 5 && (_mw6 += _mw9), _mwa >= 7 && (_mw7 += _mw9);
            }), 1 == _mw2 ? (_mvz.houg += 2 * _mw8, _mvz.saku += 1 * _mw8) : 2 == _mw2 && (_mvz.houm += 1 * _mw5, _mvz.kaih += 1 * _mw6, _mvz.houg += 1 * _mw7, _mvz.houg += 1 * _mw8, _mvz.raig += 1 * _mw8, _mvz.tyku += 1 * _mw8, _mvz.saku += 1 * _mw8, _mvz.kaih += 1 * _mw8), _mvz;
        };
    },
    11285: (_mwb, _mwc, _mwd) => {
        'use strict';
        var _mwe = null;
        defineModule(_mwc);
        Object.defineProperty(_mwc, '__esModule', {
            'value': true
        }), _mwc.getSlot119PersonalEffect = void 0;
        var _mwf = _mwd(74496);
        _mwc.getSlot119PersonalEffect = function(_mwg) {
            var _mwh = null,
                _mwi = new _mwf.SlotItemEffectModel(),
                _mwj = new _mwf.SlotItemEffectModel();
            34 == _mwg.ctype || 56 == _mwg.ctype ? _mwj.houg += 1 : 90 == _mwg.ctype && (_mwj.houg += 2, _mwj.raig += 1);
            var _mwk = true;
            if (_mwj.exists() || (_mwk = false), 0 == _mwk) return _mwi;
            var _mwl = _mwg.get_slotnums(119);
            return _mwi = _mwj.multiply(_mwl);
        };
    },
    96200: (_mwm, _mwn, _mwo) => {
        'use strict';
        var _mwp = null;
        defineModule(_mwn);
        Object.defineProperty(_mwn, '__esModule', {
            'value': true
        }), _mwn.getSlot120mm50GroupPersonalEffect = void 0;
        var _mwq = _mwo(74496);
        _mwn.getSlot120mm50GroupPersonalEffect = function(_mwr) {
            var _mws = null,
                _mwt = new _mwq.SlotItemEffectModel(),
                _mwu = false,
                _mwv = new _mwq.SlotItemEffectModel(),
                _mww = _mwr.get_slotnums(147),
                _mwx = _mwr.get_slotnums(393),
                _mwy = _mwr.get_slotnums(394),
                _mwz = new _mwq.SlotItemEffectModel(),
                _mx0 = new _mwq.SlotItemEffectModel();
            if (61 == _mwr.ctype && (_mwv.houg += 1, _mwv.kaih += 1, _mwu = true, _mwx >= 1 && (_mwz.houg += 1, _mwz.tyku += 1), _mwy >= 1 && (_mx0.houg += 1, _mx0.tyku += 1, _mx0.kaih += 1, 'グレカーレ' == _mwr.yomi && (_mx0.kaih += 1)), 1), 0 == _mwu) return _mwt;
            var _mx1 = _mww + _mwx + _mwy;
            _mwt.add(_mwv.multiply(_mx1)).add(_mwz.multiply(_mwx)).add(_mx0.multiply(_mwy));
            var _mx2 = _mwr.get_each_level_over_nums([394]).slot[394];
            return _mx2[7] >= 1 && (_mwt.houm += 1 * _mx2[7], 'グレカーレ' == _mwr.yomi && (_mwt.houg += 1 * _mx2[7])), _mx2[8] >= 1 && (_mwt.houg += 1 * _mx2[8]), _mx2[9] >= 1 && (_mwt.houm += 1 * _mx2[9]), _mx2[10] >= 1 && (_mwt.houg += 1 * _mx2[10], 'グレカーレ' == _mwr.yomi && (_mwt.kaih += 1 * _mx2[10])), _mwt;
        };
    },
    33155: function(_mx3, _mx4, _mx5) {
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
        }), _mx4.getSlot121PersonalEffect = void 0;
        var _mxa = _mx5(74496),
            _mxb = _mx7(_mx5(18622));
        _mx4.getSlot121PersonalEffect = function(_mxc) {
            var _mxd = null,
                _mxe = new _mxa.SlotItemEffectModel(),
                _mxf = 0,
                _mxg = new _mxa.SlotItemEffectModel(),
                _mxh = false;
            54 == _mxc.ctype && (_mxe.tyku += 4, _mxe.kaih += 2, _mxf = 1), 968 == _mxc.ship_id ? (_mxg.houg += 1, _mxg.tyku += 1, _mxg.kaih += 1, _mxh = true) : 981 == _mxc.ship_id && (_mxg.tyku += 1, _mxg.kaih += 1, _mxh = true, _mxf = 1);
            var _mxi = _mxc.get_slotnums(121);
            if (_mxh && _mxe.add(_mxg.multiply(_mxi)), 0 == _mxf) return _mxe;
            for (var _mxj = 0, _mxk = 0, _mxl = _mxc.have_slot_ids(); _mxk < _mxl.length; _mxk++) {
                var _mxm = _mxl[_mxk],
                    _mxn = _mxb.default.model.slot.getMst(_mxm),
                    _mxo = _mxn.equipType;
                12 != _mxo && 13 != _mxo || (_mxn.sakuteki >= 5 && _mxc.get_slotnums(parseInt(_mxm)), _mxn.taiku >= 2 && (_mxj += _mxc.get_slotnums(parseInt(_mxm))));
            }
            return _mxj >= 1 && (_mxe.tyku += 2, _mxe.kaih += 2, 968 == _mxc.ship_id && (_mxe.houg += 1 * _mxi, _mxe.houm += 1 * _mxi)), _mxe;
        };
    },
    9115: function(_mxp, _mxq, _mxr) {
        'use strict';
        var _mxs = null;
        var _mxt = this && this.__importDefault || function(_mxu) {
            var _mxv = null;
            return _mxu && _mxu.__esModule ? _mxu : {
                'default': _mxu
            };
        };
        defineModule(_mxq);
        Object.defineProperty(_mxq, '__esModule', {
            'value': true
        }), _mxq.getSlot122PersonalEffect = void 0;
        var _mxw = _mxr(74496),
            _mxx = _mxt(_mxr(18622));
        _mxq.getSlot122PersonalEffect = function(_mxy) {
            var _mxz = null,
                _my0 = new _mxw.SlotItemEffectModel(),
                _my1 = 0,
                _my2 = 0,
                _my3 = false;
            656 == _mxy.ship_id && (_my3 = true, _my1 = 1, _my2 = 1);
            var _my4 = 0,
                _my5 = 0,
                _my6 = _mxy.get_each_level_nums(122),
                _my7 = 0;
            if (_my3) {
                _my6.forEach(function(_my8, _my9) {
                    _my9 >= 4 && (_my7 += _my8);
                });
                for (var _mya = 0, _myb = _mxy.have_slot_ids(); _mya < _myb.length; _mya++) {
                    var _myc = _myb[_mya],
                        _myd = _mxx.default.model.slot.getMst(_myc),
                        _mye = _myd.equipType;
                    12 != _mye && 13 != _mye || (_myd.sakuteki >= 5 && (_my4 += _mxy.get_slotnums(parseInt(_myc))), _myd.taiku >= 2 && (_my5 += _mxy.get_slotnums(parseInt(_myc))));
                }
            }
            return _my7 > 0 && (1 == _my2 && (_my4 > 0 && (_my0.houg += 4, _my0.kaih += 3), _my5 > 0 && (_my0.tyku += 4, _my0.kaih += 3)), 1 == _my1 && (_my0.houg += 5 * _my7, _my0.tyku += 3 * _my7, _my0.kaih += 2 * _my7)), _my0;
        };
    },
    85127: (_myf, _myg, _myh) => {
        'use strict';
        var _myi = null;
        defineModule(_myg);
        Object.defineProperty(_myg, '__esModule', {
            'value': true
        }), _myg.getSlot123PersonalEffect = void 0;
        var _myj = _myh(74496);
        _myg.getSlot123PersonalEffect = function(_myk) {
            var _myl = null,
                _mym = new _myj.SlotItemEffectModel(),
                _myn = (new _myj.SlotItemEffectModel(), 0),
                _myo = (_myk.get_slotnums(123), _myk.get_slotnums(124));
            if ('ドイツ' != _myk.getCountryName()) return _mym;
            _myn = 1, _myo >= 1 && (_mym.kaih += 1 * _myo);
            var _myp = _myk.get_each_level_over_nums([123, 124]),
                _myq = _myp.slot[123],
                _myr = _myp.slot[124];
            return 1 == _myn && (_myq[5] >= 1 && (_mym.houg += 1 * _myq[5]), _myq[7] >= 1 && (_mym.houm += 1 * _myq[7]), _myq[9] >= 1 && (_mym.houg += 1 * _myq[9]), _myq[10] >= 1 && (_mym.houm += 1 * _myq[10]), _myr[8] >= 1 && (_mym.kaih += 1 * _myr[8]), _myr[10] >= 1 && (_mym.houm += 1 * _myr[10])), _mym;
        };
    },
    87204: (_mys, _myt, _myu) => {
        'use strict';
        var _myv = null;
        defineModule(_myt);
        Object.defineProperty(_myt, '__esModule', {
            'value': true
        }), _myt.getSlot124PersonalEffect = void 0;
        var _myw = _myu(74496);
        _myt.getSlot124PersonalEffect = function(_myx) {
            var _myy = null,
                _myz = new _myw.SlotItemEffectModel(),
                _mz0 = (new _myw.SlotItemEffectModel(), 0),
                _mz1 = _myx.getCountryName();
            if ('ドイツ' == _mz1) _mz0 = 1;
            else {
                if ('イタリア' != _mz1) return _myz;
                _mz0 = 2;
            }
            var _mz2 = _myx.get_each_level_over_nums([124]).slot[124];
            return 1 == _mz0 ? (_mz2[7] >= 1 && (_myz.houm += 1 * _mz2[7]), _mz2[8] >= 1 && (_myz.houg += 1 * _mz2[8]), _mz2[9] >= 1 && (_myz.tyku += 1 * _mz2[9]), _mz2[10] >= 1 && (_myz.houm += 1 * _mz2[10])) : 2 == _mz0 && (_mz2[8] >= 1 && (_myz.houm += 1 * _mz2[8]), _mz2[9] >= 1 && (_myz.tyku += 1 * _mz2[9]), _mz2[10] >= 1 && (_myz.houg += 1 * _mz2[10])), _myz;
        };
    },
    37173: (_mz3, _mz4, _mz5) => {
        'use strict';
        var _mz6 = null;
        defineModule(_mz4);
        Object.defineProperty(_mz4, '__esModule', {
            'value': true
        }), _mz4.getSlot129PersonalEffect = void 0;
        var _mz7 = _mz5(74496);
        _mz4.getSlot129PersonalEffect = function(_mz8) {
            var _mz9 = null,
                _mza = new _mz7.SlotItemEffectModel(),
                _mzb = false,
                _mzc = new _mz7.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mz8.ctype) >= 0 ? (_mzc.houg = 1, _mzc.raig = 2, _mzc.kaih = 2, _mzc.tais = 2, _mzc.saku = 1, _mzb = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mz8.ctype) >= 0 ? (_mzc.houg = 1, _mzc.raig = 2, _mzc.kaih = 2, _mzc.saku = 3, _mzb = true) : [7, 13, 29, 8, 9, 31].indexOf(_mz8.ctype) >= 0 && (_mzc.houg = 1, _mzc.kaih = 2, _mzc.saku = 3, _mzb = true), 0 == _mzb) return _mza;
            var _mzd = _mz8.get_slotnums(129);
            return _mza = _mzc.multiply(_mzd);
        };
    },
    73254: (_mze, _mzf, _mzg) => {
        'use strict';
        var _mzh = null;
        defineModule(_mzf);
        Object.defineProperty(_mzf, '__esModule', {
            'value': true
        }), _mzf.getSlot12PersonalEffect = void 0;
        var _mzi = _mzg(74496);
        _mzf.getSlot12PersonalEffect = function(_mzj) {
            var _mzk = null,
                _mzl = new _mzi.SlotItemEffectModel(),
                _mzm = false,
                _mzn = new _mzi.SlotItemEffectModel(),
                _mzo = _mzj.get_slotnums(142) + _mzj.get_slotnums(460);
            if (37 == _mzj.ctype && (_mzn.houg += 1, _mzn.kaih += 1, _mzn.houm += 1, _mzo >= 1 && (_mzl.kaih += 1, _mzl.houm += 1), _mzm = true), 0 == _mzm) return _mzl;
            var _mzp = _mzj.get_slotnums(12);
            return _mzl.add(_mzn.multiply(_mzp)), _mzl;
        };
    },
    41410: (_mzq, _mzr, _mzs) => {
        'use strict';
        var _mzt = null;
        defineModule(_mzr);
        Object.defineProperty(_mzr, '__esModule', {
            'value': true
        }), _mzr.getSlot130PersonalEffect = void 0;
        var _mzu = _mzs(74496);
        _mzr.getSlot130PersonalEffect = function(_mzv) {
            var _mzw = null,
                _mzx = new _mzu.SlotItemEffectModel(),
                _mzy = _mzv.have_level_num_over_dict[130];
            return null == _mzy || (428 == _mzv.ship_id ? (_mzy[1] >= 1 && (_mzx.tyku += 1 * _mzy[1]), _mzy[3] >= 1 && (_mzx.kaih += 1 * _mzy[3]), _mzy[5] >= 1 && (_mzx.houm += 1 * _mzy[5]), _mzy[7] >= 1 && (_mzx.tyku += 1 * _mzy[7]), _mzy[8] >= 1 && (_mzx.kaih += 1 * _mzy[8]), _mzy[9] >= 1 && (_mzx.tyku += 1 * _mzy[9]), _mzy[10] >= 1 && (_mzx.houg += 1 * _mzy[10])) : 141 == _mzv.ship_id && (_mzy[2] >= 1 && (_mzx.tyku += 1 * _mzy[2]), _mzy[4] >= 1 && (_mzx.kaih += 1 * _mzy[4]), _mzy[6] >= 1 && (_mzx.houm += 1 * _mzy[6]), _mzy[8] >= 1 && (_mzx.tyku += 1 * _mzy[8]), _mzy[10] >= 1 && (_mzx.kaih += 1 * _mzy[10])), 1 == _mzv.stype && (_mzy[3] >= 1 && (_mzx.tyku += 1 * _mzy[3]), _mzy[6] >= 1 && (_mzx.kaih += 1 * _mzy[6]), _mzy[9] >= 1 && (_mzx.tyku += 1 * _mzy[9]), _mzy[10] >= 1 && (_mzx.kaih += 1 * _mzy[10]))), _mzx;
        };
    },
    93373: (_mzz, _n00, _n01) => {
        'use strict';
        var _n02 = null;
        defineModule(_n00);
        Object.defineProperty(_n00, '__esModule', {
            'value': true
        }), _n00.getSlot132PersonalEffect = void 0;
        var _n03 = _n01(74496);
        _n00.getSlot132PersonalEffect = function(_n04) {
            var _n05 = null,
                _n06 = new _n03.SlotItemEffectModel(),
                _n07 = _n04.get_each_level_nums(132),
                _n08 = 0,
                _n09 = 0,
                _n0a = 0,
                _n0b = 0,
                _n0c = 0;
            return _n07.forEach(function(_n0d, _n0e) {
                _n0e >= 3 && (_n08 += _n0d), _n0e >= 5 && (_n09 += _n0d), _n0e >= 7 && (_n0a += _n0d), _n0e >= 8 && (_n0b += _n0d), _n0e >= 9 && (_n0c += _n0d);
            }), _n08 >= 1 && (_n06.kaih += 1), _n09 >= 1 && (_n06.tais += 1), _n0a >= 1 && (_n06.kaih += 1), _n0b >= 1 && (_n06.tais += 1), _n0c >= 1 && (_n06.houm += 1), _n07[10] >= 1 && (_n06.tais += 1), 911 != _n04.ship_id && 916 != _n04.ship_id && 546 != _n04.ship_id || (_n06.kaih += 1), 461 != _n04.ship_id && 466 != _n04.ship_id && 462 != _n04.ship_id && 467 != _n04.ship_id && 156 != _n04.ship_id || (_n06.kaih += 2), _n06;
        };
    },
    88838: (_n0f, _n0g, _n0h) => {
        'use strict';
        var _n0i = null;
        defineModule(_n0g);
        Object.defineProperty(_n0g, '__esModule', {
            'value': true
        }), _n0g.getSlot136PersonalEffect = void 0;
        var _n0j = _n0h(74496);
        _n0g.getSlot136PersonalEffect = function(_n0k) {
            var _n0l = null,
                _n0m = new _n0j.SlotItemEffectModel(),
                _n0n = 0;
            if (58 != _n0k.ctype && 61 != _n0k.ctype && 64 != _n0k.ctype && 68 != _n0k.ctype && 80 != _n0k.ctype && 92 != _n0k.ctype && 113 != _n0k.ctype && 124 != _n0k.ctype || (_n0m.souk += 2, _n0m.kaih += 1, _n0n = 1), 879 == _n0k.ship_id && (_n0m.souk += 1, _n0m.kaih += 1), 0 == _n0n) return _n0m;
            var _n0o = _n0k.get_each_level_nums(136),
                _n0p = 0,
                _n0q = 0,
                _n0r = _n0o[10];
            return _n0n > 0 && _n0o.forEach(function(_n0s, _n0t) {
                _n0t >= 3 && (_n0p += _n0s), _n0t >= 6 && (_n0q += _n0s);
            }), 1 == _n0n && (_n0p >= 1 && (_n0m.souk += 1 * _n0p), _n0q >= 1 && (_n0m.souk += 1 * _n0q), _n0r >= 1 && (_n0m.souk += 1 * _n0r)), _n0m;
        };
    },
    17274: (_n0u, _n0v, _n0w) => {
        'use strict';
        var _n0x = null;
        defineModule(_n0v);
        Object.defineProperty(_n0v, '__esModule', {
            'value': true
        }), _n0v.getSlot139PersonalEffect = void 0;
        var _n0y = _n0w(74496);
        _n0v.getSlot139PersonalEffect = function(_n0z) {
            var _n10 = null,
                _n11 = new _n0y.SlotItemEffectModel(),
                _n12 = false,
                _n13 = new _n0y.SlotItemEffectModel();
            if (662 != _n0z.ship_id && 663 != _n0z.ship_id && 668 != _n0z.ship_id || (_n13.houg += 2, _n13.tyku += 1, _n12 = true), 0 == _n12) return _n11;
            var _n14 = _n0z.get_slotnums(139);
            return _n11.add(_n13.multiply(_n14)), _n11;
        };
    },
    6482: (_n15, _n16, _n17) => {
        'use strict';
        var _n18 = null;
        defineModule(_n16);
        Object.defineProperty(_n16, '__esModule', {
            'value': true
        }), _n16.getSlot13_8cmRensouhouPersonalEffect = void 0;
        var _n19 = _n17(74496);
        _n16.getSlot13_8cmRensouhouPersonalEffect = function(_n1a) {
            var _n1b = null,
                _n1c = new _n19.SlotItemEffectModel(),
                _n1d = false,
                _n1e = new _n19.SlotItemEffectModel(),
                _n1f = 0,
                _n1g = _n1a.getCountryName(),
                _n1h = _n1a.get_slotnums(534),
                _n1i = _n1a.get_slotnums(535);
            if ('フランス' == _n1g && (_n1e.houg += 2, _n1e.houm += 1, 129 == _n1a.ctype && (_n1e.houm += 1), 967 == _n1a.ship_id && _n1i >= 1 && (_n1e.houg += 1), _n1d = true, _n1f = 1), 0 == _n1d) return _n1c;
            var _n1j = _n1h + _n1i;
            if (_n1c.add(_n1e.multiply(_n1j)), 0 == _n1f) return _n1c;
            _n1a.haveSlotLevelNumOver(534);
            var _n1k = _n1a.haveSlotLevelNumOver(535),
                _n1l = _n1a.getTotalCountWithOverLeveledItem([534, 535]);
            return 1 == _n1f && (_n1l[2] >= 1 && (_n1c.houm += 1 * _n1l[2]), _n1l[4] >= 1 && (_n1c.houg += 1 * _n1l[4]), _n1l[6] >= 1 && (_n1c.houm += 1 * _n1l[6]), _n1k[7] >= 1 && (_n1c.houg += 1 * _n1k[7]), _n1l[8] >= 1 && (_n1c.houg += 1 * _n1l[8]), _n1k[9] >= 1 && (_n1c.houm += 1 * _n1k[9]), _n1l[10] >= 1 && (_n1c.houg += 1 * _n1l[10])), _n1c;
        };
    },
    21713: (_n1m, _n1n, _n1o) => {
        'use strict';
        var _n1p = null;
        defineModule(_n1n);
        Object.defineProperty(_n1n, '__esModule', {
            'value': true
        }), _n1n.getSlot143PersonalEffect = void 0;
        var _n1q = _n1o(74496);
        _n1n.getSlot143PersonalEffect = function(_n1r) {
            var _n1s = null,
                _n1t = new _n1q.SlotItemEffectModel();
            return 'あかぎ' == _n1r.yomi ? _n1t.houg = 3 : 'かが' == _n1r.yomi || 'しょうかく' == _n1r.yomi ? _n1t.houg = 2 : ('ずいかく' == _n1r.yomi || 'りゅうじょう' == _n1r.yomi) && (_n1t.houg = 1), _n1t;
        };
    },
    59823: (_n1u, _n1v, _n1w) => {
        'use strict';
        var _n1x = null;
        defineModule(_n1v);
        Object.defineProperty(_n1v, '__esModule', {
            'value': true
        }), _n1v.getSlot144PersonalEffect = void 0;
        var _n1y = _n1w(74496);
        _n1v.getSlot144PersonalEffect = function(_n1z) {
            var _n20 = null,
                _n21 = new _n1y.SlotItemEffectModel();
            return 'あかぎ' == _n1z.yomi ? _n21.houg = 3 : 'かが' == _n1z.yomi ? _n21.houg = 2 : 'しょうかく' == _n1z.yomi ? (_n21.houg = 2, 461 != _n1z.ship_id && 466 != _n1z.ship_id || (_n21.houg += 2)) : 'ずいかく' == _n1z.yomi ? (_n21.houg = 1, 462 != _n1z.ship_id && 467 != _n1z.ship_id || (_n21.houg += 1)) : 'りゅうじょう' == _n1z.yomi && (_n21.houg = 1), _n21;
        };
    },
    57440: (_n22, _n23, _n24) => {
        'use strict';
        var _n25 = null;
        defineModule(_n23);
        Object.defineProperty(_n23, '__esModule', {
            'value': true
        }), _n23.getSlot149PersonalEffect = void 0;
        var _n26 = _n24(74496);
        _n23.getSlot149PersonalEffect = function(_n27) {
            var _n28 = null,
                _n29 = new _n26.SlotItemEffectModel(),
                _n2a = new _n26.SlotItemEffectModel(),
                _n2b = false;
            return 488 == _n27.ship_id || 141 == _n27.ship_id || 160 == _n27.ship_id || 622 == _n27.ship_id || 623 == _n27.ship_id || 656 == _n27.ship_id || 961 == _n27.ship_id ? (_n2a.tais = 1, _n2a.kaih = 3, _n2b = true) : 624 == _n27.ship_id ? (_n2a.tais = 3, _n2a.kaih = 5, _n2b = true) : 662 == _n27.ship_id && (_n2a.tais = 2, _n2a.kaih = 4, _n2b = true), 54 == _n27.ctype && (_n2a.tais = 1, _n2a.kaih = 2, _n2b = true), 0 == _n2b ? _n29 : _n29 = _n2a.multiply(1);
        };
    },
    29493: (_n2c, _n2d, _n2e) => {
        'use strict';
        var _n2f = null;
        defineModule(_n2d);
        Object.defineProperty(_n2d, '__esModule', {
            'value': true
        }), _n2d.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _n2g = _n2e(74496);
        _n2d.getSlot14inch45CaliberGunPersonalEffect = function(_n2h) {
            var _n2i = null,
                _n2j, _n2k, _n2l, _n2m = new _n2g.SlotItemEffectModel(),
                _n2n = false,
                _n2o = new _n2g.SlotItemEffectModel(),
                _n2p = {
                    507: 507,
                    508: 507
                },
                _n2q = _n2h.get_slotnums(507),
                _n2r = _n2h.get_slotnums(508),
                _n2s = _n2q + _n2r,
                _n2t = _n2h.getCountryName(),
                _n2u = _n2h.getUSSWaterRaderDict();
            if (125 == _n2h.ctype && (_n2o.houg += 1, _n2o.kaih += 1, _n2o.houm += 1, _n2n = true, _n2q >= 1 && _n2r >= 1 && (_n2m.houg += 1, _n2m.houm += 1)), 'アメリカ' == _n2t && _n2h.stype >= 8 && _n2h.stype <= 10) {
                _n2o.houg += 2, _n2o.kaih += 1, _n2o.houm += 1, _n2n = true;
                for (var _n2v = 0, _n2w = 0, _n2x = _n2h.have_slot_ids(); _n2w < _n2x.length; _n2w++) {
                    var _n2y = _n2x[_n2w];
                    _n2u[Number(_n2y)] && (_n2v += _n2h.get_slotnums(parseInt(_n2y)));
                }
                _n2v >= 1 && (_n2m.houg += 1, _n2m.kaih += 1, _n2m.houm += 2), _n2q >= 1 && _n2r >= 1 && (_n2m.houg += 1, _n2m.houm += 1, _n2m.kaih += 2);
            }
            else 6 != _n2h.ctype && 26 != _n2h.ctype && 2 != _n2h.ctype && 'イギリス' != _n2t || (_n2m.kaih += 1, _n2m.houm += 1, _n2q >= 1 && _n2r >= 1 && (_n2m.houg += 1, _n2m.houm += 1, _n2m.kaih += 1));
            _n2n && _n2m.add(_n2o.multiply(_n2s));
            for (var _n2z = {}, _n30 = {}, _n31 = {}, _n32 = function(_n33) {
                    var _n34 = null,
                        _n35 = Number(_n33),
                        _n36 = _n2p[_n35];
                    _n2z[_n36] = null !== (_n2j = _n2z[_n36]) && void 0 !== _n2j ? _n2j : 0, _n30[_n36] = null !== (_n2k = _n30[_n36]) && void 0 !== _n2k ? _n2k : 0, _n31[_n36] = null !== (_n2l = _n31[_n36]) && void 0 !== _n2l ? _n2l : 0, _n2h.get_each_level_nums(_n35).forEach(function(_n37, _n38) {
                        _n38 >= 3 && (_n2z[_n36] += _n37), _n38 >= 6 && (_n30[_n36] += _n37), _n38 >= 9 && (_n31[_n36] += _n37);
                    });
                }, _n39 = 0, _n3a = Object.keys(_n2p); _n39 < _n3a.length; _n39++) {
                _n32(_n3a[_n39]);
            }
            return _n2z[507] >= 1 && (_n2m.houg += 1 * _n2z[507]), _n30[507] >= 1 && (_n2m.souk += 1 * _n30[507]), _n31[507] >= 1 && (_n2m.houm += 1 * _n31[507]), _n2m;
        };
    },
    66985: (_n3b, _n3c, _n3d) => {
        'use strict';
        var _n3e = null;
        defineModule(_n3c);
        Object.defineProperty(_n3c, '__esModule', {
            'value': true
        }), _n3c.getSlot15PersonalEffect = void 0;
        var _n3f = _n3d(74496);
        _n3c.getSlot15PersonalEffect = function(_n3g) {
            var _n3h = null,
                _n3i = new _n3f.SlotItemEffectModel(),
                _n3j = false;
            if ((566 == _n3g.ship_id || 567 == _n3g.ship_id || 568 == _n3g.ship_id || 648 == _n3g.ship_id || 651 == _n3g.ship_id || 656 == _n3g.ship_id || 670 == _n3g.ship_id || 915 == _n3g.ship_id || 951 == _n3g.ship_id || 'たけ' == _n3g.yomi) && (_n3j = true), 0 == _n3j) return _n3i;
            var _n3k = _n3g.get_slotnums(15);
            return 30 == _n3g.ctype && (1 == _n3k ? _n3i.raig = 2 : _n3k >= 2 && (_n3i.raig = 4)), 'たけ' == _n3g.yomi && (_n3i.raig += 5, _n3i.kaih += 1), _n3i;
        };
    },
    70332: (_n3l, _n3m, _n3n) => {
        'use strict';
        var _n3o = null;
        defineModule(_n3m);
        Object.defineProperty(_n3m, '__esModule', {
            'value': true
        }), _n3m.getSlot15_2cmSanrensouSyuhouPersonalEffect = void 0;
        var _n3p = _n3n(74496);
        _n3m.getSlot15_2cmSanrensouSyuhouPersonalEffect = function(_n3q) {
            var _n3r = null,
                _n3s = new _n3p.SlotItemEffectModel(),
                _n3t = false,
                _n3u = new _n3p.SlotItemEffectModel(),
                _n3v = 0,
                _n3w = _n3q.getCountryName(),
                _n3x = _n3q.get_slotnums(536),
                _n3y = _n3q.get_slotnums(537);
            if ('フランス' == _n3w && (_n3u.houg += 2, _n3u.houm += 1, 128 == _n3q.ctype && (_n3u.houm += 1), 970 == _n3q.ship_id && _n3y >= 1 && (_n3u.houg += 1, _n3u.kaih += 2, _n3u.houm += 1), _n3t = true, _n3v = 1), 0 == _n3t) return _n3s;
            var _n3z = _n3x + _n3y;
            if (_n3s.add(_n3u.multiply(_n3z)), 0 == _n3v) return _n3s;
            _n3q.haveSlotLevelNumOver(536);
            var _n40 = _n3q.haveSlotLevelNumOver(537),
                _n41 = _n3q.getTotalCountWithOverLeveledItem([536, 537]),
                _n42 = _n3q.get_slotnums(471) + _n3q.get_slotnums(538),
                _n43 = _n3q.haveSlotLevelNumOver(538);
            return 1 == _n3v && (_n41[3] >= 1 && (_n3s.houm += 1 * _n41[3]), _n41[4] >= 1 && (_n3s.houg += 1 * _n41[4]), _n40[5] >= 1 && (_n3s.kaih += 1 * _n40[5]), _n41[6] >= 1 && (_n3s.houm += 1 * _n41[6]), _n41[7] >= 1 && (_n3s.houg += 1 * _n41[7]), _n40[8] >= 1 && (_n3s.kaih += 1 * _n40[8]), _n41[9] >= 1 && (_n3s.houm += 1 * _n41[9]), _n41[10] >= 1 && (_n3s.houg += 1 * _n41[10]), _n41[1] >= 1 && (_n42 >= 1 && (970 == _n3q.ship_id && (_n3s.kaih += 1 * _n42), _n3s.houm += 1 * _n42), _n43[7] >= 1 && (_n3s.kaih += 1 * _n43[7]), _n43[9] >= 1 && (_n3s.houm += 1 * _n43[9]))), _n3s;
        };
    },
    79086: (_n44, _n45, _n46) => {
        'use strict';
        var _n47 = null;
        defineModule(_n45);
        Object.defineProperty(_n45, '__esModule', {
            'value': true
        }), _n45.getSlot165_216PersonalEffect = void 0;
        var _n48 = _n46(74496);
        _n45.getSlot165_216PersonalEffect = function(_n49) {
            var _n4a = null,
                _n4b = new _n48.SlotItemEffectModel();
            return 501 != _n49.ship_id && 506 != _n49.ship_id && 502 != _n49.ship_id && 507 != _n49.ship_id || (_n4b.tyku += 2, _n4b.kaih += 2), _n4b;
        };
    },
    88102: (_n4c, _n4d, _n4e) => {
        'use strict';
        var _n4f = null;
        defineModule(_n4d);
        Object.defineProperty(_n4d, '__esModule', {
            'value': true
        }), _n4d.getSlot16M1PersonalEffect = void 0;
        var _n4g = _n4e(74496);
        _n4d.getSlot16M1PersonalEffect = function(_n4h) {
            var _n4i = null,
                _n4j = new _n4g.SlotItemEffectModel(),
                _n4k = new _n4g.SlotItemEffectModel();
            67 == _n4h.ctype || 78 == _n4h.ctype || 82 == _n4h.ctype || 88 == _n4h.ctype || 108 == _n4h.ctype || 112 == _n4h.ctype ? (_n4k.houg += 2, _n4k.souk += 1, 67 == _n4h.ctype && (_n4k.kaih -= 2)) : 149 == _n4h.ship_id || 150 == _n4h.ship_id || 151 == _n4h.ship_id || 152 == _n4h.ship_id ? (_n4k.houg += 1, _n4k.souk += 1, _n4k.kaih -= 3) : 591 == _n4h.ship_id || 592 == _n4h.ship_id || 694 == _n4h.ship_id ? (_n4k.houg += 2, _n4k.souk += 1, _n4k.kaih -= 2) : 593 != _n4h.ship_id && 954 != _n4h.ship_id || (_n4k.houg += 1, _n4k.souk += 1, _n4k.kaih -= 1);
            var _n4l = true;
            if (_n4k.exists() || (_n4l = false), 0 == _n4l) return _n4j;
            var _n4m = _n4h.get_slotnums(298) + _n4h.get_slotnums(299) + _n4h.get_slotnums(300);
            return _n4j = _n4k.multiply(_n4m);
        };
    },
    29240: (_n4n, _n4o, _n4p) => {
        'use strict';
        var _n4q = null;
        defineModule(_n4o);
        Object.defineProperty(_n4o, '__esModule', {
            'value': true
        }), _n4o.getSlot171PersonalEffect = void 0;
        var _n4r = _n4p(74496);
        _n4o.getSlot171PersonalEffect = function(_n4s) {
            var _n4t = null,
                _n4u = new _n4r.SlotItemEffectModel(),
                _n4v = 0;
            'アメリカ' == _n4s.getCountryName() && (_n4v = 1), 65 != _n4s.ctype && 93 != _n4s.ctype && 102 != _n4s.ctype && 107 != _n4s.ctype && 125 != _n4s.ctype || (_n4u.houg += 1, _n4u.saku += 1, _n4v = 2);
            var _n4w = _n4s.get_each_level_nums(171),
                _n4x = 0,
                _n4y = 0,
                _n4z = 0;
            return _n4v > 0 && (_n4w.map(function(_n50, _n51) {
                _n51 >= 5 && (_n4x += _n50), _n51 >= 3 && (_n4y += _n50), _n51 >= 8 && (_n4z += _n50);
            }), 1 != _n4v && 2 != _n4v || (_n4w[10] > 0 && (_n4u.houg += 1), _n4x > 0 && (_n4u.kaih += 1)), 2 == _n4v && (_n4y > 0 && (_n4u.saku += 1), _n4z > 0 && (_n4u.saku += 1))), _n4u;
        };
    },
    40885: (_n52, _n53, _n54) => {
        'use strict';
        var _n55 = null;
        defineModule(_n53);
        Object.defineProperty(_n53, '__esModule', {
            'value': true
        }), _n53.getSlot174PersonalEffect = void 0;
        var _n56 = _n54(74496);
        _n53.getSlot174PersonalEffect = function(_n57) {
            var _n58 = null,
                _n59 = new _n56.SlotItemEffectModel(),
                _n5a = new _n56.SlotItemEffectModel();
            if (66 == _n57.ctype && (_n5a.raig = 1, _n5a.kaih = 2), 591 == _n57.ship_id || 592 == _n57.ship_id || 954 == _n57.ship_id || 694 == _n57.ship_id ? (_n5a.raig += 6, _n5a.kaih += 3) : 593 == _n57.ship_id ? (_n5a.raig += 5, _n5a.kaih += 2) : 488 != _n57.ship_id && 622 != _n57.ship_id && 623 != _n57.ship_id && 624 != _n57.ship_id || (_n5a.houg += 2, _n5a.raig += 4, _n5a.kaih += 4), !_n5a.exists()) return _n59;
            var _n5b = _n57.get_slotnums(174);
            return _n59 = _n5a.multiply(_n5b);
        };
    },
    19614: (_n5c, _n5d, _n5e) => {
        'use strict';
        var _n5f = null;
        defineModule(_n5d);
        Object.defineProperty(_n5d, '__esModule', {
            'value': true
        }), _n5d.getSlot179PersonalEffect = void 0;
        var _n5g = _n5e(74496);
        _n5d.getSlot179PersonalEffect = function(_n5h) {
            var _n5i = null,
                _n5j = new _n5g.SlotItemEffectModel(),
                _n5k = new _n5g.SlotItemEffectModel();
            if (54 == _n5h.ctype && (_n5k.raig = 1), !_n5k.exists()) return _n5j;
            var _n5l = _n5h.get_slotnums(179);
            return _n5j = _n5k.multiply(_n5l);
        };
    },
    87220: (_n5m, _n5n, _n5o) => {
        'use strict';
        var _n5p = null;
        defineModule(_n5n);
        Object.defineProperty(_n5n, '__esModule', {
            'value': true
        }), _n5n.getSlot184PersonalEffect = void 0;
        var _n5q = _n5o(74496);
        _n5n.getSlot184PersonalEffect = function(_n5r) {
            var _n5s = null,
                _n5t = new _n5q.SlotItemEffectModel(),
                _n5u = new _n5q.SlotItemEffectModel();
            if (68 == _n5r.ctype && (_n5u.houg += 1, _n5u.tyku += 2, _n5u.kaih += 3), !_n5u.exists()) return _n5t;
            var _n5v = _n5r.get_slotnums(184);
            return _n5t = _n5u.multiply(_n5v);
        };
    },
    81367: (_n5w, _n5x, _n5y) => {
        'use strict';
        var _n5z = null;
        defineModule(_n5x);
        Object.defineProperty(_n5x, '__esModule', {
            'value': true
        }), _n5x.getSlot188PersonalEffect = void 0;
        var _n60 = _n5y(74496);
        _n5x.getSlot188PersonalEffect = function(_n61) {
            var _n62 = null,
                _n63 = new _n60.SlotItemEffectModel(),
                _n64 = new _n60.SlotItemEffectModel();
            if (68 == _n61.ctype && (_n64.houg += 3, _n64.tyku += 1, _n64.kaih += 1), !_n64.exists()) return _n63;
            var _n65 = _n61.get_slotnums(188);
            return _n63 = _n64.multiply(_n65);
        };
    },
    13052: (_n66, _n67, _n68) => {
        'use strict';
        var _n69 = null;
        defineModule(_n67);
        Object.defineProperty(_n67, '__esModule', {
            'value': true
        }), _n67.getSlot189PersonalEffect = void 0;
        var _n6a = _n68(74496);
        _n67.getSlot189PersonalEffect = function(_n6b) {
            var _n6c = null,
                _n6d = new _n6a.SlotItemEffectModel(),
                _n6e = new _n6a.SlotItemEffectModel();
            if (68 != _n6b.ctype && 63 != _n6b.ctype || (_n6e.tyku += 1, _n6e.kaih += 2), !_n6e.exists()) return _n6d;
            var _n6f = _n6b.get_slotnums(189);
            return _n6d = _n6e.multiply(_n6f);
        };
    },
    66904: (_n6g, _n6h, _n6i) => {
        'use strict';
        var _n6j = null;
        defineModule(_n6h);
        Object.defineProperty(_n6h, '__esModule', {
            'value': true
        }), _n6h.getSlot18_52_PersonalEffect = void 0;
        var _n6k = _n6i(74496);
        _n6h.getSlot18_52_PersonalEffect = function(_n6l) {
            var _n6m = null,
                _n6n = new _n6k.SlotItemEffectModel(),
                _n6o = new _n6k.SlotItemEffectModel();
            if (277 == _n6l.ship_id || 278 == _n6l.ship_id || 156 == _n6l.ship_id ? _n6o.houg = 1 : 594 == _n6l.ship_id || 698 == _n6l.ship_id || 646 == _n6l.ship_id ? (_n6o.houg = 1, _n6o.kaih = 1) : 599 != _n6l.ship_id && 610 != _n6l.ship_id || (_n6o.houg = 2, _n6o.kaih = 1), !_n6o.exists()) return _n6n;
            var _n6p = _n6l.get_slotnums(18) + _n6l.get_slotnums(52);
            return _n6n = _n6o.multiply(_n6p);
        };
    },
    94968: (_n6q, _n6r, _n6s) => {
        'use strict';
        var _n6t = null;
        defineModule(_n6r);
        Object.defineProperty(_n6r, '__esModule', {
            'value': true
        }), _n6r.getSlot194PersonalEffect = void 0;
        var _n6u = _n6s(74496);
        _n6r.getSlot194PersonalEffect = function(_n6v) {
            var _n6w = null,
                _n6x = new _n6u.SlotItemEffectModel(),
                _n6y = new _n6u.SlotItemEffectModel();
            if (70 == _n6v.ctype ? (_n6y.houg += 3, _n6y.kaih += 2, _n6y.saku += 2) : 72 != _n6v.ctype && 62 != _n6v.ctype || (_n6y.kaih += 1, _n6y.saku += 2), 392 != _n6v.ship_id && 969 != _n6v.ship_id || (_n6y.houg += 1, _n6y.kaih += 2, _n6y.saku += 2), !_n6y.exists()) return _n6x;
            var _n6z = _n6v.get_slotnums(194);
            return _n6x = _n6y.multiply(_n6z);
        };
    },
    94781: (_n70, _n71, _n72) => {
        'use strict';
        var _n73 = null;
        defineModule(_n71);
        Object.defineProperty(_n71, '__esModule', {
            'value': true
        }), _n71.getSlot195PersonalEffect = void 0;
        var _n74 = _n72(74496);
        _n71.getSlot195PersonalEffect = function(_n75) {
            var _n76 = null,
                _n77 = new _n74.SlotItemEffectModel(),
                _n78 = false,
                _n79 = new _n74.SlotItemEffectModel();
            if ('アメリカ' == _n75.getCountryName() && (_n79.houg += 1, _n78 = true), 0 == _n78) return _n77;
            var _n7a = _n75.get_slotnums(195);
            return _n77.add(_n79.multiply(_n7a));
        };
    },
    98137: (_n7b, _n7c, _n7d) => {
        'use strict';
        var _n7e = null;
        defineModule(_n7c);
        Object.defineProperty(_n7c, '__esModule', {
            'value': true
        }), _n7c.getSlot19PersonalEffect = void 0;
        var _n7f = _n7d(74496);
        _n7c.getSlot19PersonalEffect = function(_n7g) {
            var _n7h = null,
                _n7i = new _n7f.SlotItemEffectModel(),
                _n7j = new _n7f.SlotItemEffectModel();
            if ('ほうしょう' == _n7g.yomi && (_n7j.houg = 2, _n7j.kaih = 2, _n7j.tais = 2, _n7j.tyku = 2), 75 != _n7g.ctype && 76 != _n7g.ctype || (_n7j.houg = 2, _n7j.tais = 3), 7 == _n7g.stype && (_n7j.tyku += 1, _n7j.kaih += 1), 894 != _n7g.ship_id && 899 != _n7g.ship_id || (_n7j.houg += 1, _n7j.kaih += 1, _n7j.tais += 1, _n7j.tyku += 1), !_n7j.exists()) return _n7i;
            var _n7k = _n7g.get_slotnums(19);
            return _n7i = _n7j.multiply(_n7k);
        };
    },
    48658: (_n7l, _n7m, _n7n) => {
        'use strict';
        var _n7o = null;
        defineModule(_n7m);
        Object.defineProperty(_n7m, '__esModule', {
            'value': true
        }), _n7m.getSlot204PersonalEffect = void 0;
        var _n7p = _n7n(74496);
        _n7m.getSlot204PersonalEffect = function(_n7q) {
            var _n7r = null,
                _n7s = new _n7p.SlotItemEffectModel();
            if (591 != _n7q.ship_id && 592 != _n7q.ship_id && 593 != _n7q.ship_id && 954 != _n7q.ship_id && 694 != _n7q.ship_id) return _n7s;
            _n7s.souk = _n7s.souk + 1, _n7s.raig = _n7s.raig + 1;
            for (var _n7t = _n7q.get_each_level_nums(204), _n7u = 0, _n7v = 0; _n7v <= 10; _n7v++) _n7v >= 7 && (_n7u += _n7t[_n7v]);
            return _n7u > 0 && (_n7s.souk = _n7s.souk + 1, 694 == _n7q.ship_id && (_n7s.souk += 1)), _n7t[10] > 0 && (_n7s.raig = _n7s.raig + 1, 694 == _n7q.ship_id && (_n7s.raig += 1)), _n7s;
        };
    },
    2306: (_n7w, _n7x, _n7y) => {
        'use strict';
        var _n7z = null;
        defineModule(_n7x);
        Object.defineProperty(_n7x, '__esModule', {
            'value': true
        }), _n7x.getSlot217PersonalEffect = void 0;
        var _n80 = _n7y(74496);
        _n7x.getSlot217PersonalEffect = function(_n81) {
            var _n82 = null,
                _n83 = new _n80.SlotItemEffectModel(),
                _n84 = false,
                _n85 = new _n80.SlotItemEffectModel();
            if (501 == _n81.ship_id || 506 == _n81.ship_id ? (_n85.houg += 1, _n85.kaih += 3, _n85.tyku += 5, _n84 = true) : 502 != _n81.ship_id && 507 != _n81.ship_id || (_n85.houg += 1, _n85.kaih += 2, _n85.tyku += 4, _n84 = true), 0 == _n84) return _n83;
            var _n86 = _n81.get_slotnums(217);
            return _n83.add(_n85.multiply(_n86)), _n83;
        };
    },
    91302: function(_n87, _n88, _n89) {
        'use strict';
        var _n8a = null;
        var _n8b = this && this.__importDefault || function(_n8c) {
            var _n8d = null;
            return _n8c && _n8c.__esModule ? _n8c : {
                'default': _n8c
            };
        };
        defineModule(_n88);
        Object.defineProperty(_n88, '__esModule', {
            'value': true
        }), _n88.getSlot220PersonalEffect = void 0;
        var _n8e = _n89(74496),
            _n8f = _n8b(_n89(18622));
        _n88.getSlot220PersonalEffect = function(_n8g) {
            var _n8h = null,
                _n8i = new _n8e.SlotItemEffectModel(),
                _n8j = false,
                _n8k = new _n8e.SlotItemEffectModel(),
                _n8l = 0,
                _n8m = 0;
            if (662 == _n8g.ship_id || 663 == _n8g.ship_id || 668 == _n8g.ship_id || 501 == _n8g.ship_id || 506 == _n8g.ship_id || 502 == _n8g.ship_id || 507 == _n8g.ship_id ? (_n8k.houg += 1, _n8k.tyku += 3, _n8k.kaih += 2, _n8j = true, _n8l = 1) : 894 != _n8g.ship_id && 899 != _n8g.ship_id || (_n8k.tyku += 2, _n8k.kaih += 2, _n8j = true, _n8l = 1, _n8m = 1), 0 == _n8j) return _n8i;
            var _n8n = _n8g.get_slotnums(220);
            _n8i.add(_n8k.multiply(_n8n));
            for (var _n8o = 0, _n8p = 0, _n8q = _n8g.have_slot_ids(); _n8p < _n8q.length; _n8p++) {
                var _n8r = _n8q[_n8p],
                    _n8s = _n8f.default.model.slot.getMst(_n8r),
                    _n8t = _n8s.equipType;
                12 != _n8t && 13 != _n8t || (_n8s.sakuteki >= 5 && _n8g.get_slotnums(parseInt(_n8r)), _n8s.taiku >= 2 && (_n8o += _n8g.get_slotnums(parseInt(_n8r))));
            }
            if (_n8o >= 1 && 1 == _n8l && (_n8i.tyku += 3, _n8i.kaih += 3), 0 == _n8m) return _n8i;
            var _n8u = _n8g.get_each_level_nums(220)[10];
            return 1 == _n8m && _n8u > 0 && (_n8i.houg += 1 * _n8u, _n8i.tyku += 1 * _n8u, _n8i.kaih += 1 * _n8u), _n8i;
        };
    },
    20418: (_n8v, _n8w, _n8x) => {
        'use strict';
        var _n8y = null;
        defineModule(_n8w);
        Object.defineProperty(_n8w, '__esModule', {
            'value': true
        }), _n8w.getSlot227PersonalEffect = void 0;
        var _n8z = _n8x(74496);
        _n8w.getSlot227PersonalEffect = function(_n90) {
            var _n91 = null,
                _n92 = new _n8z.SlotItemEffectModel(),
                _n93 = _n90.get_each_level_nums(227),
                _n94 = 0;
            _n93.forEach(function(_n95, _n96) {
                _n96 >= 8 && (_n94 += _n95);
            }), _n94 >= 1 && (_n92.tais += 1 * _n94);
            var _n97 = _n93[10];
            return _n97 >= 1 && (_n92.tais += 1 * _n97), _n92;
        };
    },
    1906: (_n98, _n99, _n9a) => {
        'use strict';
        var _n9b = null;
        defineModule(_n99);
        Object.defineProperty(_n99, '__esModule', {
            'value': true
        }), _n99.getSlot228PersonalEffect = void 0;
        var _n9c = _n9a(74496);
        _n99.getSlot228PersonalEffect = function(_n9d) {
            var _n9e = null,
                _n9f = new _n9c.SlotItemEffectModel(),
                _n9g = new _n9c.SlotItemEffectModel();
            if ('ほうしょう' == _n9d.yomi && (_n9g.houg = 3, _n9g.kaih = 4, _n9g.tais = 4, _n9g.tyku = 3), 75 != _n9d.ctype && 76 != _n9d.ctype || (_n9g.houg = 2, _n9g.tais = 5, _n9g.tyku = 1, _n9g.kaih = 1), 7 == _n9d.stype && (_n9g.tais += 2, _n9g.tyku += 1, _n9g.kaih += 1), 894 != _n9d.ship_id && 899 != _n9d.ship_id || (_n9g.houg += 1, _n9g.kaih += 2, _n9g.tais += 2, _n9g.tyku += 1), !_n9g.exists()) return _n9f;
            var _n9h = _n9d.get_slotnums(228);
            return _n9f = _n9g.multiply(_n9h);
        };
    },
    61887: function(_n9i, _n9j, _n9k) {
        'use strict';
        var _n9l = null;
        var _n9m = this && this.__importDefault || function(_n9n) {
            var _n9o = null;
            return _n9n && _n9n.__esModule ? _n9n : {
                'default': _n9n
            };
        };
        defineModule(_n9j);
        Object.defineProperty(_n9j, '__esModule', {
            'value': true
        }), _n9j.getSlot229PersonalEffect = void 0;
        var _n9p = _n9k(74496),
            _n9q = _n9m(_n9k(18622));
        _n9j.getSlot229PersonalEffect = function(_n9r) {
            var _n9s = null;
            for (var _n9t = new _n9p.SlotItemEffectModel(), _n9u = 0, _n9v = 0, _n9w = _n9r.have_slots_dict[229]; _n9v < _n9w.length; _n9v++) {
                _n9w[_n9v].level >= 7 && _n9u++;
            }
            var _n9x = _n9u,
                _n9y = 0,
                _n9z = 0,
                _na0 = 0,
                _na1 = _n9r.get_slotnums(229);
            if (622 == _n9r.ship_id || 623 == _n9r.ship_id || 624 == _n9r.ship_id) _n9t.houg += 1 * _na1, _n9t.tyku += 1 * _na1, _n9y = 2;
            else {
                if (656 == _n9r.ship_id) _n9t.houg += 2 * _na1, _n9t.tyku += 3 * _na1, _n9t.tais += 2 * _na1, _n9y = 3;
                else {
                    if (0 == _n9u) return _n9t;
                }
            }
            if (488 == _n9r.ship_id ? (_n9t.tyku += 3 * _n9x, _n9y = 1) : 220 == _n9r.ship_id ? _n9t.tyku += 2 * _n9x : 23 == _n9r.ship_id ? _n9t.tyku += 1 * _n9x : 160 == _n9r.ship_id ? (_n9t.tyku += 2 * _n9x, _n9y = 1) : 224 == _n9r.ship_id ? _n9t.tyku += 1 * _n9x : 487 == _n9r.ship_id ? (_n9t.tyku += 2 * _n9x, _n9y = 1) : 289 == _n9r.ship_id && (_n9t.tyku += 1 * _n9x), (66 == _n9r.ctype || 28 == _n9r.ctype) && (_n9t.houg += 1 * _n9x, _n9t.tyku += 1 * _n9x, _n9z = 1), 1 == _n9r.stype && (_n9t.houg += 1 * _n9x, _n9t.tyku += 1 * _n9x, _na0 = 1), ('ゆら' == _n9r.yomi || 'なか' == _n9r.yomi || 'きぬ' == _n9r.yomi) && (_n9t.houg += 2 * _n9x), 0 == _n9y + _n9z + _na0) return _n9t;
            for (var _na2 = 0, _na3 = 0, _na4 = 0, _na5 = _n9r.have_slot_ids(); _na4 < _na5.length; _na4++) {
                var _na6 = _na5[_na4],
                    _na7 = _n9q.default.model.slot.getMst(_na6),
                    _na8 = _na7.equipType;
                12 != _na8 && 13 != _na8 || (_na7.sakuteki >= 5 && (_na2 += _n9r.get_slotnums(parseInt(_na6))), _na7.taiku >= 2 && (_na3 += _n9r.get_slotnums(parseInt(_na6))));
            }
            return 1 == _n9y ? _na2 > 0 && (_n9t.houg += 3, _n9t.kaih += 2) : 2 == _n9y ? (_na2 > 0 && (_n9t.houg += 1, _n9t.kaih += 1), _na3 > 0 && (_n9t.tyku += 2, _n9t.kaih += 2)) : 3 == _n9y && (_na2 > 0 && (_n9t.houg += 2, _n9t.kaih += 2), _na3 > 0 && (_n9t.tyku += 3, _n9t.kaih += 2)), 1 == _n9z && _na2 > 0 && (_n9t.houg += 2, _n9t.kaih += 3), 1 == _na0 && _na2 > 0 && (_n9t.houg += 1, _n9t.kaih += 4), _n9t;
        };
    },
    55734: (_na9, _naa, _nab) => {
        'use strict';
        var _nac = null;
        defineModule(_naa);
        Object.defineProperty(_naa, '__esModule', {
            'value': true
        }), _naa.getSlot234PersonalEffect = void 0;
        var _nad = _nab(74496);
        _naa.getSlot234PersonalEffect = function(_nae) {
            var _naf = null,
                _nag = new _nad.SlotItemEffectModel(),
                _nah = false,
                _nai = new _nad.SlotItemEffectModel(),
                _naj = _nae.get_slotnums(142) + _nae.get_slotnums(460);
            if (37 == _nae.ctype && (_nai.houg += 1, _nai.tyku += 1, _nai.kaih += 1, _nai.houm += 1, _naj >= 1 && (_nag.tyku += 1, _nag.kaih += 1, _nag.houm += 1), _nah = true), 0 == _nah) return _nag;
            var _nak = _nae.get_slotnums(234);
            return _nag.add(_nai.multiply(_nak)), _nag;
        };
    },
    17562: function(_nal, _nam, _nan) {
        'use strict';
        var _nao = null;
        var _nap = this && this.__importDefault || function(_naq) {
            var _nar = null;
            return _naq && _naq.__esModule ? _naq : {
                'default': _naq
            };
        };
        defineModule(_nam);
        Object.defineProperty(_nam, '__esModule', {
            'value': true
        }), _nam.getSlot235PersonalEffect = void 0;
        var _nas = _nan(74496),
            _nat = _nap(_nan(18622));
        _nam.getSlot235PersonalEffect = function(_nau) {
            var _nav = null,
                _naw = new _nas.SlotItemEffectModel(),
                _nax = false,
                _nay = new _nas.SlotItemEffectModel(),
                _naz = 0;
            if (52 != _nau.ctype && 9 != _nau.ctype || (_nay.houg += 2, _nay.tyku += 1, _nax = true), 321 == _nau.ship_id && (_nay.houg += 1, _nay.kaih += 1, _naz = 1), 0 == _nax) return _naw;
            var _nb0 = _nau.get_slotnums(235);
            if (_naw.add(_nay.multiply(_nb0)), 0 == _naz) return _naw;
            for (var _nb1 = 0, _nb2 = 0, _nb3 = 0, _nb4 = _nau.have_slot_ids(); _nb3 < _nb4.length; _nb3++) {
                var _nb5 = _nb4[_nb3],
                    _nb6 = _nat.default.model.slot.getMst(_nb5),
                    _nb7 = _nb6.equipType;
                12 != _nb7 && 13 != _nb7 || (_nb6.sakuteki >= 5 && (_nb1 += _nau.get_slotnums(parseInt(_nb5))), _nb6.taiku >= 2 && (_nb2 += _nau.get_slotnums(parseInt(_nb5))));
            }
            return _nb1 >= 1 && 1 == _naz && (_naw.houg += 3, _naw.kaih += 2), _nb2 >= 1 && 1 == _naz && (_naw.tyku += 3, _naw.kaih += 3), _naw;
        };
    },
    47970: (_nb8, _nb9, _nba) => {
        'use strict';
        var _nbb = null;
        defineModule(_nb9);
        Object.defineProperty(_nb9, '__esModule', {
            'value': true
        }), _nb9.getSlot237PersonalEffect = void 0;
        var _nbc = _nba(74496);
        _nb9.getSlot237PersonalEffect = function(_nbd) {
            var _nbe = null,
                _nbf = new _nbc.SlotItemEffectModel(),
                _nbg = new _nbc.SlotItemEffectModel();
            if (553 == _nbd.ship_id) _nbg.houg = 4, _nbg.kaih = 2;
            else {
                if (82 == _nbd.ship_id) _nbg.houg = 3, _nbg.kaih = 1;
                else {
                    if (88 == _nbd.ship_id) _nbg.houg = 3, _nbg.kaih = 1;
                    else {
                        if (554 == _nbd.ship_id) _nbg.houg = 4, _nbg.kaih = 2;
                        else {
                            if (411 == _nbd.ship_id) _nbg.houg = 2;
                            else {
                                if (412 != _nbd.ship_id) return _nbf;
                                _nbg.houg = 2;
                            }
                        }
                    }
                }
            }
            var _nbh = _nbd.get_slotnums(237);
            return _nbf = _nbg.multiply(_nbh);
        };
    },
    14386: (_nbi, _nbj, _nbk) => {
        'use strict';
        var _nbl = null;
        defineModule(_nbj);
        Object.defineProperty(_nbj, '__esModule', {
            'value': true
        }), _nbj.getSlot238_239PersonalEffect = void 0;
        var _nbm = _nbk(74496);
        _nbj.getSlot238_239PersonalEffect = function(_nbn) {
            var _nbo = null,
                _nbp = new _nbm.SlotItemEffectModel();
            return 501 != _nbn.ship_id && 506 != _nbn.ship_id && 502 != _nbn.ship_id && 507 != _nbn.ship_id || (_nbp.kaih += 1, _nbp.raig += 1), _nbp;
        };
    },
    82229: (_nbq, _nbr, _nbs) => {
        'use strict';
        var _nbt = null;
        defineModule(_nbr);
        Object.defineProperty(_nbr, '__esModule', {
            'value': true
        }), _nbr.getSlot242PersonalEffect = void 0;
        var _nbu = _nbs(74496);
        _nbr.getSlot242PersonalEffect = function(_nbv) {
            var _nbw = null,
                _nbx = new _nbu.SlotItemEffectModel(),
                _nby = false,
                _nbz = new _nbu.SlotItemEffectModel();
            if (78 == _nbv.ctype && (_nbz.houg += 2, _nbz.kaih += 1, _nby = true), 'ほうしょう' == _nbv.yomi && (_nbz.houg += 1, _nby = true), 0 == _nby) return _nbx;
            var _nc0 = _nbv.get_slotnums(242);
            return _nbx.add(_nbz.multiply(_nc0)), _nbx;
        };
    },
    10325: (_nc1, _nc2, _nc3) => {
        'use strict';
        var _nc4 = null;
        defineModule(_nc2);
        Object.defineProperty(_nc2, '__esModule', {
            'value': true
        }), _nc2.getSlot243PersonalEffect = void 0;
        var _nc5 = _nc3(74496);
        _nc2.getSlot243PersonalEffect = function(_nc6) {
            var _nc7 = null,
                _nc8 = new _nc5.SlotItemEffectModel(),
                _nc9 = false,
                _nca = new _nc5.SlotItemEffectModel();
            if (78 == _nc6.ctype && (_nca.houg += 3, _nca.kaih += 1, _nc9 = true), 'ほうしょう' == _nc6.yomi && (_nca.houg += 2, _nc9 = true), 0 == _nc9) return _nc8;
            var _ncb = _nc6.get_slotnums(243);
            return _nc8.add(_nca.multiply(_ncb)), _nc8;
        };
    },
    351: (_ncc, _ncd, _nce) => {
        'use strict';
        var _ncf = null;
        defineModule(_ncd);
        Object.defineProperty(_ncd, '__esModule', {
            'value': true
        }), _ncd.getSlot244PersonalEffect = void 0;
        var _ncg = _nce(74496);
        _ncd.getSlot244PersonalEffect = function(_nch) {
            var _nci = null,
                _ncj = new _ncg.SlotItemEffectModel(),
                _nck = false,
                _ncl = new _ncg.SlotItemEffectModel(),
                _ncm = 0;
            if (78 == _nch.ctype && (_ncl.houg += 4, _ncl.kaih += 2, _nck = true, _ncm = 1), 'ほうしょう' == _nch.yomi && (_ncl.houg += 3, _nck = true, _ncm = 2), 0 == _nck) return _ncj;
            var _ncn = _nch.get_slotnums(244);
            if (_ncj.add(_ncl.multiply(_ncn)), 0 == _ncm) return _ncj;
            var _nco = _nch.get_each_level_over_nums([244]).slot[244];
            return 1 == _ncm ? (_nco[3] >= 1 && (_ncj.houg += 1 * _nco[3]), _nco[5] >= 1 && (_ncj.houm += 1 * _nco[5]), _nco[7] >= 1 && (_ncj.houg += 1 * _nco[7]), _nco[8] >= 1 && (_ncj.kaih += 1 * _nco[8]), _nco[9] >= 1 && (_ncj.houm += 1 * _nco[9]), _nco[10] >= 1 && (_ncj.houg += 1 * _nco[10])) : 2 == _ncm && (_nco[3] >= 1 && (_ncj.kaih += 1 * _nco[3]), _nco[7] >= 1 && (_ncj.houg += 1 * _nco[7]), _nco[9] >= 1 && (_ncj.houm += 1 * _nco[9]), _nco[10] >= 1 && (_ncj.houg += 1 * _nco[10])), _ncj;
        };
    },
    61977: (_ncp, _ncq, _ncr) => {
        'use strict';
        var _ncs = null;
        defineModule(_ncq);
        Object.defineProperty(_ncq, '__esModule', {
            'value': true
        }), _ncq.getSlot247PersonalEffect = void 0;
        var _nct = _ncr(74496);
        _ncq.getSlot247PersonalEffect = function(_ncu) {
            var _ncv = null,
                _ncw = new _nct.SlotItemEffectModel(),
                _ncx = false,
                _ncy = new _nct.SlotItemEffectModel(),
                _ncz = 0;
            if ('フランス' == _ncu.getCountryName() && (_ncy.houg += 2, _ncy.houm += 2, _ncx = true, _ncz = 1), 0 == _ncx) return _ncw;
            var _nd0 = _ncu.get_slotnums(247);
            if (_ncw.add(_ncy.multiply(_nd0)), 0 == _ncz) return _ncw;
            var _nd1 = _ncu.get_each_level_nums(247),
                _nd2 = 0,
                _nd3 = 0;
            _ncz > 0 && _nd1.forEach(function(_nd4, _nd5) {
                _nd5 >= 4 && (_nd2 += _nd4), _nd5 >= 8 && (_nd3 += _nd4);
            });
            var _nd6 = _nd1[10];
            return 1 == _ncz && (_nd2 >= 1 && (_ncw.houg += 1 * _nd2, _ncw.houm += 1 * _nd2), _nd3 >= 1 && (_ncw.kaih += 1 * _nd3, _ncw.houg += 1 * _nd3, _ncw.houm += 1 * _nd3), _nd6 >= 1 && (_ncw.kaih += 1 * _nd6, _ncw.houm += 1 * _nd6)), _ncw;
        };
    },
    96580: (_nd7, _nd8, _nd9) => {
        'use strict';
        var _nda = null;
        defineModule(_nd8);
        Object.defineProperty(_nd8, '__esModule', {
            'value': true
        }), _nd8.getSlot252PersonalEffect = void 0;
        var _ndb = _nd9(74496);
        _nd8.getSlot252PersonalEffect = function(_ndc) {
            var _ndd = null,
                _nde = new _ndb.SlotItemEffectModel(),
                _ndf = (new _ndb.SlotItemEffectModel(), 0);
            if (78 != _ndc.ctype && 112 != _ndc.ctype || (_ndf = 1), 0 == _ndf) return _nde;
            var _ndg = _ndc.get_each_level_over_nums([252]).slot[252];
            return 1 == _ndf && (_ndg[4] >= 1 && (_nde.kaih += 1 * _ndg[4]), _ndg[6] >= 1 && (_nde.houm += 1 * _ndg[6]), _ndg[7] >= 1 && (_nde.houg += 1 * _ndg[7]), _ndg[8] >= 1 && (_nde.kaih += 1 * _ndg[8]), _ndg[9] >= 1 && (_nde.houm += 1 * _ndg[9]), _ndg[10] >= 1 && (_nde.houg += 1 * _ndg[10])), _nde;
        };
    },
    31797: function(_ndh, _ndi, _ndj) {
        'use strict';
        var _ndk = null;
        var _ndl = this && this.__importDefault || function(_ndm) {
            var _ndn = null;
            return _ndm && _ndm.__esModule ? _ndm : {
                'default': _ndm
            };
        };
        defineModule(_ndi);
        Object.defineProperty(_ndi, '__esModule', {
            'value': true
        }), _ndi.getSlot266PersonalEffect2 = _ndi.getSlot266PersonalEffect = void 0;
        var _ndo = _ndj(74496),
            _ndp = _ndl(_ndj(18622));
        _ndi.getSlot266PersonalEffect = function(_ndq) {
            var _ndr = null,
                _nds = new _ndo.SlotItemEffectModel(),
                _ndt = false;
            if (566 != _ndq.ship_id && 567 != _ndq.ship_id && 568 != _ndq.ship_id && 656 != _ndq.ship_id && 670 != _ndq.ship_id && 915 != _ndq.ship_id && 951 != _ndq.ship_id || (_ndt = true), 0 == _ndt) return _nds;
            var _ndu = _ndq.get_slotnums(266);
            return 30 == _ndq.ctype && (1 == _ndu ? _nds.houg = 1 : _ndu >= 2 && (_nds.houg = 3)), _nds;
        }, _ndi.getSlot266PersonalEffect2 = function(_ndv) {
            var _ndw = null,
                _ndx = new _ndo.SlotItemEffectModel(),
                _ndy = 0,
                _ndz = new _ndo.SlotItemEffectModel();
            if (23 == _ndv.ctype || 18 == _ndv.ctype ? (_ndz.houg = 1, _ndy = 1) : 30 == _ndv.ctype && (_ndz.houg = 1, _ndy = 2), ('しぐれ' == _ndv.yomi || 'ゆきかぜ' == _ndv.yomi || 'いそかぜ' == _ndv.yomi) && (_ndz.kaih = 1), 961 == _ndv.ship_id && (_ndz.houg += 1, _ndz.houm += 1, _ndz.kaih += 1), !_ndz.exists()) return _ndx;
            var _ne0 = _ndv.get_slotnums(266);
            if (_ndx = _ndz.multiply(_ne0), 0 == _ndy) return _ndx;
            for (var _ne1 = 0, _ne2 = 0, _ne3 = _ndv.have_slot_ids(); _ne2 < _ne3.length; _ne2++) {
                var _ne4 = _ne3[_ne2],
                    _ne5 = _ndp.default.model.slot.getMst(_ne4),
                    _ne6 = _ne5.equipType;
                (12 == _ne6 || 13 == _ne6) && _ne5.sakuteki >= 5 && (_ne1 += _ndv.get_slotnums(parseInt(_ne4)));
            }
            return _ne1 > 0 && (1 == _ndy ? (_ndx.houg += 1, _ndx.kaih += 1, _ndx.raig += 3) : 2 == _ndy && (_ndx.houg += 2, _ndx.kaih += 1, _ndx.raig += 3)), _ndx;
        };
    },
    45738: function(_ne7, _ne8, _ne9) {
        'use strict';
        var _nea = null;
        var _neb = this && this.__importDefault || function(_nec) {
            var _ned = null;
            return _nec && _nec.__esModule ? _nec : {
                'default': _nec
            };
        };
        defineModule(_ne8);
        Object.defineProperty(_ne8, '__esModule', {
            'value': true
        }), _ne8.getSlot267PersonalEffect2 = _ne8.getSlot267PersonalEffect = void 0;
        var _nee = _ne9(74496),
            _nef = _neb(_ne9(18622));
        _ne8.getSlot267PersonalEffect = function(_neg) {
            var _neh = null,
                _nei = new _nee.SlotItemEffectModel(),
                _nej = 0,
                _nek = 0;
            if (38 == _neg.ctype || 22 == _neg.ctype) _nej = 2, _nek = 1;
            else {
                if (30 != _neg.ctype) return _nei;
                _nej = 1, _nek = 1;
            }
            var _nel = _neg.get_slotnums(267) + _neg.get_slotnums(366);
            return _nei.houg = _nej * _nel, _nei.kaih = _nek * _nel, _nei;
        }, _ne8.getSlot267PersonalEffect2 = function(_nem) {
            var _nen = null,
                _neo = new _nee.SlotItemEffectModel(),
                _nep = _nem.get_slotnums(267),
                _neq = _nem.get_slotnums(366),
                _ner = _nep + _neq;
            if (566 != _nem.ship_id && 567 != _nem.ship_id && 568 != _nem.ship_id && 656 != _nem.ship_id && 670 != _nem.ship_id && 915 != _nem.ship_id && 951 != _nem.ship_id || (_nep > 0 && (_neo.houg += 1), 1 == _neq ? (_neo.houg += 1, _neo.tyku += 2) : _neq >= 2 && (_neo.houg += 2, _neo.tyku += 4)), 38 != _nem.ctype && 229 != _nem.ship_id && [648, 961].indexOf(_nem.ship_id) < 0) return _neo;
            var _nes = false,
                _net = false,
                _neu = false,
                _nev = false,
                _new = false,
                _nex = false,
                _ney = false,
                _nez = false,
                _nf0 = false,
                _nf1 = false,
                _nf2 = false,
                _nf3 = false,
                _nf4 = false,
                _nf5 = 0,
                _nf6 = 0,
                _nf7 = 0;
            543 == _nem.ship_id ? (_neo.houg = 1 * _ner, _net = true) : 229 == _nem.ship_id ? _neu = true : 542 == _nem.ship_id ? (_neo.houg = 1 * _ner, _nev = true) : 563 == _nem.ship_id ? (_neo.houg = 1 * _ner, _new = true) : 564 == _nem.ship_id ? (_neo.houg = 1 * _ner, _nex = true) : 578 == _nem.ship_id ? (_neo.houg = 1 * _ner, _ney = true) : 569 == _nem.ship_id ? (_neo.houg = 1 * _ner, _nez = true) : 649 == _nem.ship_id ? (_neo.houg = 2 * _ner, _nf1 = true) : 955 == _nem.ship_id || 960 == _nem.ship_id ? (_neo.houg = 2 * _ner, _nf2 = true) : 956 == _nem.ship_id ? (_neo.houg = 2 * _ner, _nf3 = true) : 648 == _nem.ship_id ? (_neo.houg = 2 * _ner, _nf0 = true, _nf5 = 1, _nf6 = 1, _nf7 = 1) : 961 == _nem.ship_id ? (_neo.houg = 2 * _ner, _nes = true, _nf5 = 1, _nf6 = 1, _nf7 = 1) : 981 == _nem.ship_id && (_neo.houg = 1 * _ner, _nf4 = true);
            for (var _nf8 = 0, _nf9 = 0, _nfa = 0, _nfb = _nem.have_slot_ids(); _nfa < _nfb.length; _nfa++) {
                var _nfc = _nfb[_nfa],
                    _nfd = _nef.default.model.slot.getMst(_nfc),
                    _nfe = _nfd.equipType;
                12 != _nfe && 13 != _nfe || (_nfd.sakuteki >= 5 && (_nf8 += _nem.get_slotnums(parseInt(_nfc))), _nfd.taiku >= 2 && (_nf9 += _nem.get_slotnums(parseInt(_nfc))));
            }
            if (_nf8 > 0 && _nep > 0 && ((38 == _nem.ctype || _nf0) && (_neo.houg += 2, _neo.raig += 3, _neo.kaih += 1, 955 == _nem.ship_id || 956 == _nem.ship_id ? _neo.raig -= 1 : 960 == _nem.ship_id && (_neo.raig -= 2)), (_nev || _net || _neu || _new || _nex || _ney || _nez || _nf0 || _nf1 || _nf2 || _nf3 || _nf4) && (_neo.houg += 1, _neo.raig += 3, _neo.kaih += 2)), _neq > 0 && (_nev || _net || _new || _nex || _ney || _neu || _nez || _nf0 || _nf1 || _nes || _nf2 || _nf3 || _nf4)) {
                1 == _neq ? (_neo.tyku += 3, _neo.houg += 1, _neo.houm += 1) : _neq >= 2 && (_neo.tyku += 5, _neo.houg += 3, _neo.houm += 1, 955 == _nem.ship_id && (_neo.houg += 1)), (_nez || _nf0) && (_neo.houg += 1, _neo.tyku += 2), _nf8 > 0 && (_neo.houg += 2, _neo.kaih += 2, _neo.raig += 4, _neo.houm += 2, 960 == _nem.ship_id && (_neo.raig -= 1, _neo.houg += 1)), _nf9 > 0 && (_neo.houg += 1, _neo.kaih += 3, _neo.tyku += 5, _neo.houm += 1);
                var _nff = _nem.get_each_level_nums(366),
                    _nfg = 0,
                    _nfh = 0;
                _nff.forEach(function(_nfi, _nfj) {
                    _nfj >= 5 && (_nfg += _nfi), _nfj >= 8 && (_nfh += _nfi);
                }), _nfg >= 1 && (_neo.houm += 1 * _nfg), _nfh >= 1 && (_neo.houg += 1 * _nfh);
                var _nfk = _nff[10];
                _nfk >= 1 && (_neo.houm += 1 * _nfk);
            }
            var _nfl = _nem.get_slotnums(129),
                _nfm = _nem.get_slotnums(74),
                _nfn = _nem.get_slotnums(412);
            return _nf5 > 0 && _nfl > 0 && 1 == _nf5 && (_neo.houg += 2, _neo.kaih += 3, _neo.tyku += 2), _nf7 > 0 && _nfn > 0 && 1 == _nf7 && (_neo.houg += 2, _neo.kaih += 3, _neo.tyku += 2), _nf6 > 0 && _nfm > 0 && 1 == _nf6 && (_neo.houg += 3, _neo.kaih -= 3), _neo;
        };
    },
    23934: (_nfo, _nfp, _nfq) => {
        'use strict';
        var _nfr = null;
        defineModule(_nfp);
        Object.defineProperty(_nfp, '__esModule', {
            'value': true
        }), _nfp.getSlot271PersonalEffect = void 0;
        var _nfs = _nfq(74496);
        _nfp.getSlot271PersonalEffect = function(_nft) {
            var _nfu = null,
                _nfv = new _nfs.SlotItemEffectModel(),
                _nfw = 0;
            if (508 != _nft.ship_id && 509 != _nft.ship_id && 888 != _nft.ship_id && 883 != _nft.ship_id || (_nfw = 1), 0 == _nfw) return _nfv;
            var _nfx = _nft.get_each_level_nums(271),
                _nfy = 0,
                _nfz = 0,
                _ng0 = 0,
                _ng1 = _nfx[10];
            return _nfw > 0 && _nfx.forEach(function(_ng2, _ng3) {
                _ng3 >= 4 && (_nfy += _ng2), _ng3 >= 6 && (_nfz += _ng2), _ng3 >= 8 && (_ng0 += _ng2);
            }), 1 == _nfw && (_nfy >= 1 && (_nfv.houg += 1 * _nfy), _nfz >= 1 && (_nfv.tyku += 2 * _nfz), _ng0 >= 1 && (_nfv.kaih += 2 * _ng0), _ng1 >= 1 && (_nfv.houg += 1 * _ng1)), _nfv;
        };
    },
    17712: function(_ng4, _ng5, _ng6) {
        'use strict';
        var _ng7 = null;
        var _ng8 = this && this.__importDefault || function(_ng9) {
            var _nga = null;
            return _ng9 && _ng9.__esModule ? _ng9 : {
                'default': _ng9
            };
        };
        defineModule(_ng5);
        Object.defineProperty(_ng5, '__esModule', {
            'value': true
        }), _ng5.getSlot275PersonalEffect = void 0;
        var _ngb = _ng6(74496),
            _ngc = _ng8(_ng6(18622));
        _ng5.getSlot275PersonalEffect = function(_ngd) {
            var _nge = null,
                _ngf = new _ngb.SlotItemEffectModel(),
                _ngg = false,
                _ngh = new _ngb.SlotItemEffectModel(),
                _ngi = 0,
                _ngj = 0;
            if (894 != _ngd.ship_id && 899 != _ngd.ship_id || (_ngh.houg += 1, _ngh.tyku += 3, _ngh.kaih += 2, _ngg = true, _ngj = 1, _ngi = 1), 0 == _ngg) return _ngf;
            var _ngk = _ngd.get_slotnums(275);
            _ngf.add(_ngh.multiply(_ngk));
            var _ngl = 0;
            if (_ngi > 0)
                for (var _ngm = 0, _ngn = _ngd.have_slot_ids(); _ngm < _ngn.length; _ngm++) {
                    var _ngo = _ngn[_ngm],
                        _ngp = _ngc.default.model.slot.getMst(_ngo),
                        _ngq = _ngp.equipType;
                    12 != _ngq && 13 != _ngq || (_ngp.sakuteki >= 5 && _ngd.get_slotnums(parseInt(_ngo)), _ngp.taiku >= 2 && (_ngl += _ngd.get_slotnums(parseInt(_ngo))));
                }
            if (1 == _ngi && _ngl > 0 && (_ngf.tyku += 3, _ngf.kaih += 3), 0 == _ngj) return _ngf;
            var _ngr = _ngd.get_each_level_nums(275),
                _ngs = 0,
                _ngt = _ngr[10];
            return _ngj > 0 && _ngr.forEach(function(_ngu, _ngv) {
                _ngv >= 7 && (_ngs += _ngu);
            }), 1 == _ngj && (_ngs > 0 && (_ngf.tyku += 1 * _ngs, _ngf.kaih += 1 * _ngs), _ngt > 0 && (_ngf.houg += 1 * _ngt, _ngf.tyku += 1 * _ngt, _ngf.houm += 1 * _ngt)), _ngf;
        };
    },
    93733: (_ngw, _ngx, _ngy) => {
        'use strict';
        var _ngz = null;
        defineModule(_ngx);
        Object.defineProperty(_ngx, '__esModule', {
            'value': true
        }), _ngx.getSlot277PersonalEffect = void 0;
        var _nh0 = _ngy(74496);
        _ngx.getSlot277PersonalEffect = function(_nh1) {
            var _nh2 = null,
                _nh3 = new _nh0.SlotItemEffectModel(),
                _nh4 = false,
                _nh5 = new _nh0.SlotItemEffectModel();
            if ('アメリカ' != _nh1.getCountryName() && 67 != _nh1.ctype && 78 != _nh1.ctype && 82 != _nh1.ctype && 88 != _nh1.ctype && 108 != _nh1.ctype && 112 != _nh1.ctype || (_nh5.houg += 1, _nh5.kaih += 1, _nh4 = true), 83 == _nh1.ctype && (_nh5.houg += 1, _nh5.kaih += 1, _nh5.tyku += 1, _nh4 = true), 0 == _nh4) return _nh3;
            var _nh6 = _nh1.get_slotnums(277);
            return _nh3.add(_nh5.multiply(_nh6)), _nh3;
        };
    },
    34718: (_nh7, _nh8, _nh9) => {
        'use strict';
        var _nha = null;
        defineModule(_nh8);
        Object.defineProperty(_nh8, '__esModule', {
            'value': true
        }), _nh8.getSlot278PersonalEffect = void 0;
        var _nhb = _nh9(74496);
        _nh8.getSlot278PersonalEffect = function(_nhc) {
            var _nhd = null,
                _nhe = new _nhb.SlotItemEffectModel();
            return 'アメリカ' == _nhc.getCountryName() ? (_nhe.tyku += 1, _nhe.kaih += 3, _nhe.saku += 1) : 67 == _nhc.ctype || 78 == _nhc.ctype || 82 == _nhc.ctype || 88 == _nhc.ctype || 108 == _nhc.ctype || 112 == _nhc.ctype ? (_nhe.tyku += 1, _nhe.kaih += 2) : 96 == _nhc.ctype && (_nhe.tyku += 1, _nhe.kaih += 1), _nhe;
        };
    },
    69245: (_nhf, _nhg, _nhh) => {
        'use strict';
        var _nhi = null;
        defineModule(_nhg);
        Object.defineProperty(_nhg, '__esModule', {
            'value': true
        }), _nhg.getSlot279PersonalEffect = void 0;
        var _nhj = _nhh(74496);
        _nhg.getSlot279PersonalEffect = function(_nhk) {
            var _nhl = null,
                _nhm = new _nhj.SlotItemEffectModel();
            return 'アメリカ' == _nhk.getCountryName() ? (_nhm.houg += 2, _nhm.tyku += 2, _nhm.kaih += 3, _nhm.saku += 2) : 67 == _nhk.ctype || 78 == _nhk.ctype || 82 == _nhk.ctype || 88 == _nhk.ctype || 108 == _nhk.ctype || 112 == _nhk.ctype ? (_nhm.houg += 1, _nhm.tyku += 1, _nhm.kaih += 2, _nhm.saku += 1) : 96 == _nhk.ctype && (_nhm.houg += 1, _nhm.tyku += 1, _nhm.kaih += 1), _nhm;
        };
    },
    18478: (_nhn, _nho, _nhp) => {
        'use strict';
        var _nhq = null;
        defineModule(_nho);
        Object.defineProperty(_nho, '__esModule', {
            'value': true
        }), _nho.getSlot282PersonalEffect = void 0;
        var _nhr = _nhp(74496);
        _nho.getSlot282PersonalEffect = function(_nhs) {
            var _nht = null,
                _nhu = new _nhr.SlotItemEffectModel(),
                _nhv = false,
                _nhw = false;
            147 != _nhs.ship_id && 73 != _nhs.ctype && 81 != _nhs.ctype || (_nhv = true), 'ゆうばり' == _nhs.yomi && (_nhw = true);
            var _nhx = new _nhr.SlotItemEffectModel();
            if ((_nhv || _nhw) && (_nhx.houg += 2, _nhx.souk += 1), !_nhx.exists()) return _nhu;
            var _nhy = _nhs.get_slotnums(282);
            return _nhu = _nhx.multiply(_nhy);
        };
    },
    2899: (_nhz, _ni0, _ni1) => {
        'use strict';
        var _ni2 = null;
        defineModule(_ni0);
        Object.defineProperty(_ni0, '__esModule', {
            'value': true
        }), _ni0.getSlot283PersonalEffect = void 0;
        var _ni3 = _ni1(74496);
        _ni0.getSlot283PersonalEffect = function(_ni4) {
            var _ni5 = null,
                _ni6 = new _ni3.SlotItemEffectModel(),
                _ni7 = false;
            147 != _ni4.ship_id && 73 != _ni4.ctype && 81 != _ni4.ctype || (_ni7 = true);
            var _ni8 = new _ni3.SlotItemEffectModel();
            if (_ni7 && (_ni8.raig += 3, _ni8.houg += 1, _ni8.souk += 1), !_ni8.exists()) return _ni6;
            var _ni9 = _ni4.get_slotnums(283);
            return _ni6 = _ni8.multiply(_ni9);
        };
    },
    57120: (_nia, _nib, _nic) => {
        'use strict';
        var _nid = null;
        defineModule(_nib);
        Object.defineProperty(_nib, '__esModule', {
            'value': true
        }), _nib.getSlot285PersonalEffect = void 0;
        var _nie = _nic(74496);
        _nib.getSlot285PersonalEffect = function(_nif) {
            var _nig = null,
                _nih = new _nie.SlotItemEffectModel(),
                _nii = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_nif.ship_id) >= 0 && (_nii = true), 0 == _nii) return _nih;
            var _nij = _nif.get_each_level_nums(285),
                _nik = _nif.get_slotnums(285);
            _nik > 2 && (_nik = 2), _nih.raig = 2 * _nik, _nih.kaih = 1 * _nik;
            var _nil = _nij[10];
            1 == _nil && (_nih.houg += 1, _nih.raig += 1), _nil >= 2 && (_nih.houg += 2, _nih.raig += 1), _nil >= 3 && (_nih.raig += 3);
            var _nim = _nif.get_slotnums(285);
            return 903 == _nif.ship_id ? (_nim >= 2 && (_nih.raig += 2), _nim >= 3 && (_nih.raig += 2)) : 908 != _nif.ship_id && 959 != _nif.ship_id || (_nim >= 2 && (_nih.raig += 1), _nim >= 3 && (_nih.raig += 1)), _nih;
        };
    },
    74985: function(_nin, _nio, _nip) {
        'use strict';
        var _niq = null;
        var _nir = this && this.__importDefault || function(_nis) {
            var _nit = null;
            return _nis && _nis.__esModule ? _nis : {
                'default': _nis
            };
        };
        defineModule(_nio);
        Object.defineProperty(_nio, '__esModule', {
            'value': true
        }), _nio.getSlot286PersonalEffect3 = _nio.getSlot286PersonalEffect2 = _nio.getSlot286PersonalEffect = void 0;
        var _niu = _nip(74496),
            _niv = _nir(_nip(18622));
        _nio.getSlot286PersonalEffect = function(_niw) {
            var _nix = null,
                _niy = new _niu.SlotItemEffectModel(),
                _niz = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975, 956, 981].indexOf(_niw.ship_id) >= 0 && (_niz = true), 0 == _niz) return _niy;
            var _nj0 = _niw.get_each_level_nums(286),
                _nj1 = _niw.get_slotnums(286);
            _nj1 > 2 && (_nj1 = 2), _niy.raig = 2 * _nj1, _niy.kaih = 1 * _nj1;
            var _nj2 = _nj0[10];
            if (1 == _nj2 ? _niy.houg = _niy.houg + 1 : _nj2 >= 2 && (_niy.houg = _niy.houg + 2), 30 == _niw.ctype || 961 == _niw.ship_id) {
                var _nj3 = _nj0[5] + _nj0[6] + _nj0[7] + _nj0[8] + _nj0[9] + _nj0[10];
                1 == _nj3 ? _niy.raig = _niy.raig + 1 : _nj3 >= 2 && (_niy.raig = _niy.raig + 2);
            }
            return _niy;
        }, _nio.getSlot286PersonalEffect2 = function(_nj4) {
            var _nj5 = null,
                _nj6 = new _niu.SlotItemEffectModel(),
                _nj7 = false,
                _nj8 = 0;
            if ('たけ' == _nj4.yomi && (_nj7 = true, _nj8 = 1), 0 == _nj7) return _nj6;
            var _nj9 = _nj4.get_each_level_nums(286),
                _nja = 0;
            return _nj8 > 0 && _nj9.forEach(function(_njb, _njc) {
                _njc >= 7 && (_nja += _njb);
            }), 'たけ' == _nj4.yomi && (_nj6.raig += 7, _nj6.kaih += 2, _nja >= 1 && (_nj6.raig += 2), _nj9[10] >= 1 && (_nj6.raig += 2)), _nj6;
        }, _nio.getSlot286PersonalEffect3 = function(_njd) {
            var _nje = null,
                _njf = new _niu.SlotItemEffectModel(),
                _njg = false,
                _njh = new _niu.SlotItemEffectModel(),
                _nji = 0;
            if (662 != _njd.ship_id && 663 != _njd.ship_id && 668 != _njd.ship_id || (_njh.raig += 2, _njg = true, _nji = 1), 0 == _njg) return _njf;
            var _njj = _njd.get_slotnums(286);
            _njf.add(_njh.multiply(_njj));
            for (var _njk = 0, _njl = 0, _njm = _njd.have_slot_ids(); _njl < _njm.length; _njl++) {
                var _njn = _njm[_njl],
                    _njo = _niv.default.model.slot.getMst(_njn),
                    _njp = _njo.equipType;
                12 != _njp && 13 != _njp || (_njo.sakuteki >= 5 && (_njk += _njd.get_slotnums(parseInt(_njn))), _njo.taiku >= 2 && _njd.get_slotnums(parseInt(_njn)));
            }
            return _njk >= 1 && 1 == _nji && (_njf.raig += 3, _njf.kaih += 2), _njf;
        };
    },
    9234: (_njq, _njr, _njs) => {
        'use strict';
        var _njt = null;
        defineModule(_njr);
        Object.defineProperty(_njr, '__esModule', {
            'value': true
        }), _njr.getSlot287PersonalEffect = void 0;
        var _nju = _njs(74496);
        _njr.getSlot287PersonalEffect = function(_njv) {
            var _njw = null,
                _njx = new _nju.SlotItemEffectModel(),
                _njy = new _nju.SlotItemEffectModel(),
                _njz = false;
            if (488 == _njv.ship_id || 141 == _njv.ship_id || 160 == _njv.ship_id || 624 == _njv.ship_id || 656 == _njv.ship_id ? (_njy.tais = 1, _njy.kaih = 1, _njz = true) : 662 != _njv.ship_id && 961 != _njv.ship_id || (_njy.tais = 3, _njz = true), 0 == _njz) return _njx;
            var _nk0 = _njv.get_slotnums(287);
            return _njx = _njy.multiply(_nk0);
        };
    },
    30802: (_nk1, _nk2, _nk3) => {
        'use strict';
        var _nk4 = null;
        defineModule(_nk2);
        Object.defineProperty(_nk2, '__esModule', {
            'value': true
        }), _nk2.getSlot288PersonalEffect = void 0;
        var _nk5 = _nk3(74496);
        _nk2.getSlot288PersonalEffect = function(_nk6) {
            var _nk7 = null,
                _nk8 = new _nk5.SlotItemEffectModel(),
                _nk9 = new _nk5.SlotItemEffectModel(),
                _nka = false;
            if (488 == _nk6.ship_id || 141 == _nk6.ship_id || 160 == _nk6.ship_id || 656 == _nk6.ship_id ? (_nk9.tais = 2, _nk9.kaih = 1, _nka = true) : 624 == _nk6.ship_id ? (_nk9.houg = 1, _nk9.tais = 3, _nk9.kaih = 2, _nka = true) : 662 != _nk6.ship_id && 961 != _nk6.ship_id || (_nk9.tais = 4, _nk9.kaih = 1, _nka = true), 0 == _nka) return _nk8;
            var _nkb = _nk6.get_slotnums(288);
            return _nk8 = _nk9.multiply(_nkb);
        };
    },
    97002: function(_nkc, _nkd, _nke) {
        'use strict';
        var _nkf = null;
        var _nkg = this && this.__importDefault || function(_nkh) {
            var _nki = null;
            return _nkh && _nkh.__esModule ? _nkh : {
                'default': _nkh
            };
        };
        defineModule(_nkd);
        Object.defineProperty(_nkd, '__esModule', {
            'value': true
        }), _nkd.getSlot289PersonalEffect = void 0;
        var _nkj = _nke(74496),
            _nkk = _nkg(_nke(18622));
        _nkd.getSlot289PersonalEffect = function(_nkl) {
            var _nkm = null,
                _nkn = new _nkj.SlotItemEffectModel(),
                _nko = {
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
                _nkp = 0,
                _nkq = new _nkj.SlotItemEffectModel();
            if (149 == _nkl.ship_id || 591 == _nkl.ship_id) _nkq.houg = 2, _nkq.tyku = 1, _nkp = 1;
            else {
                if (150 == _nkl.ship_id || 592 == _nkl.ship_id) _nkq.houg = 1;
                else {
                    if (152 == _nkl.ship_id || 694 == _nkl.ship_id) _nkq.houg = 1;
                    else {
                        if (151 != _nkl.ship_id && 593 != _nkl.ship_id && 954 != _nkl.ship_id) return _nkn;
                        _nkq.houg = 2, _nkq.tyku = 2, _nkq.kaih = 2, _nkp = 1;
                    }
                }
            }
            var _nkr = _nkl.get_slotnums(289);
            if (_nkn = _nkq.multiply(_nkr), _nko[_nkl.ship_id]) {
                var _nks = _nkl.get_each_level_nums(289),
                    _nkt = new Array();
                _nks.forEach(function(_nku, _nkv) {
                    var _nkw = null;
                    for (var _nkx = 1; _nkx <= _nkl.SLOT_LEVEL_MAX; _nkx++) _nkv >= _nkx && (null == _nkt[_nkx] && (_nkt[_nkx] = 0), _nkt[_nkx] += _nku);
                });
                var _nky = _nko[_nkl.ship_id];
                1 == _nky ? (_nkt[1] >= 1 && (_nkn.kaih += 1 * _nkt[1]), _nkt[3] >= 1 && (_nkn.tyku = _nkn.tyku + 1 * _nkt[3]), _nkt[5] >= 1 && (_nkn.houg = _nkn.houg + 1 * _nkt[5]), _nkt[7] >= 1 && (_nkn.kaih += 1 * _nkt[7]), _nkt[8] >= 1 && (_nkn.tyku += 1 * _nkt[8]), _nkt[9] >= 1 && (_nkn.houg += 1 * _nkt[9]), _nkt[10] >= 1 && (_nkn.kaih += 1 * _nkt[10])) : 2 == _nky ? (_nkt[4] >= 1 && (_nkn.tyku += 1 * _nkt[4]), _nkt[6] >= 1 && (_nkn.kaih += 1 * _nkt[6]), _nkt[8] >= 1 && (_nkn.houg += 1 * _nkt[8]), _nkt[10] >= 1 && (_nkn.kaih += 1 * _nkt[10])) : 3 == _nky && (_nkt[7] >= 1 && (_nkn.tyku += 1 * _nkt[7]), _nkt[9] >= 1 && (_nkn.houg += 1 * _nkt[9]), _nkt[10] >= 1 && (_nkn.kaih += 1 * _nkt[10]));
            }
            if (0 == _nkp) return _nkn;
            for (var _nkz = 0, _nl0 = 0, _nl1 = _nkl.have_slot_ids(); _nl0 < _nl1.length; _nl0++) {
                var _nl2 = _nl1[_nl0],
                    _nl3 = _nkk.default.model.slot.getMst(_nl2),
                    _nl4 = _nl3.equipType;
                (12 == _nl4 || 13 == _nl4) && _nl3.sakuteki >= 5 && (_nkz += _nkl.get_slotnums(parseInt(_nl2)));
            }
            return _nkz > 0 && (_nkn.houg += 2, _nkn.kaih += 2), _nkn;
        };
    },
    16748: function(_nl5, _nl6, _nl7) {
        'use strict';
        var _nl8 = null;
        var _nl9 = this && this.__importDefault || function(_nla) {
            var _nlb = null;
            return _nla && _nla.__esModule ? _nla : {
                'default': _nla
            };
        };
        defineModule(_nl6);
        Object.defineProperty(_nl6, '__esModule', {
            'value': true
        }), _nl6.getSlot290PersonalEffect = void 0;
        var _nlc = _nl7(74496),
            _nld = _nl9(_nl7(18622));
        _nl6.getSlot290PersonalEffect = function(_nle) {
            var _nlf = null,
                _nlg = new _nlc.SlotItemEffectModel(),
                _nlh = 0,
                _nli = new _nlc.SlotItemEffectModel();
            if (411 == _nle.ship_id) _nli.houg = 1;
            else {
                if (412 == _nle.ship_id) _nli.houg = 1;
                else {
                    if (82 == _nle.ship_id) _nli.houg = 2, _nli.tyku = 2, _nli.kaih = 1, _nlh = 1;
                    else {
                        if (553 == _nle.ship_id) _nli.houg = 3, _nli.tyku = 2, _nli.kaih = 1, _nli.houm = 3, _nlh = 1;
                        else {
                            if (88 == _nle.ship_id) _nli.houg = 2, _nli.tyku = 2, _nli.kaih = 1, _nlh = 1;
                            else {
                                if (554 != _nle.ship_id) return _nlg;
                                _nli.houg = 3, _nli.tyku = 2, _nli.kaih = 2, _nli.houm = 3, _nlh = 1;
                            }
                        }
                    }
                }
            }
            var _nlj = _nle.get_slotnums(290);
            if (_nlg = _nli.multiply(_nlj), 0 == _nlh) return _nlg;
            for (var _nlk = 0, _nll = 0, _nlm = _nle.have_slot_ids(); _nll < _nlm.length; _nll++) {
                var _nln = _nlm[_nll],
                    _nlo = _nld.default.model.slot.getMst(_nln),
                    _nlp = _nlo.equipType;
                (12 == _nlp || 13 == _nlp) && _nlo.taiku >= 2 && (_nlk += _nle.get_slotnums(parseInt(_nln)));
            }
            return _nlk > 0 && (_nlg.tyku += 2, _nlg.kaih += 3), _nlg;
        };
    },
    53618: (_nlq, _nlr, _nls) => {
        'use strict';
        var _nlt = null;
        defineModule(_nlr);
        Object.defineProperty(_nlr, '__esModule', {
            'value': true
        }), _nlr.getSlot291PersonalEffect = void 0;
        var _nlu = _nls(74496);
        _nlr.getSlot291PersonalEffect = function(_nlv) {
            var _nlw = null,
                _nlx = new _nlu.SlotItemEffectModel(),
                _nly = new _nlu.SlotItemEffectModel();
            if (553 == _nlv.ship_id) _nly.houg = 6, _nly.kaih = 1;
            else {
                if (554 != _nlv.ship_id) return _nlx;
                _nly.houg = 6, _nly.kaih = 1;
            }
            var _nlz = _nlv.get_slotnums(291);
            return _nlx = _nly.multiply(_nlz);
        };
    },
    72573: (_nm0, _nm1, _nm2) => {
        'use strict';
        var _nm3 = null;
        defineModule(_nm1);
        Object.defineProperty(_nm1, '__esModule', {
            'value': true
        }), _nm1.getSlot292PersonalEffect = void 0;
        var _nm4 = _nm2(74496);
        _nm1.getSlot292PersonalEffect = function(_nm5) {
            var _nm6 = null,
                _nm7 = new _nm4.SlotItemEffectModel(),
                _nm8 = new _nm4.SlotItemEffectModel();
            if (553 == _nm5.ship_id) _nm8.houg = 8, _nm8.kaih = 2, _nm8.tyku = 1;
            else {
                if (554 != _nm5.ship_id) return _nm7;
                _nm8.houg = 8, _nm8.kaih = 2, _nm8.tyku = 1;
            }
            var _nm9 = _nm5.get_slotnums(292);
            return _nm7 = _nm8.multiply(_nm9);
        };
    },
    8955: function(_nma, _nmb, _nmc) {
        'use strict';
        var _nmd = null;
        var _nme = this && this.__importDefault || function(_nmf) {
            var _nmg = null;
            return _nmf && _nmf.__esModule ? _nmf : {
                'default': _nmf
            };
        };
        defineModule(_nmb);
        Object.defineProperty(_nmb, '__esModule', {
            'value': true
        }), _nmb.getSlot293PersonalEffect = void 0;
        var _nmh = _nmc(74496),
            _nmi = _nme(_nmc(18622));
        _nmb.getSlot293PersonalEffect = function(_nmj) {
            var _nmk = null,
                _nml = new _nmh.SlotItemEffectModel(),
                _nmm = new _nmh.SlotItemEffectModel(),
                _nmn = 0;
            if (66 == _nmj.ctype || 28 == _nmj.ctype) _nmm.houg = 2, _nmm.tyku = 1, _nmm.kaih = 3, _nmn = 1;
            else {
                if (74 != _nmj.ctype && 77 != _nmj.ctype) return _nml;
                _nmm.houg = 1, _nmm.tyku = 1, _nmm.kaih = 2, _nmn = 2;
            }
            var _nmo = _nmj.get_slotnums(293);
            _nml = _nmm.multiply(_nmo);
            for (var _nmp = 0, _nmq = 0, _nmr = _nmj.have_slot_ids(); _nmq < _nmr.length; _nmq++) {
                var _nms = _nmr[_nmq],
                    _nmt = _nmi.default.model.slot.getMst(_nms),
                    _nmu = _nmt.equipType;
                (12 == _nmu || 13 == _nmu) && _nmt.sakuteki >= 5 && (_nmp += _nmj.get_slotnums(parseInt(_nms)));
            }
            var _nmv = _nmj.get_slotnums(174);
            return 1 == _nmn ? (_nmp > 0 && (_nml.houg += 2, _nml.kaih += 3, _nml.raig += 1), 1 == _nmv ? (_nml.houg += 2, _nml.raig += 4) : _nmv >= 2 && (_nml.houg += 3, _nml.raig += 7)) : 2 == _nmn && _nmp > 0 && (_nml.houg += 2, _nml.kaih += 3, _nml.tais += 1), _nml;
        };
    },
    98947: function(_nmw, _nmx, _nmy) {
        'use strict';
        var _nmz = null;
        var _nn0 = this && this.__importDefault || function(_nn1) {
            var _nn2 = null;
            return _nn1 && _nn1.__esModule ? _nn1 : {
                'default': _nn1
            };
        };
        defineModule(_nmx);
        Object.defineProperty(_nmx, '__esModule', {
            'value': true
        }), _nmx.getSlot294PersonalEffect = void 0;
        var _nn3 = _nmy(74496),
            _nn4 = _nn0(_nmy(18622));
        _nmx.getSlot294PersonalEffect = function(_nn5) {
            var _nn6 = null,
                _nn7 = new _nn3.SlotItemEffectModel(),
                _nn8 = new _nn3.SlotItemEffectModel(),
                _nn9 = 0,
                _nna = _nn5.get_slotnums(294);
            if (12 != _nn5.ctype && 1 != _nn5.ctype && 5 != _nn5.ctype) return _nn7;
            _nn8.houg = 1, 959 == _nn5.ship_id && (_nn8.houg += 1, _nna >= 2 && (_nn7.houg += 2), _nna >= 3 && (_nn7.houg += 3), _nn9 = 1), _nn7.add(_nn8.multiply(_nna));
            for (var _nnb = 0, _nnc = 0, _nnd = _nn5.have_slot_ids(); _nnc < _nnd.length; _nnc++) {
                var _nne = _nnd[_nnc],
                    _nnf = _nn4.default.model.slot.getMst(_nne),
                    _nng = _nnf.equipType;
                (12 == _nng || 13 == _nng) && _nnf.sakuteki >= 5 && (_nnb += _nn5.get_slotnums(parseInt(_nne)));
            }
            var _nnh = _nn5.get_slotnums(13),
                _nni = _nn5.get_slotnums(125),
                _nnj = _nn5.get_slotnums(285),
                _nnk = _nnh + _nni + _nnj;
            if (_nnb > 0 && (_nn7.houg += 3, _nn7.kaih += 2, _nn7.raig += 1), 1 == _nnk ? (_nn7.houg += 1, _nn7.raig += 3) : _nnk >= 2 && (_nn7.houg += 2, _nn7.raig += 5), _nnj >= 1 && (_nn7.raig += 1), 0 == _nn9) return _nn7;
            var _nnl = _nn5.get_each_level_nums(294),
                _nnm = [];
            return _nn9 > 0 && _nnl.forEach(function(_nnn, _nno) {
                var _nnp = null;
                for (var _nnq = 1; _nnq <= _nn5.SLOT_LEVEL_MAX; _nnq++) null == _nnm[_nnq] && (_nnm[_nnq] = 0), _nno >= _nnq && (_nnm[_nnq] += _nnn);
            }), 1 == _nn9 && (_nnm[6] >= 1 && (_nn7.houm += 4 * _nnm[6]), _nnm[7] >= 1 && (_nn7.houg = _nn7.houg + 6 * _nnm[7]), _nnm[8] >= 1 && (_nn7.houg = _nn7.houg + 1 * _nnm[8]), _nnm[9] >= 1 && (_nn7.houg = _nn7.houg + 1 * _nnm[9]), _nnm[10] >= 1 && (_nn7.houg += 1 * _nnm[10])), _nn7;
        };
    },
    44726: function(_nnr, _nns, _nnt) {
        'use strict';
        var _nnu = null;
        var _nnv = this && this.__importDefault || function(_nnw) {
            var _nnx = null;
            return _nnw && _nnw.__esModule ? _nnw : {
                'default': _nnw
            };
        };
        defineModule(_nns);
        Object.defineProperty(_nns, '__esModule', {
            'value': true
        }), _nns.getSlot295PersonalEffect = void 0;
        var _nny = _nnt(74496),
            _nnz = _nnv(_nnt(18622));
        _nns.getSlot295PersonalEffect = function(_no0) {
            var _no1 = null,
                _no2 = new _nny.SlotItemEffectModel(),
                _no3 = new _nny.SlotItemEffectModel(),
                _no4 = _no0.get_slotnums(295);
            if (12 != _no0.ctype && 1 != _no0.ctype && 5 != _no0.ctype) return _no2;
            _no3.houg = 2, _no3.tyku = 2, 666 == _no0.ship_id ? (_no3.houg += 1, _no3.tyku += 1, _no3.tais += 1) : 959 == _no0.ship_id && (_no3.houg += 2, _no4 >= 2 && (_no2.houg += 2), _no4 >= 3 && (_no2.houg += 3)), _no2.add(_no3.multiply(_no4));
            for (var _no5 = 0, _no6 = 0, _no7 = 0, _no8 = _no0.have_slot_ids(); _no7 < _no8.length; _no7++) {
                var _no9 = _no8[_no7],
                    _noa = _nnz.default.model.slot.getMst(_no9),
                    _nob = _noa.equipType;
                12 != _nob && 13 != _nob || (_noa.sakuteki >= 5 && (_no5 += _no0.get_slotnums(parseInt(_no9))), _noa.taiku >= 2 && (_no6 += _no0.get_slotnums(parseInt(_no9))));
            }
            var _noc = _no0.get_slotnums(13),
                _nod = _no0.get_slotnums(125),
                _noe = _no0.get_slotnums(285),
                _nof = _noc + _nod + _noe;
            return _no5 > 0 && (_no2.houg += 3, _no2.kaih += 2, _no2.raig += 1), 1 == _nof ? (_no2.houg += 1, _no2.raig += 3) : _nof >= 2 && (_no2.houg += 2, _no2.raig += 5), _noe >= 1 && (_no2.raig += 1), _no6 > 0 && (_no2.tyku += 6), _no2;
        };
    },
    93065: function(_nog, _noh, _noi) {
        'use strict';
        var _noj = null;
        var _nok = this && this.__importDefault || function(_nol) {
            var _nom = null;
            return _nol && _nol.__esModule ? _nol : {
                'default': _nol
            };
        };
        defineModule(_noh);
        Object.defineProperty(_noh, '__esModule', {
            'value': true
        }), _noh.getSlot296PersonalEffect = void 0;
        var _non = _noi(74496),
            _noo = _nok(_noi(18622));
        _noh.getSlot296PersonalEffect = function(_nop) {
            var _noq = null,
                _nor = new _non.SlotItemEffectModel(),
                _nos = new _non.SlotItemEffectModel();
            1 != _nop.ctype && 5 != _nop.ctype && 10 != _nop.ctype && 23 != _nop.ctype || (_nos.houg += 1), 10 != _nop.ctype && 23 != _nop.ctype || (_nos.kaih += 1), 145 == _nop.ship_id || 961 == _nop.ship_id ? (_nos.houg += 1, _nos.tyku += 1) : 144 == _nop.ship_id ? (_nos.houg += 1, _nos.raig += 1) : 469 == _nop.ship_id || 588 == _nop.ship_id || 667 == _nop.ship_id || 587 == _nop.ship_id || 242 == _nop.ship_id ? _nos.kaih += 1 : 497 == _nop.ship_id ? (_nos.houg += 1, _nos.kaih += 1) : 244 == _nop.ship_id ? _nos.kaih += 1 : 498 == _nop.ship_id || 975 == _nop.ship_id ? (_nos.tyku += 1, _nos.kaih += 1) : 627 == _nop.ship_id ? (_nos.houg += 2, _nos.raig += 1) : 903 != _nop.ship_id && 908 != _nop.ship_id || (_nos.houg += 3);
            var _not = true;
            if (_nos.exists() || (_not = false), 0 == _not) return _nor;
            var _nou = _nop.get_slotnums(296);
            _nor = _nos.multiply(_nou);
            var _nov = 0;
            if (1 != _nop.ctype && 5 != _nop.ctype && 10 != _nop.ctype || (_nov = 1), 23 == _nop.ctype && (_nov = 2), 0 == _nov) return _nor;
            for (var _now = 0, _nox = 0, _noy = 0, _noz = _nop.have_slot_ids(); _noy < _noz.length; _noy++) {
                var _np0 = _noz[_noy],
                    _np1 = _noo.default.model.slot.getMst(_np0),
                    _np2 = _np1.equipType;
                12 != _np2 && 13 != _np2 || (_np1.sakuteki >= 5 && (_now += _nop.get_slotnums(parseInt(_np0))), _np1.taiku >= 2 && (_nox += _nop.get_slotnums(parseInt(_np0))));
            }
            return _now > 0 && (1 == _nov ? (_nor.houg += 1, _nor.kaih += 2, _nor.raig += 2) : 2 == _nov && (_nor.houg += 1, _nor.kaih += 2, _nor.raig += 3)), _nop.get_slotnums(285) + _nop.get_slotnums(125) >= 1 && 1 == _nov && (_nor.houg += 1, _nor.raig += 3), _nop.get_slotnums(15) + _nop.get_slotnums(286) >= 1 && 2 == _nov && (_nor.houg += 1, _nor.raig += 3), _nox > 0 && (1 == _nov ? _nor.tyku += 5 : 2 == _nov && (_nor.tyku += 6)), _nor;
        };
    },
    85767: (_np3, _np4, _np5) => {
        'use strict';
        var _np6 = null;
        defineModule(_np4);
        Object.defineProperty(_np4, '__esModule', {
            'value': true
        }), _np4.getSlot297PersonalEffect = void 0;
        var _np7 = _np5(74496);
        _np4.getSlot297PersonalEffect = function(_np8) {
            var _np9 = null,
                _npa = new _np7.SlotItemEffectModel(),
                _npb = new _np7.SlotItemEffectModel();
            if (12 == _np8.ctype) _npb.kaih = 2;
            else {
                if (1 != _np8.ctype && 5 != _np8.ctype) return _npa;
                _npb.kaih = 1;
            }
            var _npc = _np8.get_slotnums(297);
            return _npa = _npb.multiply(_npc);
        };
    },
    38314: (_npd, _npe, _npf) => {
        'use strict';
        var _npg = null;
        defineModule(_npe);
        Object.defineProperty(_npe, '__esModule', {
            'value': true
        }), _npe.getSlot301PersonalEffect = void 0;
        var _nph = _npf(74496);
        _npe.getSlot301PersonalEffect = function(_npi) {
            var _npj = null,
                _npk = new _nph.SlotItemEffectModel(),
                _npl = new _nph.SlotItemEffectModel();
            67 != _npi.ctype && 78 != _npi.ctype && 82 != _npi.ctype && 88 != _npi.ctype && 108 != _npi.ctype && 112 != _npi.ctype || (_npl.tyku += 2, _npl.kaih += 1, _npl.souk += 1);
            var _npm = true;
            if (_npl.exists() || (_npm = false), 0 == _npm) return _npk;
            var _npn = _npi.get_slotnums(301);
            return _npk = _npl.multiply(_npn);
        };
    },
    59747: (_npo, _npp, _npq) => {
        'use strict';
        var _npr = null;
        defineModule(_npp);
        Object.defineProperty(_npp, '__esModule', {
            'value': true
        }), _npp.getSlot302PersonalEffect = void 0;
        var _nps = _npq(74496);
        _npp.getSlot302PersonalEffect = function(_npt) {
            var _npu = null,
                _npv = new _nps.SlotItemEffectModel(),
                _npw = new _nps.SlotItemEffectModel();
            if (76 == _npt.ctype && (_npw.tais = 1, _npw.kaih = 1), !_npw.exists()) return _npv;
            var _npx = _npt.get_slotnums(302);
            return _npv = _npw.multiply(_npx);
        };
    },
    40649: (_npy, _npz, _nq0) => {
        'use strict';
        var _nq1 = null;
        defineModule(_npz);
        Object.defineProperty(_npz, '__esModule', {
            'value': true
        }), _npz.getSlot303PersonalEffect = void 0;
        var _nq2 = _nq0(74496);
        _npz.getSlot303PersonalEffect = function(_nq3) {
            var _nq4 = null,
                _nq5 = new _nq2.SlotItemEffectModel(),
                _nq6 = new _nq2.SlotItemEffectModel();
            if (16 == _nq3.ctype || 4 == _nq3.ctype || 20 == _nq3.ctype || 41 == _nq3.ctype ? (_nq6.houg = 1, _nq6.tyku = 1) : 89 == _nq3.ctype && (_nq6.houg = 1, _nq6.tyku = 2, _nq6.kaih = 1), !_nq6.exists()) return _nq5;
            var _nq7 = _nq3.get_slotnums(303);
            return _nq5 = _nq6.multiply(_nq7);
        };
    },
    13533: (_nq8, _nq9, _nqa) => {
        'use strict';
        var _nqb = null;
        defineModule(_nq9);
        Object.defineProperty(_nq9, '__esModule', {
            'value': true
        }), _nq9.getSlot304PersonalEffect = void 0;
        var _nqc = _nqa(74496);
        _nq9.getSlot304PersonalEffect = function(_nqd) {
            var _nqe = null,
                _nqf = new _nqc.SlotItemEffectModel(),
                _nqg = new _nqc.SlotItemEffectModel();
            if (16 == _nqd.ctype || 4 == _nqd.ctype || 20 == _nqd.ctype || 41 == _nqd.ctype ? (_nqg.houg = 1, _nqg.tais = 1, _nqg.kaih = 1) : 89 == _nqd.ctype && (_nqg.houg = 1, _nqg.tais = 2, _nqg.kaih = 2), !_nqg.exists()) return _nqf;
            var _nqh = _nqd.get_slotnums(304);
            return _nqf = _nqg.multiply(_nqh);
        };
    },
    99791: (_nqi, _nqj, _nqk) => {
        'use strict';
        var _nql = null;
        defineModule(_nqj);
        Object.defineProperty(_nqj, '__esModule', {
            'value': true
        }), _nqj.getSlot305More320mmGunPersonalEffect = void 0;
        var _nqm = _nqk(74496);
        _nqj.getSlot305More320mmGunPersonalEffect = function(_nqn) {
            var _nqo = null,
                _nqp = new _nqm.SlotItemEffectModel(),
                _nqq = _nqn.get_slotnums(426),
                _nqr = _nqn.get_slotnums(427),
                _nqs = _nqn.get_slotnums(428),
                _nqt = _nqn.get_slotnums(429),
                _nqu = _nqq + _nqr + _nqs + _nqt;
            return 113 == _nqn.ctype ? (_nqp.houg = _nqp.houg + 2 * _nqu, _nqq >= 1 && (_nqp.houg = _nqp.houg + 1 * _nqq, _nqp.kaih = _nqp.kaih + 1 * _nqq, (_nqq >= 2 || _nqr >= 1) && (_nqp.houg = _nqp.houg + 1, _nqp.kaih = _nqp.kaih + 1)), _nqs >= 1 && (_nqp.houg = _nqp.houg + 1 * _nqs, _nqp.kaih = _nqp.kaih + 1 * _nqs, (_nqs >= 2 || _nqt >= 1) && (_nqp.houg = _nqp.houg + 2, _nqp.kaih = _nqp.kaih + 1))) : 73 == _nqn.ctype ? (_nqp.houg = _nqp.houg + 1 * _nqu, _nqq >= 1 && (_nqp.houg = _nqp.houg + 1 * _nqq, _nqp.kaih = _nqp.kaih + 1 * _nqq, (_nqq >= 2 || _nqr >= 1) && (_nqp.houg = _nqp.houg + 1)), _nqs >= 1 && (_nqp.houg = _nqp.houg + 1 * _nqs, _nqp.kaih = _nqp.kaih + 1 * _nqs, (_nqs >= 2 || _nqt >= 1) && (_nqp.houg = _nqp.houg + 1))) : 58 == _nqn.ctype && _nqs >= 1 && (_nqp.houg = _nqp.houg + 1 * _nqs, _nqp.kaih = _nqp.kaih + 2 * _nqs, (_nqs >= 2 || _nqt >= 1) && (_nqp.houg = _nqp.houg + 2, _nqp.kaih = _nqp.kaih + 1)), _nqp;
        };
    },
    12138: (_nqv, _nqw, _nqx) => {
        'use strict';
        var _nqy = null;
        defineModule(_nqw);
        Object.defineProperty(_nqw, '__esModule', {
            'value': true
        }), _nqw.getSlot305_And_306_PersonalEffect = void 0;
        var _nqz = _nqx(74496);
        _nqw.getSlot305_And_306_PersonalEffect = function(_nr0) {
            var _nr1 = null,
                _nr2 = new _nqz.SlotItemEffectModel(),
                _nr3 = new _nqz.SlotItemEffectModel();
            if (76 == _nr0.ctype && (_nr3.tais = 1, _nr3.kaih = 1), 'しんよう' == _nr0.yomi ? (_nr3.tais += 2, _nr3.kaih += 1) : 'グラーフ・ツェッペリン' != _nr0.yomi && 'アクィラ' != _nr0.yomi || (_nr3.houg = 1, _nr3.kaih = 1), !_nr3.exists()) return _nr2;
            var _nr4 = _nr0.get_slotnums(305) + _nr0.get_slotnums(306);
            return _nr2 = _nr3.multiply(_nr4);
        };
    },
    30042: (_nr5, _nr6, _nr7) => {
        'use strict';
        var _nr8 = null;
        defineModule(_nr6);
        Object.defineProperty(_nr6, '__esModule', {
            'value': true
        }), _nr6.getSlot307PersonalEffect = void 0;
        var _nr9 = _nr7(74496);
        _nr6.getSlot307PersonalEffect = function(_nra) {
            var _nrb = null,
                _nrc = new _nr9.SlotItemEffectModel(),
                _nrd = new _nr9.SlotItemEffectModel();
            if ('アメリカ' == _nra.getCountryName() && (_nrd.houg = 1, _nrd.tyku = 1, _nrd.kaih = 1), !_nrd.exists()) return _nrc;
            var _nre = _nra.get_slotnums(307);
            return _nrc = _nrd.multiply(_nre);
        };
    },
    33623: (_nrf, _nrg, _nrh) => {
        'use strict';
        var _nri = null;
        defineModule(_nrg);
        Object.defineProperty(_nrg, '__esModule', {
            'value': true
        }), _nrg.getSlot308PersonalEffect = void 0;
        var _nrj = _nrh(74496);
        _nrg.getSlot308PersonalEffect = function(_nrk) {
            var _nrl = null,
                _nrm = new _nrj.SlotItemEffectModel(),
                _nrn = new _nrj.SlotItemEffectModel();
            if ('アメリカ' == _nrk.getCountryName() && (_nrn.houg = 1, _nrn.tyku = 1, _nrn.kaih = 1), 2 == _nrk.stype ? _nrn.houg += 1 : 1 == _nrk.stype && (_nrn.tyku += 1, _nrn.kaih += 1), 651 != _nrk.ship_id && 656 != _nrk.ship_id || (_nrn.houg += 1, _nrn.tyku += 1, _nrn.kaih += 1), !_nrn.exists()) return _nrm;
            var _nro = _nrk.get_slotnums(308);
            return _nrm = _nrn.multiply(_nro);
        };
    },
    17732: (_nrp, _nrq, _nrr) => {
        'use strict';
        var _nrs = null;
        defineModule(_nrq);
        Object.defineProperty(_nrq, '__esModule', {
            'value': true
        }), _nrq.getSlot30_410PersonalEffect = void 0;
        var _nrt = _nrr(74496);
        _nrq.getSlot30_410PersonalEffect = function(_nru) {
            var _nrv = null,
                _nrw = new _nrt.SlotItemEffectModel();
            return 73 != _nru.ship_id && 501 != _nru.ship_id && 506 != _nru.ship_id && 502 != _nru.ship_id && 507 != _nru.ship_id || (_nrw.tyku += 3, _nrw.kaih += 2, _nrw.saku += 2, _nru.get_slotnums(410) >= 1 && (_nrw.tyku += 2, _nrw.kaih += 2, _nrw.houg += 1, _nrw.souk += 1)), 54 == _nru.ctype && (_nrw.tyku += 3, _nrw.kaih += 2, _nrw.saku += 2, _nru.get_slotnums(410) >= 1 && (_nrw.tyku += 2, _nrw.kaih += 2, _nrw.houg += 1, _nrw.souk += 1, 968 == _nru.ship_id && (_nrw.houg += 1, _nrw.tyku += 1, _nrw.kaih += 1))), _nrw;
        };
    },
    85630: function(_nrx, _nry, _nrz) {
        'use strict';
        var _ns0 = null;
        var _ns1 = this && this.__importDefault || function(_ns2) {
            var _ns3 = null;
            return _ns2 && _ns2.__esModule ? _ns2 : {
                'default': _ns2
            };
        };
        defineModule(_nry);
        Object.defineProperty(_nry, '__esModule', {
            'value': true
        }), _nry.getSlot310PersonalEffect = void 0;
        var _ns4 = _nrz(74496),
            _ns5 = _ns1(_nrz(18622));
        _nry.getSlot310PersonalEffect = function(_ns6) {
            var _ns7 = null,
                _ns8 = new _ns4.SlotItemEffectModel(),
                _ns9 = new _ns4.SlotItemEffectModel(),
                _nsa = new _ns4.SlotItemEffectModel();
            34 == _ns6.ctype ? (_ns9.houg += 2, _ns9.tyku += 1, _ns9.kaih += 1, _nsa.houg += 2) : 56 == _ns6.ctype ? (_ns9.houg += 2, _ns9.kaih += 1, _nsa.houg += 2, _nsa.kaih += 2) : 90 == _ns6.ctype && (_ns9.houg += 3, _ns9.raig += 2, _ns9.tyku += 1, _ns9.kaih += 1, _nsa.houg += 1, _nsa.raig += 1);
            var _nsb = new _ns4.SlotItemEffectModel(),
                _nsc = new _ns4.SlotItemEffectModel();
            622 != _ns6.ship_id && 623 != _ns6.ship_id && 624 != _ns6.ship_id || (_ns9.houg += 2, _ns9.kaih += 1, _ns9.tais += 1, _nsb.houg = 1, _nsb.raig = 1, _nsc.houg = 3, _nsc.kaih = 2, _nsc.raig = 2);
            var _nsd = true;
            if (_ns9.exists() || (_nsd = false), 0 == _nsd) return _ns8;
            var _nse = _ns6.get_slotnums(310) + _ns6.get_slotnums(518);
            _ns8 = _ns9.multiply(_nse);
            for (var _nsf = 0, _nsg = 0, _nsh = 0, _nsi = [310, 518]; _nsh < _nsi.length; _nsh++) {
                var _nsj = _nsi[_nsh],
                    _nsk = _ns6.have_slots_dict[_nsj];
                if (null != _nsk)
                    for (var _nsl = 0, _nsm = _nsk; _nsl < _nsm.length; _nsl++) {
                        var _nsn = _nsm[_nsl];
                        null != _nsn && (_nsn.level >= 7 && _nsf++, _nsn.level >= 10 && _nsg++);
                    }
            }
            if (_nsb.exists() && _nsf > 0 && _ns8.add(_nsb.multiply(_nsf)), _nsa.exists() && _nsg > 0 && _ns8.add(_nsa.multiply(_nsg)), _nsc.exists()) {
                for (var _nso = 0, _nsp = 0, _nsq = _ns6.have_slot_ids(); _nsp < _nsq.length; _nsp++) {
                    var _nsr = _nsq[_nsp],
                        _nss = _ns5.default.model.slot.getMst(_nsr),
                        _nst = _nss.equipType;
                    (12 == _nst || 13 == _nst) && _nss.sakuteki >= 5 && (_nso += _ns6.get_slotnums(parseInt(_nsr)));
                }
                _nso > 0 && _ns8.add(_nsc);
            }
            return _ns8;
        };
    },
    88736: (_nsu, _nsv, _nsw) => {
        'use strict';
        var _nsx = null;
        defineModule(_nsv);
        Object.defineProperty(_nsv, '__esModule', {
            'value': true
        }), _nsv.getSlot313PersonalEffect = void 0;
        var _nsy = _nsw(74496);
        _nsv.getSlot313PersonalEffect = function(_nsz) {
            var _nt0 = null,
                _nt1 = new _nsy.SlotItemEffectModel(),
                _nt2 = new _nsy.SlotItemEffectModel();
            87 != _nsz.ctype && 91 != _nsz.ctype || (_nt2.houg += 2, _nt2.tyku += 2, _nt2.kaih += 1, _nt2.souk += 1), 651 != _nsz.ship_id && 656 != _nsz.ship_id || (_nt2.houg += 2, _nt2.tyku += 2, _nt2.kaih += 1, _nt2.souk += 1);
            var _nt3 = true;
            if (_nt2.exists() || (_nt3 = false), 0 == _nt3) return _nt1;
            var _nt4 = _nsz.get_slotnums(313);
            return _nt1 = _nt2.multiply(_nt4);
        };
    },
    49341: (_nt5, _nt6, _nt7) => {
        'use strict';
        var _nt8 = null;
        defineModule(_nt6);
        Object.defineProperty(_nt6, '__esModule', {
            'value': true
        }), _nt6.getSlot314PersonalEffect = void 0;
        var _nt9 = _nt7(74496);
        _nt6.getSlot314PersonalEffect = function(_nta) {
            var _ntb = null,
                _ntc = new _nt9.SlotItemEffectModel(),
                _ntd = new _nt9.SlotItemEffectModel();
            87 != _nta.ctype && 91 != _nta.ctype || (_ntd.houg += 1, _ntd.raig += 3);
            var _nte = true;
            if (_ntd.exists() || (_nte = false), 0 == _nte) return _ntc;
            var _ntf = _nta.get_slotnums(314);
            return _ntc = _ntd.multiply(_ntf);
        };
    },
    74306: (_ntg, _nth, _nti) => {
        'use strict';
        var _ntj = null;
        defineModule(_nth);
        Object.defineProperty(_nth, '__esModule', {
            'value': true
        }), _nth.getSlot315PersonalEffect = void 0;
        var _ntk = _nti(74496);
        _nth.getSlot315PersonalEffect = function(_ntl) {
            var _ntm = null,
                _ntn = new _ntk.SlotItemEffectModel(),
                _nto = new _ntk.SlotItemEffectModel();
            'アメリカ' == _ntl.getCountryName() && (_nto.houg += 2, _nto.kaih += 3, _nto.saku += 4), 87 != _ntl.ctype && 91 != _ntl.ctype || (_nto.houg += 1, _ntn.leng += 1), 651 != _ntl.ship_id && 656 != _ntl.ship_id || (_ntn.houg += 2, _ntn.kaih += 2, _ntn.saku += 3, _ntn.leng += 1);
            var _ntp = true;
            if (_nto.exists() || (_ntp = false), 0 == _ntp) return _ntn;
            var _ntq = _ntl.get_slotnums(315);
            return _ntn.add(_nto.multiply(_ntq)), _ntn;
        };
    },
    83898: (_ntr, _nts, _ntt) => {
        'use strict';
        var _ntu = null;
        defineModule(_nts);
        Object.defineProperty(_nts, '__esModule', {
            'value': true
        }), _nts.getSlot316PersonalEffect = void 0;
        var _ntv = _ntt(74496);
        _nts.getSlot316PersonalEffect = function(_ntw) {
            var _ntx = null,
                _nty = new _ntv.SlotItemEffectModel(),
                _ntz = new _ntv.SlotItemEffectModel();
            if (68 == _ntw.ctype) {
                if (_ntz.houg += 4, _ntz.tyku += 1, _ntz.kaih += 1, !_ntz.exists()) return _nty;
                var _nu0 = _ntw.get_slotnums(316);
                _nty = _ntz.multiply(_nu0);
            }
            return _nty;
        };
    },
    71873: (_nu1, _nu2, _nu3) => {
        'use strict';
        var _nu4 = null;
        defineModule(_nu2);
        Object.defineProperty(_nu2, '__esModule', {
            'value': true
        }), _nu2.getSlot317PersonalEffect = void 0;
        var _nu5 = _nu3(74496);
        _nu2.getSlot317PersonalEffect = function(_nu6) {
            var _nu7 = null,
                _nu8 = new _nu5.SlotItemEffectModel(),
                _nu9 = new _nu5.SlotItemEffectModel(),
                _nua = 0,
                _nub = false;
            if (6 == _nu6.ctype ? (_nu9.houg += 2, _nu9.tyku += 1, _nua = 1, _nub = true) : 2 == _nu6.ctype && (_nu9.houg += 1, _nu9.tyku += 1, _nu9.kaih += 1, _nua = 2, _nub = true), 149 == _nu6.ship_id || 591 == _nu6.ship_id || 592 == _nu6.ship_id ? (_nu9.houg += 2, _nu9.tyku += 2, _nub = true) : 150 == _nu6.ship_id ? (_nu9.houg += 1, _nu9.tyku += 1, _nub = true) : 151 == _nu6.ship_id ? (_nu9.houg += 1, _nu9.tyku += 1, _nu9.kaih += 1, _nub = true) : 593 == _nu6.ship_id ? (_nu9.houg += 1, _nu9.tyku += 3, _nu9.kaih += 2, _nub = true) : 954 == _nu6.ship_id ? (_nu9.houg += 2, _nu9.tyku += 2, _nu9.kaih += 1, _nub = true) : 152 == _nu6.ship_id || 694 == _nu6.ship_id ? (_nu9.houg += 2, _nu9.tyku += 1, _nub = true) : 541 == _nu6.ship_id ? (_nu9.houg += 1, _nu9.tyku += 2, _nub = true) : 573 == _nu6.ship_id && (_nu9.houg += 2, _nu9.tyku += 2, _nu9.kaih += 1, _nub = true), 0 == _nub) return _nu8;
            if (_nu8.add(_nu9), 0 == _nua) return _nu8;
            var _nuc = _nu6.get_each_level_nums(317),
                _nud = [];
            return _nua > 0 && _nuc.forEach(function(_nue, _nuf) {
                var _nug = null;
                for (var _nuh = 1; _nuh <= _nu6.SLOT_LEVEL_MAX; _nuh++) null == _nud[_nuh] && (_nud[_nuh] = 0), _nuf >= _nuh && (_nud[_nuh] += _nue);
            }), 1 == _nua ? _nud[8] >= 1 && (_nu8.houm += 1) : 2 == _nua && _nuc[10] >= 1 && (_nu8.houm += 1), _nu8;
        };
    },
    53122: function(_nui, _nuj, _nuk) {
        'use strict';
        var _nul = null;
        var _num = this && this.__importDefault || function(_nun) {
            var _nuo = null;
            return _nun && _nun.__esModule ? _nun : {
                'default': _nun
            };
        };
        defineModule(_nuj);
        Object.defineProperty(_nuj, '__esModule', {
            'value': true
        }), _nuj.getSlot318PersonalEffect = void 0;
        var _nup = _nuk(74496),
            _nuq = _num(_nuk(18622));
        _nuj.getSlot318PersonalEffect = function(_nur) {
            var _nus = null,
                _nut = new _nup.SlotItemEffectModel(),
                _nuu = new _nup.SlotItemEffectModel(),
                _nuv = new _nup.SlotItemEffectModel(),
                _nuw = new _nup.SlotItemEffectModel();
            if (411 == _nur.ship_id || 412 == _nur.ship_id ? _nuu.houg += 1 : 82 == _nur.ship_id ? (_nuu.houg += 2, _nuu.tyku += 2, _nuu.kaih += 2, _nuw.tyku = 2, _nuw.kaih = 3, _nuw.houm = 1) : 553 == _nur.ship_id ? (_nuu.houg += 2, _nuu.tyku += 2, _nuu.kaih += 2, _nuu.houm += 3, _nuw.tyku = 2, _nuw.kaih = 3, _nuw.houm = 1, _nuv.kaih = 2, _nuv.souk = 1) : 88 == _nur.ship_id ? (_nuu.houg += 2, _nuu.tyku += 2, _nuu.kaih += 2, _nuw.tyku = 2, _nuw.kaih = 3, _nuw.houm = 1) : 541 == _nur.ship_id || 573 == _nur.ship_id ? (_nuu.houg += 3, _nuu.tyku += 2, _nuu.kaih += 1, _nuu.houm += 2, _nuv.houg = 2, _nuv.kaih = 2, _nuv.souk = 1, _nuv.houm = 1) : 554 == _nur.ship_id && (_nuu.houg += 3, _nuu.tyku += 2, _nuu.kaih += 2, _nuu.houm += 3, _nuw.tyku = 2, _nuw.kaih = 3, _nuw.houm = 1, _nuv.houg = 1, _nuv.kaih = 2, _nuv.souk = 1, _nuv.houm = 1), !_nuu.exists()) return _nut;
            var _nux = _nur.get_slotnums(318);
            if (_nut = _nuu.multiply(_nux), !_nuv.exists() && !_nuw.exists()) return _nut;
            for (var _nuy = 0, _nuz = 0, _nv0 = _nur.have_slot_ids(); _nuz < _nv0.length; _nuz++) {
                var _nv1 = _nv0[_nuz],
                    _nv2 = _nuq.default.model.slot.getMst(_nv1),
                    _nv3 = _nv2.equipType;
                (12 == _nv3 || 13 == _nv3) && _nv2.taiku >= 2 && (_nuy += _nur.get_slotnums(parseInt(_nv1)));
            }
            var _nv4 = _nur.get_slotnums(290);
            return _nuw.exists() && _nuy > 0 && 0 == _nv4 && _nut.add(_nuw), _nuv.exists() && _nv4 >= 1 && _nut.add(_nuv), _nut;
        };
    },
    51063: (_nv5, _nv6, _nv7) => {
        'use strict';
        var _nv8 = null;
        defineModule(_nv6);
        Object.defineProperty(_nv6, '__esModule', {
            'value': true
        }), _nv6.getSlot319PersonalEffect = void 0;
        var _nv9 = _nv7(74496);
        _nv6.getSlot319PersonalEffect = function(_nva) {
            var _nvb = null,
                _nvc = new _nv9.SlotItemEffectModel(),
                _nvd = new _nv9.SlotItemEffectModel();
            if (554 != _nva.ship_id && 553 != _nva.ship_id || (_nvd.houg = 7, _nvd.tyku = 3, _nvd.kaih = 2), !_nvd.exists()) return _nvc;
            var _nve = _nva.get_slotnums(319);
            return _nvc = _nvd.multiply(_nve);
        };
    },
    91491: (_nvf, _nvg, _nvh) => {
        'use strict';
        var _nvi = null;
        defineModule(_nvg);
        Object.defineProperty(_nvg, '__esModule', {
            'value': true
        }), _nvg.getSlot320PersonalEffect = void 0;
        var _nvj = _nvh(74496);
        _nvg.getSlot320PersonalEffect = function(_nvk) {
            var _nvl = null,
                _nvm = new _nvj.SlotItemEffectModel(),
                _nvn = new _nvj.SlotItemEffectModel();
            if (553 == _nvk.ship_id) _nvn.houg = 2;
            else {
                if (554 == _nvk.ship_id) _nvn.houg = 4;
                else {
                    if (196 == _nvk.ship_id) _nvn.houg = 3;
                    else {
                        if (197 == _nvk.ship_id) _nvn.houg = 3;
                        else {
                            if (508 == _nvk.ship_id) _nvn.houg = 4;
                            else {
                                if (509 != _nvk.ship_id) return _nvm;
                                _nvn.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nvo = _nvk.get_slotnums(320);
            return _nvm = _nvn.multiply(_nvo);
        };
    },
    85495: (_nvp, _nvq, _nvr) => {
        'use strict';
        var _nvs = null;
        defineModule(_nvq);
        Object.defineProperty(_nvq, '__esModule', {
            'value': true
        }), _nvq.getSlot322PersonalEffect = void 0;
        var _nvt = _nvr(74496);
        _nvq.getSlot322PersonalEffect = function(_nvu) {
            var _nvv = null,
                _nvw = new _nvt.SlotItemEffectModel(),
                _nvx = new _nvt.SlotItemEffectModel();
            if (554 != _nvu.ship_id && 553 != _nvu.ship_id || (_nvx.houg = 5, _nvx.tyku = 2, _nvx.kaih = 2, _nvx.tais = 1), !_nvx.exists()) return _nvw;
            var _nvy = _nvu.get_slotnums(322);
            return _nvw = _nvx.multiply(_nvy);
        };
    },
    65365: (_nvz, _nw0, _nw1) => {
        'use strict';
        var _nw2 = null;
        defineModule(_nw0);
        Object.defineProperty(_nw0, '__esModule', {
            'value': true
        }), _nw0.getSlot323PersonalEffect = void 0;
        var _nw3 = _nw1(74496);
        _nw0.getSlot323PersonalEffect = function(_nw4) {
            var _nw5 = null,
                _nw6 = new _nw3.SlotItemEffectModel(),
                _nw7 = new _nw3.SlotItemEffectModel();
            if (554 != _nw4.ship_id && 553 != _nw4.ship_id || (_nw7.houg = 6, _nw7.tyku = 3, _nw7.kaih = 3, _nw7.tais = 2), !_nw7.exists()) return _nw6;
            var _nw8 = _nw4.get_slotnums(323);
            return _nw6 = _nw7.multiply(_nw8);
        };
    },
    98164: (_nw9, _nwa, _nwb) => {
        'use strict';
        var _nwc = null;
        defineModule(_nwa);
        Object.defineProperty(_nwa, '__esModule', {
            'value': true
        }), _nwa.getSlot324And325PersonalEffect = void 0;
        var _nwd = _nwb(74496);
        _nwa.getSlot324And325PersonalEffect = function(_nwe) {
            var _nwf = null,
                _nwg = new _nwd.SlotItemEffectModel(),
                _nwh = new _nwd.SlotItemEffectModel();
            if (554 == _nwe.ship_id || 646 == _nwe.ship_id ? (_nwh.houg = 2, _nwh.tais = 3, _nwh.kaih = 1) : 553 == _nwe.ship_id && (_nwh.houg = 1, _nwh.tais = 2, _nwh.kaih = 1), !_nwh.exists()) return _nwg;
            var _nwi = _nwe.get_slotnums(324) + _nwe.get_slotnums(325);
            return _nwg = _nwh.multiply(_nwi);
        };
    },
    38114: (_nwj, _nwk, _nwl) => {
        'use strict';
        var _nwm = null;
        defineModule(_nwk);
        Object.defineProperty(_nwk, '__esModule', {
            'value': true
        }), _nwk.getSlot326PersonalEffect = void 0;
        var _nwn = _nwl(74496);
        _nwk.getSlot326PersonalEffect = function(_nwo) {
            var _nwp = null,
                _nwq = new _nwn.SlotItemEffectModel(),
                _nwr = new _nwn.SlotItemEffectModel();
            if (646 == _nwo.ship_id ? (_nwr.houg = 3, _nwr.tais = 5, _nwr.kaih = 3) : 554 == _nwo.ship_id ? (_nwr.houg = 3, _nwr.tais = 4, _nwr.kaih = 2) : 553 == _nwo.ship_id && (_nwr.houg = 1, _nwr.tais = 3, _nwr.kaih = 1), !_nwr.exists()) return _nwq;
            var _nws = _nwo.get_slotnums(326);
            return _nwq = _nwr.multiply(_nws);
        };
    },
    21003: (_nwt, _nwu, _nwv) => {
        'use strict';
        var _nww = null;
        defineModule(_nwu);
        Object.defineProperty(_nwu, '__esModule', {
            'value': true
        }), _nwu.getSlot327PersonalEffect = void 0;
        var _nwx = _nwv(74496);
        _nwu.getSlot327PersonalEffect = function(_nwy) {
            var _nwz = null,
                _nx0 = new _nwx.SlotItemEffectModel(),
                _nx1 = new _nwx.SlotItemEffectModel();
            if (646 == _nwy.ship_id ? (_nx1.houg = 5, _nx1.tais = 6, _nx1.kaih = 4) : 554 == _nwy.ship_id ? (_nx1.houg = 4, _nx1.tais = 5, _nx1.kaih = 2) : 553 == _nwy.ship_id && (_nx1.houg = 2, _nx1.tais = 4, _nx1.kaih = 1), !_nx1.exists()) return _nx0;
            var _nx2 = _nwy.get_slotnums(327);
            return _nx0 = _nx1.multiply(_nx2);
        };
    },
    77010: (_nx3, _nx4, _nx5) => {
        'use strict';
        var _nx6 = null;
        defineModule(_nx4);
        Object.defineProperty(_nx4, '__esModule', {
            'value': true
        }), _nx4.getSlot328PersonalEffect = void 0;
        var _nx7 = _nx5(74496);
        _nx4.getSlot328PersonalEffect = function(_nx8) {
            var _nx9 = null,
                _nxa = new _nx7.SlotItemEffectModel(),
                _nxb = new _nx7.SlotItemEffectModel();
            if ('こんごう' == _nx8.yomi ? (_nxb.houg = 1, _nxb.kaih = 1, 209 == _nx8.ship_id || 149 == _nx8.ship_id ? _nxb.houg += 1 : 591 == _nx8.ship_id && (_nxb.houg += 2, _nxb.raig += 1)) : 'ひえい' == _nx8.yomi ? (_nxb.houg = 1, _nxb.kaih = 1, 210 == _nx8.ship_id || 150 == _nx8.ship_id ? _nxb.houg += 1 : 592 == _nx8.ship_id && (_nxb.houg += 2, _nxb.tyku += 1)) : 'はるな' == _nx8.yomi ? (_nxb.houg = 1, _nxb.kaih = 1, 211 == _nx8.ship_id || 151 == _nx8.ship_id ? _nxb.houg += 1 : 593 == _nx8.ship_id ? (_nxb.houg += 1, _nxb.tyku += 2) : 954 == _nx8.ship_id && (_nxb.houg += 2, _nxb.tyku += 1)) : 'きりしま' == _nx8.yomi ? (_nxb.houg = 1, _nxb.kaih = 1, 212 == _nx8.ship_id || 152 == _nx8.ship_id ? _nxb.houg += 1 : 694 == _nx8.ship_id && (_nxb.houg += 2, _nxb.tyku += 1)) : ('ふそう' == _nx8.yomi || 'やましろ' == _nx8.yomi || 'いせ' == _nx8.yomi || 'ひゅうが' == _nx8.yomi) && (_nxb.houg = 1), !_nxb.exists()) return _nxa;
            var _nxc = _nx8.get_slotnums(328);
            return _nxa = _nxb.multiply(_nxc);
        };
    },
    39126: (_nxd, _nxe, _nxf) => {
        'use strict';
        var _nxg = null;
        defineModule(_nxe);
        Object.defineProperty(_nxe, '__esModule', {
            'value': true
        }), _nxe.getSlot329PersonalEffect = void 0;
        var _nxh = _nxf(74496);
        _nxe.getSlot329PersonalEffect = function(_nxi) {
            var _nxj = null,
                _nxk = new _nxh.SlotItemEffectModel(),
                _nxl = new _nxh.SlotItemEffectModel();
            if ('こんごう' == _nxi.yomi ? (_nxl.houg = 1, _nxl.kaih = 1, 209 == _nxi.ship_id ? _nxl.houg += 1 : 149 == _nxi.ship_id ? (_nxl.houg += 2, _nxl.tyku += 1) : 591 == _nxi.ship_id && (_nxl.houg += 3, _nxl.tyku += 1, _nxl.raig += 2)) : 'ひえい' == _nxi.yomi ? (_nxl.houg = 1, _nxl.kaih = 1, 210 == _nxi.ship_id ? _nxl.houg += 1 : 150 == _nxi.ship_id ? (_nxl.houg += 2, _nxl.tyku += 1) : 592 == _nxi.ship_id && (_nxl.houg += 3, _nxl.tyku += 1, _nxl.raig += 2)) : 'はるな' == _nxi.yomi ? (_nxl.houg = 1, _nxl.kaih = 1, 211 == _nxi.ship_id ? _nxl.houg += 1 : 151 == _nxi.ship_id ? (_nxl.houg += 2, _nxl.tyku += 1) : 593 == _nxi.ship_id ? (_nxl.houg += 2, _nxl.tyku += 3, _nxl.raig += 1) : 954 == _nxi.ship_id && (_nxl.houg += 3, _nxl.tyku += 1, _nxl.raig += 2)) : 'きりしま' == _nxi.yomi ? (_nxl.houg = 1, _nxl.kaih = 1, 212 == _nxi.ship_id ? _nxl.houg += 1 : 152 == _nxi.ship_id ? (_nxl.houg += 2, _nxl.tyku += 1) : 694 == _nxi.ship_id && (_nxl.houg += 4, _nxl.tyku += 1, _nxl.raig += 1)) : ('ふそう' == _nxi.yomi || 'やましろ' == _nxi.yomi || 'いせ' == _nxi.yomi || 'ひゅうが' == _nxi.yomi) && (_nxl.houg = 1), !_nxl.exists()) return _nxk;
            var _nxm = _nxi.get_slotnums(329);
            return _nxk = _nxl.multiply(_nxm);
        };
    },
    72176: (_nxn, _nxo, _nxp) => {
        'use strict';
        var _nxq = null;
        defineModule(_nxo);
        Object.defineProperty(_nxo, '__esModule', {
            'value': true
        }), _nxo.getSlot335PersonalEffect = void 0;
        var _nxr = _nxp(74496);
        _nxo.getSlot335PersonalEffect = function(_nxs) {
            var _nxt = null,
                _nxu = new _nxr.SlotItemEffectModel(),
                _nxv = new _nxr.SlotItemEffectModel();
            if (277 == _nxs.ship_id || 278 == _nxs.ship_id ? (_nxv.tyku = 1, _nxv.kaih = 1) : 594 != _nxs.ship_id && 599 != _nxs.ship_id && 610 != _nxs.ship_id && 646 != _nxs.ship_id && 698 != _nxs.ship_id || (_nxv.tyku = 2, _nxv.kaih = 1), !_nxv.exists()) return _nxu;
            var _nxw = _nxs.get_slotnums(335);
            return _nxu = _nxv.multiply(_nxw);
        };
    },
    33846: (_nxx, _nxy, _nxz) => {
        'use strict';
        var _ny0 = null;
        defineModule(_nxy);
        Object.defineProperty(_nxy, '__esModule', {
            'value': true
        }), _nxy.getSlot336PersonalEffect = void 0;
        var _ny1 = _nxz(74496);
        _nxy.getSlot336PersonalEffect = function(_ny2) {
            var _ny3 = null,
                _ny4 = new _ny1.SlotItemEffectModel(),
                _ny5 = new _ny1.SlotItemEffectModel();
            if (277 == _ny2.ship_id || 278 == _ny2.ship_id ? (_ny5.houg = 1, _ny5.tyku = 1, _ny5.kaih = 1) : 594 != _ny2.ship_id && 599 != _ny2.ship_id && 610 != _ny2.ship_id && 646 != _ny2.ship_id && 698 != _ny2.ship_id || (_ny5.houg = 1, _ny5.tyku = 2, _ny5.kaih = 1), !_ny5.exists()) return _ny4;
            var _ny6 = _ny2.get_slotnums(336);
            return _ny4 = _ny5.multiply(_ny6);
        };
    },
    97157: (_ny7, _ny8, _ny9) => {
        'use strict';
        var _nya = null;
        defineModule(_ny8);
        Object.defineProperty(_ny8, '__esModule', {
            'value': true
        }), _ny8.getSlot337PersonalEffect = void 0;
        var _nyb = _ny9(74496);
        _ny8.getSlot337PersonalEffect = function(_nyc) {
            var _nyd = null,
                _nye = new _nyb.SlotItemEffectModel(),
                _nyf = new _nyb.SlotItemEffectModel();
            if (277 == _nyc.ship_id || 278 == _nyc.ship_id ? (_nyf.houg = 1, _nyf.tyku = 1, _nyf.kaih = 1) : 594 != _nyc.ship_id && 599 != _nyc.ship_id && 610 != _nyc.ship_id && 646 != _nyc.ship_id && 698 != _nyc.ship_id || (_nyf.houg = 2, _nyf.tyku = 2, _nyf.kaih = 1), !_nyf.exists()) return _nye;
            var _nyg = _nyc.get_slotnums(337);
            return _nye = _nyf.multiply(_nyg);
        };
    },
    63406: (_nyh, _nyi, _nyj) => {
        'use strict';
        var _nyk = null;
        defineModule(_nyi);
        Object.defineProperty(_nyi, '__esModule', {
            'value': true
        }), _nyi.getSlot338PersonalEffect = void 0;
        var _nyl = _nyj(74496);
        _nyi.getSlot338PersonalEffect = function(_nym) {
            var _nyn = null,
                _nyo = new _nyl.SlotItemEffectModel(),
                _nyp = new _nyl.SlotItemEffectModel();
            if (277 == _nym.ship_id || 278 == _nym.ship_id ? (_nyp.houg = 1, _nyp.tyku = 1, _nyp.kaih = 2) : 594 == _nym.ship_id || 646 == _nym.ship_id || 698 == _nym.ship_id ? (_nyp.houg = 1, _nyp.tyku = 2, _nyp.kaih = 3) : 599 != _nym.ship_id && 610 != _nym.ship_id || (_nyp.houg = 4, _nyp.tyku = 3, _nyp.kaih = 4), !_nyp.exists()) return _nyo;
            var _nyq = _nym.get_slotnums(338);
            return _nyo = _nyp.multiply(_nyq);
        };
    },
    66373: (_nyr, _nys, _nyt) => {
        'use strict';
        var _nyu = null;
        defineModule(_nys);
        Object.defineProperty(_nys, '__esModule', {
            'value': true
        }), _nys.getSlot339PersonalEffect = void 0;
        var _nyv = _nyt(74496);
        _nys.getSlot339PersonalEffect = function(_nyw) {
            var _nyx = null,
                _nyy = new _nyv.SlotItemEffectModel(),
                _nyz = new _nyv.SlotItemEffectModel();
            if (277 == _nyw.ship_id || 278 == _nyw.ship_id ? (_nyz.houg = 1, _nyz.tyku = 2, _nyz.kaih = 2) : 594 == _nyw.ship_id || 646 == _nyw.ship_id || 698 == _nyw.ship_id ? (_nyz.houg = 1, _nyz.tyku = 3, _nyz.kaih = 4) : 599 != _nyw.ship_id && 610 != _nyw.ship_id || (_nyz.houg = 6, _nyz.tyku = 4, _nyz.kaih = 5), !_nyz.exists()) return _nyy;
            var _nz0 = _nyw.get_slotnums(339);
            return _nyy = _nyz.multiply(_nz0);
        };
    },
    19707: (_nz1, _nz2, _nz3) => {
        'use strict';
        var _nz4 = null;
        defineModule(_nz2);
        Object.defineProperty(_nz2, '__esModule', {
            'value': true
        }), _nz2.getSlot340PersonalEffect = void 0;
        var _nz5 = _nz3(74496);
        _nz2.getSlot340PersonalEffect = function(_nz6) {
            var _nz7 = null,
                _nz8 = new _nz5.SlotItemEffectModel(),
                _nz9 = new _nz5.SlotItemEffectModel();
            if ('ガリバルディ' != _nz6.yomi && 'アブルッツィ' != _nz6.yomi || (_nz9.houg = 1, _nz9.tyku = 1, _nz9.kaih = 1), !_nz9.exists()) return _nz8;
            var _nza = _nz6.get_slotnums(340);
            return _nz8 = _nz9.multiply(_nza);
        };
    },
    63978: (_nzb, _nzc, _nzd) => {
        'use strict';
        var _nze = null;
        defineModule(_nzc);
        Object.defineProperty(_nzc, '__esModule', {
            'value': true
        }), _nzc.getSlot341PersonalEffect = void 0;
        var _nzf = _nzd(74496);
        _nzc.getSlot341PersonalEffect = function(_nzg) {
            var _nzh = null,
                _nzi = new _nzf.SlotItemEffectModel(),
                _nzj = new _nzf.SlotItemEffectModel();
            if ('ガリバルディ' == _nzg.yomi || 'アブルッツィ' == _nzg.yomi ? (_nzj.houg = 2, _nzj.tyku = 1, _nzj.kaih = 1) : 'ゴトランド' == _nzg.yomi && (_nzj.houg = 1, _nzj.tyku = 1, _nzj.kaih = 1), !_nzj.exists()) return _nzi;
            var _nzk = _nzg.get_slotnums(341);
            return _nzi = _nzj.multiply(_nzk);
        };
    },
    92382: (_nzl, _nzm, _nzn) => {
        'use strict';
        var _nzo = null;
        defineModule(_nzm);
        Object.defineProperty(_nzm, '__esModule', {
            'value': true
        }), _nzm.getSlot342PersonalEffect = void 0;
        var _nzp = _nzn(74496);
        _nzm.getSlot342PersonalEffect = function(_nzq) {
            var _nzr = null,
                _nzs = new _nzp.SlotItemEffectModel(),
                _nzt = new _nzp.SlotItemEffectModel();
            if (277 == _nzq.ship_id || 278 == _nzq.ship_id || 461 == _nzq.ship_id || 466 == _nzq.ship_id || 462 == _nzq.ship_id || 467 == _nzq.ship_id ? _nzt.houg = 1 : 594 == _nzq.ship_id || 646 == _nzq.ship_id || 698 == _nzq.ship_id ? (_nzt.houg = 2, _nzt.tyku = 1, _nzt.kaih = 1) : 599 != _nzq.ship_id && 610 != _nzq.ship_id || (_nzt.houg = 3, _nzt.tyku = 2, _nzt.kaih = 2), !_nzt.exists()) return _nzs;
            var _nzu = _nzq.get_slotnums(342);
            return _nzs = _nzt.multiply(_nzu);
        };
    },
    78415: (_nzv, _nzw, _nzx) => {
        'use strict';
        var _nzy = null;
        defineModule(_nzw);
        Object.defineProperty(_nzw, '__esModule', {
            'value': true
        }), _nzw.getSlot343PersonalEffect = void 0;
        var _nzz = _nzx(74496);
        _nzw.getSlot343PersonalEffect = function(_o00) {
            var _o01 = null,
                _o02 = new _nzz.SlotItemEffectModel(),
                _o03 = new _nzz.SlotItemEffectModel();
            if (277 == _o00.ship_id || 278 == _o00.ship_id ? _o03.houg = 2 : 461 == _o00.ship_id || 466 == _o00.ship_id || 462 == _o00.ship_id || 467 == _o00.ship_id ? _o03.houg = 1 : 594 == _o00.ship_id || 646 == _o00.ship_id || 698 == _o00.ship_id ? (_o03.houg = 3, _o03.tyku = 2, _o03.kaih = 1) : 599 != _o00.ship_id && 610 != _o00.ship_id || (_o03.houg = 5, _o03.tyku = 3, _o03.kaih = 3), !_o03.exists()) return _o02;
            var _o04 = _o00.get_slotnums(343);
            return _o02 = _o03.multiply(_o04);
        };
    },
    23090: (_o05, _o06, _o07) => {
        'use strict';
        var _o08 = null;
        defineModule(_o06);
        Object.defineProperty(_o06, '__esModule', {
            'value': true
        }), _o06.getSlot344PersonalEffect = void 0;
        var _o09 = _o07(74496);
        _o06.getSlot344PersonalEffect = function(_o0a) {
            var _o0b = null,
                _o0c = new _o09.SlotItemEffectModel(),
                _o0d = new _o09.SlotItemEffectModel();
            if (599 == _o0a.ship_id || 610 == _o0a.ship_id ? _o0d.houg = 3 : 555 == _o0a.ship_id || 560 == _o0a.ship_id ? (_o0d.houg = 2, _o0d.tais = 2) : 318 == _o0a.ship_id ? (_o0d.houg = 4, _o0d.tais = 1) : 282 == _o0a.ship_id ? (_o0d.houg = 2, _o0d.tais = 1) : 888 == _o0a.ship_id ? (_o0d.houg = 4, _o0d.tais = 2) : 883 == _o0a.ship_id && (_o0d.houg = 5, _o0d.tais = 2), !_o0d.exists()) return _o0c;
            var _o0e = _o0a.get_slotnums(344);
            return _o0c = _o0d.multiply(_o0e);
        };
    },
    18776: (_o0f, _o0g, _o0h) => {
        'use strict';
        var _o0i = null;
        defineModule(_o0g);
        Object.defineProperty(_o0g, '__esModule', {
            'value': true
        }), _o0g.getSlot345PersonalEffect = void 0;
        var _o0j = _o0h(74496);
        _o0g.getSlot345PersonalEffect = function(_o0k) {
            var _o0l = null,
                _o0m = new _o0j.SlotItemEffectModel(),
                _o0n = new _o0j.SlotItemEffectModel();
            if (599 == _o0k.ship_id || 610 == _o0k.ship_id ? (_o0n.houg = 3, _o0n.kaih = 1) : 555 == _o0k.ship_id || 560 == _o0k.ship_id ? (_o0n.houg = 3, _o0n.tais = 2, _o0n.kaih = 2) : 318 == _o0k.ship_id ? (_o0n.houg = 5, _o0n.tais = 1, _o0n.kaih = 2) : 282 == _o0k.ship_id ? (_o0n.houg = 3, _o0n.tais = 1, _o0n.kaih = 1) : 888 == _o0k.ship_id ? (_o0n.houg = 4, _o0n.tais = 2, _o0n.kaih = 2) : 883 == _o0k.ship_id && (_o0n.houg = 5, _o0n.tais = 2, _o0n.kaih = 3), !_o0n.exists()) return _o0m;
            var _o0o = _o0k.get_slotnums(345);
            return _o0m = _o0n.multiply(_o0o);
        };
    },
    89058: (_o0p, _o0q, _o0r) => {
        'use strict';
        var _o0s = null;
        defineModule(_o0q);
        Object.defineProperty(_o0q, '__esModule', {
            'value': true
        }), _o0q.getSlot346PersonalEffect = void 0;
        var _o0t = _o0r(74496);
        _o0q.getSlot346PersonalEffect = function(_o0u) {
            var _o0v = null,
                _o0w = new _o0t.SlotItemEffectModel();
            return 'やましおまる' == _o0u.yomi && (_o0w.kaih += 1, _o0w.tais += 1), _o0w;
        };
    },
    84372: (_o0x, _o0y, _o0z) => {
        'use strict';
        var _o10 = null;
        defineModule(_o0y);
        Object.defineProperty(_o0y, '__esModule', {
            'value': true
        }), _o0y.getSlot347PersonalEffect = void 0;
        var _o11 = _o0z(74496);
        _o0y.getSlot347PersonalEffect = function(_o12) {
            var _o13 = null,
                _o14 = new _o11.SlotItemEffectModel();
            return 'やましおまる' == _o12.yomi && (_o14.kaih += 2, _o14.tais += 2), _o14;
        };
    },
    39656: (_o15, _o16, _o17) => {
        'use strict';
        var _o18 = null;
        defineModule(_o16);
        Object.defineProperty(_o16, '__esModule', {
            'value': true
        }), _o16.getSlot356_357PersonalEffect = void 0;
        var _o19 = _o17(74496);
        _o16.getSlot356_357PersonalEffect = function(_o1a) {
            var _o1b = null,
                _o1c = new _o19.SlotItemEffectModel(),
                _o1d = new _o19.SlotItemEffectModel();
            if (95 == _o1a.ctype ? _o1d.houg = 2 : 9 == _o1a.ctype && (_o1d.houg = 1), !_o1d.exists()) return _o1c;
            var _o1e = _o1a.get_slotnums(356) + _o1a.get_slotnums(357);
            return _o1c = _o1d.multiply(_o1e);
        };
    },
    66039: (_o1f, _o1g, _o1h) => {
        'use strict';
        var _o1i = null;
        defineModule(_o1g);
        Object.defineProperty(_o1g, '__esModule', {
            'value': true
        }), _o1g.getSlot358PersonalEffect = void 0;
        var _o1j = _o1h(74496);
        _o1g.getSlot358PersonalEffect = function(_o1k) {
            var _o1l = null,
                _o1m = new _o1j.SlotItemEffectModel(),
                _o1n = new _o1j.SlotItemEffectModel();
            if ('アメリカ' != _o1k.getCountryName() && 67 != _o1k.ctype && 78 != _o1k.ctype && 82 != _o1k.ctype && 88 != _o1k.ctype && 108 != _o1k.ctype && 112 != _o1k.ctype) return _o1m;
            _o1n.houg += 1, _o1n.kaih += 1, _o1n.tyku += 1, 95 == _o1k.ctype && (_o1n.houg += 1, _o1n.kaih += 2, _o1n.tyku += 2);
            var _o1o = _o1k.get_slotnums(358);
            return _o1m = _o1n.multiply(_o1o);
        };
    },
    64679: (_o1p, _o1q, _o1r) => {
        'use strict';
        var _o1s = null;
        defineModule(_o1q);
        Object.defineProperty(_o1q, '__esModule', {
            'value': true
        }), _o1q.getSlot359PersonalEffect = void 0;
        var _o1t = _o1r(74496);
        _o1q.getSlot359PersonalEffect = function(_o1u) {
            var _o1v = null,
                _o1w = new _o1t.SlotItemEffectModel(),
                _o1x = new _o1t.SlotItemEffectModel();
            if ('パース' == _o1u.yomi ? (_o1x.houg = 2, _o1x.tyku = 2, _o1x.kaih = 1) : 'ゆうばり' == _o1u.yomi && (_o1x.houg = 1, _o1x.tyku = 1, _o1x.kaih = 1), 622 != _o1u.ship_id && 623 != _o1u.ship_id && 624 != _o1u.ship_id || (_o1x.houg += 1, _o1x.tyku += 1), !_o1x.exists()) return _o1w;
            var _o1y = _o1u.get_slotnums(359);
            return _o1w = _o1x.multiply(_o1y);
        };
    },
    69954: (_o1z, _o20, _o21) => {
        'use strict';
        var _o22 = null;
        defineModule(_o20);
        Object.defineProperty(_o20, '__esModule', {
            'value': true
        }), _o20.getSlot35PersonalEffect = void 0;
        var _o23 = _o21(74496);
        _o20.getSlot35PersonalEffect = function(_o24) {
            var _o25 = null,
                _o26 = new _o23.SlotItemEffectModel(),
                _o27 = new _o23.SlotItemEffectModel();
            return 149 == _o24.ship_id || 591 == _o24.ship_id || 592 == _o24.ship_id || 694 == _o24.ship_id ? (_o27.houg += 1, _o27.tyku += 1) : 150 == _o24.ship_id ? _o27.tyku += 1 : 151 == _o24.ship_id || 593 == _o24.ship_id || 954 == _o24.ship_id ? (_o27.tyku += 1, _o27.kaih += 1) : 152 == _o24.ship_id && (_o27.houg += 1), _o27.exists() ? _o26 = _o27.multiply(1) : _o26;
        };
    },
    95953: (_o28, _o29, _o2a) => {
        'use strict';
        var _o2b = null;
        defineModule(_o29);
        Object.defineProperty(_o29, '__esModule', {
            'value': true
        }), _o29.getSlot360_361PersonalEffect = void 0;
        var _o2c = _o2a(74496);
        _o29.getSlot360_361PersonalEffect = function(_o2d) {
            var _o2e = null,
                _o2f = new _o2c.SlotItemEffectModel(),
                _o2g = new _o2c.SlotItemEffectModel();
            if ('デ・ロイテル' == _o2d.yomi ? (_o2g.houg = 2, _o2g.tyku = 2, _o2g.kaih = 1) : 'ゴトランド' == _o2d.yomi && (_o2g.houg = 2, _o2g.tyku = 1, _o2g.kaih = 1), 41 == _o2d.ctype && (_o2g.houg = 1, _o2g.tyku = 1), !_o2g.exists()) return _o2f;
            var _o2h = _o2d.get_slotnums(360) + _o2d.get_slotnums(361);
            return _o2f = _o2g.multiply(_o2h);
        };
    },
    86384: (_o2i, _o2j, _o2k) => {
        'use strict';
        var _o2l = null;
        defineModule(_o2j);
        Object.defineProperty(_o2j, '__esModule', {
            'value': true
        }), _o2j.getSlot362_363PersonalEffect = void 0;
        var _o2m = _o2k(74496);
        _o2j.getSlot362_363PersonalEffect = function(_o2n) {
            var _o2o = null,
                _o2p = new _o2m.SlotItemEffectModel(),
                _o2q = new _o2m.SlotItemEffectModel(),
                _o2r = false;
            if (99 == _o2n.ctype ? (_o2q.houg = 1, _o2q.tyku = 2, _o2q.kaih = 1, _o2r = true) : 34 == _o2n.ctype || 21 == _o2n.ctype ? (_o2q.houg = -3, _o2q.tyku = -3, _o2q.kaih = -8, _o2r = true) : 4 == _o2n.ctype || 20 == _o2n.ctype || 16 == _o2n.ctype ? (_o2q.houg = -3, _o2q.tyku = -2, _o2q.kaih = -6, _o2r = true) : 89 == _o2n.ctype || 56 == _o2n.ctype ? (_o2q.houg = -2, _o2q.tyku = -1, _o2q.kaih = -4, _o2r = true) : 52 != _o2n.ctype && 41 != _o2n.ctype && 98 != _o2n.ctype || (_o2q.tyku = -1, _o2q.kaih = -2, _o2r = true), 'アメリカ' == _o2n.getCountryName() && (_o2q.tyku += 1, _o2q.kaih += 1, _o2r = true), 0 == _o2r) return _o2p;
            var _o2s = _o2n.get_slotnums(362) + _o2n.get_slotnums(363);
            return _o2p = _o2q.multiply(_o2s);
        };
    },
    65345: (_o2t, _o2u, _o2v) => {
        'use strict';
        var _o2w = null;
        defineModule(_o2u);
        Object.defineProperty(_o2u, '__esModule', {
            'value': true
        }), _o2u.getSlot364PersonalEffect = void 0;
        var _o2x = _o2v(74496);
        _o2u.getSlot364PersonalEffect = function(_o2y) {
            var _o2z = null;
            new _o2x.SlotItemEffectModel();
            var _o30 = new _o2x.SlotItemEffectModel();
            623 == _o2y.ship_id || 586 == _o2y.ship_id || 119 == _o2y.ship_id || 118 == _o2y.ship_id || 657 == _o2y.ship_id || 506 == _o2y.ship_id || 668 == _o2y.ship_id || 507 == _o2y.ship_id ? (_o30.raig = 1, _o30.kaih = -2, 119 == _o2y.ship_id ? _o30.raig += 1 : 507 == _o2y.ship_id ? _o30.raig += 2 : 623 == _o2y.ship_id && (_o30.houg += 1, _o30.raig += 3)) : (_o30.houg = -1, _o30.kaih = -7);
            var _o31 = _o2y.get_slotnums(364);
            return _o30.multiply(_o31);
        };
    },
    46514: (_o32, _o33, _o34) => {
        'use strict';
        var _o35 = null;
        defineModule(_o33);
        Object.defineProperty(_o33, '__esModule', {
            'value': true
        }), _o33.getSlot365PersonalEffect = void 0;
        var _o36 = _o34(74496);
        _o33.getSlot365PersonalEffect = function(_o37) {
            var _o38 = null,
                _o39 = new _o36.SlotItemEffectModel(),
                _o3a = new _o36.SlotItemEffectModel(),
                _o3b = false;
            return 37 != _o37.ctype && 19 != _o37.ctype && 2 != _o37.ctype && 26 != _o37.ctype && 6 != _o37.ctype || (_o3a.houg += 1, _o3b = true), 136 != _o37.ship_id && 148 != _o37.ship_id && 546 != _o37.ship_id && 541 != _o37.ship_id && 573 != _o37.ship_id && 911 != _o37.ship_id && 916 != _o37.ship_id && 593 != _o37.ship_id || (_o3a.houg += 1, _o3b = true), 591 != _o37.ship_id && 592 != _o37.ship_id && 954 != _o37.ship_id && 694 != _o37.ship_id || (_o3a.houg += 2, _o3b = true), 0 == _o3b ? _o39 : _o39 = _o3a.multiply(1);
        };
    },
    81976: (_o3c, _o3d, _o3e) => {
        'use strict';
        var _o3f = null;
        defineModule(_o3d);
        Object.defineProperty(_o3d, '__esModule', {
            'value': true
        }), _o3d.getSlot367PersonalEffect = void 0;
        var _o3g = _o3e(74496);
        _o3d.getSlot367PersonalEffect = function(_o3h) {
            var _o3i = null,
                _o3j = new _o3g.SlotItemEffectModel(),
                _o3k = new _o3g.SlotItemEffectModel(),
                _o3l = false;
            if ('ゴトランド' == _o3h.yomi && (_o3k.houg += 2, _o3k.tais += 1, _o3k.kaih += 1, _o3k.saku += 1, _o3l = true), 70 == _o3h.ctype ? (_o3k.houg += 1, _o3k.tais += 1, _o3k.kaih += 1, _o3k.saku += 1, _o3l = true) : 72 == _o3h.ctype || 62 == _o3h.ctype ? (_o3k.houg += 1, _o3k.kaih += 1, _o3k.saku += 1, _o3l = true) : 67 != _o3h.ctype && 78 != _o3h.ctype && 82 != _o3h.ctype && 88 != _o3h.ctype && 108 != _o3h.ctype && 112 != _o3h.ctype || (_o3k.houg += 2, _o3k.kaih += 2, _o3k.saku += 2, _o3l = true), 0 == _o3l) return _o3j;
            var _o3m = _o3h.get_slotnums(367);
            return _o3j = _o3k.multiply(_o3m);
        };
    },
    89331: (_o3n, _o3o, _o3p) => {
        'use strict';
        var _o3q = null;
        defineModule(_o3o);
        Object.defineProperty(_o3o, '__esModule', {
            'value': true
        }), _o3o.getSlot368PersonalEffect = void 0;
        var _o3r = _o3p(74496);
        _o3o.getSlot368PersonalEffect = function(_o3s) {
            var _o3t = null,
                _o3u = new _o3r.SlotItemEffectModel(),
                _o3v = new _o3r.SlotItemEffectModel(),
                _o3w = false;
            if ('ゴトランド' == _o3s.yomi && (_o3v.houg = 4, _o3v.tais = 3, _o3v.kaih = 2, _o3v.saku = 3, _o3w = true, 630 == _o3s.ship_id && (_o3u.houg += 2, _o3u.raig += 2, _o3u.kaih += 1, _o3u.saku += 1)), 70 == _o3s.ctype ? (_o3v.houg = 2, _o3v.tais = 3, _o3v.kaih = 1, _o3v.saku = 2, _o3w = true) : 72 == _o3s.ctype || 62 == _o3s.ctype ? (_o3v.houg += 1, _o3v.tais += 2, _o3v.kaih += 1, _o3v.saku += 2, _o3w = true) : 67 != _o3s.ctype && 78 != _o3s.ctype && 82 != _o3s.ctype && 88 != _o3s.ctype && 108 != _o3s.ctype && 112 != _o3s.ctype || (_o3v.houg += 2, _o3v.tais += 2, _o3v.kaih += 2, _o3v.saku += 2, _o3w = true), 0 == _o3w) return _o3u;
            var _o3x = _o3s.get_slotnums(368);
            return _o3u.add(_o3v.multiply(_o3x)), _o3u;
        };
    },
    73973: (_o3y, _o3z, _o40) => {
        'use strict';
        var _o41 = null;
        defineModule(_o3z);
        Object.defineProperty(_o3z, '__esModule', {
            'value': true
        }), _o3z.getSlot369PersonalEffect = void 0;
        var _o42 = _o40(74496);
        _o3z.getSlot369PersonalEffect = function(_o43) {
            var _o44 = null,
                _o45 = new _o42.SlotItemEffectModel(),
                _o46 = new _o42.SlotItemEffectModel(),
                _o47 = false;
            if ('ゴトランド' == _o43.yomi && (_o46.houg = 5, _o46.tais = 4, _o46.kaih = 4, _o46.saku = 3, _o47 = true, 630 == _o43.ship_id && (_o45.houg += 3, _o45.raig += 3, _o45.kaih += 2, _o45.saku += 2)), 70 == _o43.ctype ? (_o46.houg += 3, _o46.tais += 3, _o46.kaih += 2, _o46.saku += 3, _o47 = true) : 72 == _o43.ctype || 62 == _o43.ctype ? (_o46.houg += 2, _o46.tais += 2, _o46.kaih += 1, _o46.saku += 2, _o47 = true) : 67 != _o43.ctype && 78 != _o43.ctype && 82 != _o43.ctype && 88 != _o43.ctype && 108 != _o43.ctype && 112 != _o43.ctype || (_o46.houg += 2, _o46.tais += 2, _o46.kaih += 2, _o46.saku += 2, _o47 = true), 0 == _o47) return _o45;
            var _o48 = _o43.get_slotnums(369);
            return _o45.add(_o46.multiply(_o48)), _o45;
        };
    },
    21178: (_o49, _o4a, _o4b) => {
        'use strict';
        var _o4c = null;
        defineModule(_o4a);
        Object.defineProperty(_o4a, '__esModule', {
            'value': true
        }), _o4a.getSlot370PersonalEffect = void 0;
        var _o4d = _o4b(74496);
        _o4a.getSlot370PersonalEffect = function(_o4e) {
            var _o4f = null,
                _o4g = new _o4d.SlotItemEffectModel(),
                _o4h = new _o4d.SlotItemEffectModel(),
                _o4i = false;
            if ('ゴトランド' == _o4e.yomi && (_o4h.houg = 1, _o4h.tais = 3, _o4h.kaih = 1, _o4h.saku = 2, _o4i = true), 70 == _o4e.ctype ? (_o4h.houg += 1, _o4h.tais += 3, _o4h.kaih += 1, _o4h.saku += 1, _o4i = true) : 72 == _o4e.ctype || 62 == _o4e.ctype ? (_o4h.houg += 1, _o4h.tais += 2, _o4h.kaih += 1, _o4h.saku += 1, _o4i = true) : 67 != _o4e.ctype && 78 != _o4e.ctype && 82 != _o4e.ctype && 88 != _o4e.ctype && 108 != _o4e.ctype && 112 != _o4e.ctype || (_o4h.houg += 2, _o4h.tais += 3, _o4h.kaih += 2, _o4h.saku += 2, _o4i = true, 'ウォースパイト' == _o4e.yomi ? (_o4g.houg += 4, _o4g.kaih += 1, _o4g.saku += 1) : 'ヴァリアント' == _o4e.yomi && (_o4g.houg += 3, _o4g.kaih += 2, _o4g.saku += 1)), 0 == _o4i) return _o4g;
            var _o4j = _o4e.get_slotnums(370);
            return _o4g.add(_o4h.multiply(_o4j)), _o4g;
        };
    },
    5079: (_o4k, _o4l, _o4m) => {
        'use strict';
        var _o4n = null;
        defineModule(_o4l);
        Object.defineProperty(_o4l, '__esModule', {
            'value': true
        }), _o4l.getSlot371PersonalEffect = void 0;
        var _o4o = _o4m(74496);
        _o4l.getSlot371PersonalEffect = function(_o4p) {
            var _o4q = null,
                _o4r = new _o4o.SlotItemEffectModel(),
                _o4s = new _o4o.SlotItemEffectModel(),
                _o4t = false;
            if ('ゴトランド' == _o4p.yomi && (_o4s.houg = 4, _o4s.tais = 2, _o4s.kaih = 3, _o4s.saku = 6, _o4t = true, 630 == _o4p.ship_id && (_o4r.houg += 2, _o4r.kaih += 2, _o4r.saku += 3)), 70 == _o4p.ctype ? (_o4s.houg += 2, _o4s.tais += 1, _o4s.kaih += 2, _o4s.saku += 4, _o4t = true) : 79 == _o4p.ctype ? (_o4s.houg += 2, _o4s.kaih += 1, _o4s.saku += 3, _o4t = true) : 67 != _o4p.ctype && 78 != _o4p.ctype && 82 != _o4p.ctype && 88 != _o4p.ctype && 108 != _o4p.ctype && 112 != _o4p.ctype || (_o4s.houg += 3, _o4s.tais += 1, _o4s.kaih += 2, _o4s.saku += 3, _o4t = true, 88 == _o4p.ctype && (_o4r.houg += 3, _o4r.kaih += 2, _o4r.saku += 2)), 0 == _o4t) return _o4r;
            var _o4u = _o4p.get_slotnums(371);
            return _o4r.add(_o4s.multiply(_o4u)), _o4r;
        };
    },
    95014: (_o4v, _o4w, _o4x) => {
        'use strict';
        var _o4y = null;
        defineModule(_o4w);
        Object.defineProperty(_o4w, '__esModule', {
            'value': true
        }), _o4w.getSlot372PersonalEffect = void 0;
        var _o4z = _o4x(74496);
        _o4w.getSlot372PersonalEffect = function(_o50) {
            var _o51 = null,
                _o52 = new _o4z.SlotItemEffectModel(),
                _o53 = false,
                _o54 = new _o4z.SlotItemEffectModel();
            if ('しょうかく' == _o50.yomi || 'ずいかく' == _o50.yomi || 'たいほう' == _o50.yomi ? (_o54.houg += 1, _o53 = true, _o52.raig += 1) : 'じゅんよう' != _o50.yomi && 'ひよう' != _o50.yomi || (_o54.houg += 1, _o53 = true), 108 == _o50.ship_id || 109 == _o50.ship_id || 291 == _o50.ship_id || 292 == _o50.ship_id || 296 == _o50.ship_id || 297 == _o50.ship_id ? (_o54.houg += 1, _o53 = true) : 116 == _o50.ship_id || 74 == _o50.ship_id || 117 == _o50.ship_id || 282 == _o50.ship_id || 185 == _o50.ship_id ? (_o54.tais += 1, _o53 = true) : 560 == _o50.ship_id || 555 == _o50.ship_id || 318 == _o50.ship_id ? (_o54.tais += 1, _o53 = true, _o52.raig += 1) : 508 == _o50.ship_id || 509 == _o50.ship_id ? (_o54.houg += 1, _o53 = true) : 883 != _o50.ship_id && 888 != _o50.ship_id || (_o54.houg += 2, _o54.tais += 1, _o53 = true, _o52.raig += 2), 0 == _o53) return _o52;
            var _o55 = _o50.get_slotnums(372);
            return _o52.add(_o54.multiply(_o55)), _o52;
        };
    },
    53099: (_o56, _o57, _o58) => {
        'use strict';
        var _o59 = null;
        defineModule(_o57);
        Object.defineProperty(_o57, '__esModule', {
            'value': true
        }), _o57.getSlot373PersonalEffect = void 0;
        var _o5a = _o58(74496);
        _o57.getSlot373PersonalEffect = function(_o5b) {
            var _o5c = null,
                _o5d = new _o5a.SlotItemEffectModel(),
                _o5e = new _o5a.SlotItemEffectModel(),
                _o5f = false;
            if ('しょうかく' == _o5b.yomi ? (_o5e.houg += 2, _o5f = true, _o5d.raig += 2, _o5d.kaih += 2) : 'ずいかく' == _o5b.yomi ? (_o5e.houg += 1, _o5f = true, _o5d.raig += 2, _o5d.kaih += 3) : 'たいほう' == _o5b.yomi ? (_o5e.houg += 1, _o5f = true, _o5d.raig += 2, _o5d.kaih += 2) : 'じゅんよう' != _o5b.yomi && 'ひよう' != _o5b.yomi || (_o5e.houg += 1, _o5f = true, _o5d.raig += 1, _o5d.kaih += 1), 108 == _o5b.ship_id || 109 == _o5b.ship_id ? (_o5e.houg += 1, _o5f = true) : 291 == _o5b.ship_id || 292 == _o5b.ship_id ? (_o5e.houg += 1, _o5f = true, _o5d.raig += 1) : 296 == _o5b.ship_id || 297 == _o5b.ship_id ? (_o5e.houg += 1, _o5f = true, _o5d.raig += 1, _o5d.kaih += 1) : 116 == _o5b.ship_id || 74 == _o5b.ship_id ? (_o5e.tais += 1, _o5f = true) : 117 == _o5b.ship_id || 282 == _o5b.ship_id || 185 == _o5b.ship_id ? (_o5e.houg += 1, _o5e.tais += 1, _o5f = true, _o5d.raig += 1) : 560 == _o5b.ship_id || 555 == _o5b.ship_id || 318 == _o5b.ship_id ? (_o5e.houg += 1, _o5e.tais += 2, _o5f = true, _o5d.raig += 1, _o5d.kaih += 1) : 508 == _o5b.ship_id || 509 == _o5b.ship_id ? (_o5e.houg += 1, _o5f = true, _o5d.raig += 2, _o5d.kaih += 2) : 888 == _o5b.ship_id ? (_o5e.houg += 2, _o5e.tais += 2, _o5f = true, _o5d.raig += 2, _o5d.kaih += 2) : 883 == _o5b.ship_id && (_o5e.houg += 1, _o5e.tais += 2, _o5f = true, _o5d.raig += 3, _o5d.kaih += 4), 0 == _o5f) return _o5d;
            var _o5g = _o5b.get_slotnums(373);
            return _o5d.add(_o5e.multiply(_o5g)), _o5d;
        };
    },
    76201: (_o5h, _o5i, _o5j) => {
        'use strict';
        var _o5k = null;
        defineModule(_o5i);
        Object.defineProperty(_o5i, '__esModule', {
            'value': true
        }), _o5i.getSlot374PersonalEffect = void 0;
        var _o5l = _o5j(74496);
        _o5i.getSlot374PersonalEffect = function(_o5m) {
            var _o5n = null,
                _o5o = new _o5l.SlotItemEffectModel(),
                _o5p = new _o5l.SlotItemEffectModel(),
                _o5q = false;
            if ('しょうかく' == _o5m.yomi ? (_o5p.houg += 3, _o5q = true, _o5o.raig += 3, _o5o.kaih += 3) : 'ずいかく' == _o5m.yomi ? (_o5p.houg += 2, _o5q = true, _o5o.raig += 3, _o5o.kaih += 4) : 'たいほう' == _o5m.yomi ? (_o5p.houg += 2, _o5q = true, _o5o.raig += 3, _o5o.kaih += 2) : 'じゅんよう' != _o5m.yomi && 'ひよう' != _o5m.yomi || (_o5p.houg += 1, _o5q = true, _o5o.raig += 2, _o5o.kaih += 2), 108 == _o5m.ship_id || 109 == _o5m.ship_id ? (_o5p.houg += 1, _o5q = true, _o5o.raig += 1) : 291 == _o5m.ship_id || 292 == _o5m.ship_id ? (_o5p.houg += 1, _o5p.tais += 1, _o5q = true, _o5o.raig += 1) : 296 == _o5m.ship_id || 297 == _o5m.ship_id ? (_o5p.houg += 1, _o5p.tais += 1, _o5q = true, _o5o.raig += 1, _o5o.kaih += 1) : 116 == _o5m.ship_id || 74 == _o5m.ship_id ? (_o5p.houg += 1, _o5p.tais += 1, _o5q = true) : 117 == _o5m.ship_id || 282 == _o5m.ship_id || 185 == _o5m.ship_id ? (_o5p.houg += 1, _o5p.tais += 2, _o5q = true, _o5o.raig += 1, _o5o.kaih += 1) : 560 == _o5m.ship_id || 555 == _o5m.ship_id || 318 == _o5m.ship_id ? (_o5p.houg += 1, _o5p.tais += 3, _o5q = true, _o5o.raig += 1, _o5o.kaih += 2) : 508 == _o5m.ship_id || 509 == _o5m.ship_id ? (_o5p.houg += 1, _o5p.tais += 2, _o5q = true, _o5o.raig += 2, _o5o.kaih += 3) : 888 == _o5m.ship_id ? (_o5p.houg += 3, _o5p.tais += 3, _o5q = true, _o5o.raig += 2, _o5o.kaih += 3) : 883 == _o5m.ship_id && (_o5p.houg += 2, _o5p.tais += 3, _o5q = true, _o5o.raig += 3, _o5o.kaih += 5), 0 == _o5q) return _o5o;
            var _o5r = _o5m.get_slotnums(374);
            return _o5o.add(_o5p.multiply(_o5r)), _o5o;
        };
    },
    24931: (_o5s, _o5t, _o5u) => {
        'use strict';
        var _o5v = null;
        defineModule(_o5t);
        Object.defineProperty(_o5t, '__esModule', {
            'value': true
        }), _o5t.getSlot375PersonalEffect = void 0;
        var _o5w = _o5u(74496);
        _o5t.getSlot375PersonalEffect = function(_o5x) {
            var _o5y = null,
                _o5z = new _o5w.SlotItemEffectModel(),
                _o60 = new _o5w.SlotItemEffectModel(),
                _o61 = false;
            if (69 != _o5x.ctype && 83 != _o5x.ctype && 84 != _o5x.ctype && 105 != _o5x.ctype && 116 != _o5x.ctype && 118 != _o5x.ctype || (_o60.tyku += 3, _o60.houg += 3, _o60.kaih += 3, _o60.tais += 3, _o61 = true), 'かが' == _o5x.yomi && (_o60.tyku += 1, _o60.houg += 1, _o60.kaih += 1, _o60.tais += 1, _o61 = true), 0 == _o61) return _o5z;
            var _o62 = _o5x.get_slotnums(375);
            return _o5z.add(_o60.multiply(_o62)), _o5z;
        };
    },
    60978: (_o63, _o64, _o65) => {
        'use strict';
        var _o66 = null;
        defineModule(_o64);
        Object.defineProperty(_o64, '__esModule', {
            'value': true
        }), _o64.getSlot376PersonalEffect = void 0;
        var _o67 = _o65(74496);
        _o64.getSlot376PersonalEffect = function(_o68) {
            var _o69 = null,
                _o6a = new _o67.SlotItemEffectModel(),
                _o6b = new _o67.SlotItemEffectModel(),
                _o6c = false;
            if ('アメリカ' == _o68.getCountryName() ? (_o6b.houg += 2, _o6b.raig += 4, _o6c = true) : 67 == _o68.ctype || 78 == _o68.ctype || 82 == _o68.ctype || 88 == _o68.ctype || 108 == _o68.ctype || 112 == _o68.ctype ? (_o6b.houg += 1, _o6b.raig += 2, _o6c = true) : 96 == _o68.ctype && (_o6b.houg += 1, _o6b.raig += 1, _o6c = true), 0 == _o6c) return _o6a;
            var _o6d = _o68.get_slotnums(376);
            return _o6a.add(_o6b.multiply(_o6d)), _o6a;
        };
    },
    74312: (_o6e, _o6f, _o6g) => {
        'use strict';
        var _o6h = null;
        defineModule(_o6f);
        Object.defineProperty(_o6f, '__esModule', {
            'value': true
        }), _o6f.getSlot377PersonalEffect = void 0;
        var _o6i = _o6g(74496);
        _o6f.getSlot377PersonalEffect = function(_o6j) {
            var _o6k = null,
                _o6l = new _o6i.SlotItemEffectModel();
            return 'アメリカ' == _o6j.getCountryName() ? (_o6l.tais += 2, _o6l.kaih += 1, 629 == _o6j.ship_id && (_o6l.tais += 1, _o6l.kaih += 2)) : 67 != _o6j.ctype && 78 != _o6j.ctype && 82 != _o6j.ctype && 88 != _o6j.ctype && 108 != _o6j.ctype && 112 != _o6j.ctype && 96 != _o6j.ctype || (_o6l.tais += 1, _o6l.kaih += 1), 651 != _o6j.ship_id && 656 != _o6j.ship_id || (_o6l.tais += 1, _o6l.kaih += 2), _o6l;
        };
    },
    54350: (_o6m, _o6n, _o6o) => {
        'use strict';
        var _o6p = null;
        defineModule(_o6n);
        Object.defineProperty(_o6n, '__esModule', {
            'value': true
        }), _o6n.getSlot378PersonalEffect = void 0;
        var _o6q = _o6o(74496);
        _o6n.getSlot378PersonalEffect = function(_o6r) {
            var _o6s = null,
                _o6t = new _o6q.SlotItemEffectModel();
            return 'アメリカ' == _o6r.getCountryName() ? (_o6t.tais += 3, _o6t.kaih += 1, 629 == _o6r.ship_id && (_o6t.tais += 1, _o6t.kaih += 1)) : 67 == _o6r.ctype || 78 == _o6r.ctype || 82 == _o6r.ctype || 88 == _o6r.ctype || 108 == _o6r.ctype || 112 == _o6r.ctype ? (_o6t.tais += 2, _o6t.kaih += 1) : 96 == _o6r.ctype && (_o6t.tais += 1, _o6t.kaih += 1), 651 != _o6r.ship_id && 656 != _o6r.ship_id || (_o6t.tais += 1, _o6t.kaih += 1), _o6t;
        };
    },
    26262: function(_o6u, _o6v, _o6w) {
        'use strict';
        var _o6x = null;
        var _o6y = this && this.__importDefault || function(_o6z) {
            var _o70 = null;
            return _o6z && _o6z.__esModule ? _o6z : {
                'default': _o6z
            };
        };
        defineModule(_o6v);
        Object.defineProperty(_o6v, '__esModule', {
            'value': true
        }), _o6v.getSlot379PersonalEffect = void 0;
        var _o71 = _o6w(74496),
            _o72 = _o6y(_o6w(18622));
        _o6v.getSlot379PersonalEffect = function(_o73) {
            var _o74 = null,
                _o75 = new _o71.SlotItemEffectModel(),
                _o76 = false,
                _o77 = new _o71.SlotItemEffectModel();
            if (1 == _o73.stype ? (_o77.tyku += 2, _o77.houg += 1, _o76 = true) : 21 != _o73.stype && 16 != _o73.stype || (_o77.tyku += 1, _o77.houg += 1, _o76 = true), 66 == _o73.ctype || 28 == _o73.ctype ? (_o77.houg += 1, _o77.tyku += 2, _o76 = true) : 101 == _o73.ctype && (_o77.tyku += 2, _o77.houg += 1, _o75.tyku += 2, _o75.houg += 2, _o76 = true), 'ゆら' == _o73.yomi || 'なか' == _o73.yomi || 'きぬ' == _o73.yomi || 'いすず' == _o73.yomi ? (_o77.houg += 2, _o76 = true) : 'おおい' != _o73.yomi && 'きたかみ' != _o73.yomi || (_o77.tyku += 2, _o77.houg += 2, _o76 = true), 'ゆら' != _o73.yomi && 'なか' != _o73.yomi && 'きぬ' != _o73.yomi && 'いすず' != _o73.yomi && 'ゆうばり' != _o73.yomi || (_o77.tais += 1, _o76 = true), 'てんりゅう' != _o73.yomi && 'たつた' != _o73.yomi && 'ゆうばり' != _o73.yomi || (_o77.houg += 1, _o76 = true), 488 == _o73.ship_id ? (_o77.tyku += 4, _o76 = true) : 220 == _o73.ship_id ? (_o77.tyku += 3, _o76 = true) : 23 == _o73.ship_id ? (_o77.tyku += 2, _o76 = true) : 160 == _o73.ship_id || 487 == _o73.ship_id || 141 == _o73.ship_id ? (_o77.tyku += 3, _o76 = true) : 224 == _o73.ship_id || 289 == _o73.ship_id || 219 == _o73.ship_id || 56 == _o73.ship_id || 113 == _o73.ship_id || 22 == _o73.ship_id ? (_o77.tyku += 2, _o76 = true) : 651 != _o73.ship_id && 656 != _o73.ship_id || (_o77.tyku += 3, _o77.houg += 3, 656 == _o73.ship_id && (_o77.kaih += 3, _o77.tais += 2), _o76 = true), 488 != _o73.ship_id && 160 != _o73.ship_id && 487 != _o73.ship_id && 141 != _o73.ship_id || (_o77.tais += 1, _o76 = true), 477 != _o73.ship_id && 478 != _o73.ship_id && 624 != _o73.ship_id || (_o77.tais += 2, _o76 = true), 477 != _o73.ship_id && 478 != _o73.ship_id && 624 != _o73.ship_id && 622 != _o73.ship_id || (_o77.tyku += 2, _o76 = true), 652 != _o73.ship_id && 657 != _o73.ship_id && 547 != _o73.ship_id && 146 != _o73.ship_id || (_o75.houg += 2), 652 != _o73.ship_id && 657 != _o73.ship_id && 547 != _o73.ship_id && 146 != _o73.ship_id || (_o75.tyku += 2), _o76) {
                var _o78 = _o73.get_slotnums(379);
                _o75.add(_o77.multiply(_o78));
            }
            var _o79 = new _o71.SlotItemEffectModel(),
                _o7a = false;
            16 == _o73.stype || 3 == _o73.stype || 4 == _o73.stype || 21 == _o73.stype ? (_o79.houg += 1, _o79.kaih += 2, _o7a = true) : 1 == _o73.stype && (_o79.houg += 1, _o79.kaih += 4, _o7a = true), 66 == _o73.ctype || 28 == _o73.ctype || 21 == _o73.ctype || 34 == _o73.ctype ? (_o79.houg += 2, _o79.kaih += 3, _o7a = true) : 101 == _o73.ctype && (_o79.houg += 4, _o79.kaih += 3, _o7a = true), 488 == _o73.ship_id || 651 == _o73.ship_id || 656 == _o73.ship_id ? (_o79.houg += 2, _o79.kaih += 2, _o7a = true) : 487 == _o73.ship_id || 160 == _o73.ship_id || 141 == _o73.ship_id || 118 == _o73.ship_id || 119 == _o73.ship_id ? (_o79.houg += 1, _o79.kaih += 1, _o7a = true) : 652 != _o73.ship_id && 657 != _o73.ship_id && 547 != _o73.ship_id && 146 != _o73.ship_id || (_o79.houg += 1, _o79.kaih += 1, _o7a = true);
            var _o7b = new _o71.SlotItemEffectModel(),
                _o7c = false;
            if (656 == _o73.ship_id && (_o7b.tyku += 3, _o7b.kaih += 2, _o7c = true), _o7a || _o7c) {
                for (var _o7d = 0, _o7e = 0, _o7f = 0, _o7g = _o73.have_slot_ids(); _o7f < _o7g.length; _o7f++) {
                    var _o7h = _o7g[_o7f],
                        _o7i = _o72.default.model.slot.getMst(_o7h),
                        _o7j = _o7i.equipType;
                    12 != _o7j && 13 != _o7j || (_o7i.sakuteki >= 5 && (_o7d += _o73.get_slotnums(parseInt(_o7h))), _o7i.taiku >= 2 && (_o7e += _o73.get_slotnums(parseInt(_o7h))));
                }
                _o7a && _o7d > 0 && _o75.add(_o79), _o7c && _o7e > 0 && _o75.add(_o7b);
            }
            return _o75;
        };
    },
    45530: function(_o7k, _o7l, _o7m) {
        'use strict';
        var _o7n = null;
        var _o7o = this && this.__importDefault || function(_o7p) {
            var _o7q = null;
            return _o7p && _o7p.__esModule ? _o7p : {
                'default': _o7p
            };
        };
        defineModule(_o7l);
        Object.defineProperty(_o7l, '__esModule', {
            'value': true
        }), _o7l.getSlot380PersonalEffect = void 0;
        var _o7r = _o7m(74496),
            _o7s = _o7o(_o7m(18622));
        _o7l.getSlot380PersonalEffect = function(_o7t) {
            var _o7u = null,
                _o7v = new _o7r.SlotItemEffectModel(),
                _o7w = false,
                _o7x = new _o7r.SlotItemEffectModel();
            if (21 != _o7t.stype && 16 != _o7t.stype || (_o7x.tyku += 2, _o7x.houg += 1, _o7w = true), 101 == _o7t.ctype && (_o7x.tyku += 2, _o7x.houg += 1, _o7w = true, _o7v.tyku += 2, _o7v.houg += 2), 'ゆら' == _o7t.yomi || 'なか' == _o7t.yomi || 'きぬ' == _o7t.yomi || 'いすず' == _o7t.yomi ? (_o7x.houg += 2, _o7w = true) : 'おおい' != _o7t.yomi && 'きたかみ' != _o7t.yomi || (_o7x.tyku += 2, _o7x.houg += 3, _o7w = true), 'ゆら' != _o7t.yomi && 'なか' != _o7t.yomi && 'きぬ' != _o7t.yomi && 'いすず' != _o7t.yomi && 'ゆうばり' != _o7t.yomi || (_o7x.tais += 1, _o7w = true), 'てんりゅう' != _o7t.yomi && 'たつた' != _o7t.yomi && 'ゆうばり' != _o7t.yomi || (_o7x.houg += 1, _o7w = true), 488 == _o7t.ship_id ? (_o7x.tyku += 4, _o7w = true) : 220 == _o7t.ship_id ? (_o7x.tyku += 3, _o7w = true) : 23 == _o7t.ship_id ? (_o7x.tyku += 2, _o7w = true) : 160 == _o7t.ship_id || 487 == _o7t.ship_id || 141 == _o7t.ship_id ? (_o7x.tyku += 3, _o7w = true) : 224 == _o7t.ship_id || 289 == _o7t.ship_id || 219 == _o7t.ship_id || 56 == _o7t.ship_id || 113 == _o7t.ship_id || 22 == _o7t.ship_id ? (_o7x.tyku += 2, _o7w = true) : 651 == _o7t.ship_id || 656 == _o7t.ship_id ? (_o7x.tyku += 3, _o7x.houg += 3, _o7w = true) : 407 != _o7t.ship_id && 665 != _o7t.ship_id || (_o7x.houg += 2, _o7x.tyku += 2, _o7w = true, _o7v.houg += 1, _o7v.tyku += 1, _o7v.kaih += 2), 488 != _o7t.ship_id && 160 != _o7t.ship_id && 487 != _o7t.ship_id && 141 != _o7t.ship_id || (_o7x.tais += 1, _o7w = true), 477 != _o7t.ship_id && 478 != _o7t.ship_id && 624 != _o7t.ship_id || (_o7x.tais += 2, _o7w = true), 477 != _o7t.ship_id && 478 != _o7t.ship_id && 624 != _o7t.ship_id && 622 != _o7t.ship_id || (_o7x.tyku += 2, _o7w = true), 652 != _o7t.ship_id && 657 != _o7t.ship_id || (_o7x.houg += 3, _o7w = true), 547 != _o7t.ship_id && 146 != _o7t.ship_id || (_o7v.houg += 2), 652 != _o7t.ship_id && 657 != _o7t.ship_id && 547 != _o7t.ship_id && 146 != _o7t.ship_id || (_o7v.tyku += 2), _o7w) {
                var _o7y = _o7t.get_slotnums(380);
                _o7v.add(_o7x.multiply(_o7y));
            }
            var _o7z = new _o7r.SlotItemEffectModel(),
                _o80 = false,
                _o81 = new _o7r.SlotItemEffectModel(),
                _o82 = false,
                _o83 = false;
            if (16 != _o7t.stype && 3 != _o7t.stype && 4 != _o7t.stype && 21 != _o7t.stype || (_o7z.houg += 2, _o7z.kaih += 1, _o80 = true), 101 == _o7t.ctype && (_o7z.houg += 4, _o7z.kaih += 3, _o80 = true), 488 != _o7t.ship_id && 487 != _o7t.ship_id && 160 != _o7t.ship_id && 141 != _o7t.ship_id && 118 != _o7t.ship_id && 119 != _o7t.ship_id && 651 != _o7t.ship_id && 656 != _o7t.ship_id || (_o7z.houg += 1, _o7z.kaih += 2, _o80 = true), 652 == _o7t.ship_id || 657 == _o7t.ship_id || 547 == _o7t.ship_id || 146 == _o7t.ship_id ? (_o7z.houg += 1, _o7z.kaih += 3, _o80 = true) : 407 != _o7t.ship_id && 665 != _o7t.ship_id || (_o83 = true, _o80 = true, _o7z.houg += 2, _o7z.kaih += 1, _o82 = true, _o81.houg += 1, _o81.tyku += 2, _o81.kaih += 1), _o80 || _o83) {
                for (var _o84 = 0, _o85 = 0, _o86 = 0, _o87 = _o7t.have_slot_ids(); _o86 < _o87.length; _o86++) {
                    var _o88 = _o87[_o86],
                        _o89 = _o7s.default.model.slot.getMst(_o88),
                        _o8a = _o89.equipType;
                    12 == _o8a || 13 == _o8a ? _o89.sakuteki >= 5 && (_o84 += _o7t.get_slotnums(parseInt(_o88))) : 21 == _o8a && (_o85 += _o7t.get_slotnums(parseInt(_o88)));
                }
                _o80 && _o84 > 0 && _o7v.add(_o7z), _o82 && _o85 > 0 && _o7v.add(_o81);
            }
            return _o7v;
        };
    },
    44053: (_o8b, _o8c, _o8d) => {
        'use strict';
        var _o8e = null;
        defineModule(_o8c);
        Object.defineProperty(_o8c, '__esModule', {
            'value': true
        }), _o8c.getSlot381PersonalEffect = void 0;
        var _o8f = _o8d(74496);
        _o8c.getSlot381PersonalEffect = function(_o8g) {
            var _o8h = null,
                _o8i = new _o8f.SlotItemEffectModel(),
                _o8j = false,
                _o8k = new _o8f.SlotItemEffectModel(),
                _o8l = 0;
            if ('アメリカ' == _o8g.getCountryName() && (_o8k.houg += 1, 102 == _o8g.ctype && (_o8k.houg += 1), _o8j = true, _o8l = 1), 0 == _o8j) return _o8i;
            var _o8m = _o8g.get_slotnums(381);
            if (_o8i.add(_o8k.multiply(_o8m)), 0 == _o8l) return _o8i;
            var _o8n = _o8g.get_each_level_nums(381),
                _o8o = 0;
            return _o8n.map(function(_o8p, _o8q) {
                _o8q >= 6 && (_o8o += _o8p);
            }), 1 == _o8l && (_o8i.houg += 1 * _o8o), _o8i;
        };
    },
    65441: function(_o8r, _o8s, _o8t) {
        'use strict';
        var _o8u = null;
        var _o8v = this && this.__importDefault || function(_o8w) {
            var _o8x = null;
            return _o8w && _o8w.__esModule ? _o8w : {
                'default': _o8w
            };
        };
        defineModule(_o8s);
        Object.defineProperty(_o8s, '__esModule', {
            'value': true
        }), _o8s.getSlot382PersonalEffect = void 0;
        var _o8y = _o8t(74496),
            _o8z = _o8v(_o8t(18622));
        _o8s.getSlot382PersonalEffect = function(_o90) {
            var _o91 = null,
                _o92 = new _o8y.SlotItemEffectModel(),
                _o93 = false,
                _o94 = new _o8y.SlotItemEffectModel(),
                _o95 = false,
                _o96 = new _o8y.SlotItemEffectModel(),
                _o97 = new _o8y.SlotItemEffectModel(),
                _o98 = {},
                _o99 = 2,
                _o9a = [];
            1 == _o90.stype && (_o94.tyku += 2, _o94.kaih += 2, _o94.tais += 1, _o93 = true, _o96.houg += 2, _o96.kaih += 3, _o97.tyku += 2, _o97.kaih += 3, _o95 = true, _o99 = 1), 66 != _o90.ctype && 28 != _o90.ctype && 101 != _o90.ctype || (_o94.tyku += 2, _o94.kaih += 1, _o93 = true, _o96.houg += 1, _o96.kaih += 2, _o97.tyku += 2, _o97.kaih += 2, _o95 = true, _o99 = 1), 'ゆら' != _o90.yomi && 'なか' != _o90.yomi && 'きぬ' != _o90.yomi || (_o94.tyku += 1, _o93 = true), 488 == _o90.ship_id || 220 == _o90.ship_id ? (_o94.kaih += 1, _o93 = true, 488 == _o90.ship_id && (_o96.houg += 1, _o96.kaih += 1, _o97.tyku += 2, _o97.kaih += 2, _o95 = true, _o99 = 1)) : 160 == _o90.ship_id || 224 == _o90.ship_id ? (_o94.kaih += 1, _o93 = true, 160 == _o90.ship_id && (_o96.houg += 1, _o96.kaih += 1, _o97.tyku += 2, _o97.kaih += 2, _o95 = true)) : 487 == _o90.ship_id || 289 == _o90.ship_id ? (_o94.kaih += 1, _o93 = true, 487 == _o90.ship_id && (_o96.houg += 1, _o96.kaih += 1, _o97.tyku += 2, _o97.kaih += 2, _o95 = true)) : 656 == _o90.ship_id ? (_o94.tyku += 3, _o94.kaih += 2, _o93 = true, _o96.houg += 2, _o96.kaih += 2, _o97.tyku += 3, _o97.kaih += 2, _o95 = true, _o99 = 1) : 145 == _o90.ship_id || 961 == _o90.ship_id ? _o99 = 1 : 979 == _o90.ship_id && (_o94.houg += 1, _o94.tyku += 1, _o94.houm += 1, _o94.kaih += 1, _o98[509] = new _o8y.SlotItemEffectModel(), _o98[509].houm += 1, _o93 = true, _o9a[1] = 1);
            for (var _o9b = 0, _o9c = 0, _o9d = 0, _o9e = _o90.have_slot_ids(); _o9d < _o9e.length; _o9d++) {
                var _o9f = _o9e[_o9d],
                    _o9g = _o8z.default.model.slot.getMst(_o9f),
                    _o9h = _o9g.equipType;
                12 != _o9h && 13 != _o9h || (_o9g.sakuteki >= 5 && (_o9b += _o90.get_slotnums(parseInt(_o9f))), _o9g.taiku >= 2 && (_o9c += _o90.get_slotnums(parseInt(_o9f))));
            }
            for (var _o9i = [], _o9j = function(_o9k) {
                    var _o9l = null;
                    if (null == _o90.have_slots_dict[_o9k]) return 'continue';
                    var _o9m = _o90.get_each_level_nums(_o9k);
                    null == _o9i[_o9k] && (_o9i[_o9k] = []), _o9m.forEach(function(_o9n, _o9o) {
                        var _o9p = null;
                        for (var _o9q = 1; _o9q <= _o90.SLOT_LEVEL_MAX; _o9q++) null == _o9i[_o9k][_o9q] && (_o9i[_o9k][_o9q] = 0), _o9o >= _o9q && (_o9i[_o9k][_o9q] += _o9n);
                    });
                }, _o9r = 0, _o9s = [509]; _o9r < _o9s.length; _o9r++) {
                _o9j(_o9s[_o9r]);
            }
            var _o9t = 0,
                _o9u = 0,
                _o9v = 0,
                _o9w = 0,
                _o9x = 0,
                _o9y = 0,
                _o9z = 0,
                _oa0 = 0,
                _oa1 = 0,
                _oa2 = 0;
            null != _o9i[509] && (_o9t = _o9i[509][1], _o9u = _o9i[509][2], _o9v = _o9i[509][3], _o9w = _o9i[509][4], _o9x = _o9i[509][5], _o9y = _o9i[509][6], _o9z = _o9i[509][7], _oa0 = _o9i[509][8], _oa1 = _o9i[509][9], _oa2 = _o9i[509][10], null != _o9a[1] && (_o9v >= 1 && (_o92.kaih += 1 * _o9v), _o9x >= 1 && (_o92.houg += 1 * _o9x), _o9z >= 1 && (_o92.tyku += 2 * _o9z), _oa1 >= 1 && (_o92.houm += 1 * _oa1), _oa2 >= 1 && (_o92.houg += 1 * _oa2)), 1 == _o99 ? (_o9t >= 1 && (_o92.tyku += 1 * _o9t), _o9u >= 1 && (_o92.kaih += 2 * _o9u), _o9w >= 1 && (_o92.houg += 1 * _o9w), _o9y >= 1 && (_o92.tyku += 1 * _o9y), _oa0 >= 1 && (_o92.houm += 1 * _oa0), _oa2 >= 1 && (_o92.tyku += 1 * _oa2)) : 2 == _o99 && (_o9u >= 1 && (_o92.tyku += 1 * _o9u), _o9w >= 1 && (_o92.kaih += 2 * _o9w), _o9y >= 1 && (_o92.houg += 1 * _o9y), _oa0 >= 1 && (_o92.tyku += 1 * _oa0), _oa2 >= 1 && (_o92.houm += 1 * _oa2)));
            var _oa3 = _o90.get_slotnums(509),
                _oa4 = _oa3 + _o90.get_slotnums(382);
            return _o93 && (_o92.add(_o94.multiply(_oa4)), Object.keys(_o98).forEach(function(_oa5) {
                var _oa6 = null,
                    _oa7 = parseInt(_oa5);
                if (null != _o90.have_slots_dict[_oa7]) {
                    var _oa8 = _o90.get_slotnums(_oa7);
                    _o92.add(_o98[_oa7].multiply(_oa8));
                }
            })), 3 != _o90.stype && 21 != _o90.stype && 4 != _o90.stype || _o9u >= 1 && (_o9b > 0 && (_o92.houg += 1, _o92.kaih += 1), _o9c > 0 && (_o92.tyku += 2, _o92.kaih += 1)), 145 == _o90.ship_id ? _o9u >= 1 && (_o9b > 0 && (_o92.houg += 1, _o92.tyku += 1, _o92.kaih += 2), _o9c > 0 && (_o92.tyku += 4, _o92.kaih += 2)) : 961 != _o90.ship_id && 979 != _o90.ship_id || _oa3 > 0 && (_o9b > 0 && (_o92.houg += 2, _o92.tyku += 2, _o92.kaih += 3), _o9c > 0 && (_o92.houg += 1, _o92.tyku += 5, _o92.kaih += 3)), _o95 && _o9b > 0 && _o92.add(_o96), _o95 && _o9c > 0 && _o92.add(_o97), _o92;
        };
    },
    33258: (_oa9, _oaa, _oab) => {
        'use strict';
        var _oac = null;
        defineModule(_oaa);
        Object.defineProperty(_oaa, '__esModule', {
            'value': true
        }), _oaa.getSlot383PersonalEffect = void 0;
        var _oad = _oab(74496);
        _oaa.getSlot383PersonalEffect = function(_oae) {
            var _oaf = null,
                _oag = new _oad.SlotItemEffectModel(),
                _oah = false,
                _oai = new _oad.SlotItemEffectModel(),
                _oaj = _oae.get_each_level_over_nums([383]).slot[383];
            if (44 == _oae.ctype && (_oai.raig += 2, _oah = true, _oaj[4] > 0 && (_oag.raig += 1), _oaj[6] > 0 && (_oag.houm += 1)), 'い58' == _oae.yomi && (_oai.raig += 1, _oah = true), 636 == _oae.ship_id ? (_oai.raig += 3, _oah = true) : 607 == _oae.ship_id && (_oai.raig += 4, _oah = true), _oaj[8] > 0 && (_oag.raig += 1), _oaj[10] > 0 && (_oag.houm += 1), 'い58' != _oae.yomi && 'い47' != _oae.yomi || _oaj[5] > 0 && (_oag.houm += 1), 0 == _oah) return _oag;
            var _oak = _oae.get_slotnums(383);
            return _oag.add(_oai.multiply(_oak)), _oag;
        };
    },
    92168: (_oal, _oam, _oan) => {
        'use strict';
        var _oao = null;
        defineModule(_oam);
        Object.defineProperty(_oam, '__esModule', {
            'value': true
        }), _oam.getSlot384PersonalEffect = void 0;
        var _oap = _oan(74496);
        _oam.getSlot384PersonalEffect = function(_oaq) {
            var _oar = null,
                _oas = new _oap.SlotItemEffectModel(),
                _oat = false,
                _oau = new _oap.SlotItemEffectModel();
            44 == _oaq.ctype && (_oau.kaih += 3, _oat = true), 'い58' == _oaq.yomi && (_oau.kaih += 2, _oat = true), 636 == _oaq.ship_id ? (_oau.kaih += 3, _oat = true) : 607 == _oaq.ship_id && (_oau.kaih += 4, _oat = true);
            var _oav = _oaq.get_slotnums(384);
            _oat && _oas.add(_oau.multiply(_oav));
            var _oaw = _oav,
                _oax = _oaq.get_slotnums(213),
                _oay = _oaq.get_slotnums(214),
                _oaz = _oaq.get_slotnums(383);
            return _oaw > 0 && _oax + _oay + _oaz > 0 && (_oas.raig += 3, _oas.kaih += 2), _oas;
        };
    },
    85975: (_ob0, _ob1, _ob2) => {
        'use strict';
        var _ob3 = null;
        defineModule(_ob1);
        Object.defineProperty(_ob1, '__esModule', {
            'value': true
        }), _ob1.getSlot385PersonalEffect = void 0;
        var _ob4 = _ob2(74496);
        _ob1.getSlot385PersonalEffect = function(_ob5) {
            var _ob6 = null,
                _ob7 = new _ob4.SlotItemEffectModel(),
                _ob8 = false,
                _ob9 = new _ob4.SlotItemEffectModel(),
                _oba = 0;
            if ('アメリカ' == _ob5.getCountryName() && (_ob9.houg += 1, 102 == _ob5.ctype || 107 == _ob5.ctype ? (_ob9.houg += 1, _ob9.souk += 1) : 93 == _ob5.ctype && (_ob9.houg += 1), _ob8 = true, _oba = 1), 8 == _ob5.stype && (_ob9.houg += 1, _ob8 = true), 0 == _ob8) return _ob7;
            var _obb = _ob5.get_slotnums(385);
            if (_ob7.add(_ob9.multiply(_obb)), 0 == _oba) return _ob7;
            var _obc = _ob5.get_each_level_nums(385),
                _obd = 0;
            return _obc.forEach(function(_obe, _obf) {
                _obf >= 6 && (_obd += _obe);
            }), 1 == _oba && (_ob7.houg += 1 * _obd, _ob7.souk += 1 * _obc[10]), _ob7;
        };
    },
    98467: (_obg, _obh, _obi) => {
        'use strict';
        var _obj = null;
        defineModule(_obh);
        Object.defineProperty(_obh, '__esModule', {
            'value': true
        }), _obh.getSlot386PersonalEffect = void 0;
        var _obk = _obi(74496);
        _obh.getSlot386PersonalEffect = function(_obl) {
            var _obm = null,
                _obn = new _obk.SlotItemEffectModel(),
                _obo = false,
                _obp = new _obk.SlotItemEffectModel(),
                _obq = 0;
            if ('アメリカ' == _obl.getCountryName() && (_obp.houg += 1, _obo = true, _obq = 1), 0 == _obo) return _obn;
            var _obr = _obl.get_slotnums(386);
            if (_obn.add(_obp.multiply(_obr)), 0 == _obq) return _obn;
            var _obs = _obl.get_each_level_nums(386),
                _obt = 0,
                _obu = 0;
            return _obs.forEach(function(_obv, _obw) {
                _obw >= 2 && (_obt += _obv), _obw >= 7 && (_obu += _obv);
            }), 1 == _obq && (_obn.houg += 1 * _obt, _obn.houg += 1 * _obu), _obn;
        };
    },
    88348: (_obx, _oby, _obz) => {
        'use strict';
        var _oc0 = null;
        defineModule(_oby);
        Object.defineProperty(_oby, '__esModule', {
            'value': true
        }), _oby.getSlot387PersonalEffect = void 0;
        var _oc1 = _obz(74496);
        _oby.getSlot387PersonalEffect = function(_oc2) {
            var _oc3 = null,
                _oc4 = new _oc1.SlotItemEffectModel(),
                _oc5 = false,
                _oc6 = new _oc1.SlotItemEffectModel(),
                _oc7 = 0;
            if ('アメリカ' == _oc2.getCountryName() && (_oc6.houg += 1, _oc5 = true, _oc7 = 1), 0 == _oc5) return _oc4;
            var _oc8 = _oc2.get_slotnums(387);
            if (_oc4.add(_oc6.multiply(_oc8)), 0 == _oc7) return _oc4;
            var _oc9 = _oc2.get_each_level_nums(387),
                _oca = 0,
                _ocb = 0;
            return _oc9.forEach(function(_occ, _ocd) {
                _ocd >= 2 && (_oca += _occ), _ocd >= 7 && (_ocb += _occ);
            }), 1 == _oc7 && (_oc4.houg += 1 * _oca, _oc4.houg += 1 * _ocb), _oc4;
        };
    },
    21097: (_oce, _ocf, _ocg) => {
        'use strict';
        var _och = null;
        defineModule(_ocf);
        Object.defineProperty(_ocf, '__esModule', {
            'value': true
        }), _ocf.getSlot389PersonalEffect = void 0;
        var _oci = _ocg(74496);
        _ocf.getSlot389PersonalEffect = function(_ocj) {
            var _ock = null,
                _ocl = new _oci.SlotItemEffectModel(),
                _ocm = false,
                _ocn = new _oci.SlotItemEffectModel();
            if (594 == _ocj.ship_id || 599 == _ocj.ship_id) _ocn.houg += 2, _ocn.kaih += 2, _ocm = true;
            else {
                if (698 == _ocj.ship_id || 610 == _ocj.ship_id) _ocn.houg += 3, _ocn.kaih += 2, _ocm = true;
                else 646 == _ocj.ship_id && (_ocn.houg += 4, _ocn.tais += 4, _ocn.kaih += 3, _ocm = true, _ocj.get_type3_nums(25) > 0 && (_ocl.houg += 3, _ocl.tais += 6), _ocj.get_slotnums(326) + _ocj.get_slotnums(327) > 0 && (_ocl.houg += 5, _ocl.tais += 4));
            }
            if ('アメリカ' == _ocj.getCountryName() && (_ocn.houg += 2, _ocn.tais += 3, _ocn.kaih += 1, _ocm = true), 0 == _ocm) return _ocl;
            var _oco = _ocj.get_slotnums(389);
            return _ocl.add(_ocn.multiply(_oco)), _ocl;
        };
    },
    43607: (_ocp, _ocq, _ocr) => {
        'use strict';
        var _ocs = null;
        defineModule(_ocq);
        Object.defineProperty(_ocq, '__esModule', {
            'value': true
        }), _ocq.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _oct = _ocr(74496);
        _ocq.getSlot38cmFourBarrelGunPersonalEffect = function(_ocu) {
            var _ocv = null,
                _ocw = new _oct.SlotItemEffectModel(),
                _ocx = _ocu.get_slotnums(245),
                _ocy = _ocu.get_slotnums(246),
                _ocz = _ocu.get_slotnums(468),
                _od0 = _ocx + _ocy + _ocz,
                _od1 = 0,
                _od2 = 0;
            if (79 != _ocu.ctype) return _ocw;
            _ocw.houg += 2 * _od0, _ocw.houm += 1 * _od0, _ocz >= 1 && (_ocw.houg += 1 * _ocz, _od2 = 1), _od1 = 1;
            var _od3 = _ocu.get_slotnums(247),
                _od4 = _ocu.get_slotnums(471) + _ocu.get_slotnums(538);
            if (1 == _od1 && _od3 >= 1 && (_ocw.kaih += 2 * _od3, _ocw.houg += 2 * _od3, _ocw.houm += 2 * _od3), 0 == _od2) return _ocw;
            var _od5 = _ocu.haveSlotLevelNumOver(468),
                _od6 = _ocu.haveSlotLevelNumOver(471),
                _od7 = _ocu.haveSlotLevelNumOver(538);
            if (1 == _od2 && _ocz > 0) {
                var _od8 = _od5[4],
                    _od9 = _od5[8],
                    _oda = _od5[9],
                    _odb = _od5[10],
                    _odc = _od6[7],
                    _odd = _od6[9];
                _od8 >= 1 && (_ocw.houg += 1 * _od8, _ocw.houm += 1 * _od8), _od9 >= 1 && (_ocw.houg += 1 * _od9, _ocw.houm += 1 * _od9), _oda >= 1 && (_ocw.tyku += 1 * _oda, _od4 >= 1 && (_ocw.houm += 2 * _od4), _od3 >= 1 && (_ocw.kaih += 1 * _od3, _ocw.houm += 1 * _od3)), _odb >= 1 && (_ocw.houm += 1 * _odb, _od4 >= 1 && (_ocw.houm += 1 * _od4, _od7[7] >= 1 && (_ocw.houm += 1 * _od7[7]), _od7[8] >= 1 && (_ocw.kaih += 1 * _od7[8]), _od7[9] >= 1 && (_ocw.houm += 1 * _od7[9]), _odc >= 1 && (_ocw.houm += 1 * _odc), _odd >= 1 && (_ocw.kaih += 1 * _odd)), _od3 >= 1 && (_ocw.houg += 1 * _od3, _ocw.kaih += 1 * _od3, _ocw.houm += 1 * _od3));
            }
            return _ocw;
        };
    },
    2380: (_ode, _odf, _odg) => {
        'use strict';
        var _odh = null;
        defineModule(_odf);
        Object.defineProperty(_odf, '__esModule', {
            'value': true
        }), _odf.getSlot38cmTwinGunPersonalEffect = void 0;
        var _odi = _odg(74496);
        _odf.getSlot38cmTwinGunPersonalEffect = function(_odj) {
            var _odk = null,
                _odl = new _odi.SlotItemEffectModel(),
                _odm = false,
                _odn = new _odi.SlotItemEffectModel(),
                _odo = 0,
                _odp = _odj.get_slotnums(76),
                _odq = _odj.get_slotnums(114),
                _odr = _odj.get_slotnums(124);
            if ('ドイツ' == _odj.getCountryName() && (_odn.houg += 1, _odm = true, _odo = 1, _odr >= 1 && (_odl.kaih += 1 * _odr)), 0 == _odm) return _odl;
            var _ods = _odp + _odq;
            _odl.add(_odn.multiply(_ods));
            var _odt = _odj.have_level_num_over_dict[114];
            return 1 == _odo && null != _odt && (_odt[7] >= 1 && (_odl.houg += 1 * _odt[7]), _odt[8] >= 1 && (_odl.houm += 1 * _odt[8]), _odt[9] >= 1 && (_odl.souk += 1 * _odt[9]), _odt[10] >= 1 && (_odl.houg += 1 * _odt[10])), _odl;
        };
    },
    37273: (_odu, _odv, _odw) => {
        'use strict';
        var _odx = null;
        defineModule(_odv);
        Object.defineProperty(_odv, '__esModule', {
            'value': true
        }), _odv.getSlot390PersonalEffect = void 0;
        var _ody = _odw(74496);
        _odv.getSlot390PersonalEffect = function(_odz) {
            var _oe0 = null,
                _oe1 = new _ody.SlotItemEffectModel(),
                _oe2 = false,
                _oe3 = new _ody.SlotItemEffectModel(),
                _oe4 = 0;
            if ('アメリカ' == _odz.getCountryName() && (_oe3.houg += 1, _oe2 = true, _oe4 = 1), 102 == _odz.ctype || 107 == _odz.ctype ? (_oe3.houg += 1, _oe3.souk += 1, _oe2 = true) : 93 == _odz.ctype && (_oe3.houg += 1, _oe2 = true), 8 == _odz.stype && (_oe3.houg += 1, _oe2 = true), 0 == _oe2) return _oe1;
            var _oe5 = _odz.get_slotnums(390);
            if (_oe1.add(_oe3.multiply(_oe5)), 0 == _oe4) return _oe1;
            var _oe6 = _odz.get_each_level_nums(390),
                _oe7 = 0,
                _oe8 = 0;
            return _oe6.forEach(function(_oe9, _oea) {
                _oea >= 3 && (_oe7 += _oe9), _oea >= 6 && (_oe8 += _oe9);
            }), 1 == _oe4 && (_oe1.houg += 1 * _oe7, _oe1.kaih += 1 * _oe8, _oe1.souk += 1 * _oe6[10]), _oe1;
        };
    },
    72694: (_oeb, _oec, _oed) => {
        'use strict';
        var _oee = null;
        defineModule(_oec);
        Object.defineProperty(_oec, '__esModule', {
            'value': true
        }), _oec.getSlot391PersonalEffect = void 0;
        var _oef = _oed(74496);
        _oec.getSlot391PersonalEffect = function(_oeg) {
            var _oeh = null,
                _oei = new _oef.SlotItemEffectModel(),
                _oej = false,
                _oek = new _oef.SlotItemEffectModel();
            if ('しょうかく' == _oeg.yomi || 'ずいかく' == _oeg.yomi ? (_oek.houg += 1, _oej = true) : 'じゅんよう' != _oeg.yomi && 'ひよう' != _oeg.yomi || (_oek.houg += 1, _oej = true), 116 == _oeg.ship_id || 185 == _oeg.ship_id || 282 == _oeg.ship_id ? (_oek.houg += 1, _oej = true) : 117 == _oeg.ship_id || 318 == _oeg.ship_id || 883 == _oeg.ship_id || 888 == _oeg.ship_id ? (_oek.houg += 1, _oei.kaih += 1, _oej = true) : 560 != _oeg.ship_id && 555 != _oeg.ship_id || (_oek.houg += 1, _oek.kaih += 1, _oej = true), 0 == _oej) return _oei;
            var _oel = _oeg.get_slotnums(391);
            return _oei.add(_oek.multiply(_oel)), _oei;
        };
    },
    62067: (_oem, _oen, _oeo) => {
        'use strict';
        var _oep = null;
        defineModule(_oen);
        Object.defineProperty(_oen, '__esModule', {
            'value': true
        }), _oen.getSlot392PersonalEffect = void 0;
        var _oeq = _oeo(74496);
        _oen.getSlot392PersonalEffect = function(_oer) {
            var _oes = null,
                _oet = new _oeq.SlotItemEffectModel(),
                _oeu = false,
                _oev = new _oeq.SlotItemEffectModel();
            if ('しょうかく' == _oer.yomi || 'ずいかく' == _oer.yomi ? (_oev.houg += 2, _oev.kaih += 1, _oeu = true) : 'じゅんよう' != _oer.yomi && 'ひよう' != _oer.yomi || (_oev.houg += 1, _oev.kaih += 1, _oeu = true), 116 == _oer.ship_id || 185 == _oer.ship_id || 282 == _oer.ship_id ? (_oev.houg += 2, _oev.kaih += 1, _oeu = true) : 117 == _oer.ship_id || 318 == _oer.ship_id || 883 == _oer.ship_id || 888 == _oer.ship_id ? (_oev.houg += 2, _oev.kaih += 2, _oeu = true) : 560 != _oer.ship_id && 555 != _oer.ship_id || (_oev.houg += 3, _oev.kaih += 2, _oeu = true), 0 == _oeu) return _oet;
            var _oew = _oer.get_slotnums(392);
            return _oet.add(_oev.multiply(_oew)), _oet;
        };
    },
    87817: function(_oex, _oey, _oez) {
        'use strict';
        var _of0 = null;
        var _of1 = this && this.__importDefault || function(_of2) {
            var _of3 = null;
            return _of2 && _of2.__esModule ? _of2 : {
                'default': _of2
            };
        };
        defineModule(_oey);
        Object.defineProperty(_oey, '__esModule', {
            'value': true
        }), _oey.getSlot397PersonalEffect = void 0;
        var _of4 = _oez(74496),
            _of5 = _of1(_oez(18622));
        _oey.getSlot397PersonalEffect = function(_of6) {
            var _of7 = null,
                _of8 = new _of4.SlotItemEffectModel(),
                _of9 = false,
                _ofa = new _of4.SlotItemEffectModel(),
                _ofb = 0,
                _ofc = 0,
                _ofd = false;
            if (651 == _of6.ship_id ? (_ofa.houg += 5, _ofa.tyku += 2, _ofa.kaih += 1, _of9 = true, _ofd = true, _ofb = 1, _ofc = 1) : 656 == _of6.ship_id && (_ofa.houg += 3, _ofa.tyku += 1, _ofa.kaih += 1, _of9 = true, _ofd = true, _ofb = 1), 0 == _of9) return _of8;
            var _ofe = _of6.get_slotnums(397);
            _of8.add(_ofa.multiply(_ofe));
            var _off = 0,
                _ofg = _of6.get_each_level_nums(397),
                _ofh = 0;
            if (_ofd) {
                _ofg.forEach(function(_ofi, _ofj) {
                    _ofj >= 4 && (_ofh += _ofi);
                });
                for (var _ofk = 0, _ofl = _of6.have_slot_ids(); _ofk < _ofl.length; _ofk++) {
                    var _ofm = _ofl[_ofk],
                        _ofn = _of5.default.model.slot.getMst(_ofm),
                        _ofo = _ofn.equipType;
                    12 != _ofo && 13 != _ofo || (_ofn.sakuteki >= 5 && (_off += _of6.get_slotnums(parseInt(_ofm))), _ofn.taiku >= 2 && _of6.get_slotnums(parseInt(_ofm)));
                }
            }
            return 1 == _ofb && _off > 0 && (_of8.houg += 3, _of8.kaih += 3), 1 == _ofc && (_of8.houg += 4 * _ofh, _of8.kaih += 1 * _ofh), _of8;
        };
    },
    93526: function(_ofp, _ofq, _ofr) {
        'use strict';
        var _ofs = null;
        var _oft = this && this.__importDefault || function(_ofu) {
            var _ofv = null;
            return _ofu && _ofu.__esModule ? _ofu : {
                'default': _ofu
            };
        };
        defineModule(_ofq);
        Object.defineProperty(_ofq, '__esModule', {
            'value': true
        }), _ofq.getSlot398PersonalEffect = void 0;
        var _ofw = _ofr(74496),
            _ofx = _oft(_ofr(18622));
        _ofq.getSlot398PersonalEffect = function(_ofy) {
            var _ofz = null,
                _og0 = new _ofw.SlotItemEffectModel(),
                _og1 = false,
                _og2 = new _ofw.SlotItemEffectModel(),
                _og3 = 0,
                _og4 = 0,
                _og5 = false;
            if (651 == _ofy.ship_id ? (_og2.houg += 4, _og2.tyku += 4, _og2.kaih += 2, _og1 = true, _og5 = true, _og3 = 1, _og4 = 1) : 656 == _ofy.ship_id && (_og2.houg += 3, _og2.tyku += 2, _og2.kaih += 2, _og1 = true, _og5 = true, _og3 = 1, _og4 = 2), 0 == _og1) return _og0;
            var _og6 = _ofy.get_slotnums(398);
            _og0.add(_og2.multiply(_og6));
            var _og7 = 0,
                _og8 = 0,
                _og9 = _ofy.get_each_level_nums(398),
                _oga = 0;
            if (_og5) {
                _og9.forEach(function(_ogb, _ogc) {
                    _ogc >= 4 && (_oga += _ogb);
                });
                for (var _ogd = 0, _oge = _ofy.have_slot_ids(); _ogd < _oge.length; _ogd++) {
                    var _ogf = _oge[_ogd],
                        _ogg = _ofx.default.model.slot.getMst(_ogf),
                        _ogh = _ogg.equipType;
                    12 != _ogh && 13 != _ogh || (_ogg.sakuteki >= 5 && (_og7 += _ofy.get_slotnums(parseInt(_ogf))), _ogg.taiku >= 2 && (_og8 += _ofy.get_slotnums(parseInt(_ogf))));
                }
            }
            return 1 == _og3 && (_og7 > 0 && (_og0.houg += 3, _og0.kaih += 3), _og8 > 0 && (_og0.tyku += 3, _og0.kaih += 3)), 1 == _og4 ? (_og0.houg += 3 * _oga, _og0.kaih += 2 * _oga) : 2 == _og4 && (_og0.houg += 2 * _oga, _og0.kaih += 1 * _oga), _og0;
        };
    },
    33084: (_ogi, _ogj, _ogk) => {
        'use strict';
        var _ogl = null;
        defineModule(_ogj);
        Object.defineProperty(_ogj, '__esModule', {
            'value': true
        }), _ogj.getSlot399PersonalEffect = void 0;
        var _ogm = _ogk(74496);
        _ogj.getSlot399PersonalEffect = function(_ogn) {
            var _ogo = null,
                _ogp = new _ogm.SlotItemEffectModel(),
                _ogq = false,
                _ogr = new _ogm.SlotItemEffectModel(),
                _ogs = 0;
            if (108 == _ogn.ctype && (_ogr.houg += 1, _ogr.kaih += 2, _ogs = 1, _ogq = true), 0 == _ogq) return _ogp;
            var _ogt = _ogn.get_slotnums(399);
            if (_ogp.add(_ogr.multiply(_ogt)), 0 == _ogs) return _ogp;
            var _ogu = _ogn.get_each_level_nums(399),
                _ogv = 0,
                _ogw = 0;
            return _ogu.map(function(_ogx, _ogy) {
                _ogy >= 3 && (_ogv += _ogx), _ogy >= 5 && (_ogw += _ogx);
            }), 1 == _ogs && (_ogp.houg += 1 * _ogv, _ogp.houg += 1 * _ogw), _ogp;
        };
    },
    80225: (_ogz, _oh0, _oh1) => {
        'use strict';
        var _oh2 = null;
        defineModule(_oh0);
        Object.defineProperty(_oh0, '__esModule', {
            'value': true
        }), _oh0.getSlot3_122PersonalEffect = void 0;
        var _oh3 = _oh1(74496);
        _oh0.getSlot3_122PersonalEffect = function(_oh4) {
            var _oh5 = null,
                _oh6 = new _oh3.SlotItemEffectModel(),
                _oh7 = false,
                _oh8 = new _oh3.SlotItemEffectModel(),
                _oh9 = 0;
            if (54 == _oh4.ctype && (_oh8.houg += 1, _oh8.tyku += 2, _oh8.kaih += 1, _oh7 = true, _oh9 = 1, 968 == _oh4.ship_id && (_oh8.houg += 1, _oh8.houm += 1, _oh8.kaih += 1)), 981 == _oh4.ship_id && (_oh8.houg += 1, _oh8.tyku += 1, _oh8.kaih += 1, _oh7 = true, _oh9 = 2), 0 == _oh7) return _oh6;
            var _oha = _oh4.get_slotnums(3) + _oh4.get_slotnums(122) + _oh4.get_slotnums(533);
            if (_oh6.add(_oh8.multiply(_oha)), 0 == _oh9) return _oh6;
            var _ohb = _oh4.get_each_level_over_nums([122]).slot[122],
                _ohc = _oh4.have_level_num_over_dict[533];
            return 1 == _oh9 ? (null != _ohb && (_ohb[6] >= 1 && (_oh6.kaih += 1 * _ohb[6]), _ohb[7] >= 1 && (_oh6.tyku += 1 * _ohb[7]), _ohb[8] >= 1 && (_oh6.houm += 1 * _ohb[8]), _ohb[9] >= 1 && (_oh6.kaih += 1 * _ohb[9]), _ohb[10] >= 1 && (_oh6.houg += 1 * _ohb[10])), null != _ohc && (_ohc[2] >= 1 && (_oh6.tyku += 1 * _ohc[2]), _ohc[4] >= 1 && (_oh6.houg += 1 * _ohc[4]), _ohc[6] >= 1 && (_oh6.houm += 1 * _ohc[6]), _ohc[8] >= 1 && (_oh6.tyku += 1 * _ohc[8]), _ohc[10] >= 1 && (_oh6.kaih += 1 * _ohc[10])), 968 == _oh4.ship_id && null != _ohc && (_ohc[1] >= 1 && (_oh6.kaih += 1 * _ohc[1]), _ohc[3] >= 1 && (_oh6.tyku += 1 * _ohc[3]), _ohc[5] >= 1 && (_oh6.houm += 1 * _ohc[5]), _ohc[7] >= 1 && (_oh6.kaih += 1 * _ohc[7]), _ohc[9] >= 1 && (_oh6.houg += 1 * _ohc[9]))) : 2 == _oh9 && (null != _ohb && (_ohb[7] >= 1 && (_oh6.tyku += 1 * _ohb[7]), _ohb[8] >= 1 && (_oh6.kaih += 1 * _ohb[8]), _ohb[9] >= 1 && (_oh6.houm += 1 * _ohb[9]), _ohb[10] >= 1 && (_oh6.houg += 1 * _ohb[10])), null != _ohc && (_ohc[4] >= 1 && (_oh6.tyku += 1 * _ohc[4]), _ohc[6] >= 1 && (_oh6.kaih += 1 * _ohc[6]), _ohc[8] >= 1 && (_oh6.houm += 1 * _ohc[8]), _ohc[10] >= 1 && (_oh6.houg += 1 * _ohc[10]))), _oh6;
        };
    },
    97831: (_ohd, _ohe, _ohf) => {
        'use strict';
        var _ohg = null;
        defineModule(_ohe);
        Object.defineProperty(_ohe, '__esModule', {
            'value': true
        }), _ohe.getSlot400PersonalEffect = void 0;
        var _ohh = _ohf(74496);
        _ohe.getSlot400PersonalEffect = function(_ohi) {
            var _ohj = null,
                _ohk = new _ohh.SlotItemEffectModel(),
                _ohl = false,
                _ohm = new _ohh.SlotItemEffectModel(),
                _ohn = 0,
                _oho = false;
            if (147 != _ohi.ship_id && 73 != _ohi.ctype && 81 != _ohi.ctype || (_oho = true), _oho && (_ohm.kaih += 2, _ohm.raig += 5, _ohm.houg += 1, _ohm.souk += 1, _ohl = true, _ohn = 1), 0 == _ohl) return _ohk;
            var _ohp = _ohi.get_slotnums(400);
            return _ohk.add(_ohm.multiply(_ohp)), _ohi.get_slotnums(282) > 0 && 1 == _ohn && (_ohk.houg += 2), _ohk;
        };
    },
    4050: function(_ohq, _ohr, _ohs) {
        'use strict';
        var _oht = null;
        var _ohu = this && this.__importDefault || function(_ohv) {
            var _ohw = null;
            return _ohv && _ohv.__esModule ? _ohv : {
                'default': _ohv
            };
        };
        defineModule(_ohr);
        Object.defineProperty(_ohr, '__esModule', {
            'value': true
        }), _ohr.getSlot407PersonalEffect = void 0;
        var _ohx = _ohs(74496),
            _ohy = _ohu(_ohs(18622));
        _ohr.getSlot407PersonalEffect = function(_ohz) {
            var _oi0 = null,
                _oi1 = new _ohx.SlotItemEffectModel(),
                _oi2 = false,
                _oi3 = new _ohx.SlotItemEffectModel(),
                _oi4 = 0;
            if (662 != _ohz.ship_id && 663 != _ohz.ship_id && 668 != _ohz.ship_id || (_oi3.houg += 4, _oi3.tyku += 2, _oi3.kaih += 1, _oi2 = true, _oi4 = 1), 0 == _oi2) return _oi1;
            var _oi5 = _ohz.get_slotnums(407);
            _oi1.add(_oi3.multiply(_oi5));
            for (var _oi6 = 0, _oi7 = 0, _oi8 = 0, _oi9 = _ohz.have_slot_ids(); _oi8 < _oi9.length; _oi8++) {
                var _oia = _oi9[_oi8],
                    _oib = _ohy.default.model.slot.getMst(_oia),
                    _oic = _oib.equipType;
                12 != _oic && 13 != _oic || (_oib.sakuteki >= 5 && (_oi6 += _ohz.get_slotnums(parseInt(_oia))), _oib.taiku >= 2 && (_oi7 += _ohz.get_slotnums(parseInt(_oia))));
            }
            return _oi6 >= 1 && 1 == _oi4 && (_oi1.houg += 2, _oi1.kaih += 2, _oi1.raig += 2), _oi7 >= 1 && 1 == _oi4 && (_oi1.tyku += 2, _oi1.kaih += 3), _oi1;
        };
    },
    78466: (_oid, _oie, _oif) => {
        'use strict';
        var _oig = null;
        defineModule(_oie);
        Object.defineProperty(_oie, '__esModule', {
            'value': true
        }), _oie.getSlot408PersonalEffect = void 0;
        var _oih = _oif(74496);
        _oie.getSlot408PersonalEffect = function(_oii) {
            var _oij = null,
                _oik = new _oih.SlotItemEffectModel(),
                _oil = false,
                _oim = new _oih.SlotItemEffectModel();
            if ('しんしゅうまる' == _oii.yomi ? (_oim.houg += 2, _oim.saku += 2, _oim.kaih += 2, _oil = true) : 'あきつまる' == _oii.yomi && (_oim.houg += 1, _oim.saku += 1, _oim.kaih += 1, _oim.tais += 1, _oil = true), 2 == _oii.stype && (_oim.houg += 1, _oim.saku += 1, _oim.kaih -= 5, _oil = true), 0 == _oil) return _oik;
            var _oin = _oii.get_slotnums(408);
            return _oik.add(_oim.multiply(_oin)), _oik;
        };
    },
    40061: (_oio, _oip, _oiq) => {
        'use strict';
        var _oir = null;
        defineModule(_oip);
        Object.defineProperty(_oip, '__esModule', {
            'value': true
        }), _oip.getSlot409PersonalEffect = void 0;
        var _ois = _oiq(74496);
        _oip.getSlot409PersonalEffect = function(_oit) {
            var _oiu = null,
                _oiv = new _ois.SlotItemEffectModel(),
                _oiw = false,
                _oix = new _ois.SlotItemEffectModel();
            if ('しんしゅうまる' == _oit.yomi ? (_oix.houg += 1, _oix.tyku += 2, _oix.kaih += 3, _oiw = true) : 'あきつまる' == _oit.yomi && (_oix.houg += 1, _oix.tyku += 1, _oix.kaih += 2, _oix.tais += 1, _oiw = true), 0 == _oiw) return _oiv;
            var _oiy = _oit.get_slotnums(409);
            return _oiv.add(_oix.multiply(_oiy)), _oiv;
        };
    },
    79988: (_oiz, _oj0, _oj1) => {
        'use strict';
        var _oj2 = null;
        defineModule(_oj0);
        Object.defineProperty(_oj0, '__esModule', {
            'value': true
        }), _oj0.getSlot411PersonalEffect = void 0;
        var _oj3 = _oj1(74496);
        _oj0.getSlot411PersonalEffect = function(_oj4) {
            var _oj5 = null,
                _oj6 = new _oj3.SlotItemEffectModel(),
                _oj7 = new _oj3.SlotItemEffectModel(),
                _oj8 = false,
                _oj9 = 0;
            if (2 == _oj4.stype && (_oj7.kaih -= 9, _oj8 = true), 3 != _oj4.stype && 4 != _oj4.stype || (_oj7.kaih -= 7, _oj8 = true), 21 == _oj4.stype && (_oj7.kaih -= 6, _oj8 = true), 5 != _oj4.stype && 6 != _oj4.stype || (_oj7.kaih -= 5, _oj8 = true), 593 == _oj4.ship_id && (_oj6.houg += 1, _oj6.tyku += 2, _oj6.kaih += 3), 151 == _oj4.ship_id || 411 == _oj4.ship_id || 412 == _oj4.ship_id || 593 == _oj4.ship_id || 954 == _oj4.ship_id ? (_oj6.houg += 3, _oj6.tyku += 4, _oj9 = 1) : 694 == _oj4.ship_id ? (_oj6.houg += 4, _oj6.tyku += 2, _oj9 = 2) : 541 != _oj4.ship_id && 573 != _oj4.ship_id && 553 != _oj4.ship_id && 554 != _oj4.ship_id || (_oj6.houg += 2, _oj6.tyku += 2, _oj9 = 1), _oj8) {
                var _oja = _oj4.get_slotnums(411);
                _oj6.add(_oj7.multiply(_oja));
            }
            if (0 == _oj9) return _oj6;
            var _ojb = _oj4.get_each_level_nums(411),
                _ojc = 0,
                _ojd = 0;
            return _oj9 > 0 && _ojb.forEach(function(_oje, _ojf) {
                _ojf >= 4 && (_ojc += _oje), _ojf >= 5 && (_ojd += _oje);
            }), 1 == _oj9 ? (_ojc >= 1 && (_oj6.houg += 1, _oj6.tyku += 1), _ojb[10] >= 1 && (_oj6.houg += 1, _oj6.tyku += 1)) : 2 == _oj9 && (_ojd >= 1 && (_oj6.houg += 1, _oj6.tyku += 1), _ojb[10] >= 1 && (_oj6.houg += 2, _oj6.tyku += 1)), _oj6;
        };
    },
    74428: (_ojg, _ojh, _oji) => {
        'use strict';
        var _ojj = null;
        defineModule(_ojh);
        Object.defineProperty(_ojh, '__esModule', {
            'value': true
        }), _ojh.getSlot412PersonalEffect = void 0;
        var _ojk = _oji(74496);
        _ojh.getSlot412PersonalEffect = function(_ojl) {
            var _ojm = null,
                _ojn = new _ojk.SlotItemEffectModel(),
                _ojo = false,
                _ojp = 0,
                _ojq = new _ojk.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_ojl.ctype) >= 0 ? (_ojn.houg += 2, _ojn.raig += 4, _ojn.tais += 2, _ojq.kaih += 3, _ojq.saku += 1, _ojo = true, _ojp = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_ojl.ctype) >= 0 ? (_ojn.houg += 3, _ojn.raig += 3, _ojq.kaih += 2, _ojq.saku += 3, _ojo = true, _ojp = 1) : [7, 13, 29, 8, 9, 31].indexOf(_ojl.ctype) >= 0 && (_ojn.houg += 1, _ojq.kaih += 1, _ojq.saku += 1, _ojo = true), 0 == _ojo) return _ojn;
            var _ojr = _ojl.get_slotnums(412);
            if (_ojn.add(_ojq.multiply(_ojr)), 0 == _ojp) return _ojn;
            var _ojs = _ojl.get_each_level_nums(412),
                _ojt = 0,
                _oju = 0;
            return _ojp > 0 && _ojs.forEach(function(_ojv, _ojw) {
                _ojw >= 4 && (_ojt += _ojv), _ojw >= 8 && (_oju += _ojv);
            }), 1 == _ojp && (_ojt > 0 && (_ojn.houg += 1), _oju > 0 && (_ojn.raig += 1)), _ojn;
        };
    },
    2631: (_ojx, _ojy, _ojz) => {
        'use strict';
        var _ok0 = null;
        defineModule(_ojy);
        Object.defineProperty(_ojy, '__esModule', {
            'value': true
        }), _ojy.getSlot413PersonalEffect = void 0;
        var _ok1 = _ojz(74496);
        _ojy.getSlot413PersonalEffect = function(_ok2) {
            var _ok3 = null,
                _ok4 = new _ok1.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_ok2.ctype) >= 0 ? (_ok4.houg += 2, _ok4.raig += 2, _ok4.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_ok2.ctype) >= 0 && (_ok4.houg += 4, _ok4.raig += 2, _ok4.kaih += 2), 38 == _ok2.ctype || 54 == _ok2.ctype ? (_ok4.houg += 2, _ok4.raig += 3, _ok4.kaih += 3) : 4 == _ok2.ctype || 20 == _ok2.ctype || 16 == _ok2.ctype || 41 == _ok2.ctype || 52 == _ok2.ctype ? (_ok4.houg += 1, _ok4.raig += 2, _ok4.kaih += 2) : 21 != _ok2.ctype && 34 != _ok2.ctype || (_ok4.tyku += 2, _ok4.raig += 1, _ok4.kaih += 1), 'なか' == _ok2.yomi || 'ゆら' == _ok2.yomi || 'やはぎ' == _ok2.yomi || 'のしろ' == _ok2.yomi || 'はまなみ' == _ok2.yomi || 'しまかぜ' == _ok2.yomi || 'きよしも' == _ok2.yomi || 'はつしも' == _ok2.yomi ? (_ok4.tyku += 1, _ok4.kaih += 1) : 'じんつう' != _ok2.yomi && 'せんだい' != _ok2.yomi && 'ながなみ' != _ok2.yomi && 'はつしも' != _ok2.yomi && 'てるづき' != _ok2.yomi || (_ok4.houg += 1, _ok4.raig += 1), 543 == _ok2.ship_id ? (_ok4.houg += 1, _ok4.kaih += 1) : 159 == _ok2.ship_id && (_ok4.houg += 2), _ok4;
        };
    },
    27177: (_ok5, _ok6, _ok7) => {
        'use strict';
        var _ok8 = null;
        defineModule(_ok6);
        Object.defineProperty(_ok6, '__esModule', {
            'value': true
        }), _ok6.getSlot415PersonalEffect = void 0;
        var _ok9 = _ok7(74496);
        _ok6.getSlot415PersonalEffect = function(_oka) {
            var _okb = null,
                _okc = new _ok9.SlotItemEffectModel(),
                _okd = [];
            if ('アメリカ' == _oka.getCountryName() && (_okc.saku += 1, _okc.tais += 1, _okd.push(1)), 95 != _oka.ctype && 99 != _oka.ctype && 106 != _oka.ctype && 110 != _oka.ctype && 121 != _oka.ctype || (_okc.houg += 1, _okd.push(2)), 0 == _okd.length) return _okc;
            var _oke = _oka.get_each_level_nums(415),
                _okf = 0,
                _okg = 0,
                _okh = 0;
            return _okd.length > 0 && (_oke.forEach(function(_oki, _okj) {
                _okj >= 5 && (_okf += _oki), _okj >= 3 && (_okg += _oki), _okj >= 8 && (_okh += _oki);
            }), _okd.forEach(function(_okk) {
                var _okl = null;
                1 == _okk ? _okf >= 1 && (_okc.kaih += 1) : 2 == _okk && (_okg >= 1 && (_okc.kaih += 1), _okh >= 1 && (_okc.houg += 1));
            })), _okc;
        };
    },
    53908: (_okm, _okn, _oko) => {
        'use strict';
        var _okp = null;
        defineModule(_okn);
        Object.defineProperty(_okn, '__esModule', {
            'value': true
        }), _okn.getSlot419PersonalEffect = void 0;
        var _okq = _oko(74496);
        _okn.getSlot419PersonalEffect = function(_okr) {
            var _oks = null,
                _okt = new _okq.SlotItemEffectModel(),
                _oku = false,
                _okv = new _okq.SlotItemEffectModel(),
                _okw = 0;
            if ('アメリカ' == _okr.getCountryName() && (_okv.houg += 2, _oku = true, _okw = 1), 0 == _oku) return _okt;
            var _okx = _okr.get_slotnums(419);
            if (_okt.add(_okv.multiply(_okx)), 0 == _okw) return _okt;
            var _oky = _okr.get_each_level_nums(419),
                _okz = 0,
                _ol0 = 0;
            return _okw > 0 && _oky.forEach(function(_ol1, _ol2) {
                _ol2 >= 2 && (_okz += _ol1), _ol2 >= 7 && (_ol0 += _ol1);
            }), 1 == _okw && (_okz >= 1 && (_okt.houg += 1 * _okz), _ol0 >= 1 && (_okt.houg += 1 * _ol0)), _okt;
        };
    },
    79813: (_ol3, _ol4, _ol5) => {
        'use strict';
        var _ol6 = null;
        defineModule(_ol4);
        Object.defineProperty(_ol4, '__esModule', {
            'value': true
        }), _ol4.getSlot420PersonalEffect = void 0;
        var _ol7 = _ol5(74496);
        _ol4.getSlot420PersonalEffect = function(_ol8) {
            var _ol9 = null,
                _ola = new _ol7.SlotItemEffectModel(),
                _olb = false,
                _olc = new _ol7.SlotItemEffectModel(),
                _old = 0,
                _ole = _ol8.getCountryName();
            if ('アメリカ' != _ole && 67 != _ol8.ctype && 78 != _ol8.ctype && 82 != _ol8.ctype && 88 != _ol8.ctype && 108 != _ol8.ctype && 112 != _ol8.ctype || (_olc.houg += 1, _old = 1, _olb = true), 84 == _ol8.ctype ? (_olc.houg += 1, _olb = true) : 78 == _ol8.ctype && (_olc.houg -= 1, _olb = true), 7 == _ol8.stype && (_olc.houg -= 2, _olc.kaih -= 1, _olc.souk -= 2, _olb = true), 0 == _olb) return _ola;
            var _olf = _ol8.get_slotnums(420);
            if (_ola.add(_olc.multiply(_olf)), 0 == _old) return _ola;
            var _olg = _ol8.get_each_level_nums(420),
                _olh = 0,
                _oli = 0,
                _olj = 0,
                _olk = 0;
            _old > 0 && _olg.forEach(function(_oll, _olm) {
                _olm >= 3 && (_olh += _oll), _olm >= 7 && (_oli += _oll), _olm >= 8 && (_olj += _oll), _olm >= 9 && (_olk += _oll);
            });
            var _oln = _olg[10];
            return 1 == _old && (_olh >= 1 && (_ola.houg += 1 * _olh), 'アメリカ' == _ole && (_oli >= 1 && (_ola.houm += 1 * _oli), _olj >= 1 && (_ola.houg += 1 * _olj), _olk >= 1 && (_ola.houm += 1 * _olk), _oln >= 1 && (_ola.houg += 1 * _oln))), _ola;
        };
    },
    16088: (_olo, _olp, _olq) => {
        'use strict';
        var _olr = null;
        defineModule(_olp);
        Object.defineProperty(_olp, '__esModule', {
            'value': true
        }), _olp.getSlot421PersonalEffect = void 0;
        var _ols = _olq(74496);
        _olp.getSlot421PersonalEffect = function(_olt) {
            var _olu = null,
                _olv = new _ols.SlotItemEffectModel(),
                _olw = false,
                _olx = new _ols.SlotItemEffectModel(),
                _oly = 0,
                _olz = _olt.getCountryName();
            if ('アメリカ' != _olz && 67 != _olt.ctype && 78 != _olt.ctype && 82 != _olt.ctype && 88 != _olt.ctype && 108 != _olt.ctype && 112 != _olt.ctype || (_olx.houg += 2, _olw = true, _oly = 1), 84 == _olt.ctype ? (_olx.houg += 1, _olw = true) : 78 == _olt.ctype && (_olx.houg -= 1, _olw = true), 7 == _olt.stype && (_olx.houg -= 2, _olx.kaih -= 1, _olx.souk -= 2, _olw = true), 0 == _olw) return _olv;
            var _om0 = _olt.get_slotnums(421);
            if (_olv.add(_olx.multiply(_om0)), 0 == _oly) return _olv;
            var _om1 = _olt.get_each_level_nums(421),
                _om2 = 0,
                _om3 = 0,
                _om4 = 0,
                _om5 = 0,
                _om6 = 0;
            _oly > 0 && _om1.forEach(function(_om7, _om8) {
                _om8 >= 5 && (_om2 += _om7), _om8 >= 6 && (_om3 += _om7), _om8 >= 7 && (_om4 += _om7), _om8 >= 8 && (_om5 += _om7), _om8 >= 9 && (_om6 += _om7);
            });
            var _om9 = _om1[10];
            return 1 == _oly && (_om2 >= 1 && (_olv.houg += 1 * _om2), 'アメリカ' == _olz && (_om3 >= 1 && (_olv.houm += 1 * _om3), _om4 >= 1 && (_olv.houg += 1 * _om4), _om5 >= 1 && (_olv.houm += 1 * _om5), _om6 >= 1 && (_olv.houg += 1 * _om6), _om9 >= 1 && (_olv.houm += 1 * _om9))), _olv;
        };
    },
    69939: (_oma, _omb, _omc) => {
        'use strict';
        var _omd = null;
        defineModule(_omb);
        Object.defineProperty(_omb, '__esModule', {
            'value': true
        }), _omb.getSlot422PersonalEffect = void 0;
        var _ome = _omc(74496);
        _omb.getSlot422PersonalEffect = function(_omf) {
            var _omg = null,
                _omh = new _ome.SlotItemEffectModel(),
                _omi = false,
                _omj = new _ome.SlotItemEffectModel();
            if ('アメリカ' != _omf.getCountryName() && 67 != _omf.ctype && 78 != _omf.ctype && 82 != _omf.ctype && 88 != _omf.ctype && 108 != _omf.ctype && 112 != _omf.ctype || (_omj.houg += 1, _omj.kaih += 1, _omi = true), 84 == _omf.ctype && (_omj.houg += 1, _omj.tyku += 1, _omi = true), 707 == _omf.ship_id && (_omj.houg += 2, _omj.kaih += 2, _omj.tyku += 2, _omi = true), 0 == _omi) return _omh;
            var _omk = _omf.get_slotnums(422);
            return _omh.add(_omj.multiply(_omk)), _omh;
        };
    },
    33734: (_oml, _omm, _omn) => {
        'use strict';
        var _omo = null;
        defineModule(_omm);
        Object.defineProperty(_omm, '__esModule', {
            'value': true
        }), _omm.getSlot423PersonalEffect = void 0;
        var _omp = _omn(74496);
        _omm.getSlot423PersonalEffect = function(_omq) {
            var _omr = null,
                _oms = new _omp.SlotItemEffectModel(),
                _omt = false,
                _omu = new _omp.SlotItemEffectModel();
            78 != _omq.ctype && 112 != _omq.ctype || (_omu.houg += 2, _omu.tyku += 2, _omu.kaih += 2, _omu.saku += 2, _omt = true);
            var _omv = _omq.getCountryName();
            if (67 == _omq.ctype || 78 == _omq.ctype || 82 == _omq.ctype || 88 == _omq.ctype || 108 == _omq.ctype || 112 == _omq.ctype ? (_omu.houg += 2, _omu.tyku += 2, _omu.kaih += 2, _omu.saku += 2, _omt = true) : 'アメリカ' == _omv && (_omu.houg += 1, _omu.tyku += 1, _omu.kaih += 1, _omu.saku += 1, _omt = true), 0 == _omt) return _oms;
            var _omw = _omq.get_slotnums(423);
            return _oms.add(_omu.multiply(_omw)), _oms;
        };
    },
    34432: (_omx, _omy, _omz) => {
        'use strict';
        var _on0 = null;
        defineModule(_omy);
        Object.defineProperty(_omy, '__esModule', {
            'value': true
        }), _omy.getSlot424PersonalEffect = void 0;
        var _on1 = _omz(74496);
        _omy.getSlot424PersonalEffect = function(_on2) {
            var _on3 = null,
                _on4 = new _on1.SlotItemEffectModel(),
                _on5 = false,
                _on6 = new _on1.SlotItemEffectModel(),
                _on7 = 0;
            67 != _on2.ctype && 78 != _on2.ctype && 82 != _on2.ctype && 88 != _on2.ctype && 108 != _on2.ctype && 112 != _on2.ctype || (_on6.houg += 2, _on6.raig += 3, _on5 = true, _on7 = 1);
            var _on8 = _on2.get_slotnums(424);
            _on5 && _on4.add(_on6.multiply(_on8));
            var _on9 = _on2.get_each_level_nums(424),
                _ona = 0,
                _onb = 0,
                _onc = 0;
            _on9.forEach(function(_ond, _one) {
                _one >= 2 && (_ona += _ond), _one >= 6 && (_onb += _ond), _one >= 8 && (_onc += _ond);
            });
            var _onf = _on9[10];
            return 1 == _on7 && (_ona >= 1 && (_on4.houg += 1 * _ona), _onb >= 1 && (_on4.houg += 1 * _onb), _onc >= 1 && (_on4.houm += 1 * _onc)), _onf > 0 && (_on4.houm += 1 * _onf), _on4;
        };
    },
    97423: (_ong, _onh, _oni) => {
        'use strict';
        var _onj = null;
        defineModule(_onh);
        Object.defineProperty(_onh, '__esModule', {
            'value': true
        }), _onh.getSlot425PersonalEffect = void 0;
        var _onk = _oni(74496);
        _onh.getSlot425PersonalEffect = function(_onl) {
            var _onm = null,
                _onn = new _onk.SlotItemEffectModel(),
                _ono = false,
                _onp = new _onk.SlotItemEffectModel(),
                _onq = 0;
            67 != _onl.ctype && 78 != _onl.ctype && 82 != _onl.ctype && 88 != _onl.ctype && 108 != _onl.ctype && 112 != _onl.ctype || (_onp.houg += 2, _onp.tais += 2, _onp.raig += 1, _onp.saku += 1, _ono = true, _onq = 1);
            var _onr = _onl.get_slotnums(425);
            _ono && _onn.add(_onp.multiply(_onr));
            var _ons = _onl.get_each_level_nums(425),
                _ont = 0,
                _onu = 0,
                _onv = 0,
                _onw = 0,
                _onx = 0,
                _ony = 0;
            _ons.forEach(function(_onz, _oo0) {
                _oo0 >= 2 && (_ont += _onz), _oo0 >= 4 && (_onu += _onz), _oo0 >= 6 && (_onv += _onz), _oo0 >= 7 && (_onw += _onz), _oo0 >= 8 && (_onx += _onz), _oo0 >= 9 && (_ony += _onz);
            });
            var _oo1 = _ons[10];
            return 1 == _onq && (_ont >= 1 && (_onn.tais += 1 * _ont), _onu >= 1 && (_onn.houg += 1 * _onu), _onv >= 1 && (_onn.tais += 1 * _onv), _onw >= 1 && (_onn.houm += 1 * _onw), _onx >= 1 && (_onn.raig += 1 * _onx), _ony >= 1 && (_onn.houg += 1 * _ony), _oo1 >= 1 && (_onn.tais += 1 * _oo1)), _onw >= 1 && (_onn.houg += 1 * _onw), _onx >= 1 && (_onn.tais += 1 * _onx), _ony >= 1 && (_onn.houm += 1 * _ony), _oo1 >= 1 && (_onn.houm += 1 * _oo1), _onn;
        };
    },
    23551: (_oo2, _oo3, _oo4) => {
        'use strict';
        var _oo5 = null;
        defineModule(_oo3);
        Object.defineProperty(_oo3, '__esModule', {
            'value': true
        }), _oo3.getSlot430PersonalEffect = void 0;
        var _oo6 = _oo4(74496);
        _oo3.getSlot430PersonalEffect = function(_oo7) {
            var _oo8 = null,
                _oo9 = new _oo6.SlotItemEffectModel(),
                _ooa = false,
                _oob = new _oo6.SlotItemEffectModel(),
                _ooc = 0;
            if (113 == _oo7.ctype && (_oob.tyku += 1, _oob.kaih += 1, _ooa = true), 58 != _oo7.ctype && 61 != _oo7.ctype && 64 != _oo7.ctype && 68 != _oo7.ctype && 80 != _oo7.ctype && 92 != _oo7.ctype && 113 != _oo7.ctype && 124 != _oo7.ctype || (_oob.tyku += 2, _oob.kaih += 1, _ooa = true, _ooc = 1), 0 == _ooa) return _oo9;
            var _ood = _oo7.get_slotnums(430);
            if (_oo9.add(_oob.multiply(_ood)), 0 == _ooc) return _oo9;
            var _ooe = _oo7.get_each_level_nums(430),
                _oof = 0,
                _oog = 0,
                _ooh = 0;
            if (_ooc > 0 && _ooe.forEach(function(_ooi, _ooj) {
                    _ooj >= 2 && (_oof += _ooi), _ooj >= 4 && (_oog += _ooi), _ooj >= 7 && (_ooh += _ooi);
                }), 1 == _ooc) {
                _oof >= 1 && (_oo9.kaih += 1 * _oof), _oog >= 1 && (_oo9.tyku += 1 * _oog), _ooh >= 1 && (_oo9.kaih += 1 * _ooh);
                var _ook = _ooe[10];
                _ook >= 1 && (_oo9.tyku += 1 * _ook);
            }
            return _oo9;
        };
    },
    6173: (_ool, _oom, _oon) => {
        'use strict';
        var _ooo = null;
        defineModule(_oom);
        Object.defineProperty(_oom, '__esModule', {
            'value': true
        }), _oom.getSlot437PersonalEffect = void 0;
        var _oop = _oon(74496);
        _oom.getSlot437PersonalEffect = function(_ooq) {
            var _oor = null,
                _oos = new _oop.SlotItemEffectModel(),
                _oot = false,
                _oou = new _oop.SlotItemEffectModel();
            if (285 == _ooq.ship_id ? (_oou.houg += 3, _oou.tyku += 3, _oou.kaih += 4, _oot = true) : 894 == _ooq.ship_id || 899 == _ooq.ship_id ? (_oou.houg += 4, _oou.tyku += 4, _oou.kaih += 4, _oot = true) : 196 == _ooq.ship_id || 197 == _ooq.ship_id ? (_oou.houg += 2, _oou.tyku += 2, _oou.kaih += 3, _oot = true) : 508 == _ooq.ship_id || 509 == _ooq.ship_id || 646 == _ooq.ship_id ? (_oou.houg += 2, _oou.tyku += 2, _oou.kaih += 2, _oot = true) : 888 != _ooq.ship_id && 883 != _ooq.ship_id && 553 != _ooq.ship_id && 554 != _ooq.ship_id || (_oou.houg += 1, _oou.tyku += 2, _oou.kaih += 2, _oot = true), 0 == _oot) return _oos;
            var _oov = _ooq.get_slotnums(437);
            return _oos.add(_oou.multiply(_oov)), _oos;
        };
    },
    53709: (_oow, _oox, _ooy) => {
        'use strict';
        var _ooz = null;
        defineModule(_oox);
        Object.defineProperty(_oox, '__esModule', {
            'value': true
        }), _oox.getSlot438PersonalEffect = void 0;
        var _op0 = _ooy(74496);
        _oox.getSlot438PersonalEffect = function(_op1) {
            var _op2 = null,
                _op3 = new _op0.SlotItemEffectModel(),
                _op4 = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_op1.ctype) > -1 && (_op3.tais += 1, _op3.kaih += 1), 160 == _op1.ship_id || 488 == _op1.ship_id || 141 == _op1.ship_id ? (_op3.tais += 1, _op3.kaih += 1) : 145 != _op1.ship_id && 588 != _op1.ship_id && 667 != _op1.ship_id && 578 != _op1.ship_id && 476 != _op1.ship_id && 363 != _op1.ship_id && 961 != _op1.ship_id || (_op4 = 1), 'うしお' == _op1.yomi || 'まいかぜ' == _op1.yomi || 'いそかぜ' == _op1.yomi || 'はまかぜ' == _op1.yomi || 'いかづち' == _op1.yomi || 'やまぐも' == _op1.yomi || 'うみかぜ' == _op1.yomi || 'かわかぜ' == _op1.yomi || 'すずかぜ' == _op1.yomi ? _op3.tais += 1 : 'しぐれ' != _op1.yomi && 'やまかぜ' != _op1.yomi && 'かみかぜ' != _op1.yomi && 'はるかぜ' != _op1.yomi && 'みくら' != _op1.yomi && 'いしがき' != _op1.yomi || (_op3.tais += 1, _op3.kaih += 1), 0 == _op4) return _op3;
            var _op5 = _op1.get_each_level_nums(438),
                _op6 = 0,
                _op7 = 0,
                _op8 = 0,
                _op9 = _op5[10];
            return _op4 > 0 && _op5.forEach(function(_opa, _opb) {
                _opb >= 4 && (_op6 += _opa), _opb >= 6 && (_op7 += _opa), _opb >= 8 && (_op8 += _opa);
            }), 1 == _op4 && (_op6 >= 1 && (_op3.tais += 1), _op7 >= 1 && (_op3.kaih += 1), _op8 >= 1 && (_op3.tais += 1), _op9 >= 1 && (_op3.kaih += 1)), _op3;
        };
    },
    99790: (_opc, _opd, _ope) => {
        'use strict';
        var _opf = null;
        defineModule(_opd);
        Object.defineProperty(_opd, '__esModule', {
            'value': true
        }), _opd.getSlot439PersonalEffect = void 0;
        var _opg = _ope(74496);
        _opd.getSlot439PersonalEffect = function(_oph) {
            var _opi = null,
                _opj = new _opg.SlotItemEffectModel();
            1 != _oph.stype && 2 != _oph.stype && 3 != _oph.stype && 21 != _oph.stype || (_opj.tais += 1, _opj.kaih += 1), 101 != _oph.ctype && 1 != _oph.stype || (_opj.tais += 1);
            var _opk = _oph.getCountryName();
            return 'アメリカ' != _opk && 'イギリス' != _opk || (_opj.tais += 2), _opj;
        };
    },
    18387: (_opl, _opm, _opn) => {
        'use strict';
        var _opo = null;
        defineModule(_opm);
        Object.defineProperty(_opm, '__esModule', {
            'value': true
        }), _opm.getSlot440_441PersonalEffect = void 0;
        var _opp = _opn(74496);
        _opm.getSlot440_441PersonalEffect = function(_opq) {
            var _opr = null,
                _ops = new _opp.SlotItemEffectModel();
            return 114 == _opq.ctype && (_ops.raig += 2), _ops;
        };
    },
    70941: (_opt, _opu, _opv) => {
        'use strict';
        var _opw = null;
        defineModule(_opu);
        Object.defineProperty(_opu, '__esModule', {
            'value': true
        }), _opu.getSlot442_443PersonalEffect = void 0;
        var _opx = _opv(74496);
        _opu.getSlot442_443PersonalEffect = function(_opy) {
            var _opz = null,
                _oq0 = new _opx.SlotItemEffectModel();
            return 122 == _opy.ctype ? (_oq0.raig += 1, _oq0.kaih += 2) : 114 == _opy.ctype && (_oq0.raig += 2), _oq0;
        };
    },
    35025: (_oq1, _oq2, _oq3) => {
        'use strict';
        var _oq4 = null;
        defineModule(_oq2);
        Object.defineProperty(_oq2, '__esModule', {
            'value': true
        }), _oq2.getSlot447PersonalEffect = void 0;
        var _oq5 = _oq3(74496);
        _oq2.getSlot447PersonalEffect = function(_oq6) {
            var _oq7 = null,
                _oq8 = new _oq5.SlotItemEffectModel(),
                _oq9 = _oq6.get_each_level_nums(447),
                _oqa = 0,
                _oqb = 0,
                _oqc = 0,
                _oqd = 0;
            _oq9.forEach(function(_oqe, _oqf) {
                _oqf >= 2 && (_oqa += _oqe), _oqf >= 4 && (_oqb += _oqe), _oqf >= 6 && (_oqc += _oqe), _oqf >= 8 && (_oqd += _oqe);
            }), _oqa >= 1 && (_oq8.houg += 1 * _oqa), _oqb >= 1 && (_oq8.tyku += 1 * _oqb), _oqc >= 1 && (_oq8.tais += 1 * _oqc), _oqd >= 1 && (_oq8.kaih += 1 * _oqd);
            var _oqg = _oq9[10];
            _oqg >= 1 && (_oq8.tais += 1 * _oqg);
            var _oqh = false,
                _oqi = new _oq5.SlotItemEffectModel();
            if (76 == _oq6.ctype && (_oqi.houg += 1, _oqi.tais += 1, _oqi.kaih += 2, _oqh = true), 'うんよう' == _oq6.yomi ? (_oqi.houg += 1, _oqi.tais += 1, _oqi.kaih += 1, _oqh = true) : 'ほうしょう' != _oq6.yomi && 'たいげい・りゅうほう' != _oq6.yomi || (_oqi.houg += 1, _oqi.tais += 2, _oqi.kaih += 1, _oqh = true), 0 == _oqh) return _oq8;
            894 != _oq6.ship_id && 899 != _oq6.ship_id || (_oqi.houg += 1, _oqi.kaih += 1, _oqi.tais += 1, _oqi.tyku += 1, _oqh = true);
            var _oqj = _oq6.get_slotnums(447);
            return _oq8.add(_oqi.multiply(_oqj)), _oq8;
        };
    },
    96804: (_oqk, _oql, _oqm) => {
        'use strict';
        var _oqn = null;
        defineModule(_oql);
        Object.defineProperty(_oql, '__esModule', {
            'value': true
        }), _oql.getSlot450PersonalEffect = void 0;
        var _oqo = _oqm(74496);
        _oql.getSlot450PersonalEffect = function(_oqp) {
            var _oqq = null,
                _oqr = new _oqo.SlotItemEffectModel(),
                _oqs = false,
                _oqt = new _oqo.SlotItemEffectModel();
            if (101 == _oqp.ctype && (_oqt.houg += 1, _oqt.tyku += 2, _oqt.souk += 1, _oqt.kaih += 3, _oqs = true), 1 == _oqp.stype && (_oqt.tyku += 1, _oqt.souk += 1, _oqt.kaih += 2, _oqs = true), 0 == _oqs) return _oqr;
            var _oqu = _oqp.get_slotnums(450);
            return _oqr.add(_oqt.multiply(_oqu)), _oqr;
        };
    },
    33896: (_oqv, _oqw, _oqx) => {
        'use strict';
        var _oqy = null;
        defineModule(_oqw);
        Object.defineProperty(_oqw, '__esModule', {
            'value': true
        }), _oqw.getSlot451PersonalEffect = void 0;
        var _oqz = _oqx(74496);
        _oqw.getSlot451PersonalEffect = function(_or0) {
            var _or1 = null,
                _or2 = new _oqz.SlotItemEffectModel(),
                _or3 = false,
                _or4 = new _oqz.SlotItemEffectModel(),
                _or5 = 0;
            if ('あきつまる' == _or0.yomi ? (_or4.houg += 1, _or4.tais += 2, _or3 = true, 166 == _or0.ship_id && (_or5 = 2)) : 'やましおまる' != _or0.yomi && 'くまのまる' != _or0.yomi || (_or4.houg += 1, _or4.tais += 3, _or3 = true, _or5 = 1), 0 == _or3) return _or2;
            var _or6 = _or0.get_slotnums(451);
            if (_or2.add(_or4.multiply(_or6)), 0 == _or5) return _or2;
            var _or7 = _or0.get_each_level_nums(451),
                _or8 = [];
            return _or5 > 0 && _or7.forEach(function(_or9, _ora) {
                var _orb = null;
                for (var _orc = 1; _orc <= _or0.SLOT_LEVEL_MAX; _orc++) _ora >= _orc && (null == _or8[_orc] && (_or8[_orc] = 0), _or8[_orc] += _or9);
            }), 1 == _or5 ? (_or8[1] >= 1 && (_or2.houg += 2 * _or8[1]), _or8[2] >= 1 && (_or2.houm += 1 * _or8[2]), _or8[3] >= 1 && (_or2.tais += 1 * _or8[3]), _or8[4] >= 1 && (_or2.houg += 1 * _or8[4]), _or8[6] >= 1 && (_or2.houm += 1 * _or8[6]), _or8[8] >= 1 && (_or2.tais += 1 * _or8[8]), _or8[10] >= 1 && (_or2.houg += 1 * _or8[10])) : 2 == _or5 && (_or8[1] >= 1 && (_or2.houg += 1 * _or8[1]), _or8[3] >= 1 && (_or2.tais += 1 * _or8[3]), _or8[5] >= 1 && (_or2.houm += 1 * _or8[5]), _or8[7] >= 1 && (_or2.tais += 1 * _or8[7]), _or8[10] >= 1 && (_or2.houg += 1 * _or8[10])), _or2;
        };
    },
    11031: function(_ord, _ore, _orf) {
        'use strict';
        var _org = null;
        var _orh = this && this.__importDefault || function(_ori) {
            var _orj = null;
            return _ori && _ori.__esModule ? _ori : {
                'default': _ori
            };
        };
        defineModule(_ore);
        Object.defineProperty(_ore, '__esModule', {
            'value': true
        }), _ore.getSlot455PersonalEffect = void 0;
        var _ork = _orf(74496),
            _orl = _orh(_orf(18622));
        _ore.getSlot455PersonalEffect = function(_orm) {
            var _orn = null,
                _oro = new _ork.SlotItemEffectModel(),
                _orp = false,
                _orq = new _ork.SlotItemEffectModel(),
                _orr = 0,
                _ors = _orm.get_slotnums(455);
            if (1 != _orm.ctype && 5 != _orm.ctype && 12 != _orm.ctype || (_orq.houg += 2, _orq.tyku += 1, 12 == _orm.ctype && (_orq.houg += 1), 666 == _orm.ship_id ? (_orq.houg += 1, _orq.tais += 1) : 959 == _orm.ship_id && (_orq.houg += 2, _ors >= 2 && (_oro.houg += 2), _ors >= 3 && (_oro.houg += 3)), _orr = 1, _orp = true), 'うらなみ' == _orm.yomi && (_orq.houg += 1, 647 == _orm.ship_id && (_orq.houg += 1, _orq.raig += 1, _orq.tais += 1, _orq.kaih += 1), _orp = true), 0 == _orp) return _oro;
            if (_oro.add(_orq.multiply(_ors)), 0 == _orr) return _oro;
            for (var _ort = 0, _oru = 0, _orv = 0, _orw = _orm.have_slot_ids(); _orv < _orw.length; _orv++) {
                var _orx = _orw[_orv],
                    _ory = _orl.default.model.slot.getMst(_orx),
                    _orz = _ory.equipType;
                12 != _orz && 13 != _orz || (_ory.sakuteki >= 5 && (_ort += _orm.get_slotnums(parseInt(_orx))), _ory.taiku >= 2 && (_oru += _orm.get_slotnums(parseInt(_orx))));
            }
            if (1 == _orr) {
                _ort >= 1 && (_oro.houg += 3, _oro.kaih += 2, _oro.raig += 1);
                var _os0 = _orm.get_slotnums(13),
                    _os1 = _orm.get_slotnums(125),
                    _os2 = _orm.get_slotnums(285),
                    _os3 = _os0 + _os1 + _os2;
                1 == _os3 ? (_oro.houg += 1, _oro.raig += 3) : _os3 >= 2 && (_oro.houg += 2, _oro.raig += 5), _os2 >= 1 && (_oro.raig += 1), _oru >= 1 && (_oro.tyku += 4);
            }
            return _oro;
        };
    },
    71383: (_os4, _os5, _os6) => {
        'use strict';
        var _os7 = null;
        defineModule(_os5);
        Object.defineProperty(_os5, '__esModule', {
            'value': true
        }), _os5.getSlot456PersonalEffect = void 0;
        var _os8 = _os6(74496);
        _os5.getSlot456PersonalEffect = function(_os9) {
            var _osa = null,
                _osb = new _os8.SlotItemEffectModel(),
                _osc = false,
                _osd = new _os8.SlotItemEffectModel(),
                _ose = _os9.getCountryName();
            if ('アメリカ' == _ose && (_osd.houg += 3, _osd.kaih += 4, _osd.saku += 4, _osb.houm += 3, _osc = true), 'イギリス' != _ose && 'オーストラリア' != _ose || (_osd.houg += 2, _osd.kaih += 2, _osd.saku += 2, _osb.houm += 2, _osc = true), 87 != _os9.ctype && 91 != _os9.ctype || (_osd.houg += 1, _osb.leng += 1, _osc = true), 651 != _os9.ship_id && 656 != _os9.ship_id || (_osb.houg += 2, _osb.kaih += 2, _osb.saku += 3, _osb.leng += 1, _osb.houm += 2), 0 == _osc) return _osb;
            var _osf = _os9.get_slotnums(456);
            return _osb.add(_osd.multiply(_osf)), _osb;
        };
    },
    55888: (_osg, _osh, _osi) => {
        'use strict';
        var _osj = null;
        defineModule(_osh);
        Object.defineProperty(_osh, '__esModule', {
            'value': true
        }), _osh.getSlot457PersonalEffect = void 0;
        var _osk = _osi(74496);
        _osh.getSlot457PersonalEffect = function(_osl) {
            var _osm = null,
                _osn = new _osk.SlotItemEffectModel(),
                _oso = 0;
            if (109 == _osl.ctype ? (_osn.raig += 3, _osn.kaih += 3, _oso = 1) : 71 == _osl.ctype || 103 == _osl.ctype ? (_osn.raig += 2, _osn.kaih += 2, _oso = 2) : 44 == _osl.ctype && (_osn.raig += 1, _osn.kaih += 4, _oso = 3), 0 == _oso) return _osn;
            var _osp = _osl.get_each_level_nums(461),
                _osq = [];
            return _oso > 0 && _osp.forEach(function(_osr, _oss) {
                var _ost = null;
                for (var _osu = 1; _osu <= _osl.SLOT_LEVEL_MAX; _osu++) null == _osq[_osu] && (_osq[_osu] = 0), _oss >= _osu && (_osq[_osu] += _osr);
            }), 1 == _oso ? (_osq[2] >= 1 && (_osn.raig += 1 * _osq[2]), _osq[3] >= 1 && (_osn.kaih += 1 * _osq[3]), _osq[4] >= 1 && (_osn.raig += 1 * _osq[4]), _osq[5] >= 1 && (_osn.houm += 1 * _osq[5]), _osq[6] >= 1 && (_osn.raig += 1 * _osq[6]), _osq[8] >= 1 && (_osn.raig += 1 * _osq[8]), _osq[10] >= 1 && (_osn.houm += 1 * _osq[10])) : 2 == _oso ? (_osq[3] >= 1 && (_osn.kaih += 1 * _osq[3]), _osq[4] >= 1 && (_osn.raig += 1 * _osq[4]), _osq[6] >= 1 && (_osn.raig += 1 * _osq[6]), _osq[8] >= 1 && (_osn.raig += 1 * _osq[8]), _osq[10] >= 1 && (_osn.houm += 1 * _osq[10])) : 3 == _oso && (_osq[4] >= 1 && (_osn.raig += 1 * _osq[4]), _osq[6] >= 1 && (_osn.raig += 1 * _osq[6]), _osq[8] >= 1 && (_osn.raig += 1 * _osq[8]), _osq[10] >= 1 && (_osn.houm += 1 * _osq[10])), _osn;
        };
    },
    2258: (_osv, _osw, _osx) => {
        'use strict';
        var _osy = null;
        defineModule(_osw);
        Object.defineProperty(_osw, '__esModule', {
            'value': true
        }), _osw.getSlot458PersonalEffect = void 0;
        var _osz = _osx(74496);
        _osw.getSlot458PersonalEffect = function(_ot0) {
            var _ot1 = null,
                _ot2 = new _osz.SlotItemEffectModel(),
                _ot3 = 0,
                _ot4 = false;
            if (13 != _ot0.stype && 14 != _ot0.stype || (_ot4 = true), 109 == _ot0.ctype ? (_ot2.raig += 3, _ot2.kaih += 6, _ot3 = 1) : 71 == _ot0.ctype || 103 == _ot0.ctype ? (_ot2.raig += 3, _ot2.kaih += 4, _ot3 = 2) : 44 == _ot0.ctype && (_ot2.raig += 3, _ot2.kaih += 3, _ot3 = 3), 0 == _ot4 && 0 == _ot3) return _ot2;
            var _ot5 = [];
            [458, 461].forEach(function(_ot6) {
                var _ot7 = null,
                    _ot8 = _ot0.get_each_level_nums(_ot6);
                null == _ot5[_ot6] && (_ot5[_ot6] = []), _ot8.forEach(function(_ot9, _ota) {
                    var _otb = null;
                    for (var _otc = 1; _otc <= _ot0.SLOT_LEVEL_MAX; _otc++) null == _ot5[_ot6][_otc] && (_ot5[_ot6][_otc] = 0), _ota >= _otc && (_ot5[_ot6][_otc] += _ot9);
                });
            });
            var _otd = _ot5[458][2],
                _ote = _ot5[458][3],
                _otf = _ot5[458][4],
                _otg = _ot5[458][5],
                _oth = _ot5[458][6],
                _oti = _ot5[458][8],
                _otj = _ot5[458][10],
                _otk = _ot5[461][4];
            return _ot3 >= 1 && _ot3 <= 3 && (_otf >= 1 && (_ot2.houm += 1 * _otf), _oth >= 1 && (_ot2.kaih += 1 * _oth), _oti >= 1 && (_ot2.raig += 1 * _oti)), _ot4 && (_ote >= 1 && (_ot2.kaih += 1 * _ote), _otg >= 1 && (_ot2.raig += 1 * _otg), _otj >= 1 && (_ot2.houm += 1 * _otj), _otd >= 1 && _otk >= 1 && (_ot2.raig += 7, _ot2.houm += 5)), _ot2;
        };
    },
    43768: (_otl, _otm, _otn) => {
        'use strict';
        var _oto = null;
        defineModule(_otm);
        Object.defineProperty(_otm, '__esModule', {
            'value': true
        }), _otm.getSlot463PersonalEffect = void 0;
        var _otp = _otn(74496);
        _otm.getSlot463PersonalEffect = function(_otq) {
            var _otr = null,
                _ots = new _otp.SlotItemEffectModel(),
                _ott = false,
                _otu = new _otp.SlotItemEffectModel(),
                _otv = _otq.get_slotnums(142),
                _otw = _otq.get_slotnums(460),
                _otx = _otv + _otw;
            if (37 == _otq.ctype && (_otu.houg += 1, _otu.tyku += 2, _otu.kaih += 1, _otu.houm += 1, _otx >= 1 && (_ots.tyku += 1, _ots.kaih += 1, _ots.houm += 1), _ott = true), 916 != _otq.ship_id && 911 != _otq.ship_id && 546 != _otq.ship_id || (_otu.houg += 1, _otu.kaih += 1, _otu.houm += 2, _otw >= 1 && (_ots.houg += 1, _ots.kaih += 1, _ots.houm += 2), _ott = true), 0 == _ott) return _ots;
            var _oty = _otq.get_slotnums(463);
            return _ots.add(_otu.multiply(_oty)), _ots;
        };
    },
    92174: (_otz, _ou0, _ou1) => {
        'use strict';
        var _ou2 = null;
        defineModule(_ou0);
        Object.defineProperty(_ou0, '__esModule', {
            'value': true
        }), _ou0.getSlot464PersonalEffect = void 0;
        var _ou3 = _ou1(74496);
        _ou0.getSlot464PersonalEffect = function(_ou4) {
            var _ou5 = null,
                _ou6 = new _ou3.SlotItemEffectModel(),
                _ou7 = false,
                _ou8 = new _ou3.SlotItemEffectModel(),
                _ou9 = _ou4.get_slotnums(142),
                _oua = _ou4.get_slotnums(460),
                _oub = _ou9 + _oua;
            if (37 == _ou4.ctype ? (_ou8.tyku += 3, _ou8.kaih += 2, _oub >= 1 && (_ou6.tyku += 2, _ou6.kaih += 1, _ou6.houm += 1), _ou7 = true) : 6 != _ou4.ctype && 73 != _ou4.ctype && 113 != _ou4.ctype || (_ou8.tyku = _ou8.tyku - 2, _ou8.kaih = _ou8.kaih - 2, _ou7 = true), 916 != _ou4.ship_id && 911 != _ou4.ship_id && 546 != _ou4.ship_id && 593 != _ou4.ship_id && 954 != _ou4.ship_id || (_ou8.tyku += 2, _ou8.kaih += 2, _oua >= 1 && (_ou6.houg += 2, _ou6.tyku += 2, _ou6.kaih += 2, _ou6.houm += 3), _ou7 = true), 0 == _ou7) return _ou6;
            var _ouc = _ou4.get_slotnums(464);
            return _ou6.add(_ou8.multiply(_ouc)), _ou6;
        };
    },
    38003: (_oud, _oue, _ouf) => {
        'use strict';
        var _oug = null;
        defineModule(_oue);
        Object.defineProperty(_oue, '__esModule', {
            'value': true
        }), _oue.getSlot465PersonalEffect = void 0;
        var _ouh = _ouf(74496);
        _oue.getSlot465PersonalEffect = function(_oui) {
            var _ouj = null,
                _ouk = new _ouh.SlotItemEffectModel(),
                _oul = false,
                _oum = new _ouh.SlotItemEffectModel(),
                _oun = _oui.get_slotnums(142),
                _ouo = _oui.get_slotnums(460),
                _oup = _oun + _ouo;
            if (916 == _oui.ship_id ? (_oum.houg += 2, _oum.kaih += 8, _oum.houm += 2, _ouo >= 1 && (_ouk.kaih += 2, _ouk.houm += 1), _oul = true) : 911 != _oui.ship_id && 546 != _oui.ship_id || (_oum.houg += 1, _oum.kaih += 2, _oum.houm += 1, _ouo >= 1 && (_ouk.kaih += 1, _ouk.houm += 1), _oul = true), 37 == _oui.ctype && _oup >= 1 && (_ouk.houg += 2, _ouk.houm += 2), 0 == _oul) return _ouk;
            var _ouq = _oui.get_slotnums(465);
            return _ouk.add(_oum.multiply(_ouq)), _ouk;
        };
    },
    65455: (_our, _ous, _out) => {
        'use strict';
        var _ouu = null;
        defineModule(_ous);
        Object.defineProperty(_ous, '__esModule', {
            'value': true
        }), _ous.getSlot466PersonalEffect = void 0;
        var _ouv = _out(74496);
        _ous.getSlot466PersonalEffect = function(_ouw) {
            var _oux = null,
                _ouy = new _ouv.SlotItemEffectModel(),
                _ouz = false,
                _ov0 = new _ouv.SlotItemEffectModel();
            if (277 == _ouw.ship_id || 278 == _ouw.ship_id || 156 == _ouw.ship_id || 288 == _ouw.ship_id || 112 == _ouw.ship_id || 280 == _ouw.ship_id || 279 == _ouw.ship_id ? (_ov0.houg += 1, _ov0.houm += 1, _ouz = true) : 461 == _ouw.ship_id || 462 == _ouw.ship_id || 466 == _ouw.ship_id || 467 == _ouw.ship_id ? (_ov0.houg += 2, _ov0.kaih += 2, _ov0.houm += 1, _ouz = true) : 594 != _ouw.ship_id && 698 != _ouw.ship_id && 646 != _ouw.ship_id && 599 != _ouw.ship_id && 610 != _ouw.ship_id && 196 != _ouw.ship_id && 197 != _ouw.ship_id || (_ov0.houg += 1, _ov0.kaih += 1, _ov0.houm += 2, _ouz = true), 0 == _ouz) return _ouy;
            var _ov1 = _ouw.get_slotnums(466);
            return _ouy.add(_ov0.multiply(_ov1)), _ouy;
        };
    },
    70362: (_ov2, _ov3, _ov4) => {
        'use strict';
        var _ov5 = null;
        defineModule(_ov3);
        Object.defineProperty(_ov3, '__esModule', {
            'value': true
        }), _ov3.getSlot467PersonalEffect = void 0;
        var _ov6 = _ov4(74496);
        _ov3.getSlot467PersonalEffect = function(_ov7) {
            var _ov8 = null,
                _ov9 = new _ov6.SlotItemEffectModel(),
                _ova = false,
                _ovb = new _ov6.SlotItemEffectModel();
            if ('アメリカ' == _ov7.getCountryName()) {
                for (var _ovc = _ov7.getUSSWaterRaderDict(), _ovd = _ov7.getUSSAirRaderDict(), _ove = 0, _ovf = 0, _ovg = 0, _ovh = _ov7.have_slot_ids(); _ovg < _ovh.length; _ovg++) {
                    var _ovi = _ovh[_ovg];
                    _ovc[parseInt(_ovi)] && (_ove += _ov7.get_slotnums(parseInt(_ovi))), _ovd[parseInt(_ovi)] && (_ovf += _ov7.get_slotnums(parseInt(_ovi)));
                }
                _ovb.houg += 1, _ovb.tyku += 1, _ovb.kaih += 2, _ove >= 1 && (_ov9.houg += 1, _ov9.tyku += 1, _ov9.kaih += 1, _ov9.houm += 2), _ovf >= 1 && (_ov9.tyku += 2, _ov9.kaih += 2), 65 != _ov7.ctype && 93 != _ov7.ctype && 102 != _ov7.ctype && 107 != _ov7.ctype && 125 != _ov7.ctype || (_ovb.tyku += 2, _ovb.kaih += 1), _ova = true;
            }
            if (0 == _ova) return _ov9;
            var _ovj = _ov7.get_slotnums(467);
            return _ov9.add(_ovb.multiply(_ovj)), _ov9;
        };
    },
    68086: (_ovk, _ovl, _ovm) => {
        'use strict';
        var _ovn = null;
        defineModule(_ovl);
        Object.defineProperty(_ovl, '__esModule', {
            'value': true
        }), _ovl.getSlot470PersonalEffect = void 0;
        var _ovo = _ovm(74496);
        _ovl.getSlot470PersonalEffect = function(_ovp) {
            var _ovq = null,
                _ovr = new _ovo.SlotItemEffectModel(),
                _ovs = false,
                _ovt = new _ovo.SlotItemEffectModel(),
                _ovu = _ovp.get_slotnums(470),
                _ovv = _ovp.get_slotnums(529),
                _ovw = _ovu + _ovv,
                _ovx = _ovp.get_each_level_over_nums([470, 529]),
                _ovy = (_ovx.slot[470], _ovx.slot[529]),
                _ovz = _ovx.total,
                _ow0 = 0;
            23 == _ovp.ctype || 18 == _ovp.ctype ? (_ovt.houg += 1, _ovs = true, _ow0 = 1) : 30 == _ovp.ctype && (_ovt.houg += 2, _ovs = true, _ow0 = 2), ('しぐれ' == _ovp.yomi || 'ゆきかぜ' == _ovp.yomi || 'いそかぜ' == _ovp.yomi) && (_ovt.kaih += 2, _ovs = true), 405 == _ovp.ship_id || 246 == _ovp.ship_id || 144 == _ovp.ship_id || 145 == _ovp.ship_id || 497 == _ovp.ship_id ? (_ovv >= 1 && (_ovr.houg += 1 * _ovv, _ovr.tyku += 1 * _ovv, _ovr.houm += 1 * _ovv, _ovr.kaih += 1 * _ovv), 2 == _ovv ? _ovr.houg += 1 : _ovv >= 3 && (_ovr.houg += 3), _ovy[8] >= 1 && (_ovr.tyku += 1 * _ovy[8]), _ovy[10] >= 1 && (_ovr.houg += 1 * _ovy[10])) : 323 == _ovp.ship_id || 498 == _ovp.ship_id || 961 == _ovp.ship_id ? (_ovv >= 1 && (_ovr.houg += 2 * _ovv, _ovr.tyku += 2 * _ovv, _ovr.houm += 1 * _ovv, _ovr.kaih += 1 * _ovv), 2 == _ovv ? _ovr.houg += 2 : _ovv >= 3 && (_ovr.houg += 4), _ovy[6] >= 1 && (_ovr.tyku += 1 * _ovy[6]), _ovy[8] >= 1 && (_ovr.houm += 1 * _ovy[8]), _ovy[10] >= 1 && (_ovr.houg += 1 * _ovy[10])) : 975 == _ovp.ship_id && (_ovv >= 1 && (_ovr.houg += 3 * _ovv, _ovr.tyku += 3 * _ovv, _ovr.houm += 2 * _ovv, _ovr.kaih += 2 * _ovv), 2 == _ovv ? _ovr.houg += 3 : _ovv >= 3 && (_ovr.houg += 6), _ovy[4] >= 1 && (_ovr.tyku += 1 * _ovy[4]), _ovy[6] >= 1 && (_ovr.houg += 1 * _ovy[6]), _ovy[8] >= 1 && (_ovr.houm += 1 * _ovy[8]), _ovy[10] >= 1 && (_ovr.houg += 1 * _ovy[10])), 961 == _ovp.ship_id && (_ovt.houg += 3, _ovt.houm += 3, _ovt.kaih += 2, _ovs = true), 566 != _ovp.ship_id && 567 != _ovp.ship_id && 568 != _ovp.ship_id && 656 != _ovp.ship_id && 670 != _ovp.ship_id && 915 != _ovp.ship_id && 651 != _ovp.ship_id && 145 != _ovp.ship_id && 961 != _ovp.ship_id && 951 != _ovp.ship_id || (_ovr.houg += 1, _ovr.houm += 2, _ovw >= 2 && (_ovr.houg += 2), _ovz[5] >= 1 && (_ovr.houm += 1 * _ovz[5]), _ovz[8] >= 1 && (_ovr.houg += 1 * _ovz[8]), _ovz[10] >= 1 && (_ovr.houm += 1 * _ovz[10])), _ovs && _ovr.add(_ovt.multiply(_ovw));
            var _ow1 = _ovp.get_have_rader_nums(),
                _ow2 = _ow1.water_rader,
                _ow3 = _ow1.air_rader;
            return _ow2 >= 1 && (1 == _ow0 ? (_ovr.houg += 1, _ovr.raig += 3, _ovr.kaih += 1, _ovr.houm += 1) : 2 == _ow0 && (_ovr.houg += 2, _ovr.raig += 3, _ovr.kaih += 1, _ovr.houm += 3)), _ow3 >= 1 && (_ovv >= 1 && (_ovr.tyku += 2, _ovr.kaih += 2), 2 == _ovv ? _ovr.tyku += 2 : _ovv >= 3 && (_ovr.tyku += 4)), _ovr;
        };
    },
    78173: (_ow4, _ow5, _ow6) => {
        'use strict';
        var _ow7 = null;
        defineModule(_ow5);
        Object.defineProperty(_ow5, '__esModule', {
            'value': true
        }), _ow5.getSlot471PersonalEffect = void 0;
        var _ow8 = _ow6(74496);
        _ow5.getSlot471PersonalEffect = function(_ow9) {
            var _owa = null,
                _owb = new _ow8.SlotItemEffectModel(),
                _owc = false,
                _owd = new _ow8.SlotItemEffectModel(),
                _owe = 0;
            if ('フランス' == _ow9.getCountryName() && (_owd.houg += 2, _owd.kaih += 2, _owd.houm += 2, _owc = true, _owe = 1), 79 == _ow9.ctype && (_owd.houg += 2, _owd.houm += 1, _owc = true), 0 == _owc) return _owb;
            var _owf = _ow9.get_slotnums(471);
            if (_owb.add(_owd.multiply(_owf)), 0 == _owe) return _owb;
            var _owg = _ow9.get_each_level_nums(471),
                _owh = 0,
                _owi = 0;
            if (_owe > 0 && _owg.forEach(function(_owj, _owk) {
                    _owk >= 6 && (_owh += _owj), _owk >= 8 && (_owi += _owj);
                }), 1 == _owe) {
                _owh >= 1 && (_owb.kaih += 1 * _owh, _owb.houm += 1 * _owh), _owi >= 1 && (_owb.houg += 1 * _owi, _owb.kaih += 1 * _owi, _owb.houm += 1 * _owi);
                var _owl = _owg[10];
                _owl >= 1 && (_owb.houg += 1 * _owl, _owb.houm += 1 * _owl);
            }
            return _owb;
        };
    },
    22581: (_owm, _own, _owo) => {
        'use strict';
        var _owp = null;
        defineModule(_own);
        Object.defineProperty(_own, '__esModule', {
            'value': true
        }), _own.getSlot472PersonalEffect = void 0;
        var _owq = _owo(74496);
        _own.getSlot472PersonalEffect = function(_owr) {
            var _ows = null,
                _owt = new _owq.SlotItemEffectModel(),
                _owu = false,
                _owv = new _owq.SlotItemEffectModel(),
                _oww = _owr.getCountryName();
            if ('アメリカ' == _oww && (_owv.tais += 2, _owu = true), 'イギリス' == _oww && (_owv.tais += 1, _owu = true), 1 == _owr.stype && (_owv.kaih += 1, _owu = true), _owu) {
                var _owx = _owr.get_slotnums(472);
                _owt.add(_owv.multiply(_owx));
            }
            return 920 == _owr.ship_id && (_owt.tais += 1, _owt.kaih += 1, _owt.houm += 1), _owt;
        };
    },
    13053: (_owy, _owz, _ox0) => {
        'use strict';
        var _ox1 = null;
        defineModule(_owz);
        Object.defineProperty(_owz, '__esModule', {
            'value': true
        }), _owz.getSlot473PersonalEffect = void 0;
        var _ox2 = _ox0(74496);
        _owz.getSlot473PersonalEffect = function(_ox3) {
            var _ox4 = null,
                _ox5 = new _ox2.SlotItemEffectModel(),
                _ox6 = false,
                _ox7 = new _ox2.SlotItemEffectModel(),
                _ox8 = _ox3.getCountryName();
            if ('アメリカ' == _ox8 && (_ox7.houg += 1, _ox7.kaih += 1, _ox7.tyku += 1, _ox6 = true), 'イギリス' == _ox8 && (_ox7.houg += 1, _ox7.kaih += 1, _ox6 = true), 0 == _ox6) return _ox5;
            var _ox9 = _ox3.get_slotnums(473);
            return _ox5.add(_ox7.multiply(_ox9)), _ox5;
        };
    },
    47874: (_oxa, _oxb, _oxc) => {
        'use strict';
        var _oxd = null;
        defineModule(_oxb);
        Object.defineProperty(_oxb, '__esModule', {
            'value': true
        }), _oxb.getSlot474PersonalEffect = void 0;
        var _oxe = _oxc(74496);
        _oxb.getSlot474PersonalEffect = function(_oxf) {
            var _oxg = null,
                _oxh = new _oxe.SlotItemEffectModel(),
                _oxi = false,
                _oxj = new _oxe.SlotItemEffectModel(),
                _oxk = _oxf.getCountryName();
            if ('アメリカ' == _oxk && (_oxj.houg += 2, _oxj.kaih += 1, _oxj.tyku += 1, _oxi = true), 'イギリス' == _oxk && (_oxj.houg += 1, _oxj.kaih += 1, _oxj.tyku += 1, _oxi = true), 'フランス' == _oxk && (_oxj.houg += 1, _oxj.tyku += 1, _oxi = true), 707 != _oxf.ship_id && 930 != _oxf.ship_id || (_oxj.houg += 1, _oxj.kaih += 1, _oxi = true), 0 == _oxi) return _oxh;
            var _oxl = _oxf.get_slotnums(474);
            return _oxh.add(_oxj.multiply(_oxl)), _oxh;
        };
    },
    42788: (_oxm, _oxn, _oxo) => {
        'use strict';
        var _oxp = null;
        defineModule(_oxn);
        Object.defineProperty(_oxn, '__esModule', {
            'value': true
        }), _oxn.getSlot478PersonalEffect = void 0;
        var _oxq = _oxo(74496);
        _oxn.getSlot478PersonalEffect = function(_oxr) {
            var _oxs = null,
                _oxt = new _oxq.SlotItemEffectModel(),
                _oxu = _oxr.get_each_level_nums(478),
                _oxv = [];
            return _oxu.forEach(function(_oxw, _oxx) {
                var _oxy = null;
                for (var _oxz = 1; _oxz <= _oxr.SLOT_LEVEL_MAX; _oxz++) _oxx >= _oxz && (null == _oxv[_oxz] && (_oxv[_oxz] = 0), _oxv[_oxz] += _oxw);
            }), _oxv.every(function(_oy0) {
                return 0 == _oy0;
            }) || (_oxv[1] >= 1 && (_oxt.houg += 1), _oxv[2] >= 1 && (_oxt.houm += 1), _oxv[3] >= 1 && (_oxt.kaih += 1), _oxv[4] >= 1 && (_oxt.baku += 1), _oxv[5] >= 1 && (_oxt.raig += 1), _oxv[6] >= 1 && (_oxt.tyku += 1), _oxv[7] >= 1 && (_oxt.houg += 1), _oxv[8] >= 1 && (_oxt.houm += 1), _oxv[9] >= 1 && (_oxt.kaih += 1), _oxv[10] >= 1 && (_oxt.houg += 1)), _oxt;
        };
    },
    22218: (_oy1, _oy2, _oy3) => {
        'use strict';
        var _oy4 = null;
        defineModule(_oy2);
        Object.defineProperty(_oy2, '__esModule', {
            'value': true
        }), _oy2.getSlot47PersonalEffect = void 0;
        var _oy5 = _oy3(74496);
        _oy2.getSlot47PersonalEffect = function(_oy6) {
            var _oy7 = null,
                _oy8 = new _oy5.SlotItemEffectModel(),
                _oy9 = new _oy5.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_oy6.yomi) >= 0 ? (_oy9.tais += 3, _oy9.kaih += 2, _oy9.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_oy6.yomi) >= 0 && (_oy9.tais += 2, _oy9.kaih += 2), !_oy9.exists()) return _oy8;
            var _oya = _oy6.get_slotnums(47) + _oy6.get_slotnums(438);
            return _oy8 = _oy9.multiply(_oya);
        };
    },
    57664: (_oyb, _oyc, _oyd) => {
        'use strict';
        var _oye = null;
        defineModule(_oyc);
        Object.defineProperty(_oyc, '__esModule', {
            'value': true
        }), _oyc.getSlot483PersonalEffect = void 0;
        var _oyf = _oyd(74496);
        _oyc.getSlot483PersonalEffect = function(_oyg) {
            var _oyh = null,
                _oyi = new _oyf.SlotItemEffectModel(),
                _oyj = 0,
                _oyk = 0,
                _oyl = 0,
                _oym = 0,
                _oyn = 0,
                _oyo = 0,
                _oyp = 0;
            if (6 == _oyg.ctype ? (_oyi.houg += 2, _oyi.tyku += 3, _oyi.houm += 1, _oyj = 1) : 2 == _oyg.ctype ? (_oyi.houg += 1, _oyi.tyku += 2, _oyi.kaih += 2, _oyi.houm += 1, _oyk = 1) : 37 == _oyg.ctype && (_oyl = 1), 8 == _oyg.stype || 9 == _oyg.stype || 10 == _oyg.stype ? _oym = 1 : 5 != _oyg.stype && 6 != _oyg.stype || (_oyn = 1), 149 == _oyg.ship_id ? (_oyi.houg += 2, _oyi.tyku += 2) : 591 == _oyg.ship_id ? (_oyi.houg += 3, _oyi.tyku += 3, _oyi.kaih += 1) : 150 == _oyg.ship_id ? (_oyi.houg += 1, _oyi.tyku += 1) : 592 == _oyg.ship_id ? (_oyi.houg += 2, _oyi.tyku += 2, _oyi.kaih += 2) : 151 == _oyg.ship_id ? (_oyi.houg += 1, _oyi.tyku += 2, _oyi.kaih += 2) : 593 == _oyg.ship_id ? (_oyi.houg += 2, _oyi.tyku += 5, _oyi.kaih += 3) : 954 == _oyg.ship_id ? (_oyi.houg += 2, _oyi.tyku += 4, _oyi.kaih += 2) : 694 == _oyg.ship_id ? (_oyi.houg += 3, _oyi.tyku += 2, _oyi.kaih += 1) : 152 == _oyg.ship_id ? (_oyi.houg += 2, _oyi.tyku += 2) : 911 == _oyg.ship_id || 916 == _oyg.ship_id || 546 == _oyg.ship_id ? (_oyi.houg += 2, _oyi.tyku += 2, _oyi.kaih += 2, _oyo = 1) : 553 == _oyg.ship_id || 554 == _oyg.ship_id ? (_oyi.houg += 1, _oyi.tyku += 2, _oyi.kaih += 1, _oyp = 1) : 541 == _oyg.ship_id || 411 == _oyg.ship_id || 412 == _oyg.ship_id ? (_oyi.houg += 1, _oyi.tyku += 2) : 573 == _oyg.ship_id && (_oyi.houg += 2, _oyi.tyku += 2, _oyi.kaih += 1), 0 == [_oyj, _oyk, _oyl, _oym, _oyn, _oyo, _oyp].reduce(function(_oyq, _oyr) {
                    return _oyq + _oyr;
                }, 0)) return _oyi;
            var _oys = _oyg.get_each_level_nums(483),
                _oyt = 0,
                _oyu = [];
            return _oys.forEach(function(_oyv, _oyw) {
                var _oyx = null;
                _oyw >= 6 && (_oyt += _oyv);
                for (var _oyy = 1; _oyy <= _oyg.SLOT_LEVEL_MAX; _oyy++) null == _oyu[_oyy] && (_oyu[_oyy] = 0), _oyw >= _oyy && (_oyu[_oyy] += _oyv);
            }), 1 == _oyj ? (_oyt >= 1 && (_oyi.houm += 1), _oys[10] >= 1 && (_oyi.houm += 1)) : 1 == _oyk ? (_oyu[5] >= 1 && (_oyi.kaih += 1), _oyu[6] >= 1 && (_oyi.houm += 1), _oyu[10] >= 1 && (_oyi.kaih += 1)) : 1 == _oyl && (_oyu[6] >= 1 && (_oyi.houm += 1), _oyu[10] >= 1 && (_oyi.kaih += 1)), 1 == _oym ? (_oyu[2] >= 1 && (_oyi.tyku += 1), _oyu[4] >= 1 && (_oyi.houg += 1), _oyu[7] >= 1 && (_oyi.kaih += 1), _oyu[8] >= 1 && (_oyi.tyku += 1), _oyu[9] >= 1 && (_oyi.houg += 1)) : 1 == _oyn && (_oyu[2] >= 1 && (_oyi.tyku += 1), _oyu[4] >= 1 && (_oyi.houg += 1), _oyu[6] >= 1 && (_oyi.kaih += 1), _oyu[8] >= 1 && (_oyi.houm += 1), _oyu[10] >= 1 && (_oyi.houg += 1)), 1 == _oyo ? _oyu[5] >= 1 && (_oyi.houm += 1) : 1 == _oyp && (_oyu[1] >= 1 && (_oyi.houm += 1), _oyu[3] >= 1 && (_oyi.houm += 1)), _oyi;
        };
    },
    44990: (_oyz, _oz0, _oz1) => {
        'use strict';
        var _oz2 = null;
        defineModule(_oz0);
        Object.defineProperty(_oz0, '__esModule', {
            'value': true
        }), _oz0.getSlot485PersonalEffect = void 0;
        var _oz3 = _oz1(74496);
        _oz0.getSlot485PersonalEffect = function(_oz4) {
            var _oz5 = null,
                _oz6 = new _oz3.SlotItemEffectModel(),
                _oz7 = false,
                _oz8 = new _oz3.SlotItemEffectModel();
            if (9 == _oz4.ctype && (_oz8.houg += 1, _oz8.kaih += 2, _oz8.tyku += 3, _oz7 = true), 501 == _oz4.ship_id || 506 == _oz4.ship_id ? (_oz8.kaih += 1, _oz8.tyku += 2, _oz8.houm += 1, _oz7 = true) : 502 != _oz4.ship_id && 507 != _oz4.ship_id || (_oz8.kaih += 1, _oz8.tyku += 1, _oz8.houm += 1, _oz7 = true), _oz7) {
                var _oz9 = _oz4.get_slotnums(485);
                _oz6.add(_oz8.multiply(_oz9));
            }
            var _oza = _oz4.get_each_level_nums(485),
                _ozb = 0,
                _ozc = 0,
                _ozd = 0,
                _oze = _oza[10];
            return _oza.forEach(function(_ozf, _ozg) {
                _ozg >= 3 && (_ozb += _ozf), _ozg >= 5 && (_ozc += _ozf), _ozg >= 7 && (_ozd += _ozf);
            }), _ozb > 0 && (_oz6.houg += 1 * _ozb), _ozc > 0 && (_oz6.tyku += 1 * _ozc), _ozd > 0 && (_oz6.kaih += 1 * _ozd), _oze > 0 && (_oz6.houm += 1 * _oze), _oz6;
        };
    },
    83957: (_ozh, _ozi, _ozj) => {
        'use strict';
        var _ozk = null;
        defineModule(_ozi);
        Object.defineProperty(_ozi, '__esModule', {
            'value': true
        }), _ozi.getSlot486PersonalEffect = void 0;
        var _ozl = _ozj(74496);
        _ozi.getSlot486PersonalEffect = function(_ozm) {
            var _ozn = null,
                _ozo = new _ozl.SlotItemEffectModel(),
                _ozp = false,
                _ozq = new _ozl.SlotItemEffectModel();
            if (894 == _ozm.ship_id || 899 == _ozm.ship_id ? (_ozq.houg += 4, _ozq.tyku += 4, _ozq.kaih += 3, _ozq.houm += 2, _ozp = true) : 888 != _ozm.ship_id && 883 != _ozm.ship_id || (_ozq.houg += 2, _ozq.tyku += 2, _ozq.kaih += 2, _ozq.houm += 1, _ozp = true), _ozp) {
                var _ozr = _ozm.get_slotnums(486);
                _ozo.add(_ozq.multiply(_ozr));
            }
            var _ozs = _ozm.get_each_level_nums(486),
                _ozt = 0,
                _ozu = 0,
                _ozv = _ozs[10];
            return _ozs.forEach(function(_ozw, _ozx) {
                _ozx >= 6 && (_ozt += _ozw), _ozx >= 8 && (_ozu += _ozw);
            }), _ozt > 0 && (_ozo.kaih += 1 * _ozt, _ozo.houm += 1 * _ozt), _ozu > 0 && (_ozo.tyku += 1 * _ozu, _ozo.kaih += 1 * _ozu), _ozv > 0 && (_ozo.houg += 1 * _ozv, _ozo.houm += 1 * _ozv), _ozo;
        };
    },
    78539: (_ozy, _ozz, _p00) => {
        'use strict';
        var _p01 = null;
        defineModule(_ozz);
        Object.defineProperty(_ozz, '__esModule', {
            'value': true
        }), _ozz.getSlot487PersonalEffect = void 0;
        var _p02 = _p00(74496);
        _ozz.getSlot487PersonalEffect = function(_p03) {
            var _p04 = null,
                _p05 = new _p02.SlotItemEffectModel(),
                _p06 = false,
                _p07 = new _p02.SlotItemEffectModel();
            if (894 == _p03.ship_id || 899 == _p03.ship_id ? (_p07.houg += 5, _p07.tyku += 3, _p07.kaih += 2, _p07.houm += 4, _p06 = true) : 888 != _p03.ship_id && 883 != _p03.ship_id || (_p07.houg += 3, _p07.tyku += 1, _p07.kaih += 1, _p07.houm += 2, _p06 = true), _p06) {
                var _p08 = _p03.get_slotnums(487);
                _p05.add(_p07.multiply(_p08));
            }
            var _p09 = _p03.get_each_level_nums(487),
                _p0a = 0,
                _p0b = 0,
                _p0c = _p09[10];
            return _p09.forEach(function(_p0d, _p0e) {
                _p0e >= 6 && (_p0a += _p0d), _p0e >= 8 && (_p0b += _p0d);
            }), _p0a > 0 && (_p05.houg += 1 * _p0a, _p05.kaih += 1 * _p0a), _p0b > 0 && (_p05.tyku += 1 * _p0b, _p05.houm += 1 * _p0b), _p0c > 0 && (_p05.houg += 1 * _p0c, _p05.houm += 1 * _p0c), _p05;
        };
    },
    96282: (_p0f, _p0g, _p0h) => {
        'use strict';
        var _p0i = null;
        defineModule(_p0g);
        Object.defineProperty(_p0g, '__esModule', {
            'value': true
        }), _p0g.getSlot488PersonalEffect = void 0;
        var _p0j = _p0h(74496);
        _p0g.getSlot488PersonalEffect = function(_p0k) {
            var _p0l = null,
                _p0m = new _p0j.SlotItemEffectModel(),
                _p0n = false,
                _p0o = new _p0j.SlotItemEffectModel(),
                _p0p = 0,
                _p0q = _p0k.getCountryName(),
                _p0r = {
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
                }[_p0k.ship_id];
            if (('日本' == _p0q && 2 == _p0k.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_p0k.ctype] && 1 == _p0k.stype) && (_p0o.tais += 1, _p0o.kaih += 1, _p0n = true), 1 == _p0r ? (_p0o.tais += 5, _p0o.kaih += 4, _p0o.houm += 2, _p0n = true, _p0p = 1) : 2 == _p0r ? (_p0o.tais += 2, _p0o.kaih += 1, _p0o.houm += 1, _p0n = true, _p0p = 2) : 3 == _p0r && (_p0o.tais += 1, _p0n = true, _p0p = 2), 0 == _p0n) return _p0m;
            var _p0s = _p0k.get_slotnums(488);
            if (_p0m.add(_p0o.multiply(_p0s)), 0 == _p0p) return _p0m;
            var _p0t = _p0k.get_each_level_nums(488),
                _p0u = [];
            return _p0t.forEach(function(_p0v, _p0w) {
                var _p0x = null;
                for (var _p0y = 1; _p0y <= _p0k.SLOT_LEVEL_MAX; _p0y++) _p0w >= _p0y && (null == _p0u[_p0y] && (_p0u[_p0y] = 0), _p0u[_p0y] += _p0v);
            }), 1 == _p0p ? (_p0u[3] >= 1 && (_p0m.kaih += 1 * _p0u[3]), _p0u[5] >= 1 && (_p0m.tais += 1 * _p0u[5]), _p0u[7] >= 1 && (_p0m.houm += 1 * _p0u[7]), _p0u[8] >= 1 && (_p0m.kaih += 1 * _p0u[8]), _p0u[9] >= 1 && (_p0m.tais += 1 * _p0u[9]), _p0u[10] >= 1 && (_p0m.tais += 1 * _p0u[10])) : 2 == _p0p && (_p0u[5] >= 1 && (_p0m.tais += 1 * _p0u[5]), _p0u[7] >= 1 && (_p0m.kaih += 1 * _p0u[7]), _p0u[9] >= 1 && (_p0m.houm += 1 * _p0u[9]), _p0u[10] >= 1 && (_p0m.tais += 1 * _p0u[10])), _p0m;
        };
    },
    49679: (_p0z, _p10, _p11) => {
        'use strict';
        var _p12 = null;
        defineModule(_p10);
        Object.defineProperty(_p10, '__esModule', {
            'value': true
        }), _p10.getSlot489PersonalEffect = void 0;
        var _p13 = _p11(74496);
        _p10.getSlot489PersonalEffect = function(_p14) {
            var _p15 = null,
                _p16 = new _p13.SlotItemEffectModel(),
                _p17 = false,
                _p18 = new _p13.SlotItemEffectModel();
            if ('あきつまる' != _p14.yomi && 'やましおまる' != _p14.yomi && 'くまのまる' != _p14.yomi || (_p18.tyku = _p18.tyku + 2, _p18.kaih = _p18.kaih + 1, _p18.houg = _p18.houg + 1, _p18.tais = _p18.tais + 1, _p18.houm = _p18.houm + 1, _p17 = true), 717 != _p14.ship_id && 948 != _p14.ship_id || (_p18.tyku = _p18.tyku + 2, _p18.kaih = _p18.kaih + 2, _p18.houg = _p18.houg + 2, _p18.tais = _p18.tais + 1, _p18.houm = _p18.houm + 1, _p17 = true), _p17) {
                var _p19 = _p14.get_slotnums(489) + _p14.get_slotnums(491);
                _p16.add(_p18.multiply(_p19));
            }
            var _p1a = _p14.get_each_level_nums(489),
                _p1b = _p14.get_each_level_nums(491),
                _p1c = 0,
                _p1d = 0,
                _p1e = 0;
            _p1a.forEach(function(_p1f, _p1g) {
                _p1g >= 3 && (_p1c += _p1f), _p1g >= 6 && (_p1d += _p1f), _p1g >= 8 && (_p1e += _p1f);
            }), _p1b.forEach(function(_p1h, _p1i) {
                _p1i >= 3 && (_p1c += _p1h), _p1i >= 6 && (_p1d += _p1h), _p1i >= 8 && (_p1e += _p1h);
            });
            var _p1j = _p1a[10] + _p1b[10];
            return _p1c >= 1 && (_p16.kaih = _p16.kaih + 1 * _p1c), _p1d >= 1 && (_p16.tais = _p16.tais + 1 * _p1d), _p1e >= 1 && (_p16.houm = _p16.houm + 1 * _p1e), _p1j >= 1 && (_p16.houg = _p16.houg + 1 * _p1j), _p16;
        };
    },
    90312: function(_p1k, _p1l, _p1m) {
        'use strict';
        var _p1n = null;
        var _p1o = this && this.__importDefault || function(_p1p) {
            var _p1q = null;
            return _p1p && _p1p.__esModule ? _p1p : {
                'default': _p1p
            };
        };
        defineModule(_p1l);
        Object.defineProperty(_p1l, '__esModule', {
            'value': true
        }), _p1l.getSlot502PersonalEffect = void 0;
        var _p1r = _p1m(74496),
            _p1s = _p1o(_p1m(18622));
        _p1l.getSlot502PersonalEffect = function(_p1t) {
            var _p1u = null,
                _p1v = new _p1r.SlotItemEffectModel(),
                _p1w = _p1t.get_slotnums(502),
                _p1x = {
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
                _p1y = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3,
                    694: 1
                },
                _p1z = {
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
                _p20 = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _p21 = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_p1x[_p1t.ship_id]) {
                var _p22 = _p1x[_p1t.ship_id];
                _p1v.houg += _p1w * _p22;
            }
            if (_p1y[_p1t.ship_id]) {
                var _p23 = _p1y[_p1t.ship_id];
                _p1v.tyku += _p1w * _p23;
            }
            if (_p1z[_p1t.ship_id]) {
                var _p24 = _p1z[_p1t.ship_id],
                    _p25 = _p1t.get_each_level_nums(502),
                    _p26 = [];
                _p25.forEach(function(_p27, _p28) {
                    var _p29 = null;
                    for (var _p2a = 1; _p2a <= _p1t.SLOT_LEVEL_MAX; _p2a++) _p28 >= _p2a && (null == _p26[_p2a] && (_p26[_p2a] = 0), _p26[_p2a] += _p27);
                }), 1 == _p24 ? (_p1v.kaih += 3 * _p1w, _p26[1] > 0 && (_p1v.kaih += 1 * _p26[1]), _p26[3] > 0 && (_p1v.tyku += 1 * _p26[3]), _p26[5] > 0 && (_p1v.houg += 1 * _p26[5]), _p26[7] > 0 && (_p1v.kaih += 1 * _p26[7]), _p26[8] > 0 && (_p1v.tyku += 1 * _p26[8]), _p26[9] > 0 && (_p1v.houg += 1 * _p26[9]), _p26[10] > 0 && (_p1v.tyku += 1 * _p26[10])) : 2 == _p24 ? (_p1v.kaih += 1 * _p1w, _p26[2] > 0 && 151 == _p1t.ship_id && (_p1v.kaih += 1 * _p26[2]), _p26[4] > 0 && (_p1v.tyku += 1 * _p26[4]), _p26[6] > 0 && (_p1v.houg += 1 * _p26[6]), _p26[8] > 0 && (_p1v.kaih += 1 * _p26[8]), _p26[10] > 0 && (_p1v.tyku += 1 * _p26[10])) : 3 == _p24 && (_p26[5] > 0 && (_p1v.kaih += 1 * _p26[5]), _p26[8] > 0 && (_p1v.houg += 1 * _p26[8]), _p26[10] > 0 && (_p1v.tyku += 1 * _p26[10]));
            }
            if (_p20[_p1t.ship_id]) {
                for (var _p2b = 0, _p2c = 0, _p2d = _p1t.have_slot_ids(); _p2c < _p2d.length; _p2c++) {
                    var _p2e = _p2d[_p2c],
                        _p2f = _p1s.default.model.slot.getMst(_p2e),
                        _p2g = _p2f.equipType;
                    12 != _p2g && 13 != _p2g || (_p2f.sakuteki >= 5 && (_p2b += _p1t.get_slotnums(parseInt(_p2e))), _p2f.taiku >= 2 && _p1t.get_slotnums(parseInt(_p2e)));
                }
                0;
                var _p2h = _p20[_p1t.ship_id];
                1 == _p2h && _p2b >= 1 ? (_p1v.houg += 3, _p1v.kaih += 4) : 2 == _p2h && _p2b >= 1 && (_p1v.houg += 2, _p1v.kaih += 2);
            }
            if (_p21[_p1t.ship_id]) {
                var _p2i = _p21[_p1t.ship_id],
                    _p2j = [],
                    _p2k = [],
                    _p2l = _p1t.have_slot_ids();
                [410, 411].forEach(function(_p2m) {
                    var _p2n = null;
                    _p2l.indexOf(_p2m.toString()) > -1 && (_p2k[_p2m] = _p1t.get_each_level_nums(_p2m), null == _p2j[_p2m] && (_p2j[_p2m] = []), _p2k[_p2m].forEach(function(_p2o, _p2p) {
                        var _p2q = null;
                        for (var _p2r = 1; _p2r <= _p1t.SLOT_LEVEL_MAX; _p2r++) null == _p2j[_p2m][_p2r] && (_p2j[_p2m][_p2r] = 0), _p2p >= _p2r && (_p2j[_p2m][_p2r] += _p2o);
                    }));
                });
                var _p2s = _p2k[410],
                    _p2t = _p2k[411];
                if (1 == _p2i) {
                    if (_p2s) {
                        _p1v.tyku += 1;
                        var _p2u = _p2j[410];
                        _p2u[7] >= 1 && (_p1v.houg += 1), _p2u[10] >= 1 && (_p1v.kaih += 1);
                    }
                    if (_p2t) {
                        _p1v.tyku += 2;
                        var _p2v = _p2j[411];
                        _p2v[2] >= 1 && (_p1v.houg += 1), _p2v[4] >= 1 && (_p1v.kaih += 1), _p2v[6] >= 1 && (_p1v.houm += 1), _p2v[8] >= 1 && (_p1v.tyku += 1), _p2v[10] >= 1 && (_p1v.houg += 1);
                    }
                }
            }
            return _p1v;
        };
    },
    86856: function(_p2w, _p2x, _p2y) {
        'use strict';
        var _p2z = null;
        var _p30 = this && this.__importDefault || function(_p31) {
            var _p32 = null;
            return _p31 && _p31.__esModule ? _p31 : {
                'default': _p31
            };
        };
        defineModule(_p2x);
        Object.defineProperty(_p2x, '__esModule', {
            'value': true
        }), _p2x.getSlot503PersonalEffect = void 0;
        var _p33 = _p2y(74496),
            _p34 = _p30(_p2y(18622));
        _p2x.getSlot503PersonalEffect = function(_p35) {
            var _p36 = null,
                _p37 = new _p33.SlotItemEffectModel(),
                _p38 = _p35.get_slotnums(503),
                _p39 = {
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
                _p3a = {
                    149: 1,
                    591: 1,
                    592: 1,
                    694: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _p3b = {
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
                _p3c = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2,
                    694: 2
                },
                _p3d = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1,
                    694: 1
                },
                _p3e = {
                    591: 1,
                    592: 2,
                    593: 2,
                    694: 2,
                    954: 3
                };
            if (_p39[_p35.ship_id]) {
                var _p3f = _p39[_p35.ship_id];
                _p37.houg += _p38 * _p3f;
            }
            if (_p3a[_p35.ship_id]) {
                var _p3g = _p3a[_p35.ship_id];
                _p37.tyku += _p38 * _p3g;
            }
            if (_p3b[_p35.ship_id]) {
                var _p3h = _p3b[_p35.ship_id],
                    _p3i = _p35.get_each_level_nums(503),
                    _p3j = [];
                _p3i.forEach(function(_p3k, _p3l) {
                    var _p3m = null;
                    for (var _p3n = 1; _p3n <= _p35.SLOT_LEVEL_MAX; _p3n++) _p3l >= _p3n && (null == _p3j[_p3n] && (_p3j[_p3n] = 0), _p3j[_p3n] += _p3k);
                }), 1 == _p3h ? (_p37.houm += 2 * _p38, _p3j[1] > 0 && (_p37.houg += 1 * _p3j[1]), _p3j[2] > 0 && (_p37.tyku += 1 * _p3j[2]), _p3j[4] > 0 && (_p37.houm += 1 * _p3j[4]), _p3j[6] > 0 && (_p37.houg += 1 * _p3j[6]), _p3j[8] > 0 && (_p37.tyku += 1 * _p3j[8]), _p3j[10] > 0 && (_p37.houm += 1 * _p3j[10])) : 2 == _p3h ? (_p37.houm += 1 * _p38, _p3j[2] > 0 && (_p37.houg += 1 * _p3j[2]), _p3j[4] > 0 && (_p37.tyku += 1 * _p3j[4]), _p3j[6] > 0 && (_p37.houm += 1 * _p3j[6]), _p3j[8] > 0 && (_p37.houg += 1 * _p3j[8]), _p3j[10] > 0 && (_p37.houm += 1 * _p3j[10])) : 3 == _p3h ? (_p3j[4] > 0 && (_p37.houm += 1 * _p3j[4]), _p3j[7] > 0 && (_p37.houg += 1 * _p3j[7]), _p3j[10] > 0 && (_p37.tyku += 1 * _p3j[10])) : 4 == _p3h && (_p37.houm += 1 * _p38, _p3j[1] > 0 && (_p37.houg += 1 * _p3j[1]), _p3j[2] > 0 && (_p37.houg += 1 * _p3j[2]), _p3j[4] > 0 && (_p37.houm += 1 * _p3j[4]), _p3j[6] > 0 && (_p37.houg += 1 * _p3j[6]), _p3j[8] > 0 && (_p37.tyku += 1 * _p3j[8]), _p3j[10] > 0 && (_p37.houm += 1 * _p3j[10]));
            }
            var _p3o = 0;
            _p3c[_p35.ship_id] && (_p3o = _p3c[_p35.ship_id]);
            var _p3p = 0;
            _p3e[_p35.ship_id] && (_p3p = _p3e[_p35.ship_id]);
            var _p3q = 0,
                _p3r = 0,
                _p3s = _p35.have_slot_ids();
            if (_p3o + _p3p > 0)
                for (var _p3t = 0, _p3u = _p3s; _p3t < _p3u.length; _p3t++) {
                    var _p3v = _p3u[_p3t],
                        _p3w = _p34.default.model.slot.getMst(_p3v),
                        _p3x = _p3w.equipType;
                    12 != _p3x && 13 != _p3x || (_p3w.sakuteki >= 5 && (_p3q += _p35.get_slotnums(parseInt(_p3v))), _p3w.taiku >= 2 && _p35.get_slotnums(parseInt(_p3v)), _p3w.meichu >= 8 && (_p3r += _p35.get_slotnums(parseInt(_p3v))));
                }
            1 == _p3o ? _p3q >= 1 && (_p37.houg += 3, _p37.houm += 3, _p37.kaih += 2) : 2 == _p3o && _p3q >= 1 && (_p37.houg += 2, _p37.houm += 2, _p37.kaih += 1);
            var _p3y = 0,
                _p3z = [],
                _p40 = [];
            if (_p3d[_p35.ship_id]) {
                _p3y = _p3d[_p35.ship_id];
                var _p41 = _p35.have_slot_ids();
                [174].forEach(function(_p42) {
                    var _p43 = null;
                    _p41.indexOf(_p42.toString()) > -1 && (_p40[_p42] = _p35.get_each_level_nums(_p42), null == _p3z[_p42] && (_p3z[_p42] = []), _p40[_p42].forEach(function(_p44, _p45) {
                        var _p46 = null;
                        for (var _p47 = 1; _p47 <= _p35.SLOT_LEVEL_MAX; _p47++) null == _p3z[_p42][_p47] && (_p3z[_p42][_p47] = 0), _p45 >= _p47 && (_p3z[_p42][_p47] += _p44);
                    }));
                });
            }
            if (_p3y > 0) {
                var _p48 = _p40[174];
                if (1 == _p3y && _p48) {
                    var _p49 = _p3z[174];
                    _p37.raig += 4, _p49[6] >= 1 && (_p37.raig += 1), _p49[8] >= 1 && (_p37.houm += 1), _p49[10] >= 1 && (_p37.houg += 1);
                }
            }
            return _p3r > 0 && (_p3p >= 1 && _p3p <= 3 && (_p37.houg += 2, _p37.houm += 2, _p37.kaih += 2), 1 == _p3p ? _p37.houg += 1 : 3 == _p3p && (_p37.houg += 2)), _p37;
        };
    },
    78123: function(_p4a, _p4b, _p4c) {
        'use strict';
        var _p4d = null;
        var _p4e = this && this.__importDefault || function(_p4f) {
            var _p4g = null;
            return _p4f && _p4f.__esModule ? _p4f : {
                'default': _p4f
            };
        };
        defineModule(_p4b);
        Object.defineProperty(_p4b, '__esModule', {
            'value': true
        }), _p4b.getSlot505PersonalEffect = void 0;
        var _p4h = _p4c(74496),
            _p4i = _p4e(_p4c(18622));
        _p4b.getSlot505PersonalEffect = function(_p4j) {
            var _p4k = null,
                _p4l = new _p4h.SlotItemEffectModel(),
                _p4m = false,
                _p4n = new _p4h.SlotItemEffectModel();
            if (2 == _p4j.stype ? (_p4n.houg += 1, _p4n.tyku += 2, _p4n.kaih += 2, _p4m = true) : 1 == _p4j.stype ? (_p4n.houg += 1, _p4n.tyku += 1, _p4n.kaih += 1, _p4m = true) : 3 == _p4j.stype || 21 == _p4j.stype || 4 == _p4j.stype ? (_p4n.tyku += 1, _p4n.kaih += 2, _p4m = true) : 5 != _p4j.stype && 6 != _p4j.stype && 16 != _p4j.stype || (_p4n.tyku += 1, _p4n.kaih += 1, _p4m = true), _p4m) {
                var _p4o = _p4j.get_slotnums(505);
                _p4l.add(_p4n.multiply(_p4o));
            }
            var _p4p = {
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
                _p4q = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2,
                    981: 3
                },
                _p4r = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _p4p[_p4j.ship_id] ? (_p4l.houg += 2, _p4l.tyku += 3, _p4l.kaih += 4) : 2 == _p4p[_p4j.ship_id] ? (_p4l.houg += 1, _p4l.tyku += 2, _p4l.kaih += 3) : 3 == _p4p[_p4j.ship_id] ? (_p4l.tyku += 2, _p4l.kaih += 2) : 4 == _p4p[_p4j.ship_id] ? (_p4l.tyku += 1, _p4l.kaih += 2) : 5 == _p4p[_p4j.ship_id] ? (_p4l.houg += 1, _p4l.tyku += 1, _p4l.kaih += 1) : 6 == _p4p[_p4j.ship_id] && (_p4l.tyku += 1, _p4l.kaih += 1);
            var _p4s = 0;
            if (_p4q[_p4j.ship_id] && _p4s++, _p4r[_p4j.ship_id] && _p4s++, 0 == _p4s) return _p4l;
            for (var _p4t = 0, _p4u = 0, _p4v = 0, _p4w = _p4j.have_slot_ids(); _p4v < _p4w.length; _p4v++) {
                var _p4x = _p4w[_p4v],
                    _p4y = _p4i.default.model.slot.getMst(_p4x),
                    _p4z = _p4y.equipType;
                12 != _p4z && 13 != _p4z || (_p4y.sakuteki >= 5 && (_p4t += _p4j.get_slotnums(parseInt(_p4x))), _p4y.taiku >= 2 && (_p4u += _p4j.get_slotnums(parseInt(_p4x))));
            }
            var _p50 = _p4q[_p4j.ship_id];
            _p4u > 0 && _p50 > 0 && (1 == _p50 ? (_p4l.houg += 1, _p4l.tyku += 2, _p4l.kaih += 3) : 2 == _p50 ? (_p4l.tyku += 2, _p4l.kaih += 2) : 3 == _p50 && (_p4l.tyku += 1, _p4l.kaih += 2));
            var _p51 = _p4r[_p4j.ship_id];
            return _p4t > 0 && _p51 > 0 && 1 == _p51 && (_p4l.houg += 1, _p4l.kaih += 1), _p4l;
        };
    },
    25765: (_p52, _p53, _p54) => {
        'use strict';
        var _p55 = null;
        defineModule(_p53);
        Object.defineProperty(_p53, '__esModule', {
            'value': true
        }), _p53.getSlot506PersonalEffect = void 0;
        var _p56 = _p54(74496);
        _p53.getSlot506PersonalEffect = function(_p57) {
            var _p58 = null,
                _p59 = new _p56.SlotItemEffectModel();
            return 961 == _p57.ship_id ? (_p59.houg += 2, _p59.houm += 3, _p59.tyku += 2, _p59.kaih += 4) : 145 == _p57.ship_id || 497 == _p57.ship_id || 656 == _p57.ship_id || 557 == _p57.ship_id || 558 == _p57.ship_id || 951 == _p57.ship_id || 975 == _p57.ship_id ? (_p59.houg += 1, _p59.houm += 2, _p59.tyku += 1, _p59.kaih += 3) : 578 != _p57.ship_id && 419 != _p57.ship_id && 464 != _p57.ship_id && 470 != _p57.ship_id && 407 != _p57.ship_id && 235 != _p57.ship_id && 147 != _p57.ship_id && 538 != _p57.ship_id && 537 != _p57.ship_id && 955 != _p57.ship_id && 960 != _p57.ship_id || (_p59.houg += 1, _p59.houm += 1, _p59.tyku += 1, _p59.kaih += 2), _p59;
        };
    },
    88271: function(_p5a, _p5b, _p5c) {
        'use strict';
        var _p5d = null;
        var _p5e = this && this.__importDefault || function(_p5f) {
            var _p5g = null;
            return _p5f && _p5f.__esModule ? _p5f : {
                'default': _p5f
            };
        };
        defineModule(_p5b);
        Object.defineProperty(_p5b, '__esModule', {
            'value': true
        }), _p5b.getSlot50PersonalEffect = void 0;
        var _p5h = _p5c(74496),
            _p5i = _p5e(_p5c(18622));
        _p5b.getSlot50PersonalEffect = function(_p5j) {
            var _p5k = null,
                _p5l = new _p5h.SlotItemEffectModel(),
                _p5m = false,
                _p5n = new _p5h.SlotItemEffectModel();
            7 != _p5j.ctype && 13 != _p5j.ctype && 8 != _p5j.ctype && 29 != _p5j.ctype && 9 != _p5j.ctype && 31 != _p5j.ctype || (_p5n.houg += 1, _p5m = true), 8 != _p5j.ctype && 29 != _p5j.ctype && 9 != _p5j.ctype && 31 != _p5j.ctype || (_p5n.houg += 1, _p5n.kaih += 1, _p5m = true);
            var _p5o = _p5j.get_slotnums(50);
            9 != _p5j.ctype && 31 != _p5j.ctype || _p5o >= 2 && (_p5n.houg += 1, _p5m = true);
            var _p5p = 0;
            if (501 != _p5j.ship_id && 506 != _p5j.ship_id && 502 != _p5j.ship_id && 507 != _p5j.ship_id || (_p5n.houg += 1, _p5m = true, _p5p = 1), 0 == _p5m) return _p5l;
            _p5l = _p5n.multiply(_p5o);
            for (var _p5q = 0, _p5r = 0, _p5s = _p5j.have_slot_ids(); _p5r < _p5s.length; _p5r++) {
                var _p5t = _p5s[_p5r],
                    _p5u = _p5i.default.model.slot.getMst(_p5t),
                    _p5v = _p5u.equipType;
                12 != _p5v && 13 != _p5v || _p5u.sakuteki >= 5 && (_p5q += _p5j.get_slotnums(parseInt(_p5t)));
            }
            if (_p5q > 0) {
                if (7 == _p5j.ctype || 13 == _p5j.ctype) 0 == _p5j.get_slotnums(90) && (_p5l.houg += 1, _p5l.kaih += 1, _p5l.raig += 1);
                else 8 != _p5j.ctype && 29 != _p5j.ctype && 9 != _p5j.ctype && 31 != _p5j.ctype || (_p5l.houg += 3, _p5l.kaih += 2, _p5l.raig += 2);
                501 != _p5j.ship_id && 506 != _p5j.ship_id || (_p5l.houg += 1, _p5l.kaih += 1);
            }
            var _p5w = _p5j.get_slotnums(30),
                _p5x = _p5j.get_slotnums(410);
            return 1 == _p5p && (_p5w + _p5x > 0 && (_p5l.houg += 1, _p5l.tyku += 3, _p5l.kaih += 2), _p5x > 0 && (_p5l.houg += 2)), _p5l;
        };
    },
    28221: (_p5y, _p5z, _p60) => {
        'use strict';
        var _p61 = null;
        defineModule(_p5z);
        Object.defineProperty(_p5z, '__esModule', {
            'value': true
        }), _p5z.getSlot510PersonalEffect = void 0;
        var _p62 = _p60(74496);
        _p5z.getSlot510PersonalEffect = function(_p63) {
            var _p64 = null,
                _p65 = new _p62.SlotItemEffectModel(),
                _p66 = false,
                _p67 = new _p62.SlotItemEffectModel();
            if ('イギリス' == _p63.getCountryName() && (_p67.houg += 2, _p67.tais += 3, _p67.kaih += 2, _p67.saku += 2, _p66 = true), 88 == _p63.ctype && (_p65.houg += 4, _p65.kaih += 2, _p67.saku += 3, _p67.houm += 2, _p66 = true), 0 == _p66) return _p65;
            var _p68 = _p63.get_slotnums(510);
            return _p65.add(_p67.multiply(_p68)), _p65;
        };
    },
    14830: (_p69, _p6a, _p6b) => {
        'use strict';
        var _p6c = null;
        defineModule(_p6a);
        Object.defineProperty(_p6a, '__esModule', {
            'value': true
        }), _p6a.getSlot511PersonalEffect = void 0;
        var _p6d = _p6b(74496);
        _p6a.getSlot511PersonalEffect = function(_p6e) {
            var _p6f = null,
                _p6g = new _p6d.SlotItemEffectModel();
            return 122 == _p6e.ctype ? (_p6g.raig += 3, _p6g.kaih += 4) : 114 == _p6e.ctype && (_p6g.raig += 1, _p6g.kaih += 2), _p6g;
        };
    },
    54047: (_p6h, _p6i, _p6j) => {
        'use strict';
        var _p6k = null;
        defineModule(_p6i);
        Object.defineProperty(_p6i, '__esModule', {
            'value': true
        }), _p6i.getSlot517PersonalEffect = void 0;
        var _p6l = _p6j(74496);
        _p6i.getSlot517PersonalEffect = function(_p6m) {
            var _p6n = null,
                _p6o = new _p6l.SlotItemEffectModel();
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
            }[_p6m.ctype] && 74 != _p6m.ctype && 77 != _p6m.ctype && 85 != _p6m.ctype && 117 != _p6m.ctype && 104 != _p6m.ctype || (_p6o.houm += 1, _p6o.kaih += 1, _p6o.saku += 1), 38 == _p6m.ctype && (_p6o.houg += 1, _p6o.houm += 1), 960 == _p6m.ship_id ? (_p6o.houg += 2, _p6o.houm += 1, _p6o.kaih += 3, _p6o.saku += 2) : 955 == _p6m.ship_id || 578 == _p6m.ship_id || 961 == _p6m.ship_id || 656 == _p6m.ship_id || 464 == _p6m.ship_id || 470 == _p6m.ship_id || 419 == _p6m.ship_id || 407 == _p6m.ship_id || 235 == _p6m.ship_id || 147 == _p6m.ship_id || 975 == _p6m.ship_id ? (_p6o.houg += 1, _p6o.houm += 1, _p6o.kaih += 2, _p6o.saku += 1) : 981 == _p6m.ship_id && (_p6o.houg += 1, _p6o.houm += 1, _p6o.kaih += 1);
            for (var _p6p = [], _p6q = function(_p6r) {
                    var _p6s = null,
                        _p6t = _p6m.get_each_level_nums(_p6r);
                    null == _p6p[_p6r] && (_p6p[_p6r] = []), _p6t.forEach(function(_p6u, _p6v) {
                        var _p6w = null;
                        for (var _p6x = 1; _p6x <= _p6m.SLOT_LEVEL_MAX; _p6x++) null == _p6p[_p6r][_p6x] && (_p6p[_p6r][_p6x] = 0), _p6v >= _p6x && (_p6p[_p6r][_p6x] += _p6u);
                    });
                }, _p6y = 0, _p6z = [267, 366, 450, 517]; _p6y < _p6z.length; _p6y++) {
                _p6q(_p6z[_p6y]);
            }
            var _p70 = _p6p[517];
            return _p70[7] > 0 && (_p6o.houm += 1), _p70[8] > 0 && (_p6o.kaih += 1), _p70[9] > 0 && (_p6o.houg += 1), _p70[10] > 0 && (_p6o.houm += 1), (_p6p[267][3] > 0 || _p6p[366][3] > 0) && (_p6o.houg += 1, _p6o.houm += 1, 38 == _p6m.ctype && (_p6o.houg += 1, _p6o.houm += 1), _p6p[450][4] > 0 && (_p6o.houg += 1, _p6o.houm += 1, _p6o.tyku += 4, _p6o.kaih += 3)), _p6o;
        };
    },
    76054: (_p71, _p72, _p73) => {
        'use strict';
        var _p74 = null;
        defineModule(_p72);
        Object.defineProperty(_p72, '__esModule', {
            'value': true
        }), _p72.getSlot518PersonalEffect = void 0;
        var _p75 = _p73(74496);
        _p72.getSlot518PersonalEffect = function(_p76) {
            var _p77 = null,
                _p78 = new _p75.SlotItemEffectModel(),
                _p79 = false,
                _p7a = new _p75.SlotItemEffectModel();
            if (34 != _p76.ctype && 56 != _p76.ctype || (_p7a.houg += 1, _p7a.tyku += 1, _p7a.tais += 1, _p7a.kaih += 1, _p79 = true), 16 == _p76.stype && (_p7a.houg += 1, _p7a.raig += 1, _p7a.kaih += 1, _p79 = true), 622 != _p76.ship_id && 624 != _p76.ship_id && 623 != _p76.ship_id || (_p7a.houg += 1, _p79 = true), 622 != _p76.ship_id && 624 != _p76.ship_id || (_p7a.tyku += 1, _p79 = true), 624 == _p76.ship_id && (_p7a.tais += 2, _p79 = true), 0 == _p79) return _p78;
            var _p7b = _p76.get_slotnums(518);
            return _p78.add(_p7a.multiply(_p7b)), _p78;
        };
    },
    93053: (_p7c, _p7d, _p7e) => {
        'use strict';
        var _p7f = null;
        defineModule(_p7d);
        Object.defineProperty(_p7d, '__esModule', {
            'value': true
        }), _p7d.getSlot519PersonalEffect = void 0;
        var _p7g = _p7e(74496);
        _p7d.getSlot519PersonalEffect = function(_p7h) {
            var _p7i = null,
                _p7j = new _p7g.SlotItemEffectModel();
            return 122 == _p7h.ctype && (_p7j.houm += 2, _p7j.kaih += 2), 114 == _p7h.ctype && (_p7j.raig += 1, _p7j.houm += 2, _p7j.kaih += 2), _p7j;
        };
    },
    81254: (_p7k, _p7l, _p7m) => {
        'use strict';
        var _p7n = null;
        defineModule(_p7l);
        Object.defineProperty(_p7l, '__esModule', {
            'value': true
        }), _p7l.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _p7o = _p7m(74496);
        _p7l.getSlot51cmSeriesGunPersonalEffect = function(_p7p) {
            var _p7q = null,
                _p7r = new _p7o.SlotItemEffectModel(),
                _p7s = false,
                _p7t = new _p7o.SlotItemEffectModel(),
                _p7u = _p7p.get_slotnums(142),
                _p7v = _p7p.get_slotnums(460),
                _p7w = _p7u + _p7v;
            if (916 != _p7p.ship_id && 911 != _p7p.ship_id && 546 != _p7p.ship_id || (_p7t.houg += 1, _p7t.houm += 1, _p7v >= 1 && (_p7r.kaih += 1, _p7r.houm += 1), _p7s = true), 37 == _p7p.ctype && _p7w >= 1 && (_p7r.houg += 1, _p7r.houm += 2), 0 == _p7s) return _p7r;
            var _p7x = _p7p.get_slotnums(128) + _p7p.get_slotnums(281);
            return _p7r.add(_p7t.multiply(_p7x)), _p7r;
        };
    },
    88792: (_p7y, _p7z, _p80) => {
        'use strict';
        var _p81 = null;
        defineModule(_p7z);
        Object.defineProperty(_p7z, '__esModule', {
            'value': true
        }), _p7z.getSlot520PersonalEffect = void 0;
        var _p82 = _p80(74496);
        _p7z.getSlot520PersonalEffect = function(_p83) {
            var _p84 = null,
                _p85 = new _p82.SlotItemEffectModel(),
                _p86 = false,
                _p87 = new _p82.SlotItemEffectModel(),
                _p88 = 0,
                _p89 = 0,
                _p8a = 0,
                _p8b = _p83.get_slotnums(520);
            7 == _p83.ctype || 13 == _p83.ctype ? (_p87.houg += 1, _p86 = true, _p89 = 1, _p8a = 1) : 8 == _p83.ctype || 29 == _p83.ctype ? (_p87.houg += 2, _p87.kaih += 1, _p86 = true, _p89 = 2, _p8a = 1) : 9 != _p83.ctype && 31 != _p83.ctype || (_p87.houg += 3, _p87.kaih += 1, _p87.houm += 1, _p86 = true, _p89 = 2, _p8a = 1, 2 == _p8b && (_p85.houg += 2), _p8b >= 3 && (_p85.houg += 4));
            var _p8c = _p83.get_have_rader_nums().water_rader,
                _p8d = 0,
                _p8e = 0;
            if (_p89 + _p8a > 0) {
                for (var _p8f = _p83.getSpItemDict_FukuhouTaikuHeisou(), _p8g = _p83.getSpItemDict_Tansou21GouDentan(), _p8h = 0, _p8i = _p83.have_slot_ids(); _p8h < _p8i.length; _p8h++) {
                    var _p8j = _p8i[_p8h],
                        _p8k = parseInt(_p8j);
                    null != _p8f[_p8k] ? (_p8f[_p8k] += _p83.get_slotnums(_p8k), _p8d += _p83.get_slotnums(_p8k)) : null != _p8g[_p8k] && (_p8g[_p8k] += _p83.get_slotnums(_p8k), _p8e += _p83.get_slotnums(_p8k));
                }
                _p8c > 0 && (1 == _p89 ? (_p85.houg += 2, _p85.raig += 2, _p85.kaih += 1, _p85.houm += 1) : 2 == _p89 && (_p85.houg += 3, _p85.raig += 2, _p85.kaih += 2, _p85.houm += 1)), _p8d > 0 && 1 == _p8a && (_p85.houg += 1, _p85.tyku += 4, _p85.kaih += 4, _p85.houm += 1);
            }
            if (269 == _p83.ship_id || 265 == _p83.ship_id || 319 == _p83.ship_id ? (2 == _p8b && (_p85.houg += 2), _p8b >= 3 && (_p85.houg += 4)) : 501 != _p83.ship_id && 506 != _p83.ship_id && 502 != _p83.ship_id && 507 != _p83.ship_id && 503 != _p83.ship_id && 504 != _p83.ship_id || (_p87.houg += 1, _p86 = true, _p8c >= 1 && (_p85.houg += 1, _p85.kaih += 1, _p85.houm += 2), _p8e >= 1 && (_p85.houg += 1, _p85.tyku += 3, _p85.kaih += 2, _p85.houm += 1), _p83.get_slotnums(410) > 0 && (_p85.houg += 2, _p85.tyku += 3, _p85.kaih += 2, _p85.houm += 1), _p88 = 1), 502 == _p83.ship_id || 269 == _p83.ship_id || 265 == _p83.ship_id || 319 == _p83.ship_id ? (_p87.houg += 1, _p87.houm += 1, _p86 = true) : 507 == _p83.ship_id && (_p87.houg += 1, _p87.houm += 2, _p87.tyku += 1, _p86 = true), _p86 && _p85.add(_p87.multiply(_p8b)), 0 == _p88) return _p85;
            var _p8l = _p83.get_each_level_over_nums([520]),
                _p8m = _p8l.slot[520][7],
                _p8n = _p8l.slot[520][10];
            return 1 == _p88 && (_p8m > 0 && (_p85.houg += 1 * _p8m), _p8n > 0 && (_p85.houm += 1 * _p8n)), _p85;
        };
    },
    33242: (_p8o, _p8p, _p8q) => {
        'use strict';
        var _p8r = null;
        defineModule(_p8p);
        Object.defineProperty(_p8p, '__esModule', {
            'value': true
        }), _p8p.getSlot521PersonalEffect = void 0;
        var _p8s = _p8q(74496);
        _p8p.getSlot521PersonalEffect = function(_p8t) {
            var _p8u = null,
                _p8v = new _p8s.SlotItemEffectModel(),
                _p8w = false,
                _p8x = new _p8s.SlotItemEffectModel(),
                _p8y = 0;
            if (52 == _p8t.ctype && (_p8y = 1), 183 == _p8t.ship_id ? (_p8x.houg += 1, _p8x.houm += 1, _p8x.saku += 2, _p8x.kaih += 2, _p8w = true) : 321 == _p8t.ship_id ? (_p8x.houg += 2, _p8x.houm += 2, _p8x.saku += 3, _p8x.kaih += 3, _p8w = true) : 507 == _p8t.ship_id && (_p8x.houg += 3, _p8x.tyku += 1, _p8x.houm += 3, _p8x.saku += 2, _p8x.kaih += 2, _p8w = true, _p8y = 1), _p8w) {
                var _p8z = _p8t.get_slotnums(521);
                _p8v.add(_p8x.multiply(_p8z));
            }
            if (0 == _p8y) return _p8v;
            var _p90 = _p8t.get_each_level_over_nums([521]).slot[521];
            return 1 == _p8y && (_p90[1] >= 1 && (_p8v.houm += 1 * _p90[1]), _p90[2] >= 1 && (_p8v.kaih += 1 * _p90[2]), _p90[3] >= 1 && (_p8v.saku += 1 * _p90[3], _p8v.raig += 1 * _p90[3]), _p90[4] >= 1 && (_p8v.houg += 1 * _p90[4]), _p90[6] >= 1 && (_p8v.houm += 1 * _p90[6]), _p90[8] >= 1 && (_p8v.saku += 1 * _p90[8]), _p90[10] >= 1 && (_p8v.houm += 1 * _p90[10])), _p8v;
        };
    },
    3296: (_p91, _p92, _p93) => {
        'use strict';
        var _p94 = null;
        defineModule(_p92);
        Object.defineProperty(_p92, '__esModule', {
            'value': true
        }), _p92.getSlot522_523PersonalEffect = void 0;
        var _p95 = _p93(74496);
        _p92.getSlot522_523PersonalEffect = function(_p96) {
            var _p97 = null,
                _p98 = new _p95.SlotItemEffectModel(),
                _p99 = false,
                _p9a = new _p95.SlotItemEffectModel(),
                _p9b = 0,
                _p9c = _p96.get_slotnums(522),
                _p9d = _p96.get_slotnums(523),
                _p9e = _p9c + _p9d;
            if (14 == _p96.stype && (_p9a.raig += 1, _p9a.kaih += 5, _p9a.houm += 1, _p9a.saku += 3, _p99 = true, _p9d >= 1 && (_p98.raig += 2 * _p9d, _p98.baku += 2 * _p9d, _p98.kaih += 1 * _p9d, _p98.houm += 1 * _p9d, _p98.saku += 1 * _p9d), _p9b = 1), 0 == _p99) return _p98;
            if (_p98.add(_p9a.multiply(_p9e)), 0 == _p9b) return _p98;
            var _p9f = _p96.get_each_level_over_nums([522, 523]),
                _p9g = _p9f.slot[522],
                _p9h = _p9f.slot[523];
            if (1 == _p9b) {
                if (_p9g[1] >= 1 || _p9h[1] >= 1) {
                    var _p9i = _p9g[1] + _p9h[1];
                    _p98.raig += 1 * _p9i;
                }
                if (_p9g[2] >= 1 || _p9h[2] >= 1) {
                    var _p9j = _p9g[2] + _p9h[2];
                    _p98.houm += 1 * _p9j;
                }
                if (_p9g[3] >= 1 || _p9h[3] >= 1) {
                    var _p9k = _p9g[3] + _p9h[3];
                    _p98.kaih += 1 * _p9k;
                }
                if (_p9g[5] >= 1 || _p9h[5] >= 1) {
                    var _p9l = _p9g[5] + _p9h[5];
                    _p98.saku += 1 * _p9l;
                }
                if (_p9g[8] >= 1 || _p9h[8] >= 1) {
                    var _p9m = _p9g[8] + _p9h[8];
                    _p98.houm += 1 * _p9m;
                }
                if (_p9g[10] >= 1 || _p9h[10] >= 1) {
                    var _p9n = _p9g[10] + _p9h[10];
                    _p98.kaih += 1 * _p9n;
                }
            }
            return _p98;
        };
    },
    59415: (_p9o, _p9p, _p9q) => {
        'use strict';
        var _p9r = null;
        defineModule(_p9p);
        Object.defineProperty(_p9p, '__esModule', {
            'value': true
        }), _p9p.getSlot524PersonalEffect = void 0;
        var _p9s = _p9q(74496);
        _p9p.getSlot524PersonalEffect = function(_p9t) {
            var _p9u = null,
                _p9v = new _p9s.SlotItemEffectModel(),
                _p9w = false,
                _p9x = new _p9s.SlotItemEffectModel(),
                _p9y = 0,
                _p9z = 0;
            if (17 != _p9t.stype && 19 != _p9t.stype && 20 != _p9t.stype && 21 != _p9t.stype && 22 != _p9t.stype || (_p9x.houg += 1, _p9x.tyku += 2, _p9x.kaih += 2, _p9x.houm += 1, _p9w = true, _p9y = 1, _p9z = 1), 0 == _p9w) return _p9v;
            var _pa0 = _p9t.get_slotnums(524);
            _p9v.add(_p9x.multiply(_pa0));
            var _pa1 = _p9t.get_have_rader_nums().air_rader;
            if (1 == _p9z && _pa1 >= 1 && (_p9v.tyku += 2, _p9v.kaih += 2), 0 == _p9y) return _p9v;
            var _pa2 = _p9t.get_each_level_over_nums([524]).slot[524];
            return 1 == _p9y && (_pa2[1] >= 1 && (_p9v.kaih += 1 * _pa2[1]), _pa2[2] >= 1 && (_p9v.kaih += 1 * _pa2[2]), _pa2[4] >= 1 && (_p9v.tyku += 1 * _pa2[4]), _pa2[6] >= 1 && (_p9v.kaih += 1 * _pa2[6]), _pa2[7] >= 1 && (_p9v.houm += 1 * _pa2[7]), _pa2[8] >= 1 && (_p9v.tyku += 1 * _pa2[8]), _pa2[9] >= 1 && (_p9v.kaih += 1 * _pa2[9]), _pa2[10] >= 1 && (_p9v.houg += 1 * _pa2[10])), _p9v;
        };
    },
    36731: (_pa3, _pa4, _pa5) => {
        'use strict';
        var _pa6 = null;
        defineModule(_pa4);
        Object.defineProperty(_pa4, '__esModule', {
            'value': true
        }), _pa4.getSlot527PersonalEffect = void 0;
        var _pa7 = _pa5(74496);
        _pa4.getSlot527PersonalEffect = function(_pa8) {
            var _pa9 = null,
                _paa = new _pa7.SlotItemEffectModel(),
                _pab = 0;
            if ('イギリス' == _pa8.getCountryName() && (_pab = 1, _paa.tyku += 2, _paa.houm += 1, _paa.kaih += 1, _paa.saku += 2, 88 == _pa8.ctype && (_paa.houg += 2), 67 == _pa8.ctype && (_paa.houg += 1)), 0 == _pab) return _paa;
            var _pac = _pa8.get_each_level_over_nums([527]),
                _pad = _pac.slot[527][2],
                _pae = _pac.slot[527][4],
                _paf = _pac.slot[527][7],
                _pag = _pac.slot[527][10];
            return 1 == _pab && (_pad >= 1 && (_paa.tyku += 1), _pae >= 1 && (_paa.kaih += 1), _paf >= 1 && (_paa.tyku += 1), _pag >= 1 && (_paa.houm += 1)), _paa;
        };
    },
    30450: (_pah, _pai, _paj) => {
        'use strict';
        var _pak = null;
        defineModule(_pai);
        Object.defineProperty(_pai, '__esModule', {
            'value': true
        }), _pai.getSlot528PersonalEffect = void 0;
        var _pal = _paj(74496);
        _pai.getSlot528PersonalEffect = function(_pam) {
            var _pan = null,
                _pao = new _pal.SlotItemEffectModel(),
                _pap = false,
                _paq = new _pal.SlotItemEffectModel(),
                _par = 0;
            if ('イギリス' == _pam.getCountryName() && (_paq.houg += 1, _paq.houm += 2, _paq.kaih += 1, 108 == _pam.ctype && (_paq.houg += 1, _paq.kaih += 1), _pap = true, _par = 1), 0 == _pap) return _pao;
            var _pas = _pam.get_slotnums(528);
            if (_pao.add(_paq.multiply(_pas)), 0 == _par) return _pao;
            var _pat = _pam.get_each_level_over_nums([528]),
                _pau = _pat.slot[528][2],
                _pav = _pat.slot[528][4],
                _paw = _pat.slot[528][7],
                _pax = _pat.slot[528][10];
            return 1 == _par && (_pau >= 1 && (_pao.houg += 1 * _pau), _pav >= 1 && (_pao.houm += 1 * _pav), _paw >= 1 && (_pao.kaih += 1 * _paw), _pax >= 1 && (_pao.houm += 1 * _pax)), _pao;
        };
    },
    15653: (_pay, _paz, _pb0) => {
        'use strict';
        var _pb1 = null;
        defineModule(_paz);
        Object.defineProperty(_paz, '__esModule', {
            'value': true
        }), _paz.getSlot530PersonalEffect = void 0;
        var _pb2 = _pb0(74496);
        _paz.getSlot530PersonalEffect = function(_pb3) {
            var _pb4 = null,
                _pb5 = new _pb2.SlotItemEffectModel(),
                _pb6 = false;
            if (6 == _pb3.ctype && (_pb6 = true), 0 == _pb6) return _pb5;
            var _pb7 = false,
                _pb8 = new _pb2.SlotItemEffectModel(),
                _pb9 = _pb3.get_slotnums(530),
                _pba = _pb3.get_slotnums(174),
                _pbb = _pb3.get_each_level_over_nums([530, 174]),
                _pbc = _pbb.slot[530],
                _pbd = _pbb.slot[174],
                _pbe = _pb3.get_have_rader_nums(),
                _pbf = _pbe.water_rader,
                _pbg = _pbe.high_water_rader;
            return _pbe.air_rader, 149 != _pb3.ship_id && 150 != _pb3.ship_id && 151 != _pb3.ship_id && 152 != _pb3.ship_id && 593 != _pb3.ship_id || (_pb8.houg += 2, _pb7 = true), 591 != _pb3.ship_id && 954 != _pb3.ship_id || (_pb8.houg += 3, _pb7 = true), 592 != _pb3.ship_id && 694 != _pb3.ship_id || (_pb8.houg += 4, _pb7 = true), 149 != _pb3.ship_id && 150 != _pb3.ship_id && 151 != _pb3.ship_id && 152 != _pb3.ship_id || (_pb8.tyku += 1, _pb7 = true), 591 != _pb3.ship_id && 592 != _pb3.ship_id && 954 != _pb3.ship_id && 694 != _pb3.ship_id || (_pb8.tyku += 2, _pb7 = true), 593 == _pb3.ship_id && (_pb8.tyku += 3, _pb7 = true), 592 != _pb3.ship_id && 694 != _pb3.ship_id || (_pb8.houg += 1, _pb8.houm += 2, _pb7 = true, _pbc[2] >= 1 && (_pb5.houm += 1 * _pbc[2]), _pbc[4] >= 1 && (_pb5.houg += 1 * _pbc[4]), _pbc[6] >= 1 && (_pb5.souk += 1 * _pbc[6]), _pbc[7] >= 1 && (_pb5.houm += 1 * _pbc[7]), _pbc[8] >= 1 && (_pb5.houg += 1 * _pbc[8]), _pbc[9] >= 1 && (_pb5.souk += 1 * _pbc[9]), _pbc[10] >= 1 && (_pb5.houm += 1 * _pbc[10])), 150 != _pb3.ship_id && 152 != _pb3.ship_id && 591 != _pb3.ship_id && 954 != _pb3.ship_id || (_pb8.houm += 1, _pb7 = true, _pbc[2] >= 1 && (_pb5.houg += 1 * _pbc[2]), _pbc[4] >= 1 && (_pb5.souk += 1 * _pbc[4]), _pbc[6] >= 1 && (_pb5.houm += 1 * _pbc[6]), _pbc[8] >= 1 && (_pb5.houg += 1 * _pbc[8]), _pbc[10] >= 1 && (_pb5.houm += 1 * _pbc[10])), 149 != _pb3.ship_id && 151 != _pb3.ship_id && 593 != _pb3.ship_id || (_pbc[4] >= 1 && (_pb5.houg += 1 * _pbc[4]), _pbc[7] >= 1 && (_pb5.souk += 1 * _pbc[7]), _pbc[10] >= 1 && (_pb5.houm += 1 * _pbc[10])), 592 != _pb3.ship_id && 694 != _pb3.ship_id || (_pbf >= 1 && (_pb5.houg += 3, _pb5.houm += 3, _pb5.kaih += 3, 592 == _pb3.ship_id ? _pb5.houg += 3 : 694 == _pb3.ship_id && (_pb5.houg += 4)), _pb9 >= 2 && (_pb5.houm += 2), _pb9 >= 3 && (_pb5.houm += 2), _pb9 >= 4 && (_pb5.houm += 2), _pbg >= 1 && (_pb5.houm += 1), 694 == _pb3.ship_id && _pb9 >= 3 && (_pb5.houg += 3)), 149 != _pb3.ship_id && 150 != _pb3.ship_id && 151 != _pb3.ship_id && 152 != _pb3.ship_id && 591 != _pb3.ship_id && 954 != _pb3.ship_id && 593 != _pb3.ship_id || (_pbf >= 1 && (_pb5.houg += 2, _pb5.houm += 2, _pb5.kaih += 2, 591 == _pb3.ship_id || 152 == _pb3.ship_id ? _pb5.houg += 3 : 954 == _pb3.ship_id || 150 == _pb3.ship_id ? _pb5.houg += 2 : 149 != _pb3.ship_id && 151 != _pb3.ship_id && 593 != _pb3.ship_id || (_pb5.houg += 1)), _pbg >= 1 && (_pb5.houm += 1)), 591 != _pb3.ship_id && 592 != _pb3.ship_id && 593 != _pb3.ship_id && 954 != _pb3.ship_id && 694 != _pb3.ship_id || (_pba >= 1 && (_pb5.raig += 6, _pbd[6] >= 1 && (_pb5.raig += 1), _pbd[8] >= 1 && (_pb5.houm += 1), _pbd[10] >= 1 && (_pb5.houg += 1)), _pbg >= 1 && (_pb5.houg += 2, _pb5.raig += 2, _pb5.houm += 2, _pb5.kaih += 3, 591 == _pb3.ship_id || 592 == _pb3.ship_id ? _pb5.houg += 2 : 954 == _pb3.ship_id || 593 == _pb3.ship_id ? _pb5.houg += 1 : 694 == _pb3.ship_id && (_pb5.houg += 3)), _pb9 >= 2 && (_pb5.houm += 1)), _pb7 && _pb5.add(_pb8.multiply(_pb9)), _pb5;
        };
    },
    25851: (_pbh, _pbi, _pbj) => {
        'use strict';
        var _pbk = null;
        defineModule(_pbi);
        Object.defineProperty(_pbi, '__esModule', {
            'value': true
        }), _pbi.getSlot531PersonalEffect = void 0;
        var _pbl = _pbj(74496);
        _pbi.getSlot531PersonalEffect = function(_pbm) {
            var _pbn = null,
                _pbo = new _pbl.SlotItemEffectModel(),
                _pbp = _pbm.have_level_num_over_dict[531];
            return null == _pbp || (_pbp[4] >= 1 && (_pbo.houm += 1 * _pbp[4]), _pbp[5] >= 1 && (_pbo.houg += 1 * _pbp[5]), _pbp[6] >= 1 && (_pbo.kaih += 1 * _pbp[6]), _pbp[7] >= 1 && (_pbo.houm += 1 * _pbp[7]), _pbp[8] >= 1 && (_pbo.houg += 1 * _pbp[8]), _pbp[9] >= 1 && (_pbo.kaih += 1 * _pbp[9]), _pbp[10] >= 1 && (_pbo.houm += 1 * _pbp[10])), _pbo;
        };
    },
    91275: (_pbq, _pbr, _pbs) => {
        'use strict';
        var _pbt = null;
        defineModule(_pbr);
        Object.defineProperty(_pbr, '__esModule', {
            'value': true
        }), _pbr.getSlot538PersonalEffect = void 0;
        var _pbu = _pbs(74496);
        _pbr.getSlot538PersonalEffect = function(_pbv) {
            var _pbw = null,
                _pbx = new _pbu.SlotItemEffectModel(),
                _pby = false,
                _pbz = new _pbu.SlotItemEffectModel(),
                _pc0 = 0;
            if ('フランス' == _pbv.getCountryName() && (_pbz.houg += 3, _pbz.kaih += 2, _pbz.houm += 2, _pby = true, _pc0 = 1), 79 == _pbv.ctype ? (_pbz.houg += 2, 969 == _pbv.ship_id && (_pbz.houg += 1, _pbz.houm += 1, _pbz.kaih += 1), _pby = true) : 70 == _pbv.ctype && (_pbz.houg += 1, _pbz.houm += 1, _pbz.tyku += 2, _pbz.kaih += 2, _pby = true), 0 == _pby) return _pbx;
            var _pc1 = _pbv.get_slotnums(538);
            if (_pbx.add(_pbz.multiply(_pc1)), 0 == _pc0) return _pbx;
            var _pc2 = _pbv.haveSlotLevelNumOver(538);
            return 1 == _pc0 && (_pc2[3] >= 1 && (_pbx.kaih += 1 * _pc2[3]), _pc2[4] >= 1 && (_pbx.houm += 1 * _pc2[4]), _pc2[5] >= 1 && (_pbx.houg += 1 * _pc2[5]), _pc2[6] >= 1 && (_pbx.kaih += 1 * _pc2[6]), _pc2[7] >= 1 && (_pbx.houm += 1 * _pc2[7]), _pc2[8] >= 1 && (_pbx.houg += 1 * _pc2[8]), _pc2[9] >= 1 && (_pbx.kaih += 1 * _pc2[9]), _pc2[10] >= 1 && (_pbx.houg += 1 * _pc2[10], _pbx.houm += 1 * _pc2[10])), _pbx;
        };
    },
    72743: (_pc3, _pc4, _pc5) => {
        'use strict';
        var _pc6 = null;
        defineModule(_pc4);
        Object.defineProperty(_pc4, '__esModule', {
            'value': true
        }), _pc4.getSlot540PersonalEffect = void 0;
        var _pc7 = _pc5(74496);
        _pc4.getSlot540PersonalEffect = function(_pc8) {
            var _pc9 = null,
                _pca = new _pc7.SlotItemEffectModel(),
                _pcb = false,
                _pcc = new _pc7.SlotItemEffectModel();
            if (911 == _pc8.ship_id || 916 == _pc8.ship_id || 546 == _pc8.ship_id || 662 == _pc8.ship_id || 663 == _pc8.ship_id || 668 == _pc8.ship_id ? (_pcc.kaih += 1, _pcc.saku += 1, _pcb = true) : 73 == _pc8.ship_id || 506 == _pc8.ship_id || 121 == _pc8.ship_id || 503 == _pc8.ship_id || 504 == _pc8.ship_id || 188 == _pc8.ship_id || 189 == _pc8.ship_id ? (_pcc.houm += 1, _pcc.kaih += 1, _pcc.saku += 1, _pcb = true) : 488 != _pc8.ship_id && 200 != _pc8.ship_id && 487 != _pc8.ship_id && 501 != _pc8.ship_id && 502 != _pc8.ship_id && 507 != _pc8.ship_id || (_pcc.houg += 1, _pcc.houm += 1, _pcc.kaih += 1, _pcc.saku += 1, _pcb = true), 'にっしん' == _pc8.yomi || 'ちとせ' == _pc8.yomi || 'ちよだ' == _pc8.yomi || 'あきつしま' == _pc8.yomi ? (_pcc.houg += 1, _pcc.houm += 1, _pcc.tyku += 2, _pcc.kaih += 2, _pcc.saku += 2, _pcb = true) : 'みずほ' != _pc8.yomi && 'かもい' != _pc8.yomi || (_pcc.houg += 2, _pcc.houm += 1, _pcc.tyku += 2, _pcc.kaih += 2, _pcc.saku += 2, _pcb = true), 0 == _pcb) return _pca;
            var _pcd = _pc8.get_slotnums(540);
            return _pca.add(_pcc.multiply(_pcd)), _pca;
        };
    },
    57041: (_pce, _pcf, _pcg) => {
        'use strict';
        var _pch = null;
        defineModule(_pcf);
        Object.defineProperty(_pcf, '__esModule', {
            'value': true
        }), _pcf.getSlot545PersonalEffect = void 0;
        var _pci = _pcg(74496);
        _pcf.getSlot545PersonalEffect = function(_pcj) {
            var _pck = null,
                _pcl = new _pci.SlotItemEffectModel(),
                _pcm = false,
                _pcn = new _pci.SlotItemEffectModel();
            if ('しょうかく' == _pcj.yomi ? _pcl.houg += 4 : 'ずいかく' == _pcj.yomi ? _pcl.houg += 3 : 'あかぎ' == _pcj.yomi ? _pcl.houg += 2 : 'かが' != _pcj.yomi && 'たいほう' != _pcj.yomi || (_pcl.houg += 1), 461 == _pcj.ship_id || 466 == _pcj.ship_id ? (_pcn.houg += 1, _pcn.houm += 2, _pcn.kaih += 1, _pcn.saku += 2, _pcm = true) : 462 == _pcj.ship_id || 467 == _pcj.ship_id || 646 == _pcj.ship_id ? (_pcn.houg += 1, _pcn.houm += 1, _pcn.saku += 1, _pcm = true) : 599 != _pcj.ship_id && 610 != _pcj.ship_id && 156 != _pcj.ship_id || (_pcn.houm += 1, _pcn.saku += 1, _pcm = true), 0 == _pcm) return _pcl;
            var _pco = _pcj.get_slotnums(545);
            return _pcl.add(_pcn.multiply(_pco)), _pcl;
        };
    },
    74608: (_pcp, _pcq, _pcr) => {
        'use strict';
        var _pcs = null;
        defineModule(_pcq);
        Object.defineProperty(_pcq, '__esModule', {
            'value': true
        }), _pcq.getSlot549PersonalEffect = void 0;
        var _pct = _pcr(74496);
        _pcq.getSlot549PersonalEffect = function(_pcu) {
            var _pcv = null,
                _pcw = new _pct.SlotItemEffectModel(),
                _pcx = false,
                _pcy = new _pct.SlotItemEffectModel(),
                _pcz = 0;
            if ('やましおまる' != _pcu.yomi && 'くまのまる' != _pcu.yomi && 'あきつまる' != _pcu.yomi || (_pcy.houg += 2, _pcy.houm += 1, _pcy.kaih += 1, _pcy.tais += 4, _pcx = true, _pcz = 1), 76 != _pcu.ctype && 27 != _pcu.ctype || (_pcy.houg += 1, _pcy.houm += 1, _pcy.tais += 1, _pcx = true, _pcz = 2), 0 == _pcx) return _pcw;
            var _pd0 = _pcu.get_slotnums(549);
            if (_pcw.add(_pcy.multiply(_pd0)), 0 == _pcz) return _pcw;
            var _pd1 = _pcu.haveSlotLevelNumOver(549);
            return 1 == _pcz ? (_pd1[3] >= 1 && (_pcw.houg += 1 * _pd1[3]), _pd1[4] >= 1 && (_pcw.houm += 1 * _pd1[4]), _pd1[5] >= 1 && (_pcw.tais += 1 * _pd1[5]), _pd1[6] >= 1 && (_pcw.kaih += 1 * _pd1[6]), _pd1[7] >= 1 && (_pcw.houg += 1 * _pd1[7]), _pd1[8] >= 1 && (_pcw.houm += 1 * _pd1[8]), _pd1[9] >= 1 && (_pcw.tais += 1 * _pd1[9]), _pd1[10] >= 1 && (_pcw.houg += 1 * _pd1[10])) : 2 == _pcz && (_pd1[4] >= 1 && (_pcw.tais += 1 * _pd1[4]), _pd1[6] >= 1 && (_pcw.kaih += 1 * _pd1[6]), _pd1[8] >= 1 && (_pcw.houm += 1 * _pd1[8]), _pd1[10] >= 1 && (_pcw.houg += 1 * _pd1[10])), _pcw;
        };
    },
    23035: (_pd2, _pd3, _pd4) => {
        'use strict';
        var _pd5 = null;
        defineModule(_pd3);
        Object.defineProperty(_pd3, '__esModule', {
            'value': true
        }), _pd3.getSlot58PersonalEffect = void 0;
        var _pd6 = _pd4(74496);
        _pd3.getSlot58PersonalEffect = function(_pd7) {
            var _pd8 = null,
                _pd9 = new _pd6.SlotItemEffectModel(),
                _pda = new _pd6.SlotItemEffectModel();
            if ('しまかぜ' != _pd7.yomi && 4 != _pd7.stype && 54 != _pd7.ctype || (_pda.raig = 1), !_pda.exists()) return _pd9;
            var _pdb = _pd7.get_slotnums(58);
            return _pd9 = _pda.multiply(_pdb);
        };
    },
    47169: (_pdc, _pdd, _pde) => {
        'use strict';
        var _pdf = null;
        defineModule(_pdd);
        Object.defineProperty(_pdd, '__esModule', {
            'value': true
        }), _pdd.getSlot59PersonalEffect = void 0;
        var _pdg = _pde(74496);
        _pdd.getSlot59PersonalEffect = function(_pdh) {
            var _pdi = null,
                _pdj = new _pdg.SlotItemEffectModel();
            return 501 != _pdh.ship_id && 506 != _pdh.ship_id && 502 != _pdh.ship_id && 507 != _pdh.ship_id || (_pdj.tyku += 1, _pdj.kaih += 1), _pdj;
        };
    },
    87845: (_pdk, _pdl, _pdm) => {
        'use strict';
        var _pdn = null;
        defineModule(_pdl);
        Object.defineProperty(_pdl, '__esModule', {
            'value': true
        }), _pdl.getSlot5PersonalEffect = void 0;
        var _pdo = _pdm(74496);
        _pdl.getSlot5PersonalEffect = function(_pdp) {
            var _pdq = null,
                _pdr = new _pdo.SlotItemEffectModel(),
                _pds = false,
                _pdt = new _pdo.SlotItemEffectModel();
            if (52 != _pdp.ctype && 9 != _pdp.ctype || (_pdt.houg += 1, 52 == _pdp.ctype && (_pdt.houg = _pdt.houg + 1), _pds = true), 0 == _pds) return _pdr;
            var _pdu = _pdp.get_slotnums(5);
            return _pdr.add(_pdt.multiply(_pdu)), _pdr;
        };
    },
    92253: (_pdv, _pdw, _pdx) => {
        'use strict';
        var _pdy = null;
        defineModule(_pdw);
        Object.defineProperty(_pdw, '__esModule', {
            'value': true
        }), _pdw.getSlot60_154_219PersonalEffec = void 0;
        var _pdz = _pdx(74496);
        _pdw.getSlot60_154_219PersonalEffec = function(_pe0) {
            var _pe1 = null,
                _pe2 = new _pdz.SlotItemEffectModel(),
                _pe3 = false,
                _pe4 = new _pdz.SlotItemEffectModel();
            if ('じゅんよう' != _pe0.yomi && 'ひよう' != _pe0.yomi && 'ずいほう' != _pe0.yomi && 'ちとせ' != _pe0.yomi && 'ちよだ' != _pe0.yomi || (_pe4.houg += 1, _pe4.tyku += 1, _pe4.kaih += 1, _pe3 = true), 185 != _pe0.ship_id && 318 != _pe0.ship_id && 282 != _pe0.ship_id || (_pe4.houg += 1, _pe4.tyku += 1, _pe4.kaih += 1, _pe3 = true), 888 != _pe0.ship_id && 883 != _pe0.ship_id || (_pe4.houg += 2, _pe4.tyku += 1, _pe4.kaih += 2, _pe3 = true), 0 == _pe3) return _pe2;
            var _pe5 = _pe0.get_slotnums(60) + _pe0.get_slotnums(154) + _pe0.get_slotnums(219);
            return _pe2.add(_pe4.multiply(_pe5)), _pe2;
        };
    },
    2578: (_pe6, _pe7, _pe8) => {
        'use strict';
        var _pe9 = null;
        defineModule(_pe7);
        Object.defineProperty(_pe7, '__esModule', {
            'value': true
        }), _pe7.getSlot61PersonalEffect2 = _pe7.getSlot61PersonalEffect = void 0;
        var _pea = _pe8(74496);
        _pe7.getSlot61PersonalEffect = function(_peb) {
            var _pec = null,
                _ped = new _pea.SlotItemEffectModel();
            if (553 == _peb.ship_id) _ped.houg = 3, _ped.kaih = 2, _ped.souk = 1, _ped.houm = 5, _ped.leng = 1;
            else {
                if (554 == _peb.ship_id) _ped.houg = 3, _ped.kaih = 3, _ped.souk = 3, _ped.houm = 5, _ped.leng = 1;
                else {
                    if (196 == _peb.ship_id) _ped.houm = 5, _ped.leng = 1;
                    else {
                        if (197 != _peb.ship_id) return _ped;
                        _ped.houm = 5, _ped.leng = 1;
                    }
                }
            }
            return _ped;
        }, _pe7.getSlot61PersonalEffect2 = function(_pee) {
            var _pef = null,
                _peg = new _pea.SlotItemEffectModel();
            if (null == _pee.have_slots_dict[61]) return _peg;
            for (var _peh = 0, _pei = 0, _pej = _pee.have_slots_dict[61]; _pei < _pej.length; _pei++) {
                var _pek = _pej[_pei].level;
                _peh < _pek && (_peh = _pek);
            }
            return 0 == _peh || ('そうりゅう' == _pee.yomi ? (_peg.houg += 3, _peg.saku += 3) : 'ひりゅう' == _pee.yomi && (_peg.houg += 2, _peg.saku += 2), 508 != _pee.ship_id && 509 != _pee.ship_id && 560 != _pee.ship_id || (_peg.houg += 1, _peg.saku += 1), _peh >= 8 && 197 == _pee.ship_id && (_peg.houg += 1, _peg.saku += 1)), _peg;
        };
    },
    17143: (_pel, _pem, _pen) => {
        'use strict';
        var _peo = null;
        defineModule(_pem);
        Object.defineProperty(_pem, '__esModule', {
            'value': true
        }), _pem.getSlot63PersonalEffect = void 0;
        var _pep = _pen(74496);
        _pem.getSlot63PersonalEffect = function(_peq) {
            var _per = null,
                _pes = new _pep.SlotItemEffectModel(),
                _pet = new _pep.SlotItemEffectModel();
            1 != _peq.ctype && 5 != _peq.ctype && 10 != _peq.ctype || (_pet.tyku += 1), 'ゆうだち' == _peq.yomi && (_pet.houg += 1, _pet.tyku += 1, _pet.kaih += 2), 145 == _peq.ship_id || 961 == _peq.ship_id ? _pet.houg += 1 : 144 == _peq.ship_id ? _pet.raig += 1 : 469 == _peq.ship_id ? _pet.kaih += 2 : 242 == _peq.ship_id || 497 == _peq.ship_id || 244 == _peq.ship_id || 498 == _peq.ship_id || 975 == _peq.ship_id ? _pet.kaih += 1 : 627 == _peq.ship_id ? _pet.houg += 1 : 903 != _peq.ship_id && 908 != _peq.ship_id || (_pet.houg += 2);
            var _peu = true;
            if (_pet.exists() || (_peu = false), 0 == _peu) return _pes;
            var _pev = _peq.get_slotnums(63);
            return _pes = _pet.multiply(_pev);
        };
    },
    16164: (_pew, _pex, _pey) => {
        'use strict';
        var _pez = null;
        defineModule(_pex);
        Object.defineProperty(_pex, '__esModule', {
            'value': true
        }), _pex.getSlot67PersonalEffect = void 0;
        var _pf0 = _pey(74496);
        _pex.getSlot67PersonalEffect = function(_pf1) {
            var _pf2 = null,
                _pf3 = new _pf0.SlotItemEffectModel(),
                _pf4 = new _pf0.SlotItemEffectModel();
            if (13 != _pf1.stype && 14 != _pf1.stype && (_pf4.raig = -5), !_pf4.exists()) return _pf3;
            var _pf5 = _pf1.get_slotnums(67);
            return _pf3 = _pf4.multiply(_pf5);
        };
    },
    35023: (_pf6, _pf7, _pf8) => {
        'use strict';
        var _pf9 = null;
        defineModule(_pf7);
        Object.defineProperty(_pf7, '__esModule', {
            'value': true
        }), _pf7.getSlot69PersonalEffect = void 0;
        var _pfa = _pf8(74496);
        _pf7.getSlot69PersonalEffect = function(_pfb) {
            var _pfc = null,
                _pfd = new _pfa.SlotItemEffectModel(),
                _pfe = false,
                _pff = new _pfa.SlotItemEffectModel();
            if (554 == _pfb.ship_id || 646 == _pfb.ship_id ? (_pff.houg += 1, _pff.tais += 2, _pfe = true) : 553 == _pfb.ship_id && (_pff.houg += 1, _pff.tais += 1, _pfe = true), 0 == _pfe) return _pfd;
            var _pfg = _pfb.get_slotnums(69);
            return _pfd.add(_pff.multiply(_pfg)), _pfd;
        };
    },
    78707: (_pfh, _pfi, _pfj) => {
        'use strict';
        var _pfk = null;
        defineModule(_pfi);
        Object.defineProperty(_pfi, '__esModule', {
            'value': true
        }), _pfi.getSlot70PersonalEffect = void 0;
        var _pfl = _pfj(74496);
        _pfi.getSlot70PersonalEffect = function(_pfm) {
            var _pfn = null,
                _pfo = new _pfl.SlotItemEffectModel(),
                _pfp = false,
                _pfq = new _pfl.SlotItemEffectModel();
            if ('やましおまる' == _pfm.yomi && (_pfq.houg += 1, _pfq.tais += 1, _pfp = true), 0 == _pfp) return _pfo;
            var _pfr = _pfm.get_slotnums(70);
            return _pfo.add(_pfq.multiply(_pfr)), _pfo;
        };
    },
    44680: function(_pfs, _pft, _pfu) {
        'use strict';
        var _pfv = null;
        var _pfw = this && this.__importDefault || function(_pfx) {
            var _pfy = null;
            return _pfx && _pfx.__esModule ? _pfx : {
                'default': _pfx
            };
        };
        defineModule(_pft);
        Object.defineProperty(_pft, '__esModule', {
            'value': true
        }), _pft.getSlot78PersonalEffect = void 0;
        var _pfz = _pfu(74496),
            _pg0 = _pfw(_pfu(18622));
        _pft.getSlot78PersonalEffect = function(_pg1) {
            var _pg2 = null,
                _pg3 = new _pfz.SlotItemEffectModel(),
                _pg4 = false,
                _pg5 = new _pfz.SlotItemEffectModel(),
                _pg6 = 0,
                _pg7 = 0,
                _pg8 = false;
            if (48 == _pg1.ctype && (_pg5.houg += 1, _pg5.kaih += 1, _pg6 = 1, _pg7 = 1, _pg8 = true, _pg4 = true), 0 == _pg4) return _pg3;
            var _pg9 = _pg1.get_slotnums(78);
            _pg3.add(_pg5.multiply(_pg9));
            var _pga = 0,
                _pgb = _pg1.get_each_level_nums(78),
                _pgc = 0;
            if (_pg8) {
                _pgb.map(function(_pgd, _pge) {
                    _pge >= 7 && (_pgc += _pgd);
                });
                for (var _pgf = 0, _pgg = _pg1.have_slot_ids(); _pgf < _pgg.length; _pgf++) {
                    var _pgh = _pgg[_pgf],
                        _pgi = _pg0.default.model.slot.getMst(_pgh),
                        _pgj = _pgi.equipType;
                    12 != _pgj && 13 != _pgj || _pgi.sakuteki >= 5 && (_pga += _pg1.get_slotnums(parseInt(_pgh)));
                }
            }
            if (1 == _pg6 && _pga > 0 && (_pg3.houg += 2, _pg3.kaih += 2, _pg3.raig += 2), 1 == _pg7) {
                _pg3.houg += 1 * _pgc;
                var _pgk = _pgb[10];
                _pg3.souk += 1 * _pgk;
            }
            return _pg3;
        };
    },
    45749: (_pgl, _pgm, _pgn) => {
        'use strict';
        var _pgo = null;
        defineModule(_pgm);
        Object.defineProperty(_pgm, '__esModule', {
            'value': true
        }), _pgm.getSlot79And81PersonalEffect = void 0;
        var _pgp = _pgn(74496);
        _pgm.getSlot79And81PersonalEffect = function(_pgq) {
            var _pgr = null,
                _pgs = new _pgp.SlotItemEffectModel(),
                _pgt = new _pgp.SlotItemEffectModel();
            if (553 == _pgq.ship_id) _pgt.houg = 3;
            else {
                if (82 == _pgq.ship_id) _pgt.houg = 2;
                else {
                    if (88 == _pgq.ship_id) _pgt.houg = 2;
                    else {
                        if (554 == _pgq.ship_id) _pgt.houg = 3;
                        else {
                            if (411 == _pgq.ship_id) _pgt.houg = 2;
                            else {
                                if (412 != _pgq.ship_id) return _pgs;
                                _pgt.houg = 2;
                            }
                        }
                    }
                }
            }
            var _pgu = _pgq.get_slotnums(79) + _pgq.get_slotnums(81);
            return _pgs = _pgt.multiply(_pgu);
        };
    },
    37334: (_pgv, _pgw, _pgx) => {
        'use strict';
        var _pgy = null;
        defineModule(_pgw);
        Object.defineProperty(_pgw, '__esModule', {
            'value': true
        }), _pgw.getSlot82PersonalEffect = void 0;
        var _pgz = _pgx(74496);
        _pgw.getSlot82PersonalEffect = function(_ph0) {
            var _ph1 = null,
                _ph2 = new _pgz.SlotItemEffectModel(),
                _ph3 = new _pgz.SlotItemEffectModel();
            if (76 == _ph0.ctype && (_ph3.tais = 1, _ph3.kaih = 1), !_ph3.exists()) return _ph2;
            var _ph4 = _ph0.get_slotnums(82);
            return _ph2 = _ph3.multiply(_ph4);
        };
    },
    2603: function(_ph5, _ph6, _ph7) {
        'use strict';
        var _ph8 = null;
        var _ph9 = this && this.__importDefault || function(_pha) {
            var _phb = null;
            return _pha && _pha.__esModule ? _pha : {
                'default': _pha
            };
        };
        defineModule(_ph6);
        Object.defineProperty(_ph6, '__esModule', {
            'value': true
        }), _ph6.getSlot84PersonalEffect = void 0;
        var _phc = _ph7(74496),
            _phd = _ph9(_ph7(18622));
        _ph6.getSlot84PersonalEffect = function(_phe) {
            var _phf = null,
                _phg = new _phc.SlotItemEffectModel(),
                _phh = _phe.get_each_level_nums(84),
                _phi = 0,
                _phj = 0;
            if (_phh.forEach(function(_phk, _phl) {
                    _phl >= 4 && (_phi += _phk), _phl >= 7 && (_phj += _phk);
                }), 0 == _phi) return _phg;
            for (var _phm = 0, _phn = 0, _pho = _phe.have_slot_ids(); _phn < _pho.length; _phn++) {
                var _php = _pho[_phn],
                    _phq = _phd.default.model.slot.getMst(_php),
                    _phr = _phq.equipType;
                12 != _phr && 13 != _phr || (_phq.sakuteki >= 5 && _phe.get_slotnums(parseInt(_php)), _phq.taiku >= 2 && (_phm += _phe.get_slotnums(parseInt(_php))));
            }
            var _phs = _phe.getCountryName();
            _phi >= 1 && (_phg.tyku += 1 * _phi, _phg.kaih += 1 * _phi, 'ドイツ' != _phs && 'イタリア' != _phs || (_phg.tyku += 1 * _phi, _phg.kaih += 1 * _phi), _phm >= 1 && (_phg.tyku += 1)), _phj >= 1 && (_phg.tyku += 1 * _phj, _phg.houg += 1 * _phj);
            var _pht = _phh[10];
            return _pht >= 1 && (_phg.tyku += 1 * _pht, _phg.kaih += 1 * _pht, 'ドイツ' != _phs && 'イタリア' != _phs || (_phg.houg += 1)), _phg;
        };
    },
    90725: (_phu, _phv, _phw) => {
        'use strict';
        var _phx = null;
        defineModule(_phv);
        Object.defineProperty(_phv, '__esModule', {
            'value': true
        }), _phv.getSlot85PersonalEffect = void 0;
        var _phy = _phw(74496);
        _phv.getSlot85PersonalEffect = function(_phz) {
            var _pi0 = null,
                _pi1 = new _phy.SlotItemEffectModel(),
                _pi2 = _phz.get_each_level_over_nums([85]),
                _pi3 = _pi2.slot[85][6],
                _pi4 = _pi2.slot[85][8],
                _pi5 = _pi2.slot[85][10],
                _pi6 = _phz.get_have_rader_nums().air_rader,
                _pi7 = _phz.getCountryName();
            return _pi3 > 0 && (_pi1.tyku += 1 * _pi3, _pi1.kaih += 1 * _pi3, _pi6 >= 1 && (_pi1.tyku += 2)), _pi4 > 0 && (_pi1.houg += 1 * _pi4, 'ドイツ' != _pi7 && 'イタリア' != _pi7 || (_pi1.tyku += 1 * _pi4, _pi1.kaih += 1 * _pi4)), _pi5 > 0 && (_pi1.kaih += 1 * _pi5, _pi1.houm += 1 * _pi5, 'ドイツ' != _pi7 && 'イタリア' != _pi7 || (_pi1.houg += 1)), _pi1;
        };
    },
    29180: (_pi8, _pi9, _pia) => {
        'use strict';
        var _pib = null;
        defineModule(_pi9);
        Object.defineProperty(_pi9, '__esModule', {
            'value': true
        }), _pi9.getSlot87PersonalEffect = void 0;
        var _pic = _pia(74496);
        _pi9.getSlot87PersonalEffect = function(_pid) {
            var _pie = null,
                _pif = new _pic.SlotItemEffectModel(),
                _pig = false,
                _pih = new _pic.SlotItemEffectModel(),
                _pii = 0;
            if (951 == _pid.ship_id ? (_pih.houg += 1, _pih.kaih += 1, _pih.raig += 1, _pih.houm += 1, _pig = true, _pii = 1) : 181 == _pid.ship_id || 316 == _pid.ship_id || 50 == _pid.ship_id || 229 == _pid.ship_id || 961 == _pid.ship_id ? _pii = 2 : 591 != _pid.ship_id && 592 != _pid.ship_id && 593 != _pid.ship_id && 954 != _pid.ship_id && 694 != _pid.ship_id || (_pif.kaih += 2, _pif.raig += 1, _pii = 3), 38 != _pid.ctype && 54 != _pid.ctype && 101 != _pid.ctype || (_pii = 4), _pig) {
                var _pij = _pid.get_slotnums(87);
                _pif.add(_pih.multiply(_pij));
            }
            if (0 == _pii) return _pif;
            var _pik = _pid.get_each_level_nums(87),
                _pil = [];
            return _pii > 0 && _pik.forEach(function(_pim, _pin) {
                var _pio = null;
                for (var _pip = 1; _pip <= _pid.SLOT_LEVEL_MAX; _pip++) null == _pil[_pip] && (_pil[_pip] = 0), _pin >= _pip && (_pil[_pip] += _pim);
            }), 1 == _pii ? (_pil[6] >= 1 && (_pif.tyku += 1 * _pil[6]), _pil[7] >= 1 && (_pif.kaih += 1 * _pil[7]), _pil[8] >= 1 && (_pif.raig += 1 * _pil[8]), _pil[9] >= 1 && (_pif.houg += 1 * _pil[9]), _pil[10] >= 1 && (_pif.houm += 1 * _pil[10])) : 2 == _pii ? (_pil[6] >= 1 && (_pif.kaih += 1 * _pil[6]), _pil[7] >= 1 && (_pif.raig += 1 * _pil[7]), _pil[8] >= 1 && (_pif.houg += 1 * _pil[8]), _pil[9] >= 1 && (_pif.houm += 1 * _pil[9]), _pil[10] >= 1 && (_pif.kaih += 1 * _pil[10])) : 3 == _pii ? (_pil[6] > 0 && (_pif.kaih += 1), _pil[8] > 0 && (_pif.raig += 1), _pil[10] > 0 && (_pif.houg += 1)) : 4 == _pii && (_pil[7] >= 1 && (_pif.kaih += 1 * _pil[7]), _pil[8] >= 1 && (_pif.raig += 1 * _pil[8]), _pil[10] >= 1 && (_pif.houm += 1 * _pil[10])), _pif;
        };
    },
    68685: function(_piq, _pir, _pis) {
        'use strict';
        var _pit = null;
        var _piu = this && this.__importDefault || function(_piv) {
            var _piw = null;
            return _piv && _piv.__esModule ? _piv : {
                'default': _piv
            };
        };
        defineModule(_pir);
        Object.defineProperty(_pir, '__esModule', {
            'value': true
        }), _pir.getSlot90PersonalEffect = void 0;
        var _pix = _pis(74496),
            _piy = _piu(_pis(18622));
        _pir.getSlot90PersonalEffect = function(_piz) {
            var _pj0 = null,
                _pj1 = new _pix.SlotItemEffectModel(),
                _pj2 = new _pix.SlotItemEffectModel();
            if (142 == _piz.ship_id ? (_pj2.houg += 2, _pj2.kaih += 1) : 295 == _piz.ship_id || 416 == _piz.ship_id || 417 == _piz.ship_id ? _pj2.houg += 1 : 264 == _piz.ship_id ? (_pj2.houg += 1, _pj2.tyku += 1) : 501 != _piz.ship_id && 506 != _piz.ship_id && 502 != _piz.ship_id && 507 != _piz.ship_id || (_pj2.houg += 1), 7 != _piz.ctype && 13 != _piz.ctype && 8 != _piz.ctype && 29 != _piz.ctype && 9 != _piz.ctype && 31 != _piz.ctype || (_pj2.houg += 1), _pj2.exists()) {
                var _pj3 = _piz.get_slotnums(90);
                _pj1 = _pj2.multiply(_pj3);
            }
            var _pj4 = [];
            if ('あおば' == _piz.yomi && (_pj4[1] = 1), 13 != _piz.ctype && 7 != _piz.ctype || (_pj4[2] = 1), 0 == _pj4.length) return _pj1;
            for (var _pj5 = 0, _pj6 = 0, _pj7 = 0, _pj8 = _piz.have_slot_ids(); _pj7 < _pj8.length; _pj7++) {
                var _pj9 = _pj8[_pj7],
                    _pja = _piy.default.model.slot.getMst(_pj9),
                    _pjb = _pja.equipType;
                12 != _pjb && 13 != _pjb || (_pja.sakuteki >= 5 && (_pj5 += _piz.get_slotnums(parseInt(_pj9))), _pja.taiku >= 2 && (_pj6 += _piz.get_slotnums(parseInt(_pj9))));
            }
            return _pj6 > 0 && null != _pj4[1] && (_pj1.tyku += 5, _pj1.kaih += 2), _pj5 > 0 && null != _pj4[2] && (_pj1.houg += 3, _pj1.kaih += 2, _pj1.raig += 2), _pj1;
        };
    },
    26078: (_pjc, _pjd, _pje) => {
        'use strict';
        var _pjf = null;
        defineModule(_pjd);
        Object.defineProperty(_pjd, '__esModule', {
            'value': true
        }), _pjd.getSlot93PersonalEffect = void 0;
        var _pjg = _pje(74496);
        _pjd.getSlot93PersonalEffect = function(_pjh) {
            var _pji = null,
                _pjj = new _pjg.SlotItemEffectModel();
            return 'そうりゅう' == _pjh.yomi ? _pjj.houg = 1 : 'ひりゅう' == _pjh.yomi && (_pjj.houg = 3), _pjj;
        };
    },
    20829: (_pjk, _pjl, _pjm) => {
        'use strict';
        var _pjn = null;
        defineModule(_pjl);
        Object.defineProperty(_pjl, '__esModule', {
            'value': true
        }), _pjl.getSlot94PersonalEffect = void 0;
        var _pjo = _pjm(74496);
        _pjl.getSlot94PersonalEffect = function(_pjp) {
            var _pjq = null,
                _pjr = new _pjo.SlotItemEffectModel();
            if (196 == _pjp.ship_id) _pjr.houg = 7;
            else {
                if (197 != _pjp.ship_id) return _pjr;
                _pjr.houg = 3;
            }
            return _pjr;
        };
    },
    6880: (_pjs, _pjt, _pju) => {
        'use strict';
        var _pjv = null;
        defineModule(_pjt);
        Object.defineProperty(_pjt, '__esModule', {
            'value': true
        }), _pjt.getSlot99PersonalEffect = void 0;
        var _pjw = _pju(74496);
        _pjt.getSlot99PersonalEffect = function(_pjx) {
            var _pjy = null,
                _pjz = new _pjw.SlotItemEffectModel();
            return 'そうりゅう' == _pjx.yomi ? _pjz.houg = 4 : 'ひりゅう' == _pjx.yomi && (_pjz.houg = 1), _pjz;
        };
    },
    21403: (_pk0, _pk1, _pk2) => {
        'use strict';
        var _pk3 = null;
        defineModule(_pk1);
        Object.defineProperty(_pk1, '__esModule', {
            'value': true
        }), _pk1.getSlotCorsairMkIIPersonalEffect = void 0;
        var _pk4 = _pk2(74496);
        _pk1.getSlotCorsairMkIIPersonalEffect = function(_pk5) {
            var _pk6 = null,
                _pk7 = new _pk4.SlotItemEffectModel(),
                _pk8 = false,
                _pk9 = new _pk4.SlotItemEffectModel();
            112 == _pk5.ctype && (_pk9.houg += 1, _pk9.tyku += 1, _pk9.kaih += 2, _pk8 = true);
            var _pka = _pk5.getCountryName();
            if (67 == _pk5.ctype || 78 == _pk5.ctype || 82 == _pk5.ctype || 88 == _pk5.ctype || 108 == _pk5.ctype || 112 == _pk5.ctype ? (_pk9.houg += 1, _pk9.tyku += 2, _pk9.kaih += 3, _pk8 = true) : 'アメリカ' == _pka && (_pk9.houg += 1, _pk9.tyku += 1, _pk9.kaih += 2, _pk8 = true), 0 == _pk8) return _pk7;
            var _pkb = _pk5.get_slotnums(434) + _pk5.get_slotnums(435);
            return _pk7.add(_pk9.multiply(_pkb)), _pk7;
        };
    },
    9195: (_pkc, _pkd, _pke) => {
        'use strict';
        var _pkf = null;
        defineModule(_pkd);
        Object.defineProperty(_pkd, '__esModule', {
            'value': true
        }), _pkd.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _pkg = _pke(74496);
        _pkd.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_pkh) {
            var _pki = null,
                _pkj = new _pkg.SlotItemEffectModel(),
                _pkk = false,
                _pkl = new _pkg.SlotItemEffectModel();
            if (56 == _pkh.ctype && (_pkl.tais += 3, _pkl.kaih += 2, _pkk = true), 0 == _pkk) return _pkj;
            var _pkm = _pkh.get_slotnums(44) + _pkh.get_slotnums(45) + _pkh.get_slotnums(287) + _pkh.get_slotnums(288);
            return _pkj.add(_pkl.multiply(_pkm)), _pkj;
        };
    },
    93297: (_pkn, _pko, _pkp) => {
        'use strict';
        var _pkq = null;
        defineModule(_pko);
        Object.defineProperty(_pko, '__esModule', {
            'value': true
        }), _pko.getSlotDomesticSonarPersonalEffect = void 0;
        var _pkr = _pkp(74496);
        _pko.getSlotDomesticSonarPersonalEffect = function(_pks) {
            var _pkt = null,
                _pku = new _pkr.SlotItemEffectModel();
            return 56 == _pks.ctype && (_pku.tais += 2, _pku.kaih += 3), _pku;
        };
    },
    34941: (_pkv, _pkw, _pkx) => {
        'use strict';
        var _pky = null;
        defineModule(_pkw);
        Object.defineProperty(_pkw, '__esModule', {
            'value': true
        }), _pkw.getSlotMyoujoPlanePersonalEffect = void 0;
        var _pkz = _pkx(74496);
        _pkw.getSlotMyoujoPlanePersonalEffect = function(_pl0) {
            var _pl1 = null,
                _pl2 = new _pkz.SlotItemEffectModel(),
                _pl3 = 0,
                _pl4 = false,
                _pl5 = false,
                _pl6 = false,
                _pl7 = false;
            if ({
                    'ほうしょう': 1,
                    'ずいほう': 1
                }[_pl0.yomi] && (_pl4 = true, _pl3++), {
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
                }[_pl0.ship_id] && (_pl5 = true, _pl3++), {
                    883: 1,
                    899: 1
                }[_pl0.ship_id] && (_pl6 = true, _pl3++), {
                    599: 1,
                    610: 1,
                    555: 1,
                    560: 1,
                    888: 1
                }[_pl0.ship_id] && (_pl7 = true, _pl3++), 0 == _pl3) return _pl2;
            var _pl8 = _pl0.get_slotnums(550),
                _pl9 = _pl0.get_slotnums(551),
                _pla = _pl0.get_slotnums(552),
                _plb = _pl8 + _pl9 + _pla,
                _plc = _pl0.haveSlotLevelNumOver(550),
                _pld = _pl0.haveSlotLevelNumOver(551),
                _ple = _pl0.haveSlotLevelNumOver(552);
            return _pl4 && (_pl2.houm += 1 * _plb, _pl2.kaih += 1 * _plb, _pl8 >= 1 && (_plc[7] >= 1 && (_pl2.houg += 1 * _plc[7]), _plc[8] >= 1 && (_pl2.kaih += 1 * _plc[8]), _plc[9] >= 1 && (_pl2.houm += 1 * _plc[9]), _plc[10] >= 1 && (_pl2.houg += 1 * _plc[10]))), _pl5 && (_pl2.houg += 1 * _plb, _pl2.kaih += 1 * _plb, _pl9 >= 1 && (_pl2.houg += 1 * _pl9, _pl2.houm += 1 * _pl9, _pl2.kaih += 1 * _pl9, _pld[7] >= 1 && (_pl2.houm += 1 * _pld[7]), _pld[8] >= 1 && (_pl2.houg += 1 * _pld[8]), _pld[9] >= 1 && (_pl2.kaih += 1 * _pld[9]), _pld[10] >= 1 && (_pl2.houg += 1 * _pld[10]))), _pl6 && _pla >= 1 && (_pl2.houg += 2 * _pla, _pl2.houm += 3 * _pla, _pl2.kaih += 3 * _pla, _ple[3] >= 1 && (_pl2.kaih += 1 * _ple[3]), _ple[6] >= 1 && (_pl2.houg += 1 * _ple[6]), _ple[7] >= 1 && (_pl2.houm += 1 * _ple[7]), _ple[8] >= 1 && (_pl2.houg += 1 * _ple[8]), _ple[9] >= 1 && (_pl2.kaih += 1 * _ple[9]), _ple[10] >= 1 && (_pl2.houg += 1 * _ple[10])), _pl7 && _pla >= 1 && (_pl2.houg += 1 * _pla, _pl2.houm += 2 * _pla, _pl2.kaih += 1 * _pla, null != _ple && (_ple[7] >= 1 && (_pl2.kaih += 1 * _ple[7]), _ple[8] >= 1 && (_pl2.houm += 1 * _ple[8]), _ple[9] >= 1 && (_pl2.kaih += 1 * _ple[9]), _ple[10] >= 1 && (_pl2.houg += 1 * _ple[10]))), _pl2;
        };
    },
    45482: (_plf, _plg, _plh) => {
        'use strict';
        var _pli = null;
        defineModule(_plg);
        Object.defineProperty(_plg, '__esModule', {
            'value': true
        }), _plg.getSlotOtherSuiseiPersonalEffect = void 0;
        var _plj = _plh(74496);
        _plg.getSlotOtherSuiseiPersonalEffect = function(_plk) {
            var _pll = null,
                _plm = new _plj.SlotItemEffectModel(),
                _pln = new _plj.SlotItemEffectModel();
            if (553 == _plk.ship_id) _pln.houg = 2;
            else {
                if (554 != _plk.ship_id) return _plm;
                _pln.houg = 2;
            }
            var _plo = _plk.get_slotnums(24) + _plk.get_slotnums(57) + _plk.get_slotnums(111);
            return _plm = _pln.multiply(_plo);
        };
    },
    10950: (_plp, _plq, _plr) => {
        'use strict';
        var _pls = null;
        defineModule(_plq);
        Object.defineProperty(_plq, '__esModule', {
            'value': true
        }), _plq.getSlotSBD_Type_VS_VBPersonalEffect = void 0;
        var _plt = _plr(74496);
        _plq.getSlotSBD_Type_VS_VBPersonalEffect = function(_plu) {
            var _plv = null,
                _plw = new _plt.SlotItemEffectModel(),
                _plx = false,
                _ply = new _plt.SlotItemEffectModel();
            'レキシントン' == _plu.yomi ? (_ply.houg += 4, _ply.houm += 2, _ply.tyku += 1, _ply.kaih += 2, _ply.saku += 2, _plx = true) : 'サラトガ' == _plu.yomi ? (_ply.houg += 2, _ply.houm += 1, _ply.tyku += 1, _ply.kaih += 1, _ply.saku += 1, _plx = true) : 'ホーネット' == _plu.yomi || 'レンジャー' == _plu.yomi ? (_ply.houg += 1, _ply.houm += 1, _ply.tyku += 1, _ply.kaih += 1, _plx = true) : 'ガンビア・ベイ' != _plu.yomi && 'ラングレー' != _plu.yomi || (_ply.houg += 1, _ply.kaih += 1, _plx = true);
            var _plz = _plu.get_slotnums(543) + _plu.get_slotnums(544);
            _plx && _plw.add(_ply.multiply(_plz));
            var _pm0 = _plu.haveSlotLevelNumOver(543),
                _pm1 = _plu.haveSlotLevelNumOver(544);
            return 'アメリカ' == _plu.getCountryName() && (_pm0[7] >= 1 && (_plw.houm += 1 * _pm0[7]), _pm0[8] >= 1 && (_plw.saku += 1 * _pm0[8]), _pm0[9] >= 1 && (_plw.houg += 1 * _pm0[9]), _pm0[10] >= 1 && (_plw.houm += 1 * _pm0[10]), _pm1[7] >= 1 && (_plw.houg += 1 * _pm1[7]), _pm1[8] >= 1 && (_plw.houm += 1 * _pm1[8]), _pm1[9] >= 1 && (_plw.tyku += 1 * _pm1[9]), _pm1[10] >= 1 && (_plw.houg += 1 * _pm1[10])), _plw;
        };
    },
    45927: (_pm2, _pm3, _pm4) => {
        'use strict';
        var _pm5 = null;
        defineModule(_pm3);
        Object.defineProperty(_pm3, '__esModule', {
            'value': true
        }), _pm3.getSlotSmokePersonalEffect = void 0;
        var _pm6 = _pm4(74496);
        _pm3.getSlotSmokePersonalEffect = function(_pm7) {
            var _pm8 = null,
                _pm9 = new _pm6.SlotItemEffectModel(),
                _pma = false,
                _pmb = new _pm6.SlotItemEffectModel();
            if (959 == _pm7.ship_id && (_pmb.kaih += 4, _pma = true), 'ジョンストン' == _pm7.yomi || 'サミュエル・B・ロバーツ' == _pm7.yomi || 'せんだい' == _pm7.yomi || 'はるかぜ' == _pm7.yomi || 'かみかぜ' == _pm7.yomi || 'しきなみ' == _pm7.yomi || 'うらなみ' == _pm7.yomi || 'あおば' == _pm7.yomi ? (_pmb.kaih += 3, _pma = true) : 'いなづま' != _pm7.yomi && 'はぐろ' != _pm7.yomi && 'はつしも' != _pm7.yomi && 'かすみ' != _pm7.yomi && 'ふぶき' != _pm7.yomi && 'あたご' != _pm7.yomi && 'あまぎり' != _pm7.yomi && 'はまなみ' != _pm7.yomi || (_pmb.kaih += 2, _pma = true), 0 == _pma) return _pm9;
            var _pmc = _pm7.get_slotnums(500) + _pm7.get_slotnums(501);
            return _pm9.add(_pmb.multiply(_pmc)), _pm9;
        };
    },
    75873: (_pmd, _pme, _pmf) => {
        'use strict';
        var _pmg = null;
        defineModule(_pme);
        Object.defineProperty(_pme, '__esModule', {
            'value': true
        }), _pme.getSlotSocSeagullPersonalEffect = void 0;
        var _pmh = _pmf(74496);
        _pme.getSlotSocSeagullPersonalEffect = function(_pmi) {
            var _pmj = null,
                _pmk = new _pmh.SlotItemEffectModel(),
                _pml = {},
                _pmm = false,
                _pmn = false;
            'アメリカ' == _pmi.getCountryName() && (_pmm = true, 3 != _pmi.stype && 5 != _pmi.stype || (_pmn = true)), _pmi.get_slotnums(414);
            var _pmo = _pmi.get_slotnums(539);
            _pmm && (_pmk.saku += 1, _pml[1] = 1), _pmn && (_pmk.houg += 1, _pmk.saku += 1, 110 == _pmi.ctype && _pmo >= 1 && (_pmk.houm += 1), _pml[2] = 1);
            var _pmp = _pmi.haveSlotLevelNumOver(414),
                _pmq = _pmi.haveSlotLevelNumOver(539);
            return null != _pml[1] && (_pmp[5] >= 1 && (_pmk.kaih += 1), _pmq[3] >= 1 && (_pmk.kaih += 1), _pmq[5] >= 1 && (_pmk.saku += 1), _pmq[7] >= 1 && (_pmk.houm += 1)), null != _pml[2] && (_pmp[3] >= 1 && (_pmk.saku += 1), _pmp[8] >= 1 && (_pmk.kaih += 1), _pmp[10] >= 1 && (_pmk.houg += 1), _pmq[6] >= 1 && (_pmk.tyku += 1), _pmq[8] >= 1 && (_pmk.kaih += 1), _pmq[9] >= 1 && (_pmk.houg += 1), _pmq[10] >= 1 && (_pmk.houm += 1)), _pmk;
        };
    },
    32666: (_pmr, _pms, _pmt) => {
        'use strict';
        var _pmu = null;
        defineModule(_pms);
        Object.defineProperty(_pms, '__esModule', {
            'value': true
        }), _pms.getSlotTokuYonPersonalEffect = void 0;
        var _pmv = _pmt(74496);
        _pms.getSlotTokuYonPersonalEffect = function(_pmw) {
            var _pmx = null,
                _pmy = new _pmv.SlotItemEffectModel(),
                _pmz = false,
                _pn0 = new _pmv.SlotItemEffectModel(),
                _pn1 = 0,
                _pn2 = _pmw.get_slotnums(525),
                _pn3 = _pmw.get_slotnums(526),
                _pn4 = _pn2 + _pn3;
            if (13 != _pmw.stype && 14 != _pmw.stype || (_pn0.houg += 1, _pn0.raig += 2, _pn0.kaih -= 1, _pmz = true, _pn1 = 1, 'い36' != _pmw.yomi && 'い41' != _pmw.yomi || (_pmy.houg += 2, _pmy.raig += 1, _pmy.houm += 2), _pn3 >= 1 && (_pmy.houg += 1 * _pn3, _pmy.raig += 1 * _pn3, _pmy.houm += 1 * _pn3)), 0 == _pmz) return _pmy;
            if (_pmy.add(_pn0.multiply(_pn4)), 0 == _pn1) return _pmy;
            var _pn5 = _pmw.get_each_level_over_nums([525, 526]),
                _pn6 = _pn5.slot[525],
                _pn7 = _pn5.slot[526];
            if (1 == _pn1) {
                if (_pn6[1] >= 1 || _pn7[1] >= 1) {
                    var _pn8 = _pn6[1] + _pn7[1];
                    _pmy.raig += 1 * _pn8;
                }
                if (_pn7[2] >= 1) {
                    var _pn9 = _pn6[2] + _pn7[2];
                    _pmy.houg += 1 * _pn9;
                }
                if (_pn6[3] >= 1 || _pn7[3] >= 1) {
                    var _pna = _pn6[3] + _pn7[3];
                    _pmy.houm += 1 * _pna;
                }
                if (_pn7[4] >= 1) {
                    var _pnb = _pn6[4] + _pn7[4];
                    _pmy.raig += 1 * _pnb;
                }
                if (_pn6[6] >= 1 || _pn7[6] >= 1) {
                    var _pnc = _pn6[6] + _pn7[6];
                    _pmy.houm += 1 * _pnc;
                }
                if (_pn7[8] >= 1) {
                    var _pnd = _pn6[8] + _pn7[8];
                    _pmy.houg += 1 * _pnd;
                }
                if (_pn6[10] >= 1 || _pn7[10] >= 1) {
                    var _pne = _pn6[10] + _pn7[10];
                    _pmy.raig += 1 * _pne;
                }
            }
            return _pmy;
        };
    },
    29805: (_pnf, _png, _pnh) => {
        'use strict';
        var _pni = null;
        defineModule(_png);
        Object.defineProperty(_png, '__esModule', {
            'value': true
        }), _png.getSlotType10PersonalEffect = void 0;
        var _pnj = _pnh(74496);
        _png.getSlotType10PersonalEffect = function(_pnk) {
            var _pnl = null,
                _pnm = new _pnj.SlotItemEffectModel();
            return 662 == _pnk.ship_id || 663 == _pnk.ship_id || 668 == _pnk.ship_id ? (_pnm.houg += 2, _pnm.kaih += 1, _pnm.tais += 3) : 501 != _pnk.ship_id && 506 != _pnk.ship_id && 502 != _pnk.ship_id && 507 != _pnk.ship_id || (_pnm.houg += 2), _pnm;
        };
    },
    58913: (_pnn, _pno, _pnp) => {
        'use strict';
        var _pnq = null;
        defineModule(_pno);
        Object.defineProperty(_pno, '__esModule', {
            'value': true
        }), _pno.getSlotType11PersonalEffect = void 0;
        var _pnr = _pnp(74496);
        _pno.getSlotType11PersonalEffect = function(_pns) {
            var _pnt = null,
                _pnu = new _pnr.SlotItemEffectModel();
            return 662 == _pns.ship_id || 663 == _pns.ship_id || 668 == _pns.ship_id ? (_pnu.houg += 1, _pnu.kaih += 1, _pnu.tais += 1) : 501 != _pns.ship_id && 506 != _pns.ship_id && 502 != _pns.ship_id && 507 != _pns.ship_id || (_pnu.houg += 1, _pnu.kaih += 1), _pnu;
        };
    },
    55421: (_pnv, _pnw, _pnx) => {
        'use strict';
        var _pny = null;
        defineModule(_pnw);
        Object.defineProperty(_pnw, '__esModule', {
            'value': true
        }), _pnw.getSlotType25PersonalEffect = void 0;
        var _pnz = _pnx(74496);
        _pnw.getSlotType25PersonalEffect = function(_po0) {
            var _po1 = null,
                _po2 = new _pnz.SlotItemEffectModel();
            return 662 == _po0.ship_id ? (_po2.tais += 4, _po2.kaih += 1) : 663 != _po0.ship_id && 668 != _po0.ship_id || (_po2.tais += 3, _po2.kaih += 1), _po2;
        };
    },
    272: function(_po3, _po4, _po5) {
        'use strict';
        var _po6 = null;
        var _po7 = this && this.__importDefault || function(_po8) {
            var _po9 = null;
            return _po8 && _po8.__esModule ? _po8 : {
                'default': _po8
            };
        };
        defineModule(_po4);
        Object.defineProperty(_po4, '__esModule', {
            'value': true
        }), _po4.getSlotType9PersonalEffect = void 0;
        var _poa = _po5(74496),
            _pob = _po7(_po5(18622));
        _po4.getSlotType9PersonalEffect = function(_poc) {
            var _pod = null,
                _poe = new _poa.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_poc.stype]) return _poe;
            for (var _pof = 0, _pog = 0, _poh = _poc.have_slot_ids(); _pog < _poh.length; _pog++) {
                var _poi = _poh[_pog];
                if (9 == _pob.default.model.slot.getMst(_poi).equipType)
                    for (var _poj = 0, _pok = _poc.have_slots_dict[parseInt(_poi)]; _poj < _pok.length; _poj++) {
                        var _pol = _pok[_poj].level;
                        _pof < _pol && (_pof = _pol);
                    }
            }
            return _pof >= 2 && (_poe.saku += 1), _pof >= 4 && (_poe.houg += 1), _pof >= 6 && (_poe.saku += 1), _pof >= 10 && (_poe.houg += 1, _poe.saku += 1), _poe;
        };
    },
    49964: (_pom, _pon, _poo) => {
        'use strict';
        var _pop = null;
        defineModule(_pon);
        Object.defineProperty(_pon, '__esModule', {
            'value': true
        }), _pon.getSlotYellowWingsPersonalEffect = void 0;
        var _poq = _poo(74496);
        _pon.getSlotYellowWingsPersonalEffect = function(_por) {
            var _pos = null,
                _pot = new _poq.SlotItemEffectModel(),
                _pou = false,
                _pov = new _poq.SlotItemEffectModel();
            'レキシントン' == _por.yomi ? (_pov.houg += 3, _pov.houm += 2, _pov.tyku += 1, _pov.kaih += 2, _pov.saku += 1, _pou = true) : 'サラトガ' == _por.yomi ? (_pov.houg += 2, _pov.houm += 1, _pov.tyku += 1, _pov.kaih += 1, _pov.saku += 1, _pou = true) : 'ホーネット' != _por.yomi && 'レンジャー' != _por.yomi || (_pov.houg += 1, _pov.houm += 1, _pov.kaih += 1, _pou = true);
            var _pow = _por.get_slotnums(541) + _por.get_slotnums(542);
            _pou && _pot.add(_pov.multiply(_pow));
            var _pox = _por.haveSlotLevelNumOver(541),
                _poy = _por.haveSlotLevelNumOver(542);
            return 'アメリカ' == _por.getCountryName() && (_pox[7] >= 1 && (_pot.kaih += 1 * _pox[7]), _pox[10] >= 1 && (_pot.houg += 1 * _pox[10]), _poy[7] >= 1 && (_pot.houm += 1 * _poy[7]), _poy[10] >= 1 && (_pot.houg += 1 * _poy[10])), _pot;
        };
    },
    54518: (_poz, _pp0, _pp1) => {
        'use strict';
        var _pp2 = null;
        defineModule(_pp0);
        Object.defineProperty(_pp0, '__esModule', {
            'value': true
        }), _pp0.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _pp3 = _pp1(74496);
        _pp0.getSlot_16InchMkXRensouhou_PersonalEffect = function(_pp4) {
            var _pp5 = null,
                _pp6 = new _pp3.SlotItemEffectModel();
            if (93 == _pp4.ctype) {
                var _pp7 = _pp4.get_slotnums(330);
                _pp7 > 0 && (_pp6.houg = _pp6.houg + 1 * _pp7);
                var _pp8 = _pp4.get_slotnums(331);
                _pp8 > 0 && (_pp6.houg = _pp6.houg + 1 * _pp8, 1496 != _pp4.ship_id && 918 != _pp4.ship_id || (_pp6.houg = _pp6.houg + 1 * _pp8, _pp6.kaih = _pp6.kaih + 1 * _pp8));
                var _pp9 = _pp4.get_slotnums(332);
                return _pp9 > 0 && (_pp6.houg = _pp6.houg + 1 * _pp9, 1496 != _pp4.ship_id && 918 != _pp4.ship_id || (_pp6.houg = _pp6.houg + 1 * _pp9, _pp6.kaih = _pp6.kaih + 1 * _pp9, _pp6.tyku = _pp6.tyku + 1 * _pp9)), _pp6;
            }
            var _ppa = new _pp3.SlotItemEffectModel();
            if (19 == _pp4.ctype ? (_ppa.houg = 1, (541 == _pp4.ship_id || 573 == _pp4.ship_id) && (_ppa.houg += 1)) : 88 == _pp4.ctype && (_ppa.houg = 1, 576 == _pp4.ship_id && (_ppa.houg += 1)), !_ppa.exists()) return _pp6;
            var _ppb = _pp4.get_slotnums(330) + _pp4.get_slotnums(331) + _pp4.get_slotnums(332);
            return _pp6 = _ppa.multiply(_ppb);
        };
    },
    79353: (_ppc, _ppd, _ppe) => {
        'use strict';
        var _ppf = null;
        defineModule(_ppd);
        Object.defineProperty(_ppd, '__esModule', {
            'value': true
        }), _ppd.getZuiunSeriesEffect = void 0;
        var _ppg = _ppe(74496);
        _ppd.getZuiunSeriesEffect = function(_pph) {
            var _ppi = null,
                _ppj = new _ppg.SlotItemEffectModel(),
                _ppk = false,
                _ppl = new _ppg.SlotItemEffectModel();
            if (662 == _pph.ship_id ? (_ppj.houg += 2, _ppj.kaih += 1) : 663 == _pph.ship_id || 668 == _pph.ship_id || 501 == _pph.ship_id || 506 == _pph.ship_id ? (_ppj.houg += 2, _ppl.kaih += 1, _ppl.tyku += 1, _ppk = true) : 502 != _pph.ship_id && 507 != _pph.ship_id || (_ppj.houg += 1, _ppl.kaih += 1, _ppl.tyku += 1, _ppk = true), 0 == _ppk) return _ppj;
            var _ppm = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_ppn) {
                var _ppo = null;
                _ppm += _pph.get_slotnums(_ppn);
            }), _ppj.add(_ppl.multiply(_ppm)), _ppj;
        };
    },
    89051: function(_ppp, _ppq, _ppr) {
        'use strict';
        var _pps = null;
        var _ppt = this && this.__createBinding || (Object.create ? function(_ppu, _ppv, _ppw, _ppx) {
                var _ppy = null;
                void 0 === _ppx && (_ppx = _ppw);
                var _ppz = Object.getOwnPropertyDescriptor(_ppv, _ppw);
                _ppz && !('get' in _ppz ? !_ppv.__esModule : _ppz.writable || _ppz.configurable) || (_ppz = {
                    'enumerable': true,
                    'get': function() {
                        return _ppv[_ppw];
                    }
                }), Object.defineProperty(_ppu, _ppx, _ppz);
            } : function(_pq0, _pq1, _pq2, _pq3) {
                void 0 === _pq3 && (_pq3 = _pq2), _pq0[_pq3] = _pq1[_pq2];
            }),
            _pq4 = this && this.__exportStar || function(_pq5, _pq6) {
                var _pq7 = null;
                for (var _pq8 in _pq5) 'default' === _pq8 || Object.prototype.hasOwnProperty.call(_pq6, _pq8) || _ppt(_pq6, _pq5, _pq8);
            };
        defineModule(_ppq);
        Object.defineProperty(_ppq, '__esModule', {
            'value': true
        }), _pq4(_ppr(34165), _ppq), _pq4(_ppr(81018), _ppq), _pq4(_ppr(56716), _ppq), _pq4(_ppr(17713), _ppq), _pq4(_ppr(54518), _ppq), _pq4(_ppr(66985), _ppq), _pq4(_ppr(88102), _ppq), _pq4(_ppr(66904), _ppq), _pq4(_ppr(98137), _ppq), _pq4(_ppr(69954), _ppq), _pq4(_ppr(22218), _ppq), _pq4(_ppr(88271), _ppq), _pq4(_ppr(23035), _ppq), _pq4(_ppr(2578), _ppq), _pq4(_ppr(17143), _ppq), _pq4(_ppr(16164), _ppq), _pq4(_ppr(35023), _ppq), _pq4(_ppr(44680), _ppq), _pq4(_ppr(45749), _ppq), _pq4(_ppr(37334), _ppq), _pq4(_ppr(29180), _ppq), _pq4(_ppr(68685), _ppq), _pq4(_ppr(26078), _ppq), _pq4(_ppr(20829), _ppq), _pq4(_ppr(6880), _ppq), _pq4(_ppr(17213), _ppq), _pq4(_ppr(40176), _ppq), _pq4(_ppr(32889), _ppq), _pq4(_ppr(11285), _ppq), _pq4(_ppr(96200), _ppq), _pq4(_ppr(9115), _ppq), _pq4(_ppr(37173), _ppq), _pq4(_ppr(21713), _ppq), _pq4(_ppr(59823), _ppq), _pq4(_ppr(57440), _ppq), _pq4(_ppr(29240), _ppq), _pq4(_ppr(40885), _ppq), _pq4(_ppr(19614), _ppq), _pq4(_ppr(87220), _ppq), _pq4(_ppr(81367), _ppq), _pq4(_ppr(13052), _ppq), _pq4(_ppr(94968), _ppq), _pq4(_ppr(48658), _ppq), _pq4(_ppr(1906), _ppq), _pq4(_ppr(61887), _ppq), _pq4(_ppr(47970), _ppq), _pq4(_ppr(31797), _ppq), _pq4(_ppr(45738), _ppq), _pq4(_ppr(34718), _ppq), _pq4(_ppr(69245), _ppq), _pq4(_ppr(18478), _ppq), _pq4(_ppr(2899), _ppq), _pq4(_ppr(57120), _ppq), _pq4(_ppr(74985), _ppq), _pq4(_ppr(9234), _ppq), _pq4(_ppr(30802), _ppq), _pq4(_ppr(97002), _ppq), _pq4(_ppr(16748), _ppq), _pq4(_ppr(53618), _ppq), _pq4(_ppr(72573), _ppq), _pq4(_ppr(8955), _ppq), _pq4(_ppr(98947), _ppq), _pq4(_ppr(44726), _ppq), _pq4(_ppr(93065), _ppq), _pq4(_ppr(85767), _ppq), _pq4(_ppr(38314), _ppq), _pq4(_ppr(59747), _ppq), _pq4(_ppr(40649), _ppq), _pq4(_ppr(13533), _ppq), _pq4(_ppr(12138), _ppq), _pq4(_ppr(30042), _ppq), _pq4(_ppr(33623), _ppq), _pq4(_ppr(85630), _ppq), _pq4(_ppr(88736), _ppq), _pq4(_ppr(49341), _ppq), _pq4(_ppr(74306), _ppq), _pq4(_ppr(83898), _ppq), _pq4(_ppr(71873), _ppq), _pq4(_ppr(53122), _ppq), _pq4(_ppr(51063), _ppq), _pq4(_ppr(91491), _ppq), _pq4(_ppr(85495), _ppq), _pq4(_ppr(65365), _ppq), _pq4(_ppr(98164), _ppq), _pq4(_ppr(38114), _ppq), _pq4(_ppr(21003), _ppq), _pq4(_ppr(77010), _ppq), _pq4(_ppr(39126), _ppq), _pq4(_ppr(72176), _ppq), _pq4(_ppr(33846), _ppq), _pq4(_ppr(97157), _ppq), _pq4(_ppr(63406), _ppq), _pq4(_ppr(66373), _ppq), _pq4(_ppr(19707), _ppq), _pq4(_ppr(63978), _ppq), _pq4(_ppr(92382), _ppq), _pq4(_ppr(78415), _ppq), _pq4(_ppr(23090), _ppq), _pq4(_ppr(18776), _ppq), _pq4(_ppr(39656), _ppq), _pq4(_ppr(66039), _ppq), _pq4(_ppr(64679), _ppq), _pq4(_ppr(95953), _ppq), _pq4(_ppr(86384), _ppq), _pq4(_ppr(65345), _ppq), _pq4(_ppr(46514), _ppq), _pq4(_ppr(81976), _ppq), _pq4(_ppr(89331), _ppq), _pq4(_ppr(73973), _ppq), _pq4(_ppr(21178), _ppq), _pq4(_ppr(5079), _ppq), _pq4(_ppr(95014), _ppq), _pq4(_ppr(53099), _ppq), _pq4(_ppr(76201), _ppq), _pq4(_ppr(24931), _ppq), _pq4(_ppr(60978), _ppq), _pq4(_ppr(74312), _ppq), _pq4(_ppr(54350), _ppq), _pq4(_ppr(26262), _ppq), _pq4(_ppr(45530), _ppq), _pq4(_ppr(44053), _ppq), _pq4(_ppr(65441), _ppq), _pq4(_ppr(33258), _ppq), _pq4(_ppr(92168), _ppq), _pq4(_ppr(85975), _ppq), _pq4(_ppr(98467), _ppq), _pq4(_ppr(88348), _ppq), _pq4(_ppr(21097), _ppq), _pq4(_ppr(37273), _ppq), _pq4(_ppr(72694), _ppq), _pq4(_ppr(62067), _ppq), _pq4(_ppr(87817), _ppq), _pq4(_ppr(93526), _ppq), _pq4(_ppr(33084), _ppq), _pq4(_ppr(97831), _ppq), _pq4(_ppr(45482), _ppq), _pq4(_ppr(272), _ppq), _pq4(_ppr(69377), _ppq), _pq4(_ppr(31127), _ppq), _pq4(_ppr(79353), _ppq), _pq4(_ppr(17274), _ppq), _pq4(_ppr(91302), _ppq), _pq4(_ppr(82229), _ppq), _pq4(_ppr(10325), _ppq), _pq4(_ppr(351), _ppq), _pq4(_ppr(4050), _ppq), _pq4(_ppr(29805), _ppq), _pq4(_ppr(58913), _ppq), _pq4(_ppr(55421), _ppq), _pq4(_ppr(87845), _ppq), _pq4(_ppr(17562), _ppq), _pq4(_ppr(78466), _ppq), _pq4(_ppr(40061), _ppq), _pq4(_ppr(9195), _ppq), _pq4(_ppr(93297), _ppq), _pq4(_ppr(15133), _ppq), _pq4(_ppr(55747), _ppq), _pq4(_ppr(33155), _ppq), _pq4(_ppr(79086), _ppq), _pq4(_ppr(2306), _ppq), _pq4(_ppr(14386), _ppq), _pq4(_ppr(80225), _ppq), _pq4(_ppr(17732), _ppq), _pq4(_ppr(47169), _ppq), _pq4(_ppr(77670), _ppq), _pq4(_ppr(79988), _ppq), _pq4(_ppr(92253), _ppq), _pq4(_ppr(74428), _ppq), _pq4(_ppr(75873), _ppq), _pq4(_ppr(2631), _ppq), _pq4(_ppr(27177), _ppq), _pq4(_ppr(94781), _ppq), _pq4(_ppr(53908), _ppq), _pq4(_ppr(79813), _ppq), _pq4(_ppr(16088), _ppq), _pq4(_ppr(93733), _ppq), _pq4(_ppr(69939), _ppq), _pq4(_ppr(33734), _ppq), _pq4(_ppr(34432), _ppq), _pq4(_ppr(97423), _ppq), _pq4(_ppr(23551), _ppq), _pq4(_ppr(99791), _ppq), _pq4(_ppr(21403), _ppq), _pq4(_ppr(6173), _ppq), _pq4(_ppr(23934), _ppq), _pq4(_ppr(53709), _ppq), _pq4(_ppr(88838), _ppq), _pq4(_ppr(99790), _ppq), _pq4(_ppr(18387), _ppq), _pq4(_ppr(70941), _ppq), _pq4(_ppr(35025), _ppq), _pq4(_ppr(2603), _ppq), _pq4(_ppr(78707), _ppq), _pq4(_ppr(89058), _ppq), _pq4(_ppr(84372), _ppq), _pq4(_ppr(96804), _ppq), _pq4(_ppr(33896), _ppq), _pq4(_ppr(11031), _ppq), _pq4(_ppr(71383), _ppq), _pq4(_ppr(55888), _ppq), _pq4(_ppr(2258), _ppq), _pq4(_ppr(38003), _ppq), _pq4(_ppr(92174), _ppq), _pq4(_ppr(43768), _ppq), _pq4(_ppr(73254), _ppq), _pq4(_ppr(55734), _ppq), _pq4(_ppr(81254), _ppq), _pq4(_ppr(65455), _ppq), _pq4(_ppr(70362), _ppq), _pq4(_ppr(61977), _ppq), _pq4(_ppr(43607), _ppq), _pq4(_ppr(68086), _ppq), _pq4(_ppr(78173), _ppq), _pq4(_ppr(22581), _ppq), _pq4(_ppr(20418), _ppq), _pq4(_ppr(93373), _ppq), _pq4(_ppr(13053), _ppq), _pq4(_ppr(47874), _ppq), _pq4(_ppr(42788), _ppq), _pq4(_ppr(57664), _ppq), _pq4(_ppr(44990), _ppq), _pq4(_ppr(17712), _ppq), _pq4(_ppr(83957), _ppq), _pq4(_ppr(78539), _ppq), _pq4(_ppr(96282), _ppq), _pq4(_ppr(49679), _ppq), _pq4(_ppr(45927), _ppq), _pq4(_ppr(90312), _ppq), _pq4(_ppr(86856), _ppq), _pq4(_ppr(78123), _ppq), _pq4(_ppr(25765), _ppq), _pq4(_ppr(29493), _ppq), _pq4(_ppr(28221), _ppq), _pq4(_ppr(14830), _ppq), _pq4(_ppr(54047), _ppq), _pq4(_ppr(76054), _ppq), _pq4(_ppr(90725), _ppq), _pq4(_ppr(93053), _ppq), _pq4(_ppr(88792), _ppq), _pq4(_ppr(33242), _ppq), _pq4(_ppr(59415), _ppq), _pq4(_ppr(3296), _ppq), _pq4(_ppr(32666), _ppq), _pq4(_ppr(36731), _ppq), _pq4(_ppr(30450), _ppq), _pq4(_ppr(85127), _ppq), _pq4(_ppr(87204), _ppq), _pq4(_ppr(2380), _ppq), _pq4(_ppr(96580), _ppq), _pq4(_ppr(15653), _ppq), _pq4(_ppr(41410), _ppq), _pq4(_ppr(25851), _ppq), _pq4(_ppr(6482), _ppq), _pq4(_ppr(70332), _ppq), _pq4(_ppr(91275), _ppq), _pq4(_ppr(72743), _ppq), _pq4(_ppr(49964), _ppq), _pq4(_ppr(10950), _ppq), _pq4(_ppr(57041), _ppq), _pq4(_ppr(74608), _ppq), _pq4(_ppr(34941), _ppq);
    },
    82692: function(_pq9, _pqa, _pqb) {
        'use strict';
        var _pqc = null;
        var _pqd = this && this.__createBinding || (Object.create ? function(_pqe, _pqf, _pqg, _pqh) {
                var _pqi = null;
                void 0 === _pqh && (_pqh = _pqg);
                var _pqj = Object.getOwnPropertyDescriptor(_pqf, _pqg);
                _pqj && !('get' in _pqj ? !_pqf.__esModule : _pqj.writable || _pqj.configurable) || (_pqj = {
                    'enumerable': true,
                    'get': function() {
                        return _pqf[_pqg];
                    }
                }), Object.defineProperty(_pqe, _pqh, _pqj);
            } : function(_pqk, _pql, _pqm, _pqn) {
                void 0 === _pqn && (_pqn = _pqm), _pqk[_pqn] = _pql[_pqm];
            }),
            _pqo = this && this.__setModuleDefault || (Object.create ? function(_pqp, _pqq) {
                var _pqr = null;
                Object.defineProperty(_pqp, 'default', {
                    'enumerable': true,
                    'value': _pqq
                });
            } : function(_pqs, _pqt) {
                var _pqu = null;
                _pqs.default = _pqt;
            }),
            _pqv = this && this.__importStar || function(_pqw) {
                var _pqx = null;
                if (_pqw && _pqw.__esModule) return _pqw;
                var _pqy = {};
                if (null != _pqw) {
                    for (var _pqz in _pqw) 'default' !== _pqz && Object.prototype.hasOwnProperty.call(_pqw, _pqz) && _pqd(_pqy, _pqw, _pqz);
                }
                return _pqo(_pqy, _pqw), _pqy;
            };
        defineModule(_pqa);
        Object.defineProperty(_pqa, '__esModule', {
            'value': true
        }), _pqa.SlotItemEffectUtil = void 0;
        var _pr0, _pr1 = _pqb(73785),
            _pr2 = _pqv(_pqb(89051)),
            _pr3 = _pqb(74496);
        ! function(_pr4) {
            var _pr5 = null;
            _pr4.getSlotitemEffect = function(_pr6, _pr7) {
                var _pr8 = null;
                if (null == _pr6 || null == _pr7) return null;
                for (var _pr9 = new _pr1.SlotItemEffectParamModel(_pr6, _pr7), _pra = [{
                        'isExecute': Boolean(_pr9.get_type3_nums(9)),
                        'execFunc': _pr2.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_type3_nums(10)),
                        'execFunc': _pr2.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_type3_nums(11)),
                        'execFunc': _pr2.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_type3_nums(12)) || Boolean(_pr9.get_type3_nums(13)),
                        'execFunc': _pr2.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_type3_nums(25)),
                        'execFunc': _pr2.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_type3_nums(29)),
                        'execFunc': _pr2.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_type3_nums(42)),
                        'execFunc': _pr2.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(3)) || Boolean(_pr9.get_slotnums(122)) || Boolean(_pr9.get_slotnums(533)),
                        'execFunc': _pr2.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(5)),
                        'execFunc': _pr2.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(12)),
                        'execFunc': _pr2.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(15)),
                        'execFunc': _pr2.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(18)) || Boolean(_pr9.get_slotnums(52)),
                        'execFunc': _pr2.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(19)),
                        'execFunc': _pr2.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(24)) || Boolean(_pr9.get_slotnums(57)) || Boolean(_pr9.get_slotnums(111)),
                        'execFunc': _pr2.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(26)) || Boolean(_pr9.get_slotnums(62)) || Boolean(_pr9.get_slotnums(79)) || Boolean(_pr9.get_slotnums(80)) || Boolean(_pr9.get_slotnums(81)) || Boolean(_pr9.get_slotnums(207)) || Boolean(_pr9.get_slotnums(208)),
                        'execFunc': _pr2.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(35)),
                        'execFunc': _pr2.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(39)) || Boolean(_pr9.get_slotnums(40)) || Boolean(_pr9.get_slotnums(49)) || Boolean(_pr9.get_slotnums(131)),
                        'execFunc': _pr2.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(30)) || Boolean(_pr9.get_slotnums(410)),
                        'execFunc': _pr2.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(44)) || Boolean(_pr9.get_slotnums(45)) || Boolean(_pr9.get_slotnums(287)) || Boolean(_pr9.get_slotnums(288)),
                        'execFunc': _pr2.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(46)) || Boolean(_pr9.get_slotnums(47)) || Boolean(_pr9.get_slotnums(149)) || Boolean(_pr9.get_slotnums(132)) || Boolean(_pr9.get_slotnums(438)),
                        'execFunc': _pr2.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(47)) || Boolean(_pr9.get_slotnums(438)),
                        'execFunc': _pr2.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(50)),
                        'execFunc': _pr2.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(58)),
                        'execFunc': _pr2.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(59)),
                        'execFunc': _pr2.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(60)) || Boolean(_pr9.get_slotnums(154)) || Boolean(_pr9.get_slotnums(219)),
                        'execFunc': _pr2.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(61)),
                        'execFunc': _pr2.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(61)),
                        'execFunc': _pr2.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(63)),
                        'execFunc': _pr2.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(66)) || Boolean(_pr9.get_slotnums(220)),
                        'execFunc': _pr2.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(67)),
                        'execFunc': _pr2.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(69)),
                        'execFunc': _pr2.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(70)),
                        'execFunc': _pr2.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(76)) || Boolean(_pr9.get_slotnums(114)),
                        'execFunc': _pr2.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(78)),
                        'execFunc': _pr2.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(79)) || Boolean(_pr9.get_slotnums(81)),
                        'execFunc': _pr2.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(82)),
                        'execFunc': _pr2.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(84)),
                        'execFunc': _pr2.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(85)),
                        'execFunc': _pr2.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(87)),
                        'execFunc': _pr2.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(90)),
                        'execFunc': _pr2.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(93)),
                        'execFunc': _pr2.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(94)),
                        'execFunc': _pr2.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(99)),
                        'execFunc': _pr2.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(100)),
                        'execFunc': _pr2.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(104)),
                        'execFunc': _pr2.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(106)) || Boolean(_pr9.get_slotnums(450)),
                        'execFunc': _pr2.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(115)),
                        'execFunc': _pr2.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(118)) || Boolean(_pr9.get_slotnums(521)),
                        'execFunc': _pr2.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(119)),
                        'execFunc': _pr2.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(121)),
                        'execFunc': _pr2.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(122)),
                        'execFunc': _pr2.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(123)),
                        'execFunc': _pr2.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(124)),
                        'execFunc': _pr2.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(128)) || Boolean(_pr9.get_slotnums(281)),
                        'execFunc': _pr2.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(129)),
                        'execFunc': _pr2.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(130)),
                        'execFunc': _pr2.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(132)),
                        'execFunc': _pr2.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(136)),
                        'execFunc': _pr2.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(139)),
                        'execFunc': _pr2.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(143)),
                        'execFunc': _pr2.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(144)),
                        'execFunc': _pr2.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(147)) || Boolean(_pr9.get_slotnums(393)) || Boolean(_pr9.get_slotnums(394)),
                        'execFunc': _pr2.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(149)),
                        'execFunc': _pr2.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(165)) || Boolean(_pr9.get_slotnums(216)),
                        'execFunc': _pr2.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(171)),
                        'execFunc': _pr2.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(174)),
                        'execFunc': _pr2.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(179)),
                        'execFunc': _pr2.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(184)),
                        'execFunc': _pr2.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(188)),
                        'execFunc': _pr2.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(189)),
                        'execFunc': _pr2.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(194)),
                        'execFunc': _pr2.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(195)),
                        'execFunc': _pr2.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(204)),
                        'execFunc': _pr2.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(217)),
                        'execFunc': _pr2.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(220)),
                        'execFunc': _pr2.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(227)),
                        'execFunc': _pr2.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(228)),
                        'execFunc': _pr2.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(229)),
                        'execFunc': _pr2.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(234)),
                        'execFunc': _pr2.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(235)),
                        'execFunc': _pr2.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(237)) || Boolean(_pr9.get_slotnums(322)) || Boolean(_pr9.get_slotnums(323)) || Boolean(_pr9.get_slotnums(490)),
                        'execFunc': _pr2.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(237)),
                        'execFunc': _pr2.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(238)) || Boolean(_pr9.get_slotnums(239)),
                        'execFunc': _pr2.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(242)),
                        'execFunc': _pr2.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(243)),
                        'execFunc': _pr2.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(244)),
                        'execFunc': _pr2.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(245)) || Boolean(_pr9.get_slotnums(246)) || Boolean(_pr9.get_slotnums(468)),
                        'execFunc': _pr2.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(247)),
                        'execFunc': _pr2.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(252)),
                        'execFunc': _pr2.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(266)),
                        'execFunc': _pr2.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(266)),
                        'execFunc': _pr2.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(267)) || Boolean(_pr9.get_slotnums(366)),
                        'execFunc': _pr2.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(267)) || Boolean(_pr9.get_slotnums(366)),
                        'execFunc': _pr2.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(268)),
                        'execFunc': _pr2.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(271)),
                        'execFunc': _pr2.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(275)),
                        'execFunc': _pr2.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(277)),
                        'execFunc': _pr2.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(278)),
                        'execFunc': _pr2.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(279)),
                        'execFunc': _pr2.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(282)),
                        'execFunc': _pr2.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(283)),
                        'execFunc': _pr2.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(285)),
                        'execFunc': _pr2.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(286)),
                        'execFunc': _pr2.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(286)),
                        'execFunc': _pr2.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(286)),
                        'execFunc': _pr2.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(287)),
                        'execFunc': _pr2.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(288)),
                        'execFunc': _pr2.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(289)),
                        'execFunc': _pr2.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(290)),
                        'execFunc': _pr2.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(291)),
                        'execFunc': _pr2.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(292)),
                        'execFunc': _pr2.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(293)),
                        'execFunc': _pr2.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(294)),
                        'execFunc': _pr2.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(295)),
                        'execFunc': _pr2.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(296)),
                        'execFunc': _pr2.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(297)),
                        'execFunc': _pr2.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(298)) || Boolean(_pr9.get_slotnums(299)) || Boolean(_pr9.get_slotnums(300)),
                        'execFunc': _pr2.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(301)),
                        'execFunc': _pr2.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(302)),
                        'execFunc': _pr2.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(303)),
                        'execFunc': _pr2.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(304)),
                        'execFunc': _pr2.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(305)) || Boolean(_pr9.get_slotnums(306)),
                        'execFunc': _pr2.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(307)),
                        'execFunc': _pr2.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(308)),
                        'execFunc': _pr2.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(310)) || Boolean(_pr9.get_slotnums(518)),
                        'execFunc': _pr2.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(313)),
                        'execFunc': _pr2.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(314)),
                        'execFunc': _pr2.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(315)),
                        'execFunc': _pr2.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(316)),
                        'execFunc': _pr2.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(317)),
                        'execFunc': _pr2.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(318)),
                        'execFunc': _pr2.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(319)),
                        'execFunc': _pr2.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(320)),
                        'execFunc': _pr2.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(322)),
                        'execFunc': _pr2.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(323)),
                        'execFunc': _pr2.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(324)) || Boolean(_pr9.get_slotnums(325)),
                        'execFunc': _pr2.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(326)),
                        'execFunc': _pr2.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(327)),
                        'execFunc': _pr2.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(328)),
                        'execFunc': _pr2.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(329)),
                        'execFunc': _pr2.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(330)) || Boolean(_pr9.get_slotnums(331)) || Boolean(_pr9.get_slotnums(332)),
                        'execFunc': _pr2.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(335)),
                        'execFunc': _pr2.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(336)),
                        'execFunc': _pr2.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(337)),
                        'execFunc': _pr2.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(338)),
                        'execFunc': _pr2.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(339)),
                        'execFunc': _pr2.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(340)),
                        'execFunc': _pr2.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(341)),
                        'execFunc': _pr2.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(342)),
                        'execFunc': _pr2.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(343)),
                        'execFunc': _pr2.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(344)),
                        'execFunc': _pr2.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(345)),
                        'execFunc': _pr2.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(346)),
                        'execFunc': _pr2.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(347)),
                        'execFunc': _pr2.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(356)) || Boolean(_pr9.get_slotnums(357)),
                        'execFunc': _pr2.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(358)),
                        'execFunc': _pr2.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(359)),
                        'execFunc': _pr2.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(360)) || Boolean(_pr9.get_slotnums(361)),
                        'execFunc': _pr2.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(362)) || Boolean(_pr9.get_slotnums(363)),
                        'execFunc': _pr2.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(364)),
                        'execFunc': _pr2.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(365)),
                        'execFunc': _pr2.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(367)),
                        'execFunc': _pr2.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(368)),
                        'execFunc': _pr2.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(369)),
                        'execFunc': _pr2.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(370)),
                        'execFunc': _pr2.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(371)),
                        'execFunc': _pr2.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(372)),
                        'execFunc': _pr2.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(373)),
                        'execFunc': _pr2.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(374)),
                        'execFunc': _pr2.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(375)),
                        'execFunc': _pr2.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(376)),
                        'execFunc': _pr2.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(377)),
                        'execFunc': _pr2.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(378)),
                        'execFunc': _pr2.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(379)),
                        'execFunc': _pr2.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(380)),
                        'execFunc': _pr2.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(381)),
                        'execFunc': _pr2.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(382)) || Boolean(_pr9.get_slotnums(509)),
                        'execFunc': _pr2.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(383)),
                        'execFunc': _pr2.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(384)),
                        'execFunc': _pr2.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(385)),
                        'execFunc': _pr2.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(386)),
                        'execFunc': _pr2.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(387)),
                        'execFunc': _pr2.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(389)),
                        'execFunc': _pr2.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(390)),
                        'execFunc': _pr2.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(391)),
                        'execFunc': _pr2.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(392)),
                        'execFunc': _pr2.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(397)),
                        'execFunc': _pr2.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(398)),
                        'execFunc': _pr2.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(399)),
                        'execFunc': _pr2.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(400)),
                        'execFunc': _pr2.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(407)),
                        'execFunc': _pr2.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(408)),
                        'execFunc': _pr2.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(409)),
                        'execFunc': _pr2.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(411)),
                        'execFunc': _pr2.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(412)),
                        'execFunc': _pr2.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(413)),
                        'execFunc': _pr2.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(414)) || Boolean(_pr9.get_slotnums(539)),
                        'execFunc': _pr2.getSlotSocSeagullPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(415)),
                        'execFunc': _pr2.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(419)),
                        'execFunc': _pr2.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(420)),
                        'execFunc': _pr2.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(421)),
                        'execFunc': _pr2.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(422)),
                        'execFunc': _pr2.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(423)),
                        'execFunc': _pr2.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(424)),
                        'execFunc': _pr2.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(425)),
                        'execFunc': _pr2.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(426)) || Boolean(_pr9.get_slotnums(427)) || Boolean(_pr9.get_slotnums(428)) || Boolean(_pr9.get_slotnums(429)),
                        'execFunc': _pr2.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(430)),
                        'execFunc': _pr2.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(434)) || Boolean(_pr9.get_slotnums(435)),
                        'execFunc': _pr2.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(437)),
                        'execFunc': _pr2.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(438)),
                        'execFunc': _pr2.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(439)),
                        'execFunc': _pr2.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(440)) || Boolean(_pr9.get_slotnums(441)),
                        'execFunc': _pr2.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(442)) || Boolean(_pr9.get_slotnums(443)),
                        'execFunc': _pr2.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(447)),
                        'execFunc': _pr2.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(450)),
                        'execFunc': _pr2.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(451)),
                        'execFunc': _pr2.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(455)),
                        'execFunc': _pr2.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(456)),
                        'execFunc': _pr2.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(457)) || Boolean(_pr9.get_slotnums(461)),
                        'execFunc': _pr2.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(458)),
                        'execFunc': _pr2.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(463)),
                        'execFunc': _pr2.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(464)),
                        'execFunc': _pr2.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(465)),
                        'execFunc': _pr2.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(466)),
                        'execFunc': _pr2.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(467)),
                        'execFunc': _pr2.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(470)) || Boolean(_pr9.get_slotnums(529)),
                        'execFunc': _pr2.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(471)),
                        'execFunc': _pr2.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(472)),
                        'execFunc': _pr2.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(473)),
                        'execFunc': _pr2.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(474)),
                        'execFunc': _pr2.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(478)),
                        'execFunc': _pr2.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(483)),
                        'execFunc': _pr2.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(485)),
                        'execFunc': _pr2.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(486)),
                        'execFunc': _pr2.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(487)),
                        'execFunc': _pr2.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(488)),
                        'execFunc': _pr2.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(489)) || Boolean(_pr9.get_slotnums(491)),
                        'execFunc': _pr2.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(500)) || Boolean(_pr9.get_slotnums(501)),
                        'execFunc': _pr2.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(502)),
                        'execFunc': _pr2.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(503)),
                        'execFunc': _pr2.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(505)),
                        'execFunc': _pr2.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(506)),
                        'execFunc': _pr2.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(507)) || Boolean(_pr9.get_slotnums(508)),
                        'execFunc': _pr2.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(510)),
                        'execFunc': _pr2.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(511)) || Boolean(_pr9.get_slotnums(512)),
                        'execFunc': _pr2.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(517)),
                        'execFunc': _pr2.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(518)),
                        'execFunc': _pr2.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(519)),
                        'execFunc': _pr2.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(520)),
                        'execFunc': _pr2.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(521)),
                        'execFunc': _pr2.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(522)) || Boolean(_pr9.get_slotnums(523)),
                        'execFunc': _pr2.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(524)),
                        'execFunc': _pr2.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(525)) || Boolean(_pr9.get_slotnums(526)),
                        'execFunc': _pr2.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(527)),
                        'execFunc': _pr2.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(528)),
                        'execFunc': _pr2.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(530)),
                        'execFunc': _pr2.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(531)),
                        'execFunc': _pr2.getSlot531PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(534)) || Boolean(_pr9.get_slotnums(535)),
                        'execFunc': _pr2.getSlot13_8cmRensouhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(536)) || Boolean(_pr9.get_slotnums(537)),
                        'execFunc': _pr2.getSlot15_2cmSanrensouSyuhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(538)),
                        'execFunc': _pr2.getSlot538PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(540)),
                        'execFunc': _pr2.getSlot540PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(541)) || Boolean(_pr9.get_slotnums(542)),
                        'execFunc': _pr2.getSlotYellowWingsPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(543)) || Boolean(_pr9.get_slotnums(544)),
                        'execFunc': _pr2.getSlotSBD_Type_VS_VBPersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(545)),
                        'execFunc': _pr2.getSlot545PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(549)),
                        'execFunc': _pr2.getSlot549PersonalEffect
                    }, {
                        'isExecute': Boolean(_pr9.get_slotnums(550)) || Boolean(_pr9.get_slotnums(551)) || Boolean(_pr9.get_slotnums(552)),
                        'execFunc': _pr2.getSlotMyoujoPlanePersonalEffect
                    }], _prb = new _pr3.SlotItemEffectModel(), _prc = 0, _prd = _pra; _prc < _prd.length; _prc++) {
                    var _pre = _prd[_prc];
                    if (_pre.isExecute) {
                        var _prf = _pre.execFunc(_pr9);
                        0, _prb.add(_prf);
                    }
                }
                return _prb;
            };
        }(_pr0 || (_pqa.SlotItemEffectUtil = _pr0 = {}));
    },
}
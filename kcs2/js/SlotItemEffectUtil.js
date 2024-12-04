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
    69377: function(_mjy, _mjz, _mk0) {
        'use strict';
        var _mk1 = null;
        var _mk2 = this && this.__importDefault || function(_mk3) {
            var _mk4 = null;
            return _mk3 && _mk3.__esModule ? _mk3 : {
                'default': _mk3
            };
        };
        defineModule(_mjz);
        Object.defineProperty(_mjz, '__esModule', {
            'value': true
        }), _mjz.get25mmMachinegunEffect = void 0;
        var _mk5 = _mk0(74496),
            _mk6 = _mk2(_mk0(18622));
        _mjz.get25mmMachinegunEffect = function(_mk7) {
            var _mk8 = null,
                _mk9 = new _mk5.SlotItemEffectModel(),
                _mka = false,
                _mkb = new _mk5.SlotItemEffectModel(),
                _mkc = 0,
                _mkd = new _mk5.SlotItemEffectModel(),
                _mke = {},
                _mkf = 0;
            if (662 == _mk7.ship_id || 663 == _mk7.ship_id ? (_mkb.tyku += 2, _mkb.kaih += 1, _mka = true) : 668 == _mk7.ship_id ? (_mkb.tyku += 3, _mkb.kaih += 2, _mka = true) : 979 == _mk7.ship_id && (_mkb.tyku += 2, _mkb.kaih += 3, _mka = true, _mkd.kaih += 2, _mke[49] = _mkd, _mkf = 1), 56 == _mk7.ctype && (_mkb.houg += 1, _mkb.tyku += 2, _mkb.kaih += 2, _mka = true, _mkc = 1), Object.keys(_mke).forEach(function(_mkg) {
                    var _mkh = null,
                        _mki = _mke[parseInt(_mkg)],
                        _mkj = _mk7.get_slotnums(parseInt(_mkg));
                    _mk9.add(_mki.multiply(_mkj));
                }), _mkf > 0) {
                var _mkk = _mk7.get_each_level_over_nums([49, 39, 40, 131]),
                    _mkl = _mkk.slot[49],
                    _mkm = _mkk.slot[39],
                    _mkn = _mkk.slot[40],
                    _mko = _mkk.slot[131];
                1 == _mkf && (_mkl[6] >= 1 && (_mk9.houm += 1 * _mkl[6]), _mkl[7] >= 1 && (_mk9.tyku += 1 * _mkl[7]), _mkl[8] >= 1 && (_mk9.kaih += 1 * _mkl[8]), _mkl[9] >= 1 && (_mk9.tyku += 1 * _mkl[9]), _mkl[10] >= 1 && (_mk9.houg += 1 * _mkl[10]), _mkm[8] >= 1 && (_mk9.kaih += 1 * _mkm[8]), _mkm[9] >= 1 && (_mk9.tyku += 2 * _mkm[9]), _mkm[10] >= 1 && (_mk9.houg += 1 * _mkm[10]), _mkn[9] >= 1 && (_mk9.tyku += 2 * _mkn[9]), _mkn[10] >= 1 && (_mk9.houg += 1 * _mkn[10]), _mko[10] >= 1 && (_mk9.tyku += 2 * _mko[10]));
            }
            if (0 == _mka) return _mk9;
            var _mkp = _mk7.get_slotnums(39) + _mk7.get_slotnums(40) + _mk7.get_slotnums(49) + _mk7.get_slotnums(131);
            if (_mk9.add(_mkb.multiply(_mkp)), 0 == _mkc) return _mk9;
            for (var _mkq = 0, _mkr = 0, _mks = _mk7.have_slot_ids(); _mkr < _mks.length; _mkr++) {
                var _mkt = _mks[_mkr],
                    _mku = _mk6.default.model.slot.getMst(_mkt),
                    _mkv = _mku.equipType;
                12 != _mkv && 13 != _mkv || (_mku.sakuteki >= 5 && _mk7.get_slotnums(parseInt(_mkt)), _mku.taiku >= 2 && (_mkq += _mk7.get_slotnums(parseInt(_mkt))));
            }
            return _mkq >= 1 && 1 == _mkc && (_mk9.tyku += 2, _mk9.kaih += 2), _mk9;
        };
    },
    77670: function(_mkw, _mkx, _mky) {
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
        }), _mkx.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _ml3 = _mky(74496),
            _ml4 = _ml0(_mky(18622));
        _mkx.get8cmAntiAircraftGunPersonalEffect = function(_ml5) {
            var _ml6 = null,
                _ml7 = new _ml3.SlotItemEffectModel(),
                _ml8 = false,
                _ml9 = new _ml3.SlotItemEffectModel(),
                _mla = 0;
            if (501 != _ml5.ship_id && 506 != _ml5.ship_id && 502 != _ml5.ship_id && 507 != _ml5.ship_id || (_ml9.tyku += 2, _ml9.kaih += 1, _ml8 = true, _mla = 1), 501 != _ml5.ship_id && 506 != _ml5.ship_id || (_ml9.houg += 1, _ml9.tyku += 2, _ml9.kaih += 2, _ml8 = true, _mla = 1), 0 == _ml8) return _ml7;
            var _mlb = _ml5.get_slotnums(66) + _ml5.get_slotnums(220);
            _ml7.add(_ml9.multiply(_mlb));
            for (var _mlc = 0, _mld = 0, _mle = _ml5.have_slot_ids(); _mld < _mle.length; _mld++) {
                var _mlf = _mle[_mld],
                    _mlg = _ml4.default.model.slot.getMst(_mlf),
                    _mlh = _mlg.equipType;
                12 != _mlh && 13 != _mlh || (_mlg.sakuteki >= 5 && _ml5.get_slotnums(parseInt(_mlf)), _mlg.taiku >= 2 && (_mlc += _ml5.get_slotnums(parseInt(_mlf))));
            }
            return 0 == _mla || _mlc >= 1 && (_ml7.tyku += 1, _ml7.kaih += 2), _ml7;
        };
    },
    34165: (_mli, _mlj, _mlk) => {
        'use strict';
        var _mll = null;
        defineModule(_mlj);
        Object.defineProperty(_mlj, '__esModule', {
            'value': true
        }), _mlj.getCamouflageSlotPersonalEffect = void 0;
        var _mlm = _mlk(74496);
        _mlj.getCamouflageSlotPersonalEffect = function(_mln) {
            var _mlo = null,
                _mlp = new _mlm.SlotItemEffectModel();
            return 'きそ' != _mln.yomi && 'たま' != _mln.yomi || (_mlp.kaih = 7, _mlp.souk = 2), _mlp;
        };
    },
    31127: (_mlq, _mlr, _mls) => {
        'use strict';
        var _mlt = null;
        defineModule(_mlr);
        Object.defineProperty(_mlr, '__esModule', {
            'value': true
        }), _mlr.getHighZuiunSeriesEffect = void 0;
        var _mlu = _mls(74496);
        _mlr.getHighZuiunSeriesEffect = function(_mlv) {
            var _mlw = null,
                _mlx = new _mlu.SlotItemEffectModel(),
                _mly = false,
                _mlz = new _mlu.SlotItemEffectModel();
            if (662 == _mlv.ship_id ? (_mlx.houg += 3, _mlx.kaih += 1) : 663 == _mlv.ship_id || 668 == _mlv.ship_id || 501 == _mlv.ship_id || 506 == _mlv.ship_id || 553 == _mlv.ship_id || 554 == _mlv.ship_id ? (_mlz.houg += 3, _mlz.kaih += 2, _mlz.tyku += 1, _mly = true) : 502 != _mlv.ship_id && 507 != _mlv.ship_id || (_mlz.houg += 2, _mlz.kaih += 2, _mlz.tyku += 1, _mly = true), 0 == _mly) return _mlx;
            var _mm0 = 0;
            return [237, 322, 323, 490].forEach(function(_mm1) {
                var _mm2 = null;
                _mm0 += _mlv.get_slotnums(_mm1);
            }), _mlx.add(_mlz.multiply(_mm0)), _mlx;
        };
    },
    81018: function(_mm3, _mm4, _mm5) {
        'use strict';
        var _mm6 = null;
        var _mm7 = this && this.__importDefault || function(_mm8) {
            var _mm9 = null;
            return _mm8 && _mm8.__esModule ? _mm8 : {
                'default': _mm8
            };
        };
        defineModule(_mm4);
        Object.defineProperty(_mm4, '__esModule', {
            'value': true
        }), _mm4.getRaderPrivateEffect = void 0;
        var _mma = _mm5(74496),
            _mmb = _mm7(_mm5(18622));
        _mm4.getRaderPrivateEffect = function(_mmc) {
            var _mmd = null,
                _mme = new _mma.SlotItemEffectModel(),
                _mmf = 0,
                _mmg = 0;
            if (569 == _mmc.ship_id || 648 == _mmc.ship_id || 961 == _mmc.ship_id || 951 == _mmc.ship_id) _mmf = 1;
            else {
                if (955 != _mmc.ship_id && 960 != _mmc.ship_id && 956 != _mmc.ship_id && 981 != _mmc.ship_id) return _mme;
                _mmf = 2, _mmg = 1;
            }
            for (var _mmh = 0, _mmi = 0, _mmj = _mmc.have_slot_ids(); _mmi < _mmj.length; _mmi++) {
                var _mmk = _mmj[_mmi],
                    _mml = _mmb.default.model.slot.getMst(_mmk),
                    _mmm = _mml.equipType;
                12 != _mmm && 13 != _mmm || (_mml.sakuteki >= 5 && _mmc.get_slotnums(parseInt(_mmk)), _mml.taiku >= 2 && (_mmh += _mmc.get_slotnums(parseInt(_mmk))));
            }
            if (_mmh > 0 && (1 == _mmf ? (_mme.houg += 1, _mme.kaih += 3, _mme.tyku += 2) : 2 == _mmf && (_mme.tyku += 2, _mme.kaih += 1)), 0 == _mmg) return _mme;
            for (var _mmn = [], _mmo = function(_mmp) {
                    var _mmq = null;
                    if (null == _mmc.have_slots_dict[_mmp]) return 'continue';
                    var _mmr = _mmc.get_each_level_nums(_mmp);
                    null == _mmn[_mmp] && (_mmn[_mmp] = []), _mmr.forEach(function(_mms, _mmt) {
                        var _mmu = null;
                        for (var _mmv = 1; _mmv <= _mmc.SLOT_LEVEL_MAX; _mmv++) null == _mmn[_mmp][_mmv] && (_mmn[_mmp][_mmv] = 0), _mmt >= _mmv && (_mmn[_mmp][_mmv] += _mms);
                    });
                }, _mmw = 0, _mmx = [450]; _mmw < _mmx.length; _mmw++) {
                _mmo(_mmx[_mmw]);
            }
            var _mmy = null != _mmn[450] ? _mmn[450][4] : 0;
            return 1 == _mmg && _mmy > 0 && (_mme.houg += 1, _mme.houm += 1, _mme.tyku += 1, _mme.kaih += 2), _mme;
        };
    },
    56716: (_mmz, _mn0, _mn1) => {
        'use strict';
        var _mn2 = null;
        defineModule(_mn0);
        Object.defineProperty(_mn0, '__esModule', {
            'value': true
        }), _mn0.getSearchLightEffect = void 0;
        var _mn3 = _mn1(74496);
        _mn0.getSearchLightEffect = function(_mn4) {
            var _mn5 = null,
                _mn6 = new _mn3.SlotItemEffectModel(),
                _mn7 = _mn4.get_type3_nums(29);
            return 'ひえい' == _mn4.yomi || 'きりしま' == _mn4.yomi || 'ちょうかい' == _mn4.yomi || 'じんつう' == _mn4.yomi || 'あかつき' == _mn4.yomi ? (_mn6.houg += 4, _mn6.kaih -= 1) : 'あきぐも' == _mn4.yomi ? _mn6.houg = _mn6.houg + 2 * _mn7 : 'ゆきかぜ' == _mn4.yomi && (_mn6.houg = _mn6.houg + _mn7, _mn6.tyku = _mn6.tyku + _mn7), 662 != _mn4.ship_id && 663 != _mn4.ship_id && 668 != _mn4.ship_id || (_mn6.raig += 2, _mn6.houg += 4), 'じんつう' == _mn4.yomi && (_mn6.raig += 8, _mn6.houg += 4), _mn6;
        };
    },
    17713: (_mn8, _mn9, _mna) => {
        'use strict';
        var _mnb = null;
        defineModule(_mn9);
        Object.defineProperty(_mn9, '__esModule', {
            'value': true
        }), _mn9.getSearchLightLargeEffect = void 0;
        var _mnc = _mna(74496);
        _mn9.getSearchLightLargeEffect = function(_mnd) {
            var _mne = null,
                _mnf = new _mnc.SlotItemEffectModel();
            'ひえい' == _mnd.yomi || 'きりしま' == _mnd.yomi ? (_mnf.houg += 6, _mnf.kaih -= 2) : 'やまと' != _mnd.yomi && 'むさし' != _mnd.yomi || (_mnf.houg += 4, _mnf.kaih -= 1);
            var _mng = _mnd.get_slotnums(174);
            return 592 == _mnd.ship_id ? (_mnf.houg += 3, _mnf.raig += 3, _mng > 0 && (_mnf.raig += 5)) : 694 == _mnd.ship_id && (_mnf.houg += 4, _mnf.raig += 1, _mng > 0 && (_mnf.raig += 7)), _mnf;
        };
    },
    17213: (_mnh, _mni, _mnj) => {
        'use strict';
        var _mnk = null;
        defineModule(_mni);
        Object.defineProperty(_mni, '__esModule', {
            'value': true
        }), _mni.getSlot100PersonalEffect = void 0;
        var _mnl = _mnj(74496);
        _mni.getSlot100PersonalEffect = function(_mnm) {
            var _mnn = null,
                _mno = new _mnl.SlotItemEffectModel(),
                _mnp = new _mnl.SlotItemEffectModel();
            if (553 == _mnm.ship_id) _mnp.houg = 4;
            else {
                if (554 != _mnm.ship_id) return 196 == _mnm.ship_id ? (_mno.houg = 3, _mno) : 197 == _mnm.ship_id ? (_mno.houg = 6, _mno) : _mno;
                _mnp.houg = 4;
            }
            var _mnq = _mnm.get_slotnums(100);
            return _mno = _mnp.multiply(_mnq);
        };
    },
    40176: (_mnr, _mns, _mnt) => {
        'use strict';
        var _mnu = null;
        defineModule(_mns);
        Object.defineProperty(_mns, '__esModule', {
            'value': true
        }), _mns.getSlot104PersonalEffect = void 0;
        var _mnv = _mnt(74496);
        _mns.getSlot104PersonalEffect = function(_mnw) {
            var _mnx = null,
                _mny = new _mnv.SlotItemEffectModel(),
                _mnz = new _mnv.SlotItemEffectModel();
            if (149 == _mnw.ship_id || 591 == _mnw.ship_id) _mnz.houg = 2;
            else {
                if (150 == _mnw.ship_id || 592 == _mnw.ship_id) _mnz.houg = 1;
                else {
                    if (152 == _mnw.ship_id || 694 == _mnw.ship_id) _mnz.houg = 1;
                    else {
                        if (151 != _mnw.ship_id && 593 != _mnw.ship_id && 954 != _mnw.ship_id) return _mny;
                        _mnz.houg = 2, _mnz.tyku = 1, _mnz.kaih = 2;
                    }
                }
            }
            var _mo0 = _mnw.get_slotnums(104);
            return _mny = _mnz.multiply(_mo0);
        };
    },
    32889: (_mo1, _mo2, _mo3) => {
        'use strict';
        var _mo4 = null;
        defineModule(_mo2);
        Object.defineProperty(_mo2, '__esModule', {
            'value': true
        }), _mo2.getSlot106PersonalEffect = void 0;
        var _mo5 = _mo3(74496);
        _mo2.getSlot106PersonalEffect = function(_mo6) {
            var _mo7 = null,
                _mo8 = new _mo5.SlotItemEffectModel(),
                _mo9 = new _mo5.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mo6.ship_id) >= 0 ? (_mo9.houg += 1, _mo9.tyku += 2, _mo9.souk += 1, _mo9.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mo6.yomi) >= 0 ? (_mo9.tyku += 1, _mo9.souk += 1, _mo9.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mo6.yomi) >= 0 && (_mo9.tyku += 2, _mo9.souk += 1, _mo9.kaih += 2, 663 != _mo6.ship_id && 668 != _mo6.ship_id || (_mo8.houg += 1, _mo8.tyku += 1, _mo8.souk += 1, _mo8.kaih += 1), 668 == _mo6.ship_id && (_mo8.tyku += 1, _mo8.kaih += 1)), !_mo9.exists()) return _mo8;
            var _moa = _mo6.get_slotnums(106) + _mo6.get_slotnums(450);
            return _mo8.add(_mo9.multiply(_moa)), _mo8;
        };
    },
    15133: (_mob, _moc, _mod) => {
        'use strict';
        var _moe = null;
        defineModule(_moc);
        Object.defineProperty(_moc, '__esModule', {
            'value': true
        }), _moc.getSlot115PersonalEffect = void 0;
        var _mof = _mod(74496);
        _moc.getSlot115PersonalEffect = function(_mog) {
            var _moh = null,
                _moi = new _mof.SlotItemEffectModel(),
                _moj = false,
                _mok = new _mof.SlotItemEffectModel(),
                _mol = 0;
            if (55 != _mog.ctype && 47 != _mog.ctype || (_mok.houg += 2, _mok.saku += 2, _mok.kaih += 1, _moj = true, _mol = 1), 0 == _moj) return _moi;
            var _mom = _mog.get_slotnums(115);
            if (_moi.add(_mok.multiply(_mom)), 0 == _mol) return _moi;
            var _mon = _mog.get_each_level_nums(115)[10];
            return 1 == _mol && (_moi.houg += 1 * _mon, _moi.kaih += 1 * _mon), _moi;
        };
    },
    55747: (_moo, _mop, _moq) => {
        'use strict';
        var _mor = null;
        defineModule(_mop);
        Object.defineProperty(_mop, '__esModule', {
            'value': true
        }), _mop.getSlot118PersonalEffect = void 0;
        var _mos = _moq(74496);
        _mop.getSlot118PersonalEffect = function(_mot) {
            var _mou = null,
                _mov = new _mos.SlotItemEffectModel(),
                _mow = false,
                _mox = new _mos.SlotItemEffectModel(),
                _moy = 0;
            if (52 == _mot.ctype && (_mox.houg += 1, _mox.saku += 2, _mox.kaih += 2, _moy = 1, _mow = true), 507 == _mot.ship_id && (_mox.houg += 3, _mox.saku += 2, _mox.kaih += 1, _moy = 2, _mow = true), 0 == _mow) return _mov;
            var _moz = _mot.get_slotnums(118) + _mot.get_slotnums(521);
            if (_mov.add(_mox.multiply(_moz)), 0 == _mot.get_slotnums(118)) return _mov;
            if (0 == _moy) return _mov;
            var _mp0 = _mot.get_each_level_nums(118),
                _mp1 = 0,
                _mp2 = 0,
                _mp3 = 0,
                _mp4 = _mp0[10];
            return _mp0.forEach(function(_mp5, _mp6) {
                _mp6 >= 2 && (_mp1 += _mp5), _mp6 >= 5 && (_mp2 += _mp5), _mp6 >= 7 && (_mp3 += _mp5);
            }), 1 == _moy ? (_mov.houg += 2 * _mp4, _mov.saku += 1 * _mp4) : 2 == _moy && (_mov.houm += 1 * _mp1, _mov.kaih += 1 * _mp2, _mov.houg += 1 * _mp3, _mov.houg += 1 * _mp4, _mov.raig += 1 * _mp4, _mov.tyku += 1 * _mp4, _mov.saku += 1 * _mp4, _mov.kaih += 1 * _mp4), _mov;
        };
    },
    11285: (_mp7, _mp8, _mp9) => {
        'use strict';
        var _mpa = null;
        defineModule(_mp8);
        Object.defineProperty(_mp8, '__esModule', {
            'value': true
        }), _mp8.getSlot119PersonalEffect = void 0;
        var _mpb = _mp9(74496);
        _mp8.getSlot119PersonalEffect = function(_mpc) {
            var _mpd = null,
                _mpe = new _mpb.SlotItemEffectModel(),
                _mpf = new _mpb.SlotItemEffectModel();
            34 == _mpc.ctype || 56 == _mpc.ctype ? _mpf.houg += 1 : 90 == _mpc.ctype && (_mpf.houg += 2, _mpf.raig += 1);
            var _mpg = true;
            if (_mpf.exists() || (_mpg = false), 0 == _mpg) return _mpe;
            var _mph = _mpc.get_slotnums(119);
            return _mpe = _mpf.multiply(_mph);
        };
    },
    96200: (_mpi, _mpj, _mpk) => {
        'use strict';
        var _mpl = null;
        defineModule(_mpj);
        Object.defineProperty(_mpj, '__esModule', {
            'value': true
        }), _mpj.getSlot120mm50GroupPersonalEffect = void 0;
        var _mpm = _mpk(74496);
        _mpj.getSlot120mm50GroupPersonalEffect = function(_mpn) {
            var _mpo = null,
                _mpp = new _mpm.SlotItemEffectModel(),
                _mpq = false,
                _mpr = new _mpm.SlotItemEffectModel(),
                _mps = _mpn.get_slotnums(147),
                _mpt = _mpn.get_slotnums(393),
                _mpu = _mpn.get_slotnums(394),
                _mpv = new _mpm.SlotItemEffectModel(),
                _mpw = new _mpm.SlotItemEffectModel();
            if (61 == _mpn.ctype && (_mpr.houg += 1, _mpr.kaih += 1, _mpq = true, _mpt >= 1 && (_mpv.houg += 1, _mpv.tyku += 1), _mpu >= 1 && (_mpw.houg += 1, _mpw.tyku += 1, _mpw.kaih += 1, 'グレカーレ' == _mpn.yomi && (_mpw.kaih += 1)), 1), 0 == _mpq) return _mpp;
            var _mpx = _mps + _mpt + _mpu;
            _mpp.add(_mpr.multiply(_mpx)).add(_mpv.multiply(_mpt)).add(_mpw.multiply(_mpu));
            var _mpy = _mpn.get_each_level_over_nums([394]).slot[394];
            return _mpy[7] >= 1 && (_mpp.houm += 1 * _mpy[7], 'グレカーレ' == _mpn.yomi && (_mpp.houg += 1 * _mpy[7])), _mpy[8] >= 1 && (_mpp.houg += 1 * _mpy[8]), _mpy[9] >= 1 && (_mpp.houm += 1 * _mpy[9]), _mpy[10] >= 1 && (_mpp.houg += 1 * _mpy[10], 'グレカーレ' == _mpn.yomi && (_mpp.kaih += 1 * _mpy[10])), _mpp;
        };
    },
    33155: function(_mpz, _mq0, _mq1) {
        'use strict';
        var _mq2 = null;
        var _mq3 = this && this.__importDefault || function(_mq4) {
            var _mq5 = null;
            return _mq4 && _mq4.__esModule ? _mq4 : {
                'default': _mq4
            };
        };
        defineModule(_mq0);
        Object.defineProperty(_mq0, '__esModule', {
            'value': true
        }), _mq0.getSlot121PersonalEffect = void 0;
        var _mq6 = _mq1(74496),
            _mq7 = _mq3(_mq1(18622));
        _mq0.getSlot121PersonalEffect = function(_mq8) {
            var _mq9 = null,
                _mqa = new _mq6.SlotItemEffectModel(),
                _mqb = 0,
                _mqc = new _mq6.SlotItemEffectModel(),
                _mqd = false;
            54 == _mq8.ctype && (_mqa.tyku += 4, _mqa.kaih += 2, _mqb = 1), 968 == _mq8.ship_id ? (_mqc.houg += 1, _mqc.tyku += 1, _mqc.kaih += 1, _mqd = true) : 981 == _mq8.ship_id && (_mqc.tyku += 1, _mqc.kaih += 1, _mqd = true, _mqb = 1);
            var _mqe = _mq8.get_slotnums(121);
            if (_mqd && _mqa.add(_mqc.multiply(_mqe)), 0 == _mqb) return _mqa;
            for (var _mqf = 0, _mqg = 0, _mqh = _mq8.have_slot_ids(); _mqg < _mqh.length; _mqg++) {
                var _mqi = _mqh[_mqg],
                    _mqj = _mq7.default.model.slot.getMst(_mqi),
                    _mqk = _mqj.equipType;
                12 != _mqk && 13 != _mqk || (_mqj.sakuteki >= 5 && _mq8.get_slotnums(parseInt(_mqi)), _mqj.taiku >= 2 && (_mqf += _mq8.get_slotnums(parseInt(_mqi))));
            }
            return _mqf >= 1 && (_mqa.tyku += 2, _mqa.kaih += 2, 968 == _mq8.ship_id && (_mqa.houg += 1 * _mqe, _mqa.houm += 1 * _mqe)), _mqa;
        };
    },
    9115: function(_mql, _mqm, _mqn) {
        'use strict';
        var _mqo = null;
        var _mqp = this && this.__importDefault || function(_mqq) {
            var _mqr = null;
            return _mqq && _mqq.__esModule ? _mqq : {
                'default': _mqq
            };
        };
        defineModule(_mqm);
        Object.defineProperty(_mqm, '__esModule', {
            'value': true
        }), _mqm.getSlot122PersonalEffect = void 0;
        var _mqs = _mqn(74496),
            _mqt = _mqp(_mqn(18622));
        _mqm.getSlot122PersonalEffect = function(_mqu) {
            var _mqv = null,
                _mqw = new _mqs.SlotItemEffectModel(),
                _mqx = 0,
                _mqy = 0,
                _mqz = false;
            656 == _mqu.ship_id && (_mqz = true, _mqx = 1, _mqy = 1);
            var _mr0 = 0,
                _mr1 = 0,
                _mr2 = _mqu.get_each_level_nums(122),
                _mr3 = 0;
            if (_mqz) {
                _mr2.forEach(function(_mr4, _mr5) {
                    _mr5 >= 4 && (_mr3 += _mr4);
                });
                for (var _mr6 = 0, _mr7 = _mqu.have_slot_ids(); _mr6 < _mr7.length; _mr6++) {
                    var _mr8 = _mr7[_mr6],
                        _mr9 = _mqt.default.model.slot.getMst(_mr8),
                        _mra = _mr9.equipType;
                    12 != _mra && 13 != _mra || (_mr9.sakuteki >= 5 && (_mr0 += _mqu.get_slotnums(parseInt(_mr8))), _mr9.taiku >= 2 && (_mr1 += _mqu.get_slotnums(parseInt(_mr8))));
                }
            }
            return _mr3 > 0 && (1 == _mqy && (_mr0 > 0 && (_mqw.houg += 4, _mqw.kaih += 3), _mr1 > 0 && (_mqw.tyku += 4, _mqw.kaih += 3)), 1 == _mqx && (_mqw.houg += 5 * _mr3, _mqw.tyku += 3 * _mr3, _mqw.kaih += 2 * _mr3)), _mqw;
        };
    },
    85127: (_mrb, _mrc, _mrd) => {
        'use strict';
        var _mre = null;
        defineModule(_mrc);
        Object.defineProperty(_mrc, '__esModule', {
            'value': true
        }), _mrc.getSlot123PersonalEffect = void 0;
        var _mrf = _mrd(74496);
        _mrc.getSlot123PersonalEffect = function(_mrg) {
            var _mrh = null,
                _mri = new _mrf.SlotItemEffectModel(),
                _mrj = (new _mrf.SlotItemEffectModel(), 0),
                _mrk = (_mrg.get_slotnums(123), _mrg.get_slotnums(124));
            if ('ドイツ' != _mrg.getCountryName()) return _mri;
            _mrj = 1, _mrk >= 1 && (_mri.kaih += 1 * _mrk);
            var _mrl = _mrg.get_each_level_over_nums([123, 124]),
                _mrm = _mrl.slot[123],
                _mrn = _mrl.slot[124];
            return 1 == _mrj && (_mrm[5] >= 1 && (_mri.houg += 1 * _mrm[5]), _mrm[7] >= 1 && (_mri.houm += 1 * _mrm[7]), _mrm[9] >= 1 && (_mri.houg += 1 * _mrm[9]), _mrm[10] >= 1 && (_mri.houm += 1 * _mrm[10]), _mrn[8] >= 1 && (_mri.kaih += 1 * _mrn[8]), _mrn[10] >= 1 && (_mri.houm += 1 * _mrn[10])), _mri;
        };
    },
    87204: (_mro, _mrp, _mrq) => {
        'use strict';
        var _mrr = null;
        defineModule(_mrp);
        Object.defineProperty(_mrp, '__esModule', {
            'value': true
        }), _mrp.getSlot124PersonalEffect = void 0;
        var _mrs = _mrq(74496);
        _mrp.getSlot124PersonalEffect = function(_mrt) {
            var _mru = null,
                _mrv = new _mrs.SlotItemEffectModel(),
                _mrw = (new _mrs.SlotItemEffectModel(), 0),
                _mrx = _mrt.getCountryName();
            if ('ドイツ' == _mrx) _mrw = 1;
            else {
                if ('イタリア' != _mrx) return _mrv;
                _mrw = 2;
            }
            var _mry = _mrt.get_each_level_over_nums([124]).slot[124];
            return 1 == _mrw ? (_mry[7] >= 1 && (_mrv.houm += 1 * _mry[7]), _mry[8] >= 1 && (_mrv.houg += 1 * _mry[8]), _mry[9] >= 1 && (_mrv.tyku += 1 * _mry[9]), _mry[10] >= 1 && (_mrv.houm += 1 * _mry[10])) : 2 == _mrw && (_mry[8] >= 1 && (_mrv.houm += 1 * _mry[8]), _mry[9] >= 1 && (_mrv.tyku += 1 * _mry[9]), _mry[10] >= 1 && (_mrv.houg += 1 * _mry[10])), _mrv;
        };
    },
    37173: (_mrz, _ms0, _ms1) => {
        'use strict';
        var _ms2 = null;
        defineModule(_ms0);
        Object.defineProperty(_ms0, '__esModule', {
            'value': true
        }), _ms0.getSlot129PersonalEffect = void 0;
        var _ms3 = _ms1(74496);
        _ms0.getSlot129PersonalEffect = function(_ms4) {
            var _ms5 = null,
                _ms6 = new _ms3.SlotItemEffectModel(),
                _ms7 = false,
                _ms8 = new _ms3.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_ms4.ctype) >= 0 ? (_ms8.houg = 1, _ms8.raig = 2, _ms8.kaih = 2, _ms8.tais = 2, _ms8.saku = 1, _ms7 = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_ms4.ctype) >= 0 ? (_ms8.houg = 1, _ms8.raig = 2, _ms8.kaih = 2, _ms8.saku = 3, _ms7 = true) : [7, 13, 29, 8, 9, 31].indexOf(_ms4.ctype) >= 0 && (_ms8.houg = 1, _ms8.kaih = 2, _ms8.saku = 3, _ms7 = true), 0 == _ms7) return _ms6;
            var _ms9 = _ms4.get_slotnums(129);
            return _ms6 = _ms8.multiply(_ms9);
        };
    },
    73254: (_msa, _msb, _msc) => {
        'use strict';
        var _msd = null;
        defineModule(_msb);
        Object.defineProperty(_msb, '__esModule', {
            'value': true
        }), _msb.getSlot12PersonalEffect = void 0;
        var _mse = _msc(74496);
        _msb.getSlot12PersonalEffect = function(_msf) {
            var _msg = null,
                _msh = new _mse.SlotItemEffectModel(),
                _msi = false,
                _msj = new _mse.SlotItemEffectModel(),
                _msk = _msf.get_slotnums(142) + _msf.get_slotnums(460);
            if (37 == _msf.ctype && (_msj.houg += 1, _msj.kaih += 1, _msj.houm += 1, _msk >= 1 && (_msh.kaih += 1, _msh.houm += 1), _msi = true), 0 == _msi) return _msh;
            var _msl = _msf.get_slotnums(12);
            return _msh.add(_msj.multiply(_msl)), _msh;
        };
    },
    41410: (_msm, _msn, _mso) => {
        'use strict';
        var _msp = null;
        defineModule(_msn);
        Object.defineProperty(_msn, '__esModule', {
            'value': true
        }), _msn.getSlot130PersonalEffect = void 0;
        var _msq = _mso(74496);
        _msn.getSlot130PersonalEffect = function(_msr) {
            var _mss = null,
                _mst = new _msq.SlotItemEffectModel(),
                _msu = _msr.have_level_num_over_dict[130];
            return null == _msu || (428 == _msr.ship_id ? (_msu[1] >= 1 && (_mst.tyku += 1 * _msu[1]), _msu[3] >= 1 && (_mst.kaih += 1 * _msu[3]), _msu[5] >= 1 && (_mst.houm += 1 * _msu[5]), _msu[7] >= 1 && (_mst.tyku += 1 * _msu[7]), _msu[8] >= 1 && (_mst.kaih += 1 * _msu[8]), _msu[9] >= 1 && (_mst.tyku += 1 * _msu[9]), _msu[10] >= 1 && (_mst.houg += 1 * _msu[10])) : 141 == _msr.ship_id && (_msu[2] >= 1 && (_mst.tyku += 1 * _msu[2]), _msu[4] >= 1 && (_mst.kaih += 1 * _msu[4]), _msu[6] >= 1 && (_mst.houm += 1 * _msu[6]), _msu[8] >= 1 && (_mst.tyku += 1 * _msu[8]), _msu[10] >= 1 && (_mst.kaih += 1 * _msu[10])), 1 == _msr.stype && (_msu[3] >= 1 && (_mst.tyku += 1 * _msu[3]), _msu[6] >= 1 && (_mst.kaih += 1 * _msu[6]), _msu[9] >= 1 && (_mst.tyku += 1 * _msu[9]), _msu[10] >= 1 && (_mst.kaih += 1 * _msu[10]))), _mst;
        };
    },
    93373: (_msv, _msw, _msx) => {
        'use strict';
        var _msy = null;
        defineModule(_msw);
        Object.defineProperty(_msw, '__esModule', {
            'value': true
        }), _msw.getSlot132PersonalEffect = void 0;
        var _msz = _msx(74496);
        _msw.getSlot132PersonalEffect = function(_mt0) {
            var _mt1 = null,
                _mt2 = new _msz.SlotItemEffectModel(),
                _mt3 = _mt0.get_each_level_nums(132),
                _mt4 = 0,
                _mt5 = 0,
                _mt6 = 0,
                _mt7 = 0,
                _mt8 = 0;
            return _mt3.forEach(function(_mt9, _mta) {
                _mta >= 3 && (_mt4 += _mt9), _mta >= 5 && (_mt5 += _mt9), _mta >= 7 && (_mt6 += _mt9), _mta >= 8 && (_mt7 += _mt9), _mta >= 9 && (_mt8 += _mt9);
            }), _mt4 >= 1 && (_mt2.kaih += 1), _mt5 >= 1 && (_mt2.tais += 1), _mt6 >= 1 && (_mt2.kaih += 1), _mt7 >= 1 && (_mt2.tais += 1), _mt8 >= 1 && (_mt2.houm += 1), _mt3[10] >= 1 && (_mt2.tais += 1), 911 != _mt0.ship_id && 916 != _mt0.ship_id && 546 != _mt0.ship_id || (_mt2.kaih += 1), 461 != _mt0.ship_id && 466 != _mt0.ship_id && 462 != _mt0.ship_id && 467 != _mt0.ship_id && 156 != _mt0.ship_id || (_mt2.kaih += 2), _mt2;
        };
    },
    88838: (_mtb, _mtc, _mtd) => {
        'use strict';
        var _mte = null;
        defineModule(_mtc);
        Object.defineProperty(_mtc, '__esModule', {
            'value': true
        }), _mtc.getSlot136PersonalEffect = void 0;
        var _mtf = _mtd(74496);
        _mtc.getSlot136PersonalEffect = function(_mtg) {
            var _mth = null,
                _mti = new _mtf.SlotItemEffectModel(),
                _mtj = 0;
            if (58 != _mtg.ctype && 61 != _mtg.ctype && 64 != _mtg.ctype && 68 != _mtg.ctype && 80 != _mtg.ctype && 92 != _mtg.ctype && 113 != _mtg.ctype && 124 != _mtg.ctype || (_mti.souk += 2, _mti.kaih += 1, _mtj = 1), 879 == _mtg.ship_id && (_mti.souk += 1, _mti.kaih += 1), 0 == _mtj) return _mti;
            var _mtk = _mtg.get_each_level_nums(136),
                _mtl = 0,
                _mtm = 0,
                _mtn = _mtk[10];
            return _mtj > 0 && _mtk.forEach(function(_mto, _mtp) {
                _mtp >= 3 && (_mtl += _mto), _mtp >= 6 && (_mtm += _mto);
            }), 1 == _mtj && (_mtl >= 1 && (_mti.souk += 1 * _mtl), _mtm >= 1 && (_mti.souk += 1 * _mtm), _mtn >= 1 && (_mti.souk += 1 * _mtn)), _mti;
        };
    },
    17274: (_mtq, _mtr, _mts) => {
        'use strict';
        var _mtt = null;
        defineModule(_mtr);
        Object.defineProperty(_mtr, '__esModule', {
            'value': true
        }), _mtr.getSlot139PersonalEffect = void 0;
        var _mtu = _mts(74496);
        _mtr.getSlot139PersonalEffect = function(_mtv) {
            var _mtw = null,
                _mtx = new _mtu.SlotItemEffectModel(),
                _mty = false,
                _mtz = new _mtu.SlotItemEffectModel();
            if (662 != _mtv.ship_id && 663 != _mtv.ship_id && 668 != _mtv.ship_id || (_mtz.houg += 2, _mtz.tyku += 1, _mty = true), 0 == _mty) return _mtx;
            var _mu0 = _mtv.get_slotnums(139);
            return _mtx.add(_mtz.multiply(_mu0)), _mtx;
        };
    },
    6482: (_mu1, _mu2, _mu3) => {
        'use strict';
        var _mu4 = null;
        defineModule(_mu2);
        Object.defineProperty(_mu2, '__esModule', {
            'value': true
        }), _mu2.getSlot13_8cmRensouhouPersonalEffect = void 0;
        var _mu5 = _mu3(74496);
        _mu2.getSlot13_8cmRensouhouPersonalEffect = function(_mu6) {
            var _mu7 = null,
                _mu8 = new _mu5.SlotItemEffectModel(),
                _mu9 = false,
                _mua = new _mu5.SlotItemEffectModel(),
                _mub = 0,
                _muc = _mu6.getCountryName(),
                _mud = _mu6.get_slotnums(534),
                _mue = _mu6.get_slotnums(535);
            if ('フランス' == _muc && (_mua.houg += 2, _mua.houm += 1, 129 == _mu6.ctype && (_mua.houm += 1), 967 == _mu6.ship_id && _mue >= 1 && (_mua.houg += 1), _mu9 = true, _mub = 1), 0 == _mu9) return _mu8;
            var _muf = _mud + _mue;
            if (_mu8.add(_mua.multiply(_muf)), 0 == _mub) return _mu8;
            _mu6.haveSlotLevelNumOver(534);
            var _mug = _mu6.haveSlotLevelNumOver(535),
                _muh = _mu6.getTotalCountWithOverLeveledItem([534, 535]);
            return 1 == _mub && (_muh[2] >= 1 && (_mu8.houm += 1 * _muh[2]), _muh[4] >= 1 && (_mu8.houg += 1 * _muh[4]), _muh[6] >= 1 && (_mu8.houm += 1 * _muh[6]), _mug[7] >= 1 && (_mu8.houg += 1 * _mug[7]), _muh[8] >= 1 && (_mu8.houg += 1 * _muh[8]), _mug[9] >= 1 && (_mu8.houm += 1 * _mug[9]), _muh[10] >= 1 && (_mu8.houg += 1 * _muh[10])), _mu8;
        };
    },
    21713: (_mui, _muj, _muk) => {
        'use strict';
        var _mul = null;
        defineModule(_muj);
        Object.defineProperty(_muj, '__esModule', {
            'value': true
        }), _muj.getSlot143PersonalEffect = void 0;
        var _mum = _muk(74496);
        _muj.getSlot143PersonalEffect = function(_mun) {
            var _muo = null,
                _mup = new _mum.SlotItemEffectModel();
            return 'あかぎ' == _mun.yomi ? _mup.houg = 3 : 'かが' == _mun.yomi || 'しょうかく' == _mun.yomi ? _mup.houg = 2 : ('ずいかく' == _mun.yomi || 'りゅうじょう' == _mun.yomi) && (_mup.houg = 1), _mup;
        };
    },
    59823: (_muq, _mur, _mus) => {
        'use strict';
        var _mut = null;
        defineModule(_mur);
        Object.defineProperty(_mur, '__esModule', {
            'value': true
        }), _mur.getSlot144PersonalEffect = void 0;
        var _muu = _mus(74496);
        _mur.getSlot144PersonalEffect = function(_muv) {
            var _muw = null,
                _mux = new _muu.SlotItemEffectModel();
            return 'あかぎ' == _muv.yomi ? _mux.houg = 3 : 'かが' == _muv.yomi ? _mux.houg = 2 : 'しょうかく' == _muv.yomi ? (_mux.houg = 2, 461 != _muv.ship_id && 466 != _muv.ship_id || (_mux.houg += 2)) : 'ずいかく' == _muv.yomi ? (_mux.houg = 1, 462 != _muv.ship_id && 467 != _muv.ship_id || (_mux.houg += 1)) : 'りゅうじょう' == _muv.yomi && (_mux.houg = 1), _mux;
        };
    },
    57440: (_muy, _muz, _mv0) => {
        'use strict';
        var _mv1 = null;
        defineModule(_muz);
        Object.defineProperty(_muz, '__esModule', {
            'value': true
        }), _muz.getSlot149PersonalEffect = void 0;
        var _mv2 = _mv0(74496);
        _muz.getSlot149PersonalEffect = function(_mv3) {
            var _mv4 = null,
                _mv5 = new _mv2.SlotItemEffectModel(),
                _mv6 = new _mv2.SlotItemEffectModel(),
                _mv7 = false;
            return 488 == _mv3.ship_id || 141 == _mv3.ship_id || 160 == _mv3.ship_id || 622 == _mv3.ship_id || 623 == _mv3.ship_id || 656 == _mv3.ship_id || 961 == _mv3.ship_id ? (_mv6.tais = 1, _mv6.kaih = 3, _mv7 = true) : 624 == _mv3.ship_id ? (_mv6.tais = 3, _mv6.kaih = 5, _mv7 = true) : 662 == _mv3.ship_id && (_mv6.tais = 2, _mv6.kaih = 4, _mv7 = true), 54 == _mv3.ctype && (_mv6.tais = 1, _mv6.kaih = 2, _mv7 = true), 0 == _mv7 ? _mv5 : _mv5 = _mv6.multiply(1);
        };
    },
    29493: (_mv8, _mv9, _mva) => {
        'use strict';
        var _mvb = null;
        defineModule(_mv9);
        Object.defineProperty(_mv9, '__esModule', {
            'value': true
        }), _mv9.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mvc = _mva(74496);
        _mv9.getSlot14inch45CaliberGunPersonalEffect = function(_mvd) {
            var _mve = null,
                _mvf, _mvg, _mvh, _mvi = new _mvc.SlotItemEffectModel(),
                _mvj = false,
                _mvk = new _mvc.SlotItemEffectModel(),
                _mvl = {
                    507: 507,
                    508: 507
                },
                _mvm = _mvd.get_slotnums(507),
                _mvn = _mvd.get_slotnums(508),
                _mvo = _mvm + _mvn,
                _mvp = _mvd.getCountryName(),
                _mvq = _mvd.getUSSWaterRaderDict();
            if (125 == _mvd.ctype && (_mvk.houg += 1, _mvk.kaih += 1, _mvk.houm += 1, _mvj = true, _mvm >= 1 && _mvn >= 1 && (_mvi.houg += 1, _mvi.houm += 1)), 'アメリカ' == _mvp && _mvd.stype >= 8 && _mvd.stype <= 10) {
                _mvk.houg += 2, _mvk.kaih += 1, _mvk.houm += 1, _mvj = true;
                for (var _mvr = 0, _mvs = 0, _mvt = _mvd.have_slot_ids(); _mvs < _mvt.length; _mvs++) {
                    var _mvu = _mvt[_mvs];
                    _mvq[Number(_mvu)] && (_mvr += _mvd.get_slotnums(parseInt(_mvu)));
                }
                _mvr >= 1 && (_mvi.houg += 1, _mvi.kaih += 1, _mvi.houm += 2), _mvm >= 1 && _mvn >= 1 && (_mvi.houg += 1, _mvi.houm += 1, _mvi.kaih += 2);
            }
            else 6 != _mvd.ctype && 26 != _mvd.ctype && 2 != _mvd.ctype && 'イギリス' != _mvp || (_mvi.kaih += 1, _mvi.houm += 1, _mvm >= 1 && _mvn >= 1 && (_mvi.houg += 1, _mvi.houm += 1, _mvi.kaih += 1));
            _mvj && _mvi.add(_mvk.multiply(_mvo));
            for (var _mvv = {}, _mvw = {}, _mvx = {}, _mvy = function(_mvz) {
                    var _mw0 = null,
                        _mw1 = Number(_mvz),
                        _mw2 = _mvl[_mw1];
                    _mvv[_mw2] = null !== (_mvf = _mvv[_mw2]) && void 0 !== _mvf ? _mvf : 0, _mvw[_mw2] = null !== (_mvg = _mvw[_mw2]) && void 0 !== _mvg ? _mvg : 0, _mvx[_mw2] = null !== (_mvh = _mvx[_mw2]) && void 0 !== _mvh ? _mvh : 0, _mvd.get_each_level_nums(_mw1).forEach(function(_mw3, _mw4) {
                        _mw4 >= 3 && (_mvv[_mw2] += _mw3), _mw4 >= 6 && (_mvw[_mw2] += _mw3), _mw4 >= 9 && (_mvx[_mw2] += _mw3);
                    });
                }, _mw5 = 0, _mw6 = Object.keys(_mvl); _mw5 < _mw6.length; _mw5++) {
                _mvy(_mw6[_mw5]);
            }
            return _mvv[507] >= 1 && (_mvi.houg += 1 * _mvv[507]), _mvw[507] >= 1 && (_mvi.souk += 1 * _mvw[507]), _mvx[507] >= 1 && (_mvi.houm += 1 * _mvx[507]), _mvi;
        };
    },
    66985: (_mw7, _mw8, _mw9) => {
        'use strict';
        var _mwa = null;
        defineModule(_mw8);
        Object.defineProperty(_mw8, '__esModule', {
            'value': true
        }), _mw8.getSlot15PersonalEffect = void 0;
        var _mwb = _mw9(74496);
        _mw8.getSlot15PersonalEffect = function(_mwc) {
            var _mwd = null,
                _mwe = new _mwb.SlotItemEffectModel(),
                _mwf = false;
            if ((566 == _mwc.ship_id || 567 == _mwc.ship_id || 568 == _mwc.ship_id || 648 == _mwc.ship_id || 651 == _mwc.ship_id || 656 == _mwc.ship_id || 670 == _mwc.ship_id || 915 == _mwc.ship_id || 951 == _mwc.ship_id || 'たけ' == _mwc.yomi) && (_mwf = true), 0 == _mwf) return _mwe;
            var _mwg = _mwc.get_slotnums(15);
            return 30 == _mwc.ctype && (1 == _mwg ? _mwe.raig = 2 : _mwg >= 2 && (_mwe.raig = 4)), 'たけ' == _mwc.yomi && (_mwe.raig += 5, _mwe.kaih += 1), _mwe;
        };
    },
    70332: (_mwh, _mwi, _mwj) => {
        'use strict';
        var _mwk = null;
        defineModule(_mwi);
        Object.defineProperty(_mwi, '__esModule', {
            'value': true
        }), _mwi.getSlot15_2cmSanrensouSyuhouPersonalEffect = void 0;
        var _mwl = _mwj(74496);
        _mwi.getSlot15_2cmSanrensouSyuhouPersonalEffect = function(_mwm) {
            var _mwn = null,
                _mwo = new _mwl.SlotItemEffectModel(),
                _mwp = false,
                _mwq = new _mwl.SlotItemEffectModel(),
                _mwr = 0,
                _mws = _mwm.getCountryName(),
                _mwt = _mwm.get_slotnums(536),
                _mwu = _mwm.get_slotnums(537);
            if ('フランス' == _mws && (_mwq.houg += 2, _mwq.houm += 1, 128 == _mwm.ctype && (_mwq.houm += 1), 970 == _mwm.ship_id && _mwu >= 1 && (_mwq.houg += 1, _mwq.kaih += 2, _mwq.houm += 1), _mwp = true, _mwr = 1), 0 == _mwp) return _mwo;
            var _mwv = _mwt + _mwu;
            if (_mwo.add(_mwq.multiply(_mwv)), 0 == _mwr) return _mwo;
            _mwm.haveSlotLevelNumOver(536);
            var _mww = _mwm.haveSlotLevelNumOver(537),
                _mwx = _mwm.getTotalCountWithOverLeveledItem([536, 537]),
                _mwy = _mwm.get_slotnums(471) + _mwm.get_slotnums(538),
                _mwz = _mwm.haveSlotLevelNumOver(538);
            return 1 == _mwr && (_mwx[3] >= 1 && (_mwo.houm += 1 * _mwx[3]), _mwx[4] >= 1 && (_mwo.houg += 1 * _mwx[4]), _mww[5] >= 1 && (_mwo.kaih += 1 * _mww[5]), _mwx[6] >= 1 && (_mwo.houm += 1 * _mwx[6]), _mwx[7] >= 1 && (_mwo.houg += 1 * _mwx[7]), _mww[8] >= 1 && (_mwo.kaih += 1 * _mww[8]), _mwx[9] >= 1 && (_mwo.houm += 1 * _mwx[9]), _mwx[10] >= 1 && (_mwo.houg += 1 * _mwx[10]), _mwx[1] >= 1 && (_mwy >= 1 && (970 == _mwm.ship_id && (_mwo.kaih += 1 * _mwy), _mwo.houm += 1 * _mwy), _mwz[7] >= 1 && (_mwo.kaih += 1 * _mwz[7]), _mwz[9] >= 1 && (_mwo.houm += 1 * _mwz[9]))), _mwo;
        };
    },
    79086: (_mx0, _mx1, _mx2) => {
        'use strict';
        var _mx3 = null;
        defineModule(_mx1);
        Object.defineProperty(_mx1, '__esModule', {
            'value': true
        }), _mx1.getSlot165_216PersonalEffect = void 0;
        var _mx4 = _mx2(74496);
        _mx1.getSlot165_216PersonalEffect = function(_mx5) {
            var _mx6 = null,
                _mx7 = new _mx4.SlotItemEffectModel();
            return 501 != _mx5.ship_id && 506 != _mx5.ship_id && 502 != _mx5.ship_id && 507 != _mx5.ship_id || (_mx7.tyku += 2, _mx7.kaih += 2), _mx7;
        };
    },
    88102: (_mx8, _mx9, _mxa) => {
        'use strict';
        var _mxb = null;
        defineModule(_mx9);
        Object.defineProperty(_mx9, '__esModule', {
            'value': true
        }), _mx9.getSlot16M1PersonalEffect = void 0;
        var _mxc = _mxa(74496);
        _mx9.getSlot16M1PersonalEffect = function(_mxd) {
            var _mxe = null,
                _mxf = new _mxc.SlotItemEffectModel(),
                _mxg = new _mxc.SlotItemEffectModel();
            67 == _mxd.ctype || 78 == _mxd.ctype || 82 == _mxd.ctype || 88 == _mxd.ctype || 108 == _mxd.ctype || 112 == _mxd.ctype ? (_mxg.houg += 2, _mxg.souk += 1, 67 == _mxd.ctype && (_mxg.kaih -= 2)) : 149 == _mxd.ship_id || 150 == _mxd.ship_id || 151 == _mxd.ship_id || 152 == _mxd.ship_id ? (_mxg.houg += 1, _mxg.souk += 1, _mxg.kaih -= 3) : 591 == _mxd.ship_id || 592 == _mxd.ship_id || 694 == _mxd.ship_id ? (_mxg.houg += 2, _mxg.souk += 1, _mxg.kaih -= 2) : 593 != _mxd.ship_id && 954 != _mxd.ship_id || (_mxg.houg += 1, _mxg.souk += 1, _mxg.kaih -= 1);
            var _mxh = true;
            if (_mxg.exists() || (_mxh = false), 0 == _mxh) return _mxf;
            var _mxi = _mxd.get_slotnums(298) + _mxd.get_slotnums(299) + _mxd.get_slotnums(300);
            return _mxf = _mxg.multiply(_mxi);
        };
    },
    29240: (_mxj, _mxk, _mxl) => {
        'use strict';
        var _mxm = null;
        defineModule(_mxk);
        Object.defineProperty(_mxk, '__esModule', {
            'value': true
        }), _mxk.getSlot171PersonalEffect = void 0;
        var _mxn = _mxl(74496);
        _mxk.getSlot171PersonalEffect = function(_mxo) {
            var _mxp = null,
                _mxq = new _mxn.SlotItemEffectModel(),
                _mxr = 0;
            'アメリカ' == _mxo.getCountryName() && (_mxr = 1), 65 != _mxo.ctype && 93 != _mxo.ctype && 102 != _mxo.ctype && 107 != _mxo.ctype && 125 != _mxo.ctype || (_mxq.houg += 1, _mxq.saku += 1, _mxr = 2);
            var _mxs = _mxo.get_each_level_nums(171),
                _mxt = 0,
                _mxu = 0,
                _mxv = 0;
            return _mxr > 0 && (_mxs.map(function(_mxw, _mxx) {
                _mxx >= 5 && (_mxt += _mxw), _mxx >= 3 && (_mxu += _mxw), _mxx >= 8 && (_mxv += _mxw);
            }), 1 != _mxr && 2 != _mxr || (_mxs[10] > 0 && (_mxq.houg += 1), _mxt > 0 && (_mxq.kaih += 1)), 2 == _mxr && (_mxu > 0 && (_mxq.saku += 1), _mxv > 0 && (_mxq.saku += 1))), _mxq;
        };
    },
    40885: (_mxy, _mxz, _my0) => {
        'use strict';
        var _my1 = null;
        defineModule(_mxz);
        Object.defineProperty(_mxz, '__esModule', {
            'value': true
        }), _mxz.getSlot174PersonalEffect = void 0;
        var _my2 = _my0(74496);
        _mxz.getSlot174PersonalEffect = function(_my3) {
            var _my4 = null,
                _my5 = new _my2.SlotItemEffectModel(),
                _my6 = new _my2.SlotItemEffectModel();
            if (66 == _my3.ctype && (_my6.raig = 1, _my6.kaih = 2), 591 == _my3.ship_id || 592 == _my3.ship_id || 954 == _my3.ship_id || 694 == _my3.ship_id ? (_my6.raig += 6, _my6.kaih += 3) : 593 == _my3.ship_id ? (_my6.raig += 5, _my6.kaih += 2) : 488 != _my3.ship_id && 622 != _my3.ship_id && 623 != _my3.ship_id && 624 != _my3.ship_id || (_my6.houg += 2, _my6.raig += 4, _my6.kaih += 4), !_my6.exists()) return _my5;
            var _my7 = _my3.get_slotnums(174);
            return _my5 = _my6.multiply(_my7);
        };
    },
    19614: (_my8, _my9, _mya) => {
        'use strict';
        var _myb = null;
        defineModule(_my9);
        Object.defineProperty(_my9, '__esModule', {
            'value': true
        }), _my9.getSlot179PersonalEffect = void 0;
        var _myc = _mya(74496);
        _my9.getSlot179PersonalEffect = function(_myd) {
            var _mye = null,
                _myf = new _myc.SlotItemEffectModel(),
                _myg = new _myc.SlotItemEffectModel();
            if (54 == _myd.ctype && (_myg.raig = 1), !_myg.exists()) return _myf;
            var _myh = _myd.get_slotnums(179);
            return _myf = _myg.multiply(_myh);
        };
    },
    87220: (_myi, _myj, _myk) => {
        'use strict';
        var _myl = null;
        defineModule(_myj);
        Object.defineProperty(_myj, '__esModule', {
            'value': true
        }), _myj.getSlot184PersonalEffect = void 0;
        var _mym = _myk(74496);
        _myj.getSlot184PersonalEffect = function(_myn) {
            var _myo = null,
                _myp = new _mym.SlotItemEffectModel(),
                _myq = new _mym.SlotItemEffectModel();
            if (68 == _myn.ctype && (_myq.houg += 1, _myq.tyku += 2, _myq.kaih += 3), !_myq.exists()) return _myp;
            var _myr = _myn.get_slotnums(184);
            return _myp = _myq.multiply(_myr);
        };
    },
    81367: (_mys, _myt, _myu) => {
        'use strict';
        var _myv = null;
        defineModule(_myt);
        Object.defineProperty(_myt, '__esModule', {
            'value': true
        }), _myt.getSlot188PersonalEffect = void 0;
        var _myw = _myu(74496);
        _myt.getSlot188PersonalEffect = function(_myx) {
            var _myy = null,
                _myz = new _myw.SlotItemEffectModel(),
                _mz0 = new _myw.SlotItemEffectModel();
            if (68 == _myx.ctype && (_mz0.houg += 3, _mz0.tyku += 1, _mz0.kaih += 1), !_mz0.exists()) return _myz;
            var _mz1 = _myx.get_slotnums(188);
            return _myz = _mz0.multiply(_mz1);
        };
    },
    13052: (_mz2, _mz3, _mz4) => {
        'use strict';
        var _mz5 = null;
        defineModule(_mz3);
        Object.defineProperty(_mz3, '__esModule', {
            'value': true
        }), _mz3.getSlot189PersonalEffect = void 0;
        var _mz6 = _mz4(74496);
        _mz3.getSlot189PersonalEffect = function(_mz7) {
            var _mz8 = null,
                _mz9 = new _mz6.SlotItemEffectModel(),
                _mza = new _mz6.SlotItemEffectModel();
            if (68 != _mz7.ctype && 63 != _mz7.ctype || (_mza.tyku += 1, _mza.kaih += 2), !_mza.exists()) return _mz9;
            var _mzb = _mz7.get_slotnums(189);
            return _mz9 = _mza.multiply(_mzb);
        };
    },
    66904: (_mzc, _mzd, _mze) => {
        'use strict';
        var _mzf = null;
        defineModule(_mzd);
        Object.defineProperty(_mzd, '__esModule', {
            'value': true
        }), _mzd.getSlot18_52_PersonalEffect = void 0;
        var _mzg = _mze(74496);
        _mzd.getSlot18_52_PersonalEffect = function(_mzh) {
            var _mzi = null,
                _mzj = new _mzg.SlotItemEffectModel(),
                _mzk = new _mzg.SlotItemEffectModel();
            if (277 == _mzh.ship_id || 278 == _mzh.ship_id || 156 == _mzh.ship_id ? _mzk.houg = 1 : 594 == _mzh.ship_id || 698 == _mzh.ship_id || 646 == _mzh.ship_id ? (_mzk.houg = 1, _mzk.kaih = 1) : 599 != _mzh.ship_id && 610 != _mzh.ship_id || (_mzk.houg = 2, _mzk.kaih = 1), !_mzk.exists()) return _mzj;
            var _mzl = _mzh.get_slotnums(18) + _mzh.get_slotnums(52);
            return _mzj = _mzk.multiply(_mzl);
        };
    },
    94968: (_mzm, _mzn, _mzo) => {
        'use strict';
        var _mzp = null;
        defineModule(_mzn);
        Object.defineProperty(_mzn, '__esModule', {
            'value': true
        }), _mzn.getSlot194PersonalEffect = void 0;
        var _mzq = _mzo(74496);
        _mzn.getSlot194PersonalEffect = function(_mzr) {
            var _mzs = null,
                _mzt = new _mzq.SlotItemEffectModel(),
                _mzu = new _mzq.SlotItemEffectModel();
            if (70 == _mzr.ctype ? (_mzu.houg += 3, _mzu.kaih += 2, _mzu.saku += 2) : 72 != _mzr.ctype && 62 != _mzr.ctype || (_mzu.kaih += 1, _mzu.saku += 2), 392 != _mzr.ship_id && 969 != _mzr.ship_id || (_mzu.houg += 1, _mzu.kaih += 2, _mzu.saku += 2), !_mzu.exists()) return _mzt;
            var _mzv = _mzr.get_slotnums(194);
            return _mzt = _mzu.multiply(_mzv);
        };
    },
    94781: (_mzw, _mzx, _mzy) => {
        'use strict';
        var _mzz = null;
        defineModule(_mzx);
        Object.defineProperty(_mzx, '__esModule', {
            'value': true
        }), _mzx.getSlot195PersonalEffect = void 0;
        var _n00 = _mzy(74496);
        _mzx.getSlot195PersonalEffect = function(_n01) {
            var _n02 = null,
                _n03 = new _n00.SlotItemEffectModel(),
                _n04 = false,
                _n05 = new _n00.SlotItemEffectModel();
            if ('アメリカ' == _n01.getCountryName() && (_n05.houg += 1, _n04 = true), 0 == _n04) return _n03;
            var _n06 = _n01.get_slotnums(195);
            return _n03.add(_n05.multiply(_n06));
        };
    },
    98137: (_n07, _n08, _n09) => {
        'use strict';
        var _n0a = null;
        defineModule(_n08);
        Object.defineProperty(_n08, '__esModule', {
            'value': true
        }), _n08.getSlot19PersonalEffect = void 0;
        var _n0b = _n09(74496);
        _n08.getSlot19PersonalEffect = function(_n0c) {
            var _n0d = null,
                _n0e = new _n0b.SlotItemEffectModel(),
                _n0f = new _n0b.SlotItemEffectModel();
            if ('ほうしょう' == _n0c.yomi && (_n0f.houg = 2, _n0f.kaih = 2, _n0f.tais = 2, _n0f.tyku = 2), 75 != _n0c.ctype && 76 != _n0c.ctype || (_n0f.houg = 2, _n0f.tais = 3), 7 == _n0c.stype && (_n0f.tyku += 1, _n0f.kaih += 1), 894 != _n0c.ship_id && 899 != _n0c.ship_id || (_n0f.houg += 1, _n0f.kaih += 1, _n0f.tais += 1, _n0f.tyku += 1), !_n0f.exists()) return _n0e;
            var _n0g = _n0c.get_slotnums(19);
            return _n0e = _n0f.multiply(_n0g);
        };
    },
    48658: (_n0h, _n0i, _n0j) => {
        'use strict';
        var _n0k = null;
        defineModule(_n0i);
        Object.defineProperty(_n0i, '__esModule', {
            'value': true
        }), _n0i.getSlot204PersonalEffect = void 0;
        var _n0l = _n0j(74496);
        _n0i.getSlot204PersonalEffect = function(_n0m) {
            var _n0n = null,
                _n0o = new _n0l.SlotItemEffectModel();
            if (591 != _n0m.ship_id && 592 != _n0m.ship_id && 593 != _n0m.ship_id && 954 != _n0m.ship_id && 694 != _n0m.ship_id) return _n0o;
            _n0o.souk = _n0o.souk + 1, _n0o.raig = _n0o.raig + 1;
            for (var _n0p = _n0m.get_each_level_nums(204), _n0q = 0, _n0r = 0; _n0r <= 10; _n0r++) _n0r >= 7 && (_n0q += _n0p[_n0r]);
            return _n0q > 0 && (_n0o.souk = _n0o.souk + 1, 694 == _n0m.ship_id && (_n0o.souk += 1)), _n0p[10] > 0 && (_n0o.raig = _n0o.raig + 1, 694 == _n0m.ship_id && (_n0o.raig += 1)), _n0o;
        };
    },
    2306: (_n0s, _n0t, _n0u) => {
        'use strict';
        var _n0v = null;
        defineModule(_n0t);
        Object.defineProperty(_n0t, '__esModule', {
            'value': true
        }), _n0t.getSlot217PersonalEffect = void 0;
        var _n0w = _n0u(74496);
        _n0t.getSlot217PersonalEffect = function(_n0x) {
            var _n0y = null,
                _n0z = new _n0w.SlotItemEffectModel(),
                _n10 = false,
                _n11 = new _n0w.SlotItemEffectModel();
            if (501 == _n0x.ship_id || 506 == _n0x.ship_id ? (_n11.houg += 1, _n11.kaih += 3, _n11.tyku += 5, _n10 = true) : 502 != _n0x.ship_id && 507 != _n0x.ship_id || (_n11.houg += 1, _n11.kaih += 2, _n11.tyku += 4, _n10 = true), 0 == _n10) return _n0z;
            var _n12 = _n0x.get_slotnums(217);
            return _n0z.add(_n11.multiply(_n12)), _n0z;
        };
    },
    91302: function(_n13, _n14, _n15) {
        'use strict';
        var _n16 = null;
        var _n17 = this && this.__importDefault || function(_n18) {
            var _n19 = null;
            return _n18 && _n18.__esModule ? _n18 : {
                'default': _n18
            };
        };
        defineModule(_n14);
        Object.defineProperty(_n14, '__esModule', {
            'value': true
        }), _n14.getSlot220PersonalEffect = void 0;
        var _n1a = _n15(74496),
            _n1b = _n17(_n15(18622));
        _n14.getSlot220PersonalEffect = function(_n1c) {
            var _n1d = null,
                _n1e = new _n1a.SlotItemEffectModel(),
                _n1f = false,
                _n1g = new _n1a.SlotItemEffectModel(),
                _n1h = 0,
                _n1i = 0;
            if (662 == _n1c.ship_id || 663 == _n1c.ship_id || 668 == _n1c.ship_id || 501 == _n1c.ship_id || 506 == _n1c.ship_id || 502 == _n1c.ship_id || 507 == _n1c.ship_id ? (_n1g.houg += 1, _n1g.tyku += 3, _n1g.kaih += 2, _n1f = true, _n1h = 1) : 894 != _n1c.ship_id && 899 != _n1c.ship_id || (_n1g.tyku += 2, _n1g.kaih += 2, _n1f = true, _n1h = 1, _n1i = 1), 0 == _n1f) return _n1e;
            var _n1j = _n1c.get_slotnums(220);
            _n1e.add(_n1g.multiply(_n1j));
            for (var _n1k = 0, _n1l = 0, _n1m = _n1c.have_slot_ids(); _n1l < _n1m.length; _n1l++) {
                var _n1n = _n1m[_n1l],
                    _n1o = _n1b.default.model.slot.getMst(_n1n),
                    _n1p = _n1o.equipType;
                12 != _n1p && 13 != _n1p || (_n1o.sakuteki >= 5 && _n1c.get_slotnums(parseInt(_n1n)), _n1o.taiku >= 2 && (_n1k += _n1c.get_slotnums(parseInt(_n1n))));
            }
            if (_n1k >= 1 && 1 == _n1h && (_n1e.tyku += 3, _n1e.kaih += 3), 0 == _n1i) return _n1e;
            var _n1q = _n1c.get_each_level_nums(220)[10];
            return 1 == _n1i && _n1q > 0 && (_n1e.houg += 1 * _n1q, _n1e.tyku += 1 * _n1q, _n1e.kaih += 1 * _n1q), _n1e;
        };
    },
    20418: (_n1r, _n1s, _n1t) => {
        'use strict';
        var _n1u = null;
        defineModule(_n1s);
        Object.defineProperty(_n1s, '__esModule', {
            'value': true
        }), _n1s.getSlot227PersonalEffect = void 0;
        var _n1v = _n1t(74496);
        _n1s.getSlot227PersonalEffect = function(_n1w) {
            var _n1x = null,
                _n1y = new _n1v.SlotItemEffectModel(),
                _n1z = _n1w.get_each_level_nums(227),
                _n20 = 0;
            _n1z.forEach(function(_n21, _n22) {
                _n22 >= 8 && (_n20 += _n21);
            }), _n20 >= 1 && (_n1y.tais += 1 * _n20);
            var _n23 = _n1z[10];
            return _n23 >= 1 && (_n1y.tais += 1 * _n23), _n1y;
        };
    },
    1906: (_n24, _n25, _n26) => {
        'use strict';
        var _n27 = null;
        defineModule(_n25);
        Object.defineProperty(_n25, '__esModule', {
            'value': true
        }), _n25.getSlot228PersonalEffect = void 0;
        var _n28 = _n26(74496);
        _n25.getSlot228PersonalEffect = function(_n29) {
            var _n2a = null,
                _n2b = new _n28.SlotItemEffectModel(),
                _n2c = new _n28.SlotItemEffectModel();
            if ('ほうしょう' == _n29.yomi && (_n2c.houg = 3, _n2c.kaih = 4, _n2c.tais = 4, _n2c.tyku = 3), 75 != _n29.ctype && 76 != _n29.ctype || (_n2c.houg = 2, _n2c.tais = 5, _n2c.tyku = 1, _n2c.kaih = 1), 7 == _n29.stype && (_n2c.tais += 2, _n2c.tyku += 1, _n2c.kaih += 1), 894 != _n29.ship_id && 899 != _n29.ship_id || (_n2c.houg += 1, _n2c.kaih += 2, _n2c.tais += 2, _n2c.tyku += 1), !_n2c.exists()) return _n2b;
            var _n2d = _n29.get_slotnums(228);
            return _n2b = _n2c.multiply(_n2d);
        };
    },
    61887: function(_n2e, _n2f, _n2g) {
        'use strict';
        var _n2h = null;
        var _n2i = this && this.__importDefault || function(_n2j) {
            var _n2k = null;
            return _n2j && _n2j.__esModule ? _n2j : {
                'default': _n2j
            };
        };
        defineModule(_n2f);
        Object.defineProperty(_n2f, '__esModule', {
            'value': true
        }), _n2f.getSlot229PersonalEffect = void 0;
        var _n2l = _n2g(74496),
            _n2m = _n2i(_n2g(18622));
        _n2f.getSlot229PersonalEffect = function(_n2n) {
            var _n2o = null;
            for (var _n2p = new _n2l.SlotItemEffectModel(), _n2q = 0, _n2r = 0, _n2s = _n2n.have_slots_dict[229]; _n2r < _n2s.length; _n2r++) {
                _n2s[_n2r].level >= 7 && _n2q++;
            }
            var _n2t = _n2q,
                _n2u = 0,
                _n2v = 0,
                _n2w = 0,
                _n2x = _n2n.get_slotnums(229);
            if (622 == _n2n.ship_id || 623 == _n2n.ship_id || 624 == _n2n.ship_id) _n2p.houg += 1 * _n2x, _n2p.tyku += 1 * _n2x, _n2u = 2;
            else {
                if (656 == _n2n.ship_id) _n2p.houg += 2 * _n2x, _n2p.tyku += 3 * _n2x, _n2p.tais += 2 * _n2x, _n2u = 3;
                else {
                    if (0 == _n2q) return _n2p;
                }
            }
            if (488 == _n2n.ship_id ? (_n2p.tyku += 3 * _n2t, _n2u = 1) : 220 == _n2n.ship_id ? _n2p.tyku += 2 * _n2t : 23 == _n2n.ship_id ? _n2p.tyku += 1 * _n2t : 160 == _n2n.ship_id ? (_n2p.tyku += 2 * _n2t, _n2u = 1) : 224 == _n2n.ship_id ? _n2p.tyku += 1 * _n2t : 487 == _n2n.ship_id ? (_n2p.tyku += 2 * _n2t, _n2u = 1) : 289 == _n2n.ship_id && (_n2p.tyku += 1 * _n2t), (66 == _n2n.ctype || 28 == _n2n.ctype) && (_n2p.houg += 1 * _n2t, _n2p.tyku += 1 * _n2t, _n2v = 1), 1 == _n2n.stype && (_n2p.houg += 1 * _n2t, _n2p.tyku += 1 * _n2t, _n2w = 1), ('ゆら' == _n2n.yomi || 'なか' == _n2n.yomi || 'きぬ' == _n2n.yomi) && (_n2p.houg += 2 * _n2t), 0 == _n2u + _n2v + _n2w) return _n2p;
            for (var _n2y = 0, _n2z = 0, _n30 = 0, _n31 = _n2n.have_slot_ids(); _n30 < _n31.length; _n30++) {
                var _n32 = _n31[_n30],
                    _n33 = _n2m.default.model.slot.getMst(_n32),
                    _n34 = _n33.equipType;
                12 != _n34 && 13 != _n34 || (_n33.sakuteki >= 5 && (_n2y += _n2n.get_slotnums(parseInt(_n32))), _n33.taiku >= 2 && (_n2z += _n2n.get_slotnums(parseInt(_n32))));
            }
            return 1 == _n2u ? _n2y > 0 && (_n2p.houg += 3, _n2p.kaih += 2) : 2 == _n2u ? (_n2y > 0 && (_n2p.houg += 1, _n2p.kaih += 1), _n2z > 0 && (_n2p.tyku += 2, _n2p.kaih += 2)) : 3 == _n2u && (_n2y > 0 && (_n2p.houg += 2, _n2p.kaih += 2), _n2z > 0 && (_n2p.tyku += 3, _n2p.kaih += 2)), 1 == _n2v && _n2y > 0 && (_n2p.houg += 2, _n2p.kaih += 3), 1 == _n2w && _n2y > 0 && (_n2p.houg += 1, _n2p.kaih += 4), _n2p;
        };
    },
    55734: (_n35, _n36, _n37) => {
        'use strict';
        var _n38 = null;
        defineModule(_n36);
        Object.defineProperty(_n36, '__esModule', {
            'value': true
        }), _n36.getSlot234PersonalEffect = void 0;
        var _n39 = _n37(74496);
        _n36.getSlot234PersonalEffect = function(_n3a) {
            var _n3b = null,
                _n3c = new _n39.SlotItemEffectModel(),
                _n3d = false,
                _n3e = new _n39.SlotItemEffectModel(),
                _n3f = _n3a.get_slotnums(142) + _n3a.get_slotnums(460);
            if (37 == _n3a.ctype && (_n3e.houg += 1, _n3e.tyku += 1, _n3e.kaih += 1, _n3e.houm += 1, _n3f >= 1 && (_n3c.tyku += 1, _n3c.kaih += 1, _n3c.houm += 1), _n3d = true), 0 == _n3d) return _n3c;
            var _n3g = _n3a.get_slotnums(234);
            return _n3c.add(_n3e.multiply(_n3g)), _n3c;
        };
    },
    17562: function(_n3h, _n3i, _n3j) {
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
        }), _n3i.getSlot235PersonalEffect = void 0;
        var _n3o = _n3j(74496),
            _n3p = _n3l(_n3j(18622));
        _n3i.getSlot235PersonalEffect = function(_n3q) {
            var _n3r = null,
                _n3s = new _n3o.SlotItemEffectModel(),
                _n3t = false,
                _n3u = new _n3o.SlotItemEffectModel(),
                _n3v = 0;
            if (52 != _n3q.ctype && 9 != _n3q.ctype || (_n3u.houg += 2, _n3u.tyku += 1, _n3t = true), 321 == _n3q.ship_id && (_n3u.houg += 1, _n3u.kaih += 1, _n3v = 1), 0 == _n3t) return _n3s;
            var _n3w = _n3q.get_slotnums(235);
            if (_n3s.add(_n3u.multiply(_n3w)), 0 == _n3v) return _n3s;
            for (var _n3x = 0, _n3y = 0, _n3z = 0, _n40 = _n3q.have_slot_ids(); _n3z < _n40.length; _n3z++) {
                var _n41 = _n40[_n3z],
                    _n42 = _n3p.default.model.slot.getMst(_n41),
                    _n43 = _n42.equipType;
                12 != _n43 && 13 != _n43 || (_n42.sakuteki >= 5 && (_n3x += _n3q.get_slotnums(parseInt(_n41))), _n42.taiku >= 2 && (_n3y += _n3q.get_slotnums(parseInt(_n41))));
            }
            return _n3x >= 1 && 1 == _n3v && (_n3s.houg += 3, _n3s.kaih += 2), _n3y >= 1 && 1 == _n3v && (_n3s.tyku += 3, _n3s.kaih += 3), _n3s;
        };
    },
    47970: (_n44, _n45, _n46) => {
        'use strict';
        var _n47 = null;
        defineModule(_n45);
        Object.defineProperty(_n45, '__esModule', {
            'value': true
        }), _n45.getSlot237PersonalEffect = void 0;
        var _n48 = _n46(74496);
        _n45.getSlot237PersonalEffect = function(_n49) {
            var _n4a = null,
                _n4b = new _n48.SlotItemEffectModel(),
                _n4c = new _n48.SlotItemEffectModel();
            if (553 == _n49.ship_id) _n4c.houg = 4, _n4c.kaih = 2;
            else {
                if (82 == _n49.ship_id) _n4c.houg = 3, _n4c.kaih = 1;
                else {
                    if (88 == _n49.ship_id) _n4c.houg = 3, _n4c.kaih = 1;
                    else {
                        if (554 == _n49.ship_id) _n4c.houg = 4, _n4c.kaih = 2;
                        else {
                            if (411 == _n49.ship_id) _n4c.houg = 2;
                            else {
                                if (412 != _n49.ship_id) return _n4b;
                                _n4c.houg = 2;
                            }
                        }
                    }
                }
            }
            var _n4d = _n49.get_slotnums(237);
            return _n4b = _n4c.multiply(_n4d);
        };
    },
    14386: (_n4e, _n4f, _n4g) => {
        'use strict';
        var _n4h = null;
        defineModule(_n4f);
        Object.defineProperty(_n4f, '__esModule', {
            'value': true
        }), _n4f.getSlot238_239PersonalEffect = void 0;
        var _n4i = _n4g(74496);
        _n4f.getSlot238_239PersonalEffect = function(_n4j) {
            var _n4k = null,
                _n4l = new _n4i.SlotItemEffectModel();
            return 501 != _n4j.ship_id && 506 != _n4j.ship_id && 502 != _n4j.ship_id && 507 != _n4j.ship_id || (_n4l.kaih += 1, _n4l.raig += 1), _n4l;
        };
    },
    82229: (_n4m, _n4n, _n4o) => {
        'use strict';
        var _n4p = null;
        defineModule(_n4n);
        Object.defineProperty(_n4n, '__esModule', {
            'value': true
        }), _n4n.getSlot242PersonalEffect = void 0;
        var _n4q = _n4o(74496);
        _n4n.getSlot242PersonalEffect = function(_n4r) {
            var _n4s = null,
                _n4t = new _n4q.SlotItemEffectModel(),
                _n4u = false,
                _n4v = new _n4q.SlotItemEffectModel();
            if (78 == _n4r.ctype && (_n4v.houg += 2, _n4v.kaih += 1, _n4u = true), 'ほうしょう' == _n4r.yomi && (_n4v.houg += 1, _n4u = true), 0 == _n4u) return _n4t;
            var _n4w = _n4r.get_slotnums(242);
            return _n4t.add(_n4v.multiply(_n4w)), _n4t;
        };
    },
    10325: (_n4x, _n4y, _n4z) => {
        'use strict';
        var _n50 = null;
        defineModule(_n4y);
        Object.defineProperty(_n4y, '__esModule', {
            'value': true
        }), _n4y.getSlot243PersonalEffect = void 0;
        var _n51 = _n4z(74496);
        _n4y.getSlot243PersonalEffect = function(_n52) {
            var _n53 = null,
                _n54 = new _n51.SlotItemEffectModel(),
                _n55 = false,
                _n56 = new _n51.SlotItemEffectModel();
            if (78 == _n52.ctype && (_n56.houg += 3, _n56.kaih += 1, _n55 = true), 'ほうしょう' == _n52.yomi && (_n56.houg += 2, _n55 = true), 0 == _n55) return _n54;
            var _n57 = _n52.get_slotnums(243);
            return _n54.add(_n56.multiply(_n57)), _n54;
        };
    },
    351: (_n58, _n59, _n5a) => {
        'use strict';
        var _n5b = null;
        defineModule(_n59);
        Object.defineProperty(_n59, '__esModule', {
            'value': true
        }), _n59.getSlot244PersonalEffect = void 0;
        var _n5c = _n5a(74496);
        _n59.getSlot244PersonalEffect = function(_n5d) {
            var _n5e = null,
                _n5f = new _n5c.SlotItemEffectModel(),
                _n5g = false,
                _n5h = new _n5c.SlotItemEffectModel(),
                _n5i = 0;
            if (78 == _n5d.ctype && (_n5h.houg += 4, _n5h.kaih += 2, _n5g = true, _n5i = 1), 'ほうしょう' == _n5d.yomi && (_n5h.houg += 3, _n5g = true, _n5i = 2), 0 == _n5g) return _n5f;
            var _n5j = _n5d.get_slotnums(244);
            if (_n5f.add(_n5h.multiply(_n5j)), 0 == _n5i) return _n5f;
            var _n5k = _n5d.get_each_level_over_nums([244]).slot[244];
            return 1 == _n5i ? (_n5k[3] >= 1 && (_n5f.houg += 1 * _n5k[3]), _n5k[5] >= 1 && (_n5f.houm += 1 * _n5k[5]), _n5k[7] >= 1 && (_n5f.houg += 1 * _n5k[7]), _n5k[8] >= 1 && (_n5f.kaih += 1 * _n5k[8]), _n5k[9] >= 1 && (_n5f.houm += 1 * _n5k[9]), _n5k[10] >= 1 && (_n5f.houg += 1 * _n5k[10])) : 2 == _n5i && (_n5k[3] >= 1 && (_n5f.kaih += 1 * _n5k[3]), _n5k[7] >= 1 && (_n5f.houg += 1 * _n5k[7]), _n5k[9] >= 1 && (_n5f.houm += 1 * _n5k[9]), _n5k[10] >= 1 && (_n5f.houg += 1 * _n5k[10])), _n5f;
        };
    },
    61977: (_n5l, _n5m, _n5n) => {
        'use strict';
        var _n5o = null;
        defineModule(_n5m);
        Object.defineProperty(_n5m, '__esModule', {
            'value': true
        }), _n5m.getSlot247PersonalEffect = void 0;
        var _n5p = _n5n(74496);
        _n5m.getSlot247PersonalEffect = function(_n5q) {
            var _n5r = null,
                _n5s = new _n5p.SlotItemEffectModel(),
                _n5t = false,
                _n5u = new _n5p.SlotItemEffectModel(),
                _n5v = 0;
            if ('フランス' == _n5q.getCountryName() && (_n5u.houg += 2, _n5u.houm += 2, _n5t = true, _n5v = 1), 0 == _n5t) return _n5s;
            var _n5w = _n5q.get_slotnums(247);
            if (_n5s.add(_n5u.multiply(_n5w)), 0 == _n5v) return _n5s;
            var _n5x = _n5q.get_each_level_nums(247),
                _n5y = 0,
                _n5z = 0;
            _n5v > 0 && _n5x.forEach(function(_n60, _n61) {
                _n61 >= 4 && (_n5y += _n60), _n61 >= 8 && (_n5z += _n60);
            });
            var _n62 = _n5x[10];
            return 1 == _n5v && (_n5y >= 1 && (_n5s.houg += 1 * _n5y, _n5s.houm += 1 * _n5y), _n5z >= 1 && (_n5s.kaih += 1 * _n5z, _n5s.houg += 1 * _n5z, _n5s.houm += 1 * _n5z), _n62 >= 1 && (_n5s.kaih += 1 * _n62, _n5s.houm += 1 * _n62)), _n5s;
        };
    },
    96580: (_n63, _n64, _n65) => {
        'use strict';
        var _n66 = null;
        defineModule(_n64);
        Object.defineProperty(_n64, '__esModule', {
            'value': true
        }), _n64.getSlot252PersonalEffect = void 0;
        var _n67 = _n65(74496);
        _n64.getSlot252PersonalEffect = function(_n68) {
            var _n69 = null,
                _n6a = new _n67.SlotItemEffectModel(),
                _n6b = (new _n67.SlotItemEffectModel(), 0);
            if (78 != _n68.ctype && 112 != _n68.ctype || (_n6b = 1), 0 == _n6b) return _n6a;
            var _n6c = _n68.get_each_level_over_nums([252]).slot[252];
            return 1 == _n6b && (_n6c[4] >= 1 && (_n6a.kaih += 1 * _n6c[4]), _n6c[6] >= 1 && (_n6a.houm += 1 * _n6c[6]), _n6c[7] >= 1 && (_n6a.houg += 1 * _n6c[7]), _n6c[8] >= 1 && (_n6a.kaih += 1 * _n6c[8]), _n6c[9] >= 1 && (_n6a.houm += 1 * _n6c[9]), _n6c[10] >= 1 && (_n6a.houg += 1 * _n6c[10])), _n6a;
        };
    },
    31797: function(_n6d, _n6e, _n6f) {
        'use strict';
        var _n6g = null;
        var _n6h = this && this.__importDefault || function(_n6i) {
            var _n6j = null;
            return _n6i && _n6i.__esModule ? _n6i : {
                'default': _n6i
            };
        };
        defineModule(_n6e);
        Object.defineProperty(_n6e, '__esModule', {
            'value': true
        }), _n6e.getSlot266PersonalEffect2 = _n6e.getSlot266PersonalEffect = void 0;
        var _n6k = _n6f(74496),
            _n6l = _n6h(_n6f(18622));
        _n6e.getSlot266PersonalEffect = function(_n6m) {
            var _n6n = null,
                _n6o = new _n6k.SlotItemEffectModel(),
                _n6p = false;
            if (566 != _n6m.ship_id && 567 != _n6m.ship_id && 568 != _n6m.ship_id && 656 != _n6m.ship_id && 670 != _n6m.ship_id && 915 != _n6m.ship_id && 951 != _n6m.ship_id || (_n6p = true), 0 == _n6p) return _n6o;
            var _n6q = _n6m.get_slotnums(266);
            return 30 == _n6m.ctype && (1 == _n6q ? _n6o.houg = 1 : _n6q >= 2 && (_n6o.houg = 3)), _n6o;
        }, _n6e.getSlot266PersonalEffect2 = function(_n6r) {
            var _n6s = null,
                _n6t = new _n6k.SlotItemEffectModel(),
                _n6u = 0,
                _n6v = new _n6k.SlotItemEffectModel();
            if (23 == _n6r.ctype || 18 == _n6r.ctype ? (_n6v.houg = 1, _n6u = 1) : 30 == _n6r.ctype && (_n6v.houg = 1, _n6u = 2), ('しぐれ' == _n6r.yomi || 'ゆきかぜ' == _n6r.yomi || 'いそかぜ' == _n6r.yomi) && (_n6v.kaih = 1), 961 == _n6r.ship_id && (_n6v.houg += 1, _n6v.houm += 1, _n6v.kaih += 1), !_n6v.exists()) return _n6t;
            var _n6w = _n6r.get_slotnums(266);
            if (_n6t = _n6v.multiply(_n6w), 0 == _n6u) return _n6t;
            for (var _n6x = 0, _n6y = 0, _n6z = _n6r.have_slot_ids(); _n6y < _n6z.length; _n6y++) {
                var _n70 = _n6z[_n6y],
                    _n71 = _n6l.default.model.slot.getMst(_n70),
                    _n72 = _n71.equipType;
                (12 == _n72 || 13 == _n72) && _n71.sakuteki >= 5 && (_n6x += _n6r.get_slotnums(parseInt(_n70)));
            }
            return _n6x > 0 && (1 == _n6u ? (_n6t.houg += 1, _n6t.kaih += 1, _n6t.raig += 3) : 2 == _n6u && (_n6t.houg += 2, _n6t.kaih += 1, _n6t.raig += 3)), _n6t;
        };
    },
    45738: function(_n73, _n74, _n75) {
        'use strict';
        var _n76 = null;
        var _n77 = this && this.__importDefault || function(_n78) {
            var _n79 = null;
            return _n78 && _n78.__esModule ? _n78 : {
                'default': _n78
            };
        };
        defineModule(_n74);
        Object.defineProperty(_n74, '__esModule', {
            'value': true
        }), _n74.getSlot267PersonalEffect2 = _n74.getSlot267PersonalEffect = void 0;
        var _n7a = _n75(74496),
            _n7b = _n77(_n75(18622));
        _n74.getSlot267PersonalEffect = function(_n7c) {
            var _n7d = null,
                _n7e = new _n7a.SlotItemEffectModel(),
                _n7f = 0,
                _n7g = 0;
            if (38 == _n7c.ctype || 22 == _n7c.ctype) _n7f = 2, _n7g = 1;
            else {
                if (30 != _n7c.ctype) return _n7e;
                _n7f = 1, _n7g = 1;
            }
            var _n7h = _n7c.get_slotnums(267) + _n7c.get_slotnums(366);
            return _n7e.houg = _n7f * _n7h, _n7e.kaih = _n7g * _n7h, _n7e;
        }, _n74.getSlot267PersonalEffect2 = function(_n7i) {
            var _n7j = null,
                _n7k = new _n7a.SlotItemEffectModel(),
                _n7l = _n7i.get_slotnums(267),
                _n7m = _n7i.get_slotnums(366),
                _n7n = _n7l + _n7m;
            if (566 != _n7i.ship_id && 567 != _n7i.ship_id && 568 != _n7i.ship_id && 656 != _n7i.ship_id && 670 != _n7i.ship_id && 915 != _n7i.ship_id && 951 != _n7i.ship_id || (_n7l > 0 && (_n7k.houg += 1), 1 == _n7m ? (_n7k.houg += 1, _n7k.tyku += 2) : _n7m >= 2 && (_n7k.houg += 2, _n7k.tyku += 4)), 38 != _n7i.ctype && 229 != _n7i.ship_id && [648, 961].indexOf(_n7i.ship_id) < 0) return _n7k;
            var _n7o = false,
                _n7p = false,
                _n7q = false,
                _n7r = false,
                _n7s = false,
                _n7t = false,
                _n7u = false,
                _n7v = false,
                _n7w = false,
                _n7x = false,
                _n7y = false,
                _n7z = false,
                _n80 = false,
                _n81 = 0,
                _n82 = 0,
                _n83 = 0;
            543 == _n7i.ship_id ? (_n7k.houg = 1 * _n7n, _n7p = true) : 229 == _n7i.ship_id ? _n7q = true : 542 == _n7i.ship_id ? (_n7k.houg = 1 * _n7n, _n7r = true) : 563 == _n7i.ship_id ? (_n7k.houg = 1 * _n7n, _n7s = true) : 564 == _n7i.ship_id ? (_n7k.houg = 1 * _n7n, _n7t = true) : 578 == _n7i.ship_id ? (_n7k.houg = 1 * _n7n, _n7u = true) : 569 == _n7i.ship_id ? (_n7k.houg = 1 * _n7n, _n7v = true) : 649 == _n7i.ship_id ? (_n7k.houg = 2 * _n7n, _n7x = true) : 955 == _n7i.ship_id || 960 == _n7i.ship_id ? (_n7k.houg = 2 * _n7n, _n7y = true) : 956 == _n7i.ship_id ? (_n7k.houg = 2 * _n7n, _n7z = true) : 648 == _n7i.ship_id ? (_n7k.houg = 2 * _n7n, _n7w = true, _n81 = 1, _n82 = 1, _n83 = 1) : 961 == _n7i.ship_id ? (_n7k.houg = 2 * _n7n, _n7o = true, _n81 = 1, _n82 = 1, _n83 = 1) : 981 == _n7i.ship_id && (_n7k.houg = 1 * _n7n, _n80 = true);
            for (var _n84 = 0, _n85 = 0, _n86 = 0, _n87 = _n7i.have_slot_ids(); _n86 < _n87.length; _n86++) {
                var _n88 = _n87[_n86],
                    _n89 = _n7b.default.model.slot.getMst(_n88),
                    _n8a = _n89.equipType;
                12 != _n8a && 13 != _n8a || (_n89.sakuteki >= 5 && (_n84 += _n7i.get_slotnums(parseInt(_n88))), _n89.taiku >= 2 && (_n85 += _n7i.get_slotnums(parseInt(_n88))));
            }
            if (_n84 > 0 && _n7l > 0 && ((38 == _n7i.ctype || _n7w) && (_n7k.houg += 2, _n7k.raig += 3, _n7k.kaih += 1, 955 == _n7i.ship_id || 956 == _n7i.ship_id ? _n7k.raig -= 1 : 960 == _n7i.ship_id && (_n7k.raig -= 2)), (_n7r || _n7p || _n7q || _n7s || _n7t || _n7u || _n7v || _n7w || _n7x || _n7y || _n7z || _n80) && (_n7k.houg += 1, _n7k.raig += 3, _n7k.kaih += 2)), _n7m > 0 && (_n7r || _n7p || _n7s || _n7t || _n7u || _n7q || _n7v || _n7w || _n7x || _n7o || _n7y || _n7z || _n80)) {
                1 == _n7m ? (_n7k.tyku += 3, _n7k.houg += 1, _n7k.houm += 1) : _n7m >= 2 && (_n7k.tyku += 5, _n7k.houg += 3, _n7k.houm += 1, 955 == _n7i.ship_id && (_n7k.houg += 1)), (_n7v || _n7w) && (_n7k.houg += 1, _n7k.tyku += 2), _n84 > 0 && (_n7k.houg += 2, _n7k.kaih += 2, _n7k.raig += 4, _n7k.houm += 2, 960 == _n7i.ship_id && (_n7k.raig -= 1, _n7k.houg += 1)), _n85 > 0 && (_n7k.houg += 1, _n7k.kaih += 3, _n7k.tyku += 5, _n7k.houm += 1);
                var _n8b = _n7i.get_each_level_nums(366),
                    _n8c = 0,
                    _n8d = 0;
                _n8b.forEach(function(_n8e, _n8f) {
                    _n8f >= 5 && (_n8c += _n8e), _n8f >= 8 && (_n8d += _n8e);
                }), _n8c >= 1 && (_n7k.houm += 1 * _n8c), _n8d >= 1 && (_n7k.houg += 1 * _n8d);
                var _n8g = _n8b[10];
                _n8g >= 1 && (_n7k.houm += 1 * _n8g);
            }
            var _n8h = _n7i.get_slotnums(129),
                _n8i = _n7i.get_slotnums(74),
                _n8j = _n7i.get_slotnums(412);
            return _n81 > 0 && _n8h > 0 && 1 == _n81 && (_n7k.houg += 2, _n7k.kaih += 3, _n7k.tyku += 2), _n83 > 0 && _n8j > 0 && 1 == _n83 && (_n7k.houg += 2, _n7k.kaih += 3, _n7k.tyku += 2), _n82 > 0 && _n8i > 0 && 1 == _n82 && (_n7k.houg += 3, _n7k.kaih -= 3), _n7k;
        };
    },
    23934: (_n8k, _n8l, _n8m) => {
        'use strict';
        var _n8n = null;
        defineModule(_n8l);
        Object.defineProperty(_n8l, '__esModule', {
            'value': true
        }), _n8l.getSlot271PersonalEffect = void 0;
        var _n8o = _n8m(74496);
        _n8l.getSlot271PersonalEffect = function(_n8p) {
            var _n8q = null,
                _n8r = new _n8o.SlotItemEffectModel(),
                _n8s = 0;
            if (508 != _n8p.ship_id && 509 != _n8p.ship_id && 888 != _n8p.ship_id && 883 != _n8p.ship_id || (_n8s = 1), 0 == _n8s) return _n8r;
            var _n8t = _n8p.get_each_level_nums(271),
                _n8u = 0,
                _n8v = 0,
                _n8w = 0,
                _n8x = _n8t[10];
            return _n8s > 0 && _n8t.forEach(function(_n8y, _n8z) {
                _n8z >= 4 && (_n8u += _n8y), _n8z >= 6 && (_n8v += _n8y), _n8z >= 8 && (_n8w += _n8y);
            }), 1 == _n8s && (_n8u >= 1 && (_n8r.houg += 1 * _n8u), _n8v >= 1 && (_n8r.tyku += 2 * _n8v), _n8w >= 1 && (_n8r.kaih += 2 * _n8w), _n8x >= 1 && (_n8r.houg += 1 * _n8x)), _n8r;
        };
    },
    17712: function(_n90, _n91, _n92) {
        'use strict';
        var _n93 = null;
        var _n94 = this && this.__importDefault || function(_n95) {
            var _n96 = null;
            return _n95 && _n95.__esModule ? _n95 : {
                'default': _n95
            };
        };
        defineModule(_n91);
        Object.defineProperty(_n91, '__esModule', {
            'value': true
        }), _n91.getSlot275PersonalEffect = void 0;
        var _n97 = _n92(74496),
            _n98 = _n94(_n92(18622));
        _n91.getSlot275PersonalEffect = function(_n99) {
            var _n9a = null,
                _n9b = new _n97.SlotItemEffectModel(),
                _n9c = false,
                _n9d = new _n97.SlotItemEffectModel(),
                _n9e = 0,
                _n9f = 0;
            if (894 != _n99.ship_id && 899 != _n99.ship_id || (_n9d.houg += 1, _n9d.tyku += 3, _n9d.kaih += 2, _n9c = true, _n9f = 1, _n9e = 1), 0 == _n9c) return _n9b;
            var _n9g = _n99.get_slotnums(275);
            _n9b.add(_n9d.multiply(_n9g));
            var _n9h = 0;
            if (_n9e > 0)
                for (var _n9i = 0, _n9j = _n99.have_slot_ids(); _n9i < _n9j.length; _n9i++) {
                    var _n9k = _n9j[_n9i],
                        _n9l = _n98.default.model.slot.getMst(_n9k),
                        _n9m = _n9l.equipType;
                    12 != _n9m && 13 != _n9m || (_n9l.sakuteki >= 5 && _n99.get_slotnums(parseInt(_n9k)), _n9l.taiku >= 2 && (_n9h += _n99.get_slotnums(parseInt(_n9k))));
                }
            if (1 == _n9e && _n9h > 0 && (_n9b.tyku += 3, _n9b.kaih += 3), 0 == _n9f) return _n9b;
            var _n9n = _n99.get_each_level_nums(275),
                _n9o = 0,
                _n9p = _n9n[10];
            return _n9f > 0 && _n9n.forEach(function(_n9q, _n9r) {
                _n9r >= 7 && (_n9o += _n9q);
            }), 1 == _n9f && (_n9o > 0 && (_n9b.tyku += 1 * _n9o, _n9b.kaih += 1 * _n9o), _n9p > 0 && (_n9b.houg += 1 * _n9p, _n9b.tyku += 1 * _n9p, _n9b.houm += 1 * _n9p)), _n9b;
        };
    },
    93733: (_n9s, _n9t, _n9u) => {
        'use strict';
        var _n9v = null;
        defineModule(_n9t);
        Object.defineProperty(_n9t, '__esModule', {
            'value': true
        }), _n9t.getSlot277PersonalEffect = void 0;
        var _n9w = _n9u(74496);
        _n9t.getSlot277PersonalEffect = function(_n9x) {
            var _n9y = null,
                _n9z = new _n9w.SlotItemEffectModel(),
                _na0 = false,
                _na1 = new _n9w.SlotItemEffectModel();
            if ('アメリカ' != _n9x.getCountryName() && 67 != _n9x.ctype && 78 != _n9x.ctype && 82 != _n9x.ctype && 88 != _n9x.ctype && 108 != _n9x.ctype && 112 != _n9x.ctype || (_na1.houg += 1, _na1.kaih += 1, _na0 = true), 83 == _n9x.ctype && (_na1.houg += 1, _na1.kaih += 1, _na1.tyku += 1, _na0 = true), 0 == _na0) return _n9z;
            var _na2 = _n9x.get_slotnums(277);
            return _n9z.add(_na1.multiply(_na2)), _n9z;
        };
    },
    34718: (_na3, _na4, _na5) => {
        'use strict';
        var _na6 = null;
        defineModule(_na4);
        Object.defineProperty(_na4, '__esModule', {
            'value': true
        }), _na4.getSlot278PersonalEffect = void 0;
        var _na7 = _na5(74496);
        _na4.getSlot278PersonalEffect = function(_na8) {
            var _na9 = null,
                _naa = new _na7.SlotItemEffectModel();
            return 'アメリカ' == _na8.getCountryName() ? (_naa.tyku += 1, _naa.kaih += 3, _naa.saku += 1) : 67 == _na8.ctype || 78 == _na8.ctype || 82 == _na8.ctype || 88 == _na8.ctype || 108 == _na8.ctype || 112 == _na8.ctype ? (_naa.tyku += 1, _naa.kaih += 2) : 96 == _na8.ctype && (_naa.tyku += 1, _naa.kaih += 1), _naa;
        };
    },
    69245: (_nab, _nac, _nad) => {
        'use strict';
        var _nae = null;
        defineModule(_nac);
        Object.defineProperty(_nac, '__esModule', {
            'value': true
        }), _nac.getSlot279PersonalEffect = void 0;
        var _naf = _nad(74496);
        _nac.getSlot279PersonalEffect = function(_nag) {
            var _nah = null,
                _nai = new _naf.SlotItemEffectModel();
            return 'アメリカ' == _nag.getCountryName() ? (_nai.houg += 2, _nai.tyku += 2, _nai.kaih += 3, _nai.saku += 2) : 67 == _nag.ctype || 78 == _nag.ctype || 82 == _nag.ctype || 88 == _nag.ctype || 108 == _nag.ctype || 112 == _nag.ctype ? (_nai.houg += 1, _nai.tyku += 1, _nai.kaih += 2, _nai.saku += 1) : 96 == _nag.ctype && (_nai.houg += 1, _nai.tyku += 1, _nai.kaih += 1), _nai;
        };
    },
    18478: (_naj, _nak, _nal) => {
        'use strict';
        var _nam = null;
        defineModule(_nak);
        Object.defineProperty(_nak, '__esModule', {
            'value': true
        }), _nak.getSlot282PersonalEffect = void 0;
        var _nan = _nal(74496);
        _nak.getSlot282PersonalEffect = function(_nao) {
            var _nap = null,
                _naq = new _nan.SlotItemEffectModel(),
                _nar = false,
                _nas = false;
            147 != _nao.ship_id && 73 != _nao.ctype && 81 != _nao.ctype || (_nar = true), 'ゆうばり' == _nao.yomi && (_nas = true);
            var _nat = new _nan.SlotItemEffectModel();
            if ((_nar || _nas) && (_nat.houg += 2, _nat.souk += 1), !_nat.exists()) return _naq;
            var _nau = _nao.get_slotnums(282);
            return _naq = _nat.multiply(_nau);
        };
    },
    2899: (_nav, _naw, _nax) => {
        'use strict';
        var _nay = null;
        defineModule(_naw);
        Object.defineProperty(_naw, '__esModule', {
            'value': true
        }), _naw.getSlot283PersonalEffect = void 0;
        var _naz = _nax(74496);
        _naw.getSlot283PersonalEffect = function(_nb0) {
            var _nb1 = null,
                _nb2 = new _naz.SlotItemEffectModel(),
                _nb3 = false;
            147 != _nb0.ship_id && 73 != _nb0.ctype && 81 != _nb0.ctype || (_nb3 = true);
            var _nb4 = new _naz.SlotItemEffectModel();
            if (_nb3 && (_nb4.raig += 3, _nb4.houg += 1, _nb4.souk += 1), !_nb4.exists()) return _nb2;
            var _nb5 = _nb0.get_slotnums(283);
            return _nb2 = _nb4.multiply(_nb5);
        };
    },
    57120: (_nb6, _nb7, _nb8) => {
        'use strict';
        var _nb9 = null;
        defineModule(_nb7);
        Object.defineProperty(_nb7, '__esModule', {
            'value': true
        }), _nb7.getSlot285PersonalEffect = void 0;
        var _nba = _nb8(74496);
        _nb7.getSlot285PersonalEffect = function(_nbb) {
            var _nbc = null,
                _nbd = new _nba.SlotItemEffectModel(),
                _nbe = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_nbb.ship_id) >= 0 && (_nbe = true), 0 == _nbe) return _nbd;
            var _nbf = _nbb.get_each_level_nums(285),
                _nbg = _nbb.get_slotnums(285);
            _nbg > 2 && (_nbg = 2), _nbd.raig = 2 * _nbg, _nbd.kaih = 1 * _nbg;
            var _nbh = _nbf[10];
            1 == _nbh && (_nbd.houg += 1, _nbd.raig += 1), _nbh >= 2 && (_nbd.houg += 2, _nbd.raig += 1), _nbh >= 3 && (_nbd.raig += 3);
            var _nbi = _nbb.get_slotnums(285);
            return 903 == _nbb.ship_id ? (_nbi >= 2 && (_nbd.raig += 2), _nbi >= 3 && (_nbd.raig += 2)) : 908 != _nbb.ship_id && 959 != _nbb.ship_id || (_nbi >= 2 && (_nbd.raig += 1), _nbi >= 3 && (_nbd.raig += 1)), _nbd;
        };
    },
    74985: function(_nbj, _nbk, _nbl) {
        'use strict';
        var _nbm = null;
        var _nbn = this && this.__importDefault || function(_nbo) {
            var _nbp = null;
            return _nbo && _nbo.__esModule ? _nbo : {
                'default': _nbo
            };
        };
        defineModule(_nbk);
        Object.defineProperty(_nbk, '__esModule', {
            'value': true
        }), _nbk.getSlot286PersonalEffect3 = _nbk.getSlot286PersonalEffect2 = _nbk.getSlot286PersonalEffect = void 0;
        var _nbq = _nbl(74496),
            _nbr = _nbn(_nbl(18622));
        _nbk.getSlot286PersonalEffect = function(_nbs) {
            var _nbt = null,
                _nbu = new _nbq.SlotItemEffectModel(),
                _nbv = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975, 956, 981].indexOf(_nbs.ship_id) >= 0 && (_nbv = true), 0 == _nbv) return _nbu;
            var _nbw = _nbs.get_each_level_nums(286),
                _nbx = _nbs.get_slotnums(286);
            _nbx > 2 && (_nbx = 2), _nbu.raig = 2 * _nbx, _nbu.kaih = 1 * _nbx;
            var _nby = _nbw[10];
            if (1 == _nby ? _nbu.houg = _nbu.houg + 1 : _nby >= 2 && (_nbu.houg = _nbu.houg + 2), 30 == _nbs.ctype || 961 == _nbs.ship_id) {
                var _nbz = _nbw[5] + _nbw[6] + _nbw[7] + _nbw[8] + _nbw[9] + _nbw[10];
                1 == _nbz ? _nbu.raig = _nbu.raig + 1 : _nbz >= 2 && (_nbu.raig = _nbu.raig + 2);
            }
            return _nbu;
        }, _nbk.getSlot286PersonalEffect2 = function(_nc0) {
            var _nc1 = null,
                _nc2 = new _nbq.SlotItemEffectModel(),
                _nc3 = false,
                _nc4 = 0;
            if ('たけ' == _nc0.yomi && (_nc3 = true, _nc4 = 1), 0 == _nc3) return _nc2;
            var _nc5 = _nc0.get_each_level_nums(286),
                _nc6 = 0;
            return _nc4 > 0 && _nc5.forEach(function(_nc7, _nc8) {
                _nc8 >= 7 && (_nc6 += _nc7);
            }), 'たけ' == _nc0.yomi && (_nc2.raig += 7, _nc2.kaih += 2, _nc6 >= 1 && (_nc2.raig += 2), _nc5[10] >= 1 && (_nc2.raig += 2)), _nc2;
        }, _nbk.getSlot286PersonalEffect3 = function(_nc9) {
            var _nca = null,
                _ncb = new _nbq.SlotItemEffectModel(),
                _ncc = false,
                _ncd = new _nbq.SlotItemEffectModel(),
                _nce = 0;
            if (662 != _nc9.ship_id && 663 != _nc9.ship_id && 668 != _nc9.ship_id || (_ncd.raig += 2, _ncc = true, _nce = 1), 0 == _ncc) return _ncb;
            var _ncf = _nc9.get_slotnums(286);
            _ncb.add(_ncd.multiply(_ncf));
            for (var _ncg = 0, _nch = 0, _nci = _nc9.have_slot_ids(); _nch < _nci.length; _nch++) {
                var _ncj = _nci[_nch],
                    _nck = _nbr.default.model.slot.getMst(_ncj),
                    _ncl = _nck.equipType;
                12 != _ncl && 13 != _ncl || (_nck.sakuteki >= 5 && (_ncg += _nc9.get_slotnums(parseInt(_ncj))), _nck.taiku >= 2 && _nc9.get_slotnums(parseInt(_ncj)));
            }
            return _ncg >= 1 && 1 == _nce && (_ncb.raig += 3, _ncb.kaih += 2), _ncb;
        };
    },
    9234: (_ncm, _ncn, _nco) => {
        'use strict';
        var _ncp = null;
        defineModule(_ncn);
        Object.defineProperty(_ncn, '__esModule', {
            'value': true
        }), _ncn.getSlot287PersonalEffect = void 0;
        var _ncq = _nco(74496);
        _ncn.getSlot287PersonalEffect = function(_ncr) {
            var _ncs = null,
                _nct = new _ncq.SlotItemEffectModel(),
                _ncu = new _ncq.SlotItemEffectModel(),
                _ncv = false;
            if (488 == _ncr.ship_id || 141 == _ncr.ship_id || 160 == _ncr.ship_id || 624 == _ncr.ship_id || 656 == _ncr.ship_id ? (_ncu.tais = 1, _ncu.kaih = 1, _ncv = true) : 662 != _ncr.ship_id && 961 != _ncr.ship_id || (_ncu.tais = 3, _ncv = true), 0 == _ncv) return _nct;
            var _ncw = _ncr.get_slotnums(287);
            return _nct = _ncu.multiply(_ncw);
        };
    },
    30802: (_ncx, _ncy, _ncz) => {
        'use strict';
        var _nd0 = null;
        defineModule(_ncy);
        Object.defineProperty(_ncy, '__esModule', {
            'value': true
        }), _ncy.getSlot288PersonalEffect = void 0;
        var _nd1 = _ncz(74496);
        _ncy.getSlot288PersonalEffect = function(_nd2) {
            var _nd3 = null,
                _nd4 = new _nd1.SlotItemEffectModel(),
                _nd5 = new _nd1.SlotItemEffectModel(),
                _nd6 = false;
            if (488 == _nd2.ship_id || 141 == _nd2.ship_id || 160 == _nd2.ship_id || 656 == _nd2.ship_id ? (_nd5.tais = 2, _nd5.kaih = 1, _nd6 = true) : 624 == _nd2.ship_id ? (_nd5.houg = 1, _nd5.tais = 3, _nd5.kaih = 2, _nd6 = true) : 662 != _nd2.ship_id && 961 != _nd2.ship_id || (_nd5.tais = 4, _nd5.kaih = 1, _nd6 = true), 0 == _nd6) return _nd4;
            var _nd7 = _nd2.get_slotnums(288);
            return _nd4 = _nd5.multiply(_nd7);
        };
    },
    97002: function(_nd8, _nd9, _nda) {
        'use strict';
        var _ndb = null;
        var _ndc = this && this.__importDefault || function(_ndd) {
            var _nde = null;
            return _ndd && _ndd.__esModule ? _ndd : {
                'default': _ndd
            };
        };
        defineModule(_nd9);
        Object.defineProperty(_nd9, '__esModule', {
            'value': true
        }), _nd9.getSlot289PersonalEffect = void 0;
        var _ndf = _nda(74496),
            _ndg = _ndc(_nda(18622));
        _nd9.getSlot289PersonalEffect = function(_ndh) {
            var _ndi = null,
                _ndj = new _ndf.SlotItemEffectModel(),
                _ndk = {
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
                _ndl = 0,
                _ndm = new _ndf.SlotItemEffectModel();
            if (149 == _ndh.ship_id || 591 == _ndh.ship_id) _ndm.houg = 2, _ndm.tyku = 1, _ndl = 1;
            else {
                if (150 == _ndh.ship_id || 592 == _ndh.ship_id) _ndm.houg = 1;
                else {
                    if (152 == _ndh.ship_id || 694 == _ndh.ship_id) _ndm.houg = 1;
                    else {
                        if (151 != _ndh.ship_id && 593 != _ndh.ship_id && 954 != _ndh.ship_id) return _ndj;
                        _ndm.houg = 2, _ndm.tyku = 2, _ndm.kaih = 2, _ndl = 1;
                    }
                }
            }
            var _ndn = _ndh.get_slotnums(289);
            if (_ndj = _ndm.multiply(_ndn), _ndk[_ndh.ship_id]) {
                var _ndo = _ndh.get_each_level_nums(289),
                    _ndp = new Array();
                _ndo.forEach(function(_ndq, _ndr) {
                    var _nds = null;
                    for (var _ndt = 1; _ndt <= _ndh.SLOT_LEVEL_MAX; _ndt++) _ndr >= _ndt && (null == _ndp[_ndt] && (_ndp[_ndt] = 0), _ndp[_ndt] += _ndq);
                });
                var _ndu = _ndk[_ndh.ship_id];
                1 == _ndu ? (_ndp[1] >= 1 && (_ndj.kaih += 1 * _ndp[1]), _ndp[3] >= 1 && (_ndj.tyku = _ndj.tyku + 1 * _ndp[3]), _ndp[5] >= 1 && (_ndj.houg = _ndj.houg + 1 * _ndp[5]), _ndp[7] >= 1 && (_ndj.kaih += 1 * _ndp[7]), _ndp[8] >= 1 && (_ndj.tyku += 1 * _ndp[8]), _ndp[9] >= 1 && (_ndj.houg += 1 * _ndp[9]), _ndp[10] >= 1 && (_ndj.kaih += 1 * _ndp[10])) : 2 == _ndu ? (_ndp[4] >= 1 && (_ndj.tyku += 1 * _ndp[4]), _ndp[6] >= 1 && (_ndj.kaih += 1 * _ndp[6]), _ndp[8] >= 1 && (_ndj.houg += 1 * _ndp[8]), _ndp[10] >= 1 && (_ndj.kaih += 1 * _ndp[10])) : 3 == _ndu && (_ndp[7] >= 1 && (_ndj.tyku += 1 * _ndp[7]), _ndp[9] >= 1 && (_ndj.houg += 1 * _ndp[9]), _ndp[10] >= 1 && (_ndj.kaih += 1 * _ndp[10]));
            }
            if (0 == _ndl) return _ndj;
            for (var _ndv = 0, _ndw = 0, _ndx = _ndh.have_slot_ids(); _ndw < _ndx.length; _ndw++) {
                var _ndy = _ndx[_ndw],
                    _ndz = _ndg.default.model.slot.getMst(_ndy),
                    _ne0 = _ndz.equipType;
                (12 == _ne0 || 13 == _ne0) && _ndz.sakuteki >= 5 && (_ndv += _ndh.get_slotnums(parseInt(_ndy)));
            }
            return _ndv > 0 && (_ndj.houg += 2, _ndj.kaih += 2), _ndj;
        };
    },
    16748: function(_ne1, _ne2, _ne3) {
        'use strict';
        var _ne4 = null;
        var _ne5 = this && this.__importDefault || function(_ne6) {
            var _ne7 = null;
            return _ne6 && _ne6.__esModule ? _ne6 : {
                'default': _ne6
            };
        };
        defineModule(_ne2);
        Object.defineProperty(_ne2, '__esModule', {
            'value': true
        }), _ne2.getSlot290PersonalEffect = void 0;
        var _ne8 = _ne3(74496),
            _ne9 = _ne5(_ne3(18622));
        _ne2.getSlot290PersonalEffect = function(_nea) {
            var _neb = null,
                _nec = new _ne8.SlotItemEffectModel(),
                _ned = 0,
                _nee = new _ne8.SlotItemEffectModel();
            if (411 == _nea.ship_id) _nee.houg = 1;
            else {
                if (412 == _nea.ship_id) _nee.houg = 1;
                else {
                    if (82 == _nea.ship_id) _nee.houg = 2, _nee.tyku = 2, _nee.kaih = 1, _ned = 1;
                    else {
                        if (553 == _nea.ship_id) _nee.houg = 3, _nee.tyku = 2, _nee.kaih = 1, _nee.houm = 3, _ned = 1;
                        else {
                            if (88 == _nea.ship_id) _nee.houg = 2, _nee.tyku = 2, _nee.kaih = 1, _ned = 1;
                            else {
                                if (554 != _nea.ship_id) return _nec;
                                _nee.houg = 3, _nee.tyku = 2, _nee.kaih = 2, _nee.houm = 3, _ned = 1;
                            }
                        }
                    }
                }
            }
            var _nef = _nea.get_slotnums(290);
            if (_nec = _nee.multiply(_nef), 0 == _ned) return _nec;
            for (var _neg = 0, _neh = 0, _nei = _nea.have_slot_ids(); _neh < _nei.length; _neh++) {
                var _nej = _nei[_neh],
                    _nek = _ne9.default.model.slot.getMst(_nej),
                    _nel = _nek.equipType;
                (12 == _nel || 13 == _nel) && _nek.taiku >= 2 && (_neg += _nea.get_slotnums(parseInt(_nej)));
            }
            return _neg > 0 && (_nec.tyku += 2, _nec.kaih += 3), _nec;
        };
    },
    53618: (_nem, _nen, _neo) => {
        'use strict';
        var _nep = null;
        defineModule(_nen);
        Object.defineProperty(_nen, '__esModule', {
            'value': true
        }), _nen.getSlot291PersonalEffect = void 0;
        var _neq = _neo(74496);
        _nen.getSlot291PersonalEffect = function(_ner) {
            var _nes = null,
                _net = new _neq.SlotItemEffectModel(),
                _neu = new _neq.SlotItemEffectModel();
            if (553 == _ner.ship_id) _neu.houg = 6, _neu.kaih = 1;
            else {
                if (554 != _ner.ship_id) return _net;
                _neu.houg = 6, _neu.kaih = 1;
            }
            var _nev = _ner.get_slotnums(291);
            return _net = _neu.multiply(_nev);
        };
    },
    72573: (_new, _nex, _ney) => {
        'use strict';
        var _nez = null;
        defineModule(_nex);
        Object.defineProperty(_nex, '__esModule', {
            'value': true
        }), _nex.getSlot292PersonalEffect = void 0;
        var _nf0 = _ney(74496);
        _nex.getSlot292PersonalEffect = function(_nf1) {
            var _nf2 = null,
                _nf3 = new _nf0.SlotItemEffectModel(),
                _nf4 = new _nf0.SlotItemEffectModel();
            if (553 == _nf1.ship_id) _nf4.houg = 8, _nf4.kaih = 2, _nf4.tyku = 1;
            else {
                if (554 != _nf1.ship_id) return _nf3;
                _nf4.houg = 8, _nf4.kaih = 2, _nf4.tyku = 1;
            }
            var _nf5 = _nf1.get_slotnums(292);
            return _nf3 = _nf4.multiply(_nf5);
        };
    },
    8955: function(_nf6, _nf7, _nf8) {
        'use strict';
        var _nf9 = null;
        var _nfa = this && this.__importDefault || function(_nfb) {
            var _nfc = null;
            return _nfb && _nfb.__esModule ? _nfb : {
                'default': _nfb
            };
        };
        defineModule(_nf7);
        Object.defineProperty(_nf7, '__esModule', {
            'value': true
        }), _nf7.getSlot293PersonalEffect = void 0;
        var _nfd = _nf8(74496),
            _nfe = _nfa(_nf8(18622));
        _nf7.getSlot293PersonalEffect = function(_nff) {
            var _nfg = null,
                _nfh = new _nfd.SlotItemEffectModel(),
                _nfi = new _nfd.SlotItemEffectModel(),
                _nfj = 0;
            if (66 == _nff.ctype || 28 == _nff.ctype) _nfi.houg = 2, _nfi.tyku = 1, _nfi.kaih = 3, _nfj = 1;
            else {
                if (74 != _nff.ctype && 77 != _nff.ctype) return _nfh;
                _nfi.houg = 1, _nfi.tyku = 1, _nfi.kaih = 2, _nfj = 2;
            }
            var _nfk = _nff.get_slotnums(293);
            _nfh = _nfi.multiply(_nfk);
            for (var _nfl = 0, _nfm = 0, _nfn = _nff.have_slot_ids(); _nfm < _nfn.length; _nfm++) {
                var _nfo = _nfn[_nfm],
                    _nfp = _nfe.default.model.slot.getMst(_nfo),
                    _nfq = _nfp.equipType;
                (12 == _nfq || 13 == _nfq) && _nfp.sakuteki >= 5 && (_nfl += _nff.get_slotnums(parseInt(_nfo)));
            }
            var _nfr = _nff.get_slotnums(174);
            return 1 == _nfj ? (_nfl > 0 && (_nfh.houg += 2, _nfh.kaih += 3, _nfh.raig += 1), 1 == _nfr ? (_nfh.houg += 2, _nfh.raig += 4) : _nfr >= 2 && (_nfh.houg += 3, _nfh.raig += 7)) : 2 == _nfj && _nfl > 0 && (_nfh.houg += 2, _nfh.kaih += 3, _nfh.tais += 1), _nfh;
        };
    },
    98947: function(_nfs, _nft, _nfu) {
        'use strict';
        var _nfv = null;
        var _nfw = this && this.__importDefault || function(_nfx) {
            var _nfy = null;
            return _nfx && _nfx.__esModule ? _nfx : {
                'default': _nfx
            };
        };
        defineModule(_nft);
        Object.defineProperty(_nft, '__esModule', {
            'value': true
        }), _nft.getSlot294PersonalEffect = void 0;
        var _nfz = _nfu(74496),
            _ng0 = _nfw(_nfu(18622));
        _nft.getSlot294PersonalEffect = function(_ng1) {
            var _ng2 = null,
                _ng3 = new _nfz.SlotItemEffectModel(),
                _ng4 = new _nfz.SlotItemEffectModel(),
                _ng5 = 0,
                _ng6 = _ng1.get_slotnums(294);
            if (12 != _ng1.ctype && 1 != _ng1.ctype && 5 != _ng1.ctype) return _ng3;
            _ng4.houg = 1, 959 == _ng1.ship_id && (_ng4.houg += 1, _ng6 >= 2 && (_ng3.houg += 2), _ng6 >= 3 && (_ng3.houg += 3), _ng5 = 1), _ng3.add(_ng4.multiply(_ng6));
            for (var _ng7 = 0, _ng8 = 0, _ng9 = _ng1.have_slot_ids(); _ng8 < _ng9.length; _ng8++) {
                var _nga = _ng9[_ng8],
                    _ngb = _ng0.default.model.slot.getMst(_nga),
                    _ngc = _ngb.equipType;
                (12 == _ngc || 13 == _ngc) && _ngb.sakuteki >= 5 && (_ng7 += _ng1.get_slotnums(parseInt(_nga)));
            }
            var _ngd = _ng1.get_slotnums(13),
                _nge = _ng1.get_slotnums(125),
                _ngf = _ng1.get_slotnums(285),
                _ngg = _ngd + _nge + _ngf;
            if (_ng7 > 0 && (_ng3.houg += 3, _ng3.kaih += 2, _ng3.raig += 1), 1 == _ngg ? (_ng3.houg += 1, _ng3.raig += 3) : _ngg >= 2 && (_ng3.houg += 2, _ng3.raig += 5), _ngf >= 1 && (_ng3.raig += 1), 0 == _ng5) return _ng3;
            var _ngh = _ng1.get_each_level_nums(294),
                _ngi = [];
            return _ng5 > 0 && _ngh.forEach(function(_ngj, _ngk) {
                var _ngl = null;
                for (var _ngm = 1; _ngm <= _ng1.SLOT_LEVEL_MAX; _ngm++) null == _ngi[_ngm] && (_ngi[_ngm] = 0), _ngk >= _ngm && (_ngi[_ngm] += _ngj);
            }), 1 == _ng5 && (_ngi[6] >= 1 && (_ng3.houm += 4 * _ngi[6]), _ngi[7] >= 1 && (_ng3.houg = _ng3.houg + 6 * _ngi[7]), _ngi[8] >= 1 && (_ng3.houg = _ng3.houg + 1 * _ngi[8]), _ngi[9] >= 1 && (_ng3.houg = _ng3.houg + 1 * _ngi[9]), _ngi[10] >= 1 && (_ng3.houg += 1 * _ngi[10])), _ng3;
        };
    },
    44726: function(_ngn, _ngo, _ngp) {
        'use strict';
        var _ngq = null;
        var _ngr = this && this.__importDefault || function(_ngs) {
            var _ngt = null;
            return _ngs && _ngs.__esModule ? _ngs : {
                'default': _ngs
            };
        };
        defineModule(_ngo);
        Object.defineProperty(_ngo, '__esModule', {
            'value': true
        }), _ngo.getSlot295PersonalEffect = void 0;
        var _ngu = _ngp(74496),
            _ngv = _ngr(_ngp(18622));
        _ngo.getSlot295PersonalEffect = function(_ngw) {
            var _ngx = null,
                _ngy = new _ngu.SlotItemEffectModel(),
                _ngz = new _ngu.SlotItemEffectModel(),
                _nh0 = _ngw.get_slotnums(295);
            if (12 != _ngw.ctype && 1 != _ngw.ctype && 5 != _ngw.ctype) return _ngy;
            _ngz.houg = 2, _ngz.tyku = 2, 666 == _ngw.ship_id ? (_ngz.houg += 1, _ngz.tyku += 1, _ngz.tais += 1) : 959 == _ngw.ship_id && (_ngz.houg += 2, _nh0 >= 2 && (_ngy.houg += 2), _nh0 >= 3 && (_ngy.houg += 3)), _ngy.add(_ngz.multiply(_nh0));
            for (var _nh1 = 0, _nh2 = 0, _nh3 = 0, _nh4 = _ngw.have_slot_ids(); _nh3 < _nh4.length; _nh3++) {
                var _nh5 = _nh4[_nh3],
                    _nh6 = _ngv.default.model.slot.getMst(_nh5),
                    _nh7 = _nh6.equipType;
                12 != _nh7 && 13 != _nh7 || (_nh6.sakuteki >= 5 && (_nh1 += _ngw.get_slotnums(parseInt(_nh5))), _nh6.taiku >= 2 && (_nh2 += _ngw.get_slotnums(parseInt(_nh5))));
            }
            var _nh8 = _ngw.get_slotnums(13),
                _nh9 = _ngw.get_slotnums(125),
                _nha = _ngw.get_slotnums(285),
                _nhb = _nh8 + _nh9 + _nha;
            return _nh1 > 0 && (_ngy.houg += 3, _ngy.kaih += 2, _ngy.raig += 1), 1 == _nhb ? (_ngy.houg += 1, _ngy.raig += 3) : _nhb >= 2 && (_ngy.houg += 2, _ngy.raig += 5), _nha >= 1 && (_ngy.raig += 1), _nh2 > 0 && (_ngy.tyku += 6), _ngy;
        };
    },
    93065: function(_nhc, _nhd, _nhe) {
        'use strict';
        var _nhf = null;
        var _nhg = this && this.__importDefault || function(_nhh) {
            var _nhi = null;
            return _nhh && _nhh.__esModule ? _nhh : {
                'default': _nhh
            };
        };
        defineModule(_nhd);
        Object.defineProperty(_nhd, '__esModule', {
            'value': true
        }), _nhd.getSlot296PersonalEffect = void 0;
        var _nhj = _nhe(74496),
            _nhk = _nhg(_nhe(18622));
        _nhd.getSlot296PersonalEffect = function(_nhl) {
            var _nhm = null,
                _nhn = new _nhj.SlotItemEffectModel(),
                _nho = new _nhj.SlotItemEffectModel();
            1 != _nhl.ctype && 5 != _nhl.ctype && 10 != _nhl.ctype && 23 != _nhl.ctype || (_nho.houg += 1), 10 != _nhl.ctype && 23 != _nhl.ctype || (_nho.kaih += 1), 145 == _nhl.ship_id || 961 == _nhl.ship_id ? (_nho.houg += 1, _nho.tyku += 1) : 144 == _nhl.ship_id ? (_nho.houg += 1, _nho.raig += 1) : 469 == _nhl.ship_id || 588 == _nhl.ship_id || 667 == _nhl.ship_id || 587 == _nhl.ship_id || 242 == _nhl.ship_id ? _nho.kaih += 1 : 497 == _nhl.ship_id ? (_nho.houg += 1, _nho.kaih += 1) : 244 == _nhl.ship_id ? _nho.kaih += 1 : 498 == _nhl.ship_id || 975 == _nhl.ship_id ? (_nho.tyku += 1, _nho.kaih += 1) : 627 == _nhl.ship_id ? (_nho.houg += 2, _nho.raig += 1) : 903 != _nhl.ship_id && 908 != _nhl.ship_id || (_nho.houg += 3);
            var _nhp = true;
            if (_nho.exists() || (_nhp = false), 0 == _nhp) return _nhn;
            var _nhq = _nhl.get_slotnums(296);
            _nhn = _nho.multiply(_nhq);
            var _nhr = 0;
            if (1 != _nhl.ctype && 5 != _nhl.ctype && 10 != _nhl.ctype || (_nhr = 1), 23 == _nhl.ctype && (_nhr = 2), 0 == _nhr) return _nhn;
            for (var _nhs = 0, _nht = 0, _nhu = 0, _nhv = _nhl.have_slot_ids(); _nhu < _nhv.length; _nhu++) {
                var _nhw = _nhv[_nhu],
                    _nhx = _nhk.default.model.slot.getMst(_nhw),
                    _nhy = _nhx.equipType;
                12 != _nhy && 13 != _nhy || (_nhx.sakuteki >= 5 && (_nhs += _nhl.get_slotnums(parseInt(_nhw))), _nhx.taiku >= 2 && (_nht += _nhl.get_slotnums(parseInt(_nhw))));
            }
            return _nhs > 0 && (1 == _nhr ? (_nhn.houg += 1, _nhn.kaih += 2, _nhn.raig += 2) : 2 == _nhr && (_nhn.houg += 1, _nhn.kaih += 2, _nhn.raig += 3)), _nhl.get_slotnums(285) + _nhl.get_slotnums(125) >= 1 && 1 == _nhr && (_nhn.houg += 1, _nhn.raig += 3), _nhl.get_slotnums(15) + _nhl.get_slotnums(286) >= 1 && 2 == _nhr && (_nhn.houg += 1, _nhn.raig += 3), _nht > 0 && (1 == _nhr ? _nhn.tyku += 5 : 2 == _nhr && (_nhn.tyku += 6)), _nhn;
        };
    },
    85767: (_nhz, _ni0, _ni1) => {
        'use strict';
        var _ni2 = null;
        defineModule(_ni0);
        Object.defineProperty(_ni0, '__esModule', {
            'value': true
        }), _ni0.getSlot297PersonalEffect = void 0;
        var _ni3 = _ni1(74496);
        _ni0.getSlot297PersonalEffect = function(_ni4) {
            var _ni5 = null,
                _ni6 = new _ni3.SlotItemEffectModel(),
                _ni7 = new _ni3.SlotItemEffectModel();
            if (12 == _ni4.ctype) _ni7.kaih = 2;
            else {
                if (1 != _ni4.ctype && 5 != _ni4.ctype) return _ni6;
                _ni7.kaih = 1;
            }
            var _ni8 = _ni4.get_slotnums(297);
            return _ni6 = _ni7.multiply(_ni8);
        };
    },
    38314: (_ni9, _nia, _nib) => {
        'use strict';
        var _nic = null;
        defineModule(_nia);
        Object.defineProperty(_nia, '__esModule', {
            'value': true
        }), _nia.getSlot301PersonalEffect = void 0;
        var _nid = _nib(74496);
        _nia.getSlot301PersonalEffect = function(_nie) {
            var _nif = null,
                _nig = new _nid.SlotItemEffectModel(),
                _nih = new _nid.SlotItemEffectModel();
            67 != _nie.ctype && 78 != _nie.ctype && 82 != _nie.ctype && 88 != _nie.ctype && 108 != _nie.ctype && 112 != _nie.ctype || (_nih.tyku += 2, _nih.kaih += 1, _nih.souk += 1);
            var _nii = true;
            if (_nih.exists() || (_nii = false), 0 == _nii) return _nig;
            var _nij = _nie.get_slotnums(301);
            return _nig = _nih.multiply(_nij);
        };
    },
    59747: (_nik, _nil, _nim) => {
        'use strict';
        var _nin = null;
        defineModule(_nil);
        Object.defineProperty(_nil, '__esModule', {
            'value': true
        }), _nil.getSlot302PersonalEffect = void 0;
        var _nio = _nim(74496);
        _nil.getSlot302PersonalEffect = function(_nip) {
            var _niq = null,
                _nir = new _nio.SlotItemEffectModel(),
                _nis = new _nio.SlotItemEffectModel();
            if (76 == _nip.ctype && (_nis.tais = 1, _nis.kaih = 1), !_nis.exists()) return _nir;
            var _nit = _nip.get_slotnums(302);
            return _nir = _nis.multiply(_nit);
        };
    },
    40649: (_niu, _niv, _niw) => {
        'use strict';
        var _nix = null;
        defineModule(_niv);
        Object.defineProperty(_niv, '__esModule', {
            'value': true
        }), _niv.getSlot303PersonalEffect = void 0;
        var _niy = _niw(74496);
        _niv.getSlot303PersonalEffect = function(_niz) {
            var _nj0 = null,
                _nj1 = new _niy.SlotItemEffectModel(),
                _nj2 = new _niy.SlotItemEffectModel();
            if (16 == _niz.ctype || 4 == _niz.ctype || 20 == _niz.ctype || 41 == _niz.ctype ? (_nj2.houg = 1, _nj2.tyku = 1) : 89 == _niz.ctype && (_nj2.houg = 1, _nj2.tyku = 2, _nj2.kaih = 1), !_nj2.exists()) return _nj1;
            var _nj3 = _niz.get_slotnums(303);
            return _nj1 = _nj2.multiply(_nj3);
        };
    },
    13533: (_nj4, _nj5, _nj6) => {
        'use strict';
        var _nj7 = null;
        defineModule(_nj5);
        Object.defineProperty(_nj5, '__esModule', {
            'value': true
        }), _nj5.getSlot304PersonalEffect = void 0;
        var _nj8 = _nj6(74496);
        _nj5.getSlot304PersonalEffect = function(_nj9) {
            var _nja = null,
                _njb = new _nj8.SlotItemEffectModel(),
                _njc = new _nj8.SlotItemEffectModel();
            if (16 == _nj9.ctype || 4 == _nj9.ctype || 20 == _nj9.ctype || 41 == _nj9.ctype ? (_njc.houg = 1, _njc.tais = 1, _njc.kaih = 1) : 89 == _nj9.ctype && (_njc.houg = 1, _njc.tais = 2, _njc.kaih = 2), !_njc.exists()) return _njb;
            var _njd = _nj9.get_slotnums(304);
            return _njb = _njc.multiply(_njd);
        };
    },
    99791: (_nje, _njf, _njg) => {
        'use strict';
        var _njh = null;
        defineModule(_njf);
        Object.defineProperty(_njf, '__esModule', {
            'value': true
        }), _njf.getSlot305More320mmGunPersonalEffect = void 0;
        var _nji = _njg(74496);
        _njf.getSlot305More320mmGunPersonalEffect = function(_njj) {
            var _njk = null,
                _njl = new _nji.SlotItemEffectModel(),
                _njm = _njj.get_slotnums(426),
                _njn = _njj.get_slotnums(427),
                _njo = _njj.get_slotnums(428),
                _njp = _njj.get_slotnums(429),
                _njq = _njm + _njn + _njo + _njp;
            return 113 == _njj.ctype ? (_njl.houg = _njl.houg + 2 * _njq, _njm >= 1 && (_njl.houg = _njl.houg + 1 * _njm, _njl.kaih = _njl.kaih + 1 * _njm, (_njm >= 2 || _njn >= 1) && (_njl.houg = _njl.houg + 1, _njl.kaih = _njl.kaih + 1)), _njo >= 1 && (_njl.houg = _njl.houg + 1 * _njo, _njl.kaih = _njl.kaih + 1 * _njo, (_njo >= 2 || _njp >= 1) && (_njl.houg = _njl.houg + 2, _njl.kaih = _njl.kaih + 1))) : 73 == _njj.ctype ? (_njl.houg = _njl.houg + 1 * _njq, _njm >= 1 && (_njl.houg = _njl.houg + 1 * _njm, _njl.kaih = _njl.kaih + 1 * _njm, (_njm >= 2 || _njn >= 1) && (_njl.houg = _njl.houg + 1)), _njo >= 1 && (_njl.houg = _njl.houg + 1 * _njo, _njl.kaih = _njl.kaih + 1 * _njo, (_njo >= 2 || _njp >= 1) && (_njl.houg = _njl.houg + 1))) : 58 == _njj.ctype && _njo >= 1 && (_njl.houg = _njl.houg + 1 * _njo, _njl.kaih = _njl.kaih + 2 * _njo, (_njo >= 2 || _njp >= 1) && (_njl.houg = _njl.houg + 2, _njl.kaih = _njl.kaih + 1)), _njl;
        };
    },
    12138: (_njr, _njs, _njt) => {
        'use strict';
        var _nju = null;
        defineModule(_njs);
        Object.defineProperty(_njs, '__esModule', {
            'value': true
        }), _njs.getSlot305_And_306_PersonalEffect = void 0;
        var _njv = _njt(74496);
        _njs.getSlot305_And_306_PersonalEffect = function(_njw) {
            var _njx = null,
                _njy = new _njv.SlotItemEffectModel(),
                _njz = new _njv.SlotItemEffectModel();
            if (76 == _njw.ctype && (_njz.tais = 1, _njz.kaih = 1), 'しんよう' == _njw.yomi ? (_njz.tais += 2, _njz.kaih += 1) : 'グラーフ・ツェッペリン' != _njw.yomi && 'アクィラ' != _njw.yomi || (_njz.houg = 1, _njz.kaih = 1), !_njz.exists()) return _njy;
            var _nk0 = _njw.get_slotnums(305) + _njw.get_slotnums(306);
            return _njy = _njz.multiply(_nk0);
        };
    },
    30042: (_nk1, _nk2, _nk3) => {
        'use strict';
        var _nk4 = null;
        defineModule(_nk2);
        Object.defineProperty(_nk2, '__esModule', {
            'value': true
        }), _nk2.getSlot307PersonalEffect = void 0;
        var _nk5 = _nk3(74496);
        _nk2.getSlot307PersonalEffect = function(_nk6) {
            var _nk7 = null,
                _nk8 = new _nk5.SlotItemEffectModel(),
                _nk9 = new _nk5.SlotItemEffectModel();
            if ('アメリカ' == _nk6.getCountryName() && (_nk9.houg = 1, _nk9.tyku = 1, _nk9.kaih = 1), !_nk9.exists()) return _nk8;
            var _nka = _nk6.get_slotnums(307);
            return _nk8 = _nk9.multiply(_nka);
        };
    },
    33623: (_nkb, _nkc, _nkd) => {
        'use strict';
        var _nke = null;
        defineModule(_nkc);
        Object.defineProperty(_nkc, '__esModule', {
            'value': true
        }), _nkc.getSlot308PersonalEffect = void 0;
        var _nkf = _nkd(74496);
        _nkc.getSlot308PersonalEffect = function(_nkg) {
            var _nkh = null,
                _nki = new _nkf.SlotItemEffectModel(),
                _nkj = new _nkf.SlotItemEffectModel();
            if ('アメリカ' == _nkg.getCountryName() && (_nkj.houg = 1, _nkj.tyku = 1, _nkj.kaih = 1), 2 == _nkg.stype ? _nkj.houg += 1 : 1 == _nkg.stype && (_nkj.tyku += 1, _nkj.kaih += 1), 651 != _nkg.ship_id && 656 != _nkg.ship_id || (_nkj.houg += 1, _nkj.tyku += 1, _nkj.kaih += 1), !_nkj.exists()) return _nki;
            var _nkk = _nkg.get_slotnums(308);
            return _nki = _nkj.multiply(_nkk);
        };
    },
    17732: (_nkl, _nkm, _nkn) => {
        'use strict';
        var _nko = null;
        defineModule(_nkm);
        Object.defineProperty(_nkm, '__esModule', {
            'value': true
        }), _nkm.getSlot30_410PersonalEffect = void 0;
        var _nkp = _nkn(74496);
        _nkm.getSlot30_410PersonalEffect = function(_nkq) {
            var _nkr = null,
                _nks = new _nkp.SlotItemEffectModel();
            return 73 != _nkq.ship_id && 501 != _nkq.ship_id && 506 != _nkq.ship_id && 502 != _nkq.ship_id && 507 != _nkq.ship_id || (_nks.tyku += 3, _nks.kaih += 2, _nks.saku += 2, _nkq.get_slotnums(410) >= 1 && (_nks.tyku += 2, _nks.kaih += 2, _nks.houg += 1, _nks.souk += 1)), 54 == _nkq.ctype && (_nks.tyku += 3, _nks.kaih += 2, _nks.saku += 2, _nkq.get_slotnums(410) >= 1 && (_nks.tyku += 2, _nks.kaih += 2, _nks.houg += 1, _nks.souk += 1, 968 == _nkq.ship_id && (_nks.houg += 1, _nks.tyku += 1, _nks.kaih += 1))), _nks;
        };
    },
    85630: function(_nkt, _nku, _nkv) {
        'use strict';
        var _nkw = null;
        var _nkx = this && this.__importDefault || function(_nky) {
            var _nkz = null;
            return _nky && _nky.__esModule ? _nky : {
                'default': _nky
            };
        };
        defineModule(_nku);
        Object.defineProperty(_nku, '__esModule', {
            'value': true
        }), _nku.getSlot310PersonalEffect = void 0;
        var _nl0 = _nkv(74496),
            _nl1 = _nkx(_nkv(18622));
        _nku.getSlot310PersonalEffect = function(_nl2) {
            var _nl3 = null,
                _nl4 = new _nl0.SlotItemEffectModel(),
                _nl5 = new _nl0.SlotItemEffectModel(),
                _nl6 = new _nl0.SlotItemEffectModel();
            34 == _nl2.ctype ? (_nl5.houg += 2, _nl5.tyku += 1, _nl5.kaih += 1, _nl6.houg += 2) : 56 == _nl2.ctype ? (_nl5.houg += 2, _nl5.kaih += 1, _nl6.houg += 2, _nl6.kaih += 2) : 90 == _nl2.ctype && (_nl5.houg += 3, _nl5.raig += 2, _nl5.tyku += 1, _nl5.kaih += 1, _nl6.houg += 1, _nl6.raig += 1);
            var _nl7 = new _nl0.SlotItemEffectModel(),
                _nl8 = new _nl0.SlotItemEffectModel();
            622 != _nl2.ship_id && 623 != _nl2.ship_id && 624 != _nl2.ship_id || (_nl5.houg += 2, _nl5.kaih += 1, _nl5.tais += 1, _nl7.houg = 1, _nl7.raig = 1, _nl8.houg = 3, _nl8.kaih = 2, _nl8.raig = 2);
            var _nl9 = true;
            if (_nl5.exists() || (_nl9 = false), 0 == _nl9) return _nl4;
            var _nla = _nl2.get_slotnums(310) + _nl2.get_slotnums(518);
            _nl4 = _nl5.multiply(_nla);
            for (var _nlb = 0, _nlc = 0, _nld = 0, _nle = [310, 518]; _nld < _nle.length; _nld++) {
                var _nlf = _nle[_nld],
                    _nlg = _nl2.have_slots_dict[_nlf];
                if (null != _nlg)
                    for (var _nlh = 0, _nli = _nlg; _nlh < _nli.length; _nlh++) {
                        var _nlj = _nli[_nlh];
                        null != _nlj && (_nlj.level >= 7 && _nlb++, _nlj.level >= 10 && _nlc++);
                    }
            }
            if (_nl7.exists() && _nlb > 0 && _nl4.add(_nl7.multiply(_nlb)), _nl6.exists() && _nlc > 0 && _nl4.add(_nl6.multiply(_nlc)), _nl8.exists()) {
                for (var _nlk = 0, _nll = 0, _nlm = _nl2.have_slot_ids(); _nll < _nlm.length; _nll++) {
                    var _nln = _nlm[_nll],
                        _nlo = _nl1.default.model.slot.getMst(_nln),
                        _nlp = _nlo.equipType;
                    (12 == _nlp || 13 == _nlp) && _nlo.sakuteki >= 5 && (_nlk += _nl2.get_slotnums(parseInt(_nln)));
                }
                _nlk > 0 && _nl4.add(_nl8);
            }
            return _nl4;
        };
    },
    88736: (_nlq, _nlr, _nls) => {
        'use strict';
        var _nlt = null;
        defineModule(_nlr);
        Object.defineProperty(_nlr, '__esModule', {
            'value': true
        }), _nlr.getSlot313PersonalEffect = void 0;
        var _nlu = _nls(74496);
        _nlr.getSlot313PersonalEffect = function(_nlv) {
            var _nlw = null,
                _nlx = new _nlu.SlotItemEffectModel(),
                _nly = new _nlu.SlotItemEffectModel();
            87 != _nlv.ctype && 91 != _nlv.ctype || (_nly.houg += 2, _nly.tyku += 2, _nly.kaih += 1, _nly.souk += 1), 651 != _nlv.ship_id && 656 != _nlv.ship_id || (_nly.houg += 2, _nly.tyku += 2, _nly.kaih += 1, _nly.souk += 1);
            var _nlz = true;
            if (_nly.exists() || (_nlz = false), 0 == _nlz) return _nlx;
            var _nm0 = _nlv.get_slotnums(313);
            return _nlx = _nly.multiply(_nm0);
        };
    },
    49341: (_nm1, _nm2, _nm3) => {
        'use strict';
        var _nm4 = null;
        defineModule(_nm2);
        Object.defineProperty(_nm2, '__esModule', {
            'value': true
        }), _nm2.getSlot314PersonalEffect = void 0;
        var _nm5 = _nm3(74496);
        _nm2.getSlot314PersonalEffect = function(_nm6) {
            var _nm7 = null,
                _nm8 = new _nm5.SlotItemEffectModel(),
                _nm9 = new _nm5.SlotItemEffectModel();
            87 != _nm6.ctype && 91 != _nm6.ctype || (_nm9.houg += 1, _nm9.raig += 3);
            var _nma = true;
            if (_nm9.exists() || (_nma = false), 0 == _nma) return _nm8;
            var _nmb = _nm6.get_slotnums(314);
            return _nm8 = _nm9.multiply(_nmb);
        };
    },
    74306: (_nmc, _nmd, _nme) => {
        'use strict';
        var _nmf = null;
        defineModule(_nmd);
        Object.defineProperty(_nmd, '__esModule', {
            'value': true
        }), _nmd.getSlot315PersonalEffect = void 0;
        var _nmg = _nme(74496);
        _nmd.getSlot315PersonalEffect = function(_nmh) {
            var _nmi = null,
                _nmj = new _nmg.SlotItemEffectModel(),
                _nmk = new _nmg.SlotItemEffectModel();
            'アメリカ' == _nmh.getCountryName() && (_nmk.houg += 2, _nmk.kaih += 3, _nmk.saku += 4), 87 != _nmh.ctype && 91 != _nmh.ctype || (_nmk.houg += 1, _nmj.leng += 1), 651 != _nmh.ship_id && 656 != _nmh.ship_id || (_nmj.houg += 2, _nmj.kaih += 2, _nmj.saku += 3, _nmj.leng += 1);
            var _nml = true;
            if (_nmk.exists() || (_nml = false), 0 == _nml) return _nmj;
            var _nmm = _nmh.get_slotnums(315);
            return _nmj.add(_nmk.multiply(_nmm)), _nmj;
        };
    },
    83898: (_nmn, _nmo, _nmp) => {
        'use strict';
        var _nmq = null;
        defineModule(_nmo);
        Object.defineProperty(_nmo, '__esModule', {
            'value': true
        }), _nmo.getSlot316PersonalEffect = void 0;
        var _nmr = _nmp(74496);
        _nmo.getSlot316PersonalEffect = function(_nms) {
            var _nmt = null,
                _nmu = new _nmr.SlotItemEffectModel(),
                _nmv = new _nmr.SlotItemEffectModel();
            if (68 == _nms.ctype) {
                if (_nmv.houg += 4, _nmv.tyku += 1, _nmv.kaih += 1, !_nmv.exists()) return _nmu;
                var _nmw = _nms.get_slotnums(316);
                _nmu = _nmv.multiply(_nmw);
            }
            return _nmu;
        };
    },
    71873: (_nmx, _nmy, _nmz) => {
        'use strict';
        var _nn0 = null;
        defineModule(_nmy);
        Object.defineProperty(_nmy, '__esModule', {
            'value': true
        }), _nmy.getSlot317PersonalEffect = void 0;
        var _nn1 = _nmz(74496);
        _nmy.getSlot317PersonalEffect = function(_nn2) {
            var _nn3 = null,
                _nn4 = new _nn1.SlotItemEffectModel(),
                _nn5 = new _nn1.SlotItemEffectModel(),
                _nn6 = 0,
                _nn7 = false;
            if (6 == _nn2.ctype ? (_nn5.houg += 2, _nn5.tyku += 1, _nn6 = 1, _nn7 = true) : 2 == _nn2.ctype && (_nn5.houg += 1, _nn5.tyku += 1, _nn5.kaih += 1, _nn6 = 2, _nn7 = true), 149 == _nn2.ship_id || 591 == _nn2.ship_id || 592 == _nn2.ship_id ? (_nn5.houg += 2, _nn5.tyku += 2, _nn7 = true) : 150 == _nn2.ship_id ? (_nn5.houg += 1, _nn5.tyku += 1, _nn7 = true) : 151 == _nn2.ship_id ? (_nn5.houg += 1, _nn5.tyku += 1, _nn5.kaih += 1, _nn7 = true) : 593 == _nn2.ship_id ? (_nn5.houg += 1, _nn5.tyku += 3, _nn5.kaih += 2, _nn7 = true) : 954 == _nn2.ship_id ? (_nn5.houg += 2, _nn5.tyku += 2, _nn5.kaih += 1, _nn7 = true) : 152 == _nn2.ship_id || 694 == _nn2.ship_id ? (_nn5.houg += 2, _nn5.tyku += 1, _nn7 = true) : 541 == _nn2.ship_id ? (_nn5.houg += 1, _nn5.tyku += 2, _nn7 = true) : 573 == _nn2.ship_id && (_nn5.houg += 2, _nn5.tyku += 2, _nn5.kaih += 1, _nn7 = true), 0 == _nn7) return _nn4;
            if (_nn4.add(_nn5), 0 == _nn6) return _nn4;
            var _nn8 = _nn2.get_each_level_nums(317),
                _nn9 = [];
            return _nn6 > 0 && _nn8.forEach(function(_nna, _nnb) {
                var _nnc = null;
                for (var _nnd = 1; _nnd <= _nn2.SLOT_LEVEL_MAX; _nnd++) null == _nn9[_nnd] && (_nn9[_nnd] = 0), _nnb >= _nnd && (_nn9[_nnd] += _nna);
            }), 1 == _nn6 ? _nn9[8] >= 1 && (_nn4.houm += 1) : 2 == _nn6 && _nn8[10] >= 1 && (_nn4.houm += 1), _nn4;
        };
    },
    53122: function(_nne, _nnf, _nng) {
        'use strict';
        var _nnh = null;
        var _nni = this && this.__importDefault || function(_nnj) {
            var _nnk = null;
            return _nnj && _nnj.__esModule ? _nnj : {
                'default': _nnj
            };
        };
        defineModule(_nnf);
        Object.defineProperty(_nnf, '__esModule', {
            'value': true
        }), _nnf.getSlot318PersonalEffect = void 0;
        var _nnl = _nng(74496),
            _nnm = _nni(_nng(18622));
        _nnf.getSlot318PersonalEffect = function(_nnn) {
            var _nno = null,
                _nnp = new _nnl.SlotItemEffectModel(),
                _nnq = new _nnl.SlotItemEffectModel(),
                _nnr = new _nnl.SlotItemEffectModel(),
                _nns = new _nnl.SlotItemEffectModel();
            if (411 == _nnn.ship_id || 412 == _nnn.ship_id ? _nnq.houg += 1 : 82 == _nnn.ship_id ? (_nnq.houg += 2, _nnq.tyku += 2, _nnq.kaih += 2, _nns.tyku = 2, _nns.kaih = 3, _nns.houm = 1) : 553 == _nnn.ship_id ? (_nnq.houg += 2, _nnq.tyku += 2, _nnq.kaih += 2, _nnq.houm += 3, _nns.tyku = 2, _nns.kaih = 3, _nns.houm = 1, _nnr.kaih = 2, _nnr.souk = 1) : 88 == _nnn.ship_id ? (_nnq.houg += 2, _nnq.tyku += 2, _nnq.kaih += 2, _nns.tyku = 2, _nns.kaih = 3, _nns.houm = 1) : 541 == _nnn.ship_id || 573 == _nnn.ship_id ? (_nnq.houg += 3, _nnq.tyku += 2, _nnq.kaih += 1, _nnq.houm += 2, _nnr.houg = 2, _nnr.kaih = 2, _nnr.souk = 1, _nnr.houm = 1) : 554 == _nnn.ship_id && (_nnq.houg += 3, _nnq.tyku += 2, _nnq.kaih += 2, _nnq.houm += 3, _nns.tyku = 2, _nns.kaih = 3, _nns.houm = 1, _nnr.houg = 1, _nnr.kaih = 2, _nnr.souk = 1, _nnr.houm = 1), !_nnq.exists()) return _nnp;
            var _nnt = _nnn.get_slotnums(318);
            if (_nnp = _nnq.multiply(_nnt), !_nnr.exists() && !_nns.exists()) return _nnp;
            for (var _nnu = 0, _nnv = 0, _nnw = _nnn.have_slot_ids(); _nnv < _nnw.length; _nnv++) {
                var _nnx = _nnw[_nnv],
                    _nny = _nnm.default.model.slot.getMst(_nnx),
                    _nnz = _nny.equipType;
                (12 == _nnz || 13 == _nnz) && _nny.taiku >= 2 && (_nnu += _nnn.get_slotnums(parseInt(_nnx)));
            }
            var _no0 = _nnn.get_slotnums(290);
            return _nns.exists() && _nnu > 0 && 0 == _no0 && _nnp.add(_nns), _nnr.exists() && _no0 >= 1 && _nnp.add(_nnr), _nnp;
        };
    },
    51063: (_no1, _no2, _no3) => {
        'use strict';
        var _no4 = null;
        defineModule(_no2);
        Object.defineProperty(_no2, '__esModule', {
            'value': true
        }), _no2.getSlot319PersonalEffect = void 0;
        var _no5 = _no3(74496);
        _no2.getSlot319PersonalEffect = function(_no6) {
            var _no7 = null,
                _no8 = new _no5.SlotItemEffectModel(),
                _no9 = new _no5.SlotItemEffectModel();
            if (554 != _no6.ship_id && 553 != _no6.ship_id || (_no9.houg = 7, _no9.tyku = 3, _no9.kaih = 2), !_no9.exists()) return _no8;
            var _noa = _no6.get_slotnums(319);
            return _no8 = _no9.multiply(_noa);
        };
    },
    91491: (_nob, _noc, _nod) => {
        'use strict';
        var _noe = null;
        defineModule(_noc);
        Object.defineProperty(_noc, '__esModule', {
            'value': true
        }), _noc.getSlot320PersonalEffect = void 0;
        var _nof = _nod(74496);
        _noc.getSlot320PersonalEffect = function(_nog) {
            var _noh = null,
                _noi = new _nof.SlotItemEffectModel(),
                _noj = new _nof.SlotItemEffectModel();
            if (553 == _nog.ship_id) _noj.houg = 2;
            else {
                if (554 == _nog.ship_id) _noj.houg = 4;
                else {
                    if (196 == _nog.ship_id) _noj.houg = 3;
                    else {
                        if (197 == _nog.ship_id) _noj.houg = 3;
                        else {
                            if (508 == _nog.ship_id) _noj.houg = 4;
                            else {
                                if (509 != _nog.ship_id) return _noi;
                                _noj.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nok = _nog.get_slotnums(320);
            return _noi = _noj.multiply(_nok);
        };
    },
    85495: (_nol, _nom, _non) => {
        'use strict';
        var _noo = null;
        defineModule(_nom);
        Object.defineProperty(_nom, '__esModule', {
            'value': true
        }), _nom.getSlot322PersonalEffect = void 0;
        var _nop = _non(74496);
        _nom.getSlot322PersonalEffect = function(_noq) {
            var _nor = null,
                _nos = new _nop.SlotItemEffectModel(),
                _not = new _nop.SlotItemEffectModel();
            if (554 != _noq.ship_id && 553 != _noq.ship_id || (_not.houg = 5, _not.tyku = 2, _not.kaih = 2, _not.tais = 1), !_not.exists()) return _nos;
            var _nou = _noq.get_slotnums(322);
            return _nos = _not.multiply(_nou);
        };
    },
    65365: (_nov, _now, _nox) => {
        'use strict';
        var _noy = null;
        defineModule(_now);
        Object.defineProperty(_now, '__esModule', {
            'value': true
        }), _now.getSlot323PersonalEffect = void 0;
        var _noz = _nox(74496);
        _now.getSlot323PersonalEffect = function(_np0) {
            var _np1 = null,
                _np2 = new _noz.SlotItemEffectModel(),
                _np3 = new _noz.SlotItemEffectModel();
            if (554 != _np0.ship_id && 553 != _np0.ship_id || (_np3.houg = 6, _np3.tyku = 3, _np3.kaih = 3, _np3.tais = 2), !_np3.exists()) return _np2;
            var _np4 = _np0.get_slotnums(323);
            return _np2 = _np3.multiply(_np4);
        };
    },
    98164: (_np5, _np6, _np7) => {
        'use strict';
        var _np8 = null;
        defineModule(_np6);
        Object.defineProperty(_np6, '__esModule', {
            'value': true
        }), _np6.getSlot324And325PersonalEffect = void 0;
        var _np9 = _np7(74496);
        _np6.getSlot324And325PersonalEffect = function(_npa) {
            var _npb = null,
                _npc = new _np9.SlotItemEffectModel(),
                _npd = new _np9.SlotItemEffectModel();
            if (554 == _npa.ship_id || 646 == _npa.ship_id ? (_npd.houg = 2, _npd.tais = 3, _npd.kaih = 1) : 553 == _npa.ship_id && (_npd.houg = 1, _npd.tais = 2, _npd.kaih = 1), !_npd.exists()) return _npc;
            var _npe = _npa.get_slotnums(324) + _npa.get_slotnums(325);
            return _npc = _npd.multiply(_npe);
        };
    },
    38114: (_npf, _npg, _nph) => {
        'use strict';
        var _npi = null;
        defineModule(_npg);
        Object.defineProperty(_npg, '__esModule', {
            'value': true
        }), _npg.getSlot326PersonalEffect = void 0;
        var _npj = _nph(74496);
        _npg.getSlot326PersonalEffect = function(_npk) {
            var _npl = null,
                _npm = new _npj.SlotItemEffectModel(),
                _npn = new _npj.SlotItemEffectModel();
            if (646 == _npk.ship_id ? (_npn.houg = 3, _npn.tais = 5, _npn.kaih = 3) : 554 == _npk.ship_id ? (_npn.houg = 3, _npn.tais = 4, _npn.kaih = 2) : 553 == _npk.ship_id && (_npn.houg = 1, _npn.tais = 3, _npn.kaih = 1), !_npn.exists()) return _npm;
            var _npo = _npk.get_slotnums(326);
            return _npm = _npn.multiply(_npo);
        };
    },
    21003: (_npp, _npq, _npr) => {
        'use strict';
        var _nps = null;
        defineModule(_npq);
        Object.defineProperty(_npq, '__esModule', {
            'value': true
        }), _npq.getSlot327PersonalEffect = void 0;
        var _npt = _npr(74496);
        _npq.getSlot327PersonalEffect = function(_npu) {
            var _npv = null,
                _npw = new _npt.SlotItemEffectModel(),
                _npx = new _npt.SlotItemEffectModel();
            if (646 == _npu.ship_id ? (_npx.houg = 5, _npx.tais = 6, _npx.kaih = 4) : 554 == _npu.ship_id ? (_npx.houg = 4, _npx.tais = 5, _npx.kaih = 2) : 553 == _npu.ship_id && (_npx.houg = 2, _npx.tais = 4, _npx.kaih = 1), !_npx.exists()) return _npw;
            var _npy = _npu.get_slotnums(327);
            return _npw = _npx.multiply(_npy);
        };
    },
    77010: (_npz, _nq0, _nq1) => {
        'use strict';
        var _nq2 = null;
        defineModule(_nq0);
        Object.defineProperty(_nq0, '__esModule', {
            'value': true
        }), _nq0.getSlot328PersonalEffect = void 0;
        var _nq3 = _nq1(74496);
        _nq0.getSlot328PersonalEffect = function(_nq4) {
            var _nq5 = null,
                _nq6 = new _nq3.SlotItemEffectModel(),
                _nq7 = new _nq3.SlotItemEffectModel();
            if ('こんごう' == _nq4.yomi ? (_nq7.houg = 1, _nq7.kaih = 1, 209 == _nq4.ship_id || 149 == _nq4.ship_id ? _nq7.houg += 1 : 591 == _nq4.ship_id && (_nq7.houg += 2, _nq7.raig += 1)) : 'ひえい' == _nq4.yomi ? (_nq7.houg = 1, _nq7.kaih = 1, 210 == _nq4.ship_id || 150 == _nq4.ship_id ? _nq7.houg += 1 : 592 == _nq4.ship_id && (_nq7.houg += 2, _nq7.tyku += 1)) : 'はるな' == _nq4.yomi ? (_nq7.houg = 1, _nq7.kaih = 1, 211 == _nq4.ship_id || 151 == _nq4.ship_id ? _nq7.houg += 1 : 593 == _nq4.ship_id ? (_nq7.houg += 1, _nq7.tyku += 2) : 954 == _nq4.ship_id && (_nq7.houg += 2, _nq7.tyku += 1)) : 'きりしま' == _nq4.yomi ? (_nq7.houg = 1, _nq7.kaih = 1, 212 == _nq4.ship_id || 152 == _nq4.ship_id ? _nq7.houg += 1 : 694 == _nq4.ship_id && (_nq7.houg += 2, _nq7.tyku += 1)) : ('ふそう' == _nq4.yomi || 'やましろ' == _nq4.yomi || 'いせ' == _nq4.yomi || 'ひゅうが' == _nq4.yomi) && (_nq7.houg = 1), !_nq7.exists()) return _nq6;
            var _nq8 = _nq4.get_slotnums(328);
            return _nq6 = _nq7.multiply(_nq8);
        };
    },
    39126: (_nq9, _nqa, _nqb) => {
        'use strict';
        var _nqc = null;
        defineModule(_nqa);
        Object.defineProperty(_nqa, '__esModule', {
            'value': true
        }), _nqa.getSlot329PersonalEffect = void 0;
        var _nqd = _nqb(74496);
        _nqa.getSlot329PersonalEffect = function(_nqe) {
            var _nqf = null,
                _nqg = new _nqd.SlotItemEffectModel(),
                _nqh = new _nqd.SlotItemEffectModel();
            if ('こんごう' == _nqe.yomi ? (_nqh.houg = 1, _nqh.kaih = 1, 209 == _nqe.ship_id ? _nqh.houg += 1 : 149 == _nqe.ship_id ? (_nqh.houg += 2, _nqh.tyku += 1) : 591 == _nqe.ship_id && (_nqh.houg += 3, _nqh.tyku += 1, _nqh.raig += 2)) : 'ひえい' == _nqe.yomi ? (_nqh.houg = 1, _nqh.kaih = 1, 210 == _nqe.ship_id ? _nqh.houg += 1 : 150 == _nqe.ship_id ? (_nqh.houg += 2, _nqh.tyku += 1) : 592 == _nqe.ship_id && (_nqh.houg += 3, _nqh.tyku += 1, _nqh.raig += 2)) : 'はるな' == _nqe.yomi ? (_nqh.houg = 1, _nqh.kaih = 1, 211 == _nqe.ship_id ? _nqh.houg += 1 : 151 == _nqe.ship_id ? (_nqh.houg += 2, _nqh.tyku += 1) : 593 == _nqe.ship_id ? (_nqh.houg += 2, _nqh.tyku += 3, _nqh.raig += 1) : 954 == _nqe.ship_id && (_nqh.houg += 3, _nqh.tyku += 1, _nqh.raig += 2)) : 'きりしま' == _nqe.yomi ? (_nqh.houg = 1, _nqh.kaih = 1, 212 == _nqe.ship_id ? _nqh.houg += 1 : 152 == _nqe.ship_id ? (_nqh.houg += 2, _nqh.tyku += 1) : 694 == _nqe.ship_id && (_nqh.houg += 4, _nqh.tyku += 1, _nqh.raig += 1)) : ('ふそう' == _nqe.yomi || 'やましろ' == _nqe.yomi || 'いせ' == _nqe.yomi || 'ひゅうが' == _nqe.yomi) && (_nqh.houg = 1), !_nqh.exists()) return _nqg;
            var _nqi = _nqe.get_slotnums(329);
            return _nqg = _nqh.multiply(_nqi);
        };
    },
    72176: (_nqj, _nqk, _nql) => {
        'use strict';
        var _nqm = null;
        defineModule(_nqk);
        Object.defineProperty(_nqk, '__esModule', {
            'value': true
        }), _nqk.getSlot335PersonalEffect = void 0;
        var _nqn = _nql(74496);
        _nqk.getSlot335PersonalEffect = function(_nqo) {
            var _nqp = null,
                _nqq = new _nqn.SlotItemEffectModel(),
                _nqr = new _nqn.SlotItemEffectModel();
            if (277 == _nqo.ship_id || 278 == _nqo.ship_id ? (_nqr.tyku = 1, _nqr.kaih = 1) : 594 != _nqo.ship_id && 599 != _nqo.ship_id && 610 != _nqo.ship_id && 646 != _nqo.ship_id && 698 != _nqo.ship_id || (_nqr.tyku = 2, _nqr.kaih = 1), !_nqr.exists()) return _nqq;
            var _nqs = _nqo.get_slotnums(335);
            return _nqq = _nqr.multiply(_nqs);
        };
    },
    33846: (_nqt, _nqu, _nqv) => {
        'use strict';
        var _nqw = null;
        defineModule(_nqu);
        Object.defineProperty(_nqu, '__esModule', {
            'value': true
        }), _nqu.getSlot336PersonalEffect = void 0;
        var _nqx = _nqv(74496);
        _nqu.getSlot336PersonalEffect = function(_nqy) {
            var _nqz = null,
                _nr0 = new _nqx.SlotItemEffectModel(),
                _nr1 = new _nqx.SlotItemEffectModel();
            if (277 == _nqy.ship_id || 278 == _nqy.ship_id ? (_nr1.houg = 1, _nr1.tyku = 1, _nr1.kaih = 1) : 594 != _nqy.ship_id && 599 != _nqy.ship_id && 610 != _nqy.ship_id && 646 != _nqy.ship_id && 698 != _nqy.ship_id || (_nr1.houg = 1, _nr1.tyku = 2, _nr1.kaih = 1), !_nr1.exists()) return _nr0;
            var _nr2 = _nqy.get_slotnums(336);
            return _nr0 = _nr1.multiply(_nr2);
        };
    },
    97157: (_nr3, _nr4, _nr5) => {
        'use strict';
        var _nr6 = null;
        defineModule(_nr4);
        Object.defineProperty(_nr4, '__esModule', {
            'value': true
        }), _nr4.getSlot337PersonalEffect = void 0;
        var _nr7 = _nr5(74496);
        _nr4.getSlot337PersonalEffect = function(_nr8) {
            var _nr9 = null,
                _nra = new _nr7.SlotItemEffectModel(),
                _nrb = new _nr7.SlotItemEffectModel();
            if (277 == _nr8.ship_id || 278 == _nr8.ship_id ? (_nrb.houg = 1, _nrb.tyku = 1, _nrb.kaih = 1) : 594 != _nr8.ship_id && 599 != _nr8.ship_id && 610 != _nr8.ship_id && 646 != _nr8.ship_id && 698 != _nr8.ship_id || (_nrb.houg = 2, _nrb.tyku = 2, _nrb.kaih = 1), !_nrb.exists()) return _nra;
            var _nrc = _nr8.get_slotnums(337);
            return _nra = _nrb.multiply(_nrc);
        };
    },
    63406: (_nrd, _nre, _nrf) => {
        'use strict';
        var _nrg = null;
        defineModule(_nre);
        Object.defineProperty(_nre, '__esModule', {
            'value': true
        }), _nre.getSlot338PersonalEffect = void 0;
        var _nrh = _nrf(74496);
        _nre.getSlot338PersonalEffect = function(_nri) {
            var _nrj = null,
                _nrk = new _nrh.SlotItemEffectModel(),
                _nrl = new _nrh.SlotItemEffectModel();
            if (277 == _nri.ship_id || 278 == _nri.ship_id ? (_nrl.houg = 1, _nrl.tyku = 1, _nrl.kaih = 2) : 594 == _nri.ship_id || 646 == _nri.ship_id || 698 == _nri.ship_id ? (_nrl.houg = 1, _nrl.tyku = 2, _nrl.kaih = 3) : 599 != _nri.ship_id && 610 != _nri.ship_id || (_nrl.houg = 4, _nrl.tyku = 3, _nrl.kaih = 4), !_nrl.exists()) return _nrk;
            var _nrm = _nri.get_slotnums(338);
            return _nrk = _nrl.multiply(_nrm);
        };
    },
    66373: (_nrn, _nro, _nrp) => {
        'use strict';
        var _nrq = null;
        defineModule(_nro);
        Object.defineProperty(_nro, '__esModule', {
            'value': true
        }), _nro.getSlot339PersonalEffect = void 0;
        var _nrr = _nrp(74496);
        _nro.getSlot339PersonalEffect = function(_nrs) {
            var _nrt = null,
                _nru = new _nrr.SlotItemEffectModel(),
                _nrv = new _nrr.SlotItemEffectModel();
            if (277 == _nrs.ship_id || 278 == _nrs.ship_id ? (_nrv.houg = 1, _nrv.tyku = 2, _nrv.kaih = 2) : 594 == _nrs.ship_id || 646 == _nrs.ship_id || 698 == _nrs.ship_id ? (_nrv.houg = 1, _nrv.tyku = 3, _nrv.kaih = 4) : 599 != _nrs.ship_id && 610 != _nrs.ship_id || (_nrv.houg = 6, _nrv.tyku = 4, _nrv.kaih = 5), !_nrv.exists()) return _nru;
            var _nrw = _nrs.get_slotnums(339);
            return _nru = _nrv.multiply(_nrw);
        };
    },
    19707: (_nrx, _nry, _nrz) => {
        'use strict';
        var _ns0 = null;
        defineModule(_nry);
        Object.defineProperty(_nry, '__esModule', {
            'value': true
        }), _nry.getSlot340PersonalEffect = void 0;
        var _ns1 = _nrz(74496);
        _nry.getSlot340PersonalEffect = function(_ns2) {
            var _ns3 = null,
                _ns4 = new _ns1.SlotItemEffectModel(),
                _ns5 = new _ns1.SlotItemEffectModel();
            if ('ガリバルディ' != _ns2.yomi && 'アブルッツィ' != _ns2.yomi || (_ns5.houg = 1, _ns5.tyku = 1, _ns5.kaih = 1), !_ns5.exists()) return _ns4;
            var _ns6 = _ns2.get_slotnums(340);
            return _ns4 = _ns5.multiply(_ns6);
        };
    },
    63978: (_ns7, _ns8, _ns9) => {
        'use strict';
        var _nsa = null;
        defineModule(_ns8);
        Object.defineProperty(_ns8, '__esModule', {
            'value': true
        }), _ns8.getSlot341PersonalEffect = void 0;
        var _nsb = _ns9(74496);
        _ns8.getSlot341PersonalEffect = function(_nsc) {
            var _nsd = null,
                _nse = new _nsb.SlotItemEffectModel(),
                _nsf = new _nsb.SlotItemEffectModel();
            if ('ガリバルディ' == _nsc.yomi || 'アブルッツィ' == _nsc.yomi ? (_nsf.houg = 2, _nsf.tyku = 1, _nsf.kaih = 1) : 'ゴトランド' == _nsc.yomi && (_nsf.houg = 1, _nsf.tyku = 1, _nsf.kaih = 1), !_nsf.exists()) return _nse;
            var _nsg = _nsc.get_slotnums(341);
            return _nse = _nsf.multiply(_nsg);
        };
    },
    92382: (_nsh, _nsi, _nsj) => {
        'use strict';
        var _nsk = null;
        defineModule(_nsi);
        Object.defineProperty(_nsi, '__esModule', {
            'value': true
        }), _nsi.getSlot342PersonalEffect = void 0;
        var _nsl = _nsj(74496);
        _nsi.getSlot342PersonalEffect = function(_nsm) {
            var _nsn = null,
                _nso = new _nsl.SlotItemEffectModel(),
                _nsp = new _nsl.SlotItemEffectModel();
            if (277 == _nsm.ship_id || 278 == _nsm.ship_id || 461 == _nsm.ship_id || 466 == _nsm.ship_id || 462 == _nsm.ship_id || 467 == _nsm.ship_id ? _nsp.houg = 1 : 594 == _nsm.ship_id || 646 == _nsm.ship_id || 698 == _nsm.ship_id ? (_nsp.houg = 2, _nsp.tyku = 1, _nsp.kaih = 1) : 599 != _nsm.ship_id && 610 != _nsm.ship_id || (_nsp.houg = 3, _nsp.tyku = 2, _nsp.kaih = 2), !_nsp.exists()) return _nso;
            var _nsq = _nsm.get_slotnums(342);
            return _nso = _nsp.multiply(_nsq);
        };
    },
    78415: (_nsr, _nss, _nst) => {
        'use strict';
        var _nsu = null;
        defineModule(_nss);
        Object.defineProperty(_nss, '__esModule', {
            'value': true
        }), _nss.getSlot343PersonalEffect = void 0;
        var _nsv = _nst(74496);
        _nss.getSlot343PersonalEffect = function(_nsw) {
            var _nsx = null,
                _nsy = new _nsv.SlotItemEffectModel(),
                _nsz = new _nsv.SlotItemEffectModel();
            if (277 == _nsw.ship_id || 278 == _nsw.ship_id ? _nsz.houg = 2 : 461 == _nsw.ship_id || 466 == _nsw.ship_id || 462 == _nsw.ship_id || 467 == _nsw.ship_id ? _nsz.houg = 1 : 594 == _nsw.ship_id || 646 == _nsw.ship_id || 698 == _nsw.ship_id ? (_nsz.houg = 3, _nsz.tyku = 2, _nsz.kaih = 1) : 599 != _nsw.ship_id && 610 != _nsw.ship_id || (_nsz.houg = 5, _nsz.tyku = 3, _nsz.kaih = 3), !_nsz.exists()) return _nsy;
            var _nt0 = _nsw.get_slotnums(343);
            return _nsy = _nsz.multiply(_nt0);
        };
    },
    23090: (_nt1, _nt2, _nt3) => {
        'use strict';
        var _nt4 = null;
        defineModule(_nt2);
        Object.defineProperty(_nt2, '__esModule', {
            'value': true
        }), _nt2.getSlot344PersonalEffect = void 0;
        var _nt5 = _nt3(74496);
        _nt2.getSlot344PersonalEffect = function(_nt6) {
            var _nt7 = null,
                _nt8 = new _nt5.SlotItemEffectModel(),
                _nt9 = new _nt5.SlotItemEffectModel();
            if (599 == _nt6.ship_id || 610 == _nt6.ship_id ? _nt9.houg = 3 : 555 == _nt6.ship_id || 560 == _nt6.ship_id ? (_nt9.houg = 2, _nt9.tais = 2) : 318 == _nt6.ship_id ? (_nt9.houg = 4, _nt9.tais = 1) : 282 == _nt6.ship_id ? (_nt9.houg = 2, _nt9.tais = 1) : 888 == _nt6.ship_id ? (_nt9.houg = 4, _nt9.tais = 2) : 883 == _nt6.ship_id && (_nt9.houg = 5, _nt9.tais = 2), !_nt9.exists()) return _nt8;
            var _nta = _nt6.get_slotnums(344);
            return _nt8 = _nt9.multiply(_nta);
        };
    },
    18776: (_ntb, _ntc, _ntd) => {
        'use strict';
        var _nte = null;
        defineModule(_ntc);
        Object.defineProperty(_ntc, '__esModule', {
            'value': true
        }), _ntc.getSlot345PersonalEffect = void 0;
        var _ntf = _ntd(74496);
        _ntc.getSlot345PersonalEffect = function(_ntg) {
            var _nth = null,
                _nti = new _ntf.SlotItemEffectModel(),
                _ntj = new _ntf.SlotItemEffectModel();
            if (599 == _ntg.ship_id || 610 == _ntg.ship_id ? (_ntj.houg = 3, _ntj.kaih = 1) : 555 == _ntg.ship_id || 560 == _ntg.ship_id ? (_ntj.houg = 3, _ntj.tais = 2, _ntj.kaih = 2) : 318 == _ntg.ship_id ? (_ntj.houg = 5, _ntj.tais = 1, _ntj.kaih = 2) : 282 == _ntg.ship_id ? (_ntj.houg = 3, _ntj.tais = 1, _ntj.kaih = 1) : 888 == _ntg.ship_id ? (_ntj.houg = 4, _ntj.tais = 2, _ntj.kaih = 2) : 883 == _ntg.ship_id && (_ntj.houg = 5, _ntj.tais = 2, _ntj.kaih = 3), !_ntj.exists()) return _nti;
            var _ntk = _ntg.get_slotnums(345);
            return _nti = _ntj.multiply(_ntk);
        };
    },
    89058: (_ntl, _ntm, _ntn) => {
        'use strict';
        var _nto = null;
        defineModule(_ntm);
        Object.defineProperty(_ntm, '__esModule', {
            'value': true
        }), _ntm.getSlot346PersonalEffect = void 0;
        var _ntp = _ntn(74496);
        _ntm.getSlot346PersonalEffect = function(_ntq) {
            var _ntr = null,
                _nts = new _ntp.SlotItemEffectModel();
            return 'やましおまる' == _ntq.yomi && (_nts.kaih += 1, _nts.tais += 1), _nts;
        };
    },
    84372: (_ntt, _ntu, _ntv) => {
        'use strict';
        var _ntw = null;
        defineModule(_ntu);
        Object.defineProperty(_ntu, '__esModule', {
            'value': true
        }), _ntu.getSlot347PersonalEffect = void 0;
        var _ntx = _ntv(74496);
        _ntu.getSlot347PersonalEffect = function(_nty) {
            var _ntz = null,
                _nu0 = new _ntx.SlotItemEffectModel();
            return 'やましおまる' == _nty.yomi && (_nu0.kaih += 2, _nu0.tais += 2), _nu0;
        };
    },
    39656: (_nu1, _nu2, _nu3) => {
        'use strict';
        var _nu4 = null;
        defineModule(_nu2);
        Object.defineProperty(_nu2, '__esModule', {
            'value': true
        }), _nu2.getSlot356_357PersonalEffect = void 0;
        var _nu5 = _nu3(74496);
        _nu2.getSlot356_357PersonalEffect = function(_nu6) {
            var _nu7 = null,
                _nu8 = new _nu5.SlotItemEffectModel(),
                _nu9 = new _nu5.SlotItemEffectModel();
            if (95 == _nu6.ctype ? _nu9.houg = 2 : 9 == _nu6.ctype && (_nu9.houg = 1), !_nu9.exists()) return _nu8;
            var _nua = _nu6.get_slotnums(356) + _nu6.get_slotnums(357);
            return _nu8 = _nu9.multiply(_nua);
        };
    },
    66039: (_nub, _nuc, _nud) => {
        'use strict';
        var _nue = null;
        defineModule(_nuc);
        Object.defineProperty(_nuc, '__esModule', {
            'value': true
        }), _nuc.getSlot358PersonalEffect = void 0;
        var _nuf = _nud(74496);
        _nuc.getSlot358PersonalEffect = function(_nug) {
            var _nuh = null,
                _nui = new _nuf.SlotItemEffectModel(),
                _nuj = new _nuf.SlotItemEffectModel();
            if ('アメリカ' != _nug.getCountryName() && 67 != _nug.ctype && 78 != _nug.ctype && 82 != _nug.ctype && 88 != _nug.ctype && 108 != _nug.ctype && 112 != _nug.ctype) return _nui;
            _nuj.houg += 1, _nuj.kaih += 1, _nuj.tyku += 1, 95 == _nug.ctype && (_nuj.houg += 1, _nuj.kaih += 2, _nuj.tyku += 2);
            var _nuk = _nug.get_slotnums(358);
            return _nui = _nuj.multiply(_nuk);
        };
    },
    64679: (_nul, _num, _nun) => {
        'use strict';
        var _nuo = null;
        defineModule(_num);
        Object.defineProperty(_num, '__esModule', {
            'value': true
        }), _num.getSlot359PersonalEffect = void 0;
        var _nup = _nun(74496);
        _num.getSlot359PersonalEffect = function(_nuq) {
            var _nur = null,
                _nus = new _nup.SlotItemEffectModel(),
                _nut = new _nup.SlotItemEffectModel();
            if ('パース' == _nuq.yomi ? (_nut.houg = 2, _nut.tyku = 2, _nut.kaih = 1) : 'ゆうばり' == _nuq.yomi && (_nut.houg = 1, _nut.tyku = 1, _nut.kaih = 1), 622 != _nuq.ship_id && 623 != _nuq.ship_id && 624 != _nuq.ship_id || (_nut.houg += 1, _nut.tyku += 1), !_nut.exists()) return _nus;
            var _nuu = _nuq.get_slotnums(359);
            return _nus = _nut.multiply(_nuu);
        };
    },
    69954: (_nuv, _nuw, _nux) => {
        'use strict';
        var _nuy = null;
        defineModule(_nuw);
        Object.defineProperty(_nuw, '__esModule', {
            'value': true
        }), _nuw.getSlot35PersonalEffect = void 0;
        var _nuz = _nux(74496);
        _nuw.getSlot35PersonalEffect = function(_nv0) {
            var _nv1 = null,
                _nv2 = new _nuz.SlotItemEffectModel(),
                _nv3 = new _nuz.SlotItemEffectModel();
            return 149 == _nv0.ship_id || 591 == _nv0.ship_id || 592 == _nv0.ship_id || 694 == _nv0.ship_id ? (_nv3.houg += 1, _nv3.tyku += 1) : 150 == _nv0.ship_id ? _nv3.tyku += 1 : 151 == _nv0.ship_id || 593 == _nv0.ship_id || 954 == _nv0.ship_id ? (_nv3.tyku += 1, _nv3.kaih += 1) : 152 == _nv0.ship_id && (_nv3.houg += 1), _nv3.exists() ? _nv2 = _nv3.multiply(1) : _nv2;
        };
    },
    95953: (_nv4, _nv5, _nv6) => {
        'use strict';
        var _nv7 = null;
        defineModule(_nv5);
        Object.defineProperty(_nv5, '__esModule', {
            'value': true
        }), _nv5.getSlot360_361PersonalEffect = void 0;
        var _nv8 = _nv6(74496);
        _nv5.getSlot360_361PersonalEffect = function(_nv9) {
            var _nva = null,
                _nvb = new _nv8.SlotItemEffectModel(),
                _nvc = new _nv8.SlotItemEffectModel();
            if ('デ・ロイテル' == _nv9.yomi ? (_nvc.houg = 2, _nvc.tyku = 2, _nvc.kaih = 1) : 'ゴトランド' == _nv9.yomi && (_nvc.houg = 2, _nvc.tyku = 1, _nvc.kaih = 1), 41 == _nv9.ctype && (_nvc.houg = 1, _nvc.tyku = 1), !_nvc.exists()) return _nvb;
            var _nvd = _nv9.get_slotnums(360) + _nv9.get_slotnums(361);
            return _nvb = _nvc.multiply(_nvd);
        };
    },
    86384: (_nve, _nvf, _nvg) => {
        'use strict';
        var _nvh = null;
        defineModule(_nvf);
        Object.defineProperty(_nvf, '__esModule', {
            'value': true
        }), _nvf.getSlot362_363PersonalEffect = void 0;
        var _nvi = _nvg(74496);
        _nvf.getSlot362_363PersonalEffect = function(_nvj) {
            var _nvk = null,
                _nvl = new _nvi.SlotItemEffectModel(),
                _nvm = new _nvi.SlotItemEffectModel(),
                _nvn = false;
            if (99 == _nvj.ctype ? (_nvm.houg = 1, _nvm.tyku = 2, _nvm.kaih = 1, _nvn = true) : 34 == _nvj.ctype || 21 == _nvj.ctype ? (_nvm.houg = -3, _nvm.tyku = -3, _nvm.kaih = -8, _nvn = true) : 4 == _nvj.ctype || 20 == _nvj.ctype || 16 == _nvj.ctype ? (_nvm.houg = -3, _nvm.tyku = -2, _nvm.kaih = -6, _nvn = true) : 89 == _nvj.ctype || 56 == _nvj.ctype ? (_nvm.houg = -2, _nvm.tyku = -1, _nvm.kaih = -4, _nvn = true) : 52 != _nvj.ctype && 41 != _nvj.ctype && 98 != _nvj.ctype || (_nvm.tyku = -1, _nvm.kaih = -2, _nvn = true), 'アメリカ' == _nvj.getCountryName() && (_nvm.tyku += 1, _nvm.kaih += 1, _nvn = true), 0 == _nvn) return _nvl;
            var _nvo = _nvj.get_slotnums(362) + _nvj.get_slotnums(363);
            return _nvl = _nvm.multiply(_nvo);
        };
    },
    65345: (_nvp, _nvq, _nvr) => {
        'use strict';
        var _nvs = null;
        defineModule(_nvq);
        Object.defineProperty(_nvq, '__esModule', {
            'value': true
        }), _nvq.getSlot364PersonalEffect = void 0;
        var _nvt = _nvr(74496);
        _nvq.getSlot364PersonalEffect = function(_nvu) {
            var _nvv = null;
            new _nvt.SlotItemEffectModel();
            var _nvw = new _nvt.SlotItemEffectModel();
            623 == _nvu.ship_id || 586 == _nvu.ship_id || 119 == _nvu.ship_id || 118 == _nvu.ship_id || 657 == _nvu.ship_id || 506 == _nvu.ship_id || 668 == _nvu.ship_id || 507 == _nvu.ship_id ? (_nvw.raig = 1, _nvw.kaih = -2, 119 == _nvu.ship_id ? _nvw.raig += 1 : 507 == _nvu.ship_id ? _nvw.raig += 2 : 623 == _nvu.ship_id && (_nvw.houg += 1, _nvw.raig += 3)) : (_nvw.houg = -1, _nvw.kaih = -7);
            var _nvx = _nvu.get_slotnums(364);
            return _nvw.multiply(_nvx);
        };
    },
    46514: (_nvy, _nvz, _nw0) => {
        'use strict';
        var _nw1 = null;
        defineModule(_nvz);
        Object.defineProperty(_nvz, '__esModule', {
            'value': true
        }), _nvz.getSlot365PersonalEffect = void 0;
        var _nw2 = _nw0(74496);
        _nvz.getSlot365PersonalEffect = function(_nw3) {
            var _nw4 = null,
                _nw5 = new _nw2.SlotItemEffectModel(),
                _nw6 = new _nw2.SlotItemEffectModel(),
                _nw7 = false;
            return 37 != _nw3.ctype && 19 != _nw3.ctype && 2 != _nw3.ctype && 26 != _nw3.ctype && 6 != _nw3.ctype || (_nw6.houg += 1, _nw7 = true), 136 != _nw3.ship_id && 148 != _nw3.ship_id && 546 != _nw3.ship_id && 541 != _nw3.ship_id && 573 != _nw3.ship_id && 911 != _nw3.ship_id && 916 != _nw3.ship_id && 593 != _nw3.ship_id || (_nw6.houg += 1, _nw7 = true), 591 != _nw3.ship_id && 592 != _nw3.ship_id && 954 != _nw3.ship_id && 694 != _nw3.ship_id || (_nw6.houg += 2, _nw7 = true), 0 == _nw7 ? _nw5 : _nw5 = _nw6.multiply(1);
        };
    },
    81976: (_nw8, _nw9, _nwa) => {
        'use strict';
        var _nwb = null;
        defineModule(_nw9);
        Object.defineProperty(_nw9, '__esModule', {
            'value': true
        }), _nw9.getSlot367PersonalEffect = void 0;
        var _nwc = _nwa(74496);
        _nw9.getSlot367PersonalEffect = function(_nwd) {
            var _nwe = null,
                _nwf = new _nwc.SlotItemEffectModel(),
                _nwg = new _nwc.SlotItemEffectModel(),
                _nwh = false;
            if ('ゴトランド' == _nwd.yomi && (_nwg.houg += 2, _nwg.tais += 1, _nwg.kaih += 1, _nwg.saku += 1, _nwh = true), 70 == _nwd.ctype ? (_nwg.houg += 1, _nwg.tais += 1, _nwg.kaih += 1, _nwg.saku += 1, _nwh = true) : 72 == _nwd.ctype || 62 == _nwd.ctype ? (_nwg.houg += 1, _nwg.kaih += 1, _nwg.saku += 1, _nwh = true) : 67 != _nwd.ctype && 78 != _nwd.ctype && 82 != _nwd.ctype && 88 != _nwd.ctype && 108 != _nwd.ctype && 112 != _nwd.ctype || (_nwg.houg += 2, _nwg.kaih += 2, _nwg.saku += 2, _nwh = true), 0 == _nwh) return _nwf;
            var _nwi = _nwd.get_slotnums(367);
            return _nwf = _nwg.multiply(_nwi);
        };
    },
    89331: (_nwj, _nwk, _nwl) => {
        'use strict';
        var _nwm = null;
        defineModule(_nwk);
        Object.defineProperty(_nwk, '__esModule', {
            'value': true
        }), _nwk.getSlot368PersonalEffect = void 0;
        var _nwn = _nwl(74496);
        _nwk.getSlot368PersonalEffect = function(_nwo) {
            var _nwp = null,
                _nwq = new _nwn.SlotItemEffectModel(),
                _nwr = new _nwn.SlotItemEffectModel(),
                _nws = false;
            if ('ゴトランド' == _nwo.yomi && (_nwr.houg = 4, _nwr.tais = 3, _nwr.kaih = 2, _nwr.saku = 3, _nws = true, 630 == _nwo.ship_id && (_nwq.houg += 2, _nwq.raig += 2, _nwq.kaih += 1, _nwq.saku += 1)), 70 == _nwo.ctype ? (_nwr.houg = 2, _nwr.tais = 3, _nwr.kaih = 1, _nwr.saku = 2, _nws = true) : 72 == _nwo.ctype || 62 == _nwo.ctype ? (_nwr.houg += 1, _nwr.tais += 2, _nwr.kaih += 1, _nwr.saku += 2, _nws = true) : 67 != _nwo.ctype && 78 != _nwo.ctype && 82 != _nwo.ctype && 88 != _nwo.ctype && 108 != _nwo.ctype && 112 != _nwo.ctype || (_nwr.houg += 2, _nwr.tais += 2, _nwr.kaih += 2, _nwr.saku += 2, _nws = true), 0 == _nws) return _nwq;
            var _nwt = _nwo.get_slotnums(368);
            return _nwq.add(_nwr.multiply(_nwt)), _nwq;
        };
    },
    73973: (_nwu, _nwv, _nww) => {
        'use strict';
        var _nwx = null;
        defineModule(_nwv);
        Object.defineProperty(_nwv, '__esModule', {
            'value': true
        }), _nwv.getSlot369PersonalEffect = void 0;
        var _nwy = _nww(74496);
        _nwv.getSlot369PersonalEffect = function(_nwz) {
            var _nx0 = null,
                _nx1 = new _nwy.SlotItemEffectModel(),
                _nx2 = new _nwy.SlotItemEffectModel(),
                _nx3 = false;
            if ('ゴトランド' == _nwz.yomi && (_nx2.houg = 5, _nx2.tais = 4, _nx2.kaih = 4, _nx2.saku = 3, _nx3 = true, 630 == _nwz.ship_id && (_nx1.houg += 3, _nx1.raig += 3, _nx1.kaih += 2, _nx1.saku += 2)), 70 == _nwz.ctype ? (_nx2.houg += 3, _nx2.tais += 3, _nx2.kaih += 2, _nx2.saku += 3, _nx3 = true) : 72 == _nwz.ctype || 62 == _nwz.ctype ? (_nx2.houg += 2, _nx2.tais += 2, _nx2.kaih += 1, _nx2.saku += 2, _nx3 = true) : 67 != _nwz.ctype && 78 != _nwz.ctype && 82 != _nwz.ctype && 88 != _nwz.ctype && 108 != _nwz.ctype && 112 != _nwz.ctype || (_nx2.houg += 2, _nx2.tais += 2, _nx2.kaih += 2, _nx2.saku += 2, _nx3 = true), 0 == _nx3) return _nx1;
            var _nx4 = _nwz.get_slotnums(369);
            return _nx1.add(_nx2.multiply(_nx4)), _nx1;
        };
    },
    21178: (_nx5, _nx6, _nx7) => {
        'use strict';
        var _nx8 = null;
        defineModule(_nx6);
        Object.defineProperty(_nx6, '__esModule', {
            'value': true
        }), _nx6.getSlot370PersonalEffect = void 0;
        var _nx9 = _nx7(74496);
        _nx6.getSlot370PersonalEffect = function(_nxa) {
            var _nxb = null,
                _nxc = new _nx9.SlotItemEffectModel(),
                _nxd = new _nx9.SlotItemEffectModel(),
                _nxe = false;
            if ('ゴトランド' == _nxa.yomi && (_nxd.houg = 1, _nxd.tais = 3, _nxd.kaih = 1, _nxd.saku = 2, _nxe = true), 70 == _nxa.ctype ? (_nxd.houg += 1, _nxd.tais += 3, _nxd.kaih += 1, _nxd.saku += 1, _nxe = true) : 72 == _nxa.ctype || 62 == _nxa.ctype ? (_nxd.houg += 1, _nxd.tais += 2, _nxd.kaih += 1, _nxd.saku += 1, _nxe = true) : 67 != _nxa.ctype && 78 != _nxa.ctype && 82 != _nxa.ctype && 88 != _nxa.ctype && 108 != _nxa.ctype && 112 != _nxa.ctype || (_nxd.houg += 2, _nxd.tais += 3, _nxd.kaih += 2, _nxd.saku += 2, _nxe = true, 'ウォースパイト' == _nxa.yomi ? (_nxc.houg += 4, _nxc.kaih += 1, _nxc.saku += 1) : 'ヴァリアント' == _nxa.yomi && (_nxc.houg += 3, _nxc.kaih += 2, _nxc.saku += 1)), 0 == _nxe) return _nxc;
            var _nxf = _nxa.get_slotnums(370);
            return _nxc.add(_nxd.multiply(_nxf)), _nxc;
        };
    },
    5079: (_nxg, _nxh, _nxi) => {
        'use strict';
        var _nxj = null;
        defineModule(_nxh);
        Object.defineProperty(_nxh, '__esModule', {
            'value': true
        }), _nxh.getSlot371PersonalEffect = void 0;
        var _nxk = _nxi(74496);
        _nxh.getSlot371PersonalEffect = function(_nxl) {
            var _nxm = null,
                _nxn = new _nxk.SlotItemEffectModel(),
                _nxo = new _nxk.SlotItemEffectModel(),
                _nxp = false;
            if ('ゴトランド' == _nxl.yomi && (_nxo.houg = 4, _nxo.tais = 2, _nxo.kaih = 3, _nxo.saku = 6, _nxp = true, 630 == _nxl.ship_id && (_nxn.houg += 2, _nxn.kaih += 2, _nxn.saku += 3)), 70 == _nxl.ctype ? (_nxo.houg += 2, _nxo.tais += 1, _nxo.kaih += 2, _nxo.saku += 4, _nxp = true) : 79 == _nxl.ctype ? (_nxo.houg += 2, _nxo.kaih += 1, _nxo.saku += 3, _nxp = true) : 67 != _nxl.ctype && 78 != _nxl.ctype && 82 != _nxl.ctype && 88 != _nxl.ctype && 108 != _nxl.ctype && 112 != _nxl.ctype || (_nxo.houg += 3, _nxo.tais += 1, _nxo.kaih += 2, _nxo.saku += 3, _nxp = true, 88 == _nxl.ctype && (_nxn.houg += 3, _nxn.kaih += 2, _nxn.saku += 2)), 0 == _nxp) return _nxn;
            var _nxq = _nxl.get_slotnums(371);
            return _nxn.add(_nxo.multiply(_nxq)), _nxn;
        };
    },
    95014: (_nxr, _nxs, _nxt) => {
        'use strict';
        var _nxu = null;
        defineModule(_nxs);
        Object.defineProperty(_nxs, '__esModule', {
            'value': true
        }), _nxs.getSlot372PersonalEffect = void 0;
        var _nxv = _nxt(74496);
        _nxs.getSlot372PersonalEffect = function(_nxw) {
            var _nxx = null,
                _nxy = new _nxv.SlotItemEffectModel(),
                _nxz = false,
                _ny0 = new _nxv.SlotItemEffectModel();
            if ('しょうかく' == _nxw.yomi || 'ずいかく' == _nxw.yomi || 'たいほう' == _nxw.yomi ? (_ny0.houg += 1, _nxz = true, _nxy.raig += 1) : 'じゅんよう' != _nxw.yomi && 'ひよう' != _nxw.yomi || (_ny0.houg += 1, _nxz = true), 108 == _nxw.ship_id || 109 == _nxw.ship_id || 291 == _nxw.ship_id || 292 == _nxw.ship_id || 296 == _nxw.ship_id || 297 == _nxw.ship_id ? (_ny0.houg += 1, _nxz = true) : 116 == _nxw.ship_id || 74 == _nxw.ship_id || 117 == _nxw.ship_id || 282 == _nxw.ship_id || 185 == _nxw.ship_id ? (_ny0.tais += 1, _nxz = true) : 560 == _nxw.ship_id || 555 == _nxw.ship_id || 318 == _nxw.ship_id ? (_ny0.tais += 1, _nxz = true, _nxy.raig += 1) : 508 == _nxw.ship_id || 509 == _nxw.ship_id ? (_ny0.houg += 1, _nxz = true) : 883 != _nxw.ship_id && 888 != _nxw.ship_id || (_ny0.houg += 2, _ny0.tais += 1, _nxz = true, _nxy.raig += 2), 0 == _nxz) return _nxy;
            var _ny1 = _nxw.get_slotnums(372);
            return _nxy.add(_ny0.multiply(_ny1)), _nxy;
        };
    },
    53099: (_ny2, _ny3, _ny4) => {
        'use strict';
        var _ny5 = null;
        defineModule(_ny3);
        Object.defineProperty(_ny3, '__esModule', {
            'value': true
        }), _ny3.getSlot373PersonalEffect = void 0;
        var _ny6 = _ny4(74496);
        _ny3.getSlot373PersonalEffect = function(_ny7) {
            var _ny8 = null,
                _ny9 = new _ny6.SlotItemEffectModel(),
                _nya = new _ny6.SlotItemEffectModel(),
                _nyb = false;
            if ('しょうかく' == _ny7.yomi ? (_nya.houg += 2, _nyb = true, _ny9.raig += 2, _ny9.kaih += 2) : 'ずいかく' == _ny7.yomi ? (_nya.houg += 1, _nyb = true, _ny9.raig += 2, _ny9.kaih += 3) : 'たいほう' == _ny7.yomi ? (_nya.houg += 1, _nyb = true, _ny9.raig += 2, _ny9.kaih += 2) : 'じゅんよう' != _ny7.yomi && 'ひよう' != _ny7.yomi || (_nya.houg += 1, _nyb = true, _ny9.raig += 1, _ny9.kaih += 1), 108 == _ny7.ship_id || 109 == _ny7.ship_id ? (_nya.houg += 1, _nyb = true) : 291 == _ny7.ship_id || 292 == _ny7.ship_id ? (_nya.houg += 1, _nyb = true, _ny9.raig += 1) : 296 == _ny7.ship_id || 297 == _ny7.ship_id ? (_nya.houg += 1, _nyb = true, _ny9.raig += 1, _ny9.kaih += 1) : 116 == _ny7.ship_id || 74 == _ny7.ship_id ? (_nya.tais += 1, _nyb = true) : 117 == _ny7.ship_id || 282 == _ny7.ship_id || 185 == _ny7.ship_id ? (_nya.houg += 1, _nya.tais += 1, _nyb = true, _ny9.raig += 1) : 560 == _ny7.ship_id || 555 == _ny7.ship_id || 318 == _ny7.ship_id ? (_nya.houg += 1, _nya.tais += 2, _nyb = true, _ny9.raig += 1, _ny9.kaih += 1) : 508 == _ny7.ship_id || 509 == _ny7.ship_id ? (_nya.houg += 1, _nyb = true, _ny9.raig += 2, _ny9.kaih += 2) : 888 == _ny7.ship_id ? (_nya.houg += 2, _nya.tais += 2, _nyb = true, _ny9.raig += 2, _ny9.kaih += 2) : 883 == _ny7.ship_id && (_nya.houg += 1, _nya.tais += 2, _nyb = true, _ny9.raig += 3, _ny9.kaih += 4), 0 == _nyb) return _ny9;
            var _nyc = _ny7.get_slotnums(373);
            return _ny9.add(_nya.multiply(_nyc)), _ny9;
        };
    },
    76201: (_nyd, _nye, _nyf) => {
        'use strict';
        var _nyg = null;
        defineModule(_nye);
        Object.defineProperty(_nye, '__esModule', {
            'value': true
        }), _nye.getSlot374PersonalEffect = void 0;
        var _nyh = _nyf(74496);
        _nye.getSlot374PersonalEffect = function(_nyi) {
            var _nyj = null,
                _nyk = new _nyh.SlotItemEffectModel(),
                _nyl = new _nyh.SlotItemEffectModel(),
                _nym = false;
            if ('しょうかく' == _nyi.yomi ? (_nyl.houg += 3, _nym = true, _nyk.raig += 3, _nyk.kaih += 3) : 'ずいかく' == _nyi.yomi ? (_nyl.houg += 2, _nym = true, _nyk.raig += 3, _nyk.kaih += 4) : 'たいほう' == _nyi.yomi ? (_nyl.houg += 2, _nym = true, _nyk.raig += 3, _nyk.kaih += 2) : 'じゅんよう' != _nyi.yomi && 'ひよう' != _nyi.yomi || (_nyl.houg += 1, _nym = true, _nyk.raig += 2, _nyk.kaih += 2), 108 == _nyi.ship_id || 109 == _nyi.ship_id ? (_nyl.houg += 1, _nym = true, _nyk.raig += 1) : 291 == _nyi.ship_id || 292 == _nyi.ship_id ? (_nyl.houg += 1, _nyl.tais += 1, _nym = true, _nyk.raig += 1) : 296 == _nyi.ship_id || 297 == _nyi.ship_id ? (_nyl.houg += 1, _nyl.tais += 1, _nym = true, _nyk.raig += 1, _nyk.kaih += 1) : 116 == _nyi.ship_id || 74 == _nyi.ship_id ? (_nyl.houg += 1, _nyl.tais += 1, _nym = true) : 117 == _nyi.ship_id || 282 == _nyi.ship_id || 185 == _nyi.ship_id ? (_nyl.houg += 1, _nyl.tais += 2, _nym = true, _nyk.raig += 1, _nyk.kaih += 1) : 560 == _nyi.ship_id || 555 == _nyi.ship_id || 318 == _nyi.ship_id ? (_nyl.houg += 1, _nyl.tais += 3, _nym = true, _nyk.raig += 1, _nyk.kaih += 2) : 508 == _nyi.ship_id || 509 == _nyi.ship_id ? (_nyl.houg += 1, _nyl.tais += 2, _nym = true, _nyk.raig += 2, _nyk.kaih += 3) : 888 == _nyi.ship_id ? (_nyl.houg += 3, _nyl.tais += 3, _nym = true, _nyk.raig += 2, _nyk.kaih += 3) : 883 == _nyi.ship_id && (_nyl.houg += 2, _nyl.tais += 3, _nym = true, _nyk.raig += 3, _nyk.kaih += 5), 0 == _nym) return _nyk;
            var _nyn = _nyi.get_slotnums(374);
            return _nyk.add(_nyl.multiply(_nyn)), _nyk;
        };
    },
    24931: (_nyo, _nyp, _nyq) => {
        'use strict';
        var _nyr = null;
        defineModule(_nyp);
        Object.defineProperty(_nyp, '__esModule', {
            'value': true
        }), _nyp.getSlot375PersonalEffect = void 0;
        var _nys = _nyq(74496);
        _nyp.getSlot375PersonalEffect = function(_nyt) {
            var _nyu = null,
                _nyv = new _nys.SlotItemEffectModel(),
                _nyw = new _nys.SlotItemEffectModel(),
                _nyx = false;
            if (69 != _nyt.ctype && 83 != _nyt.ctype && 84 != _nyt.ctype && 105 != _nyt.ctype && 116 != _nyt.ctype && 118 != _nyt.ctype || (_nyw.tyku += 3, _nyw.houg += 3, _nyw.kaih += 3, _nyw.tais += 3, _nyx = true), 'かが' == _nyt.yomi && (_nyw.tyku += 1, _nyw.houg += 1, _nyw.kaih += 1, _nyw.tais += 1, _nyx = true), 0 == _nyx) return _nyv;
            var _nyy = _nyt.get_slotnums(375);
            return _nyv.add(_nyw.multiply(_nyy)), _nyv;
        };
    },
    60978: (_nyz, _nz0, _nz1) => {
        'use strict';
        var _nz2 = null;
        defineModule(_nz0);
        Object.defineProperty(_nz0, '__esModule', {
            'value': true
        }), _nz0.getSlot376PersonalEffect = void 0;
        var _nz3 = _nz1(74496);
        _nz0.getSlot376PersonalEffect = function(_nz4) {
            var _nz5 = null,
                _nz6 = new _nz3.SlotItemEffectModel(),
                _nz7 = new _nz3.SlotItemEffectModel(),
                _nz8 = false;
            if ('アメリカ' == _nz4.getCountryName() ? (_nz7.houg += 2, _nz7.raig += 4, _nz8 = true) : 67 == _nz4.ctype || 78 == _nz4.ctype || 82 == _nz4.ctype || 88 == _nz4.ctype || 108 == _nz4.ctype || 112 == _nz4.ctype ? (_nz7.houg += 1, _nz7.raig += 2, _nz8 = true) : 96 == _nz4.ctype && (_nz7.houg += 1, _nz7.raig += 1, _nz8 = true), 0 == _nz8) return _nz6;
            var _nz9 = _nz4.get_slotnums(376);
            return _nz6.add(_nz7.multiply(_nz9)), _nz6;
        };
    },
    74312: (_nza, _nzb, _nzc) => {
        'use strict';
        var _nzd = null;
        defineModule(_nzb);
        Object.defineProperty(_nzb, '__esModule', {
            'value': true
        }), _nzb.getSlot377PersonalEffect = void 0;
        var _nze = _nzc(74496);
        _nzb.getSlot377PersonalEffect = function(_nzf) {
            var _nzg = null,
                _nzh = new _nze.SlotItemEffectModel();
            return 'アメリカ' == _nzf.getCountryName() ? (_nzh.tais += 2, _nzh.kaih += 1, 629 == _nzf.ship_id && (_nzh.tais += 1, _nzh.kaih += 2)) : 67 != _nzf.ctype && 78 != _nzf.ctype && 82 != _nzf.ctype && 88 != _nzf.ctype && 108 != _nzf.ctype && 112 != _nzf.ctype && 96 != _nzf.ctype || (_nzh.tais += 1, _nzh.kaih += 1), 651 != _nzf.ship_id && 656 != _nzf.ship_id || (_nzh.tais += 1, _nzh.kaih += 2), _nzh;
        };
    },
    54350: (_nzi, _nzj, _nzk) => {
        'use strict';
        var _nzl = null;
        defineModule(_nzj);
        Object.defineProperty(_nzj, '__esModule', {
            'value': true
        }), _nzj.getSlot378PersonalEffect = void 0;
        var _nzm = _nzk(74496);
        _nzj.getSlot378PersonalEffect = function(_nzn) {
            var _nzo = null,
                _nzp = new _nzm.SlotItemEffectModel();
            return 'アメリカ' == _nzn.getCountryName() ? (_nzp.tais += 3, _nzp.kaih += 1, 629 == _nzn.ship_id && (_nzp.tais += 1, _nzp.kaih += 1)) : 67 == _nzn.ctype || 78 == _nzn.ctype || 82 == _nzn.ctype || 88 == _nzn.ctype || 108 == _nzn.ctype || 112 == _nzn.ctype ? (_nzp.tais += 2, _nzp.kaih += 1) : 96 == _nzn.ctype && (_nzp.tais += 1, _nzp.kaih += 1), 651 != _nzn.ship_id && 656 != _nzn.ship_id || (_nzp.tais += 1, _nzp.kaih += 1), _nzp;
        };
    },
    26262: function(_nzq, _nzr, _nzs) {
        'use strict';
        var _nzt = null;
        var _nzu = this && this.__importDefault || function(_nzv) {
            var _nzw = null;
            return _nzv && _nzv.__esModule ? _nzv : {
                'default': _nzv
            };
        };
        defineModule(_nzr);
        Object.defineProperty(_nzr, '__esModule', {
            'value': true
        }), _nzr.getSlot379PersonalEffect = void 0;
        var _nzx = _nzs(74496),
            _nzy = _nzu(_nzs(18622));
        _nzr.getSlot379PersonalEffect = function(_nzz) {
            var _o00 = null,
                _o01 = new _nzx.SlotItemEffectModel(),
                _o02 = false,
                _o03 = new _nzx.SlotItemEffectModel();
            if (1 == _nzz.stype ? (_o03.tyku += 2, _o03.houg += 1, _o02 = true) : 21 != _nzz.stype && 16 != _nzz.stype || (_o03.tyku += 1, _o03.houg += 1, _o02 = true), 66 == _nzz.ctype || 28 == _nzz.ctype ? (_o03.houg += 1, _o03.tyku += 2, _o02 = true) : 101 == _nzz.ctype && (_o03.tyku += 2, _o03.houg += 1, _o01.tyku += 2, _o01.houg += 2, _o02 = true), 'ゆら' == _nzz.yomi || 'なか' == _nzz.yomi || 'きぬ' == _nzz.yomi || 'いすず' == _nzz.yomi ? (_o03.houg += 2, _o02 = true) : 'おおい' != _nzz.yomi && 'きたかみ' != _nzz.yomi || (_o03.tyku += 2, _o03.houg += 2, _o02 = true), 'ゆら' != _nzz.yomi && 'なか' != _nzz.yomi && 'きぬ' != _nzz.yomi && 'いすず' != _nzz.yomi && 'ゆうばり' != _nzz.yomi || (_o03.tais += 1, _o02 = true), 'てんりゅう' != _nzz.yomi && 'たつた' != _nzz.yomi && 'ゆうばり' != _nzz.yomi || (_o03.houg += 1, _o02 = true), 488 == _nzz.ship_id ? (_o03.tyku += 4, _o02 = true) : 220 == _nzz.ship_id ? (_o03.tyku += 3, _o02 = true) : 23 == _nzz.ship_id ? (_o03.tyku += 2, _o02 = true) : 160 == _nzz.ship_id || 487 == _nzz.ship_id || 141 == _nzz.ship_id ? (_o03.tyku += 3, _o02 = true) : 224 == _nzz.ship_id || 289 == _nzz.ship_id || 219 == _nzz.ship_id || 56 == _nzz.ship_id || 113 == _nzz.ship_id || 22 == _nzz.ship_id ? (_o03.tyku += 2, _o02 = true) : 651 != _nzz.ship_id && 656 != _nzz.ship_id || (_o03.tyku += 3, _o03.houg += 3, 656 == _nzz.ship_id && (_o03.kaih += 3, _o03.tais += 2), _o02 = true), 488 != _nzz.ship_id && 160 != _nzz.ship_id && 487 != _nzz.ship_id && 141 != _nzz.ship_id || (_o03.tais += 1, _o02 = true), 477 != _nzz.ship_id && 478 != _nzz.ship_id && 624 != _nzz.ship_id || (_o03.tais += 2, _o02 = true), 477 != _nzz.ship_id && 478 != _nzz.ship_id && 624 != _nzz.ship_id && 622 != _nzz.ship_id || (_o03.tyku += 2, _o02 = true), 652 != _nzz.ship_id && 657 != _nzz.ship_id && 547 != _nzz.ship_id && 146 != _nzz.ship_id || (_o01.houg += 2), 652 != _nzz.ship_id && 657 != _nzz.ship_id && 547 != _nzz.ship_id && 146 != _nzz.ship_id || (_o01.tyku += 2), _o02) {
                var _o04 = _nzz.get_slotnums(379);
                _o01.add(_o03.multiply(_o04));
            }
            var _o05 = new _nzx.SlotItemEffectModel(),
                _o06 = false;
            16 == _nzz.stype || 3 == _nzz.stype || 4 == _nzz.stype || 21 == _nzz.stype ? (_o05.houg += 1, _o05.kaih += 2, _o06 = true) : 1 == _nzz.stype && (_o05.houg += 1, _o05.kaih += 4, _o06 = true), 66 == _nzz.ctype || 28 == _nzz.ctype || 21 == _nzz.ctype || 34 == _nzz.ctype ? (_o05.houg += 2, _o05.kaih += 3, _o06 = true) : 101 == _nzz.ctype && (_o05.houg += 4, _o05.kaih += 3, _o06 = true), 488 == _nzz.ship_id || 651 == _nzz.ship_id || 656 == _nzz.ship_id ? (_o05.houg += 2, _o05.kaih += 2, _o06 = true) : 487 == _nzz.ship_id || 160 == _nzz.ship_id || 141 == _nzz.ship_id || 118 == _nzz.ship_id || 119 == _nzz.ship_id ? (_o05.houg += 1, _o05.kaih += 1, _o06 = true) : 652 != _nzz.ship_id && 657 != _nzz.ship_id && 547 != _nzz.ship_id && 146 != _nzz.ship_id || (_o05.houg += 1, _o05.kaih += 1, _o06 = true);
            var _o07 = new _nzx.SlotItemEffectModel(),
                _o08 = false;
            if (656 == _nzz.ship_id && (_o07.tyku += 3, _o07.kaih += 2, _o08 = true), _o06 || _o08) {
                for (var _o09 = 0, _o0a = 0, _o0b = 0, _o0c = _nzz.have_slot_ids(); _o0b < _o0c.length; _o0b++) {
                    var _o0d = _o0c[_o0b],
                        _o0e = _nzy.default.model.slot.getMst(_o0d),
                        _o0f = _o0e.equipType;
                    12 != _o0f && 13 != _o0f || (_o0e.sakuteki >= 5 && (_o09 += _nzz.get_slotnums(parseInt(_o0d))), _o0e.taiku >= 2 && (_o0a += _nzz.get_slotnums(parseInt(_o0d))));
                }
                _o06 && _o09 > 0 && _o01.add(_o05), _o08 && _o0a > 0 && _o01.add(_o07);
            }
            return _o01;
        };
    },
    45530: function(_o0g, _o0h, _o0i) {
        'use strict';
        var _o0j = null;
        var _o0k = this && this.__importDefault || function(_o0l) {
            var _o0m = null;
            return _o0l && _o0l.__esModule ? _o0l : {
                'default': _o0l
            };
        };
        defineModule(_o0h);
        Object.defineProperty(_o0h, '__esModule', {
            'value': true
        }), _o0h.getSlot380PersonalEffect = void 0;
        var _o0n = _o0i(74496),
            _o0o = _o0k(_o0i(18622));
        _o0h.getSlot380PersonalEffect = function(_o0p) {
            var _o0q = null,
                _o0r = new _o0n.SlotItemEffectModel(),
                _o0s = false,
                _o0t = new _o0n.SlotItemEffectModel();
            if (21 != _o0p.stype && 16 != _o0p.stype || (_o0t.tyku += 2, _o0t.houg += 1, _o0s = true), 101 == _o0p.ctype && (_o0t.tyku += 2, _o0t.houg += 1, _o0s = true, _o0r.tyku += 2, _o0r.houg += 2), 'ゆら' == _o0p.yomi || 'なか' == _o0p.yomi || 'きぬ' == _o0p.yomi || 'いすず' == _o0p.yomi ? (_o0t.houg += 2, _o0s = true) : 'おおい' != _o0p.yomi && 'きたかみ' != _o0p.yomi || (_o0t.tyku += 2, _o0t.houg += 3, _o0s = true), 'ゆら' != _o0p.yomi && 'なか' != _o0p.yomi && 'きぬ' != _o0p.yomi && 'いすず' != _o0p.yomi && 'ゆうばり' != _o0p.yomi || (_o0t.tais += 1, _o0s = true), 'てんりゅう' != _o0p.yomi && 'たつた' != _o0p.yomi && 'ゆうばり' != _o0p.yomi || (_o0t.houg += 1, _o0s = true), 488 == _o0p.ship_id ? (_o0t.tyku += 4, _o0s = true) : 220 == _o0p.ship_id ? (_o0t.tyku += 3, _o0s = true) : 23 == _o0p.ship_id ? (_o0t.tyku += 2, _o0s = true) : 160 == _o0p.ship_id || 487 == _o0p.ship_id || 141 == _o0p.ship_id ? (_o0t.tyku += 3, _o0s = true) : 224 == _o0p.ship_id || 289 == _o0p.ship_id || 219 == _o0p.ship_id || 56 == _o0p.ship_id || 113 == _o0p.ship_id || 22 == _o0p.ship_id ? (_o0t.tyku += 2, _o0s = true) : 651 == _o0p.ship_id || 656 == _o0p.ship_id ? (_o0t.tyku += 3, _o0t.houg += 3, _o0s = true) : 407 != _o0p.ship_id && 665 != _o0p.ship_id || (_o0t.houg += 2, _o0t.tyku += 2, _o0s = true, _o0r.houg += 1, _o0r.tyku += 1, _o0r.kaih += 2), 488 != _o0p.ship_id && 160 != _o0p.ship_id && 487 != _o0p.ship_id && 141 != _o0p.ship_id || (_o0t.tais += 1, _o0s = true), 477 != _o0p.ship_id && 478 != _o0p.ship_id && 624 != _o0p.ship_id || (_o0t.tais += 2, _o0s = true), 477 != _o0p.ship_id && 478 != _o0p.ship_id && 624 != _o0p.ship_id && 622 != _o0p.ship_id || (_o0t.tyku += 2, _o0s = true), 652 != _o0p.ship_id && 657 != _o0p.ship_id || (_o0t.houg += 3, _o0s = true), 547 != _o0p.ship_id && 146 != _o0p.ship_id || (_o0r.houg += 2), 652 != _o0p.ship_id && 657 != _o0p.ship_id && 547 != _o0p.ship_id && 146 != _o0p.ship_id || (_o0r.tyku += 2), _o0s) {
                var _o0u = _o0p.get_slotnums(380);
                _o0r.add(_o0t.multiply(_o0u));
            }
            var _o0v = new _o0n.SlotItemEffectModel(),
                _o0w = false,
                _o0x = new _o0n.SlotItemEffectModel(),
                _o0y = false,
                _o0z = false;
            if (16 != _o0p.stype && 3 != _o0p.stype && 4 != _o0p.stype && 21 != _o0p.stype || (_o0v.houg += 2, _o0v.kaih += 1, _o0w = true), 101 == _o0p.ctype && (_o0v.houg += 4, _o0v.kaih += 3, _o0w = true), 488 != _o0p.ship_id && 487 != _o0p.ship_id && 160 != _o0p.ship_id && 141 != _o0p.ship_id && 118 != _o0p.ship_id && 119 != _o0p.ship_id && 651 != _o0p.ship_id && 656 != _o0p.ship_id || (_o0v.houg += 1, _o0v.kaih += 2, _o0w = true), 652 == _o0p.ship_id || 657 == _o0p.ship_id || 547 == _o0p.ship_id || 146 == _o0p.ship_id ? (_o0v.houg += 1, _o0v.kaih += 3, _o0w = true) : 407 != _o0p.ship_id && 665 != _o0p.ship_id || (_o0z = true, _o0w = true, _o0v.houg += 2, _o0v.kaih += 1, _o0y = true, _o0x.houg += 1, _o0x.tyku += 2, _o0x.kaih += 1), _o0w || _o0z) {
                for (var _o10 = 0, _o11 = 0, _o12 = 0, _o13 = _o0p.have_slot_ids(); _o12 < _o13.length; _o12++) {
                    var _o14 = _o13[_o12],
                        _o15 = _o0o.default.model.slot.getMst(_o14),
                        _o16 = _o15.equipType;
                    12 == _o16 || 13 == _o16 ? _o15.sakuteki >= 5 && (_o10 += _o0p.get_slotnums(parseInt(_o14))) : 21 == _o16 && (_o11 += _o0p.get_slotnums(parseInt(_o14)));
                }
                _o0w && _o10 > 0 && _o0r.add(_o0v), _o0y && _o11 > 0 && _o0r.add(_o0x);
            }
            return _o0r;
        };
    },
    44053: (_o17, _o18, _o19) => {
        'use strict';
        var _o1a = null;
        defineModule(_o18);
        Object.defineProperty(_o18, '__esModule', {
            'value': true
        }), _o18.getSlot381PersonalEffect = void 0;
        var _o1b = _o19(74496);
        _o18.getSlot381PersonalEffect = function(_o1c) {
            var _o1d = null,
                _o1e = new _o1b.SlotItemEffectModel(),
                _o1f = false,
                _o1g = new _o1b.SlotItemEffectModel(),
                _o1h = 0;
            if ('アメリカ' == _o1c.getCountryName() && (_o1g.houg += 1, 102 == _o1c.ctype && (_o1g.houg += 1), _o1f = true, _o1h = 1), 0 == _o1f) return _o1e;
            var _o1i = _o1c.get_slotnums(381);
            if (_o1e.add(_o1g.multiply(_o1i)), 0 == _o1h) return _o1e;
            var _o1j = _o1c.get_each_level_nums(381),
                _o1k = 0;
            return _o1j.map(function(_o1l, _o1m) {
                _o1m >= 6 && (_o1k += _o1l);
            }), 1 == _o1h && (_o1e.houg += 1 * _o1k), _o1e;
        };
    },
    65441: function(_o1n, _o1o, _o1p) {
        'use strict';
        var _o1q = null;
        var _o1r = this && this.__importDefault || function(_o1s) {
            var _o1t = null;
            return _o1s && _o1s.__esModule ? _o1s : {
                'default': _o1s
            };
        };
        defineModule(_o1o);
        Object.defineProperty(_o1o, '__esModule', {
            'value': true
        }), _o1o.getSlot382PersonalEffect = void 0;
        var _o1u = _o1p(74496),
            _o1v = _o1r(_o1p(18622));
        _o1o.getSlot382PersonalEffect = function(_o1w) {
            var _o1x = null,
                _o1y = new _o1u.SlotItemEffectModel(),
                _o1z = false,
                _o20 = new _o1u.SlotItemEffectModel(),
                _o21 = false,
                _o22 = new _o1u.SlotItemEffectModel(),
                _o23 = new _o1u.SlotItemEffectModel(),
                _o24 = {},
                _o25 = 2,
                _o26 = [];
            1 == _o1w.stype && (_o20.tyku += 2, _o20.kaih += 2, _o20.tais += 1, _o1z = true, _o22.houg += 2, _o22.kaih += 3, _o23.tyku += 2, _o23.kaih += 3, _o21 = true, _o25 = 1), 66 != _o1w.ctype && 28 != _o1w.ctype && 101 != _o1w.ctype || (_o20.tyku += 2, _o20.kaih += 1, _o1z = true, _o22.houg += 1, _o22.kaih += 2, _o23.tyku += 2, _o23.kaih += 2, _o21 = true, _o25 = 1), 'ゆら' != _o1w.yomi && 'なか' != _o1w.yomi && 'きぬ' != _o1w.yomi || (_o20.tyku += 1, _o1z = true), 488 == _o1w.ship_id || 220 == _o1w.ship_id ? (_o20.kaih += 1, _o1z = true, 488 == _o1w.ship_id && (_o22.houg += 1, _o22.kaih += 1, _o23.tyku += 2, _o23.kaih += 2, _o21 = true, _o25 = 1)) : 160 == _o1w.ship_id || 224 == _o1w.ship_id ? (_o20.kaih += 1, _o1z = true, 160 == _o1w.ship_id && (_o22.houg += 1, _o22.kaih += 1, _o23.tyku += 2, _o23.kaih += 2, _o21 = true)) : 487 == _o1w.ship_id || 289 == _o1w.ship_id ? (_o20.kaih += 1, _o1z = true, 487 == _o1w.ship_id && (_o22.houg += 1, _o22.kaih += 1, _o23.tyku += 2, _o23.kaih += 2, _o21 = true)) : 656 == _o1w.ship_id ? (_o20.tyku += 3, _o20.kaih += 2, _o1z = true, _o22.houg += 2, _o22.kaih += 2, _o23.tyku += 3, _o23.kaih += 2, _o21 = true, _o25 = 1) : 145 == _o1w.ship_id || 961 == _o1w.ship_id ? _o25 = 1 : 979 == _o1w.ship_id && (_o20.houg += 1, _o20.tyku += 1, _o20.houm += 1, _o20.kaih += 1, _o24[509] = new _o1u.SlotItemEffectModel(), _o24[509].houm += 1, _o1z = true, _o26[1] = 1);
            for (var _o27 = 0, _o28 = 0, _o29 = 0, _o2a = _o1w.have_slot_ids(); _o29 < _o2a.length; _o29++) {
                var _o2b = _o2a[_o29],
                    _o2c = _o1v.default.model.slot.getMst(_o2b),
                    _o2d = _o2c.equipType;
                12 != _o2d && 13 != _o2d || (_o2c.sakuteki >= 5 && (_o27 += _o1w.get_slotnums(parseInt(_o2b))), _o2c.taiku >= 2 && (_o28 += _o1w.get_slotnums(parseInt(_o2b))));
            }
            for (var _o2e = [], _o2f = function(_o2g) {
                    var _o2h = null;
                    if (null == _o1w.have_slots_dict[_o2g]) return 'continue';
                    var _o2i = _o1w.get_each_level_nums(_o2g);
                    null == _o2e[_o2g] && (_o2e[_o2g] = []), _o2i.forEach(function(_o2j, _o2k) {
                        var _o2l = null;
                        for (var _o2m = 1; _o2m <= _o1w.SLOT_LEVEL_MAX; _o2m++) null == _o2e[_o2g][_o2m] && (_o2e[_o2g][_o2m] = 0), _o2k >= _o2m && (_o2e[_o2g][_o2m] += _o2j);
                    });
                }, _o2n = 0, _o2o = [509]; _o2n < _o2o.length; _o2n++) {
                _o2f(_o2o[_o2n]);
            }
            var _o2p = 0,
                _o2q = 0,
                _o2r = 0,
                _o2s = 0,
                _o2t = 0,
                _o2u = 0,
                _o2v = 0,
                _o2w = 0,
                _o2x = 0,
                _o2y = 0;
            null != _o2e[509] && (_o2p = _o2e[509][1], _o2q = _o2e[509][2], _o2r = _o2e[509][3], _o2s = _o2e[509][4], _o2t = _o2e[509][5], _o2u = _o2e[509][6], _o2v = _o2e[509][7], _o2w = _o2e[509][8], _o2x = _o2e[509][9], _o2y = _o2e[509][10], null != _o26[1] && (_o2r >= 1 && (_o1y.kaih += 1 * _o2r), _o2t >= 1 && (_o1y.houg += 1 * _o2t), _o2v >= 1 && (_o1y.tyku += 2 * _o2v), _o2x >= 1 && (_o1y.houm += 1 * _o2x), _o2y >= 1 && (_o1y.houg += 1 * _o2y)), 1 == _o25 ? (_o2p >= 1 && (_o1y.tyku += 1 * _o2p), _o2q >= 1 && (_o1y.kaih += 2 * _o2q), _o2s >= 1 && (_o1y.houg += 1 * _o2s), _o2u >= 1 && (_o1y.tyku += 1 * _o2u), _o2w >= 1 && (_o1y.houm += 1 * _o2w), _o2y >= 1 && (_o1y.tyku += 1 * _o2y)) : 2 == _o25 && (_o2q >= 1 && (_o1y.tyku += 1 * _o2q), _o2s >= 1 && (_o1y.kaih += 2 * _o2s), _o2u >= 1 && (_o1y.houg += 1 * _o2u), _o2w >= 1 && (_o1y.tyku += 1 * _o2w), _o2y >= 1 && (_o1y.houm += 1 * _o2y)));
            var _o2z = _o1w.get_slotnums(509),
                _o30 = _o2z + _o1w.get_slotnums(382);
            return _o1z && (_o1y.add(_o20.multiply(_o30)), Object.keys(_o24).forEach(function(_o31) {
                var _o32 = null,
                    _o33 = parseInt(_o31);
                if (null != _o1w.have_slots_dict[_o33]) {
                    var _o34 = _o1w.get_slotnums(_o33);
                    _o1y.add(_o24[_o33].multiply(_o34));
                }
            })), 3 != _o1w.stype && 21 != _o1w.stype && 4 != _o1w.stype || _o2q >= 1 && (_o27 > 0 && (_o1y.houg += 1, _o1y.kaih += 1), _o28 > 0 && (_o1y.tyku += 2, _o1y.kaih += 1)), 145 == _o1w.ship_id ? _o2q >= 1 && (_o27 > 0 && (_o1y.houg += 1, _o1y.tyku += 1, _o1y.kaih += 2), _o28 > 0 && (_o1y.tyku += 4, _o1y.kaih += 2)) : 961 != _o1w.ship_id && 979 != _o1w.ship_id || _o2z > 0 && (_o27 > 0 && (_o1y.houg += 2, _o1y.tyku += 2, _o1y.kaih += 3), _o28 > 0 && (_o1y.houg += 1, _o1y.tyku += 5, _o1y.kaih += 3)), _o21 && _o27 > 0 && _o1y.add(_o22), _o21 && _o28 > 0 && _o1y.add(_o23), _o1y;
        };
    },
    33258: (_o35, _o36, _o37) => {
        'use strict';
        var _o38 = null;
        defineModule(_o36);
        Object.defineProperty(_o36, '__esModule', {
            'value': true
        }), _o36.getSlot383PersonalEffect = void 0;
        var _o39 = _o37(74496);
        _o36.getSlot383PersonalEffect = function(_o3a) {
            var _o3b = null,
                _o3c = new _o39.SlotItemEffectModel(),
                _o3d = false,
                _o3e = new _o39.SlotItemEffectModel(),
                _o3f = _o3a.get_each_level_over_nums([383]).slot[383];
            if (44 == _o3a.ctype && (_o3e.raig += 2, _o3d = true, _o3f[4] > 0 && (_o3c.raig += 1), _o3f[6] > 0 && (_o3c.houm += 1)), 'い58' == _o3a.yomi && (_o3e.raig += 1, _o3d = true), 636 == _o3a.ship_id ? (_o3e.raig += 3, _o3d = true) : 607 == _o3a.ship_id && (_o3e.raig += 4, _o3d = true), _o3f[8] > 0 && (_o3c.raig += 1), _o3f[10] > 0 && (_o3c.houm += 1), 'い58' != _o3a.yomi && 'い47' != _o3a.yomi || _o3f[5] > 0 && (_o3c.houm += 1), 0 == _o3d) return _o3c;
            var _o3g = _o3a.get_slotnums(383);
            return _o3c.add(_o3e.multiply(_o3g)), _o3c;
        };
    },
    92168: (_o3h, _o3i, _o3j) => {
        'use strict';
        var _o3k = null;
        defineModule(_o3i);
        Object.defineProperty(_o3i, '__esModule', {
            'value': true
        }), _o3i.getSlot384PersonalEffect = void 0;
        var _o3l = _o3j(74496);
        _o3i.getSlot384PersonalEffect = function(_o3m) {
            var _o3n = null,
                _o3o = new _o3l.SlotItemEffectModel(),
                _o3p = false,
                _o3q = new _o3l.SlotItemEffectModel();
            44 == _o3m.ctype && (_o3q.kaih += 3, _o3p = true), 'い58' == _o3m.yomi && (_o3q.kaih += 2, _o3p = true), 636 == _o3m.ship_id ? (_o3q.kaih += 3, _o3p = true) : 607 == _o3m.ship_id && (_o3q.kaih += 4, _o3p = true);
            var _o3r = _o3m.get_slotnums(384);
            _o3p && _o3o.add(_o3q.multiply(_o3r));
            var _o3s = _o3r,
                _o3t = _o3m.get_slotnums(213),
                _o3u = _o3m.get_slotnums(214),
                _o3v = _o3m.get_slotnums(383);
            return _o3s > 0 && _o3t + _o3u + _o3v > 0 && (_o3o.raig += 3, _o3o.kaih += 2), _o3o;
        };
    },
    85975: (_o3w, _o3x, _o3y) => {
        'use strict';
        var _o3z = null;
        defineModule(_o3x);
        Object.defineProperty(_o3x, '__esModule', {
            'value': true
        }), _o3x.getSlot385PersonalEffect = void 0;
        var _o40 = _o3y(74496);
        _o3x.getSlot385PersonalEffect = function(_o41) {
            var _o42 = null,
                _o43 = new _o40.SlotItemEffectModel(),
                _o44 = false,
                _o45 = new _o40.SlotItemEffectModel(),
                _o46 = 0;
            if ('アメリカ' == _o41.getCountryName() && (_o45.houg += 1, 102 == _o41.ctype || 107 == _o41.ctype ? (_o45.houg += 1, _o45.souk += 1) : 93 == _o41.ctype && (_o45.houg += 1), _o44 = true, _o46 = 1), 8 == _o41.stype && (_o45.houg += 1, _o44 = true), 0 == _o44) return _o43;
            var _o47 = _o41.get_slotnums(385);
            if (_o43.add(_o45.multiply(_o47)), 0 == _o46) return _o43;
            var _o48 = _o41.get_each_level_nums(385),
                _o49 = 0;
            return _o48.forEach(function(_o4a, _o4b) {
                _o4b >= 6 && (_o49 += _o4a);
            }), 1 == _o46 && (_o43.houg += 1 * _o49, _o43.souk += 1 * _o48[10]), _o43;
        };
    },
    98467: (_o4c, _o4d, _o4e) => {
        'use strict';
        var _o4f = null;
        defineModule(_o4d);
        Object.defineProperty(_o4d, '__esModule', {
            'value': true
        }), _o4d.getSlot386PersonalEffect = void 0;
        var _o4g = _o4e(74496);
        _o4d.getSlot386PersonalEffect = function(_o4h) {
            var _o4i = null,
                _o4j = new _o4g.SlotItemEffectModel(),
                _o4k = false,
                _o4l = new _o4g.SlotItemEffectModel(),
                _o4m = 0;
            if ('アメリカ' == _o4h.getCountryName() && (_o4l.houg += 1, _o4k = true, _o4m = 1), 0 == _o4k) return _o4j;
            var _o4n = _o4h.get_slotnums(386);
            if (_o4j.add(_o4l.multiply(_o4n)), 0 == _o4m) return _o4j;
            var _o4o = _o4h.get_each_level_nums(386),
                _o4p = 0,
                _o4q = 0;
            return _o4o.forEach(function(_o4r, _o4s) {
                _o4s >= 2 && (_o4p += _o4r), _o4s >= 7 && (_o4q += _o4r);
            }), 1 == _o4m && (_o4j.houg += 1 * _o4p, _o4j.houg += 1 * _o4q), _o4j;
        };
    },
    88348: (_o4t, _o4u, _o4v) => {
        'use strict';
        var _o4w = null;
        defineModule(_o4u);
        Object.defineProperty(_o4u, '__esModule', {
            'value': true
        }), _o4u.getSlot387PersonalEffect = void 0;
        var _o4x = _o4v(74496);
        _o4u.getSlot387PersonalEffect = function(_o4y) {
            var _o4z = null,
                _o50 = new _o4x.SlotItemEffectModel(),
                _o51 = false,
                _o52 = new _o4x.SlotItemEffectModel(),
                _o53 = 0;
            if ('アメリカ' == _o4y.getCountryName() && (_o52.houg += 1, _o51 = true, _o53 = 1), 0 == _o51) return _o50;
            var _o54 = _o4y.get_slotnums(387);
            if (_o50.add(_o52.multiply(_o54)), 0 == _o53) return _o50;
            var _o55 = _o4y.get_each_level_nums(387),
                _o56 = 0,
                _o57 = 0;
            return _o55.forEach(function(_o58, _o59) {
                _o59 >= 2 && (_o56 += _o58), _o59 >= 7 && (_o57 += _o58);
            }), 1 == _o53 && (_o50.houg += 1 * _o56, _o50.houg += 1 * _o57), _o50;
        };
    },
    21097: (_o5a, _o5b, _o5c) => {
        'use strict';
        var _o5d = null;
        defineModule(_o5b);
        Object.defineProperty(_o5b, '__esModule', {
            'value': true
        }), _o5b.getSlot389PersonalEffect = void 0;
        var _o5e = _o5c(74496);
        _o5b.getSlot389PersonalEffect = function(_o5f) {
            var _o5g = null,
                _o5h = new _o5e.SlotItemEffectModel(),
                _o5i = false,
                _o5j = new _o5e.SlotItemEffectModel();
            if (594 == _o5f.ship_id || 599 == _o5f.ship_id) _o5j.houg += 2, _o5j.kaih += 2, _o5i = true;
            else {
                if (698 == _o5f.ship_id || 610 == _o5f.ship_id) _o5j.houg += 3, _o5j.kaih += 2, _o5i = true;
                else 646 == _o5f.ship_id && (_o5j.houg += 4, _o5j.tais += 4, _o5j.kaih += 3, _o5i = true, _o5f.get_type3_nums(25) > 0 && (_o5h.houg += 3, _o5h.tais += 6), _o5f.get_slotnums(326) + _o5f.get_slotnums(327) > 0 && (_o5h.houg += 5, _o5h.tais += 4));
            }
            if ('アメリカ' == _o5f.getCountryName() && (_o5j.houg += 2, _o5j.tais += 3, _o5j.kaih += 1, _o5i = true), 0 == _o5i) return _o5h;
            var _o5k = _o5f.get_slotnums(389);
            return _o5h.add(_o5j.multiply(_o5k)), _o5h;
        };
    },
    43607: (_o5l, _o5m, _o5n) => {
        'use strict';
        var _o5o = null;
        defineModule(_o5m);
        Object.defineProperty(_o5m, '__esModule', {
            'value': true
        }), _o5m.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _o5p = _o5n(74496);
        _o5m.getSlot38cmFourBarrelGunPersonalEffect = function(_o5q) {
            var _o5r = null,
                _o5s = new _o5p.SlotItemEffectModel(),
                _o5t = _o5q.get_slotnums(245),
                _o5u = _o5q.get_slotnums(246),
                _o5v = _o5q.get_slotnums(468),
                _o5w = _o5t + _o5u + _o5v,
                _o5x = 0,
                _o5y = 0;
            if (79 != _o5q.ctype) return _o5s;
            _o5s.houg += 2 * _o5w, _o5s.houm += 1 * _o5w, _o5v >= 1 && (_o5s.houg += 1 * _o5v, _o5y = 1), _o5x = 1;
            var _o5z = _o5q.get_slotnums(247),
                _o60 = _o5q.get_slotnums(471) + _o5q.get_slotnums(538);
            if (1 == _o5x && _o5z >= 1 && (_o5s.kaih += 2 * _o5z, _o5s.houg += 2 * _o5z, _o5s.houm += 2 * _o5z), 0 == _o5y) return _o5s;
            var _o61 = _o5q.haveSlotLevelNumOver(468),
                _o62 = _o5q.haveSlotLevelNumOver(471),
                _o63 = _o5q.haveSlotLevelNumOver(538);
            if (1 == _o5y && _o5v > 0) {
                var _o64 = _o61[4],
                    _o65 = _o61[8],
                    _o66 = _o61[9],
                    _o67 = _o61[10],
                    _o68 = _o62[7],
                    _o69 = _o62[9];
                _o64 >= 1 && (_o5s.houg += 1 * _o64, _o5s.houm += 1 * _o64), _o65 >= 1 && (_o5s.houg += 1 * _o65, _o5s.houm += 1 * _o65), _o66 >= 1 && (_o5s.tyku += 1 * _o66, _o60 >= 1 && (_o5s.houm += 2 * _o60), _o5z >= 1 && (_o5s.kaih += 1 * _o5z, _o5s.houm += 1 * _o5z)), _o67 >= 1 && (_o5s.houm += 1 * _o67, _o60 >= 1 && (_o5s.houm += 1 * _o60, _o63[7] >= 1 && (_o5s.houm += 1 * _o63[7]), _o63[8] >= 1 && (_o5s.kaih += 1 * _o63[8]), _o63[9] >= 1 && (_o5s.houm += 1 * _o63[9]), _o68 >= 1 && (_o5s.houm += 1 * _o68), _o69 >= 1 && (_o5s.kaih += 1 * _o69)), _o5z >= 1 && (_o5s.houg += 1 * _o5z, _o5s.kaih += 1 * _o5z, _o5s.houm += 1 * _o5z));
            }
            return _o5s;
        };
    },
    2380: (_o6a, _o6b, _o6c) => {
        'use strict';
        var _o6d = null;
        defineModule(_o6b);
        Object.defineProperty(_o6b, '__esModule', {
            'value': true
        }), _o6b.getSlot38cmTwinGunPersonalEffect = void 0;
        var _o6e = _o6c(74496);
        _o6b.getSlot38cmTwinGunPersonalEffect = function(_o6f) {
            var _o6g = null,
                _o6h = new _o6e.SlotItemEffectModel(),
                _o6i = false,
                _o6j = new _o6e.SlotItemEffectModel(),
                _o6k = 0,
                _o6l = _o6f.get_slotnums(76),
                _o6m = _o6f.get_slotnums(114),
                _o6n = _o6f.get_slotnums(124);
            if ('ドイツ' == _o6f.getCountryName() && (_o6j.houg += 1, _o6i = true, _o6k = 1, _o6n >= 1 && (_o6h.kaih += 1 * _o6n)), 0 == _o6i) return _o6h;
            var _o6o = _o6l + _o6m;
            _o6h.add(_o6j.multiply(_o6o));
            var _o6p = _o6f.have_level_num_over_dict[114];
            return 1 == _o6k && null != _o6p && (_o6p[7] >= 1 && (_o6h.houg += 1 * _o6p[7]), _o6p[8] >= 1 && (_o6h.houm += 1 * _o6p[8]), _o6p[9] >= 1 && (_o6h.souk += 1 * _o6p[9]), _o6p[10] >= 1 && (_o6h.houg += 1 * _o6p[10])), _o6h;
        };
    },
    37273: (_o6q, _o6r, _o6s) => {
        'use strict';
        var _o6t = null;
        defineModule(_o6r);
        Object.defineProperty(_o6r, '__esModule', {
            'value': true
        }), _o6r.getSlot390PersonalEffect = void 0;
        var _o6u = _o6s(74496);
        _o6r.getSlot390PersonalEffect = function(_o6v) {
            var _o6w = null,
                _o6x = new _o6u.SlotItemEffectModel(),
                _o6y = false,
                _o6z = new _o6u.SlotItemEffectModel(),
                _o70 = 0;
            if ('アメリカ' == _o6v.getCountryName() && (_o6z.houg += 1, _o6y = true, _o70 = 1), 102 == _o6v.ctype || 107 == _o6v.ctype ? (_o6z.houg += 1, _o6z.souk += 1, _o6y = true) : 93 == _o6v.ctype && (_o6z.houg += 1, _o6y = true), 8 == _o6v.stype && (_o6z.houg += 1, _o6y = true), 0 == _o6y) return _o6x;
            var _o71 = _o6v.get_slotnums(390);
            if (_o6x.add(_o6z.multiply(_o71)), 0 == _o70) return _o6x;
            var _o72 = _o6v.get_each_level_nums(390),
                _o73 = 0,
                _o74 = 0;
            return _o72.forEach(function(_o75, _o76) {
                _o76 >= 3 && (_o73 += _o75), _o76 >= 6 && (_o74 += _o75);
            }), 1 == _o70 && (_o6x.houg += 1 * _o73, _o6x.kaih += 1 * _o74, _o6x.souk += 1 * _o72[10]), _o6x;
        };
    },
    72694: (_o77, _o78, _o79) => {
        'use strict';
        var _o7a = null;
        defineModule(_o78);
        Object.defineProperty(_o78, '__esModule', {
            'value': true
        }), _o78.getSlot391PersonalEffect = void 0;
        var _o7b = _o79(74496);
        _o78.getSlot391PersonalEffect = function(_o7c) {
            var _o7d = null,
                _o7e = new _o7b.SlotItemEffectModel(),
                _o7f = false,
                _o7g = new _o7b.SlotItemEffectModel();
            if ('しょうかく' == _o7c.yomi || 'ずいかく' == _o7c.yomi ? (_o7g.houg += 1, _o7f = true) : 'じゅんよう' != _o7c.yomi && 'ひよう' != _o7c.yomi || (_o7g.houg += 1, _o7f = true), 116 == _o7c.ship_id || 185 == _o7c.ship_id || 282 == _o7c.ship_id ? (_o7g.houg += 1, _o7f = true) : 117 == _o7c.ship_id || 318 == _o7c.ship_id || 883 == _o7c.ship_id || 888 == _o7c.ship_id ? (_o7g.houg += 1, _o7e.kaih += 1, _o7f = true) : 560 != _o7c.ship_id && 555 != _o7c.ship_id || (_o7g.houg += 1, _o7g.kaih += 1, _o7f = true), 0 == _o7f) return _o7e;
            var _o7h = _o7c.get_slotnums(391);
            return _o7e.add(_o7g.multiply(_o7h)), _o7e;
        };
    },
    62067: (_o7i, _o7j, _o7k) => {
        'use strict';
        var _o7l = null;
        defineModule(_o7j);
        Object.defineProperty(_o7j, '__esModule', {
            'value': true
        }), _o7j.getSlot392PersonalEffect = void 0;
        var _o7m = _o7k(74496);
        _o7j.getSlot392PersonalEffect = function(_o7n) {
            var _o7o = null,
                _o7p = new _o7m.SlotItemEffectModel(),
                _o7q = false,
                _o7r = new _o7m.SlotItemEffectModel();
            if ('しょうかく' == _o7n.yomi || 'ずいかく' == _o7n.yomi ? (_o7r.houg += 2, _o7r.kaih += 1, _o7q = true) : 'じゅんよう' != _o7n.yomi && 'ひよう' != _o7n.yomi || (_o7r.houg += 1, _o7r.kaih += 1, _o7q = true), 116 == _o7n.ship_id || 185 == _o7n.ship_id || 282 == _o7n.ship_id ? (_o7r.houg += 2, _o7r.kaih += 1, _o7q = true) : 117 == _o7n.ship_id || 318 == _o7n.ship_id || 883 == _o7n.ship_id || 888 == _o7n.ship_id ? (_o7r.houg += 2, _o7r.kaih += 2, _o7q = true) : 560 != _o7n.ship_id && 555 != _o7n.ship_id || (_o7r.houg += 3, _o7r.kaih += 2, _o7q = true), 0 == _o7q) return _o7p;
            var _o7s = _o7n.get_slotnums(392);
            return _o7p.add(_o7r.multiply(_o7s)), _o7p;
        };
    },
    87817: function(_o7t, _o7u, _o7v) {
        'use strict';
        var _o7w = null;
        var _o7x = this && this.__importDefault || function(_o7y) {
            var _o7z = null;
            return _o7y && _o7y.__esModule ? _o7y : {
                'default': _o7y
            };
        };
        defineModule(_o7u);
        Object.defineProperty(_o7u, '__esModule', {
            'value': true
        }), _o7u.getSlot397PersonalEffect = void 0;
        var _o80 = _o7v(74496),
            _o81 = _o7x(_o7v(18622));
        _o7u.getSlot397PersonalEffect = function(_o82) {
            var _o83 = null,
                _o84 = new _o80.SlotItemEffectModel(),
                _o85 = false,
                _o86 = new _o80.SlotItemEffectModel(),
                _o87 = 0,
                _o88 = 0,
                _o89 = false;
            if (651 == _o82.ship_id ? (_o86.houg += 5, _o86.tyku += 2, _o86.kaih += 1, _o85 = true, _o89 = true, _o87 = 1, _o88 = 1) : 656 == _o82.ship_id && (_o86.houg += 3, _o86.tyku += 1, _o86.kaih += 1, _o85 = true, _o89 = true, _o87 = 1), 0 == _o85) return _o84;
            var _o8a = _o82.get_slotnums(397);
            _o84.add(_o86.multiply(_o8a));
            var _o8b = 0,
                _o8c = _o82.get_each_level_nums(397),
                _o8d = 0;
            if (_o89) {
                _o8c.forEach(function(_o8e, _o8f) {
                    _o8f >= 4 && (_o8d += _o8e);
                });
                for (var _o8g = 0, _o8h = _o82.have_slot_ids(); _o8g < _o8h.length; _o8g++) {
                    var _o8i = _o8h[_o8g],
                        _o8j = _o81.default.model.slot.getMst(_o8i),
                        _o8k = _o8j.equipType;
                    12 != _o8k && 13 != _o8k || (_o8j.sakuteki >= 5 && (_o8b += _o82.get_slotnums(parseInt(_o8i))), _o8j.taiku >= 2 && _o82.get_slotnums(parseInt(_o8i)));
                }
            }
            return 1 == _o87 && _o8b > 0 && (_o84.houg += 3, _o84.kaih += 3), 1 == _o88 && (_o84.houg += 4 * _o8d, _o84.kaih += 1 * _o8d), _o84;
        };
    },
    93526: function(_o8l, _o8m, _o8n) {
        'use strict';
        var _o8o = null;
        var _o8p = this && this.__importDefault || function(_o8q) {
            var _o8r = null;
            return _o8q && _o8q.__esModule ? _o8q : {
                'default': _o8q
            };
        };
        defineModule(_o8m);
        Object.defineProperty(_o8m, '__esModule', {
            'value': true
        }), _o8m.getSlot398PersonalEffect = void 0;
        var _o8s = _o8n(74496),
            _o8t = _o8p(_o8n(18622));
        _o8m.getSlot398PersonalEffect = function(_o8u) {
            var _o8v = null,
                _o8w = new _o8s.SlotItemEffectModel(),
                _o8x = false,
                _o8y = new _o8s.SlotItemEffectModel(),
                _o8z = 0,
                _o90 = 0,
                _o91 = false;
            if (651 == _o8u.ship_id ? (_o8y.houg += 4, _o8y.tyku += 4, _o8y.kaih += 2, _o8x = true, _o91 = true, _o8z = 1, _o90 = 1) : 656 == _o8u.ship_id && (_o8y.houg += 3, _o8y.tyku += 2, _o8y.kaih += 2, _o8x = true, _o91 = true, _o8z = 1, _o90 = 2), 0 == _o8x) return _o8w;
            var _o92 = _o8u.get_slotnums(398);
            _o8w.add(_o8y.multiply(_o92));
            var _o93 = 0,
                _o94 = 0,
                _o95 = _o8u.get_each_level_nums(398),
                _o96 = 0;
            if (_o91) {
                _o95.forEach(function(_o97, _o98) {
                    _o98 >= 4 && (_o96 += _o97);
                });
                for (var _o99 = 0, _o9a = _o8u.have_slot_ids(); _o99 < _o9a.length; _o99++) {
                    var _o9b = _o9a[_o99],
                        _o9c = _o8t.default.model.slot.getMst(_o9b),
                        _o9d = _o9c.equipType;
                    12 != _o9d && 13 != _o9d || (_o9c.sakuteki >= 5 && (_o93 += _o8u.get_slotnums(parseInt(_o9b))), _o9c.taiku >= 2 && (_o94 += _o8u.get_slotnums(parseInt(_o9b))));
                }
            }
            return 1 == _o8z && (_o93 > 0 && (_o8w.houg += 3, _o8w.kaih += 3), _o94 > 0 && (_o8w.tyku += 3, _o8w.kaih += 3)), 1 == _o90 ? (_o8w.houg += 3 * _o96, _o8w.kaih += 2 * _o96) : 2 == _o90 && (_o8w.houg += 2 * _o96, _o8w.kaih += 1 * _o96), _o8w;
        };
    },
    33084: (_o9e, _o9f, _o9g) => {
        'use strict';
        var _o9h = null;
        defineModule(_o9f);
        Object.defineProperty(_o9f, '__esModule', {
            'value': true
        }), _o9f.getSlot399PersonalEffect = void 0;
        var _o9i = _o9g(74496);
        _o9f.getSlot399PersonalEffect = function(_o9j) {
            var _o9k = null,
                _o9l = new _o9i.SlotItemEffectModel(),
                _o9m = false,
                _o9n = new _o9i.SlotItemEffectModel(),
                _o9o = 0;
            if (108 == _o9j.ctype && (_o9n.houg += 1, _o9n.kaih += 2, _o9o = 1, _o9m = true), 0 == _o9m) return _o9l;
            var _o9p = _o9j.get_slotnums(399);
            if (_o9l.add(_o9n.multiply(_o9p)), 0 == _o9o) return _o9l;
            var _o9q = _o9j.get_each_level_nums(399),
                _o9r = 0,
                _o9s = 0;
            return _o9q.map(function(_o9t, _o9u) {
                _o9u >= 3 && (_o9r += _o9t), _o9u >= 5 && (_o9s += _o9t);
            }), 1 == _o9o && (_o9l.houg += 1 * _o9r, _o9l.houg += 1 * _o9s), _o9l;
        };
    },
    80225: (_o9v, _o9w, _o9x) => {
        'use strict';
        var _o9y = null;
        defineModule(_o9w);
        Object.defineProperty(_o9w, '__esModule', {
            'value': true
        }), _o9w.getSlot3_122PersonalEffect = void 0;
        var _o9z = _o9x(74496);
        _o9w.getSlot3_122PersonalEffect = function(_oa0) {
            var _oa1 = null,
                _oa2 = new _o9z.SlotItemEffectModel(),
                _oa3 = false,
                _oa4 = new _o9z.SlotItemEffectModel(),
                _oa5 = 0;
            if (54 == _oa0.ctype && (_oa4.houg += 1, _oa4.tyku += 2, _oa4.kaih += 1, _oa3 = true, _oa5 = 1, 968 == _oa0.ship_id && (_oa4.houg += 1, _oa4.houm += 1, _oa4.kaih += 1)), 981 == _oa0.ship_id && (_oa4.houg += 1, _oa4.tyku += 1, _oa4.kaih += 1, _oa3 = true, _oa5 = 2), 0 == _oa3) return _oa2;
            var _oa6 = _oa0.get_slotnums(3) + _oa0.get_slotnums(122) + _oa0.get_slotnums(533);
            if (_oa2.add(_oa4.multiply(_oa6)), 0 == _oa5) return _oa2;
            var _oa7 = _oa0.get_each_level_over_nums([122]).slot[122],
                _oa8 = _oa0.have_level_num_over_dict[533];
            return 1 == _oa5 ? (null != _oa7 && (_oa7[6] >= 1 && (_oa2.kaih += 1 * _oa7[6]), _oa7[7] >= 1 && (_oa2.tyku += 1 * _oa7[7]), _oa7[8] >= 1 && (_oa2.houm += 1 * _oa7[8]), _oa7[9] >= 1 && (_oa2.kaih += 1 * _oa7[9]), _oa7[10] >= 1 && (_oa2.houg += 1 * _oa7[10])), null != _oa8 && (_oa8[2] >= 1 && (_oa2.tyku += 1 * _oa8[2]), _oa8[4] >= 1 && (_oa2.houg += 1 * _oa8[4]), _oa8[6] >= 1 && (_oa2.houm += 1 * _oa8[6]), _oa8[8] >= 1 && (_oa2.tyku += 1 * _oa8[8]), _oa8[10] >= 1 && (_oa2.kaih += 1 * _oa8[10])), 968 == _oa0.ship_id && null != _oa8 && (_oa8[1] >= 1 && (_oa2.kaih += 1 * _oa8[1]), _oa8[3] >= 1 && (_oa2.tyku += 1 * _oa8[3]), _oa8[5] >= 1 && (_oa2.houm += 1 * _oa8[5]), _oa8[7] >= 1 && (_oa2.kaih += 1 * _oa8[7]), _oa8[9] >= 1 && (_oa2.houg += 1 * _oa8[9]))) : 2 == _oa5 && (null != _oa7 && (_oa7[7] >= 1 && (_oa2.tyku += 1 * _oa7[7]), _oa7[8] >= 1 && (_oa2.kaih += 1 * _oa7[8]), _oa7[9] >= 1 && (_oa2.houm += 1 * _oa7[9]), _oa7[10] >= 1 && (_oa2.houg += 1 * _oa7[10])), null != _oa8 && (_oa8[4] >= 1 && (_oa2.tyku += 1 * _oa8[4]), _oa8[6] >= 1 && (_oa2.kaih += 1 * _oa8[6]), _oa8[8] >= 1 && (_oa2.houm += 1 * _oa8[8]), _oa8[10] >= 1 && (_oa2.houg += 1 * _oa8[10]))), _oa2;
        };
    },
    97831: (_oa9, _oaa, _oab) => {
        'use strict';
        var _oac = null;
        defineModule(_oaa);
        Object.defineProperty(_oaa, '__esModule', {
            'value': true
        }), _oaa.getSlot400PersonalEffect = void 0;
        var _oad = _oab(74496);
        _oaa.getSlot400PersonalEffect = function(_oae) {
            var _oaf = null,
                _oag = new _oad.SlotItemEffectModel(),
                _oah = false,
                _oai = new _oad.SlotItemEffectModel(),
                _oaj = 0,
                _oak = false;
            if (147 != _oae.ship_id && 73 != _oae.ctype && 81 != _oae.ctype || (_oak = true), _oak && (_oai.kaih += 2, _oai.raig += 5, _oai.houg += 1, _oai.souk += 1, _oah = true, _oaj = 1), 0 == _oah) return _oag;
            var _oal = _oae.get_slotnums(400);
            return _oag.add(_oai.multiply(_oal)), _oae.get_slotnums(282) > 0 && 1 == _oaj && (_oag.houg += 2), _oag;
        };
    },
    4050: function(_oam, _oan, _oao) {
        'use strict';
        var _oap = null;
        var _oaq = this && this.__importDefault || function(_oar) {
            var _oas = null;
            return _oar && _oar.__esModule ? _oar : {
                'default': _oar
            };
        };
        defineModule(_oan);
        Object.defineProperty(_oan, '__esModule', {
            'value': true
        }), _oan.getSlot407PersonalEffect = void 0;
        var _oat = _oao(74496),
            _oau = _oaq(_oao(18622));
        _oan.getSlot407PersonalEffect = function(_oav) {
            var _oaw = null,
                _oax = new _oat.SlotItemEffectModel(),
                _oay = false,
                _oaz = new _oat.SlotItemEffectModel(),
                _ob0 = 0;
            if (662 != _oav.ship_id && 663 != _oav.ship_id && 668 != _oav.ship_id || (_oaz.houg += 4, _oaz.tyku += 2, _oaz.kaih += 1, _oay = true, _ob0 = 1), 0 == _oay) return _oax;
            var _ob1 = _oav.get_slotnums(407);
            _oax.add(_oaz.multiply(_ob1));
            for (var _ob2 = 0, _ob3 = 0, _ob4 = 0, _ob5 = _oav.have_slot_ids(); _ob4 < _ob5.length; _ob4++) {
                var _ob6 = _ob5[_ob4],
                    _ob7 = _oau.default.model.slot.getMst(_ob6),
                    _ob8 = _ob7.equipType;
                12 != _ob8 && 13 != _ob8 || (_ob7.sakuteki >= 5 && (_ob2 += _oav.get_slotnums(parseInt(_ob6))), _ob7.taiku >= 2 && (_ob3 += _oav.get_slotnums(parseInt(_ob6))));
            }
            return _ob2 >= 1 && 1 == _ob0 && (_oax.houg += 2, _oax.kaih += 2, _oax.raig += 2), _ob3 >= 1 && 1 == _ob0 && (_oax.tyku += 2, _oax.kaih += 3), _oax;
        };
    },
    78466: (_ob9, _oba, _obb) => {
        'use strict';
        var _obc = null;
        defineModule(_oba);
        Object.defineProperty(_oba, '__esModule', {
            'value': true
        }), _oba.getSlot408PersonalEffect = void 0;
        var _obd = _obb(74496);
        _oba.getSlot408PersonalEffect = function(_obe) {
            var _obf = null,
                _obg = new _obd.SlotItemEffectModel(),
                _obh = false,
                _obi = new _obd.SlotItemEffectModel();
            if ('しんしゅうまる' == _obe.yomi ? (_obi.houg += 2, _obi.saku += 2, _obi.kaih += 2, _obh = true) : 'あきつまる' == _obe.yomi && (_obi.houg += 1, _obi.saku += 1, _obi.kaih += 1, _obi.tais += 1, _obh = true), 2 == _obe.stype && (_obi.houg += 1, _obi.saku += 1, _obi.kaih -= 5, _obh = true), 0 == _obh) return _obg;
            var _obj = _obe.get_slotnums(408);
            return _obg.add(_obi.multiply(_obj)), _obg;
        };
    },
    40061: (_obk, _obl, _obm) => {
        'use strict';
        var _obn = null;
        defineModule(_obl);
        Object.defineProperty(_obl, '__esModule', {
            'value': true
        }), _obl.getSlot409PersonalEffect = void 0;
        var _obo = _obm(74496);
        _obl.getSlot409PersonalEffect = function(_obp) {
            var _obq = null,
                _obr = new _obo.SlotItemEffectModel(),
                _obs = false,
                _obt = new _obo.SlotItemEffectModel();
            if ('しんしゅうまる' == _obp.yomi ? (_obt.houg += 1, _obt.tyku += 2, _obt.kaih += 3, _obs = true) : 'あきつまる' == _obp.yomi && (_obt.houg += 1, _obt.tyku += 1, _obt.kaih += 2, _obt.tais += 1, _obs = true), 0 == _obs) return _obr;
            var _obu = _obp.get_slotnums(409);
            return _obr.add(_obt.multiply(_obu)), _obr;
        };
    },
    79988: (_obv, _obw, _obx) => {
        'use strict';
        var _oby = null;
        defineModule(_obw);
        Object.defineProperty(_obw, '__esModule', {
            'value': true
        }), _obw.getSlot411PersonalEffect = void 0;
        var _obz = _obx(74496);
        _obw.getSlot411PersonalEffect = function(_oc0) {
            var _oc1 = null,
                _oc2 = new _obz.SlotItemEffectModel(),
                _oc3 = new _obz.SlotItemEffectModel(),
                _oc4 = false,
                _oc5 = 0;
            if (2 == _oc0.stype && (_oc3.kaih -= 9, _oc4 = true), 3 != _oc0.stype && 4 != _oc0.stype || (_oc3.kaih -= 7, _oc4 = true), 21 == _oc0.stype && (_oc3.kaih -= 6, _oc4 = true), 5 != _oc0.stype && 6 != _oc0.stype || (_oc3.kaih -= 5, _oc4 = true), 593 == _oc0.ship_id && (_oc2.houg += 1, _oc2.tyku += 2, _oc2.kaih += 3), 151 == _oc0.ship_id || 411 == _oc0.ship_id || 412 == _oc0.ship_id || 593 == _oc0.ship_id || 954 == _oc0.ship_id ? (_oc2.houg += 3, _oc2.tyku += 4, _oc5 = 1) : 694 == _oc0.ship_id ? (_oc2.houg += 4, _oc2.tyku += 2, _oc5 = 2) : 541 != _oc0.ship_id && 573 != _oc0.ship_id && 553 != _oc0.ship_id && 554 != _oc0.ship_id || (_oc2.houg += 2, _oc2.tyku += 2, _oc5 = 1), _oc4) {
                var _oc6 = _oc0.get_slotnums(411);
                _oc2.add(_oc3.multiply(_oc6));
            }
            if (0 == _oc5) return _oc2;
            var _oc7 = _oc0.get_each_level_nums(411),
                _oc8 = 0,
                _oc9 = 0;
            return _oc5 > 0 && _oc7.forEach(function(_oca, _ocb) {
                _ocb >= 4 && (_oc8 += _oca), _ocb >= 5 && (_oc9 += _oca);
            }), 1 == _oc5 ? (_oc8 >= 1 && (_oc2.houg += 1, _oc2.tyku += 1), _oc7[10] >= 1 && (_oc2.houg += 1, _oc2.tyku += 1)) : 2 == _oc5 && (_oc9 >= 1 && (_oc2.houg += 1, _oc2.tyku += 1), _oc7[10] >= 1 && (_oc2.houg += 2, _oc2.tyku += 1)), _oc2;
        };
    },
    74428: (_occ, _ocd, _oce) => {
        'use strict';
        var _ocf = null;
        defineModule(_ocd);
        Object.defineProperty(_ocd, '__esModule', {
            'value': true
        }), _ocd.getSlot412PersonalEffect = void 0;
        var _ocg = _oce(74496);
        _ocd.getSlot412PersonalEffect = function(_och) {
            var _oci = null,
                _ocj = new _ocg.SlotItemEffectModel(),
                _ock = false,
                _ocl = 0,
                _ocm = new _ocg.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_och.ctype) >= 0 ? (_ocj.houg += 2, _ocj.raig += 4, _ocj.tais += 2, _ocm.kaih += 3, _ocm.saku += 1, _ock = true, _ocl = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_och.ctype) >= 0 ? (_ocj.houg += 3, _ocj.raig += 3, _ocm.kaih += 2, _ocm.saku += 3, _ock = true, _ocl = 1) : [7, 13, 29, 8, 9, 31].indexOf(_och.ctype) >= 0 && (_ocj.houg += 1, _ocm.kaih += 1, _ocm.saku += 1, _ock = true), 0 == _ock) return _ocj;
            var _ocn = _och.get_slotnums(412);
            if (_ocj.add(_ocm.multiply(_ocn)), 0 == _ocl) return _ocj;
            var _oco = _och.get_each_level_nums(412),
                _ocp = 0,
                _ocq = 0;
            return _ocl > 0 && _oco.forEach(function(_ocr, _ocs) {
                _ocs >= 4 && (_ocp += _ocr), _ocs >= 8 && (_ocq += _ocr);
            }), 1 == _ocl && (_ocp > 0 && (_ocj.houg += 1), _ocq > 0 && (_ocj.raig += 1)), _ocj;
        };
    },
    2631: (_oct, _ocu, _ocv) => {
        'use strict';
        var _ocw = null;
        defineModule(_ocu);
        Object.defineProperty(_ocu, '__esModule', {
            'value': true
        }), _ocu.getSlot413PersonalEffect = void 0;
        var _ocx = _ocv(74496);
        _ocu.getSlot413PersonalEffect = function(_ocy) {
            var _ocz = null,
                _od0 = new _ocx.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_ocy.ctype) >= 0 ? (_od0.houg += 2, _od0.raig += 2, _od0.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_ocy.ctype) >= 0 && (_od0.houg += 4, _od0.raig += 2, _od0.kaih += 2), 38 == _ocy.ctype || 54 == _ocy.ctype ? (_od0.houg += 2, _od0.raig += 3, _od0.kaih += 3) : 4 == _ocy.ctype || 20 == _ocy.ctype || 16 == _ocy.ctype || 41 == _ocy.ctype || 52 == _ocy.ctype ? (_od0.houg += 1, _od0.raig += 2, _od0.kaih += 2) : 21 != _ocy.ctype && 34 != _ocy.ctype || (_od0.tyku += 2, _od0.raig += 1, _od0.kaih += 1), 'なか' == _ocy.yomi || 'ゆら' == _ocy.yomi || 'やはぎ' == _ocy.yomi || 'のしろ' == _ocy.yomi || 'はまなみ' == _ocy.yomi || 'しまかぜ' == _ocy.yomi || 'きよしも' == _ocy.yomi || 'はつしも' == _ocy.yomi ? (_od0.tyku += 1, _od0.kaih += 1) : 'じんつう' != _ocy.yomi && 'せんだい' != _ocy.yomi && 'ながなみ' != _ocy.yomi && 'はつしも' != _ocy.yomi && 'てるづき' != _ocy.yomi || (_od0.houg += 1, _od0.raig += 1), 543 == _ocy.ship_id ? (_od0.houg += 1, _od0.kaih += 1) : 159 == _ocy.ship_id && (_od0.houg += 2), _od0;
        };
    },
    27177: (_od1, _od2, _od3) => {
        'use strict';
        var _od4 = null;
        defineModule(_od2);
        Object.defineProperty(_od2, '__esModule', {
            'value': true
        }), _od2.getSlot415PersonalEffect = void 0;
        var _od5 = _od3(74496);
        _od2.getSlot415PersonalEffect = function(_od6) {
            var _od7 = null,
                _od8 = new _od5.SlotItemEffectModel(),
                _od9 = [];
            if ('アメリカ' == _od6.getCountryName() && (_od8.saku += 1, _od8.tais += 1, _od9.push(1)), 95 != _od6.ctype && 99 != _od6.ctype && 106 != _od6.ctype && 110 != _od6.ctype && 121 != _od6.ctype || (_od8.houg += 1, _od9.push(2)), 0 == _od9.length) return _od8;
            var _oda = _od6.get_each_level_nums(415),
                _odb = 0,
                _odc = 0,
                _odd = 0;
            return _od9.length > 0 && (_oda.forEach(function(_ode, _odf) {
                _odf >= 5 && (_odb += _ode), _odf >= 3 && (_odc += _ode), _odf >= 8 && (_odd += _ode);
            }), _od9.forEach(function(_odg) {
                var _odh = null;
                1 == _odg ? _odb >= 1 && (_od8.kaih += 1) : 2 == _odg && (_odc >= 1 && (_od8.kaih += 1), _odd >= 1 && (_od8.houg += 1));
            })), _od8;
        };
    },
    53908: (_odi, _odj, _odk) => {
        'use strict';
        var _odl = null;
        defineModule(_odj);
        Object.defineProperty(_odj, '__esModule', {
            'value': true
        }), _odj.getSlot419PersonalEffect = void 0;
        var _odm = _odk(74496);
        _odj.getSlot419PersonalEffect = function(_odn) {
            var _odo = null,
                _odp = new _odm.SlotItemEffectModel(),
                _odq = false,
                _odr = new _odm.SlotItemEffectModel(),
                _ods = 0;
            if ('アメリカ' == _odn.getCountryName() && (_odr.houg += 2, _odq = true, _ods = 1), 0 == _odq) return _odp;
            var _odt = _odn.get_slotnums(419);
            if (_odp.add(_odr.multiply(_odt)), 0 == _ods) return _odp;
            var _odu = _odn.get_each_level_nums(419),
                _odv = 0,
                _odw = 0;
            return _ods > 0 && _odu.forEach(function(_odx, _ody) {
                _ody >= 2 && (_odv += _odx), _ody >= 7 && (_odw += _odx);
            }), 1 == _ods && (_odv >= 1 && (_odp.houg += 1 * _odv), _odw >= 1 && (_odp.houg += 1 * _odw)), _odp;
        };
    },
    79813: (_odz, _oe0, _oe1) => {
        'use strict';
        var _oe2 = null;
        defineModule(_oe0);
        Object.defineProperty(_oe0, '__esModule', {
            'value': true
        }), _oe0.getSlot420PersonalEffect = void 0;
        var _oe3 = _oe1(74496);
        _oe0.getSlot420PersonalEffect = function(_oe4) {
            var _oe5 = null,
                _oe6 = new _oe3.SlotItemEffectModel(),
                _oe7 = false,
                _oe8 = new _oe3.SlotItemEffectModel(),
                _oe9 = 0,
                _oea = _oe4.getCountryName();
            if ('アメリカ' != _oea && 67 != _oe4.ctype && 78 != _oe4.ctype && 82 != _oe4.ctype && 88 != _oe4.ctype && 108 != _oe4.ctype && 112 != _oe4.ctype || (_oe8.houg += 1, _oe9 = 1, _oe7 = true), 84 == _oe4.ctype ? (_oe8.houg += 1, _oe7 = true) : 78 == _oe4.ctype && (_oe8.houg -= 1, _oe7 = true), 7 == _oe4.stype && (_oe8.houg -= 2, _oe8.kaih -= 1, _oe8.souk -= 2, _oe7 = true), 0 == _oe7) return _oe6;
            var _oeb = _oe4.get_slotnums(420);
            if (_oe6.add(_oe8.multiply(_oeb)), 0 == _oe9) return _oe6;
            var _oec = _oe4.get_each_level_nums(420),
                _oed = 0,
                _oee = 0,
                _oef = 0,
                _oeg = 0;
            _oe9 > 0 && _oec.forEach(function(_oeh, _oei) {
                _oei >= 3 && (_oed += _oeh), _oei >= 7 && (_oee += _oeh), _oei >= 8 && (_oef += _oeh), _oei >= 9 && (_oeg += _oeh);
            });
            var _oej = _oec[10];
            return 1 == _oe9 && (_oed >= 1 && (_oe6.houg += 1 * _oed), 'アメリカ' == _oea && (_oee >= 1 && (_oe6.houm += 1 * _oee), _oef >= 1 && (_oe6.houg += 1 * _oef), _oeg >= 1 && (_oe6.houm += 1 * _oeg), _oej >= 1 && (_oe6.houg += 1 * _oej))), _oe6;
        };
    },
    16088: (_oek, _oel, _oem) => {
        'use strict';
        var _oen = null;
        defineModule(_oel);
        Object.defineProperty(_oel, '__esModule', {
            'value': true
        }), _oel.getSlot421PersonalEffect = void 0;
        var _oeo = _oem(74496);
        _oel.getSlot421PersonalEffect = function(_oep) {
            var _oeq = null,
                _oer = new _oeo.SlotItemEffectModel(),
                _oes = false,
                _oet = new _oeo.SlotItemEffectModel(),
                _oeu = 0,
                _oev = _oep.getCountryName();
            if ('アメリカ' != _oev && 67 != _oep.ctype && 78 != _oep.ctype && 82 != _oep.ctype && 88 != _oep.ctype && 108 != _oep.ctype && 112 != _oep.ctype || (_oet.houg += 2, _oes = true, _oeu = 1), 84 == _oep.ctype ? (_oet.houg += 1, _oes = true) : 78 == _oep.ctype && (_oet.houg -= 1, _oes = true), 7 == _oep.stype && (_oet.houg -= 2, _oet.kaih -= 1, _oet.souk -= 2, _oes = true), 0 == _oes) return _oer;
            var _oew = _oep.get_slotnums(421);
            if (_oer.add(_oet.multiply(_oew)), 0 == _oeu) return _oer;
            var _oex = _oep.get_each_level_nums(421),
                _oey = 0,
                _oez = 0,
                _of0 = 0,
                _of1 = 0,
                _of2 = 0;
            _oeu > 0 && _oex.forEach(function(_of3, _of4) {
                _of4 >= 5 && (_oey += _of3), _of4 >= 6 && (_oez += _of3), _of4 >= 7 && (_of0 += _of3), _of4 >= 8 && (_of1 += _of3), _of4 >= 9 && (_of2 += _of3);
            });
            var _of5 = _oex[10];
            return 1 == _oeu && (_oey >= 1 && (_oer.houg += 1 * _oey), 'アメリカ' == _oev && (_oez >= 1 && (_oer.houm += 1 * _oez), _of0 >= 1 && (_oer.houg += 1 * _of0), _of1 >= 1 && (_oer.houm += 1 * _of1), _of2 >= 1 && (_oer.houg += 1 * _of2), _of5 >= 1 && (_oer.houm += 1 * _of5))), _oer;
        };
    },
    69939: (_of6, _of7, _of8) => {
        'use strict';
        var _of9 = null;
        defineModule(_of7);
        Object.defineProperty(_of7, '__esModule', {
            'value': true
        }), _of7.getSlot422PersonalEffect = void 0;
        var _ofa = _of8(74496);
        _of7.getSlot422PersonalEffect = function(_ofb) {
            var _ofc = null,
                _ofd = new _ofa.SlotItemEffectModel(),
                _ofe = false,
                _off = new _ofa.SlotItemEffectModel();
            if ('アメリカ' != _ofb.getCountryName() && 67 != _ofb.ctype && 78 != _ofb.ctype && 82 != _ofb.ctype && 88 != _ofb.ctype && 108 != _ofb.ctype && 112 != _ofb.ctype || (_off.houg += 1, _off.kaih += 1, _ofe = true), 84 == _ofb.ctype && (_off.houg += 1, _off.tyku += 1, _ofe = true), 707 == _ofb.ship_id && (_off.houg += 2, _off.kaih += 2, _off.tyku += 2, _ofe = true), 0 == _ofe) return _ofd;
            var _ofg = _ofb.get_slotnums(422);
            return _ofd.add(_off.multiply(_ofg)), _ofd;
        };
    },
    33734: (_ofh, _ofi, _ofj) => {
        'use strict';
        var _ofk = null;
        defineModule(_ofi);
        Object.defineProperty(_ofi, '__esModule', {
            'value': true
        }), _ofi.getSlot423PersonalEffect = void 0;
        var _ofl = _ofj(74496);
        _ofi.getSlot423PersonalEffect = function(_ofm) {
            var _ofn = null,
                _ofo = new _ofl.SlotItemEffectModel(),
                _ofp = false,
                _ofq = new _ofl.SlotItemEffectModel();
            78 != _ofm.ctype && 112 != _ofm.ctype || (_ofq.houg += 2, _ofq.tyku += 2, _ofq.kaih += 2, _ofq.saku += 2, _ofp = true);
            var _ofr = _ofm.getCountryName();
            if (67 == _ofm.ctype || 78 == _ofm.ctype || 82 == _ofm.ctype || 88 == _ofm.ctype || 108 == _ofm.ctype || 112 == _ofm.ctype ? (_ofq.houg += 2, _ofq.tyku += 2, _ofq.kaih += 2, _ofq.saku += 2, _ofp = true) : 'アメリカ' == _ofr && (_ofq.houg += 1, _ofq.tyku += 1, _ofq.kaih += 1, _ofq.saku += 1, _ofp = true), 0 == _ofp) return _ofo;
            var _ofs = _ofm.get_slotnums(423);
            return _ofo.add(_ofq.multiply(_ofs)), _ofo;
        };
    },
    34432: (_oft, _ofu, _ofv) => {
        'use strict';
        var _ofw = null;
        defineModule(_ofu);
        Object.defineProperty(_ofu, '__esModule', {
            'value': true
        }), _ofu.getSlot424PersonalEffect = void 0;
        var _ofx = _ofv(74496);
        _ofu.getSlot424PersonalEffect = function(_ofy) {
            var _ofz = null,
                _og0 = new _ofx.SlotItemEffectModel(),
                _og1 = false,
                _og2 = new _ofx.SlotItemEffectModel(),
                _og3 = 0;
            67 != _ofy.ctype && 78 != _ofy.ctype && 82 != _ofy.ctype && 88 != _ofy.ctype && 108 != _ofy.ctype && 112 != _ofy.ctype || (_og2.houg += 2, _og2.raig += 3, _og1 = true, _og3 = 1);
            var _og4 = _ofy.get_slotnums(424);
            _og1 && _og0.add(_og2.multiply(_og4));
            var _og5 = _ofy.get_each_level_nums(424),
                _og6 = 0,
                _og7 = 0,
                _og8 = 0;
            _og5.forEach(function(_og9, _oga) {
                _oga >= 2 && (_og6 += _og9), _oga >= 6 && (_og7 += _og9), _oga >= 8 && (_og8 += _og9);
            });
            var _ogb = _og5[10];
            return 1 == _og3 && (_og6 >= 1 && (_og0.houg += 1 * _og6), _og7 >= 1 && (_og0.houg += 1 * _og7), _og8 >= 1 && (_og0.houm += 1 * _og8)), _ogb > 0 && (_og0.houm += 1 * _ogb), _og0;
        };
    },
    97423: (_ogc, _ogd, _oge) => {
        'use strict';
        var _ogf = null;
        defineModule(_ogd);
        Object.defineProperty(_ogd, '__esModule', {
            'value': true
        }), _ogd.getSlot425PersonalEffect = void 0;
        var _ogg = _oge(74496);
        _ogd.getSlot425PersonalEffect = function(_ogh) {
            var _ogi = null,
                _ogj = new _ogg.SlotItemEffectModel(),
                _ogk = false,
                _ogl = new _ogg.SlotItemEffectModel(),
                _ogm = 0;
            67 != _ogh.ctype && 78 != _ogh.ctype && 82 != _ogh.ctype && 88 != _ogh.ctype && 108 != _ogh.ctype && 112 != _ogh.ctype || (_ogl.houg += 2, _ogl.tais += 2, _ogl.raig += 1, _ogl.saku += 1, _ogk = true, _ogm = 1);
            var _ogn = _ogh.get_slotnums(425);
            _ogk && _ogj.add(_ogl.multiply(_ogn));
            var _ogo = _ogh.get_each_level_nums(425),
                _ogp = 0,
                _ogq = 0,
                _ogr = 0,
                _ogs = 0,
                _ogt = 0,
                _ogu = 0;
            _ogo.forEach(function(_ogv, _ogw) {
                _ogw >= 2 && (_ogp += _ogv), _ogw >= 4 && (_ogq += _ogv), _ogw >= 6 && (_ogr += _ogv), _ogw >= 7 && (_ogs += _ogv), _ogw >= 8 && (_ogt += _ogv), _ogw >= 9 && (_ogu += _ogv);
            });
            var _ogx = _ogo[10];
            return 1 == _ogm && (_ogp >= 1 && (_ogj.tais += 1 * _ogp), _ogq >= 1 && (_ogj.houg += 1 * _ogq), _ogr >= 1 && (_ogj.tais += 1 * _ogr), _ogs >= 1 && (_ogj.houm += 1 * _ogs), _ogt >= 1 && (_ogj.raig += 1 * _ogt), _ogu >= 1 && (_ogj.houg += 1 * _ogu), _ogx >= 1 && (_ogj.tais += 1 * _ogx)), _ogs >= 1 && (_ogj.houg += 1 * _ogs), _ogt >= 1 && (_ogj.tais += 1 * _ogt), _ogu >= 1 && (_ogj.houm += 1 * _ogu), _ogx >= 1 && (_ogj.houm += 1 * _ogx), _ogj;
        };
    },
    23551: (_ogy, _ogz, _oh0) => {
        'use strict';
        var _oh1 = null;
        defineModule(_ogz);
        Object.defineProperty(_ogz, '__esModule', {
            'value': true
        }), _ogz.getSlot430PersonalEffect = void 0;
        var _oh2 = _oh0(74496);
        _ogz.getSlot430PersonalEffect = function(_oh3) {
            var _oh4 = null,
                _oh5 = new _oh2.SlotItemEffectModel(),
                _oh6 = false,
                _oh7 = new _oh2.SlotItemEffectModel(),
                _oh8 = 0;
            if (113 == _oh3.ctype && (_oh7.tyku += 1, _oh7.kaih += 1, _oh6 = true), 58 != _oh3.ctype && 61 != _oh3.ctype && 64 != _oh3.ctype && 68 != _oh3.ctype && 80 != _oh3.ctype && 92 != _oh3.ctype && 113 != _oh3.ctype && 124 != _oh3.ctype || (_oh7.tyku += 2, _oh7.kaih += 1, _oh6 = true, _oh8 = 1), 0 == _oh6) return _oh5;
            var _oh9 = _oh3.get_slotnums(430);
            if (_oh5.add(_oh7.multiply(_oh9)), 0 == _oh8) return _oh5;
            var _oha = _oh3.get_each_level_nums(430),
                _ohb = 0,
                _ohc = 0,
                _ohd = 0;
            if (_oh8 > 0 && _oha.forEach(function(_ohe, _ohf) {
                    _ohf >= 2 && (_ohb += _ohe), _ohf >= 4 && (_ohc += _ohe), _ohf >= 7 && (_ohd += _ohe);
                }), 1 == _oh8) {
                _ohb >= 1 && (_oh5.kaih += 1 * _ohb), _ohc >= 1 && (_oh5.tyku += 1 * _ohc), _ohd >= 1 && (_oh5.kaih += 1 * _ohd);
                var _ohg = _oha[10];
                _ohg >= 1 && (_oh5.tyku += 1 * _ohg);
            }
            return _oh5;
        };
    },
    6173: (_ohh, _ohi, _ohj) => {
        'use strict';
        var _ohk = null;
        defineModule(_ohi);
        Object.defineProperty(_ohi, '__esModule', {
            'value': true
        }), _ohi.getSlot437PersonalEffect = void 0;
        var _ohl = _ohj(74496);
        _ohi.getSlot437PersonalEffect = function(_ohm) {
            var _ohn = null,
                _oho = new _ohl.SlotItemEffectModel(),
                _ohp = false,
                _ohq = new _ohl.SlotItemEffectModel();
            if (285 == _ohm.ship_id ? (_ohq.houg += 3, _ohq.tyku += 3, _ohq.kaih += 4, _ohp = true) : 894 == _ohm.ship_id || 899 == _ohm.ship_id ? (_ohq.houg += 4, _ohq.tyku += 4, _ohq.kaih += 4, _ohp = true) : 196 == _ohm.ship_id || 197 == _ohm.ship_id ? (_ohq.houg += 2, _ohq.tyku += 2, _ohq.kaih += 3, _ohp = true) : 508 == _ohm.ship_id || 509 == _ohm.ship_id || 646 == _ohm.ship_id ? (_ohq.houg += 2, _ohq.tyku += 2, _ohq.kaih += 2, _ohp = true) : 888 != _ohm.ship_id && 883 != _ohm.ship_id && 553 != _ohm.ship_id && 554 != _ohm.ship_id || (_ohq.houg += 1, _ohq.tyku += 2, _ohq.kaih += 2, _ohp = true), 0 == _ohp) return _oho;
            var _ohr = _ohm.get_slotnums(437);
            return _oho.add(_ohq.multiply(_ohr)), _oho;
        };
    },
    53709: (_ohs, _oht, _ohu) => {
        'use strict';
        var _ohv = null;
        defineModule(_oht);
        Object.defineProperty(_oht, '__esModule', {
            'value': true
        }), _oht.getSlot438PersonalEffect = void 0;
        var _ohw = _ohu(74496);
        _oht.getSlot438PersonalEffect = function(_ohx) {
            var _ohy = null,
                _ohz = new _ohw.SlotItemEffectModel(),
                _oi0 = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_ohx.ctype) > -1 && (_ohz.tais += 1, _ohz.kaih += 1), 160 == _ohx.ship_id || 488 == _ohx.ship_id || 141 == _ohx.ship_id ? (_ohz.tais += 1, _ohz.kaih += 1) : 145 != _ohx.ship_id && 588 != _ohx.ship_id && 667 != _ohx.ship_id && 578 != _ohx.ship_id && 476 != _ohx.ship_id && 363 != _ohx.ship_id && 961 != _ohx.ship_id || (_oi0 = 1), 'うしお' == _ohx.yomi || 'まいかぜ' == _ohx.yomi || 'いそかぜ' == _ohx.yomi || 'はまかぜ' == _ohx.yomi || 'いかづち' == _ohx.yomi || 'やまぐも' == _ohx.yomi || 'うみかぜ' == _ohx.yomi || 'かわかぜ' == _ohx.yomi || 'すずかぜ' == _ohx.yomi ? _ohz.tais += 1 : 'しぐれ' != _ohx.yomi && 'やまかぜ' != _ohx.yomi && 'かみかぜ' != _ohx.yomi && 'はるかぜ' != _ohx.yomi && 'みくら' != _ohx.yomi && 'いしがき' != _ohx.yomi || (_ohz.tais += 1, _ohz.kaih += 1), 0 == _oi0) return _ohz;
            var _oi1 = _ohx.get_each_level_nums(438),
                _oi2 = 0,
                _oi3 = 0,
                _oi4 = 0,
                _oi5 = _oi1[10];
            return _oi0 > 0 && _oi1.forEach(function(_oi6, _oi7) {
                _oi7 >= 4 && (_oi2 += _oi6), _oi7 >= 6 && (_oi3 += _oi6), _oi7 >= 8 && (_oi4 += _oi6);
            }), 1 == _oi0 && (_oi2 >= 1 && (_ohz.tais += 1), _oi3 >= 1 && (_ohz.kaih += 1), _oi4 >= 1 && (_ohz.tais += 1), _oi5 >= 1 && (_ohz.kaih += 1)), _ohz;
        };
    },
    99790: (_oi8, _oi9, _oia) => {
        'use strict';
        var _oib = null;
        defineModule(_oi9);
        Object.defineProperty(_oi9, '__esModule', {
            'value': true
        }), _oi9.getSlot439PersonalEffect = void 0;
        var _oic = _oia(74496);
        _oi9.getSlot439PersonalEffect = function(_oid) {
            var _oie = null,
                _oif = new _oic.SlotItemEffectModel();
            1 != _oid.stype && 2 != _oid.stype && 3 != _oid.stype && 21 != _oid.stype || (_oif.tais += 1, _oif.kaih += 1), 101 != _oid.ctype && 1 != _oid.stype || (_oif.tais += 1);
            var _oig = _oid.getCountryName();
            return 'アメリカ' != _oig && 'イギリス' != _oig || (_oif.tais += 2), _oif;
        };
    },
    18387: (_oih, _oii, _oij) => {
        'use strict';
        var _oik = null;
        defineModule(_oii);
        Object.defineProperty(_oii, '__esModule', {
            'value': true
        }), _oii.getSlot440_441PersonalEffect = void 0;
        var _oil = _oij(74496);
        _oii.getSlot440_441PersonalEffect = function(_oim) {
            var _oin = null,
                _oio = new _oil.SlotItemEffectModel();
            return 114 == _oim.ctype && (_oio.raig += 2), _oio;
        };
    },
    70941: (_oip, _oiq, _oir) => {
        'use strict';
        var _ois = null;
        defineModule(_oiq);
        Object.defineProperty(_oiq, '__esModule', {
            'value': true
        }), _oiq.getSlot442_443PersonalEffect = void 0;
        var _oit = _oir(74496);
        _oiq.getSlot442_443PersonalEffect = function(_oiu) {
            var _oiv = null,
                _oiw = new _oit.SlotItemEffectModel();
            return 122 == _oiu.ctype ? (_oiw.raig += 1, _oiw.kaih += 2) : 114 == _oiu.ctype && (_oiw.raig += 2), _oiw;
        };
    },
    35025: (_oix, _oiy, _oiz) => {
        'use strict';
        var _oj0 = null;
        defineModule(_oiy);
        Object.defineProperty(_oiy, '__esModule', {
            'value': true
        }), _oiy.getSlot447PersonalEffect = void 0;
        var _oj1 = _oiz(74496);
        _oiy.getSlot447PersonalEffect = function(_oj2) {
            var _oj3 = null,
                _oj4 = new _oj1.SlotItemEffectModel(),
                _oj5 = _oj2.get_each_level_nums(447),
                _oj6 = 0,
                _oj7 = 0,
                _oj8 = 0,
                _oj9 = 0;
            _oj5.forEach(function(_oja, _ojb) {
                _ojb >= 2 && (_oj6 += _oja), _ojb >= 4 && (_oj7 += _oja), _ojb >= 6 && (_oj8 += _oja), _ojb >= 8 && (_oj9 += _oja);
            }), _oj6 >= 1 && (_oj4.houg += 1 * _oj6), _oj7 >= 1 && (_oj4.tyku += 1 * _oj7), _oj8 >= 1 && (_oj4.tais += 1 * _oj8), _oj9 >= 1 && (_oj4.kaih += 1 * _oj9);
            var _ojc = _oj5[10];
            _ojc >= 1 && (_oj4.tais += 1 * _ojc);
            var _ojd = false,
                _oje = new _oj1.SlotItemEffectModel();
            if (76 == _oj2.ctype && (_oje.houg += 1, _oje.tais += 1, _oje.kaih += 2, _ojd = true), 'うんよう' == _oj2.yomi ? (_oje.houg += 1, _oje.tais += 1, _oje.kaih += 1, _ojd = true) : 'ほうしょう' != _oj2.yomi && 'たいげい・りゅうほう' != _oj2.yomi || (_oje.houg += 1, _oje.tais += 2, _oje.kaih += 1, _ojd = true), 0 == _ojd) return _oj4;
            894 != _oj2.ship_id && 899 != _oj2.ship_id || (_oje.houg += 1, _oje.kaih += 1, _oje.tais += 1, _oje.tyku += 1, _ojd = true);
            var _ojf = _oj2.get_slotnums(447);
            return _oj4.add(_oje.multiply(_ojf)), _oj4;
        };
    },
    96804: (_ojg, _ojh, _oji) => {
        'use strict';
        var _ojj = null;
        defineModule(_ojh);
        Object.defineProperty(_ojh, '__esModule', {
            'value': true
        }), _ojh.getSlot450PersonalEffect = void 0;
        var _ojk = _oji(74496);
        _ojh.getSlot450PersonalEffect = function(_ojl) {
            var _ojm = null,
                _ojn = new _ojk.SlotItemEffectModel(),
                _ojo = false,
                _ojp = new _ojk.SlotItemEffectModel();
            if (101 == _ojl.ctype && (_ojp.houg += 1, _ojp.tyku += 2, _ojp.souk += 1, _ojp.kaih += 3, _ojo = true), 1 == _ojl.stype && (_ojp.tyku += 1, _ojp.souk += 1, _ojp.kaih += 2, _ojo = true), 0 == _ojo) return _ojn;
            var _ojq = _ojl.get_slotnums(450);
            return _ojn.add(_ojp.multiply(_ojq)), _ojn;
        };
    },
    33896: (_ojr, _ojs, _ojt) => {
        'use strict';
        var _oju = null;
        defineModule(_ojs);
        Object.defineProperty(_ojs, '__esModule', {
            'value': true
        }), _ojs.getSlot451PersonalEffect = void 0;
        var _ojv = _ojt(74496);
        _ojs.getSlot451PersonalEffect = function(_ojw) {
            var _ojx = null,
                _ojy = new _ojv.SlotItemEffectModel(),
                _ojz = false,
                _ok0 = new _ojv.SlotItemEffectModel(),
                _ok1 = 0;
            if ('あきつまる' == _ojw.yomi ? (_ok0.houg += 1, _ok0.tais += 2, _ojz = true, 166 == _ojw.ship_id && (_ok1 = 2)) : 'やましおまる' != _ojw.yomi && 'くまのまる' != _ojw.yomi || (_ok0.houg += 1, _ok0.tais += 3, _ojz = true, _ok1 = 1), 0 == _ojz) return _ojy;
            var _ok2 = _ojw.get_slotnums(451);
            if (_ojy.add(_ok0.multiply(_ok2)), 0 == _ok1) return _ojy;
            var _ok3 = _ojw.get_each_level_nums(451),
                _ok4 = [];
            return _ok1 > 0 && _ok3.forEach(function(_ok5, _ok6) {
                var _ok7 = null;
                for (var _ok8 = 1; _ok8 <= _ojw.SLOT_LEVEL_MAX; _ok8++) _ok6 >= _ok8 && (null == _ok4[_ok8] && (_ok4[_ok8] = 0), _ok4[_ok8] += _ok5);
            }), 1 == _ok1 ? (_ok4[1] >= 1 && (_ojy.houg += 2 * _ok4[1]), _ok4[2] >= 1 && (_ojy.houm += 1 * _ok4[2]), _ok4[3] >= 1 && (_ojy.tais += 1 * _ok4[3]), _ok4[4] >= 1 && (_ojy.houg += 1 * _ok4[4]), _ok4[6] >= 1 && (_ojy.houm += 1 * _ok4[6]), _ok4[8] >= 1 && (_ojy.tais += 1 * _ok4[8]), _ok4[10] >= 1 && (_ojy.houg += 1 * _ok4[10])) : 2 == _ok1 && (_ok4[1] >= 1 && (_ojy.houg += 1 * _ok4[1]), _ok4[3] >= 1 && (_ojy.tais += 1 * _ok4[3]), _ok4[5] >= 1 && (_ojy.houm += 1 * _ok4[5]), _ok4[7] >= 1 && (_ojy.tais += 1 * _ok4[7]), _ok4[10] >= 1 && (_ojy.houg += 1 * _ok4[10])), _ojy;
        };
    },
    11031: function(_ok9, _oka, _okb) {
        'use strict';
        var _okc = null;
        var _okd = this && this.__importDefault || function(_oke) {
            var _okf = null;
            return _oke && _oke.__esModule ? _oke : {
                'default': _oke
            };
        };
        defineModule(_oka);
        Object.defineProperty(_oka, '__esModule', {
            'value': true
        }), _oka.getSlot455PersonalEffect = void 0;
        var _okg = _okb(74496),
            _okh = _okd(_okb(18622));
        _oka.getSlot455PersonalEffect = function(_oki) {
            var _okj = null,
                _okk = new _okg.SlotItemEffectModel(),
                _okl = false,
                _okm = new _okg.SlotItemEffectModel(),
                _okn = 0,
                _oko = _oki.get_slotnums(455);
            if (1 != _oki.ctype && 5 != _oki.ctype && 12 != _oki.ctype || (_okm.houg += 2, _okm.tyku += 1, 12 == _oki.ctype && (_okm.houg += 1), 666 == _oki.ship_id ? (_okm.houg += 1, _okm.tais += 1) : 959 == _oki.ship_id && (_okm.houg += 2, _oko >= 2 && (_okk.houg += 2), _oko >= 3 && (_okk.houg += 3)), _okn = 1, _okl = true), 'うらなみ' == _oki.yomi && (_okm.houg += 1, 647 == _oki.ship_id && (_okm.houg += 1, _okm.raig += 1, _okm.tais += 1, _okm.kaih += 1), _okl = true), 0 == _okl) return _okk;
            if (_okk.add(_okm.multiply(_oko)), 0 == _okn) return _okk;
            for (var _okp = 0, _okq = 0, _okr = 0, _oks = _oki.have_slot_ids(); _okr < _oks.length; _okr++) {
                var _okt = _oks[_okr],
                    _oku = _okh.default.model.slot.getMst(_okt),
                    _okv = _oku.equipType;
                12 != _okv && 13 != _okv || (_oku.sakuteki >= 5 && (_okp += _oki.get_slotnums(parseInt(_okt))), _oku.taiku >= 2 && (_okq += _oki.get_slotnums(parseInt(_okt))));
            }
            if (1 == _okn) {
                _okp >= 1 && (_okk.houg += 3, _okk.kaih += 2, _okk.raig += 1);
                var _okw = _oki.get_slotnums(13),
                    _okx = _oki.get_slotnums(125),
                    _oky = _oki.get_slotnums(285),
                    _okz = _okw + _okx + _oky;
                1 == _okz ? (_okk.houg += 1, _okk.raig += 3) : _okz >= 2 && (_okk.houg += 2, _okk.raig += 5), _oky >= 1 && (_okk.raig += 1), _okq >= 1 && (_okk.tyku += 4);
            }
            return _okk;
        };
    },
    71383: (_ol0, _ol1, _ol2) => {
        'use strict';
        var _ol3 = null;
        defineModule(_ol1);
        Object.defineProperty(_ol1, '__esModule', {
            'value': true
        }), _ol1.getSlot456PersonalEffect = void 0;
        var _ol4 = _ol2(74496);
        _ol1.getSlot456PersonalEffect = function(_ol5) {
            var _ol6 = null,
                _ol7 = new _ol4.SlotItemEffectModel(),
                _ol8 = false,
                _ol9 = new _ol4.SlotItemEffectModel(),
                _ola = _ol5.getCountryName();
            if ('アメリカ' == _ola && (_ol9.houg += 3, _ol9.kaih += 4, _ol9.saku += 4, _ol7.houm += 3, _ol8 = true), 'イギリス' != _ola && 'オーストラリア' != _ola || (_ol9.houg += 2, _ol9.kaih += 2, _ol9.saku += 2, _ol7.houm += 2, _ol8 = true), 87 != _ol5.ctype && 91 != _ol5.ctype || (_ol9.houg += 1, _ol7.leng += 1, _ol8 = true), 651 != _ol5.ship_id && 656 != _ol5.ship_id || (_ol7.houg += 2, _ol7.kaih += 2, _ol7.saku += 3, _ol7.leng += 1, _ol7.houm += 2), 0 == _ol8) return _ol7;
            var _olb = _ol5.get_slotnums(456);
            return _ol7.add(_ol9.multiply(_olb)), _ol7;
        };
    },
    55888: (_olc, _old, _ole) => {
        'use strict';
        var _olf = null;
        defineModule(_old);
        Object.defineProperty(_old, '__esModule', {
            'value': true
        }), _old.getSlot457PersonalEffect = void 0;
        var _olg = _ole(74496);
        _old.getSlot457PersonalEffect = function(_olh) {
            var _oli = null,
                _olj = new _olg.SlotItemEffectModel(),
                _olk = 0;
            if (109 == _olh.ctype ? (_olj.raig += 3, _olj.kaih += 3, _olk = 1) : 71 == _olh.ctype || 103 == _olh.ctype ? (_olj.raig += 2, _olj.kaih += 2, _olk = 2) : 44 == _olh.ctype && (_olj.raig += 1, _olj.kaih += 4, _olk = 3), 0 == _olk) return _olj;
            var _oll = _olh.get_each_level_nums(461),
                _olm = [];
            return _olk > 0 && _oll.forEach(function(_oln, _olo) {
                var _olp = null;
                for (var _olq = 1; _olq <= _olh.SLOT_LEVEL_MAX; _olq++) null == _olm[_olq] && (_olm[_olq] = 0), _olo >= _olq && (_olm[_olq] += _oln);
            }), 1 == _olk ? (_olm[2] >= 1 && (_olj.raig += 1 * _olm[2]), _olm[3] >= 1 && (_olj.kaih += 1 * _olm[3]), _olm[4] >= 1 && (_olj.raig += 1 * _olm[4]), _olm[5] >= 1 && (_olj.houm += 1 * _olm[5]), _olm[6] >= 1 && (_olj.raig += 1 * _olm[6]), _olm[8] >= 1 && (_olj.raig += 1 * _olm[8]), _olm[10] >= 1 && (_olj.houm += 1 * _olm[10])) : 2 == _olk ? (_olm[3] >= 1 && (_olj.kaih += 1 * _olm[3]), _olm[4] >= 1 && (_olj.raig += 1 * _olm[4]), _olm[6] >= 1 && (_olj.raig += 1 * _olm[6]), _olm[8] >= 1 && (_olj.raig += 1 * _olm[8]), _olm[10] >= 1 && (_olj.houm += 1 * _olm[10])) : 3 == _olk && (_olm[4] >= 1 && (_olj.raig += 1 * _olm[4]), _olm[6] >= 1 && (_olj.raig += 1 * _olm[6]), _olm[8] >= 1 && (_olj.raig += 1 * _olm[8]), _olm[10] >= 1 && (_olj.houm += 1 * _olm[10])), _olj;
        };
    },
    2258: (_olr, _ols, _olt) => {
        'use strict';
        var _olu = null;
        defineModule(_ols);
        Object.defineProperty(_ols, '__esModule', {
            'value': true
        }), _ols.getSlot458PersonalEffect = void 0;
        var _olv = _olt(74496);
        _ols.getSlot458PersonalEffect = function(_olw) {
            var _olx = null,
                _oly = new _olv.SlotItemEffectModel(),
                _olz = 0,
                _om0 = false;
            if (13 != _olw.stype && 14 != _olw.stype || (_om0 = true), 109 == _olw.ctype ? (_oly.raig += 3, _oly.kaih += 6, _olz = 1) : 71 == _olw.ctype || 103 == _olw.ctype ? (_oly.raig += 3, _oly.kaih += 4, _olz = 2) : 44 == _olw.ctype && (_oly.raig += 3, _oly.kaih += 3, _olz = 3), 0 == _om0 && 0 == _olz) return _oly;
            var _om1 = [];
            [458, 461].forEach(function(_om2) {
                var _om3 = null,
                    _om4 = _olw.get_each_level_nums(_om2);
                null == _om1[_om2] && (_om1[_om2] = []), _om4.forEach(function(_om5, _om6) {
                    var _om7 = null;
                    for (var _om8 = 1; _om8 <= _olw.SLOT_LEVEL_MAX; _om8++) null == _om1[_om2][_om8] && (_om1[_om2][_om8] = 0), _om6 >= _om8 && (_om1[_om2][_om8] += _om5);
                });
            });
            var _om9 = _om1[458][2],
                _oma = _om1[458][3],
                _omb = _om1[458][4],
                _omc = _om1[458][5],
                _omd = _om1[458][6],
                _ome = _om1[458][8],
                _omf = _om1[458][10],
                _omg = _om1[461][4];
            return _olz >= 1 && _olz <= 3 && (_omb >= 1 && (_oly.houm += 1 * _omb), _omd >= 1 && (_oly.kaih += 1 * _omd), _ome >= 1 && (_oly.raig += 1 * _ome)), _om0 && (_oma >= 1 && (_oly.kaih += 1 * _oma), _omc >= 1 && (_oly.raig += 1 * _omc), _omf >= 1 && (_oly.houm += 1 * _omf), _om9 >= 1 && _omg >= 1 && (_oly.raig += 7, _oly.houm += 5)), _oly;
        };
    },
    43768: (_omh, _omi, _omj) => {
        'use strict';
        var _omk = null;
        defineModule(_omi);
        Object.defineProperty(_omi, '__esModule', {
            'value': true
        }), _omi.getSlot463PersonalEffect = void 0;
        var _oml = _omj(74496);
        _omi.getSlot463PersonalEffect = function(_omm) {
            var _omn = null,
                _omo = new _oml.SlotItemEffectModel(),
                _omp = false,
                _omq = new _oml.SlotItemEffectModel(),
                _omr = _omm.get_slotnums(142),
                _oms = _omm.get_slotnums(460),
                _omt = _omr + _oms;
            if (37 == _omm.ctype && (_omq.houg += 1, _omq.tyku += 2, _omq.kaih += 1, _omq.houm += 1, _omt >= 1 && (_omo.tyku += 1, _omo.kaih += 1, _omo.houm += 1), _omp = true), 916 != _omm.ship_id && 911 != _omm.ship_id && 546 != _omm.ship_id || (_omq.houg += 1, _omq.kaih += 1, _omq.houm += 2, _oms >= 1 && (_omo.houg += 1, _omo.kaih += 1, _omo.houm += 2), _omp = true), 0 == _omp) return _omo;
            var _omu = _omm.get_slotnums(463);
            return _omo.add(_omq.multiply(_omu)), _omo;
        };
    },
    92174: (_omv, _omw, _omx) => {
        'use strict';
        var _omy = null;
        defineModule(_omw);
        Object.defineProperty(_omw, '__esModule', {
            'value': true
        }), _omw.getSlot464PersonalEffect = void 0;
        var _omz = _omx(74496);
        _omw.getSlot464PersonalEffect = function(_on0) {
            var _on1 = null,
                _on2 = new _omz.SlotItemEffectModel(),
                _on3 = false,
                _on4 = new _omz.SlotItemEffectModel(),
                _on5 = _on0.get_slotnums(142),
                _on6 = _on0.get_slotnums(460),
                _on7 = _on5 + _on6;
            if (37 == _on0.ctype ? (_on4.tyku += 3, _on4.kaih += 2, _on7 >= 1 && (_on2.tyku += 2, _on2.kaih += 1, _on2.houm += 1), _on3 = true) : 6 != _on0.ctype && 73 != _on0.ctype && 113 != _on0.ctype || (_on4.tyku = _on4.tyku - 2, _on4.kaih = _on4.kaih - 2, _on3 = true), 916 != _on0.ship_id && 911 != _on0.ship_id && 546 != _on0.ship_id && 593 != _on0.ship_id && 954 != _on0.ship_id || (_on4.tyku += 2, _on4.kaih += 2, _on6 >= 1 && (_on2.houg += 2, _on2.tyku += 2, _on2.kaih += 2, _on2.houm += 3), _on3 = true), 0 == _on3) return _on2;
            var _on8 = _on0.get_slotnums(464);
            return _on2.add(_on4.multiply(_on8)), _on2;
        };
    },
    38003: (_on9, _ona, _onb) => {
        'use strict';
        var _onc = null;
        defineModule(_ona);
        Object.defineProperty(_ona, '__esModule', {
            'value': true
        }), _ona.getSlot465PersonalEffect = void 0;
        var _ond = _onb(74496);
        _ona.getSlot465PersonalEffect = function(_one) {
            var _onf = null,
                _ong = new _ond.SlotItemEffectModel(),
                _onh = false,
                _oni = new _ond.SlotItemEffectModel(),
                _onj = _one.get_slotnums(142),
                _onk = _one.get_slotnums(460),
                _onl = _onj + _onk;
            if (916 == _one.ship_id ? (_oni.houg += 2, _oni.kaih += 8, _oni.houm += 2, _onk >= 1 && (_ong.kaih += 2, _ong.houm += 1), _onh = true) : 911 != _one.ship_id && 546 != _one.ship_id || (_oni.houg += 1, _oni.kaih += 2, _oni.houm += 1, _onk >= 1 && (_ong.kaih += 1, _ong.houm += 1), _onh = true), 37 == _one.ctype && _onl >= 1 && (_ong.houg += 2, _ong.houm += 2), 0 == _onh) return _ong;
            var _onm = _one.get_slotnums(465);
            return _ong.add(_oni.multiply(_onm)), _ong;
        };
    },
    65455: (_onn, _ono, _onp) => {
        'use strict';
        var _onq = null;
        defineModule(_ono);
        Object.defineProperty(_ono, '__esModule', {
            'value': true
        }), _ono.getSlot466PersonalEffect = void 0;
        var _onr = _onp(74496);
        _ono.getSlot466PersonalEffect = function(_ons) {
            var _ont = null,
                _onu = new _onr.SlotItemEffectModel(),
                _onv = false,
                _onw = new _onr.SlotItemEffectModel();
            if (277 == _ons.ship_id || 278 == _ons.ship_id || 156 == _ons.ship_id || 288 == _ons.ship_id || 112 == _ons.ship_id || 280 == _ons.ship_id || 279 == _ons.ship_id ? (_onw.houg += 1, _onw.houm += 1, _onv = true) : 461 == _ons.ship_id || 462 == _ons.ship_id || 466 == _ons.ship_id || 467 == _ons.ship_id ? (_onw.houg += 2, _onw.kaih += 2, _onw.houm += 1, _onv = true) : 594 != _ons.ship_id && 698 != _ons.ship_id && 646 != _ons.ship_id && 599 != _ons.ship_id && 610 != _ons.ship_id && 196 != _ons.ship_id && 197 != _ons.ship_id || (_onw.houg += 1, _onw.kaih += 1, _onw.houm += 2, _onv = true), 0 == _onv) return _onu;
            var _onx = _ons.get_slotnums(466);
            return _onu.add(_onw.multiply(_onx)), _onu;
        };
    },
    70362: (_ony, _onz, _oo0) => {
        'use strict';
        var _oo1 = null;
        defineModule(_onz);
        Object.defineProperty(_onz, '__esModule', {
            'value': true
        }), _onz.getSlot467PersonalEffect = void 0;
        var _oo2 = _oo0(74496);
        _onz.getSlot467PersonalEffect = function(_oo3) {
            var _oo4 = null,
                _oo5 = new _oo2.SlotItemEffectModel(),
                _oo6 = false,
                _oo7 = new _oo2.SlotItemEffectModel();
            if ('アメリカ' == _oo3.getCountryName()) {
                for (var _oo8 = _oo3.getUSSWaterRaderDict(), _oo9 = _oo3.getUSSAirRaderDict(), _ooa = 0, _oob = 0, _ooc = 0, _ood = _oo3.have_slot_ids(); _ooc < _ood.length; _ooc++) {
                    var _ooe = _ood[_ooc];
                    _oo8[parseInt(_ooe)] && (_ooa += _oo3.get_slotnums(parseInt(_ooe))), _oo9[parseInt(_ooe)] && (_oob += _oo3.get_slotnums(parseInt(_ooe)));
                }
                _oo7.houg += 1, _oo7.tyku += 1, _oo7.kaih += 2, _ooa >= 1 && (_oo5.houg += 1, _oo5.tyku += 1, _oo5.kaih += 1, _oo5.houm += 2), _oob >= 1 && (_oo5.tyku += 2, _oo5.kaih += 2), 65 != _oo3.ctype && 93 != _oo3.ctype && 102 != _oo3.ctype && 107 != _oo3.ctype && 125 != _oo3.ctype || (_oo7.tyku += 2, _oo7.kaih += 1), _oo6 = true;
            }
            if (0 == _oo6) return _oo5;
            var _oof = _oo3.get_slotnums(467);
            return _oo5.add(_oo7.multiply(_oof)), _oo5;
        };
    },
    68086: (_oog, _ooh, _ooi) => {
        'use strict';
        var _ooj = null;
        defineModule(_ooh);
        Object.defineProperty(_ooh, '__esModule', {
            'value': true
        }), _ooh.getSlot470PersonalEffect = void 0;
        var _ook = _ooi(74496);
        _ooh.getSlot470PersonalEffect = function(_ool) {
            var _oom = null,
                _oon = new _ook.SlotItemEffectModel(),
                _ooo = false,
                _oop = new _ook.SlotItemEffectModel(),
                _ooq = _ool.get_slotnums(470),
                _oor = _ool.get_slotnums(529),
                _oos = _ooq + _oor,
                _oot = _ool.get_each_level_over_nums([470, 529]),
                _oou = (_oot.slot[470], _oot.slot[529]),
                _oov = _oot.total,
                _oow = 0;
            23 == _ool.ctype || 18 == _ool.ctype ? (_oop.houg += 1, _ooo = true, _oow = 1) : 30 == _ool.ctype && (_oop.houg += 2, _ooo = true, _oow = 2), ('しぐれ' == _ool.yomi || 'ゆきかぜ' == _ool.yomi || 'いそかぜ' == _ool.yomi) && (_oop.kaih += 2, _ooo = true), 405 == _ool.ship_id || 246 == _ool.ship_id || 144 == _ool.ship_id || 145 == _ool.ship_id || 497 == _ool.ship_id ? (_oor >= 1 && (_oon.houg += 1 * _oor, _oon.tyku += 1 * _oor, _oon.houm += 1 * _oor, _oon.kaih += 1 * _oor), 2 == _oor ? _oon.houg += 1 : _oor >= 3 && (_oon.houg += 3), _oou[8] >= 1 && (_oon.tyku += 1 * _oou[8]), _oou[10] >= 1 && (_oon.houg += 1 * _oou[10])) : 323 == _ool.ship_id || 498 == _ool.ship_id || 961 == _ool.ship_id ? (_oor >= 1 && (_oon.houg += 2 * _oor, _oon.tyku += 2 * _oor, _oon.houm += 1 * _oor, _oon.kaih += 1 * _oor), 2 == _oor ? _oon.houg += 2 : _oor >= 3 && (_oon.houg += 4), _oou[6] >= 1 && (_oon.tyku += 1 * _oou[6]), _oou[8] >= 1 && (_oon.houm += 1 * _oou[8]), _oou[10] >= 1 && (_oon.houg += 1 * _oou[10])) : 975 == _ool.ship_id && (_oor >= 1 && (_oon.houg += 3 * _oor, _oon.tyku += 3 * _oor, _oon.houm += 2 * _oor, _oon.kaih += 2 * _oor), 2 == _oor ? _oon.houg += 3 : _oor >= 3 && (_oon.houg += 6), _oou[4] >= 1 && (_oon.tyku += 1 * _oou[4]), _oou[6] >= 1 && (_oon.houg += 1 * _oou[6]), _oou[8] >= 1 && (_oon.houm += 1 * _oou[8]), _oou[10] >= 1 && (_oon.houg += 1 * _oou[10])), 961 == _ool.ship_id && (_oop.houg += 3, _oop.houm += 3, _oop.kaih += 2, _ooo = true), 566 != _ool.ship_id && 567 != _ool.ship_id && 568 != _ool.ship_id && 656 != _ool.ship_id && 670 != _ool.ship_id && 915 != _ool.ship_id && 651 != _ool.ship_id && 145 != _ool.ship_id && 961 != _ool.ship_id && 951 != _ool.ship_id || (_oon.houg += 1, _oon.houm += 2, _oos >= 2 && (_oon.houg += 2), _oov[5] >= 1 && (_oon.houm += 1 * _oov[5]), _oov[8] >= 1 && (_oon.houg += 1 * _oov[8]), _oov[10] >= 1 && (_oon.houm += 1 * _oov[10])), _ooo && _oon.add(_oop.multiply(_oos));
            var _oox = _ool.get_have_rader_nums(),
                _ooy = _oox.water_rader,
                _ooz = _oox.air_rader;
            return _ooy >= 1 && (1 == _oow ? (_oon.houg += 1, _oon.raig += 3, _oon.kaih += 1, _oon.houm += 1) : 2 == _oow && (_oon.houg += 2, _oon.raig += 3, _oon.kaih += 1, _oon.houm += 3)), _ooz >= 1 && (_oor >= 1 && (_oon.tyku += 2, _oon.kaih += 2), 2 == _oor ? _oon.tyku += 2 : _oor >= 3 && (_oon.tyku += 4)), _oon;
        };
    },
    78173: (_op0, _op1, _op2) => {
        'use strict';
        var _op3 = null;
        defineModule(_op1);
        Object.defineProperty(_op1, '__esModule', {
            'value': true
        }), _op1.getSlot471PersonalEffect = void 0;
        var _op4 = _op2(74496);
        _op1.getSlot471PersonalEffect = function(_op5) {
            var _op6 = null,
                _op7 = new _op4.SlotItemEffectModel(),
                _op8 = false,
                _op9 = new _op4.SlotItemEffectModel(),
                _opa = 0;
            if ('フランス' == _op5.getCountryName() && (_op9.houg += 2, _op9.kaih += 2, _op9.houm += 2, _op8 = true, _opa = 1), 79 == _op5.ctype && (_op9.houg += 2, _op9.houm += 1, _op8 = true), 0 == _op8) return _op7;
            var _opb = _op5.get_slotnums(471);
            if (_op7.add(_op9.multiply(_opb)), 0 == _opa) return _op7;
            var _opc = _op5.get_each_level_nums(471),
                _opd = 0,
                _ope = 0;
            if (_opa > 0 && _opc.forEach(function(_opf, _opg) {
                    _opg >= 6 && (_opd += _opf), _opg >= 8 && (_ope += _opf);
                }), 1 == _opa) {
                _opd >= 1 && (_op7.kaih += 1 * _opd, _op7.houm += 1 * _opd), _ope >= 1 && (_op7.houg += 1 * _ope, _op7.kaih += 1 * _ope, _op7.houm += 1 * _ope);
                var _oph = _opc[10];
                _oph >= 1 && (_op7.houg += 1 * _oph, _op7.houm += 1 * _oph);
            }
            return _op7;
        };
    },
    22581: (_opi, _opj, _opk) => {
        'use strict';
        var _opl = null;
        defineModule(_opj);
        Object.defineProperty(_opj, '__esModule', {
            'value': true
        }), _opj.getSlot472PersonalEffect = void 0;
        var _opm = _opk(74496);
        _opj.getSlot472PersonalEffect = function(_opn) {
            var _opo = null,
                _opp = new _opm.SlotItemEffectModel(),
                _opq = false,
                _opr = new _opm.SlotItemEffectModel(),
                _ops = _opn.getCountryName();
            if ('アメリカ' == _ops && (_opr.tais += 2, _opq = true), 'イギリス' == _ops && (_opr.tais += 1, _opq = true), 1 == _opn.stype && (_opr.kaih += 1, _opq = true), _opq) {
                var _opt = _opn.get_slotnums(472);
                _opp.add(_opr.multiply(_opt));
            }
            return 920 == _opn.ship_id && (_opp.tais += 1, _opp.kaih += 1, _opp.houm += 1), _opp;
        };
    },
    13053: (_opu, _opv, _opw) => {
        'use strict';
        var _opx = null;
        defineModule(_opv);
        Object.defineProperty(_opv, '__esModule', {
            'value': true
        }), _opv.getSlot473PersonalEffect = void 0;
        var _opy = _opw(74496);
        _opv.getSlot473PersonalEffect = function(_opz) {
            var _oq0 = null,
                _oq1 = new _opy.SlotItemEffectModel(),
                _oq2 = false,
                _oq3 = new _opy.SlotItemEffectModel(),
                _oq4 = _opz.getCountryName();
            if ('アメリカ' == _oq4 && (_oq3.houg += 1, _oq3.kaih += 1, _oq3.tyku += 1, _oq2 = true), 'イギリス' == _oq4 && (_oq3.houg += 1, _oq3.kaih += 1, _oq2 = true), 0 == _oq2) return _oq1;
            var _oq5 = _opz.get_slotnums(473);
            return _oq1.add(_oq3.multiply(_oq5)), _oq1;
        };
    },
    47874: (_oq6, _oq7, _oq8) => {
        'use strict';
        var _oq9 = null;
        defineModule(_oq7);
        Object.defineProperty(_oq7, '__esModule', {
            'value': true
        }), _oq7.getSlot474PersonalEffect = void 0;
        var _oqa = _oq8(74496);
        _oq7.getSlot474PersonalEffect = function(_oqb) {
            var _oqc = null,
                _oqd = new _oqa.SlotItemEffectModel(),
                _oqe = false,
                _oqf = new _oqa.SlotItemEffectModel(),
                _oqg = _oqb.getCountryName();
            if ('アメリカ' == _oqg && (_oqf.houg += 2, _oqf.kaih += 1, _oqf.tyku += 1, _oqe = true), 'イギリス' == _oqg && (_oqf.houg += 1, _oqf.kaih += 1, _oqf.tyku += 1, _oqe = true), 'フランス' == _oqg && (_oqf.houg += 1, _oqf.tyku += 1, _oqe = true), 707 != _oqb.ship_id && 930 != _oqb.ship_id || (_oqf.houg += 1, _oqf.kaih += 1, _oqe = true), 0 == _oqe) return _oqd;
            var _oqh = _oqb.get_slotnums(474);
            return _oqd.add(_oqf.multiply(_oqh)), _oqd;
        };
    },
    42788: (_oqi, _oqj, _oqk) => {
        'use strict';
        var _oql = null;
        defineModule(_oqj);
        Object.defineProperty(_oqj, '__esModule', {
            'value': true
        }), _oqj.getSlot478PersonalEffect = void 0;
        var _oqm = _oqk(74496);
        _oqj.getSlot478PersonalEffect = function(_oqn) {
            var _oqo = null,
                _oqp = new _oqm.SlotItemEffectModel(),
                _oqq = _oqn.get_each_level_nums(478),
                _oqr = [];
            return _oqq.forEach(function(_oqs, _oqt) {
                var _oqu = null;
                for (var _oqv = 1; _oqv <= _oqn.SLOT_LEVEL_MAX; _oqv++) _oqt >= _oqv && (null == _oqr[_oqv] && (_oqr[_oqv] = 0), _oqr[_oqv] += _oqs);
            }), _oqr.every(function(_oqw) {
                return 0 == _oqw;
            }) || (_oqr[1] >= 1 && (_oqp.houg += 1), _oqr[2] >= 1 && (_oqp.houm += 1), _oqr[3] >= 1 && (_oqp.kaih += 1), _oqr[4] >= 1 && (_oqp.baku += 1), _oqr[5] >= 1 && (_oqp.raig += 1), _oqr[6] >= 1 && (_oqp.tyku += 1), _oqr[7] >= 1 && (_oqp.houg += 1), _oqr[8] >= 1 && (_oqp.houm += 1), _oqr[9] >= 1 && (_oqp.kaih += 1), _oqr[10] >= 1 && (_oqp.houg += 1)), _oqp;
        };
    },
    22218: (_oqx, _oqy, _oqz) => {
        'use strict';
        var _or0 = null;
        defineModule(_oqy);
        Object.defineProperty(_oqy, '__esModule', {
            'value': true
        }), _oqy.getSlot47PersonalEffect = void 0;
        var _or1 = _oqz(74496);
        _oqy.getSlot47PersonalEffect = function(_or2) {
            var _or3 = null,
                _or4 = new _or1.SlotItemEffectModel(),
                _or5 = new _or1.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_or2.yomi) >= 0 ? (_or5.tais += 3, _or5.kaih += 2, _or5.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_or2.yomi) >= 0 && (_or5.tais += 2, _or5.kaih += 2), !_or5.exists()) return _or4;
            var _or6 = _or2.get_slotnums(47) + _or2.get_slotnums(438);
            return _or4 = _or5.multiply(_or6);
        };
    },
    57664: (_or7, _or8, _or9) => {
        'use strict';
        var _ora = null;
        defineModule(_or8);
        Object.defineProperty(_or8, '__esModule', {
            'value': true
        }), _or8.getSlot483PersonalEffect = void 0;
        var _orb = _or9(74496);
        _or8.getSlot483PersonalEffect = function(_orc) {
            var _ord = null,
                _ore = new _orb.SlotItemEffectModel(),
                _orf = 0,
                _org = 0,
                _orh = 0,
                _ori = 0,
                _orj = 0,
                _ork = 0,
                _orl = 0;
            if (6 == _orc.ctype ? (_ore.houg += 2, _ore.tyku += 3, _ore.houm += 1, _orf = 1) : 2 == _orc.ctype ? (_ore.houg += 1, _ore.tyku += 2, _ore.kaih += 2, _ore.houm += 1, _org = 1) : 37 == _orc.ctype && (_orh = 1), 8 == _orc.stype || 9 == _orc.stype || 10 == _orc.stype ? _ori = 1 : 5 != _orc.stype && 6 != _orc.stype || (_orj = 1), 149 == _orc.ship_id ? (_ore.houg += 2, _ore.tyku += 2) : 591 == _orc.ship_id ? (_ore.houg += 3, _ore.tyku += 3, _ore.kaih += 1) : 150 == _orc.ship_id ? (_ore.houg += 1, _ore.tyku += 1) : 592 == _orc.ship_id ? (_ore.houg += 2, _ore.tyku += 2, _ore.kaih += 2) : 151 == _orc.ship_id ? (_ore.houg += 1, _ore.tyku += 2, _ore.kaih += 2) : 593 == _orc.ship_id ? (_ore.houg += 2, _ore.tyku += 5, _ore.kaih += 3) : 954 == _orc.ship_id ? (_ore.houg += 2, _ore.tyku += 4, _ore.kaih += 2) : 694 == _orc.ship_id ? (_ore.houg += 3, _ore.tyku += 2, _ore.kaih += 1) : 152 == _orc.ship_id ? (_ore.houg += 2, _ore.tyku += 2) : 911 == _orc.ship_id || 916 == _orc.ship_id || 546 == _orc.ship_id ? (_ore.houg += 2, _ore.tyku += 2, _ore.kaih += 2, _ork = 1) : 553 == _orc.ship_id || 554 == _orc.ship_id ? (_ore.houg += 1, _ore.tyku += 2, _ore.kaih += 1, _orl = 1) : 541 == _orc.ship_id || 411 == _orc.ship_id || 412 == _orc.ship_id ? (_ore.houg += 1, _ore.tyku += 2) : 573 == _orc.ship_id && (_ore.houg += 2, _ore.tyku += 2, _ore.kaih += 1), 0 == [_orf, _org, _orh, _ori, _orj, _ork, _orl].reduce(function(_orm, _orn) {
                    return _orm + _orn;
                }, 0)) return _ore;
            var _oro = _orc.get_each_level_nums(483),
                _orp = 0,
                _orq = [];
            return _oro.forEach(function(_orr, _ors) {
                var _ort = null;
                _ors >= 6 && (_orp += _orr);
                for (var _oru = 1; _oru <= _orc.SLOT_LEVEL_MAX; _oru++) null == _orq[_oru] && (_orq[_oru] = 0), _ors >= _oru && (_orq[_oru] += _orr);
            }), 1 == _orf ? (_orp >= 1 && (_ore.houm += 1), _oro[10] >= 1 && (_ore.houm += 1)) : 1 == _org ? (_orq[5] >= 1 && (_ore.kaih += 1), _orq[6] >= 1 && (_ore.houm += 1), _orq[10] >= 1 && (_ore.kaih += 1)) : 1 == _orh && (_orq[6] >= 1 && (_ore.houm += 1), _orq[10] >= 1 && (_ore.kaih += 1)), 1 == _ori ? (_orq[2] >= 1 && (_ore.tyku += 1), _orq[4] >= 1 && (_ore.houg += 1), _orq[7] >= 1 && (_ore.kaih += 1), _orq[8] >= 1 && (_ore.tyku += 1), _orq[9] >= 1 && (_ore.houg += 1)) : 1 == _orj && (_orq[2] >= 1 && (_ore.tyku += 1), _orq[4] >= 1 && (_ore.houg += 1), _orq[6] >= 1 && (_ore.kaih += 1), _orq[8] >= 1 && (_ore.houm += 1), _orq[10] >= 1 && (_ore.houg += 1)), 1 == _ork ? _orq[5] >= 1 && (_ore.houm += 1) : 1 == _orl && (_orq[1] >= 1 && (_ore.houm += 1), _orq[3] >= 1 && (_ore.houm += 1)), _ore;
        };
    },
    44990: (_orv, _orw, _orx) => {
        'use strict';
        var _ory = null;
        defineModule(_orw);
        Object.defineProperty(_orw, '__esModule', {
            'value': true
        }), _orw.getSlot485PersonalEffect = void 0;
        var _orz = _orx(74496);
        _orw.getSlot485PersonalEffect = function(_os0) {
            var _os1 = null,
                _os2 = new _orz.SlotItemEffectModel(),
                _os3 = false,
                _os4 = new _orz.SlotItemEffectModel();
            if (9 == _os0.ctype && (_os4.houg += 1, _os4.kaih += 2, _os4.tyku += 3, _os3 = true), 501 == _os0.ship_id || 506 == _os0.ship_id ? (_os4.kaih += 1, _os4.tyku += 2, _os4.houm += 1, _os3 = true) : 502 != _os0.ship_id && 507 != _os0.ship_id || (_os4.kaih += 1, _os4.tyku += 1, _os4.houm += 1, _os3 = true), _os3) {
                var _os5 = _os0.get_slotnums(485);
                _os2.add(_os4.multiply(_os5));
            }
            var _os6 = _os0.get_each_level_nums(485),
                _os7 = 0,
                _os8 = 0,
                _os9 = 0,
                _osa = _os6[10];
            return _os6.forEach(function(_osb, _osc) {
                _osc >= 3 && (_os7 += _osb), _osc >= 5 && (_os8 += _osb), _osc >= 7 && (_os9 += _osb);
            }), _os7 > 0 && (_os2.houg += 1 * _os7), _os8 > 0 && (_os2.tyku += 1 * _os8), _os9 > 0 && (_os2.kaih += 1 * _os9), _osa > 0 && (_os2.houm += 1 * _osa), _os2;
        };
    },
    83957: (_osd, _ose, _osf) => {
        'use strict';
        var _osg = null;
        defineModule(_ose);
        Object.defineProperty(_ose, '__esModule', {
            'value': true
        }), _ose.getSlot486PersonalEffect = void 0;
        var _osh = _osf(74496);
        _ose.getSlot486PersonalEffect = function(_osi) {
            var _osj = null,
                _osk = new _osh.SlotItemEffectModel(),
                _osl = false,
                _osm = new _osh.SlotItemEffectModel();
            if (894 == _osi.ship_id || 899 == _osi.ship_id ? (_osm.houg += 4, _osm.tyku += 4, _osm.kaih += 3, _osm.houm += 2, _osl = true) : 888 != _osi.ship_id && 883 != _osi.ship_id || (_osm.houg += 2, _osm.tyku += 2, _osm.kaih += 2, _osm.houm += 1, _osl = true), _osl) {
                var _osn = _osi.get_slotnums(486);
                _osk.add(_osm.multiply(_osn));
            }
            var _oso = _osi.get_each_level_nums(486),
                _osp = 0,
                _osq = 0,
                _osr = _oso[10];
            return _oso.forEach(function(_oss, _ost) {
                _ost >= 6 && (_osp += _oss), _ost >= 8 && (_osq += _oss);
            }), _osp > 0 && (_osk.kaih += 1 * _osp, _osk.houm += 1 * _osp), _osq > 0 && (_osk.tyku += 1 * _osq, _osk.kaih += 1 * _osq), _osr > 0 && (_osk.houg += 1 * _osr, _osk.houm += 1 * _osr), _osk;
        };
    },
    78539: (_osu, _osv, _osw) => {
        'use strict';
        var _osx = null;
        defineModule(_osv);
        Object.defineProperty(_osv, '__esModule', {
            'value': true
        }), _osv.getSlot487PersonalEffect = void 0;
        var _osy = _osw(74496);
        _osv.getSlot487PersonalEffect = function(_osz) {
            var _ot0 = null,
                _ot1 = new _osy.SlotItemEffectModel(),
                _ot2 = false,
                _ot3 = new _osy.SlotItemEffectModel();
            if (894 == _osz.ship_id || 899 == _osz.ship_id ? (_ot3.houg += 5, _ot3.tyku += 3, _ot3.kaih += 2, _ot3.houm += 4, _ot2 = true) : 888 != _osz.ship_id && 883 != _osz.ship_id || (_ot3.houg += 3, _ot3.tyku += 1, _ot3.kaih += 1, _ot3.houm += 2, _ot2 = true), _ot2) {
                var _ot4 = _osz.get_slotnums(487);
                _ot1.add(_ot3.multiply(_ot4));
            }
            var _ot5 = _osz.get_each_level_nums(487),
                _ot6 = 0,
                _ot7 = 0,
                _ot8 = _ot5[10];
            return _ot5.forEach(function(_ot9, _ota) {
                _ota >= 6 && (_ot6 += _ot9), _ota >= 8 && (_ot7 += _ot9);
            }), _ot6 > 0 && (_ot1.houg += 1 * _ot6, _ot1.kaih += 1 * _ot6), _ot7 > 0 && (_ot1.tyku += 1 * _ot7, _ot1.houm += 1 * _ot7), _ot8 > 0 && (_ot1.houg += 1 * _ot8, _ot1.houm += 1 * _ot8), _ot1;
        };
    },
    96282: (_otb, _otc, _otd) => {
        'use strict';
        var _ote = null;
        defineModule(_otc);
        Object.defineProperty(_otc, '__esModule', {
            'value': true
        }), _otc.getSlot488PersonalEffect = void 0;
        var _otf = _otd(74496);
        _otc.getSlot488PersonalEffect = function(_otg) {
            var _oth = null,
                _oti = new _otf.SlotItemEffectModel(),
                _otj = false,
                _otk = new _otf.SlotItemEffectModel(),
                _otl = 0,
                _otm = _otg.getCountryName(),
                _otn = {
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
                }[_otg.ship_id];
            if (('日本' == _otm && 2 == _otg.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_otg.ctype] && 1 == _otg.stype) && (_otk.tais += 1, _otk.kaih += 1, _otj = true), 1 == _otn ? (_otk.tais += 5, _otk.kaih += 4, _otk.houm += 2, _otj = true, _otl = 1) : 2 == _otn ? (_otk.tais += 2, _otk.kaih += 1, _otk.houm += 1, _otj = true, _otl = 2) : 3 == _otn && (_otk.tais += 1, _otj = true, _otl = 2), 0 == _otj) return _oti;
            var _oto = _otg.get_slotnums(488);
            if (_oti.add(_otk.multiply(_oto)), 0 == _otl) return _oti;
            var _otp = _otg.get_each_level_nums(488),
                _otq = [];
            return _otp.forEach(function(_otr, _ots) {
                var _ott = null;
                for (var _otu = 1; _otu <= _otg.SLOT_LEVEL_MAX; _otu++) _ots >= _otu && (null == _otq[_otu] && (_otq[_otu] = 0), _otq[_otu] += _otr);
            }), 1 == _otl ? (_otq[3] >= 1 && (_oti.kaih += 1 * _otq[3]), _otq[5] >= 1 && (_oti.tais += 1 * _otq[5]), _otq[7] >= 1 && (_oti.houm += 1 * _otq[7]), _otq[8] >= 1 && (_oti.kaih += 1 * _otq[8]), _otq[9] >= 1 && (_oti.tais += 1 * _otq[9]), _otq[10] >= 1 && (_oti.tais += 1 * _otq[10])) : 2 == _otl && (_otq[5] >= 1 && (_oti.tais += 1 * _otq[5]), _otq[7] >= 1 && (_oti.kaih += 1 * _otq[7]), _otq[9] >= 1 && (_oti.houm += 1 * _otq[9]), _otq[10] >= 1 && (_oti.tais += 1 * _otq[10])), _oti;
        };
    },
    49679: (_otv, _otw, _otx) => {
        'use strict';
        var _oty = null;
        defineModule(_otw);
        Object.defineProperty(_otw, '__esModule', {
            'value': true
        }), _otw.getSlot489PersonalEffect = void 0;
        var _otz = _otx(74496);
        _otw.getSlot489PersonalEffect = function(_ou0) {
            var _ou1 = null,
                _ou2 = new _otz.SlotItemEffectModel(),
                _ou3 = false,
                _ou4 = new _otz.SlotItemEffectModel();
            if ('あきつまる' != _ou0.yomi && 'やましおまる' != _ou0.yomi && 'くまのまる' != _ou0.yomi || (_ou4.tyku = _ou4.tyku + 2, _ou4.kaih = _ou4.kaih + 1, _ou4.houg = _ou4.houg + 1, _ou4.tais = _ou4.tais + 1, _ou4.houm = _ou4.houm + 1, _ou3 = true), 717 != _ou0.ship_id && 948 != _ou0.ship_id || (_ou4.tyku = _ou4.tyku + 2, _ou4.kaih = _ou4.kaih + 2, _ou4.houg = _ou4.houg + 2, _ou4.tais = _ou4.tais + 1, _ou4.houm = _ou4.houm + 1, _ou3 = true), _ou3) {
                var _ou5 = _ou0.get_slotnums(489) + _ou0.get_slotnums(491);
                _ou2.add(_ou4.multiply(_ou5));
            }
            var _ou6 = _ou0.get_each_level_nums(489),
                _ou7 = _ou0.get_each_level_nums(491),
                _ou8 = 0,
                _ou9 = 0,
                _oua = 0;
            _ou6.forEach(function(_oub, _ouc) {
                _ouc >= 3 && (_ou8 += _oub), _ouc >= 6 && (_ou9 += _oub), _ouc >= 8 && (_oua += _oub);
            }), _ou7.forEach(function(_oud, _oue) {
                _oue >= 3 && (_ou8 += _oud), _oue >= 6 && (_ou9 += _oud), _oue >= 8 && (_oua += _oud);
            });
            var _ouf = _ou6[10] + _ou7[10];
            return _ou8 >= 1 && (_ou2.kaih = _ou2.kaih + 1 * _ou8), _ou9 >= 1 && (_ou2.tais = _ou2.tais + 1 * _ou9), _oua >= 1 && (_ou2.houm = _ou2.houm + 1 * _oua), _ouf >= 1 && (_ou2.houg = _ou2.houg + 1 * _ouf), _ou2;
        };
    },
    90312: function(_oug, _ouh, _oui) {
        'use strict';
        var _ouj = null;
        var _ouk = this && this.__importDefault || function(_oul) {
            var _oum = null;
            return _oul && _oul.__esModule ? _oul : {
                'default': _oul
            };
        };
        defineModule(_ouh);
        Object.defineProperty(_ouh, '__esModule', {
            'value': true
        }), _ouh.getSlot502PersonalEffect = void 0;
        var _oun = _oui(74496),
            _ouo = _ouk(_oui(18622));
        _ouh.getSlot502PersonalEffect = function(_oup) {
            var _ouq = null,
                _our = new _oun.SlotItemEffectModel(),
                _ous = _oup.get_slotnums(502),
                _out = {
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
                _ouu = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3,
                    694: 1
                },
                _ouv = {
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
                _ouw = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _oux = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_out[_oup.ship_id]) {
                var _ouy = _out[_oup.ship_id];
                _our.houg += _ous * _ouy;
            }
            if (_ouu[_oup.ship_id]) {
                var _ouz = _ouu[_oup.ship_id];
                _our.tyku += _ous * _ouz;
            }
            if (_ouv[_oup.ship_id]) {
                var _ov0 = _ouv[_oup.ship_id],
                    _ov1 = _oup.get_each_level_nums(502),
                    _ov2 = [];
                _ov1.forEach(function(_ov3, _ov4) {
                    var _ov5 = null;
                    for (var _ov6 = 1; _ov6 <= _oup.SLOT_LEVEL_MAX; _ov6++) _ov4 >= _ov6 && (null == _ov2[_ov6] && (_ov2[_ov6] = 0), _ov2[_ov6] += _ov3);
                }), 1 == _ov0 ? (_our.kaih += 3 * _ous, _ov2[1] > 0 && (_our.kaih += 1 * _ov2[1]), _ov2[3] > 0 && (_our.tyku += 1 * _ov2[3]), _ov2[5] > 0 && (_our.houg += 1 * _ov2[5]), _ov2[7] > 0 && (_our.kaih += 1 * _ov2[7]), _ov2[8] > 0 && (_our.tyku += 1 * _ov2[8]), _ov2[9] > 0 && (_our.houg += 1 * _ov2[9]), _ov2[10] > 0 && (_our.tyku += 1 * _ov2[10])) : 2 == _ov0 ? (_our.kaih += 1 * _ous, _ov2[2] > 0 && 151 == _oup.ship_id && (_our.kaih += 1 * _ov2[2]), _ov2[4] > 0 && (_our.tyku += 1 * _ov2[4]), _ov2[6] > 0 && (_our.houg += 1 * _ov2[6]), _ov2[8] > 0 && (_our.kaih += 1 * _ov2[8]), _ov2[10] > 0 && (_our.tyku += 1 * _ov2[10])) : 3 == _ov0 && (_ov2[5] > 0 && (_our.kaih += 1 * _ov2[5]), _ov2[8] > 0 && (_our.houg += 1 * _ov2[8]), _ov2[10] > 0 && (_our.tyku += 1 * _ov2[10]));
            }
            if (_ouw[_oup.ship_id]) {
                for (var _ov7 = 0, _ov8 = 0, _ov9 = _oup.have_slot_ids(); _ov8 < _ov9.length; _ov8++) {
                    var _ova = _ov9[_ov8],
                        _ovb = _ouo.default.model.slot.getMst(_ova),
                        _ovc = _ovb.equipType;
                    12 != _ovc && 13 != _ovc || (_ovb.sakuteki >= 5 && (_ov7 += _oup.get_slotnums(parseInt(_ova))), _ovb.taiku >= 2 && _oup.get_slotnums(parseInt(_ova)));
                }
                0;
                var _ovd = _ouw[_oup.ship_id];
                1 == _ovd && _ov7 >= 1 ? (_our.houg += 3, _our.kaih += 4) : 2 == _ovd && _ov7 >= 1 && (_our.houg += 2, _our.kaih += 2);
            }
            if (_oux[_oup.ship_id]) {
                var _ove = _oux[_oup.ship_id],
                    _ovf = [],
                    _ovg = [],
                    _ovh = _oup.have_slot_ids();
                [410, 411].forEach(function(_ovi) {
                    var _ovj = null;
                    _ovh.indexOf(_ovi.toString()) > -1 && (_ovg[_ovi] = _oup.get_each_level_nums(_ovi), null == _ovf[_ovi] && (_ovf[_ovi] = []), _ovg[_ovi].forEach(function(_ovk, _ovl) {
                        var _ovm = null;
                        for (var _ovn = 1; _ovn <= _oup.SLOT_LEVEL_MAX; _ovn++) null == _ovf[_ovi][_ovn] && (_ovf[_ovi][_ovn] = 0), _ovl >= _ovn && (_ovf[_ovi][_ovn] += _ovk);
                    }));
                });
                var _ovo = _ovg[410],
                    _ovp = _ovg[411];
                if (1 == _ove) {
                    if (_ovo) {
                        _our.tyku += 1;
                        var _ovq = _ovf[410];
                        _ovq[7] >= 1 && (_our.houg += 1), _ovq[10] >= 1 && (_our.kaih += 1);
                    }
                    if (_ovp) {
                        _our.tyku += 2;
                        var _ovr = _ovf[411];
                        _ovr[2] >= 1 && (_our.houg += 1), _ovr[4] >= 1 && (_our.kaih += 1), _ovr[6] >= 1 && (_our.houm += 1), _ovr[8] >= 1 && (_our.tyku += 1), _ovr[10] >= 1 && (_our.houg += 1);
                    }
                }
            }
            return _our;
        };
    },
    86856: function(_ovs, _ovt, _ovu) {
        'use strict';
        var _ovv = null;
        var _ovw = this && this.__importDefault || function(_ovx) {
            var _ovy = null;
            return _ovx && _ovx.__esModule ? _ovx : {
                'default': _ovx
            };
        };
        defineModule(_ovt);
        Object.defineProperty(_ovt, '__esModule', {
            'value': true
        }), _ovt.getSlot503PersonalEffect = void 0;
        var _ovz = _ovu(74496),
            _ow0 = _ovw(_ovu(18622));
        _ovt.getSlot503PersonalEffect = function(_ow1) {
            var _ow2 = null,
                _ow3 = new _ovz.SlotItemEffectModel(),
                _ow4 = _ow1.get_slotnums(503),
                _ow5 = {
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
                _ow6 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    694: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _ow7 = {
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
                _ow8 = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2,
                    694: 2
                },
                _ow9 = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1,
                    694: 1
                },
                _owa = {
                    591: 1,
                    592: 2,
                    593: 2,
                    694: 2,
                    954: 3
                };
            if (_ow5[_ow1.ship_id]) {
                var _owb = _ow5[_ow1.ship_id];
                _ow3.houg += _ow4 * _owb;
            }
            if (_ow6[_ow1.ship_id]) {
                var _owc = _ow6[_ow1.ship_id];
                _ow3.tyku += _ow4 * _owc;
            }
            if (_ow7[_ow1.ship_id]) {
                var _owd = _ow7[_ow1.ship_id],
                    _owe = _ow1.get_each_level_nums(503),
                    _owf = [];
                _owe.forEach(function(_owg, _owh) {
                    var _owi = null;
                    for (var _owj = 1; _owj <= _ow1.SLOT_LEVEL_MAX; _owj++) _owh >= _owj && (null == _owf[_owj] && (_owf[_owj] = 0), _owf[_owj] += _owg);
                }), 1 == _owd ? (_ow3.houm += 2 * _ow4, _owf[1] > 0 && (_ow3.houg += 1 * _owf[1]), _owf[2] > 0 && (_ow3.tyku += 1 * _owf[2]), _owf[4] > 0 && (_ow3.houm += 1 * _owf[4]), _owf[6] > 0 && (_ow3.houg += 1 * _owf[6]), _owf[8] > 0 && (_ow3.tyku += 1 * _owf[8]), _owf[10] > 0 && (_ow3.houm += 1 * _owf[10])) : 2 == _owd ? (_ow3.houm += 1 * _ow4, _owf[2] > 0 && (_ow3.houg += 1 * _owf[2]), _owf[4] > 0 && (_ow3.tyku += 1 * _owf[4]), _owf[6] > 0 && (_ow3.houm += 1 * _owf[6]), _owf[8] > 0 && (_ow3.houg += 1 * _owf[8]), _owf[10] > 0 && (_ow3.houm += 1 * _owf[10])) : 3 == _owd ? (_owf[4] > 0 && (_ow3.houm += 1 * _owf[4]), _owf[7] > 0 && (_ow3.houg += 1 * _owf[7]), _owf[10] > 0 && (_ow3.tyku += 1 * _owf[10])) : 4 == _owd && (_ow3.houm += 1 * _ow4, _owf[1] > 0 && (_ow3.houg += 1 * _owf[1]), _owf[2] > 0 && (_ow3.houg += 1 * _owf[2]), _owf[4] > 0 && (_ow3.houm += 1 * _owf[4]), _owf[6] > 0 && (_ow3.houg += 1 * _owf[6]), _owf[8] > 0 && (_ow3.tyku += 1 * _owf[8]), _owf[10] > 0 && (_ow3.houm += 1 * _owf[10]));
            }
            var _owk = 0;
            _ow8[_ow1.ship_id] && (_owk = _ow8[_ow1.ship_id]);
            var _owl = 0;
            _owa[_ow1.ship_id] && (_owl = _owa[_ow1.ship_id]);
            var _owm = 0,
                _own = 0,
                _owo = _ow1.have_slot_ids();
            if (_owk + _owl > 0)
                for (var _owp = 0, _owq = _owo; _owp < _owq.length; _owp++) {
                    var _owr = _owq[_owp],
                        _ows = _ow0.default.model.slot.getMst(_owr),
                        _owt = _ows.equipType;
                    12 != _owt && 13 != _owt || (_ows.sakuteki >= 5 && (_owm += _ow1.get_slotnums(parseInt(_owr))), _ows.taiku >= 2 && _ow1.get_slotnums(parseInt(_owr)), _ows.meichu >= 8 && (_own += _ow1.get_slotnums(parseInt(_owr))));
                }
            1 == _owk ? _owm >= 1 && (_ow3.houg += 3, _ow3.houm += 3, _ow3.kaih += 2) : 2 == _owk && _owm >= 1 && (_ow3.houg += 2, _ow3.houm += 2, _ow3.kaih += 1);
            var _owu = 0,
                _owv = [],
                _oww = [];
            if (_ow9[_ow1.ship_id]) {
                _owu = _ow9[_ow1.ship_id];
                var _owx = _ow1.have_slot_ids();
                [174].forEach(function(_owy) {
                    var _owz = null;
                    _owx.indexOf(_owy.toString()) > -1 && (_oww[_owy] = _ow1.get_each_level_nums(_owy), null == _owv[_owy] && (_owv[_owy] = []), _oww[_owy].forEach(function(_ox0, _ox1) {
                        var _ox2 = null;
                        for (var _ox3 = 1; _ox3 <= _ow1.SLOT_LEVEL_MAX; _ox3++) null == _owv[_owy][_ox3] && (_owv[_owy][_ox3] = 0), _ox1 >= _ox3 && (_owv[_owy][_ox3] += _ox0);
                    }));
                });
            }
            if (_owu > 0) {
                var _ox4 = _oww[174];
                if (1 == _owu && _ox4) {
                    var _ox5 = _owv[174];
                    _ow3.raig += 4, _ox5[6] >= 1 && (_ow3.raig += 1), _ox5[8] >= 1 && (_ow3.houm += 1), _ox5[10] >= 1 && (_ow3.houg += 1);
                }
            }
            return _own > 0 && (_owl >= 1 && _owl <= 3 && (_ow3.houg += 2, _ow3.houm += 2, _ow3.kaih += 2), 1 == _owl ? _ow3.houg += 1 : 3 == _owl && (_ow3.houg += 2)), _ow3;
        };
    },
    78123: function(_ox6, _ox7, _ox8) {
        'use strict';
        var _ox9 = null;
        var _oxa = this && this.__importDefault || function(_oxb) {
            var _oxc = null;
            return _oxb && _oxb.__esModule ? _oxb : {
                'default': _oxb
            };
        };
        defineModule(_ox7);
        Object.defineProperty(_ox7, '__esModule', {
            'value': true
        }), _ox7.getSlot505PersonalEffect = void 0;
        var _oxd = _ox8(74496),
            _oxe = _oxa(_ox8(18622));
        _ox7.getSlot505PersonalEffect = function(_oxf) {
            var _oxg = null,
                _oxh = new _oxd.SlotItemEffectModel(),
                _oxi = false,
                _oxj = new _oxd.SlotItemEffectModel();
            if (2 == _oxf.stype ? (_oxj.houg += 1, _oxj.tyku += 2, _oxj.kaih += 2, _oxi = true) : 1 == _oxf.stype ? (_oxj.houg += 1, _oxj.tyku += 1, _oxj.kaih += 1, _oxi = true) : 3 == _oxf.stype || 21 == _oxf.stype || 4 == _oxf.stype ? (_oxj.tyku += 1, _oxj.kaih += 2, _oxi = true) : 5 != _oxf.stype && 6 != _oxf.stype && 16 != _oxf.stype || (_oxj.tyku += 1, _oxj.kaih += 1, _oxi = true), _oxi) {
                var _oxk = _oxf.get_slotnums(505);
                _oxh.add(_oxj.multiply(_oxk));
            }
            var _oxl = {
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
                _oxm = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2,
                    981: 3
                },
                _oxn = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _oxl[_oxf.ship_id] ? (_oxh.houg += 2, _oxh.tyku += 3, _oxh.kaih += 4) : 2 == _oxl[_oxf.ship_id] ? (_oxh.houg += 1, _oxh.tyku += 2, _oxh.kaih += 3) : 3 == _oxl[_oxf.ship_id] ? (_oxh.tyku += 2, _oxh.kaih += 2) : 4 == _oxl[_oxf.ship_id] ? (_oxh.tyku += 1, _oxh.kaih += 2) : 5 == _oxl[_oxf.ship_id] ? (_oxh.houg += 1, _oxh.tyku += 1, _oxh.kaih += 1) : 6 == _oxl[_oxf.ship_id] && (_oxh.tyku += 1, _oxh.kaih += 1);
            var _oxo = 0;
            if (_oxm[_oxf.ship_id] && _oxo++, _oxn[_oxf.ship_id] && _oxo++, 0 == _oxo) return _oxh;
            for (var _oxp = 0, _oxq = 0, _oxr = 0, _oxs = _oxf.have_slot_ids(); _oxr < _oxs.length; _oxr++) {
                var _oxt = _oxs[_oxr],
                    _oxu = _oxe.default.model.slot.getMst(_oxt),
                    _oxv = _oxu.equipType;
                12 != _oxv && 13 != _oxv || (_oxu.sakuteki >= 5 && (_oxp += _oxf.get_slotnums(parseInt(_oxt))), _oxu.taiku >= 2 && (_oxq += _oxf.get_slotnums(parseInt(_oxt))));
            }
            var _oxw = _oxm[_oxf.ship_id];
            _oxq > 0 && _oxw > 0 && (1 == _oxw ? (_oxh.houg += 1, _oxh.tyku += 2, _oxh.kaih += 3) : 2 == _oxw ? (_oxh.tyku += 2, _oxh.kaih += 2) : 3 == _oxw && (_oxh.tyku += 1, _oxh.kaih += 2));
            var _oxx = _oxn[_oxf.ship_id];
            return _oxp > 0 && _oxx > 0 && 1 == _oxx && (_oxh.houg += 1, _oxh.kaih += 1), _oxh;
        };
    },
    25765: (_oxy, _oxz, _oy0) => {
        'use strict';
        var _oy1 = null;
        defineModule(_oxz);
        Object.defineProperty(_oxz, '__esModule', {
            'value': true
        }), _oxz.getSlot506PersonalEffect = void 0;
        var _oy2 = _oy0(74496);
        _oxz.getSlot506PersonalEffect = function(_oy3) {
            var _oy4 = null,
                _oy5 = new _oy2.SlotItemEffectModel();
            return 961 == _oy3.ship_id ? (_oy5.houg += 2, _oy5.houm += 3, _oy5.tyku += 2, _oy5.kaih += 4) : 145 == _oy3.ship_id || 497 == _oy3.ship_id || 656 == _oy3.ship_id || 557 == _oy3.ship_id || 558 == _oy3.ship_id || 951 == _oy3.ship_id || 975 == _oy3.ship_id ? (_oy5.houg += 1, _oy5.houm += 2, _oy5.tyku += 1, _oy5.kaih += 3) : 578 != _oy3.ship_id && 419 != _oy3.ship_id && 464 != _oy3.ship_id && 470 != _oy3.ship_id && 407 != _oy3.ship_id && 235 != _oy3.ship_id && 147 != _oy3.ship_id && 538 != _oy3.ship_id && 537 != _oy3.ship_id && 955 != _oy3.ship_id && 960 != _oy3.ship_id || (_oy5.houg += 1, _oy5.houm += 1, _oy5.tyku += 1, _oy5.kaih += 2), _oy5;
        };
    },
    88271: function(_oy6, _oy7, _oy8) {
        'use strict';
        var _oy9 = null;
        var _oya = this && this.__importDefault || function(_oyb) {
            var _oyc = null;
            return _oyb && _oyb.__esModule ? _oyb : {
                'default': _oyb
            };
        };
        defineModule(_oy7);
        Object.defineProperty(_oy7, '__esModule', {
            'value': true
        }), _oy7.getSlot50PersonalEffect = void 0;
        var _oyd = _oy8(74496),
            _oye = _oya(_oy8(18622));
        _oy7.getSlot50PersonalEffect = function(_oyf) {
            var _oyg = null,
                _oyh = new _oyd.SlotItemEffectModel(),
                _oyi = false,
                _oyj = new _oyd.SlotItemEffectModel();
            7 != _oyf.ctype && 13 != _oyf.ctype && 8 != _oyf.ctype && 29 != _oyf.ctype && 9 != _oyf.ctype && 31 != _oyf.ctype || (_oyj.houg += 1, _oyi = true), 8 != _oyf.ctype && 29 != _oyf.ctype && 9 != _oyf.ctype && 31 != _oyf.ctype || (_oyj.houg += 1, _oyj.kaih += 1, _oyi = true);
            var _oyk = _oyf.get_slotnums(50);
            9 != _oyf.ctype && 31 != _oyf.ctype || _oyk >= 2 && (_oyj.houg += 1, _oyi = true);
            var _oyl = 0;
            if (501 != _oyf.ship_id && 506 != _oyf.ship_id && 502 != _oyf.ship_id && 507 != _oyf.ship_id || (_oyj.houg += 1, _oyi = true, _oyl = 1), 0 == _oyi) return _oyh;
            _oyh = _oyj.multiply(_oyk);
            for (var _oym = 0, _oyn = 0, _oyo = _oyf.have_slot_ids(); _oyn < _oyo.length; _oyn++) {
                var _oyp = _oyo[_oyn],
                    _oyq = _oye.default.model.slot.getMst(_oyp),
                    _oyr = _oyq.equipType;
                12 != _oyr && 13 != _oyr || _oyq.sakuteki >= 5 && (_oym += _oyf.get_slotnums(parseInt(_oyp)));
            }
            if (_oym > 0) {
                if (7 == _oyf.ctype || 13 == _oyf.ctype) 0 == _oyf.get_slotnums(90) && (_oyh.houg += 1, _oyh.kaih += 1, _oyh.raig += 1);
                else 8 != _oyf.ctype && 29 != _oyf.ctype && 9 != _oyf.ctype && 31 != _oyf.ctype || (_oyh.houg += 3, _oyh.kaih += 2, _oyh.raig += 2);
                501 != _oyf.ship_id && 506 != _oyf.ship_id || (_oyh.houg += 1, _oyh.kaih += 1);
            }
            var _oys = _oyf.get_slotnums(30),
                _oyt = _oyf.get_slotnums(410);
            return 1 == _oyl && (_oys + _oyt > 0 && (_oyh.houg += 1, _oyh.tyku += 3, _oyh.kaih += 2), _oyt > 0 && (_oyh.houg += 2)), _oyh;
        };
    },
    28221: (_oyu, _oyv, _oyw) => {
        'use strict';
        var _oyx = null;
        defineModule(_oyv);
        Object.defineProperty(_oyv, '__esModule', {
            'value': true
        }), _oyv.getSlot510PersonalEffect = void 0;
        var _oyy = _oyw(74496);
        _oyv.getSlot510PersonalEffect = function(_oyz) {
            var _oz0 = null,
                _oz1 = new _oyy.SlotItemEffectModel(),
                _oz2 = false,
                _oz3 = new _oyy.SlotItemEffectModel();
            if ('イギリス' == _oyz.getCountryName() && (_oz3.houg += 2, _oz3.tais += 3, _oz3.kaih += 2, _oz3.saku += 2, _oz2 = true), 88 == _oyz.ctype && (_oz1.houg += 4, _oz1.kaih += 2, _oz3.saku += 3, _oz3.houm += 2, _oz2 = true), 0 == _oz2) return _oz1;
            var _oz4 = _oyz.get_slotnums(510);
            return _oz1.add(_oz3.multiply(_oz4)), _oz1;
        };
    },
    14830: (_oz5, _oz6, _oz7) => {
        'use strict';
        var _oz8 = null;
        defineModule(_oz6);
        Object.defineProperty(_oz6, '__esModule', {
            'value': true
        }), _oz6.getSlot511PersonalEffect = void 0;
        var _oz9 = _oz7(74496);
        _oz6.getSlot511PersonalEffect = function(_oza) {
            var _ozb = null,
                _ozc = new _oz9.SlotItemEffectModel();
            return 122 == _oza.ctype ? (_ozc.raig += 3, _ozc.kaih += 4) : 114 == _oza.ctype && (_ozc.raig += 1, _ozc.kaih += 2), _ozc;
        };
    },
    54047: (_ozd, _oze, _ozf) => {
        'use strict';
        var _ozg = null;
        defineModule(_oze);
        Object.defineProperty(_oze, '__esModule', {
            'value': true
        }), _oze.getSlot517PersonalEffect = void 0;
        var _ozh = _ozf(74496);
        _oze.getSlot517PersonalEffect = function(_ozi) {
            var _ozj = null,
                _ozk = new _ozh.SlotItemEffectModel();
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
            }[_ozi.ctype] && 74 != _ozi.ctype && 77 != _ozi.ctype && 85 != _ozi.ctype && 117 != _ozi.ctype && 104 != _ozi.ctype || (_ozk.houm += 1, _ozk.kaih += 1, _ozk.saku += 1), 38 == _ozi.ctype && (_ozk.houg += 1, _ozk.houm += 1), 960 == _ozi.ship_id ? (_ozk.houg += 2, _ozk.houm += 1, _ozk.kaih += 3, _ozk.saku += 2) : 955 == _ozi.ship_id || 578 == _ozi.ship_id || 961 == _ozi.ship_id || 656 == _ozi.ship_id || 464 == _ozi.ship_id || 470 == _ozi.ship_id || 419 == _ozi.ship_id || 407 == _ozi.ship_id || 235 == _ozi.ship_id || 147 == _ozi.ship_id || 975 == _ozi.ship_id ? (_ozk.houg += 1, _ozk.houm += 1, _ozk.kaih += 2, _ozk.saku += 1) : 981 == _ozi.ship_id && (_ozk.houg += 1, _ozk.houm += 1, _ozk.kaih += 1);
            for (var _ozl = [], _ozm = function(_ozn) {
                    var _ozo = null,
                        _ozp = _ozi.get_each_level_nums(_ozn);
                    null == _ozl[_ozn] && (_ozl[_ozn] = []), _ozp.forEach(function(_ozq, _ozr) {
                        var _ozs = null;
                        for (var _ozt = 1; _ozt <= _ozi.SLOT_LEVEL_MAX; _ozt++) null == _ozl[_ozn][_ozt] && (_ozl[_ozn][_ozt] = 0), _ozr >= _ozt && (_ozl[_ozn][_ozt] += _ozq);
                    });
                }, _ozu = 0, _ozv = [267, 366, 450, 517]; _ozu < _ozv.length; _ozu++) {
                _ozm(_ozv[_ozu]);
            }
            var _ozw = _ozl[517];
            return _ozw[7] > 0 && (_ozk.houm += 1), _ozw[8] > 0 && (_ozk.kaih += 1), _ozw[9] > 0 && (_ozk.houg += 1), _ozw[10] > 0 && (_ozk.houm += 1), (_ozl[267][3] > 0 || _ozl[366][3] > 0) && (_ozk.houg += 1, _ozk.houm += 1, 38 == _ozi.ctype && (_ozk.houg += 1, _ozk.houm += 1), _ozl[450][4] > 0 && (_ozk.houg += 1, _ozk.houm += 1, _ozk.tyku += 4, _ozk.kaih += 3)), _ozk;
        };
    },
    76054: (_ozx, _ozy, _ozz) => {
        'use strict';
        var _p00 = null;
        defineModule(_ozy);
        Object.defineProperty(_ozy, '__esModule', {
            'value': true
        }), _ozy.getSlot518PersonalEffect = void 0;
        var _p01 = _ozz(74496);
        _ozy.getSlot518PersonalEffect = function(_p02) {
            var _p03 = null,
                _p04 = new _p01.SlotItemEffectModel(),
                _p05 = false,
                _p06 = new _p01.SlotItemEffectModel();
            if (34 != _p02.ctype && 56 != _p02.ctype || (_p06.houg += 1, _p06.tyku += 1, _p06.tais += 1, _p06.kaih += 1, _p05 = true), 16 == _p02.stype && (_p06.houg += 1, _p06.raig += 1, _p06.kaih += 1, _p05 = true), 622 != _p02.ship_id && 624 != _p02.ship_id && 623 != _p02.ship_id || (_p06.houg += 1, _p05 = true), 622 != _p02.ship_id && 624 != _p02.ship_id || (_p06.tyku += 1, _p05 = true), 624 == _p02.ship_id && (_p06.tais += 2, _p05 = true), 0 == _p05) return _p04;
            var _p07 = _p02.get_slotnums(518);
            return _p04.add(_p06.multiply(_p07)), _p04;
        };
    },
    93053: (_p08, _p09, _p0a) => {
        'use strict';
        var _p0b = null;
        defineModule(_p09);
        Object.defineProperty(_p09, '__esModule', {
            'value': true
        }), _p09.getSlot519PersonalEffect = void 0;
        var _p0c = _p0a(74496);
        _p09.getSlot519PersonalEffect = function(_p0d) {
            var _p0e = null,
                _p0f = new _p0c.SlotItemEffectModel();
            return 122 == _p0d.ctype && (_p0f.houm += 2, _p0f.kaih += 2), 114 == _p0d.ctype && (_p0f.raig += 1, _p0f.houm += 2, _p0f.kaih += 2), _p0f;
        };
    },
    81254: (_p0g, _p0h, _p0i) => {
        'use strict';
        var _p0j = null;
        defineModule(_p0h);
        Object.defineProperty(_p0h, '__esModule', {
            'value': true
        }), _p0h.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _p0k = _p0i(74496);
        _p0h.getSlot51cmSeriesGunPersonalEffect = function(_p0l) {
            var _p0m = null,
                _p0n = new _p0k.SlotItemEffectModel(),
                _p0o = false,
                _p0p = new _p0k.SlotItemEffectModel(),
                _p0q = _p0l.get_slotnums(142),
                _p0r = _p0l.get_slotnums(460),
                _p0s = _p0q + _p0r;
            if (916 != _p0l.ship_id && 911 != _p0l.ship_id && 546 != _p0l.ship_id || (_p0p.houg += 1, _p0p.houm += 1, _p0r >= 1 && (_p0n.kaih += 1, _p0n.houm += 1), _p0o = true), 37 == _p0l.ctype && _p0s >= 1 && (_p0n.houg += 1, _p0n.houm += 2), 0 == _p0o) return _p0n;
            var _p0t = _p0l.get_slotnums(128) + _p0l.get_slotnums(281);
            return _p0n.add(_p0p.multiply(_p0t)), _p0n;
        };
    },
    88792: (_p0u, _p0v, _p0w) => {
        'use strict';
        var _p0x = null;
        defineModule(_p0v);
        Object.defineProperty(_p0v, '__esModule', {
            'value': true
        }), _p0v.getSlot520PersonalEffect = void 0;
        var _p0y = _p0w(74496);
        _p0v.getSlot520PersonalEffect = function(_p0z) {
            var _p10 = null,
                _p11 = new _p0y.SlotItemEffectModel(),
                _p12 = false,
                _p13 = new _p0y.SlotItemEffectModel(),
                _p14 = 0,
                _p15 = 0,
                _p16 = 0,
                _p17 = _p0z.get_slotnums(520);
            7 == _p0z.ctype || 13 == _p0z.ctype ? (_p13.houg += 1, _p12 = true, _p15 = 1, _p16 = 1) : 8 == _p0z.ctype || 29 == _p0z.ctype ? (_p13.houg += 2, _p13.kaih += 1, _p12 = true, _p15 = 2, _p16 = 1) : 9 != _p0z.ctype && 31 != _p0z.ctype || (_p13.houg += 3, _p13.kaih += 1, _p13.houm += 1, _p12 = true, _p15 = 2, _p16 = 1, 2 == _p17 && (_p11.houg += 2), _p17 >= 3 && (_p11.houg += 4));
            var _p18 = _p0z.get_have_rader_nums().water_rader,
                _p19 = 0,
                _p1a = 0;
            if (_p15 + _p16 > 0) {
                for (var _p1b = _p0z.getSpItemDict_FukuhouTaikuHeisou(), _p1c = _p0z.getSpItemDict_Tansou21GouDentan(), _p1d = 0, _p1e = _p0z.have_slot_ids(); _p1d < _p1e.length; _p1d++) {
                    var _p1f = _p1e[_p1d],
                        _p1g = parseInt(_p1f);
                    null != _p1b[_p1g] ? (_p1b[_p1g] += _p0z.get_slotnums(_p1g), _p19 += _p0z.get_slotnums(_p1g)) : null != _p1c[_p1g] && (_p1c[_p1g] += _p0z.get_slotnums(_p1g), _p1a += _p0z.get_slotnums(_p1g));
                }
                _p18 > 0 && (1 == _p15 ? (_p11.houg += 2, _p11.raig += 2, _p11.kaih += 1, _p11.houm += 1) : 2 == _p15 && (_p11.houg += 3, _p11.raig += 2, _p11.kaih += 2, _p11.houm += 1)), _p19 > 0 && 1 == _p16 && (_p11.houg += 1, _p11.tyku += 4, _p11.kaih += 4, _p11.houm += 1);
            }
            if (269 == _p0z.ship_id || 265 == _p0z.ship_id || 319 == _p0z.ship_id ? (2 == _p17 && (_p11.houg += 2), _p17 >= 3 && (_p11.houg += 4)) : 501 != _p0z.ship_id && 506 != _p0z.ship_id && 502 != _p0z.ship_id && 507 != _p0z.ship_id && 503 != _p0z.ship_id && 504 != _p0z.ship_id || (_p13.houg += 1, _p12 = true, _p18 >= 1 && (_p11.houg += 1, _p11.kaih += 1, _p11.houm += 2), _p1a >= 1 && (_p11.houg += 1, _p11.tyku += 3, _p11.kaih += 2, _p11.houm += 1), _p0z.get_slotnums(410) > 0 && (_p11.houg += 2, _p11.tyku += 3, _p11.kaih += 2, _p11.houm += 1), _p14 = 1), 502 == _p0z.ship_id || 269 == _p0z.ship_id || 265 == _p0z.ship_id || 319 == _p0z.ship_id ? (_p13.houg += 1, _p13.houm += 1, _p12 = true) : 507 == _p0z.ship_id && (_p13.houg += 1, _p13.houm += 2, _p13.tyku += 1, _p12 = true), _p12 && _p11.add(_p13.multiply(_p17)), 0 == _p14) return _p11;
            var _p1h = _p0z.get_each_level_over_nums([520]),
                _p1i = _p1h.slot[520][7],
                _p1j = _p1h.slot[520][10];
            return 1 == _p14 && (_p1i > 0 && (_p11.houg += 1 * _p1i), _p1j > 0 && (_p11.houm += 1 * _p1j)), _p11;
        };
    },
    33242: (_p1k, _p1l, _p1m) => {
        'use strict';
        var _p1n = null;
        defineModule(_p1l);
        Object.defineProperty(_p1l, '__esModule', {
            'value': true
        }), _p1l.getSlot521PersonalEffect = void 0;
        var _p1o = _p1m(74496);
        _p1l.getSlot521PersonalEffect = function(_p1p) {
            var _p1q = null,
                _p1r = new _p1o.SlotItemEffectModel(),
                _p1s = false,
                _p1t = new _p1o.SlotItemEffectModel(),
                _p1u = 0;
            if (52 == _p1p.ctype && (_p1u = 1), 183 == _p1p.ship_id ? (_p1t.houg += 1, _p1t.houm += 1, _p1t.saku += 2, _p1t.kaih += 2, _p1s = true) : 321 == _p1p.ship_id ? (_p1t.houg += 2, _p1t.houm += 2, _p1t.saku += 3, _p1t.kaih += 3, _p1s = true) : 507 == _p1p.ship_id && (_p1t.houg += 3, _p1t.tyku += 1, _p1t.houm += 3, _p1t.saku += 2, _p1t.kaih += 2, _p1s = true, _p1u = 1), _p1s) {
                var _p1v = _p1p.get_slotnums(521);
                _p1r.add(_p1t.multiply(_p1v));
            }
            if (0 == _p1u) return _p1r;
            var _p1w = _p1p.get_each_level_over_nums([521]).slot[521];
            return 1 == _p1u && (_p1w[1] >= 1 && (_p1r.houm += 1 * _p1w[1]), _p1w[2] >= 1 && (_p1r.kaih += 1 * _p1w[2]), _p1w[3] >= 1 && (_p1r.saku += 1 * _p1w[3], _p1r.raig += 1 * _p1w[3]), _p1w[4] >= 1 && (_p1r.houg += 1 * _p1w[4]), _p1w[6] >= 1 && (_p1r.houm += 1 * _p1w[6]), _p1w[8] >= 1 && (_p1r.saku += 1 * _p1w[8]), _p1w[10] >= 1 && (_p1r.houm += 1 * _p1w[10])), _p1r;
        };
    },
    3296: (_p1x, _p1y, _p1z) => {
        'use strict';
        var _p20 = null;
        defineModule(_p1y);
        Object.defineProperty(_p1y, '__esModule', {
            'value': true
        }), _p1y.getSlot522_523PersonalEffect = void 0;
        var _p21 = _p1z(74496);
        _p1y.getSlot522_523PersonalEffect = function(_p22) {
            var _p23 = null,
                _p24 = new _p21.SlotItemEffectModel(),
                _p25 = false,
                _p26 = new _p21.SlotItemEffectModel(),
                _p27 = 0,
                _p28 = _p22.get_slotnums(522),
                _p29 = _p22.get_slotnums(523),
                _p2a = _p28 + _p29;
            if (14 == _p22.stype && (_p26.raig += 1, _p26.kaih += 5, _p26.houm += 1, _p26.saku += 3, _p25 = true, _p29 >= 1 && (_p24.raig += 2 * _p29, _p24.baku += 2 * _p29, _p24.kaih += 1 * _p29, _p24.houm += 1 * _p29, _p24.saku += 1 * _p29), _p27 = 1), 0 == _p25) return _p24;
            if (_p24.add(_p26.multiply(_p2a)), 0 == _p27) return _p24;
            var _p2b = _p22.get_each_level_over_nums([522, 523]),
                _p2c = _p2b.slot[522],
                _p2d = _p2b.slot[523];
            if (1 == _p27) {
                if (_p2c[1] >= 1 || _p2d[1] >= 1) {
                    var _p2e = _p2c[1] + _p2d[1];
                    _p24.raig += 1 * _p2e;
                }
                if (_p2c[2] >= 1 || _p2d[2] >= 1) {
                    var _p2f = _p2c[2] + _p2d[2];
                    _p24.houm += 1 * _p2f;
                }
                if (_p2c[3] >= 1 || _p2d[3] >= 1) {
                    var _p2g = _p2c[3] + _p2d[3];
                    _p24.kaih += 1 * _p2g;
                }
                if (_p2c[5] >= 1 || _p2d[5] >= 1) {
                    var _p2h = _p2c[5] + _p2d[5];
                    _p24.saku += 1 * _p2h;
                }
                if (_p2c[8] >= 1 || _p2d[8] >= 1) {
                    var _p2i = _p2c[8] + _p2d[8];
                    _p24.houm += 1 * _p2i;
                }
                if (_p2c[10] >= 1 || _p2d[10] >= 1) {
                    var _p2j = _p2c[10] + _p2d[10];
                    _p24.kaih += 1 * _p2j;
                }
            }
            return _p24;
        };
    },
    59415: (_p2k, _p2l, _p2m) => {
        'use strict';
        var _p2n = null;
        defineModule(_p2l);
        Object.defineProperty(_p2l, '__esModule', {
            'value': true
        }), _p2l.getSlot524PersonalEffect = void 0;
        var _p2o = _p2m(74496);
        _p2l.getSlot524PersonalEffect = function(_p2p) {
            var _p2q = null,
                _p2r = new _p2o.SlotItemEffectModel(),
                _p2s = false,
                _p2t = new _p2o.SlotItemEffectModel(),
                _p2u = 0,
                _p2v = 0;
            if (17 != _p2p.stype && 19 != _p2p.stype && 20 != _p2p.stype && 21 != _p2p.stype && 22 != _p2p.stype || (_p2t.houg += 1, _p2t.tyku += 2, _p2t.kaih += 2, _p2t.houm += 1, _p2s = true, _p2u = 1, _p2v = 1), 0 == _p2s) return _p2r;
            var _p2w = _p2p.get_slotnums(524);
            _p2r.add(_p2t.multiply(_p2w));
            var _p2x = _p2p.get_have_rader_nums().air_rader;
            if (1 == _p2v && _p2x >= 1 && (_p2r.tyku += 2, _p2r.kaih += 2), 0 == _p2u) return _p2r;
            var _p2y = _p2p.get_each_level_over_nums([524]).slot[524];
            return 1 == _p2u && (_p2y[1] >= 1 && (_p2r.kaih += 1 * _p2y[1]), _p2y[2] >= 1 && (_p2r.kaih += 1 * _p2y[2]), _p2y[4] >= 1 && (_p2r.tyku += 1 * _p2y[4]), _p2y[6] >= 1 && (_p2r.kaih += 1 * _p2y[6]), _p2y[7] >= 1 && (_p2r.houm += 1 * _p2y[7]), _p2y[8] >= 1 && (_p2r.tyku += 1 * _p2y[8]), _p2y[9] >= 1 && (_p2r.kaih += 1 * _p2y[9]), _p2y[10] >= 1 && (_p2r.houg += 1 * _p2y[10])), _p2r;
        };
    },
    36731: (_p2z, _p30, _p31) => {
        'use strict';
        var _p32 = null;
        defineModule(_p30);
        Object.defineProperty(_p30, '__esModule', {
            'value': true
        }), _p30.getSlot527PersonalEffect = void 0;
        var _p33 = _p31(74496);
        _p30.getSlot527PersonalEffect = function(_p34) {
            var _p35 = null,
                _p36 = new _p33.SlotItemEffectModel(),
                _p37 = 0;
            if ('イギリス' == _p34.getCountryName() && (_p37 = 1, _p36.tyku += 2, _p36.houm += 1, _p36.kaih += 1, _p36.saku += 2, 88 == _p34.ctype && (_p36.houg += 2), 67 == _p34.ctype && (_p36.houg += 1)), 0 == _p37) return _p36;
            var _p38 = _p34.get_each_level_over_nums([527]),
                _p39 = _p38.slot[527][2],
                _p3a = _p38.slot[527][4],
                _p3b = _p38.slot[527][7],
                _p3c = _p38.slot[527][10];
            return 1 == _p37 && (_p39 >= 1 && (_p36.tyku += 1), _p3a >= 1 && (_p36.kaih += 1), _p3b >= 1 && (_p36.tyku += 1), _p3c >= 1 && (_p36.houm += 1)), _p36;
        };
    },
    30450: (_p3d, _p3e, _p3f) => {
        'use strict';
        var _p3g = null;
        defineModule(_p3e);
        Object.defineProperty(_p3e, '__esModule', {
            'value': true
        }), _p3e.getSlot528PersonalEffect = void 0;
        var _p3h = _p3f(74496);
        _p3e.getSlot528PersonalEffect = function(_p3i) {
            var _p3j = null,
                _p3k = new _p3h.SlotItemEffectModel(),
                _p3l = false,
                _p3m = new _p3h.SlotItemEffectModel(),
                _p3n = 0;
            if ('イギリス' == _p3i.getCountryName() && (_p3m.houg += 1, _p3m.houm += 2, _p3m.kaih += 1, 108 == _p3i.ctype && (_p3m.houg += 1, _p3m.kaih += 1), _p3l = true, _p3n = 1), 0 == _p3l) return _p3k;
            var _p3o = _p3i.get_slotnums(528);
            if (_p3k.add(_p3m.multiply(_p3o)), 0 == _p3n) return _p3k;
            var _p3p = _p3i.get_each_level_over_nums([528]),
                _p3q = _p3p.slot[528][2],
                _p3r = _p3p.slot[528][4],
                _p3s = _p3p.slot[528][7],
                _p3t = _p3p.slot[528][10];
            return 1 == _p3n && (_p3q >= 1 && (_p3k.houg += 1 * _p3q), _p3r >= 1 && (_p3k.houm += 1 * _p3r), _p3s >= 1 && (_p3k.kaih += 1 * _p3s), _p3t >= 1 && (_p3k.houm += 1 * _p3t)), _p3k;
        };
    },
    15653: (_p3u, _p3v, _p3w) => {
        'use strict';
        var _p3x = null;
        defineModule(_p3v);
        Object.defineProperty(_p3v, '__esModule', {
            'value': true
        }), _p3v.getSlot530PersonalEffect = void 0;
        var _p3y = _p3w(74496);
        _p3v.getSlot530PersonalEffect = function(_p3z) {
            var _p40 = null,
                _p41 = new _p3y.SlotItemEffectModel(),
                _p42 = false;
            if (6 == _p3z.ctype && (_p42 = true), 0 == _p42) return _p41;
            var _p43 = false,
                _p44 = new _p3y.SlotItemEffectModel(),
                _p45 = _p3z.get_slotnums(530),
                _p46 = _p3z.get_slotnums(174),
                _p47 = _p3z.get_each_level_over_nums([530, 174]),
                _p48 = _p47.slot[530],
                _p49 = _p47.slot[174],
                _p4a = _p3z.get_have_rader_nums(),
                _p4b = _p4a.water_rader,
                _p4c = _p4a.high_water_rader;
            return _p4a.air_rader, 149 != _p3z.ship_id && 150 != _p3z.ship_id && 151 != _p3z.ship_id && 152 != _p3z.ship_id && 593 != _p3z.ship_id || (_p44.houg += 2, _p43 = true), 591 != _p3z.ship_id && 954 != _p3z.ship_id || (_p44.houg += 3, _p43 = true), 592 != _p3z.ship_id && 694 != _p3z.ship_id || (_p44.houg += 4, _p43 = true), 149 != _p3z.ship_id && 150 != _p3z.ship_id && 151 != _p3z.ship_id && 152 != _p3z.ship_id || (_p44.tyku += 1, _p43 = true), 591 != _p3z.ship_id && 592 != _p3z.ship_id && 954 != _p3z.ship_id && 694 != _p3z.ship_id || (_p44.tyku += 2, _p43 = true), 593 == _p3z.ship_id && (_p44.tyku += 3, _p43 = true), 592 != _p3z.ship_id && 694 != _p3z.ship_id || (_p44.houg += 1, _p44.houm += 2, _p43 = true, _p48[2] >= 1 && (_p41.houm += 1 * _p48[2]), _p48[4] >= 1 && (_p41.houg += 1 * _p48[4]), _p48[6] >= 1 && (_p41.souk += 1 * _p48[6]), _p48[7] >= 1 && (_p41.houm += 1 * _p48[7]), _p48[8] >= 1 && (_p41.houg += 1 * _p48[8]), _p48[9] >= 1 && (_p41.souk += 1 * _p48[9]), _p48[10] >= 1 && (_p41.houm += 1 * _p48[10])), 150 != _p3z.ship_id && 152 != _p3z.ship_id && 591 != _p3z.ship_id && 954 != _p3z.ship_id || (_p44.houm += 1, _p43 = true, _p48[2] >= 1 && (_p41.houg += 1 * _p48[2]), _p48[4] >= 1 && (_p41.souk += 1 * _p48[4]), _p48[6] >= 1 && (_p41.houm += 1 * _p48[6]), _p48[8] >= 1 && (_p41.houg += 1 * _p48[8]), _p48[10] >= 1 && (_p41.houm += 1 * _p48[10])), 149 != _p3z.ship_id && 151 != _p3z.ship_id && 593 != _p3z.ship_id || (_p48[4] >= 1 && (_p41.houg += 1 * _p48[4]), _p48[7] >= 1 && (_p41.souk += 1 * _p48[7]), _p48[10] >= 1 && (_p41.houm += 1 * _p48[10])), 592 != _p3z.ship_id && 694 != _p3z.ship_id || (_p4b >= 1 && (_p41.houg += 3, _p41.houm += 3, _p41.kaih += 3, 592 == _p3z.ship_id ? _p41.houg += 3 : 694 == _p3z.ship_id && (_p41.houg += 4)), _p45 >= 2 && (_p41.houm += 2), _p45 >= 3 && (_p41.houm += 2), _p45 >= 4 && (_p41.houm += 2), _p4c >= 1 && (_p41.houm += 1), 694 == _p3z.ship_id && _p45 >= 3 && (_p41.houg += 3)), 149 != _p3z.ship_id && 150 != _p3z.ship_id && 151 != _p3z.ship_id && 152 != _p3z.ship_id && 591 != _p3z.ship_id && 954 != _p3z.ship_id && 593 != _p3z.ship_id || (_p4b >= 1 && (_p41.houg += 2, _p41.houm += 2, _p41.kaih += 2, 591 == _p3z.ship_id || 152 == _p3z.ship_id ? _p41.houg += 3 : 954 == _p3z.ship_id || 150 == _p3z.ship_id ? _p41.houg += 2 : 149 != _p3z.ship_id && 151 != _p3z.ship_id && 593 != _p3z.ship_id || (_p41.houg += 1)), _p4c >= 1 && (_p41.houm += 1)), 591 != _p3z.ship_id && 592 != _p3z.ship_id && 593 != _p3z.ship_id && 954 != _p3z.ship_id && 694 != _p3z.ship_id || (_p46 >= 1 && (_p41.raig += 6, _p49[6] >= 1 && (_p41.raig += 1), _p49[8] >= 1 && (_p41.houm += 1), _p49[10] >= 1 && (_p41.houg += 1)), _p4c >= 1 && (_p41.houg += 2, _p41.raig += 2, _p41.houm += 2, _p41.kaih += 3, 591 == _p3z.ship_id || 592 == _p3z.ship_id ? _p41.houg += 2 : 954 == _p3z.ship_id || 593 == _p3z.ship_id ? _p41.houg += 1 : 694 == _p3z.ship_id && (_p41.houg += 3)), _p45 >= 2 && (_p41.houm += 1)), _p43 && _p41.add(_p44.multiply(_p45)), _p41;
        };
    },
    25851: (_p4d, _p4e, _p4f) => {
        'use strict';
        var _p4g = null;
        defineModule(_p4e);
        Object.defineProperty(_p4e, '__esModule', {
            'value': true
        }), _p4e.getSlot531PersonalEffect = void 0;
        var _p4h = _p4f(74496);
        _p4e.getSlot531PersonalEffect = function(_p4i) {
            var _p4j = null,
                _p4k = new _p4h.SlotItemEffectModel(),
                _p4l = _p4i.have_level_num_over_dict[531];
            return null == _p4l || (_p4l[4] >= 1 && (_p4k.houm += 1 * _p4l[4]), _p4l[5] >= 1 && (_p4k.houg += 1 * _p4l[5]), _p4l[6] >= 1 && (_p4k.kaih += 1 * _p4l[6]), _p4l[7] >= 1 && (_p4k.houm += 1 * _p4l[7]), _p4l[8] >= 1 && (_p4k.houg += 1 * _p4l[8]), _p4l[9] >= 1 && (_p4k.kaih += 1 * _p4l[9]), _p4l[10] >= 1 && (_p4k.houm += 1 * _p4l[10])), _p4k;
        };
    },
    91275: (_p4m, _p4n, _p4o) => {
        'use strict';
        var _p4p = null;
        defineModule(_p4n);
        Object.defineProperty(_p4n, '__esModule', {
            'value': true
        }), _p4n.getSlot538PersonalEffect = void 0;
        var _p4q = _p4o(74496);
        _p4n.getSlot538PersonalEffect = function(_p4r) {
            var _p4s = null,
                _p4t = new _p4q.SlotItemEffectModel(),
                _p4u = false,
                _p4v = new _p4q.SlotItemEffectModel(),
                _p4w = 0;
            if ('フランス' == _p4r.getCountryName() && (_p4v.houg += 3, _p4v.kaih += 2, _p4v.houm += 2, _p4u = true, _p4w = 1), 79 == _p4r.ctype ? (_p4v.houg += 2, 969 == _p4r.ship_id && (_p4v.houg += 1, _p4v.houm += 1, _p4v.kaih += 1), _p4u = true) : 70 == _p4r.ctype && (_p4v.houg += 1, _p4v.houm += 1, _p4v.tyku += 2, _p4v.kaih += 2, _p4u = true), 0 == _p4u) return _p4t;
            var _p4x = _p4r.get_slotnums(538);
            if (_p4t.add(_p4v.multiply(_p4x)), 0 == _p4w) return _p4t;
            var _p4y = _p4r.haveSlotLevelNumOver(538);
            return 1 == _p4w && (_p4y[3] >= 1 && (_p4t.kaih += 1 * _p4y[3]), _p4y[4] >= 1 && (_p4t.houm += 1 * _p4y[4]), _p4y[5] >= 1 && (_p4t.houg += 1 * _p4y[5]), _p4y[6] >= 1 && (_p4t.kaih += 1 * _p4y[6]), _p4y[7] >= 1 && (_p4t.houm += 1 * _p4y[7]), _p4y[8] >= 1 && (_p4t.houg += 1 * _p4y[8]), _p4y[9] >= 1 && (_p4t.kaih += 1 * _p4y[9]), _p4y[10] >= 1 && (_p4t.houg += 1 * _p4y[10], _p4t.houm += 1 * _p4y[10])), _p4t;
        };
    },
    72743: (_p4z, _p50, _p51) => {
        'use strict';
        var _p52 = null;
        defineModule(_p50);
        Object.defineProperty(_p50, '__esModule', {
            'value': true
        }), _p50.getSlot540PersonalEffect = void 0;
        var _p53 = _p51(74496);
        _p50.getSlot540PersonalEffect = function(_p54) {
            var _p55 = null,
                _p56 = new _p53.SlotItemEffectModel(),
                _p57 = false,
                _p58 = new _p53.SlotItemEffectModel();
            if (911 == _p54.ship_id || 916 == _p54.ship_id || 546 == _p54.ship_id || 662 == _p54.ship_id || 663 == _p54.ship_id || 668 == _p54.ship_id ? (_p58.kaih += 1, _p58.saku += 1, _p57 = true) : 73 == _p54.ship_id || 506 == _p54.ship_id || 121 == _p54.ship_id || 503 == _p54.ship_id || 504 == _p54.ship_id || 188 == _p54.ship_id || 189 == _p54.ship_id ? (_p58.houm += 1, _p58.kaih += 1, _p58.saku += 1, _p57 = true) : 488 != _p54.ship_id && 200 != _p54.ship_id && 487 != _p54.ship_id && 501 != _p54.ship_id && 502 != _p54.ship_id && 507 != _p54.ship_id || (_p58.houg += 1, _p58.houm += 1, _p58.kaih += 1, _p58.saku += 1, _p57 = true), 'にっしん' == _p54.yomi || 'ちとせ' == _p54.yomi || 'ちよだ' == _p54.yomi || 'あきつしま' == _p54.yomi ? (_p58.houg += 1, _p58.houm += 1, _p58.tyku += 2, _p58.kaih += 2, _p58.saku += 2, _p57 = true) : 'みずほ' != _p54.yomi && 'かもい' != _p54.yomi || (_p58.houg += 2, _p58.houm += 1, _p58.tyku += 2, _p58.kaih += 2, _p58.saku += 2, _p57 = true), 0 == _p57) return _p56;
            var _p59 = _p54.get_slotnums(540);
            return _p56.add(_p58.multiply(_p59)), _p56;
        };
    },
    57041: (_p5a, _p5b, _p5c) => {
        'use strict';
        var _p5d = null;
        defineModule(_p5b);
        Object.defineProperty(_p5b, '__esModule', {
            'value': true
        }), _p5b.getSlot545PersonalEffect = void 0;
        var _p5e = _p5c(74496);
        _p5b.getSlot545PersonalEffect = function(_p5f) {
            var _p5g = null,
                _p5h = new _p5e.SlotItemEffectModel(),
                _p5i = false,
                _p5j = new _p5e.SlotItemEffectModel();
            if ('しょうかく' == _p5f.yomi ? _p5h.houg += 4 : 'ずいかく' == _p5f.yomi ? _p5h.houg += 3 : 'あかぎ' == _p5f.yomi ? _p5h.houg += 2 : 'かが' != _p5f.yomi && 'たいほう' != _p5f.yomi || (_p5h.houg += 1), 461 == _p5f.ship_id || 466 == _p5f.ship_id ? (_p5j.houg += 1, _p5j.houm += 2, _p5j.kaih += 1, _p5j.saku += 2, _p5i = true) : 462 == _p5f.ship_id || 467 == _p5f.ship_id || 646 == _p5f.ship_id ? (_p5j.houg += 1, _p5j.houm += 1, _p5j.saku += 1, _p5i = true) : 599 != _p5f.ship_id && 610 != _p5f.ship_id && 156 != _p5f.ship_id || (_p5j.houm += 1, _p5j.saku += 1, _p5i = true), 0 == _p5i) return _p5h;
            var _p5k = _p5f.get_slotnums(545);
            return _p5h.add(_p5j.multiply(_p5k)), _p5h;
        };
    },
    74608: (_p5l, _p5m, _p5n) => {
        'use strict';
        var _p5o = null;
        defineModule(_p5m);
        Object.defineProperty(_p5m, '__esModule', {
            'value': true
        }), _p5m.getSlot549PersonalEffect = void 0;
        var _p5p = _p5n(74496);
        _p5m.getSlot549PersonalEffect = function(_p5q) {
            var _p5r = null,
                _p5s = new _p5p.SlotItemEffectModel(),
                _p5t = false,
                _p5u = new _p5p.SlotItemEffectModel(),
                _p5v = 0;
            if ('やましおまる' != _p5q.yomi && 'くまのまる' != _p5q.yomi && 'あきつまる' != _p5q.yomi || (_p5u.houg += 2, _p5u.houm += 1, _p5u.kaih += 1, _p5u.tais += 4, _p5t = true, _p5v = 1), 76 != _p5q.ctype && 27 != _p5q.ctype || (_p5u.houg += 1, _p5u.houm += 1, _p5u.tais += 1, _p5t = true, _p5v = 2), 0 == _p5t) return _p5s;
            var _p5w = _p5q.get_slotnums(549);
            if (_p5s.add(_p5u.multiply(_p5w)), 0 == _p5v) return _p5s;
            var _p5x = _p5q.haveSlotLevelNumOver(549);
            return 1 == _p5v ? (_p5x[3] >= 1 && (_p5s.houg += 1 * _p5x[3]), _p5x[4] >= 1 && (_p5s.houm += 1 * _p5x[4]), _p5x[5] >= 1 && (_p5s.tais += 1 * _p5x[5]), _p5x[6] >= 1 && (_p5s.kaih += 1 * _p5x[6]), _p5x[7] >= 1 && (_p5s.houg += 1 * _p5x[7]), _p5x[8] >= 1 && (_p5s.houm += 1 * _p5x[8]), _p5x[9] >= 1 && (_p5s.tais += 1 * _p5x[9]), _p5x[10] >= 1 && (_p5s.houg += 1 * _p5x[10])) : 2 == _p5v && (_p5x[4] >= 1 && (_p5s.tais += 1 * _p5x[4]), _p5x[6] >= 1 && (_p5s.kaih += 1 * _p5x[6]), _p5x[8] >= 1 && (_p5s.houm += 1 * _p5x[8]), _p5x[10] >= 1 && (_p5s.houg += 1 * _p5x[10])), _p5s;
        };
    },
    23035: (_p5y, _p5z, _p60) => {
        'use strict';
        var _p61 = null;
        defineModule(_p5z);
        Object.defineProperty(_p5z, '__esModule', {
            'value': true
        }), _p5z.getSlot58PersonalEffect = void 0;
        var _p62 = _p60(74496);
        _p5z.getSlot58PersonalEffect = function(_p63) {
            var _p64 = null,
                _p65 = new _p62.SlotItemEffectModel(),
                _p66 = new _p62.SlotItemEffectModel();
            if ('しまかぜ' != _p63.yomi && 4 != _p63.stype && 54 != _p63.ctype || (_p66.raig = 1), !_p66.exists()) return _p65;
            var _p67 = _p63.get_slotnums(58);
            return _p65 = _p66.multiply(_p67);
        };
    },
    47169: (_p68, _p69, _p6a) => {
        'use strict';
        var _p6b = null;
        defineModule(_p69);
        Object.defineProperty(_p69, '__esModule', {
            'value': true
        }), _p69.getSlot59PersonalEffect = void 0;
        var _p6c = _p6a(74496);
        _p69.getSlot59PersonalEffect = function(_p6d) {
            var _p6e = null,
                _p6f = new _p6c.SlotItemEffectModel();
            return 501 != _p6d.ship_id && 506 != _p6d.ship_id && 502 != _p6d.ship_id && 507 != _p6d.ship_id || (_p6f.tyku += 1, _p6f.kaih += 1), _p6f;
        };
    },
    87845: (_p6g, _p6h, _p6i) => {
        'use strict';
        var _p6j = null;
        defineModule(_p6h);
        Object.defineProperty(_p6h, '__esModule', {
            'value': true
        }), _p6h.getSlot5PersonalEffect = void 0;
        var _p6k = _p6i(74496);
        _p6h.getSlot5PersonalEffect = function(_p6l) {
            var _p6m = null,
                _p6n = new _p6k.SlotItemEffectModel(),
                _p6o = false,
                _p6p = new _p6k.SlotItemEffectModel();
            if (52 != _p6l.ctype && 9 != _p6l.ctype || (_p6p.houg += 1, 52 == _p6l.ctype && (_p6p.houg = _p6p.houg + 1), _p6o = true), 0 == _p6o) return _p6n;
            var _p6q = _p6l.get_slotnums(5);
            return _p6n.add(_p6p.multiply(_p6q)), _p6n;
        };
    },
    92253: (_p6r, _p6s, _p6t) => {
        'use strict';
        var _p6u = null;
        defineModule(_p6s);
        Object.defineProperty(_p6s, '__esModule', {
            'value': true
        }), _p6s.getSlot60_154_219PersonalEffec = void 0;
        var _p6v = _p6t(74496);
        _p6s.getSlot60_154_219PersonalEffec = function(_p6w) {
            var _p6x = null,
                _p6y = new _p6v.SlotItemEffectModel(),
                _p6z = false,
                _p70 = new _p6v.SlotItemEffectModel();
            if ('じゅんよう' != _p6w.yomi && 'ひよう' != _p6w.yomi && 'ずいほう' != _p6w.yomi && 'ちとせ' != _p6w.yomi && 'ちよだ' != _p6w.yomi || (_p70.houg += 1, _p70.tyku += 1, _p70.kaih += 1, _p6z = true), 185 != _p6w.ship_id && 318 != _p6w.ship_id && 282 != _p6w.ship_id || (_p70.houg += 1, _p70.tyku += 1, _p70.kaih += 1, _p6z = true), 888 != _p6w.ship_id && 883 != _p6w.ship_id || (_p70.houg += 2, _p70.tyku += 1, _p70.kaih += 2, _p6z = true), 0 == _p6z) return _p6y;
            var _p71 = _p6w.get_slotnums(60) + _p6w.get_slotnums(154) + _p6w.get_slotnums(219);
            return _p6y.add(_p70.multiply(_p71)), _p6y;
        };
    },
    2578: (_p72, _p73, _p74) => {
        'use strict';
        var _p75 = null;
        defineModule(_p73);
        Object.defineProperty(_p73, '__esModule', {
            'value': true
        }), _p73.getSlot61PersonalEffect2 = _p73.getSlot61PersonalEffect = void 0;
        var _p76 = _p74(74496);
        _p73.getSlot61PersonalEffect = function(_p77) {
            var _p78 = null,
                _p79 = new _p76.SlotItemEffectModel();
            if (553 == _p77.ship_id) _p79.houg = 3, _p79.kaih = 2, _p79.souk = 1, _p79.houm = 5, _p79.leng = 1;
            else {
                if (554 == _p77.ship_id) _p79.houg = 3, _p79.kaih = 3, _p79.souk = 3, _p79.houm = 5, _p79.leng = 1;
                else {
                    if (196 == _p77.ship_id) _p79.houm = 5, _p79.leng = 1;
                    else {
                        if (197 != _p77.ship_id) return _p79;
                        _p79.houm = 5, _p79.leng = 1;
                    }
                }
            }
            return _p79;
        }, _p73.getSlot61PersonalEffect2 = function(_p7a) {
            var _p7b = null,
                _p7c = new _p76.SlotItemEffectModel();
            if (null == _p7a.have_slots_dict[61]) return _p7c;
            for (var _p7d = 0, _p7e = 0, _p7f = _p7a.have_slots_dict[61]; _p7e < _p7f.length; _p7e++) {
                var _p7g = _p7f[_p7e].level;
                _p7d < _p7g && (_p7d = _p7g);
            }
            return 0 == _p7d || ('そうりゅう' == _p7a.yomi ? (_p7c.houg += 3, _p7c.saku += 3) : 'ひりゅう' == _p7a.yomi && (_p7c.houg += 2, _p7c.saku += 2), 508 != _p7a.ship_id && 509 != _p7a.ship_id && 560 != _p7a.ship_id || (_p7c.houg += 1, _p7c.saku += 1), _p7d >= 8 && 197 == _p7a.ship_id && (_p7c.houg += 1, _p7c.saku += 1)), _p7c;
        };
    },
    17143: (_p7h, _p7i, _p7j) => {
        'use strict';
        var _p7k = null;
        defineModule(_p7i);
        Object.defineProperty(_p7i, '__esModule', {
            'value': true
        }), _p7i.getSlot63PersonalEffect = void 0;
        var _p7l = _p7j(74496);
        _p7i.getSlot63PersonalEffect = function(_p7m) {
            var _p7n = null,
                _p7o = new _p7l.SlotItemEffectModel(),
                _p7p = new _p7l.SlotItemEffectModel();
            1 != _p7m.ctype && 5 != _p7m.ctype && 10 != _p7m.ctype || (_p7p.tyku += 1), 'ゆうだち' == _p7m.yomi && (_p7p.houg += 1, _p7p.tyku += 1, _p7p.kaih += 2), 145 == _p7m.ship_id || 961 == _p7m.ship_id ? _p7p.houg += 1 : 144 == _p7m.ship_id ? _p7p.raig += 1 : 469 == _p7m.ship_id ? _p7p.kaih += 2 : 242 == _p7m.ship_id || 497 == _p7m.ship_id || 244 == _p7m.ship_id || 498 == _p7m.ship_id || 975 == _p7m.ship_id ? _p7p.kaih += 1 : 627 == _p7m.ship_id ? _p7p.houg += 1 : 903 != _p7m.ship_id && 908 != _p7m.ship_id || (_p7p.houg += 2);
            var _p7q = true;
            if (_p7p.exists() || (_p7q = false), 0 == _p7q) return _p7o;
            var _p7r = _p7m.get_slotnums(63);
            return _p7o = _p7p.multiply(_p7r);
        };
    },
    16164: (_p7s, _p7t, _p7u) => {
        'use strict';
        var _p7v = null;
        defineModule(_p7t);
        Object.defineProperty(_p7t, '__esModule', {
            'value': true
        }), _p7t.getSlot67PersonalEffect = void 0;
        var _p7w = _p7u(74496);
        _p7t.getSlot67PersonalEffect = function(_p7x) {
            var _p7y = null,
                _p7z = new _p7w.SlotItemEffectModel(),
                _p80 = new _p7w.SlotItemEffectModel();
            if (13 != _p7x.stype && 14 != _p7x.stype && (_p80.raig = -5), !_p80.exists()) return _p7z;
            var _p81 = _p7x.get_slotnums(67);
            return _p7z = _p80.multiply(_p81);
        };
    },
    35023: (_p82, _p83, _p84) => {
        'use strict';
        var _p85 = null;
        defineModule(_p83);
        Object.defineProperty(_p83, '__esModule', {
            'value': true
        }), _p83.getSlot69PersonalEffect = void 0;
        var _p86 = _p84(74496);
        _p83.getSlot69PersonalEffect = function(_p87) {
            var _p88 = null,
                _p89 = new _p86.SlotItemEffectModel(),
                _p8a = false,
                _p8b = new _p86.SlotItemEffectModel();
            if (554 == _p87.ship_id || 646 == _p87.ship_id ? (_p8b.houg += 1, _p8b.tais += 2, _p8a = true) : 553 == _p87.ship_id && (_p8b.houg += 1, _p8b.tais += 1, _p8a = true), 0 == _p8a) return _p89;
            var _p8c = _p87.get_slotnums(69);
            return _p89.add(_p8b.multiply(_p8c)), _p89;
        };
    },
    78707: (_p8d, _p8e, _p8f) => {
        'use strict';
        var _p8g = null;
        defineModule(_p8e);
        Object.defineProperty(_p8e, '__esModule', {
            'value': true
        }), _p8e.getSlot70PersonalEffect = void 0;
        var _p8h = _p8f(74496);
        _p8e.getSlot70PersonalEffect = function(_p8i) {
            var _p8j = null,
                _p8k = new _p8h.SlotItemEffectModel(),
                _p8l = false,
                _p8m = new _p8h.SlotItemEffectModel();
            if ('やましおまる' == _p8i.yomi && (_p8m.houg += 1, _p8m.tais += 1, _p8l = true), 0 == _p8l) return _p8k;
            var _p8n = _p8i.get_slotnums(70);
            return _p8k.add(_p8m.multiply(_p8n)), _p8k;
        };
    },
    44680: function(_p8o, _p8p, _p8q) {
        'use strict';
        var _p8r = null;
        var _p8s = this && this.__importDefault || function(_p8t) {
            var _p8u = null;
            return _p8t && _p8t.__esModule ? _p8t : {
                'default': _p8t
            };
        };
        defineModule(_p8p);
        Object.defineProperty(_p8p, '__esModule', {
            'value': true
        }), _p8p.getSlot78PersonalEffect = void 0;
        var _p8v = _p8q(74496),
            _p8w = _p8s(_p8q(18622));
        _p8p.getSlot78PersonalEffect = function(_p8x) {
            var _p8y = null,
                _p8z = new _p8v.SlotItemEffectModel(),
                _p90 = false,
                _p91 = new _p8v.SlotItemEffectModel(),
                _p92 = 0,
                _p93 = 0,
                _p94 = false;
            if (48 == _p8x.ctype && (_p91.houg += 1, _p91.kaih += 1, _p92 = 1, _p93 = 1, _p94 = true, _p90 = true), 0 == _p90) return _p8z;
            var _p95 = _p8x.get_slotnums(78);
            _p8z.add(_p91.multiply(_p95));
            var _p96 = 0,
                _p97 = _p8x.get_each_level_nums(78),
                _p98 = 0;
            if (_p94) {
                _p97.map(function(_p99, _p9a) {
                    _p9a >= 7 && (_p98 += _p99);
                });
                for (var _p9b = 0, _p9c = _p8x.have_slot_ids(); _p9b < _p9c.length; _p9b++) {
                    var _p9d = _p9c[_p9b],
                        _p9e = _p8w.default.model.slot.getMst(_p9d),
                        _p9f = _p9e.equipType;
                    12 != _p9f && 13 != _p9f || _p9e.sakuteki >= 5 && (_p96 += _p8x.get_slotnums(parseInt(_p9d)));
                }
            }
            if (1 == _p92 && _p96 > 0 && (_p8z.houg += 2, _p8z.kaih += 2, _p8z.raig += 2), 1 == _p93) {
                _p8z.houg += 1 * _p98;
                var _p9g = _p97[10];
                _p8z.souk += 1 * _p9g;
            }
            return _p8z;
        };
    },
    45749: (_p9h, _p9i, _p9j) => {
        'use strict';
        var _p9k = null;
        defineModule(_p9i);
        Object.defineProperty(_p9i, '__esModule', {
            'value': true
        }), _p9i.getSlot79And81PersonalEffect = void 0;
        var _p9l = _p9j(74496);
        _p9i.getSlot79And81PersonalEffect = function(_p9m) {
            var _p9n = null,
                _p9o = new _p9l.SlotItemEffectModel(),
                _p9p = new _p9l.SlotItemEffectModel();
            if (553 == _p9m.ship_id) _p9p.houg = 3;
            else {
                if (82 == _p9m.ship_id) _p9p.houg = 2;
                else {
                    if (88 == _p9m.ship_id) _p9p.houg = 2;
                    else {
                        if (554 == _p9m.ship_id) _p9p.houg = 3;
                        else {
                            if (411 == _p9m.ship_id) _p9p.houg = 2;
                            else {
                                if (412 != _p9m.ship_id) return _p9o;
                                _p9p.houg = 2;
                            }
                        }
                    }
                }
            }
            var _p9q = _p9m.get_slotnums(79) + _p9m.get_slotnums(81);
            return _p9o = _p9p.multiply(_p9q);
        };
    },
    37334: (_p9r, _p9s, _p9t) => {
        'use strict';
        var _p9u = null;
        defineModule(_p9s);
        Object.defineProperty(_p9s, '__esModule', {
            'value': true
        }), _p9s.getSlot82PersonalEffect = void 0;
        var _p9v = _p9t(74496);
        _p9s.getSlot82PersonalEffect = function(_p9w) {
            var _p9x = null,
                _p9y = new _p9v.SlotItemEffectModel(),
                _p9z = new _p9v.SlotItemEffectModel();
            if (76 == _p9w.ctype && (_p9z.tais = 1, _p9z.kaih = 1), !_p9z.exists()) return _p9y;
            var _pa0 = _p9w.get_slotnums(82);
            return _p9y = _p9z.multiply(_pa0);
        };
    },
    2603: function(_pa1, _pa2, _pa3) {
        'use strict';
        var _pa4 = null;
        var _pa5 = this && this.__importDefault || function(_pa6) {
            var _pa7 = null;
            return _pa6 && _pa6.__esModule ? _pa6 : {
                'default': _pa6
            };
        };
        defineModule(_pa2);
        Object.defineProperty(_pa2, '__esModule', {
            'value': true
        }), _pa2.getSlot84PersonalEffect = void 0;
        var _pa8 = _pa3(74496),
            _pa9 = _pa5(_pa3(18622));
        _pa2.getSlot84PersonalEffect = function(_paa) {
            var _pab = null,
                _pac = new _pa8.SlotItemEffectModel(),
                _pad = _paa.get_each_level_nums(84),
                _pae = 0,
                _paf = 0;
            if (_pad.forEach(function(_pag, _pah) {
                    _pah >= 4 && (_pae += _pag), _pah >= 7 && (_paf += _pag);
                }), 0 == _pae) return _pac;
            for (var _pai = 0, _paj = 0, _pak = _paa.have_slot_ids(); _paj < _pak.length; _paj++) {
                var _pal = _pak[_paj],
                    _pam = _pa9.default.model.slot.getMst(_pal),
                    _pan = _pam.equipType;
                12 != _pan && 13 != _pan || (_pam.sakuteki >= 5 && _paa.get_slotnums(parseInt(_pal)), _pam.taiku >= 2 && (_pai += _paa.get_slotnums(parseInt(_pal))));
            }
            var _pao = _paa.getCountryName();
            _pae >= 1 && (_pac.tyku += 1 * _pae, _pac.kaih += 1 * _pae, 'ドイツ' != _pao && 'イタリア' != _pao || (_pac.tyku += 1 * _pae, _pac.kaih += 1 * _pae), _pai >= 1 && (_pac.tyku += 1)), _paf >= 1 && (_pac.tyku += 1 * _paf, _pac.houg += 1 * _paf);
            var _pap = _pad[10];
            return _pap >= 1 && (_pac.tyku += 1 * _pap, _pac.kaih += 1 * _pap, 'ドイツ' != _pao && 'イタリア' != _pao || (_pac.houg += 1)), _pac;
        };
    },
    90725: (_paq, _par, _pas) => {
        'use strict';
        var _pat = null;
        defineModule(_par);
        Object.defineProperty(_par, '__esModule', {
            'value': true
        }), _par.getSlot85PersonalEffect = void 0;
        var _pau = _pas(74496);
        _par.getSlot85PersonalEffect = function(_pav) {
            var _paw = null,
                _pax = new _pau.SlotItemEffectModel(),
                _pay = _pav.get_each_level_over_nums([85]),
                _paz = _pay.slot[85][6],
                _pb0 = _pay.slot[85][8],
                _pb1 = _pay.slot[85][10],
                _pb2 = _pav.get_have_rader_nums().air_rader,
                _pb3 = _pav.getCountryName();
            return _paz > 0 && (_pax.tyku += 1 * _paz, _pax.kaih += 1 * _paz, _pb2 >= 1 && (_pax.tyku += 2)), _pb0 > 0 && (_pax.houg += 1 * _pb0, 'ドイツ' != _pb3 && 'イタリア' != _pb3 || (_pax.tyku += 1 * _pb0, _pax.kaih += 1 * _pb0)), _pb1 > 0 && (_pax.kaih += 1 * _pb1, _pax.houm += 1 * _pb1, 'ドイツ' != _pb3 && 'イタリア' != _pb3 || (_pax.houg += 1)), _pax;
        };
    },
    29180: (_pb4, _pb5, _pb6) => {
        'use strict';
        var _pb7 = null;
        defineModule(_pb5);
        Object.defineProperty(_pb5, '__esModule', {
            'value': true
        }), _pb5.getSlot87PersonalEffect = void 0;
        var _pb8 = _pb6(74496);
        _pb5.getSlot87PersonalEffect = function(_pb9) {
            var _pba = null,
                _pbb = new _pb8.SlotItemEffectModel(),
                _pbc = false,
                _pbd = new _pb8.SlotItemEffectModel(),
                _pbe = 0;
            if (951 == _pb9.ship_id ? (_pbd.houg += 1, _pbd.kaih += 1, _pbd.raig += 1, _pbd.houm += 1, _pbc = true, _pbe = 1) : 181 == _pb9.ship_id || 316 == _pb9.ship_id || 50 == _pb9.ship_id || 229 == _pb9.ship_id || 961 == _pb9.ship_id ? _pbe = 2 : 591 != _pb9.ship_id && 592 != _pb9.ship_id && 593 != _pb9.ship_id && 954 != _pb9.ship_id && 694 != _pb9.ship_id || (_pbb.kaih += 2, _pbb.raig += 1, _pbe = 3), 38 != _pb9.ctype && 54 != _pb9.ctype && 101 != _pb9.ctype || (_pbe = 4), _pbc) {
                var _pbf = _pb9.get_slotnums(87);
                _pbb.add(_pbd.multiply(_pbf));
            }
            if (0 == _pbe) return _pbb;
            var _pbg = _pb9.get_each_level_nums(87),
                _pbh = [];
            return _pbe > 0 && _pbg.forEach(function(_pbi, _pbj) {
                var _pbk = null;
                for (var _pbl = 1; _pbl <= _pb9.SLOT_LEVEL_MAX; _pbl++) null == _pbh[_pbl] && (_pbh[_pbl] = 0), _pbj >= _pbl && (_pbh[_pbl] += _pbi);
            }), 1 == _pbe ? (_pbh[6] >= 1 && (_pbb.tyku += 1 * _pbh[6]), _pbh[7] >= 1 && (_pbb.kaih += 1 * _pbh[7]), _pbh[8] >= 1 && (_pbb.raig += 1 * _pbh[8]), _pbh[9] >= 1 && (_pbb.houg += 1 * _pbh[9]), _pbh[10] >= 1 && (_pbb.houm += 1 * _pbh[10])) : 2 == _pbe ? (_pbh[6] >= 1 && (_pbb.kaih += 1 * _pbh[6]), _pbh[7] >= 1 && (_pbb.raig += 1 * _pbh[7]), _pbh[8] >= 1 && (_pbb.houg += 1 * _pbh[8]), _pbh[9] >= 1 && (_pbb.houm += 1 * _pbh[9]), _pbh[10] >= 1 && (_pbb.kaih += 1 * _pbh[10])) : 3 == _pbe ? (_pbh[6] > 0 && (_pbb.kaih += 1), _pbh[8] > 0 && (_pbb.raig += 1), _pbh[10] > 0 && (_pbb.houg += 1)) : 4 == _pbe && (_pbh[7] >= 1 && (_pbb.kaih += 1 * _pbh[7]), _pbh[8] >= 1 && (_pbb.raig += 1 * _pbh[8]), _pbh[10] >= 1 && (_pbb.houm += 1 * _pbh[10])), _pbb;
        };
    },
    68685: function(_pbm, _pbn, _pbo) {
        'use strict';
        var _pbp = null;
        var _pbq = this && this.__importDefault || function(_pbr) {
            var _pbs = null;
            return _pbr && _pbr.__esModule ? _pbr : {
                'default': _pbr
            };
        };
        defineModule(_pbn);
        Object.defineProperty(_pbn, '__esModule', {
            'value': true
        }), _pbn.getSlot90PersonalEffect = void 0;
        var _pbt = _pbo(74496),
            _pbu = _pbq(_pbo(18622));
        _pbn.getSlot90PersonalEffect = function(_pbv) {
            var _pbw = null,
                _pbx = new _pbt.SlotItemEffectModel(),
                _pby = new _pbt.SlotItemEffectModel();
            if (142 == _pbv.ship_id ? (_pby.houg += 2, _pby.kaih += 1) : 295 == _pbv.ship_id || 416 == _pbv.ship_id || 417 == _pbv.ship_id ? _pby.houg += 1 : 264 == _pbv.ship_id ? (_pby.houg += 1, _pby.tyku += 1) : 501 != _pbv.ship_id && 506 != _pbv.ship_id && 502 != _pbv.ship_id && 507 != _pbv.ship_id || (_pby.houg += 1), 7 != _pbv.ctype && 13 != _pbv.ctype && 8 != _pbv.ctype && 29 != _pbv.ctype && 9 != _pbv.ctype && 31 != _pbv.ctype || (_pby.houg += 1), _pby.exists()) {
                var _pbz = _pbv.get_slotnums(90);
                _pbx = _pby.multiply(_pbz);
            }
            var _pc0 = [];
            if ('あおば' == _pbv.yomi && (_pc0[1] = 1), 13 != _pbv.ctype && 7 != _pbv.ctype || (_pc0[2] = 1), 0 == _pc0.length) return _pbx;
            for (var _pc1 = 0, _pc2 = 0, _pc3 = 0, _pc4 = _pbv.have_slot_ids(); _pc3 < _pc4.length; _pc3++) {
                var _pc5 = _pc4[_pc3],
                    _pc6 = _pbu.default.model.slot.getMst(_pc5),
                    _pc7 = _pc6.equipType;
                12 != _pc7 && 13 != _pc7 || (_pc6.sakuteki >= 5 && (_pc1 += _pbv.get_slotnums(parseInt(_pc5))), _pc6.taiku >= 2 && (_pc2 += _pbv.get_slotnums(parseInt(_pc5))));
            }
            return _pc2 > 0 && null != _pc0[1] && (_pbx.tyku += 5, _pbx.kaih += 2), _pc1 > 0 && null != _pc0[2] && (_pbx.houg += 3, _pbx.kaih += 2, _pbx.raig += 2), _pbx;
        };
    },
    26078: (_pc8, _pc9, _pca) => {
        'use strict';
        var _pcb = null;
        defineModule(_pc9);
        Object.defineProperty(_pc9, '__esModule', {
            'value': true
        }), _pc9.getSlot93PersonalEffect = void 0;
        var _pcc = _pca(74496);
        _pc9.getSlot93PersonalEffect = function(_pcd) {
            var _pce = null,
                _pcf = new _pcc.SlotItemEffectModel();
            return 'そうりゅう' == _pcd.yomi ? _pcf.houg = 1 : 'ひりゅう' == _pcd.yomi && (_pcf.houg = 3), _pcf;
        };
    },
    20829: (_pcg, _pch, _pci) => {
        'use strict';
        var _pcj = null;
        defineModule(_pch);
        Object.defineProperty(_pch, '__esModule', {
            'value': true
        }), _pch.getSlot94PersonalEffect = void 0;
        var _pck = _pci(74496);
        _pch.getSlot94PersonalEffect = function(_pcl) {
            var _pcm = null,
                _pcn = new _pck.SlotItemEffectModel();
            if (196 == _pcl.ship_id) _pcn.houg = 7;
            else {
                if (197 != _pcl.ship_id) return _pcn;
                _pcn.houg = 3;
            }
            return _pcn;
        };
    },
    6880: (_pco, _pcp, _pcq) => {
        'use strict';
        var _pcr = null;
        defineModule(_pcp);
        Object.defineProperty(_pcp, '__esModule', {
            'value': true
        }), _pcp.getSlot99PersonalEffect = void 0;
        var _pcs = _pcq(74496);
        _pcp.getSlot99PersonalEffect = function(_pct) {
            var _pcu = null,
                _pcv = new _pcs.SlotItemEffectModel();
            return 'そうりゅう' == _pct.yomi ? _pcv.houg = 4 : 'ひりゅう' == _pct.yomi && (_pcv.houg = 1), _pcv;
        };
    },
    21403: (_pcw, _pcx, _pcy) => {
        'use strict';
        var _pcz = null;
        defineModule(_pcx);
        Object.defineProperty(_pcx, '__esModule', {
            'value': true
        }), _pcx.getSlotCorsairMkIIPersonalEffect = void 0;
        var _pd0 = _pcy(74496);
        _pcx.getSlotCorsairMkIIPersonalEffect = function(_pd1) {
            var _pd2 = null,
                _pd3 = new _pd0.SlotItemEffectModel(),
                _pd4 = false,
                _pd5 = new _pd0.SlotItemEffectModel();
            112 == _pd1.ctype && (_pd5.houg += 1, _pd5.tyku += 1, _pd5.kaih += 2, _pd4 = true);
            var _pd6 = _pd1.getCountryName();
            if (67 == _pd1.ctype || 78 == _pd1.ctype || 82 == _pd1.ctype || 88 == _pd1.ctype || 108 == _pd1.ctype || 112 == _pd1.ctype ? (_pd5.houg += 1, _pd5.tyku += 2, _pd5.kaih += 3, _pd4 = true) : 'アメリカ' == _pd6 && (_pd5.houg += 1, _pd5.tyku += 1, _pd5.kaih += 2, _pd4 = true), 0 == _pd4) return _pd3;
            var _pd7 = _pd1.get_slotnums(434) + _pd1.get_slotnums(435);
            return _pd3.add(_pd5.multiply(_pd7)), _pd3;
        };
    },
    9195: (_pd8, _pd9, _pda) => {
        'use strict';
        var _pdb = null;
        defineModule(_pd9);
        Object.defineProperty(_pd9, '__esModule', {
            'value': true
        }), _pd9.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _pdc = _pda(74496);
        _pd9.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_pdd) {
            var _pde = null,
                _pdf = new _pdc.SlotItemEffectModel(),
                _pdg = false,
                _pdh = new _pdc.SlotItemEffectModel();
            if (56 == _pdd.ctype && (_pdh.tais += 3, _pdh.kaih += 2, _pdg = true), 0 == _pdg) return _pdf;
            var _pdi = _pdd.get_slotnums(44) + _pdd.get_slotnums(45) + _pdd.get_slotnums(287) + _pdd.get_slotnums(288);
            return _pdf.add(_pdh.multiply(_pdi)), _pdf;
        };
    },
    93297: (_pdj, _pdk, _pdl) => {
        'use strict';
        var _pdm = null;
        defineModule(_pdk);
        Object.defineProperty(_pdk, '__esModule', {
            'value': true
        }), _pdk.getSlotDomesticSonarPersonalEffect = void 0;
        var _pdn = _pdl(74496);
        _pdk.getSlotDomesticSonarPersonalEffect = function(_pdo) {
            var _pdp = null,
                _pdq = new _pdn.SlotItemEffectModel();
            return 56 == _pdo.ctype && (_pdq.tais += 2, _pdq.kaih += 3), _pdq;
        };
    },
    45482: (_pdr, _pds, _pdt) => {
        'use strict';
        var _pdu = null;
        defineModule(_pds);
        Object.defineProperty(_pds, '__esModule', {
            'value': true
        }), _pds.getSlotOtherSuiseiPersonalEffect = void 0;
        var _pdv = _pdt(74496);
        _pds.getSlotOtherSuiseiPersonalEffect = function(_pdw) {
            var _pdx = null,
                _pdy = new _pdv.SlotItemEffectModel(),
                _pdz = new _pdv.SlotItemEffectModel();
            if (553 == _pdw.ship_id) _pdz.houg = 2;
            else {
                if (554 != _pdw.ship_id) return _pdy;
                _pdz.houg = 2;
            }
            var _pe0 = _pdw.get_slotnums(24) + _pdw.get_slotnums(57) + _pdw.get_slotnums(111);
            return _pdy = _pdz.multiply(_pe0);
        };
    },
    10950: (_pe1, _pe2, _pe3) => {
        'use strict';
        var _pe4 = null;
        defineModule(_pe2);
        Object.defineProperty(_pe2, '__esModule', {
            'value': true
        }), _pe2.getSlotSBD_Type_VS_VBPersonalEffect = void 0;
        var _pe5 = _pe3(74496);
        _pe2.getSlotSBD_Type_VS_VBPersonalEffect = function(_pe6) {
            var _pe7 = null,
                _pe8 = new _pe5.SlotItemEffectModel(),
                _pe9 = false,
                _pea = new _pe5.SlotItemEffectModel();
            'レキシントン' == _pe6.yomi ? (_pea.houg += 4, _pea.houm += 2, _pea.tyku += 1, _pea.kaih += 2, _pea.saku += 2, _pe9 = true) : 'サラトガ' == _pe6.yomi ? (_pea.houg += 2, _pea.houm += 1, _pea.tyku += 1, _pea.kaih += 1, _pea.saku += 1, _pe9 = true) : 'ホーネット' == _pe6.yomi || 'レンジャー' == _pe6.yomi ? (_pea.houg += 1, _pea.houm += 1, _pea.tyku += 1, _pea.kaih += 1, _pe9 = true) : 'ガンビア・ベイ' != _pe6.yomi && 'ラングレー' != _pe6.yomi || (_pea.houg += 1, _pea.kaih += 1, _pe9 = true);
            var _peb = _pe6.get_slotnums(543) + _pe6.get_slotnums(544);
            _pe9 && _pe8.add(_pea.multiply(_peb));
            var _pec = _pe6.haveSlotLevelNumOver(543),
                _ped = _pe6.haveSlotLevelNumOver(544);
            return 'アメリカ' == _pe6.getCountryName() && (_pec[7] >= 1 && (_pe8.houm += 1 * _pec[7]), _pec[8] >= 1 && (_pe8.saku += 1 * _pec[8]), _pec[9] >= 1 && (_pe8.houg += 1 * _pec[9]), _pec[10] >= 1 && (_pe8.houm += 1 * _pec[10]), _ped[7] >= 1 && (_pe8.houg += 1 * _ped[7]), _ped[8] >= 1 && (_pe8.houm += 1 * _ped[8]), _ped[9] >= 1 && (_pe8.tyku += 1 * _ped[9]), _ped[10] >= 1 && (_pe8.houg += 1 * _ped[10])), _pe8;
        };
    },
    45927: (_pee, _pef, _peg) => {
        'use strict';
        var _peh = null;
        defineModule(_pef);
        Object.defineProperty(_pef, '__esModule', {
            'value': true
        }), _pef.getSlotSmokePersonalEffect = void 0;
        var _pei = _peg(74496);
        _pef.getSlotSmokePersonalEffect = function(_pej) {
            var _pek = null,
                _pel = new _pei.SlotItemEffectModel(),
                _pem = false,
                _pen = new _pei.SlotItemEffectModel();
            if (959 == _pej.ship_id && (_pen.kaih += 4, _pem = true), 'ジョンストン' == _pej.yomi || 'サミュエル・B・ロバーツ' == _pej.yomi || 'せんだい' == _pej.yomi || 'はるかぜ' == _pej.yomi || 'かみかぜ' == _pej.yomi || 'しきなみ' == _pej.yomi || 'うらなみ' == _pej.yomi || 'あおば' == _pej.yomi ? (_pen.kaih += 3, _pem = true) : 'いなづま' != _pej.yomi && 'はぐろ' != _pej.yomi && 'はつしも' != _pej.yomi && 'かすみ' != _pej.yomi && 'ふぶき' != _pej.yomi && 'あたご' != _pej.yomi && 'あまぎり' != _pej.yomi && 'はまなみ' != _pej.yomi || (_pen.kaih += 2, _pem = true), 0 == _pem) return _pel;
            var _peo = _pej.get_slotnums(500) + _pej.get_slotnums(501);
            return _pel.add(_pen.multiply(_peo)), _pel;
        };
    },
    75873: (_pep, _peq, _per) => {
        'use strict';
        var _pes = null;
        defineModule(_peq);
        Object.defineProperty(_peq, '__esModule', {
            'value': true
        }), _peq.getSlotSocSeagullPersonalEffect = void 0;
        var _pet = _per(74496);
        _peq.getSlotSocSeagullPersonalEffect = function(_peu) {
            var _pev = null,
                _pew = new _pet.SlotItemEffectModel(),
                _pex = {},
                _pey = false,
                _pez = false;
            'アメリカ' == _peu.getCountryName() && (_pey = true, 3 != _peu.stype && 5 != _peu.stype || (_pez = true)), _peu.get_slotnums(414);
            var _pf0 = _peu.get_slotnums(539);
            _pey && (_pew.saku += 1, _pex[1] = 1), _pez && (_pew.houg += 1, _pew.saku += 1, 110 == _peu.ctype && _pf0 >= 1 && (_pew.houm += 1), _pex[2] = 1);
            var _pf1 = _peu.haveSlotLevelNumOver(414),
                _pf2 = _peu.haveSlotLevelNumOver(539);
            return null != _pex[1] && (_pf1[5] >= 1 && (_pew.kaih += 1), _pf2[3] >= 1 && (_pew.kaih += 1), _pf2[5] >= 1 && (_pew.saku += 1), _pf2[7] >= 1 && (_pew.houm += 1)), null != _pex[2] && (_pf1[3] >= 1 && (_pew.saku += 1), _pf1[8] >= 1 && (_pew.kaih += 1), _pf1[10] >= 1 && (_pew.houg += 1), _pf2[6] >= 1 && (_pew.tyku += 1), _pf2[8] >= 1 && (_pew.kaih += 1), _pf2[9] >= 1 && (_pew.houg += 1), _pf2[10] >= 1 && (_pew.houm += 1)), _pew;
        };
    },
    32666: (_pf3, _pf4, _pf5) => {
        'use strict';
        var _pf6 = null;
        defineModule(_pf4);
        Object.defineProperty(_pf4, '__esModule', {
            'value': true
        }), _pf4.getSlotTokuYonPersonalEffect = void 0;
        var _pf7 = _pf5(74496);
        _pf4.getSlotTokuYonPersonalEffect = function(_pf8) {
            var _pf9 = null,
                _pfa = new _pf7.SlotItemEffectModel(),
                _pfb = false,
                _pfc = new _pf7.SlotItemEffectModel(),
                _pfd = 0,
                _pfe = _pf8.get_slotnums(525),
                _pff = _pf8.get_slotnums(526),
                _pfg = _pfe + _pff;
            if (13 != _pf8.stype && 14 != _pf8.stype || (_pfc.houg += 1, _pfc.raig += 2, _pfc.kaih -= 1, _pfb = true, _pfd = 1, 'い36' != _pf8.yomi && 'い41' != _pf8.yomi || (_pfa.houg += 2, _pfa.raig += 1, _pfa.houm += 2), _pff >= 1 && (_pfa.houg += 1 * _pff, _pfa.raig += 1 * _pff, _pfa.houm += 1 * _pff)), 0 == _pfb) return _pfa;
            if (_pfa.add(_pfc.multiply(_pfg)), 0 == _pfd) return _pfa;
            var _pfh = _pf8.get_each_level_over_nums([525, 526]),
                _pfi = _pfh.slot[525],
                _pfj = _pfh.slot[526];
            if (1 == _pfd) {
                if (_pfi[1] >= 1 || _pfj[1] >= 1) {
                    var _pfk = _pfi[1] + _pfj[1];
                    _pfa.raig += 1 * _pfk;
                }
                if (_pfj[2] >= 1) {
                    var _pfl = _pfi[2] + _pfj[2];
                    _pfa.houg += 1 * _pfl;
                }
                if (_pfi[3] >= 1 || _pfj[3] >= 1) {
                    var _pfm = _pfi[3] + _pfj[3];
                    _pfa.houm += 1 * _pfm;
                }
                if (_pfj[4] >= 1) {
                    var _pfn = _pfi[4] + _pfj[4];
                    _pfa.raig += 1 * _pfn;
                }
                if (_pfi[6] >= 1 || _pfj[6] >= 1) {
                    var _pfo = _pfi[6] + _pfj[6];
                    _pfa.houm += 1 * _pfo;
                }
                if (_pfj[8] >= 1) {
                    var _pfp = _pfi[8] + _pfj[8];
                    _pfa.houg += 1 * _pfp;
                }
                if (_pfi[10] >= 1 || _pfj[10] >= 1) {
                    var _pfq = _pfi[10] + _pfj[10];
                    _pfa.raig += 1 * _pfq;
                }
            }
            return _pfa;
        };
    },
    29805: (_pfr, _pfs, _pft) => {
        'use strict';
        var _pfu = null;
        defineModule(_pfs);
        Object.defineProperty(_pfs, '__esModule', {
            'value': true
        }), _pfs.getSlotType10PersonalEffect = void 0;
        var _pfv = _pft(74496);
        _pfs.getSlotType10PersonalEffect = function(_pfw) {
            var _pfx = null,
                _pfy = new _pfv.SlotItemEffectModel();
            return 662 == _pfw.ship_id || 663 == _pfw.ship_id || 668 == _pfw.ship_id ? (_pfy.houg += 2, _pfy.kaih += 1, _pfy.tais += 3) : 501 != _pfw.ship_id && 506 != _pfw.ship_id && 502 != _pfw.ship_id && 507 != _pfw.ship_id || (_pfy.houg += 2), _pfy;
        };
    },
    58913: (_pfz, _pg0, _pg1) => {
        'use strict';
        var _pg2 = null;
        defineModule(_pg0);
        Object.defineProperty(_pg0, '__esModule', {
            'value': true
        }), _pg0.getSlotType11PersonalEffect = void 0;
        var _pg3 = _pg1(74496);
        _pg0.getSlotType11PersonalEffect = function(_pg4) {
            var _pg5 = null,
                _pg6 = new _pg3.SlotItemEffectModel();
            return 662 == _pg4.ship_id || 663 == _pg4.ship_id || 668 == _pg4.ship_id ? (_pg6.houg += 1, _pg6.kaih += 1, _pg6.tais += 1) : 501 != _pg4.ship_id && 506 != _pg4.ship_id && 502 != _pg4.ship_id && 507 != _pg4.ship_id || (_pg6.houg += 1, _pg6.kaih += 1), _pg6;
        };
    },
    55421: (_pg7, _pg8, _pg9) => {
        'use strict';
        var _pga = null;
        defineModule(_pg8);
        Object.defineProperty(_pg8, '__esModule', {
            'value': true
        }), _pg8.getSlotType25PersonalEffect = void 0;
        var _pgb = _pg9(74496);
        _pg8.getSlotType25PersonalEffect = function(_pgc) {
            var _pgd = null,
                _pge = new _pgb.SlotItemEffectModel();
            return 662 == _pgc.ship_id ? (_pge.tais += 4, _pge.kaih += 1) : 663 != _pgc.ship_id && 668 != _pgc.ship_id || (_pge.tais += 3, _pge.kaih += 1), _pge;
        };
    },
    272: function(_pgf, _pgg, _pgh) {
        'use strict';
        var _pgi = null;
        var _pgj = this && this.__importDefault || function(_pgk) {
            var _pgl = null;
            return _pgk && _pgk.__esModule ? _pgk : {
                'default': _pgk
            };
        };
        defineModule(_pgg);
        Object.defineProperty(_pgg, '__esModule', {
            'value': true
        }), _pgg.getSlotType9PersonalEffect = void 0;
        var _pgm = _pgh(74496),
            _pgn = _pgj(_pgh(18622));
        _pgg.getSlotType9PersonalEffect = function(_pgo) {
            var _pgp = null,
                _pgq = new _pgm.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_pgo.stype]) return _pgq;
            for (var _pgr = 0, _pgs = 0, _pgt = _pgo.have_slot_ids(); _pgs < _pgt.length; _pgs++) {
                var _pgu = _pgt[_pgs];
                if (9 == _pgn.default.model.slot.getMst(_pgu).equipType)
                    for (var _pgv = 0, _pgw = _pgo.have_slots_dict[parseInt(_pgu)]; _pgv < _pgw.length; _pgv++) {
                        var _pgx = _pgw[_pgv].level;
                        _pgr < _pgx && (_pgr = _pgx);
                    }
            }
            return _pgr >= 2 && (_pgq.saku += 1), _pgr >= 4 && (_pgq.houg += 1), _pgr >= 6 && (_pgq.saku += 1), _pgr >= 10 && (_pgq.houg += 1, _pgq.saku += 1), _pgq;
        };
    },
    49964: (_pgy, _pgz, _ph0) => {
        'use strict';
        var _ph1 = null;
        defineModule(_pgz);
        Object.defineProperty(_pgz, '__esModule', {
            'value': true
        }), _pgz.getSlotYellowWingsPersonalEffect = void 0;
        var _ph2 = _ph0(74496);
        _pgz.getSlotYellowWingsPersonalEffect = function(_ph3) {
            var _ph4 = null,
                _ph5 = new _ph2.SlotItemEffectModel(),
                _ph6 = false,
                _ph7 = new _ph2.SlotItemEffectModel();
            'レキシントン' == _ph3.yomi ? (_ph7.houg += 3, _ph7.houm += 2, _ph7.tyku += 1, _ph7.kaih += 2, _ph7.saku += 1, _ph6 = true) : 'サラトガ' == _ph3.yomi ? (_ph7.houg += 2, _ph7.houm += 1, _ph7.tyku += 1, _ph7.kaih += 1, _ph7.saku += 1, _ph6 = true) : 'ホーネット' != _ph3.yomi && 'レンジャー' != _ph3.yomi || (_ph7.houg += 1, _ph7.houm += 1, _ph7.kaih += 1, _ph6 = true);
            var _ph8 = _ph3.get_slotnums(541) + _ph3.get_slotnums(542);
            _ph6 && _ph5.add(_ph7.multiply(_ph8));
            var _ph9 = _ph3.haveSlotLevelNumOver(541),
                _pha = _ph3.haveSlotLevelNumOver(542);
            return 'アメリカ' == _ph3.getCountryName() && (_ph9[7] >= 1 && (_ph5.kaih += 1 * _ph9[7]), _ph9[10] >= 1 && (_ph5.houg += 1 * _ph9[10]), _pha[7] >= 1 && (_ph5.houm += 1 * _pha[7]), _pha[10] >= 1 && (_ph5.houg += 1 * _pha[10])), _ph5;
        };
    },
    54518: (_phb, _phc, _phd) => {
        'use strict';
        var _phe = null;
        defineModule(_phc);
        Object.defineProperty(_phc, '__esModule', {
            'value': true
        }), _phc.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _phf = _phd(74496);
        _phc.getSlot_16InchMkXRensouhou_PersonalEffect = function(_phg) {
            var _phh = null,
                _phi = new _phf.SlotItemEffectModel();
            if (93 == _phg.ctype) {
                var _phj = _phg.get_slotnums(330);
                _phj > 0 && (_phi.houg = _phi.houg + 1 * _phj);
                var _phk = _phg.get_slotnums(331);
                _phk > 0 && (_phi.houg = _phi.houg + 1 * _phk, 1496 != _phg.ship_id && 918 != _phg.ship_id || (_phi.houg = _phi.houg + 1 * _phk, _phi.kaih = _phi.kaih + 1 * _phk));
                var _phl = _phg.get_slotnums(332);
                return _phl > 0 && (_phi.houg = _phi.houg + 1 * _phl, 1496 != _phg.ship_id && 918 != _phg.ship_id || (_phi.houg = _phi.houg + 1 * _phl, _phi.kaih = _phi.kaih + 1 * _phl, _phi.tyku = _phi.tyku + 1 * _phl)), _phi;
            }
            var _phm = new _phf.SlotItemEffectModel();
            if (19 == _phg.ctype ? (_phm.houg = 1, (541 == _phg.ship_id || 573 == _phg.ship_id) && (_phm.houg += 1)) : 88 == _phg.ctype && (_phm.houg = 1, 576 == _phg.ship_id && (_phm.houg += 1)), !_phm.exists()) return _phi;
            var _phn = _phg.get_slotnums(330) + _phg.get_slotnums(331) + _phg.get_slotnums(332);
            return _phi = _phm.multiply(_phn);
        };
    },
    79353: (_pho, _php, _phq) => {
        'use strict';
        var _phr = null;
        defineModule(_php);
        Object.defineProperty(_php, '__esModule', {
            'value': true
        }), _php.getZuiunSeriesEffect = void 0;
        var _phs = _phq(74496);
        _php.getZuiunSeriesEffect = function(_pht) {
            var _phu = null,
                _phv = new _phs.SlotItemEffectModel(),
                _phw = false,
                _phx = new _phs.SlotItemEffectModel();
            if (662 == _pht.ship_id ? (_phv.houg += 2, _phv.kaih += 1) : 663 == _pht.ship_id || 668 == _pht.ship_id || 501 == _pht.ship_id || 506 == _pht.ship_id ? (_phv.houg += 2, _phx.kaih += 1, _phx.tyku += 1, _phw = true) : 502 != _pht.ship_id && 507 != _pht.ship_id || (_phv.houg += 1, _phx.kaih += 1, _phx.tyku += 1, _phw = true), 0 == _phw) return _phv;
            var _phy = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_phz) {
                var _pi0 = null;
                _phy += _pht.get_slotnums(_phz);
            }), _phv.add(_phx.multiply(_phy)), _phv;
        };
    },
    89051: function(_pi1, _pi2, _pi3) {
        'use strict';
        var _pi4 = null;
        var _pi5 = this && this.__createBinding || (Object.create ? function(_pi6, _pi7, _pi8, _pi9) {
                var _pia = null;
                void 0 === _pi9 && (_pi9 = _pi8);
                var _pib = Object.getOwnPropertyDescriptor(_pi7, _pi8);
                _pib && !('get' in _pib ? !_pi7.__esModule : _pib.writable || _pib.configurable) || (_pib = {
                    'enumerable': true,
                    'get': function() {
                        return _pi7[_pi8];
                    }
                }), Object.defineProperty(_pi6, _pi9, _pib);
            } : function(_pic, _pid, _pie, _pif) {
                void 0 === _pif && (_pif = _pie), _pic[_pif] = _pid[_pie];
            }),
            _pig = this && this.__exportStar || function(_pih, _pii) {
                var _pij = null;
                for (var _pik in _pih) 'default' === _pik || Object.prototype.hasOwnProperty.call(_pii, _pik) || _pi5(_pii, _pih, _pik);
            };
        defineModule(_pi2);
        Object.defineProperty(_pi2, '__esModule', {
            'value': true
        }), _pig(_pi3(34165), _pi2), _pig(_pi3(81018), _pi2), _pig(_pi3(56716), _pi2), _pig(_pi3(17713), _pi2), _pig(_pi3(54518), _pi2), _pig(_pi3(66985), _pi2), _pig(_pi3(88102), _pi2), _pig(_pi3(66904), _pi2), _pig(_pi3(98137), _pi2), _pig(_pi3(69954), _pi2), _pig(_pi3(22218), _pi2), _pig(_pi3(88271), _pi2), _pig(_pi3(23035), _pi2), _pig(_pi3(2578), _pi2), _pig(_pi3(17143), _pi2), _pig(_pi3(16164), _pi2), _pig(_pi3(35023), _pi2), _pig(_pi3(44680), _pi2), _pig(_pi3(45749), _pi2), _pig(_pi3(37334), _pi2), _pig(_pi3(29180), _pi2), _pig(_pi3(68685), _pi2), _pig(_pi3(26078), _pi2), _pig(_pi3(20829), _pi2), _pig(_pi3(6880), _pi2), _pig(_pi3(17213), _pi2), _pig(_pi3(40176), _pi2), _pig(_pi3(32889), _pi2), _pig(_pi3(11285), _pi2), _pig(_pi3(96200), _pi2), _pig(_pi3(9115), _pi2), _pig(_pi3(37173), _pi2), _pig(_pi3(21713), _pi2), _pig(_pi3(59823), _pi2), _pig(_pi3(57440), _pi2), _pig(_pi3(29240), _pi2), _pig(_pi3(40885), _pi2), _pig(_pi3(19614), _pi2), _pig(_pi3(87220), _pi2), _pig(_pi3(81367), _pi2), _pig(_pi3(13052), _pi2), _pig(_pi3(94968), _pi2), _pig(_pi3(48658), _pi2), _pig(_pi3(1906), _pi2), _pig(_pi3(61887), _pi2), _pig(_pi3(47970), _pi2), _pig(_pi3(31797), _pi2), _pig(_pi3(45738), _pi2), _pig(_pi3(34718), _pi2), _pig(_pi3(69245), _pi2), _pig(_pi3(18478), _pi2), _pig(_pi3(2899), _pi2), _pig(_pi3(57120), _pi2), _pig(_pi3(74985), _pi2), _pig(_pi3(9234), _pi2), _pig(_pi3(30802), _pi2), _pig(_pi3(97002), _pi2), _pig(_pi3(16748), _pi2), _pig(_pi3(53618), _pi2), _pig(_pi3(72573), _pi2), _pig(_pi3(8955), _pi2), _pig(_pi3(98947), _pi2), _pig(_pi3(44726), _pi2), _pig(_pi3(93065), _pi2), _pig(_pi3(85767), _pi2), _pig(_pi3(38314), _pi2), _pig(_pi3(59747), _pi2), _pig(_pi3(40649), _pi2), _pig(_pi3(13533), _pi2), _pig(_pi3(12138), _pi2), _pig(_pi3(30042), _pi2), _pig(_pi3(33623), _pi2), _pig(_pi3(85630), _pi2), _pig(_pi3(88736), _pi2), _pig(_pi3(49341), _pi2), _pig(_pi3(74306), _pi2), _pig(_pi3(83898), _pi2), _pig(_pi3(71873), _pi2), _pig(_pi3(53122), _pi2), _pig(_pi3(51063), _pi2), _pig(_pi3(91491), _pi2), _pig(_pi3(85495), _pi2), _pig(_pi3(65365), _pi2), _pig(_pi3(98164), _pi2), _pig(_pi3(38114), _pi2), _pig(_pi3(21003), _pi2), _pig(_pi3(77010), _pi2), _pig(_pi3(39126), _pi2), _pig(_pi3(72176), _pi2), _pig(_pi3(33846), _pi2), _pig(_pi3(97157), _pi2), _pig(_pi3(63406), _pi2), _pig(_pi3(66373), _pi2), _pig(_pi3(19707), _pi2), _pig(_pi3(63978), _pi2), _pig(_pi3(92382), _pi2), _pig(_pi3(78415), _pi2), _pig(_pi3(23090), _pi2), _pig(_pi3(18776), _pi2), _pig(_pi3(39656), _pi2), _pig(_pi3(66039), _pi2), _pig(_pi3(64679), _pi2), _pig(_pi3(95953), _pi2), _pig(_pi3(86384), _pi2), _pig(_pi3(65345), _pi2), _pig(_pi3(46514), _pi2), _pig(_pi3(81976), _pi2), _pig(_pi3(89331), _pi2), _pig(_pi3(73973), _pi2), _pig(_pi3(21178), _pi2), _pig(_pi3(5079), _pi2), _pig(_pi3(95014), _pi2), _pig(_pi3(53099), _pi2), _pig(_pi3(76201), _pi2), _pig(_pi3(24931), _pi2), _pig(_pi3(60978), _pi2), _pig(_pi3(74312), _pi2), _pig(_pi3(54350), _pi2), _pig(_pi3(26262), _pi2), _pig(_pi3(45530), _pi2), _pig(_pi3(44053), _pi2), _pig(_pi3(65441), _pi2), _pig(_pi3(33258), _pi2), _pig(_pi3(92168), _pi2), _pig(_pi3(85975), _pi2), _pig(_pi3(98467), _pi2), _pig(_pi3(88348), _pi2), _pig(_pi3(21097), _pi2), _pig(_pi3(37273), _pi2), _pig(_pi3(72694), _pi2), _pig(_pi3(62067), _pi2), _pig(_pi3(87817), _pi2), _pig(_pi3(93526), _pi2), _pig(_pi3(33084), _pi2), _pig(_pi3(97831), _pi2), _pig(_pi3(45482), _pi2), _pig(_pi3(272), _pi2), _pig(_pi3(69377), _pi2), _pig(_pi3(31127), _pi2), _pig(_pi3(79353), _pi2), _pig(_pi3(17274), _pi2), _pig(_pi3(91302), _pi2), _pig(_pi3(82229), _pi2), _pig(_pi3(10325), _pi2), _pig(_pi3(351), _pi2), _pig(_pi3(4050), _pi2), _pig(_pi3(29805), _pi2), _pig(_pi3(58913), _pi2), _pig(_pi3(55421), _pi2), _pig(_pi3(87845), _pi2), _pig(_pi3(17562), _pi2), _pig(_pi3(78466), _pi2), _pig(_pi3(40061), _pi2), _pig(_pi3(9195), _pi2), _pig(_pi3(93297), _pi2), _pig(_pi3(15133), _pi2), _pig(_pi3(55747), _pi2), _pig(_pi3(33155), _pi2), _pig(_pi3(79086), _pi2), _pig(_pi3(2306), _pi2), _pig(_pi3(14386), _pi2), _pig(_pi3(80225), _pi2), _pig(_pi3(17732), _pi2), _pig(_pi3(47169), _pi2), _pig(_pi3(77670), _pi2), _pig(_pi3(79988), _pi2), _pig(_pi3(92253), _pi2), _pig(_pi3(74428), _pi2), _pig(_pi3(75873), _pi2), _pig(_pi3(2631), _pi2), _pig(_pi3(27177), _pi2), _pig(_pi3(94781), _pi2), _pig(_pi3(53908), _pi2), _pig(_pi3(79813), _pi2), _pig(_pi3(16088), _pi2), _pig(_pi3(93733), _pi2), _pig(_pi3(69939), _pi2), _pig(_pi3(33734), _pi2), _pig(_pi3(34432), _pi2), _pig(_pi3(97423), _pi2), _pig(_pi3(23551), _pi2), _pig(_pi3(99791), _pi2), _pig(_pi3(21403), _pi2), _pig(_pi3(6173), _pi2), _pig(_pi3(23934), _pi2), _pig(_pi3(53709), _pi2), _pig(_pi3(88838), _pi2), _pig(_pi3(99790), _pi2), _pig(_pi3(18387), _pi2), _pig(_pi3(70941), _pi2), _pig(_pi3(35025), _pi2), _pig(_pi3(2603), _pi2), _pig(_pi3(78707), _pi2), _pig(_pi3(89058), _pi2), _pig(_pi3(84372), _pi2), _pig(_pi3(96804), _pi2), _pig(_pi3(33896), _pi2), _pig(_pi3(11031), _pi2), _pig(_pi3(71383), _pi2), _pig(_pi3(55888), _pi2), _pig(_pi3(2258), _pi2), _pig(_pi3(38003), _pi2), _pig(_pi3(92174), _pi2), _pig(_pi3(43768), _pi2), _pig(_pi3(73254), _pi2), _pig(_pi3(55734), _pi2), _pig(_pi3(81254), _pi2), _pig(_pi3(65455), _pi2), _pig(_pi3(70362), _pi2), _pig(_pi3(61977), _pi2), _pig(_pi3(43607), _pi2), _pig(_pi3(68086), _pi2), _pig(_pi3(78173), _pi2), _pig(_pi3(22581), _pi2), _pig(_pi3(20418), _pi2), _pig(_pi3(93373), _pi2), _pig(_pi3(13053), _pi2), _pig(_pi3(47874), _pi2), _pig(_pi3(42788), _pi2), _pig(_pi3(57664), _pi2), _pig(_pi3(44990), _pi2), _pig(_pi3(17712), _pi2), _pig(_pi3(83957), _pi2), _pig(_pi3(78539), _pi2), _pig(_pi3(96282), _pi2), _pig(_pi3(49679), _pi2), _pig(_pi3(45927), _pi2), _pig(_pi3(90312), _pi2), _pig(_pi3(86856), _pi2), _pig(_pi3(78123), _pi2), _pig(_pi3(25765), _pi2), _pig(_pi3(29493), _pi2), _pig(_pi3(28221), _pi2), _pig(_pi3(14830), _pi2), _pig(_pi3(54047), _pi2), _pig(_pi3(76054), _pi2), _pig(_pi3(90725), _pi2), _pig(_pi3(93053), _pi2), _pig(_pi3(88792), _pi2), _pig(_pi3(33242), _pi2), _pig(_pi3(59415), _pi2), _pig(_pi3(3296), _pi2), _pig(_pi3(32666), _pi2), _pig(_pi3(36731), _pi2), _pig(_pi3(30450), _pi2), _pig(_pi3(85127), _pi2), _pig(_pi3(87204), _pi2), _pig(_pi3(2380), _pi2), _pig(_pi3(96580), _pi2), _pig(_pi3(15653), _pi2), _pig(_pi3(41410), _pi2), _pig(_pi3(25851), _pi2), _pig(_pi3(6482), _pi2), _pig(_pi3(70332), _pi2), _pig(_pi3(91275), _pi2), _pig(_pi3(72743), _pi2), _pig(_pi3(49964), _pi2), _pig(_pi3(10950), _pi2), _pig(_pi3(57041), _pi2), _pig(_pi3(74608), _pi2);
    },
    82692: function(_pil, _pim, _pin) {
        'use strict';
        var _pio = null;
        var _pip = this && this.__createBinding || (Object.create ? function(_piq, _pir, _pis, _pit) {
                var _piu = null;
                void 0 === _pit && (_pit = _pis);
                var _piv = Object.getOwnPropertyDescriptor(_pir, _pis);
                _piv && !('get' in _piv ? !_pir.__esModule : _piv.writable || _piv.configurable) || (_piv = {
                    'enumerable': true,
                    'get': function() {
                        return _pir[_pis];
                    }
                }), Object.defineProperty(_piq, _pit, _piv);
            } : function(_piw, _pix, _piy, _piz) {
                void 0 === _piz && (_piz = _piy), _piw[_piz] = _pix[_piy];
            }),
            _pj0 = this && this.__setModuleDefault || (Object.create ? function(_pj1, _pj2) {
                var _pj3 = null;
                Object.defineProperty(_pj1, 'default', {
                    'enumerable': true,
                    'value': _pj2
                });
            } : function(_pj4, _pj5) {
                var _pj6 = null;
                _pj4.default = _pj5;
            }),
            _pj7 = this && this.__importStar || function(_pj8) {
                var _pj9 = null;
                if (_pj8 && _pj8.__esModule) return _pj8;
                var _pja = {};
                if (null != _pj8) {
                    for (var _pjb in _pj8) 'default' !== _pjb && Object.prototype.hasOwnProperty.call(_pj8, _pjb) && _pip(_pja, _pj8, _pjb);
                }
                return _pj0(_pja, _pj8), _pja;
            };
        defineModule(_pim);
        Object.defineProperty(_pim, '__esModule', {
            'value': true
        }), _pim.SlotItemEffectUtil = void 0;
        var _pjc, _pjd = _pin(73785),
            _pje = _pj7(_pin(89051)),
            _pjf = _pin(74496);
        ! function(_pjg) {
            var _pjh = null;
            _pjg.getSlotitemEffect = function(_pji, _pjj) {
                var _pjk = null;
                if (null == _pji || null == _pjj) return null;
                for (var _pjl = new _pjd.SlotItemEffectParamModel(_pji, _pjj), _pjm = [{
                        'isExecute': Boolean(_pjl.get_type3_nums(9)),
                        'execFunc': _pje.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_type3_nums(10)),
                        'execFunc': _pje.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_type3_nums(11)),
                        'execFunc': _pje.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_type3_nums(12)) || Boolean(_pjl.get_type3_nums(13)),
                        'execFunc': _pje.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_type3_nums(25)),
                        'execFunc': _pje.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_type3_nums(29)),
                        'execFunc': _pje.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_type3_nums(42)),
                        'execFunc': _pje.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(3)) || Boolean(_pjl.get_slotnums(122)) || Boolean(_pjl.get_slotnums(533)),
                        'execFunc': _pje.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(5)),
                        'execFunc': _pje.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(12)),
                        'execFunc': _pje.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(15)),
                        'execFunc': _pje.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(18)) || Boolean(_pjl.get_slotnums(52)),
                        'execFunc': _pje.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(19)),
                        'execFunc': _pje.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(24)) || Boolean(_pjl.get_slotnums(57)) || Boolean(_pjl.get_slotnums(111)),
                        'execFunc': _pje.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(26)) || Boolean(_pjl.get_slotnums(62)) || Boolean(_pjl.get_slotnums(79)) || Boolean(_pjl.get_slotnums(80)) || Boolean(_pjl.get_slotnums(81)) || Boolean(_pjl.get_slotnums(207)) || Boolean(_pjl.get_slotnums(208)),
                        'execFunc': _pje.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(35)),
                        'execFunc': _pje.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(39)) || Boolean(_pjl.get_slotnums(40)) || Boolean(_pjl.get_slotnums(49)) || Boolean(_pjl.get_slotnums(131)),
                        'execFunc': _pje.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(30)) || Boolean(_pjl.get_slotnums(410)),
                        'execFunc': _pje.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(44)) || Boolean(_pjl.get_slotnums(45)) || Boolean(_pjl.get_slotnums(287)) || Boolean(_pjl.get_slotnums(288)),
                        'execFunc': _pje.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(46)) || Boolean(_pjl.get_slotnums(47)) || Boolean(_pjl.get_slotnums(149)) || Boolean(_pjl.get_slotnums(132)) || Boolean(_pjl.get_slotnums(438)),
                        'execFunc': _pje.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(47)) || Boolean(_pjl.get_slotnums(438)),
                        'execFunc': _pje.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(50)),
                        'execFunc': _pje.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(58)),
                        'execFunc': _pje.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(59)),
                        'execFunc': _pje.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(60)) || Boolean(_pjl.get_slotnums(154)) || Boolean(_pjl.get_slotnums(219)),
                        'execFunc': _pje.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(61)),
                        'execFunc': _pje.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(61)),
                        'execFunc': _pje.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(63)),
                        'execFunc': _pje.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(66)) || Boolean(_pjl.get_slotnums(220)),
                        'execFunc': _pje.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(67)),
                        'execFunc': _pje.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(69)),
                        'execFunc': _pje.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(70)),
                        'execFunc': _pje.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(76)) || Boolean(_pjl.get_slotnums(114)),
                        'execFunc': _pje.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(78)),
                        'execFunc': _pje.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(79)) || Boolean(_pjl.get_slotnums(81)),
                        'execFunc': _pje.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(82)),
                        'execFunc': _pje.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(84)),
                        'execFunc': _pje.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(85)),
                        'execFunc': _pje.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(87)),
                        'execFunc': _pje.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(90)),
                        'execFunc': _pje.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(93)),
                        'execFunc': _pje.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(94)),
                        'execFunc': _pje.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(99)),
                        'execFunc': _pje.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(100)),
                        'execFunc': _pje.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(104)),
                        'execFunc': _pje.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(106)) || Boolean(_pjl.get_slotnums(450)),
                        'execFunc': _pje.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(115)),
                        'execFunc': _pje.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(118)) || Boolean(_pjl.get_slotnums(521)),
                        'execFunc': _pje.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(119)),
                        'execFunc': _pje.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(121)),
                        'execFunc': _pje.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(122)),
                        'execFunc': _pje.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(123)),
                        'execFunc': _pje.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(124)),
                        'execFunc': _pje.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(128)) || Boolean(_pjl.get_slotnums(281)),
                        'execFunc': _pje.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(129)),
                        'execFunc': _pje.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(130)),
                        'execFunc': _pje.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(132)),
                        'execFunc': _pje.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(136)),
                        'execFunc': _pje.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(139)),
                        'execFunc': _pje.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(143)),
                        'execFunc': _pje.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(144)),
                        'execFunc': _pje.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(147)) || Boolean(_pjl.get_slotnums(393)) || Boolean(_pjl.get_slotnums(394)),
                        'execFunc': _pje.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(149)),
                        'execFunc': _pje.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(165)) || Boolean(_pjl.get_slotnums(216)),
                        'execFunc': _pje.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(171)),
                        'execFunc': _pje.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(174)),
                        'execFunc': _pje.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(179)),
                        'execFunc': _pje.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(184)),
                        'execFunc': _pje.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(188)),
                        'execFunc': _pje.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(189)),
                        'execFunc': _pje.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(194)),
                        'execFunc': _pje.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(195)),
                        'execFunc': _pje.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(204)),
                        'execFunc': _pje.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(217)),
                        'execFunc': _pje.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(220)),
                        'execFunc': _pje.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(227)),
                        'execFunc': _pje.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(228)),
                        'execFunc': _pje.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(229)),
                        'execFunc': _pje.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(234)),
                        'execFunc': _pje.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(235)),
                        'execFunc': _pje.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(237)) || Boolean(_pjl.get_slotnums(322)) || Boolean(_pjl.get_slotnums(323)) || Boolean(_pjl.get_slotnums(490)),
                        'execFunc': _pje.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(237)),
                        'execFunc': _pje.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(238)) || Boolean(_pjl.get_slotnums(239)),
                        'execFunc': _pje.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(242)),
                        'execFunc': _pje.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(243)),
                        'execFunc': _pje.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(244)),
                        'execFunc': _pje.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(245)) || Boolean(_pjl.get_slotnums(246)) || Boolean(_pjl.get_slotnums(468)),
                        'execFunc': _pje.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(247)),
                        'execFunc': _pje.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(252)),
                        'execFunc': _pje.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(266)),
                        'execFunc': _pje.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(266)),
                        'execFunc': _pje.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(267)) || Boolean(_pjl.get_slotnums(366)),
                        'execFunc': _pje.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(267)) || Boolean(_pjl.get_slotnums(366)),
                        'execFunc': _pje.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(268)),
                        'execFunc': _pje.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(271)),
                        'execFunc': _pje.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(275)),
                        'execFunc': _pje.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(277)),
                        'execFunc': _pje.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(278)),
                        'execFunc': _pje.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(279)),
                        'execFunc': _pje.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(282)),
                        'execFunc': _pje.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(283)),
                        'execFunc': _pje.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(285)),
                        'execFunc': _pje.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(286)),
                        'execFunc': _pje.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(286)),
                        'execFunc': _pje.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(286)),
                        'execFunc': _pje.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(287)),
                        'execFunc': _pje.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(288)),
                        'execFunc': _pje.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(289)),
                        'execFunc': _pje.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(290)),
                        'execFunc': _pje.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(291)),
                        'execFunc': _pje.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(292)),
                        'execFunc': _pje.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(293)),
                        'execFunc': _pje.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(294)),
                        'execFunc': _pje.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(295)),
                        'execFunc': _pje.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(296)),
                        'execFunc': _pje.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(297)),
                        'execFunc': _pje.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(298)) || Boolean(_pjl.get_slotnums(299)) || Boolean(_pjl.get_slotnums(300)),
                        'execFunc': _pje.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(301)),
                        'execFunc': _pje.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(302)),
                        'execFunc': _pje.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(303)),
                        'execFunc': _pje.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(304)),
                        'execFunc': _pje.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(305)) || Boolean(_pjl.get_slotnums(306)),
                        'execFunc': _pje.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(307)),
                        'execFunc': _pje.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(308)),
                        'execFunc': _pje.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(310)) || Boolean(_pjl.get_slotnums(518)),
                        'execFunc': _pje.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(313)),
                        'execFunc': _pje.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(314)),
                        'execFunc': _pje.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(315)),
                        'execFunc': _pje.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(316)),
                        'execFunc': _pje.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(317)),
                        'execFunc': _pje.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(318)),
                        'execFunc': _pje.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(319)),
                        'execFunc': _pje.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(320)),
                        'execFunc': _pje.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(322)),
                        'execFunc': _pje.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(323)),
                        'execFunc': _pje.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(324)) || Boolean(_pjl.get_slotnums(325)),
                        'execFunc': _pje.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(326)),
                        'execFunc': _pje.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(327)),
                        'execFunc': _pje.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(328)),
                        'execFunc': _pje.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(329)),
                        'execFunc': _pje.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(330)) || Boolean(_pjl.get_slotnums(331)) || Boolean(_pjl.get_slotnums(332)),
                        'execFunc': _pje.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(335)),
                        'execFunc': _pje.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(336)),
                        'execFunc': _pje.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(337)),
                        'execFunc': _pje.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(338)),
                        'execFunc': _pje.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(339)),
                        'execFunc': _pje.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(340)),
                        'execFunc': _pje.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(341)),
                        'execFunc': _pje.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(342)),
                        'execFunc': _pje.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(343)),
                        'execFunc': _pje.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(344)),
                        'execFunc': _pje.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(345)),
                        'execFunc': _pje.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(346)),
                        'execFunc': _pje.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(347)),
                        'execFunc': _pje.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(356)) || Boolean(_pjl.get_slotnums(357)),
                        'execFunc': _pje.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(358)),
                        'execFunc': _pje.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(359)),
                        'execFunc': _pje.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(360)) || Boolean(_pjl.get_slotnums(361)),
                        'execFunc': _pje.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(362)) || Boolean(_pjl.get_slotnums(363)),
                        'execFunc': _pje.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(364)),
                        'execFunc': _pje.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(365)),
                        'execFunc': _pje.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(367)),
                        'execFunc': _pje.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(368)),
                        'execFunc': _pje.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(369)),
                        'execFunc': _pje.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(370)),
                        'execFunc': _pje.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(371)),
                        'execFunc': _pje.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(372)),
                        'execFunc': _pje.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(373)),
                        'execFunc': _pje.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(374)),
                        'execFunc': _pje.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(375)),
                        'execFunc': _pje.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(376)),
                        'execFunc': _pje.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(377)),
                        'execFunc': _pje.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(378)),
                        'execFunc': _pje.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(379)),
                        'execFunc': _pje.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(380)),
                        'execFunc': _pje.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(381)),
                        'execFunc': _pje.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(382)) || Boolean(_pjl.get_slotnums(509)),
                        'execFunc': _pje.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(383)),
                        'execFunc': _pje.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(384)),
                        'execFunc': _pje.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(385)),
                        'execFunc': _pje.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(386)),
                        'execFunc': _pje.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(387)),
                        'execFunc': _pje.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(389)),
                        'execFunc': _pje.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(390)),
                        'execFunc': _pje.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(391)),
                        'execFunc': _pje.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(392)),
                        'execFunc': _pje.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(397)),
                        'execFunc': _pje.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(398)),
                        'execFunc': _pje.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(399)),
                        'execFunc': _pje.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(400)),
                        'execFunc': _pje.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(407)),
                        'execFunc': _pje.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(408)),
                        'execFunc': _pje.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(409)),
                        'execFunc': _pje.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(411)),
                        'execFunc': _pje.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(412)),
                        'execFunc': _pje.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(413)),
                        'execFunc': _pje.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(414)) || Boolean(_pjl.get_slotnums(539)),
                        'execFunc': _pje.getSlotSocSeagullPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(415)),
                        'execFunc': _pje.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(419)),
                        'execFunc': _pje.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(420)),
                        'execFunc': _pje.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(421)),
                        'execFunc': _pje.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(422)),
                        'execFunc': _pje.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(423)),
                        'execFunc': _pje.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(424)),
                        'execFunc': _pje.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(425)),
                        'execFunc': _pje.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(426)) || Boolean(_pjl.get_slotnums(427)) || Boolean(_pjl.get_slotnums(428)) || Boolean(_pjl.get_slotnums(429)),
                        'execFunc': _pje.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(430)),
                        'execFunc': _pje.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(434)) || Boolean(_pjl.get_slotnums(435)),
                        'execFunc': _pje.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(437)),
                        'execFunc': _pje.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(438)),
                        'execFunc': _pje.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(439)),
                        'execFunc': _pje.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(440)) || Boolean(_pjl.get_slotnums(441)),
                        'execFunc': _pje.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(442)) || Boolean(_pjl.get_slotnums(443)),
                        'execFunc': _pje.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(447)),
                        'execFunc': _pje.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(450)),
                        'execFunc': _pje.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(451)),
                        'execFunc': _pje.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(455)),
                        'execFunc': _pje.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(456)),
                        'execFunc': _pje.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(457)) || Boolean(_pjl.get_slotnums(461)),
                        'execFunc': _pje.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(458)),
                        'execFunc': _pje.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(463)),
                        'execFunc': _pje.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(464)),
                        'execFunc': _pje.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(465)),
                        'execFunc': _pje.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(466)),
                        'execFunc': _pje.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(467)),
                        'execFunc': _pje.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(470)) || Boolean(_pjl.get_slotnums(529)),
                        'execFunc': _pje.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(471)),
                        'execFunc': _pje.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(472)),
                        'execFunc': _pje.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(473)),
                        'execFunc': _pje.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(474)),
                        'execFunc': _pje.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(478)),
                        'execFunc': _pje.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(483)),
                        'execFunc': _pje.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(485)),
                        'execFunc': _pje.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(486)),
                        'execFunc': _pje.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(487)),
                        'execFunc': _pje.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(488)),
                        'execFunc': _pje.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(489)) || Boolean(_pjl.get_slotnums(491)),
                        'execFunc': _pje.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(500)) || Boolean(_pjl.get_slotnums(501)),
                        'execFunc': _pje.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(502)),
                        'execFunc': _pje.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(503)),
                        'execFunc': _pje.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(505)),
                        'execFunc': _pje.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(506)),
                        'execFunc': _pje.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(507)) || Boolean(_pjl.get_slotnums(508)),
                        'execFunc': _pje.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(510)),
                        'execFunc': _pje.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(511)) || Boolean(_pjl.get_slotnums(512)),
                        'execFunc': _pje.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(517)),
                        'execFunc': _pje.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(518)),
                        'execFunc': _pje.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(519)),
                        'execFunc': _pje.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(520)),
                        'execFunc': _pje.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(521)),
                        'execFunc': _pje.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(522)) || Boolean(_pjl.get_slotnums(523)),
                        'execFunc': _pje.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(524)),
                        'execFunc': _pje.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(525)) || Boolean(_pjl.get_slotnums(526)),
                        'execFunc': _pje.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(527)),
                        'execFunc': _pje.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(528)),
                        'execFunc': _pje.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(530)),
                        'execFunc': _pje.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(531)),
                        'execFunc': _pje.getSlot531PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(534)) || Boolean(_pjl.get_slotnums(535)),
                        'execFunc': _pje.getSlot13_8cmRensouhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(536)) || Boolean(_pjl.get_slotnums(537)),
                        'execFunc': _pje.getSlot15_2cmSanrensouSyuhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(538)),
                        'execFunc': _pje.getSlot538PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(540)),
                        'execFunc': _pje.getSlot540PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(541)) || Boolean(_pjl.get_slotnums(542)),
                        'execFunc': _pje.getSlotYellowWingsPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(543)) || Boolean(_pjl.get_slotnums(544)),
                        'execFunc': _pje.getSlotSBD_Type_VS_VBPersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(545)),
                        'execFunc': _pje.getSlot545PersonalEffect
                    }, {
                        'isExecute': Boolean(_pjl.get_slotnums(549)),
                        'execFunc': _pje.getSlot549PersonalEffect
                    }], _pjn = new _pjf.SlotItemEffectModel(), _pjo = 0, _pjp = _pjm; _pjo < _pjp.length; _pjo++) {
                    var _pjq = _pjp[_pjo];
                    if (_pjq.isExecute) {
                        var _pjr = _pjq.execFunc(_pjl);
                        0, _pjn.add(_pjr);
                    }
                }
                return _pjn;
            };
        }(_pjc || (_pim.SlotItemEffectUtil = _pjc = {}));
    },
}
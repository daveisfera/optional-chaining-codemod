// @flow
import _ from "lodash/fp";
import { getOr } from "lodash/fp";
import gettOr from "lodash/fp/getOr";
const foo1  = _.getOr(1, "a.b.c");
const foo2  = getOr(2, "a.b.c");
const foo3  = gettOr(3, "a.b.c");
const foo4  = gettOr(4, "a[2].c");
const foo5  = gettOr(5, ["a", foo5, "c"]);
const foo6  = gettOr(6, ["a", 321, "c"]);
const foo7  = gettOr(7, ["a", this.smthng, "c"]);
const foo8  = gettOr(8, ["a", foo5, "c"]);
const foo9 = _.getOr([], `a.${foo5}`);
const foo10 = _.getOr({}, `a.${foo5}.smthng`);
const foo11 = _.getOr([], someKey);
const foo12 = _.getOr({}, that.bar);
const foo13 = getOr([], 'bar[0]["60"]');
const foo14 = getOr({}, "bar.data-thing");
const foo15 = getOr("test", "data-bar[0].baz.data-thing");
const foo16 = getOr("works", 0);
const foo17 = getOr("works", [0]);
const foo18 = getOr("works", 1);
const foo19 = getOr("works", [1]);

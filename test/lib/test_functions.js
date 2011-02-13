function compareSegmentLists(list1, list2) {
	equals(list1.length, list2.length, 'segment count');
	if(list1.length == list2.length) {
		for(var i = 0, l = list1.length; i < l; i++) {
			compareSegments(list1[i], list2[i]);
		}
	}
}

function compareSegments(segment1, segment2) {
	// Convert comparison value through Segment.read, to not have to provide
	// all handles all the time.
	segment2 = Segment.read([segment2]);
	var points = ['point', 'handleIn', 'handleOut'];
	for(var i = 0; i < 3; i++) {
		equals(!!segment1[points[i]], !!segment2[points[i]], 'have ' + points[i]);
		if(segment1[points[i]] && segment2[points[i]])
			comparePoints(segment1[points[i]], segment2[points[i]], points[i]);
	}
}

function comparePoints(point1, point2, message) {
	equals(Math.round(point1.x * 100), Math.round(point2.x * 100),
			message ? message + ' x' : undefined);
	equals(Math.round(point1.y * 100), Math.round(point2.y * 100),
			message ? message + ' y' : undefined);
}

function compareRectangles(rect1, rect2) {
	equals(rect1.x, rect2.x);
	equals(rect1.y, rect2.y);
	equals(rect1.width, rect2.width);
	equals(rect1.height, rect2.height);
}
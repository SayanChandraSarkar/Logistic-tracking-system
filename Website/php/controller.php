<?php



date_default_timezone_set("Asia/Kolkata");




//validate GET request
function validateGet($reqFields = [], $optionalFields = [], $db = false)
{
	if ($_SERVER['REQUEST_METHOD'] != "GET") {
		throwError("Invalid method");
	}

	$data = $_GET;

	// check for all required keys
	foreach ($reqFields as $key) {
		//if not exists the error
		if (!array_key_exists($key, $data)) {
			throwError($key . " is required");
		}

		//if empty then error
		if (empty($data[$key])) {
			throwError($key . " is empty");
		}

		if ($db && is_string($data[$key])) {
			$data[$key] = $db->escape($data[$key]);
		}
	}


	// check for all optional  keys
	foreach ($optionalFields as $key) {
		//if empty then remove
		if (isset($data[$key])) {
			if ($data[$key] != "0" && empty($data[$key])) {
				unset($data[$key]);
			} else {
				if ($db && is_string($data[$key])) {
					$data[$key] = $db->escape($data[$key]);
				}
			}
		}
	}

	return $data;
}


//validate POST request
function validatePost($reqFields = [], $optionalFields = [], $db = false)
{
	if ($_SERVER['REQUEST_METHOD'] != "POST") {
		throwError("Invalid method");
	}

	$json = file_get_contents('php://input');
	$data = json_decode($json, true);


	if (!$data) {
		throwError("No data posted");
	}

	// check for all required keys
	foreach ($reqFields as $key) {
		if (!array_key_exists($key, $data)) {
			throwError($key . " is required");
		}

		if ($db && is_string($data[$key])) {
			$data[$key] = $db->escape($data[$key]);
		}
	}



	// check for all optional  keys
	foreach ($optionalFields as $key) {
		//if empty then remove
		if (isset($data[$key])) {
			if ($data[$key] != "0" && empty($data[$key])) {
				unset($data[$key]);
			} else {
				if ($db && is_string($data[$key])) {
					$data[$key] = $db->escape($data[$key]);
				}
			}
		}
	}

	return $data;
}



//log json for dev env
function logger($mgs)
{
	if (ENV != "production") {
		echo json_encode($mgs);
	}
}



// throw error reponse
function throwError($mgs, $code = 400)
{
	header("HTTP/1.1 $code Bad request");
	header('content-type: application/json');

	if (is_array($mgs)) {
		die(json_encode(array_merge($mgs, ["error" => $code])));
	}

	die(json_encode(array("error" => $code, "message" => $mgs)));
}


// renpode success message
function response($data)
{
	header('content-type: application/json');
	die(json_encode($data));
}

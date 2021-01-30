<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'reswordpress_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-6(>{%/]60~9q@hjqFra3~5U6zc9`WzH_8=D2cWKT{@!h{BKz w-zW> 1|pR_<=S' );
define( 'SECURE_AUTH_KEY',  '367 x#.Q*WSJq<` QVLNuj<`U5/;ojgHYQ*D#u3L[wVJZ>VA2|5~`Ss0tyQ}!=d?' );
define( 'LOGGED_IN_KEY',    '05d$-n32FuGgSm|,ff*YwALjhz[(tksjF$},.yx4-j@@Y{%7nX|}RBjIyjavuIa?' );
define( 'NONCE_KEY',        '.DZ[JA sf_4*1R.KbzT+B[q%uslceBk0FQDZxzU=6#idl#]]i[}$u#*5_5sHR3D`' );
define( 'AUTH_SALT',        'F_q&5ptE=}o].zzKJrIIagq`/U)FQf/*xm</Hrh}qrGU/uES0 N2f:%cY~UtvG[?' );
define( 'SECURE_AUTH_SALT', 'l{=pLPY(jf+$NGAdv&lG)X-<pBS+;HWJR7YS}ATeMUJE)M]1{^|Ow]gDgYO`li7A' );
define( 'LOGGED_IN_SALT',   'O:5peSKEyc3r_T5-u}Yc$_zl@LAa4#|jS,,]@ 6jw^*q@56yunq<0}vj&O#{KoBL' );
define( 'NONCE_SALT',       '8vu;rRj$[W7uo<7]nzgL.wSMKV/&T~a[#7jI6u^;pnr:7fZ}-!q<S0/a:u28kp6`' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


define('FS_METHOD', 'direct');
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

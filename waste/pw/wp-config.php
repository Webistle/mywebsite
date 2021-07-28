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
define( 'DB_NAME', 'restest_db' );

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
define( 'AUTH_KEY',         'nnzUj{3fmRL^c=$s{St+xl)w(]zI=VXd[e|*~E7oDb)L;NBe*wCs; jcWqVx}a,Z' );
define( 'SECURE_AUTH_KEY',  'H&iQTduMAy<4)g/QaUR?,{GQ@B5..`#2K7Ey3.OiOC.|#G+1S5HTU|*H#$eIv,E^' );
define( 'LOGGED_IN_KEY',    'Gx_<u]8^6`)eURumM  `czu,Kn{sajzf0]r~a75yQ(H>~U{{`:AW<Yg$g _Kfahk' );
define( 'NONCE_KEY',        '%sL>$}pU$P_8kWw)9$4EK8!+FlJ_cx^hhU8OQPe@_Fc(*n#AIj:A~s)dTgC`F]&!' );
define( 'AUTH_SALT',        '}jEn3qSoOX31H+Hx u(]oQJ}mS}M{A6|;zlQ/LgJ7%Ar<elxKNYYzo)roBE8qKU4' );
define( 'SECURE_AUTH_SALT', 'nlZ?2B!3383~$4*E ao -5T^A))l*Kgb]s[IM9:d}l9_Tcd1R!2 -o`!^0Es{_UZ' );
define( 'LOGGED_IN_SALT',   '2q+iqkl9rc/#nfP3G6S<2F*nFL,_sJ_}*jYcgt&*-^|{gGYUvbT&%DfOv7!EK==M' );
define( 'NONCE_SALT',       ']jh510g[/;!SL-qvpo8c<bH|W!]DJGgJ:u*oYJm]L-Y@3bC?PNwVfaU-S6*/tXxg' );

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

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
define( 'DB_NAME', 'testwp_db' );

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
define( 'AUTH_KEY',         'xy/%Vri+.(]J-pQT[ eOyb>Y/m#I]7?~ht9|2#6`Tk~*)-4)UxQ[oHIs~SHxZKDZ' );
define( 'SECURE_AUTH_KEY',  'P2D;Gzmrh^QWHl~_2-$ d-J!&2ObKQ%EV;,M&:__,O|C]>1-FQ>/X>-~(v<_h9,-' );
define( 'LOGGED_IN_KEY',    'nk&8vHZuRW2*s#c/U+50yD%p<D2n0FAWUz^FK}4V:~s*q~*!=e3=(=.>[3B}HUBq' );
define( 'NONCE_KEY',        '*/J?ed*Ia.q^Q1DYr6^sEipI=Fn<KoNa?3a^tm,) W3/]YAE@J&/=/}X}cCWqiu4' );
define( 'AUTH_SALT',        '76g@:{)u 9__aUp+FJ3tz@8(EgFJ?Z/{IP)uD<UC4QadF,1%}E:p3#B)gQr)[4k|' );
define( 'SECURE_AUTH_SALT', 'uf~>C`kSWRX$-GuhT_K(FvDoVJiSpv_W},tPW9la[)[<g;_|)J?<Re,Tj) Im-1/' );
define( 'LOGGED_IN_SALT',   'K)H3LB YSdSL<tg$`qggu~7seb/qSXxXaYMc@VfF|H.+NhT#w`7gqaugkilH3PTt' );
define( 'NONCE_SALT',       'aaThQs[R8W=1ZG4R,,&7|$[e=^f+c,y8:.^#A8T3g`6ZIU$%3f1iWLw&qe/_k)N*' );

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

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
